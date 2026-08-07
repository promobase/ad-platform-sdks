# Effect-Native SDK Architecture

## Decision

The SDK implementation is Effect-native. Provider specifications are normalized into a canonical
intermediate representation (IR), generated wire contracts use Effect Schema where the provider
protocol is JSON, and endpoint execution uses shared Effect services. The existing Promise APIs
remain the default compatibility surface and are projections of the same Effect programs.

Effect is an SDK execution model, not the durable application runtime. OpenPromo continues to own
workspace persistence, billing, approval, idempotency records, webhook routing, and durable polling.
The SDK owns provider protocol mechanics, validation, retry classification, rate-limit signals,
pagination, cancellation, and normalized operation metadata.

## Non-Negotiable Invariants

1. There is one endpoint implementation. Effect, Promise, Code Mode, CLI, MCP, and AI-tool surfaces
   project the same endpoint descriptor and schemas; they do not redefine handlers.
2. Expected provider failures use a tagged `PlatformError` error channel. Unknown implementation
   bugs remain defects and are never normalized as retryable provider failures.
3. Reads may use bounded retries. Writes retry only when the endpoint is explicitly safe or carries
   a provider-supported idempotency key.
4. Provider response decoding happens before values enter public domain clients. Response decoders
   tolerate additive provider fields; request encoders reject unsupported inputs.
5. Generated files remain outputs. Provider specifications and generator adapters are the source of
   truth.
6. A process-global runtime never contains mutable workspace credentials. Long-lived stateless
   services may be shared; credentials and tenant metadata are bound per client or operation.
7. Generated modules remain independently importable and tree-shakeable. No runtime mega-barrel may
   eagerly construct every provider schema.
8. Core exports use stable Effect 3 APIs. Experimental Effect HTTP or RPC modules are not part of
   the public contract.

The complete IR is validated in memory during generation and is not shipped in published packages.
Generated directories retain a compact `manifest.json` with source provenance, version, and model,
endpoint, and capability counts.

## Implemented Inventory

| Area                  | Canonical source                                                            | Effect projection                                                                                                      |
| --------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Shared transport      | `packages/sdk-runtime/src/effect-*.ts`                                      | Effect services, typed errors, endpoint executor, catalog, and managed Promise boundary.                               |
| Meta generation       | JSON specs parsed by `packages/meta-business-sdk/src/codegen/`              | `ir.ts` adapts objects, fields, enums, endpoints, scopes, and capabilities into canonical IR.                          |
| TikTok generation     | Scraped documentation parsed by `packages/tiktok-business-sdk/src/codegen/` | `ir.ts` adapts all parsed documentation endpoints and nested request/response models.                                  |
| Google Ads generation | Protobuf AST in `packages/google-ads-sdk/src/codegen/`                      | `ir.ts` adapts messages, enums, services, and HTTP annotations; protobuf remains the wire source.                      |
| YouTube generation    | Discovery JSON consumed by `scripts/generate-youtube-sdk.mjs`               | The generator normalizes Discovery models and methods into the shared IR.                                              |
| X generation          | Fern OpenAPI input plus `scripts/generate-x-effect.mjs`                     | Fern remains the compatibility client; the checked OpenAPI adapter emits canonical descriptors.                       |
| LinkedIn and GBP      | Handwritten HTTP clients                                                    | Checked handwritten endpoint inventories emit the same IR until authoritative provider specs are available.            |
| Operation catalog     | `packages/ad-platforms/src/operations/`                                     | Effect Schema definitions expose `invokeEffect`; `invoke` is the Promise projection.                                   |
| CLI and MCP           | `packages/cli/src/operations.ts` and `mcp.ts`                               | Descriptor metadata drives discovery and tools; MCP converts derived JSON Schema only at its Zod boundary.             |
| Code Mode and AI SDK  | `packages/ad-platforms/src/operations/codemode.ts` and `ai.ts`              | Code Mode uses derived JSON Schema; AI SDK uses Effect Standard Schema v1.                                             |

## Canonical IR

The IR is protocol-neutral data used during generation. It must not import a platform package or
contain executable handlers.

```ts
interface SdkIr {
  platform: PlatformId;
  source: SpecSource;
  version: string;
  models: readonly ModelIr[];
  endpoints: readonly EndpointIr[];
  capabilities: readonly CapabilityIr[];
}

interface ModelIr {
  id: string;
  name: string;
  kind: "object" | "enum" | "union" | "scalar";
  fields?: readonly FieldIr[];
  values?: readonly string[];
  documentation?: string;
  wire: "json" | "protobuf";
}

interface EndpointIr {
  id: string;
  operationId: string;
  platform: PlatformId;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  input: EndpointInputIr;
  output: TypeRefIr;
  errors: readonly ErrorRefIr[];
  effect: "read" | "write" | "publish" | "delete" | "spend";
  execution: "inline" | "durable";
  idempotency: "safe" | "keyed" | "unsafe";
  requiredScopes: readonly string[];
  capabilities: readonly string[];
  pagination?: PaginationIr;
  rateLimitBucket?: string;
}
```

The implementation may refine these shapes, but all adapters must preserve stable IDs, source
provenance, encoded and decoded model distinctions, request locations, optional-versus-nullable
semantics, idempotency, permissions, and pagination metadata.

## Generated Artifacts

For JSON providers, each model module emits a schema and derives both decoded and encoded types:

```ts
export const Post = Schema.Struct({
  id: Schema.String,
  createdAt: DateTimeUtcFromString,
  text: Schema.optional(Schema.String),
});

export type Post = typeof Post.Type;
export type PostEncoded = typeof Post.Encoded;
```

Endpoint modules export a descriptor containing schemas and provider metadata. Descriptors are
pure and do not capture credentials. A platform interpreter combines a descriptor with transport,
authentication, and provider error decoding to produce an `Effect` program.

For protobuf providers, generated protobuf types and descriptors remain the wire representation.
Schema is used for public inputs, normalized outputs, error payloads, and transformations where it
adds validation without duplicating the entire protobuf graph.

## Runtime Service Graph

`@openpromo/sdk-runtime/effect` owns the stable execution primitives:

- `HttpTransport`: interruptible Fetch execution and response-body acquisition.
- `RateLimiter`: gates requests and observes provider response headers.
- `Telemetry`: spans, request identifiers, attempt counts, and provider rate-limit attributes.
- `PlatformError`: serializable tagged failures shared by all providers.
- `EndpointExecutor`: request encoding, transport, response decoding, and error normalization.

Authentication headers and endpoint-aware retry policy are bound in `createEffectClient`; they are
not mutable global services. The retry schedule includes jitter, caps, and `Retry-After`.

Clocks, randomness, scopes, and cancellation use Effect services directly unless a public SDK
contract needs a narrower abstraction. Layers are composed once for long-lived stateless services.
Per-client credentials and metadata are supplied at the operation boundary.

## Public Projections

Each platform has two first-class entrypoints backed by one endpoint implementation:

```ts
const program = client.effect(endpoint, input, { signal });
const post = await client.promise(endpoint, input, { signal });
```

The exact namespace can differ for generated and curated clients, but the rules are fixed:

- Promise methods use `runPromise` or a managed runtime only at the boundary.
- An `AbortSignal` interrupts the underlying Effect fiber and Fetch request.
- The Effect surface preserves the tagged error channel.
- The Promise surface rejects with public `PlatformError` instances, not `FiberFailure` wrappers.
- Both surfaces decode the same input and output schemas and emit the same telemetry.

The operation catalog consumes endpoint descriptors and supplies four additional projections:

- Code Mode connector tools
- MCP tools
- CLI discovery and invocation
- AI SDK tools

## Capability Metadata

Capabilities describe what an authenticated provider connection may do, independently of whether a
method happens to exist in generated code. Stable capability IDs include areas such as
`posts.read`, `posts.publish`, `posts.metrics.read`, `comments.manage`, `messages.read`, and
`ads.manage`. Endpoint descriptors reference capability IDs and required provider scopes. Runtime
connection discovery can then report supported, unsupported, and missing-permission states without
probing arbitrary methods.

## Verification Gates

Repository-wide adoption is complete only when:

1. Every platform generation path emits or adapts through canonical IR with deterministic snapshot
   tests and source provenance.
2. JSON endpoints validate representative success and error fixtures with generated schemas.
3. Effect and Promise contract tests prove identical values, typed errors, cancellation, retry
   decisions, and telemetry.
4. Non-idempotent writes are proven not to retry without an idempotency key.
5. Pagination and batch metrics tests prove bounded concurrency and partial-failure behavior.
6. Operation catalog, Code Mode, CLI, MCP, and AI tools consume shared descriptor schemas.
7. Cloudflare-compatible bundle and cold-start checks stay within recorded budgets.
8. `bun run lint`, `bun run format:check`, `bun run typecheck`, `bun run build`, `bun run test`, and
   `bun run release:check` pass.
