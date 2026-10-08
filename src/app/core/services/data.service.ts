import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { environment } from '../../../environments/environment';

/**
 * Servicio central para manejo de datos y consumo de APIs.
 * Proporciona métodos para obtener, crear y actualizar transacciones financieras.
 * Implementa manejo de errores y caching básico utilizando Angular Signals.
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBaseUrl}/transactions`;

  // Signals para manejo reactivo de estado
  private transactions = signal<Transaction[]>([]);
  private loading = signal<boolean>(false);
  private error = signal<string | null>(null);

  constructor() {
    // Efecto para reiniciar error cuando se carga nueva data
    effect(() => {
      if (this.loading()) {
        this.error.set(null);
      }
    });
  }

  /**
   * Obtiene todas las transacciones con opciones de filtrado y paginación.
   * @param params Parámetros de filtrado (opcional)
   * @returns Observable de Transaction[]
   */
  getTransactions(params?: {
    page?: number;
    limit?: number;
    type?: string;
    status?: string;
    minAmount?: number;
    maxAmount?: number;
    dateFrom?: string;
    dateTo?: string;
  }): Observable<Transaction[]> {
    this.loading.set(true);
    let httpParams = new HttpParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.append(key, value.toString());
        }
      });
    }

    return this.http.get<Transaction[]>(this.apiUrl, { params: httpParams }).pipe(
      catchError((err) => {
        this.error.set(`Error al obtener transacciones: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Obtiene una transacción específica por ID.
   * @param id ID de la transacción
   * @returns Observable de Transaction
   */
  getTransactionById(id: string): Observable<Transaction> {
    this.loading.set(true);
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`).pipe(
      catchError((err) => {
        this.error.set(`Error al obtener transacción ${id}: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Crea una nueva transacción.
   * @param transaction Datos de la transacción a crear
   * @returns Observable de Transaction
   */
  createTransaction(transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Observable<Transaction> {
    this.loading.set(true);
    return this.http.post<Transaction>(this.apiUrl, transaction).pipe(
      catchError((err) => {
        this.error.set(`Error al crear transacción: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Actualiza una transacción existente.
   * @param id ID de la transacción a actualizar
   * @param transaction Datos actualizados de la transacción
   * @returns Observable de Transaction
   */
  updateTransaction(id: string, transaction: Partial<Transaction>): Observable<Transaction> {
    this.loading.set(true);
    return this.http.patch<Transaction>(`${this.apiUrl}/${id}`, transaction).pipe(
      catchError((err) => {
        this.error.set(`Error al actualizar transacción ${id}: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Señal que indica si se están cargando datos.
   * @returns Signal<boolean>
   */
  isLoading() {
    return this.loading.asReadonly();
  }

  /**
   * Señal que contiene el último error ocurrido.
   * @returns Signal<string | null>
   */
  getError() {
    return this.error.asReadonly();
  }

  /**
   * Señal que contiene las transacciones cargadas.
   * @returns Signal<Transaction[]>
   */
  getTransactionsSignal() {
    return this.transactions.asReadonly();
  }

  /**
   * Refresca manualmente las transacciones.
   * @param params Parámetros de filtrado (opcional)
   */
  refreshTransactions(params?: {
    page?: number;
    limit?: number;
    type?: string;
    status?: string;
    minAmount?: number;
    maxAmount?: number;
    dateFrom?: string;
    dateTo?: string;
  }) {
    this.getTransactions(params).subscribe({
      next: (data) => {
        this.transactions.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
      }
    });
  }
}