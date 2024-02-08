import { https } from "firebase-functions"
import { app } from "./api-gw/index"

export const apigw = https.onRequest(app)
