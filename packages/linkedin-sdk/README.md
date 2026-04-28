# @promobase/linkedin-sdk

Type-safe TypeScript SDK for LinkedIn organic publishing and OAuth.

LinkedIn does not currently publish a public OpenAPI/Swagger spec or public per-endpoint Rest.li restspec for the Marketing API surfaces this package wraps. This SDK is hand-authored against the official Microsoft Learn endpoint docs and LinkedIn's Rest.li protocol documentation.

## Install

```bash
bun add @promobase/linkedin-sdk
# or
npm install @promobase/linkedin-sdk
```

## Use

```ts
import { LinkedIn } from "@promobase/linkedin-sdk";

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

## OAuth

```ts
const oauth = LinkedIn.OAuth.create({
  clientId: process.env.LINKEDIN_CLIENT_ID!,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
  redirectUri: "https://app.example.com/oauth/linkedin/callback",
});

const url = oauth.getAuthorizationUrl({ state: "opaque-state" });
```

## Official References

- [LinkedIn API Clients](https://learn.microsoft.com/en-us/linkedin/shared/development-resources/api-clients) - official protocol-level client guidance; LinkedIn notes these clients do not model specific APIs.
- [Rest.li Protocol](https://linkedin.github.io/rest.li/spec/protocol) - source for Rest.li 2.0 headers, URL encoding, list notation, and resource methods.
- [Marketing API Versioning](https://learn.microsoft.com/en-us/linkedin/marketing/versioning) - source for `/rest` base path and `LinkedIn-Version`.
- [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api) - source for text, image, video, partial update, delete, and `x-restli-id` behavior.
- [Images API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/images-api) - source for `initializeUpload` and image URNs.
- [Videos API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/videos-api) - source for multipart upload instructions, ETags, and finalization.
- [Comments API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/comments-api) - source for comment creation, `x-restli-id`, and comment URNs.
- [Organization Lookup API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/organization-lookup-api) - source for organization lookup endpoints.
- [Organization Access Control by Role](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/organization-access-control-by-role) - source for administered organization discovery.
- [LinkedIn 3-Legged OAuth Flow](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) - source for authorization and token exchange.
- [Programmatic Refresh Tokens](https://learn.microsoft.com/en-us/linkedin/shared/authentication/programmatic-refresh-tokens) - source for refresh token exchange behavior.
- [Sign In with LinkedIn using OpenID Connect](https://learn.microsoft.com/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2) - source for `/v2/userinfo`.
