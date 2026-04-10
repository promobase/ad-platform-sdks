import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { AutomotiveModelFields } from "./automotive-model.ts";
import type { BusinessFields } from "./business.ts";
import type { CPASLsbImageBankFields } from "./cpas-lsb-image-bank.ts";
import type { CatalogContentVersionConfigFields } from "./catalog-content-version-config.ts";
import type { CheckBatchRequestStatusFields } from "./check-batch-request-status.ts";
import type { CollaborativeAdsShareSettingsFields } from "./collaborative-ads-share-settings.ts";
import type { CommerceMerchantSettingsFields } from "./commerce-merchant-settings.ts";
import type { CreatorAssetCreativeFields } from "./creator-asset-creative.ts";
import type { DestinationFields } from "./destination.ts";
import type { ExternalEventSourceFields } from "./external-event-source.ts";
import type { FlightFields } from "./flight.ts";
import type { HomeListingFields } from "./home-listing.ts";
import type { HotelFields } from "./hotel.ts";
import type { ProductCatalogCategoryFields } from "./product-catalog-category.ts";
import type { ProductCatalogCheckMarketplacePartnerDealsStatusFields } from "./product-catalog-check-marketplace-partner-deals-status.ts";
import type { ProductCatalogCheckMarketplacePartnerSellersStatusFields } from "./product-catalog-check-marketplace-partner-sellers-status.ts";
import type { ProductCatalogDataSourceFields } from "./product-catalog-data-source.ts";
import type { ProductCatalogDiagnosticGroupFields } from "./product-catalog-diagnostic-group.ts";
import type { ProductCatalogHotelRoomsBatchFields } from "./product-catalog-hotel-rooms-batch.ts";
import type { ProductCatalogImageSettingsFields } from "./product-catalog-image-settings.ts";
import type { ProductCatalogPricingVariablesBatchFields } from "./product-catalog-pricing-variables-batch.ts";
import type { ProductCatalogProductSetsBatchFields } from "./product-catalog-product-sets-batch.ts";
import type { ProductEventStatFields } from "./product-event-stat.ts";
import type { ProductFeedFields } from "./product-feed.ts";
import type { ProductGroupFields } from "./product-group.ts";
import type { ProductItemFields } from "./product-item.ts";
import type { ProductSetFields } from "./product-set.ts";
import type { StoreCatalogSettingsFields } from "./store-catalog-settings.ts";
import type { UserFields } from "./user.ts";
import type { VehicleFields } from "./vehicle.ts";
import type { VehicleOfferFields } from "./vehicle-offer.ts";

export interface ProductCatalogFields {
  ad_account_to_collaborative_ads_share_settings: CollaborativeAdsShareSettingsFields;
  agency_collaborative_ads_share_settings: CollaborativeAdsShareSettingsFields;
  business: BusinessFields;
  catalog_store: StoreCatalogSettingsFields;
  commerce_merchant_settings: CommerceMerchantSettingsFields;
  creator_user: UserFields;
  da_display_settings: ProductCatalogImageSettingsFields;
  default_image_url: string;
  fallback_image_url: string[];
  feed_count: number;
  id: string;
  is_catalog_segment: boolean;
  is_local_catalog: boolean;
  name: string;
  owner_business: BusinessFields;
  product_count: number;
  store_catalog_settings: StoreCatalogSettingsFields;
  user_access_expire_time: string;
  vertical: string;
}

export interface ProductCatalogDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateAgenciesParams {
  business: string;
  enabled_collab_terms?: string[];
  permitted_roles?: string[];
  permitted_tasks?: string[];
  skip_defaults?: boolean;
  utm_settings?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface ProductCatalogListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateAssignedUsersParams {
  tasks: string[];
  user: number;
  [key: string]: unknown;
}

export interface ProductCatalogListAutomotiveModelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateBatchParams {
  allow_upsert?: boolean;
  fbe_external_business_id?: string;
  requests: Record<string, unknown>[];
  version?: number;
  [key: string]: unknown;
}

export interface ProductCatalogCreateCatalogStoreParams {
  page: string;
  [key: string]: unknown;
}

export interface ProductCatalogListCategoriesParams {
  categorization_criteria: string;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateCategoriesParams {
  data: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface ProductCatalogListCheckBatchRequestStatusParams {
  error_priority?: string;
  handle: string;
  load_ids_of_invalid_requests?: boolean;
  [key: string]: unknown;
}

export interface ProductCatalogListCheckMarketplacePartnerDealsStatusParams {
  session_id: string;
  [key: string]: unknown;
}

export interface ProductCatalogListCheckMarketplacePartnerSellersStatusParams {
  session_id: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateCpasLsbImageBankParams {
  ad_group_id?: number;
  agency_business_id?: number;
  backup_image_urls: string[];
  [key: string]: unknown;
}

export interface ProductCatalogListCreatorAssetCreativesParams {
  moderation_status?: string;
  [key: string]: unknown;
}

export interface ProductCatalogListDataSourcesParams {
  ingestion_source_type?: string;
  [key: string]: unknown;
}

export interface ProductCatalogListDestinationsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogListDiagnosticsParams {
  affected_channels?: string[];
  affected_entities?: string[];
  affected_features?: string[];
  severities?: string[];
  types?: string[];
  [key: string]: unknown;
}

export interface ProductCatalogListEventStatsParams {
  breakdowns?: string[];
  [key: string]: unknown;
}

export interface ProductCatalogDeleteExternalEventSourcesParams {
  external_event_sources?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateExternalEventSourcesParams {
  external_event_sources?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogListFlightsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateGeolocatedItemsBatchParams {
  allow_upsert?: boolean;
  item_type: string;
  requests: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogListHomeListingsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateHomeListingsParams {
  address: Record<string, unknown>;
  availability: string;
  currency: string;
  description?: string;
  home_listing_id: string;
  images: Record<string, unknown>[];
  listing_type?: string;
  name: string;
  num_baths?: number;
  num_beds?: number;
  num_units?: number;
  price: number;
  property_type?: string;
  url: string;
  year_built: number;
  [key: string]: unknown;
}

export interface ProductCatalogListHotelRoomsBatchParams {
  handle: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateHotelRoomsBatchParams {
  file?: File | Blob | ReadableStream;
  password?: string;
  standard: string;
  update_only?: boolean;
  url?: string;
  username?: string;
  [key: string]: unknown;
}

export interface ProductCatalogListHotelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateHotelsParams {
  address: Record<string, unknown>;
  applinks?: Record<string, unknown>;
  base_price?: number;
  brand?: string;
  currency?: string;
  description: string;
  guest_ratings?: Record<string, unknown>[];
  hotel_id?: string;
  images: Record<string, unknown>[];
  name: string;
  phone?: string;
  star_rating?: number;
  url: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateItemsBatchParams {
  allow_upsert?: boolean;
  item_sub_type?: string;
  item_type: string;
  requests: Record<string, unknown>;
  version?: number;
  [key: string]: unknown;
}

export interface ProductCatalogCreateLocalizedItemsBatchParams {
  allow_upsert?: boolean;
  item_type: string;
  requests: Record<string, unknown>;
  version?: number;
  [key: string]: unknown;
}

export interface ProductCatalogCreateMarketplacePartnerDealsDetailsParams {
  requests: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateMarketplacePartnerSellersDetailsParams {
  requests: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateMarketplacePartnerSignalsParams {
  conversion_type?: string;
  event_id?: string;
  event_name: string;
  event_source_url?: string;
  event_time: string;
  offer_data?: Record<string, unknown>;
  order_data?: Record<string, unknown>;
  user_data: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateMediaTitlesParams {
  additional_image_urls?: string[];
  android_app_name?: string;
  android_class?: string;
  android_package?: string;
  android_url?: string;
  awards?: string[];
  cast?: string[];
  category?: string;
  currency?: string;
  description?: string;
  director?: string[];
  fb_product_category?: string;
  genre?: string[];
  image_url: string;
  ios_app_name?: string;
  ios_app_store_id?: number;
  ios_url?: string;
  ipad_app_name?: string;
  ipad_app_store_id?: number;
  ipad_url?: string;
  iphone_app_name?: string;
  iphone_app_store_id?: number;
  iphone_url?: string;
  media_category?: string;
  name: string;
  price?: number;
  rating?: string;
  release_date?: string;
  retailer_id: string;
  url?: string;
  windows_phone_app_id?: string;
  windows_phone_app_name?: string;
  windows_phone_url?: string;
  [key: string]: unknown;
}

export interface ProductCatalogListPricingVariablesBatchParams {
  handle: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreatePricingVariablesBatchParams {
  file?: File | Blob | ReadableStream;
  password?: string;
  standard: string;
  update_only?: boolean;
  url?: string;
  username?: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateProductFeedsParams {
  country?: string;
  default_currency?: string;
  deletion_enabled?: boolean;
  delimiter?: string;
  encoding?: string;
  feed_type?: string;
  file_name?: string;
  ingestion_source_type?: string;
  item_sub_type?: string;
  migrated_from_feed_id?: string;
  name?: string;
  override_type?: string;
  override_value?: string;
  primary_feed_ids?: string[];
  quoted_fields_mode?: string;
  rules?: string[];
  schedule?: string;
  selected_override_fields?: string[];
  update_schedule?: string;
  use_case?: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateProductGroupsParams {
  retailer_id?: string;
  variants?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface ProductCatalogListProductSetsParams {
  ancestor_id?: string;
  has_children?: boolean;
  parent_id?: string;
  retailer_id?: string;
  [key: string]: unknown;
}

export interface ProductCatalogCreateProductSetsParams {
  filter?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  name: string;
  ordering_info?: number[];
  publish_to_shops?: Record<string, unknown>[];
  retailer_id?: string;
  [key: string]: unknown;
}

export interface ProductCatalogListProductSetsBatchParams {
  handle: string;
  [key: string]: unknown;
}

export interface ProductCatalogListProductsParams {
  bulk_pagination?: boolean;
  error_priority?: string;
  error_type?: string;
  filter?: Record<string, unknown>;
  return_only_approved_products?: boolean;
  [key: string]: unknown;
}

export interface ProductCatalogCreateProductsParams {
  additional_image_urls?: string[];
  additional_variant_attributes?: Record<string, unknown>;
  age_group?: string;
  allow_upsert?: boolean;
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
  currency: string;
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
  name: string;
  ordering_index?: number;
  origin_country?: string;
  pattern?: string;
  price: number;
  product_priority_0?: number;
  product_priority_1?: number;
  product_priority_2?: number;
  product_priority_3?: number;
  product_priority_4?: number;
  product_type?: string;
  quantity_to_sell_on_facebook?: number;
  retailer_id?: string;
  retailer_product_group_id?: string;
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

export interface ProductCatalogCreateUpdateGeneratedImageConfigParams {
  data: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface ProductCatalogListVehicleOffersParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogListVehiclesParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductCatalogCreateVehiclesParams {
  address: Record<string, unknown>;
  applinks?: Record<string, unknown>;
  availability?: string;
  body_style: string;
  condition?: string;
  currency: string;
  date_first_on_lot?: string;
  dealer_id?: string;
  dealer_name?: string;
  dealer_phone?: string;
  description: string;
  drivetrain?: string;
  exterior_color: string;
  fb_page_id?: string;
  fuel_type?: string;
  images: Record<string, unknown>[];
  interior_color?: string;
  make: string;
  mileage: Record<string, unknown>;
  model: string;
  price: number;
  state_of_vehicle: string;
  title: string;
  transmission?: string;
  trim?: string;
  url: string;
  vehicle_id: string;
  vehicle_type?: string;
  vin: string;
  year: number;
  [key: string]: unknown;
}

export interface ProductCatalogCreateVersionItemsBatchParams {
  allow_upsert?: boolean;
  item_type: string;
  item_version: string;
  requests: Record<string, unknown>;
  version?: number;
  [key: string]: unknown;
}

export interface ProductCatalogUpdateParams {
  additional_vertical_option?: string;
  da_display_settings?: Record<string, unknown>;
  default_image_url?: string;
  destination_catalog_settings?: Record<string, unknown>;
  fallback_image_url?: string;
  flight_catalog_settings?: Record<string, unknown>;
  name?: string;
  partner_integration?: Record<string, unknown>;
  store_catalog_settings?: Record<string, unknown>;
  [key: string]: unknown;
}

export function productCatalogNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductCatalogFields,
    get: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductCatalogFields, F[number]>>(`${id}`, opts),
    update: (params: ProductCatalogUpdateParams) =>
      client.post<ProductCatalogFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    agencies: {
      __path: `${id}/agencies`,
      __brand: undefined as unknown as BusinessFields,
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateAgenciesParams) =>
        client.post<ProductCatalogFields>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: ProductCatalogDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    assignedUsers: {
      __path: `${id}/assigned_users`,
      __brand: undefined as unknown as AssignedUserFields,
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: ProductCatalogListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateAssignedUsersParams) =>
        client.post<ProductCatalogFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: ProductCatalogDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    automotiveModels: <F extends (keyof AutomotiveModelFields)[]>(opts: { fields: F; params?: ProductCatalogListAutomotiveModelsParams }) =>
      new Cursor<Pick<AutomotiveModelFields, F[number]>>(client, `${id}/automotive_models`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createBatch: (params: ProductCatalogCreateBatchParams) =>
      client.post<ProductCatalogFields>(`${id}/batch`, params as Record<string, unknown>),
    createCatalogStore: (params: ProductCatalogCreateCatalogStoreParams) =>
      client.post<StoreCatalogSettingsFields>(`${id}/catalog_store`, params as Record<string, unknown>),
    categories: {
      __path: `${id}/categories`,
      __brand: undefined as unknown as ProductCatalogCategoryFields,
      list: <F extends (keyof ProductCatalogCategoryFields)[]>(opts: { fields: F; params?: ProductCatalogListCategoriesParams }) =>
        new Cursor<Pick<ProductCatalogCategoryFields, F[number]>>(client, `${id}/categories`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateCategoriesParams) =>
        client.post<ProductCatalogCategoryFields>(`${id}/categories`, params as Record<string, unknown>),
    },
    checkBatchRequestStatus: <F extends (keyof CheckBatchRequestStatusFields)[]>(opts: { fields: F; params?: ProductCatalogListCheckBatchRequestStatusParams }) =>
      new Cursor<Pick<CheckBatchRequestStatusFields, F[number]>>(client, `${id}/check_batch_request_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    checkMarketplacePartnerDealsStatus: <F extends (keyof ProductCatalogCheckMarketplacePartnerDealsStatusFields)[]>(opts: { fields: F; params?: ProductCatalogListCheckMarketplacePartnerDealsStatusParams }) =>
      new Cursor<Pick<ProductCatalogCheckMarketplacePartnerDealsStatusFields, F[number]>>(client, `${id}/check_marketplace_partner_deals_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    checkMarketplacePartnerSellersStatus: <F extends (keyof ProductCatalogCheckMarketplacePartnerSellersStatusFields)[]>(opts: { fields: F; params?: ProductCatalogListCheckMarketplacePartnerSellersStatusParams }) =>
      new Cursor<Pick<ProductCatalogCheckMarketplacePartnerSellersStatusFields, F[number]>>(client, `${id}/check_marketplace_partner_sellers_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    collaborativeAdsLsbImageBank: <F extends (keyof CPASLsbImageBankFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CPASLsbImageBankFields, F[number]>>(client, `${id}/collaborative_ads_lsb_image_bank`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    collaborativeAdsShareSettings: <F extends (keyof CollaborativeAdsShareSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CollaborativeAdsShareSettingsFields, F[number]>>(client, `${id}/collaborative_ads_share_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createCpasLsbImageBank: (params: ProductCatalogCreateCpasLsbImageBankParams) =>
      client.post<CPASLsbImageBankFields>(`${id}/cpas_lsb_image_bank`, params as Record<string, unknown>),
    creatorAssetCreatives: <F extends (keyof CreatorAssetCreativeFields)[]>(opts: { fields: F; params?: ProductCatalogListCreatorAssetCreativesParams }) =>
      new Cursor<Pick<CreatorAssetCreativeFields, F[number]>>(client, `${id}/creator_asset_creatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    dataSources: <F extends (keyof ProductCatalogDataSourceFields)[]>(opts: { fields: F; params?: ProductCatalogListDataSourcesParams }) =>
      new Cursor<Pick<ProductCatalogDataSourceFields, F[number]>>(client, `${id}/data_sources`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    destinations: <F extends (keyof DestinationFields)[]>(opts: { fields: F; params?: ProductCatalogListDestinationsParams }) =>
      new Cursor<Pick<DestinationFields, F[number]>>(client, `${id}/destinations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    diagnostics: <F extends (keyof ProductCatalogDiagnosticGroupFields)[]>(opts: { fields: F; params?: ProductCatalogListDiagnosticsParams }) =>
      new Cursor<Pick<ProductCatalogDiagnosticGroupFields, F[number]>>(client, `${id}/diagnostics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    eventStats: <F extends (keyof ProductEventStatFields)[]>(opts: { fields: F; params?: ProductCatalogListEventStatsParams }) =>
      new Cursor<Pick<ProductEventStatFields, F[number]>>(client, `${id}/event_stats`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    externalEventSources: {
      __path: `${id}/external_event_sources`,
      __brand: undefined as unknown as ExternalEventSourceFields,
      list: <F extends (keyof ExternalEventSourceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ExternalEventSourceFields, F[number]>>(client, `${id}/external_event_sources`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateExternalEventSourcesParams) =>
        client.post<ProductCatalogFields>(`${id}/external_event_sources`, params as Record<string, unknown>),
      delete: (params: ProductCatalogDeleteExternalEventSourcesParams) =>
        client.delete(`${id}/external_event_sources`, params as Record<string, unknown> ?? {}),
    },
    flights: <F extends (keyof FlightFields)[]>(opts: { fields: F; params?: ProductCatalogListFlightsParams }) =>
      new Cursor<Pick<FlightFields, F[number]>>(client, `${id}/flights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createGeolocatedItemsBatch: (params: ProductCatalogCreateGeolocatedItemsBatchParams) =>
      client.post<ProductCatalogFields>(`${id}/geolocated_items_batch`, params as Record<string, unknown>),
    homeListings: {
      __path: `${id}/home_listings`,
      __brand: undefined as unknown as HomeListingFields,
      list: <F extends (keyof HomeListingFields)[]>(opts: { fields: F; params?: ProductCatalogListHomeListingsParams }) =>
        new Cursor<Pick<HomeListingFields, F[number]>>(client, `${id}/home_listings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateHomeListingsParams) =>
        client.post<HomeListingFields>(`${id}/home_listings`, params as Record<string, unknown>),
    },
    hotelRoomsBatch: {
      __path: `${id}/hotel_rooms_batch`,
      __brand: undefined as unknown as ProductCatalogHotelRoomsBatchFields,
      list: <F extends (keyof ProductCatalogHotelRoomsBatchFields)[]>(opts: { fields: F; params?: ProductCatalogListHotelRoomsBatchParams }) =>
        new Cursor<Pick<ProductCatalogHotelRoomsBatchFields, F[number]>>(client, `${id}/hotel_rooms_batch`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateHotelRoomsBatchParams) =>
        client.post<ProductCatalogFields>(`${id}/hotel_rooms_batch`, params as Record<string, unknown>),
    },
    hotels: {
      __path: `${id}/hotels`,
      __brand: undefined as unknown as HotelFields,
      list: <F extends (keyof HotelFields)[]>(opts: { fields: F; params?: ProductCatalogListHotelsParams }) =>
        new Cursor<Pick<HotelFields, F[number]>>(client, `${id}/hotels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateHotelsParams) =>
        client.post<HotelFields>(`${id}/hotels`, params as Record<string, unknown>),
    },
    createItemsBatch: (params: ProductCatalogCreateItemsBatchParams) =>
      client.post<ProductCatalogFields>(`${id}/items_batch`, params as Record<string, unknown>),
    createLocalizedItemsBatch: (params: ProductCatalogCreateLocalizedItemsBatchParams) =>
      client.post<ProductCatalogFields>(`${id}/localized_items_batch`, params as Record<string, unknown>),
    createMarketplacePartnerDealsDetail: (params: ProductCatalogCreateMarketplacePartnerDealsDetailsParams) =>
      client.post<ProductCatalogFields>(`${id}/marketplace_partner_deals_details`, params as Record<string, unknown>),
    createMarketplacePartnerSellersDetail: (params: ProductCatalogCreateMarketplacePartnerSellersDetailsParams) =>
      client.post<ProductCatalogFields>(`${id}/marketplace_partner_sellers_details`, params as Record<string, unknown>),
    createMarketplacePartnerSignal: (params: ProductCatalogCreateMarketplacePartnerSignalsParams) =>
      client.post<ProductCatalogFields>(`${id}/marketplace_partner_signals`, params as Record<string, unknown>),
    createMediaTitle: (params: ProductCatalogCreateMediaTitlesParams) =>
      client.post<Record<string, unknown>>(`${id}/media_titles`, params as Record<string, unknown>),
    pricingVariablesBatch: {
      __path: `${id}/pricing_variables_batch`,
      __brand: undefined as unknown as ProductCatalogPricingVariablesBatchFields,
      list: <F extends (keyof ProductCatalogPricingVariablesBatchFields)[]>(opts: { fields: F; params?: ProductCatalogListPricingVariablesBatchParams }) =>
        new Cursor<Pick<ProductCatalogPricingVariablesBatchFields, F[number]>>(client, `${id}/pricing_variables_batch`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreatePricingVariablesBatchParams) =>
        client.post<ProductCatalogFields>(`${id}/pricing_variables_batch`, params as Record<string, unknown>),
    },
    productFeeds: {
      __path: `${id}/product_feeds`,
      __brand: undefined as unknown as ProductFeedFields,
      list: <F extends (keyof ProductFeedFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductFeedFields, F[number]>>(client, `${id}/product_feeds`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateProductFeedsParams) =>
        client.post<ProductFeedFields>(`${id}/product_feeds`, params as Record<string, unknown>),
    },
    productGroups: {
      __path: `${id}/product_groups`,
      __brand: undefined as unknown as ProductGroupFields,
      list: <F extends (keyof ProductGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductGroupFields, F[number]>>(client, `${id}/product_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateProductGroupsParams) =>
        client.post<ProductGroupFields>(`${id}/product_groups`, params as Record<string, unknown>),
    },
    productSets: {
      __path: `${id}/product_sets`,
      __brand: undefined as unknown as ProductSetFields,
      list: <F extends (keyof ProductSetFields)[]>(opts: { fields: F; params?: ProductCatalogListProductSetsParams }) =>
        new Cursor<Pick<ProductSetFields, F[number]>>(client, `${id}/product_sets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateProductSetsParams) =>
        client.post<ProductSetFields>(`${id}/product_sets`, params as Record<string, unknown>),
    },
    productSetsBatch: <F extends (keyof ProductCatalogProductSetsBatchFields)[]>(opts: { fields: F; params?: ProductCatalogListProductSetsBatchParams }) =>
      new Cursor<Pick<ProductCatalogProductSetsBatchFields, F[number]>>(client, `${id}/product_sets_batch`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    products: {
      __path: `${id}/products`,
      __brand: undefined as unknown as ProductItemFields,
      list: <F extends (keyof ProductItemFields)[]>(opts: { fields: F; params?: ProductCatalogListProductsParams }) =>
        new Cursor<Pick<ProductItemFields, F[number]>>(client, `${id}/products`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateProductsParams) =>
        client.post<ProductItemFields>(`${id}/products`, params as Record<string, unknown>),
    },
    createUpdateGeneratedImageConfig: (params: ProductCatalogCreateUpdateGeneratedImageConfigParams) =>
      client.post<ProductCatalogFields>(`${id}/update_generated_image_config`, params as Record<string, unknown>),
    vehicleOffers: <F extends (keyof VehicleOfferFields)[]>(opts: { fields: F; params?: ProductCatalogListVehicleOffersParams }) =>
      new Cursor<Pick<VehicleOfferFields, F[number]>>(client, `${id}/vehicle_offers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    vehicles: {
      __path: `${id}/vehicles`,
      __brand: undefined as unknown as VehicleFields,
      list: <F extends (keyof VehicleFields)[]>(opts: { fields: F; params?: ProductCatalogListVehiclesParams }) =>
        new Cursor<Pick<VehicleFields, F[number]>>(client, `${id}/vehicles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductCatalogCreateVehiclesParams) =>
        client.post<VehicleFields>(`${id}/vehicles`, params as Record<string, unknown>),
    },
    versionConfigs: <F extends (keyof CatalogContentVersionConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogContentVersionConfigFields, F[number]>>(client, `${id}/version_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createVersionItemsBatch: (params: ProductCatalogCreateVersionItemsBatchParams) =>
      client.post<ProductCatalogFields>(`${id}/version_items_batch`, params as Record<string, unknown>),
  };
}

