export type Route = {
    path: string;
    proxy: Proxy;
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
    pathRewrite?: Record<string, string>;
}

export type RateLimit = {
    windowMs: number;
    max: number;
}

export type Session = {
    role: string;
    isActive: boolean;
}