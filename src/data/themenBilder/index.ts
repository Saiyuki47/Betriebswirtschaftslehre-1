import type { ReactNode } from 'react'
import { baseBilder } from './_base'
import { bilder as b1 } from './kapitel-1'
import { bilder as b2 } from './kapitel-2'
import { bilder as b3 } from './kapitel-3'
import { bilder as b4 } from './kapitel-4'
import { bilder as b5 } from './kapitel-5'

// Gemergte Abbildungs-Map (Schlüssel = exakter `abschnitt.titel` aus themen/).
// Kapitel-Figuren überschreiben ggf. Basis-Figuren gleichen Schlüssels.
// Konsumenten (Formeln.tsx, Drucken.tsx) importieren unverändert `themenBilder`.
export const themenBilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  ...baseBilder,
  ...b1,
  ...b2,
  ...b3,
  ...b4,
  ...b5,
}
