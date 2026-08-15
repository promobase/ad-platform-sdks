// @generated
// fingerprint: sha256:e453b1326841035d77713615abc9813e4f59aeaf59d3769c2426f743e6223da0
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for measurement — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { AsyncStatsReport, TotalStat, LifetimeStat, GetAdaccountStatsParams, ListStatsReportParams, GetCampaignStatsParams, GetAdsquadStatsParams, GetAdStatsParams, GetCreativStatsParams, GetMediaStatsParams, GetAdsquadStats2Params, CreateLeadsReportParams, ListLeadsReportParams } from "../types/measurement.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — measurement */
export function createMeasurementClient(api: SnapchatApiClient) {
  return {
    /** Example I: Fetch Custom Conversions via event source ​ */
    getAdaccountStats(params: GetAdaccountStatsParams): SnapchatCursor<AsyncStatsReport> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/stats`, link ? undefined : query).then((envelope) => ({
          items: unpack<AsyncStatsReport>(envelope, "async_stats_reports", "async_stats_report"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** measurement */
    async listStatsReport(params: ListStatsReportParams): Promise<AsyncStatsReport> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/stats_report`, query);
      return ensureOne<AsyncStatsReport>(unpack<AsyncStatsReport>(envelope, "async_stats_reports", "async_stats_report"), "AsyncStatsReport");
    },

    /** measurement */
    async getCampaignStats(params: GetCampaignStatsParams): Promise<TotalStat> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/stats`, query);
      return ensureOne<TotalStat>(unpack<TotalStat>(envelope, "total_stats", "total_stat"), "TotalStat");
    },

    /** measurement */
    async getAdsquadStats(params: GetAdsquadStatsParams): Promise<TotalStat> {
      const { adsquadId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adsquadId}/stats`, query);
      return ensureOne<TotalStat>(unpack<TotalStat>(envelope, "total_stats", "total_stat"), "TotalStat");
    },

    /** measurement */
    async getAdStats(params: GetAdStatsParams): Promise<TotalStat> {
      const { adId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/ads/${adId}/stats`, query);
      return ensureOne<TotalStat>(unpack<TotalStat>(envelope, "total_stats", "total_stat"), "TotalStat");
    },

    /** Example 1 - Fetching LIFETIME metrics for a Creative ​ */
    async getCreativStats(params: GetCreativStatsParams): Promise<LifetimeStat> {
      const { creativeId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/creatives/${creativeId}/stats`, query);
      return ensureOne<LifetimeStat>(unpack<LifetimeStat>(envelope, "lifetime_stats", "lifetime_stat"), "LifetimeStat");
    },

    /** Example 1 - Fetching LIFETIME metrics for a VIDEO Media ​ */
    async getMediaStats(params: GetMediaStatsParams): Promise<LifetimeStat> {
      const { mediaId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/media/${mediaId}/stats`, query);
      return ensureOne<LifetimeStat>(unpack<LifetimeStat>(envelope, "lifetime_stats", "lifetime_stat"), "LifetimeStat");
    },

    /** measurement */
    async getAdsquadStats2(params: GetAdsquadStats2Params): Promise<LifetimeStat> {
      const { adsquadId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adsquadId}/stats`, query);
      return ensureOne<LifetimeStat>(unpack<LifetimeStat>(envelope, "lifetime_stats", "lifetime_stat"), "LifetimeStat");
    },

    /** measurement */
    async createLeadsReport(params: CreateLeadsReportParams): Promise<AsyncStatsReport> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/leads_report`, rest);
      return ensureOne<AsyncStatsReport>(unpack<AsyncStatsReport>(envelope, "async_stats_reports", "async_stats_report"), "AsyncStatsReport");
    },

    /** Example Lead Gen Report ​ */
    async listLeadsReport(params: ListLeadsReportParams): Promise<AsyncStatsReport> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/leads_report`, query);
      return ensureOne<AsyncStatsReport>(unpack<AsyncStatsReport>(envelope, "async_stats_reports", "async_stats_report"), "AsyncStatsReport");
    },
  };
}
