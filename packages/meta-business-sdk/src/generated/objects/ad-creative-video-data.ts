import type { AdCreativeCollectionThumbnailInfoFields } from "./ad-creative-collection-thumbnail-info.ts";
import type { AdCreativeLinkDataCallToActionFields } from "./ad-creative-link-data-call-to-action.ts";
import type { AdCreativePostClickConfigurationFields } from "./ad-creative-post-click-configuration.ts";
import type { AdCustomizationRuleSpecFields } from "./ad-customization-rule-spec.ts";
import type { TargetingFields } from "./targeting.ts";

export interface AdCreativeVideoDataFields {
  additional_image_index: number;
  branded_content_shared_to_sponsor_status: string;
  branded_content_sponsor_page_id: string;
  call_to_action: AdCreativeLinkDataCallToActionFields;
  collection_thumbnails: AdCreativeCollectionThumbnailInfoFields[];
  customization_rules_spec: AdCustomizationRuleSpecFields[];
  image_hash: string;
  image_url: string;
  link_description: string;
  message: string;
  offer_id: string;
  page_welcome_message: string;
  post_click_configuration: AdCreativePostClickConfigurationFields;
  retailer_item_ids: string[];
  targeting: TargetingFields;
  title: string;
  video_id: string;
}

