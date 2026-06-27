import type { ReactNode } from 'react'

// =============================================================================
// Nachgebaute Abbildungen aus dem Lehrer-Foliensatz
// (public/material/folien-vom-Lehrer/PP-Folien_BWL_2025.pdf).
// Jede Figur ist als theme-fähiges Inline-SVG bzw. schlichte HTML-Tabelle
// nachgebaut – KEINE Screenshots/Bilddateien. Der Schlüssel des Records ist
// exakt der `abschnitt.titel` aus themen.ts; `seite` ist die Folien-Seite,
// die in Schema.tsx als „📄 Folien vom Lehrer, Seite N" angezeigt wird.
//
// Hinweis: Die Abbildungen sind bewusst als statische ReactNode-Konstanten
// (keine React-Komponenten) auf Modulebene definiert – so entstehen keine
// per-Render neu gebauten Komponenten/Werte und die Datei bleibt eine reine
// Datendatei.
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

// --- Gemeinsamer Tabellen-Stil (Betriebstypologien, Folie 18) ---------------

const tdStyle: React.CSSProperties = {
  border: '1px solid var(--border2)',
  padding: '0.4rem 0.6rem',
  verticalAlign: 'top',
  textAlign: 'left',
}

const thStyle: React.CSSProperties = {
  ...tdStyle,
  background: 'var(--bg3)',
  color: 'var(--text)',
  fontWeight: 600,
}

// --- Abbildungen als statische ReactNode-Konstanten -------------------------

/** Baum der Wirtschaftseinheiten (Folie 16). */
const wirtschaftseinheiten: ReactNode = (
  <svg
    viewBox="0 0 460 240"
    width="100%"
    style={{ maxWidth: 500 }}
    role="img"
    aria-label="Baum der Wirtschaftseinheiten: Betriebe (Fremdbedarfsdeckung, Orte der Leistungserstellung) gliedern sich in Unternehmungen sowie öffentliche Betriebe und Verwaltungen; Haushalte sind privat oder staatlich"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M230 40 L120 80" />
      <path d="M230 40 L340 80" />
      <path d="M120 116 L70 156" />
      <path d="M120 116 L200 156" />
    </g>
    {svgBox(150, 10, 160, 30, 'Wirtschaftseinheiten', 'root')}
    {svgBox(40, 80, 160, 36, 'Betriebe', 'be', 'Fremdbedarfsdeckung')}
    {svgBox(280, 80, 160, 36, 'Haushalte', 'hh', 'privat / staatlich')}
    {svgBox(10, 156, 110, 40, 'Unternehmungen', 'un')}
    {svgBox(140, 156, 150, 40, 'Öffentliche Betriebe', 'ob', 'und Verwaltungen')}
    <text x="455" y="180" textAnchor="end" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      * Betriebe =
    </text>
    <text x="455" y="194" textAnchor="end" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      „Orte der Leistungserstellung"
    </text>
  </svg>
)

/** Tabelle der Betriebstypologien (Folie 18). */
const betriebstypologien: ReactNode = (
  <table
    style={{
      borderCollapse: 'collapse',
      width: '100%',
      fontSize: '0.85rem',
      color: 'var(--text)',
    }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Gliederung der Betriebe nach verschiedenen Kriterien
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Gliederung nach</th>
        <th scope="col" style={thStyle}>Art</th>
        <th scope="col" style={thStyle}>Beispiel</th>
        <th scope="col" style={thStyle}>Anwendung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={tdStyle}>Hauptleistung</th>
        <td style={tdStyle}>Sachleistung · Dienstleistung</td>
        <td style={tdStyle}>Wirtschaftszweig / Branche: Industrie (Chemie, Metall), Banken, Versicherungen, Handel, Transport …</td>
        <td style={tdStyle}>Organisierte Interessenvertretung – Unternehmensverbände: Arbeitgeber-, Wirtschaftsverbände, Kammern; Arbeitnehmer: Gewerkschaften</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Größe (Umsatz, Mitarbeiter, Kapital)</th>
        <td style={tdStyle}>Groß-, Mittel- und Kleinbetriebe</td>
        <td style={tdStyle}>Siehe Rechtsformen</td>
        <td style={tdStyle}>Publizität, Mitbestimmung, Bilanzrichtliniengesetz</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Rechtsform</th>
        <td style={tdStyle}>Öffentliches und privates Recht</td>
        <td style={tdStyle}>Rechtsformen (AG, GmbH, KG …)</td>
        <td style={tdStyle}>Haftung und Besteuerung</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Zielsetzungen</th>
        <td style={tdStyle}>Erwerbswirtschaftlichkeit · Kostendeckung · Zuschuss</td>
        <td style={tdStyle}>Gewinnmaximierung / Einkommensprinzip; angemessene Verzinsung; reines Kostendeckungsprinzip; Subventionsprinzip (Bedarfsdeckung)</td>
        <td style={tdStyle}>Publikums-AG, Zeitungskiosk; Wasserversorgung, Krankenhaus; städt. Kindergarten, Landwirtschaft, Zoo</td>
      </tr>
    </tbody>
  </table>
)

/** Baum der Gliederung der BWL (Folie 22). */
const gliederungBWL: ReactNode = (
  <svg
    viewBox="0 0 480 230"
    width="100%"
    style={{ maxWidth: 520 }}
    role="img"
    aria-label="Gliederung der BWL: Die BWL teilt sich in ABWL (nach Funktion: Beschaffung, Produktion, Absatz, Finanzierung, Personal) und Spezielle BWL (nach Objekt: Industrie, Handel, Banken, Versicherungen)"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M70 70 L70 50 L160 50" />
      <path d="M70 70 L70 130 L160 130" />
      <path d="M270 50 L320 50" />
      <path d="M270 130 L320 130" />
    </g>
    {svgBox(20, 56, 50, 36, 'BWL', 'bwl')}
    {svgBox(160, 32, 110, 36, 'ABWL', 'abwl', 'nach Funktion')}
    {svgBox(160, 112, 110, 36, 'Spez. BWL', 'spez', 'nach Objekt')}
    <g fontSize="10" fill="var(--text2)">
      <text x="328" y="40">Beschaffung, Produktion,</text>
      <text x="328" y="55">Absatz, Finanzierung,</text>
      <text x="328" y="70">Personal etc.</text>
      <text x="328" y="120">Industrie, Handel,</text>
      <text x="328" y="135">Banken, Versicherungen</text>
      <text x="328" y="150">etc.</text>
    </g>
  </svg>
)

/** Bilanz als T-Konto / Handelsbilanz (Folie 40). */
const bilanzTKonto: ReactNode = (
  <svg
    viewBox="0 0 460 240"
    width="100%"
    style={{ maxWidth: 500 }}
    role="img"
    aria-label="Handelsbilanz als T-Konto: links die Aktivseite mit Anlagevermögen, Umlaufvermögen und Rechnungsabgrenzungsposten, rechts die Passivseite mit Eigenkapital, Rückstellungen, Verbindlichkeiten und Rechnungsabgrenzungsposten"
  >
    <rect x="20" y="44" width="420" height="184" rx="6" fill="var(--bg2)" stroke="var(--border2)" strokeWidth="1.5" />
    <g stroke="var(--border2)" strokeWidth="1.5">
      <path d="M230 44 L230 228" />
      <path d="M20 74 L440 74" />
    </g>
    <text x="230" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">
      Die Handelsbilanz
    </text>
    <g fontSize="11.5" fontWeight="600" fill="var(--text)">
      <text x="125" y="64" textAnchor="middle">Aktivseite (Mittelverwendung)</text>
      <text x="335" y="64" textAnchor="middle">Passivseite (Mittelherkunft)</text>
    </g>
    <g fontSize="10" fill="var(--text2)">
      <text x="32" y="98">A. Anlagevermögen</text>
      <text x="42" y="114">• Immaterielle VG</text>
      <text x="42" y="130">• Sachanlagen</text>
      <text x="42" y="146">• Finanzanlagen</text>
      <text x="32" y="170">B. Umlaufvermögen</text>
      <text x="42" y="186">• Vorräte, Forderungen</text>
      <text x="42" y="202">• Wertpapiere, flüssige Mittel</text>
      <text x="32" y="222">C. Rechnungsabgrenzungsposten</text>
    </g>
    <g fontSize="10" fill="var(--text2)">
      <text x="242" y="98">A. Eigenkapital</text>
      <text x="252" y="114">• inkl. Gewinn-/Verlustvortrag</text>
      <text x="252" y="130">• inkl. Jahresüberschuss/-fehlbetrag</text>
      <text x="242" y="154">B. Rückstellungen</text>
      <text x="242" y="178">C. Verbindlichkeiten (FK)</text>
      <text x="242" y="202">D. Rechnungsabgrenzungsposten</text>
    </g>
  </svg>
)

/** Organe der unternehmerischen Mitbestimmung (Folie 51). */
const mitbestimmungOrgane: ReactNode = (
  <svg
    viewBox="0 0 480 230"
    width="100%"
    style={{ maxWidth: 520 }}
    role="img"
    aria-label="Organe einer Kapitalgesellschaft: Der Aufsichtsrat bestellt den Vorstand (leitendes Organ) und überwacht ihn; die Hauptversammlung (beschließendes Organ) und die Belegschaft wählen die Mitglieder des Aufsichtsrats aus Arbeitgeber- und Arbeitnehmervertretern"
  >
    {svgBox(20, 80, 130, 56, 'VO/GF', 'vo', 'Leitendes Organ')}
    {svgBox(175, 80, 130, 56, 'AR', 'ar', 'Überwachendes Organ')}
    {svgBox(330, 80, 130, 56, 'HV/GV', 'hv', 'Beschließendes Organ')}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M175 96 L150 96" markerEnd="url(#pfeil)" />
      <path d="M330 120 L305 120" markerEnd="url(#pfeil)" />
    </g>
    <defs>
      <marker id="pfeil" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
    </defs>
    <g fontSize="9.5" fill="var(--text3)">
      <text x="162" y="88">Bestellung</text>
      <text x="100" y="160">Personal (Belegschaft)</text>
      <text x="318" y="160">Aktionäre / Gesellschafter</text>
      <text x="100" y="173">→ wählen AN-Vertreter</text>
      <text x="318" y="173">→ wählen AG-Vertreter</text>
    </g>
    <text x="240" y="200" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
      Aufsichtsrat = Arbeitnehmer- (+ Gewerkschafts-) und Arbeitgebervertreter
    </text>
  </svg>
)

/** Zielpyramide (Folie 56). */
const zielpyramide: ReactNode = (
  <svg
    viewBox="0 0 350 250"
    width="100%"
    style={{ maxWidth: 400 }}
    role="img"
    aria-label="Zielpyramide: von der Vision bzw. Mission an der Spitze (qualitativ) über Unternehmensleitbild, Unternehmensziele und Geschäftsbereichsziele bis zu den Funktionsbereichszielen an der Basis (zunehmend quantitativ)"
  >
    {pyramide(
      [
        { y: 20, w: 70, label: 'Vision' },
        { y: 60, w: 130, label: 'Unternehmensleitbild' },
        { y: 100, w: 190, label: 'Unternehmensziele' },
        { y: 140, w: 250, label: 'Geschäftsbereichsziele' },
        { y: 180, w: 310, label: 'Funktionsbereichsziele' },
      ],
      36,
      'var(--green-dim)',
      'var(--green)',
    )}
    <g fontSize="11" fill="var(--text)" textAnchor="middle">
      <text x={PYRAMID_CX} y="44">Vision / Mission</text>
      <text x={PYRAMID_CX} y="84">Unternehmensleitbild</text>
      <text x={PYRAMID_CX} y="124">Unternehmensziele</text>
      <text x={PYRAMID_CX} y="164">Geschäftsbereichsziele</text>
      <text x={PYRAMID_CX} y="204">Funktionsbereichsziele</text>
    </g>
    <g fontSize="9.5" fill="var(--text3)">
      <text x="6" y="34">qualitativ</text>
      <text x="262" y="224">quantitativ</text>
    </g>
  </svg>
)

/** Maslow-Bedürfnispyramide als Entstehungsmodell (Folie 60). */
const beduerfnisPyramide: ReactNode = (
  <svg
    viewBox="0 0 350 280"
    width="100%"
    style={{ maxWidth: 400 }}
    role="img"
    aria-label="Bedürfnispyramide nach Maslow als Motive menschlichen Verhaltens: von physiologischen Bedürfnissen an der Basis über Sicherheit, soziale Bedürfnisse und Wertschätzung bis zur Selbstverwirklichung an der Spitze"
  >
    {pyramide(
      [
        { y: 30, w: 70, label: 'Selbstverwirklichung' },
        { y: 78, w: 130, label: 'Wertschätzung' },
        { y: 126, w: 190, label: 'Soziale Bedürfnisse' },
        { y: 174, w: 250, label: 'Sicherheit' },
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
      <text x={PYRAMID_CX} y="198">Sicherheit</text>
      <text x={PYRAMID_CX} y="246">Physiologische Bedürfnisse</text>
    </g>
  </svg>
)

// --- Export -----------------------------------------------------------------

export const themenBilder: Record<string, { bild: ReactNode; seite: number }> = {
  '1.3 Wirtschaftseinheiten': { bild: wirtschaftseinheiten, seite: 16 },
  '1.4 Betriebstypologien': { bild: betriebstypologien, seite: 18 },
  '1.5 Gliederung der BWL': { bild: gliederungBWL, seite: 22 },
  '3.1 Jahresabschluss': { bild: bilanzTKonto, seite: 40 },
  'Mitbestimmung – die deutsche „Spielart"': { bild: mitbestimmungOrgane, seite: 51 },
  '5.1 Grundlagen': { bild: zielpyramide, seite: 56 },
  '5.3 Ein Entstehungsmodell': { bild: beduerfnisPyramide, seite: 60 },
}
