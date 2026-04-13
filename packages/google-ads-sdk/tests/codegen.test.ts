import { expect, test } from "bun:test";
import path from "node:path";
import { emitEnum, emitMessage, emitService } from "../src/codegen/emitter.ts";
import { parseHttpPath } from "../src/codegen/http-binding.ts";
import type { MessageAst } from "../src/codegen/parser.ts";
import { loadProtos } from "../src/codegen/parser.ts";
import { resolveType } from "../src/codegen/type-resolver.ts";

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

test("parseHttpPath extracts simple param", () => {
  const r = parseHttpPath("/v23/customers/{customer_id}/campaigns:mutate");
  expect(r.pathParams).toEqual(["customer_id"]);
  expect(r.template).toBe("/v23/customers/${customerId}/campaigns:mutate");
});

test("parseHttpPath extracts resource-template param", () => {
  const r = parseHttpPath("/v23/{resource_name=customers/*/campaigns/*}");
  expect(r.pathParams).toEqual(["resource_name"]);
  expect(r.template).toBe("/v23/${resourceName}");
});

test("parseHttpPath extracts multiple params", () => {
  const r = parseHttpPath("/v23/customers/{customer_id}/adGroups/{ad_group_id}");
  expect(r.pathParams).toEqual(["customer_id", "ad_group_id"]);
  expect(r.template).toBe("/v23/customers/${customerId}/adGroups/${adGroupId}");
});

test("parseHttpPath handles no params", () => {
  const r = parseHttpPath("/v23/customers:listAccessibleCustomers");
  expect(r.pathParams).toEqual([]);
  expect(r.template).toBe("/v23/customers:listAccessibleCustomers");
});

test("emitEnum produces string union", () => {
  const out = emitEnum({
    fullName: "test.Color",
    name: "Color",
    values: [
      { name: "COLOR_UNSPECIFIED", number: 0 },
      { name: "RED", number: 1 },
      { name: "BLUE", number: 2 },
    ],
  });
  expect(out).toContain("export type Color =");
  expect(out).toContain('"COLOR_UNSPECIFIED"');
  expect(out).toContain('"RED"');
  expect(out).toContain('"BLUE"');
});

test("emitMessage produces interface with optional camelCase fields", () => {
  const out = emitMessage({
    fullName: "test.Shape",
    name: "Shape",
    fields: [
      { name: "id", type: "string", id: 1, repeated: false, optional: false },
      { name: "display_name", type: "string", id: 2, repeated: false, optional: false },
      { name: "tags", type: "string", id: 3, repeated: true, optional: false },
    ],
    nestedMessages: [],
    nestedEnums: [],
    oneofs: [],
  });
  expect(out).toContain("export interface Shape");
  expect(out).toContain("id?: string");
  expect(out).toContain("displayName?: string");
  expect(out).toContain("tags?: string[]");
});

test("emitMessage imports referenced types", () => {
  const out = emitMessage({
    fullName: "test.Wrapper",
    name: "Wrapper",
    fields: [
      {
        name: "inner",
        type: "google.ads.googleads.v23.resources.Campaign",
        id: 1,
        repeated: false,
        optional: false,
      },
    ],
    nestedMessages: [],
    nestedEnums: [],
    oneofs: [],
  });
  expect(out).toContain('import type { Campaign } from "../index.ts"');
  expect(out).toContain("inner?: Campaign");
});

test("emitService produces callable method for POST with body", () => {
  const messageIndex = new Map<string, MessageAst>([
    [
      "test.svc.MutateCampaignsRequest",
      {
        fullName: "test.svc.MutateCampaignsRequest",
        name: "MutateCampaignsRequest",
        fields: [
          { name: "customer_id", type: "string", id: 1, repeated: false, optional: false },
          {
            name: "operations",
            type: "test.svc.CampaignOperation",
            id: 2,
            repeated: true,
            optional: false,
          },
        ],
        nestedMessages: [],
        nestedEnums: [],
        oneofs: [],
      },
    ],
  ]);
  const out = emitService(
    {
      fullName: "test.svc.CampaignService",
      name: "CampaignService",
      methods: [
        {
          name: "Mutate",
          requestType: "test.svc.MutateCampaignsRequest",
          responseType: "test.svc.MutateCampaignsResponse",
          httpOption: {
            verb: "post",
            path: "/v23/customers/{customer_id}/campaigns:mutate",
            body: "*",
          },
        },
      ],
    },
    messageIndex,
  );
  expect(out).toContain('import type { HttpClient } from "@promobase/sdk-runtime"');
  expect(out).toContain("export const campaignService");
  expect(out).toContain("mutate(");
  expect(out).toContain("client: HttpClient");
  expect(out).toContain("customerId: string");
  expect(out).toContain(
    "client.post<MutateCampaignsResponse>(`/v23/customers/${customerId}/campaigns:mutate`",
  );
});

test("emitService produces GET method without body", () => {
  const messageIndex = new Map<string, MessageAst>([
    [
      "test.svc.GetCampaignRequest",
      {
        fullName: "test.svc.GetCampaignRequest",
        name: "GetCampaignRequest",
        fields: [
          { name: "resource_name", type: "string", id: 1, repeated: false, optional: false },
        ],
        nestedMessages: [],
        nestedEnums: [],
        oneofs: [],
      },
    ],
  ]);
  const out = emitService(
    {
      fullName: "test.svc.CampaignService",
      name: "CampaignService",
      methods: [
        {
          name: "GetCampaign",
          requestType: "test.svc.GetCampaignRequest",
          responseType: "test.svc.Campaign",
          httpOption: {
            verb: "get",
            path: "/v23/{resource_name=customers/*/campaigns/*}",
          },
        },
      ],
    },
    messageIndex,
  );
  expect(out).toContain("getCampaign(");
  expect(out).toContain("resourceName: string");
  expect(out).toContain("client.get<Campaign>");
  expect(out).toContain("`/v23/${resourceName}`");
});

test("emitService skips methods without HTTP option", () => {
  const out = emitService(
    {
      fullName: "test.svc.NoHttpService",
      name: "NoHttpService",
      methods: [
        {
          name: "NotRest",
          requestType: "test.svc.Req",
          responseType: "test.svc.Res",
        },
      ],
    },
    new Map(),
  );
  // Should emit an empty service object, not throw
  expect(out).toContain("export const noHttpService");
  expect(out).not.toContain("notRest(");
});
