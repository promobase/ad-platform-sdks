# Meta Business SDK TypeScript

Type-safe TypeScript SDK for the Meta Marketing API, generated from official API specs.

## Quick Reference

- `bun run codegen` — regenerate SDK from API specs
- `bun run typecheck` — run `tsc --noEmit` to validate types
- `bun test` — run all tests
- `bun run build` — build for publishing

## Project Structure

- `api_specs/` — git submodule with API spec JSONs (don't edit directly)
- `src/codegen/` — the code generator (dev-only, not published)
- `src/runtime/` — fetch-based API client, cursor, errors (published)
- `src/generated/` — output of codegen (published, don't edit manually)
- `tests/` — tests for codegen and runtime

## Codegen Pipeline

1. `parser.ts` — reads spec JSONs, applies SDKCodegen.json patches
2. `type-resolver.ts` — maps spec types to TypeScript types
3. `enum-extractor.ts` — scrapes enum values from Node SDK
4. `dep-graph.ts` — detects circular imports
5. `emitter.ts` — generates .ts files as strings
6. `index.ts` — orchestrates the pipeline

## Conventions

- Use Bun for everything (runtime, test, build, install)
- Generated files go in `src/generated/` — never edit by hand
- All runtime code must work with native `fetch` (no axios, node-fetch)
- Enums are string union types, not objects or TS enums
- Circular imports resolved via `import type` for type references
- Use `bun test` (not jest/vitest), `bun install` (not npm/yarn/pnpm)
- Bun automatically loads .env, don't use dotenv
