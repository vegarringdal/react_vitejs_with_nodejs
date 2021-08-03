import path from "path";
import express from "express";
import helmet from "helmet";
import session from "express-session";
import compression from "compression";
import * as zlib from "zlib";
import {
    WEB_ROOT,
    SERVER_PORT,
    HOST,
    SESSION_PRIVATE_KEY,
    SESSION_NAME,
    SESSION_DOMAIN,
    SESSION_MAX_AGE,
    IS_DEVELOPMENT
} from "./config";

export const app = express();

/**
 * init basic modules we need to serve side with session/compression
 */
export function initHttpConfig() {
    /**
     * Protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
     */
    if (!IS_DEVELOPMENT) {
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
                maxAge: SESSION_MAX_AGE,
                domain: SESSION_DOMAIN,
                secure: !IS_DEVELOPMENT // only used for production/https
            }
        })
    );

    /**
     * Compression
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
    if (IS_DEVELOPMENT) {
        app.listen(3001, HOST);
        console.log(`--------------------------------------------------------------\n`);
        console.log(` ---> Backend only, vite is serving frontend`);
        console.log(` ---> Running in mode: ${IS_DEVELOPMENT ? "Development" : "Production"}`);
        console.log(`\n--------------------------------------------------------------\n`);
    } else {
        app.listen(SERVER_PORT, HOST);
        console.log(`--------------------------------------------------------------\n`);
        console.log(` ---> Running on http://localhost:${SERVER_PORT}`);
        console.log(` ---> Serving pages from ${path.join(__dirname, "../", "frontend")}`);
        console.log(` ---> Running in mode: ${IS_DEVELOPMENT ? "Development" : "Production"}`);
        console.log(`\n--------------------------------------------------------------\n`);
    }
}
