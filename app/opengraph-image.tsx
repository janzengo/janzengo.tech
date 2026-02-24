import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Janzen Go | Aspiring Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Janzen Go
        </div>
        <div
          style={{
            fontSize: 40,
            marginBottom: 40,
            opacity: 0.9,
            textAlign: 'center',
          }}
        >
          Aspiring Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Building robust and scalable server-side applications with a focus on security, performance, and clean architecture.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
