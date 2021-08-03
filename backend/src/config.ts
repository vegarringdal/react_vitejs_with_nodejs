import * as path from "path";

export const WEB_ROOT = path.join(__dirname, "../../frontend", "dist");
export const SERVER_PORT = process.env.SERVER_PORT || 80;
export const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE
    ? parseInt(process.env.SESSION_MAX_AGE)
    : 60000 * 60 * 24 * 10;
export const HOST = process.env.HOST || "localhost";
export const SESSION_DOMAIN = process.env.SESSION_DOMAIN || HOST;
export const SESSION_PRIVATE_KEY = process.env.SESSION_PRIVATE_KEY || "my_key";
export const SESSION_NAME = process.env.SESSION_NAME || "session_name";
export const API_ROOT_PATH = process.env.API_ROOT_PATH || "/api";
