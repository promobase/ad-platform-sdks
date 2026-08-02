import type { CallConversion } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadCallConversionsRequest. Do not edit by hand.
export interface UploadCallConversionsRequest {
  customerId?: string;
  conversions?: CallConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
