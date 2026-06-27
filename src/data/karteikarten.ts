import type { FlashCard } from 'lernseiten-ui'
import { formelGruppen } from './formeln'
import { aufgaben } from './aufgaben'
import { altklausurAufgaben } from './altklausuren'
import { quizFragen } from './quiz'

// Karteikarten werden aus den vorhandenen Inhalten abgeleitet, damit nur eine
// Quelle gepflegt werden muss: bevorzugt aus den Formeln (Begriff → Formel),
// ergänzt aus den Übungs-/Altklausur-Aufgaben (Frage → Lösung) und aus den
// Quizfragen (Frage → Erklärung). Bei Bedarf hier eigene Karten ergänzen.

// Die Formeln nutzen die [[Zähler|Nenner]]-Schreibweise für Brüche. Diese
// Original-Syntax wird beibehalten – der an <Flashcards render={…}> übergebene
// Renderer (FormelText) stellt sie als gestapelten Bruch dar.

export const karteikarten: FlashCard[] = [
  // 1) Formeln: Begriff (+ Kürzel) als Vorderseite, Formel & Erklärung als Rückseite.
  ...formelGruppen.flatMap(gruppe =>
    gruppe.formeln.map(formel => ({
      id: `f-${formel.name}`,
      front: formel.kuerzel ? `${formel.name} (${formel.kuerzel})` : formel.name,
      back: `${formel.formel}\n\n${formel.erklaerung}`,
      tag: gruppe.titel,
    })),
  ),
  // 2) Übungs-Aufgaben: Frage → Musterlösung.
  ...aufgaben.map(a => ({
    id: `a-${a.id}`,
    front: a.aufgabeText,
    back: a.loesung,
    tag: a.kategorie ?? a.titel,
  })),
  // 3) Altklausur-Aufgaben: Frage → Musterlösung.
  ...altklausurAufgaben.map(a => ({
    id: `k-${a.id}`,
    front: a.aufgabeText,
    back: a.loesung,
    tag: a.kategorie ?? a.titel,
  })),
  // 4) Quizfragen: Frage → Erklärung.
  ...quizFragen.map((q, i) => ({
    id: `q-${i}`,
    front: q.frage,
    back: q.erklaerung,
    tag: q.quelle,
  })),
]
