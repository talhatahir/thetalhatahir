import { type NextRequest } from 'next/server'

const handler = async (request: NextRequest) => {
  const color = request.nextUrl.searchParams.get('color')
  try {
    const res = await fetch(`https://www.gitch.art/api/og/talhatahir?color=${color}`, {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const svgText = await res.text()

    return new Response(svgText, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })
  } catch (error) {
    console.error('Error fetching contribution chart:', error)
    return new Response('Failed to load contribution chart', { status: 500 })
  }
}

export const revalidate = 64800 // 18 hours

export { handler as GET }
