// Auto-generated client for Targeting recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SBTargetingGetNegativeBrandsResponse } from "../types.ts";
import type { GetSBTargetingGetNegativeBrandsParams } from "../params.ts";

/** Targeting recommendations — 1 endpoints */
export function createTargetingRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** SBTargetingGetNegativeBrands */
    async getSBTargetingGetNegativeBrands(params: GetSBTargetingGetNegativeBrandsParams): Promise<SBTargetingGetNegativeBrandsResponse> {
      const query = params;
      const envelope = await api.get<SBTargetingGetNegativeBrandsResponse>(`/sb/negativeTargets/brands/recommendations`, query);
      return envelope;
    },
  };
}
