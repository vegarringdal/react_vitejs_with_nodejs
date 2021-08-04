import { initHttpConfig, startHttpServer } from "./initDefaultHttp";

/**
 * if you need code from common code then use complete path on backend
 * import { commonCodeString } from "../../common/src/exports";
 * console.log(commonCodeString);
 */

// start application
initHttpConfig();

// init database connection
// TODO: for you :-)

// add rest api
// TODO: for you :-)

// time to start server
startHttpServer();
