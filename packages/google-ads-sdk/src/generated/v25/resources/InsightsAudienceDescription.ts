import type { AudienceInsightsDimensions, AudienceInsightsMarketingObjective, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.InsightsAudienceDescription. Do not edit by hand.
export interface InsightsAudienceDescription {
  countryLocations?: LocationInfo[];
  audienceDescription?: string;
  marketingObjective?: AudienceInsightsMarketingObjective;
  audienceDimensions?: AudienceInsightsDimensions;
}
