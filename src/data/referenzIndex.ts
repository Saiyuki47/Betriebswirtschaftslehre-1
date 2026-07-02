import { themen } from './themen'
import { formelGruppen } from './formeln'

// Slug identisch zur ID-Bildung der Referenz-Karten in Formeln.tsx, damit die
// Deep-Links der Aufgaben-Chips (#formeln/<id>) exakt auf die Karten zeigen.
export const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9äöü]+/g, '-').replace(/^-+|-+$/g, '')

const themaRefId = (titel: string) => `thema-${slug(titel)}`

// id → Anzeigetitel für die Referenz-Chips (Themen-Karten + Formel-Karten).
export const referenzTitelById: Record<string, string> = {
  ...Object.fromEntries(themen.map(t => [themaRefId(t.titel), t.titel])),
  ...Object.fromEntries(
    formelGruppen.flatMap((g, gi) =>
      g.formeln.map((f, fi) => [
        `formel-${gi}-${fi}`,
        f.kuerzel ? `${f.name} (${f.kuerzel})` : f.name,
      ]),
    ),
  ),
}
