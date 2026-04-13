import { test, expect } from "bun:test";
import { loadProtos } from "../src/codegen/parser.ts";
import { resolveType } from "../src/codegen/type-resolver.ts";
import path from "node:path";

const FIXTURES = path.resolve(import.meta.dir, "fixtures");
const GOOGLEAPIS = path.resolve(import.meta.dir, "../vendor/googleapis");

test("loadProtos parses messages, enums, fields", async () => {
  const root = await loadProtos([path.join(FIXTURES, "simple.proto")], [FIXTURES]);
  const shapes = root.messages.filter((m) => m.fullName === "test.simple.Shape");
  expect(shapes).toHaveLength(1);
  const shape = shapes[0]!;
  expect(shape.fields.map((f) => f.name)).toEqual(["id", "color", "tags", "counts"]);
  const tags = shape.fields.find((f) => f.name === "tags")!;
  expect(tags.repeated).toBe(true);
  const counts = shape.fields.find((f) => f.name === "counts")!;
  expect(counts.map).toEqual({ keyType: "string", valueType: "int32" });

  const colors = root.enums.filter((e) => e.fullName === "test.simple.Color");
  expect(colors).toHaveLength(1);
  expect(colors[0]!.values.map((v) => v.name)).toEqual(["COLOR_UNSPECIFIED", "RED", "BLUE"]);
});

test("loadProtos parses service with google.api.http option", async () => {
  const root = await loadProtos(
    [path.join(FIXTURES, "with_service.proto")],
    [FIXTURES, GOOGLEAPIS],
  );
  const svcs = root.services.filter((s) => s.fullName === "test.svc.ThingService");
  expect(svcs).toHaveLength(1);
  const svc = svcs[0]!;
  expect(svc.methods).toHaveLength(1);
  const method = svc.methods[0]!;
  expect(method.name).toBe("GetThing");
  expect(method.requestType).toBe("test.svc.GetThingRequest");
  expect(method.responseType).toBe("test.svc.Thing");
  expect(method.httpOption).toBeTruthy();
  expect(method.httpOption!.verb).toBe("get");
  expect(method.httpOption!.path).toBe("/v1/{name=things/*}");
});

test("resolveType maps scalars", () => {
  expect(resolveType("string", false, null).tsType).toBe("string");
  expect(resolveType("int32", false, null).tsType).toBe("number");
  expect(resolveType("bool", false, null).tsType).toBe("boolean");
  expect(resolveType("int64", false, null).tsType).toBe("string");
  expect(resolveType("bytes", false, null).tsType).toBe("string");
  expect(resolveType("double", false, null).tsType).toBe("number");
  expect(resolveType("float", false, null).tsType).toBe("number");
});

test("resolveType maps repeated fields", () => {
  expect(resolveType("string", true, null).tsType).toBe("string[]");
});

test("resolveType maps maps", () => {
  expect(resolveType("int32", false, { keyType: "string", valueType: "int32" }).tsType).toBe(
    "Record<string, number>",
  );
});

test("resolveType unwraps well-known wrappers", () => {
  expect(resolveType("google.protobuf.StringValue", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Int64Value", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Int32Value", false, null).tsType).toBe("number");
  expect(resolveType("google.protobuf.BoolValue", false, null).tsType).toBe("boolean");
  expect(resolveType("google.protobuf.Timestamp", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Duration", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.FieldMask", false, null).tsType).toBe("string");
});

test("resolveType maps message refs to short TS names", () => {
  const r = resolveType("google.ads.googleads.v23.resources.Campaign", false, null);
  expect(r.tsType).toBe("Campaign");
  expect(r.imports).toEqual([
    { name: "Campaign", fullName: "google.ads.googleads.v23.resources.Campaign" },
  ]);
});

test("resolveType repeated message refs produce array type", () => {
  const r = resolveType("google.ads.googleads.v23.resources.Campaign", true, null);
  expect(r.tsType).toBe("Campaign[]");
  expect(r.imports).toHaveLength(1);
});
