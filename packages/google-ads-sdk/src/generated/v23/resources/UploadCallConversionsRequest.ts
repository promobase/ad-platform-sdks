// @generated
// fingerprint: sha256:1e2de23d64db1cc81389d5ad112e6e7ca5ae2ca3f2ef4564fef811ce3d7e21c5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallConversion } from "../index.ts";

// Generated from google.ads.googleads.v23.services.UploadCallConversionsRequest. Do not edit by hand.
export interface UploadCallConversionsRequest {
  customerId?: string;
  conversions?: CallConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
