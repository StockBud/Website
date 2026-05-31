"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import { GradientOverlay } from "@/components/ui/GradientOverlay";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, defaultTransition } from "@/lib/animations";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <GradientOverlay variant="hero" />

      {/* Animated, slowly pulsing green gradient backdrop with scroll parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: bgY }}
        aria-hidden
      >
        <div
          className="animate-gradient-pulse absolute inset-0 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(111,175,106,0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(216,168,64,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

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
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.75rem] lg:tracking-[-0.03em]">
            <motion.span
              variants={fadeInUp}
              transition={defaultTransition}
              className="block text-foreground"
            >
              Connect,
            </motion.span>
            <motion.span
              variants={fadeInUp}
              transition={defaultTransition}
              className="block text-[#d8a840]"
            >
              Compare,
            </motion.span>
            <motion.span
              variants={fadeInUp}
              transition={defaultTransition}
              className="block text-[#6faf6a]"
            >
              Compete.
            </motion.span>
          </h1>
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

          {/* Stats pill bar */}
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              "Live on iOS & Android",
              "118 Monthly Active Users",
              "UK-First Social Investing",
            ].map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground-muted backdrop-blur-md"
              >
                {stat}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.5, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float relative will-change-transform">
            {/* Breathing glow behind phone */}
            <div
              className="animate-glow-pulse absolute inset-0 -z-10 blur-3xl will-change-transform"
              style={{
                background:
                  "radial-gradient(circle, rgba(111,175,106,0.35) 0%, rgba(216,168,64,0.12) 45%, transparent 72%)",
              }}
            />
            <div className="relative h-[500px] w-[260px] overflow-hidden rounded-[3rem] border-2 border-accent shadow-2xl md:h-[580px] md:w-[290px]">
              <Image
                src="/screenshots/stock-graph.png"
                alt="StockBud stock details view showing real-time charts and market data"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
