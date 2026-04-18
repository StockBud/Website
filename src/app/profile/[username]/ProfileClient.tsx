"use client";

import { useEffect, useState } from "react";
import type { Profile } from "./page";

const APP_STORE_URL = "https://apps.apple.com/gb/app/stockbud/id6758548800";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stockbud.app";

function formatRate(n: number | null) {
  return n == null ? "—" : Math.round(n) + "%";
}

function formatCount(n: number | null) {
  if (n == null) return "0";
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

export function ProfileClient({
  username,
  profile,
}: {
  username: string;
  profile: Profile | null;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Get StockBud");
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
      window.location.href = `stockbud://profile/${username}`;
      setTimeout(() => {
        if (document.visibilityState !== "hidden" && Date.now() - now < 3000) {
          window.location.href = storeUrl;
        }
      }, 1500);
    }
  }, [username]);

  const storeUrl = isIOS ? APP_STORE_URL : PLAY_STORE_URL;
  const storeName = isIOS ? "App Store" : "Google Play";
  const name = profile?.display_name || profile?.username || username;

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
            Download StockBud to view this profile.
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
        className="w-full max-w-sm rounded-2xl p-8 text-center"
        style={{ background: "#1C261F" }}
      >
        {/* Logo */}
        <p
          className="mb-6 text-xs font-bold tracking-widest"
          style={{ color: "#17CF54" }}
        >
          STOCKBUD
        </p>

        {!profile ? (
          <>
            <p style={{ color: "#9DB8A6" }}>
              Profile not found for{" "}
              <strong className="text-white">@{username}</strong>.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={APP_STORE_URL}
                className="flex-1 rounded-full border py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="flex-1 rounded-full border py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                Google Play
              </a>
            </div>
          </>
        ) : (
          <>
            {/* Avatar */}
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                style={{ border: "3px solid #17CF54" }}
              />
            ) : (
              <div
                className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold"
                style={{ background: "#17CF54", color: "#111813" }}
              >
                {name[0]?.toUpperCase()}
              </div>
            )}

            <h1 className="text-xl font-bold text-white">{name}</h1>
            <p className="mt-1 text-sm" style={{ color: "#9DB8A6" }}>
              @{profile.username || username}
            </p>
            {profile.bio && (
              <p
                className="mt-3 whitespace-pre-wrap text-sm leading-relaxed"
                style={{ color: "#9DB8A6" }}
              >
                {profile.bio}
              </p>
            )}

            {/* Stats */}
            <div className="mt-5 flex justify-center gap-6">
              <div>
                <p className="text-lg font-bold" style={{ color: "#17CF54" }}>
                  {formatRate(profile.win_rate)}
                </p>
                <p
                  className="text-[11px] uppercase tracking-wider"
                  style={{ color: "#9DB8A6" }}
                >
                  Win Rate
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  {formatCount(profile.trades_count)}
                </p>
                <p
                  className="text-[11px] uppercase tracking-wider"
                  style={{ color: "#9DB8A6" }}
                >
                  Trades
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  {formatCount(profile.followers_count)}
                </p>
                <p
                  className="text-[11px] uppercase tracking-wider"
                  style={{ color: "#9DB8A6" }}
                >
                  Followers
                </p>
              </div>
            </div>

            <div className="my-6 h-px" style={{ background: "#2A3C30" }} />

            {/* Follow → opens download modal */}
            <button
              onClick={() => {
                setModalTitle(`Follow ${name} on StockBud`);
                setModalOpen(true);
              }}
              className="mb-3 w-full rounded-full py-3 text-sm font-bold transition-opacity hover:opacity-85"
              style={{ background: "#17CF54", color: "#111813" }}
            >
              Follow
            </button>
            <div className="flex gap-2">
              <a
                href={APP_STORE_URL}
                className="flex-1 rounded-full border py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="flex-1 rounded-full border py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                style={{ borderColor: "#2A3C30" }}
              >
                Google Play
              </a>
            </div>
          </>
        )}
      </div>

      {/* Download modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="w-full max-w-md rounded-t-2xl p-6 pb-10"
            style={{ background: "#1C261F" }}
          >
            <div
              className="mx-auto mb-6 h-1 w-10 rounded-full"
              style={{ background: "#2A3C30" }}
            />
            <h2 className="text-lg font-bold text-white">{modalTitle}</h2>
            <p className="mt-2 text-sm" style={{ color: "#9DB8A6" }}>
              Download the app to follow traders, get their alerts, and compete
              on leaderboards.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={APP_STORE_URL}
                className="flex-1 rounded-full py-3 text-center text-sm font-bold transition-opacity hover:opacity-85"
                style={{ background: "#17CF54", color: "#111813" }}
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="flex-1 rounded-full py-3 text-center text-sm font-bold transition-opacity hover:opacity-85"
                style={{ background: "#17CF54", color: "#111813" }}
              >
                Google Play
              </a>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full text-sm transition-colors hover:text-white"
              style={{ color: "#9DB8A6" }}
            >
              Not now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
