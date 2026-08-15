// @generated
// fingerprint: sha256:0beab445609abab9392c81a1a340c86b3c399f7824851fb18f05c9e63e96a367
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Multi Country Theme-based bid recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Response } from "../types.ts";
import type { GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Params } from "../params.ts";

/** Multi Country Theme-based bid recommendations — 1 endpoints */
export function createMultiCountryThemeBasedBidRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Get bid recommendations for multi-country ad groups */
    async getMultiCountryThemeBasedBidRecommendationForAdGroup_v1(params: GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Params): Promise<GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Response> {
      const { body, ...query } = params;
      const envelope = await api.post<GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Response>(`/sp/global/targets/bid/recommendations`, body);
      return envelope;
    },
  };
}
