// @generated
// fingerprint: sha256:839dfccb2a7d4c672d0746f7250c9bc6066fa01f353d81cade7c45a71bca0ad0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionAdjustment } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadConversionAdjustmentsRequest. Do not edit by hand.
export interface UploadConversionAdjustmentsRequest {
  customerId?: string;
  conversionAdjustments?: ConversionAdjustment[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
