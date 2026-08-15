// @generated
// fingerprint: sha256:203e4ac532784d9baa535ce5738cc2dafe649f06bbf5e3e1150a4b598354127a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanAdGroupOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlanAdGroupsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
