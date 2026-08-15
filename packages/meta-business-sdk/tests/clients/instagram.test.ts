import { afterEach, expect, mock, test } from "bun:test";

import {
  createFacebookGraphInstagramClient,
  createInstagramClient,
  createInstagramLoginClient,
  createInstagramOAuth,
} from "../../src/clients/instagram/index.ts";
import { createClient } from "../../src/generated/index.ts";

const originalFetch = globalThis.fetch;

// Helper: mock sequential fetch responses
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

// Use instant delay for tests
const testPolling = {
  delay: async () => {},
  photoIntervalMs: 0,
  videoIntervalMs: 0,
  maxAttempts: 3,
};

test("publishPhoto creates container, polls, publishes", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } }, // create container
    { body: { status_code: "FINISHED" } }, // poll status
    { body: { id: "post_123" } }, // publish
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.media.publishPhoto({
    imageUrl: "https://example.com/photo.jpg",
    caption: "Hello",
  });
  expect(result.id).toBe("post_123");
});

test("publishPhoto forwards accessibility and tagging options", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status_code: "FINISHED" } },
    { body: { id: "post_123" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });
  await ig.media.publishPhoto({
    imageUrl: "https://example.com/photo.jpg",
    altText: "A product photo",
    userTags: [{ username: "creator", x: 0.5, y: 0.5 }],
  });

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  const body = new URLSearchParams(init.body as string);
  expect(body.get("alt_text")).toBe("A product photo");
  expect(body.get("user_tags")).toContain("creator");
});

test("publishReel polls with IN_PROGRESS then FINISHED", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } }, // create
    { body: { status_code: "IN_PROGRESS" } }, // poll 1
    { body: { status_code: "FINISHED" } }, // poll 2
    { body: { id: "reel_789" } }, // publish
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.media.publishVideo({ videoUrl: "https://example.com/reel.mp4" });
  expect(result.id).toBe("reel_789");
});

test("publishCarousel creates children, polls each, creates parent, publishes", async () => {
  mockFetchSequence([
    { body: { id: "child_1" } }, // create child 1
    { body: { status_code: "FINISHED" } }, // poll child 1
    { body: { id: "child_2" } }, // create child 2
    { body: { status_code: "FINISHED" } }, // poll child 2
    { body: { id: "parent_1" } }, // create parent
    { body: { status_code: "FINISHED" } }, // poll parent
    { body: { id: "carousel_123" } }, // publish
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.media.publishCarousel({
    items: [
      { type: "photo", url: "https://example.com/1.jpg" },
      { type: "photo", url: "https://example.com/2.jpg" },
    ],
    caption: "Carousel!",
  });
  expect(result.id).toBe("carousel_123");
});

test("publishCarousel rejects < 2 or > 10 items", async () => {
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  expect(ig.media.publishCarousel({ items: [{ type: "photo", url: "x" }] })).rejects.toThrow(
    "at least 2",
  );
  expect(
    ig.media.publishCarousel({ items: Array(11).fill({ type: "photo", url: "x" }) }),
  ).rejects.toThrow("max 10");
});

test("story publishing rejects ambiguous media input", async () => {
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  await expect(
    ig.stories.publish({
      imageUrl: "https://example.com/photo.jpg",
      videoUrl: "https://example.com/video.mp4",
    }),
  ).rejects.toThrow("not both");
});

test("Instagram publishing enforces the provider caption limit", async () => {
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  await expect(
    ig.media.publishPhoto({
      imageUrl: "https://example.com/photo.jpg",
      caption: "a".repeat(2201),
    }),
  ).rejects.toThrow("2200 characters");
});

test("webhooks.subscribe defaults to the current Instagram messaging fields", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  await ig.webhooks.subscribe();

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(init.body).toBeInstanceOf(URLSearchParams);
  expect((init.body as URLSearchParams).get("subscribed_fields")).toBe(
    [
      "messages",
      "messaging_postbacks",
      "messaging_seen",
      "messaging_handover",
      "messaging_referral",
      "message_reactions",
      "message_edit",
      "standby",
      "comments",
      "live_comments",
      "mentions",
      "story_insights",
    ].join(","),
  );
});

test("story publish works", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status_code: "FINISHED" } },
    { body: { id: "story_1" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.stories.publish({ imageUrl: "https://example.com/story.jpg" });
  expect(result.id).toBe("story_1");
});

test("comments create and list", async () => {
  mockFetchSequence([
    { body: { id: "comment_1" } },
    { body: { data: [{ id: "c1", text: "Hello", username: "user1", timestamp: "2025-01-01" }] } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  const created = await ig.comments.create("post_123", "First!");
  expect(created.id).toBe("comment_1");

  const list = await ig.comments.list("post_123");
  expect(list).toHaveLength(1);
  expect(list[0]!.text).toBe("Hello");
});

test("account.insights returns typed account-level metrics", async () => {
  mockFetchSequence([{ body: { data: [{ name: "reach", period: "day", values: [] }] } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  const result = await ig.account.insights({ metrics: ["reach"], period: ["day"] });
  expect(result[0]?.name).toBe("reach");

  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("ig_456/insights");
});

test("polling throws on ERROR status", async () => {
  mockFetchSequence([{ body: { id: "container_1" } }, { body: { status_code: "ERROR" } }]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  expect(ig.media.publishPhoto({ imageUrl: "https://example.com/photo.jpg" })).rejects.toThrow(
    "ERROR",
  );
});

test("polling throws after max attempts", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status_code: "IN_PROGRESS" } },
    { body: { status_code: "IN_PROGRESS" } },
    { body: { status_code: "IN_PROGRESS" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  expect(ig.media.publishPhoto({ imageUrl: "https://x.com/p.jpg" })).rejects.toThrow(
    "did not finish",
  );
});

test("OAuth generates correct authorization URL", () => {
  const oauth = createInstagramOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const url = oauth.getAuthorizationUrl({ state: "xyz" });
  expect(url).toContain("https://api.instagram.com/oauth/authorize");
  expect(url).toContain("client_id=app_123");
  expect(url).toContain("redirect_uri=https%3A%2F%2Fexample.com%2Fcallback");
  expect(url).toContain("state=xyz");
  expect(url).toContain("instagram_business_basic");
  expect(url).toContain("instagram_business_manage_messages");
});

test("credential-family client factories select the matching Graph host", async () => {
  const requests: string[] = [];
  const fetchImpl = (async (input: string | Request | URL) => {
    requests.push(String(input));
    return new Response(JSON.stringify({ data: [] }), {
      headers: { "Content-Type": "application/json" },
    });
  }) as typeof fetch;

  const instagramLogin = createInstagramLoginClient({
    accessToken: "ig-token",
    igAccountId: "ig_123",
    fetch: fetchImpl,
  });
  const facebookGraph = createFacebookGraphInstagramClient({
    accessToken: "fb-token",
    igAccountId: "ig_123",
    fetch: fetchImpl,
  });

  await instagramLogin.account.get();
  await facebookGraph.account.get();

  expect(instagramLogin.credentialFamily).toBe("instagram-login");
  expect(facebookGraph.credentialFamily).toBe("facebook-login");
  expect(requests[0]).toStartWith("https://graph.instagram.com/");
  expect(requests[1]).toStartWith("https://graph.facebook.com/");
});

test("OAuth exchangeCode calls correct endpoint", async () => {
  mockFetchSequence([{ body: { access_token: "short_tok", user_id: "123" } }]);

  const oauth = createInstagramOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.exchangeCode("auth_code_xyz");
  expect(result.access_token).toBe("short_tok");
  expect(result.user_id).toBe("123");

  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("api.instagram.com/oauth/access_token");
});

test("OAuth completeOAuth does full exchange flow", async () => {
  mockFetchSequence([
    { body: { access_token: "short_tok", user_id: "123" } },
    { body: { access_token: "long_tok", token_type: "bearer", expires_in: 5184000 } },
  ]);

  const oauth = createInstagramOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.completeOAuth("auth_code_xyz");
  expect(result.token.access_token).toBe("long_tok");
  expect(result.userId).toBe("123");
});

test("OAuth refreshToken calls correct endpoint", async () => {
  mockFetchSequence([
    { body: { access_token: "refreshed_tok", token_type: "bearer", expires_in: 5184000 } },
  ]);

  const oauth = createInstagramOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.refreshToken("old_long_tok");
  expect(result.access_token).toBe("refreshed_tok");

  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("graph.instagram.com/refresh_access_token");
});

test("OAuth fetches a reconnect-ready Instagram business profile", async () => {
  mockFetchSequence([
    {
      body: {
        id: "ig_456",
        user_id: "user_1",
        username: "business",
        followers_count: 100,
      },
    },
  ]);
  const oauth = createInstagramOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const profile = await oauth.getBusinessUserProfile("token");
  expect(profile.username).toBe("business");
  expect(profile.followers_count).toBe(100);
});

test("Instagram webhook subscription can be removed", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  await ig.webhooks.unsubscribe();

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(init.method).toBe("DELETE");
});

test("webhooks.subscribe calls subscribed_apps endpoint", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });
  const result = await ig.webhooks.subscribe();
  expect(result.success).toBe(true);
});

test("low-level containers API works directly", async () => {
  mockFetchSequence([
    { body: { id: "c1" } },
    { body: { status_code: "FINISHED" } },
    { body: { id: "post_1" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });
  expect(ig.api).toBe(api);

  const container = await ig.containers.create({ imageUrl: "https://x.com/p.jpg" });
  expect(container.id).toBe("c1");

  const status = await ig.containers.getStatus("c1");
  expect(status).toBe("FINISHED");

  const published = await ig.containers.publish("c1");
  expect(published.id).toBe("post_1");
});

test("resumable upload rejects a malformed provider result", async () => {
  mockFetchSequence([{ body: {} }]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  await expect(
    ig.containers.uploadResumable({
      containerId: "c1",
      accessToken: "tok",
      fileUrl: "https://cdn.example.com/video.mp4",
    }),
  ).rejects.toThrow();
});
