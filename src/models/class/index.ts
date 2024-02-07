import { Response } from "express"
import { BodyResponseApi } from "../types/index.js"

export class ResponseApi {
    res: Response
    status: number
    message: string
    data: any
    constructor(res: Response, bodyResponseApi: BodyResponseApi = { status: 200, message: 'OK' }) {
        this.res = res
        this.status = bodyResponseApi.status
        this.message = bodyResponseApi.message
        this.data = bodyResponseApi.data
    }

    json() {
        this.res.status(this.status).json({
            status: this.status,
            message: this.message,
            data: this.data
        })
    }
}