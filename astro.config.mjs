import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://montessorigarden.netlify.app",
  integrations: [sitemap()],
});
