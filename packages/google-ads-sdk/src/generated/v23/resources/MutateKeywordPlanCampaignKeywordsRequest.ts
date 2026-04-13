import type { KeywordPlanCampaignKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanCampaignKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
