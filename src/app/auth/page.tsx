import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Confirmed",
};

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {/* Success icon */}
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

        <h1 className="mt-6 text-3xl font-bold">Email Confirmed</h1>
        <p className="mt-3 text-foreground-muted">
          Your email has been verified successfully. You can now close this page and head back to the StockBud app to get started.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-[var(--radius-button)] bg-accent px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
