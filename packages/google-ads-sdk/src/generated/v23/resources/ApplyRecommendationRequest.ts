import type { ApplyRecommendationOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ApplyRecommendationRequest. Do not edit by hand.
export interface ApplyRecommendationRequest {
  customerId?: string;
  operations?: ApplyRecommendationOperation[];
  partialFailure?: boolean;
}
