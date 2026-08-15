// @generated
// fingerprint: sha256:db89754175b9d32f58f06804f30f2a851397969451a7d9e7ae89bab35ef0008a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateGoogleAdsRequest. Do not edit by hand.
export interface MutateGoogleAdsRequest {
  customerId?: string;
  mutateOperations?: MutateOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
