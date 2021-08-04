/**
 * IMPORTANT
 * User config_defaults.ts at root if you need to edit anything
 * You only need to edit this file if you rename these folders src, dist, backend, frontend
 */

import * as path from "path";
import {
    toBool,
    DEFAULT_PORT_API,
    DEFAULT_PORT_WEB,
    DEFAULT_SERVER_API_ROOT,
    DEFAULT_SERVER_COMPRESSION,
    DEFAULT_SERVER_HOST,
    DEFAULT_SERVER_PORT,
    DEFAULT_SESSION_DOMAIN,
    DEFAULT_SESSION_HTTP_ONLY,
    DEFAULT_SESSION_MAX_AGE,
    DEFAULT_SESSION_NAME,
    DEFAULT_SESSION_PRIVATE_KEY,
    DEFAULT_SESSION_SAME_SITE,
    toNumber
} from "../../config_defaults";

// global variable set by esbuild
declare const DEVELOPMENT: boolean;

const ENV = process.env;

// if you change this you also need to edit config for vitejs
export const WEB_ROOT = path.join(__dirname, "../../frontend", "dist");
export const IS_DEVELOPMENT = DEVELOPMENT; // esbuild gives us this one

/**
 *  Rest will be environment variables
 *  add ".env" to backend folder to use in develpment, will not be used for production
 **/

// http server, server port is only used when in production
export const SERVER_PORT = toNumber(ENV.SERVER_PORT) || DEFAULT_SERVER_PORT;
export const SERVER_HOST = ENV.SERVER_HOST || DEFAULT_SERVER_HOST;
export const SERVER_COMPRESSION = toBool(ENV.SERVER_COMPRESSION) || DEFAULT_SERVER_COMPRESSION;
export const SERVER_API_ROOT = ENV.SERVER_API_ROOT || DEFAULT_SERVER_API_ROOT;

// for express session
export const SESSION_MAX_AGE = toNumber(ENV.SESSION_MAX_AGE) || DEFAULT_SESSION_MAX_AGE;
export const SESSION_DOMAIN = ENV.SESSION_DOMAIN || DEFAULT_SESSION_DOMAIN;
export const SESSION_PRIVATE_KEY = ENV.SESSION_PRIVATE_KEY || DEFAULT_SESSION_PRIVATE_KEY;
export const SESSION_NAME = ENV.SESSION_NAME || DEFAULT_SESSION_NAME;
export const SESSION_HTTP_ONLY = toBool(ENV.SESSION_HTTP_ONLY) || DEFAULT_SESSION_HTTP_ONLY;
export const SESSION_SAME_SITE = toBool(ENV.SESSION_SAME_SITE) || DEFAULT_SESSION_SAME_SITE;

// for develpment only
export const PORT_API = toNumber(ENV.PORT_API) || DEFAULT_PORT_API;
export const PORT_WEB = toNumber(ENV.PORT_WEB) || DEFAULT_PORT_WEB;
