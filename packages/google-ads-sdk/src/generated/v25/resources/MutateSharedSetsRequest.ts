import type { ResponseContentType, SharedSetOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSharedSetsRequest. Do not edit by hand.
export interface MutateSharedSetsRequest {
  customerId?: string;
  operations?: SharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
