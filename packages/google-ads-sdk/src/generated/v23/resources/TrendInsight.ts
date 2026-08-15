// @generated
// fingerprint: sha256:94f600225e17562997bfaf918601a033e51822b3df3a049f823c2eeb886d43d7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceInsightsAttributeMetadata, InsightsTrend, TrendInsightDataPoint, TrendInsightMetrics, YouTubeCreatorInsights } from "../index.ts";

// Generated from google.ads.googleads.v23.services.TrendInsight. Do not edit by hand.
export interface TrendInsight {
  trendAttribute?: AudienceInsightsAttributeMetadata;
  trendMetrics?: TrendInsightMetrics;
  trend?: InsightsTrend;
  trendDataPoints?: TrendInsightDataPoint[];
  relatedVideos?: AudienceInsightsAttributeMetadata[];
  relatedCreators?: YouTubeCreatorInsights[];
}
