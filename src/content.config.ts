import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(), // Data publikacji (wymagana)
    time: z.string().optional(), // Opcjonalna godzina (np. "10:58")
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  // DODANO: ({ image }) => przed z.object
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    formUrl: z.string().url().nullable().optional(),
    facebookUrl: z.string().url().nullable().optional(),
    image: z.object({
      url: image(), // ZMIENIONO: z.string() na image()
      alt: z.string(),
    }).optional(),
    gallery: z.array(
      z.object({
        url: image(), // ZMIENIONO: z.string() na image()
        alt: z.string(),
      })
    ).optional(),
    partners: z
        .array(
          z.object({
            name: z.string(),
            logo: image(),
            url: z.string().url().nullable().optional(),
            alt: z.string().optional(),
          })
        )
        .optional(),
  }),
});

export const collections = { blog, projects };
