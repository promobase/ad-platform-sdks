import type { AdditionalApplicationInfo, CampaignDuration, EffectiveFrequencyLimit, ForecastMetricOptions, FrequencyCap, PlannedProduct, Targeting } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateReachForecastRequest. Do not edit by hand.
export interface GenerateReachForecastRequest {
  customerId?: string;
  currencyCode?: string;
  campaignDuration?: CampaignDuration;
  cookieFrequencyCapSetting?: FrequencyCap;
  minEffectiveFrequency?: number;
  effectiveFrequencyLimit?: EffectiveFrequencyLimit;
  targeting?: Targeting;
  plannedProducts?: PlannedProduct[];
  forecastMetricOptions?: ForecastMetricOptions;
  customerReachGroup?: string;
  reachApplicationInfo?: AdditionalApplicationInfo;
}
