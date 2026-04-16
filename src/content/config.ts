import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      tech: z.array(z.string()).min(1),
      repoUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      cover: image().optional(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
