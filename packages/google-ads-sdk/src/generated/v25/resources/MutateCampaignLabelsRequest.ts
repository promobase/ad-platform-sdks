import type { CampaignLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignLabelsRequest. Do not edit by hand.
export interface MutateCampaignLabelsRequest {
  customerId?: string;
  operations?: CampaignLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
