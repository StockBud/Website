"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AuthConfirmedPage() {
  useEffect(() => {
    const params = window.location.search; // e.g. ?code=abc&...
    window.location.href = `stockbud://auth/confirmed${params}`;
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold">Opening StockBud...</h1>
        <p className="mt-3 text-foreground-muted">
          You can close this tab and return to the app.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-[var(--radius-button)] bg-accent px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
