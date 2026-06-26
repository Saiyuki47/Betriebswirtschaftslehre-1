import type { Aufgabe } from '../types'

// Altklausuren als eigenständig lösbare Aufgaben – Frage, Tipp, Musterlösung mit Erklärung.
// Quelle: transkribierte Altklausuren im Ordner /altklausuren (Schülerantworten) plus
// eigene erklärte Musterlösungen. Teilaufgaben a)/b)/c) stehen je am Zeilenanfang.
// Hinweis: Bei „Hase GmbH" (SS 2016) und „Klausurglück GmbH" (WS 2015/16) lagen die
// konkreten Zahlen nur als Bild in der PDF vor – dort wird die Lösungs-Methode gezeigt.
export const altklausurAufgaben: Aufgabe[] = [
  // ===================== SS 2015 =====================
  {
    id: 'k-ss15-1',
    titel: 'SS 2015 · Aufgabe 1',
    kategorie: 'Altklausur SS 2015',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Der Kurs des Euros ist gegenüber dem Dollar klar gefallen. Nennen Sie einige Vor- und Nachteile eines schwächeren Euros. Profitiert Deutschland als Ganzes von einem schwächeren Euro (mit Begründung)? (6 P.)\n\nb) Was verstehen wir unter einem Kartell? Schildern Sie das Kartell der „OPEC" anhand der Kriterien „Richtung des Zusammenschlusses" und „Bindungsintensität". (5 P.)\n\nc) Was verstehen wir unter einer „übertragenen Sanierung"? Wann könnte eine solche – aus Sicht des übertragenen Unternehmens und aus Sicht der Eigentümer – erfolgversprechend sein? (6 P.)',
    tipp: {
      konzept:
        'Drei Themen: (a) Wechselkurs EUR/USD – ein schwacher Euro verbilligt Exporte und verteuert Importe (Öl/Gas werden in $ abgerechnet). (b) Kartell = lose, horizontale Wettbewerbsabsprache. (c) übertragene Sanierung = Rettung durch Verkauf an einen neuen Eigentümer.',
      vorgehen:
        'a) Vor-/Nachteile eines schwachen Euros auflisten, dann für Deutschland abwägen. b) Kartell definieren, OPEC nach Richtung und Bindungsintensität einordnen. c) übertragene Sanierung erklären und aus zwei Sichten (Unternehmen, Eigentümer) prüfen.',
      syntax:
        'a) Schwacher Euro: + Exporte, − Importe teurer (importierte Inflation); Fazit: D braucht eher eine starke Währung (importabhängig). b) OPEC = horizontal (gleiche Stufe) + lose (Kartell). c) Verkauf des gesunden Geschäfts ohne Altschulden.',
      fehler:
        'Nur ~10 % der dt. Exporte gehen in den Dollarraum – die Importabhängigkeit überwiegt. Das Kartell ist die LOSESTE Bindungsform (nicht die Fusion).',
    },
    loesung: `a) Schwacher Euro – Vor- und Nachteile:
• Vorteile: Exporte werden im Ausland billiger → Exporteure profitieren; ausländische Touristen kommen; die EZB erreicht eher ihr Inflations-/Wachstumsziel.
• Nachteile: Importe werden teurer – v. a. Öl und Gas, die in Dollar abgerechnet werden → „importierte Inflation"; Auslandsurlaub für Deutsche teurer; Kaufkraft im Ausland sinkt.

Profitiert Deutschland als Ganzes? Differenziert: Deutschland ist zwar Exportnation, aber nur ein kleiner Teil der Exporte (~10 %) geht in den Dollarraum, während Deutschland stark von in Dollar fakturierten Rohstoff-Importen abhängt. → Tendenziell braucht Deutschland eher eine STARKE Währung; ein schwacher Euro verteuert die Importe stärker, als er die Exporte begünstigt.

b) Kartell:
• Kartell = vertragliche oder abgestimmte Zusammenarbeit rechtlich selbstständig bleibender Unternehmen zur Beschränkung des Wettbewerbs (Preis-, Mengen- oder Gebietsabsprachen). In der EU/DE grundsätzlich verboten (§ 1 GWB).
• OPEC nach den beiden Kriterien:
  – Richtung: HORIZONTAL – alle Mitglieder stehen auf derselben Wirtschaftsstufe (Erdölförderung).
  – Bindungsintensität: LOSE – das Kartell ist die loseste Form des Zusammenschlusses; die Mitglieder bleiben rechtlich selbstständig und stimmen nur Fördermengen/Preise ab.

c) Übertragene Sanierung:
• = Sanierung durch VERKAUF des (gesunden) Betriebs an einen neuen Eigentümer (asset deal); das alte, überschuldete Rechtssubjekt wird liquidiert, das Geschäft lebt beim Käufer weiter.
• Erfolgversprechend aus Sicht des übertragenen Unternehmens: wenn das operative Kerngeschäft überlebensfähig ist und nur die Altschulden/Altlasten des bisherigen Trägers erdrücken – der Käufer übernimmt das gesunde Geschäft ohne diese Lasten.
• Aus Sicht der (Alt-)Eigentümer: wenn der Verkaufserlös höher ist als der erwartete zukünftige Gewinn bzw. als der Zerschlagungswert – sie steigen „auf hohem Niveau" aus.`,
  },
  {
    id: 'k-ss15-2',
    titel: 'SS 2015 · Aufgabe 2',
    kategorie: 'Altklausur SS 2015',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Nennen Sie die drei Bilanzzwecke und geben Sie zu jedem (mindestens) eine wesentliche Anspruchsgruppe (Stakeholder) an, für die er besondere Bedeutung hat. (6 P.)\n\nb) Eine Möglichkeit, Wertschätzung auszudrücken, ist die Zahlung von Geld (z. B. eine Lohnerhöhung). Ist das immer eine gute Möglichkeit, Mitarbeiter zu motivieren? Was könnte – in welcher Situation – erfolgversprechender sein? (6 P.)\n\nc) Nennen Sie die vier Existenzbedingungen von Unternehmen. Geben Sie für zwei davon eine Kennzahl an, mit der man sie messen kann. (6 P.)',
    tipp: {
      konzept:
        'a) Die Bilanz erfüllt drei Zwecke. b) Geld motiviert nur begrenzt (Hygienefaktor mit Gewöhnungseffekt). c) Vier Existenzbedingungen sichern das Überleben eines Unternehmens.',
      vorgehen:
        'a) Drei Bilanzzwecke + je einen Stakeholder. b) Begründen, warum Geld nicht immer motiviert, und Alternativen je nach Maslow-Ebene. c) Vier Existenzbedingungen + zwei Kennzahlen.',
      syntax:
        'a) Rechenschaft → Eigentümer/Banken; Information → Investoren; Zahlungsbemessung → Staat. b) Alternativen: Lob, Verantwortung, Status. c) Rentabilität (EKR), Liquidität (Liquiditätsgrade), Wachstum, Planbarkeit.',
      fehler:
        'Geld ist ein „Hygienefaktor" mit Gewöhnungseffekt – nicht dauerhaft motivierend. Je Bilanzzweck wirklich einen passenden Stakeholder nennen.',
    },
    loesung: `a) Drei Bilanzzwecke + Stakeholder:
1. Rechenschaft / Rechnungslegung → Eigentümer/Gesellschafter und Banken (Nachweis der Mittelverwendung).
2. Informationszweck → (potenzielle) Investoren und Kreditgeber (Entscheidungsgrundlage).
3. Zahlungsbemessungszweck → Staat/Finanzamt (Steuerbemessung) sowie Anteilseigner (Gewinnausschüttung).

b) Geld als Wertschätzung – nicht immer optimal:
• Geld wirkt vor allem als „Hygienefaktor" (Herzberg): kurzfristig und mit starkem Gewöhnungseffekt – man gewöhnt sich schnell an mehr Geld. Bei bereits ausreichendem Einkommen motiviert eine weitere Lohnerhöhung kaum noch.
• Erfolgversprechender (je nach Maslow-Ebene, wenn Grundbedürfnisse gedeckt sind): Anerkennung/Lob (Wertschätzung), Verantwortung und Freiräume (Selbstverwirklichung), gute Arbeitsbedingungen, Status-Anreize (Dienstwagen, schönes Büro). Diese wirken nachhaltiger als reines Geld.

c) Vier Existenzbedingungen + Kennzahlen:
• Rentabilität – Kennzahl: Eigenkapitalrentabilität EKR = JÜ / EK × 100 (oder GKR).
• Liquidität – Kennzahl: Liquidität 1./2./3. Grades (bzw. Cashflow).
• Wachstum – Kennzahl: Umsatz-/Absatz-Zuwachsrate.
• Planbarkeit – (qualitativ: verlässliche Rechts-/Rahmenbedingungen).`,
  },
  {
    id: 'k-ss15-3',
    titel: 'SS 2015 · Aufgabe 3',
    kategorie: 'Altklausur SS 2015',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Die „Kerzengrade KG" hatte im letzten Jahr einen Umsatz von 100.000 €, 20.000 € Eigenkapital, zahlte durchschnittlich 5 % Zinsen auf ihre Schulden und hatte eine Gesamtkapitalrentabilität von 7,5 %. Wie viel Fremdkapital benötigt das Unternehmen, damit es eine Eigenkapitalrentabilität von 20 % ausweisen kann? Wie hoch waren Gewinn, Umsatzrendite und ROI? Würden Sie investieren (mit Begründung)? Wie viele Eigentümer muss das Unternehmen mindestens haben? (16 P.)\n\nb) Schildern Sie das Montan-Mitbestimmungsgesetz: Wann wurde es erlassen, für welche Unternehmen gilt es? Welche Gruppen sind im Aufsichtsrat vertreten und wie ist das Stimmenverhältnis zwischen Arbeitgebern und Arbeitnehmern? (9 P.)',
    tipp: {
      konzept:
        'a) Über die Leverage-Formel lässt sich das nötige Fremdkapital für eine Ziel-EKR bestimmen. b) Das Montan-Mitbestimmungsgesetz (1951) regelt die stärkste Form der Mitbestimmung.',
      vorgehen:
        'a) Leverage-Formel nach [[FK|EK]] auflösen → FK; dann GK, Kapitalgewinn, FK-Zinsen, JÜ, Umsatzrendite, ROI; KG → Mindestzahl Eigentümer. b) Montan-MitbestG nach Jahr, erfassten Unternehmen, AR-Besetzung schildern.',
      syntax:
        'a) 20 = 7,5 + (7,5−5)×FK/20.000 → FK = 100.000. JÜ = 4.000, UR = 4 %, ROI = 7,5 %. KG = mind. 2 (1 Komplementär + 1 Kommanditist). b) 1951, Montanindustrie > 1.000 AN, AR paritätisch 1:1 + „neutraler Mann".',
      fehler:
        'VG = [[FK|EK]] = 5 ist hier sehr hoch (riskant). Beim Montan-MitbestG sorgt der „neutrale Mann" für eine ungerade AR-Zahl (kein Patt).',
    },
    loesung: `a) Kerzengrade KG – Rechnung:
Gegeben: Umsatz 100.000 €, EK 20.000 €, FKZ 5 %, GKR 7,5 %, Ziel-EKR 20 %.

Benötigtes Fremdkapital über die Leverage-Formel:
  EKR = GKR + (GKR − FKZ) × FK/EK
  20  = 7,5 + (7,5 − 5) × FK/20.000
  12,5 = 2,5 × FK/20.000  →  FK/20.000 = 5  →  FK = 100.000 €

Kontrolle: GK = EK + FK = 120.000 €.
  Kapitalgewinn = GKR × GK = 7,5 % × 120.000 = 9.000 €
  FK-Zinsen     = 5 % × 100.000 = 5.000 €
  Jahresüberschuss (Gewinn) = 9.000 − 5.000 = 4.000 €
  EKR = 4.000 / 20.000 = 20 % ✓

• Gewinn (JÜ) = 4.000 €
• Umsatzrendite = JÜ / Umsatz = 4.000 / 100.000 = 4 %
• ROI = GKR = 7,5 % (Kapitalgewinn / GK)

Investieren? Differenziert: Der Leverage ist positiv (GKR 7,5 % > FKZ 5 %), die EKR von 20 % ist attraktiv. ABER: der Verschuldungsgrad FK/EK = 100.000/20.000 = 5 ist sehr hoch → hohes Risiko (negativer Leverage bei kleinem GKR-Rückgang), und die Umsatzrendite von 4 % ist nur mäßig (< 5 %). → Chance, aber riskant.

Mindestzahl Eigentümer: Es ist eine KG → mindestens 2 Personen (1 Komplementär + 1 Kommanditist).

b) Montan-Mitbestimmungsgesetz:
• Erlassen 1951.
• Gilt für Unternehmen der Montanindustrie (Kohle und Stahl) mit mehr als 1.000 Beschäftigten.
• Aufsichtsrat: paritätisch besetzt – Arbeitgeber- und Arbeitnehmervertreter im Verhältnis 1 : 1, ergänzt um ein zusätzliches NEUTRALES Mitglied („neutraler Mann"). Dadurch ist die Mitgliederzahl ungerade (z. B. 11) und Patt-Situationen werden vermieden. → Stärkste Form der Mitbestimmung (echte Parität).`,
  },
  // ===================== SS 2016 =====================
  {
    id: 'k-ss16-1',
    titel: 'SS 2016 · Aufgabe 1',
    kategorie: 'Altklausur SS 2016',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was verstehen wir unter „der Wirtschaft", was unter „wirtschaften"? Warum versteht sich die BWL als „Rationalitätslehre"? (6 P.)\n\nb) Erläutern Sie kurz die verschiedenen Formen von Kaufleuten laut HGB. (10 P.)\n\nc) Was verstehen wir unter „Factoring"? (2 P.)',
    tipp: {
      konzept:
        'a) „Die Wirtschaft" und „wirtschaften" drehen sich um Knappheit; die BWL ist Rationalitätslehre. b) Das HGB kennt mehrere Kaufmannsformen. c) Factoring = Forderungsverkauf für sofortige Liquidität.',
      vorgehen:
        'a) Beide Begriffe definieren und die Rationalitätslehre begründen. b) Die Kaufmannsformen mit Paragraphen aufzählen. c) Factoring in einem Satz definieren.',
      syntax:
        'b) Istkaufmann (§ 1), Kannkaufmann (§ 2/§ 3), Formkaufmann (§ 6), Fiktiv-/Scheinkaufmann (§ 5). c) Factoring = laufender Verkauf KURZfristiger Forderungen an einen Factor gegen Abschlag.',
      fehler:
        'Factoring betrifft KURZfristige Forderungen (nicht langfristige!). Ist-, Kann-, Form- und Scheinkaufmann nicht verwechseln.',
    },
    loesung: `a) Wirtschaft / wirtschaften / Rationalitätslehre:
• „Die Wirtschaft" = Gesamtheit der Einrichtungen und Handlungen, die der planvollen Deckung des Bedarfs mit knappen Gütern dienen.
• „Wirtschaften" = Disponieren über knappe Güter zur Befriedigung von Bedürfnissen – wegen der Knappheit ist eine Wahl-/Entscheidung nötig.
• Rationalitätslehre: Die BWL untersucht, wie mit knappen Mitteln vernünftig und zielgerichtet entschieden wird (ökonomisches Prinzip); zudem wird oft mit FREMDEN Gütern/Kapital gewirtschaftet → Entscheidungen müssen rational begründet, nicht emotional sein.

b) Formen von Kaufleuten laut HGB:
• Istkaufmann (§ 1): betreibt ein Handelsgewerbe, das einen in kaufmännischer Weise eingerichteten Geschäftsbetrieb erfordert – Kaufmann kraft Gesetz.
• Kannkaufmann (§ 2 Kleingewerbe, § 3 Land-/Forstwirtschaft): wird durch freiwillige Eintragung ins Handelsregister zum Kaufmann.
• Formkaufmann (§ 6): Kaufmann kraft Rechtsform – Handels-/Kapitalgesellschaften (AG, GmbH, OHG, KG …) sind unabhängig vom Geschäftsumfang Kaufmann.
• Fiktiv-/Scheinkaufmann (§ 5): wer im Handelsregister eingetragen ist bzw. wer den Rechtsschein eines Kaufmanns erweckt, wird wie ein Kaufmann behandelt (Vertrauensschutz).

c) Factoring:
• = laufender Verkauf von (kurzfristigen!) Forderungen aus Lieferungen und Leistungen an einen Factor (Finanzdienstleister) gegen sofortige Liquidität – abzüglich eines Abschlags/einer Gebühr.
  (Hinweis: Es geht um KURZfristige Forderungen, nicht langfristige.)`,
  },
  {
    id: 'k-ss16-2',
    titel: 'SS 2016 · Aufgabe 2',
    kategorie: 'Altklausur SS 2016',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Nennen Sie zwei Gründe, warum Autobauer Neuwagen selbst zulassen. (4 P.)\n\nb) Was verstehen wir unter einer „Unternehmenskultur"? Erläutern Sie, wie man sich anhand von Symbolen über eine solche informieren kann (mit mindestens drei Beispielen für Symbole). (5 P.)\n\nc) Bei der „Hase GmbH" liegen Werte vor (Tabelle in der Klausur). Welche Teilproduktivitäten lassen sich ermitteln? Führen Sie die Berechnungen durch, interpretieren Sie und schätzen Sie die wirtschaftliche Situation ein. (10 P.)',
    tipp: {
      konzept:
        'a) Autobauer lassen Neuwagen selbst zu, um die Statistik zu schönen. b) Unternehmenskultur = gelebte Werte, erkennbar am Symbolsystem. c) Teilproduktivität = [[Output|Input]] je einzelnem Faktor.',
      vorgehen:
        'a) Zwei Gründe für die Eigenzulassung. b) Kultur definieren + drei Symbole. c) Je Faktor eine Teilproduktivität bilden und interpretieren.',
      syntax:
        'a) Absatz-/Marktanteilstatistik schönen, später als Tageszulassung mit Rabatt verkaufen. b) Symbole: Legenden/Mythen, Rituale, Corporate Identity, Atmosphäre, Kommunikationsstil. c) Arbeits-, Material-, Maschinenproduktivität = [[Menge|Faktor]].',
      fehler:
        'Teilproduktivitäten verschiedener Faktoren kann man nicht miteinander verrechnen (verschiedene Einheiten). Die konkreten Hase-Zahlen lagen als Bild vor.',
    },
    loesung: `a) Warum Autobauer Neuwagen selbst zulassen (Eigen-/Tageszulassung):
• Sie schönen die Zulassungs-/Absatzstatistik (Marktanteil, Image als Marktführer, Erfüllung von Absatzzielen).
• Sie sichern die Produktionsauslastung und können die Wagen später als „Tageszulassung"/Gebrauchtwagen mit Rabatt verkaufen, ohne offiziell den Listenpreis zu senken (Preispflege).

b) Unternehmenskultur + Symbole:
• Unternehmenskultur = Gesamtheit der im Laufe der Zeit gewachsenen und akzeptierten Werte und Normen, die das Entscheiden und Handeln der Mitglieder prägen (das tatsächlich Gelebte).
• Man erkennt sie am Symbolsystem, z. B.:
  – Legenden/Mythen (z. B. die Garagengründung eines Tech-Konzerns),
  – Rituale (Feiern, feierliche Verabschiedungen),
  – Corporate Identity (einheitliches Erscheinungsbild, Kleidungscode),
  – wahrgenommene Atmosphäre (Pünktlichkeit, Höflichkeit),
  – Kommunikationsstil (direkt/indirekt).

c) Hase GmbH – Teilproduktivitäten (Methode):
• Teilproduktivität = Output / Input je einzelnem Produktionsfaktor (rein mengenmäßig), z. B.:
  – Arbeitsproduktivität = Ausbringungsmenge / Arbeitsstunden,
  – Materialproduktivität = Ausbringungsmenge / Materialeinsatz,
  – Maschinenproduktivität = Ausbringungsmenge / Maschinenstunden.
• Vorgehen: für jeden Faktor Output/Input bilden, die Werte vergleichen und interpretieren; ergänzend die Wirtschaftlichkeit (Ertrag/Aufwand) heranziehen, da die Produktivität allein nichts über Geld/Gewinn aussagt.
  (Hinweis: Die konkreten Zahlen lagen in der Klausur als Tabelle/Bild vor und sind hier nicht verfügbar.)`,
  },
  {
    id: 'k-ss16-3',
    titel: 'SS 2016 · Aufgabe 3',
    kategorie: 'Altklausur SS 2016',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Was verstehen wir unter Kennzahlen? Ein Einsatzgebiet ist der „Betriebsvergleich". Wie lautet der englischsprachige Fachbegriff? Erläutern Sie, warum der Betriebsvergleich in der Praxis oft schlecht funktioniert. (8 P.)\n\nb) Die „Igel KG" hat einen Verschuldungsgrad von 1,5; Anlage- und Umlaufvermögen betragen je 250.000 €. Auf ihre Schulden zahlt sie 5 % Zinsen, der Jahresüberschuss beträgt 50.000 € bei 1 Mio. € Umsatz. Berechnen und beurteilen Sie Umsatzrentabilität, Eigenkapital- und Gesamtkapitalrentabilität. (9 P.)\n\nc) In was für Unternehmen gilt das Sprecherausschussgesetz? Wann wurde es erlassen? Geht es um die unternehmerische oder die arbeitsrechtliche Ebene der Mitbestimmung? (6 P.)',
    tipp: {
      konzept:
        'a) Kennzahlen verdichten Informationen; der Betriebsvergleich heißt Benchmarking. b) Aus dem Verschuldungsgrad ergibt sich die Kapitalstruktur. c) Das Sprecherausschussgesetz betrifft leitende Angestellte.',
      vorgehen:
        'a) Kennzahlen definieren, Benchmarking + Praxisproblem. b) GK = AV+UV; aus VG = 1,5 die Struktur; dann UR, EKR, GKR. c) Sprecherausschussgesetz einordnen.',
      syntax:
        'b) GK = 500.000, EK 200.000, FK 300.000. UR = 50.000/1 Mio = 5 %; EKR = 50.000/200.000 = 25 %; GKR = (50.000 + 15.000)/500.000 = 13 %. c) ab 10 leitenden Angestellten, 1989, arbeitsrechtliche Ebene, kein echtes Mitbestimmungsrecht.',
      fehler:
        'Die GKR braucht die FK-Zinsen im Zähler (nicht nur den JÜ). Benchmarking funktioniert nur ohne direkte Konkurrenz.',
    },
    loesung: `a) Kennzahlen / Betriebsvergleich:
• Kennzahlen = quantitative, verdichtete Größen, die Sachverhalte in messbarer, vergleichbarer Form abbilden und der Information, Steuerung und Kontrolle dienen.
• Betriebsvergleich (englisch): Benchmarking.
• Warum in der Praxis schlecht: Konkurrenten geben ihre Daten nicht/ungern preis; mangelnde Vergleichbarkeit (unterschiedliche Bilanzierung, Größe, Struktur, Stichtage); funktioniert gut nur dort, wo keine direkte Konkurrenz besteht.

b) Igel KG – Rechnung:
GK = AV + UV = 250.000 + 250.000 = 500.000 €.
Aus VG = FK/EK = 1,5 und EK + FK = 500.000:
  EK · (1 + 1,5) = 500.000 → EK = 200.000 €, FK = 300.000 €.

• Umsatzrentabilität = JÜ / Umsatz = 50.000 / 1.000.000 = 5 %
• Eigenkapitalrentabilität = JÜ / EK = 50.000 / 200.000 = 25 %
• Gesamtkapitalrentabilität = (JÜ + FK-Zinsen) / GK
    FK-Zinsen = 5 % × 300.000 = 15.000 €
    GKR = (50.000 + 15.000) / 500.000 = 65.000 / 500.000 = 13 %

Beurteilung: Es gilt EKR 25 % > GKR 13 % > FKZ 5 % → positiver Leverage-Effekt, gute Ertragslage. Die Umsatzrendite von 5 % ist solide.

c) Sprecherausschussgesetz:
• Gilt in Betrieben mit mindestens 10 leitenden Angestellten.
• Erlassen 1989.
• Es gehört zur ARBEITSRECHTLICHEN Ebene der Mitbestimmung – gewährt den leitenden Angestellten aber KEIN echtes Mitbestimmungsrecht, nur Information/Mitwirkung (Sprecherausschuss als Pendant zum Betriebsrat).`,
  },
  // ===================== SS 2017 =====================
  {
    id: 'k-ss17-1',
    titel: 'SS 2017 · Aufgabe 1',
    kategorie: 'Altklausur SS 2017',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was unterscheidet Betriebe und Haushalte grundsätzlich voneinander? Ist diese Unterscheidung immer gegeben? (3 P.)\n\nb) Was verstehen wir unter „Stakeholdern"? Nennen Sie vier besonders mächtige Stakeholder-Gruppen in Deutschland (mit Begründung). (10 P.)\n\nc) Was verstehen wir unter „Kammern"? Nennen Sie eine ihrer Aufgaben. (3 P.)',
    tipp: {
      konzept:
        'a) Betriebe decken Fremdbedarf, Haushalte Eigenbedarf. b) Stakeholder = Anspruchsgruppen mit Einfluss. c) Kammern = Körperschaften öffentlichen Rechts mit Pflichtmitgliedschaft.',
      vorgehen:
        'a) Unterschied erklären und an Mischformen denken. b) Vier mächtige Gruppen mit Begründung (= Sanktionsmacht). c) Kammern definieren + eine Aufgabe.',
      syntax:
        'b) Eigentümer (Kapitalabzug), Banken (Kreditkündigung), Arbeitnehmer/Gewerkschaften (Streik), Staat (Recht/Steuern). c) IHK/Handwerkskammer; Aufgabe z. B. Abnahme von Berufsabschlussprüfungen.',
      fehler:
        'Die Betrieb/Haushalt-Unterscheidung ist nicht immer eindeutig (Mischformen). Bei Stakeholdern die Begründung über die Sanktionsmacht liefern.',
    },
    loesung: `a) Betriebe vs. Haushalte:
• Betrieb = Ort der Leistungserstellung, deckt den FREMDbedarf (produziert für den Markt).
• Haushalt = Konsumeinheit, deckt den EIGENbedarf.
• Immer gegeben? Nein – es gibt Mischformen und fließende Übergänge (z. B. ein Selbstversorger-Hof, der auch verkauft; „Prosumer", die zugleich produzieren und konsumieren).

b) Stakeholder + vier mächtige Gruppen (DE):
• Stakeholder = Anspruchsgruppen, die Einfluss auf das Unternehmen nehmen oder von ihm betroffen sind.
• Mächtige Gruppen (Begründung = Sanktionsmöglichkeit):
  – Eigentümer/Kapitalgeber → können Kapital abziehen, Management abwählen.
  – Banken/Fremdkapitalgeber → können Kredite kündigen, Zinsen erhöhen.
  – Arbeitnehmer/Gewerkschaften → Streik, Mitbestimmung (in DE besonders stark).
  – Staat → Steuern, Auflagen, Genehmigungen; (alternativ Kunden → Kaufverweigerung).

c) Kammern:
• = Körperschaften öffentlichen Rechts mit Pflichtmitgliedschaft (z. B. IHK, Handwerkskammer); Selbstverwaltung der Wirtschaft.
• Aufgabe (eine): z. B. Abnahme der Berufsabschlussprüfungen (Ausbildung), Interessenvertretung, Beratung, Ausstellen von Bescheinigungen.`,
  },
  {
    id: 'k-ss17-2',
    titel: 'SS 2017 · Aufgabe 2',
    kategorie: 'Altklausur SS 2017',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Was ist ein Kaufmann „kraft Eintragung", was ein Kaufmann „kraft Rechtsform"? (4 P.)\n\nb) Was verstehen wir unter „Factoring"? Nennen Sie vier Kriterien, von denen die Kosten des Factorings abhängen. (6 P.)\n\nc) Die „Bertha KG" erwirtschaftete 2011 eine Eigenkapitalrendite von 18 %, wobei Eigen- und Fremdkapital sich die Waage hielten und 2 % Zinsen auf die Schulden gezahlt wurden. Ermitteln Sie zunächst die Gesamtkapitalrendite. Das Unternehmen möchte seine EKR (bei unverändertem FK-Zins und gegebener GKR) auf 42 % steigern – wie muss es seine Kapitalstruktur verändern? Was macht eine solche Rechnung unrealistisch? (12 P.)',
    tipp: {
      konzept:
        'a) Kannkaufmann (durch Eintragung) vs. Formkaufmann (durch Rechtsform). b) Die Factoring-Kosten hängen von Risiko und Aufwand ab. c) Über die Leverage-Formel lassen sich GKR und die nötige Kapitalstruktur bestimmen.',
      vorgehen:
        'a) Beide Kaufmannsbegriffe abgrenzen. b) Factoring definieren + vier Kostenkriterien. c) GKR aus der Leverage-Formel ([[FK|EK]] = 1), dann [[FK|EK]] für eine EKR von 42 %.',
      syntax:
        'a) § 2 (Eintragung) vs. § 6 (Rechtsform). c) 18 = GKR + (GKR−2)×1 → GKR = 10 %. Für 42 %: 42 = 10 + 8×[[FK|EK]] → [[FK|EK]] = 4.',
      fehler:
        '„hielten sich die Waage" → [[FK|EK]] = 1. Eine EKR von 42 % verlangt VG = 4 – unrealistisch, weil der FK-Zins dann nicht 2 % bliebe.',
    },
    loesung: `a) Kaufmann kraft Eintragung vs. kraft Rechtsform:
• Kraft Eintragung (§ 2 HGB, Kannkaufmann): Ein Kleingewerbetreibender wird durch FREIWILLIGE Eintragung ins Handelsregister zum Kaufmann.
• Kraft Rechtsform (§ 6 HGB, Formkaufmann): Handels-/Kapitalgesellschaften (AG, GmbH, OHG, KG) sind allein WEGEN ihrer Rechtsform Kaufmann – unabhängig von Art/Umfang des Geschäfts.

b) Factoring + Kostenkriterien:
• Factoring = Verkauf kurzfristiger Forderungen an einen Factor gegen sofortige Liquidität.
• Die Kosten/der Abschlag hängen ab von:
  1. Bonität der Schuldner (Ausfallrisiko/Delkredere),
  2. Höhe/Volumen der Forderungen,
  3. durchschnittliche Laufzeit bis zur Fälligkeit,
  4. Anzahl/Streuung der Forderungen (Bearbeitungsaufwand) bzw. übernommene Funktionen.

c) Bertha KG – Rechnung:
„Eigen- und Fremdkapital hielten sich die Waage" → FK/EK = 1.
Gesamtkapitalrendite über die Leverage-Formel:
  EKR = GKR + (GKR − FKZ) × FK/EK
  18  = GKR + (GKR − 2) × 1 = 2·GKR − 2
  2·GKR = 20 → GKR = 10 %

Für eine EKR von 42 % (bei FKZ 2 %, GKR 10 %):
  42 = 10 + (10 − 2) × FK/EK
  32 = 8 × FK/EK → FK/EK = 4
→ Der Verschuldungsgrad müsste von 1 auf 4 steigen (viermal so viel FK wie EK).

Warum unrealistisch: Eine so hohe Verschuldung ist extrem riskant; keine Bank gibt bei FK/EK = 4 das Fremdkapital noch zu unveränderten 2 % – der FK-Zins würde stark steigen; und die GKR bliebe bei so viel zusätzlichem Kapital nicht konstant bei 10 %. Die Annahmen „unveränderter FKZ und gegebene GKR" sind also nicht haltbar.`,
  },
  {
    id: 'k-ss17-3',
    titel: 'SS 2017 · Aufgabe 3',
    kategorie: 'Altklausur SS 2017',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Welche Arten von Subventionen kennen Sie? Warum ist Subjektsubventionierung (aus Sicht der Steuerzahler) besser als Objektsubventionierung? (4 P.)\n\nb) Grenzen Sie die Begriffe Unternehmensphilosophie, -kultur und Corporate Identity voneinander ab. (6 P.)\n\nc) Schildern Sie das Mitbestimmungsgesetz von 1976: erfasste Unternehmen, Sitzverhältnis sowie Zahl und Aufteilung der Aufsichtsratsmitglieder. Was wird daran besonders von Arbeitgeberseite kritisiert? (12 P.)',
    tipp: {
      konzept:
        'a) Objekt- vs. Subjektsubvention. b) Philosophie (geplant) vs. Kultur (gelebt) vs. Corporate Identity (Außenbild). c) Das MitbestG 1976 regelt eine fast paritätische Mitbestimmung.',
      vorgehen:
        'a) Beide Subventionsarten erklären, warum Subjekt besser ist. b) Die drei Begriffe abgrenzen. c) MitbestG 1976 nach Unternehmen, Sitzverhältnis, AR-Größe + Arbeitgeberkritik.',
      syntax:
        'a) Objekt = an ein Gut gebunden (ausnutzbar); Subjekt = an einen Empfänger (zielgenauer). c) > 2.000 AN, AR 1:1, aber Doppelstimme des Vorsitzenden, 12–20 Mitglieder.',
      fehler:
        'Das MitbestG 1976 ist „fast paritätisch" (Doppelstimme des AR-Vorsitzenden) – nicht echte Parität wie beim Montan-Gesetz.',
    },
    loesung: `a) Subventionen:
• Objektsubvention: an ein Gut/Produkt gebunden (z. B. Aufkauf/Stützung von Agrarprodukten) → leicht ausnutzbar, führt zu Überproduktion und ist teuer (Lagerung/Vernichtung).
• Subjektsubvention: an eine Person/einen Empfänger gebunden (z. B. Wohngeld) → zielgenauer.
• Aus Steuerzahlersicht besser, weil (1) der Mitteleinsatz zielgerichteter/effizienter ist und (2) keine Überproduktion und Marktverzerrung entsteht (kein „Aufkaufen und Vernichten").

b) Abgrenzung:
• Unternehmensphilosophie = grundlegende, GEPLANTE Wertvorstellungen/Selbstverständnis (Leitbild, normativ – „was wir sein wollen").
• Unternehmenskultur = tatsächlich GELEBTE Werte/Normen (gewachsen, oft ungeplant – „wie es wirklich ist").
• Corporate Identity = einheitliches Erscheinungsbild nach AUSSEN (Design, Kommunikation, Verhalten) – Ausdruck/Teil der Kultur.

c) Mitbestimmungsgesetz 1976:
• Erfasste Unternehmen: Kapitalgesellschaften mit mehr als 2.000 Beschäftigten.
• Sitzverhältnis: AR „fast paritätisch" 1 : 1 (Anteilseigner : Arbeitnehmer), ABER bei Stimmengleichheit hat der AR-Vorsitzende (von der Anteilseignerseite) eine Doppelstimme.
• Zahl/Aufteilung: je nach Größe 12 bis 20 Mitglieder, je zur Hälfte Anteilseigner- und Arbeitnehmervertreter (darunter Gewerkschaftsvertreter).
• Arbeitgeberkritik: Die faktische Parität greife in das Eigentumsrecht ein; Entscheidungen würden verlangsamt; Vermischung von Kontrollorgan und betroffenen Arbeitnehmern.`,
  },
  // ===================== SS 2018 =====================
  {
    id: 'k-ss18-1',
    titel: 'SS 2018 · Aufgabe 1',
    kategorie: 'Altklausur SS 2018',
    schwierigkeit: 'einfach',
    aufgabeText:
      'a) Was bildet der DAX ab? (3 P.)\n\nb) Was verstehen wir unter „Produktivität"? Geben Sie ein Beispiel und erläutern Sie, warum die Produktivität nur eine eingeschränkte Bedeutung hat. (6 P.)\n\nc) Was verstehen wir unter einem konglomeraten Unternehmenszusammenschluss? Nennen Sie ein Beispiel. Was spricht dafür, was dagegen? (8 P.)',
    tipp: {
      konzept:
        'a) Der DAX ist der deutsche Leitindex. b) Produktivität = [[Output|Input]] (rein mengenmäßig). c) Konglomerat = branchenfremder Zusammenschluss.',
      vorgehen:
        'a) DAX erklären. b) Produktivität definieren, Beispiel, Grenzen. c) Konglomerat + Beispiel + Pro/Contra.',
      syntax:
        'a) DAX = 40 größte börsennotierte dt. Unternehmen. b) z. B. 20 Stück/Std.; rein mengenmäßig. c) dafür Risikostreuung, dagegen keine Synergien/keine Kernkompetenz.',
      fehler:
        'Der DAX hat 40 Werte (seit 2021, nicht 30). Produktivität sagt nichts über Geld/Gewinn aus.',
    },
    loesung: `a) DAX:
• Deutscher Aktienindex – er bildet die 40 größten/umsatzstärksten börsennotierten deutschen Unternehmen ab (Leitindex; repräsentiert das Eigenkapital und die erwarteten künftigen Gewinne).

b) Produktivität:
• Produktivität = Output / Input (rein mengenmäßig), z. B. 20 Stück pro Arbeitsstunde.
• Eingeschränkte Bedeutung: Sie ist rein MENGENmäßig und sagt nichts über Geld, Preise, Kosten oder Gewinn aus; meist lassen sich nur Teilfaktoren (Arbeit, Material …) getrennt betrachten. Über die Wirtschaftlichkeit/Rentabilität sagt sie nichts.

c) Konglomerater Zusammenschluss:
• = Zusammenschluss branchenfremder Unternehmen. Beispiel: Autohersteller + Bäckerei (oder Currywurststand).
• Dafür: Risikostreuung (Diversifikation) – nicht alles hängt an einer Branche; sinnvoll v. a. bei Familienunternehmen.
• Dagegen: keine Synergien/keine gemeinsame Kernkompetenz, schwer zu führen; an der Börse oft „Konglomeratsabschlag", weil Anleger selbst diversifizieren können.`,
  },
  {
    id: 'k-ss18-2',
    titel: 'SS 2018 · Aufgabe 2',
    kategorie: 'Altklausur SS 2018',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Nach welcher grundsätzlichen Logik ist die Aktivseite einer Bilanz gegliedert? Warum stehen Rückstellungen auf der Passivseite – und wo dort genau? (6 P.)\n\nb) Welches sind die vier Existenzbedingungen für Unternehmen? Erläutern Sie eine davon. (6 P.)\n\nc) Diskutieren Sie drei grundsätzliche Möglichkeiten, wie ein Unternehmen seine Wertschätzung gegenüber Mitarbeitern ausdrücken kann, um sie zu motivieren. (6 P.)',
    tipp: {
      konzept:
        'a) Die Aktivseite ist nach Fristigkeit gegliedert; Rückstellungen sind ungewisse Verbindlichkeiten. b) Vier Existenzbedingungen. c) Wertschätzung wird auf mehrere Arten ausgedrückt.',
      vorgehen:
        'a) Gliederungslogik nennen, Rückstellungen einordnen. b) Vier Existenzbedingungen, eine erläutern. c) Drei Möglichkeiten der Wertschätzung.',
      syntax:
        'a) Aktivseite: AV (langfristig) → UV (kurzfristig) → RAP. Rückstellungen = Passivseite, zwischen EK und Verbindlichkeiten. b) Rentabilität, Liquidität, Wachstum, Planbarkeit. c) Lob, materielle Anreize, Verantwortung/Freiräume.',
      fehler:
        'Rückstellungen (ungewiss) sind keine normalen Verbindlichkeiten. Geld als Wertschätzung hat einen Gewöhnungseffekt.',
    },
    loesung: `a) Gliederung Aktivseite + Rückstellungen:
• Die Aktivseite ist von oben nach unten nach STEIGENDER Liquidierbarkeit (fallender Fristigkeit) gegliedert: zuerst Anlagevermögen (langfristig gebunden), dann Umlaufvermögen (kurzfristig), schließlich Rechnungsabgrenzungsposten.
• Rückstellungen stehen auf der PASSIVseite (Mittelherkunft), zwischen Eigenkapital und Verbindlichkeiten. Grund: Sie sind UNGEWISSE Verbindlichkeiten (Höhe/Zeitpunkt noch unsicher) und haben damit Fremdkapitalcharakter.

b) Vier Existenzbedingungen (eine erläutert):
• Rentabilität, Liquidität, Wachstum, Planbarkeit.
• Liquidität = Zahlungsfähigkeit: Ein Unternehmen muss seine fälligen Verbindlichkeiten jederzeit begleichen können. Ist es nicht mehr zahlungsfähig, droht die Insolvenz – „nicht alles, aber ohne Liquidität ist alles nichts".

c) Drei Möglichkeiten, Wertschätzung auszudrücken:
• Lob/Anerkennung (immateriell, sehr wirksam und günstig).
• Materielle Anreize: Gehaltserhöhung, Prämie, Dienstwagen, Sachbonus – Achtung: Gewöhnungseffekt, Geld motiviert nur kurzfristig.
• Verantwortung und Freiräume geben (Vertrauen, Selbstverwirklichung, Entwicklungsmöglichkeiten) – nachhaltig motivierend.`,
  },
  {
    id: 'k-ss18-3',
    titel: 'SS 2018 · Aufgabe 3',
    kategorie: 'Altklausur SS 2018',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Die „Habenichts GmbH" hatte 2017 bei einem Gesamtvermögen von 120.000 € doppelt so viel Eigenkapital wie Schulden. Der Umsatz betrug 1 Mio. €, für Fremdkapital wurden 5.000 € Zinsen an einen Kredithai gezahlt. Der Kapitalgewinn belief sich auf 30.000 €. Beurteilen Sie die Rentabilität: Ermitteln Sie zunächst vier Kennziffern und interpretieren Sie sie (im Vergleich und absolut). Erscheint Ihnen der Verschuldungsgrad als angemessen? (15 P.)\n\nb) Schildern Sie die arbeitsrechtliche und unternehmerische Mitbestimmung bei einer großen Kommanditgesellschaft des Lebensmitteleinzelhandels sowie deren Haftungsregeln. (10 P.)',
    tipp: {
      konzept:
        'a) Aus Kapitalgewinn und FK-Zinsen ergeben sich Jahresüberschuss und Rentabilitäten. b) Eine KG ist eine Personengesellschaft – grundsätzlich keine unternehmerische Mitbestimmung.',
      vorgehen:
        'a) EK/FK aus „doppelt so viel EK" bestimmen; JÜ = Kapitalgewinn − FK-Zinsen; vier Kennzahlen + VG-Bewertung. b) ARM/UMB und die Haftung der KG schildern.',
      syntax:
        'a) EK 80.000, FK 40.000; JÜ = 30.000 − 5.000 = 25.000; GKR 25 %, EKR 31,25 %, UR 2,5 %, VG 0,5, FK-Zins 12,5 %. b) Komplementär haftet voll, Kommanditist bis Einlage; UMB nur als GmbH & Co. KG > 2.000 AN.',
      fehler:
        'GKR 25 % > FK-Zins 12,5 % → positiver Leverage (mehr FK würde die EKR steigern), aber 12,5 % („Kredithai") ist teuer. Eine reine KG hat keine unternehmerische Mitbestimmung.',
    },
    loesung: `a) Habenichts GmbH – Rechnung:
Gesamtvermögen 120.000 €, EK = 2 × FK → EK 80.000 €, FK 40.000 €.
Kapitalgewinn 30.000 €, FK-Zinsen 5.000 €, Umsatz 1.000.000 €.

• Jahresüberschuss = Kapitalgewinn − FK-Zinsen = 30.000 − 5.000 = 25.000 €
• Gesamtkapitalrentabilität = Kapitalgewinn / GK = 30.000 / 120.000 = 25 %
• Eigenkapitalrentabilität = JÜ / EK = 25.000 / 80.000 = 31,25 %
• Umsatzrentabilität = JÜ / Umsatz = 25.000 / 1.000.000 = 2,5 %
• Verschuldungsgrad = FK / EK = 40.000 / 80.000 = 0,5
• FK-Zinssatz = FK-Zinsen / FK = 5.000 / 40.000 = 12,5 %
  Kontrolle (Leverage): EKR = 25 + (25 − 12,5) × 0,5 = 31,25 % ✓

Interpretation: Sehr gute Rentabilität (EKR 31,25 % > GKR 25 % > FKZ 12,5 % → positiver Leverage). Die Umsatzrendite von 2,5 % ist niedrig, bei hoher Kapitalrendite aber unkritisch.

Verschuldungsgrad angemessen? VG = 0,5 ist sehr niedrig (konservativ). Da die GKR (25 %) deutlich über dem FK-Zins (12,5 %) liegt, würde MEHR Fremdkapital die EKR weiter steigern (positiver Hebel). ABER der FK-Zins von 12,5 % ist sehr teuer („Kredithai") und das Risiko steigt → eine moderate Erhöhung wäre vertretbar, aber nicht zu diesem Zinssatz.

b) Mitbestimmung + Haftung bei großer KG:
• Haftung: der/die Komplementär(e) haften unbeschränkt und persönlich (auch mit Privatvermögen), die Kommanditisten nur bis zur Höhe ihrer Einlage.
• Arbeitsrechtliche Mitbestimmung (BetrVG): greift wie bei jedem Betrieb – ab 5 Arbeitnehmern kann ein Betriebsrat gewählt werden.
• Unternehmerische Mitbestimmung: Die KG ist eine PERSONENgesellschaft → grundsätzlich KEINE unternehmerische Mitbestimmung. Ausnahme: Ist der Komplementär eine Kapitalgesellschaft (GmbH & Co. KG) und hat der Konzern > 2.000 Beschäftigte, kann das MitbestG 1976 (paritätischer Aufsichtsrat) dennoch greifen.`,
  },
  // ===================== SS 2019 =====================
  {
    id: 'k-ss19-1',
    titel: 'SS 2019 · Aufgabe 1',
    kategorie: 'Altklausur SS 2019',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Warum ermitteln Unternehmer in der Regel ihren Gewinn und nicht ihre Produktivität oder Wirtschaftlichkeit (mit kurzer Begründung)? (6 P.)\n\nb) Erläutern Sie kurz die drei Kennzeichen öffentlicher Betriebe nach Gutenberg. (6 P.)\n\nc) Was verstehen wir unter einer „Fusion"? Welche drei Formen von Fusionen kann es grundsätzlich geben? (5 P.)',
    tipp: {
      konzept:
        'a) Der Gewinn ist die konkrete, absolute Geldgröße. b) Öffentliche Betriebe haben nach Gutenberg drei Kennzeichen. c) Fusion = vollständiges Verschmelzen.',
      vorgehen:
        'a) Produktivität/Wirtschaftlichkeit/Gewinn vergleichen. b) Drei Gutenberg-Kennzeichen nennen. c) Fusion definieren + drei Richtungen.',
      syntax:
        'b) Organprinzip, zentrale Planerfüllung, Gemeineigentum. c) Richtungen: horizontal, vertikal, konglomerat/lateral.',
      fehler:
        'Produktivität ist mengenmäßig, Wirtschaftlichkeit nur ein Verhältnis – nur der Gewinn nennt den absoluten Betrag.',
    },
    loesung: `a) Warum Gewinn statt Produktivität/Wirtschaftlichkeit:
• Produktivität ist rein mengenmäßig (kein Geldbezug). Die Wirtschaftlichkeit (Ertrag/Aufwand) zeigt zwar OB man wirtschaftlich arbeitet, aber nicht WIE VIEL.
• Der Gewinn (= Ertrag − Aufwand) ist eine absolute Geldgröße: direkt aussagekräftig fürs Ergebnis und Grundlage für Rentabilität, Ausschüttung und Steuern. Deshalb steht er im Vordergrund.

b) Drei Kennzeichen öffentlicher Betriebe (Gutenberg):
• Organprinzip: Der Betrieb ist Organ/Teil eines übergeordneten Ganzen und erfüllt eine zentral vorgegebene Aufgabe (z. B. eine Hochschule des Landes).
• Prinzip der zentralen Planerfüllung: Die Aufgabe/der Plan wird „von oben" vorgegeben.
• Gemeineigentum: Der Betrieb gehört der Allgemeinheit (nicht Privaten).

c) Fusion:
• = vollständiges Verschmelzen mehrerer Unternehmen zu einer rechtlichen Einheit (höchste Bindungsintensität).
• Drei Formen (nach Richtung): horizontal (gleiche Wirtschaftsstufe), vertikal (vor-/nachgelagerte Stufe), konglomerat/lateral (branchenfremd).`,
  },
  {
    id: 'k-ss19-2',
    titel: 'SS 2019 · Aufgabe 2',
    kategorie: 'Altklausur SS 2019',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Nennen Sie je zwei Aspekte, die für die Aufnahme eines weiteren Partners in Ihre neugegründete OHG sprechen, und zwei, die stattdessen für die Anstellung eines Mitarbeiters sprechen. (4 P.)\n\nb) Erläutern Sie kurz zwei Vorteile und einen Nachteil, den GmbHs gegenüber AGs haben. (6 P.)\n\nc) Was verstehen wir unter „Kapital", was unter „Liquidität"? (4 P.)\n\nd) Wie wirkt eine Fremdfinanzierung auf die Rentabilität des Eigenkapitals? Warum ist das so (mit Begründung)? (6 P.)',
    tipp: {
      konzept:
        'a) Ein Partner bringt Kapital/Haftung mit, kostet aber nur bei Gewinn; ein Mitarbeiter kostet immer. b) GmbH vs. AG. c) Kapital (Mittelherkunft) vs. Liquidität (Zahlungsfähigkeit). d) Leverage-Effekt.',
      vorgehen:
        'a) Je 2 Argumente. b) 2 Vorteile + 1 Nachteil. c) Beide Begriffe definieren. d) Wirkung der Fremdfinanzierung erklären.',
      syntax:
        'b) Vorteile GmbH: weniger Kapital (25.000 €), weniger Publizität; Nachteil: schwererer Ein-/Ausstieg. d) EKR = GKR + (GKR − FKZ) × [[FK|EK]].',
      fehler:
        'Fremdfinanzierung steigert die EKR nur, solange GKR > FK-Zins (sonst negativ). Kapital und Liquidität nicht gleichsetzen.',
    },
    loesung: `a) Partner vs. Mitarbeiter in der OHG:
• Für einen Partner: bringt zusätzliches Eigenkapital und Haftung mit, teilt das Risiko, kostet nur bei Gewinn (Gewinnbeteiligung), ist als Mitunternehmer hoch engagiert, bringt Know-how/Netzwerk.
• Für einen Mitarbeiter: hat keine Mitsprache und keinen Gewinnanteil, ist leichter kündbar/flexibler, klare Weisungsbefugnis; aber er kostet Lohn von Anfang an – unabhängig vom Gewinn.

b) GmbH gegenüber AG:
• Vorteile: geringeres Mindestkapital (25.000 € statt 50.000 €); weniger Formvorschriften/Publizität, engere Gesellschafterstruktur und mehr Kontrolle (kein zwingender Aufsichtsrat unter den Schwellen).
• Nachteil: schwererer Ein- und Ausstieg (Anteile nicht börslich handelbar, Übertragung notariell) und damit schwierigere Kapitalbeschaffung am Kapitalmarkt.

c) Kapital vs. Liquidität:
• Kapital = Mittelherkunft (Passivseite): Eigen- + Fremdkapital, also das dem Unternehmen zur Verfügung stehende Finanzierungsvolumen.
• Liquidität = Zahlungsfähigkeit: die Fähigkeit, fällige Verbindlichkeiten fristgerecht zu begleichen.

d) Fremdfinanzierung → EK-Rentabilität (Leverage-Effekt):
• Solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt (GKR > FKZ), steigert zusätzliches Fremdkapital die EK-Rentabilität:
    EKR = GKR + (GKR − FKZ) × FK/EK
• Begründung: Das Fremdkapital „verdient" im Unternehmen mehr (GKR), als es kostet (FKZ); dieser Überschuss kommt dem Eigenkapital zugute. Liegt GKR unter dem FKZ, kehrt sich der Effekt um (negativer Leverage) – dann drückt Verschuldung die EKR.`,
  },
  {
    id: 'k-ss19-3',
    titel: 'SS 2019 · Aufgabe 3',
    kategorie: 'Altklausur SS 2019',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Der VW-Konzern erzielte 2017 bei 230 Mrd. € Umsatz einen Jahresüberschuss von 14 Mrd. €. Das Gesamtvermögen bestand aus Anlagevermögen (262 Mrd. €) und Umlaufvermögen (160 Mrd. €). Auf der Passivseite finden sich langfristige (153 Mrd. €) und kurzfristige (160 Mrd. €) Schulden sowie (zu berechnendes) Eigenkapital. Ermitteln und beurteilen Sie Eigenkapitalquote, Umsatzrentabilität, Eigenkapitalrendite, Anlagenintensität und Anlagendeckung II. (15 P.)\n\nb) Was verstehen wir unter der „arbeitsrechtlichen" Ebene der Mitbestimmung? In welchem Gesetz (mit Jahreszahl) ist sie aktuell geregelt? Welche drei Instanzen üben sie aus? Ist diese Form international üblich? (8 P.)',
    tipp: {
      konzept:
        'a) Aus der Bilanz werden EKQ, UR, EKR, Anlagenintensität und Anlagendeckung II berechnet. b) Die arbeitsrechtliche Mitbestimmung ist im BetrVG geregelt.',
      vorgehen:
        'a) Erst EK = GK − FK; dann die fünf Kennzahlen. b) Gesetz + Jahr + drei Instanzen + international?',
      syntax:
        'a) GK 422, FK 313, EK 109. EKQ 25,8 %, UR 6,1 %, EKR 12,8 %, Anlagenintensität 62,1 %, Anlagendeckung II 100 %. b) BetrVG 1972; Betriebsrat, Betriebsversammlung, Einigungsstelle.',
      fehler:
        'Anlagendeckung II = (EK + langfr. FK)/AV – das langfristige FK mitnehmen! Die starke dt. Mitbestimmung ist international unüblich.',
    },
    loesung: `a) VW-Konzern – Rechnung:
GK = AV + UV = 262 + 160 = 422 Mrd. €
FK = 153 + 160 = 313 Mrd. €  →  EK = 422 − 313 = 109 Mrd. €

• Eigenkapitalquote = EK/GK = 109/422 = 25,8 %  → solide.
• Umsatzrentabilität = JÜ/Umsatz = 14/230 = 6,1 %  → solide (über 5 %).
• Eigenkapitalrendite = JÜ/EK = 14/109 = 12,8 %  → ordentlich.
• Anlagenintensität = AV/GK = 262/422 = 62,1 %  → recht hoch (viel langfristig gebundenes Kapital).
• Anlagendeckung II = (EK + langfr. FK)/AV = (109 + 153)/262 = 100 %  → genau gedeckt, goldene Bilanzregel (knapp) erfüllt.

Beurteilung: Finanziell stabil (EKQ ~26 %, Anlagevermögen vollständig langfristig finanziert), ordentliche Rendite; die hohe Anlagenintensität ist für die Autoindustrie typisch.

b) Arbeitsrechtliche Mitbestimmung:
• = betriebliche Mitbestimmung auf Betriebsebene.
• Geregelt im Betriebsverfassungsgesetz (BetrVG) von 1972 (Erstfassung 1952).
• Drei Instanzen: Betriebsrat, Betriebsversammlung und Einigungsstelle (Gegenüber: der Arbeitgeber).
• International unüblich: Die stark ausgeprägte deutsche Mitbestimmung ist eine „deutsche Spielart" und in den meisten Ländern so nicht vorhanden.`,
  },
  // ===================== SS 2020 =====================
  {
    id: 'k-ss20-1',
    titel: 'SS 2020 · Aufgabe 1',
    kategorie: 'Altklausur SS 2020',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Wovon hängt der Preis für Gold ab? Warum wird Gold in vielen Medien so herausgehoben? Nennen Sie mindestens zwei Gründe, warum eine Investition in Gold problematisch ist. (6 P.)\n\nb) Was verstehen wir unter Objekt-, was unter Subjektsubventionen? Aus welchen zwei Gründen ist die Subjektsubventionierung aus Steuerzahlersicht die bessere Variante? (6 P.)\n\nc) Was unterscheidet „Produktionsgüter" von „Konsumgütern"? Was verstehen wir unter „Verbrauchsgütern"? Nennen Sie zu Letzteren ein Beispiel. (6 P.)',
    tipp: {
      konzept:
        'a) Der Goldpreis folgt Angebot/Nachfrage; Gold gilt als Krisen-/Inflationsschutz. b) Objekt- vs. Subjektsubvention. c) Güterarten nach ihrer Verwendung.',
      vorgehen:
        'a) Preisbildung, Sonderstellung, zwei Nachteile. b) Beide Subventionen + warum Subjekt besser. c) Begriffe abgrenzen + Beispiel für ein Verbrauchsgut.',
      syntax:
        'a) Gold wirft keine Erträge ab („bekommt keine Kinder"), verursacht Lagerkosten. c) Produktions- vs. Konsumgüter (nebengeordnet); Verbrauchsgut = einmalig verbraucht (z. B. Lebensmittel).',
      fehler:
        'Produktions- und Konsumgüter sind NEBENgeordnet (nach Verwendung), nicht über-/untergeordnet. Gold bringt keine laufenden Erträge.',
    },
    loesung: `a) Gold:
• Der Preis hängt – wie bei allem – von Angebot und Nachfrage ab.
• Herausgehobene Stellung: Gold gilt als Krisen- und Inflationsschutz („Fluchtwährung"), hat hohen emotionalen/historischen Wert; in Krisen/bei Inflation steigt die Nachfrage und damit der Preis.
• Problematisch (mind. zwei Gründe): Gold wirft keine laufenden Erträge ab (keine Zinsen/Dividenden – „bekommt keine Kinder"); es verursacht Lager-/Sicherungskosten; es ist spekulativ; es gibt ertragbringende Alternativen (Aktien, Immobilien).

b) Subventionen:
• Objektsubvention: an ein Gut/Produkt gebunden (z. B. staatlicher Aufkauf von Agrarüberschüssen).
• Subjektsubvention: an eine Person/einen Empfänger gebunden (z. B. Wohngeld).
• Subjektsubvention besser, weil (1) der Mitteleinsatz zielgenauer/effizienter ist und (2) keine Überproduktion entsteht – beim Objekt-Aufkauf musste der Staat überschüssige Mengen sogar aufkaufen UND vernichten (sehr teuer, ausnutzbar).

c) Güterarten:
• Produktionsgüter dienen der Herstellung anderer Güter (Investitions-/Vorleistungsgüter), Konsumgüter dienen direkt der Bedürfnisbefriedigung der Endverbraucher. Beide sind NEBENgeordnet (Unterscheidung nach Verwendung) – nicht über-/untergeordnet.
• Verbrauchsgüter sind eine Untergruppe der Konsumgüter: Sie werden bei einmaligem Gebrauch verbraucht. Beispiel: Lebensmittel/Kaffee (im Gegensatz zu Gebrauchsgütern wie einem Auto, das mehrfach genutzt wird).`,
  },
  {
    id: 'k-ss20-2',
    titel: 'SS 2020 · Aufgabe 2',
    kategorie: 'Altklausur SS 2020',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was verstehen wir unter einem „konglomeraten" (lateralen) Unternehmenszusammenschluss? Nennen Sie ein fiktives Beispiel. Für welche Eigentümerstruktur eignet er sich tendenziell, für welche eher weniger? (7 P.)\n\nb) Was verstehen wir unter einer Rechtsform? Welche Rechtsform würden Sie einem ausländischen Investor empfehlen, der weder unternehmerische Mitbestimmung noch eine Haftung mit seinem Privatvermögen möchte? Welche notwendige Bedingung müsste er erfüllen? (6 P.)\n\nc) Erläutern Sie kurz die vier „Kennzeichen eines Zieles" an einem Beispiel. (8 P.)',
    tipp: {
      konzept:
        'a) Konglomerat = branchenfremd, Motiv Risikostreuung. b) Gesucht ist eine Rechtsform ohne Privathaftung und ohne unternehmerische Mitbestimmung. c) Ein Ziel hat vier Kennzeichen.',
      vorgehen:
        'a) Konglomerat + Beispiel + passende/unpassende Eigentümerstruktur. b) Rechtsform empfehlen + notwendige Bedingung. c) Vier Kennzeichen am Beispiel.',
      syntax:
        'a) eher Familienunternehmen (Risikostreuung), weniger Shareholder-Value. b) GmbH (Haftung beschränkt, UMB erst ab Schwellen), Bedingung: 25.000 € Stammkapital. c) Inhalt, Ausmaß, Zeit, Geltungsbereich.',
      fehler:
        'Eine KG passt hier nicht (braucht einen voll haftenden Komplementär). Die unternehmerische Mitbestimmung greift erst ab 500/2.000 AN.',
    },
    loesung: `a) Konglomerater Zusammenschluss:
• = Zusammenschluss branchenfremder Unternehmen; Motiv: Risikostreuung. Fiktives Beispiel: Softwarefirma + Brauerei.
• Eignet sich tendenziell für FAMILIENunternehmen / Eigentümer mit Fokus auf Risikostreuung und langfristigen Vermögenserhalt.
• Weniger geeignet für kapitalmarktorientierte Eigentümer (Shareholder-Value): Anleger können selbst diversifizieren und bevorzugen fokussierte Unternehmen → an der Börse droht ein „Konglomeratsabschlag".

b) Rechtsform + Empfehlung:
• Rechtsform = rechtlicher Rahmen / rechtliche Organisation eines Unternehmens.
• Empfehlung: GmbH (oder UG) – die Haftung ist auf das Gesellschaftsvermögen beschränkt (keine Privathaftung), und die unternehmerische Mitbestimmung greift erst ab 500/2.000 Beschäftigten.
• Notwendige Bedingung: Aufbringen des Mindeststammkapitals von 25.000 € (bei der UG genügt 1 €) und Bleiben unter den Mitbestimmungs-Schwellen.
  (Eine KG wäre weniger passend: dort bräuchte es einen unbeschränkt haftenden Komplementär.)

c) Vier Kennzeichen eines Zieles (Beispiel „Kosten senken"):
• Zielinhalt: welche Größe wird beeinflusst? (z. B. Materialkosten)
• Zielausmaß: wie viel? (z. B. −10 %)
• Zeitlicher Bezug: bis wann? (z. B. bis Jahresende)
• Sachlicher Geltungsbereich: für wen/wo? (z. B. im Werk A)`,
  },
  {
    id: 'k-ss20-3',
    titel: 'SS 2020 · Aufgabe 3',
    kategorie: 'Altklausur SS 2020',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Sammelfrage: Wofür war die „Deutsche Lufthansa AG" ein geglücktes Beispiel? Was verstehen wir unter „Insolvenzverschleppung"? Warum versteht sich die BWL als „Rationalitätslehre"? (6 P.)\n\nb) Die Eckkneipe „Pauls Bierschwemme" hat 2019: Kassen-/Bankguthaben 5.000 €, Umsatz 0,5 Mio. €, durchschnittlich 5 % FK-Zins (FK zu 70 % langfristig), Eigenkapital 50.000 € bei einer Anlagendeckung I von 100 %, Gesamtkapitalrentabilität 10 %, Eigenkapitalrentabilität 20 %, kurzfristige Forderungen 25.000 €. Berechnen Sie Verschuldungsgrad und Jahresüberschuss. Ermitteln und beurteilen Sie dann Liquidität 2. Grades, Anlagenintensität und Umsatzrentabilität. Würden Sie den Verschuldungsgrad verändern? (15 P.)',
    tipp: {
      konzept:
        'a) Lufthansa = geglückte Privatisierung; Insolvenzverschleppung = verspäteter Insolvenzantrag. b) Über die Leverage-Formel lassen sich VG und Gesamtkapital bestimmen.',
      vorgehen:
        'a) Drei Begriffe knapp beantworten. b) JÜ = EKR×EK; VG aus der Leverage-Formel; daraus GK und FK; Anlagendeckung I → AV; dann Liquidität 2. Grades, Anlagenintensität, UR.',
      syntax:
        'b) JÜ = 10.000; 20 = 10 + (10−5)×FK/50.000 → FK = 100.000, VG = 2, GK = 150.000. AV = EK = 50.000. Liq. 2. Grades = [[5.000 + 25.000|30.000]] = 100 %; Anlagenintensität 33,3 %; UR 2 %.',
      fehler:
        'Anlagendeckung I = 100 % bedeutet AV = EK. Der VG (2) ist über die Leverage-Formel zu bestimmen, nicht direkt gegeben.',
    },
    loesung: `a) Sammelfrage:
• Lufthansa: ein geglücktes Beispiel für eine erfolgreiche PRIVATISIERUNG (vom Staatsunternehmen zur privaten AG). In der Corona-Krise stieg der Staat über den Wirtschaftsstabilisierungsfonds vorübergehend wieder ein (~20 %) und ist inzwischen wieder ausgestiegen.
• Insolvenzverschleppung: das verspätete oder unterlassene Stellen des Insolvenzantrags trotz Zahlungsunfähigkeit/Überschuldung (strafbar) – schädigt die Gläubiger (oft, um noch Vermögen beiseitezuschaffen).
• BWL als Rationalitätslehre: Man wirtschaftet mit (oft fremdem) Kapital → Entscheidungen müssen rational/begründet und nicht emotional getroffen werden.

b) Pauls Bierschwemme – Rechnung:
Gegeben: Guthaben 5.000 €, Umsatz 500.000 €, FKZ 5 %, FK 70 % langfristig, EK 50.000 €, Anlagendeckung I = 100 %, GKR 10 %, EKR 20 %, kurzfr. Forderungen 25.000 €.

Jahresüberschuss = EKR × EK = 20 % × 50.000 = 10.000 €.

Verschuldungsgrad über die Leverage-Formel:
  EKR = GKR + (GKR − FKZ) × FK/EK
  20  = 10 + (10 − 5) × FK/50.000
  10 = 5 × FK/50.000 → FK/50.000 = 2 → FK = 100.000 €
  → Verschuldungsgrad VG = FK/EK = 2.
  GK = EK + FK = 150.000 €.

Hilfsgrößen:
• Anlagendeckung I = EK/AV = 100 % → AV = EK = 50.000 €.
• FK kurzfristig = 30 % × 100.000 = 30.000 € (langfristig 70.000 €).

• Liquidität 2. Grades = (Guthaben + kurzfr. Forderungen) / kurzfr. FK
    = (5.000 + 25.000) / 30.000 = 30.000 / 30.000 = 100 %  → gut (Soll ~100 %).
• Anlagenintensität = AV/GK = 50.000 / 150.000 = 33,3 %  → niedrig/flexibel.
• Umsatzrentabilität = JÜ/Umsatz = 10.000 / 500.000 = 2 %  → niedrig.

Verschuldungsgrad verändern? Der Leverage ist positiv (GKR 10 % > FKZ 5 %), d. h. mehr Fremdkapital würde die EKR weiter erhöhen. ABER das FK stammt von einem „Kredithai" und ein VG von 2 ist bereits beachtlich → eine weitere Erhöhung steigert das Risiko deutlich. Tendenz: nur vorsichtig erhöhen, besser günstigeres FK suchen.`,
  },
  // ===================== SS 2021 =====================
  {
    id: 'k-ss21-1',
    titel: 'SS 2021 · Aufgabe 1',
    kategorie: 'Altklausur SS 2021',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Erläutern Sie kurz vier Gründe für die abnehmende Zahl gewerkschaftlich gebundener Arbeitnehmer. (8 P.)\n\nb) Was verstehen wir im Rahmen der Bilanzierung unter „Humanvermögen"? Warum ist dessen HGB-Bilanzierung ein Problem? (4 P.)\n\nc) Warum gibt es so wenige große Einzelunternehmen? In welche Rechtsform würden Sie Ihr Einzelunternehmen umwandeln, wenn es erfolgreich wächst, Sie aber einziger Eigentümer bleiben wollen? Nennen Sie einen Nachteil Ihrer Entscheidung. (6 P.)',
    tipp: {
      konzept:
        'a) Der gewerkschaftliche Organisationsgrad sinkt. b) Humanvermögen = Wert der Mitarbeiter, nach HGB nicht aktivierbar. c) Der Einzelunternehmer haftet privat → Umwandlung in eine GmbH.',
      vorgehen:
        'a) Vier Gründe. b) Humanvermögen definieren + HGB-Problem. c) Warum wenig große EU + Umwandlung (Alleineigentümer bleiben) + ein Nachteil.',
      syntax:
        'a) Strukturwandel, Trittbrettfahrer, Wertewandel, Demografie. c) Ein-Personen-GmbH; Nachteil: 25.000 € Stammkapital, mehr Formalia/Publizität.',
      fehler:
        'Humanvermögen ist nach HGB nicht aktivierbar (nicht messbar, Vorsichtsprinzip). Eine Ein-Personen-GmbH ist zulässig (du bleibst Alleineigentümer).',
    },
    loesung: `a) Vier Gründe für sinkende Gewerkschaftsbindung:
• Struktur-/Branchenwandel: weniger Industrie-Großbetriebe (klassische Hochburgen), mehr Dienstleistung (geringere Organisationsneigung).
• Trittbrettfahrer-Problem: Tarifabschlüsse gelten faktisch auch für Nichtmitglieder → wenig Anreiz, beizutreten.
• Wertewandel/Individualisierung: weniger Bindung an Kollektive, sinkendes Solidaritätsbewusstsein.
• Demografie: ältere organisierte Mitglieder gehen in Rente, weniger junge treten ein (dazu atypische Beschäftigung: Teilzeit, Leiharbeit).

b) Humanvermögen:
• = der Wert der Mitarbeiter (Wissen, Fähigkeiten, Motivation, eingespieltes Team) und des Kundenstamms.
• HGB-Problem: Es lässt sich nicht zuverlässig/objektiv bewerten und wurde nicht entgeltlich „erworben" → es darf nach HGB nicht aktiviert werden (Vorsichtsprinzip; selbst geschaffene immaterielle Werte sind nicht bilanzierungsfähig). Das Unternehmen erscheint dadurch in der Bilanz „ärmer", als es ist.

c) Wenige große Einzelunternehmen + Umwandlung:
• Grund: Der Einzelunternehmer haftet unbeschränkt mit seinem gesamten PRIVATvermögen – mit der Größe steigt das Risiko enorm; zudem ist die Kapitalbeschaffung begrenzt.
• Umwandlung (Alleineigentümer bleiben): in eine GmbH – eine Ein-Personen-GmbH ist zulässig, die Haftung ist auf das Gesellschaftsvermögen beschränkt.
• Nachteil: Mindeststammkapital 25.000 €, mehr Formvorschriften/Publizität/Buchführung und ein schwererer Ausstieg.`,
  },
  {
    id: 'k-ss21-2',
    titel: 'SS 2021 · Aufgabe 2',
    kategorie: 'Altklausur SS 2021',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Sammelfrage: Wofür ist der Goldpreis ein guter Indikator? Was verstehen wir unter dem „Organprinzip" (bei Betrieben)? Was ist mit dem „öffentlichen Glauben" (beim Handelsregister) gemeint? Warum wird gerade in US-Unternehmen auf „kompromisslose Integrität" so viel Wert gelegt? (8 P.)\n\nb) Nennen Sie die fünf Ebenen der Zielpyramide. Welche prominente deutsche Persönlichkeit hat sich gegen die oberste Ebene ausgesprochen? (6 P.)\n\nc) Zeigen Sie in einer Tabelle den Unterschied zwischen den Arbeitsverträgen „normaler" Angestellter und Manager auf und wie sich dieser auf Streikrecht, eigene Kündigung und die „Waffe" Bummelstreik auswirkt. (8 P.)',
    tipp: {
      konzept:
        'a) Vier kurze Begriffe (Goldpreis-Indikator, Organprinzip, öffentlicher Glaube, US-Integrität). b) Die Zielpyramide hat fünf Ebenen. c) Die Arbeitsverträge von Angestellten und Managern unterscheiden sich beim Streikrecht.',
      vorgehen:
        'a) Jede Teilfrage knapp beantworten. b) Fünf Ebenen + die Persönlichkeit. c) Tabelle Angestellter vs. Manager (Streik, Kündigung, Bummelstreik).',
      syntax:
        'b) Vision → Leitbild → Unternehmensziele → Geschäftsbereichsziele → Funktionsbereichsziele; gegen die Vision: Helmut Schmidt. c) Angestellter: unbefristet, darf streiken; Manager: befristet, kein Streik, nur Bummelstreik.',
      fehler:
        'Manager haben befristete Verträge und kein Streikrecht – ihnen bleibt nur „Dienst nach Vorschrift". Öffentlicher Glaube: man darf sich auf das Handelsregister verlassen.',
    },
    loesung: `a) Sammelfrage:
• Goldpreis: guter Krisen- und Inflationsindikator (steigt bei Krisen/Inflation, da als „sicherer Hafen" gekauft).
• Organprinzip: Ein (öffentlicher) Betrieb ist Organ/Teil eines übergeordneten Ganzen und erfüllt eine zentral vorgegebene Aufgabe (z. B. die Hochschule eines Landes).
• Öffentlicher Glaube (Handelsregister): Die Eintragungen gelten als richtig; man darf sich auf sie verlassen (Publizität/Vertrauensschutz).
• US-Unternehmen / „kompromisslose Integrität": geringe Mitbestimmung, aber harte Haftung und Compliance (Sammelklagen, hohe Strafen) → die Unternehmen sichern sich über strenge Integritätsregeln gegen Fehlverhalten der Mitarbeiter ab.

b) Fünf Ebenen der Zielpyramide (oben → unten):
1. Vision/Mission
2. Unternehmensleitbild
3. Unternehmensziele
4. Geschäftsbereichsziele
5. Funktionsbereichsziele
• Gegen die oberste Ebene (Visionen) sprach sich Helmut Schmidt aus: „Wer Visionen hat, sollte zum Arzt gehen."

c) Angestellter vs. Manager:
• Angestellter: i. d. R. unbefristeter Vertrag; darf streiken (nach gewerkschaftlicher Urabstimmung); kann selbst kündigen; kann einer Gewerkschaft beitreten; ein „Bummelstreik" ist nicht nötig.
• Manager/Vorstand: befristeter Vertrag (Bestellung); kein Streikrecht; reguläre „Kündigung" zur Durchsetzung von Forderungen kaum möglich; ihm bleibt allenfalls „Dienst nach Vorschrift" (Bummelstreik), um eine Trennung herbeizuführen.`,
  },
  {
    id: 'k-ss21-3',
    titel: 'SS 2021 · Aufgabe 3',
    kategorie: 'Altklausur SS 2021',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Der VW-Konzern erzielte bei 230 Mrd. € Umsatz einen Jahresüberschuss von 14 Mrd. €. Das Gesamtvermögen bestand aus Anlagevermögen (262 Mrd. €) und Umlaufvermögen (160 Mrd. €). Auf der Passivseite finden sich langfristige (153 Mrd. €) und kurzfristige (160 Mrd. €) Schulden sowie (zu berechnendes) Eigenkapital. Ermitteln und beurteilen Sie Eigenkapitalquote, Umsatzrentabilität, Eigenkapitalrendite, Anlagenintensität und Anlagendeckung II. (15 P.)\n\nb) Was versteht man unter „Unternehmenskultur"? Nach welchen zwei Dimensionen haben Deal und Kennedy ihre Kulturtypologie aufgebaut? Beschreiben Sie kurz einen der vier Kulturtypen. (5 P.)',
    tipp: {
      konzept:
        'a) Gleiche Bilanzkennzahlen wie bei der VW-Aufgabe SS 2019. b) Unternehmenskultur = gelebte Werte; Deal/Kennedy ordnen Kulturen nach zwei Dimensionen.',
      vorgehen:
        'a) EK = GK − FK, dann die fünf Kennzahlen. b) Kultur definieren, zwei Dimensionen nennen, einen Kulturtyp beschreiben.',
      syntax:
        'a) EKQ 25,8 %, UR 6,1 %, EKR 12,8 %, Anlagenintensität 62,1 %, Anlagendeckung II 100 %. b) Dimensionen: Risiko + Feedback-Geschwindigkeit; Typ z. B. Risiko-Kultur (hohes Risiko, langsames Feedback).',
      fehler:
        'Anlagendeckung II nimmt das langfristige FK mit. Deal/Kennedy: zwei Dimensionen sind Risiko UND Feedback-Geschwindigkeit (nicht nur das Risiko).',
    },
    loesung: `a) VW-Konzern – Rechnung:
GK = 262 + 160 = 422 Mrd. €; FK = 153 + 160 = 313 Mrd. €; EK = 109 Mrd. €.

• Eigenkapitalquote = 109/422 = 25,8 %  → solide.
• Umsatzrentabilität = 14/230 = 6,1 %  → solide.
• Eigenkapitalrendite = 14/109 = 12,8 %  → ordentlich.
• Anlagenintensität = 262/422 = 62,1 %  → hoch (viel gebundenes Kapital).
• Anlagendeckung II = (109 + 153)/262 = 100 %  → goldene Bilanzregel knapp erfüllt.
Beurteilung: solide finanziert, ordentliche Rendite; hohe Anlagenintensität ist branchentypisch.

b) Unternehmenskultur + Deal/Kennedy:
• Unternehmenskultur = Gesamtheit der gewachsenen, akzeptierten und tatsächlich gelebten Werte und Normen, die Entscheiden und Handeln der Mitglieder prägen.
• Zwei Dimensionen der Typologie: (1) Höhe des Risikos und (2) Geschwindigkeit des Feedbacks.
• Ein Kulturtyp – Risiko-Kultur: hohes Risiko, langsames Feedback (z. B. Forschung/Pharma: ein langes, teures Projekt, dessen Erfolg sich erst spät zeigt). Weitere: Macho-Kultur (hohes Risiko, schnelles Feedback), Prozess-Kultur (niedriges Risiko, langsames Feedback), Brot-und-Spiele-Kultur (niedriges Risiko, schnelles Feedback).`,
  },
  // ===================== WS 2015/2016 =====================
  {
    id: 'k-ws1516-1',
    titel: 'WS 2015/16 · Aufgabe 1',
    kategorie: 'Altklausur WS 2015/16',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was verstehen wir unter Produktionsfaktoren? Wie würde eine moderne Lehre der betrieblichen Produktionsfaktoren aussehen? Wann ist die Ermittlung von Produktivitäten sinnvoll? (7 P.)\n\nb) Was verstehen wir unter Kammern? Nennen Sie eine ihrer Aufgaben. (3 P.)\n\nc) Stellen Sie die „Zielpyramide" kurz dar. Was versteht man in diesem Zusammenhang unter „qualitativ"? (6 P.)',
    tipp: {
      konzept:
        'a) Produktionsfaktoren nach Gutenberg; Produktivität nur bei gleichartigen Mengen sinnvoll. b) Kammern = Pflichtkörperschaften. c) Zielpyramide; „qualitativ" = in Worten.',
      vorgehen:
        'a) Faktoren nennen + moderne Erweiterung + wann Produktivität sinnvoll. b) Kammern + Aufgabe. c) Zielpyramide darstellen, „qualitativ" erklären.',
      syntax:
        'a) Gutenberg: Elementarfaktoren (Arbeit, Betriebsmittel, Werkstoffe) + dispositiver Faktor; modern + Information/Wissen. c) Vision → … → Funktionsbereichsziele; qualitativ = beschreibend (oben), quantitativ = mit Zahlen (unten).',
      fehler:
        '„qualitativ" = in Worten / nicht messbar (typisch für Vision/Leitbild), „quantitativ" = mit Zahlen (untere Ebenen).',
    },
    loesung: `a) Produktionsfaktoren:
• = Einsatzgüter zur Leistungserstellung. Nach Gutenberg: Elementarfaktoren (objektbezogene/ausführende Arbeit, Betriebsmittel, Werkstoffe) + dispositiver Faktor (Geschäfts-/Unternehmensleitung, Planung, Organisation).
• Moderne Lehre: ergänzt um Faktoren wie Information/Wissen, Kapital und externe Faktoren (z. B. der Kunde bei Dienstleistungen).
• Produktivitätsermittlung sinnvoll bei gleichartiger, mengenmäßig vergleichbarer Ausbringung – v. a. im Zeit- und Betriebsvergleich gleicher Faktoren (Stück/Stunde usw.).

b) Kammern:
• = Körperschaften öffentlichen Rechts mit Pflichtmitgliedschaft (IHK, Handwerkskammer); Selbstverwaltung der Wirtschaft.
• Aufgabe (eine): z. B. Abnahme von Berufsabschlussprüfungen, Interessenvertretung, Beratung.

c) Zielpyramide + „qualitativ":
• Zielpyramide (oben → unten): Vision, Unternehmensleitbild, Unternehmensziele, Geschäftsbereichsziele, Funktionsbereichsziele.
• „qualitativ" = beschreibend, in Worten formuliert (nicht in Zahlen messbar) – typisch für die oberen Ebenen (Vision/Leitbild). Nach unten werden die Ziele zunehmend „quantitativ" (mit Zahlen/messbar).`,
  },
  {
    id: 'k-ws1516-2',
    titel: 'WS 2015/16 · Aufgabe 2',
    kategorie: 'Altklausur WS 2015/16',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was verstehen wir unter einer bilanziellen „Aktivierung des Humanvermögens"? Wie wird dieses Problem bei der IFRS-Bilanzierung gelöst? (4 P.)\n\nb) Welchem Gesetz zur unternehmerischen Mitbestimmung unterliegt die Deutsche Bahn? Welche fünf Personengruppen sind in ihrem Aufsichtsrat vertreten? Wie sollte aus ökonomischer Sicht eine Bahnprivatisierung erfolgen? Wer dürfte dagegen sein? (10 P.)\n\nc) Unterscheiden Sie „Unternehmensphilosophie" von „Unternehmenskultur". Schildern Sie kurz positive und negative Wirkungen von Unternehmenskultur. Wo hat sich ihre große Bedeutung gezeigt? (5 P.)',
    tipp: {
      konzept:
        'a) Humanvermögen ist nach HGB nicht aktivierbar, nach IFRS nur teilweise über den Goodwill. b) Die DB AG (Bund) fällt unter das MitbestG 1976. c) Philosophie (geplant) vs. Kultur (gelebt).',
      vorgehen:
        'a) Problem + IFRS-Lösung. b) Gesetz + fünf AR-Gruppen + sinnvolle Privatisierung + Gegner. c) Begriffe abgrenzen + Wirkungen + wo gezeigt.',
      syntax:
        'b) DB AG > 2.000 AN → MitbestG 1976; AR-Gruppen: Anteilseigner (Bund), Arbeiter, Angestellte, leit. Angestellte, Gewerkschaft. Privatisierung: Netz (Monopol) vom Betrieb (Wettbewerb) trennen.',
      fehler:
        'IFRS löst das Humanvermögen nur teilweise (Goodwill beim Unternehmenskauf). Bei der Bahn: Netz und Betrieb trennen (Unbundling).',
    },
    loesung: `a) Aktivierung des Humanvermögens:
• Humanvermögen (Wert der Mitarbeiter) lässt sich nach HGB nicht aktivieren – es ist nicht zuverlässig messbar und nicht entgeltlich erworben (Vorsichtsprinzip).
• IFRS: löst das nur TEILWEISE über den Goodwill (Geschäfts-/Firmenwert) bei Unternehmenskäufen – der über dem Substanzwert gezahlte Mehrpreis (der u. a. Mitarbeiter/Kunden umfasst) wird beim Erwerb aktiviert. Selbst geschaffenes Humanvermögen bleibt aber auch hier nicht direkt bilanzierbar.

b) Deutsche Bahn – Mitbestimmung:
• DB AG (100 % Bund) mit > 2.000 Beschäftigten → MitbestG 1976, paritätischer Aufsichtsrat.
• Fünf Personengruppen im AR: Anteilseignervertreter (Bund), Arbeiter, Angestellte, leitende Angestellte und Gewerkschaftsvertreter.
• Ökonomisch sinnvolle Privatisierung: Trennung von NETZ (natürliches Monopol → reguliert/staatlich) und BETRIEB (wettbewerbsfähig → privatisierbar); verkauft werden sollte der Betriebsteil.
• Dagegen dürften sein: Gewerkschaften/Arbeitnehmer (Arbeitsplätze), evtl. der Bund (Daseinsvorsorge) und strukturschwache Regionen (unrentable Strecken).

c) Philosophie vs. Kultur:
• Unternehmensphilosophie = geplantes Leitbild/Wertesystem (normativ, „gewollt"). Unternehmenskultur = tatsächlich gelebte, gewachsene Werte/Normen.
• Wirkungen der Kultur – positiv: Identifikation, Motivation, Koordination ohne ständige Anweisung, Stabilität. Negativ: Veränderungswiderstand, Betriebsblindheit, Ausgrenzung Andersdenkender.
• Bedeutung gezeigt: v. a. bei Fusionen/Übernahmen – Kulturkonflikte sind ein häufiger Grund des Scheiterns.`,
  },
  {
    id: 'k-ws1516-3',
    titel: 'WS 2015/16 · Aufgabe 3',
    kategorie: 'Altklausur WS 2015/16',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Was verstehen wir unter Stake- und was unter Shareholdern? Erläutern Sie, welche Anreize ein Unternehmen seinem „Stakeholder" Staat bietet, welche Beiträge es dafür erhält und welche Sanktionsmöglichkeiten der Staat hat. (8 P.)\n\nb) Das Handelsunternehmen „Klausurglück GmbH" weist für 2015 eine Bilanz aus (Werte in der Klausur). Umsatz 1 Mio. €, durchschnittlicher FK-Zins 5 %. Ermitteln und beurteilen Sie Liquidität, EKR, GKR und Umsatzrentabilität. Sollte das Unternehmen mit Blick auf seine Eigenkapitalquote den Gewinn lieber ausschütten oder einbehalten? (17 P.)',
    tipp: {
      konzept:
        'a) Stake- vs. Shareholder; der Staat als Stakeholder (Anreiz-Beitrags-Theorie). b) Aus einer Bilanz werden Liquidität, EKR, GKR und UR berechnet.',
      vorgehen:
        'a) Begriffe + Anreize/Beiträge/Sanktionen des Staates. b) Liquiditätsgrade, EKR, GKR, UR; EK-Quote → Ausschüttung vs. Thesaurierung.',
      syntax:
        'a) Staat: Anreize = Steuern/Arbeitsplätze; Beiträge = Infrastruktur/Recht; Sanktionen = Auflagen/Genehmigungen. b) EKR = [[JÜ|EK]], GKR = [[JÜ + FK-Zinsen|GK]], UR = [[JÜ|Umsatz]].',
      fehler:
        'Thesaurierung (Gewinn einbehalten) erhöht die EK-Quote. Die konkreten Klausurglück-Zahlen lagen als Bild vor.',
    },
    loesung: `a) Stake- und Shareholder + Staat (Anreiz-Beitrags-Theorie):
• Stakeholder = alle Anspruchsgruppen, die Einfluss nehmen oder betroffen sind; Shareholder = Anteilseigner (Fokus auf Gewinn/Unternehmenswert).
• Staat als Stakeholder:
  – Anreize, die das Unternehmen ihm bietet: Steuern, Arbeitsplätze, Wertschöpfung, Einhaltung von Recht.
  – Beiträge, die der Staat liefert: Rechtssicherheit, Infrastruktur, Bildung/Ausbildung, ggf. Subventionen.
  – Sanktionsmöglichkeiten: Steuern/Auflagen erhöhen, Genehmigungen verweigern, Subventionen entziehen, Gesetze verschärfen.

b) Klausurglück GmbH (Methode – Zahlen lagen als Bild vor):
• Liquidität: 1. Grad = liquide Mittel / kurzfr. FK; 2. Grad = (liquide Mittel + kurzfr. Forderungen) / kurzfr. FK (Soll ~100 %); 3. Grad = Umlaufvermögen / kurzfr. FK (Soll ~150–200 %).
• EKR = JÜ / EK × 100; GKR = (JÜ + FK-Zinsen) / GK × 100 (FK-Zinsen = 5 % × FK); Umsatzrentabilität = JÜ / Umsatz × 100.
• Ausschütten oder einbehalten? Mit Blick auf die Eigenkapitalquote: Wird der Gewinn EINBEHALTEN (Thesaurierung), steigt das Eigenkapital → die EK-Quote verbessert sich (mehr Stabilität/Unabhängigkeit). Ist die EK-Quote ohnehin niedrig, sollte der Gewinn also eher im Unternehmen bleiben; ist sie bereits hoch/komfortabel, ist eine Ausschüttung an die Gesellschafter vertretbar.`,
  },
  // ===================== WS 2017/2018 =====================
  {
    id: 'k-ws1718-1',
    titel: 'WS 2017/18 · Aufgabe 1',
    kategorie: 'Altklausur WS 2017/18',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Was verstehen wir unter Gebrauchs-, was unter Verbrauchsgütern? (4 P.)\n\nb) Warum stehen Liquidität und Rentabilität in einem gewissen Zielkonflikt zueinander? (2 P.)\n\nc) Was verstehen wir unter „Stakeholdern"? Nennen Sie sechs besonders mächtige Stakeholder-Gruppen in Deutschland (mit kurzer Begründung). (14 P.)',
    tipp: {
      konzept:
        'a) Gebrauchsgut mehrfach, Verbrauchsgut einmalig nutzbar. b) Zielkonflikt: investiertes Kapital ist nicht liquide. c) Stakeholder besitzen Sanktionsmacht.',
      vorgehen:
        'a) Beide Güter abgrenzen. b) Den Tradeoff erklären. c) Sechs mächtige Gruppen + je eine Sanktion.',
      syntax:
        'a) Gebrauchsgut = Auto, Verbrauchsgut = Apfel (beide Konsumgüter). c) Eigentümer, Banken, Arbeitnehmer, Kunden, Lieferanten, Staat (+ Öffentlichkeit).',
      fehler:
        'Liquidität ↔ Rentabilität: viel investieren = rentabel, aber wenig liquide. Je Stakeholder eine Sanktionsmöglichkeit nennen.',
    },
    loesung: `a) Gebrauchs- vs. Verbrauchsgüter:
• Beide sind Konsumgüter. Gebrauchsgüter sind mehrfach/langfristig nutzbar (z. B. Auto, Kühlschrank). Verbrauchsgüter werden bei einmaligem Gebrauch verbraucht (z. B. Lebensmittel, Apfel).

b) Zielkonflikt Liquidität ↔ Rentabilität:
• Wer möglichst rentabel sein will, muss möglichst viel Kapital investieren (binden) – das verringert die jederzeit verfügbaren liquiden Mittel. Wer dagegen viel Liquidität (Geld „liegen") hält, verzichtet auf Rendite. → Man muss zwischen Sicherheit (Liquidität) und Ertrag (Rentabilität) abwägen.

c) Stakeholder + sechs mächtige Gruppen (mit Sanktionsmöglichkeit):
• Eigentümer/Anteilseigner → Kapitalabzug, Management abwählen.
• Fremdkapitalgeber/Banken → Kredit kündigen, Zinsen erhöhen.
• Arbeitnehmer/Gewerkschaften → Streik, Leistungszurückhaltung, Mitbestimmung.
• Kunden → Kaufverweigerung, Abwanderung, Boykott.
• Lieferanten → Lieferstopp, schlechtere Konditionen.
• Staat → Steuern/Auflagen, Genehmigungen verweigern, Subventionen entziehen.
  (Weitere: Öffentlichkeit/Medien → Imageschaden.)`,
  },
  {
    id: 'k-ws1718-2',
    titel: 'WS 2017/18 · Aufgabe 2',
    kategorie: 'Altklausur WS 2017/18',
    schwierigkeit: 'mittel',
    aufgabeText:
      'a) Auf welcher Seite der Bilanz befinden sich Rückstellungen? Wodurch unterscheiden sie sich von Verbindlichkeiten? (4 P.)\n\nb) Was verstehen wir unter „Kammern"? Nennen Sie eine ihrer Aufgaben. (3 P.)\n\nc) Erläutern Sie kurz die Begriffe Unternehmensphilosophie, -kultur und Corporate Identity. Was davon folgt normalerweise keinem menschlichen Plan? (7 P.)\n\nd) Nennen Sie die vier Existenzbedingungen von Unternehmen. Definieren Sie für zwei davon je eine Kennzahl. (6 P.)',
    tipp: {
      konzept:
        'a) Rückstellungen = ungewisse Verbindlichkeiten (Passivseite). b) Kammern = Pflichtkörperschaften. c) Philosophie/Kultur/CI – die Kultur folgt keinem Plan. d) Vier Existenzbedingungen.',
      vorgehen:
        'a) Seite + Unterschied zu Verbindlichkeiten. b) Kammern + Aufgabe. c) Drei Begriffe + welcher folgt keinem Plan. d) Vier Bedingungen + 2 Kennzahlen.',
      syntax:
        'a) Passivseite; Rückstellung ungewiss, Verbindlichkeit sicher. c) Die Kultur wächst spontan → folgt keinem Plan. d) Rentabilität (EKR), Liquidität (Liquiditätsgrad), Wachstum, Planbarkeit.',
      fehler:
        'Die UNTERNEHMENSKULTUR folgt keinem menschlichen Plan (entsteht spontan). Rückstellung ist nicht dasselbe wie eine Verbindlichkeit.',
    },
    loesung: `a) Rückstellungen:
• Sie stehen auf der PASSIVseite (zwischen Eigenkapital und Verbindlichkeiten).
• Unterschied zu Verbindlichkeiten: Rückstellungen sind UNGEWISSE Verbindlichkeiten – Höhe und/oder Fälligkeitszeitpunkt sind noch unsicher (z. B. Prozess-, Pensions-, Gewährleistungsrückstellungen). Verbindlichkeiten dagegen sind nach Grund, Höhe und Fälligkeit sicher.

b) Kammern:
• = Körperschaften öffentlichen Rechts mit Pflichtmitgliedschaft (IHK, Handwerkskammer); Selbstverwaltung der Wirtschaft.
• Aufgabe: z. B. Abnahme von Berufsabschlussprüfungen, Interessenvertretung, Beratung.

c) Philosophie / Kultur / Corporate Identity:
• Unternehmensphilosophie = geplante Grundwerte/Leitbild (normativ).
• Unternehmenskultur = tatsächlich gelebte, gewachsene Werte/Normen.
• Corporate Identity = einheitliches Erscheinungsbild nach außen (Design, Kommunikation, Verhalten).
• Keinem menschlichen Plan folgt normalerweise die UNTERNEHMENSKULTUR – sie entsteht spontan und verändert sich ständig.

d) Vier Existenzbedingungen + zwei Kennzahlen:
• Rentabilität, Liquidität, Wachstum, Planbarkeit.
• Rentabilität → EKR = JÜ / EK × 100 (oder GKR).
• Liquidität → Liquidität 2. Grades = (liquide Mittel + kurzfr. Forderungen) / kurzfr. FK × 100.`,
  },
  {
    id: 'k-ws1718-3',
    titel: 'WS 2017/18 · Aufgabe 3',
    kategorie: 'Altklausur WS 2017/18',
    schwierigkeit: 'schwer',
    aufgabeText:
      'a) Das Handelsunternehmen „Gölti KG" machte 2017 einen Umsatz von 600.000 € bei einem Gesamtkapital von 100.000 €. Es erwirtschaftete eine Eigenkapitalrendite von 18 %, wobei Eigen- und Fremdkapital sich die Waage hielten und 2 % Zinsen auf die Schulden gezahlt wurden. Ermitteln Sie Jahresüberschuss, Gesamtkapitalrendite und Umsatzrendite – und beurteilen Sie die beiden Renditen. (8 P.)\n\nb) Wie müsste die „Gölti KG" ihre Kapitalstruktur verändern, um die EKR (bei unverändertem FK-Zins und gegebener GKR) auf 42 % zu steigern? Was macht die Rechnung unrealistisch? (4 P.)\n\nc) Welche Bedingungen müssen erfüllt sein, damit ein Unternehmen das Montan-Mitbestimmungsgesetz anwenden muss? Warum haben die Aufsichtsräte dieser Unternehmen immer eine ungerade Mitgliederzahl? (8 P.)',
    tipp: {
      konzept:
        'a) Über EKR und [[FK|EK]] = 1 lassen sich JÜ, GKR und UR bestimmen. b) Für eine höhere EKR muss der VG steigen. c) Beim Montan-MitbestG sorgt der „neutrale Mann" für eine ungerade AR-Zahl.',
      vorgehen:
        'a) EK = FK = 50.000; JÜ = EKR×EK; Kapitalgewinn = JÜ + FK-Zinsen; GKR, UR. b) [[FK|EK]] für EKR 42 %. c) Bedingungen + ungerade Zahl erklären.',
      syntax:
        'a) JÜ = 9.000; Kapitalgewinn 10.000; GKR 10 %; UR 1,5 %. b) 42 = 10 + 8×[[FK|EK]] → [[FK|EK]] = 4. c) Montanindustrie > 1.000 AN; „neutraler Mann" → ungerade Zahl, kein Patt.',
      fehler:
        'Kapitalgewinn = JÜ + FK-Zinsen (nicht nur der JÜ). EKR 42 % verlangt VG = 4 (unrealistisch, der FK-Zins bliebe nicht 2 %).',
    },
    loesung: `a) Gölti KG – Rechnung:
„Eigen- und Fremdkapital hielten sich die Waage" → EK = FK = 50.000 € (GK 100.000 €).

• Jahresüberschuss = EKR × EK = 18 % × 50.000 = 9.000 €
• Umsatzrendite = JÜ / Umsatz = 9.000 / 600.000 = 1,5 %
• Kapitalgewinn = JÜ + FK-Zinsen = 9.000 + (50.000 × 2 %) = 9.000 + 1.000 = 10.000 €
• Gesamtkapitalrendite = Kapitalgewinn / GK = 10.000 / 100.000 = 10 %

Beurteilung: Es gilt EKR 18 % > GKR 10 % > FKZ 2 % → positiver Leverage-Effekt. Die Umsatzrendite von 1,5 % ist sehr niedrig (im Handel sind die Margen zwar dünn, aber < 5 % gilt als schwach).

b) EKR auf 42 % steigern:
  42 = 10 + (10 − 2) × FK/EK → 32 = 8 × FK/EK → FK/EK = 4
→ Der Verschuldungsgrad müsste von 1 auf 4 steigen.
Unrealistisch: So hohe Verschuldung ist extrem riskant; eine Bank gibt das FK bei FK/EK = 4 nicht zu unveränderten 2 % (der FKZ stiege), und die GKR bliebe nicht konstant.

c) Montan-Mitbestimmungsgesetz:
• Bedingungen: Unternehmen der Montanindustrie (Kohle und Stahl) mit mehr als 1.000 Beschäftigten.
• Ungerade AR-Zahl: Der Aufsichtsrat ist paritätisch (Arbeitgeber : Arbeitnehmer = 1 : 1) besetzt und wird um ein zusätzliches NEUTRALES Mitglied („neutraler Mann") ergänzt. Dadurch ist die Gesamtzahl ungerade (z. B. 11) und Patt-/Stimmengleichheits-Situationen werden vermieden.`,
  },
]
