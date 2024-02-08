import { Route } from '../../src/models/types/index.js';

export const ROUTES: Route[] = [
    {
        path: '/testauth',
        auth: {
            isEnabled: true,
            rolesAuth: ['admin']
        },
        proxy: {
            target: `http://localhost:8080`,
            changeOrigin: true,
            pathRewrite:{
                '^/testauth': ''
            }
        },
    },
    {
        path: '/test',
        auth: {
            isEnabled: false,
            rolesAuth: ['*']
        },
        proxy: {
            target: `http://localhost:8080`,
            changeOrigin: true,
            pathRewrite:{
                '^/test': ''
            }
        },
    },
]