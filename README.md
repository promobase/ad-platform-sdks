<div align="center">

<a href="https://openpromo.app">
  <img src="https://raw.githubusercontent.com/promobase/identity/main/assets/logo.svg" width="96" alt="OpenPromo logo" />
</a>

# Mosaic — Ad Platform SDKs

**Mosaic: one type-safe TypeScript SDK family for every ad platform. AI-agent ready.**

Powering [**OpenPromo**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@mosaic/ad-platforms.svg?label=%40openpromo%2Fad-platforms)](https://www.npmjs.com/package/@mosaic/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

Mosaic is one SDK family for **Meta** (Facebook, Instagram, Threads), **TikTok**, **Snapchat**, **Reddit**, **Pinterest**, **Amazon Ads**, **Bluesky**, **LinkedIn**, **X**, **YouTube**, **Google Ads**, and **Google Business Profile**. Fully typed, generated from official specs and lexicons, with high-level clients for publishing, messaging, metrics, and ad management, plus AI tools and a discoverable CLI for agents.

## Install

```bash
bun add @mosaic/ad-platforms
```

## Use

```ts
import { Meta, TikTok } from "@mosaic/ad-platforms";
import { createAllTools } from "@mosaic/ad-platforms/ai";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });
const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });

// Publish a reel from a public URL — handles container creation and polling
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

- **985 typed Meta Graph API objects** with 503 real enum values (not `string`)
- **Google Ads API v25** with typed GAQL, plus a retained raw v23 compatibility export
- **531 generated TikTok Marketing API endpoints** across 71 current documentation categories
- **Field-level type narrowing** — `Pick<CampaignFields, "id" | "name">` on every query
- **Publishing clients** for Instagram, Facebook, Threads, and TikTok (photo, video/reel, carousel, story)
- **Full inbox** — DMs, comments, private replies with Zod-validated webhook payloads
- **OAuth** — token exchange, long-lived tokens, refresh for all platforms
- **Organic metrics** — normalized single and bounded-concurrency bulk reads with raw provider payloads
- **Google Business Profile** — locations, local posts, post insights, and location performance
- **Rate limiting** — auto-parses Meta's `x-app-usage` headers, runtime-agnostic throttling
- **Retry with exponential backoff** — automatic recovery from 5xx and network errors
- **Batch API** — typed multi-request batches for Meta
- **58 AI SDK tools** — type-safe, filterable, with middleware and two-stage routing
- **Agent-native operation catalog** — shared schemas and execution for direct clients, AI SDK,
  Code Mode, MCP, and CLI hosts
- **Effect-native contracts and runtime** — generated Effect Schema, typed error channels, Layers,
  cancellation, and a Promise projection from the same endpoint descriptor
- **Runtime agnostic** — native `fetch`, no axios, works in Bun, Node, Deno, edge

See [the Effect migration guide](./docs/effect-migration.md),
[the architecture](./docs/effect-native-architecture.md), and
[the OpenPromo ownership boundary](./docs/openpromo-migration.md).

## Packages

| Package                                                                         | Description                                                     |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`@mosaic/ad-platforms`](./packages/ad-platforms/)                           | Umbrella package — all platforms, single install                |
| [`@mosaic/meta`](./packages/meta-business-sdk/)                              | Meta only (Facebook, Instagram, Threads)                        |
| [`@mosaic/tiktok`](./packages/tiktok-business-sdk/)                          | TikTok only                                                     |
| [`@mosaic/google-ads`](./packages/google-ads-sdk/)                           | Google Ads v25, ergonomic clients, and typed GAQL               |
| [`@mosaic/google-business-profile`](./packages/google-business-profile-sdk/) | Google Business Profile locations, local posts, and performance |
| [`@mosaic/linkedin`](./packages/linkedin-sdk/)                               | LinkedIn organic publishing, media, organizations, and OAuth    |
| [`@mosaic/x`](./packages/x-sdk/)                                             | X posts, media upload, and user lookup                          |
| [`@mosaic/youtube`](./packages/youtube-sdk/)                                 | YouTube Data API v3 and resumable uploads                       |
| [`@mosaic/ad-platforms-cli`](./packages/cli/)                                | Agent-discoverable CLI and MCP server                           |
| [`@mosaic/sdk-runtime`](./packages/sdk-runtime/)                             | Shared HTTP, pagination, retry, and rate-limit runtime          |

OpenPromo consumers should start with the [first-party migration guide](./docs/openpromo-migration.md).

## Why

The official ad platform SDKs are either untyped JavaScript, incomplete, or abandoned. If you've used `facebook-nodejs-business-sdk`, you know — `params: Object` everywhere, no autocomplete, no compile-time safety.

We built this because [openpromo.app](https://openpromo.app) needs production-grade typed access to every major ad platform, and the AI agents powering it need structured tools they can reason about. Everything here is battle-tested in production.

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install

# Workspace gates
bun run lint
bun run format:check
bun run typecheck # Native TypeScript 7 compiler (formerly tsgo)
bun run build
bun run test

# Example provider codegen
(cd packages/meta-business-sdk && bun run codegen)
(cd packages/google-ads-sdk && bun run codegen)
(cd packages/tiktok-business-sdk && bun run codegen:refresh)
```

## License

MIT © [OpenPromo](https://openpromo.app)
