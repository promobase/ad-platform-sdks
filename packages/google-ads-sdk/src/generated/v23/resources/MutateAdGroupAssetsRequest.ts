import type { AdGroupAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAssetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetsRequest {
  customerId?: string;
  operations?: AdGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
