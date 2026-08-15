# @openpromo/pinterest

Type-safe TypeScript SDK for the **Pinterest REST API v5** — pins, boards, ads (campaigns, ad groups, ads, targeting), catalogs, conversions, and analytics. Generated from Pinterest's official OpenAPI spec (`pinterest/api-description`), with Pinterest OAuth built in.

## Install

```bash
bun add @openpromo/pinterest
```

## Quick start

```ts
import { Pinterest } from "@openpromo/pinterest";

// OAuth — create an app at https://developers.pinterest.com/apps/
const oauth = Pinterest.OAuth({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "https://example.com/callback",
});
const authUrl = oauth.getAuthorizationUrl({
  state: "random-state",
  scopes: [
    Pinterest.Scopes.BoardsRead,
    Pinterest.Scopes.PinsRead,
    Pinterest.Scopes.PinsWrite,
    Pinterest.Scopes.AdsRead,
    Pinterest.Scopes.AdsWrite,
    Pinterest.Scopes.UserAccountsRead,
  ],
});
// → redirect user, capture ?code=, then:
const { access_token, refresh_token } = await oauth.exchangeCode(code);

// Client — one shared HTTP client for the whole API
const pinterest = Pinterest.createClient({ accessToken: access_token });

// Organic: boards and pins
const boards = await pinterest.boards.listBoards({});
const pin = await pinterest.pins.createPin({
  boardId: boards.items[0].id,
  title: "A great idea",
  mediaSource: { source_type: "image_url", url: "https://cdn.example.com/idea.jpg" },
});

// Ads: accounts, campaigns, ad groups, ads
const adAccounts = await pinterest.adAccounts.listAdAccounts({});
const campaigns = await pinterest.campaigns.listCampaigns({ adAccountId: adAccounts.items[0].id });
```

Pinterest list endpoints paginate with a `bookmark` cursor — it's returned on every list response, and you pass it back as `bookmark`:

```ts
let bookmark: string | undefined;
do {
  const page = await pinterest.pins.listPins({ boardId, bookmark });
  for (const pin of page.items) console.log(pin.id);
  bookmark = page.bookmark;
} while (bookmark);
```

## Error handling

All failures throw `PinterestApiError` (extends the shared runtime `ApiError`) with Pinterest's numeric error code:

```ts
try {
  await pinterest.pins.getPins({ pinId: "missing" });
} catch (error) {
  if (error instanceof Pinterest.ApiError) {
    console.log(error.status, error.errorCode); // 404, 4005
  }
}
```

The client handles **retries with exponential backoff** (429/5xx) and optional rate limiting automatically.

## Generated surface

The SDK is **OpenAPI-driven codegen** — all 266 endpoints across 51 resource areas are generated from Pinterest's official spec:

```bash
bun run codegen          # regenerate from the pinned spec
bun run codegen:refresh  # re-pin the upstream spec (pinterest/api-description), then regenerate
```

Generated output lives in `src/generated/` (types + endpoint clients + Effect artifacts + manifest). The pinned spec lives in `vendor/` with a checksum (`scripts/refresh-spec.ts --check` verifies it hasn't drifted). Every generated method documents its required OAuth scope in its JSDoc.

## Namespace

| Member | Description |
| ------ | ----------- |
| `Pinterest.createClient(opts)` | Full API v5 client (adAccounts, campaigns, adGroups, ads, boards, pins, catalogs, conversions, targeting, …) |
| `Pinterest.OAuth(config)` | Authorize URL, code exchange, refresh |
| `Pinterest.Scopes` | All 16 documented OAuth scopes |
| `Pinterest.ApiClient` | Core HTTP client (Bearer auth, retry, rate limit) |
| `Pinterest.ApiError` | Typed error class |

## Generated contracts

Generated TypeScript and Valibot contracts are available from `@openpromo/pinterest/types` and
`@openpromo/pinterest/valibot`; the existing Effect surface remains at `@openpromo/pinterest/effect`.
