import path from "path";
import express from "express";
import helmet from "helmet";
import session from "express-session";
import compression from "compression";
import * as zlib from "zlib";
import { RateLimiterMemory } from "rate-limiter-flexible";
import {
    WEB_ROOT,
    SERVER_PORT,
    HOST,
    SESSION_PRIVATE_KEY,
    SESSION_NAME,
    SESSION_DOMAIN
} from "./config";

declare const DEVELOPMENT: boolean;

export const app = express();
export function initHttpConfig() {
    /**
     * Protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
     */
    if (!DEVELOPMENT) {
        app.use(helmet());
    }

    /**
     * session
     */
    app.set("trust proxy", 1); // trust first proxy ?
    app.use(
        session({
            name: SESSION_NAME,
            secret: SESSION_PRIVATE_KEY,
            resave: false,
            saveUninitialized: true,
            cookie: {
                path: "/",
                httpOnly: true,
                signed: true,
                sameSite: true,
                maxAge: 60000 * 60 * 24 * 10,
                domain: SESSION_DOMAIN,
                secure: !DEVELOPMENT
            }
        })
    );

    /**
     * Prevent brute-force attacks
     * very low atm, but just for testing, depends on app
     * prb should just be low at auth url
     */
    const opts = {
        points: 1000, // attempts
        duration: 1 * 60, // within x minutes (60)
        blockDuration: 60 * 15 // Block for 15 minutes
    };
    const rateLimiter = new RateLimiterMemory(opts);
    const rateLimiterMiddleware = (req: any, res: any, next: any) => {
        rateLimiter
            .consume(req.ip, 1) // consume 2 points
            .then(() => {
                if (DEVELOPMENT) {
                    //  console.log(req.url, e);
                }
                next();
            })
            .catch(() => {
                res.status(429).send("Too Many Requests");
            });
    };

    // TODO: need to test more how this works, inportant IP is forwarded in nginx
    if (!DEVELOPMENT) {
        app.use(rateLimiterMiddleware);
    }

    /**
     * Compression
     * I could prb let nginx do this ?
     */
    app.use(
        compression({
            threshold: 1,
            flush: zlib.constants.Z_SYNC_FLUSH
        })
    );

    /**
     * body parser
     * so we can receive json
     */
    app.use(express.json());

    /**
     * static resources from frontend build
     */
    app.use("/", express.static(WEB_ROOT));
}

export function startHttpServer() {
    if (DEVELOPMENT) {
        app.listen(3001, HOST);
        console.log(`--------------------------------------------------------------\n`);
        console.log(` ---> Backend only, vite is serving frontend`);
        console.log(` ---> Running in mode: ${DEVELOPMENT ? "Development" : "Production"}`);
        console.log(`\n--------------------------------------------------------------\n`);
    } else {
        app.listen(SERVER_PORT, HOST);
        console.log(`--------------------------------------------------------------\n`);
        console.log(` ---> Running on http://localhost:${SERVER_PORT}`);
        console.log(` ---> Serving pages from ${path.join(__dirname, "../", "frontend")}`);
        console.log(` ---> Running in mode: ${DEVELOPMENT ? "Development" : "Production"}`);
        console.log(`\n--------------------------------------------------------------\n`);
    }
}
