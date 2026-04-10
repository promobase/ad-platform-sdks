import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";

export interface AdAssetFeedSpecVideoFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  caption_ids: string[];
  thumbnail_hash: string;
  thumbnail_url: string;
  url_tags: string;
  video_id: string;
}

