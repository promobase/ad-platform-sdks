// @generated
// fingerprint: sha256:f6256a951eb4e0b14652700636d9a887db0e457723293a3e1626324d008eed80
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingStrategyOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateBiddingStrategiesRequest. Do not edit by hand.
export interface MutateBiddingStrategiesRequest {
  customerId?: string;
  operations?: BiddingStrategyOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
