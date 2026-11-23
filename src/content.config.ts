import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(), // Data publikacji (wymagana)
    time: z.string().optional(), // Opcjonalna godzina (np. "10:58")
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    // Zdjęcie główne newsa – lokalny plik, optymalizowany przez Astro (tak jak w edycjach zawodów)
    image: z
      .object({
        url: image(),
        alt: z.string().optional(),
      })
      .optional(),
    // Opcjonalna galeria (np. posty z Facebooka z kilkoma zdjęciami)
    gallery: z
      .array(
        z.object({
          url: image(),
          alt: z.string().optional(),
        })
      )
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
    // Rolka z zawodów (pionowe wideo 9:16) – po zawodach pokazujemy ją w nagłówku strony edycji.
    // src: plik z folderu public, np. "/video/rolka.mp4"; poster: kadr pokazywany przed startem filmu.
    reel: z
      .object({
        src: z.string(),
        poster: image(),
        alt: z.string(),
        credit: z.string().optional(),
      })
      .optional(),
    // Planowana edycja bez konkretnej daty, np. "wiosna 2027" – pokazujemy ją jako "następną edycję"
    planned: z.string().optional(),
    // --- Fakty w hero strony edycji ---
    classes: z.string().optional(), // np. "0, 1, 2, 3"
    slots: z.number().optional(), // liczba miejsc startowych
    fee: z.string().optional(), // np. "170 zł"
    venue: z.string().optional(), // opis miejsca, np. "plac o podłożu kwarcowym"
    mapUrl: z.string().url().optional(), // link do Map Google
    // Przycisk "Zapisz się" (formUrl) widać tylko, gdy zapisy są otwarte
    registrationOpen: z.boolean().optional(),
    // Zespół zawodów, np. { role: "Sędzia", name: "..." }
    team: z.array(z.object({ role: z.string(), name: z.string() })).optional(),
    // Wyniki: klasa + lista zespołów (pierwsze trzy dostają medale)
    results: z
      .array(
        z.object({
          class: z.string(),
          photo: image().optional(),
          entries: z.array(
            z.object({
              handler: z.string(),
              dog: z.string(),
              points: z.string().optional(),
              grade: z.string().optional(),
              note: z.string().optional(), // np. "nieobecna"
            })
          ),
        })
      )
      .optional(),
    // Plan dnia z listami startowymi
    scheduleNote: z.string().optional(),
    schedule: z
      .array(
        z.object({
          time: z.string(),
          title: z.string(),
          description: z.string().optional(),
          startList: z.array(z.string()).optional(),
        })
      )
      .optional(),
    gallery: z.array(
      z.object({
        url: image(), // ZMIENIONO: z.string() na image()
        alt: z.string(),
        // home: true – zdjęcie trafia do galerii "Zdjęcia z ringu" na stronie głównej
        home: z.boolean().optional(),
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
