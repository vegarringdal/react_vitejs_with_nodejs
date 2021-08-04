import { TypeChecker } from "esbuild-helpers";

const frontend = TypeChecker({
    basePath: "./frontend/src",
    name: "checker_frontend",
    tsConfig: "../tsconfig.json",
    throwOnSemantic: true,
    throwOnSyntactic: true
});

frontend.printSettings();
frontend.inspectAndPrint();

const backend = TypeChecker({
    basePath: "./backend/src",
    name: "checker_backend",
    tsConfig: "../tsconfig.json",
    throwOnSemantic: true,
    throwOnSyntactic: true
});

backend.printSettings();
backend.inspectAndPrint();

const common = TypeChecker({
    basePath: "./common/src",
    name: "checker_common",
    tsConfig: "../tsconfig.json",
    throwOnSemantic: true,
    throwOnSyntactic: true
});

common.printSettings();
common.inspectAndPrint();
