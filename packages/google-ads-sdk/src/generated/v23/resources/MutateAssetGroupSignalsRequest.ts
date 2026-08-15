// @generated
// fingerprint: sha256:af61f4b4281efe00884bab2256a60790e8e6068c2b412b7baec74249336b071e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupSignalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetGroupSignalsRequest. Do not edit by hand.
export interface MutateAssetGroupSignalsRequest {
  customerId?: string;
  operations?: AssetGroupSignalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
