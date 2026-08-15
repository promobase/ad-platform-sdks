// @generated
// fingerprint: sha256:30c908d4d29f688b7eeb0d302237f3b94e341f8bb471d4d3b92a5d2876cc0a88
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetSetsRequest. Do not edit by hand.
export interface MutateAssetSetsRequest {
  customerId?: string;
  operations?: AssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
