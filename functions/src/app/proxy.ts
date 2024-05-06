import { Express, NextFunction, Response, Request } from 'express';
import proxyExpress from "express-http-proxy"
import { Proxy, Route} from '../models/types';

function proxyHandler(proxy: Proxy) {
    return function (req: Request, res: Response, next: NextFunction) {
        let otherOptions = {
            parseReqBody: true
        }
        if (req.method === "GET") {
            otherOptions = {
                parseReqBody: false
            }
        }

        return proxyExpress(proxy.target, {
            https: proxy.hasHttps,
            timeout: proxy.timeout,
            memoizeHost: proxy.hasCache,
            proxyReqPathResolver: (req) => {
                return proxy.pathRewrite ? proxy.pathRewrite(req) : req.url
            },
            ...otherOptions,
        })(req, res, next)
    }
}
export function setupProxies(app: Express, routes: Route[]) {
    routes.forEach(route => {
        const { path, proxy } = route
        app.use(path, proxyHandler(proxy)
        )
    })
}
