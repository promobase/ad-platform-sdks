import type { CampaignToForecast, DateRange } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateKeywordForecastMetricsRequest. Do not edit by hand.
export interface GenerateKeywordForecastMetricsRequest {
  customerId?: string;
  currencyCode?: string;
  forecastPeriod?: DateRange;
  campaign?: CampaignToForecast;
}
