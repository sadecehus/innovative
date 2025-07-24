import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Innovative Trademark - Modern Software Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Innovative Trademark
        </div>
        <div
          style={{
            color: '#a0a0a0',
            fontSize: 28,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Modern Software Solutions
        </div>
        <div
          style={{
            color: '#606060',
            fontSize: 20,
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Web Applications • VR Development • E-commerce • Digital Marketing
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
