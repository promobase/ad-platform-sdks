// @generated
// fingerprint: sha256:8c7df446e2b2ff3e8eaa33cafe2f156f3b7af35e900ad9b4014df2f128dc059f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAssetSetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetSetsRequest {
  customerId?: string;
  operations?: AdGroupAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
