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
    loesung: `Die drei Kennzahlen messen die Ergiebigkeit auf verschiedenen Ebenen.

Produktivität = Output / Input (rein mengenmäßig, ME/ME); verschiedene
Produktivitäten lassen sich nicht verrechnen (unterschiedliche Einheiten).
Beispiel (Output 10 ME):
  • Arbeitsproduktivität   = 10 ME / 0,5 h   = 20 ME/h
  • Energieproduktivität   = 10 ME / 5 kWh   = 2 ME/kWh
  • Rohstoffproduktivität  = 10 ME / 7,2 kg  = 1,39 ME/kg

Wirtschaftlichkeit = Ertrag / Aufwand (wertmäßig, in €).
Beispiel: Ertrag = 10 ME × 5 €/ME = 50 €; Aufwand = 20 € (Arbeit) +
0,80 € (Energie) + 3,60 € (Rohstoff) = 24,40 €.
  Wirtschaftlichkeit = 50 € / 24,40 € = 2,05;  Gewinn = 50 − 24,40 = 25,60 €.

Rentabilität = Gewinn bezogen auf das eingesetzte Kapital (EKR, GKR, ROI)
– die wertmäßige Verzinsung des Kapitals.

Aufbau: Produktivität (Menge) → Wirtschaftlichkeit (Wert) → Rentabilität
(Kapital); jede höhere Ebene baut auf der darunterliegenden auf.`,
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
    loesung: `Unternehmen verfolgen erwerbswirtschaftliche Ziele (Gewinn), öffentliche
Betriebe den öffentlichen Auftrag / die Bedarfsdeckung. Entscheidend ist die
Trägerschaft, nicht die Rechtsform.

Einordnung (Kriterien: Rechtsform, Ziel, Haftung, Eigentümer, Finanzierung):
  • Bauernhof – privat (teils staatlich über Subventionen).
  • Deutsche Bahn – privatrechtliche AG, aber der Bund hält alle Aktien →
    faktisch staatlich (Infrastruktur = Monopol; nur der Wettbewerbsbereich
    ließe sich sinnvoll privatisieren, damit echter Wettbewerb entsteht).
  • Hochschule Fulda – staatlich (öffentlicher Träger).
  • Lufthansa – privat; 1962–1997 privatisiert, seit Corona Staat ~20 %.
  • Volkswagen – privat; Stammaktien u. a. 53,3 % Porsche Holding, 20 % Land
    Niedersachsen (VW-Gesetz), 17 % Katar.

Hinweis: Unternehmen mit Staatsbeteiligung haben meist viel FK und wenig EK;
der Staat als (Mit-)Eigentümer ist wegen möglicher Interessenkonflikte
(Kosten senken vs. Arbeitsplätze halten) schwierig.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a9',
    titel: '9. Kriterien der Betriebseinteilung',
    aufgabeText:
      'Nennen Sie fünf Hauptkriterien, nach denen sich Betriebe einteilen lassen. Zeigen Sie anhand von Beispielen praktische Anwendungen auf.',
    loesung: `Fünf Hauptkriterien der Betriebseinteilung:
  • Eigentümer.
  • Rechtsform (bestimmt Haftung, Gewinnverteilung, Führung).
  • Branche (bestimmt u. a. die Interessenvertretung).
  • Größe (klein, mittelständisch, groß – bestimmt z. B. die Mitbestimmung).
  • Ziel (Gewinnmaximierung, angemessener Gewinn, Kostendeckung).`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a10',
    titel: '10. Rückgang der Gewerkschaftsbindung',
    aufgabeText:
      'Erläutern Sie Gründe für die langfristig abnehmende Zahl gewerkschaftlich gebundener Arbeitnehmer in Deutschland.',
    loesung: `Gründe für die langfristig sinkende Zahl gewerkschaftlich gebundener
Arbeitnehmer:
  • Stabiler Arbeitsmarkt – geringere Angst vor Arbeitslosigkeit als früher.
  • Trittbrettfahrer-Problem: Auch Nichtmitglieder profitieren von den
    Tarifabschlüssen.
  • Trend zur Individualisierung – weniger langfristiges Engagement (auch bei
    Kirchen, Parteien, Vereinen).
  • Wandel der Arbeitswelt (prekärer, häufigere Job- und Branchenwechsel).
  • Akademisierung – Gewerkschaften vertreten eher einfache Arbeiter.
  • Trend zur Dienstleistungsgesellschaft – weniger Industrie (klassische
    Gewerkschaftsbasis); Ausnahme öffentlicher Dienst (Verdi).`,
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a11',
    titel: '11. Gliederung der BWL',
    aufgabeText:
      'Wie lässt sich die BWL untergliedern? Erläutern Sie zudem anhand von 3 Beispielen, wie die BWL von anderen Wissenschaftszweigen profitiert.',
    loesung: `Untergliederung der BWL:
  • nach Allgemeiner und Spezieller BWL,
  • nach Funktion (z. B. Marketing, Absatz) und nach Objekt/Branche.

Die BWL profitiert von anderen Wissenschaften, z. B.:
  • Informatik – automatische Auswertung von Daten,
  • Psychologie – z. B. für das Marketing,
  • Mathematik – Rechenverfahren/Grundrechenarten.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a12',
    titel: '12. Unternehmensmodell & Außenbeziehungen',
    aufgabeText:
      'Entwickeln Sie das Modell eines Unternehmens mit besonderem Schwerpunkt auf seinen Außenbeziehungen.',
    loesung: `Modell des Unternehmens als offenes System mit Außenbeziehungen:
  • Beschaffungsmarkt: Das Unternehmen kauft Waren, Dienstleistungen und
    Personal ein.
  • Absatzmarkt: Es bietet Waren an, um Umsatz zu erzielen.
  • Kapitalmarkt: Es erhält Fremdkapital und schüttet Gewinnanteile aus.
  • Staat: Es erhält ggf. staatliche Aufträge oder Subventionen und zahlt
    Steuern.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a13',
    titel: '13. Kartell & Monopol',
    aufgabeText:
      'Was verstehen wir unter einem Kartell, was unter einem Monopol? Warum sind beide nicht so problematisch, wie sie in der öffentlichen Diskussion manchmal gemacht werden?',
    loesung: `Kartell: Zusammenschluss selbstständiger Unternehmen zu Lasten Dritter
(z. B. Preisabsprache), meist lose und horizontal (gleiche Branche). In
Deutschland bei marktbeherrschender Stellung (ca. 40 %) verboten, niedrig-
schwellig erlaubt. Beispiele: OPEC (Fördermengen), Bauindustrie, Drogenhandel.
Kartell-Problematik: nützt allen, aber nur, wenn sich alle daran halten – wer
ausschert, ist im Vorteil, deshalb zerfallen Kartelle leicht.

Monopol:
  • Nachfragemonopol – nur ein Nachfrager (oft der Staat, z. B. Militär); er
    ist im Verhandlungsvorteil.
  • Angebotsmonopole:
      – Natürliche Monopole (Netze für Strom, Gas, Bahn): Trennung von
        Monopol- und Wettbewerbsbereich („Unbundling").
      – Rechtliche Monopole (Patente, Markenrechte): befristet, zur Förderung
        von Innovation.
      – Wirtschaftliche Monopole / „Quasi-Monopole" (z. B. Facebook):
        Kartellamt macht Auflagen, Wettbewerb zulassen.

Beide sind oft weniger problematisch als dargestellt, weil sie durch
Wettbewerb bzw. Aufsicht diszipliniert werden.`,
    schwierigkeit: 'mittel',
    kategorie: 'Grundlagen',
  },
  {
    id: 'a14',
    titel: '14. Schritte der Sanierung',
    aufgabeText: 'Erläutern Sie Schritte der Sanierung.',
    loesung: `Schritte einer Sanierung (bei drohender Insolvenz):
  • Kurzfristig („Crash-Programm"): finanziellen Überblick über Aktiva/
    Passiva verschaffen (Gläubiger/Schuldner), Management austauschen
    (verhindert das Beiseiteschaffen von Vermögen).
  • Mittelfristig („Restrukturierung"): nicht notwendiges Vermögen verkaufen,
    Personalabbau (aufgeweichter Kündigungsschutz als Chance).
  • Langfristig („strategische Neustrukturierung"): neue Märkte erschließen.

Entscheidend ist die Erschließung von neuem Eigenkapital (davon hängen Fremd-
kapital und Subventionen ab) – die Geldgeber müssen wieder an das Unternehmen
glauben. Geeignete Eigentümer: Staat (Steuermittel) oder Familien (emotional
verbunden); geeignete Rechtsform: Kapitalgesellschaft (keiner haftet privat).
Alle Beteiligten (Eigentümer, Gläubiger, Mitarbeiter) müssen einen Beitrag
leisten.`,
    schwierigkeit: 'mittel',
    kategorie: 'Betrieblicher Lebenszyklus',
  },
  {
    id: 'a15',
    titel: '15. Bilanzkennzahlen erklären',
    aufgabeText:
      'Erklären Sie folgende Kennzahlen: Eigenkapitalquote, Verschuldungsgrad und Verschuldungsquote, Anlagenquote, Anlagendeckung I und II, Liquidität, Gesamtkapital- und Eigenkapitalrentabilität. (Grundlage: PP-Folie „Bsp. Bilanz".)',
    loesung: `Grundlage: Beispiel-Bilanz mit EK 2,9 / GK 10 / FK 7,1 / AV 4 / langfr. FK
3,5 / Guthaben 1 / kurzfr. Forderungen 2 / Vorräte 2,5 / kurzfr. FK 3,2 /
pass. RAP 0,4 / JÜ 0,4 (alles Mio €).

Kapitalstruktur (Passivseite):
  • Eigenkapitalquote = EK / GK = 2,9 / 10 = 29 % (gut sind 20–30 %; wichtig
    für Fremdkapitalgeber).
  • Verschuldungsgrad = FK / EK = 7,1 / 2,9 = 2,45 (zentral für den Leverage).
  • Verschuldungsquote = FK / GK = 7,1 / 10 = 71 % (Gegenstück zur EK-Quote).

Vermögensstruktur (Aktivseite):
  • Anlagenintensität = AV / GK = 4 / 10 = 40 % (branchenabhängig; niedriger =
    flexibler).

Fristenkongruenz (goldene Bilanzregel: langfristiges Vermögen langfristig
finanzieren):
  • Anlagendeckung I  = EK / AV = 2,9 / 4 = 72,5 %.
  • Anlagendeckung II = (EK + langfr. FK) / AV = (2,9 + 3,5) / 4 = 160 %
    (soll ≥ 100 %).

Liquidität (Nenner = kurzfr. FK + pass. RAP = 3,6):
  • 1. Grades = Guthaben / 3,6 = 1 / 3,6 = 28 % (darf < 100 %).
  • 2. Grades = (Guthaben + kurzfr. Ford.) / 3,6 = 3 / 3,6 = 83 % (~100 %).
  • 3. Grades = (Guthaben + kurzfr. Ford. + Vorräte) / 3,6 = 5,5 / 3,6 = 153 %
    (muss > 100 %).

Rentabilität (JÜ = 0,4; GK bzw. EK jeweils ohne JÜ):
  • ROI = JÜ / (GK − JÜ) = 0,4 / 9,6 = 4,2 % (wenig aussagekräftig).
  • Eigenkapitalrentabilität = JÜ / (EK − JÜ) = 0,4 / 2,5 = 16 %.
  • Gesamtkapitalrentabilität = (JÜ + FK-Zinsen) / (GK − JÜ)
    = (0,4 + 7,1 × 0,06) / 9,6 = 8,6 %.
Langfristig gilt EKR > GKR > FK-Zins (hier 16 % > 8,6 % > 6 %); die GKR liegt
immer zwischen EKR und FK-Zins – sonst wurde falsch gerechnet.`,
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a16',
    titel: '16. Kennzahlen & Einsatzgebiete',
    aufgabeText:
      'Was versteht man unter betriebswirtschaftlichen Kennzahlen? Beschreiben Sie vier Einsatzgebiete.',
    loesung: `Betriebswirtschaftliche Kennzahlen sind quantitative, verdichtete Größen,
die man für Entscheidungen benötigt.

Vier Einsatzgebiete:
  • Zeit- und Periodenvergleich (vorsichtig bei Zukunftsprognosen).
  • Vergleich von Abteilungen einer Firma (nur sinnvoll, wenn vergleichbar).
  • Externer Betriebsvergleich = Benchmarking (nur möglich, wenn kein direkter
    Wettbewerb besteht).
  • Soll-Ist-Vergleich (für Motivation, Orientierung, Kontrolle).`,
    schwierigkeit: 'einfach',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a17',
    titel: '17. Lanz GmbH – Liquidität, EKR, GKR',
    aufgabeText:
      'Die Lanz GmbH weist 2024 folgende Bilanz auf. Aktiva: Grundstücke 1.200.000, Maschinelle Anlagen 600.000, Vorräte 900.000, kurzfr. Forderungen 820.000, Bankguthaben 300.000, Kasse 80.000 (Summe 3.900.000). Passiva: Eigenkapital 2.430.000 (davon Jahresüberschuss 930.000), Rückstellungen (langfristig) 250.000, Verbindlichkeiten (langfristig) 620.000, Verbindlichkeiten (kurzfristig) 600.000 (Summe 3.900.000). Beurteilen Sie die Liquidität sowie EKR und GKR.',
    loesungBild: ['frage 18.jpg'],
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a18',
    titel: '18. Lauscher – Kapitalgewinn & Jahresüberschuss',
    aufgabeText: `Über ein Konkurrenzunternehmen liegen vor: Bilanzsumme (= Gesamtkapital) 10.000 €, durchschnittlicher Fremdkapitalzins 10 %, Verschuldungsgrad (FK zu EK) 3, Gesamtkapitalrentabilität 12,5 %. Ermitteln Sie
a) den Kapitalgewinn und
b) den Jahresüberschuss.`,
    loesungBild: ['frage 19.jpg'],
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a19',
    titel: '19. Leverage-Effekt',
    aufgabeText:
      'Erläutern und interpretieren Sie den Leverage-Effekt an einem Zahlenbeispiel.',
    loesung: `Leverage-Formel: EKR = GKR + (GKR − FK-Zins) × (FK / EK),
also EKR = GKR + Zinsdifferenz × Verschuldungsgrad.

Leverage-Effekt: Solange die GKR über dem FK-Zins liegt, hebt ein steigender
Verschuldungsgrad die EKR nach oben. Fällt die GKR jedoch unter den FK-Zins,
drückt der Hebel die EKR stark ins Minus. → Ein hoher Verschuldungsgrad
erhöht Chance UND Risiko.

Anmerkung: Real steigen mit wachsender Verschuldung auch die FK-Zinsen; ein
üblicher Verschuldungsgrad liegt bei etwa 4 (EK-Quote ~20–30 %).`,
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a20',
    titel: '20. „Pleite und Co." – Renditen',
    aufgabeText:
      'Das Unternehmen „Pleite und Co." hat 2024 durchschnittlich 9 % Zinsen für das Fremdkapital bezahlt. Insgesamt hat sich das Kapital mit 8 % rentiert. Es wurden 2,4 Mio. € umgesetzt. Die Bilanzsumme betrug am Jahresende 1,2 Mio. €, der Verschuldungsgrad war 2. Wie hoch waren EK-Rendite, Umsatzrendite und Kapitalgewinn?',
    loesungBild: ['Frage 21.jpg'],
    schwierigkeit: 'schwer',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a21',
    titel: '21. „Unglück AG" – Erfolgsgrößen',
    aufgabeText:
      'Dem Jahresabschluss der „Unglück AG" sind zu entnehmen: Bilanzsumme 120.000 €, Verschuldungsgrad 2, Umsatz 360.000 €, Materialaufwand 144.000 €, Personalaufwand 108.000 €, Abschreibungen 90.000 €, gezahlte Fremdkapitalzinsen 6.000 €. Ermitteln und beurteilen Sie: Kapitalgewinn, Jahresüberschuss, Umsatzrendite, Gesamtkapitalrentabilität, Eigenkapitalrentabilität, Fremdkapitalzinssatz. (Siehe PP-Folie „Alternative Erfolgsbegriffe".)',
    loesungBild: ['Frage 22.jpg'],
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
    loesung: `a) Personenzahl zur Gründung:
   • EU: genau 1 Person.
   • OHG: mind. 2 (in der Praxis nur ~4–5 wegen voller, solidarischer Haftung).
   • KG: mind. 1 Komplementär + 1 Kommanditist (meist viele Kommanditisten/
     Einleger, wenige Komplementäre/Eigentümer).
   • UG/GmbH/AG: mind. 1 (z. B. gehört die DB nur dem Bund).

b) Haftung:
   • EU: voll. OHG: voll und solidarisch.
   • KG: Komplementär voll und solidarisch, Kommanditist nur bis zur Höhe der
     Einlage („KomplemenTÄR haftet MÄHR").
   • UG/GmbH/AG: beschränkt auf das Gesellschaftsvermögen.

c) Mindest-/Startkapital: AG 50.000 €, GmbH 25.000 €, UG 1 €; EU/OHG/KG keines.

d) Gewinnverteilung ohne Regelung im Gesellschaftsvertrag:
   • EU: alles an den Inhaber.  OHG: gleiche Aufteilung unter den Gesellschaftern.
   • KG: nach Personen (Lösung: Gesellschaftsvertrag, Komplementär als
     Geschäftsführer oder Vorabgewinn).
   • Kapitalgesellschaften: nach Kapitalanteil.

e) Bedeutung in Deutschland: Einzelunternehmen bedeutend (sehr zahlreich); OHG
   verliert an Bedeutung (volle, solidarische Haftung); Kapitalgesellschaften
   wichtig (viel Umsatz, viele Arbeitsplätze).`,
    schwierigkeit: 'schwer',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a24',
    titel: '24. Mitbestimmung bei der Volkswagen AG',
    aufgabeText:
      'Schildern Sie die betriebliche und unternehmerische Mitbestimmung am Beispiel der Volkswagen AG.',
    loesung: `Betriebliche Mitbestimmung bei VW:
  • Betriebsrat – ja (mehr als 5 Mitarbeiter).
  • Jugend-/Auszubildendenvertretung – ja (mehr als 5 Jugendliche).
  • Sprecherausschuss – ja (mehr als 10 leitende Angestellte).

Unternehmerische Mitbestimmung (im Aufsichtsrat):
  • VW ist eine Kapitalgesellschaft (AG).
  • Montan-MitbestG – nein (keine Kohle/Stahl).
  • MitbestG 1976 – ja (mehr als 2.000 Beschäftigte) → paritätischer AR.
  • DrittelbG – nein (MitbestG geht vor).
  • Aufsichtsrat: 20 Mitglieder, davon 10 Anteilseigner- und 10 Arbeitnehmer-
    vertreter (Arbeiter, Angestellte, 1 leit. Angestellter, Gewerkschafts-
    vertreter). Anteilseignerseite: Porsche/Piech, Land Niedersachsen, Katar,
    Streubesitz.`,
    schwierigkeit: 'mittel',
    kategorie: 'Rechtsformen & Mitbestimmung',
  },
  {
    id: 'a25',
    titel: '25. Stakeholder & Sanktionsmöglichkeiten',
    aufgabeText:
      'Welche unternehmensinternen und -externen Gruppen (Stakeholder) nehmen auf die Zielbildung Einfluss? Beschreiben Sie ihre Sanktionsmöglichkeiten, um das Management zur Rücksichtnahme zu zwingen. (Siehe PP-Folie „Anreiz-Beitrags-Theorie".)',
    loesung: `Anreiz-Beitrags-Theorie: Jede Gruppe leistet ihre Beiträge nur, solange die
Anreize sie aufwiegen; sonst sanktioniert sie.

  • Eigentümer – Anreiz: Einfluss, Gewinn/Dividende, Kurssteigerung; Beitrag:
    Eigenkapital, Haftung; Sanktion: Kapital entziehen, Management austauschen,
    verkaufen (++).
  • Gläubiger/Banken – Zins, Tilgung / Fremdkapital, Beratung / keine neuen
    Kredite (+).
  • Lieferanten – Abnahme + Bezahlung / Lieferung in Zeit/Ort/Qualität / keine
    neuen Verträge (−/0).
  • Arbeitnehmer – Gehalt, Sicherheit, Entwicklung / Arbeitskraft, Loyalität /
    kündigen, streiken, Dienst nach Vorschrift (+/++).
  • Management – wie AN, nur mehr / provozierter Rauswurf mit fachlich
    unanfechtbaren Entscheidungen (++).
  • Kunden – Waren/Dienstleistungen / kaufen, bezahlen, weiterempfehlen / nicht
    kaufen, negativ reden (+++).
  • Staat – Arbeitsplätze, Steuern / Infrastruktur, Bildung, Rechtsschutz /
    Genehmigungen verschleppen, Prüfungen (++).

Gläubiger sind in Deutschland besonders wichtig (viel FK/geringe EK-Quote,
Hausbankensystem, hoher Gläubigerschutz im HGB). Die stärkste Position hat,
wer direkt am Endkunden ist (Hersteller/Vertrieb vor Zulieferer) – der Kunde
bezahlt am Ende alles.`,
    schwierigkeit: 'mittel',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a26',
    titel: '26. Unternehmensphilosophie',
    aufgabeText:
      'Was versteht man unter einer Unternehmensphilosophie? Welche Zwecke verfolgt die Leitung mit ihrer Offenlegung?',
    loesung: `Die Unternehmensphilosophie ist, wie ein Unternehmen sich selbst und seine
Umwelt sieht. Sie wird in einem Leitbild verschriftlicht, um aktuelle und
potenzielle Mitarbeiter (sowie die Öffentlichkeit) zu informieren und zu
orientieren.`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a27',
    titel: '27. Zielkonflikte (ökonomisch/sozial/ökologisch)',
    aufgabeText:
      'Nennen Sie Beispiele für Zielkonflikte zwischen ökonomischen, sozialen und ökologischen Zielen.',
    loesung: `Beispiele für Zielkonflikte:
  • ökonomisch vs. sozial: höhere Löhne/Benefits (z. B. Betriebskindergarten)
    gegen den Gewinn.
  • ökonomisch vs. ökologisch: Umweltschutz (Recycling, Filter) gegen den
    Gewinn.
  • ökologisch vs. sozial: z. B. Mitarbeiterparkplätze bzw. Firmenwagen
    (Bequemlichkeit gegen Umwelt).`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
  {
    id: 'a28',
    titel: '28. Leistungs-, Finanz- und Erfolgsziele',
    aufgabeText:
      'Nennen Sie Beispiele für die Zielkategorien Leistungs-, Finanz- und Erfolgsziele.',
    loesung: `Beispiele je Zielkategorie:
  • Leistungsziel (Sachziel): „Wir wollen den Absatz um 5 % steigern." /
    „Ein Mitarbeiter soll pro Tag 10 Kunden die Haare schneiden."
  • Erfolgsziel (Formalziel): „Wir wollen den Gewinn 2021 im Vergleich zum
    Vorjahr halten."
  • Finanzziel: „Wir wollen 2022 eine Liquidität von 80 % erreichen."`,
    schwierigkeit: 'einfach',
    kategorie: 'Ziele im Unternehmen',
  },
]
