import type { AssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetSetsRequest. Do not edit by hand.
export interface MutateAssetSetsRequest {
  customerId?: string;
  operations?: AssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
