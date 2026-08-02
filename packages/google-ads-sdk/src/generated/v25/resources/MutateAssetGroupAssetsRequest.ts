import type { AssetGroupAssetOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupAssetsRequest. Do not edit by hand.
export interface MutateAssetGroupAssetsRequest {
  customerId?: string;
  operations?: AssetGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
