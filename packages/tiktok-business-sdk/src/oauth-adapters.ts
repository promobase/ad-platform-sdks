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

import { createOAuth as createBusinessOAuth } from "./clients/oauth.ts";
import type { OAuthConfig as BusinessOAuthConfig, TokenResponse } from "./clients/types.ts";
import {
  createTikTokDeveloperOAuth,
  type TikTokDeveloperOAuthConfig,
  type TikTokDeveloperTokenResponse,
} from "./developer.ts";

export interface TikTokAdvertiserOAuthConfig {
  readonly appId: string;
  readonly appSecret: string;
  readonly redirectUri: string;
  readonly fetch?: typeof fetch;
  readonly signal?: AbortSignal;
}

export interface TikTokAdvertiserTokenData {
  readonly access_token: string;
  readonly advertiser_ids?: readonly string[];
  readonly advertiser_id?: string;
}

export interface TikTokAdvertiserInfo {
  readonly advertiser_id: string;
  readonly advertiser_name: string;
  readonly profile_image_url?: string;
}

export interface TikTokBusinessProfile {
  readonly display_name?: string;
  readonly username?: string;
  readonly profile_image?: string;
  readonly profile_deep_link?: string;
  readonly bio_description?: string;
  readonly is_verified?: boolean;
  readonly is_business_account?: boolean;
  readonly followers_count?: number;
  readonly following_count?: number;
  readonly total_likes?: number;
  readonly videos_count?: number;
}

const businessTokenSchema = v.object({
  access_token: v.string(),
  token_type: v.string(),
  scope: v.string(),
  expires_in: v.number(),
  refresh_token: v.string(),
  refresh_token_expires_in: v.number(),
  open_id: v.string(),
});

const developerTokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  open_id: v.string(),
  refresh_token: v.string(),
  refresh_expires_in: v.optional(v.number()),
  scope: v.optional(v.string()),
  token_type: v.optional(v.string()),
});
const businessProfileSchema = v.object({
  display_name: v.optional(v.string()),
  username: v.optional(v.string()),
  profile_image: v.optional(v.string()),
  profile_deep_link: v.optional(v.string()),
  bio_description: v.optional(v.string()),
  is_verified: v.optional(v.boolean()),
  is_business_account: v.optional(v.boolean()),
  followers_count: v.optional(v.number()),
  following_count: v.optional(v.number()),
  total_likes: v.optional(v.number()),
  videos_count: v.optional(v.number()),
});

const advertiserTokenSchema = v.object({
  access_token: v.string(),
  advertiser_ids: v.optional(v.array(v.string())),
  advertiser_id: v.optional(v.string()),
});
const advertiserResponseSchema = v.object({
  code: v.number(),
  message: v.string(),
  request_id: v.optional(v.string()),
  data: v.optional(advertiserTokenSchema),
});
const advertiserInfoResponseSchema = v.object({
  code: v.number(),
  message: v.string(),
  request_id: v.optional(v.string()),
  data: v.optional(
    v.object({
      list: v.optional(
        v.array(
          v.object({
            advertiser_id: v.string(),
            advertiser_name: v.string(),
            profile_image_url: v.optional(v.string()),
          }),
        ),
      ),
    }),
  ),
});

function businessTokenSet(raw: TokenResponse): OAuthTokenSet<TokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes: raw.scope.split(" ").filter(Boolean),
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    refreshTokenExpiresAt: secondsFromNow(raw.refresh_token_expires_in),
    providerData: raw,
  };
}

function developerTokenSet(
  raw: TikTokDeveloperTokenResponse,
): OAuthTokenSet<TikTokDeveloperTokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes:
      raw.scope
        ?.split(",")
        .map((scope) => scope.trim())
        .filter(Boolean) ?? [],
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    refreshTokenExpiresAt: secondsFromNow(raw.refresh_expires_in),
    providerData: raw,
  };
}

/** Normalized adapter for TikTok Business Login. */
export function createTikTokBusinessOAuthAdapter(
  config: BusinessOAuthConfig,
): OAuthAdapterWithResults<TokenResponse> & {
  getProfile(input: { accessToken: string; businessId?: string }): Promise<TikTokBusinessProfile>;
} {
  const legacy = createBusinessOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.TIKTOK,
    async authorize(input) {
      if (input.pkce !== undefined) {
        throw new OAuthAdapterError("TikTok Business OAuth does not use PKCE", {
          provider: AllPlatforms.TIKTOK,
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
      const raw = v.parse(businessTokenSchema, await legacy.exchangeCode(input.code));
      return businessTokenSet(raw);
    },
    async refresh(input) {
      if (!input.refreshToken) {
        throw new OAuthAdapterError("TikTok Business refresh requires a refresh token", {
          provider: AllPlatforms.TIKTOK,
          phase: "refresh",
        });
      }
      const raw = v.parse(businessTokenSchema, await legacy.refreshToken(input.refreshToken));
      return businessTokenSet(raw);
    },
    async revoke(input) {
      await legacy.revokeToken(input.token);
    },
    async getProfile(input: { accessToken: string; businessId?: string }) {
      if (!input.businessId) {
        throw new OAuthAdapterError("TikTok Business profile lookup requires a business ID", {
          provider: AllPlatforms.TIKTOK,
          phase: "validate",
        });
      }
      return v.parse(
        businessProfileSchema,
        await legacy.getUserProfile(input.accessToken, input.businessId),
      );
    },
  });
}

/** Compatibility adapter for the TikTok Developer/Login Kit flow. */
export function createTikTokDeveloperOAuthAdapter(
  config: TikTokDeveloperOAuthConfig,
): OAuthAdapterWithResults<TikTokDeveloperTokenResponse> {
  const legacy = createTikTokDeveloperOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.TIKTOK,
    async authorize(input) {
      if (!input.pkce) {
        throw new OAuthAdapterError("TikTok Developer OAuth requires PKCE", {
          provider: AllPlatforms.TIKTOK,
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
        throw new OAuthAdapterError("TikTok Developer OAuth requires a code verifier", {
          provider: AllPlatforms.TIKTOK,
          phase: "exchange",
        });
      }
      const raw = v.parse(
        developerTokenSchema,
        await legacy.exchangeCode(input.code, input.codeVerifier),
      );
      return developerTokenSet(raw);
    },
    async refresh(input) {
      if (!input.refreshToken) {
        throw new OAuthAdapterError("TikTok Developer refresh requires a refresh token", {
          provider: AllPlatforms.TIKTOK,
          phase: "refresh",
        });
      }
      const raw = v.parse(developerTokenSchema, await legacy.refreshToken(input.refreshToken));
      return developerTokenSet(raw);
    },
    async revoke(input) {
      await legacy.revokeToken(input.token);
    },
  });
}

/** Compatibility adapter for the TikTok Marketing API advertiser flow. */
export function createTikTokAdvertiserOAuthAdapter(
  config: TikTokAdvertiserOAuthConfig,
): OAuthAdapterWithResults<TikTokAdvertiserTokenData> & {
  listAdvertisers(input: {
    accessToken: string;
    advertiserIds: readonly string[];
  }): Promise<readonly TikTokAdvertiserInfo[]>;
} {
  const fetchImpl = config.fetch ?? fetch;
  return withOAuthResults({
    provider: AllPlatforms.TIKTOK,
    async authorize(input) {
      if (input.pkce !== undefined) {
        throw new OAuthAdapterError("TikTok Advertiser OAuth does not use PKCE", {
          provider: AllPlatforms.TIKTOK,
          phase: "authorize",
        });
      }
      const params = new URLSearchParams({
        app_id: config.appId,
        state: input.state,
        redirect_uri: config.redirectUri,
      });
      return {
        url: `https://business-api.tiktok.com/portal/auth?${params.toString()}`,
        state: input.state,
      };
    },
    async exchangeCode(input) {
      assertOAuthState(input.state, input.expectedState);
      const response = await fetchImpl(
        "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            app_id: config.appId,
            secret: config.appSecret,
            auth_code: input.code,
          }),
          signal: config.signal,
        },
      );
      const envelope = v.parse(advertiserResponseSchema, await response.json());
      if (!response.ok || envelope.code !== 0 || !envelope.data) {
        throw new OAuthAdapterError("TikTok Advertiser OAuth exchange failed", {
          provider: AllPlatforms.TIKTOK,
          phase: "exchange",
          status: response.status,
          providerCode: String(envelope.code),
          providerData: envelope,
        });
      }
      return {
        accessToken: envelope.data.access_token,
        scopes: [],
        providerData: envelope.data,
      };
    },
    async listAdvertisers(input: { accessToken: string; advertiserIds: readonly string[] }) {
      const params = new URLSearchParams({
        advertiser_ids: JSON.stringify(input.advertiserIds),
        fields: JSON.stringify(["advertiser_id", "advertiser_name", "profile_image_url"]),
      });
      const response = await fetchImpl(
        `https://business-api.tiktok.com/open_api/v1.3/advertiser/info/?${params.toString()}`,
        { headers: { "Access-Token": input.accessToken }, signal: config.signal },
      );
      const envelope = v.parse(advertiserInfoResponseSchema, await response.json());
      if (!response.ok || envelope.code !== 0 || !envelope.data?.list) {
        throw new OAuthAdapterError("TikTok Advertiser discovery failed", {
          provider: AllPlatforms.TIKTOK,
          phase: "validate",
          status: response.status,
          providerCode: String(envelope.code),
          providerData: envelope,
        });
      }
      return envelope.data.list as readonly TikTokAdvertiserInfo[];
    },
  });
}
