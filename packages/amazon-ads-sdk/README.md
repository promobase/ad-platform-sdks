# @openpromo/amazon-ads

Type-safe TypeScript SDK for the **Amazon Ads API v3** — Sponsored Products, Sponsored Brands, Sponsored Display, and the core Amazon Ads API. Generated from Amazon's official OpenAPI specs, with Login with Amazon (LWA) OAuth built in.

## Install

```bash
bun add @openpromo/amazon-ads
```

## Quick start

```ts
import { AmazonAds } from "@openpromo/amazon-ads";

// LWA OAuth — register an app at https://advertising.amazon.com/ (Login with Amazon)
const oauth = AmazonAds.OAuth({
  clientId: "YOUR_LWA_CLIENT_ID",
  clientSecret: "YOUR_LWA_CLIENT_SECRET",
  redirectUri: "https://example.com/callback",
});
const authUrl = oauth.getAuthorizationUrl({
  state: "random-state",
  scopes: [AmazonAds.Scopes.CampaignManagement],
});
// → redirect user, capture ?code=, then:
const { access_token, refresh_token } = await oauth.exchangeCode(code);

// Client — needs your LWA client id and advertiser profile id
const amazon = AmazonAds.createClient({
  accessToken: access_token,
  clientId: "YOUR_LWA_CLIENT_ID",
  profileId: "123456789", // advertiser profile id (from the Profiles API)
});

// Sponsored Products
const campaigns = await amazon.sponsoredProducts.campaigns.listSponsoredProductsCampaigns({
  campaignIdFilter: { include: ["c1"] },
});
await amazon.sponsoredProducts.campaigns.createSponsoredProductsCampaign({
  campaigns: [{ name: "Spring Sale", state: "ENABLED", targetingType: "MANUAL" }],
});

// Sponsored Brands (note the /sb/v4 paths)
const sbCampaigns = await amazon.sponsoredBrands.campaigns.listSponsoredBrandsCampaigns({});

// Sponsored Display
const sdReports = await amazon.sponsoredDisplay.snapshotApis.getSnapshotApis({});

// EU region
const amazonEu = AmazonAds.createClient({
  accessToken: access_token,
  clientId: "YOUR_LWA_CLIENT_ID",
  profileId: "123456789",
  baseUrl: AmazonAds.BaseUrls.Eu,
});
```

## Error handling

All failures throw `AmazonAdsApiError` (extends the shared runtime `ApiError`) with Amazon's error codes:

```ts
try {
  await amazon.sponsoredProducts.campaigns.listSponsoredProductsCampaigns({});
} catch (error) {
  if (error instanceof AmazonAds.ApiError) {
    console.log(error.status, error.errorCode); // 400, "ValidationException"
  }
}
```

The client handles **retries with exponential backoff** (429/5xx) and sends the three required headers (`Authorization: Bearer`, `Amazon-Advertising-API-ClientId`, `Amazon-Advertising-API-Scope`) on every request.

## Generated surface

The SDK is **OpenAPI-driven codegen** — all 166 endpoints across four official Amazon specs:

| Spec | Endpoints | Accessor |
| ---- | --------- | -------- |
| Sponsored Products | 80 | `amazon.sponsoredProducts` |
| Sponsored Brands | 56 | `amazon.sponsoredBrands` |
| Sponsored Display | 22 | `amazon.sponsoredDisplay` |
| Amazon Ads API (brand stores, forecasts, brand safety) | 8 | `amazon.amazonAdsApi` |

```bash
bun run codegen          # regenerate from the pinned specs
bun run codegen:refresh  # re-pin the upstream specs, then regenerate
```

Generated output lives in `src/generated/{api}/` (types + endpoint clients + Effect artifacts + manifest). Pinned specs live in `vendor/` with checksums (`scripts/refresh-spec.ts --check` verifies no drift). Type names collide across the four specs (e.g. `state`), so types are exposed namespaced: `SponsoredProductsTypes`, `SponsoredBrandsTypes`, `SponsoredDisplayTypes`, `AmazonAdsApiTypes`.

## Namespace

| Member | Description |
| ------ | ----------- |
| `AmazonAds.createClient(opts)` | Full API v3 client with per-spec sections |
| `AmazonAds.OAuth(config)` | LWA authorize URL, code exchange, refresh |
| `AmazonAds.Scopes` | `CampaignManagement`, `Audiences`, `TestCreateAccount` |
| `AmazonAds.BaseUrls` | `Na`, `Eu`, `Fe` region endpoints |
| `AmazonAds.ApiClient` | Core HTTP client (3 required headers, retry, rate limit) |
| `AmazonAds.ApiError` | Typed error class |
