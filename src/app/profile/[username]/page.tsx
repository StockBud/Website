import type { Metadata } from "next";
import { ProfileClient } from "./ProfileClient";

const SUPABASE_URL = "https://poddvsjotivfzwjwfqqn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZGR2c2pvdGl2Znp3andmcXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTU5NDYsImV4cCI6MjA4MzYzMTk0Nn0.-PgNNdmj4uWSyg0xPTVojK8e2nbakVmgTbyXQguV0VM";

export type Profile = {
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  win_rate: number | null;
  trades_count: number | null;
  followers_count: number | null;
};

async function fetchProfile(username: string): Promise<Profile | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/users?username=eq.${encodeURIComponent(username)}&select=username,display_name,bio,avatar_url,win_rate,trades_count,followers_count&limit=1`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );
    const data = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const profile = await fetchProfile(params.username);
  if (!profile) return { title: "Profile not found — StockBud" };
  const name = profile.display_name || profile.username;
  return {
    title: `${name} — StockBud`,
    description: profile.bio || `View ${name}'s trading profile on StockBud.`,
    openGraph: {
      type: "profile",
      siteName: "StockBud",
      title: `${name} — StockBud`,
      description: profile.bio || `View ${name}'s trading profile on StockBud.`,
      images: [profile.avatar_url || "https://stock-bud.com/og-default.png"],
    },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const profile = await fetchProfile(params.username);
  return <ProfileClient username={params.username} profile={profile} />;
}
