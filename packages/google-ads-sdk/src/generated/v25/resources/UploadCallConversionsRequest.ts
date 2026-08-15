// @generated
// fingerprint: sha256:3e4c364be7c38f17b46fec1f4e805f8f1a865916bbb570628f64dc751d5003ad
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallConversion } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadCallConversionsRequest. Do not edit by hand.
export interface UploadCallConversionsRequest {
  customerId?: string;
  conversions?: CallConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
