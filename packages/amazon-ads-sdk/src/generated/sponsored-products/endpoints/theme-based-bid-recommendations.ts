// @generated
// fingerprint: sha256:b3bc514110e3fdc803a8d46d226857e879f95113445e58e763e511ee126106bc
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Theme-based bid recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetThemeBasedBidRecommendationForAdGroupV1Response } from "../types.ts";
import type { GetThemeBasedBidRecommendationForAdGroupV1Params } from "../params.ts";

/** Theme-based bid recommendations — 1 endpoints */
export function createThemeBasedBidRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Get bid recommendations for ad groups */
    async getThemeBasedBidRecommendationForAdGroup_v1(params: GetThemeBasedBidRecommendationForAdGroupV1Params): Promise<GetThemeBasedBidRecommendationForAdGroupV1Response> {
      const { body, ...query } = params;
      const envelope = await api.post<GetThemeBasedBidRecommendationForAdGroupV1Response>(`/sp/targets/bid/recommendations`, body);
      return envelope;
    },
  };
}
