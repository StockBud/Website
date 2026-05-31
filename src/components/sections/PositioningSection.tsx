import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

const brokerageItems = [
  "Execution",
  "Charts",
  "Order History",
  "Trade Confirmation",
];

const stockbudItems = [
  "Leaderboards",
  "Social Feed",
  "Verified Portfolios",
  "Private Leagues",
  "Prize Tournaments",
  "Community",
];

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function PositioningSection() {
  return (
    <SectionWrapper className="border-t border-border">
      <AnimatedElement>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Every other platform is built for the trade.
          </h2>
          <p className="mt-4 text-2xl font-semibold text-[#6faf6a] md:text-3xl">
            StockBud is built for the investor.
          </p>
        </div>
      </AnimatedElement>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2">
        {/* Brokerages */}
        <AnimatedElement animation="slideLeft">
          <div className="h-full rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground-subtle">
              What brokerages give you
            </p>
            <ul className="mt-6 space-y-4">
              {brokerageItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base text-foreground-muted md:text-lg"
                >
                  <span className="text-foreground-subtle">
                    <MinusIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedElement>

        {/* StockBud */}
        <AnimatedElement animation="slideRight">
          <div className="h-full rounded-[var(--radius-card)] border border-[#d8a840]/50 bg-[#d8a840]/[0.06] p-8 shadow-[0_20px_60px_-20px_rgba(216,168,64,0.3)] backdrop-blur-md md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#d8a840]">
              What StockBud gives you
            </p>
            <ul className="mt-6 space-y-4">
              {stockbudItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base font-medium text-foreground md:text-lg"
                >
                  <span className="text-[#d8a840]">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
