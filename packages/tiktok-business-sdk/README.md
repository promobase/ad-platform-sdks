<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @promobase/tiktok-business-sdk

**Type-safe TypeScript SDK for the TikTok Business API.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/tiktok-business-sdk.svg?label=%40promobase%2Ftiktok-business-sdk)](https://www.npmjs.com/package/@promobase/tiktok-business-sdk)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

Fully typed TikTok Business API client generated from the official docs. OAuth, photo/video/carousel publishing, comments, insights, webhooks, and AI SDK tool integration — with runtime-agnostic `fetch` (Bun, Node, Deno, edge).

## Install

```bash
bun add @promobase/tiktok-business-sdk
# or
npm install @promobase/tiktok-business-sdk
```

## Use

```ts
import { TikTok } from "@promobase/tiktok-business-sdk";

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
import { createTikTokTools } from "@promobase/tiktok-business-sdk";
const tools = createTikTokTools({ accessToken: "...", businessId: "biz_123" });
```

## Features

- **Typed Business API surface** — generated from the official docs portal
- **OAuth** — token exchange, refresh
- **Content publishing** — video, photo, carousel, status polling
- **Webhooks** — Zod-validated payloads
- **AI SDK tools** — drop into any agent
- **Runtime agnostic** — native `fetch`, no axios

## Umbrella package

For a single install covering Meta + TikTok + Google Ads, use [`@promobase/ad-platforms`](https://www.npmjs.com/package/@promobase/ad-platforms).

## License

MIT © [Promobase](https://openpromo.app)
