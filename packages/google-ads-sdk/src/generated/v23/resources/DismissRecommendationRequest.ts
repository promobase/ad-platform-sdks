// @generated
// fingerprint: sha256:b642606a16c201238c5c270b78a554941d3061b981a04f9639fe61c24c1c6255
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DismissRecommendationOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.DismissRecommendationRequest. Do not edit by hand.
export interface DismissRecommendationRequest {
  customerId?: string;
  operations?: DismissRecommendationOperation[];
  partialFailure?: boolean;
}
