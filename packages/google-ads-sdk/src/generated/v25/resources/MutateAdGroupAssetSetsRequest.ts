// @generated
// fingerprint: sha256:4f91355e83985cd7c27cf094716db218a94f1e2af3341736eebcfd24dccbb18c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupAssetSetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetSetsRequest {
  customerId?: string;
  operations?: AdGroupAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
