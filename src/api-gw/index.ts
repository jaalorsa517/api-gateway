import express, { Express } from "express";
import { setupLoggin } from "./logging";
import { ROUTES } from "./routes"
import { setupProxies } from "./proxy"
import { authSession } from "./auth";
import { originsSetup } from "./origins";

const _app: Express = express();

originsSetup(_app)
setupLoggin(_app)
authSession(_app, ROUTES)
setupProxies(_app, ROUTES)

export const app = _app