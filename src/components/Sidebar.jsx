import { useIsMobile } from '../hooks/useIsMobile.js'

const navItems = [
  { id: 'dashboard',   label: 'Dashboard',       icon: '⬡' },
  { id: 'updates',     label: 'Updates',          icon: '◎' },
  { id: 'docs',        label: 'Documentos',       icon: '▤' },
  { id: 'automations', label: 'Automatiz.',       icon: '⚙' },
]

export default function Sidebar({ activePage, onNavigate, activeClient, clients, onClientChange }) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <>
        {/* Mobile top bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border)',
          padding: '10px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 28, height: 28,
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-glow)',
              borderRadius: 7,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14,
            }}>◈</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--text-1)' }}>
              ClientPortal
            </span>
          </div>
          <select
            value={activeClient.id}
            onChange={e => onClientChange(Number(e.target.value))}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-1)',
              borderRadius: 'var(--radius-sm)',
              padding: '5px 8px',
              fontSize: 12,
              cursor: 'pointer',
              outline: 'none',
              maxWidth: 150,
            }}
          >
            {clients.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Mobile bottom nav */}
        <nav style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 3,
                padding: '10px 4px',
                border: 'none',
                background: 'transparent',
                color: activePage === item.id ? 'var(--accent)' : 'var(--text-3)',
                cursor: 'pointer',
                fontSize: 10,
                fontFamily: 'var(--font-body)',
                transition: 'var(--transition)',
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </>
    )
  }

  // Desktop sidebar
  return (
    <aside style={{
      width: 220,
      background: 'var(--bg-surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 1rem',
      gap: '0.5rem',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem', padding: '0 0.25rem' }}>
        <div style={{
          width: 32, height: 32,
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-glow)',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>◈</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
          ClientPortal
        </span>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, padding: '0 0.25rem' }}>
          Cliente activo
        </p>
        <select
          value={activeClient.id}
          onChange={e => onClientChange(Number(e.target.value))}
          style={{
            width: '100%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--text-1)',
            borderRadius: 'var(--radius-sm)',
            padding: '7px 10px',
            fontSize: 13,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {clients.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activePage === item.id ? 'var(--accent-dim)' : 'transparent',
              color: activePage === item.id ? 'var(--accent)' : 'var(--text-2)',
              cursor: 'pointer',
              fontSize: 13,
              fontFamily: 'var(--font-body)',
              textAlign: 'left',
              transition: 'var(--transition)',
              fontWeight: activePage === item.id ? 500 : 400,
            }}
            onMouseEnter={e => { if (activePage !== item.id) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { if (activePage !== item.id) e.currentTarget.style.background = 'transparent' }}
          >
            <span style={{ fontSize: 16, opacity: 0.8 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: `linear-gradient(135deg, ${activeClient.color}33, ${activeClient.color}66)`,
            border: `1px solid ${activeClient.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 600, color: activeClient.color,
            flexShrink: 0,
          }}>
            {activeClient.initials}
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-1)' }}>{activeClient.name}</p>
            <p style={{ fontSize: 11, color: 'var(--text-3)' }}>{activeClient.company}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
