import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Accept either the legacy `admin_auth` flag, the new `admin_token` cookie,
  // or a Bearer token in Authorization header.
  // Check for JWT cookie, legacy flag, or Authorization header
  const token = req.cookies.get("admin_token")?.value;
  const legacy = req.cookies.get("admin_auth")?.value;
  const authHeader = req.headers.get("authorization") || "";

  if (
    !token &&
    legacy !== "true" &&
    !authHeader.startsWith("Bearer ") &&
    req.nextUrl.pathname.startsWith("/admin/dashboard")
  ) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
