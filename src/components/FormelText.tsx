import { Fragment } from 'react'

// Wandelt die Bruch-Schreibweise [[Zähler|Nenner]] in einen gestapelten Bruch um
// (Zähler über Nenner mit Bruchstrich). Übriger Text – inkl. Zeilenumbrüchen –
// bleibt erhalten (der Container sollte white-space: pre-line nutzen).
//
// Beispiel:  "EKR = [[Jahresüberschuss|Eigenkapital]] × 100"
const FRAC = /\[\[([^\]|]+)\|([^\]]+)\]\]/g

type Segment =
  | { key: string; kind: 'text'; value: string }
  | { key: string; kind: 'frac'; num: string; den: string }

// Zerlegt den Text in einfache Daten-Segmente (kein JSX) – das eigentliche
// Rendering passiert inline in der Komponente.
function parseFormel(text: string): Segment[] {
  const segments: Segment[] = []
  let last = 0
  let n = 0
  let m: RegExpExecArray | null
  FRAC.lastIndex = 0
  while ((m = FRAC.exec(text)) !== null) {
    if (m.index > last) {
      segments.push({ key: `t${n++}`, kind: 'text', value: text.slice(last, m.index) })
    }
    segments.push({ key: `f${n++}`, kind: 'frac', num: m[1].trim(), den: m[2].trim() })
    last = m.index + m[0].length
  }
  if (last < text.length) {
    segments.push({ key: `t${n++}`, kind: 'text', value: text.slice(last) })
  }
  return segments
}

/** Mischtext mit Brüchen ([[Zähler|Nenner]]) als gestapelte Brüche darstellen. */
export default function FormelText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {parseFormel(text).map(seg =>
        seg.kind === 'frac' ? (
          <span className="frac" key={seg.key}>
            <span className="frac-num">{seg.num}</span>
            <span className="frac-den">{seg.den}</span>
          </span>
        ) : (
          <Fragment key={seg.key}>{seg.value}</Fragment>
        ),
      )}
    </span>
  )
}
