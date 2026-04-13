import type { AssetSetAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetSetAssetsRequest. Do not edit by hand.
export interface MutateAssetSetAssetsRequest {
  customerId?: string;
  operations?: AssetSetAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
