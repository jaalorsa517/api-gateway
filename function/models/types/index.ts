import { Request } from 'express';
import { Options } from "http-proxy-middleware"

export type Route = {
    path: string;
    proxy: Options;
    auth?: Auth;
}

export type Auth = {
    isEnabled: boolean;
    rolesAuth: string[];
}

export type Proxy = {
    target: string;
    forward?: string;
    headers?: Record<string, string>;
    changeOrigin?: boolean;
    pathRewrite?: Record<string, string> | ((path: string, req: Request) => string);
}

export type RateLimit = {
    windowMs: number;
    max: number;
}

export type Session = {
    role: string;
    isActive: boolean;
}

export type BodyResponseApi = {
    status: number
    message: string
    data?: any
}