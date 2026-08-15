// @generated
// fingerprint: sha256:cfc722097753840ec514c981d5c536a22dd6d9c5890a9d8ebfc79036d6b69d41
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanAdGroupOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanAdGroupsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
