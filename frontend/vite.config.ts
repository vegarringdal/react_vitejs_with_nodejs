import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { config } from "dotenv";

// add env files - only environment variables starting with VITE_ gets included in client side
config({ path: "../.env" });

/**
 * Helper for returning number or 0
 * @param x any
 * @returns number
 */
function number(x: string): number {
    const number = parseInt(x);
    if (isNaN(number)) {
        return 0;
    } else {
        return number;
    }
}

const PORT_API = number(process.env.PORT_API) | 1081;
const PORT_WEB = number(process.env.PORT_WEB) | 1080;
const SERVER_API_ROOT = process.env.SERVER_API_ROOT || "/api";

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
