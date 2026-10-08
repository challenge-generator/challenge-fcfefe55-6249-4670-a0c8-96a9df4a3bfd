import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';

import { Transaction, TransactionFilter } from '../../core/models/transaction.model';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit, OnDestroy {
  private readonly dataService = inject(DataService);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();

  // Señales para estado reactivo
  readonly transactions = signal<Transaction[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly currentPage = signal<number>(0);
  readonly pageSize = signal<number>(10);
  readonly totalTransactions = signal<number>(0);
  readonly sortField = signal<string>('createdAt');
  readonly sortDirection = signal<'asc' | 'desc'>('desc');

  // Filtros
  readonly filterForm: FormGroup = this.fb.group({
    search: ['', [Validators.minLength(2), Validators.maxLength(100)]],
    status: [''],
    type: [''],
    dateFrom: [''],
    dateTo: [''],
    minAmount: [null, [Validators.min(0)]],
    maxAmount: [null, [Validators.min(0)]]
  });

  // Computed signals
  readonly filteredTransactions = computed(() => {
    const txs = this.transactions();
    const filter = this.filterForm.value;
    
    return txs.filter(tx => {
      if (filter.status && tx.status !== filter.status) return false;
      if (filter.type && tx.type !== filter.type) return false;
      if (filter.search) {
        const search = filter.search.toLowerCase();
        const matchesSearch = 
          tx.id.toLowerCase().includes(search) ||
          tx.description?.toLowerCase().includes(search) ||
          tx.recipientName?.toLowerCase().includes(search);
        if (!matchesSearch) return false;
      }
      if (filter.minAmount && tx.amount < filter.minAmount) return false;
      if (filter.maxAmount && tx.amount > filter.maxAmount) return false;
      return true;
    });
  });

  readonly hasTransactions = computed(() => this.transactions().length > 0);
  readonly isFilterActive = computed(() => {
    const f = this.filterForm.value;
    return !!(f.search || f.status || f.type || f.dateFrom || f.dateTo || f.minAmount || f.maxAmount);
  });

  readonly statusOptions = [
    { value: '', label: 'Todos' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'completed', label: 'Completado' },
    { value: 'failed', label: 'Fallido' },
    { value: 'cancelled', label: 'Cancelado' }
  ];

  readonly typeOptions = [
    { value: '', label: 'Todos' },
    { value: 'transfer', label: 'Transferencia' },
    { value: 'payment', label: 'Pago' },
    { value: 'deposit', label: 'Depósito' },
    { value: 'withdrawal', label: 'Retiro' }
  ];

  readonly displayedColumns = ['id', 'date', 'recipient', 'amount', 'type', 'status', 'actions'];

  constructor() {
    // Effect para logging de cambios en transacciones
    effect(() => {
      const count = this.transactions().length;
      console.log(`[TransactionList] Transacciones cargadas: ${count}`);
    });
  }

  ngOnInit(): void {
    this.loadTransactions();
    this.setupFilterSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupFilterSubscription(): void {
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.currentPage.set(0);
        this.loadTransactions();
      });
  }

  loadTransactions(): void {
    this.loading.set(true);
    this.error.set(null);

    const filter: TransactionFilter = {
      page: this.currentPage(),
      size: this.pageSize(),
      sort: this.sortField(),
      order: this.sortDirection(),
      ...this.filterForm.value
    };

    this.dataService.getTransactions(filter)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.transactions.set(response.data || response.items || []);
          this.totalTransactions.set(response.total || response.count || 0);
          this.loading.set(false);
        },
        error: (err) => {
          this.handleError(err);
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadTransactions();
  }

  onSortChange(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      this.sortField.set('createdAt');
      this.sortDirection.set('desc');
    } else {
      this.sortField.set(sort.active);
      this.sortDirection.set(sort.direction as 'asc' | 'desc');
    }
    this.loadTransactions();
  }

  clearFilters(): void {
    this.filterForm.reset({
      search: '',
      status: '',
      type: '',
      dateFrom: '',
      dateTo: '',
      minAmount: null,
      maxAmount: null
    });
    this.currentPage.set(0);
    this.loadTransactions();
  }

  refreshData(): void {
    this.loadTransactions();
    this.notificationService.show('Datos actualizados', 'success');
  }

  viewTransactionDetails(id: string): void {
    console.log(`[TransactionList] Ver detalles de transacción: ${id}`);
  }

  private handleError(error: unknown): void {
    this.loading.set(false);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al cargar transacciones';
    this.error.set(errorMessage);
    
    this.snackBar.open(
      `Error: ${errorMessage}`,
      'Cerrar',
      { duration: 5000, horizontalPosition: 'end', verticalPosition: 'top' }
    );

    this.notificationService.show(errorMessage, 'error');
  }

  getStatusClass(status: string): string {
    const statusClasses: Record<string, string> = {
      'pending': 'status-pending',
      'completed': 'status-completed',
      'failed': 'status-failed',
      'cancelled': 'status-cancelled'
    };
    return statusClasses[status] || 'status-default';
  }

  getTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'transfer': 'Transferencia',
      'payment': 'Pago',
      'deposit': 'Depósito',
      'withdrawal': 'Retiro'
    };
    return typeLabels[type] || type;
  }

  formatAmount(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(d);
  }

  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }
}