// Ordnet jeder Übungsaufgabe (Übungsbegleiter a* + Altklausuren k*) das/die
// passende(n) Referenzthema(en) zu. Die Werte sind Referenz-Karten-IDs; die
// Aufgaben-Chips verlinken per #referenz/<id> auf die passende Karte im
// Referenz-Tab. Titel der Karten kommen aus referenzIndex.referenzTitelById.
export const aufgabeReferenz: Record<string, string[]> = {
  // — Übungsbegleiter —
  // Kapitel 1 – Grundlagen
  a1: ['thema-1-grundlagen'],
  a2: ['thema-1-grundlagen'],
  a3: ['thema-1-grundlagen'],
  a4: ['thema-1-grundlagen'],
  a5: ['thema-1-grundlagen'],
  a6: ['thema-1-grundlagen'],
  a8: ['thema-1-grundlagen'],
  a9: ['thema-1-grundlagen'],
  a11: ['thema-1-grundlagen'],
  a12: ['thema-1-grundlagen'],
  // Kapitel 2 – Betrieblicher Lebenszyklus (Kartell/Zusammenschlüsse, Sanierung)
  a13: ['thema-2-betrieblicher-lebenszyklus'],
  a14: ['thema-2-betrieblicher-lebenszyklus'],
  // Kapitel 3 – Mengen, Werte & Kennzahlen
  a7: ['thema-3-mengen-und-werte'],
  a15: ['thema-3-mengen-und-werte'],
  a16: ['thema-3-mengen-und-werte'],
  a17: ['thema-3-mengen-und-werte'],
  a18: ['thema-3-mengen-und-werte'],
  a19: ['thema-3-mengen-und-werte'],
  a20: ['thema-3-mengen-und-werte'],
  a21: ['thema-3-mengen-und-werte'],
  // Kapitel 4 – Rechtsformen & Mitbestimmung
  a10: ['thema-4-rechtsformen-und-mitbestimmung'],
  a22: ['thema-4-rechtsformen-und-mitbestimmung'],
  a23: ['thema-4-rechtsformen-und-mitbestimmung'],
  a24: ['thema-4-rechtsformen-und-mitbestimmung'],
  // Kapitel 5 – Ziele im Unternehmen
  a25: ['thema-5-ziele-im-unternehmen'],
  a26: ['thema-5-ziele-im-unternehmen'],
  a27: ['thema-5-ziele-im-unternehmen'],
  a28: ['thema-5-ziele-im-unternehmen'],

  // — Altklausuren (nach Inhalt; primäres Thema zuerst) —
  'k-ss15-1': ['thema-1-grundlagen', 'thema-2-betrieblicher-lebenszyklus'],
  'k-ss15-2': ['thema-3-mengen-und-werte', 'thema-5-ziele-im-unternehmen', 'thema-1-grundlagen'],
  'k-ss15-3': ['thema-3-mengen-und-werte', 'thema-4-rechtsformen-und-mitbestimmung'],
  'k-ss16-1': ['thema-1-grundlagen', 'thema-2-betrieblicher-lebenszyklus', 'thema-3-mengen-und-werte'],
  'k-ss16-2': ['thema-5-ziele-im-unternehmen', 'thema-1-grundlagen'],
  'k-ss16-3': ['thema-3-mengen-und-werte', 'thema-4-rechtsformen-und-mitbestimmung'],
  'k-ss17-1': ['thema-1-grundlagen', 'thema-5-ziele-im-unternehmen'],
  'k-ss17-2': ['thema-2-betrieblicher-lebenszyklus', 'thema-3-mengen-und-werte'],
  'k-ss17-3': ['thema-5-ziele-im-unternehmen', 'thema-4-rechtsformen-und-mitbestimmung', 'thema-1-grundlagen'],
  'k-ss18-1': ['thema-3-mengen-und-werte', 'thema-1-grundlagen', 'thema-2-betrieblicher-lebenszyklus'],
  'k-ss18-2': ['thema-3-mengen-und-werte', 'thema-1-grundlagen', 'thema-5-ziele-im-unternehmen'],
  'k-ss18-3': ['thema-3-mengen-und-werte', 'thema-4-rechtsformen-und-mitbestimmung'],
  'k-ss19-1': ['thema-1-grundlagen', 'thema-2-betrieblicher-lebenszyklus'],
  'k-ss19-2': ['thema-4-rechtsformen-und-mitbestimmung', 'thema-3-mengen-und-werte'],
  'k-ss19-3': ['thema-3-mengen-und-werte', 'thema-4-rechtsformen-und-mitbestimmung'],
  'k-ss20-1': ['thema-1-grundlagen'],
  'k-ss20-2': ['thema-4-rechtsformen-und-mitbestimmung', 'thema-2-betrieblicher-lebenszyklus', 'thema-5-ziele-im-unternehmen'],
  'k-ss20-3': ['thema-3-mengen-und-werte', 'thema-2-betrieblicher-lebenszyklus', 'thema-1-grundlagen'],
  'k-ss21-1': ['thema-4-rechtsformen-und-mitbestimmung', 'thema-3-mengen-und-werte'],
  'k-ss21-2': ['thema-5-ziele-im-unternehmen', 'thema-1-grundlagen', 'thema-4-rechtsformen-und-mitbestimmung'],
  'k-ss21-3': ['thema-3-mengen-und-werte', 'thema-5-ziele-im-unternehmen'],
  'k-ws1516-1': ['thema-1-grundlagen', 'thema-5-ziele-im-unternehmen'],
  'k-ws1516-2': ['thema-4-rechtsformen-und-mitbestimmung', 'thema-3-mengen-und-werte', 'thema-5-ziele-im-unternehmen'],
  'k-ws1516-3': ['thema-3-mengen-und-werte', 'thema-5-ziele-im-unternehmen'],
  'k-ws1718-1': ['thema-1-grundlagen', 'thema-5-ziele-im-unternehmen', 'thema-3-mengen-und-werte'],
  'k-ws1718-2': ['thema-3-mengen-und-werte', 'thema-1-grundlagen', 'thema-5-ziele-im-unternehmen'],
  'k-ws1718-3': ['thema-3-mengen-und-werte', 'thema-4-rechtsformen-und-mitbestimmung'],
}
