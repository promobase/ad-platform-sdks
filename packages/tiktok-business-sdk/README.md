<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @openpromo/tiktok

**Type-safe TypeScript SDK for the TikTok Business API.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@openpromo/tiktok.svg?label=%40openpromo%2Ftiktok)](https://www.npmjs.com/package/@openpromo/tiktok)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

Fully typed TikTok Business API client generated from the official docs. The current snapshot includes
539 Marketing API endpoints across 72 categories, plus hand-authored OAuth and organic publishing
clients. It supports photo/video/carousel publishing, comments, insights, webhooks, and AI SDK tool
integration with runtime-agnostic `fetch` (Bun, Node, Deno, edge).

## Install

```bash
bun add @openpromo/tiktok
# or
npm install @openpromo/tiktok
```

## Use

```ts
import { TikTok } from "@openpromo/tiktok";
import { TikTokBusinessOAuthScopes, TikTokDeveloperOAuthScopes } from "@openpromo/tiktok";

const controller = new AbortController();

// Business and Developer/Login Kit scopes are intentionally separate catalogs.
const businessScopes = [TikTokBusinessOAuthScopes.VideoPublish];
const developerScopes = [TikTokDeveloperOAuthScopes.VideoPublish];
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "biz_123",
});

// The client also exposes a typed low-level REST escape hatch. Curated clients
// remain preferable when available; use the generated factories for the full
// docs-generated Business API surface.
import type { BusinessGetResponse } from "@openpromo/tiktok/generated/types/accounts";
const account = await tiktok.api.get<BusinessGetResponse>("/business/get/", {
  business_id: "biz_123",
});

// Publish a video
await tiktok.videos.publish({
  videoUrl: "https://cdn.example.com/clip.mp4",
  caption: "New drop 🔥",
});

// AI SDK tools
import { createTikTokTools } from "@openpromo/tiktok/ai";
const tools = createTikTokTools({ accessToken: "...", businessId: "biz_123" });
```

All Business API clients share the same typed transport. Configure a test endpoint with `baseUrl`,
inject `fetch` for Workers or tests, and cancel in-flight requests with `signal`. Multipart media
uploads preserve `FormData` content negotiation; webhook management uses app credentials rather than
an account bearer token.

```ts
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "biz_123",
  baseUrl: "https://business-api.tiktok.com/open_api/v1.3",
  signal: controller.signal,
});

await tiktok.comments.uploadImage(imageBlob);
```

## Generated low-level API

The full docs-generated surface is available from `@openpromo/tiktok/generated`. Category types are
published under `@openpromo/tiktok/generated/types/*`.

```ts
import { createAccounts } from "@openpromo/tiktok/generated";
import type { BusinessVideoListParams } from "@openpromo/tiktok/generated/types/accounts";

const accounts = createAccounts({ accessToken: process.env.TIKTOK_TOKEN! });
const params: BusinessVideoListParams = {
  business_id: "biz_123",
  fields: ["likes", "comments", "shares", "reach", "video_views"],
};
const { videos } = await accounts.listVideo(params);
```

## Features

- **Typed Business API surface** — generated from the official docs portal
- **Current automation and verification APIs** — includes Automated Rules and account Verification
- **OAuth** — token exchange, refresh
- **Content publishing** — video, photo, carousel, status polling
- **Webhooks** — runtime-validated payloads with typed event extraction
- **AI SDK tools** — drop into any agent
- **Runtime agnostic** — native `fetch`, no axios

## Umbrella package

For a single install covering Meta + TikTok + Google Ads, use [`@openpromo/ad-platforms`](https://www.npmjs.com/package/@openpromo/ad-platforms).

## License

MIT © [OpenPromo](https://openpromo.app)

## Generated contracts

The SDK also publishes wire-oriented generated contracts from the same source
IR as its Effect client:

```ts
import { parse } from "valibot";
import { AccountVerificationFiletypeParamsSchema } from "@openpromo/tiktok/valibot";
import type { AccountVerificationFiletypeParams } from "@openpromo/tiktok/types";

const params: AccountVerificationFiletypeParams = parse(
  AccountVerificationFiletypeParamsSchema,
  input,
);
```
