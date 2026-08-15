// @generated
// fingerprint: sha256:9386f28ed7cc326943bd7d0650a1b346f699a2bc23f0ec5069205fcb30da9086
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for lenses — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Campaign, Adsquad, LensPreview, Creative, Ad, LifetimeStat, CreateCampaignParams, CreateAdsquadParams, GetMediaLensPreviewParams, CreateCreativParams, CreateAdParams, GetAdsquadStatsParams } from "../types/lenses.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — lenses */
export function createLensesClient(api: SnapchatApiClient) {
  return {
    /** Example - Creating a Campaign ​ */
    async createCampaign(params: CreateCampaignParams): Promise<Campaign> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/campaigns`, { campaigns: [{ ...rest }] });
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** Example 1 - Setting up an Ad Squad with automatic placement ​ */
    async createAdsquad(params: CreateAdsquadParams): Promise<Adsquad> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/adsquads`, { adsquads: [{ ...rest }] });
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** Example - Fetching Lens Preview files ​ */
    getMediaLensPreview(params: GetMediaLensPreviewParams): SnapchatCursor<LensPreview> {
      const { mediaId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/media/${mediaId}/lens_preview`, link ? undefined : query).then((envelope) => ({
          items: unpack<LensPreview>(envelope, "lens_preview", "lens_preview"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** lenses */
    async createCreativ(params: CreateCreativParams): Promise<Creative> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/creatives`, { creatives: [{ ...rest }] });
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** lenses */
    async createAd(params: CreateAdParams): Promise<Ad> {
      const { adSquadId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}/ads`, { ads: [{ ...rest }] });
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },

    /** lenses */
    async getAdsquadStats(params: GetAdsquadStatsParams): Promise<LifetimeStat> {
      const { adsquadId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adsquadId}/stats`, query);
      return ensureOne<LifetimeStat>(unpack<LifetimeStat>(envelope, "lifetime_stats", "lifetime_stat"), "LifetimeStat");
    },
  };
}
