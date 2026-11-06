// Run: node --test test/community-link.test.js
// Expected values come from sources outside this file:
//   - slug rule: CHECK on communities.slug in StockBud
//     backend/supabase/migrations/20260907120000_community_core.sql: ^[a-z0-9-]{3,40}$
//   - store ids: App Store id6758548800, Play com.stockbud.app (StockBud SPEC.md, room/ and league/ pages)
//   - Play referrer: https://developer.android.com/google/play/installreferrer/igetinstallreferrerservice
//     (`referrer` is a URL-encoded query string; the API returns it decoded)
const test = require("node:test");
const assert = require("node:assert/strict");
const L = require("../js/community-link.js");

const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";
const ANDROID = "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36";
const DESKTOP = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";
const TIKTOK_IOS = IPHONE.replace("Safari/604.1", "musical_ly_36.5.0 BytedanceWebview/d8a21c6");
const INSTAGRAM_ANDROID = ANDROID + " Instagram 350.0.0.0 Android";

test("PR-L14: slugs the database accepts are accepted", () => {
  for (const s of ["abc", "my-club", "a1-b2-c3", "x".repeat(40), "---", "123"]) {
    assert.equal(L.slugFromPath("/c/" + s), s, s);
  }
});

test("PR-L14: slugs the database rejects are rejected", () => {
  const bad = [
    "", "ab", "x".repeat(41), "AB", "My-Club", "my_club", "my.club", "my club",
    "<script>", "%3Cscript%3Ealert(1)%3C%2Fscript%3E", "%E0", "abc%20", "é-club",
    "javascript:alert(1)", "abc\"onload=", "abc'", "abc&x=1"
  ];
  for (const s of bad) assert.equal(L.slugFromPath("/c/" + s), null, JSON.stringify(s));
});

test("PR-L14: the path must be exactly /c/<slug>, with an optional trailing slash", () => {
  assert.equal(L.slugFromPath("/c/my-club/"), "my-club");
  assert.equal(L.slugFromPath("/c/my-club/extra"), null);
  assert.equal(L.slugFromPath("/c/"), null);
  assert.equal(L.slugFromPath("/c"), null);
  assert.equal(L.slugFromPath("/x/my-club"), null);
  assert.equal(L.slugFromPath("/c/../profile/x"), null);
  assert.equal(L.slugFromPath(undefined), null);
});

test("PR-L14: an invalid slug is not found on every device, with no redirect", () => {
  for (const ua of [IPHONE, ANDROID, DESKTOP]) {
    const p = L.plan("/c/%3Cscript%3E", ua);
    assert.equal(p.mode, "notfound");
    assert.equal(p.slug, null);
    assert.equal(p.appUrl, undefined);
    assert.equal(p.storeUrl, undefined);
    assert.equal(p.stores.android, "https://play.google.com/store/apps/details?id=com.stockbud.app");
    assert.equal(p.stores.ios, "https://apps.apple.com/gb/app/stockbud/id6758548800");
  }
});

test("PR-L3: iPhone tries the app scheme, then the App Store", () => {
  const p = L.plan("/c/my-club", IPHONE);
  assert.equal(p.mode, "redirect");
  assert.equal(p.appUrl, "stockbud://c/my-club");
  assert.equal(p.storeUrl, "https://apps.apple.com/gb/app/stockbud/id6758548800");
  assert.equal(p.fallbackMs, 1500);
});

test("PR-L3, PR-L7: Android tries the app scheme, then Play with the community in referrer", () => {
  const p = L.plan("/c/my-club", ANDROID);
  assert.equal(p.mode, "redirect");
  assert.equal(p.appUrl, "stockbud://c/my-club");
  const u = new URL(p.storeUrl);
  assert.equal(u.origin + u.pathname, "https://play.google.com/store/apps/details");
  assert.equal(u.searchParams.get("id"), "com.stockbud.app");
  // What the Install Referrer API hands the app, which it then parses as a query string.
  const referrer = u.searchParams.get("referrer");
  assert.equal(referrer, "community=my-club");
  assert.equal(new URLSearchParams(referrer).get("community"), "my-club");
  assert.ok(referrer.length <= 512, "referrer must fit the 512-character limit");
});

test("PR-L3: the longest valid slug keeps referrer within the limit", () => {
  const s = "a".repeat(40);
  const referrer = new URL(L.playStoreUrl(s)).searchParams.get("referrer");
  assert.equal(referrer, "community=" + s);
  assert.ok(referrer.length <= 512);
});

test("MR-L12: in-app browsers are treated as the phone they run on", () => {
  assert.equal(L.plan("/c/my-club", TIKTOK_IOS).storeUrl, "https://apps.apple.com/gb/app/stockbud/id6758548800");
  assert.equal(new URL(L.plan("/c/my-club", INSTAGRAM_ANDROID).storeUrl).searchParams.get("referrer"), "community=my-club");
});

test("PR-L4: a computer gets both stores and no redirect", () => {
  const p = L.plan("/c/my-club", DESKTOP);
  assert.equal(p.mode, "desktop");
  assert.equal(p.slug, "my-club");
  assert.equal(p.appUrl, undefined);
  assert.equal(p.storeUrl, undefined);
  assert.equal(p.stores.ios, "https://apps.apple.com/gb/app/stockbud/id6758548800");
  assert.equal(new URL(p.stores.android).searchParams.get("referrer"), "community=my-club");
});

test("PR-L14: no output URL contains characters outside the slug alphabet from the path", () => {
  const p = L.plan("/c/abc-123", ANDROID);
  for (const v of [p.appUrl, p.storeUrl, p.stores.ios, p.stores.android]) {
    assert.doesNotMatch(v, /[<>"' ]/);
  }
});
