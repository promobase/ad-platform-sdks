// @generated
// fingerprint: sha256:4fef1b9395dc18a9de100b46b7d850c624f243104a28c4fe5cfc0c6c080a7794
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAdsRequest. Do not edit by hand.
export interface MutateAdGroupAdsRequest {
  customerId?: string;
  operations?: AdGroupAdOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
