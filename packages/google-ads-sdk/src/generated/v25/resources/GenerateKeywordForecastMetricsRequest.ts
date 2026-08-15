// @generated
// fingerprint: sha256:3b4ffe9895d26312621d4590bb59391a7ddabc4625fde1f83cc9a0ade6715b46
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignToForecast, DateRange } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateKeywordForecastMetricsRequest. Do not edit by hand.
export interface GenerateKeywordForecastMetricsRequest {
  customerId?: string;
  currencyCode?: string;
  forecastPeriod?: DateRange;
  campaign?: CampaignToForecast;
}
