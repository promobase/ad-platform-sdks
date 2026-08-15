// @generated
// fingerprint: sha256:238be54678b6a674bf82761842ee159bd85bcabb71aaef26acaf8d562e29a08d
// DO NOT EDIT: generated file; changes will be overwritten.
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
