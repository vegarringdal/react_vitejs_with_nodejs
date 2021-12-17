import { clearFolders, nodejs, makeAllPackagesExternalPlugin } from "esbuild-helpers";
import { config } from "dotenv";

// add env files - only used in development-
config({ path: "../.env" });

// clear dist
clearFolders("dist");

/**
 * nodejs bundle
 */
nodejs(
    {
        watch: ["./src/**/*.ts", "../common/**/*.ts", "../*.env"],
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
