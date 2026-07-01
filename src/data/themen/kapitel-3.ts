import type { Thema } from '../../types'

// Kapitel 3 „Mengen und Werte" – vollständig aus dem Lehrer-Foliensatz
// (PP-Folien_BWL_2025.pdf, Folien 38–44) neu geschrieben, ergänzt um die
// im Übungsbegleiter (Kap. 3) und in den Altklausuren geprüften Details.
// Text wird über FormelText gerendert: **fett** für Fachbegriffe, Brüche als
// [[Zähler|Nenner]]. Die ausführlichen Kennzahlen-FORMELN mit Rechenbeispielen
// stehen bewusst in den Formel-Karten (src/data/formeln.ts) – hier nur Einordnung.
export const kapitel: Thema = {
  titel: '3 Mengen und Werte',
  beschreibung:
    'Nach dem Motto „Was Du nicht messen kannst, kannst Du nicht lenken" (Peter F. Drucker) geht es in diesem Kapitel darum, den Betrieb **wertmäßig** abzubilden und **messbar** zu machen. Zwei Werkzeuge stehen im Mittelpunkt: der **Jahresabschluss** (Bilanz und GuV) als geordnete Gegenüberstellung von Vermögen und Kapital sowie die **betriebswirtschaftlichen Kennzahlen**, die aus diesen Zahlen verdichtete Steuerungsinformationen gewinnen.',
  abschnitte: [
    {
      titel: '3.1 Jahresabschluss',
      beschreibung:
        'Der **Jahresabschluss** ist die zusammenfassende Rechenwerk-Darstellung eines Geschäftsjahres. Er besteht aus **Bilanz** und **Gewinn- und Verlustrechnung (GuV)** sowie – bei größeren bzw. bestimmten Gesellschaften – zusätzlich aus **Anhang** und **Lagebericht**. Bilanz und GuV sind eng verzahnt: Das Ergebnis der GuV, der **Jahresüberschuss** (bzw. **Jahresfehlbetrag**), fließt als Position in das Eigenkapital der Handelsbilanz ein. Damit übersetzt der Jahresabschluss den gesamten betrieblichen Prozess in Geldeinheiten und macht ihn vergleichbar, prüfbar und lenkbar.',
      punkte: [
        'Der **Jahresabschluss** besteht aus **Bilanz**, **Gewinn- und Verlustrechnung (GuV)** sowie eventuell **Anhang** und **Lagebericht**.',
        'Zusammenhang der Teile: Das **Ergebnis der GuV** – der **Jahresüberschuss** – geht in die **Handelsbilanz** (in das Eigenkapital) ein; Bilanz und GuV sind also miteinander verknüpft.',
        'Die **Bilanz** ist eine **Bestandsrechnung** (Zeitpunktbetrachtung, „Stichtag"): Sie zeigt, welches Vermögen und welches Kapital am Bilanzstichtag vorhanden sind.',
        'Die **GuV** ist eine **Stromrechnung** (Zeitraumbetrachtung, „Periode"): Sie stellt die **Aufwendungen** und **Erträge** eines Geschäftsjahres gegenüber und ermittelt als Saldo den Erfolg.',
        'Definition der Bilanz – **formell**: eine „zweiseitige, betragsmäßig ausgeglichene und nach bestimmten Kriterien gegliederte Gegenüberstellung nomineller und realer Vermögenswerte (**Aktiva**) und abstrakter Wertansprüche (**Passiva**)".',
        'Definition der Bilanz – **materiell**: ein „Instrument zur wertmäßigen Abbildung und Abrechnung des betrieblichen Prozesses mit Informations- und Gestaltungsfunktion".',
        '„Betragsmäßig ausgeglichen" bedeutet: Die **Summe der Aktiva** ist stets gleich der **Summe der Passiva** (Bilanzgleichung); beide Seiten ergeben dieselbe **Bilanzsumme** (= Gesamtkapital).',
        'Die **Aktivseite** (linke Seite) zeigt die **Mittelverwendung** – wofür das Kapital eingesetzt wurde, d. h. das konkret vorhandene Vermögen.',
        'Die **Passivseite** (rechte Seite) zeigt die **Mittelherkunft** – woher das Kapital stammt, d. h. Eigenkapital und Fremdkapital (die abstrakten Wertansprüche gegen das Unternehmen).',
        'Gliederungslogik der **Aktivseite** (nach HGB): von oben nach unten von **langfristig** (schwer liquidierbar) zu **kurzfristig** (leicht liquidierbar), also **Anlagevermögen** vor **Umlaufvermögen**.',
        'Das **Anlagevermögen** (A.) dient dem Betrieb dauerhaft und gliedert sich in I. **Immaterielle Vermögensgegenstände** (z. B. Patente, Lizenzen), II. **Sachanlagen** (z. B. Grundstücke, Maschinen) und III. **Finanzanlagen** (z. B. Beteiligungen).',
        'Das **Umlaufvermögen** (B.) ist kurzfristig gebunden und gliedert sich in I. **Vorräte**, II. **Forderungen und sonstige Vermögensgegenstände**, III. **Wertpapiere** und IV. **Flüssige Mittel** (Kasse, Bankguthaben).',
        'Gliederungslogik der **Passivseite**: von oben nach unten von **Eigenkapital** über **Rückstellungen** zu **Verbindlichkeiten**; die Reihenfolge folgt zunehmender „Fremdheit" und (grob) abnehmender Fristigkeit.',
        'Das **Eigenkapital** (A.) umfasst u. a. gezeichnetes Kapital und Rücklagen und schließt den **Gewinn-/Verlustvortrag** sowie den **Jahresüberschuss/Jahresfehlbetrag aus der GuV** ein.',
        '**Rückstellungen** (B.) sind Verpflichtungen, die dem Grund oder der Höhe bzw. dem Zeitpunkt nach ungewiss sind (z. B. Pensions- oder Steuerrückstellungen); sie stehen auf der **Passivseite zwischen Eigenkapital und Verbindlichkeiten** und werden meist dem **Fremdkapital** zugerechnet.',
        '**Verbindlichkeiten** (C.) sind die eindeutig feststehenden Schulden (**Fremdkapital**), z. B. Bankkredite und Lieferantenverbindlichkeiten.',
        '**Rechnungsabgrenzungsposten (RAP)** stehen auf beiden Seiten (Aktiva C. bzw. Passiva D.) und ordnen Zahlungen periodengerecht dem richtigen Geschäftsjahr zu.',
        'Die drei **Bilanzzwecke**: **Rechenschaft und Rechnungslegung**, **Informationszweck** und **Zahlungsbemessungszweck** (Grundlage z. B. für Ausschüttung und Steuern).',
        'Zuordnung Zweck ↔ Stakeholder (typische Prüfungsfrage): **Rechenschaft** v. a. für **Eigentümer/Anteilseigner**, **Information** v. a. für **Gläubiger, Banken und Investoren**, **Zahlungsbemessung** v. a. für **Finanzamt/Fiskus** (Steuern) und Anteilseigner (Dividende).',
        'Grundlegendes Problem jeder Bilanzierung: die **Aktivierung des „Humanvermögens"** – das eingespielte Team mit seinen Fähigkeiten, seinem Wissen und seiner Motivation schafft Wert, lässt sich aber schlecht messen und darf nach **HGB** (Vorsichts-/Objektivierungsprinzip) grundsätzlich **nicht als Vermögensgegenstand aktiviert** werden.',
        'Seit **2005** müssen **kapitalmarktorientierte Unternehmen** ihren Konzernabschluss zusätzlich nach **IFRS** (International Financial Reporting Standards) aufstellen.',
        'Unterschiede **HGB ↔ IFRS**: Das HGB ist am **Gläubigerschutz** orientiert und dient v. a. **Rechenschaft und Zahlungsbemessung**; die IFRS stellen die **Information** in den Vordergrund („**true and fair view**").',
        'Weiterer Unterschied: Bei **stillen Reserven**, **Aufwandsrückstellungen** und der Bildung von **Goodwill** (Geschäfts-/Firmenwert) ist das **HGB restriktiver** (vorsichtiger) als IFRS.',
        'Probleme der Doppelspurigkeit: bis zu **drei Bilanzen** (HGB, IFRS, Steuerbilanz), perspektivisch **höhere Steuern** und **Instabilitäten** durch marktwertnahe IFRS-Bewertung.',
        'Grundlage der wertmäßigen Erfassung sind **Inventur** (die körperliche Bestandsaufnahme durch Zählen, Messen, Wiegen am Stichtag) und das daraus resultierende **Inventar** (das ausführliche, geordnete Bestandsverzeichnis nach Art, Menge und Wert); aus dem Inventar wird die zusammengefasste Bilanz abgeleitet.',
      ],
    },
    {
      titel: '3.2 Betriebswirtschaftliche Kennzahlen',
      beschreibung:
        '**Betriebswirtschaftliche Kennzahlen** sind „quantitative Größen, die in konzentrierter Form Informationen zur Führung von Unternehmen bereitstellen". Sie verdichten die umfangreichen Zahlen des Jahresabschlusses zu wenigen, aussagekräftigen Verhältniszahlen und machen so den Erfolg, die Struktur und die Zahlungsfähigkeit eines Betriebs auf einen Blick beurteilbar und vergleichbar. Dieser Abschnitt ordnet die **Arten** von Kennzahlen ein und erklärt, **wozu** sie dienen – die vollständigen **Formeln mit Rechenbeispielen** finden sich in den Formel-Karten.',
      punkte: [
        'Definition: **Kennzahlen** sind „quantitative Größen, die in konzentrierter Form Informationen zur Führung von Unternehmen bereitstellen".',
        'Drei **Eigenschaften** von Kennzahlen: **Maßgrößencharakter** (sie messen betriebliche Sachverhalte in Zahlen), **Verdichtungscharakter** (sie fassen viele Einzeldaten zu einer Größe zusammen) und **Entscheidungsbezug** (sie dienen als Grundlage für Führungsentscheidungen).',
        'Man unterscheidet **absolute Kennzahlen** (Einzelwerte oder Summen, z. B. Umsatz, Gewinn, Bilanzsumme) und **Verhältniskennzahlen** (Relationen zweier Größen, z. B. Rentabilitäten und Quoten) – letztere sind für Vergleiche besonders aussagekräftig.',
        'Die vier **Einsatzgebiete** von Kennzahlen: a) **Zeit- und Periodenvergleich** – Vergleich gleicher Kennzahlen im Zeitablauf zur Beurteilung der inneren Entwicklung.',
        'b) **Bereichs- und Abteilungsvergleich** – Vergleich der Kennzahlen verschiedener Unternehmensbereiche untereinander.',
        'c) **Betriebsvergleich** – Vergleich mit anderen Betrieben derselben Branche (englischer Fachbegriff: **Benchmarking**); funktioniert in der Praxis oft schlecht, weil Betriebe unterschiedlich bilanzieren, verschieden groß und selten voll vergleichbar sind.',
        'd) **Soll-Ist-Vergleich** – Gegenüberstellung von vorgegebenen **Richtgrößen** (Plan) mit den tatsächlich erreichten Werten.',
        'Erste Kennzahlenart – **Wirtschaftlichkeit**: setzt Leistung bzw. Ertrag ins Verhältnis zum Aufwand (bzw. Soll- zu Ist-Kosten) und misst wertmäßig, ob **wirtschaftlich** gearbeitet wird; ein Wert über 1 ist anzustreben. Ausführliche Formel: Formel-Karten.',
        'Zweite Kennzahlenart – **Produktivität**: setzt die (mengenmäßige) Ausbringung ins Verhältnis zum Faktoreinsatz, z. B. **Arbeitsproduktivität** = [[Produktionsmenge|eingesetzte Arbeit]]; sie ist eine **technisch-mengenmäßige** Größe und sagt für sich allein nichts über den Gewinn aus.',
        'Dritte Kennzahlenart – **Rentabilitäten** (Erfolgskennzahlen): Sie setzen den Gewinn ins Verhältnis zu einer Bezugsgröße und zeigen die **Verzinsung** des eingesetzten Kapitals bzw. des Umsatzes an; dazu zählen **Umsatzrentabilität**, **Eigenkapitalrentabilität (EKR)** und **Gesamtkapitalrentabilität (GKR)**.',
        'Merksatz zur Rentabilität (aus den Klausuren): im Regelfall sollte gelten **EKR > GKR > Fremdkapitalzinssatz**; eine Umsatzrendite gilt ab etwa 5 % als solide, Kapitalrenditen möglichst über 10 %.',
        '**Leverage-Effekt** (Hebelwirkung): Solange die **GKR über dem Fremdkapitalzins** liegt, steigert zusätzliches Fremdkapital die **Eigenkapitalrentabilität** – Fremdfinanzierung wirkt dann als „Hebel" auf die EK-Rendite; kehrt sich das Verhältnis um, wirkt der Hebel negativ.',
        'Vierte Kennzahlenart – **Liquidität** (Zahlungsfähigkeit): misst, ob ein Unternehmen seinen fälligen Zahlungsverpflichtungen nachkommen kann; man unterscheidet **Liquidität I., II. und III. Grades** je nach einbezogenem Umlaufvermögen. Fehlende Zahlungsfähigkeit führt zur **Insolvenz**.',
        'Kennzahlen der **Kapital- und Vermögensstruktur** ergänzen die Analyse: **Eigenkapitalquote** und **Verschuldungsgrad/-quote** (Struktur der Passivseite) sowie **Anlageintensität** und **Anlagendeckung I und II** (Fristenkongruenz zwischen langfristigem Vermögen und langfristigem Kapital).',
        'Warum Kennzahlen (statt eines einzelnen Blicks in die Bilanz): Unternehmer ermitteln in der Regel ihren **Gewinn bzw. ihre Rentabilität**, weil die **Produktivität** nichts über den finanziellen Erfolg aussagt und die **Wirtschaftlichkeit** zwar das Ob, aber nicht das Wie-viel des Erfolgs zeigt – erst die Rentabilität macht den Erfolg bezogen auf das eingesetzte Kapital sichtbar.',
        'Einordnung: Die konkreten **Formeln, Kürzel und Rechenbeispiele** zu Wirtschaftlichkeit, Produktivität, Umsatz-/Eigenkapital-/Gesamtkapitalrentabilität, Liquidität I–III, Eigenkapitalquote, Verschuldungsgrad, Anlagendeckung und zur Gewinn-Kette (Bruttogewinn, Betriebsergebnis, Kapitalgewinn, Jahresüberschuss) sind in den separaten **Formel-Karten** ausgearbeitet.',
      ],
    },
  ],
}
