import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { formelGruppen } from '../data/formeln'
import FormelText from './FormelText'

// ---------------------------------------------------------------------------
// Drucken-Tab mit zwei Modi:
//   • Lernzettel  – Schneide-Karten (4 Formeln/Seite, senkrecht)
//   • Spickzettel – kompakte Formelsammlung (alle Kennzahlen auf A4)
// Beide nutzen BWLs vorhandenes Druck-CSS (@media print blendet header/.tabs/
// .no-print aus). Es wird immer nur der aktive Modus gerendert → sauberer Druck.
// ---------------------------------------------------------------------------

// Alle Formeln flach (mit Gruppenname), in 4er-Gruppen pro Druckseite (2×2-Raster).
const alleFormeln = formelGruppen.flatMap(gruppe =>
  gruppe.formeln.map(formel => ({ ...formel, gruppe: gruppe.titel })),
)
const seiten: (typeof alleFormeln)[] = []
for (let i = 0; i < alleFormeln.length; i += 4) {
  seiten.push(alleFormeln.slice(i, i + 4))
}

function LernzettelView() {
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

function SpickzettelView() {
  useEffect(() => injectSpickCss(), [])
  return (
    <div>
      <div className="print-toolbar no-print">
        <div className="section-header">
          <h2>Spickzettel drucken</h2>
          <p>
            Kompakte Formelsammlung mit allen BWL-Kennzahlen auf einem Blatt – ideal als Spickzettel
            zum Ausdrucken. Tipp: im Druckdialog „Hintergrundgrafiken" aktivieren.
          </p>
        </div>
        <button type="button" className="nav-btn" onClick={() => window.print()}>
          Drucken
        </button>
      </div>

      <div className="spick-print">
        <div className="spick-head">
          <span>BWL 1 — Kennzahlen-Spickzettel</span>
        </div>
        <div className="spick-cols">
          {formelGruppen.map(gruppe => (
            <div className="spick-box" key={gruppe.titel}>
              <div className="spick-box-title">{gruppe.titel}</div>
              {gruppe.formeln.map(formel => (
                <div className="spick-row" key={formel.name}>
                  <span className="spick-name">
                    {formel.name}
                    {formel.kuerzel ? ` (${formel.kuerzel})` : ''}:{' '}
                  </span>
                  <FormelText text={formel.formel.split('\n')[0]} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Drucken() {
  const [modus, setModus] = useState<'lernzettel' | 'spickzettel'>('lernzettel')
  return (
    <div>
      <div className="filter-row no-print" style={{ marginBottom: '1.25rem' }}>
        <button
          type="button"
          className={`filter-btn${modus === 'lernzettel' ? ' on' : ''}`}
          onClick={() => setModus('lernzettel')}
        >
          📇 Lernzettel (Schneide-Karten)
        </button>
        <button
          type="button"
          className={`filter-btn${modus === 'spickzettel' ? ' on' : ''}`}
          onClick={() => setModus('spickzettel')}
        >
          📄 Spickzettel (Formelsammlung)
        </button>
      </div>
      {modus === 'lernzettel' ? <LernzettelView /> : <SpickzettelView />}
    </div>
  )
}

// Spickzettel-Styles (weißes Papier, dichte 3-Spalten-Boxen). currentColor des
// Bruchstrichs folgt color:#111 → schwarz auf weiß. Druck nutzt BWLs @media print.
const SPICK_CSS = `
.spick-print{background:#fff;color:#111;border:1px solid var(--border);border-radius:8px;padding:8mm;max-width:210mm;margin:0 auto;box-sizing:border-box}
.spick-head{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#555;border-bottom:1px solid #ccc;padding-bottom:4px;margin-bottom:8px}
.spick-cols{column-count:3;column-gap:6mm}
@media(max-width:760px){.spick-cols{column-count:2}}
@media(max-width:480px){.spick-cols{column-count:1}}
.spick-box{break-inside:avoid;-webkit-column-break-inside:avoid;border:1px solid #ddd;border-radius:6px;padding:5px 8px 6px;margin:0 0 6px}
.spick-box-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:#0a7d3b;margin-bottom:4px}
.spick-row{font-size:11px;line-height:1.5;margin:3px 0;color:#111}
.spick-name{font-weight:600;color:#333}
.spick-print .frac-den{border-top-color:#111}
@media print{.spick-print{border:none;border-radius:0;max-width:none;padding:0}.spick-box{break-inside:avoid}}
`

function injectSpickCss() {
  if (typeof document === 'undefined') return
  if (document.getElementById('bwl-spick-css')) return
  const s = document.createElement('style')
  s.id = 'bwl-spick-css'
  s.textContent = SPICK_CSS
  document.head.appendChild(s)
}
