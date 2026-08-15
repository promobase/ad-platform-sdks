// @generated
// fingerprint: sha256:f87b9b59d11b51667fecfeac4269e25dfcada0161f82026701c70821cb1f412d
// DO NOT EDIT: generated file; changes will be overwritten.
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
