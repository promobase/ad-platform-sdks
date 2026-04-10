# meta-business-sdk-ts

Type-safe TypeScript SDK for the Meta Marketing API, auto-generated from the official [facebook-business-sdk-codegen](https://github.com/facebook/facebook-business-sdk-codegen) API specs.

## Features

- Full type safety for all Graph API objects and fields
- String union types for all enums (not runtime objects)
- Lightweight fetch-based runtime with no heavy dependencies
- Cursor-based pagination support
- Generated from ~995 official API spec files

## Installation

```bash
bun install meta-business-sdk-ts
```

## Usage

```ts
import { Campaign, AdAccount } from "meta-business-sdk-ts";
```

## Development

### Prerequisites

- [Bun](https://bun.sh) v1.3+
- TypeScript 5.9+

### Setup

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/user/meta-business-sdk-ts.git
cd meta-business-sdk-ts

# Install dependencies
bun install

# Generate SDK from API specs
bun run codegen

# Type-check
bun run typecheck

# Run tests
bun test

# Build for publishing
bun run build
```

### Project Structure

```
api_specs/          # Git submodule — official API spec JSONs
src/
  codegen/          # Code generator (reads specs, writes generated/)
  runtime/          # Fetch-based API client, cursor, errors
  generated/        # Auto-generated SDK (don't edit manually)
    objects/        # Graph API object types
    enums/          # String union type enums
tests/
  codegen/          # Tests for the code generator
  runtime/          # Tests for the runtime client
  e2e/              # End-to-end integration tests
```

## License

See [LICENSE](LICENSE) for details.
