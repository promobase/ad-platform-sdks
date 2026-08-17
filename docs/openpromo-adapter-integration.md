# OpenPromo adapter integration

Mosaic is the provider transport boundary for OpenPromo. OpenPromo remains the
owner of workspace/account persistence, encrypted credentials, refresh timing,
workflow checkpoints, and publisher/domain behavior.

The executable, compile-checked version of these composition seams lives in
[`packages/meta-business-sdk/examples/openpromo-integration-flow.ts`](../packages/meta-business-sdk/examples/openpromo-integration-flow.ts).

## Normalized OAuth seam

Provider packages keep their existing `OAuth` helpers for compatibility and add
a lower-case `oauth` factory with the shared runtime contract:

```ts
import { Facebook } from "@openpromo/meta";
import { X } from "@openpromo/x";

const facebook = Facebook.oauth({ appId, appSecret, redirectUri });
const authorization = await facebook.authorize({
  scopes: ["pages_show_list", "pages_manage_posts"],
  state,
});

// Persist authorization.state and, for PKCE providers,
// authorization.codeVerifier in OpenPromo's state store.

const grant = await facebook.exchangeCode({
  code,
  state: callbackState,
  expectedState: storedState,
});
// grant.accessToken, grant.accessTokenExpiresAt, and grant.providerData are
// typed and runtime-validated. OpenPromo encrypts and persists the token.

const pages = await facebook.listPages({ accessToken: grant.accessToken });
const page = await facebook.getPage({
  accessToken: grant.accessToken,
  pageId: pages[0]!.id,
});

const x = X.oauth({ clientId, clientSecret, redirectUri });
const xAuthorization = await x.authorize({
  scopes: ["tweet.read", "offline.access"],
  state,
  pkce: "auto",
});
```

`pkce: "auto"` returns the generated `codeVerifier` alongside the URL for X,
TikTok Developer, and other PKCE providers. Providers that do not support PKCE
reject it with `OAuthAdapterError`. Callback state mismatches are rejected
before provider results are returned.

The first-party adapter set covers Facebook, Instagram, Threads, TikTok
Business, TikTok Developer compatibility, TikTok Advertiser compatibility,
LinkedIn, YouTube, X, and Google Business Profile. Account discovery remains a
provider-specific extension because Pages, channels, organizations, and GBP
locations do not have one common shape.

## Connected-account ownership

The eventual OpenPromo seam should remain small and domain-owned:

```ts
class EntFacebookPage extends EntConnectedAccount {
  readonly platform = AllPlatforms.FACEBOOK;

  async provider() {
    const credentials = await this.credentials.ensureValid();
    return Facebook.createClient({
      pageId: this.data.externalAccountId,
      accessToken: credentials.accessToken,
    });
  }
}
```

Mosaic does not receive workspace IDs, Ent instances, persistence callbacks, or
encryption services. OpenPromo maps a normalized grant into its connected
account row and controls refresh locking/health transitions.

When account metadata is returned to UI/read models, use the runtime redaction
helper (or an equivalent explicit projection). It never includes access tokens,
refresh tokens, verifier material, or opaque provider token payloads:

```ts
const publicMetadata = redactOAuthTokenSet(facebook.provider, grant);
```

Provider-specific discovery methods follow the same shape: Instagram and
Threads expose profiles, TikTok exposes Business profiles and Advertisers,
LinkedIn exposes member/organization data, YouTube exposes channels, X exposes
the authenticated user, and Google Business Profile exposes accounts and
locations.

## Stepped publishing

The existing OpenPromo publisher/workflow design remains unchanged. A workflow
loads the provider-specific Ent, obtains a Mosaic client, and keeps each
external effect in its existing durable step:

```ts
const account = await EntFacebookPage.fromId(input.connectedAccountId);
const facebook = await account.provider();

const upload = await step.do("facebook-video-start", () => facebook.feed.videoReels.start());
await step.do("facebook-video-upload", () =>
  facebook.feed.videoReels.upload({ uploadUrl: upload.uploadUrl, videoUrl }),
);
const published = await step.do("facebook-video-finish", () =>
  facebook.feed.videoReels.finish({ videoId: upload.videoId, description }),
);
```

This is a provider transport contract, not a required OpenPromo publisher
interface. Facebook and Instagram expose their generated Graph client as
`client.api` for typed provider operations that do not need a convenience
wrapper. Instagram's `client.containers` exposes create, resumable upload,
status, and publish as separate operations. TikTok's curated client exposes
typed video/photo publish and status operations, while `@openpromo/tiktok/generated`
provides the full docs-generated Business API factories for uncovered endpoints:

```ts
const instagram = await entInstagram.provider();
const container = await step.do("instagram-create-container", () =>
  instagram.containers.create({ image_url, caption }),
);
await step.do("instagram-publish-container", () => instagram.containers.publish(container.id));

const tiktok = await entTikTok.provider();
const publish = await step.do("tiktok-publish-video", () =>
  tiktok.videos.publish({ videoUrl, caption }),
);
const status = await step.do("tiktok-publish-status", () =>
  tiktok.videos.getPublishStatus(publish.shareId),
);
```

The adapter can therefore be swapped without requiring Mosaic to copy
OpenPromo's publisher method names or content entities. Each provider call
that has external side effects remains visible to the workflow; convenience
methods are optional composition helpers.

### Result boundary

Mosaic keeps its Effect runtime for Effect-native callers, but the ergonomic
Promise-facing provider boundary should also support `better-result`. This lets
OpenPromo choose explicit branching at provider seams without wrapping every
provider call in an ad-hoc `try/catch`:

```ts
import { Result } from "@openpromo/sdk-runtime/result";

const result = await Result.tryPromise({
  // Wrap any provider operation at the Promise seam.
  try: () => provider.operation(),
  catch: (cause) => (cause instanceof Error ? cause : new Error(String(cause))),
});

const value = result.match({
  ok: (value) => value,
  err: (error) => ({ state: "failed", error }) as const,
});
```

OAuth adapters expose both compatibility methods that throw and a typed,
non-throwing `.result` façade for `authorize`, `exchangeCode`, and available
token lifecycle methods:

```ts
const facebook = Facebook.oauth({ appId, appSecret, redirectUri });

const grant = await facebook.result.exchangeCode({
  code: callbackCode,
  state: callbackState,
  expectedState: storedState,
});

const account = grant.match({
  ok: (tokenSet) => ({ tokenSet }),
  err: (error) => {
    // OAuthAdapterError is a Better Result TaggedError.
    if (error.details.phase === "validate") return { retryable: false };
    return { retryable: true, provider: error.details.provider };
  },
});
```

`withOAuthResults(adapter)` is also exported for custom adapters. It preserves
the adapter's generic provider token type and extra methods, so OpenPromo can
adopt the result boundary without rewriting existing adapter consumers. The
provider-specific discovery methods remain provider-native and keep their
existing Promise/error behavior. Use `Result.match` or `matchError` at
route/workflow boundaries; do not unwrap in a durable step unless the step
intentionally treats the error as terminal.

`Result` is a Promise-boundary convenience, not a replacement for Workflow
control flow. OpenPromo still places each effect in `step.do`, uses
`step.sleep` for provider polling, and owns any domain-specific state machine.
The existing throwing Promise methods remain available for callers that prefer
exceptions, and Effect consumers continue using the typed Effect error channel.
Mosaic returns provider-native response types and provider operation IDs. It
does not invent a cross-platform publication state or placeholder external ID;
OpenPromo owns reconciliation and any content/publisher state projection. If a
runtime reports that a request outcome is uncertain, the application decides
how to reconcile it; that is not a Mosaic publication abstraction.

`forPlacementSpec()` and other OpenPromo content/account wiring stay in
OpenPromo. Mosaic only owns Graph/API requests, response validation, provider
errors, and typed transport results. Inbox entities and webhook-to-Inbox
processing remain deferred.

## Webhook-to-Inbox transport seam

Mosaic's first-party Chat adapters already own provider-specific webhook
verification and parsing. Each first-party adapter also exposes
`parseWebhookEvents(request)`, which runs that existing parser and returns
verified, thread-normalized `AdapterWebhookEvent` values without requiring a
`Chat` instance. Events expose a provider-stable `eventId` when available. The
result is intentionally generic: common message/action/
reaction/read/delivery events have stable fields, while provider facts such as
comment post context or future email headers live in `metadata`. Official X is
composed through its Chat runtime callback and translated at the same boundary;
it does not need a duplicate Mosaic parser.

An OpenPromo workspace ingress should use this seam as follows:

1. Bind the adapter instance to the connected account and give it a unique
   runtime name.
2. Call `parseWebhookEvents()` and durably enqueue the returned values in the
   workspace-scoped ingress DO before acknowledging the provider webhook.
3. Map the generic event into OpenPromo's canonical message/event model,
   persist it idempotently, and admit the canonical internal message ID to
   InboxAgent's durable turn queue.
4. Keep outbound sends behind OpenPromo's account-aware gateway; do not call
   `thread.post()` from the webhook handler or use Chat SDK history as a second
   Inbox source of truth.

Chat SDK's own burst/debounce and history persistence remain useful for normal
Chat applications. Inbox ingress may disable adapter history persistence when
OpenPromo owns canonical history, but neither Chat SDK `waitUntil` nor a
provider webhook acknowledgement is a durable queue.

## Canonical platform identifiers

Use `@openpromo/sdk-runtime/platforms` when a cross-platform selector is needed:

```ts
import { AllPlatforms, AllPlatformsSchema } from "@openpromo/sdk-runtime/platforms";

const platform = AllPlatforms.FACEBOOK;
```

Values are direct platform names. There is intentionally no family-level value;
the provider products are represented as `FACEBOOK`, `INSTAGRAM`, `THREADS`,
and `WHATSAPP`.
TikTok Business/Developer/Advertiser are account/auth variants of `TIKTOK`, not
additional enum members.
