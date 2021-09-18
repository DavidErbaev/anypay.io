/// <reference types="node" />
import * as https from "https";
export interface IAnyPayOptions {
    api_id: string;
    api_key: string;
    secretKey: string;
    merchant_id?: number;
    apiUrl?: string;
    merchantUrl?: string;
    httpsAgent?: https.Agent;
}
