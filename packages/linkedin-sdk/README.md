# @mosaic/linkedin

Type-safe TypeScript SDK for LinkedIn organic publishing, OAuth, and the complete documented
Marketing API operation surface.

LinkedIn does not currently publish a public OpenAPI/Swagger spec or public per-endpoint Rest.li restspec for the Marketing API surfaces this package wraps. This SDK is hand-authored against the official Microsoft Learn endpoint docs and LinkedIn's Rest.li protocol documentation.
The low-level catalog is generated from all 11 public collections in LinkedIn's official
Marketing Solutions Postman workspace. Postman collections describe operations rather than full
response schemas, so generated inputs and outputs remain honest `unknown` boundaries while the
curated publishing and analytics clients retain richer types.

The current snapshot emits all 285 callable requests. One additional "Get document content"
placeholder is recorded as excluded because the provider source contains no URL. A public Postman
collection does not grant API access: operations are tagged as community, marketing, partner, or
restricted according to the LinkedIn product approval they require. The generator leaves scopes
unknown when the collection does not declare them instead of guessing.

The default `LinkedIn-Version` is `202607`. Callers can still supply `apiVersion` explicitly for a
different supported monthly release.

## Install

```bash
bun add @mosaic/linkedin
# or
npm install @mosaic/linkedin
```

## Use

```ts
import { LinkedIn } from "@mosaic/linkedin";

const linkedin = LinkedIn.createClient({
  accessToken: process.env.LINKEDIN_ACCESS_TOKEN!,
});

const result = await linkedin.posts.createText({
  authorUrn: "urn:li:organization:123456",
  commentary: "New launch is live.",
});

console.log(result.postUrn);
```

## Publish Media

```ts
const imageUrn = await linkedin.assets.uploadImageFromUrl(
  "urn:li:organization:123456",
  "https://cdn.example.com/photo.jpg",
);

await linkedin.posts.createImage({
  authorUrn: "urn:li:organization:123456",
  commentary: "Behind the scenes.",
  imageUrn,
  options: { altText: "A team photo" },
});
```

Video initialization supports LinkedIn's optional `templateName` and `linkbackContext` media
attribution fields introduced in the 202602 API and available in the current 202607 release.

## OAuth

```ts
const oauth = LinkedIn.OAuth.create({
  clientId: process.env.LINKEDIN_CLIENT_ID!,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
  redirectUri: "https://app.example.com/oauth/linkedin/callback",
});

const url = oauth.getAuthorizationUrl({ state: "opaque-state" });
```

## Low-level post analytics

```ts
const organizationStats = await linkedin.analytics.getOrganizationShareStatistics({
  organizationalEntity: "urn:li:organization:123456",
  shares: ["urn:li:share:7132564752928563200"],
});

const memberStats = await linkedin.analytics.getMemberPostAnalytics({
  entity: "urn:li:ugcPost:7132564752928563200",
  queryType: "IMPRESSION",
});
```

## Complete generated API catalog

Use the generated catalog when a high-level helper does not yet cover an operation. Operations have
stable, searchable IDs and preserve fixed finder/action query strings plus `X-RestLi-Method`
semantics from the official collection.

```ts
import {
  createLinkedInGeneratedClient,
  LinkedInClient,
  linkedinOperations,
} from "@mosaic/linkedin";

const client = new LinkedInClient({ accessToken: process.env.LINKEDIN_ACCESS_TOKEN! });
const api = createLinkedInGeneratedClient(client);

const candidates = api.search("campaign analytics");
console.log(candidates.map(({ id, name }) => ({ id, name })));

await api.invoke(candidates[0]!.id, {
  variables: { sponsoredaccount_id: "123456" },
  query: { count: 100 },
});
```

`LinkedInClient.request` also accepts nested Rest.li query values, fixed Rest.li method headers, and
opt-in or automatic query tunneling for oversized URLs.

## Refreshing generated sources

```bash
bun run codegen:refresh # fetch and normalize the official public Postman collections
bun run codegen         # reproducible generation from the checked-in normalized snapshot
bun run codegen:check   # verify generated artifacts are current
```

The checked-in source manifest records included and intentionally excluded workspace entries at
`spec/postman-sources.json`. Never hand-edit generated files under `src/generated/`.

## Official References

- [LinkedIn API Clients](https://learn.microsoft.com/en-us/linkedin/shared/development-resources/api-clients) - official protocol-level client guidance; LinkedIn notes these clients do not model specific APIs.
- [LinkedIn Marketing Solutions Postman workspace](https://www.postman.com/linkedin-developer-apis/linkedin-marketing-solutions-versioned-apis/overview) - canonical operation corpus for generated low-level coverage.
- [Rest.li Protocol](https://linkedin.github.io/rest.li/spec/protocol) - source for Rest.li 2.0 headers, URL encoding, list notation, and resource methods.
- [Marketing API Versioning](https://learn.microsoft.com/en-us/linkedin/marketing/versioning) - source for `/rest` base path and `LinkedIn-Version`.
- [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api) - source for text, image, video, partial update, delete, and `x-restli-id` behavior.
- [Images API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/images-api) - source for `initializeUpload` and image URNs.
- [Videos API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/videos-api) - source for multipart upload instructions, ETags, and finalization.
- [Comments API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/comments-api) - source for comment creation, `x-restli-id`, and comment URNs.
- [Organization Lookup API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/organization-lookup-api) - source for organization lookup endpoints.
- [Organization Access Control by Role](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/organization-access-control-by-role) - source for administered organization discovery.
- [Organization Share Statistics](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/share-statistics) - source for organization share and UGC post lifetime statistics.
- [Member Post Statistics](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/members/post-statistics) - source for member post impressions, reach, engagement, and date-range analytics.
- [LinkedIn 3-Legged OAuth Flow](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) - source for authorization and token exchange.
- [Programmatic Refresh Tokens](https://learn.microsoft.com/en-us/linkedin/shared/authentication/programmatic-refresh-tokens) - source for refresh token exchange behavior.
- [Sign In with LinkedIn using OpenID Connect](https://learn.microsoft.com/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2) - source for `/v2/userinfo`.
