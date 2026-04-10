# @promobase/meta-business-sdk-ts

Type-safe TypeScript SDK for the Meta Marketing API, auto-generated from the official [facebook-business-sdk-codegen](https://github.com/facebook/facebook-business-sdk-codegen) API specs.

## Features

- **Full type safety** — wrong field names, missing required params, and incorrect enum values fail at compile time
- **Field-level type narrowing** — request `["id", "name"]` and get back `Pick<CampaignFields, "id" | "name">`, not the full object
- **994 typed API objects** — every Graph API node, edge, and param is typed
- **Async-iterable cursors** — `for await` over paginated results
- **Zero runtime dependencies** — native `fetch`, no axios/node-fetch

## Installation

```bash
bun add @promobase/meta-business-sdk-ts
# or
npm install @promobase/meta-business-sdk-ts
```

## Quick Start

```typescript
import { createClient } from "@promobase/meta-business-sdk-ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
});

// List campaigns with fully typed results
for await (const campaign of api.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status"],
})) {
  console.log(campaign.name, campaign.status);
  // campaign is Pick<CampaignFields, "id" | "name" | "status">
}
```

## Usage

### Read an Ad Account

```typescript
const account = await api.adAccount("act_123").get({
  fields: ["id", "name", "currency", "timezone_name", "amount_spent"],
});

console.log(account.name);       // string
console.log(account.currency);   // string
console.log(account.amount_spent); // string
// account.balance → TS error (not in requested fields)
```

### Create a Campaign

```typescript
await api.adAccount("act_123").campaigns.create({
  name: "Summer Sale 2025",       // required
  objective: "OUTCOME_SALES",     // required
  special_ad_categories: [],      // required
  status: "PAUSED",               // optional
  daily_budget: 5000,             // optional
});
```

### Update and Delete

```typescript
// Update — all params are optional
await api.campaign("123456").update({
  name: "Summer Sale 2025 — Updated",
  status: "ACTIVE",
});

// Delete
await api.campaign("123456").delete();
```

### Pagination

```typescript
// Auto-pagination with for-await
for await (const ad of api.adAccount("act_123").ads.list({
  fields: ["id", "name", "status"],
})) {
  console.log(ad.name);
}

// Manual page-by-page
const cursor = api.adAccount("act_123").campaigns.list({
  fields: ["id", "name"],
});

const page1 = await cursor.next(); // { data: [...], hasNext: true }
const page2 = await cursor.next(); // { data: [...], hasNext: false }

// Collect all into array
const all = await api.adAccount("act_123").campaigns.list({
  fields: ["id", "name"],
}).toArray();

// Take first N
const first10 = await api.adAccount("act_123").campaigns.list({
  fields: ["id", "name"],
}).take(10);
```

### Available Node Accessors

```typescript
const api = createClient({ accessToken: "..." });

api.adAccount(id)       // AdAccount node
api.campaign(id)        // Campaign node
api.adSet(id)           // AdSet node
api.ad(id)              // Ad node
api.adCreative(id)      // AdCreative node
api.page(id)            // Page node
api.business(id)        // Business node
api.customAudience(id)  // CustomAudience node
api.productCatalog(id)  // ProductCatalog node
// ... 314 typed node accessors total
api.client              // Raw ApiClient for advanced use
```

### Error Handling

```typescript
import { createClient, FacebookApiError } from "@promobase/meta-business-sdk-ts";

try {
  await api.campaign("invalid").get({ fields: ["id"] });
} catch (err) {
  if (err instanceof FacebookApiError) {
    console.log(err.message);    // "Invalid OAuth access token."
    console.log(err.code);       // 190
    console.log(err.subcode);    // 463
    console.log(err.type);       // "OAuthException"
    console.log(err.fbtrace_id); // "AbC123xYz"
  }
}
```

## Development

```bash
# Clone with submodules
git clone --recurse-submodules <repo-url>
cd meta-business-sdk-ts

# Install
bun install

# Generate SDK from API specs
bun run codegen

# Type-check (must pass with zero errors)
bun run typecheck

# Run tests
bun test tests/

# Build for publishing
bun run build
```

## Architecture

```
api_specs/ (git submodule → facebook-business-sdk-codegen)
    └── ~995 JSON spec files
          │
          ▼
src/codegen/
  parser.ts         → reads specs, applies SDKCodegen.json patches
  type-resolver.ts  → maps spec types to TypeScript (list<map<K,V>> → Record<K,V>[])
  enum-extractor.ts → scrapes enum values from official Node SDK
  dep-graph.ts      → Tarjan's SCC for circular import detection
  emitter.ts        → generates .ts source files as strings
  index.ts          → orchestrates pipeline, emits client-factory + barrel
          │
          ▼
src/generated/
  objects/           → one file per Graph API object (994 files)
  enums/             → string union types for enum fields
  client-factory.ts  → createClient with 314 typed node accessors
  index.ts           → barrel re-export

src/runtime/
  client.ts          → fetch-based ApiClient (auth, GET/POST/DELETE)
  cursor.ts          → async-iterable Cursor with pagination
  errors.ts          → FacebookApiError with code/subcode/fbtrace_id
```

## License

MIT
