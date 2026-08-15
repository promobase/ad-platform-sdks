// @generated
// fingerprint: sha256:1a44a0071a9fc2fcd5d5d5998883fe7005f72becc0c7e79f71693e3cc3e632ec
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Targeting Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetTargetRecommendationsResponse } from "../types.ts";
import type { GetTargetBidRecommendationsParams, GetTargetRecommendationsParams } from "../params.ts";

/** Targeting Recommendations — 2 endpoints */
export function createTargetingRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Returns a set of bid recommendations for targeting clauses */
    async getTargetBidRecommendations(params: GetTargetBidRecommendationsParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sd/targets/bid/recommendations`, rest);
      return envelope;
    },

    /** Returns a set of recommended products and categories to target */
    async getTargetRecommendations(params: GetTargetRecommendationsParams): Promise<GetTargetRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetTargetRecommendationsResponse>(`/sd/targets/recommendations`, rest);
      return envelope;
    },
  };
}
