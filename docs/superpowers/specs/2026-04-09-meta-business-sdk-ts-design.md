# Meta Business SDK TypeScript — Design Spec

## Overview

A fully type-safe TypeScript client for the Meta (Facebook) Marketing API, generated from the official API spec JSON files in `facebook/facebook-business-sdk-codegen`. Ships as a single npm package containing both a Bun-based codegen tool and a lightweight runtime library.

**Goal**: Replace the untyped `facebook-nodejs-business-sdk` (plain JS with Flow annotations) with a modern TS SDK where wrong field names, missing required params, wrong enum values, and incorrect return types all fail at compile time.

**Pinned API version**: v25.0.1

## Source Specs

### Location

Git submodule referencing `facebook/facebook-business-sdk-codegen`, pinned to the v25.0.1 tag/commit.

### Spec Shape

~995 JSON files in `api_specs/specs/`, one per Graph API object. Each file has two top-level keys:

```json
{
  "fields": [
    { "name": "id", "type": "string" },
    { "name": "bid_strategy", "type": "Campaign_bid_strategy" },
    { "name": "adlabels", "type": "list<AdLabel>" }
  ],
  "apis": [
    {
      "method": "GET",
      "endpoint": "campaigns",
      "return": "Campaign",
      "params": [
        { "name": "effective_status", "type": "list<effective_status_enum_param>", "required": false }
      ]
    },
    {
      "method": "POST",
      "endpoint": "campaigns",
      "return": "Campaign",
      "params": [
        { "name": "name", "type": "string", "required": true },
        { "name": "objective", "type": "objective_enum_param", "required": true }
      ]
    }
  ]
}
```

### SDKCodegen.json Patches

Applied before codegen via JSONPath selectors. Critical patches include:

- **Return type overrides**: e.g., POST to `/insights` returns `AdReportRun`, not `AdsInsights`
- **Hidden fields**: `not_visible: true` removes fields from the generated interface
- **File params**: `is_file_param: true` marks params that accept file uploads
- **Creation endpoint flags**: `preferred_creation_endpoint`, `exclude_creation_endpoint`
- **Enum overrides**: Hardcoded enum value lists for specific types

### Type System

Complete inventory of spec type strings:

| Category | Examples |
|----------|----------|
| Primitives | `string`, `bool`, `int`, `unsigned int`, `float`, `datetime`, `file` |
| Containers | `list<string>`, `list<int>`, `list<Object>`, `list` (bare) |
| Maps | `map<string, string>`, `map<string, int>`, `map<string, Object>`, `map` (bare) |
| Nested | `list<map<string, string>>`, `list<list<int>>`, `list<map<string, list<map<string, string>>>>` |
| Object refs | `AdSet`, `Campaign`, `Targeting` (references other spec files by name) |
| Field enums | `Campaign_bid_strategy`, `Ad_configured_status` (format: `ObjectName_field_name`) |
| Param enums | `adgroupcopies_date_preset_enum_param` (format: `lowercaseendpoint_field_enum_param`) |
| Enum containers | `list<Targeting_device_platforms>`, `list<effective_status_enum_param>` |

### Object Categories

- **Full CRUD objects**: Ad, AdAccount, Campaign, AdSet, Page, Business, ProductCatalog (~50 objects with rich API surfaces)
- **Pure data objects**: AdsInsights, Targeting, AdsActionStats (~900+ objects with fields only, no apis)
- **Edge-only patterns**: Some objects have only GET edges, some only POST, some all three

### Digit-prefixed fields

Fields like `1d_click`, `28d_view` in AdsActionStats require bracket notation or renaming in TypeScript.

## Architecture

```
meta-business-sdk-ts/
├── api_specs/                  # git submodule -> facebook-business-sdk-codegen (pinned v25.0.1)
├── src/
│   ├── codegen/                # The generator (runs at build time via `bun run codegen`)
│   │   ├── index.ts            # Orchestrator: parse -> resolve -> emit -> validate
│   │   ├── parser.ts           # Parse spec JSONs + apply SDKCodegen.json patches
│   │   ├── type-resolver.ts    # Map spec type strings -> TS type expressions
│   │   ├── enum-extractor.ts   # Parse synthetic enum naming conventions, deduplicate
│   │   ├── dep-graph.ts        # Build dependency graph, detect + break circular imports
│   │   └── emitter.ts          # String-based .ts file emitter with formatting helpers
│   ├── runtime/                # Lightweight runtime (ships with the published package)
│   │   ├── client.ts           # Fetch-based API client (auth, base URL, debug)
│   │   ├── cursor.ts           # Typed async-iterable cursor for pagination
│   │   ├── node.ts             # Base node accessor (adAccount, page, etc.)
│   │   ├── edges.ts            # Edge accessor types (ReadEdge, ReadWriteEdge, etc.)
│   │   ├── types.ts            # Shared type aliases
│   │   └── errors.ts           # Typed error classes (FacebookRequestError, etc.)
│   └── generated/              # Output of codegen (checked in, published)
│       ├── objects/            # One file per spec object (~995 files)
│       ├── enums/              # Extracted enum string union types (shared, deduplicated)
│       └── index.ts            # Barrel export
├── tests/
│   ├── codegen/                # Tests for the codegen itself
│   └── runtime/                # Tests for cursor, client, etc.
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

## Codegen Pipeline

### Step 1: Parse Specs

`parser.ts` reads all JSON spec files from `api_specs/specs/`. Then applies `SDKCodegen.json` patches via JSONPath:

1. Load all spec files into a `Map<string, Spec>` keyed by object name
2. Load `SDKCodegen.json`
3. Apply `spec_overriding` patches (return type overrides, hidden fields, file params, etc.)
4. Apply `enum_overriding` patches (hardcoded enum values)
5. Extract `read_endpoints` mapping
6. Extract `flags` (behavioral capabilities per object)

Output: Patched spec map ready for type resolution.

### Step 2: Extract Enums

`enum-extractor.ts` parses enum type naming conventions:

- Field enums: `Campaign_bid_strategy` -> extract enum values from the spec's field metadata
- Param enums: `adgroupcopies_date_preset_enum_param` -> extract from the param's type metadata
- Enum values come from the codegen processor's internal logic (need to reverse-engineer from the Mustache template's `api_spec_based_enum_reference` data)

**Note**: Enum values are NOT in the raw spec JSON. They are derived during codegen processing. We need to either:
- (a) Parse them from the existing Node SDK's generated output (most reliable), or
- (b) Find them in a preprocessor step of the original codegen, or
- (c) Fetch them from the Graph API's metadata endpoint

**Decision**: Start with (a) — scrape enum values from the generated Node SDK source files. This is a one-time extraction that produces a `enums.json` we can check in. Revisit if upstream changes.

Output: `Map<string, string[]>` of enum name -> string values.

### Step 3: Resolve Types

`type-resolver.ts` maps spec type strings to TypeScript type expressions:

| Spec Type | TypeScript Type |
|-----------|----------------|
| `string` | `string` |
| `bool` | `boolean` |
| `int`, `unsigned int` | `number` |
| `float` | `number` |
| `datetime` | `string` (ISO 8601) |
| `file` | `File \| Blob \| ReadableStream` |
| `Object` | `Record<string, unknown>` |
| `map` (bare) | `Record<string, unknown>` |
| `list` (bare) | `unknown[]` |
| `list<X>` | `X[]` (recursive) |
| `map<K, V>` | `Record<K, V>` (recursive) |
| `Campaign`, `AdSet`, etc. | Import reference to generated interface |
| `Campaign_bid_strategy` | Import reference to generated enum type |
| `list<Ad_configured_status>` | `AdConfiguredStatus[]` |

The resolver must handle arbitrarily nested generics: `list<map<string, list<map<string, string>>>>` -> `Record<string, Record<string, string>[]>[]`.

### Step 4: Build Dependency Graph

`dep-graph.ts` analyzes cross-references between objects:

1. For each spec, collect all type references to other spec objects
2. Build a directed graph of dependencies
3. Detect strongly connected components (cycles)
4. For circular dependencies, separate **type imports** from **runtime imports**:
   - Type-only imports (`import type { CampaignFields }`) don't cause runtime cycles
   - Runtime imports (needed for edge methods that construct instances) use lazy dynamic `import()`

**Circular import resolution strategy**:

```ts
// generated/objects/ad-account.ts

// Type imports are fine — erased at runtime
import type { CampaignFields } from "./campaign.ts";

// Edge method uses lazy import for the deserializer
const campaigns = {
  list: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: CampaignListParams }) => {
    return new Cursor<Pick<CampaignFields, F[number]>>(
      client,
      `${id}/campaigns`,
      opts.fields,
      opts.params ?? {},
      // Lazy import — only resolved when the cursor actually deserializes
      async (raw) => {
        const { deserializeCampaign } = await import("./campaign.ts");
        return deserializeCampaign(raw);
      },
    );
  },
};
```

### Step 5: Emit TypeScript Files

`emitter.ts` generates `.ts` source files as strings. One file per spec object, plus shared enum files.

**Per-object file structure** (e.g., `generated/objects/campaign.ts`):

```ts
// Type-only imports (safe for circular deps)
import type { AdSetFields } from "./ad-set.ts";
import type { AdFields } from "./ad.ts";

// Runtime imports (non-circular only)
import { Cursor } from "../../runtime/cursor.ts";
import type { ApiClient } from "../../runtime/client.ts";

// Enums
import type { CampaignBidStrategy, CampaignObjective, CampaignEffectiveStatus } from "../enums/campaign.ts";

// === Fields Interface ===
export interface CampaignFields {
  id: string;
  name: string;
  status: CampaignEffectiveStatus;
  daily_budget: string;
  bid_strategy: CampaignBidStrategy;
  objective: CampaignObjective;
  // ... all fields with proper types
}

// === Params Interfaces ===
export interface CampaignListParams {
  effective_status?: CampaignEffectiveStatus[];
  is_completed?: boolean;
  // ... all GET params
}

export interface CampaignCreateParams {
  name: string;                          // required
  objective: CampaignObjective;          // required
  status?: CampaignEffectiveStatus;
  daily_budget?: number;
  bid_strategy?: CampaignBidStrategy;
  special_ad_categories: SpecialAdCategory[];  // required
  // ... all POST params with required/optional
}

export interface CampaignUpdateParams {
  name?: string;
  status?: CampaignEffectiveStatus;
  daily_budget?: number;
  // ... all update params (all optional)
}

// === Deserializer ===
export function deserializeCampaign(raw: unknown): CampaignFields {
  return raw as CampaignFields;  // runtime validation is a future enhancement
}

// === Node Accessor Factory ===
export function campaignNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CampaignFields, F[number]>>(`${id}`, opts),

    update: (params: CampaignUpdateParams) =>
      client.post(`${id}`, params),

    delete: () =>
      client.delete(`${id}`),

    // Edges
    ads: {
      list: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: AdListParams }) =>
        new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts),
    },
    adSets: {
      list: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: AdSetListParams }) =>
        new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsets`, opts),
    },
    // ... all edges
  };
}
```

**Enum file structure** (e.g., `generated/enums/campaign.ts`):

```ts
export type CampaignBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP";
export type CampaignObjective = "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC";
export type CampaignEffectiveStatus = "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED" | "IN_PROCESS" | "WITH_ISSUES";
```

### Step 6: Validate

After emitting all files, run `tsc --noEmit` on the generated output to verify everything compiles. This catches:
- Malformed type expressions
- Missing imports
- Circular dependency issues
- Invalid identifier names

## Runtime Library

### ApiClient (`runtime/client.ts`)

```ts
export class ApiClient {
  constructor(opts: {
    accessToken: string;
    apiVersion?: string;    // default "v25.0"
    baseUrl?: string;       // default "https://graph.facebook.com"
    debug?: boolean;
  });

  get<T>(path: string, opts: { fields: string[]; params?: Record<string, unknown> }): Promise<T>;
  post<T>(path: string, params: Record<string, unknown>): Promise<T>;
  delete(path: string, params?: Record<string, unknown>): Promise<void>;

  // For edge listing — returns raw paginated response
  getEdge(path: string, opts: { fields: string[]; params?: Record<string, unknown> }): Promise<PaginatedResponse>;
}
```

- Uses native `fetch` (Bun and modern Node.js)
- Access token sent as query parameter (matching Graph API convention)
- Debug mode logs requests/responses
- Throws `FacebookApiError` with status, message, error code, fbtrace_id

### Cursor (`runtime/cursor.ts`)

```ts
export class Cursor<T> implements AsyncIterable<T> {
  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: string[]; params?: Record<string, unknown> },
    deserialize?: (raw: unknown) => T,
  );

  // Manual pagination
  next(): Promise<{ data: T[]; hasNext: boolean }>;

  // Auto-pagination via async iteration
  [Symbol.asyncIterator](): AsyncIterator<T>;

  // Convenience
  toArray(): Promise<T[]>;
  take(n: number): Promise<T[]>;
}
```

- Lazy — no request until first `next()` or iteration
- Forward-only pagination using `after` cursor
- Each page deserializes items using the type-specific deserializer

### Error Types (`runtime/errors.ts`)

```ts
export class FacebookApiError extends Error {
  status: number;
  code: number;           // Facebook error code
  subcode?: number;       // Facebook error subcode
  fbtrace_id: string;
  type: string;           // e.g., "OAuthException"
}
```

## Public API Surface

### Initialization

```ts
import { createClient } from "meta-business-sdk-ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
  // optional: apiVersion, baseUrl, debug
});
```

### Usage Patterns

```ts
// Read an ad account
const account = await api.adAccount("act_123").get({
  fields: ["name", "currency", "timezone_name"],
});
// ^? { name: string; currency: string; timezone_name: string }

// List campaigns with auto-pagination
for await (const campaign of api.adAccount("act_123").campaigns.list({
  fields: ["name", "status", "daily_budget"],
  params: { effective_status: ["ACTIVE"] },
})) {
  console.log(campaign.name);
  // ^? { name: string; status: CampaignEffectiveStatus; daily_budget: string }
}

// Create a campaign
const newCampaign = await api.adAccount("act_123").campaigns.create({
  name: "Spring 2025",
  objective: "OUTCOME_SALES",
  special_ad_categories: [],
  status: "PAUSED",
});

// Update a campaign
await api.campaign("123456").update({
  name: "Updated Name",
  status: "ACTIVE",
});

// Delete
await api.campaign("123456").delete();

// Manual pagination
const cursor = api.adAccount("act_123").ads.list({
  fields: ["name", "status"],
});
const page1 = await cursor.next(); // { data: [...], hasNext: true }
const page2 = await cursor.next(); // { data: [...], hasNext: false }
```

### Entry Points

The top-level `api` object has factory methods for each major node type:

```ts
api.adAccount(id)      // -> AdAccountNode
api.campaign(id)       // -> CampaignNode
api.ad(id)             // -> AdNode
api.adSet(id)          // -> AdSetNode
api.page(id)           // -> PageNode
api.business(id)       // -> BusinessNode
api.customAudience(id) // -> CustomAudienceNode
// ... one per object that has a read_endpoint in SDKCodegen.json
```

## Digit-Prefixed Field Handling

Fields like `1d_click`, `28d_view` are invalid JS identifiers. Strategy:

```ts
// In the interface, use string literal keys
export interface AdsActionStatsFields {
  "1d_click": string;
  "28d_view": string;
  action_type: string;
  // ...
}

// Access via bracket notation
stats["1d_click"]  // works, fully typed
```

This is valid TypeScript and preserves type safety.

## Out of Scope (Future Work)

- **Server-side events**: EventRequest, ServerEvent, etc. (hand-written in original SDK)
- **Video upload**: Chunked upload (VideoUploader)
- **Batch API**: Multiple calls in one request (FacebookAdsApiBatch)
- **Runtime validation**: Deserializers currently trust the API response shape
- **Rate limiting / retry**: Not in original SDK, can add later
- **Multi-version support**: Only v25.0.1 for now

## Build Commands

```bash
# Install deps
bun install

# Run codegen (parse specs -> emit TS -> validate)
bun run codegen

# Type-check everything
bun run typecheck    # tsc --noEmit

# Run tests
bun test

# Build for publishing
bun run build
```

## Package Publishing

Published as `meta-business-sdk-ts` on npm. The package includes:
- `src/runtime/` — the API client, cursor, error types
- `src/generated/` — all generated object types, enums, barrel export
- Does NOT include `src/codegen/` — that's a dev dependency only
