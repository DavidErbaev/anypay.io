const fetch = require("node-fetch"),
    {
        URLSearchParams
    } = require("url"),
    sha256 = require("sha256"),
    md5 = require('md5'),
    ip = require('ip'),
    express = require("express"),
    app = express(),
    {
        APIError
    } = require("./apierror");

class API {
    constructor(anypay) {
        this.anypay = anypay;
        this.agent = this.anypay.agent;
        this.apiUrl = this.anypay.apiUrl;
        this.options = this.anypay.options;

        if (!this.options.apiId) {
            throw new APIError(`Invalid apiId`)
        } else if (!this.options.apiKey) {
            throw new APIError(`Invalid apiKey`)
        } else if (!this.options.secretKey) {
            throw new APIError(`Invalid secretKey`)
        }
    }
    /**
     * Getting the balance
     */
    getBalance() {
        return this.call({
            method: "balance",
            sign: this.generateHash(
                `balance${this.options.apiId}${this.options.apiKey}`,
                'sha256'),
        });
    }
    /**
     * Creating a payment link
     */
    createPaymentLink(params = {}) {
        const key = this.options.secretKey;
        return new Promise(function(resolve, reject) {
            if (!params.merchant) {
                throw new APIError(`Invalid merchant id`)
            } else if (!params.amount) {
                throw new APIError(`Invalid amount`)
            } else if (!params.currency) {
                throw new APIError(`Invalid currency`)
            } else if (!params.pay_id) {
                throw new APIError(`Invalid pay id`)
            } else if (!params.params) {
                throw new APIError(`Specify paramert / parameters`)
            }
            let start = Date.now()
            let url = `https://anypay.io/merchant?`
            let parameters = new URLSearchParams({
                merchant_id: params.merchant,
                amount: params.amount,
                pay_id: params.pay_id,
                currency: params.currency,
                desc: params.desc ? params.desc : 'use module anypay.io',
                ...params.params,
                sign: md5(
                    `${params.currency}:${params.amount}:${key}:${params.merchant}:${params.pay_id}`
                )
            })
            let end = Date.now() - start;
            
            return resolve({
                url: url + parameters,
                ping: end+'ms'
            });
        })
    }
    /**
     * Getting exchange rates
     */
    getRates() {
        return this.call({
            method: "rates",
            sign: this.generateHash(
                `rates${this.options.apiId}${this.options.apiKey}`,
                'sha256'),
        });
    }
    /**
     *
     * @param {NumberConstructor} projectId
     */
    getCommissions(projectId) {
        if (!projectId) {
            throw new APIError("Invalid project id");
        }

        return this.call({
            method: "commissions",
            params: {
                sign: this.generateHash(
                    `commissions${this.options.apiId}${projectId}${this.options.apiKey}`,
                    'sha256'),
                project_id: projectId,
            },
        });
    }
    /**
     *
     * @param {NumberConstructor} projectId
     * @param {NumberConstructor} count
     */
    getPayments(projectId, count) {
        if (!projectId) {
            throw new APIError("Invalid project id");
        } else if (!count) {
            throw new APIError(
                "Specify the amount needed to select specific subset transactions"
            );
        }

        return this.call({
            method: "payments",
            params: {
                sign: this.generateHash(
                    `payments${this.options.apiId}${projectId}${this.options.apiKey}`,
                    'sha256'),
                project_id: projectId,
                offset: count,
            },
        });
    }
    /**
     * Getting a pay list
     */
    getPayouts() {
        return this.call({
            method: "payouts",
            sign: this.generateHash(
                `payouts${this.options.apiId}${this.options.apiKey}`,
                'sha256'),
        });
    }
    /**
     * Getting a list of service IP addresses
     */
    getIps() {
        return this.call({
            method: "ip-notification",
            sign: this.generateHash(
                `ip-notification${this.options.apiId}${this.options.apiKey}`,
                'sha256'),
        });
    }
    /**
     *
     * @param {JSON} params
     */
    createPayout(params = {}) {
        if (!params.payout_id) {
            throw new APIError(
                "You did not enter a unique payout number in the seller’s system."
            );
        } else if (!params.payout_type) {
            throw new APIError(
                "Specify the amount needed to select specific subset transactions."
            );
        } else if (!params.amount) {
            throw new APIError("You did not specify the withdrawal amount.");
        } else if (!params.amount < 50) {
            throw new APIError("The minimum withdrawal of funds from 50 rubles.");
        } else if (!wallet) {
            throw new APIError("Enter wallet / card number.");
        }

        return this.call({
            method: "create-payout",
            params: {
                ...params,
                sign: this.generateHash(
                    `payments${this.options.apiId}${params.payout_id}${params.payout_type}${params.amount}${params.wallet}${this.options.apiKey}`,
                    'sha256'),
            },
        });
    }

    async createSession(ports, params = {}) {
        var port = ports || process.env.PORT

        if (!params.url) {
            throw new APIError(`You did not indicate what address the requests will come.`)
        }
        if (!params.handler) {
            throw new APIError(`Specify the handler`)
        }

        app.get(params.url, async function(req, res) {
            await params.handler(req, res);
        })

        app.listen(port, function(err) {
            if (err) {
                throw new APIError(`Error:\n${err}`)
            }

            console.log(`STARTED SESSION:\nURL: http://${ip.address()}:${port}${params.url}`);
        });
    }
    /**
     *
     * @param {JSON} request
     */
    async call(request = {}) {
        let response,
            headers = {
                "Content-Type": "application/json",
                connection: "keep-alive",
            };
        let url = null,
            body = null;

        let __return;
        ({
            __return,
            url,
            response
        } = await this.callMethod(
            request,
            url,
            response,
            headers,
            body
        ));
        return __return;
    }
    /**
     *
     * @param {*} request
     * @param {*} url
     * @param {json} response
     * @param {json} headers
     * @param {*} body
     */
    async callMethod(request, url, response, headers, body) {
        if (request.params) {
            url = this.generateUrl({
                url: `${this.apiUrl}/${request.method}/${this.options.apiId}?`,
                query: request.params,
            });
        } else if (!request.sign) {
            url = `${this.apiUrl}/${request.method}`;
        } else if (request.sign) {
            url = `${this.apiUrl}/${request.method}/${this.options.apiId}?sign=${request.sign}`;
        }
        response = await fetch(url, {
            method: "POST",
            headers: headers,
            body,
            agent: this.agent,
        });
        this.response = await response.json();
        return {
            __return: this.response,
            url,
            response
        };
    }

    generateUrl(params = {}) {
        let url = `${params.url}${new URLSearchParams(params.query)}`;

        return url;
    }

    generateHash(text, type) {
        if (type == "sha256") {
            let sign = sha256(text);

            return sign;
        } else if (type == "md5") {
            let sign = md5(text)

            return sign;
        }
    }
}

exports.API = API;