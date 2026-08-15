import {
  AllPlatforms,
  assertOAuthState,
  createPkcePair,
  OAuthAdapterError,
  secondsFromNow,
  type OAuthAdapterWithResults,
  type OAuthTokenSet,
  withOAuthResults,
} from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { createXOAuth, type XOAuthConfig, type XOAuthTokenResponse } from "./oauth.js";

export interface XUserAccount {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly profileImageUrl?: string;
}

const tokenSchema = v.object({
  token_type: v.string(),
  expires_in: v.number(),
  access_token: v.string(),
  scope: v.optional(v.string()),
  refresh_token: v.optional(v.string()),
});
const userSchema = v.object({
  data: v.object({
    id: v.string(),
    name: v.string(),
    username: v.string(),
    profile_image_url: v.optional(v.string()),
  }),
});

function tokenSet(raw: XOAuthTokenResponse): OAuthTokenSet<XOAuthTokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes: raw.scope?.split(" ").filter(Boolean) ?? [],
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    providerData: raw,
  };
}

/** Normalized PKCE adapter for X OAuth 2.0. */
export function createXOAuthAdapter(
  config: XOAuthConfig,
): OAuthAdapterWithResults<XOAuthTokenResponse> & {
  getUserInfo(input: { accessToken: string }): Promise<XUserAccount>;
} {
  const legacy = createXOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.X,
    async authorize(input) {
      if (!input.pkce) {
        throw new OAuthAdapterError("X OAuth requires PKCE", {
          provider: AllPlatforms.X,
          phase: "authorize",
        });
      }
      const generatedPkce = input.pkce === "auto" ? await createPkcePair() : undefined;
      const pkce = input.pkce === "auto" ? generatedPkce! : input.pkce;
      return {
        url: legacy.getAuthorizationUrl({
          scopes: [...input.scopes],
          state: input.state,
          codeChallenge: pkce.codeChallenge,
        }),
        state: input.state,
        ...(generatedPkce ? { codeVerifier: generatedPkce.codeVerifier } : {}),
      };
    },
    async exchangeCode(input) {
      assertOAuthState(input.state, input.expectedState);
      if (!input.codeVerifier) {
        throw new OAuthAdapterError("X OAuth requires a code verifier", {
          provider: AllPlatforms.X,
          phase: "exchange",
        });
      }
      const raw = await legacy.exchangeCode(input.code, input.codeVerifier);
      return tokenSet(v.parse(tokenSchema, raw));
    },
    async refresh(input) {
      if (!input.refreshToken) {
        throw new OAuthAdapterError("X refresh requires a refresh token", {
          provider: AllPlatforms.X,
          phase: "refresh",
        });
      }
      return tokenSet(v.parse(tokenSchema, await legacy.refreshToken(input.refreshToken)));
    },
    async revoke(input) {
      await legacy.revokeToken(input.token, input.tokenType);
    },
    async getUserInfo(input: { accessToken: string }): Promise<XUserAccount> {
      const fetchImpl = config.fetch ?? fetch;
      const response = await fetchImpl(
        "https://api.x.com/2/users/me?user.fields=profile_image_url",
        {
          headers: { Authorization: `Bearer ${input.accessToken}` },
          signal: config.signal,
        },
      );
      if (!response.ok) {
        throw new OAuthAdapterError("X user discovery failed", {
          provider: AllPlatforms.X,
          phase: "validate",
          status: response.status,
        });
      }
      const user = v.parse(userSchema, await response.json()).data;
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        profileImageUrl: user.profile_image_url,
      };
    },
  });
}
