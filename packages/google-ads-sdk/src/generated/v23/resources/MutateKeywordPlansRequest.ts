import type { KeywordPlanOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlansRequest. Do not edit by hand.
export interface MutateKeywordPlansRequest {
  customerId?: string;
  operations?: KeywordPlanOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
