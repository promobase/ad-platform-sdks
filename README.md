<div align="center">

<a href="https://mosaic.openpromo.app">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./apps/docs/public/mosaic-mark-inverse.svg" />
    <img src="./apps/docs/public/mosaic-mark.svg" width="88" alt="Mosaic" />
  </picture>
</a>

# Mosaic

**Open-source, type-safe TypeScript SDKs for social and advertising platforms.**

One install for provider-native clients, generated API contracts, publishing workflows, metrics,
and agent-ready operations.

[![npm](https://img.shields.io/npm/v/@openpromo/ad-platforms.svg?label=%40openpromo%2Fad-platforms)](https://www.npmjs.com/package/@openpromo/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[Documentation](https://mosaic.openpromo.app) · [Contributing](./CONTRIBUTING.md) · [GitHub](https://github.com/promobase/ad-platform-sdks)

</div>

## What is Mosaic?

Mosaic is a family of runtime-agnostic TypeScript SDKs for **Meta** (Facebook, Instagram,
Threads), **TikTok**, **Snapchat**, **Reddit**, **Pinterest**, **Amazon Ads**, **Bluesky**,
**LinkedIn**, **X**, **YouTube**, **Google Ads**, and **Google Business Profile**.

It keeps the provider-specific surface intact while giving applications a shared foundation for
authentication, retries, pagination, publishing, metrics, and agent tooling. Generated clients are
derived from official specifications, lexicons, and API descriptions wherever possible.

## Quick start

```bash
bun add @openpromo/ad-platforms
```

```ts
import { Meta } from "@openpromo/ad-platforms";

const meta = Meta.createClient({
  accessToken: process.env.META_TOKEN!,
});

const instagram = Meta.Instagram.createClient({
  api: meta,
  igAccountId: "ig_123",
});

await instagram.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});
```

## Why Mosaic?

- **Generated coverage** — provider APIs become typed clients from canonical contracts instead of
  hand-maintained endpoint lists.
- **One runtime** — shared HTTP, pagination, retry, rate-limit, and error primitives across every
  package.
- **Provider-native when it matters** — use the full native API surface, or opt into normalized
  operations for portable workflows.
- **Agent-ready** — the same operation contracts project into direct clients, AI SDK tools, MCP,
  Code Mode, and the CLI.
- **Runtime agnostic** — native `fetch`; works in Bun, Node, Deno, and edge runtimes.

## Packages

| Package | Description |
| --- | --- |
| [`@openpromo/ad-platforms`](./packages/ad-platforms/) | Umbrella package — all platforms, one install |
| [`@openpromo/meta`](./packages/meta-business-sdk/) | Meta, Facebook, Instagram, and Threads |
| [`@openpromo/tiktok`](./packages/tiktok-business-sdk/) | TikTok Business and Developer APIs |
| [`@openpromo/google-ads`](./packages/google-ads-sdk/) | Google Ads, typed GAQL, and generated services |
| [`@openpromo/google-business-profile`](./packages/google-business-profile-sdk/) | Locations, local posts, and performance |
| [`@openpromo/linkedin`](./packages/linkedin-sdk/) | LinkedIn publishing, organizations, and OAuth |
| [`@openpromo/x`](./packages/x-sdk/) | X posts, media upload, and user lookup |
| [`@openpromo/youtube`](./packages/youtube-sdk/) | YouTube Data API and resumable uploads |
| [`@openpromo/snapchat`](./packages/snapchat-sdk/) | Snapchat Marketing API |
| [`@openpromo/reddit`](./packages/reddit-sdk/) | Reddit Ads API |
| [`@openpromo/pinterest`](./packages/pinterest-sdk/) | Pinterest REST API |
| [`@openpromo/amazon-ads`](./packages/amazon-ads-sdk/) | Amazon Ads API |
| [`@openpromo/bluesky`](./packages/bluesky-sdk/) | Bluesky and AT Protocol |
| [`@openpromo/ad-platforms-cli`](./packages/cli/) | CLI and MCP surfaces for agents |
| [`@openpromo/sdk-runtime`](./packages/sdk-runtime/) | Shared transport and runtime primitives |

## Project structure

```text
packages/sdk-runtime       shared HTTP, retry, pagination, and errors
packages/*-sdk             provider-specific clients and generated contracts
packages/ad-platforms      cross-platform exports and operation catalog
packages/cli                CLI and MCP presentation surfaces
apps/docs                  Mosaic documentation and API reference
```

Read the [architecture guide](./docs/effect-native-architecture.md) for the contract and runtime
boundaries, or start with the [documentation site](https://mosaic.openpromo.app).

## Contributing

Mosaic is intended to be useful beyond one application. Contributions are welcome in provider
coverage, code generation, runtime reliability, documentation, examples, and developer tooling.

Start with [CONTRIBUTING.md](./CONTRIBUTING.md). Before opening a pull request, run the narrowest
relevant checks plus `git diff --check`; cross-package or generated-code changes should use the
full repository gates described there.

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install --frozen-lockfile

bun run lint
bun run format:check
bun run typecheck
bun run build
bun run test
```

Provider codegen examples:

```bash
(cd packages/meta-business-sdk && bun run codegen)
(cd packages/google-ads-sdk && bun run codegen)
(cd packages/tiktok-business-sdk && bun run codegen:refresh)
```

## Provenance

Mosaic is maintained by [OpenPromo](https://openpromo.app) and was originally built to power its
AI-native social media workspace. The public SDK packages currently publish under the existing
`@openpromo/*` namespace; this project identity refresh does not change package names or imports.

## License

MIT © [OpenPromo](https://openpromo.app)
