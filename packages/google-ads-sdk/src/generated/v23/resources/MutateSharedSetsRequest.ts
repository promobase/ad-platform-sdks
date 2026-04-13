import type { ResponseContentType, SharedSetOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateSharedSetsRequest. Do not edit by hand.
export interface MutateSharedSetsRequest {
  customerId?: string;
  operations?: SharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
