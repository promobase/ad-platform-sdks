// @generated
// fingerprint: sha256:b354482a6a98e2866095eee20e20e6cd0db5f4d8f379a4c486dd5086257d0c0f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignToForecast, DateRange } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateKeywordForecastMetricsRequest. Do not edit by hand.
export interface GenerateKeywordForecastMetricsRequest {
  customerId?: string;
  currencyCode?: string;
  forecastPeriod?: DateRange;
  campaign?: CampaignToForecast;
}
