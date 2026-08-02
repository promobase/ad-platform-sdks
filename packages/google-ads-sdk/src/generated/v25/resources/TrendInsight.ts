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
