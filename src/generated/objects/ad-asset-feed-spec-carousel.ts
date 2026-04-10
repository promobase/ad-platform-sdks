import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";
import type { AdAssetFeedSpecCarouselChildAttachmentFields } from "./ad-asset-feed-spec-carousel-child-attachment.ts";

export interface AdAssetFeedSpecCarouselFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  child_attachments: AdAssetFeedSpecCarouselChildAttachmentFields[];
  multi_share_end_card: boolean;
  multi_share_optimized: boolean;
}

