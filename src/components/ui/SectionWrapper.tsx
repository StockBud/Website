import { clsx } from "clsx";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  gradient?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  gradient,
}: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("relative", gradient && "gradient-radial")}>
      <div
        className={clsx(
          "mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12",
          "py-(--spacing-section-sm) lg:py-(--spacing-section)",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
