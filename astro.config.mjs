import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://montessorigarden.netlify.app",
  output: "server",
  integrations: [sitemap(), mdx()],
  adapter: netlify(),
});
