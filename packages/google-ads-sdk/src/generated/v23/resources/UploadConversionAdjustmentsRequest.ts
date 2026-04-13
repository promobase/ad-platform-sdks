import type { ConversionAdjustment } from "../index.ts";

// Generated from google.ads.googleads.v23.services.UploadConversionAdjustmentsRequest. Do not edit by hand.
export interface UploadConversionAdjustmentsRequest {
  customerId?: string;
  conversionAdjustments?: ConversionAdjustment[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
