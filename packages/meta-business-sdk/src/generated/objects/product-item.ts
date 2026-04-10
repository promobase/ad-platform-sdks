import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AIGeneratedProductImageFields } from "./ai-generated-product-image.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { CatalogSubVerticalListFields } from "./catalog-sub-vertical-list.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { GroupFields } from "./group.ts";
import type { OverrideDetailsFields } from "./override-details.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProductFeedFields } from "./product-feed.ts";
import type { ProductGroupFields } from "./product-group.ts";
import type { ProductImageFields } from "./product-image.ts";
import type { ProductItemCommerceInsightsFields } from "./product-item-commerce-insights.ts";
import type { ProductItemErrorFields } from "./product-item-error.ts";
import type { ProductItemImporterAddressFields } from "./product-item-importer-address.ts";
import type { ProductItemInvalidationErrorFields } from "./product-item-invalidation-error.ts";
import type { ProductItemLocalInfoFields } from "./product-item-local-info.ts";
import type { ProductItemVideoDataFields } from "./product-item-video-data.ts";
import type { ProductSetFields } from "./product-set.ts";
import type { ProductItemAgeGroup, ProductItemAvailability, ProductItemCapabilityToReviewStatus, ProductItemCondition, ProductItemGender, ProductItemImageFetchStatus, ProductItemReviewStatus, ProductItemShippingWeightUnit, ProductItemStatus, ProductItemVideoFetchStatus, ProductItemVisibility } from "../enums.ts";

export interface ProductItemFields {
  additional_image_cdn_urls: Record<string, string>[][];
  additional_image_urls: string[];
  additional_variant_attributes: Record<string, string>[];
  affiliate_seller_rating: number;
  affiliate_seller_rating_count: number;
  age_group: ProductItemAgeGroup;
  applinks: CatalogItemAppLinksFields;
  availability: ProductItemAvailability;
  base_commission_rate: number;
  brand: string;
  bundle_items: string[];
  bundle_retailer_ids: string[];
  capabilities_disabled_by_user: string[];
  capability_to_review_status: Record<string, ProductItemCapabilityToReviewStatus>[];
  category: string;
  category_ranking: number;
  category_specific_fields: CatalogSubVerticalListFields;
  color: string;
  commerce_insights: ProductItemCommerceInsightsFields;
  condition: ProductItemCondition;
  currency: string;
  custom_data: Record<string, string>[];
  custom_label_0: string;
  custom_label_1: string;
  custom_label_2: string;
  custom_label_3: string;
  custom_label_4: string;
  custom_number_0: string;
  custom_number_1: string;
  custom_number_2: string;
  custom_number_3: string;
  custom_number_4: string;
  description: string;
  errors: ProductItemErrorFields[];
  expiration_date: string;
  fb_product_category: string;
  gender: ProductItemGender;
  generated_background_images: AIGeneratedProductImageFields[];
  generated_background_images_ad_usage: boolean;
  gtin: string;
  id: string;
  image_cdn_urls: Record<string, string>[];
  image_fetch_status: ProductItemImageFetchStatus;
  image_url: string;
  images: string[];
  importer_address: ProductItemImporterAddressFields;
  importer_name: string;
  invalidation_errors: ProductItemInvalidationErrorFields[];
  inventory: number;
  is_bundle_hero: boolean;
  live_special_price: string;
  manufacturer_info: string;
  manufacturer_part_number: string;
  marked_for_product_launch: string;
  material: string;
  mobile_link: string;
  name: string;
  ordering_index: number;
  origin_country: string;
  overall_ranking: number;
  parent_product_id: string;
  pattern: string;
  post_conversion_signal_based_enforcement_appeal_eligibility: boolean;
  price: string;
  product_catalog: ProductCatalogFields;
  product_feed: ProductFeedFields;
  product_group: ProductGroupFields;
  product_local_info: ProductItemLocalInfoFields;
  product_relationship: string;
  product_type: string;
  quantity_to_sell_on_facebook: number;
  retailer_id: string;
  retailer_product_group_id: string;
  review_rejection_reasons: string[];
  review_status: ProductItemReviewStatus;
  rich_text_description: string;
  sale_price: string;
  sale_price_end_date: string;
  sale_price_start_date: string;
  shipping_weight_unit: ProductItemShippingWeightUnit;
  shipping_weight_value: number;
  short_description: string;
  size: string;
  start_date: string;
  status: ProductItemStatus;
  tags: string[];
  url: string;
  vendor_id: string;
  video_fetch_status: ProductItemVideoFetchStatus;
  videos: ProductItemVideoDataFields[];
  visibility: ProductItemVisibility;
  wa_compliance_category: string;
}

export interface ProductItemListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export interface ProductItemUpdateParams {
  additional_image_urls?: string[];
  additional_variant_attributes?: Record<string, unknown>;
  age_group?: string;
  android_app_name?: string;
  android_class?: string;
  android_package?: string;
  android_url?: string;
  availability?: string;
  brand?: string;
  category?: string;
  category_specific_fields?: Record<string, unknown>;
  checkout_url?: string;
  color?: string;
  commerce_tax_category?: string;
  condition?: string;
  currency?: string;
  custom_data?: Record<string, unknown>;
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
  custom_number_0?: number;
  custom_number_1?: number;
  custom_number_2?: number;
  custom_number_3?: number;
  custom_number_4?: number;
  description?: string;
  expiration_date?: string;
  fb_product_category?: string;
  gender?: string;
  gtin?: string;
  image_url?: string;
  importer_address?: Record<string, unknown>;
  importer_name?: string;
  inventory?: number;
  ios_app_name?: string;
  ios_app_store_id?: number;
  ios_url?: string;
  ipad_app_name?: string;
  ipad_app_store_id?: number;
  ipad_url?: string;
  iphone_app_name?: string;
  iphone_app_store_id?: number;
  iphone_url?: string;
  launch_date?: string;
  live_special_price?: string;
  manufacturer_info?: string;
  manufacturer_part_number?: string;
  marked_for_product_launch?: string;
  material?: string;
  mobile_link?: string;
  name?: string;
  ordering_index?: number;
  origin_country?: string;
  pattern?: string;
  price?: number;
  product_priority_0?: number;
  product_priority_1?: number;
  product_priority_2?: number;
  product_priority_3?: number;
  product_priority_4?: number;
  product_type?: string;
  quantity_to_sell_on_facebook?: number;
  retailer_id?: string;
  return_policy_days?: number;
  rich_text_description?: string;
  sale_price?: number;
  sale_price_end_date?: string;
  sale_price_start_date?: string;
  short_description?: string;
  size?: string;
  start_date?: string;
  url?: string;
  visibility?: string;
  wa_compliance_category?: string;
  windows_phone_app_id?: string;
  windows_phone_app_name?: string;
  windows_phone_url?: string;
  [key: string]: unknown;
}

export function productItemNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductItemFields,
    get: <F extends (keyof ProductItemFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductItemFields, F[number]>>(`${id}`, opts),
    update: (params: ProductItemUpdateParams) =>
      client.post<ProductItemFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: ProductItemListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    productSets: <F extends (keyof ProductSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductSetFields, F[number]>>(client, `${id}/product_sets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

