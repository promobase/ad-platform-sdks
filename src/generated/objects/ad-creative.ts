import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdAssetFeedSpecFields } from "./ad-asset-feed-spec.ts";
import type { AdCreativeAdDisclaimerFields } from "./ad-creative-ad-disclaimer.ts";
import type { AdCreativeBrandedContentAdsFields } from "./ad-creative-branded-content-ads.ts";
import type { AdCreativeContextualMultiAdsFields } from "./ad-creative-contextual-multi-ads.ts";
import type { AdCreativeDegreesOfFreedomSpecFields } from "./ad-creative-degrees-of-freedom-spec.ts";
import type { AdCreativeDestinationSpecFields } from "./ad-creative-destination-spec.ts";
import type { AdCreativeFacebookBrandedContentFields } from "./ad-creative-facebook-branded-content.ts";
import type { AdCreativeFormatTransformationSpecFields } from "./ad-creative-format-transformation-spec.ts";
import type { AdCreativeInsightsFields } from "./ad-creative-insights.ts";
import type { AdCreativeInstagramBrandedContentFields } from "./ad-creative-instagram-branded-content.ts";
import type { AdCreativeInteractiveComponentsSpecFields } from "./ad-creative-interactive-components-spec.ts";
import type { AdCreativeLinkDataCallToActionFields } from "./ad-creative-link-data-call-to-action.ts";
import type { AdCreativeMarketingMessageStructuredSpecFields } from "./ad-creative-marketing-message-structured-spec.ts";
import type { AdCreativeMediaSourcingSpecFields } from "./ad-creative-media-sourcing-spec.ts";
import type { AdCreativeObjectStorySpecFields } from "./ad-creative-object-story-spec.ts";
import type { AdCreativeOmnichannelLinkSpecFields } from "./ad-creative-omnichannel-link-spec.ts";
import type { AdCreativePlatformCustomizationFields } from "./ad-creative-platform-customization.ts";
import type { AdCreativePortraitCustomizationsFields } from "./ad-creative-portrait-customizations.ts";
import type { AdCreativeProductDataFields } from "./ad-creative-product-data.ts";
import type { AdCreativeProductSuggestionSettingsFields } from "./ad-creative-product-suggestion-settings.ts";
import type { AdCreativeRecommenderSettingsFields } from "./ad-creative-recommender-settings.ts";
import type { AdCreativeRegionalRegulationDisclaimerFields } from "./ad-creative-regional-regulation-disclaimer.ts";
import type { AdCreativeSourcingSpecFields } from "./ad-creative-sourcing-spec.ts";
import type { AdCreativeTemplateURLSpecFields } from "./ad-creative-template-url-spec.ts";
import type { AdLabelFields } from "./ad-label.ts";
import type { AdPreviewFields } from "./ad-preview.ts";
import type { AdsImageCropsFields } from "./ads-image-crops.ts";

export interface AdCreativeFields {
  account_id: string;
  actor_id: string;
  ad_disclaimer_spec: AdCreativeAdDisclaimerFields;
  adlabels: AdLabelFields[];
  applink_treatment: string;
  asset_feed_spec: AdAssetFeedSpecFields;
  authorization_category: string;
  auto_update: boolean;
  body: string;
  branded_content: AdCreativeBrandedContentAdsFields;
  branded_content_sponsor_page_id: string;
  bundle_folder_id: string;
  call_to_action: AdCreativeLinkDataCallToActionFields;
  call_to_action_type: string;
  categorization_criteria: string;
  category_media_source: string;
  collaborative_ads_lsb_image_bank_id: string;
  contextual_multi_ads: AdCreativeContextualMultiAdsFields;
  creative_sourcing_spec: AdCreativeSourcingSpecFields;
  degrees_of_freedom_spec: AdCreativeDegreesOfFreedomSpecFields;
  destination_set_id: string;
  destination_spec: AdCreativeDestinationSpecFields;
  dynamic_ad_voice: string;
  effective_authorization_category: string;
  effective_instagram_media_id: string;
  effective_object_story_id: string;
  enable_direct_install: boolean;
  enable_launch_instant_app: boolean;
  existing_post_title: string;
  facebook_branded_content: AdCreativeFacebookBrandedContentFields;
  format_transformation_spec: AdCreativeFormatTransformationSpecFields[];
  id: string;
  image_crops: AdsImageCropsFields;
  image_hash: string;
  image_url: string;
  instagram_branded_content: AdCreativeInstagramBrandedContentFields;
  instagram_permalink_url: string;
  instagram_user_id: string;
  interactive_components_spec: AdCreativeInteractiveComponentsSpecFields;
  link_deep_link_url: string;
  link_destination_display_url: string;
  link_og_id: string;
  link_url: string;
  marketing_message_structured_spec: AdCreativeMarketingMessageStructuredSpecFields;
  media_sourcing_spec: AdCreativeMediaSourcingSpecFields;
  messenger_sponsored_message: string;
  name: string;
  object_id: string;
  object_store_url: string;
  object_story_id: string;
  object_story_spec: AdCreativeObjectStorySpecFields;
  object_type: string;
  object_url: string;
  omnichannel_link_spec: AdCreativeOmnichannelLinkSpecFields;
  page_welcome_message: string;
  photo_album_source_object_story_id: string;
  place_page_set_id: string;
  platform_customizations: AdCreativePlatformCustomizationFields;
  playable_asset_id: string;
  portrait_customizations: AdCreativePortraitCustomizationsFields;
  product_data: AdCreativeProductDataFields[];
  product_set_id: string;
  product_suggestion_settings: AdCreativeProductSuggestionSettingsFields;
  recommender_settings: AdCreativeRecommenderSettingsFields;
  regional_regulation_disclaimer_spec: AdCreativeRegionalRegulationDisclaimerFields;
  source_facebook_post_id: string;
  source_instagram_media_id: string;
  status: string;
  template_url: string;
  template_url_spec: AdCreativeTemplateURLSpecFields;
  thumbnail_id: string;
  thumbnail_url: string;
  title: string;
  url_tags: string;
  use_page_actor_override: boolean;
  video_id: string;
}

export interface AdCreativeCreateAdlabelsParams {
  adlabels: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface AdCreativeListPreviewsParams {
  ad_format: string;
  creative_feature?: string;
  dynamic_asset_label?: string;
  dynamic_creative_spec?: Record<string, unknown>;
  dynamic_customization?: Record<string, unknown>;
  end_date?: string;
  height?: number;
  locale?: string;
  place_page_id?: number;
  post?: Record<string, unknown>;
  product_item_ids?: string[];
  render_type?: string;
  start_date?: string;
  width?: number;
  [key: string]: unknown;
}

export interface AdCreativeUpdateParams {
  account_id?: string;
  adlabels?: Record<string, unknown>[];
  name?: string;
  status?: string;
  [key: string]: unknown;
}

export function adCreativeNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdCreativeFields, F[number]>>(`${id}`, opts),
    update: (params: AdCreativeUpdateParams) =>
      client.post<AdCreativeFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    createAdlabel: (params: AdCreativeCreateAdlabelsParams) =>
      client.post<AdCreativeFields>(`${id}/adlabels`, params as Record<string, unknown>),
    creativeInsights: <F extends (keyof AdCreativeInsightsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdCreativeInsightsFields, F[number]>>(client, `${id}/creative_insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    previews: <F extends (keyof AdPreviewFields)[]>(opts: { fields: F; params?: AdCreativeListPreviewsParams }) =>
      new Cursor<Pick<AdPreviewFields, F[number]>>(client, `${id}/previews`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

