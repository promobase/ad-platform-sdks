import type { MutateOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateGoogleAdsRequest. Do not edit by hand.
export interface MutateGoogleAdsRequest {
  customerId?: string;
  mutateOperations?: MutateOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
