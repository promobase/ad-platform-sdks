import type { KeywordPlanCampaignOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanCampaignsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
