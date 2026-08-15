// @generated
// fingerprint: sha256:ac72e6953b591bf577e8aa3ab7116beed97f05777c5e87109ebe520cc53e59be
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for snap-pixel — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Pixel, Adsquad, TimeseriesStat, TotalStat, Stats, ListPixelsParams, ListPixels2Params, GetPixelParams, UpdatePixelParams, UpdatePixel2Params, GetCampaignStatsParams, GetAdsquadStatsParams, GetAdStatsParams, GetDomainStatsParams, GetPixelStatsParams } from "../types/snap-pixel.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — snap-pixel */
export function createSnapPixelClient(api: SnapchatApiClient) {
  return {
    /** snap-pixel */
    listPixels(params: ListPixelsParams): SnapchatCursor<Pixel> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/pixels`, link ? undefined : query).then((envelope) => ({
          items: unpack<Pixel>(envelope, "pixels", "pixel"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** snap-pixel */
    listPixels2(params: ListPixels2Params): SnapchatCursor<Pixel> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/pixels`, link ? undefined : query).then((envelope) => ({
          items: unpack<Pixel>(envelope, "pixels", "pixel"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** snap-pixel */
    async getPixel(params: GetPixelParams): Promise<Pixel> {
      const { pIXELID, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/pixels/${pIXELID}`, query);
      return ensureOne<Pixel>(unpack<Pixel>(envelope, "pixels", "pixel"), "Pixel");
    },

    /** snap-pixel */
    async updatePixel(params: UpdatePixelParams): Promise<Pixel> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/pixels`, rest);
      return ensureOne<Pixel>(unpack<Pixel>(envelope, "pixels", "pixel"), "Pixel");
    },

    /** snap-pixel */
    async updatePixel2(params: UpdatePixel2Params): Promise<Adsquad> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/pixels`, { adsquads: [{ ...rest }] });
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** snap-pixel */
    async getCampaignStats(params: GetCampaignStatsParams): Promise<TimeseriesStat> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/stats`, query);
      return ensureOne<TimeseriesStat>(unpack<TimeseriesStat>(envelope, "timeseries_stats", "timeseries_stat"), "TimeseriesStat");
    },

    /** snap-pixel */
    async getAdsquadStats(params: GetAdsquadStatsParams): Promise<TotalStat> {
      const { adsquadId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adsquadId}/stats`, query);
      return ensureOne<TotalStat>(unpack<TotalStat>(envelope, "total_stats", "total_stat"), "TotalStat");
    },

    /** snap-pixel */
    async getAdStats(params: GetAdStatsParams): Promise<TimeseriesStat> {
      const { adId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/ads/${adId}/stats`, query);
      return ensureOne<TimeseriesStat>(unpack<TimeseriesStat>(envelope, "timeseries_stats", "timeseries_stat"), "TimeseriesStat");
    },

    /** snap-pixel */
    async getDomainStats(params: GetDomainStatsParams): Promise<TimeseriesStat> {
      const { pixelId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/pixels/${pixelId}/domains/stats`, query);
      return ensureOne<TimeseriesStat>(unpack<TimeseriesStat>(envelope, "timeseries_stats", "timeseries_stat"), "TimeseriesStat");
    },

    /** snap-pixel */
    async getPixelStats(params: GetPixelStatsParams): Promise<Stats[]> {
      const { pixelId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/pixels/${pixelId}/stats`, query);
      return unpack<Stats>(envelope, "stats", "stats");
    },
  };
}
