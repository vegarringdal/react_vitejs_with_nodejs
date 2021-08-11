import { TypeChecker } from "esbuild-helpers";

const frontend = TypeChecker({
    basePath: "./frontend/src",
    name: "checker_frontend",
    shortenFilenames: false,
    tsConfig: "../tsconfig.json"
});

frontend.printSettings();
frontend.inspectAndPrint();
frontend.worker_watch(["./"]);

const backend = TypeChecker({
    basePath: "./backend/src",
    name: "checker_backend",
    shortenFilenames: false,
    tsConfig: "../tsconfig.json"
});

backend.printSettings();
backend.inspectAndPrint();
backend.worker_watch(["./", "../../config_defaults.ts"]);

const common = TypeChecker({
    basePath: "./common/src",
    name: "checker_common",
    shortenFilenames: false,
    tsConfig: "../tsconfig.json"
});

common.printSettings();
common.inspectAndPrint();
common.worker_watch("./");
