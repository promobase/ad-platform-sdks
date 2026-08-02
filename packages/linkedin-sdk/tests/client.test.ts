import { expect, test } from "bun:test";

import { LinkedIn, LinkedInClient } from "../src/index.ts";

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

test("creates LinkedIn text posts with versioned REST headers", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    return jsonResponse({}, { status: 201, headers: { "x-restli-id": "urn:li:share:123" } });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({
    accessToken: "token",
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
  const headers = calls[0]?.init?.headers as Record<string, string> | undefined;
  expect(headers?.["LinkedIn-Version"]).toBe("202607");
  expect(headers?.Authorization).toBe("Bearer token");

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
  const session = await linkedin.assets.initializeVideoUpload("urn:li:organization:42", 4, {
    templateName: "Launch template",
    linkbackContext: "https://example.com/templates/launch",
  });
  const etags = await linkedin.assets.uploadVideoChunks(
    session.uploadInstructions,
    new Uint8Array([1, 2, 3, 4]).buffer,
  );
  await linkedin.assets.finalizeVideoUpload(session.videoUrn, etags, session.uploadToken);

  const finalizeCall = calls.find((call) => call.url.includes("action=finalizeUpload"));
  const initializeCall = calls.find((call) => call.url.includes("action=initializeUpload"));
  const initializeBody = JSON.parse(String(initializeCall?.init?.body)) as {
    initializeUploadRequest?: { templateName?: string; linkbackContext?: string };
  };
  const body = JSON.parse(String(finalizeCall?.init?.body)) as {
    finalizeUploadRequest?: { uploadToken?: string; uploadedPartIds?: string[] };
  };

  expect(session.uploadToken).toBe("upload-token");
  expect(initializeBody.initializeUploadRequest?.templateName).toBe("Launch template");
  expect(initializeBody.initializeUploadRequest?.linkbackContext).toBe(
    "https://example.com/templates/launch",
  );
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

test("builds organization share statistics queries for specific posts", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return jsonResponse({
      elements: [
        {
          share: "urn:li:share:123",
          totalShareStatistics: { impressionCount: 100, clickCount: 7 },
        },
      ],
    });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  const result = await linkedin.analytics.getOrganizationShareStatistics({
    organizationalEntity: "urn:li:organization:42",
    shares: ["urn:li:share:123"],
  });

  const url = new URL(calls[0]!);
  expect(url.pathname).toBe("/rest/organizationalEntityShareStatistics");
  expect(url.searchParams.get("q")).toBe("organizationalEntity");
  expect(url.searchParams.get("organizationalEntity")).toBe("urn:li:organization:42");
  expect(url.searchParams.get("shares")).toBe("List(urn:li:share:123)");
  expect(result.elements?.[0]?.totalShareStatistics?.impressionCount).toBe(100);
});

test("uses LinkedIn's indexed Rest.li syntax for specific UGC posts", async () => {
  let requestUrl = "";
  const fetchMock = (async (input: RequestInfo | URL) => {
    requestUrl = String(input);
    return jsonResponse({ elements: [] });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  await linkedin.analytics.getOrganizationShareStatistics({
    organizationalEntity: "urn:li:organization:42",
    ugcPosts: ["urn:li:ugcPost:1", "urn:li:ugcPost:2"],
  });

  const url = new URL(requestUrl);
  expect(url.searchParams.get("ugcPosts[0]")).toBe("urn:li:ugcPost:1");
  expect(url.searchParams.get("ugcPosts[1]")).toBe("urn:li:ugcPost:2");
});

test("builds time-bounded organization statistics queries", async () => {
  let requestUrl = "";
  const fetchMock = (async (input: RequestInfo | URL) => {
    requestUrl = String(input);
    return jsonResponse({ elements: [] });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  await linkedin.analytics.getOrganizationShareStatistics({
    organizationalEntity: "urn:li:organization:42",
    timeIntervals: {
      timeGranularityType: "DAY",
      timeRange: { start: 1_788_134_400_000, end: 1_788_220_800_000 },
    },
  });

  const url = new URL(requestUrl);
  expect(url.searchParams.get("timeIntervals")).toBe(
    "(timeRange:(start:1788134400000,end:1788220800000),timeGranularityType:DAY)",
  );
});

test("builds member post analytics queries with aggregation and date range", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return jsonResponse({
      elements: [
        {
          count: 1200,
          metricType: "IMPRESSION",
          targetEntity: { ugc: "urn:li:ugcPost:456" },
        },
      ],
    });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  const result = await linkedin.analytics.getMemberPostAnalytics({
    entity: "urn:li:ugcPost:456",
    queryType: "IMPRESSION",
    aggregation: "DAILY",
    dateRange: {
      start: { year: 2026, month: 7, day: 1 },
      end: { year: 2026, month: 7, day: 2 },
    },
  });

  const url = new URL(calls[0]!);
  expect(url.pathname).toBe("/rest/memberCreatorPostAnalytics");
  expect(url.searchParams.get("q")).toBe("entity");
  expect(url.searchParams.get("entity")).toBe("(ugc:urn:li:ugcPost:456)");
  expect(url.searchParams.get("queryType")).toBe("IMPRESSION");
  expect(url.searchParams.get("aggregation")).toBe("DAILY");
  expect(url.searchParams.get("dateRange")).toBe(
    "(start:(day:1,month:7,year:2026),end:(day:2,month:7,year:2026))",
  );
  expect(result.elements?.[0]?.count).toBe(1200);
  expect(result.elements?.[0]?.metricType).toBe("IMPRESSION");
});

test("builds aggregated current-member post analytics queries", async () => {
  let requestUrl = "";
  const fetchMock = (async (input: RequestInfo | URL) => {
    requestUrl = String(input);
    return jsonResponse({ elements: [{ count: 9, metricType: "POST_SAVE" }] });
  }) as unknown as typeof fetch;

  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });
  await linkedin.analytics.getMemberPostAnalytics({
    finder: "me",
    queryType: "POST_SAVE",
  });

  const url = new URL(requestUrl);
  expect(url.searchParams.get("q")).toBe("me");
  expect(url.searchParams.has("entity")).toBe(false);
  expect(url.searchParams.get("queryType")).toBe("POST_SAVE");
});

test("lists posts by personal or organization author for backfill", async () => {
  let requestUrl = "";
  const fetchMock = (async (input: RequestInfo | URL) => {
    requestUrl = String(input);
    return jsonResponse({ elements: [{ id: "urn:li:share:1" }], paging: { start: 0, count: 50 } });
  }) as unknown as typeof fetch;
  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });

  const result = await linkedin.posts.listByAuthor("urn:li:organization:42");

  const url = new URL(requestUrl);
  expect(url.pathname).toBe("/rest/posts");
  expect(url.searchParams.get("q")).toBe("author");
  expect(url.searchParams.get("author")).toBe("urn:li:organization:42");
  expect(url.searchParams.get("sortBy")).toBe("LAST_MODIFIED");
  expect(result.elements?.[0]?.id).toBe("urn:li:share:1");
});

test("gets individual and batch social metadata", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return jsonResponse(
      calls.length === 1
        ? { entity: "urn:li:share:1", commentSummary: { count: 3 } }
        : { results: { "urn:li:share:1": { entity: "urn:li:share:1" } } },
    );
  }) as unknown as typeof fetch;
  const linkedin = LinkedIn.createClient({ accessToken: "token", fetch: fetchMock });

  await linkedin.analytics.getSocialMetadata("urn:li:share:1");
  await linkedin.analytics.batchGetSocialMetadata(["urn:li:share:1", "urn:li:ugcPost:2"]);

  expect(new URL(calls[0]!).pathname).toBe("/rest/socialMetadata/urn%3Ali%3Ashare%3A1");
  expect(new URL(calls[1]!).searchParams.get("ids")).toBe("List(urn:li:share:1,urn:li:ugcPost:2)");
});
