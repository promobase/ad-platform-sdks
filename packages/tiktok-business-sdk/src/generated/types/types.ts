// @generated
// fingerprint: sha256:be2f2bd5d84d40abb517ef1df45040d0e5f65d790457dfa9bab87e4327408e1b
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export interface AccountVerificationFiletypeParams {
  readonly business_type: "BUSINESS" | "INDIVIDUAL";
  readonly region_iso_code: string;
}

export interface AccountVerificationFiletypeResponse {
  readonly file_types?: ReadonlyArray<AccountVerificationFiletypeResponseFileTypes>;
}

export interface AccountVerificationFiletypeResponseFileTypes {
  readonly file_type_name?: string;
  readonly file_type_code?: string;
}

export interface AccountVerificationStatusParams {
  readonly advertiser_id?: string;
  readonly bc_id?: string;
}

export interface AccountVerificationStatusResponse {
  readonly qualification_id?: string;
  readonly verification_status?: "NOT_SUBMITTED" | "REVIEWING" | "VERIFIED" | "FAILED" | "EXPIRED";
  readonly rejection_reason?: string;
  readonly audit_time?: string;
}

export interface AccountVerificationSubmitParams {
  readonly advertiser_id?: string;
  readonly bc_id?: string;
  readonly business_form?: AccountVerificationSubmitParamsBusinessForm;
  readonly individual_form?: AccountVerificationSubmitParamsIndividualForm;
}

export interface AccountVerificationSubmitParamsBusinessForm {
  readonly company_name?: string;
  readonly website_url?: string;
  readonly industry_code?: "NOT_APPLICABLE" | "ALCOHOL" | "OTC" | "DATING_APP" | "FINANCIAL_SERVICES";
  readonly region_iso_code?: string;
  readonly file_type_code?: string;
  readonly license_no?: string;
  readonly qualification_image_ids?: ReadonlyArray<string>;
}

export interface AccountVerificationSubmitParamsIndividualForm {
  readonly individual_name?: string;
  readonly region_iso_code?: string;
  readonly file_type_code?: string;
  readonly identity_no?: string;
  readonly website_url?: string;
  readonly qualification_image_ids?: ReadonlyArray<string>;
}

export interface AccountVerificationSubmitResponse {

}

export interface AccountVerificationUploadParams {
  readonly image_file1: unknown;
  readonly image_file2?: unknown;
}

export interface AccountVerificationUploadResponse {
  readonly qualification_image_ids?: ReadonlyArray<string>;
}

export interface AdAcoCreateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly media_info_list: ReadonlyArray<AdAcoCreateParamsMediaInfoList>;
  readonly title_list?: ReadonlyArray<AdAcoCreateParamsTitleList>;
  readonly call_to_action_list?: ReadonlyArray<AdAcoCreateParamsCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<AdAcoCreateParamsDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<AdAcoCreateParamsDisplayNameList>;
  readonly page_list?: ReadonlyArray<AdAcoCreateParamsPageList>;
  readonly card_list?: ReadonlyArray<AdAcoCreateParamsCardList>;
  readonly landing_page_urls?: ReadonlyArray<AdAcoCreateParamsLandingPageUrls>;
  readonly common_material?: AdAcoCreateParamsCommonMaterial;
}

export interface AdAcoCreateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface AdAcoCreateParamsCardList {
  readonly card_id?: string;
}

export interface AdAcoCreateParamsCommonMaterial {
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: boolean;
  readonly playable_url?: string;
  readonly fallback_type?: string;
  readonly tracking_info?: AdAcoCreateParamsCommonMaterialTrackingInfo;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_smart_creative?: boolean;
}

export interface AdAcoCreateParamsCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface AdAcoCreateParamsDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface AdAcoCreateParamsDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface AdAcoCreateParamsLandingPageUrls {
  readonly landing_page_url?: string;
}

export interface AdAcoCreateParamsMediaInfoList {
  readonly media_info: AdAcoCreateParamsMediaInfoListMediaInfo;
}

export interface AdAcoCreateParamsMediaInfoListMediaInfo {
  readonly video_info?: AdAcoCreateParamsMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<AdAcoCreateParamsMediaInfoListMediaInfoImageInfo>;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER";
}

export interface AdAcoCreateParamsMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface AdAcoCreateParamsMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface AdAcoCreateParamsPageList {
  readonly page_id?: string;
}

export interface AdAcoCreateParamsTitleList {
  readonly title?: string;
}

export interface AdAcoCreateResponse {
  readonly advertiser_id?: string;
  readonly adgroup_id?: string;
  readonly media_info_list?: ReadonlyArray<AdAcoCreateResponseMediaInfoList>;
  readonly title_list?: ReadonlyArray<AdAcoCreateResponseTitleList>;
  readonly call_to_action_list?: ReadonlyArray<AdAcoCreateResponseCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<AdAcoCreateResponseDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<AdAcoCreateResponseDisplayNameList>;
  readonly page_list?: ReadonlyArray<AdAcoCreateResponsePageList>;
  readonly card_list?: ReadonlyArray<AdAcoCreateResponseCardList>;
  readonly landing_page_urls?: ReadonlyArray<AdAcoCreateResponseLandingPageUrls>;
  readonly common_material?: AdAcoCreateResponseCommonMaterial;
}

export interface AdAcoCreateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface AdAcoCreateResponseCardList {
  readonly card_id?: string;
}

export interface AdAcoCreateResponseCommonMaterial {
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: boolean;
  readonly playable_url?: string;
  readonly fallback_type?: "WEBSITE" | "UNSET";
  readonly tracking_info?: AdAcoCreateResponseCommonMaterialTrackingInfo;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_smart_creative?: boolean;
}

export interface AdAcoCreateResponseCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface AdAcoCreateResponseDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface AdAcoCreateResponseDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface AdAcoCreateResponseLandingPageUrls {
  readonly landing_page_url?: string;
}

export interface AdAcoCreateResponseMediaInfoList {
  readonly material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
  readonly media_info?: AdAcoCreateResponseMediaInfoListMediaInfo;
}

export interface AdAcoCreateResponseMediaInfoListMediaInfo {
  readonly image_info?: ReadonlyArray<AdAcoCreateResponseMediaInfoListMediaInfoImageInfo>;
  readonly video_info?: AdAcoCreateResponseMediaInfoListMediaInfoVideoInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER";
}

export interface AdAcoCreateResponseMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface AdAcoCreateResponseMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface AdAcoCreateResponsePageList {
  readonly page_id?: string;
}

export interface AdAcoCreateResponseTitleList {
  readonly title?: string;
}

export interface AdAcoGetParams {
  readonly adgroup_ids: ReadonlyArray<string>;
  readonly advertiser_id: string;
  readonly exclude_field_types_in_response?: ReadonlyArray<string>;
}

export interface AdAcoGetResponse {
  readonly list?: ReadonlyArray<AdAcoGetResponseList>;
}

export interface AdAcoGetResponseList {
  readonly advertiser_id?: string;
  readonly adgroup_id?: string;
  readonly media_info_list?: ReadonlyArray<AdAcoGetResponseListMediaInfoList>;
  readonly title_list?: ReadonlyArray<AdAcoGetResponseListTitleList>;
  readonly call_to_action_list?: ReadonlyArray<AdAcoGetResponseListCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<AdAcoGetResponseListDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<AdAcoGetResponseListDisplayNameList>;
  readonly avatar_icon_list?: ReadonlyArray<AdAcoGetResponseListAvatarIconList>;
  readonly page_list?: ReadonlyArray<AdAcoGetResponseListPageList>;
  readonly card_list?: ReadonlyArray<AdAcoGetResponseListCardList>;
  readonly landing_page_urls?: ReadonlyArray<string>;
  readonly landing_page_url?: string;
  readonly common_material?: AdAcoGetResponseListCommonMaterial;
}

export interface AdAcoGetResponseListAvatarIconList {
  readonly avatar_icon?: AdAcoGetResponseListAvatarIconListAvatarIcon;
}

export interface AdAcoGetResponseListAvatarIconListAvatarIcon {
  readonly web_uri?: string;
}

export interface AdAcoGetResponseListCallToActionList {
  readonly call_to_action?: string;
}

export interface AdAcoGetResponseListCardList {
  readonly card_id?: string;
}

export interface AdAcoGetResponseListCommonMaterial {
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: boolean;
  readonly playable_url?: string;
  readonly fallback_type?: "WEBSITE" | "UNSET";
  readonly tracking_info?: AdAcoGetResponseListCommonMaterialTrackingInfo;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_smart_creative?: boolean;
}

export interface AdAcoGetResponseListCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface AdAcoGetResponseListDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface AdAcoGetResponseListDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface AdAcoGetResponseListMediaInfoList {
  readonly material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
  readonly media_info?: AdAcoGetResponseListMediaInfoListMediaInfo;
}

export interface AdAcoGetResponseListMediaInfoListMediaInfo {
  readonly image_info?: ReadonlyArray<AdAcoGetResponseListMediaInfoListMediaInfoImageInfo>;
  readonly video_info?: AdAcoGetResponseListMediaInfoListMediaInfoVideoInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly material_name?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER";
}

export interface AdAcoGetResponseListMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface AdAcoGetResponseListMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface AdAcoGetResponseListPageList {
  readonly page_id?: string;
}

export interface AdAcoGetResponseListTitleList {
  readonly title?: string;
  readonly material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
}

export interface AdAcoMaterialStatusUpdateParams {
  readonly advertiser_id: string;
  readonly ad_group_id: string;
  readonly material_ids: ReadonlyArray<string>;
  readonly material_status: "ENABLE" | "DISABLE";
}

export interface AdAcoMaterialStatusUpdateResponse {
  readonly ad_group_id?: string;
  readonly material_ids?: ReadonlyArray<string>;
  readonly material_status?: "ENABLE" | "DISABLE";
}

export interface AdAcoUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly patch_update?: boolean;
  readonly media_info_list?: ReadonlyArray<AdAcoUpdateParamsMediaInfoList>;
  readonly title_list?: ReadonlyArray<AdAcoUpdateParamsTitleList>;
  readonly call_to_action_list?: ReadonlyArray<AdAcoUpdateParamsCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<AdAcoUpdateParamsDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<AdAcoUpdateParamsDisplayNameList>;
  readonly avatar_icon_list?: ReadonlyArray<AdAcoUpdateParamsAvatarIconList>;
  readonly page_list?: ReadonlyArray<AdAcoUpdateParamsPageList>;
  readonly card_list?: ReadonlyArray<AdAcoUpdateParamsCardList>;
  readonly common_material?: AdAcoUpdateParamsCommonMaterial;
}

export interface AdAcoUpdateParamsAvatarIconList {
  readonly avatar_icon?: AdAcoUpdateParamsAvatarIconListAvatarIcon;
}

export interface AdAcoUpdateParamsAvatarIconListAvatarIcon {
  readonly web_uri?: string;
}

export interface AdAcoUpdateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface AdAcoUpdateParamsCardList {
  readonly card_id?: string;
}

export interface AdAcoUpdateParamsCommonMaterial {
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: boolean;
  readonly playable_url?: string;
  readonly fallback_type?: "WEBSITE" | "UNSET";
  readonly tracking_info?: AdAcoUpdateParamsCommonMaterialTrackingInfo;
  readonly identity_id?: string;
  readonly identity_type?: string;
}

export interface AdAcoUpdateParamsCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface AdAcoUpdateParamsDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface AdAcoUpdateParamsDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface AdAcoUpdateParamsMediaInfoList {
  readonly media_info?: AdAcoUpdateParamsMediaInfoListMediaInfo;
}

export interface AdAcoUpdateParamsMediaInfoListMediaInfo {
  readonly video_info?: AdAcoUpdateParamsMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<AdAcoUpdateParamsMediaInfoListMediaInfoImageInfo>;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER";
}

export interface AdAcoUpdateParamsMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface AdAcoUpdateParamsMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface AdAcoUpdateParamsPageList {
  readonly page_id?: string;
}

export interface AdAcoUpdateParamsTitleList {
  readonly title?: string;
}

export interface AdAcoUpdateResponse {
  readonly advertiser_id?: string;
  readonly adgroup_id?: string;
  readonly media_info_list?: ReadonlyArray<AdAcoUpdateResponseMediaInfoList>;
  readonly title_list?: ReadonlyArray<AdAcoUpdateResponseTitleList>;
  readonly call_to_action_list?: ReadonlyArray<AdAcoUpdateResponseCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<AdAcoUpdateResponseDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<AdAcoUpdateResponseDisplayNameList>;
  readonly avatar_icon?: AdAcoUpdateResponseAvatarIcon;
  readonly page_list?: ReadonlyArray<AdAcoUpdateResponsePageList>;
  readonly card_list?: ReadonlyArray<AdAcoUpdateResponseCardList>;
  readonly landing_page_urls?: ReadonlyArray<AdAcoUpdateResponseLandingPageUrls>;
  readonly common_material?: AdAcoUpdateResponseCommonMaterial;
}

export interface AdAcoUpdateResponseAvatarIcon {
  readonly web_uri?: string;
}

export interface AdAcoUpdateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface AdAcoUpdateResponseCardList {
  readonly card_id?: string;
}

export interface AdAcoUpdateResponseCommonMaterial {
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: boolean;
  readonly playable_url?: string;
  readonly fallback_type?: string;
  readonly tracking_info?: AdAcoUpdateResponseCommonMaterialTrackingInfo;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_smart_creative?: boolean;
}

export interface AdAcoUpdateResponseCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface AdAcoUpdateResponseDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: string;
}

export interface AdAcoUpdateResponseDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface AdAcoUpdateResponseLandingPageUrls {
  readonly landing_page_url?: string;
}

export interface AdAcoUpdateResponseMediaInfoList {
  readonly material_id?: string;
  readonly material_operation_status?: string;
  readonly media_info?: AdAcoUpdateResponseMediaInfoListMediaInfo;
}

export interface AdAcoUpdateResponseMediaInfoListMediaInfo {
  readonly image_info?: ReadonlyArray<AdAcoUpdateResponseMediaInfoListMediaInfoImageInfo>;
  readonly video_info?: AdAcoUpdateResponseMediaInfoListMediaInfoVideoInfo;
  readonly aigc_disclosure_type?: string;
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: string;
}

export interface AdAcoUpdateResponseMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface AdAcoUpdateResponseMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface AdAcoUpdateResponsePageList {
  readonly page_id?: string;
}

export interface AdAcoUpdateResponseTitleList {
  readonly title?: string;
}

export interface AdAudienceSizeEstimateParams {
  readonly advertiser_id: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placements?: ReadonlyArray<string>;
  readonly app_id?: string;
  readonly pixel_id?: string;
  readonly ios14_targeting?: string;
  readonly objective_type: string;
  readonly optimization_goal: string;
  readonly promotion_type?: string;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE";
  readonly catalog_id?: string;
  readonly product_set_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdAudienceSizeEstimateParamsIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdAudienceSizeEstimateParamsExcludedCustomActions>;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly audience_rule?: string;
  readonly audience_type?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdAudienceSizeEstimateParamsActions>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID">;
  readonly min_ios_version?: string;
  readonly min_android_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly targeting_expansion?: AdAudienceSizeEstimateParamsTargetingExpansion;
  readonly auto_targeting_enabled?: boolean;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
}

export interface AdAudienceSizeEstimateParamsActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdAudienceSizeEstimateParamsExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdAudienceSizeEstimateParamsIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdAudienceSizeEstimateParamsTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<"AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE">;
}

export interface AdAudienceSizeEstimateResponse {
  readonly user_count_stage?: number;
  readonly user_count?: AdAudienceSizeEstimateResponseUserCount;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
}

export interface AdAudienceSizeEstimateResponseUserCount {
  readonly lower_end?: number;
  readonly upper_end?: number;
}

export interface AdCreateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly creatives: ReadonlyArray<AdCreateParamsCreatives>;
}

export interface AdCreateParamsCreatives {
  readonly ad_name: string;
  readonly identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id: string;
  readonly identity_authorized_bc_id?: string;
  readonly catalog_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly showcase_products?: ReadonlyArray<AdCreateParamsCreativesShowcaseProducts>;
  readonly ad_format: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM" | "DYNAMIC_CREATIVE";
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly promotional_music_disabled?: boolean;
  readonly item_duet_status?: "ENABLE" | "DISABLE";
  readonly item_stitch_status?: "ENABLE" | "DISABLE";
  readonly dark_post_status?: string;
  readonly shopping_ads_video_package_id?: string;
  readonly ad_text?: string;
  readonly ad_texts?: ReadonlyArray<string>;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly utm_params?: ReadonlyArray<AdCreateParamsCreativesUtmParams>;
  readonly page_id?: number;
  readonly cpp_url?: string;
  readonly tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  readonly deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK";
  readonly shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  readonly deeplink_utm_params?: ReadonlyArray<AdCreateParamsCreativesDeeplinkUtmParams>;
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  readonly dynamic_destination?: "DLP" | "UNSET" | "APP_ANDROID" | "APP_IOS" | "VIDEO" | "CATALOG" | "WEBSITE" | "CLICK" | "TRAFFIC_LANDING_PAGE_VIEW";
  readonly instant_product_page_used?: boolean;
  readonly page_image_index?: number;
  readonly auto_message_id?: string;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "LEAD_GENERATION" | "RF_REACH";
  readonly disclaimer_text?: AdCreateParamsCreativesDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<AdCreateParamsCreativesDisclaimerClickableTexts>;
  readonly tracking_pixel_id?: number;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly viewability_postbid_partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "LIVE_SHOPPING";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "NO_BRAND_SAFETY" | "LIVE_SHOPPING";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly playable_url?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly creative_type?: "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE" | "AUTO_INVENTORY_INSTANT_PAGE";
  readonly video_view_tracking_url?: string;
  readonly app_name?: string;
  readonly display_name?: string;
  readonly avatar_icon_web_uri?: string;
  readonly creative_authorized?: boolean;
  readonly schedule_id?: string;
}

export interface AdCreateParamsCreativesDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdCreateParamsCreativesDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface AdCreateParamsCreativesDisclaimerText {
  readonly text?: string;
}

export interface AdCreateParamsCreativesShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
  readonly catalog_id?: string;
}

export interface AdCreateParamsCreativesUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdCreateResponse {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly creatives?: ReadonlyArray<AdCreateResponseCreatives>;
  readonly page_info?: AdCreateResponsePageInfo;
}

export interface AdCreateResponseCreatives {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly catalog_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly showcase_products?: ReadonlyArray<AdCreateResponseCreativesShowcaseProducts>;
  readonly ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM";
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly promotional_music_disabled?: boolean;
  readonly item_duet_status?: "ENABLE" | "DISABLE";
  readonly item_stitch_status?: "ENABLE" | "DISABLE";
  readonly dark_post_status?: string;
  readonly branded_content_disabled?: boolean;
  readonly shopping_ads_video_package_id?: string;
  readonly ad_text?: string;
  readonly ad_texts?: string;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly utm_params?: ReadonlyArray<AdCreateResponseCreativesUtmParams>;
  readonly page_id?: number;
  readonly cpp_url?: string;
  readonly tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  readonly deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK" | "NONE";
  readonly shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly deeplink_utm_params?: ReadonlyArray<AdCreateResponseCreativesDeeplinkUtmParams>;
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  readonly dynamic_destination?: "DLP" | "UNSET";
  readonly auto_message_id?: string;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: AdCreateResponseCreativesDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<AdCreateResponseCreativesDisclaimerClickableTexts>;
  readonly tracking_pixel_id?: number;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly vast_moat_enabled?: boolean;
  readonly viewability_postbid_partner?: "UNSET" | "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "UNSET" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly playable_url?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly creative_type?: "SHOP_PDP" | "SHOP_PLP" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE";
  readonly app_name?: string;
  readonly display_name?: string;
  readonly profile_image_url?: string;
  readonly creative_authorized?: boolean;
  readonly is_aco?: boolean;
  readonly is_new_structure?: boolean;
  readonly optimization_event?: string;
}

export interface AdCreateResponseCreativesDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdCreateResponseCreativesDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface AdCreateResponseCreativesDisclaimerText {
  readonly text?: string;
}

export interface AdCreateResponseCreativesShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
  readonly catalog_id?: string;
}

export interface AdCreateResponseCreativesUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdCreateResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly exclude_field_types_in_response?: ReadonlyArray<string>;
  readonly filtering?: AdGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface AdGetParamsFiltering {
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly ad_ids_v2?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_system_origins?: ReadonlyArray<"PROMOTE" | "TT_ADS_PLATFORM">;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly ad_ids?: ReadonlyArray<string>;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly buying_types?: ReadonlyArray<"AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW">;
  readonly optimization_goal?: string;
  readonly creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  readonly destination?: "APP" | "APP_ANDROID" | "APP_IOS" | "TIKTOK_INSTANT_PAGE" | "WEBSITE" | "SOCIAL_MEDIA_APP" | "PHONE_CALL";
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
  readonly modified_after?: string;
}

export interface AdGetResponse {
  readonly list?: ReadonlyArray<AdGetResponseList>;
  readonly page_info?: AdGetResponsePageInfo;
}

export interface AdGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly campaign_system_origin?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly smart_plus_ad_id?: string;
  readonly ad_id?: string;
  readonly ad_id_v2?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly catalog_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly showcase_products?: ReadonlyArray<AdGetResponseListShowcaseProducts>;
  readonly ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM";
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly promotional_music_disabled?: boolean;
  readonly item_duet_status?: "ENABLE" | "DISABLE";
  readonly item_stitch_status?: "ENABLE" | "DISABLE";
  readonly dark_post_status?: "ON" | "OFF";
  readonly branded_content_disabled?: boolean;
  readonly shopping_ads_video_package_id?: string;
  readonly ad_text?: string;
  readonly ad_texts?: ReadonlyArray<string>;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly utm_params?: ReadonlyArray<AdGetResponseListUtmParams>;
  readonly page_id?: number;
  readonly cpp_url?: string;
  readonly tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  readonly deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK" | "NONE";
  readonly shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  readonly deeplink_utm_params?: ReadonlyArray<AdGetResponseListDeeplinkUtmParams>;
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  readonly dynamic_destination?: "DLP" | "UNSET";
  readonly auto_message_id?: string;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: AdGetResponseListDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<AdGetResponseListDisclaimerClickableTexts>;
  readonly tracking_pixel_id?: number;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly vast_moat_enabled?: boolean;
  readonly viewability_postbid_partner?: "UNSET" | "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "UNSET" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly playable_url?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly creative_type?: "SHOP_PDP" | "SHOP_PLP" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE";
  readonly app_name?: string;
  readonly display_name?: string;
  readonly avatar_icon_web_uri?: string;
  readonly profile_image_url?: string;
  readonly creative_authorized?: boolean;
  readonly is_aco?: boolean;
  readonly is_new_structure?: boolean;
  readonly optimization_event?: string;
}

export interface AdGetResponseListDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdGetResponseListDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface AdGetResponseListDisclaimerText {
  readonly text?: string;
}

export interface AdGetResponseListShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
  readonly catalog_id?: string;
}

export interface AdGetResponseListUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdgroupAppealParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly ad_id?: string;
  readonly appeal_reason?: string;
  readonly attachment_list?: ReadonlyArray<string>;
}

export interface AdgroupAppealResponse {

}

export interface AdgroupBudgetUpdateParams {
  readonly advertiser_id: string;
  readonly budget?: ReadonlyArray<AdgroupBudgetUpdateParamsBudget>;
  readonly scheduled_budget?: ReadonlyArray<AdgroupBudgetUpdateParamsScheduledBudget>;
}

export interface AdgroupBudgetUpdateParamsBudget {
  readonly adgroup_id?: string;
  readonly budget?: number;
}

export interface AdgroupBudgetUpdateParamsScheduledBudget {
  readonly adgroup_id?: string;
  readonly scheduled_budget?: number;
}

export interface AdgroupBudgetUpdateResponse {

}

export interface AdgroupCreateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly adgroup_name: string;
  readonly request_id?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "CLICK";
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly messaging_app_account_id?: string;
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  readonly app_id?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly app_config?: ReadonlyArray<AdgroupCreateParamsAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placements?: ReadonlyArray<string>;
  readonly tiktok_subplacements?: ReadonlyArray<"IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8">;
  readonly search_result_enabled?: boolean;
  readonly automated_keywords_enabled?: boolean;
  readonly search_keywords?: ReadonlyArray<AdgroupCreateParamsSearchKeywords>;
  readonly comment_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly saved_audience_id?: string;
  readonly auto_targeting_enabled?: boolean;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdgroupCreateParamsIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdgroupCreateParamsExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly smart_audience_enabled?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdgroupCreateParamsActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID">;
  readonly min_android_version?: string;
  readonly ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL" | "APP_RETARGETING" | "APP_IOS" | "VIDEO" | "CATALOG" | "OFF";
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly targeting_expansion?: AdgroupCreateParamsTargetingExpansion;
  readonly audience_type?: string;
  readonly audience_rule?: string;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
  readonly budget_mode: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget: number;
  readonly schedule_type: string;
  readonly schedule_start_time: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly optimization_goal: string;
  readonly secondary_optimization_event?: string;
  readonly message_event_set_id?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: "VO_MIN_ROAS" | "VO_HIGHEST_VALUE";
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly bid_display_mode?: string;
  readonly next_day_retention?: number;
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event: string;
  readonly pacing: string;
  readonly statistic_type?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly creative_material_mode?: string;
  readonly adgroup_app_profile_page_state?: "ON" | "OFF" | "IOS14_PLUS" | "IN_APP_EVENT" | "BID_TYPE_CUSTOM";
  readonly "conversion_window (deprecated)"?: string;
}

export interface AdgroupCreateParamsActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdgroupCreateParamsAppConfig {
  readonly app_id?: string;
}

export interface AdgroupCreateParamsExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupCreateParamsIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupCreateParamsSearchKeywords {
  readonly keyword?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  readonly keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  readonly keyword_bid?: number;
}

export interface AdgroupCreateParamsTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<"AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE">;
}

export interface AdgroupCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly messaging_app_account_id?: string;
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  readonly app_id?: string;
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_download_url?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly app_config?: ReadonlyArray<AdgroupCreateResponseAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placements?: ReadonlyArray<string>;
  readonly tiktok_subplacements?: ReadonlyArray<"IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8">;
  readonly search_result_enabled?: boolean;
  readonly automated_keywords_enabled?: boolean;
  readonly search_keywords?: ReadonlyArray<AdgroupCreateResponseSearchKeywords>;
  readonly comment_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly audience_rule?: string;
  readonly audience_type?: string;
  readonly saved_audience_id?: string;
  readonly auto_targeting_enabled?: boolean;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdgroupCreateResponseIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdgroupCreateResponseExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly smart_audience_enabled?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdgroupCreateResponseActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly min_android_version?: string;
  readonly ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  readonly min_ios_version?: string;
  readonly ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly targeting_expansion?: AdgroupCreateResponseTargetingExpansion;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly inventory_filter_enabled?: boolean;
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
  readonly budget_mode?: string;
  readonly budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  readonly dayparting?: string;
  readonly optimization_goal?: string;
  readonly secondary_optimization_event?: string;
  readonly message_event_set_id?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly bid_display_mode?: string;
  readonly deep_cpa_bid?: number;
  readonly cpv_video_duration?: string;
  readonly next_day_retention?: number;
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly statistic_type?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly creative_material_mode?: string;
  readonly adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly rf_purchased_type?: string;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly rf_estimated_cpr?: number;
  readonly rf_estimated_frequency?: number;
  readonly is_new_structure?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly "conversion_window (deprecated)"?: string;
  readonly page_info?: AdgroupCreateResponsePageInfo;
}

export interface AdgroupCreateResponseActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdgroupCreateResponseAppConfig {
  readonly app_id?: string;
}

export interface AdgroupCreateResponseExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupCreateResponseIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupCreateResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdgroupCreateResponseSearchKeywords {
  readonly keyword?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  readonly keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  readonly keyword_bid?: number;
  readonly audit_status?: "AUDITING" | "PASS" | "REJECTED";
  readonly reject_info?: ReadonlyArray<AdgroupCreateResponseSearchKeywordsRejectInfo>;
}

export interface AdgroupCreateResponseSearchKeywordsRejectInfo {
  readonly forbidden_location?: string;
  readonly reject_reasons?: ReadonlyArray<AdgroupCreateResponseSearchKeywordsRejectInfoRejectReasons>;
}

export interface AdgroupCreateResponseSearchKeywordsRejectInfoRejectReasons {
  readonly reason?: string;
}

export interface AdgroupCreateResponseTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<string>;
}

export interface AdgroupGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly exclude_field_types_in_response?: ReadonlyArray<string>;
  readonly filtering?: AdgroupGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface AdgroupGetParamsFiltering {
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_system_origins?: ReadonlyArray<"PROMOTE" | "TT_ADS_PLATFORM">;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly adgroup_name?: string;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly buying_types?: ReadonlyArray<"AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW">;
  readonly optimization_goal?: string;
  readonly promotion_type?: "APP" | "WEBSITE" | "INSTANT_FORM" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  readonly bid_strategy?: "BID_STRATEGY_COST_CAP" | "BID_STRATEGY_MAX_CONVERSION" | "BID_STRATEGY_LOWEST_COST";
  readonly creative_material_mode?: "CUSTOM" | "SMART_CREATIVE";
  readonly billing_events?: ReadonlyArray<string>;
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
  readonly split_test_enabled?: boolean;
}

export interface AdgroupGetResponse {
  readonly list?: ReadonlyArray<AdgroupGetResponseList>;
  readonly page_info?: AdgroupGetResponsePageInfo;
}

export interface AdgroupGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly campaign_system_origin?: string;
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly is_smart_performance_campaign?: boolean;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly messaging_app_account_id?: string;
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  readonly app_id?: string;
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_download_url?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly app_config?: ReadonlyArray<AdgroupGetResponseListAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placements?: ReadonlyArray<string>;
  readonly tiktok_subplacements?: ReadonlyArray<"IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8">;
  readonly search_result_enabled?: boolean;
  readonly automated_keywords_enabled?: boolean;
  readonly search_keywords?: ReadonlyArray<AdgroupGetResponseListSearchKeywords>;
  readonly comment_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly audience_type?: string;
  readonly audience_rule?: string;
  readonly auto_targeting_enabled?: boolean;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdgroupGetResponseListIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdgroupGetResponseListExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly smart_audience_enabled?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdgroupGetResponseListActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly min_android_version?: string;
  readonly ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  readonly min_ios_version?: string;
  readonly ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly targeting_expansion?: AdgroupGetResponseListTargetingExpansion;
  readonly saved_audience_id?: string;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly inventory_filter_enabled?: boolean;
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
  readonly budget_mode?: string;
  readonly budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly predict_impression?: number;
  readonly topview_reach_range?: ReadonlyArray<number>;
  readonly pre_discount_cpm?: number;
  readonly cpm?: number;
  readonly discount_type?: "NO_DISCOUNT" | "BY_PERCENTAGE" | "BY_AMOUNT";
  readonly discount_amount?: number;
  readonly discount_percentage?: number;
  readonly pre_discount_budget?: number;
  readonly schedule_infos?: ReadonlyArray<AdgroupGetResponseListScheduleInfos>;
  readonly delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  readonly dayparting?: string;
  readonly optimization_goal?: string;
  readonly secondary_optimization_event?: string;
  readonly message_event_set_id?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly bid_display_mode?: string;
  readonly deep_cpa_bid?: number;
  readonly cpv_video_duration?: string;
  readonly next_day_retention?: number;
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly statistic_type?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  readonly adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly rf_purchased_type?: string;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly rf_estimated_cpr?: number;
  readonly rf_estimated_frequency?: number;
  readonly split_test_group_id?: string;
  readonly split_test_status?: string;
  readonly is_new_structure?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly "conversion_window (deprecated)"?: string;
}

export interface AdgroupGetResponseListActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdgroupGetResponseListAppConfig {
  readonly app_id?: string;
}

export interface AdgroupGetResponseListExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupGetResponseListIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupGetResponseListScheduleInfos {
  readonly schedules?: ReadonlyArray<AdgroupGetResponseListScheduleInfosSchedules>;
  readonly expected_orders?: ReadonlyArray<number>;
  readonly is_draft?: boolean;
  readonly schedule_id?: string;
}

export interface AdgroupGetResponseListScheduleInfosSchedules {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AdgroupGetResponseListSearchKeywords {
  readonly keyword?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  readonly keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  readonly keyword_bid?: number;
  readonly audit_status?: "AUDITING" | "PASS" | "REJECTED";
  readonly reject_info?: ReadonlyArray<AdgroupGetResponseListSearchKeywordsRejectInfo>;
}

export interface AdgroupGetResponseListSearchKeywordsRejectInfo {
  readonly forbidden_location?: string;
  readonly reject_reasons?: ReadonlyArray<AdgroupGetResponseListSearchKeywordsRejectInfoRejectReasons>;
}

export interface AdgroupGetResponseListSearchKeywordsRejectInfoRejectReasons {
  readonly reason?: string;
}

export interface AdgroupGetResponseListTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<string>;
}

export interface AdgroupGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdgroupQuotaParams {
  readonly advertiser_id: string;
}

export interface AdgroupQuotaResponse {
  readonly total_adgroup_quota?: number;
  readonly used_adgroup_quota?: number;
}

export interface AdgroupReviewInfoParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
  readonly lang?: string;
}

export interface AdgroupReviewInfoResponse {
  readonly ad_review_map?: AdgroupReviewInfoResponseAdReviewMap;
  readonly ad_group_review_map?: AdgroupReviewInfoResponseAdGroupReviewMap;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMap {
  readonly adgroup_id?: string;
  readonly is_approved?: boolean;
  readonly review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  readonly appeal_status?: string;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_operation_systems?: ReadonlyArray<string>;
  readonly last_audit_time?: string;
  readonly contain_rejected_ads?: boolean;
  readonly reject_info?: ReadonlyArray<AdgroupReviewInfoResponseAdGroupReviewMapRejectInfo>;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMapRejectInfo {
  readonly suggestion?: string;
  readonly reasons?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfo;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfo {
  readonly image_content?: AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoImageContent;
  readonly video_content?: AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoVideoContent;
  readonly text_content?: string;
  readonly content_type?: string;
  readonly carousel_music_content?: AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoCarouselMusicContent;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoCarouselMusicContent {
  readonly music_id?: string;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface AdgroupReviewInfoResponseAdGroupReviewMapRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface AdgroupReviewInfoResponseAdReviewMap {
  readonly ad_id?: string;
  readonly is_approved?: boolean;
  readonly review_status?: string;
  readonly appeal_status?: string;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_operation_systems?: ReadonlyArray<string>;
  readonly last_audit_time?: string;
  readonly reject_info?: ReadonlyArray<AdgroupReviewInfoResponseAdReviewMapRejectInfo>;
}

export interface AdgroupReviewInfoResponseAdReviewMapRejectInfo {
  readonly suggestion?: string;
  readonly reasons?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfo;
}

export interface AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfo {
  readonly image_content?: AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoImageContent;
  readonly video_content?: AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoVideoContent;
  readonly text_content?: string;
  readonly content_type?: string;
  readonly carousel_music_content?: AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoCarouselMusicContent;
}

export interface AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoCarouselMusicContent {
  readonly music_id?: string;
}

export interface AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface AdgroupReviewInfoResponseAdReviewMapRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface AdgroupRfCreateParams {
  readonly request_id: string;
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly share_disabled?: boolean;
  readonly adgroup_name: string;
  readonly promotion_type: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY" | "RF_REACH";
  readonly optimization_event?: string;
  readonly app_id?: string;
  readonly comment_disabled?: boolean;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: string;
  readonly languages?: ReadonlyArray<string>;
  readonly location_ids: ReadonlyArray<string>;
  readonly is_hfss?: boolean;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "PC">;
  readonly network_types?: ReadonlyArray<string>;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly rf_purchased_type: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  readonly budget: number;
  readonly purchased_impression: number;
  readonly purchased_reach: number;
  readonly schedule_start_time: string;
  readonly schedule_end_time: string;
  readonly frequency: number;
  readonly frequency_schedule: number;
  readonly optimization_goal: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL" | "PULSE" | "SIX_SECONDS";
  readonly cpv_video_duration?: "SIX_SECONDS" | "PULSE" | "REACH";
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly video_download_disabled?: boolean;
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly delivery_mode?: "STANDARD" | "REACH" | "SIX_SECONDS" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  readonly schedule_infos?: ReadonlyArray<AdgroupRfCreateParamsScheduleInfos>;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
}

export interface AdgroupRfCreateParamsScheduleInfos {
  readonly schedules?: ReadonlyArray<AdgroupRfCreateParamsScheduleInfosSchedules>;
  readonly expected_orders?: ReadonlyArray<number>;
}

export interface AdgroupRfCreateParamsScheduleInfosSchedules {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AdgroupRfCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly adgroup_id?: string;
  readonly share_disabled?: boolean;
  readonly adgroup_name?: string;
  readonly promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY";
  readonly optimization_event?: string;
  readonly app_id?: string;
  readonly comment_disabled?: boolean;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly languages?: ReadonlyArray<string>;
  readonly location_ids?: ReadonlyArray<string>;
  readonly is_hfss?: boolean;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "PC">;
  readonly network_types?: ReadonlyArray<string>;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  readonly budget?: number;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly optimization_goal?: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL";
  readonly cpv_video_duration?: string;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly video_download_disabled?: boolean;
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  readonly schedule_infos?: ReadonlyArray<AdgroupRfCreateResponseScheduleInfos>;
  readonly notice?: string;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
}

export interface AdgroupRfCreateResponseScheduleInfos {
  readonly schedules?: ReadonlyArray<AdgroupRfCreateResponseScheduleInfosSchedules>;
  readonly expected_orders?: ReadonlyArray<number>;
  readonly is_draft?: boolean;
  readonly schedule_id?: string;
}

export interface AdgroupRfCreateResponseScheduleInfosSchedules {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AdgroupRfEstimatedInfoParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
}

export interface AdgroupRfEstimatedInfoResponse {
  readonly estimated_info?: ReadonlyArray<AdgroupRfEstimatedInfoResponseEstimatedInfo>;
}

export interface AdgroupRfEstimatedInfoResponseEstimatedInfo {
  readonly adgroup_id?: string;
  readonly base_info?: AdgroupRfEstimatedInfoResponseEstimatedInfoBaseInfo;
  readonly daily_cost?: AdgroupRfEstimatedInfoResponseEstimatedInfoDailyCost;
  readonly frequency_per_person?: AdgroupRfEstimatedInfoResponseEstimatedInfoFrequencyPerPerson;
}

export interface AdgroupRfEstimatedInfoResponseEstimatedInfoBaseInfo {
  readonly budget?: number;
  readonly cpm?: number;
  readonly impression?: number;
  readonly reach?: number;
  readonly average_frequency?: number;
}

export interface AdgroupRfEstimatedInfoResponseEstimatedInfoDailyCost {
  readonly cost?: number;
  readonly date?: string;
}

export interface AdgroupRfEstimatedInfoResponseEstimatedInfoFrequencyPerPerson {
  readonly frequency?: number;
  readonly percentage?: number;
}

export interface AdgroupRfUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly share_disabled?: boolean;
  readonly adgroup_name?: string;
  readonly comment_disabled?: boolean;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: string;
  readonly languages?: ReadonlyArray<string>;
  readonly location_ids?: ReadonlyArray<string>;
  readonly is_hfss?: boolean;
  readonly operating_systems?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGE";
  readonly budget?: number;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly delivery_mode?: "STANDARD" | "REACH" | "SIX_SECONDS" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  readonly schedule_infos?: ReadonlyArray<AdgroupRfUpdateParamsScheduleInfos>;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
}

export interface AdgroupRfUpdateParamsScheduleInfos {
  readonly schedules?: ReadonlyArray<AdgroupRfUpdateParamsScheduleInfosSchedules>;
  readonly expected_orders?: ReadonlyArray<number>;
}

export interface AdgroupRfUpdateParamsScheduleInfosSchedules {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AdgroupRfUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly adgroup_id?: string;
  readonly share_disabled?: boolean;
  readonly adgroup_name?: string;
  readonly promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY";
  readonly optimization_event?: string;
  readonly app_id?: string;
  readonly comment_disabled?: boolean;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: string;
  readonly languages?: ReadonlyArray<string>;
  readonly location_ids?: ReadonlyArray<string>;
  readonly is_hfss?: boolean;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "PC">;
  readonly network_types?: ReadonlyArray<string>;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  readonly budget?: number;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly optimization_goal?: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL";
  readonly cpv_video_duration?: "TWO_SECONDS" | "SIX_SECONDS";
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly video_download_disabled?: boolean;
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  readonly schedule_infos?: ReadonlyArray<AdgroupRfUpdateResponseScheduleInfos>;
  readonly notice?: string;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
}

export interface AdgroupRfUpdateResponseScheduleInfos {
  readonly schedules?: ReadonlyArray<AdgroupRfUpdateResponseScheduleInfosSchedules>;
  readonly expected_orders?: ReadonlyArray<number>;
  readonly is_draft?: boolean;
  readonly schedule_id?: string;
}

export interface AdgroupRfUpdateResponseScheduleInfosSchedules {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AdgroupStatusUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
  readonly operation_status: "DISABLE" | "ENABLE" | "DELETE";
  readonly allow_partial_success?: boolean;
}

export interface AdgroupStatusUpdateResponse {
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly status?: "DISABLE" | "ENABLE" | "DELETE";
  readonly error_list?: ReadonlyArray<AdgroupStatusUpdateResponseErrorList>;
}

export interface AdgroupStatusUpdateResponseErrorList {
  readonly adgroup_id?: string;
  readonly error_message?: string;
}

export interface AdgroupUpdateParams {
  readonly adgroup_id: string;
  readonly advertiser_id: string;
  readonly adgroup_name?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly search_result_enabled?: boolean;
  readonly automated_keywords_enabled?: boolean;
  readonly search_keywords?: ReadonlyArray<AdgroupUpdateParamsSearchKeywords>;
  readonly audience_type?: string;
  readonly audience_rule?: string;
  readonly saved_audience_id?: string;
  readonly auto_targeting_enabled?: boolean;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdgroupUpdateParamsIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdgroupUpdateParamsExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly exclude_age_under_eighteen?: boolean;
  readonly spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly smart_audience_enabled?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdgroupUpdateParamsActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID">;
  readonly min_android_version?: string;
  readonly ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL" | "APP_RETARGETING" | "APP_IOS" | "VIDEO" | "CATALOG" | "OFF";
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly targeting_expansion?: AdgroupUpdateParamsTargetingExpansion;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
  readonly budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly secondary_optimization_event?: string;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly deep_cpa_bid?: number;
  readonly next_day_retention?: number;
  readonly pacing?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
}

export interface AdgroupUpdateParamsActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdgroupUpdateParamsExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupUpdateParamsIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupUpdateParamsSearchKeywords {
  readonly keyword?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  readonly keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  readonly keyword_bid?: number;
}

export interface AdgroupUpdateParamsTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<"AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE">;
}

export interface AdgroupUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly messaging_app_account_id?: string;
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  readonly app_id?: string;
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_download_url?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly app_config?: ReadonlyArray<AdgroupUpdateResponseAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placements?: ReadonlyArray<string>;
  readonly tiktok_subplacements?: ReadonlyArray<"IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8">;
  readonly search_result_enabled?: boolean;
  readonly automated_keywords_enabled?: boolean;
  readonly search_keywords?: ReadonlyArray<AdgroupUpdateResponseSearchKeywords>;
  readonly comment_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly audience_type?: string;
  readonly audience_rule?: string;
  readonly saved_audience_id?: string;
  readonly auto_targeting_enabled?: boolean;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<AdgroupUpdateResponseIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<AdgroupUpdateResponseExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly smart_audience_enabled?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<AdgroupUpdateResponseActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly min_android_version?: string;
  readonly ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  readonly min_ios_version?: string;
  readonly ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly targeting_expansion?: AdgroupUpdateResponseTargetingExpansion;
  readonly contextual_tag_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly inventory_filter_enabled?: boolean;
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
  readonly budget_mode?: string;
  readonly budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  readonly dayparting?: string;
  readonly optimization_goal?: string;
  readonly secondary_optimization_event?: string;
  readonly message_event_set_id?: string;
  readonly frequency?: number;
  readonly frequency_schedule?: number;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly bid_display_mode?: string;
  readonly deep_cpa_bid?: number;
  readonly cpv_video_duration?: string;
  readonly next_day_retention?: number;
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly statistic_type?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  readonly adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly rf_purchased_type?: string;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly rf_estimated_cpr?: number;
  readonly rf_estimated_frequency?: number;
  readonly is_new_structure?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly conversion_window?: string;
  readonly page_info?: AdgroupUpdateResponsePageInfo;
}

export interface AdgroupUpdateResponseActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface AdgroupUpdateResponseAppConfig {
  readonly app_id?: string;
}

export interface AdgroupUpdateResponseExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupUpdateResponseIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface AdgroupUpdateResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdgroupUpdateResponseSearchKeywords {
  readonly keyword?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  readonly keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  readonly keyword_bid?: number;
  readonly audit_status?: "AUDITING" | "PASS" | "REJECTED";
  readonly reject_info?: ReadonlyArray<AdgroupUpdateResponseSearchKeywordsRejectInfo>;
}

export interface AdgroupUpdateResponseSearchKeywordsRejectInfo {
  readonly forbidden_location?: string;
  readonly reject_reasons?: ReadonlyArray<AdgroupUpdateResponseSearchKeywordsRejectInfoRejectReasons>;
}

export interface AdgroupUpdateResponseSearchKeywordsRejectInfoRejectReasons {
  readonly reason?: string;
}

export interface AdgroupUpdateResponseTargetingExpansion {
  readonly expansion_enabled?: boolean;
  readonly expansion_types?: ReadonlyArray<string>;
}

export interface AdReviewInfoParams {
  readonly advertiser_id: string;
  readonly ad_ids: ReadonlyArray<string>;
  readonly lang?: string;
}

export interface AdReviewInfoResponse {
  readonly ad_review_map?: AdReviewInfoResponseAdReviewMap;
}

export interface AdReviewInfoResponseAdReviewMap {
  readonly ad_id?: string;
  readonly is_approved?: boolean;
  readonly review_status?: string;
  readonly appeal_status?: string;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_operation_systems?: ReadonlyArray<string>;
  readonly last_audit_time?: string;
  readonly reject_info?: ReadonlyArray<AdReviewInfoResponseAdReviewMapRejectInfo>;
}

export interface AdReviewInfoResponseAdReviewMapRejectInfo {
  readonly suggestion?: string;
  readonly reasons?: ReadonlyArray<string>;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: AdReviewInfoResponseAdReviewMapRejectInfoContentInfo;
}

export interface AdReviewInfoResponseAdReviewMapRejectInfoContentInfo {
  readonly image_content?: AdReviewInfoResponseAdReviewMapRejectInfoContentInfoImageContent;
  readonly video_content?: AdReviewInfoResponseAdReviewMapRejectInfoContentInfoVideoContent;
  readonly text_content?: string;
  readonly content_type?: string;
  readonly carousel_music_content?: AdReviewInfoResponseAdReviewMapRejectInfoContentInfoCarouselMusicContent;
}

export interface AdReviewInfoResponseAdReviewMapRejectInfoContentInfoCarouselMusicContent {
  readonly music_id?: string;
}

export interface AdReviewInfoResponseAdReviewMapRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface AdReviewInfoResponseAdReviewMapRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface AdStatusUpdateParams {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly aco_ad_ids?: ReadonlyArray<string>;
  readonly advertiser_id: string;
  readonly operation_status: "DELETE" | "ENABLE";
}

export interface AdStatusUpdateResponse {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly aco_ad_ids?: ReadonlyArray<string>;
  readonly status?: "DELETE" | "DISABLE" | "ENABLE";
}

export interface AdUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly patch_update?: boolean;
  readonly creatives: ReadonlyArray<AdUpdateParamsCreatives>;
}

export interface AdUpdateParamsCreatives {
  readonly ad_id: string;
  readonly ad_name?: string;
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM" | "DYNAMIC_CREATIVE";
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly promotional_music_disabled?: boolean;
  readonly item_duet_status?: "ENABLE" | "DISABLE";
  readonly item_stitch_status?: "ENABLE" | "DISABLE";
  readonly dark_post_status?: string;
  readonly shopping_ads_video_package_id?: string;
  readonly ad_text?: string;
  readonly ad_texts?: ReadonlyArray<string>;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly utm_params?: ReadonlyArray<AdUpdateParamsCreativesUtmParams>;
  readonly page_id?: number;
  readonly cpp_url?: string;
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  readonly shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  readonly deeplink_utm_params?: ReadonlyArray<AdUpdateParamsCreativesDeeplinkUtmParams>;
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  readonly dynamic_destination?: "DLP" | "UNSET";
  readonly instant_product_page_used?: boolean;
  readonly page_image_index?: number;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "LEAD_GENERATION" | "RF_REACH";
  readonly disclaimer_text?: AdUpdateParamsCreativesDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<AdUpdateParamsCreativesDisclaimerClickableTexts>;
  readonly tracking_pixel_id?: number;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly vast_moat_enabled?: boolean;
  readonly viewability_postbid_partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "LIVE_SHOPPING";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "NO_BRAND_SAFETY" | "LIVE_SHOPPING";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly video_view_tracking_url?: string;
  readonly playable_url?: string;
  readonly creative_type?: "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE" | "AUTO_INVENTORY_INSTANT_PAGE";
  readonly app_name?: string;
  readonly display_name?: string;
  readonly avatar_icon_web_uri?: string;
  readonly creative_authorized?: boolean;
}

export interface AdUpdateParamsCreativesDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdUpdateParamsCreativesDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface AdUpdateParamsCreativesDisclaimerText {
  readonly text?: string;
}

export interface AdUpdateParamsCreativesUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdUpdateResponse {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly creatives?: ReadonlyArray<AdUpdateResponseCreatives>;
  readonly page_info?: AdUpdateResponsePageInfo;
}

export interface AdUpdateResponseCreatives {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly catalog_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly showcase_products?: ReadonlyArray<AdUpdateResponseCreativesShowcaseProducts>;
  readonly ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM";
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly promotional_music_disabled?: boolean;
  readonly item_duet_status?: "ENABLE" | "DISABLE";
  readonly item_stitch_status?: "ENABLE" | "DISABLE";
  readonly dark_post_status?: string;
  readonly branded_content_disabled?: boolean;
  readonly shopping_ads_video_package_id?: string;
  readonly ad_text?: string;
  readonly ad_texts?: string;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly utm_params?: ReadonlyArray<AdUpdateResponseCreativesUtmParams>;
  readonly page_id?: number;
  readonly cpp_url?: string;
  readonly tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  readonly deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK" | "NONE";
  readonly shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  readonly deeplink_utm_params?: ReadonlyArray<AdUpdateResponseCreativesDeeplinkUtmParams>;
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  readonly dynamic_destination?: "DLP" | "UNSET";
  readonly auto_message_id?: string;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: AdUpdateResponseCreativesDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<AdUpdateResponseCreativesDisclaimerClickableTexts>;
  readonly tracking_pixel_id?: number;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly vast_moat_enabled?: boolean;
  readonly viewability_postbid_partner?: "UNSET" | "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "UNSET" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly playable_url?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly creative_type?: "SHOP_PDP" | "SHOP_PLP" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE";
  readonly app_name?: string;
  readonly display_name?: string;
  readonly profile_image_url?: string;
  readonly creative_authorized?: boolean;
  readonly is_aco?: boolean;
  readonly is_new_structure?: boolean;
  readonly optimization_event?: string;
}

export interface AdUpdateResponseCreativesDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdUpdateResponseCreativesDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface AdUpdateResponseCreativesDisclaimerText {
  readonly text?: string;
}

export interface AdUpdateResponseCreativesShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
  readonly catalog_id?: string;
}

export interface AdUpdateResponseCreativesUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface AdUpdateResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdvertiserBalanceGetParams {
  readonly bc_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly filtering?: AdvertiserBalanceGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface AdvertiserBalanceGetParamsFiltering {
  readonly keyword?: string;
  readonly advertiser_status?: ReadonlyArray<string>;
  readonly payment_portfolio_id?: string;
}

export interface AdvertiserBalanceGetResponse {
  readonly advertiser_account_list?: ReadonlyArray<AdvertiserBalanceGetResponseAdvertiserAccountList>;
  readonly page_info?: AdvertiserBalanceGetResponsePageInfo;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
  readonly advertiser_status?: string;
  readonly advertiser_type?: string;
  readonly timezone?: string;
  readonly currency?: string;
  readonly account_open_days?: number;
  readonly balance_reminder?: boolean;
  readonly company?: string;
  readonly contact_name?: string;
  readonly contact_email?: string;
  readonly create_time?: string;
  readonly first_recharge_amount?: number;
  readonly first_recharge_time?: string;
  readonly latest_recharge_time?: string;
  readonly recharge_amount?: number;
  readonly recharge_count?: number;
  readonly account_balance?: number;
  readonly valid_account_balance?: number;
  readonly frozen_balance?: number;
  readonly tax?: number;
  readonly cash_balance?: number;
  readonly valid_cash_balance?: number;
  readonly grant_balance?: number;
  readonly valid_grant_balance?: number;
  readonly payment_portfolio_id?: number;
  readonly payment_portfolio_name?: string;
  readonly payment_portfolio_type?: "SHARED" | "NON_SHARED";
  readonly transferable_amount?: number;
  readonly max_transferable_amount?: AdvertiserBalanceGetResponseAdvertiserAccountListMaxTransferableAmount;
  readonly balance_info?: AdvertiserBalanceGetResponseAdvertiserAccountListBalanceInfo;
  readonly budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  readonly budget?: number;
  readonly budget_cost?: number;
  readonly budget_remaining?: number;
  readonly budget_frequency_restriction?: AdvertiserBalanceGetResponseAdvertiserAccountListBudgetFrequencyRestriction;
  readonly budget_amount_restriction?: AdvertiserBalanceGetResponseAdvertiserAccountListBudgetAmountRestriction;
  readonly min_transferable_amount?: AdvertiserBalanceGetResponseAdvertiserAccountListMinTransferableAmount;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountListBalanceInfo {
  readonly account_balance?: number;
  readonly frozen_balance?: number;
  readonly valid_account_balance?: number;
  readonly tax?: number;
  readonly cash_balance?: number;
  readonly frozen_cash_balance?: number;
  readonly cash_tax?: number;
  readonly valid_cash_balance?: number;
  readonly grant_balance?: number;
  readonly valid_grant_balance?: number;
  readonly frozen_grant_balance?: number;
  readonly credit_balance?: number;
  readonly valid_credit_balance?: number;
  readonly frozen_credit_balance?: number;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountListBudgetAmountRestriction {
  readonly minimum_amount?: string;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountListBudgetFrequencyRestriction {
  readonly total_count?: number;
  readonly used_count?: number;
  readonly remaining_count?: number;
  readonly effective_start_time?: string;
  readonly effective_end_time?: string;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountListMaxTransferableAmount {
  readonly cash_amount?: number;
  readonly grant_amount?: number;
}

export interface AdvertiserBalanceGetResponseAdvertiserAccountListMinTransferableAmount {
  readonly cash_amount?: string;
  readonly grant_amount?: string;
  readonly credit_amount?: string;
}

export interface AdvertiserBalanceGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdvertiserInfoParams {
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly fields?: ReadonlyArray<string>;
}

export interface AdvertiserInfoResponse {
  readonly list?: ReadonlyArray<AdvertiserInfoResponseList>;
}

export interface AdvertiserInfoResponseList {
  readonly advertiser_id?: string;
  readonly can_use_custom_identity?: boolean;
  readonly ads_only_mode?: boolean;
  readonly owner_bc_id?: string;
  readonly status?: string;
  readonly role?: string;
  readonly rejection_reason?: string;
  readonly name?: string;
  readonly timezone?: string;
  readonly display_timezone?: string;
  readonly company?: string;
  readonly company_name_editable?: boolean;
  readonly industry?: string;
  readonly address?: string;
  readonly country?: string;
  readonly advertiser_account_type?: "RESERVATION" | "AUCTION";
  readonly currency?: string;
  readonly contacter?: string;
  readonly email?: string;
  readonly cellphone_number?: string;
  readonly telephone_number?: string;
  readonly language?: string;
  readonly license_no?: string;
  readonly license_url?: string;
  readonly license_province?: string;
  readonly license_city?: string;
  readonly promotion_area?: string;
  readonly promotion_center_province?: string;
  readonly promotion_center_city?: string;
  readonly brand?: string;
  readonly description?: string;
  readonly balance?: number;
  readonly create_time?: string;
}

export interface AdvertiserTransactionGetParams {
  readonly bc_id: string;
  readonly filtering?: AdvertiserTransactionGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface AdvertiserTransactionGetParamsFiltering {
  readonly transfer_type?: "TRANS_TYPE_TRANSFER" | "TRANS_TYPE_TAX" | "TRANS_TYPE_COST" | "TRANS_TYPE_PAYMENT";
  readonly funds_type?: ReadonlyArray<string>;
  readonly summary_by_account?: boolean;
  readonly keyword?: string;
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface AdvertiserTransactionGetResponse {
  readonly transaction_list?: ReadonlyArray<AdvertiserTransactionGetResponseTransactionList>;
  readonly page_info?: AdvertiserTransactionGetResponsePageInfo;
}

export interface AdvertiserTransactionGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface AdvertiserTransactionGetResponseTransactionList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
  readonly amount?: number;
  readonly currency?: string;
  readonly date?: string;
  readonly funds_type?: string;
  readonly transfer_type?: "TRANS_TYPE_TRANSFER" | "TRANS_TYPE_TAX" | "TRANS_TYPE_COST";
  readonly timezone?: string;
}

export interface AdvertiserUpdateParams {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
  readonly company?: string;
  readonly contact_name?: string;
  readonly contact_email?: string;
  readonly contact_number?: string;
  readonly promotion_link?: string;
  readonly license_no?: string;
  readonly license_image_id?: string;
  readonly qualification_images?: ReadonlyArray<AdvertiserUpdateParamsQualificationImages>;
  readonly address?: string;
  readonly tax_map?: string;
  readonly need_submit_certificate?: boolean;
  readonly bc_id?: string;
  readonly budget_update_type?: "UPDATE" | "RESET" | "CUSTOM_BUDGET" | "INCREMENTAL_UPDATE" | "ONE_CLICK_SET";
  readonly request_id?: string;
  readonly advertiser_budgets?: ReadonlyArray<AdvertiserUpdateParamsAdvertiserBudgets>;
}

export interface AdvertiserUpdateParamsAdvertiserBudgets {
  readonly advertiser_id?: string;
  readonly budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  readonly budget?: number;
}

export interface AdvertiserUpdateParamsQualificationImages {
  readonly image_id?: string;
}

export interface AdvertiserUpdateResponse {
  readonly list?: ReadonlyArray<AdvertiserUpdateResponseList>;
}

export interface AdvertiserUpdateResponseList {
  readonly advertiser_id?: string;
  readonly status?: "SUCCESS" | "FAILED";
  readonly error_msg?: string;
  readonly one_click_set_amount?: number;
}

export interface AppBatchParams {
  readonly tiktok_app_id: string;
  readonly batch: ReadonlyArray<AppBatchParamsBatch>;
}

export interface AppBatchParamsBatch {
  readonly type: string;
  readonly event?: string;
  readonly timestamp?: string;
  readonly context: string;
  readonly properties?: string;
}

export interface AppBatchResponse {
  readonly partial_failure?: boolean;
  readonly failed_events?: ReadonlyArray<AppBatchResponseFailedEvents>;
}

export interface AppBatchResponseFailedEvents {
  readonly order_in_batch?: number;
  readonly error?: string;
}

export interface AppCreateParams {
  readonly advertiser_id: string;
  readonly download_url: string;
  readonly partner?: string;
  readonly tracking_url?: AppCreateParamsTrackingUrl;
}

export interface AppCreateParamsTrackingUrl {
  readonly click_url?: string;
  readonly impression_url?: string;
}

export interface AppCreateResponse {
  readonly app_id?: string;
}

export interface AppInfoParams {
  readonly advertiser_id: string;
  readonly app_id: string;
}

export interface AppInfoResponse {
  readonly app?: AppInfoResponseApp;
}

export interface AppInfoResponseApp {
  readonly advertiser_id?: string;
  readonly app_platform_id?: string;
  readonly app_name?: string;
  readonly self_attribution_enabled?: boolean;
  readonly skan_allowed?: "ALLOWED" | "NOT_ALLOWED";
  readonly advanced_dedicated_campaign_allowed?: boolean;
  readonly is_attribution_flex_enable?: boolean;
  readonly download_url?: string;
  readonly icon?: AppInfoResponseAppIcon;
  readonly app_id?: string;
  readonly package_name?: string;
  readonly tiktok_apps?: ReadonlyArray<AppInfoResponseAppTiktokApps>;
  readonly partner?: AppInfoResponseAppPartner;
  readonly platform?: "ANDROID" | "IOS";
  readonly enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
  readonly tracking_url?: AppInfoResponseAppTrackingUrl;
  readonly create_time?: string;
}

export interface AppInfoResponseAppIcon {
  readonly height?: number;
  readonly web_uri?: string;
  readonly width?: number;
}

export interface AppInfoResponseAppPartner {
  readonly partner_id?: string;
  readonly partner_logo?: string;
  readonly partner_name?: string;
}

export interface AppInfoResponseAppTiktokApps {
  readonly tiktok_app_id?: string;
}

export interface AppInfoResponseAppTrackingUrl {
  readonly click_url?: string;
  readonly impression_url?: string;
  readonly retargeting_click_url?: string;
  readonly retargeting_impression_url?: string;
}

export interface AppListParams {
  readonly advertiser_id: string;
  readonly app_platform_ids?: ReadonlyArray<string>;
}

export interface AppListResponse {
  readonly apps?: ReadonlyArray<AppListResponseApps>;
}

export interface AppListResponseApps {
  readonly advertiser_id?: string;
  readonly app_platform_id?: string;
  readonly app_name?: string;
  readonly self_attribution_enabled?: boolean;
  readonly skan_allowed?: "ALLOWED" | "NOT_ALLOWED";
  readonly advanced_dedicated_campaign_allowed?: boolean;
  readonly is_attribution_flex_enable?: boolean;
  readonly download_url?: string;
  readonly icon?: AppListResponseAppsIcon;
  readonly app_id?: string;
  readonly package_name?: string;
  readonly tiktok_apps?: ReadonlyArray<AppListResponseAppsTiktokApps>;
  readonly partner?: AppListResponseAppsPartner;
  readonly platform?: "ANDROID" | "IOS";
  readonly enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
  readonly tracking_url?: AppListResponseAppsTrackingUrl;
  readonly create_time?: string;
}

export interface AppListResponseAppsIcon {
  readonly height?: number;
  readonly web_uri?: string;
  readonly width?: number;
}

export interface AppListResponseAppsPartner {
  readonly partner_id?: string;
  readonly partner_logo?: string;
  readonly partner_name?: string;
}

export interface AppListResponseAppsTiktokApps {
  readonly tiktok_app_id?: string;
}

export interface AppListResponseAppsTrackingUrl {
  readonly click_url?: string;
  readonly impression_url?: string;
  readonly retargeting_click_url?: string;
  readonly retargeting_impression_url?: string;
}

export interface AppOptimizationEventParams {
  readonly advertiser_id: string;
  readonly app_id: string;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  readonly placement?: ReadonlyArray<string>;
  readonly optimization_goal: string;
  readonly objective: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING";
  readonly available_only?: boolean;
  readonly is_skan?: boolean;
}

export interface AppOptimizationEventResponse {
  readonly optimization_events?: ReadonlyArray<AppOptimizationEventResponseOptimizationEvents>;
}

export interface AppOptimizationEventResponseOptimizationEvents {
  readonly optimization_event?: string;
  readonly statistic_type?: string;
  readonly availability_status?: string;
  readonly conversions?: number;
  readonly unlock_threshold?: number;
  readonly is_beta?: boolean;
  readonly bid_type_availability?: AppOptimizationEventResponseOptimizationEventsBidTypeAvailability;
  readonly deep_optimization_events?: AppOptimizationEventResponseOptimizationEventsDeepOptimizationEvents;
}

export interface AppOptimizationEventResponseOptimizationEventsBidTypeAvailability {
  readonly no_bid_enabled?: boolean;
  readonly auto_bid_enabled?: boolean;
  readonly multi_bid_enabled?: boolean;
}

export interface AppOptimizationEventResponseOptimizationEventsDeepOptimizationEvents {
  readonly optimization_event?: string;
  readonly statistic_type?: string;
  readonly availability_status?: "INACTIVE" | "INSUFFICIENT_POSTBACK" | "READY";
  readonly conversions?: number;
  readonly unlock_threshold?: number;
}

export interface AppOptimizationEventRetargetingParams {
  readonly advertiser_id: string;
  readonly app_id: string;
}

export interface AppOptimizationEventRetargetingResponse {
  readonly optimization_events?: ReadonlyArray<string>;
}

export interface AppTrackParams {
  readonly tiktok_app_id: string;
  readonly event?: string;
  readonly timestamp?: string;
  readonly context: string;
  readonly properties?: string;
}

export interface AppTrackResponse {

}

export interface AppUpdateParams {
  readonly advertiser_id: string;
  readonly download_url?: string;
  readonly platform?: "ANDROID" | "IOS";
  readonly app_id: string;
  readonly partner?: string;
  readonly tracking_url?: AppUpdateParamsTrackingUrl;
  readonly enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
}

export interface AppUpdateParamsTrackingUrl {
  readonly click_url?: string;
  readonly impression_url?: string;
}

export interface AppUpdateResponse {

}

export interface AssetBindQuotaParams {
  readonly advertiser_id: string;
  readonly asset_id: string;
  readonly asset_type: string;
}

export interface AssetBindQuotaResponse {
  readonly total_quota?: number;
  readonly used_quota?: number;
  readonly available_quota?: number;
}

export interface AudienceInsightInfoParams {
  readonly advertiser_id: string;
  readonly custom_audience_id?: string;
  readonly locations?: ReadonlyArray<AudienceInsightInfoParamsLocations>;
  readonly dimensions: ReadonlyArray<string>;
  readonly selected_audience?: AudienceInsightInfoParamsSelectedAudience;
}

export interface AudienceInsightInfoParamsLocations {
  readonly country_code: string;
  readonly location_ids?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoParamsSelectedAudience {
  readonly top_regions_country_code?: string;
  readonly languages?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: ReadonlyArray<"GENDER_FEMALE" | "GENDER_MALE">;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly min_ios_version?: string;
  readonly min_android_version?: string;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly video_action_category_ids?: ReadonlyArray<string>;
  readonly creator_action_category_ids?: ReadonlyArray<string>;
  readonly hashtag_action_category_ids?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponse {
  readonly age?: AudienceInsightInfoResponseAge;
  readonly gender?: AudienceInsightInfoResponseGender;
  readonly country?: AudienceInsightInfoResponseCountry;
  readonly top_regions?: AudienceInsightInfoResponseTopRegions;
  readonly operating_system?: AudienceInsightInfoResponseOperatingSystem;
  readonly operating_system_version?: AudienceInsightInfoResponseOperatingSystemVersion;
  readonly device_price?: AudienceInsightInfoResponseDevicePrice;
  readonly top_interests?: AudienceInsightInfoResponseTopInterests;
  readonly bottom_interests?: AudienceInsightInfoResponseBottomInterests;
  readonly ad_interest_categories?: AudienceInsightInfoResponseAdInterestCategories;
  readonly top_hashtags?: AudienceInsightInfoResponseTopHashtags;
  readonly engagement?: AudienceInsightInfoResponseEngagement;
}

export interface AudienceInsightInfoResponseAdInterestCategories {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseAge {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseBottomInterests {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseCountry {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseDevicePrice {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseEngagement {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseGender {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseOperatingSystem {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseOperatingSystemVersion {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseTopHashtags {
  readonly hashtag_id?: string;
  readonly hashtag_name?: string;
  readonly count?: number;
}

export interface AudienceInsightInfoResponseTopInterests {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightInfoResponseTopRegions {
  readonly all?: ReadonlyArray<string>;
  readonly selected?: ReadonlyArray<string>;
}

export interface AudienceInsightOverlapParams {
  readonly advertiser_id: string;
  readonly benchmark_custom_audience_id: string;
  readonly comparison_custom_audience_ids?: ReadonlyArray<string>;
}

export interface AudienceInsightOverlapResponse {
  readonly benchmark_audience?: AudienceInsightOverlapResponseBenchmarkAudience;
  readonly comparison_audiences?: ReadonlyArray<AudienceInsightOverlapResponseComparisonAudiences>;
}

export interface AudienceInsightOverlapResponseBenchmarkAudience {
  readonly audience_id?: string;
  readonly audience_name?: string;
  readonly audience_size?: number;
  readonly targetable_users_count_range?: string;
}

export interface AudienceInsightOverlapResponseComparisonAudiences {
  readonly audience_id?: string;
  readonly audience_name?: string;
  readonly audience_size?: number;
  readonly targetable_users_count_range?: string;
  readonly benchmark_overlap_rate?: string;
  readonly benchmark_overlap_rate_range?: string;
  readonly benchmark_overlap_count_range?: string;
}

export interface BcAccountBudgetChangelogGetNParams {
  readonly bc_id: string;
  readonly advertiser_id: string;
  readonly filtering?: BcAccountBudgetChangelogGetNParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAccountBudgetChangelogGetNParamsFiltering {
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface BcAccountBudgetChangelogGetNResponse {
  readonly changelog_list?: ReadonlyArray<BcAccountBudgetChangelogGetNResponseChangelogList>;
  readonly page_info?: BcAccountBudgetChangelogGetNResponsePageInfo;
}

export interface BcAccountBudgetChangelogGetNResponseChangelogList {
  readonly operation_time?: string;
  readonly activity_type?: "RESET" | "BUDGET_MODE_UPDATE" | "INCREASE_BUDGET" | "DECREASE_BUDGET" | "REMOVE_BUDGET";
  readonly previous_budget?: number;
  readonly previous_budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  readonly current_budget?: number;
  readonly current_budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  readonly currency?: string;
  readonly operator_id?: string;
  readonly operator_name?: string;
}

export interface BcAccountBudgetChangelogGetNResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAccountCostGetParams {
  readonly bc_id: string;
  readonly filtering?: BcAccountCostGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAccountCostGetParamsFiltering {
  readonly keyword?: string;
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface BcAccountCostGetResponse {
  readonly cost_list?: ReadonlyArray<BcAccountCostGetResponseCostList>;
  readonly transaction_summary?: BcAccountCostGetResponseTransactionSummary;
  readonly page_info?: BcAccountCostGetResponsePageInfo;
}

export interface BcAccountCostGetResponseCostList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
  readonly amount?: number;
  readonly cash_amount?: number;
  readonly grant_amount?: number;
  readonly tax_amount?: number;
  readonly currency?: string;
}

export interface BcAccountCostGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAccountCostGetResponseTransactionSummary {
  readonly amount?: number;
  readonly cash_amount?: number;
  readonly grant_amount?: number;
  readonly tax_amount?: number;
  readonly currency?: string;
}

export interface BcAccountTransactionGetParams {
  readonly bc_id: string;
  readonly transaction_level?: "BC" | "ADVERTISER" | "PAYMENT_PORTFOLIO";
  readonly filtering?: BcAccountTransactionGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAccountTransactionGetParamsFiltering {
  readonly transaction_types?: ReadonlyArray<string>;
  readonly owner_of_account?: ReadonlyArray<"OWNED_BY_CURRENT_BUSINESS_CENTER" | "SHARED_BY_OTHER_BUSINESS_CENTER">;
  readonly account_ids?: ReadonlyArray<string>;
  readonly account_name?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly billing_types?: ReadonlyArray<"CASH" | "CREDIT">;
}

export interface BcAccountTransactionGetResponse {
  readonly transaction_list?: ReadonlyArray<BcAccountTransactionGetResponseTransactionList>;
  readonly page_info?: BcAccountTransactionGetResponsePageInfo;
}

export interface BcAccountTransactionGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAccountTransactionGetResponseTransactionList {
  readonly transaction_id?: string;
  readonly payment_portfolio_id?: string;
  readonly payment_portfolio_name?: string;
  readonly account_id?: string;
  readonly account_name?: string;
  readonly bc_id?: string;
  readonly bc_name?: string;
  readonly amount?: number;
  readonly subtotal?: number;
  readonly tax_amount?: number;
  readonly currency?: string;
  readonly amount_type?: "POSITIVE" | "NEGATIVE" | "OTHER";
  readonly transaction_type?: string;
  readonly billing_type?: "CASH" | "CREDIT";
  readonly timezone?: string;
  readonly create_time?: string;
  readonly invoice_id?: string;
  readonly serial_number?: string;
}

export interface BcAdvertiserAttributeParams {
  readonly bc_id: string;
}

export interface BcAdvertiserAttributeResponse {
  readonly currencies?: ReadonlyArray<string>;
  readonly region_codes?: ReadonlyArray<string>;
}

export interface BcAdvertiserCreateParams {
  readonly bc_id: string;
  readonly tied_to_billing_group?: boolean;
  readonly advertiser_info: BcAdvertiserCreateParamsAdvertiserInfo;
  readonly customer_info: BcAdvertiserCreateParamsCustomerInfo;
  readonly qualification_info?: BcAdvertiserCreateParamsQualificationInfo;
  readonly contact_info?: BcAdvertiserCreateParamsContactInfo;
  readonly billing_info?: BcAdvertiserCreateParamsBillingInfo;
  readonly billing_group_info?: BcAdvertiserCreateParamsBillingGroupInfo;
  readonly payment_info?: BcAdvertiserCreateParamsPaymentInfo;
}

export interface BcAdvertiserCreateParamsAdvertiserInfo {
  readonly name: string;
  readonly currency: string;
  readonly timezone: string;
  readonly type?: "RESERVATION" | "AUCTION" | "DIRECT";
}

export interface BcAdvertiserCreateParamsBillingGroupInfo {
  readonly invoice_group_by: "ACCOUNT" | "ADVERTISER";
  readonly billing_group_id?: string;
  readonly invoice_payer?: "AGENCY" | "ADVERTISER" | "FR";
}

export interface BcAdvertiserCreateParamsBillingInfo {
  readonly address?: string;
  readonly tax_field_dict?: string;
}

export interface BcAdvertiserCreateParamsContactInfo {
  readonly name?: string;
  readonly email?: string;
  readonly number?: string;
}

export interface BcAdvertiserCreateParamsCustomerInfo {
  readonly company: string;
  readonly industry: number;
  readonly registered_area: string;
}

export interface BcAdvertiserCreateParamsPaymentInfo {
  readonly payment_portfolio_id?: string;
  readonly budget_info?: BcAdvertiserCreateParamsPaymentInfoBudgetInfo;
}

export interface BcAdvertiserCreateParamsPaymentInfoBudgetInfo {
  readonly budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  readonly budget?: number;
}

export interface BcAdvertiserCreateParamsQualificationInfo {
  readonly promotion_link?: string;
  readonly license_no?: string;
  readonly license_image_id?: string;
  readonly qualification_image_ids?: ReadonlyArray<string>;
  readonly qualification_id?: string;
}

export interface BcAdvertiserCreateResponse {
  readonly advertiser_id?: string;
  readonly payment_portfolio_binding_result?: BcAdvertiserCreateResponsePaymentPortfolioBindingResult;
  readonly budget_setup_result?: BcAdvertiserCreateResponseBudgetSetupResult;
}

export interface BcAdvertiserCreateResponseBudgetSetupResult {
  readonly status?: "SUCCESS" | "FAILED";
  readonly error_msg?: string;
}

export interface BcAdvertiserCreateResponsePaymentPortfolioBindingResult {
  readonly status?: "SUCCESS" | "FAILED";
  readonly error_msg?: string;
}

export interface BcAdvertiserDisableParams {
  readonly bc_id: string;
  readonly advertiser_ids: ReadonlyArray<string>;
}

export interface BcAdvertiserDisableResponse {
  readonly disabled_advertiser_ids?: ReadonlyArray<string>;
  readonly failed_infos?: "DELIVERING" | "UNPAID_BILL" | "SUSPENDED" | "UNFINISHED_TRANSFER" | "AUTOPAY_UNBILLED";
}

export interface BcAdvertiserQualificationGetParams {
  readonly bc_id: string;
  readonly filtering?: BcAdvertiserQualificationGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAdvertiserQualificationGetParamsFiltering {
  readonly verified?: boolean;
}

export interface BcAdvertiserQualificationGetResponse {
  readonly qualifications?: ReadonlyArray<BcAdvertiserQualificationGetResponseQualifications>;
  readonly page_info?: BcAdvertiserQualificationGetResponsePageInfo;
}

export interface BcAdvertiserQualificationGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAdvertiserQualificationGetResponseQualifications {
  readonly qualification_id?: string;
  readonly company_name?: string;
  readonly status?: string;
  readonly owner_advertiser_id?: string;
  readonly linked_advertiser_count?: number;
  readonly region_code?: string;
}

export interface BcAdvertiserUnionpayInfoCheckParams {
  readonly license_no: string;
}

export interface BcAdvertiserUnionpayInfoCheckResponse {
  readonly unionpay_verification_required?: boolean;
}

export interface BcAdvertiserUnionpayInfoSubmitParams {
  readonly bc_id: string;
  readonly advertiser_id: string;
  readonly representative_name: string;
  readonly representative_document_type?: "ID_CARD" | "PASSPORT" | "HK_MACAO_EXIT_ENTRY_PERMIT" | "TAIWAN_MAINLAND_TRAVEL_PERMIT" | "HK_MACAO_MAINLAND_TRAVEL_PERMIT";
  readonly representative_id: string;
  readonly unionpay_account: string;
  readonly representative_phone_number: string;
}

export interface BcAdvertiserUnionpayInfoSubmitResponse {

}

export interface BcAssetAccountAuthorizationParams {
  readonly bc_id: string;
  readonly is_ads_only_mode?: boolean;
}

export interface BcAssetAccountAuthorizationResponse {
  readonly bc_auth_qr_code?: string;
}

export interface BcAssetAdminDeleteParams {
  readonly bc_id: string;
  readonly asset_ids: ReadonlyArray<string>;
  readonly asset_type: "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT";
}

export interface BcAssetAdminDeleteResponse {

}

export interface BcAssetAdminGetParams {
  readonly bc_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly filtering?: BcAssetAdminGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAssetAdminGetParamsFiltering {
  readonly advertiser_show_status?: string;
  readonly relation_type?: "OWNER_BC" | "OWNER_PARTNER" | "OWNER_INDIVIDUAL";
  readonly relation_status?: "BOUND" | "UNBOUND" | "PENDING" | "REJECTED";
}

export interface BcAssetAdminGetResponse {
  readonly list?: ReadonlyArray<BcAssetAdminGetResponseList>;
  readonly page_info?: BcAssetAdminGetResponsePageInfo;
}

export interface BcAssetAdminGetResponseList {
  readonly asset_type?: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id?: string;
  readonly asset_name?: string;
  readonly relation_type?: "OWNER_BC" | "OWNER_PARTNER" | "OWNER_INDIVIDUAL";
  readonly relation_status?: "BOUND" | "UNBOUND" | "PENDING" | "REJECTED";
  readonly advertiser_status?: string;
  readonly advertiser_account_type?: "RESERVATION" | "AUCTION";
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly catalog_role?: "ADMIN" | "AD_PROMOTE";
  readonly ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  readonly store_role?: string;
  readonly pixel_code?: string;
  readonly tt_account_roles?: ReadonlyArray<"POST" | "LIVE" | "DIRECT_MESSAGE">;
  readonly business_account_roles?: ReadonlyArray<"BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST">;
  readonly owner_bc_name?: string;
  readonly is_business_verified?: boolean;
  readonly operating_region_code?: string;
  readonly tt_asset_handle?: string;
  readonly tt_asset_profile_image?: string;
}

export interface BcAssetAdminGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAssetAdvertiserAssignedParams {
  readonly bc_id: string;
  readonly asset_id: string;
  readonly asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAssetAdvertiserAssignedResponse {
  readonly list?: ReadonlyArray<BcAssetAdvertiserAssignedResponseList>;
  readonly page_info?: BcAssetAdvertiserAssignedResponsePageInfo;
}

export interface BcAssetAdvertiserAssignedResponseList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
}

export interface BcAssetAdvertiserAssignedResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAssetAdvertiserAssignParams {
  readonly bc_id: string;
  readonly asset_type?: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id: string;
  readonly advertiser_id: string;
}

export interface BcAssetAdvertiserAssignResponse {

}

export interface BcAssetAdvertiserUnassignParams {
  readonly bc_id: string;
  readonly asset_id: string;
  readonly asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly advertiser_id: string;
}

export interface BcAssetAdvertiserUnassignResponse {

}

export interface BcAssetAssignParams {
  readonly bc_id: string;
  readonly user_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id: string;
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly catalog_role?: "ADMIN" | "AD_PROMOTE";
  readonly form_library_role?: string;
  readonly tt_account_roles?: ReadonlyArray<"POST" | "LIVE" | "DIRECT_MESSAGE">;
  readonly business_account_roles?: ReadonlyArray<"BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST">;
  readonly store_role?: string;
}

export interface BcAssetAssignResponse {

}

export interface BcAssetGetParams {
  readonly bc_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly filtering?: BcAssetGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAssetGetParamsFiltering {
  readonly user_id?: string;
  readonly user_email?: string;
  readonly keyword?: string;
}

export interface BcAssetGetResponse {
  readonly list?: ReadonlyArray<BcAssetGetResponseList>;
  readonly page_info?: BcAssetGetResponsePageInfo;
}

export interface BcAssetGetResponseList {
  readonly asset_type?: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id?: string;
  readonly asset_name?: string;
  readonly advertiser_account_type?: "RESERVATION" | "AUCTION";
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly catalog_role?: "ADMIN" | "AD_PROMOTE";
  readonly ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  readonly store_role?: string;
  readonly tt_account_roles?: ReadonlyArray<"POST" | "LIVE" | "DIRECT_MESSAGE">;
  readonly business_account_roles?: ReadonlyArray<"BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST">;
  readonly owner_bc_name?: string;
  readonly is_business_verified?: boolean;
  readonly operating_region_code?: string;
  readonly tt_asset_handle?: string;
  readonly tt_asset_profile_image?: string;
}

export interface BcAssetGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAssetGroupCreateParams {

}

export interface BcAssetGroupCreateResponse {

}

export interface BcAssetGroupDeleteParams {

}

export interface BcAssetGroupDeleteResponse {

}

export interface BcAssetGroupGetParams {

}

export interface BcAssetGroupGetResponse {

}

export interface BcAssetGroupListParams {

}

export interface BcAssetGroupListResponse {

}

export interface BcAssetGroupUpdateParams {

}

export interface BcAssetGroupUpdateResponse {

}

export interface BcAssetMemberGetParams {
  readonly bc_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG" | "LEAD" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id: string;
  readonly page?: number;
  readonly page_size?: number;
  readonly filtering?: BcAssetMemberGetParamsFiltering;
}

export interface BcAssetMemberGetParamsFiltering {
  readonly keyword?: string;
}

export interface BcAssetMemberGetResponse {
  readonly list?: ReadonlyArray<BcAssetMemberGetResponseList>;
  readonly page_info?: BcAssetMemberGetResponsePageInfo;
}

export interface BcAssetMemberGetResponseList {
  readonly user_id?: string;
  readonly user_name?: string;
  readonly user_email?: string;
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly catalog_role?: "ADMIN" | "AD_PROMOTE";
  readonly business_account_roles?: ReadonlyArray<"BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST">;
}

export interface BcAssetMemberGetResponsePageInfo {
  readonly total_number?: number;
  readonly total_page?: number;
  readonly page_size?: number;
  readonly page?: number;
}

export interface BcAssetPartnerGetParams {
  readonly bc_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG";
  readonly asset_id: string;
  readonly filtering?: BcAssetPartnerGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcAssetPartnerGetParamsFiltering {
  readonly keyword: string;
}

export interface BcAssetPartnerGetResponse {
  readonly list?: ReadonlyArray<BcAssetPartnerGetResponseList>;
  readonly page_info?: BcAssetPartnerGetResponsePageInfo;
}

export interface BcAssetPartnerGetResponseList {
  readonly bc_name?: string;
  readonly bc_id?: string;
}

export interface BcAssetPartnerGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcAssetUnassignParams {
  readonly bc_id: string;
  readonly user_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  readonly asset_id: string;
}

export interface BcAssetUnassignResponse {

}

export interface BcBalanceGetParams {
  readonly bc_id: string;
  readonly payment_portfolio_id?: string;
}

export interface BcBalanceGetResponse {
  readonly bc_id?: string;
  readonly currency?: string;
  readonly account_balance?: number;
  readonly valid_account_balance?: number;
  readonly frozen_balance?: number;
  readonly tax?: number;
  readonly cash_balance?: number;
  readonly valid_cash_balance?: number;
  readonly grant_balance?: number;
  readonly valid_grant_balance?: number;
  readonly payment_portfolio_type?: "SHARED" | "NON_SHARED";
}

export interface BcBillingGroupAdvertiserListParams {
  readonly bc_id: string;
  readonly billing_group_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcBillingGroupAdvertiserListResponse {
  readonly list?: ReadonlyArray<BcBillingGroupAdvertiserListResponseList>;
  readonly page_info?: BcBillingGroupAdvertiserListResponsePageInfo;
}

export interface BcBillingGroupAdvertiserListResponseList {
  readonly advertiser_id?: string;
}

export interface BcBillingGroupAdvertiserListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcBillingGroupCreateParams {
  readonly bc_id: string;
  readonly billing_group_name: string;
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly billing_group_emails?: ReadonlyArray<string>;
  readonly is_primary?: boolean;
  readonly billing_group_type?: "AUCTION" | "RESERVATION";
}

export interface BcBillingGroupCreateResponse {
  readonly billing_group_id?: string;
}

export interface BcBillingGroupGetParams {
  readonly bc_id: string;
  readonly filtering?: BcBillingGroupGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcBillingGroupGetParamsFiltering {
  readonly status?: "VALID" | "INVALID";
  readonly invoice_group_by?: "ACCOUNT" | "ADVERTISER";
  readonly billed_to_type?: "ACCOUNT" | "ADVERTISER";
  readonly billing_group_id?: string;
  readonly billing_group_name?: string;
  readonly billing_group_type?: "AUCTION" | "RESERVATION";
}

export interface BcBillingGroupGetResponse {
  readonly list?: ReadonlyArray<BcBillingGroupGetResponseList>;
  readonly page_info?: BcBillingGroupGetResponsePageInfo;
}

export interface BcBillingGroupGetResponseList {
  readonly status?: "VALID" | "INVALID";
  readonly billing_group_id?: string;
  readonly billing_group_name?: string;
  readonly invoice_object_name?: string;
  readonly is_primary?: boolean;
  readonly advertisers?: ReadonlyArray<BcBillingGroupGetResponseListAdvertisers>;
  readonly billing_group_emails?: ReadonlyArray<string>;
  readonly invoice_group_by?: "ACCOUNT" | "ADVERTISER";
  readonly billed_to_type?: "ACCOUNT" | "ADVERTISER";
  readonly billing_group_type?: "AUCTION" | "RESERVATION";
}

export interface BcBillingGroupGetResponseListAdvertisers {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
}

export interface BcBillingGroupGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcBillingGroupUpdateParams {
  readonly bc_id: string;
  readonly billing_group_id: string;
  readonly new_billing_group_name?: string;
  readonly new_billing_group_emails?: ReadonlyArray<string>;
  readonly add_advertiser_ids?: ReadonlyArray<string>;
  readonly delete_advertiser_ids?: ReadonlyArray<string>;
  readonly is_primary?: boolean;
}

export interface BcBillingGroupUpdateResponse {

}

export interface BcGetParams {
  readonly bc_id?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcGetResponse {
  readonly list?: ReadonlyArray<BcGetResponseList>;
  readonly page_info?: BcGetResponsePageInfo;
}

export interface BcGetResponseList {
  readonly bc_info?: BcGetResponseListBcInfo;
  readonly user_role?: "ADMIN" | "STANDARD";
  readonly ext_user_role?: BcGetResponseListExtUserRole;
}

export interface BcGetResponseListBcInfo {
  readonly bc_id?: string;
  readonly verification_status?: "NOT_SUBMITTED" | "REVIEWING" | "VERIFIED" | "FAILED" | "EXPIRED";
  readonly name?: string;
  readonly company?: string;
  readonly currency?: string;
  readonly registered_area?: string;
  readonly status?: string;
  readonly timezone?: string;
  readonly type?: "NORMAL" | "DIRECT" | "AGENCY" | "SELF_SERVICE" | "SELF_SERVICE_AGENCY";
}

export interface BcGetResponseListExtUserRole {
  readonly finance_role?: "MANAGER" | "ANALYST";
}

export interface BcGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcImageUploadParams {
  readonly bc_id: string;
  readonly image_file: unknown;
}

export interface BcImageUploadResponse {
  readonly image_id?: string;
  readonly image_url?: string;
}

export interface BcInvoiceDownloadParams {
  readonly bc_id: string;
  readonly invoice_id: string;
}

export interface BcInvoiceDownloadResponse {
  readonly code?: number;
  readonly message?: string;
  readonly request_id?: string;
}

export interface BcInvoiceGetParams {
  readonly bc_id: string;
  readonly invoice_id?: string;
  readonly invoice_title?: string;
  readonly invoice_types: ReadonlyArray<"RECON" | "CREDIT" | "AUTO_PAY">;
  readonly pay_statuses?: ReadonlyArray<"UNPAID" | "PAID" | "PARTIAL_PAID" | "NO_NEED">;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcInvoiceGetResponse {
  readonly list?: ReadonlyArray<BcInvoiceGetResponseList>;
  readonly page_info?: BcInvoiceGetResponsePageInfo;
}

export interface BcInvoiceGetResponseList {
  readonly invoice_id?: string;
  readonly serial_number?: string;
  readonly subject_id?: number;
  readonly send_date?: string;
  readonly currency_code?: string;
  readonly status?: "CREATED" | "SUBMITTED" | "APPROVED" | "DELETED";
  readonly due_date?: string;
  readonly invoice_type?: "RECON" | "CREDIT" | "AUTO_PAY";
  readonly entity_serials?: ReadonlyArray<string>;
  readonly negative_invoice_ids?: ReadonlyArray<BcInvoiceGetResponseListNegativeInvoiceIds>;
  readonly positive_invoice_ids?: ReadonlyArray<BcInvoiceGetResponseListPositiveInvoiceIds>;
  readonly billing_group_id?: string;
  readonly account_name?: string;
  readonly invoice_title?: string;
  readonly country_code?: string;
  readonly address?: string;
  readonly emails?: ReadonlyArray<string>;
  readonly tax_id1?: string;
  readonly tax_id2?: string;
  readonly amount?: number;
  readonly amount_excluding_tax?: number;
  readonly total_tax_amount?: number;
  readonly tax_type1?: string;
  readonly tax_rate1?: number;
  readonly tax_amount1?: number;
  readonly tax_type2?: string;
  readonly tax_rate2?: number;
  readonly tax_amount2?: number;
  readonly pay_status?: string;
  readonly overdue_status?: "INITIALIZED" | "YES" | "NO";
  readonly unpaid_amount?: number;
}

export interface BcInvoiceGetResponseListNegativeInvoiceIds {
  readonly invoice_id?: string;
  readonly serial_number?: string;
}

export interface BcInvoiceGetResponseListPositiveInvoiceIds {
  readonly invoice_id?: string;
  readonly serial_number?: string;
}

export interface BcInvoiceGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcInvoiceTaskCreateParams {
  readonly bc_id: string;
  readonly download_type: "INVOICE_LIST" | "INVOICE_BATCH" | "BILLING_REPORT";
  readonly invoice_id?: string;
  readonly filtering?: BcInvoiceTaskCreateParamsFiltering;
}

export interface BcInvoiceTaskCreateParamsFiltering {
  readonly invoice_title?: string;
  readonly serial_number?: string;
  readonly billing_group_id?: string;
  readonly pay_statuses?: ReadonlyArray<"UNPAID" | "PAID" | "PARTIAL_PAID" | "NO_NEED">;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly campaign_id?: string;
}

export interface BcInvoiceTaskCreateResponse {
  readonly task_id?: string;
}

export interface BcInvoiceTaskGetParams {
  readonly bc_id: string;
  readonly task_id: string;
}

export interface BcInvoiceTaskGetResponse {
  readonly download_url?: string;
  readonly status?: "FAILED" | "CREATED" | "RUNNING" | "SUCCEED" | "POLLING";
  readonly error_msg?: string;
}

export interface BcInvoiceTaskListParams {
  readonly bc_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcInvoiceTaskListResponse {
  readonly list?: ReadonlyArray<BcInvoiceTaskListResponseList>;
  readonly page_info?: BcInvoiceTaskListResponsePageInfo;
}

export interface BcInvoiceTaskListResponseList {
  readonly bc_id?: string;
  readonly task_id?: string;
  readonly status?: "FAILED" | "CREATED" | "RUNNING" | "SUCCEED" | "POLLING";
  readonly create_time?: string;
  readonly update_time?: string;
  readonly download_url?: string;
  readonly download_type?: "INVOICE_LIST" | "INVOICE_BATCH";
}

export interface BcInvoiceTaskListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcInvoiceUnpaidGetParams {
  readonly bc_id: string;
  readonly invoice_type: string;
}

export interface BcInvoiceUnpaidGetResponse {
  readonly result?: BcInvoiceUnpaidGetResponseResult;
}

export interface BcInvoiceUnpaidGetResponseResult {
  readonly currency_code?: string;
  readonly amount?: number;
}

export interface BcMemberDeleteParams {
  readonly bc_id: string;
  readonly user_id?: string;
  readonly user_email?: string;
}

export interface BcMemberDeleteResponse {

}

export interface BcMemberGetParams {
  readonly bc_id: string;
  readonly page?: number;
  readonly page_size?: number;
  readonly filtering?: BcMemberGetParamsFiltering;
}

export interface BcMemberGetParamsFiltering {
  readonly keyword?: string;
  readonly user_role?: "ADMIN" | "STANDARD";
  readonly relation_status?: "BOUND" | "PENDING" | "REJECTED";
}

export interface BcMemberGetResponse {
  readonly list?: ReadonlyArray<BcMemberGetResponseList>;
  readonly page_info?: BcMemberGetResponsePageInfo;
}

export interface BcMemberGetResponseList {
  readonly user_id?: string;
  readonly user_name?: string;
  readonly user_role?: string;
  readonly relation_status?: string;
  readonly user_email?: string;
  readonly ext_user_role?: BcMemberGetResponseListExtUserRole;
}

export interface BcMemberGetResponseListExtUserRole {
  readonly finance_role?: "MANAGER" | "ANALYST";
}

export interface BcMemberGetResponsePageInfo {
  readonly total_number?: number;
  readonly total_page?: number;
  readonly page_size?: number;
  readonly page?: number;
}

export interface BcMemberInviteParams {
  readonly bc_id: string;
  readonly emails: ReadonlyArray<string>;
  readonly user_role: "ADMIN" | "STANDARD";
  readonly asset_ids?: ReadonlyArray<string>;
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly ext_user_role?: BcMemberInviteParamsExtUserRole;
}

export interface BcMemberInviteParamsExtUserRole {
  readonly finance_role?: "MANAGER" | "ANALYST";
}

export interface BcMemberInviteResponse {

}

export interface BcMemberUpdateParams {
  readonly bc_id: string;
  readonly user_id: string;
  readonly user_role?: "ADMIN" | "STANDARD";
  readonly user_name?: string;
  readonly ext_user_role?: BcMemberUpdateParamsExtUserRole;
}

export interface BcMemberUpdateParamsExtUserRole {
  readonly finance_role?: "ANALYST" | "MANAGER";
}

export interface BcMemberUpdateResponse {

}

export interface BcOaCreateParams {
  readonly bc_id: string;
  readonly display_name: string;
  readonly handle?: string;
  readonly profile_image?: unknown;
  readonly operating_region_code: string;
  readonly qualification_info?: BcOaCreateParamsQualificationInfo;
}

export interface BcOaCreateParamsQualificationInfo {
  readonly qualification_id?: string;
}

export interface BcOaCreateResponse {
  readonly asset_id?: string;
  readonly asset_name?: string;
}

export interface BcPartnerAddParams {
  readonly bc_id: string;
  readonly partner_id: string;
  readonly asset_type?: string;
  readonly asset_ids?: ReadonlyArray<string>;
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
}

export interface BcPartnerAddResponse {

}

export interface BcPartnerAssetDeleteParams {
  readonly bc_id: string;
  readonly partner_id: string;
  readonly asset_type: "ADVERTISER" | "TT_ACCOUNT" | "BC_AUTH_TT" | "TIKTOK_SHOP" | "CATALOG" | "LEAD" | "PIXEL" | "STOREFRANT";
  readonly asset_ids: ReadonlyArray<string>;
}

export interface BcPartnerAssetDeleteResponse {

}

export interface BcPartnerAssetGetParams {
  readonly bc_id: string;
  readonly partner_id: string;
  readonly asset_type: "ADVERTISER" | "CATALOG";
  readonly share_type: "SHARED" | "SHARING";
  readonly filtering?: BcPartnerAssetGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcPartnerAssetGetParamsFiltering {
  readonly keyword?: string;
}

export interface BcPartnerAssetGetResponse {
  readonly list?: ReadonlyArray<BcPartnerAssetGetResponseList>;
  readonly page_info?: BcPartnerAssetGetResponsePageInfo;
}

export interface BcPartnerAssetGetResponseList {
  readonly asset_id?: string;
  readonly asset_type?: "ADVERTISER" | "CATALOG";
  readonly asset_name?: string;
  readonly advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  readonly advertiser_account_type?: "RESERVATION" | "AUCTION";
  readonly catalog_role?: "ADMIN" | "AD_PROMOTE";
}

export interface BcPartnerAssetGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcPartnerDeleteParams {
  readonly bc_id: string;
  readonly partner_id: string;
}

export interface BcPartnerDeleteResponse {

}

export interface BcPartnerGetParams {
  readonly bc_id: string;
  readonly page?: number;
  readonly page_size?: number;
  readonly filtering?: BcPartnerGetParamsFiltering;
}

export interface BcPartnerGetParamsFiltering {
  readonly name?: string;
}

export interface BcPartnerGetResponse {
  readonly list?: ReadonlyArray<BcPartnerGetResponseList>;
  readonly page_info?: BcPartnerGetResponsePageInfo;
}

export interface BcPartnerGetResponseList {
  readonly bc_name?: string;
  readonly bc_id?: string;
}

export interface BcPartnerGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcPixelLinkGetParams {
  readonly bc_id: string;
  readonly pixel_code: string;
}

export interface BcPixelLinkGetResponse {
  readonly list?: ReadonlyArray<BcPixelLinkGetResponseList>;
  readonly page_info?: BcPixelLinkGetResponsePageInfo;
}

export interface BcPixelLinkGetResponseList {
  readonly advertiser_id?: string;
}

export interface BcPixelLinkGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BcPixelLinkUpdateParams {
  readonly bc_id: string;
  readonly pixel_code: string;
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly relation_status: "LINK" | "UNLINK";
}

export interface BcPixelLinkUpdateResponse {

}

export interface BcPixelTransferParams {
  readonly bc_id: string;
  readonly pixel_code: string;
}

export interface BcPixelTransferResponse {
  readonly asset_id?: string;
}

export interface BcTransactionGetParams {
  readonly bc_id: string;
  readonly filtering?: BcTransactionGetParamsFiltering;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface BcTransactionGetParamsFiltering {
  readonly funds_type?: ReadonlyArray<"FUNDS_TYPE_CASH" | "FUNDS_TYPE_GRANT">;
}

export interface BcTransactionGetResponse {
  readonly page_info?: BcTransactionGetResponsePageInfo;
  readonly list?: ReadonlyArray<BcTransactionGetResponseList>;
  readonly transaction_summary?: BcTransactionGetResponseTransactionSummary;
}

export interface BcTransactionGetResponseList {
  readonly date?: number;
  readonly amount?: number;
  readonly timezone?: string;
  readonly currency?: string;
  readonly funds_type?: string;
  readonly invoice_id?: string;
  readonly invoice_serial_number?: string;
}

export interface BcTransactionGetResponsePageInfo {
  readonly page?: number;
  readonly total_number?: number;
  readonly page_size?: number;
  readonly total_page?: number;
}

export interface BcTransactionGetResponseTransactionSummary {
  readonly amount_charged?: number;
  readonly amount_paid?: number;
  readonly currency?: string;
}

export interface BcTransferParams {
  readonly bc_id: string;
  readonly transfer_level?: "ADVERTISER" | "BC";
  readonly advertiser_id?: string;
  readonly payment_portfolio_id?: string;
  readonly transfer_type: "RECHARGE" | "REFUND";
  readonly amount_info?: BcTransferParamsAmountInfo;
  readonly cash_amount?: number;
  readonly grant_amount?: number;
  readonly request_id?: string;
}

export interface BcTransferParamsAmountInfo {
  readonly cash_amount?: number;
  readonly grant_amount?: number;
  readonly credit_amount?: number;
}

export interface BcTransferResponse {
  readonly bc_id?: number;
  readonly advertiser_id?: number;
  readonly transaction_infos?: ReadonlyArray<BcTransferResponseTransactionInfos>;
}

export interface BcTransferResponseTransactionInfos {
  readonly transaction_id?: string;
  readonly transaction_type?: "CASH" | "GRANT" | "CREDIT";
  readonly payee_account?: BcTransferResponseTransactionInfosPayeeAccount;
  readonly remitter_account?: BcTransferResponseTransactionInfosRemitterAccount;
}

export interface BcTransferResponseTransactionInfosPayeeAccount {
  readonly account_type?: "BC" | "ADVERTISER" | "PORTFOLIO";
  readonly account_id?: string;
}

export interface BcTransferResponseTransactionInfosRemitterAccount {
  readonly account_type?: "BC" | "ADVERTISER" | "PORTFOLIO";
  readonly account_id?: string;
}

export interface BlockedwordCheckParams {
  readonly advertiser_id: string;
  readonly blocked_words: ReadonlyArray<string>;
}

export interface BlockedwordCheckResponse {
  readonly results?: ReadonlyArray<BlockedwordCheckResponseResults>;
}

export interface BlockedwordCheckResponseResults {
  readonly word?: string;
  readonly blocked?: boolean;
}

export interface BlockedwordCreateParams {
  readonly advertiser_id: string;
  readonly blocked_words: ReadonlyArray<string>;
}

export interface BlockedwordCreateResponse {

}

export interface BlockedwordDeleteParams {
  readonly advertiser_id: string;
  readonly blocked_words: ReadonlyArray<string>;
}

export interface BlockedwordDeleteResponse {

}

export interface BlockedwordListParams {
  readonly advertiser_id: string;
  readonly page_info?: BlockedwordListParamsPageInfo;
}

export interface BlockedwordListParamsPageInfo {
  readonly page_size?: number;
  readonly page?: number;
}

export interface BlockedwordListResponse {
  readonly list?: ReadonlyArray<BlockedwordListResponseList>;
  readonly page_info?: BlockedwordListResponsePageInfo;
}

export interface BlockedwordListResponseList {
  readonly bw_content?: string;
}

export interface BlockedwordListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface BlockedwordTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface BlockedwordTaskCheckResponse {
  readonly task_id?: string;
  readonly status?: string;
}

export interface BlockedwordTaskCreateParams {
  readonly advertiser_id: string;
  readonly blocked_words?: ReadonlyArray<string>;
  readonly lang?: "EN" | "JA" | "ZH";
}

export interface BlockedwordTaskCreateResponse {
  readonly task_id?: string;
}

export interface BlockedwordTaskDownloadParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface BlockedwordTaskDownloadResponse {

}

export interface BlockedwordUpdateParams {
  readonly advertiser_id: string;
  readonly old_word: string;
  readonly new_word: string;
}

export interface BlockedwordUpdateResponse {
  readonly message?: string;
  readonly code?: number;
  readonly request_id?: string;
}

export interface BusinessBenchmarkParams {
  readonly business_id: string;
  readonly business_category: string;
}

export interface BusinessBenchmarkResponse {
  readonly business_category?: string;
  readonly average_likes?: number;
  readonly average_comments?: number;
  readonly average_shares?: number;
  readonly average_video_count?: number;
  readonly average_follower_count?: number;
  readonly average_follower_growth?: number;
  readonly average_engagement_rate?: number;
  readonly average_video_views?: number;
}

export interface BusinessCommentCreateParams {
  readonly business_id: string;
  readonly video_id: string;
  readonly text?: string;
  readonly image_uri?: string;
  readonly image_width?: number;
  readonly image_height?: number;
}

export interface BusinessCommentCreateResponse {
  readonly comment_id?: string;
  readonly video_id?: string;
  readonly user_id?: string;
  readonly unique_identifier?: string;
  readonly create_time?: string;
  readonly text?: string;
  readonly image_url?: string;
}

export interface BusinessCommentDeleteParams {
  readonly business_id: string;
  readonly comment_id: string;
}

export interface BusinessCommentDeleteResponse {

}

export interface BusinessCommentHideParams {
  readonly business_id: string;
  readonly comment_id: string;
  readonly video_id: string;
  readonly action: "HIDE" | "UNHIDE";
}

export interface BusinessCommentHideResponse {

}

export interface BusinessCommentImageUploadParams {
  readonly image_file: unknown;
}

export interface BusinessCommentImageUploadResponse {
  readonly image_uri?: string;
  readonly width?: number;
  readonly height?: number;
}

export interface BusinessCommentLikeParams {
  readonly business_id: string;
  readonly comment_id: string;
  readonly action: "LIKE" | "UNLIKE";
}

export interface BusinessCommentLikeResponse {

}

export interface BusinessCommentListParams {
  readonly business_id: string;
  readonly video_id: string;
  readonly comment_ids?: ReadonlyArray<string>;
  readonly include_replies?: boolean;
  readonly status?: string;
  readonly sort_field?: string;
  readonly sort_order?: string;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessCommentListResponse {
  readonly comments?: ReadonlyArray<BusinessCommentListResponseComments>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessCommentListResponseComments {
  readonly comment_id?: string;
  readonly video_id?: string;
  readonly user_id?: string;
  readonly unique_identifier?: string;
  readonly create_time?: string;
  readonly text?: string;
  readonly likes?: number;
  readonly replies?: number;
  readonly owner?: boolean;
  readonly liked?: boolean;
  readonly pinned?: boolean;
  readonly status?: string;
  readonly username?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly parent_comment_id?: string;
  readonly reply_list?: ReadonlyArray<BusinessCommentListResponseCommentsReplyList>;
  readonly image_url?: string;
}

export interface BusinessCommentListResponseCommentsReplyList {
  readonly video_id?: number;
  readonly comment_id?: number;
  readonly create_time?: string;
  readonly text?: string;
  readonly status?: "HIDDEN" | "PUBLIC";
  readonly liked?: boolean;
  readonly likes?: number;
  readonly owner?: boolean;
  readonly user_id?: string;
  readonly unique_identifier?: string;
  readonly username?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly parent_comment_id?: string;
}

export interface BusinessCommentReplyCreateParams {
  readonly business_id: string;
  readonly video_id: string;
  readonly comment_id: string;
  readonly reply_image_url?: string;
  readonly text?: string;
  readonly image_uri?: string;
  readonly image_width?: number;
  readonly image_height?: number;
}

export interface BusinessCommentReplyCreateResponse {
  readonly comment_id?: string;
  readonly parent_comment_id?: string;
  readonly video_id?: string;
  readonly user_id?: string;
  readonly unique_identifier?: string;
  readonly create_time?: string;
  readonly text?: string;
  readonly image_url?: string;
}

export interface BusinessCommentReplyListParams {
  readonly business_id: string;
  readonly video_id: string;
  readonly comment_id: string;
  readonly status?: "PUBLIC" | "ALL";
  readonly sort_field?: string;
  readonly sort_order?: string;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessCommentReplyListResponse {
  readonly comments?: ReadonlyArray<BusinessCommentReplyListResponseComments>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessCommentReplyListResponseComments {
  readonly comment_id?: string;
  readonly parent_comment_id?: string;
  readonly video_id?: string;
  readonly user_id?: string;
  readonly unique_identifier?: string;
  readonly create_time?: string;
  readonly text?: string;
  readonly likes?: number;
  readonly replies?: number;
  readonly owner?: boolean;
  readonly liked?: boolean;
  readonly pinned?: boolean;
  readonly status?: string;
  readonly username?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly image_url?: string;
}

export interface BusinessGetParams {
  readonly business_id: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly fields?: ReadonlyArray<string>;
}

export interface BusinessGetResponse {
  readonly is_business_account?: boolean;
  readonly profile_image?: string;
  readonly username?: string;
  readonly profile_deep_link?: string;
  readonly display_name?: string;
  readonly bio_description?: string;
  readonly is_verified?: boolean;
  readonly following_count?: number;
  readonly followers_count?: number;
  readonly total_likes?: number;
  readonly videos_count?: number;
  readonly metrics?: ReadonlyArray<BusinessGetResponseMetrics>;
  readonly audience_ages?: ReadonlyArray<BusinessGetResponseAudienceAges>;
  readonly audience_genders?: ReadonlyArray<BusinessGetResponseAudienceGenders>;
  readonly audience_countries?: ReadonlyArray<BusinessGetResponseAudienceCountries>;
  readonly audience_cities?: ReadonlyArray<BusinessGetResponseAudienceCities>;
}

export interface BusinessGetResponseAudienceAges {
  readonly age?: string;
  readonly percentage?: number;
}

export interface BusinessGetResponseAudienceCities {
  readonly city_name?: string;
  readonly percentage?: number;
}

export interface BusinessGetResponseAudienceCountries {
  readonly country?: string;
  readonly percentage?: number;
}

export interface BusinessGetResponseAudienceGenders {
  readonly gender?: string;
  readonly percentage?: number;
}

export interface BusinessGetResponseMetrics {
  readonly date?: string;
  readonly video_views?: number;
  readonly unique_video_views?: number;
  readonly profile_views?: number;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly phone_number_clicks?: number;
  readonly lead_submissions?: number;
  readonly app_download_clicks?: number;
  readonly bio_link_clicks?: number;
  readonly email_clicks?: number;
  readonly address_clicks?: number;
  readonly daily_total_followers?: number;
  readonly daily_new_followers?: number;
  readonly daily_lost_followers?: number;
  readonly followers_count?: number;
  readonly audience_activity?: ReadonlyArray<BusinessGetResponseMetricsAudienceActivity>;
  readonly engaged_audience?: number;
}

export interface BusinessGetResponseMetricsAudienceActivity {
  readonly hour?: string;
  readonly count?: number;
}

export interface BusinessHashtagSuggestionParams {
  readonly business_id: string;
  readonly keyword: string;
  readonly language?: string;
}

export interface BusinessHashtagSuggestionResponse {
  readonly suggestions?: ReadonlyArray<BusinessHashtagSuggestionResponseSuggestions>;
}

export interface BusinessHashtagSuggestionResponseSuggestions {
  readonly name?: string;
  readonly view_count?: number;
}

export interface BusinessMentionCommentGetParams {
  readonly business_id: string;
  readonly comment_id: string;
  readonly item_id: string;
  readonly fields?: ReadonlyArray<string>;
}

export interface BusinessMentionCommentGetResponse {
  readonly comment?: BusinessMentionCommentGetResponseComment;
}

export interface BusinessMentionCommentGetResponseComment {
  readonly item_id?: string;
  readonly video_link?: string;
  readonly video_likes?: number;
  readonly thumbnail_url?: string;
  readonly commenter_handle_name?: string;
  readonly comment_id?: string;
  readonly comment_type?: "COMMENT" | "REPLY";
  readonly comment_text?: string;
  readonly comment_create_time?: string;
  readonly comment_likes?: number;
}

export interface BusinessMentionCommentListParams {
  readonly business_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly sort_field?: "VIDEO_LIKES" | "COMMENT_CREATE_TIME" | "COMMENT_LIKES";
  readonly sort_type?: "ASC" | "DESC";
  readonly number_of_days?: number;
  readonly regions?: ReadonlyArray<string>;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessMentionCommentListResponse {
  readonly comments?: ReadonlyArray<BusinessMentionCommentListResponseComments>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessMentionCommentListResponseComments {
  readonly item_id?: string;
  readonly video_link?: string;
  readonly caption?: string;
  readonly video_likes?: number;
  readonly thumbnail_url?: string;
  readonly commenter_display_name?: string;
  readonly comment_id?: string;
  readonly comment_type?: "COMMENT" | "REPLY";
  readonly comment_text?: string;
  readonly comment_create_time?: string;
  readonly comment_likes?: number;
}

export interface BusinessMentionHashtagAddParams {
  readonly business_id: string;
  readonly username: string;
  readonly hashtags: ReadonlyArray<string>;
}

export interface BusinessMentionHashtagAddResponse {
  readonly hashtag_list?: ReadonlyArray<BusinessMentionHashtagAddResponseHashtagList>;
}

export interface BusinessMentionHashtagAddResponseHashtagList {
  readonly hashtag?: string;
  readonly create_date?: string;
}

export interface BusinessMentionHashtagManageListParams {
  readonly business_id: string;
  readonly username: string;
}

export interface BusinessMentionHashtagManageListResponse {
  readonly hashtag_list?: ReadonlyArray<BusinessMentionHashtagManageListResponseHashtagList>;
}

export interface BusinessMentionHashtagManageListResponseHashtagList {
  readonly hashtag?: string;
  readonly create_date?: string;
}

export interface BusinessMentionHashtagRemoveParams {
  readonly business_id: string;
  readonly username: string;
  readonly hashtag: string;
}

export interface BusinessMentionHashtagRemoveResponse {

}

export interface BusinessMentionHashtagVerifyListParams {
  readonly business_id: string;
  readonly username: string;
}

export interface BusinessMentionHashtagVerifyListResponse {
  readonly hashtag_list?: ReadonlyArray<BusinessMentionHashtagVerifyListResponseHashtagList>;
}

export interface BusinessMentionHashtagVerifyListResponseHashtagList {
  readonly hashtag?: string;
  readonly post_count?: number;
  readonly like_count?: number;
  readonly mention_post_rank?: number;
}

export interface BusinessMentionHashtagVideoListParams {
  readonly business_id: string;
  readonly hashtag?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly sort_field?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  readonly sort_order?: "ASC" | "DESC";
  readonly number_of_days?: number;
  readonly regions?: ReadonlyArray<string>;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessMentionHashtagVideoListResponse {
  readonly videos?: ReadonlyArray<BusinessMentionHashtagVideoListResponseVideos>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessMentionHashtagVideoListResponseVideos {
  readonly item_id?: string;
  readonly create_time?: string;
  readonly video_link?: string;
  readonly caption?: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly thumbnail_url?: string;
  readonly matched_hashtags?: ReadonlyArray<string>;
}

export interface BusinessMentionTopHashtagListParams {
  readonly business_id: string;
  readonly regions?: ReadonlyArray<string>;
}

export interface BusinessMentionTopHashtagListResponse {
  readonly results?: ReadonlyArray<BusinessMentionTopHashtagListResponseResults>;
}

export interface BusinessMentionTopHashtagListResponseResults {
  readonly hashtag?: string;
  readonly count?: number;
}

export interface BusinessMentionTopWordListParams {
  readonly business_id: string;
  readonly regions?: ReadonlyArray<string>;
}

export interface BusinessMentionTopWordListResponse {
  readonly results?: ReadonlyArray<BusinessMentionTopWordListResponseResults>;
}

export interface BusinessMentionTopWordListResponseResults {
  readonly word?: string;
  readonly count?: number;
}

export interface BusinessMentionVideoGetParams {
  readonly business_id: string;
  readonly item_id: string;
  readonly fields?: ReadonlyArray<string>;
}

export interface BusinessMentionVideoGetResponse {
  readonly video?: ReadonlyArray<BusinessMentionVideoGetResponseVideo>;
}

export interface BusinessMentionVideoGetResponseVideo {
  readonly item_id?: string;
  readonly create_time?: string;
  readonly video_link?: string;
  readonly caption?: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly thumbnail_url?: string;
  readonly creator_handle_name?: string;
  readonly views?: number;
  readonly reach?: number;
}

export interface BusinessMentionVideoListParams {
  readonly business_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly sort_field?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  readonly sort_type?: "ASC" | "DESC";
  readonly number_of_days?: number;
  readonly regions?: ReadonlyArray<string>;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessMentionVideoListResponse {
  readonly videos?: ReadonlyArray<BusinessMentionVideoListResponseVideos>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessMentionVideoListResponseVideos {
  readonly item_id?: string;
  readonly create_time?: string;
  readonly video_link?: string;
  readonly caption?: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly thumbnail_url?: string;
  readonly creator_handle_name?: string;
  readonly views?: number;
  readonly reach?: number;
}

export interface BusinessMessageAutoMessageCreateParams {
  readonly business_id: string;
  readonly auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  readonly welcome_message?: BusinessMessageAutoMessageCreateParamsWelcomeMessage;
  readonly suggested_question?: BusinessMessageAutoMessageCreateParamsSuggestedQuestion;
  readonly chat_prompt?: BusinessMessageAutoMessageCreateParamsChatPrompt;
}

export interface BusinessMessageAutoMessageCreateParamsChatPrompt {
  readonly title?: string;
  readonly content?: string;
}

export interface BusinessMessageAutoMessageCreateParamsSuggestedQuestion {
  readonly question?: string;
  readonly answer?: string;
}

export interface BusinessMessageAutoMessageCreateParamsWelcomeMessage {
  readonly content?: string;
}

export interface BusinessMessageAutoMessageCreateResponse {
  readonly auto_message?: BusinessMessageAutoMessageCreateResponseAutoMessage;
}

export interface BusinessMessageAutoMessageCreateResponseAutoMessage {
  readonly auto_message_id?: string;
}

export interface BusinessMessageAutoMessageDeleteParams {
  readonly business_id: string;
  readonly auto_message_type: "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  readonly auto_message_id: string;
}

export interface BusinessMessageAutoMessageDeleteResponse {

}

export interface BusinessMessageAutoMessageGetParams {
  readonly business_id: string;
  readonly auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  readonly auto_message_id?: string;
}

export interface BusinessMessageAutoMessageGetResponse {
  readonly business_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly auto_messages?: ReadonlyArray<BusinessMessageAutoMessageGetResponseAutoMessages>;
}

export interface BusinessMessageAutoMessageGetResponseAutoMessages {
  readonly auto_message_id?: string;
  readonly auto_message_type?: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  readonly audit_status?: "REVIEWING" | "APPROVED" | "REJECTED";
  readonly welcome_message?: BusinessMessageAutoMessageGetResponseAutoMessagesWelcomeMessage;
  readonly suggested_question?: BusinessMessageAutoMessageGetResponseAutoMessagesSuggestedQuestion;
  readonly chat_prompt?: BusinessMessageAutoMessageGetResponseAutoMessagesChatPrompt;
}

export interface BusinessMessageAutoMessageGetResponseAutoMessagesChatPrompt {
  readonly title?: string;
  readonly content?: string;
}

export interface BusinessMessageAutoMessageGetResponseAutoMessagesSuggestedQuestion {
  readonly question?: string;
  readonly answer?: string;
}

export interface BusinessMessageAutoMessageGetResponseAutoMessagesWelcomeMessage {
  readonly content?: string;
}

export interface BusinessMessageAutoMessageSortParams {
  readonly business_id: string;
  readonly auto_message_type: string;
  readonly auto_message_ids: ReadonlyArray<string>;
}

export interface BusinessMessageAutoMessageSortResponse {

}

export interface BusinessMessageAutoMessageStatusUpdateParams {
  readonly business_id: string;
  readonly auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  readonly operation_status: "ENABLE" | "DISABLE";
}

export interface BusinessMessageAutoMessageStatusUpdateResponse {

}

export interface BusinessMessageAutoMessageUpdateParams {
  readonly business_id: string;
  readonly auto_message_id: string;
  readonly auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT" | "REVIEWING";
  readonly welcome_message?: BusinessMessageAutoMessageUpdateParamsWelcomeMessage;
  readonly suggested_question?: BusinessMessageAutoMessageUpdateParamsSuggestedQuestion;
  readonly chat_prompt?: BusinessMessageAutoMessageUpdateParamsChatPrompt;
}

export interface BusinessMessageAutoMessageUpdateParamsChatPrompt {
  readonly title?: string;
  readonly content?: string;
}

export interface BusinessMessageAutoMessageUpdateParamsSuggestedQuestion {
  readonly question?: string;
  readonly answer?: string;
}

export interface BusinessMessageAutoMessageUpdateParamsWelcomeMessage {
  readonly content?: string;
}

export interface BusinessMessageAutoMessageUpdateResponse {
  readonly auto_message?: BusinessMessageAutoMessageUpdateResponseAutoMessage;
}

export interface BusinessMessageAutoMessageUpdateResponseAutoMessage {
  readonly auto_message_id?: string;
}

export interface BusinessMessageCapabilitiesGetParams {
  readonly business_id: string;
  readonly capability_types: ReadonlyArray<string>;
  readonly conversation_id?: string;
  readonly conversation_type?: string;
}

export interface BusinessMessageCapabilitiesGetResponse {
  readonly capability_infos?: ReadonlyArray<BusinessMessageCapabilitiesGetResponseCapabilityInfos>;
}

export interface BusinessMessageCapabilitiesGetResponseCapabilityInfos {
  readonly capability_type?: string;
  readonly capability_result?: boolean;
}

export interface BusinessMessageContentListParams {
  readonly business_id: string;
  readonly conversation_id: string;
}

export interface BusinessMessageContentListResponse {
  readonly messages?: ReadonlyArray<BusinessMessageContentListResponseMessages>;
  readonly participants?: ReadonlyArray<BusinessMessageContentListResponseParticipants>;
}

export interface BusinessMessageContentListResponseMessages {
  readonly sender?: string;
  readonly recipient?: string;
  readonly conversation_id?: string;
  readonly message_id?: string;
  readonly timestamp?: number;
  readonly message_tag?: BusinessMessageContentListResponseMessagesMessageTag;
  readonly message_type?: "TEXT" | "IMAGE" | "SHARE_POST" | "VIDEO" | "EMOJI" | "STICKER" | "TEMPLATE" | "OTHER";
  readonly auto_message_type?: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "AUTO_REPLY";
  readonly text?: BusinessMessageContentListResponseMessagesText;
  readonly image?: BusinessMessageContentListResponseMessagesImage;
  readonly share_post?: BusinessMessageContentListResponseMessagesSharePost;
  readonly reactions?: ReadonlyArray<BusinessMessageContentListResponseMessagesReactions>;
  readonly sticker?: BusinessMessageContentListResponseMessagesSticker;
  readonly emoji?: BusinessMessageContentListResponseMessagesEmoji;
  readonly video?: BusinessMessageContentListResponseMessagesVideo;
  readonly template?: BusinessMessageContentListResponseMessagesTemplate;
  readonly from_user?: BusinessMessageContentListResponseMessagesFromUser;
  readonly to_user?: BusinessMessageContentListResponseMessagesToUser;
  readonly referenced_message_info?: BusinessMessageContentListResponseMessagesReferencedMessageInfo;
}

export interface BusinessMessageContentListResponseMessagesEmoji {
  readonly url?: string;
}

export interface BusinessMessageContentListResponseMessagesFromUser {
  readonly role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  readonly id?: string;
}

export interface BusinessMessageContentListResponseMessagesImage {
  readonly media_id?: string;
}

export interface BusinessMessageContentListResponseMessagesMessageTag {
  readonly source?: "APP" | "WEB" | "API" | "OTHERS" | "UNKNOWN_SOURCE";
}

export interface BusinessMessageContentListResponseMessagesReactions {
  readonly type?: "EMOJI" | "AI_EMOJI";
  readonly emoji?: string;
  readonly ai_emoji_url?: string;
  readonly unique_identifier?: string;
  readonly timestamp?: number;
}

export interface BusinessMessageContentListResponseMessagesReferencedMessageInfo {
  readonly referenced_message_id?: string;
}

export interface BusinessMessageContentListResponseMessagesSharePost {
  readonly embed_url?: string;
}

export interface BusinessMessageContentListResponseMessagesSticker {
  readonly url?: string;
}

export interface BusinessMessageContentListResponseMessagesTemplate {
  readonly type?: "QA_BUTTON_CARD" | "QA_LINK_CARD";
  readonly title?: string;
  readonly buttons?: ReadonlyArray<BusinessMessageContentListResponseMessagesTemplateButtons>;
}

export interface BusinessMessageContentListResponseMessagesTemplateButtons {
  readonly type?: string;
  readonly title?: string;
  readonly id?: string;
}

export interface BusinessMessageContentListResponseMessagesText {
  readonly body?: string;
}

export interface BusinessMessageContentListResponseMessagesToUser {
  readonly role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  readonly id?: string;
}

export interface BusinessMessageContentListResponseMessagesVideo {
  readonly media_id?: string;
}

export interface BusinessMessageContentListResponseParticipants {
  readonly role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  readonly id?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly is_follower?: boolean;
}

export interface BusinessMessageConversationListParams {
  readonly business_id: string;
  readonly conversation_type: string;
  readonly limit?: number;
  readonly cursor?: number;
}

export interface BusinessMessageConversationListResponse {
  readonly conversations?: ReadonlyArray<BusinessMessageConversationListResponseConversations>;
  readonly has_more?: boolean;
  readonly cursor?: number;
}

export interface BusinessMessageConversationListResponseConversations {
  readonly conversation_id?: string;
  readonly update_time?: number;
  readonly referral?: BusinessMessageConversationListResponseConversationsReferral;
}

export interface BusinessMessageConversationListResponseConversationsReferral {
  readonly ad?: ReadonlyArray<BusinessMessageConversationListResponseConversationsReferralAd>;
  readonly short_link?: ReadonlyArray<BusinessMessageConversationListResponseConversationsReferralShortLink>;
}

export interface BusinessMessageConversationListResponseConversationsReferralAd {
  readonly advertiser_id?: string;
  readonly ad_id?: string;
  readonly timestamp?: number;
  readonly ad_name?: string;
  readonly embed_url?: string;
  readonly message_material_id?: string;
}

export interface BusinessMessageConversationListResponseConversationsReferralShortLink {
  readonly ref?: string;
  readonly prefilled_message?: string;
  readonly prefilled_message_audit_status?: "REJECT" | "PASS";
}

export interface BusinessMessageDirectReplyGetParams {
  readonly business_id: string;
  readonly direct_reply_type: string;
}

export interface BusinessMessageDirectReplyGetResponse {
  readonly business_id?: string;
  readonly direct_reply_type?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
}

export interface BusinessMessageDirectReplyUpdateParams {
  readonly business_id: string;
  readonly direct_reply_type: string;
  readonly operation_status: "ENABLE" | "DISABLE";
}

export interface BusinessMessageDirectReplyUpdateResponse {

}

export interface BusinessMessageMediaDownloadParams {
  readonly business_id: string;
  readonly conversation_id: string;
  readonly message_id: string;
  readonly media_id: string;
  readonly media_type: "IMAGE" | "VIDEO";
}

export interface BusinessMessageMediaDownloadResponse {
  readonly download_url?: string;
}

export interface BusinessMessageMediaUploadParams {
  readonly business_id: string;
  readonly file: unknown;
  readonly media_type: string;
}

export interface BusinessMessageMediaUploadResponse {
  readonly media_id?: string;
}

export interface BusinessMessageSendParams {
  readonly business_id: string;
  readonly recipient_type?: string;
  readonly recipient?: string;
  readonly message_type: "TEXT" | "IMAGE" | "SHARE_POST" | "TEMPLATE" | "SENDER_ACTION";
  readonly text?: BusinessMessageSendParamsText;
  readonly image?: BusinessMessageSendParamsImage;
  readonly share_post?: BusinessMessageSendParamsSharePost;
  readonly template?: BusinessMessageSendParamsTemplate;
  readonly sender_action?: string;
  readonly referenced_message_info?: BusinessMessageSendParamsReferencedMessageInfo;
  readonly direct_reply?: BusinessMessageSendParamsDirectReply;
}

export interface BusinessMessageSendParamsDirectReply {
  readonly reply_type?: string;
  readonly comment_reply?: BusinessMessageSendParamsDirectReplyCommentReply;
}

export interface BusinessMessageSendParamsDirectReplyCommentReply {
  readonly comment_id?: string;
}

export interface BusinessMessageSendParamsImage {
  readonly media_id?: string;
}

export interface BusinessMessageSendParamsReferencedMessageInfo {
  readonly referenced_message_id?: string;
}

export interface BusinessMessageSendParamsSharePost {
  readonly item_id?: string;
}

export interface BusinessMessageSendParamsTemplate {
  readonly type?: "QA_BUTTON_CARD" | "QA_LINK_CARD";
  readonly title?: string;
  readonly buttons?: ReadonlyArray<BusinessMessageSendParamsTemplateButtons>;
}

export interface BusinessMessageSendParamsTemplateButtons {
  readonly type?: string;
  readonly title?: string;
  readonly id?: string;
}

export interface BusinessMessageSendParamsText {
  readonly body?: string;
}

export interface BusinessMessageSendResponse {
  readonly message?: BusinessMessageSendResponseMessage;
}

export interface BusinessMessageSendResponseMessage {
  readonly message_id?: string;
}

export interface BusinessPhotoPublishParams {
  readonly business_id: string;
  readonly photo_images: ReadonlyArray<string>;
  readonly photo_cover_index?: number;
  readonly post_info: BusinessPhotoPublishParamsPostInfo;
}

export interface BusinessPhotoPublishParamsPostInfo {
  readonly privacy_level: "PUBLIC_TO_EVERYONE" | "MUTUAL_FOLLOW_FRIENDS" | "FOLLOWER_OF_CREATOR" | "SELF_ONLY";
  readonly title?: string;
  readonly caption?: string;
  readonly auto_add_music?: boolean;
  readonly is_brand_organic: boolean;
  readonly is_branded_content: boolean;
  readonly is_draft?: boolean;
  readonly disable_comment?: boolean;
  readonly music_sound_info?: BusinessPhotoPublishParamsPostInfoMusicSoundInfo;
  readonly location_id?: string;
  readonly location_name?: string;
}

export interface BusinessPhotoPublishParamsPostInfoMusicSoundInfo {
  readonly music_sound_id?: string;
}

export interface BusinessPhotoPublishResponse {
  readonly share_id?: string;
}

export interface BusinessPostAuthorizeDeleteParams {
  readonly business_id: string;
  readonly item_id: string;
}

export interface BusinessPostAuthorizeDeleteResponse {
  readonly item_id?: string;
  readonly auth_code_status?: string;
}

export interface BusinessPostAuthorizeParams {
  readonly business_id: string;
  readonly item_id: string;
  readonly authorization_days?: number;
}

export interface BusinessPostAuthorizeResponse {
  readonly item_id?: string;
  readonly auth_code?: string;
  readonly auth_code_start_time?: string;
  readonly auth_code_end_time?: string;
  readonly authorization_days?: number;
}

export interface BusinessPostAuthorizeSettingParams {
  readonly business_id: string;
  readonly item_id: string;
  readonly is_ad_promotable: boolean;
  readonly authorization_days?: number;
}

export interface BusinessPostAuthorizeSettingResponse {
  readonly item_id?: string;
  readonly auth_code?: string;
  readonly auth_code_start_time?: string;
  readonly auth_code_end_time?: string;
  readonly authorization_days?: number;
}

export interface BusinessPostAuthorizeStatusParams {
  readonly business_id: string;
  readonly item_id: string;
}

export interface BusinessPostAuthorizeStatusResponse {
  readonly item_id?: string;
  readonly auth_code?: string;
  readonly auth_code_start_time?: string;
  readonly auth_code_end_time?: string;
  readonly authorization_days?: number;
  readonly auth_code_status?: "NOT_USED" | "IN_USE" | "EXPIRED";
}

export interface BusinessPropertyAddParams {
  readonly app_id: string;
  readonly secret: string;
  readonly url_property_meta: BusinessPropertyAddParamsUrlPropertyMeta;
}

export interface BusinessPropertyAddParamsUrlPropertyMeta {
  readonly property_type: number;
  readonly url: string;
}

export interface BusinessPropertyAddResponse {
  readonly url_property_info?: BusinessPropertyAddResponseUrlPropertyInfo;
}

export interface BusinessPropertyAddResponseUrlPropertyInfo {
  readonly property_type?: number;
  readonly url?: string;
  readonly property_status?: number;
  readonly signature?: string;
  readonly file_name?: string;
}

export interface BusinessPropertyDeleteParams {
  readonly app_id: string;
  readonly secret: string;
  readonly url_property_meta: BusinessPropertyDeleteParamsUrlPropertyMeta;
}

export interface BusinessPropertyDeleteParamsUrlPropertyMeta {
  readonly property_type: number;
  readonly url: string;
}

export interface BusinessPropertyDeleteResponse {

}

export interface BusinessPropertyListParams {
  readonly app_id: string;
  readonly secret: string;
}

export interface BusinessPropertyListResponse {
  readonly url_property_info_list?: BusinessPropertyListResponseUrlPropertyInfoList;
}

export interface BusinessPropertyListResponseUrlPropertyInfoList {
  readonly property_type?: number;
  readonly url?: string;
  readonly property_status?: number;
  readonly signature?: string;
  readonly file_name?: string;
}

export interface BusinessPropertyVerifyParams {
  readonly app_id: string;
  readonly secret: string;
  readonly url_property_meta: BusinessPropertyVerifyParamsUrlPropertyMeta;
}

export interface BusinessPropertyVerifyParamsUrlPropertyMeta {
  readonly property_type: number;
  readonly url: string;
}

export interface BusinessPropertyVerifyResponse {
  readonly url_property_info?: BusinessPropertyVerifyResponseUrlPropertyInfo;
}

export interface BusinessPropertyVerifyResponseUrlPropertyInfo {
  readonly property_type?: number;
  readonly url?: string;
  readonly property_status?: number;
  readonly signature?: string;
  readonly file_name?: string;
}

export interface BusinessPublishLocationParams {
  readonly business_id: string;
  readonly search_query: string;
}

export interface BusinessPublishLocationResponse {
  readonly locations?: ReadonlyArray<BusinessPublishLocationResponseLocations>;
}

export interface BusinessPublishLocationResponseLocations {
  readonly location_name?: string;
  readonly location_id?: string;
  readonly location_address?: string;
}

export interface BusinessPublishStatusParams {
  readonly business_id: string;
  readonly publish_id: string;
}

export interface BusinessPublishStatusResponse {
  readonly status?: "PROCESSING_DOWNLOAD" | "PUBLISH_COMPLETE" | "FAILED" | "SEND_TO_USER_INBOX";
  readonly post_ids?: ReadonlyArray<string>;
  readonly reason?: string;
}

export interface BusinessVideoListParams {
  readonly business_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly filters?: BusinessVideoListParamsFilters;
  readonly cursor?: number;
  readonly max_count?: number;
}

export interface BusinessVideoListParamsFilters {
  readonly video_ids?: ReadonlyArray<string>;
  readonly ad_post_only?: boolean;
}

export interface BusinessVideoListResponse {
  readonly videos?: ReadonlyArray<BusinessVideoListResponseVideos>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface BusinessVideoListResponseVideos {
  readonly item_id?: string;
  readonly media_type?: "VIDEO" | "PHOTO";
  readonly is_ad?: boolean;
  readonly thumbnail_url?: string;
  readonly share_url?: string;
  readonly embed_url?: string;
  readonly caption?: string;
  readonly video_duration?: number;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly favorites?: number;
  readonly create_time?: string;
  readonly reach?: number;
  readonly video_views?: number;
  readonly total_time_watched?: number;
  readonly average_time_watched?: number;
  readonly full_video_watched_rate?: number;
  readonly new_followers?: number;
  readonly profile_views?: number;
  readonly website_clicks?: number;
  readonly phone_number_clicks?: number;
  readonly lead_submissions?: number;
  readonly app_download_clicks?: number;
  readonly email_clicks?: number;
  readonly address_clicks?: number;
  readonly video_view_retention?: ReadonlyArray<BusinessVideoListResponseVideosVideoViewRetention>;
  readonly impression_sources?: ReadonlyArray<BusinessVideoListResponseVideosImpressionSources>;
  readonly audience_genders?: ReadonlyArray<BusinessVideoListResponseVideosAudienceGenders>;
  readonly audience_countries?: ReadonlyArray<BusinessVideoListResponseVideosAudienceCountries>;
  readonly audience_cities?: ReadonlyArray<BusinessVideoListResponseVideosAudienceCities>;
  readonly audience_types?: ReadonlyArray<BusinessVideoListResponseVideosAudienceTypes>;
  readonly engagement_likes?: ReadonlyArray<BusinessVideoListResponseVideosEngagementLikes>;
}

export interface BusinessVideoListResponseVideosAudienceCities {
  readonly city_name?: string;
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosAudienceCountries {
  readonly country?: string;
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosAudienceGenders {
  readonly gender?: string;
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosAudienceTypes {
  readonly type?: "NEW_VIEWER" | "RETURN_VIEWER" | "FOLLOWER_PERCENT" | "NON_FOLLOWER_PERCENT";
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosEngagementLikes {
  readonly second?: string;
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosImpressionSources {
  readonly impression_source?: string;
  readonly percentage?: number;
}

export interface BusinessVideoListResponseVideosVideoViewRetention {
  readonly second?: string;
  readonly percentage?: number;
}

export interface BusinessVideoPublishParams {
  readonly business_id: string;
  readonly video_url: string;
  readonly custom_thumbnail_url?: string;
  readonly post_info: BusinessVideoPublishParamsPostInfo;
}

export interface BusinessVideoPublishParamsPostInfo {
  readonly caption?: string;
  readonly is_brand_organic: boolean;
  readonly is_branded_content: boolean;
  readonly tto_invite_link?: string;
  readonly disable_comment?: boolean;
  readonly disable_duet?: boolean;
  readonly disable_stitch?: boolean;
  readonly thumbnail_offset?: number;
  readonly is_ai_generated?: boolean;
  readonly upload_to_draft?: boolean;
  readonly location_id?: string;
  readonly location_name?: string;
  readonly is_ads_only?: boolean;
  readonly music_sound_info?: BusinessVideoPublishParamsPostInfoMusicSoundInfo;
}

export interface BusinessVideoPublishParamsPostInfoMusicSoundInfo {
  readonly music_sound_id?: string;
  readonly music_sound_volume?: number;
  readonly music_sound_start?: number;
  readonly music_sound_end?: number;
  readonly video_original_sound_volume?: number;
}

export interface BusinessVideoPublishResponse {
  readonly share_id?: string;
}

export interface BusinessVideoRecommendParams {
  readonly business_id: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly exclude_video_ids?: ReadonlyArray<string>;
  readonly time?: "PAST_ONE_MONTH" | "PAST_THREE_MONTHS" | "PAST_SIX_MONTHS";
  readonly objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
}

export interface BusinessVideoRecommendResponse {
  readonly videos?: ReadonlyArray<BusinessVideoRecommendResponseVideos>;
}

export interface BusinessVideoRecommendResponseVideos {
  readonly recommendation_level?: "HIGH" | "MEDIUM" | "LOW";
  readonly item_id?: string;
  readonly embed_url?: string;
  readonly thumbnail_url?: string;
  readonly create_time?: string;
  readonly video_views?: number;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly audience_countries?: ReadonlyArray<BusinessVideoRecommendResponseVideosAudienceCountries>;
}

export interface BusinessVideoRecommendResponseVideosAudienceCountries {
  readonly country?: string;
  readonly percentage?: number;
}

export interface BusinessVideoSettingsParams {
  readonly business_id: string;
}

export interface BusinessVideoSettingsResponse {
  readonly privacy_level_options?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly duet_disabled?: boolean;
  readonly stitch_disabled?: boolean;
  readonly max_video_post_duration_sec?: number;
}

export interface BusinessWebhookDeleteParams {
  readonly app_id: string;
  readonly secret: string;
  readonly event_type: "VIDEO" | "COMMENT";
  readonly item_list?: ReadonlyArray<string>;
}

export interface BusinessWebhookDeleteResponse {
  readonly app_id?: string;
  readonly event_type?: "VIDEO" | "COMMENT";
  readonly item_list?: ReadonlyArray<string>;
}

export interface BusinessWebhookListParams {
  readonly app_id: string;
  readonly secret: string;
  readonly event_type: "VIDEO" | "COMMENT";
}

export interface BusinessWebhookListResponse {
  readonly app_id?: string;
  readonly event_type?: "VIDEO" | "COMMENT";
  readonly callback_url?: string;
  readonly item_list?: ReadonlyArray<string>;
}

export interface BusinessWebhookUpdateParams {
  readonly app_id: string;
  readonly secret: string;
  readonly event_type: "VIDEO" | "COMMENT";
  readonly callback_url: string;
  readonly item_list?: ReadonlyArray<string>;
}

export interface BusinessWebhookUpdateResponse {
  readonly app_id?: string;
  readonly event_type?: "VIDEO" | "COMMENT";
  readonly callback_url?: string;
  readonly item_list?: ReadonlyArray<string>;
}

export interface CampaignCopyTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface CampaignCopyTaskCheckResponse {
  readonly task_status?: "RUNNING" | "SUCCESS" | "FAILURE";
  readonly task_info?: CampaignCopyTaskCheckResponseTaskInfo;
  readonly task_result?: CampaignCopyTaskCheckResponseTaskResult;
}

export interface CampaignCopyTaskCheckResponseTaskInfo {
  readonly total_ad_count?: number;
  readonly success_ad_count?: number;
  readonly total_smart_creative_adgroup_count?: number;
  readonly success_smart_creative_adgroup_count?: number;
}

export interface CampaignCopyTaskCheckResponseTaskResult {
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly campaign_error_infos?: ReadonlyArray<string>;
  readonly adgroup_result_list?: ReadonlyArray<CampaignCopyTaskCheckResponseTaskResultAdgroupResultList>;
}

export interface CampaignCopyTaskCheckResponseTaskResultAdgroupResultList {
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly total_ad_count?: number;
  readonly success_ad_count?: number;
  readonly adgroup_error_list?: ReadonlyArray<string>;
  readonly ad_status?: "ALL_SUCCESS" | "PARTIAL_SUCCESS";
  readonly is_smart_creative?: boolean;
  readonly smart_creative_result?: CampaignCopyTaskCheckResponseTaskResultAdgroupResultListSmartCreativeResult;
  readonly ad_result_list?: ReadonlyArray<CampaignCopyTaskCheckResponseTaskResultAdgroupResultListAdResultList>;
}

export interface CampaignCopyTaskCheckResponseTaskResultAdgroupResultListAdResultList {
  readonly is_success?: boolean;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly ad_error_list?: ReadonlyArray<string>;
}

export interface CampaignCopyTaskCheckResponseTaskResultAdgroupResultListSmartCreativeResult {
  readonly is_success?: boolean;
  readonly smart_creative_error_list?: ReadonlyArray<string>;
}

export interface CampaignCopyTaskCreateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly request_id: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP";
  readonly campaign_name?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly budget?: number;
  readonly rta_id?: string;
  readonly po_number?: string;
  readonly schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly deep_copy_mode?: "DEFAULT" | "CUSTOM";
  readonly adgroup_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupList>;
}

export interface CampaignCopyTaskCreateParamsAdgroupList {
  readonly adgroup_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly adgroup_name?: string;
  readonly automated_keywords_enabled?: boolean;
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly budget?: number;
  readonly schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly ad_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListAdList>;
  readonly smart_creative_info?: CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfo;
}

export interface CampaignCopyTaskCreateParamsAdgroupListAdList {
  readonly ad_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly ad_name?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly ad_format?: "SINGLE_VIDEO" | "SINGLE_IMAGE" | "CAROUSEL_ADS";
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly ad_text?: string;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfo {
  readonly media_info_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoList>;
  readonly title_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoTitleList>;
  readonly call_to_action_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCallToActionList>;
  readonly deeplink_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoDeeplinkList>;
  readonly display_name_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoDisplayNameList>;
  readonly page_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoPageList>;
  readonly card_list?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCardList>;
  readonly landing_page_urls?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoLandingPageUrls>;
  readonly common_material?: CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCommonMaterial;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCardList {
  readonly card_id?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCommonMaterial {
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly ad_name?: string;
  readonly call_to_action_id?: string;
  readonly creative_authorized?: string;
  readonly playable_url?: string;
  readonly fallback_type?: "APP_INSTALL" | "WEBSITE";
  readonly tracking_info?: CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCommonMaterialTrackingInfo;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoCommonMaterialTrackingInfo {
  readonly impression_tracking_urls?: ReadonlyArray<string>;
  readonly click_tracking_urls?: ReadonlyArray<string>;
  readonly tracking_pixel_id?: string;
  readonly tracking_app_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoDisplayNameList {
  readonly app_name?: string;
  readonly landing_page_name?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoLandingPageUrls {
  readonly landing_page_url?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoList {
  readonly media_info?: CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfo;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfo {
  readonly image_info?: ReadonlyArray<CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfoImageInfo>;
  readonly video_info?: CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfoVideoInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER";
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
  readonly file_name?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoPageList {
  readonly page_id?: string;
}

export interface CampaignCopyTaskCreateParamsAdgroupListSmartCreativeInfoTitleList {
  readonly title?: string;
}

export interface CampaignCopyTaskCreateResponse {
  readonly task_id?: string;
  readonly adgroup_error_list?: ReadonlyArray<CampaignCopyTaskCreateResponseAdgroupErrorList>;
}

export interface CampaignCopyTaskCreateResponseAdgroupErrorList {
  readonly adgroup_id?: string;
  readonly error_message?: string;
}

export interface CampaignCreateParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly is_search_campaign?: boolean;
  readonly campaign_type?: string;
  readonly app_id?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly rf_campaign_type?: "STANDARD" | "PULSE" | "PREMIUM" | "TOP_FEED";
  readonly campaign_product_source?: "CATALOG" | "STORE" | "PRODUCT_SALES" | "SHOWCASE";
  readonly catalog_enabled?: boolean;
  readonly campaign_name: string;
  readonly request_id?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget?: number;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  readonly po_number?: string;
}

export interface CampaignCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly is_search_campaign?: boolean;
  readonly is_smart_performance_campaign?: boolean;
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly app_id?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
  readonly campaign_product_source?: "CATALOG" | "STORE";
  readonly catalog_enabled?: boolean;
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly bid_type?: string;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly optimization_goal?: string;
  readonly budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget?: number;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly is_new_structure?: boolean;
  readonly objective?: "APP" | "LANDING_PAGE";
  readonly po_number?: string;
}

export interface CampaignGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly exclude_field_types_in_response?: ReadonlyArray<string>;
  readonly filtering?: CampaignGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CampaignGetParamsFiltering {
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_name?: string;
  readonly campaign_system_origins?: ReadonlyArray<"PROMOTE" | "TT_ADS_PLATFORM">;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly buying_types?: ReadonlyArray<"AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW">;
  readonly is_smart_performance_campaign?: boolean;
  readonly creative_campaign_type?: ReadonlyArray<"SPC" | "SEARCH_CAMPAIGN" | "OTHER">;
  readonly split_test_enabled?: boolean;
  readonly campaign_product_source?: "CATALOG" | "STORE" | "PRODUCT_SALES";
  readonly optimization_goal?: string;
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
  readonly gmv_max_promotion_types?: ReadonlyArray<"PRODUCT_GMV_MAX" | "LIVE_GMV_MAX">;
  readonly store_ids?: ReadonlyArray<string>;
}

export interface CampaignGetResponse {
  readonly list?: ReadonlyArray<CampaignGetResponseList>;
  readonly page_info?: CampaignGetResponsePageInfo;
}

export interface CampaignGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_system_origin?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "APP_POSTS_PROMOTION";
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly is_search_campaign?: boolean;
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly is_smart_performance_campaign?: boolean;
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly app_id?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly rf_campaign_type?: "STANDARD" | "PULSE" | "TOPVIEW";
  readonly campaign_product_source?: "CATALOG" | "STORE";
  readonly catalog_enabled?: boolean;
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly bid_type?: string;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly optimization_goal?: string;
  readonly budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget?: number;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly is_new_structure?: boolean;
  readonly objective?: "APP" | "LANDING_PAGE";
  readonly po_number?: string;
}

export interface CampaignGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CampaignGmvMaxCreateParams {
  readonly request_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly advertiser_id: string;
  readonly shopping_ads_type: "PRODUCT" | "LIVE";
  readonly product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly optimization_goal: string;
  readonly deep_bid_type: string;
  readonly roas_bid?: number;
  readonly budget: number;
  readonly promotion_days?: CampaignGmvMaxCreateParamsPromotionDays;
  readonly auto_budget?: CampaignGmvMaxCreateParamsAutoBudget;
  readonly auto_budget_enabled?: boolean;
  readonly schedule_type: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time: string;
  readonly schedule_end_time?: string;
  readonly product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION";
  readonly identity_list?: ReadonlyArray<CampaignGmvMaxCreateParamsIdentityList>;
  readonly affiliate_posts_enabled?: boolean;
  readonly item_list?: ReadonlyArray<CampaignGmvMaxCreateParamsItemList>;
  readonly custom_anchor_video_list?: ReadonlyArray<CampaignGmvMaxCreateParamsCustomAnchorVideoList>;
  readonly campaign_name: string;
}

export interface CampaignGmvMaxCreateParamsAutoBudget {
  readonly auto_budget_enabled?: boolean;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
}

export interface CampaignGmvMaxCreateParamsCustomAnchorVideoList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxCreateParamsCustomAnchorVideoListIdentityInfo;
}

export interface CampaignGmvMaxCreateParamsCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxCreateParamsIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxCreateParamsItemList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxCreateParamsItemListIdentityInfo;
  readonly video_info?: CampaignGmvMaxCreateParamsItemListVideoInfo;
}

export interface CampaignGmvMaxCreateParamsItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxCreateParamsItemListVideoInfo {
  readonly video_id?: string;
}

export interface CampaignGmvMaxCreateParamsPromotionDays {
  readonly is_enabled?: boolean;
  readonly auto_schedule_enabled?: boolean;
  readonly custom_schedule_list?: ReadonlyArray<CampaignGmvMaxCreateParamsPromotionDaysCustomScheduleList>;
  readonly roas_bid_multiplier?: number;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
}

export interface CampaignGmvMaxCreateParamsPromotionDaysCustomScheduleList {
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface CampaignGmvMaxCreateResponse {
  readonly advertiser_id?: string;
  readonly operation_status?: "DISABLE" | "ENABLE";
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly shopping_ads_type?: "PRODUCT" | "LIVE";
  readonly product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly optimization_goal?: string;
  readonly roi_protection_enabled?: boolean;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly budget?: number;
  readonly promotion_days?: CampaignGmvMaxCreateResponsePromotionDays;
  readonly auto_budget?: CampaignGmvMaxCreateResponseAutoBudget;
  readonly auto_budget_enabled?: boolean;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE">;
  readonly location_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  readonly identity_list?: ReadonlyArray<CampaignGmvMaxCreateResponseIdentityList>;
  readonly affiliate_posts_enabled?: boolean;
  readonly item_list?: ReadonlyArray<CampaignGmvMaxCreateResponseItemList>;
  readonly campaign_custom_anchor_video_id?: string;
  readonly custom_anchor_video_list?: ReadonlyArray<CampaignGmvMaxCreateResponseCustomAnchorVideoList>;
}

export interface CampaignGmvMaxCreateResponseAutoBudget {
  readonly auto_budget_enabled?: boolean;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
}

export interface CampaignGmvMaxCreateResponseCustomAnchorVideoList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxCreateResponseCustomAnchorVideoListIdentityInfo;
}

export interface CampaignGmvMaxCreateResponseCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxCreateResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxCreateResponseItemList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxCreateResponseItemListIdentityInfo;
  readonly video_info?: CampaignGmvMaxCreateResponseItemListVideoInfo;
}

export interface CampaignGmvMaxCreateResponseItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly user_name?: string;
}

export interface CampaignGmvMaxCreateResponseItemListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface CampaignGmvMaxCreateResponsePromotionDays {
  readonly is_enabled?: boolean;
  readonly auto_schedule_enabled?: boolean;
  readonly custom_schedule_list?: ReadonlyArray<CampaignGmvMaxCreateResponsePromotionDaysCustomScheduleList>;
  readonly roas_bid_multiplier?: number;
  readonly adjusted_roas_bid?: number;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
  readonly estimated_gross_revenue_increase?: string;
}

export interface CampaignGmvMaxCreateResponsePromotionDaysCustomScheduleList {
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface CampaignGmvMaxCreativeUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly action: "REMOVE" | "ADD" | "EXCLUDED";
  readonly item_list: ReadonlyArray<CampaignGmvMaxCreativeUpdateParamsItemList>;
}

export interface CampaignGmvMaxCreativeUpdateParamsItemList {
  readonly item_id: string;
  readonly spu_id_list?: ReadonlyArray<string>;
}

export interface CampaignGmvMaxCreativeUpdateResponse {

}

export interface CampaignGmvMaxInfoParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
}

export interface CampaignGmvMaxInfoResponse {
  readonly advertiser_id?: string;
  readonly operation_status?: "DISABLE" | "ENABLE";
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly shopping_ads_type?: "PRODUCT" | "LIVE";
  readonly product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly optimization_goal?: string;
  readonly roi_protection_enabled?: boolean;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly budget?: number;
  readonly promotion_days?: CampaignGmvMaxInfoResponsePromotionDays;
  readonly auto_budget?: CampaignGmvMaxInfoResponseAutoBudget;
  readonly auto_budget_enabled?: boolean;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE">;
  readonly location_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  readonly accelerate_testing_for_new_videos?: "ON" | "OFF";
  readonly identity_list?: ReadonlyArray<CampaignGmvMaxInfoResponseIdentityList>;
  readonly affiliate_posts_enabled?: boolean;
  readonly item_list?: ReadonlyArray<CampaignGmvMaxInfoResponseItemList>;
  readonly campaign_custom_anchor_video_id?: string;
  readonly custom_anchor_video_list?: ReadonlyArray<CampaignGmvMaxInfoResponseCustomAnchorVideoList>;
}

export interface CampaignGmvMaxInfoResponseAutoBudget {
  readonly auto_budget_enabled?: boolean;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
}

export interface CampaignGmvMaxInfoResponseCustomAnchorVideoList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxInfoResponseCustomAnchorVideoListIdentityInfo;
}

export interface CampaignGmvMaxInfoResponseCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxInfoResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxInfoResponseItemList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxInfoResponseItemListIdentityInfo;
  readonly video_info?: CampaignGmvMaxInfoResponseItemListVideoInfo;
}

export interface CampaignGmvMaxInfoResponseItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly user_name?: string;
}

export interface CampaignGmvMaxInfoResponseItemListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface CampaignGmvMaxInfoResponsePromotionDays {
  readonly is_enabled?: boolean;
  readonly auto_schedule_enabled?: boolean;
  readonly custom_schedule_list?: ReadonlyArray<CampaignGmvMaxInfoResponsePromotionDaysCustomScheduleList>;
  readonly roas_bid_multiplier?: number;
  readonly adjusted_roas_bid?: number;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
  readonly estimated_gross_revenue_increase?: string;
}

export interface CampaignGmvMaxInfoResponsePromotionDaysCustomScheduleList {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface CampaignGmvMaxSessionCreateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly store_id: string;
  readonly session: CampaignGmvMaxSessionCreateParamsSession;
}

export interface CampaignGmvMaxSessionCreateParamsSession {
  readonly bid_type: string;
  readonly product_list: ReadonlyArray<CampaignGmvMaxSessionCreateParamsSessionProductList>;
  readonly budget: number;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
}

export interface CampaignGmvMaxSessionCreateParamsSessionProductList {
  readonly spu_id: string;
}

export interface CampaignGmvMaxSessionCreateResponse {
  readonly session_id?: string;
}

export interface CampaignGmvMaxSessionDeleteParams {
  readonly advertiser_id: string;
  readonly session_id: string;
}

export interface CampaignGmvMaxSessionDeleteResponse {

}

export interface CampaignGmvMaxSessionGetParams {
  readonly advertiser_id: string;
  readonly session_ids: ReadonlyArray<string>;
}

export interface CampaignGmvMaxSessionGetResponse {
  readonly session_list?: ReadonlyArray<CampaignGmvMaxSessionGetResponseSessionList>;
}

export interface CampaignGmvMaxSessionGetResponseSessionList {
  readonly campaign_id?: string;
  readonly bid_type?: "NO_BID" | "CREATIVE_NO_BID";
  readonly session_id?: string;
  readonly budget?: number;
  readonly product_list?: ReadonlyArray<CampaignGmvMaxSessionGetResponseSessionListProductList>;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly item_id?: string;
}

export interface CampaignGmvMaxSessionGetResponseSessionListProductList {
  readonly spu_id?: string;
}

export interface CampaignGmvMaxSessionListParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
}

export interface CampaignGmvMaxSessionListResponse {
  readonly session_list?: ReadonlyArray<CampaignGmvMaxSessionListResponseSessionList>;
}

export interface CampaignGmvMaxSessionListResponseSessionList {
  readonly campaign_id?: string;
  readonly bid_type?: "NO_BID" | "CREATIVE_NO_BID";
  readonly session_id?: string;
  readonly budget?: number;
  readonly product_list?: ReadonlyArray<CampaignGmvMaxSessionListResponseSessionListProductList>;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
}

export interface CampaignGmvMaxSessionListResponseSessionListProductList {
  readonly spu_id?: string;
}

export interface CampaignGmvMaxSessionUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly store_id: string;
  readonly session_id: string;
  readonly session: CampaignGmvMaxSessionUpdateParamsSession;
}

export interface CampaignGmvMaxSessionUpdateParamsSession {
  readonly budget?: number;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
}

export interface CampaignGmvMaxSessionUpdateResponse {

}

export interface CampaignGmvMaxUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly roas_bid?: number;
  readonly budget?: number;
  readonly promotion_days?: CampaignGmvMaxUpdateParamsPromotionDays;
  readonly auto_budget?: CampaignGmvMaxUpdateParamsAutoBudget;
  readonly auto_budget_enabled?: boolean;
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_end_time?: string;
  readonly affiliate_posts_enabled?: boolean;
  readonly item_list?: ReadonlyArray<CampaignGmvMaxUpdateParamsItemList>;
  readonly custom_anchor_video_list?: ReadonlyArray<CampaignGmvMaxUpdateParamsCustomAnchorVideoList>;
  readonly campaign_name?: string;
}

export interface CampaignGmvMaxUpdateParamsAutoBudget {
  readonly auto_budget_enabled?: boolean;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
}

export interface CampaignGmvMaxUpdateParamsCustomAnchorVideoList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxUpdateParamsCustomAnchorVideoListIdentityInfo;
}

export interface CampaignGmvMaxUpdateParamsCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxUpdateParamsItemList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxUpdateParamsItemListIdentityInfo;
  readonly video_info?: CampaignGmvMaxUpdateParamsItemListVideoInfo;
}

export interface CampaignGmvMaxUpdateParamsItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxUpdateParamsItemListVideoInfo {
  readonly video_id?: string;
}

export interface CampaignGmvMaxUpdateParamsPromotionDays {
  readonly is_enabled?: boolean;
  readonly auto_schedule_enabled?: boolean;
  readonly custom_schedule_list?: ReadonlyArray<CampaignGmvMaxUpdateParamsPromotionDaysCustomScheduleList>;
  readonly roas_bid_multiplier?: number;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
}

export interface CampaignGmvMaxUpdateParamsPromotionDaysCustomScheduleList {
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface CampaignGmvMaxUpdateResponse {
  readonly advertiser_id?: string;
  readonly operation_status?: "DISABLE" | "ENABLE";
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly shopping_ads_type?: "PRODUCT" | "LIVE";
  readonly product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly optimization_goal?: string;
  readonly roi_protection_enabled?: boolean;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly budget?: number;
  readonly promotion_days?: CampaignGmvMaxUpdateResponsePromotionDays;
  readonly auto_budget?: CampaignGmvMaxUpdateResponseAutoBudget;
  readonly auto_budget_enabled?: boolean;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE">;
  readonly location_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  readonly identity_list?: ReadonlyArray<CampaignGmvMaxUpdateResponseIdentityList>;
  readonly affiliate_posts_enabled?: boolean;
  readonly item_list?: ReadonlyArray<CampaignGmvMaxUpdateResponseItemList>;
  readonly campaign_custom_anchor_video_id?: string;
  readonly custom_anchor_video_list?: ReadonlyArray<CampaignGmvMaxUpdateResponseCustomAnchorVideoList>;
}

export interface CampaignGmvMaxUpdateResponseAutoBudget {
  readonly auto_budget_enabled?: boolean;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
}

export interface CampaignGmvMaxUpdateResponseCustomAnchorVideoList {
  readonly item_id?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxUpdateResponseCustomAnchorVideoListIdentityInfo;
}

export interface CampaignGmvMaxUpdateResponseCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxUpdateResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface CampaignGmvMaxUpdateResponseItemList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: CampaignGmvMaxUpdateResponseItemListIdentityInfo;
  readonly video_info?: CampaignGmvMaxUpdateResponseItemListVideoInfo;
}

export interface CampaignGmvMaxUpdateResponseItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly user_name?: string;
}

export interface CampaignGmvMaxUpdateResponseItemListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface CampaignGmvMaxUpdateResponsePromotionDays {
  readonly is_enabled?: boolean;
  readonly auto_schedule_enabled?: boolean;
  readonly custom_schedule_list?: ReadonlyArray<CampaignGmvMaxUpdateResponsePromotionDaysCustomScheduleList>;
  readonly roas_bid_multiplier?: number;
  readonly adjusted_roas_bid?: number;
  readonly budget_increase_percentage?: number;
  readonly increase_limit?: number;
  readonly current_budget?: number;
  readonly next_increase?: number;
  readonly remained_times?: number;
  readonly maximum_budget?: number;
  readonly estimated_gross_revenue_increase?: string;
}

export interface CampaignGmvMaxUpdateResponsePromotionDaysCustomScheduleList {
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface CampaignLabelGetParams {
  readonly advertiser_id: string;
  readonly campaign_label_ids?: ReadonlyArray<string>;
  readonly campaign_label_names?: ReadonlyArray<string>;
  readonly campaign_label_types?: ReadonlyArray<"GENERAL" | "MARKETING_EVENT">;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CampaignLabelGetResponse {
  readonly list?: ReadonlyArray<CampaignLabelGetResponseList>;
  readonly page_info?: CampaignLabelGetResponsePageInfo;
}

export interface CampaignLabelGetResponseList {
  readonly campaign_label_id?: string;
  readonly campaign_label_name?: string;
  readonly campaign_label_type?: "GENERAL" | "MARKETING_EVENT";
  readonly campaign_label_color?: string;
  readonly create_time?: string;
}

export interface CampaignLabelGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CampaignQuotaGetParams {
  readonly advertiser_id: string;
  readonly app_id: string;
  readonly campaign_id?: string;
}

export interface CampaignQuotaGetResponse {
  readonly campaign_quota?: CampaignQuotaGetResponseCampaignQuota;
  readonly adgroup_quota?: CampaignQuotaGetResponseAdgroupQuota;
  readonly split_test_quota?: CampaignQuotaGetResponseSplitTestQuota;
}

export interface CampaignQuotaGetResponseAdgroupQuota {
  readonly campaign_id?: number;
  readonly used_quota?: number;
  readonly available_quota?: number;
  readonly total_quota?: number;
}

export interface CampaignQuotaGetResponseCampaignQuota {
  readonly used_quota?: number;
  readonly releasing_quota?: number;
  readonly available_quota?: number;
  readonly total_quota?: number;
}

export interface CampaignQuotaGetResponseSplitTestQuota {
  readonly max_test_number?: number;
  readonly available_test_group?: number;
  readonly used_test_group?: number;
  readonly releasing_test_group?: number;
  readonly used_quota?: number;
  readonly releasing_quota?: number;
}

export interface CampaignQuotaInfoParams {
  readonly advertiser_id: string;
  readonly app_id: string;
  readonly campaign_id?: string;
  readonly adgroup_id?: string;
  readonly has_advertiser_quota?: boolean;
}

export interface CampaignQuotaInfoResponse {
  readonly split_test_quota?: CampaignQuotaInfoResponseSplitTestQuota;
  readonly campaign_quota_info?: CampaignQuotaInfoResponseCampaignQuotaInfo;
  readonly adgroup_quota_info?: CampaignQuotaInfoResponseAdgroupQuotaInfo;
  readonly ad_quota_info?: CampaignQuotaInfoResponseAdQuotaInfo;
}

export interface CampaignQuotaInfoResponseAdgroupQuotaInfo {
  readonly total_adgroup_quota?: number;
  readonly used_adgroup_quota?: number;
  readonly available_adgroup_quota?: number;
  readonly placements?: ReadonlyArray<string>;
  readonly campaign_id?: string;
}

export interface CampaignQuotaInfoResponseAdQuotaInfo {
  readonly total_ad_quota?: number;
  readonly used_ad_quota?: number;
  readonly available_ad_quota?: number;
  readonly adgroup_id?: string;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfo {
  readonly tiktok_campaign_quota_info?: CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfo;
  readonly pangle_campaign_quota_info?: CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfo;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfo {
  readonly total_campaign_quota_info?: CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfoTotalCampaignQuotaInfo;
  readonly campaign_quota_by_adv?: ReadonlyArray<CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfoCampaignQuotaByAdv>;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfoCampaignQuotaByAdv {
  readonly used_campaign_quota?: number;
  readonly releasing_campaign_quota?: number;
  readonly advertiser_id?: string;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoPangleCampaignQuotaInfoTotalCampaignQuotaInfo {
  readonly total_campaign_quota?: number;
  readonly used_campaign_quota?: number;
  readonly releasing_campaign_quota?: number;
  readonly available_campaign_quota?: number;
  readonly used_campaign_ids?: ReadonlyArray<string>;
  readonly releasing_campaign_ids?: ReadonlyArray<string>;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfo {
  readonly total_campaign_quota_info?: CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfoTotalCampaignQuotaInfo;
  readonly campaign_quota_by_adv?: ReadonlyArray<CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfoCampaignQuotaByAdv>;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfoCampaignQuotaByAdv {
  readonly used_campaign_quota?: number;
  readonly releasing_campaign_quota?: number;
  readonly advertiser_id?: string;
}

export interface CampaignQuotaInfoResponseCampaignQuotaInfoTiktokCampaignQuotaInfoTotalCampaignQuotaInfo {
  readonly total_campaign_quota?: number;
  readonly used_campaign_quota?: number;
  readonly releasing_campaign_quota?: number;
  readonly available_campaign_quota?: number;
  readonly used_campaign_ids?: ReadonlyArray<string>;
  readonly releasing_campaign_ids?: ReadonlyArray<string>;
}

export interface CampaignQuotaInfoResponseSplitTestQuota {
  readonly max_test_number?: number;
  readonly available_test_group?: number;
  readonly used_test_group?: number;
  readonly releasing_test_group?: number;
  readonly used_quota?: number;
  readonly releasing_quota?: number;
}

export interface CampaignSpcCreateParams {
  readonly advertiser_id: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly objective_type: string;
  readonly spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  readonly web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  readonly app_promotion_type?: string;
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "WEB_AND_APP";
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly campaign_name: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly product_source?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly promotion_type: string;
  readonly app_id?: string;
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly app_config?: ReadonlyArray<CampaignSpcCreateParamsAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly bid_type?: "BID_TYPE_NO_BID" | "BID_TYPE_CUSTOM";
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event: string;
  readonly location_ids: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly spc_audience_age?: string;
  readonly exclude_age_under_eighteen?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly placement_type?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget: number;
  readonly schedule_type: string;
  readonly schedule_start_time: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly media_info_list: ReadonlyArray<CampaignSpcCreateParamsMediaInfoList>;
  readonly dark_post_status?: "ON" | "OFF";
  readonly catalog_creative_toggle?: boolean;
  readonly title_list?: ReadonlyArray<CampaignSpcCreateParamsTitleList>;
  readonly call_to_action_id?: string;
  readonly call_to_action_list?: ReadonlyArray<CampaignSpcCreateParamsCallToActionList>;
  readonly product_info?: CampaignSpcCreateParamsProductInfo;
  readonly card_list?: ReadonlyArray<CampaignSpcCreateParamsCardList>;
  readonly automatic_add_on_enabled?: boolean;
  readonly page_list?: ReadonlyArray<CampaignSpcCreateParamsPageList>;
  readonly deeplink?: string;
  readonly deeplink_type?: string;
  readonly landing_page_urls?: ReadonlyArray<CampaignSpcCreateParamsLandingPageUrls>;
  readonly utm_params?: ReadonlyArray<CampaignSpcCreateParamsUtmParams>;
  readonly disclaimer_info?: CampaignSpcCreateParamsDisclaimerInfo;
  readonly tracking_app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly app_tracking_info_list?: ReadonlyArray<CampaignSpcCreateParamsAppTrackingInfoList>;
}

export interface CampaignSpcCreateParamsAppConfig {
  readonly app_id?: string;
}

export interface CampaignSpcCreateParamsAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface CampaignSpcCreateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignSpcCreateParamsCardList {
  readonly card_id?: string;
}

export interface CampaignSpcCreateParamsDisclaimerInfo {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: CampaignSpcCreateParamsDisclaimerInfoDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<CampaignSpcCreateParamsDisclaimerInfoDisclaimerClickableTexts>;
}

export interface CampaignSpcCreateParamsDisclaimerInfoDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface CampaignSpcCreateParamsDisclaimerInfoDisclaimerText {
  readonly text?: string;
}

export interface CampaignSpcCreateParamsLandingPageUrls {
  readonly landing_page_url?: string;
  readonly video_id?: string;
  readonly tiktok_item_id?: string;
}

export interface CampaignSpcCreateParamsMediaInfoList {
  readonly media_info: CampaignSpcCreateParamsMediaInfoListMediaInfo;
}

export interface CampaignSpcCreateParamsMediaInfoListMediaInfo {
  readonly video_info?: CampaignSpcCreateParamsMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<CampaignSpcCreateParamsMediaInfoListMediaInfoImageInfo>;
  readonly music_info?: CampaignSpcCreateParamsMediaInfoListMediaInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface CampaignSpcCreateParamsMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
}

export interface CampaignSpcCreateParamsMediaInfoListMediaInfoMusicInfo {
  readonly music_id?: string;
}

export interface CampaignSpcCreateParamsMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignSpcCreateParamsPageList {
  readonly page_id?: string;
}

export interface CampaignSpcCreateParamsProductInfo {
  readonly promo_info_list?: ReadonlyArray<CampaignSpcCreateParamsProductInfoPromoInfoList>;
}

export interface CampaignSpcCreateParamsProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface CampaignSpcCreateParamsTitleList {
  readonly title?: string;
}

export interface CampaignSpcCreateParamsUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface CampaignSpcCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly campaign_secondary_status?: string;
  readonly is_smart_performance_campaign?: boolean;
  readonly objective_type?: string;
  readonly spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  readonly web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  readonly app_promotion_type?: string;
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly adgroup_secondary_status?: string;
  readonly product_source?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly app_type?: string;
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly app_config?: ReadonlyArray<CampaignSpcCreateResponseAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly spc_audience_age?: string;
  readonly exclude_age_under_eighteen?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly placement_type?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly skip_learning_phase?: boolean;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly app_download_url?: string;
  readonly app_name?: string;
  readonly media_info_list?: ReadonlyArray<CampaignSpcCreateResponseMediaInfoList>;
  readonly dark_post_status?: "ON" | "OFF";
  readonly catalog_creative_toggle?: boolean;
  readonly title_list?: ReadonlyArray<CampaignSpcCreateResponseTitleList>;
  readonly call_to_action_id?: string;
  readonly call_to_action_list?: ReadonlyArray<CampaignSpcCreateResponseCallToActionList>;
  readonly product_info?: CampaignSpcCreateResponseProductInfo;
  readonly card_list?: ReadonlyArray<CampaignSpcCreateResponseCardList>;
  readonly automatic_add_on_enabled?: boolean;
  readonly page_list?: ReadonlyArray<CampaignSpcCreateResponsePageList>;
  readonly deeplink?: string;
  readonly deeplink_type?: string;
  readonly landing_page_urls?: ReadonlyArray<CampaignSpcCreateResponseLandingPageUrls>;
  readonly utm_params?: ReadonlyArray<CampaignSpcCreateResponseUtmParams>;
  readonly disclaimer_info?: CampaignSpcCreateResponseDisclaimerInfo;
  readonly tracking_app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly app_tracking_info_list?: ReadonlyArray<CampaignSpcCreateResponseAppTrackingInfoList>;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface CampaignSpcCreateResponseAppConfig {
  readonly app_id?: string;
}

export interface CampaignSpcCreateResponseAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface CampaignSpcCreateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignSpcCreateResponseCardList {
  readonly card_id?: string;
}

export interface CampaignSpcCreateResponseDisclaimerInfo {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: CampaignSpcCreateResponseDisclaimerInfoDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<CampaignSpcCreateResponseDisclaimerInfoDisclaimerClickableTexts>;
}

export interface CampaignSpcCreateResponseDisclaimerInfoDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface CampaignSpcCreateResponseDisclaimerInfoDisclaimerText {
  readonly text?: string;
}

export interface CampaignSpcCreateResponseLandingPageUrls {
  readonly landing_page_url?: string;
  readonly video_id?: string;
  readonly tiktok_item_id?: string;
}

export interface CampaignSpcCreateResponseMediaInfoList {
  readonly media_info?: CampaignSpcCreateResponseMediaInfoListMediaInfo;
}

export interface CampaignSpcCreateResponseMediaInfoListMediaInfo {
  readonly video_info?: CampaignSpcCreateResponseMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<CampaignSpcCreateResponseMediaInfoListMediaInfoImageInfo>;
  readonly music_info?: CampaignSpcCreateResponseMediaInfoListMediaInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
}

export interface CampaignSpcCreateResponseMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
}

export interface CampaignSpcCreateResponseMediaInfoListMediaInfoMusicInfo {
  readonly music_id?: string;
}

export interface CampaignSpcCreateResponseMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignSpcCreateResponsePageList {
  readonly page_id?: string;
}

export interface CampaignSpcCreateResponseProductInfo {
  readonly promo_info_list?: ReadonlyArray<CampaignSpcCreateResponseProductInfoPromoInfoList>;
}

export interface CampaignSpcCreateResponseProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: string;
  readonly discount_currency?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface CampaignSpcCreateResponseTitleList {
  readonly title?: string;
}

export interface CampaignSpcCreateResponseUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface CampaignSpcGetParams {
  readonly advertiser_id: string;
  readonly campaign_ids: ReadonlyArray<string>;
}

export interface CampaignSpcGetResponse {
  readonly list?: ReadonlyArray<CampaignSpcGetResponseList>;
}

export interface CampaignSpcGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly campaign_secondary_status?: string;
  readonly is_smart_performance_campaign?: boolean;
  readonly objective_type?: string;
  readonly spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  readonly web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  readonly app_promotion_type?: string;
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly adgroup_secondary_status?: string;
  readonly product_source?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly app_type?: string;
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly app_config?: ReadonlyArray<CampaignSpcGetResponseListAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly spc_audience_age?: "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  readonly exclude_age_under_eighteen?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly placement_type?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly skip_learning_phase?: boolean;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly app_download_url?: string;
  readonly app_name?: string;
  readonly media_info_list?: ReadonlyArray<CampaignSpcGetResponseListMediaInfoList>;
  readonly dark_post_status?: "ON" | "OFF";
  readonly catalog_creative_toggle?: boolean;
  readonly title_list?: ReadonlyArray<CampaignSpcGetResponseListTitleList>;
  readonly call_to_action_id?: string;
  readonly call_to_action_list?: ReadonlyArray<CampaignSpcGetResponseListCallToActionList>;
  readonly product_info?: CampaignSpcGetResponseListProductInfo;
  readonly card_list?: ReadonlyArray<CampaignSpcGetResponseListCardList>;
  readonly automatic_add_on_enabled?: boolean;
  readonly page_list?: ReadonlyArray<CampaignSpcGetResponseListPageList>;
  readonly deeplink?: string;
  readonly deeplink_type?: string;
  readonly landing_page_urls?: ReadonlyArray<CampaignSpcGetResponseListLandingPageUrls>;
  readonly utm_params?: ReadonlyArray<CampaignSpcGetResponseListUtmParams>;
  readonly disclaimer_info?: CampaignSpcGetResponseListDisclaimerInfo;
  readonly tracking_app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly app_tracking_info_list?: ReadonlyArray<CampaignSpcGetResponseListAppTrackingInfoList>;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface CampaignSpcGetResponseListAppConfig {
  readonly app_id?: string;
}

export interface CampaignSpcGetResponseListAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface CampaignSpcGetResponseListCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignSpcGetResponseListCardList {
  readonly card_id?: string;
}

export interface CampaignSpcGetResponseListDisclaimerInfo {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: CampaignSpcGetResponseListDisclaimerInfoDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<CampaignSpcGetResponseListDisclaimerInfoDisclaimerClickableTexts>;
}

export interface CampaignSpcGetResponseListDisclaimerInfoDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface CampaignSpcGetResponseListDisclaimerInfoDisclaimerText {
  readonly text?: string;
}

export interface CampaignSpcGetResponseListLandingPageUrls {
  readonly landing_page_url?: string;
  readonly video_id?: string;
  readonly tiktok_item_id?: string;
}

export interface CampaignSpcGetResponseListMediaInfoList {
  readonly ad_material_id?: string;
  readonly material_operation_status?: "DISABLE" | "ENABLE";
  readonly media_info?: CampaignSpcGetResponseListMediaInfoListMediaInfo;
}

export interface CampaignSpcGetResponseListMediaInfoListMediaInfo {
  readonly image_info?: ReadonlyArray<CampaignSpcGetResponseListMediaInfoListMediaInfoImageInfo>;
  readonly video_info?: CampaignSpcGetResponseListMediaInfoListMediaInfoVideoInfo;
  readonly music_info?: CampaignSpcGetResponseListMediaInfoListMediaInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface CampaignSpcGetResponseListMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
}

export interface CampaignSpcGetResponseListMediaInfoListMediaInfoMusicInfo {
  readonly music_id?: string;
}

export interface CampaignSpcGetResponseListMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignSpcGetResponseListPageList {
  readonly page_id?: string;
}

export interface CampaignSpcGetResponseListProductInfo {
  readonly promo_info_list?: ReadonlyArray<CampaignSpcGetResponseListProductInfoPromoInfoList>;
}

export interface CampaignSpcGetResponseListProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: string;
  readonly discount_currency?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface CampaignSpcGetResponseListTitleList {
  readonly title?: string;
}

export interface CampaignSpcGetResponseListUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface CampaignSpcMaterialStatusUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly ad_material_ids: ReadonlyArray<string>;
  readonly material_status: "DISABLE" | "ENABLE";
}

export interface CampaignSpcMaterialStatusUpdateResponse {
  readonly campaign_id?: string;
  readonly ad_material_ids?: ReadonlyArray<string>;
  readonly material_status?: "DISABLE" | "ENABLE";
}

export interface CampaignSpcQuotaGetParams {
  readonly advertiser_id: string;
}

export interface CampaignSpcQuotaGetResponse {
  readonly total_quota?: number;
  readonly used_quota?: number;
  readonly used_campaign_ids?: ReadonlyArray<string>;
}

export interface CampaignSpcUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly roas_bid?: number;
  readonly location_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly spc_audience_age?: string;
  readonly exclude_age_under_eighteen?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly identity_id?: string;
  readonly media_info_list?: ReadonlyArray<CampaignSpcUpdateParamsMediaInfoList>;
  readonly dark_post_status?: "ON" | "OFF";
  readonly catalog_creative_toggle?: boolean;
  readonly title_list?: ReadonlyArray<CampaignSpcUpdateParamsTitleList>;
  readonly call_to_action_id?: string;
  readonly call_to_action_list?: ReadonlyArray<CampaignSpcUpdateParamsCallToActionList>;
  readonly product_info?: CampaignSpcUpdateParamsProductInfo;
  readonly card_list?: ReadonlyArray<CampaignSpcUpdateParamsCardList>;
  readonly page_list?: ReadonlyArray<CampaignSpcUpdateParamsPageList>;
  readonly deeplink_type?: string;
  readonly deeplink?: string;
  readonly landing_page_urls?: ReadonlyArray<CampaignSpcUpdateParamsLandingPageUrls>;
  readonly utm_params?: ReadonlyArray<CampaignSpcUpdateParamsUtmParams>;
  readonly disclaimer_info?: CampaignSpcUpdateParamsDisclaimerInfo;
  readonly tracking_app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface CampaignSpcUpdateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignSpcUpdateParamsCardList {
  readonly card_id?: string;
}

export interface CampaignSpcUpdateParamsDisclaimerInfo {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: CampaignSpcUpdateParamsDisclaimerInfoDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<CampaignSpcUpdateParamsDisclaimerInfoDisclaimerClickableTexts>;
}

export interface CampaignSpcUpdateParamsDisclaimerInfoDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface CampaignSpcUpdateParamsDisclaimerInfoDisclaimerText {
  readonly text?: string;
}

export interface CampaignSpcUpdateParamsLandingPageUrls {
  readonly landing_page_url?: string;
  readonly video_id?: string;
  readonly tiktok_item_id?: string;
}

export interface CampaignSpcUpdateParamsMediaInfoList {
  readonly media_info?: CampaignSpcUpdateParamsMediaInfoListMediaInfo;
}

export interface CampaignSpcUpdateParamsMediaInfoListMediaInfo {
  readonly video_info?: CampaignSpcUpdateParamsMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<CampaignSpcUpdateParamsMediaInfoListMediaInfoImageInfo>;
  readonly music_info?: CampaignSpcUpdateParamsMediaInfoListMediaInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface CampaignSpcUpdateParamsMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
}

export interface CampaignSpcUpdateParamsMediaInfoListMediaInfoMusicInfo {
  readonly music_id?: string;
}

export interface CampaignSpcUpdateParamsMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignSpcUpdateParamsPageList {
  readonly page_id?: string;
}

export interface CampaignSpcUpdateParamsProductInfo {
  readonly promo_info_list?: ReadonlyArray<CampaignSpcUpdateParamsProductInfoPromoInfoList>;
}

export interface CampaignSpcUpdateParamsProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface CampaignSpcUpdateParamsTitleList {
  readonly title?: string;
}

export interface CampaignSpcUpdateParamsUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface CampaignSpcUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly campaign_secondary_status?: string;
  readonly is_smart_performance_campaign?: boolean;
  readonly objective_type?: string;
  readonly spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  readonly web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  readonly app_promotion_type?: string;
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly adgroup_secondary_status?: string;
  readonly product_source?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly app_type?: string;
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly optimization_event?: string;
  readonly app_config?: ReadonlyArray<CampaignSpcUpdateResponseAppConfig>;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly spc_audience_age?: "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  readonly exclude_age_under_eighteen?: boolean;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly placement_type?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly scheduled_budget?: number;
  readonly schedule_type?: string;
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly skip_learning_phase?: boolean;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly app_download_url?: string;
  readonly app_name?: string;
  readonly media_info_list?: ReadonlyArray<CampaignSpcUpdateResponseMediaInfoList>;
  readonly dark_post_status?: "ON" | "OFF";
  readonly catalog_creative_toggle?: boolean;
  readonly title_list?: ReadonlyArray<CampaignSpcUpdateResponseTitleList>;
  readonly call_to_action_id?: string;
  readonly call_to_action_list?: ReadonlyArray<CampaignSpcUpdateResponseCallToActionList>;
  readonly product_info?: CampaignSpcUpdateResponseProductInfo;
  readonly card_list?: ReadonlyArray<CampaignSpcUpdateResponseCardList>;
  readonly automatic_add_on_enabled?: boolean;
  readonly page_list?: ReadonlyArray<CampaignSpcUpdateResponsePageList>;
  readonly deeplink?: string;
  readonly deeplink_type?: string;
  readonly landing_page_urls?: ReadonlyArray<CampaignSpcUpdateResponseLandingPageUrls>;
  readonly utm_params?: ReadonlyArray<CampaignSpcUpdateResponseUtmParams>;
  readonly disclaimer_info?: CampaignSpcUpdateResponseDisclaimerInfo;
  readonly tracking_app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly app_tracking_info_list?: ReadonlyArray<CampaignSpcUpdateResponseAppTrackingInfoList>;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface CampaignSpcUpdateResponseAppConfig {
  readonly app_id?: string;
}

export interface CampaignSpcUpdateResponseAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface CampaignSpcUpdateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface CampaignSpcUpdateResponseCardList {
  readonly card_id?: string;
}

export interface CampaignSpcUpdateResponseDisclaimerInfo {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: CampaignSpcUpdateResponseDisclaimerInfoDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<CampaignSpcUpdateResponseDisclaimerInfoDisclaimerClickableTexts>;
}

export interface CampaignSpcUpdateResponseDisclaimerInfoDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface CampaignSpcUpdateResponseDisclaimerInfoDisclaimerText {
  readonly text?: string;
}

export interface CampaignSpcUpdateResponseLandingPageUrls {
  readonly landing_page_url?: string;
  readonly video_id?: string;
  readonly tiktok_item_id?: string;
}

export interface CampaignSpcUpdateResponseMediaInfoList {
  readonly media_info?: CampaignSpcUpdateResponseMediaInfoListMediaInfo;
}

export interface CampaignSpcUpdateResponseMediaInfoListMediaInfo {
  readonly video_info?: CampaignSpcUpdateResponseMediaInfoListMediaInfoVideoInfo;
  readonly image_info?: ReadonlyArray<CampaignSpcUpdateResponseMediaInfoListMediaInfoImageInfo>;
  readonly music_info?: CampaignSpcUpdateResponseMediaInfoListMediaInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface CampaignSpcUpdateResponseMediaInfoListMediaInfoImageInfo {
  readonly web_uri?: string;
}

export interface CampaignSpcUpdateResponseMediaInfoListMediaInfoMusicInfo {
  readonly music_id?: string;
}

export interface CampaignSpcUpdateResponseMediaInfoListMediaInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface CampaignSpcUpdateResponsePageList {
  readonly page_id?: string;
}

export interface CampaignSpcUpdateResponseProductInfo {
  readonly promo_info_list?: ReadonlyArray<CampaignSpcUpdateResponseProductInfoPromoInfoList>;
}

export interface CampaignSpcUpdateResponseProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: string;
  readonly discount_currency?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface CampaignSpcUpdateResponseTitleList {
  readonly title?: string;
}

export interface CampaignSpcUpdateResponseUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface CampaignStatusUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_ids: ReadonlyArray<string>;
  readonly operation_status: string;
  readonly postback_window_mode?: string;
}

export interface CampaignStatusUpdateResponse {
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly status?: string;
  readonly campaign_list?: ReadonlyArray<CampaignStatusUpdateResponseCampaignList>;
}

export interface CampaignStatusUpdateResponseCampaignList {
  readonly campaign_id?: string;
  readonly status?: "DELETE" | "DISABLE" | "ENABLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}

export interface CampaignUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget?: number;
  readonly po_number?: string;
}

export interface CampaignUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "APP_POSTS_PROMOTION";
  readonly virtual_objective_type?: string;
  readonly sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly is_search_campaign?: boolean;
  readonly is_smart_performance_campaign?: boolean;
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly app_id?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
  readonly campaign_product_source?: "CATALOG" | "STORE";
  readonly catalog_enabled?: boolean;
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly bid_type?: string;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly optimization_goal?: string;
  readonly budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget?: number;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly is_new_structure?: boolean;
  readonly objective?: "APP" | "LANDING_PAGE";
  readonly po_number?: string;
}

export interface CatalogAvailableCountryGetParams {
  readonly bc_id: string;
}

export interface CatalogAvailableCountryGetResponse {
  readonly region_codes?: ReadonlyArray<string>;
}

export interface CatalogCapitalizeParams {
  readonly bc_id: string;
  readonly advertiser_id: string;
  readonly catalog_id: string;
}

export interface CatalogCapitalizeResponse {
  readonly code?: number;
  readonly message?: string;
  readonly request_id?: string;
}

export interface CatalogCreateParams {
  readonly bc_id: string;
  readonly name: string;
  readonly catalog_type: "ECOM" | "HOTEL" | "FLIGHT" | "DESTINATION" | "ENTERTAINMENT" | "AUTO_VEHICLE" | "AUTO_MODEL" | "MINI_SERIES";
  readonly catalog_conf: CatalogCreateParamsCatalogConf;
}

export interface CatalogCreateParamsCatalogConf {
  readonly region_code: string;
  readonly currency: string;
  readonly channel?: "PARTNER" | "CLIENT";
  readonly additional_config_list?: ReadonlyArray<CatalogCreateParamsCatalogConfAdditionalConfigList>;
}

export interface CatalogCreateParamsCatalogConfAdditionalConfigList {
  readonly region_code?: string;
  readonly currency?: string;
}

export interface CatalogCreateResponse {

}

export interface CatalogDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
}

export interface CatalogDeleteResponse {

}

export interface CatalogEventsourceBindGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
}

export interface CatalogEventsourceBindGetResponse {
  readonly catalog_id?: number;
  readonly event_sources?: ReadonlyArray<CatalogEventsourceBindGetResponseEventSources>;
}

export interface CatalogEventsourceBindGetResponseEventSources {
  readonly event_source_name?: string;
  readonly app_id?: string;
  readonly pixel_code?: string;
}

export interface CatalogEventsourceBindParams {
  readonly advertiser_id: string;
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly app_id?: string;
  readonly pixel_code?: string;
}

export interface CatalogEventsourceBindResponse {
  readonly code?: number;
  readonly message?: string;
}

export interface CatalogEventsourceUnbindParams {
  readonly advertiser_id: string;
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly app_id?: string;
  readonly pixel_code?: string;
}

export interface CatalogEventsourceUnbindResponse {
  readonly code?: number;
  readonly message?: string;
}

export interface CatalogFeedCreateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_name: string;
  readonly update_mode: "OVERWRITE" | "INCREMENTAL";
  readonly schedule_param?: CatalogFeedCreateParamsScheduleParam;
}

export interface CatalogFeedCreateParamsScheduleParam {
  readonly source?: CatalogFeedCreateParamsScheduleParamSource;
  readonly interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  readonly interval_count?: number;
  readonly timezone?: string;
  readonly day_of_month?: number;
  readonly hour?: number;
  readonly minute?: number;
}

export interface CatalogFeedCreateParamsScheduleParamSource {
  readonly uri?: string;
  readonly username?: string;
  readonly password?: string;
}

export interface CatalogFeedCreateResponse {
  readonly feed_id?: string;
  readonly feed_name?: string;
  readonly status?: "ON" | "OFF";
  readonly last_update_param?: CatalogFeedCreateResponseLastUpdateParam;
  readonly next_update_time?: string;
  readonly number_of_products?: number;
}

export interface CatalogFeedCreateResponseLastUpdateParam {
  readonly uri?: string;
  readonly update_mode?: "OVERWRITE" | "INCREMENTAL";
  readonly timezone?: string;
  readonly interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  readonly interval_count?: number;
  readonly day_of_month?: number;
  readonly hour?: number;
  readonly minute?: number;
}

export interface CatalogFeedDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id: string;
}

export interface CatalogFeedDeleteResponse {
  readonly feed_id?: number;
}

export interface CatalogFeedGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id?: string;
}

export interface CatalogFeedGetResponse {
  readonly feed_list?: ReadonlyArray<CatalogFeedGetResponseFeedList>;
}

export interface CatalogFeedGetResponseFeedList {
  readonly feed_id?: string;
  readonly feed_name?: string;
  readonly status?: "ON" | "OFF";
  readonly last_update_param?: CatalogFeedGetResponseFeedListLastUpdateParam;
  readonly next_update_time?: string;
  readonly number_of_products?: number;
}

export interface CatalogFeedGetResponseFeedListLastUpdateParam {
  readonly uri?: string;
  readonly update_mode?: "OVERWRITE" | "INCREMENTAL";
  readonly timezone?: string;
  readonly interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  readonly interval_count?: number;
  readonly day_of_month?: number;
  readonly hour?: number;
  readonly minute?: number;
}

export interface CatalogFeedLogParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id: string;
}

export interface CatalogFeedLogResponse {
  readonly feed_logs?: ReadonlyArray<CatalogFeedLogResponseFeedLogs>;
}

export interface CatalogFeedLogResponseFeedLogs {
  readonly update_status?: CatalogFeedLogResponseFeedLogsUpdateStatus;
  readonly update_time?: CatalogFeedLogResponseFeedLogsUpdateTime;
}

export interface CatalogFeedLogResponseFeedLogsUpdateStatus {
  readonly add_count?: number;
  readonly error_count?: number;
  readonly remove_count?: number;
  readonly process_status?: "PROCESSING" | "SUCCESS" | "FAILED" | "WAITING";
  readonly update_count?: number;
  readonly warn_count?: number;
}

export interface CatalogFeedLogResponseFeedLogsUpdateTime {
  readonly end_time?: string;
  readonly start_time?: string;
}

export interface CatalogFeedSwitchParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id: string;
  readonly status: "ON" | "OFF";
}

export interface CatalogFeedSwitchResponse {

}

export interface CatalogFeedUpdateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id: string;
  readonly update_mode: "OVERWRITE" | "INCREMENTAL" | "SUPPLEMENT";
  readonly schedule_param?: CatalogFeedUpdateParamsScheduleParam;
}

export interface CatalogFeedUpdateParamsScheduleParam {
  readonly source?: CatalogFeedUpdateParamsScheduleParamSource;
  readonly interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  readonly interval_count?: number;
  readonly timezone?: string;
  readonly day_of_month?: number;
  readonly hour?: number;
  readonly minute?: number;
}

export interface CatalogFeedUpdateParamsScheduleParamSource {
  readonly uri?: string;
  readonly username?: string;
  readonly password?: string;
}

export interface CatalogFeedUpdateResponse {
  readonly feed_id?: string;
  readonly feed_name?: string;
  readonly status?: "ON" | "OFF";
  readonly last_update_param?: CatalogFeedUpdateResponseLastUpdateParam;
  readonly next_update_time?: string;
  readonly number_of_products?: number;
}

export interface CatalogFeedUpdateResponseLastUpdateParam {
  readonly uri?: string;
  readonly update_mode?: "OVERWRITE" | "INCREMENTAL" | "SUPPLEMENT";
  readonly timezone?: string;
  readonly interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  readonly interval_count?: number;
  readonly day_of_month?: number;
  readonly hour?: number;
  readonly minute?: number;
}

export interface CatalogGetParams {
  readonly bc_id: string;
  readonly catalog_id?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CatalogGetResponse {
  readonly list?: ReadonlyArray<CatalogGetResponseList>;
  readonly page_info?: CatalogGetResponsePageInfo;
}

export interface CatalogGetResponseList {
  readonly catalog_id?: string;
  readonly catalog_name?: string;
  readonly catalog_type?: "ECOM" | "HOTEL" | "FLIGHT" | "DESTINATION" | "ENTERTAINMENT" | "AUTO_VEHICLE" | "AUTO_MODEL" | "MINI_SERIES";
  readonly ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  readonly create_time?: string;
  readonly update_time?: string;
  readonly bc_info?: CatalogGetResponseListBcInfo;
  readonly catalog_conf?: CatalogGetResponseListCatalogConf;
}

export interface CatalogGetResponseListBcInfo {
  readonly bc_id?: string;
  readonly bc_name?: string;
  readonly picture_url?: string;
}

export interface CatalogGetResponseListCatalogConf {
  readonly country?: string;
  readonly currency?: string;
  readonly channel?: "PARTNER" | "CLIENT";
  readonly additional_config_list?: ReadonlyArray<CatalogGetResponseListCatalogConfAdditionalConfigList>;
}

export interface CatalogGetResponseListCatalogConfAdditionalConfigList {
  readonly region_code?: string;
  readonly currency?: string;
}

export interface CatalogGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CatalogInsightCategoryGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly filtering?: CatalogInsightCategoryGetParamsFiltering;
}

export interface CatalogInsightCategoryGetParamsFiltering {
  readonly category_ids?: ReadonlyArray<string>;
}

export interface CatalogInsightCategoryGetResponse {
  readonly category_insights?: ReadonlyArray<CatalogInsightCategoryGetResponseCategoryInsights>;
}

export interface CatalogInsightCategoryGetResponseCategoryInsights {
  readonly category_id?: string;
  readonly level_info?: CatalogInsightCategoryGetResponseCategoryInsightsLevelInfo;
  readonly total_product_count?: number;
  readonly product_availability_rate?: number;
}

export interface CatalogInsightCategoryGetResponseCategoryInsightsLevelInfo {
  readonly level_id_1?: string;
  readonly level_name_1?: string;
  readonly level_id_2?: string;
  readonly level_name_3?: string;
  readonly level_id_3?: string;
}

export interface CatalogInsightFilterGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly filter_type: "CATEGORY_ID" | "BRAND" | "AVAILABILITY";
  readonly page?: number;
  readonly page_size?: number;
}

export interface CatalogInsightFilterGetResponse {
  readonly brands?: ReadonlyArray<string>;
  readonly availabilities?: ReadonlyArray<string>;
  readonly categories?: ReadonlyArray<CatalogInsightFilterGetResponseCategories>;
}

export interface CatalogInsightFilterGetResponseCategories {
  readonly category_id?: string;
  readonly level_info?: CatalogInsightFilterGetResponseCategoriesLevelInfo;
}

export interface CatalogInsightFilterGetResponseCategoriesLevelInfo {
  readonly level_id_1?: string;
  readonly level_name_1?: string;
  readonly level_id_2?: string;
  readonly level_name_2?: string;
  readonly level_id_3?: string;
  readonly level_name_3?: string;
}

export interface CatalogInsightProductGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly filtering?: CatalogInsightProductGetParamsFiltering;
}

export interface CatalogInsightProductGetParamsFiltering {
  readonly category_ids?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly availabilities?: ReadonlyArray<"IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER" | "OUT_OF_STOCK" | "DISCONTINUED">;
}

export interface CatalogInsightProductGetResponse {
  readonly product_insights?: ReadonlyArray<CatalogInsightProductGetResponseProductInsights>;
}

export interface CatalogInsightProductGetResponseProductInsights {
  readonly product_id?: string;
  readonly image_url?: string;
  readonly title?: string;
  readonly description?: string;
  readonly sku_id?: string;
  readonly category_info?: CatalogInsightProductGetResponseProductInsightsCategoryInfo;
  readonly brand?: string;
  readonly price?: CatalogInsightProductGetResponseProductInsightsPrice;
  readonly availability?: "IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER" | "OUT_OF_STOCK" | "DISCONTINUED";
}

export interface CatalogInsightProductGetResponseProductInsightsCategoryInfo {
  readonly category_id?: string;
  readonly level_info?: CatalogInsightProductGetResponseProductInsightsCategoryInfoLevelInfo;
}

export interface CatalogInsightProductGetResponseProductInsightsCategoryInfoLevelInfo {
  readonly level_id_1?: string;
  readonly level_name_1?: string;
  readonly level_id_2?: string;
  readonly level_name_2?: string;
  readonly level_id_3?: string;
  readonly level_name_3?: string;
}

export interface CatalogInsightProductGetResponseProductInsightsPrice {
  readonly price?: number;
  readonly currency?: string;
  readonly sale_price?: number;
  readonly sale_price_effective_date?: ReadonlyArray<string>;
}

export interface CatalogLexiconGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
}

export interface CatalogLexiconGetResponse {

}

export interface CatalogLocationCurrencyGetParams {

}

export interface CatalogLocationCurrencyGetResponse {
  readonly list?: ReadonlyArray<CatalogLocationCurrencyGetResponseList>;
}

export interface CatalogLocationCurrencyGetResponseList {
  readonly location?: string;
  readonly currency?: ReadonlyArray<string>;
}

export interface CatalogOverviewParams {
  readonly bc_id: string;
  readonly catalog_id: string;
}

export interface CatalogOverviewResponse {
  readonly approved?: number;
  readonly rejected?: number;
  readonly processing?: number;
  readonly organic_approved?: number;
  readonly organic_rejected?: number;
  readonly organic_processing?: number;
}

export interface CatalogProductDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly hotel_ids?: ReadonlyArray<string>;
  readonly flight_ids?: ReadonlyArray<string>;
  readonly destination_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly series_ids?: ReadonlyArray<string>;
  readonly feed_id?: string;
}

export interface CatalogProductDeleteResponse {

}

export interface CatalogProductFileParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id?: string;
  readonly file_url: string;
  readonly update_mode?: "OVERWRITE" | "INCREMENTAL";
}

export interface CatalogProductFileResponse {
  readonly feed_log_id?: string;
}

export interface CatalogProductGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly page?: number;
  readonly page_size?: number;
  readonly product_ids?: ReadonlyArray<string>;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly product_set_ids?: ReadonlyArray<string>;
  readonly order?: CatalogProductGetParamsOrder;
  readonly conditions?: CatalogProductGetParamsConditions;
}

export interface CatalogProductGetParamsConditions {
  readonly "and / or"?: ReadonlyArray<CatalogProductGetParamsConditionsAndOr>;
}

export interface CatalogProductGetParamsConditionsAndOr {
  readonly field?: string;
  readonly operator?: "EQ" | "NE" | "GT" | "GTE" | "LT" | "LTE" | "RNG" | "WILDCARD" | "NOT_WILDCARD" | "PREFIX" | "EXIST" | "IN" | "NOT_IN";
  readonly values?: ReadonlyArray<string>;
  readonly case_senstive?: boolean;
}

export interface CatalogProductGetParamsOrder {
  readonly order_condition?: string;
  readonly custom_order?: ReadonlyArray<CatalogProductGetParamsOrderCustomOrder>;
}

export interface CatalogProductGetParamsOrderCustomOrder {
  readonly field?: string;
  readonly type?: "ASC" | "DES";
}

export interface CatalogProductGetResponse {
  readonly list?: ReadonlyArray<CatalogProductGetResponseList>;
  readonly page_info?: CatalogProductGetResponsePageInfo;
}

export interface CatalogProductGetResponseList {
  readonly audit?: CatalogProductGetResponseListAudit;
  readonly ad_creation_eligible?: "AVAILABLE" | "NOT_AVAILABLE" | "ACTIVATED" | "IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER";
  readonly active_status?: "ACTIVATED" | "DEACTIVATED";
  readonly sku_id?: string;
  readonly product_id?: string;
  readonly title?: string;
  readonly description?: string;
  readonly availability?: string;
  readonly image_url?: string;
  readonly video_url?: string;
  readonly brand?: string;
  readonly additional_image_urls?: ReadonlyArray<string>;
  readonly item_group_id?: string;
  readonly google_product_category?: string;
  readonly global_trade_item_number?: string;
  readonly manufacturer_part_number?: string;
  readonly hotel_id?: string;
  readonly name?: string;
  readonly hotel_category?: ReadonlyArray<string>;
  readonly hotel_retailer_id?: string;
  readonly address?: CatalogProductGetResponseListAddress;
  readonly neighborhood?: string;
  readonly postal_code?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly series_id?: string;
  readonly series_name?: string;
  readonly target_config?: CatalogProductGetResponseListTargetConfig;
  readonly recharge?: ReadonlyArray<CatalogProductGetResponseListRecharge>;
  readonly margin_level?: string;
  readonly loyalty_program?: string;
  readonly guest_ratings?: ReadonlyArray<CatalogProductGetResponseListGuestRatings>;
  readonly star_rating?: number;
  readonly room_type?: ReadonlyArray<string>;
  readonly priority?: number;
  readonly flight_id?: string;
  readonly origin_airport?: string;
  readonly destination_airport?: string;
  readonly origin_city?: string;
  readonly destination_city?: string;
  readonly cabin_class?: "FIRST_CLASS" | "FIRST_CLASS_SUITE" | "BUSINESS_CLASS" | "BUSINESS_CLASS_SUITE" | "COMFORT_CLASS" | "ECONOMY_CLASS" | "BASIC_ECONOMY" | "STANDARD_ECONOMY" | "PREMIUM_ECONOMY" | "LIE_FLAT_SEAT" | "CHARTER_CLASS" | "ELITE_CLASS" | "QUIET_CLASS";
  readonly airline_company?: "AEROFLOT" | "AIR_FRANCE_KLM_GROUP" | "ALASKA_AIRLINES" | "ANA" | "AMERICAN_AIRLINES" | "BRITISH_AIRWAYS" | "CATHAY_PACIFIC" | "CHINA_SOUTHERN_AIRLINES" | "CHINA_EASTERN_AIRLINES" | "DELTA_AIR_LINES" | "EMIRATES" | "JAPAN_AIRLINES" | "JETBLUE_AIRWAYS" | "KLM_ROYAL_DUTCH_AIRLINES" | "LUFTHANSA_GROUP" | "QANTAS_AIRWAYS" | "QATAR_AIRWAYS" | "SINGAPORE_AIRLINES" | "SOUTHWEST_AIRLINES" | "TURKISH_AIRLINES" | "UNITED_AIRLINES" | "VIRGIN_ATLANTIC";
  readonly destination_id?: string;
  readonly destination_name?: string;
  readonly types?: ReadonlyArray<string>;
  readonly media_title_id?: string;
  readonly timeline?: "COMING_SOON" | "ONLINE" | "EXPIRE_SOON";
  readonly category?: "MOVIE" | "MUSIC" | "TV_SHOW" | "TV_SERIES" | "SPORTS_GAME" | "LIVE_EVENT";
  readonly genres?: ReadonlyArray<string>;
  readonly qid?: string;
  readonly vehicle_id?: string;
  readonly state_of_vehicle?: "NEW" | "USED" | "CPO";
  readonly vehicle_type?: "BOAT" | "CAR_TRUCK" | "COMMERCIAL" | "MOTORCYCLE" | "POWERSPORT" | "RV_CAMPER" | "TRAILER" | "OTHER";
  readonly make?: string;
  readonly model?: string;
  readonly trim?: string;
  readonly year?: number;
  readonly vin?: string;
  readonly mileage?: CatalogProductGetResponseListMileage;
  readonly body_style?: "CONVERTIBLE" | "COUPE" | "CROSSOVER" | "HATCHBACK" | "MINIVAN" | "SMALL_CAR" | "SEDAN" | "SUV" | "TRUCK" | "VAN" | "WAGON" | "OTHER";
  readonly exterior_color?: string;
  readonly interior_color?: string;
  readonly transmission?: "AUTOMATIC" | "MANUAL";
  readonly drivetrain?: "AWD" | "FWD" | "RWD" | "OTHER";
  readonly fuel_type?: "DIESEL" | "ELECTRIC" | "FLEX" | "GASOLINE" | "HYBRID" | "OTHER";
  readonly dealer?: CatalogProductGetResponseListDealer;
  readonly date_first_on_lot?: string;
  readonly days_on_lot?: number;
  readonly profession?: CatalogProductGetResponseListProfession;
  readonly price?: CatalogProductGetResponseListPrice;
  readonly landing_page?: CatalogProductGetResponseListLandingPage;
  readonly extra_info?: CatalogProductGetResponseListExtraInfo;
  readonly image_status?: "PROCESSING" | "SUCCESS" | "FAIL" | "FILTERED" | "NOT_SUPPORTED" | "NO_FOUND";
  readonly additional_product_list?: ReadonlyArray<CatalogProductGetResponseListAdditionalProductList>;
}

export interface CatalogProductGetResponseListAdditionalProductList {
  readonly audit?: CatalogProductGetResponseListAdditionalProductListAudit;
  readonly rejected_info?: ReadonlyArray<CatalogProductGetResponseListAdditionalProductListRejectedInfo>;
  readonly active_status?: "ACTIVATED" | "DEACTIVATED";
  readonly image_status?: "PROCESSING" | "SUCCESS" | "FAIL" | "FILTERED" | "NOT_SUPPORTED" | "NO_FOUND";
  readonly product_id?: string;
  readonly series_id?: string;
  readonly series_name?: string;
  readonly target_config?: CatalogProductGetResponseListAdditionalProductListTargetConfig;
  readonly image_url?: string;
  readonly recharge?: ReadonlyArray<CatalogProductGetResponseListAdditionalProductListRecharge>;
  readonly profession?: CatalogProductGetResponseListAdditionalProductListProfession;
  readonly video_url?: string;
  readonly additional_image_urls?: ReadonlyArray<string>;
  readonly global_trade_item_number?: string;
  readonly manufacturer_part_number?: string;
  readonly landing_page?: CatalogProductGetResponseListAdditionalProductListLandingPage;
  readonly extra_info?: CatalogProductGetResponseListAdditionalProductListExtraInfo;
}

export interface CatalogProductGetResponseListAdditionalProductListAudit {
  readonly audit_status?: string;
}

export interface CatalogProductGetResponseListAdditionalProductListExtraInfo {
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
}

export interface CatalogProductGetResponseListAdditionalProductListLandingPage {
  readonly landing_page_url?: string;
}

export interface CatalogProductGetResponseListAdditionalProductListProfession {
  readonly company_type?: "COPYRIGHT_HOLDER" | "DISTRIBUTOR";
  readonly copyright_holder_name?: string;
  readonly app_id?: string;
  readonly minis_id?: string;
  readonly total_episodes?: number;
  readonly initial_paid_episodes?: number;
  readonly per_episode_duration?: number;
  readonly spoken_language?: string;
  readonly subtitle_language?: string;
  readonly production_type?: "LOCAL" | "TRANSLATION";
  readonly target_audience?: "MALE" | "FEMALE" | "NEUTRAL";
  readonly characters?: ReadonlyArray<string>;
  readonly genres?: ReadonlyArray<string>;
  readonly historical_context?: ReadonlyArray<string>;
  readonly actors?: ReadonlyArray<string>;
}

export interface CatalogProductGetResponseListAdditionalProductListRecharge {
  readonly type?: "BY_TIERS" | "SUBSCRIPTION" | "BY_EPISODES";
  readonly purchase_unit?: ReadonlyArray<string>;
  readonly cost?: string;
}

export interface CatalogProductGetResponseListAdditionalProductListRejectedInfo {
  readonly reason?: string;
  readonly suggestion?: string;
  readonly affected_placement?: ReadonlyArray<string>;
  readonly affected_country?: ReadonlyArray<string>;
}

export interface CatalogProductGetResponseListAdditionalProductListTargetConfig {
  readonly region_code?: string;
  readonly currency?: string;
}

export interface CatalogProductGetResponseListAddress {
  readonly address?: string;
  readonly secondary_address?: string;
  readonly tertiary_address?: string;
  readonly city?: string;
  readonly region?: string;
  readonly country?: string;
  readonly postal_code?: string;
}

export interface CatalogProductGetResponseListAudit {
  readonly audit_status?: string;
  readonly rejected_info?: ReadonlyArray<CatalogProductGetResponseListAuditRejectedInfo>;
}

export interface CatalogProductGetResponseListAuditRejectedInfo {
  readonly reason?: string;
  readonly suggestion?: string;
  readonly affected_placement?: ReadonlyArray<string>;
  readonly affected_country?: ReadonlyArray<string>;
}

export interface CatalogProductGetResponseListDealer {
  readonly dealer_id?: string;
  readonly dealer_name?: string;
  readonly dealer_phone?: string;
  readonly stock_number?: string;
}

export interface CatalogProductGetResponseListExtraInfo {
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly internal_label_0?: string;
  readonly internal_label_1?: string;
}

export interface CatalogProductGetResponseListGuestRatings {
  readonly rating_system?: string;
  readonly max_score?: number;
  readonly score?: number;
  readonly number_of_reviewers?: number;
}

export interface CatalogProductGetResponseListLandingPage {
  readonly landing_page_url?: string;
  readonly ios_url?: string;
  readonly ios_app_store_id?: string;
  readonly ios_app_name?: string;
  readonly iphone_app_store_id?: string;
  readonly iphone_app_name?: string;
  readonly ipad_app_store_id?: string;
  readonly ipad_app_name?: string;
  readonly android_url?: string;
  readonly android_package?: string;
  readonly android_app_name?: string;
}

export interface CatalogProductGetResponseListMileage {
  readonly value?: number;
  readonly unit?: "MILE" | "KILOMETER";
}

export interface CatalogProductGetResponseListPrice {
  readonly price?: number;
  readonly currency?: string;
  readonly sale_price?: number;
  readonly sale_price_effective_date?: ReadonlyArray<string>;
}

export interface CatalogProductGetResponseListProfession {
  readonly age_group?: "NEW_BORN" | "INFANT" | "TODDLER" | "KIDS" | "ADULT";
  readonly color?: string;
  readonly condition?: string;
  readonly gender?: "MALE" | "FEMALE" | "UNISEX";
  readonly material?: string;
  readonly pattern?: string;
  readonly product_category?: string;
  readonly shipping?: string;
  readonly shipping_weight?: string;
  readonly size?: string;
  readonly tax?: string;
  readonly offer_type?: string;
  readonly term_length?: string;
  readonly offer_term_qualifier?: string;
  readonly amount_price?: string;
  readonly amount_percentage?: string;
  readonly amount_qualifier?: string;
  readonly downpayment?: string;
  readonly downpayment_qualifier?: string;
  readonly offer_disclaimer?: string;
  readonly offer_disclaimer_url?: string;
  readonly emission_disclaimer?: string;
  readonly emission_disclaimer_url?: string;
  readonly emission_overlay_disclaimer?: string;
  readonly emission_image_link?: string;
  readonly company_type?: "COPYRIGHT_HOLDER" | "DISTRIBUTOR";
  readonly copyright_holder_name?: string;
  readonly app_id?: string;
  readonly minis_id?: string;
  readonly total_episodes?: number;
  readonly initial_paid_episodes?: number;
  readonly per_episode_duration?: number;
  readonly spoken_language?: string;
  readonly subtitle_language?: string;
  readonly production_type?: "LOCAL" | "TRANSLATION";
  readonly target_audience?: "MALE" | "FEMALE" | "NEUTRAL";
  readonly characters?: ReadonlyArray<string>;
  readonly genres?: ReadonlyArray<string>;
  readonly historical_context?: ReadonlyArray<string>;
  readonly actors?: ReadonlyArray<string>;
}

export interface CatalogProductGetResponseListRecharge {
  readonly type?: "BY_TIERS" | "SUBSCRIPTION" | "BY_EPISODES";
  readonly purchase_unit?: ReadonlyArray<string>;
  readonly cost?: string;
}

export interface CatalogProductGetResponseListTargetConfig {
  readonly region_code?: string;
  readonly currency?: string;
}

export interface CatalogProductGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CatalogProductLogParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_log_id: string;
  readonly language?: string;
}

export interface CatalogProductLogResponse {
  readonly product_feed_log?: CatalogProductLogResponseProductFeedLog;
}

export interface CatalogProductLogResponseProductFeedLog {
  readonly catalog_id?: string;
  readonly feed_id?: string;
  readonly add_count?: number;
  readonly update_count?: number;
  readonly delete_count?: number;
  readonly error_count?: number;
  readonly warn_count?: number;
  readonly process_status?: "WAITING" | "PROCESSING" | "SUCCESS" | "FAILED";
  readonly update_mode?: number;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly feed_log_data?: CatalogProductLogResponseProductFeedLogFeedLogData;
}

export interface CatalogProductLogResponseProductFeedLogFeedLogData {
  readonly download_path?: string;
  readonly error_affected_products?: ReadonlyArray<CatalogProductLogResponseProductFeedLogFeedLogDataErrorAffectedProducts>;
  readonly warn_affected_products?: ReadonlyArray<CatalogProductLogResponseProductFeedLogFeedLogDataWarnAffectedProducts>;
}

export interface CatalogProductLogResponseProductFeedLogFeedLogDataErrorAffectedProducts {
  readonly affected_product_count?: number;
  readonly affected_product_item_list?: ReadonlyArray<CatalogProductLogResponseProductFeedLogFeedLogDataErrorAffectedProductsAffectedProductItemList>;
  readonly field?: string;
  readonly issue?: string;
  readonly suggestion?: string;
}

export interface CatalogProductLogResponseProductFeedLogFeedLogDataErrorAffectedProductsAffectedProductItemList {
  readonly index?: number;
  readonly title?: string;
  readonly sku_id?: string;
  readonly hotel_id?: string;
  readonly name?: string;
  readonly flight_id?: string;
  readonly airline_company?: string;
  readonly media_title_id?: string;
  readonly vehicle_id?: string;
  readonly series_id?: string;
  readonly make?: string;
  readonly product_url?: string;
  readonly description?: string;
  readonly value?: string;
}

export interface CatalogProductLogResponseProductFeedLogFeedLogDataWarnAffectedProducts {
  readonly affected_product_count?: number;
  readonly affected_product_item_list?: ReadonlyArray<CatalogProductLogResponseProductFeedLogFeedLogDataWarnAffectedProductsAffectedProductItemList>;
  readonly field?: string;
  readonly issue?: string;
  readonly suggestion?: string;
}

export interface CatalogProductLogResponseProductFeedLogFeedLogDataWarnAffectedProductsAffectedProductItemList {
  readonly index?: number;
  readonly title?: string;
  readonly sku_id?: string;
  readonly hotel_id?: string;
  readonly name?: string;
  readonly flight_id?: string;
  readonly airline_company?: string;
  readonly media_title_id?: string;
  readonly description?: string;
  readonly vehicle_id?: string;
  readonly series_id?: string;
  readonly make?: string;
  readonly product_url?: string;
  readonly value?: string;
}

export interface CatalogProductUpdateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id?: string;
  readonly products: ReadonlyArray<string>;
}

export interface CatalogProductUpdateResponse {
  readonly feed_log_id?: string;
}

export interface CatalogProductUploadParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_id?: string;
  readonly products: ReadonlyArray<string>;
}

export interface CatalogProductUploadResponse {
  readonly feed_log_id?: string;
}

export interface CatalogSetCreateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_name: string;
  readonly conditions: CatalogSetCreateParamsConditions;
}

export interface CatalogSetCreateParamsConditions {
  readonly "and/or": ReadonlyArray<CatalogSetCreateParamsConditionsAndOr>;
}

export interface CatalogSetCreateParamsConditionsAndOr {
  readonly field: string;
  readonly operation: string;
  readonly value: ReadonlyArray<string>;
}

export interface CatalogSetCreateResponse {
  readonly product_set_id?: string;
  readonly product_set_name?: string;
  readonly product_count?: number;
}

export interface CatalogSetDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_ids: ReadonlyArray<string>;
}

export interface CatalogSetDeleteResponse {
  readonly product_set_ids?: ReadonlyArray<string>;
}

export interface CatalogSetGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_id?: string;
  readonly return_product_count?: boolean;
}

export interface CatalogSetGetResponse {
  readonly list?: ReadonlyArray<CatalogSetGetResponseList>;
}

export interface CatalogSetGetResponseList {
  readonly product_count?: number;
  readonly product_set_id?: string;
  readonly catalog_id?: string;
  readonly product_set_name?: string;
  readonly conditions?: CatalogSetGetResponseListConditions;
}

export interface CatalogSetGetResponseListConditions {
  readonly "and/or"?: ReadonlyArray<CatalogSetGetResponseListConditionsAndOr>;
}

export interface CatalogSetGetResponseListConditionsAndOr {
  readonly field?: string;
  readonly operation?: string;
  readonly value?: ReadonlyArray<string>;
}

export interface CatalogSetProductGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CatalogSetProductGetResponse {
  readonly product_set_id?: string;
  readonly catalog_id?: string;
  readonly product_count?: string;
  readonly products?: ReadonlyArray<CatalogSetProductGetResponseProducts>;
  readonly page_info?: CatalogSetProductGetResponsePageInfo;
}

export interface CatalogSetProductGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CatalogSetProductGetResponseProducts {
  readonly product_id?: number;
  readonly product_name?: string;
  readonly sku_id?: string;
  readonly hotel_id?: string;
  readonly flight_id?: string;
  readonly destination_id?: string;
  readonly vehicle_id?: string;
}

export interface CatalogSetUpdateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_id: string;
  readonly product_set_name?: string;
  readonly conditions?: CatalogSetUpdateParamsConditions;
}

export interface CatalogSetUpdateParamsConditions {
  readonly "and/or"?: ReadonlyArray<CatalogSetUpdateParamsConditionsAndOr>;
}

export interface CatalogSetUpdateParamsConditionsAndOr {
  readonly field?: string;
  readonly operation?: string;
  readonly value?: ReadonlyArray<string>;
}

export interface CatalogSetUpdateResponse {
  readonly product_set_id?: string;
  readonly product_set_name?: string;
  readonly product_count?: number;
}

export interface CatalogSetUploadParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly product_set_name: string;
  readonly file: unknown;
  readonly file_signature: string;
}

export interface CatalogSetUploadResponse {
  readonly product_set_id?: string;
  readonly product_set_name?: string;
}

export interface CatalogTemplatePreviewCreateParams {
  readonly bc_id: string;
  readonly catalog_ids: ReadonlyArray<string>;
}

export interface CatalogTemplatePreviewCreateResponse {
  readonly iframe?: string;
}

export interface CatalogTemplateUploadParams {
  readonly bc_id: string;
  readonly catalog_ids: ReadonlyArray<string>;
  readonly file: unknown;
}

export interface CatalogTemplateUploadResponse {
  readonly code?: number;
  readonly message?: string;
  readonly template_id?: string;
  readonly catalog_upload_success?: ReadonlyArray<number>;
  readonly request_id?: string;
}

export interface CatalogUpdateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly name: string;
}

export interface CatalogUpdateResponse {

}

export interface CatalogVideoDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly catalog_video_ids: ReadonlyArray<string>;
}

export interface CatalogVideoDeleteResponse {

}

export interface CatalogVideoFileParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly file_url: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
}

export interface CatalogVideoFileResponse {
  readonly feed_log_id?: string;
}

export interface CatalogVideoGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly catalog_video_ids?: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CatalogVideoGetResponse {
  readonly videos?: ReadonlyArray<CatalogVideoGetResponseVideos>;
  readonly page_info?: CatalogVideoGetResponsePageInfo;
}

export interface CatalogVideoGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CatalogVideoGetResponseVideos {
  readonly catalog_video_id?: string;
  readonly video_name?: string;
  readonly video_link?: string;
  readonly sku_id_list?: ReadonlyArray<string>;
  readonly category?: string;
  readonly brand?: string;
  readonly creator?: string;
  readonly video_type?: string;
  readonly description?: string;
  readonly landing_page_url?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly video_id?: string;
  readonly video_signature?: string;
  readonly status?: "PENDING" | "SUCCESS" | "FAILED";
  readonly create_time?: string;
  readonly active_status?: "ACTIVATED" | "DEACTIVATED";
  readonly preview_url?: string;
}

export interface CatalogVideoLogParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly feed_log_id: string;
  readonly language?: string;
}

export interface CatalogVideoLogResponse {
  readonly video_feed_log?: CatalogVideoLogResponseVideoFeedLog;
  readonly feed_log_data?: CatalogVideoLogResponseFeedLogData;
}

export interface CatalogVideoLogResponseFeedLogData {
  readonly download_path?: string;
  readonly error_affected_videos?: ReadonlyArray<CatalogVideoLogResponseFeedLogDataErrorAffectedVideos>;
  readonly warn_affected_videos?: ReadonlyArray<CatalogVideoLogResponseFeedLogDataWarnAffectedVideos>;
}

export interface CatalogVideoLogResponseFeedLogDataErrorAffectedVideos {
  readonly affected_video_count?: number;
  readonly affected_video_item_list?: ReadonlyArray<CatalogVideoLogResponseFeedLogDataErrorAffectedVideosAffectedVideoItemList>;
  readonly field?: string;
  readonly issue?: string;
  readonly suggestion?: string;
}

export interface CatalogVideoLogResponseFeedLogDataErrorAffectedVideosAffectedVideoItemList {
  readonly index?: number;
  readonly video_name?: string;
  readonly video_link?: string;
  readonly sku_id_list?: string;
  readonly description?: string;
  readonly category?: string;
}

export interface CatalogVideoLogResponseFeedLogDataWarnAffectedVideos {
  readonly affected_video_count?: number;
  readonly affected_video_item_list?: ReadonlyArray<CatalogVideoLogResponseFeedLogDataWarnAffectedVideosAffectedVideoItemList>;
  readonly field?: string;
  readonly issue?: string;
  readonly suggestion?: string;
}

export interface CatalogVideoLogResponseFeedLogDataWarnAffectedVideosAffectedVideoItemList {
  readonly index?: number;
  readonly video_name?: string;
  readonly video_link?: string;
  readonly sku_id_list?: string;
  readonly description?: string;
  readonly category?: string;
}

export interface CatalogVideoLogResponseVideoFeedLog {
  readonly catalog_id?: string;
  readonly feed_id?: string;
  readonly add_count?: number;
  readonly update_count?: number;
  readonly delete_count?: number;
  readonly error_count?: number;
  readonly warn_count?: number;
  readonly process_status?: "PROCESSING" | "SUCCESS" | "FAILED" | "WAITING";
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface CatalogVideoPackageCreateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly video_package_type: string;
  readonly videos?: ReadonlyArray<CatalogVideoPackageCreateParamsVideos>;
  readonly music_id?: string;
  readonly template_id?: string;
  readonly video_package_name?: string;
}

export interface CatalogVideoPackageCreateParamsVideos {
  readonly video_id?: string;
  readonly is_green_screen_video?: boolean;
}

export interface CatalogVideoPackageCreateResponse {
  readonly shopping_ads_video_package_id?: string;
}

export interface CatalogVideoPackageDeleteParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly shopping_ads_video_package_id: string;
}

export interface CatalogVideoPackageDeleteResponse {
  readonly code?: number;
  readonly message?: string;
  readonly request_id?: string;
}

export interface CatalogVideoPackageGetParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly shopping_ads_video_package_id?: string;
}

export interface CatalogVideoPackageGetResponse {

}

export interface CatalogVideoPackageUpdateParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly shopping_ads_video_package_id: string;
  readonly video_package_name: string;
}

export interface CatalogVideoPackageUpdateResponse {
  readonly code?: number;
  readonly message?: string;
  readonly request_id?: string;
}

export interface ChangelogGetParams {
  readonly bc_id: string;
  readonly filtering?: ChangelogGetParamsFiltering;
  readonly lang?: string;
  readonly sort_field?: string;
  readonly sort_type?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface ChangelogGetParamsFiltering {
  readonly start_date?: string;
  readonly end_date?: string;
  readonly activity_type?: "ALL" | "USER" | "ACCOUNT" | "ASSET" | "BUSINESS";
}

export interface ChangelogGetResponse {
  readonly changelog_list?: ReadonlyArray<ChangelogGetResponseChangelogList>;
  readonly page_info?: ChangelogGetResponsePageInfo;
}

export interface ChangelogGetResponseChangelogList {
  readonly time?: string;
  readonly activity_type?: "USER" | "ACCOUNT" | "ASSET" | "BUSINESS";
  readonly operator_id?: string;
  readonly activity_log?: string;
}

export interface ChangelogGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface ChangelogTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface ChangelogTaskCheckResponse {
  readonly status?: string;
}

export interface ChangelogTaskCreateParams {
  readonly advertiser_id: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly timezone?: string;
  readonly module?: string;
  readonly object_ids?: ReadonlyArray<string>;
  readonly object_type?: string;
  readonly operation_types?: ReadonlyArray<string>;
  readonly order_fields?: ReadonlyArray<string>;
}

export interface ChangelogTaskCreateResponse {
  readonly task_id?: string;
}

export interface ChangelogTaskDownloadParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface ChangelogTaskDownloadResponse {
  readonly status?: "PROCESSING" | "SUCCESS" | "FAILED";
  readonly changelog?: string;
}

export interface CommentDeleteParams {
  readonly advertiser_id: string;
  readonly ad_id: string;
  readonly tiktok_item_id: string;
  readonly comment_id: string;
  readonly identity_type: "CUSTOMIZED_USER" | "TT_USER";
  readonly identity_id: string;
}

export interface CommentDeleteResponse {

}

export interface CommentListParams {
  readonly advertiser_id: string;
  readonly comment_type?: ReadonlyArray<"ALL" | "COMMENT" | "REPLY">;
  readonly search_field: string;
  readonly search_value: string;
  readonly sort_field?: "CREATE_TIME" | "LIKES" | "REPLIES";
  readonly sort_type?: "ASC" | "DESC";
  readonly start_time: string;
  readonly end_time: string;
  readonly page_size?: number;
  readonly page?: number;
}

export interface CommentListResponse {
  readonly comments?: ReadonlyArray<CommentListResponseComments>;
  readonly page_info?: CommentListResponsePageInfo;
}

export interface CommentListResponseComments {
  readonly comment_id?: string;
  readonly app?: string;
  readonly content?: string;
  readonly likes?: number;
  readonly replies?: number;
  readonly comment_type?: string;
  readonly original_comment_id?: string;
  readonly comment_status?: "HIDDEN" | "PUBLIC";
  readonly hit_blockedword?: boolean;
  readonly ad_text?: string;
  readonly create_time?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_pinned?: boolean;
  readonly can_delete?: boolean;
  readonly is_auth_ttba?: boolean;
  readonly is_auth_comment_manage_scope?: boolean;
  readonly video_play_url?: string;
  readonly video_cover_url?: string;
  readonly user_avatar_url?: string;
  readonly user_name?: string;
  readonly user_id?: string;
}

export interface CommentListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CommentPostParams {
  readonly advertiser_id: string;
  readonly ad_id: string;
  readonly tiktok_item_id: string;
  readonly comment_id: string;
  readonly comment_type: string;
  readonly text: string;
  readonly identity_type: "CUSTOMIZED_USER" | "TT_USER";
  readonly identity_id: string;
}

export interface CommentPostResponse {
  readonly comment_id?: string;
  readonly tiktok_item_id?: string;
  readonly text?: string;
  readonly create_time?: string;
  readonly reply_to_comment_id?: string;
}

export interface CommentReferenceParams {
  readonly advertiser_id: string;
  readonly comment_id: string;
  readonly comment_type: string;
  readonly original_comment_id?: string;
  readonly page_size?: number;
  readonly page?: number;
}

export interface CommentReferenceResponse {
  readonly comments?: ReadonlyArray<CommentReferenceResponseComments>;
  readonly page_info?: CommentReferenceResponsePageInfo;
}

export interface CommentReferenceResponseComments {
  readonly comment_id?: string;
  readonly content?: string;
  readonly comment_type?: string;
  readonly comment_status?: "HIDDEN" | "PUBLIC";
  readonly hit_blockedword?: boolean;
  readonly create_time?: string;
  readonly user_name?: string;
  readonly user_id?: string;
  readonly user_avatar_url?: string;
  readonly tiktok_item_id?: string;
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly is_pinned?: boolean;
  readonly can_delete?: boolean;
  readonly is_auth_ttba?: boolean;
  readonly is_auth_comment_manage_scope?: boolean;
  readonly reply_user_info?: string;
}

export interface CommentReferenceResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CommentStatusUpdateParams {
  readonly advertiser_id: string;
  readonly comment_ids: ReadonlyArray<string>;
  readonly operation: "HIDDEN" | "PUBLIC";
}

export interface CommentStatusUpdateResponse {
  readonly message?: string;
  readonly code?: number;
  readonly request_id?: string;
}

export interface CommentTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface CommentTaskCheckResponse {
  readonly task_id?: string;
  readonly status?: "RUNNING" | "SUCCEED" | "FAILED";
}

export interface CommentTaskCreateParams {
  readonly advertiser_id: string;
  readonly comment_status?: ReadonlyArray<"ALL" | "PUBLIC" | "HIDDEN">;
  readonly comment_type?: ReadonlyArray<"ALL" | "COMMENT" | "REPLY">;
  readonly search_field?: string;
  readonly search_value?: string;
  readonly comment_ids?: ReadonlyArray<string>;
  readonly sort_field?: "CREATE_TIME" | "LIKES" | "REPLIES";
  readonly sort_type?: "ASC" | "DESC";
  readonly start_time?: string;
  readonly end_time?: string;
  readonly lang?: "EN" | "JA" | "ZH";
}

export interface CommentTaskCreateResponse {
  readonly task_id?: string;
}

export interface CommentTaskDownloadParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface CommentTaskDownloadResponse {
  readonly csv?: string;
}

export interface CreativeAdsPreviewCreateParams {
  readonly advertiser_id: string;
  readonly preview_type: string;
  readonly objective_type: string;
  readonly is_smart_performance_campaign?: boolean;
  readonly placement?: string;
  readonly tiktok_subplacement?: "LEMON8" | "UNSET";
  readonly preview_format?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  readonly product_source?: "STORE" | "SHOWCASE";
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly showcase_products?: ReadonlyArray<CreativeAdsPreviewCreateParamsShowcaseProducts>;
  readonly promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  readonly identity_id: string;
  readonly identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly ad_format: string;
  readonly video_id?: string;
  readonly image_ids?: ReadonlyArray<string>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  readonly music_id?: string;
  readonly tiktok_item_id?: string;
  readonly carousel_image_index?: number;
  readonly ad_text?: string;
  readonly call_to_action?: string;
  readonly call_to_action_id?: string;
  readonly card_id?: string;
  readonly landing_page_url?: string;
  readonly page_id?: string;
  readonly catalog_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly hotel_ids?: ReadonlyArray<string>;
  readonly flight_ids?: ReadonlyArray<string>;
  readonly destination_ids?: ReadonlyArray<string>;
  readonly vehicle_ids?: ReadonlyArray<string>;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly catalog_authorized_bc_id?: string;
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly vertical_video_strategy?: "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "LIVE_STREAM" | "UNSET" | "DYNAMIC_CREATIVE";
  readonly shopping_ads_video_template_id?: string;
  readonly shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  readonly dynamic_destination?: "DLP" | "UNSET";
  readonly instant_product_page_used?: boolean;
}

export interface CreativeAdsPreviewCreateParamsShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
}

export interface CreativeAdsPreviewCreateResponse {
  readonly preview_link?: string;
  readonly iframe?: string;
  readonly tips?: ReadonlyArray<string>;
  readonly placement?: string;
  readonly messages?: ReadonlyArray<string>;
}

export interface CreativeAssetDeleteParams {
  readonly advertiser_id: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly image_ids?: ReadonlyArray<string>;
}

export interface CreativeAssetDeleteResponse {
  readonly failed_video_ids?: ReadonlyArray<string>;
  readonly failed_image_ids?: ReadonlyArray<string>;
}

export interface CreativeAssetShareParams {
  readonly advertiser_id: string;
  readonly asset_type?: "VIDEO" | "IMAGE" | "MUSIC";
  readonly material_ids: ReadonlyArray<string>;
  readonly shared_advertiser_ids: ReadonlyArray<string>;
}

export interface CreativeAssetShareResponse {
  readonly failed_infos?: CreativeAssetShareResponseFailedInfos;
}

export interface CreativeAssetShareResponseFailedInfos {
  readonly key?: string;
  readonly value?: ReadonlyArray<string>;
}

export interface CreativeAutoMessageCreateParams {
  readonly advertiser_id: string;
  readonly auto_message_type: string;
  readonly welcome_message?: CreativeAutoMessageCreateParamsWelcomeMessage;
}

export interface CreativeAutoMessageCreateParamsWelcomeMessage {
  readonly title?: string;
  readonly content?: string;
  readonly suggested_questions?: ReadonlyArray<CreativeAutoMessageCreateParamsWelcomeMessageSuggestedQuestions>;
}

export interface CreativeAutoMessageCreateParamsWelcomeMessageSuggestedQuestions {
  readonly question?: string;
  readonly answer?: string;
}

export interface CreativeAutoMessageCreateResponse {

}

export interface CreativeAutoMessageGetParams {
  readonly advertiser_id: string;
  readonly auto_message_type: string;
  readonly auto_message_id?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CreativeAutoMessageGetResponse {
  readonly list?: ReadonlyArray<CreativeAutoMessageGetResponseList>;
  readonly page_info?: CreativeAutoMessageGetResponsePageInfo;
}

export interface CreativeAutoMessageGetResponseList {
  readonly auto_message_id?: string;
  readonly auto_message_type?: string;
  readonly welcome_message?: string;
  readonly title?: string;
  readonly content?: string;
  readonly suggested_questions?: ReadonlyArray<CreativeAutoMessageGetResponseListSuggestedQuestions>;
  readonly audit_status?: "AUDITING" | "PASS" | "REJECTED";
  readonly create_time?: string;
}

export interface CreativeAutoMessageGetResponseListSuggestedQuestions {
  readonly question?: string;
  readonly answer?: string;
}

export interface CreativeAutoMessageGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CreativeCtaRecommendParams {
  readonly advertiser_id: string;
  readonly new_version?: boolean;
  readonly asset_type?: string;
  readonly content_type?: "APP_DOWNLOAD" | "LANDING_PAGE" | "OTHER" | "MESSAGE" | "SOCIAL_MEDIA_APP_MESSAGE" | "PHONE_CALL";
  readonly objective_type?: string;
  readonly promotion_type?: string;
  readonly language?: string;
  readonly app_id?: string;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE">;
  readonly region_codes?: ReadonlyArray<string>;
  readonly optimization_goal?: string;
  readonly ad_texts?: ReadonlyArray<string>;
  readonly landing_page_url?: string;
}

export interface CreativeCtaRecommendResponse {
  readonly recommend_assets?: ReadonlyArray<CreativeCtaRecommendResponseRecommendAssets>;
}

export interface CreativeCtaRecommendResponseRecommendAssets {
  readonly asset_ids?: ReadonlyArray<string>;
  readonly asset_content?: string;
}

export interface CreativeFatigueGetParams {
  readonly advertiser_id: string;
  readonly ad_id: string;
  readonly filtering: CreativeFatigueGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CreativeFatigueGetParamsFiltering {
  readonly start_date: string;
  readonly end_date: string;
}

export interface CreativeFatigueGetResponse {
  readonly list?: ReadonlyArray<CreativeFatigueGetResponseList>;
  readonly page_info?: CreativeFatigueGetResponsePageInfo;
}

export interface CreativeFatigueGetResponseList {
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly date?: string;
  readonly metrics?: CreativeFatigueGetResponseListMetrics;
}

export interface CreativeFatigueGetResponseListMetrics {
  readonly has_fatigue?: boolean;
  readonly fatigue_index?: number;
  readonly dnu?: number;
  readonly dnu_ratio?: number;
  readonly spend?: number;
  readonly cost_per_conversion?: number;
  readonly skan_cost_per_conversion?: number;
}

export interface CreativeFatigueGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CreativeImageEditParams {
  readonly advertiser_id: string;
  readonly image_id: string;
  readonly edit_method?: string;
  readonly width: number;
  readonly height: number;
  readonly image_name?: string;
}

export interface CreativeImageEditResponse {
  readonly image_id?: string;
  readonly material_id?: string;
  readonly displayable?: boolean;
  readonly width?: number;
  readonly format?: string;
  readonly image_url?: string;
  readonly height?: number;
  readonly signature?: string;
  readonly size?: number;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface CreativePortfolioCreateParams {
  readonly advertiser_id: string;
  readonly creative_portfolio_type?: "CTA" | "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE";
  readonly portfolio_content?: ReadonlyArray<CreativePortfolioCreateParamsPortfolioContent>;
}

export interface CreativePortfolioCreateParamsPortfolioContent {
  readonly asset_content?: string;
  readonly asset_ids?: ReadonlyArray<string>;
  readonly card_type?: string;
  readonly gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  readonly image_id?: string;
  readonly pop_up_window_image_id?: string;
  readonly title?: string;
  readonly selling_points?: ReadonlyArray<string>;
  readonly call_to_action_text?: string;
  readonly badge_show_time?: number;
  readonly badge_position?: CreativePortfolioCreateParamsPortfolioContentBadgePosition;
  readonly badge_image_info?: CreativePortfolioCreateParamsPortfolioContentBadgeImageInfo;
  readonly slide_length?: number;
  readonly slide_dimension?: CreativePortfolioCreateParamsPortfolioContentSlideDimension;
  readonly interactive_music_id?: string;
  readonly layouts?: ReadonlyArray<"TYPE_1" | "TYPE_2">;
  readonly description?: string;
  readonly tags?: ReadonlyArray<"CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME">;
  readonly category_label?: string;
  readonly app_id?: string;
  readonly profile_image?: string;
  readonly call_to_action?: string;
  readonly mobile_app_id?: string;
  readonly country_code?: ReadonlyArray<string>;
  readonly sticker_param?: CreativePortfolioCreateParamsPortfolioContentStickerParam;
  readonly product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  readonly vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "DYNAMIC_CREATIVE";
  readonly ad_text?: string;
  readonly card_show_price?: boolean;
  readonly card_tags?: ReadonlyArray<"BRAND" | "DESC">;
  readonly card_image_index?: number;
  readonly showcase_products?: ReadonlyArray<CreativePortfolioCreateParamsPortfolioContentShowcaseProducts>;
}

export interface CreativePortfolioCreateParamsPortfolioContentBadgeImageInfo {
  readonly image_id?: string;
}

export interface CreativePortfolioCreateParamsPortfolioContentBadgePosition {
  readonly position_x?: number;
  readonly position_y?: number;
  readonly angle?: number;
}

export interface CreativePortfolioCreateParamsPortfolioContentShowcaseProducts {
  readonly item_group_id?: string;
  readonly store_id?: string;
  readonly catalog_id?: string;
}

export interface CreativePortfolioCreateParamsPortfolioContentSlideDimension {
  readonly dimension_width?: number;
  readonly dimension_height?: number;
}

export interface CreativePortfolioCreateParamsPortfolioContentStickerParam {
  readonly sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  readonly title?: string;
  readonly giftcode?: string;
  readonly cutoff_time?: string;
  readonly color?: string;
  readonly display_angle?: number;
  readonly predefined_placement?: string;
  readonly position_x?: number;
  readonly position_y?: number;
  readonly size?: string;
  readonly opacity?: string;
  readonly reminder_time?: string;
  readonly landing_page_url?: string;
  readonly live_tiktok_user_id?: string;
}

export interface CreativePortfolioCreateResponse {
  readonly creative_portfolio_id?: string;
}

export interface CreativePortfolioDeleteParams {
  readonly advertiser_id: string;
  readonly creative_portfolio_ids: ReadonlyArray<string>;
}

export interface CreativePortfolioDeleteResponse {

}

export interface CreativePortfolioGetParams {
  readonly advertiser_id: string;
  readonly creative_portfolio_id: string;
}

export interface CreativePortfolioGetResponse {
  readonly creative_portfolio_id?: string;
  readonly creative_portfolio_type?: "CTA" | "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE" | "WEB_CONVERSIONS" | "TRAFFIC" | "WEBSITE" | "REACH" | "VIDEO_VIEW" | "APP_PROMOTION" | "LEAD_GENERATION" | "PRODUCT_SALES" | "RF_REACH" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "VIDEO_VIEWS" | "ENGAGED_VIEW" | "ENGAGEMENT" | "PAGE_VISIT";
  readonly portfolio_content?: ReadonlyArray<CreativePortfolioGetResponsePortfolioContent>;
}

export interface CreativePortfolioGetResponsePortfolioContent {
  readonly asset_content?: string;
  readonly asset_ids?: ReadonlyArray<string>;
  readonly card_type?: string;
  readonly gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  readonly image_id?: string;
  readonly pop_up_window_image_id?: string;
  readonly title?: string;
  readonly selling_points?: ReadonlyArray<string>;
  readonly content_url?: string;
  readonly thumbnail_id?: string;
  readonly call_to_action_text?: string;
  readonly badge_show_time?: number;
  readonly badge_position?: CreativePortfolioGetResponsePortfolioContentBadgePosition;
  readonly badge_image_info?: CreativePortfolioGetResponsePortfolioContentBadgeImageInfo;
  readonly slide_length?: number;
  readonly slide_dimension?: CreativePortfolioGetResponsePortfolioContentSlideDimension;
  readonly interactive_music_id?: string;
  readonly layouts?: ReadonlyArray<"TYPE_1" | "TYPE_2">;
  readonly description?: string;
  readonly tags?: ReadonlyArray<"CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME">;
  readonly category_label?: string;
  readonly app_id?: string;
  readonly sticker_param?: CreativePortfolioGetResponsePortfolioContentStickerParam;
  readonly card_show_price?: boolean;
  readonly card_tags?: ReadonlyArray<"BRAND" | "DESC">;
  readonly card_image_index?: number;
}

export interface CreativePortfolioGetResponsePortfolioContentBadgeImageInfo {
  readonly image_id?: string;
}

export interface CreativePortfolioGetResponsePortfolioContentBadgePosition {
  readonly position_x?: number;
  readonly position_y?: number;
  readonly angle?: number;
}

export interface CreativePortfolioGetResponsePortfolioContentSlideDimension {
  readonly dimension_width?: number;
  readonly dimension_height?: number;
}

export interface CreativePortfolioGetResponsePortfolioContentStickerParam {
  readonly sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  readonly title?: string;
  readonly giftcode?: string;
  readonly cutoff_time?: string;
  readonly color?: string;
  readonly display_angle?: number;
  readonly predefined_placement?: string;
  readonly position_x?: number;
  readonly position_y?: number;
  readonly size?: string;
  readonly opacity?: string;
  readonly reminder_time?: string;
  readonly landing_page_url?: string;
  readonly live_tiktok_user_id?: string;
}

export interface CreativePortfolioListParams {
  readonly advertiser_id: string;
  readonly filtering?: CreativePortfolioListParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface CreativePortfolioListParamsFiltering {
  readonly creative_portfolio_types?: ReadonlyArray<"CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "COUNTDOWN_STICKER" | "REMINDER_COUNTDOWN_STICKER" | "LIVE_REMINDER_COUNTDOWN_STICKER" | "GIFTCODE_STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE">;
  readonly creative_portfolio_ids?: ReadonlyArray<string>;
}

export interface CreativePortfolioListResponse {
  readonly creative_portfolios?: ReadonlyArray<CreativePortfolioListResponseCreativePortfolios>;
  readonly page_info?: CreativePortfolioListResponsePageInfo;
}

export interface CreativePortfolioListResponseCreativePortfolios {
  readonly creative_portfolio_id?: string;
  readonly creative_portfolio_type?: "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "COUNTDOWN_STICKER" | "REMINDER_COUNTDOWN_STICKER" | "LIVE_REMINDER_COUNTDOWN_STICKER" | "GIFTCODE_STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE";
  readonly creative_portfolio_preview_url?: string;
  readonly card_type?: string;
  readonly gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  readonly image_id?: string;
  readonly pop_up_window_image_id?: string;
  readonly title?: string;
  readonly selling_points?: ReadonlyArray<string>;
  readonly content_url?: string;
  readonly thumbnail_id?: string;
  readonly call_to_action_text?: string;
  readonly badge_show_time?: number;
  readonly badge_position?: CreativePortfolioListResponseCreativePortfoliosBadgePosition;
  readonly badge_image_info?: CreativePortfolioListResponseCreativePortfoliosBadgeImageInfo;
  readonly slide_length?: number;
  readonly slide_dimension?: CreativePortfolioListResponseCreativePortfoliosSlideDimension;
  readonly interactive_music_id?: string;
  readonly layouts?: ReadonlyArray<"TYPE_1" | "TYPE_2">;
  readonly description?: string;
  readonly tags?: ReadonlyArray<"CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME">;
  readonly category_label?: string;
  readonly app_id?: string;
  readonly sticker_param?: CreativePortfolioListResponseCreativePortfoliosStickerParam;
  readonly card_show_price?: boolean;
  readonly card_tags?: ReadonlyArray<"BRAND" | "DESC">;
  readonly card_image_index?: number;
}

export interface CreativePortfolioListResponseCreativePortfoliosBadgeImageInfo {
  readonly image_id?: string;
}

export interface CreativePortfolioListResponseCreativePortfoliosBadgePosition {
  readonly position_x?: number;
  readonly position_y?: number;
  readonly angle?: number;
}

export interface CreativePortfolioListResponseCreativePortfoliosSlideDimension {
  readonly dimension_width?: number;
  readonly dimension_height?: number;
}

export interface CreativePortfolioListResponseCreativePortfoliosStickerParam {
  readonly sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  readonly title?: string;
  readonly giftcode?: string;
  readonly cutoff_time?: string;
  readonly color?: string;
  readonly display_angle?: number;
  readonly predefined_placement?: string;
  readonly position_x?: number;
  readonly position_y?: number;
  readonly size?: string;
  readonly opacity?: string;
  readonly reminder_time?: string;
  readonly landing_page_url?: string;
  readonly live_tiktok_user_id?: string;
}

export interface CreativePortfolioListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CreativeQuickOptimizationCreateParams {
  readonly advertiser_id: string;
  readonly video_id: string;
  readonly logo?: string;
  readonly title?: string;
  readonly description?: string;
  readonly callback_info?: CreativeQuickOptimizationCreateParamsCallbackInfo;
}

export interface CreativeQuickOptimizationCreateParamsCallbackInfo {
  readonly callback_url?: string;
  readonly callback_extra_info?: string;
}

export interface CreativeQuickOptimizationCreateResponse {
  readonly task_id?: string;
}

export interface CreativeSmartTextGenerateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly param_type?: "RECOMMENDED" | "CUSTOMIZED";
  readonly language?: "EN" | "JA" | "RU" | "VI";
  readonly industry_id?: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly limit?: number;
}

export interface CreativeSmartTextGenerateResponse {
  readonly generate_id?: string;
  readonly industry_id?: string;
  readonly language?: "EN" | "JA" | "RU" | "VI";
  readonly texts?: ReadonlyArray<string>;
}

export interface CreativeSmartVideoCreateParams {
  readonly advertiser_id: string;
  readonly videos: ReadonlyArray<CreativeSmartVideoCreateParamsVideos>;
  readonly images: ReadonlyArray<CreativeSmartVideoCreateParamsImages>;
  readonly texts?: ReadonlyArray<CreativeSmartVideoCreateParamsTexts>;
  readonly layout: "VERTICAL" | "HORIZONTAL";
  readonly style: "PEACEFUL" | "DYNAMIC" | "CUSTOM";
  readonly music_id?: string;
  readonly duration?: number;
  readonly frame?: ReadonlyArray<CreativeSmartVideoCreateParamsFrame>;
  readonly callback_info?: CreativeSmartVideoCreateParamsCallbackInfo;
}

export interface CreativeSmartVideoCreateParamsCallbackInfo {
  readonly callback_url?: string;
  readonly callback_extra_info?: string;
}

export interface CreativeSmartVideoCreateParamsFrame {
  readonly frame_type?: string;
  readonly material_type?: "VIDEO" | "IMAGE" | "TEMPLATE";
  readonly video_id?: string;
  readonly image_id?: string;
  readonly template_type?: string;
  readonly logo?: string;
  readonly call_to_action?: string;
  readonly slogan?: string;
  readonly brand_name?: string;
}

export interface CreativeSmartVideoCreateParamsImages {
  readonly image_id: string;
  readonly tag?: string;
}

export interface CreativeSmartVideoCreateParamsTexts {
  readonly text: string;
  readonly tag?: string;
}

export interface CreativeSmartVideoCreateParamsVideos {
  readonly video_id: string;
  readonly tag?: string;
}

export interface CreativeSmartVideoCreateResponse {

}

export interface CreativeStatusGetParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface CreativeStatusGetResponse {
  readonly status?: string;
  readonly video_ids?: string;
  readonly error_msg?: string;
  readonly extra_info?: string;
}

export interface CreativeVideoSoundtrackCreateParams {
  readonly advertiser_id: string;
  readonly video_id: string;
  readonly music_ids?: ReadonlyArray<string>;
  readonly video_volume?: number;
  readonly music_volume?: number;
  readonly name_prefix?: string;
  readonly callback_info?: CreativeVideoSoundtrackCreateParamsCallbackInfo;
}

export interface CreativeVideoSoundtrackCreateParamsCallbackInfo {
  readonly callback_url?: string;
  readonly callback_extra_info?: string;
}

export interface CreativeVideoSoundtrackCreateResponse {
  readonly task_id?: string;
}

export interface CrmCreateParams {
  readonly advertiser_id: string;
  readonly name: string;
}

export interface CrmCreateResponse {
  readonly event_set_id?: string;
  readonly name?: string;
  readonly create_time?: string;
}

export interface CrmListParams {
  readonly advertiser_id: string;
  readonly name?: string;
  readonly event_set_ids?: ReadonlyArray<string>;
}

export interface CrmListResponse {
  readonly crm_event_sets?: ReadonlyArray<CrmListResponseCrmEventSets>;
}

export interface CrmListResponseCrmEventSets {
  readonly event_set_id?: string;
  readonly name?: string;
  readonly create_time?: string;
}

export interface CtmMessageEventSetGetParams {
  readonly advertiser_id: string;
  readonly messaging_app_type: "MESSENGER" | "WHATSAPP" | "ZALO";
  readonly messaging_app_account_id: string;
  readonly message_event_name?: string;
  readonly message_event_set_ids?: ReadonlyArray<string>;
}

export interface CtmMessageEventSetGetResponse {
  readonly message_event_set_list?: ReadonlyArray<CtmMessageEventSetGetResponseMessageEventSetList>;
  readonly matched_event_set?: CtmMessageEventSetGetResponseMatchedEventSet;
}

export interface CtmMessageEventSetGetResponseMatchedEventSet {
  readonly message_event_set_id?: string;
  readonly message_event_name?: string;
  readonly create_time?: string;
}

export interface CtmMessageEventSetGetResponseMessageEventSetList {
  readonly message_event_set_id?: string;
  readonly message_event_name?: string;
  readonly create_time?: string;
}

export interface CustomConversionCreateParams {
  readonly advertiser_id: string;
  readonly name: string;
  readonly description?: string;
  readonly event_source_type: "PIXEL" | "APP";
  readonly event_source_id: string;
  readonly optimization_event?: string;
  readonly custom_event_type?: string;
  readonly rules: ReadonlyArray<CustomConversionCreateParamsRules>;
}

export interface CustomConversionCreateParamsRules {
  readonly parameter: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  readonly operator: string;
  readonly values: ReadonlyArray<string>;
}

export interface CustomConversionCreateResponse {
  readonly custom_conversion_id?: string;
}

export interface CustomConversionDeleteParams {
  readonly advertiser_id: string;
  readonly custom_conversion_id: string;
}

export interface CustomConversionDeleteResponse {

}

export interface CustomConversionGetParams {
  readonly advertiser_id: string;
  readonly custom_conversion_id: string;
  readonly event_source_type: "PIXEL" | "APP";
  readonly event_source_id: string;
}

export interface CustomConversionGetResponse {
  readonly custom_conversion_id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly event_source_type?: "PIXEL" | "APP";
  readonly event_source_id?: string;
  readonly activity_status?: "NO_RECENT_ACTIVITY" | "ACTIVE" | "WAITING_FOR_ACTIVITY";
  readonly optimization_event?: string;
  readonly rules?: ReadonlyArray<CustomConversionGetResponseRules>;
}

export interface CustomConversionGetResponseRules {
  readonly parameter?: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  readonly operator?: string;
  readonly values?: ReadonlyArray<string>;
  readonly create_time?: string;
  readonly update_time?: string;
}

export interface CustomConversionListParams {
  readonly advertiser_id: string;
  readonly event_source_type: "PIXEL" | "APP";
  readonly event_source_id: string;
  readonly search_keyword?: string;
  readonly sort_field?: "CREATE_TIME" | "TOTAL_COUNT";
  readonly sort_type?: "DESC" | "ASC";
  readonly page?: number;
  readonly page_size?: number;
}

export interface CustomConversionListResponse {
  readonly list?: ReadonlyArray<CustomConversionListResponseList>;
  readonly page_info?: CustomConversionListResponsePageInfo;
}

export interface CustomConversionListResponseList {
  readonly custom_conversion_id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly event_source_type?: "PIXEL" | "APP";
  readonly event_source_id?: string;
  readonly activity_info?: CustomConversionListResponseListActivityInfo;
  readonly optimization_event?: string;
  readonly rules?: ReadonlyArray<CustomConversionListResponseListRules>;
}

export interface CustomConversionListResponseListActivityInfo {
  readonly activity_status?: "NO_RECENT_ACTIVITY" | "ACTIVE" | "WAITING_FOR_ACTIVITY";
  readonly total_count?: number;
  readonly last_record_time?: string;
}

export interface CustomConversionListResponseListRules {
  readonly parameter?: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  readonly operator?: string;
  readonly values?: ReadonlyArray<string>;
  readonly create_time?: string;
  readonly update_time?: string;
}

export interface CustomConversionListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface CustomConversionUpdateParams {
  readonly advertiser_id: string;
  readonly custom_conversion_id: string;
  readonly name?: string;
  readonly description?: string;
}

export interface CustomConversionUpdateResponse {

}

export interface DeliveryBidRecommendParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
}

export interface DeliveryBidRecommendResponse {
  readonly results?: ReadonlyArray<DeliveryBidRecommendResponseResults>;
}

export interface DeliveryBidRecommendResponseResults {
  readonly adgroup_id?: string;
  readonly recommendations?: ReadonlyArray<DeliveryBidRecommendResponseResultsRecommendations>;
}

export interface DeliveryBidRecommendResponseResultsRecommendations {
  readonly recommended_bid?: number;
  readonly bid_increase_ratio?: number;
  readonly estimated_cost?: number;
  readonly cost_uplift?: number;
  readonly cost_uplift_ratio?: number;
}

export interface DeliveryBudgetRecommendParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
}

export interface DeliveryBudgetRecommendResponse {
  readonly results?: ReadonlyArray<DeliveryBudgetRecommendResponseResults>;
}

export interface DeliveryBudgetRecommendResponseResults {
  readonly adgroup_id?: string;
  readonly recommendations?: ReadonlyArray<DeliveryBudgetRecommendResponseResultsRecommendations>;
}

export interface DeliveryBudgetRecommendResponseResultsRecommendations {
  readonly recommended_budget?: number;
  readonly budget_increase_ratio?: number;
  readonly estimated_conversion?: number;
  readonly conversion_uplift?: number;
  readonly conversion_uplift_ratio?: number;
}

export interface DiagnosticCatalogEventsourceIssueParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly event_source_type: "APP" | "PIXEL";
  readonly app_id?: string;
  readonly pixel_code?: string;
  readonly event_type?: "VIEW_CONTENT" | "ADD_TO_CART" | "PURCHASE";
  readonly time_range?: "YESTERDAY" | "LAST_7_DAYS" | "LAST_30_DAYS";
}

export interface DiagnosticCatalogEventsourceIssueResponse {
  readonly list?: ReadonlyArray<DiagnosticCatalogEventsourceIssueResponseList>;
}

export interface DiagnosticCatalogEventsourceIssueResponseList {
  readonly diagnostic_result?: string;
  readonly level?: "ERROR" | "WARNING" | "INFO";
  readonly diagnostic_solution?: string;
}

export interface DiagnosticCatalogEventsourceMetricParams {
  readonly bc_id: string;
  readonly catalog_id: string;
  readonly event_source_type: "APP" | "PIXEL";
  readonly app_id?: string;
  readonly pixel_code?: string;
  readonly event_type?: "VIEW_CONTENT" | "ADD_TO_CART" | "PURCHASE";
  readonly time_range?: "YESTERDAY" | "LAST_7_DAYS" | "LAST_30_DAYS";
}

export interface DiagnosticCatalogEventsourceMetricResponse {
  readonly list?: ReadonlyArray<DiagnosticCatalogEventsourceMetricResponseList>;
}

export interface DiagnosticCatalogEventsourceMetricResponseList {
  readonly available_type?: "EVENT_RECEIVED" | "EVENT_WITH_CONTENT_ID" | "EVENT_WITH_CONTENT_ID_MATCHING_INVENTORY";
  readonly event_details?: ReadonlyArray<DiagnosticCatalogEventsourceMetricResponseListEventDetails>;
}

export interface DiagnosticCatalogEventsourceMetricResponseListEventDetails {
  readonly date?: string;
  readonly count?: string;
  readonly percentage?: string;
}

export interface DiagnosticCatalogParams {
  readonly catalog_id: string;
  readonly bc_id: string;
  readonly feed_id?: string;
  readonly filtering?: DiagnosticCatalogParamsFiltering;
  readonly lang?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface DiagnosticCatalogParamsFiltering {
  readonly issue_level?: "CRITICAL" | "WARNING";
  readonly issue_category?: "PRODUCT_ATTRIBUTES" | "PRODUCT_REVIEW" | "CATALOG" | "PIXEL_OR_EVENT" | "FILE_UPLOAD_OR_FEED";
}

export interface DiagnosticCatalogProductTaskCreateParams {
  readonly catalog_id: string;
  readonly bc_id: string;
  readonly feed_id?: string;
  readonly lang?: string;
  readonly issue_id?: string;
}

export interface DiagnosticCatalogProductTaskCreateResponse {
  readonly task_id?: string;
}

export interface DiagnosticCatalogProductTaskGetParams {
  readonly catalog_id: string;
  readonly bc_id: string;
  readonly task_id: string;
}

export interface DiagnosticCatalogProductTaskGetResponse {
  readonly status?: "SUCCEED" | "PROCESSING" | "FAILED";
  readonly diagnostic_file_url?: string;
}

export interface DiagnosticCatalogResponse {
  readonly diagnostic_date?: string;
  readonly issues?: ReadonlyArray<DiagnosticCatalogResponseIssues>;
  readonly page_info?: DiagnosticCatalogResponsePageInfo;
}

export interface DiagnosticCatalogResponseIssues {
  readonly issue_id?: string;
  readonly issue_title?: string;
  readonly reason_and_suggestion?: string;
  readonly issue_level?: "CRITICAL" | "WARNING";
  readonly issue_category?: "PRODUCT_ATTRIBUTES" | "PRODUCT_REVIEW" | "CATALOG" | "PIXEL_OR_EVENT" | "FILE_UPLOAD_OR_FEED";
  readonly issue_product_field?: string;
  readonly affected_product_count?: number;
  readonly affected_product_percentage?: number;
  readonly example_affected_products?: ReadonlyArray<string>;
}

export interface DiagnosticCatalogResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface DiscoveryCmlTrendingListParams {
  readonly business_id: string;
  readonly genre?: string;
  readonly country_code?: string;
  readonly date_range?: string;
}

export interface DiscoveryCmlTrendingListResponse {
  readonly list?: ReadonlyArray<DiscoveryCmlTrendingListResponseList>;
}

export interface DiscoveryCmlTrendingListResponseList {
  readonly commercial_music_id?: string;
  readonly commercial_music_name?: string;
  readonly duration?: number;
  readonly thumbnail_url?: string;
  readonly artist?: string;
  readonly preview_url?: string;
  readonly genres?: ReadonlyArray<string>;
  readonly rank_position?: string;
  readonly trending_history?: ReadonlyArray<DiscoveryCmlTrendingListResponseListTrendingHistory>;
  readonly full_duration_song_clip?: DiscoveryCmlTrendingListResponseListFullDurationSongClip;
  readonly trending_song_clip?: DiscoveryCmlTrendingListResponseListTrendingSongClip;
}

export interface DiscoveryCmlTrendingListResponseListFullDurationSongClip {
  readonly preview_url?: string;
  readonly duration?: number;
  readonly song_clip_id?: string;
}

export interface DiscoveryCmlTrendingListResponseListTrendingHistory {
  readonly date?: string;
  readonly rank_position_daily?: string;
}

export interface DiscoveryCmlTrendingListResponseListTrendingSongClip {
  readonly preview_url?: string;
  readonly duration?: number;
  readonly song_clip_id?: string;
}

export interface DiscoveryCmlVideoListParams {
  readonly business_id: string;
  readonly commercial_music_id: string;
  readonly country_code?: string;
}

export interface DiscoveryCmlVideoListResponse {
  readonly commercial_music_id?: string;
  readonly commercial_music_name?: string;
  readonly top_video_list?: ReadonlyArray<DiscoveryCmlVideoListResponseTopVideoList>;
}

export interface DiscoveryCmlVideoListResponseTopVideoList {
  readonly video_id?: string;
  readonly embed_url?: string;
  readonly share_url?: string;
}

export interface DiscoveryDetailParams {
  readonly advertiser_id: string;
  readonly discovery_type: string;
  readonly hashtag_id: string;
  readonly country_code: string;
  readonly date_range: string;
}

export interface DiscoveryDetailResponse {
  readonly hashtag_id?: string;
  readonly hashtag_name?: string;
  readonly views?: number;
  readonly views_global_lifetime?: number;
  readonly posts?: number;
  readonly posts_global_lifetime?: number;
  readonly top_country_list?: ReadonlyArray<string>;
  readonly hashtag_status?: "ONLINE" | "OFFLINE";
  readonly trending_history?: ReadonlyArray<DiscoveryDetailResponseTrendingHistory>;
  readonly audience_insights?: DiscoveryDetailResponseAudienceInsights;
}

export interface DiscoveryDetailResponseAudienceInsights {
  readonly audience_ages?: ReadonlyArray<DiscoveryDetailResponseAudienceInsightsAudienceAges>;
}

export interface DiscoveryDetailResponseAudienceInsightsAudienceAges {
  readonly age?: string;
  readonly percentage?: number;
}

export interface DiscoveryDetailResponseTrendingHistory {
  readonly date?: string;
  readonly rank_position_daily?: string;
  readonly views_daily?: number;
}

export interface DiscoveryTrendingListParams {
  readonly advertiser_id: string;
  readonly discovery_type: string;
  readonly country_code?: string;
  readonly category_name?: string;
  readonly date_range?: string;
}

export interface DiscoveryTrendingListResponse {
  readonly filter_info?: DiscoveryTrendingListResponseFilterInfo;
  readonly list?: ReadonlyArray<DiscoveryTrendingListResponseList>;
}

export interface DiscoveryTrendingListResponseFilterInfo {
  readonly date_range?: string;
  readonly country_code?: string;
  readonly category_name?: string;
}

export interface DiscoveryTrendingListResponseList {
  readonly hashtag_id?: string;
  readonly hashtag_name?: string;
  readonly rank_position?: string;
  readonly rank_change?: string;
  readonly views?: number;
  readonly views_global_lifetime?: number;
  readonly posts?: number;
  readonly posts_global_lifetime?: number;
  readonly top_country_list?: ReadonlyArray<string>;
  readonly trending_history?: ReadonlyArray<DiscoveryTrendingListResponseListTrendingHistory>;
}

export interface DiscoveryTrendingListResponseListTrendingHistory {
  readonly date?: string;
  readonly rank_position_daily?: string;
  readonly views_daily?: number;
}

export interface DiscoveryTrendingSearchKeywordParams {
  readonly business_id: string;
  readonly query: string;
  readonly is_personalized?: boolean;
}

export interface DiscoveryTrendingSearchKeywordResponse {
  readonly search_keywords?: ReadonlyArray<string>;
}

export interface DiscoveryTrendingSearchParams {
  readonly business_id: string;
  readonly is_personalized?: boolean;
}

export interface DiscoveryTrendingSearchResponse {
  readonly search_keywords?: ReadonlyArray<string>;
}

export interface DiscoveryVideoListParams {
  readonly advertiser_id: string;
  readonly discovery_type: string;
  readonly hashtag_ids: ReadonlyArray<string>;
  readonly country_code?: string;
  readonly date_range?: string;
}

export interface DiscoveryVideoListResponse {
  readonly list?: ReadonlyArray<DiscoveryVideoListResponseList>;
}

export interface DiscoveryVideoListResponseList {
  readonly hashtag_id?: string;
  readonly hashtag_name?: string;
  readonly top_video_list?: ReadonlyArray<DiscoveryVideoListResponseListTopVideoList>;
}

export interface DiscoveryVideoListResponseListTopVideoList {
  readonly video_id?: string;
  readonly embed_url?: string;
  readonly share_url?: string;
}

export interface DmpCustomAudienceApplyLogParams {
  readonly advertiser_id: string;
  readonly custom_audience_ids: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
  readonly timezone?: string;
}

export interface DmpCustomAudienceApplyLogResponse {
  readonly advertiser_id?: string;
  readonly list?: ReadonlyArray<string>;
  readonly audience_id?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly usage_mode?: string;
  readonly editor?: string;
  readonly action_timestamp?: string;
  readonly page_info?: DmpCustomAudienceApplyLogResponsePageInfo;
}

export interface DmpCustomAudienceApplyLogResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface DmpCustomAudienceApplyParams {
  readonly advertiser_id: string;
  readonly custom_audience_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
  readonly action_mode: string;
  readonly usage_mode?: string;
}

export interface DmpCustomAudienceApplyResponse {

}

export interface DmpCustomAudienceCreateParams {
  readonly advertiser_id: string;
  readonly custom_audience_name: string;
  readonly audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  readonly file_paths: ReadonlyArray<string>;
  readonly calculate_type: string;
  readonly retention_in_days?: number;
}

export interface DmpCustomAudienceCreateResponse {
  readonly custom_audience_id?: string;
}

export interface DmpCustomAudienceDeleteParams {
  readonly advertiser_id: string;
  readonly custom_audience_ids: ReadonlyArray<string>;
}

export interface DmpCustomAudienceDeleteResponse {

}

export interface DmpCustomAudienceFileUploadParams {
  readonly advertiser_id: string;
  readonly file: unknown;
  readonly file_signature: string;
  readonly calculate_type: string;
}

export interface DmpCustomAudienceFileUploadResponse {
  readonly file_path?: string;
}

export interface DmpCustomAudienceGetParams {
  readonly advertiser_id: string;
  readonly custom_audience_ids: ReadonlyArray<string>;
  readonly history_size?: number;
}

export interface DmpCustomAudienceGetResponse {
  readonly list?: ReadonlyArray<DmpCustomAudienceGetResponseList>;
}

export interface DmpCustomAudienceGetResponseList {
  readonly audience_details?: DmpCustomAudienceGetResponseListAudienceDetails;
  readonly audience_history?: ReadonlyArray<DmpCustomAudienceGetResponseListAudienceHistory>;
}

export interface DmpCustomAudienceGetResponseListAudienceDetails {
  readonly audience_id?: string;
  readonly msg?: string;
  readonly audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  readonly error_msg?: string;
  readonly is_valid?: boolean;
  readonly is_expiring?: boolean;
  readonly expired_time?: string;
  readonly name?: string;
  readonly rule?: string;
  readonly is_auto_refresh?: boolean;
  readonly shared?: boolean;
  readonly is_creator?: boolean;
  readonly owner_id?: string;
  readonly create_time?: string;
  readonly type?: string;
  readonly cover_num?: number;
  readonly calculate_type?: string;
  readonly lookalike_spec?: ReadonlyArray<DmpCustomAudienceGetResponseListAudienceDetailsLookalikeSpec>;
}

export interface DmpCustomAudienceGetResponseListAudienceDetailsLookalikeSpec {
  readonly source_audience_id?: string;
  readonly include_source?: boolean;
  readonly mobile_os?: string;
  readonly placements?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly audience_size?: "NARROW" | "BALANCED" | "BROAD";
}

export interface DmpCustomAudienceGetResponseListAudienceHistory {
  readonly action?: string;
  readonly action_detail?: string;
  readonly editor?: string;
  readonly msg?: string;
  readonly opt_time?: string;
}

export interface DmpCustomAudienceListParams {
  readonly advertiser_id: string;
  readonly custom_audience_ids?: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface DmpCustomAudienceListResponse {
  readonly list?: ReadonlyArray<DmpCustomAudienceListResponseList>;
  readonly page_info?: DmpCustomAudienceListResponsePageInfo;
}

export interface DmpCustomAudienceListResponseList {
  readonly shared?: boolean;
  readonly is_creator?: boolean;
  readonly audience_id?: string;
  readonly cover_num?: number;
  readonly create_time?: string;
  readonly is_valid?: boolean;
  readonly is_expiring?: boolean;
  readonly expired_time?: string;
  readonly name?: string;
  readonly audience_type?: string;
  readonly calculate_type?: string;
}

export interface DmpCustomAudienceListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface DmpCustomAudienceLookalikeCreateParams {
  readonly advertiser_id: string;
  readonly custom_audience_name: string;
  readonly audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  readonly lookalike_spec: DmpCustomAudienceLookalikeCreateParamsLookalikeSpec;
}

export interface DmpCustomAudienceLookalikeCreateParamsLookalikeSpec {
  readonly source_audience_id: string;
  readonly include_source: boolean;
  readonly mobile_os: string;
  readonly placements: ReadonlyArray<string>;
  readonly location_ids: ReadonlyArray<string>;
  readonly audience_size: "NARROW" | "BALANCED" | "BROAD";
}

export interface DmpCustomAudienceLookalikeCreateResponse {
  readonly custom_audience_id?: string;
}

export interface DmpCustomAudienceLookalikeUpdateParams {
  readonly advertiser_id: string;
  readonly custom_audience_ids: ReadonlyArray<string>;
}

export interface DmpCustomAudienceLookalikeUpdateResponse {

}

export interface DmpCustomAudienceRuleCreateParams {
  readonly advertiser_id: string;
  readonly custom_audience_name: string;
  readonly audience_type: "ENGAGEMENT" | "ENGAGEMENT_ORGANIC_VIDEO" | "ENGAGEMENT_LIVE_VIDEO" | "APP" | "PIXEL" | "LEAD_GENERATION" | "BUSINESS_ACCOUNT" | "TIKTOK_SHOP" | "OFFLINE";
  readonly audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  readonly retention_in_days?: number;
  readonly is_auto_refresh?: boolean;
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly rule_spec: DmpCustomAudienceRuleCreateParamsRuleSpec;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpec {
  readonly inclusion_rule_set: DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSet;
  readonly exclusion_rule_set?: DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSet;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSet {
  readonly operator?: string;
  readonly rules?: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRules>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRules {
  readonly event_source_ids?: ReadonlyArray<string>;
  readonly retention_days?: number;
  readonly filter_set?: DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSet;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSet {
  readonly operator?: string;
  readonly filters?: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSetFilters>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSetFilters {
  readonly field?: string;
  readonly operator?: string;
  readonly value?: string;
  readonly parameter_filters?: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSetFiltersParameterFilters>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecExclusionRuleSetRulesFilterSetFiltersParameterFilters {
  readonly field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  readonly operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "NOT_EQUAL" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GREATER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS";
  readonly values?: ReadonlyArray<string>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSet {
  readonly operator: string;
  readonly rules: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRules>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRules {
  readonly event_source_ids?: ReadonlyArray<string>;
  readonly retention_days: number;
  readonly filter_set: DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSet;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSet {
  readonly operator: string;
  readonly filters: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSetFilters>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSetFilters {
  readonly field: string;
  readonly operator: string;
  readonly value: string;
  readonly parameter_filters?: ReadonlyArray<DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSetFiltersParameterFilters>;
}

export interface DmpCustomAudienceRuleCreateParamsRuleSpecInclusionRuleSetRulesFilterSetFiltersParameterFilters {
  readonly field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  readonly operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "NOT_EQUAL" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GREATER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS";
  readonly values?: ReadonlyArray<string>;
}

export interface DmpCustomAudienceRuleCreateResponse {
  readonly custom_audience_id?: string;
}

export interface DmpCustomAudienceShareCancelParams {
  readonly custom_audience_id: string;
  readonly shared_advertiser_id: string;
  readonly advertiser_id: string;
}

export interface DmpCustomAudienceShareCancelResponse {

}

export interface DmpCustomAudienceShareLogParams {
  readonly custom_audience_id: string;
  readonly advertiser_id: string;
}

export interface DmpCustomAudienceShareLogResponse {
  readonly list?: ReadonlyArray<DmpCustomAudienceShareLogResponseList>;
}

export interface DmpCustomAudienceShareLogResponseList {
  readonly shared_advertiser_id?: string;
  readonly shared_advertiser_name?: string;
  readonly custom_audience_id?: string;
  readonly status?: string;
}

export interface DmpCustomAudienceShareParams {
  readonly custom_audience_ids: ReadonlyArray<string>;
  readonly shared_advertiser_ids: ReadonlyArray<string>;
  readonly advertiser_id: string;
}

export interface DmpCustomAudienceShareResponse {

}

export interface DmpCustomAudienceUpdateParams {
  readonly advertiser_id: string;
  readonly custom_audience_id: string;
  readonly custom_audience_name?: string;
  readonly audience_sub_type?: "REACH_FREQUENCY" | "NORMAL";
  readonly file_paths?: ReadonlyArray<string>;
  readonly action?: "APPEND" | "REMOVE" | "REPLACE";
}

export interface DmpCustomAudienceUpdateResponse {

}

export interface DmpSavedAudienceCreateParams {
  readonly advertiser_id: string;
  readonly saved_audience_name: string;
  readonly location_ids: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<DmpSavedAudienceCreateParamsActions>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
}

export interface DmpSavedAudienceCreateParamsActions {
  readonly action_category_ids?: ReadonlyArray<string>;
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
}

export interface DmpSavedAudienceCreateResponse {
  readonly saved_audience_id?: string;
}

export interface DmpSavedAudienceDeleteParams {
  readonly advertiser_id: string;
  readonly saved_audience_ids: ReadonlyArray<string>;
}

export interface DmpSavedAudienceDeleteResponse {

}

export interface DmpSavedAudienceListParams {
  readonly advertiser_id: string;
  readonly saved_audience_ids?: ReadonlyArray<string>;
}

export interface DmpSavedAudienceListResponse {
  readonly saved_audiences?: ReadonlyArray<DmpSavedAudienceListResponseSavedAudiences>;
  readonly page_info?: DmpSavedAudienceListResponsePageInfo;
}

export interface DmpSavedAudienceListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface DmpSavedAudienceListResponseSavedAudiences {
  readonly saved_audience_id?: string;
  readonly saved_audience_name?: string;
  readonly location_ids?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly age_groups?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<DmpSavedAudienceListResponseSavedAudiencesActions>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
}

export interface DmpSavedAudienceListResponseSavedAudiencesActions {
  readonly action_category_ids?: ReadonlyArray<string>;
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
}

export interface DynamicSceneGetParams {
  readonly advertiser_id: string;
  readonly material_package_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface DynamicSceneGetResponse {
  readonly list?: ReadonlyArray<DynamicSceneGetResponseList>;
  readonly page_info?: DynamicSceneGetResponsePageInfo;
}

export interface DynamicSceneGetResponseList {
  readonly video_id?: string;
  readonly video_preview_url?: string;
  readonly music_id?: string;
  readonly music_name?: string;
  readonly music_preview_url?: string;
  readonly width?: number;
  readonly height?: number;
  readonly duration?: number;
  readonly story_arc?: ReadonlyArray<string>;
  readonly slots?: ReadonlyArray<DynamicSceneGetResponseListSlots>;
}

export interface DynamicSceneGetResponseListSlots {
  readonly order?: number;
  readonly tag?: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly mute?: boolean;
  readonly bgm_volume?: number;
}

export interface DynamicSceneGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface DynamicSceneMaterialSubmitParams {
  readonly advertiser_id: string;
  readonly slots: ReadonlyArray<DynamicSceneMaterialSubmitParamsSlots>;
  readonly auto_soundtrack?: boolean;
  readonly music_ids?: ReadonlyArray<string>;
}

export interface DynamicSceneMaterialSubmitParamsSlots {
  readonly order: number;
  readonly tag: string;
  readonly video_ids: ReadonlyArray<string>;
  readonly mute?: boolean;
  readonly bgm_volume?: number;
}

export interface DynamicSceneMaterialSubmitResponse {
  readonly material_package_id?: string;
}

export interface DynamicSceneReportGetParams {
  readonly advertiser_id: string;
  readonly data_level: string;
  readonly input_ids: ReadonlyArray<string>;
  readonly dimensions: ReadonlyArray<string>;
  readonly metrics?: ReadonlyArray<string>;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly order_field?: string;
  readonly order_type?: "ASC" | "DESC";
  readonly filters?: ReadonlyArray<DynamicSceneReportGetParamsFilters>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface DynamicSceneReportGetParamsFilters {
  readonly field_name?: string;
  readonly filter_type?: string;
  readonly filter_value?: string;
}

export interface DynamicSceneReportGetResponse {
  readonly code?: number;
  readonly message?: string;
  readonly list?: ReadonlyArray<DynamicSceneReportGetResponseList>;
  readonly request_id?: string;
}

export interface DynamicSceneReportGetResponseList {
  readonly dimension?: DynamicSceneReportGetResponseListDimension;
  readonly metric?: DynamicSceneReportGetResponseListMetric;
}

export interface DynamicSceneReportGetResponseListDimension {
  readonly advertiser_id?: string;
  readonly adgroup_id?: string;
  readonly story_arc?: string;
  readonly order?: number;
  readonly video_id?: string;
}

export interface DynamicSceneReportGetResponseListMetric {
  readonly clicks?: number;
  readonly complete_plays?: number;
  readonly break_plays?: number;
  readonly ctr?: number;
  readonly complete_play_rate?: number;
  readonly break_play_rate?: number;
}

export interface DynamicSceneTaskCreateParams {
  readonly advertiser_id: string;
  readonly material_package_id: string;
}

export interface DynamicSceneTaskCreateResponse {
  readonly task_id?: string;
}

export interface DynamicSceneTaskGetParams {
  readonly advertiser_id: string;
  readonly task_id?: string;
}

export interface DynamicSceneTaskGetResponse {
  readonly status?: "PROCESSING" | "FAIL" | "SUCCESS";
  readonly error_msg?: string;
  readonly material_package_id?: string;
  readonly available_quota?: number;
  readonly videos?: ReadonlyArray<DynamicSceneTaskGetResponseVideos>;
}

export interface DynamicSceneTaskGetResponseVideos {
  readonly music_id?: string;
  readonly music_name?: string;
  readonly music_preview_url?: string;
  readonly width?: number;
  readonly height?: number;
  readonly duration?: number;
  readonly story_arc?: ReadonlyArray<string>;
  readonly video_id?: string;
  readonly video_preview_url?: string;
  readonly slots?: ReadonlyArray<DynamicSceneTaskGetResponseVideosSlots>;
}

export interface DynamicSceneTaskGetResponseVideosSlots {
  readonly order?: number;
  readonly tag?: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly mute?: boolean;
  readonly bgm_volume?: number;
}

export interface EventTrackParams {
  readonly event_source: string;
  readonly event_source_id: string;
  readonly data: ReadonlyArray<EventTrackParamsData>;
}

export interface EventTrackParamsData {
  readonly event: string;
  readonly event_time: number;
  readonly event_id?: string;
  readonly user?: string;
  readonly properties?: string;
  readonly page?: string;
  readonly app?: string;
  readonly ad?: string;
  readonly limited_data_use?: boolean;
  readonly lead?: string;
}

export interface EventTrackResponse {

}

export interface FileFinishUploadParams {
  readonly advertiser_id: string;
  readonly upload_id: string;
}

export interface FileFinishUploadResponse {
  readonly file_id?: string;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly size?: number;
}

export interface FileImageAdInfoParams {
  readonly advertiser_id: string;
  readonly image_ids: ReadonlyArray<string>;
}

export interface FileImageAdInfoResponse {
  readonly list?: ReadonlyArray<FileImageAdInfoResponseList>;
}

export interface FileImageAdInfoResponseList {
  readonly image_id?: string;
  readonly material_id?: string;
  readonly is_carousel_usable?: boolean;
  readonly width?: number;
  readonly format?: string;
  readonly image_url?: string;
  readonly height?: number;
  readonly signature?: string;
  readonly size?: number;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly displayable?: boolean;
}

export interface FileImageAdSearchParams {
  readonly advertiser_id: string;
  readonly filtering?: FileImageAdSearchParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface FileImageAdSearchParamsFiltering {
  readonly height?: number;
  readonly image_ids?: ReadonlyArray<string>;
  readonly material_ids?: ReadonlyArray<string>;
  readonly ratio?: string;
  readonly width?: number;
  readonly displayable?: boolean;
}

export interface FileImageAdSearchResponse {
  readonly list?: ReadonlyArray<FileImageAdSearchResponseList>;
  readonly page_info?: FileImageAdSearchResponsePageInfo;
}

export interface FileImageAdSearchResponseList {
  readonly image_id?: string;
  readonly material_id?: string;
  readonly is_carousel_usable?: boolean;
  readonly width?: number;
  readonly format?: string;
  readonly image_url?: string;
  readonly height?: number;
  readonly signature?: string;
  readonly size?: number;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly displayable?: boolean;
}

export interface FileImageAdSearchResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface FileImageAdUpdateParams {
  readonly advertiser_id: string;
  readonly file_name: string;
  readonly image_id: string;
}

export interface FileImageAdUpdateResponse {

}

export interface FileImageAdUploadParams {
  readonly advertiser_id: string;
  readonly file_name?: string;
  readonly upload_type: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL" | "UPLOAD_BY_FILE_ID";
  readonly image_file?: unknown;
  readonly image_signature?: string;
  readonly image_url?: string;
  readonly file_id?: string;
}

export interface FileImageAdUploadResponse {
  readonly image_id?: string;
  readonly material_id?: string;
  readonly is_carousel_usable?: boolean;
  readonly displayable?: boolean;
  readonly height?: number;
  readonly width?: number;
  readonly format?: string;
  readonly image_url?: string;
  readonly signature?: string;
  readonly size?: number;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface FileMusicGetParams {
  readonly advertiser_id: string;
  readonly music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly search_type?: "SEARCH_BY_KEYWORD" | "SEARCH_BY_RECOMMEND";
  readonly filtering?: FileMusicGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface FileMusicGetParamsFiltering {
  readonly keyword?: string;
  readonly image_urls?: ReadonlyArray<string>;
  readonly music_ids?: ReadonlyArray<string>;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly product_set_id?: string;
  readonly sku_ids?: ReadonlyArray<string>;
  readonly carousel_image_index?: number;
  readonly material_ids?: ReadonlyArray<string>;
  readonly styles?: ReadonlyArray<string>;
  readonly sources?: ReadonlyArray<string>;
}

export interface FileMusicGetResponse {
  readonly musics?: ReadonlyArray<string>;
  readonly music_id?: string;
  readonly material_id?: string;
  readonly sources?: ReadonlyArray<string>;
  readonly author?: string;
  readonly liked?: boolean;
  readonly cover_url?: string;
  readonly url?: string;
  readonly duration?: number;
  readonly style?: string;
  readonly signature?: string;
  readonly name?: string;
  readonly file_name?: string;
  readonly copyright?: "MUSIC_FORBID_VIDEO_ALLOW" | "MUSIC_FORBID_VIDEO_FORBID";
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly page_info?: FileMusicGetResponsePageInfo;
}

export interface FileMusicGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface FileMusicUploadParams {
  readonly advertiser_id: string;
  readonly music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_FILE_ID";
  readonly material_action?: "ADD_TO_LIKED" | "ADD_TO_HISTORY" | "REMOVE_FROM_LIKED";
  readonly music_file?: unknown;
  readonly music_signature?: string;
  readonly file_name?: string;
  readonly file_id?: string;
  readonly material_id?: string;
}

export interface FileMusicUploadResponse {
  readonly music_id?: string;
  readonly material_id?: string;
  readonly sources?: ReadonlyArray<string>;
  readonly author?: string;
  readonly liked?: boolean;
  readonly cover_url?: string;
  readonly url?: string;
  readonly duration?: number;
  readonly style?: string;
  readonly signature?: string;
  readonly file_name?: string;
  readonly copyright?: "MUSIC_FORBID_VIDEO_ALLOW" | "MUSIC_FORBID_VIDEO_FORBID";
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface FileNameCheckParams {
  readonly advertiser_id: string;
  readonly files?: ReadonlyArray<FileNameCheckParamsFiles>;
  readonly file_name?: string;
  readonly file_type?: "VIDEO" | "IMAGE";
}

export interface FileNameCheckParamsFiles {
  readonly file_name?: string;
  readonly file_type?: "VIDEO" | "IMAGE";
}

export interface FileNameCheckResponse {
  readonly duplicate?: boolean;
  readonly duplicate_material_id?: string;
  readonly batch_results?: ReadonlyArray<FileNameCheckResponseBatchResults>;
}

export interface FileNameCheckResponseBatchResults {
  readonly file_name?: string;
  readonly duplicate?: boolean;
  readonly duplicate_material_id?: string;
}

export interface FileStartUploadParams {
  readonly advertiser_id: string;
  readonly size: number;
  readonly content_type: string;
  readonly name?: string;
}

export interface FileStartUploadResponse {
  readonly upload_id?: string;
  readonly file_name?: string;
  readonly start_offset?: number;
  readonly end_offset?: number;
}

export interface FileTemporarilyUploadParams {
  readonly advertiser_id: string;
  readonly upload_type: "FILE" | "URL";
  readonly content_type: string;
  readonly file?: unknown;
  readonly url?: string;
  readonly signature?: string;
  readonly name?: string;
}

export interface FileTemporarilyUploadResponse {
  readonly file_id?: string;
  readonly signature?: string;
  readonly file_size?: number;
  readonly create_time?: string;
}

export interface FileTransferUploadParams {
  readonly advertiser_id: string;
  readonly upload_id: string;
  readonly signature: string;
  readonly start_offset: number;
  readonly file: unknown;
}

export interface FileTransferUploadResponse {
  readonly start_offset?: number;
  readonly end_offset?: number;
}

export interface FileVideoAdInfoParams {
  readonly advertiser_id: string;
  readonly video_ids: ReadonlyArray<string>;
}

export interface FileVideoAdInfoResponse {
  readonly list?: ReadonlyArray<string>;
  readonly displayable?: boolean;
  readonly width?: number;
  readonly video_cover_url?: string;
  readonly bit_rate?: number;
  readonly format?: string;
  readonly preview_url?: string;
  readonly preview_url_expire_time?: string;
  readonly duration?: number;
  readonly height?: number;
  readonly signature?: string;
  readonly video_id?: string;
  readonly size?: number;
  readonly material_id?: string;
  readonly allowed_placements?: ReadonlyArray<string>;
  readonly allow_download?: boolean;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface FileVideoAdSearchParams {
  readonly advertiser_id: string;
  readonly filtering?: FileVideoAdSearchParamsFiltering;
  readonly sort_field?: "CREATE_TIME" | "MODIFY_TIME";
  readonly page?: number;
  readonly page_size?: number;
}

export interface FileVideoAdSearchParamsFiltering {
  readonly video_ids?: ReadonlyArray<string>;
  readonly material_ids?: ReadonlyArray<string>;
  readonly video_name?: string;
  readonly video_material_sources?: ReadonlyArray<"UPLOADED_TO_TIKTOK_ADS_MANAGER" | "UPLOADED_TO_CATALOG" | "CREATIVE_TOOL_SMART_VIDEO" | "CREATIVE_TOOL_QUICK_OPTIMIZATION" | "CREATIVE_TOOL_VIDEO_TEMPLATE" | "CREATIVE_TOOL_SMART_VIDEO_SOUNDTRACK" | "CREATIVE_TOOL_TIKTOK_VIDEO_EDITOR" | "TIKTOK_CREATIVE_EXCHANGE" | "CATALOG_VIDEO_TEMPLATE" | "DYNAMIC_VIDEO_EDITOR" | "CREATIVE_CHALLENGE" | "AUTOMATED_CREATIVE_OPTIMIZATION" | "OTHER" | "QUICK_GENERATION" | "CREATIVE_CENTER_VIDEO_UPLOAD" | "CREATIVE_CENTER_TIKTOK_VIDEO_EDITOR" | "CREATIVE_CENTER_VIDEO_TEMPLATE" | "DYNAMIC_SCENE" | "SMART_OPTIMIZATION_TOOL">;
}

export interface FileVideoAdSearchResponse {
  readonly list?: ReadonlyArray<FileVideoAdSearchResponseList>;
  readonly page_info?: FileVideoAdSearchResponsePageInfo;
}

export interface FileVideoAdSearchResponseList {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly format?: string;
  readonly preview_url?: string;
  readonly preview_url_expire_time?: string;
  readonly duration?: number;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly signature?: string;
  readonly size?: number;
  readonly material_id?: string;
  readonly allowed_placements?: ReadonlyArray<string>;
  readonly allow_download?: boolean;
  readonly file_name?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly displayable?: boolean;
}

export interface FileVideoAdSearchResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface FileVideoAdUpdateParams {
  readonly advertiser_id: string;
  readonly file_name: string;
  readonly video_id: string;
}

export interface FileVideoAdUpdateResponse {

}

export interface FileVideoAdUploadParams {
  readonly advertiser_id: string;
  readonly file_name?: string;
  readonly upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL" | "UPLOAD_BY_FILE_ID" | "UPLOAD_BY_VIDEO_ID";
  readonly video_file?: unknown;
  readonly video_signature?: string;
  readonly video_url?: string;
  readonly file_id?: string;
  readonly video_id?: string;
  readonly is_third_party?: boolean;
  readonly flaw_detect?: boolean;
  readonly auto_fix_enabled?: boolean;
  readonly auto_bind_enabled?: boolean;
}

export interface FileVideoAdUploadResponse {
  readonly video_cover_url?: string;
  readonly format?: string;
  readonly preview_url?: string;
  readonly preview_url_expire_time?: string;
  readonly file_name?: string;
  readonly displayable?: boolean;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly signature?: string;
  readonly duration?: number;
  readonly video_id?: string;
  readonly size?: number;
  readonly material_id?: string;
  readonly allowed_placements?: ReadonlyArray<string>;
  readonly allow_download?: boolean;
  readonly fix_task_id?: string;
  readonly flaw_types?: ReadonlyArray<"LOW_RESOLUTION" | "ILLEGAL_VIDEO_SIZE" | "NO_BGM" | "BLACK_EDGE" | "ILLEGAL_DURATION">;
}

export interface FileVideoSuggestcoverParams {
  readonly advertiser_id: string;
  readonly video_id: string;
  readonly poster_number?: number;
}

export interface FileVideoSuggestcoverResponse {
  readonly list?: ReadonlyArray<FileVideoSuggestcoverResponseList>;
}

export interface FileVideoSuggestcoverResponseList {
  readonly width?: number;
  readonly height?: number;
  readonly id?: string;
  readonly url?: string;
}

export interface GmvMaxBidRecommendParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly shopping_ads_type: "PRODUCT" | "LIVE";
  readonly optimization_goal: string;
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly identity_id?: string;
}

export interface GmvMaxBidRecommendResponse {
  readonly roas_bid?: number;
  readonly budget?: number;
}

export interface GmvMaxCampaignGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly filtering: GmvMaxCampaignGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface GmvMaxCampaignGetParamsFiltering {
  readonly gmv_max_promotion_types: ReadonlyArray<"PRODUCT_GMV_MAX" | "LIVE_GMV_MAX">;
  readonly store_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_name?: string;
  readonly primary_status?: "STATUS_DELIVERY_OK" | "STATUS_DISABLE" | "STATUS_DELETE";
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
}

export interface GmvMaxCampaignGetResponse {
  readonly list?: ReadonlyArray<GmvMaxCampaignGetResponseList>;
  readonly page_info?: GmvMaxCampaignGetResponsePageInfo;
}

export interface GmvMaxCampaignGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly secondary_status?: string;
  readonly roi_protection_compensation_status?: "IN_EFFECT" | "NOT_ELIGIBLE";
}

export interface GmvMaxCampaignGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface GmvMaxCreationCustomAnchorVideoListCreateParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly custom_anchor_video_list: ReadonlyArray<GmvMaxCreationCustomAnchorVideoListCreateParamsCustomAnchorVideoList>;
}

export interface GmvMaxCreationCustomAnchorVideoListCreateParamsCustomAnchorVideoList {
  readonly item_id: string;
  readonly identity_info: GmvMaxCreationCustomAnchorVideoListCreateParamsCustomAnchorVideoListIdentityInfo;
  readonly spu_id_list: ReadonlyArray<string>;
}

export interface GmvMaxCreationCustomAnchorVideoListCreateParamsCustomAnchorVideoListIdentityInfo {
  readonly identity_id: string;
  readonly identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface GmvMaxCreationCustomAnchorVideoListCreateResponse {
  readonly failure_list?: GmvMaxCreationCustomAnchorVideoListCreateResponseFailureList;
}

export interface GmvMaxCreationCustomAnchorVideoListCreateResponseFailureList {
  readonly item_id?: ReadonlyArray<string>;
  readonly identity_info?: ReadonlyArray<string>;
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly spu_id_list?: string;
  readonly reason?: "IDENTITY_NO_PERMISSION" | "INVALID_PARAMETER" | "AUTH_CODE_CAN_NOT_CHANGE_ANCHOR" | "ITEM_NOT_FOUND" | "NATIVE_ANCHOR_EXISTS";
  readonly error_message?: string;
}

export interface GmvMaxCreationCustomAnchorVideoListDeleteParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly custom_anchor_video_list: ReadonlyArray<GmvMaxCreationCustomAnchorVideoListDeleteParamsCustomAnchorVideoList>;
  readonly campaign_id?: string;
}

export interface GmvMaxCreationCustomAnchorVideoListDeleteParamsCustomAnchorVideoList {
  readonly item_id: string;
  readonly spu_id_list: ReadonlyArray<string>;
}

export interface GmvMaxCreationCustomAnchorVideoListDeleteResponse {

}

export interface GmvMaxCreationCustomAnchorVideoListGetParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly creative_source: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly sort_field?: "GMV" | "POST_TIME" | "VIDEO_VIEWS" | "VIDEO_LIKES" | "CLICK_THROUGH_RATE" | "PRODUCT_CLICKS";
  readonly sort_type?: "ASC" | "DESC";
  readonly keyword?: string;
  readonly need_auth_code_video?: boolean;
  readonly identity_list?: ReadonlyArray<GmvMaxCreationCustomAnchorVideoListGetParamsIdentityList>;
  readonly campaign_id?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface GmvMaxCreationCustomAnchorVideoListGetParamsIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface GmvMaxCreationCustomAnchorVideoListGetResponse {
  readonly item_list?: ReadonlyArray<GmvMaxCreationCustomAnchorVideoListGetResponseItemList>;
  readonly page_info?: GmvMaxCreationCustomAnchorVideoListGetResponsePageInfo;
}

export interface GmvMaxCreationCustomAnchorVideoListGetResponseItemList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly can_change_anchor?: boolean;
  readonly identity_info?: GmvMaxCreationCustomAnchorVideoListGetResponseItemListIdentityInfo;
  readonly video_info?: GmvMaxCreationCustomAnchorVideoListGetResponseItemListVideoInfo;
}

export interface GmvMaxCreationCustomAnchorVideoListGetResponseItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly display_name?: string;
}

export interface GmvMaxCreationCustomAnchorVideoListGetResponseItemListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface GmvMaxCreationCustomAnchorVideoListGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface GmvMaxCreationShopVideoVideoAnchorsParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly item_ids: ReadonlyArray<string>;
  readonly campaign_id?: string;
}

export interface GmvMaxCreationShopVideoVideoAnchorsResponse {
  readonly video_list?: GmvMaxCreationShopVideoVideoAnchorsResponseVideoList;
}

export interface GmvMaxCreationShopVideoVideoAnchorsResponseVideoList {
  readonly item_id?: string;
  readonly product_list?: GmvMaxCreationShopVideoVideoAnchorsResponseVideoListProductList;
}

export interface GmvMaxCreationShopVideoVideoAnchorsResponseVideoListProductList {
  readonly spu_id?: string;
  readonly title?: string;
  readonly picture?: string;
  readonly anchor_source?: "CUSTOM" | "ORGANIC";
}

export interface GmvMaxCustomAnchorVideoListGetParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly campaign_custom_anchor_video_id: string;
  readonly custom_anchor_video_list: ReadonlyArray<GmvMaxCustomAnchorVideoListGetParamsCustomAnchorVideoList>;
}

export interface GmvMaxCustomAnchorVideoListGetParamsCustomAnchorVideoList {
  readonly item_id: string;
  readonly identity_info: GmvMaxCustomAnchorVideoListGetParamsCustomAnchorVideoListIdentityInfo;
  readonly spu_id_list?: ReadonlyArray<string>;
}

export interface GmvMaxCustomAnchorVideoListGetParamsCustomAnchorVideoListIdentityInfo {
  readonly identity_id: string;
  readonly identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface GmvMaxCustomAnchorVideoListGetResponse {
  readonly custom_anchor_video_list?: ReadonlyArray<GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoList>;
}

export interface GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly identity_info?: GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoListIdentityInfo;
  readonly video_info?: GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoListVideoInfo;
}

export interface GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly user_name?: string;
}

export interface GmvMaxCustomAnchorVideoListGetResponseCustomAnchorVideoListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface GmvMaxExclusiveAuthorizationCreateParams {
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly advertiser_id: string;
}

export interface GmvMaxExclusiveAuthorizationCreateResponse {

}

export interface GmvMaxExclusiveAuthorizationGetParams {
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly advertiser_id: string;
}

export interface GmvMaxExclusiveAuthorizationGetResponse {
  readonly store_id?: string;
  readonly advertiser_id?: string;
  readonly authorization_status?: "EFFECTIVE" | "INEFFECTIVE" | "UNAUTHORIZED";
  readonly advertiser_name?: string;
  readonly advertiser_status?: "STATUS_ENABLE" | "STATUS_CONFIRM_FAIL" | "STATUS_PENDING_CONFIRM" | "STATUS_LIMIT" | "STATUS_CONTRACT_PENDING" | "STATUS_DISABLE" | "STATUS_PENDING_CONFIRM_MODIFY" | "STATUS_PENDING_VERIFIED" | "STATUS_SELF_SERVICE_UNAUDITED" | "STATUS_WAIT_FOR_BPM_AUDIT" | "STATUS_CONFIRM_FAIL_END" | "STATUS_CONFIRM_MODIFY_FAIL";
  readonly identity_id?: string;
}

export interface GmvMaxIdentityGetParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
}

export interface GmvMaxIdentityGetResponse {
  readonly identity_list?: ReadonlyArray<GmvMaxIdentityGetResponseIdentityList>;
}

export interface GmvMaxIdentityGetResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly display_name?: string;
  readonly user_name?: string;
  readonly is_running_custom_shop_ads?: boolean;
  readonly product_gmv_max_available?: boolean;
  readonly live_gmv_max_available?: boolean;
  readonly unavailable_reason?: "OCCUPIED" | "UNAUTHORIZED";
}

export interface GmvMaxOccupiedCustomShopAdsListParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly occupied_asset_type: "IDENTITY_TT_USER" | "TT_USER" | "IDENTITY_BC_AUTH_TT" | "BC_AUTH_TT" | "IDENTITY_TTS_TT" | "TTS_TT" | "SPU";
  readonly asset_ids: ReadonlyArray<string>;
}

export interface GmvMaxOccupiedCustomShopAdsListResponse {
  readonly occupied_custom_shop_ads?: ReadonlyArray<GmvMaxOccupiedCustomShopAdsListResponseOccupiedCustomShopAds>;
}

export interface GmvMaxOccupiedCustomShopAdsListResponseOccupiedCustomShopAds {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly create_time?: string;
}

export interface GmvMaxStoreListParams {
  readonly advertiser_id: string;
}

export interface GmvMaxStoreListResponse {
  readonly store_list?: ReadonlyArray<GmvMaxStoreListResponseStoreList>;
}

export interface GmvMaxStoreListResponseStoreList {
  readonly store_id?: string;
  readonly is_gmv_max_available?: boolean;
  readonly store_authorized_bc_id?: string;
  readonly is_owner_bc?: boolean;
  readonly store_authorized_bc_info?: GmvMaxStoreListResponseStoreListStoreAuthorizedBcInfo;
  readonly thumbnail_url?: string;
  readonly store_name?: string;
  readonly store_code?: string;
  readonly targeting_region_codes?: ReadonlyArray<string>;
  readonly store_status?: "ACTIVE" | "INACTIVE" | "NEW_CREATE";
  readonly store_role?: "AD_PROMOTION" | "MANAGER" | "UNSET";
  readonly exclusive_authorized_advertiser_info?: GmvMaxStoreListResponseStoreListExclusiveAuthorizedAdvertiserInfo;
}

export interface GmvMaxStoreListResponseStoreListExclusiveAuthorizedAdvertiserInfo {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
  readonly advertiser_status?: "STATUS_ENABLE" | "STATUS_CONFIRM_FAIL" | "STATUS_PENDING_CONFIRM" | "STATUS_LIMIT" | "STATUS_CONTRACT_PENDING" | "STATUS_DISABLE" | "STATUS_PENDING_CONFIRM_MODIFY" | "STATUS_PENDING_VERIFIED" | "STATUS_SELF_SERVICE_UNAUDITED" | "STATUS_WAIT_FOR_BPM_AUDIT" | "STATUS_CONFIRM_FAIL_END" | "STATUS_CONFIRM_MODIFY_FAIL";
}

export interface GmvMaxStoreListResponseStoreListStoreAuthorizedBcInfo {
  readonly bc_id?: string;
  readonly bc_profile_image?: string;
  readonly bc_name?: string;
  readonly user_role?: "ADMIN" | "STANDARD";
}

export interface GmvMaxStoreShopAdUsageCheckParams {
  readonly advertiser_id: string;
  readonly store_id: string;
}

export interface GmvMaxStoreShopAdUsageCheckResponse {
  readonly promote_all_products_allowed?: boolean;
  readonly is_running_custom_shop_ads?: boolean;
}

export interface GmvMaxVideoGetParams {
  readonly advertiser_id: string;
  readonly store_id: string;
  readonly store_authorized_bc_id: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly custom_posts_eligible?: boolean;
  readonly sort_field?: "GMV" | "POST_TIME" | "VIDEO_VIEWS" | "VIDEO_LIKES" | "CLICK_THROUGH_RATE" | "PRODUCT_CLICKS";
  readonly sort_type?: "ASC" | "DESC";
  readonly keyword?: string;
  readonly need_auth_code_video?: boolean;
  readonly identity_list?: ReadonlyArray<GmvMaxVideoGetParamsIdentityList>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface GmvMaxVideoGetParamsIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
}

export interface GmvMaxVideoGetResponse {
  readonly item_list?: ReadonlyArray<GmvMaxVideoGetResponseItemList>;
  readonly page_info?: GmvMaxVideoGetResponsePageInfo;
}

export interface GmvMaxVideoGetResponseItemList {
  readonly item_id?: string;
  readonly text?: string;
  readonly spu_id_list?: ReadonlyArray<string>;
  readonly can_change_anchor?: boolean;
  readonly identity_info?: GmvMaxVideoGetResponseItemListIdentityInfo;
  readonly video_info?: GmvMaxVideoGetResponseItemListVideoInfo;
}

export interface GmvMaxVideoGetResponseItemListIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  readonly identity_authorized_bc_id?: string;
  readonly identity_authorized_shop_id?: string;
  readonly store_id?: string;
  readonly profile_image?: string;
  readonly display_name?: string;
}

export interface GmvMaxVideoGetResponseItemListVideoInfo {
  readonly video_id?: string;
  readonly video_cover_url?: string;
  readonly preview_url?: string;
  readonly height?: number;
  readonly width?: number;
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly signature?: string;
  readonly format?: string;
  readonly definition?: string;
  readonly fps?: number;
}

export interface GmvMaxVideoGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface IdentityCreateParams {
  readonly advertiser_id: string;
  readonly display_name: string;
  readonly image_uri?: string;
}

export interface IdentityCreateResponse {
  readonly identity_id?: string;
}

export interface IdentityDeleteParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: string;
}

export interface IdentityDeleteResponse {

}

export interface IdentityGetParams {
  readonly advertiser_id: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly filtering?: IdentityGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface IdentityGetParamsFiltering {
  readonly keyword?: string;
}

export interface IdentityGetResponse {
  readonly identity_list?: ReadonlyArray<IdentityGetResponseIdentityList>;
  readonly page_info?: IdentityGetResponsePageInfo;
}

export interface IdentityGetResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: string;
  readonly identity_authorized_bc_id?: string;
  readonly ads_only_mode?: boolean;
  readonly username?: string;
  readonly is_gpppa?: boolean;
  readonly can_push_video?: boolean;
  readonly can_pull_video?: boolean;
  readonly can_use_live_ads?: boolean;
  readonly can_manage_message?: boolean;
  readonly display_name?: string;
  readonly available_status?: "AVAILABLE" | "NO_VALID_BIND_ACCOUNT" | "SCOPE_UNAVAILABLE" | "NOT_BUSINESS_ACCOUNT";
  readonly profile_image?: string;
}

export interface IdentityGetResponsePageInfo {
  readonly page?: number;
  readonly total_page?: number;
  readonly total_number?: number;
  readonly page_size?: number;
}

export interface IdentityInfoParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
}

export interface IdentityInfoResponse {
  readonly identity_info?: IdentityInfoResponseIdentityInfo;
}

export interface IdentityInfoResponseIdentityInfo {
  readonly identity_id?: string;
  readonly identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly ads_only_mode?: boolean;
  readonly username?: string;
  readonly is_gpppa?: boolean;
  readonly can_push_video?: boolean;
  readonly can_pull_video?: boolean;
  readonly can_use_live_ads?: boolean;
  readonly can_manage_message?: boolean;
  readonly display_name?: string;
  readonly profile_image_url?: string;
  readonly available_status?: "AVAILABLE" | "NO_VALID_BIND_ACCOUNT" | "SCOPE_UNAVAILABLE" | "IS_PRIVATE_ACCOUNT" | "NOT_BUSINESS_ACCOUNT";
}

export interface IdentityLiveGetParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly cursor?: number;
}

export interface IdentityLiveGetResponse {
  readonly cursor?: string;
  readonly has_more?: boolean;
  readonly live_list?: ReadonlyArray<IdentityLiveGetResponseLiveList>;
}

export interface IdentityLiveGetResponseLiveList {
  readonly live_id?: string;
  readonly finish_timestamp?: string;
}

export interface IdentityMusicAuthorizationParams {
  readonly advertiser_id: string;
  readonly item_id: string;
  readonly identity_id: string;
  readonly identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly locations: ReadonlyArray<string>;
  readonly start_time: string;
  readonly end_time: string;
}

export interface IdentityMusicAuthorizationResponse {
  readonly music_authorization?: ReadonlyArray<IdentityMusicAuthorizationResponseMusicAuthorization>;
}

export interface IdentityMusicAuthorizationResponseMusicAuthorization {
  readonly item_id?: string;
  readonly music_status?: "WITHOUT_SONG_ID" | "AUTHORIZATION_MISSING" | "WITH_FULL_AUTHORIZATION";
  readonly authorization_infos?: ReadonlyArray<IdentityMusicAuthorizationResponseMusicAuthorizationAuthorizationInfos>;
}

export interface IdentityMusicAuthorizationResponseMusicAuthorizationAuthorizationInfos {
  readonly music_id?: string;
  readonly author?: string;
  readonly title?: string;
  readonly labels?: ReadonlyArray<string>;
  readonly lyricist?: string;
  readonly composer?: string;
  readonly publisher?: string;
  readonly authorization_type?: "NOT_AUTHORIZED" | "AUTHORIZED";
}

export interface IdentityNativeSeriesGetParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly cursor?: number;
  readonly count?: number;
}

export interface IdentityNativeSeriesGetResponse {
  readonly list?: ReadonlyArray<IdentityNativeSeriesGetResponseList>;
  readonly cursor?: number;
  readonly has_more?: boolean;
}

export interface IdentityNativeSeriesGetResponseList {
  readonly native_series_id?: string;
  readonly native_series_name?: string;
  readonly native_series_cover_url?: string;
  readonly native_series_total_episode?: number;
  readonly native_series_total_duration?: number;
}

export interface IdentityVideoGetParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly keyword?: string;
  readonly exclude_adsonly?: boolean;
  readonly cursor?: number;
  readonly count?: number;
}

export interface IdentityVideoGetResponse {
  readonly cursor?: string;
  readonly has_more?: boolean;
  readonly video_list?: ReadonlyArray<IdentityVideoGetResponseVideoList>;
}

export interface IdentityVideoGetResponseVideoList {
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly item_id?: string;
  readonly status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "STATUS_ONLY_FRIEND_SEE" | "ITEM_STATUS_ONLY_AUTHOR_SEE";
  readonly text?: string;
  readonly auth_info?: IdentityVideoGetResponseVideoListAuthInfo;
  readonly anchor_list?: IdentityVideoGetResponseVideoListAnchorList;
  readonly video_info?: IdentityVideoGetResponseVideoListVideoInfo;
  readonly carousel_info?: IdentityVideoGetResponseVideoListCarouselInfo;
}

export interface IdentityVideoGetResponseVideoListAnchorList {
  readonly anchor_id?: string;
  readonly title?: string;
  readonly status?: "CHECK_ING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  readonly url?: string;
  readonly product_regions?: ReadonlyArray<string>;
}

export interface IdentityVideoGetResponseVideoListAuthInfo {
  readonly ad_auth_status?: string;
  readonly auth_end_time?: string;
  readonly auth_start_time?: string;
  readonly invite_start_time?: string;
}

export interface IdentityVideoGetResponseVideoListCarouselInfo {
  readonly image_info?: ReadonlyArray<IdentityVideoGetResponseVideoListCarouselInfoImageInfo>;
  readonly music_info?: IdentityVideoGetResponseVideoListCarouselInfoMusicInfo;
}

export interface IdentityVideoGetResponseVideoListCarouselInfoImageInfo {
  readonly image_id?: string;
  readonly image_url?: string;
  readonly image_height?: number;
  readonly image_width?: number;
}

export interface IdentityVideoGetResponseVideoListCarouselInfoMusicInfo {
  readonly music_id?: string;
  readonly music_url?: string;
  readonly music_duration?: number;
}

export interface IdentityVideoGetResponseVideoListVideoInfo {
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly height?: number;
  readonly width?: number;
  readonly poster_url?: string;
  readonly signature?: string;
  readonly url?: string;
  readonly format?: string;
}

export interface IdentityVideoInfoParams {
  readonly advertiser_id: string;
  readonly identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id: string;
  readonly identity_authorized_bc_id?: string;
  readonly item_id?: string;
  readonly item_ids?: ReadonlyArray<string>;
}

export interface IdentityVideoInfoResponse {
  readonly video_detail?: IdentityVideoInfoResponseVideoDetail;
  readonly video_details?: ReadonlyArray<IdentityVideoInfoResponseVideoDetails>;
}

export interface IdentityVideoInfoResponseVideoDetail {
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly item_id?: string;
  readonly status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "STATUS_ONLY_FRIEND_SEE" | "ITEM_STATUS_ONLY_AUTHOR_SEE";
  readonly text?: string;
  readonly anchor_list?: ReadonlyArray<IdentityVideoInfoResponseVideoDetailAnchorList>;
  readonly auth_info?: IdentityVideoInfoResponseVideoDetailAuthInfo;
  readonly video_info?: IdentityVideoInfoResponseVideoDetailVideoInfo;
  readonly carousel_info?: IdentityVideoInfoResponseVideoDetailCarouselInfo;
}

export interface IdentityVideoInfoResponseVideoDetailAnchorList {
  readonly anchor_id?: string;
  readonly title?: string;
  readonly status?: "CHECKING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  readonly url?: string;
  readonly product_regions?: ReadonlyArray<string>;
}

export interface IdentityVideoInfoResponseVideoDetailAuthInfo {
  readonly ad_auth_status?: string;
  readonly auth_start_time?: string;
  readonly auth_end_time?: string;
  readonly invite_start_time_stamp?: string;
}

export interface IdentityVideoInfoResponseVideoDetailCarouselInfo {
  readonly image_info?: ReadonlyArray<IdentityVideoInfoResponseVideoDetailCarouselInfoImageInfo>;
  readonly music_info?: IdentityVideoInfoResponseVideoDetailCarouselInfoMusicInfo;
}

export interface IdentityVideoInfoResponseVideoDetailCarouselInfoImageInfo {
  readonly image_id?: string;
  readonly image_url?: string;
  readonly image_height?: number;
  readonly image_width?: number;
}

export interface IdentityVideoInfoResponseVideoDetailCarouselInfoMusicInfo {
  readonly music_id?: string;
  readonly music_url?: string;
  readonly music_duration?: number;
}

export interface IdentityVideoInfoResponseVideoDetails {
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly item_id?: string;
  readonly status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "ITEM_STATUS_ONLY_AUTHOR_SEE" | "STATUS_ONLY_FRIEND_SEE";
  readonly text?: string;
  readonly auth_info?: IdentityVideoInfoResponseVideoDetailsAuthInfo;
  readonly video_info?: IdentityVideoInfoResponseVideoDetailsVideoInfo;
  readonly carousel_info?: IdentityVideoInfoResponseVideoDetailsCarouselInfo;
}

export interface IdentityVideoInfoResponseVideoDetailsAuthInfo {
  readonly ad_auth_status?: string;
  readonly auth_start_time?: string;
  readonly auth_end_time?: string;
  readonly invite_start_time_stamp?: string;
}

export interface IdentityVideoInfoResponseVideoDetailsCarouselInfo {
  readonly image_info?: ReadonlyArray<IdentityVideoInfoResponseVideoDetailsCarouselInfoImageInfo>;
  readonly music_info?: IdentityVideoInfoResponseVideoDetailsCarouselInfoMusicInfo;
}

export interface IdentityVideoInfoResponseVideoDetailsCarouselInfoImageInfo {
  readonly image_id?: string;
  readonly image_url?: string;
  readonly image_height?: number;
  readonly image_width?: number;
}

export interface IdentityVideoInfoResponseVideoDetailsCarouselInfoMusicInfo {
  readonly music_id?: string;
  readonly music_url?: string;
  readonly music_duration?: number;
}

export interface IdentityVideoInfoResponseVideoDetailsVideoInfo {
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly height?: number;
  readonly width?: number;
  readonly poster_url?: string;
  readonly signature?: string;
  readonly url?: string;
}

export interface IdentityVideoInfoResponseVideoDetailVideoInfo {
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly height?: number;
  readonly width?: number;
  readonly poster_url?: string;
  readonly signature?: string;
  readonly url?: string;
}

export interface LeadFieldGetParams {
  readonly lead_source: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page_id?: string;
}

export interface LeadFieldGetResponse {
  readonly fields?: ReadonlyArray<string>;
  readonly meta_data?: LeadFieldGetResponseMetaData;
}

export interface LeadFieldGetResponseMetaData {
  readonly create_time?: string;
  readonly page_id?: string;
  readonly page_name?: string;
  readonly page_url?: string;
}

export interface LeadGetParams {
  readonly lead_source: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page_id?: string;
}

export interface LeadGetResponse {
  readonly lead_data?: string;
  readonly meta_data?: LeadGetResponseMetaData;
}

export interface LeadGetResponseMetaData {
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly lead_id?: string;
  readonly page_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
}

export interface MinisGetParams {
  readonly advertiser_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface MinisGetResponse {
  readonly list?: ReadonlyArray<MinisGetResponseList>;
  readonly page_info?: MinisGetResponsePageInfo;
}

export interface MinisGetResponseList {
  readonly minis_id?: string;
  readonly minis_name?: string;
  readonly minis_icon_url?: string;
  readonly minis_status?: "ACTIVE" | "INACTIVE";
  readonly minis_type?: "MINI_SERIES" | "MINI_GAME";
  readonly region_codes?: ReadonlyArray<string>;
}

export interface MinisGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface MmmApiCheckParams {
  readonly mmm_request_id: string;
}

export interface MmmApiCheckResponse {
  readonly status?: string;
  readonly message?: string;
}

export interface MmmApiCreateParams {
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly request_info: MmmApiCreateParamsRequestInfo;
  readonly email?: string;
}

export interface MmmApiCreateParamsRequestInfo {
  readonly targets: ReadonlyArray<MmmApiCreateParamsRequestInfoTargets>;
  readonly from_date: string;
  readonly to_date: string;
  readonly country_code?: ReadonlyArray<string>;
  readonly media_type?: string;
}

export interface MmmApiCreateParamsRequestInfoTargets {
  readonly advertiser_id: string;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly brand?: string;
  readonly sub_brand?: string;
}

export interface MmmApiCreateResponse {
  readonly mmm_request_id?: string;
}

export interface MmmApiDownloadParams {
  readonly mmm_request_id: string;
}

export interface MmmApiDownloadResponse {
  readonly download_url?: string;
}

export interface MmmApiHistoryParams {
  readonly from_date: string;
  readonly end_date: string;
}

export interface MmmApiHistoryResponse {
  readonly historical_requests?: ReadonlyArray<string>;
}

export interface NOpenMcpServerOauthRegisterParams {

}

export interface NOpenMcpServerOauthRegisterResponse {

}

export interface NOpenMcpServerOauthRevokeParams {

}

export interface NOpenMcpServerOauthRevokeResponse {

}

export interface NOpenMcpServerOauthTokenParams {

}

export interface NOpenMcpServerOauthTokenResponse {

}

export interface NOpenMcpServerOauthWellKnownOpenidConfigurationParams {

}

export interface NOpenMcpServerOauthWellKnownOpenidConfigurationResponse {

}

export interface NOpenMcpServerParams {

}

export interface NOpenMcpServerResponse {

}

export interface NPortalMcpTt4bAuthorizeParams {

}

export interface NPortalMcpTt4bAuthorizeResponse {

}

export interface NWellKnownOauthProtectedResourceOpenMcpServerParams {

}

export interface NWellKnownOauthProtectedResourceOpenMcpServerResponse {

}

export interface Oauth2AccessTokenParams {
  readonly app_id: string;
  readonly secret: string;
  readonly auth_code: string;
  readonly return_advertiser_ids?: boolean;
}

export interface Oauth2AccessTokenResponse {
  readonly access_token?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly scope?: ReadonlyArray<number>;
}

export interface Oauth2AccessTokenTipSdkCreateParams {
  readonly advertiser_id: string;
}

export interface Oauth2AccessTokenTipSdkCreateResponse {
  readonly tip_sdk_access_token?: string;
}

export interface Oauth2AccessTokenTipSdkRenewParams {
  readonly advertiser_id: string;
  readonly tip_sdk_access_token: string;
}

export interface Oauth2AccessTokenTipSdkRenewResponse {

}

export interface Oauth2AccessTokenTipSdkValidateParams {
  readonly advertiser_id: string;
  readonly tip_sdk_access_token: string;
}

export interface Oauth2AccessTokenTipSdkValidateResponse {
  readonly is_valid?: boolean;
}

export interface Oauth2AdvertiserGetParams {
  readonly app_id: string;
  readonly secret: string;
}

export interface Oauth2AdvertiserGetResponse {
  readonly list?: Oauth2AdvertiserGetResponseList;
}

export interface Oauth2AdvertiserGetResponseList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
}

export interface Oauth2RevokeTokenParams {
  readonly app_id: string;
  readonly secret: string;
  readonly access_token: string;
}

export interface Oauth2RevokeTokenResponse {
  readonly app_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
}

export interface OfflineBatchParams {
  readonly event_set_id: string;
  readonly batch?: ReadonlyArray<OfflineBatchParamsBatch>;
}

export interface OfflineBatchParamsBatch {
  readonly event: string;
  readonly event_id?: string;
  readonly context: string;
  readonly properties: string;
  readonly timestamp: string;
}

export interface OfflineBatchResponse {

}

export interface OfflineCreateParams {
  readonly advertiser_id: string;
  readonly name: string;
  readonly description?: string;
  readonly auto_tracking?: boolean;
}

export interface OfflineCreateResponse {
  readonly event_set_id?: string;
}

export interface OfflineDeleteParams {
  readonly advertiser_id: string;
  readonly event_set_id: string;
}

export interface OfflineDeleteResponse {

}

export interface OfflineGetParams {
  readonly advertiser_id: string;
  readonly event_set_ids?: ReadonlyArray<string>;
  readonly name?: string;
}

export interface OfflineGetResponse {
  readonly event_set_list?: ReadonlyArray<OfflineGetResponseEventSetList>;
}

export interface OfflineGetResponseEventSetList {
  readonly advertiser_id?: string;
  readonly event_set_id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly auto_tracking?: boolean;
  readonly create_time?: string;
  readonly update_time?: string;
}

export interface OfflineTrackParams {
  readonly event: string;
  readonly event_set_id: string;
  readonly event_id?: string;
  readonly context: string;
  readonly properties: string;
  readonly timestamp: string;
}

export interface OfflineTrackResponse {

}

export interface OfflineUpdateParams {
  readonly advertiser_id: string;
  readonly event_set_id: string;
  readonly name?: string;
  readonly auto_tracking?: boolean;
}

export interface OfflineUpdateResponse {
  readonly advertiser_id?: string;
  readonly event_set_id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly auto_tracking?: boolean;
  readonly create_time?: string;
  readonly update_time?: string;
}

export interface OptimizerRuleBatchBindParams {
  readonly advertiser_id: string;
  readonly bind_info: ReadonlyArray<OptimizerRuleBatchBindParamsBindInfo>;
  readonly lang?: "ZH" | "EN" | "JA";
}

export interface OptimizerRuleBatchBindParamsBindInfo {
  readonly rule_id: string;
  readonly dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids: ReadonlyArray<string>;
  readonly bind_type: "BIND" | "UNBIND";
}

export interface OptimizerRuleBatchBindResponse {
  readonly code?: number;
  readonly message?: string;
  readonly request_id?: string;
}

export interface OptimizerRuleCreateParams {
  readonly advertiser_id: string;
  readonly rules?: ReadonlyArray<OptimizerRuleCreateParamsRules>;
  readonly lang?: "ZH" | "EN" | "JA";
}

export interface OptimizerRuleCreateParamsRules {
  readonly apply_objects: ReadonlyArray<OptimizerRuleCreateParamsRulesApplyObjects>;
  readonly conditions: ReadonlyArray<OptimizerRuleCreateParamsRulesConditions>;
  readonly actions: ReadonlyArray<OptimizerRuleCreateParamsRulesActions>;
  readonly notification: OptimizerRuleCreateParamsRulesNotification;
  readonly rule_exec_info: OptimizerRuleCreateParamsRulesRuleExecInfo;
  readonly tzone?: string;
  readonly name: string;
}

export interface OptimizerRuleCreateParamsRulesActions {
  readonly subject_type: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  readonly action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  readonly value_type?: "EXACT" | "PERCENT";
  readonly value?: OptimizerRuleCreateParamsRulesActionsValue;
  readonly frequency_info?: OptimizerRuleCreateParamsRulesActionsFrequencyInfo;
}

export interface OptimizerRuleCreateParamsRulesActionsFrequencyInfo {
  readonly type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  readonly custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  readonly time?: number;
  readonly count?: number;
}

export interface OptimizerRuleCreateParamsRulesActionsValue {
  readonly value?: number;
  readonly limit?: number;
}

export interface OptimizerRuleCreateParamsRulesApplyObjects {
  readonly dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids?: ReadonlyArray<string>;
  readonly pre_condition_type: string;
}

export interface OptimizerRuleCreateParamsRulesConditions {
  readonly subject_type: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "COST_CAP" | "BID_CAP" | "MAX_CONVERSION" | "LOWEST_COST" | "OPTIMIZATION_GOAL" | "CONVERT" | "SHOW" | "REACH" | "INSTALL" | "IN_APP_EVENT" | "LEAD_GENERATION" | "TWO_SECOND_VIDEO_VIEW" | "SIX_SECOND_VIDEO_VIEW" | "OBJECTIVE" | "TRAFFIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "VIDEO_VIEWS" | "NAME" | "DAYS_SINCE_CREATION" | "GT" | "LT" | "BETWEEN" | "MATCH" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  readonly range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  readonly match_type?: "GT" | "LT" | "BETWEEN" | "MATCH";
  readonly values?: ReadonlyArray<string>;
  readonly calculation_type?: string;
}

export interface OptimizerRuleCreateParamsRulesNotification {
  readonly notification_type: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  readonly email_setting?: OptimizerRuleCreateParamsRulesNotificationEmailSetting;
}

export interface OptimizerRuleCreateParamsRulesNotificationEmailSetting {
  readonly notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  readonly email_exec_time?: ReadonlyArray<string>;
  readonly no_result_notification?: boolean;
  readonly mute_option?: "MUTE" | "UNMUTE";
}

export interface OptimizerRuleCreateParamsRulesRuleExecInfo {
  readonly exec_time_type: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  readonly exec_time?: string;
  readonly time_period_info?: ReadonlyArray<OptimizerRuleCreateParamsRulesRuleExecInfoTimePeriodInfo>;
}

export interface OptimizerRuleCreateParamsRulesRuleExecInfoTimePeriodInfo {
  readonly num?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly date_type?: "DAY" | "WEEK" | "MONTH";
}

export interface OptimizerRuleCreateResponse {
  readonly rule_ids?: ReadonlyArray<string>;
}

export interface OptimizerRuleGetParams {
  readonly advertiser_id: string;
  readonly rule_ids: ReadonlyArray<string>;
}

export interface OptimizerRuleGetResponse {
  readonly page_info?: OptimizerRuleGetResponsePageInfo;
  readonly rules?: ReadonlyArray<OptimizerRuleGetResponseRules>;
}

export interface OptimizerRuleGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface OptimizerRuleGetResponseRules {
  readonly apply_objects?: ReadonlyArray<OptimizerRuleGetResponseRulesApplyObjects>;
  readonly conditions?: ReadonlyArray<OptimizerRuleGetResponseRulesConditions>;
  readonly action?: ReadonlyArray<OptimizerRuleGetResponseRulesAction>;
  readonly notification?: OptimizerRuleGetResponseRulesNotification;
  readonly rule_exec_info?: OptimizerRuleGetResponseRulesRuleExecInfo;
  readonly last_check_result_summary?: OptimizerRuleGetResponseRulesLastCheckResultSummary;
  readonly rule_id?: string;
  readonly name?: string;
  readonly rule_status?: "ON" | "OFF" | "DELETED";
  readonly create_datetime?: string;
}

export interface OptimizerRuleGetResponseRulesAction {
  readonly subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  readonly action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  readonly value_type?: "EXACT" | "PERCENT";
  readonly value?: string;
  readonly frequency_info?: OptimizerRuleGetResponseRulesActionFrequencyInfo;
}

export interface OptimizerRuleGetResponseRulesActionFrequencyInfo {
  readonly type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  readonly custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  readonly time?: number;
  readonly count?: number;
}

export interface OptimizerRuleGetResponseRulesApplyObjects {
  readonly dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids?: ReadonlyArray<string>;
  readonly pre_condition_type?: string;
  readonly bind_type?: "BIND" | "UNBIND";
}

export interface OptimizerRuleGetResponseRulesConditions {
  readonly subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  readonly range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  readonly match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  readonly values?: ReadonlyArray<string>;
  readonly calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}

export interface OptimizerRuleGetResponseRulesLastCheckResultSummary {
  readonly check_datetime?: string;
  readonly exec_datetime?: string;
  readonly change_success?: number;
  readonly no_change?: number;
  readonly change_fail?: number;
  readonly task_exec_id?: string;
}

export interface OptimizerRuleGetResponseRulesNotification {
  readonly notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  readonly email_setting?: OptimizerRuleGetResponseRulesNotificationEmailSetting;
}

export interface OptimizerRuleGetResponseRulesNotificationEmailSetting {
  readonly notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  readonly email_exec_time?: ReadonlyArray<string>;
  readonly no_result_notification?: boolean;
}

export interface OptimizerRuleGetResponseRulesRuleExecInfo {
  readonly exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  readonly exec_time?: string;
  readonly time_period_info?: ReadonlyArray<OptimizerRuleGetResponseRulesRuleExecInfoTimePeriodInfo>;
}

export interface OptimizerRuleGetResponseRulesRuleExecInfoTimePeriodInfo {
  readonly num?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly date_type?: "DAY" | "WEEK" | "MONTH";
}

export interface OptimizerRuleListParams {
  readonly advertiser_id: string;
  readonly filtering?: OptimizerRuleListParamsFiltering;
  readonly tzone?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface OptimizerRuleListParamsFiltering {
  readonly status?: "ON" | "OFF" | "DELETED";
  readonly rule_info?: ReadonlyArray<string>;
  readonly data_dimension?: "CAMPAIGN" | "ADGROUP" | "AD";
}

export interface OptimizerRuleListResponse {
  readonly rules?: ReadonlyArray<OptimizerRuleListResponseRules>;
}

export interface OptimizerRuleListResponseRules {
  readonly apply_objects?: ReadonlyArray<OptimizerRuleListResponseRulesApplyObjects>;
  readonly conditions?: ReadonlyArray<OptimizerRuleListResponseRulesConditions>;
  readonly action?: ReadonlyArray<OptimizerRuleListResponseRulesAction>;
  readonly notification?: OptimizerRuleListResponseRulesNotification;
  readonly rule_exec_info?: OptimizerRuleListResponseRulesRuleExecInfo;
  readonly last_check_result_summary?: OptimizerRuleListResponseRulesLastCheckResultSummary;
  readonly rule_id?: string;
  readonly name?: string;
  readonly rule_status?: "ON" | "OFF" | "DELETED";
  readonly create_datetime?: string;
}

export interface OptimizerRuleListResponseRulesAction {
  readonly subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  readonly action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  readonly value_type?: "EXACT" | "PERCENT";
  readonly value?: string;
  readonly frequency_info?: OptimizerRuleListResponseRulesActionFrequencyInfo;
}

export interface OptimizerRuleListResponseRulesActionFrequencyInfo {
  readonly type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  readonly custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  readonly time?: number;
  readonly count?: number;
}

export interface OptimizerRuleListResponseRulesApplyObjects {
  readonly dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids?: ReadonlyArray<string>;
  readonly pre_condition_type?: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
  readonly bind_type?: "BIND" | "UNBIND";
}

export interface OptimizerRuleListResponseRulesConditions {
  readonly subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  readonly range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  readonly match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  readonly values?: ReadonlyArray<string>;
  readonly calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}

export interface OptimizerRuleListResponseRulesLastCheckResultSummary {
  readonly check_datetime?: string;
  readonly exec_datetime?: string;
  readonly change_success?: number;
  readonly no_change?: number;
  readonly change_fail?: number;
  readonly task_exec_id?: string;
}

export interface OptimizerRuleListResponseRulesNotification {
  readonly notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  readonly email_setting?: OptimizerRuleListResponseRulesNotificationEmailSetting;
}

export interface OptimizerRuleListResponseRulesNotificationEmailSetting {
  readonly notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  readonly email_exec_time?: ReadonlyArray<string>;
  readonly no_result_notification?: boolean;
}

export interface OptimizerRuleListResponseRulesRuleExecInfo {
  readonly exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  readonly exec_time?: string;
  readonly time_period_info?: ReadonlyArray<OptimizerRuleListResponseRulesRuleExecInfoTimePeriodInfo>;
}

export interface OptimizerRuleListResponseRulesRuleExecInfoTimePeriodInfo {
  readonly num?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly date_type?: "DAY" | "WEEK" | "MONTH";
}

export interface OptimizerRuleResultGetParams {
  readonly advertiser_id: string;
  readonly result_detail: ReadonlyArray<OptimizerRuleResultGetParamsResultDetail>;
  readonly lang?: "ZH" | "EN" | "JA";
}

export interface OptimizerRuleResultGetParamsResultDetail {
  readonly exec_id: string;
  readonly rule_id: string;
}

export interface OptimizerRuleResultGetResponse {
  readonly result_details?: ReadonlyArray<OptimizerRuleResultGetResponseResultDetails>;
}

export interface OptimizerRuleResultGetResponseResultDetails {
  readonly rule_id?: string;
  readonly exec_id?: string;
  readonly action_subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE";
  readonly status?: "SUCCESS" | "FAIL";
  readonly error_message?: string;
  readonly object_dimension?: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly object_dimension_id?: string;
  readonly object_name?: string;
}

export interface OptimizerRuleResultListParams {
  readonly advertiser_id: string;
  readonly filtering?: OptimizerRuleResultListParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
  readonly lang?: string;
}

export interface OptimizerRuleResultListParamsFiltering {
  readonly status?: "ON" | "OFF" | "DELETED";
  readonly rule_info?: ReadonlyArray<string>;
  readonly action?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  readonly time?: ReadonlyArray<string>;
  readonly data_dimension?: "CAMPAIGN" | "ADGROUP";
}

export interface OptimizerRuleResultListResponse {
  readonly page_info?: OptimizerRuleResultListResponsePageInfo;
  readonly rules?: ReadonlyArray<OptimizerRuleResultListResponseRules>;
}

export interface OptimizerRuleResultListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface OptimizerRuleResultListResponseRules {
  readonly apply_objects?: ReadonlyArray<OptimizerRuleResultListResponseRulesApplyObjects>;
  readonly conditions?: ReadonlyArray<OptimizerRuleResultListResponseRulesConditions>;
  readonly action?: ReadonlyArray<OptimizerRuleResultListResponseRulesAction>;
  readonly notification?: OptimizerRuleResultListResponseRulesNotification;
  readonly rule_exec_info?: OptimizerRuleResultListResponseRulesRuleExecInfo;
  readonly last_check_result_summary?: OptimizerRuleResultListResponseRulesLastCheckResultSummary;
  readonly rule_id?: string;
  readonly name?: string;
  readonly rule_status?: "ON" | "OFF" | "DELETED";
  readonly create_datetime?: string;
}

export interface OptimizerRuleResultListResponseRulesAction {
  readonly subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  readonly action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  readonly value_type?: "EXACT" | "PERCENT";
  readonly value?: string;
  readonly frequency_info?: OptimizerRuleResultListResponseRulesActionFrequencyInfo;
}

export interface OptimizerRuleResultListResponseRulesActionFrequencyInfo {
  readonly type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  readonly custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  readonly time?: number;
  readonly count?: number;
}

export interface OptimizerRuleResultListResponseRulesApplyObjects {
  readonly dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids?: ReadonlyArray<string>;
  readonly pre_condition_type?: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
  readonly bind_type?: "BIND" | "UNBIND";
}

export interface OptimizerRuleResultListResponseRulesConditions {
  readonly subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  readonly range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  readonly match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  readonly values?: ReadonlyArray<string>;
  readonly calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}

export interface OptimizerRuleResultListResponseRulesLastCheckResultSummary {
  readonly check_datetime?: string;
  readonly exec_datetime?: string;
  readonly change_success?: number;
  readonly no_change?: number;
  readonly change_fail?: number;
  readonly task_exec_id?: string;
}

export interface OptimizerRuleResultListResponseRulesNotification {
  readonly notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  readonly email_setting?: OptimizerRuleResultListResponseRulesNotificationEmailSetting;
}

export interface OptimizerRuleResultListResponseRulesNotificationEmailSetting {
  readonly notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  readonly email_exec_time?: ReadonlyArray<string>;
  readonly no_result_notification?: boolean;
}

export interface OptimizerRuleResultListResponseRulesRuleExecInfo {
  readonly exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  readonly exec_time?: string;
  readonly time_period_info?: ReadonlyArray<OptimizerRuleResultListResponseRulesRuleExecInfoTimePeriodInfo>;
}

export interface OptimizerRuleResultListResponseRulesRuleExecInfoTimePeriodInfo {
  readonly num?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly date_type?: "DAY" | "WEEK" | "MONTH";
}

export interface OptimizerRuleUpdateParams {
  readonly advertiser_id: string;
  readonly rules?: ReadonlyArray<OptimizerRuleUpdateParamsRules>;
  readonly lang?: "ZH" | "EN" | "JA";
}

export interface OptimizerRuleUpdateParamsRules {
  readonly apply_objects: ReadonlyArray<OptimizerRuleUpdateParamsRulesApplyObjects>;
  readonly conditions: ReadonlyArray<OptimizerRuleUpdateParamsRulesConditions>;
  readonly actions: ReadonlyArray<OptimizerRuleUpdateParamsRulesActions>;
  readonly notification: OptimizerRuleUpdateParamsRulesNotification;
  readonly rule_exec_info: OptimizerRuleUpdateParamsRulesRuleExecInfo;
  readonly tzone?: string;
  readonly rule_id: string;
  readonly name: string;
}

export interface OptimizerRuleUpdateParamsRulesActions {
  readonly subject_type: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  readonly action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  readonly value_type?: "EXACT" | "PERCENT";
  readonly value?: OptimizerRuleUpdateParamsRulesActionsValue;
  readonly frequency_info?: OptimizerRuleUpdateParamsRulesActionsFrequencyInfo;
}

export interface OptimizerRuleUpdateParamsRulesActionsFrequencyInfo {
  readonly type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  readonly custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  readonly time?: number;
  readonly count?: number;
}

export interface OptimizerRuleUpdateParamsRulesActionsValue {
  readonly value?: number;
  readonly limit?: number;
  readonly use_limit?: boolean;
}

export interface OptimizerRuleUpdateParamsRulesApplyObjects {
  readonly dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  readonly dimension_ids?: ReadonlyArray<string>;
  readonly pre_condition_type: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
}

export interface OptimizerRuleUpdateParamsRulesConditions {
  readonly subject_type: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "COST_CAP" | "BID_CAP" | "MAX_CONVERSION" | "LOWEST_COST" | "OPTIMIZATION_GOAL" | "CONVERT" | "SHOW" | "REACH" | "INSTALL" | "IN_APP_EVENT" | "LEAD_GENERATION" | "TWO_SECOND_VIDEO_VIEW" | "SIX_SECOND_VIDEO_VIEW" | "OBJECTIVE" | "TRAFFIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "VIDEO_VIEWS" | "NAME" | "DAYS_SINCE_CREATION" | "GT" | "LT" | "BETWEEN" | "MATCH" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  readonly range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  readonly match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "NAME" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  readonly values?: ReadonlyArray<string>;
  readonly calculation_type?: string;
}

export interface OptimizerRuleUpdateParamsRulesNotification {
  readonly notification_type: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  readonly email_setting?: OptimizerRuleUpdateParamsRulesNotificationEmailSetting;
}

export interface OptimizerRuleUpdateParamsRulesNotificationEmailSetting {
  readonly notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  readonly email_exec_time?: ReadonlyArray<string>;
  readonly no_result_notification?: boolean;
  readonly mute_option?: "MUTE" | "UNMUTE";
}

export interface OptimizerRuleUpdateParamsRulesRuleExecInfo {
  readonly exec_time_type: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  readonly exec_time?: string;
  readonly time_period_info?: ReadonlyArray<OptimizerRuleUpdateParamsRulesRuleExecInfoTimePeriodInfo>;
}

export interface OptimizerRuleUpdateParamsRulesRuleExecInfoTimePeriodInfo {
  readonly num?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly date_type?: "DAY" | "WEEK" | "MONTH";
}

export interface OptimizerRuleUpdateResponse {
  readonly rule_ids?: ReadonlyArray<string>;
}

export interface OptimizerRuleUpdateStatusParams {
  readonly advertiser_id: string;
  readonly rule_ids: ReadonlyArray<string>;
  readonly operate_type: "TURN_ON" | "TURN_OFF" | "DELETE";
  readonly lang?: "ZH" | "EN" | "JA";
}

export interface OptimizerRuleUpdateStatusResponse {
  readonly rule_ids?: ReadonlyArray<string>;
}

export interface PageFieldGetParams {
  readonly advertiser_id: string;
  readonly page_id: string;
}

export interface PageFieldGetResponse {
  readonly fields?: string;
  readonly meta_data?: PageFieldGetResponseMetaData;
}

export interface PageFieldGetResponseMetaData {
  readonly page_id?: string;
  readonly create_time?: string;
  readonly page_name?: string;
  readonly page_url?: string;
}

export interface PageGetParams {
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page?: number;
  readonly page_size?: number;
  readonly status?: "EDITED" | "PUBLISHED";
  readonly title?: string;
  readonly update_time_range?: PageGetParamsUpdateTimeRange;
  readonly business_type?: "LEAD_GEN" | "STORE_FRONT" | "APP_PROFILE_PAGE" | "TIKTOK_INSTANT_PAGE" | "SHOP_ADS_PLP" | "SHOP_ADS_PDP" | "POP_UP_FORM";
  readonly business_types?: ReadonlyArray<"LEAD_GEN" | "STORE_FRONT" | "APP_PROFILE_PAGE" | "TIKTOK_INSTANT_PAGE" | "SHOP_ADS_PLP" | "SHOP_ADS_PDP" | "POP_UP_FORM">;
}

export interface PageGetParamsUpdateTimeRange {
  readonly start?: string;
  readonly end?: string;
}

export interface PageGetResponse {
  readonly list?: ReadonlyArray<PageGetResponseList>;
  readonly page_info?: PageGetResponsePageInfo;
}

export interface PageGetResponseList {
  readonly page_id?: string;
  readonly status?: "EDITED" | "PUBLISHED";
  readonly title?: string;
  readonly preview_url?: string;
  readonly template_id?: string;
  readonly template_name?: string;
  readonly supported_objectives?: ReadonlyArray<"APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "TRAFFIC" | "REACH" | "VIDEO_VIEWS" | "ENGAGEMENT" | "PRODUCT_SALES" | "RF_REACH">;
  readonly thumbnail?: string;
  readonly create_time?: string;
  readonly update_time?: string;
  readonly publish_time?: string;
  readonly app_id?: string;
  readonly has_cpp?: boolean;
  readonly destination_urls?: ReadonlyArray<string>;
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "IM_URL";
  readonly messaging_app_account_id?: string;
  readonly transfer_status?: "UNSET" | "TRANSFERRED";
  readonly user_id?: string;
  readonly is_associated?: boolean;
  readonly duplicate_id?: string;
}

export interface PageGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PageLeadMockCreateParams {
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page_id?: string;
}

export interface PageLeadMockCreateResponse {
  readonly lead_data?: string;
  readonly meta_data?: PageLeadMockCreateResponseMetaData;
}

export interface PageLeadMockCreateResponseMetaData {
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly lead_id?: string;
  readonly page_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
}

export interface PageLeadMockDeleteParams {
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly lead_id: string;
}

export interface PageLeadMockDeleteResponse {

}

export interface PageLeadMockGetParams {
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page_id?: string;
}

export interface PageLeadMockGetResponse {
  readonly lead_data?: string;
  readonly meta_data?: PageLeadMockGetResponseMetaData;
}

export interface PageLeadMockGetResponseMetaData {
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly lead_id?: string;
  readonly page_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly create_time?: string;
}

export interface PageLeadTaskDownloadParams {
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly task_id: string;
}

export interface PageLeadTaskDownloadResponse {

}

export interface PageLeadTaskParams {
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly ad_id?: string;
  readonly page_id?: string;
  readonly task_id?: string;
}

export interface PageLeadTaskResponse {
  readonly status?: "CREATED" | "FAILED" | "RUNNING" | "SUCCEED";
  readonly task_id?: string;
  readonly file_name?: string;
  readonly file_type?: string;
}

export interface PageLibraryGetParams {
  readonly page?: number;
  readonly page_size?: number;
}

export interface PageLibraryGetResponse {
  readonly list?: ReadonlyArray<PageLibraryGetResponseList>;
}

export interface PageLibraryGetResponseList {
  readonly library_id?: string;
  readonly library_name?: string;
  readonly advertiser_id?: string;
  readonly create_time?: string;
  readonly update_time?: string;
}

export interface PageLibraryTransferParams {
  readonly advertiser_id: string;
  readonly bc_id: string;
}

export interface PageLibraryTransferResponse {
  readonly library_id?: string;
}

export interface PangleAudiencePackageGetParams {
  readonly advertiser_id: string;
}

export interface PangleAudiencePackageGetResponse {
  readonly packages?: ReadonlyArray<PangleAudiencePackageGetResponsePackages>;
}

export interface PangleAudiencePackageGetResponsePackages {
  readonly bind_type?: "EXCLUDE" | "INCLUDE";
  readonly package_id?: string;
  readonly package_name?: string;
}

export interface PangleBlockListGetParams {
  readonly advertiser_id: string;
}

export interface PangleBlockListGetResponse {
  readonly app_list?: ReadonlyArray<string>;
  readonly app_package_id?: string;
  readonly modify_time?: string;
}

export interface PangleBlockListUpdateParams {
  readonly advertiser_id: string;
  readonly add_app_list?: ReadonlyArray<string>;
  readonly delete_app_list?: ReadonlyArray<string>;
  readonly clear_old_app?: boolean;
}

export interface PangleBlockListUpdateResponse {
  readonly success_count?: number;
}

export interface PaymentPortfolioAdvertiserGetParams {
  readonly payment_portfolio_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface PaymentPortfolioAdvertiserGetResponse {
  readonly advertiser_list?: ReadonlyArray<PaymentPortfolioAdvertiserGetResponseAdvertiserList>;
  readonly page_info?: PaymentPortfolioAdvertiserGetResponsePageInfo;
}

export interface PaymentPortfolioAdvertiserGetResponseAdvertiserList {
  readonly advertiser_id?: string;
  readonly advertiser_name?: string;
}

export interface PaymentPortfolioAdvertiserGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PaymentPortfolioAdvertiserUpdateParams {
  readonly payment_portfolio_id: string;
  readonly advertiser_ids: ReadonlyArray<string>;
}

export interface PaymentPortfolioAdvertiserUpdateResponse {

}

export interface PaymentPortfolioCreateParams {
  readonly payment_portfolio_name: string;
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly payment_portfolio_type?: string;
}

export interface PaymentPortfolioCreateResponse {
  readonly payment_portfolio_id?: string;
  readonly payment_portfolio_name?: string;
  readonly payment_portfolio_type?: string;
}

export interface PaymentPortfolioCreditLineUpdateParams {
  readonly allocation_details: ReadonlyArray<PaymentPortfolioCreditLineUpdateParamsAllocationDetails>;
}

export interface PaymentPortfolioCreditLineUpdateParamsAllocationDetails {
  readonly payment_portfolio_id: string;
  readonly allocation_percentage: number;
}

export interface PaymentPortfolioCreditLineUpdateResponse {

}

export interface PaymentPortfolioGetParams {
  readonly bc_id: string;
  readonly filtering?: PaymentPortfolioGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface PaymentPortfolioGetParamsFiltering {
  readonly payment_portfolio_ids?: ReadonlyArray<string>;
  readonly payment_portfolio_type?: "SHARED" | "NON_SHARED";
  readonly bc_related?: boolean;
}

export interface PaymentPortfolioGetResponse {
  readonly payment_portfolio_list?: ReadonlyArray<PaymentPortfolioGetResponsePaymentPortfolioList>;
  readonly page_info?: PaymentPortfolioGetResponsePageInfo;
}

export interface PaymentPortfolioGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PaymentPortfolioGetResponsePaymentPortfolioList {
  readonly payment_portfolio_id?: string;
  readonly payment_portfolio_name?: string;
  readonly payment_portfolio_type?: "SHARED" | "NON_SHARED";
  readonly linked_advertiser_account_count?: number;
  readonly user_count?: number;
  readonly cash_balance_list?: ReadonlyArray<PaymentPortfolioGetResponsePaymentPortfolioListCashBalanceList>;
  readonly credit_line_allocation?: PaymentPortfolioGetResponsePaymentPortfolioListCreditLineAllocation;
}

export interface PaymentPortfolioGetResponsePaymentPortfolioListCashBalanceList {
  readonly currency?: string;
  readonly amount?: number;
}

export interface PaymentPortfolioGetResponsePaymentPortfolioListCreditLineAllocation {
  readonly allocated_amount?: number;
  readonly used_amount?: number;
  readonly available_amount?: number;
  readonly min_allocation_percentage?: number;
}

export interface PaymentPortfolioUserGetParams {
  readonly payment_portfolio_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface PaymentPortfolioUserGetResponse {
  readonly users?: ReadonlyArray<PaymentPortfolioUserGetResponseUsers>;
  readonly page_info?: PaymentPortfolioUserGetResponsePageInfo;
}

export interface PaymentPortfolioUserGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PaymentPortfolioUserGetResponseUsers {
  readonly user_id?: string;
  readonly user_name?: string;
}

export interface PixelBatchParams {
  readonly pixel_code: string;
  readonly batch?: ReadonlyArray<PixelBatchParamsBatch>;
}

export interface PixelBatchParamsBatch {
  readonly type?: string;
  readonly event?: string;
  readonly event_id?: string;
  readonly timestamp?: string;
  readonly context?: string;
  readonly properties?: string;
}

export interface PixelBatchResponse {
  readonly partial_failure?: boolean;
  readonly failed_events?: ReadonlyArray<PixelBatchResponseFailedEvents>;
}

export interface PixelBatchResponseFailedEvents {
  readonly order_in_batch?: number;
  readonly error?: string;
}

export interface PixelCreateParams {
  readonly advertiser_id: string;
  readonly pixel_name: string;
  readonly pixel_category?: string;
}

export interface PixelCreateResponse {
  readonly pixel_code?: string;
  readonly pixel_id?: string;
  readonly pixel_name?: string;
  readonly pixel_category?: "ONLINE_STORE" | "FILLING_FORM" | "CONTACTS" | "LANDING_PAGE" | "CUSTOMIZE_EVENTS";
  readonly partner_name?: string;
  readonly advanced_matching_fields?: PixelCreateResponseAdvancedMatchingFields;
  readonly automatic_advanced_matching_fields?: PixelCreateResponseAutomaticAdvancedMatchingFields;
  readonly enable_first_party_cookies?: boolean;
  readonly enable_expanded_data_sharing?: boolean;
}

export interface PixelCreateResponseAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
}

export interface PixelCreateResponseAutomaticAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
  readonly name?: boolean;
  readonly address?: boolean;
  readonly external_id?: boolean;
}

export interface PixelEventCreateParams {
  readonly advertiser_id: string;
  readonly pixel_events: ReadonlyArray<PixelEventCreateParamsPixelEvents>;
  readonly pixel_id: string;
}

export interface PixelEventCreateParamsPixelEvents {
  readonly currency_value?: string;
  readonly currency?: "INR" | "USD";
  readonly event_name?: string;
  readonly event_type: string;
  readonly event_code?: string;
  readonly event_id?: string;
  readonly statistic_type?: string;
  readonly rules?: ReadonlyArray<PixelEventCreateParamsPixelEventsRules>;
}

export interface PixelEventCreateParamsPixelEventsRules {
  readonly trigger: "TRIGGERTYPE_CLICK" | "TRIGGERTYPE_PAGEVIEW";
  readonly operator: "OPERATORTYPE_CONTAINS" | "OPERATORTYPE_DOES_NOT_EQUAL" | "OPERATORTYPE_EQUALS";
  readonly value: string;
  readonly variable: "ELEMENT" | "PAGE_HOSTNAME" | "PAGE_PATH" | "PAGE_URL";
}

export interface PixelEventCreateResponse {

}

export interface PixelEventDeleteParams {
  readonly advertiser_id: string;
  readonly event_id: string;
}

export interface PixelEventDeleteResponse {

}

export interface PixelEventStatsParams {
  readonly advertiser_id: string;
  readonly date_range: PixelEventStatsParamsDateRange;
  readonly pixel_ids: ReadonlyArray<string>;
}

export interface PixelEventStatsParamsDateRange {
  readonly start_date: string;
  readonly end_date: string;
}

export interface PixelEventStatsResponse {
  readonly list?: ReadonlyArray<PixelEventStatsResponseList>;
}

export interface PixelEventStatsResponseList {
  readonly pixel_id?: string;
  readonly statistics?: ReadonlyArray<PixelEventStatsResponseListStatistics>;
}

export interface PixelEventStatsResponseListStatistics {
  readonly pixel_event_type?: string;
  readonly custom_event_type?: string;
  readonly attributed_count?: number;
  readonly preview_count?: number;
  readonly total_count?: number;
  readonly browser_event_total_count?: number;
  readonly server_event_total_count?: number;
}

export interface PixelEventUpdateParams {
  readonly advertiser_id: string;
  readonly currency_value?: string;
  readonly currency?: string;
  readonly event_id: string;
  readonly event_name: string;
}

export interface PixelEventUpdateResponse {

}

export interface PixelInstantPageEventParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly optimization_goal: string;
  readonly is_retargeting?: boolean;
}

export interface PixelInstantPageEventResponse {
  readonly list?: ReadonlyArray<PixelInstantPageEventResponseList>;
}

export interface PixelInstantPageEventResponseList {
  readonly business_type?: string;
  readonly instant_page_events?: PixelInstantPageEventResponseListInstantPageEvents;
}

export interface PixelInstantPageEventResponseListInstantPageEvents {
  readonly objective_types?: ReadonlyArray<PixelInstantPageEventResponseListInstantPageEventsObjectiveTypes>;
}

export interface PixelInstantPageEventResponseListInstantPageEventsObjectiveTypes {
  readonly objective_type?: string;
  readonly optimization_goals?: ReadonlyArray<PixelInstantPageEventResponseListInstantPageEventsObjectiveTypesOptimizationGoals>;
}

export interface PixelInstantPageEventResponseListInstantPageEventsObjectiveTypesOptimizationGoals {
  readonly optimization_goal?: string;
  readonly optimization_events?: ReadonlyArray<string>;
}

export interface PixelListParams {
  readonly advertiser_id: string;
  readonly code?: string;
  readonly pixel_id?: string;
  readonly name?: string;
  readonly order_by?: string;
  readonly filtering?: PixelListParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface PixelListParamsFiltering {
  readonly available_for_catalog_only?: boolean;
}

export interface PixelListResponse {
  readonly pixels?: ReadonlyArray<PixelListResponsePixels>;
  readonly page_info?: PixelListResponsePageInfo;
}

export interface PixelListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PixelListResponsePixels {
  readonly pixel_id?: string;
  readonly pixel_code?: string;
  readonly pixel_name?: string;
  readonly pixel_category?: "ONLINE_STORE" | "FILLING_FORM" | "CONTACTS" | "LANDING_PAGE" | "CUSTOMIZE_EVENTS";
  readonly pixel_script?: string;
  readonly create_time?: string;
  readonly pixel_setup_mode?: "STANDARD" | "DEVELOPER";
  readonly partner_name?: string;
  readonly advanced_matching_fields?: PixelListResponsePixelsAdvancedMatchingFields;
  readonly automatic_advanced_matching_fields?: PixelListResponsePixelsAutomaticAdvancedMatchingFields;
  readonly enable_first_party_cookies?: boolean;
  readonly enable_expanded_data_sharing?: boolean;
  readonly asset_ownership?: PixelListResponsePixelsAssetOwnership;
  readonly events?: ReadonlyArray<PixelListResponsePixelsEvents>;
}

export interface PixelListResponsePixelsAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
}

export interface PixelListResponsePixelsAssetOwnership {
  readonly asset_relation_status?: "TRANSFERRED" | "SHARED" | "UNBOUND";
  readonly ownership_status?: boolean;
  readonly owner_bc_id?: string;
  readonly updated_at?: number;
}

export interface PixelListResponsePixelsAutomaticAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
  readonly name?: boolean;
  readonly address?: boolean;
  readonly external_id?: boolean;
}

export interface PixelListResponsePixelsEvents {
  readonly currency_value?: string;
  readonly currency?: "INR" | "JPY" | "USD";
  readonly name?: string;
  readonly deprecated?: boolean;
  readonly event_type?: string;
  readonly optimization_event?: string;
  readonly custom_event_type?: string;
  readonly event_code?: string;
  readonly event_id?: string;
  readonly statistic_type?: string;
  readonly rules?: ReadonlyArray<PixelListResponsePixelsEventsRules>;
}

export interface PixelListResponsePixelsEventsRules {
  readonly operator?: string;
  readonly trigger?: string;
  readonly value?: string;
  readonly variable?: string;
}

export interface PixelTrackParams {
  readonly pixel_code: string;
  readonly event: string;
  readonly event_id?: string;
  readonly timestamp?: string;
  readonly context: string;
  readonly properties?: string;
}

export interface PixelTrackResponse {

}

export interface PixelUpdateParams {
  readonly advertiser_id: string;
  readonly pixel_name: string;
  readonly pixel_id: string;
  readonly advanced_matching_fields?: PixelUpdateParamsAdvancedMatchingFields;
  readonly automatic_advanced_matching_fields?: PixelUpdateParamsAutomaticAdvancedMatchingFields;
  readonly enable_first_party_cookies?: boolean;
  readonly enable_expanded_data_sharing?: boolean;
}

export interface PixelUpdateParamsAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
}

export interface PixelUpdateParamsAutomaticAdvancedMatchingFields {
  readonly phone_number?: boolean;
  readonly email?: boolean;
  readonly name?: boolean;
  readonly address?: boolean;
  readonly external_id?: boolean;
}

export interface PixelUpdateResponse {

}

export interface PlayableDeleteParams {
  readonly advertiser_id: string;
  readonly playable_id: string;
}

export interface PlayableDeleteResponse {
  readonly playable_id?: string;
}

export interface PlayableGetParams {
  readonly advertiser_id: string;
  readonly playable_id?: string;
  readonly playable_name?: string;
  readonly playable_url?: string;
  readonly status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
  readonly operation_status?: "UPLOADED" | "SAVED" | "DELETED";
  readonly page?: number;
  readonly page_size?: number;
}

export interface PlayableGetResponse {
  readonly list?: string;
  readonly advertiser_id?: string;
  readonly playable_id?: string;
  readonly playable_url?: string;
  readonly playable_name?: string;
  readonly playable_orientation?: "BOTH" | "LANDSCAPE" | "PORTRAIT";
  readonly status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
  readonly operation_status?: "UPLOADED" | "SAVED" | "DELETED";
  readonly page_info?: PlayableGetResponsePageInfo;
}

export interface PlayableGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface PlayableSaveParams {
  readonly advertiser_id: string;
  readonly playable_id: string;
  readonly playable_name: string;
}

export interface PlayableSaveResponse {
  readonly playable_id?: string;
  readonly playable_url?: string;
  readonly playable_name?: string;
  readonly playable_orientation?: "BOTH" | "LANDSCAPE" | "PORTRAIT";
  readonly status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
}

export interface PlayableUploadParams {
  readonly advertiser_id: string;
  readonly upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_FILE_ID";
  readonly playable_package?: unknown;
  readonly file_id?: string;
}

export interface PlayableUploadResponse {
  readonly playable_id?: string;
}

export interface PlayableValidateParams {
  readonly advertiser_id: string;
  readonly playable_id: string;
}

export interface PlayableValidateResponse {

}

export interface ReportAdBenchmarkGetParams {
  readonly advertiser_id: string;
  readonly compare_time_window?: string;
  readonly dimensions: ReadonlyArray<"LOCATION" | "AD_CATEGORY" | "EXTERNAL_ACTION" | "PLACEMENT">;
  readonly metrics_fields?: ReadonlyArray<string>;
  readonly filtering: ReportAdBenchmarkGetParamsFiltering;
  readonly sort_field?: string;
  readonly sort_type?: "ASC" | "DES";
  readonly page?: number;
  readonly page_size?: number;
}

export interface ReportAdBenchmarkGetParamsFiltering {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
}

export interface ReportAdBenchmarkGetResponse {
  readonly compare_date?: string;
  readonly list?: ReportAdBenchmarkGetResponseList;
  readonly page_info?: ReportAdBenchmarkGetResponsePageInfo;
}

export interface ReportAdBenchmarkGetResponseList {
  readonly info?: ReportAdBenchmarkGetResponseListInfo;
  readonly metrics?: ReportAdBenchmarkGetResponseListMetrics;
}

export interface ReportAdBenchmarkGetResponseListInfo {
  readonly ad_id?: string;
  readonly location?: string;
  readonly placement?: string;
  readonly ad_category?: number;
  readonly external_action?: string;
}

export interface ReportAdBenchmarkGetResponseListMetrics {
  readonly metric_name?: number;
}

export interface ReportAdBenchmarkGetResponsePageInfo {
  readonly page?: number;
  readonly total_page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
}

export interface ReportIntegratedGetParams {
  readonly advertiser_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly bc_id?: string;
  readonly service_type?: "AUCTION" | "RESERVATION";
  readonly report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "BC" | "TT_SHOP";
  readonly data_level?: "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER";
  readonly dimensions: ReadonlyArray<string>;
  readonly metrics?: ReadonlyArray<string>;
  readonly enable_total_metrics?: boolean;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly query_lifetime?: boolean;
  readonly multi_adv_report_in_utc_time?: boolean;
  readonly order_field?: string;
  readonly order_type?: "ASC" | "DESC";
  readonly filtering?: ReadonlyArray<ReportIntegratedGetParamsFiltering>;
  readonly query_mode?: "REGULAR" | "CHUNK";
  readonly page?: number;
  readonly page_size?: number;
}

export interface ReportIntegratedGetParamsFiltering {
  readonly field_name?: string;
  readonly filter_type?: "IN" | "CONTAIN_ANY_OF" | "MATCH" | "NOT_IN" | "GREATER_EQUAL" | "GREATER_THAN" | "LOWER_EQUAL" | "LOWER_THAN" | "BETWEEN";
  readonly filter_value?: string;
}

export interface ReportIntegratedGetResponse {
  readonly total_metrics?: ReportIntegratedGetResponseTotalMetrics;
  readonly list?: ReadonlyArray<ReportIntegratedGetResponseList>;
  readonly page_info?: ReportIntegratedGetResponsePageInfo;
}

export interface ReportIntegratedGetResponseList {
  readonly dimensions?: ReportIntegratedGetResponseListDimensions;
  readonly metrics?: ReportIntegratedGetResponseListMetrics;
}

export interface ReportIntegratedGetResponseListDimensions {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly ad_id_v2?: string;
  readonly stat_time_day?: string;
  readonly stat_time_hour?: string;
  readonly ac?: string;
  readonly age?: string;
  readonly country_code?: string;
  readonly interest_category?: string;
  readonly interest_category_v2?: string;
  readonly gender?: "FEMALE" | "MALE" | "NONE";
  readonly language?: string;
  readonly placement?: string;
  readonly platform?: string;
  readonly contextual_tag?: string;
}

export interface ReportIntegratedGetResponseListMetrics {
  readonly campaign_name?: string;
  readonly spend?: string;
  readonly impressions?: string;
  readonly reach?: string;
  readonly advertiser_id?: string;
  readonly timezone?: string;
  readonly currency?: string;
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly ad_id_v2?: string;
  readonly ad_text_list?: ReadonlyArray<string>;
  readonly call_to_action_list?: ReadonlyArray<string>;
  readonly ad_profile_image_list?: ReadonlyArray<string>;
  readonly ad_url_list?: ReadonlyArray<string>;
  readonly image_mode_list?: ReadonlyArray<string>;
  readonly image_info_list?: ReadonlyArray<string>;
  readonly ad_display_name_list?: ReadonlyArray<string>;
  readonly identity_type_list?: ReadonlyArray<string>;
  readonly profile_image_list?: ReadonlyArray<string>;
}

export interface ReportIntegratedGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface ReportIntegratedGetResponseTotalMetrics {
  readonly campaign_name?: string;
  readonly spend?: string;
  readonly impressions?: string;
  readonly reach?: string;
}

export interface ReportTaskCancelParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface ReportTaskCancelResponse {
  readonly status?: string;
}

export interface ReportTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface ReportTaskCheckResponse {
  readonly status?: "QUEUING" | "PROCESSING" | "SUCCESS" | "FAILED" | "CANCELED";
  readonly message?: string;
}

export interface ReportTaskCreateParams {
  readonly advertiser_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly service_type?: "AUCTION" | "RESERVATION";
  readonly report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG";
  readonly data_level?: "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER";
  readonly dimensions: ReadonlyArray<string>;
  readonly metrics?: ReadonlyArray<string>;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly query_lifetime?: boolean;
  readonly order_field?: string;
  readonly order_type?: "ASC" | "DESC";
  readonly enable_report_title_translation?: boolean;
  readonly output_format?: "CSV_STRING" | "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
  readonly file_name?: string;
  readonly filtering?: ReadonlyArray<string>;
}

export interface ReportTaskCreateResponse {
  readonly task_id?: string;
}

export interface ReportTaskDownloadParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface ReportTaskDownloadResponse {
  readonly download_url?: string;
  readonly file_name?: string;
  readonly output_format?: "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
}

export interface ReportVideoPerformanceGetParams {
  readonly advertiser_id: string;
  readonly report_type?: "AD" | "VIDEO";
  readonly metrics_fields?: ReadonlyArray<string>;
  readonly filtering: ReportVideoPerformanceGetParamsFiltering;
  readonly sort_field?: string;
  readonly sort_type?: "ASC" | "DES";
  readonly page?: number;
  readonly page_size?: number;
}

export interface ReportVideoPerformanceGetParamsFiltering {
  readonly ad_ids?: ReadonlyArray<string>;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly material_ids?: ReadonlyArray<string>;
  readonly video_ids?: ReadonlyArray<string>;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly lifetime?: boolean;
}

export interface ReportVideoPerformanceGetResponse {
  readonly list?: ReportVideoPerformanceGetResponseList;
  readonly page_info?: ReportVideoPerformanceGetResponsePageInfo;
}

export interface ReportVideoPerformanceGetResponseList {
  readonly info?: ReportVideoPerformanceGetResponseListInfo;
  readonly metrics?: ReportVideoPerformanceGetResponseListMetrics;
}

export interface ReportVideoPerformanceGetResponseListInfo {
  readonly ad_id?: string;
  readonly video_id?: string;
  readonly duration?: number;
}

export interface ReportVideoPerformanceGetResponseListMetrics {
  readonly metric_name?: ReadonlyArray<number>;
}

export interface ReportVideoPerformanceGetResponsePageInfo {
  readonly page?: number;
  readonly total_page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
}

export interface RfContractQueryParams {
  readonly advertiser_id: string;
  readonly included_date: string;
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
}

export interface RfContractQueryResponse {
  readonly has_valid_contract?: boolean;
  readonly pulse_start_date?: string;
  readonly pulse_end_date?: string;
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface RfDeliveryTimezoneParams {
  readonly advertiser_id: string;
  readonly region_codes: ReadonlyArray<string>;
}

export interface RfDeliveryTimezoneResponse {
  readonly timezone_info?: ReadonlyArray<RfDeliveryTimezoneResponseTimezoneInfo>;
}

export interface RfDeliveryTimezoneResponseTimezoneInfo {
  readonly region_code?: string;
  readonly delivery_timezone?: ReadonlyArray<string>;
}

export interface RfInventoryEstimateParams {
  readonly advertiser_id: string;
  readonly audience_info: RfInventoryEstimateParamsAudienceInfo;
  readonly schedule_start_time: string;
  readonly schedule_end_time: string;
  readonly frequency: number;
  readonly frequency_schedule: number;
  readonly objective_type: string;
  readonly cpv_video_duration?: "SIX_SECONDS" | "TWO_SECONDS";
  readonly feed_type?: "STANDARD_FEED" | "TOP_FEED";
  readonly rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  readonly budget?: number;
  readonly purchased_impression?: number;
  readonly purchased_reach?: number;
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
}

export interface RfInventoryEstimateParamsAudienceInfo {
  readonly audience_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: string;
  readonly languages?: ReadonlyArray<string>;
  readonly location_ids: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  readonly contextual_tag_ids?: ReadonlyArray<string>;
}

export interface RfInventoryEstimateResponse {
  readonly default_result?: RfInventoryEstimateResponseDefaultResult;
  readonly results?: ReadonlyArray<RfInventoryEstimateResponseResults>;
}

export interface RfInventoryEstimateResponseDefaultResult {
  readonly base_info?: RfInventoryEstimateResponseDefaultResultBaseInfo;
  readonly daily_cost?: RfInventoryEstimateResponseDefaultResultDailyCost;
  readonly frequency_per_person?: RfInventoryEstimateResponseDefaultResultFrequencyPerPerson;
}

export interface RfInventoryEstimateResponseDefaultResultBaseInfo {
  readonly budget?: number;
  readonly cpm?: number;
  readonly impression?: number;
  readonly reach?: number;
  readonly max_reach?: number;
  readonly average_frequency?: number;
}

export interface RfInventoryEstimateResponseDefaultResultDailyCost {
  readonly cost?: number;
  readonly date?: string;
}

export interface RfInventoryEstimateResponseDefaultResultFrequencyPerPerson {
  readonly frequency?: number;
  readonly percentage?: number;
}

export interface RfInventoryEstimateResponseResults {
  readonly base_info?: RfInventoryEstimateResponseResultsBaseInfo;
  readonly daily_cost?: RfInventoryEstimateResponseResultsDailyCost;
  readonly frequency_per_person?: ReadonlyArray<RfInventoryEstimateResponseResultsFrequencyPerPerson>;
}

export interface RfInventoryEstimateResponseResultsBaseInfo {
  readonly budget?: number;
  readonly cpm?: number;
  readonly impression?: number;
  readonly reach?: number;
  readonly average_frequency?: number;
}

export interface RfInventoryEstimateResponseResultsDailyCost {
  readonly cost?: number;
  readonly date?: string;
}

export interface RfInventoryEstimateResponseResultsFrequencyPerPerson {
  readonly frequency?: number;
  readonly percentage?: number;
}

export interface RfOrderCancelParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
}

export interface RfOrderCancelResponse {
  readonly fail_adgroup_ids?: ReadonlyArray<string>;
}

export interface SearchAdNegativeKeywordAddParams {
  readonly advertiser_id: string;
  readonly object_type: "CAMPAIGN" | "ADGROUP";
  readonly object_ids: ReadonlyArray<string>;
  readonly replace?: boolean;
  readonly keywords: ReadonlyArray<SearchAdNegativeKeywordAddParamsKeywords>;
}

export interface SearchAdNegativeKeywordAddParamsKeywords {
  readonly name: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
}

export interface SearchAdNegativeKeywordAddResponse {

}

export interface SearchAdNegativeKeywordDeleteParams {
  readonly advertiser_id: string;
  readonly object_type: "CAMPAIGN" | "ADGROUP";
  readonly object_id: string;
  readonly keyword_ids: ReadonlyArray<string>;
}

export interface SearchAdNegativeKeywordDeleteResponse {

}

export interface SearchAdNegativeKeywordDownloadParams {
  readonly advertiser_id: string;
  readonly object_type: "CAMPAIGN" | "ADGROUP";
  readonly object_id: string;
}

export interface SearchAdNegativeKeywordDownloadResponse {

}

export interface SearchAdNegativeKeywordGetParams {
  readonly advertiser_id: string;
  readonly object_type: "CAMPAIGN" | "ADGROUP";
  readonly object_id: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface SearchAdNegativeKeywordGetResponse {
  readonly keywords?: ReadonlyArray<SearchAdNegativeKeywordGetResponseKeywords>;
  readonly page_info?: SearchAdNegativeKeywordGetResponsePageInfo;
}

export interface SearchAdNegativeKeywordGetResponseKeywords {
  readonly keyword_id?: string;
  readonly name?: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
}

export interface SearchAdNegativeKeywordGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface SearchAdNegativeKeywordUpdateParams {
  readonly advertiser_id: string;
  readonly object_type: "CAMPAIGN" | "ADGROUP";
  readonly object_id: string;
  readonly old_keyword_id: string;
  readonly keyword: SearchAdNegativeKeywordUpdateParamsKeyword;
}

export interface SearchAdNegativeKeywordUpdateParamsKeyword {
  readonly name: string;
  readonly match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
}

export interface SearchAdNegativeKeywordUpdateResponse {
  readonly new_keyword_id?: string;
}

export interface SearchRegionParams {
  readonly advertiser_id: string;
  readonly language?: string;
}

export interface SearchRegionResponse {
  readonly region_list?: ReadonlyArray<SearchRegionResponseRegionList>;
}

export interface SearchRegionResponseRegionList {
  readonly region_id?: string;
  readonly region_name?: string;
  readonly region_level?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT";
  readonly country_code?: string;
  readonly parent_id?: string;
  readonly area_type?: "ADMIN" | "METROPOLITAN_OR_DMA";
  readonly support_below_18?: boolean;
}

export interface SegmentAudienceParams {
  readonly advertiser_id: string;
  readonly action: string;
  readonly custom_audience_name?: string;
  readonly delete_audience_id?: string;
}

export interface SegmentAudienceResponse {
  readonly audience_id?: string;
}

export interface SegmentMappingParams {
  readonly advertiser_ids: ReadonlyArray<string>;
  readonly action?: string;
  readonly id_schema: ReadonlyArray<"IDFA_MD5" | "AAID_MD5" | "IDFA_SHA256" | "AAID_SHA256" | "EMAIL_SHA256" | "PHONE_SHA256">;
  readonly batch_data: string;
  readonly id?: string;
  readonly audience_ids?: ReadonlyArray<string>;
}

export interface SegmentMappingResponse {

}

export interface ShowcaseIdentityGetParams {
  readonly advertiser_id: string;
}

export interface ShowcaseIdentityGetResponse {
  readonly identity_list?: ReadonlyArray<ShowcaseIdentityGetResponseIdentityList>;
}

export interface ShowcaseIdentityGetResponseIdentityList {
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
}

export interface ShowcaseProductGetParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly region_codes: ReadonlyArray<string>;
  readonly filtering?: ShowcaseProductGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface ShowcaseProductGetParamsFiltering {
  readonly item_group_ids?: ReadonlyArray<string>;
}

export interface ShowcaseProductGetResponse {
  readonly showcase_products?: ReadonlyArray<ShowcaseProductGetResponseShowcaseProducts>;
  readonly page_info?: ShowcaseProductGetResponsePageInfo;
}

export interface ShowcaseProductGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface ShowcaseProductGetResponseShowcaseProducts {
  readonly item_group_id?: string;
  readonly title?: string;
  readonly product_image_url?: string;
  readonly min_price?: string;
  readonly max_price?: string;
  readonly currency?: string;
  readonly category?: string;
  readonly status?: "AVAILABLE" | "NOT_AVAILABLE";
  readonly catalog_id?: string;
  readonly store_id?: string;
}

export interface ShowcaseRegionGetParams {
  readonly advertiser_id: string;
  readonly identity_id: string;
  readonly identity_type: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
}

export interface ShowcaseRegionGetResponse {
  readonly region_codes?: ReadonlyArray<string>;
}

export interface SmartPlusAdAppealParams {
  readonly advertiser_id: string;
  readonly smart_plus_ad_id: string;
  readonly appeal_reason?: string;
  readonly attachment_list?: ReadonlyArray<string>;
}

export interface SmartPlusAdAppealResponse {

}

export interface SmartPlusAdCreateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly ad_name?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly creative_list?: ReadonlyArray<SmartPlusAdCreateParamsCreativeList>;
  readonly playable_list?: ReadonlyArray<SmartPlusAdCreateParamsPlayableList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdCreateParamsAdTextList>;
  readonly auto_message_list?: ReadonlyArray<SmartPlusAdCreateParamsAutoMessageList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdCreateParamsCallToActionList>;
  readonly interactive_add_on_list?: ReadonlyArray<SmartPlusAdCreateParamsInteractiveAddOnList>;
  readonly page_list?: ReadonlyArray<SmartPlusAdCreateParamsPageList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusAdCreateParamsLandingPageUrlList>;
  readonly custom_product_page_list?: ReadonlyArray<SmartPlusAdCreateParamsCustomProductPageList>;
  readonly deeplink_list?: ReadonlyArray<SmartPlusAdCreateParamsDeeplinkList>;
  readonly disclaimer?: SmartPlusAdCreateParamsDisclaimer;
  readonly ad_configuration?: SmartPlusAdCreateParamsAdConfiguration;
}

export interface SmartPlusAdCreateParamsAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly dark_post_status?: "ON" | "OFF";
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdCreateParamsAdConfigurationCatalogCreativeInfo;
  readonly creative_auto_add_toggle?: boolean;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink_utm_params?: ReadonlyArray<SmartPlusAdCreateParamsAdConfigurationDeeplinkUtmParams>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly utm_params?: ReadonlyArray<SmartPlusAdCreateParamsAdConfigurationUtmParams>;
  readonly fallback_type?: string;
  readonly product_info?: SmartPlusAdCreateParamsAdConfigurationProductInfo;
  readonly product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  readonly call_to_action_id?: string;
  readonly phone_info?: SmartPlusAdCreateParamsAdConfigurationPhoneInfo;
  readonly tracking_info?: SmartPlusAdCreateParamsAdConfigurationTrackingInfo;
}

export interface SmartPlusAdCreateParamsAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationProductInfo {
  readonly product_titles?: ReadonlyArray<string>;
  readonly product_image_list?: ReadonlyArray<SmartPlusAdCreateParamsAdConfigurationProductInfoProductImageList>;
  readonly selling_points?: ReadonlyArray<string>;
  readonly catalog_tag_list?: ReadonlyArray<string>;
  readonly product_card_type?: ReadonlyArray<"PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL">;
  readonly promo_info_list?: ReadonlyArray<SmartPlusAdCreateParamsAdConfigurationProductInfoPromoInfoList>;
}

export interface SmartPlusAdCreateParamsAdConfigurationProductInfoProductImageList {
  readonly web_uri?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationTrackingInfo {
  readonly viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly tracking_app_id?: string;
  readonly tracking_pixel_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly app_tracking_info_list?: ReadonlyArray<SmartPlusAdCreateParamsAdConfigurationTrackingInfoAppTrackingInfoList>;
}

export interface SmartPlusAdCreateParamsAdConfigurationTrackingInfoAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface SmartPlusAdCreateParamsAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdCreateParamsAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdCreateParamsAutoMessageList {
  readonly auto_message_id?: string;
}

export interface SmartPlusAdCreateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdCreateParamsCreativeList {
  readonly creative_info?: SmartPlusAdCreateParamsCreativeListCreativeInfo;
}

export interface SmartPlusAdCreateParamsCreativeListCreativeInfo {
  readonly ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly video_info?: SmartPlusAdCreateParamsCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdCreateParamsCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdCreateParamsCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdCreateParamsCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdCreateParamsCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdCreateParamsCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusAdCreateParamsCustomProductPageList {
  readonly custom_product_page_url?: string;
}

export interface SmartPlusAdCreateParamsDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "DEFERRED_DEEPLINK" | "NORMAL";
}

export interface SmartPlusAdCreateParamsDisclaimer {
  readonly disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  readonly disclaimer_text?: SmartPlusAdCreateParamsDisclaimerDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<SmartPlusAdCreateParamsDisclaimerDisclaimerClickableTexts>;
}

export interface SmartPlusAdCreateParamsDisclaimerDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface SmartPlusAdCreateParamsDisclaimerDisclaimerText {
  readonly text?: string;
}

export interface SmartPlusAdCreateParamsInteractiveAddOnList {
  readonly card_id?: string;
}

export interface SmartPlusAdCreateParamsLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusAdCreateParamsPageList {
  readonly page_id?: string;
}

export interface SmartPlusAdCreateParamsPlayableList {
  readonly playable_url?: string;
}

export interface SmartPlusAdCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly smart_plus_ad_id?: string;
  readonly ad_name?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly creative_list?: ReadonlyArray<SmartPlusAdCreateResponseCreativeList>;
  readonly playable_list?: ReadonlyArray<SmartPlusAdCreateResponsePlayableList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdCreateResponseAdTextList>;
  readonly auto_message_list?: ReadonlyArray<SmartPlusAdCreateResponseAutoMessageList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdCreateResponseCallToActionList>;
  readonly interactive_add_on_list?: ReadonlyArray<SmartPlusAdCreateResponseInteractiveAddOnList>;
  readonly page_list?: ReadonlyArray<SmartPlusAdCreateResponsePageList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusAdCreateResponseLandingPageUrlList>;
  readonly custom_product_page_list?: ReadonlyArray<SmartPlusAdCreateResponseCustomProductPageList>;
  readonly deeplink_list?: ReadonlyArray<SmartPlusAdCreateResponseDeeplinkList>;
  readonly disclaimer?: SmartPlusAdCreateResponseDisclaimer;
  readonly ad_configuration?: SmartPlusAdCreateResponseAdConfiguration;
}

export interface SmartPlusAdCreateResponseAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly dark_post_status?: "ON" | "OFF";
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdCreateResponseAdConfigurationCatalogCreativeInfo;
  readonly creative_auto_add_toggle?: boolean;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink_utm_params?: ReadonlyArray<SmartPlusAdCreateResponseAdConfigurationDeeplinkUtmParams>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly utm_params?: ReadonlyArray<SmartPlusAdCreateResponseAdConfigurationUtmParams>;
  readonly fallback_type?: string;
  readonly product_info?: SmartPlusAdCreateResponseAdConfigurationProductInfo;
  readonly product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  readonly call_to_action_id?: string;
  readonly phone_info?: SmartPlusAdCreateResponseAdConfigurationPhoneInfo;
  readonly tracking_info?: SmartPlusAdCreateResponseAdConfigurationTrackingInfo;
}

export interface SmartPlusAdCreateResponseAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationProductInfo {
  readonly product_titles?: ReadonlyArray<string>;
  readonly product_image_list?: ReadonlyArray<SmartPlusAdCreateResponseAdConfigurationProductInfoProductImageList>;
  readonly selling_points?: ReadonlyArray<string>;
  readonly catalog_tag_list?: ReadonlyArray<string>;
  readonly product_card_type?: ReadonlyArray<"PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL">;
  readonly promo_info_list?: ReadonlyArray<SmartPlusAdCreateResponseAdConfigurationProductInfoPromoInfoList>;
}

export interface SmartPlusAdCreateResponseAdConfigurationProductInfoProductImageList {
  readonly web_uri?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationTrackingInfo {
  readonly viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly tracking_app_id?: string;
  readonly tracking_pixel_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly app_tracking_info_list?: ReadonlyArray<SmartPlusAdCreateResponseAdConfigurationTrackingInfoAppTrackingInfoList>;
}

export interface SmartPlusAdCreateResponseAdConfigurationTrackingInfoAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface SmartPlusAdCreateResponseAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdCreateResponseAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdCreateResponseAutoMessageList {
  readonly auto_message_id?: string;
}

export interface SmartPlusAdCreateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdCreateResponseCreativeList {
  readonly ad_material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
  readonly creative_info?: SmartPlusAdCreateResponseCreativeListCreativeInfo;
}

export interface SmartPlusAdCreateResponseCreativeListCreativeInfo {
  readonly ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly material_name?: string;
  readonly video_info?: SmartPlusAdCreateResponseCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdCreateResponseCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdCreateResponseCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdCreateResponseCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdCreateResponseCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdCreateResponseCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusAdCreateResponseCustomProductPageList {
  readonly custom_product_page_url?: string;
}

export interface SmartPlusAdCreateResponseDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface SmartPlusAdCreateResponseDisclaimer {
  readonly disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  readonly disclaimer_text?: SmartPlusAdCreateResponseDisclaimerDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<SmartPlusAdCreateResponseDisclaimerDisclaimerClickableTexts>;
}

export interface SmartPlusAdCreateResponseDisclaimerDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface SmartPlusAdCreateResponseDisclaimerDisclaimerText {
  readonly text?: string;
}

export interface SmartPlusAdCreateResponseInteractiveAddOnList {
  readonly card_id?: string;
}

export interface SmartPlusAdCreateResponseLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusAdCreateResponsePageList {
  readonly page_id?: string;
}

export interface SmartPlusAdCreateResponsePlayableList {
  readonly playable_url?: string;
}

export interface SmartPlusAdGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly filtering?: SmartPlusAdGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface SmartPlusAdGetParamsFiltering {
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly smart_plus_ad_ids?: ReadonlyArray<string>;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly optimization_goal?: string;
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
  readonly modified_after?: string;
}

export interface SmartPlusAdGetResponse {
  readonly list?: ReadonlyArray<SmartPlusAdGetResponseList>;
  readonly page_info?: SmartPlusAdGetResponsePageInfo;
}

export interface SmartPlusAdGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly smart_plus_ad_id?: string;
  readonly ad_name?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly creative_list?: ReadonlyArray<SmartPlusAdGetResponseListCreativeList>;
  readonly playable_list?: ReadonlyArray<SmartPlusAdGetResponseListPlayableList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdGetResponseListAdTextList>;
  readonly auto_message_list?: ReadonlyArray<SmartPlusAdGetResponseListAutoMessageList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdGetResponseListCallToActionList>;
  readonly interactive_add_on_list?: ReadonlyArray<SmartPlusAdGetResponseListInteractiveAddOnList>;
  readonly page_list?: ReadonlyArray<SmartPlusAdGetResponseListPageList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusAdGetResponseListLandingPageUrlList>;
  readonly custom_product_page_list?: ReadonlyArray<SmartPlusAdGetResponseListCustomProductPageList>;
  readonly deeplink_list?: ReadonlyArray<SmartPlusAdGetResponseListDeeplinkList>;
  readonly disclaimer?: SmartPlusAdGetResponseListDisclaimer;
  readonly ad_configuration?: SmartPlusAdGetResponseListAdConfiguration;
}

export interface SmartPlusAdGetResponseListAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly dark_post_status?: "ON" | "OFF";
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdGetResponseListAdConfigurationCatalogCreativeInfo;
  readonly creative_auto_add_toggle?: boolean;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE" | "CALL_TO_ACTION_ENHANCEMENT" | "AIGC_CARD">;
  readonly deeplink_utm_params?: ReadonlyArray<SmartPlusAdGetResponseListAdConfigurationDeeplinkUtmParams>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly utm_params?: ReadonlyArray<SmartPlusAdGetResponseListAdConfigurationUtmParams>;
  readonly fallback_type?: string;
  readonly product_info?: SmartPlusAdGetResponseListAdConfigurationProductInfo;
  readonly product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  readonly call_to_action_id?: string;
  readonly phone_info?: SmartPlusAdGetResponseListAdConfigurationPhoneInfo;
  readonly tracking_info?: SmartPlusAdGetResponseListAdConfigurationTrackingInfo;
}

export interface SmartPlusAdGetResponseListAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationProductInfo {
  readonly product_titles?: ReadonlyArray<string>;
  readonly product_image_list?: ReadonlyArray<SmartPlusAdGetResponseListAdConfigurationProductInfoProductImageList>;
  readonly selling_points?: ReadonlyArray<string>;
  readonly catalog_tag_list?: ReadonlyArray<string>;
  readonly product_card_type?: ReadonlyArray<"PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL">;
  readonly promo_info_list?: ReadonlyArray<SmartPlusAdGetResponseListAdConfigurationProductInfoPromoInfoList>;
}

export interface SmartPlusAdGetResponseListAdConfigurationProductInfoProductImageList {
  readonly web_uri?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationTrackingInfo {
  readonly viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly tracking_app_id?: string;
  readonly tracking_pixel_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly app_tracking_info_list?: ReadonlyArray<SmartPlusAdGetResponseListAdConfigurationTrackingInfoAppTrackingInfoList>;
}

export interface SmartPlusAdGetResponseListAdConfigurationTrackingInfoAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface SmartPlusAdGetResponseListAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdGetResponseListAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdGetResponseListAutoMessageList {
  readonly auto_message_id?: string;
}

export interface SmartPlusAdGetResponseListCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdGetResponseListCreativeList {
  readonly ad_material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
  readonly creative_info?: SmartPlusAdGetResponseListCreativeListCreativeInfo;
}

export interface SmartPlusAdGetResponseListCreativeListCreativeInfo {
  readonly ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly material_name?: string;
  readonly video_info?: SmartPlusAdGetResponseListCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdGetResponseListCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdGetResponseListCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdGetResponseListCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdGetResponseListCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdGetResponseListCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusAdGetResponseListCustomProductPageList {
  readonly custom_product_page_url?: string;
}

export interface SmartPlusAdGetResponseListDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface SmartPlusAdGetResponseListDisclaimer {
  readonly disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  readonly disclaimer_text?: SmartPlusAdGetResponseListDisclaimerDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<SmartPlusAdGetResponseListDisclaimerDisclaimerClickableTexts>;
}

export interface SmartPlusAdGetResponseListDisclaimerDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface SmartPlusAdGetResponseListDisclaimerDisclaimerText {
  readonly text?: string;
}

export interface SmartPlusAdGetResponseListInteractiveAddOnList {
  readonly card_id?: string;
}

export interface SmartPlusAdGetResponseListLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusAdGetResponseListPageList {
  readonly page_id?: string;
}

export interface SmartPlusAdGetResponseListPlayableList {
  readonly playable_url?: string;
}

export interface SmartPlusAdGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface SmartPlusAdgroupBudgetUpdateParams {
  readonly advertiser_id: string;
  readonly budget?: ReadonlyArray<SmartPlusAdgroupBudgetUpdateParamsBudget>;
  readonly scheduled_budget?: ReadonlyArray<SmartPlusAdgroupBudgetUpdateParamsScheduledBudget>;
}

export interface SmartPlusAdgroupBudgetUpdateParamsBudget {
  readonly adgroup_id?: string;
  readonly budget?: number;
}

export interface SmartPlusAdgroupBudgetUpdateParamsScheduledBudget {
  readonly adgroup_id?: string;
  readonly scheduled_budget?: number;
}

export interface SmartPlusAdgroupBudgetUpdateResponse {

}

export interface SmartPlusAdgroupCreateParams {
  readonly advertiser_id: string;
  readonly request_id: string;
  readonly campaign_id: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly adgroup_name: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly promotion_type: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "true";
  readonly optimization_goal: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly pixel_id?: string;
  readonly app_config?: ReadonlyArray<SmartPlusAdgroupCreateParamsAppConfig>;
  readonly minis_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly app_attribution_source?: "MMP" | "SAN" | "true";
  readonly app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API" | "true";
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly native_series_id?: string;
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  readonly messaging_app_account_id?: string;
  readonly message_event_set_id?: string;
  readonly phone_info?: SmartPlusAdgroupCreateParamsPhoneInfo;
  readonly bid_type: "BID_TYPE_NO_BID" | "BID_TYPE_CUSTOM";
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: "DEFAULT" | "AEO" | "VO_MIN_ROAS" | "VO_HIGHEST_VALUE" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly roas_bid?: number;
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS";
  readonly engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event: string;
  readonly targeting_optimization_mode?: string;
  readonly suggestion_audience_enabled?: boolean;
  readonly targeting_spec: SmartPlusAdgroupCreateParamsTargetingSpec;
  readonly budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END" | "BUDGET_MODE_DAY" | "false";
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly min_budget?: number;
  readonly schedule_type: "SCHEDULE_FROM_NOW" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END";
  readonly schedule_start_time: string;
  readonly schedule_end_time?: string;
  readonly movie_premiere_date?: string;
  readonly dayparting?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK";
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "TRAFFIC_LANDING_PAGE_VIEW">;
  readonly tiktok_subplacements?: ReadonlyArray<"LEMON8" | "PINE_DRAMA">;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
}

export interface SmartPlusAdgroupCreateParamsAppConfig {
  readonly app_id?: string;
}

export interface SmartPlusAdgroupCreateParamsPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdgroupCreateParamsTargetingSpec {
  readonly app_targeting_type?: "PROSPECT" | "RETARGETING";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<"AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING">;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly audience_ids?: ReadonlyArray<string>;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<SmartPlusAdgroupCreateParamsTargetingSpecIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<SmartPlusAdgroupCreateParamsTargetingSpecExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<SmartPlusAdgroupCreateParamsTargetingSpecActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly smart_audience_enabled?: boolean;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly saved_audience_id?: string;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupCreateParamsTargetingSpecActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupCreateParamsTargetingSpecExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupCreateParamsTargetingSpecIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly app_config?: ReadonlyArray<SmartPlusAdgroupCreateResponseAppConfig>;
  readonly minis_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly app_attribution_source?: "MMP" | "SAN";
  readonly app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly native_series_id?: string;
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  readonly messaging_app_account_id?: string;
  readonly message_event_set_id?: string;
  readonly phone_info?: SmartPlusAdgroupCreateResponsePhoneInfo;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  readonly engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly min_budget?: number;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly movie_premiere_date?: string;
  readonly dayparting?: string;
  readonly targeting_optimization_mode?: string;
  readonly suggestion_audience_enabled?: boolean;
  readonly targeting_spec?: SmartPlusAdgroupCreateResponseTargetingSpec;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly placement_type?: ReadonlyArray<"PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL">;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE">;
  readonly tiktok_subplacements?: ReadonlyArray<"LEMON8" | "PINE_DRAMA">;
  readonly search_result_enabled?: boolean;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface SmartPlusAdgroupCreateResponseAppConfig {
  readonly app_id?: string;
}

export interface SmartPlusAdgroupCreateResponsePhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdgroupCreateResponseTargetingSpec {
  readonly app_targeting_type?: "PROSPECT" | "RETARGETING";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  readonly languages?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly audience_ids?: ReadonlyArray<string>;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<SmartPlusAdgroupCreateResponseTargetingSpecIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<SmartPlusAdgroupCreateResponseTargetingSpecExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<SmartPlusAdgroupCreateResponseTargetingSpecActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly smart_audience_enabled?: boolean;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly saved_audience_id?: string;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupCreateResponseTargetingSpecActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupCreateResponseTargetingSpecExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupCreateResponseTargetingSpecIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly filtering?: SmartPlusAdgroupGetParamsFiltering;
  readonly page?: number;
  readonly page_size?: number;
}

export interface SmartPlusAdgroupGetParamsFiltering {
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly adgroup_name?: string;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly promotion_type?: "APP" | "WEBSITE" | "INSTANT_FORM" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  readonly optimization_goal?: string;
}

export interface SmartPlusAdgroupGetResponse {
  readonly list?: ReadonlyArray<SmartPlusAdgroupGetResponseList>;
  readonly page_info?: SmartPlusAdgroupGetResponsePageInfo;
}

export interface SmartPlusAdgroupGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly promotion_website_type?: string;
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly app_config?: ReadonlyArray<SmartPlusAdgroupGetResponseListAppConfig>;
  readonly minis_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly app_attribution_source?: "MMP" | "SAN";
  readonly app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly native_series_id?: string;
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  readonly messaging_app_account_id?: string;
  readonly message_event_set_id?: string;
  readonly phone_info?: SmartPlusAdgroupGetResponseListPhoneInfo;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  readonly engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly min_budget?: number;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly movie_premiere_date?: string;
  readonly dayparting?: string;
  readonly targeting_optimization_mode?: "MANUAL" | "AUTOMATIC";
  readonly suggestion_audience_enabled?: boolean;
  readonly targeting_spec?: SmartPlusAdgroupGetResponseListTargetingSpec;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly placement_type?: ReadonlyArray<"PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL">;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE">;
  readonly tiktok_subplacements?: ReadonlyArray<"LEMON8" | "PINE_DRAMA">;
  readonly search_result_enabled?: boolean;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface SmartPlusAdgroupGetResponseListAppConfig {
  readonly app_id?: string;
}

export interface SmartPlusAdgroupGetResponseListPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdgroupGetResponseListTargetingSpec {
  readonly app_targeting_type?: "PROSPECT" | "RETARGETING";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  readonly languages?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly audience_ids?: ReadonlyArray<string>;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<SmartPlusAdgroupGetResponseListTargetingSpecIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<SmartPlusAdgroupGetResponseListTargetingSpecExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<SmartPlusAdgroupGetResponseListTargetingSpecActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly smart_audience_enabled?: boolean;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly saved_audience_id?: string;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupGetResponseListTargetingSpecActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupGetResponseListTargetingSpecExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupGetResponseListTargetingSpecIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface SmartPlusAdgroupStatusUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_ids: ReadonlyArray<string>;
  readonly operation_status: "DISABLE" | "ENABLE" | "DELETE";
}

export interface SmartPlusAdgroupStatusUpdateResponse {
  readonly adgroup_list?: ReadonlyArray<SmartPlusAdgroupStatusUpdateResponseAdgroupList>;
  readonly error_list?: ReadonlyArray<SmartPlusAdgroupStatusUpdateResponseErrorList>;
}

export interface SmartPlusAdgroupStatusUpdateResponseAdgroupList {
  readonly adgroup_id?: string;
  readonly status?: "DISABLE" | "ENABLE" | "DELETE";
}

export interface SmartPlusAdgroupStatusUpdateResponseErrorList {
  readonly adgroup_id?: string;
  readonly error_message?: string;
}

export interface SmartPlusAdgroupUpdateParams {
  readonly advertiser_id: string;
  readonly adgroup_id: string;
  readonly adgroup_name?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly roas_bid?: number;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END" | "BUDGET_MODE_TOTAL";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly targeting_optimization_mode?: string;
  readonly suggestion_audience_enabled?: boolean;
  readonly targeting_spec?: SmartPlusAdgroupUpdateParamsTargetingSpec;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
}

export interface SmartPlusAdgroupUpdateParamsTargetingSpec {
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE" | "MULTIPLE";
  readonly languages?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<"AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING">;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly audience_ids?: ReadonlyArray<string>;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<SmartPlusAdgroupUpdateParamsTargetingSpecIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<SmartPlusAdgroupUpdateParamsTargetingSpecExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<SmartPlusAdgroupUpdateParamsTargetingSpecActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly smart_audience_enabled?: boolean;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly saved_audience_id?: string;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupUpdateParamsTargetingSpecActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupUpdateParamsTargetingSpecExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupUpdateParamsTargetingSpecIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly promotion_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly promotion_website_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly optimization_goal?: string;
  readonly pixel_id?: string;
  readonly app_config?: ReadonlyArray<SmartPlusAdgroupUpdateResponseAppConfig>;
  readonly minis_id?: string;
  readonly optimization_event?: string;
  readonly custom_conversion_id?: string;
  readonly deep_funnel_optimization_status?: "ON" | "OFF";
  readonly deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  readonly deep_funnel_event_source_id?: string;
  readonly deep_funnel_optimization_event?: string;
  readonly app_attribution_source?: "MMP" | "SAN";
  readonly app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  readonly identity_id?: string;
  readonly identity_type?: "TT_USER" | "BC_AUTH_TT";
  readonly identity_authorized_bc_id?: string;
  readonly native_series_id?: string;
  readonly messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  readonly zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  readonly messaging_app_account_id?: string;
  readonly message_event_set_id?: string;
  readonly phone_info?: SmartPlusAdgroupUpdateResponsePhoneInfo;
  readonly bid_type?: string;
  readonly bid_price?: number;
  readonly conversion_bid_price?: number;
  readonly deep_bid_type?: string;
  readonly roas_bid?: number;
  readonly incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  readonly vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  readonly click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  readonly engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  readonly view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  readonly attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  readonly billing_event?: string;
  readonly pacing?: string;
  readonly budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly min_budget?: number;
  readonly schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly movie_premiere_date?: string;
  readonly dayparting?: string;
  readonly targeting_optimization_mode?: string;
  readonly suggestion_audience_enabled?: boolean;
  readonly targeting_spec?: SmartPlusAdgroupUpdateResponseTargetingSpec;
  readonly is_hfss?: boolean;
  readonly is_lhf_compliance?: boolean;
  readonly placement_type?: ReadonlyArray<"PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL">;
  readonly placements?: ReadonlyArray<"PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE">;
  readonly tiktok_subplacements?: ReadonlyArray<"LEMON8" | "PINE_DRAMA">;
  readonly search_result_enabled?: boolean;
  readonly comment_disabled?: boolean;
  readonly share_disabled?: boolean;
  readonly video_download_disabled?: boolean;
  readonly skip_learning_phase?: boolean;
  readonly create_time?: string;
  readonly modify_time?: string;
}

export interface SmartPlusAdgroupUpdateResponseAppConfig {
  readonly app_id?: string;
}

export interface SmartPlusAdgroupUpdateResponsePhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdgroupUpdateResponseTargetingSpec {
  readonly app_targeting_type?: "PROSPECT" | "RETARGETING";
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  readonly languages?: ReadonlyArray<string>;
  readonly operating_systems?: ReadonlyArray<"ANDROID" | "IOS">;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly age_groups?: ReadonlyArray<string>;
  readonly gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  readonly audience_ids?: ReadonlyArray<string>;
  readonly shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  readonly shopping_ads_retargeting_actions_days?: number;
  readonly included_custom_actions?: ReadonlyArray<SmartPlusAdgroupUpdateResponseTargetingSpecIncludedCustomActions>;
  readonly excluded_custom_actions?: ReadonlyArray<SmartPlusAdgroupUpdateResponseTargetingSpecExcludedCustomActions>;
  readonly shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  readonly included_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly excluded_pangle_audience_package_ids?: ReadonlyArray<string>;
  readonly interest_category_ids?: ReadonlyArray<string>;
  readonly interest_keyword_ids?: ReadonlyArray<string>;
  readonly purchase_intention_keyword_ids?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<SmartPlusAdgroupUpdateResponseTargetingSpecActions>;
  readonly smart_interest_behavior_enabled?: boolean;
  readonly smart_audience_enabled?: boolean;
  readonly spending_power?: "ALL" | "HIGH";
  readonly household_income?: ReadonlyArray<"TOP5" | "TOP10" | "TOP10_25" | "TOP25_50">;
  readonly min_android_version?: string;
  readonly min_ios_version?: string;
  readonly device_model_ids?: ReadonlyArray<string>;
  readonly network_types?: ReadonlyArray<string>;
  readonly carrier_ids?: ReadonlyArray<string>;
  readonly isp_ids?: ReadonlyArray<string>;
  readonly device_price_ranges?: ReadonlyArray<number>;
  readonly saved_audience_id?: string;
  readonly blocked_pangle_app_ids?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupUpdateResponseTargetingSpecActions {
  readonly action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  readonly action_period?: number;
  readonly video_user_actions?: ReadonlyArray<string>;
  readonly action_category_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdgroupUpdateResponseTargetingSpecExcludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdgroupUpdateResponseTargetingSpecIncludedCustomActions {
  readonly code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  readonly days?: number;
}

export interface SmartPlusAdMaterialStatusUpdateParams {
  readonly advertiser_id: string;
  readonly smart_plus_ad_id: string;
  readonly ad_material_ids: ReadonlyArray<string>;
  readonly operation_status: "DISABLE" | "ENABLE";
}

export interface SmartPlusAdMaterialStatusUpdateResponse {
  readonly smart_plus_ad_id?: ReadonlyArray<string>;
  readonly ad_material_ids?: ReadonlyArray<string>;
  readonly material_status?: "DISABLE" | "ENABLE";
}

export interface SmartPlusAdPreviewParams {
  readonly advertiser_id: string;
  readonly preview_type: string;
  readonly catalog_enabled?: boolean;
  readonly catalog_id?: string;
  readonly catalog_authorized_bc_id?: string;
  readonly creative_list: ReadonlyArray<SmartPlusAdPreviewParamsCreativeList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdPreviewParamsAdTextList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdPreviewParamsCallToActionList>;
  readonly ad_configuration?: SmartPlusAdPreviewParamsAdConfiguration;
}

export interface SmartPlusAdPreviewParamsAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdPreviewParamsAdConfigurationCatalogCreativeInfo;
  readonly call_to_action_id?: string;
}

export interface SmartPlusAdPreviewParamsAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdPreviewParamsAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdPreviewParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdPreviewParamsCreativeList {
  readonly creative_info: SmartPlusAdPreviewParamsCreativeListCreativeInfo;
}

export interface SmartPlusAdPreviewParamsCreativeListCreativeInfo {
  readonly video_info?: SmartPlusAdPreviewParamsCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdPreviewParamsCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdPreviewParamsCreativeListCreativeInfoMusicInfo;
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdPreviewParamsCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdPreviewParamsCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdPreviewParamsCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
}

export interface SmartPlusAdPreviewResponse {
  readonly preview_link?: string;
  readonly iframe?: string;
}

export interface SmartPlusAdReviewInfoParams {
  readonly advertiser_id: string;
  readonly smart_plus_ad_ids: ReadonlyArray<string>;
  readonly lang?: string;
  readonly extra_info_setting?: SmartPlusAdReviewInfoParamsExtraInfoSetting;
}

export interface SmartPlusAdReviewInfoParamsExtraInfoSetting {
  readonly include_reject_info?: boolean;
  readonly include_violation_frame?: boolean;
}

export interface SmartPlusAdReviewInfoResponse {
  readonly smart_plus_ad_review_infos?: ReadonlyArray<SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfos>;
  readonly material_review_infos?: ReadonlyArray<SmartPlusAdReviewInfoResponseMaterialReviewInfos>;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfos {
  readonly ad_material_id?: string;
  readonly smart_plus_ad_id?: string;
  readonly review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  readonly passed_locations?: ReadonlyArray<string>;
  readonly reject_info?: ReadonlyArray<SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfo>;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfo {
  readonly reasons?: ReadonlyArray<string>;
  readonly suggestion?: string;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfo;
  readonly violation_frames?: ReadonlyArray<SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoViolationFrames>;
  readonly specification?: string;
  readonly video_violation_frames?: ReadonlyArray<SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoVideoViolationFrames>;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfo {
  readonly content_type?: string;
  readonly text_content?: string;
  readonly image_content?: SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoImageContent;
  readonly video_content?: SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoVideoContent;
  readonly carousel_music_info?: SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoCarouselMusicInfo;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoCarouselMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoVideoViolationFrames {
  readonly web_url?: string;
  readonly hover_periods?: ReadonlyArray<string>;
  readonly thumbnail_periods?: ReadonlyArray<string>;
}

export interface SmartPlusAdReviewInfoResponseMaterialReviewInfosRejectInfoViolationFrames {
  readonly type?: string;
  readonly video_id?: string;
  readonly web_url_list?: ReadonlyArray<string>;
  readonly violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfos {
  readonly smart_plus_ad_id?: string;
  readonly review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  readonly passed_locations?: ReadonlyArray<string>;
  readonly appeal_status?: "NOT_APPEALED" | "APPEALING" | "APPEAL_SUCCESSFUL" | "APPEAL_FAILED" | "APPEAL_DONE";
  readonly appeal_reject_reasons?: ReadonlyArray<string>;
  readonly reject_info?: ReadonlyArray<SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfo>;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfo {
  readonly reasons?: ReadonlyArray<string>;
  readonly suggestion?: string;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfo;
  readonly violation_frames?: ReadonlyArray<SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoViolationFrames>;
  readonly specification?: string;
  readonly video_violation_frames?: ReadonlyArray<SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoVideoViolationFrames>;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfo {
  readonly content_type?: string;
  readonly text_content?: string;
  readonly image_content?: SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoImageContent;
  readonly video_content?: SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoVideoContent;
  readonly carousel_music_info?: SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoCarouselMusicInfo;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoCarouselMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoVideoViolationFrames {
  readonly web_url?: string;
  readonly hover_periods?: ReadonlyArray<string>;
  readonly thumbnail_periods?: ReadonlyArray<string>;
}

export interface SmartPlusAdReviewInfoResponseSmartPlusAdReviewInfosRejectInfoViolationFrames {
  readonly type?: string;
  readonly video_id?: string;
  readonly web_url_list?: ReadonlyArray<string>;
  readonly violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}

export interface SmartPlusAdStatusUpdateParams {
  readonly advertiser_id: string;
  readonly smart_plus_ad_ids: ReadonlyArray<string>;
  readonly operation_status: "DISABLE" | "ENABLE" | "DELETE";
}

export interface SmartPlusAdStatusUpdateResponse {
  readonly smart_plus_ad_ids?: ReadonlyArray<string>;
  readonly status?: "DISABLE" | "ENABLE" | "DELETE";
}

export interface SmartPlusAdUpdateParams {
  readonly advertiser_id: string;
  readonly smart_plus_ad_id: string;
  readonly ad_name?: string;
  readonly creative_list?: ReadonlyArray<SmartPlusAdUpdateParamsCreativeList>;
  readonly playable_list?: ReadonlyArray<SmartPlusAdUpdateParamsPlayableList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdUpdateParamsAdTextList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdUpdateParamsCallToActionList>;
  readonly interactive_add_on_list?: ReadonlyArray<SmartPlusAdUpdateParamsInteractiveAddOnList>;
  readonly page_list?: ReadonlyArray<SmartPlusAdUpdateParamsPageList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusAdUpdateParamsLandingPageUrlList>;
  readonly custom_product_page_list?: ReadonlyArray<SmartPlusAdUpdateParamsCustomProductPageList>;
  readonly deeplink_list?: ReadonlyArray<SmartPlusAdUpdateParamsDeeplinkList>;
  readonly disclaimer?: SmartPlusAdUpdateParamsDisclaimer;
  readonly ad_configuration?: SmartPlusAdUpdateParamsAdConfiguration;
}

export interface SmartPlusAdUpdateParamsAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly dark_post_status?: "ON" | "OFF";
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdUpdateParamsAdConfigurationCatalogCreativeInfo;
  readonly creative_auto_add_toggle?: boolean;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE">;
  readonly deeplink_utm_params?: ReadonlyArray<SmartPlusAdUpdateParamsAdConfigurationDeeplinkUtmParams>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly utm_params?: ReadonlyArray<SmartPlusAdUpdateParamsAdConfigurationUtmParams>;
  readonly product_info?: SmartPlusAdUpdateParamsAdConfigurationProductInfo;
  readonly product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG" | "MINIS" | "true";
  readonly call_to_action_id?: string;
  readonly tracking_info?: SmartPlusAdUpdateParamsAdConfigurationTrackingInfo;
}

export interface SmartPlusAdUpdateParamsAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdUpdateParamsAdConfigurationDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdUpdateParamsAdConfigurationProductInfo {
  readonly product_titles?: ReadonlyArray<string>;
  readonly product_image_list?: ReadonlyArray<SmartPlusAdUpdateParamsAdConfigurationProductInfoProductImageList>;
  readonly selling_points?: ReadonlyArray<string>;
  readonly catalog_tag_list?: ReadonlyArray<string>;
  readonly product_card_type?: ReadonlyArray<"PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL">;
  readonly promo_info_list?: ReadonlyArray<SmartPlusAdUpdateParamsAdConfigurationProductInfoPromoInfoList>;
}

export interface SmartPlusAdUpdateParamsAdConfigurationProductInfoProductImageList {
  readonly web_uri?: string;
}

export interface SmartPlusAdUpdateParamsAdConfigurationProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface SmartPlusAdUpdateParamsAdConfigurationTrackingInfo {
  readonly viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly tracking_app_id?: string;
  readonly tracking_pixel_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
}

export interface SmartPlusAdUpdateParamsAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdUpdateParamsAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdUpdateParamsCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdUpdateParamsCreativeList {
  readonly ad_material_id?: string;
  readonly creative_info?: SmartPlusAdUpdateParamsCreativeListCreativeInfo;
}

export interface SmartPlusAdUpdateParamsCreativeListCreativeInfo {
  readonly ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly video_info?: SmartPlusAdUpdateParamsCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdUpdateParamsCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdUpdateParamsCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdUpdateParamsCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdUpdateParamsCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdUpdateParamsCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusAdUpdateParamsCustomProductPageList {
  readonly custom_product_page_url?: string;
}

export interface SmartPlusAdUpdateParamsDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: string;
}

export interface SmartPlusAdUpdateParamsDisclaimer {
  readonly disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  readonly disclaimer_text?: SmartPlusAdUpdateParamsDisclaimerDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<SmartPlusAdUpdateParamsDisclaimerDisclaimerClickableTexts>;
}

export interface SmartPlusAdUpdateParamsDisclaimerDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface SmartPlusAdUpdateParamsDisclaimerDisclaimerText {
  readonly text?: string;
}

export interface SmartPlusAdUpdateParamsInteractiveAddOnList {
  readonly card_id?: string;
}

export interface SmartPlusAdUpdateParamsLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusAdUpdateParamsPageList {
  readonly page_id?: string;
}

export interface SmartPlusAdUpdateParamsPlayableList {
  readonly playable_url?: string;
}

export interface SmartPlusAdUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly smart_plus_ad_id?: string;
  readonly ad_name?: string;
  readonly operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  readonly secondary_status?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly creative_list?: ReadonlyArray<SmartPlusAdUpdateResponseCreativeList>;
  readonly playable_list?: ReadonlyArray<SmartPlusAdUpdateResponsePlayableList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusAdUpdateResponseAdTextList>;
  readonly auto_message_list?: ReadonlyArray<SmartPlusAdUpdateResponseAutoMessageList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusAdUpdateResponseCallToActionList>;
  readonly interactive_add_on_list?: ReadonlyArray<SmartPlusAdUpdateResponseInteractiveAddOnList>;
  readonly page_list?: ReadonlyArray<SmartPlusAdUpdateResponsePageList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusAdUpdateResponseLandingPageUrlList>;
  readonly custom_product_page_list?: ReadonlyArray<SmartPlusAdUpdateResponseCustomProductPageList>;
  readonly deeplink_list?: ReadonlyArray<SmartPlusAdUpdateResponseDeeplinkList>;
  readonly disclaimer?: SmartPlusAdUpdateResponseDisclaimer;
  readonly ad_configuration?: SmartPlusAdUpdateResponseAdConfiguration;
}

export interface SmartPlusAdUpdateResponseAdConfiguration {
  readonly identity_type?: string;
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
  readonly dark_post_status?: "ON" | "OFF";
  readonly product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  readonly product_set_id?: string;
  readonly product_ids?: ReadonlyArray<string>;
  readonly catalog_creative_toggle?: boolean;
  readonly catalog_creative_info?: SmartPlusAdUpdateResponseAdConfigurationCatalogCreativeInfo;
  readonly creative_auto_add_toggle?: boolean;
  readonly creative_auto_enhancement_strategy_list?: ReadonlyArray<"TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE" | "CALL_TO_ACTION_ENHANCEMENT" | "AIGC_CARD">;
  readonly deeplink_utm_params?: ReadonlyArray<SmartPlusAdUpdateResponseAdConfigurationDeeplinkUtmParams>;
  readonly end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  readonly product_display_field_list?: ReadonlyArray<"DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE">;
  readonly auto_disclaimer_types?: ReadonlyArray<"EMISSION" | "DISCOUNT">;
  readonly utm_params?: ReadonlyArray<SmartPlusAdUpdateResponseAdConfigurationUtmParams>;
  readonly fallback_type?: string;
  readonly product_info?: SmartPlusAdUpdateResponseAdConfigurationProductInfo;
  readonly product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  readonly call_to_action_id?: string;
  readonly phone_info?: SmartPlusAdUpdateResponseAdConfigurationPhoneInfo;
  readonly tracking_info?: SmartPlusAdUpdateResponseAdConfigurationTrackingInfo;
}

export interface SmartPlusAdUpdateResponseAdConfigurationCatalogCreativeInfo {
  readonly catalog_media_settings?: ReadonlyArray<string>;
  readonly catalog_template_video_id?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationDeeplinkUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationPhoneInfo {
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
  readonly phone_number?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationProductInfo {
  readonly product_titles?: ReadonlyArray<string>;
  readonly product_image_list?: ReadonlyArray<SmartPlusAdUpdateResponseAdConfigurationProductInfoProductImageList>;
  readonly selling_points?: ReadonlyArray<string>;
  readonly catalog_tag_list?: ReadonlyArray<string>;
  readonly product_card_type?: ReadonlyArray<"PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL">;
  readonly promo_info_list?: ReadonlyArray<SmartPlusAdUpdateResponseAdConfigurationProductInfoPromoInfoList>;
}

export interface SmartPlusAdUpdateResponseAdConfigurationProductInfoProductImageList {
  readonly web_uri?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationProductInfoPromoInfoList {
  readonly discount_type?: "PERCENTAGE" | "CASH";
  readonly discount_value?: number;
  readonly discount_currency?: string;
  readonly promo_code?: string;
  readonly minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  readonly minimum_purchase_value?: number;
  readonly minimum_purchase_currency?: string;
  readonly valid_start_time?: string;
  readonly valid_end_time?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationTrackingInfo {
  readonly viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly viewability_vast_url?: string;
  readonly brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly brand_safety_vast_url?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
  readonly tracking_app_id?: string;
  readonly tracking_pixel_id?: string;
  readonly tracking_offline_event_set_ids?: ReadonlyArray<string>;
  readonly tracking_message_event_set_id?: string;
  readonly app_tracking_info_list?: ReadonlyArray<SmartPlusAdUpdateResponseAdConfigurationTrackingInfoAppTrackingInfoList>;
}

export interface SmartPlusAdUpdateResponseAdConfigurationTrackingInfoAppTrackingInfoList {
  readonly app_type?: "APP_ANDROID" | "APP_IOS";
  readonly app_id?: string;
  readonly impression_tracking_url?: string;
  readonly click_tracking_url?: string;
}

export interface SmartPlusAdUpdateResponseAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusAdUpdateResponseAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusAdUpdateResponseAutoMessageList {
  readonly auto_message_id?: string;
}

export interface SmartPlusAdUpdateResponseCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusAdUpdateResponseCreativeList {
  readonly ad_material_id?: string;
  readonly material_operation_status?: "ENABLE" | "DISABLE";
  readonly creative_info?: SmartPlusAdUpdateResponseCreativeListCreativeInfo;
}

export interface SmartPlusAdUpdateResponseCreativeListCreativeInfo {
  readonly ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  readonly material_name?: string;
  readonly video_info?: SmartPlusAdUpdateResponseCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusAdUpdateResponseCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusAdUpdateResponseCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusAdUpdateResponseCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusAdUpdateResponseCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusAdUpdateResponseCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusAdUpdateResponseCustomProductPageList {
  readonly custom_product_page_url?: string;
}

export interface SmartPlusAdUpdateResponseDeeplinkList {
  readonly deeplink?: string;
  readonly deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}

export interface SmartPlusAdUpdateResponseDisclaimer {
  readonly disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  readonly disclaimer_text?: SmartPlusAdUpdateResponseDisclaimerDisclaimerText;
  readonly disclaimer_clickable_texts?: ReadonlyArray<SmartPlusAdUpdateResponseDisclaimerDisclaimerClickableTexts>;
}

export interface SmartPlusAdUpdateResponseDisclaimerDisclaimerClickableTexts {
  readonly text?: string;
  readonly url?: string;
}

export interface SmartPlusAdUpdateResponseDisclaimerDisclaimerText {
  readonly text?: string;
}

export interface SmartPlusAdUpdateResponseInteractiveAddOnList {
  readonly card_id?: string;
}

export interface SmartPlusAdUpdateResponseLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusAdUpdateResponsePageList {
  readonly page_id?: string;
}

export interface SmartPlusAdUpdateResponsePlayableList {
  readonly playable_url?: string;
}

export interface SmartPlusCampaignCopyTaskCheckParams {
  readonly advertiser_id: string;
  readonly task_id: string;
}

export interface SmartPlusCampaignCopyTaskCheckResponse {
  readonly task_status?: "RUNNING" | "SUCCESS" | "FAILURE";
  readonly task_info?: SmartPlusCampaignCopyTaskCheckResponseTaskInfo;
  readonly task_result?: SmartPlusCampaignCopyTaskCheckResponseTaskResult;
}

export interface SmartPlusCampaignCopyTaskCheckResponseTaskInfo {
  readonly total_ad_count?: number;
  readonly success_ad_count?: number;
}

export interface SmartPlusCampaignCopyTaskCheckResponseTaskResult {
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly campaign_error_infos?: ReadonlyArray<string>;
  readonly adgroup_result_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCheckResponseTaskResultAdgroupResultList>;
}

export interface SmartPlusCampaignCopyTaskCheckResponseTaskResultAdgroupResultList {
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly total_ad_count?: number;
  readonly success_ad_count?: number;
  readonly adgroup_error_list?: ReadonlyArray<string>;
  readonly ad_status?: "ALL_SUCCESS" | "PARTIAL_SUCCESS";
  readonly ad_result_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCheckResponseTaskResultAdgroupResultListAdResultList>;
}

export interface SmartPlusCampaignCopyTaskCheckResponseTaskResultAdgroupResultListAdResultList {
  readonly is_success?: boolean;
  readonly smart_plus_ad_id?: string;
  readonly ad_name?: string;
  readonly ad_error_list?: ReadonlyArray<string>;
}

export interface SmartPlusCampaignCopyTaskCreateParams {
  readonly advertiser_id: string;
  readonly request_id: string;
  readonly campaign_id: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly campaign_name?: string;
  readonly budget?: number;
  readonly schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  readonly schedule_start_time?: string;
  readonly schedule_end_time?: string;
  readonly dayparting?: string;
  readonly deep_copy_mode?: "DEFAULT" | "CUSTOM";
  readonly adgroup_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupList>;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupList {
  readonly adgroup_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly adgroup_name?: string;
  readonly budget?: number;
  readonly min_budget?: number;
  readonly targeting_spec?: SmartPlusCampaignCopyTaskCreateParamsAdgroupListTargetingSpec;
  readonly ad_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdList>;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdList {
  readonly smart_plus_ad_id?: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly ad_name?: string;
  readonly creative_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeList>;
  readonly ad_text_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdTextList>;
  readonly call_to_action_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCallToActionList>;
  readonly landing_page_url_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListLandingPageUrlList>;
  readonly ad_configuration?: SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdConfiguration;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdConfiguration {
  readonly utm_params?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdConfigurationUtmParams>;
  readonly call_to_action_id?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdConfigurationUtmParams {
  readonly key?: string;
  readonly value?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListAdTextList {
  readonly ad_text?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCallToActionList {
  readonly call_to_action?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeList {
  readonly creative_info?: SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfo;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfo {
  readonly ad_format?: string;
  readonly video_info?: SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoVideoInfo;
  readonly image_info?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoImageInfo>;
  readonly music_info?: SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoMusicInfo;
  readonly aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  readonly tiktok_item_id?: string;
  readonly identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  readonly identity_id?: string;
  readonly identity_authorized_bc_id?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoImageInfo {
  readonly web_uri?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListCreativeListCreativeInfoVideoInfo {
  readonly video_id?: string;
  readonly file_name?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListAdListLandingPageUrlList {
  readonly landing_page_url?: string;
}

export interface SmartPlusCampaignCopyTaskCreateParamsAdgroupListTargetingSpec {
  readonly location_ids?: ReadonlyArray<string>;
  readonly zipcode_ids?: ReadonlyArray<string>;
  readonly excluded_audience_ids?: ReadonlyArray<string>;
  readonly audience_ids?: ReadonlyArray<string>;
  readonly saved_audience_id?: string;
}

export interface SmartPlusCampaignCopyTaskCreateResponse {
  readonly task_id?: string;
  readonly adgroup_error_list?: ReadonlyArray<SmartPlusCampaignCopyTaskCreateResponseAdgroupErrorList>;
}

export interface SmartPlusCampaignCopyTaskCreateResponseAdgroupErrorList {
  readonly adgroup_id?: string;
  readonly error_message?: string;
}

export interface SmartPlusCampaignCreateParams {
  readonly advertiser_id: string;
  readonly request_id: string;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly objective_type: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  readonly sales_destination?: "WEBSITE" | "APP";
  readonly catalog_enabled?: boolean;
  readonly catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  readonly is_promotional_campaign?: boolean;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly disable_skan_campaign?: boolean;
  readonly campaign_name: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  readonly po_number?: string;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
}

export interface SmartPlusCampaignCreateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly catalog_enabled?: boolean;
  readonly catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly po_number?: string;
  readonly is_promotional_campaign?: boolean;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
}

export interface SmartPlusCampaignGetParams {
  readonly advertiser_id: string;
  readonly fields?: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
  readonly filtering?: SmartPlusCampaignGetParamsFiltering;
}

export interface SmartPlusCampaignGetParamsFiltering {
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_name?: string;
  readonly primary_status?: string;
  readonly secondary_status?: string;
  readonly objective_type?: string;
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly creation_filter_start_time?: string;
  readonly creation_filter_end_time?: string;
}

export interface SmartPlusCampaignGetResponse {
  readonly list?: ReadonlyArray<SmartPlusCampaignGetResponseList>;
  readonly page_info?: SmartPlusCampaignGetResponsePageInfo;
}

export interface SmartPlusCampaignGetResponseList {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly catalog_enabled?: boolean;
  readonly catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly po_number?: string;
  readonly is_promotional_campaign?: boolean;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
}

export interface SmartPlusCampaignGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface SmartPlusCampaignStatusUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_ids: ReadonlyArray<string>;
  readonly operation_status: "DELETE" | "ENABLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
}

export interface SmartPlusCampaignStatusUpdateResponse {
  readonly campaign_list?: ReadonlyArray<SmartPlusCampaignStatusUpdateResponseCampaignList>;
  readonly error_list?: ReadonlyArray<SmartPlusCampaignStatusUpdateResponseErrorList>;
}

export interface SmartPlusCampaignStatusUpdateResponseCampaignList {
  readonly campaign_id?: string;
  readonly status?: "DISABLE" | "ENABLE" | "DELETE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}

export interface SmartPlusCampaignStatusUpdateResponseErrorList {
  readonly campaign_id?: string;
  readonly error_message?: string;
}

export interface SmartPlusCampaignUpdateParams {
  readonly advertiser_id: string;
  readonly campaign_id: string;
  readonly campaign_name?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly po_number?: string;
}

export interface SmartPlusCampaignUpdateResponse {
  readonly advertiser_id?: string;
  readonly campaign_id?: string;
  readonly create_time?: string;
  readonly modify_time?: string;
  readonly objective_type?: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  readonly sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  readonly campaign_type?: string;
  readonly app_id?: string;
  readonly gaming_ad_compliance_agreement?: "ON" | "OFF";
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly catalog_enabled?: boolean;
  readonly catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  readonly campaign_name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly budget_optimize_on?: boolean;
  readonly budget_mode?: string;
  readonly budget_auto_adjust_strategy?: string;
  readonly budget?: number;
  readonly current_budget?: number;
  readonly operation_status?: "ENABLE" | "DISABLE";
  readonly secondary_status?: string;
  readonly smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  readonly postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  readonly po_number?: string;
  readonly is_promotional_campaign?: boolean;
  readonly rta_id?: string;
  readonly rta_bid_enabled?: boolean;
  readonly rta_product_selection_enabled?: boolean;
}

export interface SmartPlusMaterialReviewInfoParams {
  readonly advertiser_id: string;
  readonly ad_material_ids: ReadonlyArray<string>;
  readonly lang?: string;
  readonly extra_info_setting?: SmartPlusMaterialReviewInfoParamsExtraInfoSetting;
}

export interface SmartPlusMaterialReviewInfoParamsExtraInfoSetting {
  readonly include_reject_info?: boolean;
  readonly include_violation_frame?: boolean;
}

export interface SmartPlusMaterialReviewInfoResponse {
  readonly material_review_infos?: ReadonlyArray<SmartPlusMaterialReviewInfoResponseMaterialReviewInfos>;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfos {
  readonly ad_material_id?: string;
  readonly smart_plus_ad_id?: string;
  readonly passed_locations?: ReadonlyArray<string>;
  readonly review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  readonly reject_info?: ReadonlyArray<SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfo>;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfo {
  readonly reasons?: ReadonlyArray<string>;
  readonly suggestion?: string;
  readonly forbidden_ages?: ReadonlyArray<string>;
  readonly forbidden_locations?: ReadonlyArray<string>;
  readonly forbidden_placements?: ReadonlyArray<string>;
  readonly content_info?: SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfo;
  readonly violation_frames?: ReadonlyArray<SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoViolationFrames>;
  readonly specification?: string;
  readonly video_violation_frames?: ReadonlyArray<SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoVideoViolationFrames>;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfo {
  readonly content_type?: string;
  readonly text_content?: string;
  readonly image_content?: SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoImageContent;
  readonly video_content?: SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoVideoContent;
  readonly carousel_music_info?: SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoCarouselMusicInfo;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoCarouselMusicInfo {
  readonly music_id?: string;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoImageContent {
  readonly image_id?: string;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoContentInfoVideoContent {
  readonly video_id?: string;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoVideoViolationFrames {
  readonly web_url?: string;
  readonly hover_periods?: ReadonlyArray<string>;
  readonly thumbnail_periods?: ReadonlyArray<string>;
}

export interface SmartPlusMaterialReviewInfoResponseMaterialReviewInfosRejectInfoViolationFrames {
  readonly type?: string;
  readonly video_id?: string;
  readonly web_url_list?: ReadonlyArray<string>;
  readonly violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}

export interface SparkAdRecommendParams {
  readonly tcm_account_id: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly exclude_video_ids?: ReadonlyArray<string>;
  readonly time?: "PAST_ONE_MONTH" | "PAST_THREE_MONTHS" | "PAST_SIX_MONTHS";
  readonly objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
}

export interface SparkAdRecommendResponse {
  readonly videos?: SparkAdRecommendResponseVideos;
}

export interface SparkAdRecommendResponseVideos {
  readonly recommendation_level?: "HIGH" | "MEDIUM" | "LOW";
  readonly item_id?: string;
  readonly creator_handle?: string;
  readonly embed_url?: string;
  readonly thumbnail_url?: string;
  readonly create_time?: string;
}

export interface SplitTestCreateParams {
  readonly advertiser_id: string;
  readonly split_test_level?: "ADGROUP" | "CAMPAIGN";
  readonly object_ids?: ReadonlyArray<string>;
  readonly cells?: ReadonlyArray<SplitTestCreateParamsCells>;
  readonly test_variable?: "BIDDING_OPTIMIZATION" | "TARGTING" | "CREATIVE" | "CUSTOM";
  readonly key_metric?: "UNSET" | "CONVERT_RATE" | "CLICK_THROUGH_RATE" | "COST_PER_SHOW" | "COST_PER_CONVERT" | "COST_PER_REACH" | "COST_PER_CLICK" | "COST_PER_FOCUSED_VIEW" | "FOCUSED_VIEW_RATE" | "COMPLETE_PAYMENT_ROAS" | "COST_PER_LANDING_PAGE_VIEW" | "LANDING_PAGE_VIEW_RATE" | "CLICK" | "REACH" | "SHOW" | "CONVERT" | "COST";
  readonly budget?: number;
  readonly start_time: string;
  readonly end_time: string;
}

export interface SplitTestCreateParamsCells {
  readonly object_ids?: ReadonlyArray<string>;
}

export interface SplitTestCreateResponse {
  readonly split_test_group_id?: string;
}

export interface SplitTestEndParams {
  readonly advertiser_id: string;
  readonly split_test_group_id: string;
}

export interface SplitTestEndResponse {

}

export interface SplitTestPromoteParams {
  readonly advertiser_id: string;
  readonly split_test_group_id: string;
  readonly winning_object_id: string;
}

export interface SplitTestPromoteResponse {

}

export interface SplitTestResultGetParams {
  readonly advertiser_id: string;
  readonly split_test_group_id: string;
}

export interface SplitTestResultGetResponse {
  readonly split_test_status?: "UNKNOWN" | "NOT_STARTED" | "IN_PROGRESS" | "REPORTING_GENERATING" | "COMPLETED" | "CANCELLED";
  readonly split_test_level?: "ADGROUP" | "CAMPAIGN";
  readonly object_info?: ReadonlyArray<SplitTestResultGetResponseObjectInfo>;
  readonly cells?: ReadonlyArray<SplitTestResultGetResponseCells>;
  readonly test_variable?: "BIDDING_OPTIMIZATION" | "TARGTING" | "CREATIVE" | "CUSTOM";
  readonly key_metric?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly p_value_info?: ReadonlyArray<SplitTestResultGetResponsePValueInfo>;
}

export interface SplitTestResultGetResponseCells {
  readonly object_ids?: ReadonlyArray<string>;
}

export interface SplitTestResultGetResponseObjectInfo {
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly optimization_goal?: string;
}

export interface SplitTestResultGetResponsePValueInfo {
  readonly metric?: string;
  readonly p_value?: number;
}

export interface SplitTestUpdateParams {
  readonly advertiser_id: string;
  readonly split_test_group_id: string;
  readonly start_time: string;
  readonly end_time: string;
}

export interface SplitTestUpdateResponse {

}

export interface StoreListParams {
  readonly advertiser_id: string;
  readonly store_id?: string;
  readonly store_type?: string;
}

export interface StoreListResponse {
  readonly stores?: ReadonlyArray<StoreListResponseStores>;
}

export interface StoreListResponseStores {
  readonly store_authorized_bc_id?: string;
  readonly store_id?: string;
  readonly store_type?: string;
  readonly store_name?: string;
  readonly store_code?: string;
  readonly catalog_id?: string;
  readonly targeting_region_codes?: ReadonlyArray<string>;
}

export interface StoreProductGetParams {
  readonly bc_id: string;
  readonly store_id: string;
  readonly filtering?: StoreProductGetParamsFiltering;
  readonly advertiser_id?: string;
  readonly sort_field?: string;
  readonly sort_type?: "ASC" | "DESC";
  readonly page?: number;
  readonly page_size?: number;
}

export interface StoreProductGetParamsFiltering {
  readonly item_group_ids?: ReadonlyArray<string>;
  readonly ad_creation_eligible?: "CUSTOM_SHOP_ADS" | "GMV_MAX";
  readonly product_name?: string;
}

export interface StoreProductGetResponse {
  readonly store_products?: ReadonlyArray<StoreProductGetResponseStoreProducts>;
  readonly page_info?: StoreProductGetResponsePageInfo;
}

export interface StoreProductGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface StoreProductGetResponseStoreProducts {
  readonly store_id?: string;
  readonly item_group_id?: string;
  readonly catalog_id?: string;
  readonly title?: string;
  readonly product_image_url?: string;
  readonly min_price?: string;
  readonly max_price?: string;
  readonly currency?: string;
  readonly historical_sales?: number;
  readonly category?: string;
  readonly quantity?: number;
  readonly status?: "AVAILABLE" | "NOT_AVAILABLE";
  readonly gmv_max_ads_status?: "OCCUPIED" | "UNOCCUPIED" | "AVAILABLE";
  readonly is_running_custom_shop_ads?: boolean;
}

export interface SubscriptionGetParams {
  readonly app_id: string;
  readonly secret: string;
  readonly subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  readonly page?: number;
  readonly page_size?: number;
}

export interface SubscriptionGetResponse {
  readonly subscriptions?: ReadonlyArray<SubscriptionGetResponseSubscriptions>;
  readonly page_info?: SubscriptionGetResponsePageInfo;
}

export interface SubscriptionGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface SubscriptionGetResponseSubscriptions {
  readonly app_id?: string;
  readonly subscription_id?: string;
  readonly subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  readonly callback_url?: string;
  readonly subscription_detail?: SubscriptionGetResponseSubscriptionsSubscriptionDetail;
}

export interface SubscriptionGetResponseSubscriptionsSubscriptionDetail {
  readonly product_filters?: ReadonlyArray<"BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API">;
  readonly bc_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly notify_frequency?: string;
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly advertiser_id?: string;
  readonly page_id?: string;
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly tto_tcm_account_id?: string;
}

export interface SubscriptionSubscribeParams {
  readonly app_id: string;
  readonly secret: string;
  readonly subscribe_entity: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  readonly callback_url: string;
  readonly subscription_detail: SubscriptionSubscribeParamsSubscriptionDetail;
}

export interface SubscriptionSubscribeParamsSubscriptionDetail {
  readonly access_token: string;
  readonly product_filters?: ReadonlyArray<"BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API">;
  readonly lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  readonly bc_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly notify_frequency?: string;
  readonly advertiser_id?: string;
  readonly library_id?: string;
  readonly page_id?: string;
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly tto_tcm_account_id?: string;
}

export interface SubscriptionSubscribeResponse {
  readonly subscription_id?: string;
}

export interface SubscriptionUnsubscribeParams {
  readonly app_id: string;
  readonly secret: string;
  readonly subscription_id: string;
}

export interface SubscriptionUnsubscribeResponse {
  readonly subscription_id?: string;
}

export interface TargetingSearchParams {
  readonly advertiser_id: string;
  readonly targeting_type: string;
  readonly sub_targeting_types?: ReadonlyArray<"GENERAL_INTEREST" | "ADDITIONAL_INTEREST" | "PURCHASE_INTENTION" | "VIDEO_INTERACTION" | "CREATOR_INTERACTION" | "HASHTAG_INTERACTION">;
  readonly search_keywords?: ReadonlyArray<string>;
  readonly language?: string;
  readonly filtering?: TargetingSearchParamsFiltering;
}

export interface TargetingSearchParamsFiltering {
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
}

export interface TargetingSearchResponse {
  readonly general_interest?: TargetingSearchResponseGeneralInterest;
  readonly additional_interest?: TargetingSearchResponseAdditionalInterest;
  readonly purchase_intention?: TargetingSearchResponsePurchaseIntention;
  readonly video_interaction?: TargetingSearchResponseVideoInteraction;
  readonly creator_interaction?: TargetingSearchResponseCreatorInteraction;
  readonly hashtag_interaction?: TargetingSearchResponseHashtagInteraction;
}

export interface TargetingSearchResponseAdditionalInterest {
  readonly search_result?: string;
}

export interface TargetingSearchResponseCreatorInteraction {
  readonly list_result?: ReadonlyArray<TargetingSearchResponseCreatorInteractionListResult>;
  readonly search_result?: string;
}

export interface TargetingSearchResponseCreatorInteractionListResult {
  readonly sub_targeting_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly supported_special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly level?: number;
  readonly children_ids?: ReadonlyArray<string>;
  readonly hashtag_type?: string;
}

export interface TargetingSearchResponseGeneralInterest {
  readonly list_result?: ReadonlyArray<TargetingSearchResponseGeneralInterestListResult>;
  readonly search_result?: string;
}

export interface TargetingSearchResponseGeneralInterestListResult {
  readonly sub_targeting_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly supported_special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly level?: number;
  readonly children_ids?: ReadonlyArray<string>;
  readonly hashtag_type?: string;
}

export interface TargetingSearchResponseHashtagInteraction {
  readonly list_result?: ReadonlyArray<TargetingSearchResponseHashtagInteractionListResult>;
  readonly search_result?: string;
}

export interface TargetingSearchResponseHashtagInteractionListResult {
  readonly sub_targeting_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly supported_special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly level?: number;
  readonly children_ids?: ReadonlyArray<string>;
  readonly hashtag_type?: string;
}

export interface TargetingSearchResponsePurchaseIntention {
  readonly list_result?: ReadonlyArray<TargetingSearchResponsePurchaseIntentionListResult>;
  readonly search_result?: string;
}

export interface TargetingSearchResponsePurchaseIntentionListResult {
  readonly sub_targeting_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly supported_special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly level?: number;
  readonly children_ids?: ReadonlyArray<string>;
  readonly hashtag_type?: string;
}

export interface TargetingSearchResponseVideoInteraction {
  readonly list_result?: ReadonlyArray<TargetingSearchResponseVideoInteractionListResult>;
  readonly search_result?: string;
}

export interface TargetingSearchResponseVideoInteractionListResult {
  readonly sub_targeting_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly supported_special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly level?: number;
  readonly children_ids?: ReadonlyArray<string>;
  readonly hashtag_type?: string;
}

export interface TcmTtVideoApplyParams {
  readonly video_id: string;
  readonly tcm_account_id: string;
  readonly authorization_days?: number;
  readonly action?: string;
}

export interface TcmTtVideoApplyResponse {

}

export interface TcmTtVideoStatusParams {
  readonly video_id: string;
  readonly tcm_account_id: string;
}

export interface TcmTtVideoStatusResponse {
  readonly video_id?: string;
  readonly auth_status?: "WAITING" | "REJECTED" | "ACCEPTED";
  readonly auth_status_updated_time?: string;
  readonly num_remaining_request?: number;
  readonly requested_authorization_days?: number;
  readonly auth_code?: string;
  readonly auth_code_start_time?: string;
  readonly auth_code_end_time?: string;
  readonly auth_code_status?: "NOT_USED" | "IN_USE" | "EXPIRED" | "DELETED";
}

export interface TermCheckParams {
  readonly advertiser_id: string;
  readonly term_type: string;
}

export interface TermCheckResponse {
  readonly confirmed?: boolean;
}

export interface TermConfirmParams {
  readonly advertiser_id: string;
  readonly term_type: string;
}

export interface TermConfirmResponse {

}

export interface TermGetParams {
  readonly advertiser_id: string;
  readonly lang?: "EN" | "JA" | "ZH";
  readonly term_type: string;
}

export interface TermGetResponse {
  readonly terms?: ReadonlyArray<string>;
}

export interface TiktokInventoryFiltersGetParams {
  readonly advertiser_id: string;
}

export interface TiktokInventoryFiltersGetResponse {
  readonly cover_all_ad_objectives?: boolean;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
}

export interface TiktokInventoryFiltersUpdateParams {
  readonly advertiser_id: string;
  readonly cover_all_ad_objectives: boolean;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
}

export interface TiktokInventoryFiltersUpdateResponse {
  readonly cover_all_ad_objectives?: boolean;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  readonly category_exclusion_ids?: ReadonlyArray<string>;
  readonly vertical_sensitivity_id?: string;
}

export interface ToolActionCategoryParams {
  readonly advertiser_id: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly language?: string;
}

export interface ToolActionCategoryResponse {
  readonly action_categories?: ReadonlyArray<ToolActionCategoryResponseActionCategories>;
}

export interface ToolActionCategoryResponseActionCategories {
  readonly description?: string;
  readonly action_category_id?: string;
  readonly level?: number;
  readonly sub_category_ids?: ReadonlyArray<string>;
  readonly name?: string;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly action_scene?: "CREATOR_RELATED" | "VIDEO_RELATED";
}

export interface ToolAvailableAttributionSourceParams {
  readonly advertiser_id: string;
  readonly app_id: string;
  readonly optimization_event?: string;
  readonly campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
}

export interface ToolAvailableAttributionSourceResponse {
  readonly connected_data_source?: ReadonlyArray<"MMP" | "EVENT_SDK" | "EVENT_API">;
  readonly available_attribution_source_list?: ReadonlyArray<ToolAvailableAttributionSourceResponseAvailableAttributionSourceList>;
}

export interface ToolAvailableAttributionSourceResponseAvailableAttributionSourceList {
  readonly available_attribution_source?: "MMP" | "SAN";
  readonly available_data_source?: ReadonlyArray<"MMP" | "EVENT_SDK" | "EVENT_API">;
}

export interface ToolBidRecommendParams {
  readonly advertiser_id: string;
  readonly campaign_id?: string;
  readonly objective_type: string;
  readonly location_ids: ReadonlyArray<string>;
  readonly external_action?: string;
}

export interface ToolBidRecommendResponse {
  readonly bid?: number;
}

export interface ToolBrandSafetyPartnerAuthorizeStatusParams {
  readonly advertiser_id: string;
  readonly partner: string;
}

export interface ToolBrandSafetyPartnerAuthorizeStatusResponse {
  readonly status?: "OK" | "NOT_FOUND";
}

export interface ToolCarrierParams {
  readonly advertiser_id: string;
}

export interface ToolCarrierResponse {
  readonly countries?: ReadonlyArray<ToolCarrierResponseCountries>;
}

export interface ToolCarrierResponseCountries {
  readonly country_code?: string;
  readonly carriers?: ReadonlyArray<ToolCarrierResponseCountriesCarriers>;
}

export interface ToolCarrierResponseCountriesCarriers {
  readonly carrier_id?: string;
  readonly in_use?: boolean;
  readonly name?: string;
  readonly value?: ReadonlyArray<ToolCarrierResponseCountriesCarriersValue>;
}

export interface ToolCarrierResponseCountriesCarriersValue {
  readonly hni_id?: number;
  readonly in_use?: boolean;
}

export interface ToolContentExclusionGetParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
}

export interface ToolContentExclusionGetResponse {
  readonly excluded_category_list?: ReadonlyArray<ToolContentExclusionGetResponseExcludedCategoryList>;
  readonly vertical_sensitivity_list?: ReadonlyArray<ToolContentExclusionGetResponseVerticalSensitivityList>;
}

export interface ToolContentExclusionGetResponseExcludedCategoryList {
  readonly category_id?: string;
  readonly category_name?: string;
  readonly supported_regions?: ReadonlyArray<string>;
  readonly description?: string;
  readonly category_type?: string;
}

export interface ToolContentExclusionGetResponseVerticalSensitivityList {
  readonly category_id?: string;
  readonly category_name?: string;
  readonly supported_regions?: ReadonlyArray<string>;
  readonly description?: string;
  readonly category_type?: string;
}

export interface ToolContentExclusionInfoParams {
  readonly advertiser_id: string;
  readonly category_ids: ReadonlyArray<string>;
}

export interface ToolContentExclusionInfoResponse {
  readonly content_exclusion_list?: ReadonlyArray<ToolContentExclusionInfoResponseContentExclusionList>;
}

export interface ToolContentExclusionInfoResponseContentExclusionList {
  readonly category_id?: string;
  readonly category_name?: string;
  readonly supported_regions?: ReadonlyArray<string>;
  readonly description?: string;
  readonly category_type?: "CATEGORY_TYPE_EXCLUSION" | "CATEGORY_TYPE_VERTICAL";
}

export interface ToolContextualTagGetParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly region_codes?: ReadonlyArray<string>;
  readonly brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
}

export interface ToolContextualTagGetResponse {
  readonly contextual_tag_list?: ReadonlyArray<ToolContextualTagGetResponseContextualTagList>;
}

export interface ToolContextualTagGetResponseContextualTagList {
  readonly contextual_tag_id?: string;
  readonly name?: string;
  readonly type?: "GENERAL" | "PREMIUM";
  readonly content_lineup_type?: "MAX_PULSE" | "CUSTOM" | "CATEGORY" | "SEASONAL" | "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "GB" | "IT" | "MX" | "SA" | "TR" | "US";
  readonly status?: "ONLINE" | "OFFLINE";
  readonly description?: string;
  readonly objective_types?: ReadonlyArray<string>;
  readonly region_codes?: ReadonlyArray<string>;
}

export interface ToolContextualTagInfoParams {
  readonly advertiser_id: string;
  readonly contextual_tag_ids: ReadonlyArray<string>;
}

export interface ToolContextualTagInfoResponse {
  readonly contextual_tag_list?: ReadonlyArray<ToolContextualTagInfoResponseContextualTagList>;
}

export interface ToolContextualTagInfoResponseContextualTagList {
  readonly contextual_tag_id?: string;
  readonly name?: string;
  readonly type?: "GENERAL" | "PREMIUM";
  readonly content_lineup_type?: "MAX_PULSE" | "CUSTOM" | "CATEGORY" | "SEASONAL" | "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "GB" | "IT" | "MX" | "SA" | "TR" | "US";
  readonly status?: "ONLINE" | "OFFLINE";
  readonly description?: string;
  readonly objective_types?: ReadonlyArray<string>;
  readonly region_codes?: ReadonlyArray<string>;
}

export interface ToolDeviceModelParams {
  readonly advertiser_id: string;
}

export interface ToolDeviceModelResponse {

}

export interface ToolDiagnosisGetParams {
  readonly advertiser_id: string;
  readonly filtering?: ToolDiagnosisGetParamsFiltering;
}

export interface ToolDiagnosisGetParamsFiltering {
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly issue_category?: ReadonlyArray<string>;
}

export interface ToolDiagnosisGetResponse {
  readonly results?: ReadonlyArray<ToolDiagnosisGetResponseResults>;
}

export interface ToolDiagnosisGetResponseResults {
  readonly adgroup_id?: string;
  readonly adgroup_name?: string;
  readonly diagnosis?: ToolDiagnosisGetResponseResultsDiagnosis;
}

export interface ToolDiagnosisGetResponseResultsDiagnosis {
  readonly diagnosis_time?: string;
  readonly suggestions?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestions>;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestions {
  readonly creative?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestionsCreative>;
  readonly bid_and_budget?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudget>;
  readonly event_track?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestionsEventTrack>;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudget {
  readonly suggestion_time?: string;
  readonly suggestion_id?: string;
  readonly issue_suggestion?: "SUGGEST_BID" | "SUGGEST_BUDGET" | "NOBID_SWITCH" | "BUDGET_EDR" | "BID_EDR";
  readonly bid?: number;
  readonly budget?: number;
  readonly suggest_bid?: number;
  readonly suggest_budget?: number;
  readonly cost_floor?: number;
  readonly bid_edr_info?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudgetBidEdrInfo>;
  readonly budget_edr_info?: ReadonlyArray<ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudgetBudgetEdrInfo>;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudgetBidEdrInfo {
  readonly recommended_bid?: number;
  readonly bid_increase_ratio?: number;
  readonly estimated_cost?: number;
  readonly cost_uplift?: number;
  readonly cost_uplift_ratio?: number;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestionsBidAndBudgetBudgetEdrInfo {
  readonly recommended_budget?: number;
  readonly budget_increase_ratio?: number;
  readonly estimated_conversion?: number;
  readonly conversion_uplift?: number;
  readonly conversion_uplift_ratio?: number;
  readonly cpa?: number;
  readonly cpa_uplift?: number;
  readonly cpa_uplift_ratio?: number;
  readonly impression?: number;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestionsCreative {
  readonly suggestion_time?: string;
  readonly vid?: string;
  readonly name?: string;
  readonly ad_id?: string;
  readonly issue_suggestion?: "NOBGM" | "VIDEO_LENGTH" | "VIDEO_RESOLUTION";
  readonly suggestion_id?: string;
}

export interface ToolDiagnosisGetResponseResultsDiagnosisSuggestionsEventTrack {
  readonly suggestion_time?: string;
  readonly suggestion_id?: string;
  readonly issue_suggestion?: string;
  readonly pixel_id?: string;
  readonly pixel_code?: string;
}

export interface ToolDiagnosisSearchHealthParams {
  readonly advertiser_id: string;
  readonly adgroup_id?: string;
  readonly ad_ids?: ReadonlyArray<string>;
}

export interface ToolDiagnosisSearchHealthResponse {
  readonly search_health_status?: "GOOD" | "NEED_IMPROVEMENT" | "NO_DATA";
  readonly search_volume?: ToolDiagnosisSearchHealthResponseSearchVolume;
  readonly total_keyword_count?: number;
  readonly total_relevant_keyword_count?: number;
  readonly keyword_relevance?: ReadonlyArray<ToolDiagnosisSearchHealthResponseKeywordRelevance>;
  readonly bid_budget?: ToolDiagnosisSearchHealthResponseBidBudget;
}

export interface ToolDiagnosisSearchHealthResponseBidBudget {
  readonly bid_budget_status?: "GOOD" | "LOW_BID_AND_BUDGET" | "LOW_BUDGET" | "LOW_BID" | "NO_DATA";
  readonly bid_suggestion_status?: "GOOD" | "LOW" | "NO_DATA";
  readonly suggested_value?: string;
}

export interface ToolDiagnosisSearchHealthResponseKeywordRelevance {
  readonly adgroup_id?: string;
  readonly ad_id?: string;
  readonly keyword_relevance_status?: "TO_BE_CALCULATED" | "PARTIALLY_RELEVANT" | "RELEVANT" | "IRRELEVANT";
  readonly relevant_keyword_count?: number;
  readonly relevant_keywords?: ReadonlyArray<string>;
  readonly irrelevant_keyword_count?: number;
  readonly irrelevant_keywords?: ReadonlyArray<string>;
}

export interface ToolDiagnosisSearchHealthResponseSearchVolume {
  readonly diagnosis_result?: "HIGH" | "MEDIUM" | "LOW" | "INVALID";
  readonly total_monthly_searches?: number;
}

export interface ToolHashtagGetParams {
  readonly advertiser_id: string;
  readonly keyword_ids: ReadonlyArray<string>;
}

export interface ToolHashtagGetResponse {
  readonly keywords_status?: ReadonlyArray<ToolHashtagGetResponseKeywordsStatus>;
}

export interface ToolHashtagGetResponseKeywordsStatus {
  readonly keyword?: string;
  readonly keyword_id?: string;
  readonly keyword_status?: "ONLINE" | "OFFLINE";
}

export interface ToolHashtagRecommendParams {
  readonly advertiser_id: string;
  readonly keywords: ReadonlyArray<string>;
  readonly operator?: "AND" | "OR";
}

export interface ToolHashtagRecommendResponse {
  readonly recommend_keywords?: ReadonlyArray<ToolHashtagRecommendResponseRecommendKeywords>;
}

export interface ToolHashtagRecommendResponseRecommendKeywords {
  readonly input_keyword?: string;
  readonly keyword?: string;
  readonly keyword_id?: string;
  readonly keyword_status?: "ONLINE" | "OFFLINE";
}

export interface ToolInterestCategoryParams {
  readonly advertiser_id: string;
  readonly version?: number;
  readonly language?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
}

export interface ToolInterestCategoryResponse {
  readonly interest_categories?: ReadonlyArray<ToolInterestCategoryResponseInterestCategories>;
}

export interface ToolInterestCategoryResponseInterestCategories {
  readonly interest_category_id?: string;
  readonly interest_category_name?: string;
  readonly level?: number;
  readonly sub_category_ids?: ReadonlyArray<string>;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
  readonly placements?: ReadonlyArray<string>;
}

export interface ToolInterestKeywordGetParams {
  readonly advertiser_id: string;
  readonly keyword_query?: ReadonlyArray<ToolInterestKeywordGetParamsKeywordQuery>;
  readonly filtering?: ToolInterestKeywordGetParamsFiltering;
}

export interface ToolInterestKeywordGetParamsFiltering {
  readonly audience_type?: "GENERAL_INTEREST" | "PURCHASE_INTENTION";
}

export interface ToolInterestKeywordGetParamsKeywordQuery {
  readonly keyword_id: string;
  readonly language?: string;
}

export interface ToolInterestKeywordGetResponse {
  readonly keywords?: ReadonlyArray<ToolInterestKeywordGetResponseKeywords>;
}

export interface ToolInterestKeywordGetResponseKeywords {
  readonly keyword?: string;
  readonly keyword_id?: string;
  readonly status?: "EFFECTIVE" | "INEFFECTIVE";
}

export interface ToolInterestKeywordRecommendParams {
  readonly advertiser_id: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly keyword?: string;
  readonly mode?: "FUZZ_MATCH" | "SEMANTIC_RECOMMEND";
  readonly language?: string;
  readonly limit?: number;
  readonly audience_type?: "GENERAL_INTEREST" | "PURCHASE_INTENTION";
}

export interface ToolInterestKeywordRecommendResponse {
  readonly recommended_keywords?: ReadonlyArray<ToolInterestKeywordRecommendResponseRecommendedKeywords>;
}

export interface ToolInterestKeywordRecommendResponseRecommendedKeywords {
  readonly input_keyword?: string;
  readonly keyword?: string;
  readonly keyword_id?: string;
  readonly language?: string;
  readonly status?: "EFFECTIVE" | "INEFFECTIVE";
}

export interface ToolLanguageParams {
  readonly advertiser_id: string;
}

export interface ToolLanguageResponse {
  readonly languages?: ReadonlyArray<ToolLanguageResponseLanguages>;
}

export interface ToolLanguageResponseLanguages {
  readonly code?: string;
  readonly name?: string;
}

export interface ToolOpenUrlParams {
  readonly advertiser_id: string;
  readonly url: string;
  readonly url_type: "USER_PROFILE" | "VIDEO" | "HASHTAG_CHALLENGE" | "MUSIC" | "STICKER" | "STICKER_SHOOTER";
}

export interface ToolOpenUrlResponse {
  readonly open_url?: string;
  readonly supported_regions?: ReadonlyArray<string>;
}

export interface ToolOsVersionParams {
  readonly advertiser_id: string;
  readonly os_type: "ANDROID" | "IOS";
}

export interface ToolOsVersionResponse {
  readonly os_versions?: ReadonlyArray<ToolOsVersionResponseOsVersions>;
}

export interface ToolOsVersionResponseOsVersions {
  readonly os_id?: string;
  readonly os_type?: string;
  readonly version?: string;
  readonly name?: string;
}

export interface ToolPhoneRegionCodeParams {
  readonly advertiser_id: string;
}

export interface ToolPhoneRegionCodeResponse {
  readonly phone_region_code_infos?: ReadonlyArray<ToolPhoneRegionCodeResponsePhoneRegionCodeInfos>;
}

export interface ToolPhoneRegionCodeResponsePhoneRegionCodeInfos {
  readonly phone_region_name?: string;
  readonly phone_region_code?: string;
  readonly phone_region_calling_code?: string;
}

export interface ToolRegionParams {
  readonly advertiser_id: string;
  readonly placements: ReadonlyArray<string>;
  readonly objective_type: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "MINIS";
  readonly level_range?: "ALL" | "TO_COUNTRY" | "TO_PROVINCE" | "TO_CITY" | "TO_DISTRICT";
  readonly language?: string;
  readonly shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  readonly promotion_type?: string;
  readonly promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  readonly operating_system?: "ANDROID" | "IOS";
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
  readonly rf_campaign_type?: "STANDARD" | "PULSE";
}

export interface ToolRegionResponse {
  readonly region_list?: ReadonlyArray<string>;
  readonly region_info?: ReadonlyArray<ToolRegionResponseRegionInfo>;
}

export interface ToolRegionResponseRegionInfo {
  readonly location_id?: string;
  readonly name?: string;
  readonly parent_id?: string;
  readonly region_code?: string;
  readonly next_level_ids?: ReadonlyArray<string>;
  readonly area_type?: "ADMIN" | "METROPOLITAN_OR_DMA";
  readonly level?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT";
  readonly support_below_18?: boolean;
}

export interface ToolSearchKeywordKeywordIdeaParams {
  readonly advertiser_id: string;
  readonly keywords: ReadonlyArray<string>;
  readonly order_field?: "AVG_MONTHLY_SEARCHES" | "THREE_MONTH_CHANGE" | "YEAR_OVER_YEAR_CHANGE" | "COMPETITION";
  readonly order_type?: "ASC" | "DESC";
  readonly brand_type?: "BRAND" | "NON_BRAND" | "ALL";
  readonly country_codes?: ReadonlyArray<string>;
}

export interface ToolSearchKeywordKeywordIdeaResponse {
  readonly total_search_volume_lower?: number;
  readonly total_search_volume_upper?: number;
  readonly keywords?: ReadonlyArray<ToolSearchKeywordKeywordIdeaResponseKeywords>;
}

export interface ToolSearchKeywordKeywordIdeaResponseKeywords {
  readonly recommended_keyword?: string;
  readonly avg_monthly_searches_lower?: number;
  readonly avg_monthly_searches_upper?: number;
  readonly three_month_change?: number;
  readonly year_over_year_change?: number;
  readonly competition?: "HIGH" | "MEDIUM" | "LOW";
  readonly estimated_cpc_lower?: number;
  readonly estimated_cpc_upper?: number;
}

export interface ToolSearchKeywordRecommendParams {
  readonly advertiser_id: string;
  readonly search_queries?: ReadonlyArray<string>;
  readonly ad_ids?: ReadonlyArray<string>;
  readonly landing_page_urls?: ReadonlyArray<string>;
  readonly regions: ReadonlyArray<string>;
  readonly order_field?: "RELEVANCE" | "MONTHLY_SEARCHES";
  readonly order_type?: "ASC" | "DESC";
  readonly total_size?: number;
  readonly page?: number;
  readonly page_size?: number;
}

export interface ToolSearchKeywordRecommendResponse {
  readonly recommended_keywords?: ReadonlyArray<ToolSearchKeywordRecommendResponseRecommendedKeywords>;
  readonly page_info?: ToolSearchKeywordRecommendResponsePageInfo;
}

export interface ToolSearchKeywordRecommendResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface ToolSearchKeywordRecommendResponseRecommendedKeywords {
  readonly recommended_keyword?: string;
  readonly monthly_searches?: number;
}

export interface ToolTargetingCategoryRecommendParams {
  readonly advertiser_id: string;
  readonly region_codes: ReadonlyArray<string>;
  readonly app_id?: string;
}

export interface ToolTargetingCategoryRecommendResponse {
  readonly interest_categories?: ReadonlyArray<ToolTargetingCategoryRecommendResponseInterestCategories>;
  readonly action_categories?: ReadonlyArray<ToolTargetingCategoryRecommendResponseActionCategories>;
}

export interface ToolTargetingCategoryRecommendResponseActionCategories {
  readonly action_category_id?: string;
  readonly action_category_name?: string;
  readonly description?: string;
  readonly scene?: "CREATOR_RELATED" | "VIDEO_RELATED";
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
}

export interface ToolTargetingCategoryRecommendResponseInterestCategories {
  readonly interest_category_id?: string;
  readonly interest_category_name?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly special_industries?: ReadonlyArray<"HOUSING" | "EMPLOYMENT" | "CREDIT">;
}

export interface ToolTargetingInfoParams {
  readonly advertiser_id: string;
  readonly scene?: "GEO" | "ISP";
  readonly targeting_ids: ReadonlyArray<string>;
  readonly objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "LEAD_GENERATION" | "ENGAGEMENT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
  readonly promotion_type?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly operating_system?: "ANDROID" | "IOS";
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
}

export interface ToolTargetingInfoResponse {
  readonly targeting_tag_list?: ReadonlyArray<ToolTargetingInfoResponseTargetingTagList>;
  readonly parent_tags?: ReadonlyArray<ToolTargetingInfoResponseParentTags>;
}

export interface ToolTargetingInfoResponseParentTags {
  readonly targeting_type?: string;
  readonly name?: string;
  readonly status_info?: ToolTargetingInfoResponseParentTagsStatusInfo;
  readonly geo?: ToolTargetingInfoResponseParentTagsGeo;
}

export interface ToolTargetingInfoResponseParentTagsGeo {
  readonly geo_id?: string;
  readonly geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  readonly description?: string;
  readonly region_code?: string;
  readonly parent_id?: string;
}

export interface ToolTargetingInfoResponseParentTagsStatusInfo {
  readonly status?: "ENABLED" | "DISABLED";
  readonly reason?: "OFFLINE" | "NOT_SUPPORTED";
}

export interface ToolTargetingInfoResponseTargetingTagList {
  readonly targeting_type?: "GEO" | "ISP";
  readonly name?: string;
  readonly status_info?: ToolTargetingInfoResponseTargetingTagListStatusInfo;
  readonly geo?: ToolTargetingInfoResponseTargetingTagListGeo;
  readonly isp?: ToolTargetingInfoResponseTargetingTagListIsp;
}

export interface ToolTargetingInfoResponseTargetingTagListGeo {
  readonly geo_id?: string;
  readonly geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  readonly description?: string;
  readonly region_code?: string;
  readonly parent_id?: string;
}

export interface ToolTargetingInfoResponseTargetingTagListIsp {
  readonly isp_id?: string;
  readonly location_id?: string;
  readonly region_code?: string;
}

export interface ToolTargetingInfoResponseTargetingTagListStatusInfo {
  readonly status?: "ENABLED" | "DISABLED";
  readonly reason?: "OFFLINE" | "NOT_SUPPORTED";
}

export interface ToolTargetingListParams {
  readonly advertiser_id: string;
  readonly location_ids: ReadonlyArray<string>;
  readonly scene: string;
}

export interface ToolTargetingListResponse {
  readonly targeting_tag_list?: ReadonlyArray<ToolTargetingListResponseTargetingTagList>;
  readonly parent_tags?: ReadonlyArray<string>;
}

export interface ToolTargetingListResponseTargetingTagList {
  readonly targeting_type?: string;
  readonly name?: string;
  readonly status_info?: ToolTargetingListResponseTargetingTagListStatusInfo;
  readonly isp?: ToolTargetingListResponseTargetingTagListIsp;
  readonly geo?: string;
}

export interface ToolTargetingListResponseTargetingTagListIsp {
  readonly isp_id?: string;
  readonly location_id?: string;
  readonly region_code?: string;
}

export interface ToolTargetingListResponseTargetingTagListStatusInfo {
  readonly status?: "ENABLED" | "DISABLED";
  readonly reason?: "OFFLINE" | "NOT_SUPPORTED";
}

export interface ToolTargetingSearchParams {
  readonly advertiser_id: string;
  readonly objective_type: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "LEAD_GENERATION" | "ENGAGEMENT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
  readonly promotion_type?: string;
  readonly placements: ReadonlyArray<string>;
  readonly search_type: "FUZZY_SEARCH" | "BATCH_REGION_SEARCH" | "BATCH_ZIPCODE_SEARCH";
  readonly keywords: ReadonlyArray<string>;
  readonly geo_types?: ReadonlyArray<"COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE" | "FUZZY_SEARCH" | "BATCH_ZIPCODE_SEARCH" | "BATCH_REGION_SEARCH">;
  readonly region_codes?: ReadonlyArray<string>;
  readonly operating_system?: "ANDROID" | "IOS";
  readonly brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  readonly brand_safety_partner?: "IAS" | "OPEN_SLATE";
}

export interface ToolTargetingSearchResponse {
  readonly targeting_tag_list?: ReadonlyArray<ToolTargetingSearchResponseTargetingTagList>;
  readonly parent_tags?: ReadonlyArray<ToolTargetingSearchResponseParentTags>;
}

export interface ToolTargetingSearchResponseParentTags {
  readonly targeting_type?: string;
  readonly name?: string;
  readonly status_info?: ToolTargetingSearchResponseParentTagsStatusInfo;
  readonly geo?: ToolTargetingSearchResponseParentTagsGeo;
}

export interface ToolTargetingSearchResponseParentTagsGeo {
  readonly geo_id?: string;
  readonly geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  readonly description?: string;
  readonly region_code?: string;
  readonly parent_id?: string;
}

export interface ToolTargetingSearchResponseParentTagsStatusInfo {
  readonly status?: "ENABLED" | "DISABLED";
  readonly reason?: "OFFLINE" | "NOT_SUPPORTED";
}

export interface ToolTargetingSearchResponseTargetingTagList {
  readonly keyword?: string;
  readonly targeting_type?: string;
  readonly name?: string;
  readonly status_info?: ToolTargetingSearchResponseTargetingTagListStatusInfo;
  readonly geo?: ToolTargetingSearchResponseTargetingTagListGeo;
}

export interface ToolTargetingSearchResponseTargetingTagListGeo {
  readonly geo_id?: string;
  readonly geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  readonly description?: string;
  readonly region_code?: string;
  readonly parent_id?: string;
}

export interface ToolTargetingSearchResponseTargetingTagListStatusInfo {
  readonly status?: "ENABLED" | "DISABLED";
  readonly reason?: "OFFLINE" | "NOT_SUPPORTED";
}

export interface ToolTimezoneParams {
  readonly advertiser_id: string;
}

export interface ToolTimezoneResponse {
  readonly timezones?: ReadonlyArray<ToolTimezoneResponseTimezones>;
}

export interface ToolTimezoneResponseTimezones {
  readonly timezone?: string;
  readonly gmt_offset?: string;
}

export interface ToolUrlValidateParams {
  readonly advertiser_id: string;
  readonly url: string;
}

export interface ToolUrlValidateResponse {
  readonly landing_page_url_info?: ToolUrlValidateResponseLandingPageUrlInfo;
}

export interface ToolUrlValidateResponseLandingPageUrlInfo {
  readonly validate_info?: ToolUrlValidateResponseLandingPageUrlInfoValidateInfo;
}

export interface ToolUrlValidateResponseLandingPageUrlInfoValidateInfo {
  readonly is_scheme_link?: boolean;
  readonly is_valid_url?: boolean;
  readonly is_valid_scheme?: boolean;
}

export interface ToolVastOptionParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly region_codes?: ReadonlyArray<string>;
  readonly brand_safety_type?: "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
}

export interface ToolVastOptionResponse {
  readonly option_list?: ReadonlyArray<ToolVastOptionResponseOptionList>;
}

export interface ToolVastOptionResponseOptionList {
  readonly partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  readonly partner_name?: string;
  readonly vast_type?: "VIEWABILITY" | "BRAND_SAFETY";
  readonly is_require_url?: boolean;
  readonly is_available?: boolean;
  readonly unavailable_reason?: ReadonlyArray<ToolVastOptionResponseOptionListUnavailableReason>;
}

export interface ToolVastOptionResponseOptionListUnavailableReason {
  readonly reason?: string;
  readonly reason_type?: "UNSUPPORTED_PARTNER" | "UNSUPPORTED_OBJ_TYPE" | "UNSUPPORTED_COUNTRY" | "UNSUPPORTED_PREBID";
}

export interface ToolVboStatusParams {
  readonly advertiser_id: string;
  readonly objective_type: string;
  readonly app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  readonly campaign_type?: string;
  readonly is_advanced_dedicated_campaign?: boolean;
  readonly disable_skan_campaign?: boolean;
  readonly bid_align_type?: "SAN" | "SKAN";
  readonly promotion_type: string;
  readonly placements: ReadonlyArray<string>;
  readonly ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  readonly campaign_app_profile_page_state?: "ON" | "OFF";
  readonly pixel_id?: string;
  readonly app_id?: string;
  readonly optimization_event?: string;
  readonly store_id?: string;
  readonly is_smart_performance_campaign?: boolean;
  readonly campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  readonly budget_optimize_on?: boolean;
}

export interface ToolVboStatusResponse {
  readonly vo_status?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_min?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_min_roas?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_highest_value?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_iaa_min_roas?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_iaa_highest_value?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_iaa_min_roas_zero_day?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly vo_iaa_highest_value_zero_day?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly roas_status_day7?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly highest_value_status_day7?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly roas_status_day0?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  readonly highest_value_status_day0?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
}

export interface TtoCreatorAuthorizedParams {
  readonly creator_id: string;
  readonly fields?: ReadonlyArray<string>;
}

export interface TtoCreatorAuthorizedResponse {
  readonly profile_image?: string;
  readonly handle_name?: string;
  readonly display_name?: string;
  readonly bio?: string;
  readonly following_count?: number;
  readonly followers_count?: number;
  readonly likes_count?: number;
  readonly videos_count?: number;
  readonly creator_rate?: TtoCreatorAuthorizedResponseCreatorRate;
  readonly country_code?: string;
  readonly content_labels?: ReadonlyArray<TtoCreatorAuthorizedResponseContentLabels>;
  readonly industry_labels?: ReadonlyArray<TtoCreatorAuthorizedResponseIndustryLabels>;
  readonly audience_countries?: ReadonlyArray<TtoCreatorAuthorizedResponseAudienceCountries>;
  readonly audience_genders?: ReadonlyArray<TtoCreatorAuthorizedResponseAudienceGenders>;
  readonly audience_ages?: ReadonlyArray<TtoCreatorAuthorizedResponseAudienceAges>;
  readonly audience_devices?: ReadonlyArray<TtoCreatorAuthorizedResponseAudienceDevices>;
  readonly audience_usages?: ReadonlyArray<TtoCreatorAuthorizedResponseAudienceUsages>;
}

export interface TtoCreatorAuthorizedResponseAudienceAges {
  readonly age?: string;
  readonly percentage?: number;
}

export interface TtoCreatorAuthorizedResponseAudienceCountries {
  readonly country?: string;
  readonly percentage?: number;
}

export interface TtoCreatorAuthorizedResponseAudienceDevices {
  readonly device?: "APPLE" | "SAMSUNG" | "XIAOMI" | "OPPO" | "MOTOROLA" | "OTHER";
  readonly percentage?: number;
}

export interface TtoCreatorAuthorizedResponseAudienceGenders {
  readonly gender?: string;
  readonly percentage?: number;
}

export interface TtoCreatorAuthorizedResponseAudienceUsages {
  readonly usage?: string;
  readonly percentage?: number;
}

export interface TtoCreatorAuthorizedResponseContentLabels {
  readonly label_id?: number;
  readonly label_name?: string;
}

export interface TtoCreatorAuthorizedResponseCreatorRate {
  readonly rate?: number;
  readonly currency?: string;
}

export interface TtoCreatorAuthorizedResponseIndustryLabels {
  readonly label_id?: number;
  readonly label_name?: string;
}

export interface TtoCreatorAuthorizedVideoListParams {
  readonly creator_id: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: number;
}

export interface TtoCreatorAuthorizedVideoListResponse {
  readonly posts?: ReadonlyArray<TtoCreatorAuthorizedVideoListResponsePosts>;
  readonly has_more?: boolean;
  readonly cursor?: number;
}

export interface TtoCreatorAuthorizedVideoListResponsePosts {
  readonly video_id?: string;
  readonly display_name?: string;
  readonly thumbnail_url?: string;
  readonly embed_url?: string;
  readonly caption?: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly video_views?: number;
  readonly favorites?: number;
  readonly create_time?: string;
  readonly caption_hashtags?: ReadonlyArray<string>;
  readonly mentioned_accounts?: ReadonlyArray<string>;
  readonly collaboration_status?: "PAID_PARTNERSHIP" | "CREATOR_EARNS_COMMISSION" | "NONE";
}

export interface TtoCreatorCampaignJoinParams {
  readonly creator_id: string;
  readonly tto_invite_link: string;
}

export interface TtoCreatorCampaignJoinResponse {

}

export interface TtoCreatorCampaignVideoLinkParams {
  readonly creator_id: string;
  readonly tto_invite_link: string;
  readonly video_id: string;
}

export interface TtoCreatorCampaignVideoLinkResponse {

}

export interface TtoCreatorLinkRequestConfirmParams {
  readonly creator_id: string;
  readonly link_request_id: string;
  readonly action: "APPROVE" | "REJECT";
}

export interface TtoCreatorLinkRequestConfirmResponse {

}

export interface TtoCreatorLinkRequestGetParams {
  readonly creator_id: string;
  readonly tto_invite_link: string;
}

export interface TtoCreatorLinkRequestGetResponse {
  readonly campaign_id?: string;
  readonly spark_authorization_days?: number;
  readonly link_requests?: ReadonlyArray<TtoCreatorLinkRequestGetResponseLinkRequests>;
}

export interface TtoCreatorLinkRequestGetResponseLinkRequests {
  readonly video_id?: string;
  readonly link_request_id?: string;
}

export interface TtoOauth2InfoParams {
  readonly tto_tcm_account_id: string;
}

export interface TtoOauth2InfoResponse {
  readonly tto_tcm_account_id?: string;
  readonly account_name?: string;
  readonly timezone?: string;
  readonly country?: string;
  readonly business_verification_status?: "NOT_SUBMITTED" | "UNDER_REVIEW" | "NOT_PASSED" | "PASSED" | "EXPIRED";
}

export interface TtoOauth2TcmParams {
  readonly app_id: string;
  readonly secret: string;
}

export interface TtoOauth2TcmResponse {
  readonly tto_tcm_account_ids?: ReadonlyArray<string>;
}

export interface TtoTcmAnchorCreateParams {
  readonly tto_tcm_account_id: string;
  readonly anchor_type: string;
  readonly anchor_sub_type?: string;
  readonly category_label_id?: number;
  readonly country_code: string;
  readonly call_to_action: TtoTcmAnchorCreateParamsCallToAction;
  readonly anchor_title: string;
  readonly anchor_name: string;
  readonly upload_type: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL";
  readonly thumbnail_file?: unknown;
  readonly thumbnail_url?: string;
}

export interface TtoTcmAnchorCreateParamsCallToAction {
  readonly landing_page_url?: string;
}

export interface TtoTcmAnchorCreateResponse {
  readonly anchor_id?: string;
  readonly status?: string;
  readonly anchor_type?: string;
  readonly anchor_sub_type?: string;
  readonly category_label_id?: number;
  readonly country_code?: string;
  readonly call_to_action?: TtoTcmAnchorCreateResponseCallToAction;
  readonly anchor_title?: string;
  readonly anchor_name?: string;
  readonly anchor_sub_title?: string;
  readonly thumbnail_url?: string;
}

export interface TtoTcmAnchorCreateResponseCallToAction {
  readonly landing_page_url?: string;
}

export interface TtoTcmAnchorDeleteParams {
  readonly tto_tcm_account_id: string;
  readonly anchor_id: string;
}

export interface TtoTcmAnchorDeleteResponse {

}

export interface TtoTcmAnchorGetParams {
  readonly tto_tcm_account_id: string;
  readonly anchor_ids?: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmAnchorGetResponse {
  readonly anchors?: ReadonlyArray<TtoTcmAnchorGetResponseAnchors>;
  readonly page_info?: TtoTcmAnchorGetResponsePageInfo;
}

export interface TtoTcmAnchorGetResponseAnchors {
  readonly anchor_id?: string;
  readonly status?: "DRAFT" | "CREATED" | "IN_REVIEW" | "APPROVED" | "REJECTED_BY_AUDIT";
  readonly anchor_type?: string;
  readonly anchor_sub_type?: "DESTINATION" | "ECOMMERCE" | "ENTERTAINMENT";
  readonly country_code?: string;
  readonly call_to_action?: TtoTcmAnchorGetResponseAnchorsCallToAction;
  readonly anchor_title?: string;
  readonly anchor_name?: string;
  readonly anchor_sub_title?: string;
  readonly thumbnail_url?: string;
  readonly coupon_link?: TtoTcmAnchorGetResponseAnchorsCouponLink;
  readonly pixel_id?: string;
  readonly creator_preview_url?: string;
  readonly advertiser_preview_url?: string;
}

export interface TtoTcmAnchorGetResponseAnchorsCallToAction {
  readonly landing_page_url?: string;
  readonly ios_download_link?: string;
  readonly ios_deep_link?: string;
  readonly android_download_link?: string;
  readonly android_deep_link?: string;
}

export interface TtoTcmAnchorGetResponseAnchorsCouponLink {
  readonly discount?: number;
  readonly coupon_url?: string;
  readonly coupon_code?: string;
}

export interface TtoTcmAnchorGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtoTcmBrandProfileCreateParams {
  readonly tto_tcm_account_id: string;
  readonly brand_name: string;
  readonly brand_industry_id: string;
  readonly brand_website: string;
  readonly logo_url: string;
  readonly tiktok_account_url?: string;
}

export interface TtoTcmBrandProfileCreateResponse {
  readonly brand_profile_id?: string;
  readonly brand_name?: string;
  readonly brand_industry_id?: string;
  readonly brand_website?: string;
  readonly logo_url?: string;
  readonly tiktok_account_url?: string;
}

export interface TtoTcmBrandProfileGetParams {
  readonly tto_tcm_account_id: string;
  readonly brand_profile_ids?: ReadonlyArray<string>;
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmBrandProfileGetResponse {
  readonly brands?: ReadonlyArray<TtoTcmBrandProfileGetResponseBrands>;
  readonly page_info?: TtoTcmBrandProfileGetResponsePageInfo;
}

export interface TtoTcmBrandProfileGetResponseBrands {
  readonly brand_profile_id?: string;
  readonly brand_name?: string;
  readonly brand_industry?: string;
  readonly brand_website?: string;
  readonly logo_url?: string;
  readonly tiktok_account_url?: string;
}

export interface TtoTcmBrandProfileGetResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtoTcmCampaignCreateParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_type?: string;
  readonly brand_profile_id?: string;
  readonly brand_name?: string;
  readonly campaign_name: string;
  readonly campaign_description?: string;
  readonly anchor_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly default_spark_ads_requested_authorization_days?: number;
  readonly handle_names: ReadonlyArray<string>;
  readonly send_notification?: boolean;
  readonly campaign_id?: string;
  readonly business_account_handle?: string;
}

export interface TtoTcmCampaignCreateResponse {
  readonly campaign_id?: string;
  readonly brand_name?: string;
  readonly campaign_name?: string;
  readonly handle_names?: ReadonlyArray<string>;
  readonly campaign_description?: string;
  readonly anchor_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly spark_ads_requested_authorization_days?: number;
  readonly invite_link?: string;
  readonly create_time?: string;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly brand_profile_id?: string;
  readonly country_codes?: ReadonlyArray<string>;
  readonly failed_handle_names?: ReadonlyArray<string>;
  readonly dm_info?: string;
  readonly business_account_handle?: string;
  readonly dm_allowed?: boolean;
}

export interface TtoTcmCampaignLinkParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_id: string;
  readonly video_id: string;
  readonly action: "LINK" | "REVOKE";
}

export interface TtoTcmCampaignLinkResponse {
  readonly video_id?: string;
  readonly status?: "IN_REVIEW" | "REVOKE";
  readonly last_reminded_timestamp?: string;
  readonly number_of_requests?: number;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
}

export interface TtoTcmCampaignLinkStatusParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly handle_names?: ReadonlyArray<string>;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmCampaignLinkStatusResponse {
  readonly video_infos?: ReadonlyArray<TtoTcmCampaignLinkStatusResponseVideoInfos>;
  readonly page_info?: TtoTcmCampaignLinkStatusResponsePageInfo;
}

export interface TtoTcmCampaignLinkStatusResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_page?: number;
  readonly total_number?: number;
}

export interface TtoTcmCampaignLinkStatusResponseVideoInfos {
  readonly video_id?: string;
  readonly status?: "IN_REVIEW" | "APPROVE" | "REJECTED" | "REVOKE";
  readonly campaign_id?: string;
  readonly last_reminded_timestamp?: string;
  readonly number_of_requests?: number;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly link_request_id?: string;
}

export interface TtoTcmCampaignParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmCampaignResponse {
  readonly campaigns?: ReadonlyArray<TtoTcmCampaignResponseCampaigns>;
  readonly page_info?: TtoTcmCampaignResponsePageInfo;
  readonly dm_info?: string;
  readonly business_account_handle?: string;
  readonly dm_allowed?: boolean;
}

export interface TtoTcmCampaignResponseCampaigns {
  readonly campaign_id?: string;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly brand_profile_id?: string;
  readonly brand_name?: string;
  readonly campaign_name?: string;
  readonly handle_names?: ReadonlyArray<string>;
  readonly campaign_description?: string;
  readonly anchor_id?: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly spark_ads_requested_authorization_days?: number;
  readonly invite_link?: string;
  readonly create_time?: string;
  readonly country_codes?: ReadonlyArray<string>;
}

export interface TtoTcmCampaignResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtoTcmCampaignUpdateParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_id: string;
  readonly campaign_type: "CAMPAIGN" | "BRAND_LINK";
  readonly handle_names?: ReadonlyArray<string>;
  readonly send_notification?: boolean;
  readonly advertiser_ids?: ReadonlyArray<string>;
}

export interface TtoTcmCampaignUpdateResponse {
  readonly campaign_id?: string;
  readonly brand_name?: string;
  readonly campaign_name?: string;
  readonly handle_names?: ReadonlyArray<string>;
  readonly campaign_description?: string;
  readonly anchor_id?: string;
  readonly advertiser_ids?: ReadonlyArray<string>;
  readonly spark_ads_requested_authorization_days?: number;
  readonly invite_link?: string;
  readonly create_time?: string;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly brand_profile_id?: string;
  readonly country_codes?: ReadonlyArray<string>;
  readonly failed_handle_names?: ReadonlyArray<string>;
}

export interface TtoTcmCategoryLabelParams {
  readonly tto_tcm_account_id: string;
  readonly label_type: "RANKING" | "SEARCH";
}

export interface TtoTcmCategoryLabelResponse {
  readonly industry_labels?: ReadonlyArray<TtoTcmCategoryLabelResponseIndustryLabels>;
  readonly content_labels?: ReadonlyArray<TtoTcmCategoryLabelResponseContentLabels>;
}

export interface TtoTcmCategoryLabelResponseContentLabels {
  readonly label_id?: string;
  readonly label_name?: string;
}

export interface TtoTcmCategoryLabelResponseIndustryLabels {
  readonly label_id?: string;
  readonly label_name?: string;
}

export interface TtoTcmCreatorDiscoverParams {
  readonly tto_tcm_account_id: string;
  readonly country_codes: ReadonlyArray<string>;
  readonly state_provinces?: ReadonlyArray<string>;
  readonly content_label_ids?: ReadonlyArray<string>;
  readonly industry_label_ids?: ReadonlyArray<string>;
  readonly min_followers?: number;
  readonly max_followers?: number;
  readonly languages?: ReadonlyArray<string>;
  readonly min_creator_price?: number;
  readonly max_creator_price?: number;
  readonly creator_price_currency?: string;
  readonly min_avg_views?: number;
  readonly max_avg_views?: number;
  readonly min_median_views?: number;
  readonly max_median_views?: number;
  readonly min_engagement_rate?: number;
  readonly max_engagement_rate?: number;
  readonly follower_country_codes?: ReadonlyArray<string>;
  readonly follower_gender_ratio?: "FEMALE_50" | "FEMALE_60" | "FEMALE_70" | "MALE_50" | "MALE_60" | "MALE_70";
  readonly follower_age?: string;
  readonly keyword_search?: string;
  readonly sort_field?: "RELEVANCE" | "FOLLOWERS" | "MEDIAN_VIEWS" | "ENGAGEMENT_RATE";
  readonly sort_order?: "ASC" | "DESC";
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmCreatorDiscoverResponse {
  readonly creators?: ReadonlyArray<TtoTcmCreatorDiscoverResponseCreators>;
  readonly page_info?: TtoTcmCreatorDiscoverResponsePageInfo;
}

export interface TtoTcmCreatorDiscoverResponseCreators {
  readonly handle_name?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly followers_count?: number;
  readonly following_count?: number;
  readonly likes_count?: number;
  readonly videos_count?: number;
}

export interface TtoTcmCreatorDiscoverResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtoTcmCreatorPublicParams {
  readonly tto_tcm_account_id: string;
  readonly handle_name: string;
}

export interface TtoTcmCreatorPublicResponse {
  readonly handle_name?: string;
  readonly display_name?: string;
  readonly profile_image?: string;
  readonly bio?: string;
  readonly followers_count?: number;
  readonly following_count?: number;
  readonly videos_count?: number;
  readonly likes_count?: number;
  readonly creator_id?: string;
  readonly median_views?: number;
  readonly engagement_rate?: number;
  readonly creator_price?: number;
  readonly currency?: string;
  readonly industry_labels?: ReadonlyArray<TtoTcmCreatorPublicResponseIndustryLabels>;
  readonly content_labels?: ReadonlyArray<TtoTcmCreatorPublicResponseContentLabels>;
}

export interface TtoTcmCreatorPublicResponseContentLabels {
  readonly label_id?: string;
  readonly label_name?: string;
}

export interface TtoTcmCreatorPublicResponseIndustryLabels {
  readonly label_id?: string;
  readonly label_name?: string;
}

export interface TtoTcmCreatorPublicVideoListParams {
  readonly tto_tcm_account_id: string;
  readonly handle_name: string;
  readonly video_ids?: ReadonlyArray<string>;
  readonly cursor?: number;
  readonly limit?: number;
}

export interface TtoTcmCreatorPublicVideoListResponse {
  readonly posts?: ReadonlyArray<TtoTcmCreatorPublicVideoListResponsePosts>;
  readonly page_info?: TtoTcmCreatorPublicVideoListResponsePageInfo;
}

export interface TtoTcmCreatorPublicVideoListResponsePageInfo {
  readonly has_more?: boolean;
  readonly cursor?: number;
}

export interface TtoTcmCreatorPublicVideoListResponsePosts {
  readonly display_name?: string;
  readonly video_id?: string;
  readonly thumbnail_url?: string;
  readonly embed_url?: string;
  readonly caption?: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly shares?: number;
  readonly favorites?: number;
  readonly video_views?: number;
  readonly create_time?: string;
  readonly caption_hashtags?: ReadonlyArray<string>;
  readonly mentioned_accounts?: ReadonlyArray<string>;
  readonly collaboration_status?: "PAID_PARTNERSHIP" | "CREATOR_EARNS_COMMISSION" | "NONE";
}

export interface TtoTcmCreatorStatusGetParams {
  readonly tto_tcm_account_id: string;
  readonly handle_names: ReadonlyArray<string>;
}

export interface TtoTcmCreatorStatusGetResponse {
  readonly onboarding_status?: ReadonlyArray<TtoTcmCreatorStatusGetResponseOnboardingStatus>;
}

export interface TtoTcmCreatorStatusGetResponseOnboardingStatus {
  readonly handle_name?: string;
  readonly status?: "IN" | "NOT_IN" | "INVALID";
}

export interface TtoTcmRankParams {
  readonly tto_tcm_account_id: string;
  readonly ranking_type: "BRANDED_CONTENT" | "ORGANIC_CONTENT";
  readonly time_period: "WEEK" | "MONTH";
  readonly time_period_lookback: "ONE" | "TWO" | "THREE" | "MONTH";
  readonly label_id: string;
  readonly country_code: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmRankResponse {
  readonly creators?: ReadonlyArray<TtoTcmRankResponseCreators>;
  readonly last_updated_at?: string;
  readonly page_info?: TtoTcmRankResponsePageInfo;
}

export interface TtoTcmRankResponseCreators {
  readonly ranking_change?: string;
  readonly profile_image?: string;
  readonly country?: string;
  readonly handle?: string;
  readonly display_name?: string;
  readonly industry_labels?: ReadonlyArray<TtoTcmRankResponseCreatorsIndustryLabels>;
  readonly content_labels?: ReadonlyArray<TtoTcmRankResponseCreatorsContentLabels>;
  readonly score?: number;
  readonly number_of_followers?: number;
  readonly branded_content_video_views?: number;
  readonly branded_content_engagement_rate?: number;
  readonly total_video_views?: number;
  readonly engagement_rate?: number;
  readonly starting_price?: number;
  readonly starting_price_currency?: string;
  readonly follower_growth?: number;
}

export interface TtoTcmRankResponseCreatorsContentLabels {
  readonly label_name?: string;
  readonly label_id?: string;
}

export interface TtoTcmRankResponseCreatorsIndustryLabels {
  readonly label_id?: string;
  readonly label_name?: string;
}

export interface TtoTcmRankResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtoTcmReportParams {
  readonly tto_tcm_account_id: string;
  readonly campaign_id: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtoTcmReportResponse {
  readonly tto_tcm_account_id?: string;
  readonly campaign_id?: string;
  readonly country_code?: string;
  readonly campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  readonly campaign_channel_type?: "STANDARD_CAMPAIGN" | "LITE_CAMPAIGN" | "API_LITE_CAMPAIGN";
  readonly page_info?: TtoTcmReportResponsePageInfo;
  readonly videos?: ReadonlyArray<TtoTcmReportResponseVideos>;
}

export interface TtoTcmReportResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_page?: number;
  readonly total_number?: number;
}

export interface TtoTcmReportResponseVideos {
  readonly video_info?: TtoTcmReportResponseVideosVideoInfo;
  readonly reach_organic?: number;
  readonly reach_paid?: number;
  readonly video_completion_rate_organic?: number;
  readonly video_completion_rate_paid?: number;
  readonly average_view_time_organic?: number;
  readonly average_view_time_paid?: number;
  readonly organic_two_seconds_views?: number;
  readonly paid_two_seconds_views?: number;
  readonly organic_six_seconds_views?: number;
  readonly paid_six_seconds_views?: number;
  readonly audience_language_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceLanguageDistribution>;
  readonly creator_info?: TtoTcmReportResponseVideosCreatorInfo;
  readonly ad_clicks?: number;
  readonly ad_conversions?: number;
  readonly ad_cost?: number;
  readonly ad_cpa?: number;
  readonly ad_cpc?: number;
  readonly ad_cpm?: number;
  readonly ad_ctr?: number;
  readonly ad_cvr?: number;
  readonly ad_impressions?: number;
  readonly video_views?: number;
  readonly video_views_organic?: number;
  readonly video_views_paid?: number;
  readonly reach?: number;
  readonly engagement_count?: number;
  readonly engagement_rate?: number;
  readonly engagement_rate_organic?: number;
  readonly engagement_rate_paid?: number;
  readonly video_completion_rate?: number;
  readonly likes?: number;
  readonly likes_organic?: number;
  readonly likes_paid?: number;
  readonly comments?: number;
  readonly comments_organic?: number;
  readonly comments_paid?: number;
  readonly shares?: number;
  readonly shares_organic?: number;
  readonly shares_paid?: number;
  readonly favorites?: number;
  readonly favorites_organic?: number;
  readonly favorites_paid?: number;
  readonly total_play_time?: number;
  readonly average_view_time?: number;
  readonly two_seconds_views?: number;
  readonly six_seconds_views?: number;
  readonly video_view_retention?: string;
  readonly video_views_by_source?: TtoTcmReportResponseVideosVideoViewsBySource;
  readonly audience_genders_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceGendersDistribution>;
  readonly audience_countries_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceCountriesDistribution>;
  readonly audience_age_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceAgeDistribution>;
  readonly audience_device_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceDeviceDistribution>;
  readonly audience_locale_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceLocaleDistribution>;
  readonly audience_interest_distribution?: ReadonlyArray<TtoTcmReportResponseVideosAudienceInterestDistribution>;
  readonly anchor_id?: string;
  readonly anchor_metrics?: TtoTcmReportResponseVideosAnchorMetrics;
  readonly daily_stats?: ReadonlyArray<TtoTcmReportResponseVideosDailyStats>;
}

export interface TtoTcmReportResponseVideosAnchorMetrics {
  readonly anchor_views?: number;
  readonly anchor_clicks?: number;
  readonly anchor_unique_views?: number;
  readonly anchor_unique_clicks?: number;
}

export interface TtoTcmReportResponseVideosAudienceAgeDistribution {
  readonly age?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceCountriesDistribution {
  readonly country?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceDeviceDistribution {
  readonly device?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceGendersDistribution {
  readonly gender?: "FEMALE" | "MALE";
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceInterestDistribution {
  readonly interest_tag?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceLanguageDistribution {
  readonly language?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosAudienceLocaleDistribution {
  readonly locale?: string;
  readonly percentage?: number;
}

export interface TtoTcmReportResponseVideosCreatorInfo {
  readonly display_name?: string;
  readonly handle_name?: string;
}

export interface TtoTcmReportResponseVideosDailyStats {
  readonly date?: string;
  readonly views?: number;
  readonly video_views_organic?: number;
  readonly video_views_paid?: number;
  readonly engagement_rate?: number;
  readonly engagement_rate_organic?: number;
  readonly engagement_rate_paid?: number;
  readonly video_completion_rate?: number;
  readonly likes?: number;
  readonly likes_organic?: number;
  readonly likes_paid?: number;
  readonly comments?: number;
  readonly comments_organic?: number;
  readonly comments_paid?: number;
  readonly shares?: number;
  readonly shares_organic?: number;
  readonly shares_paid?: number;
  readonly favorites?: number;
  readonly favorites_organic?: number;
  readonly favorites_paid?: number;
}

export interface TtoTcmReportResponseVideosVideoInfo {
  readonly create_time?: string;
  readonly embed_url?: string;
  readonly thumbnail_url?: string;
  readonly video_id?: string;
  readonly authorization_code?: string;
}

export interface TtoTcmReportResponseVideosVideoViewsBySource {
  readonly for_you?: number;
  readonly hashtag?: number;
  readonly sound?: number;
  readonly personal_profile?: number;
  readonly search?: number;
  readonly following?: number;
  readonly other?: number;
}

export interface TtUserOauth2RefreshTokenParams {
  readonly client_id: string;
  readonly client_secret: string;
  readonly grant_type: string;
  readonly refresh_token: string;
}

export interface TtUserOauth2RefreshTokenResponse {

}

export interface TtUserOauth2RevokeParams {
  readonly client_id: string;
  readonly client_secret: string;
  readonly access_token: string;
}

export interface TtUserOauth2RevokeResponse {

}

export interface TtUserOauth2TokenParams {
  readonly client_id: string;
  readonly client_secret: string;
  readonly grant_type: string;
  readonly auth_code: string;
  readonly redirect_uri: string;
}

export interface TtUserOauth2TokenResponse {
  readonly access_token?: string;
  readonly token_type?: string;
  readonly scope?: string;
  readonly expires_in?: number;
  readonly refresh_token?: string;
  readonly refresh_token_expires_in?: number;
  readonly open_id?: string;
}

export interface TtUserTokenInfoGetParams {
  readonly app_id: string;
  readonly access_token: string;
}

export interface TtUserTokenInfoGetResponse {
  readonly app_id?: string;
  readonly scope?: string;
  readonly creator_id?: string;
}

export interface TtVideoAuthorizeParams {
  readonly advertiser_id: string;
  readonly auth_code: string;
  readonly original_post_auth_code?: string;
}

export interface TtVideoAuthorizeResponse {

}

export interface TtVideoInfoParams {
  readonly advertiser_id: string;
  readonly auth_code: string;
}

export interface TtVideoInfoResponse {
  readonly auth_info?: TtVideoInfoResponseAuthInfo;
  readonly item_info?: TtVideoInfoResponseItemInfo;
  readonly user_info?: TtVideoInfoResponseUserInfo;
  readonly video_info?: TtVideoInfoResponseVideoInfo;
}

export interface TtVideoInfoResponseAuthInfo {
  readonly auth_end_time?: string;
  readonly auth_start_time?: string;
}

export interface TtVideoInfoResponseItemInfo {
  readonly auth_code?: string;
  readonly item_id?: string;
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly text?: string;
  readonly status?: string;
  readonly carousel_info?: TtVideoInfoResponseItemInfoCarouselInfo;
  readonly stitch_original_item_id?: string;
  readonly duet_original_item_id?: string;
  readonly is_multi_duet_stitch?: boolean;
  readonly mentioned_item_ids?: ReadonlyArray<string>;
  readonly anchor_list?: string;
  readonly id?: string;
  readonly title?: string;
  readonly product_regions?: ReadonlyArray<string>;
  readonly url?: string;
  readonly spu_id?: string;
  readonly spu_name?: string;
  readonly store_id?: string;
}

export interface TtVideoInfoResponseItemInfoCarouselInfo {
  readonly image_info?: ReadonlyArray<TtVideoInfoResponseItemInfoCarouselInfoImageInfo>;
  readonly music_info?: TtVideoInfoResponseItemInfoCarouselInfoMusicInfo;
}

export interface TtVideoInfoResponseItemInfoCarouselInfoImageInfo {
  readonly image_url?: string;
  readonly image_height?: number;
  readonly image_width?: number;
}

export interface TtVideoInfoResponseItemInfoCarouselInfoMusicInfo {
  readonly music_url?: string;
  readonly music_duration?: number;
}

export interface TtVideoInfoResponseUserInfo {
  readonly tiktok_name?: string;
  readonly identity_id?: string;
  readonly identity_type?: string;
}

export interface TtVideoInfoResponseVideoInfo {
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly width?: number;
  readonly height?: number;
  readonly video_id?: string;
  readonly file_name?: string;
  readonly poster_url?: string;
  readonly preview_url?: string;
  readonly signature?: string;
}

export interface TtVideoListParams {
  readonly advertiser_id: string;
  readonly item_types?: ReadonlyArray<"VIDEO" | "CAROUSEL">;
  readonly keyword?: string;
  readonly page?: number;
  readonly page_size?: number;
}

export interface TtVideoListResponse {
  readonly list?: ReadonlyArray<TtVideoListResponseList>;
  readonly page_info?: TtVideoListResponsePageInfo;
}

export interface TtVideoListResponseList {
  readonly item_info?: TtVideoListResponseListItemInfo;
  readonly video_info?: TtVideoListResponseListVideoInfo;
  readonly user_info?: TtVideoListResponseListUserInfo;
  readonly auth_info?: TtVideoListResponseListAuthInfo;
}

export interface TtVideoListResponseListAuthInfo {
  readonly invite_start_time?: string;
  readonly auth_start_time?: string;
  readonly ad_auth_status?: string;
  readonly auth_end_time?: string;
}

export interface TtVideoListResponseListItemInfo {
  readonly auth_code?: string;
  readonly item_id?: string;
  readonly text?: string;
  readonly status?: string;
  readonly item_type?: "VIDEO" | "CAROUSEL";
  readonly carousel_info?: TtVideoListResponseListItemInfoCarouselInfo;
  readonly anchor_list?: ReadonlyArray<TtVideoListResponseListItemInfoAnchorList>;
}

export interface TtVideoListResponseListItemInfoAnchorList {
  readonly id?: string;
  readonly title?: string;
  readonly status?: "CHECK_ING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  readonly product_regions?: ReadonlyArray<string>;
  readonly url?: string;
  readonly spu_id?: string;
  readonly spu_name?: string;
  readonly store_id?: string;
}

export interface TtVideoListResponseListItemInfoCarouselInfo {
  readonly image_info?: ReadonlyArray<TtVideoListResponseListItemInfoCarouselInfoImageInfo>;
  readonly music_info?: TtVideoListResponseListItemInfoCarouselInfoMusicInfo;
}

export interface TtVideoListResponseListItemInfoCarouselInfoImageInfo {
  readonly image_url?: string;
  readonly image_height?: number;
  readonly image_width?: number;
}

export interface TtVideoListResponseListItemInfoCarouselInfoMusicInfo {
  readonly music_url?: string;
  readonly music_duration?: number;
}

export interface TtVideoListResponseListUserInfo {
  readonly tiktok_name?: string;
  readonly identity_id?: string;
  readonly identity_type?: string;
}

export interface TtVideoListResponseListVideoInfo {
  readonly bit_rate?: number;
  readonly duration?: number;
  readonly size?: number;
  readonly height?: number;
  readonly width?: number;
  readonly poster_url?: string;
  readonly preview_url?: string;
  readonly signature?: string;
}

export interface TtVideoListResponsePageInfo {
  readonly page?: number;
  readonly page_size?: number;
  readonly total_number?: number;
  readonly total_page?: number;
}

export interface TtVideoUnbindParams {
  readonly advertiser_id: string;
  readonly item_id: string;
}

export interface TtVideoUnbindResponse {

}

export interface VideoFixTaskCreateParams {
  readonly advertiser_id: string;
  readonly tasks?: ReadonlyArray<VideoFixTaskCreateParamsTasks>;
}

export interface VideoFixTaskCreateParamsTasks {
  readonly video_id: string;
  readonly auto_bind_enabled?: boolean;
}

export interface VideoFixTaskCreateResponse {
  readonly tasks?: ReadonlyArray<VideoFixTaskCreateResponseTasks>;
}

export interface VideoFixTaskCreateResponseTasks {
  readonly video_id?: string;
  readonly fix_task_id?: string;
  readonly flaw_types?: ReadonlyArray<"LOW_RESOLUTION" | "ILLEGAL_VIDEO_SIZE" | "NO_BGM" | "BLACK_EDGE" | "ILLEGAL_DURATION">;
}

export interface VideoFixTaskGetParams {
  readonly task_id: string;
  readonly advertiser_id: string;
}

export interface VideoFixTaskGetResponse {
  readonly status?: "PROCESSING" | "FAILED" | "SUCCESS";
  readonly error_msg?: string;
  readonly videos?: ReadonlyArray<VideoFixTaskGetResponseVideos>;
}

export interface VideoFixTaskGetResponseVideos {
  readonly video_id?: string;
  readonly video_url?: string;
}
