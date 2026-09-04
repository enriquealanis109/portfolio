import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Enrique Alanis — Full Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#09090B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              background: 'rgba(139,92,246,0.15)',
              border: '1px solid rgba(139,92,246,0.4)',
              borderRadius: '999px',
              padding: '6px 18px',
              color: '#a78bfa',
              fontSize: '18px',
              letterSpacing: '0.05em',
            }}
          >
            Full Stack Engineer
          </div>
          <div
            style={{
              background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.4)',
              borderRadius: '999px',
              padding: '6px 18px',
              color: '#4ade80',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
              }}
            />
            Open to Work
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            color: '#FAFAFA',
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Enrique Alanis
        </div>

        {/* Description */}
        <div
          style={{
            color: '#A1A1AA',
            fontSize: '26px',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Building complete web products for real clients. From design to production. Currently open to new opportunities.
        </div>

        {/* Stack pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Next.js', 'TypeScript', 'React', 'Supabase', 'Node.js'].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '8px 20px',
                color: '#E4E4E7',
                fontSize: '20px',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#52525B',
            fontSize: '20px',
          }}
        >
          enrique-alanis.vercel.app
        </div>
      </div>
    ),
    size
  )
}
