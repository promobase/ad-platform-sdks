import type { ExperimentOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateExperimentsRequest. Do not edit by hand.
export interface MutateExperimentsRequest {
  customerId?: string;
  operations?: ExperimentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
