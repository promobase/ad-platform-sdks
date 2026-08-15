// @generated
// fingerprint: sha256:187e59af2ceebfa7f8fac8af679f94a440e5d0b4ebaf2bd313f4e9a8d02105db
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for ads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Ad, CreateAdParams, UpdateAdParams, ListAdsParams, ListAds2Params, ListAds3Params, GetAdParams, GetAdByIdsParams, DeleteAdParams } from "../types/ads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — ads */
export function createAdsClient(api: SnapchatApiClient) {
  return {
    /** Example - Create an Ad ​ */
    async createAd(params: CreateAdParams): Promise<Ad> {
      const { adSquadId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}/ads`, { ads: [{ ...rest }] });
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },

    /** Example - Update an Ad ​ */
    async updateAd(params: UpdateAdParams): Promise<Ad> {
      const { adSquadId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}/ads`, { ads: [{ ...rest }] });
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },

    /** Example - Get all Ads under an Ad Squad ​ */
    listAds(params: ListAdsParams): SnapchatCursor<Ad> {
      const { adSquadId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adsquads/${adSquadId}/ads`, link ? undefined : query).then((envelope) => ({
          items: unpack<Ad>(envelope, "ads", "ad"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Get all Ads under a Campaign ​ */
    listAds2(params: ListAds2Params): SnapchatCursor<Ad> {
      const { campaignId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/campaigns/${campaignId}/ads`, link ? undefined : query).then((envelope) => ({
          items: unpack<Ad>(envelope, "ads", "ad"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Get all Ads under an Ad Account ​ */
    listAds3(params: ListAds3Params): SnapchatCursor<Ad> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/ads`, link ? undefined : query).then((envelope) => ({
          items: unpack<Ad>(envelope, "ads", "ad"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Get a specific Ad ​ */
    async getAd(params: GetAdParams): Promise<Ad> {
      const { adId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/ads/${adId}`, query);
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },

    /** Example - Fetch Multiple Ads (POST) ​ */
    async getAdByIds(params: GetAdByIdsParams): Promise<Ad> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/get_ads_by_ids`, rest);
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },

    /** Example - Delete an Ad ​ */
    async deleteAd(params: DeleteAdParams): Promise<void> {
      const { adId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/ads/${adId}`);
    },
  };
}
