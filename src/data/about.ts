// src/data/about.ts
// Treści strony "O nas", które NIE pochodzą z plików .mdx.
// Zdjęcia, imiona i historia są wspólne ze stroną główną – patrz src/data/home.ts (TEAM, STORY).

// Plakietki i krótkie opisy pod zdjęciami – kolejność jak w TEAM (Magda, Mateusz).
// `bio` puste = karta bez opisu. Wpisz 2–3 zdania: od kiedy startujesz, z jakim psem,
// co lubisz w Obedience i za co odpowiadasz na zawodach.
export const PEOPLE_EXTRA: Record<string, { chips: string[]; bio: string }> = {
  Magda: {
    chips: ["🎓 Trenerka", "🏅 Zawodniczka", "🐾 Ułóż Psa"],
    bio: "",
  },
  Mateusz: {
    chips: ["🏅 Zawodnik", "🐾 Ułóż Psa"],
    bio: "",
  },
};

// "Dlaczego warto u nas startować" – 7 wyróżników, ósme pole to link do edycji.
export const VALUES = [
  { emoji: "🏆", title: "Organizacja", text: "Harmonogram, listy startowe i wyniki – zawsze na czas." },
  { emoji: "💬", title: "Komunikacja", text: "Wszystkie ogłoszenia w jednym miejscu, jasno i konkretnie." },
  { emoji: "📞", title: "Kontakt", text: "Pytanie przed startem? Odpisujemy szybko." },
  { emoji: "🎁", title: "Nagrody", text: "Dzięki partnerom każde podium coś znaczy." },
  { emoji: "🐕", title: "Różnorodność klas", text: "Klasy 0–3 na jednych zawodach." },
  { emoji: "🔥", title: "Zaangażowanie", text: "Robimy to, bo sami startujemy." },
  { emoji: "🔄", title: "Cykliczność", text: "Kolejne edycje – wiosną i jesienią." },
];

export const SCHOOL = {
  name: "Ułóż\u00A0Psa", // niełamliwa spacja – nazwa szkoły nie rozpada się na dwie linie
  text: "Szkolenie psów i Obedience w Gliwicach. Oboje trenujemy i startujemy w jej barwach.",
  url: "https://ulozpsa.pl",
  linkText: "Odwiedź ulozpsa.pl",
};
