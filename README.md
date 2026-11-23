# Śląski Diament Posłuszeństwa

Strona zawodów Obedience na Śląsku (klasy 0–3) – Astro + SCSS.

## Uruchomienie

```bash
pnpm install
pnpm dev        # serwer deweloperski
pnpm build      # wersja produkcyjna do folderu dist/
```

## Gdzie co jest

- `src/content/blog/*.mdx` – newsy (nowy wpis = nowy plik .mdx)
- `src/content/projects/*.mdx` – edycje zawodów; zdjęcie z galerii z `home: true` trafia na stronę główną,
  a pole `planned: "wiosna 2027"` oznacza planowaną edycję bez daty
- `src/data/home.ts` – stałe treści strony głównej (hero, organizatorzy, liczby, formularz zapisów)
- `src/data/sponsors.ts` – partnerzy pokazywani w hero
- `src/consts.ts` – nazwa, adres strony, e-mail, media społecznościowe
- `public/video/rolka.mp4` – pionowa rolka w hero (pojawia się automatycznie, gdy plik istnieje)
- `scripts/optimize-images.mjs` – zmniejszanie zdjęć przed dodaniem (`pnpm optimize-images`)
