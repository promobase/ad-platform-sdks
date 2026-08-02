import { expect, test } from "bun:test";

import { Google, GoogleBusinessProfile, LinkedIn, Meta, TikTok, X, YouTube } from "../src/index.ts";
import { createAllTools } from "../src/unified-tools.ts";

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
  const client = LinkedIn.createClient({ accessToken: "token" });
  expect(client.client.apiVersion).toBe("202607");
  expect(LinkedIn.OAuth.create).toBeDefined();
});

test("X namespace is accessible", () => {
  const client = X.createClient({ token: "token" });
  expect(client.posts.createPosts).toBeDefined();
  expect(client.tweets).toBe(client.posts);
});

test("YouTube namespace is accessible", () => {
  const client = YouTube.createClient({ accessToken: "token" });
  expect(client.resources.videos.batchGetStats).toBeDefined();
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

test("Google namespace is accessible", () => {
  expect(Google.createClient).toBeDefined();
  expect(
    Google.createClient({ getAccessToken: () => "token", developerToken: "developer" }).apiVersion,
  ).toBe("v25");
  expect(Google.Ads.paginate).toBeDefined();
  expect(Google.Errors.GoogleAdsError).toBeDefined();
});

test("Google Business Profile namespace is accessible", () => {
  const client = GoogleBusinessProfile.createClient({ accessToken: "token" });
  expect(client.resources.accounts.list).toBeDefined();
  expect(client.resources.localPosts.create).toBeDefined();
  expect(GoogleBusinessProfile.OAuth).toBeDefined();
});
