// @generated
// fingerprint: sha256:a000b0e65f195a9660f128c045a3764640090bcb272c7513e870021276a6abc3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerAssetSetsRequest. Do not edit by hand.
export interface MutateCustomerAssetSetsRequest {
  customerId?: string;
  operations?: CustomerAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
