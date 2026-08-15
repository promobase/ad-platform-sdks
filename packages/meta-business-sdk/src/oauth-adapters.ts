import {
  AllPlatforms,
  createPkcePair,
  OAuthAdapterError,
  secondsFromNow,
  type OAuthAdapterWithResults,
  type OAuthTokenSet,
  withOAuthResults,
} from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { createFacebookOAuth } from "./clients/facebook/index.ts";
import type {
  LongLivedToken as FacebookLongLivedToken,
  FacebookPageInfo,
  FacebookUserProfile,
  OAuthConfig as FacebookOAuthConfig,
  PageToken,
} from "./clients/facebook/types.ts";
import { createInstagramOAuth } from "./clients/instagram/index.ts";
import type {
  LongLivedToken as InstagramLongLivedToken,
  InstagramBusinessUserProfile,
  OAuthConfig as InstagramOAuthConfig,
  ShortLivedToken as InstagramShortLivedToken,
} from "./clients/instagram/types.ts";
import { createThreadsOAuth } from "./clients/threads/index.ts";
import type {
  LongLivedToken as ThreadsLongLivedToken,
  OAuthConfig as ThreadsOAuthConfig,
  ShortLivedToken as ThreadsShortLivedToken,
  ThreadsUserProfile,
} from "./clients/threads/types.ts";
import {
  type FacebookOAuthScope,
  type InstagramLoginOAuthScope,
  type ThreadsOAuthScope,
} from "./oauth-scopes.ts";

const facebookShortLivedTokenSchema = v.object({ access_token: v.string() });
const facebookLongLivedTokenSchema = v.object({
  access_token: v.string(),
  token_type: v.string(),
  expires_in: v.number(),
});
const pageTokenSchema = v.object({ id: v.string(), name: v.string(), access_token: v.string() });
const instagramShortLivedTokenSchema = v.object({
  access_token: v.string(),
  user_id: v.string(),
});
const instagramLongLivedTokenSchema = facebookLongLivedTokenSchema;
const threadsShortLivedTokenSchema = instagramShortLivedTokenSchema;
const threadsLongLivedTokenSchema = facebookLongLivedTokenSchema;

type GraphOAuthData<TShort, TLong> = {
  readonly shortLived: TShort;
  readonly longLived: TLong;
  readonly credentialFamily: "facebook-login" | "instagram-login" | "threads-login";
};

function rejectPkce(provider: string, pkce: unknown): void {
  if (pkce !== undefined) {
    throw new OAuthAdapterError(`${provider} OAuth does not use PKCE`, {
      provider,
      phase: "authorize",
    });
  }
}

function assertSecureOAuthState(
  provider: AllPlatforms,
  state: string | undefined,
  expectedState: string | undefined,
): void {
  if (!state || !expectedState) {
    throw new OAuthAdapterError("OAuth state and expectedState are required", {
      provider,
      phase: "validate",
    });
  }
  if (state !== expectedState) {
    throw new OAuthAdapterError("OAuth state mismatch", {
      provider,
      phase: "validate",
    });
  }
}

function tokenExpiry(expiresIn: number): Date {
  return secondsFromNow(expiresIn) as Date;
}

function facebookTokenSet(
  token: FacebookLongLivedToken,
  providerData: GraphOAuthData<unknown, FacebookLongLivedToken>,
  scopes: readonly FacebookOAuthScope[] = [],
): OAuthTokenSet<GraphOAuthData<unknown, FacebookLongLivedToken>> {
  return {
    accessToken: token.access_token,
    tokenType: token.token_type,
    scopes: [...scopes],
    accessTokenExpiresAt: tokenExpiry(token.expires_in),
    providerData,
  };
}

/** Normalized OAuth adapter for Facebook Login and Page-token discovery. */
export function createFacebookOAuthAdapter(config: FacebookOAuthConfig): OAuthAdapterWithResults<
  GraphOAuthData<unknown, FacebookLongLivedToken>,
  FacebookOAuthScope
> & {
  exchangeLongLivedToken(input: {
    accessToken: string;
  }): Promise<OAuthTokenSet<FacebookLongLivedToken>>;
  listPages(input: { accessToken: string }): Promise<readonly PageToken[]>;
  getUserProfile(input: { accessToken: string; id?: string }): Promise<FacebookUserProfile>;
  getPage(input: { accessToken: string; pageId: string }): Promise<FacebookPageInfo>;
} {
  const legacy = createFacebookOAuth(config);

  async function exchangeLongLivedToken(input: { accessToken: string }) {
    const raw = v.parse(
      facebookLongLivedTokenSchema,
      await legacy.exchangeForLongLived(input.accessToken),
    );
    return {
      accessToken: raw.access_token,
      tokenType: raw.token_type,
      scopes: [],
      accessTokenExpiresAt: tokenExpiry(raw.expires_in),
      providerData: raw,
    } satisfies OAuthTokenSet<FacebookLongLivedToken>;
  }

  return withOAuthResults({
    provider: AllPlatforms.FACEBOOK,
    async authorize(input) {
      rejectPkce("FACEBOOK", input.pkce);
      return {
        url: legacy.getAuthorizationUrl({ scopes: [...input.scopes], state: input.state }),
        state: input.state,
      };
    },
    async exchangeCode(input) {
      assertSecureOAuthState(AllPlatforms.FACEBOOK, input.state, input.expectedState);
      const shortLived = v.parse(
        facebookShortLivedTokenSchema,
        await legacy.exchangeCode(input.code),
      );
      const longLived = v.parse(
        facebookLongLivedTokenSchema,
        await legacy.exchangeForLongLived(shortLived.access_token),
      );
      return facebookTokenSet(
        longLived,
        {
          shortLived,
          longLived,
          credentialFamily: "facebook-login",
        },
        input.scopes,
      );
    },
    async refresh(input) {
      if (!input.accessToken) {
        throw new OAuthAdapterError("Facebook refresh requires an access token", {
          provider: AllPlatforms.FACEBOOK,
          phase: "refresh",
        });
      }
      const refreshed = await exchangeLongLivedToken({ accessToken: input.accessToken });
      return {
        ...refreshed,
        scopes: [...(input.scopes ?? refreshed.scopes)],
        providerData: {
          shortLived: { access_token: input.accessToken },
          longLived: refreshed.providerData,
          credentialFamily: "facebook-login",
        },
      };
    },
    exchangeLongLivedToken,
    async listPages(input: { accessToken: string }) {
      const pages = await legacy.getPageTokens(input.accessToken);
      return v.parse(v.array(pageTokenSchema), pages) as readonly PageToken[];
    },
    async getUserProfile(input: { accessToken: string; id?: string }) {
      return legacy.getUserProfile(input.accessToken, input.id);
    },
    async getPage(input: { accessToken: string; pageId: string }) {
      return legacy.getPageInformation(input.accessToken, input.pageId);
    },
  });
}

function instagramTokenSet(
  shortLived: InstagramShortLivedToken,
  longLived: InstagramLongLivedToken,
  scopes: readonly InstagramLoginOAuthScope[] = [],
): OAuthTokenSet<GraphOAuthData<InstagramShortLivedToken, InstagramLongLivedToken>> {
  return {
    accessToken: longLived.access_token,
    tokenType: longLived.token_type,
    scopes: [...scopes],
    accessTokenExpiresAt: tokenExpiry(longLived.expires_in),
    providerData: { shortLived, longLived, credentialFamily: "instagram-login" },
  };
}

/** Normalized OAuth adapter for Instagram Login. */
export function createInstagramOAuthAdapter(config: InstagramOAuthConfig): OAuthAdapterWithResults<
  GraphOAuthData<InstagramShortLivedToken, InstagramLongLivedToken>,
  InstagramLoginOAuthScope
> & {
  getProfile(input: { accessToken: string; id?: string }): Promise<InstagramBusinessUserProfile>;
} {
  const legacy = createInstagramOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.INSTAGRAM,
    async authorize(input) {
      rejectPkce("INSTAGRAM", input.pkce);
      return {
        url: legacy.getAuthorizationUrl({ scopes: [...input.scopes], state: input.state }),
        state: input.state,
      };
    },
    async exchangeCode(input) {
      assertSecureOAuthState(AllPlatforms.INSTAGRAM, input.state, input.expectedState);
      const shortLived = v.parse(
        instagramShortLivedTokenSchema,
        await legacy.exchangeCode(input.code),
      );
      const longLived = v.parse(
        instagramLongLivedTokenSchema,
        await legacy.exchangeForLongLived(shortLived.access_token),
      );
      return instagramTokenSet(shortLived, longLived, input.scopes);
    },
    async refresh(input) {
      if (!input.accessToken) {
        throw new OAuthAdapterError("Instagram refresh requires an access token", {
          provider: AllPlatforms.INSTAGRAM,
          phase: "refresh",
        });
      }
      const longLived = v.parse(
        instagramLongLivedTokenSchema,
        await legacy.refreshToken(input.accessToken),
      );
      return instagramTokenSet(
        { access_token: input.accessToken, user_id: "unknown" },
        longLived,
        input.scopes,
      );
    },
    async getProfile(input: { accessToken: string; id?: string }) {
      return legacy.getBusinessUserProfile(input.accessToken, input.id);
    },
  });
}

/** Normalized OAuth adapter for Threads Login. */
export function createThreadsOAuthAdapter(config: ThreadsOAuthConfig): OAuthAdapterWithResults<
  GraphOAuthData<ThreadsShortLivedToken, ThreadsLongLivedToken>,
  ThreadsOAuthScope
> & {
  getProfile(input: { accessToken: string; id?: string }): Promise<ThreadsUserProfile>;
} {
  const legacy = createThreadsOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.THREADS,
    async authorize(input) {
      if (!input.pkce) {
        throw new OAuthAdapterError("Threads OAuth requires PKCE", {
          provider: AllPlatforms.THREADS,
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
      assertSecureOAuthState(AllPlatforms.THREADS, input.state, input.expectedState);
      if (!input.codeVerifier) {
        throw new OAuthAdapterError("Threads OAuth requires a code verifier", {
          provider: AllPlatforms.THREADS,
          phase: "exchange",
        });
      }
      const shortLived = v.parse(
        threadsShortLivedTokenSchema,
        await legacy.exchangeCode(input.code, input.codeVerifier),
      );
      const longLived = v.parse(
        threadsLongLivedTokenSchema,
        await legacy.exchangeForLongLived(shortLived.access_token),
      );
      return {
        accessToken: longLived.access_token,
        tokenType: longLived.token_type,
        scopes: [...(input.scopes ?? [])],
        accessTokenExpiresAt: tokenExpiry(longLived.expires_in),
        providerData: { shortLived, longLived, credentialFamily: "threads-login" },
      };
    },
    async refresh(input) {
      if (!input.accessToken) {
        throw new OAuthAdapterError("Threads refresh requires an access token", {
          provider: AllPlatforms.THREADS,
          phase: "refresh",
        });
      }
      const longLived = v.parse(
        threadsLongLivedTokenSchema,
        await legacy.refreshToken(input.accessToken),
      );
      return {
        accessToken: longLived.access_token,
        tokenType: longLived.token_type,
        scopes: [...(input.scopes ?? [])],
        accessTokenExpiresAt: tokenExpiry(longLived.expires_in),
        providerData: {
          shortLived: { access_token: input.accessToken, user_id: "unknown" },
          longLived,
          credentialFamily: "threads-login",
        },
      };
    },
    async getProfile(input: { accessToken: string; id?: string }) {
      return legacy.getUserProfile(input.accessToken, input.id);
    },
  });
}
