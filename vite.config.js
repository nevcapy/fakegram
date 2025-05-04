import { defineConfig } from "vite";
import tailwind from "@tailwindcss/vite";
import astro from "@astrojs/vite-plugin-astro";

export default defineConfig({
  plugins: [astro(), tailwind()],
});
