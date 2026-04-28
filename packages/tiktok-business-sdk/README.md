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

Fully typed TikTok Business API client generated from the official docs. OAuth, photo/video/carousel publishing, comments, insights, webhooks, and AI SDK tool integration — with runtime-agnostic `fetch` (Bun, Node, Deno, edge).

## Install

```bash
bun add @openpromo/tiktok
# or
npm install @openpromo/tiktok
```

## Use

```ts
import { TikTok } from "@openpromo/tiktok";

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
import { createTikTokTools } from "@openpromo/tiktok/ai";
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

For a single install covering Meta + TikTok + Google Ads, use [`@openpromo/ad-platforms`](https://www.npmjs.com/package/@openpromo/ad-platforms).

## License

MIT © [OpenPromo](https://openpromo.app)
