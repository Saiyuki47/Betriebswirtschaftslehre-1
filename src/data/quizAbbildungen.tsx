import type { QuizFrage } from 'lernseiten-ui'
import { baseBeschriftungen, type BeschriftungsBild } from './themenBilder/_base'
import { beschriftungen as b1 } from './themenBilder/kapitel-1'
import { beschriftungen as b2 } from './themenBilder/kapitel-2'
import { beschriftungen as b3 } from './themenBilder/kapitel-3'
import { beschriftungen as b4 } from './themenBilder/kapitel-4'
import { beschriftungen as b5 } from './themenBilder/kapitel-5'

// Beschriftungs-Quizfragen: pro SVG-Abbildung des Referenz-Tabs eine Frage
// „Abbildung beschriften" (Begriffe per Drag & Drop in die leeren Kästen).
// Die Daten (volle + leere Variante + Slots) kommen aus themenBilder/*;
// die vollständige Abbildung wird nach dem Beantworten als Lösung gezeigt.
// Eigene Gruppe „Abbildungen" → eigener Filter-Chip im Quiz.

const alle: BeschriftungsBild[] = [...baseBeschriftungen, ...b1, ...b2, ...b3, ...b4, ...b5]

export const abbildungsFragen: QuizFrage[] = alle.map(b => ({
  art: 'beschriftung',
  frage: `Beschrifte die Abbildung: ${b.name}`,
  erklaerung: b.erklaerung,
  quelle: b.abschnitt,
  gruppe: 'Abbildungen',
  zusatzQuelle: `Folien vom Lehrer, Seite ${b.seite}`,
  bild: b.bild,
  bildLeer: b.bildLeer,
  viewBoxW: b.viewBoxW,
  viewBoxH: b.viewBoxH,
  maxWidth: b.maxWidth,
  slots: b.slots,
}))
