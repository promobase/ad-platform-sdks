// @generated
// fingerprint: sha256:4b28bcdc6d965c7c9743fa7dd795f5af174ba21ba16e6f66cc6d61e42722e890
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Budget Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { GetSDBudgetRecommendationsParams } from "../params.ts";

/** Budget Recommendations — 1 endpoints */
export function createBudgetRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Returns recommended daily budget and estimated missed opportunities for campaigns */
    async getSDBudgetRecommendations(params: GetSDBudgetRecommendationsParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sd/campaigns/budgetRecommendations`, rest);
      return envelope;
    },
  };
}
