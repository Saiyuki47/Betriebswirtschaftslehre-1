import type { Thema } from '../types'

// Inhalt aus dem BWL-Lernzettel (Vorlesung, Formeln und Übungen).
export const themen: Thema[] = [
  {
    titel: '1 Grundlagen',
    beschreibung: 'ABWL = Allgemeine Betriebswirtschaftslehre.',
    abschnitte: [
      {
        titel: '1.2 Wirtschaftliches Handeln',
        punkte: [
          'Wirtschaften heißt: disponieren über knappe Güter, um direkt oder indirekt menschliche Bedürfnisse zu befriedigen.',
          'Knappe Güter: am jeweiligen Ort zur jeweiligen Zeit nicht in ausreichender Menge oder Qualität verfügbar → erfordern eine Gegenleistung (haben einen Preis).',
          'Freie Güter: am benötigten Ort zur richtigen Zeit in so großen Mengen verfügbar, dass die Bedürfnisse aller gedeckt werden → kostenlos, keine Gegenleistung.',
          'Bedürfnis: Mangelzustand, den es zu bedienen gilt; der Antrieb, warum Menschen überhaupt handeln. Bedarf: das Mittel, um die Bedürfnisse zu befriedigen.',
          'Güterarten: Inputgüter (dienen zum Herstellen anderer Güter: Rohstoffe, Maschinen, Arbeit) vs. Outputgüter (Ergebnisse eines Produktionsprozesses).',
          'Realgüter (realer Wert, z.B. Zeit) vs. Nominalgüter (abgewandelter Wert, z.B. Geldscheine, Anleihen).',
          'Materielle Güter (zum Anfassen, z.B. Produktions-/Konsumgüter) vs. immaterielle Güter (Dienstleistungen, Rechte/Patente).',
          'Gebrauchsgüter (langfristiger Nutzen, z.B. Auto) vs. Verbrauchsgüter (kurzfristiger Nutzen, z.B. Lebensmittel).',
          'Prinzipien beim Wirtschaften: Minimumprinzip (Aufwand/Kosten minimieren), Maximumprinzip (Ertrag/Leistung maximieren), generelles Extremumprinzip (mit möglichst wenig Aufwand das Maximale herausholen).',
          'Messarten: Wirtschaftlichkeit = Ertrag / Aufwand (besser: Gewinn = Ertrag − Aufwand); Produktivität = Output (ME) / Input (ME); Rentabilität (ROI) = (Gewinn / Kapital) × 100.',
        ],
      },
      {
        titel: '1.3 Wirtschaftseinheiten',
        punkte: [
          'Haushalt: deckt nur den Eigenbedarf. Betrieb: deckt den Fremdbedarf und erbringt Leistung, die am Markt angeboten werden kann.',
          'Gutenberg – Betriebe: 1) Kombination von Produktionsfaktoren (Arbeit, Material, Rohstoffe, Zeit); 2) Prinzip der Wirtschaftlichkeit (Ertrag > Aufwand); 3) Prinzip des finanziellen Gleichgewichts (Ausgaben müssen gedeckt sein).',
          'Gutenberg – Unternehmen: 1) Autonomieprinzip (unabhängig, eigene Entscheidungen); 2) erwerbswirtschaftliches Prinzip (müssen Gewinne erzielen); 3) Privateigentum.',
          'Gutenberg – öffentliche Betriebe: 1) Organprinzip (Teil eines Ganzen mit Funktion, z.B. Hochschule eines Landes); 2) Prinzip der zentralen Planerfüllung (Aufgabe wird von oben vorgegeben); 3) Gemeineigentum (gehört der Allgemeinheit).',
        ],
      },
      {
        titel: '1.4 Betriebstypologien',
        punkte: [
          'Hauptleistung: Sachleistung oder Dienstleistung (auch Überschneidungen möglich).',
          'Nach Größe (Umsatz, Kapital, Mitarbeiter): Groß-, Mittel- und Kleinbetriebe – wirkt sich aus auf 1) Publizität, 2) Mitbestimmung, 3) Bilanzrichtliniengesetz.',
          'Rechtsformen: gegliedert in öffentliche und private (gibt aber keine 100%-Auskunft über die Trägerschaft) – wirkt auf Haftung und Besteuerung.',
          'Zielsetzungen: 1) Erwerbswirtschaftlichkeit (Gewinnmaximierung/Einkommensprinzip, z.B. AG, Kiosk); 2) Kostendeckung (z.B. Krankenhäuser); 3) Zuschuss/Subventionen (z.B. Zoos, Theater).',
          'Unternehmensverbände: 1) Arbeitnehmerverbände (freiwillig; verhandeln Arbeitszeit, Urlaub, Gehälter); 2) Wirtschaftsverbände (freiwillig; Interessenvertretung/Lobby, z.B. BDI = Bundesverband der Deutschen Industrie); 3) Kammern (Pflichtmitgliedschaft mit Beitrag, z.B. IHK, Handwerkskammern).',
          'Arbeitnehmer-Gewerkschaften (Gegenpart zu den Arbeitgeberverbänden): Einheitsgewerkschaftsprinzip (gegen politisch/religiös gerichtete Gewerkschaften); Industriegewerkschaftsprinzip (die Masse der Arbeiter zählt, nicht einzelne Berufsgruppen).',
        ],
      },
      {
        titel: '1.5 Gliederung der BWL',
        punkte: [
          'ABWL: gegliedert nach Funktion/Tätigkeit (z.B. Beschaffung, Produktion).',
          'Spezielle BWL: gegliedert nach Objekten/Branche (z.B. Industrie, Handel, Banken).',
        ],
      },
    ],
  },
  {
    titel: '2 Betrieblicher Lebenszyklus',
    beschreibung: 'Vier Phasen eines Unternehmens: Gründung, Wachstum, Stagnation, Schrumpfung.',
    abschnitte: [
      {
        titel: '2.1 Gründung',
        punkte: [
          'Die Gründung erfolgt durch einen Kaufmann/eine Kauffrau.',
          'Gründer: braucht Mut, Visionen und Risikobereitschaft. Die Zahl ist gering (hohes Risiko, alles zu verlieren; hohe Besteuerung; risikoscheue Gesellschaft).',
          'Firma: der Name ist wichtig, da sich davon die Rechtsform ableiten lässt. Kaufmann und Firma verschwimmen juristisch → Schulden/Eigentum der Firma sind auch die des Kaufmanns.',
          'Kaufmann nach HGB: 1) wer ein Handelsgewerbe betreibt (ca. ab 1500 € Monatsumsatz; Kleingewerbe zählt nicht); 2) wer im Handelsregister eingetragen ist; 3) wer eine kaufmännische Rechtsform gewählt hat (AG, KG). Ausnahme: Land-/Forstwirtschaft darf wählen (starke Lobby).',
          'Vorteile Kaufmann: schnellere Geschäfte durch kürzere Prüfungsfristen. Nachteile: Bilanzierungspflicht, kürzere Fristen zur Warenprüfung. Es gilt: Schweigen ist Zustimmung.',
          'Handelsregister: wird beim Amtsgericht geführt, öffentlich einsehbar; enthält eintragungspflichtige (Name, Sitz, Branche …) und freiwillige Eintragungen. Grundsatz des „öffentlichen Glaubens".',
          'Konstitutive (große) Entscheidungen: 1) Wahl der Rechtsform (grundsätzlich frei, aber faktorabhängig); 2) Standortwahl (Strompreise, Verkehrsanbindung, Konkurrenz, Kundenanbindung); 3) personeller Ausbau (Partner: gleichberechtigt, gleiche Haftung, kosten nur bei Gewinn / Mitarbeiter: kosten von Anfang an, leichter entlassbar); 4) Kapitalaufnahme (Eigenkapital = haftendes Kapital, bei Insolvenz weg; Fremdkapital meist mit Voraussetzung 10–20 % Eigenkapital; Subventionen = staatliche Gelder).',
          'Ziel der Gründungsphase: Überleben und Umsatzwachstum. Gewinne sind noch zweitrangig, da viele Unternehmen in den ersten Jahren bankrottgehen.',
        ],
      },
      {
        titel: '2.2 Wachstum',
        punkte: [
          'Wachstumsphase: ab einer Umsatz-Zuwachsrate von etwa 10 %.',
          'Die Verluste gehen zurück und es entstehen erste Gewinne.',
        ],
      },
      {
        titel: '2.3 Stagnation',
        punkte: [
          'Kennzeichen: kein bzw. nur sehr geringes Umsatzwachstum (unter 5 %).',
          'Mit gutem Kostenmanagement oft eine der gewinnträchtigsten Phasen.',
          'Alternativen: 1) Abschöpfungsstrategie (nichts mehr investieren, nur den Gewinn herausholen); 2) Desinvestment / Ausstieg auf hohem Niveau (Nicht-Benötigtes oder die ganze Firma verkaufen, Preis > zukünftiger Gewinn); 3) Unternehmenszusammenschlüsse.',
          'Zusammenschlüsse nach Bindungsintensität: lose = Kartell (evtl. illegale Absprachen), Teilintegration = Kooperationen, Fusionen (vollständiges Verschmelzen).',
          'Zusammenschlüsse nach Richtung: horizontal (gleiche Ebene, z.B. zwei Autohersteller; Motiv: Marktmacht); vertikal vorwärts (Richtung Kunde, z.B. Hersteller + Werkstatt) oder rückwärts (Richtung Zulieferer, z.B. Hersteller + Reifenhersteller); Konglomerat (branchenfremd, z.B. Autohersteller + Bäcker; Motiv: Risikostreuung, nachvollziehbar bei Familienunternehmen).',
          'In der Praxis sind Zusammenschlüsse selten erfolgreich: interne Probleme, Schwerfälligkeit, geringere Wettbewerbsfähigkeit.',
        ],
      },
      {
        titel: '2.4 Schrumpfung',
        punkte: [
          'Die Umsätze sinken langsam; es kann zu Krisen und letztlich zur Insolvenz kommen.',
          'Krisen: ungewollte/ungeplante Ereignisse, die zu einer zugespitzten Situation führen; bieten aber auch die Chance zur Reflexion.',
          'Ursachen: endogen (aus dem Unternehmen heraus, z.B. Managementfehler, zu wenig Eigenkapital) vs. exogen (von außen, z.B. Marktveränderung, rechtliche Änderungen).',
          'Insolvenz: bei Unternehmen und Privatpersonen; Gründe: Rechnungen nicht mehr zahlbar, zu wenig Eigenkapital. Ziele: Gläubiger sollen möglichst viel zurückbekommen; (nur Privat) redliche Schuldner werden entschuldet und bekommen eine zweite Chance.',
          'Alternativen zur Insolvenz: 1) Sanierung (Unternehmen wird wiederhergestellt; ein Insolvenzverwalter wird als gesetzlicher Vertreter/Manager eingesetzt und verhindert, dass der Eigentümer Vermögen beiseiteschafft); 2) übertragene Sanierung (Verkauf, der neue Eigentümer saniert); 3) Liquidation (Zerschlagung: einzelne Vermögensgegenstände werden verkauft, der Erlös geht an die Gläubiger).',
        ],
      },
    ],
  },
  {
    titel: '3 Mengen und Werte',
    abschnitte: [
      {
        titel: '3.1 Jahresabschluss',
        punkte: [
          'Wird einmal im Jahr gemacht (durch das HGB vorgeschrieben) und besteht aus Bilanz sowie Gewinn- und Verlustrechnung. Ein Jahr ist nicht zwingend ein Kalenderjahr.',
          'Handelsbilanz: hat eine Aktivseite (Mittelverwendung) und eine Passivseite (Mittelherkunft).',
          'Aktivseite – Anlagevermögen (langfristig): immaterielle Vermögensgegenstände (Patente, Geschäftswert), Sachanlagen (Grundstück, Maschinen), Finanzanlagen (langfristige Aktien). Umlaufvermögen (kurzfristig): Vorräte, Forderungen, Wertpapiere, flüssige Mittel (Kasse, Bank). Plus Rechnungsabgrenzungsposten (im Voraus fürs nächste Jahr bezahlt, z.B. Miete).',
          'Passivseite: Eigenkapital (inkl. Gewinn-/Verlustvortrag und Jahresüberschuss), Rückstellungen (für ungewisse künftige Kosten/Schulden), Verbindlichkeiten (Fremdkapital), Rechnungsabgrenzungsposten (Geld, das schon fürs nächste Jahr erhalten wurde, z.B. Miete erhalten).',
          'Bilanzzwecke: 1) Rechenschaft/Rechnungslegung (gegenüber sich selbst, Banken, Gesellschaftern); 2) Informationszweck (Grundlage für Entscheidungen); 3) Zahlungsbemessungszweck (Gewinnausschüttung; Basis für die Steuerbilanz des Staates).',
          'Problem: das „Humanvermögen" (Wert der Mitarbeiter und Kunden) lässt sich nicht richtig messen.',
          'Seit 2005 müssen kapitalmarktorientierte Firmen (Aktien/Anleihen) zusätzlich nach IFRS (International Financial Reporting Standard) bilanzieren.',
          'HGB vs. IFRS: HGB → Gläubigerschutz, Rechenschaft + Zahlungsbemessung, Firma wirkt durch stille Reserven ärmer als sie ist. IFRS → Informationszweck/Entscheidungsfindung („true and fair view"), keine stillen Reserven, „good will" (zeigt auch den Wert von Mitarbeitern/Kunden).',
          'Probleme der IFRS: höherer Aufwand (bis zu 3 Bilanzierungen); höhere Steuern wegen stärkerer Gewinnausschüttung (v.a. am Anfang); IFRS gilt als zu instabil.',
        ],
      },
      {
        titel: '3.2 Betriebswirtschaftliche Kennzahlen',
        punkte: [
          'Machen nur Sinn, wenn man sie nutzt, um Entscheidungen zu treffen, und dazu bereit ist.',
          'Eigenschaften: 1) Maßgrößencharakter (messen, ob man auf dem richtigen Weg ist); 2) Verdichtungscharakter (Informationen werden zusammengefasst, Nachteil: Informationsverlust); 3) Entscheidungsbezug.',
          'Einsatzgebiete: 1) Zeit-/Periodenvergleich (gleiche Kennzahl über einen Zeitraum); 2) Bereichs-/Abteilungsvergleich (intern; kann Wettbewerb zwischen Bereichen fördern); 3) Betriebsvergleich (gleiche Branche, funktioniert gut ohne Konkurrenz); 4) Soll-Ist-Vergleich (anhand vorgegebener Richtgrößen/Ziele).',
        ],
      },
    ],
  },
  {
    titel: '4 Rechtsformen und Mitbestimmung',
    abschnitte: [
      {
        titel: 'Privatrechtliche Rechtsformen',
        punkte: [
          'Einzelunternehmen: häufigste Rechtsform in Deutschland; nur ein Eigentümer; erkennbar am Namen (kein Zusatz); leicht zu gründen, kein Mindestkapital.',
          'Personengesellschaften (mind. 2 Eigentümer): GbR (Gesellschaft bürgerlichen Rechts) – keine echte Rechtsform, sondern Vorform; entsteht spontan bei gemeinschaftlichem Handeln.',
          'OHG (Offene Handelsgesellschaft): echte Rechtsform; kein Mindestkapital; 2+ Eigentümer haften mit ihrem Eigenkapital; Handelsregistereintrag nötig; Haftung voll (Eigenkapital) und solidarisch (gemeinschaftlich).',
          'KG (Kommanditgesellschaft): Komplementäre haften voll und solidarisch und haben volle Geschäftsbefugnis; Kommanditisten bringen Kapital mit, haften nur mit diesem und haben weniger Mitspracherecht.',
          'Stille Gesellschaft: Eigenkapitalgeber im Hintergrund einer anderen Rechtsform; sie haben nichts zu melden und treten nach außen nicht auf.',
          'Kapitalgesellschaften – AG (Aktiengesellschaft): Rechtsform für Großunternehmen; Mindestkapital aktuell 50.000 €; viele Vorschriften und eigene Gesetze; leichter Ein- und Ausstieg über Kauf/Verkauf von Aktien.',
          'GmbH (Gesellschaft mit beschränkter Haftung): Geschäftsführer + Gesellschafterversammlung; Mindestkapital 25.000 €; kompliziertes Rein- und Rauskommen; Haftung nur mit dem eingelegten Kapital; oft sehr groß; engere Eigentümerstruktur.',
          'UG (Unternehmergesellschaft): kein Mindestkapital nötig, niemand haftet voll; aus Eigentümersicht das Beste, aus Kundensicht eher schlecht; ab 25.000 € meist Umgründung zur GmbH.',
        ],
      },
      {
        titel: 'Öffentlich-rechtliche Rechtsformen',
        punkte: [
          'Ohne eigene Rechtspersönlichkeit.',
          'Mit eigener Rechtspersönlichkeit.',
        ],
      },
      {
        titel: 'Mitbestimmung – die deutsche „Spielart"',
        punkte: [
          'Anliegen: 1) gerechte Entlohnung; 2) humane Arbeitsbedingungen; 3) Arbeitsplatzsicherheit; 4) Beteiligung der Arbeitnehmer an Gewinn und Vermögen; 5) Mitwirkung / -entscheidung / -bestimmung.',
          'Begründungen: Würde des Menschen und Recht auf Selbstbestimmung gelten auch im Betrieb; Demokratieprinzip; Kontrolle wirtschaftlicher Macht.',
          'Zwei Arten: arbeitsrechtliche Mitbestimmung (ARM) – gilt für Betriebe ab 5 Mitarbeitern; unternehmerische Mitbestimmung (UMB) – gilt nur für Kapitalgesellschaften (AG, GmbH, UG).',
          'Unternehmerische Mitbestimmung – Vorstand (VO/GF): kümmert sich ums Personal, führt die Geschäfte, hat eine starke Stellung, hat nur befristete Verträge; wird vom Aufsichtsrat bestellt (nicht von ihm gewählt!).',
          'Aufsichtsrat (AR): bestellt und kontrolliert den Vorstand; setzt sich aus Anteilseigner- und Arbeitnehmervertretern zusammen.',
          'Wahl der Aufsichtsrats-Mitglieder: Die Belegschaft/Arbeitnehmer wählen die Arbeitnehmervertreter (Kern der Mitbestimmung), die Hauptversammlung (HV/GV) wählt die Arbeitgeber-/Anteilseignervertreter.',
          'Hauptversammlung (HV/GV): findet 1× im Jahr statt, trifft wichtige Entscheidungen (Gewinnverwendung, Fusionen …) und wählt die Arbeitgebervertretung im Aufsichtsrat.',
          'Wichtig: Es gilt immer nur ein Mitbestimmungsgesetz!',
        ],
      },
    ],
  },
  {
    titel: '5 Ziele im Unternehmen',
    abschnitte: [
      {
        titel: '5.1 Grundlagen',
        punkte: [
          'Ziele sind „normative (wertende) Aussagen des Entscheidungsträgers über einen in der Zukunft zu erreichenden Zustand".',
          'Funktionen des Zielsystems: Entscheidungs-, Koordinations-, Motivations-, Informations-, Kontroll- und Legitimationsfunktion.',
          'Kennzeichen eines Ziels: 1) Zielinhalt (welche Größe wird beeinflusst? z.B. Kosten, Betriebsklima); 2) Zielausmaß (z.B. +X % gegenüber …); 3) zeitlicher Bezug (wann? z.B. 1 Monat, 1 Jahr); 4) sachlicher Geltungsbereich (für wen? z.B. Mitarbeiter, Werk).',
          'Zielpyramide (oben → unten): 1) Vision (qualitative, konkrete Bilder der Zukunft); 2) Unternehmensleitbild (qualitative Leitsätze als Minimalkompromiss; Unternehmensphilosophie); 3) Unternehmensziele (gelten für den ganzen Konzern, Kompromisse, klar und möglichst messbar); 4) Geschäftsziele (große differenzierbare Bereiche); 5) Funktionsbereichsziele (bis auf eine einzelne Stelle herunterbrechbar).',
        ],
      },
      {
        titel: '5.2 Empirische Thesen',
        punkte: [
          '„Unternehmensziele liegen nicht von vornherein fest": Ziele müssen immer wieder erarbeitet/überarbeitet werden – der Prozess ist multipersonell (mehrere Personen), multioperational (mehrere Schritte) und multitemporal (zu verschiedenen Zeiten).',
          '„Ziele sind das Ergebnis von Entscheidungsprozessen": verschiedene Stakeholder (Eigentümer, Mitarbeiter, Gläubiger, Staat, Gesellschaft …) werden unterschiedlich stark eingebunden.',
          '„Interessendurchsetzung hat mit Macht zu tun": Gruppeninteressen (Abteilungen, regionale/informelle Gruppen) müssen ausgehandelt werden, v.a. bei der Planung (wer bekommt wie viel Geld). Lösung: ein Zielsystem als Kompromiss.',
        ],
      },
      {
        titel: '5.3 Ein Entstehungsmodell',
        punkte: [
          'Bedürfnispyramide (Maslow) und betriebliche Befriedigung – physiologische Bedürfnisse (Essen, Trinken, Schlaf) → ausreichende Bezahlung, Ruheräume, Kantine, kostenlose Getränke.',
          'Sicherheitsbedürfnisse (Unversehrtheit, unbefristete Stelle, Absicherung) → Arbeitsschutz, unbefristete Verträge, Zuschüsse zu Betriebsrente und Krankenversicherung.',
          'Soziale Bedürfnisse (menschlicher Kontakt) → Betriebsausflüge, Betriebsferien.',
          'Wertschätzung (Geld, Dienstwagen, Urlaube, Anerkennung/Loben) → angemessene Bezahlung und Prämien, Benefits (Dienstwagen, schönes Büro, Assistent), Loben.',
          'Selbstverwirklichung (Freude und Sinn an der Arbeit) → Freiräume einräumen, Vertrauen entgegenbringen, die Möglichkeit geben sich auszuprobieren (verschiedene Positionen/Abteilungen).',
          'Ansprüche von Gruppen: Stakeholder View (viele Gruppen entscheiden mit – Kunden, Lieferanten, soziale Gruppen; eher deutsche Sicht) vs. Shareholder View (Fokus auf Gewinnsteigerung; international verbreitet).',
          'Existenzbedingungen der Unternehmen: Rentabilität (es muss Geld erwirtschaftet werden); Liquidität („nicht alles, aber ohne Liquidität ist alles nichts" – Werkzeug der Finanzplanung); Wachstum (ermöglicht Kostendeckung und Marktmacht); Planbarkeit (verlässliche Rechtsformen, Vertragsfreiheit, Akzeptanz → Investitionsbereitschaft).',
          'Unternehmensphilosophie & -kultur: Einstellung/Selbstbild des Unternehmens, oft im Leitbild verschriftlicht – Gesellschaftsbild, Menschenbild, Legitimation (Shareholder vs. Stakeholder), Einstellung zur Ökonomie.',
          'Unternehmenskultur: „Gesamtheit von im Laufe der Zeit entstandenen und akzeptierten Werten und Normen, die das Entscheiden und Handeln der Mitglieder prägen". Sie ist das tatsächlich Gelebte, schwer planbar und im ständigen Wandel.',
          'Symbolsystem: Legenden/Mythen (erzeugen Zusammenhalt, z.B. Microsoft-Start in der Garage); Rituale (geben Halt, z.B. feierliche Rentenverabschiedung); Corporate Identity (einheitliches Erscheinungsbild nach außen, z.B. Kleidungscode); wahrgenommene Atmosphäre (Pünktlichkeit, Höflichkeit); Kommunikationsstil (direkt/indirekt).',
          'Einflussfaktoren: Geschichte des Unternehmens, Führungsfiguren, Branche, Land, Religion (z.B. protestantische Ethik nach Max Weber), Wettbewerbssituation (wenig Konkurrenz → Gemütlichkeit).',
          'Dimensionen der Kultur: Risikobereitschaft, Geschwindigkeit der Marktreaktion, Offenheit (zukunfts- vs. traditionsorientiert), Differenziertheit (Vielfalt als Chance oder Bedrohung).',
          'Kulturtypen nach Deal/Kennedy: Risiko-Kultur (hohes Risiko, langsames Feedback, z.B. Forschung); Macho-Kultur (hohes Risiko, schnelles Feedback, z.B. Unternehmensberatung, Start-ups); Prozess-Kultur (niedriges Risiko, langsames Feedback, z.B. Versicherung, öffentliche Verwaltung); Brot-und-Spiele-Kultur (niedriges Risiko, schnelles Feedback, z.B. Handel).',
        ],
      },
      {
        titel: '5.4 Zielkonflikte',
        punkte: [
          'Wir können nie alle Ziele gleichzeitig erfüllen: „Jeder Euro kann nur einmal ausgegeben werden."',
          'Konflikte zwischen Ökologie – Ökonomie – soziale Bedürfnisse, aber auch innerhalb der ökonomischen Ziele.',
          'Leistungsziele: im Vordergrund steht die Leistung, das, was das Unternehmen im Wesentlichen tut.',
          'Erfolgsziele: im Vordergrund stehen der Gewinn und die zugehörigen Kennzahlen.',
          'Finanzziele: im Vordergrund steht das Verhältnis der Geldströme (Ein- und Auszahlungen), mit denen die Liquidität gemessen wird. Alle drei Bereiche müssen betrachtet werden.',
        ],
      },
    ],
  },
  {
    titel: 'Übungen',
    beschreibung: 'Übungsfragen aus dem Lernzettel mit Lösungen.',
    abschnitte: [
      {
        titel: 'Frage 2 – Indizes & Euro-Kurs',
        punkte: [
          'Vier Kategorien von Indizes: Aktien, Anleihen, Rohstoffe, Währungen.',
          'Aktien (DAX, M-DAX, Euro-STOXX): repräsentieren das Eigenkapital und spiegeln erwartete künftige Gewinne; volatil, daher nicht für kurzfristige Strategien. M-DAX (50 mittelgroße Firmen) performt oft besser als der DAX (flexibler); der Euro-STOXX schnitt wegen EU-Krisen schlechter ab. Nicht impulsiv in sinkende Märkte investieren.',
          'Anleihen: repräsentieren das Fremdkapital von Unternehmen/Staaten und gelten als weniger riskant als Aktien.',
          'Rohstoffe (Gold, Silber, Rohöl): Gold ist trotz geringer industrieller Nutzung und fehlender Erträge wegen seines emotionalen/historischen Werts sehr wertvoll; Rohöl ist günstiger, aber für die Industrie äußerst wichtig.',
          'Währungen (Euro, Dollar): Euro/Dollar ist eine wichtige Größe; langfristig negative Entwicklung (Dollar wird stärker als der Euro).',
          'Starker vs. schwacher Euro: Vom starken Euro profitieren günstigere Importe (v.a. Öl/Gas, in $ abgerechnet) und deutsche Touristen in den USA. Vom schwachen Euro profitieren Exporteure (ca. 10 % gehen in den Dollarraum), US-Touristen in Deutschland und die EZB (will Wachstum/Inflation, um überschuldeten Ländern zu helfen).',
          'Fazit: Deutschland braucht eher eine starke Währung, weil es stark von in Dollar gehandelten Importen abhängt, während nur ein kleiner Teil der Exporte in den Dollarraum geht.',
        ],
      },
      {
        titel: 'Frage 3 – Wirtschaften',
        punkte: [
          'Was versteht man unter Wirtschaften? Das Handeln mit knappen Gütern.',
          'Warum muss der Mensch wirtschaften? Weil die meisten Güter knapp sind.',
        ],
      },
      {
        titel: 'Frage 4 – Rationalitätslehre',
        punkte: [
          'Warum versteht sich die BWL als Rationalitätslehre? Durch das Wirtschaften mit fremden Gütern.',
          'Entscheiden Menschen immer rational? Nein, meist emotional/intuitiv.',
          'Zwei Formen der Rationalität: intuitiv/emotional (aus Erfahrung gewonnen) und rational (Vernunft aufgrund von Abwägungen) – mit individueller Rationalität (Ziele/Bedürfnisse) und kollektiver Rationalität (kategorische Imperative).',
        ],
      },
      {
        titel: 'Frage 5 – Ökonomisches Prinzip (Reisebüro)',
        punkte: [
          'a) „Für 2000 € möglichst weit weg" → Maximumprinzip.',
          'b) „Möglichst billiges Angebot für einen Badeurlaub" → Minimumprinzip.',
          'c) „Für möglichst wenig Geld möglichst lange Urlaub" → Extremumprinzip.',
        ],
      },
      {
        titel: 'Frage 6 – Produktivität, Wirtschaftlichkeit, Rentabilität',
        punkte: [
          'Wie stehen die Begriffe zueinander? Produktivität = Output (ME) / Input (ME) – rein mengenbezogen. Wirtschaftlichkeit = Ertrag / Aufwand – wertbezogen. Rentabilität (ROI) = (Gewinn / Kapital) × 100 – setzt den Erfolg ins Verhältnis zum eingesetzten Kapital.',
        ],
      },
      {
        titel: 'Frage 7 – Marktanteil & Kennzahlen',
        punkte: [
          'Marktanteil: Anteil eines Unternehmens am Gesamtmarkt – nicht zweifelsfrei definierbar, da man Verschiedenes zählen kann (Umsatz, Kunden, Produktion, Export/Import, Region, Zeit, Ort, Absatz).',
          'Kennzahlen je Unternehmen (A / B / C): Wirtschaftlichkeit (Umsatz/Ist-Kosten): 1,02 / 1,07 / 1,00. Arbeitsproduktivität (Produktion/Beschäftigte): 11,1 / 17,86 / 18,33. Umsatzrentabilität (Gewinn/Umsatz × 100): 2,37 % / 6,3 % / 0,9 %.',
          'Weitere Kennzahlen: Gewinn/PKW (600 / 1700 / 227), Ertrag (Umsatz)/PKW (25.332 / 27.000 / 25.000), Aufwand (Ist-Kosten)/PKW (24.733 / 25.300 / 24.772).',
          'Für eine Investitionsentscheidung zusätzlich nötig: in welchem Lebenszyklus das Unternehmen steht, Aktienkurs- und Umsatzentwicklung der Vergangenheit, aktuelle Aktienkurse/Dividende sowie die Gewinnplanung für die Zukunft.',
        ],
      },
    ],
  },
]
