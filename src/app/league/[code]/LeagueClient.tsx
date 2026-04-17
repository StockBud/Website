"use client";

import { useEffect, useState } from "react";
import type { League } from "./page";

const APP_STORE_URL = "https://apps.apple.com/gb/app/stockbud/id6758548800";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stockbud.app";

function TypeBadge({ type }: { type: string | null }) {
  const label = type === "real_money" ? "Real Money" : "Demo";
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        background:
          type === "real_money"
            ? "rgba(23,207,84,0.15)"
            : "rgba(157,184,166,0.15)",
        color: type === "real_money" ? "#17CF54" : "#9DB8A6",
      }}
    >
      {label}
    </span>
  );
}

function StatusChip({ status }: { status: string | null }) {
  const active = status === "active";
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        background: active ? "rgba(23,207,84,0.1)" : "rgba(157,184,166,0.1)",
        color: active ? "#17CF54" : "#9DB8A6",
      }}
    >
      {active ? "Active" : "Pending"}
    </span>
  );
}

export function LeagueClient({
  code,
  league,
}: {
  code: string;
  league: League | null;
}) {
  const [redirecting, setRedirecting] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua);
    const android = /Android/.test(ua);
    setIsIOS(ios);
    if (ios || android) {
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = ios ? APP_STORE_URL : PLAY_STORE_URL;
      }, 1200);
    }
  }, []);

  const storeUrl = isIOS ? APP_STORE_URL : PLAY_STORE_URL;
  const storeName = isIOS ? "App Store" : "Google Play";

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
            Download StockBud to join this league.
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
        <p
          className="mb-6 text-xs font-bold tracking-widest"
          style={{ color: "#17CF54" }}
        >
          STOCKBUD
        </p>

        {!league ? (
          <div>
            <p style={{ color: "#9DB8A6" }}>League not found.</p>
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
          </div>
        ) : (
          <>
            <h1 className="mb-3 text-xl font-bold text-white">{league.name}</h1>
            <div className="flex items-center justify-center gap-2">
              <TypeBadge type={league.league_type} />
              <StatusChip status={league.status} />
            </div>

            <div className="my-5 h-px" style={{ background: "#2A3C30" }} />

            <p
              className="mb-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#9DB8A6" }}
            >
              Invite Code
            </p>
            <p className="mb-5 text-base font-bold tracking-widest text-white">
              {league.invite_code}
            </p>

            <a
              href={APP_STORE_URL}
              className="mb-3 block w-full rounded-full py-3 text-sm font-bold transition-opacity hover:opacity-85"
              style={{ background: "#17CF54", color: "#111813" }}
            >
              Join on StockBud
            </a>
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
    </div>
  );
}
