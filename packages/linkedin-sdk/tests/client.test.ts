import { expect, test } from "bun:test";
import { LinkedIn, LinkedInClient } from "../src/index.ts";

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

test("creates LinkedIn text posts with versioned REST headers", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    return jsonResponse({}, { status: 201, headers: { "x-restli-id": "urn:li:share:123" } });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({
    accessToken: "token",
    apiVersion: "202604",
    fetch: fetchMock,
  });

  const result = await linkedin.posts.createText({
    authorUrn: "urn:li:organization:42",
    commentary: "Hello LinkedIn",
  });

  expect(result.postUrn).toBe("urn:li:share:123");
  expect(calls).toHaveLength(1);
  expect(calls[0]?.url).toBe("https://api.linkedin.com/rest/posts");
  expect(calls[0]?.init?.method).toBe("POST");
  expect((calls[0]?.init?.headers as Record<string, string>)["LinkedIn-Version"]).toBe("202604");
  expect((calls[0]?.init?.headers as Record<string, string>).Authorization).toBe("Bearer token");

  const body = JSON.parse(String(calls[0]?.init?.body)) as Record<string, unknown>;
  expect(body.author).toBe("urn:li:organization:42");
  expect(body.commentary).toBe("Hello LinkedIn");
  expect(body.lifecycleState).toBe("PUBLISHED");
});

test("creates LinkedIn multi-image post payloads", async () => {
  let requestBody: Record<string, unknown> | undefined;
  const fetchMock = (async (_input: RequestInfo | URL, init?: RequestInit) => {
    requestBody = JSON.parse(String(init?.body)) as Record<string, unknown>;
    return jsonResponse({}, { status: 201, headers: { "x-restli-id": "urn:li:ugcPost:456" } });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  await linkedin.posts.createMultiImage({
    authorUrn: "urn:li:person:abc",
    commentary: "Gallery",
    images: [
      { urn: "urn:li:image:one", altText: "one" },
      { urn: "urn:li:image:two", altText: "two" },
    ],
  });

  const content = requestBody?.content as {
    multiImage?: { images?: Array<{ id: string; altText?: string }> };
  };
  expect(content.multiImage?.images).toEqual([
    { id: "urn:li:image:one", altText: "one" },
    { id: "urn:li:image:two", altText: "two" },
  ]);
});

test("carries LinkedIn video uploadToken into finalizeUpload", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });

    if (String(input).includes("action=initializeUpload")) {
      return jsonResponse({
        value: {
          video: "urn:li:video:abc",
          uploadToken: "upload-token",
          uploadInstructions: [
            {
              uploadUrl: "https://www.linkedin.com/dms-uploads/video-part",
              firstByte: 0,
              lastByte: 3,
            },
          ],
        },
      });
    }

    if (String(input).includes("dms-uploads")) {
      return new Response(null, { status: 200, headers: { etag: "part-etag" } });
    }

    return jsonResponse({}, { status: 200 });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  const session = await linkedin.assets.initializeVideoUpload("urn:li:organization:42", 4);
  const etags = await linkedin.assets.uploadVideoChunks(
    session.uploadInstructions,
    new Uint8Array([1, 2, 3, 4]).buffer,
  );
  await linkedin.assets.finalizeVideoUpload(session.videoUrn, etags, session.uploadToken);

  const finalizeCall = calls.find((call) => call.url.includes("action=finalizeUpload"));
  const body = JSON.parse(String(finalizeCall?.init?.body)) as {
    finalizeUploadRequest?: { uploadToken?: string; uploadedPartIds?: string[] };
  };

  expect(session.uploadToken).toBe("upload-token");
  expect(etags).toEqual(["part-etag"]);
  expect(body.finalizeUploadRequest?.uploadToken).toBe("upload-token");
  expect(body.finalizeUploadRequest?.uploadedPartIds).toEqual(["part-etag"]);
});

test("captures JSON API errors", async () => {
  const client = new LinkedInClient({
    accessToken: "token",
    fetch: (async () =>
      jsonResponse(
        { message: "bad request", serviceErrorCode: 100 },
        { status: 400, statusText: "Bad Request" },
      )) as unknown as typeof fetch,
  });

  await expect(client.request("/posts")).rejects.toThrow("bad request");
});
