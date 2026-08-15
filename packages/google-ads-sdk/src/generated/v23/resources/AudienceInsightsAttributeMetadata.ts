// @generated
// fingerprint: sha256:e4dd7b8989c33c5c423a6ab4ab5e47da78fd1d52de11c3d79de0583ea3efc531
// DO NOT EDIT: generated file; changes will be overwritten.
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
