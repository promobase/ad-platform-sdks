import type { ClickConversion } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadClickConversionsRequest. Do not edit by hand.
export interface UploadClickConversionsRequest {
  customerId?: string;
  conversions?: ClickConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
