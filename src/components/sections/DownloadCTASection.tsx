import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import { GradientOverlay } from "@/components/ui/GradientOverlay";

export function DownloadCTASection() {
  return (
    <section id="download" className="relative overflow-hidden">
      <GradientOverlay variant="cta" />
      <SectionWrapper>
        <AnimatedElement>
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to start your investing journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted md:text-lg">
              Download StockBud for free and join a community of investors who
              are learning, tracking, and competing together.
            </p>
            <AppStoreButtons className="mt-10 justify-center" />
          </div>
        </AnimatedElement>
      </SectionWrapper>
    </section>
  );
}
