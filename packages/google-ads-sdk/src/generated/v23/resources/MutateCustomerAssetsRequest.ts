import type { CustomerAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerAssetsRequest. Do not edit by hand.
export interface MutateCustomerAssetsRequest {
  customerId?: string;
  operations?: CustomerAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
