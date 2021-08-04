import * as path from "path";

// global variable set by esbuild
declare const DEVELOPMENT: boolean;

/**
 * Helper for returning number or 0
 * @param x any
 * @returns number
 */
function number(x: string): number {
    const number = parseInt(x);
    if (isNaN(number)) {
        return 0;
    } else {
        return number;
    }
}

export const WEB_ROOT = path.join(__dirname, "../../frontend", "dist");
export const IS_DEVELOPMENT = DEVELOPMENT; // esbuild gives us this one

/**
 *  Rest will be environment variables
 *  add ".env" to backend folder to use in develpment, will not be used for production
 **/
export const SERVER_PORT = number(process.env.SERVER_PORT) || 80;
export const SESSION_MAX_AGE = number(process.env.SESSION_MAX_AGE) | (3600 * 60 * 60 * 24 * 14); //1 sec * 60sec * 60min * 24hours * 14 days
export const HOST = process.env.HOST || "localhost";
export const SESSION_DOMAIN = process.env.SESSION_DOMAIN || HOST;
export const SESSION_PRIVATE_KEY = process.env.SESSION_PRIVATE_KEY || "my_key";
export const SESSION_NAME = process.env.SESSION_NAME || "session_name";
export const API_ROOT_PATH = process.env.API_ROOT_PATH || "/api";
export const PORT_API = number(process.env.PORT_API) | 81;
export const PORT_WEB = number(process.env.PORT_WEB) | 80;
