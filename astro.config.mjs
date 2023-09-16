import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind(), mdx()],
});