import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const extraPlugins = [];
  if (mode === "development") {
    // vibecodePlugin is only available in the Vibecode environment
    const { vibecodePlugin } = await import("@vibecodeapp/webapp/plugin");
    extraPlugins.push(vibecodePlugin());
  }

  return {
    base: mode === "production" ? "/we-read-too/" : "/",
    server: {
      host: "::",
      port: 8000,
      allowedHosts: true,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },
    plugins: [react(), ...extraPlugins],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
