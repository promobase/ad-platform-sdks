import type { CampaignGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignGroupsRequest. Do not edit by hand.
export interface MutateCampaignGroupsRequest {
  customerId?: string;
  operations?: CampaignGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
