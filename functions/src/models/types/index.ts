import { Request } from 'express';

export type Route = {
    path: string;
    proxy: Proxy;
    auth?: Auth;
    pathAllowed: string[];
}

export type Auth = {
    isEnabled: boolean;
    rolesAuth: string[];
}

export type Proxy = {
    target: string;
    headers?: Record<string, string>;
    pathRewrite?: ((req: Request) => string);
    hasHttps: boolean;
    timeout: number;
    hasCache: boolean;
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