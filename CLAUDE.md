# Meta Business SDK TypeScript

Type-safe TypeScript SDK for the Meta Marketing API, generated from official API specs.

## Commands

- `bun run codegen` — regenerate SDK from API specs
- `bun run typecheck` — validate types with `tsc --noEmit`
- `bun test tests/` — run all tests
- `bun run build` — build for publishing

## Project Structure

- `api_specs/` — git submodule (facebook-business-sdk-codegen), don't edit
- `src/codegen/` — code generator pipeline (dev-only)
- `src/runtime/` — API client, cursor, errors (ships with package)
- `src/generated/` — codegen output (don't edit manually)

## Conventions

- Bun for everything: runtime, test, build, install
- No external HTTP deps — native `fetch` only
- Enums are string union types
- Circular imports resolved via `import type`
- Generated params interfaces have `[key: string]: unknown` index signatures
