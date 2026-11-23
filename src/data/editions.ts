// src/data/editions.ts
// Edycje zawodów z plików .mdx (src/content/projects) podzielone na przeszłe i następną.
import { getCollection, type CollectionEntry } from "astro:content";

export type Edition = CollectionEntry<"projects">;

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
export const toRoman = (n: number) => ROMAN[n] ?? String(n);

export async function getEditions() {
  const now = Date.now();
  const all = await getCollection("projects");

  // Przeszłe: mają datę, która już minęła – od najnowszej
  const past = all
    .filter((e) => e.data.date && e.data.date.valueOf() <= now)
    .sort((a, b) => b.data.date!.valueOf() - a.data.date!.valueOf());

  // Następna: data w przyszłości albo tylko "planned" (np. "wiosna 2027")
  const upcoming = all
    .filter((e) => (e.data.date && e.data.date.valueOf() > now) || (!e.data.date && e.data.planned))
    .sort((a, b) => (a.data.date?.valueOf() ?? Infinity) - (b.data.date?.valueOf() ?? Infinity));

  const next = upcoming[0];
  // Jeśli nie ma jeszcze pliku następnej edycji, nadajemy jej kolejny numer
  const nextTitle = next?.data.title ?? `${toRoman(past.length + 1)} edycja`;
  const nextWhen = next?.data.date
    ? next.data.date.toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })
    : (next?.data.planned ?? null);

  return { past, next, nextTitle, nextWhen };
}

export const formatShortDate = (date?: Date) =>
  date
    ? date.toLocaleDateString("pl-PL", { day: "2-digit", month: "2-digit", year: "numeric" })
    : "";
