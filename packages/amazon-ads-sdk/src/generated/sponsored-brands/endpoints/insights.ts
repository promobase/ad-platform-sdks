// @generated
// fingerprint: sha256:a78b9bbb6e580cd76be1990fc35e69b6b97254fb3619bdd8e04c812b25f4ba22
// DO NOT EDIT: generated file; changes will be overwritten.
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
