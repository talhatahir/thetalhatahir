export const themes = [
  {
    name: 'GitHub',
    color: '2da44e',
  },
  {
    name: 'Ruby Red',
    color: 'e74c3c',
  },
  {
    name: 'Golden Sun',
    color: 'f1c40f',
  },
  {
    name: 'Electric Indigo',
    color: '6610f2',
  },
  {
    name: 'Midnight Blue',
    color: '2c3e50',
  },
  {
    name: 'Magenta',
    color: 'D81B60',
  },
]

const handler = async () => {
  try {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]

    const res = await fetch(`https://www.gitch.art/api/og/talhatahir?color=${randomTheme.color}`, {
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
