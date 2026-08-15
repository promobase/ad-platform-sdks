// @generated
// fingerprint: sha256:caf002f6a719ff21bb5e20aadec41e37395f8d623c42f2930dd1b6e8d5711815
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PartnershipOpportunity } from "../index.ts";

// Generated from google.ads.googleads.v23.services.YouTubeMetrics. Do not edit by hand.
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
  isBrandConnectCreator?: boolean;
  partnershipOpportunities?: PartnershipOpportunity[];
}
