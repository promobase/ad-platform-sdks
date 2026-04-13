import type { AdGroupCriterionCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCriterionCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCriterionCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCriterionCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
