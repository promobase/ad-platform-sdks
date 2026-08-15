// @generated
// fingerprint: sha256:5649de14e78ee102715a9b3dc71b2efba3ba54b200f1bb8f277c389903a10e83
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RecommendationSubscriptionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateRecommendationSubscriptionRequest. Do not edit by hand.
export interface MutateRecommendationSubscriptionRequest {
  customerId?: string;
  operations?: RecommendationSubscriptionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
