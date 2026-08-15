// @generated
// fingerprint: sha256:dfaa144108becb57b480b392bd76d644c513acd02c5d961b25bd8c0025c9173b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RecommendationImpact, TargetCpaOptInRecommendationGoal } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption. Do not edit by hand.
export interface TargetCpaOptInRecommendationOption {
  goal?: TargetCpaOptInRecommendationGoal;
  targetCpaMicros?: string;
  requiredCampaignBudgetAmountMicros?: string;
  impact?: RecommendationImpact;
}
