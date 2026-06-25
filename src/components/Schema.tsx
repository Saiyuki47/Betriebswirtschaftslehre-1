import { useState } from 'react'
import { themen } from '../data/themen'

export default function Schema() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div>
      <div className="section-header">
        <h2>Themen</h2>
        <p>Lernzettel zur Vorlesung – alle Kapitel, Formeln und Übungen auf einen Blick.</p>
      </div>

      {themen.map(thema => {
        const isOpen = openIds.has(thema.titel)
        const anzahl = thema.abschnitte?.length ?? 0
        return (
          <div key={thema.titel} className="card">
            <button type="button" className="schema-data-toggle" onClick={() => toggle(thema.titel)}>
              <span className="schema-data-arrow">{isOpen ? '▼' : '▶'}</span>
              <span className="schema-data-name">{thema.titel}</span>
              {anzahl > 0 && (
                <span className="schema-data-meta">
                  {anzahl} {anzahl === 1 ? 'Abschnitt' : 'Abschnitte'}
                </span>
              )}
            </button>
            {isOpen && (
              <div className="thema-detail">
                {thema.beschreibung && <p className="q-text">{thema.beschreibung}</p>}

                {thema.punkte && thema.punkte.length > 0 && (
                  <ul className="thema-punkte">
                    {thema.punkte.map(p => (
                      <li key={`${thema.titel}-${p}`}>{p}</li>
                    ))}
                  </ul>
                )}

                {thema.abschnitte?.map(abschnitt => (
                  <div key={abschnitt.titel} className="thema-abschnitt">
                    <h4 className="thema-abschnitt-titel">{abschnitt.titel}</h4>
                    {abschnitt.beschreibung && (
                      <p className="thema-abschnitt-text">{abschnitt.beschreibung}</p>
                    )}
                    {abschnitt.punkte && abschnitt.punkte.length > 0 && (
                      <ul className="thema-punkte">
                        {abschnitt.punkte.map(p => (
                          <li key={`${abschnitt.titel}-${p}`}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
