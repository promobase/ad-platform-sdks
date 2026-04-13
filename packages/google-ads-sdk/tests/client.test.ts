import { test, expect, mock } from "bun:test";
import { createClient } from "../src/client.ts";

test("createClient builds headers with Bearer, developer-token, login-customer-id", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, init });
    return new Response("{}", { status: 200 });
  });

  const client = createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    loginCustomerId: "1234567890",
    fetch: fetchMock as unknown as typeof fetch,
  });

  await client.http.get("/v23/customers:listAccessibleCustomers");

  expect(calls).toHaveLength(1);
  const headers = calls[0]!.init?.headers as Record<string, string>;
  expect(headers.authorization).toBe("Bearer tok");
  expect(headers["developer-token"]).toBe("dev");
  expect(headers["login-customer-id"]).toBe("1234567890");
});

test("createClient omits login-customer-id when not provided", async () => {
  let capturedHeaders: Record<string, string> = {};
  const fetchMock = mock(async (_url: string, init?: RequestInit) => {
    capturedHeaders = init?.headers as Record<string, string>;
    return new Response("{}", { status: 200 });
  });

  const client = createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
  });
  await client.http.get("/v23/customers:listAccessibleCustomers");
  expect(capturedHeaders["login-customer-id"]).toBeUndefined();
});

test("createClient routes errors through GoogleAdsError parser", async () => {
  const { GoogleAdsError } = await import("../src/errors.ts");
  const fetchMock = mock(async () =>
    new Response(
      JSON.stringify({
        error: {
          code: 400,
          message: "bad",
          details: [
            {
              "@type": "type.googleapis.com/google.ads.googleads.v23.errors.GoogleAdsFailure",
              errors: [{ errorCode: { queryError: "BAD" }, message: "nope" }],
              requestId: "r1",
            },
          ],
        },
      }),
      { status: 400 },
    ),
  );
  const client = createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
  try {
    await client.http.get("/v23/x");
    expect.unreachable();
  } catch (err) {
    expect(err).toBeInstanceOf(GoogleAdsError);
    expect((err as InstanceType<typeof GoogleAdsError>).requestId).toBe("r1");
  }
});
