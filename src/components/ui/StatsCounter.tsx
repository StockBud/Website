"use client";

import { useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export function StatsCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
}: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString()
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-4xl font-bold text-foreground md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {displayValue}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm text-foreground-muted md:text-base">
        {label}
      </p>
    </div>
  );
}
