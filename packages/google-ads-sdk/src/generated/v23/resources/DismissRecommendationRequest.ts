import type { DismissRecommendationOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.DismissRecommendationRequest. Do not edit by hand.
export interface DismissRecommendationRequest {
  customerId?: string;
  operations?: DismissRecommendationOperation[];
  partialFailure?: boolean;
}
