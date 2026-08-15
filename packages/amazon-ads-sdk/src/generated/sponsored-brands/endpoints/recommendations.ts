// @generated
// fingerprint: sha256:4c9e13692fb8ca0b560f593e69f0ae34525d45198f15729d0bdbb813212f8a5e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetHeadlineRecommendationsResponse } from "../types.ts";
import type { GetHeadlineRecommendationsParams } from "../params.ts";

/** Recommendations — 1 endpoints */
export function createRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** getHeadlineRecommendations */
    async getHeadlineRecommendations(params: GetHeadlineRecommendationsParams): Promise<GetHeadlineRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetHeadlineRecommendationsResponse>(`/sb/recommendations/creative/headline`, rest);
      return envelope;
    },
  };
}
