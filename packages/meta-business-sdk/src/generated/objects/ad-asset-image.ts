import type { AdsImageCropsFields } from "./ads-image-crops.ts";

export interface AdAssetImageFields {
  hash: string;
  id: string;
  image_crops: AdsImageCropsFields;
  name: string;
  tag: string;
  url: string;
  url_tags: string;
}

