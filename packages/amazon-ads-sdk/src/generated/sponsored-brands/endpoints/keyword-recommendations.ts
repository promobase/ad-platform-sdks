// @generated
// fingerprint: sha256:876a2a5765419755a0322f4ce61c83ccae70f3a9390cc170936b14e2be264ab5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Keyword Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { GetKeywordRecommendationsParams } from "../params.ts";

/** Keyword Recommendations — 1 endpoints */
export function createKeywordRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Gets keyword recommendations */
    async getKeywordRecommendations(params: GetKeywordRecommendationsParams): Promise<unknown> {
      const { body, ...query } = params;
      const envelope = await api.post<unknown>(`/sb/recommendations/keyword`, body);
      return envelope;
    },
  };
}
