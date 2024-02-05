import express, { Express, Request, Response } from "express";

const _app: Express = express();

_app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export const app = _app