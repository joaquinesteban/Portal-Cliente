import { PieChart, Pie, Cell } from 'recharts'

export default function CircularProgress({ value, color = '#7c6cfc', size = 140 }) {
  const data = [
    { value },
    { value: 100 - value },
  ]

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx={size / 2 - 1}
          cy={size / 2 - 1}
          innerRadius={size * 0.36}
          outerRadius={size * 0.46}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          strokeWidth={0}
        >
          <Cell fill={color} />
          <Cell fill="rgba(255,255,255,0.05)" />
        </Pie>
      </PieChart>
      <div style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}>
        <span style={{ fontSize: size * 0.2, fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif', color, lineHeight: 1 }}>
          {value}%
        </span>
        <span style={{ fontSize: size * 0.09, color: 'var(--text-2)', letterSpacing: '0.04em' }}>completo</span>
      </div>
    </div>
  )
}
