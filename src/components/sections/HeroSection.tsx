"use client";

import { motion } from "framer-motion";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import { GradientOverlay } from "@/components/ui/GradientOverlay";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, defaultTransition } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <GradientOverlay variant="hero" />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 pt-20 md:px-8 lg:grid-cols-2 lg:px-12">
        {/* Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[4.5rem] lg:tracking-[-0.03em]"
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="mt-6 max-w-lg text-lg text-foreground-muted md:text-xl"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <AppStoreButtons className="mt-10" />
          </motion.div>
        </motion.div>

        {/* Phone mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.5, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float relative">
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 -z-10 scale-125 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,232,108,0.2) 0%, transparent 70%)",
              }}
            />
            {/* Phone mockup placeholder */}
            <div className="flex h-[500px] w-[260px] items-center justify-center rounded-[3rem] border-2 border-border bg-background-card shadow-2xl md:h-[580px] md:w-[290px]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground-muted">
                  App Preview
                </p>
                <p className="mt-1 text-xs text-foreground-subtle">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
