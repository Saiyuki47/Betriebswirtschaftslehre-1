import type { Thema } from '../../types'

// Kapitel 5 – „Ziele im Unternehmen". Inhalt originalgetreu aus dem Foliensatz
// PP-Folien_BWL_2025.pdf (Seiten 55–72), ergänzt um Übungsbegleiter Kap. 5 und
// Altklausur-Beispiele. Text wird über FormelText gerendert (Markdown-inline +
// [[Zähler|Nenner]]-Brüche); Abbildungen liegen in themenBilder/kapitel-5.tsx.
export const kapitel: Thema = {
  titel: '5 Ziele im Unternehmen',
  beschreibung:
    'Ziele sind angestrebte künftige Zustände und der Maßstab, an dem jedes unternehmerische Handeln gemessen wird. Dieses Kapitel klärt, wie Ziele aufgebaut sind (Zieldimensionen, Zielpyramide, ökonomische Zielkonzeption), wie sie tatsächlich entstehen (empirische Thesen, Entstehungsmodell aus Motiven, Ansprüchen und Unternehmenskultur) und was passiert, wenn Ziele einander widersprechen (Zielbeziehungen und Zielkonflikte).',
  abschnitte: [
    {
      titel: '5.1 Grundlagen',
      beschreibung:
        'Ein Ziel ist ein angestrebter künftiger Zustand, den das Unternehmen durch sein Handeln erreichen will. Damit ein Ziel operational (also überprüfbar und steuerbar) ist, muss es vollständig beschrieben sein – über vier Kennzeichen und die Ergänzungen Attraktivität und Realismus. Ziele stehen außerdem nicht beziehungslos nebeneinander, sondern bilden von der Vision an der Spitze bis zu den Funktionsbereichszielen an der Basis eine Zielpyramide bzw. ein geordnetes Zielsystem.',
      punkte: [
        'Ein **Ziel** ist ein normativer Aussagesatz über einen angestrebten künftigen Zustand, der durch Handeln erreicht werden soll; Ziele sind der Maßstab, an dem Entscheidungen und Ergebnisse gemessen werden.',
        'Die vier **Kennzeichen eines Zieles** (Folie 55) sind: **Zielinhalt** (Was soll erreicht werden?), **Zielausmaß** (Wie viel bzw. in welcher Höhe – oft als Extremierung, d. h. Maximierung oder Minimierung?), **zeitlicher Bezug** (Bis wann soll es erreicht sein?) und **sachlicher Geltungsbereich** (Für wen bzw. für welchen Bereich gilt das Ziel?).',
        'Beispiel für ein vollständig beschriebenes Ziel: „Der **Marktanteil** (Zielinhalt) soll um 5 Prozentpunkte steigen (Zielausmaß) bis zum Jahresende (zeitlicher Bezug) im Geschäftsbereich Deutschland (sachlicher Geltungsbereich)."',
        'Ergänzend müssen Ziele **Attraktivität** (sie sollen anspornen) und **Realismus** (sie müssen erreichbar sein) besitzen – zusammen mit den vier Kennzeichen führt das zur bekannten Merkregel **SMART** (spezifisch, messbar, attraktiv, realistisch, terminiert).',
        'Die **Zielpyramide** (Folie 56) ordnet Ziele nach ihrem Konkretisierungsgrad in fünf Ebenen von oben nach unten: **Vision bzw. Mission**, **Unternehmensleitbild**, **Unternehmensziele**, **Geschäftsbereichsziele** und **Funktionsbereichsziele**.',
        'Nach oben werden die Ebenen zunehmend **qualitativ** (sprachliche Beschreibungen, Bilder der Zukunft), nach unten zunehmend **quantitativ** (konkrete Zahlen und Termine); die Vision ist damit rein qualitativ, die Funktionsbereichsziele sind quantitativ.',
        'Eine **Vision** (bzw. „Mission") ist ein qualitatives Bild der erwünschten Zukunft, das Sinn stiftet und motiviert – Beispiele: „Mit Energie was unternehmen" (EnBW), „A personal computer in every home running Microsoft software" oder „Imagine a world in which every single person is given free access to the sum of all human knowledge" (Wikipedia).',
        'Sinnbild für die motivierende Kraft einer Vision (Saint-Exupéry): „Wenn Du ein Schiff bauen willst, dann trommle nicht Männer zusammen, um Holz zu beschaffen …, sondern lehre die Männer die Sehnsucht nach dem weiten, endlosen Meer."',
        'Die **Mission** von Microsoft lautet „jede Person und jedes Unternehmen auf dem Planeten zu befähigen, mehr zu erreichen", getragen von Unternehmenswerten wie **Respekt**, **Integrität** und **Rechenschaftspflicht** (Folie 58).',
        'Nach ihrem Sachbezug lassen sich Ziele in **Sachziele** (was am Markt geleistet wird – z. B. Produkte, Mengen, Qualität) und **Formalziele** (die übergeordneten Erfolgsgrößen, an denen der Erfolg gemessen wird – z. B. Gewinn, Rentabilität, Liquidität) unterscheiden.',
        'Die **ökonomische Zielkonzeption** (Folie 67) fasst die ökonomischen Ziele einer Unternehmung zusammen und gliedert sie in drei Kategorien – **Leistungsziele** (z. B. Produktions- und Absatzmengen, Absatzwege, Marktanteil, Produktions- und Lagerkapazitäten), **Erfolgsziele** (z. B. Gewinn/Rentabilität, Dividenden, Kostenstruktur, Umsatzvolumen) und **Finanzziele** (z. B. Zahlungsfähigkeit/Liquidität, Liquiditätsreserve, finanzielle Struktur, Investitions- und Finanzierungsprogramm).',
        'Ein **Zielsystem** ist ein Bündel von aufeinander abgestimmten Zielen; innerhalb dieses Systems bestehen Rangbeziehungen zwischen **Oberzielen**, **Zwischenzielen** und **Unterzielen** (Zweck-Mittel-Beziehung: das Unterziel ist Mittel zur Erreichung des Oberziels).',
      ],
    },
    {
      titel: '5.2 Empirische Thesen',
      beschreibung:
        'Die Grundlagen beschreiben, wie ein sauber formuliertes Ziel aussehen sollte. Empirisch – also so, wie es in der Wirklichkeit abläuft – entstehen Unternehmensziele jedoch nicht am Reißbrett, sondern als Ergebnis von Verhandlungen zwischen vielen Beteiligten mit unterschiedlicher Macht. Drei Thesen fassen diese Beobachtung zusammen.',
      punkte: [
        '**These 1:** Unternehmensziele liegen nicht von vornherein fest. Die **Zielbildung** ist vielmehr ein **multipersoneller** (viele Personen wirken mit), **multioperationaler** (viele Teilhandlungen und Interessen) und **multitemporaler** (über die Zeit veränderlicher) Prozess.',
        '**These 2:** Ziele sind das **Ergebnis von Entscheidungsprozessen** – sie werden ausgehandelt und beschlossen, nicht einfach vorgegeben.',
        '**These 3:** **Interessendurchsetzung hat etwas mit Macht zu tun** – wer über mehr Macht (bzw. Sanktionsmöglichkeiten) verfügt, kann seine Zielvorstellungen stärker durchsetzen.',
        'Ein **Zielsystem** ist entsprechend ein „Bündel von aufeinander abgestimmten Zielen"; der **Zielbildungsprozess** ist ein **Aushandelprozess**, in dem auftretende **Zielkonflikte** durch **Priorisierung** (Rangordnung der Ziele) zu klären sind.',
        'Die verschiedenen Anspruchsgruppen wirken über die **Anreiz-Beitrags-Theorie** auf die Zielbildung ein: Das Unternehmen bietet einem Koalitionspartner **Anreize**, erhält dafür dessen **Beiträge**, und der Partner verfügt über **Sanktionsmöglichkeiten**, deren Durchschlagskraft von seiner **Bedeutung/Stärke** (Macht) abhängt (Folie 71).',
        'Mögliche **Koalitionspartner** (Stakeholder) sind u. a. Eigentümer, Gläubiger, Lieferanten, Arbeitnehmer, Unternehmensleitung/Management, Kunden, Schuldner, Beteiligungsunternehmen sowie Öffentlichkeit/Staat.',
        'Beispiel Anreiz-Beitrag: Der Staat (Stakeholder) erhält als **Beitrag** Steuern und Arbeitsplätze, bietet als **Anreiz** Infrastruktur und Rechtssicherheit und besitzt als **Sanktion** Gesetze, Auflagen und Steuererhöhungen.',
        '**Stakeholder** sind alle Personen oder Gruppen, die Ansprüche an das Unternehmen stellen bzw. von ihm betroffen sind (Anspruchsgruppen); **Shareholder** sind demgegenüber nur die Anteilseigner (Eigentümer).',
        'Kontrast der Sichtweisen: Der **Shareholder-Value-Ansatz** (Milton Friedman 1970: „The Social Responsibility of Business is to Increase its Profits") stellt den Eigentümernutzen in den Mittelpunkt, während der **Stakeholder-View** die Ansprüche aller Anspruchsgruppen berücksichtigt.',
      ],
    },
    {
      titel: '5.3 Ein Entstehungsmodell',
      beschreibung:
        'Wenn Ziele ausgehandelt werden, stellt sich die Frage, woher die Zielvorstellungen der Beteiligten überhaupt kommen. Das Entstehungsmodell (Folie 60) führt sie auf zwei Wurzeln zurück – die Motive menschlichen Verhaltens (nach Maslow) und die Werthaltungen der maßgeblichen Unternehmensträger – und zeigt den Weg über Ansprüche, Existenzbedingungen und Unternehmenskultur bis zu den fertigen Unternehmenszielen.',
      punkte: [
        'Das Modell hat zwei Ausgangspunkte: links die **Motive menschlichen Verhaltens (nach Maslow)**, rechts die **Werthaltungen der maßgeblichen Unternehmensträger** (z. B. der Eigentümer und Führungskräfte).',
        'Die **Bedürfnispyramide nach Maslow** ordnet menschliche Bedürfnisse in fünf Stufen von unten nach oben: **physiologische Bedürfnisse** (Essen, Trinken, Schlaf), **Sicherheit**, **soziale Bedürfnisse** (Zugehörigkeit), **Wertschätzung** (Anerkennung) und **Selbstverwirklichung**.',
        'Maslow-Kernaussage: Grundsätzlich wird eine höhere Stufe erst dann verhaltensbestimmend, wenn die darunterliegenden Bedürfnisse weitgehend befriedigt sind – ein befriedigtes Bedürfnis motiviert nicht mehr. **Motivation** ist damit abhängig davon, welche Bedürfnisse gerade unbefriedigt sind.',
        'Aus Motiven und Werthaltungen entstehen die **Ansprüche der – unmittelbaren – Unternehmensträger an die Unternehmung** sowie die **Ansprüche der Marktpartner, sozialer Gruppen und der Gesellschaft**.',
        'Diese Ansprüche münden in die **Existenzbedingungen der Unternehmung als Institution**; dazu zählen **Rentabilität**, **Liquidität**, **Wachstum** und **Planbarkeit** (Folie 61) – Bedingungen, die dauerhaft erfüllt sein müssen, damit das Unternehmen fortbesteht.',
        'Aus dem Zusammenspiel entsteht die **Unternehmensphilosophie und -kultur**, aus der schließlich die konkreten **Unternehmensziele** abgeleitet werden.',
        'Die **Unternehmensphilosophie** ist die grundsätzliche Einstellung des Unternehmens in Bezug auf seine Umwelt; sie beantwortet Grundfragen zu **Gesellschafts- und Leitbild**, **Menschenbild**, **Legitimation** (Existenzberechtigung) und **Einstellung zur Umwelt (Ökologie)** und wird bewusst gestaltet (Folie 62).',
        'Die **Unternehmenskultur** ist demgegenüber die „Gesamtheit von im Laufe der Zeit entstandenen und akzeptierten Werten und Normen, die das Entscheiden und Handeln der Mitglieder der Unternehmung prägen" – sie wächst weitgehend ungeplant (Folie 63).',
        'Man erkennt eine Unternehmenskultur an ihrem **Symbolsystem**: **Legenden und Mythen**, **Rituale**, **Corporate Identity**, **wahrgenommene Atmosphäre** und **Kommunikationsstil**.',
        '**Einflussfaktoren** der Unternehmenskultur sind u. a. die Geschichte des Unternehmens, prägende Führungsfiguren, die Branche, das Land und die Religion sowie die Wettbewerbssituation; wichtige **Dimensionen** sind Risikobereitschaft, Geschwindigkeit der Marktreaktion, Offenheit und die Differenziertheit von Kulturen (Folie 64).',
        'Die **Kulturtypologie nach Deal/Kennedy** (Folie 65) unterscheidet Kulturen anhand der zwei Dimensionen **Risikobereitschaft** (hoch/niedrig) und **Feedback-Geschwindigkeit** (schnell/langsam) in vier Typen: **Macho-Kultur** (hohes Risiko, schnelles Feedback), **Risiko-Kultur** (hohes Risiko, langsames Feedback – z. B. Forschung), **Brot-und-Spiele-Kultur** (niedriges Risiko, schnelles Feedback) und **Prozess-Kultur/Bürokratie** (niedriges Risiko, langsames Feedback).',
        '**Corporate Identity** ist der bewusst gestaltete, einheitliche Auftritt des Unternehmens nach innen und außen und damit – anders als die weitgehend ungeplant gewachsene Unternehmenskultur – ein planbares Element.',
      ],
    },
    {
      titel: '5.4 Zielkonflikte',
      beschreibung:
        'Weil ein Unternehmen viele Ziele gleichzeitig verfolgt und diese aus den Ansprüchen unterschiedlicher Gruppen stammen, vertragen sie sich nicht immer. Um Zielkonflikte erkennen und auflösen zu können, unterscheidet man zunächst die grundsätzlichen Beziehungen zwischen zwei Zielen und betrachtet dann die typischen Konfliktfelder – zwischen Bereichen und Personen, zwischen Ökonomie, Ökologie und sozialen Ansprüchen sowie zwischen den ökonomischen Zielen selbst.',
      punkte: [
        'Zwischen zwei Zielen gibt es drei grundsätzliche **Zielbeziehungen**: **komplementär** (die Erfüllung des einen Ziels fördert das andere), **konkurrierend/konfliktär** (die Erfüllung des einen Ziels beeinträchtigt das andere) und **indifferent/neutral** (die Ziele beeinflussen sich nicht).',
        'Ein **Zielkonflikt** liegt genau bei einer **konkurrierenden** Zielbeziehung vor: Mehr vom einen Ziel bedeutet zwangsläufig weniger vom anderen; solche Konflikte sind durch **Priorisierung** (Rangordnung) aufzulösen.',
        'Beispiel **komplementär**: Höhere Produktqualität steigert häufig zugleich die Kundenzufriedenheit. Beispiel **indifferent**: Das Design der Firmenwebsite und die Lagerhaltungspolitik haben in der Regel nichts miteinander zu tun.',
        'Zielkonflikte treten auf **zwischen Unternehmensbereichen und Personen** (z. B. will der Vertrieb hohe Lagerbestände für lieferbereite Ware, das Finanzressort niedrige Bestände zur Kapitalschonung).',
        'Zielkonflikte treten auf **zwischen Ökonomie, Ökologie und sozialen Ansprüchen** – dargestellt im **Zieldreieck der Nachhaltigkeit** mit den Ecken **Ökonomie**, **Ökologie** und **soziale Bedürfnisse** (Folie 66).',
        'Beispiel Ökologie ↔ Ökonomie: Eine teure Filteranlage senkt den Schadstoffausstoß (ökologisches Ziel), schmälert aber den Gewinn (ökonomisches Ziel).',
        'Beispiel Ökologie ↔ Soziales: Eine Produktionsverlagerung ins Ausland kann Transportemissionen erhöhen (ökologisch nachteilig), während der Erhalt des teuren Standorts Arbeitsplätze sichert (soziales Ziel) – oder umgekehrt.',
        'Zielkonflikte treten schließlich auch **zwischen den ökonomischen Zielen selbst** auf – klassisch der Konflikt zwischen **Liquidität** und **Rentabilität**.',
        'Warum Liquidität ↔ Rentabilität konkurrieren: Wer viel liquides Geld (Kasse, Bankguthaben) vorhält, ist jederzeit zahlungsfähig, doch dieses Geld wirft kaum Zinsen ab und mindert so die **Rentabilität** – hohe Sicherheit wird mit geringerer Verzinsung erkauft.',
        'Die **Rentabilität** als Erfolgsziel misst die Verzinsung des eingesetzten Kapitals, z. B. die Eigenkapitalrentabilität = [[Jahresüberschuss|Eigenkapital]] × 100; die **Liquidität** als Finanzziel beschreibt die jederzeitige Zahlungsfähigkeit.',
      ],
    },
  ],
}
