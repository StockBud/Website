export const siteConfig = {
  name: "StockBud",
  tagline: "Investing Made Social",
  description:
    "Track your portfolio, compete with friends, and learn from a community of investors. StockBud makes investing accessible, social, and fun.",
  url: "https://stock-bud.com",
  email: {
    support: "support@stock-bud.com",
    general: "luke@stock-bud.com",
  },
  social: {
    instagram: "https://instagram.com/stockbudapp",
    twitter: "https://x.com/stockbudapp",
    tiktok: "https://tiktok.com/@stockbudapp",
  },
  appStore: {
    ios: "#",
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
    id: "ai-news",
    title: "AI-Powered Insights",
    description:
      "Get smart news summaries and alerts tailored to your portfolio and interests. Stay informed without the noise.",
    icon: "sparkles" as const,
  },
  {
    id: "sparks",
    title: "Earn Sparks",
    description:
      "Share knowledge, help others learn, and get rewarded with Sparks for your contributions to the community.",
    icon: "zap" as const,
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
      "Add your investments, follow stocks, and explore AI-powered insights.",
  },
  {
    number: 3,
    title: "Compete & Grow",
    description:
      "Join leagues, climb leaderboards, and earn Sparks for sharing knowledge.",
  },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 500, suffix: "K+", label: "Portfolios Tracked" },
  { value: 4.8, suffix: "", label: "App Store Rating", decimals: 1 },
  { value: 50, suffix: "K+", label: "Community Posts" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: `mailto:${siteConfig.email.support}` },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
