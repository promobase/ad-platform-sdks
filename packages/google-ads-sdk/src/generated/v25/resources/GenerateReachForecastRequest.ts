// @generated
// fingerprint: sha256:dbb7704effb1576b96036b329e834a3948bf9e7444790a5a2b90be0c597d8cd1
// DO NOT EDIT: generated file; changes will be overwritten.
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
