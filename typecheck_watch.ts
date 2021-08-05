import { TypeChecker } from "esbuild-helpers";

const frontend = TypeChecker({
    basePath: "./frontend/src",
    name: "checker_frontend",
    tsConfig: "../tsconfig.json"
});

frontend.printSettings();
frontend.inspectAndPrint();
frontend.worker_watch("./");

const backend = TypeChecker({
    basePath: "./backend/src",
    name: "checker_backend",
    tsConfig: "../tsconfig.json"
});

backend.printSettings();
backend.inspectAndPrint();
backend.worker_watch("./");

const common = TypeChecker({
    basePath: "./common/src",
    name: "checker_common",
    tsConfig: "../tsconfig.json"
});

common.printSettings();
common.inspectAndPrint();
common.worker_watch("./");
