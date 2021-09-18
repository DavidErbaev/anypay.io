"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.API = void 0;
var axios_1 = __importDefault(require("axios"));
var querystring_1 = __importDefault(require("querystring"));
var utils_1 = __importDefault(require("./utils"));
var apiError_1 = __importDefault(require("./error/apiError"));
var moduleError_1 = __importDefault(require("./error/moduleError"));
var server_1 = require("./server");
var API = /** @class */ (function () {
    function API(anypay) {
        this.agent = anypay.agent;
        this.merchantUrl = anypay.merchantUrl;
        this.apiUrl = anypay.apiUrl;
        this.options = anypay.options;
        if (!this.options.api_id) {
            throw new moduleError_1["default"]("Invalid api_id");
        }
        else if (!this.options.api_key) {
            throw new moduleError_1["default"]("Invalid apiKey");
        }
        else if (!this.options.merchant_id) {
            throw new moduleError_1["default"]("Invalid merchant_id");
        }
        else if (!this.options.secretKey) {
            throw new moduleError_1["default"]("Invalid secretKey");
        }
    }
    API.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.call({
                            method: "balance",
                            params: {
                                sign: utils_1["default"].generateHash("balance" + this.options.api_id + this.options.api_key, "sha256")
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.getRates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.call({
                            method: "rates",
                            params: {
                                sign: utils_1["default"].generateHash("rates" + this.options.api_id + this.options.api_key, "sha256")
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.getCommissions = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.project_id = params.project_id || this.options.merchant_id;
                        return [4 /*yield*/, this.call({
                                method: "commissions",
                                params: __assign(__assign({}, params), { sign: utils_1["default"].generateHash("commissions" + this.options.api_id + params.project_id + this.options.api_key, "sha256") })
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.getPayments = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.project_id = params.project_id || this.options.merchant_id;
                        return [4 /*yield*/, this.call({
                                method: "payments",
                                params: __assign(__assign({}, params), { sign: utils_1["default"].generateHash("payments" + this.options.api_id + params.project_id + this.options.api_key, "sha256") })
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.getServiceIP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.call({
                            method: "ip-notification",
                            params: {
                                sign: utils_1["default"].generateHash("ip-notification" + this.options.api_id + this.options.api_key, "sha256")
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.createSession = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!params.url) {
                    throw new moduleError_1["default"]("You did not indicate what address the requests will come.");
                }
                else if (!params.handler) {
                    throw new moduleError_1["default"]("Specify the handler");
                }
                params.port = params.port || 3888;
                return [2 /*return*/, (0, server_1.createServer)(params)];
            });
        });
    };
    API.prototype.createPaymentLink = function (params) {
        var url = this.merchantUrl + "?";
        params.merchant_id = params.merchant_id || this.options.merchant_id;
        var queryString = querystring_1["default"].stringify(__assign(__assign({}, params), { sign: utils_1["default"].generateHash(params.currency + ":" + params.amount + ":" + this.options.secretKey + ":" + params.merchant_id + ":" + params.pay_id, "md5") }));
        return url + queryString;
    };
    API.prototype.createPayout = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.call({
                            method: "create-payout",
                            params: __assign(__assign({}, params), { sign: utils_1["default"].generateHash("create-payout" + this.options.api_id + params.payout_id + params.payout_type + params.amount + params.wallet + this.options.api_key, "sha256") })
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    API.prototype.call = function (_a) {
        var method = _a.method, params = _a.params, _b = _a.headers, headers = _b === void 0 ? {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        } : _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = this.apiUrl + "/" + method + "/" + this.options.api_id;
                        return [4 /*yield*/, (0, axios_1["default"])({
                                url: url,
                                headers: headers,
                                params: params,
                                httpsAgent: this.agent
                            })["catch"](function (error) {
                                throw new moduleError_1["default"](error.message);
                            })];
                    case 1:
                        response = _c.sent();
                        if (response.data.result) {
                            return [2 /*return*/, response.data];
                        }
                        if (response.data.error) {
                            throw new apiError_1["default"](response.data.error.message, Number(response.data.error.code));
                        }
                        throw new moduleError_1["default"]("Unknown error");
                }
            });
        });
    };
    return API;
}());
exports.API = API;
