export type Schwierigkeit = 'einfach' | 'mittel' | 'schwer'

export interface QuizFrage {
  frage: string
  optionen: string[]
  antwort: number
  erklaerung: string
}

export interface Aufgabe {
  id: string
  titel: string
  aufgabeText: string
  tipp?: string
  loesung: string
  schwierigkeit: Schwierigkeit
  kategorie?: string
}

export interface UebungsblattAufgabe {
  nr: number
  /** Optionaler abweichender Anzeigetext; sonst wird aufgabeText der Aufgabe genutzt. */
  text?: string
  aufgabeId: string
}

export interface Uebungsblatt {
  id: string
  nr: string
  typ: 'Hausaufgabe' | 'Präsenzaufgabe'
  beschreibung?: string
  aufgaben: UebungsblattAufgabe[]
}

export interface FormelBeispiel {
  /** Gegebene Werte */
  gegeben: string
  /** Einsetzen / Rechenweg */
  rechnung: string
  /** Ergebnis inkl. kurzer Interpretation */
  ergebnis: string
}

export interface Formel {
  name: string
  /** Optionale Abkürzung, z.B. "EKQ" */
  kuerzel?: string
  /** Die Formel als Ausdruck */
  formel: string
  erklaerung: string
  /** Optionale Varianten (z.B. die drei Bilanzierungs-Fälle) */
  varianten?: string[]
  beispiele: FormelBeispiel[]
}

export interface FormelGruppe {
  titel: string
  formeln: Formel[]
}

export interface ThemaAbschnitt {
  /** Überschrift des Unterabschnitts, z.B. "1.2 Wirtschaftliches Handeln" */
  titel: string
  beschreibung?: string
  punkte?: string[]
}

export interface Thema {
  /** Kapitelüberschrift, z.B. "1 Grundlagen" */
  titel: string
  beschreibung?: string
  /** Unterabschnitte des Kapitels */
  abschnitte?: ThemaAbschnitt[]
  /** Direkte Stichpunkte ohne Unterabschnitt */
  punkte?: string[]
}
