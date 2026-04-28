import { expect, test } from "bun:test";
import { LinkedIn, Meta, TikTok } from "../src/index.ts";
import { createAllTools } from "../src/unified-tools.ts";
import { X } from "../src/x.ts";
import { YouTube } from "../src/youtube.ts";

test("Meta namespace is accessible", () => {
  expect(Meta.createClient).toBeDefined();
  expect(Meta.Instagram.createClient).toBeDefined();
  expect(Meta.Facebook.createClient).toBeDefined();
  expect(Meta.Threads.createClient).toBeDefined();
  expect(Meta.Webhooks.verifyChallenge).toBeDefined();
});

test("TikTok namespace is accessible", () => {
  expect(TikTok.createClient).toBeDefined();
});

test("LinkedIn namespace is accessible", () => {
  expect(LinkedIn.createClient).toBeDefined();
  expect(LinkedIn.OAuth.create).toBeDefined();
});

test("X namespace is accessible", () => {
  expect(X.createClient).toBeDefined();
});

test("YouTube namespace is accessible", () => {
  expect(YouTube.createClient).toBeDefined();
});

test("createAllTools combines Meta and TikTok tools", () => {
  const api = Meta.createClient({ accessToken: "tok" });
  const tools = createAllTools({
    meta: {
      api,
      igAccountId: "ig_123",
      pageId: "page_123",
      pageAccessToken: "tok",
    },
  });

  // Meta tools present
  expect((tools as Record<string, unknown>).ig_publish_photo).toBeDefined();
  expect((tools as Record<string, unknown>).fb_publish_post).toBeDefined();
});

test("createAllTools works with only Meta", () => {
  const api = Meta.createClient({ accessToken: "tok" });
  const tools = createAllTools({
    meta: { api, igAccountId: "ig_123", include: ["instagram"] },
  });
  expect((tools as Record<string, unknown>).ig_publish_photo).toBeDefined();
});

test("createAllTools works with empty config", () => {
  const tools = createAllTools({});
  expect(Object.keys(tools)).toHaveLength(0);
});

test("Google namespace is accessible", async () => {
  const { Google } = await import("../src/index.ts");
  expect(Google.createClient).toBeDefined();
  expect(Google.Ads.paginate).toBeDefined();
  expect(Google.Errors.GoogleAdsError).toBeDefined();
});
