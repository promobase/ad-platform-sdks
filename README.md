# ad-platform-sdks

Monorepo for type-safe TypeScript SDKs for ad platforms, built with [Bun](https://bun.sh).

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [`@promobase/meta-business-sdk-ts`](./packages/meta-business-sdk/) | Meta Marketing API SDK | [`@promobase/meta-business-sdk-ts`](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts) |
| `@promobase/sdk-runtime` | Shared runtime (private) | — |

## Development

```bash
# Install all workspace dependencies
bun install

# Run tests for a specific package
cd packages/meta-business-sdk && bun test tests/
cd packages/sdk-runtime && bun test tests/

# Regenerate Meta SDK from API specs
cd packages/meta-business-sdk && bun run codegen

# Typecheck a package
cd packages/meta-business-sdk && bun run typecheck
```

## Architecture

Each ad platform SDK follows the same pattern:
- **Codegen** reads platform-specific API specs and generates fully typed TypeScript
- **Runtime** (`@promobase/sdk-runtime`) provides the shared fetch client, async-iterable cursor, and base error types
- Each SDK provides its own **error class**, **pagination strategy**, and **client factory**

## License

MIT
