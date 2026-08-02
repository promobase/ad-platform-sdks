import type { CampaignCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignCustomizersRequest. Do not edit by hand.
export interface MutateCampaignCustomizersRequest {
  customerId?: string;
  operations?: CampaignCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
