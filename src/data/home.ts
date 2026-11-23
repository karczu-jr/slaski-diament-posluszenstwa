// src/data/home.ts
// Stałe treści strony głównej, które NIE pochodzą z plików .mdx.
// Newsy, edycje zawodów i galeria biorą się automatycznie z src/content/.

import type { ImageMetadata } from "astro";
import heroPoster from "../assets/img/projects/sdp1/galeria/sdp1-marta-22.webp";
import photoMateusz from "../assets/img/team/mateusz.webp";
import photoMagda from "../assets/img/team/magda.webp";

export const HERO = {
  eyebrow: "Obedience · Śląsk · Klasy 0–3",
  lead: "Zawody Obedience na Śląsku dla klas 0–3. Spokojna atmosfera, jasne zasady i wyniki na czas.",
  // Rolka Marty (pionowa, 9:16). Wrzuć plik do public/video/rolka.mp4 – pojawi się sama.
  // Do czasu wrzucenia pliku w tym miejscu widać zdjęcie (poster).
  reel: {
    src: "/video/rolka.mp4",
    poster: heroPoster,
    posterAlt: "Pies przeskakuje przeszkodę z aportem podczas I edycji",
    credit: "Marta Wlazło",
  },
};

export const STATS = [
  { value: "4", label: "klasy startowe 🐕" },
  { value: "53", label: "zadowolone zespoły 👥" },
];

type Person = {
  name: string;
  role?: string;
  /** Zdjęcie z src/assets – bez niego wyświetla się ramka zastępcza */
  photo?: ImageMetadata;
  photoAlt?: string;
  /** Kadr zdjęcia w pionowej ramce 3:4, np. "55% 50%" (poziomo pionowo) */
  photoPosition?: string;
};

// TODO: role (np. "trenerka · organizatorka") – opcjonalnie
export const TEAM: Person[] = [
  {
    name: "Magda",
    photo: photoMagda,
    photoAlt: "Magda z psem, który skacze jej w ramiona",
    photoPosition: "56% 50%",
  },
  {
    name: "Mateusz",
    photo: photoMateusz,
    photoAlt: "Mateusz z psem podczas chodzenia przy nodze",
    photoPosition: "58% 50%",
  },
];

export const STORY = [
  "Jesteśmy Magda i Mateusz. Projekt Śląski Diament Posłuszeństwa stworzyliśmy, bo łączy nas pasja i miłość do Obedience.",
  "Oboje reprezentujemy szkołę Ułóż Psa: Magda jako trenerka i zawodniczka, Mateusz jako zawodnik. Robimy zawody, na które sami chcielibyśmy jeździć: dobrze zorganizowane, spokojne i życzliwe dla psa i przewodnika. Chcemy, żeby każdy zespół, od debiutantów po doświadczonych zawodników, wyjeżdżał od nas z dobrymi wspomnieniami i chęcią powrotu.",
];

// Formularz "Poznaj termin kolejnych zawodów" – adres formularza Brevo (Marketing → Formularze → Share).
// Zapis trafia na listę "Powiadomienia o zawodach" (double opt-in). Pusty adres = formularz nic nie wysyła.
// Po kliknięciu w link w mailu Brevo przekierowuje na /zapis-potwierdzony.
export const SIGNUP = {
  action:
    "https://259a1bfc.sibforms.com/serve/MUIFALLSqJM1iYwTaAtGMNihcwTLqVNTbErmy0UtfK8ixNgiD8_NFj_E3fNQlw839ykRaDdF4KhXQ5WsvtwX_RMYVxn0GLze7-u4uPliB1O_lX9cJb0cj_f5D-AkfVbOyRLTHszdXJUJcSKiVmofUzAEDDozUSJ-Mp2kD1Zk35BURE6eMKS1phD1EOnEAnz95RJgc-tjCOrJR4K4ng==",
  privacyUrl: "/polityka-prywatnosci",
};
