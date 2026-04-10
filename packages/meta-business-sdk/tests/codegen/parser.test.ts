import { test, expect } from "bun:test";
import { parseSpecs, applyPatches } from "../../src/codegen/parser.ts";

test("parseSpecs loads spec files into a map", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  expect(specs.size).toBeGreaterThan(900);
  expect(specs.has("Campaign")).toBe(true);
  const campaign = specs.get("Campaign")!;
  expect(campaign.fields.length).toBeGreaterThan(10);
  expect(campaign.apis.length).toBeGreaterThan(5);
});

test("parseSpecs parses field shape correctly", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const campaign = specs.get("Campaign")!;
  const idField = campaign.fields.find((f) => f.name === "id");
  expect(idField).toBeDefined();
  expect(idField!.type).toBe("string");
  const bidField = campaign.fields.find((f) => f.name === "bid_strategy");
  expect(bidField).toBeDefined();
  expect(bidField!.type).toBe("Campaign_bid_strategy");
});

test("parseSpecs parses api shape correctly", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const campaign = specs.get("Campaign")!;
  const getAds = campaign.apis.find((a) => a.endpoint === "ads" && a.method === "GET");
  expect(getAds).toBeDefined();
  expect(getAds!.return).toBe("Ad");
  expect(getAds!.params.length).toBeGreaterThan(0);
  const selfGet = campaign.apis.find((a) => a.name === "#get");
  expect(selfGet).toBeDefined();
  expect(selfGet!.method).toBe("GET");
  expect(selfGet!.return).toBe("Campaign");
});

test("parseSpecs handles pure data objects (no apis)", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const insights = specs.get("AdsInsights")!;
  expect(insights.fields.length).toBeGreaterThan(10);
  expect(insights.apis).toHaveLength(0);
});

test("applyPatches overrides return types from SDKCodegen.json", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const patched = await applyPatches(specs, "api_specs/api_specs/SDKCodegen.json");
  const campaign = patched.get("Campaign")!;
  const postInsights = campaign.apis.find((a) => a.method === "POST" && a.endpoint === "insights");
  expect(postInsights!.return).toBe("AdReportRun");
});

test("applyPatches marks fields as not_visible", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const patched = await applyPatches(specs, "api_specs/api_specs/SDKCodegen.json");
  const business = patched.get("Business")!;
  const paymentField = business.fields.find((f) => f.name === "payment_account_id");
  expect(paymentField?.not_visible).toBe(true);
});
