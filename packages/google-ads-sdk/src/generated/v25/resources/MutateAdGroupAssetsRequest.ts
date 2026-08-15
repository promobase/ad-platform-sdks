// @generated
// fingerprint: sha256:7e5fbe24dbce3ee46af37fe2816657df51543b2fe56f7bc81fcacf1ac0d432a0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupAssetsRequest. Do not edit by hand.
export interface MutateAdGroupAssetsRequest {
  customerId?: string;
  operations?: AdGroupAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
