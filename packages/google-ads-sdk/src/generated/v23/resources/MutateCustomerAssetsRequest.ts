// @generated
// fingerprint: sha256:75a7d03f17e6ae1f7c64929901074ca3dd65187a77423cc3d1410b2d3e93a888
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerAssetsRequest. Do not edit by hand.
export interface MutateCustomerAssetsRequest {
  customerId?: string;
  operations?: CustomerAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
