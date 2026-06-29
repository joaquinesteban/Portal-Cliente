const colorMap = {
  success: 'var(--success)',
  warning: 'var(--warning)',
  accent:  'var(--accent)',
}

export default function Updates({ client }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="animate-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>
          Historial de updates
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 13 }}>Todas las novedades del proyecto ordenadas por fecha</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
        {/* vertical line */}
        <div style={{ position: 'absolute', left: 19, top: 12, bottom: 12, width: 1, background: 'var(--border)' }} />

        {client.updates.map((u, i) => (
          <div key={i} className={`animate-fade-up stagger-${i + 1}`} style={{
            display: 'flex', alignItems: 'flex-start', gap: 16,
            paddingBottom: 20,
            position: 'relative',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
              background: `${colorMap[u.type]}18`,
              border: `1px solid ${colorMap[u.type]}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: colorMap[u.type] }} />
            </div>
            <div style={{
              flex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 16px',
              transition: 'var(--transition)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--text-1)', fontWeight: 500 }}>{u.text}</span>
                <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 12, flexShrink: 0 }}>{u.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
