// @generated
// fingerprint: sha256:379a81f82cb7bd2d405c5773499bccf97b26f6ec14e0d7d3e5652c2d603263ba
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetSetAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetSetAssetsRequest. Do not edit by hand.
export interface MutateAssetSetAssetsRequest {
  customerId?: string;
  operations?: AssetSetAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
