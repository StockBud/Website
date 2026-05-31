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
        </div>
      </AnimatedElement>

      {/* Pull quote */}
      <AnimatedElement delay={0.1}>
        <figure className="relative mx-auto mt-14 max-w-3xl rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md md:mt-16 md:p-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-6 font-serif text-7xl leading-none text-[#d8a840] md:-top-8 md:text-8xl"
          >
            &ldquo;
          </span>
          <blockquote className="relative text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            This app is a great idea. The data StockBud produces through user
            behaviour could be the app&rsquo;s greatest value.
          </blockquote>
          <figcaption className="mt-6 text-sm text-foreground-muted md:text-base">
            <span className="font-semibold text-foreground">
              Dr Christopher Godfrey
            </span>
            <br />
            PhD Behavioural Finance · Senior Lecturer in Finance and Portfolio
            Management, University of Manchester
          </figcaption>
        </figure>
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
