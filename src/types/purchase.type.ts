export interface PurchaseAttributes {
    id?: string;
    userId: string;
    casaId: string;
    totalPrice: number;
    paymentMethod: 'contado' | 'cuotas';
    amountPaid: number;
    installments?: number;
    progress: number;
    estimatedDelivery?: Date;
    status: 'en progreso' | 'finalizado' | 'cancelado';
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}