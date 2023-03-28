import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://montessorigarden.netlify.app",
  output: "server",
  adapter: netlify(),
  integrations: [sitemap(), mdx()],
});
