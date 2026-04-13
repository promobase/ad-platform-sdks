import type { CustomerLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerLabelsRequest. Do not edit by hand.
export interface MutateCustomerLabelsRequest {
  customerId?: string;
  operations?: CustomerLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
