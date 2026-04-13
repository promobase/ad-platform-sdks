import { test, expect } from "bun:test";
import { resolveRef } from "../../src/clients/types.ts";

test("resolveRef unwraps string refs", () => {
  expect(resolveRef("customers/123/campaigns/456")).toBe("customers/123/campaigns/456");
});

test("resolveRef unwraps rich-object refs", () => {
  const obj = { name: "foo", resourceName: "customers/123/campaigns/456" as const };
  expect(resolveRef(obj)).toBe("customers/123/campaigns/456");
});
