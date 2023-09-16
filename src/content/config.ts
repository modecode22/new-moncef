// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description:z.string(),
    author:z.string(),
    date:z.string(),
    img:z.string()
  }),
});
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    img: z.string(),
    link: z.string(),
        tech: z.string(),
        color: z.string(),
  }),
});
const authors = defineCollection({
  type: "data",
  schema: z.object({
name: z.string()
  }),
});

export const collections = {
  blogs: blogCollection,
  authors: authors,
  projects: projects,
};

