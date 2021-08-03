declare const DEVELOPMENT: boolean;

/**
 * Simple logger to know if api is starting or getting called
 * @param type
 * @param API
 * @param path
 * @param method
 */
export const logApiCall = function (type: string, API: string, path: string, method?: string) {
    log(`\n${type}: \n - root: ${API}\n - path: ${path}\n - method: ${method}`);
};

/**
 * uses debug print if development mode
 */
export function log(...msg: any[]) {
    if (DEVELOPMENT) {
        console.log(...msg);
    }
}

/**
 * uses debug print if development mode
 */
export function timestart(name: string) {
    if (DEVELOPMENT) {
        console.time(name);
    }
}

/**
 * uses debug print if development mode
 */
export function timeend(name: string) {
    if (DEVELOPMENT) {
        console.timeEnd(name);
    }
}
