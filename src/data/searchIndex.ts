import type { SearchItem } from 'lernseiten-ui'
import { uebungsblaetter } from './uebungsblaetter'
import { aufgaben } from './aufgaben'
import { altklausurAufgaben } from './altklausuren'
import { quizFragen } from './quiz'
import { formelGruppen } from './formeln'
import { themen } from './themen'

// Such-Index aus den Inhalten der Seite. Jeder Treffer kennt seinen Ziel-Tab
// (gültige TabId), damit die globale Suche direkt dorthin springen kann.

// Aufgaben (Übungsbegleiter + Altklausuren) nach id auflösen, um den Fragetext
// für die Übungsblatt-Einträge zu finden.
const alleAufgaben = [...aufgaben, ...altklausurAufgaben]

// Brüche der Form [[Zähler|Nenner]] für die Anzeige im Such-Treffer lesbar machen.
const formelText = (text: string): string =>
  text.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '($1 / $2)')

export const searchIndex: SearchItem[] = [
  // Übungsblatt-Aufgaben → Tab "uebung".
  ...uebungsblaetter.flatMap(b =>
    b.aufgaben.map(t => {
      const aufgabe = alleAufgaben.find(a => a.id === t.aufgabeId)
      return {
        label: aufgabe?.titel ?? `Aufgabe ${t.nr}`,
        snippet: t.text ?? aufgabe?.aufgabeText,
        tab: 'uebung',
        keywords: `${b.titel ?? `Blatt ${b.nr}`} ${b.typ} ${aufgabe?.kategorie ?? ''}`.trim(),
      }
    }),
  ),
  // Quizfragen → Tab "quiz".
  ...quizFragen.map(q => ({
    label: q.frage,
    snippet: q.erklaerung,
    tab: 'quiz',
    keywords: q.quelle ?? '',
  })),
  // Formeln → Tab "formeln".
  ...formelGruppen.flatMap(gruppe =>
    gruppe.formeln.map(formel => ({
      label: formel.kuerzel ? `${formel.name} (${formel.kuerzel})` : formel.name,
      snippet: formelText(formel.formel),
      tab: 'formeln',
      keywords: `${gruppe.titel} ${formel.kuerzel ?? ''}`.trim(),
    })),
  ),
  // Themen (jetzt im Referenz-Tab) → Tab "formeln". Kapitel und Unterabschnitte einzeln auffindbar.
  ...themen.flatMap(thema => [
    {
      label: thema.titel,
      snippet: thema.beschreibung,
      tab: 'formeln',
      keywords: 'Thema Kapitel Schema',
    },
    ...(thema.abschnitte ?? []).map(abschnitt => ({
      label: abschnitt.titel,
      snippet: abschnitt.beschreibung ?? abschnitt.punkte?.[0],
      tab: 'formeln',
      keywords: thema.titel,
    })),
  ]),
]
