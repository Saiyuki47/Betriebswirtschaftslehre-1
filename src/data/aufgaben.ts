import type { Aufgabe } from '../types'

// Übungsfragen zur Allgemeinen Betriebswirtschaftslehre I (WS 2025/2026)
// Quelle: Übungsbegleiter Modul ABWL I, Prof. Dr. Markus Göltenboth, HS Fulda.
export const aufgaben: Aufgabe[] = [
  {
    id: 'a1',
    titel: '1. Studienmotivation',
    aufgabeText:
      'Warum sind Sie hier (an dieser Hochschule, in diesem Studiengang)?',
    schwierigkeit: 'einfach',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a2',
    titel: '2. Indizes & wirtschaftliche Lage',
    aufgabeText:
      'Erklären Sie die gängigen Indizes Ihrer Wirtschaftszeitung (oder Nachrichten-Homepage) hinsichtlich Aktien, Anleihen, Rohstoffen, Bitcoin und Währungen. In welcher wirtschaftlichen Lage befinden wir uns gerade? (Hausaufgabe: Wertentwicklung von DAX, M-DAX, Euro-Stoxx und Dow Jones für die letzten 1 und 10 Jahre ermitteln.)',
    tipp: {
      konzept:
        'Ein Index bündelt die Wertentwicklung einer Anlageklasse. Vier Klassen: Aktien (bilden das Eigenkapital/die erwarteten Gewinne ab, schwankungsstark), Anleihen (Fremdkapital, weniger riskant), Rohstoffe (Gold = Krisenindikator, Öl industriell wichtig) und Währungen (v. a. EUR/USD).',
      vorgehen:
        '1) Jeden genannten Index seiner Anlageklasse zuordnen. 2) Je Klasse kurz erklären, was sie abbildet. 3) Die aktuelle Lage (Konjunktur, Inflation, Zinsen/EZB, Krisen) tagesaktuell selbst recherchieren und einordnen.',
      syntax:
        'Aktien: DAX (40 dt.), MDAX (50 mittelgroße), Euro Stoxx 50, Dow Jones / S&P 500 / Nasdaq (USA). Anleihen: Rendite 10-jähriger Bundesanleihen. Rohstoffe: Gold, Öl (Brent/WTI). Währungen: Wechselkurse (EUR/USD). Krypto: Bitcoin (hochspekulativ).',
      fehler:
        'Der DAX umfasst seit 2021 40 Werte (nicht 30), der Euro Stoxx 50 genau 50. Aktien an einem einzigen Jahr zu messen ist wegen der hohen Volatilität ein schlechter Maßstab.',
    },
    loesung: `Anlageklassen und typische Indizes/Kennzahlen:

• Aktien: DAX (40 größte dt. Unternehmen), MDAX (mittelgroße),
  Euro Stoxx 50 (Euro-Zone), Dow Jones / S&P 500 / Nasdaq (USA),
  Nikkei (Japan) – Kursentwicklung eines Aktienkorbs.
• Anleihen: Rendite 10-jähriger Bundesanleihen, Umlaufrendite,
  Bund-Future – Zins- und Risikoniveau.
• Rohstoffe: Öl (Brent/WTI), Gold – Konjunktur-/Krisenindikator.
• Bitcoin/Krypto: hochvolatile, spekulative Anlageklasse.
• Währungen: Wechselkurse, v. a. EUR/USD.

Wirtschaftliche Lage: Konjunkturphase (Auf-/Abschwung), Inflation,
Zins- und Geldpolitik (EZB/Fed) sowie geopolitische Risiken
einordnen. Da tagesaktuell – mit eigener Recherche belegen
(siehe Hausaufgabe zur 1- und 10-Jahres-Wertentwicklung).`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a3',
    titel: '3. Begriff „Wirtschaften"',
    aufgabeText:
      'Was versteht man unter Wirtschaften? Warum muss der Mensch wirtschaften?',
    tipp: {
      konzept:
        'Wirtschaften heißt: planvoll über knappe Güter entscheiden (disponieren), um Bedürfnisse bestmöglich zu befriedigen. Knapp = nicht frei/unbegrenzt verfügbar, hat einen Preis.',
      vorgehen:
        '1) Wirtschaften definieren (Disposition über knappe Güter). 2) Begründen, warum der Mensch wirtschaften MUSS: Bedürfnisse sind (nahezu) unbegrenzt, die Mittel knapp → daraus folgt ein Wahl- und Entscheidungszwang.',
      syntax:
        'Begriffskette: Bedürfnis (Mangelzustand) → Bedarf (Mittel zur Befriedigung) → Nachfrage. Unterscheidung: freie Güter (im Überfluss) vs. knappe (wirtschaftliche) Güter.',
      fehler:
        'Wirtschaften ist nicht einfach „Geld verdienen", sondern der Umgang mit Knappheit. Bedürfnis und Bedarf nicht gleichsetzen.',
    },
    loesung: `Wirtschaften = planvolles Entscheiden über den Einsatz knapper
Mittel zur bestmöglichen Befriedigung von Bedürfnissen
(Disposition über knappe Güter).

Warum muss der Mensch wirtschaften?
• Die Bedürfnisse des Menschen sind (nahezu) unbegrenzt.
• Die Mittel/Güter zu ihrer Befriedigung sind knapp.
• Aus dieser Knappheit folgt ein Wahl-/Entscheidungszwang
  (Allokation) – also die Notwendigkeit zu wirtschaften.

Begriffskette: Bedürfnisse → Bedarf → Nachfrage.
Unterscheidung: freie Güter (im Überfluss) vs. knappe (wirt-
schaftliche) Güter, die Gegenstand des Wirtschaftens sind.`,
    schwierigkeit: 'einfach',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a4',
    titel: '4. BWL als Rationalitätslehre',
    aufgabeText:
      'Die BWL versteht sich als Rationalitätslehre. Warum? Entscheiden Menschen immer rational? Welche zwei Formen der Rationalität gibt es?',
    tipp: {
      konzept:
        'Die BWL fragt, wie man mit knappen Mitteln vernünftig (ziel- und zweckgerichtet) entscheidet – das ist das ökonomische Prinzip. Reale Menschen entscheiden aber nur begrenzt rational (bounded rationality, H. A. Simon): unvollständige Infos, Zeitdruck, Emotionen.',
      vorgehen:
        '1) Warum Rationalitätslehre? (effizienter Mitteleinsatz zur Zielerreichung). 2) Entscheiden Menschen immer rational? Nein – Gründe nennen. 3) Die zwei Formen der Rationalität unterscheiden.',
      syntax:
        'Zwei Formen: formale (prozedurale/Zweck-)Rationalität = optimale Wahl der MITTEL für ein gegebenes Ziel; materiale (substanzielle/Wert-)Rationalität = Bewertung der ZIELE selbst (welche Ziele sind vernünftig?).',
      fehler:
        'Statt zu optimieren wählen Menschen oft nur „zufriedenstellend" (satisficing). Formale und materiale Rationalität nicht verwechseln.',
    },
    loesung: `Warum Rationalitätslehre?
Die BWL untersucht, wie wirtschaftliche Entscheidungen vernünftig
(ziel- und zweckgerichtet) getroffen werden: effizienter Einsatz
knapper Mittel zur Zielerreichung (ökonomisches Prinzip).

Entscheiden Menschen immer rational? Nein.
• Unvollständige Informationen, Unsicherheit
• Begrenzte Verarbeitungskapazität, Zeitdruck
• Emotionen, Gewohnheiten, Heuristiken/Verzerrungen
→ „begrenzte Rationalität" (bounded rationality, H. A. Simon);
  oft „satisficing" (zufriedenstellend) statt optimieren.

Zwei Formen der Rationalität:
1. Formale (prozedurale/Zweck-)Rationalität: optimale Wahl der
   Mittel für ein gegebenes Ziel (Mittel-Zweck-Rationalität).
2. Materiale (substanzielle/Wert-)Rationalität: Bewertung der
   Ziele selbst – welche Ziele sind „vernünftig"?`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a5',
    titel: '5. Reisebüro – ökonomisches Prinzip',
    aufgabeText: `In einem Reisebüro äußert ein Kunde folgende Wünsche.
a) „Für 2000 € möchte ich das regnerische deutsche Novemberwetter möglichst weit hinter mir lassen."
b) „Im November möchte ich einen Badeurlaub machen. Haben Sie für diese Zeit ein möglichst billiges Angebot?"
c) „Ich möchte für möglichst wenig Geld möglichst lange im Süden Urlaub machen."
Welche Varianten des ökonomischen Prinzips sind angesprochen?`,
    tipp: {
      konzept:
        'Das ökonomische Prinzip verlangt ein vernünftiges Verhältnis von Mitteleinsatz und Ertrag. Drei Varianten: Maximalprinzip (Mittel fix, Ertrag maximieren), Minimalprinzip (Ziel fix, Mittel minimieren), Extremumprinzip (beides variabel – ökonomisch nicht eindeutig).',
      vorgehen:
        'Prüfe für jede Aussage: Was ist vorgegeben (fix)? Was soll optimiert (max oder min) werden? Daraus ergibt sich die Variante.',
      syntax:
        'a) Budget fix (2000 €) → Entfernung maximieren = Maximalprinzip. b) Ziel fix (Badeurlaub im Nov.) → Kosten minimieren = Minimalprinzip. c) wenig Geld UND lange Urlaub → beide Größen variabel = (generelles) Extremumprinzip, nicht eindeutig.',
      fehler:
        'Min- und Maximalprinzip nicht vertauschen. Bei c) müssen entweder die Mittel ODER der Zweck fixiert sein – sonst ist die Aufgabe unbestimmt („eierlegende Wollmilchsau").',
    },
    loesung: `a) Maximalprinzip:
   Mitteleinsatz fix (Budget 2000 €), Ertrag/Nutzen (Entfernung)
   wird maximiert. → „Mit gegebenen Mitteln maximalen Erfolg."

b) Minimalprinzip:
   Ziel/Ertrag fix (Badeurlaub im November), Mitteleinsatz
   (Kosten) wird minimiert. → „Gegebenes Ziel mit minimalem
   Mitteleinsatz erreichen."

c) (Generelles) Extremumprinzip – ökonomisch NICHT eindeutig:
   Sowohl die Mittel sollen minimiert ALS AUCH der Ertrag
   maximiert werden. Da beide Größen variabel sind, ist die
   Aufgabe unbestimmt („eierlegende Wollmilchsau").
   Das ökonomische Prinzip verlangt, dass entweder Mittel ODER
   Zweck fixiert wird.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a6',
    titel: '6. Produktivität, Wirtschaftlichkeit, Rentabilität',
    aufgabeText:
      'Wie stehen die folgenden Begriffe zueinander: Produktivität, Wirtschaftlichkeit und Rentabilität?',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a7',
    titel: '7. Automobilindustrie – Kennzahlen',
    aufgabeText: `Zum Markt der Automobilindustrie gehören drei Unternehmen. Umsatz (Mrd. €): A 76, B 27, C 22. PKW-Produktion (Stck.): A 3 Mio., B 1 Mio., C 880.000. Beschäftigte: A 270.000, B 56.000, C 48.000. Marktanteil: A 23 %, B 17 %, C 11 %. Gewinn (Mrd. €): A 1,8, B 1,7, C 0,2. Sollkosten (Mrd. €): A 73, B 26, C 21. Istkosten (Mrd. €): A 74,2, B 25,3, C 21,8.
a) Was ist der Marktanteil – ist er zweifelsfrei definierbar?
b) Ermitteln Sie Wirtschaftlichkeit, Arbeitsproduktivität und Umsatzrentabilität und interpretieren Sie.
c) Welche weiteren Kennzahlen könnte man ermitteln?
d) Welche weiteren Daten bräuchten Sie für eine Investitionsentscheidung?`,
    tipp: {
      konzept:
        'Drei Kennzahlen vergleichen die Unternehmen: Wirtschaftlichkeit (Wertebene), Arbeitsproduktivität (Mengenebene) und Umsatzrentabilität (Erfolg). Der Marktanteil ist nicht eindeutig definierbar, weil man Verschiedenes zählen kann.',
      vorgehen:
        '1) a) Marktanteil diskutieren (Bezugsgröße/Marktabgrenzung). 2) b) für A, B, C je drei Kennzahlen ausrechnen und interpretieren. 3) c) weitere mögliche Kennzahlen nennen. 4) d) fehlende Daten für eine Investitionsentscheidung benennen.',
      syntax:
        'Wirtschaftlichkeit = [[Umsatz|Istkosten]] [[Ertrag|Aufwand]]. Arbeitsproduktivität = [[PKW-Produktion|Beschäftigte]]. Umsatzrentabilität = [[Gewinn|Umsatz]] ×100. (Die Sollkosten braucht man erst bei c) für die Kostenabweichung Ist − Soll.)',
      fehler:
        'Wirtschaftlichkeit = [[Umsatz|Istkosten]], NICHT Sollkosten/Istkosten (Folie 15). Bei A/B/C die Mio.-Stellen nicht verrutschen. Der Marktanteil ist nicht zweifelsfrei definierbar.',
    },
    loesung: `a) Marktanteil = Umsatz des Unternehmens / Gesamtumsatz des
   Marktes. NICHT zweifelsfrei: Bezugsgröße variiert (Umsatz,
   Stückzahl, wert-/mengenmäßig) und die Marktabgrenzung ist
   strittig (nur PKW? inkl. Nutzfahrzeuge? regional/global?
   einzelnes Segment?).

b) Kennzahlen (jeweils A | B | C):

   Wirtschaftlichkeit = Umsatz / Istkosten  (Ertrag/Aufwand)
     A: 76   / 74,2 = 1,02
     B: 27   / 25,3 = 1,07
     C: 22   / 21,8 = 1,01
   (alle knapp > 1 → wirtschaftlich; Sollkosten gehören zu
    Teil c, Kostenabweichung Ist − Soll)

   Arbeitsproduktivität = PKW-Produktion / Beschäftigte
     A: 3.000.000 / 270.000 = 11,1 PKW je MA
     B: 1.000.000 /  56.000 = 17,9 PKW je MA
     C:   880.000 /  48.000 = 18,3 PKW je MA

   Umsatzrentabilität = Gewinn / Umsatz × 100
     A: 1,8 / 76 = 2,4 %
     B: 1,7 / 27 = 6,3 %
     C: 0,2 / 22 = 0,9 %

   Interpretation (vgl. Original-Übungslösung):
   • B wirtschaftet am besten: höchste Wirtschaftlichkeit (1,07)
     und klar höchste Umsatzrendite (6,3 %).
   • C steht insgesamt am schlechtesten da: niedrigste
     Wirtschaftlichkeit (1,01) und Umsatzrendite (0,9 %). C
     verkauft am billigsten (nur 227 € Gewinn je PKW), obwohl
     die mengenmäßige Arbeitsproduktivität am höchsten ist
     (typisch fürs kleine Unternehmen: wenig Verwaltung).
   • A ist absolut am größten, aber margenschwach.

c) Weitere Kennzahlen: Umsatz je Mitarbeiter (Umsatz-
   produktivität), Gewinn je Mitarbeiter, Umsatz/Preis je PKW,
   Kosten je Stück, Kostenabweichung (Ist – Soll), Gesamt-/
   Eigenkapitalrentabilität.

d) Für eine Investitionsentscheidung zusätzlich nötig: Bilanz-/
   GuV-Daten (EK/FK, Verschuldungsgrad, Liquidität, Cashflow),
   Investitions-/F&E-Quote, Auftragsbestand, Markt-/Branchen-
   wachstum, Wettbewerbsposition, Bewertung (KGV, Dividende),
   Zukunftsprognosen und Risiken.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a8',
    titel: '8. Öffentliche Betriebe vs. Unternehmen',
    aufgabeText:
      'Erklären Sie einem Nichtkaufmann den Unterschied zwischen öffentlichen Betrieben und Unternehmen. Analysieren Sie anhand von Kriterien, welcher Betriebsform folgende Betriebe zugehörig sind: Bauernhof, Deutsche Bahn, HS Fulda, Lufthansa, Volkswagen.',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a9',
    titel: '9. Kriterien der Betriebseinteilung',
    aufgabeText:
      'Nennen Sie fünf Hauptkriterien, nach denen sich Betriebe einteilen lassen. Zeigen Sie anhand von Beispielen praktische Anwendungen auf.',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a10',
    titel: '10. Rückgang der Gewerkschaftsbindung',
    aufgabeText:
      'Erläutern Sie Gründe für die langfristig abnehmende Zahl gewerkschaftlich gebundener Arbeitnehmer in Deutschland.',
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a11',
    titel: '11. Gliederung der BWL',
    aufgabeText:
      'Wie lässt sich die BWL untergliedern? Erläutern Sie zudem anhand von 3 Beispielen, wie die BWL von anderen Wissenschaftszweigen profitiert.',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a12',
    titel: '12. Unternehmensmodell & Außenbeziehungen',
    aufgabeText:
      'Entwickeln Sie das Modell eines Unternehmens mit besonderem Schwerpunkt auf seinen Außenbeziehungen.',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a13',
    titel: '13. Kartell & Monopol',
    aufgabeText:
      'Was verstehen wir unter einem Kartell, was unter einem Monopol? Warum sind beide nicht so problematisch, wie sie in der öffentlichen Diskussion manchmal gemacht werden?',
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a14',
    titel: '14. Schritte der Sanierung',
    aufgabeText: 'Erläutern Sie Schritte der Sanierung.',
    schwierigkeit: 'mittel',
    kategorie: 'Betrieblicher Lebenszyklus',
  },
  {
    id: 'a15',
    titel: '15. Bilanzkennzahlen erklären',
    aufgabeText:
      'Erklären Sie folgende Kennzahlen: Eigenkapitalquote, Verschuldungsgrad und Verschuldungsquote, Anlagenquote, Anlagendeckung I und II, Liquidität, Gesamtkapital- und Eigenkapitalrentabilität. (Grundlage: PP-Folie „Bsp. Bilanz".)',
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a16',
    titel: '16. Kennzahlen & Einsatzgebiete',
    aufgabeText:
      'Was versteht man unter betriebswirtschaftlichen Kennzahlen? Beschreiben Sie vier Einsatzgebiete.',
    schwierigkeit: 'einfach',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a17',
    titel: '17. Lanz GmbH – Liquidität, EKR, GKR',
    aufgabeText:
      'Die Lanz GmbH weist 2024 folgende Bilanz auf. Aktiva: Grundstücke 1.200.000, Maschinelle Anlagen 600.000, Vorräte 900.000, kurzfr. Forderungen 820.000, Bankguthaben 300.000, Kasse 80.000 (Summe 3.900.000). Passiva: Eigenkapital 2.430.000 (davon Jahresüberschuss 930.000), Rückstellungen (langfristig) 250.000, Verbindlichkeiten (langfristig) 620.000, Verbindlichkeiten (kurzfristig) 600.000 (Summe 3.900.000). Beurteilen Sie die Liquidität sowie EKR und GKR.',
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a18',
    titel: '18. Lauscher – Kapitalgewinn & Jahresüberschuss',
    aufgabeText: `Über ein Konkurrenzunternehmen liegen vor: Bilanzsumme (= Gesamtkapital) 10.000 €, durchschnittlicher Fremdkapitalzins 10 %, Verschuldungsgrad (FK zu EK) 3, Gesamtkapitalrentabilität 12,5 %. Ermitteln Sie
a) den Kapitalgewinn und
b) den Jahresüberschuss.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a19',
    titel: '19. Leverage-Effekt',
    aufgabeText:
      'Erläutern und interpretieren Sie den Leverage-Effekt an einem Zahlenbeispiel.',
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a20',
    titel: '20. „Pleite und Co." – Renditen',
    aufgabeText:
      'Das Unternehmen „Pleite und Co." hat 2024 durchschnittlich 9 % Zinsen für das Fremdkapital bezahlt. Insgesamt hat sich das Kapital mit 8 % rentiert. Es wurden 2,4 Mio. € umgesetzt. Die Bilanzsumme betrug am Jahresende 1,2 Mio. €, der Verschuldungsgrad war 2. Wie hoch waren EK-Rendite, Umsatzrendite und Kapitalgewinn?',
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a21',
    titel: '21. „Unglück AG" – Erfolgsgrößen',
    aufgabeText:
      'Dem Jahresabschluss der „Unglück AG" sind zu entnehmen: Bilanzsumme 120.000 €, Verschuldungsgrad 2, Umsatz 360.000 €, Materialaufwand 144.000 €, Personalaufwand 108.000 €, Abschreibungen 90.000 €, gezahlte Fremdkapitalzinsen 6.000 €. Ermitteln und beurteilen Sie: Kapitalgewinn, Jahresüberschuss, Umsatzrendite, Gesamtkapitalrentabilität, Eigenkapitalrentabilität, Fremdkapitalzinssatz. (Siehe PP-Folie „Alternative Erfolgsbegriffe".)',
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a22',
    titel: '22. Systematik der Rechtsformen',
    aufgabeText:
      'Systematisieren Sie die Rechtsformen der Betriebe. In welchen Gesetzen sind die wichtigsten Rechtsformen enthalten?',
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a23',
    titel: '23. Rechtsformen im Vergleich (EU–AG)',
    aufgabeText: `Beantworten Sie für EU (Einzelunternehmen), OHG, KG, UG, GmbH und AG:
a) Wie viele Personen sind zur Gründung mindestens erforderlich?
b) Wie ist die Haftung geregelt?
c) Bei welchen Rechtsformen ist ein Mindestkapital vorgeschrieben?
d) Wie erfolgt die Gewinnverteilung ohne Regelung im Gesellschaftsvertrag?
e) Welche Bedeutung haben die Rechtsformen in der BRD?`,
    schwierigkeit: 'schwer',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a24',
    titel: '24. Mitbestimmung bei der Volkswagen AG',
    aufgabeText:
      'Schildern Sie die betriebliche und unternehmerische Mitbestimmung am Beispiel der Volkswagen AG.',
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a25',
    titel: '25. Stakeholder & Sanktionsmöglichkeiten',
    aufgabeText:
      'Welche unternehmensinternen und -externen Gruppen (Stakeholder) nehmen auf die Zielbildung Einfluss? Beschreiben Sie ihre Sanktionsmöglichkeiten, um das Management zur Rücksichtnahme zu zwingen. (Siehe PP-Folie „Anreiz-Beitrags-Theorie".)',
    schwierigkeit: 'mittel',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a26',
    titel: '26. Unternehmensphilosophie',
    aufgabeText:
      'Was versteht man unter einer Unternehmensphilosophie? Welche Zwecke verfolgt die Leitung mit ihrer Offenlegung?',
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a27',
    titel: '27. Zielkonflikte (ökonomisch/sozial/ökologisch)',
    aufgabeText:
      'Nennen Sie Beispiele für Zielkonflikte zwischen ökonomischen, sozialen und ökologischen Zielen.',
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a28',
    titel: '28. Leistungs-, Finanz- und Erfolgsziele',
    aufgabeText:
      'Nennen Sie Beispiele für die Zielkategorien Leistungs-, Finanz- und Erfolgsziele.',
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
]
