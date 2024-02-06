export type Route = {
    url: string;
    proxy: Proxy;
    auth?: boolean;
    creditCheck?: boolean;
    rateLimit?: RateLimit;
}

export type Proxy = {
    target: string;
    forward?: string;
    headers?: Record<string, string>;
    changeOrigin?: boolean;
    pathRewrite?: Record<string, string>;
}

export type RateLimit = {
    windowMs: number;
    max: number;
}
