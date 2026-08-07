// Auto-generated client for Product targeting categories — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SBTargetingGetTargetableCategoriesResponse, SBTargetingGetRefinementsForCategoryResponse, SBTargetingGetTargetableASINCountsResponse } from "../types.ts";
import type { GetSBTargetingGetTargetableCategoriesParams, GetSBTargetingGetRefinementsForCategoryParams, PostSBTargetingGetTargetableASINCountsParams } from "../params.ts";

/** Product targeting categories — 3 endpoints */
export function createProductTargetingCategoriesClient(api: AmazonAdsApiClient) {
  return {
    /** SBTargetingGetTargetableCategories */
    async getSBTargetingGetTargetableCategories(params: GetSBTargetingGetTargetableCategoriesParams): Promise<SBTargetingGetTargetableCategoriesResponse> {
      const query = params;
      const envelope = await api.get<SBTargetingGetTargetableCategoriesResponse>(`/sb/targets/categories`, query);
      return envelope;
    },

    /** SBTargetingGetRefinementsForCategory */
    async getSBTargetingGetRefinementsForCategory(params: GetSBTargetingGetRefinementsForCategoryParams): Promise<SBTargetingGetRefinementsForCategoryResponse> {
      const { categoryRefinementId, ...query } = params;
      const envelope = await api.get<SBTargetingGetRefinementsForCategoryResponse>(`/sb/targets/categories/${categoryRefinementId}/refinements`, query);
      return envelope;
    },

    /** SBTargetingGetTargetableASINCounts */
    async postSBTargetingGetTargetableASINCounts(params: PostSBTargetingGetTargetableASINCountsParams): Promise<SBTargetingGetTargetableASINCountsResponse> {
      const rest = params;
      const envelope = await api.post<SBTargetingGetTargetableASINCountsResponse>(`/sb/targets/products/count`, rest);
      return envelope;
    },
  };
}
