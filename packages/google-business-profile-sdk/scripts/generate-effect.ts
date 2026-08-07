import {
  writeEffectArtifacts,
  type EndpointIr,
  type SdkIr,
  type TypeRefIr,
} from "@openpromo/sdk-codegen";

const stringType = { kind: "primitive", name: "string" } as const;
const numberType = { kind: "primitive", name: "number" } as const;
const jsonType = { kind: "primitive", name: "json" } as const;
const voidType = { kind: "literal", value: true } as const;
type Parameter = EndpointIr["parameters"][number];
const p = (
  name: string,
  location: Parameter["location"],
  type: TypeRefIr = stringType,
  required = true,
): Parameter => ({ name, location, type, required, nullable: false });

const capabilities = [
  ["account.read", "List Business Profile accounts"],
  ["location.read", "List Business Profile locations"],
  ["local-post.read", "Read local posts"],
  ["local-post.publish", "Create and update local posts"],
  ["local-post.delete", "Delete local posts"],
  ["local-post.metrics.read", "Read local post insights"],
  ["location.metrics.read", "Read location performance metrics"],
  ["oauth", "Complete Google OAuth flows"],
] as const;

function endpoint(
  operationId: string,
  method: EndpointIr["method"],
  path: string,
  capability: (typeof capabilities)[number][0],
  parameters: readonly Parameter[],
  output: TypeRefIr = jsonType,
  overrides: Partial<Pick<EndpointIr, "effect" | "execution" | "idempotency">> = {},
): EndpointIr {
  const effect = overrides.effect ?? (method === "GET" ? "read" : "write");
  return {
    id: `google-business-profile.${operationId}`,
    operationId,
    platform: "google-business-profile",
    method,
    path,
    parameters,
    output,
    errors: [
      { status: 429, retryable: true },
      { status: 500, retryable: true },
      { status: 503, retryable: true },
    ],
    effect,
    execution: overrides.execution ?? (effect === "read" ? "inline" : "durable"),
    idempotency: overrides.idempotency ?? (method === "GET" ? "safe" : "unsafe"),
    requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
    capabilities: [capability],
    rateLimitBucket: capability,
    summary: operationId.replaceAll(/([A-Z])/g, " $1").trim(),
  };
}

const page = [
  p("pageSize", "query", numberType, false),
  p("pageToken", "query", stringType, false),
];
const endpoints: EndpointIr[] = [
  endpoint(
    "listAccounts",
    "GET",
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    "account.read",
    page,
  ),
  endpoint(
    "listLocations",
    "GET",
    "https://mybusinessbusinessinformation.googleapis.com/v1/{accountName}/locations",
    "location.read",
    [
      p("accountName", "path"),
      p("readMask", "query"),
      ...page,
      p("filter", "query", stringType, false),
      p("orderBy", "query", stringType, false),
    ],
  ),
  endpoint(
    "createLocalPost",
    "POST",
    "https://mybusiness.googleapis.com/v4/{locationName}/localPosts",
    "local-post.publish",
    [p("locationName", "path"), p("post", "body", jsonType)],
    jsonType,
    { effect: "publish" },
  ),
  endpoint(
    "getLocalPost",
    "GET",
    "https://mybusiness.googleapis.com/v4/{postName}",
    "local-post.read",
    [p("postName", "path")],
  ),
  endpoint(
    "listLocalPosts",
    "GET",
    "https://mybusiness.googleapis.com/v4/{locationName}/localPosts",
    "local-post.read",
    [p("locationName", "path"), ...page],
  ),
  endpoint(
    "updateLocalPost",
    "PATCH",
    "https://mybusiness.googleapis.com/v4/{postName}",
    "local-post.publish",
    [p("postName", "path"), p("updateMask", "query"), p("post", "body", jsonType)],
    jsonType,
    { effect: "publish" },
  ),
  endpoint(
    "deleteLocalPost",
    "DELETE",
    "https://mybusiness.googleapis.com/v4/{postName}",
    "local-post.delete",
    [p("postName", "path")],
    voidType,
    { effect: "delete" },
  ),
  endpoint(
    "reportLocalPostInsights",
    "POST",
    "https://mybusiness.googleapis.com/v4/{locationName}/localPosts:reportInsights",
    "local-post.metrics.read",
    [p("locationName", "path"), p("localPostNames", "body", { kind: "array", items: stringType })],
  ),
  endpoint(
    "fetchMultiDailyMetricsTimeSeries",
    "GET",
    "https://businessprofileperformance.googleapis.com/v1/{locationName}:fetchMultiDailyMetricsTimeSeries",
    "location.metrics.read",
    [
      p("locationName", "path"),
      p("dailyMetrics", "query", { kind: "array", items: stringType }),
      p("startDate", "query", jsonType),
      p("endDate", "query", jsonType),
    ],
  ),
  endpoint(
    "exchangeOAuthCode",
    "POST",
    "https://oauth2.googleapis.com/token",
    "oauth",
    [p("body", "body", jsonType)],
    jsonType,
    { execution: "inline" },
  ),
  endpoint(
    "refreshOAuthToken",
    "POST",
    "https://oauth2.googleapis.com/token",
    "oauth",
    [p("body", "body", jsonType)],
    jsonType,
    { execution: "inline" },
  ),
];

const ir: SdkIr = {
  platform: "google-business-profile",
  source: { kind: "handwritten", location: "src/{oauth,resources,types}.ts" },
  version: "v1+v4",
  models: [],
  endpoints,
  capabilities: capabilities.map(([id, summary]) => ({
    id,
    summary,
    requiredScopes: id === "oauth" ? [] : ["https://www.googleapis.com/auth/business.manage"],
  })),
};

await writeEffectArtifacts({
  outputDir: new URL("../src/generated/effect", import.meta.url).pathname,
  docsOutputDir: new URL("../../../apps/docs/src/content/docs/reference", import.meta.url).pathname,
  ir,
});
