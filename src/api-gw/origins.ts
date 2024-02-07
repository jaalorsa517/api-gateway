import cors from "cors"
import { Express, Request, Response } from "express"
import { ResponseApi } from "../models/class/index.js"

const _corsOrigins = process.env.CORS_ORIGIN || "*"
const _corsOriginsArray = _corsOrigins.split(",")
console.log({ _corsOrigins })

function onProxyRes(req: Request, res: Response, next: Function) {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Content-Security-Policy', `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';`)
    res.setHeader('X-XSS-Protection', '1; mode=block')
    next()
}

function validateOriginHeader(req: Request, res: Response, next: Function) {
    if (_corsOrigins === "*") return next()
    const origin = req.headers.origin
    if (!origin) return new ResponseApi(res, { status: 400, message: 'Origin not found' }).json()
    if (!_corsOriginsArray.includes(origin)) return new ResponseApi(res, { status: 403, message: 'Origin not allowed' }).json()
    next()
}

export function originsSetup(app: Express) {

    app.use(onProxyRes)

    app.use(cors({ origin: _corsOriginsArray }))

    app.use(validateOriginHeader)
}