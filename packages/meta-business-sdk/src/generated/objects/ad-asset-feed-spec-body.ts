import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";

export interface AdAssetFeedSpecBodyFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  text: string;
  url_tags: string;
}

