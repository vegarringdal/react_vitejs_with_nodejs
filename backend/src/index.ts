import { initDatabase } from "./database/index";
import { initHttpConfig, startHttpServer } from "./initDefaultHttp";
import { initRestApi } from "./restApi/main";
import { initCron } from "./utils/cron";
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
