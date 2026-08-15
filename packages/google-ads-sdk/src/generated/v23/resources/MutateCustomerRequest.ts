// @generated
// fingerprint: sha256:fb91e6eafdb1869994c0246538c4dcbb8a9f8beb0ec512cc3484d35182413b77
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerRequest. Do not edit by hand.
export interface MutateCustomerRequest {
  customerId?: string;
  operation?: CustomerOperation;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
