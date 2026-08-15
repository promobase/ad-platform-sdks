// @generated
// fingerprint: sha256:0812c8b76ec838b697e647ec1d8426eca3f9651fe6c58890319343fdc99cb56b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RecommendationSubscriptionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateRecommendationSubscriptionRequest. Do not edit by hand.
export interface MutateRecommendationSubscriptionRequest {
  customerId?: string;
  operations?: RecommendationSubscriptionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
