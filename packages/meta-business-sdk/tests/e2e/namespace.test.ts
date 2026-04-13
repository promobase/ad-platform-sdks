import { afterEach, expect, mock, test } from "bun:test";
import { Meta } from "../../src/namespace.ts";

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

test("Meta.createClient returns typed client", () => {
  mockFetchJson({});
  const api = Meta.createClient({ accessToken: "tok" });
  expect(typeof api.adAccount).toBe("function");
  expect(typeof api.campaign).toBe("function");
  expect(typeof api.batch).toBe("function");
});

test("Meta.Instagram.createClient returns IG client", () => {
  const api = Meta.createClient({ accessToken: "tok" });
  const ig = Meta.Instagram.createClient({ api, igAccountId: "ig_123" });
  expect(ig.media).toBeDefined();
  expect(ig.stories).toBeDefined();
  expect(ig.comments).toBeDefined();
  expect(ig.messaging).toBeDefined();
  expect(ig.webhooks).toBeDefined();
});

test("Meta.Facebook.createClient returns FB client", () => {
  const api = Meta.createClient({ accessToken: "tok" });
  const fb = Meta.Facebook.createClient({ api, pageId: "page_123", accessToken: "tok" });
  expect(fb.feed).toBeDefined();
  expect(fb.stories).toBeDefined();
  expect(fb.comments).toBeDefined();
  expect(fb.messaging).toBeDefined();
  expect(fb.webhooks).toBeDefined();
});

test("Meta.Threads.createClient returns Threads client", () => {
  const threads = Meta.Threads.createClient({ accessToken: "tok", threadsUserId: "t_123" });
  expect(threads.posts).toBeDefined();
  expect(threads.replies).toBeDefined();
  expect(threads.account).toBeDefined();
});

test("Meta.Instagram.OAuth creates OAuth handler", () => {
  const oauth = Meta.Instagram.OAuth({
    appId: "app",
    appSecret: "secret",
    redirectUri: "https://x.com/cb",
  });
  const url = oauth.getAuthorizationUrl();
  expect(url).toContain("instagram.com/oauth/authorize");
  expect(url).toContain("app");
});

test("Meta.Facebook.OAuth creates OAuth handler", () => {
  const oauth = Meta.Facebook.OAuth({
    appId: "app",
    appSecret: "secret",
    redirectUri: "https://x.com/cb",
  });
  const url = oauth.getAuthorizationUrl();
  expect(url).toContain("facebook.com");
});

test("Meta.Threads.OAuth creates OAuth handler", () => {
  const oauth = Meta.Threads.OAuth({
    appId: "app",
    appSecret: "secret",
    redirectUri: "https://x.com/cb",
  });
  const url = oauth.getAuthorizationUrl();
  expect(url).toContain("threads.net/oauth/authorize");
});

test("Meta.Webhooks.verifyChallenge works", () => {
  const result = Meta.Webhooks.verifyChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "abc", "hub.verify_token": "tok" },
    "tok",
  );
  expect(result.valid).toBe(true);
  expect(result.challenge).toBe("abc");
});

test("Meta.Webhooks.schemas are Zod schemas", () => {
  expect(Meta.Webhooks.schemas.instagram).toBeDefined();
  expect(Meta.Webhooks.schemas.facebook).toBeDefined();
  expect(Meta.Webhooks.schemas.threads).toBeDefined();
  // They should have parse/safeParse methods
  expect(typeof Meta.Webhooks.schemas.instagram.parse).toBe("function");
  expect(typeof Meta.Webhooks.schemas.instagram.safeParse).toBe("function");
});

test("Meta.Webhooks.ParseError is accessible", () => {
  const err = new Meta.Webhooks.ParseError("INVALID_SIGNATURE", "bad sig");
  expect(err).toBeInstanceOf(Error);
  expect(err.code).toBe("INVALID_SIGNATURE");
});

test("Meta namespace is importable from barrel", async () => {
  const { Meta: M } = await import("../../src/generated/index.ts");
  expect(M.createClient).toBeDefined();
  expect(M.Instagram.createClient).toBeDefined();
  expect(M.Facebook.createClient).toBeDefined();
  expect(M.Threads.createClient).toBeDefined();
  expect(M.Webhooks.verifyChallenge).toBeDefined();
});
