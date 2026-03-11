"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-foreground">
          {siteConfig.name}
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button as="a" href="#download" size="compact">
            Download
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={clsx(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={clsx(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={clsx(
          "fixed inset-0 top-16 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground-muted transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            as="a"
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
}
