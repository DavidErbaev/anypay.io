"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createServer = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var ip_1 = __importDefault(require("ip"));
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].urlencoded({ extended: true })); // for encoded bodies
app.use(body_parser_1["default"].json()); // for json encoded bodies
function createServer(params) {
    var method = params.method !== undefined ? params.method : "POST";
    var logging = params.logging !== undefined ? params.logging : true;
    var url = "";
    if (params.url == "/" + params.url) {
        url = params.url;
    }
    else if (params.url == "" + params.url) {
        url = "/" + params.url;
    }
    var urlencodedParser = body_parser_1["default"].urlencoded({ extended: false });
    if (method == "POST") {
        app.post(url, urlencodedParser, function (req, res) { return params.handler(req, res); });
    }
    else if (method == "GET") {
        app.get(url, urlencodedParser, function (req, res) { return params.handler(req, res); });
    }
    app.listen(params.port, function () {
        if (logging) {
            console.log("STARTED SESSION:\nURL: http://" + ip_1["default"].address() + ":" + params.port + url + "\nMETHOD: " + method);
        }
    });
}
exports.createServer = createServer;
