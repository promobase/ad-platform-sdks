import { afterEach, expect, mock, test } from "bun:test";

import { verifyWebhookChallenge, WebhookParseError } from "../../src/clients/webhooks.ts";
import {
  Facebook as GeneratedFacebook,
  Instagram as GeneratedInstagram,
  Threads as GeneratedThreads,
  WhatsApp as GeneratedWhatsApp,
} from "../../src/generated/index.ts";
import { Facebook, Instagram, Threads, WhatsApp, createGraphClient } from "../../src/namespace.ts";

const originalFetch = globalThis.fetch;

function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ),
  ) as unknown as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("createGraphClient returns the generated Graph client", () => {
  mockFetchJson({});
  const api = createGraphClient({ accessToken: "tok" });
  expect(typeof api.adAccount).toBe("function");
  expect(typeof api.campaign).toBe("function");
  expect(typeof api.batch).toBe("function");
});

test("Instagram.createClient returns the Instagram client", () => {
  const api = createGraphClient({ accessToken: "tok" });
  const ig = Instagram.createClient({ api, igAccountId: "ig_123" });
  expect(ig.media).toBeDefined();
  expect(ig.stories).toBeDefined();
  expect(ig.comments).toBeDefined();
  expect(ig.messaging).toBeDefined();
  expect(ig.webhooks).toBeDefined();
});

test("Facebook.createClient returns the Facebook Page client", () => {
  const api = createGraphClient({ accessToken: "tok" });
  const fb = Facebook.createClient({ api, pageId: "page_123", accessToken: "tok" });
  expect(fb.feed).toBeDefined();
  expect(fb.stories).toBeDefined();
  expect(fb.comments).toBeDefined();
  expect(fb.messaging).toBeDefined();
  expect(fb.webhooks).toBeDefined();
});

test("Threads.createClient returns the Threads client", () => {
  const threads = Threads.createClient({ accessToken: "tok", threadsUserId: "t_123" });
  expect(threads.posts).toBeDefined();
  expect(threads.replies).toBeDefined();
  expect(threads.account).toBeDefined();
});

test("direct platform OAuth surfaces create handlers", () => {
  expect(
    Instagram.OAuth({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://x.com/cb",
    }).getAuthorizationUrl(),
  ).toContain("instagram.com/oauth/authorize");
  expect(
    Facebook.OAuth({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://x.com/cb",
    }).getAuthorizationUrl(),
  ).toContain("facebook.com");
  expect(
    Threads.OAuth({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://x.com/cb",
    }).getAuthorizationUrl(),
  ).toContain("threads.net/oauth/authorize");
});

test("direct platform webhook surfaces expose schemas", () => {
  const result = verifyWebhookChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "abc", "hub.verify_token": "tok" },
    "tok",
  );
  expect(result.valid).toBe(true);
  expect(result.challenge).toBe("abc");
  expect(Facebook.Webhooks.schema).toBeDefined();
  expect(Instagram.Webhooks.schema).toBeDefined();
  expect(Threads.Webhooks.schema).toBeDefined();
  expect(typeof Instagram.Webhooks.schema.parse).toBe("function");
  expect(typeof Instagram.Webhooks.schema.safeParse).toBe("function");
});

test("WebhookParseError remains available from the webhook module", () => {
  const err = new WebhookParseError("INVALID_SIGNATURE", "bad sig");
  expect(err).toBeInstanceOf(Error);
  expect(err.code).toBe("INVALID_SIGNATURE");
});

test("generated barrel exposes direct platforms without a family wrapper", () => {
  expect(GeneratedFacebook.createClient).toBeDefined();
  expect(GeneratedFacebook.createGraphClient).toBeDefined();
  expect(GeneratedInstagram.createClient).toBeDefined();
  expect(GeneratedThreads.createClient).toBeDefined();
  expect(GeneratedWhatsApp.createClient).toBeDefined();
});
