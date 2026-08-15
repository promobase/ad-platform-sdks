// @generated
// fingerprint: sha256:14ba95db5121dac997103c3a601a89b61cef3a1207324c3279892cc62e37f314
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupAssetOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupAssetsRequest. Do not edit by hand.
export interface MutateAssetGroupAssetsRequest {
  customerId?: string;
  operations?: AssetGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
