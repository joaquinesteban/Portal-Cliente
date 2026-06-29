import { useIsMobile } from '../hooks/useIsMobile.js'

export default function Docs({ client }) {
  const isMobile = useIsMobile()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="animate-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 22, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>
          Documentos
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 13 }}>Todos los archivos del proyecto en un solo lugar</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.75rem' }}>
        {client.docs.map((doc, i) => (
          <div key={i} className={`animate-fade-up stagger-${i + 1}`} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = client.color + '55'; e.currentTarget.style.background = 'var(--bg-card-hover)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-sm)',
              background: `${client.color}18`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0,
            }}>
              {doc.icon}
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', marginBottom: 2 }}>{doc.name}</p>
              <p style={{ fontSize: 11, color: 'var(--text-3)' }}>{doc.size}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-3" style={{
        padding: '14px 16px',
        background: `${client.color}08`,
        border: `1px dashed ${client.color}33`,
        borderRadius: 'var(--radius-md)',
        textAlign: 'center',
        cursor: 'pointer',
        color: client.color,
        fontSize: 13,
        transition: 'var(--transition)',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = `${client.color}14` }}
        onMouseLeave={e => { e.currentTarget.style.background = `${client.color}08` }}
      >
        + Subir nuevo documento
      </div>
    </div>
  )
}
