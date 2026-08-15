// @generated
// fingerprint: sha256:24d77a9008f9b7b80f16f153be55abcbf7a7b4c80e2bc0011777823fa3d8d9ff
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerRequest. Do not edit by hand.
export interface MutateCustomerRequest {
  customerId?: string;
  operation?: CustomerOperation;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
