import type { ReactNode } from 'react'
import type { BeschriftungSlot } from 'lernseiten-ui'

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
//
// Beschriftungs-Quiz: SVG-Figuren existieren zusätzlich als „leere" Variante
// (Kästen ohne die gesuchten Begriffe) fürs Quiz („Abbildung beschriften").
// Dazu ist jede Figur ein Builder `(leer: boolean) => ReactNode`, der auf
// Modulebene zweimal aufgerufen wird – beide Varianten bleiben statische
// Konstanten mit einer einzigen Koordinaten-Quelle. Die Slot-Rechtecke fürs
// Overlay werden aus denselben Box-Definitionen abgeleitet (boxSlots).
// =============================================================================

// --- Wiederverwendbare SVG-Helfer (Modulebene, reine Funktionen) ------------

export const PYRAMID_CX = 175

interface PyramidStufe {
  y: number
  w: number
  label: string
}

/** Eine Pyramide aus trapezförmigen Stufen (von oben nach unten). */
export function pyramide(
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

/**
 * Eine beschriftete Box (Rechteck + Text) für Strukturbäume/Organigramme.
 * Mit `ohneLabel` bleibt der Haupt-Label weg (Kasten + Sub bleiben) – für die
 * leere Quiz-Variante einer Figur.
 */
export function svgBox(
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  key: string,
  sub?: string,
  ohneLabel?: boolean,
): ReactNode {
  return (
    <g key={key}>
      <rect x={x} y={y} width={w} height={h} rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
      {!ohneLabel && (
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
      )}
      {sub ? (
        <text x={x + w / 2} y={y + 34} textAnchor="middle" fontSize="9.5" fill="var(--text2)">
          {sub}
        </text>
      ) : null}
    </g>
  )
}

// --- Beschriftungs-Quiz: Box-Definitionen und Slot-Ableitung -----------------

/** Eine im Quiz zu beschriftende svgBox (Koordinaten + Begriff als Daten). */
export interface QuizBoxDef {
  x: number
  y: number
  w: number
  h: number
  label: string
  key: string
  sub?: string
}

/** Rendert die Quiz-Boxen einer Figur; bei `leer` ohne die Haupt-Labels. */
export function quizBoxen(defs: QuizBoxDef[], leer: boolean): ReactNode[] {
  return defs.map(d => svgBox(d.x, d.y, d.w, d.h, d.label, d.key, d.sub, leer))
}

/**
 * Slots (Drop-Zonen) aus Quiz-Box-Definitionen ableiten: bei Boxen mit Sub-
 * Zeile nur der obere Haupt-Label-Bereich (die Sub-Zeile bleibt als Hinweis
 * sichtbar), sonst die ganze Box.
 */
export function boxSlots(defs: QuizBoxDef[], gruppe?: string): BeschriftungSlot[] {
  return defs.map(d => ({
    label: d.label,
    x: d.x + 3,
    y: d.y + 3,
    w: d.w - 6,
    h: d.sub ? 22 : d.h - 6,
    gruppe,
  }))
}

/** Eine beschriftbare Abbildung: volle + leere Variante + Slots fürs Quiz. */
export interface BeschriftungsBild {
  /** Kurzname der Abbildung (für den Fragetext). */
  name: string
  /** Abschnitt-Titel (= Schlüssel in themenBilder) für die Quellenangabe. */
  abschnitt: string
  seite: number
  erklaerung: string
  /** Vollständige Abbildung (Lösung nach dem Beantworten). */
  bild: ReactNode
  /** Leere Variante (Kästen ohne die gesuchten Begriffe). */
  bildLeer: ReactNode
  viewBoxW: number
  viewBoxH: number
  maxWidth?: number
  slots: BeschriftungSlot[]
}

/** Neutrales aria-Label der leeren Quiz-Variante (verrät die Lösung nicht). */
export const LEER_ARIA = 'Abbildung mit leeren Kästen zum Beschriften'

// --- Gemeinsamer Tabellen-Stil (Betriebstypologien, Folie 18) ---------------

export const tdStyle: React.CSSProperties = {
  border: '1px solid var(--border2)',
  padding: '0.4rem 0.6rem',
  verticalAlign: 'top',
  textAlign: 'left',
}

export const thStyle: React.CSSProperties = {
  ...tdStyle,
  background: 'var(--bg3)',
  color: 'var(--text)',
  fontWeight: 600,
}

// --- Abbildungen als statische ReactNode-Konstanten -------------------------

/** Baum der Wirtschaftseinheiten (Folie 16). */
const weBoxen: QuizBoxDef[] = [
  { x: 40, y: 80, w: 160, h: 36, label: 'Betriebe', key: 'be', sub: 'Fremdbedarfsdeckung' },
  { x: 280, y: 80, w: 160, h: 36, label: 'Haushalte', key: 'hh', sub: 'privat / staatlich' },
  { x: 10, y: 156, w: 110, h: 40, label: 'Unternehmungen', key: 'un' },
  { x: 140, y: 156, w: 150, h: 40, label: 'Öffentliche Betriebe', key: 'ob', sub: 'und Verwaltungen' },
]
const wirtschaftseinheitenBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 460 240"
    width="100%"
    style={leer ? undefined : { maxWidth: 500 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Baum der Wirtschaftseinheiten: Betriebe (Fremdbedarfsdeckung, Orte der Leistungserstellung) gliedern sich in Unternehmungen sowie öffentliche Betriebe und Verwaltungen; Haushalte sind privat oder staatlich'
    }
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M230 40 L120 80" />
      <path d="M230 40 L340 80" />
      <path d="M120 116 L70 156" />
      <path d="M120 116 L200 156" />
    </g>
    {svgBox(150, 10, 160, 30, 'Wirtschaftseinheiten', 'root')}
    {quizBoxen(weBoxen, leer)}
    <text x="455" y="180" textAnchor="end" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      * Betriebe =
    </text>
    <text x="455" y="194" textAnchor="end" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      „Orte der Leistungserstellung"
    </text>
  </svg>
)
const wirtschaftseinheiten = wirtschaftseinheitenBau(false)
const wirtschaftseinheitenLeer = wirtschaftseinheitenBau(true)

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
const bwlBoxen: QuizBoxDef[] = [
  { x: 160, y: 32, w: 110, h: 36, label: 'ABWL', key: 'abwl', sub: 'nach Funktion' },
  { x: 160, y: 112, w: 110, h: 36, label: 'Spez. BWL', key: 'spez', sub: 'nach Objekt' },
]
const gliederungBWLBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 480 230"
    width="100%"
    style={leer ? undefined : { maxWidth: 520 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Gliederung der BWL: Die BWL teilt sich in ABWL (nach Funktion: Beschaffung, Produktion, Absatz, Finanzierung, Personal) und Spezielle BWL (nach Objekt: Industrie, Handel, Banken, Versicherungen)'
    }
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M70 70 L70 50 L160 50" />
      <path d="M70 70 L70 130 L160 130" />
      <path d="M270 50 L320 50" />
      <path d="M270 130 L320 130" />
    </g>
    {svgBox(20, 56, 50, 36, 'BWL', 'bwl')}
    {quizBoxen(bwlBoxen, leer)}
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
const gliederungBWL = gliederungBWLBau(false)
const gliederungBWLLeer = gliederungBWLBau(true)

/** Handelsbilanz als Tabelle – HGB-Gliederung Aktiv-/Passivseite (Folie 40). */
export const bilanzListenStyle = { margin: '0.25rem 0 0.6rem', paddingLeft: '1.1rem' } as const
const handelsbilanz: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Die Handelsbilanz – Aufbau nach HGB
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Aktivseite (Mittelverwendung)</th>
        <th scope="col" style={thStyle}>Passivseite (Mittelherkunft)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ ...tdStyle, verticalAlign: 'top' }}>
          <strong>A. Anlagevermögen</strong>
          <ul style={bilanzListenStyle}>
            <li>I. Immaterielle Vermögensgegenstände</li>
            <li>II. Sachanlagen</li>
            <li>III. Finanzanlagen</li>
          </ul>
          <strong>B. Umlaufvermögen</strong>
          <ul style={bilanzListenStyle}>
            <li>I. Vorräte</li>
            <li>II. Forderungen und sonstige Vermögensgegenstände</li>
            <li>III. Wertpapiere</li>
            <li>IV. Kassenbestand, Bankguthaben</li>
          </ul>
          <strong>C. Rechnungsabgrenzungsposten</strong>
        </td>
        <td style={{ ...tdStyle, verticalAlign: 'top' }}>
          <strong>A. Eigenkapital</strong>
          <ul style={bilanzListenStyle}>
            <li>Gezeichnetes Kapital, Rücklagen</li>
            <li>Gewinn-/Verlustvortrag</li>
            <li>Jahresüberschuss / Jahresfehlbetrag (aus GuV)</li>
          </ul>
          <strong>B. Rückstellungen</strong>
          <ul style={bilanzListenStyle}>
            <li>z. B. Pensions-, Steuerrückstellungen</li>
          </ul>
          <strong>C. Verbindlichkeiten (Fremdkapital)</strong>
          <ul style={bilanzListenStyle}>
            <li>z. B. Bankkredite, Lieferantenverbindlichkeiten</li>
          </ul>
          <strong>D. Rechnungsabgrenzungsposten</strong>
        </td>
      </tr>
    </tbody>
  </table>
)

/** Übersicht der Rechtsformen nach Träger (Folie 45). */
const rechtsformenUebersicht: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Rechtsform = rechtlicher Rahmen / „Rechtskleid" – gegliedert nach dem Träger
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Privatrechtlich</th>
        <th scope="col" style={thStyle}>Öffentlich-rechtlich</th>
        <th scope="col" style={thStyle}>Mischformen &amp; Sonstige</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={tdStyle}>
          <strong>Einzelunternehmung</strong>
          <div style={{ marginTop: '0.45rem' }}>
            <strong>Personengesellschaften:</strong>
            <ul style={bilanzListenStyle}>
              <li>GbR (Gesellschaft bürgerl. Rechts)</li>
              <li>oHG (Offene Handelsgesellschaft)</li>
              <li>KG (Kommanditgesellschaft)</li>
              <li>Stille Gesellschaft</li>
            </ul>
          </div>
          <div style={{ marginTop: '0.2rem' }}>
            <strong>Kapitalgesellschaften:</strong>
            <ul style={bilanzListenStyle}>
              <li>AG (Aktiengesellschaft)</li>
              <li>GmbH (Ges. m. beschr. Haftung)</li>
              <li>UG (haftungsbeschränkt)</li>
              <li>KGaA (KG auf Aktien)</li>
            </ul>
          </div>
          <div style={{ marginTop: '0.2rem' }}>eingetragene Genossenschaft (eG)</div>
        </td>
        <td style={tdStyle}>
          <strong>Ohne eigene Rechtspersönlichkeit:</strong>
          <ul style={bilanzListenStyle}>
            <li>Regiebetriebe</li>
            <li>Eigenbetriebe</li>
            <li>Sondervermögen</li>
          </ul>
          <div style={{ marginTop: '0.2rem' }}>
            <strong>Mit eigener Rechtspersönlichkeit:</strong>
            <ul style={bilanzListenStyle}>
              <li>Körperschaften des öffentl. Rechts</li>
              <li>Anstalten des öffentl. Rechts</li>
              <li>Stiftungen des öffentl. Rechts</li>
            </ul>
          </div>
        </td>
        <td style={tdStyle}>
          <ul style={bilanzListenStyle}>
            <li>GmbH &amp; Co. KG</li>
            <li>Bergrechtliche Gewerkschaft</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

/** Mitwirkungs- und Mitbestimmungsrechte des Betriebsrats (Folie 48). */
const mitwirkungMitbestimmung: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Arbeitsrechtliche Mitbestimmung – geregelt im BetrVG (1952 / 1972). Betrifft Unternehmen ab
      &gt; 500 (bzw. 5) Mitarbeitern; der Betriebsrat hat bei sozialen &amp; arbeitsrechtlichen
      Angelegenheiten ein Mitspracherecht.
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Mitwirkungsrechte</th>
        <th scope="col" style={thStyle}>Mitbestimmungsrechte</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={tdStyle}>
          Recht
          <ul style={bilanzListenStyle}>
            <li>auf Information</li>
            <li>auf Anhörung</li>
            <li>auf Beratung u. Verhandlung</li>
            <li>auf Widerspruch</li>
          </ul>
        </td>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>Anspruch auf Aufhebung</li>
            <li>Zustimmungs- und Vetorecht</li>
            <li>Initiativrechte</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

/**
 * Organe einer Kapitalgesellschaft (Folie 51).
 * Drei Organe nebeneinander, je als Dreieck/Pyramide mit Rechteck (Zusammensetzung)
 * darunter. Beziehungen: „Bestellung" der Organe (oben) sowie „Wahl" – der Vorstand
 * wählt die AN-Vertretung im AR, die HV wählt die AG-/Anteilseignerseite.
 */
const organDreieck = (
  cx: number,
  topY: number,
  label: string,
  rolle: string,
  key: string,
  ohneLabel?: boolean,
): ReactNode => (
  <g key={key}>
    <polygon
      points={`${cx},${topY} ${cx - 42},${topY + 44} ${cx + 42},${topY + 44}`}
      fill="var(--blue-dim)"
      stroke="var(--blue)"
      strokeWidth="1.5"
    />
    {!ohneLabel && (
      <text x={cx} y={topY + 34} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">
        {label}
      </text>
    )}
    <text x={cx} y={topY + 58} textAnchor="middle" fontSize="9.5" fill="var(--text3)">
      {rolle}
    </text>
  </g>
)

const organeBoxen: QuizBoxDef[] = [
  { x: 20, y: 118, w: 140, h: 60, label: 'Personal', key: 'voBox', sub: 'führt die Geschäfte' },
  { x: 195, y: 118, w: 170, h: 60, label: 'Aufsichtsrat', key: 'arBox', sub: 'AN-Vertreter (+ Gew.) · AG-Vertreter' },
  { x: 400, y: 118, w: 140, h: 60, label: 'Gesellschafter', key: 'hvBox', sub: 'als Kapitalgeber' },
]
const organeDreiecke = [
  { cx: 90, label: 'VO/GF', rolle: 'Leitendes Organ', key: 'vo' },
  { cx: 280, label: 'AR', rolle: 'Überwachendes Organ', key: 'ar' },
  { cx: 470, label: 'HV/GV', rolle: 'Beschließendes Organ', key: 'hv' },
]
const mitbestimmungOrganeBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 560 300"
    width="100%"
    style={leer ? undefined : { maxWidth: 600 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Organe einer Kapitalgesellschaft, je als Dreieck mit Rechteck der Zusammensetzung: Vorstand/Geschäftsführung (VO/GF) führt mit dem Personal die Geschäfte; der Aufsichtsrat (AR) aus Arbeitnehmer- (plus Gewerkschafts-) und Arbeitgebervertretern kontrolliert den Vorstand; die Haupt- bzw. Gesellschafterversammlung (HV/GV) sind die Gesellschafter als Kapitalgeber. Oben werden die Organe bestellt; der Vorstand wählt die Arbeitnehmervertretung im Aufsichtsrat, die Hauptversammlung wählt die Arbeitgeber-/Anteilseignerseite'
    }
  >
    {/* „Bestellung" – Klammer über allen Organen */}
    <g stroke="var(--text3)" strokeWidth="1.3" fill="none">
      <path d="M90 26 L470 26" />
      <path d="M90 26 L90 40" markerEnd="url(#pfeilDown)" />
      <path d="M280 26 L280 40" markerEnd="url(#pfeilDown)" />
      <path d="M470 26 L470 40" markerEnd="url(#pfeilDown)" />
    </g>
    <text x="280" y="18" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text2)">
      Bestellung
    </text>

    {/* Drei Organe als Dreiecke */}
    {organeDreiecke.map(d => organDreieck(d.cx, 44, d.label, d.rolle, d.key, leer))}

    {/* Rechtecke mit Zusammensetzung */}
    {quizBoxen(organeBoxen, leer)}

    {/* AR kontrolliert VO */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M195 138 L160 138" markerEnd="url(#pfeil)" />
    </g>
    <text x="178" y="130" textAnchor="middle" fontSize="9" fill="var(--text3)">
      kontrolliert
    </text>

    {/* Wahl: Vorstand → AN-Vertreter im AR */}
    <g stroke="var(--green)" strokeWidth="1.5" fill="none">
      <path d="M90 178 L90 220 L255 220 L255 180" markerEnd="url(#pfeilGreen)" />
    </g>
    <text x="150" y="236" textAnchor="middle" fontSize="9.5" fill="var(--green)">
      Wahl: Vorstand wählt AN-Vertretung
    </text>

    {/* Wahl: HV → AG-/Anteilseignerseite im AR */}
    <g stroke="var(--amber)" strokeWidth="1.5" fill="none">
      <path d="M470 178 L470 262 L305 262 L305 180" markerEnd="url(#pfeilAmber)" />
    </g>
    <text x="388" y="278" textAnchor="middle" fontSize="9.5" fill="var(--amber)">
      Wahl: HV wählt AG-/Anteilseignerseite
    </text>

    <defs>
      <marker id="pfeil" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
      <marker id="pfeilDown" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto">
        <path d="M0 0 L6 0 L3 6 z" fill="var(--text3)" />
      </marker>
      <marker id="pfeilGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--green)" />
      </marker>
      <marker id="pfeilAmber" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--amber)" />
      </marker>
    </defs>
  </svg>
)
const mitbestimmungOrgane = mitbestimmungOrganeBau(false)
const mitbestimmungOrganeLeer = mitbestimmungOrganeBau(true)

/** Zielpyramide (Folie 56). */
const zielpyramideStufen = [
  { y: 20, w: 70, label: 'Vision / Mission' },
  { y: 60, w: 130, label: 'Unternehmensleitbild' },
  { y: 100, w: 190, label: 'Unternehmensziele' },
  { y: 140, w: 250, label: 'Geschäftsbereichsziele' },
  { y: 180, w: 310, label: 'Funktionsbereichsziele' },
]
const zielpyramideBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 350 250"
    width="100%"
    style={leer ? undefined : { maxWidth: 400 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Zielpyramide: von der Vision bzw. Mission an der Spitze (qualitativ) über Unternehmensleitbild, Unternehmensziele und Geschäftsbereichsziele bis zu den Funktionsbereichszielen an der Basis (zunehmend quantitativ)'
    }
  >
    {pyramide(zielpyramideStufen, 36, 'var(--green-dim)', 'var(--green)')}
    {!leer && (
      <g fontSize="11" fill="var(--text)" textAnchor="middle">
        {zielpyramideStufen.map(s => (
          <text key={s.label} x={PYRAMID_CX} y={s.y + 24}>{s.label}</text>
        ))}
      </g>
    )}
    <g fontSize="9.5" fill="var(--text3)">
      <text x="6" y="34">qualitativ</text>
      <text x="262" y="224">quantitativ</text>
    </g>
  </svg>
)
const zielpyramide = zielpyramideBau(false)
const zielpyramideLeer = zielpyramideBau(true)
const zielpyramideSlots: BeschriftungSlot[] = zielpyramideStufen.map(s => {
  const w = Math.max(s.w - 4, 150)
  return { label: s.label, x: PYRAMID_CX - w / 2, y: s.y + 8, w, h: 24 }
})

/** Ökonomische Zielkonzeption – Leistungs-, Erfolgs- und Finanzziele (Folie 67). */
const oekonomischeZiele: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Ökonomische Zielkonzeption = Gesamtheit der ökonomischen Ziele einer Unternehmung
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Leistungsziele</th>
        <th scope="col" style={thStyle}>Erfolgsziele</th>
        <th scope="col" style={thStyle}>Finanzziele</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>Produktions- und Absatzmengen</li>
            <li>Absatzwege</li>
            <li>Marktanteil</li>
            <li>Produktions- und Lagerkapazitäten</li>
            <li>Sortimentsziele</li>
          </ul>
        </td>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>Gewinn / Rentabilität</li>
            <li>Dividenden</li>
            <li>Kostenstruktur</li>
            <li>Umsatzvolumen</li>
          </ul>
        </td>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>Zahlungsfähigkeit / Liquidität</li>
            <li>Liquiditätsreserve</li>
            <li>Finanzielle Struktur</li>
            <li>Investitionsprogramm</li>
            <li>Finanzierungsprogramm</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

/** Nachhaltigkeits-/Zieldreieck Ökonomie · Ökologie · soziale Bedürfnisse (Folie 66). */
const zieldreieckBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 360 250"
    width="100%"
    style={leer ? undefined : { maxWidth: 420 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Zieldreieck der Nachhaltigkeit mit den drei Dimensionen Ökonomie an der Spitze sowie Ökologie und soziale Bedürfnisse an der Basis; zwischen ihnen können Zielkonflikte entstehen'
    }
  >
    <polygon
      points="180,30 330,210 30,210"
      fill="var(--green-dim)"
      stroke="var(--green)"
      strokeWidth="2"
    />
    {!leer && (
      <>
        <text x="180" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
          Ökonomie
        </text>
        <text x="22" y="232" textAnchor="start" fontSize="14" fontWeight="700" fill="var(--text)">
          Ökologie
        </text>
        <text x="338" y="232" textAnchor="end" fontSize="14" fontWeight="700" fill="var(--text)">
          Soziale Bedürfnisse
        </text>
      </>
    )}
    <text x="180" y="135" textAnchor="middle" fontSize="10.5" fill="var(--text2)">
      Zielkonflikte
    </text>
  </svg>
)
const zieldreieck = zieldreieckBau(false)
const zieldreieckLeer = zieldreieckBau(true)
const zieldreieckSlots: BeschriftungSlot[] = [
  { label: 'Ökonomie', x: 125, y: 4, w: 110, h: 24, gruppe: 'dim' },
  { label: 'Ökologie', x: 12, y: 216, w: 100, h: 26, gruppe: 'dim' },
  { label: 'Soziale Bedürfnisse', x: 200, y: 216, w: 148, h: 26, gruppe: 'dim' },
]

/**
 * Entstehungsmodell der Unternehmensziele (Folie 60).
 * Maslow-Motive-Pyramide PLUS die Kästchen-Kette: Motive → Werthaltungen →
 * Existenzbedingungen der Unternehmung → Unternehmensphilosophie u. -kultur →
 * Unternehmensziele.
 */
const maslowStufen = [
  { y: 58, label: 'Selbstverwirklichung' },
  { y: 96, label: 'Wertschätzung' },
  { y: 140, label: 'Soziale Bedürfnisse' },
  { y: 184, label: 'Sicherheit' },
  { y: 228, label: 'Physiologische Bedürfnisse' },
]
const beduerfnisPyramideBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 680 500"
    width="100%"
    style={leer ? undefined : { maxWidth: 660 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Entstehungsmodell der Unternehmensziele: Die Motive menschlichen Verhaltens nach Maslow (Pyramide von physiologischen Bedürfnissen über Sicherheit, soziale Bedürfnisse und Wertschätzung bis zur Selbstverwirklichung) und die Werthaltungen der maßgeblichen Unternehmensträger führen zu den Ansprüchen der unmittelbaren Unternehmensträger und der Marktpartner an die Unternehmung, zu den Existenzbedingungen der Unternehmung als Institution und zur Unternehmensphilosophie und -kultur und schließlich zu den Unternehmenszielen'
    }
  >
    <defs>
      <marker id="pf60" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--text2)" />
      </marker>
    </defs>

    {/* Maslow-Pyramide (Motive) */}
    <polygon points="340,26 500,246 180,246" fill="var(--blue-dim)" stroke="var(--blue)" strokeWidth="1.5" />
    <g stroke="var(--blue)" strokeWidth="1">
      <line x1="308" y1="70" x2="372" y2="70" />
      <line x1="276" y1="114" x2="404" y2="114" />
      <line x1="244" y1="158" x2="436" y2="158" />
      <line x1="212" y1="202" x2="468" y2="202" />
    </g>
    {!leer && (
      <g fontSize="11" fill="var(--text)" textAnchor="middle">
        {maslowStufen.map(s => (
          <text key={s.label} x="340" y={s.y}>{s.label}</text>
        ))}
      </g>
    )}

    {/* Seitliche Kästen */}
    <rect x="8" y="44" width="150" height="82" rx="5" fill="var(--bg2)" stroke="var(--red)" strokeWidth="1.5" />
    <g fontSize="11" fill="var(--text)">
      <text x="18" y="66">Motive</text>
      <text x="18" y="82">menschlichen</text>
      <text x="18" y="98">Verhaltens</text>
      <text x="18" y="114">(nach Maslow)</text>
    </g>
    <rect x="512" y="46" width="160" height="72" rx="5" fill="var(--bg2)" stroke="var(--text2)" strokeWidth="1.5" />
    <g fontSize="11" fill="var(--text)">
      <text x="522" y="68">Werthaltungen der</text>
      <text x="522" y="86">maßgeblichen</text>
      <text x="522" y="104">Unternehmensträger</text>
    </g>

    {/* Anspruchs-/Existenz-Kette */}
    {svgBox(95, 268, 490, 30, 'Ansprüche der – unmittelbaren – Unternehmensträger an die Unternehmung', 'a')}
    {svgBox(150, 312, 430, 30, 'Ansprüche der Marktpartner, sozialer Gruppen, der Gesellschaft', 'b')}
    {svgBox(150, 356, 380, 30, 'Existenzbedingungen der Unternehmung als Institution', 'c')}
    {svgBox(330, 400, 250, 30, 'Unternehmensphilosophie u. -kultur', 'd')}
    <rect x="95" y="446" width="180" height="34" rx="5" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="2" />
    <text x="185" y="468" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Unternehmensziele
    </text>

    {/* Verbindungen / Pfeile */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      {/* Pyramide nach unten in die Kette */}
      <path d="M340 248 L340 266" markerEnd="url(#pf60)" />
      {/* linke Spine: A hinunter bis zu den Unternehmenszielen, B/C speisen sie */}
      <path d="M78 283 L78 463" />
      <path d="M95 283 L78 283" />
      <path d="M150 327 L82 327" markerEnd="url(#pf60)" />
      <path d="M150 371 L82 371" markerEnd="url(#pf60)" />
      <path d="M78 463 L93 463" markerEnd="url(#pf60)" />
      {/* Ansprüche/Existenzbedingungen nach rechts ... */}
      <path d="M585 283 L648 283" markerEnd="url(#pf60)" />
      <path d="M580 327 L648 327" markerEnd="url(#pf60)" />
      <path d="M530 371 L648 371" markerEnd="url(#pf60)" />
      {/* ... rechte Sammel-Linie hinunter in die Unternehmensphilosophie */}
      <path d="M650 283 L650 415" />
      <path d="M650 415 L582 415" markerEnd="url(#pf60)" />
      {/* Unternehmensphilosophie nach links in die Unternehmensziele */}
      <path d="M330 415 L292 415 L292 463 L277 463" markerEnd="url(#pf60)" />
    </g>
  </svg>
)
const beduerfnisPyramide = beduerfnisPyramideBau(false)
const beduerfnisPyramideLeer = beduerfnisPyramideBau(true)
const beduerfnisPyramideSlots: BeschriftungSlot[] = maslowStufen.map(s => ({
  label: s.label,
  x: 255,
  y: s.y - 15,
  w: 170,
  h: 21,
}))

// --- Export -----------------------------------------------------------------

export const baseBilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  '1.3 Wirtschaftseinheiten': [{ bild: wirtschaftseinheiten, seite: 16 }],
  '1.4 Betriebstypologien': [{ bild: betriebstypologien, seite: 18 }],
  '1.5 Gliederung der BWL': [{ bild: gliederungBWL, seite: 22 }],
  '3.1 Jahresabschluss': [{ bild: handelsbilanz, seite: 40 }],
  'Privatrechtliche Rechtsformen': [{ bild: rechtsformenUebersicht, seite: 45 }],
  'Mitbestimmung – die deutsche „Spielart"': [
    { bild: mitwirkungMitbestimmung, seite: 48 },
    { bild: mitbestimmungOrgane, seite: 51 },
  ],
  '5.1 Grundlagen': [
    { bild: zielpyramide, seite: 56 },
    { bild: oekonomischeZiele, seite: 67 },
  ],
  '5.3 Ein Entstehungsmodell': [{ bild: beduerfnisPyramide, seite: 60 }],
  '5.4 Zielkonflikte': [{ bild: zieldreieck, seite: 66 }],
}

// Beschriftungs-Quiz-Daten der Basis-Figuren (SVGs; Tabellen sind ungeeignet).
export const baseBeschriftungen: BeschriftungsBild[] = [
  {
    name: 'Baum der Wirtschaftseinheiten',
    abschnitt: '1.3 Wirtschaftseinheiten',
    seite: 16,
    erklaerung:
      'Wirtschaftseinheiten gliedern sich in Betriebe (Fremdbedarfsdeckung) und Haushalte (privat/staatlich); Betriebe wiederum in Unternehmungen sowie öffentliche Betriebe und Verwaltungen.',
    bild: wirtschaftseinheiten,
    bildLeer: wirtschaftseinheitenLeer,
    viewBoxW: 460,
    viewBoxH: 240,
    maxWidth: 500,
    slots: boxSlots(weBoxen),
  },
  {
    name: 'Gliederung der BWL',
    abschnitt: '1.5 Gliederung der BWL',
    seite: 22,
    erklaerung:
      'Die BWL teilt sich in die ABWL (nach Funktionen wie Beschaffung, Produktion, Absatz) und die Spezielle BWL (nach Objekten wie Industrie, Handel, Banken).',
    bild: gliederungBWL,
    bildLeer: gliederungBWLLeer,
    viewBoxW: 480,
    viewBoxH: 230,
    maxWidth: 520,
    slots: boxSlots(bwlBoxen),
  },
  {
    name: 'Organe einer Kapitalgesellschaft',
    abschnitt: 'Mitbestimmung – die deutsche „Spielart"',
    seite: 51,
    erklaerung:
      'VO/GF (leitendes Organ) führt mit dem Personal die Geschäfte, der AR (überwachendes Organ) aus AN- und AG-Vertretern kontrolliert den Vorstand, die HV/GV (beschließendes Organ) sind die Gesellschafter als Kapitalgeber.',
    bild: mitbestimmungOrgane,
    bildLeer: mitbestimmungOrganeLeer,
    viewBoxW: 560,
    viewBoxH: 300,
    maxWidth: 600,
    slots: [
      ...organeDreiecke.map(d => ({ label: d.label, x: d.cx - 45, y: 60, w: 90, h: 22 })),
      ...boxSlots(organeBoxen),
    ],
  },
  {
    name: 'Zielpyramide',
    abschnitt: '5.1 Grundlagen',
    seite: 56,
    erklaerung:
      'Von oben (qualitativ) nach unten (quantitativ): Vision/Mission → Unternehmensleitbild → Unternehmensziele → Geschäftsbereichsziele → Funktionsbereichsziele.',
    bild: zielpyramide,
    bildLeer: zielpyramideLeer,
    viewBoxW: 350,
    viewBoxH: 250,
    maxWidth: 400,
    slots: zielpyramideSlots,
  },
  {
    name: 'Zieldreieck der Nachhaltigkeit',
    abschnitt: '5.4 Zielkonflikte',
    seite: 66,
    erklaerung:
      'Die drei Dimensionen der Nachhaltigkeit – Ökonomie, Ökologie und soziale Bedürfnisse – stehen in einem Spannungsverhältnis; zwischen ihnen können Zielkonflikte entstehen.',
    bild: zieldreieck,
    bildLeer: zieldreieckLeer,
    viewBoxW: 360,
    viewBoxH: 250,
    maxWidth: 420,
    slots: zieldreieckSlots,
  },
  {
    name: 'Bedürfnispyramide nach Maslow (Entstehungsmodell)',
    abschnitt: '5.3 Ein Entstehungsmodell',
    seite: 60,
    erklaerung:
      'Die Maslow-Pyramide von unten nach oben: Physiologische Bedürfnisse → Sicherheit → Soziale Bedürfnisse → Wertschätzung → Selbstverwirklichung. Sie bildet die Motive menschlichen Verhaltens im Entstehungsmodell der Unternehmensziele.',
    bild: beduerfnisPyramide,
    bildLeer: beduerfnisPyramideLeer,
    viewBoxW: 680,
    viewBoxH: 500,
    maxWidth: 660,
    slots: beduerfnisPyramideSlots,
  },
]
