<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @mosaic/tiktok

**Type-safe TypeScript SDK for the TikTok Business API.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@mosaic/tiktok.svg?label=%40openpromo%2Ftiktok)](https://www.npmjs.com/package/@mosaic/tiktok)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

Fully typed TikTok Business API client generated from the official docs. The current snapshot includes
531 Marketing API endpoints across 71 categories, plus hand-authored OAuth and organic publishing
clients. It supports photo/video/carousel publishing, comments, insights, webhooks, and AI SDK tool
integration with runtime-agnostic `fetch` (Bun, Node, Deno, edge).

## Install

```bash
bun add @mosaic/tiktok
# or
npm install @mosaic/tiktok
```

## Use

```ts
import { TikTok } from "@mosaic/tiktok";

const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "biz_123",
});

// Publish a video
await tiktok.content.publishVideo({
  videoUrl: "https://cdn.example.com/clip.mp4",
  caption: "New drop 🔥",
});

// AI SDK tools
import { createTikTokTools } from "@mosaic/tiktok/ai";
const tools = createTikTokTools({ accessToken: "...", businessId: "biz_123" });
```

## Generated low-level API

The full docs-generated surface is available from `@mosaic/tiktok/generated`. Category types are
published under `@mosaic/tiktok/generated/types/*`.

```ts
import { createAccounts } from "@mosaic/tiktok/generated";
import type { BusinessVideoListParams } from "@mosaic/tiktok/generated/types/accounts";

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
- **Webhooks** — Zod-validated payloads
- **AI SDK tools** — drop into any agent
- **Runtime agnostic** — native `fetch`, no axios

## Umbrella package

For a single install covering Meta + TikTok + Google Ads, use [`@mosaic/ad-platforms`](https://www.npmjs.com/package/@mosaic/ad-platforms).

## License

MIT © [OpenPromo](https://openpromo.app)
