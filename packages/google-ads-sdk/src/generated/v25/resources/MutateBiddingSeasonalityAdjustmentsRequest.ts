// @generated
// fingerprint: sha256:bb49645c1712d288909f65363ad32d39c7b52e55943888914129c799ab0d673e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingSeasonalityAdjustmentOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateBiddingSeasonalityAdjustmentsRequest. Do not edit by hand.
export interface MutateBiddingSeasonalityAdjustmentsRequest {
  customerId?: string;
  operations?: BiddingSeasonalityAdjustmentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
