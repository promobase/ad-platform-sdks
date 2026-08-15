// @generated
// fingerprint: sha256:cd9a525eecafb3abc2ed0aacb51d5e53080d3255dafdc289ecc31eb227520b0d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerAssetSetsRequest. Do not edit by hand.
export interface MutateCustomerAssetSetsRequest {
  customerId?: string;
  operations?: CustomerAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
