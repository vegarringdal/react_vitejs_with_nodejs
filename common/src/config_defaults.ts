/**
 * This is the default settings,you should overide some of these with .env file
 * You should add type so you dont set wrong type by accident
 * Important to override SESSION_PRIVATE_KEY
 * Never add passwords to this file
 */

// web nodejs server
export const DEFAULT_SERVER_PORT: number = 1080;
export const DEFAULT_SERVER_HOST: string = "0.0.0.0";
export const DEFAULT_SERVER_COMPRESSION: boolean = true;

// Vitejs does not restart when you edit this and you need to manually update in vite.config.ts
export const DEFAULT_SERVER_API_ROOT: string = "/api";

// for express session
export const DEFAULT_SESSION_MAX_AGE: number = 3600 * 60 * 60 * 24 * 14; //1 sec * 60sec * 60min * 24hours * 14 days
export const DEFAULT_SESSION_DOMAIN: string = DEFAULT_SERVER_HOST;
export const DEFAULT_SESSION_PRIVATE_KEY: string = "change_me";
export const DEFAULT_SESSION_NAME: string = "session_name";
export const DEFAULT_SESSION_HTTP_ONLY: boolean = true;
export const DEFAULT_SESSION_SAME_SITE: boolean = true;

// for develpment only PS! Vitejs does not restart when you edit these and you need to manually update in vite.config.ts
export const DEFAULT_PORT_API: number = 1081;
export const DEFAULT_PORT_WEB: number = 1080;

/********************************************************************
 * Next part is just helpers for env variables so we get correct type from strings
 *
 */

/**
 * Helper for returning number or 0
 */
export function toNumber(x: string | null | undefined, defaultValue: number): number {
    if (typeof x !== "string") {
        return defaultValue;
    }

    const number = parseInt(x);
    if (isNaN(number)) {
        return defaultValue;
    } else {
        return number;
    }
}

/**
 * Helper for returning number or 0
 */
export function toBool(x: string | null | undefined, defaultValue: boolean): boolean {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    if (x.toLowerCase() === "true") {
        return true;
    }
    return false;
}

/**
 * Helper for returning array, splitter is comma
 */
export function toArray(x: string | null | undefined, defaultValue: string[]): string[] {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x.split(",");
}

/**
 * Helper for returning string
 */
export function toString(x: string | null | undefined, defaultValue: string): string {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x;
}
