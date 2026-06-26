import type { QuizFrage } from '../types'

// Quizfragen zur Allgemeinen Betriebswirtschaftslehre I (WS 2025/2026).
// Inhalte ausschließlich aus den Übungsblättern (Kapitel 1–5, siehe
// ../data/uebungsblaetter.ts und ../data/aufgaben.ts). Altklausuren sind
// bewusst NICHT als Quelle verwendet.
export const quizFragen: QuizFrage[] = [
  // =========================================================================
  // Kapitel 1 – Grundlagen
  // =========================================================================
  {
    art: 'single',
    frage: 'Was bedeutet „Wirtschaften" im betriebswirtschaftlichen Sinn?',
    optionen: [
      { text: 'Planvolles Entscheiden über den Einsatz knapper Mittel zur bestmöglichen Bedürfnisbefriedigung' },
      {
        text: 'Möglichst viel Geld verdienen',
        warumFalsch: 'Wirtschaften ist nicht „Geld verdienen", sondern der vernünftige Umgang mit Knappheit.',
      },
      {
        text: 'Das Verteilen frei verfügbarer Güter',
        warumFalsch: 'Freie Güter (im Überfluss vorhanden) sind gerade NICHT Gegenstand des Wirtschaftens.',
      },
      {
        text: 'Das Herstellen von Sachgütern in einer Fabrik',
        warumFalsch: 'Produktion ist nur ein Teilaspekt; Wirtschaften umfasst jede Disposition über knappe Mittel.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Wirtschaften = Disposition über knappe Güter. Weil Bedürfnisse (nahezu) unbegrenzt, die Mittel aber knapp sind, entsteht ein Wahl-/Entscheidungszwang.',
    quelle: 'Übungsblatt 1, Aufgabe 3',
  },
  {
    art: 'single',
    frage: 'Warum MUSS der Mensch überhaupt wirtschaften?',
    optionen: [
      {
        text: 'Weil die Bedürfnisse (nahezu) unbegrenzt, die Mittel aber knapp sind',
      },
      {
        text: 'Weil der Staat es per Gesetz vorschreibt',
        warumFalsch: 'Der Zwang zum Wirtschaften folgt aus der Knappheit, nicht aus einer rechtlichen Vorschrift.',
      },
      {
        text: 'Weil alle Güter frei verfügbar sind',
        warumFalsch: 'Gerade das Gegenteil ist der Fall: Güter sind knapp – sonst müsste niemand wirtschaften.',
      },
      {
        text: 'Weil Unternehmen Gewinn erzielen wollen',
        warumFalsch: 'Gewinnerzielung ist ein mögliches Ziel, aber nicht der Grund für die Notwendigkeit zu wirtschaften.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Aus der Knappheit der Mittel bei (nahezu) unbegrenzten Bedürfnissen folgt der Wahl- und Entscheidungszwang (Allokation) – also die Notwendigkeit zu wirtschaften.',
    quelle: 'Übungsblatt 1, Aufgabe 3',
  },
  {
    art: 'reihenfolge',
    frage: 'Bringe die ökonomische Begriffskette in die richtige Reihenfolge.',
    schritte: ['Bedürfnis (Mangelzustand)', 'Bedarf (mit Kaufkraft hinterlegt)', 'Nachfrage (am Markt geäußert)'],
    erklaerung:
      'Ein Bedürfnis (Mangelempfinden) wird zum Bedarf, wenn Mittel zur Befriedigung zur Verfügung stehen; tritt der Bedarf am Markt auf, wird er zur Nachfrage.',
    quelle: 'Übungsblatt 1, Aufgabe 3',
  },
  {
    art: 'kategorien',
    frage: 'Ordne jede Wunschäußherung aus dem Reisebüro der zutreffenden Variante des ökonomischen Prinzips zu.',
    kategorien: ['Maximalprinzip', 'Minimalprinzip', 'Extremumprinzip'],
    items: [
      { text: 'Für 2000 € möglichst weit weg vom Novemberwetter', kategorie: 'Maximalprinzip' },
      { text: 'Badeurlaub im November – möglichst billiges Angebot', kategorie: 'Minimalprinzip' },
      { text: 'Für möglichst wenig Geld möglichst lange im Süden', kategorie: 'Extremumprinzip' },
    ],
    erklaerung:
      'Maximalprinzip: Mittel fix (2000 €), Ertrag (Entfernung) max. Minimalprinzip: Ziel fix (Badeurlaub), Kosten min. Extremumprinzip: beide Größen variabel → ökonomisch nicht eindeutig.',
    quelle: 'Übungsblatt 1, Aufgabe 5',
  },
  {
    art: 'single',
    frage: 'Eine Kundin sagt: „Für 2000 € möchte ich möglichst weit weg." Welche Variante des ökonomischen Prinzips ist das?',
    optionen: [
      { text: 'Maximalprinzip' },
      {
        text: 'Minimalprinzip',
        warumFalsch: 'Beim Minimalprinzip ist das Ziel fix und die Mittel werden minimiert – hier ist das Budget fix.',
      },
      {
        text: 'Extremumprinzip',
        warumFalsch: 'Das Extremumprinzip hätte beide Größen variabel; hier ist das Budget (2000 €) fest vorgegeben.',
      },
      {
        text: 'Rationalprinzip',
        warumFalsch: 'Ein eigenständiges „Rationalprinzip" mit dieser Bedeutung gibt es nicht; das Oberprinzip ist das ökonomische Prinzip.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Der Mitteleinsatz (Budget 2000 €) ist fix, der Ertrag (Entfernung) wird maximiert → Maximalprinzip: „mit gegebenen Mitteln maximalen Erfolg".',
    quelle: 'Übungsblatt 1, Aufgabe 5',
  },
  {
    art: 'wahrfalsch',
    frage: 'Die BWL als Rationalitätslehre – wahr oder falsch?',
    aussagen: [
      { text: 'Reale Menschen entscheiden stets vollkommen rational.', wahr: false, warum: 'Menschen entscheiden nur begrenzt rational (bounded rationality, H. A. Simon): unvollständige Infos, Zeitdruck, Emotionen.' },
      { text: 'Formale Rationalität meint die optimale Wahl der Mittel für ein gegebenes Ziel.', wahr: true },
      { text: 'Materiale Rationalität bewertet die Ziele selbst.', wahr: true },
      { text: '„Satisficing" bedeutet, stets das Optimum zu wählen.', wahr: false, warum: 'Satisficing heißt, sich mit einer zufriedenstellenden (nicht der optimalen) Lösung zu begnügen.' },
    ],
    erklaerung:
      'Die BWL ist Rationalitätslehre, weil sie den vernünftigen Mitteleinsatz untersucht. Reale Entscheidungen sind aber nur begrenzt rational. Man unterscheidet formale (Zweck-) und materiale (Wert-)Rationalität.',
    quelle: 'Übungsblatt 1, Aufgabe 4',
  },
  {
    art: 'reihenfolge',
    frage: 'Produktivität, Wirtschaftlichkeit und Rentabilität bauen auf verschiedenen Bezugsebenen aufeinander auf. Ordne von der Mengen- zur Kapitalebene.',
    schritte: [
      'Produktivität – Output/Input in Mengen',
      'Wirtschaftlichkeit – Ertrag/Aufwand in Werten',
      'Rentabilität – Gewinn bezogen auf das Kapital',
    ],
    erklaerung:
      'Produktivität ist rein mengenmäßig (z. B. Stück/Std.), Wirtschaftlichkeit wertmäßig (> 1 = wirtschaftlich), Rentabilität bezieht den Gewinn auf das eingesetzte Kapital. Höhere Produktivität → bessere Wirtschaftlichkeit → höhere Rentabilität.',
    quelle: 'Übungsblatt 1, Aufgabe 6',
  },
  {
    art: 'single',
    frage: 'Auf welcher Bezugsebene misst die Produktivität die Ergiebigkeit?',
    optionen: [
      { text: 'In Mengeneinheiten (Output je Input, z. B. Stück je Stunde)' },
      {
        text: 'In Wertgrößen (Ertrag je Aufwand)',
        warumFalsch: 'Das ist die Wirtschaftlichkeit, nicht die Produktivität.',
      },
      {
        text: 'Als Gewinn je eingesetztem Kapital',
        warumFalsch: 'Das ist die Rentabilität (z. B. EKR/GKR), nicht die Produktivität.',
      },
      {
        text: 'Als Umsatz je Aktie',
        warumFalsch: 'Das wäre eine Aktienkennzahl und hat mit der mengenmäßigen Produktivität nichts zu tun.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Produktivität = Output/Input in MENGENeinheiten. Sie ist eine rein technische Ergiebigkeit ohne Geldgrößen.',
    quelle: 'Übungsblatt 1, Aufgabe 6',
  },
  {
    art: 'kategorien',
    frage: 'Öffentlicher Betrieb oder (privates) Unternehmen? Ordne die Betriebe zu.',
    kategorien: ['Privates Unternehmen', 'Öffentlicher Betrieb / Mischform'],
    items: [
      { text: 'Bauernhof', kategorie: 'Privates Unternehmen' },
      { text: 'Lufthansa (börsennotierte AG)', kategorie: 'Privates Unternehmen' },
      { text: 'Volkswagen AG', kategorie: 'Privates Unternehmen' },
      { text: 'Deutsche Bahn AG (100 % Bund)', kategorie: 'Öffentlicher Betrieb / Mischform' },
      { text: 'Hochschule Fulda', kategorie: 'Öffentlicher Betrieb / Mischform' },
    ],
    erklaerung:
      'Entscheidend ist die Trägerschaft, nicht die Rechtsform: Die DB ist eine AG, gehört aber zu 100 % dem Bund → öffentlich. Die HS Fulda ist eine Körperschaft öffentlichen Rechts. VW ist trotz Landesbeteiligung erwerbswirtschaftlich → privat.',
    quelle: 'Übungsblatt 1, Aufgabe 8',
  },
  {
    art: 'single',
    frage: 'Die Deutsche Bahn ist eine Aktiengesellschaft. Warum gilt sie dennoch als öffentliches Unternehmen?',
    optionen: [
      { text: 'Weil sie zu 100 % dem Bund gehört – entscheidend ist die Trägerschaft, nicht die Rechtsform' },
      {
        text: 'Weil eine AG immer ein öffentlicher Betrieb ist',
        warumFalsch: 'Die meisten AGs (z. B. Lufthansa) sind private Unternehmen; die Rechtsform sagt nichts über die Trägerschaft.',
      },
      {
        text: 'Weil sie keinen Gewinn erzielen darf',
        warumFalsch: 'Auch öffentliche Unternehmen dürfen Gewinne erzielen; ausschlaggebend ist die öffentliche Eigentümerschaft und der Gemeinwohlauftrag.',
      },
      {
        text: 'Weil sie an der Börse notiert ist',
        warumFalsch: 'Die DB AG ist gerade NICHT börsennotiert; selbst eine Notierung würde sie nicht automatisch privat machen.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Rechtsform ≠ Trägerschaft. Die DB AG hat eine privatrechtliche Form (AG), steht aber im 100%igen Eigentum des Bundes und hat einen Infrastruktur-/Gemeinwohlauftrag → öffentliches Unternehmen/Mischform.',
    quelle: 'Übungsblatt 1, Aufgabe 8',
  },
  {
    art: 'multi',
    frage: 'Welche der folgenden sind Hauptkriterien der Betriebstypologie? (Mehrere richtig)',
    optionen: [
      { text: 'Wirtschaftszweig / Branche (primär, sekundär, tertiär)' },
      { text: 'Betriebsgröße (Beschäftigte, Umsatz, Bilanzsumme)' },
      { text: 'Vorherrschender Produktionsfaktor / Faktorintensität' },
      {
        text: 'Lieblingsfarbe des Inhabers',
        warumFalsch: 'Das ist kein betriebswirtschaftliches Typologisierungskriterium.',
      },
    ],
    richtige: [0, 1, 2],
    erklaerung:
      'Zu den fünf Hauptkriterien zählen Wirtschaftszweig/Branche, Betriebsgröße, vorherrschender Produktionsfaktor, Rechtsform und Standort(-orientierung).',
    quelle: 'Übungsblatt 1, Aufgabe 9',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne die Spezielle BWL (SBWL) ihrer Gliederungsart zu.',
    paare: [
      { begriff: 'Beschaffung, Produktion, Absatz', ziel: 'funktional (nach Tätigkeit)' },
      { begriff: 'Industrie-, Handels-, Bankbetriebslehre', ziel: 'institutionell (nach Branche)' },
    ],
    erklaerung:
      'Die SBWL wird funktional (nach betrieblichen Funktionen/Tätigkeiten) oder institutionell (nach Branchen/Wirtschaftszweigen) gegliedert. Die ABWL ist demgegenüber funktions- und branchenübergreifend.',
    quelle: 'Übungsblatt 1, Aufgabe 11',
  },
  {
    art: 'zuordnung',
    frage: 'Von welcher Nachbarwissenschaft profitiert die BWL jeweils? Ordne Beispiel und Disziplin zu.',
    paare: [
      { begriff: 'Optimierung, Investitionsrechnung, Prognosen', ziel: 'Mathematik / Statistik' },
      { begriff: 'Konsumenten- und Führungsverhalten, Motivation', ziel: 'Psychologie / Soziologie' },
      { begriff: 'HGB, AktG, Steuerrecht, Vertragsgestaltung', ziel: 'Rechtswissenschaft' },
    ],
    erklaerung:
      'Die BWL nutzt u. a. Mathematik/Statistik (Operations Research), Psychologie/Soziologie (Verhalten) und Rechtswissenschaft (Rechtsformwahl, Bilanzierung). Weitere: VWL, Informatik.',
    quelle: 'Übungsblatt 1, Aufgabe 11',
  },
  {
    art: 'multi',
    frage: 'Ein Unternehmen ist ein offenes System mit Außenbeziehungen. Welche zählen zu den BESCHAFFUNGSmärkten? (Mehrere richtig)',
    optionen: [
      { text: 'Arbeitsmarkt (Personal)' },
      { text: 'Kapitalmarkt (Geldgeber)' },
      { text: 'Materialmarkt (Lieferanten von Roh-, Hilfs- und Betriebsstoffen)' },
      {
        text: 'Absatzmarkt (Kunden)',
        warumFalsch: 'Der Absatzmarkt ist der Markt für den Output, nicht ein Beschaffungsmarkt.',
      },
    ],
    richtige: [0, 1, 2],
    erklaerung:
      'Auf der Input-Seite stehen die Beschaffungsmärkte: Material-, Arbeits- und Kapitalmarkt. Auf der Output-Seite steht der Absatzmarkt (Kunden, Wettbewerber). Modell: Input → Transformation → Output.',
    quelle: 'Übungsblatt 1, Aufgabe 12',
  },
  {
    art: 'wahrfalsch',
    frage: 'Kartell und Monopol – wahr oder falsch?',
    aussagen: [
      { text: 'Ein Kartell ist eine Absprache rechtlich selbstständig bleibender Unternehmen zur Wettbewerbsbeschränkung.', wahr: true },
      { text: 'Kartelle sind in Deutschland grundsätzlich erlaubt.', wahr: false, warum: 'Kartelle sind grundsätzlich verboten (§ 1 GWB, Art. 101 AEUV); nur eng begrenzte Ausnahmen sind zulässig.' },
      { text: 'Ein Monopol ist eine Marktform mit nur einem Anbieter.', wahr: true },
      { text: 'Ein Nachfragemonopol heißt Monopson.', wahr: true },
    ],
    erklaerung:
      'Kartell = wettbewerbsbeschränkende Absprache selbstständiger Unternehmen (grundsätzlich verboten). Monopol = ein Anbieter; das Nachfragependant ist das Monopson. Beide sind oft weniger problematisch als dargestellt (bestreitbare Märkte, Innovationsanreiz).',
    quelle: 'Übungsblatt 1, Aufgabe 13',
  },
  {
    art: 'single',
    frage: 'Welches Argument spricht dafür, dass ein Monopol weniger problematisch sein kann, als oft angenommen?',
    optionen: [
      { text: 'Bei bestreitbaren Märkten diszipliniert die potenzielle Konkurrenz auch einen Monopolisten' },
      {
        text: 'Ein Monopolist senkt freiwillig immer die Preise',
        warumFalsch: 'Ein Monopolist ist Preis-Mengen-Setzer und hat keinen direkten Anreiz, die Preise zu senken; die Disziplinierung kommt von potenzieller Konkurrenz.',
      },
      {
        text: 'Monopole sind in der EU verboten',
        warumFalsch: 'Verboten ist der Missbrauch von Marktmacht, nicht die Monopolstellung als solche; das ist zudem kein Entwarnungsargument.',
      },
      {
        text: 'Ein Monopol erhöht automatisch die Produktqualität',
        warumFalsch: 'Das ist kein anerkanntes ökonomisches Argument; eher fehlt dem Monopolisten der Wettbewerbsdruck.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Gegenargumente: bestreitbare Märkte (contestable markets), effiziente natürliche Monopole (Netze), Innovationsanreiz durch temporäre Monopole (Patente, Schumpeter) und zeitlich begrenzte Marktmacht.',
    quelle: 'Übungsblatt 1, Aufgabe 13',
  },

  // =========================================================================
  // Kapitel 2 – Betrieblicher Lebenszyklus (Sanierung)
  // =========================================================================
  {
    art: 'single',
    frage: 'Was versteht man unter einer Sanierung?',
    optionen: [
      { text: 'Planvolle Maßnahmen zur Wiederherstellung der Rentabilität und Überlebensfähigkeit eines Krisenunternehmens' },
      {
        text: 'Die planmäßige Auflösung und Liquidation eines Betriebs',
        warumFalsch: 'Das ist die Liquidation – die Sanierung will das Unternehmen gerade erhalten, nicht auflösen.',
      },
      {
        text: 'Die Gründung eines neuen Unternehmens',
        warumFalsch: 'Sanierung betrifft ein bestehendes, notleidendes Unternehmen, nicht eine Neugründung.',
      },
      {
        text: 'Die Ausschüttung von Gewinnen an die Eigentümer',
        warumFalsch: 'Eine Sanierung dient der Rettung des Unternehmens, nicht der Gewinnausschüttung.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Sanierung = alle planvollen Maßnahmen, um ein notleidendes Unternehmen vor dem Zusammenbruch zu bewahren und seine Leistungsfähigkeit wiederherzustellen.',
    quelle: 'Übungsblatt 2, Aufgabe 14',
  },
  {
    art: 'reihenfolge',
    frage: 'Bringe die typischen Schritte einer Sanierung in die richtige zeitliche Reihenfolge.',
    schritte: [
      'Krisendiagnose / Ursachenanalyse',
      'Sofortmaßnahmen zur Liquiditätssicherung',
      'Sanierungskonzept / -plan',
      'Leistungswirtschaftliche Sanierung (Restrukturierung)',
      'Finanzwirtschaftliche Sanierung (neues EK, Schuldenerlass)',
      'Umsetzung & Controlling',
    ],
    erklaerung:
      'Erst Diagnose und Sicherung der Zahlungsfähigkeit, dann das Konzept, anschließend leistungs- und finanzwirtschaftliche Sanierung, schließlich Umsetzung und Erfolgskontrolle (kurz- → mittel- → langfristig).',
    quelle: 'Übungsblatt 2, Aufgabe 14',
  },
  {
    art: 'wahrfalsch',
    frage: 'Sanierung – wahr oder falsch?',
    aussagen: [
      { text: 'Vor der Sanierung wird die Sanierungsfähigkeit und -würdigkeit geprüft.', wahr: true },
      { text: 'Die finanzwirtschaftliche Sanierung kann Kapitalschnitt, neues Eigenkapital und einen Debt-Equity-Swap umfassen.', wahr: true },
      { text: 'Sofortmaßnahmen dienen vor allem der Sicherung der Zahlungsfähigkeit.', wahr: true },
      { text: 'Die leistungswirtschaftliche Sanierung besteht nur aus einer Kapitalerhöhung.', wahr: false, warum: 'Die Kapitalerhöhung gehört zur FINANZwirtschaftlichen Sanierung; leistungswirtschaftlich geht es um Produkte, Prozesse, Organisation und Personal.' },
    ],
    erklaerung:
      'Leistungswirtschaftliche Sanierung = Restrukturierung von Produkten/Prozessen/Personal (Kostensenkung, Desinvestitionen). Finanzwirtschaftliche Sanierung = Kapitalmaßnahmen (neues EK, Forderungsverzicht, Debt-Equity-Swap).',
    quelle: 'Übungsblatt 2, Aufgabe 14',
  },

  // =========================================================================
  // Kapitel 3 – Mengen, Werte & Kennzahlen
  // =========================================================================
  {
    art: 'single',
    frage: 'Wie ist die Wirtschaftlichkeit im Sinne der Kennzahlenrechnung definiert?',
    optionen: [
      { text: 'Ertrag / Aufwand (z. B. Umsatz / Istkosten); > 1 = wirtschaftlich' },
      {
        text: 'Sollkosten / Istkosten',
        warumFalsch: 'Das ist eine spezielle Kostenabweichungsbetrachtung; die Wirtschaftlichkeit im Beispiel ist Umsatz/Istkosten (Ertrag/Aufwand).',
      },
      {
        text: 'Gewinn / Eigenkapital',
        warumFalsch: 'Das ist die Eigenkapitalrentabilität, nicht die Wirtschaftlichkeit.',
      },
      {
        text: 'Output / Input in Stück',
        warumFalsch: 'Das ist die (mengenmäßige) Produktivität, nicht die wertmäßige Wirtschaftlichkeit.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Wirtschaftlichkeit = Verhältnis von Ertrag zu Aufwand (im Aufgabenbeispiel Umsatz/Istkosten). Ein Wert > 1 bedeutet wirtschaftliches Arbeiten.',
    quelle: 'Übungsblatt 3, Aufgabe 7',
  },
  {
    art: 'eingabe',
    frage: 'Unternehmen B: Umsatz 27 Mrd. €, Istkosten 25,3 Mrd. €. Wie hoch ist die Wirtschaftlichkeit (Umsatz / Istkosten)? Auf zwei Nachkommastellen.',
    loesungen: ['1,07', '1.07'],
    toleranz: 0.02,
    platzhalter: 'z. B. 1,07',
    erklaerung: '27 / 25,3 = 1,07. Ein Wert über 1 zeigt: B arbeitet wirtschaftlich (und im Vergleich am besten).',
    quelle: 'Übungsblatt 3, Aufgabe 7',
  },
  {
    art: 'eingabe',
    frage: 'Unternehmen A produziert 3.000.000 PKW mit 270.000 Beschäftigten. Wie hoch ist die Arbeitsproduktivität (PKW je Mitarbeiter)? Gerundet auf eine Nachkommastelle.',
    loesungen: ['11,1', '11.1'],
    toleranz: 0.3,
    platzhalter: 'PKW je MA',
    erklaerung: '3.000.000 / 270.000 = 11,1 PKW je Mitarbeiter. Arbeitsproduktivität = Output (Menge) / eingesetzte Arbeit.',
    quelle: 'Übungsblatt 3, Aufgabe 7',
  },
  {
    art: 'single',
    frage: 'Warum ist der „Marktanteil" eines Automobilherstellers nicht zweifelsfrei definierbar?',
    optionen: [
      { text: 'Weil Bezugsgröße (Umsatz vs. Stückzahl) und Marktabgrenzung (nur PKW? regional/global?) variieren' },
      {
        text: 'Weil Marktanteile geheim sind',
        warumFalsch: 'Das Problem ist nicht die Geheimhaltung, sondern die uneindeutige Definition von Bezugsgröße und Markt.',
      },
      {
        text: 'Weil der Marktanteil immer 100 % beträgt',
        warumFalsch: 'Der Marktanteil eines einzelnen Anbieters ist nur ein Bruchteil des Gesamtmarktes.',
      },
      {
        text: 'Weil er gesetzlich nicht erlaubt ist',
        warumFalsch: 'Marktanteile sind völlig legal und werden ständig berechnet – nur eben uneinheitlich.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Marktanteil = Umsatz des Unternehmens / Gesamtumsatz des Marktes. Nicht eindeutig, weil man wertmäßig oder mengenmäßig rechnen kann und die Marktabgrenzung strittig ist (nur PKW? inkl. Nutzfahrzeuge? welcher Raum?).',
    quelle: 'Übungsblatt 3, Aufgabe 7',
  },
  {
    art: 'single',
    frage: 'Wie ist die Eigenkapitalrentabilität (EKR) definiert?',
    optionen: [
      { text: 'EKR = Jahresüberschuss / Eigenkapital × 100' },
      {
        text: 'EKR = Jahresüberschuss / Gesamtkapital × 100',
        warumFalsch: 'Das ist (vereinfacht) die Gesamtkapitalrentabilität; die EKR bezieht den Gewinn nur auf das Eigenkapital.',
      },
      {
        text: 'EKR = Umsatz / Eigenkapital × 100',
        warumFalsch: 'Im Zähler steht der Gewinn (Jahresüberschuss), nicht der Umsatz.',
      },
      {
        text: 'EKR = Eigenkapital / Gesamtkapital × 100',
        warumFalsch: 'Das ist die Eigenkapitalquote (Kapitalstruktur), keine Rentabilitätskennzahl.',
      },
    ],
    richtige: 0,
    erklaerung:
      'EKR = Jahresüberschuss / Eigenkapital × 100. Sie misst die Verzinsung des von den Eigentümern eingesetzten Kapitals.',
    quelle: 'Übungsblatt 3, Aufgabe 15',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne die Bilanzkennzahl ihrer Aussage/Gruppe zu.',
    paare: [
      { begriff: 'Eigenkapitalquote = EK / GK', ziel: 'Kapitalstruktur' },
      { begriff: 'Anlagenintensität = AV / GK', ziel: 'Vermögensstruktur' },
      { begriff: 'Anlagendeckung II', ziel: 'Fristenkongruenz' },
      { begriff: 'Liquidität 2. Grades', ziel: 'Zahlungsfähigkeit' },
    ],
    erklaerung:
      'EK-Quote → Kapitalstruktur (Passivseite), Anlagenintensität → Vermögensstruktur (Aktivseite), Anlagendeckung → horizontale Bilanzregeln/Fristenkongruenz, Liquiditätsgrade → kurzfristige Zahlungsfähigkeit.',
    quelle: 'Übungsblatt 3, Aufgabe 15',
  },
  {
    art: 'wahrfalsch',
    frage: 'Goldene Bilanzregel und Anlagendeckung – wahr oder falsch?',
    aussagen: [
      { text: 'Die Anlagendeckung II sollte über 100 % liegen.', wahr: true },
      { text: 'Anlagendeckung II = (EK + langfristiges FK) / Anlagevermögen × 100.', wahr: true },
      { text: 'Die goldene Bilanzregel verlangt, langfristiges Vermögen kurzfristig zu finanzieren.', wahr: false, warum: 'Genau umgekehrt: Langfristiges (Anlage-)Vermögen soll LANGfristig finanziert werden (Fristenkongruenz).' },
      { text: 'Die Liquidität 1. Grades setzt liquide Mittel ins Verhältnis zu kurzfristigen Verbindlichkeiten.', wahr: true },
    ],
    erklaerung:
      'Goldene Bilanzregel = Fristenkongruenz: langfristiges Vermögen langfristig finanzieren → Anlagendeckung II ≥ 100 %. Liquidität 1. Grades = liquide Mittel / kurzfristige Verbindlichkeiten.',
    quelle: 'Übungsblatt 3, Aufgabe 15',
  },
  {
    art: 'multi',
    frage: 'Welche Aussagen über betriebswirtschaftliche Kennzahlen treffen zu? (Mehrere richtig)',
    optionen: [
      { text: 'Sie sind quantitative, verdichtete Größen.' },
      { text: 'Der Soll-Ist-Vergleich ist ein typisches Einsatzgebiet.' },
      { text: 'Betriebsvergleich (Benchmarking) ist ein typisches Einsatzgebiet.' },
      {
        text: 'Kennzahlen ohne jeden Entscheidungsbezug sind besonders aussagekräftig.',
        warumFalsch: 'Kennzahlen sind nur sinnvoll, wenn sie zu Entscheidungen führen; ohne Entscheidungsbezug sind sie wertlos.',
      },
    ],
    richtige: [0, 1, 2],
    erklaerung:
      'Kennzahlen sind quantitative, verdichtete Größen (absolut oder als Verhältniszahl). Einsatzgebiete: Zeit-/Periodenvergleich, Bereichsvergleich, Betriebsvergleich (Benchmarking) und Soll-Ist-Vergleich.',
    quelle: 'Übungsblatt 3, Aufgabe 16',
  },
  {
    art: 'eingabe',
    frage: 'Lanz GmbH: liquide Mittel (Bank 300.000 + Kasse 80.000) = 380.000 €, kurzfristige Verbindlichkeiten 600.000 €. Wie hoch ist die Liquidität 1. Grades in Prozent? (eine Nachkommastelle)',
    loesungen: ['63,3', '63.3'],
    toleranz: 0.5,
    platzhalter: '% ',
    erklaerung: 'Liquidität 1. Grades = 380.000 / 600.000 = 0,633 = 63,3 %. Solide Barliquidität.',
    quelle: 'Übungsblatt 3, Aufgabe 17',
  },
  {
    art: 'eingabe',
    frage: 'Lanz GmbH: Jahresüberschuss 930.000 €, Eigenkapital 2.430.000 €. Wie hoch ist die Eigenkapitalrentabilität (EKR) in Prozent? (eine Nachkommastelle)',
    loesungen: ['38,3', '38.3'],
    toleranz: 0.5,
    platzhalter: '% ',
    erklaerung: 'EKR = 930.000 / 2.430.000 × 100 = 38,3 %. Hohe Rentabilität bei zugleich hoher Eigenkapitalquote (≈ 62 %).',
    quelle: 'Übungsblatt 3, Aufgabe 17',
  },
  {
    art: 'reihenfolge',
    frage: 'Lauscher-Aufgabe: Bilanzsumme 10.000 €, FK-Zins 10 %, Verschuldungsgrad (FK/EK) 3, GKR 12,5 %. Ordne die Rechenschritte zum Jahresüberschuss.',
    schritte: [
      'Kapitalstruktur: aus FK/EK = 3 → EK = 2.500 €, FK = 7.500 €',
      'Kapitalgewinn = 12,5 % × 10.000 = 1.250 €',
      'FK-Zinsen = 10 % × 7.500 = 750 €',
      'Jahresüberschuss = 1.250 − 750 = 500 €',
    ],
    erklaerung:
      'Aus VG = FK/EK = 3 und EK + FK = 10.000 folgt 4·EK = 10.000 → EK = 2.500, FK = 7.500. Der Kapitalgewinn (vor FK-Zinsen) ist 1.250 €; nach Abzug der FK-Zinsen (750 €) bleibt ein Jahresüberschuss von 500 €.',
    quelle: 'Übungsblatt 3, Aufgabe 18',
  },
  {
    art: 'single',
    frage: 'Was bezeichnet der „Kapitalgewinn" in den Rentabilitätsaufgaben?',
    optionen: [
      { text: 'Den Gewinn VOR Abzug der Fremdkapitalzinsen (= GKR × Gesamtkapital)' },
      {
        text: 'Den Jahresüberschuss nach Steuern',
        warumFalsch: 'Der Jahresüberschuss ergibt sich erst NACH Abzug der FK-Zinsen vom Kapitalgewinn.',
      },
      {
        text: 'Den Gewinn je Aktie',
        warumFalsch: 'Das wäre eine aktienbezogene Kennzahl, nicht der Kapitalgewinn der Aufgaben.',
      },
      {
        text: 'Die ausgeschüttete Dividende',
        warumFalsch: 'Die Dividende ist eine Gewinnverwendung, nicht der erwirtschaftete Kapitalgewinn.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Der Kapitalgewinn ist der Gewinn, den das gesamte Kapital erwirtschaftet hat – VOR den FK-Zinsen (Kapitalgewinn = GKR × Gesamtkapital). Erst nach Abzug der FK-Zinsen ergibt sich der Jahresüberschuss.',
    quelle: 'Übungsblatt 3, Aufgabe 18',
  },
  {
    art: 'single',
    frage: 'Wie lautet die Leverage-Formel für die Eigenkapitalrentabilität?',
    optionen: [
      { text: 'EKR = GKR + (GKR − FK-Zins) × (FK / EK)' },
      {
        text: 'EKR = GKR + (FK-Zins − GKR) × (FK / EK)',
        warumFalsch: 'Im Klammerausdruck steht (GKR − FK-Zins), nicht umgekehrt – sonst hätte ein positiver Hebel das falsche Vorzeichen.',
      },
      {
        text: 'EKR = GKR × (EK / FK)',
        warumFalsch: 'Diese Form gibt den Leverage-Effekt nicht wieder; der Hebel hängt vom Verschuldungsgrad FK/EK und der Zinsdifferenz ab.',
      },
      {
        text: 'EKR = (GKR + FK-Zins) / 2',
        warumFalsch: 'Der Leverage-Effekt ist kein einfacher Mittelwert aus GKR und FK-Zins.',
      },
    ],
    richtige: 0,
    erklaerung:
      'EKR = GKR + (GKR − FK-Zins) × (FK/EK). Solange GKR > FK-Zins ist, hebelt steigendes Fremdkapital die EKR nach oben; bei GKR < FK-Zins wirkt der Hebel nach unten.',
    quelle: 'Übungsblatt 3, Aufgabe 19',
  },
  {
    art: 'wahrfalsch',
    frage: 'Leverage-Effekt – wahr oder falsch?',
    aussagen: [
      { text: 'Solange die GKR über dem FK-Zins liegt, steigert mehr Fremdkapital die EKR.', wahr: true },
      { text: 'Liegt die GKR unter dem FK-Zins, kann die EKR negativ werden.', wahr: true },
      { text: 'Ein höherer Verschuldungsgrad steigert nur die Chancen, nicht das Risiko.', wahr: false, warum: 'Ein höherer Verschuldungsgrad steigert Chance UND Risiko gleichermaßen – der Hebel wirkt in beide Richtungen.' },
      { text: 'Der Leverage-Effekt beruht auf der Differenz (GKR − FK-Zins).', wahr: true },
    ],
    erklaerung:
      'Der Leverage-Effekt ist eine Hebelwirkung: Die Zinsdifferenz (GKR − FK-Zins) mal Verschuldungsgrad bestimmt den Effekt. Positiv bei GKR > FK-Zins, negativ bei GKR < FK-Zins. Chancen und Risiken steigen gemeinsam.',
    quelle: 'Übungsblatt 3, Aufgabe 19',
  },
  {
    art: 'eingabe',
    frage: '„Unglück AG": Umsatz 360.000 €, Materialaufwand 144.000 €, Personalaufwand 108.000 €, Abschreibungen 90.000 €. Wie hoch ist der Kapitalgewinn (Gewinn vor FK-Zinsen) in €?',
    loesungen: ['18000', '18.000', '18000 €'],
    toleranz: 1,
    platzhalter: '€ ',
    erklaerung: 'Kapitalgewinn = 360.000 − 144.000 − 108.000 − 90.000 = 18.000 €. Erst danach werden die FK-Zinsen abgezogen (→ Jahresüberschuss 12.000 €).',
    quelle: 'Übungsblatt 3, Aufgabe 21',
  },
  {
    art: 'eingabe',
    frage: '„Unglück AG": Kapitalgewinn 18.000 €, Gesamtkapital 120.000 €. Wie hoch ist die Gesamtkapitalrentabilität (GKR) in Prozent?',
    loesungen: ['15', '15,0', '15.0', '15 %'],
    toleranz: 0.3,
    platzhalter: '% ',
    erklaerung: 'GKR = Kapitalgewinn / GK × 100 = 18.000 / 120.000 = 15 %. Mit EKR 30 % und FK-Zins 7,5 % liegt ein positiver Leverage vor.',
    quelle: 'Übungsblatt 3, Aufgabe 21',
  },
  {
    art: 'single',
    frage: '„Pleite und Co.": GKR 8 %, FK-Zins 9 %, Verschuldungsgrad 2. Wie wirkt sich das auf die Eigenkapitalrentabilität aus?',
    optionen: [
      { text: 'Negativer Leverage: die EKR (6 %) liegt UNTER der GKR' },
      {
        text: 'Positiver Leverage: die EKR liegt über der GKR',
        warumFalsch: 'Positiver Leverage entsteht nur, wenn die GKR über dem FK-Zins liegt – hier ist der FK-Zins (9 %) höher als die GKR (8 %).',
      },
      {
        text: 'Kein Effekt: EKR = GKR = 8 %',
        warumFalsch: 'Bei Verschuldung und einer Zinsdifferenz ungleich null weicht die EKR stets von der GKR ab.',
      },
      {
        text: 'Die EKR steigt auf 12 %',
        warumFalsch: 'Mit EKR = 8 + (8 − 9) × 2 = 6 % sinkt die EKR unter die GKR.',
      },
    ],
    richtige: 0,
    erklaerung:
      'EKR = GKR + (GKR − FK-Zins) × (FK/EK) = 8 + (8 − 9) × 2 = 6 %. Weil der FK-Zins (9 %) über der GKR (8 %) liegt, drückt die Verschuldung die EKR unter die GKR (negativer Leverage).',
    quelle: 'Übungsblatt 3, Aufgabe 20',
  },

  // =========================================================================
  // Kapitel 4 – Rechtsformen & Mitbestimmung
  // =========================================================================
  {
    art: 'kategorien',
    frage: 'Ordne die Rechtsformen ihrer Hauptgruppe zu.',
    kategorien: ['Personengesellschaft', 'Kapitalgesellschaft'],
    items: [
      { text: 'OHG', kategorie: 'Personengesellschaft' },
      { text: 'KG', kategorie: 'Personengesellschaft' },
      { text: 'GbR', kategorie: 'Personengesellschaft' },
      { text: 'GmbH', kategorie: 'Kapitalgesellschaft' },
      { text: 'AG', kategorie: 'Kapitalgesellschaft' },
      { text: 'UG (haftungsbeschränkt)', kategorie: 'Kapitalgesellschaft' },
    ],
    erklaerung:
      'Personengesellschaften (GbR, OHG, KG) beruhen auf der persönlichen Mitarbeit/Haftung der Gesellschafter. Kapitalgesellschaften (GmbH, UG, AG) sind juristische Personen mit beschränkter Haftung auf das Gesellschaftsvermögen.',
    quelle: 'Übungsblatt 4, Aufgabe 22',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jede Rechtsform ihrem maßgeblichen Gesetz zu.',
    paare: [
      { begriff: 'GbR', ziel: 'BGB' },
      { begriff: 'OHG / KG', ziel: 'HGB' },
      { begriff: 'GmbH (und UG)', ziel: 'GmbHG' },
      { begriff: 'AG / KGaA', ziel: 'AktG' },
    ],
    erklaerung:
      'GbR → §§ 705 ff. BGB; OHG/KG → §§ 105 ff. / 161 ff. HGB; GmbH und UG → GmbHG (UG: § 5a GmbHG); AG und KGaA → AktG. Genossenschaft → GenG.',
    quelle: 'Übungsblatt 4, Aufgabe 22',
  },
  {
    art: 'single',
    frage: 'Wie hoch ist das gesetzliche Mindeststammkapital einer GmbH?',
    optionen: [
      { text: '25.000 € (bei Gründung mind. 12.500 € eingezahlt)' },
      {
        text: '1 €',
        warumFalsch: '1 € ist das Mindestkapital der UG (haftungsbeschränkt), nicht der GmbH.',
      },
      {
        text: '50.000 €',
        warumFalsch: '50.000 € ist das Grundkapital der AG, nicht der GmbH.',
      },
      {
        text: 'Es gibt kein Mindestkapital',
        warumFalsch: 'Kein Mindestkapital gilt für Einzelunternehmen, OHG und KG – die GmbH braucht 25.000 € Stammkapital.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Die GmbH braucht 25.000 € Stammkapital (bei Gründung mind. 12.500 € eingezahlt). UG: 1 €; AG: 50.000 €; EU/OHG/KG: kein Mindestkapital.',
    quelle: 'Übungsblatt 4, Aufgabe 23',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jeder Rechtsform ihr vorgeschriebenes Mindestkapital zu.',
    paare: [
      { begriff: 'UG (haftungsbeschränkt)', ziel: '1 €' },
      { begriff: 'GmbH', ziel: '25.000 €' },
      { begriff: 'AG', ziel: '50.000 €' },
      { begriff: 'Einzelunternehmen', ziel: 'kein Mindestkapital' },
    ],
    erklaerung:
      'UG: 1 € (Thesaurierungspflicht bis 25.000 €), GmbH: 25.000 €, AG: 50.000 €. Für Einzelunternehmen, OHG und KG gibt es kein gesetzliches Mindestkapital.',
    quelle: 'Übungsblatt 4, Aufgabe 23',
  },
  {
    art: 'wahrfalsch',
    frage: 'Haftung in den Rechtsformen – wahr oder falsch?',
    aussagen: [
      { text: 'Beim Einzelunternehmen haftet der Inhaber unbeschränkt mit seinem Privatvermögen.', wahr: true },
      { text: 'In der KG haftet der Kommanditist nur bis zur Höhe seiner Einlage.', wahr: true },
      { text: 'In der GmbH haften die Gesellschafter unbeschränkt mit ihrem Privatvermögen.', wahr: false, warum: 'In der GmbH ist die Haftung auf das Gesellschaftsvermögen beschränkt – das ist gerade ihr Vorteil.' },
      { text: 'In der OHG haften alle Gesellschafter unbeschränkt, persönlich und solidarisch.', wahr: true },
    ],
    erklaerung:
      'EU und OHG: unbeschränkte persönliche Haftung. KG: Komplementär unbeschränkt, Kommanditist nur bis zur Einlage. UG/GmbH/AG: Haftung auf das Gesellschaftsvermögen beschränkt.',
    quelle: 'Übungsblatt 4, Aufgabe 23',
  },
  {
    art: 'single',
    frage: 'Welche Rechtsform wird oft als „Mini-GmbH" bezeichnet, weil sie nur 1 € Mindestkapital erfordert?',
    optionen: [
      { text: 'UG (haftungsbeschränkt)' },
      {
        text: 'GbR',
        warumFalsch: 'Die GbR ist eine Personengesellschaft ohne Mindestkapital, aber keine „Mini-GmbH" und ohne Haftungsbeschränkung.',
      },
      {
        text: 'KGaA',
        warumFalsch: 'Die KGaA ist eine Kapitalgesellschaft mit Aktien und keine günstige Gründungsform für Kleinstkapital.',
      },
      {
        text: 'OHG',
        warumFalsch: 'Die OHG ist eine Personengesellschaft mit unbeschränkter Haftung, keine „Mini-GmbH".',
      },
    ],
    richtige: 0,
    erklaerung:
      'Die UG (haftungsbeschränkt) ist eine Variante der GmbH mit nur 1 € Mindestkapital und Thesaurierungspflicht (Rücklagenbildung bis 25.000 €). Sie ist eine günstige Gründungsform mit beschränkter Haftung.',
    quelle: 'Übungsblatt 4, Aufgabe 23',
  },
  {
    art: 'single',
    frage: 'Warum sinkt in Deutschland langfristig der gewerkschaftliche Organisationsgrad? Welcher ist der zentrale ökonomische Grund?',
    optionen: [
      { text: 'Das Trittbrettfahrer-Problem: Tarifabschlüsse gelten faktisch auch für Nichtmitglieder' },
      {
        text: 'Gewerkschaften sind gesetzlich verboten',
        warumFalsch: 'Gewerkschaften sind durch die Koalitionsfreiheit (Art. 9 GG) geschützt, keineswegs verboten.',
      },
      {
        text: 'Die Zahl der Industriebetriebe steigt stark',
        warumFalsch: 'Es ist umgekehrt: Der Rückgang industrieller Großbetriebe (klassische Hochburgen) schwächt die Gewerkschaften.',
      },
      {
        text: 'Mitgliedsbeiträge werden vom Staat erstattet',
        warumFalsch: 'Eine staatliche Beitragserstattung gibt es nicht; gerade die Beiträge sind ein Grund für das Trittbrettfahrer-Verhalten.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Der zentrale ökonomische Grund ist das Trittbrettfahrer-Problem: Wer nicht zahlt, profitiert dennoch vom Tarifabschluss. Weitere Gründe: Struktur-/Branchenwandel, atypische Beschäftigung, Wertewandel, Demografie, Globalisierung.',
    quelle: 'Übungsblatt 4, Aufgabe 10',
  },
  {
    art: 'multi',
    frage: 'Bei der Volkswagen AG: Welche Elemente prägen die Mitbestimmung? (Mehrere richtig)',
    optionen: [
      { text: 'Betriebsrat auf Betriebsebene (betriebliche Mitbestimmung, BetrVG)' },
      { text: 'Paritätisch besetzter Aufsichtsrat (MitbestG 1976)' },
      { text: 'Sonderrechte des Landes Niedersachsen durch das VW-Gesetz' },
      {
        text: 'Der Vorstand wählt die Arbeitnehmervertreter im Aufsichtsrat',
        warumFalsch: 'Die Arbeitnehmervertreter werden von der Belegschaft gewählt; zudem bestellt der Aufsichtsrat den Vorstand, nicht umgekehrt.',
      },
    ],
    richtige: [0, 1, 2],
    erklaerung:
      'Betriebliche Mitbestimmung (Betriebsrat, BetrVG) und unternehmerische Mitbestimmung (paritätischer Aufsichtsrat nach MitbestG 1976, Arbeitsdirektor) treffen bei VW auf die VW-Gesetz-Besonderheit (Land Niedersachsen ~20 % mit Sperrminorität).',
    quelle: 'Übungsblatt 4, Aufgabe 24',
  },
  {
    art: 'wahrfalsch',
    frage: 'Mitbestimmung – wahr oder falsch?',
    aussagen: [
      { text: 'Die betriebliche Mitbestimmung ist im Betriebsverfassungsgesetz (BetrVG) geregelt.', wahr: true },
      { text: 'Der Aufsichtsrat bestellt den Vorstand.', wahr: true },
      { text: 'Die unternehmerische Mitbestimmung findet im Aufsichtsrat statt.', wahr: true },
      { text: 'Bei einer AG mit über 2.000 Beschäftigten gibt es keine Mitbestimmung.', wahr: false, warum: 'Gerade ab > 2.000 Beschäftigten gilt die paritätische Mitbestimmung nach dem MitbestG 1976.' },
    ],
    erklaerung:
      'Betriebsebene → Betriebsrat (BetrVG). Unternehmensebene → Aufsichtsrat, der den Vorstand bestellt. Ab > 2.000 Beschäftigten gilt das MitbestG 1976 mit paritätischer Besetzung des Aufsichtsrats.',
    quelle: 'Übungsblatt 4, Aufgabe 24',
  },

  // =========================================================================
  // Kapitel 5 – Ziele im Unternehmen
  // =========================================================================
  {
    art: 'kategorien',
    frage: 'Ordne die Ziele ihrer Zielkategorie zu (Leistungs-, Finanz- oder Erfolgsziele).',
    kategorien: ['Leistungsziel', 'Finanzziel', 'Erfolgsziel'],
    items: [
      { text: 'Marktanteil erhöhen', kategorie: 'Leistungsziel' },
      { text: 'Produktqualität verbessern', kategorie: 'Leistungsziel' },
      { text: 'Liquidität sichern', kategorie: 'Finanzziel' },
      { text: 'Eigenkapitalquote erhöhen', kategorie: 'Finanzziel' },
      { text: 'Gewinn maximieren', kategorie: 'Erfolgsziel' },
      { text: 'Rentabilität steigern', kategorie: 'Erfolgsziel' },
    ],
    erklaerung:
      'Leistungsziele (Sachziele) betreffen das „Was" (Marktanteil, Qualität). Finanzziele sichern Zahlungsfähigkeit/Finanzierung (Liquidität, EK-Quote). Erfolgsziele (Formalziele) betreffen den wertmäßigen Erfolg (Gewinn, Rentabilität).',
    quelle: 'Übungsblatt 5, Aufgabe 28',
  },
  {
    art: 'single',
    frage: 'Welche Kennzahl ist ein typisches ERFOLGSziel (Formalziel)?',
    optionen: [
      { text: 'Eigenkapitalrentabilität (EKR)' },
      {
        text: 'Liquidität 2. Grades',
        warumFalsch: 'Die Liquidität ist ein Finanzziel (Zahlungsfähigkeit), kein Erfolgsziel.',
      },
      {
        text: 'Absatzmenge',
        warumFalsch: 'Die Absatzmenge ist ein Leistungsziel (Sachziel), kein Erfolgsziel.',
      },
      {
        text: 'Kundenzufriedenheit',
        warumFalsch: 'Kundenzufriedenheit zählt zu den Leistungszielen, nicht zu den wertmäßigen Erfolgszielen.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Erfolgsziele (Formalziele) betreffen den wertmäßigen Erfolg: Gewinn, Rentabilität (EKR/GKR), Umsatzrendite, Wirtschaftlichkeit. Liquidität ist ein Finanzziel, Absatzmenge/Kundenzufriedenheit sind Leistungsziele.',
    quelle: 'Übungsblatt 5, Aufgabe 28',
  },
  {
    art: 'zuordnung',
    frage: 'Anreiz-Beitrags-Theorie: Ordne jedem Stakeholder seine typische Sanktionsmöglichkeit zu.',
    paare: [
      { begriff: 'Eigentümer', ziel: 'Kapitalabzug / Aktienverkauf' },
      { begriff: 'Mitarbeiter', ziel: 'Streik / Kündigung' },
      { begriff: 'Banken', ziel: 'Kreditkündigung' },
      { begriff: 'Kunden', ziel: 'Kaufverweigerung / Boykott' },
    ],
    erklaerung:
      'Nach der Anreiz-Beitrags-Theorie (March/Simon) leistet jede Gruppe ihre Beiträge nur, solange die Anreize sie aufwiegen. Reichen die Anreize nicht, entzieht sie die Beiträge (Sanktion): Eigentümer → Kapitalabzug, Mitarbeiter → Streik, Banken → Kreditkündigung, Kunden → Boykott.',
    quelle: 'Übungsblatt 5, Aufgabe 25',
  },
  {
    art: 'single',
    frage: 'Worum geht es in der Anreiz-Beitrags-Theorie (March/Simon)?',
    optionen: [
      { text: 'Jeder Teilnehmer leistet seine Beiträge nur, solange die erhaltenen Anreize sie mindestens aufwiegen' },
      {
        text: 'Das Management darf die Ziele allein und ohne Rücksicht auf andere Gruppen festlegen',
        warumFalsch: 'Gerade umgekehrt: Das Management muss die Ziele so setzen, dass alle bedeutsamen Gruppen genug Anreize erhalten.',
      },
      {
        text: 'Nur die Eigentümer beeinflussen die Zielbildung',
        warumFalsch: 'Auch externe Gruppen (Banken, Kunden, Lieferanten, Staat) und weitere interne Gruppen nehmen Einfluss.',
      },
      {
        text: 'Anreize sind für die Zielbildung bedeutungslos',
        warumFalsch: 'Anreize sind das Kernstück der Theorie – ohne ausreichende Anreize entziehen die Gruppen ihre Beiträge.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Kernidee: Beitrag nur gegen ausreichenden Anreiz. Das Management muss die Ziele so austarieren, dass alle wichtigen Stakeholder genügend Anreize erhalten – sonst entziehen sie ihre Beiträge und gefährden den Fortbestand.',
    quelle: 'Übungsblatt 5, Aufgabe 25',
  },
  {
    art: 'single',
    frage: 'Was versteht man unter der Unternehmensphilosophie?',
    optionen: [
      { text: 'Die grundlegenden Wertvorstellungen und Normen, die Selbstverständnis und Verhalten eines Unternehmens prägen' },
      {
        text: 'Die jährliche Bilanz des Unternehmens',
        warumFalsch: 'Die Bilanz ist ein Instrument des Rechnungswesens, kein Wertesystem.',
      },
      {
        text: 'Die tatsächlich gelebte Unternehmenskultur',
        warumFalsch: 'Die Philosophie ist das geplante Leitbild; die Kultur ist das tatsächlich Gelebte – beides ist nicht dasselbe.',
      },
      {
        text: 'Der Organisationsplan mit allen Stellen',
        warumFalsch: 'Das ist das Organigramm/die Aufbauorganisation, nicht die Wertebasis des Unternehmens.',
      },
    ],
    richtige: 0,
    erklaerung:
      'Die Unternehmensphilosophie ist das Wertesystem/Selbstbild eines Unternehmens, oft im Leitbild (Mission Statement) verschriftlicht. Sie ist von der tatsächlich gelebten Kultur zu unterscheiden.',
    quelle: 'Übungsblatt 5, Aufgabe 26',
  },
  {
    art: 'multi',
    frage: 'Welche Zwecke verfolgt die Leitung mit der Offenlegung der Unternehmensphilosophie? (Mehrere richtig)',
    optionen: [
      { text: 'Nach innen: Orientierung, Identifikation und Motivation der Mitarbeiter' },
      { text: 'Nach außen: Image- und Vertrauensbildung, Legitimation' },
      { text: 'Differenzierung im Wettbewerb und Anziehung von Mitarbeitern/Investoren' },
      {
        text: 'Umgehung von Steuern',
        warumFalsch: 'Die Offenlegung eines Leitbilds hat mit Steuergestaltung nichts zu tun.',
      },
    ],
    richtige: [0, 1, 2],
    erklaerung:
      'Nach innen: Orientierung, Identifikation, Motivation, Verhaltensrahmen. Nach außen: Image/Vertrauen, Legitimation, Differenzierung, Employer Branding. Kurz: Sinnstiftung, Integration und Legitimation.',
    quelle: 'Übungsblatt 5, Aufgabe 26',
  },
  {
    art: 'zuordnung',
    frage: 'Drei-Säulen-Modell: Ordne jedes Konfliktbeispiel den beiden betroffenen Zieldimensionen zu.',
    paare: [
      { begriff: 'Gewinn vs. teurer Umweltschutz (CO₂-Filter)', ziel: 'ökonomisch ↔ ökologisch' },
      { begriff: 'Kostensenkung durch Personalabbau vs. faire Löhne', ziel: 'ökonomisch ↔ sozial' },
      { begriff: 'Arbeitsplätze in der Braunkohle vs. Klimaschutz', ziel: 'sozial ↔ ökologisch' },
    ],
    erklaerung:
      'Klassische Zielkonflikte im Drei-Säulen-Modell der Nachhaltigkeit („magisches Dreieck"). Es gibt aber auch komplementäre Beziehungen, z. B. senkt Energieeffizienz zugleich Kosten und Umweltbelastung.',
    quelle: 'Übungsblatt 5, Aufgabe 27',
  },
  {
    art: 'wahrfalsch',
    frage: 'Ziele und Zielbeziehungen – wahr oder falsch?',
    aussagen: [
      { text: 'Zwischen ökonomischen und ökologischen Zielen kann es Konflikte geben.', wahr: true },
      { text: 'Es gibt auch komplementäre (sich ergänzende) Zielbeziehungen.', wahr: true },
      { text: 'Leistungsziele (Sachziele) sind dasselbe wie Erfolgsziele (Formalziele).', wahr: false, warum: 'Leistungsziele betreffen das „Was" der Leistung (Sachziel), Erfolgsziele den wertmäßigen Erfolg (Formalziel) – das ist nicht dasselbe.' },
      { text: 'Energieeffizienz kann Kosten und Umweltbelastung gleichzeitig senken.', wahr: true },
    ],
    erklaerung:
      'Ziele können konkurrierend (Konflikt), komplementär (sich ergänzend) oder indifferent sein. Leistungs- (Sach-) und Erfolgsziele (Formalziele) sind klar zu unterscheiden.',
    quelle: 'Übungsblatt 5, Aufgaben 27 & 28',
  },
]
