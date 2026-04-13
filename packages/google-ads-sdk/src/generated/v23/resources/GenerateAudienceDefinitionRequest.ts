import type { AdditionalApplicationInfo, InsightsAudienceDescription } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateAudienceDefinitionRequest. Do not edit by hand.
export interface GenerateAudienceDefinitionRequest {
  customerId?: string;
  audienceDescription?: InsightsAudienceDescription;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
