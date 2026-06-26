import type { Uebungsblatt } from '../types'

// Übungsfragen zur ABWL I, gruppiert nach der Gliederung des Moduls.
// Die Aufgabennummern (nr) entsprechen der Nummerierung im Übungsbegleiter.
// Frage-, Tipp- und Lösungstexte stehen in ../data/aufgaben.ts.
export const uebungsblaetter: Uebungsblatt[] = [
  {
    id: 'kap1',
    nr: '1',
    typ: 'Präsenzaufgabe',
    titel: '1 Grundlagen',
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
    titel: '2 Betrieblicher Lebenszyklus',
    beschreibung:
      'Betrieblicher Lebenszyklus: Gründung, Wachstum, Stagnation und Schrumpfung – hier mit Schwerpunkt Sanierung.',
    aufgaben: [{ nr: 14, aufgabeId: 'a14' }],
  },
  {
    id: 'kap3',
    nr: '3',
    typ: 'Präsenzaufgabe',
    titel: '3 Mengen und Werte',
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
    titel: '4 Rechtsformen und Mitbestimmung',
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
    titel: '5 Ziele im Unternehmen',
    beschreibung:
      'Ziele im Unternehmen: Stakeholder und Zielbildung, Unternehmensphilosophie, Zielkonflikte und Zielkategorien.',
    aufgaben: [
      { nr: 25, aufgabeId: 'a25' },
      { nr: 26, aufgabeId: 'a26' },
      { nr: 27, aufgabeId: 'a27' },
      { nr: 28, aufgabeId: 'a28' },
    ],
  },
  // ---- Altklausuren (eigenständig lösbar, mit Musterlösung & Erklärung) ----
  {
    id: 'kl-ss2015',
    nr: 'SS 2015',
    typ: 'Altklausur',
    titel: 'SS 2015',
    beschreibung: 'Originalklausur SS 2015 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss15-1' },
      { nr: 2, aufgabeId: 'k-ss15-2' },
      { nr: 3, aufgabeId: 'k-ss15-3' },
    ],
  },
  {
    id: 'kl-ws2015',
    nr: 'WS 2015/16',
    typ: 'Altklausur',
    titel: 'WS 2015/16',
    beschreibung: 'Originalklausur WS 2015/16 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ws1516-1' },
      { nr: 2, aufgabeId: 'k-ws1516-2' },
      { nr: 3, aufgabeId: 'k-ws1516-3' },
    ],
  },
  {
    id: 'kl-ss2016',
    nr: 'SS 2016',
    typ: 'Altklausur',
    titel: 'SS 2016',
    beschreibung: 'Originalklausur SS 2016 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss16-1' },
      { nr: 2, aufgabeId: 'k-ss16-2' },
      { nr: 3, aufgabeId: 'k-ss16-3' },
    ],
  },
  {
    id: 'kl-ss2017',
    nr: 'SS 2017',
    typ: 'Altklausur',
    titel: 'SS 2017',
    beschreibung: 'Originalklausur SS 2017 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss17-1' },
      { nr: 2, aufgabeId: 'k-ss17-2' },
      { nr: 3, aufgabeId: 'k-ss17-3' },
    ],
  },
  {
    id: 'kl-ws2017',
    nr: 'WS 2017/18',
    typ: 'Altklausur',
    titel: 'WS 2017/18',
    beschreibung: 'Originalklausur WS 2017/18 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ws1718-1' },
      { nr: 2, aufgabeId: 'k-ws1718-2' },
      { nr: 3, aufgabeId: 'k-ws1718-3' },
    ],
  },
  {
    id: 'kl-ss2018',
    nr: 'SS 2018',
    typ: 'Altklausur',
    titel: 'SS 2018',
    beschreibung: 'Originalklausur SS 2018 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss18-1' },
      { nr: 2, aufgabeId: 'k-ss18-2' },
      { nr: 3, aufgabeId: 'k-ss18-3' },
    ],
  },
  {
    id: 'kl-ss2019',
    nr: 'SS 2019',
    typ: 'Altklausur',
    titel: 'SS 2019',
    beschreibung: 'Originalklausur SS 2019 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss19-1' },
      { nr: 2, aufgabeId: 'k-ss19-2' },
      { nr: 3, aufgabeId: 'k-ss19-3' },
    ],
  },
  {
    id: 'kl-ss2020',
    nr: 'SS 2020',
    typ: 'Altklausur',
    titel: 'SS 2020',
    beschreibung: 'Originalklausur SS 2020 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss20-1' },
      { nr: 2, aufgabeId: 'k-ss20-2' },
      { nr: 3, aufgabeId: 'k-ss20-3' },
    ],
  },
  {
    id: 'kl-ss2021',
    nr: 'SS 2021',
    typ: 'Altklausur',
    titel: 'SS 2021',
    beschreibung: 'Originalklausur SS 2021 – drei Aufgaben mit Musterlösung und Erklärung.',
    aufgaben: [
      { nr: 1, aufgabeId: 'k-ss21-1' },
      { nr: 2, aufgabeId: 'k-ss21-2' },
      { nr: 3, aufgabeId: 'k-ss21-3' },
    ],
  },
]
