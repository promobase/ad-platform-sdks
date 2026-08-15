// @generated
// fingerprint: sha256:2c5d1e24e85df98b0036c6348e0f4729745f8510f17d994d8989bedc1ec51108
// DO NOT EDIT: generated file; changes will be overwritten.
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
