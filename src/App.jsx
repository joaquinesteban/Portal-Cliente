import { useState } from 'react'
import { clients } from './data/clients.js'
import { useIsMobile } from './hooks/useIsMobile.js'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Updates from './components/Updates.jsx'
import Docs from './components/Docs.jsx'
import Automations from './components/Automations.jsx'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [activeClientId, setActiveClientId] = useState(1)
  const isMobile = useIsMobile()

  const activeClient = clients.find(c => c.id === activeClientId)

  const handleClientChange = (id) => {
    setActiveClientId(id)
    setActivePage('dashboard')
  }

  const pages = {
    dashboard:   <Dashboard    key={activeClientId + 'dash'}  client={activeClient} />,
    updates:     <Updates      key={activeClientId + 'upd'}   client={activeClient} />,
    docs:        <Docs         key={activeClientId + 'docs'}  client={activeClient} />,
    automations: <Automations  key={activeClientId + 'auto'}  client={activeClient} />,
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        activeClient={activeClient}
        clients={clients}
        onClientChange={handleClientChange}
      />
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: isMobile ? '70px 1rem 80px' : '2rem',
        background: 'var(--bg-base)',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {pages[activePage]}
        </div>
      </main>
    </div>
  )
}
