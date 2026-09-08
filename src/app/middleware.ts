import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const isMaintenancePage = req.nextUrl.pathname === "/maintenance";
  const isStaticAsset =
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.startsWith("/static");

  if (isMaintenance && !isMaintenancePage && !isStaticAsset) {
    const url = req.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
