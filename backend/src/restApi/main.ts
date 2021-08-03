import { Session } from "express-session";
import { app } from "../initDefaultHttp";
import { log } from "../utils/log";
import { Request } from "express";
import { sampleApi } from "./path/sampleApi";

export function protectedRoute(req: any, res: any, next: any) {
    if (!req.session.user) {
        res.status(401).send({ success: false, message: "no access" });
    } else {
        next();
    }
}

export function initRestApi() {
    app.use(function (req, res, next) {
        if (req.path.indexOf("api") !== -1) {
            log("api call", req.path, req.method);
        }
        res.on("finish", function () {
            log("api response", req.path, req.method, res.statusCode);
        });
        next();
    });

    sampleApi(app);
}

export interface SessionExt extends Session {
    user: string; // or any other type
    isAdmin: number;
}
export interface RequestExt extends Request {
    session: SessionExt;
}
