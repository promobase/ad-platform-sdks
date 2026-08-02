import type { AdGroupAdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupAdsRequest. Do not edit by hand.
export interface MutateAdGroupAdsRequest {
  customerId?: string;
  operations?: AdGroupAdOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
