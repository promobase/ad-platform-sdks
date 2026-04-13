import type { AdGroupLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupLabelsRequest. Do not edit by hand.
export interface MutateAdGroupLabelsRequest {
  customerId?: string;
  operations?: AdGroupLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
