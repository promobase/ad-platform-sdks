// @generated
// fingerprint: sha256:748dd604a5c523aff36dff48952a919c5eaeac81abdf6842e866362a54f9cb5f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for authentication — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { AccessToken, CreateAccessTokenParams } from "../types/authentication.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — authentication */
export function createAuthenticationClient(api: SnapchatApiClient) {
  return {
    /** authentication */
    async createAccessToken(params: CreateAccessTokenParams): Promise<AccessToken> {
      const rest = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`https://accounts.snapchat.com/login/oauth2/access_token`, rest);
      return ensureOne<AccessToken>(unpack<AccessToken>(envelope, "access_token", "access_token"), "AccessToken");
    },
  };
}
