import type { KeywordInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.UseBroadMatchKeywordRecommendation. Do not edit by hand.
export interface UseBroadMatchKeywordRecommendation {
  keyword?: KeywordInfo[];
  suggestedKeywordsCount?: string;
  campaignKeywordsCount?: string;
  campaignUsesSharedBudget?: boolean;
  requiredCampaignBudgetAmountMicros?: string;
}
