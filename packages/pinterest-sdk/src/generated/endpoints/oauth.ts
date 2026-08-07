// Auto-generated client for oauth — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { OauthConversionTokenResponse, OauthTokenResponse } from "../types.ts";
import type { PostOauthConversionTokenParams, PostOauthTokenParams, PostTokenRevokeParams } from "../params.ts";

/** oauth — 3 endpoints */
export function createOauthClient(api: PinterestApiClient) {
  return {
    /** Generate OAuth access token for conversion API
   * Requires pinterest_oauth2: ads:write. */
    async postOauthConversionToken(params: PostOauthConversionTokenParams): Promise<OauthConversionTokenResponse> {
      const rest = params;
      const envelope = await api.post<OauthConversionTokenResponse>(`/oauth/conversion_token`, undefined);
      return envelope;
    },

    /** Generate OAuth access token */
    async postOauthToken(params: PostOauthTokenParams): Promise<OauthTokenResponse> {
      const rest = params;
      const envelope = await api.post<OauthTokenResponse>(`/oauth/token`, undefined);
      return envelope;
    },

    /** Revoke a token */
    async postTokenRevoke(params: PostTokenRevokeParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/oauth/token/revoke`, undefined);
      return envelope;
    },
  };
}
