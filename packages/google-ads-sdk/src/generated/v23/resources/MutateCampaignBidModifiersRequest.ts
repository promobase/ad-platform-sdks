import type { CampaignBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignBidModifiersRequest. Do not edit by hand.
export interface MutateCampaignBidModifiersRequest {
  customerId?: string;
  operations?: CampaignBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
