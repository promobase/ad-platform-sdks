import {
  AllPlatforms,
  assertOAuthState,
  OAuthAdapterError,
  secondsFromNow,
  type OAuthAdapter,
  type OAuthTokenSet,
} from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { GoogleBusinessProfileClient } from "./client.ts";
import { createGoogleBusinessProfileOAuth } from "./oauth.ts";
import { createGoogleBusinessProfileResources } from "./resources.ts";
import type { GoogleBusinessProfileOAuthConfig, GoogleOAuthTokenResponse } from "./types.ts";
import type { BusinessAccount, BusinessLocation } from "./types.ts";

export type GoogleBusinessProfileAccount = BusinessAccount;
export type GoogleBusinessProfileLocation = BusinessLocation;

const tokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  scope: v.optional(v.string()),
  token_type: v.string(),
  id_token: v.optional(v.string()),
});
const accountSchema = v.looseObject({
  name: v.string(),
  accountName: v.optional(v.string()),
  type: v.optional(v.string()),
  role: v.optional(v.string()),
});
const locationSchema = v.looseObject({
  name: v.string(),
  title: v.optional(v.string()),
  storeCode: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  websiteUri: v.optional(v.string()),
});

function tokenSet(raw: GoogleOAuthTokenResponse): OAuthTokenSet<GoogleOAuthTokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes: raw.scope?.split(" ").filter(Boolean) ?? [],
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    providerData: raw,
  };
}

/** Normalized OAuth adapter for Google Business Profile. */
export function createGoogleBusinessProfileOAuthAdapter(
  config: GoogleBusinessProfileOAuthConfig,
): OAuthAdapter<GoogleOAuthTokenResponse> & {
  listAccounts(input: { accessToken: string }): Promise<readonly GoogleBusinessProfileAccount[]>;
  listLocations(input: {
    accessToken: string;
    accountName: string;
  }): Promise<readonly GoogleBusinessProfileLocation[]>;
} {
  const legacy = createGoogleBusinessProfileOAuth(config);
  return {
    provider: AllPlatforms.GOOGLE_BUSINESS,
    async authorize(input) {
      if (input.pkce !== undefined) {
        throw new OAuthAdapterError("Google Business Profile OAuth does not use PKCE", {
          provider: AllPlatforms.GOOGLE_BUSINESS,
          phase: "authorize",
        });
      }
      return {
        url: legacy.getAuthorizationUrl({ scopes: [...input.scopes], state: input.state }),
        state: input.state,
      };
    },
    async exchangeCode(input) {
      assertOAuthState(input.state, input.expectedState);
      return tokenSet(v.parse(tokenSchema, await legacy.exchangeCode(input.code)));
    },
    async refresh(input) {
      if (!input.refreshToken) {
        throw new OAuthAdapterError("Google Business Profile refresh requires a refresh token", {
          provider: AllPlatforms.GOOGLE_BUSINESS,
          phase: "refresh",
        });
      }
      return tokenSet(v.parse(tokenSchema, await legacy.refreshToken(input.refreshToken)));
    },
    async listAccounts(input) {
      const client = new GoogleBusinessProfileClient({
        accessToken: input.accessToken,
        fetch: config.fetch,
        signal: config.signal,
      });
      const resources = createGoogleBusinessProfileResources(client);
      const response = await resources.accounts.list();
      const body = v.parse(v.object({ accounts: v.optional(v.array(accountSchema)) }), response);
      return (body.accounts ?? []) as readonly GoogleBusinessProfileAccount[];
    },
    async listLocations(input) {
      const client = new GoogleBusinessProfileClient({
        accessToken: input.accessToken,
        fetch: config.fetch,
        signal: config.signal,
      });
      const resources = createGoogleBusinessProfileResources(client);
      const response = await resources.locations.list(input.accountName);
      const body = v.parse(v.object({ locations: v.optional(v.array(locationSchema)) }), response);
      return (body.locations ?? []) as readonly GoogleBusinessProfileLocation[];
    },
  };
}
