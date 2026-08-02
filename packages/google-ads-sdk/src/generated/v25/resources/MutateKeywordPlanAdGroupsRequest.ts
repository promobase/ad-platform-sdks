import type { KeywordPlanAdGroupOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlanAdGroupsRequest. Do not edit by hand.
export interface MutateKeywordPlanAdGroupsRequest {
  customerId?: string;
  operations?: KeywordPlanAdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
