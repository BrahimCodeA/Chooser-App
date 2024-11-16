import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ or https://vitejs.dev/config/#plugins
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
