import type { CampaignOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignsRequest. Do not edit by hand.
export interface MutateCampaignsRequest {
  customerId?: string;
  operations?: CampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
