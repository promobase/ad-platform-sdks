import type { AdGroupAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAssetSetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetSetsRequest {
  customerId?: string;
  operations?: AdGroupAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
