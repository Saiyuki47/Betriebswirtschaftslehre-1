import { useState, useMemo, useReducer, type CSSProperties } from 'react'
// eslint-disable-next-line react-doctor/no-flush-sync -- offizielles React-Muster: flushSync + scrollIntoView, um nach dem Ansichtswechsel sofort zur Ziel-Aufgabe zu scrollen
import { flushSync } from 'react-dom'
import { useDoneTracker, useTaskDeepLink, getHashDetail, setHashDetail, OffeneAufgaben, type OffenItem } from 'lernseiten-ui'
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

// Die drei Aufklapp-Zustände (Lösungen, Tipps, Tipp-Kategorien) teilen sich
// dieselbe Toggle-Logik und werden in einem Reducer gebündelt.
type OpenGroup = 'sol' | 'tipp' | 'tippCat'
type OpenState = Record<OpenGroup, Set<string>>

function openReducer(state: OpenState, action: { group: OpenGroup; key: string }): OpenState {
  const next = new Set(state[action.group])
  if (next.has(action.key)) next.delete(action.key)
  else next.add(action.key)
  return { ...state, [action.group]: next }
}

export default function Uebungsblaetter() {
  const [selectedId, setSelectedId] = useState(() => {
    const b = getHashDetail().blatt
    return b && uebungsblaetter.some(x => x.id === b) ? b : (uebungsblaetter[0]?.id ?? '')
  })
  const [openState, toggleOpen] = useReducer(openReducer, { sol: new Set<string>(), tipp: new Set<string>(), tippCat: new Set<string>() })
  const openIds = openState.sol
  const openTipps = openState.tipp
  const openTippCats = openState.tippCat
  const [view, setView] = useState<'blatt' | 'offen'>('blatt')
  const { done, toggle: toggleDone, ratio } = useDoneTracker()
  const listRef = useTaskDeepLink<HTMLDivElement>(selectedId)

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  // Alle noch nicht als „verstanden" markierten Aufgaben (über alle Blätter).
  const offen = useMemo<OffenItem[]>(() => {
    const out: OffenItem[] = []
    for (const b of uebungsblaetter)
      for (const t of b.aufgaben) {
        const key = `${b.id}-${t.nr}`
        if (!done.has(key)) {
          out.push({ key, blattId: b.id, blattLabel: b.titel ?? `Blatt ${b.nr}`, aufgabeNr: String(t.nr), label: `Aufgabe ${t.nr}` })
        }
      }
    return out
  }, [done])

  // Aus der „Noch offen"-Liste zur Aufgabe zurückspringen: Blatt wählen + Ansicht
  // synchron umschalten (flushSync), dann steht die Karte im DOM → direkt scrollen.
  const goToTask = (blattId: string, aufgabeNr: string) => {
    flushSync(() => {
      setSelectedId(blattId)
      setView('blatt')
    })
    setHashDetail(blattId, aufgabeNr, 'uebung')
    listRef.current?.querySelector(`[data-aufgabe="${aufgabeNr}"]`)?.scrollIntoView({ block: 'start' })
  }

  const toggleTipp = (key: string) => toggleOpen({ group: 'tipp', key })
  const toggleTippCat = (key: string) => toggleOpen({ group: 'tippCat', key })
  const toggleSolution = (key: string) => toggleOpen({ group: 'sol', key })

  const taskKeys = blatt ? blatt.aufgaben.map(t => `${blatt.id}-${t.nr}`) : []
  const verstanden = taskKeys.filter(k => done.has(k)).length
  const pct = Math.round(ratio(taskKeys) * 100)

  return (
    <div>
      <div className="section-header">
        <h2>Übungsblätter</h2>
        <p>Aufgaben und Musterlösungen nach Übungsblatt geordnet.</p>
      </div>

      <div className="filter-row" style={{ marginBottom: '0.6rem' }}>
        <button
          type="button"
          className={`filter-btn${view === 'blatt' ? ' on' : ''}`}
          onClick={() => setView('blatt')}
        >
          📚 Nach Blatt
        </button>
        <button
          type="button"
          className={`filter-btn${view === 'offen' ? ' on' : ''}`}
          onClick={() => setView('offen')}
        >
          📌 Noch offen{offen.length ? ` (${offen.length})` : ''}
        </button>
      </div>

      {view === 'offen' ? (
        <OffeneAufgaben items={offen} onGo={goToTask} />
      ) : (
        <>
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

          <div ref={listRef}>
            {blatt.aufgaben.map(task => {
              const aufgabe = alleAufgaben.find(a => a.id === task.aufgabeId)
              const key = `${blatt.id}-${task.nr}`
              const isOpen = openIds.has(key)
              const isTippOpen = openTipps.has(key)
              const isDone = done.has(key)

              return (
                <div key={key} className="card" data-aufgabe={String(task.nr)}>
                <p className="ub-task-nr">Aufgabe {task.nr}</p>
                <FormelText className="q-title" text={task.text ?? aufgabe?.aufgabeText ?? ''} />
                {aufgabe && (
                  <>
                    {aufgabe.tipp && (
                      <div className="ub-hints-section">
                        <button type="button" className="toggle-btn toggle-btn--hint" onClick={() => toggleTipp(key)}>
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
                      </div>
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
                  className={`toggle-btn${isDone ? ' done' : ''}`}
                  onClick={() => toggleDone(key)}
                >
                  {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
                </button>
                </div>
              )
            })}
          </div>
        </>
      )}
        </>
      )}
    </div>
  )
}

