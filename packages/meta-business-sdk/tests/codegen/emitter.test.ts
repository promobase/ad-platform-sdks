import { expect, test } from "bun:test";
import { buildDepGraph, findCycles } from "../../src/codegen/dep-graph.ts";
import {
  emitEnumType,
  emitFieldsInterface,
  emitObjectFile,
  emitParamsInterface,
  endpointToMethodName,
  specNameToFieldsType,
  specNameToFileName,
} from "../../src/codegen/emitter.ts";
import { applyPatches, parseSpecs } from "../../src/codegen/parser.ts";

test("specNameToFileName converts PascalCase to kebab-case", () => {
  expect(specNameToFileName("Campaign")).toBe("campaign");
  expect(specNameToFileName("AdAccount")).toBe("ad-account");
  expect(specNameToFileName("AdsInsights")).toBe("ads-insights");
  expect(specNameToFileName("AdCampaignGroupAdvantageState")).toBe(
    "ad-campaign-group-advantage-state",
  );
});

test("specNameToFieldsType", () => {
  expect(specNameToFieldsType("Campaign")).toBe("CampaignFields");
  expect(specNameToFieldsType("AdSet")).toBe("AdSetFields");
});

test("endpointToMethodName", () => {
  expect(endpointToMethodName("GET", "campaigns")).toBe("campaigns");
  expect(endpointToMethodName("POST", "campaigns")).toBe("createCampaign");
  expect(endpointToMethodName("DELETE", "campaigns")).toBe("deleteCampaigns");
  expect(endpointToMethodName("GET", "ad_studies")).toBe("adStudies");
  expect(endpointToMethodName("POST", "ad_place_page_sets")).toBe("createAdPlacePageSet");
});

test("emitEnumType", () => {
  const result = emitEnumType("CampaignBidStrategy", ["COST_CAP", "LOWEST_COST_WITHOUT_CAP"]);
  expect(result).toContain(
    'export type CampaignBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP"',
  );
});

test("emitFieldsInterface handles normal and quoted keys", () => {
  const result = emitFieldsInterface("Campaign", [
    { name: "id", resolvedType: "string" },
    { name: "name", resolvedType: "string" },
    { name: "1d_click", resolvedType: "string" },
  ]);
  expect(result).toContain("export interface CampaignFields {");
  expect(result).toContain("  id: string;");
  expect(result).toContain('  "1d_click": string;');
});

test("emitParamsInterface handles required and optional", () => {
  const result = emitParamsInterface("CampaignCreateParams", [
    { name: "name", resolvedType: "string", required: true },
    { name: "status", resolvedType: "CampaignStatus", required: false },
  ]);
  expect(result).toContain("  name: string;");
  expect(result).toContain("  status?: CampaignStatus;");
});

test("emitObjectFile generates valid Campaign file", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const patched = await applyPatches(specs, "api_specs/api_specs/SDKCodegen.json");
  const knownObjects = new Set(patched.keys());
  const knownEnums = new Set<string>(); // empty for now
  const typeCtx = { knownObjects, knownEnums };
  const depGraph = buildDepGraph(patched);
  const cycleNodes = findCycles(depGraph);

  const campaign = patched.get("Campaign")!;
  const result = emitObjectFile({ spec: campaign, typeCtx, cycleNodes, allSpecs: patched });

  expect(result).toContain("export interface CampaignFields");
  expect(result).toContain("id: string");
  expect(result).toContain("campaignNode");
  expect(result).toContain("Cursor");
  expect(result).toContain("ads:");
  expect(result).toContain("adsets:");
});

test("emitObjectFile handles pure data objects (no node factory)", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const knownObjects = new Set(specs.keys());
  const typeCtx = { knownObjects, knownEnums: new Set<string>() };

  const insights = specs.get("AdsInsights")!;
  const result = emitObjectFile({
    spec: insights,
    typeCtx,
    cycleNodes: new Set(),
    allSpecs: specs,
  });

  expect(result).toContain("export interface AdsInsightsFields");
  expect(result).not.toContain("adsInsightsNode");
  expect(result).not.toContain("Cursor");
});
