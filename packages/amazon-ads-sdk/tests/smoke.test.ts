import { expect, test } from "bun:test";

import { AmazonAds } from "../src/index.ts";

test("AmazonAds namespace is accessible", () => {
  expect(AmazonAds.createClient).toBeDefined();
  expect(typeof AmazonAds.createClient).toBe("function");
  expect(AmazonAds.OAuth).toBeDefined();
  expect(AmazonAds.ApiError).toBeDefined();
});

test("AmazonAds.createClient returns a client with API sections", () => {
  const client = AmazonAds.createClient({
    accessToken: "test-token",
    clientId: "client-1",
    profileId: "profile-1",
  });
  expect(client.sponsoredProducts.campaigns).toBeDefined();
  expect(client.sponsoredBrands.campaigns).toBeDefined();
  expect(client.sponsoredDisplay.snapshotApis).toBeDefined();
  expect(client.amazonAdsApi).toBeDefined();
  expect(typeof client.sponsoredProducts.campaigns.listSponsoredProductsCampaigns).toBe("function");
});

test("AmazonAdsApiError is exported", () => {
  const { AmazonAdsApiError } = require("../src/index.ts");
  expect(AmazonAdsApiError).toBeDefined();
  expect(typeof AmazonAdsApiError).toBe("function");
});
