import {
  writeEffectArtifacts,
  type EndpointIr,
  type FieldIr,
  type ModelIr,
  type SdkIr,
  type TypeRefIr,
} from "@openpromo/sdk-codegen";

const stringType = { kind: "primitive", name: "string" } as const;
const numberType = { kind: "primitive", name: "number" } as const;
const jsonType = { kind: "primitive", name: "json" } as const;
const voidType = { kind: "literal", value: true } as const;
const ref = (target: string): TypeRefIr => ({ kind: "reference", target });
const arrayOf = (items: TypeRefIr): TypeRefIr => ({ kind: "array", items });
const field = (name: string, type: TypeRefIr, required = false): FieldIr => ({
  name,
  type,
  required,
  nullable: false,
});
const objectModel = (name: string, fields: readonly FieldIr[]): ModelIr => ({
  kind: "object",
  id: `google-business-profile.${name}`,
  name,
  wire: "json",
  fields,
});
const enumModel = (name: string, values: readonly string[], open = false): ModelIr => ({
  kind: "enum",
  id: `google-business-profile.${name}`,
  name,
  wire: "json",
  values,
  ...(open ? { open: true } : {}),
});

const models: ModelIr[] = [
  objectModel("GoogleOAuthTokenResponse", [
    field("access_token", stringType, true),
    field("expires_in", numberType, true),
    field("refresh_token", stringType),
    field("scope", stringType),
    field("token_type", stringType, true),
    field("id_token", stringType),
  ]),
  enumModel(
    "GoogleBusinessAccountType",
    ["PERSONAL", "LOCATION_GROUP", "USER_GROUP", "ORGANIZATION"],
    true,
  ),
  objectModel("BusinessAccount", [
    field("name", stringType, true),
    field("accountName", stringType),
    field("type", ref("GoogleBusinessAccountType")),
    field("role", stringType),
    field("verificationState", stringType),
    field("vettedState", stringType),
    field("accountNumber", stringType),
    field("permissionLevel", stringType),
  ]),
  objectModel("BusinessLocation", [
    field("name", stringType, true),
    field("title", stringType),
    field("storeCode", stringType),
    field("languageCode", stringType),
    field("websiteUri", stringType),
    field("phoneNumbers", jsonType),
    field("storefrontAddress", { kind: "record", values: jsonType }),
    field("metadata", { kind: "record", values: jsonType }),
    field("categories", { kind: "record", values: jsonType }),
    field("regularHours", { kind: "record", values: jsonType }),
  ]),
  objectModel("GoogleDate", [
    field("year", numberType, true),
    field("month", numberType, true),
    field("day", numberType, true),
  ]),
  objectModel("GoogleTimeOfDay", [
    field("hours", numberType),
    field("minutes", numberType),
    field("seconds", numberType),
    field("nanos", numberType),
  ]),
  objectModel("TimeInterval", [
    field("startDate", ref("GoogleDate"), true),
    field("startTime", ref("GoogleTimeOfDay")),
    field("endDate", ref("GoogleDate")),
    field("endTime", ref("GoogleTimeOfDay")),
  ]),
  enumModel("LocalPostTopicType", ["STANDARD", "EVENT", "OFFER", "ALERT"]),
  enumModel("LocalPostActionType", ["BOOK", "ORDER", "SHOP", "LEARN_MORE", "SIGN_UP", "CALL"]),
  enumModel("LocalPostMediaFormat", ["PHOTO", "VIDEO"]),
  objectModel("LocalPostMedia", [
    field("mediaFormat", ref("LocalPostMediaFormat"), true),
    field("sourceUrl", stringType, true),
    field("name", stringType),
  ]),
  objectModel("LocalPostCallToAction", [
    field("actionType", ref("LocalPostActionType"), true),
    field("url", stringType),
  ]),
  objectModel("LocalPostEvent", [
    field("title", stringType, true),
    field("schedule", ref("TimeInterval"), true),
  ]),
  objectModel("LocalPostOffer", [
    field("couponCode", stringType),
    field("redeemOnlineUrl", stringType),
    field("termsConditions", stringType),
  ]),
  objectModel("LocalPost", [
    field("name", stringType),
    field("languageCode", stringType, true),
    field("summary", stringType),
    field("topicType", ref("LocalPostTopicType"), true),
    field("callToAction", ref("LocalPostCallToAction")),
    field("event", ref("LocalPostEvent")),
    field("offer", ref("LocalPostOffer")),
    field("media", arrayOf(ref("LocalPostMedia"))),
    field("createTime", stringType),
    field("updateTime", stringType),
    field("state", stringType),
    field("searchUrl", stringType),
  ]),
  enumModel("DailyMetric", [
    "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
    "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
    "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
    "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
    "BUSINESS_CONVERSATIONS",
    "BUSINESS_DIRECTION_REQUESTS",
    "CALL_CLICKS",
    "WEBSITE_CLICKS",
    "BUSINESS_BOOKINGS",
    "BUSINESS_FOOD_ORDERS",
    "BUSINESS_FOOD_MENU_CLICKS",
  ]),
  objectModel("GoogleDatedValue", [field("date", ref("GoogleDate")), field("value", stringType)]),
  objectModel("GoogleTimeSeries", [field("datedValues", arrayOf(ref("GoogleDatedValue")))]),
  objectModel("DailyMetricTimeSeries", [
    field("dailyMetric", ref("DailyMetric")),
    field("dailySubEntityType", { kind: "record", values: jsonType }),
    field("timeSeries", ref("GoogleTimeSeries")),
  ]),
  enumModel(
    "LocalPostMetricType",
    ["LOCAL_POST_VIEWS_SEARCH", "LOCAL_POST_ACTIONS_CALL_TO_ACTION"],
    true,
  ),
  objectModel("LocalPostMetricValue", [
    field("metric", ref("LocalPostMetricType")),
    field("totalValue", { kind: "record", values: stringType }),
  ]),
  objectModel("LocalPostMetrics", [
    field("localPostName", stringType, true),
    field("metricValues", arrayOf(ref("LocalPostMetricValue"))),
  ]),
];
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
  models,
  endpoints,
  capabilities: capabilities.map(([id, summary]) => ({
    id,
    summary,
    requiredScopes: id === "oauth" ? [] : ["https://www.googleapis.com/auth/business.manage"],
  })),
};

await writeEffectArtifacts({
  outputDir: new URL("../src/generated/effect", import.meta.url).pathname,
  contractOutputDir: new URL("../src/generated", import.meta.url).pathname,
  docsOutputDir: new URL("../../../apps/docs/src/content/docs/reference", import.meta.url).pathname,
  ir,
});
