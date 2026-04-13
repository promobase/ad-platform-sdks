import type { AdGroupCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
