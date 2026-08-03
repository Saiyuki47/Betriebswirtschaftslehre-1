import type { CSSProperties } from 'react'
import { klausurFallen, type Falle } from '../data/klausurfallen'
import FormelText from './FormelText'

// Renderer der Klausur-Fallen (analog Datenbanksysteme), aber mit dem BWL-eigenen
// FormelText: Brüche [[Zähler|Nenner]] werden gestapelt, **fett** und Unicode
// (×, ≥, →, …) inline gerendert – KEIN KaTeX.

const grpId = (id: string) => `fallen-grp-${id}`

const card: CSSProperties = {
  border: '1px solid var(--border)',
  borderLeft: '3px solid var(--red, #dc2626)',
  borderRadius: '8px',
  background: 'var(--bg2)',
  padding: '0.6rem 0.85rem',
  margin: '0.65rem 0',
}
const titelStyle: CSSProperties = {
  fontWeight: 700,
  color: 'var(--text)',
  margin: '0 0 0.4rem',
  fontSize: '0.98rem',
}
const falleText: CSSProperties = {
  margin: '0 0 0.35rem',
  color: 'var(--text2)',
  fontSize: '0.9rem',
  lineHeight: 1.6,
}
const row: CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'baseline',
  margin: '0.25rem 0',
  flexWrap: 'wrap',
}
const badge = (bg: string): CSSProperties => ({
  flexShrink: 0,
  fontSize: '0.68rem',
  fontWeight: 700,
  color: '#fff',
  background: bg,
  borderRadius: '4px',
  padding: '0.08rem 0.42rem',
  whiteSpace: 'nowrap',
})
const beispielBox: CSSProperties = {
  margin: '0.4rem 0',
  padding: '0.45rem 0.7rem',
  background: 'var(--bg3)',
  borderRadius: '6px',
  fontSize: '0.86rem',
  color: 'var(--text)',
  lineHeight: 1.7,
  overflowX: 'auto',
}
const merkeBox: CSSProperties = {
  margin: '0.45rem 0 0',
  padding: '0.4rem 0.65rem',
  background: 'var(--blue-dim, rgba(77,159,255,0.12))',
  borderRadius: '6px',
  fontSize: '0.86rem',
  color: 'var(--text)',
  lineHeight: 1.55,
}
const inlineExample: CSSProperties = { fontSize: '0.88rem', color: 'var(--text)' }

function FalleCard({ f }: { f: Falle }) {
  return (
    <div style={card}>
      <p style={titelStyle}>⚠️ {f.titel}</p>
      <p style={falleText}>
        <FormelText text={f.falle} />
      </p>
      {f.falsch && (
        <div style={row}>
          <span style={badge('var(--red, #dc2626)')}>✗ so nicht</span>
          <span style={inlineExample}>
            <FormelText text={f.falsch} />
          </span>
        </div>
      )}
      {f.richtig && (
        <div style={row}>
          <span style={badge('var(--green, #16a34a)')}>✓ sondern</span>
          <span style={inlineExample}>
            <FormelText text={f.richtig} />
          </span>
        </div>
      )}
      {f.beispiel && (
        <div style={beispielBox}>
          <FormelText text={f.beispiel} />
        </div>
      )}
      {f.merke && (
        <div style={merkeBox}>
          💡 <FormelText text={f.merke} />
        </div>
      )}
    </div>
  )
}

// Zum Gruppen-Anker scrollen – kapselt keinen State, daher auf Modul-Ebene.
function scrollTo(id: string) {
  document.getElementById(grpId(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Klausurfallen() {
  const anzahl = klausurFallen.reduce((n, g) => n + g.fallen.length, 0)

  return (
    <div>
      <div className="section-header">
        <h2>Klausur-Fallen</h2>
        <p>
          {anzahl} nicht-intuitive Stolperfallen der ABWL I aus Übungsbegleiter, Vorlesungsfolien und
          Altklausuren – Verwechslungen und Formel-Details, die man extra lernen muss, weil sie sich
          nicht „aus dem Bauch" lösen lassen.
        </p>
      </div>

      {/* Kategorien-Übersicht */}
      <div className="card">
        <p style={{ fontSize: '0.8rem', color: 'var(--text2)', margin: '0 0 0.5rem', fontWeight: 600 }}>
          Kategorien
        </p>
        <div className="filter-row" style={{ flexWrap: 'wrap', marginBottom: 0 }}>
          {klausurFallen.map(g => (
            <button
              key={g.id}
              type="button"
              className="filter-btn"
              onClick={() => scrollTo(g.id)}
            >
              {g.icon} {g.titel} ({g.fallen.length})
            </button>
          ))}
        </div>
      </div>

      {/* Fallen je Kategorie */}
      {klausurFallen.map(g => (
        <div key={g.id} id={grpId(g.id)} className="card" style={{ scrollMarginTop: '1rem' }}>
          <h3 className="ub-title">{g.icon} {g.titel}</h3>
          {g.fallen.map(f => (
            <FalleCard key={f.titel} f={f} />
          ))}
        </div>
      ))}
    </div>
  )
}
