import type { AdditionalApplicationInfo, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateTargetingSuggestionMetricsRequest. Do not edit by hand.
export interface GenerateTargetingSuggestionMetricsRequest {
  customerId?: string;
  audiences?: InsightsAudience[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
