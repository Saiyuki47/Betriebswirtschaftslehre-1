import type { ReactNode } from 'react'
import { svgBox } from './_base'

// Abbildungen für Kapitel 1 (Grundlagen). Schlüssel = exakter `abschnitt.titel`
// aus themen/kapitel-1.ts. Figuren als statische ReactNode-Konstanten auf
// Modulebene (keine Komponenten). Die Figuren für 1.3/1.4/1.5 stehen bereits in
// _base.tsx (baseBilder) und werden hier NICHT dupliziert – sonst würden sie
// beim Spread-Merge in index.ts überschrieben. Hier ergänzen wir 1.1 und 1.2.
//
// Nachgebaut aus PP-Folien_BWL_2025.pdf, S. 9–15 – reines Inline-SVG,
// Theme-Farben (var(--…)), keine festen Hex-Werte.

// --- 1.1 Erkenntnisobjekt: Akronym A-B-W-L (Folie 9) ------------------------

const abwlAkronym: ReactNode = (
  <svg
    viewBox="0 0 360 200"
    width="100%"
    style={{ maxWidth: 380 }}
    role="img"
    aria-label="Der Fachname erklärt den Gegenstand: A für Allgemeine, B für Betriebs, W für Wirtschafts, L für Lehre"
  >
    {[
      { y: 12, b: 'A', w: 'Allgemeine', s: 'branchenübergreifend gültig' },
      { y: 58, b: 'B', w: 'Betriebs-', s: 'der Betrieb als Untersuchungsgegenstand' },
      { y: 104, b: 'W', w: 'Wirtschafts-', s: 'wirtschaften = mit knappen Gütern disponieren' },
      { y: 150, b: 'L', w: 'Lehre', s: 'wissenschaftliche Durchdringung' },
    ].map((r) => (
      <g key={r.b}>
        <rect x="8" y={r.y} width="34" height="34" rx="6" fill="var(--blue-dim)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x="25" y={r.y + 23} textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--blue)">
          {r.b}
        </text>
        <text x="54" y={r.y + 15} fontSize="12" fontWeight="600" fill="var(--text)">
          {r.w}
        </text>
        <text x="54" y={r.y + 30} fontSize="9.5" fill="var(--text2)">
          {r.s}
        </text>
      </g>
    ))}
  </svg>
)

// --- 1.2 Input-/Output-, Real-/Nominalgüter (Folie 11) ----------------------

const gueterUnterscheidung: ReactNode = (
  <svg
    viewBox="0 0 480 210"
    width="100%"
    style={{ maxWidth: 520 }}
    role="img"
    aria-label="Weitere Unterscheidungen der Güter: nach der Stellung im Prozess in Input- und Outputgüter, nach der Ebene in Realgüter (Sachgüter, Dienstleistungen, Rechte) und Nominalgüter (Geld, Forderungen)"
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
    {svgBox(40, 84, 160, 36, 'nach Prozess', 'proz', 'Input / Output')}
    {svgBox(280, 84, 160, 36, 'nach Ebene', 'eb', 'Real / Nominal')}
    {svgBox(10, 160, 120, 40, 'Inputgüter', 'in', 'gehen ein')}
    {svgBox(140, 160, 120, 40, 'Outputgüter', 'out', 'Ergebnis')}
    {svgBox(258, 160, 108, 40, 'Realgüter', 're', 'Sachgüter, DL, Rechte')}
    {svgBox(374, 160, 96, 40, 'Nominalgüter', 'no', 'Geld, Ford.')}
  </svg>
)

// --- 1.2 Wirtschaftsgüter-Baum (Folie 12, s. Thommen/Achleitner S. 39) ------

const wirtschaftsgueter: ReactNode = (
  <svg
    viewBox="0 0 560 320"
    width="100%"
    style={{ maxWidth: 600 }}
    role="img"
    aria-label="Baum der Wirtschaftsgüter: materielle Güter teilen sich in Produktionsgüter und Konsumgüter, Konsumgüter weiter in Gebrauchsgüter und Verbrauchsgüter; immaterielle Güter sind Dienstleistungen und Rechte wie Patente"
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
    {svgBox(70, 84, 160, 36, 'Materielle Güter', 'mat')}
    {svgBox(330, 84, 160, 36, 'Immaterielle Güter', 'imm')}
    {svgBox(20, 160, 120, 36, 'Produktions-', 'prod', 'güter')}
    {svgBox(170, 160, 120, 36, 'Konsum-', 'kons', 'güter')}
    {svgBox(300, 160, 96, 36, 'Dienst-', 'dl', 'leistungen')}
    {svgBox(410, 160, 130, 36, 'Rechte', 'rechte', 'z. B. Patente')}
    {svgBox(120, 236, 110, 36, 'Gebrauchs-', 'geb', 'güter (mehrfach)')}
    {svgBox(240, 236, 110, 36, 'Verbrauchs-', 'ver', 'güter (einmalig)')}
    <text x="556" y="300" textAnchor="end" fontSize="9" fill="var(--text3)" fontStyle="italic">
      s. Thommen/Achleitner, S. 39
    </text>
  </svg>
)

// --- 1.2 Ökonomisches Prinzip: Minimum / Maximum / Extremum (Folie 13–14) ---

const oekonomischesPrinzip: ReactNode = (
  <svg
    viewBox="0 0 560 240"
    width="100%"
    style={{ maxWidth: 600 }}
    role="img"
    aria-label="Die drei Ausprägungen des ökonomischen Prinzips: Minimumprinzip (Ertrag fest, Aufwand minimieren), Maximumprinzip (Aufwand fest, Ertrag maximieren) und Extremumprinzip (Verhältnis von Aufwand und Ertrag optimieren)"
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
    {[
      { x: 12, key: 'min', t: 'Minimumprinzip', a: 'Ertrag / Ziel', b: 'fest vorgegeben', c: 'Aufwand → minimal', d: '= Kostenminimierung' },
      { x: 192, key: 'max', t: 'Maximumprinzip', a: 'Aufwand / Mittel', b: 'fest vorgegeben', c: 'Ertrag → maximal', d: '= Leistungsmaximierung' },
      { x: 372, key: 'ext', t: 'Extremumprinzip', a: 'Verhältnis', b: 'Aufwand : Ertrag', c: '→ optimal', d: '= allgemeiner Fall' },
    ].map((s) => (
      <g key={s.key}>
        <rect x={s.x} y="66" width="176" height="150" rx="8" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x={s.x + 88} y="90" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--blue)">
          {s.t}
        </text>
        <line x1={s.x + 16} y1="100" x2={s.x + 160} y2="100" stroke="var(--border2)" strokeWidth="1" />
        <text x={s.x + 88} y="126" textAnchor="middle" fontSize="11" fill="var(--text)">
          {s.a}
        </text>
        <text x={s.x + 88} y="144" textAnchor="middle" fontSize="10" fill="var(--text2)">
          {s.b}
        </text>
        <text x={s.x + 88} y="176" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--text)">
          {s.c}
        </text>
        <text x={s.x + 88} y="200" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
          {s.d}
        </text>
      </g>
    ))}
  </svg>
)

// --- 1.2 Kennzahlen: Wirtschaftlichkeit / Produktivität / Rentabilität (Folie 15)

const oekonomischeKennzahlen: ReactNode = (
  <svg
    viewBox="0 0 560 210"
    width="100%"
    style={{ maxWidth: 600 }}
    role="img"
    aria-label="Kennzahlen zur Messung des ökonomischen Prinzips: Wirtschaftlichkeit gleich Ertrag durch Aufwand, Produktivität gleich Output durch Input in Mengeneinheiten, Rentabilität gleich Gewinn durch Kapital mal hundert"
  >
    {[
      { x: 8, key: 'wi', t: 'Wirtschaftlichkeit', sub: '(Effizienz)', z: 'Ertrag', n: 'Aufwand', tail: '', note: 'wie günstig?' },
      { x: 192, key: 'pr', t: 'Produktivität', sub: '(Mengen)', z: 'Output (ME)', n: 'Input (ME)', tail: '', note: 'nur Mengen' },
      { x: 376, key: 're', t: 'Rentabilität', sub: '(ROI)', z: 'Gewinn', n: 'Kapital', tail: '× 100', note: 'Verzinsung in %' },
    ].map((k) => (
      <g key={k.key}>
        <rect x={k.x} y="8" width="176" height="184" rx="8" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x={k.x + 88} y="32" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--blue)">
          {k.t}
        </text>
        <text x={k.x + 88} y="48" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
          {k.sub}
        </text>
        {/* Bruchdarstellung */}
        <text x={k.x + 74} y="96" textAnchor="middle" fontSize="12" fill="var(--text)">
          {k.z}
        </text>
        <line x1={k.x + 16} y1="106" x2={k.x + 132} y2="106" stroke="var(--text)" strokeWidth="1.4" />
        <text x={k.x + 74} y="128" textAnchor="middle" fontSize="12" fill="var(--text)">
          {k.n}
        </text>
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
