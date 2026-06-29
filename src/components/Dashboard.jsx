import CircularProgress from './CircularProgress.jsx'
import { useIsMobile } from '../hooks/useIsMobile.js'

const colorMap = {
  success: 'var(--success)',
  warning: 'var(--warning)',
  accent:  'var(--accent)',
  danger:  'var(--danger)',
}
const dimMap = {
  success: 'var(--success-dim)',
  warning: 'var(--warning-dim)',
  accent:  'var(--accent-dim)',
}

function MetricCard({ label, value, color, delay = 0 }) {
  return (
    <div className={`animate-fade-up stagger-${delay}`} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '1rem 1.25rem',
      transition: 'var(--transition)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--bg-card-hover)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
    >
      <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>{label}</p>
      <p style={{ fontSize: 22, fontWeight: 600, fontFamily: 'var(--font-display)', color: color || 'var(--text-1)' }}>{value}</p>
    </div>
  )
}

export default function Dashboard({ client }) {
  const isMobile = useIsMobile()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div className="animate-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 22, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>
          {greeting}, {client.name.split(' ')[0]} 👋
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 13 }}>
          {client.project} · <span style={{ color: client.color }}>{client.eta}</span>
        </p>
      </div>

      {/* Circular progress — mobile: centered on top; desktop: side by side */}
      {isMobile ? (
        <div className="animate-fade-up stagger-1" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}>
          <CircularProgress value={client.progress} color={client.color} size={120} />
          <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Progreso general</p>
        </div>
      ) : null}

      {/* Metrics grid */}
      <div style={{
        display: isMobile ? 'grid' : 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
        gap: '0.75rem',
      }}>
        {!isMobile && (
          // Desktop: metrics left + circular right
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', gridColumn: '1' }}>
              <MetricCard label="Estado actual"      value={client.status}                              color={colorMap[client.statusColor]} delay={1} />
              <MetricCard label="Tareas"             value={`${client.tasks.done}/${client.tasks.total}`} color="var(--success)" delay={2} />
              <MetricCard label="Entrega estimada"   value={client.eta}                                 color="var(--text-1)"  delay={3} />
              <MetricCard label="Fase actual"        value={client.stages.find(s => s.active)?.label || 'Completado'} color={client.color} delay={4} />
            </div>
            <div className="animate-fade-up stagger-2" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
            }}>
              <CircularProgress value={client.progress} color={client.color} size={130} />
              <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Progreso general</p>
            </div>
          </>
        )}
        {isMobile && (
          <>
            <MetricCard label="Estado"   value={client.status}                                color={colorMap[client.statusColor]} delay={1} />
            <MetricCard label="Tareas"   value={`${client.tasks.done}/${client.tasks.total}`} color="var(--success)" delay={2} />
            <MetricCard label="Entrega"  value={client.eta}                                   color="var(--text-1)"  delay={3} />
            <MetricCard label="Fase"     value={client.stages.find(s => s.active)?.label || 'Completado'} color={client.color} delay={4} />
          </>
        )}
      </div>

      {/* Stages */}
      <div className="animate-fade-up stagger-3" style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
      }}>
        <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>Etapas del proyecto</p>
        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
          {client.stages.map((s, i) => (
            <div key={i} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: s.done ? client.color : s.active ? `${client.color}44` : 'var(--border)',
              transition: 'background 0.3s ease',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {client.stages.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: s.done ? client.color : s.active ? 'var(--text-2)' : 'var(--text-3)' }}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Latest updates */}
      <div className="animate-fade-up stagger-4">
        <p style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Últimas novedades</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {client.updates.slice(0, 3).map((u, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              transition: 'var(--transition)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: colorMap[u.type], flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 13, color: 'var(--text-1)' }}>{u.text}</span>
              <span style={{ fontSize: 11, color: 'var(--text-3)', flexShrink: 0 }}>{u.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
