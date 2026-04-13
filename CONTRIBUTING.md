# Contributing

Thanks for your interest in contributing to `ad-platform-sdks`.

## Dev setup

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install
```

Rebuild compiled output after changes (required before tests that import from other workspace packages):

```bash
bun run build          # cold build (~6s)
bun run build          # hot rebuild (~1.5s, incremental)
```

## Commands

From the repo root — all fan out across every package:

| Command | What it does |
|---------|--------------|
| `bun run typecheck` | TypeScript type-check |
| `bun run build` | Compile to `dist/` |
| `bun run test` | Run all tests |
| `bun run lint` | Biome lint |
| `bun run lint:fix` | Biome lint + auto-fix |
| `bun run format` | Biome format |
| `bun run clean` | Delete all `dist/` folders |

Per-package commands (run from the package dir):

```bash
cd packages/google-ads-sdk
bun run codegen   # regenerate from proto specs
bun test tests/   # run just this package's tests
```

## Making changes

1. Create a branch off `master`.
2. Make your changes.
3. Add a changeset describing what changed and how it bumps (patch / minor / major):

   ```bash
   bun run changeset
   ```

   This opens a CLI. Pick the affected package(s), choose a bump level, write a brief description. A `.changeset/*.md` file is created — commit it with your changes.

4. Open a PR. CI runs lint → typecheck → build → tests.

## Release process (maintainers)

On every merge to `master` the release workflow runs:

- **If unprocessed changesets exist:** a "chore: release packages" PR is opened with bumped versions + CHANGELOG updates. It auto-merges once CI is green.
- **When that PR merges:** the workflow runs again, publishes all bumped packages to npm, creates GitHub Releases, and signs tarballs with npm provenance.

No manual publish step — just merge PRs with changesets.

## Codegen

Each SDK has its own codegen pipeline:

| Package | Specs | Command |
|---------|-------|---------|
| `meta-business-sdk-ts` | `packages/meta-business-sdk/api_specs/` (git submodule) | `bun run codegen` |
| `google-ads-sdk` | `packages/google-ads-sdk/vendor/googleapis/` (git submodule) | `bun run codegen` |
| `tiktok-business-sdk` | TikTok docs API | `bun run codegen` |

After running codegen, run `bun run typecheck` to verify the output.

## License

By contributing you agree your changes will be licensed under [MIT](./LICENSE).
