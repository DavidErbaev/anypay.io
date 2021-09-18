/// <reference types="node" />
import https from "https";
import { AnyPay } from "..";
import { IAnyPayOptions } from "../types/AnyPay";
import { IServerOptions } from "../types/createServer";
import IRatesResponse from "../types/methods/rates";
import ICreatePaymentLinkParams from "../types/methods/createPaymentLink";
import INotifyIPResponse from "../types/methods/notifyIP";
import { IPaymentsParams, IPaymentsResponse } from "./../types/methods/payments";
import { ICommissionsParams, ICommissionsResponse } from "../types/methods/commissions";
import { ICreatePayoutParams, ICreatePayoutResponse } from "./../types/methods/createPayout";
declare class API {
    apiUrl: string;
    merchantUrl: string;
    agent: https.Agent;
    options: IAnyPayOptions;
    constructor(anypay: AnyPay);
    getBalance(): Promise<number>;
    getRates(): Promise<IRatesResponse>;
    getCommissions(params?: ICommissionsParams): Promise<ICommissionsResponse>;
    getPayments(params?: IPaymentsParams): Promise<IPaymentsResponse>;
    getServiceIP(): Promise<INotifyIPResponse>;
    createSession(params: IServerOptions): Promise<void>;
    createPaymentLink(params: ICreatePaymentLinkParams): string;
    createPayout(params: ICreatePayoutParams): Promise<ICreatePayoutResponse>;
    call({ method, params, headers, }: {
        method?: string;
        params?: Record<string, any>;
        headers?: Record<string, any>;
    }): Promise<any>;
}
export { API };
