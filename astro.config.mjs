// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
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

  adapter: netlify(),
});