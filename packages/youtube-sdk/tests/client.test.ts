import { expect, test } from "bun:test";

import { YouTube } from "../src/index.ts";

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    status: 200,
    ...init,
    headers: {
      "content-type": "application/json",
      ...init?.headers,
    },
  });
}

test("builds YouTube Data API requests from discovery-generated methods", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    return jsonResponse({ items: [] });
  }) as unknown as typeof fetch;

  const youtube = YouTube.createClient({ accessToken: "token", fetch: fetchMock });
  const result = await youtube.resources.videos.list({
    part: ["snippet", "statistics", "status"],
    id: ["abc"],
  });

  expect(calls[0]?.url).toBe(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2Cstatus&id=abc",
  );
  const listHeaders = calls[0]?.init?.headers as Record<string, string> | undefined;
  expect(listHeaders?.Authorization).toBe("Bearer token");
  expect(result.items).toEqual([]);
});

test("supports offline YouTube OAuth code exchange and refresh", async () => {
  const bodies: string[] = [];
  const fetchMock = (async (_input: RequestInfo | URL, init?: RequestInit) => {
    bodies.push(String(init?.body));
    return jsonResponse({ access_token: "token", expires_in: 3600, token_type: "Bearer" });
  }) as unknown as typeof fetch;
  const oauth = YouTube.OAuth({
    clientId: "client",
    clientSecret: "secret",
    redirectUri: "https://app.example.com/callback",
    fetch: fetchMock,
  });
  const url = new URL(oauth.getAuthorizationUrl({ state: "state" }));

  expect(url.searchParams.get("access_type")).toBe("offline");
  expect(url.searchParams.get("scope")).toContain("youtube.upload");
  expect((await oauth.exchangeCode("code")).access_token).toBe("token");
  expect((await oauth.refreshToken("refresh")).access_token).toBe("token");
  expect(bodies[0]).toContain("grant_type=authorization_code");
  expect(bodies[1]).toContain("grant_type=refresh_token");
});

test("exposes videos.batchGetStats with documented required parameters", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return jsonResponse({
      items: [],
      summary: { requestedVideoCount: "2", succeededVideoCount: "2", failedVideoCount: "0" },
    });
  }) as unknown as typeof fetch;

  const youtube = YouTube.createClient({ accessToken: "token", fetch: fetchMock });
  const result = await youtube.resources.videos.batchGetStats({
    id: ["abc", "def"],
    part: ["contentDetails", "statistics"],
  });

  expect(calls[0]).toContain("videos:batchGetStats");
  expect(calls[0]).toContain("id=abc%2Cdef");
  expect(result.summary?.requestedVideoCount).toBe("2");
});

test("exposes Analytics queries and Reporting job resources", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return jsonResponse({});
  }) as unknown as typeof fetch;
  const youtube = YouTube.createClient({ accessToken: "token", fetch: fetchMock });

  await youtube.analytics.reportsQuery({
    ids: "channel==MINE",
    startDate: "2026-08-01",
    endDate: "2026-08-03",
    metrics: "views,likes",
  });
  await youtube.reporting.jobsGet({ jobId: "job/123" });

  expect(calls[0]).toStartWith("https://youtubeanalytics.googleapis.com/v2/reports?");
  expect(calls[1]).toBe("https://youtubereporting.googleapis.com/v1/jobs/job%2F123");
});

test("starts and completes resumable video uploads", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    if (init?.method === "POST") {
      return new Response(null, {
        status: 200,
        headers: { location: "https://upload.youtube.test/session" },
      });
    }
    return jsonResponse({ id: "video-id" }, { status: 201 });
  }) as unknown as typeof fetch;

  const youtube = YouTube.createClient({ accessToken: "token", fetch: fetchMock });
  const result = await youtube.uploads.uploadVideoResumable({
    params: { part: ["snippet", "status"] },
    metadata: { snippet: { title: "Launch" }, status: { privacyStatus: "private" } },
    media: new Uint8Array([1, 2, 3]),
    mediaType: "video/mp4",
  });

  expect(result.id).toBe("video-id");
  expect(calls[0]?.url).toBe(
    "https://www.googleapis.com/resumable/upload/youtube/v3/videos?part=snippet%2Cstatus&uploadType=resumable",
  );
  const uploadHeaders = calls[0]?.init?.headers as Record<string, string> | undefined;
  expect(uploadHeaders?.["X-Upload-Content-Type"]).toBe("video/mp4");
  expect(calls[1]?.url).toBe("https://upload.youtube.test/session");
  expect(calls[1]?.init?.method).toBe("PUT");
});
