// @generated
// fingerprint: sha256:318965135c9d3bcfafbe283e192188c9fdb56fffe7084b1be3b258eae4ad615e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerAssetsRequest. Do not edit by hand.
export interface MutateCustomerAssetsRequest {
  customerId?: string;
  operations?: CustomerAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
