import type { Aufgabe } from '../types'

// Übungsfragen zur Allgemeinen Betriebswirtschaftslehre I (WS 2025/2026)
// Quelle: Übungsbegleiter Modul ABWL I, Prof. Dr. Markus Göltenboth, HS Fulda.
export const aufgaben: Aufgabe[] = [
  {
    id: 'a1',
    titel: '1. Studienmotivation',
    aufgabeText:
      'Warum sind Sie hier (an dieser Hochschule, in diesem Studiengang)?',
    tipp: {
      konzept:
        'Reine Reflexionsfrage – es gibt keine „richtige" Antwort. Gefragt ist nach deiner persönlichen Motivation, deinen Zielen und Erwartungen an Studium und BWL.',
      vorgehen:
        'Frage dich der Reihe nach: Warum BWL? Warum diese Hochschule? Welche Berufsziele hast du? Welche eigenen Stärken bringst du mit? Notiere 3–4 Punkte stichwortartig.',
      syntax:
        'Mögliche Aspekte: Interesse an wirtschaftlichen Zusammenhängen · Berufsziele (Management, Selbstständigkeit) · Praxisnähe und Breite des Studiums · Standort/Ruf der Hochschule · eigene Stärken (Zahlen, Organisation, Kommunikation).',
      fehler:
        'Bloße Floskeln vermeiden – konkret und persönlich begründen. Eine „falsche" Antwort gibt es nicht, eine inhaltsleere schon.',
    },
    loesung: `Offene Reflexionsfrage ohne Musterlösung. Mögliche Aspekte:

• Interesse an wirtschaftlichen Zusammenhängen und Entscheidungen
• Berufsziele: Karriere im Unternehmen, Management, Selbstständigkeit
• Praxisnähe und Breite des BWL-Studiums (viele Berufsfelder)
• Standort / Ruf der Hochschule, persönliche Lebenssituation
• Eigene Stärken (Zahlen, Organisation, Kommunikation)

Ziel der Frage: sich die eigene Motivation und die Erwartungen an
Studium und BWL bewusst zu machen.`,
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
    aufgabeText:
      'In einem Reisebüro äußert ein Kunde folgende Wünsche. a) „Für 2000 € möchte ich das regnerische deutsche Novemberwetter möglichst weit hinter mir lassen." b) „Im November möchte ich einen Badeurlaub machen. Haben Sie für diese Zeit ein möglichst billiges Angebot?" c) „Ich möchte für möglichst wenig Geld möglichst lange im Süden Urlaub machen." Welche Varianten des ökonomischen Prinzips sind angesprochen?',
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
    tipp: {
      konzept:
        'Drei aufeinander aufbauende Ergiebigkeitsmaße auf verschiedenen Bezugsebenen: Mengen (Produktivität) → Werte (Wirtschaftlichkeit) → Kapital (Rentabilität).',
      vorgehen:
        '1) Jeden Begriff definieren und seine Bezugsebene benennen. 2) Den Zusammenhang erklären: höhere Produktivität → bessere Wirtschaftlichkeit → höhere Rentabilität.',
      syntax:
        'Produktivität = [[Output|Input]] in Mengen (z. B. Stück/Std.). Wirtschaftlichkeit = [[Ertrag|Aufwand]] in Werten (> 1 = wirtschaftlich). Rentabilität = [[Gewinn|Kapital]] ×100 (EKR, GKR, Umsatzrendite).',
      fehler:
        'Produktivität ist rein mengenmäßig und sagt nichts über Geld/Gewinn aus. Wirtschaftlichkeit = [[Ertrag|Aufwand]] (nicht Sollkosten/Istkosten).',
    },
    loesung: `Drei aufeinander aufbauende Ergiebigkeitsmaße:

• Produktivität = Output / Input in MENGENeinheiten
  (z. B. Stück je Arbeitsstunde). Technische Ergiebigkeit,
  keine Geldgrößen.

• Wirtschaftlichkeit = Verhältnis in WERTgrößen,
  z. B. Ertrag/Aufwand oder Sollkosten/Istkosten.
  > 1 = wirtschaftlich. Misst wertmäßige Effizienz.

• Rentabilität = Gewinn bezogen auf das eingesetzte KAPITAL
  (oder den Umsatz): EKR = Gewinn/EK, GKR = (Gewinn+FK-Zinsen)/GK,
  Umsatzrentabilität = Gewinn/Umsatz. Misst die Verzinsung/den
  Erfolg des Kapitaleinsatzes.

Zusammenhang: höhere Produktivität (Mengenebene) → bessere
Wirtschaftlichkeit (Werteebene) → höhere Rentabilität
(Kapitalebene). Sie bauen logisch aufeinander auf.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a7',
    titel: '7. Automobilindustrie – Kennzahlen',
    aufgabeText:
      'Zum Markt der Automobilindustrie gehören drei Unternehmen. Umsatz (Mrd. €): A 76, B 27, C 22. PKW-Produktion (Stck.): A 3 Mio., B 1 Mio., C 880.000. Beschäftigte: A 270.000, B 56.000, C 48.000. Marktanteil: A 23 %, B 17 %, C 11 %. Gewinn (Mrd. €): A 1,8, B 1,7, C 0,2. Sollkosten (Mrd. €): A 73, B 26, C 21. Istkosten (Mrd. €): A 74,2, B 25,3, C 21,8. a) Was ist der Marktanteil – ist er zweifelsfrei definierbar? b) Ermitteln Sie Wirtschaftlichkeit, Arbeitsproduktivität und Umsatzrentabilität und interpretieren Sie. c) Welche weiteren Kennzahlen könnte man ermitteln? d) Welche weiteren Daten bräuchten Sie für eine Investitionsentscheidung?',
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
    tipp: {
      konzept:
        '„Betrieb" ist der Oberbegriff. Unterschieden wird nach Trägerschaft (privat vs. öffentlich) und Zielsetzung (Gewinn vs. Gemeinwohl/Bedarfsdeckung): Unternehmen = privat, erwerbswirtschaftlich; öffentliche Betriebe = staatlich, Daseinsvorsorge.',
      vorgehen:
        '1) Unterschied Unternehmen vs. öffentlicher Betrieb erklären. 2) Kriterien festlegen (Trägerschaft, Ziel, Finanzierung, Rechtsform). 3) Jeden Betrieb anhand dieser Kriterien einordnen.',
      syntax:
        'Einordnung: Bauernhof = privat · Lufthansa = privat (börsennotierte AG) · VW = privat (AG, Land Niedersachsen ~20 %) · Deutsche Bahn = AG, aber 100 % Bund → öffentlich/Mischform · HS Fulda = öffentlich (Körperschaft öff. Rechts).',
      fehler:
        'Rechtsform ≠ Trägerschaft: Die DB ist eine AG (private Rechtsform), gehört aber dem Bund → öffentlich. Nicht allein an der Rechtsform festmachen.',
    },
    loesung: `„Betrieb" ist der Oberbegriff; unterschieden nach Trägerschaft
und Zielsetzung:

• Unternehmen (privatwirtschaftliche Betriebe): privates
  Eigentum, erwerbswirtschaftliches Prinzip (Gewinnerzielung),
  autonome Planung, Marktfinanzierung, Risiko beim Eigentümer.
• Öffentliche Betriebe: öffentliche Trägerschaft (Bund/Land/
  Kommune), Ziel Bedarfsdeckung/Gemeinwohl (Daseinsvorsorge),
  oft Kostendeckungs- statt Gewinnprinzip, teils Haushalts-
  finanzierung (gemeinwirtschaftliches Prinzip).

Einordnung (heutige Rechtslage):
• Bauernhof  → privates Unternehmen (Landwirtschaft).
• Deutsche Bahn → AG in 100%igem Bundeseigentum → öffentliches
  Unternehmen/Mischform: privatrechtliche Form, öffentlicher
  Eigentümer, Infrastruktur-/Gemeinwohlauftrag.
• HS Fulda → öffentlicher Betrieb (Körperschaft öffentlichen
  Rechts, Bildungsauftrag, keine Gewinnerzielung).
• Lufthansa → privates Unternehmen (börsennotierte AG,
  erwerbswirtschaftlich).
• Volkswagen → privates Unternehmen (AG); Sonderfall: Land
  Niedersachsen als Großaktionär (~20 %, VW-Gesetz), aber
  erwerbswirtschaftlich orientiert.

Kriterien: Trägerschaft, Zielsetzung, Finanzierung, Rechtsform.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a9',
    titel: '9. Kriterien der Betriebseinteilung',
    aufgabeText:
      'Nennen Sie fünf Hauptkriterien, nach denen sich Betriebe einteilen lassen. Zeigen Sie anhand von Beispielen praktische Anwendungen auf.',
    tipp: {
      konzept:
        'Betriebe lassen sich nach mehreren Hauptkriterien typisieren (Betriebstypologie). Jedes Kriterium hat praktische Folgen (z. B. Größe → Mitbestimmung, Rechtsform → Haftung).',
      vorgehen:
        'Fünf Hauptkriterien nennen und zu jedem ein konkretes Beispiel / eine praktische Anwendung angeben.',
      syntax:
        'Fünf Kriterien: 1) Wirtschaftszweig/Branche (primär/sekundär/tertiär). 2) Größe (Beschäftigte, Umsatz, Bilanzsumme, § 267 HGB). 3) vorherrschender Produktionsfaktor (arbeits-/anlagen-/materialintensiv). 4) Rechtsform. 5) Standort(-orientierung).',
      fehler:
        'Nicht nur Kriterien aufzählen – die Aufgabe verlangt zu jedem Kriterium ein Beispiel.',
    },
    loesung: `Fünf Hauptkriterien der Betriebstypologie:

1. Wirtschaftszweig / Branche / Sektor:
   primär (Rohstoffe/Landwirtschaft), sekundär (Industrie/
   Handwerk), tertiär (Handel/Dienstleistung).
   Bsp.: Sachleistungs- vs. Dienstleistungsbetrieb.

2. Betriebsgröße (Beschäftigte, Umsatz, Bilanzsumme, § 267 HGB):
   Klein-, Mittel-, Großbetriebe.
   Bsp.: KMU vs. Konzern.

3. Vorherrschender Produktionsfaktor / Faktorintensität:
   arbeits-, anlagen-(kapital-), materialintensiv.
   Bsp.: Unternehmensberatung (arbeitsintensiv) vs. Raffinerie
   (anlagenintensiv).

4. Rechtsform:
   Einzelunternehmen, Personen-, Kapitalgesellschaften.
   Bsp.: GmbH vs. AG.

5. Standort (Standortorientierung):
   rohstoff-, arbeits-, absatz-, energieorientiert.
   Bsp.: Stahlwerk an Kohle/Erz, Brauerei am Absatzmarkt.

Weitere mögliche Kriterien: Trägerschaft (öffentlich/privat),
Fertigungstyp (Einzel-/Serien-/Massenfertigung).`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a10',
    titel: '10. Rückgang der Gewerkschaftsbindung',
    aufgabeText:
      'Erläutern Sie Gründe für die langfristig abnehmende Zahl gewerkschaftlich gebundener Arbeitnehmer in Deutschland.',
    tipp: {
      konzept:
        'Der gewerkschaftliche Organisationsgrad sinkt langfristig. Ursachen liegen im Strukturwandel der Arbeitswelt, im Wertewandel und im sogenannten Trittbrettfahrer-Problem.',
      vorgehen:
        'Mehrere (mindestens vier) Gründe nennen und jeden kurz begründen.',
      syntax:
        'Gründe: Struktur-/Branchenwandel (weniger Industrie, mehr Dienstleistung) · atypische Beschäftigung (Teilzeit, Leiharbeit) · Trittbrettfahrer-Problem (Tarif gilt auch für Nichtmitglieder) · Wertewandel/Individualisierung · Demografie · Globalisierung/Standortkonkurrenz.',
      fehler:
        'Das Trittbrettfahrer-Problem nicht vergessen – der zentrale ökonomische Grund: Warum zahlen, wenn man auch ohne Mitgliedschaft vom Tarif profitiert?',
    },
    loesung: `Gründe für den sinkenden gewerkschaftlichen Organisationsgrad:

• Struktur-/Branchenwandel: Rückgang industrieller Großbetriebe
  (klassische Gewerkschaftshochburgen), Wachstum des Dienst-
  leistungssektors mit geringerer Organisationsneigung.
• Neue/atypische Beschäftigung: Teilzeit, Leiharbeit, Solo-
  Selbstständige, Gig-Economy – schwer organisierbar.
• Trittbrettfahrer-Problem: Tarifabschlüsse gelten faktisch
  auch für Nichtmitglieder → geringer Anreiz zur Mitgliedschaft.
• Wertewandel/Individualisierung: weniger Bindung an Kollektive,
  Bedeutungsverlust von Klassen-/Solidaritätsbewusstsein.
• Demografie: organisierte ältere Mitglieder gehen in Rente,
  weniger Eintritte jüngerer Arbeitnehmer.
• Globalisierung/Standortkonkurrenz schwächt die Verhandlungs-
  macht; zunehmende Flexibilisierung der Arbeitsbeziehungen.`,
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a11',
    titel: '11. Gliederung der BWL',
    aufgabeText:
      'Wie lässt sich die BWL untergliedern? Erläutern Sie zudem anhand von 3 Beispielen, wie die BWL von anderen Wissenschaftszweigen profitiert.',
    tipp: {
      konzept:
        'Die BWL gliedert sich in Allgemeine BWL (ABWL, funktions- und branchenübergreifend) und Spezielle BWL (SBWL). Die SBWL wiederum funktional (nach Tätigkeit) oder institutionell (nach Branche).',
      vorgehen:
        '1) Allgemeine vs. spezielle BWL erklären. 2) Die SBWL in funktional und institutionell unterteilen. 3) Drei Nachbarwissenschaften nennen, von denen die BWL profitiert.',
      syntax:
        'SBWL funktional: Beschaffung, Produktion, Absatz/Marketing, Finanzierung, Personal … · institutionell: Industrie-, Handels-, Bank-, Versicherungsbetriebslehre. Nachbarwissenschaften: Mathematik/Statistik, Psychologie/Soziologie, Rechtswissenschaft (+ VWL, Informatik).',
      fehler:
        'Funktionale und institutionelle Gliederung der SBWL nicht verwechseln (Tätigkeit vs. Branche).',
    },
    loesung: `Gliederung der BWL:

• Allgemeine BWL (ABWL): funktions- und branchenübergreifende
  Grundlagen.
• Spezielle BWL (SBWL):
  – funktional: Beschaffung, Produktion, Absatz/Marketing,
    Investition, Finanzierung, Rechnungswesen, Personal,
    Organisation.
  – institutionell/branchenbezogen: Industrie-, Handels-,
    Bank-, Versicherungs-, Verkehrsbetriebslehre usw.

Profit aus anderen Wissenschaften (3 Beispiele):
1. Mathematik/Statistik: Optimierung, Operations Research,
   Wahrscheinlichkeitsrechnung (Investitionsrechnung, Prognosen).
2. Psychologie/Soziologie: Konsumenten- und Organisations-
   verhalten, Motivation, Führung (Marketing, Personalwesen).
3. Rechtswissenschaft: HGB, BGB, AktG, Steuerrecht (Rechtsform-
   wahl, Vertragsgestaltung, Bilanzierung).

(Weitere: VWL, Informatik, Ingenieurwissenschaften.)`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a12',
    titel: '12. Unternehmensmodell & Außenbeziehungen',
    aufgabeText:
      'Entwickeln Sie das Modell eines Unternehmens mit besonderem Schwerpunkt auf seinen Außenbeziehungen.',
    tipp: {
      konzept:
        'Ein Unternehmen ist ein offenes, zielgerichtetes System, das mit seiner Umwelt Güter, Geld und Informationen austauscht: Input → Transformation (Leistungserstellung) → Output.',
      vorgehen:
        '1) Das Grundmodell Input–Transformation–Output skizzieren. 2) Die umgebenden Märkte benennen. 3) Anspruchsgruppen (Stakeholder) und globale Umweltsphären ergänzen.',
      syntax:
        'Märkte: Beschaffungsmärkte (Material, Arbeit, Kapital) und Absatzmarkt (Kunden, Wettbewerber). Stakeholder: Eigentümer, Banken, Mitarbeiter, Lieferanten, Kunden, Staat, Öffentlichkeit. Umweltsphären: ökonomisch, technologisch, rechtlich-politisch, sozio-kulturell, ökologisch.',
      fehler:
        'Nicht nur die internen Abläufe zeigen – der Schwerpunkt liegt auf den AUSSENbeziehungen (Märkte, Stakeholder, Umwelt).',
    },
    loesung: `Unternehmen als offenes, zielgerichtetes, sozio-technisches
System im Austausch mit seiner Umwelt
(Input → Transformation/Leistungserstellung → Output).

Außenbeziehungen zu Märkten:
• Beschaffungsmärkte: Lieferanten (Material, Betriebsmittel),
  Arbeitsmarkt (Personal), Kapitalmarkt (Geldgeber).
• Absatzmarkt: Kunden/Abnehmer, Wettbewerber.

Anspruchsgruppen (Stakeholder):
• Eigentümer/Anteilseigner, Fremdkapitalgeber/Banken,
  Mitarbeiter/Gewerkschaften, Lieferanten, Kunden, Staat
  (Steuern, Recht, Subventionen), Öffentlichkeit/NGOs.

Globale Umweltsphären:
• ökonomisch, technologisch, rechtlich-politisch,
  sozio-kulturell, ökologisch.

Skizze: Unternehmen im Zentrum, Pfeile (Güter-, Geld- und
Informationsströme) zu Beschaffungs- und Absatzmärkten sowie
zu den Umweltsphären.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a13',
    titel: '13. Kartell & Monopol',
    aufgabeText:
      'Was verstehen wir unter einem Kartell, was unter einem Monopol? Warum sind beide nicht so problematisch, wie sie in der öffentlichen Diskussion manchmal gemacht werden?',
    tipp: {
      konzept:
        'Kartell = Absprache rechtlich selbstständig bleibender Unternehmen zur Wettbewerbsbeschränkung (grundsätzlich verboten). Monopol = nur ein Anbieter. Beide gelten als problematisch, sind es aber oft weniger als gedacht.',
      vorgehen:
        '1) Kartell und Monopol definieren. 2) Argumente sammeln, warum beide weniger problematisch sind als in der öffentlichen Diskussion dargestellt.',
      syntax:
        'Gegenargumente: bestreitbare Märkte (potenzielle Konkurrenz diszipliniert) · natürliche Monopole (Netze) sind effizienter · Innovationsanreiz durch temporäre Monopole (Patente, Schumpeter) · Marktmacht meist zeitlich begrenzt · nützliche Ausnahmekartelle (Normung, Forschung).',
      fehler:
        'Kartelle sind in DE/EU grundsätzlich verboten (§ 1 GWB), Missbrauch wird überwacht (Bundeskartellamt) – die Entwarnung gilt nur eingeschränkt. Monopson = Nachfragemonopol (nicht mit Monopol verwechseln).',
    },
    loesung: `Definitionen:
• Kartell: vertragliche/abgestimmte Zusammenarbeit rechtlich
  selbstständig bleibender Unternehmen zur Beschränkung des
  Wettbewerbs (Preis-, Mengen-, Gebietsabsprachen).
  Grundsätzlich verboten (§ 1 GWB, Art. 101 AEUV).
• Monopol: Marktform mit nur einem Anbieter (bzw. Nachfrager =
  Monopson); Preis-Mengen-Setzer.

Warum oft weniger problematisch als dargestellt:
• Bestreitbare Märkte (contestable markets): potenzielle
  Konkurrenz/niedrige Marktzutrittsschranken diszipliniert
  auch einen Monopolisten.
• Natürliche Monopole (Netze) können effizienter sein
  (Größenvorteile, keine doppelte Infrastruktur) – sinnvoll
  reguliert.
• Innovationsanreiz: temporäre Monopolstellung (z. B. durch
  Patente) fördert Forschung (Schumpeter: „schöpferische
  Zerstörung").
• Ausnahmekartelle können nützlich sein (Normung, Forschungs-,
  Mittelstands-, Krisenkartelle).
• Marktmacht ist meist zeitlich begrenzt (technischer
  Fortschritt, Substitute).

Trotzdem: Missbrauch wird kartellrechtlich überwacht
(Bundeskartellamt, Missbrauchsaufsicht).`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a14',
    titel: '14. Schritte der Sanierung',
    aufgabeText: 'Erläutern Sie Schritte der Sanierung.',
    tipp: {
      konzept:
        'Sanierung = alle planvollen Maßnahmen, um ein notleidendes Unternehmen vor dem Zusammenbruch zu bewahren und seine Leistungsfähigkeit wiederherzustellen. Sie läuft typischerweise in zeitlichen Stufen ab.',
      vorgehen:
        'Den Ablauf in Phasen schildern: von der Diagnose über Sofortmaßnahmen zur leistungs- und finanzwirtschaftlichen Sanierung, am Ende Umsetzung/Controlling.',
      syntax:
        'Stufen: 1) Krisendiagnose/Ursachenanalyse (Sanierungsfähigkeit prüfen). 2) Sofortmaßnahmen / „Crash-Programm" (Liquidität sichern, Management austauschen). 3) Sanierungskonzept. 4) leistungswirtschaftliche Sanierung (Restrukturierung, Desinvestitionen). 5) finanzwirtschaftliche Sanierung (neues EK, Schuldenerlass). 6) Umsetzung & Controlling.',
      fehler:
        'Auf die Reihenfolge kurz- → mittel- → langfristig achten. Entscheidend für den Erfolg ist neues Eigenkapital (davon hängen Fremdkapital und Subventionen ab).',
    },
    loesung: `Sanierung = Maßnahmen zur Wiederherstellung der Rentabilität
und Überlebensfähigkeit eines Krisenunternehmens.
Typischer Ablauf:

1. Krisendiagnose / Ursachenanalyse: Ist-Analyse, Krisenursachen
   identifizieren, Sanierungsfähigkeit und -würdigkeit prüfen.
2. Sofortmaßnahmen (Liquiditätssicherung): Zahlungsfähigkeit
   sichern, Kostenstopp, Verhandlungen mit Gläubigern/Banken
   (Stundung, Moratorium).
3. Sanierungskonzept/-plan: Leitbild, Maßnahmenkatalog,
   Planrechnung.
4. Leistungswirtschaftliche Sanierung: Restrukturierung von
   Produkten, Prozessen, Organisation und Personal
   (Kostensenkung, Fokus aufs Kerngeschäft, Desinvestitionen).
5. Finanzwirtschaftliche Sanierung: Kapitalschnitt, Zuführung
   neuen Eigenkapitals, Schuldenerlass/Forderungsverzicht,
   Debt-Equity-Swap.
6. Umsetzung & Controlling: Maßnahmen umsetzen, Erfolgskontrolle,
   ggf. nachsteuern.

Ggf. im Rahmen einer Insolvenz in Eigenverwaltung bzw. eines
Schutzschirmverfahrens (InsO).`,
    schwierigkeit: 'mittel',
    kategorie: 'Betrieblicher Lebenszyklus',
  },
  {
    id: 'a15',
    titel: '15. Bilanzkennzahlen erklären',
    aufgabeText:
      'Erklären Sie folgende Kennzahlen: Eigenkapitalquote, Verschuldungsgrad und Verschuldungsquote, Anlagenquote, Anlagendeckung I und II, Liquidität, Gesamtkapital- und Eigenkapitalrentabilität. (Grundlage: PP-Folie „Bsp. Bilanz".)',
    tipp: {
      konzept:
        'Bilanzkennzahlen analysieren die Kapitalstruktur (Passivseite), die Vermögensstruktur (Aktivseite), die Fristenkongruenz, die Liquidität und die Rentabilität eines Unternehmens.',
      vorgehen:
        '1) Kennzahlen nach diesen fünf Gruppen ordnen. 2) Je Kennzahl Formel und Aussage nennen. 3) Mit den Werten der PP-Folie „Bsp. Bilanz" durchrechnen.',
      syntax:
        'EK-Quote = [[EK|GK]]. Verschuldungsgrad = [[FK|EK]]. Anlagenintensität = [[AV|GK]]. Anlagendeckung I = [[EK|AV]], II = (EK + langfr. FK)/AV (Soll > 100 %). Liquidität 1./2./3. Grades. GKR = [[JÜ + FK-Zinsen|GK]], EKR = [[JÜ|EK]].',
      fehler:
        'Goldene Bilanzregel: langfristiges Vermögen langfristig finanzieren → Anlagendeckung II ≥ 100 %. Bei der Bsp.-Bilanz wird der JÜ aus der Kapitalbasis herausgerechnet (EK − JÜ).',
    },
    loesung: `Kapitalstruktur:
• Eigenkapitalquote = EK / Gesamtkapital × 100
  → finanzielle Stabilität/Unabhängigkeit.
• Verschuldungsgrad = FK / EK
  → je höher, desto mehr Fremdfinanzierung (Leverage/Risiko).
• Verschuldungsquote (Fremdkapitalquote) = FK / Gesamtkapital
  × 100 → Gegenstück zur EK-Quote.

Vermögensstruktur:
• Anlagenquote = Anlagevermögen / Gesamtvermögen × 100
  → Anlagenintensität.

Fristenkongruenz (horizontale Bilanzregeln):
• Anlagendeckung I = EK / Anlagevermögen × 100
  → AV durch EK gedeckt? (enge „goldene Bilanzregel").
• Anlagendeckung II = (EK + langfr. FK) / Anlagevermögen × 100
  → sollte > 100 %; AV durch langfristiges Kapital gedeckt.

Liquidität (Zahlungsfähigkeit):
• 1. Grades = liquide Mittel / kurzfr. Verbindlichkeiten
• 2. Grades = (liq. Mittel + kurzfr. Forderungen) / kurzfr. Verb.
• 3. Grades = Umlaufvermögen / kurzfr. Verbindlichkeiten

Rentabilität:
• Gesamtkapitalrentabilität = (Gewinn + FK-Zinsen) / GK × 100
• Eigenkapitalrentabilität = Gewinn / EK × 100

Rechenbeispiel (PP-Folie „Bsp. Bilanz", Bilanzsumme 10 Mio. €;
EK 2,9 / FK 7,1; AV 4 / UV 6; Guthaben 1, kurzfr. Forderungen 2,
Vorräte 2,5; kurzfr. FK 3,2 + pass. RAP 0,4; JÜ 0,4; FK-Zins 6 %):
• EK-Quote          = 2,9 / 10              = 29 %
• Verschuldungsgrad = 7,1 / 2,9             = 2,45
• Verschuldungsquote= 7,1 / 10              = 71 %
• Anlagenintensität = 4 / 10                = 40 %
• Anlagendeckung I  = 2,9 / 4               = 72,5 %
• Anlagendeckung II = (2,9 + 3,5) / 4       = 160 %
• Liquidität 1. Grades = 1 / (3,2 + 0,4)            = 28 %
• Liquidität 2. Grades = (1 + 2) / 3,6              = 83 %
• Liquidität 3. Grades = (1 + 2 + 2,5) / 3,6        = 153 %
• ROI = 0,4 / (10 − 0,4)                    = 4,2 %
• EKR = 0,4 / (2,9 − 0,4)                   = 16 %
• GKR = (0,4 + 7,1 × 0,06) / (10 − 0,4)     = 8,6 %
  Kontrolle: EKR 16 % > GKR 8,6 % > FK-Zins 6 % ✓
  (der JÜ wird aus der Kapitalbasis herausgerechnet).`,
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a16',
    titel: '16. Kennzahlen & Einsatzgebiete',
    aufgabeText:
      'Was versteht man unter betriebswirtschaftlichen Kennzahlen? Beschreiben Sie vier Einsatzgebiete.',
    tipp: {
      konzept:
        'Betriebswirtschaftliche Kennzahlen sind quantitative, verdichtete Größen, die Sachverhalte messbar und vergleichbar machen. Sinnvoll sind sie nur, wenn sie zu Entscheidungen führen (Entscheidungsbezug).',
      vorgehen:
        '1) Kennzahlen definieren. 2) Vier Einsatzgebiete beschreiben.',
      syntax:
        'Vier Einsatzgebiete: a) Zeit-/Periodenvergleich (gleiche Kennzahl über die Zeit). b) Bereichs-/Abteilungsvergleich (intern). c) Betriebsvergleich = Benchmarking (extern). d) Soll-Ist-Vergleich (gegen Richtgrößen).',
      fehler:
        'Benchmarking funktioniert nur, wenn keine direkte Konkurrenz besteht (sonst werden die Daten geschützt). Kennzahlen ohne Entscheidungsbezug sind wertlos.',
    },
    loesung: `Betriebswirtschaftliche Kennzahlen = quantitative, verdichtete
Größen, die Sachverhalte in konzentrierter, messbarer und
vergleichbarer Form abbilden – als absolute Zahlen oder als
Verhältniszahlen (Relationen, Quoten, Indizes).

Vier Einsatzgebiete:
1. Information & Dokumentation: Abbildung der Lage (Vermögen,
   Finanzen, Erfolg).
2. Planung & Zielvorgabe: Sollwerte/Zielgrößen festlegen
   (z. B. Renditeziele).
3. Steuerung & Kontrolle (Controlling): Soll-Ist-Vergleich,
   Abweichungsanalyse.
4. Vergleich/Analyse: Zeit-, Betriebs-/Branchenvergleich
   (Benchmark) als Entscheidungs- und Beurteilungsgrundlage
   (z. B. für Kreditgeber und Investoren).

(Weitere Funktionen: Koordination, Verhaltenssteuerung/Anreiz,
Frühwarnung.)`,
    schwierigkeit: 'einfach',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a17',
    titel: '17. Lanz GmbH – Liquidität, EKR, GKR',
    aufgabeText:
      'Die Lanz GmbH weist 2024 folgende Bilanz auf. Aktiva: Grundstücke 1.200.000, Maschinelle Anlagen 600.000, Vorräte 900.000, kurzfr. Forderungen 820.000, Bankguthaben 300.000, Kasse 80.000 (Summe 3.900.000). Passiva: Eigenkapital 2.430.000 (davon Jahresüberschuss 930.000), Rückstellungen (langfristig) 250.000, Verbindlichkeiten (langfristig) 620.000, Verbindlichkeiten (kurzfristig) 600.000 (Summe 3.900.000). Beurteilen Sie die Liquidität sowie EKR und GKR.',
    tipp: {
      konzept:
        'Aus einer Bilanz werden Liquiditäts- und Rentabilitätskennzahlen ermittelt. Liquidität misst die Zahlungsfähigkeit, EKR/GKR die Verzinsung des Kapitals.',
      vorgehen:
        '1) Hilfsgrößen bestimmen: liquide Mittel (Bank + Kasse), Umlaufvermögen, kurzfr. Verbindlichkeiten. 2) Liquidität 1.–3. Grades berechnen. 3) EKR und GKR berechnen und beurteilen.',
      syntax:
        'Liquide Mittel = Bank 300.000 + Kasse 80.000 = 380.000. Umlaufvermögen = Vorräte + Forderungen + Bank + Kasse = 2.100.000. Kurzfr. Verbindlichkeiten = 600.000. EKR = [[JÜ|EK]] ×100; GKR = [[JÜ + FK-Zinsen|GK]] (FK-Zinsen hier nicht gegeben → vereinfacht [[JÜ|GK]]).',
      fehler:
        'Liquidität 2. Grades = [[liquide Mittel + kurzfr. Forderungen|kurzfr. FK]] – Vorräte gehören erst in den 3. Grad. Die EKR ggf. zusätzlich auf das EK VOR Jahresüberschuss beziehen.',
    },
    loesung: `Hilfsgrößen:
• Liquide Mittel = Bank 300.000 + Kasse 80.000 = 380.000
• Umlaufvermögen = 900.000 + 820.000 + 300.000 + 80.000
                 = 2.100.000
• Kurzfristige Verbindlichkeiten = 600.000

Liquidität:
• 1. Grades = 380.000 / 600.000        = 63,3 %
• 2. Grades = 1.200.000 / 600.000      = 200 %
  (380.000 + 820.000 Forderungen)
• 3. Grades = 2.100.000 / 600.000      = 350 %

→ Sehr komfortable Liquidität: 2. und 3. Grades deutlich
  über 100 %; auch die Barliquidität (63 %) ist solide. Die
  kurzfristigen Schulden sind jederzeit gedeckt.

Eigenkapitalrentabilität (EKR) = Jahresüberschuss / EK × 100
  = 930.000 / 2.430.000 = 38,3 %
  (Variante mit EK vor Jahresüberschuss = 1.500.000
   → 930.000 / 1.500.000 = 62,0 %)

Gesamtkapitalrentabilität (GKR) = (JÜ + FK-Zinsen) / GK × 100
  FK-Zinsen sind nicht angegeben → vereinfacht:
  = 930.000 / 3.900.000 = 23,8 %

→ Hohe Rentabilität bei gleichzeitig hoher Eigenkapitalquote
  (2.430.000 / 3.900.000 = 62,3 %): finanziell sehr stabil und
  ertragsstark.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a18',
    titel: '18. Lauscher – Kapitalgewinn & Jahresüberschuss',
    aufgabeText:
      'Über ein Konkurrenzunternehmen liegen vor: Bilanzsumme (= Gesamtkapital) 10.000 €, durchschnittlicher Fremdkapitalzins 10 %, Verschuldungsgrad (FK zu EK) 3, Gesamtkapitalrentabilität 12,5 %. Ermitteln Sie a) den Kapitalgewinn und b) den Jahresüberschuss.',
    tipp: {
      konzept:
        'Aus dem Verschuldungsgrad und der Bilanzsumme lässt sich die Kapitalstruktur (EK, FK) bestimmen. Der Kapitalgewinn ist der Gewinn VOR Fremdkapitalzinsen.',
      vorgehen:
        '1) Aus VG = [[FK|EK]] = 3 und EK + FK = 10.000 die Beträge EK und FK bestimmen. 2) Kapitalgewinn = GKR × GK. 3) FK-Zinsen abziehen → Jahresüberschuss.',
      syntax:
        '[[FK|EK]] = 3 und EK + FK = 10.000 → 4·EK = 10.000 → EK = 2.500, FK = 7.500. Kapitalgewinn = 12,5 % × 10.000 = 1.250. FK-Zinsen = 10 % × 7.500 = 750. JÜ = 1.250 − 750 = 500.',
      fehler:
        'VG = [[FK|EK]] (nicht GK/EK). Der Kapitalgewinn ist VOR den FK-Zinsen, der Jahresüberschuss erst danach. Kontrolle: EKR = [[JÜ|EK]] sollte > GKR > FK-Zins sein.',
    },
    loesung: `Kapitalstruktur:
  FK / EK = 3 und EK + FK = 10.000
  → 4 · EK = 10.000 → EK = 2.500 €, FK = 7.500 €

a) Kapitalgewinn = GKR × Gesamtkapital
   = 12,5 % × 10.000 = 1.250 €
   (= Gewinn vor Fremdkapitalzinsen, den das Gesamtkapital
     erwirtschaftet hat)

   Fremdkapitalzinsen = 10 % × FK = 10 % × 7.500 = 750 €

b) Jahresüberschuss = Kapitalgewinn − FK-Zinsen
   = 1.250 − 750 = 500 €

Kontrolle (Eigenkapitalrentabilität):
   EKR = JÜ / EK = 500 / 2.500 = 20 %
   Positiver Leverage, da GKR 12,5 % > FK-Zins 10 %.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a19',
    titel: '19. Leverage-Effekt',
    aufgabeText:
      'Erläutern und interpretieren Sie den Leverage-Effekt an einem Zahlenbeispiel.',
    tipp: {
      konzept:
        'Der Leverage-Effekt (Hebelwirkung): Solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt, steigert mehr Fremdkapital die Eigenkapitalrendite. Liegt sie darunter, kehrt sich das um.',
      vorgehen:
        '1) Ein Zahlenbeispiel mit fixer GKR und FK-Zins wählen. 2) EK schrittweise durch FK ersetzen (VG erhöhen) und die EKR berechnen. 3) Auch den negativen Fall (GKR < FK-Zins) zeigen.',
      syntax:
        'Leverage-Formel: EKR = GKR + (GKR − FK-Zins) × [[FK|EK]]. Bsp. GKR 10 %, FK-Zins 6 %: bei [[FK|EK]] = 1 → EKR 14 %; bei [[FK|EK]] = 4 → EKR 26 %. Negativ (GKR 4 %, Zins 6 %, [[FK|EK]] 4): EKR = 4 + (4−6)×4 = −4 %.',
      fehler:
        'Im Zähler steht (GKR − FK-Zins). Hoher VG steigert Chance UND Risiko gleichermaßen. Den negativen Fall nicht vergessen (verlangt die Aufgabe).',
    },
    loesung: `Leverage-Effekt: Solange die Gesamtkapitalrentabilität (GKR)
über dem Fremdkapitalzins liegt, steigert zusätzliches Fremd-
kapital die Eigenkapitalrentabilität (EKR).

Formel:  EKR = GKR + (GKR − FK-Zins) × (FK / EK)

Beispiel: Investition 1.000.000 €, GKR = 10 %, FK-Zins = 6 %.

  Fall 1: EK 1.000.000, kein FK
    EKR = 10 % (kein Hebel)
  Fall 2: EK 500.000, FK 500.000 (FK/EK = 1)
    Kapitalgewinn 100.000 − Zinsen 30.000 = JÜ 70.000
    EKR = 70.000 / 500.000 = 14 %
  Fall 3: EK 200.000, FK 800.000 (FK/EK = 4)
    Kapitalgewinn 100.000 − Zinsen 48.000 = JÜ 52.000
    EKR = 52.000 / 200.000 = 26 %

→ Mehr Fremdkapital hebelt die EK-Rendite nach oben
  (10 % → 14 % → 26 %).

ABER negativer Leverage / Risiko:
  Fällt die GKR unter den FK-Zins (z. B. GKR 4 %, Zins 6 %,
  FK/EK = 4):
    EKR = 4 + (4 − 6) × 4 = 4 − 8 = −4 %
  → Der Hebel wirkt nun nach unten; hohe Verschuldung
    verstärkt den Verlust. Chancen und Risiken steigen
    gleichermaßen.`,
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a20',
    titel: '20. „Pleite und Co." – Renditen',
    aufgabeText:
      'Das Unternehmen „Pleite und Co." hat 2024 durchschnittlich 9 % Zinsen für das Fremdkapital bezahlt. Insgesamt hat sich das Kapital mit 8 % rentiert. Es wurden 2,4 Mio. € umgesetzt. Die Bilanzsumme betrug am Jahresende 1,2 Mio. €, der Verschuldungsgrad war 2. Wie hoch waren EK-Rendite, Umsatzrendite und Kapitalgewinn?',
    tipp: {
      konzept:
        'Liegt der Fremdkapitalzins über der Gesamtkapitalrendite, drückt die Verschuldung die Eigenkapitalrendite unter die GKR (negativer Leverage).',
      vorgehen:
        '1) Kapitalstruktur aus VG = 2 und Bilanzsumme bestimmen. 2) Kapitalgewinn = GKR × GK. 3) FK-Zinsen abziehen → JÜ. 4) EK-Rendite und Umsatzrendite berechnen.',
      syntax:
        '[[FK|EK]] = 2, EK + FK = 1.200.000 → EK 400.000, FK 800.000. Kapitalgewinn = 8 % × 1,2 Mio = 96.000. FK-Zinsen = 9 % × 800.000 = 72.000. JÜ = 24.000. EKR = 24.000/400.000 = 6 %. UR = 24.000/2,4 Mio = 1 %.',
      fehler:
        'Hier ist FK-Zins (9 %) > GKR (8 %) → negativer Leverage: die EKR (6 %) liegt UNTER der GKR. Kontrolle: EKR = 8 + (8−9)×2 = 6 %.',
    },
    loesung: `Kapitalstruktur:
  FK / EK = 2 und EK + FK = 1.200.000
  → 3 · EK = 1.200.000 → EK = 400.000 €, FK = 800.000 €

Kapitalgewinn = GKR × Gesamtkapital
  = 8 % × 1.200.000 = 96.000 €

Fremdkapitalzinsen = 9 % × 800.000 = 72.000 €

Jahresüberschuss = 96.000 − 72.000 = 24.000 €

EK-Rendite (EKR) = JÜ / EK = 24.000 / 400.000 = 6 %
  Kontrolle (Leverage): EKR = 8 + (8 − 9) × 2 = 6 %
  → negativer Leverage, da GKR 8 % < FK-Zins 9 %.

Umsatzrendite = JÜ / Umsatz = 24.000 / 2.400.000 = 1 %

Ergebnis: EK-Rendite 6 %, Umsatzrendite 1 %,
Kapitalgewinn 96.000 €. Die zu teure Verschuldung drückt die
EK-Rendite unter die GKR.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a21',
    titel: '21. „Unglück AG" – Erfolgsgrößen',
    aufgabeText:
      'Dem Jahresabschluss der „Unglück AG" sind zu entnehmen: Bilanzsumme 120.000 €, Verschuldungsgrad 2, Umsatz 360.000 €, Materialaufwand 144.000 €, Personalaufwand 108.000 €, Abschreibungen 90.000 €, gezahlte Fremdkapitalzinsen 6.000 €. Ermitteln und beurteilen Sie: Kapitalgewinn, Jahresüberschuss, Umsatzrendite, Gesamtkapitalrentabilität, Eigenkapitalrentabilität, Fremdkapitalzinssatz. (Siehe PP-Folie „Alternative Erfolgsbegriffe".)',
    tipp: {
      konzept:
        'Aus der GuV wird der Kapitalgewinn (Gewinn vor FK-Zinsen) ermittelt, daraus der Jahresüberschuss und die Rentabilitäten – Stichwort „Alternative Erfolgsbegriffe".',
      vorgehen:
        '1) Kapitalstruktur aus VG = 2 bestimmen. 2) Kapitalgewinn = Umsatz − Material − Personal − Abschreibungen. 3) FK-Zinsen abziehen → JÜ. 4) UR, GKR, EKR und FK-Zinssatz berechnen.',
      syntax:
        'EK 40.000, FK 80.000. Kapitalgewinn = 360.000 − 144.000 − 108.000 − 90.000 = 18.000. JÜ = 18.000 − 6.000 = 12.000. GKR = 18.000/120.000 = 15 %. EKR = 12.000/40.000 = 30 %. FK-Zinssatz = 6.000/80.000 = 7,5 %.',
      fehler:
        'Der Kapitalgewinn ist VOR den FK-Zinsen (Umsatz minus Material/Personal/Abschreibungen, aber OHNE Zinsen). Kontrolle: EKR = 15 + (15−7,5)×2 = 30 %.',
    },
    loesung: `Kapitalstruktur:
  FK / EK = 2 und EK + FK = 120.000
  → 3 · EK = 120.000 → EK = 40.000 €, FK = 80.000 €

Kapitalgewinn (Gewinn vor FK-Zinsen):
  Umsatz                360.000
  − Materialaufwand     144.000
  − Personalaufwand     108.000
  − Abschreibungen       90.000
  = Kapitalgewinn        18.000 €

Jahresüberschuss = Kapitalgewinn − FK-Zinsen
  = 18.000 − 6.000 = 12.000 €

Umsatzrendite = JÜ / Umsatz = 12.000 / 360.000 = 3,33 %
Gesamtkapitalrentabilität = Kapitalgewinn / GK
  = 18.000 / 120.000 = 15 %
Eigenkapitalrentabilität = JÜ / EK = 12.000 / 40.000 = 30 %
Fremdkapitalzinssatz = FK-Zinsen / FK = 6.000 / 80.000 = 7,5 %

Kontrolle (Leverage): EKR = 15 + (15 − 7,5) × 2 = 30 % ✓

Beurteilung: Trotz des Namens sehr gute Ertragslage –
GKR 15 %, EKR 30 %, positiver Leverage (GKR > FK-Zins 7,5 %).
Die Umsatzrendite (3,33 %) ist moderat.`,
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a22',
    titel: '22. Systematik der Rechtsformen',
    aufgabeText:
      'Systematisieren Sie die Rechtsformen der Betriebe. In welchen Gesetzen sind die wichtigsten Rechtsformen enthalten?',
    tipp: {
      konzept:
        'Rechtsformen werden in drei Hauptgruppen systematisiert: Einzelunternehmen, Personengesellschaften und Kapitalgesellschaften (plus Misch- und Sonderformen). Jede ist in bestimmten Gesetzen geregelt.',
      vorgehen:
        '1) Die drei Hauptgruppen mit ihren Rechtsformen auflisten. 2) Zu jeder das maßgebliche Gesetz nennen. 3) Systematisierungskriterien (Haftung, Kapital …) ergänzen.',
      syntax:
        'Einzelunternehmen (HGB). Personengesellschaften: GbR (BGB), OHG/KG/stille Ges. (HGB), PartG (PartGG). Kapitalgesellschaften: GmbH (GmbHG), UG (§ 5a GmbHG), AG/KGaA (AktG), SE (SE-VO). Sonderformen: GmbH & Co. KG, Genossenschaft (GenG).',
      fehler:
        'Personen- und Kapitalgesellschaft nicht verwechseln. Wichtigste Gesetze: BGB, HGB, GmbHG, AktG, GenG.',
    },
    loesung: `Systematik der Rechtsformen privater Betriebe:

• Einzelunternehmen (e. K.) – §§ 1 ff., 17–37 HGB
  (Kleingewerbe nach BGB).

• Personengesellschaften:
  – GbR  (§§ 705 ff. BGB)
  – OHG  (§§ 105 ff. HGB)
  – KG   (§§ 161 ff. HGB)
  – PartG (PartGG), stille Gesellschaft (§§ 230 ff. HGB)

• Kapitalgesellschaften:
  – GmbH (GmbHG)
  – UG (haftungsbeschränkt) – § 5a GmbHG
  – AG (AktG), KGaA (AktG), SE (SE-VO)

• Misch-/Sonderformen:
  – GmbH & Co. KG (HGB + GmbHG)
  – Genossenschaft (GenG)

Wichtigste Gesetze: BGB (GbR), HGB (Einzelkaufmann, OHG, KG),
GmbHG, AktG, GenG, PartGG, UmwG.

Systematisierungskriterien: Haftung, Geschäftsführung,
Kapitalaufbringung, Gewinnverteilung, Mindestkapital,
Publizität, Besteuerung.`,
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a23',
    titel: '23. Rechtsformen im Vergleich (EU–AG)',
    aufgabeText:
      'Beantworten Sie für EU (Einzelunternehmen), OHG, KG, UG, GmbH und AG: a) Wie viele Personen sind zur Gründung mindestens erforderlich? b) Wie ist die Haftung geregelt? c) Bei welchen Rechtsformen ist ein Mindestkapital vorgeschrieben? d) Wie erfolgt die Gewinnverteilung ohne Regelung im Gesellschaftsvertrag? e) Welche Bedeutung haben die Rechtsformen in der BRD?',
    tipp: {
      konzept:
        'Für jede Rechtsform werden fünf Aspekte verglichen: Mindest-Personenzahl, Haftung, Mindestkapital, Gewinnverteilung ohne Vertrag und wirtschaftliche Bedeutung.',
      vorgehen:
        'Spaltenweise (a–e) je Rechtsform durcharbeiten: erst Personenzahl, dann Haftung, Kapital, Gewinnverteilung, Bedeutung.',
      syntax:
        'Mindestkapital: EU/OHG/KG keines · UG 1 € · GmbH 25.000 € (bei Gründung 12.500 €) · AG 50.000 €. Haftung: EU/OHG voll & persönlich; KG Komplementär voll, Kommanditist bis Einlage; UG/GmbH/AG beschränkt.',
      fehler:
        'Die UG ist eine „Mini-GmbH" mit nur 1 € Mindestkapital. Gewinnverteilung ohne Vertrag: bei OHG/KG nach Köpfen, bei Kapitalgesellschaften nach Anteilen.',
    },
    loesung: `a) Mindestzahl Personen zur Gründung:
   EU 1 · OHG 2 · KG 2 (mind. 1 Komplementär + 1 Kommanditist)
   UG 1 · GmbH 1 · AG 1 (Ein-Personen-Gründung jeweils zulässig)

b) Haftung:
   EU:  unbeschränkt, persönlich (gesamtes Privatvermögen)
   OHG: alle Gesellschafter unbeschränkt, persönlich, solidarisch
   KG:  Komplementär unbeschränkt; Kommanditist nur bis Einlage
   UG / GmbH / AG: beschränkt auf das Gesellschaftsvermögen

c) Mindestkapital:
   EU keines · OHG keines · KG keines
   UG   1 € (Thesaurierungspflicht bis 25.000 €)
   GmbH 25.000 € (bei Gründung mind. 12.500 € eingezahlt)
   AG   50.000 €

d) Gewinnverteilung ohne Vertragsregelung (Kurs-Lösung):
   EU:  gesamter Gewinn an den Inhaber
   OHG: zu gleichen Teilen unter den Gesellschaftern (nach Köpfen)
   KG:  nach Köpfen – problematisch, weil der Komplementär mehr
        haftet/leistet; Abhilfe über Gesellschaftsvertrag,
        Komplementär als Geschäftsführer oder einen Vorabgewinn
   UG/GmbH: nach Geschäftsanteilen (§ 29 GmbHG)
   AG:  nach Anteil am Grundkapital/Aktien (§ 60 AktG)

e) Bedeutung in der BRD:
   Zahlenmäßig dominieren Einzelunternehmen, gefolgt von der
   GmbH (häufigste Kapitalgesellschaft). Nach Umsatz und
   Beschäftigung haben Kapitalgesellschaften (GmbH, AG) und die
   GmbH & Co. KG das größte Gewicht. AGs sind zahlenmäßig wenige,
   aber wirtschaftlich sehr bedeutend; die UG ist als günstige
   Gründungsform verbreitet.

Hinweis: Das Personengesellschaftsrecht wurde durch das MoPeG
(2024) modernisiert; klassische Verteilungsregeln können
abweichen.`,
    schwierigkeit: 'schwer',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a24',
    titel: '24. Mitbestimmung bei der Volkswagen AG',
    aufgabeText:
      'Schildern Sie die betriebliche und unternehmerische Mitbestimmung am Beispiel der Volkswagen AG.',
    tipp: {
      konzept:
        'Mitbestimmung gibt es auf zwei Ebenen: betrieblich (Betriebsrat, BetrVG) und unternehmerisch (Aufsichtsrat, MitbestG). Bei VW kommt die VW-Gesetz-Besonderheit hinzu.',
      vorgehen:
        '1) Betriebliche Mitbestimmung schildern (Betriebsrat). 2) Unternehmerische Mitbestimmung (paritätischer Aufsichtsrat). 3) Die VW-Besonderheit ergänzen.',
      syntax:
        'Betrieblich: Betriebsrat (ab 5 AN, BetrVG). Unternehmerisch: VW = AG > 2.000 AN → paritätischer Aufsichtsrat (MitbestG 1976), Arbeitsdirektor. VW-Gesetz: Land Niedersachsen ~20 % mit Sperrminorität.',
      fehler:
        'Die Arbeitnehmervertreter im Aufsichtsrat werden von der Belegschaft gewählt, NICHT vom Vorstand. Der Aufsichtsrat bestellt den Vorstand (nicht umgekehrt).',
    },
    loesung: `Betriebliche Mitbestimmung (Betriebsebene, BetrVG):
• Betriebsrat mit Mitbestimmungs-, Mitwirkungs- und
  Informationsrechten in sozialen, personellen und (begrenzt)
  wirtschaftlichen Angelegenheiten.
• Bei VW traditionell starke Betriebsräte, Wirtschaftsausschuss,
  Gesamt-/Konzernbetriebsrat.

Unternehmerische Mitbestimmung (Unternehmensebene):
• VW als AG mit > 2.000 Beschäftigten → paritätische
  Mitbestimmung nach MitbestG 1976: Aufsichtsrat je zur Hälfte
  Anteilseigner- und Arbeitnehmervertreter (bei Patt Doppel-
  stimme des Vorsitzenden der Anteilseignerseite).
• Arbeitsdirektor im Vorstand.

VW-Besonderheit („VW-Gesetz"):
• Land Niedersachsen als Großaktionär (~20 %) mit Sperr-
  minorität; wichtige Beschlüsse erfordern besondere Mehrheiten.
• Beschlüsse zu Werksangelegenheiten/Standorten brauchen eine
  Mehrheit, die ohne die Arbeitnehmerseite kaum erreichbar ist.

Ergebnis: Durch das Zusammenspiel von paritätischer
Mitbestimmung, starkem Betriebsrat und VW-Gesetz haben die
Arbeitnehmer bei VW überdurchschnittlich großen Einfluss.`,
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a25',
    titel: '25. Stakeholder & Sanktionsmöglichkeiten',
    aufgabeText:
      'Welche unternehmensinternen und -externen Gruppen (Stakeholder) nehmen auf die Zielbildung Einfluss? Beschreiben Sie ihre Sanktionsmöglichkeiten, um das Management zur Rücksichtnahme zu zwingen. (Siehe PP-Folie „Anreiz-Beitrags-Theorie".)',
    tipp: {
      konzept:
        'Die Anreiz-Beitrags-Theorie (March/Simon): Jede Anspruchsgruppe leistet ihre Beiträge nur, solange die Anreize sie aufwiegen; sonst entzieht sie die Beiträge (Sanktion). Das Management muss alle bedeutsamen Gruppen genug anreizen.',
      vorgehen:
        '1) Interne und externe Stakeholder auflisten. 2) Je Gruppe Beitrag UND Sanktionsmöglichkeit nennen.',
      syntax:
        'Intern: Eigentümer (Kapitalabzug), Mitarbeiter (Streik/Kündigung), Management. Extern: Banken (Kreditkündigung), Kunden (Kaufverweigerung), Lieferanten (Lieferstopp), Staat (Auflagen/Steuern), Öffentlichkeit (Imageschaden).',
      fehler:
        'Nicht nur die Gruppen aufzählen – zu jeder die SANKTIONSmöglichkeit nennen (das verlangt die Aufgabe). Die mächtigste Position hat oft der Kunde.',
    },
    loesung: `Interne Stakeholder:
• Eigentümer/Anteilseigner (Kapital) → Sanktion: Kapitalabzug,
  Aktienverkauf, Abwahl des Managements, Dividendendruck.
• Management (Entscheidungen) → verfolgt Eigeninteressen,
  steuert Informationen (Prinzipal-Agent-Problem).
• Mitarbeiter (Arbeitsleistung) → Kündigung, Leistungs-
  zurückhaltung, Streik (Gewerkschaft), Betriebsrat.

Externe Stakeholder:
• Fremdkapitalgeber/Banken (Kredite) → Kreditkündigung, höhere
  Zinsen, verweigerte Anschlussfinanzierung.
• Kunden (Umsatz) → Kaufverweigerung, Abwanderung, Boykott.
• Lieferanten (Vorleistungen) → Lieferstopp, schlechtere
  Konditionen.
• Staat (Rechtsrahmen) → Steuern, Auflagen, Genehmigungen,
  Subventionsentzug.
• Öffentlichkeit/NGOs/Medien (Legitimation) → Imageschaden,
  Kampagnen, öffentlicher Druck.

Grundgedanke (Anreiz-Beitrags-Theorie, March/Simon):
Jeder Teilnehmer leistet seine Beiträge nur, solange die
erhaltenen Anreize sie (subjektiv) mindestens aufwiegen. Das
Management muss die Ziele so setzen, dass alle bedeutsamen
Gruppen genügend Anreize erhalten – sonst entziehen sie ihre
Beiträge und gefährden den Fortbestand.`,
    schwierigkeit: 'mittel',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a26',
    titel: '26. Unternehmensphilosophie',
    aufgabeText:
      'Was versteht man unter einer Unternehmensphilosophie? Welche Zwecke verfolgt die Leitung mit ihrer Offenlegung?',
    tipp: {
      konzept:
        'Die Unternehmensphilosophie ist das Wertesystem/Selbstbild eines Unternehmens, oft im Leitbild verschriftlicht. Mit ihrer Offenlegung verfolgt die Leitung Zwecke nach innen UND nach außen.',
      vorgehen:
        '1) Unternehmensphilosophie definieren. 2) Zwecke der Offenlegung nach innen und nach außen getrennt darstellen.',
      syntax:
        'Nach innen: Orientierung/Identifikation, Motivation/Sinnstiftung, Verhaltensrahmen (Koordination ohne ständige Anweisung). Nach außen: Image/Vertrauen, Legitimation, Differenzierung im Wettbewerb, Anziehung von Mitarbeitern/Investoren.',
      fehler:
        'Philosophie (geplantes Leitbild) und Kultur (tatsächlich Gelebtes) nicht verwechseln. Innen- und Außenwirkung getrennt darstellen.',
    },
    loesung: `Unternehmensphilosophie = grundlegende Wertvorstellungen,
Normen und Einstellungen, die Selbstverständnis und Verhalten
eines Unternehmens prägen. Sie wird häufig im Leitbild
(Mission Statement) und in der Unternehmenskultur konkretisiert.

Zwecke der Offenlegung:

Nach innen:
• Orientierung und Identifikation der Mitarbeiter („Wir-Gefühl")
• Motivation und Sinnstiftung
• Verhaltens-/Entscheidungsrahmen (Koordination ohne ständige
  Einzelanweisung)
• Stärkung der Unternehmenskultur

Nach außen:
• Image- und Vertrauensbildung bei Kunden, Kapitalgebern und
  Öffentlichkeit
• Legitimation des unternehmerischen Handelns
• Differenzierung im Wettbewerb (Profilbildung)
• Anziehung von Mitarbeitern (Employer Branding) und Investoren

Kurz: Sinnstiftung, Integration und Legitimation – nach innen
wie nach außen.`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a27',
    titel: '27. Zielkonflikte (ökonomisch/sozial/ökologisch)',
    aufgabeText:
      'Nennen Sie Beispiele für Zielkonflikte zwischen ökonomischen, sozialen und ökologischen Zielen.',
    tipp: {
      konzept:
        'Ziele konkurrieren, weil jeder Euro nur einmal ausgegeben werden kann. Klassisch sind Konflikte zwischen ökonomischen, sozialen und ökologischen Zielen (Drei-Säulen-Modell der Nachhaltigkeit).',
      vorgehen:
        'Die drei Zieldimensionen paarweise gegenüberstellen und je ein konkretes Konfliktbeispiel nennen.',
      syntax:
        'ökonomisch ↔ ökologisch: Gewinn vs. teurer Umweltschutz. ökonomisch ↔ sozial: Kostensenkung/Personalabbau vs. faire Löhne. sozial ↔ ökologisch: Arbeitsplätze in der Braunkohle vs. Klimaschutz.',
      fehler:
        'Es gibt auch komplementäre (sich ergänzende) Beziehungen – z. B. Energieeffizienz senkt Kosten UND Umweltbelastung. Also nicht nur Konflikte, bei Bedarf auch Synergien erwähnen.',
    },
    loesung: `Beispiele für konkurrierende Ziele (Zielkonflikte):

• ökonomisch ↔ ökologisch:
  Gewinn-/Kostsenkung vs. teurer Umweltschutz (Filteranlagen,
  CO₂-Reduktion); billige Auslandsproduktion vs. Umweltstandards.

• ökonomisch ↔ sozial:
  Kostensenkung durch Personalabbau/Lohnkürzung vs. Arbeits-
  platzsicherheit und faire Entlohnung; Gewinn vs. gute
  Arbeitsbedingungen.

• sozial ↔ ökologisch:
  Erhalt von Arbeitsplätzen in umweltbelastender Industrie
  (z. B. Braunkohle) vs. Klimaschutz; günstige (umweltschäd-
  liche) Produkte für einkommensschwache Gruppen vs.
  Nachhaltigkeit.

Hinweis: Es gibt auch komplementäre (sich ergänzende)
Beziehungen, z. B. Energieeffizienz senkt zugleich Kosten und
Umweltbelastung. Bezug: Drei-Säulen-Modell der Nachhaltigkeit /
„magisches Dreieck".`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a28',
    titel: '28. Leistungs-, Finanz- und Erfolgsziele',
    aufgabeText:
      'Nennen Sie Beispiele für die Zielkategorien Leistungs-, Finanz- und Erfolgsziele.',
    tipp: {
      konzept:
        'Ökonomische Ziele werden in drei Kategorien unterteilt: Leistungsziele (Sachziele – das „Was"), Erfolgsziele (Formalziele – der Gewinn) und Finanzziele (Geldströme/Liquidität).',
      vorgehen:
        'Je Kategorie definieren und konkrete Beispiele nennen.',
      syntax:
        'Leistungsziele: Marktanteil, Absatzmenge, Produktqualität. Erfolgsziele: Gewinn, Rentabilität (EKR/GKR), Umsatzrendite. Finanzziele: Liquidität, Kapitalstruktur (EK-Quote), Cashflow, Investitionsvolumen.',
      fehler:
        'Leistungsziele (Sachziele) sind nicht dasselbe wie Erfolgsziele (Formalziele). Finanzziele betreffen die Zahlungsfähigkeit, nicht den Gewinn.',
    },
    loesung: `• Leistungsziele (Sachziele) – das „Was" der Leistung:
  Marktanteil, Absatzmenge, Umsatz, Produktqualität,
  Lieferservice, Innovation/Produktprogramm, Produktionsmenge,
  Kundenzufriedenheit.

• Finanzziele – Sicherung von Zahlungsfähigkeit und Finanzierung:
  Liquidität, Kapitalstruktur (EK-Quote), Sicherung der
  Finanzierung, Kreditwürdigkeit, Cashflow, Vermeidung von
  Überschuldung, Investitionsvolumen.

• Erfolgsziele (Formalziele) – wertmäßiger Erfolg:
  Gewinn(maximierung), Rentabilität (EKR, GKR),
  Wirtschaftlichkeit, Umsatzrendite, Produktivität,
  Shareholder Value, Kostensenkung.

Ergänzend werden oft auch soziale und ökologische Ziele sowie
Führungs-, Macht- und Prestigeziele genannt.`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
]
