import { expect, test } from "bun:test";

import {
  Facebook,
  Google,
  GoogleBusinessProfile,
  Instagram,
  LinkedIn,
  Threads,
  TikTok,
  WhatsApp,
  X,
  YouTube,
} from "../src/index.ts";
import { createAllTools } from "../src/unified-tools.ts";

test("direct Graph platform namespaces are accessible", () => {
  expect(Facebook.createGraphClient).toBeDefined();
  expect(Facebook.createClient).toBeDefined();
  expect(Instagram.createClient).toBeDefined();
  expect(Threads.createClient).toBeDefined();
  expect(WhatsApp.createClient).toBeDefined();
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

test("createAllTools combines direct platforms and TikTok tools", () => {
  const api = Facebook.createGraphClient({ accessToken: "tok" });
  const tools = createAllTools({
    facebook: {
      api,
      pageId: "page_123",
      pageAccessToken: "tok",
    },
    instagram: {
      api,
      igAccountId: "ig_123",
    },
  });

  // Direct platform tools present
  expect((tools as Record<string, unknown>).ig_publish_photo).toBeDefined();
  expect((tools as Record<string, unknown>).fb_publish_post).toBeDefined();
});

test("createAllTools works with only Instagram", () => {
  const api = Facebook.createGraphClient({ accessToken: "tok" });
  const tools = createAllTools({
    instagram: { api, igAccountId: "ig_123" },
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
