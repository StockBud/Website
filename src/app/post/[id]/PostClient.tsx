"use client";

import { useEffect, useState } from "react";
import type { Post } from "./page";

const APP_STORE_URL = "https://apps.apple.com/gb/app/stockbud/id6758548800";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stockbud.app";

export function PostClient({ id, post }: { id: string; post: Post | null }) {
  const [redirecting, setRedirecting] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua);
    const android = /Android/.test(ua);
    setIsIOS(ios);
    if (ios || android) {
      setRedirecting(true);
      const storeUrl = ios ? APP_STORE_URL : PLAY_STORE_URL;
      const now = Date.now();
      window.location.href = `stockbud://post/${id}`;
      setTimeout(() => {
        if (document.visibilityState !== "hidden" && Date.now() - now < 3000) {
          window.location.href = storeUrl;
        }
      }, 1500);
    }
  }, [id]);

  const storeUrl = isIOS ? APP_STORE_URL : PLAY_STORE_URL;
  const storeName = isIOS ? "App Store" : "Google Play";
  const author = post?.author;
  const name = author?.display_name || author?.username || "Someone";

  if (redirecting) {
    return (
      <div
        className="flex min-h-screen items-center justify-center px-4"
        style={{ background: "#111813" }}
      >
        <div
          className="w-full max-w-sm rounded-2xl p-8 text-center"
          style={{ background: "#1C261F" }}
        >
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-[#2A3C30] border-t-[#17CF54]" />
          <p className="text-base font-bold text-white">Opening {storeName}…</p>
          <p className="mt-1 text-sm" style={{ color: "#9DB8A6" }}>
            Download StockBud to view this post.
          </p>
          <a
            href={storeUrl}
            className="mt-5 block rounded-full py-3 text-sm font-bold transition-opacity hover:opacity-85"
            style={{ background: "#17CF54", color: "#111813" }}
          >
            {isIOS ? "Download on App Store" : "Get it on Google Play"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-10"
      style={{ background: "#111813" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{ background: "#1C261F" }}
      >
        <p
          className="mb-6 text-center text-xs font-bold tracking-widest"
          style={{ color: "#17CF54" }}
        >
          STOCKBUD
        </p>

        {!post ? (
          <div className="text-center">
            <p style={{ color: "#9DB8A6" }}>Post not found.</p>
            <div className="mt-6 flex gap-2">
              <a
                href={APP_STORE_URL}
                className="flex-1 rounded-full border py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="flex-1 rounded-full border py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                Google Play
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Author */}
            <div className="mb-4 flex items-center gap-3">
              {author?.avatar_url ? (
                <img
                  src={author.avatar_url}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                  style={{ border: "2px solid #17CF54" }}
                />
              ) : (
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold"
                  style={{ background: "#17CF54", color: "#111813" }}
                >
                  {name[0]?.toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-white">{name}</p>
                {author?.username && (
                  <p className="text-xs" style={{ color: "#9DB8A6" }}>
                    @{author.username}
                  </p>
                )}
              </div>
            </div>

            {/* Body */}
            {post.body && (
              <p className="mb-4 text-sm leading-relaxed text-white">
                {post.body}
              </p>
            )}

            {/* Image thumbnail */}
            {post.image_urls?.[0] && (
              <img
                src={post.image_urls[0]}
                alt="Post image"
                className="mb-4 w-full rounded-xl object-cover"
                style={{ maxHeight: 200 }}
              />
            )}

            <div className="my-4 h-px" style={{ background: "#2A3C30" }} />

            <a
              href={APP_STORE_URL}
              className="mb-3 block w-full rounded-full py-3 text-center text-sm font-bold transition-opacity hover:opacity-85"
              style={{ background: "#17CF54", color: "#111813" }}
            >
              Open in StockBud
            </a>
            <div className="flex gap-2">
              <a
                href={APP_STORE_URL}
                className="flex-1 rounded-full border py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="flex-1 rounded-full border py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                Google Play
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
