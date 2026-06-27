import Header from './components/Header'
import Tabs from './components/Tabs'
import Schema from './components/Schema'
import Formeln from './components/Formeln'
import Drucken from './components/Drucken'
import Uebungsblaetter from './components/Uebungsblaetter'
import Moodle from './components/Moodle'
import { Quiz, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'

export type TabId = 'uebung' | 'themen' | 'formeln' | 'drucken' | 'moodle' | 'quiz'

const TABS: readonly TabId[] = ['uebung', 'themen', 'formeln', 'drucken', 'moodle', 'quiz']

function App() {
  const [activeTab, setActiveTab] = useHashTab(TABS, 'uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <div className="container">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'themen' && <Schema />}
        {activeTab === 'formeln' && <Formeln />}
        {activeTab === 'drucken' && <Drucken />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'moodle' && <Moodle />}
      </div>
    </>
  )
}

export default App
