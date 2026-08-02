import type { BiddingSeasonalityAdjustmentOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateBiddingSeasonalityAdjustmentsRequest. Do not edit by hand.
export interface MutateBiddingSeasonalityAdjustmentsRequest {
  customerId?: string;
  operations?: BiddingSeasonalityAdjustmentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
