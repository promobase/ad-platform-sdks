// @generated
// fingerprint: sha256:649aa66879207149dadc9821a24166b3bab30deaa25f27c6556b0c1ac5a7650f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanAdGroupKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanAdGroupKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
