"use client";

import { useEffect, useState } from "react";
import type { Room } from "./page";

const APP_STORE_URL = "https://apps.apple.com/gb/app/stockbud/id6758548800";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stockbud.app";

export function RoomClient({ id, room }: { id: string; room: Room | null }) {
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
            Download StockBud to join this room.
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

        {!room ? (
          <div>
            <p style={{ color: "#9DB8A6" }}>Room not found.</p>
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
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#9DB8A6" }}
            >
              Trading Room
            </p>
            <h1 className="text-xl font-bold text-white">{room.name}</h1>

            <div className="my-6 h-px" style={{ background: "#2A3C30" }} />

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
