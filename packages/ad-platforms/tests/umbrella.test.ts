import { expect, test } from "bun:test";
import { createAllTools, Meta, TikTok } from "../src/index.ts";

test("Meta namespace is accessible", () => {
  expect(Meta.createClient).toBeDefined();
  expect(Meta.Instagram.createClient).toBeDefined();
  expect(Meta.Facebook.createClient).toBeDefined();
  expect(Meta.Threads.createClient).toBeDefined();
  expect(Meta.Webhooks.verifyChallenge).toBeDefined();
  expect(Meta.AI.createTools).toBeDefined();
});

test("TikTok namespace is accessible", () => {
  expect(TikTok.createClient).toBeDefined();
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
