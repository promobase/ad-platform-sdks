// @generated
// fingerprint: sha256:dfd1b1e593c098984cc95153e2a82065df63d76e80e0af4808b0da5d47dbda8e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Creatives — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { CreateBrandVideoCreativeResponse, ListCreativesResponse, CreateProductCollectionCreativeResponse, CreateExtendedProductCollectionCreativeResponse, CreateStoreSpotlightCreativeResponse, CreateVideoCreativeResponse } from "../types.ts";
import type { CreateBrandVideoCreativeParams, ListCreativesParams, CreateProductCollectionCreativeParams, CreateExtendedProductCollectionCreativeParams, CreateStoreSpotlightCreativeParams, CreateVideoCreativeParams } from "../params.ts";

/** Ad Creatives — 6 endpoints */
export function createAdCreativesClient(api: AmazonAdsApiClient) {
  return {
    /** CreateBrandVideoCreative */
    async createBrandVideoCreative(params: CreateBrandVideoCreativeParams): Promise<CreateBrandVideoCreativeResponse> {
      const rest = params;
      const envelope = await api.post<CreateBrandVideoCreativeResponse>(`/sb/ads/creatives/brandVideo`, rest);
      return envelope;
    },

    /** ListCreatives */
    async listCreatives(params: ListCreativesParams): Promise<ListCreativesResponse> {
      const rest = params;
      const envelope = await api.post<ListCreativesResponse>(`/sb/ads/creatives/list`, rest);
      return envelope;
    },

    /** CreateProductCollectionCreative */
    async createProductCollectionCreative(params: CreateProductCollectionCreativeParams): Promise<CreateProductCollectionCreativeResponse> {
      const rest = params;
      const envelope = await api.post<CreateProductCollectionCreativeResponse>(`/sb/ads/creatives/productCollection`, rest);
      return envelope;
    },

    /** CreateExtendedProductCollectionCreative */
    async createExtendedProductCollectionCreative(params: CreateExtendedProductCollectionCreativeParams): Promise<CreateExtendedProductCollectionCreativeResponse> {
      const rest = params;
      const envelope = await api.post<CreateExtendedProductCollectionCreativeResponse>(`/sb/ads/creatives/productCollectionExtended`, rest);
      return envelope;
    },

    /** CreateStoreSpotlightCreative */
    async createStoreSpotlightCreative(params: CreateStoreSpotlightCreativeParams): Promise<CreateStoreSpotlightCreativeResponse> {
      const rest = params;
      const envelope = await api.post<CreateStoreSpotlightCreativeResponse>(`/sb/ads/creatives/storeSpotlight`, rest);
      return envelope;
    },

    /** CreateVideoCreative */
    async createVideoCreative(params: CreateVideoCreativeParams): Promise<CreateVideoCreativeResponse> {
      const rest = params;
      const envelope = await api.post<CreateVideoCreativeResponse>(`/sb/ads/creatives/video`, rest);
      return envelope;
    },
  };
}
