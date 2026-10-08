/**
 * Modelo de datos para transacciones financieras.
 * Representa una operación monetaria entre cuentas o entidades.
 */
export interface Transaction {
  /**
   * Identificador único de la transacción.
   */
  id: string;

  /**
   * Tipo de transacción (ej: transferencia, pago, depósito).
   */
  type: 'transfer' | 'payment' | 'deposit' | 'withdrawal' | 'refund';

  /**
   * Estado actual de la transacción.
   */
  status: 'pending' | 'completed' | 'failed' | 'reversed' | 'cancelled';

  /**
   * Monto de la transacción.
   */
  amount: number;

  /**
   * Moneda en formato ISO (ej: USD, EUR).
   */
  currency: string;

  /**
   * Descripción opcional de la transacción.
   */
  description?: string;

  /**
   * Cuenta origen de la transacción.
   */
  sourceAccount: string;

  /**
   * Cuenta destino de la transacción.
   */
  destinationAccount: string;

  /**
   * Fecha de creación de la transacción en formato ISO.
   */
  createdAt: string;

  /**
   * Fecha de última actualización de la transacción en formato ISO.
   */
  updatedAt: string;

  /**
   * Metadatos adicionales asociados a la transacción.
   */
  metadata?: {
    [key: string]: unknown;
  };
}

/**
 * Modelo para creación de transacciones (sin IDs ni fechas generadas).
 */
export type CreateTransaction = Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Modelo para filtrado de transacciones.
 */
export interface TransactionFilter {
  page?: number;
  limit?: number;
  type?: string;
  status?: string;
  minAmount?: number;
  maxAmount?: number;
  dateFrom?: string;
  dateTo?: string;
}