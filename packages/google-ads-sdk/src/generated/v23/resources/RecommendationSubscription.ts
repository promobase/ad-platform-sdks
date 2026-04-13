import type { RecommendationSubscriptionStatus, RecommendationType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.RecommendationSubscription. Do not edit by hand.
export interface RecommendationSubscription {
  resourceName?: string;
  type?: RecommendationType;
  createDateTime?: string;
  modifyDateTime?: string;
  status?: RecommendationSubscriptionStatus;
}
