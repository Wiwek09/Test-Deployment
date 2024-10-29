// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();

//   // Check if the user is at the root route
//   if (url.pathname === "/") {
//     url.pathname = "/dashboard";
//     return NextResponse.redirect(url);
//   }

//   // Continue with other requests
//   return NextResponse.next();
// }

// By GPT:
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Don't redirect during build/static generation
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PHASE === "phase-production-build"
  ) {
    return NextResponse.next();
  }

  // Check if the user is at the root route
  if (url.pathname === "/") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
