/**
 * Normalized OAuth flow — the shared adapter contract.
 *
 * Every platform exposes a lower-case `oauth` factory with the same shape:
 * authorize (builds the URL, optionally PKCE), exchangeCode (code -> typed
 * token grant), refresh, revoke. The `.result` façade returns non-throwing
 * Results for explicit branching via `match`.
 *
 * Requires app credentials in env, then:
 *   META_APP_ID=... META_APP_SECRET=... bun examples/oauth/oauth-flow.ts
 */
import { Facebook } from "@openpromo/meta";
import { redactOAuthTokenSet } from "@openpromo/sdk-runtime";
import { X } from "@openpromo/x";

const appId = process.env.META_APP_ID!;
const appSecret = process.env.META_APP_SECRET!;
const redirectUri = "https://example.com/callback";

const facebook = Facebook.oauth({ appId, appSecret, redirectUri });

// --- 1. Authorize: build the URL + state (PKCE rejected for Meta) ---
const authorization = await facebook.result.authorize({
  scopes: ["pages_show_list", "pages_manage_posts"],
  state: "csrf-state",
});

const authorizationUrl = authorization.match({
  ok: (auth) => auth.url,
  err: (error) => {
    console.error("authorize failed:", error.details.phase);
    return null;
  },
});
if (authorizationUrl) {
  console.log("Open this URL:", authorizationUrl);
  // Persist authorization.state (and codeVerifier for PKCE providers).
}

// --- 2. Exchange the callback code for a typed grant ---
const code = process.env.OAUTH_CALLBACK_CODE; // from the redirect
if (code) {
  const grant = await facebook.result.exchangeCode({
    code,
    state: "csrf-state",
    expectedState: "csrf-state",
  });

  type ExchangeOutcome =
    | { status: "ok"; tokenSet: import("@openpromo/sdk-runtime").OAuthTokenSet<unknown> }
    | { status: "not-retryable" }
    | { status: "retryable"; provider: string };

  const outcome = grant.match<ExchangeOutcome>({
    ok: (tokenSet) => ({ status: "ok", tokenSet }),
    err: (error) =>
      // Validation-phase failures (state mismatch) are not retryable.
      error.details.phase === "validate"
        ? { status: "not-retryable" }
        : { status: "retryable", provider: error.details.provider },
  });

  if (outcome.status === "ok") {
    // Persist the token set; never log raw tokens.
    const metadata = redactOAuthTokenSet("FACEBOOK", outcome.tokenSet);
    console.log("Granted, expires at:", metadata.accessTokenExpiresAt);
    console.log("Scopes:", metadata.scopes.join(", "));

    // --- 3. Account discovery stays provider-specific ---
    const pages = await facebook.listPages({ accessToken: outcome.tokenSet.accessToken });
    console.log("Pages:", pages.map((page) => page.name).join(", "));
  } else {
    console.log("Exchange failed; retryable:", outcome.status === "retryable");
  }
}

// --- 4. PKCE providers (X, TikTok Developer) ---
const x = X.oauth({
  clientId: process.env.X_CLIENT_ID!,
  clientSecret: process.env.X_CLIENT_SECRET,
  redirectUri,
});

const xAuthorization = await x.result.authorize({
  scopes: ["tweet.read", "offline.access"],
  state: "x-state",
  pkce: "auto", // returns the codeVerifier alongside the URL
});

xAuthorization.match({
  ok: (auth) => {
    console.log("X URL:", auth.url);
    console.log("Persist codeVerifier:", auth.codeVerifier);
  },
  err: (error) => console.error("X authorize failed:", error.details.phase),
});
