import type { AudienceInsightsDimensions, AudienceInsightsMarketingObjective, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.InsightsAudienceDescription. Do not edit by hand.
export interface InsightsAudienceDescription {
  countryLocations?: LocationInfo[];
  audienceDescription?: string;
  marketingObjective?: AudienceInsightsMarketingObjective;
  audienceDimensions?: AudienceInsightsDimensions;
}
