# Google Ads SDK Agent Guide

This package is the type-safe Google Ads API v25 SDK. It is generated from protobuf definitions and
uses REST transcoding. Follow the root `AGENTS.md` in addition to these package-specific rules.

## Commands

Run from `packages/google-ads-sdk`:

```bash
bun run codegen
bun run typecheck
bun run build
bun test tests/
```

## Protobuf Source

The pinned `vendor/googleapis/` git submodule is the source for `src/generated/v25/`. The checked-in
`src/generated/v23/` tree remains as a compatibility export. To intentionally
update it, fetch and check out the reviewed upstream commit inside the submodule, then run codegen and
review the generated diff for unrelated churn. Never advance the submodule as a side effect of other
work.

## Testing Boundary

Google Ads requires an approved developer token. Repository tests mock `fetch`; do not make live API
calls or introduce real credentials. Consumer-owned integration testing against test accounts is
outside this repository's default verification boundary.
