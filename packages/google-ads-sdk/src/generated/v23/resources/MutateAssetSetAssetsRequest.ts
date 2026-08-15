// @generated
// fingerprint: sha256:8a4e0d768e4543ddefb86e45d82ccb20675df0fd711068fc4fdbc79cfcc31bf4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetSetAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetSetAssetsRequest. Do not edit by hand.
export interface MutateAssetSetAssetsRequest {
  customerId?: string;
  operations?: AssetSetAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
