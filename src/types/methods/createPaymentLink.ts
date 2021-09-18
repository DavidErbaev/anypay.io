/* eslint-disable @typescript-eslint/no-explicit-any */
type PaymentCurrency = "RUB" | "UAH" | "BYN" | "KZT" | "USD" | "EUR" | string;

type PaymentMethod =
	| "card"
	| "applepay"
	| "googlepay"
	| "samsungpay"
	| "qiwi"
	| "ym"
	| "wm"
	| "payeer"
	| "btc"
	| "eth"
	| "bch"
	| "ltc"
	| "pm"
	| "advcash"
	| "exmo"
	| "mts"
	| "beeline"
	| "megafon"
	| "tele2"
	| "term"
	| "bank"
	| "contact"
	| "unistream"
	| string;

export default interface ICreatePaymentLinkParams {
	merchant_id?: number;
	pay_id: number;
	amount: number;
	currency: PaymentCurrency;
	desc?: string;
	email?: string;
	phone?: number;
	method?: PaymentMethod;
	success_url?: string;
	fail_url?: string;
	lang?: string;
	[key: string]: any;
}