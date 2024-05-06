import { Request } from 'express';
import { Route } from '../src/models/types';

export const ROUTES: Route[] = [
    {
        path: '/testauth',
        pathAllowed: [],
        auth: {
            isEnabled: true,
            rolesAuth: ['admin']
        },
        proxy: {
            target: `http://localhost:8080`,
            hasHttps: false,
            timeout: 10000,
            hasCache: false,
            pathRewrite:(req: Request)=>{
                return req.path.replace('^/testauth', '')
            }
        },
    },
    {
        path: '/test',
        pathAllowed: [],
        auth: {
            isEnabled: false,
            rolesAuth: ['*']
        },
        proxy: {
            target: `http://localhost:8080`,
            hasHttps: false,
            timeout: 10000,
            hasCache: false,
            pathRewrite:(req:Request)=>{
                return req.path.replace('^/test', '')
            }
        },
    },
]