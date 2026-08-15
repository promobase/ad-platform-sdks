// @generated
// fingerprint: sha256:1e54a3a7c9c4fb746a406b7c56357e203ce6e87bd1f4c6b02087a09cedd07a5a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomizerAttributeOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomizerAttributesRequest. Do not edit by hand.
export interface MutateCustomizerAttributesRequest {
  customerId?: string;
  operations?: CustomizerAttributeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
