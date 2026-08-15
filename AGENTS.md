# Ad Platform SDKs Agent Guide

This file is the canonical instruction source for agents working in this repository. `CLAUDE.md`
is a compatibility symlink to this file. Add nested `AGENTS.md` files only when a subtree has
genuinely different rules; the nearest file refines this guide without duplicating it.

## Purpose and Architecture

This is a Bun workspaces monorepo of type-safe TypeScript SDKs and agent-facing tools for ad and
social platforms.

- `packages/sdk-runtime`: shared HTTP, cursor, error, retry, and publishing primitives.
- `packages/meta-business-sdk`: Meta, Facebook, Instagram, and Threads SDK plus generated Graph API
  objects.
- `packages/tiktok-business-sdk`: TikTok Business SDK and documentation-driven code generation.
- `packages/google-ads-sdk`: Google Ads SDK generated from pinned protobuf definitions; see its
  nested `AGENTS.md`.
- `packages/google-business-profile-sdk`: Google Business Profile OAuth, locations, local posts,
  post insights, and location performance.
- `packages/linkedin-sdk`, `packages/x-sdk`, `packages/youtube-sdk`: platform-specific SDKs.
- `packages/ad-platforms`: umbrella public package that re-exports platform SDKs.
- `packages/cli`: CLI and MCP surfaces built on the SDK packages.

Keep platform-specific behavior in its owning SDK, cross-platform transport primitives in
`sdk-runtime`, aggregation in `ad-platforms`, and command/MCP presentation in `cli`.

## Canonical Commands

Run repository-wide commands from the root:

```bash
bun install --frozen-lockfile
bun run lint
bun run format:check
bun run typecheck
bun run build
bun run test
bun run codegen:check
bun run release:check
```

Build before tests when another workspace package consumes compiled output. For focused work, run
the package's scripts from that package directory, for example `bun run typecheck` and
`bun test tests/`. Before handoff, run the narrowest relevant checks plus `git diff --check`; use the
full root checks for cross-package, generated-code, build, or release changes.

## Toolchain and Code Conventions

- Use Bun for dependency installation, scripts, and tests, TypeScript 7's native compiler for
  type-checking and declaration builds, Oxlint for linting, and Oxfmt for formatting. The native
  compiler graduated from the preview `tsgo` name to the standard `tsc` binary in TypeScript 7.
  Do not add a second lockfile or migrate package managers without an explicit request.
- Keep the existing ESM TypeScript structure and package export boundaries.
- Use the shared runtime rather than duplicating HTTP, pagination, retry, or error machinery in a
  platform package.
- Use current primary documentation for libraries, SDKs, APIs, CLIs, and cloud services. Resolve
  documentation through Context7 before relying on remembered syntax or behavior.
- Never commit credentials or real access tokens. Tests should use mocks or fixtures unless live
  provider testing is explicitly authorized.

## Generated Sources and Submodules

Generated files are outputs, not primary edit targets:

| Package                 | Source of truth                                        | Command                                                       |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------- |
| Meta                    | `packages/meta-business-sdk/api_specs/` submodule      | `cd packages/meta-business-sdk && bun run codegen`            |
| TikTok                  | Cached official documentation snapshot                 | `cd packages/tiktok-business-sdk && bun run codegen`          |
| Google Ads              | `packages/google-ads-sdk/vendor/googleapis/` submodule | `cd packages/google-ads-sdk && bun run codegen`               |
| Google Business Profile | Pinned Google discovery documents                      | `cd packages/google-business-profile-sdk && bun run codegen`  |
| LinkedIn                | Pinned official Postman collection snapshot            | `cd packages/linkedin-sdk && bun run codegen`                 |
| X                       | `fern/` configuration and OpenAPI input                | `cd packages/x-sdk && bun run codegen`                        |
| YouTube                 | Pinned Data, Analytics, and Reporting discovery inputs | `cd packages/youtube-sdk && bun run codegen`                  |

Do not hand-edit generated trees when the generator or its input owns the change. Do not update
submodule pins incidentally. Review generated diffs for unrelated churn and run the owning package's
typecheck and tests after regeneration.

Every generated source and reference artifact carries a deterministic SHA-256 body checksum and an
explicit `DO NOT EDIT` marker. Use the owning `codegen` command, which refreshes these headers; use
`node scripts/ensure-generated-headers.mjs --check` to verify them without rewriting files.

## Changes and Releases

- Preserve unrelated working-tree changes. Do not reset, stash, overwrite, or reformat unrelated
  files.
- Public package changes require a concise `.changeset/*.md` entry with the affected packages and
  appropriate semantic-version bump.
- Keep internal source dependencies as `workspace:*`. The release wrapper converts them to registry
  semver ranges for publication; `bun run release:check` guards this contract.
- Releases are automated through Changesets on `master`. Do not run `npm publish`, `bun publish`,
  push, or deploy unless the user explicitly requests it.

## Documentation and Agent Workflows

Keep durable project knowledge in `README.md`, `CONTRIBUTING.md`, package READMEs, or `docs/` and link
to it rather than expanding this file with detailed runbooks. Repo-local executable agent workflows
belong in `.agents/skills/`; see `.agents/skills/README.md`. Temporary planning state does not belong
in skills or product documentation.
