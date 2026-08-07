import { expect, test } from "bun:test";

import { Snapchat } from "../src/index.ts";

test("campaigns.list iterates pages via paging.next_link", async () => {
  const fetchImpl = (async (input: string | URL) => {
    const url = String(input);
    if (url.includes("cursor=page2")) {
      return new Response(
        JSON.stringify({
          request_status: "SUCCESS",
          request_id: "req-2",
          campaigns: [
            {
              sub_request_status: "SUCCESS",
              campaign: { id: "c2", name: "Second", ad_account_id: "aa1", status: "ACTIVE" },
            },
          ],
        }),
        { status: 200 },
      );
    }
    expect(url).toBe("https://adsapi.snapchat.com/v1/adaccounts/aa1/campaigns");
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-1",
        paging: {
          next_link: "https://adsapi.snapchat.com/v1/adaccounts/aa1/campaigns?cursor=page2",
        },
        campaigns: [
          {
            sub_request_status: "SUCCESS",
            campaign: { id: "c1", name: "First", ad_account_id: "aa1", status: "PAUSED" },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaigns = await client.campaigns.listCampaigns({ adAccountId: "aa1" }).all();
  expect(campaigns.map((c) => c.id)).toEqual(["c1", "c2"]);
});

test("campaigns.create wraps the body in the campaigns key", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/adaccounts/aa1/campaigns");
    const body = JSON.parse(String(init?.body));
    expect(body.campaigns).toHaveLength(1);
    expect(body.campaigns[0].name).toBe("My Campaign");
    expect(body.campaigns[0].adAccountId).toBeUndefined();
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-3",
        campaigns: [
          {
            sub_request_status: "SUCCESS",
            campaign: { id: "c9", name: "My Campaign", ad_account_id: "aa1", status: "ACTIVE" },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaign = await client.campaigns.createCampaign({
    adAccountId: "aa1",
    name: "My Campaign",
    status: "ACTIVE",
    start_time: "2026-01-01T00:00:00Z",
    buy_model: "AUCTION",
    creation_state: "DRAFT",
    objective_v2_properties: { objective_v2_type: "SALES" },
  });
  expect(campaign.id).toBe("c9");
});

test("campaigns.getCampaign returns a single entity", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/campaigns/c1");
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-4",
        campaigns: [
          {
            sub_request_status: "SUCCESS",
            campaign: { id: "c1", name: "C1", ad_account_id: "aa1", status: "ACTIVE" },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaign = await client.campaigns.getCampaign({ campaignId: "c1" });
  expect(campaign.name).toBe("C1");
});

test("campaigns.getCampaign throws SnapchatApiError when not found", async () => {
  const fetchImpl = (async () =>
    new Response(
      JSON.stringify({ request_status: "SUCCESS", request_id: "req-5", campaigns: [] }),
      { status: 200 },
    )) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  await expect(client.campaigns.getCampaign({ campaignId: "missing" })).rejects.toThrow(
    /not found/,
  );
});

test("media.uploadMedia uploads a file and returns the result", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/media/m1/upload");
    expect(init?.body).toBeInstanceOf(FormData);
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-6",
        result: { id: "m1", name: "video.mp4", media_status: "READY" },
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const media = await client.media.uploadMedia({
    mediaId: "m1",
    file: new Uint8Array([1, 2, 3]),
    filename: "video.mp4",
  });
  expect(media.media_status).toBe("READY");
});

test("organizations.listOrganizations with ad accounts", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe(
      "https://adsapi.snapchat.com/v1/me/organizations?with_ad_accounts=true",
    );
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-7",
        organizations: [
          {
            sub_request_status: "SUCCESS",
            organization: {
              id: "org1",
              name: "Hooli",
              ad_accounts: [{ id: "aa1", name: "Hooli Originals" }],
            },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const orgs = await client.organizations.listOrganizations({ with_ad_accounts: true }).all();
  expect(orgs[0]!.name).toBe("Hooli");
  expect(orgs[0]!.ad_accounts?.[0]!.id).toBe("aa1");
});

test("measurement stats are returned for a campaign", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://adsapi.snapchat.com/v1/campaigns/c1/stats?granularity=DAY");
    return new Response(
      JSON.stringify({
        request_status: "SUCCESS",
        request_id: "req-8",
        total_stats: [
          {
            sub_request_status: "SUCCESS",
            total_stat: {
              id: "c1",
              type: "CAMPAIGN",
              granularity: "DAY",
              stats: { impressions: 5 },
            },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Snapchat.createClient({ accessToken: "tok", fetch: fetchImpl });
  const stats = await client.measurement.getCampaignStats({ campaignId: "c1", granularity: "DAY" });
  expect(stats.stats.impressions).toBe(5);
});
