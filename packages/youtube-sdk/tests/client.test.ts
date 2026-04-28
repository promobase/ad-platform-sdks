import { expect, test } from "bun:test";
import { YouTube } from "../src/index.ts";

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    status: 200,
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {}),
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
  await youtube.resources.videos.list({ part: ["snippet", "status"], id: ["abc"] });

  expect(calls[0]?.url).toBe(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus&id=abc",
  );
  expect((calls[0]?.init?.headers as Record<string, string>).Authorization).toBe("Bearer token");
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
    "https://www.googleapis.com/upload/youtube/v3/videos?part=snippet%2Cstatus&uploadType=resumable",
  );
  expect((calls[0]?.init?.headers as Record<string, string>)["X-Upload-Content-Type"]).toBe(
    "video/mp4",
  );
  expect(calls[1]?.url).toBe("https://upload.youtube.test/session");
  expect(calls[1]?.init?.method).toBe("PUT");
});
