import type { CustomerAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerAssetSetsRequest. Do not edit by hand.
export interface MutateCustomerAssetSetsRequest {
  customerId?: string;
  operations?: CustomerAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
