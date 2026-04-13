import type { CampaignAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignAssetSetsRequest. Do not edit by hand.
export interface MutateCampaignAssetSetsRequest {
  customerId?: string;
  operations?: CampaignAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
