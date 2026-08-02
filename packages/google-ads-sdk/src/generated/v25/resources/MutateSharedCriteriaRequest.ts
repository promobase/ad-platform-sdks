import type { ResponseContentType, SharedCriterionOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSharedCriteriaRequest. Do not edit by hand.
export interface MutateSharedCriteriaRequest {
  customerId?: string;
  operations?: SharedCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
