// @generated
// fingerprint: sha256:d3021b2060782fd8fcd577abf619a12fa133224a74b69ced0f5daa6ef28601df
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RecommendationImpact, TargetCpaOptInRecommendationGoal } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption. Do not edit by hand.
export interface TargetCpaOptInRecommendationOption {
  goal?: TargetCpaOptInRecommendationGoal;
  targetCpaMicros?: string;
  requiredCampaignBudgetAmountMicros?: string;
  impact?: RecommendationImpact;
}
