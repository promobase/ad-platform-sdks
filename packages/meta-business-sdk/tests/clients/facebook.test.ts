import { afterEach, expect, mock, test } from "bun:test";
import { createFacebookOAuth, createFacebookPageClient } from "../../src/clients/facebook/index.ts";
import { createClient } from "../../src/generated/index.ts";

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
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.feed.publishPost({ message: "Hello Facebook!" });
  expect(result.id).toBe("123_456");

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(url).toContain("page_123/feed");
  expect(init.method).toBe("POST");
});

test("publishPost with scheduled time sets published=false", async () => {
  mockFetchSequence([{ body: { id: "123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  await fb.feed.publishPost({
    message: "Scheduled post",
    scheduledPublishTime: 1730000000,
  });

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  const body = init.body?.toString() ?? "";
  expect(body).toContain("published=false");
});

test("publishPhoto sends POST to /page_id/photos", async () => {
  mockFetchSequence([{ body: { id: "photo_1", post_id: "123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.feed.publishPhoto({ url: "https://example.com/photo.jpg" });
  expect(result.id).toBe("photo_1");
});

test("publishVideo sends POST to /page_id/videos", async () => {
  mockFetchSequence([{ body: { id: "video_1" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.feed.publishVideo({
    url: "https://example.com/video.mp4",
    title: "My Video",
  });
  expect(result.id).toBe("video_1");
});

test("list feeds returns Page posts", async () => {
  mockFetchSequence([
    {
      body: {
        data: [
          { id: "1", message: "Post 1", created_time: "2025-01-01" },
          { id: "2", message: "Post 2", created_time: "2025-01-02" },
        ],
        paging: { cursors: {} },
      },
    },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const posts = await fb.feed.list({ limit: 10 });
  expect(posts).toHaveLength(2);
});

test("deletePost sends DELETE", async () => {
  mockFetchSequence([{ body: { success: true } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  await fb.feed.deletePost("123_456");

  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(init.method).toBe("DELETE");
});

// --- Multi-photo ---

test("publishMultiPhoto uploads each photo then creates feed with attached_media", async () => {
  mockFetchSequence([
    { body: { id: "photo_1" } }, // upload photo 1
    { body: { id: "photo_2" } }, // upload photo 2
    { body: { id: "page_123_789" } }, // create feed post
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.feed.publishMultiPhoto({
    photos: [{ url: "https://example.com/1.jpg" }, { url: "https://example.com/2.jpg" }],
    message: "Multi photo post",
  });
  expect(result.id).toBe("page_123_789");

  const calls = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls;
  expect(calls).toHaveLength(3);

  // First two calls should be photo uploads with published=false
  const [url1, init1] = calls[0] as [string, RequestInit];
  expect(url1).toContain("page_123/photos");
  expect(init1.body?.toString()).toContain("published=false");

  const [url2] = calls[1] as [string, RequestInit];
  expect(url2).toContain("page_123/photos");

  // Third call should create feed with attached_media
  const [url3, init3] = calls[2] as [string, RequestInit];
  expect(url3).toContain("page_123/feed");
  const body3 = init3.body?.toString() ?? "";
  expect(body3).toContain("attached_media");
  expect(body3).toContain("media_fbid");
});

// --- Video Reel (3-phase upload) ---

test("publishVideoReel performs 3-phase upload", async () => {
  mockFetchSequence([
    { body: { video_id: "vid_123", upload_url: "https://rupload.facebook.com/upload" } }, // Phase 1: start
    { body: { success: true } }, // Phase 2: upload
    { body: { success: true, post_id: "page_123_post_456", id: "reel_789" } }, // Phase 3: finish
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.feed.publishVideoReel({
    videoUrl: "https://example.com/video.mp4",
    description: "My reel",
  });

  expect(result.videoId).toBe("vid_123");
  expect(result.id).toBe("page_123_post_456");

  const calls = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls;
  expect(calls).toHaveLength(3);

  // Phase 1: start
  const [url1, init1] = calls[0] as [string, RequestInit];
  expect(url1).toContain("page_123/video_reels");
  expect(init1.body?.toString()).toContain("upload_phase=start");

  // Phase 2: upload to returned URL
  const [url2, init2] = calls[1] as [string, RequestInit];
  expect(url2).toBe("https://rupload.facebook.com/upload");
  expect(init2.method).toBe("POST");
  expect((init2.headers as Record<string, string>).Authorization).toBe("OAuth tok");

  // Phase 3: finish
  const [url3, init3] = calls[2] as [string, RequestInit];
  expect(url3).toContain("page_123/video_reels");
  expect(init3.body?.toString()).toContain("upload_phase=finish");
  expect(init3.body?.toString()).toContain("video_id=vid_123");
});

test("publishVideoReel throws on upload failure", async () => {
  mockFetchSequence([
    { body: { video_id: "vid_123", upload_url: "https://rupload.facebook.com/upload" } },
    { status: 500, body: { message: "Upload failed" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  await expect(
    fb.feed.publishVideoReel({ videoUrl: "https://example.com/video.mp4" }),
  ).rejects.toThrow("Video upload failed");
});

// --- Video status ---

test("getVideoStatus returns parsed status phases", async () => {
  mockFetchSequence([
    {
      body: {
        status: {
          uploading_phase: { status: "complete" },
          processing_phase: { status: "in_progress" },
          publishing_phase: { status: "not_started" },
        },
      },
    },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const status = await fb.feed.getVideoStatus("vid_123");
  expect(status.uploadingPhase?.status).toBe("complete");
  expect(status.processingPhase?.status).toBe("in_progress");
  expect(status.publishingPhase?.status).toBe("not_started");
});

// --- Attachments ---

test("fetchAttachments returns post attachment data", async () => {
  mockFetchSequence([
    {
      body: {
        attachments: {
          data: [
            {
              media: { image: { src: "https://example.com/img.jpg" } },
              subattachments: {
                data: [
                  { media: { image: { src: "https://example.com/sub1.jpg" } } },
                  { media: { image: { src: "https://example.com/sub2.jpg" } } },
                ],
              },
            },
          ],
        },
      },
    },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const attachments = await fb.feed.fetchAttachments("post_123");
  expect(attachments).toHaveLength(1);
  expect(attachments[0]!.media?.image?.src).toBe("https://example.com/img.jpg");
  expect(attachments[0]!.subattachments?.data).toHaveLength(2);
});

test("fetchAttachments returns empty array when no attachments", async () => {
  mockFetchSequence([{ body: {} }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const attachments = await fb.feed.fetchAttachments("post_123");
  expect(attachments).toEqual([]);
});

// --- Permalink ---

test("getPermalink returns permalink URL", async () => {
  mockFetchSequence([{ body: { permalink_url: "https://www.facebook.com/page/posts/123" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const permalink = await fb.feed.getPermalink("post_123");
  expect(permalink).toBe("https://www.facebook.com/page/posts/123");
});

test("getPermalink returns undefined when not available", async () => {
  mockFetchSequence([{ body: {} }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const permalink = await fb.feed.getPermalink("post_123");
  expect(permalink).toBeUndefined();
});

// --- Stories ---

test("stories.publishPhoto sends POST to /page_id/photo_stories", async () => {
  mockFetchSequence([{ body: { id: "story_123", post_id: "page_123_456" } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.stories.publishPhoto({ photoUrl: "https://example.com/photo.jpg" });
  expect(result.id).toBe("story_123");
  expect(result.postId).toBe("page_123_456");

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(url).toContain("page_123/photo_stories");
  expect(init.method).toBe("POST");
  expect(init.body?.toString()).toContain("photo_url");
});

test("stories.publishVideo performs 3-phase upload", async () => {
  mockFetchSequence([
    { body: { video_id: "vid_story_1", upload_url: "https://rupload.facebook.com/story_upload" } },
    { body: { success: true } },
    { body: { id: "story_789", post_id: "page_123_story_post" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const result = await fb.stories.publishVideo({
    videoUrl: "https://example.com/story.mp4",
    description: "My story",
  });

  expect(result.id).toBe("story_789");
  expect(result.postId).toBe("page_123_story_post");
  expect(result.videoId).toBe("vid_story_1");

  const calls = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls;
  expect(calls).toHaveLength(3);

  // Phase 1: start
  const [url1] = calls[0] as [string, RequestInit];
  expect(url1).toContain("page_123/video_stories");

  // Phase 2: upload
  const [url2, init2] = calls[1] as [string, RequestInit];
  expect(url2).toBe("https://rupload.facebook.com/story_upload");
  expect(init2.method).toBe("POST");

  // Phase 3: finish
  const [url3, init3] = calls[2] as [string, RequestInit];
  expect(url3).toContain("page_123/video_stories");
  expect(init3.body?.toString()).toContain("upload_phase=finish");
});

test("stories.publishVideo throws on upload failure", async () => {
  mockFetchSequence([
    { body: { video_id: "vid_1", upload_url: "https://rupload.facebook.com/upload" } },
    { status: 500, body: { message: "Upload failed" } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  await expect(
    fb.stories.publishVideo({ videoUrl: "https://example.com/video.mp4" }),
  ).rejects.toThrow("Story video upload failed");
});

// --- Comments ---

test("comments create and list", async () => {
  mockFetchSequence([
    { body: { id: "comment_1" } },
    { body: { data: [{ id: "c1", message: "Hello" }], paging: { cursors: {} } } },
  ]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const created = await fb.comments.create("post_123", "Nice post!");
  expect(created.id).toBe("comment_1");

  const comments = await fb.comments.list("post_123");
  expect(comments).toHaveLength(1);
});

// --- Account ---

test("account get returns Page info", async () => {
  mockFetchSequence([{ body: { id: "page_123", name: "My Page", fan_count: 1000 } }]);

  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });

  const info = await fb.account.get(["id", "name", "fan_count"]);
  expect(info.name).toBe("My Page");
});

// --- Webhooks ---

test("webhooks.subscribe calls subscribed_apps endpoint", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_123", accessToken: "tok" });
  const result = await fb.webhooks.subscribe();
  expect(result.success).toBe(true);
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
