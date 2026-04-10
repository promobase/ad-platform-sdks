# meta-business-sdk-ts

Type-safe TypeScript SDK for the Meta Marketing API, auto-generated from the official [facebook-business-sdk-codegen](https://github.com/facebook/facebook-business-sdk-codegen) API specs.

## Features

- Full type safety for all Graph API objects and fields
- String union types for all enums (not runtime objects)
- Lightweight fetch-based runtime with no external HTTP dependencies
- Cursor-based pagination with async iteration
- Generated from ~995 official API spec files

## Installation

```bash
bun add meta-business-sdk-ts
```

## Quick Start

```typescript
import { createClient } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

// List all campaigns in an ad account
for await (const campaign of client.adAccount("act_123456789").getCampaigns()) {
  console.log(campaign.name, campaign.status);
}
```

## Usage Examples

### Read an Ad Account

```typescript
import { createClient } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

const account = await client.adAccount("act_123456789").get({
  fields: ["name", "currency", "account_status", "spend_cap"],
});

console.log(account.name);      // "My Ad Account"
console.log(account.currency);  // "USD"
```

### List Campaigns with Typed Fields

```typescript
import { createClient, Campaign } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

// Pick<Campaign, ...> narrows the return type to only the requested fields
const campaigns = client.adAccount("act_123456789").getCampaigns({
  fields: ["id", "name", "status", "objective", "daily_budget"],
  filtering: [{ field: "effective_status", operator: "IN", value: ["ACTIVE"] }],
});

for await (const campaign of campaigns) {
  // campaign is typed as Pick<Campaign, "id" | "name" | "status" | "objective" | "daily_budget">
  console.log(`${campaign.name} — ${campaign.status}`);
}
```

### Create a Campaign

```typescript
import { createClient, CampaignCreateParams } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

const params: CampaignCreateParams = {
  name: "Summer Sale 2025",
  objective: "OUTCOME_SALES",
  status: "PAUSED",
  special_ad_categories: [],
};

const result = await client.adAccount("act_123456789").createCampaign(params);
console.log("Created campaign ID:", result.id);
```

### Update and Delete

```typescript
import { createClient } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

// Update a campaign
await client.campaign("120330000123456789").update({
  name: "Summer Sale 2025 — Updated",
  daily_budget: "5000",
});

// Delete a campaign
await client.campaign("120330000123456789").delete();
```

### Manual Pagination with Cursor

```typescript
import { createClient } from "meta-business-sdk-ts";

const client = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

const cursor = client.adAccount("act_123456789").getCampaigns({
  fields: ["id", "name"],
  limit: 25,
});

// Fetch the first page
const firstPage = await cursor.next();
console.log("First page:", firstPage.value);

// Fetch subsequent pages manually
while (!firstPage.done) {
  const page = await cursor.next();
  if (page.done) break;
  console.log("Next page:", page.value);
}
```

## Development

### Prerequisites

- [Bun](https://bun.sh) v1.3+
- TypeScript 5.9+

### Setup

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/user/meta-business-sdk-ts.git
cd meta-business-sdk-ts

# Install dependencies
bun install

# Generate SDK from API specs
bun run codegen

# Type-check
bun run typecheck

# Run tests
bun test tests/

# Build for publishing
bun run build
```

## Architecture

The SDK is produced by a multi-stage codegen pipeline:

```
api_specs/ (git submodule)
    └── *.json spec files
          │
          ▼
src/codegen/
  parser.ts        — reads spec JSONs, applies SDKCodegen.json patches
  type-resolver.ts — maps spec types to TypeScript types
  enum-extractor.ts— scrapes enum values from official Node SDK
  dep-graph.ts     — detects circular imports, emits `import type` edges
  emitter.ts       — renders .ts source files as strings
  index.ts         — orchestrates the full pipeline
          │
          ▼
src/generated/
  objects/         — one file per Graph API node (AdAccount, Campaign, …)
  enums/           — string union types for all enum fields
  index.ts         — barrel re-export

src/runtime/
  client.ts        — createClient factory, per-node accessor methods
  cursor.ts        — async iterator over paginated Graph API responses
  errors.ts        — typed GraphAPIError with code/subcode
```

The runtime ships with the package. The codegen pipeline is a dev-only tool and is not included in the published bundle.

## License

MIT
