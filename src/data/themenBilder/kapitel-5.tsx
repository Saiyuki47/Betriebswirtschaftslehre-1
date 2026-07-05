import type { ReactNode } from 'react'
import type { BeschriftungSlot } from 'lernseiten-ui'
import {
  baseBilder,
  svgBox,
  quizBoxen,
  boxSlots,
  tdStyle,
  thStyle,
  LEER_ARIA,
  type QuizBoxDef,
  type BeschriftungsBild,
} from './_base'

// Abbildungen für Kapitel 5 (Ziele im Unternehmen). Schlüssel = exakter
// `abschnitt.titel` aus themen/kapitel-5.ts. Nachgebaut aus dem Foliensatz
// PP-Folien_BWL_2025.pdf (Seiten 55–72) – reines Inline-SVG bzw. schlichte
// HTML-Tabellen, KEINE Screenshots. Figuren sind statische ReactNode-Konstanten
// auf Modulebene (keine React-Komponenten); SVG-Figuren als Builder
// `(leer: boolean) => ReactNode` mit voller + leerer Quiz-Variante (siehe _base.tsx).
//
// Wichtig: Die Basis-Datei (_base.tsx) liefert bereits Figuren für die
// Schlüssel '5.1 Grundlagen', '5.3 Ein Entstehungsmodell' und
// '5.4 Zielkonflikte'. Da diese Map in themenBilder/index.ts NACH baseBilder
// gespreadet wird, würde eine erneute Zuweisung desselben Schlüssels die
// Basis-Figuren überschreiben. Deshalb werden die vorhandenen Basis-Einträge
// über `baseBilder[key]` vorangestellt und die neuen Figuren nur angehängt.

// --- 5.1: Kennzeichen eines Zieles / Zieldimensionen (Folie 55) -------------

/** Die vier Kennzeichen eines Zieles + Attraktivität/Realismus → SMART. */
const dimensionBoxen: QuizBoxDef[] = [
  { x: 12, y: 70, w: 116, h: 58, label: 'Zielinhalt', key: 'k1', sub: 'Was?' },
  { x: 140, y: 70, w: 86, h: 58, label: 'Zielausmaß', key: 'k2', sub: 'Wie viel?' },
  { x: 238, y: 70, w: 118, h: 58, label: 'Zeitl. Bezug', key: 'k3', sub: 'Bis wann?' },
  { x: 368, y: 70, w: 100, h: 58, label: 'Sachl. Bereich', key: 'k4', sub: 'Für wen?' },
]
const zieldimensionenBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 480 250"
    width="100%"
    style={leer ? undefined : { maxWidth: 520 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Kennzeichen eines Zieles: die vier Dimensionen Zielinhalt (was), Zielausmaß (wie viel), zeitlicher Bezug (bis wann) und sachlicher Geltungsbereich (für wen), ergänzt um Attraktivität und Realismus, führen zur Merkregel SMART'
    }
  >
    {svgBox(160, 8, 160, 30, 'Kennzeichen eines Zieles', 'root')}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M240 38 L240 52 L70 52 L70 70" />
      <path d="M240 52 L183 52 L183 70" />
      <path d="M240 52 L297 52 L297 70" />
      <path d="M240 52 L410 52 L410 70" />
    </g>
    {quizBoxen(dimensionBoxen, leer)}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M70 128 L70 150 L240 150 L240 164" />
      <path d="M410 128 L410 150 L240 150" />
    </g>
    <rect x="70" y="164" width="340" height="34" rx="6" fill="var(--bg2)" stroke="var(--green)" strokeWidth="1.5" />
    <text x="240" y="185" textAnchor="middle" fontSize="10.5" fill="var(--text)">
      + Attraktivität + Realismus
    </text>
    <g stroke="var(--green)" strokeWidth="1.6" fill="none">
      <path d="M240 198 L240 214" markerEnd="url(#pf55)" />
    </g>
    <rect x="185" y="214" width="110" height="30" rx="6" fill="var(--green-dim)" stroke="var(--green)" strokeWidth="2" />
    {!leer && (
      <text x="240" y="234" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">
        SMART
      </text>
    )}
    <defs>
      <marker id="pf55" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--green)" />
      </marker>
    </defs>
  </svg>
)
const zieldimensionen = zieldimensionenBau(false)
const zieldimensionenLeer = zieldimensionenBau(true)
const zieldimensionenSlots: BeschriftungSlot[] = [
  ...boxSlots(dimensionBoxen),
  { label: 'SMART', x: 188, y: 217, w: 104, h: 24 },
]

/** Zielsystem / Zielhierarchie: Ober-, Zwischen-, Unterziele (Zweck-Mittel). */
const hierarchieEbenen = [
  { y: 42, label: 'Oberziel' },
  { y: 122, label: 'Zwischenziele' },
  { y: 202, label: 'Unterziele' },
]
const zielhierarchieBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 480 250"
    width="100%"
    style={leer ? undefined : { maxWidth: 520 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Zielhierarchie eines Zielsystems: ein Oberziel (z. B. Gewinn) wird über Zwischenziele (Umsatz steigern, Kosten senken) zu konkreten Unterzielen heruntergebrochen; von unten nach oben besteht eine Zweck-Mittel-Beziehung, die Unterziele sind Mittel zum Oberziel'
    }
  >
    {/* Ober-/Zwischen-/Unterziel-Etiketten links */}
    {!leer && (
      <g fontSize="10" fill="var(--text3)" textAnchor="start">
        {hierarchieEbenen.map(e => (
          <text key={e.label} x="6" y={e.y}>{e.label}</text>
        ))}
      </g>
    )}
    {/* Verbindungen */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M240 54 L150 92" />
      <path d="M240 54 L330 92" />
      <path d="M150 128 L95 172" />
      <path d="M150 128 L205 172" />
      <path d="M330 128 L385 172" />
    </g>
    {svgBox(175, 24, 130, 30, 'Gewinn', 'o', '(Oberziel)')}
    {svgBox(95, 92, 110, 36, 'Umsatz steigern', 'z1')}
    {svgBox(275, 92, 110, 36, 'Kosten senken', 'z2')}
    {svgBox(40, 172, 110, 40, 'Marktanteil +', 'u1')}
    {svgBox(160, 172, 110, 40, 'neue Kunden', 'u2')}
    {svgBox(330, 172, 120, 40, 'Material günstiger', 'u3')}
    {/* Zweck-Mittel-Pfeil nach oben */}
    <g stroke="var(--blue)" strokeWidth="1.4" fill="none">
      <path d="M456 200 L456 40" markerEnd="url(#pfUp5)" />
    </g>
    <text x="450" y="126" textAnchor="middle" fontSize="9.5" fill="var(--blue)" transform="rotate(-90 450 126)">
      Zweck-Mittel
    </text>
    <defs>
      <marker id="pfUp5" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto">
        <path d="M0 6 L4 0 L8 6 z" fill="var(--blue)" />
      </marker>
    </defs>
  </svg>
)
const zielhierarchie = zielhierarchieBau(false)
const zielhierarchieLeer = zielhierarchieBau(true)
const zielhierarchieSlots: BeschriftungSlot[] = hierarchieEbenen.map(e => ({
  label: e.label,
  x: 2,
  y: e.y - 13,
  w: 88,
  h: 18,
}))

// --- 5.2: Empirische Thesen – Zielbildung als Prozess + Anreiz-Beitrag ------

/** Zielbildung als multipersoneller Aushandelprozess (Thesen 1–3, Folie 59). */
const anspruchsgruppenBoxen: QuizBoxDef[] = [
  { x: 8, y: 14, w: 120, h: 26, label: 'Eigentümer', key: 'g1' },
  { x: 8, y: 48, w: 120, h: 26, label: 'Management', key: 'g2' },
  { x: 8, y: 82, w: 120, h: 26, label: 'Arbeitnehmer', key: 'g3' },
  { x: 8, y: 116, w: 120, h: 26, label: 'Staat', key: 'g4' },
  { x: 8, y: 150, w: 120, h: 26, label: 'weitere …', key: 'g5' },
]
const zielbildungProzessBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 500 210"
    width="100%"
    style={leer ? undefined : { maxWidth: 540 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Zielbildung als Aushandelprozess: Anspruchsgruppen mit unterschiedlicher Macht (Eigentümer, Management, Arbeitnehmer, Staat, weitere) bringen Interessen in einen Entscheidungs- und Aushandelprozess ein; Ergebnis ist ein abgestimmtes Zielsystem, Zielkonflikte werden durch Priorisierung geklärt'
    }
  >
    {/* Anspruchsgruppen links */}
    {quizBoxen(anspruchsgruppenBoxen, leer)}
    <text x="68" y="196" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
      unterschiedliche Macht
    </text>
    {/* Pfeile in den Prozess */}
    <g stroke="var(--text2)" strokeWidth="1.4" fill="none">
      <path d="M128 27 L188 80" markerEnd="url(#pf59)" />
      <path d="M128 61 L188 88" markerEnd="url(#pf59)" />
      <path d="M128 95 L188 96" markerEnd="url(#pf59)" />
      <path d="M128 129 L188 104" markerEnd="url(#pf59)" />
      <path d="M128 163 L188 112" markerEnd="url(#pf59)" />
    </g>
    {/* Prozess-Kreis */}
    <ellipse cx="270" cy="96" rx="80" ry="58" fill="var(--blue-dim)" stroke="var(--blue)" strokeWidth="1.5" />
    <g fontSize="11" fill="var(--text)" textAnchor="middle">
      <text x="270" y="86">Entscheidungs-</text>
      <text x="270" y="102">u. Aushandel-</text>
      <text x="270" y="118">prozess</text>
    </g>
    {/* Pfeil zum Ergebnis */}
    <g stroke="var(--green)" strokeWidth="1.6" fill="none">
      <path d="M350 96 L392 96" markerEnd="url(#pf59g)" />
    </g>
    {/* Ergebnis */}
    <rect x="392" y="64" width="100" height="64" rx="6" fill="var(--bg2)" stroke="var(--green)" strokeWidth="2" />
    <g fontSize="11" fill="var(--text)" textAnchor="middle">
      {!leer && (
        <text x="442" y="88" fontWeight="700">Zielsystem</text>
      )}
      <text x="442" y="106" fontSize="9.5" fill="var(--text2)">abgestimmte</text>
      <text x="442" y="119" fontSize="9.5" fill="var(--text2)">Ziele</text>
    </g>
    <defs>
      <marker id="pf59" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
      <marker id="pf59g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--green)" />
      </marker>
    </defs>
  </svg>
)
const zielbildungProzess = zielbildungProzessBau(false)
const zielbildungProzessLeer = zielbildungProzessBau(true)
const zielbildungProzessSlots: BeschriftungSlot[] = [
  // Die fünf Anspruchsgruppen sind gleichwertig – jede Verteilung zählt.
  ...boxSlots(anspruchsgruppenBoxen, 'gruppen'),
  { label: 'Zielsystem', x: 396, y: 74, w: 92, h: 20 },
]

/** Anreiz-Beitrags-Theorie – Koalitionspartner (Folie 71). */
const anreizBeitrag: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.82rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Anreiz-Beitrags-Theorie: Das Unternehmen bietet Anreize, erhält dafür Beiträge; die Macht eines
      Partners bemisst sich an seinen Sanktionsmöglichkeiten (Übungsfrage 25/26).
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Möglicher Koalitionspartner</th>
        <th scope="col" style={thStyle}>Anreize des Unternehmens</th>
        <th scope="col" style={thStyle}>Beiträge des Partners</th>
        <th scope="col" style={thStyle}>Sanktionsmöglichkeiten</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={tdStyle}>Eigentümer</th>
        <td style={tdStyle}>Gewinn, Dividende, Wertsteigerung</td>
        <td style={tdStyle}>Eigenkapital</td>
        <td style={tdStyle}>Kapitalabzug, Verkauf der Anteile</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Gläubiger</th>
        <td style={tdStyle}>Zinsen, Sicherheiten</td>
        <td style={tdStyle}>Fremdkapital</td>
        <td style={tdStyle}>Kreditkündigung, keine Verlängerung</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Arbeitnehmer</th>
        <td style={tdStyle}>Lohn, sicherer Arbeitsplatz</td>
        <td style={tdStyle}>Arbeitsleistung</td>
        <td style={tdStyle}>Streik, Kündigung, „Bummelstreik"</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Management</th>
        <td style={tdStyle}>Gehalt, Macht, Prestige</td>
        <td style={tdStyle}>Führung, Know-how</td>
        <td style={tdStyle}>Weggang, innere Kündigung</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Kunden</th>
        <td style={tdStyle}>Produkte, Leistung, Service</td>
        <td style={tdStyle}>Umsatz (Kaufpreis)</td>
        <td style={tdStyle}>Abwanderung zur Konkurrenz</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Öffentlichkeit / Staat</th>
        <td style={tdStyle}>Steuern, Arbeitsplätze, Infrastruktur</td>
        <td style={tdStyle}>Rechtssicherheit, Genehmigungen</td>
        <td style={tdStyle}>Gesetze, Auflagen, Steuererhöhung</td>
      </tr>
    </tbody>
  </table>
)

// --- 5.3: Kulturtypologie nach Deal/Kennedy (Folie 65) ----------------------

/** 2×2-Matrix der Kulturtypen (Risikobereitschaft × Feedback-Geschwindigkeit). */
const dealKennedyBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 460 300"
    width="100%"
    style={leer ? undefined : { maxWidth: 500 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Kulturtypologie nach Deal und Kennedy als Vier-Felder-Matrix: Achsen sind Risikobereitschaft (hoch/niedrig) und Feedback-Geschwindigkeit (langsam/schnell). Hohes Risiko und langsames Feedback ergibt die Risiko-Kultur, hohes Risiko und schnelles Feedback die Macho-Kultur, niedriges Risiko und langsames Feedback die Prozess-Kultur (Bürokratie), niedriges Risiko und schnelles Feedback die Brot-und-Spiele-Kultur'
    }
  >
    {/* Achsentitel */}
    <text x="18" y="150" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text2)" transform="rotate(-90 18 150)">
      Risikobereitschaft
    </text>
    <text x="270" y="292" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text2)">
      Feedback-Geschwindigkeit
    </text>
    {/* Spalten-/Zeilenbeschriftung */}
    <g fontSize="10" fill="var(--text3)" textAnchor="middle">
      <text x="160" y="40">langsames Feedback</text>
      <text x="380" y="40">schnelles Feedback</text>
    </g>
    <g fontSize="10" fill="var(--text3)" textAnchor="end">
      <text x="46" y="102">hoch</text>
      <text x="46" y="212">niedrig</text>
    </g>
    {/* Vier Felder */}
    <rect x="60" y="50" width="200" height="110" rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
    <rect x="270" y="50" width="180" height="110" rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
    <rect x="60" y="168" width="200" height="110" rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
    <rect x="270" y="168" width="180" height="110" rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
    {/* Feldinhalte */}
    <g textAnchor="middle" fill="var(--text)">
      {!leer && (
        <text x="160" y="100" fontSize="13" fontWeight="700">Risiko-Kultur</text>
      )}
      <text x="160" y="122" fontSize="9.5" fill="var(--text2)">hohes Risiko,</text>
      <text x="160" y="136" fontSize="9.5" fill="var(--text2)">langsames Feedback</text>
      <text x="160" y="150" fontSize="9" fill="var(--text3)" fontStyle="italic">z. B. Forschung</text>

      {!leer && (
        <text x="360" y="100" fontSize="13" fontWeight="700">Macho-Kultur</text>
      )}
      <text x="360" y="122" fontSize="9.5" fill="var(--text2)">hohes Risiko,</text>
      <text x="360" y="136" fontSize="9.5" fill="var(--text2)">schnelles Feedback</text>

      {!leer && (
        <text x="160" y="214" fontSize="13" fontWeight="700">Prozess-Kultur</text>
      )}
      <text x="160" y="236" fontSize="9.5" fill="var(--text2)">niedriges Risiko,</text>
      <text x="160" y="250" fontSize="9.5" fill="var(--text2)">langsames Feedback</text>
      <text x="160" y="264" fontSize="9" fill="var(--text3)" fontStyle="italic">(Bürokratie)</text>

      {!leer && (
        <>
          <text x="360" y="208" fontSize="12.5" fontWeight="700">Brot-und-Spiele-</text>
          <text x="360" y="224" fontSize="12.5" fontWeight="700">Kultur</text>
        </>
      )}
      <text x="360" y="246" fontSize="9.5" fill="var(--text2)">niedriges Risiko,</text>
      <text x="360" y="260" fontSize="9.5" fill="var(--text2)">schnelles Feedback</text>
    </g>
  </svg>
)
const dealKennedy = dealKennedyBau(false)
const dealKennedyLeer = dealKennedyBau(true)
const dealKennedySlots: BeschriftungSlot[] = [
  { label: 'Risiko-Kultur', x: 85, y: 84, w: 150, h: 22 },
  { label: 'Macho-Kultur', x: 285, y: 84, w: 150, h: 22 },
  { label: 'Prozess-Kultur', x: 85, y: 198, w: 150, h: 22 },
  { label: 'Brot-und-Spiele-Kultur', x: 275, y: 192, w: 170, h: 38 },
]

// --- 5.4: Zielbeziehungen komplementär / konkurrierend / indifferent --------

/** Drei Grundtypen der Zielbeziehung als Mini-Diagramme (Ziel A ↑ vs. Ziel B). */
const beziehungTitel = [
  { x: 80, label: 'komplementär' },
  { x: 250, label: 'konkurrierend' },
  { x: 420, label: 'indifferent' },
]
const zielbeziehungenBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 500 220"
    width="100%"
    style={leer ? undefined : { maxWidth: 540 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Die drei Grundtypen der Zielbeziehung, jeweils als Diagramm Erfüllung Ziel A gegen Erfüllung Ziel B: komplementär (beide steigen gemeinsam, steigende Gerade), konkurrierend bzw. konfliktär (mehr von A bedeutet weniger von B, fallende Gerade, hier liegt der Zielkonflikt) und indifferent bzw. neutral (B bleibt gleich, waagerechte Linie)'
    }
  >
    {/* Panel-Titel */}
    {!leer && (
      <g fontSize="12" fontWeight="700" fill="var(--text)" textAnchor="middle">
        {beziehungTitel.map(t => (
          <text key={t.label} x={t.x} y="18">{t.label}</text>
        ))}
      </g>
    )}
    {/* Panel 1: komplementär */}
    <g>
      <line x1="30" y1="150" x2="150" y2="150" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="30" y1="150" x2="30" y2="40" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="30" y1="150" x2="140" y2="55" stroke="var(--green)" strokeWidth="2.5" />
      <text x="80" y="185" textAnchor="middle" fontSize="9" fill="var(--text3)">A ↑ ⇒ B ↑</text>
      <text x="80" y="200" textAnchor="middle" fontSize="9" fill="var(--text3)">fördern sich</text>
    </g>
    {/* Panel 2: konkurrierend */}
    <g>
      <line x1="200" y1="150" x2="320" y2="150" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="200" y1="150" x2="200" y2="40" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="200" y1="55" x2="310" y2="150" stroke="var(--red)" strokeWidth="2.5" />
      <text x="250" y="185" textAnchor="middle" fontSize="9" fill="var(--text3)">A ↑ ⇒ B ↓</text>
      <text x="250" y="200" textAnchor="middle" fontSize="9" fill="var(--red)">= Zielkonflikt</text>
    </g>
    {/* Panel 3: indifferent */}
    <g>
      <line x1="370" y1="150" x2="490" y2="150" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="370" y1="150" x2="370" y2="40" stroke="var(--text2)" strokeWidth="1.3" />
      <line x1="370" y1="95" x2="480" y2="95" stroke="var(--blue)" strokeWidth="2.5" />
      <text x="420" y="185" textAnchor="middle" fontSize="9" fill="var(--text3)">A ↑ ⇒ B gleich</text>
      <text x="420" y="200" textAnchor="middle" fontSize="9" fill="var(--text3)">unabhängig</text>
    </g>
    {/* gemeinsame Achsbeschriftung */}
    <g fontSize="8.5" fill="var(--text3)">
      <text x="26" y="36" textAnchor="end">B</text>
      <text x="152" y="163">A</text>
    </g>
  </svg>
)
const zielbeziehungen = zielbeziehungenBau(false)
const zielbeziehungenLeer = zielbeziehungenBau(true)
const zielbeziehungenSlots: BeschriftungSlot[] = beziehungTitel.map(t => ({
  label: t.label,
  x: t.x - 70,
  y: 2,
  w: 140,
  h: 22,
}))

// --- Export -----------------------------------------------------------------
// Basis-Figuren gleicher Schlüssel voranstellen (nicht überschreiben!),
// eigene Figuren anhängen.
export const bilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  '5.1 Grundlagen': [
    ...(baseBilder['5.1 Grundlagen'] ?? []),
    { bild: zieldimensionen, seite: 55 },
    { bild: zielhierarchie, seite: 56 },
  ],
  '5.2 Empirische Thesen': [
    { bild: zielbildungProzess, seite: 59 },
    { bild: anreizBeitrag, seite: 71 },
  ],
  '5.3 Ein Entstehungsmodell': [
    ...(baseBilder['5.3 Ein Entstehungsmodell'] ?? []),
    { bild: dealKennedy, seite: 65 },
  ],
  '5.4 Zielkonflikte': [
    ...(baseBilder['5.4 Zielkonflikte'] ?? []),
    { bild: zielbeziehungen, seite: 66 },
  ],
}

export const beschriftungen: BeschriftungsBild[] = [
  {
    name: 'Kennzeichen eines Zieles (Zieldimensionen)',
    abschnitt: '5.1 Grundlagen',
    seite: 55,
    erklaerung:
      'Die vier Dimensionen: Zielinhalt (Was?), Zielausmaß (Wie viel?), zeitlicher Bezug (Bis wann?) und sachlicher Geltungsbereich (Für wen?). Ergänzt um Attraktivität und Realismus ergibt sich die Merkregel SMART.',
    bild: zieldimensionen,
    bildLeer: zieldimensionenLeer,
    viewBoxW: 480,
    viewBoxH: 250,
    maxWidth: 520,
    slots: zieldimensionenSlots,
  },
  {
    name: 'Zielhierarchie (Ober-, Zwischen-, Unterziele)',
    abschnitt: '5.1 Grundlagen',
    seite: 56,
    erklaerung:
      'Das Oberziel (z. B. Gewinn) wird über Zwischenziele (Umsatz steigern, Kosten senken) zu konkreten Unterzielen heruntergebrochen; von unten nach oben gilt die Zweck-Mittel-Beziehung.',
    bild: zielhierarchie,
    bildLeer: zielhierarchieLeer,
    viewBoxW: 480,
    viewBoxH: 250,
    maxWidth: 520,
    slots: zielhierarchieSlots,
  },
  {
    name: 'Zielbildung als Aushandelprozess',
    abschnitt: '5.2 Empirische Thesen',
    seite: 59,
    erklaerung:
      'Anspruchsgruppen mit unterschiedlicher Macht (Eigentümer, Management, Arbeitnehmer, Staat, weitere) bringen ihre Interessen in den Entscheidungs- und Aushandelprozess ein; das Ergebnis ist ein abgestimmtes Zielsystem. Die Reihenfolge der Gruppen ist beliebig.',
    bild: zielbildungProzess,
    bildLeer: zielbildungProzessLeer,
    viewBoxW: 500,
    viewBoxH: 210,
    maxWidth: 540,
    slots: zielbildungProzessSlots,
  },
  {
    name: 'Kulturtypologie nach Deal/Kennedy',
    abschnitt: '5.3 Ein Entstehungsmodell',
    seite: 65,
    erklaerung:
      'Hohes Risiko + langsames Feedback = Risiko-Kultur (z. B. Forschung); hohes Risiko + schnelles Feedback = Macho-Kultur; niedriges Risiko + langsames Feedback = Prozess-Kultur (Bürokratie); niedriges Risiko + schnelles Feedback = Brot-und-Spiele-Kultur.',
    bild: dealKennedy,
    bildLeer: dealKennedyLeer,
    viewBoxW: 460,
    viewBoxH: 300,
    maxWidth: 500,
    slots: dealKennedySlots,
  },
  {
    name: 'Die drei Zielbeziehungen',
    abschnitt: '5.4 Zielkonflikte',
    seite: 66,
    erklaerung:
      'Komplementär: A und B fördern sich (steigende Gerade). Konkurrierend: mehr A bedeutet weniger B (fallende Gerade, Zielkonflikt). Indifferent: B bleibt von A unberührt (waagerechte Linie).',
    bild: zielbeziehungen,
    bildLeer: zielbeziehungenLeer,
    viewBoxW: 500,
    viewBoxH: 220,
    maxWidth: 540,
    slots: zielbeziehungenSlots,
  },
]
