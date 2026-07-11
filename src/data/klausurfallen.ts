// Klausur-Fallen: nicht-intuitive Stolperfallen der ABWL I, die man extra lernen
// muss – zusammengetragen aus Übungsbegleiter (aufgaben.ts), Vorlesungsfolien
// (themen*) und den Altklausuren SS 2015 – WS 2017/18 (altklausuren.ts).
// Jede Falle: worum es geht (falle), ein „so nicht / sondern so" (falsch/richtig)
// ODER ein Beispiel (beispiel), plus ein Merksatz (merke).
// Formeln stehen in der Projekt-Syntax: [[Zähler|Nenner]] für Brüche, **fett** für
// Hervorhebungen (gerendert über FormelText – KEIN KaTeX/$…$).

export interface Falle {
  titel: string
  /** Warum es eine Falle ist. */
  falle: string
  /** Optionales „So nicht". */
  falsch?: string
  /** Optionales „Sondern so". */
  richtig?: string
  /** Optionales neutrales Beispiel / Rechenweg (mehrzeilig erlaubt). */
  beispiel?: string
  /** Kernbotschaft zum Merken. */
  merke?: string
}

export interface FalleGruppe {
  id: string
  icon: string
  titel: string
  fallen: Falle[]
}

export const klausurFallen: FalleGruppe[] = [
  // ===========================================================================
  {
    id: 'kennzahlen',
    icon: '🧮',
    titel: 'Kennzahlen & Formeln',
    fallen: [
      {
        titel: 'Wirtschaftlichkeit = Umsatz ÷ Istkosten',
        falle: 'Die Wirtschaftlichkeit ist **Ertrag/Aufwand** – im Kennzahlen-Beispiel also **Umsatz durch Istkosten**. Die verlockend danebenstehenden **Sollkosten** gehören NICHT in diese Formel (sie dienen nur der Kostenabweichung Ist − Soll).',
        falsch: '[[Sollkosten|Istkosten]]',
        richtig: '[[Umsatz (Ertrag)|Istkosten (Aufwand)]]  → Wert > 1 = wirtschaftlich',
        merke: 'Wirtschaftlichkeit = Ertrag/Aufwand. Sollkosten sind eine Ablenkung – erst bei der Kostenabweichung (Ist − Soll) gebraucht.',
      },
      {
        titel: 'Produktivität ≠ Wirtschaftlichkeit ≠ Rentabilität',
        falle: 'Die drei messen auf VERSCHIEDENEN Ebenen: Produktivität rein **mengenmäßig**, Wirtschaftlichkeit **wertmäßig** (in €), Rentabilität bezogen aufs **Kapital**. Sie bauen aufeinander auf, sind aber nicht dasselbe. Teilproduktivitäten (Arbeit, Material, Energie) haben verschiedene Einheiten und lassen sich NICHT miteinander verrechnen.',
        beispiel: 'Produktivität  = [[Output (ME)|Input (ME)]]     (Menge)\nWirtschaftl.   = [[Ertrag (€)|Aufwand (€)]]      (Wert)\nRentabilität   = [[Gewinn|Kapital]] × 100   (Kapital)',
        merke: 'Menge → Wert → Kapital. Nur der **Gewinn** (= Ertrag − Aufwand) nennt einen absoluten €-Betrag – deshalb rechnen Unternehmer damit.',
      },
      {
        titel: 'Verschuldungsgrad vs. Verschuldungsquote',
        falle: 'Verwechslungsklassiker: gleicher Zähler (FK), aber **anderer Nenner**. Der Verschuldungs**grad** teilt durch das **EK**, die Verschuldungs**quote** durch das **GK**.',
        falsch: 'Verschuldungsgrad = [[FK|GK]]',
        richtig: 'Verschuldungsgrad = [[FK|EK]]   ·   Verschuldungsquote = [[FK|GK]] × 100',
        merke: 'Grad → auf das Eigenkapital (FK/EK). Quote → auf das Gesamtkapital (FK/GK); Verschuldungsquote + EK-Quote = 100 %.',
      },
      {
        titel: 'EK und FK nur über den Verschuldungsgrad gegeben',
        falle: 'Standard-Trick: gegeben sind nur **Bilanzsumme (GK)** und **Verschuldungsgrad VG = FK/EK**, gesucht EK und FK. Weil GK = EK · (1 + VG), gilt **EK = GK/(1 + VG)** und dann FK = GK − EK. Wer VG direkt als FK/EK einsetzt, ohne aufzulösen, kommt nicht weiter.',
        beispiel: 'GK = 120.000 €, VG = 2\nEK = [[120.000|1 + 2]] = 40.000 €\nFK = 120.000 − 40.000 = 80.000 €',
        merke: 'Aus VG erst EK = [[GK|1 + VG]] herausrechnen. „Doppelt so viel EK wie Schulden" heißt VG = 0,5 (nicht 2!).',
      },
      {
        titel: 'GKR-Zähler ist der Kapitalgewinn (JÜ + FK-Zinsen)',
        falle: 'Bei der Gesamtkapitalrentabilität (= ROI) steht im Zähler NICHT der Jahresüberschuss, sondern der **Kapitalgewinn = JÜ + Fremdkapitalzinsen**. Die FK-Zinsen sind der Ertrag des Fremdkapitals und müssen wieder hinzugerechnet werden.',
        falsch: 'GKR = [[JÜ|GK]] × 100',
        richtig: 'GKR = [[JÜ + FK × Zinssatz|GK]] × 100      (ROI = GKR)',
        merke: 'GKR = Verzinsung des GESAMTEN Kapitals → FK-Zinsen wieder draufrechnen. Nur der EKR-Zähler ist der reine JÜ.',
      },
      {
        titel: 'Rentabilität mit noch nicht verwendetem Gewinn',
        falle: 'Steckt der Jahresüberschuss noch im ausgewiesenen EK/GK (Fall „vor Gewinnverwendung"), muss er im NENNER abgezogen werden – sonst rechnet man mit dem Gewinn gegen sich selbst. Das übersieht man leicht, wenn die Aufgabe „JÜ ist im EK enthalten" nur nebenbei erwähnt.',
        beispiel: 'ROI = [[JÜ|GK − JÜ]] × 100\nEKR = [[JÜ|EK − JÜ]] × 100    (Bsp.-Bilanz: 0,4/2,5 = 16 %)',
        merke: 'Ist der JÜ noch nicht ausgeschüttet/entnommen → im Nenner (GK − JÜ) bzw. (EK − JÜ) rechnen.',
      },
      {
        titel: 'Leverage wirkt nur bei GKR > FK-Zins positiv',
        falle: 'Mehr Fremdkapital hebt die EKR NICHT automatisch. Der Hebel ist nur positiv, solange die Gesamtkapitalrendite über dem FK-Zins liegt (GKR > FKZ). Fällt die GKR darunter, drückt jeder weitere Kredit die EKR ins Minus.',
        beispiel: 'EKR = GKR + (GKR − FKZ) × [[FK|EK]]\nGKR 10 %, FKZ 5 %, VG 2 → 10 + 5 × 2 = 20 % (positiv)\nGKR 4 %, FKZ 5 %, VG 1  → 4 − 1 = 3 %  (negativ!)',
        merke: 'Hoher Verschuldungsgrad = mehr Chance UND mehr Risiko. Nur GKR > FKZ ⇒ Fremdkapital lohnt sich fürs Eigenkapital.',
      },
      {
        titel: 'Kontrolle: EKR > GKR > FK-Zins',
        falle: 'Bei positivem Leverage liegt die GKR IMMER zwischen EK-Zins und FK-Zins: EKR > GKR > FKZ. Kommt in der Klausur eine andere Reihenfolge heraus, wurde fast sicher falsch gerechnet (typisch: FK-Zinsen bei der GKR vergessen).',
        beispiel: 'Igel KG: EKR 25 % > GKR 13 % > FKZ 5 %  ✓\nHabenichts: EKR 31,25 % > GKR 25 % > FKZ 12,5 %  ✓',
        merke: 'Ergebnis immer gegen EKR > GKR > FKZ prüfen. Die GKR liegt zwischen den beiden anderen.',
      },
      {
        titel: 'Anlagendeckung II nimmt das langfristige FK mit',
        falle: 'Anlagendeckung I deckt das Anlagevermögen nur mit EK, Anlagendeckung II ZUSÄTZLICH mit dem **langfristigen** Fremdkapital. Das langfr. FK im Zähler zu vergessen, ist der häufigste Fehler – dann kommt statt ~100 % ein viel zu kleiner Wert heraus.',
        falsch: 'Anlagendeckung II = [[EK|AV]] × 100',
        richtig: 'Anlagendeckung II = [[EK + langfr. FK|AV]] × 100   (soll ≥ 100 %)',
        merke: 'Goldene Bilanzregel: langfristiges Vermögen langfristig finanzieren → Deckung II soll mindestens 100 % sein.',
      },
      {
        titel: 'Liquidität: Nenner ist kurzfr. FK + pass. RAP',
        falle: 'Alle drei Liquiditätsgrade haben denselben Nenner (**kurzfristiges FK + passive RAP**) – nur der Zähler wächst. Wer die passiven RAP vergisst oder das gesamte FK statt nur des kurzfristigen nimmt, rechnet falsch.',
        beispiel: 'Liq. I   = [[Guthaben|kurzfr. FK + pass. RAP]] × 100         (~10–30 %)\nLiq. II  = [[+ kurzfr. Forderungen|kurzfr. FK + pass. RAP]] × 100  (~100 %)\nLiq. III = [[+ Vorräte|kurzfr. FK + pass. RAP]] × 100            (~150–200 %)',
        merke: 'Nenner immer nur die KURZfristigen Schulden (+ pass. RAP). Zähler stufenweise aufbauen: Geld → + Forderungen → + Vorräte.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'bilanz',
    icon: '📊',
    titel: 'Bilanz & Rechnungswesen',
    fallen: [
      {
        titel: 'Rückstellungen ≠ Verbindlichkeiten',
        falle: 'Rückstellungen stehen auf der **Passivseite** (zwischen EK und Verbindlichkeiten) und sind **ungewisse** Verbindlichkeiten: Höhe und/oder Fälligkeit sind noch unsicher (z. B. Prozess-, Pensions-, Gewährleistungsrückstellungen). Verbindlichkeiten sind dagegen nach Grund, Höhe und Termin sicher.',
        merke: 'Rückstellung = ungewisse Verbindlichkeit (Fremdkapitalcharakter), Passivseite. Nicht mit „normalen" Verbindlichkeiten gleichsetzen.',
      },
      {
        titel: 'Aktivseite nach steigender Liquidierbarkeit',
        falle: 'Die Aktivseite ist von oben nach unten nach ZUNEHMENDER Liquidierbarkeit (abnehmender Fristigkeit) geordnet: erst **Anlagevermögen** (langfristig gebunden), dann **Umlaufvermögen** (kurzfristig), zuletzt **RAP**. Nicht andersherum.',
        merke: 'Aktivseite: AV → UV → RAP (oben langfristig, unten liquide). Passivseite = Mittelherkunft (EK, Rückstellungen, Verbindlichkeiten).',
      },
      {
        titel: 'Humanvermögen ist nach HGB nicht aktivierbar',
        falle: 'Das eingespielte Team (Wissen, Motivation, Kundenstamm) schafft Wert, darf aber nach **HGB** NICHT aktiviert werden – es ist nicht zuverlässig messbar und nicht entgeltlich erworben (Vorsichtsprinzip). Die Bilanz zeigt das Unternehmen dadurch „ärmer", als es ist.',
        richtig: 'IFRS löst es nur TEILWEISE über den Goodwill (Firmenwert) beim Unternehmenskauf – selbst geschaffenes Humanvermögen bleibt auch dort außen vor.',
        merke: 'Selbst geschaffene immaterielle Werte: HGB gar nicht, IFRS nur als gekaufter Goodwill.',
      },
      {
        titel: 'Drei Bilanzzwecke ↔ passender Stakeholder',
        falle: 'Typische Zuordnungsfrage – jeder Bilanzzweck hat SEINE Anspruchsgruppe. Wer die drei Zwecke kennt, aber die Stakeholder falsch zuordnet, verliert Punkte.',
        beispiel: 'Rechenschaft     → Eigentümer / Gesellschafter\nInformation      → Gläubiger, Banken, Investoren\nZahlungsbemessung → Fiskus (Steuern) + Anteilseigner (Dividende)',
        merke: 'HGB ist gläubigerschutz-/vorsichtsorientiert (Rechenschaft, Zahlungsbemessung); IFRS stellt die Information voran („true and fair view").',
      },
      {
        titel: 'Factoring betrifft KURZfristige Forderungen',
        falle: 'Factoring = laufender Verkauf von **kurzfristigen** Forderungen aus Lieferungen und Leistungen an einen Factor gegen sofortige Liquidität (abzüglich Abschlag). Die Formulierung „Forderungsverkauf" verleitet dazu, an langfristige Forderungen zu denken – falsch.',
        merke: 'Factoring = kurzfristige Forderungen → sofortige Liquidität. Kosten hängen ab von Bonität, Volumen, Laufzeit und Streuung der Forderungen.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'rechtsformen',
    icon: '🏛',
    titel: 'Rechtsformen',
    fallen: [
      {
        titel: 'Mindestkapital: AG 50.000, GmbH 25.000, UG 1 €',
        falle: 'Die genauen Beträge werden gern verwechselt. Nur Kapitalgesellschaften haben ein vorgeschriebenes Mindest-/Stammkapital; EU, OHG und KG haben KEINES.',
        beispiel: 'AG   = 50.000 € Grundkapital\nGmbH = 25.000 € Stammkapital\nUG   =      1 € (Mini-GmbH)\nEU / OHG / KG = kein Mindestkapital',
        merke: 'GmbH 25.000, AG das Doppelte (50.000). „Ohne Privathaftung + kein Mindestkapital" gibt es nicht – die UG genügt mit 1 €.',
      },
      {
        titel: 'KG-Haftung: nur der Komplementär haftet voll',
        falle: 'Bei der KG haftet der **Komplementär** unbeschränkt (auch privat) und führt die Geschäfte; der **Kommanditist** haftet NUR bis zur Höhe seiner Einlage und ist von der Geschäftsführung ausgeschlossen. Wer beide gleich behandelt, liegt falsch.',
        richtig: 'Eselsbrücke: „KomplemenTÄR haftet MÄHR." Kommanditist = Teilhafter (nur Einlage).',
        merke: 'Eine KG braucht mindestens 1 Komplementär + 1 Kommanditist (also ≥ 2 Personen).',
      },
      {
        titel: 'Gewinnverteilung ohne Gesellschaftsvertrag',
        falle: 'Fehlt eine Regelung im Vertrag, greift die gesetzliche Verteilung – und die ist je Rechtsform verschieden. Kapitalgesellschaften teilen nach Kapitalanteil, Personengesellschaften NICHT.',
        beispiel: 'EU  → alles an den Inhaber\nOHG → gleiche Aufteilung unter den Gesellschaftern (nach Köpfen)\nKG  → nach Personen (Lösung: Vorabgewinn im Vertrag)\nGmbH / AG → nach Kapitalanteil',
        merke: 'Nur bei Kapitalgesellschaften „nach Kapital". Bei OHG nach Köpfen – nicht nach Einlagehöhe.',
      },
      {
        titel: 'Kaufmannsformen des HGB auseinanderhalten',
        falle: 'Das HGB kennt mehrere Kaufmannsbegriffe, die gern vertauscht werden – jeweils mit anderem Paragraphen und Entstehungsgrund.',
        beispiel: 'Istkaufmann   (§ 1) – kraft Handelsgewerbe\nKannkaufmann  (§ 2/§ 3) – kraft freiwilliger Eintragung\nFormkaufmann  (§ 6) – kraft Rechtsform (AG, GmbH, OHG, KG …)\nSchein-/Fiktivkaufmann (§ 5) – kraft Rechtsschein',
        merke: '„Kraft Eintragung" = Kannkaufmann (§ 2). „Kraft Rechtsform" = Formkaufmann (§ 6). Nicht verwechseln.',
      },
      {
        titel: 'Stiller Kapitalgeber = Kommanditist, nicht „stille GmbH"',
        falle: 'Wer Kapital geben, aber weder mitleiten noch privat haften will, wird **Kommanditist** einer KG (braucht dazu einen Komplementär). Soll die Haftung natürlicher Personen ganz vermieden werden, nimmt man die **GmbH & Co. KG** – eine KG, deren einziger Komplementär eine GmbH ist.',
        merke: 'GmbH & Co. KG: die GmbH haftet als Komplementär → keine natürliche Person haftet unbeschränkt.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'mitbestimmung',
    icon: '⚖️',
    titel: 'Mitbestimmung',
    fallen: [
      {
        titel: 'Es gilt immer nur EIN Mitbestimmungsgesetz',
        falle: 'Die unternehmerische Mitbestimmung ist auf mehrere Gesetze verteilt, aber pro Unternehmen greift genau EINES. Das speziellere geht vor: **MitbestG 1976** verdrängt das **DrittelbG**, das **Montan-Gesetz** gilt nur für Kohle/Stahl. Man darf nicht mehrere gleichzeitig ankreuzen.',
        beispiel: 'VW (KapGes, > 2.000 AN, kein Kohle/Stahl):\nMontan-MitbestG → nein\nMitbestG 1976   → JA (geht vor)\nDrittelbG       → nein',
        merke: 'Erst Rechtsform + Branche + Beschäftigtenzahl prüfen, dann das EINE passende Gesetz wählen (das speziellere schlägt das allgemeinere).',
      },
      {
        titel: 'Montan-MitbestG (1951): echte Parität + neutraler Mann',
        falle: 'Als stärkste Form der Mitbestimmung besetzt das Montan-Gesetz den Aufsichtsrat **echt paritätisch** 1:1 und ergänzt einen zusätzlichen **neutralen Mann**. Dadurch wird die Mitgliederzahl UNGERADE – so gibt es kein Patt.',
        beispiel: 'Gilt: Montanindustrie (Kohle/Stahl), > 1.000 Beschäftigte\nAR z. B. 5 + 5 + 1 neutraler = 11 (ungerade)',
        merke: 'Der „neutrale Mann" ist der Grund für die ungerade AR-Zahl. Montan = echte Parität (im Gegensatz zu 1976).',
      },
      {
        titel: 'MitbestG 1976 ist nur „fast paritätisch"',
        falle: 'Der Aufsichtsrat ist zwar 1:1 besetzt, aber bei Stimmengleichheit hat der (von der Anteilseignerseite gestellte) **AR-Vorsitzende die Doppelstimme**. Das ist KEINE echte Parität – ein häufig übersehener Unterschied zum Montan-Gesetz.',
        beispiel: 'Gilt: Kapitalgesellschaften > 2.000 Beschäftigte\nAR 12–20 Mitglieder, je zur Hälfte; Vorsitzender mit Doppelstimme',
        merke: '1976 = fast paritätisch (Doppelstimme des Vorsitzenden). 1951 = echte Parität (neutraler Mann).',
      },
      {
        titel: 'Arbeitsrechtliche vs. unternehmerische Ebene',
        falle: 'Zwei getrennte Ebenen: die **arbeitsrechtliche/betriebliche** Mitbestimmung (Betriebsebene) steht im **BetrVG 1972**; die **unternehmerische** Mitbestimmung findet im **Aufsichtsrat** statt (Montan/1976/DrittelbG). Die Instanzen nicht durcheinanderwerfen.',
        beispiel: 'Arbeitsrechtlich (BetrVG 1972): Betriebsrat, Betriebsversammlung, Einigungsstelle\nUnternehmerisch: Aufsichtsrat (paritätisch je nach Gesetz)',
        merke: 'BetrVG 1972 = Betrieb (Betriebsrat & Co.). Aufsichtsrat = Unternehmen. Die starke dt. Mitbestimmung ist international unüblich.',
      },
      {
        titel: 'Personengesellschaft → keine unternehmerische Mitbestimmung',
        falle: 'Eine reine KG/OHG hat grundsätzlich KEINE unternehmerische Mitbestimmung (kein zwingender Aufsichtsrat) – nur die betriebliche (Betriebsrat ab 5 AN) greift. Man darf nicht automatisch das MitbestG 1976 anwenden, nur weil das Unternehmen groß ist.',
        richtig: 'Ausnahme: Ist der Komplementär eine Kapitalgesellschaft (GmbH & Co. KG) und der Konzern hat > 2.000 AN, kann das MitbestG 1976 doch greifen.',
        merke: 'Erst Rechtsform prüfen: unternehmerische Mitbestimmung setzt i. d. R. eine Kapitalgesellschaft voraus.',
      },
      {
        titel: 'Sprecherausschussgesetz gibt kein echtes Mitbestimmungsrecht',
        falle: 'Das Sprecherausschussgesetz (1989) betrifft **leitende Angestellte** (ab 10) und gehört zur **arbeitsrechtlichen** Ebene – gewährt aber KEIN echtes Mitbestimmungsrecht, nur Information/Mitwirkung (Sprecherausschuss als Pendant zum Betriebsrat).',
        merke: 'Sprecherausschuss = leitende Angestellte, nur Anhörung/Information – kein Veto, keine unternehmerische Mitbestimmung.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'grundlagen',
    icon: '🎯',
    titel: 'Grundlagen & Ziele',
    fallen: [
      {
        titel: 'Ökonomisches Prinzip: was ist fix?',
        falle: 'Maximal- und Minimalprinzip werden ständig vertauscht. Entscheidend ist, was FEST vorgegeben ist. Ist BEIDES variabel (wenig Geld UND maximaler Nutzen), ist die Aufgabe ökonomisch unbestimmt.',
        beispiel: 'Mittel fix, Ertrag maximieren → Maximalprinzip\nZiel fix, Mittel minimieren    → Minimalprinzip\nbeides variabel                → Extremum, NICHT eindeutig',
        merke: 'Entweder Mittel ODER Zweck muss fixiert sein. „Möglichst wenig Geld für möglichst viel" = eierlegende Wollmilchsau (unbestimmt).',
      },
      {
        titel: 'Der DAX hat 40 Werte (nicht 30)',
        falle: 'Seit 2021 umfasst der DAX **40** Unternehmen, nicht mehr 30. Der Euro Stoxx 50 hat genau **50**. Solche Zahlen werden in Sammelfragen gern abgeprüft.',
        merke: 'DAX = 40 größte börsennotierte dt. Unternehmen (bildet EK / erwartete Gewinne ab). Ein einzelnes Jahr ist wegen der Volatilität ein schlechter Maßstab.',
      },
      {
        titel: 'Zielkonflikt nur bei KONKURRIERENDER Beziehung',
        falle: 'Zwischen zwei Zielen gibt es drei Beziehungen: **komplementär** (fördert), **konkurrierend** (behindert), **indifferent** (unabhängig). Ein echter Zielkonflikt liegt NUR bei der konkurrierenden Beziehung vor – und wird durch Priorisierung gelöst.',
        beispiel: 'komplementär: höhere Qualität → höhere Kundenzufriedenheit\nkonkurrierend: hohe Lager (Vertrieb) ↔ wenig Kapital (Finanzen)\nindifferent: Website-Design ↔ Lagerpolitik',
        merke: 'Nur konkurrierend = Zielkonflikt. Auch Liquidität ↔ Rentabilität ist ein solcher (gebundenes Kapital ist nicht liquide).',
      },
      {
        titel: 'Zielarten und die vier Kennzeichen eines Ziels',
        falle: 'ZielKATEGORIEN (Leistungs-, Erfolgs-, Finanzziel) und die KENNZEICHEN eines einzelnen Ziels (Inhalt, Ausmaß, Zeit, Geltungsbereich) werden verwechselt. Leistungsziel = Sachziel, Erfolgsziel = Formalziel (Gewinn).',
        beispiel: 'Kategorien: Leistungsziel (Sach) · Erfolgsziel (Formal, Gewinn) · Finanzziel (Liquidität)\nKennzeichen eines Ziels: Inhalt · Ausmaß · Zeit · sachlicher Geltungsbereich',
        merke: '„Absatz +5 % im Werk A bis Jahresende" enthält alle vier Kennzeichen: Inhalt, Ausmaß, Zeit, Geltungsbereich.',
      },
      {
        titel: 'Öffentlicher Betrieb vs. Unternehmen: die Trägerschaft zählt',
        falle: 'Ob ein Betrieb öffentlich oder privat ist, entscheidet die **Trägerschaft/das Ziel** – NICHT die Rechtsform. Die Deutsche Bahn ist eine privatrechtliche AG, gehört aber komplett dem Bund → faktisch staatlich. Betrieb (deckt Fremdbedarf) ≠ Haushalt (deckt Eigenbedarf).',
        merke: 'Rechtsform sagt nichts über öffentlich/privat. Unternehmen = Gewinnziel, öffentlicher Betrieb = öffentlicher Auftrag.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'umfeld',
    icon: '🤝',
    titel: 'Umfeld & Zusammenschlüsse',
    fallen: [
      {
        titel: 'Bindungsintensität ≠ Richtung des Zusammenschlusses',
        falle: 'Zusammenschlüsse werden nach ZWEI unabhängigen Merkmalen beschrieben. Die **Bindungsintensität** (wie eng?) reicht von lose bis vollständig; die **Richtung** (wohin?) ist horizontal/vertikal/konglomerat. Das Kartell ist die LOSESTE Form – nicht die Fusion.',
        beispiel: 'Bindung: Kartell (lose) → Joint Venture (Teil) → Fusion (voll)\nRichtung: horizontal (gleiche Stufe) · vertikal (vor-/nachgelagert) · konglomerat (branchenfremd)',
        merke: 'OPEC = horizontal + lose (Kartell). Immer beide Merkmale getrennt angeben. Konglomerat = Risikostreuung, aber „Konglomeratsabschlag" an der Börse.',
      },
      {
        titel: 'Subjektsubvention ist besser als Objektsubvention',
        falle: 'Die **Objektsubvention** ist an ein Gut gebunden (z. B. Agraraufkauf) → ausnutzbar, Überproduktion, teuer (Lagern/Vernichten). Die **Subjektsubvention** ist an einen Empfänger gebunden (z. B. Wohngeld) → zielgenauer. Man verwechselt leicht, welche die bessere ist.',
        merke: 'Subjekt = Person (Wohngeld), Objekt = Gut (Agraraufkauf). Aus Steuerzahlersicht ist Subjekt besser: zielgenauer + keine Überproduktion.',
      },
      {
        titel: 'Schwacher Euro ist nicht pauschal gut für Deutschland',
        falle: 'Ein schwacher Euro verbilligt zwar die Exporte, verteuert aber die (in Dollar fakturierten) Rohstoff-Importe → „importierte Inflation". Da nur ~10 % der dt. Exporte in den Dollarraum gehen, überwiegt die Importabhängigkeit: Deutschland braucht tendenziell eher eine STARKE Währung.',
        beispiel: 'schwacher €: + Exporte billiger, − Öl/Gas teurer\nstarker €:   + Importe billiger, − Exporte teurer',
        merke: 'Nicht reflexartig „Exportnation → schwacher Euro gut". Import-/Rohstoffabhängigkeit gegenrechnen.',
      },
      {
        titel: 'Produktions-/Konsumgüter sind NEBENgeordnet',
        falle: 'Produktions- und Konsumgüter unterscheiden sich nach der **Verwendung** und sind nebengeordnet – nicht über-/untergeordnet. Verbrauchsgüter sind dagegen eine UNTERgruppe der Konsumgüter (Gegenstück: Gebrauchsgüter).',
        beispiel: 'Produktionsgut ↔ Konsumgut (nebengeordnet, nach Verwendung)\nKonsumgut → Verbrauchsgut (einmalig, z. B. Apfel) · Gebrauchsgut (mehrfach, z. B. Auto)',
        merke: 'Verbrauch = einmalig weg, Gebrauch = mehrfach nutzbar. Beide sind Konsumgüter.',
      },
    ],
  },
]
