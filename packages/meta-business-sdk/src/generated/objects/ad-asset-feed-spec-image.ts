import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";
import type { AdsImageCropsFields } from "./ads-image-crops.ts";

export interface AdAssetFeedSpecImageFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  hash: string;
  image_crops: AdsImageCropsFields;
  url: string;
  url_tags: string;
}

