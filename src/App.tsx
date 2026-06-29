import { lazy, Suspense } from 'react'
import Tabs from './components/Tabs'
import FormelText from './components/FormelText'
import { Header, GlobalSearch, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { dateienTree } from './data/dateien'

const Uebungsblaetter = lazy(() => import('./components/Uebungsblaetter'))
const Formeln = lazy(() => import('./components/Formeln'))
const Drucken = lazy(() => import('./components/Drucken'))
const Quiz = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Quiz })))
const Flashcards = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Flashcards })))
const Moodle = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Moodle })))

export type TabId = 'uebung' | 'formeln' | 'drucken' | 'moodle' | 'quiz' | 'karten'

const TABS: readonly TabId[] = ['uebung', 'formeln', 'drucken', 'moodle', 'quiz', 'karten']

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
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch loadIndex={() => import('./data/searchIndex').then(m => m.searchIndex)} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          {activeTab === 'formeln' && <Formeln />}
          {activeTab === 'drucken' && <Drucken />}
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
