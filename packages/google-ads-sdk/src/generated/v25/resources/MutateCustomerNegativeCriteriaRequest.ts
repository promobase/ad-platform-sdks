// @generated
// fingerprint: sha256:011bb6eb90b3147e062027f4800280c7799ca1eec75a1f3a799a6a2b15caa829
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerNegativeCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerNegativeCriteriaRequest. Do not edit by hand.
export interface MutateCustomerNegativeCriteriaRequest {
  customerId?: string;
  operations?: CustomerNegativeCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
