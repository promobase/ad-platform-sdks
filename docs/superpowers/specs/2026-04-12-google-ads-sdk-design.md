# Google Ads SDK — Design Spec

**Date:** 2026-04-12
**Package:** `@promobase/google-ads-sdk`
**Status:** Approved, ready for implementation plan

## Goal

Build a type-safe, runtime-agnostic TypeScript SDK for the Google Ads API v23, generated from protobuf definitions via REST transcoding. Ships as a new workspace package in the `ad-platform-sdks` monorepo, re-exported through the `@promobase/ad-platforms` umbrella.

## Motivation

- Complete the third leg of `ad-platform-sdks` (Meta + TikTok + Google).
- The official `google-ads-nodejs-client` is gRPC-based via `google-gax` — heavy, not runtime-agnostic, won't run on Workers/edge.
- Community alternative `google-ads-api` (Opteo) pulls in gRPC + axios + ~115 MB of compiled protos.
- We already have a proven codegen + fetch-based runtime pattern (Meta SDK); reusing it keeps the monorepo coherent.

## Non-goals (v1)

- Ergonomic resource wrappers (`client.campaigns.create(...)`) — deferred to a follow-up plan.
- Typed GAQL query builder with field-literal narrowing — deferred.
- AI SDK tool exposure — deferred.
- True `searchStream` streaming (we consume the full response body in v1).
- OAuth2 refresh token flow inside the SDK — caller owns refresh via `getAccessToken` callback.
- Live API integration tests — Google Ads requires approved dev tokens.

## Scope

Full v23 coverage: all ~200 services, ~500 resources, ~400 enums. Codegen output committed to the repo.

## Architecture

Three-layer stack, mirroring the Meta SDK:

```
┌─ High-level wrappers (deferred) ────┐
│  clients/campaigns/, clients/ads/   │  hand-written, post-v1
├─ Generated services (v1 ships this) ┤
│  generated/v23/services/*           │  REST methods from google.api.http
│  generated/v23/resources/*          │  message types from .proto
│  generated/v23/enums/*              │  proto enums as string unions
├─ Runtime ───────────────────────────┤
│  @promobase/sdk-runtime ApiClient   │  fetch, retry, auth headers
└─────────────────────────────────────┘
```

- **Codegen input:** `vendor/googleapis/` (git submodule pinned to a commit that has `google/ads/googleads/v23/`).
- **Codegen output:** `packages/google-ads-sdk/src/generated/v23/**`, committed, marked `linguist-generated` in `.gitattributes`.
- **Runtime:** reuses `@promobase/sdk-runtime` `ApiClient` with a custom header injector.

## Repo layout

```
packages/google-ads-sdk/
├── package.json              # @promobase/google-ads-sdk, deps: sdk-runtime
├── tsconfig.json
├── CLAUDE.md                 # package-local notes
├── vendor/                   # git submodule: googleapis/googleapis (pinned)
├── src/
│   ├── index.ts              # namespace export: Google
│   ├── namespace.ts          # Google namespace surface
│   ├── client.ts             # createClient(...)
│   ├── errors.ts             # GoogleAdsError + GoogleAdsFailure parsing
│   ├── pagination.ts         # search cursor helpers
│   ├── codegen/
│   │   ├── parser.ts         # load .proto via protobufjs
│   │   ├── type-resolver.ts  # proto → TS type mapping
│   │   ├── http-binding.ts   # parse google.api.http annotations
│   │   ├── emitter.ts        # string emitter for resources/enums/services
│   │   └── index.ts          # orchestrator (bun run codegen)
│   └── generated/v23/
│       ├── resources/
│       ├── enums/
│       ├── services/
│       └── index.ts
└── tests/
    ├── codegen.test.ts
    ├── client.test.ts
    └── services.test.ts
```

The monorepo `CLAUDE.md` packages table gets a new row for `@promobase/google-ads-sdk`. `packages/ad-platforms/package.json` gains a workspace dep and re-exports `Google` from `src/index.ts`.

## Codegen pipeline

### Parser

`protobufjs` loads all `.proto` files rooted at `vendor/google/ads/googleads/v23/`. Transitively resolves imports including `google/api/annotations.proto`, `google/protobuf/wrappers.proto`, `google/rpc/status.proto`, `google/longrunning/operations.proto`. Returns an in-memory AST: `{ messages, enums, services }`.

### Type resolver

| Proto | TS |
|---|---|
| `string`, `int32`, `bool`, `float`, `double` | `string`, `number`, `boolean`, `number`, `number` |
| `int64`, `uint64`, `sint64`, `fixed64` | `string` (proto3 JSON encoding) |
| `bytes` | `string` (base64) |
| `google.protobuf.StringValue` etc. | unwrapped scalar |
| `google.protobuf.Timestamp` | `string` (RFC 3339) |
| `google.protobuf.Duration` | `string` (e.g. `"3.5s"`) |
| `google.protobuf.FieldMask` | `string` (comma-joined paths) |
| `repeated T` | `T[]` |
| `map<K,V>` | `Record<K, V>` |
| `enum E { FOO = 1; BAR = 2 }` | `type E = "FOO" \| "BAR"` |
| `message M { ... }` | `interface M { ... }` |
| `oneof` | discriminated union via optional fields |

All fields emitted optional (`field?: T`) because Google Ads REST omits unset fields.

### HTTP binding extractor

For each service method, read the `google.api.http` option to extract `{ verb, path, body }`. Example:

```proto
rpc Mutate(MutateCampaignsRequest) returns (MutateCampaignsResponse) {
  option (google.api.http) = {
    post: "/v23/customers/{customer_id}/campaigns:mutate"
    body: "*"
  };
}
```

Emits:

```ts
export const campaignService = {
  mutate(
    client: ApiClient,
    customerId: string,
    body: Omit<MutateCampaignsRequest, "customer_id">,
  ): Promise<MutateCampaignsResponse> {
    return client.post(`/v23/customers/${customerId}/campaigns:mutate`, body);
  },
};
```

Path params are extracted from `{var}` templates. When `body: "*"`, remaining request fields become the body; when `body: "<field>"`, only that field is the body and the rest are query params.

### Emitter

String-based, one file per resource / enum / service. Barrel `index.ts` per subfolder. Services import request/response types from `../resources`. Formatting via `bun run format` after emission.

### Orchestrator

`bun run codegen`: parse → resolve → emit → format → `bun run typecheck` sanity check. Fails CI if the generated tree drifts from committed output.

## Runtime client

```ts
export interface GoogleAdsClientOptions {
  getAccessToken: () => string | Promise<string>;
  developerToken: string;
  loginCustomerId?: string;   // MCC id, digits only
  apiVersion?: "v23";         // default v23
  fetch?: typeof fetch;
  rateLimiter?: RateLimiter;
}

export function createClient(opts: GoogleAdsClientOptions): GoogleAdsClient;
```

Wraps `@promobase/sdk-runtime` `ApiClient` with a header injector:

```ts
const apiClient = new ApiClient({
  baseUrl: "https://googleads.googleapis.com",
  getHeaders: async () => ({
    authorization: `Bearer ${await opts.getAccessToken()}`,
    "developer-token": opts.developerToken,
    ...(opts.loginCustomerId && { "login-customer-id": opts.loginCustomerId }),
    "content-type": "application/json",
  }),
  fetch: opts.fetch,
  rateLimiter: opts.rateLimiter,
});
```

## Errors

Google Ads returns errors as JSON with nested `GoogleAdsFailure` protos inside `error.details`. `errors.ts` exports `GoogleAdsError extends Error` with:

```ts
interface GoogleAdsErrorDetail {
  errorCode: Record<string, string>;       // e.g. { authenticationError: "NOT_ADS_USER" }
  message: string;
  trigger?: { stringValue?: string; /* ... */ };
  location?: { fieldPathElements: { fieldName: string; index?: number }[] };
}

class GoogleAdsError extends Error {
  readonly httpStatus: number;
  readonly requestId?: string;
  readonly errors: GoogleAdsErrorDetail[];
  readonly raw: unknown;
}
```

`ApiClient`'s error handler is overridden to recognize the Google shape and throw `GoogleAdsError`. Non-Google errors (network, parse) fall through to the runtime's default error class.

## Pagination

`search` takes `pageSize`, `pageToken`, returns `{ results, nextPageToken, fieldMask, totalResultsCount? }`. Two levels:

```ts
// Low-level: single page
await Google.Ads.googleAdsService.search(client, customerId, { query, pageSize, pageToken });

// High-level: async iterable over all pages
for await (const row of Google.Ads.paginate(
  Google.Ads.googleAdsService.search,
  client,
  customerId,
  { query },
)) {
  // row: GoogleAdsRow
}
```

Reuses the `Cursor` helper from `@promobase/sdk-runtime` (same pattern as Meta's graph cursor).

`searchStream` consumes the full response body in v1 and exposes the same iterable surface. True streaming (newline-delimited JSON as it arrives) is deferred.

## Namespace & public API

```ts
// src/namespace.ts
export const Google = {
  createClient,
  Ads: {
    ...services,   // generated service objects, one per proto service
    paginate,
  },
  Errors: { GoogleAdsError },
} as const;
```

Consumer usage:

```ts
import { Google } from "@promobase/google-ads-sdk";

const client = Google.createClient({
  getAccessToken: async () => db.getGoogleToken(userId),
  developerToken: process.env.GOOGLE_ADS_DEV_TOKEN!,
  loginCustomerId: "1234567890",
});

const { results } = await Google.Ads.googleAdsService.search(client, "9999999999", {
  query: "SELECT campaign.id, campaign.name FROM campaign WHERE campaign.status = 'ENABLED'",
});

await Google.Ads.campaignService.mutate(client, "9999999999", {
  operations: [{ create: { name: "Holiday", status: "PAUSED" } }],
});

for await (const row of Google.Ads.paginate(
  Google.Ads.googleAdsService.search,
  client,
  "9999999999",
  { query: "SELECT ad_group.id FROM ad_group" },
)) {
  console.log(row.adGroup?.id);
}
```

## Umbrella integration

`packages/ad-platforms/package.json` adds `"@promobase/google-ads-sdk": "workspace:*"`.

`packages/ad-platforms/src/index.ts` adds:

```ts
export { Google } from "@promobase/google-ads-sdk";
```

`createAllTools` does **not** get a `google` key in v1 (tools deferred).

## Testing

1. **Codegen unit tests** — parser resolves imports, type-resolver handles all proto kinds, http-binding extracts path params correctly. Fixtures: minimal `.proto` files in `tests/fixtures/`.
2. **Generated output typecheck** — `bun run typecheck` on the generated tree. The most important guarantee.
3. **Client integration tests** — mock `fetch` returning Google error JSON, assert `GoogleAdsError` parsing. Happy-path tests for search, mutate, paginate with mocked responses.
4. **No live API tests** — documented in package `CLAUDE.md`. Consumers run their own integration tests against test accounts.

## Scope risks

1. **Codegen size.** v23 output may be 10–30 MB of TS. Tree-shakeable per-service entry points keep runtime bundles small but repo size grows. Mitigation: commit generated output, add `.gitattributes` `linguist-generated`.
2. **`bytes` fields.** Mapped to `string` (base64) with a type-level comment.
3. **Well-known types.** `Timestamp` → ISO string, `Duration` → `"Ns"` string, `FieldMask` → comma-joined string. Documented in type-resolver.
4. **Method naming collisions.** Verified during parser phase; fail fast if two methods in the same service collide.
5. **Resource name templates.** Google uses `customers/{id}/campaigns/{id}` resource names in responses; passed through as opaque strings.
6. **Proto oneof.** Emitted as a discriminated union via optional fields. REST JSON sets exactly one of the members; we don't enforce this at the type level beyond each being optional.
7. **Request type `customer_id` path param.** Every mutate/get request has a `customer_id` field that's in the URL path. Emitter strips it via `Omit<Req, "customer_id">` in the method signature.

## Open decisions deferred to plan

- Exact `protobufjs` version and whether to add it as a direct dep (codegen-only, not runtime).
- Whether the generated barrel imports every service (bloat) or services are imported individually (stricter tree-shaking).
- `Google.Ads` namespace assembly: generated services spread at codegen time vs. hand-written re-export file that imports from `generated/v23/services/index.ts`.
