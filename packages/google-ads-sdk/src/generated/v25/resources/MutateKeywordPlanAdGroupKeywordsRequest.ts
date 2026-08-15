// @generated
// fingerprint: sha256:40c4fcc26b1c62443ece9987f20f7e450954fabb169140d59ee6e59e3be158e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanAdGroupKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlanAdGroupKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
