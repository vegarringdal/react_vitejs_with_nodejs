import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { config } from "dotenv";
import { DEFAULT_PORT_API, DEFAULT_PORT_WEB, DEFAULT_SERVER_API_ROOT, toNumber } from "../common/src/config_defaults";

// add env files - only environment variables starting with VITE_ gets included in client side
config({ path: "../.env" });

const ENV = process.env;
const PORT_API = toNumber(ENV.PORT_API, DEFAULT_PORT_API);
const PORT_WEB = toNumber(ENV.PORT_WEB, DEFAULT_PORT_WEB);
const SERVER_API_ROOT = ENV.SERVER_API_ROOT || DEFAULT_SERVER_API_ROOT;

// https://vitejs.dev/config/
export default defineConfig({
    root: "./src",
    plugins: [reactRefresh()],
    server: {
        port: PORT_WEB,
        proxy: {
            [SERVER_API_ROOT]: {
                target: `http://localhost:${PORT_API}`,
                changeOrigin: true
            }
        }
    },
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
});
