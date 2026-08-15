// @generated
// fingerprint: sha256:b5a478d2b4af9689f7386cc51076ca316f8a781fd9215a22c24a439e31a9964e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for dynamic-story-ads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Creative, Ad, CreateProductSearchParams, CreateCreativParams, CreateAdParams } from "../types/dynamic-story-ads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — dynamic-story-ads */
export function createDynamicStoryAdsClient(api: SnapchatApiClient) {
  return {
    /** dynamic-story-ads */
    async createProductSearch(params: CreateProductSearchParams): Promise<Creative> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_search`, rest);
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** dynamic-story-ads */
    async createCreativ(params: CreateCreativParams): Promise<Creative> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/creatives`, rest);
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** dynamic-story-ads */
    async createAd(params: CreateAdParams): Promise<Ad> {
      const { adSquadId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}/ads`, rest);
      return ensureOne<Ad>(unpack<Ad>(envelope, "ads", "ad"), "Ad");
    },
  };
}
