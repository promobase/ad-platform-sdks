import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdNetworkAnalyticsAsyncQueryResultFields } from "./ad-network-analytics-async-query-result.ts";
import type { AdNetworkAnalyticsSyncQueryResultFields } from "./ad-network-analytics-sync-query-result.ts";
import type { AdPlacementFields } from "./ad-placement.ts";
import type { AdsDatasetFields } from "./ads-dataset.ts";
import type { BusinessFields } from "./business.ts";
import type { DACheckFields } from "./da-check.ts";
import type { GroupFields } from "./group.ts";
import type { NullNodeFields } from "./null-node.ts";
import type { PermissionFields } from "./permission.ts";

export interface ApplicationFields {
  aam_rules: string;
  an_ad_space_limit: number;
  an_platforms: string[];
  android_key_hash: string[];
  android_sdk_error_categories: Record<string, unknown>[];
  app_domains: string[];
  app_events_config: Record<string, unknown>;
  app_events_feature_bitmask: number;
  app_events_session_timeout: number;
  app_install_tracked: boolean;
  app_name: string;
  app_signals_binding_ios: Record<string, unknown>[];
  app_type: number;
  auth_dialog_data_help_url: string;
  auth_dialog_headline: string;
  auth_dialog_perms_explanation: string;
  auth_referral_default_activity_privacy: string;
  auth_referral_enabled: number;
  auth_referral_extended_perms: string[];
  auth_referral_friend_perms: string[];
  auth_referral_response_type: string;
  auth_referral_user_perms: string[];
  auto_event_mapping_android: Record<string, unknown>[];
  auto_event_mapping_ios: Record<string, unknown>[];
  auto_event_setup_enabled: boolean;
  auto_log_app_events_default: boolean;
  auto_log_app_events_enabled: boolean;
  business: BusinessFields;
  canvas_fluid_height: boolean;
  canvas_fluid_width: number;
  canvas_url: string;
  category: string;
  client_config: Record<string, unknown>;
  company: string;
  config_ids: Record<string, unknown>[];
  configured_ios_sso: boolean;
  contact_email: string;
  created_time: string;
  creator_uid: string;
  daily_active_users: string;
  daily_active_users_rank: number;
  deauth_callback_url: string;
  default_share_mode: string;
  description: string;
  enigma_config: Record<string, unknown>;
  financial_id: string;
  gdpv4_chrome_custom_tabs_enabled: boolean;
  gdpv4_enabled: boolean;
  gdpv4_nux_content: string;
  gdpv4_nux_enabled: boolean;
  has_messenger_product: boolean;
  hosting_url: string;
  icon_url: string;
  id: string;
  ios_bundle_id: string[];
  ios_sdk_dialog_flows: Record<string, unknown>;
  ios_sdk_error_categories: Record<string, unknown>[];
  ios_sfvc_attr: boolean;
  ios_supports_native_proxy_auth_flow: boolean;
  ios_supports_system_auth: boolean;
  ipad_app_store_id: string;
  iphone_app_store_id: string;
  latest_sdk_version: Record<string, unknown>;
  link: string;
  logging_token: string;
  logo_url: string;
  migrations: Record<string, boolean>;
  mobile_profile_section_url: string;
  mobile_web_url: string;
  monthly_active_users: string;
  monthly_active_users_rank: number;
  name: string;
  namespace: string;
  object_store_urls: Record<string, unknown>;
  owner_business: BusinessFields;
  page_tab_default_name: string;
  page_tab_url: string;
  photo_url: string;
  privacy_policy_url: string;
  profile_section_url: string;
  property_id: string;
  protected_mode_rules: Record<string, unknown>;
  real_time_mode_devices: string[];
  restrictions: Record<string, unknown>;
  restrictive_data_filter_params: string;
  restrictive_data_filter_rules: string;
  sdk_update_message: string;
  seamless_login: number;
  secure_canvas_url: string;
  secure_page_tab_url: string;
  server_ip_whitelist: string;
  smart_login_bookmark_icon_url: string;
  smart_login_menu_icon_url: string;
  social_discovery: number;
  subcategory: string;
  suggested_events_setting: string;
  supported_platforms: string[];
  supports_apprequests_fast_app_switch: Record<string, unknown>;
  supports_attribution: boolean;
  supports_implicit_sdk_logging: boolean;
  suppress_native_ios_gdp: boolean;
  terms_of_service_url: string;
  url_scheme_suffix: string;
  user_support_email: string;
  user_support_url: string;
  website_url: string;
  weekly_active_users: string;
}

export interface ApplicationDeleteAccountsParams {
  type?: string;
  uid: number;
  [key: string]: unknown;
}

export interface ApplicationListAccountsParams {
  type?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAccountsParams {
  installed?: boolean;
  minor?: boolean;
  name?: string;
  owner_access_token?: string;
  permissions?: PermissionFields[];
  type?: string;
  uid?: number;
  [key: string]: unknown;
}

export interface ApplicationCreateActivitiesParams {
  advertiser_id?: string;
  advertiser_tracking_enabled?: boolean;
  anon_id?: string;
  app_user_id?: string;
  application_tracking_enabled?: boolean;
  attribution?: string;
  attribution_referrer?: string;
  attribution_sources?: Record<string, unknown>[];
  auto_publish?: boolean;
  bundle_id?: string;
  bundle_short_version?: string;
  bundle_version?: string;
  campaign_ids?: string;
  click_id?: string;
  consider_views?: boolean;
  custom_events?: Record<string, unknown>[];
  custom_events_file?: File | Blob | ReadableStream;
  data_processing_options?: string[];
  data_processing_options_country?: number;
  data_processing_options_state?: number;
  device_token?: string;
  event: string;
  event_id?: string;
  extinfo?: Record<string, unknown>;
  google_install_referrer?: string;
  include_dwell_data?: boolean;
  include_video_data?: boolean;
  install_id?: string;
  install_referrer?: string;
  install_timestamp?: number;
  installer_package?: string;
  is_fb?: boolean;
  limited_data_use?: boolean;
  meta_install_referrer?: string;
  migration_bundle?: string;
  operational_parameters?: Record<string, unknown>[];
  page_id?: number;
  page_scoped_user_id?: number;
  receipt_data?: string;
  sdk_version?: string;
  ud?: Record<string, unknown>;
  url_schemes?: string[];
  user_id?: string;
  user_id_type?: string;
  vendor_id?: string;
  windows_attribution_id?: string;
  [key: string]: unknown;
}

export interface ApplicationListAdnetworkPlacementsParams {
  request_id?: string;
  [key: string]: unknown;
}

export interface ApplicationListAdnetworkanalyticsParams {
  aggregation_period?: string;
  breakdowns?: string[];
  filters?: Record<string, unknown>[];
  limit?: number;
  metrics: string[];
  ordering_column?: string;
  ordering_type?: string;
  should_include_until?: boolean;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAdnetworkanalyticsParams {
  aggregation_period?: string;
  breakdowns?: string[];
  filters?: Record<string, unknown>[];
  limit?: number;
  metrics: string[];
  ordering_column?: string;
  ordering_type?: string;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface ApplicationListAdnetworkanalyticsResultsParams {
  query_ids?: string[];
  [key: string]: unknown;
}

export interface ApplicationListAemAttributionParams {
  advertiser_ids?: string[];
  fb_content_data?: string;
  [key: string]: unknown;
}

export interface ApplicationListAemConversionConfigsParams {
  advertiser_ids?: string[];
  [key: string]: unknown;
}

export interface ApplicationListAemConversionFilterParams {
  catalog_id?: string;
  fb_content_ids?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAemConversionsParams {
  aem_conversions: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface ApplicationCreateAemSkanReadinessParams {
  app_id: number;
  is_aem_ready?: boolean;
  is_app_aem_install_ready?: boolean;
  is_app_aem_ready?: boolean;
  is_skan_ready?: boolean;
  message?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAggregateRevenueParams {
  ecpms?: string[];
  query_ids?: string[];
  request_id?: string;
  sync_api?: boolean;
  [key: string]: unknown;
}

export interface ApplicationCreateAppIndexingParams {
  app_version: string;
  device_session_id?: string;
  extra_info?: string;
  platform: string;
  request_type?: string;
  tree: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ApplicationCreateAppIndexingSessionParams {
  device_session_id: string;
  extinfo?: string;
  [key: string]: unknown;
}

export interface ApplicationListAppInstalledGroupsParams {
  group_id?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAppPushDeviceTokenParams {
  device_id: string;
  device_token: string;
  platform?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateAssetsParams {
  asset: File | Blob | ReadableStream;
  comment?: string;
  type: string;
  [key: string]: unknown;
}

export interface ApplicationListAuthorizedAdaccountsParams {
  business?: string;
  [key: string]: unknown;
}

export interface ApplicationListButtonAutoDetectionDeviceSelectionParams {
  device_id?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateCodelessEventMappingsParams {
  mappings: Record<string, unknown>[];
  mutation_method: string;
  platform: string;
  post_method?: string;
  [key: string]: unknown;
}

export interface ApplicationListDaChecksParams {
  checks?: string[];
  connection_method?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateDomainReportsParams {
  tracking_domains: string[];
  [key: string]: unknown;
}

export interface ApplicationListIapPurchasesParams {
  order_id: string;
  [key: string]: unknown;
}

export interface ApplicationCreateMmpAuditingParams {
  advertiser_id?: string;
  attribution?: string;
  attribution_method?: string;
  attribution_model?: string;
  attribution_referrer?: string;
  auditing_token?: string;
  click_attr_window?: number;
  custom_events?: Record<string, unknown>[];
  decline_reason?: string;
  device_os?: string;
  engagement_type?: string;
  event: string;
  event_id?: string;
  event_reported_time?: number;
  fb_ad_id?: number;
  fb_adgroup_id?: number;
  fb_click_time?: number;
  fb_view_time?: number;
  google_install_referrer?: string;
  inactivity_window_hours?: number;
  install_id?: string;
  is_fb: boolean;
  meta_install_referrer?: string;
  used_install_referrer?: boolean;
  view_attr_window?: number;
  [key: string]: unknown;
}

export interface ApplicationListMobileSdkGkParams {
  device_id?: string;
  extinfo?: Record<string, unknown>;
  os_version?: string;
  platform: string;
  sdk_version: string;
  [key: string]: unknown;
}

export interface ApplicationCreateMonetizedDigitalStoreObjectsParams {
  content_id: string;
  store: string;
  [key: string]: unknown;
}

export interface ApplicationCreateOccludespopupsParams {
  flash?: boolean;
  unity?: boolean;
  [key: string]: unknown;
}

export interface ApplicationListPermissionsParams {
  android_key_hash?: string;
  ios_bundle_id?: string;
  permission?: PermissionFields[];
  proxied_app_id?: number;
  status?: string[];
  [key: string]: unknown;
}

export interface ApplicationListProductsParams {
  product_ids?: string[];
  [key: string]: unknown;
}

export interface ApplicationListSgwDatasetStatusParams {
  dataset_id: number;
  [key: string]: unknown;
}

export interface ApplicationListSgwInstallDeferralLinkParams {
  client_ip?: string;
  dataset_id: number;
  [key: string]: unknown;
}

export interface ApplicationDeleteSubscriptionsParams {
  fields?: string[];
  object?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateSubscriptionsParams {
  callback_url?: string;
  fields?: string[];
  include_values?: boolean;
  object: string;
  verify_token?: string;
  [key: string]: unknown;
}

export interface ApplicationListThreatPrivacyGroupsMemberParams {
  description?: string;
  group_id?: number;
  name?: string;
  [key: string]: unknown;
}

export interface ApplicationListThreatPrivacyGroupsOwnerParams {
  description?: string;
  group_id?: number;
  name?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateUploadsParams {
  file_length?: number;
  file_name?: Record<string, unknown>;
  file_type?: Record<string, unknown>;
  session_type?: string;
  [key: string]: unknown;
}

export interface ApplicationCreateWhatsappBusinessSolutionParams {
  owner_permissions: string[];
  partner_app_id: string;
  partner_permissions: string[];
  solution_name: string;
  [key: string]: unknown;
}

export interface ApplicationListWhatsappBusinessSolutionsParams {
  role?: string;
  [key: string]: unknown;
}

export interface ApplicationUpdateParams {
  allow_cycle_app_secret?: boolean;
  an_platforms?: string[];
  app_domains?: string[];
  app_name?: string;
  app_type?: boolean;
  auth_dialog_headline?: string;
  auth_dialog_perms_explanation?: string;
  auth_referral_enabled?: boolean;
  auth_referral_extended_perms?: string[];
  auth_referral_friend_perms?: string[];
  auth_referral_response_type?: string;
  auth_referral_user_perms?: string[];
  canvas_fluid_height?: boolean;
  canvas_fluid_width?: boolean;
  canvas_url?: string;
  contact_email?: string;
  deauth_callback_url?: string;
  mobile_web_url?: string;
  namespace?: string;
  page_tab_default_name?: string;
  privacy_policy_url?: string;
  restrictions?: string;
  secure_canvas_url?: string;
  secure_page_tab_url?: string;
  server_ip_whitelist?: string[];
  terms_of_service_url?: string;
  url_scheme_suffix?: string;
  user_support_email?: string;
  user_support_url?: string;
  website_url?: string;
  [key: string]: unknown;
}

export function applicationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ApplicationFields,
    get: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ApplicationFields, F[number]>>(`${id}`, opts),
    update: (params: ApplicationUpdateParams) =>
      client.post<ApplicationFields>(`${id}`, params as Record<string, unknown>),
    accounts: {
      __path: `${id}/accounts`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListAccountsParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ApplicationCreateAccountsParams) =>
        client.post<Record<string, unknown>>(`${id}/accounts`, params as Record<string, unknown>),
      delete: (params: ApplicationDeleteAccountsParams) =>
        client.delete(`${id}/accounts`, params as Record<string, unknown> ?? {}),
    },
    createActivity: (params: ApplicationCreateActivitiesParams) =>
      client.post<Record<string, unknown>>(`${id}/activities`, params as Record<string, unknown>),
    adPlacementGroups: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/ad_placement_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adnetworkPlacements: <F extends (keyof AdPlacementFields)[]>(opts: { fields: F; params?: ApplicationListAdnetworkPlacementsParams }) =>
      new Cursor<Pick<AdPlacementFields, F[number]>>(client, `${id}/adnetwork_placements`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adnetworkanalytics: {
      __path: `${id}/adnetworkanalytics`,
      __brand: undefined as unknown as AdNetworkAnalyticsSyncQueryResultFields,
      list: <F extends (keyof AdNetworkAnalyticsSyncQueryResultFields)[]>(opts: { fields: F; params?: ApplicationListAdnetworkanalyticsParams }) =>
        new Cursor<Pick<AdNetworkAnalyticsSyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ApplicationCreateAdnetworkanalyticsParams) =>
        client.post<ApplicationFields>(`${id}/adnetworkanalytics`, params as Record<string, unknown>),
    },
    adnetworkanalyticsResults: <F extends (keyof AdNetworkAnalyticsAsyncQueryResultFields)[]>(opts: { fields: F; params?: ApplicationListAdnetworkanalyticsResultsParams }) =>
      new Cursor<Pick<AdNetworkAnalyticsAsyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics_results`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    aemAttribution: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListAemAttributionParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/aem_attribution`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    aemConversionConfigs: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListAemConversionConfigsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/aem_conversion_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    aemConversionFilter: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListAemConversionFilterParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/aem_conversion_filter`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAemConversion: (params: ApplicationCreateAemConversionsParams) =>
      client.post<Record<string, unknown>>(`${id}/aem_conversions`, params as Record<string, unknown>),
    createAemSkanReadiness: (params: ApplicationCreateAemSkanReadinessParams) =>
      client.post<Record<string, unknown>>(`${id}/aem_skan_readiness`, params as Record<string, unknown>),
    agencies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAggregateRevenue: (params: ApplicationCreateAggregateRevenueParams) =>
      client.post<Record<string, unknown>>(`${id}/aggregate_revenue`, params as Record<string, unknown>),
    androidDialogConfigs: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/android_dialog_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    appCapiSettings: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/app_capi_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    appEventTypes: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/app_event_types`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAppIndexing: (params: ApplicationCreateAppIndexingParams) =>
      client.post<ApplicationFields>(`${id}/app_indexing`, params as Record<string, unknown>),
    createAppIndexingSession: (params: ApplicationCreateAppIndexingSessionParams) =>
      client.post<ApplicationFields>(`${id}/app_indexing_session`, params as Record<string, unknown>),
    appInstalledGroups: <F extends (keyof GroupFields)[]>(opts: { fields: F; params?: ApplicationListAppInstalledGroupsParams }) =>
      new Cursor<Pick<GroupFields, F[number]>>(client, `${id}/app_installed_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAppPushDeviceToken: (params: ApplicationCreateAppPushDeviceTokenParams) =>
      client.post<ApplicationFields>(`${id}/app_push_device_token`, params as Record<string, unknown>),
    appassets: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/appassets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAsset: (params: ApplicationCreateAssetsParams) =>
      client.post<ApplicationFields>(`${id}/assets`, params as Record<string, unknown>),
    authorizedAdaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: ApplicationListAuthorizedAdaccountsParams }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/authorized_adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    buttonAutoDetectionDeviceSelection: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListButtonAutoDetectionDeviceSelectionParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/button_auto_detection_device_selection`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    cloudbridgeSettings: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/cloudbridge_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createCodelessEventMapping: (params: ApplicationCreateCodelessEventMappingsParams) =>
      client.post<ApplicationFields>(`${id}/codeless_event_mappings`, params as Record<string, unknown>),
    connectedClientBusinesses: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/connected_client_businesses`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    daChecks: <F extends (keyof DACheckFields)[]>(opts: { fields: F; params?: ApplicationListDaChecksParams }) =>
      new Cursor<Pick<DACheckFields, F[number]>>(client, `${id}/da_checks`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createDomainReport: (params: ApplicationCreateDomainReportsParams) =>
      client.post<Record<string, unknown>>(`${id}/domain_reports`, params as Record<string, unknown>),
    iapPurchases: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListIapPurchasesParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/iap_purchases`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    iosDialogConfigs: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/ios_dialog_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    linkedDataset: <F extends (keyof AdsDatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsDatasetFields, F[number]>>(client, `${id}/linked_dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createMmpAuditing: (params: ApplicationCreateMmpAuditingParams) =>
      client.post<Record<string, unknown>>(`${id}/mmp_auditing`, params as Record<string, unknown>),
    mobileSdkGk: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListMobileSdkGkParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/mobile_sdk_gk`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    monetizedDigitalStoreObjects: {
      __path: `${id}/monetized_digital_store_objects`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/monetized_digital_store_objects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ApplicationCreateMonetizedDigitalStoreObjectsParams) =>
        client.post<Record<string, unknown>>(`${id}/monetized_digital_store_objects`, params as Record<string, unknown>),
    },
    objectTypes: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/object_types`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    objects: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/objects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createOccludespopup: (params: ApplicationCreateOccludespopupsParams) =>
      client.post<Record<string, unknown>>(`${id}/occludespopups`, params as Record<string, unknown>),
    permissions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListPermissionsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/permissions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    products: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListProductsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/products`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    purchases: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/purchases`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    roles: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/roles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    serverDomainInfos: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/server_domain_infos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sgwDatasetStatus: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListSgwDatasetStatusParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/sgw_dataset_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sgwInstallDeferralLink: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListSgwInstallDeferralLinkParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/sgw_install_deferral_link`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    subscriptions: {
      __path: `${id}/subscriptions`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/subscriptions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ApplicationCreateSubscriptionsParams) =>
        client.post<Record<string, unknown>>(`${id}/subscriptions`, params as Record<string, unknown>),
      delete: (params: ApplicationDeleteSubscriptionsParams) =>
        client.delete(`${id}/subscriptions`, params as Record<string, unknown> ?? {}),
    },
    threatPrivacyGroupsMember: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListThreatPrivacyGroupsMemberParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/threat_privacy_groups_member`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    threatPrivacyGroupsOwner: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListThreatPrivacyGroupsOwnerParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/threat_privacy_groups_owner`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createUpload: (params: ApplicationCreateUploadsParams) =>
      client.post<Record<string, unknown>>(`${id}/uploads`, params as Record<string, unknown>),
    createWhatsappBusinessSolution: (params: ApplicationCreateWhatsappBusinessSolutionParams) =>
      client.post<ApplicationFields>(`${id}/whatsapp_business_solution`, params as Record<string, unknown>),
    whatsappBusinessSolutions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: ApplicationListWhatsappBusinessSolutionsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/whatsapp_business_solutions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

