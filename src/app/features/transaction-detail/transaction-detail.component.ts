import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../../core/services/data.service';
import { Transaction } from '../../../core/models/transaction.model';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    HighlightDirective
  ],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss'
})
export class TransactionDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);

  readonly transaction = signal<Transaction | null>(null);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  readonly transactionId = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return id ?? '';
  });

  readonly formattedAmount = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    const prefix = tx.type === 'income' ? '+' : tx.type === 'expense' ? '-' : '';
    return `${prefix}$${tx.amount.toFixed(2)}`;
  });

  readonly amountClass = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    return tx.type === 'income' ? 'positive' : tx.type === 'expense' ? 'negative' : 'pending';
  });

  readonly statusClass = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    return tx.status.toLowerCase();
  });

  readonly isHighlighted = signal(false);

  ngOnInit(): void {
    this.loadTransaction();
  }

  private loadTransaction(): void {
    const id = this.transactionId();
    if (!id) {
      this.error.set('ID de transacción no proporcionado');
      this.isLoading.set(false);
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.dataService.getTransactionById(id).subscribe({
      next: (tx) => {
        this.transaction.set(tx);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar la transacción. Por favor, intente de nuevo.');
        this.isLoading.set(false);
        console.error('Error cargando transacción:', err);
      }
    });
  }

  toggleHighlight(): void {
    this.isHighlighted.update(v => !v);
  }

  retry(): void {
    this.loadTransaction();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'food': 'restaurant',
      'transport': 'directions_car',
      'shopping': 'shopping_bag',
      'entertainment': 'movie',
      'utilities': 'bolt',
      'health': 'local_hospital',
      'travel': 'flight',
      'education': 'school',
      'salary': 'account_balance',
      'transfer': 'swap_horiz',
      'investment': 'trending_up',
      'other': 'receipt'
    };
    return icons[category.toLowerCase()] || 'receipt';
  }

  trackByFn(index: number, item: any): number {
    return item.id ?? index;
  }
}