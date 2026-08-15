// @generated
// fingerprint: sha256:3858192de90124859675e03443d9b63250cf150d4e62fcf7bb1eb8713276e8ec
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DismissRecommendationOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.DismissRecommendationRequest. Do not edit by hand.
export interface DismissRecommendationRequest {
  customerId?: string;
  operations?: DismissRecommendationOperation[];
  partialFailure?: boolean;
}
