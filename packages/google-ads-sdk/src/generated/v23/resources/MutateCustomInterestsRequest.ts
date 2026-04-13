import type { CustomInterestOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomInterestsRequest. Do not edit by hand.
export interface MutateCustomInterestsRequest {
  customerId?: string;
  operations?: CustomInterestOperation[];
  validateOnly?: boolean;
}
