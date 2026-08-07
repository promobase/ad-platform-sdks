// Auto-generated client for Saved Audiences — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { SavedAudience } from "../types.ts";
import type { ListSavedaudiencesParams, GetSavedaudienceParams } from "../params.ts";

/** Saved Audiences — 2 endpoints */
export function createSavedAudiencesClient(api: RedditApiClient) {
  return {
    /** List saved audiences */
    async listSavedaudiences(params: ListSavedaudiencesParams): Promise<SavedAudience[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/saved_audiences`, query);
      return envelope.data as SavedAudience[];
    },

    /** Get saved audience */
    async getSavedaudience(params: GetSavedaudienceParams): Promise<SavedAudience> {
      const { accountId, audienceId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/saved_audiences/${audienceId}`, query);
      return envelope.data as SavedAudience;
    },
  };
}
