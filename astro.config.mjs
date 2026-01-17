// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],

  vite: {
    plugins: [
      // ...add your Vite plugins here
      tailwindcss(),
    ],
  },

  image: {
    domains: ["coffeeshop.local", "coffeshop.core-hub-plex.space"],
  },
});
