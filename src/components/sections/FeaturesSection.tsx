import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { FeatureCard } from "./FeatureCard";
import { features } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything you need to invest smarter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted md:text-lg">
            StockBud combines portfolio tracking, social features, and AI-powered
            insights into one powerful app.
          </p>
        </div>
      </AnimatedElement>

      <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
