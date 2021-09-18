import * as https from "https";

import utils from "./api/utils"
import { IAnyPayOptions } from "./types/AnyPay";
import { API } from "./api"

const defaultOptions = {
	merchantUrl: `https://anypay.io/merchant`,
	apiUrl: "https://anypay.io/api",
	agent: new https.Agent({
		keepAlive: true,
		keepAliveMsecs: 1000,
	}),
};

class AnyPay {
    public options: IAnyPayOptions;
    public api: API;
    public apiUrl: string;
	public merchantUrl: string;
	public agent: https.Agent;

    constructor (params: IAnyPayOptions) {
        this.options = params;
        this.apiUrl = params.apiUrl || defaultOptions.apiUrl;
		this.merchantUrl = params.merchantUrl || defaultOptions.merchantUrl;
		this.agent = params.httpsAgent || defaultOptions.agent;
		this.api = new API(this);
    }
    /**
     * 
     * @param {Transfer data} options
     * @returns 
     */
    public setOptions(options: IAnyPayOptions): AnyPay {
        Object.assign(this.options, options);
		return this;
    }
}

export { AnyPay };