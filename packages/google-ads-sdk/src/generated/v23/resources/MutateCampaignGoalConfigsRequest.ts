import type { CampaignGoalConfigOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignGoalConfigsRequest. Do not edit by hand.
export interface MutateCampaignGoalConfigsRequest {
  customerId?: string;
  operations?: CampaignGoalConfigOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
