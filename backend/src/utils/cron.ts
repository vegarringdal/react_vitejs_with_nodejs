import { log } from "console";
import * as cron from "node-cron";

export function initCron() {
    cron.schedule(
        "* * * * * *",
        () => {
            log("running");
        },
        {
            scheduled: true,
            timezone: "Europe/Berlin"
        }
    );
}
