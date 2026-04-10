import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ALMAdAccountInfoFields } from "./alm-ad-account-info.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdCustomDerivedMetricsFields } from "./ad-custom-derived-metrics.ts";
import type { AdNetworkAnalyticsAsyncQueryResultFields } from "./ad-network-analytics-async-query-result.ts";
import type { AdNetworkAnalyticsSyncQueryResultFields } from "./ad-network-analytics-sync-query-result.ts";
import type { AdPlacementFields } from "./ad-placement.ts";
import type { AdStudyFields } from "./ad-study.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { AdsDatasetFields } from "./ads-dataset.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { AdsReportBuilderMMMReportFields } from "./ads-report-builder-mmm-report.ts";
import type { AdsReportBuilderMMMReportSchedulerFields } from "./ads-report-builder-mmm-report-scheduler.ts";
import type { ApplicationFields } from "./application.ts";
import type { BusinessAdAccountRequestFields } from "./business-ad-account-request.ts";
import type { BusinessApplicationRequestFields } from "./business-application-request.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { BusinessAssetSharingAgreementFields } from "./business-asset-sharing-agreement.ts";
import type { BusinessCreativeFolderFields } from "./business-creative-folder.ts";
import type { BusinessImageFields } from "./business-image.ts";
import type { BusinessManagedPartnerEligibilityFields } from "./business-managed-partner-eligibility.ts";
import type { BusinessPageRequestFields } from "./business-page-request.ts";
import type { BusinessPartnerPremiumOptionsFields } from "./business-partner-premium-options.ts";
import type { BusinessProjectFields } from "./business-project.ts";
import type { BusinessRoleRequestFields } from "./business-role-request.ts";
import type { BusinessUserFields } from "./business-user.ts";
import type { CPASAdvertiserPartnershipRecommendationFields } from "./cpas-advertiser-partnership-recommendation.ts";
import type { CPASBusinessSetupConfigFields } from "./cpas-business-setup-config.ts";
import type { CPASCollaborationRequestFields } from "./cpas-collaboration-request.ts";
import type { CPASMerchantConfigFields } from "./cpas-merchant-config.ts";
import type { CommerceMerchantSettingsFields } from "./commerce-merchant-settings.ts";
import type { CreditCardFields } from "./credit-card.ts";
import type { CustomConversionFields } from "./custom-conversion.ts";
import type { EventSourceGroupFields } from "./event-source-group.ts";
import type { ExtendedCreditFields } from "./extended-credit.ts";
import type { ExtendedCreditApplicationFields } from "./extended-credit-application.ts";
import type { FundingSourceDetailsCouponFields } from "./funding-source-details-coupon.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { InstagramBusinessAssetFields } from "./instagram-business-asset.ts";
import type { ManagedPartnerBusinessFields } from "./managed-partner-business.ts";
import type { MarketingMessagesOnboardingStatusFields } from "./marketing-messages-onboarding-status.ts";
import type { OffsiteSignalContainerBusinessObjectFields } from "./offsite-signal-container-business-object.ts";
import type { OmegaCustomerTrxFields } from "./omega-customer-trx.ts";
import type { OpenBridgeConfigurationFields } from "./open-bridge-configuration.ts";
import type { PageFields } from "./page.ts";
import type { PartnerAccountLinkingFields } from "./partner-account-linking.ts";
import type { PermissionFields } from "./permission.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";
import type { ResellerGuidanceFields } from "./reseller-guidance.ts";
import type { StatusFields } from "./status.ts";
import type { SystemUserFields } from "./system-user.ts";
import type { ThirdPartyMeasurementReportDatasetFields } from "./third-party-measurement-report-dataset.ts";
import type { WhatsAppBusinessAccountFields } from "./whats-app-business-account.ts";
import type { WhatsAppBusinessPartnerClientVerificationSubmissionFields } from "./whats-app-business-partner-client-verification-submission.ts";
import type { WhatsAppBusinessPreVerifiedPhoneNumberFields } from "./whats-app-business-pre-verified-phone-number.ts";

export interface BusinessFields {
  block_offline_analytics: boolean;
  collaborative_ads_managed_partner_business_info: ManagedPartnerBusinessFields;
  collaborative_ads_managed_partner_eligibility: BusinessManagedPartnerEligibilityFields;
  collaborative_ads_partner_premium_options: BusinessPartnerPremiumOptionsFields;
  created_by: Record<string, unknown>;
  created_time: string;
  extended_updated_time: string;
  id: string;
  is_hidden: boolean;
  link: string;
  marketing_messages_onboarding_status: MarketingMessagesOnboardingStatusFields;
  name: string;
  primary_page: PageFields;
  profile_picture_uri: string;
  timezone_id: number;
  two_factor_type: string;
  updated_by: Record<string, unknown>;
  updated_time: string;
  user_access_expire_time: string;
  verification_status: string;
  vertical: string;
  vertical_id: number;
  whatsapp_business_manager_messaging_limit: string;
}

export interface BusinessCreateAccessTokenParams {
  app_id: string;
  fbe_external_business_id?: string;
  scope: PermissionFields[];
  system_user_name?: string;
  [key: string]: unknown;
}

export interface BusinessListAdAccountInfosParams {
  ad_account_id?: string;
  parent_advertiser_id?: string;
  user_id?: string;
  [key: string]: unknown;
}

export interface BusinessDeleteAdAccountsParams {
  adaccount_id: string;
  [key: string]: unknown;
}

export interface BusinessListAdCustomDerivedMetricsParams {
  adhoc_custom_metrics?: string[];
  scope?: string;
  [key: string]: unknown;
}

export interface BusinessCreateAdReviewRequestsParams {
  ad_account_ids?: string[];
  [key: string]: unknown;
}

export interface BusinessCreateAdStudiesParams {
  cells: Record<string, unknown>[];
  client_business?: string;
  confidence_level?: number;
  cooldown_start_time?: number;
  description?: string;
  end_time: number;
  name: string;
  objectives?: Record<string, unknown>[];
  observation_end_time?: number;
  start_time: number;
  type?: string;
  viewers?: number[];
  [key: string]: unknown;
}

export interface BusinessCreateAdaccountParams {
  ad_account_created_from_bm_flag?: boolean;
  currency: string;
  end_advertiser: Record<string, unknown>;
  funding_id?: string;
  invoice?: boolean;
  invoice_group_id?: string;
  invoicing_emails?: string[];
  io?: boolean;
  media_agency: string;
  name: string;
  partner: string;
  po_number?: string;
  timezone_id: number;
  [key: string]: unknown;
}

export interface BusinessCreateAddPhoneNumbersParams {
  phone_number: string;
  [key: string]: unknown;
}

export interface BusinessCreateAdnetworkApplicationsParams {
  name: string;
  [key: string]: unknown;
}

export interface BusinessListAdnetworkanalyticsParams {
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

export interface BusinessCreateAdnetworkanalyticsParams {
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

export interface BusinessListAdnetworkanalyticsResultsParams {
  query_ids?: string[];
  [key: string]: unknown;
}

export interface BusinessListAdsDatasetParams {
  id_filter?: string;
  name_filter?: string;
  sort_by?: string;
  [key: string]: unknown;
}

export interface BusinessCreateAdsDatasetParams {
  ad_account_id?: string;
  app_id?: string;
  is_crm?: boolean;
  name: string;
  [key: string]: unknown;
}

export interface BusinessListAdsReportingMmmReportsParams {
  filtering?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface BusinessListAdspixelsParams {
  id_filter?: string;
  name_filter?: string;
  sort_by?: string;
  [key: string]: unknown;
}

export interface BusinessCreateAdspixelsParams {
  is_crm?: boolean;
  name: string;
  [key: string]: unknown;
}

export interface BusinessDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface BusinessCreateBlockListDraftsParams {
  publisher_urls_file: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface BusinessCreateBmReviewRequestsParams {
  business_manager_ids: string[];
  [key: string]: unknown;
}

export interface BusinessListBusinessInvoicesParams {
  end_date?: string;
  invoice_id?: string;
  issue_end_date?: string;
  issue_start_date?: string;
  root_id?: number;
  start_date?: string;
  type?: string;
  [key: string]: unknown;
}

export interface BusinessCreateBusinessUsersParams {
  email: string;
  invited_user_type?: string[];
  role?: string;
  tasks?: string[];
  [key: string]: unknown;
}

export interface BusinessCreateClaimCustomConversionsParams {
  custom_conversion_id: string;
  [key: string]: unknown;
}

export interface BusinessListClientAdAccountsParams {
  search_query?: string;
  [key: string]: unknown;
}

export interface BusinessCreateClientAppsParams {
  app_id: Record<string, unknown>;
  [key: string]: unknown;
}

export interface BusinessCreateClientPagesParams {
  page_id: number;
  permitted_tasks?: string[];
  [key: string]: unknown;
}

export interface BusinessDeleteClientsParams {
  business: string;
  [key: string]: unknown;
}

export interface BusinessListCollaborativeAdsCollaborationRequestsParams {
  status?: string;
  [key: string]: unknown;
}

export interface BusinessCreateCpasBusinessSetupConfigParams {
  accepted_collab_ads_tos?: boolean;
  ad_accounts?: string[];
  business_capabilities_status?: Record<string, unknown>;
  capabilities_compliance_status?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface BusinessCreateCreativeFoldersParams {
  description?: string;
  name: string;
  parent_folder_id?: string;
  [key: string]: unknown;
}

export interface BusinessCreateCustomconversionsParams {
  action_source_type?: string;
  advanced_rule?: string;
  custom_event_type: string;
  default_conversion_value?: number;
  description?: string;
  event_source_id?: string;
  name: string;
  rule?: string;
  [key: string]: unknown;
}

export interface BusinessCreateEventSourceGroupsParams {
  event_sources: string[];
  name: string;
  [key: string]: unknown;
}

export interface BusinessListExtendedcreditapplicationsParams {
  only_show_pending?: boolean;
  [key: string]: unknown;
}

export interface BusinessListExtendedcreditsParams {
  order_by_is_owned_credential?: boolean;
  [key: string]: unknown;
}

export interface BusinessCreateImagesParams {
  ad_placements_validation_only?: boolean;
  bytes?: string;
  creative_folder_id: string;
  name?: string;
  validation_ad_placements?: string[];
  [key: string]: unknown;
}

export interface BusinessListInitiatedAudienceSharingRequestsParams {
  recipient_id?: string;
  request_status?: string;
  [key: string]: unknown;
}

export interface BusinessDeleteInstagramAccountsParams {
  instagram_account: string;
  [key: string]: unknown;
}

export interface BusinessDeleteManagedBusinessesParams {
  existing_client_business_id: string;
  [key: string]: unknown;
}

export interface BusinessCreateManagedBusinessesParams {
  child_business_external_id?: string;
  existing_client_business_id?: string;
  name?: string;
  sales_rep_email?: string;
  survey_business_type?: string;
  survey_num_assets?: number;
  survey_num_people?: number;
  timezone_id?: string;
  vertical?: string;
  [key: string]: unknown;
}

export interface BusinessListManagedPartnerAdsFundingSourceDetailsParams {
  year_quarter?: string;
  [key: string]: unknown;
}

export interface BusinessCreateManagedPartnerBusinessSetupParams {
  active_ad_account_id?: string;
  active_page_id?: number;
  partner_facebook_page_url?: string;
  partner_registration_countries?: string[];
  seller_email_address?: string;
  seller_external_website_url?: string;
  template?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface BusinessDeleteManagedPartnerBusinessesParams {
  child_business_external_id?: string;
  child_business_id?: string;
  [key: string]: unknown;
}

export interface BusinessCreateManagedPartnerBusinessesParams {
  ad_account_currency?: string;
  catalog_id: string;
  child_business_external_id?: string;
  credit_limit?: number;
  line_of_credit_id?: string;
  name: string;
  no_ad_account?: boolean;
  page_name?: string;
  page_profile_image_url?: string;
  partition_type?: string;
  partner_facebook_page_url?: string;
  partner_registration_countries?: string[];
  sales_rep_email?: string;
  seller_external_website_url: string;
  seller_targeting_countries: string[];
  skip_partner_page_creation?: boolean;
  survey_business_type?: string;
  survey_num_assets?: number;
  survey_num_people?: number;
  timezone_id?: string;
  vertical: string;
  [key: string]: unknown;
}

export interface BusinessCreateOnboardPartnersToMmLiteParams {
  solution_id?: string;
  [key: string]: unknown;
}

export interface BusinessCreateOpenbridgeConfigurationsParams {
  active?: boolean;
  blocked_event_types?: string[];
  blocked_websites?: string[];
  capi_publishing_state?: string;
  cloud_provider?: string;
  cloud_region?: string;
  destination_id?: string;
  endpoint?: string;
  event_enrichment_advertiser_state?: string;
  event_enrichment_meta_state?: string;
  event_enrichment_state?: string;
  fallback_domain?: string;
  host_business_id?: number;
  instance_id?: string;
  instance_version?: string;
  is_sgw_instance?: boolean;
  is_sgw_pixel_from_meta_pixel?: boolean;
  partner_name?: string;
  pixel_id: number;
  sgw_account_id?: string;
  sgw_instance_url?: string;
  sgw_pixel_id?: number;
  [key: string]: unknown;
}

export interface BusinessListOwnedAdAccountsParams {
  include_shared_ad_accounts?: boolean;
  search_query?: string;
  [key: string]: unknown;
}

export interface BusinessCreateOwnedAdAccountsParams {
  adaccount_id: string;
  [key: string]: unknown;
}

export interface BusinessCreateOwnedAppsParams {
  app_id: Record<string, unknown>;
  [key: string]: unknown;
}

export interface BusinessDeleteOwnedBusinessesParams {
  client_id: string;
  [key: string]: unknown;
}

export interface BusinessListOwnedBusinessesParams {
  child_business_external_id?: string;
  client_user_id?: number;
  [key: string]: unknown;
}

export interface BusinessCreateOwnedBusinessesParams {
  child_business_external_id?: string;
  name: string;
  page_permitted_tasks?: string[];
  sales_rep_email?: string;
  shared_page_id?: string;
  should_generate_name?: boolean;
  survey_business_type?: string;
  survey_num_assets?: number;
  survey_num_people?: number;
  timezone_id?: string;
  vertical: string;
  [key: string]: unknown;
}

export interface BusinessCreateOwnedPagesParams {
  code?: string;
  entry_point?: string;
  page_id: number;
  [key: string]: unknown;
}

export interface BusinessCreateOwnedProductCatalogsParams {
  additional_vertical_option?: string;
  business_metadata?: Record<string, unknown>;
  catalog_segment_filter?: Record<string, unknown>;
  catalog_segment_product_set_id?: string;
  da_display_settings?: Record<string, unknown>;
  destination_catalog_settings?: Record<string, unknown>;
  flight_catalog_settings?: Record<string, unknown>;
  name: string;
  parent_catalog_id?: string;
  partner_integration?: Record<string, unknown>;
  store_catalog_settings?: Record<string, unknown>;
  vertical?: string;
  [key: string]: unknown;
}

export interface BusinessDeletePagesParams {
  page_id: number;
  [key: string]: unknown;
}

export interface BusinessCreatePartnerPremiumOptionsParams {
  catalog_segment_id?: string;
  enable_basket_insight: boolean;
  enable_extended_audience_retargeting: boolean;
  partner_business_id: string;
  retailer_custom_audience_config: Record<string, unknown>;
  vendor_id?: string;
  [key: string]: unknown;
}

export interface BusinessListPendingUsersParams {
  email?: string;
  [key: string]: unknown;
}

export interface BusinessListPictureParams {
  height?: number;
  redirect?: boolean;
  type?: string;
  width?: number;
  [key: string]: unknown;
}

export interface BusinessListPreverifiedNumbersParams {
  code_verification_status?: string;
  phone_number?: string;
  [key: string]: unknown;
}

export interface BusinessListReceivedAudienceSharingRequestsParams {
  initiator_id?: string;
  request_status?: string;
  [key: string]: unknown;
}

export interface BusinessListSelfCertifiedWhatsappBusinessSubmissionsParams {
  end_business_id?: string;
  [key: string]: unknown;
}

export interface BusinessCreateSelfCertifyWhatsappBusinessParams {
  average_monthly_revenue_spend_with_partner?: Record<string, unknown>;
  business_documents: File | Blob | ReadableStream[];
  business_vertical?: string;
  end_business_address?: Record<string, unknown>;
  end_business_id: string;
  end_business_legal_name?: string;
  end_business_trade_names?: string[];
  end_business_website?: string;
  num_billing_cycles_with_partner?: number;
  [key: string]: unknown;
}

export interface BusinessCreateSetupManagedPartnerAdaccountsParams {
  credit_line_id: string;
  marketplace_business_id: string;
  subvertical_v2: string;
  vendor_id: string;
  vertical_v2: string;
  [key: string]: unknown;
}

export interface BusinessDeleteSharePreverifiedNumbersParams {
  partner_business_id: string;
  preverified_id: string;
  [key: string]: unknown;
}

export interface BusinessCreateSharePreverifiedNumbersParams {
  partner_business_id: string;
  preverified_id: string;
  [key: string]: unknown;
}

export interface BusinessCreateSystemUserAccessTokensParams {
  asset?: number[];
  fetch_only?: boolean;
  scope?: PermissionFields[];
  set_token_expires_in_60_days?: boolean;
  system_user_id?: number;
  [key: string]: unknown;
}

export interface BusinessCreateSystemUsersParams {
  name: string;
  role?: string;
  system_user_id?: number;
  [key: string]: unknown;
}

export interface BusinessCreateVideosParams {
  ad_placements_validation_only?: boolean;
  application_id?: string;
  asked_fun_fact_prompt_id?: number;
  audio_story_wave_animation_handle?: string;
  chunk_session_id?: string;
  composer_entry_picker?: string;
  composer_entry_point?: string;
  composer_entry_time?: number;
  composer_session_events_log?: string;
  composer_session_id?: string;
  composer_source_surface?: string;
  composer_type?: string;
  container_type?: string;
  content_category?: string;
  creative_folder_id: string;
  creative_tools?: string;
  description?: string;
  edit_description_spec?: Record<string, unknown>;
  embeddable?: boolean;
  end_offset?: number;
  fbuploader_video_file_chunk?: string;
  file_size?: number;
  file_url?: string;
  fisheye_video_cropped?: boolean;
  formatting?: string;
  fov?: number;
  front_z_rotation?: number;
  fun_fact_prompt_id?: string;
  fun_fact_toastee_id?: number;
  guide?: number[][];
  guide_enabled?: boolean;
  initial_heading?: number;
  initial_pitch?: number;
  instant_game_entry_point_data?: string;
  is_boost_intended?: boolean;
  is_group_linking_post?: boolean;
  is_partnership_ad?: boolean;
  is_voice_clip?: boolean;
  location_source_id?: string;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_suggestion_mechanism?: string;
  original_fov?: number;
  original_projection_type?: string;
  partnership_ad_ad_code?: string;
  publish_event_id?: number;
  referenced_sticker_id?: string;
  replace_video_id?: string;
  slideshow_spec?: Record<string, unknown>;
  source?: string;
  source_instagram_media_id?: string;
  spherical?: boolean;
  start_offset?: number;
  swap_mode?: string;
  text_format_metadata?: string;
  thumb?: File | Blob | ReadableStream;
  time_since_original_post?: number;
  title?: string;
  transcode_setting_properties?: string;
  unpublished_content_type?: string;
  upload_phase?: string;
  upload_session_id?: string;
  upload_setting_properties?: string;
  validation_ad_placements?: string[];
  video_file_chunk?: string;
  video_id_original?: string;
  video_start_time_ms?: number;
  waterfall_id?: string;
  [key: string]: unknown;
}

export interface BusinessUpdateParams {
  entry_point?: string;
  name?: string;
  primary_page?: string;
  timezone_id?: number;
  two_factor_type?: string;
  vertical?: string;
  [key: string]: unknown;
}

export function businessNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessUpdateParams) =>
      client.post<BusinessFields>(`${id}`, params as Record<string, unknown>),
    createAccessToken: (params: BusinessCreateAccessTokenParams) =>
      client.post<BusinessFields>(`${id}/access_token`, params as Record<string, unknown>),
    adAccountInfos: <F extends (keyof ALMAdAccountInfoFields)[]>(opts: { fields: F; params?: BusinessListAdAccountInfosParams }) =>
      new Cursor<Pick<ALMAdAccountInfoFields, F[number]>>(client, `${id}/ad_account_infos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    deleteAdAccounts: (params: BusinessDeleteAdAccountsParams) =>
      client.delete(`${id}/ad_accounts`, params as Record<string, unknown> ?? {}),
    adCustomDerivedMetrics: <F extends (keyof AdCustomDerivedMetricsFields)[]>(opts: { fields: F; params?: BusinessListAdCustomDerivedMetricsParams }) =>
      new Cursor<Pick<AdCustomDerivedMetricsFields, F[number]>>(client, `${id}/ad_custom_derived_metrics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAdReviewRequest: (params: BusinessCreateAdReviewRequestsParams) =>
      client.post<Record<string, unknown>>(`${id}/ad_review_requests`, params as Record<string, unknown>),
    adStudies: {
      list: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateAdStudiesParams) =>
        client.post<AdStudyFields>(`${id}/ad_studies`, params as Record<string, unknown>),
    },
    createAdaccount: (params: BusinessCreateAdaccountParams) =>
      client.post<AdAccountFields>(`${id}/adaccount`, params as Record<string, unknown>),
    createAddPhoneNumber: (params: BusinessCreateAddPhoneNumbersParams) =>
      client.post<BusinessFields>(`${id}/add_phone_numbers`, params as Record<string, unknown>),
    createAdnetworkApplication: (params: BusinessCreateAdnetworkApplicationsParams) =>
      client.post<ApplicationFields>(`${id}/adnetwork_applications`, params as Record<string, unknown>),
    adnetworkanalytics: {
      list: <F extends (keyof AdNetworkAnalyticsSyncQueryResultFields)[]>(opts: { fields: F; params?: BusinessListAdnetworkanalyticsParams }) =>
        new Cursor<Pick<AdNetworkAnalyticsSyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateAdnetworkanalyticsParams) =>
        client.post<BusinessFields>(`${id}/adnetworkanalytics`, params as Record<string, unknown>),
    },
    adnetworkanalyticsResults: <F extends (keyof AdNetworkAnalyticsAsyncQueryResultFields)[]>(opts: { fields: F; params?: BusinessListAdnetworkanalyticsResultsParams }) =>
      new Cursor<Pick<AdNetworkAnalyticsAsyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics_results`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adsDataset: {
      list: <F extends (keyof AdsDatasetFields)[]>(opts: { fields: F; params?: BusinessListAdsDatasetParams }) =>
        new Cursor<Pick<AdsDatasetFields, F[number]>>(client, `${id}/ads_dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateAdsDatasetParams) =>
        client.post<BusinessFields>(`${id}/ads_dataset`, params as Record<string, unknown>),
    },
    adsReportingMmmReports: <F extends (keyof AdsReportBuilderMMMReportFields)[]>(opts: { fields: F; params?: BusinessListAdsReportingMmmReportsParams }) =>
      new Cursor<Pick<AdsReportBuilderMMMReportFields, F[number]>>(client, `${id}/ads_reporting_mmm_reports`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adsReportingMmmSchedulers: <F extends (keyof AdsReportBuilderMMMReportSchedulerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsReportBuilderMMMReportSchedulerFields, F[number]>>(client, `${id}/ads_reporting_mmm_schedulers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adspixels: {
      list: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: BusinessListAdspixelsParams }) =>
        new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/adspixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateAdspixelsParams) =>
        client.post<AdsPixelFields>(`${id}/adspixels`, params as Record<string, unknown>),
    },
    agencies: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      delete: (params: BusinessDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    anPlacements: <F extends (keyof AdPlacementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdPlacementFields, F[number]>>(client, `${id}/an_placements`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createBlockListDraft: (params: BusinessCreateBlockListDraftsParams) =>
      client.post<BusinessFields>(`${id}/block_list_drafts`, params as Record<string, unknown>),
    createBmReviewRequest: (params: BusinessCreateBmReviewRequestsParams) =>
      client.post<Record<string, unknown>>(`${id}/bm_review_requests`, params as Record<string, unknown>),
    businessAssetGroups: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessAssetGroupFields, F[number]>>(client, `${id}/business_asset_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    businessInvoices: <F extends (keyof OmegaCustomerTrxFields)[]>(opts: { fields: F; params?: BusinessListBusinessInvoicesParams }) =>
      new Cursor<Pick<OmegaCustomerTrxFields, F[number]>>(client, `${id}/business_invoices`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    businessUsers: {
      list: <F extends (keyof BusinessUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessUserFields, F[number]>>(client, `${id}/business_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateBusinessUsersParams) =>
        client.post<BusinessUserFields>(`${id}/business_users`, params as Record<string, unknown>),
    },
    businessprojects: <F extends (keyof BusinessProjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessProjectFields, F[number]>>(client, `${id}/businessprojects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createClaimCustomConversion: (params: BusinessCreateClaimCustomConversionsParams) =>
      client.post<CustomConversionFields>(`${id}/claim_custom_conversions`, params as Record<string, unknown>),
    clientAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: BusinessListClientAdAccountsParams }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/client_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clientApps: {
      list: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/client_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateClientAppsParams) =>
        client.post<BusinessFields>(`${id}/client_apps`, params as Record<string, unknown>),
    },
    clientInstagramAssets: <F extends (keyof InstagramBusinessAssetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<InstagramBusinessAssetFields, F[number]>>(client, `${id}/client_instagram_assets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clientOffsiteSignalContainerBusinessObjects: <F extends (keyof OffsiteSignalContainerBusinessObjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<OffsiteSignalContainerBusinessObjectFields, F[number]>>(client, `${id}/client_offsite_signal_container_business_objects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clientPages: {
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/client_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateClientPagesParams) =>
        client.post<BusinessFields>(`${id}/client_pages`, params as Record<string, unknown>),
    },
    clientPixels: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/client_pixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clientProductCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/client_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clientWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/client_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    clients: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/clients`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      delete: (params: BusinessDeleteClientsParams) =>
        client.delete(`${id}/clients`, params as Record<string, unknown> ?? {}),
    },
    collaborativeAdsCollaborationRequests: <F extends (keyof CPASCollaborationRequestFields)[]>(opts: { fields: F; params?: BusinessListCollaborativeAdsCollaborationRequestsParams }) =>
      new Cursor<Pick<CPASCollaborationRequestFields, F[number]>>(client, `${id}/collaborative_ads_collaboration_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    collaborativeAdsSuggestedPartners: <F extends (keyof CPASAdvertiserPartnershipRecommendationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CPASAdvertiserPartnershipRecommendationFields, F[number]>>(client, `${id}/collaborative_ads_suggested_partners`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    commerceMerchantSettings: <F extends (keyof CommerceMerchantSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CommerceMerchantSettingsFields, F[number]>>(client, `${id}/commerce_merchant_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    cpasBusinessSetupConfig: {
      list: <F extends (keyof CPASBusinessSetupConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CPASBusinessSetupConfigFields, F[number]>>(client, `${id}/cpas_business_setup_config`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateCpasBusinessSetupConfigParams) =>
        client.post<CPASBusinessSetupConfigFields>(`${id}/cpas_business_setup_config`, params as Record<string, unknown>),
    },
    cpasMerchantConfig: <F extends (keyof CPASMerchantConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CPASMerchantConfigFields, F[number]>>(client, `${id}/cpas_merchant_config`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createCreativeFolder: (params: BusinessCreateCreativeFoldersParams) =>
      client.post<BusinessCreativeFolderFields>(`${id}/creative_folders`, params as Record<string, unknown>),
    creditcards: <F extends (keyof CreditCardFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CreditCardFields, F[number]>>(client, `${id}/creditcards`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createCustomconversion: (params: BusinessCreateCustomconversionsParams) =>
      client.post<CustomConversionFields>(`${id}/customconversions`, params as Record<string, unknown>),
    eventSourceGroups: {
      list: <F extends (keyof EventSourceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<EventSourceGroupFields, F[number]>>(client, `${id}/event_source_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateEventSourceGroupsParams) =>
        client.post<EventSourceGroupFields>(`${id}/event_source_groups`, params as Record<string, unknown>),
    },
    extendedcreditapplications: <F extends (keyof ExtendedCreditApplicationFields)[]>(opts: { fields: F; params?: BusinessListExtendedcreditapplicationsParams }) =>
      new Cursor<Pick<ExtendedCreditApplicationFields, F[number]>>(client, `${id}/extendedcreditapplications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    extendedcredits: <F extends (keyof ExtendedCreditFields)[]>(opts: { fields: F; params?: BusinessListExtendedcreditsParams }) =>
      new Cursor<Pick<ExtendedCreditFields, F[number]>>(client, `${id}/extendedcredits`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createImage: (params: BusinessCreateImagesParams) =>
      client.post<BusinessImageFields>(`${id}/images`, params as Record<string, unknown>),
    initiatedAudienceSharingRequests: <F extends (keyof BusinessAssetSharingAgreementFields)[]>(opts: { fields: F; params?: BusinessListInitiatedAudienceSharingRequestsParams }) =>
      new Cursor<Pick<BusinessAssetSharingAgreementFields, F[number]>>(client, `${id}/initiated_audience_sharing_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    instagramAccounts: {
      list: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      delete: (params: BusinessDeleteInstagramAccountsParams) =>
        client.delete(`${id}/instagram_accounts`, params as Record<string, unknown> ?? {}),
    },
    instagramBusinessAccounts: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/instagram_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    managedBusinesses: {
      create: (params: BusinessCreateManagedBusinessesParams) =>
        client.post<BusinessFields>(`${id}/managed_businesses`, params as Record<string, unknown>),
      delete: (params: BusinessDeleteManagedBusinessesParams) =>
        client.delete(`${id}/managed_businesses`, params as Record<string, unknown> ?? {}),
    },
    managedPartnerAdsFundingSourceDetails: <F extends (keyof FundingSourceDetailsCouponFields)[]>(opts: { fields: F; params?: BusinessListManagedPartnerAdsFundingSourceDetailsParams }) =>
      new Cursor<Pick<FundingSourceDetailsCouponFields, F[number]>>(client, `${id}/managed_partner_ads_funding_source_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createManagedPartnerBusinessSetup: (params: BusinessCreateManagedPartnerBusinessSetupParams) =>
      client.post<BusinessFields>(`${id}/managed_partner_business_setup`, params as Record<string, unknown>),
    managedPartnerBusinesses: {
      create: (params: BusinessCreateManagedPartnerBusinessesParams) =>
        client.post<ManagedPartnerBusinessFields>(`${id}/managed_partner_businesses`, params as Record<string, unknown>),
      delete: (params: BusinessDeleteManagedPartnerBusinessesParams) =>
        client.delete(`${id}/managed_partner_businesses`, params as Record<string, unknown> ?? {}),
    },
    createOnboardPartnersToMmLite: (params: BusinessCreateOnboardPartnersToMmLiteParams) =>
      client.post<Record<string, unknown>>(`${id}/onboard_partners_to_mm_lite`, params as Record<string, unknown>),
    openbridgeConfigurations: {
      list: <F extends (keyof OpenBridgeConfigurationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<OpenBridgeConfigurationFields, F[number]>>(client, `${id}/openbridge_configurations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOpenbridgeConfigurationsParams) =>
        client.post<OpenBridgeConfigurationFields>(`${id}/openbridge_configurations`, params as Record<string, unknown>),
    },
    ownedAdAccounts: {
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: BusinessListOwnedAdAccountsParams }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/owned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOwnedAdAccountsParams) =>
        client.post<BusinessFields>(`${id}/owned_ad_accounts`, params as Record<string, unknown>),
    },
    ownedApps: {
      list: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/owned_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOwnedAppsParams) =>
        client.post<BusinessFields>(`${id}/owned_apps`, params as Record<string, unknown>),
    },
    ownedBusinesses: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: BusinessListOwnedBusinessesParams }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/owned_businesses`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOwnedBusinessesParams) =>
        client.post<BusinessFields>(`${id}/owned_businesses`, params as Record<string, unknown>),
      delete: (params: BusinessDeleteOwnedBusinessesParams) =>
        client.delete(`${id}/owned_businesses`, params as Record<string, unknown> ?? {}),
    },
    ownedInstagramAccounts: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/owned_instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ownedInstagramAssets: <F extends (keyof InstagramBusinessAssetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<InstagramBusinessAssetFields, F[number]>>(client, `${id}/owned_instagram_assets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ownedOffsiteSignalContainerBusinessObjects: <F extends (keyof OffsiteSignalContainerBusinessObjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<OffsiteSignalContainerBusinessObjectFields, F[number]>>(client, `${id}/owned_offsite_signal_container_business_objects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ownedPages: {
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/owned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOwnedPagesParams) =>
        client.post<BusinessFields>(`${id}/owned_pages`, params as Record<string, unknown>),
    },
    ownedPixels: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/owned_pixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ownedProductCatalogs: {
      list: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/owned_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateOwnedProductCatalogsParams) =>
        client.post<ProductCatalogFields>(`${id}/owned_product_catalogs`, params as Record<string, unknown>),
    },
    ownedWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/owned_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    deletePages: (params: BusinessDeletePagesParams) =>
      client.delete(`${id}/pages`, params as Record<string, unknown> ?? {}),
    partnerAccountLinking: <F extends (keyof PartnerAccountLinkingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PartnerAccountLinkingFields, F[number]>>(client, `${id}/partner_account_linking`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createPartnerPremiumOption: (params: BusinessCreatePartnerPremiumOptionsParams) =>
      client.post<Record<string, unknown>>(`${id}/partner_premium_options`, params as Record<string, unknown>),
    passbackAttributionMetadataConfigs: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/passback_attribution_metadata_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingClientAdAccounts: <F extends (keyof BusinessAdAccountRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessAdAccountRequestFields, F[number]>>(client, `${id}/pending_client_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingClientApps: <F extends (keyof BusinessApplicationRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessApplicationRequestFields, F[number]>>(client, `${id}/pending_client_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingClientPages: <F extends (keyof BusinessPageRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessPageRequestFields, F[number]>>(client, `${id}/pending_client_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingOwnedAdAccounts: <F extends (keyof BusinessAdAccountRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessAdAccountRequestFields, F[number]>>(client, `${id}/pending_owned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingOwnedPages: <F extends (keyof BusinessPageRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessPageRequestFields, F[number]>>(client, `${id}/pending_owned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingSharedOffsiteSignalContainerBusinessObjects: <F extends (keyof OffsiteSignalContainerBusinessObjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<OffsiteSignalContainerBusinessObjectFields, F[number]>>(client, `${id}/pending_shared_offsite_signal_container_business_objects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pendingUsers: <F extends (keyof BusinessRoleRequestFields)[]>(opts: { fields: F; params?: BusinessListPendingUsersParams }) =>
      new Cursor<Pick<BusinessRoleRequestFields, F[number]>>(client, `${id}/pending_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: BusinessListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createPixelTo: (params: Record<string, unknown>) =>
      client.post<Record<string, unknown>>(`${id}/pixel_tos`, params as Record<string, unknown>),
    preverifiedNumbers: <F extends (keyof WhatsAppBusinessPreVerifiedPhoneNumberFields)[]>(opts: { fields: F; params?: BusinessListPreverifiedNumbersParams }) =>
      new Cursor<Pick<WhatsAppBusinessPreVerifiedPhoneNumberFields, F[number]>>(client, `${id}/preverified_numbers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    receivedAudienceSharingRequests: <F extends (keyof BusinessAssetSharingAgreementFields)[]>(opts: { fields: F; params?: BusinessListReceivedAudienceSharingRequestsParams }) =>
      new Cursor<Pick<BusinessAssetSharingAgreementFields, F[number]>>(client, `${id}/received_audience_sharing_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    resellerGuidances: <F extends (keyof ResellerGuidanceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ResellerGuidanceFields, F[number]>>(client, `${id}/reseller_guidances`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    selfCertifiedWhatsappBusinessSubmissions: <F extends (keyof WhatsAppBusinessPartnerClientVerificationSubmissionFields)[]>(opts: { fields: F; params?: BusinessListSelfCertifiedWhatsappBusinessSubmissionsParams }) =>
      new Cursor<Pick<WhatsAppBusinessPartnerClientVerificationSubmissionFields, F[number]>>(client, `${id}/self_certified_whatsapp_business_submissions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createSelfCertifyWhatsappBusiness: (params: BusinessCreateSelfCertifyWhatsappBusinessParams) =>
      client.post<BusinessFields>(`${id}/self_certify_whatsapp_business`, params as Record<string, unknown>),
    createSetupManagedPartnerAdaccount: (params: BusinessCreateSetupManagedPartnerAdaccountsParams) =>
      client.post<BusinessFields>(`${id}/setup_managed_partner_adaccounts`, params as Record<string, unknown>),
    sharePreverifiedNumbers: {
      create: (params: BusinessCreateSharePreverifiedNumbersParams) =>
        client.post<BusinessFields>(`${id}/share_preverified_numbers`, params as Record<string, unknown>),
      delete: (params: BusinessDeleteSharePreverifiedNumbersParams) =>
        client.delete(`${id}/share_preverified_numbers`, params as Record<string, unknown> ?? {}),
    },
    createSystemUserAccessToken: (params: BusinessCreateSystemUserAccessTokensParams) =>
      client.post<BusinessFields>(`${id}/system_user_access_tokens`, params as Record<string, unknown>),
    systemUsers: {
      list: <F extends (keyof SystemUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<SystemUserFields, F[number]>>(client, `${id}/system_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessCreateSystemUsersParams) =>
        client.post<SystemUserFields>(`${id}/system_users`, params as Record<string, unknown>),
    },
    thirdPartyMeasurementReportDataset: <F extends (keyof ThirdPartyMeasurementReportDatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ThirdPartyMeasurementReportDatasetFields, F[number]>>(client, `${id}/third_party_measurement_report_dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createVideo: (params: BusinessCreateVideosParams) =>
      client.post<AdVideoFields>(`${id}/videos`, params as Record<string, unknown>),
  };
}

