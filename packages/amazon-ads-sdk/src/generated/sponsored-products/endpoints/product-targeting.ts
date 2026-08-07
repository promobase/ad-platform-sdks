// Auto-generated client for Product Targeting — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetNegativeBrandsResponse, SearchBrandsResponse, GetTargetableCategoriesResponse, GetCategoryRecommendationsForASINsResponse, GetRefinementsForCategoryResponse, GetTargetableASINCountsResponse } from "../types.ts";
import type { ListNegativeBrandsParams, PostSearchBrandsParams, GetTargetableCategoriesParams, GetCategoryRecommendationsForASINsParams, GetRefinementsForCategoryParams, GetTargetableASINCountsParams } from "../params.ts";

/** Product Targeting — 6 endpoints */
export function createProductTargetingClient(api: AmazonAdsApiClient) {
  return {
    /** Returns brands recommended for negative targeting. */
    async listNegativeBrands(params: ListNegativeBrandsParams): Promise<GetNegativeBrandsResponse> {
      const query = params;
      const envelope = await api.get<GetNegativeBrandsResponse>(`/sp/negativeTargets/brands/recommendations`, query);
      return envelope;
    },

    /** Returns brands related to keyword input for negative targeting. */
    async postSearchBrands(params: PostSearchBrandsParams): Promise<SearchBrandsResponse> {
      const rest = params;
      const envelope = await api.post<SearchBrandsResponse>(`/sp/negativeTargets/brands/search`, rest);
      return envelope;
    },

    /** Returns all targetable categories. */
    async getTargetableCategories(params: GetTargetableCategoriesParams): Promise<GetTargetableCategoriesResponse> {
      const query = params;
      const envelope = await api.get<GetTargetableCategoriesResponse>(`/sp/targets/categories`, query);
      return envelope;
    },

    /** Returns a list of category recommendations for the input list of ASINs. */
    async getCategoryRecommendationsForASINs(params: GetCategoryRecommendationsForASINsParams): Promise<GetCategoryRecommendationsForASINsResponse> {
      const rest = params;
      const envelope = await api.post<GetCategoryRecommendationsForASINsResponse>(`/sp/targets/categories/recommendations`, rest);
      return envelope;
    },

    /** Returns refinements according to category input. */
    async getRefinementsForCategory(params: GetRefinementsForCategoryParams): Promise<GetRefinementsForCategoryResponse> {
      const { categoryId, ...query } = params;
      const envelope = await api.get<GetRefinementsForCategoryResponse>(`/sp/targets/category/${categoryId}/refinements`, query);
      return envelope;
    },

    /** Get number of targetable asins based on refinements provided by the user. */
    async getTargetableASINCounts(params: GetTargetableASINCountsParams): Promise<GetTargetableASINCountsResponse> {
      const rest = params;
      const envelope = await api.post<GetTargetableASINCountsResponse>(`/sp/targets/products/count`, rest);
      return envelope;
    },
  };
}
