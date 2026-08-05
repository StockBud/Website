import type { Metadata } from "next";
import { LeagueClient } from "./LeagueClient";

const SUPABASE_URL = "https://poddvsjotivfzwjwfqqn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZGR2c2pvdGl2Znp3andmcXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTU5NDYsImV4cCI6MjA4MzYzMTk0Nn0.-PgNNdmj4uWSyg0xPTVojK8e2nbakVmgTbyXQguV0VM";

export type League = {
  id: string;
  name: string;
  invite_code: string;
  league_type: string | null;
  status: string | null;
};

async function fetchLeague(code: string): Promise<League | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/leagues?invite_code=eq.${encodeURIComponent(code)}&select=id,name,invite_code,league_type,status&limit=1`,
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
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const league = await fetchLeague(code);
  if (!league) return { title: "League not found — StockBud" };
  return {
    title: `Join ${league.name} — StockBud`,
    description: `You've been invited to join the ${league.name} fantasy trading league on StockBud.`,
    openGraph: {
      siteName: "StockBud",
      title: `Join ${league.name} — StockBud`,
      description: `You've been invited to join the ${league.name} fantasy trading league on StockBud.`,
      images: ["https://stock-bud.com/assets/og-image.png"],
    },
  };
}

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const league = await fetchLeague(code);
  return <LeagueClient code={code} league={league} />;
}
