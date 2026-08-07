import { expect, test } from "bun:test";

import { Pinterest } from "../src/index.ts";

test("Pinterest namespace is accessible", () => {
  expect(Pinterest.createClient).toBeDefined();
  expect(typeof Pinterest.createClient).toBe("function");
  expect(Pinterest.OAuth).toBeDefined();
  expect(Pinterest.ApiError).toBeDefined();
});

test("Pinterest.createClient returns a client with platform sections", () => {
  const client = Pinterest.createClient({ accessToken: "test-token" });
  expect(client.adAccounts).toBeDefined();
  expect(client.campaigns).toBeDefined();
  expect(client.boards).toBeDefined();
  expect(client.pins).toBeDefined();
  expect(client.ads).toBeDefined();
  expect(client.targetingTemplate).toBeDefined();
  expect(typeof client.campaigns.listCampaigns).toBe("function");
  expect(typeof client.boards.listBoards).toBe("function");
});

test("PinterestApiError is exported", () => {
  const { PinterestApiError } = require("../src/index.ts");
  expect(PinterestApiError).toBeDefined();
  expect(typeof PinterestApiError).toBe("function");
});
