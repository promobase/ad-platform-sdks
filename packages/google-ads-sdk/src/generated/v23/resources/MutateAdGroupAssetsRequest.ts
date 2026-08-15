// @generated
// fingerprint: sha256:e307c06d762298553da573e34a6b71ae1b594191c103e30328d5d5b5e1a00c36
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAssetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetsRequest {
  customerId?: string;
  operations?: AdGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
