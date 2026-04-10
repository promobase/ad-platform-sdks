import { test, expect, mock, afterEach } from "bun:test";
import { createMetaTools, createInstagramTools, createFacebookTools, createThreadsTools, createCampaignTools } from "../../src/ai/index.ts";
import { createClient } from "../../src/generated/index.ts";

const originalFetch = globalThis.fetch;

function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } }))
  ) as unknown as typeof fetch;
}

afterEach(() => { globalThis.fetch = originalFetch; });

test("createInstagramTools returns all IG tool definitions", () => {
  const api = createClient({ accessToken: "tok" });
  const tools = createInstagramTools({ api, igAccountId: "ig_123" });

  expect(tools.ig_publish_photo).toBeDefined();
  expect(tools.ig_publish_video).toBeDefined();
  expect(tools.ig_publish_carousel).toBeDefined();
  expect(tools.ig_publish_story).toBeDefined();
  expect(tools.ig_list_media).toBeDefined();
  expect(tools.ig_comment_create).toBeDefined();
  expect(tools.ig_comment_reply).toBeDefined();
  expect(tools.ig_send_dm).toBeDefined();
  expect(tools.ig_private_reply).toBeDefined();
  expect(tools.ig_get_account).toBeDefined();

  // Each tool should have description and execute
  expect(tools.ig_publish_photo.description).toContain("photo");
  expect(typeof tools.ig_publish_photo.execute).toBe("function");
});

test("createFacebookTools returns all FB tool definitions", () => {
  const api = createClient({ accessToken: "tok" });
  const tools = createFacebookTools({ api, pageId: "page_123", accessToken: "tok" });

  expect(tools.fb_publish_post).toBeDefined();
  expect(tools.fb_publish_photo).toBeDefined();
  expect(tools.fb_publish_multi_photo).toBeDefined();
  expect(tools.fb_publish_video_reel).toBeDefined();
  expect(tools.fb_comment_create).toBeDefined();
  expect(tools.fb_send_dm).toBeDefined();
  expect(tools.fb_get_account).toBeDefined();
});

test("createThreadsTools returns all Threads tool definitions", () => {
  const tools = createThreadsTools({ accessToken: "tok", threadsUserId: "t_123" });

  expect(tools.threads_publish_text).toBeDefined();
  expect(tools.threads_publish_image).toBeDefined();
  expect(tools.threads_publish_carousel).toBeDefined();
  expect(tools.threads_reply).toBeDefined();
  expect(tools.threads_get_insights).toBeDefined();
});

test("createCampaignTools returns campaign management tools", () => {
  const api = createClient({ accessToken: "tok" });
  const tools = createCampaignTools({ api, adAccountId: "act_123" });

  expect(tools.campaign_list).toBeDefined();
  expect(tools.campaign_create).toBeDefined();
  expect(tools.campaign_update).toBeDefined();
  expect(tools.campaign_delete).toBeDefined();
  expect(tools.adset_list).toBeDefined();
  expect(tools.ad_list).toBeDefined();
  expect(tools.ad_account_insights).toBeDefined();
});

test("createMetaTools combines selected tool groups", () => {
  const api = createClient({ accessToken: "tok" });
  const tools = createMetaTools({
    api,
    igAccountId: "ig_123",
    pageId: "page_123",
    pageAccessToken: "tok",
    adAccountId: "act_123",
    include: ["instagram", "facebook", "campaigns"],
  });

  // IG tools present
  expect(tools.ig_publish_photo).toBeDefined();
  // FB tools present
  expect(tools.fb_publish_post).toBeDefined();
  // Campaign tools present
  expect(tools.campaign_list).toBeDefined();
  // Threads tools NOT present (not in include)
  expect(tools.threads_publish_text).toBeUndefined();
});

test("createMetaTools skips groups without required config", () => {
  const api = createClient({ accessToken: "tok" });
  const tools = createMetaTools({ api });

  // No igAccountId provided, no IG tools
  expect(tools.ig_publish_photo).toBeUndefined();
  // No pageId, no FB tools
  expect(tools.fb_publish_post).toBeUndefined();
});

test("ig_get_account tool executes correctly", async () => {
  mockFetchJson({ id: "ig_123", username: "testuser", name: "Test" });

  const api = createClient({ accessToken: "tok" });
  const tools = createInstagramTools({ api, igAccountId: "ig_123" });

  const result: any = await tools.ig_get_account.execute!({}, { toolCallId: "test", messages: [], abortSignal: new AbortController().signal });
  expect(result.id).toBe("ig_123");
  expect(result.username).toBe("testuser");
});

test("fb_get_account tool executes correctly", async () => {
  mockFetchJson({ id: "page_123", name: "Test Page" });

  const api = createClient({ accessToken: "tok" });
  const tools = createFacebookTools({ api, pageId: "page_123", accessToken: "tok" });

  const result: any = await tools.fb_get_account.execute!({}, { toolCallId: "test", messages: [], abortSignal: new AbortController().signal });
  expect(result.id).toBe("page_123");
  expect(result.name).toBe("Test Page");
});

test("threads_get_account tool executes correctly", async () => {
  mockFetchJson({ id: "t_123", username: "threaduser" });

  const tools = createThreadsTools({ accessToken: "tok", threadsUserId: "t_123" });

  const result: any = await tools.threads_get_account.execute!({}, { toolCallId: "test", messages: [], abortSignal: new AbortController().signal });
  expect(result.id).toBe("t_123");
  expect(result.username).toBe("threaduser");
});
