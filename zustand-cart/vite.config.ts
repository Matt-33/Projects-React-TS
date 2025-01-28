import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@store": path.resolve(__dirname, "src/store"),
      "@components": path.resolve(__dirname, "src/components"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
    },
  },
});