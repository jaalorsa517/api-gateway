import { Route } from '../models/types/route.types.js';
export const ROUTES: Route[] = [
    {
        url: '/pokemon',
        proxy: {
            target: "https://pokeapi.co/api/v2/pokemon",
            changeOrigin: true,
            pathRewrite: {
                [`^/pokemon`]: '',
            },
        }
    },
    {
        url: '/ability',
        proxy: {
            target: "https://pokeapi.co/api/v2/ability",
            changeOrigin: true,
            pathRewrite: {
                [`^/ability`]: '',
            },
        }
    },
]