import { lazy, Suspense } from 'react'
import { useHashSubTab } from 'lernseiten-ui'
import Formeln from './Formeln'

// Zweites Hash-Segment (#referenz/<sub>) steuert den Untertab. „referenz" ist der
// Fallback – dadurch landen die Aufgaben-Deep-Links (#referenz/<kartenId>)
// weiterhin in der bestehenden Referenz-Ansicht (<Formeln/>) und scrollen dort
// zur Karte. Die eigene Untertab-Umschaltung von Formeln (Ausführlich /
// Stichpunkte / Formeln / Vorlesungsfolien) bleibt davon unberührt.
const Klausurfallen = lazy(() => import('./Klausurfallen'))
const SUBS = ['referenz', 'fallen'] as const

const TABS: { id: (typeof SUBS)[number]; label: string }[] = [
  { id: 'referenz', label: '📖 Themen & Formeln' },
  { id: 'fallen', label: '⚠️ Klausur-Fallen' },
]

export default function Referenz() {
  const [sub, setSub] = useHashSubTab(SUBS, 'referenz')
  return (
    <div>
      <div className="hilf-fs-switch" role="tablist" aria-label="Referenz-Ansicht wählen">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={sub === t.id}
            className={`hilf-fs-tab${sub === t.id ? ' active' : ''}`}
            onClick={() => setSub(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {sub === 'fallen' ? (
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          <Klausurfallen />
        </Suspense>
      ) : (
        <Formeln />
      )}
    </div>
  )
}
