export const siteConfig = {
  name: "StockBud",
  tagline: "Connect, Compare, Compete.",
  description:
    "The social layer the UK investing scene has never had. Connect your real portfolio, compete on leaderboards, and follow investors who actually put their money where their mouth is.",
  url: "https://stock-bud.com",
  email: {
    support: "support@stock-bud.com",
    general: "luke@stock-bud.com",
  },
  social: {
    instagram: "https://www.instagram.com/StockBudApp/",
    tiktok: "https://www.tiktok.com/@stockbud",
  },
  appStore: {
    ios: "https://apps.apple.com/gb/app/stockbud/id6758548800",
    android: "https://play.google.com/store/apps/details?id=com.stockbud.app",
  },
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
];

export const features = [
  {
    id: "portfolio",
    title: "Track Your Portfolio",
    description:
      "Monitor all your investments in one place with real-time performance analytics, detailed charts, and personalised insights.",
    icon: "chart" as const,
  },
  {
    id: "social",
    title: "Join the Conversation",
    description:
      "Connect with communities of investors around the stocks and industries you care about. Share ideas, discuss strategies, and learn together.",
    icon: "users" as const,
  },
  {
    id: "leaderboard",
    title: "Climb the Ranks",
    description:
      "Compete on leaderboards, create private leagues with friends, and prove your investing knowledge against the community.",
    icon: "trophy" as const,
  },
  {
    id: "prizes",
    title: "Win Cash Prizes",
    description:
      "Enter competitions, pick your stocks, and compete for real cash prizes. Put your investing knowledge to the test.",
    icon: "sparkles" as const,
  },
];

export const steps = [
  {
    number: 1,
    title: "Download",
    description: "Get StockBud free from the App Store or Google Play.",
  },
  {
    number: 2,
    title: "Track & Learn",
    description:
      "Add your investments, follow stocks, and track your portfolio.",
  },
  {
    number: 3,
    title: "Compete & Grow",
    description:
      "Join leagues, climb leaderboards, and grow your investing skills.",
  },
];

// Real, verifiable stats only — no fabricated numbers.
export const stats = [
  { value: "118", label: "Monthly Active Users" },
  { value: "200K+", label: "Combined Creator Reach" },
  { value: "iOS & Android", label: "Live Now" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "mailto:luke@stock-bud.com" },
    { label: "Contact", href: `mailto:${siteConfig.email.support}` },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
