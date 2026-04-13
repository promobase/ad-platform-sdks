import { expect, mock, test } from "bun:test";
import { Google } from "../../src/index.ts";

test("customer factory chains budget → campaign → ad group → ad group ad via rich refs", async () => {
  const calls: { url: string; body: any }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(init.body as string) : null;
    calls.push({ url, body });

    if (url.includes("campaignBudgets:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/campaignBudgets/1" }] }),
        { status: 200 },
      );
    }
    if (url.includes("campaigns:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/2" }] }),
        { status: 200 },
      );
    }
    if (url.includes("adGroups:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/3" }] }),
        { status: 200 },
      );
    }
    if (url.includes("adGroupAds:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/adGroupAds/3~4" }] }),
        { status: 200 },
      );
    }
    return new Response("{}", { status: 200 });
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
  const customer = Google.Ads.customer(client, "123");

  const budget = await customer.campaignBudgets.create({ name: "Q1", amountMicros: "5000000" });
  const campaign = await customer.campaigns.create({
    name: "Search Q1",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: budget,
  });
  const adGroup = await customer.adGroups.create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign,
  });
  const adGroupAd = await customer.adGroupAds.create({
    adGroup,
    status: "ENABLED",
    ad: {
      finalUrls: ["https://example.com"],
      responsiveSearchAd: {
        headlines: [{ text: "A" }, { text: "B" }, { text: "C" }],
        descriptions: [{ text: "X" }, { text: "Y" }],
      },
    },
  });

  expect(budget.resourceName).toBe("customers/123/campaignBudgets/1");
  expect(campaign.resourceName).toBe("customers/123/campaigns/2");
  expect(adGroup.resourceName).toBe("customers/123/adGroups/3");
  expect(adGroupAd.resourceName).toBe("customers/123/adGroupAds/3~4");

  // Verify refs were resolved from rich objects (not passed as-is):
  expect(calls[1]!.body.operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/1",
  );
  expect(calls[2]!.body.operations[0].create.campaign).toBe("customers/123/campaigns/2");
  expect(calls[3]!.body.operations[0].create.adGroup).toBe("customers/123/adGroups/3");
});
