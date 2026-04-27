import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "StockBud Pro",
  description:
    "Support StockBud and unlock premium cosmetics — gold name, glowing avatar, and early bird badge.",
};

const plans = [
  {
    name: "Monthly",
    price: "£2.99",
    period: "/month",
    description: "Flexible monthly plan, cancel anytime.",
    href: "https://buy.stripe.com/bJe4gzaEQ10idGAbcC8IU00",
    highlight: false,
  },
  {
    name: "Yearly",
    price: "£19.99",
    period: "/year",
    description: "Save over 40% compared to monthly.",
    href: "https://buy.stripe.com/aFacN53codN4eKEfsS8IU01",
    highlight: true,
  },
];

const perks = [
  {
    emoji: "\u{1F426}",
    title: "Early Bird Badge",
    description: "Stand out with the exclusive bird badge next to your name.",
  },
  {
    emoji: "\u2728",
    title: "Gold Name",
    description: "Your display name shines gold across the entire app.",
  },
  {
    emoji: "\u{1F31F}",
    title: "Glowing Avatar",
    description:
      "A premium gold glow around your profile picture everywhere it appears.",
  },
  {
    emoji: "\u{1F3C6}",
    title: "Support Development",
    description:
      "Help us keep building features, competitions, and a better investing community.",
  },
];

export default function ProPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24"
      >
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-6 text-center md:px-8 lg:px-12">
          <div className="gradient-radial absolute inset-x-0 top-0 h-[600px] pointer-events-none" />
          <p className="relative inline-block rounded-[var(--radius-badge)] border border-[#FBBF24]/30 bg-[#FBBF24]/10 px-4 py-1.5 text-sm font-medium text-[#FBBF24]">
            Early Supporter
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Get{" "}
            <span className="text-[#FBBF24]">StockBud Pro</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-foreground-muted">
            Support StockBud and stand out from the crowd with exclusive premium
            cosmetics across the app.
          </p>
        </section>

        {/* Perks */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-20 md:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-[var(--radius-card)] border border-border bg-background-card p-6"
              >
                <span className="text-3xl">{perk.emoji}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {perk.title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground-muted">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-20 md:px-8 lg:px-12">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-foreground-muted">
            Use the same email as your StockBud account and your premium status
            activates automatically.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            {plans.map((plan) => (
              <a
                key={plan.name}
                href={plan.href}
                className={`group relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-all duration-200 hover:scale-[1.02] ${
                  plan.highlight
                    ? "border-[#FBBF24]/50 bg-[#FBBF24]/5"
                    : "border-border bg-background-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[var(--radius-badge)] bg-[#FBBF24] px-3 py-1 text-xs font-bold text-black">
                    BEST VALUE
                  </span>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#FBBF24]">
                    {plan.price}
                  </span>
                  <span className="text-foreground-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-foreground-muted">
                  {plan.description}
                </p>
                <div
                  className={`mt-6 inline-flex items-center justify-center rounded-[var(--radius-button)] px-6 py-3 text-sm font-medium transition-colors ${
                    plan.highlight
                      ? "bg-[#FBBF24] text-black group-hover:bg-[#F59E0B]"
                      : "bg-background-tertiary text-foreground border border-border group-hover:border-border-hover"
                  }`}
                >
                  Subscribe
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ-like note */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 text-center md:px-8 lg:px-12">
          <p className="text-sm text-foreground-subtle">
            Already subscribed in the app? You&apos;re all set — no need to
            subscribe again. Web subscriptions are for users who prefer paying
            outside the app stores.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
