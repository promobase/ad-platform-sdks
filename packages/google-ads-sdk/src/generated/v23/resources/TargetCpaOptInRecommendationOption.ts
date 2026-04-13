import type { RecommendationImpact, TargetCpaOptInRecommendationGoal } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption. Do not edit by hand.
export interface TargetCpaOptInRecommendationOption {
  goal?: TargetCpaOptInRecommendationGoal;
  targetCpaMicros?: string;
  requiredCampaignBudgetAmountMicros?: string;
  impact?: RecommendationImpact;
}
