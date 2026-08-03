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
const parameter = (
  name: string,
  location: Parameter["location"],
  type: TypeRefIr = stringType,
  required = true,
  wireName?: string,
): Parameter => ({
  name,
  location,
  type,
  required,
  nullable: false,
  ...(wireName ? { wireName } : {}),
});

const capabilities = [
  ["account.read", "Read organizations available to the authenticated member"],
  ["post.read", "Read LinkedIn posts"],
  ["post.publish", "Publish and update LinkedIn posts"],
  ["post.delete", "Delete LinkedIn posts"],
  ["comment.publish", "Publish LinkedIn comments"],
  ["media.upload", "Initialize and upload LinkedIn media"],
  ["post.metrics.read", "Read post and organization analytics"],
  ["oauth", "Complete LinkedIn OAuth flows"],
] as const;

function endpoint(
  operationId: string,
  method: EndpointIr["method"],
  path: string,
  capability: (typeof capabilities)[number][0],
  parameters: readonly Parameter[],
  output: TypeRefIr = jsonType,
  options: Partial<
    Pick<EndpointIr, "effect" | "execution" | "idempotency" | "requiredScopes">
  > = {},
): EndpointIr {
  const effect = options.effect ?? (method === "GET" ? "read" : "write");
  return {
    id: `linkedin.${operationId}`,
    operationId,
    platform: "linkedin",
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
    execution: options.execution ?? (effect === "read" ? "inline" : "durable"),
    idempotency: options.idempotency ?? (method === "GET" ? "safe" : "unsafe"),
    requiredScopes: options.requiredScopes ?? [],
    capabilities: [capability],
    rateLimitBucket: capability,
    summary: operationId.replaceAll(/([A-Z])/g, " $1").trim(),
  };
}

const body = (name = "body") => parameter(name, "body", jsonType);
const endpoints: EndpointIr[] = [
  endpoint(
    "listOrganizationAcls",
    "GET",
    "/organizationAcls",
    "account.read",
    [parameter("role", "query", stringType, false), parameter("state", "query", stringType, false)],
    jsonType,
    { requiredScopes: ["r_organization_social"] },
  ),
  endpoint(
    "getOrganization",
    "GET",
    "/organizations/{organizationId}",
    "account.read",
    [parameter("organizationId", "path")],
    jsonType,
    { requiredScopes: ["r_organization_social"] },
  ),
  endpoint(
    "listPostsByAuthor",
    "GET",
    "/posts",
    "post.read",
    [
      parameter("author", "query"),
      parameter("start", "query", numberType, false),
      parameter("count", "query", numberType, false),
      parameter("sortBy", "query", stringType, false),
    ],
    jsonType,
    { requiredScopes: ["r_organization_social"] },
  ),
  endpoint(
    "getPost",
    "GET",
    "/posts/{postUrn}",
    "post.read",
    [parameter("postUrn", "path"), parameter("viewContext", "query", stringType, false)],
    jsonType,
    { requiredScopes: ["r_organization_social"] },
  ),
  endpoint("createPost", "POST", "/posts", "post.publish", [body()], jsonType, {
    effect: "publish",
    requiredScopes: ["w_member_social", "w_organization_social"],
  }),
  endpoint(
    "updatePostCommentary",
    "POST",
    "/posts/{postUrn}",
    "post.publish",
    [parameter("postUrn", "path"), body()],
    voidType,
    { effect: "publish", requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "deletePost",
    "DELETE",
    "/posts/{postUrn}",
    "post.delete",
    [parameter("postUrn", "path")],
    voidType,
    { effect: "delete", requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "createComment",
    "POST",
    "/socialActions/{postUrn}/comments",
    "comment.publish",
    [parameter("postUrn", "path"), body()],
    jsonType,
    { effect: "publish", requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "getSocialMetadata",
    "GET",
    "/socialMetadata/{postUrn}",
    "post.metrics.read",
    [parameter("postUrn", "path")],
    jsonType,
    { requiredScopes: ["r_member_postAnalytics", "r_organization_social"] },
  ),
  endpoint(
    "batchGetSocialMetadata",
    "GET",
    "/socialMetadata",
    "post.metrics.read",
    [parameter("ids", "query", { kind: "array", items: stringType })],
    jsonType,
    { requiredScopes: ["r_member_postAnalytics", "r_organization_social"] },
  ),
  endpoint(
    "getOrganizationShareStatistics",
    "GET",
    "/organizationalEntityShareStatistics",
    "post.metrics.read",
    [
      parameter("organizationalEntity", "query"),
      parameter("shares", "query", { kind: "array", items: stringType }, false),
      parameter("ugcPosts", "query", { kind: "array", items: stringType }, false),
      parameter("timeIntervals", "query", jsonType, false),
    ],
    jsonType,
    { requiredScopes: ["r_organization_social"] },
  ),
  endpoint(
    "getMemberPostAnalytics",
    "GET",
    "/memberCreatorPostAnalytics",
    "post.metrics.read",
    [
      parameter("queryType", "query"),
      parameter("finder", "query", stringType, false),
      parameter("entity", "query", stringType, false),
      parameter("aggregation", "query", stringType, false),
      parameter("dateRange", "query", jsonType, false),
    ],
    jsonType,
    { requiredScopes: ["r_member_postAnalytics"] },
  ),
  endpoint(
    "initializeImageUpload",
    "POST",
    "/images?action=initializeUpload",
    "media.upload",
    [body()],
    jsonType,
    { requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "initializeVideoUpload",
    "POST",
    "/videos?action=initializeUpload",
    "media.upload",
    [body()],
    jsonType,
    { requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "finalizeVideoUpload",
    "POST",
    "/videos?action=finalizeUpload",
    "media.upload",
    [body()],
    jsonType,
    { requiredScopes: ["w_member_social", "w_organization_social"] },
  ),
  endpoint(
    "exchangeOAuthCode",
    "POST",
    "https://www.linkedin.com/oauth/v2/accessToken",
    "oauth",
    [body()],
    jsonType,
    { execution: "inline" },
  ),
  endpoint(
    "refreshOAuthToken",
    "POST",
    "https://www.linkedin.com/oauth/v2/accessToken",
    "oauth",
    [body()],
    jsonType,
    { execution: "inline" },
  ),
  endpoint(
    "getOpenIdUserInfo",
    "GET",
    "https://api.linkedin.com/v2/userinfo",
    "oauth",
    [],
    jsonType,
    { requiredScopes: ["openid", "profile"] },
  ),
];

const ir: SdkIr = {
  platform: "linkedin",
  source: {
    kind: "handwritten",
    location: "src/{account,analytics,assets,comments,oauth,posts}.ts",
  },
  version: "202602",
  models: [],
  endpoints,
  capabilities: capabilities.map(([id, summary]) => ({
    id,
    summary,
    requiredScopes: [
      ...new Set(
        endpoints
          .filter((item) => item.capabilities.includes(id))
          .flatMap((item) => item.requiredScopes),
      ),
    ],
  })),
};

await writeEffectArtifacts({
  outputDir: new URL("../src/generated/effect", import.meta.url).pathname,
  ir,
});
