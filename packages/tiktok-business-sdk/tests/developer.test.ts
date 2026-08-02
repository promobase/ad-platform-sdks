import { expect, test } from "bun:test";

import { TikTok } from "../src/index.ts";

function response(data: unknown) {
  return Response.json({ data, error: { code: "ok", message: "", log_id: "log-1" } });
}

test("supports Login Kit PKCE OAuth and refresh", async () => {
  let body = "";
  const fetchMock = (async (_input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    body = String(init?.body);
    return Response.json({
      access_token: "token",
      refresh_token: "refresh-next",
      expires_in: 86400,
      open_id: "user-1",
    });
  }) as unknown as typeof fetch;
  const oauth = TikTok.Developer.OAuth({
    clientKey: "client",
    clientSecret: "secret",
    redirectUri: "https://app.example.com/callback",
    fetch: fetchMock,
  });
  const pkce = await TikTok.Developer.createPkcePair();
  const url = new URL(oauth.getAuthorizationUrl({ state: "state", codeChallenge: pkce.challenge }));

  expect(pkce.challenge === pkce.verifier).toBe(false);
  expect(url.searchParams.get("scope")?.includes("video.publish")).toBe(true);
  expect((await oauth.refreshToken("refresh")).access_token).toBe("token");
  expect(body.includes("grant_type=refresh_token")).toBe(true);
});

test("lists and queries Developer API videos for backfill and metrics", async () => {
  const calls: Array<{ url: string; body: unknown }> = [];
  const fetchMock = (async (input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    calls.push({ url: String(input), body: JSON.parse(String(init?.body)) });
    return response({
      videos: [{ id: "video-1", view_count: 100, like_count: 10 }],
      cursor: 123,
      has_more: false,
    });
  }) as unknown as typeof fetch;
  const client = TikTok.Developer.createClient({ accessToken: "token", fetch: fetchMock });

  const listed = await client.videos.list({ cursor: 456 });
  await client.videos.query(["video-1"]);

  expect(calls[0]?.url.includes("/v2/video/list/")).toBe(true);
  expect(calls[0]?.url.includes("view_count")).toBe(true);
  expect(calls[0]?.body).toEqual({ cursor: 456, max_count: 20 });
  expect(calls[1]?.body).toEqual({ filters: { video_ids: ["video-1"] } });
  expect(listed.videos[0]?.view_count).toBe(100);
});

test("initializes durable video/photo posts and polls status", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const fetchMock = (async (input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    const body = JSON.parse(String(init?.body)) as Record<string, unknown>;
    calls.push({ url: String(input), body });
    if (String(input).includes("status/fetch")) return response({ status: "PUBLISH_COMPLETE" });
    return response({ publish_id: `publish-${calls.length}` });
  }) as unknown as typeof fetch;
  const client = TikTok.Developer.createClient({ accessToken: "token", fetch: fetchMock });

  await client.videos.initDirectPost({
    videoUrl: "https://cdn.example.com/video.mp4",
    privacyLevel: "SELF_ONLY",
  });
  await client.photos.initDirectPost({
    photoUrls: ["https://cdn.example.com/photo.jpg"],
    title: "Photo",
    description: "Description",
    privacyLevel: "SELF_ONLY",
  });
  const status = await client.publish.getStatus("publish-1");

  expect((calls[0]?.body.source_info as { source?: string } | undefined)?.source).toBe(
    "PULL_FROM_URL",
  );
  expect(calls[1]?.body.media_type).toBe("PHOTO");
  expect(status.status).toBe("PUBLISH_COMPLETE");
});
