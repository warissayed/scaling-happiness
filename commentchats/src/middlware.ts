import { NextResponse, NextRequest } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl.pathname;

  if (
    token &&
    (url.startsWith("/Login") ||
      url.startsWith("/Register") ||
      url.startsWith("/verify") ||
      url.startsWith("/"))
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/Login", "/Register", "/", "/dashboard/:path*", "verify/:path*"],
};
