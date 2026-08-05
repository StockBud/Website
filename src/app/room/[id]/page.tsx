import type { Metadata } from "next";
import { RoomClient } from "./RoomClient";

const SUPABASE_URL = "https://poddvsjotivfzwjwfqqn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZGR2c2pvdGl2Znp3andmcXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTU5NDYsImV4cCI6MjA4MzYzMTk0Nn0.-PgNNdmj4uWSyg0xPTVojK8e2nbakVmgTbyXQguV0VM";

export type Room = {
  id: string;
  name: string;
  is_public: boolean;
  created_at: string;
};

async function fetchRoom(id: string): Promise<Room | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/rooms?id=eq.${encodeURIComponent(id)}&select=id,name,is_public,created_at&limit=1`,
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
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = await fetchRoom(id);
  if (!room) return { title: "Room not found — StockBud" };
  return {
    title: `Join ${room.name} — StockBud`,
    description: `You've been invited to join the ${room.name} trading room on StockBud.`,
    openGraph: {
      siteName: "StockBud",
      title: `Join ${room.name} — StockBud`,
      description: `You've been invited to join the ${room.name} trading room on StockBud.`,
      images: ["https://stock-bud.com/assets/og-image.png"],
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = await fetchRoom(id);
  return <RoomClient id={id} room={room} />;
}
