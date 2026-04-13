import { expect, test } from "bun:test";
import { serialize } from "../../../src/clients/gaql/serialize.ts";

test("serialize minimum query", () => {
  expect(
    serialize({
      from: "campaign",
      select: ["campaign.id", "campaign.name"],
    }),
  ).toBe("SELECT campaign.id, campaign.name FROM campaign");
});

test("serialize with where/order/limit/parameters", () => {
  expect(
    serialize({
      from: "ad_group",
      select: ["ad_group.id"],
      where: "ad_group.status = 'ENABLED'",
      orderBy: "ad_group.id",
      limit: 100,
      parameters: "include_drafts=true",
    }),
  ).toBe(
    "SELECT ad_group.id FROM ad_group WHERE ad_group.status = 'ENABLED' ORDER BY ad_group.id LIMIT 100 PARAMETERS include_drafts=true",
  );
});

test("serialize throws on empty select", () => {
  expect(() => serialize({ from: "campaign", select: [] })).toThrow(/at least one field/);
});
