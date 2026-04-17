import { NextResponse } from "next/server"
import NextAuth from "next-auth"

import authConfig from "@/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { pathname } = req.nextUrl
  if (pathname.startsWith("/dashboard") && !req.auth) {
    const url = new URL("/login", req.nextUrl)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/dashboard/:path*"],
}
