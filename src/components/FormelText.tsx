import { Fragment } from 'react'
import { marked } from 'marked'

// Vereinheitlichter Aufgaben-/Lösungs-Renderer für BWL:
//  • Brüche in der Schreibweise [[Zähler|Nenner]] werden als gestapelter Bruch
//    dargestellt (Zähler über Nenner mit Bruchstrich).
//  • Der restliche Text wird als Markdown gerendert (via `marked`, dieselbe
//    Engine wie in der Moodle-Ansicht), sodass z.B. **fett**, Listen, `code`
//    und Zeilenumbrüche korrekt erscheinen.
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

// Markdown eines Text-Segments inline (ohne umschließendes <p>) zu HTML rendern,
// damit es sich nahtlos mit den Bruch-Elementen mischen lässt.
function md(value: string): string {
  // breaks: false — Zeilenumbrüche bewahrt der Container über white-space: pre-line,
  // damit \n nicht zusätzlich als <br> verdoppelt wird.
  return marked.parseInline(value, { async: false, gfm: true, breaks: false }) as string
}

/**
 * Mischtext mit Brüchen ([[Zähler|Nenner]]) und Markdown darstellen – derselbe
 * Renderer, der in den Übungsblättern und Formeln verwendet wird.
 */
export default function FormelText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} style={{ whiteSpace: 'pre-line' }}>
      {parseFormel(text).map(seg =>
        seg.kind === 'frac' ? (
          <span className="frac" key={seg.key}>
            <span className="frac-num">{seg.num}</span>
            <span className="frac-den">{seg.den}</span>
          </span>
        ) : (
          <Fragment key={seg.key}>
            {/* react-doctor-disable-next-line react-doctor/dangerous-html-sink -- Markdown aus eigenen Kursinhalten, via marked() gerendert */}
            <span dangerouslySetInnerHTML={{ __html: md(seg.value) }} />
          </Fragment>
        ),
      )}
    </span>
  )
}
