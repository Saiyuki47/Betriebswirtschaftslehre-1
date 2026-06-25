import { useLayoutEffect, useRef } from 'react'
import { formelGruppen } from '../data/formeln'

// Alle Formeln flach (mit Gruppenname), in 4er-Gruppen pro Druckseite (2×2-Raster).
const alleFormeln = formelGruppen.flatMap(gruppe =>
  gruppe.formeln.map(formel => ({ ...formel, gruppe: gruppe.titel })),
)

const seiten: (typeof alleFormeln)[] = []
for (let i = 0; i < alleFormeln.length; i += 4) {
  seiten.push(alleFormeln.slice(i, i + 4))
}

export default function Drucken() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Schriftgröße so verkleinern, dass jede Formel ohne Zeilenumbruch auf eine Zeile passt.
  useLayoutEffect(() => {
    const fit = (el: HTMLElement, maxPt: number, minPt: number) => {
      const frame = el.closest('.cut-card-frame') as HTMLElement | null
      if (!frame) return
      const avail = frame.clientHeight * 0.86
      el.style.fontSize = `${maxPt}pt`
      const len = el.getBoundingClientRect().height
      if (len > avail) {
        const next = Math.max(minPt, (maxPt * avail) / len)
        el.style.fontSize = `${next.toFixed(2)}pt`
      }
    }
    const run = () => {
      const root = rootRef.current
      if (!root) return
      root.querySelectorAll<HTMLElement>('.cut-name').forEach(el => fit(el, 16, 9))
      root.querySelectorAll<HTMLElement>('.cut-formel').forEach(el => fit(el, 15, 6))
    }
    run()
    document.fonts?.ready.then(run)
  }, [])

  return (
    <div ref={rootRef}>
      <div className="print-toolbar no-print">
        <div className="section-header">
          <h2>Lernzettel drucken</h2>
          <p>
            Jede Seite enthält 4 Formeln. Ausdrucken, an den gestrichelten Linien in vier Karten
            schneiden – die Formel steht senkrecht (von unten nach oben) und zentriert auf jeder
            Karte. Tipp: im Druckdialog die Ränder auf „Keine" und die Skalierung auf 100 % stellen.
          </p>
        </div>
        <button type="button" className="nav-btn" onClick={() => window.print()}>
          Drucken
        </button>
      </div>

      <div className="print-sheets">
        {seiten.map((seite, si) => (
          <div className="print-page" key={si}>
            {seite.map(formel => (
              <div className="cut-cell" key={formel.name}>
                <div className="cut-card-frame">
                  <div className="cut-card">
                    <span className="cut-gruppe">{formel.gruppe}</span>
                    <span className="cut-name">
                      {formel.name}
                      {formel.kuerzel ? ` (${formel.kuerzel})` : ''}
                    </span>
                    <span className="cut-formel">{formel.formel.split('\n')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
            {seite.length < 4 &&
              Array.from({ length: 4 - seite.length }).map((_, k) => (
                <div className="cut-cell cut-cell--empty" key={`empty-${k}`} />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
