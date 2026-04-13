import type { CustomizerAttributeOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomizerAttributesRequest. Do not edit by hand.
export interface MutateCustomizerAttributesRequest {
  customerId?: string;
  operations?: CustomizerAttributeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
