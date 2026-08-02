import type { CampaignBiddingStrategy, ForecastAdGroup } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CampaignToForecast. Do not edit by hand.
export interface CampaignToForecast {
  languageConstants?: string[];
  geoTargetConstants?: string[];
  biddingStrategy?: CampaignBiddingStrategy;
  adGroups?: ForecastAdGroup[];
}
