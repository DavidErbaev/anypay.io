var express = require('express');
var bodyParser = require("body-parser");
var ip = require('ip');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies
app.use(bodyParser.json()); // for json encoded bodies

function createServer(params = {}) {
    let start = Date.now()

    var method = params.method !== undefined ? params.method : "POST", url;
    if (params.url == `/${params.url}`) {
        url = params.url
    } else if (params.url == `${params.url}`) {
        url = "/" + params.url
    }

    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    if (params.method.length <= 2) {
        params.method.map(function (method, i) {
            if (method == "POST") {
                app.post(url, urlencodedParser, (req, res) => {
                    return params.handler(req, res);
                });
            } else if (method == "GET") {
                app.get(url, urlencodedParser, function (req, res) {
                    return params.handler(req, res);
                });
            }
        })
    } else {
        if (method == "POST") {
            app.post(url, urlencodedParser, (req, res) => {
                return params.handler(req, res);
            });
        } else if (method == "GET") {
            app.get(url, urlencodedParser, function (req, res) {
                return params.handler(req, res);
            });
        }
    }
    let end = Date.now() - start;

    app.listen(params.port, (err) => {
        if (err) {
            throw new APIError(`Error:\n${err}`);
        }

        console.log(`STARTED SESSION:\nURL: http://${ip.address()}:${params.port}${url}\nMETHOD: ${method}\nPING: ${end}ms`);
    });
}

module.exports = {
    createServer
}