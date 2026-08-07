// Auto-generated client for Custom Audiences — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { CustomAudience, CustomAudienceCreate, CustomAudienceUsersUpdate } from "../types.ts";
import type { ListCustomaudiencesParams, CreateCustomaudienceParams, GetCustomaudienceParams, UpdateCustomaudienceusersParams } from "../params.ts";

/** Custom Audiences — 4 endpoints */
export function createCustomAudiencesClient(api: RedditApiClient) {
  return {
    /** List custom audiences */
    async listCustomaudiences(params: ListCustomaudiencesParams): Promise<CustomAudience[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/custom_audiences`, query);
      return envelope.data as CustomAudience[];
    },

    /** Create custom audience */
    async createCustomaudience(params: CreateCustomaudienceParams): Promise<CustomAudience> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/custom_audiences`, rest);
      return envelope.data as CustomAudience;
    },

    /** Get custom audience */
    async getCustomaudience(params: GetCustomaudienceParams): Promise<CustomAudience> {
      const { accountId, audienceId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/custom_audiences/${audienceId}`, query);
      return envelope.data as CustomAudience;
    },

    /** Add or remove users from audience */
    async updateCustomaudienceusers(params: UpdateCustomaudienceusersParams): Promise<{
  message?: string;
}> {
      const { audienceId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/custom_audiences/${audienceId}/users`, rest);
      return envelope.data as {
  message?: string;
};
    },
  };
}
