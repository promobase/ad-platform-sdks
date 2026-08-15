// @generated
// fingerprint: sha256:ee95a969f6a68b19ef229743b973873da6efbf24e2cc0c22c1544086852df1bf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceInsightsAttributeMetadata, LanguageDistribution, LocationInfo, YouTubeChannelInfo, YouTubeMetrics } from "../index.ts";

// Generated from google.ads.googleads.v25.services.YouTubeChannelInsights. Do not edit by hand.
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
  dataSharingConsentGiven?: boolean;
  channelAudienceAttributes?: AudienceInsightsAttributeMetadata[];
  channelAttributes?: AudienceInsightsAttributeMetadata[];
  topVideos?: AudienceInsightsAttributeMetadata[];
  languageDistributions?: LanguageDistribution[];
  channelType?: string;
  relevanceScore?: number;
}
