import type { Aufgabe } from '../types'

// Übungsfragen zur Allgemeinen Betriebswirtschaftslehre I (WS 2025/2026)
// Quelle: Übungsbegleiter Modul ABWL I, Prof. Dr. Markus Göltenboth, HS Fulda.
export const aufgaben: Aufgabe[] = [
  {
    id: 'a1',
    titel: '1. Studienmotivation',
    aufgabeText:
      'Warum sind Sie hier (an dieser Hochschule, in diesem Studiengang)?',
    tipp: 'Persönliche Reflexion – es gibt keine „richtige" Antwort. Denken Sie an Motivation, Ziele und Erwartungen.',
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
    tipp: 'Ordnen Sie jeden Index einer Anlageklasse zu. Die aktuelle Lage ist tagesaktuell selbst zu recherchieren.',
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
    tipp: 'Schlüsselbegriff: Knappheit. Stellen Sie knappe Mittel den (nahezu) unbegrenzten Bedürfnissen gegenüber.',
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
    tipp: 'Stichworte: ökonomisches Prinzip, „bounded rationality", formale vs. materiale Rationalität.',
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
    tipp: 'Prüfen Sie jeweils: Was ist vorgegeben (fix)? Was soll optimiert (max/min) werden?',
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
    tipp: 'Achten Sie auf die Bezugsebene: Mengen → Werte → Kapital.',
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
    tipp: 'Wirtschaftlichkeit = Soll-/Istkosten; Arbeitsproduktivität = Stück/Beschäftigte; Umsatzrentabilität = Gewinn/Umsatz.',
    loesung: `a) Marktanteil = Umsatz des Unternehmens / Gesamtumsatz des
   Marktes. NICHT zweifelsfrei: Bezugsgröße variiert (Umsatz,
   Stückzahl, wert-/mengenmäßig) und die Marktabgrenzung ist
   strittig (nur PKW? inkl. Nutzfahrzeuge? regional/global?
   einzelnes Segment?).

b) Kennzahlen (jeweils A | B | C):

   Wirtschaftlichkeit = Sollkosten / Istkosten
     A: 73   / 74,2 = 0,98  (< 1 → unwirtschaftlich)
     B: 26   / 25,3 = 1,03  (> 1 → wirtschaftlich)
     C: 21   / 21,8 = 0,96  (< 1 → unwirtschaftlich)

   Arbeitsproduktivität = PKW-Produktion / Beschäftigte
     A: 3.000.000 / 270.000 = 11,1 PKW je MA
     B: 1.000.000 /  56.000 = 17,9 PKW je MA
     C:   880.000 /  48.000 = 18,3 PKW je MA

   Umsatzrentabilität = Gewinn / Umsatz × 100
     A: 1,8 / 76 = 2,4 %
     B: 1,7 / 27 = 6,3 %
     C: 0,2 / 22 = 0,9 %

   Interpretation:
   • B wirtschaftet am effizientesten: einzige Firma mit
     Wirtschaftlichkeit > 1 und klar höchste Umsatzrendite.
   • A ist absolut am größten, aber margenschwach und leicht
     unwirtschaftlich.
   • C hat die höchste mengenmäßige Arbeitsproduktivität, ist
     aber am wenigsten rentabel und ebenfalls unwirtschaftlich.

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
    tipp: 'Unterscheidungskriterien: Trägerschaft (privat/öffentlich), Zielsetzung (Gewinn/Gemeinwohl), Finanzierung.',
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
    tipp: 'Denken Sie an Branche, Größe, Faktorintensität, Rechtsform und Standort.',
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
    tipp: 'Strukturwandel der Arbeitswelt, Wertewandel und das Trittbrettfahrer-Problem.',
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
    tipp: 'Allgemeine vs. spezielle BWL; spezielle BWL funktional und institutionell. Nachbarwissenschaften nennen.',
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
    tipp: 'Unternehmen als offenes System: Input–Transformation–Output und die umgebenden Märkte/Stakeholder.',
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
    tipp: 'Definitionen klären, dann Gegenargumente: bestreitbare Märkte, natürliche Monopole, Innovationsanreize.',
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
    tipp: 'Von der Ursachenanalyse über Sofortmaßnahmen zur leistungs- und finanzwirtschaftlichen Sanierung.',
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
    tipp: 'Ordnen Sie nach Kapitalstruktur, Vermögensstruktur, Fristenkongruenz, Liquidität und Rentabilität.',
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
• Eigenkapitalrentabilität = Gewinn / EK × 100`,
    schwierigkeit: 'mittel',
    kategorie: 'Mengen, Werte & Kennzahlen',
  },
  {
    id: 'a16',
    titel: '16. Kennzahlen & Einsatzgebiete',
    aufgabeText:
      'Was versteht man unter betriebswirtschaftlichen Kennzahlen? Beschreiben Sie vier Einsatzgebiete.',
    tipp: 'Kennzahlen verdichten Information. Denken Sie an Information, Planung, Kontrolle und Vergleich.',
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
    tipp: 'Liquide Mittel = Bank + Kasse; Umlaufvermögen = Vorräte + Forderungen + Bank + Kasse; kurzfr. Verbindlichkeiten = 600.000.',
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
    tipp: 'Aus Verschuldungsgrad FK/EK = 3 und EK + FK = 10.000 die Kapitalstruktur bestimmen. Kapitalgewinn = GKR × GK.',
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
    tipp: 'Leverage-Formel: EKR = GKR + (GKR − FK-Zins) × FK/EK. Zeigen Sie auch den negativen Fall.',
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
    tipp: 'GKR = 8 %, FK-Zins = 9 % → negativer Leverage. Erst Kapitalstruktur aus Verschuldungsgrad 2 bestimmen.',
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
    tipp: 'Erst Kapitalgewinn (Gewinn vor FK-Zinsen) aus der GuV ermitteln, dann FK-Zinsen abziehen.',
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
    tipp: 'Drei Hauptgruppen: Einzelunternehmen, Personengesellschaften, Kapitalgesellschaften (plus Misch- und Sonderformen).',
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
    tipp: 'Arbeiten Sie spaltenweise (a–e) je Rechtsform. Achtung: UG ist eine „Mini-GmbH" mit 1 € Mindestkapital.',
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

d) Gewinnverteilung ohne Vertragsregelung:
   EU:  gesamter Gewinn an den Inhaber
   OHG: 4 % auf Kapitalanteil vorab, Rest nach Köpfen
   KG:  4 % auf Kapitalanteile vorab, darüber „angemessenes
        Verhältnis" (§ 168 HGB)
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
    tipp: 'Zwei Ebenen: betrieblich (BetrVG, Betriebsrat) und unternehmerisch (MitbestG, Aufsichtsrat) – plus die VW-Besonderheit.',
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
    tipp: 'Anreiz-Beitrags-Theorie: Jede Gruppe leistet Beiträge und kann diese entziehen, wenn die Anreize nicht ausreichen.',
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
    tipp: 'Grundwerte/Leitbild – betrachten Sie die Wirkung nach innen und nach außen getrennt.',
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
    tipp: 'Drei-Säulen-Modell der Nachhaltigkeit – betrachten Sie die Konflikte paarweise.',
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
    tipp: 'Unterscheidung Sachziele (Leistung) vs. Formalziele (Erfolg); Finanzziele sichern Zahlungsfähigkeit.',
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
