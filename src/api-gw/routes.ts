import { Route } from '../models/types/route.types.js';
export const ROUTES: Route[] = [
    {
        path: '/pokemon',
        proxy: {
            target: "https://pokeapi.co/api/v2/pokemon",
            changeOrigin: true,
            pathRewrite: {
                [`^/pokemon`]: '',
            },
        },
        auth:{
            isEnabled: true,
            rolesAuth: ['admin']
        }
    },
    {
        path: '/ability',
        proxy: {
            target: "https://pokeapi.co/api/v2/ability",
            changeOrigin: true,
            pathRewrite: {
                [`^/ability`]: '',
            },
        }
    },
]