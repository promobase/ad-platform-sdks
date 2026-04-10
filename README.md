# ad-platform-sdks

Type-safe TypeScript SDKs for major ad platforms. Auto-generated from official API specs with full type safety — wrong field names, missing params, and bad enum values fail at compile time.

## Packages

| Package | Platform | Status | npm |
|---------|----------|--------|-----|
| [`@promobase/meta-business-sdk-ts`](./packages/meta-business-sdk/) | Meta (Facebook) Marketing API | Available | [`@promobase/meta-business-sdk-ts`](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts) |
| `@promobase/tiktok-business-sdk-ts` | TikTok Business API | Planned | — |
| `@promobase/google-business-sdk-ts` | Google Ads API | Planned | — |

## Why This Exists

The official SDKs for Meta, TikTok, and Google ad platforms are either untyped JavaScript, incomplete, or poorly maintained. If you've used `facebook-nodejs-business-sdk`, you know the pain — `params: Object` everywhere, no autocomplete, no compile-time safety.

This project generates fully typed TypeScript clients directly from each platform's official API specs:

- **994 typed API objects** for Meta (every Graph API node, edge, and param)
- **Field-level type narrowing** — request `["id", "name"]`, get `Pick<CampaignFields, "id" | "name">`
- **Async-iterable cursors** — `for await (const campaign of ...)` with typed pagination
- **Zero runtime dependencies** — native `fetch`, no axios

## Quick Start (Meta)

```bash
bun add @promobase/meta-business-sdk-ts
```

```typescript
import { createClient } from "@promobase/meta-business-sdk-ts";

const api = createClient({ accessToken: process.env.META_ACCESS_TOKEN! });

// Fully typed — IDE autocomplete shows all valid fields
for await (const campaign of api.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status", "daily_budget"],
})) {
  console.log(campaign.name);  // string
  console.log(campaign.status); // string
}

// Create with typed params — TS catches missing required fields
await api.adAccount("act_123").campaigns.create({
  name: "Summer Sale 2025",
  objective: "OUTCOME_SALES",
  special_ad_categories: [],
});
```

## Who Is This For

- Teams running **Facebook/Meta ads** who want type safety and autocomplete
- Teams running **multi-platform ad campaigns** (Meta + TikTok + Google) who want a consistent SDK experience
- Anyone tired of the official `facebook-nodejs-business-sdk` and its `Object` params
- TypeScript-first teams building **ad tech**, **marketing automation**, or **campaign management** tools

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install

# Run tests
cd packages/meta-business-sdk && bun test tests/

# Regenerate from API specs
cd packages/meta-business-sdk && bun run codegen

# Typecheck
cd packages/meta-business-sdk && bun run typecheck
```

## Architecture

Each SDK follows the same pattern:

1. **Codegen** reads platform-specific API specs → generates fully typed TypeScript
2. **Shared runtime** (`@promobase/sdk-runtime`) provides the generic fetch client, async-iterable cursor, and base error types
3. Each SDK provides its own **error class**, **pagination strategy**, and **typed client factory**

The shared runtime has a pluggable `PaginationStrategy` interface — Meta uses cursor-based pagination (`paging.cursors.after`), TikTok will use page-based (`page_info.page`), Google will use token-based (`nextPageToken`).

## Related

- [`facebook-nodejs-business-sdk`](https://github.com/facebook/facebook-nodejs-business-sdk) — the official (untyped) Node.js SDK this replaces
- [`facebook-business-sdk-codegen`](https://github.com/facebook/facebook-business-sdk-codegen) — the official API spec source we generate from

## License

MIT
