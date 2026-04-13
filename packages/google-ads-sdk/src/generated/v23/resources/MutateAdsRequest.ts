import type { AdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdsRequest. Do not edit by hand.
export interface MutateAdsRequest {
  customerId?: string;
  operations?: AdOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
