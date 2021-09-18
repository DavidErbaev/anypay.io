import express from "express";
import bodyParser from "body-parser";
import ip from "ip";

const app = express();

import { IServerOptions } from "../../types/createServer";

app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies
app.use(bodyParser.json()); // for json encoded bodies

function createServer(params: IServerOptions): void {
    const method = params.method !== undefined ? params.method : "POST";
    const logging: boolean = params.logging !== undefined ? params.logging : true;
    var url: string = "";

    if (params.url == `/${params.url}`) {
        url = params.url
    } else if (params.url == `${params.url}`) {
        url = "/" + params.url
    }
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    if (method == "POST") {
        app.post(url, urlencodedParser, (req: any, res: any) => params.handler(req, res));
    } else if (method == "GET") {
        app.get(url, urlencodedParser, (req: any, res: any) => params.handler(req, res));
    }
    app.listen(params.port, () => {
		if (logging) { 
			console.log(`STARTED SESSION:\nURL: http://${ip.address()}:${params.port}${url}\nMETHOD: ${method}`);
    	}
    });
}

export { createServer };