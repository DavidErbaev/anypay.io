type PayoutType = "qiwi" | "ym" | "wm" | "mp" | "card" | string;
type WalletCurrency = "RUB" | "UAH" | string;
type CommissionType = "payment" | "balance" | string;

type PayoutStatus = "paid" | "in_process" | "canceled" | "blocked" | string;

export interface ICreatePayoutParams {
	payout_id: number;
	payout_type: PayoutType;
	amount: number;
	wallet: string;
	wallet_currency?: WalletCurrency;
	commission_type?: CommissionType;
	status_url?: string;
}

export interface ICreatePayoutResponse {
	transaction_id: number;
	payout_id: number;
	payout_type: PayoutType;
	status: PayoutStatus;
	amount: number;
	commission: number;
	commission_type: CommissionType;
	rate: number;
	wallet: string;
	balance: number;
	date: string;
	complete_date: string;
}