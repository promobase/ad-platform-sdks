// @generated
// fingerprint: sha256:ed68ebb005438d2a8a6b217d488a2e58903b8de65a3fb689df3b69f0551dd9af
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerNegativeCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerNegativeCriteriaRequest. Do not edit by hand.
export interface MutateCustomerNegativeCriteriaRequest {
  customerId?: string;
  operations?: CustomerNegativeCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
