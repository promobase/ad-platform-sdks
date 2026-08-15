// @generated
// fingerprint: sha256:310c9153cec0556e5c0b1fb293590bd6388f5e8ed57742aee6a86b16f0a176b7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingStrategyOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateBiddingStrategiesRequest. Do not edit by hand.
export interface MutateBiddingStrategiesRequest {
  customerId?: string;
  operations?: BiddingStrategyOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
