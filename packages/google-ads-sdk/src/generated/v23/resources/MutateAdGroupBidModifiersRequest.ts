import type { AdGroupBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupBidModifiersRequest. Do not edit by hand.
export interface MutateAdGroupBidModifiersRequest {
  customerId?: string;
  operations?: AdGroupBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
