import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { stats } from "@/lib/constants";

export function SocialProofSection() {
  return (
    <SectionWrapper>
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Trusted by investors across the UK
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted md:text-lg">
            Join a growing community of smart investors.
          </p>
        </div>
      </AnimatedElement>

      <div className="mt-16 grid grid-cols-2 gap-8 md:mt-20 md:grid-cols-4 md:gap-12">
        {stats.map((stat) => (
          <StatsCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            decimals={stat.decimals}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
