import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

// This middleware will run for any request to /dashboard/*
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If there is no session, redirect to the login page
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If there is a session, allow the request to proceed
  return NextResponse.next();
}

// Decide which paths will be matched by this middleware
export const config = {
  matcher: "/dashboard/:path*",
};
