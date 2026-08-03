# SDK Documentation Site

This subtree is the Nimbus Docs site for the public OpenPromo Ad Platform SDKs. The root
`AGENTS.md` remains canonical for repository-wide rules; this file adds only documentation-specific
guidance. `AGENT.md` and `CLAUDE.md` are compatibility symlinks to this file.

## Ownership

- Curated product documentation lives in `src/content/docs/`.
- Generated SDK reference pages also live under `src/content/docs/reference/`, but their source of
  truth is the canonical `SdkIr` assembled by each platform generator.
- `scripts/generate-reference.ts` owns generated reference output. Never hand-edit generated pages.
- Nimbus-owned visible source is intentionally local: layouts, components, routes, and styles can
  be changed here. Upgrade scaffold files deliberately with `nimbus-docs diff`.
- OpenPromo wordmarks in `public/openpromo-wordmark-*.svg` mirror the canonical assets in
  [`promobase/identity`](https://github.com/promobase/identity). Keep mirrored files byte-identical
  to that repository rather than editing them locally.

## Commands

Run from `apps/docs`:

```bash
bun run generate
bun run generate:check
bun run lint
bun run typecheck
bun run build
bun run dev
```

The docs package uses TypeScript 6 only for `astro check`; Astro's language server cannot yet use
TypeScript 7's native compiler API. SDK workspaces continue to use TypeScript 7.

## Content Rules

- Every MDX page needs valid frontmatter with `title` and a concise `description`.
- Do not repeat the page title as an H1 in the body; Nimbus renders it from frontmatter.
- Components used in MDX must be PascalCase and registered in `src/components.ts`.
- Use `<Render file="..." />` for shared partials; do not import MDX directly.
- Preserve `<AgentDirective />`, Markdown twin routes, `llms.txt`, `llms-full.txt`, JSON-LD,
  Pagefind search, sitemap, and robots surfaces.
- Never include real provider credentials, access tokens, customer IDs, or private OpenPromo data.

## Verification

Before handoff, prove generated content is current, Nimbus prose and links pass, Astro checking
passes, the static build succeeds, Pagefind indexes published pages, and the built site exposes
Markdown twins plus `llms.txt` and `llms-full.txt`. Visually verify desktop and mobile navigation for
user-facing layout changes.
