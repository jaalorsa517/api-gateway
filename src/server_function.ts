import { https } from "firebase-functions"
import { app } from "./api-gw/index.js"

export const apigw = https.onRequest(app)
