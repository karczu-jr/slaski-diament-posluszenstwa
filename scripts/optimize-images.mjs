// scripts/optimize-images.mjs
// Zmniejsza zdjęcia źródłowe (np. prosto z aparatu, 10+ MB) do rozsądnego rozmiaru
// i zapisuje je jako WebP. Astro i tak wygeneruje z nich miniatury i wersje do podglądu,
// ale z małego źródła robi to wielokrotnie szybciej, a repozytorium jest lżejsze.
//
// Użycie:
//   node scripts/optimize-images.mjs <plik-lub-folder-źródłowy> <folder-docelowy> [prefiks]
//
// Przykład:
//   node scripts/optimize-images.mjs ~/Downloads/zdjecia src/assets/img/projects/sdp1/galeria sdp1
//   → src/assets/img/projects/sdp1/galeria/sdp1-01.webp, sdp1-02.webp, ...
//   (bez prefiksu nazwa pliku zostaje taka jak oryginał, tylko z rozszerzeniem .webp)
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_SIZE = 2560; // dłuższy bok w px – wystarcza na podgląd pełnoekranowy (Gallery robi max 2000 px)
const QUALITY = 82;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff"]);

const [input, outDir, prefix] = process.argv.slice(2);
if (!input || !outDir) {
  console.error("Użycie: node scripts/optimize-images.mjs <źródło> <folder-docelowy> [prefiks]");
  process.exit(1);
}

const files = (await stat(input)).isDirectory()
  ? (await readdir(input))
      .filter((f) => !f.startsWith(".") && EXTENSIONS.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "pl", { numeric: true }))
      .map((f) => path.join(input, f))
  : [input];

await mkdir(outDir, { recursive: true });

const pad = String(files.length).length < 2 ? 2 : String(files.length).length;
let totalIn = 0;
let totalOut = 0;

for (const [i, file] of files.entries()) {
  const base = prefix
    ? `${prefix}-${String(i + 1).padStart(pad, "0")}`
    : path.basename(file, path.extname(file));
  const outFile = path.join(outDir, `${base}.webp`);

  const info = await sharp(file)
    .rotate() // obrót wg EXIF (zdjęcia z telefonu)
    .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outFile);

  const before = (await stat(file)).size;
  totalIn += before;
  totalOut += info.size;
  console.log(
    `${path.basename(file)} → ${path.relative(process.cwd(), outFile)}  ` +
      `${info.width}×${info.height}  ${(before / 1e6).toFixed(1)} MB → ${(info.size / 1e3).toFixed(0)} kB`
  );
}

console.log(
  `\nGotowe: ${files.length} plik(ów), ${(totalIn / 1e6).toFixed(1)} MB → ${(totalOut / 1e6).toFixed(1)} MB`
);
