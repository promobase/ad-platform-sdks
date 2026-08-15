// @generated
// fingerprint: sha256:a32ab653d4857defdd11640eef9b9d636ad7416e123c79b0db3b8b04fa1e0a30
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerCustomizersRequest. Do not edit by hand.
export interface MutateCustomerCustomizersRequest {
  customerId?: string;
  operations?: CustomerCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
