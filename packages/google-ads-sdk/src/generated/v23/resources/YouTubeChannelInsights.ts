import type { AudienceInsightsAttributeMetadata, LanguageDistribution, LocationInfo, YouTubeChannelInfo, YouTubeMetrics } from "../index.ts";

// Generated from google.ads.googleads.v23.services.YouTubeChannelInsights. Do not edit by hand.
export interface YouTubeChannelInsights {
  displayName?: string;
  youtubeChannel?: YouTubeChannelInfo;
  channelUrl?: string;
  channelDescription?: string;
  handle?: string;
  thumbnailUrl?: string;
  publishDate?: string;
  countryLocation?: LocationInfo;
  channelMetrics?: YouTubeMetrics;
  channelAudienceAttributes?: AudienceInsightsAttributeMetadata[];
  channelAttributes?: AudienceInsightsAttributeMetadata[];
  topVideos?: AudienceInsightsAttributeMetadata[];
  languageDistributions?: LanguageDistribution[];
  channelType?: string;
  relevanceScore?: number;
}
