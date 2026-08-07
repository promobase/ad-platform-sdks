// Auto-generated client for Pixels — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { Pixel } from "../types.ts";
import type { ListPixelsbyaccountParams, ListPixelsbybusinessParams, GetPixelapplastfiredatParams, GetPixellastfiredatParams } from "../params.ts";

/** Pixels — 4 endpoints */
export function createPixelsClient(api: RedditApiClient) {
  return {
    /** List pixels by account */
    async listPixelsbyaccount(params: ListPixelsbyaccountParams): Promise<Pixel[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/pixels`, query);
      return envelope.data as Pixel[];
    },

    /** List pixels by business */
    async listPixelsbybusiness(params: ListPixelsbybusinessParams): Promise<Pixel[]> {
      const { businessId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/businesses/${businessId}/pixels`, query);
      return envelope.data as Pixel[];
    },

    /** Get pixel app last fired time */
    async getPixelapplastfiredat(params: GetPixelapplastfiredatParams): Promise<{
  last_fired_at?: string;
}> {
      const { pixelId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/pixels/${pixelId}/app_last_fired_at`, query);
      return envelope.data as {
  last_fired_at?: string;
};
    },

    /** Get pixel last fired time */
    async getPixellastfiredat(params: GetPixellastfiredatParams): Promise<{
  last_fired_at?: string;
}> {
      const { pixelId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/pixels/${pixelId}/last_fired_at`, query);
      return envelope.data as {
  last_fired_at?: string;
};
    },
  };
}
