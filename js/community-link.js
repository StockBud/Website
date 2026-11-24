// Community join link logic for /c/<slug> (StockBud SPEC.md PR-L2, L3, L4, L14).
// Pure functions only, so they can be tested with `node --test test/community-link.test.js`.
// The page (c/index.html) calls StockBudCommunityLink.plan() and acts on the result.
(function (root) {
  "use strict";

  var APP_STORE = "https://apps.apple.com/gb/app/stockbud/id6758548800";
  var PLAY_STORE = "https://play.google.com/store/apps/details?id=com.stockbud.app";

  // [T_STORE_FALLBACK]: how long a phone waits for the app before going to the store.
  // Same value as room/ and league/.
  var STORE_FALLBACK_MS = 1500;

  // Same rule as the database CHECK on communities.slug
  // (backend/supabase/migrations/20260907120000_community_core.sql).
  var SLUG_RE = /^[a-z0-9-]{3,40}$/;

  // Returns the slug from a pathname such as "/c/my-club" or "/c/my-club/",
  // or null when it is missing or fails the check. The raw path segment is
  // checked, never a decoded one: a valid slug has no percent-escapes, and
  // decoding first would let "%3Cscript%3E" or a malformed "%E0" through
  // to the check (or make decodeURIComponent throw).
  function slugFromPath(pathname) {
    if (typeof pathname !== "string") return null;
    var m = /^\/c\/([^/?#]*)\/?$/.exec(pathname);
    if (!m) return null;
    return SLUG_RE.test(m[1]) ? m[1] : null;
  }

  function platformOf(userAgent) {
    var ua = typeof userAgent === "string" ? userAgent : "";
    if (/iPad|iPhone|iPod/.test(ua)) return "ios";
    if (/Android/.test(ua)) return "android";
    return "desktop";
  }

  // Google Play passes `referrer` through to the Play Install Referrer API on
  // first launch (SRC-5). The value is one URL-encoded query string, so the
  // app reads `community=<slug>` from it.
  function playStoreUrl(slug) {
    if (!slug) return PLAY_STORE;
    return PLAY_STORE + "&referrer=" + encodeURIComponent("community=" + slug);
  }

  function appStoreUrl() {
    return APP_STORE;
  }

  function appUrl(slug) {
    return "stockbud://c/" + slug;
  }

  // What the page should do. Every URL in the result is built only from a
  // slug that passed SLUG_RE, or from no slug at all.
  //   mode "redirect": phone with a valid slug. Try appUrl, then go to storeUrl
  //                    after fallbackMs if the page is still visible.
  //   mode "desktop":  valid slug on a computer. Show both stores, no redirect.
  //   mode "notfound": missing or invalid slug, any device. No redirect.
  function plan(pathname, userAgent) {
    var slug = slugFromPath(pathname);
    var platform = platformOf(userAgent);
    var stores = { ios: appStoreUrl(), android: playStoreUrl(slug) };
    if (!slug) {
      return { mode: "notfound", slug: null, platform: platform, stores: stores };
    }
    if (platform === "desktop") {
      return { mode: "desktop", slug: slug, platform: platform, stores: stores };
    }
    return {
      mode: "redirect",
      slug: slug,
      platform: platform,
      stores: stores,
      appUrl: appUrl(slug),
      storeUrl: platform === "ios" ? stores.ios : stores.android,
      fallbackMs: STORE_FALLBACK_MS
    };
  }

  var api = {
    SLUG_RE: SLUG_RE,
    STORE_FALLBACK_MS: STORE_FALLBACK_MS,
    slugFromPath: slugFromPath,
    platformOf: platformOf,
    playStoreUrl: playStoreUrl,
    appStoreUrl: appStoreUrl,
    appUrl: appUrl,
    plan: plan
  };

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.StockBudCommunityLink = api;
  }
})(typeof self !== "undefined" ? self : this);
