import {
  AllPlatforms,
  assertOAuthState,
  OAuthAdapterError,
  secondsFromNow,
  type OAuthAdapterWithResults,
  type OAuthTokenSet,
  withOAuthResults,
} from "@openpromo/sdk-runtime";
import * as v from "valibot";

import type { LinkedInOrganization } from "./account.ts";
import { createLinkedInClient } from "./client.ts";
import { createLinkedInOAuth, type LinkedInOAuthScope } from "./oauth.ts";
import type { LinkedInOAuthConfig, LinkedInTokenResponse, LinkedInUserInfo } from "./types.ts";

const tokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  refresh_token_expires_in: v.optional(v.number()),
  scope: v.optional(v.string()),
  token_type: v.string(),
});
const organizationSchema = v.object({
  id: v.number(),
  vanityName: v.optional(v.string()),
  localizedName: v.string(),
  localizedWebsite: v.optional(v.string()),
  primaryOrganizationType: v.optional(v.string()),
});

function tokenSet(raw: LinkedInTokenResponse): OAuthTokenSet<LinkedInTokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes: raw.scope?.split(" ").filter(Boolean) ?? [],
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    refreshTokenExpiresAt: secondsFromNow(raw.refresh_token_expires_in),
    providerData: raw,
  };
}

/** Normalized OAuth adapter for LinkedIn member and organization publishing. */
export function createLinkedInOAuthAdapter(config: LinkedInOAuthConfig): OAuthAdapterWithResults<
  LinkedInTokenResponse,
  LinkedInOAuthScope
> & {
  getUserInfo(input: { accessToken: string }): Promise<LinkedInUserInfo>;
  listOrganizations(input: { accessToken: string }): Promise<readonly LinkedInOrganization[]>;
} {
  const legacy = createLinkedInOAuth(config);
  return withOAuthResults({
    provider: AllPlatforms.LINKEDIN,
    async authorize(input) {
      if (input.pkce !== undefined) {
        throw new OAuthAdapterError("LinkedIn OAuth does not use PKCE", {
          provider: AllPlatforms.LINKEDIN,
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
        throw new OAuthAdapterError("LinkedIn refresh requires a refresh token", {
          provider: AllPlatforms.LINKEDIN,
          phase: "refresh",
        });
      }
      return tokenSet(v.parse(tokenSchema, await legacy.refreshToken(input.refreshToken)));
    },
    async getUserInfo(input: { accessToken: string }) {
      return legacy.getUserInfo(input.accessToken);
    },
    async listOrganizations(input: { accessToken: string }) {
      const client = createLinkedInClient({
        accessToken: input.accessToken,
        fetch: config.fetch,
      });
      const acls = await client.request<{
        elements?: ReadonlyArray<{ organization?: string }>;
      }>("/organizationAcls", {
        query: {
          q: "roleAssignee",
          role: "ADMINISTRATOR",
          state: "APPROVED",
        },
      });
      const organizations = await Promise.all(
        (acls.data.elements ?? [])
          .map((acl) => acl.organization?.replace("urn:li:organization:", ""))
          .filter((id): id is string => Boolean(id))
          .map(async (id) => {
            const response = await client.request<LinkedInOrganization>(`/organizations/${id}`);
            return v.parse(organizationSchema, response.data);
          }),
      );
      return organizations;
    },
  });
}
