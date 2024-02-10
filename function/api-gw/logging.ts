import morgan from "morgan"
import { Express } from "express"

export function setupLoggin(app: Express) {
    app.use(morgan("combined"));
}