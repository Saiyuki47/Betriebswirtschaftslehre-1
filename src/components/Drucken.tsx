import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { formelGruppen } from '../data/formeln'
import { themenBilder } from '../data/themenBilder'
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

// Alle nachgebauten Themen-Abbildungen flach (mit Abschnitts-Titel + Folie),
// ebenfalls in 4er-Gruppen pro Druckseite (2×2-Raster).
const alleAbbildungen = Object.entries(themenBilder).flatMap(([titel, eintraege]) =>
  eintraege.map(e => ({ titel, bild: e.bild, seite: e.seite })),
)
const abbSeiten: (typeof alleAbbildungen)[] = []
for (let i = 0; i < alleAbbildungen.length; i += 4) {
  abbSeiten.push(alleAbbildungen.slice(i, i + 4))
}

function LernzettelView() {
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => injectFigCss(), [])

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
    // Tabellen-Abbildungen in natürlicher Breite rendern und passgenau in das
    // Viertel skalieren (statt sie hart umzubrechen) – SVGs skalieren via viewBox.
    const fitTable = (box: HTMLElement) => {
      const tbl = box.querySelector('table') as HTMLElement | null
      if (!tbl) return
      tbl.style.transform = 'none'
      const cw = tbl.offsetWidth
      const ch = tbl.offsetHeight
      if (!cw || !ch) return
      const scale = Math.min(box.clientWidth / cw, box.clientHeight / ch, 1)
      tbl.style.transformOrigin = 'center center'
      tbl.style.transform = scale < 1 ? `scale(${scale.toFixed(3)})` : 'none'
    }
    const run = () => {
      const root = rootRef.current
      if (!root) return
      root.querySelectorAll<HTMLElement>('.cut-name').forEach(el => fit(el, 16, 9))
      root.querySelectorAll<HTMLElement>('.cut-formel').forEach(el => fit(el, 15, 6))
      root.querySelectorAll<HTMLElement>('.cut-fig-bild').forEach(fitTable)
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
            Jede Seite enthält 4 Karten. Ausdrucken, an den gestrichelten Linien in vier Karten
            schneiden. Erst die Formel-Karten (Formel senkrecht, zentriert), danach die
            Themen-Abbildungen (eine Abbildung je Viertel). Tipp: im Druckdialog die Ränder auf
            „Keine", die Skalierung auf 100 % und „Hintergrundgrafiken" aktiviert lassen.
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

        {abbSeiten.map((seite, si) => (
          <div className="print-page" key={`abb-${si}`}>
            {seite.map(item => (
              <div className="cut-cell" key={`${item.titel}-${item.seite}`}>
                <div className="cut-card-frame">
                  <div className="cut-fig">
                    <div className="cut-fig-bild">{item.bild}</div>
                    <div className="cut-fig-cap">
                      <span className="cut-fig-titel">{item.titel}</span>
                      <span className="cut-fig-quelle">Folie {item.seite}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {seite.length < 4 &&
              Array.from({ length: 4 - seite.length }).map((_, k) => (
                <div className="cut-cell cut-cell--empty" key={`abb-empty-${k}`} />
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

// Abbildungs-Schneidekarten. Die nachgebauten SVGs/Tabellen nutzen Theme-Variablen
// (var(--text)/--blue/…); auf weißem Papier werden sie hier auf feste Druckfarben
// gesetzt, damit sie unabhängig vom Hell/Dunkel-Modus dunkel auf weiß erscheinen.
const FIG_CSS = `
.cut-fig{
  --text:#111;--text2:#3f3f46;--text3:#71717a;
  --blue:#1d4ed8;--blue-dim:#dbeafe;--green:#15803d;--green-dim:#dcfce7;
  --red:#b91c1c;--amber:#b45309;--bg:#fff;--bg2:#fff;--bg3:#f1f5f9;
  --border:#cbd5e1;--border2:#94a3b8;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:5mm;width:100%;height:100%;color:#111;box-sizing:border-box
}
.cut-fig-bild{width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
.cut-fig-bild svg{max-width:100%;max-height:100%;height:auto;width:auto}
.cut-fig-bild table{border-collapse:collapse;font-size:11px;line-height:1.3;max-width:620px}
.cut-fig-bild table caption{font-size:11px;color:#3f3f46;padding-bottom:2px}
.cut-fig-bild th,.cut-fig-bild td{border:1px solid #94a3b8;padding:2px 5px;vertical-align:top}
.cut-fig-cap{display:flex;flex-direction:column;align-items:center;gap:1mm;text-align:center;flex-shrink:0}
.cut-fig-titel{font-family:var(--font-sans);font-weight:700;font-size:10pt;color:#111;line-height:1.2}
.cut-fig-quelle{font-family:var(--font-sans);font-size:8pt;color:#666}
`

function injectFigCss() {
  if (typeof document === 'undefined') return
  if (document.getElementById('bwl-fig-css')) return
  const s = document.createElement('style')
  s.id = 'bwl-fig-css'
  s.textContent = FIG_CSS
  document.head.appendChild(s)
}
