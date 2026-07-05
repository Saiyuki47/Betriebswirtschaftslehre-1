import type { ReactNode } from 'react'
import type { BeschriftungSlot } from 'lernseiten-ui'
import { svgBox, quizBoxen, boxSlots, LEER_ARIA, type QuizBoxDef, type BeschriftungsBild } from './_base'

// Abbildungen für Kapitel 1 (Grundlagen). Schlüssel = exakter `abschnitt.titel`
// aus themen/kapitel-1.ts. Figuren als statische ReactNode-Konstanten auf
// Modulebene (keine Komponenten); jede SVG-Figur als Builder
// `(leer: boolean) => ReactNode` mit voller + leerer Quiz-Variante (siehe
// _base.tsx). Die Figuren für 1.3/1.4/1.5 stehen bereits in _base.tsx
// (baseBilder) und werden hier NICHT dupliziert – sonst würden sie beim
// Spread-Merge in index.ts überschrieben. Hier ergänzen wir 1.1 und 1.2.
//
// Nachgebaut aus PP-Folien_BWL_2025.pdf, S. 9–15 – reines Inline-SVG,
// Theme-Farben (var(--…)), keine festen Hex-Werte.

// --- 1.1 Erkenntnisobjekt: Akronym A-B-W-L (Folie 9) ------------------------

const abwlZeilen = [
  { y: 12, b: 'A', w: 'Allgemeine', s: 'branchenübergreifend gültig' },
  { y: 58, b: 'B', w: 'Betriebs-', s: 'der Betrieb als Untersuchungsgegenstand' },
  { y: 104, b: 'W', w: 'Wirtschafts-', s: 'wirtschaften = mit knappen Gütern disponieren' },
  { y: 150, b: 'L', w: 'Lehre', s: 'wissenschaftliche Durchdringung' },
]
const abwlAkronymBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 360 200"
    width="100%"
    style={leer ? undefined : { maxWidth: 380 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Der Fachname erklärt den Gegenstand: A für Allgemeine, B für Betriebs, W für Wirtschafts, L für Lehre'
    }
  >
    {abwlZeilen.map((r) => (
      <g key={r.b}>
        <rect x="8" y={r.y} width="34" height="34" rx="6" fill="var(--blue-dim)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x="25" y={r.y + 23} textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--blue)">
          {r.b}
        </text>
        {!leer && (
          <text x="54" y={r.y + 15} fontSize="12" fontWeight="600" fill="var(--text)">
            {r.w}
          </text>
        )}
        <text x="54" y={r.y + 30} fontSize="9.5" fill="var(--text2)">
          {r.s}
        </text>
      </g>
    ))}
  </svg>
)
const abwlAkronym = abwlAkronymBau(false)
const abwlAkronymLeer = abwlAkronymBau(true)
const abwlSlots: BeschriftungSlot[] = abwlZeilen.map(r => ({
  label: r.w,
  x: 52,
  y: r.y + 2,
  w: 140,
  h: 17,
}))

// --- 1.2 Input-/Output-, Real-/Nominalgüter (Folie 11) ----------------------

const guBoxen: QuizBoxDef[] = [
  { x: 40, y: 84, w: 160, h: 36, label: 'nach Prozess', key: 'proz', sub: 'Input / Output' },
  { x: 280, y: 84, w: 160, h: 36, label: 'nach Ebene', key: 'eb', sub: 'Real / Nominal' },
  { x: 10, y: 160, w: 120, h: 40, label: 'Inputgüter', key: 'in', sub: 'gehen ein' },
  { x: 140, y: 160, w: 120, h: 40, label: 'Outputgüter', key: 'out', sub: 'Ergebnis' },
  { x: 258, y: 160, w: 108, h: 40, label: 'Realgüter', key: 're', sub: 'Sachgüter, DL, Rechte' },
  { x: 374, y: 160, w: 96, h: 40, label: 'Nominalgüter', key: 'no', sub: 'Geld, Ford.' },
]
const gueterUnterscheidungBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 480 210"
    width="100%"
    style={leer ? undefined : { maxWidth: 520 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Weitere Unterscheidungen der Güter: nach der Stellung im Prozess in Input- und Outputgüter, nach der Ebene in Realgüter (Sachgüter, Dienstleistungen, Rechte) und Nominalgüter (Geld, Forderungen)'
    }
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M240 44 L120 84" />
      <path d="M240 44 L360 84" />
      <path d="M120 120 L70 160" />
      <path d="M120 120 L170 160" />
      <path d="M360 120 L310 160" />
      <path d="M360 120 L410 160" />
    </g>
    {svgBox(160, 14, 160, 30, 'Güter', 'root')}
    {quizBoxen(guBoxen, leer)}
  </svg>
)
const gueterUnterscheidung = gueterUnterscheidungBau(false)
const gueterUnterscheidungLeer = gueterUnterscheidungBau(true)

// --- 1.2 Wirtschaftsgüter-Baum (Folie 12, s. Thommen/Achleitner S. 39) ------

const wgBoxen: QuizBoxDef[] = [
  { x: 70, y: 84, w: 160, h: 36, label: 'Materielle Güter', key: 'mat' },
  { x: 330, y: 84, w: 160, h: 36, label: 'Immaterielle Güter', key: 'imm' },
  { x: 20, y: 160, w: 120, h: 36, label: 'Produktions-', key: 'prod', sub: 'güter' },
  { x: 170, y: 160, w: 120, h: 36, label: 'Konsum-', key: 'kons', sub: 'güter' },
  { x: 300, y: 160, w: 96, h: 36, label: 'Dienst-', key: 'dl', sub: 'leistungen' },
  { x: 410, y: 160, w: 130, h: 36, label: 'Rechte', key: 'rechte', sub: 'z. B. Patente' },
  { x: 120, y: 236, w: 110, h: 36, label: 'Gebrauchs-', key: 'geb', sub: 'güter (mehrfach)' },
  { x: 240, y: 236, w: 110, h: 36, label: 'Verbrauchs-', key: 'ver', sub: 'güter (einmalig)' },
]
const wirtschaftsgueterBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 560 320"
    width="100%"
    style={leer ? undefined : { maxWidth: 600 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Baum der Wirtschaftsgüter: materielle Güter teilen sich in Produktionsgüter und Konsumgüter, Konsumgüter weiter in Gebrauchsgüter und Verbrauchsgüter; immaterielle Güter sind Dienstleistungen und Rechte wie Patente'
    }
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M280 44 L150 84" />
      <path d="M280 44 L410 84" />
      <path d="M150 120 L80 160" />
      <path d="M150 120 L230 160" />
      <path d="M410 120 L345 160" />
      <path d="M410 120 L475 160" />
      <path d="M230 196 L175 236" />
      <path d="M230 196 L290 236" />
    </g>
    {svgBox(190, 14, 180, 30, 'Wirtschaftsgüter', 'root')}
    {quizBoxen(wgBoxen, leer)}
    <text x="556" y="300" textAnchor="end" fontSize="9" fill="var(--text3)" fontStyle="italic">
      s. Thommen/Achleitner, S. 39
    </text>
  </svg>
)
const wirtschaftsgueter = wirtschaftsgueterBau(false)
const wirtschaftsgueterLeer = wirtschaftsgueterBau(true)

// --- 1.2 Ökonomisches Prinzip: Minimum / Maximum / Extremum (Folie 13–14) ---

const prinzipSpalten = [
  { x: 12, key: 'min', t: 'Minimumprinzip', a: 'Ertrag / Ziel', b: 'fest vorgegeben', c: 'Aufwand → minimal', d: '= Kostenminimierung' },
  { x: 192, key: 'max', t: 'Maximumprinzip', a: 'Aufwand / Mittel', b: 'fest vorgegeben', c: 'Ertrag → maximal', d: '= Leistungsmaximierung' },
  { x: 372, key: 'ext', t: 'Extremumprinzip', a: 'Verhältnis', b: 'Aufwand : Ertrag', c: '→ optimal', d: '= allgemeiner Fall' },
]
const oekonomischesPrinzipBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 560 240"
    width="100%"
    style={leer ? undefined : { maxWidth: 600 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Die drei Ausprägungen des ökonomischen Prinzips: Minimumprinzip (Ertrag fest, Aufwand minimieren), Maximumprinzip (Aufwand fest, Ertrag maximieren) und Extremumprinzip (Verhältnis von Aufwand und Ertrag optimieren)'
    }
  >
    <rect x="6" y="8" width="548" height="30" rx="6" fill="var(--green-dim)" stroke="var(--green)" strokeWidth="1.5" />
    <text x="280" y="28" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--text)">
      Ökonomisches Prinzip (Vernunftprinzip des Wirtschaftens)
    </text>
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M280 38 L100 66" />
      <path d="M280 38 L280 66" />
      <path d="M280 38 L460 66" />
    </g>
    {prinzipSpalten.map((s) => (
      <g key={s.key}>
        <rect x={s.x} y="66" width="176" height="150" rx="8" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
        {!leer && (
          <text x={s.x + 88} y="90" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--blue)">
            {s.t}
          </text>
        )}
        <line x1={s.x + 16} y1="100" x2={s.x + 160} y2="100" stroke="var(--border2)" strokeWidth="1" />
        <text x={s.x + 88} y="126" textAnchor="middle" fontSize="11" fill="var(--text)">
          {s.a}
        </text>
        <text x={s.x + 88} y="144" textAnchor="middle" fontSize="10" fill="var(--text2)">
          {s.b}
        </text>
        {!leer && (
          <text x={s.x + 88} y="176" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--text)">
            {s.c}
          </text>
        )}
        <text x={s.x + 88} y="200" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
          {s.d}
        </text>
      </g>
    ))}
  </svg>
)
const oekonomischesPrinzip = oekonomischesPrinzipBau(false)
const oekonomischesPrinzipLeer = oekonomischesPrinzipBau(true)
const oekonomischesPrinzipSlots: BeschriftungSlot[] = prinzipSpalten.flatMap(s => [
  { label: s.t, x: s.x + 14, y: 74, w: 148, h: 22 },
  { label: s.c, x: s.x + 14, y: 160, w: 148, h: 22 },
])

// --- 1.2 Kennzahlen: Wirtschaftlichkeit / Produktivität / Rentabilität (Folie 15)

const kennzahlKarten = [
  { x: 8, key: 'wi', t: 'Wirtschaftlichkeit', sub: '(Effizienz)', z: 'Ertrag', n: 'Aufwand', tail: '', note: 'wie günstig?' },
  { x: 192, key: 'pr', t: 'Produktivität', sub: '(Mengen)', z: 'Output (ME)', n: 'Input (ME)', tail: '', note: 'nur Mengen' },
  { x: 376, key: 're', t: 'Rentabilität', sub: '(ROI)', z: 'Gewinn', n: 'Kapital', tail: '× 100', note: 'Verzinsung in %' },
]
const oekonomischeKennzahlenBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 560 210"
    width="100%"
    style={leer ? undefined : { maxWidth: 600 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Kennzahlen zur Messung des ökonomischen Prinzips: Wirtschaftlichkeit gleich Ertrag durch Aufwand, Produktivität gleich Output durch Input in Mengeneinheiten, Rentabilität gleich Gewinn durch Kapital mal hundert'
    }
  >
    {kennzahlKarten.map((k) => (
      <g key={k.key}>
        <rect x={k.x} y="8" width="176" height="184" rx="8" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x={k.x + 88} y="32" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--blue)">
          {k.t}
        </text>
        <text x={k.x + 88} y="48" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
          {k.sub}
        </text>
        {/* Bruchdarstellung */}
        {!leer && (
          <text x={k.x + 74} y="96" textAnchor="middle" fontSize="12" fill="var(--text)">
            {k.z}
          </text>
        )}
        <line x1={k.x + 16} y1="106" x2={k.x + 132} y2="106" stroke="var(--text)" strokeWidth="1.4" />
        {!leer && (
          <text x={k.x + 74} y="128" textAnchor="middle" fontSize="12" fill="var(--text)">
            {k.n}
          </text>
        )}
        {k.tail ? (
          <text x={k.x + 150} y="112" textAnchor="middle" fontSize="11" fill="var(--text2)">
            {k.tail}
          </text>
        ) : null}
        <line x1={k.x + 16} y1="150" x2={k.x + 160} y2="150" stroke="var(--border2)" strokeWidth="1" />
        <text x={k.x + 88} y="172" textAnchor="middle" fontSize="10" fill="var(--text2)">
          {k.note}
        </text>
      </g>
    ))}
  </svg>
)
const oekonomischeKennzahlen = oekonomischeKennzahlenBau(false)
const oekonomischeKennzahlenLeer = oekonomischeKennzahlenBau(true)
const oekonomischeKennzahlenSlots: BeschriftungSlot[] = kennzahlKarten.flatMap(k => [
  { label: k.z, x: k.x + 22, y: 82, w: 104, h: 20 },
  { label: k.n, x: k.x + 22, y: 112, w: 104, h: 20 },
])

// --- Export -----------------------------------------------------------------

export const bilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  '1.1 Erkenntnisobjekt': [{ bild: abwlAkronym, seite: 9 }],
  '1.2 Wirtschaftliches Handeln': [
    { bild: gueterUnterscheidung, seite: 11 },
    { bild: wirtschaftsgueter, seite: 12 },
    { bild: oekonomischesPrinzip, seite: 13 },
    { bild: oekonomischeKennzahlen, seite: 15 },
  ],
}

export const beschriftungen: BeschriftungsBild[] = [
  {
    name: 'Das Akronym A-B-W-L',
    abschnitt: '1.1 Erkenntnisobjekt',
    seite: 9,
    erklaerung:
      'A = Allgemeine (branchenübergreifend gültig), B = Betriebs- (der Betrieb als Untersuchungsgegenstand), W = Wirtschafts- (mit knappen Gütern disponieren), L = Lehre (wissenschaftliche Durchdringung).',
    bild: abwlAkronym,
    bildLeer: abwlAkronymLeer,
    viewBoxW: 360,
    viewBoxH: 200,
    maxWidth: 380,
    slots: abwlSlots,
  },
  {
    name: 'Weitere Unterscheidungen der Güter',
    abschnitt: '1.2 Wirtschaftliches Handeln',
    seite: 11,
    erklaerung:
      'Nach der Stellung im Prozess: Inputgüter (gehen ein) und Outputgüter (Ergebnis). Nach der Ebene: Realgüter (Sachgüter, Dienstleistungen, Rechte) und Nominalgüter (Geld, Forderungen).',
    bild: gueterUnterscheidung,
    bildLeer: gueterUnterscheidungLeer,
    viewBoxW: 480,
    viewBoxH: 210,
    maxWidth: 520,
    slots: boxSlots(guBoxen),
  },
  {
    name: 'Baum der Wirtschaftsgüter',
    abschnitt: '1.2 Wirtschaftliches Handeln',
    seite: 12,
    erklaerung:
      'Materielle Güter teilen sich in Produktions- und Konsumgüter (Konsumgüter weiter in Gebrauchs- und Verbrauchsgüter); immaterielle Güter sind Dienstleistungen und Rechte (z. B. Patente).',
    bild: wirtschaftsgueter,
    bildLeer: wirtschaftsgueterLeer,
    viewBoxW: 560,
    viewBoxH: 320,
    maxWidth: 600,
    slots: boxSlots(wgBoxen),
  },
  {
    name: 'Das ökonomische Prinzip',
    abschnitt: '1.2 Wirtschaftliches Handeln',
    seite: 13,
    erklaerung:
      'Minimumprinzip: Ertrag fest → Aufwand minimal (Kostenminimierung). Maximumprinzip: Aufwand fest → Ertrag maximal (Leistungsmaximierung). Extremumprinzip: Verhältnis Aufwand : Ertrag → optimal (allgemeiner Fall).',
    bild: oekonomischesPrinzip,
    bildLeer: oekonomischesPrinzipLeer,
    viewBoxW: 560,
    viewBoxH: 240,
    maxWidth: 600,
    slots: oekonomischesPrinzipSlots,
  },
  {
    name: 'Kennzahlen des ökonomischen Prinzips',
    abschnitt: '1.2 Wirtschaftliches Handeln',
    seite: 15,
    erklaerung:
      'Wirtschaftlichkeit = Ertrag ÷ Aufwand (wertmäßig), Produktivität = Output ÷ Input (Mengeneinheiten), Rentabilität = Gewinn ÷ Kapital × 100 (Verzinsung in %).',
    bild: oekonomischeKennzahlen,
    bildLeer: oekonomischeKennzahlenLeer,
    viewBoxW: 560,
    viewBoxH: 210,
    maxWidth: 600,
    slots: oekonomischeKennzahlenSlots,
  },
]
