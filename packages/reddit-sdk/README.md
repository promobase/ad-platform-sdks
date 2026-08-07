# @mosaic/reddit

Type-safe TypeScript SDK for the **Reddit Ads API v3** — accounts, campaigns, ad groups, ads, targeting, audiences, pixels, reporting, and conversions. Generated from the Reddit Ads API OpenAPI spec (itself derived from Reddit's official Postman collection), with Reddit OAuth built in.

## Install

```bash
bun add @mosaic/reddit
```

## Quick start

```ts
import { Reddit } from "@mosaic/reddit";

// OAuth — create an app at https://www.reddit.com/prefs/apps
const oauth = Reddit.OAuth({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "https://example.com/callback",
});
const authUrl = oauth.getAuthorizationUrl({
  state: "random-state",
  scopes: [Reddit.Scopes.AdsRead, Reddit.Scopes.AdsEdit],
});
// → redirect user, capture ?code=, then:
const { access_token, refresh_token } = await oauth.exchangeCode(code);
// Refresh tokens are long-lived; renew access tokens with:
const fresh = await oauth.refreshToken(refresh_token);

// Client — one shared HTTP client for the whole Ads API
const reddit = Reddit.createClient({ accessToken: access_token });

// Accounts
const accounts = await reddit.accounts.listAccounts({});

// Campaigns, ad groups, ads
const campaigns = await reddit.campaigns.listCampaigns({ accountId: accounts[0].id });
const created = await reddit.campaigns.createCampaign({
  accountId: accounts[0].id,
  name: "Spring Sale",
  objective: "LEADS",
  configured_status: "ACTIVE",
  funding_instrument_id: "fi_1",
});

// Targeting
const targetingOptions = await reddit.targeting.listTargetingOptions({});

// Reports
const rows = await reddit.reports.getReport({ accountId, reportId: "r_1" });
```

## Error handling

All failures throw `RedditApiError` (extends the shared runtime `ApiError`) with the provider's error code:

```ts
try {
  await reddit.campaigns.getCampaign({ accountId, campaignId: "missing" });
} catch (error) {
  if (error instanceof Reddit.ApiError) {
    console.log(error.status, error.errorCode); // 403, "PERMISSION_DENIED"
  }
}
```

The client handles **retries with exponential backoff** (429/5xx) and optional rate limiting automatically.

## Generated surface

The SDK is **OpenAPI-driven codegen** — all 40 endpoints across 13 resource areas are generated from a pinned spec snapshot:

```bash
bun run codegen          # regenerate from the pinned spec
bun run codegen:refresh  # re-pin the upstream spec, then regenerate
```

Generated output lives in `src/generated/` (types + endpoint clients + Effect artifacts + manifest). The pinned spec lives in `vendor/` with a checksum (`scripts/refresh-spec.ts --check` verifies it hasn't drifted).

## Namespace

| Member | Description |
| ------ | ----------- |
| `Reddit.createClient(opts)` | Full Ads API v3 client (accounts, campaigns, adGroups, ads, targeting, audiences, pixels, reports, conversions, …) |
| `Reddit.OAuth(config)` | Authorize URL, code exchange, refresh |
| `Reddit.Scopes` | `AdsRead`, `AdsEdit`, `History` scopes |
| `Reddit.ApiClient` | Core HTTP client (Bearer auth, retry, rate limit, envelope unwrap) |
| `Reddit.ApiError` | Typed error class |
