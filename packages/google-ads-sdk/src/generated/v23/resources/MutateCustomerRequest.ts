import type { CustomerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerRequest. Do not edit by hand.
export interface MutateCustomerRequest {
  customerId?: string;
  operation?: CustomerOperation;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
