import auth from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authConfig } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const session = await auth(authConfig);
  const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
