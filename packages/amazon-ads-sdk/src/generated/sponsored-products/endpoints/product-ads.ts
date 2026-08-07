// Auto-generated client for Product ads — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsProductAdsResponse } from "../types.ts";
import type { CreateSponsoredProductsProductAdParams, UpdateSponsoredProductsProductAdParams, DeleteSponsoredProductsProductAdParams, ListSponsoredProductsProductAdsParams } from "../params.ts";

/** Product ads — 4 endpoints */
export function createProductAdsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsProductAds */
    async createSponsoredProductsProductAd(params: CreateSponsoredProductsProductAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/productAds`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsProductAds */
    async updateSponsoredProductsProductAd(params: UpdateSponsoredProductsProductAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/productAds`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsProductAds */
    async deleteSponsoredProductsProductAd(params: DeleteSponsoredProductsProductAdParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/productAds/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsProductAds */
    async listSponsoredProductsProductAds(params: ListSponsoredProductsProductAdsParams): Promise<ListSponsoredProductsProductAdsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsProductAdsResponse>(`/sp/productAds/list`, rest);
      return envelope;
    },
  };
}
