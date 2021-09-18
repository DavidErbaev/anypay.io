"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.AnyPay = void 0;
var https = __importStar(require("https"));
var api_1 = require("./api");
var defaultOptions = {
    merchantUrl: "https://anypay.io/merchant",
    apiUrl: "https://anypay.io/api",
    agent: new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 1000
    })
};
var AnyPay = /** @class */ (function () {
    function AnyPay(params) {
        this.options = params;
        this.apiUrl = params.apiUrl || defaultOptions.apiUrl;
        this.merchantUrl = params.merchantUrl || defaultOptions.merchantUrl;
        this.agent = params.httpsAgent || defaultOptions.agent;
        this.api = new api_1.API(this);
    }
    /**
     *
     * @param {Transfer data} options
     * @returns
     */
    AnyPay.prototype.setOptions = function (options) {
        Object.assign(this.options, options);
        return this;
    };
    return AnyPay;
}());
exports.AnyPay = AnyPay;
