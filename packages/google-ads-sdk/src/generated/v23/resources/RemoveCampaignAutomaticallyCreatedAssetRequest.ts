import type { RemoveCampaignAutomaticallyCreatedAssetOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.RemoveCampaignAutomaticallyCreatedAssetRequest. Do not edit by hand.
export interface RemoveCampaignAutomaticallyCreatedAssetRequest {
  customerId?: string;
  operations?: RemoveCampaignAutomaticallyCreatedAssetOperation[];
  partialFailure?: boolean;
}
