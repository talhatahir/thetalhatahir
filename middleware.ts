import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { themes } from './app/constants'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Check if themeColor cookie exists
  const themeColor = request.cookies.get('themeColor')?.value

  if (!themeColor || !themes.some((t) => t.color === themeColor)) {
    // Generate a new random color and set it as a cookie
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]
    response.cookies.set('themeColor', randomTheme.color, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static (public static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|static).*)',
  ],
}
