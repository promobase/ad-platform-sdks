import type { ResponseContentType, SmartCampaignSettingOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSmartCampaignSettingsRequest. Do not edit by hand.
export interface MutateSmartCampaignSettingsRequest {
  customerId?: string;
  operations?: SmartCampaignSettingOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
