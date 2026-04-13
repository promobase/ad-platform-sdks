import type { ConversionActionCategory, ConversionOrigin } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignConversionGoal. Do not edit by hand.
export interface CampaignConversionGoal {
  resourceName?: string;
  campaign?: string;
  category?: ConversionActionCategory;
  origin?: ConversionOrigin;
  biddable?: boolean;
}
