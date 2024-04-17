import { onRequest } from "firebase-functions/v2/https"
import { app } from "./api-gw/index.js"

export const apigw = onRequest(app)
