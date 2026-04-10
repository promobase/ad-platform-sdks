# @promobase/meta-business-sdk-ts

> Type-safe TypeScript replacement for [`facebook-nodejs-business-sdk`](https://github.com/facebook/facebook-nodejs-business-sdk)

Fully typed SDK for the **Meta (Facebook) Marketing API**, auto-generated from the official [API specs](https://github.com/facebook/facebook-business-sdk-codegen). Every Graph API object, edge, field, and parameter is typed — wrong field names, missing required params, and bad enum values fail at **compile time**, not runtime.

## Features

- **994 typed API objects** — AdAccount, Campaign, AdSet, Ad, Page, Business, and 988 more
- **Field-level type narrowing** — request `["id", "name"]` and get `Pick<CampaignFields, "id" | "name">`, not the full object
- **314 typed node accessors** — `api.adAccount(id)`, `api.campaign(id)`, `api.adSet(id)`, etc.
- **Async-iterable cursors** — `for await` over paginated results with `.toArray()` and `.take(n)`
- **Typed create/update params** — required vs optional params enforced at compile time
- **Zero runtime dependencies** — native `fetch`, no axios/node-fetch/got
- **Drop-in replacement** for `facebook-nodejs-business-sdk` with actual type safety

## Installation

```bash
bun add @promobase/meta-business-sdk-ts
# or
npm install @promobase/meta-business-sdk-ts
# or
pnpm add @promobase/meta-business-sdk-ts
# or
yarn add @promobase/meta-business-sdk-ts
```

## Quick Start

```typescript
import { createClient } from "@promobase/meta-business-sdk-ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
});

// List campaigns — fully typed, auto-paginated
for await (const campaign of api.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status", "daily_budget"],
})) {
  console.log(campaign.name);        // string
  console.log(campaign.daily_budget); // string
}
```

## Usage

### Read an Ad Account

```typescript
const account = await api.adAccount("act_123").get({
  fields: ["id", "name", "currency", "timezone_name", "amount_spent"],
});

console.log(account.name);         // string
console.log(account.currency);     // string
console.log(account.amount_spent); // string
// account.balance                  // TS error — not in requested fields
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
await api.campaign("123456").update({
  name: "Summer Sale 2025 — Updated",
  status: "ACTIVE",
});

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
const cursor = api.adAccount("act_123").campaigns.list({ fields: ["id", "name"] });
const page1 = await cursor.next(); // { data: [...], hasNext: true }
const page2 = await cursor.next(); // { data: [...], hasNext: false }

// Collect all
const all = await api.adAccount("act_123").campaigns.list({ fields: ["id"] }).toArray();

// Take first N
const first10 = await api.adAccount("act_123").campaigns.list({ fields: ["id"] }).take(10);
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

### All Node Accessors

```typescript
api.adAccount(id)        // AdAccount — campaigns, ads, adsets, adcreatives, ...
api.campaign(id)         // Campaign — ads, adsets, insights, copies, ...
api.adSet(id)            // AdSet — ads, insights, ...
api.ad(id)               // Ad — adcreatives, insights, ...
api.adCreative(id)       // AdCreative
api.page(id)             // Page — posts, photos, videos, ...
api.business(id)         // Business — ad accounts, pages, ...
api.customAudience(id)   // CustomAudience
api.productCatalog(id)   // ProductCatalog — products, feeds, ...
// ... 314 typed accessors total
api.client               // Raw ApiClient for advanced use
```

## Migrating from facebook-nodejs-business-sdk

| Before (untyped) | After (typed) |
|---|---|
| `new AdAccount(id).getCampaigns(fields, params)` | `api.adAccount(id).campaigns.list({ fields, params })` |
| `new AdAccount(id).createCampaign(fields, params)` | `api.adAccount(id).campaigns.create(params)` |
| `new Campaign(id).update(fields, params)` | `api.campaign(id).update(params)` |
| `new Campaign(id).delete(fields, params)` | `api.campaign(id).delete()` |
| `params: Object` | `params: CampaignCreateParams` (typed) |
| `fields: Array<string>` | `fields: (keyof CampaignFields)[]` (autocomplete) |

## How It Works

Auto-generated from Meta's official [API spec files](https://github.com/facebook/facebook-business-sdk-codegen). A custom TypeScript codegen pipeline:

1. Parses 994 JSON spec files describing every Graph API object
2. Applies SDKCodegen.json patches (return type overrides, hidden fields, etc.)
3. Resolves spec types to TypeScript (`list<map<string, string>>` → `Record<string, string>[]`)
4. Detects circular imports via Tarjan's SCC algorithm
5. Emits typed `.ts` files with interfaces, params, and node factory functions

## Related

Part of [`ad-platform-sdks`](https://github.com/promobase/ad-platform-sdks) — type-safe SDKs for Meta, TikTok, and Google ad platforms.

## License

MIT
