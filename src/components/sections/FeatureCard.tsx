import Image from "next/image";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

const icons = {
  chart: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.853m0 0V14.25m0-3.169a6.023 6.023 0 01-2.77-.853" />
    </svg>
  ),
  rooms: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
};

const featureScreenshots: Record<string, { src: string; alt: string }> = {
  chart: {
    src: "/screenshots/profile.png",
    alt: "StockBud profile showing verified portfolio performance and holdings",
  },
  users: {
    src: "/screenshots/discover-feed.png",
    alt: "StockBud social feed where investors share what they're holding and trading",
  },
  trophy: {
    src: "/screenshots/compete-leaderboard.png",
    alt: "StockBud leaderboard ranking investors by real portfolio performance",
  },
  rooms: {
    src: "/screenshots/chat-room.png",
    alt: "A StockBud private room where an investment community talks and competes",
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const isEven = index % 2 === 0;
  const screenshot = featureScreenshots[icon];

  return (
    <AnimatedElement
      animation={isEven ? "slideLeft" : "slideRight"}
      delay={index * 0.1}
      className="group"
    >
      <div
        className={`flex flex-col gap-8 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a840]/50 hover:shadow-[0_20px_60px_-15px_rgba(216,168,64,0.25)] md:flex-row md:items-center md:p-10 ${
          !isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Feature screenshot */}
        <div className="flex-1">
          <div className="flex justify-center">
            <div className="relative h-[420px] w-[200px] overflow-hidden rounded-[2rem] border-2 border-accent shadow-lg transition-transform duration-300 group-hover:scale-[1.02] md:h-[480px] md:w-[230px]">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Feature text */}
        <div className="flex-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            {icons[icon]}
          </div>
          <h3 className="mt-4 text-2xl font-bold md:text-3xl">{title}</h3>
          <p className="mt-3 max-w-md text-base text-foreground-muted md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
}
