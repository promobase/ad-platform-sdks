import type { CampaignCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignCriteriaRequest. Do not edit by hand.
export interface MutateCampaignCriteriaRequest {
  customerId?: string;
  operations?: CampaignCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
