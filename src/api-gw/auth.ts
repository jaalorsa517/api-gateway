import { Express, Request, Response } from "express";
import { Auth, Route, Session } from "../models/types/route.types.js";


function hasAuth(auth: Auth): Session {
    // Consultar el modulo auth
    return { role: 'admin', isActive: true }
}

function hasRole(session: Session, auth: Auth): boolean {
    return auth.rolesAuth.includes(session.role)
}

function hasSessionActive(session: Session): boolean {
    return session.isActive
}

export function authSession(app: Express, routes: Route[]) {
    routes.forEach(r => {
        app.use(r.path, (req: Request, res: Response, next: Function) => {
            if (!r.auth?.isEnabled) return next()
            const session: Session = hasAuth(r.auth)
            if (!hasSessionActive(session)) return res.status(401).json({ status: 401, message: 'Unauthorized' })
            const isAllowedRole = hasRole(session, r.auth)
            if (!isAllowedRole) return res.status(403).json({ status: 403, message: 'Unauthorized' })
            next()
        })
    })
}