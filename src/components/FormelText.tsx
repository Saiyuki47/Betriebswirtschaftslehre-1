import type { ReactNode } from 'react'

// Wandelt die Bruch-Schreibweise [[Zähler|Nenner]] in einen gestapelten Bruch um
// (Zähler über Nenner mit Bruchstrich). Übriger Text – inkl. Zeilenumbrüchen –
// bleibt erhalten (der Container sollte white-space: pre-line nutzen).
//
// Beispiel:  "EKR = [[Jahresüberschuss|Eigenkapital]] × 100"
const FRAC = /\[\[([^\]|]+)\|([^\]]+)\]\]/g

export function renderFormel(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  FRAC.lastIndex = 0
  while ((m = FRAC.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(
      <span className="frac" key={`f${key++}`}>
        <span className="frac-num">{m[1].trim()}</span>
        <span className="frac-den">{m[2].trim()}</span>
      </span>,
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

/** Bequeme Komponente für gemischten Text mit Brüchen. */
export default function FormelText({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderFormel(text)}</span>
}
