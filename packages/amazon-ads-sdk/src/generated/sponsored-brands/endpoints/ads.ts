// Auto-generated client for Ads — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredBrandsAdsResponse } from "../types.ts";
import type { UpdateSponsoredBrandsAutoCollectionAdParams, UpdateSponsoredBrandsManualCollectionAdParams, UpdateSponsoredBrandsAdParams, CreateSponsoredBrandsAutoCollectionAdParams, CreateSponsoredBrandsBrandVideoAdParams, DeleteSponsoredBrandsAdParams, ListSponsoredBrandsAdsParams, CreateSponsoredBrandsManualCollectionAdParams, CreateSponsoredBrandsProductCollectionAdParams, CreateSponsoredBrandsExtendedProductCollectionAdParams, CreateSponsoredBrandStoreSpotlightAdParams, CreateSponsoredBrandsVideoAdParams } from "../params.ts";

/** Ads — 12 endpoints */
export function createAdsClient(api: AmazonAdsApiClient) {
  return {
    /** UpdateSponsoredBrandsAutoCollectionAds */
    async updateSponsoredBrandsAutoCollectionAd(params: UpdateSponsoredBrandsAutoCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/ads/creatives/autoCollection`, rest);
      return envelope;
    },

    /** UpdateSponsoredBrandsManualCollectionAds */
    async updateSponsoredBrandsManualCollectionAd(params: UpdateSponsoredBrandsManualCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/ads/creatives/manualCollection`, rest);
      return envelope;
    },

    /** Updates Sponsored Brands ads. */
    async updateSponsoredBrandsAd(params: UpdateSponsoredBrandsAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sb/v4/ads`, rest);
      return envelope;
    },

    /** CreateSponsoredBrandsAutoCollectionAds */
    async createSponsoredBrandsAutoCollectionAd(params: CreateSponsoredBrandsAutoCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/autoCollection`, rest);
      return envelope;
    },

    /** Creates Sponsored Brands brand video ads. */
    async createSponsoredBrandsBrandVideoAd(params: CreateSponsoredBrandsBrandVideoAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/brandVideo`, rest);
      return envelope;
    },

    /** Deletes Sponsored Brands ads. */
    async deleteSponsoredBrandsAd(params: DeleteSponsoredBrandsAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/delete`, rest);
      return envelope;
    },

    /** Lists Sponsored Brands ads. */
    async listSponsoredBrandsAds(params: ListSponsoredBrandsAdsParams): Promise<ListSponsoredBrandsAdsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredBrandsAdsResponse>(`/sb/v4/ads/list`, rest);
      return envelope;
    },

    /** CreateSponsoredBrandsManualCollectionAds */
    async createSponsoredBrandsManualCollectionAd(params: CreateSponsoredBrandsManualCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/manualCollection`, rest);
      return envelope;
    },

    /** Creates Sponsored Brands product collection ads. */
    async createSponsoredBrandsProductCollectionAd(params: CreateSponsoredBrandsProductCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/productCollection`, rest);
      return envelope;
    },

    /** Creates Sponsored Brands product collection ads with collection of custom images[1-5]. */
    async createSponsoredBrandsExtendedProductCollectionAd(params: CreateSponsoredBrandsExtendedProductCollectionAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/productCollectionExtended`, rest);
      return envelope;
    },

    /** Creates Sponsored Brands store spotlight ads. */
    async createSponsoredBrandStoreSpotlightAd(params: CreateSponsoredBrandStoreSpotlightAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/storeSpotlight`, rest);
      return envelope;
    },

    /** Creates Sponsored Brands video ads. */
    async createSponsoredBrandsVideoAd(params: CreateSponsoredBrandsVideoAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/ads/video`, rest);
      return envelope;
    },
  };
}
