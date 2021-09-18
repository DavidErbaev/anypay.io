export interface IPaymentsParams {
	project_id?: number;
	trans_id?: number;
	pay_id?: number;
	offset?: number;
}

type PaymentStatus =
	| "paid"
	| "waiting"
	| "refund"
	| "canceled"
	| "expired"
	| "error"
	| string;

interface IPayment {
	transaction_id: number;
	pay_id: number;
	status: PaymentStatus;
	method: string;
	amount: number;
	currency: string;
	profit: number;
	email: string;
	desc: string;
	date: string;
	pay_date: string;
}

export interface IPaymentsResponse {
	total?: number;
	payments: Record<string, IPayment> | null;
}