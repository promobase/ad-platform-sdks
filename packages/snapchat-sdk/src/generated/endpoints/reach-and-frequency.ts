// Auto-generated client for reach-and-frequency — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Campaign, ReservedForecasting, Adsquad, CreateCampaignParams, CreateReservedForecastingParams, CreateAdsquadParams, UpdateAdsquadParams } from "../types/reach-and-frequency.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — reach-and-frequency */
export function createReachAndFrequencyClient(api: SnapchatApiClient) {
  return {
    /** reach-and-frequency */
    async createCampaign(params: CreateCampaignParams): Promise<Campaign> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/campaigns`, { campaigns: [{ ...rest }] });
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** reach-and-frequency */
    async createReservedForecasting(params: CreateReservedForecastingParams): Promise<ReservedForecasting> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/reserved_forecasting`, { adsquads: [{ ...rest }] });
      return ensureOne<ReservedForecasting>(unpack<ReservedForecasting>(envelope, "reserved_forecasting", "reserved_forecasting"), "ReservedForecasting");
    },

    /** reach-and-frequency */
    async createAdsquad(params: CreateAdsquadParams): Promise<Adsquad> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/adsquads`, rest);
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** reach-and-frequency */
    async updateAdsquad(params: UpdateAdsquadParams): Promise<Adsquad> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/adsquads`, rest);
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },
  };
}
