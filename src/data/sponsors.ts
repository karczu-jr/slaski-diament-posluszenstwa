// src/data/sponsors.ts
// Stali sponsorzy strony – pasek w komponencie About (strona główna i "O nas").
// Partnerzy konkretnej edycji zawodów są osobno, w pliku .mdx danej edycji.
import type { Partner } from "../components/Partners.astro";
import logoZkwp from "../assets/img/partners/zkwp.svg";
import logoUlozPsa from "../assets/img/partners/ulozpsa_logo.svg";

// Logo Marty Wlazło – wczytywane, jeśli plik leży w src/assets/img/partners/
// (logo_Marta_Wlazlo.png / .webp / .svg …). Bez pliku po prostu go pomijamy.
const martaLogo = Object.values(
  import.meta.glob<{ default: ImageMetadata }>("../assets/img/partners/logo_Marta_Wlazlo.*", {
    eager: true,
  })
)[0]?.default;

export const sponsors: Partner[] = [
  {
    name: "ZKwP Oddział Zabrze",
    logo: logoZkwp,
    url: "https://zkzabrzenet.pl",
    alt: "Logo ZKwP Oddział Zabrze",
  },
  {
    name: "Ułóż Psa – szkolenie psów",
    logo: logoUlozPsa,
    url: "https://ulozpsa.pl",
    alt: "Logo Ułóż Psa – szkolenie psów w Gliwicach",
  },
  ...(martaLogo
    ? [
        {
          name: "Marta Wlazło",
          logo: martaLogo,
          alt: "Logo Marta Wlazło",
        },
      ]
    : []),
];
