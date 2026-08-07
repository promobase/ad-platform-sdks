import { expect, test } from "bun:test";

import { SnapchatApiClient, SnapchatApiError } from "../src/index.ts";

function envelope(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

test("get sends Bearer auth and returns the envelope", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe(
      "https://adsapi.snapchat.com/v1/me/organizations?with_ad_accounts=true",
    );
    expect((init!.headers as Record<string, string>).Authorization).toBe("Bearer tok");
    return envelope({ request_status: "SUCCESS", request_id: "req-1", organizations: [] });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.get("/me/organizations", { with_ad_accounts: true });
  expect(result.request_status).toBe("SUCCESS");
});

test("get accepts absolute next_link URLs", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/ads?cursor=abc&limit=50");
    return envelope({ request_status: "SUCCESS", request_id: "req-2", ads: [] });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  await api.get("https://adsapi.snapchat.com/v1/ads?cursor=abc&limit=50");
});

test("throws SnapchatApiError on HTTP errors with display_message", async () => {
  const fetchImpl = (async () =>
    new Response(
      JSON.stringify({
        request_status: "ERROR",
        request_id: "req-3",
        debug_message: "bad request body",
        display_message: "The request body is invalid",
      }),
      { status: 400 },
    )) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  const error = await api.get("/campaigns/x").catch((e: unknown) => e);
  expect(error).toBeInstanceOf(SnapchatApiError);
  if (error instanceof SnapchatApiError) {
    expect(error.status).toBe(400);
    expect(error.requestId).toBe("req-3");
    expect(error.message).toContain("The request body is invalid");
    expect(error.isAuthError).toBe(false);
  }
});

test("throws on business-level ERROR status with HTTP 200", async () => {
  const fetchImpl = (async () =>
    envelope({
      request_status: "ERROR",
      request_id: "req-4",
      debug_message: "unauthorized ad account",
    })) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  const error = await api.get("/campaigns/x").catch((e: unknown) => e);
  expect(error).toBeInstanceOf(SnapchatApiError);
});

test("retries 429 responses and succeeds", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) {
      return new Response(JSON.stringify({ request_status: "ERROR" }), { status: 429 });
    }
    return envelope({ request_status: "SUCCESS", request_id: "req-5", organizations: [] });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({
    accessToken: "tok",
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  const result = await api.get("/me/organizations");
  expect(result.request_status).toBe("SUCCESS");
  expect(calls).toBe(2);
});

test("retries on network errors", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) throw new TypeError("network down");
    return envelope({ request_status: "SUCCESS", request_id: "req-6", organizations: [] });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({
    accessToken: "tok",
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  await api.get("/me/organizations");
  expect(calls).toBe(2);
});

test("upload sends multipart/form-data", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/media/m1/upload");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBeInstanceOf(FormData);
    return envelope({ request_status: "SUCCESS", result: { id: "m1", media_status: "READY" } });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.upload<{
    request_status: string;
    result: { id: string; media_status: string };
  }>("/media/m1/upload", new Uint8Array([1, 2, 3]), { filename: "video.mp4" });
  expect(result.result.media_status).toBe("READY");
});

test("post JSON body", async () => {
  const fetchImpl = (async (_input: string | URL, init?: RequestInit) => {
    expect(init?.method).toBe("POST");
    expect((init!.headers as Record<string, string>)["Content-Type"]).toBe("application/json");
    expect(JSON.parse(String(init?.body))).toEqual({ campaigns: [{ name: "C1" }] });
    return envelope({ request_status: "SUCCESS", campaigns: [] });
  }) as unknown as typeof fetch;

  const api = new SnapchatApiClient({ accessToken: "tok", fetch: fetchImpl });
  await api.post("/adaccounts/a1/campaigns", { campaigns: [{ name: "C1" }] });
});
