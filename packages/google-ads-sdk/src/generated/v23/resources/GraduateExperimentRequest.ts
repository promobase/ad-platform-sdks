import type { CampaignBudgetMapping } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GraduateExperimentRequest. Do not edit by hand.
export interface GraduateExperimentRequest {
  experiment?: string;
  campaignBudgetMappings?: CampaignBudgetMapping[];
  validateOnly?: boolean;
}
