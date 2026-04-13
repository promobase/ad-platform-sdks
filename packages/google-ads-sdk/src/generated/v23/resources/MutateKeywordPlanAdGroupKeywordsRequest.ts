import type { KeywordPlanAdGroupKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanAdGroupKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
