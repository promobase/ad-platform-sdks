import { expect, test } from "bun:test";

import { Reddit } from "../src/index.ts";

test("Reddit namespace is accessible", () => {
  expect(Reddit.createClient).toBeDefined();
  expect(typeof Reddit.createClient).toBe("function");
  expect(Reddit.OAuth).toBeDefined();
  expect(Reddit.ApiError).toBeDefined();
});

test("Reddit.createClient returns a client with platform sections", () => {
  const client = Reddit.createClient({ accessToken: "test-token" });
  expect(client.accounts).toBeDefined();
  expect(client.campaigns).toBeDefined();
  expect(client.adGroups).toBeDefined();
  expect(client.ads).toBeDefined();
  expect(client.targeting).toBeDefined();
  expect(client.reports).toBeDefined();
  expect(typeof client.campaigns.listCampaigns).toBe("function");
});

test("RedditApiError is exported", () => {
  const { RedditApiError } = require("../src/index.ts");
  expect(RedditApiError).toBeDefined();
  expect(typeof RedditApiError).toBe("function");
});
