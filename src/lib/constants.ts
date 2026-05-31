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
    id: "leaderboard",
    title: "Compete on the Leaderboard",
    description:
      "Ranked by real portfolio performance. Public leaderboards or private leagues with friends. Best investor wins.",
    icon: "trophy" as const,
  },
  {
    id: "social",
    title: "The Social Feed",
    description:
      "Follow real investors, see what they're holding, buying, selling. Built for money talk.",
    icon: "users" as const,
  },
  {
    id: "portfolio",
    title: "Real Portfolios, Real Numbers",
    description:
      "Connect your brokerage. No screenshots, no cherry-picked trades. Verified performance, visible to everyone.",
    icon: "chart" as const,
  },
  {
    id: "rooms",
    title: "Private Rooms",
    description:
      "Create or join rooms with your investment community. Shared conversation, real competition.",
    icon: "rooms" as const,
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
