/**
 * Encapsulated OAuth flow — provider configuration stays at the edge while
 * authorization, callback state, PKCE, and typed grants stay in one object.
 *
 * Requires:
 *   META_APP_ID=... META_APP_SECRET=... bun examples/oauth/oauth-flow.ts
 *
 * The OAuthFlow object is short-lived. Persist `state` and `codeVerifier` in
 * your session store before redirecting, then recreate the flow with the same
 * state in the callback route. The provider adapter remains available through
 * `flow.adapter` for native discovery methods such as Facebook page listing.
 */
import { Facebook } from "@openpromo/meta";
import { OAuthAdapterError, createOAuthFlow, redactOAuthTokenSet } from "@openpromo/sdk-runtime";
import { X } from "@openpromo/x";

const redirectUri = "https://example.com/callback";

async function main(): Promise<void> {
  const facebook = createOAuthFlow(
    Facebook.oauth({
      appId: required("META_APP_ID"),
      appSecret: required("META_APP_SECRET"),
      redirectUri,
    }),
    {
      scopes: ["pages_show_list", "pages_manage_posts"],
      state: "csrf-state",
    },
  );

  const authorization = await facebook.authorize();
  console.log("Open this URL:", authorization.url);
  console.log("Persist this state:", authorization.state);

  const code = process.env.OAUTH_CALLBACK_CODE;
  if (code) {
    try {
      const grant = await facebook.complete({ code, state: authorization.state });
      const metadata = redactOAuthTokenSet(facebook.adapter.provider, grant);
      console.log("Granted, expires at:", metadata.accessTokenExpiresAt);
      console.log("Scopes:", metadata.scopes.join(", "));

      // Provider-specific discovery remains native and typed; the flow only
      // encapsulates the OAuth lifecycle around the adapter.
      const pages = await facebook.adapter.listPages({ accessToken: grant.accessToken });
      console.log("Pages:", pages.map((page) => page.name).join(", "));
    } catch (error) {
      reportOAuthError(error);
    }
  }

  const x = createOAuthFlow(
    X.oauth({
      clientId: required("X_CLIENT_ID"),
      clientSecret: process.env.X_CLIENT_SECRET,
      redirectUri,
    }),
    {
      scopes: ["tweet.read", "offline.access"],
      state: "x-state",
      pkce: "auto",
    },
  );
  const xAuthorization = await x.authorize();
  console.log("X URL:", xAuthorization.url);
  console.log("Persist X verifier:", xAuthorization.codeVerifier);
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function reportOAuthError(error: unknown): void {
  if (error instanceof OAuthAdapterError) {
    console.error(
      `${error.details.provider} OAuth ${error.details.phase} failed: ${error.message}`,
    );
    return;
  }
  throw error;
}

await main();
