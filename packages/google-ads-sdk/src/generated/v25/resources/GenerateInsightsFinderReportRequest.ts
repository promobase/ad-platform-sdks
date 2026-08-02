import type { AdditionalApplicationInfo, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateInsightsFinderReportRequest. Do not edit by hand.
export interface GenerateInsightsFinderReportRequest {
  customerId?: string;
  baselineAudience?: InsightsAudience;
  specificAudience?: InsightsAudience;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
