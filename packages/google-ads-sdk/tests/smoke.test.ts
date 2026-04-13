import { expect, mock, test } from "bun:test";
import { googleAdsService } from "../src/generated/v23/services/index.ts";
import { Google } from "../src/index.ts";

test("googleAdsService.search hits the right URL with correct body", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, init });
    return new Response(
      JSON.stringify({
        results: [
          {
            campaign: {
              resourceName: "customers/123/campaigns/456",
              id: "456",
              name: "Test",
            },
          },
        ],
      }),
      { status: 200 },
    );
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
  });

  const res = await googleAdsService.search(client.http, "123", {
    query: "SELECT campaign.id, campaign.name FROM campaign",
  });

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/googleAds:search");
  expect(calls[0]!.init?.method).toBe("POST");
  const body = JSON.parse(calls[0]!.init?.body as string);
  expect(body.query).toBe("SELECT campaign.id, campaign.name FROM campaign");
  expect(res.results).toHaveLength(1);
});

test("GoogleAdsError surfaces when API returns failure", async () => {
  const fetchMock = mock(
    async () =>
      new Response(
        JSON.stringify({
          error: {
            code: 400,
            message: "invalid",
            details: [
              {
                "@type": "type.googleapis.com/google.ads.googleads.v23.errors.GoogleAdsFailure",
                errors: [{ errorCode: { queryError: "BAD_FIELD_NAME" }, message: "bad field" }],
                requestId: "req-1",
              },
            ],
          },
        }),
        { status: 400 },
      ),
  );

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });

  try {
    await googleAdsService.search(client.http, "123", {
      query: "SELECT bogus FROM campaign",
    });
    expect.unreachable("should have thrown");
  } catch (err) {
    expect(err).toBeInstanceOf(Google.Errors.GoogleAdsError);
    const e = err as InstanceType<typeof Google.Errors.GoogleAdsError>;
    expect(e.httpStatus).toBe(400);
    expect(e.requestId).toBe("req-1");
    expect(e.errors[0]!.errorCode.queryError).toBe("BAD_FIELD_NAME");
  }
});
