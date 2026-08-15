// @generated
// fingerprint: sha256:4b00f438b5676b3ead6df564404bb46e91f97fbe13b93bf0e6e3d87a250c8a41
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetsRequest. Do not edit by hand.
export interface MutateAssetsRequest {
  customerId?: string;
  operations?: AssetOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
