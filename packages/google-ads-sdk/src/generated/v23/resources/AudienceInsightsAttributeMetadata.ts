import type { AudienceInsightsAttribute, AudienceInsightsDimension, KnowledgeGraphAttributeMetadata, LineupAttributeMetadata, LocationAttributeMetadata, UserInterestAttributeMetadata, UserListAttributeMetadata, YouTubeChannelAttributeMetadata, YouTubeVideoAttributeMetadata } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AudienceInsightsAttributeMetadata. Do not edit by hand.
export interface AudienceInsightsAttributeMetadata {
  dimension?: AudienceInsightsDimension;
  attribute?: AudienceInsightsAttribute;
  displayName?: string;
  displayInfo?: string;
  potentialYoutubeReach?: string;
  subscriberShare?: number;
  viewerShare?: number;
  youtubeChannelMetadata?: YouTubeChannelAttributeMetadata;
  youtubeVideoMetadata?: YouTubeVideoAttributeMetadata;
  lineupAttributeMetadata?: LineupAttributeMetadata;
  locationAttributeMetadata?: LocationAttributeMetadata;
  userInterestAttributeMetadata?: UserInterestAttributeMetadata;
  knowledgeGraphAttributeMetadata?: KnowledgeGraphAttributeMetadata;
  userListAttributeMetadata?: UserListAttributeMetadata;
}
