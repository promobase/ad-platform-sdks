import type { CampaignDraftOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignDraftsRequest. Do not edit by hand.
export interface MutateCampaignDraftsRequest {
  customerId?: string;
  operations?: CampaignDraftOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
