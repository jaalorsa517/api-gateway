import { Express } from 'express';
import { Route } from '../models/types/route.types.js';
import { createProxyMiddleware } from 'http-proxy-middleware'

export function setupProxies (app: Express, routes:Route[]) {
    routes.forEach(r => {
        app.use(r.path, createProxyMiddleware(r.proxy));
    })
}
