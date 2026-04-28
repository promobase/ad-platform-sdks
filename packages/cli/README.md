# @openpromo/ad-platforms-cli

Command-line interface for OpenPromo ad platform SDKs.

The CLI is intentionally separate from the SDK runtime packages. It can depend on
Commander, Zod, and SDK peer dependencies while keeping normal SDK imports small.

```sh
npx @openpromo/ad-platforms-cli meta --help
openpromo-ads meta instagram --help
op-ads meta instagram media publish-photo --help
```

All commands accept `--input <json>` and `--input-file <path>` for structured
arguments. Explicit flags override JSON input.

```sh
openpromo-ads meta instagram media publish-photo \
  --access-token "$META_ACCESS_TOKEN" \
  --ig-account-id "$META_IG_ACCOUNT_ID" \
  --image-url "https://example.com/image.jpg" \
  --caption "New post"
```

The initial command tree covers Meta:

- `meta instagram account|media|stories|comments|messaging|containers|webhooks|oauth`
- `meta facebook account|feed|stories|comments|messaging|webhooks|oauth`
- `meta threads account|posts|replies|containers|oauth`

## MCP

The package also exposes the same CLI operations as a compact stdio MCP server.
Tool names follow the command path, for example
`meta_instagram_media_publish_photo`.

```json
{
  "mcpServers": {
    "openpromo-ads": {
      "command": "openpromo-ads",
      "args": ["mcp", "serve"]
    }
  }
}
```

You can also run the dedicated bin:

```sh
openpromo-ads-mcp
```
