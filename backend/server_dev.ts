import { clearFolders, nodejs, makeAllPackagesExternalPlugin } from "esbuild-helpers";

// add env files - only used in development-
require("dotenv").config();

// clear dist
clearFolders("dist");

/**
 * nodejs bundle
 */
nodejs(
    {
        watch: ["./src/**/*.ts", "../common/**/*.ts"],
        launch: true,
        launchArg: { argsBefore: ["--inspect"] }
    },
    {
        color: true,
        define: {
            DEVELOPMENT: "true"
        },
        entryPoints: ["./src/index.ts"],
        outfile: "./dist/index.js",
        minify: false,
        target: "node14",
        bundle: true,
        plugins: [makeAllPackagesExternalPlugin],
        platform: "node",
        sourcemap: true,
        logLevel: "error",
        incremental: true
    }
);
