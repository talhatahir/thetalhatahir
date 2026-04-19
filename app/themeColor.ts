import { headers } from 'next/headers'
import { themes } from './constants'

export async function getThemeColor(): Promise<string> {
  // Middleware resolves the color once per request and forwards it via
  // x-theme-color header. This ensures layout.tsx and page.tsx both get the
  // same color in the same render pass (reading from request cookies wouldn't
  // work because cookies set in the middleware response aren't visible to
  // server components until the next request).
  const headerStore = await headers()
  const color = headerStore.get('x-theme-color')

  if (color && themes.some((t) => t.color === color)) {
    return color
  }

  // Fallback — should never be hit in normal operation
  return themes[0].color
}
