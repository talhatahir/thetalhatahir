import { cookies } from 'next/headers'
import { themes } from './constants'

export async function getThemeColor(): Promise<string> {
  const cookieStore = await cookies()
  const storedColor = cookieStore.get('themeColor')?.value

  if (storedColor && themes.some((t) => t.color === storedColor)) {
    return storedColor
  }

  // Generate a new random color
  const randomTheme = themes[Math.floor(Math.random() * themes.length)]
  return randomTheme.color
}
