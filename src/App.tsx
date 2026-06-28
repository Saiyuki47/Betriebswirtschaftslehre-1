import Tabs from './components/Tabs'
import Formeln from './components/Formeln'
import Drucken from './components/Drucken'
import Uebungsblaetter from './components/Uebungsblaetter'
import FormelText from './components/FormelText'
import { Header, Quiz, Flashcards, GlobalSearch, Moodle, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { searchIndex } from './data/searchIndex'
import { dateienTree } from './data/dateien'

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
          <GlobalSearch index={searchIndex} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        {activeTab === 'formeln' && <Formeln />}
        {activeTab === 'drucken' && <Drucken />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
        {activeTab === 'karten' && (
          <Flashcards cards={karteikarten} render={text => <FormelText text={text} />} />
        )}
      </div>
    </>
  )
}

export default App
