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
