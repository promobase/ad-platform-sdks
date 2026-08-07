# @mosaic/snapchat

Type-safe TypeScript SDK for the **Snapchat Marketing API** — campaigns, ad squads, ads, media, creatives, audiences, targeting, and stats. Generated directly from the official Snap documentation (`developers.snap.com/marketing-api`), with OAuth built in.

## Install

```bash
bun add @mosaic/snapchat
```

## Quick start

```ts
import { Snapchat } from "@mosaic/snapchat";

// OAuth — tokens are short-lived (60 min); use refreshToken to renew
const oauth = Snapchat.OAuth({
  clientId: "...",
  clientSecret: "...",
  redirectUri: "https://example.com/callback",
});
const authUrl = oauth.getAuthorizationUrl({
  scopes: [Snapchat.Scopes.Marketing],
});
// → redirect user, capture ?code=, then:
const { access_token } = await oauth.exchangeCode(code);

// Client — one shared HTTP client for the whole Ads API
const snap = Snapchat.createClient({ accessToken: access_token });

// Organizations and ad accounts
const orgs = await snap.organizations.listOrganizations({ with_ad_accounts: true });

// Campaigns — async-iterable pagination via paging.next_link
for await (const campaign of snap.campaigns.listCampaigns({ adAccountId })) {
  console.log(campaign.name);
}

const created = await snap.campaigns.createCampaign({
  adAccountId,
  name: "Spring Sale",
  status: "ACTIVE",
  start_time: "2026-03-01T00:00:00Z",
  buy_model: "AUCTION",
  objective: "WEB_CONVERSION",
});

// Media + creatives + ads
const media = await snap.media.createMedia({ adAccountId, name: "Hero", type: "VIDEO" });
await snap.media.uploadMedia({ mediaId: media.id, file: videoFile });
const creative = await snap.creatives.createCreative({ adAccountId, name: "Creative", top_snap_media_id: media.id });
await snap.ads.createAd({ adSquadId, name: "Ad", creative_id: creative.id });

// Stats
const stats = await snap.measurement.getCampaignStats({ campaignId: created.id, granularity: "DAY" });
```

## Error handling

All failures throw `SnapchatApiError` (extends the shared runtime `ApiError`):

```ts
try {
  await snap.campaigns.getCampaign({ campaignId: "missing" });
} catch (error) {
  if (error instanceof Snapchat.ApiError) {
    console.log(error.status, error.requestId); // 404, request id for support
  }
}
```

The client also handles **retries with exponential backoff** (429/5xx), optional rate limiting, and `paging.next_link` pagination automatically.

## Generated surface

The SDK is **documentation-driven codegen** — all 214 endpoints across 36 resource pages are generated from the official docs:

```bash
bun run codegen         # regenerate from cached docs
bun run codegen:refresh # re-scrape developers.snap.com, then regenerate
```

Generated output lives in `src/generated/` (types + endpoint clients + Effect artifacts + manifest).

## Namespace

| Member | Description |
| ------ | ----------- |
| `Snapchat.createClient(opts)` | Full Ads API client (campaigns, adSquads, ads, media, creatives, organizations, targeting, measurement, …) |
| `Snapchat.OAuth(config)` | Authorize URL, code exchange, refresh |
| `Snapchat.Scopes` | `Marketing`, `Conversions`, `Profile` scopes |
| `Snapchat.ApiClient` | Core HTTP client (Bearer auth, retry, rate limit, multipart uploads) |
| `Snapchat.ApiError` | Typed error class |
| `Snapchat.Cursor` | Async-iterable pagination cursor |
