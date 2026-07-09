import { useState, useEffect, useCallback } from 'react'
import { folien } from '../data/folienMapping'

// Vorlesungsfolien-Ansicht (Untertab im Referenz-Tab): jede aktuelle 2025-Folie
// neben den Aufzeichnungen (David 2023, Leon 2023, Leon 2021). Die Zuordnung
// kommt aus data/folienMapping.ts; die Bilder liegen in public/folien/<quelle>/.

const BASE = import.meta.env.BASE_URL
const pad = (n: number) => String(n).padStart(3, '0')
const imgSrc = (quelle: string, seite: number) => `${BASE}folien/${quelle}/${pad(seite)}.jpg`

export default function Foliensicht() {
  const [i, setI] = useState(0)
  const folie = folien[i]
  const prev = useCallback(() => setI(v => Math.max(0, v - 1)), [])
  const next = useCallback(() => setI(v => Math.min(folien.length - 1, v + 1)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t && (t.tagName === 'SELECT' || t.tagName === 'INPUT')) return
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const karten: { label: string; quelle: string; seite: number | null; haupt?: boolean }[] = [
    { label: '2025 · Lehrerfolie', quelle: '2025', seite: folie.nr, haupt: true },
    { label: 'David 2023', quelle: 'david2023', seite: folie.david2023 },
    { label: 'Leon 2023', quelle: 'leon2023', seite: folie.leon2023 },
    { label: 'Leon 2021', quelle: 'leon2021', seite: folie.leon2021 },
  ]

  return (
    <div className="fv">
      <div className="section-header">
        <h2>Vorlesungsfolien</h2>
        <p>
          Jede aktuelle Folie (2025) neben den Aufzeichnungen von David und Leon. Blättern mit den
          Pfeiltasten ← → oder der Auswahl; eine Folie anklicken öffnet sie groß.
        </p>
      </div>

      <div className="fv-bar">
        <button type="button" className="filter-btn" onClick={prev} disabled={i === 0}>← Zurück</button>
        <span className="fv-count">Folie {folie.nr} / {folien.length}</span>
        <select
          className="fv-select"
          value={i}
          onChange={e => setI(Number(e.target.value))}
          aria-label="Folie wählen"
        >
          {folien.map((f, idx) => (
            <option key={f.nr} value={idx}>{f.nr}. {f.titel}</option>
          ))}
        </select>
        <button type="button" className="filter-btn" onClick={next} disabled={i === folien.length - 1}>Weiter →</button>
      </div>

      <p className="fv-titel">{folie.titel}</p>

      <div className="fv-grid">
        {karten.map(k => (
          <figure className={`fv-card${k.haupt ? ' fv-card--haupt' : ''}`} key={k.quelle}>
            <figcaption className="fv-label">{k.label}</figcaption>
            {k.seite != null ? (
              <a href={imgSrc(k.quelle, k.seite)} target="_blank" rel="noopener noreferrer" className="fv-imglink">
                <img
                  className="fv-img"
                  src={imgSrc(k.quelle, k.seite)}
                  alt={`${k.label} – Folie ${folie.nr}`}
                  loading="lazy"
                />
              </a>
            ) : (
              <div className="fv-missing">In dieser Aufzeichnung nicht enthalten</div>
            )}
          </figure>
        ))}
      </div>
    </div>
  )
}
