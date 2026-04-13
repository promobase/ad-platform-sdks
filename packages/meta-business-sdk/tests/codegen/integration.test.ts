import { expect, test } from "bun:test";
import { runCodegen } from "../../src/codegen/index.ts";

test("runCodegen generates Campaign object file", async () => {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
  });

  const content = await Bun.file("src/generated/objects/campaign.ts").text();
  expect(content).toContain("export interface CampaignFields");
  expect(content).toContain("id: string");
  expect(content).toContain("name: string");
  expect(content).toContain("campaignNode");
});

test("runCodegen generates pure data objects (no node factory)", async () => {
  // Already ran in previous test, just check the output
  const content = await Bun.file("src/generated/objects/ads-insights.ts").text();
  expect(content).toContain("export interface AdsInsightsFields");
  expect(content).not.toContain("adsInsightsNode");
});

test("runCodegen generates barrel export index.ts", async () => {
  const content = await Bun.file("src/generated/index.ts").text();
  expect(content).toContain("campaign");
  expect(content).toContain("ad-account");
  expect(content).toContain("createClient");
  expect(content).toContain("Cursor");
  expect(content).toContain("FacebookApiError");
});
