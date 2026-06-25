import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Schema from './components/Schema'
import Formeln from './components/Formeln'
import Drucken from './components/Drucken'
import Quiz from './components/Quiz'
import Uebungsblaetter from './components/Uebungsblaetter'
import Moodle from './components/Moodle'
import { useTheme } from './hooks/useTheme'

export type TabId = 'themen' | 'formeln' | 'drucken' | 'quiz' | 'aufgaben' | 'moodle'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('aufgaben')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <div className="container">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'themen' && <Schema />}
        {activeTab === 'formeln' && <Formeln />}
        {activeTab === 'drucken' && <Drucken />}
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'aufgaben' && <Uebungsblaetter />}
        {activeTab === 'moodle' && <Moodle />}
      </div>
    </>
  )
}

export default App
