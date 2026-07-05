import { lazy, Suspense } from 'react'
import FormelText from './components/FormelText'
import { Header, GlobalSearch, Tabs, tabDefs, STANDARD_TAB_REIHENFOLGE, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { dateienTree } from './data/dateien'

const Uebungsblaetter = lazy(() => import('./components/Uebungsblaetter'))
const Formeln = lazy(() => import('./components/Formeln'))
const Drucken = lazy(() => import('./components/Drucken'))
const Quiz = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Quiz })))
const Flashcards = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Flashcards })))
const Moodle = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Moodle })))

// Tab-IDs, -Reihenfolge und -Icons sind über alle Lernseiten vereinheitlicht;
// die Tab-Leiste kommt zentral aus lernseiten-ui (tabDefs).
const TABS = STANDARD_TAB_REIHENFOLGE
export type TabId = (typeof TABS)[number]
const tabs = tabDefs(TABS)

// Alte Tab-Hashes auf die vereinheitlichten IDs umleiten (Lesezeichen/Deep-Links).
const LEGACY_TABS: Record<string, TabId> = { formeln: 'referenz', drucken: 'hilfsmittel' }
if (typeof window !== 'undefined') {
  const teile = window.location.hash.replace(/^#/, '').split('/')
  const neu = LEGACY_TABS[teile[0]]
  if (neu) {
    teile[0] = neu
    history.replaceState(null, '', '#' + teile.join('/'))
  }
}

function App() {
  const [activeTab, setActiveTab] = useHashTab(TABS, 'uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header
        logo={<>BWL<span>.</span>1</>}
        subtitle="Allgemeine Betriebswirtschaftslehre I — Übungsfragen mit Lösungen"
        current="bwl"
        theme={theme}
        onToggleTheme={toggle}
      />
      <div className="container">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch loadIndex={() => import('./data/searchIndex').then(m => m.searchIndex)} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          {activeTab === 'referenz' && <Formeln />}
          {activeTab === 'hilfsmittel' && <Drucken />}
          {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
          {activeTab === 'uebung' && <Uebungsblaetter />}
          {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
          {activeTab === 'karten' && (
            <Flashcards cards={karteikarten} render={text => <FormelText text={text} />} />
          )}
        </Suspense>
      </div>
    </>
  )
}

export default App
