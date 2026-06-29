const colorMap = {
  success: 'var(--success)',
  warning: 'var(--warning)',
  accent:  'var(--accent)',
}
const dimMap = {
  success: 'var(--success-dim)',
  warning: 'var(--warning-dim)',
  accent:  'var(--accent-dim)',
}

export default function Automations({ client }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="animate-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>
          Automatizaciones
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 13 }}>Procesos activos del proyecto</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {client.automations.map((a, i) => (
          <div key={i} className={`animate-fade-up stagger-${i + 1}`} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            transition: 'var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--bg-card-hover)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                background: dimMap[a.type],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>⚙</div>
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)' }}>{a.name}</span>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '4px 12px', borderRadius: 20,
              fontSize: 11, fontWeight: 500,
              background: dimMap[a.type],
              color: colorMap[a.type],
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: colorMap[a.type], display: 'inline-block',
                animation: a.type === 'success' ? 'pulse 2s infinite' : 'none'
              }} />
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
