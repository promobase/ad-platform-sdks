# @promobase/google-ads-sdk

Type-safe Google Ads API v23 SDK. Generated from protobuf definitions via REST transcoding.

## Commands (run from this dir)

- `bun run codegen` — regenerate `src/generated/v23/` from `vendor/googleapis/`
- `bun test tests/` — run tests
- `bun run typecheck` — typecheck

## Protos

Protos live in `vendor/googleapis/` (git submodule pinned to a commit containing `google/ads/googleads/v23/`). To update:

```bash
cd vendor/googleapis
git fetch origin master
git checkout <new-sha>
cd ../.. && bun run codegen
```

## No live API tests

Google Ads requires an approved developer token. Tests mock `fetch`. Consumers run their own integration tests against test accounts.
