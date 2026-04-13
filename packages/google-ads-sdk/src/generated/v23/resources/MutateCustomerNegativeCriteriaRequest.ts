import type { CustomerNegativeCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerNegativeCriteriaRequest. Do not edit by hand.
export interface MutateCustomerNegativeCriteriaRequest {
  customerId?: string;
  operations?: CustomerNegativeCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
