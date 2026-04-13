import type { AdOptimizedBusinessProfileSetting, PhoneNumber } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.SmartCampaignSetting. Do not edit by hand.
export interface SmartCampaignSetting {
  resourceName?: string;
  campaign?: string;
  phoneNumber?: PhoneNumber;
  advertisingLanguageCode?: string;
  finalUrl?: string;
  adOptimizedBusinessProfileSetting?: AdOptimizedBusinessProfileSetting;
  businessName?: string;
  businessProfileLocation?: string;
}
