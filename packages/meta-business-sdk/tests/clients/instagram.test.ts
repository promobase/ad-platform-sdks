import { test, expect, mock, afterEach } from "bun:test";
import { createClient } from "../../src/generated/index.ts";
import { createInstagramClient } from "../../src/clients/instagram/index.ts";

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
const testPolling = { delay: async () => {}, photoIntervalMs: 0, videoIntervalMs: 0, maxAttempts: 3 };

test("publishPhoto creates container, polls, publishes", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },           // create container
    { body: { status_code: "FINISHED" } },      // poll status
    { body: { id: "post_123" } },               // publish
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.media.publishPhoto({ imageUrl: "https://example.com/photo.jpg", caption: "Hello" });
  expect(result.id).toBe("post_123");
});

test("publishReel polls with IN_PROGRESS then FINISHED", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },           // create
    { body: { status_code: "IN_PROGRESS" } },  // poll 1
    { body: { status_code: "FINISHED" } },     // poll 2
    { body: { id: "reel_789" } },              // publish
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.media.publishReel({ videoUrl: "https://example.com/reel.mp4" });
  expect(result.id).toBe("reel_789");
});

test("publishCarousel creates children, polls each, creates parent, publishes", async () => {
  mockFetchSequence([
    { body: { id: "child_1" } },               // create child 1
    { body: { status_code: "FINISHED" } },     // poll child 1
    { body: { id: "child_2" } },               // create child 2
    { body: { status_code: "FINISHED" } },     // poll child 2
    { body: { id: "parent_1" } },              // create parent
    { body: { status_code: "FINISHED" } },     // poll parent
    { body: { id: "carousel_123" } },          // publish
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

  expect(ig.media.publishCarousel({ items: [{ type: "photo", url: "x" }] })).rejects.toThrow("at least 2");
  expect(ig.media.publishCarousel({ items: Array(11).fill({ type: "photo", url: "x" }) })).rejects.toThrow("max 10");
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

test("polling throws on ERROR status", async () => {
  mockFetchSequence([
    { body: { id: "container_1" } },
    { body: { status_code: "ERROR" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  expect(ig.media.publishPhoto({ imageUrl: "https://example.com/photo.jpg" })).rejects.toThrow("ERROR");
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

  expect(ig.media.publishPhoto({ imageUrl: "https://x.com/p.jpg" })).rejects.toThrow("did not finish");
});

test("low-level containers API works directly", async () => {
  mockFetchSequence([
    { body: { id: "c1" } },
    { body: { status_code: "FINISHED" } },
    { body: { id: "post_1" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456" });

  const container = await ig.containers.create({ imageUrl: "https://x.com/p.jpg" });
  expect(container.id).toBe("c1");

  const status = await ig.containers.getStatus("c1");
  expect(status).toBe("FINISHED");

  const published = await ig.containers.publish("c1");
  expect(published.id).toBe("post_1");
});
