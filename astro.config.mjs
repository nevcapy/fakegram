import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://nevcapy.github.io",
  base: "/fakegram",
  trailingSlash: "never",
  server: {
    port: 1234,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [playformCompress()],
});
