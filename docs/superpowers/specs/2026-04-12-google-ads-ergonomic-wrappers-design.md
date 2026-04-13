# Google Ads Ergonomic Wrappers — Design Spec

**Date:** 2026-04-12
**Package:** `@promobase/google-ads-sdk` (additive)
**Status:** Approved, ready for implementation plan

## Goal

Ship hand-written ergonomic wrappers over the generated Google Ads services for the core campaign-lifecycle resources. Callers get a customer-bound factory, rich `create` return values that feed directly into subsequent calls as references, and list/get helpers backed by GAQL.

## Motivation

The generated services are type-safe but clunky. A typical campaign creation flow today looks like:

```ts
await campaignBudgetService.mutateCampaignBudgets(client.http, "123", {
  operations: [{ create: { name: "Q1", amountMicros: "5000000" } }],
});
// parse result.results[0].resourceName
const budgetName = "customers/123/campaignBudgets/456";
await campaignService.mutateCampaigns(client.http, "123", {
  operations: [{ create: { name: "Search", campaignBudget: budgetName, ... } }],
});
```

Every step unwraps an `operations` array and manually threads `resourceName` strings. The wrappers compress this to:

```ts
const customer = Google.Ads.customer(client, "123");
const budget = await customer.campaignBudgets.create({ name: "Q1", amountMicros: "5000000" });
await customer.campaigns.create({ name: "Search", campaignBudget: budget, ... });
```

## Non-goals

- Every Google Ads resource — only the campaign-lifecycle core (customers, campaignBudgets, campaigns, adGroups, adGroupAds, ads).
- Transactional multi-resource mutates via temporary IDs (deferred).
- Typed GAQL query builder (separate project, see `2026-04-12-google-ads-gaql-builder-design.md` when written).
- Reporting helpers beyond raw list/get.
- AI SDK tool integration (follow-up).
- Asset library, audiences, conversion tracking.

## Scope

Six resource wrappers, one customer factory, one shared types module.

## File layout

```
packages/google-ads-sdk/src/
├── clients/                   (new)
│   ├── types.ts               Ref<T> + resolveRef helper
│   ├── campaign-budgets.ts    CampaignBudget CRUD
│   ├── campaigns.ts           Campaign CRUD
│   ├── ad-groups.ts           AdGroup CRUD
│   ├── ad-group-ads.ts        AdGroupAd CRUD
│   ├── ads.ts                 Ad CRUD (read-only after creation; Google Ads doesn't allow mutating most ad fields)
│   ├── customer.ts            createCustomer(client, customerId) factory
│   └── index.ts               barrel
├── namespace.ts               modified — add customer to Google.Ads
└── index.ts                   modified — re-export customer factory
```

## Customer factory

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "./campaign-budgets.ts";
import { campaigns } from "./campaigns.ts";
import { adGroups } from "./ad-groups.ts";
import { adGroupAds } from "./ad-group-ads.ts";
import { ads } from "./ads.ts";

export interface Customer {
  campaignBudgets: ReturnType<typeof campaignBudgets>;
  campaigns: ReturnType<typeof campaigns>;
  adGroups: ReturnType<typeof adGroups>;
  adGroupAds: ReturnType<typeof adGroupAds>;
  ads: ReturnType<typeof ads>;
}

export function createCustomer(client: HttpClient, customerId: string): Customer {
  return {
    campaignBudgets: campaignBudgets(client, customerId),
    campaigns: campaigns(client, customerId),
    adGroups: adGroups(client, customerId),
    adGroupAds: adGroupAds(client, customerId),
    ads: ads(client, customerId),
  };
}
```

Exposed via the namespace:

```ts
// src/namespace.ts
export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: (client: GoogleAdsClient, customerId: string) =>
      createCustomer(client.http, customerId),
  },
  Errors: { GoogleAdsError },
} as const;
```

Callers write `Google.Ads.customer(client, "123")` — note that the factory takes the `GoogleAdsClient` wrapper, not `HttpClient`, to keep the public API clean. Internally it unwraps `.http`.

## Type helpers

```ts
// clients/types.ts
export type Ref<T extends { resourceName?: string }> =
  | string
  | (T & { resourceName: string });

export function resolveRef<T extends { resourceName?: string }>(ref: Ref<T>): string {
  return typeof ref === "string" ? ref : ref.resourceName;
}
```

A `Ref<T>` accepts either:
- a raw resource-name string (`"customers/123/campaigns/456"`)
- the rich object returned by a prior `create(...)` (which TypeScript narrows via the required `resourceName` member)

Wrappers use `Ref<>` on input fields that accept resource references. Example: `CreateCampaignInput` requires `campaignBudget: Ref<CampaignBudget>`.

## Wrapper contract

Every wrapper exposes exactly these methods:

| Method | Returns | Notes |
|---|---|---|
| `create(input)` | `Resource & { resourceName: string }` | Wraps in `operations: [{ create }]`. Throws if result lacks `resourceName`. |
| `createMany(inputs[])` | `Array<Resource & { resourceName: string }>` | Order preserved. Length must match. |
| `update(resourceName, patch)` | `void` | Builds `updateMask` from `Object.keys(patch)`. |
| `remove(resourceName)` | `void` | Sends `{ remove: resourceName }` operation. |
| `get(resourceName)` | `Resource \| null` | GAQL `WHERE resource_name = '...'`, fixed field set. |
| `list()` | `Resource[]` | GAQL `SELECT ... FROM <resource>`, fixed field set. |

**Input types:**

```ts
export type CreateCampaignInput = Omit<
  Campaign,
  "resourceName" | "id" | "baseCampaign" | "trackingUrlTemplate"
> & {
  campaignBudget: Ref<CampaignBudget>;
};
```

Each resource gets its own `Create<Resource>Input` type omitting managed fields (`id`, `resourceName`, server-assigned audit fields) and strengthening reference fields to `Ref<T>`.

**Managed fields per resource** (omitted from Create input):
- `Campaign`: `resourceName`, `id`, `baseCampaign`, `trackingUrlTemplate` (managed, immutable after create)
- `CampaignBudget`: `resourceName`, `id`, `referenceCount`, `hasRecommendedBudget`, `recommendedBudgetAmountMicros`
- `AdGroup`: `resourceName`, `id`, `baseAdGroup`
- `AdGroupAd`: `resourceName` (others carry through; `ad: Ref<Ad>` is the reference field)
- `Ad`: `resourceName`, `id` — note `create` goes through `AdGroupAd`; a standalone `ads.create` is not exposed (Google Ads ties ad creation to an ad group)

**Ads wrapper limitation:** Google Ads v23 does not permit most ad fields to change post-creation (headlines, descriptions, URLs are immutable). Our `ads` wrapper exposes only `get`, `list`, and `remove`. Creation happens via `adGroupAds.create` which nests a full `Ad` in the operation body. This mirrors the API's real constraints.

## Error handling

All wrappers throw `GoogleAdsError` on API failures (already wired in via `HttpClient.onError`). The only wrapper-specific error is a malformed-response guard in `create`:

```ts
if (!res.results?.[0]?.resourceName) {
  throw new Error(`${resourceType}.create returned no resourceName`);
}
```

`get` returns `null` on zero results. `list` returns `[]` on zero results. Neither throws for not-found.

## Return value shape

`create` returns the original input merged with the server-assigned `resourceName`:

```ts
const campaign = await customer.campaigns.create({
  name: "Q1",
  status: "PAUSED",
  advertisingChannelType: "SEARCH",
  campaignBudget: budget,
});
// campaign.name === "Q1"
// campaign.resourceName === "customers/123/campaigns/456"
// campaign is usable as Ref<Campaign> in subsequent calls
```

This shape means the return is not a freshly-read Campaign from the API — fields that are server-defaulted (`servingStatus`, etc.) are not populated. Callers who need a full read call `customer.campaigns.get(campaign.resourceName)` explicitly.

## GAQL usage in get/list

Hardcoded field sets per resource, scoped to the core display fields:

- **Campaign**: `campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, campaign.campaign_budget, campaign.start_date, campaign.end_date`
- **CampaignBudget**: `campaign_budget.id, campaign_budget.name, campaign_budget.amount_micros, campaign_budget.delivery_method`
- **AdGroup**: `ad_group.id, ad_group.name, ad_group.status, ad_group.campaign, ad_group.type, ad_group.cpc_bid_micros`
- **AdGroupAd**: `ad_group_ad.resource_name, ad_group_ad.status, ad_group_ad.ad.id, ad_group_ad.ad.type, ad_group_ad.ad.final_urls`
- **Ad**: delegates to `AdGroupAd` (no standalone GAQL `FROM ad`)

`get` adds `WHERE <resource>.resource_name = '<escaped>'`. Resource names must be escaped for single quotes; since Google Ads resource names are ASCII with only `/` and digits, a basic replace suffices.

Full field customization is deferred to the GAQL builder project.

## Testing

Seven test files under `packages/google-ads-sdk/tests/clients/`:

1. `types.test.ts` — `resolveRef` handles string and rich-object paths.
2. `campaign-budgets.test.ts` — CRUD round-trip with mocked fetch.
3. `campaigns.test.ts` — CRUD + `Ref<CampaignBudget>` resolution.
4. `ad-groups.test.ts` — CRUD + `Ref<Campaign>` resolution.
5. `ad-group-ads.test.ts` — create with nested `Ad` body.
6. `ads.test.ts` — get/list/remove only; create is explicitly not exposed.
7. `customer.test.ts` — end-to-end chain: `customer.campaignBudgets.create → .campaigns.create → .adGroups.create → .adGroupAds.create`, asserting each return value feeds the next as a Ref.

Every test asserts:
- URL matches the expected generated service path
- Request body wraps the payload in `operations: [{ create|update|remove: ... }]`
- `updateMask` is derived from `Object.keys(patch).join(",")` in update calls
- `create` throws when the mock response lacks a `resourceName`

No live-API tests (consistent with the rest of the SDK).

## Type-safety probe

Extend `tests/type-safety.check.ts` with:
- `Ref<Campaign>` accepts both `"customers/123/campaigns/456"` and a rich object returned from `campaigns.create(...)`
- `CreateCampaignInput` rejects `resourceName` (omitted), arbitrary extra fields, and wrong-type refs (e.g. `Ref<CampaignBudget>` where `Ref<Campaign>` is expected)
- `customer.campaigns.create(...)` return value is usable as a `Ref<Campaign>` in the next call

## Umbrella integration

`packages/ad-platforms/src/index.ts` already re-exports the `Google` namespace, so `customer` is automatically available via `Google.Ads.customer(...)`. No changes needed.

## Open decisions deferred to plan

- Whether `customer(client, id)` should cache so repeated calls return the same instance. Default: no cache (plain factory, cheap to recreate).
- Whether the `ads` wrapper should include `get` by the ad's own resource name (which is `customers/.../ads/.../...`) or only via the ad-group-ad path. Default: the ad-group-ad path only, since that's what Google's API supports cleanly.
- Whether to expose a `bulk` utility for multi-operation-type mutates in one request. Default: no, that's the deferred "transactional helper".

## Scope risks

1. **Field omission drift.** As Google adds fields to `Campaign`, our `Omit<>` lists stay the same and the new fields leak into `Create<>Input` automatically. That's fine — drift goes the right way. But `id`/`resourceName` omissions will need to be audited every time we regen v23.
2. **`updateMask` derivation.** Using `Object.keys(patch).join(",")` assumes no nested paths like `network_settings.target_search_network`. For v1 this is acceptable — nested updates require the caller to use the raw `campaignService.mutateCampaigns` with a manual mask.
3. **String-escaped resourceName in WHERE clauses.** Google Ads resource names are ASCII-only with `/` and digits, so plain concatenation is safe. We add a sanity check that rejects resource names containing `'` and throws.
4. **`ads` asymmetry.** Having a wrapper that only exposes read/remove is a surface inconsistency. Documented clearly in JSDoc on the file so users don't look for `.create`.
