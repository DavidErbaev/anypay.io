import express from "express";

export type THttpMethod = "GET" | "POST";

export interface IServerOptions {
	method?: THttpMethod | THttpMethod[];
	logging?: true;
	url: string;
	port: number;
	handler(req: express.Request, res: express.Response): void;
}