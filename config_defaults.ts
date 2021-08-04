/**
 * This is the default settings,you should overide some of these with .env file
 * Important to override SESSION_PRIVATE_KEY
 * Never add passwords to this file
 */

// web nodejs server
export const DEFAULT_SERVER_PORT = 1080;
export const DEFAULT_SERVER_HOST = "0.0.0.0";
export const DEFAULT_SERVER_COMPRESSION = true;
export const DEFAULT_SERVER_API_ROOT = "/api";

// for express session
export const DEFAULT_SESSION_MAX_AGE = 3600 * 60 * 60 * 24 * 14; //1 sec * 60sec * 60min * 24hours * 14 days
export const DEFAULT_SESSION_DOMAIN = DEFAULT_SERVER_HOST;
export const DEFAULT_SESSION_PRIVATE_KEY = "change_me";
export const DEFAULT_SESSION_NAME = "session_name";
export const DEFAULT_SESSION_HTTP_ONLY = true;
export const DEFAULT_SESSION_SAME_SITE = true;

// for develpment only
export const DEFAULT_PORT_API = 1081;
export const DEFAULT_PORT_WEB = 1080;

/**
 * Helper for returning number or 0
 * @param x any
 * @returns number
 */
export function toNumber(x: string | null | undefined): number {
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
export function toBool(x: string | null | undefined): boolean {
    if (typeof x !== "string") {
        return false;
    }
    if (x.toLowerCase() === "true") {
        return true;
    }
    return false;
}
