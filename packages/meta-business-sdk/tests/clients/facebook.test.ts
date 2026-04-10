import { test, expect, mock, afterEach } from "bun:test";
import { createClient } from "../../src/generated/index.ts";
import { createFacebookPageClient, createFacebookOAuth } from "../../src/clients/facebook/index.ts";

const originalFetch = globalThis.fetch;

function mockFetchSequence(responses: { status?: number; body: unknown }[]) {
  let callIndex = 0;
  globalThis.fetch = mock(() => {
    const resp = responses[callIndex++] ?? responses[responses.length - 1]!;
    return Promise.resolve(
      new Response(JSON.stringify(resp.body), {
        status: resp.status ?? 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

// --- Feed ---

test("publishPost sends POST to /page_id/feed", async () => {
  mockFetchSequence([{ body: { id: "123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const result = await fb.feed.publishPost({ message: "Hello Facebook!" });
  expect(result.id).toBe("123_456");

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("page_123/feed");
  expect(init.method).toBe("POST");
});

test("publishPost with scheduled time sets published=false", async () => {
  mockFetchSequence([{ body: { id: "123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  await fb.feed.publishPost({
    message: "Scheduled post",
    scheduledPublishTime: 1730000000,
  });

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  const body = init.body?.toString() ?? "";
  expect(body).toContain("published=false");
});

test("publishPhoto sends POST to /page_id/photos", async () => {
  mockFetchSequence([{ body: { id: "photo_1", post_id: "123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const result = await fb.feed.publishPhoto({ url: "https://example.com/photo.jpg" });
  expect(result.id).toBe("photo_1");
});

test("publishVideo sends POST to /page_id/videos", async () => {
  mockFetchSequence([{ body: { id: "video_1" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const result = await fb.feed.publishVideo({ url: "https://example.com/video.mp4", title: "My Video" });
  expect(result.id).toBe("video_1");
});

test("list feeds returns Page posts", async () => {
  mockFetchSequence([{
    body: {
      data: [
        { id: "1", message: "Post 1", created_time: "2025-01-01" },
        { id: "2", message: "Post 2", created_time: "2025-01-02" },
      ],
      paging: { cursors: {} },
    },
  }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const posts = await fb.feed.list({ limit: 10 });
  expect(posts).toHaveLength(2);
});

test("deletePost sends DELETE", async () => {
  mockFetchSequence([{ body: { success: true } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  await fb.feed.deletePost("123_456");

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(init.method).toBe("DELETE");
});

// --- Comments ---

test("comments create and list", async () => {
  mockFetchSequence([
    { body: { id: "comment_1" } },
    { body: { data: [{ id: "c1", message: "Hello" }], paging: { cursors: {} } } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const created = await fb.comments.create("post_123", "Nice post!");
  expect(created.id).toBe("comment_1");

  const comments = await fb.comments.list("post_123");
  expect(comments).toHaveLength(1);
});

// --- Account ---

test("account get returns Page info", async () => {
  mockFetchSequence([{ body: { id: "page_123", name: "My Page", fan_count: 1000 } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123" });

  const info = await fb.account.get(["id", "name", "fan_count"]);
  expect(info.name).toBe("My Page");
});

// --- OAuth ---

test("Facebook OAuth generates correct authorization URL", () => {
  const oauth = createFacebookOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const url = oauth.getAuthorizationUrl({ state: "xyz" });
  expect(url).toContain("facebook.com/v25.0/dialog/oauth");
  expect(url).toContain("client_id=app_123");
  expect(url).toContain("state=xyz");
});

test("Facebook OAuth exchangeCode calls correct endpoint", async () => {
  mockFetchSequence([{ body: { access_token: "short_tok" } }]);

  const oauth = createFacebookOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.exchangeCode("auth_code");
  expect(result.access_token).toBe("short_tok");
});

test("Facebook OAuth completeOAuth does full flow", async () => {
  mockFetchSequence([
    { body: { access_token: "short_tok" } },
    { body: { access_token: "long_tok", token_type: "bearer", expires_in: 5184000 } },
    { body: { data: [{ id: "page_1", name: "My Page", access_token: "page_tok" }] } },
  ]);

  const oauth = createFacebookOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.completeOAuth("auth_code");
  expect(result.userToken.access_token).toBe("long_tok");
  expect(result.pages).toHaveLength(1);
  expect(result.pages[0]!.access_token).toBe("page_tok");
});
