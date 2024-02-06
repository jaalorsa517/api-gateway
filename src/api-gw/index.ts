import express, { Express } from "express";
import { setupLogin } from "./logging.js";
import { ROUTES } from "./routes.js"
import { setupProxies } from "./proxy.js"

const _app: Express = express();

setupLogin(_app)
setupProxies(_app, ROUTES)

export const app = _app