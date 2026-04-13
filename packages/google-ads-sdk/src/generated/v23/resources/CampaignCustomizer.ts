import type { CustomizerValue, CustomizerValueStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignCustomizer. Do not edit by hand.
export interface CampaignCustomizer {
  resourceName?: string;
  campaign?: string;
  customizerAttribute?: string;
  status?: CustomizerValueStatus;
  value?: CustomizerValue;
}
