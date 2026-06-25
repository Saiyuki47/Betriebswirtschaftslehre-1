import { useEffect, useRef, useState } from 'react'
import { formelGruppen } from '../data/formeln'

const formelId = (gi: number, fi: number) => `formel-${gi}-${fi}`

export default function Formeln() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string>('')
  const contentRef = useRef<HTMLDivElement>(null)

  // Scrollspy: markiert den gerade sichtbaren Eintrag im Inhaltsverzeichnis.
  useEffect(() => {
    const cards = contentRef.current?.querySelectorAll<HTMLElement>('.formel-card')
    if (!cards || cards.length === 0) return
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length === 0) return
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        setActiveId(visible[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px', threshold: 0 },
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  return (
    <div>
      <div className="section-header">
        <h2>Formeln</h2>
        <p>Alle Kennzahlen-Formeln mit Erklärung und Rechenbeispielen.</p>
      </div>

      <div className="formeln-layout">
        <aside className="formel-toc" aria-label="Inhaltsverzeichnis">
          <nav>
            {formelGruppen.map((gruppe, gi) => (
              <div key={gruppe.titel} className="formel-toc-gruppe">
                <div className="formel-toc-gruppe-titel">{gruppe.titel}</div>
                <ul>
                  {gruppe.formeln.map((formel, fi) => {
                    const id = formelId(gi, fi)
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`formel-toc-link${activeId === id ? ' active' : ''}`}
                          onClick={e => handleNav(e, id)}
                        >
                          {formel.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div className="formel-content" ref={contentRef}>
          {formelGruppen.map((gruppe, gi) => (
            <section key={gruppe.titel} className="formel-gruppe">
              <h3 className="formel-gruppe-titel">{gruppe.titel}</h3>

              {gruppe.formeln.map((formel, fi) => {
                const id = formelId(gi, fi)
                const isOpen = openIds.has(id)
                return (
                  <div key={id} id={id} className="card formel-card">
                    <div className="formel-kopf">
                      <h4 className="formel-name">{formel.name}</h4>
                      {formel.kuerzel && <span className="formel-kuerzel">{formel.kuerzel}</span>}
                    </div>

                    <div className="formel-main">{formel.formel}</div>

                    <p className="formel-erklaerung">{formel.erklaerung}</p>

                    {formel.varianten && formel.varianten.length > 0 && (
                      <ul className="formel-varianten">
                        {formel.varianten.map(v => (
                          <li key={v}>{v}</li>
                        ))}
                      </ul>
                    )}

                    <button
                      type="button"
                      className="toggle-btn"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Beispiele ausblenden' : `Beispiele anzeigen (${formel.beispiele.length})`}
                    </button>

                    {isOpen && (
                      <div className="formel-beispiele">
                        {formel.beispiele.map((bsp, i) => (
                          <div key={`${id}-bsp-${i}`} className="formel-beispiel">
                            <div className="formel-bsp-label">Beispiel {i + 1}</div>
                            <div className="formel-bsp-zeile">
                              <span className="formel-bsp-tag">Gegeben</span>
                              <span>{bsp.gegeben}</span>
                            </div>
                            <div className="formel-bsp-zeile">
                              <span className="formel-bsp-tag">Rechnung</span>
                              <span className="formel-bsp-rechnung">{bsp.rechnung}</span>
                            </div>
                            <div className="formel-bsp-zeile">
                              <span className="formel-bsp-tag formel-bsp-tag--erg">Ergebnis</span>
                              <span className="formel-bsp-ergebnis">{bsp.ergebnis}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
