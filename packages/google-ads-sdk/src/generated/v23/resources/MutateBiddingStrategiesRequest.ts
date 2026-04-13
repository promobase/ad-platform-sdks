import type { BiddingStrategyOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateBiddingStrategiesRequest. Do not edit by hand.
export interface MutateBiddingStrategiesRequest {
  customerId?: string;
  operations?: BiddingStrategyOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
