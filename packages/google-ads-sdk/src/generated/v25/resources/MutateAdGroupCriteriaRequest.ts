import type { AdGroupCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupCriteriaRequest. Do not edit by hand.
export interface MutateAdGroupCriteriaRequest {
  customerId?: string;
  operations?: AdGroupCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
