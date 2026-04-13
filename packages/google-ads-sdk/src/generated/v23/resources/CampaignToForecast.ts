import type { CampaignBiddingStrategy, CriterionBidModifier, ForecastAdGroup, KeywordInfo, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v23.services.CampaignToForecast. Do not edit by hand.
export interface CampaignToForecast {
  languageConstants?: string[];
  geoModifiers?: CriterionBidModifier[];
  keywordPlanNetwork?: KeywordPlanNetwork;
  negativeKeywords?: KeywordInfo[];
  biddingStrategy?: CampaignBiddingStrategy;
  conversionRate?: number;
  adGroups?: ForecastAdGroup[];
}
