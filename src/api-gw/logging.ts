import morgan from "morgan"
import { Express } from "express"

export function setupLogin(app: Express) {
    app.use(morgan("combined"));
}