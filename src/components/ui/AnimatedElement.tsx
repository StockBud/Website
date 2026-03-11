"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  defaultTransition,
} from "@/lib/animations";

type AnimationType = "fadeInUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";

const animationMap: Record<AnimationType, Variants> = {
  fadeInUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scale: scaleIn,
};

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedElement({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: AnimatedElementProps) {
  return (
    <motion.div
      variants={animationMap[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      transition={{ ...defaultTransition, duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
