// middleware.ts (create this in your project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only run middleware on the studio path
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !isValidAuth(authHeader)) {
      return new NextResponse(null, {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio Access"',
        },
      });
    }
  }

  return NextResponse.next();
}

function isValidAuth(authHeader: string): boolean {
  // Basic authentication format: "Basic base64(username:password)"
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  // Compare with environment variables
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

// Configure which paths the middleware runs on
export const config = {
  matcher: "/admin/:path*",
};
