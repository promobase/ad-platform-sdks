import type { CampaignConversionGoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignConversionGoalsRequest. Do not edit by hand.
export interface MutateCampaignConversionGoalsRequest {
  customerId?: string;
  operations?: CampaignConversionGoalOperation[];
  validateOnly?: boolean;
}
