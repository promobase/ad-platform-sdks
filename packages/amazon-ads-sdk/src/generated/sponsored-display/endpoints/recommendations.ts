// @generated
// fingerprint: sha256:d24fb6fefd08cea42c98455ac7f34c33895180b5c44910c78dbc9f5882afa578
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetHeadlineRecommendationsForSDResponse } from "../types.ts";
import type { GetHeadlineRecommendationsForSDParams } from "../params.ts";

/** Recommendations — 1 endpoints */
export function createRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** getHeadlineRecommendationsForSD */
    async getHeadlineRecommendationsForSD(params: GetHeadlineRecommendationsForSDParams): Promise<GetHeadlineRecommendationsForSDResponse> {
      const rest = params;
      const envelope = await api.post<GetHeadlineRecommendationsForSDResponse>(`/sd/recommendations/creative/headline`, rest);
      return envelope;
    },
  };
}
