import { log } from "console";

export function initCron() {
    const cron = require("node-cron");
    cron.schedule(
        "* * * * * *",
        () => {
            log("running");
        },
        {
            scheduled: true,
            timezone: "Europe/Oslo"
        }
    );
}
