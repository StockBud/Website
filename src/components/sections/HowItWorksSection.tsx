"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { steps } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="border-t border-border">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Up and running in minutes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted md:text-lg">
            Connect, Compare, Compete.{" "}
            <span className="text-[#d8a840]">Our tagline is our product.</span>
          </p>
        </div>
      </AnimatedElement>

      <div className="relative mt-16 md:mt-20">
        {/* Animated connecting line (desktop) */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-0.5 origin-left bg-gradient-to-r from-[#d8a840]/0 via-[#d8a840]/60 to-[#d8a840]/0 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
        {/* Animated connecting line (mobile, vertical) */}
        <motion.div
          aria-hidden
          className="absolute bottom-10 left-7 top-10 w-0.5 origin-top bg-gradient-to-b from-[#d8a840]/0 via-[#d8a840]/50 to-[#d8a840]/0 md:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <AnimatedElement
              key={step.number}
              animation="fadeInUp"
              delay={index * 0.15}
            >
              <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                {/* Gold number badge */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d8a840] text-2xl font-bold text-[#003021] shadow-[0_8px_24px_-6px_rgba(216,168,64,0.6)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold md:mt-6 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-foreground-muted md:mx-auto md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
