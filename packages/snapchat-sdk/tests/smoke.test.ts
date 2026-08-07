import { expect, test } from "bun:test";

import { Snapchat } from "../src/index.ts";

test("Snapchat namespace is accessible", () => {
  expect(Snapchat.createClient).toBeDefined();
  expect(typeof Snapchat.createClient).toBe("function");
  expect(Snapchat.OAuth).toBeDefined();
  expect(Snapchat.ApiError).toBeDefined();
});

test("Snapchat.createClient returns a client with platform sections", () => {
  const client = Snapchat.createClient({ accessToken: "test-token" });
  expect(client.campaigns).toBeDefined();
  expect(client.media).toBeDefined();
  expect(client.organizations).toBeDefined();
  expect(client.ads).toBeDefined();
  expect(client.adSquads).toBeDefined();
  expect(client.creatives).toBeDefined();
  expect(client.measurement).toBeDefined();
  expect(typeof client.campaigns.listCampaigns).toBe("function");
});

test("SnapchatApiError is exported", () => {
  const { SnapchatApiError } = require("../src/index.ts");
  expect(SnapchatApiError).toBeDefined();
  expect(typeof SnapchatApiError).toBe("function");
});
