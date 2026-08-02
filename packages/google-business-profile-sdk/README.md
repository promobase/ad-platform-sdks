# @openpromo/google-business-profile

Type-safe SDK for Google Business Profile account discovery, locations, local posts, OAuth, post
insights, and location performance metrics.

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
