import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";

export default withAuth(
  function proxy(req) {
    const token = req.nextauth.token;

    const pathname = req.nextUrl.pathname;

    // =====================================
    // ADMIN ONLY
    // =====================================

    if (pathname.startsWith("/dashboard") && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // =====================================
    // AGENT ROUTES
    // =====================================

    if (pathname.startsWith("/dashboard") && !token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // =====================================
        // ALLOW PUBLIC ROUTES
        // =====================================

        if (pathname === "/login" || pathname === "/") {
          return true;
        }

        // =====================================
        // REQUIRE AUTH FOR DASHBOARD
        // =====================================

        if (pathname.startsWith("/dashboard")) {
          return !!token;
        }

        return true;
      },
    },
  },
);
