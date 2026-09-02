import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://10.62.117.15:8270",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/biz-api": {
        target: "http://10.62.117.16:9099",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/biz-api/, ""),
      },
    },
  },
});
