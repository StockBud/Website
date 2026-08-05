import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StockBud - Investing Made Social",
    template: "%s | StockBud",
  },
  description:
    "Track your portfolio, compete with friends, and learn from a community of investors. StockBud makes investing accessible, social, and fun.",
  keywords: [
    "investing app",
    "portfolio tracker",
    "social investing",
    "stock tracking",
    "investment community",
    "UK investing app",
    "stock leaderboard",
  ],
  authors: [{ name: "StockBud" }],
  creator: "StockBud",
  metadataBase: new URL("https://stock-bud.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://stock-bud.com",
    siteName: "StockBud",
    title: "StockBud - Investing Made Social",
    description:
      "Track your portfolio, compete with friends, and learn from a community of investors.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "StockBud - Investing Made Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StockBud - Investing Made Social",
    description:
      "Track your portfolio, compete with friends, and learn from a community of investors.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <Script
          src="https://www.ameportal.com/tracker.js"
          data-website-id="m57671thnptbnhyz0yjazjf68x843k74"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-button)] focus:bg-accent focus:px-6 focus:py-3 focus:text-background"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "StockBud",
              applicationCategory: "FinanceApplication",
              operatingSystem: "iOS, Android",
              description:
                "Track your portfolio, compete with friends, and learn from a community of investors.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GBP",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
