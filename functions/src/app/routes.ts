import { Route } from '../models/types';
import { Request } from 'express';

export const ROUTES: Route[] = [
    {
        path: '/youtube/playlistItems',
        pathAllowed: [],
        proxy: {
            target: `${process.env.YOUTUBE_API_HOST}`,
            hasHttps: process.env.NODE_ENV === 'production',
            timeout: 10000,
            hasCache: true,
            pathRewrite: (req: Request) => {
                const newPath: string = `/playlistItems${req.url}`
                const hashQuery: boolean = newPath.includes("?")
                const paramsInString: string = hashQuery ? "&" : "?"
                return `${process.env.YOUTUBE_API_PATH || ""}${newPath}${paramsInString}key=${process.env.YOUTUBE_APIKEY || ""}`
            },
        },
    },
]