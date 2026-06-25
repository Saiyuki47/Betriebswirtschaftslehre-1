import type { FormelGruppe } from '../types'

// Alle Formeln aus dem BWL-Lernzettel – mit Erklärung und Rechenbeispielen.
// Abkürzungen: EK = Eigenkapital, FK = Fremdkapital, GK = Gesamtkapital,
// JÜ = Jahresüberschuss, AV = Anlagevermögen, FKZ = Fremdkapitalzinssatz,
// RAP = Rechnungsabgrenzungsposten, ME = Mengeneinheiten.
export const formelGruppen: FormelGruppe[] = [
  {
    titel: 'Grundlagen-Kennzahlen',
    formeln: [
      {
        name: 'Wirtschaftlichkeit',
        formel: 'Ertrag / Aufwand   (Gewinn = Ertrag − Aufwand)',
        erklaerung:
          'Setzt den Ertrag ins Verhältnis zum Aufwand. Ein Wert über 1 bedeutet, dass mehr erwirtschaftet als eingesetzt wird – das Unternehmen arbeitet wirtschaftlich. Unter 1 entsteht ein Verlust.',
        beispiele: [
          {
            gegeben: 'Ertrag = 76 Mio. €, Aufwand = 74,2 Mio. €',
            rechnung: '76 / 74,2',
            ergebnis: '≈ 1,02 → knapp wirtschaftlich',
          },
          {
            gegeben: 'Ertrag = 27 Mio. €, Aufwand = 25,3 Mio. €',
            rechnung: '27 / 25,3',
            ergebnis: '≈ 1,07 → wirtschaftlich',
          },
          {
            gegeben: 'Ertrag = 100.000 €, Aufwand = 120.000 €',
            rechnung: '100.000 / 120.000',
            ergebnis: '≈ 0,83 → unwirtschaftlich (Verlust)',
          },
        ],
      },
      {
        name: 'Produktivität',
        formel: 'Output (ME) / Input (ME)',
        erklaerung:
          'Rein mengenmäßiges Verhältnis von Ausbringung zu Einsatz (z.B. Stück pro Mitarbeiter). Sagt nichts über Geld oder Gewinn aus. Ein Spezialfall ist die Arbeitsproduktivität = Produktion / Beschäftigte.',
        beispiele: [
          {
            gegeben: 'Produktion = 3.000.000 Stück, Beschäftigte = 270.000',
            rechnung: '3.000.000 / 270.000',
            ergebnis: '≈ 11,1 Stück je Beschäftigtem',
          },
          {
            gegeben: 'Produktion = 1.000.000 Stück, Beschäftigte = 56.000',
            rechnung: '1.000.000 / 56.000',
            ergebnis: '≈ 17,86 Stück je Beschäftigtem',
          },
          {
            gegeben: 'Output = 800 Stück, Input = 40 Arbeitsstunden',
            rechnung: '800 / 40',
            ergebnis: '= 20 Stück pro Stunde',
          },
        ],
      },
      {
        name: 'Umsatzrendite',
        kuerzel: 'UR',
        formel: '(Jahresüberschuss / Umsatz) × 100',
        erklaerung:
          'Zeigt, wie viel Gewinn pro Euro Umsatz übrig bleibt. Auch Umsatzrentabilität genannt. Faustregel: über 5 % ist solide, über 10 % gut.',
        beispiele: [
          {
            gegeben: 'Gewinn = 9.000 €, Umsatz = 600.000 €',
            rechnung: '(9.000 / 600.000) × 100',
            ergebnis: '= 1,5 % → niedrig',
          },
          {
            gegeben: 'Gewinn = 1,7 Mio. €, Umsatz = 27 Mio. €',
            rechnung: '(1,7 / 27) × 100',
            ergebnis: '≈ 6,3 % → solide',
          },
          {
            gegeben: 'JÜ = 14 Mrd. €, Umsatz = 230 Mrd. €',
            rechnung: '(14 / 230) × 100',
            ergebnis: '≈ 6,1 % → solide',
          },
        ],
      },
    ],
  },
  {
    titel: 'Eigenkapital & Verschuldung',
    formeln: [
      {
        name: 'Eigenkapitalquote',
        kuerzel: 'EKQ',
        formel: '(EK / GK) × 100',
        erklaerung:
          'Anteil des Eigenkapitals am Gesamtkapital. Misst die finanzielle Stabilität und Unabhängigkeit – je höher, desto solider. Werte über 20–30 % gelten als gut.',
        varianten: [
          'Fall 1 (ohne Gewinnausschüttung): (EK / GK) × 100',
          'Fall 2 (mit Gewinnausschüttung): ((EK − JÜ) / (GK − JÜ)) × 100',
          'Fall 3 (Ausschüttung mit Verschuldung): ((EK − JÜ) / GK) × 100',
        ],
        beispiele: [
          {
            gegeben: 'EK = 109 Mrd. €, GK = 422 Mrd. €',
            rechnung: '(109 / 422) × 100',
            ergebnis: '≈ 25,8 % → solide',
          },
          {
            gegeben: 'EK = 80.000 €, GK = 120.000 €',
            rechnung: '(80.000 / 120.000) × 100',
            ergebnis: '≈ 66,7 % → sehr solide',
          },
          {
            gegeben: 'Fall 2: EK = 50.000 €, GK = 100.000 €, JÜ = 10.000 €',
            rechnung: '((50.000 − 10.000) / (100.000 − 10.000)) × 100',
            ergebnis: '= 40.000 / 90.000 × 100 ≈ 44,4 %',
          },
        ],
      },
      {
        name: 'Verschuldungsgrad',
        kuerzel: 'VG',
        formel: 'FK / EK',
        erklaerung:
          'Verhältnis von Fremd- zu Eigenkapital. Ein VG von 1 bedeutet gleich viel FK wie EK, ein VG von 2 doppelt so viel FK wie EK. Je niedriger, desto unabhängiger ist das Unternehmen.',
        varianten: [
          'Fall 1: FK / EK',
          'Fall 2: FK / (EK − JÜ)',
          'Fall 3: (FK + JÜ) / (EK − JÜ)',
        ],
        beispiele: [
          {
            gegeben: 'FK = 100.000 €, EK = 50.000 €',
            rechnung: '100.000 / 50.000',
            ergebnis: '= 2 → doppelt so viel FK wie EK',
          },
          {
            gegeben: 'FK = 40.000 €, EK = 80.000 €',
            rechnung: '40.000 / 80.000',
            ergebnis: '= 0,5 → gering verschuldet',
          },
          {
            gegeben: 'FK = 75.000 €, EK = 50.000 €',
            rechnung: '75.000 / 50.000',
            ergebnis: '= 1,5 → auf 1 € EK kommen 1,50 € FK',
          },
        ],
      },
      {
        name: 'Verschuldungsquote',
        formel: '(FK / GK) × 100',
        erklaerung:
          'Anteil des Fremdkapitals am Gesamtkapital – das Gegenstück zur Eigenkapitalquote. Beide Quoten ergeben zusammen 100 %.',
        varianten: [
          'Fall 1: (FK / GK) × 100',
          'Fall 2: (FK / (GK − JÜ)) × 100',
          'Fall 3: ((FK + JÜ) / GK) × 100',
        ],
        beispiele: [
          {
            gegeben: 'FK = 313 Mrd. €, GK = 422 Mrd. €',
            rechnung: '(313 / 422) × 100',
            ergebnis: '≈ 74,2 % → ergänzt EKQ 25,8 % zu 100 %',
          },
          {
            gegeben: 'FK = 40.000 €, GK = 120.000 €',
            rechnung: '(40.000 / 120.000) × 100',
            ergebnis: '≈ 33,3 %',
          },
          {
            gegeben: 'FK = 50.000 €, GK = 100.000 €',
            rechnung: '(50.000 / 100.000) × 100',
            ergebnis: '= 50 %',
          },
        ],
      },
    ],
  },
  {
    titel: 'Anlagen & Deckung',
    formeln: [
      {
        name: 'Anlageintensität',
        formel: '(AV / GK) × 100',
        erklaerung:
          'Anteil des Anlagevermögens am Gesamtvermögen (im Übungsbegleiter „Anlagenquote" genannt). Eine hohe Anlageintensität bedeutet viel langfristig gebundenes Kapital und damit weniger Flexibilität (tendenziell ungünstig).',
        beispiele: [
          {
            gegeben: 'AV = 262 Mrd. €, GK = 422 Mrd. €',
            rechnung: '(262 / 422) × 100',
            ergebnis: '≈ 62,1 % → recht hoch',
          },
          {
            gegeben: 'AV = 250.000 €, GK = 500.000 €',
            rechnung: '(250.000 / 500.000) × 100',
            ergebnis: '= 50 %',
          },
          {
            gegeben: 'AV = 100.000 €, GK = 400.000 €',
            rechnung: '(100.000 / 400.000) × 100',
            ergebnis: '= 25 % → kapitalflexibel',
          },
        ],
      },
      {
        name: 'Anlagendeckung I',
        formel: '(EK / AV) × 100',
        erklaerung:
          'Gibt an, wie viel des Anlagevermögens durch Eigenkapital gedeckt ist. Hintergrund ist die goldene Bilanzregel: langfristiges Vermögen sollte langfristig finanziert sein.',
        varianten: [
          'Fall 1: (EK / AV) × 100',
          'Fall 2: ((EK − JÜ) / AV) × 100',
        ],
        beispiele: [
          {
            gegeben: 'EK = 50.000 €, AV = 50.000 €',
            rechnung: '(50.000 / 50.000) × 100',
            ergebnis: '= 100 % → AV voll durch EK gedeckt',
          },
          {
            gegeben: 'EK = 80.000 €, AV = 100.000 €',
            rechnung: '(80.000 / 100.000) × 100',
            ergebnis: '= 80 %',
          },
          {
            gegeben: 'EK = 109 Mrd. €, AV = 262 Mrd. €',
            rechnung: '(109 / 262) × 100',
            ergebnis: '≈ 41,6 % → nicht allein durch EK gedeckt',
          },
        ],
      },
      {
        name: 'Anlagendeckung II',
        formel: '((EK + langfristiges FK) / AV) × 100',
        erklaerung:
          'Erweitert die Anlagendeckung I um das langfristige Fremdkapital. Sie sollte mindestens 100 % betragen – dann ist das Anlagevermögen vollständig langfristig finanziert (goldene Bilanzregel erfüllt).',
        varianten: [
          'Fall 1: ((EK + langfr. FK) / AV) × 100',
          'Fall 2: ((EK − JÜ + langfr. FK) / AV) × 100',
        ],
        beispiele: [
          {
            gegeben: 'EK = 109 Mrd. €, langfr. FK = 153 Mrd. €, AV = 262 Mrd. €',
            rechnung: '((109 + 153) / 262) × 100',
            ergebnis: '= 262 / 262 × 100 = 100 % → genau gedeckt, gut',
          },
          {
            gegeben: 'EK = 50.000 €, langfr. FK = 70.000 €, AV = 100.000 €',
            rechnung: '((50.000 + 70.000) / 100.000) × 100',
            ergebnis: '= 120 % → mehr als gedeckt',
          },
          {
            gegeben: 'EK = 80.000 €, langfr. FK = 0 €, AV = 100.000 €',
            rechnung: '((80.000 + 0) / 100.000) × 100',
            ergebnis: '= 80 % → Regel nicht erfüllt',
          },
        ],
      },
    ],
  },
  {
    titel: 'Liquidität',
    formeln: [
      {
        name: 'Liquidität I. Grades',
        formel: '(Guthaben / (kurzfristiges FK + pass. RAP)) × 100',
        erklaerung:
          'Barliquidität: Zahlungsfähigkeit allein mit flüssigen Mitteln (Kasse, Bank). Faustregel: ca. 10–30 %.',
        beispiele: [
          {
            gegeben: 'Guthaben = 5.000 €, kurzfr. FK = 30.000 €',
            rechnung: '(5.000 / 30.000) × 100',
            ergebnis: '≈ 16,7 %',
          },
          {
            gegeben: 'Guthaben = 20.000 €, kurzfr. FK = 50.000 €',
            rechnung: '(20.000 / 50.000) × 100',
            ergebnis: '= 40 %',
          },
          {
            gegeben: 'Guthaben = 10.000 €, kurzfr. FK = 40.000 €, pass. RAP = 10.000 €',
            rechnung: '(10.000 / (40.000 + 10.000)) × 100',
            ergebnis: '= 10.000 / 50.000 × 100 = 20 %',
          },
        ],
      },
      {
        name: 'Liquidität II. Grades',
        formel: '((Guthaben + kurzfr. Forderungen) / (kurzfr. FK + pass. RAP)) × 100',
        erklaerung:
          'Berücksichtigt zusätzlich die kurzfristigen Forderungen. Faustregel: sollte ungefähr 100 % erreichen, dann sind die kurzfristigen Schulden gedeckt.',
        beispiele: [
          {
            gegeben: 'Guthaben = 5.000 €, Forderungen = 25.000 €, kurzfr. FK = 30.000 €',
            rechnung: '((5.000 + 25.000) / 30.000) × 100',
            ergebnis: '= 30.000 / 30.000 × 100 = 100 % → gut',
          },
          {
            gegeben: 'Guthaben = 20.000 €, Forderungen = 30.000 €, kurzfr. FK = 40.000 €',
            rechnung: '((20.000 + 30.000) / 40.000) × 100',
            ergebnis: '= 50.000 / 40.000 × 100 = 125 %',
          },
          {
            gegeben: 'Guthaben = 10.000 €, Forderungen = 10.000 €, kurzfr. FK = 40.000 €',
            rechnung: '((10.000 + 10.000) / 40.000) × 100',
            ergebnis: '= 20.000 / 40.000 × 100 = 50 % → angespannt',
          },
        ],
      },
      {
        name: 'Liquidität III. Grades',
        formel: '((Guthaben + kurzfr. Forderungen + Vorräte) / (kurzfr. FK + pass. RAP)) × 100',
        erklaerung:
          'Bezieht zusätzlich die Vorräte ein. Faustregel: ca. 150–200 %, da auch das Umlaufvermögen die kurzfristigen Schulden deutlich übersteigen sollte.',
        beispiele: [
          {
            gegeben: 'Guthaben = 5.000 €, Forderungen = 25.000 €, Vorräte = 30.000 €, kurzfr. FK = 30.000 €',
            rechnung: '((5.000 + 25.000 + 30.000) / 30.000) × 100',
            ergebnis: '= 60.000 / 30.000 × 100 = 200 %',
          },
          {
            gegeben: 'Guthaben = 20.000 €, Forderungen = 30.000 €, Vorräte = 50.000 €, kurzfr. FK = 40.000 €',
            rechnung: '((20.000 + 30.000 + 50.000) / 40.000) × 100',
            ergebnis: '= 100.000 / 40.000 × 100 = 250 %',
          },
          {
            gegeben: 'Guthaben = 10.000 €, Forderungen = 10.000 €, Vorräte = 20.000 €, kurzfr. FK = 40.000 €',
            rechnung: '((10.000 + 10.000 + 20.000) / 40.000) × 100',
            ergebnis: '= 40.000 / 40.000 × 100 = 100 %',
          },
        ],
      },
    ],
  },
  {
    titel: 'Rentabilität & Leverage',
    formeln: [
      {
        name: 'Eigenkapitalrentabilität',
        kuerzel: 'EKR',
        formel: '(Jahresüberschuss / Eigenkapital) × 100',
        erklaerung:
          'Verzinsung des Eigenkapitals – die wichtigste Kennzahl für die Eigentümer. Faustregel: sollte deutlich über dem FK-Zins und in der Regel über 10 % liegen. Es gilt meist: EKR > GKR > FK-Zins.',
        beispiele: [
          {
            gegeben: 'JÜ = 9.000 €, EK = 50.000 €',
            rechnung: '(9.000 / 50.000) × 100',
            ergebnis: '= 18 %',
          },
          {
            gegeben: 'JÜ = 20.000 €, EK = 100.000 €',
            rechnung: '(20.000 / 100.000) × 100',
            ergebnis: '= 20 %',
          },
          {
            gegeben: 'JÜ = 14 Mrd. €, EK = 109 Mrd. €',
            rechnung: '(14 / 109) × 100',
            ergebnis: '≈ 12,8 %',
          },
        ],
      },
      {
        name: 'Gesamtkapitalrentabilität',
        kuerzel: 'GKR / ROI',
        formel: '(Kapitalgewinn / Gesamtkapital) × 100\nmit Kapitalgewinn = JÜ + FK × Zinssatz',
        erklaerung:
          'Verzinsung des gesamten eingesetzten Kapitals. Im Zähler steht der Kapitalgewinn, also der Jahresüberschuss plus die Fremdkapitalzinsen (FK × Zinssatz), weil diese der Ertrag des Fremdkapitals sind. Wird häufig mit dem ROI (Return on Investment) gleichgesetzt.',
        beispiele: [
          {
            gegeben: 'JÜ = 9.000 €, FK = 50.000 €, Zins = 2 %, GK = 100.000 €',
            rechnung: '((9.000 + 50.000 × 0,02) / 100.000) × 100',
            ergebnis: '= 10.000 / 100.000 × 100 = 10 %',
          },
          {
            gegeben: 'JÜ = 20.000 €, FK = 100.000 €, Zins = 5 %, GK = 220.000 €',
            rechnung: '((20.000 + 5.000) / 220.000) × 100',
            ergebnis: '= 25.000 / 220.000 × 100 ≈ 11,4 %',
          },
          {
            gegeben: 'JÜ = 50.000 €, FK = 250.000 €, Zins = 5 %, GK = 500.000 €',
            rechnung: '((50.000 + 12.500) / 500.000) × 100',
            ergebnis: '= 62.500 / 500.000 × 100 = 12,5 %',
          },
        ],
      },
      {
        name: 'Leverage-Formel',
        formel: 'EKR = GKR + (GKR − FKZ) × FK / EK',
        erklaerung:
          'Zeigt die Hebelwirkung des Fremdkapitals: Solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt (GKR > FKZ), steigert zusätzliches Fremdkapital die Eigenkapitalrendite – positiver Leverage-Effekt. Liegt GKR unter FKZ, kehrt sich der Effekt ins Negative.',
        beispiele: [
          {
            gegeben: 'GKR = 10 %, FKZ = 5 %, FK = 50.000 €, EK = 50.000 €',
            rechnung: '10 + (10 − 5) × (50.000 / 50.000)',
            ergebnis: '= 10 + 5 × 1 = 15 % EKR',
          },
          {
            gegeben: 'GKR = 10 %, FKZ = 5 %, FK = 100.000 €, EK = 50.000 €',
            rechnung: '10 + (10 − 5) × (100.000 / 50.000)',
            ergebnis: '= 10 + 5 × 2 = 20 % → mehr Hebel, höhere EKR',
          },
          {
            gegeben: 'GKR = 4 %, FKZ = 5 %, FK = 50.000 €, EK = 50.000 €',
            rechnung: '4 + (4 − 5) × (50.000 / 50.000)',
            ergebnis: '= 4 − 1 = 3 % → negativer Leverage',
          },
        ],
      },
    ],
  },
  {
    titel: 'Gewinn-Kette (Erfolgsbegriffe)',
    formeln: [
      {
        name: 'Bruttogewinn',
        formel: 'Umsatzerlöse − Herstellkosten',
        erklaerung:
          'Erster Schritt der Erfolgsrechnung (Folie „Alternative Erfolgsbegriffe"): Vom Umsatz werden die Herstellkosten abgezogen.',
        beispiele: [
          {
            gegeben: 'Umsatz = 500.000 €, Herstellkosten = 300.000 €',
            rechnung: '500.000 − 300.000',
            ergebnis: '= 200.000 €',
          },
          {
            gegeben: 'Umsatz = 1.000.000 €, Herstellkosten = 720.000 €',
            rechnung: '1.000.000 − 720.000',
            ergebnis: '= 280.000 €',
          },
          {
            gegeben: 'Umsatz = 360.000 €, Herstellkosten = 240.000 €',
            rechnung: '360.000 − 240.000',
            ergebnis: '= 120.000 €',
          },
        ],
      },
      {
        name: 'Betriebsergebnis',
        kuerzel: 'EBIT',
        formel: 'Bruttogewinn − Verwaltungs-/Vertriebskosten − Forschung & Entwicklung',
        erklaerung:
          'Das „Ergebnis der gewöhnlichen Geschäftstätigkeit" (EBIT). Vom Bruttogewinn werden Verwaltung, Vertrieb und FuE abgezogen.',
        beispiele: [
          {
            gegeben: 'Bruttogewinn = 200.000 €, Verwaltung/Vertrieb/FuE = 150.000 €',
            rechnung: '200.000 − 150.000',
            ergebnis: '= 50.000 €',
          },
          {
            gegeben: 'Bruttogewinn = 280.000 €, Verwaltung/Vertrieb/FuE = 200.000 €',
            rechnung: '280.000 − 200.000',
            ergebnis: '= 80.000 €',
          },
          {
            gegeben: 'Bruttogewinn = 120.000 €, Verwaltung/Vertrieb/FuE = 102.000 €',
            rechnung: '120.000 − 102.000',
            ergebnis: '= 18.000 €',
          },
        ],
      },
      {
        name: 'Kapitalgewinn',
        formel: 'Betriebsergebnis + Finanzerträge + außerordentliches Ergebnis\n(Kurzform: JÜ + FK × Zinssatz)',
        erklaerung:
          'Das Ergebnis, das dem gesamten Kapital zusteht – noch vor Abzug der Fremdkapitalzinsen. Grundlage für die Gesamtkapitalrentabilität (GKR).',
        beispiele: [
          {
            gegeben: 'Betriebsergebnis = 50.000 €, Finanzerträge = 10.000 €, a.o. = 0 €',
            rechnung: '50.000 + 10.000 + 0',
            ergebnis: '= 60.000 €',
          },
          {
            gegeben: 'JÜ = 9.000 €, FK = 50.000 €, Zins = 2 % (Kurzform)',
            rechnung: '9.000 + 50.000 × 0,02',
            ergebnis: '= 9.000 + 1.000 = 10.000 €',
          },
          {
            gegeben: 'GK = 10.000 €, GKR = 12,5 % (Übung 18, zurückgerechnet)',
            rechnung: '0,125 × 10.000',
            ergebnis: '= 1.250 €',
          },
        ],
      },
      {
        name: 'Jahresüberschuss',
        kuerzel: 'JÜ',
        formel: 'Kapitalgewinn − Zinsaufwand   (auch: EKR × EK)',
        erklaerung:
          'Der Gewinn vor Steuern, der nach Abzug der Fremdkapitalzinsen den Eigentümern bleibt. Aus dem JÜ wird der Bilanzgewinn abgeleitet.',
        beispiele: [
          {
            gegeben: 'Kapitalgewinn = 1.250 €, Zinsaufwand = 750 € (Übung 18)',
            rechnung: '1.250 − 750',
            ergebnis: '= 500 € JÜ',
          },
          {
            gegeben: 'Kapitalgewinn = 10.000 €, Zinsaufwand = 1.000 €',
            rechnung: '10.000 − 1.000',
            ergebnis: '= 9.000 € JÜ',
          },
          {
            gegeben: 'EKR = 20 %, EK = 50.000 €',
            rechnung: '0,20 × 50.000',
            ergebnis: '= 10.000 € JÜ',
          },
        ],
      },
      {
        name: 'Fremdkapitalzinssatz',
        kuerzel: 'FKZ',
        formel: '(gezahlte FK-Zinsen / FK) × 100',
        erklaerung:
          'Der durchschnittliche Zinssatz, den das Unternehmen auf seine Schulden zahlt. Nützlich zum Vergleich mit GKR und EKR (Leverage).',
        beispiele: [
          {
            gegeben: 'FK-Zinsen = 1.000 €, FK = 50.000 €',
            rechnung: '(1.000 / 50.000) × 100',
            ergebnis: '= 2 %',
          },
          {
            gegeben: 'FK-Zinsen = 750 €, FK = 7.500 € (Übung 18)',
            rechnung: '(750 / 7.500) × 100',
            ergebnis: '= 10 %',
          },
          {
            gegeben: 'FK-Zinsen = 6.000 €, FK = 80.000 € (Übung 21)',
            rechnung: '(6.000 / 80.000) × 100',
            ergebnis: '= 7,5 %',
          },
        ],
      },
    ],
  },
]
