import { expect, test } from "bun:test";

import { TikTok } from "../src/index.ts";

test("TikTok namespace is accessible", () => {
  expect(TikTok.createClient).toBeDefined();
  expect(typeof TikTok.createClient).toBe("function");
});

test("TikTok.createClient returns a client object", () => {
  const client = TikTok.createClient({
    accessToken: "test-token",
    businessId: "biz-123",
  });
  expect(client).toBeDefined();
  expect(typeof client).toBe("object");
  expect(client.api).toBeDefined();
});

test("TikTokApiError is exported", () => {
  const { TikTokApiError } = require("../src/index.ts");
  expect(TikTokApiError).toBeDefined();
  expect(typeof TikTokApiError).toBe("function");
});

test("TikTok video publish uses the shared request path", async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = (async (input, init) => {
      expect(String(input)).toBe(
        "https://business-api.tiktok.com/open_api/v1.3/business/video/publish/",
      );
      expect(init?.method).toBe("POST");
      expect(init?.headers).toEqual({
        "Access-Token": "test-token",
        "Content-Type": "application/json",
      });
      expect(JSON.parse(String(init?.body))).toEqual({
        business_id: "biz-123",
        video_url: "https://cdn.example.com/video.mp4",
        post_info: {
          caption: "hello",
        },
      });

      return new Response(
        JSON.stringify({
          code: 0,
          message: "OK",
          request_id: "req-123",
          data: { share_id: "share-123" },
        }),
        { status: 200 },
      );
    }) as typeof fetch;

    const client = TikTok.createClient({
      accessToken: "test-token",
      businessId: "biz-123",
    });

    await expect(
      client.videos.publish({
        videoUrl: "https://cdn.example.com/video.mp4",
        caption: "hello",
      }),
    ).resolves.toEqual({ shareId: "share-123" });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("TikTok video publish rejects malformed response data", async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = (async () =>
      new Response(
        JSON.stringify({
          code: 0,
          message: "OK",
          request_id: "req-123",
          data: {},
        }),
        { status: 200 },
      )) as unknown as typeof fetch;

    const client = TikTok.createClient({
      accessToken: "test-token",
      businessId: "biz-123",
    });

    await expect(
      client.videos.publish({
        videoUrl: "https://cdn.example.com/video.mp4",
      }),
    ).rejects.toThrow("TikTok API response validation failed");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("TikTok video waitForPublish polls until complete", async () => {
  const originalFetch = globalThis.fetch;
  const responses = [
    { status: "PROCESSING_DOWNLOAD" },
    { status: "PUBLISH_COMPLETE", post_ids: ["post-123"] },
    { status: "PUBLISH_COMPLETE", post_ids: ["post-456"] },
  ];
  try {
    globalThis.fetch = (async () =>
      new Response(
        JSON.stringify({
          code: 0,
          message: "OK",
          request_id: "req-123",
          data: responses.shift(),
        }),
        { status: 200 },
      )) as unknown as typeof fetch;

    const client = TikTok.createClient({
      accessToken: "test-token",
      businessId: "biz-123",
    });

    await expect(
      client.videos.waitForPublish("publish-123", { intervalMs: 0, maxAttempts: 2 }),
    ).resolves.toEqual({ status: "PUBLISH_COMPLETE", post_ids: ["post-123"] });

    await expect(
      client.videos.waitForPublishResult("publish-123", { intervalMs: 0, maxAttempts: 1 }),
    ).resolves.toEqual({
      platform: "tiktok",
      state: "published",
      id: "publish-123",
      postId: "post-456",
      raw: { status: "PUBLISH_COMPLETE", post_ids: ["post-456"] },
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
});
