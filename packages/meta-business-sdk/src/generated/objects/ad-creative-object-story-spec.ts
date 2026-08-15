// @generated
// fingerprint: sha256:3abcb992905b195c1ae38d71aceb00a5872db3e7984b46a88af738a729b7f1bf
// DO NOT EDIT: generated file; changes will be overwritten.
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
  whats_app_business_phone_number: string;
}

