// Auto-generated client for Insights — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SBInsightsCampaignInsightsResponse } from "../types.ts";
import type { PostSBInsightsCampaignInsightsParams } from "../params.ts";

/** Insights — 1 endpoints */
export function createInsightsClient(api: AmazonAdsApiClient) {
  return {
    /** SBInsightsCampaignInsights */
    async postSBInsightsCampaignInsights(params: PostSBInsightsCampaignInsightsParams): Promise<SBInsightsCampaignInsightsResponse> {
      const rest = params;
      const envelope = await api.post<SBInsightsCampaignInsightsResponse>(`/sb/campaigns/insights`, rest);
      return envelope;
    },
  };
}
