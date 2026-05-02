import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/auth",
      destination: "/auth/confirmed",
      permanent: false,
    },
  ],
  headers: async () => [
    {
      source: "/.well-known/assetlinks.json",
      headers: [{ key: "Content-Type", value: "application/json" }],
    },
    {
      source: "/.well-known/apple-app-site-association",
      headers: [{ key: "Content-Type", value: "application/json" }],
    },
    {
      source: "/apple-app-site-association",
      headers: [{ key: "Content-Type", value: "application/json" }],
    },
  ],
};

export default nextConfig;
