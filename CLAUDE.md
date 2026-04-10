# Meta Business SDK TypeScript

Type-safe TypeScript SDK for the Meta Marketing API, generated from official API specs.

## Commands

- `bun run codegen` — regenerate SDK from API specs
- `bun run typecheck` — validate types with `tsc --noEmit`
- `bun test tests/` — run all tests
- `bun run build` — build for publishing

## Project Structure

- `api_specs/` — git submodule (facebook-business-sdk-codegen), don't edit
- `src/codegen/` — code generator pipeline (dev-only, not published)
- `src/runtime/` — fetch-based API client, cursor, errors (published)
- `src/generated/` — codegen output, don't edit manually
- `examples/` — usage examples, good for testing IDE type inference

## Conventions

- Bun for everything: runtime, test, build, install
- No external HTTP deps — native `fetch` only
- Enums are string union types (not TS enums or frozen objects)
- Circular imports resolved via `import type`
- Generated params interfaces have `[key: string]: unknown` index signatures
- Published under `@promobase/meta-business-sdk-ts` on npm

## API Pattern

```ts
const api = createClient({ accessToken: "..." });

// Node accessor → edge → method
api.adAccount("act_123").campaigns.list({ fields: ["id", "name"] })
api.adAccount("act_123").campaigns.create({ name: "...", objective: "..." })
api.campaign("123").get({ fields: ["id", "name", "status"] })
api.campaign("123").update({ name: "New Name" })
api.campaign("123").delete()
```

## Codegen Pipeline

1. `parser.ts` — reads ~995 spec JSONs, applies SDKCodegen.json patches
2. `type-resolver.ts` — maps spec types → TS types (`list<map<string, string>>` → `Record<string, string>[]`)
3. `enum-extractor.ts` — scrapes enum values from Node SDK (optional)
4. `dep-graph.ts` — Tarjan's SCC for circular import detection
5. `emitter.ts` — generates .ts files as strings with typed fields, params, and node factories
6. `index.ts` — orchestrates pipeline, generates client-factory.ts and barrel export
