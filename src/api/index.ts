/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import https from "https";
import querystring from "querystring";

import { AnyPay } from "..";
import utils from "./utils";
import APIError from "./error/apiError";
import ModuleError from "./error/moduleError";

import { IAnyPayOptions } from "../types/AnyPay";
import { IServerOptions } from "../types/createServer";
import { createServer } from "./server";

import IRatesResponse from "../types/methods/rates";
import ICreatePaymentLinkParams from "../types/methods/createPaymentLink";
import INotifyIPResponse from "../types/methods/notifyIP";

import {
	IPaymentsParams,
	IPaymentsResponse,
} from "./../types/methods/payments";
import {
	ICommissionsParams,
	ICommissionsResponse,
} from "../types/methods/commissions";
import {
	ICreatePayoutParams,
	ICreatePayoutResponse,
} from "./../types/methods/createPayout";

class API {
    public apiUrl: string;
    public merchantUrl: string;
    public agent: https.Agent;
    public options: IAnyPayOptions;

    constructor(anypay: AnyPay) {
        this.agent = anypay.agent;
        this.merchantUrl = anypay.merchantUrl;
		this.apiUrl = anypay.apiUrl;
		this.options = anypay.options;

		if (!this.options.api_id) {
			throw new ModuleError(`Invalid api_id`);
		} else if (!this.options.api_key) {
			throw new ModuleError(`Invalid apiKey`);
        } else if (!this.options.merchant_id) {
            throw new ModuleError(`Invalid merchant_id`);
        } else if (!this.options.secretKey) {
			throw new ModuleError(`Invalid secretKey`);
        }
    }

    public async getBalance(): Promise<number> {
		const response = await this.call({
			method: "balance",
			params: {
				sign: utils.generateHash(
					`balance${this.options.api_id}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
    }
    
    public async getRates(): Promise<IRatesResponse> {
		const response = await this.call({
			method: "rates",
			params: {
				sign: utils.generateHash(
					`rates${this.options.api_id}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
    }
    
    public async getCommissions(
		params: ICommissionsParams = {},
	): Promise<ICommissionsResponse> {
		params.project_id = params.project_id || this.options.merchant_id;
		const response = await this.call({
			method: "commissions",
			params: {
				...params,
				sign: utils.generateHash(
					`commissions${this.options.api_id}${params.project_id}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
    }
    
    public async getPayments(
		params: IPaymentsParams = {},
	): Promise<IPaymentsResponse> {
		params.project_id = params.project_id || this.options.merchant_id;
		const response = await this.call({
			method: "payments",
			params: {
				...params,
				sign: utils.generateHash(
					`payments${this.options.api_id}${params.project_id}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
	}

	public async getServiceIP(): Promise<INotifyIPResponse> {
		const response = await this.call({
			method: "ip-notification",
			params: {
				sign: utils.generateHash(
					`ip-notification${this.options.api_id}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
    }
    
    async createSession(
        params: IServerOptions
    ): Promise<void> {
        if (!params.url) {
            throw new ModuleError(`You did not indicate what address the requests will come.`)
        } else if (!params.handler) {
            throw new ModuleError(`Specify the handler`)
        }

        params.port = params.port || 3888
        return createServer(params);
    }

    public createPaymentLink(params: ICreatePaymentLinkParams): string {
		const url = this.merchantUrl + "?";
		params.merchant_id = params.merchant_id || this.options.merchant_id;
		const queryString = querystring.stringify({
			...params,
			sign: utils.generateHash(
				`${params.currency}:${params.amount}:${this.options.secretKey}:${params.merchant_id}:${params.pay_id}`,
				"sha256",
			),
		});
		return url + queryString;
	}

    public async createPayout(
		params: ICreatePayoutParams,
	): Promise<ICreatePayoutResponse> {
		const response = await this.call({
			method: "create-payout",
			params: {
				...params,
				sign: utils.generateHash(
					`create-payout${this.options.api_id}${params.payout_id}${params.payout_type}${params.amount}${params.wallet}${this.options.api_key}`,
					"sha256",
				),
			},
		});
		return response.result;
	}

    public async call({
		method,
		params,
		headers = {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
	}: {
		method?: string;
		params?: Record<string, any>;
		headers?: Record<string, any>;
	}): Promise<any> {
		const url = `${this.apiUrl}/${method}/${this.options.api_id}`;
		const response = await axios({
			url,
			headers,
			params,
			httpsAgent: this.agent,
		}).catch((error: { message: any; }) => {
			throw new ModuleError(error.message);
		});

		if (response.data.result) {
			return response.data;
		}

		if (response.data.error) {
			throw new APIError(
				response.data.error.message,
				Number(response.data.error.code),
			);
		}
		throw new ModuleError("Unknown error");
	}
}

export { API };
