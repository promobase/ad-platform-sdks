// @generated
// fingerprint: sha256:64188b275ff197df668734426fbf592bf525f10fd8f3faf1b9004e47188bc653
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlansRequest. Do not edit by hand.
export interface MutateKeywordPlansRequest {
  customerId?: string;
  operations?: KeywordPlanOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
