---
"@mosaic/bluesky": minor
"@mosaic/ad-platforms": minor
"@mosaic/sdk-codegen": patch
---

Add Bluesky SDK (`@mosaic/bluesky`) with lexicon-driven codegen

New package with 197 generated endpoints across 21 AT Protocol namespaces
(feed, actor, graph, repo, server, notification, identity, sync, bookmark,
labeler, and more), generated from the official AT Protocol lexicons pinned
from bluesky-social/atproto with per-file checksums. Includes app-password
auth (plus session tokens), custom PDS service URLs, a publishing convenience
(`posts.createPost`) that auto-detects richtext link facets and uploads/embeds
images, and Effect-native contracts. `sdk-codegen` gains the `bluesky` platform
id; `@mosaic/ad-platforms` re-exports the new namespace.
