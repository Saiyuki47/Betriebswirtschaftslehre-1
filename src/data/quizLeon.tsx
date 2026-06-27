import type { ReactNode } from 'react'
import type { QuizFrage } from 'lernseiten-ui'

// =============================================================================
// Quizfragen ausschließlich aus „Leons Unterlagen" –
// public/material/leons-unterlagen/BWL-Lernzettel.pdf
// Abgedeckt: gesamter Vorlesungsteil (S. 2–17) + „Wichtige Formeln zum
// Merken" (S. 18). Die beantworteten Übungsfragen „Frage 2–7" (S. 19–22)
// werden bewusst NICHT in Quizfragen umgesetzt.
// Jede Frage trägt extra: true, gruppe: 'Leons Unterlagen' sowie quelle
// (PDF-Abschnitt) und seite (PDF-Seite) – angezeigt als
// „📄 <Abschnitt>, Seite <N>, Leons Unterlagen".
// Nachgebaute Abbildungen (als bild) sind theme-fähige Inline-SVGs.
//
// Hinweis: Die Abbildungen sind bewusst als statische ReactNode-Konstanten
// (keine React-Komponenten) auf Modulebene definiert. So entstehen keine
// per-Render neu gebauten Komponenten/Werte und die Datei bleibt eine reine
// Datendatei (kein Fast-Refresh-/Komponenten-Heuristik-Konflikt).
// =============================================================================

// --- Wiederverwendbare SVG-Helfer (Modulebene, reine Funktionen) ------------

const PYRAMID_CX = 175

interface PyramidStufe {
  y: number
  w: number
  label: string
}

/** Eine Pyramide aus trapezförmigen Stufen (von oben nach unten). */
function pyramide(
  stufen: PyramidStufe[],
  stufenHoehe: number,
  fill: string,
  stroke: string,
): ReactNode[] {
  return stufen.map((s, i) => {
    const half = s.w / 2
    const next = stufen[i - 1]
    const topHalf = next ? next.w / 2 : 8
    const points = `${PYRAMID_CX - half},${s.y + stufenHoehe} ${PYRAMID_CX + half},${s.y + stufenHoehe} ${PYRAMID_CX + topHalf},${s.y} ${PYRAMID_CX - topHalf},${s.y}`
    return <polygon key={`p-${s.label}`} points={points} fill={fill} stroke={stroke} strokeWidth="1.5" />
  })
}

/** Eine beschriftete Box (Rechteck + Text) für Strukturbäume/Organigramme. */
function svgBox(
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  key: string,
  sub?: string,
): ReactNode {
  return (
    <g key={key}>
      <rect x={x} y={y} width={w} height={h} rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
      <text
        x={x + w / 2}
        y={sub ? y + 18 : y + h / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight={sub ? '600' : undefined}
        fill="var(--text)"
      >
        {label}
      </text>
      {sub ? (
        <text x={x + w / 2} y={y + 34} textAnchor="middle" fontSize="9.5" fill="var(--text2)">
          {sub}
        </text>
      ) : null}
    </g>
  )
}

// --- Abbildungen als statische ReactNode-Konstanten -------------------------

/** Bedürfnis-/Maslow-Pyramide (Entstehungsmodell, S. 15). */
const beduerfnisPyramide: ReactNode = (
  <svg
    viewBox="0 0 350 280"
    width="100%"
    style={{ maxWidth: 380 }}
    role="img"
    aria-label="Bedürfnispyramide nach Maslow mit fünf Stufen von physiologischen Bedürfnissen unten bis Selbstverwirklichung oben"
  >
    {pyramide(
      [
        { y: 30, w: 70, label: 'Selbstverwirklichung' },
        { y: 78, w: 130, label: 'Wertschätzung' },
        { y: 126, w: 190, label: 'Soziale Bedürfnisse' },
        { y: 174, w: 250, label: 'Sicherheitsbedürfnisse' },
        { y: 222, w: 310, label: 'Physiologische Bedürfnisse' },
      ],
      40,
      'var(--blue-dim)',
      'var(--blue)',
    )}
    <g fontSize="11" fill="var(--text)" textAnchor="middle">
      <text x={PYRAMID_CX} y="58">Selbst-</text>
      <text x={PYRAMID_CX} y="70">verwirklichung</text>
      <text x={PYRAMID_CX} y="102">Wertschätzung</text>
      <text x={PYRAMID_CX} y="150">Soziale Bedürfnisse</text>
      <text x={PYRAMID_CX} y="198">Sicherheitsbedürfnisse</text>
      <text x={PYRAMID_CX} y="246">Physiologische Bedürfnisse</text>
    </g>
  </svg>
)

/** Wirtschaftseinheiten-Baum nach Gutenberg (S. 3). */
const wirtschaftseinheitenBaum: ReactNode = (
  <svg
    viewBox="0 0 420 240"
    width="100%"
    style={{ maxWidth: 460 }}
    role="img"
    aria-label="Baum der Wirtschaftseinheiten nach Gutenberg: Wirtschaftseinheiten teilen sich in Haushalte und Betriebe; Betriebe in Unternehmen und öffentliche Betriebe"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M210 38 L110 78" />
      <path d="M210 38 L310 78" />
      <path d="M310 108 L230 148" />
      <path d="M310 108 L390 148" />
    </g>
    {svgBox(140, 8, 140, 30, 'Wirtschaftseinheiten', 'root')}
    {svgBox(50, 78, 120, 30, 'Haushalte', 'hh')}
    {svgBox(250, 78, 120, 30, 'Betriebe', 'be')}
    {svgBox(170, 148, 120, 30, 'Unternehmen', 'un')}
    {svgBox(310, 148, 110, 30, 'Öffentl. Betriebe', 'ob')}
  </svg>
)

/** Lebenszyklus-Kurve mit den 4 Phasen (S. 5–7). */
const lebenszyklusKurve: ReactNode = (
  <svg
    viewBox="0 0 420 240"
    width="100%"
    style={{ maxWidth: 460 }}
    role="img"
    aria-label="Lebenszykluskurve eines Unternehmens mit den vier Phasen Gründung, Wachstum, Stagnation und Schrumpfung; Umsatz steigt, erreicht ein Plateau und sinkt wieder"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M40 200 L400 200" />
      <path d="M40 200 L40 20" />
    </g>
    <text x="20" y="110" fontSize="11" fill="var(--text2)" transform="rotate(-90 20 110)">
      Umsatz
    </text>
    <text x="380" y="218" fontSize="11" fill="var(--text2)">
      Zeit
    </text>
    <path
      d="M40 195 C100 195 110 90 170 70 C210 56 250 60 300 64 C340 67 370 130 400 185"
      fill="none"
      stroke="var(--blue)"
      strokeWidth="2.5"
    />
    <g stroke="var(--border2)" strokeWidth="1" strokeDasharray="4 4">
      <path d="M150 60 L150 200" />
      <path d="M250 50 L250 200" />
      <path d="M330 70 L330 200" />
    </g>
    <g fontSize="10.5" fill="var(--text)" textAnchor="middle">
      <text x="95" y="40">Gründung</text>
      <text x="200" y="40">Wachstum</text>
      <text x="290" y="40">Stagnation</text>
      <text x="370" y="50">Schrumpfung</text>
    </g>
  </svg>
)

/** Zielpyramide (S. 13). */
const zielpyramide: ReactNode = (
  <svg
    viewBox="0 0 350 240"
    width="100%"
    style={{ maxWidth: 380 }}
    role="img"
    aria-label="Zielpyramide von der Vision an der Spitze über Unternehmensleitbild, Unternehmensziele und Geschäftsziele bis zu den Funktionsbereichszielen an der Basis"
  >
    {pyramide(
      [
        { y: 24, w: 70, label: 'Vision' },
        { y: 64, w: 130, label: 'Unternehmensleitbild' },
        { y: 104, w: 190, label: 'Unternehmensziele' },
        { y: 144, w: 250, label: 'Geschäftsziele' },
        { y: 184, w: 310, label: 'Funktionsbereichsziele' },
      ],
      32,
      'var(--green-dim)',
      'var(--green)',
    )}
    <g fontSize="11" fill="var(--text)" textAnchor="middle">
      <text x={PYRAMID_CX} y="44">Vision</text>
      <text x={PYRAMID_CX} y="84">Unternehmensleitbild</text>
      <text x={PYRAMID_CX} y="124">Unternehmensziele</text>
      <text x={PYRAMID_CX} y="164">Geschäftsziele</text>
      <text x={PYRAMID_CX} y="204">Funktionsbereichsziele</text>
    </g>
  </svg>
)

/** Bilanz als T-Konto (Aktiv-/Passivseite, S. 8). */
const bilanzTKonto: ReactNode = (
  <svg
    viewBox="0 0 420 220"
    width="100%"
    style={{ maxWidth: 460 }}
    role="img"
    aria-label="Bilanz als T-Konto: links die Aktivseite mit Anlage- und Umlaufvermögen, rechts die Passivseite mit Eigenkapital, Rückstellungen und Verbindlichkeiten"
  >
    <rect x="20" y="20" width="380" height="180" rx="6" fill="var(--bg2)" stroke="var(--border2)" strokeWidth="1.5" />
    <g stroke="var(--border2)" strokeWidth="1.5">
      <path d="M210 20 L210 200" />
      <path d="M20 50 L400 50" />
    </g>
    <g fontSize="12" fill="var(--text)" fontWeight="600">
      <text x="115" y="40" textAnchor="middle">Aktiva (Mittelverwendung)</text>
      <text x="305" y="40" textAnchor="middle">Passiva (Mittelherkunft)</text>
    </g>
    <g fontSize="10.5" fill="var(--text2)">
      <text x="32" y="78">Anlagevermögen</text>
      <text x="40" y="94">• Immaterielle VG</text>
      <text x="40" y="110">• Sachanlagen</text>
      <text x="40" y="126">• Finanzanlagen</text>
      <text x="32" y="150">Umlaufvermögen</text>
      <text x="40" y="166">• Vorräte, Forderungen</text>
      <text x="40" y="182">• Wertpapiere, liquide Mittel</text>
    </g>
    <g fontSize="10.5" fill="var(--text2)">
      <text x="222" y="78">Eigenkapital</text>
      <text x="222" y="102">Rückstellungen</text>
      <text x="222" y="126">Verbindlichkeiten (FK)</text>
      <text x="222" y="150">Rechnungsabgrenzungs-</text>
      <text x="222" y="164">posten</text>
    </g>
  </svg>
)

/** Organe der unternehmerischen Mitbestimmung (S. 12). */
const mitbestimmungOrgane: ReactNode = (
  <svg
    viewBox="0 0 420 210"
    width="100%"
    style={{ maxWidth: 460 }}
    role="img"
    aria-label="Organe der unternehmerischen Mitbestimmung: Vorstand führt die Geschäfte, Aufsichtsrat kontrolliert den Vorstand, Hauptversammlung wählt die Anteilseignerseite des Aufsichtsrats"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M120 70 L120 100" />
      <path d="M300 70 L300 100" />
      <path d="M120 130 L120 150" />
    </g>
    {svgBox(40, 20, 160, 50, 'Hauptversammlung', 'hv', '1× / Jahr · wählt AR-Seite')}
    {svgBox(220, 20, 160, 50, 'Aufsichtsrat (AR)', 'ar', 'kontrolliert den Vorstand')}
    {svgBox(40, 100, 160, 50, 'Vorstand (VO/GF)', 'vo', 'führt die Geschäfte, Personal')}
    <text x="300" y="115" textAnchor="middle" fontSize="10" fill="var(--text2)">
      AR wählt
    </text>
    <text x="300" y="130" textAnchor="middle" fontSize="10" fill="var(--text2)">
      Arbeitnehmerseite mit
    </text>
  </svg>
)

// --- Fragen ------------------------------------------------------------------

export const leonFragen: QuizFrage[] = [
  // ===========================================================================
  // 1.2 Wirtschaftliches Handeln
  // ===========================================================================
  {
    art: 'single',
    frage: 'Wofür steht die Abkürzung ABWL?',
    optionen: [
      { text: 'Allgemeine Betriebswirtschaftslehre' },
      { text: 'Angewandte Betriebswirtschaftslehre', warumFalsch: 'Das „A" steht für „Allgemeine", nicht für „Angewandte".' },
      { text: 'Abschlussbezogene Wirtschaftslehre', warumFalsch: 'Eine solche Bezeichnung gibt es nicht; ABWL = Allgemeine BWL.' },
      { text: 'Allgemeine Betriebswirtschaftliche Logistik', warumFalsch: 'Logistik ist nur ein Teilbereich; ABWL meint die gesamte allgemeine BWL.' },
    ],
    richtige: 0,
    erklaerung: 'ABWL steht für Allgemeine Betriebswirtschaftslehre – sie behandelt die für alle Betriebe gültigen Grundlagen.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie wird „wirtschaftliches Handeln" in der BWL beschrieben?',
    optionen: [
      { text: 'Disponieren über knappe Güter, um direkt oder indirekt menschliche Bedürfnisse zu befriedigen' },
      { text: 'Möglichst viele Güter produzieren', warumFalsch: 'Produktion ist nur ein Mittel; Wirtschaften meint das Disponieren über knappe Güter zur Bedürfnisbefriedigung.' },
      { text: 'Freie Güter gerecht verteilen', warumFalsch: 'Freie Güter sind im Überfluss vorhanden und gerade NICHT Gegenstand des Wirtschaftens.' },
      { text: 'Geld auf einem Konto vermehren', warumFalsch: 'Geldvermehrung ist ein möglicher Aspekt, aber nicht die Definition wirtschaftlichen Handelns.' },
    ],
    richtige: 0,
    erklaerung: 'Wirtschaften heißt Disponieren über knappe Güter, um direkt oder indirekt menschliche Bedürfnisse zu befriedigen.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was kennzeichnet „knappe Güter"?',
    optionen: [
      { text: 'Sie stehen am jeweiligen Ort/zur jeweiligen Zeit nicht in ausreichender Menge oder Qualität bereit und erfordern eine Gegenleistung' },
      { text: 'Sie sind überall kostenlos verfügbar', warumFalsch: 'Kostenlos und im Überfluss verfügbar sind freie Güter, nicht knappe Güter.' },
      { text: 'Sie haben grundsätzlich keinen Preis', warumFalsch: 'Gerade weil sie knapp sind, haben sie einen Preis (Gegenleistung erforderlich).' },
      { text: 'Sie sind nur immaterielle Güter', warumFalsch: 'Knappheit hat nichts mit materiell/immateriell zu tun – auch materielle Güter können knapp sein.' },
    ],
    richtige: 0,
    erklaerung: 'Knappe Güter stehen am jeweiligen Ort zur jeweiligen Zeit nicht in ausreichender Menge oder Qualität zur Verfügung; sie haben einen Preis (Gegenleistung).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Freie vs. knappe Güter – wahr oder falsch?',
    aussagen: [
      { text: 'Freie Güter sind in so großen Mengen verfügbar, dass die Bedürfnisse aller gedeckt werden können.', wahr: true },
      { text: 'Freie Güter sind kostenlos und erfordern keine Gegenleistung.', wahr: true },
      { text: 'Knappe Güter sind grundsätzlich kostenlos.', wahr: false, warum: 'Knappe Güter erfordern eine Gegenleistung – sie haben einen Preis.' },
      { text: 'Ob ein Gut frei oder knapp ist, hängt auch von Ort und Zeit ab.', wahr: true },
    ],
    erklaerung: 'Freie Güter sind im Überfluss vorhanden, kostenlos und ohne Gegenleistung. Knappe Güter sind nicht ausreichend verfügbar und haben einen Preis. Die Einordnung ist orts- und zeitabhängig.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was ist ein „Bedürfnis"?',
    optionen: [
      { text: 'Ein Mangelzustand, der den Antrieb zum Handeln bildet' },
      { text: 'Das Mittel zur Befriedigung eines Mangels', warumFalsch: 'Das Mittel zur Befriedigung ist der Bedarf – das Bedürfnis ist der Mangelzustand selbst.' },
      { text: 'Ein am Markt geäußerter Kaufwunsch', warumFalsch: 'Das beschreibt eher die Nachfrage; das Bedürfnis ist der zugrunde liegende Mangelzustand.' },
      { text: 'Ein knappes Gut', warumFalsch: 'Ein knappes Gut ist ein Mittel, kein Mangelzustand.' },
    ],
    richtige: 0,
    erklaerung: 'Ein Bedürfnis ist ein Mangelzustand, der bedient werden will – es ist der Antrieb, warum Menschen überhaupt handeln. Der Bedarf ist das Mittel zur Befriedigung.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was versteht man unter „Bedarf"?',
    optionen: [
      { text: 'Das Mittel, um die Bedürfnisse zu befriedigen' },
      { text: 'Den Mangelzustand selbst', warumFalsch: 'Der Mangelzustand ist das Bedürfnis – der Bedarf ist das Mittel zu dessen Befriedigung.' },
      { text: 'Ein freies Gut', warumFalsch: 'Bedarf ist kein Gut-Typ, sondern das Mittel zur Bedürfnisbefriedigung.' },
      { text: 'Die Summe aller Knappheiten', warumFalsch: 'Diese Beschreibung passt nicht; Bedarf ist das Mittel zur Bedürfnisbefriedigung.' },
    ],
    richtige: 0,
    erklaerung: 'Bedarf ist das Mittel, um Bedürfnisse zu befriedigen.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was sind „Inputgüter"?',
    optionen: [
      { text: 'Güter, die zum Herstellen anderer Güter dienen (z.B. Rohstoffe, Maschinen, Arbeit)' },
      { text: 'Die Ergebnisse eines Produktionsprozesses', warumFalsch: 'Das sind Outputgüter – Inputgüter werden in den Prozess hineingegeben.' },
      { text: 'Güter mit kurzfristigem Nutzen', warumFalsch: 'Das beschreibt Verbrauchsgüter, nicht Inputgüter.' },
      { text: 'Nicht anfassbare Güter wie Patente', warumFalsch: 'Das sind immaterielle Güter; Inputgüter sind alles, was in die Produktion eingeht.' },
    ],
    richtige: 0,
    erklaerung: 'Inputgüter dienen zum Herstellen anderer Güter (Rohstoffe, Maschinen, menschliche Arbeit ...). Outputgüter sind dagegen die Ergebnisse des Produktionsprozesses.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Worin unterscheiden sich Realgüter und Nominalgüter?',
    optionen: [
      { text: 'Realgüter haben einen realen Wert (z.B. Zeit), Nominalgüter einen abgewandelten Wert (z.B. Geldscheine, Anleihen)' },
      { text: 'Realgüter sind immer materiell, Nominalgüter immer immateriell', warumFalsch: 'Die Unterscheidung real/nominal bezieht sich auf die Art des Werts, nicht auf materiell/immateriell.' },
      { text: 'Realgüter sind Inputgüter, Nominalgüter sind Outputgüter', warumFalsch: 'Input/Output ist eine andere Einteilung als real/nominal.' },
      { text: 'Realgüter sind kostenlos, Nominalgüter haben einen Preis', warumFalsch: 'Kostenlos/preisbehaftet ist die Unterscheidung freie/knappe Güter.' },
    ],
    richtige: 0,
    erklaerung: 'Realgüter haben einen realen Wert (z.B. Zeit). Nominalgüter haben einen abgewandelten Wert wie Geldscheine oder Anleihen.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 2,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Güterarten – wahr oder falsch?',
    aussagen: [
      { text: 'Materielle Güter sind Produkte zum Anfassen (z.B. Produktions- oder Konsumgüter).', wahr: true },
      { text: 'Dienstleistungen und Rechte/Patente sind immaterielle Güter.', wahr: true },
      { text: 'Gebrauchsgüter haben einen kurzfristigen Nutzen.', wahr: false, warum: 'Gebrauchsgüter (z.B. Autos) haben einen langfristigen Nutzen; kurzfristig sind Verbrauchsgüter (z.B. Lebensmittel).' },
      { text: 'Verbrauchsgüter haben einen langfristigen Nutzen.', wahr: false, warum: 'Verbrauchsgüter (z.B. Lebensmittel) haben einen kurzfristigen Nutzen.' },
    ],
    erklaerung: 'Materielle Güter sind anfassbar, immaterielle nicht. Gebrauchsgüter haben langfristigen Nutzen (Auto), Verbrauchsgüter kurzfristigen Nutzen (Lebensmittel).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welches ökonomische Prinzip zielt darauf ab, mit gegebenem Aufwand ein möglichst großes Ergebnis zu erzielen?',
    optionen: [
      { text: 'Maximumprinzip' },
      { text: 'Minimumprinzip', warumFalsch: 'Beim Minimumprinzip wird der Aufwand minimiert (Kosten senken), nicht der Ertrag maximiert.' },
      { text: 'Generelles Extremumprinzip', warumFalsch: 'Beim Extremumprinzip sind beide Größen variabel (wenig Aufwand UND maximales Ergebnis) – ökonomisch nicht eindeutig.' },
      { text: 'Rentabilitätsprinzip', warumFalsch: 'Ein eigenständiges „Rentabilitätsprinzip" gehört nicht zu den ökonomischen Grundprinzipien.' },
    ],
    richtige: 0,
    erklaerung: 'Maximumprinzip: möglichst viel herausholen (Ertrag/Leistung maximieren). Minimumprinzip: möglichst geringer Aufwand (Kosten minimieren).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was besagt das „generelle Extremumprinzip"?',
    optionen: [
      { text: 'Mit möglichst wenig Aufwand das Maximale herausholen' },
      { text: 'Den Aufwand bei festem Ertrag minimieren', warumFalsch: 'Das ist das Minimumprinzip (Ziel fix, Mittel minimal).' },
      { text: 'Den Ertrag bei festem Aufwand maximieren', warumFalsch: 'Das ist das Maximumprinzip (Mittel fix, Ertrag maximal).' },
      { text: 'Gewinn vollständig ausschütten', warumFalsch: 'Das ist kein ökonomisches Prinzip, sondern eine Frage der Gewinnverwendung.' },
    ],
    richtige: 0,
    erklaerung: 'Das generelle Extremumprinzip will mit möglichst wenig Aufwand das Maximale herausholen – beide Größen sind variabel.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie wird die Kennzahl „Wirtschaftlichkeit" gemessen?',
    optionen: [
      { text: 'Ertrag / Aufwand' },
      { text: 'Output (ME) / Input (ME)', warumFalsch: 'Das ist die Produktivität (Mengenverhältnis), nicht die Wirtschaftlichkeit (Wertverhältnis).' },
      { text: '(Gewinn / Kapital) · 100', warumFalsch: 'Das ist die Rentabilität (ROI).' },
      { text: 'Eigenkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Eigenkapitalquote, keine Wirtschaftlichkeitskennzahl.' },
    ],
    richtige: 0,
    erklaerung: 'Wirtschaftlichkeit = Ertrag / Aufwand (besser noch: Gewinn = Ertrag − Aufwand). Produktivität = Output/Input in Mengen; Rentabilität (ROI) = Gewinn/Kapital · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist die Produktivität definiert?',
    optionen: [
      { text: 'Output (Mengeneinheiten) / Input (Mengeneinheiten)' },
      { text: 'Ertrag / Aufwand', warumFalsch: 'Das ist die Wirtschaftlichkeit (Wertgrößen), nicht die Produktivität (Mengengrößen).' },
      { text: 'Gewinn / Kapital · 100', warumFalsch: 'Das ist die Rentabilität (ROI).' },
      { text: 'Umsatz − Aufwand', warumFalsch: 'Das ist der Gewinn, keine Produktivitätskennzahl.' },
    ],
    richtige: 0,
    erklaerung: 'Produktivität = Output (ME) / Input (ME) – ein reines Mengenverhältnis.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie berechnet sich die Rentabilität (ROI) nach Leons Definition?',
    optionen: [
      { text: '(Gewinn / Kapital) · 100' },
      { text: 'Ertrag / Aufwand', warumFalsch: 'Das ist die Wirtschaftlichkeit.' },
      { text: 'Output / Input', warumFalsch: 'Das ist die Produktivität.' },
      { text: 'Gewinn − Kapital', warumFalsch: 'Rentabilität ist ein Verhältnis (in %), keine Differenz.' },
    ],
    richtige: 0,
    erklaerung: 'Rentabilität (ROI) = (Gewinn / Kapital) · 100 – sie setzt den Gewinn ins Verhältnis zum eingesetzten Kapital.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.2 Wirtschaftliches Handeln',
    seite: 3,
    extra: true,
  },

  // ===========================================================================
  // 1.3 Wirtschaftseinheiten
  // ===========================================================================
  {
    art: 'single',
    frage: 'Worin unterscheiden sich Haushalte und Betriebe als Wirtschaftseinheiten?',
    optionen: [
      { text: 'Haushalte decken nur den Eigenbedarf, Betriebe decken den Fremdbedarf (marktfähige Leistung)' },
      { text: 'Haushalte decken den Fremdbedarf, Betriebe nur den Eigenbedarf', warumFalsch: 'Genau umgekehrt: Haushalte = Eigenbedarf, Betriebe = Fremdbedarf.' },
      { text: 'Beide decken ausschließlich den Eigenbedarf', warumFalsch: 'Betriebe erbringen marktfähige Leistung für den Fremdbedarf.' },
      { text: 'Beide bieten ihre Leistung am Markt an', warumFalsch: 'Haushalte decken nur den Eigenbedarf und bieten ihre Leistung nicht am Markt an.' },
    ],
    richtige: 0,
    erklaerung: 'Haushalte decken nur den Eigenbedarf. Betriebe decken den Fremdbedarf und erbringen Leistung, die am Markt angeboten werden kann.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.3 Wirtschaftseinheiten',
    seite: 3,
    extra: true,
    bild: wirtschaftseinheitenBaum,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Prinzipien nach Gutenberg ihrer Wirtschaftseinheit zu.',
    kategorien: ['Betrieb (allgemein)', 'Unternehmen', 'Öffentlicher Betrieb'],
    items: [
      { text: 'Kombination von Produktionsfaktoren', kategorie: 'Betrieb (allgemein)' },
      { text: 'Prinzip der Wirtschaftlichkeit', kategorie: 'Betrieb (allgemein)' },
      { text: 'Prinzip des finanziellen Gleichgewichts', kategorie: 'Betrieb (allgemein)' },
      { text: 'Autonomieprinzip', kategorie: 'Unternehmen' },
      { text: 'Erwerbswirtschaftliches Prinzip', kategorie: 'Unternehmen' },
      { text: 'Privateigentum', kategorie: 'Unternehmen' },
      { text: 'Organprinzip', kategorie: 'Öffentlicher Betrieb' },
      { text: 'Prinzip der zentralen Planerfüllung', kategorie: 'Öffentlicher Betrieb' },
      { text: 'Gemeineigentum', kategorie: 'Öffentlicher Betrieb' },
    ],
    erklaerung: 'Gutenberg: Betriebe folgen Faktorkombination, Wirtschaftlichkeit und finanziellem Gleichgewicht; Unternehmen zusätzlich Autonomie, Erwerbswirtschaft und Privateigentum; öffentliche Betriebe Organprinzip, zentrale Planerfüllung und Gemeineigentum.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.3 Wirtschaftseinheiten',
    seite: 3,
    extra: true,
    bild: wirtschaftseinheitenBaum,
  },
  {
    art: 'single',
    frage: 'Welches Prinzip kennzeichnet nach Gutenberg ein „Unternehmen" (im Unterschied zum öffentlichen Betrieb)?',
    optionen: [
      { text: 'Autonomieprinzip – unabhängig, trifft eigene Entscheidungen' },
      { text: 'Organprinzip – Teil eines Ganzen mit fester Funktion', warumFalsch: 'Das Organprinzip kennzeichnet öffentliche Betriebe (z.B. Hochschule eines Landes).' },
      { text: 'Prinzip der zentralen Planerfüllung', warumFalsch: 'Zentrale Planerfüllung gilt für öffentliche Betriebe (Vorgabe von oben).' },
      { text: 'Gemeineigentum', warumFalsch: 'Gemeineigentum kennzeichnet öffentliche Betriebe; Unternehmen stehen im Privateigentum.' },
    ],
    richtige: 0,
    erklaerung: 'Unternehmen: Autonomieprinzip (Unabhängigkeit), erwerbswirtschaftliches Prinzip (Gewinn) und Privateigentum. Öffentliche Betriebe: Organprinzip, zentrale Planerfüllung, Gemeineigentum.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.3 Wirtschaftseinheiten',
    seite: 3,
    extra: true,
  },

  // ===========================================================================
  // 1.4 Betriebstypologien
  // ===========================================================================
  {
    art: 'single',
    frage: 'Nach welchen Kriterien werden Betriebe in Groß-, Mittel- und Kleinbetriebe eingeteilt?',
    optionen: [
      { text: 'Umsatz, Kapital und Mitarbeiterzahl' },
      { text: 'Nur nach dem Gründungsjahr', warumFalsch: 'Das Gründungsjahr ist kein Größenkriterium.' },
      { text: 'Nur nach der Rechtsform', warumFalsch: 'Die Rechtsform ist ein eigenes Einteilungsmerkmal, kein Größenkriterium.' },
      { text: 'Nach der Hauptleistung (Sach-/Dienstleistung)', warumFalsch: 'Die Hauptleistung ist ein anderes Typologie-Merkmal, nicht die Größe.' },
    ],
    richtige: 0,
    erklaerung: 'Die Größe wird über Umsatz, Kapital und Mitarbeiterzahl bestimmt. Sie wirkt sich auf Publizität, Mitbestimmung und Bilanzrichtliniengesetz aus.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Auf welche drei Aspekte wirkt sich die Betriebsgröße laut Leons Unterlagen aus?',
    optionen: [
      { text: 'Publizität, Mitbestimmung und Bilanzrichtliniengesetz' },
      { text: 'Standort, Werbung und Marktanteil', warumFalsch: 'Diese Punkte werden im Zusammenhang mit der Betriebsgröße nicht genannt.' },
      { text: 'Haftung, Besteuerung und Sitz', warumFalsch: 'Haftung und Besteuerung hängen an der Rechtsform, nicht direkt an der Größe.' },
      { text: 'Zielsetzung, Branche und Eigentümer', warumFalsch: 'Das sind andere Typologie-Merkmale, nicht die Auswirkungen der Größe.' },
    ],
    richtige: 0,
    erklaerung: 'Die Größe wirkt auf die Publizität (wie viel offengelegt werden muss), die Mitbestimmung und das Bilanzrichtliniengesetz.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Betriebe ihrer Zielsetzung zu.',
    kategorien: ['Erwerbswirtschaftlichkeit', 'Kostendeckung', 'Zuschuss'],
    items: [
      { text: 'AG oder Kiosk', kategorie: 'Erwerbswirtschaftlichkeit' },
      { text: 'Krankenhäuser', kategorie: 'Kostendeckung' },
      { text: 'Zoos, Theater', kategorie: 'Zuschuss' },
    ],
    erklaerung: 'Erwerbswirtschaftlichkeit: Gewinnmaximierung/Einkommensprinzip (AG, Kiosk). Kostendeckung: nur die Kosten decken (Krankenhäuser). Zuschuss: Subventionen/Spenden (Zoos, Theater).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Worauf wirkt sich die Wahl der Rechtsform vor allem aus?',
    optionen: [
      { text: 'Auf Haftung und Besteuerung' },
      { text: 'Auf die Hauptleistung des Betriebs', warumFalsch: 'Die Hauptleistung (Sach-/Dienstleistung) ist unabhängig von der Rechtsform.' },
      { text: 'Auf die Mitarbeiterzahl', warumFalsch: 'Die Mitarbeiterzahl ist ein Größenmerkmal, kein Effekt der Rechtsform.' },
      { text: 'Ausschließlich auf den Standort', warumFalsch: 'Der Standort hängt von anderen Faktoren ab (Verkehr, Strompreise ...).' },
    ],
    richtige: 0,
    erklaerung: 'Die Rechtsform gliedert sich in öffentliche und private Formen und hat Auswirkungen auf Haftung und Besteuerung (gibt aber keine 100%-Auskunft, ob privat oder öffentlich).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Unternehmensverbände ihren Merkmalen zu.',
    kategorien: ['Arbeitnehmerverbände', 'Wirtschaftsverbände', 'Kammern'],
    items: [
      { text: 'Verhandeln über Arbeitszeiten, Urlaub, Gehälter (freiwillig)', kategorie: 'Arbeitnehmerverbände' },
      { text: 'Interessenvertretung/Lobbyarbeit, z.B. BDI (freiwillig)', kategorie: 'Wirtschaftsverbände' },
      { text: 'Pflichtmitgliedschaft mit Beitrag, z.B. IHK, Handwerkskammer', kategorie: 'Kammern' },
    ],
    erklaerung: 'Arbeitnehmer- und Wirtschaftsverbände sind freiwillig; Kammern (IHK, Handwerkskammer) sind unbeliebt, weil die Mitgliedschaft Pflicht ist und kostet.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Arbeitnehmer-Gewerkschaften – wahr oder falsch?',
    aussagen: [
      { text: 'Gewerkschaften sind der Gegenpart zu den Arbeitgeberverbänden.', wahr: true },
      { text: 'Das Einheitsgewerkschaftsprinzip richtet sich gegen politisch oder religiös ausgerichtete Gewerkschaften.', wahr: true },
      { text: 'Das Industriegewerkschaftsprinzip stellt einzelne Berufsgruppen über die Masse der Arbeiter.', wahr: false, warum: 'Beim Industriegewerkschaftsprinzip zählt die Masse der Arbeiter, nicht einzelne Berufsgruppen.' },
      { text: 'Die Mitgliedschaft in einer Kammer (z.B. IHK) ist freiwillig.', wahr: false, warum: 'Bei Kammern ist die Mitgliedschaft Pflicht – man muss beitreten und beitragen.' },
    ],
    erklaerung: 'Gewerkschaften sind der Gegenpart der Arbeitgeberverbände. Einheitsgewerkschaftsprinzip = gegen politisch/religiös gebundene Gewerkschaften; Industriegewerkschaftsprinzip = die Masse zählt.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.4 Betriebstypologien',
    seite: 4,
    extra: true,
  },

  // ===========================================================================
  // 1.5 Gliederung der BWL
  // ===========================================================================
  {
    art: 'single',
    frage: 'Wonach wird die ABWL (Allgemeine BWL) gegliedert?',
    optionen: [
      { text: 'Nach Funktion/Tätigkeit (z.B. Beschaffung, Produktion)' },
      { text: 'Nach Objekten/Branchen (z.B. Industrie, Handel, Banken)', warumFalsch: 'Die Gliederung nach Branche/Objekt kennzeichnet die Spezielle BWL.' },
      { text: 'Nach der Rechtsform', warumFalsch: 'Die Rechtsform ist kein Gliederungskriterium der BWL.' },
      { text: 'Nach der Betriebsgröße', warumFalsch: 'Die Größe ist ein Typologie-Merkmal, kein Gliederungskriterium der BWL.' },
    ],
    richtige: 0,
    erklaerung: 'ABWL wird nach Funktion (Tätigkeit) unterschieden (Beschaffung, Produktion ...), die Spezielle BWL nach Objekten/Branchen (Industrie, Handel, Banken ...).',
    gruppe: 'Leons Unterlagen',
    quelle: '1.5 Gliederung der BWL',
    seite: 4,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wonach wird die Spezielle BWL unterschieden?',
    optionen: [
      { text: 'Nach Objekten/Branchen (Industrie, Handel, Banken)' },
      { text: 'Nach Funktionen (Beschaffung, Produktion)', warumFalsch: 'Die Gliederung nach Funktion kennzeichnet die ABWL.' },
      { text: 'Nach der Mitarbeiterzahl', warumFalsch: 'Die Mitarbeiterzahl ist ein Größenkriterium, kein Gliederungsmerkmal der Speziellen BWL.' },
      { text: 'Nach Haftung und Besteuerung', warumFalsch: 'Haftung/Besteuerung sind Effekte der Rechtsform, kein Gliederungskriterium.' },
    ],
    richtige: 0,
    erklaerung: 'Die Spezielle BWL wird nach Objekten/Branchen unterschieden (z.B. Industrie, Handel, Banken). Die ABWL dagegen nach Funktionen.',
    gruppe: 'Leons Unterlagen',
    quelle: '1.5 Gliederung der BWL',
    seite: 4,
    extra: true,
  },

  // ===========================================================================
  // 2 Betrieblicher Lebenszyklus
  // ===========================================================================
  {
    art: 'reihenfolge',
    frage: 'Bringe die vier Phasen des betrieblichen Lebenszyklus in die richtige Reihenfolge.',
    schritte: ['Gründung', 'Wachstum', 'Stagnation', 'Schrumpfung'],
    erklaerung: 'Ein Unternehmen durchläuft vier Zyklen: Gründung → Wachstum → Stagnation → Schrumpfung.',
    gruppe: 'Leons Unterlagen',
    quelle: '2 Betrieblicher Lebenszyklus',
    seite: 5,
    extra: true,
    bild: lebenszyklusKurve,
  },
  {
    art: 'single',
    frage: 'Was ist das wichtigste Ziel der Gründungsphase?',
    optionen: [
      { text: 'Überleben und Umsatzwachstum' },
      { text: 'Maximaler Gewinn von Anfang an', warumFalsch: 'Gewinne sind in der Gründungsphase noch nicht so wichtig, da viele Unternehmen in den ersten Jahren bankrottgehen.' },
      { text: 'Sofortige Marktbeherrschung', warumFalsch: 'Marktmacht ist in der Gründungsphase kein realistisches primäres Ziel.' },
      { text: 'Verkauf des Unternehmens', warumFalsch: 'Der Verkauf (Ausstieg auf hohem Niveau) ist eher eine Option der Stagnationsphase.' },
    ],
    richtige: 0,
    erklaerung: 'Ziel der Gründungsphase ist das Überleben und das Umsatzwachstum. Gewinne sind noch zweitrangig, weil viele Unternehmen in den ersten Jahren scheitern.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 6,
    extra: true,
    bild: lebenszyklusKurve,
  },
  {
    art: 'single',
    frage: 'Wer gilt nach dem HGB als Kaufmann?',
    optionen: [
      { text: 'Wer ein Handelsgewerbe mit etwa 1500 € Monatsumsatz betreibt, im Handelsregister steht oder eine kaufmännische Rechtsform (AG, KG) gewählt hat' },
      { text: 'Jede Privatperson mit einem Bankkonto', warumFalsch: 'Ein Bankkonto begründet keine Kaufmannseigenschaft.' },
      { text: 'Ausschließlich, wer eine GmbH führt', warumFalsch: 'Die Kaufmannseigenschaft ist breiter; auch Handelsregistereintrag oder Handelsgewerbe reichen.' },
      { text: 'Nur Land- und Forstwirte', warumFalsch: 'Land- und Forstwirte sind eine Ausnahme – sie dürfen wählen, ob sie als Kaufmann gelten.' },
    ],
    richtige: 0,
    erklaerung: 'Kaufmann ist u.a., wer ein Handelsgewerbe (etwa 1500 € Monatsumsatz, kein Kleingewerbe) betreibt, im Handelsregister eingetragen ist oder eine kaufmännische Rechtsform (AG, KG) gewählt hat.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 5,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Kaufleute nach dem HGB – wahr oder falsch?',
    aussagen: [
      { text: 'Land- und Forstwirtschaftliche Betriebe dürfen wählen, ob sie als Kaufmann gelten wollen.', wahr: true },
      { text: 'Unter Kaufleuten gilt: Schweigen ist Zustimmung.', wahr: true },
      { text: 'Ein Vorteil der Kaufmannseigenschaft ist, dass keine Bilanzierung nötig ist.', wahr: false, warum: 'Im Gegenteil – die Bilanzierungspflicht ist ein Nachteil der Kaufmannseigenschaft.' },
      { text: 'Kleingewerbe zählt automatisch als Handelsgewerbe im Sinne des HGB.', wahr: false, warum: 'Kleingewerbe zählt gerade NICHT zum Handelsgewerbe.' },
    ],
    erklaerung: 'Vorteil: schnellere Geschäftsbetriebe durch kürzere Prüfungsfristen. Nachteile: Bilanzierungspflicht und kürzere Fristen zur Warenprüfung. „Schweigen ist Zustimmung" gilt unter Kaufleuten.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 5,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wo wird das Handelsregister geführt und welcher Grundsatz gilt dabei?',
    optionen: [
      { text: 'Beim Amtsgericht; es gilt der Grundsatz des „öffentlichen Glaubens"' },
      { text: 'Beim Finanzamt; es gilt strikte Geheimhaltung', warumFalsch: 'Das Handelsregister wird beim Amtsgericht geführt und ist öffentlich einsehbar.' },
      { text: 'Bei der IHK; es gilt das Privateigentumsprinzip', warumFalsch: 'Geführt wird es beim Amtsgericht; der Grundsatz lautet „öffentlicher Glaube".' },
      { text: 'Beim Notar; es ist nicht öffentlich einsehbar', warumFalsch: 'Das Handelsregister ist öffentlich einsehbar und wird beim Amtsgericht geführt.' },
    ],
    richtige: 0,
    erklaerung: 'Das Handelsregister wird beim Amtsgericht geführt, ist öffentlich einsehbar (Name, Sitz, Branche ...) und unterliegt dem Grundsatz des „öffentlichen Glaubens".',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 5,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was sind „konstitutive Entscheidungen" bei der Gründung?',
    optionen: [
      { text: 'Große, grundlegende Entscheidungen wie Rechtsform, Standort, Personalausbau und Kapitalaufnahme' },
      { text: 'Tägliche Routineentscheidungen im Betrieb', warumFalsch: 'Konstitutive Entscheidungen sind gerade die großen, grundlegenden – nicht das Tagesgeschäft.' },
      { text: 'Nur die Wahl des Firmenlogos', warumFalsch: 'Das Logo ist eine Detailfrage; konstitutive Entscheidungen betreffen Rechtsform, Standort, Personal, Kapital.' },
      { text: 'Entscheidungen über die Höhe der Werbeausgaben', warumFalsch: 'Werbebudgets gehören nicht zu den konstitutiven Grundsatzentscheidungen.' },
    ],
    richtige: 0,
    erklaerung: 'Konstitutive Entscheidungen sind große Entscheidungen: Wahl der Rechtsform, Standortwahl, personaler Ausbau und Kapitalaufnahme.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 6,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welche Aussage zur Kapitalaufnahme bei der Gründung ist korrekt?',
    optionen: [
      { text: 'Eigenkapital (haftendes Kapital) ist im Insolvenzfall weg; Banken verlangen für Fremdkapital meist 10–20 % Eigenkapital' },
      { text: 'Eigenkapital muss bei Insolvenz immer zuerst zurückgezahlt werden', warumFalsch: 'Eigenkapital ist haftendes Kapital und im Insolvenzfall weg – nicht bevorzugt zurückzuzahlen.' },
      { text: 'Banken geben Fremdkapital ganz ohne Eigenkapitalanforderung', warumFalsch: 'Banken verlangen meist 10–20 % Eigenkapital als Voraussetzung.' },
      { text: 'Subventionen sind privates Fremdkapital', warumFalsch: 'Subventionen sind staatliche Gelder, kein privates Fremdkapital.' },
    ],
    richtige: 0,
    erklaerung: 'Eigenkapital ist haftendes Kapital (im Insolvenzfall weg). Fremdkapital von Banken setzt meist 10–20 % Eigenkapital voraus. Subventionen sind staatliche Gelder.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.1 Gründung',
    seite: 6,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Ab welcher Umsatz-Zuwachsrate befindet man sich typischerweise in der Wachstumsphase?',
    optionen: [
      { text: 'Bei etwa 10 % Umsatzzuwachs' },
      { text: 'Bei genau 0 % Umsatzzuwachs', warumFalsch: 'Kein Wachstum kennzeichnet die Stagnation, nicht die Wachstumsphase.' },
      { text: 'Bei einem Umsatzrückgang', warumFalsch: 'Sinkende Umsätze kennzeichnen die Schrumpfungsphase.' },
      { text: 'Bei unter 5 % Umsatzzuwachs', warumFalsch: 'Unter 5 % gilt bereits als Stagnation.' },
    ],
    richtige: 0,
    erklaerung: 'Wachstumsphase: Umsatz-Zuwachsrate von etwa 10 %. Hier gehen Verluste zurück und es können erste Gewinne entstehen.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.2 Wachstum',
    seite: 6,
    extra: true,
    bild: lebenszyklusKurve,
  },
  {
    art: 'single',
    frage: 'Wodurch ist die Stagnationsphase gekennzeichnet?',
    optionen: [
      { text: 'Kein bzw. nur sehr geringes Umsatzwachstum (unter 5 %) – bei gutem Kostenmanagement oft eine der gewinnträchtigsten Phasen' },
      { text: 'Umsatzzuwachs von rund 10 %', warumFalsch: 'Rund 10 % Zuwachs kennzeichnet die Wachstumsphase.' },
      { text: 'Stark sinkende Umsätze und Krisen', warumFalsch: 'Sinkende Umsätze und Krisen kennzeichnen die Schrumpfungsphase.' },
      { text: 'Höchste Verluste des gesamten Lebenszyklus', warumFalsch: 'Bei gutem Kostenmanagement ist die Stagnation gerade oft besonders gewinnträchtig.' },
    ],
    richtige: 0,
    erklaerung: 'Stagnation: kein bzw. unter 5 % Umsatzwachstum. Mit gutem Kostenmanagement ist sie oft eine der gewinnträchtigsten Phasen.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 6,
    extra: true,
    bild: lebenszyklusKurve,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Handlungsalternativen in der Stagnationsphase ihrer Beschreibung zu.',
    kategorien: ['Abschöpfungsstrategie', 'Desinvestment / Ausstieg', 'Unternehmenszusammenschluss'],
    items: [
      { text: 'Nichts mehr investieren, nur noch den Gewinn herausholen', kategorie: 'Abschöpfungsstrategie' },
      { text: 'Nicht mehr Benötigtes oder die ganze Firma verkaufen', kategorie: 'Desinvestment / Ausstieg' },
      { text: 'Sich mit einem anderen Unternehmen zusammenschließen', kategorie: 'Unternehmenszusammenschluss' },
    ],
    erklaerung: 'In der Stagnation gibt es drei Alternativen: Abschöpfung (nichts mehr investieren), Desinvestment/Ausstieg auf hohem Niveau (verkaufen) oder Unternehmenszusammenschlüsse.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 6,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Richtungen von Unternehmenszusammenschlüssen den Beispielen zu.',
    kategorien: ['Horizontal', 'Vertikal vorwärts', 'Vertikal rückwärts', 'Konglomerat'],
    items: [
      { text: 'Zwei Automobilhersteller schließen sich zusammen', kategorie: 'Horizontal' },
      { text: 'Autohersteller übernimmt eine Werkstatt (Richtung Kunde)', kategorie: 'Vertikal vorwärts' },
      { text: 'Autohersteller übernimmt einen Reifenhersteller (Richtung Zulieferer)', kategorie: 'Vertikal rückwärts' },
      { text: 'Autohersteller und Bäcker schließen sich zusammen', kategorie: 'Konglomerat' },
    ],
    erklaerung: 'Horizontal = gleiche Ebene (Marktmacht). Vertikal vorwärts = Richtung Kunde, rückwärts = Richtung Zulieferer. Konglomerat = branchenfremd, streut die Risiken.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 7,
    extra: true,
  },
  {
    art: 'reihenfolge',
    frage: 'Ordne die Formen von Unternehmenszusammenschlüssen nach zunehmender Bindungsintensität.',
    schritte: ['Kartell (lose)', 'Kooperation (Teilintegration)', 'Fusion (vollständig)'],
    erklaerung: 'Bindungsintensität von lose nach eng: Kartell (lose, evtl. illegale Absprachen) → Kooperation (Teilintegration) → Fusion (vollständige Verschmelzung).',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 7,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was ist das Motiv eines horizontalen Zusammenschlusses?',
    optionen: [
      { text: 'Die eigene Macht auf dem Markt erweitern' },
      { text: 'Die Risiken über verschiedene Märkte streuen', warumFalsch: 'Risikostreuung ist das Motiv des Konglomerats (branchenfremd).' },
      { text: 'Den Zugang zum Zulieferer sichern', warumFalsch: 'Das ist das Motiv des vertikalen Rückwärts-Zusammenschlusses.' },
      { text: 'Näher an den Endkunden rücken', warumFalsch: 'Das ist das Motiv des vertikalen Vorwärts-Zusammenschlusses.' },
    ],
    richtige: 0,
    erklaerung: 'Horizontale Zusammenschlüsse (gleiche Ebene, z.B. zwei Automobilhersteller) zielen darauf, die Marktmacht zu erweitern.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 7,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Unternehmenszusammenschlüsse in der Praxis – wahr oder falsch?',
    aussagen: [
      { text: 'In der Praxis sind Unternehmenszusammenschlüsse selten erfolgreich.', wahr: true },
      { text: 'Sie führen häufig zu internen Problemen.', wahr: true },
      { text: 'Zusammengeschlossene Unternehmen werden meist deutlich wettbewerbsfähiger.', wahr: false, warum: 'Sie werden eher schwerfälliger und weniger wettbewerbsfähig.' },
      { text: 'Das Konglomerat ist gerade bei Familienunternehmen gut nachvollziehbar.', wahr: true },
    ],
    erklaerung: 'Zusammenschlüsse sind selten erfolgreich, führen zu internen Problemen und machen Unternehmen schwerfällig und weniger wettbewerbsfähig. Konglomerate streuen Risiken (gut bei Familienunternehmen).',
    gruppe: 'Leons Unterlagen',
    quelle: '2.3 Stagnation',
    seite: 7,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was kennzeichnet die Schrumpfungsphase?',
    optionen: [
      { text: 'Die Umsätze gehen langsam zurück; es kann zu Krisen und schließlich zur Insolvenz kommen' },
      { text: 'Umsätze steigen mit rund 10 %', warumFalsch: 'Steigende Umsätze kennzeichnen die Wachstumsphase.' },
      { text: 'Umsätze stagnieren ohne jede Gefahr', warumFalsch: 'Gleichbleibende Umsätze ohne Rückgang kennzeichnen die Stagnation.' },
      { text: 'Das Unternehmen wird zwingend verstaatlicht', warumFalsch: 'Eine Verstaatlichung ist keine Folge der Schrumpfung; typisch sind Krisen und Insolvenz.' },
    ],
    richtige: 0,
    erklaerung: 'In der Schrumpfungsphase gehen die Umsätze langsam zurück; das kann zu Krisen führen, die in der Insolvenz enden können.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 7,
    extra: true,
    bild: lebenszyklusKurve,
  },
  {
    art: 'single',
    frage: 'Was ist eine „Krise" im Sinne der Schrumpfungsphase?',
    optionen: [
      { text: 'Ein ungewolltes/ungeplantes Ereignis, das zu einer zugespitzten Situation führt – aber auch eine Chance zum Umdenken' },
      { text: 'Eine bewusst herbeigeführte Strategie zur Gewinnsteigerung', warumFalsch: 'Krisen sind ungewollt und ungeplant, keine bewusste Strategie.' },
      { text: 'Ein gesetzlich vorgeschriebener Jahresabschluss', warumFalsch: 'Das beschreibt den Jahresabschluss, nicht eine Krise.' },
      { text: 'Eine reine Wachstumsbeschleunigung', warumFalsch: 'Krisen führen zu Zuspitzung und möglicher Insolvenz, nicht zu Wachstum.' },
    ],
    richtige: 0,
    erklaerung: 'Krisen sind ungewollte/ungeplante Ereignisse, die zu einer zugespitzten Situation führen können – bieten aber die Chance, über Verbesserungen nachzudenken.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 7,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was ist eine „endogene" Krisenursache?',
    optionen: [
      { text: 'Eine Ursache aus dem Unternehmen heraus, z.B. Managementfehler oder zu wenig Eigenkapital' },
      { text: 'Eine Veränderung des Marktes von außen', warumFalsch: 'Marktveränderungen von außen sind exogene Ursachen.' },
      { text: 'Eine rechtliche Änderung durch den Gesetzgeber', warumFalsch: 'Rechtliche Änderungen sind exogene Ursachen.' },
      { text: 'Eine weltweite Wirtschaftskrise', warumFalsch: 'Externe Schocks zählen zu den exogenen Ursachen.' },
    ],
    richtige: 0,
    erklaerung: 'Endogene Ursachen kommen aus dem Unternehmen selbst (Managementfehler, zu wenig Eigenkapital). Exogene Ursachen sind nicht selbst verschuldet (Marktveränderung, rechtliche Änderungen).',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 7,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was sind die wichtigsten Gründe, in die Insolvenz zu geraten?',
    optionen: [
      { text: 'Man kann die Rechnungen nicht mehr bezahlen oder es war zu wenig Eigenkapital vorhanden' },
      { text: 'Man hat zu hohe Gewinne erzielt', warumFalsch: 'Hohe Gewinne führen nicht in die Insolvenz – Zahlungsunfähigkeit und Eigenkapitalmangel schon.' },
      { text: 'Man hat zu viele Mitarbeiter eingestellt', warumFalsch: 'Genannt werden Zahlungsunfähigkeit und zu wenig Eigenkapital, nicht die Mitarbeiterzahl an sich.' },
      { text: 'Man ist im Handelsregister eingetragen', warumFalsch: 'Ein Handelsregistereintrag ist kein Insolvenzgrund.' },
    ],
    richtige: 0,
    erklaerung: 'Insolvenzgründe sind, dass Rechnungen nicht mehr bezahlt werden können oder zu wenig Eigenkapital vorhanden war. Insolvenz gibt es bei Unternehmen und Privatpersonen.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 7,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Ziele des Insolvenzverfahrens – wahr oder falsch?',
    aussagen: [
      { text: 'Die Gläubiger sollen möglichst viel Geld wiederbekommen.', wahr: true },
      { text: 'Redliche Schuldner (nur Privatpersonen) sollen von ihren Schulden befreit werden und eine zweite Chance bekommen.', wahr: true },
      { text: 'Auch Unternehmen können von Restschulden befreit werden und eine zweite Chance erhalten.', wahr: false, warum: 'Die Restschuldbefreiung für redliche Schuldner gilt nur für Privatpersonen, nicht für Unternehmen.' },
      { text: 'Insolvenz gibt es ausschließlich bei Unternehmen.', wahr: false, warum: 'Insolvenz gibt es bei Unternehmen UND bei Privatpersonen.' },
    ],
    erklaerung: 'Ziele: Gläubiger sollen möglichst viel zurückbekommen; redliche Schuldner (nur Privatpersonen) sollen entschuldet werden und eine zweite Chance erhalten.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 7,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Alternativen zur Insolvenz ihrer Beschreibung zu.',
    kategorien: ['Sanierung', 'Übertragene Sanierung', 'Liquidation'],
    items: [
      { text: 'Insolvenzverwalter stellt das Unternehmen wieder her, damit es am Markt bleibt', kategorie: 'Sanierung' },
      { text: 'Das Unternehmen wird verkauft, der neue Eigentümer saniert es', kategorie: 'Übertragene Sanierung' },
      { text: 'Das Unternehmen wird zerschlagen, Vermögensgegenstände einzeln verkauft', kategorie: 'Liquidation' },
    ],
    erklaerung: 'Sanierung: Insolvenzverwalter stellt das Unternehmen wieder her. Übertragene Sanierung: Verkauf an neuen Eigentümer. Liquidation: Zerschlagung, Erlös geht zuerst an die Gläubiger.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 8,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welche Aufgabe hat der Insolvenzverwalter bei der Sanierung?',
    optionen: [
      { text: 'Als gesetzlicher Vertreter und Manager hilft er mit seiner Erfahrung und verhindert, dass der Eigentümer Vermögen beiseiteschafft' },
      { text: 'Er kauft das Unternehmen für sich selbst auf', warumFalsch: 'Das beschreibt die übertragene Sanierung durch einen neuen Eigentümer, nicht die Rolle des Insolvenzverwalters.' },
      { text: 'Er zerschlägt das Unternehmen sofort', warumFalsch: 'Die Zerschlagung ist die Liquidation – bei der Sanierung soll das Unternehmen erhalten bleiben.' },
      { text: 'Er erhöht das Eigenkapital aus eigener Tasche', warumFalsch: 'Das ist nicht seine Aufgabe; er unterstützt mit Erfahrung und schützt das Vermögen vor dem Eigentümer.' },
    ],
    richtige: 0,
    erklaerung: 'Bei der Sanierung wird ein Insolvenzverwalter als gesetzlicher Vertreter/Manager eingesetzt. Er hilft mit seiner Erfahrung und verhindert, dass der Eigentümer Vermögen beiseiteschafft.',
    gruppe: 'Leons Unterlagen',
    quelle: '2.4 Schrumpfung',
    seite: 8,
    extra: true,
  },

  // ===========================================================================
  // 3 Mengen und Werte – Jahresabschluss
  // ===========================================================================
  {
    art: 'single',
    frage: 'Woraus besteht der Jahresabschluss?',
    optionen: [
      { text: 'Aus der Bilanz sowie der Gewinn- und Verlustrechnung' },
      { text: 'Nur aus der Steuererklärung', warumFalsch: 'Die Steuererklärung ist nicht der Jahresabschluss; dieser besteht aus Bilanz und GuV.' },
      { text: 'Aus dem Handelsregistereintrag', warumFalsch: 'Der Handelsregistereintrag ist kein Bestandteil des Jahresabschlusses.' },
      { text: 'Nur aus der Gewinn- und Verlustrechnung', warumFalsch: 'Auch die Bilanz gehört dazu – die GuV allein genügt nicht.' },
    ],
    richtige: 0,
    erklaerung: 'Der Jahresabschluss wird einmal jährlich erstellt (durch das HGB „erzwungen") und besteht aus Bilanz sowie Gewinn- und Verlustrechnung.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Jahresabschluss / Geschäftsjahr – wahr oder falsch?',
    aussagen: [
      { text: 'Der Jahresabschluss wird einmal im Jahr gemacht.', wahr: true },
      { text: 'Das HGB verpflichtet zur Erstellung des Jahresabschlusses.', wahr: true },
      { text: 'Ein Geschäftsjahr muss zwingend mit dem Kalenderjahr übereinstimmen.', wahr: false, warum: 'Ein Jahr muss nicht das Kalenderjahr sein – es kann z.B. vom 30.06. bis zum 01.07. des Folgejahres laufen.' },
      { text: 'Die Bilanz ist Teil des Jahresabschlusses.', wahr: true },
    ],
    erklaerung: 'Der Jahresabschluss (Bilanz + GuV) wird jährlich durch das HGB vorgeschrieben. Das Geschäftsjahr muss nicht dem Kalenderjahr entsprechen.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was steht auf der Aktivseite, was auf der Passivseite der Handelsbilanz?',
    optionen: [
      { text: 'Aktiva: Anlage- und Umlaufvermögen; Passiva: Eigenkapital, Rückstellungen und Verbindlichkeiten' },
      { text: 'Aktiva: Eigenkapital und Schulden; Passiva: das Vermögen', warumFalsch: 'Genau umgekehrt: Vermögen steht aktiv, Kapital/Schulden passiv.' },
      { text: 'Aktiva: nur liquide Mittel; Passiva: nur Rückstellungen', warumFalsch: 'Beide Seiten umfassen mehr Positionen als nur diese.' },
      { text: 'Aktiva und Passiva enthalten dieselben Positionen', warumFalsch: 'Aktiv- und Passivseite sind inhaltlich verschieden (Mittelverwendung vs. Mittelherkunft).' },
    ],
    richtige: 0,
    erklaerung: 'Aktivseite: Anlagevermögen (immaterielle VG, Sachanlagen, Finanzanlagen) und Umlaufvermögen (Vorräte, Forderungen, Wertpapiere, liquide Mittel). Passivseite: Eigenkapital, Rückstellungen, Verbindlichkeiten (FK) und Rechnungsabgrenzungsposten.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
    bild: bilanzTKonto,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Bilanzpositionen der richtigen Seite zu.',
    kategorien: ['Aktivseite', 'Passivseite'],
    items: [
      { text: 'Immaterielle Vermögensgegenstände (Patente)', kategorie: 'Aktivseite' },
      { text: 'Sachanlagen (Grundstück, Maschinen)', kategorie: 'Aktivseite' },
      { text: 'Vorräte und Forderungen', kategorie: 'Aktivseite' },
      { text: 'Flüssige Mittel (Kasse, Bank)', kategorie: 'Aktivseite' },
      { text: 'Eigenkapital', kategorie: 'Passivseite' },
      { text: 'Rückstellungen', kategorie: 'Passivseite' },
      { text: 'Verbindlichkeiten (Fremdkapital)', kategorie: 'Passivseite' },
    ],
    erklaerung: 'Aktivseite = Mittelverwendung (Anlage- und Umlaufvermögen). Passivseite = Mittelherkunft (Eigenkapital, Rückstellungen, Verbindlichkeiten).',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
    bild: bilanzTKonto,
  },
  {
    art: 'single',
    frage: 'Was sind „Rückstellungen" auf der Passivseite?',
    optionen: [
      { text: 'Beträge für anfallende Kosten oder Schulden, die nicht vorhergesehen waren' },
      { text: 'Bereits sicher feststehende Bankguthaben', warumFalsch: 'Bankguthaben sind liquide Mittel auf der Aktivseite, keine Rückstellungen.' },
      { text: 'Langfristige Sachanlagen', warumFalsch: 'Sachanlagen stehen im Anlagevermögen auf der Aktivseite.' },
      { text: 'Das gezeichnete Grundkapital', warumFalsch: 'Das gehört zum Eigenkapital, nicht zu den Rückstellungen.' },
    ],
    richtige: 0,
    erklaerung: 'Rückstellungen werden für anfallende Kosten oder Schulden gebildet, die nicht vorhergesehen waren.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Rechnungsabgrenzungsposten (RAP) – wahr oder falsch?',
    aussagen: [
      { text: 'Auf der Aktivseite steht Geld, das schon für das nächste Jahr bezahlt wurde (z.B. Miete im Voraus).', wahr: true },
      { text: 'Auf der Passivseite kommt Geld herein, das erst für das nächste Jahr gedacht ist (z.B. Miete erhalten).', wahr: true },
      { text: 'RAP gibt es ausschließlich auf der Passivseite.', wahr: false, warum: 'RAP gibt es auf beiden Seiten – aktive (im Voraus gezahlt) und passive (im Voraus erhalten).' },
      { text: 'RAP dienen der periodengerechten Zuordnung von Zahlungen.', wahr: true },
    ],
    erklaerung: 'Aktive RAP: im Voraus bezahlt (z.B. Miete). Passive RAP: im Voraus erhalten (z.B. Miete erhalten). Sie ordnen Zahlungen der richtigen Periode zu.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 8,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die drei Bilanzzwecke ihrer Beschreibung zu.',
    kategorien: ['Rechenschaft & Rechnungslegung', 'Informationszweck', 'Zahlungsbemessungszweck'],
    items: [
      { text: '1× / Jahr Rechenschaft gegenüber sich selbst, Banken und Gesellschaftern', kategorie: 'Rechenschaft & Rechnungslegung' },
      { text: 'Kaufleuten Informationen für Entscheidungen liefern', kategorie: 'Informationszweck' },
      { text: 'Gewinn ermitteln, ausschütten und als Basis der Steuerbilanz dienen', kategorie: 'Zahlungsbemessungszweck' },
    ],
    erklaerung: 'Bilanzen dienen der Rechenschaft/Rechnungslegung, dem Informationszweck (Entscheidungshilfe) und dem Zahlungsbemessungszweck (Gewinnausschüttung, Grundlage der Steuerbilanz).',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welches grundlegende Problem hat die Bilanzierung laut Leons Unterlagen?',
    optionen: [
      { text: 'Das „Humanvermögen" – der Wert der Mitarbeiter und Kunden – lässt sich nicht richtig messen' },
      { text: 'Die Bilanz kann gar nicht erstellt werden', warumFalsch: 'Die Bilanz lässt sich erstellen; das Problem ist die Messbarkeit des Humanvermögens.' },
      { text: 'Sachanlagen dürfen nicht aufgeführt werden', warumFalsch: 'Sachanlagen gehören selbstverständlich in die Bilanz.' },
      { text: 'Eigenkapital darf nicht ausgewiesen werden', warumFalsch: 'Eigenkapital wird auf der Passivseite ausgewiesen.' },
    ],
    richtige: 0,
    erklaerung: 'Ein Problem der Bilanzierung ist, dass das „Humanvermögen" – der Wert der Mitarbeiter und Kunden – nicht richtig messbar ist.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welche Firmen müssen seit 2005 zusätzlich nach IFRS bilanzieren?',
    optionen: [
      { text: 'Kapitalmarktorientierte Firmen (die Aktien oder Anleihen anbieten)' },
      { text: 'Alle Einzelunternehmen', warumFalsch: 'Die IFRS-Pflicht trifft kapitalmarktorientierte Firmen, nicht generell alle Einzelunternehmen.' },
      { text: 'Nur öffentlich-rechtliche Betriebe', warumFalsch: 'Ausschlaggebend ist die Kapitalmarktorientierung, nicht die öffentlich-rechtliche Form.' },
      { text: 'Ausschließlich Kleingewerbe', warumFalsch: 'Kleingewerbe sind nicht kapitalmarktorientiert und nicht IFRS-pflichtig.' },
    ],
    richtige: 0,
    erklaerung: 'Seit 2005 müssen kapitalmarktorientierte Firmen (Aktien oder Anleihen anbietend) zusätzlich nach IFRS (International Finance Reporting Standard) bilanzieren.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was steht beim HGB im Vordergrund, was bei der IFRS?',
    optionen: [
      { text: 'HGB: Gläubigerschutz (Rechenschaft, Zahlungsbemessung); IFRS: Informationszweck („true and fair view")' },
      { text: 'HGB: Informationszweck; IFRS: Gläubigerschutz', warumFalsch: 'Genau umgekehrt: HGB betont Gläubigerschutz, IFRS den Informationszweck.' },
      { text: 'Beide verfolgen ausschließlich Steueroptimierung', warumFalsch: 'HGB betont Gläubigerschutz/Rechenschaft, IFRS den Informationszweck – nicht primär Steueroptimierung.' },
      { text: 'HGB und IFRS verfolgen denselben Zweck', warumFalsch: 'Die Zwecke unterscheiden sich gerade: Gläubigerschutz vs. Informationszweck.' },
    ],
    richtige: 0,
    erklaerung: 'HGB: Gläubigerschutz – Gläubiger sollen ihr Geld wiederbekommen (Rechenschaft, Zahlungsbemessung). IFRS: Informationszweck für die Entscheidungsfindung („true and fair view").',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Unterschied HGB / IFRS – wahr oder falsch?',
    aussagen: [
      { text: 'Nach dem HGB sieht eine Firma nach außen ärmer aus, als sie ist – wegen der stillen Reserven.', wahr: true },
      { text: 'Nach IFRS dürfen keine stillen Reserven gebildet werden.', wahr: true },
      { text: 'Beim IFRS soll laut „good will" auch der Wert von Mitarbeitern und Kunden aufgeschrieben werden.', wahr: true },
      { text: 'Die IFRS gilt als besonders stabil.', wahr: false, warum: 'Ein genanntes Problem ist gerade, dass die IFRS zu instabil ist.' },
    ],
    erklaerung: 'HGB erlaubt stille Reserven (Firma wirkt ärmer). IFRS verbietet stille Reserven und schreibt per „good will" auch Mitarbeiter-/Kundenwert auf. Probleme der IFRS: höherer Aufwand, höhere Steuern, Instabilität.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welches Problem nennt Leon im Zusammenhang mit der IFRS-Bilanzierung?',
    optionen: [
      { text: 'Höherer Aufwand (bis zu 3 Bilanzierungen), höhere Steuern durch stärkere Gewinnausschüttung und Instabilität der IFRS' },
      { text: 'Sie ist gesetzlich verboten', warumFalsch: 'IFRS ist nicht verboten – seit 2005 für kapitalmarktorientierte Firmen sogar Pflicht.' },
      { text: 'Sie führt zu zu niedrigen Steuern', warumFalsch: 'Nach IFRS lägen die Steuern eher höher (stärkere Gewinnausschüttung), nicht niedriger.' },
      { text: 'Sie verbietet jede Gewinnausschüttung', warumFalsch: 'IFRS verbietet keine Ausschüttung; im Gegenteil führt sie eher zu stärkerer Ausschüttung.' },
    ],
    richtige: 0,
    erklaerung: 'Probleme der IFRS: höherer Aufwand (bis zu 3 Bilanzierungen), nach IFRS lägen die Steuern höher (stärkere Gewinnausschüttung, v.a. am Anfang), und die IFRS gilt als zu instabil.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.1 Jahresabschluss',
    seite: 9,
    extra: true,
  },

  // ===========================================================================
  // 3.2 Betriebswirtschaftliche Kennzahlen
  // ===========================================================================
  {
    art: 'kategorien',
    frage: 'Ordne die drei Eigenschaften von Kennzahlen ihrer Beschreibung zu.',
    kategorien: ['Maßgrößencharakter', 'Verdichtungscharakter', 'Entscheidungsbezug'],
    items: [
      { text: 'Messen, ob man auf dem richtigen Weg ist (Gewinn?)', kategorie: 'Maßgrößencharakter' },
      { text: 'Informationen werden zusammengefasst (Nachteil: Infoverlust)', kategorie: 'Verdichtungscharakter' },
      { text: 'Soll helfen, die Entscheidung zu treffen', kategorie: 'Entscheidungsbezug' },
    ],
    erklaerung: 'Kennzahlen haben Maßgrößencharakter (messen), Verdichtungscharakter (verdichten, mit Infoverlust) und Entscheidungsbezug (Entscheidungshilfe).',
    gruppe: 'Leons Unterlagen',
    quelle: '3.2 Betriebswirtschaftliche Kennzahlen',
    seite: 10,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welcher Nachteil ist mit dem „Verdichtungscharakter" von Kennzahlen verbunden?',
    optionen: [
      { text: 'Beim Zusammenfassen der Informationen gehen Informationen verloren' },
      { text: 'Die Kennzahl wird unmessbar', warumFalsch: 'Kennzahlen bleiben messbar (Maßgrößencharakter) – der Nachteil ist der Informationsverlust.' },
      { text: 'Sie hat keinen Bezug zu Entscheidungen', warumFalsch: 'Kennzahlen haben gerade Entscheidungsbezug; das ist kein Nachteil der Verdichtung.' },
      { text: 'Sie kann nicht über die Zeit verglichen werden', warumFalsch: 'Der Zeitvergleich ist ein Einsatzgebiet von Kennzahlen, kein Nachteil der Verdichtung.' },
    ],
    richtige: 0,
    erklaerung: 'Der Verdichtungscharakter fasst Informationen zusammen – Nachteil: dabei gehen Informationen verloren.',
    gruppe: 'Leons Unterlagen',
    quelle: '3.2 Betriebswirtschaftliche Kennzahlen',
    seite: 10,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Einsatzgebiete von Kennzahlen ihrer Beschreibung zu.',
    kategorien: ['Zeit-/Periodenvergleich', 'Bereichs-/Abteilungsvergleich', 'Betriebsvergleich', 'Soll-Ist-Vergleich'],
    items: [
      { text: 'Gleiche Kennzahl über einen Zeitraum vergleichen (Entwicklung)', kategorie: 'Zeit-/Periodenvergleich' },
      { text: 'Interner Vergleich zweier vergleichbarer Abteilungen', kategorie: 'Bereichs-/Abteilungsvergleich' },
      { text: 'Vergleich verschiedener Betriebe der gleichen Branche', kategorie: 'Betriebsvergleich' },
      { text: 'Abgleich an vorgegebenen Richtgrößen / Zielen', kategorie: 'Soll-Ist-Vergleich' },
    ],
    erklaerung: 'Einsatzgebiete: Zeit-/Periodenvergleich (Entwicklung), Bereichs-/Abteilungsvergleich (intern), Betriebsvergleich (gleiche Branche) und Soll-Ist-Vergleich (Zielerreichung).',
    gruppe: 'Leons Unterlagen',
    quelle: '3.2 Betriebswirtschaftliche Kennzahlen',
    seite: 10,
    extra: true,
  },

  // ===========================================================================
  // 4 Rechtsformen und Mitbestimmung
  // ===========================================================================
  {
    art: 'single',
    frage: 'Was ist die häufigste Rechtsform in Deutschland?',
    optionen: [
      { text: 'Das Einzelunternehmen' },
      { text: 'Die Aktiengesellschaft (AG)', warumFalsch: 'Die AG ist eine Rechtsform für Großunternehmen, nicht die häufigste.' },
      { text: 'Die GmbH', warumFalsch: 'Die GmbH ist verbreitet, aber das Einzelunternehmen ist die häufigste Form.' },
      { text: 'Die Kommanditgesellschaft (KG)', warumFalsch: 'Die KG ist eine Personengesellschaft, nicht die häufigste Rechtsform.' },
    ],
    richtige: 0,
    erklaerung: 'Das Einzelunternehmen ist die häufigste Rechtsform in Deutschland: nur ein Eigentümer, leicht zu gründen, kein Mindestkapital nötig.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'GbR und OHG – wahr oder falsch?',
    aussagen: [
      { text: 'Die GbR ist keine echte Rechtsform, sondern die Vorform und entsteht spontan bei gemeinschaftlichem Handeln.', wahr: true },
      { text: 'Die OHG ist eine richtige Rechtsform und benötigt einen Handelsregistereintrag.', wahr: true },
      { text: 'Bei der OHG haften die Eigentümer nur beschränkt.', wahr: false, warum: 'Bei der OHG ist die Haftung voll (Eigenkapital) und solidarisch (gemeinschaftlich).' },
      { text: 'Eine OHG benötigt ein hohes Mindestkapital.', wahr: false, warum: 'Die OHG benötigt kein Mindestkapital.' },
    ],
    erklaerung: 'GbR: keine echte Rechtsform, Vorform, entsteht spontan. OHG: echte Rechtsform, kein Mindestkapital, Handelsregistereintrag nötig, volle und solidarische Haftung mit dem Eigenkapital.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Worin unterscheiden sich Komplementäre und Kommanditisten in der KG?',
    optionen: [
      { text: 'Komplementäre haften voll und solidarisch und führen die Geschäfte; Kommanditisten haften nur mit ihrer Einlage und haben weniger Mitspracherecht' },
      { text: 'Komplementäre haften nur mit der Einlage, Kommanditisten haften voll', warumFalsch: 'Genau umgekehrt: Komplementäre haften voll, Kommanditisten nur mit ihrer Einlage.' },
      { text: 'Beide haften gar nicht', warumFalsch: 'In der KG haftet zumindest der Komplementär voll und solidarisch.' },
      { text: 'Beide führen gleichberechtigt die Geschäfte', warumFalsch: 'Kommanditisten haben weniger Mitspracherecht; die Geschäftsführung liegt bei den Komplementären.' },
    ],
    richtige: 0,
    erklaerung: 'In der KG haften Komplementäre voll und solidarisch und haben die volle Geschäftsbefugnis. Kommanditisten bringen Kapital mit, haften nur damit und haben weniger Mitspracherecht.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was kennzeichnet die „stille Gesellschaft"?',
    optionen: [
      { text: 'Eigenkapitalgeber bei einer anderen Rechtsform, die nach außen nicht auftreten und nichts zu melden haben' },
      { text: 'Eine Kapitalgesellschaft mit 50.000 € Mindestkapital', warumFalsch: 'Das beschreibt die AG; die stille Gesellschaft ist gerade nach außen unsichtbar.' },
      { text: 'Die häufigste Rechtsform in Deutschland', warumFalsch: 'Die häufigste Rechtsform ist das Einzelunternehmen.' },
      { text: 'Eine Gesellschaft, die die Geschäfte aktiv führt', warumFalsch: 'Stille Gesellschafter sind „still" und führen die Geschäfte gerade nicht.' },
    ],
    richtige: 0,
    erklaerung: 'Stille Gesellschafter sind Eigenkapitalgeber bei einer anderen Rechtsform. Sie sind „still", haben nichts zu melden und tauchen nach außen nicht auf.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie hoch ist das Mindestkapital einer AG bzw. einer GmbH nach Leons Unterlagen?',
    optionen: [
      { text: 'AG: 50.000 €, GmbH: 25.000 €' },
      { text: 'AG: 25.000 €, GmbH: 50.000 €', warumFalsch: 'Genau umgekehrt: AG 50.000 €, GmbH 25.000 €.' },
      { text: 'Beide: 0 €', warumFalsch: 'Beide benötigen ein Mindestkapital; ohne Eigenkapital kommt eher die UG in Frage.' },
      { text: 'AG: 100.000 €, GmbH: 50.000 €', warumFalsch: 'Genannt werden 50.000 € (AG) und 25.000 € (GmbH).' },
    ],
    richtige: 0,
    erklaerung: 'Die AG benötigt aktuell ein Mindestkapital von 50.000 €, die GmbH eines von 25.000 €.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'AG und GmbH – wahr oder falsch?',
    aussagen: [
      { text: 'Bei der AG ist es leicht, durch Kauf/Verkauf von Aktien Eigentümer zu werden und wieder auszutreten.', wahr: true },
      { text: 'Die GmbH besteht aus Geschäftsführer und Gesellschafterversammlung.', wahr: true },
      { text: 'Bei der GmbH haftet man mit dem gesamten Privatvermögen.', wahr: false, warum: 'Bei der GmbH wird nur mit dem eingebrachten Kapital gehaftet (beschränkte Haftung).' },
      { text: 'Die GmbH hat ein kompliziertes „rein und raus".', wahr: true },
    ],
    erklaerung: 'AG: für Großunternehmen, 50.000 € Mindestkapital, viele Vorschriften, leichtes Ein-/Austreten über Aktien. GmbH: 25.000 € Mindestkapital, Haftung nur mit eingebrachtem Kapital, kompliziertes Rein/Raus.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 11,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was kennzeichnet die UG (Unternehmergesellschaft)?',
    optionen: [
      { text: 'Man braucht kein Eigenkapital und niemanden, der voll haftet; ab 25.000 € wird sie meist zur GmbH umgegründet' },
      { text: 'Sie benötigt ein Mindestkapital von 50.000 €', warumFalsch: 'Das ist das AG-Mindestkapital; die UG braucht gerade kein Eigenkapital.' },
      { text: 'Aus Sicht der Kunden ist sie die beste Form', warumFalsch: 'Aus Sicht der Eigentümer ist sie am besten, aus Kundensicht eher schlecht.' },
      { text: 'Bei ihr haftet immer jemand voll mit', warumFalsch: 'Bei der UG braucht es niemanden, der voll haftet.' },
    ],
    richtige: 0,
    erklaerung: 'Die UG braucht kein Eigenkapital und niemanden, der voll haftet – aus Eigentümersicht das Beste, aus Kundensicht eher schlecht. Ab 25.000 € wird sie meist zur GmbH umgegründet.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 11,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Rechtsformen ihrer Obergruppe zu.',
    kategorien: ['Einzelunternehmen', 'Personengesellschaft', 'Kapitalgesellschaft'],
    items: [
      { text: 'Einzelunternehmen', kategorie: 'Einzelunternehmen' },
      { text: 'GbR', kategorie: 'Personengesellschaft' },
      { text: 'OHG', kategorie: 'Personengesellschaft' },
      { text: 'KG', kategorie: 'Personengesellschaft' },
      { text: 'AG', kategorie: 'Kapitalgesellschaft' },
      { text: 'GmbH', kategorie: 'Kapitalgesellschaft' },
      { text: 'UG', kategorie: 'Kapitalgesellschaft' },
    ],
    erklaerung: 'Privatrechtliche Rechtsformen: Einzelunternehmen (1 Eigentümer), Personengesellschaften (GbR, OHG, KG, stille Gesellschaft) und Kapitalgesellschaften (AG, GmbH, UG).',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 10,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Für welche Betriebe gilt die arbeitsrechtliche Mitbestimmung (ARM)?',
    optionen: [
      { text: 'Für Betriebe ab 5 Mitarbeitern' },
      { text: 'Nur für Kapitalgesellschaften', warumFalsch: 'Nur für Kapitalgesellschaften gilt die unternehmerische Mitbestimmung (UMB), nicht die ARM.' },
      { text: 'Für alle Betriebe ab 50 Mitarbeitern', warumFalsch: 'Die genannte Schwelle ist 5 Mitarbeiter, nicht 50.' },
      { text: 'Nur für Einzelunternehmen', warumFalsch: 'Die ARM gilt für Betriebe ab 5 Mitarbeitern, unabhängig von der Rechtsform.' },
    ],
    richtige: 0,
    erklaerung: 'Arbeitsrechtliche Mitbestimmung (ARM) gilt für Betriebe ab 5 Mitarbeitern. Die unternehmerische Mitbestimmung (UMB) gilt nur für Kapitalgesellschaften (AG, GmbH, UG).',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 12,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Für welche Unternehmen gilt die unternehmerische Mitbestimmung (UMB)?',
    optionen: [
      { text: 'Nur für Kapitalgesellschaften (AG, GmbH, UG)' },
      { text: 'Für alle Betriebe ab 5 Mitarbeitern', warumFalsch: 'Das ist die Schwelle der arbeitsrechtlichen Mitbestimmung (ARM), nicht der UMB.' },
      { text: 'Nur für Einzelunternehmen', warumFalsch: 'Die UMB gilt gerade für Kapitalgesellschaften, nicht für Einzelunternehmen.' },
      { text: 'Für alle Personengesellschaften', warumFalsch: 'Die UMB gilt für Kapitalgesellschaften, nicht für Personengesellschaften.' },
    ],
    richtige: 0,
    erklaerung: 'Die unternehmerische Mitbestimmung (UMB) gilt nur für Kapitalgesellschaften (AG, GmbH, UG). Es gilt immer nur eine der beiden Mitbestimmungsarten.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 12,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Organe der unternehmerischen Mitbestimmung ihren Aufgaben zu.',
    kategorien: ['Vorstand (VO/GF)', 'Aufsichtsrat (AR)', 'Hauptversammlung (HV/GV)'],
    items: [
      { text: 'Führt die Geschäfte, kümmert sich um Personal, hat befristete Verträge', kategorie: 'Vorstand (VO/GF)' },
      { text: 'Kontrolliert den Vorstand', kategorie: 'Aufsichtsrat (AR)' },
      { text: 'Tagt 1× / Jahr, trifft wichtige Entscheidungen (z.B. Gewinnverwendung, Fusionen)', kategorie: 'Hauptversammlung (HV/GV)' },
    ],
    erklaerung: 'Vorstand: führt die Geschäfte, Personal, befristete Verträge, wählt die Arbeitnehmervertretung im AR. Aufsichtsrat: kontrolliert den Vorstand. Hauptversammlung: tagt jährlich, trifft wichtige Entscheidungen und wählt die Arbeitgebervertretung im AR.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 12,
    extra: true,
    bild: mitbestimmungOrgane,
  },
  {
    art: 'wahrfalsch',
    frage: 'Organe der unternehmerischen Mitbestimmung – wahr oder falsch?',
    aussagen: [
      { text: 'Der Vorstand besteht aus mindestens 2 Personen und hat befristete Verträge.', wahr: true },
      { text: 'Der Aufsichtsrat kontrolliert den Vorstand.', wahr: true },
      { text: 'Die Hauptversammlung findet monatlich statt.', wahr: false, warum: 'Die Hauptversammlung findet einmal im Jahr statt, nicht monatlich.' },
      { text: 'Die Hauptversammlung wählt die Arbeitgebervertretung im Aufsichtsrat.', wahr: true },
    ],
    erklaerung: 'Vorstand: mind. 2 Personen, befristete Verträge, führt Geschäfte. AR: kontrolliert den Vorstand. HV: 1×/Jahr, wählt die Arbeitgebervertretung im AR; der Vorstand wählt die Arbeitnehmervertretung im AR.',
    gruppe: 'Leons Unterlagen',
    quelle: '4 Rechtsformen und Mitbestimmung',
    seite: 12,
    extra: true,
    bild: mitbestimmungOrgane,
  },

  // ===========================================================================
  // 5 Ziele im Unternehmen
  // ===========================================================================
  {
    art: 'single',
    frage: 'Wie werden „Ziele" im Unternehmen definiert?',
    optionen: [
      { text: 'Normative (wertende) Aussagen des Entscheidungsträgers über einen in der Zukunft zu erreichenden Zustand' },
      { text: 'Vergangene Ist-Werte aus der Bilanz', warumFalsch: 'Ziele sind zukunftsgerichtet, keine vergangenen Ist-Werte.' },
      { text: 'Gesetzlich vorgeschriebene Kennzahlen', warumFalsch: 'Ziele sind normative Aussagen des Entscheidungsträgers, keine gesetzlichen Vorgaben.' },
      { text: 'Rein zufällige Ereignisse', warumFalsch: 'Ziele sind bewusst gesetzte, wertende Aussagen, keine Zufälle.' },
    ],
    richtige: 0,
    erklaerung: 'Ziele sind „normative (wertende) Aussagen des Entscheidungsträgers über einen in der Zukunft zu erreichenden Zustand".',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 13,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Funktionen des Zielsystems ihrer Beschreibung zu.',
    kategorien: ['Entscheidungsfunktion', 'Koordinationsfunktion', 'Motivationsfunktion', 'Kontrollfunktion', 'Legitimationsfunktion'],
    items: [
      { text: 'Entscheidungen treffen', kategorie: 'Entscheidungsfunktion' },
      { text: 'Festlegen, wer welche Aufgabe übernimmt', kategorie: 'Koordinationsfunktion' },
      { text: 'Was bewegt uns, es zu tun?', kategorie: 'Motivationsfunktion' },
      { text: 'Sind wir auf dem richtigen Weg? Was haben wir gelernt?', kategorie: 'Kontrollfunktion' },
      { text: 'Das eigene Handeln rechtfertigen', kategorie: 'Legitimationsfunktion' },
    ],
    erklaerung: 'Funktionen des Zielsystems: Entscheidung, Koordination, Motivation, Information, Kontrolle und Legitimation.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 13,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Kennzeichen eines Ziels ihrer Leitfrage zu.',
    kategorien: ['Zielinhalt', 'Zielausmaß', 'Zeitlicher Bezug', 'Sachlicher Geltungsbereich'],
    items: [
      { text: 'Welche Größe wird beeinflusst? (z.B. Kosten)', kategorie: 'Zielinhalt' },
      { text: 'Welches Ausmaß ist erwünscht? (z.B. +X %)', kategorie: 'Zielausmaß' },
      { text: 'Wann wollen wir es erreichen? (z.B. 1 Jahr)', kategorie: 'Zeitlicher Bezug' },
      { text: 'Für wen gilt das Ziel? (z.B. Werk, Mitarbeiter)', kategorie: 'Sachlicher Geltungsbereich' },
    ],
    erklaerung: 'Ein Ziel hat Zielinhalt (welche Größe?), Zielausmaß (wie viel?), zeitlichen Bezug (wann?) und sachlichen Geltungsbereich (für wen?).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 13,
    extra: true,
  },
  {
    art: 'reihenfolge',
    frage: 'Bringe die Ebenen der Zielpyramide von der Spitze zur Basis in die richtige Reihenfolge.',
    schritte: ['Vision', 'Unternehmensleitbild', 'Unternehmensziele', 'Geschäftsziele', 'Funktionsbereichsziele'],
    erklaerung: 'Zielpyramide von oben nach unten: Vision → Unternehmensleitbild → Unternehmensziele → Geschäftsziele → Funktionsbereichsziele.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 14,
    extra: true,
    bild: zielpyramide,
  },
  {
    art: 'single',
    frage: 'Was ist nach der Zielpyramide eine „Vision"?',
    optionen: [
      { text: 'Qualitative, konkrete Bilder der Zukunft' },
      { text: 'Genaue, herunterbrechbare Ziele für eine einzelne Seite', warumFalsch: 'Das beschreibt die Funktionsbereichsziele an der Basis der Pyramide.' },
      { text: 'Kompromisse zwischen Eigentümern und Mitarbeitern für den Gesamtkonzern', warumFalsch: 'Das beschreibt die Unternehmensziele, nicht die Vision.' },
      { text: 'Ein gesetzlich vorgeschriebener Jahresabschluss', warumFalsch: 'Die Vision hat nichts mit dem Jahresabschluss zu tun.' },
    ],
    richtige: 0,
    erklaerung: 'Die Vision steht an der Spitze der Zielpyramide: qualitative, konkrete Bilder der Zukunft.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 14,
    extra: true,
    bild: zielpyramide,
  },
  {
    art: 'single',
    frage: 'Was sind „Unternehmensziele" in der Zielpyramide?',
    optionen: [
      { text: 'Sie gelten für den gesamten Konzern und sind Kompromisse zwischen verschiedenen Gruppen; sie sollen klar und möglichst messbar sein' },
      { text: 'Qualitative Bilder der Zukunft an der Spitze', warumFalsch: 'Das ist die Vision, nicht die Unternehmensziele.' },
      { text: 'Ziele für eine einzelne Seite/Funktion', warumFalsch: 'Das beschreibt die Funktionsbereichsziele.' },
      { text: 'Qualitative Leitsätze als Minimalkompromiss', warumFalsch: 'Das beschreibt das Unternehmensleitbild.' },
    ],
    richtige: 0,
    erklaerung: 'Unternehmensziele gelten für den gesamten Konzern, sind Kompromisse zwischen Gruppen (z.B. Betriebsklima für Mitarbeiter, Gewinn für Eigentümer) und sollen klar und messbar formuliert sein.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.1 Grundlagen',
    seite: 14,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Empirische Thesen zu Unternehmenszielen – wahr oder falsch?',
    aussagen: [
      { text: 'Unternehmensziele liegen nicht von vornherein fest und müssen immer wieder überarbeitet werden.', wahr: true },
      { text: 'Die Zielbildung ist multipersonell, multioperational und multitemporal.', wahr: true },
      { text: 'Ziele sind das Ergebnis von Entscheidungsprozessen verschiedener Stakeholder.', wahr: true },
      { text: 'Interessendurchsetzung hat nichts mit Macht zu tun.', wahr: false, warum: 'Gerade das Gegenteil: Interessendurchsetzung hat etwas mit Macht zu tun – manche haben eine bessere Position.' },
    ],
    erklaerung: 'Empirische Thesen: (1) Ziele liegen nicht fest (multipersonell, multioperational, multitemporal); (2) Ziele sind Ergebnis von Entscheidungsprozessen der Stakeholder; (3) Interessendurchsetzung hat mit Macht zu tun.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.2 Empirische Thesen',
    seite: 14,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Was bedeutet „multipersonell, multioperational und multitemporal" bei der Zielbildung?',
    optionen: [
      { text: 'Mehrere Personen beteiligt, mehrere Schritte nötig, zu verschiedenen Zeiten stattfindend' },
      { text: 'Eine Person, ein Schritt, ein Zeitpunkt', warumFalsch: 'Genau das Gegenteil – „multi" bedeutet jeweils „mehrere".' },
      { text: 'Nur die Geschäftsführung entscheidet einmalig', warumFalsch: 'Multipersonell heißt mehrere Personen, multitemporal heißt zu verschiedenen Zeiten – nicht einmalig.' },
      { text: 'Ausschließlich automatisierte Prozesse', warumFalsch: 'Die Begriffe beziehen sich auf Personen, Schritte und Zeitpunkte, nicht auf Automatisierung.' },
    ],
    richtige: 0,
    erklaerung: 'Multipersonell = mehrere Personen beteiligt; multioperational = mehrere Schritte notwendig; multitemporal = zu verschiedenen Zeiten stattfindend.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.2 Empirische Thesen',
    seite: 14,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Worin unterscheiden sich Stakeholder-View und Shareholder-View?',
    optionen: [
      { text: 'Stakeholder-View: viele Gruppen entscheiden mit (deutsche Sicht). Shareholder-View: Fokus auf Gewinnsteigerung (international verbreitet)' },
      { text: 'Stakeholder-View: nur Gewinnsteigerung. Shareholder-View: viele Gruppen entscheiden mit', warumFalsch: 'Genau umgekehrt: Stakeholder = viele Gruppen, Shareholder = Gewinnfokus.' },
      { text: 'Beide stellen nur den Eigentümer in den Mittelpunkt', warumFalsch: 'Der Stakeholder-View bindet gerade viele Gruppen ein, nicht nur den Eigentümer.' },
      { text: 'Beide sind rein deutsche Sichtweisen', warumFalsch: 'Der Shareholder-View ist international verbreitet, der Stakeholder-View eher deutsch.' },
    ],
    richtige: 0,
    erklaerung: 'Stakeholder-View: viele Gruppen (auch Kunden, Lieferanten, soziale Gruppen) dürfen mitentscheiden (deutsche Sicht). Shareholder-View: das Unternehmen soll alles für die Gewinnsteigerung tun (international verbreitet).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 15,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Existenzbedingungen von Unternehmen ihrer Beschreibung zu.',
    kategorien: ['Rentabilität', 'Liquidität', 'Wachstum', 'Planbarkeit'],
    items: [
      { text: 'Durch die Tätigkeit muss Geld erwirtschaftet werden', kategorie: 'Rentabilität' },
      { text: 'Werkzeug zur Finanzplanung: „ohne … ist alles nichts"', kategorie: 'Liquidität' },
      { text: 'Ermöglicht Kostendeckung und mehr Marktmacht', kategorie: 'Wachstum' },
      { text: 'Verlässliche Rechtsformen und Vertragsfreiheit ermöglichen Investitionen', kategorie: 'Planbarkeit' },
    ],
    erklaerung: 'Existenzbedingungen: Rentabilität (Geld erwirtschaften), Liquidität (Finanzplanung), Wachstum (Kostendeckung, Marktmacht) und Planbarkeit (verlässliche Rahmenbedingungen für Investitionen).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 16,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie wird die Unternehmenskultur (im Gegensatz zur Unternehmensphilosophie) beschrieben?',
    optionen: [
      { text: 'Als das, was tatsächlich im Unternehmen passiert – die akzeptierten Werte und Normen, die Entscheiden und Handeln prägen' },
      { text: 'Als das schriftlich fixierte Leitbild, das das Unternehmen anstrebt', warumFalsch: 'Das ist eher die Unternehmensphilosophie/das Leitbild – die Kultur ist das tatsächliche Geschehen.' },
      { text: 'Als gesetzlich vorgeschriebene Bilanzregeln', warumFalsch: 'Die Unternehmenskultur hat nichts mit Bilanzregeln zu tun.' },
      { text: 'Als die Höhe des Eigenkapitals', warumFalsch: 'Eigenkapital ist eine Bilanzgröße, keine Kulturbeschreibung.' },
    ],
    richtige: 0,
    erklaerung: 'Unternehmenskultur = Gesamtheit gewachsener und akzeptierter Werte und Normen, die das Entscheiden und Handeln prägen. Im Gegensatz zur Philosophie ist sie das, was tatsächlich passiert; sie lässt sich nur schwer lenken.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 16,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Elemente des Symbolsystems der Unternehmenskultur ihrer Beschreibung zu.',
    kategorien: ['Legenden & Mythen', 'Rituale', 'Corporate Identity', 'Kommunikationsstil'],
    items: [
      { text: 'Erzeugen Zusammenhalt, leicht zu merken (z.B. Microsoft in der Garage)', kategorie: 'Legenden & Mythen' },
      { text: 'Geben Halt und Selbstvergewisserung (z.B. Rentenverabschiedung)', kategorie: 'Rituale' },
      { text: 'Einheitliches Erscheinungsbild nach außen (z.B. Kleidungscode)', kategorie: 'Corporate Identity' },
      { text: 'Direkt oder indirekt', kategorie: 'Kommunikationsstil' },
    ],
    erklaerung: 'Symbolsystem: Legenden/Mythen (Zusammenhalt), Rituale (Halt), Corporate Identity (einheitliches Erscheinungsbild), wahrgenommene Atmosphäre (Pünktlichkeit, Höflichkeit) und Kommunikationsstil (direkt/indirekt).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 16,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welche Aussage über Unternehmenskulturen ist korrekt?',
    optionen: [
      { text: 'Sie sind von Menschen gemacht, lassen sich aber nur schwer lenken/planen und unterliegen einem ständigen Wandel' },
      { text: 'Sie sind unveränderlich und festgeschrieben', warumFalsch: 'Kulturen unterliegen einem ständigen Wandlungsprozess – sie sind nicht unveränderlich.' },
      { text: 'Sie lassen sich exakt steuern und planen', warumFalsch: 'Kulturen können nur schwer gelenkt/geplant werden.' },
      { text: 'Sie entstehen ohne menschliches Zutun', warumFalsch: 'Kulturen sind von Menschen gemacht, auch wenn sie schwer lenkbar sind.' },
    ],
    richtige: 0,
    erklaerung: 'Kulturen sind von Menschen gemacht, lassen sich aber nur schwer lenken/planen und unterliegen einem ständigen Wandlungsprozess.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 16,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die Kulturtypen nach Deal/Kennedy ihren typischen Bereichen zu.',
    kategorien: ['Risiko-Kultur', 'Macho-Kultur', 'Prozess-Kultur', 'Brot- und Spiele-Kultur'],
    items: [
      { text: 'Hohes Risiko, langsames Feedback (z.B. Forschungsabteilung)', kategorie: 'Risiko-Kultur' },
      { text: 'Hohes Risiko, schnelles Feedback (z.B. Unternehmensberatung, Start-Up)', kategorie: 'Macho-Kultur' },
      { text: 'Niedriges Risiko, langsames Feedback (z.B. Versicherung, öffentliche Verwaltung)', kategorie: 'Prozess-Kultur' },
      { text: 'Niedriges Risiko, schnelles Feedback (z.B. Handel)', kategorie: 'Brot- und Spiele-Kultur' },
    ],
    erklaerung: 'Deal/Kennedy: Risiko-Kultur (hohes Risiko, langsames Feedback), Macho-Kultur (hohes Risiko, schnelles Feedback), Prozess-Kultur (niedriges Risiko, langsames Feedback) und Brot- und Spiele-Kultur (niedriges Risiko, schnelles Feedback).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 16,
    extra: true,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die ökonomischen Ziele bei Zielkonflikten ihrer Beschreibung zu.',
    kategorien: ['Leistungsziele', 'Erfolgsziele', 'Finanzziele'],
    items: [
      { text: 'Im Vordergrund steht die Leistung – was das Unternehmen im Wesentlichen tut', kategorie: 'Leistungsziele' },
      { text: 'Im Vordergrund steht der Gewinn und die zugehörigen Kennzahlen', kategorie: 'Erfolgsziele' },
      { text: 'Im Vordergrund steht das Verhältnis von Geldströmen (Liquidität)', kategorie: 'Finanzziele' },
    ],
    erklaerung: 'Bei ökonomischen Zielkonflikten unterscheidet man Leistungsziele (was das Unternehmen tut), Erfolgsziele (Gewinn/Kennzahlen) und Finanzziele (Geldströme/Liquidität). Alle drei müssen betrachtet werden.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.4 Zielkonflikte',
    seite: 17,
    extra: true,
  },
  {
    art: 'wahrfalsch',
    frage: 'Zielkonflikte – wahr oder falsch?',
    aussagen: [
      { text: 'Es können nie alle Ziele gleichzeitig erfüllt werden („jeder Euro kann nur einmal ausgegeben werden").', wahr: true },
      { text: 'Es gibt Konflikte zwischen Ökologie, Ökonomie und sozialen Bedürfnissen.', wahr: true },
      { text: 'Zwischen Leistungs-, Erfolgs- und Finanzzielen gibt es keinerlei Konflikte.', wahr: false, warum: 'Gerade zwischen Leistungs-, Erfolgs- und Finanzzielen bestehen ökonomische Konflikte.' },
      { text: 'Bei Zielkonflikten müssen alle drei ökonomischen Bereiche betrachtet werden.', wahr: true },
    ],
    erklaerung: 'Es lassen sich nie alle Ziele gleichzeitig erfüllen. Konflikte bestehen zwischen Ökologie–Ökonomie–Soziales und zwischen Leistungs-, Erfolgs- und Finanzzielen.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.4 Zielkonflikte',
    seite: 17,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Welche fünf Stufen umfasst das Entstehungsmodell der Bedürfnisse (Maslow)?',
    optionen: [
      { text: 'Physiologische Bedürfnisse, Sicherheitsbedürfnisse, soziale Bedürfnisse, Wertschätzung, Selbstverwirklichung' },
      { text: 'Vision, Leitbild, Unternehmensziele, Geschäftsziele, Funktionsbereichsziele', warumFalsch: 'Das sind die Ebenen der Zielpyramide, nicht die Bedürfnisstufen.' },
      { text: 'Gründung, Wachstum, Stagnation, Schrumpfung, Insolvenz', warumFalsch: 'Das sind die Phasen des Lebenszyklus, nicht die Bedürfnisstufen.' },
      { text: 'Rentabilität, Liquidität, Wachstum, Planbarkeit, Macht', warumFalsch: 'Das sind die Existenzbedingungen, nicht die Bedürfnisstufen.' },
    ],
    richtige: 0,
    erklaerung: 'Die Bedürfnispyramide (Entstehungsmodell) hat fünf Stufen: physiologische Bedürfnisse, Sicherheitsbedürfnisse, soziale Bedürfnisse, Wertschätzung und Selbstverwirklichung. Das Unternehmen bietet je Stufe passende Befriedigungsangebote.',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 15,
    extra: true,
    bild: beduerfnisPyramide,
  },
  {
    art: 'kategorien',
    frage: 'Ordne die betrieblichen Angebote der passenden Bedürfnisstufe zu.',
    kategorien: ['Physiologische Bedürfnisse', 'Sicherheitsbedürfnisse', 'Wertschätzung', 'Selbstverwirklichung'],
    items: [
      { text: 'Ausreichende Bezahlung, Betriebskantine, kostenlose Getränke', kategorie: 'Physiologische Bedürfnisse' },
      { text: 'Unbefristete Verträge, Zuschüsse zu Betriebsrente und Krankenversicherung', kategorie: 'Sicherheitsbedürfnisse' },
      { text: 'Loben, Prämien, Benefits (Dienstwagen, schönes Büro)', kategorie: 'Wertschätzung' },
      { text: 'Freiräume, Vertrauen, Möglichkeit sich auszuprobieren', kategorie: 'Selbstverwirklichung' },
    ],
    erklaerung: 'Je Bedürfnisstufe gibt es passende betriebliche Angebote: Bezahlung/Kantine (physiologisch), unbefristete Verträge/Vorsorge (Sicherheit), Lob/Benefits (Wertschätzung) und Freiräume/Vertrauen (Selbstverwirklichung).',
    gruppe: 'Leons Unterlagen',
    quelle: '5.3 Ein Entstehungsmodell',
    seite: 15,
    extra: true,
    bild: beduerfnisPyramide,
  },

  // ===========================================================================
  // Wichtige Formeln zum Merken (S. 18)
  // ===========================================================================
  {
    art: 'single',
    frage: 'Wie berechnet sich die Eigenkapitalquote (Grundfall)?',
    optionen: [
      { text: 'Eigenkapital / Gesamtkapital · 100' },
      { text: 'Fremdkapital / Eigenkapital', warumFalsch: 'Das ist der Verschuldungsgrad, nicht die Eigenkapitalquote.' },
      { text: 'Anlagevermögen / Gesamtkapital · 100', warumFalsch: 'Das ist die Anlageintensität.' },
      { text: 'Eigenkapital / Anlagevermögen · 100', warumFalsch: 'Das ist die Anlagendeckung I.' },
    ],
    richtige: 0,
    erklaerung: 'Eigenkapitalquote (Grundfall) = Eigenkapital / Gesamtkapital · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist der Verschuldungsgrad (Grundfall) definiert?',
    optionen: [
      { text: 'Fremdkapital / Eigenkapital' },
      { text: 'Eigenkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
      { text: 'Fremdkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Verschuldungsquote, nicht der Verschuldungsgrad.' },
      { text: 'Gewinn / Kapital · 100', warumFalsch: 'Das ist eine Rentabilitätskennzahl, kein Verschuldungsgrad.' },
    ],
    richtige: 0,
    erklaerung: 'Verschuldungsgrad (Grundfall) = Fremdkapital / Eigenkapital.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie berechnet sich die Verschuldungsquote (Grundfall)?',
    optionen: [
      { text: '(Fremdkapital / Gesamtkapital) · 100' },
      { text: 'Fremdkapital / Eigenkapital', warumFalsch: 'Das ist der Verschuldungsgrad.' },
      { text: '(Eigenkapital / Gesamtkapital) · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
      { text: '(Anlagevermögen / Gesamtkapital) · 100', warumFalsch: 'Das ist die Anlageintensität.' },
    ],
    richtige: 0,
    erklaerung: 'Verschuldungsquote (Grundfall) = (Fremdkapital / Gesamtkapital) · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie berechnet sich die Anlageintensität?',
    optionen: [
      { text: '(Anlagevermögen / Gesamtkapital) · 100' },
      { text: '(Eigenkapital / Anlagevermögen) · 100', warumFalsch: 'Das ist die Anlagendeckung I.' },
      { text: '(Umlaufvermögen / Gesamtkapital) · 100', warumFalsch: 'Die Anlageintensität bezieht sich auf das Anlagevermögen, nicht das Umlaufvermögen.' },
      { text: '(Anlagevermögen / Eigenkapital) · 100', warumFalsch: 'Der Nenner ist das Gesamtkapital, nicht das Eigenkapital.' },
    ],
    richtige: 0,
    erklaerung: 'Anlageintensität = (Anlagevermögen / Gesamtkapital) · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist die Anlagendeckung I definiert?',
    optionen: [
      { text: '(Eigenkapital / Anlagevermögen) · 100' },
      { text: '((Eigenkapital + langfristiges Fremdkapital) / Anlagevermögen) · 100', warumFalsch: 'Das ist die Anlagendeckung II (mit langfristigem Fremdkapital).' },
      { text: '(Anlagevermögen / Gesamtkapital) · 100', warumFalsch: 'Das ist die Anlageintensität.' },
      { text: '(Eigenkapital / Gesamtkapital) · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
    ],
    richtige: 0,
    erklaerung: 'Anlagendeckung I = (Eigenkapital / Anlagevermögen) · 100. Anlagendeckung II bezieht zusätzlich das langfristige Fremdkapital ein.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist die Anlagendeckung II (Grundfall) definiert?',
    optionen: [
      { text: '((Eigenkapital + langfristiges Fremdkapital) / Anlagevermögen) · 100' },
      { text: '(Eigenkapital / Anlagevermögen) · 100', warumFalsch: 'Das ist die Anlagendeckung I (ohne langfristiges Fremdkapital).' },
      { text: '(Anlagevermögen / Gesamtkapital) · 100', warumFalsch: 'Das ist die Anlageintensität.' },
      { text: '(Fremdkapital / Eigenkapital)', warumFalsch: 'Das ist der Verschuldungsgrad.' },
    ],
    richtige: 0,
    erklaerung: 'Anlagendeckung II = ((Eigenkapital + langfristiges Fremdkapital) / Anlagevermögen) · 100 – sie deckt das Anlagevermögen mit langfristigem Kapital ab.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'reihenfolge',
    frage: 'Ordne die Liquiditätsgrade I, II und III nach zunehmendem Umfang der einbezogenen Mittel im Zähler.',
    schritte: [
      'Liquidität I: Guthaben',
      'Liquidität II: Guthaben + kurzfristige Forderungen',
      'Liquidität III: Guthaben + kurzfristige Forderungen + Vorräte',
    ],
    erklaerung: 'Die Liquiditätsgrade bauen aufeinander auf: I (nur Guthaben), II (+ kurzfristige Forderungen), III (+ Vorräte). Nenner ist jeweils kurzfristiges Fremdkapital + passiver RAP, mal 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie berechnet sich die Liquidität I?',
    optionen: [
      { text: '(Guthaben / (kurzfristiges Fremdkapital + passiver RAP)) · 100' },
      { text: '((Guthaben + kurzfristige Forderungen) / (kurzfristiges FK + pass. RAP)) · 100', warumFalsch: 'Das ist die Liquidität II (zusätzlich kurzfristige Forderungen).' },
      { text: '((Guthaben + Forderungen + Vorräte) / (kurzfristiges FK + pass. RAP)) · 100', warumFalsch: 'Das ist die Liquidität III (zusätzlich Vorräte).' },
      { text: '(Anlagevermögen / Gesamtkapital) · 100', warumFalsch: 'Das ist die Anlageintensität, keine Liquiditätskennzahl.' },
    ],
    richtige: 0,
    erklaerung: 'Liquidität I = (Guthaben / (kurzfristiges Fremdkapital + passiver RAP)) · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 18,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist der Return on Investment (ROI) nach Leons Formelsammlung definiert?',
    optionen: [
      { text: '(Jahresüberschuss / (Gesamtkapital − Jahresüberschuss)) · 100' },
      { text: '(Jahresüberschuss / (Eigenkapital − Jahresüberschuss)) · 100', warumFalsch: 'Das ist die Eigenkapitalrentabilität (EKR).' },
      { text: '(Eigenkapital / Gesamtkapital) · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
      { text: 'Fremdkapital / Eigenkapital', warumFalsch: 'Das ist der Verschuldungsgrad.' },
    ],
    richtige: 0,
    erklaerung: 'ROI = (Jahresüberschuss / (Gesamtkapital − Jahresüberschuss)) · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 19,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie berechnet sich die Eigenkapitalrentabilität (EKR)?',
    optionen: [
      { text: '(Jahresüberschuss / (Eigenkapital − Jahresüberschuss)) · 100' },
      { text: '(Jahresüberschuss / (Gesamtkapital − Jahresüberschuss)) · 100', warumFalsch: 'Das ist der ROI (Bezug auf Gesamtkapital).' },
      { text: '((Jahresüberschuss + Fremdkapital · Zinssatz) / (Gesamtkapital − Jahresüberschuss)) · 100', warumFalsch: 'Das ist die Gesamtkapitalrentabilität (GKR).' },
      { text: 'Eigenkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
    ],
    richtige: 0,
    erklaerung: 'Eigenkapitalrentabilität (EKR) = (Jahresüberschuss / (Eigenkapital − Jahresüberschuss)) · 100.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 19,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist die Gesamtkapitalrentabilität (GKR) definiert?',
    optionen: [
      { text: '((Jahresüberschuss + Fremdkapital · Zinssatz) / (Gesamtkapital − Jahresüberschuss)) · 100' },
      { text: '(Jahresüberschuss / (Eigenkapital − Jahresüberschuss)) · 100', warumFalsch: 'Das ist die Eigenkapitalrentabilität (EKR), ohne die Fremdkapitalzinsen im Zähler.' },
      { text: '(Eigenkapital / Gesamtkapital) · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
      { text: '(Fremdkapital / Gesamtkapital) · 100', warumFalsch: 'Das ist die Verschuldungsquote.' },
    ],
    richtige: 0,
    erklaerung: 'Gesamtkapitalrentabilität (GKR) = ((Jahresüberschuss + Fremdkapital · Zinssatz) / (Gesamtkapital − Jahresüberschuss)) · 100 – die Fremdkapitalzinsen werden im Zähler hinzuaddiert.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 19,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie lautet die Leverage-Formel für die Eigenkapitalrentabilität?',
    optionen: [
      { text: 'EKR = GKR + (GKR − FKZ) · Fremdkapital / Eigenkapital' },
      { text: 'EKR = GKR − (GKR + FKZ) · Eigenkapital / Fremdkapital', warumFalsch: 'Vorzeichen und Verhältnis stimmen nicht; korrekt ist + (GKR − FKZ) · FK/EK.' },
      { text: 'EKR = GKR · FKZ · Fremdkapital', warumFalsch: 'Die Leverage-Formel ist additiv mit dem Hebel FK/EK, kein reines Produkt.' },
      { text: 'EKR = Eigenkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Eigenkapitalquote, nicht der Leverage-Effekt.' },
    ],
    richtige: 0,
    erklaerung: 'Leverage-Formel: EKR = GKR + (GKR − FKZ) · Fremdkapital/Eigenkapital. Solange die GKR über dem Fremdkapitalzins (FKZ) liegt, hebt zusätzliches Fremdkapital die EKR (Leverage-Effekt).',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 19,
    extra: true,
  },
  {
    art: 'single',
    frage: 'Wie ist der Kapitalgewinn nach Leons Formelsammlung definiert?',
    optionen: [
      { text: 'Umsatz − Aufwand bzw. Jahresüberschuss + Fremdkapital · Zinssatz' },
      { text: 'Jahresüberschuss − Fremdkapitalzinssatz', warumFalsch: 'Das ist gerade die Umstellung für den Jahresüberschuss, nicht der Kapitalgewinn.' },
      { text: 'Eigenkapital / Gesamtkapital · 100', warumFalsch: 'Das ist die Eigenkapitalquote.' },
      { text: 'FKZ / Fremdkapital', warumFalsch: 'Das ist der Fremdkapitalzinssatz.' },
    ],
    richtige: 0,
    erklaerung: 'Kapitalgewinn = Umsatz − Aufwand bzw. Jahresüberschuss + Fremdkapital · Zinssatz. Daraus: Jahresüberschuss = Kapitalgewinn − Fremdkapitalzins; Fremdkapitalzinssatz = FKZ / Fremdkapital.',
    gruppe: 'Leons Unterlagen',
    quelle: 'Wichtige Formeln zum Merken',
    seite: 19,
    extra: true,
  },
]
