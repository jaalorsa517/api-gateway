import express, { Express } from "express";
import { setupLoggin } from "./logging.js";
import { ROUTES } from "./routes.js"
import { setupProxies } from "./proxy.js"
import { authSession } from "./auth.js";

const _app: Express = express();

setupLoggin(_app)
authSession(_app, ROUTES)
setupProxies(_app, ROUTES)

export const app = _app