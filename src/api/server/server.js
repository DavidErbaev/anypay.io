var express = require('express');
var bodyParser = require("body-parser");
var ip = require('ip');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies
app.use(bodyParser.json()); // for json encoded bodies

function createServer(params = {}) {
    const start = Date.now()

    const method = params.method !== undefined ? params.method : "POST";
    const logging = params.logging !== undefined ? params.logging : true;
    const checkArray = Array.isArray(method);
    let url;
    
    if (params.url == `/${params.url}`) {
        url = params.url
    } else if (params.url == `${params.url}`) {
        url = "/" + params.url
    }

    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    if (checkArray) {
    	if (method.length == 0) throw new APIError(`Specify at least one method for the handler in the array.`);
    	method.map(function (method_array, count) {
    		if (method[count] == "GET") {
    			app.get(url, urlencodedParser, (req, res) => {
                    params.handler(req, res)
                    return;
                });
    		}
    		if (method[count] == "POST") {
    			app.post(url, urlencodedParser, (req, res) => {
                    params.handler(req, res)
                    return;
                });
    		}
    	})
    } else {
    	if (method == "POST") {
            app.post(url, urlencodedParser, (req, res) => {
                params.handler(req, res);
                return;
            });
        } else if (method == "GET") {
            app.get(url, urlencodedParser, function (req, res) {
                params.handler(req, res)
                return;
            });
        }
    }
    
    const end = Date.now() - start;
    app.listen(params.port, (err) => {
        if (err) {
            throw new APIError(`Error:\n${err}`);
        }

		if (logging) { 
			console.log(`STARTED SESSION:\nURL: http://${ip.address()}:${params.port}${url}\nMETHOD: ${method}\nPING: ${end}ms`);
    	}
    });
}

module.exports = {
    createServer
}