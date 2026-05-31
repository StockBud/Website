import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { stats } from "@/lib/constants";

export function SocialProofSection() {
  return (
    <SectionWrapper className="border-t border-border">
      <AnimatedElement>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            The platform investing communities have been waiting for.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground-muted md:text-lg">
            A purpose-built home for investors who want to compare, compete, and
            talk markets — not just place trades.
          </p>
        </div>
      </AnimatedElement>

      {/* Stat pills */}
      <AnimatedElement delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-center backdrop-blur-md"
            >
              <span className="text-lg font-bold text-[#d8a840] md:text-xl">
                {stat.value}
              </span>
              <span className="ml-2 text-sm text-foreground-muted md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
