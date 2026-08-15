// @generated
// fingerprint: sha256:8a9fa6201d4a19a5868e2f751b67258adbd40394612b6502a8fed0ff25ab0887
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlansRequest. Do not edit by hand.
export interface MutateKeywordPlansRequest {
  customerId?: string;
  operations?: KeywordPlanOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
