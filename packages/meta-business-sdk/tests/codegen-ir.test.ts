import { expect, test } from "bun:test";

import type { EnumMap } from "../src/codegen/enum-extractor.ts";
import { facebookGraphCanonicalIr } from "../src/codegen/ir.ts";
import type { Spec } from "../src/codegen/parser.ts";

function spec(name: string, method: Spec["apis"][number]["method"], endpoint: string): Spec {
  return {
    name,
    fields: [],
    apis: [{ method, endpoint, return: "Object", params: [] }],
  };
}

test("Meta IR carries curated Page and Instagram permission metadata", () => {
  const ir = facebookGraphCanonicalIr(
    new Map([
      ["Page", spec("Page", "POST", "feed")],
      ["IGMedia", spec("IGMedia", "GET", "insights")],
    ]),
    new Map() as EnumMap,
    { version: "v26.0" },
  );

  expect(ir.endpoints.find((endpoint) => endpoint.path === "/{id}/feed")?.requiredScopes).toEqual([
    "pages_manage_posts",
  ]);
  expect(
    ir.endpoints.find((endpoint) => endpoint.path === "/{id}/insights")?.requiredScopes,
  ).toEqual(["instagram_manage_insights"]);
});
