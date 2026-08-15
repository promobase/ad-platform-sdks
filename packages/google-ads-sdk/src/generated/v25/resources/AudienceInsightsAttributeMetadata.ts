// @generated
// fingerprint: sha256:14c0f7942b1b3e09933c58298ba12fd1070f405f6e169dd5dff9bb4a132cd3ca
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceInsightsAttribute, AudienceInsightsDimension, KnowledgeGraphAttributeMetadata, LineupAttributeMetadata, LocationAttributeMetadata, UserInterestAttributeMetadata, UserListAttributeMetadata, YouTubeChannelAttributeMetadata, YouTubeVideoAttributeMetadata } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AudienceInsightsAttributeMetadata. Do not edit by hand.
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
