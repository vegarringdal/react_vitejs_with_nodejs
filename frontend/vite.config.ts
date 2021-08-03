import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
    root: "./src",
    plugins: [reactRefresh()],
    server: {
        proxy: {
            "/api": {
                target: `http://localhost:3001`,
                changeOrigin: true
            }
        }
    },
    build: {
        outDir: "../dist"
    }
});
