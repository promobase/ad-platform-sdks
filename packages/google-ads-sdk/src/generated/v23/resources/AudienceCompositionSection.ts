import type { AudienceCompositionAttribute, AudienceCompositionAttributeCluster, AudienceInsightsDimension } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AudienceCompositionSection. Do not edit by hand.
export interface AudienceCompositionSection {
  dimension?: AudienceInsightsDimension;
  topAttributes?: AudienceCompositionAttribute[];
  clusteredAttributes?: AudienceCompositionAttributeCluster[];
}
