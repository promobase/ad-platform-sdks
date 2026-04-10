# ad-platform-sdks

Bun workspaces monorepo for type-safe ad platform SDKs.

## Packages

| Package | Path | Published |
|---------|------|-----------|
| `@promobase/sdk-runtime` | `packages/sdk-runtime/` | No (private) |
| `@promobase/meta-business-sdk-ts` | `packages/meta-business-sdk/` | Yes |

## Commands

From root:
- `bun install` — install all workspace deps

Per package (run from package dir):
- `bun test tests/` — run tests
- `bun run typecheck` — typecheck

Meta SDK specific:
- `cd packages/meta-business-sdk && bun run codegen` — regenerate from API specs
- `cd packages/meta-business-sdk && bun publish --access public` — publish

## Conventions

- Bun for everything (runtime, test, build, install)
- Each SDK depends on `@promobase/sdk-runtime` via `workspace:*`
- Only client SDK packages are published; sdk-runtime is private
- Each SDK has its own codegen, errors, pagination strategy
- Tests must be run from the package directory (not root)
