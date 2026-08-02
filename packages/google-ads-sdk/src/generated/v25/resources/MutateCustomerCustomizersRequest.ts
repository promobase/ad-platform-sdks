import type { CustomerCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerCustomizersRequest. Do not edit by hand.
export interface MutateCustomerCustomizersRequest {
  customerId?: string;
  operations?: CustomerCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
