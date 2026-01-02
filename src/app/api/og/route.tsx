import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get dynamic parameters
    const title = searchParams.get('title') || 'Illia Polovynko';
    const subtitle =
      searchParams.get('subtitle') || 'Senior Automation QA Engineer | SDET';

    const fontData = await fetch(
      'https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf/JetBrainsMono-Bold.ttf'
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2a2a2a',
            fontFamily: 'JetBrains Mono',
          }}
        >
          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 80px',
            }}
          >
            {/* Name/Title */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 20,
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 36,
                color: '#2783CF',
                marginBottom: 40,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Website */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 24,
              color: '#94a3b8',
            }}
          >
            yoypolkin.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'JetBrains Mono',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    if (e instanceof Error && e.message) console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
