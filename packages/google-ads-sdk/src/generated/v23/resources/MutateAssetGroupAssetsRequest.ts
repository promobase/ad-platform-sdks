// @generated
// fingerprint: sha256:76ad302086b27f3de0da755105f486e4c3394674dca186721254b083167c54dc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupAssetOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetGroupAssetsRequest. Do not edit by hand.
export interface MutateAssetGroupAssetsRequest {
  customerId?: string;
  operations?: AssetGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
