/**
 * IMPORTANT
 * User config_defaults.ts at root if you need to edit defaults
 * You only need to edit this file if you rename these folders src, dist, backend, frontend
 * Or if you need to add your own
 * Helper functions, toString, toArray etc are there to help you get correct result
 */

import * as path from "path";
import {
    toNumber,
    //toArray,
    toBool,
    toString,
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
    DEFAULT_SESSION_SAME_SITE
} from "../../common/src/config_defaults";

// global variable set by esbuild
declare const DEVELOPMENT: boolean;

// if you change this you also need to edit config for vitejs
export const WEB_ROOT: string = path.join(__dirname, "../../frontend", "dist");
export const IS_DEVELOPMENT: boolean = DEVELOPMENT; // esbuild gives us this one

/**
 *  Rest will be environment variables
 *  add ".env" to backend folder to use in develpment, will not be used for production
 **/

const ENV = process.env;
// http server, server port is only used when in production
export const SERVER_PORT = toNumber(ENV.SERVER_PORT, DEFAULT_SERVER_PORT);
export const SERVER_HOST = toString(ENV.SERVER_HOST, DEFAULT_SERVER_HOST);
export const SERVER_COMPRESSION = toBool(ENV.SERVER_COMPRESSION, DEFAULT_SERVER_COMPRESSION);
export const SERVER_API_ROOT = toString(ENV.SERVER_API_ROOT, DEFAULT_SERVER_API_ROOT);

// for express session
export const SESSION_MAX_AGE = toNumber(ENV.SESSION_MAX_AGE, DEFAULT_SESSION_MAX_AGE);
export const SESSION_DOMAIN = toString(ENV.SESSION_DOMAIN, DEFAULT_SESSION_DOMAIN);
export const SESSION_PRIVATE_KEY = toString(ENV.SESSION_PRIVATE_KEY, DEFAULT_SESSION_PRIVATE_KEY);
export const SESSION_NAME = toString(ENV.SESSION_NAME, DEFAULT_SESSION_NAME);
export const SESSION_HTTP_ONLY = toBool(ENV.SESSION_HTTP_ONLY, DEFAULT_SESSION_HTTP_ONLY);
export const SESSION_SAME_SITE = toBool(ENV.SESSION_SAME_SITE, DEFAULT_SESSION_SAME_SITE);
export const SESSION_SECURE = toBool(ENV.SESSION_SECURE, !DEVELOPMENT);

// for develpment only
export const PORT_API = toNumber(ENV.PORT_API, DEFAULT_PORT_API);
export const PORT_WEB = toNumber(ENV.PORT_WEB, DEFAULT_PORT_WEB);
