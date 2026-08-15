// @generated
// fingerprint: sha256:461c57e9493f69a2d6d09457b22950136e44393c396a654e2d72a814622c60de
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PartnershipOpportunity } from "../index.ts";

// Generated from google.ads.googleads.v25.services.YouTubeMetrics. Do not edit by hand.
export interface YouTubeMetrics {
  subscriberCount?: string;
  viewsCount?: string;
  videoCount?: string;
  likesCount?: string;
  sharesCount?: string;
  commentsCount?: string;
  engagementRate?: number;
  averageViewsPerVideo?: number;
  averageLikesPerVideo?: number;
  averageSharesPerVideo?: number;
  averageCommentsPerVideo?: number;
  shortsViewsCount?: string;
  shortsVideoCount?: string;
  isActiveShortsCreator?: boolean;
  isActiveLiveStreamCreator?: boolean;
  partnershipOpportunities?: PartnershipOpportunity[];
}
