import type { AdditionalApplicationInfo, AudienceInsightsDimension, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateAudienceCompositionInsightsRequest. Do not edit by hand.
export interface GenerateAudienceCompositionInsightsRequest {
  customerId?: string;
  audience?: InsightsAudience;
  baselineAudience?: InsightsAudience;
  dataMonth?: string;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
