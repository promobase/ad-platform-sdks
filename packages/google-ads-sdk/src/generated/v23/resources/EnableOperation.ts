import type { BrandCampaignAssets } from "../index.ts";

// Generated from google.ads.googleads.v23.services.EnableOperation. Do not edit by hand.
export interface EnableOperation {
  campaign?: string;
  autoPopulateBrandAssets?: boolean;
  brandAssets?: BrandCampaignAssets;
  finalUriDomain?: string;
  mainColor?: string;
  accentColor?: string;
  fontFamily?: string;
}
