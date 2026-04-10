import { test, expect, mock, afterEach } from "bun:test";
import { createThreadsClient, createThreadsOAuth } from "../../src/clients/threads/index.ts";

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

afterEach(() => { globalThis.fetch = originalFetch; });

// Use instant delay for tests
const testPolling = { delay: async () => {}, textIntervalMs: 0, videoIntervalMs: 0, maxAttempts: 3 };

function makeClient() {
  return createThreadsClient({
    accessToken: "tok",
    threadsUserId: "threads_456",
    polling: testPolling,
  });
}

test("publishText creates container, polls, publishes", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },        // create container
    { body: { status: "FINISHED" } },        // poll status
    { body: { id: "post_123" } },            // publish
  ]);

  const threads = makeClient();
  const result = await threads.posts.publishText({ text: "Hello Threads!" });
  expect(result.id).toBe("post_123");
});

test("publishImage creates container, polls, publishes", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },        // create container
    { body: { status: "FINISHED" } },        // poll status
    { body: { id: "img_123" } },             // publish
  ]);

  const threads = makeClient();
  const result = await threads.posts.publishImage({ imageUrl: "https://example.com/photo.jpg", text: "Nice pic" });
  expect(result.id).toBe("img_123");
});

test("publishVideo polls with IN_PROGRESS then FINISHED", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },         // create
    { body: { status: "IN_PROGRESS" } },     // poll 1
    { body: { status: "FINISHED" } },        // poll 2
    { body: { id: "vid_789" } },             // publish
  ]);

  const threads = makeClient();
  const result = await threads.posts.publishVideo({ videoUrl: "https://example.com/video.mp4" });
  expect(result.id).toBe("vid_789");
});

test("publishCarousel creates children, polls each, creates parent, publishes", async () => {
  mockFetchSequence([
    { body: { id: "child_1" } },             // create child 1
    { body: { status: "FINISHED" } },        // poll child 1
    { body: { id: "child_2" } },             // create child 2
    { body: { status: "FINISHED" } },        // poll child 2
    { body: { id: "parent_1" } },            // create parent
    { body: { status: "FINISHED" } },        // poll parent
    { body: { id: "carousel_123" } },        // publish
  ]);

  const threads = makeClient();
  const result = await threads.posts.publishCarousel({
    items: [
      { type: "image", url: "https://example.com/1.jpg" },
      { type: "image", url: "https://example.com/2.jpg" },
    ],
    text: "Carousel!",
  });
  expect(result.id).toBe("carousel_123");
});

test("reply creates container with reply_to_id, polls, publishes", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },        // create container
    { body: { status: "FINISHED" } },        // poll status
    { body: { id: "reply_123" } },           // publish
  ]);

  const threads = makeClient();
  const result = await threads.posts.reply({ text: "Great post!", replyToId: "post_original" });
  expect(result.id).toBe("reply_123");
});

test("delete calls delete on the post", async () => {
  mockFetchSequence([
    { body: { success: true } },
  ]);

  const threads = makeClient();
  await threads.posts.delete("post_123");
  expect((globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls).toHaveLength(1);
});

test("getPermalink returns permalink", async () => {
  mockFetchSequence([
    { body: { permalink: "https://threads.net/@user/post/abc" } },
  ]);

  const threads = makeClient();
  const permalink = await threads.posts.getPermalink("post_123");
  expect(permalink).toBe("https://threads.net/@user/post/abc");
});

test("getInsights returns insight data", async () => {
  mockFetchSequence([
    { body: { data: [{ name: "views", values: [{ value: 100 }] }, { name: "likes", values: [{ value: 42 }] }] } },
  ]);

  const threads = makeClient();
  const insights = await threads.posts.getInsights("post_123");
  expect(insights).toHaveLength(2);
  expect(insights[0]!.name).toBe("views");
  expect(insights[0]!.values[0]!.value).toBe(100);
});

test("list posts returns paginated response", async () => {
  mockFetchSequence([
    { body: { data: [{ id: "p1", text: "Hello" }], paging: { cursors: { after: "abc" } } } },
  ]);

  const threads = makeClient();
  const result = await threads.posts.list({ limit: 10 });
  expect(result.data).toHaveLength(1);
  expect(result.data[0]!.id).toBe("p1");
});

test("replies.list returns paginated replies", async () => {
  mockFetchSequence([
    { body: { data: [{ id: "r1", text: "Reply!" }], paging: { cursors: {} } } },
  ]);

  const threads = makeClient();
  const result = await threads.replies.list("post_123", { limit: 5 });
  expect(result.data).toHaveLength(1);
  expect(result.data[0]!.text).toBe("Reply!");
});

test("replies.getConversation returns paginated conversation", async () => {
  mockFetchSequence([
    { body: { data: [{ id: "c1", text: "Thread reply" }], paging: { cursors: {} } } },
  ]);

  const threads = makeClient();
  const result = await threads.replies.getConversation("post_123");
  expect(result.data).toHaveLength(1);
  expect(result.data[0]!.id).toBe("c1");
});

test("OAuth generates correct authorization URL", () => {
  const oauth = createThreadsOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const url = oauth.getAuthorizationUrl({ state: "xyz" });
  expect(url).toContain("https://threads.net/oauth/authorize");
  expect(url).toContain("client_id=app_123");
  expect(url).toContain("redirect_uri=https%3A%2F%2Fexample.com%2Fcallback");
  expect(url).toContain("state=xyz");
  expect(url).toContain("threads_basic");
  expect(url).toContain("threads_content_publish");
});

test("OAuth completeOAuth does full exchange flow", async () => {
  mockFetchSequence([
    { body: { access_token: "short_tok", user_id: "123" } },
    { body: { access_token: "long_tok", token_type: "bearer", expires_in: 5184000 } },
  ]);

  const oauth = createThreadsOAuth({
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

  const oauth = createThreadsOAuth({
    appId: "app_123",
    appSecret: "secret",
    redirectUri: "https://example.com/callback",
  });

  const result = await oauth.refreshToken("old_long_tok");
  expect(result.access_token).toBe("refreshed_tok");

  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("graph.threads.net/refresh_access_token");
});

test("container status ERROR throws", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status: "ERROR", error_message: "Invalid media" } },
  ]);

  const threads = makeClient();
  expect(threads.posts.publishText({ text: "test" })).rejects.toThrow("failed: Invalid media");
});

test("container status max attempts throws", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status: "IN_PROGRESS" } },
    { body: { status: "IN_PROGRESS" } },
    { body: { status: "IN_PROGRESS" } },
  ]);

  const threads = makeClient();
  expect(threads.posts.publishText({ text: "test" })).rejects.toThrow("did not finish");
});
