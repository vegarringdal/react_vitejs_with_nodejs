import { clearFolders, nodejs, makeAllPackagesExternalPlugin } from "esbuild-helpers";

clearFolders("dist");

/**
 * nodejs bundle
 */
nodejs(null, {
    color: true,
    define: {
        DEVELOPMENT: "false"
    },
    entryPoints: ["./src/index.ts"],
    outfile: "./dist/index.js",
    minify: true,
    target: "node14",
    bundle: true,
    plugins: [makeAllPackagesExternalPlugin],
    platform: "node",
    sourcemap: false,
    logLevel: "error",
    incremental: false
});
