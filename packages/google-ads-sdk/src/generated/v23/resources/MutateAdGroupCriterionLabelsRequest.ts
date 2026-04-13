import type { AdGroupCriterionLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCriterionLabelsRequest. Do not edit by hand.
export interface MutateAdGroupCriterionLabelsRequest {
  customerId?: string;
  operations?: AdGroupCriterionLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
