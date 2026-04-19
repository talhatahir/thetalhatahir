import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { themes } from './app/constants'

export function middleware(request: NextRequest) {
  const storedColor = request.cookies.get('themeColor')?.value
  const isValid = storedColor && themes.some((t) => t.color === storedColor)

  // Resolve the color once here — either from cookie or a fresh random pick
  const resolvedColor = isValid
    ? storedColor
    : themes[Math.floor(Math.random() * themes.length)].color

  // Forward the resolved color as a request header so layout.tsx and page.tsx
  // both read the same value within a single request (cookies() reads the
  // incoming request, so a new cookie set on the response isn't visible to
  // server components in the same render pass)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-theme-color', resolvedColor)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  // Persist to cookie for subsequent requests
  if (!isValid) {
    response.cookies.set('themeColor', resolvedColor, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
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
