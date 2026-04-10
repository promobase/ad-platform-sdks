import { test, expect } from "bun:test";
import { resolveType, parseGenericType, enumTypeToTsName } from "../../src/codegen/type-resolver.ts";

const knownObjects = new Set(["Campaign", "AdSet", "Ad", "AdLabel", "AdsActionStats", "AdCreative"]);
const knownEnums = new Set(["CampaignBidStrategy", "CampaignEffectiveStatus", "AdcampaigngroupObjective"]);
const ctx = { knownObjects, knownEnums };

test("resolves primitive types", () => {
  expect(resolveType("string", ctx)).toBe("string");
  expect(resolveType("bool", ctx)).toBe("boolean");
  expect(resolveType("int", ctx)).toBe("number");
  expect(resolveType("unsigned int", ctx)).toBe("number");
  expect(resolveType("float", ctx)).toBe("number");
  expect(resolveType("datetime", ctx)).toBe("string");
  expect(resolveType("file", ctx)).toBe("File | Blob | ReadableStream");
});

test("resolves bare containers", () => {
  expect(resolveType("Object", ctx)).toBe("Record<string, unknown>");
  expect(resolveType("map", ctx)).toBe("Record<string, unknown>");
  expect(resolveType("list", ctx)).toBe("unknown[]");
});

test("resolves list<primitive>", () => {
  expect(resolveType("list<string>", ctx)).toBe("string[]");
  expect(resolveType("list<int>", ctx)).toBe("number[]");
  expect(resolveType("list<bool>", ctx)).toBe("boolean[]");
  expect(resolveType("list<Object>", ctx)).toBe("Record<string, unknown>[]");
});

test("resolves map<K, V>", () => {
  expect(resolveType("map<string, string>", ctx)).toBe("Record<string, string>");
  expect(resolveType("map<string, int>", ctx)).toBe("Record<string, number>");
  expect(resolveType("map<string, Object>", ctx)).toBe("Record<string, Record<string, unknown>>");
});

test("resolves nested generics", () => {
  expect(resolveType("list<map<string, string>>", ctx)).toBe("Record<string, string>[]");
  expect(resolveType("list<list<int>>", ctx)).toBe("number[][]");
  expect(resolveType("list<map<string, list<map<string, string>>>>", ctx)).toBe("Record<string, Record<string, string>[]>[]");
});

test("resolves object references", () => {
  expect(resolveType("Campaign", ctx)).toBe("CampaignFields");
  expect(resolveType("AdSet", ctx)).toBe("AdSetFields");
  expect(resolveType("list<AdLabel>", ctx)).toBe("AdLabelFields[]");
});

test("resolves enum types", () => {
  expect(resolveType("Campaign_bid_strategy", ctx)).toBe("CampaignBidStrategy");
  expect(resolveType("Campaign_effective_status", ctx)).toBe("CampaignEffectiveStatus");
  expect(resolveType("list<Campaign_effective_status>", ctx)).toBe("CampaignEffectiveStatus[]");
});

test("resolves param enum types (lowercased convention)", () => {
  expect(resolveType("adcampaigngroup_objective", ctx)).toBe("AdcampaigngroupObjective");
});

test("parseGenericType parses nested angle brackets", () => {
  expect(parseGenericType("list<string>")).toEqual({ outer: "list", inner: ["string"] });
  expect(parseGenericType("map<string, int>")).toEqual({ outer: "map", inner: ["string", "int"] });
  expect(parseGenericType("list<map<string, string>>")).toEqual({ outer: "list", inner: ["map<string, string>"] });
  expect(parseGenericType("Campaign")).toBeNull();
});

test("enumTypeToTsName converts enum names to PascalCase", () => {
  expect(enumTypeToTsName("Campaign_bid_strategy")).toBe("CampaignBidStrategy");
  expect(enumTypeToTsName("adcampaigngroup_objective")).toBe("AdcampaigngroupObjective");
});
