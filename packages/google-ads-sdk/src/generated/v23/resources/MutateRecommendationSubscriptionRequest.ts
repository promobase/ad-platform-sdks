import type { RecommendationSubscriptionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateRecommendationSubscriptionRequest. Do not edit by hand.
export interface MutateRecommendationSubscriptionRequest {
  customerId?: string;
  operations?: RecommendationSubscriptionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
