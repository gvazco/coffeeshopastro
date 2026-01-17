// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),

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
