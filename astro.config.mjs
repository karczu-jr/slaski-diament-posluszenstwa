import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  // base: "/slaski-diament-posluszenstwa/",
  vite: {
    root: process.cwd(),
  },
  fonts: [
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-plex",
      provider: fontProviders.google(),
    },
    {
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.google(),
    },
  ],
  integrations: [sitemap(), mdx()],
});