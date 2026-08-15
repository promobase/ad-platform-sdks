import { expect, test } from "bun:test";

import { createTikTokClient, createTikTokWebhooks } from "../src/clients/index.ts";
import { TikTokApiError } from "../src/errors.ts";

function response(data: unknown, status = 200) {
  return Response.json(
    {
      code: 0,
      message: "OK",
      request_id: "request-1",
      data,
    },
    { status },
  );
}

test("curated JSON clients use the shared base URL and typed envelope", async () => {
  let requestUrl = "";
  let requestInit: RequestInit | undefined;
  const fetchMock = (async (input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    requestUrl = String(input);
    requestInit = init;
    return response({ username: "openpromo" });
  }) as unknown as typeof fetch;

  const client = createTikTokClient({
    accessToken: "token",
    businessId: "business-1",
    baseUrl: "https://example.test/open_api/v1.3",
    fetch: fetchMock,
  });

  await expect(client.account.get()).resolves.toEqual({ username: "openpromo" });
  expect(requestUrl).toBe(
    "https://example.test/open_api/v1.3/business/get/?business_id=business-1",
  );
  expect(requestInit?.headers).toEqual({
    "Access-Token": "token",
    "Content-Type": "application/json",
  });
});

test("curated multipart clients preserve FormData content negotiation", async () => {
  let requestInit: RequestInit | undefined;
  const fetchMock = (async (_input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    requestInit = init;
    return response({ image_uri: "image-1", width: 640, height: 480 });
  }) as unknown as typeof fetch;

  const client = createTikTokClient({
    accessToken: "token",
    businessId: "business-1",
    fetch: fetchMock,
  });

  await expect(client.comments.uploadImage(new Blob(["image"]))).resolves.toEqual({
    imageUri: "image-1",
    width: 640,
    height: 480,
  });
  expect(requestInit?.headers).toEqual({ "Access-Token": "token" });
  expect(requestInit?.body).toBeInstanceOf(FormData);
});

test("webhook management uses app credentials without bearer auth", async () => {
  let requestInit: RequestInit | undefined;
  const fetchMock = (async (_input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    requestInit = init;
    return response({});
  }) as unknown as typeof fetch;

  const webhooks = createTikTokWebhooks({
    appId: "app-1",
    appSecret: "secret-1",
    fetch: fetchMock,
  });

  await expect(webhooks.update("VIDEO", "https://example.test/tiktok")).resolves.toBeUndefined();
  expect(requestInit?.headers).toEqual({ "Content-Type": "application/json" });
  expect(JSON.parse(String(requestInit?.body))).toMatchObject({
    app_id: "app-1",
    secret: "secret-1",
    event_type: "VIDEO",
  });
});

test("curated clients preserve typed TikTok API errors", async () => {
  const fetchMock = (async () =>
    Response.json(
      { code: 40100, message: "rate limited", request_id: "request-2", data: null },
      { status: 429 },
    )) as unknown as typeof fetch;

  const client = createTikTokClient({
    accessToken: "token",
    businessId: "business-1",
    fetch: fetchMock,
  });

  await expect(client.account.get()).rejects.toBeInstanceOf(TikTokApiError);
  await expect(client.account.get()).rejects.toMatchObject({
    code: 40100,
    requestId: "request-2",
    status: 429,
  });
});
