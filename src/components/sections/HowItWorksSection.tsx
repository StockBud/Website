import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { steps } from "@/lib/constants";

const stepIcons = [
  // Download icon
  <svg key="download" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>,
  // Chart icon
  <svg key="chart" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
  // Trophy icon
  <svg key="trophy" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.853m0 0V14.25m0-3.169a6.023 6.023 0 01-2.77-.853" />
  </svg>,
];

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="border-t border-border">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Get started in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted md:text-lg">
            Three simple steps to start your investing journey.
          </p>
        </div>
      </AnimatedElement>

      <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <AnimatedElement
            key={step.number}
            animation="fadeInUp"
            delay={index * 0.15}
          >
            <div className="relative rounded-[var(--radius-card)] border border-border bg-background-card p-8 text-center transition-colors hover:border-border-hover md:p-10">
              {/* Step number background */}
              <span className="absolute top-4 right-6 text-7xl font-bold text-accent/5 md:text-8xl">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {stepIcons[index]}
              </div>

              <h3 className="relative mt-6 text-xl font-bold md:text-2xl">
                {step.title}
              </h3>
              <p className="relative mt-3 text-sm text-foreground-muted md:text-base">
                {step.description}
              </p>

              {/* Connector line (desktop only, not on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-border md:block" />
              )}
            </div>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
