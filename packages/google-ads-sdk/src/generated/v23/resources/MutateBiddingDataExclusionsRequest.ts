import type { BiddingDataExclusionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateBiddingDataExclusionsRequest. Do not edit by hand.
export interface MutateBiddingDataExclusionsRequest {
  customerId?: string;
  operations?: BiddingDataExclusionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
