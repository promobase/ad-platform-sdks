// @generated
// fingerprint: sha256:f65f253ea8772799743d1837f183844fcda9710deb540755c7cf19bb208cbe92
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SmartCampaignSettingOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSmartCampaignSettingsRequest. Do not edit by hand.
export interface MutateSmartCampaignSettingsRequest {
  customerId?: string;
  operations?: SmartCampaignSettingOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
