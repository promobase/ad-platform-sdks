import type { CampaignBudgetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignBudgetsRequest. Do not edit by hand.
export interface MutateCampaignBudgetsRequest {
  customerId?: string;
  operations?: CampaignBudgetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
