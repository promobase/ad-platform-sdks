// @generated
// fingerprint: sha256:dad3350b5bb57f7af8e5fa189b598558d817288fdcd56cbef5430279786535f8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceInsightsAttributeMetadata, InsightsTrend, TrendInsightDataPoint, TrendInsightMetrics, YouTubeCreatorInsights } from "../index.ts";

// Generated from google.ads.googleads.v25.services.TrendInsight. Do not edit by hand.
export interface TrendInsight {
  trendAttribute?: AudienceInsightsAttributeMetadata;
  trendMetrics?: TrendInsightMetrics;
  trend?: InsightsTrend;
  trendDataPoints?: TrendInsightDataPoint[];
  relatedVideos?: AudienceInsightsAttributeMetadata[];
  relatedCreators?: YouTubeCreatorInsights[];
  relatedLocalCreators?: YouTubeCreatorInsights[];
}
