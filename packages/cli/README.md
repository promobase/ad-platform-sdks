# @openpromo/ad-platforms-cli

Command-line interface for OpenPromo ad platform SDKs.

The CLI is intentionally separate from the SDK runtime packages. It can depend on
Commander, Zod, and SDK peer dependencies while keeping normal SDK imports small.

```sh
npx @openpromo/ad-platforms-cli meta --help
openpromo-ads meta instagram --help
op-ads meta instagram media publish-photo --help
openpromo-ads linkedin posts create-text --help
openpromo-ads youtube resources call --help
openpromo-ads google-ads gaql search --help
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

The command tree is grouped by platform and domain:

- `meta instagram account|media|stories|comments|messaging|containers|webhooks|oauth`
- `meta facebook account|feed|stories|comments|messaging|webhooks|oauth`
- `meta threads account|posts|replies|containers|oauth`
- `linkedin account|assets|posts|comments|oauth`
- `tiktok account|videos|photos|comments|discovery|webhooks|oauth|raw`
- `x tweets|users|media|raw`
- `youtube videos|uploads|resources`
- `google-ads gaql|campaign-budgets|campaigns|ad-groups|ad-group-ads|ads|service`

Generated-heavy SDKs expose raw call escape hatches so agents can keep using
`--help` to narrow to the platform/domain, then pass JSON for the generated
operation:

```sh
openpromo-ads youtube resources call \
  --resource videos \
  --operation list \
  --params '{"part":"snippet,status","id":"VIDEO_ID"}'

openpromo-ads x raw call \
  --resource tweets \
  --operation createPosts \
  --body '{"text":"Hello from OpenPromo"}'

openpromo-ads google-ads service call \
  --service campaignService \
  --method mutateCampaigns \
  --customer-id "$GOOGLE_ADS_CUSTOMER_ID" \
  --args '{"operations":[{"remove":"customers/123/campaigns/456"}]}'
```

## MCP

The package also exposes the same CLI operations as a compact stdio MCP server.
Tool names follow the command path, for example
`meta_instagram_media_publish_photo`, `linkedin_posts_create_text`, or
`youtube_resources_call`.

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
