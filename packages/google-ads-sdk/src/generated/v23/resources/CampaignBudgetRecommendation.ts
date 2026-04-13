import type { CampaignBudgetRecommendationOption } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.CampaignBudgetRecommendation. Do not edit by hand.
export interface CampaignBudgetRecommendation {
  currentBudgetAmountMicros?: string;
  recommendedBudgetAmountMicros?: string;
  budgetOptions?: CampaignBudgetRecommendationOption[];
}
