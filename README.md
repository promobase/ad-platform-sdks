<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# ad-platform-sdks

**Type-safe TypeScript SDKs for every ad platform. AI-agent ready.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/ad-platforms.svg?label=%40promobase%2Fad-platforms)](https://www.npmjs.com/package/@promobase/ad-platforms)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

One SDK for **Meta** (Facebook, Instagram, Threads), **TikTok**, and soon Google Ads. Fully typed, auto-generated from official specs, with high-level clients for publishing, messaging, and ad management — plus 58+ AI SDK tools ready to drop into any agent.

## Install

```bash
bun add @promobase/ad-platforms
```

## Use

```ts
import { Meta, TikTok, createAllTools } from "@promobase/ad-platforms";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });
const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });

// Publish a reel — handles container creation, transcoding, and polling
await ig.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});

// Give an AI agent access to every platform
const tools = createAllTools({
  meta: { api: meta, igAccountId: "ig_123", pageId: "p_456", pageAccessToken: "..." },
  tiktok: { accessToken: "...", businessId: "biz_789" },
});

await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  maxSteps: 10,
  prompt: "Post this photo to Instagram and TikTok, then reply to recent comments",
});
```

## Features

- **994 typed Meta Graph API objects** with 483 real enum values (not `string`)
- **Field-level type narrowing** — `Pick<CampaignFields, "id" | "name">` on every query
- **Publishing clients** for Instagram, Facebook, Threads, and TikTok (photo, video/reel, carousel, story)
- **Full inbox** — DMs, comments, private replies with Zod-validated webhook payloads
- **OAuth** — token exchange, long-lived tokens, refresh for all platforms
- **Rate limiting** — auto-parses Meta's `x-app-usage` headers, runtime-agnostic throttling
- **Retry with exponential backoff** — automatic recovery from 5xx and network errors
- **Batch API** — typed multi-request batches for Meta
- **58 AI SDK tools** — type-safe, filterable, with middleware and two-stage routing
- **Runtime agnostic** — native `fetch`, no axios, works in Bun, Node, Deno, edge

## Packages

| Package | Description |
|---------|-------------|
| [`@promobase/ad-platforms`](./packages/ad-platforms/) | Umbrella package — all platforms, single install |
| [`@promobase/meta-business-sdk-ts`](./packages/meta-business-sdk/) | Meta only (Facebook, Instagram, Threads) |
| [`@promobase/tiktok-business-sdk`](./packages/tiktok-business-sdk/) | TikTok only |

## Why

The official ad platform SDKs are either untyped JavaScript, incomplete, or abandoned. If you've used `facebook-nodejs-business-sdk`, you know — `params: Object` everywhere, no autocomplete, no compile-time safety.

We built this because [openpromo.app](https://openpromo.app) needs production-grade typed access to every major ad platform, and the AI agents powering it need structured tools they can reason about. Everything here is battle-tested in production.

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install

# Per package
cd packages/meta-business-sdk && bun test tests/
cd packages/meta-business-sdk && bun run codegen   # regenerate from specs
```

## License

MIT © [Promobase](https://openpromo.app)
