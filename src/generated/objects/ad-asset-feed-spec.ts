import type { AdAssetFeedAdditionalDataFields } from "./ad-asset-feed-additional-data.ts";
import type { AdAssetFeedSpecAssetCustomizationRuleFields } from "./ad-asset-feed-spec-asset-customization-rule.ts";
import type { AdAssetFeedSpecBodyFields } from "./ad-asset-feed-spec-body.ts";
import type { AdAssetFeedSpecCallToActionFields } from "./ad-asset-feed-spec-call-to-action.ts";
import type { AdAssetFeedSpecCaptionFields } from "./ad-asset-feed-spec-caption.ts";
import type { AdAssetFeedSpecCarouselFields } from "./ad-asset-feed-spec-carousel.ts";
import type { AdAssetFeedSpecDescriptionFields } from "./ad-asset-feed-spec-description.ts";
import type { AdAssetFeedSpecEventsFields } from "./ad-asset-feed-spec-events.ts";
import type { AdAssetFeedSpecGroupRuleFields } from "./ad-asset-feed-spec-group-rule.ts";
import type { AdAssetFeedSpecImageFields } from "./ad-asset-feed-spec-image.ts";
import type { AdAssetFeedSpecLinkURLFields } from "./ad-asset-feed-spec-link-url.ts";
import type { AdAssetFeedSpecTitleFields } from "./ad-asset-feed-spec-title.ts";
import type { AdAssetFeedSpecVideoFields } from "./ad-asset-feed-spec-video.ts";
import type { AdAssetMessageExtensionsFields } from "./ad-asset-message-extensions.ts";
import type { AdAssetOnsiteDestinationsFields } from "./ad-asset-onsite-destinations.ts";
import type { URLFields } from "./url.ts";

export interface AdAssetFeedSpecFields {
  ad_formats: string[];
  additional_data: AdAssetFeedAdditionalDataFields;
  app_product_page_id: string;
  asset_customization_rules: AdAssetFeedSpecAssetCustomizationRuleFields[];
  audios: Record<string, unknown>[];
  autotranslate: string[];
  bodies: AdAssetFeedSpecBodyFields[];
  call_ads_configuration: Record<string, unknown>;
  call_to_action_types: string[];
  call_to_actions: AdAssetFeedSpecCallToActionFields[];
  captions: AdAssetFeedSpecCaptionFields[];
  carousels: AdAssetFeedSpecCarouselFields[];
  ctwa_consent_data: Record<string, unknown>[];
  descriptions: AdAssetFeedSpecDescriptionFields[];
  events: AdAssetFeedSpecEventsFields[];
  groups: AdAssetFeedSpecGroupRuleFields[];
  images: AdAssetFeedSpecImageFields[];
  link_urls: AdAssetFeedSpecLinkURLFields[];
  message_extensions: AdAssetMessageExtensionsFields[];
  onsite_destinations: AdAssetOnsiteDestinationsFields[];
  optimization_type: string;
  promotional_metadata: Record<string, unknown>;
  reasons_to_shop: boolean;
  shops_bundle: boolean;
  titles: AdAssetFeedSpecTitleFields[];
  translations: Record<string, unknown>[];
  upcoming_events: Record<string, unknown>[];
  videos: AdAssetFeedSpecVideoFields[];
}

