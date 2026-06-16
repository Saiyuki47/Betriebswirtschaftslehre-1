import type { Uebungsblatt } from '../types'

// Übungsfragen zur ABWL I, gruppiert nach der Gliederung des Moduls.
// Die Aufgabennummern (nr) entsprechen der Nummerierung im Übungsbegleiter.
// Frage-, Tipp- und Lösungstexte stehen in ../data/aufgaben.ts.
export const uebungsblaetter: Uebungsblatt[] = [
  {
    id: 'kap1',
    nr: '1',
    typ: 'Präsenzaufgabe',
    beschreibung:
      'Grundlagen: Erkenntnisobjekt der BWL, wirtschaftliches Handeln, Wirtschaftseinheiten, Betriebstypologie und Gliederung der BWL.',
    aufgaben: [
      { nr: 1, aufgabeId: 'a1' },
      { nr: 2, aufgabeId: 'a2' },
      { nr: 3, aufgabeId: 'a3' },
      { nr: 4, aufgabeId: 'a4' },
      { nr: 5, aufgabeId: 'a5' },
      { nr: 6, aufgabeId: 'a6' },
      { nr: 8, aufgabeId: 'a8' },
      { nr: 9, aufgabeId: 'a9' },
      { nr: 11, aufgabeId: 'a11' },
      { nr: 12, aufgabeId: 'a12' },
      { nr: 13, aufgabeId: 'a13' },
    ],
  },
  {
    id: 'kap2',
    nr: '2',
    typ: 'Präsenzaufgabe',
    beschreibung:
      'Betrieblicher Lebenszyklus: Gründung, Wachstum, Stagnation und Schrumpfung – hier mit Schwerpunkt Sanierung.',
    aufgaben: [{ nr: 14, aufgabeId: 'a14' }],
  },
  {
    id: 'kap3',
    nr: '3',
    typ: 'Präsenzaufgabe',
    beschreibung:
      'Mengen und Werte: Jahresabschluss und betriebswirtschaftliche Kennzahlen (Rentabilität, Liquidität, Leverage-Effekt) inkl. Rechenaufgaben.',
    aufgaben: [
      { nr: 7, aufgabeId: 'a7' },
      { nr: 15, aufgabeId: 'a15' },
      { nr: 16, aufgabeId: 'a16' },
      { nr: 17, aufgabeId: 'a17' },
      { nr: 18, aufgabeId: 'a18' },
      { nr: 19, aufgabeId: 'a19' },
      { nr: 20, aufgabeId: 'a20' },
      { nr: 21, aufgabeId: 'a21' },
    ],
  },
  {
    id: 'kap4',
    nr: '4',
    typ: 'Präsenzaufgabe',
    beschreibung:
      'Rechtsformen und Mitbestimmung: Systematik der Rechtsformen, Vergleich der Gesellschaftsformen sowie betriebliche und unternehmerische Mitbestimmung.',
    aufgaben: [
      { nr: 10, aufgabeId: 'a10' },
      { nr: 22, aufgabeId: 'a22' },
      { nr: 23, aufgabeId: 'a23' },
      { nr: 24, aufgabeId: 'a24' },
    ],
  },
  {
    id: 'kap5',
    nr: '5',
    typ: 'Präsenzaufgabe',
    beschreibung:
      'Ziele im Unternehmen: Stakeholder und Zielbildung, Unternehmensphilosophie, Zielkonflikte und Zielkategorien.',
    aufgaben: [
      { nr: 25, aufgabeId: 'a25' },
      { nr: 26, aufgabeId: 'a26' },
      { nr: 27, aufgabeId: 'a27' },
      { nr: 28, aufgabeId: 'a28' },
    ],
  },
]
