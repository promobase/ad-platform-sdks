// @generated
// fingerprint: sha256:a61613596d3278c1948e0067a2f2d6ac7f17277565bd0776fbc9db2a2edc7b99
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Consolidated Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetCampaignRecommendationsResponseEndpoint, FetchCampaignRecommendationsResponse } from "../types.ts";
import type { GetCampaignRecommendationsParams, PostFetchCampaignRecommendationsParams } from "../params.ts";

/** Consolidated Recommendations — 2 endpoints */
export function createConsolidatedRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** getCampaignRecommendations */
    async getCampaignRecommendations(params: GetCampaignRecommendationsParams): Promise<GetCampaignRecommendationsResponseEndpoint> {
      const query = params;
      const envelope = await api.get<GetCampaignRecommendationsResponseEndpoint>(`/sp/campaign/recommendations`, query);
      return envelope;
    },

    /** fetchCampaignRecommendations */
    async postFetchCampaignRecommendations(params: PostFetchCampaignRecommendationsParams): Promise<FetchCampaignRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<FetchCampaignRecommendationsResponse>(`/sp/campaign/recommendations`, rest);
      return envelope;
    },
  };
}
