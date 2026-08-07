// Auto-generated client for TargetPromotionGroups — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { CreateTargetPromotionGroupsResponse, ListTargetPromotionGroupsResponse, GetTargetPromotionGroupsRecommendationsResponse, ListTargetPromotionGroupTargetsResponse } from "../types.ts";
import type { CreateTargetPromotionGroupParams, ListTargetPromotionGroupsParams, GetTargetPromotionGroupsRecommendationsParams, CreateTargetPromotionGroupTargetParams, ListTargetPromotionGroupTargetsParams } from "../params.ts";

/** TargetPromotionGroups — 5 endpoints */
export function createTargetpromotiongroupsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateTargetPromotionGroups */
    async createTargetPromotionGroup(params: CreateTargetPromotionGroupParams): Promise<CreateTargetPromotionGroupsResponse> {
      const rest = params;
      const envelope = await api.post<CreateTargetPromotionGroupsResponse>(`/sp/targetPromotionGroups`, rest);
      return envelope;
    },

    /** ListTargetPromotionGroups */
    async listTargetPromotionGroups(params: ListTargetPromotionGroupsParams): Promise<ListTargetPromotionGroupsResponse> {
      const rest = params;
      const envelope = await api.post<ListTargetPromotionGroupsResponse>(`/sp/targetPromotionGroups/list`, rest);
      return envelope;
    },

    /** GetTargetPromotionGroupsRecommendations */
    async getTargetPromotionGroupsRecommendations(params: GetTargetPromotionGroupsRecommendationsParams): Promise<GetTargetPromotionGroupsRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetTargetPromotionGroupsRecommendationsResponse>(`/sp/targetPromotionGroups/recommendations`, rest);
      return envelope;
    },

    /** CreateTargetPromotionGroupTargets */
    async createTargetPromotionGroupTarget(params: CreateTargetPromotionGroupTargetParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/targetPromotionGroups/targets`, rest);
      return envelope;
    },

    /** ListTargetPromotionGroupTargets */
    async listTargetPromotionGroupTargets(params: ListTargetPromotionGroupTargetsParams): Promise<ListTargetPromotionGroupTargetsResponse> {
      const rest = params;
      const envelope = await api.post<ListTargetPromotionGroupTargetsResponse>(`/sp/targetPromotionGroups/targets/list`, rest);
      return envelope;
    },
  };
}
