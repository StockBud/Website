import { clsx } from "clsx";

interface GradientOverlayProps {
  variant?: "hero" | "cta";
  className?: string;
}

export function GradientOverlay({
  variant = "hero",
  className,
}: GradientOverlayProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute inset-0",
        variant === "hero" && "gradient-radial",
        variant === "cta" && "gradient-radial-cta",
        className
      )}
      aria-hidden
    />
  );
}
