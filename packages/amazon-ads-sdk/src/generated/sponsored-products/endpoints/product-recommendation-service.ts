// @generated
// fingerprint: sha256:0fcec352cca3b66de139a4250f36c4114d0a025d2c9d6b349b1c07720b5cbdbd
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Product Recommendation Service — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetProductRecommendationsResponse } from "../types.ts";
import type { GetProductRecommendationsParams } from "../params.ts";

/** Product Recommendation Service — 1 endpoints */
export function createProductRecommendationServiceClient(api: AmazonAdsApiClient) {
  return {
    /** Suggested target ASINs for your advertised product */
    async getProductRecommendations(params: GetProductRecommendationsParams): Promise<GetProductRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetProductRecommendationsResponse>(`/sp/targets/products/recommendations`, rest);
      return envelope;
    },
  };
}
