import type { CampaignAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignAssetsRequest. Do not edit by hand.
export interface MutateCampaignAssetsRequest {
  customerId?: string;
  operations?: CampaignAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
