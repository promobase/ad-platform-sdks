// @generated
// fingerprint: sha256:77c5ea1fee9fdf65ed0fd08f60232131508b624d302746cad4d36e32e2dc0f17
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, CampaignDuration, EffectiveFrequencyLimit, ForecastMetricOptions, FrequencyCap, PlannedProduct, Targeting } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateReachForecastRequest. Do not edit by hand.
export interface GenerateReachForecastRequest {
  customerId?: string;
  currencyCode?: string;
  campaignDuration?: CampaignDuration;
  cookieFrequencyCap?: number;
  cookieFrequencyCapSetting?: FrequencyCap;
  minEffectiveFrequency?: number;
  effectiveFrequencyLimit?: EffectiveFrequencyLimit;
  targeting?: Targeting;
  plannedProducts?: PlannedProduct[];
  forecastMetricOptions?: ForecastMetricOptions;
  customerReachGroup?: string;
  reachApplicationInfo?: AdditionalApplicationInfo;
}
