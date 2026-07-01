import type { Thema } from '../../types'

// Kapitel 4 „Rechtsformen und Mitbestimmung" – vollständig aus den Vorlesungs-
// folien (PP-Folien_BWL_2025.pdf, S. 45–53), dem Übungsbegleiter (Rechtsform-
// Tabelle) und den Altklausuren neu geschrieben. Rendering über FormelText
// (Markdown-inline + [[Zähler|Nenner]]-Brüche), daher kein KaTeX/Block-Markdown.
export const kapitel: Thema = {
  titel: '4 Rechtsformen und Mitbestimmung',
  beschreibung:
    'Die **Rechtsform** ist die rechtliche Organisation, der rechtliche Rahmen bzw. das „Rechtskleid" eines Betriebes – sie legt fest, wer haftet, wer entscheidet, wie viel Kapital nötig ist und wie Gewinne verteilt werden. Man unterscheidet **privatrechtliche** und **öffentlich-rechtliche** Rechtsformen; die Wahl der Rechtsform hat vor allem Folgen für **Haftung** und **Besteuerung**. Der zweite Teil des Kapitels behandelt die **Mitbestimmung** als die deutsche „Spielart" der Beteiligung der Arbeitnehmer – geteilt in eine arbeitsrechtliche und eine unternehmerische Ebene.',
  abschnitte: [
    {
      titel: 'Privatrechtliche Rechtsformen',
      beschreibung:
        'Privatrechtliche Rechtsformen sind die Rechtskleider privater Betriebe (Unternehmungen). Die zentrale Trennlinie verläuft zwischen **Personengesellschaften**, bei denen die Gesellschafter mit ihrem gesamten Privatvermögen **unbeschränkt** haften und selbst die Geschäfte führen, und **Kapitalgesellschaften**, bei denen die Haftung auf das Gesellschaftsvermögen **beschränkt** ist, dafür aber ein Mindestkapital vorgeschrieben ist. Die Wahl entscheidet über Haftung, erforderliches Kapital, Geschäftsführung, Gewinnverteilung und Besteuerung. Jede wichtige Rechtsform ist in einem bestimmten Gesetz geregelt (Übungsfrage 22: „In welchen Gesetzen sind die wichtigsten Rechtsformen enthalten?").',
      punkte: [
        '**Rechtsform** = rechtliche Organisation / rechtlicher Rahmen / „Rechtskleid" eines Betriebes; ihre Wahl hat vor allem Folgen für **Haftung** und **Besteuerung** (Folie 45).',
        'Die **Einzelunternehmung** ist die einfachste Form: eine einzelne Person gründet per Gewerbeanmeldung (u. U. Eintragung ins Handelsregister), führt allein die Geschäfte und haftet **unbeschränkt und persönlich** mit ihrem gesamten Vermögen; geregelt in §§ 17–37 HGB.',
        '**Personengesellschaften** entstehen durch den Zusammenschluss mehrerer Personen; zu ihnen zählen die **GbR** (Gesellschaft bürgerlichen Rechts, §§ 705–740 BGB), die **oHG** (Offene Handelsgesellschaft, §§ 105–160 HGB), die **KG** (Kommanditgesellschaft, §§ 161–177 HGB) und die **Stille Gesellschaft**.',
        'Bei **GbR** und **oHG** haften alle Gesellschafter **unbeschränkt, persönlich und solidarisch** (gesamtschuldnerisch), und jeder Gesellschafter ist allein zur Geschäftsführung berechtigt; die oHG ist die handelsrechtliche Form (zwingend doppelte Buchführung).',
        'Bei der **KG** gibt es zwei Gesellschaftertypen: der **Komplementär** (Vollhafter) haftet unbeschränkt wie bei der oHG und führt die Geschäfte, der **Kommanditist** (Teilhafter) haftet **nur beschränkt auf seine Einlage** und ist von der Geschäftsführung ausgeschlossen.',
        '**Kapitalgesellschaften** sind juristische Personen mit eigener Rechtspersönlichkeit; die **Haftung ist auf das Gesellschaftsvermögen beschränkt**. Dazu gehören die **GmbH** (Gesellschaft mit beschränkter Haftung, GmbHG), die **AG** (Aktiengesellschaft, AktG), die **UG** (Unternehmergesellschaft, haftungsbeschränkt) und die **KGaA** (KG auf Aktien).',
        'Die **GmbH** braucht ein Mindest-Stammkapital von **25.000 €** (bei der Gründung reicht zunächst die Hälfte); geleitet wird sie durch einen oder mehrere **Geschäftsführer**; sie unterliegt detaillierten Rechnungslegungsvorschriften.',
        'Die **AG** braucht ein Mindest-Grundkapital von **50.000 €** (je Aktie mindestens 1,00 €); ihre Organe sind Vorstand, Aufsichtsrat und Hauptversammlung; sie unterliegt strengen Vorschriften mit Prüfungs- und Publizitätspflicht.',
        'Die **UG (haftungsbeschränkt)** ist eine „Mini-GmbH", die bereits mit 1 € Stammkapital gegründet werden kann, aber Rücklagen bis zum Erreichen von 25.000 € ansammeln muss – interessant für Gründer ohne großes Startkapital.',
        'Bei fehlender Regelung im Gesellschaftsvertrag gilt die **gesetzliche Gewinnverteilung**: bei Personengesellschaften wird der Gewinn unter den Gesellschaftern aufgeteilt, bei Kapitalgesellschaften nach Kapitalanteilen (GmbH) bzw. je Aktie (AG); bei der Einzelunternehmung entfällt der Gewinn komplett auf den Inhaber.',
        '**Besteuerung** (Übungsfrage 23): Einzelunternehmen und Personengesellschaften zahlen **Gewerbesteuer (mit Freibetrag)** und **Einkommensteuer** (begünstigt); Kapitalgesellschaften zahlen **Gewerbesteuer (ohne Freibetrag)** und **Körperschaftsteuer** – ein zentraler Grund für die Rechtsformwahl.',
        'Ein **Kaufmann kraft Rechtsform** ist ein Betrieb, der allein wegen seiner Rechtsform (z. B. GmbH, AG) als Kaufmann gilt; ein **Kaufmann kraft Eintragung** wird erst durch die Eintragung ins Handelsregister zum Kaufmann (Altklausur SS 2017).',
        'Als **Mischformen/Sonstige** gelten u. a. die **GmbH & Co. KG** (eine KG, deren einziger Komplementär eine GmbH ist – so wird die persönliche Haftung natürlicher Personen vermieden), die **eingetragene Genossenschaft (eG)** und die **bergrechtliche Gewerkschaft** (Folie 45).',
        'Praxis-Faustregel aus den Klausuren: Wer **nicht mit dem Privatvermögen haften** und **keine unternehmerische Mitbestimmung** will, wählt eine **GmbH** oder **AG** (notwendige Bedingung: das jeweilige Mindestkapital aufbringen). Wer als **stiller Kapitalgeber** einsteigen will, ohne die Firma zu leiten, wird **Kommanditist** einer KG (er braucht dazu einen Komplementär).',
        'Warum gibt es so wenige große Einzelunternehmen? Weil die **unbeschränkte persönliche Haftung** mit wachsendem Geschäftsvolumen zu riskant wird und die **Eigenfinanzierung** allein aus Einlagen und einbehaltenen Gewinnen für großes Wachstum nicht ausreicht (Altklausur SS 2021).',
      ],
    },
    {
      titel: 'Öffentlich-rechtliche Rechtsformen',
      beschreibung:
        'Neben den privaten gibt es **öffentlich-rechtliche** Rechtsformen für Betriebe der öffentlichen Hand (Bund, Länder, Gemeinden). Sie unterscheiden sich danach, ob sie eine **eigene Rechtspersönlichkeit** besitzen oder als unselbständiger Teil der Verwaltung geführt werden. Öffentliche Betriebe verfolgen typischerweise nicht die Gewinnmaximierung, sondern die **Bedarfsdeckung** der Bevölkerung (z. B. Wasser, Nahverkehr, Krankenhaus). Nach Gutenberg lassen sie sich an drei Kennzeichen erkennen.',
      punkte: [
        '**Ohne eigene Rechtspersönlichkeit** (unselbständig, Teil des Trägerhaushalts) sind der **Regiebetrieb**, der **Eigenbetrieb** und das **Sondervermögen** – sie sind rechtlich nicht von der Gebietskörperschaft getrennt (Folie 45).',
        'Ein **Regiebetrieb** ist vollständig in die öffentliche Verwaltung eingegliedert (kein eigenes Rechnungswesen, Teil des Haushalts), z. B. ein Bauhof; ein **Eigenbetrieb** ist zwar rechtlich unselbständig, wird aber wie ein Unternehmen mit eigener Buchführung und eigenem Wirtschaftsplan geführt (z. B. Stadtwerke als Eigenbetrieb).',
        '**Mit eigener Rechtspersönlichkeit** (selbständige juristische Personen des öffentlichen Rechts) sind **Körperschaften**, **Anstalten** und **Stiftungen** des öffentlichen Rechts (Folie 45).',
        'Eine **Körperschaft des öffentlichen Rechts** hat Mitglieder (z. B. Gemeinden, Universitäten wie die HS Fulda, Industrie- und Handelskammern); eine **Anstalt des öffentlichen Rechts** hat Nutzer/Benutzer statt Mitglieder (z. B. öffentlich-rechtlicher Rundfunk, Sparkassen); eine **Stiftung des öffentlichen Rechts** ist ein gewidmetes Vermögen für einen bestimmten Zweck.',
        'Erstes Kennzeichen öffentlicher Betriebe nach **Gutenberg** – **Gemeineigentum**: Der Betrieb steht im Eigentum der öffentlichen Hand (Bund, Land, Gemeinde) statt privater Eigentümer (Altklausur SS 2019).',
        'Zweites Kennzeichen nach Gutenberg – das **Organprinzip**: Der Betrieb wird als „verlängerter Arm" bzw. Organ des Staates geführt; der Staat wirkt an den betrieblichen Entscheidungen mit und der Betrieb erfüllt zentrale Ziele für den Staat.',
        'Drittes Kennzeichen nach Gutenberg – das **Prinzip der zentralen Planerfüllung** (statt eigenständiger Gewinnmaximierung): Das übergeordnete Formalziel wird zentral vorgegeben, der Betrieb dient der Erfüllung öffentlicher Aufgaben.',
        'Die **Zielsetzung** öffentlicher Betriebe reicht (vgl. Kap. 1, Betriebstypologien) vom **Kostendeckungsprinzip** (angemessene Verzinsung bzw. reine Kostendeckung, z. B. Wasserversorgung, Krankenhaus) bis zum **Subventionsprinzip** (Bedarfsdeckung mit Zuschuss, z. B. städtischer Kindergarten, Zoo, Landwirtschaft).',
        'Abgrenzung öffentlicher Betrieb ↔ privates Unternehmen (Übungsfrage 8): Private **Unternehmen** handeln erwerbswirtschaftlich (Gewinnmaximierung, Autonomieprinzip, Privateigentum), **öffentliche Betriebe** handeln bedarfswirtschaftlich (Bedarfsdeckung, Organprinzip, Gemeineigentum) – Beispiele: Bauernhof und Volkswagen sind Unternehmen, die HS Fulda ist ein öffentlicher Betrieb, die Deutsche Bahn und die Lufthansa sind privatrechtlich organisiert (AG), erfüllen aber öffentliche Aufgaben.',
        'Beim öffentlichen Handelsregister gilt der **„öffentliche Glaube"**: Alles, was im Handelsregister eingetragen ist, gilt als richtig und darf von Dritten als korrekt vorausgesetzt werden (Altklausur SS 2021).',
      ],
    },
    {
      titel: 'Mitbestimmung – die deutsche „Spielart"',
      beschreibung:
        'Die **Mitbestimmung** ist die deutsche „Spielart" der Beteiligung der Arbeitnehmer an unternehmerischen und betrieblichen Entscheidungen und dient den **sozialen Zielen** im Unternehmen. Begründet wird sie mit der **Würde des Menschen**, der **Gleichberechtigung von Kapital und Arbeit**, dem **Demokratieprinzip** und der **Kontrolle wirtschaftlicher Macht**. Man unterscheidet zwei Ebenen: die **arbeitsrechtliche Mitbestimmung (ARM)** auf Betriebsebene und die **unternehmerische Mitbestimmung (UMB)** im Aufsichtsrat. Der Leitgedanke des Gesetzgebers: Ökonomischer Erfolg und gute soziale Beziehungen müssen auf lange Sicht kein Gegensatz sein.',
      punkte: [
        'Schlagworte für die **sozialen Ziele** im Unternehmen: gerechte Entlohnung, humane Arbeitsbedingungen, Arbeitsplatzsicherheit sowie Beteiligung der Arbeitnehmer an Gewinn und Vermögen – zusammengefasst als Mitwirkung / Mitentscheidung / Mitbestimmung (Folie 46).',
        '**Begründungen der Mitbestimmung** (Folie 47): Würde des Menschen und Selbstbestimmung, Gleichberechtigung von Kapital und Arbeit, Demokratieprinzip sowie Kontrolle wirtschaftlicher Macht.',
        'Grundunterscheidung: **arbeitsrechtliche Mitbestimmung (ARM)** auf Betriebsebene gegenüber **unternehmerischer Mitbestimmung (UMB)** in den Organen (Aufsichtsrat) der Kapitalgesellschaft.',
        '**Arbeitsrechtliche Ebene (ARM):** geregelt im **Betriebsverfassungsgesetz (BetrVG)** von **1952 und 1972**; betrifft Unternehmen mit mehr als 500 (bzw. ab 5) Mitarbeitern. Bei sozialen und arbeitsrechtlichen Angelegenheiten hat der **Betriebsrat (BR)** ein Mitspracherecht (Folie 48).',
        '**Mitwirkungsrechte** des Betriebsrats (schwächer): Recht auf **Information**, auf **Anhörung**, auf **Beratung und Verhandlung** sowie auf **Widerspruch**.',
        '**Mitbestimmungsrechte** des Betriebsrats (stärker, echte Mitentscheidung): **Anspruch auf Aufhebung**, **Zustimmungs- und Vetorecht** sowie **Initiativrechte**.',
        'Instanzen der arbeitsrechtlichen Mitbestimmung: der **Betriebsrat** (gewählt von der Belegschaft), die **Geschäftsführung/Arbeitgeber** und – vermittelnd – die **im Betrieb vertretenen Gewerkschaften**; diese Form der Mitbestimmung ist international **nicht** üblich, sondern eine deutsche Besonderheit (Altklausur SS 2019).',
        'Zusätzlich auf arbeitsrechtlicher Ebene (Folie 50): Das **Sprecherausschussgesetz von 1989** gilt für Betriebe mit mindestens **10 leitenden Angestellten** und gibt diesen ein Vertretungsorgan – aber **kein** Mitbestimmungsrecht (nur Mitwirkung).',
        '**Jugend- und Auszubildendenvertretungen** können in allen Betrieben gewählt werden, die mindestens **5 jugendliche** Beschäftigte haben (Folie 50).',
        '**Unternehmerische Ebene (UMB):** Beteiligung der Arbeitnehmer im **Aufsichtsrat** einer Kapitalgesellschaft. Die Organe sind der **Vorstand / die Geschäftsführung (VO/GF)** als leitendes Organ, der **Aufsichtsrat (AR)** als überwachendes Organ und die **Haupt- bzw. Gesellschafterversammlung (HV/GV)** als beschließendes Organ (Folie 51).',
        'Zusammenspiel der Organe: Die **HV/GV** (Kapitalgeber) bestellt bzw. wählt die Anteilseignerseite; die Belegschaft wählt ihre **Arbeitnehmervertreter (+ Gewerkschaftsvertreter)** in den Aufsichtsrat; der **Aufsichtsrat kontrolliert** den Vorstand und bestellt ihn (Folie 51).',
        'Erstes UMB-Gesetz – **Montan-Mitbestimmungsgesetz (MontanMitbestG, 1951):** erfasst juristische Personen der **Montanindustrie (Kohle/Stahl) mit über 1.000 Beschäftigten**; Sitzverhältnis **1:1 plus ein neutrales Mitglied** (daher immer eine **ungerade** Zahl an AR-Mitgliedern, 11–21); die AN-Seite umfasst Arbeiter, Angestellte und Gewerkschaftsvertreter.',
        'Zweites UMB-Gesetz – **Mitbestimmungsgesetz (MitbestG, 1976):** erfasst juristische Personen mit **über 2.000 Beschäftigten**; Sitzverhältnis **1:1, aber mit doppeltem Stimmrecht des Aufsichtsratsvorsitzenden** (der aus dem Arbeitgeberlager kommt) – daher wird kritisiert, dass es **keine echte Parität** ist; 12–20 AR-Mitglieder; seit 2015 gilt eine **Frauenquote** im Aufsichtsrat.',
        'Drittes UMB-Gesetz – **Drittelbeteiligungsgesetz (DrittelbG, 2004):** erfasst juristische Personen mit **über 500 Beschäftigten**; Sitzverhältnis **2:1 (Arbeitgeber zu Arbeitnehmer)** – die Arbeitnehmer stellen also nur **ein Drittel** des Aufsichtsrats (3–21 Mitglieder).',
        'Neuere Ergänzungen: Seit **8/2021** schreibt das **Führungspositionengesetz II (FüPoG II)** auch einen Frauenanteil im **Vorstand** großer Unternehmen vor; der Frauenanteil des Unternehmens soll außerdem im Aufsichtsrat abgebildet werden (Soll-Vorschrift, Folie 52).',
        'Was will der Gesetzgeber? „**Arbeitgeber und Betriebsrat arbeiten** unter Beachtung der geltenden Tarifverträge **vertrauensvoll** und im Zusammenwirken mit den im Betrieb vertretenen Gewerkschaften und Arbeitgebervereinigungen **zum Wohle der Arbeitnehmer und des Betriebes zusammen.**" (§ 2 Abs. 1 BetrVG, Folie 53).',
        'Klausur-Beispiel Volkswagen AG (Übungsfrage 24): Auf **arbeitsrechtlicher** Ebene gibt es Betriebsrat und Betriebsversammlung nach BetrVG; auf **unternehmerischer** Ebene unterliegt VW als Kapitalgesellschaft mit über 2.000 Beschäftigten dem MitbestG 1976 mit paritätisch besetztem Aufsichtsrat (plus Sonderrechte des Landes Niedersachsen nach dem „VW-Gesetz").',
      ],
    },
  ],
}
