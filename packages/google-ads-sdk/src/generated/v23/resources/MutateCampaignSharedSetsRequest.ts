import type { CampaignSharedSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignSharedSetsRequest. Do not edit by hand.
export interface MutateCampaignSharedSetsRequest {
  customerId?: string;
  operations?: CampaignSharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
