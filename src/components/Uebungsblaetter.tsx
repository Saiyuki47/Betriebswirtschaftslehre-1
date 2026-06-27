import { useState, type CSSProperties } from 'react'
import { useDoneTracker } from 'lernseiten-ui'
import type { Tipps } from '../types'
import { uebungsblaetter } from '../data/uebungsblaetter'
import { aufgaben } from '../data/aufgaben'
import { altklausurAufgaben } from '../data/altklausuren'
import FormelText from './FormelText'

// Übungsbegleiter-Aufgaben und Altklausur-Aufgaben für die Lösungssuche zusammenführen.
const alleAufgaben = [...aufgaben, ...altklausurAufgaben]

// Reihenfolge & Beschriftung der vier Tipp-Kategorien.
const tippKategorien: { key: keyof Tipps; icon: string; label: string }[] = [
  { key: 'konzept', icon: '💡', label: 'Konzept verstehen' },
  { key: 'vorgehen', icon: '🔍', label: 'Vorgehensweise' },
  { key: 'syntax', icon: '📝', label: 'Syntax / Beispiel' },
  { key: 'fehler', icon: '⚠️', label: 'Häufige Fehler' },
]

export default function Uebungsblaetter() {
  const [selectedId, setSelectedId] = useState(uebungsblaetter[0]?.id ?? '')
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [openTipps, setOpenTipps] = useState<Set<string>>(new Set())
  const [openTippCats, setOpenTippCats] = useState<Set<string>>(new Set())
  const { done, toggle: toggleDone, ratio } = useDoneTracker()

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  const toggleTipp = (key: string) => {
    setOpenTipps(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const toggleTippCat = (key: string) => {
    setOpenTippCats(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const toggleSolution = (key: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const taskKeys = blatt ? blatt.aufgaben.map(t => `${blatt.id}-${t.nr}`) : []
  const verstanden = taskKeys.filter(k => done.has(k)).length
  const pct = Math.round(ratio(taskKeys) * 100)

  return (
    <div>
      <div className="section-header">
        <h2>Übungsblätter</h2>
        <p>Aufgaben und Musterlösungen nach Übungsblatt geordnet.</p>
      </div>

      {uebungsblaetter.length > 1 && (
        <div className="filter-row">
          {uebungsblaetter.map(b => (
            <button
              type="button"
              key={b.id}
              className={`filter-btn${selectedId === b.id ? ' on' : ''}`}
              onClick={() => setSelectedId(b.id)}
            >
              {b.titel ?? `Blatt ${b.nr}`}
            </button>
          ))}
        </div>
      )}

      {blatt && (
        <>
          <div className="ub-header card">
            <div className="ub-meta-row">
              <span className="ub-badge">{blatt.typ}</span>
            </div>
            <h3 className="ub-title">{blatt.titel ?? `Übungsblatt ${blatt.nr}`}</h3>
            {blatt.beschreibung && (
              <p className="ub-desc">{blatt.beschreibung}</p>
            )}
            {taskKeys.length > 0 && (
              <>
                <div className="progress-wrap" style={{ marginTop: '0.75rem' }}>
                  <div className="progress-bar" style={{ '--bar-w': `${pct}%` } as CSSProperties} />
                </div>
                <p className="ub-desc" style={{ marginTop: '0.4rem' }}>
                  {verstanden} / {taskKeys.length} Aufgaben verstanden ({pct}%)
                </p>
              </>
            )}
          </div>

          {blatt.aufgaben.map(task => {
            const aufgabe = alleAufgaben.find(a => a.id === task.aufgabeId)
            const key = `${blatt.id}-${task.nr}`
            const isOpen = openIds.has(key)
            const isTippOpen = openTipps.has(key)
            const isDone = done.has(key)

            return (
              <div key={key} className="card">
                <p className="ub-task-nr">Aufgabe {task.nr}</p>
                <FormelText className="q-title" text={task.text ?? aufgabe?.aufgabeText ?? ''} />
                {aufgabe && (
                  <>
                    {aufgabe.tipp && (
                      <>
                        <button type="button" className="toggle-btn toggle-btn--tips" onClick={() => toggleTipp(key)}>
                          {isTippOpen ? '▼ Tipp verbergen' : '▶ Tipp anzeigen'}
                        </button>
                        {isTippOpen && (
                          <div className="tipp-block">
                            {tippKategorien.map(kat => {
                              const val = aufgabe.tipp?.[kat.key]
                              if (!val) return null
                              const catKey = `${key}::${kat.key}`
                              const catOpen = openTippCats.has(catKey)
                              return (
                                <div key={kat.key} className={`tipp-cat${catOpen ? ' open' : ''}`}>
                                  <button
                                    type="button"
                                    className="tipp-cat-head"
                                    onClick={() => toggleTippCat(catKey)}
                                    aria-expanded={catOpen}
                                  >
                                    <span className="tipp-cat-icon">{kat.icon}</span>
                                    <span className="tipp-cat-label">{kat.label}</span>
                                    <span className="tipp-cat-caret">{catOpen ? '▾' : '▸'}</span>
                                  </button>
                                  {catOpen && <p className="tipp-cat-text"><FormelText text={val} /></p>}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </>
                    )}
                    <button type="button" className="toggle-btn" onClick={() => toggleSolution(key)}>
                      {isOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                    </button>
                    {isOpen && (
                      <pre className="sql-block visible">{aufgabe.loesung}</pre>
                    )}
                  </>
                )}
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => toggleDone(key)}
                  style={isDone ? { color: 'var(--green, #2ea043)', borderColor: 'var(--green, #2ea043)' } : undefined}
                >
                  {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
                </button>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

