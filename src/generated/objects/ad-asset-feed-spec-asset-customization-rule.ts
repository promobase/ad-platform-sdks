import type { AdAssetCustomizationRuleCustomizationSpecFields } from "./ad-asset-customization-rule-customization-spec.ts";
import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";

export interface AdAssetFeedSpecAssetCustomizationRuleFields {
  body_label: AdAssetFeedSpecAssetLabelFields;
  call_to_action_label: AdAssetFeedSpecAssetLabelFields;
  call_to_action_type_label: AdAssetFeedSpecAssetLabelFields;
  caption_label: AdAssetFeedSpecAssetLabelFields;
  carousel_label: AdAssetFeedSpecAssetLabelFields;
  customization_spec: AdAssetCustomizationRuleCustomizationSpecFields;
  description_label: AdAssetFeedSpecAssetLabelFields;
  image_label: AdAssetFeedSpecAssetLabelFields;
  is_default: boolean;
  link_url_label: AdAssetFeedSpecAssetLabelFields;
  priority: number;
  title_label: AdAssetFeedSpecAssetLabelFields;
  video_label: AdAssetFeedSpecAssetLabelFields;
}

