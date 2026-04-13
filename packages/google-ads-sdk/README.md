<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @promobase/google-ads-sdk

**Type-safe TypeScript SDK for the Google Ads API v23 — generated from protobuf, with a typed GAQL query builder.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/google-ads-sdk.svg?label=%40promobase%2Fgoogle-ads-sdk)](https://www.npmjs.com/package/@promobase/google-ads-sdk)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

A fetch-based, runtime-agnostic Google Ads v23 client generated from the official protos. 184 resource types, 111 services, 543 enums, 235 metric fields, 132 segment fields — all typed. Plus a customer-bound factory for campaign lifecycle flows and a typed GAQL query builder with field-literal autocomplete and row-level narrowing.

## Install

```bash
bun add @promobase/google-ads-sdk
# or
npm install @promobase/google-ads-sdk
```

## Use

```ts
import { Google } from "@promobase/google-ads-sdk";

const client = Google.createClient({
  getAccessToken: async () => db.getGoogleToken(userId),
  developerToken: process.env.GOOGLE_ADS_DEV_TOKEN!,
  loginCustomerId: "1234567890",
});
const customer = Google.Ads.customer(client, "9999999999");

// Campaign lifecycle — rich refs chain automatically
const budget = await customer.campaignBudgets.create({
  name: "Q1",
  amountMicros: "5000000",
});

const campaign = await customer.campaigns.create({
  name: "Search Q1",
  status: "PAUSED",
  advertisingChannelType: "SEARCH",
  campaignBudget: budget,               // rich ref, auto-resolved
});

const adGroup = await customer.adGroups.create({
  name: "Shoes",
  status: "ENABLED",
  type: "SEARCH_STANDARD",
  campaign,                              // same pattern
});

// Typed GAQL — full autocomplete, narrowed row shape
const { rows } = await customer.gaql
  .from("campaign")
  .select("campaign.id", "campaign.name", "metrics.clicks")
  .where("campaign.status = 'ENABLED'")
  .limit(100)
  .execute();

// rows: Array<{ campaign: { id: string; name: string }; metrics: { clicks: string } }>
```

## Features

- **184 resource types, 111 services** — generated from pinned v23 protos
- **Typed GAQL builder** — `.from().select(...).where().limit().execute()` with deep row narrowing
- **Customer-bound factory** — `customer.campaigns.create(...)`, `customer.adGroups.create(...)`, rich refs
- **Proper error surface** — `GoogleAdsError` parses nested `GoogleAdsFailure` details + request ID
- **Runtime agnostic** — native `fetch`, pluggable OAuth via `getAccessToken` callback
- **Pagination** — async iterables via `customer.gaql.from(...).stream()` and raw `Google.Ads.paginate()`

## Umbrella package

For a single install covering Meta + TikTok + Google Ads, use [`@promobase/ad-platforms`](https://www.npmjs.com/package/@promobase/ad-platforms).

## License

MIT © [Promobase](https://openpromo.app)
