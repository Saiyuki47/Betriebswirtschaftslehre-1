export type Schwierigkeit = 'einfach' | 'mittel' | 'schwer'

/**
 * Strukturierte Tipps – so ausführlich, dass die Aufgabe allein damit
 * (ohne Vorwissen) lösbar ist. Vier Kategorien (wie im UI angezeigt).
 */
export interface Tipps {
  /** 💡 Konzept verstehen – das nötige Grundwissen/die Theorie dahinter. */
  konzept?: string
  /** 🔍 Vorgehensweise – Schritt für Schritt zur Lösung. */
  vorgehen?: string
  /** 📝 Syntax / Beispiel – Formel, Aufbau oder Musterformulierung. */
  syntax?: string
  /** ⚠️ Häufige Fehler – worauf man achten muss. */
  fehler?: string
}

export interface Aufgabe {
  id: string
  titel: string
  aufgabeText: string
  tipp?: Tipps
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
  typ: 'Hausaufgabe' | 'Präsenzaufgabe' | 'Altklausur'
  /** Optionaler Anzeigename für Filter-Button und Überschrift (statt "Blatt {nr}"). */
  titel?: string
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
