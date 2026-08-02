import type { OfflineUserDataJob } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CreateOfflineUserDataJobRequest. Do not edit by hand.
export interface CreateOfflineUserDataJobRequest {
  customerId?: string;
  job?: OfflineUserDataJob;
  validateOnly?: boolean;
  enableMatchRateRangePreview?: boolean;
}
