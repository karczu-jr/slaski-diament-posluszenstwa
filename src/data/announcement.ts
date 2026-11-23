// src/data/announcement.ts
// Pasek ogłoszeń nad menu – widoczny na wszystkich stronach.
// Włączanie i wyłączanie: zmień `enabled` na true / false.
// Przykłady treści:
//   "Następna edycja – termin wkrótce."            + "🔔 Powiadom mnie"   → "/#powiadom"
//   "Zapisy na III edycję są otwarte!"             + "📝 Zapisz się"      → link do formularza
//   "Wyniki II edycji są już online."              + "🏆 Zobacz podium"   → "/projects/2-edition#wyniki"

export const ANNOUNCEMENT = {
  enabled: true,
  text: "Następna edycja – termin wkrótce.",
  linkText: "🔔 Powiadom mnie",
  href: "/#powiadom",
};
