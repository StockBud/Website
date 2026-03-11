import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, type ElementType } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "default" | "compact";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentPropsWithoutRef<T>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-hover",
  secondary:
    "bg-background-tertiary text-foreground border border-border hover:border-border-hover",
  outline:
    "bg-transparent text-foreground border border-border hover:border-border-hover hover:bg-background-tertiary",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-12 px-8 text-base",
  compact: "h-10 px-6 text-sm",
};

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer",
        "rounded-[var(--radius-button)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
