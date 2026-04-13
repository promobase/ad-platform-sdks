import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { gaql } from "../../../src/clients/gaql/builder.ts";

function makeClient(
  respond: (url: string, init?: RequestInit) => Response,
): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) =>
    respond(url, init),
  );
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("execute posts serialized GAQL and returns rows", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/googleAds:search");
    return new Response(
      JSON.stringify({
        results: [
          { campaign: { id: "1", name: "A" } },
          { campaign: { id: "2", name: "B" } },
        ],
      }),
      { status: 200 },
    );
  });
  const res = await gaql
    .from("campaign")
    .select("campaign.id", "campaign.name")
    .execute(client, "123");

  expect(body.query).toBe("SELECT campaign.id, campaign.name FROM campaign");
  expect(res.rows).toHaveLength(2);
  expect(res.rows[0]!.campaign.id).toBe("1");
});

test("stream paginates through nextPageToken", async () => {
  let call = 0;
  const client = makeClient(() => {
    call++;
    if (call === 1) {
      return new Response(
        JSON.stringify({
          results: [{ campaign: { id: "1" } }, { campaign: { id: "2" } }],
          nextPageToken: "p2",
        }),
        { status: 200 },
      );
    }
    return new Response(
      JSON.stringify({ results: [{ campaign: { id: "3" } }] }),
      { status: 200 },
    );
  });

  const out: string[] = [];
  for await (const row of gaql
    .from("campaign")
    .select("campaign.id")
    .stream(client, "123")) {
    out.push(row.campaign.id);
  }
  expect(out).toEqual(["1", "2", "3"]);
});

test("toArray/take/first work", async () => {
  const client = makeClient(
    () =>
      new Response(
        JSON.stringify({
          results: [
            { campaign: { id: "1" } },
            { campaign: { id: "2" } },
            { campaign: { id: "3" } },
          ],
        }),
        { status: 200 },
      ),
  );

  const all = await gaql
    .from("campaign")
    .select("campaign.id")
    .toArray(client, "123");
  expect(all.map((r) => r.campaign.id)).toEqual(["1", "2", "3"]);

  const two = await gaql
    .from("campaign")
    .select("campaign.id")
    .take(2, client, "123");
  expect(two).toHaveLength(2);

  const firstRow = await gaql
    .from("campaign")
    .select("campaign.id")
    .first(client, "123");
  expect(firstRow?.campaign.id).toBe("1");
});
