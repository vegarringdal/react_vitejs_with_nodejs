import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

const PORT_API = 1081
const PORT_WEB = 1080
const SERVER_API_ROOT = "/api"

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
