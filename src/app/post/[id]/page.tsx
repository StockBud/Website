import type { Metadata } from "next";
import { PostClient } from "./PostClient";

const SUPABASE_URL = "https://poddvsjotivfzwjwfqqn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZGR2c2pvdGl2Znp3andmcXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTU5NDYsImV4cCI6MjA4MzYzMTk0Nn0.-PgNNdmj4uWSyg0xPTVojK8e2nbakVmgTbyXQguV0VM";

export type Post = {
  id: string;
  body: string | null;
  image_urls: string[] | null;
  created_at: string;
  author: {
    username: string;
    display_name: string | null;
    avatar_url: string | null;
  } | null;
};

async function fetchPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?id=eq.${encodeURIComponent(id)}&select=id,body,image_urls,created_at,users:user_id(username,display_name,avatar_url)&limit=1`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );
    const data = await res.json();
    if (!data[0]) return null;
    const row = data[0];
    return {
      ...row,
      author: Array.isArray(row.users) ? row.users[0] ?? null : row.users ?? null,
    };
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
  const post = await fetchPost(id);
  if (!post) return { title: "Post not found — StockBud" };
  const name = post.author?.display_name || post.author?.username || "StockBud";
  const description = post.body ? post.body.slice(0, 200) : `View this post on StockBud.`;
  const image = post.image_urls?.[0] || "https://stock-bud.com/og-default.png";
  return {
    title: `${name} on StockBud`,
    description,
    openGraph: {
      siteName: "StockBud",
      title: `${name} on StockBud`,
      description,
      images: [image],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPost(id);
  return <PostClient id={id} post={post} />;
}
