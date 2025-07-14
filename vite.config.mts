import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import { remixViteOptions } from "gadget-server/remix";
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [gadget(), remix(remixViteOptions)],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});