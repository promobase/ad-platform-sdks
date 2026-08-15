// @generated
// fingerprint: sha256:b2a71cd57fd50324b45f74e05c29b9bf03c25cfe5c7d2cd95dc6d07d773e6cb5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionAdjustment } from "../index.ts";

// Generated from google.ads.googleads.v23.services.UploadConversionAdjustmentsRequest. Do not edit by hand.
export interface UploadConversionAdjustmentsRequest {
  customerId?: string;
  conversionAdjustments?: ConversionAdjustment[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
