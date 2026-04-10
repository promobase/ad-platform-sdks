import { test, expect } from "bun:test";
import { extractEnumsFromSource, parseEnumBlock } from "../../src/codegen/enum-extractor.ts";

test("parseEnumBlock extracts key-value pairs from frozen object", () => {
  const source = `
  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
    });
  }`;
  const result = parseEnumBlock(source);
  expect(result).toEqual({
    cost_cap: "COST_CAP",
    lowest_cost_without_cap: "LOWEST_COST_WITHOUT_CAP",
  });
});

test("extractEnumsFromSource extracts all enums from a class source", () => {
  const source = `
export default class Campaign extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      name: 'name',
    });
  }
  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
    });
  }
}`;
  const enums = extractEnumsFromSource("Campaign", source);
  expect(enums.has("Campaign_BidStrategy")).toBe(true);
  expect(enums.has("Campaign_Status")).toBe(true);
  expect(enums.has("Campaign_Fields")).toBe(false); // Fields is excluded
  expect(enums.get("Campaign_BidStrategy")).toEqual(["COST_CAP", "LOWEST_COST_WITHOUT_CAP"]);
  expect(enums.get("Campaign_Status")).toEqual(["ACTIVE", "PAUSED"]);
});
