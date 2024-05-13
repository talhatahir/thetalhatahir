const handler = async () => {
  const res = await fetch('https://ghchart.rshah.org/178941/talhatahir', {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })

  const svgText = await res.text()

  return new Response(svgText, {
    status: 200,
  })
}

export { handler as GET }
