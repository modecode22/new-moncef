// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    /* ... */
  }),
});
const newsletter = defineCollection({
  type: "content",
  schema: z.object({
    /* ... */
  }),
});
const authors = defineCollection({
  type: "data",
  schema: z.object({
    /* ... */
  }),
});

export const collections = {
  blog: blogCollection,
  newsletter: newsletter,
  authors: authors,
};