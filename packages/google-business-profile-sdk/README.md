# @openpromo/google-business-profile

Type-safe SDK for Google Business Profile account discovery, locations, local posts, OAuth, post
insights, and location performance metrics.

The ergonomic client covers common OpenPromo workflows. The generated Effect and agent catalog
accounts for 139 operations and 338 models across the eight current Google discovery services, the
official legacy v4 discovery snapshot, and the documented Business Calls insights endpoint. This
includes accounts, locations, performance, verification, notifications, lodging, place actions,
Q&A, posts, reviews, media, menus, and related profile resources.

```bash
bun --filter='./packages/google-business-profile-sdk' run codegen
bun --filter='./packages/google-business-profile-sdk' run codegen:refresh
```

```ts
import { GoogleBusinessProfile } from "@openpromo/google-business-profile";

const client = GoogleBusinessProfile.createClient({ accessToken });
const locations = await client.resources.locations.list("accounts/123");
const post = await client.resources.localPosts.create("accounts/123/locations/456", {
  languageCode: "en-US",
  topicType: "STANDARD",
  summary: "We are open late this Friday.",
  callToAction: { actionType: "LEARN_MORE", url: "https://example.com" },
});
```

The SDK exposes provider primitives only. Store tokens, schedule work, retry durable operations, and
persist normalized results in the consuming application.
