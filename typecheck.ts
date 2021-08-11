import { TypeChecker } from "esbuild-helpers";

/**
 * This runs typechecking on all ts files
 * One for common files
 * One for backend
 * One for frontend
 *  -> these also check ts config files running backend and frontend
 */

const frontend = TypeChecker({
    basePath: "./frontend/src",
    name: "checker_frontend",
    tsConfig: "../tsconfig.json",
    shortenFilenames: false,
    throwOnSemantic: true,
    throwOnSyntactic: true
});

frontend.printSettings();
frontend.inspectAndPrint();

const backend = TypeChecker({
    basePath: "./backend/src",
    name: "checker_backend",
    tsConfig: "../tsconfig.json",
    shortenFilenames: false,
    throwOnSemantic: true,
    throwOnSyntactic: true
});

backend.printSettings();
backend.inspectAndPrint();

const common = TypeChecker({
    basePath: "./common/src",
    name: "checker_common",
    tsConfig: "../tsconfig.json",
    shortenFilenames: false,
    throwOnSemantic: true,
    throwOnSyntactic: true
});

common.printSettings();
common.inspectAndPrint();
