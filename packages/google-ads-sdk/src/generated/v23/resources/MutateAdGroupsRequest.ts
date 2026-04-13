import type { AdGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupsRequest. Do not edit by hand.
export interface MutateAdGroupsRequest {
  customerId?: string;
  operations?: AdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
