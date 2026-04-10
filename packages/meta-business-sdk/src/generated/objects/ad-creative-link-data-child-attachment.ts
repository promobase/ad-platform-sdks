import type { AdCreativeLinkDataCallToActionFields } from "./ad-creative-link-data-call-to-action.ts";
import type { AdCreativePlaceDataFields } from "./ad-creative-place-data.ts";
import type { AdsImageCropsFields } from "./ads-image-crops.ts";

export interface AdCreativeLinkDataChildAttachmentFields {
  android_url: string;
  call_to_action: AdCreativeLinkDataCallToActionFields;
  caption: string;
  description: string;
  ig_media_id: string;
  image_crops: AdsImageCropsFields;
  image_hash: string;
  ios_url: string;
  link: string;
  marketing_message_buttons: Record<string, unknown>[];
  name: string;
  picture: string;
  place_data: AdCreativePlaceDataFields;
  static_card: boolean;
  video_id: string;
}

