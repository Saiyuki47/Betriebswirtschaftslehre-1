import type { Thema } from '../../types'

// Aus den Vorlesungsfolien (PP-Folien_BWL_2025.pdf, S. 9–22), dem
// Übungsbegleiter (Kap. 1) und den Altklausuren neu geschrieben.
export const kapitel: Thema = {
  titel: '1 Grundlagen',
  beschreibung:
    'Das erste Kapitel klärt, **womit** sich die Betriebswirtschaftslehre (BWL) überhaupt beschäftigt und **warum** der Mensch wirtschaften muss. Es führt die zentralen Grundbegriffe ein – Wirtschaften, Güter, Bedürfnis und Bedarf, das ökonomische Prinzip, die messenden Kennzahlen sowie die Wirtschaftseinheiten (Betriebe und Haushalte) – und ordnet am Ende die BWL selbst in ihre Teilgebiete ein.',
  abschnitte: [
    {
      titel: '1.1 Erkenntnisobjekt',
      beschreibung:
        'Das **Erkenntnisobjekt** ist der Ausschnitt der Wirklichkeit, den eine Wissenschaft untersucht. Der volle Name des Faches lautet „Einführung in die **Allgemeine Betriebswirtschaftslehre** (ABWL)". Erkenntnisobjekt der BWL ist der **Betrieb** als Ort, an dem Güter und Dienstleistungen erstellt und über Märkte ausgetauscht werden – betrachtet unter dem Gesichtspunkt vernünftigen (rationalen) Wirtschaftens.',
      punkte: [
        'Der Name des Faches erklärt zugleich seinen Gegenstand: **A**llgemeine – **B**etriebs – **W**irtschafts – **L**ehre; „allgemein" heißt branchenübergreifend gültig, „Betrieb" ist der Untersuchungsgegenstand, „Wirtschaft" die Tätigkeit und „Lehre" die wissenschaftliche Durchdringung.',
        'Man unterscheidet das **Erkenntnisobjekt** (der reale Betrieb, der untersucht wird) vom **Erkenntnisziel** (die Frage, unter welchem Blickwinkel man ihn untersucht – bei der BWL: das rationale, wirtschaftliche Handeln).',
        'Die BWL ist eine **angewandte** und zugleich **wirtschaftswissenschaftliche** Disziplin: Sie beschreibt und erklärt betriebliches Geschehen (Sachziel) und gibt zugleich Handlungsempfehlungen für vernünftige Entscheidungen (Formalziel).',
        'Auch für Studierende der angewandten Informatik ist die ABWL relevant, weil nahezu jede IT-Lösung in einem betrieblichen Kontext eingesetzt wird und wirtschaftlichen Zielen (Kosten, Nutzen, Rentabilität) dienen muss.',
        'Die Klausur fragt genau das ab, was in Vorlesung und Übung behandelt wurde – das Erkenntnisobjekt bildet dafür den begrifflichen Rahmen.',
      ],
    },
    {
      titel: '1.2 Wirtschaftliches Handeln',
      beschreibung:
        'Wirtschaftliches Handeln ist der Kern der BWL. Grundproblem ist die **Knappheit**: Die Bedürfnisse der Menschen sind praktisch unbegrenzt, die Mittel zu ihrer Befriedigung dagegen begrenzt. Deshalb muss der Mensch **wirtschaften**, also überlegt mit knappen Gütern umgehen. Die BWL versteht sich dabei als **Rationalitätslehre**, weil sie das vernünftige (zweckmäßige) Handeln zum Maßstab macht. Aus dieser Vernunftidee folgt das **ökonomische Prinzip** in seinen drei Ausprägungen, und dessen Erfolg lässt sich mit Kennzahlen wie Wirtschaftlichkeit, Produktivität und Rentabilität messen.',
      punkte: [
        'Definition (Folie): „**Wirtschaften** ist disponieren über knappe Güter, die direkt oder indirekt zur Befriedigung menschlicher Bedürfnisse geeignet sind."',
        'Der Mensch **muss** wirtschaften, weil seine Bedürfnisse nahezu unbegrenzt sind, die verfügbaren Güter und Mittel aber knapp – die Knappheit erzwingt eine Auswahl (disponieren = planen, einteilen, entscheiden).',
        'Die BWL ist eine **Rationalitätslehre**, weil sie fragt, wie man mit knappen Mitteln möglichst zweckmäßig (vernünftig) handelt; Ziel ist ein günstiges Verhältnis von Mitteleinsatz und Zielerreichung.',
        'Menschen entscheiden jedoch **nicht immer rational** – daher unterscheidet man zwei Formen der Rationalität: die **formale (objektive) Rationalität** (die theoretisch beste, logisch begründbare Entscheidung) und die **subjektive (begrenzte) Rationalität** (die für den Entscheider unter seinem begrenzten Wissen sinnvolle Entscheidung, „bounded rationality").',
        '**Bedürfnis** ist ein empfundener Mangel mit dem Wunsch, ihn zu beseitigen (z. B. Durst, Wunsch nach Mobilität); **Bedarf** ist das mit Kaufkraft ausgestattete, konkret am Markt wirksame Bedürfnis (das Bedürfnis, das man sich leisten kann und will).',
        '**Freie Güter** sind im Überfluss vorhanden und kostenlos verfügbar (z. B. Luft zum Atmen) und deshalb nicht Gegenstand des Wirtschaftens; **knappe Güter** (Wirtschaftsgüter) sind begrenzt und haben einen Preis – nur um sie geht es in der BWL.',
        '**Inputgüter** gehen in die Leistungserstellung ein (Werkstoffe, Betriebsmittel, Arbeit), **Outputgüter** sind die erzeugten Ergebnisse (fertige Produkte und Dienstleistungen).',
        '**Realgüter** sind Sachgüter, Dienstleistungen und Rechte (die „echte" Leistungsebene); **Nominalgüter** sind Geld und Geldforderungen (die Wertebene), die als Gegenstrom zu den Realgütern fließen.',
        'Die **Wirtschaftsgüter** gliedern sich in **materielle** und **immaterielle Güter**: materielle Güter sind wiederum **Produktionsgüter** (dienen der weiteren Herstellung, z. B. Maschinen, Rohstoffe) und **Konsumgüter** (dienen dem Endverbrauch); immaterielle Güter sind **Dienstleistungen** und **Rechte** (z. B. Patente).',
        'Konsumgüter unterteilt man in **Gebrauchsgüter**, die mehrfach bzw. über längere Zeit genutzt werden (z. B. Auto, Werkzeug), und **Verbrauchsgüter**, die bei der Nutzung untergehen bzw. nur einmal verwendbar sind (z. B. Kaffee, Benzin, Lebensmittel).',
        'Bei Güterknappheit ist es vernünftig, nach dem **ökonomischen Prinzip** zu handeln; es hat drei Ausprägungen (Minimum-, Maximum- und Extremumprinzip).',
        '**Minimumprinzip:** Ein fest vorgegebener Ertrag (Ziel) soll mit möglichst geringem Aufwand erreicht werden → **Aufwands-/Kostenminimierung** (der Output steht fest, der Input wird minimiert).',
        '**Maximumprinzip:** Mit einem fest vorgegebenen Aufwand (Mitteleinsatz) soll ein möglichst hoher Ertrag bzw. Nutzen erzielt werden → **Ertrags-/Leistungsmaximierung** (der Input steht fest, der Output wird maximiert).',
        '**Extremumprinzip (generelles/optimales Prinzip):** In der Literatur umstritten – hier soll ein möglichst günstiges **Verhältnis** von Aufwand und Ertrag erreicht werden (Ertrags-/Aufwandsoptimierung); es ist die allgemeine Version und schließt Minimum- und Maximumprinzip als Spezialfälle ein.',
        'Wichtig: Man darf **nicht gleichzeitig** Aufwand minimieren und Ertrag maximieren – eine der beiden Größen muss stets als fest vorgegeben gelten, sonst ist die Aufgabe unbestimmt.',
        'Alle drei Forderungen sind Ausdruck **desselben** ökonomischen Prinzips (Vernunftprinzip des Wirtschaftens), wobei das Extremumprinzip (c) die beiden Spezialfälle (a) und (b) umfasst.',
        'Messbar sind diese Prinzipien in Kennziffern: **Wirtschaftlichkeit (Effizienz)** = [[Ertrag|Aufwand]] (besser noch über den Gewinn ausgedrückt) – sie zeigt, wie günstig produziert wird, sagt aber nichts über die absolute Höhe des Erfolgs.',
        '**Produktivität** = [[Output (Mengeneinheiten)|Input (Mengeneinheiten)]] – ein reines Mengenverhältnis (z. B. Stück je Arbeitsstunde); ihre Aussagekraft ist begrenzt, weil sie Preise und Kosten außer Acht lässt und meist nur als **Teilproduktivität** (etwa Arbeitsproduktivität) sinnvoll ermittelt werden kann.',
        '**Rentabilität (ROI)** = [[Gewinn|Kapital]] × 100 – sie setzt den Gewinn ins Verhältnis zum eingesetzten Kapital und zeigt die Verzinsung des Kapitals in Prozent.',
        'In der Praxis ermitteln Unternehmer meist den **Gewinn** und nicht Produktivität oder Wirtschaftlichkeit, weil die Produktivität nichts über den Gewinn aussagt und die Wirtschaftlichkeit zwar auf ihn hinweist, aber nicht seine absolute Höhe angibt.',
        'Abzugrenzen davon ist die **Effektivität (Wirksamkeit)**: Sie misst, ob durch das Handeln die **geplanten Ziele** überhaupt erreicht werden („die richtigen Dinge tun"), während die Wirtschaftlichkeit misst, ob man die Dinge richtig, also sparsam, tut.',
      ],
    },
    {
      titel: '1.3 Wirtschaftseinheiten',
      beschreibung:
        'Damit gewirtschaftet werden kann, braucht es handelnde Einheiten. Die Volkswirtschaft besteht aus **Wirtschaftseinheiten**, die sich in **Betriebe** (Orte der Leistungserstellung zur Fremdbedarfsdeckung) und **Haushalte** (private oder staatliche Verbrauchseinheiten) gliedern. Die Betriebe teilen sich weiter in **Unternehmungen** (privatwirtschaftlich, erwerbswirtschaftlich) und **öffentliche Betriebe und Verwaltungen** (gemeinwirtschaftlich). Erich **Gutenberg** hat für diese Typen jeweils drei kennzeichnende Prinzipien formuliert.',
      punkte: [
        '**Wirtschaftseinheiten** sind die Träger des Wirtschaftens; sie gliedern sich in **Betriebe** und **Haushalte**.',
        '**Betriebe** sind Einheiten der **Fremdbedarfsdeckung** und zugleich „**Orte der Leistungserstellung**" – hier werden Güter und Dienstleistungen für andere (den Markt) erzeugt.',
        '**Haushalte** sind Einheiten des Verbrauchs; sie sind **privat** (Konsumhaushalte) oder **staatlich** (öffentliche Haushalte) und decken den eigenen Bedarf.',
        'Betriebe teilen sich in **Unternehmungen** (privatrechtlich, gewinnorientiert) und **öffentliche Betriebe und Verwaltungen** (in öffentlicher Trägerschaft, auf Bedarfs-/Kostendeckung ausgerichtet).',
        'Nach Erich **Gutenberg** gelten für den **Betrieb** (allgemein) drei systemunabhängige Prinzipien: die **Kombination von Produktionsfaktoren**, das **Prinzip der Wirtschaftlichkeit** und das **Prinzip des finanziellen Gleichgewichts** (jederzeitige Zahlungsfähigkeit).',
        'Für die **Unternehmung** (marktwirtschaftlich) kommen drei systembezogene Prinzipien hinzu: das **Autonomieprinzip** (freie, selbstbestimmte Planung), das **erwerbswirtschaftliche Prinzip** (Streben nach Gewinn) und das **Privateigentum** an den Produktionsmitteln.',
        'Für den **öffentlichen Betrieb** gelten stattdessen: das **Organprinzip** (der Betrieb erfüllt als „Organ" zentrale Ziele des Staates, der in betriebliche Entscheidungen hineinregiert), das **Prinzip der zentralen Planerfüllung** (Vorgabe der Ziele von außen/oben statt autonomer Planung) und das **Gemeineigentum** (öffentliches statt privates Eigentum).',
        'Der Kernunterschied für einen Nichtkaufmann: Eine **Unternehmung** plant autonom, strebt Gewinn an und steht in privatem Eigentum; ein **öffentlicher Betrieb** erfüllt fremdbestimmte, gemeinwohlorientierte Ziele bei öffentlichem Eigentum (Beispiele: Wasserversorgung, Krankenhaus, städtischer Kindergarten).',
      ],
    },
    {
      titel: '1.4 Betriebstypologien',
      beschreibung:
        'Betriebe lassen sich nach verschiedenen **Kriterien** systematisch einteilen; das dient dazu, ähnliche Betriebe zu vergleichen und passende Regeln (etwa zu Interessenvertretung, Publizität, Haftung oder Besteuerung) auf sie anzuwenden. Die Folie nennt vier Hauptkriterien – Hauptleistung, Größe, Rechtsform und Zielsetzung –, die jeweils zu bestimmten Anwendungen führen. Ein wichtiges Anwendungsfeld ist die **organisierte Interessenvertretung** (Arbeitgeber- und Arbeitnehmerseite).',
      punkte: [
        'Gliederung nach der **Hauptleistung**: **Sachleistungs-** und **Dienstleistungsbetriebe**; dies entspricht der Einteilung nach **Wirtschaftszweig/Branche** (z. B. Industrie wie Chemie und Metall, Banken, Versicherungen, Handel, Transport).',
        'Anwendung des Kriteriums Hauptleistung ist die **organisierte Interessenvertretung**: auf Arbeitgeberseite **Unternehmensverbände** – Arbeitgeberverbände, Wirtschaftsverbände und **Kammern** (z. B. IHK) –, auf Arbeitnehmerseite die **Gewerkschaften**.',
        'Gliederung nach der **Größe** (gemessen an Umsatz, Mitarbeiterzahl, Kapital): **Groß-, Mittel- und Kleinbetriebe**; Anwendung sind Vorschriften zu **Publizität, Mitbestimmung und Bilanzrichtliniengesetz** (größere Betriebe müssen mehr offenlegen und mehr mitbestimmen lassen).',
        'Gliederung nach der **Rechtsform** (öffentliches oder privates Recht): z. B. AG, GmbH, KG; Anwendung sind die Regeln zu **Haftung und Besteuerung** (Details in Kapitel 4).',
        'Gliederung nach der **Zielsetzung**: **Erwerbswirtschaftlichkeit** (Gewinnmaximierung bzw. Einkommensprinzip, z. B. Publikums-AG, Zeitungskiosk), **Kostendeckung** (angemessene Verzinsung oder reines Kostendeckungsprinzip, z. B. Wasserversorgung, Krankenhaus) und **Zuschuss** (Subventions-/Bedarfsdeckungsprinzip, z. B. städtischer Kindergarten, Landwirtschaft, Zoo).',
        'Die deutschen Gewerkschaften folgen dem **Einheitsgewerkschaftsprinzip** (eine parteipolitisch neutrale Gewerkschaft je Bereich – gegen Richtungsgewerkschaften) und dem **Industriegewerkschaftsprinzip** („ein Betrieb – eine Gewerkschaft", nach Branche gegliedert – gegen das Berufsgruppenprinzip).',
        'Die Zahl der gewerkschaftlich gebundenen Arbeitnehmer **sinkt** langfristig – Gründe sind u. a.: es geht den Arbeitnehmern heute besser als zur Gründungszeit; die Mitgliedschaft kostet Beiträge; das **Trittbrettfahrerproblem** (auch Nichtmitglieder profitieren von Tarifabschlüssen); der Wandel von der Industrie- zur Dienstleistungs-/Wissensgesellschaft sowie zunehmende Akademisierung.',
        'Wendet man diese Kriterien auf konkrete Betriebe an, zeigt sich die Unterscheidung Unternehmung/öffentlicher Betrieb: z. B. **Volkswagen** und **Lufthansa** sind erwerbswirtschaftliche Unternehmungen, die **Deutsche Bahn** und eine **Hochschule (HS Fulda)** sind (überwiegend) öffentlich getragen, ein **Bauernhof** ist ein zuschuss-/subventionsnaher Kleinbetrieb.',
      ],
    },
    {
      titel: '1.5 Gliederung der BWL',
      beschreibung:
        'Zum Abschluss ordnet sich die BWL selbst. Sie lässt sich nach zwei Gesichtspunkten gliedern: **nach Funktion** in die **Allgemeine BWL (ABWL)**, die für alle Betriebe gültige Fragen behandelt, und **nach Objekt** in die **Speziellen BWL**, die sich auf einzelne Branchen konzentrieren. Zudem steht die BWL nicht allein, sondern profitiert vom Wissen benachbarter Wissenschaften.',
      punkte: [
        'Die **Allgemeine BWL (ABWL)** gliedert **nach Funktion**: Sie behandelt die betrieblichen Funktionsbereiche, die es in (fast) jedem Betrieb gibt – **Beschaffung, Produktion, Absatz, Finanzierung, Personal** usw.',
        'Die **Speziellen BWL** gliedern **nach Objekt** (Branche): z. B. **Industrie-, Handels-, Banken- und Versicherungsbetriebslehre** – sie greifen die Besonderheiten einzelner Wirtschaftszweige auf.',
        'Die **ABWL** ist branchenübergreifend gültig (deshalb „allgemein"), die **Spezielle BWL** vertieft das Allgemeine für einen konkreten Betriebstyp.',
        'Die BWL **profitiert von anderen Wissenschaften**: aus der **Volkswirtschaftslehre** übernimmt sie Markt-, Preis- und Wettbewerbstheorie; aus der **Mathematik/Statistik** die Werkzeuge zur Modellierung, Optimierung und Datenauswertung; aus **Psychologie und Soziologie** Erkenntnisse über Motivation, Verhalten und Führung; hinzu kommen **Rechtswissenschaft** (z. B. HGB, Gesellschaftsrecht) und **Informatik** (Informationssysteme).',
        'Diese Anleihen machen die BWL zu einer **interdisziplinären angewandten Wissenschaft**, die fremde Erkenntnisse für die Lösung betrieblicher Entscheidungsprobleme nutzbar macht.',
      ],
    },
  ],
}
