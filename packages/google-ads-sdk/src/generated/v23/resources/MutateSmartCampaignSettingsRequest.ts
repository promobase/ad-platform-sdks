// @generated
// fingerprint: sha256:f8834864565f778301693dfd3beb6550f038cedc61858cec08ed903b1496d116
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SmartCampaignSettingOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateSmartCampaignSettingsRequest. Do not edit by hand.
export interface MutateSmartCampaignSettingsRequest {
  customerId?: string;
  operations?: SmartCampaignSettingOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
