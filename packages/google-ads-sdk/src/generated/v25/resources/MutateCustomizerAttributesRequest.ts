// @generated
// fingerprint: sha256:0fc086cfb6659fc1c9d1fd1349a0a461c6bffb0bd229560b68cdb31cb9412c4c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomizerAttributeOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomizerAttributesRequest. Do not edit by hand.
export interface MutateCustomizerAttributesRequest {
  customerId?: string;
  operations?: CustomizerAttributeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
