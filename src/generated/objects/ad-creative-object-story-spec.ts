import type { AdCreativeLinkDataFields } from "./ad-creative-link-data.ts";
import type { AdCreativePhotoDataFields } from "./ad-creative-photo-data.ts";
import type { AdCreativeProductDataFields } from "./ad-creative-product-data.ts";
import type { AdCreativeTextDataFields } from "./ad-creative-text-data.ts";
import type { AdCreativeVideoDataFields } from "./ad-creative-video-data.ts";

export interface AdCreativeObjectStorySpecFields {
  instagram_user_id: string;
  link_data: AdCreativeLinkDataFields;
  page_id: string;
  photo_data: AdCreativePhotoDataFields;
  product_data: AdCreativeProductDataFields[];
  template_data: AdCreativeLinkDataFields;
  text_data: AdCreativeTextDataFields;
  video_data: AdCreativeVideoDataFields;
}

