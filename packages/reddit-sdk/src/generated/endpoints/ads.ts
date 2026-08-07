// Auto-generated client for Ads — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { Ad, AdCreate, AdUpdate } from "../types.ts";
import type { ListAdsParams, CreateAdParams, GetAdParams, UpdateAdParams } from "../params.ts";

/** Ads — 4 endpoints */
export function createAdsClient(api: RedditApiClient) {
  return {
    /** List ads */
    async listAds(params: ListAdsParams): Promise<Ad[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/ads`, query);
      return envelope.data as Ad[];
    },

    /** Create ad */
    async createAd(params: CreateAdParams): Promise<Ad> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/ads`, rest);
      return envelope.data as Ad;
    },

    /** Get ad */
    async getAd(params: GetAdParams): Promise<Ad> {
      const { accountId, adId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/ads/${adId}`, query);
      return envelope.data as Ad;
    },

    /** Update ad */
    async updateAd(params: UpdateAdParams): Promise<Ad> {
      const { accountId, adId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/ads/${adId}`, rest);
      return envelope.data as Ad;
    },
  };
}
