import { Route } from '../models/types/index';
import { Request } from 'express';

export const ROUTES: Route[] = [
    {
        path: '/youtube/playlistItems',
        proxy: {
            target: `${process.env.YOUTUBE_API_HOST}`,
            changeOrigin: true,
            pathRewrite: (path: string, req: Request) => {
                const newPath: string = path.replace(/\/youtube/, "")
                const hashQuery: boolean = newPath.includes("?")
                const paramsInString: string = hashQuery ? "&" : "?"
                return `${newPath}${paramsInString}key=${process.env.YOUTUBE_APIKEY || ""}`
            },
        },
    },
]