import type { AdditionalApplicationInfo, InsightsAudienceDefinition, InsightsAudienceDescription } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateSuggestedTargetingInsightsRequest. Do not edit by hand.
export interface GenerateSuggestedTargetingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  audienceDefinition?: InsightsAudienceDefinition;
  audienceDescription?: InsightsAudienceDescription;
}
