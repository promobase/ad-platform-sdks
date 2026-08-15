// @generated
// fingerprint: sha256:83a12bc36648727fce2c48dcaba8c1a66dc1f4792aa98707f539e267fc5d78eb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for SB Optimization Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostSBOptimizationRecommendationParams } from "../params.ts";

/** SB Optimization Recommendations — 1 endpoints */
export function createSbOptimizationRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** SBOptimizationRecommendation */
    async postSBOptimizationRecommendation(params: PostSBOptimizationRecommendationParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/recommendations/optimization`, rest);
      return envelope;
    },
  };
}
