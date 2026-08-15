// @generated
// fingerprint: sha256:364d5607d638f81f95629e54a46bd67a2e9bac3ee1cfa5eeb6c066159ec6f671
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdsRequest. Do not edit by hand.
export interface MutateAdsRequest {
  customerId?: string;
  operations?: AdOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
