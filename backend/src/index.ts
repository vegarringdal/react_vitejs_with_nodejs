import { initDatabase } from "./database/index";
import { initHttpConfig, startHttpServer } from "./initDefaultHttp";
import { initRestApi } from "./restApi/main";
// import { initCron } from "./utils/cron";

// if you need code from common code then use complete path on backend
import { commonCodeString } from "../../common/src/exports";
console.log(commonCodeString);

// start application
initHttpConfig();
initRestApi();
initDatabase();

// You need to configure it first
// initCron();

// time to start server
startHttpServer();
