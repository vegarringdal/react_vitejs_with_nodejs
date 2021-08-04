import * as path from "path";

// global variable set by esbuild
declare const DEVELOPMENT: boolean;

/**
 * Helper for returning number or 0
 * @param x any
 * @returns number
 */
function number(x: string | null | undefined): number {
    const number = parseInt(x);
    if (isNaN(number)) {
        return 0;
    } else {
        return number;
    }
}

/**
 * Helper for returning number or 0
 * @param x any
 * @returns number
 */
function boolean(x: string | null | undefined): boolean {
    if (typeof x !== "string") {
        return false;
    }
    if (x.toLowerCase() === "true") {
        return true;
    }
    return false;
}

// if you change this you also need to edit config for vitejs
export const WEB_ROOT = path.join(__dirname, "../../frontend", "dist");
export const IS_DEVELOPMENT = DEVELOPMENT; // esbuild gives us this one

/**
 *  Rest will be environment variables
 *  add ".env" to backend folder to use in develpment, will not be used for production
 **/

// http server, server port is only used when in production
export const SERVER_PORT = number(process.env.SERVER_PORT) || 1080;
export const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
export const SERVER_COMPRESSION = boolean(process.env.SERVER_COMPRESSION) || true;
export const SERVER_API_ROOT = process.env.SERVER_API_ROOT || "/api"; // also used by vitejs proxy, important if you edit default

// for express session
export const SESSION_MAX_AGE = number(process.env.SESSION_MAX_AGE) | (3600 * 60 * 60 * 24 * 14); //1 sec * 60sec * 60min * 24hours * 14 days
export const SESSION_DOMAIN = process.env.SESSION_DOMAIN || SERVER_HOST;
export const SESSION_PRIVATE_KEY = process.env.SESSION_PRIVATE_KEY || "change_me";
export const SESSION_NAME = process.env.SESSION_NAME || "session_name";
export const SESSION_HTTP_ONLY = boolean(process.env.SESSION_HTTP_ONLY) || true;
export const SESSION_SAME_SITE = boolean(process.env.SESSION_SAME_SITE) || true;

// for develpment only
export const PORT_API = number(process.env.PORT_API) | 1081; // also used by vitejs proxy, important if you edit default
export const PORT_WEB = number(process.env.PORT_WEB) | 1080; // also used by vitejs proxy, important if you edit default
