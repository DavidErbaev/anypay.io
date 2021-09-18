/// <reference types="node" />
import * as https from "https";
import { IAnyPayOptions } from "./types/AnyPay";
import { API } from "./api";
declare class AnyPay {
    options: IAnyPayOptions;
    api: API;
    apiUrl: string;
    merchantUrl: string;
    agent: https.Agent;
    constructor(params: IAnyPayOptions);
    /**
     *
     * @param {Transfer data} options
     * @returns
     */
    setOptions(options: IAnyPayOptions): AnyPay;
}
export { AnyPay };
