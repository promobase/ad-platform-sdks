import type { AdGroupAdLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAdLabelsRequest. Do not edit by hand.
export interface MutateAdGroupAdLabelsRequest {
  customerId?: string;
  operations?: AdGroupAdLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
