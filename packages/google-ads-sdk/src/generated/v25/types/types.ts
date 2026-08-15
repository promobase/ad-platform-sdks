// This file is generated. Do not edit by hand.

export interface AccessibleBiddingStrategy {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: BiddingStrategyType;
  readonly owner_customer_id?: string;
  readonly owner_descriptive_name?: string;
  readonly maximize_conversion_value?: MaximizeConversionValue;
  readonly maximize_conversions?: MaximizeConversions;
  readonly target_cpa?: TargetCpa;
  readonly target_impression_share?: TargetImpressionShare;
  readonly target_roas?: TargetRoas;
  readonly target_spend?: TargetSpend;
}

export interface AccessibleBiddingStrategy_MaximizeConversions {
  readonly target_cpa_micros?: string;
}

export interface AccessibleBiddingStrategy_MaximizeConversionValue {
  readonly target_roas?: number;
}

export interface AccessibleBiddingStrategy_TargetCpa {
  readonly target_cpa_micros?: string;
}

export interface AccessibleBiddingStrategy_TargetImpressionShare {
  readonly location?: TargetImpressionShareLocation;
  readonly location_fraction_micros?: string;
  readonly cpc_bid_ceiling_micros?: string;
}

export interface AccessibleBiddingStrategy_TargetRoas {
  readonly target_roas?: number;
}

export interface AccessibleBiddingStrategy_TargetSpend {
  readonly target_spend_micros?: string;
  readonly cpc_bid_ceiling_micros?: string;
}

export type AccessInvitationError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_EMAIL_ADDRESS" | "EMAIL_ADDRESS_ALREADY_HAS_ACCESS" | "INVALID_INVITATION_STATUS" | "GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED" | "INVALID_INVITATION_ID" | "EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION" | "PENDING_INVITATIONS_LIMIT_EXCEEDED" | "EMAIL_DOMAIN_POLICY_VIOLATED";

export interface AccessInvitationErrorEnum {

}

export type AccessInvitationStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "DECLINED" | "EXPIRED";

export interface AccessInvitationStatusEnum {

}

export type AccessReason = "UNSPECIFIED" | "UNKNOWN" | "OWNED" | "SHARED" | "LICENSED" | "SUBSCRIBED" | "AFFILIATED";

export interface AccessReasonEnum {

}

export type AccessRole = "UNSPECIFIED" | "UNKNOWN" | "ADMIN" | "STANDARD" | "READ_ONLY" | "EMAIL_ONLY";

export interface AccessRoleEnum {

}

export interface AccountBudget {
  readonly resource_name?: string;
  readonly id?: string;
  readonly billing_setup?: string;
  readonly status?: AccountBudgetStatus;
  readonly name?: string;
  readonly proposed_start_date_time?: string;
  readonly approved_start_date_time?: string;
  readonly total_adjustments_micros?: string;
  readonly amount_served_micros?: string;
  readonly purchase_order_number?: string;
  readonly notes?: string;
  readonly pending_proposal?: PendingAccountBudgetProposal;
  readonly proposed_end_date_time?: string;
  readonly proposed_end_time_type?: TimeType;
  readonly approved_end_date_time?: string;
  readonly approved_end_time_type?: TimeType;
  readonly proposed_spending_limit_micros?: string;
  readonly proposed_spending_limit_type?: SpendingLimitType;
  readonly approved_spending_limit_micros?: string;
  readonly approved_spending_limit_type?: SpendingLimitType;
  readonly adjusted_spending_limit_micros?: string;
  readonly adjusted_spending_limit_type?: SpendingLimitType;
}

export interface AccountBudgetProposal {
  readonly resource_name?: string;
  readonly id?: string;
  readonly billing_setup?: string;
  readonly account_budget?: string;
  readonly proposal_type?: AccountBudgetProposalType;
  readonly status?: AccountBudgetProposalStatus;
  readonly proposed_name?: string;
  readonly approved_start_date_time?: string;
  readonly proposed_purchase_order_number?: string;
  readonly proposed_notes?: string;
  readonly creation_date_time?: string;
  readonly approval_date_time?: string;
  readonly proposed_start_date_time?: string;
  readonly proposed_start_time_type?: TimeType;
  readonly proposed_end_date_time?: string;
  readonly proposed_end_time_type?: TimeType;
  readonly approved_end_date_time?: string;
  readonly approved_end_time_type?: TimeType;
  readonly proposed_spending_limit_micros?: string;
  readonly proposed_spending_limit_type?: SpendingLimitType;
  readonly approved_spending_limit_micros?: string;
  readonly approved_spending_limit_type?: SpendingLimitType;
}

export type AccountBudgetProposalError = "UNSPECIFIED" | "UNKNOWN" | "FIELD_MASK_NOT_ALLOWED" | "IMMUTABLE_FIELD" | "REQUIRED_FIELD_MISSING" | "CANNOT_CANCEL_APPROVED_PROPOSAL" | "CANNOT_REMOVE_UNAPPROVED_BUDGET" | "CANNOT_REMOVE_RUNNING_BUDGET" | "CANNOT_END_UNAPPROVED_BUDGET" | "CANNOT_END_INACTIVE_BUDGET" | "BUDGET_NAME_REQUIRED" | "CANNOT_UPDATE_OLD_BUDGET" | "CANNOT_END_IN_PAST" | "CANNOT_EXTEND_END_TIME" | "PURCHASE_ORDER_NUMBER_REQUIRED" | "PENDING_UPDATE_PROPOSAL_EXISTS" | "MULTIPLE_BUDGETS_NOT_ALLOWED_FOR_UNAPPROVED_BILLING_SETUP" | "CANNOT_UPDATE_START_TIME_FOR_STARTED_BUDGET" | "SPENDING_LIMIT_LOWER_THAN_ACCRUED_COST_NOT_ALLOWED" | "UPDATE_IS_NO_OP" | "END_TIME_MUST_FOLLOW_START_TIME" | "BUDGET_DATE_RANGE_INCOMPATIBLE_WITH_BILLING_SETUP" | "NOT_AUTHORIZED" | "INVALID_BILLING_SETUP" | "OVERLAPS_EXISTING_BUDGET" | "CANNOT_CREATE_BUDGET_THROUGH_API" | "INVALID_MASTER_SERVICE_AGREEMENT" | "CANCELED_BILLING_SETUP";

export interface AccountBudgetProposalErrorEnum {

}

export interface AccountBudgetProposalOperation {
  readonly update_mask?: string;
  readonly create?: AccountBudgetProposal;
  readonly remove?: string;
}

export type AccountBudgetProposalStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "APPROVED_HELD" | "APPROVED" | "CANCELLED" | "REJECTED";

export interface AccountBudgetProposalStatusEnum {

}

export type AccountBudgetProposalType = "UNSPECIFIED" | "UNKNOWN" | "CREATE" | "UPDATE" | "END" | "REMOVE";

export interface AccountBudgetProposalTypeEnum {

}

export type AccountBudgetStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "APPROVED" | "CANCELLED";

export interface AccountBudgetStatusEnum {

}

export interface AccountBudgetSummary {
  readonly customer?: string;
  readonly customer_descriptive_name?: string;
  readonly account_budget?: string;
  readonly account_budget_name?: string;
  readonly purchase_order_number?: string;
  readonly subtotal_amount_micros?: string;
  readonly tax_amount_micros?: string;
  readonly total_amount_micros?: string;
  readonly billable_activity_date_range?: DateRange;
  readonly served_amount_micros?: string;
  readonly billed_amount_micros?: string;
  readonly overdelivery_amount_micros?: string;
  readonly invalid_activity_amount_micros?: string;
  readonly invalid_activity_summaries?: ReadonlyArray<InvalidActivitySummary>;
  readonly campaign_summaries?: ReadonlyArray<CampaignSummary>;
}

export interface AccountInfo {
  readonly customer_id?: string;
  readonly descriptive_name?: string;
}

export interface AccountLink {
  readonly resource_name?: string;
  readonly account_link_id?: string;
  readonly status?: AccountLinkStatus;
  readonly type?: LinkedAccountType;
  readonly third_party_app_analytics?: ThirdPartyAppAnalyticsLinkIdentifier;
}

export type AccountLinkError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_STATUS" | "PERMISSION_DENIED";

export interface AccountLinkErrorEnum {

}

export interface AccountLinkOperation {
  readonly update_mask?: string;
  readonly update?: AccountLink;
  readonly remove?: string;
}

export type AccountLinkStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "REQUESTED" | "PENDING_APPROVAL" | "REJECTED" | "REVOKED";

export interface AccountLinkStatusEnum {

}

export interface AccountSummary {
  readonly customer?: string;
  readonly billing_correction_subtotal_amount_micros?: string;
  readonly billing_correction_tax_amount_micros?: string;
  readonly billing_correction_total_amount_micros?: string;
  readonly coupon_adjustment_subtotal_amount_micros?: string;
  readonly coupon_adjustment_tax_amount_micros?: string;
  readonly coupon_adjustment_total_amount_micros?: string;
  readonly excess_credit_adjustment_subtotal_amount_micros?: string;
  readonly excess_credit_adjustment_tax_amount_micros?: string;
  readonly excess_credit_adjustment_total_amount_micros?: string;
  readonly regulatory_costs_subtotal_amount_micros?: string;
  readonly regulatory_costs_tax_amount_micros?: string;
  readonly regulatory_costs_total_amount_micros?: string;
  readonly export_charge_subtotal_amount_micros?: string;
  readonly export_charge_tax_amount_micros?: string;
  readonly export_charge_total_amount_micros?: string;
  readonly subtotal_amount_micros?: string;
  readonly tax_amount_micros?: string;
  readonly total_amount_micros?: string;
  readonly regulatory_cost_summaries?: ReadonlyArray<RegulatoryCostSummary>;
  readonly adjustment_summaries?: ReadonlyArray<AdjustmentSummary>;
}

export type ActionError = "UNSPECIFIED" | "UNKNOWN" | "REQUIRED_FIELD_MISSING" | "INVALID_ARGUMENT";

export interface ActionErrorEnum {

}

export interface ActivityCityInfo {
  readonly value?: string;
}

export interface ActivityCountryInfo {
  readonly value?: string;
}

export interface ActivityIdInfo {
  readonly value?: string;
}

export interface ActivityRatingInfo {
  readonly value?: string;
}

export interface ActivityStateInfo {
  readonly value?: string;
}

export interface Ad {
  readonly resource_name?: string;
  readonly id?: string;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_app_urls?: ReadonlyArray<FinalAppUrl>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly tracking_url_template?: string;
  readonly final_url_suffix?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly display_url?: string;
  readonly type?: AdType;
  readonly added_by_google_ads?: boolean;
  readonly device_preference?: Device;
  readonly url_collections?: ReadonlyArray<UrlCollection>;
  readonly name?: string;
  readonly system_managed_resource_source?: SystemManagedResourceSource;
  readonly synthetic_content_info?: SyntheticContentInfo;
  readonly text_ad?: TextAdInfo;
  readonly expanded_text_ad?: ExpandedTextAdInfo;
  readonly expanded_dynamic_search_ad?: ExpandedDynamicSearchAdInfo;
  readonly hotel_ad?: HotelAdInfo;
  readonly shopping_smart_ad?: ShoppingSmartAdInfo;
  readonly shopping_product_ad?: ShoppingProductAdInfo;
  readonly image_ad?: ImageAdInfo;
  readonly video_ad?: VideoAdInfo;
  readonly video_responsive_ad?: VideoResponsiveAdInfo;
  readonly responsive_search_ad?: ResponsiveSearchAdInfo;
  readonly legacy_responsive_display_ad?: LegacyResponsiveDisplayAdInfo;
  readonly app_ad?: AppAdInfo;
  readonly legacy_app_install_ad?: LegacyAppInstallAdInfo;
  readonly responsive_display_ad?: ResponsiveDisplayAdInfo;
  readonly local_ad?: LocalAdInfo;
  readonly display_upload_ad?: DisplayUploadAdInfo;
  readonly app_engagement_ad?: AppEngagementAdInfo;
  readonly shopping_comparison_listing_ad?: ShoppingComparisonListingAdInfo;
  readonly smart_campaign_ad?: SmartCampaignAdInfo;
  readonly app_pre_registration_ad?: AppPreRegistrationAdInfo;
  readonly demand_gen_multi_asset_ad?: DemandGenMultiAssetAdInfo;
  readonly demand_gen_carousel_ad?: DemandGenCarouselAdInfo;
  readonly demand_gen_video_responsive_ad?: DemandGenVideoResponsiveAdInfo;
  readonly demand_gen_product_ad?: DemandGenProductAdInfo;
  readonly travel_ad?: TravelAdInfo;
}

export interface AdAppDeepLinkAsset {
  readonly asset?: string;
}

export interface AdAssetApplyParameters {
  readonly new_assets?: ReadonlyArray<Asset>;
  readonly existing_assets?: ReadonlyArray<string>;
  readonly scope?: ApplyScope;
}

export interface AdAssetPolicySummary {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
  readonly review_status?: PolicyReviewStatus;
  readonly approval_status?: PolicyApprovalStatus;
}

export interface AdCallToActionAsset {
  readonly asset?: string;
}

export type AdCustomizerError = "UNSPECIFIED" | "UNKNOWN" | "COUNTDOWN_INVALID_DATE_FORMAT" | "COUNTDOWN_DATE_IN_PAST" | "COUNTDOWN_INVALID_LOCALE" | "COUNTDOWN_INVALID_START_DAYS_BEFORE" | "UNKNOWN_USER_LIST";

export interface AdCustomizerErrorEnum {

}

export interface AddAssetDetails {
  readonly asset_field_type?: AssetFieldType;
  readonly asset_count?: number;
  readonly video_aspect_ratio_requirement?: AssetCoverageVideoAspectRatioRequirement;
}

export interface AddBatchJobOperationsRequest {
  readonly resource_name?: string;
  readonly sequence_token?: string;
  readonly mutate_operations?: ReadonlyArray<MutateOperation>;
}

export interface AddBatchJobOperationsResponse {
  readonly total_operations?: string;
  readonly next_sequence_token?: string;
}

export interface AdDemandGenCarouselCardAsset {
  readonly asset?: string;
}

export type AdDestinationType = "UNSPECIFIED" | "UNKNOWN" | "NOT_APPLICABLE" | "WEBSITE" | "APP_DEEP_LINK" | "APP_STORE" | "PHONE_CALL" | "MAP_DIRECTIONS" | "LOCATION_LISTING" | "MESSAGE" | "LEAD_FORM" | "YOUTUBE" | "UNMODELED_FOR_CONVERSIONS";

export interface AdDestinationTypeEnum {

}

export interface AdditionalApplicationInfo {
  readonly application_id?: string;
  readonly application_instance?: ApplicationInstance;
}

export interface AddOfflineUserDataJobOperationsRequest {
  readonly resource_name?: string;
  readonly enable_partial_failure?: boolean;
  readonly enable_warnings?: boolean;
  readonly operations?: ReadonlyArray<OfflineUserDataJobOperation>;
  readonly validate_only?: boolean;
}

export interface AddOfflineUserDataJobOperationsResponse {
  readonly partial_failure_error?: unknown;
  readonly warning?: unknown;
}

export interface AddressInfo {
  readonly postal_code?: string;
  readonly province_code?: string;
  readonly country_code?: string;
  readonly province_name?: string;
  readonly street_address?: string;
  readonly street_address2?: string;
  readonly city_name?: string;
}

export type AdError = "UNSPECIFIED" | "UNKNOWN" | "AD_CUSTOMIZERS_NOT_SUPPORTED_FOR_AD_TYPE" | "APPROXIMATELY_TOO_LONG" | "APPROXIMATELY_TOO_SHORT" | "BAD_SNIPPET" | "CANNOT_MODIFY_AD" | "CANNOT_SET_BUSINESS_NAME_IF_URL_SET" | "CANNOT_SET_FIELD" | "CANNOT_SET_FIELD_WITH_ORIGIN_AD_ID_SET" | "CANNOT_SET_FIELD_WITH_AD_ID_SET_FOR_SHARING" | "CANNOT_SET_ALLOW_FLEXIBLE_COLOR_FALSE" | "CANNOT_SET_COLOR_CONTROL_WHEN_NATIVE_FORMAT_SETTING" | "CANNOT_SET_URL" | "CANNOT_SET_WITHOUT_FINAL_URLS" | "CANNOT_SET_WITH_FINAL_URLS" | "CANNOT_SET_WITH_URL_DATA" | "CANNOT_USE_AD_SUBCLASS_FOR_OPERATOR" | "CUSTOMER_NOT_APPROVED_MOBILEADS" | "CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS" | "CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS" | "CUSTOMER_NOT_ELIGIBLE" | "CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL" | "DIMENSION_ALREADY_IN_UNION" | "DIMENSION_MUST_BE_SET" | "DIMENSION_NOT_IN_UNION" | "DISPLAY_URL_CANNOT_BE_SPECIFIED" | "DOMESTIC_PHONE_NUMBER_FORMAT" | "EMERGENCY_PHONE_NUMBER" | "EMPTY_FIELD" | "FEED_ATTRIBUTE_MUST_HAVE_MAPPING_FOR_TYPE_ID" | "FEED_ATTRIBUTE_MAPPING_TYPE_MISMATCH" | "ILLEGAL_AD_CUSTOMIZER_TAG_USE" | "ILLEGAL_TAG_USE" | "INCONSISTENT_DIMENSIONS" | "INCONSISTENT_STATUS_IN_TEMPLATE_UNION" | "INCORRECT_LENGTH" | "INELIGIBLE_FOR_UPGRADE" | "INVALID_AD_ADDRESS_CAMPAIGN_TARGET" | "INVALID_AD_TYPE" | "INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE" | "INVALID_ATTRIBUTES_FOR_MOBILE_TEXT" | "INVALID_CALL_TO_ACTION_TEXT" | "INVALID_CHARACTER_FOR_URL" | "INVALID_COUNTRY_CODE" | "INVALID_EXPANDED_DYNAMIC_SEARCH_AD_TAG" | "INVALID_INPUT" | "INVALID_MARKUP_LANGUAGE" | "INVALID_MOBILE_CARRIER" | "INVALID_MOBILE_CARRIER_TARGET" | "INVALID_NUMBER_OF_ELEMENTS" | "INVALID_PHONE_NUMBER_FORMAT" | "INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID" | "INVALID_TEMPLATE_DATA" | "INVALID_TEMPLATE_ELEMENT_FIELD_TYPE" | "INVALID_TEMPLATE_ID" | "LINE_TOO_WIDE" | "MISSING_AD_CUSTOMIZER_MAPPING" | "MISSING_ADDRESS_COMPONENT" | "MISSING_ADVERTISEMENT_NAME" | "MISSING_BUSINESS_NAME" | "MISSING_DESCRIPTION1" | "MISSING_DESCRIPTION2" | "MISSING_DESTINATION_URL_TAG" | "MISSING_LANDING_PAGE_URL_TAG" | "MISSING_DIMENSION" | "MISSING_DISPLAY_URL" | "MISSING_HEADLINE" | "MISSING_HEIGHT" | "MISSING_IMAGE" | "MISSING_MARKETING_IMAGE_OR_PRODUCT_VIDEOS" | "MISSING_MARKUP_LANGUAGES" | "MISSING_MOBILE_CARRIER" | "MISSING_PHONE" | "MISSING_REQUIRED_TEMPLATE_FIELDS" | "MISSING_TEMPLATE_FIELD_VALUE" | "MISSING_TEXT" | "MISSING_VISIBLE_URL" | "MISSING_WIDTH" | "MULTIPLE_DISTINCT_FEEDS_UNSUPPORTED" | "MUST_USE_TEMP_AD_UNION_ID_ON_ADD" | "TOO_LONG" | "TOO_SHORT" | "UNION_DIMENSIONS_CANNOT_CHANGE" | "UNKNOWN_ADDRESS_COMPONENT" | "UNKNOWN_FIELD_NAME" | "UNKNOWN_UNIQUE_NAME" | "UNSUPPORTED_DIMENSIONS" | "URL_INVALID_SCHEME" | "URL_INVALID_TOP_LEVEL_DOMAIN" | "URL_MALFORMED" | "URL_NO_HOST" | "URL_NOT_EQUIVALENT" | "URL_HOST_NAME_TOO_LONG" | "URL_NO_SCHEME" | "URL_NO_TOP_LEVEL_DOMAIN" | "URL_PATH_NOT_ALLOWED" | "URL_PORT_NOT_ALLOWED" | "URL_QUERY_NOT_ALLOWED" | "URL_SCHEME_BEFORE_EXPANDED_DYNAMIC_SEARCH_AD_TAG" | "USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE" | "INCONSISTENT_EXPANDABLE_SETTINGS" | "INVALID_FORMAT" | "INVALID_FIELD_TEXT" | "ELEMENT_NOT_PRESENT" | "IMAGE_ERROR" | "VALUE_NOT_IN_RANGE" | "FIELD_NOT_PRESENT" | "ADDRESS_NOT_COMPLETE" | "ADDRESS_INVALID" | "VIDEO_RETRIEVAL_ERROR" | "AUDIO_ERROR" | "INVALID_YOUTUBE_DISPLAY_URL" | "TOO_MANY_PRODUCT_IMAGES" | "TOO_MANY_PRODUCT_VIDEOS" | "INCOMPATIBLE_AD_TYPE_AND_DEVICE_PREFERENCE" | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" | "DISALLOWED_NUMBER_TYPE" | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" | "PREMIUM_RATE_NUMBER_NOT_ALLOWED" | "VANITY_PHONE_NUMBER_NOT_ALLOWED" | "INVALID_CALL_CONVERSION_TYPE_ID" | "CANNOT_DISABLE_CALL_CONVERSION_AND_SET_CONVERSION_TYPE_ID" | "CANNOT_SET_PATH2_WITHOUT_PATH1" | "MISSING_DYNAMIC_SEARCH_ADS_SETTING_DOMAIN_NAME" | "INCOMPATIBLE_WITH_RESTRICTION_TYPE" | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" | "MISSING_IMAGE_OR_MEDIA_BUNDLE" | "PRODUCT_TYPE_NOT_SUPPORTED_IN_THIS_CAMPAIGN" | "PLACEHOLDER_CANNOT_HAVE_EMPTY_DEFAULT_VALUE" | "PLACEHOLDER_COUNTDOWN_FUNCTION_CANNOT_HAVE_DEFAULT_VALUE" | "PLACEHOLDER_DEFAULT_VALUE_MISSING" | "UNEXPECTED_PLACEHOLDER_DEFAULT_VALUE" | "AD_CUSTOMIZERS_MAY_NOT_BE_ADJACENT" | "UPDATING_AD_WITH_NO_ENABLED_ASSOCIATION" | "CALL_AD_VERIFICATION_URL_FINAL_URL_DOES_NOT_HAVE_SAME_DOMAIN" | "CALL_AD_FINAL_URL_AND_VERIFICATION_URL_CANNOT_BOTH_BE_EMPTY" | "TOO_MANY_AD_CUSTOMIZERS" | "INVALID_AD_CUSTOMIZER_FORMAT" | "NESTED_AD_CUSTOMIZER_SYNTAX" | "UNSUPPORTED_AD_CUSTOMIZER_SYNTAX" | "UNPAIRED_BRACE_IN_AD_CUSTOMIZER_TAG" | "MORE_THAN_ONE_COUNTDOWN_TAG_TYPE_EXISTS" | "DATE_TIME_IN_COUNTDOWN_TAG_IS_INVALID" | "DATE_TIME_IN_COUNTDOWN_TAG_IS_PAST" | "UNRECOGNIZED_AD_CUSTOMIZER_TAG_FOUND" | "CUSTOMIZER_TYPE_FORBIDDEN_FOR_FIELD" | "INVALID_CUSTOMIZER_ATTRIBUTE_NAME" | "STORE_MISMATCH" | "MISSING_REQUIRED_IMAGE_ASPECT_RATIO" | "MISMATCHED_ASPECT_RATIOS" | "DUPLICATE_IMAGE_ACROSS_CAROUSEL_CARDS" | "INVALID_YOUTUBE_VIDEO_ASSET_ID_FOR_VIDEO_ADS_SEQUENCING";

export interface AdErrorEnum {

}

export type AdFormatType = "UNSPECIFIED" | "UNKNOWN" | "OTHER" | "UNSEGMENTED" | "INSTREAM_SKIPPABLE" | "INSTREAM_NON_SKIPPABLE" | "INFEED" | "BUMPER" | "OUTSTREAM" | "MASTHEAD" | "AUDIO" | "SHORTS" | "PAUSE" | "VERTICAL_ADS_PROMOTION" | "VERTICAL_ADS_BOOKING_LINK" | "TEXT";

export interface AdFormatTypeEnum {

}

export interface AdGroup {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly status?: AdGroupStatus;
  readonly type?: AdGroupType;
  readonly ad_rotation_mode?: AdGroupAdRotationMode;
  readonly base_ad_group?: string;
  readonly tracking_url_template?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly campaign?: string;
  readonly cpc_bid_micros?: string;
  readonly effective_cpc_bid_micros?: string;
  readonly cpm_bid_micros?: string;
  readonly target_cpa_micros?: string;
  readonly cpv_bid_micros?: string;
  readonly target_cpm_micros?: string;
  readonly target_roas?: number;
  readonly percent_cpc_bid_micros?: string;
  readonly fixed_cpm_micros?: string;
  readonly target_cpv_micros?: string;
  readonly target_cpc_micros?: string;
  readonly optimized_targeting_enabled?: boolean;
  readonly exclude_demographic_expansion?: boolean;
  readonly display_custom_bid_dimension?: TargetingDimension;
  readonly final_url_suffix?: string;
  readonly targeting_setting?: TargetingSetting;
  readonly audience_setting?: AudienceSetting;
  readonly effective_target_cpa_micros?: string;
  readonly effective_target_cpa_source?: BiddingSource;
  readonly effective_target_roas?: number;
  readonly effective_target_roas_source?: BiddingSource;
  readonly effective_target_cpc?: string;
  readonly effective_target_cpc_source?: BiddingSource;
  readonly labels?: ReadonlyArray<string>;
  readonly excluded_parent_asset_field_types?: ReadonlyArray<AssetFieldType>;
  readonly excluded_parent_asset_set_types?: ReadonlyArray<AssetSetType>;
  readonly primary_status?: AdGroupPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<AdGroupPrimaryStatusReason>;
  readonly demand_gen_ad_group_settings?: DemandGenAdGroupSettings;
  readonly video_ad_group_settings?: VideoAdGroupSettings;
  readonly ai_max_ad_group_setting?: AiMaxAdGroupSetting;
  readonly vertical_ads_format_setting?: VerticalAdsFormatSetting;
}

export interface AdGroupAd {
  readonly resource_name?: string;
  readonly status?: AdGroupAdStatus;
  readonly ad_group?: string;
  readonly ad?: Ad;
  readonly start_date_time?: string;
  readonly end_date_time?: string;
  readonly policy_summary?: AdGroupAdPolicySummary;
  readonly ad_strength?: AdStrength;
  readonly action_items?: ReadonlyArray<string>;
  readonly labels?: ReadonlyArray<string>;
  readonly primary_status?: AdGroupAdPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<AdGroupAdPrimaryStatusReason>;
  readonly ad_group_ad_asset_automation_settings?: ReadonlyArray<AdGroupAdAssetAutomationSetting>;
}

export interface AdGroupAdAssetAutomationSetting {
  readonly asset_automation_type?: AssetAutomationType;
  readonly asset_automation_status?: AssetAutomationStatus;
}

export interface AdGroupAdAssetCombinationView {
  readonly resource_name?: string;
  readonly served_assets?: ReadonlyArray<AssetUsage>;
  readonly enabled?: boolean;
}

export interface AdGroupAdAssetPolicySummary {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
  readonly review_status?: PolicyReviewStatus;
  readonly approval_status?: PolicyApprovalStatus;
}

export interface AdGroupAdAssetView {
  readonly resource_name?: string;
  readonly ad_group_ad?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly enabled?: boolean;
  readonly policy_summary?: AdGroupAdAssetPolicySummary;
  readonly performance_label?: AssetPerformanceLabel;
  readonly pinned_field?: ServedAssetFieldType;
  readonly source?: AssetSource;
}

export type AdGroupAdError = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP_AD_LABEL_DOES_NOT_EXIST" | "AD_GROUP_AD_LABEL_ALREADY_EXISTS" | "AD_NOT_UNDER_ADGROUP" | "CANNOT_OPERATE_ON_REMOVED_ADGROUPAD" | "CANNOT_CREATE_DEPRECATED_ADS" | "CANNOT_CREATE_TEXT_ADS" | "EMPTY_FIELD" | "RESOURCE_REFERENCED_IN_MULTIPLE_OPS" | "AD_TYPE_CANNOT_BE_PAUSED" | "AD_TYPE_CANNOT_BE_REMOVED" | "CANNOT_UPDATE_DEPRECATED_ADS" | "AD_SHARING_NOT_ALLOWED" | "DURATION_TOO_SHORT";

export interface AdGroupAdErrorEnum {

}

export interface AdGroupAdLabel {
  readonly resource_name?: string;
  readonly ad_group_ad?: string;
  readonly label?: string;
}

export interface AdGroupAdLabelOperation {
  readonly create?: AdGroupAdLabel;
  readonly remove?: string;
}

export interface AdGroupAdOperation {
  readonly update_mask?: string;
  readonly policy_validation_parameter?: PolicyValidationParameter;
  readonly create?: AdGroupAd;
  readonly update?: AdGroupAd;
  readonly remove?: string;
}

export interface AdGroupAdPolicySummary {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
  readonly review_status?: PolicyReviewStatus;
  readonly approval_status?: PolicyApprovalStatus;
}

export type AdGroupAdPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "PENDING" | "LIMITED" | "NOT_ELIGIBLE";

export interface AdGroupAdPrimaryStatusEnum {

}

export type AdGroupAdPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_REMOVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_PENDING" | "CAMPAIGN_ENDED" | "AD_GROUP_PAUSED" | "AD_GROUP_REMOVED" | "AD_GROUP_AD_PAUSED" | "AD_GROUP_AD_REMOVED" | "AD_GROUP_AD_DISAPPROVED" | "AD_GROUP_AD_UNDER_REVIEW" | "AD_GROUP_AD_POOR_QUALITY" | "AD_GROUP_AD_NO_ADS" | "AD_GROUP_AD_APPROVED_LABELED" | "AD_GROUP_AD_AREA_OF_INTEREST_ONLY" | "AD_GROUP_AD_UNDER_APPEAL";

export interface AdGroupAdPrimaryStatusReasonEnum {

}

export type AdGroupAdRotationMode = "UNSPECIFIED" | "UNKNOWN" | "OPTIMIZE" | "ROTATE_FOREVER";

export interface AdGroupAdRotationModeEnum {

}

export type AdGroupAdStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface AdGroupAdStatusEnum {

}

export interface AdGroupAsset {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly source?: AssetSource;
  readonly status?: AssetLinkStatus;
  readonly primary_status?: AssetLinkPrimaryStatus;
  readonly primary_status_details?: ReadonlyArray<AssetLinkPrimaryStatusDetails>;
  readonly primary_status_reasons?: ReadonlyArray<AssetLinkPrimaryStatusReason>;
}

export interface AdGroupAssetOperation {
  readonly update_mask?: string;
  readonly create?: AdGroupAsset;
  readonly update?: AdGroupAsset;
  readonly remove?: string;
}

export interface AdGroupAssetSet {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly asset_set?: string;
  readonly status?: AssetSetLinkStatus;
}

export interface AdGroupAssetSetOperation {
  readonly create?: AdGroupAssetSet;
  readonly remove?: string;
}

export interface AdGroupAudienceView {
  readonly resource_name?: string;
}

export interface AdGroupBidModifier {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly criterion_id?: string;
  readonly bid_modifier?: number;
  readonly base_ad_group?: string;
  readonly bid_modifier_source?: BidModifierSource;
  readonly hotel_date_selection_type?: HotelDateSelectionTypeInfo;
  readonly hotel_advance_booking_window?: HotelAdvanceBookingWindowInfo;
  readonly hotel_length_of_stay?: HotelLengthOfStayInfo;
  readonly hotel_check_in_day?: HotelCheckInDayInfo;
  readonly device?: DeviceInfo;
  readonly hotel_check_in_date_range?: HotelCheckInDateRangeInfo;
}

export type AdGroupBidModifierError = "UNSPECIFIED" | "UNKNOWN" | "CRITERION_ID_NOT_SUPPORTED" | "CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER";

export interface AdGroupBidModifierErrorEnum {

}

export interface AdGroupBidModifierOperation {
  readonly update_mask?: string;
  readonly create?: AdGroupBidModifier;
  readonly update?: AdGroupBidModifier;
  readonly remove?: string;
}

export interface AdGroupCreativeAssetCombinationData {
  readonly asset_combination_served_assets?: ReadonlyArray<AssetUsage>;
}

export interface AdGroupCriterion {
  readonly resource_name?: string;
  readonly criterion_id?: string;
  readonly display_name?: string;
  readonly status?: AdGroupCriterionStatus;
  readonly quality_info?: QualityInfo;
  readonly ad_group?: string;
  readonly type?: CriterionType;
  readonly negative?: boolean;
  readonly system_serving_status?: CriterionSystemServingStatus;
  readonly approval_status?: AdGroupCriterionApprovalStatus;
  readonly disapproval_reasons?: ReadonlyArray<string>;
  readonly labels?: ReadonlyArray<string>;
  readonly bid_modifier?: number;
  readonly cpc_bid_micros?: string;
  readonly cpm_bid_micros?: string;
  readonly cpv_bid_micros?: string;
  readonly percent_cpc_bid_micros?: string;
  readonly effective_cpc_bid_micros?: string;
  readonly effective_cpm_bid_micros?: string;
  readonly effective_cpv_bid_micros?: string;
  readonly effective_percent_cpc_bid_micros?: string;
  readonly effective_cpc_bid_source?: BiddingSource;
  readonly effective_cpm_bid_source?: BiddingSource;
  readonly effective_cpv_bid_source?: BiddingSource;
  readonly effective_percent_cpc_bid_source?: BiddingSource;
  readonly position_estimates?: PositionEstimates;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly final_url_suffix?: string;
  readonly tracking_url_template?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly primary_status?: AdGroupCriterionPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<AdGroupCriterionPrimaryStatusReason>;
  readonly keyword?: KeywordInfo;
  readonly placement?: PlacementInfo;
  readonly mobile_app_category?: MobileAppCategoryInfo;
  readonly mobile_application?: MobileApplicationInfo;
  readonly listing_group?: ListingGroupInfo;
  readonly age_range?: AgeRangeInfo;
  readonly gender?: GenderInfo;
  readonly income_range?: IncomeRangeInfo;
  readonly parental_status?: ParentalStatusInfo;
  readonly user_list?: UserListInfo;
  readonly youtube_video?: YouTubeVideoInfo;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly topic?: TopicInfo;
  readonly user_interest?: UserInterestInfo;
  readonly webpage?: WebpageInfo;
  readonly app_payment_model?: AppPaymentModelInfo;
  readonly custom_affinity?: CustomAffinityInfo;
  readonly custom_intent?: CustomIntentInfo;
  readonly custom_audience?: CustomAudienceInfo;
  readonly combined_audience?: CombinedAudienceInfo;
  readonly audience?: AudienceInfo;
  readonly location?: LocationInfo;
  readonly language?: LanguageInfo;
  readonly life_event?: LifeEventInfo;
  readonly video_lineup?: VideoLineupInfo;
  readonly extended_demographic?: ExtendedDemographicInfo;
  readonly brand_list?: BrandListInfo;
  readonly vertical_ads_item_group_rule_list?: VerticalAdsItemGroupRuleListInfo;
  readonly retail_filter_bundle?: RetailFilterBundle;
}

export type AdGroupCriterionApprovalStatus = "UNSPECIFIED" | "UNKNOWN" | "APPROVED" | "DISAPPROVED" | "PENDING_REVIEW" | "UNDER_REVIEW";

export interface AdGroupCriterionApprovalStatusEnum {

}

export interface AdGroupCriterionCustomizer {
  readonly resource_name?: string;
  readonly ad_group_criterion?: string;
  readonly customizer_attribute?: string;
  readonly status?: CustomizerValueStatus;
  readonly value?: CustomizerValue;
}

export type AdGroupCriterionCustomizerError = "UNSPECIFIED" | "UNKNOWN" | "CRITERION_IS_NOT_KEYWORD";

export interface AdGroupCriterionCustomizerErrorEnum {

}

export interface AdGroupCriterionCustomizerOperation {
  readonly create?: AdGroupCriterionCustomizer;
  readonly remove?: string;
}

export type AdGroupCriterionError = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP_CRITERION_LABEL_DOES_NOT_EXIST" | "AD_GROUP_CRITERION_LABEL_ALREADY_EXISTS" | "CANNOT_ADD_LABEL_TO_NEGATIVE_CRITERION" | "TOO_MANY_OPERATIONS" | "CANT_UPDATE_NEGATIVE" | "CONCRETE_TYPE_REQUIRED" | "BID_INCOMPATIBLE_WITH_ADGROUP" | "CANNOT_TARGET_AND_EXCLUDE" | "ILLEGAL_URL" | "INVALID_KEYWORD_TEXT" | "INVALID_DESTINATION_URL" | "MISSING_DESTINATION_URL_TAG" | "KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM" | "INVALID_USER_STATUS" | "CANNOT_ADD_CRITERIA_TYPE" | "CANNOT_EXCLUDE_CRITERIA_TYPE" | "CAMPAIGN_TYPE_NOT_COMPATIBLE_WITH_PARTIAL_FAILURE" | "OPERATIONS_FOR_TOO_MANY_SHOPPING_ADGROUPS" | "CANNOT_MODIFY_URL_FIELDS_WITH_DUPLICATE_ELEMENTS" | "CANNOT_SET_WITHOUT_FINAL_URLS" | "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_MOBILE_URLS_EXIST" | "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_APP_URLS_EXIST" | "CANNOT_CLEAR_FINAL_URLS_IF_TRACKING_URL_TEMPLATE_EXISTS" | "CANNOT_CLEAR_FINAL_URLS_IF_URL_CUSTOM_PARAMETERS_EXIST" | "CANNOT_SET_BOTH_DESTINATION_URL_AND_FINAL_URLS" | "CANNOT_SET_BOTH_DESTINATION_URL_AND_TRACKING_URL_TEMPLATE" | "FINAL_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE" | "FINAL_MOBILE_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE";

export interface AdGroupCriterionErrorEnum {

}

export interface AdGroupCriterionLabel {
  readonly resource_name?: string;
  readonly ad_group_criterion?: string;
  readonly label?: string;
}

export interface AdGroupCriterionLabelOperation {
  readonly create?: AdGroupCriterionLabel;
  readonly remove?: string;
}

export interface AdGroupCriterionOperation {
  readonly update_mask?: string;
  readonly exempt_policy_violation_keys?: ReadonlyArray<PolicyViolationKey>;
  readonly create?: AdGroupCriterion;
  readonly update?: AdGroupCriterion;
  readonly remove?: string;
}

export type AdGroupCriterionPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "PENDING" | "NOT_ELIGIBLE";

export interface AdGroupCriterionPrimaryStatusEnum {

}

export type AdGroupCriterionPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_PENDING" | "CAMPAIGN_CRITERION_NEGATIVE" | "CAMPAIGN_PAUSED" | "CAMPAIGN_REMOVED" | "CAMPAIGN_ENDED" | "AD_GROUP_PAUSED" | "AD_GROUP_REMOVED" | "AD_GROUP_CRITERION_DISAPPROVED" | "AD_GROUP_CRITERION_RARELY_SERVED" | "AD_GROUP_CRITERION_LOW_QUALITY" | "AD_GROUP_CRITERION_UNDER_REVIEW" | "AD_GROUP_CRITERION_PENDING_REVIEW" | "AD_GROUP_CRITERION_BELOW_FIRST_PAGE_BID" | "AD_GROUP_CRITERION_NEGATIVE" | "AD_GROUP_CRITERION_RESTRICTED" | "AD_GROUP_CRITERION_PAUSED" | "AD_GROUP_CRITERION_PAUSED_DUE_TO_LOW_ACTIVITY" | "AD_GROUP_CRITERION_REMOVED";

export interface AdGroupCriterionPrimaryStatusReasonEnum {

}

export interface AdGroupCriterionSimulation {
  readonly resource_name?: string;
  readonly ad_group_id?: string;
  readonly criterion_id?: string;
  readonly type?: SimulationType;
  readonly modification_method?: SimulationModificationMethod;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly cpc_bid_point_list?: CpcBidSimulationPointList;
  readonly percent_cpc_bid_point_list?: PercentCpcBidSimulationPointList;
}

export type AdGroupCriterionStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface AdGroupCriterionStatusEnum {

}

export interface AdGroupCustomizer {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly customizer_attribute?: string;
  readonly status?: CustomizerValueStatus;
  readonly value?: CustomizerValue;
}

export type AdGroupCustomizerError = "UNSPECIFIED" | "UNKNOWN";

export interface AdGroupCustomizerErrorEnum {

}

export interface AdGroupCustomizerOperation {
  readonly create?: AdGroupCustomizer;
  readonly remove?: string;
}

export type AdGroupError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_ADGROUP_NAME" | "INVALID_ADGROUP_NAME" | "ADVERTISER_NOT_ON_CONTENT_NETWORK" | "BID_TOO_BIG" | "BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH" | "MISSING_ADGROUP_NAME" | "ADGROUP_LABEL_DOES_NOT_EXIST" | "ADGROUP_LABEL_ALREADY_EXISTS" | "INVALID_CONTENT_BID_CRITERION_TYPE_GROUP" | "AD_GROUP_TYPE_NOT_VALID_FOR_ADVERTISING_CHANNEL_TYPE" | "ADGROUP_TYPE_NOT_SUPPORTED_FOR_CAMPAIGN_SALES_COUNTRY" | "CANNOT_ADD_ADGROUP_OF_TYPE_DSA_TO_CAMPAIGN_WITHOUT_DSA_SETTING" | "PROMOTED_HOTEL_AD_GROUPS_NOT_AVAILABLE_FOR_CUSTOMER" | "INVALID_EXCLUDED_PARENT_ASSET_FIELD_TYPE" | "INVALID_EXCLUDED_PARENT_ASSET_SET_TYPE" | "CANNOT_ADD_AD_GROUP_FOR_CAMPAIGN_TYPE" | "INVALID_STATUS" | "INVALID_STEP_ID_FOR_VIDEO_ADS_SEQUENCING" | "INVALID_AD_GROUP_TYPE_FOR_VIDEO_ADS_SEQUENCING" | "DUPLICATE_STEP_ID" | "INVALID_VERTICAL_ADS_FORMAT_SETTING" | "VERTICAL_ADS_FORMAT_SETTING_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_AI_MAX" | "VERTICAL_ADS_FORMAT_SETTING_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_ENABLED_TRAVEL_FEED";

export interface AdGroupErrorEnum {

}

export type AdGroupFeedError = "UNSPECIFIED" | "UNKNOWN" | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "CANNOT_CREATE_FOR_REMOVED_FEED" | "ADGROUP_FEED_ALREADY_EXISTS" | "CANNOT_OPERATE_ON_REMOVED_ADGROUP_FEED" | "INVALID_PLACEHOLDER_TYPE" | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" | "NO_EXISTING_LOCATION_CUSTOMER_FEED";

export interface AdGroupFeedErrorEnum {

}

export interface AdGroupInfo {
  readonly ad_group_type?: AdGroupType;
  readonly keywords?: ReadonlyArray<KeywordInfo>;
}

export interface AdGroupKeywordSuggestion {
  readonly keyword_text?: string;
  readonly suggested_keyword_text?: string;
  readonly suggested_match_type?: KeywordMatchType;
  readonly suggested_ad_group?: string;
  readonly suggested_campaign?: string;
}

export interface AdGroupLabel {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly label?: string;
}

export interface AdGroupLabelOperation {
  readonly create?: AdGroupLabel;
  readonly remove?: string;
}

export interface AdGroupOperation {
  readonly update_mask?: string;
  readonly create?: AdGroup;
  readonly update?: AdGroup;
  readonly remove?: string;
}

export type AdGroupPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "PENDING" | "NOT_ELIGIBLE" | "LIMITED";

export interface AdGroupPrimaryStatusEnum {

}

export type AdGroupPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_REMOVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_PENDING" | "CAMPAIGN_ENDED" | "AD_GROUP_PAUSED" | "AD_GROUP_REMOVED" | "AD_GROUP_INCOMPLETE" | "KEYWORDS_PAUSED" | "NO_KEYWORDS" | "AD_GROUP_ADS_PAUSED" | "NO_AD_GROUP_ADS" | "HAS_ADS_DISAPPROVED" | "HAS_ADS_LIMITED_BY_POLICY" | "MOST_ADS_UNDER_REVIEW" | "CAMPAIGN_DRAFT" | "AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY";

export interface AdGroupPrimaryStatusReasonEnum {

}

export interface AdGroupSimulation {
  readonly resource_name?: string;
  readonly ad_group_id?: string;
  readonly type?: SimulationType;
  readonly modification_method?: SimulationModificationMethod;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly cpc_bid_point_list?: CpcBidSimulationPointList;
  readonly cpv_bid_point_list?: CpvBidSimulationPointList;
  readonly target_cpa_point_list?: TargetCpaSimulationPointList;
  readonly target_roas_point_list?: TargetRoasSimulationPointList;
}

export type AdGroupStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface AdGroupStatusEnum {

}

export type AdGroupType = "UNSPECIFIED" | "UNKNOWN" | "SEARCH_STANDARD" | "DISPLAY_STANDARD" | "SHOPPING_PRODUCT_ADS" | "HOTEL_ADS" | "SHOPPING_SMART_ADS" | "VIDEO_BUMPER" | "VIDEO_TRUE_VIEW_IN_STREAM" | "VIDEO_TRUE_VIEW_IN_DISPLAY" | "VIDEO_NON_SKIPPABLE_IN_STREAM" | "SEARCH_DYNAMIC_ADS" | "SHOPPING_COMPARISON_LISTING_ADS" | "PROMOTED_HOTEL_ADS" | "VIDEO_RESPONSIVE" | "VIDEO_EFFICIENT_REACH" | "SMART_CAMPAIGN_ADS" | "TRAVEL_ADS" | "YOUTUBE_AUDIO";

export interface AdGroupTypeEnum {

}

export interface AdImageAsset {
  readonly asset?: string;
}

export interface AdjustmentSummary {
  readonly adjustment_description?: string;
  readonly amount_micros?: string;
}

export interface AdMediaBundleAsset {
  readonly asset?: string;
}

export type AdNetworkType = "UNSPECIFIED" | "UNKNOWN" | "SEARCH" | "SEARCH_PARTNERS" | "CONTENT" | "MIXED" | "YOUTUBE" | "GOOGLE_TV" | "GOOGLE_OWNED_CHANNELS" | "GMAIL" | "DISCOVER" | "MAPS";

export interface AdNetworkTypeEnum {

}

export interface AdOperation {
  readonly update_mask?: string;
  readonly policy_validation_parameter?: PolicyValidationParameter;
  readonly update?: Ad;
}

export interface AdOptimizedBusinessProfileSetting {
  readonly include_lead_form?: boolean;
}

export interface AdParameter {
  readonly resource_name?: string;
  readonly ad_group_criterion?: string;
  readonly parameter_index?: string;
  readonly insertion_text?: string;
}

export type AdParameterError = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP_CRITERION_MUST_BE_KEYWORD" | "INVALID_INSERTION_TEXT_FORMAT";

export interface AdParameterErrorEnum {

}

export interface AdParameterOperation {
  readonly update_mask?: string;
  readonly create?: AdParameter;
  readonly update?: AdParameter;
  readonly remove?: string;
}

export interface AdScheduleInfo {
  readonly start_minute?: MinuteOfHour;
  readonly end_minute?: MinuteOfHour;
  readonly start_hour?: number;
  readonly end_hour?: number;
  readonly day_of_week?: DayOfWeek;
}

export interface AdScheduleView {
  readonly resource_name?: string;
}

export type AdServingOptimizationStatus = "UNSPECIFIED" | "UNKNOWN" | "OPTIMIZE" | "CONVERSION_OPTIMIZE" | "ROTATE" | "ROTATE_INDEFINITELY" | "UNAVAILABLE";

export interface AdServingOptimizationStatusEnum {

}

export type AdSharingError = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP_ALREADY_CONTAINS_AD" | "INCOMPATIBLE_AD_UNDER_AD_GROUP" | "CANNOT_SHARE_INACTIVE_AD";

export interface AdSharingErrorEnum {

}

export type AdStrength = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "NO_ADS" | "POOR" | "AVERAGE" | "GOOD" | "EXCELLENT";

export interface AdStrengthActionItem {
  readonly action_item_type?: AdStrengthActionItemType;
  readonly add_asset_details?: AddAssetDetails;
}

export type AdStrengthActionItemType = "UNSPECIFIED" | "UNKNOWN" | "ADD_ASSET";

export interface AdStrengthActionItemTypeEnum {

}

export interface AdStrengthEnum {

}

export type AdSubFormatType = "UNSPECIFIED" | "UNKNOWN" | "UNSEGMENTED" | "INSTREAM_NON_SKIPPABLE_STANDARD" | "INSTREAM_NON_SKIPPABLE_MAX30_SEC" | "INSTREAM_NON_SKIPPABLE_MAX60_SEC";

export interface AdSubFormatTypeEnum {

}

export type AdSubNetworkType = "UNSPECIFIED" | "UNKNOWN" | "UNSEGMENTED" | "YOUTUBE_INSTREAM" | "YOUTUBE_INFEED" | "YOUTUBE_SHORTS";

export interface AdSubNetworkTypeEnum {

}

export interface AdTextAsset {
  readonly text?: string;
  readonly pinned_field?: ServedAssetFieldType;
  readonly asset_performance_label?: AssetPerformanceLabel;
  readonly policy_summary_info?: AdAssetPolicySummary;
}

export type AdType = "UNSPECIFIED" | "UNKNOWN" | "TEXT_AD" | "EXPANDED_TEXT_AD" | "EXPANDED_DYNAMIC_SEARCH_AD" | "HOTEL_AD" | "SHOPPING_SMART_AD" | "SHOPPING_PRODUCT_AD" | "VIDEO_AD" | "IMAGE_AD" | "RESPONSIVE_SEARCH_AD" | "LEGACY_RESPONSIVE_DISPLAY_AD" | "APP_AD" | "LEGACY_APP_INSTALL_AD" | "RESPONSIVE_DISPLAY_AD" | "LOCAL_AD" | "HTML5_UPLOAD_AD" | "DYNAMIC_HTML5_AD" | "APP_ENGAGEMENT_AD" | "SHOPPING_COMPARISON_LISTING_AD" | "VIDEO_BUMPER_AD" | "VIDEO_NON_SKIPPABLE_IN_STREAM_AD" | "VIDEO_TRUEVIEW_IN_STREAM_AD" | "VIDEO_RESPONSIVE_AD" | "SMART_CAMPAIGN_AD" | "CALL_AD" | "APP_PRE_REGISTRATION_AD" | "IN_FEED_VIDEO_AD" | "DEMAND_GEN_MULTI_ASSET_AD" | "DEMAND_GEN_CAROUSEL_AD" | "TRAVEL_AD" | "DEMAND_GEN_VIDEO_RESPONSIVE_AD" | "DEMAND_GEN_PRODUCT_AD" | "YOUTUBE_AUDIO_AD";

export interface AdTypeEnum {

}

export interface AdvancedProductTargeting {
  readonly surface_targeting_settings?: SurfaceTargeting;
  readonly target_frequency_settings?: TargetFrequencySettings;
  readonly youtube_select_settings?: YouTubeSelectSettings;
}

export type AdvertisingChannelSubType = "UNSPECIFIED" | "UNKNOWN" | "SEARCH_MOBILE_APP" | "DISPLAY_MOBILE_APP" | "SEARCH_EXPRESS" | "DISPLAY_EXPRESS" | "SHOPPING_SMART_ADS" | "DISPLAY_GMAIL_AD" | "DISPLAY_SMART_CAMPAIGN" | "VIDEO_ACTION" | "VIDEO_NON_SKIPPABLE" | "APP_CAMPAIGN" | "APP_CAMPAIGN_FOR_ENGAGEMENT" | "LOCAL_CAMPAIGN" | "SHOPPING_COMPARISON_LISTING_ADS" | "SMART_CAMPAIGN" | "VIDEO_SEQUENCE" | "APP_CAMPAIGN_FOR_PRE_REGISTRATION" | "VIDEO_REACH_TARGET_FREQUENCY" | "TRAVEL_ACTIVITIES" | "YOUTUBE_AUDIO";

export interface AdvertisingChannelSubTypeEnum {

}

export type AdvertisingChannelType = "UNSPECIFIED" | "UNKNOWN" | "SEARCH" | "DISPLAY" | "SHOPPING" | "HOTEL" | "VIDEO" | "MULTI_CHANNEL" | "LOCAL" | "SMART" | "PERFORMANCE_MAX" | "LOCAL_SERVICES" | "TRAVEL" | "DEMAND_GEN";

export interface AdvertisingChannelTypeEnum {

}

export interface AdvertisingPartnerIdentifier {
  readonly customer?: string;
}

export interface AdvertisingPartnerLinkInvitationIdentifier {
  readonly customer?: string;
}

export interface AdvertisingPartnerLinkInvitationProperties {
  readonly allowed_domain?: string;
}

export interface AdvertisingPartnerProperties {
  readonly allowed_domain?: string;
}

export interface AdVideoAsset {
  readonly asset?: string;
  readonly ad_video_asset_info?: AdVideoAssetInfo;
}

export interface AdVideoAssetInfo {
  readonly ad_video_asset_inventory_preferences?: AdVideoAssetInventoryPreferences;
  readonly ad_video_asset_feature_control?: AdVideoAssetLinkFeatureControl;
}

export interface AdVideoAssetInventoryPreferences {
  readonly in_feed_preference?: boolean;
  readonly in_stream_preference?: boolean;
  readonly shorts_preference?: boolean;
}

export interface AdVideoAssetLinkFeatureControl {
  readonly allow_youtube_comments?: boolean;
}

export type AdxError = "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED_FEATURE";

export interface AdxErrorEnum {

}

export interface AgeDimension {
  readonly age_ranges?: ReadonlyArray<AgeSegment>;
  readonly include_undetermined?: boolean;
}

export interface AgeRangeInfo {
  readonly type?: AgeRangeType;
}

export type AgeRangeType = "UNSPECIFIED" | "UNKNOWN" | "AGE_RANGE_18_24" | "AGE_RANGE_25_34" | "AGE_RANGE_35_44" | "AGE_RANGE_45_54" | "AGE_RANGE_55_64" | "AGE_RANGE_65_UP" | "AGE_RANGE_UNDETERMINED";

export interface AgeRangeTypeEnum {

}

export interface AgeRangeView {
  readonly resource_name?: string;
}

export interface AgeSegment {
  readonly min_age?: number;
  readonly max_age?: number;
}

export interface AiMaxAdGroupSetting {
  readonly disable_search_term_matching?: boolean;
}

export type AiMaxBundlingRequired = "UNSPECIFIED" | "UNKNOWN" | "NOT_REQUIRED" | "REQUIRED";

export interface AiMaxSearchTermAdCombinationView {
  readonly resource_name?: string;
  readonly ad_group?: string;
  readonly search_term?: string;
  readonly landing_page?: string;
  readonly headline?: string;
}

export interface AiMaxSetting {
  readonly enable_ai_max?: boolean;
  readonly bundling_required?: AiMaxBundlingRequired;
}

export type AndroidPrivacyInteractionType = "UNSPECIFIED" | "UNKNOWN" | "CLICK" | "ENGAGED_VIEW" | "VIEW";

export interface AndroidPrivacyInteractionTypeEnum {

}

export type AndroidPrivacyNetworkType = "UNSPECIFIED" | "UNKNOWN" | "SEARCH" | "DISPLAY" | "YOUTUBE";

export interface AndroidPrivacyNetworkTypeEnum {

}

export interface AndroidPrivacySharedKeyGoogleAdGroup {
  readonly resource_name?: string;
  readonly campaign_id?: string;
  readonly android_privacy_interaction_type?: AndroidPrivacyInteractionType;
  readonly android_privacy_interaction_date?: string;
  readonly android_privacy_network_type?: AndroidPrivacyNetworkType;
  readonly ad_group_id?: string;
  readonly shared_ad_group_key?: string;
}

export interface AndroidPrivacySharedKeyGoogleCampaign {
  readonly resource_name?: string;
  readonly campaign_id?: string;
  readonly android_privacy_interaction_type?: AndroidPrivacyInteractionType;
  readonly android_privacy_interaction_date?: string;
  readonly shared_campaign_key?: string;
}

export interface AndroidPrivacySharedKeyGoogleNetworkType {
  readonly resource_name?: string;
  readonly campaign_id?: string;
  readonly android_privacy_interaction_type?: AndroidPrivacyInteractionType;
  readonly android_privacy_interaction_date?: string;
  readonly android_privacy_network_type?: AndroidPrivacyNetworkType;
  readonly shared_network_type_key?: string;
}

export interface AppAdInfo {
  readonly mandatory_ad_text?: AdTextAsset;
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly images?: ReadonlyArray<AdImageAsset>;
  readonly youtube_videos?: ReadonlyArray<AdVideoAsset>;
  readonly html5_media_bundles?: ReadonlyArray<AdMediaBundleAsset>;
  readonly app_deep_link?: AdAppDeepLinkAsset;
}

export type AppBiddingGoal = "UNSPECIFIED" | "UNKNOWN" | "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME" | "OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME" | "OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE" | "OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION" | "OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND" | "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI" | "OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME";

export interface AppBiddingGoalEnum {

}

export type AppCampaignAppStore = "UNSPECIFIED" | "UNKNOWN" | "APPLE_APP_STORE" | "GOOGLE_APP_STORE";

export interface AppCampaignAppStoreEnum {

}

export type AppCampaignBiddingStrategyGoalType = "UNSPECIFIED" | "UNKNOWN" | "OPTIMIZE_INSTALLS_TARGET_INSTALL_COST" | "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST" | "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST" | "OPTIMIZE_RETURN_ON_ADVERTISING_SPEND" | "OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME" | "OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST" | "OPTIMIZE_IN_APP_CONVERSIONS_WITHOUT_TARGET_CPA" | "OPTIMIZE_TOTAL_VALUE_WITHOUT_TARGET_ROAS";

export interface AppCampaignBiddingStrategyGoalTypeEnum {

}

export interface AppCampaignSetting {
  readonly bidding_strategy_goal_type?: AppCampaignBiddingStrategyGoalType;
  readonly app_id?: string;
  readonly app_store?: AppCampaignAppStore;
}

export interface AppDeepLinkAsset {
  readonly app_deep_link_uri?: string;
}

export interface AppendLeadConversationRequest {
  readonly customer_id?: string;
  readonly conversations?: ReadonlyArray<Conversation>;
}

export interface AppendLeadConversationResponse {
  readonly responses?: ReadonlyArray<ConversationOrError>;
}

export interface AppEngagementAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly images?: ReadonlyArray<AdImageAsset>;
  readonly videos?: ReadonlyArray<AdVideoAsset>;
}

export type ApplicationInstance = "UNSPECIFIED" | "UNKNOWN" | "DEVELOPMENT_AND_TESTING" | "PRODUCTION";

export interface ApplicationInstanceEnum {

}

export interface AppliedIncentive {
  readonly resource_name?: string;
  readonly coupon_code?: string;
  readonly incentive_state?: IncentiveState;
  readonly redemption_date_time?: string;
  readonly fulfillment_expiration_date_time?: string;
  readonly reward_grant_date_time?: string;
  readonly reward_expiration_date_time?: string;
  readonly currency_code?: string;
  readonly reward_amount_micros?: string;
  readonly granted_amount_micros?: string;
  readonly required_min_spend_micros?: string;
  readonly current_spend_towards_fulfillment_micros?: string;
  readonly reward_balance_remaining_micros?: string;
}

export interface ApplyIncentiveRequest {
  readonly selected_incentive_id?: string;
  readonly customer_id?: string;
  readonly country_code?: string;
}

export interface ApplyIncentiveResponse {
  readonly coupon_code?: string;
  readonly creation_time?: string;
}

export interface ApplyRecommendationOperation {
  readonly resource_name?: string;
  readonly campaign_budget?: CampaignBudgetParameters;
  readonly text_ad?: TextAdParameters;
  readonly keyword?: KeywordParameters;
  readonly target_cpa_opt_in?: TargetCpaOptInParameters;
  readonly target_roas_opt_in?: TargetRoasOptInParameters;
  readonly callout_extension?: CalloutExtensionParameters;
  readonly call_extension?: CallExtensionParameters;
  readonly sitelink_extension?: SitelinkExtensionParameters;
  readonly move_unused_budget?: MoveUnusedBudgetParameters;
  readonly responsive_search_ad?: ResponsiveSearchAdParameters;
  readonly use_broad_match_keyword?: UseBroadMatchKeywordParameters;
  readonly responsive_search_ad_asset?: ResponsiveSearchAdAssetParameters;
  readonly responsive_search_ad_improve_ad_strength?: ResponsiveSearchAdImproveAdStrengthParameters;
  readonly raise_target_cpa_bid_too_low?: RaiseTargetCpaBidTooLowParameters;
  readonly forecasting_set_target_roas?: ForecastingSetTargetRoasParameters;
  readonly callout_asset?: CalloutAssetParameters;
  readonly call_asset?: CallAssetParameters;
  readonly sitelink_asset?: SitelinkAssetParameters;
  readonly raise_target_cpa?: RaiseTargetCpaParameters;
  readonly lower_target_roas?: LowerTargetRoasParameters;
  readonly forecasting_set_target_cpa?: ForecastingSetTargetCpaParameters;
  readonly set_target_cpa?: ForecastingSetTargetCpaParameters;
  readonly set_target_roas?: ForecastingSetTargetRoasParameters;
  readonly lead_form_asset?: LeadFormAssetParameters;
}

export interface ApplyRecommendationRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ApplyRecommendationOperation>;
  readonly partial_failure?: boolean;
}

export interface ApplyRecommendationResponse {
  readonly results?: ReadonlyArray<ApplyRecommendationResult>;
  readonly partial_failure_error?: unknown;
}

export interface ApplyRecommendationResult {
  readonly resource_name?: string;
}

export type ApplyScope = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER" | "CAMPAIGN";

export interface AppPaymentModelInfo {
  readonly type?: AppPaymentModelType;
}

export type AppPaymentModelType = "UNSPECIFIED" | "UNKNOWN" | "PAID";

export interface AppPaymentModelTypeEnum {

}

export interface AppPreRegistrationAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly images?: ReadonlyArray<AdImageAsset>;
  readonly youtube_videos?: ReadonlyArray<AdVideoAsset>;
}

export interface AppTopCombinationView {
  readonly resource_name?: string;
  readonly ad_group_top_combinations?: ReadonlyArray<AdGroupCreativeAssetCombinationData>;
}

export type AppUrlOperatingSystemType = "UNSPECIFIED" | "UNKNOWN" | "IOS" | "ANDROID";

export interface AppUrlOperatingSystemTypeEnum {

}

export interface Asset {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: AssetType;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly tracking_url_template?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly final_url_suffix?: string;
  readonly source?: AssetSource;
  readonly policy_summary?: AssetPolicySummary;
  readonly field_type_policy_summaries?: ReadonlyArray<AssetFieldTypePolicySummary>;
  readonly orientation?: AssetOrientation;
  readonly synthetic_content_info?: SyntheticContentInfo;
  readonly youtube_video_asset?: YoutubeVideoAsset;
  readonly media_bundle_asset?: MediaBundleAsset;
  readonly image_asset?: ImageAsset;
  readonly text_asset?: TextAsset;
  readonly lead_form_asset?: LeadFormAsset;
  readonly book_on_google_asset?: BookOnGoogleAsset;
  readonly promotion_asset?: PromotionAsset;
  readonly callout_asset?: CalloutAsset;
  readonly structured_snippet_asset?: StructuredSnippetAsset;
  readonly sitelink_asset?: SitelinkAsset;
  readonly page_feed_asset?: PageFeedAsset;
  readonly dynamic_education_asset?: DynamicEducationAsset;
  readonly mobile_app_asset?: MobileAppAsset;
  readonly hotel_callout_asset?: HotelCalloutAsset;
  readonly call_asset?: CallAsset;
  readonly price_asset?: PriceAsset;
  readonly call_to_action_asset?: CallToActionAsset;
  readonly dynamic_real_estate_asset?: DynamicRealEstateAsset;
  readonly dynamic_custom_asset?: DynamicCustomAsset;
  readonly dynamic_hotels_and_rentals_asset?: DynamicHotelsAndRentalsAsset;
  readonly dynamic_flights_asset?: DynamicFlightsAsset;
  readonly demand_gen_carousel_card_asset?: DemandGenCarouselCardAsset;
  readonly dynamic_travel_asset?: DynamicTravelAsset;
  readonly dynamic_local_asset?: DynamicLocalAsset;
  readonly dynamic_jobs_asset?: DynamicJobsAsset;
  readonly location_asset?: LocationAsset;
  readonly hotel_property_asset?: HotelPropertyAsset;
  readonly business_message_asset?: BusinessMessageAsset;
  readonly app_deep_link_asset?: AppDeepLinkAsset;
  readonly youtube_video_list_asset?: YouTubeVideoListAsset;
}

export interface AssetAutomationSetting {
  readonly asset_automation_type?: AssetAutomationType;
  readonly asset_automation_status?: AssetAutomationStatus;
}

export type AssetAutomationStatus = "UNSPECIFIED" | "UNKNOWN" | "OPTED_IN" | "OPTED_OUT";

export interface AssetAutomationStatusEnum {

}

export type AssetAutomationType = "UNSPECIFIED" | "UNKNOWN" | "TEXT_ASSET_AUTOMATION" | "GENERATE_VERTICAL_YOUTUBE_VIDEOS" | "GENERATE_SHORTER_YOUTUBE_VIDEOS" | "GENERATE_LANDING_PAGE_PREVIEW" | "GENERATE_LANDING_PAGE_TEXT" | "GENERATE_ENHANCED_YOUTUBE_VIDEOS" | "GENERATE_IMAGE_ENHANCEMENT" | "GENERATE_IMAGE_EXTRACTION" | "GENERATE_DESIGN_VERSIONS_FOR_IMAGES" | "FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION" | "GENERATE_VIDEOS_FROM_OTHER_ASSETS" | "GENERATE_ANIMATED_IMAGES_FROM_OTHER_ASSETS";

export interface AssetAutomationTypeEnum {

}

export interface AssetCoverage {
  readonly ad_strength_action_items?: ReadonlyArray<AdStrengthActionItem>;
}

export type AssetCoverageVideoAspectRatioRequirement = "UNSPECIFIED" | "UNKNOWN" | "HORIZONTAL" | "SQUARE" | "VERTICAL";

export interface AssetCoverageVideoAspectRatioRequirementEnum {

}

export interface AssetDetail {
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly asset_detail_operation?: ExperimentAssetDetailOperation;
}

export interface AssetDisapproved {
  readonly offline_evaluation_error_reasons?: ReadonlyArray<AssetOfflineEvaluationErrorReasons>;
}

export type AssetError = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_ASSET_TYPE" | "DUPLICATE_ASSET" | "DUPLICATE_ASSET_NAME" | "ASSET_DATA_IS_MISSING" | "CANNOT_MODIFY_ASSET_NAME" | "FIELD_INCOMPATIBLE_WITH_ASSET_TYPE" | "INVALID_CALL_TO_ACTION_TEXT" | "LEAD_FORM_INVALID_FIELDS_COMBINATION" | "LEAD_FORM_MISSING_AGREEMENT" | "INVALID_ASSET_STATUS" | "FIELD_CANNOT_BE_MODIFIED_FOR_ASSET_TYPE" | "SCHEDULES_CANNOT_OVERLAP" | "PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF" | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT" | "TOO_MANY_DECIMAL_PLACES_SPECIFIED" | "DUPLICATE_ASSETS_WITH_DIFFERENT_FIELD_VALUE" | "CALL_CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" | "CALL_CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" | "CALL_DISALLOWED_NUMBER_TYPE" | "CALL_INVALID_CONVERSION_ACTION" | "CALL_INVALID_COUNTRY_CODE" | "CALL_INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" | "CALL_INVALID_PHONE_NUMBER" | "CALL_PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" | "CALL_PREMIUM_RATE_NUMBER_NOT_ALLOWED" | "CALL_VANITY_PHONE_NUMBER_NOT_ALLOWED" | "PRICE_HEADER_SAME_AS_DESCRIPTION" | "MOBILE_APP_INVALID_APP_ID" | "MOBILE_APP_INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL" | "NAME_REQUIRED_FOR_ASSET_TYPE" | "LEAD_FORM_LEGACY_QUALIFYING_QUESTIONS_DISALLOWED" | "NAME_CONFLICT_FOR_ASSET_TYPE" | "CANNOT_MODIFY_ASSET_SOURCE" | "CANNOT_MODIFY_AUTOMATICALLY_CREATED_ASSET" | "LEAD_FORM_LOCATION_ANSWER_TYPE_DISALLOWED" | "PAGE_FEED_INVALID_LABEL_TEXT" | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_WHATSAPP_MESSAGE_ASSETS" | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_APP_DEEP_LINK_ASSETS" | "PROMOTION_BARCODE_CANNOT_CONTAIN_LINKS" | "PROMOTION_BARCODE_INVALID_FORMAT" | "UNSUPPORTED_BARCODE_TYPE" | "PROMOTION_QR_CODE_CANNOT_CONTAIN_LINKS" | "PROMOTION_QR_CODE_INVALID_FORMAT" | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_MESSAGE_ASSETS";

export interface AssetErrorEnum {

}

export type AssetFieldType = "UNSPECIFIED" | "UNKNOWN" | "HEADLINE" | "DESCRIPTION" | "MANDATORY_AD_TEXT" | "MARKETING_IMAGE" | "MEDIA_BUNDLE" | "YOUTUBE_VIDEO" | "BOOK_ON_GOOGLE" | "LEAD_FORM" | "PROMOTION" | "CALLOUT" | "STRUCTURED_SNIPPET" | "SITELINK" | "MOBILE_APP" | "HOTEL_CALLOUT" | "CALL" | "PRICE" | "LONG_HEADLINE" | "BUSINESS_NAME" | "SQUARE_MARKETING_IMAGE" | "PORTRAIT_MARKETING_IMAGE" | "LOGO" | "LANDSCAPE_LOGO" | "VIDEO" | "CALL_TO_ACTION_SELECTION" | "AD_IMAGE" | "BUSINESS_LOGO" | "HOTEL_PROPERTY" | "DEMAND_GEN_CAROUSEL_CARD" | "BUSINESS_MESSAGE" | "TALL_PORTRAIT_MARKETING_IMAGE" | "RELATED_YOUTUBE_VIDEOS" | "LANDING_PAGE_PREVIEW" | "LONG_DESCRIPTION" | "CALL_TO_ACTION" | "CLASSIC_DISPLAY_IMAGE";

export interface AssetFieldTypeEnum {

}

export interface AssetFieldTypePolicySummary {
  readonly asset_field_type?: AssetFieldType;
  readonly asset_source?: AssetSource;
  readonly policy_summary_info?: AssetPolicySummary;
}

export interface AssetFieldTypeView {
  readonly resource_name?: string;
  readonly field_type?: AssetFieldType;
}

export type AssetGenerationError = "UNSPECIFIED" | "UNKNOWN" | "NO_ASSETS_GENERATED" | "FINAL_URL_REQUIRED" | "GENERATION_CONTEXT_MISSING_FINAL_URL" | "FINAL_URL_SENSITIVE" | "FINAL_URL_UNSUPPORTED_LANGUAGE" | "FINAL_URL_UNAVAILABLE" | "CAMPAIGN_TYPE_REQUIRED" | "UNSUPPORTED_CAMPAIGN_TYPE" | "UNSUPPORTED_FIELD_TYPE" | "UNSUPPORTED_FIELD_TYPE_FOR_CAMPAIGN_TYPE" | "FREEFORM_PROMPT_UNSUPPORTED_LANGUAGE" | "FREEFORM_PROMPT_SENSITIVE" | "INPUT_IMAGE_FILE_SIZE_TOO_LARGE" | "INPUT_IMAGE_EMPTY" | "GENERATION_TYPE_REQUIRED" | "TOO_MANY_KEYWORDS" | "KEYWORD_INVALID_LENGTH" | "NO_VALID_KEYWORDS" | "FREEFORM_PROMPT_INVALID_LENGTH" | "FREEFORM_PROMPT_REFERENCES_CHILDREN" | "FREEFORM_PROMPT_REFERENCES_SPECIFIC_PEOPLE" | "FREEFORM_PROMPT_VIOLATES_ADS_POLICY" | "FREEFORM_PROMPT_BRAND_CONTENT" | "INPUT_IMAGE_DEPICTS_CHILDREN" | "INPUT_IMAGE_CONTAINS_BRAND_CONTENT" | "INPUT_IMAGE_SENSITIVE" | "INPUT_IMAGE_VIOLATES_POLICY" | "ALL_OUTPUT_IMAGES_FILTERED_OUT_CHILDREN_DEPICTION" | "ALL_OUTPUT_IMAGES_FILTERED_OUT_SPECIFIC_PEOPLE" | "ALL_OUTPUT_IMAGES_FILTERED_OUT" | "INPUT_IMAGE_REQUIRED" | "INPUT_IMAGE_UNSUPPORTED_IMAGE_TYPE" | "CONTEXT_ASSET_GROUP_NOT_FOUND" | "CONTEXT_AD_GROUP_AD_NOT_FOUND" | "CONTEXT_CAMPAIGN_NOT_FOUND";

export interface AssetGenerationErrorEnum {

}

export interface AssetGenerationExistingContext {
  readonly existing_asset_group?: string;
  readonly existing_ad_group_ad?: string;
}

export interface AssetGroup {
  readonly resource_name?: string;
  readonly id?: string;
  readonly campaign?: string;
  readonly name?: string;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly status?: AssetGroupStatus;
  readonly primary_status?: AssetGroupPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<AssetGroupPrimaryStatusReason>;
  readonly path1?: string;
  readonly path2?: string;
  readonly ad_strength?: AdStrength;
  readonly asset_coverage?: AssetCoverage;
  readonly google_local_services_info?: GoogleLocalServicesInfo;
}

export interface AssetGroupAsset {
  readonly resource_name?: string;
  readonly asset_group?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly status?: AssetLinkStatus;
  readonly primary_status?: AssetLinkPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<AssetLinkPrimaryStatusReason>;
  readonly primary_status_details?: ReadonlyArray<AssetLinkPrimaryStatusDetails>;
  readonly policy_summary?: PolicySummary;
  readonly source?: AssetSource;
}

export interface AssetGroupAssetCombinationData {
  readonly asset_combination_served_assets?: ReadonlyArray<AssetUsage>;
}

export type AssetGroupAssetError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_RESOURCE" | "EXPANDABLE_TAGS_NOT_ALLOWED_IN_DESCRIPTION" | "AD_CUSTOMIZER_NOT_SUPPORTED" | "HOTEL_PROPERTY_ASSET_NOT_LINKED_TO_CAMPAIGN";

export interface AssetGroupAssetErrorEnum {

}

export interface AssetGroupAssetInfo {
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
}

export interface AssetGroupAssetOperation {
  readonly update_mask?: string;
  readonly create?: AssetGroupAsset;
  readonly update?: AssetGroupAsset;
  readonly remove?: string;
}

export type AssetGroupError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_NAME" | "CANNOT_ADD_ASSET_GROUP_FOR_CAMPAIGN_TYPE" | "NOT_ENOUGH_HEADLINE_ASSET" | "NOT_ENOUGH_LONG_HEADLINE_ASSET" | "NOT_ENOUGH_DESCRIPTION_ASSET" | "NOT_ENOUGH_BUSINESS_NAME_ASSET" | "NOT_ENOUGH_MARKETING_IMAGE_ASSET" | "NOT_ENOUGH_SQUARE_MARKETING_IMAGE_ASSET" | "NOT_ENOUGH_LOGO_ASSET" | "FINAL_URL_SHOPPING_MERCHANT_HOME_PAGE_URL_DOMAINS_DIFFER" | "PATH1_REQUIRED_WHEN_PATH2_IS_SET" | "SHORT_DESCRIPTION_REQUIRED" | "FINAL_URL_REQUIRED" | "FINAL_URL_CONTAINS_INVALID_DOMAIN_NAME" | "AD_CUSTOMIZER_NOT_SUPPORTED" | "CANNOT_MUTATE_ASSET_GROUP_FOR_REMOVED_CAMPAIGN" | "CANNOT_REMOVE_ALL_ASSET_GROUPS_FROM_CAMPAIGN";

export interface AssetGroupErrorEnum {

}

export interface AssetGroupInfo {
  readonly asset_group?: string;
  readonly asset_group_assets?: ReadonlyArray<AssetGroupAssetInfo>;
}

export interface AssetGroupListingGroupFilter {
  readonly resource_name?: string;
  readonly asset_group?: string;
  readonly id?: string;
  readonly type?: ListingGroupFilterType;
  readonly listing_source?: ListingGroupFilterListingSource;
  readonly case_value?: ListingGroupFilterDimension;
  readonly parent_listing_group_filter?: string;
  readonly path?: ListingGroupFilterDimensionPath;
}

export type AssetGroupListingGroupFilterError = "UNSPECIFIED" | "UNKNOWN" | "TREE_TOO_DEEP" | "UNIT_CANNOT_HAVE_CHILDREN" | "SUBDIVISION_MUST_HAVE_EVERYTHING_ELSE_CHILD" | "DIFFERENT_DIMENSION_TYPE_BETWEEN_SIBLINGS" | "SAME_DIMENSION_VALUE_BETWEEN_SIBLINGS" | "SAME_DIMENSION_TYPE_BETWEEN_ANCESTORS" | "MULTIPLE_ROOTS" | "INVALID_DIMENSION_VALUE" | "MUST_REFINE_HIERARCHICAL_PARENT_TYPE" | "INVALID_PRODUCT_BIDDING_CATEGORY" | "CHANGING_CASE_VALUE_WITH_CHILDREN" | "SUBDIVISION_HAS_CHILDREN" | "CANNOT_REFINE_HIERARCHICAL_EVERYTHING_ELSE" | "DIMENSION_TYPE_NOT_ALLOWED" | "DUPLICATE_WEBPAGE_FILTER_UNDER_ASSET_GROUP" | "LISTING_SOURCE_NOT_ALLOWED" | "FILTER_EXCLUSION_NOT_ALLOWED" | "MULTIPLE_LISTING_SOURCES" | "MULTIPLE_WEBPAGE_CONDITION_TYPES_NOT_ALLOWED" | "MULTIPLE_WEBPAGE_TYPES_PER_ASSET_GROUP" | "PAGE_FEED_FILTER_HAS_PARENT" | "MULTIPLE_OPERATIONS_ON_ONE_NODE" | "TREE_WAS_INVALID_BEFORE_MUTATION" | "RETAIL_INVALID_SHARED_SET_TYPE";

export interface AssetGroupListingGroupFilterErrorEnum {

}

export interface AssetGroupListingGroupFilterOperation {
  readonly update_mask?: string;
  readonly create?: AssetGroupListingGroupFilter;
  readonly update?: AssetGroupListingGroupFilter;
  readonly remove?: string;
}

export interface AssetGroupOperation {
  readonly update_mask?: string;
  readonly create?: AssetGroup;
  readonly update?: AssetGroup;
  readonly remove?: string;
}

export type AssetGroupPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "NOT_ELIGIBLE" | "LIMITED" | "PENDING";

export interface AssetGroupPrimaryStatusEnum {

}

export type AssetGroupPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "ASSET_GROUP_PAUSED" | "ASSET_GROUP_REMOVED" | "CAMPAIGN_REMOVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_PENDING" | "CAMPAIGN_ENDED" | "ASSET_GROUP_LIMITED" | "ASSET_GROUP_DISAPPROVED" | "ASSET_GROUP_UNDER_REVIEW";

export interface AssetGroupPrimaryStatusReasonEnum {

}

export interface AssetGroupProductGroupView {
  readonly resource_name?: string;
  readonly asset_group?: string;
  readonly asset_group_listing_group_filter?: string;
}

export interface AssetGroupSignal {
  readonly resource_name?: string;
  readonly asset_group?: string;
  readonly approval_status?: AssetGroupSignalApprovalStatus;
  readonly disapproval_reasons?: ReadonlyArray<string>;
  readonly audience?: AudienceInfo;
  readonly search_theme?: SearchThemeInfo;
  readonly local_services_id?: LocalServiceIdInfo;
  readonly vertical_ads_item_group_rule_list?: VerticalAdsItemGroupRuleListInfo;
}

export type AssetGroupSignalApprovalStatus = "UNSPECIFIED" | "UNKNOWN" | "APPROVED" | "LIMITED" | "DISAPPROVED" | "UNDER_REVIEW";

export interface AssetGroupSignalApprovalStatusEnum {

}

export type AssetGroupSignalError = "UNSPECIFIED" | "UNKNOWN" | "TOO_MANY_WORDS" | "SEARCH_THEME_POLICY_VIOLATION" | "AUDIENCE_WITH_WRONG_ASSET_GROUP_ID" | "CANNOT_REMOVE_ALL_SIGNALS";

export interface AssetGroupSignalErrorEnum {

}

export interface AssetGroupSignalOperation {
  readonly exempt_policy_violation_keys?: ReadonlyArray<PolicyViolationKey>;
  readonly create?: AssetGroupSignal;
  readonly remove?: string;
}

export type AssetGroupStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface AssetGroupStatusEnum {

}

export interface AssetGroupTopCombinationView {
  readonly resource_name?: string;
  readonly asset_group_top_combinations?: ReadonlyArray<AssetGroupAssetCombinationData>;
}

export interface AssetInteractionTarget {
  readonly asset?: string;
  readonly interaction_on_this_asset?: boolean;
}

export type AssetLinkError = "UNSPECIFIED" | "UNKNOWN" | "PINNING_UNSUPPORTED" | "UNSUPPORTED_FIELD_TYPE" | "FIELD_TYPE_INCOMPATIBLE_WITH_ASSET_TYPE" | "FIELD_TYPE_INCOMPATIBLE_WITH_CAMPAIGN_TYPE" | "INCOMPATIBLE_ADVERTISING_CHANNEL_TYPE" | "IMAGE_NOT_WITHIN_SPECIFIED_DIMENSION_RANGE" | "INVALID_PINNED_FIELD" | "MEDIA_BUNDLE_ASSET_FILE_SIZE_TOO_LARGE" | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_FOR_VALID_COMBINATION" | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_WITH_FALLBACK" | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_WITH_FALLBACK_FOR_VALID_COMBINATION" | "YOUTUBE_VIDEO_REMOVED" | "YOUTUBE_VIDEO_TOO_LONG" | "YOUTUBE_VIDEO_TOO_SHORT" | "EXCLUDED_PARENT_FIELD_TYPE" | "INVALID_STATUS" | "YOUTUBE_VIDEO_DURATION_NOT_DEFINED" | "CANNOT_CREATE_AUTOMATICALLY_CREATED_LINKS" | "CANNOT_LINK_TO_AUTOMATICALLY_CREATED_ASSET" | "CANNOT_MODIFY_ASSET_LINK_SOURCE" | "CANNOT_LINK_LOCATION_LEAD_FORM_WITHOUT_LOCATION_ASSET" | "CUSTOMER_NOT_VERIFIED" | "UNSUPPORTED_CALL_TO_ACTION" | "BRAND_ASSETS_NOT_LINKED_AT_ASSET_GROUP_LEVEL" | "BRAND_ASSETS_NOT_LINKED_AT_CAMPAIGN_LEVEL";

export interface AssetLinkErrorEnum {

}

export type AssetLinkPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "PENDING" | "LIMITED" | "NOT_ELIGIBLE";

export interface AssetLinkPrimaryStatusDetails {
  readonly reason?: AssetLinkPrimaryStatusReason;
  readonly status?: AssetLinkPrimaryStatus;
  readonly asset_disapproved?: AssetDisapproved;
}

export interface AssetLinkPrimaryStatusEnum {

}

export type AssetLinkPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "ASSET_LINK_PAUSED" | "ASSET_LINK_REMOVED" | "ASSET_DISAPPROVED" | "ASSET_UNDER_REVIEW" | "ASSET_APPROVED_LABELED";

export interface AssetLinkPrimaryStatusReasonEnum {

}

export type AssetLinkStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "PAUSED";

export interface AssetLinkStatusEnum {

}

export type AssetOfflineEvaluationErrorReasons = "UNSPECIFIED" | "UNKNOWN" | "PRICE_ASSET_DESCRIPTION_REPEATS_ROW_HEADER" | "PRICE_ASSET_REPETITIVE_HEADERS" | "PRICE_ASSET_HEADER_INCOMPATIBLE_WITH_PRICE_TYPE" | "PRICE_ASSET_DESCRIPTION_INCOMPATIBLE_WITH_ITEM_HEADER" | "PRICE_ASSET_DESCRIPTION_HAS_PRICE_QUALIFIER" | "PRICE_ASSET_UNSUPPORTED_LANGUAGE" | "PRICE_ASSET_OTHER_ERROR";

export interface AssetOfflineEvaluationErrorReasonsEnum {

}

export interface AssetOperation {
  readonly update_mask?: string;
  readonly create?: Asset;
  readonly update?: Asset;
}

export type AssetOrientation = "UNSPECIFIED" | "UNKNOWN" | "LANDSCAPE" | "PORTRAIT" | "SQUARE";

export interface AssetOrientationEnum {

}

export type AssetPerformanceLabel = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "LEARNING" | "LOW" | "GOOD" | "BEST" | "NOT_APPLICABLE";

export interface AssetPerformanceLabelEnum {

}

export interface AssetPolicySummary {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
  readonly review_status?: PolicyReviewStatus;
  readonly approval_status?: PolicyApprovalStatus;
}

export interface AssetSet {
  readonly id?: string;
  readonly resource_name?: string;
  readonly name?: string;
  readonly type?: AssetSetType;
  readonly status?: AssetSetStatus;
  readonly merchant_center_feed?: MerchantCenterFeed;
  readonly location_group_parent_asset_set_id?: string;
  readonly hotel_property_data?: HotelPropertyData;
  readonly travel_feed_data?: TravelFeedData;
  readonly location_set?: LocationSet;
  readonly business_profile_location_group?: BusinessProfileLocationGroup;
  readonly chain_location_group?: ChainLocationGroup;
}

export interface AssetSetAsset {
  readonly resource_name?: string;
  readonly asset_set?: string;
  readonly asset?: string;
  readonly status?: AssetSetAssetStatus;
}

export type AssetSetAssetError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_ASSET_TYPE" | "INVALID_ASSET_SET_TYPE" | "DUPLICATE_EXTERNAL_KEY" | "PARENT_LINKAGE_DOES_NOT_EXIST";

export interface AssetSetAssetErrorEnum {

}

export interface AssetSetAssetOperation {
  readonly create?: AssetSetAsset;
  readonly remove?: string;
}

export type AssetSetAssetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface AssetSetAssetStatusEnum {

}

export type AssetSetError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_ASSET_SET_NAME" | "INVALID_PARENT_ASSET_SET_TYPE" | "ASSET_SET_SOURCE_INCOMPATIBLE_WITH_PARENT_ASSET_SET" | "ASSET_SET_TYPE_CANNOT_BE_LINKED_TO_CUSTOMER" | "INVALID_CHAIN_IDS" | "LOCATION_SYNC_ASSET_SET_DOES_NOT_SUPPORT_RELATIONSHIP_TYPE" | "NOT_UNIQUE_ENABLED_LOCATION_SYNC_TYPED_ASSET_SET" | "INVALID_PLACE_IDS" | "OAUTH_INFO_INVALID" | "OAUTH_INFO_MISSING" | "CANNOT_DELETE_AS_ENABLED_LINKAGES_EXIST";

export interface AssetSetErrorEnum {

}

export type AssetSetLinkError = "UNSPECIFIED" | "UNKNOWN" | "INCOMPATIBLE_ADVERTISING_CHANNEL_TYPE" | "DUPLICATE_FEED_LINK" | "INCOMPATIBLE_ASSET_SET_TYPE_WITH_CAMPAIGN_TYPE" | "DUPLICATE_ASSET_SET_LINK" | "ASSET_SET_LINK_CANNOT_BE_REMOVED";

export interface AssetSetLinkErrorEnum {

}

export type AssetSetLinkStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface AssetSetLinkStatusEnum {

}

export interface AssetSetOperation {
  readonly update_mask?: string;
  readonly create?: AssetSet;
  readonly update?: AssetSet;
  readonly remove?: string;
}

export type AssetSetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface AssetSetStatusEnum {

}

export type AssetSetType = "UNSPECIFIED" | "UNKNOWN" | "PAGE_FEED" | "DYNAMIC_EDUCATION" | "MERCHANT_CENTER_FEED" | "DYNAMIC_REAL_ESTATE" | "DYNAMIC_CUSTOM" | "DYNAMIC_HOTELS_AND_RENTALS" | "DYNAMIC_FLIGHTS" | "DYNAMIC_TRAVEL" | "DYNAMIC_LOCAL" | "DYNAMIC_JOBS" | "LOCATION_SYNC" | "BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP" | "CHAIN_DYNAMIC_LOCATION_GROUP" | "STATIC_LOCATION_GROUP" | "HOTEL_PROPERTY" | "TRAVEL_FEED";

export interface AssetSetTypeEnum {

}

export interface AssetSetTypeView {
  readonly resource_name?: string;
  readonly asset_set_type?: AssetSetType;
}

export type AssetSource = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER" | "AUTOMATICALLY_CREATED";

export interface AssetSourceEnum {

}

export interface AssetsWithFieldType {
  readonly asset?: string;
  readonly asset_field_type?: AssetFieldType;
}

export interface AssetTestingInfo {
  readonly asset_variation_infos?: ReadonlyArray<AssetVariationInfo>;
}

export type AssetType = "UNSPECIFIED" | "UNKNOWN" | "YOUTUBE_VIDEO" | "MEDIA_BUNDLE" | "IMAGE" | "TEXT" | "LEAD_FORM" | "BOOK_ON_GOOGLE" | "PROMOTION" | "CALLOUT" | "STRUCTURED_SNIPPET" | "SITELINK" | "PAGE_FEED" | "DYNAMIC_EDUCATION" | "MOBILE_APP" | "HOTEL_CALLOUT" | "CALL" | "PRICE" | "CALL_TO_ACTION" | "DYNAMIC_REAL_ESTATE" | "DYNAMIC_CUSTOM" | "DYNAMIC_HOTELS_AND_RENTALS" | "DYNAMIC_FLIGHTS" | "DYNAMIC_TRAVEL" | "DYNAMIC_LOCAL" | "DYNAMIC_JOBS" | "LOCATION" | "HOTEL_PROPERTY" | "DEMAND_GEN_CAROUSEL_CARD" | "BUSINESS_MESSAGE" | "APP_DEEP_LINK" | "YOUTUBE_VIDEO_LIST";

export interface AssetTypeEnum {

}

export interface AssetUsage {
  readonly asset?: string;
  readonly served_asset_field_type?: ServedAssetFieldType;
}

export interface AssetVariationInfo {
  readonly base_ad_group?: string;
  readonly base_ad?: string;
  readonly asset_details?: ReadonlyArray<AssetDetail>;
}

export type AsyncActionStatus = "UNSPECIFIED" | "UNKNOWN" | "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "COMPLETED_WITH_WARNING";

export interface AsyncActionStatusEnum {

}

export interface Attribute {
  readonly key?: string;
  readonly value?: string;
}

export type AttributionModel = "UNSPECIFIED" | "UNKNOWN" | "EXTERNAL" | "GOOGLE_ADS_LAST_CLICK" | "GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK" | "GOOGLE_SEARCH_ATTRIBUTION_LINEAR" | "GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY" | "GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED" | "GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN";

export interface AttributionModelEnum {

}

export interface AttributionModelSettings {
  readonly attribution_model?: AttributionModel;
  readonly data_driven_model_status?: DataDrivenModelStatus;
}

export interface Audience {
  readonly resource_name?: string;
  readonly id?: string;
  readonly status?: AudienceStatus;
  readonly name?: string;
  readonly description?: string;
  readonly dimensions?: ReadonlyArray<AudienceDimension>;
  readonly exclusion_dimension?: AudienceExclusionDimension;
  readonly scope?: AudienceScope;
  readonly asset_group?: string;
}

export interface AudienceCompositionAttribute {
  readonly attribute_metadata?: AudienceInsightsAttributeMetadata;
  readonly metrics?: AudienceCompositionMetrics;
}

export interface AudienceCompositionAttributeCluster {
  readonly cluster_display_name?: string;
  readonly cluster_metrics?: AudienceCompositionMetrics;
  readonly attributes?: ReadonlyArray<AudienceCompositionAttribute>;
}

export interface AudienceCompositionMetrics {
  readonly baseline_audience_share?: number;
  readonly audience_share?: number;
  readonly index?: number;
  readonly score?: number;
}

export interface AudienceCompositionSection {
  readonly dimension?: AudienceInsightsDimension;
  readonly top_attributes?: ReadonlyArray<AudienceCompositionAttribute>;
  readonly clustered_attributes?: ReadonlyArray<AudienceCompositionAttributeCluster>;
}

export interface AudienceDimension {
  readonly age?: AgeDimension;
  readonly gender?: GenderDimension;
  readonly household_income?: HouseholdIncomeDimension;
  readonly parental_status?: ParentalStatusDimension;
  readonly audience_segments?: AudienceSegmentDimension;
}

export type AudienceError = "UNSPECIFIED" | "UNKNOWN" | "NAME_ALREADY_IN_USE" | "DIMENSION_INVALID" | "AUDIENCE_SEGMENT_NOT_FOUND" | "AUDIENCE_SEGMENT_TYPE_NOT_SUPPORTED" | "DUPLICATE_AUDIENCE_SEGMENT" | "TOO_MANY_SEGMENTS" | "TOO_MANY_DIMENSIONS_OF_SAME_TYPE" | "IN_USE" | "MISSING_ASSET_GROUP_ID" | "CANNOT_CHANGE_FROM_CUSTOMER_TO_ASSET_GROUP_SCOPE";

export interface AudienceErrorEnum {

}

export interface AudienceExclusionDimension {
  readonly exclusions?: ReadonlyArray<ExclusionSegment>;
}

export interface AudienceInfo {
  readonly audience?: string;
}

export interface AudienceInsightsAttribute {
  readonly age_range?: AgeRangeInfo;
  readonly gender?: GenderInfo;
  readonly location?: LocationInfo;
  readonly user_interest?: UserInterestInfo;
  readonly entity?: AudienceInsightsEntity;
  readonly category?: AudienceInsightsCategory;
  readonly lineup?: AudienceInsightsLineup;
  readonly parental_status?: ParentalStatusInfo;
  readonly income_range?: IncomeRangeInfo;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly youtube_video?: YouTubeVideoInfo;
  readonly device?: DeviceInfo;
  readonly user_list?: UserListInfo;
}

export interface AudienceInsightsAttributeMetadata {
  readonly dimension?: AudienceInsightsDimension;
  readonly attribute?: AudienceInsightsAttribute;
  readonly display_name?: string;
  readonly display_info?: string;
  readonly potential_youtube_reach?: string;
  readonly subscriber_share?: number;
  readonly viewer_share?: number;
  readonly youtube_channel_metadata?: YouTubeChannelAttributeMetadata;
  readonly youtube_video_metadata?: YouTubeVideoAttributeMetadata;
  readonly lineup_attribute_metadata?: LineupAttributeMetadata;
  readonly location_attribute_metadata?: LocationAttributeMetadata;
  readonly user_interest_attribute_metadata?: UserInterestAttributeMetadata;
  readonly knowledge_graph_attribute_metadata?: KnowledgeGraphAttributeMetadata;
  readonly user_list_attribute_metadata?: UserListAttributeMetadata;
}

export interface AudienceInsightsAttributeMetadataGroup {
  readonly attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
}

export interface AudienceInsightsCategory {
  readonly category_id?: string;
}

export type AudienceInsightsDimension = "UNSPECIFIED" | "UNKNOWN" | "CATEGORY" | "KNOWLEDGE_GRAPH" | "GEO_TARGET_COUNTRY" | "SUB_COUNTRY_LOCATION" | "YOUTUBE_CHANNEL" | "AFFINITY_USER_INTEREST" | "IN_MARKET_USER_INTEREST" | "PARENTAL_STATUS" | "INCOME_RANGE" | "AGE_RANGE" | "GENDER" | "YOUTUBE_VIDEO" | "DEVICE" | "YOUTUBE_LINEUP" | "USER_LIST" | "LIFE_EVENT_USER_INTEREST";

export interface AudienceInsightsDimensionEnum {

}

export interface AudienceInsightsDimensions {
  readonly dimensions?: ReadonlyArray<AudienceInsightsDimension>;
}

export interface AudienceInsightsEntity {
  readonly knowledge_graph_machine_id?: string;
}

export type AudienceInsightsError = "UNSPECIFIED" | "UNKNOWN" | "DIMENSION_INCOMPATIBLE_WITH_TOPIC_AUDIENCE_COMBINATIONS";

export interface AudienceInsightsErrorEnum {

}

export interface AudienceInsightsLineup {
  readonly lineup_id?: string;
}

export type AudienceInsightsMarketingObjective = "UNSPECIFIED" | "UNKNOWN" | "AWARENESS" | "CONSIDERATION" | "RESEARCH";

export interface AudienceInsightsMarketingObjectiveEnum {

}

export interface AudienceOperation {
  readonly update_mask?: string;
  readonly create?: Audience;
  readonly update?: Audience;
}

export interface AudienceOverlapItem {
  readonly attribute_metadata?: AudienceInsightsAttributeMetadata;
  readonly potential_youtube_reach_intersection?: string;
}

export type AudienceScope = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER" | "ASSET_GROUP";

export interface AudienceScopeEnum {

}

export interface AudienceSegment {
  readonly user_list?: UserListSegment;
  readonly user_interest?: UserInterestSegment;
  readonly life_event?: LifeEventSegment;
  readonly detailed_demographic?: DetailedDemographicSegment;
  readonly custom_audience?: CustomAudienceSegment;
}

export interface AudienceSegmentDimension {
  readonly segments?: ReadonlyArray<AudienceSegment>;
}

export interface AudienceSetting {
  readonly use_audience_grouped?: boolean;
}

export type AudienceStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface AudienceStatusEnum {

}

export interface AudienceTargeting {
  readonly user_interest?: ReadonlyArray<UserInterestInfo>;
  readonly user_lists?: ReadonlyArray<UserListInfo>;
}

export type AuthenticationError = "UNSPECIFIED" | "UNKNOWN" | "AUTHENTICATION_ERROR" | "CLIENT_CUSTOMER_ID_INVALID" | "CUSTOMER_NOT_FOUND" | "GOOGLE_ACCOUNT_DELETED" | "GOOGLE_ACCOUNT_COOKIE_INVALID" | "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED" | "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH" | "LOGIN_COOKIE_REQUIRED" | "NOT_ADS_USER" | "OAUTH_TOKEN_INVALID" | "OAUTH_TOKEN_EXPIRED" | "OAUTH_TOKEN_DISABLED" | "OAUTH_TOKEN_REVOKED" | "OAUTH_TOKEN_HEADER_INVALID" | "LOGIN_COOKIE_INVALID" | "INVALID_EMAIL_ADDRESS" | "USER_ID_INVALID" | "TWO_STEP_VERIFICATION_NOT_ENROLLED" | "ADVANCED_PROTECTION_NOT_ENROLLED" | "ORGANIZATION_NOT_RECOGNIZED" | "ORGANIZATION_NOT_APPROVED" | "ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN" | "DEVELOPER_TOKEN_INVALID";

export interface AuthenticationErrorEnum {

}

export type AuthorizationError = "UNSPECIFIED" | "UNKNOWN" | "USER_PERMISSION_DENIED" | "DEVELOPER_TOKEN_NOT_ON_ALLOWLIST" | "DEVELOPER_TOKEN_PROHIBITED" | "PROJECT_DISABLED" | "AUTHORIZATION_ERROR" | "ACTION_NOT_PERMITTED" | "INCOMPLETE_SIGNUP" | "CUSTOMER_NOT_ENABLED" | "MISSING_TOS" | "DEVELOPER_TOKEN_NOT_APPROVED" | "INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION" | "SERVICE_ACCESS_DENIED" | "ACCESS_DENIED_FOR_ACCOUNT_TYPE" | "METRIC_ACCESS_DENIED" | "CLOUD_PROJECT_NOT_UNDER_ORGANIZATION" | "ACTION_NOT_PERMITTED_FOR_SUSPENDED_ACCOUNT";

export interface AuthorizationErrorEnum {

}

export type AutomaticallyCreatedAssetRemovalError = "UNSPECIFIED" | "UNKNOWN" | "AD_DOES_NOT_EXIST" | "INVALID_AD_TYPE" | "ASSET_DOES_NOT_EXIST" | "ASSET_FIELD_TYPE_DOES_NOT_MATCH" | "NOT_AN_AUTOMATICALLY_CREATED_ASSET";

export interface AutomaticallyCreatedAssetRemovalErrorEnum {

}

export interface BackgroundCheckVerificationArtifact {
  readonly case_url?: string;
  readonly final_adjudication_date_time?: string;
}

export interface BasicUserListInfo {
  readonly actions?: ReadonlyArray<UserListActionInfo>;
}

export interface BatchJob {
  readonly resource_name?: string;
  readonly id?: string;
  readonly next_add_sequence_token?: string;
  readonly metadata?: BatchJobMetadata;
  readonly status?: BatchJobStatus;
  readonly long_running_operation?: string;
}

export type BatchJobError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING" | "EMPTY_OPERATIONS" | "INVALID_SEQUENCE_TOKEN" | "RESULTS_NOT_READY" | "INVALID_PAGE_SIZE" | "CAN_ONLY_REMOVE_PENDING_JOB" | "CANNOT_LIST_RESULTS" | "ASSET_GROUP_AND_ASSET_GROUP_ASSET_TRANSACTION_FAILURE" | "ASSET_GROUP_LISTING_GROUP_FILTER_TRANSACTION_FAILURE" | "REQUEST_TOO_LARGE" | "CAMPAIGN_AND_CAMPAIGN_ASSET_TRANSACTION_FAILURE";

export interface BatchJobErrorEnum {

}

export interface BatchJobMetadata {
  readonly creation_date_time?: string;
  readonly start_date_time?: string;
  readonly completion_date_time?: string;
  readonly estimated_completion_ratio?: number;
  readonly operation_count?: string;
  readonly executed_operation_count?: string;
  readonly execution_limit_seconds?: number;
}

export interface BatchJobOperation {
  readonly create?: BatchJob;
  readonly remove?: string;
}

export interface BatchJobResult {
  readonly operation_index?: string;
  readonly mutate_operation_response?: MutateOperationResponse;
  readonly status?: unknown;
}

export type BatchJobStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "RUNNING" | "DONE";

export interface BatchJobStatusEnum {

}

export type BenchmarksError = "UNSPECIFIED" | "UNKNOWN" | "MAX_QUERY_COMPLEXITY_EXCEEDED";

export interface BenchmarksErrorEnum {

}

export interface BenchmarksLocation {
  readonly location_name?: string;
  readonly location_type?: string;
  readonly location_info?: LocationInfo;
}

export type BenchmarksMarketingObjective = "UNSPECIFIED" | "UNKNOWN" | "AWARENESS" | "CONSIDERATION" | "ACTION";

export interface BenchmarksMarketingObjectiveEnum {

}

export interface BenchmarksProductMetadata {
  readonly product_name?: string;
  readonly product_code?: string;
  readonly marketing_objective?: BenchmarksMarketingObjective;
}

export interface BenchmarksSource {
  readonly industry_vertical_id?: string;
}

export interface BenchmarksSourceMetadata {
  readonly benchmarks_source_type?: BenchmarksSourceType;
  readonly industry_vertical_info?: IndustryVerticalInfo;
}

export type BenchmarksSourceType = "UNSPECIFIED" | "UNKNOWN" | "INDUSTRY_VERTICAL";

export interface BenchmarksSourceTypeEnum {

}

export type BenchmarksTimeGranularity = "UNSPECIFIED" | "UNKNOWN" | "WEEK" | "MONTH" | "QUARTER";

export interface BenchmarksTimeGranularityEnum {

}

export interface BiddingDataExclusion {
  readonly resource_name?: string;
  readonly data_exclusion_id?: string;
  readonly scope?: SeasonalityEventScope;
  readonly status?: SeasonalityEventStatus;
  readonly start_date_time?: string;
  readonly end_date_time?: string;
  readonly name?: string;
  readonly description?: string;
  readonly devices?: ReadonlyArray<Device>;
  readonly campaigns?: ReadonlyArray<string>;
  readonly advertising_channel_types?: ReadonlyArray<AdvertisingChannelType>;
}

export interface BiddingDataExclusionOperation {
  readonly update_mask?: string;
  readonly create?: BiddingDataExclusion;
  readonly update?: BiddingDataExclusion;
  readonly remove?: string;
}

export type BiddingError = "UNSPECIFIED" | "UNKNOWN" | "BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED" | "CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN" | "INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE" | "INVALID_BIDDING_STRATEGY_TYPE" | "INVALID_BID" | "BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE" | "CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY" | "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY" | "BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE" | "PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER" | "PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA" | "BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS" | "BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS" | "BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION" | "BID_TOO_SMALL" | "BID_TOO_BIG" | "BID_TOO_MANY_FRACTIONAL_DIGITS" | "INVALID_DOMAIN_NAME" | "NOT_COMPATIBLE_WITH_PAYMENT_MODE" | "BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET" | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_ALIGNED" | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_ATTACHED_TO_THE_SAME_CAMPAIGNS_TO_ALIGN" | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_REMOVED_TOGETHER" | "CPC_BID_FLOOR_MICROS_GREATER_THAN_CPC_BID_CEILING_MICROS" | "TARGET_ROAS_TOLERANCE_PERCENT_MILLIS_MUST_BE_INTEGER";

export interface BiddingErrorEnum {

}

export interface BiddingInfo {
  readonly bidding_strategy_type?: BiddingStrategyType;
  readonly target_cpa_micros?: string;
  readonly target_roas?: number;
  readonly target_impression_share_info?: TargetImpressionShareInfo;
}

export interface BiddingSeasonalityAdjustment {
  readonly resource_name?: string;
  readonly seasonality_adjustment_id?: string;
  readonly scope?: SeasonalityEventScope;
  readonly status?: SeasonalityEventStatus;
  readonly start_date_time?: string;
  readonly end_date_time?: string;
  readonly name?: string;
  readonly description?: string;
  readonly devices?: ReadonlyArray<Device>;
  readonly conversion_rate_modifier?: number;
  readonly campaigns?: ReadonlyArray<string>;
  readonly advertising_channel_types?: ReadonlyArray<AdvertisingChannelType>;
}

export interface BiddingSeasonalityAdjustmentOperation {
  readonly update_mask?: string;
  readonly create?: BiddingSeasonalityAdjustment;
  readonly update?: BiddingSeasonalityAdjustment;
  readonly remove?: string;
}

export type BiddingSource = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_BIDDING_STRATEGY" | "AD_GROUP" | "AD_GROUP_CRITERION";

export interface BiddingSourceEnum {

}

export interface BiddingStrategy {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly status?: BiddingStrategyStatus;
  readonly type?: BiddingStrategyType;
  readonly currency_code?: string;
  readonly effective_currency_code?: string;
  readonly aligned_campaign_budget_id?: string;
  readonly campaign_count?: string;
  readonly non_removed_campaign_count?: string;
  readonly enhanced_cpc?: EnhancedCpc;
  readonly maximize_conversion_value?: MaximizeConversionValue;
  readonly maximize_conversions?: MaximizeConversions;
  readonly target_cpa?: TargetCpa;
  readonly target_impression_share?: TargetImpressionShare;
  readonly target_roas?: TargetRoas;
  readonly target_spend?: TargetSpend;
}

export type BiddingStrategyError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_NAME" | "CANNOT_CHANGE_BIDDING_STRATEGY_TYPE" | "CANNOT_REMOVE_ASSOCIATED_STRATEGY" | "BIDDING_STRATEGY_NOT_SUPPORTED" | "INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE";

export interface BiddingStrategyErrorEnum {

}

export interface BiddingStrategyOperation {
  readonly update_mask?: string;
  readonly create?: BiddingStrategy;
  readonly update?: BiddingStrategy;
  readonly remove?: string;
}

export interface BiddingStrategySimulation {
  readonly resource_name?: string;
  readonly bidding_strategy_id?: string;
  readonly type?: SimulationType;
  readonly modification_method?: SimulationModificationMethod;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly target_cpa_point_list?: TargetCpaSimulationPointList;
  readonly target_roas_point_list?: TargetRoasSimulationPointList;
}

export type BiddingStrategyStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface BiddingStrategyStatusEnum {

}

export type BiddingStrategySystemStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "LEARNING_NEW" | "LEARNING_SETTING_CHANGE" | "LEARNING_BUDGET_CHANGE" | "LEARNING_COMPOSITION_CHANGE" | "LEARNING_CONVERSION_TYPE_CHANGE" | "LEARNING_CONVERSION_SETTING_CHANGE" | "LIMITED_BY_CPC_BID_CEILING" | "LIMITED_BY_CPC_BID_FLOOR" | "LIMITED_BY_DATA" | "LIMITED_BY_BUDGET" | "LIMITED_BY_LOW_PRIORITY_SPEND" | "LIMITED_BY_LOW_QUALITY" | "LIMITED_BY_INVENTORY" | "MISCONFIGURED_ZERO_ELIGIBILITY" | "MISCONFIGURED_CONVERSION_TYPES" | "MISCONFIGURED_CONVERSION_SETTINGS" | "MISCONFIGURED_SHARED_BUDGET" | "MISCONFIGURED_STRATEGY_TYPE" | "PAUSED" | "UNAVAILABLE" | "MULTIPLE_LEARNING" | "MULTIPLE_LIMITED" | "MULTIPLE_MISCONFIGURED" | "MULTIPLE";

export interface BiddingStrategySystemStatusEnum {

}

export type BiddingStrategyType = "UNSPECIFIED" | "UNKNOWN" | "COMMISSION" | "ENHANCED_CPC" | "FIXED_CPM" | "FIXED_SHARE_OF_VOICE" | "INVALID" | "MANUAL_CPA" | "MANUAL_CPC" | "MANUAL_CPM" | "MANUAL_CPV" | "MAXIMIZE_CONVERSIONS" | "MAXIMIZE_CONVERSION_VALUE" | "PAGE_ONE_PROMOTED" | "PERCENT_CPC" | "TARGET_CPA" | "TARGET_CPC" | "TARGET_CPM" | "TARGET_CPV" | "TARGET_IMPRESSION_SHARE" | "TARGET_OUTRANK_SHARE" | "TARGET_ROAS" | "TARGET_SPEND";

export interface BiddingStrategyTypeEnum {

}

export type BidModifierSource = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN" | "AD_GROUP";

export interface BidModifierSourceEnum {

}

export interface BillingSetup {
  readonly resource_name?: string;
  readonly id?: string;
  readonly status?: BillingSetupStatus;
  readonly payments_account?: string;
  readonly payments_account_info?: PaymentsAccountInfo;
  readonly start_date_time?: string;
  readonly start_time_type?: TimeType;
  readonly end_date_time?: string;
  readonly end_time_type?: TimeType;
}

export type BillingSetupError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_USE_EXISTING_AND_NEW_ACCOUNT" | "CANNOT_REMOVE_STARTED_BILLING_SETUP" | "CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT" | "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS" | "INVALID_PAYMENTS_ACCOUNT" | "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY" | "INVALID_START_TIME_TYPE" | "THIRD_PARTY_ALREADY_HAS_BILLING" | "BILLING_SETUP_IN_PROGRESS" | "NO_SIGNUP_PERMISSION" | "CHANGE_OF_BILL_TO_IN_PROGRESS" | "PAYMENTS_PROFILE_NOT_FOUND" | "PAYMENTS_ACCOUNT_NOT_FOUND" | "PAYMENTS_PROFILE_INELIGIBLE" | "PAYMENTS_ACCOUNT_INELIGIBLE" | "CUSTOMER_NEEDS_INTERNAL_APPROVAL" | "PAYMENTS_PROFILE_NEEDS_SERVICE_AGREEMENT_ACCEPTANCE" | "PAYMENTS_ACCOUNT_INELIGIBLE_CURRENCY_CODE_MISMATCH" | "FUTURE_START_TIME_PROHIBITED" | "TOO_MANY_BILLING_SETUPS_FOR_PAYMENTS_ACCOUNT";

export interface BillingSetupErrorEnum {

}

export interface BillingSetupOperation {
  readonly create?: BillingSetup;
  readonly remove?: string;
}

export type BillingSetupStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "APPROVED_HELD" | "APPROVED" | "CANCELLED";

export interface BillingSetupStatusEnum {

}

export interface BookCampaignsOperation {
  readonly campaigns?: ReadonlyArray<Campaign>;
  readonly quote_signature?: string;
}

export interface BookCampaignsOperation_Campaign {
  readonly campaign?: string;
  readonly request_type?: ReservationRequestType;
}

export interface BookCampaignsRequest {
  readonly customer_id?: string;
  readonly operation?: BookCampaignsOperation;
}

export interface BookCampaignsResponse {
  readonly result?: BookCampaignsResult;
}

export interface BookCampaignsResult {

}

export interface BookingDetails {
  readonly status?: BookingStatus;
  readonly hold_expiration_date_time?: string;
  readonly cancellation_date_time?: string;
}

export type BookingStatus = "UNSPECIFIED" | "UNKNOWN" | "BOOKED" | "HELD" | "CAMPAIGN_ENDED" | "HOLD_EXPIRED" | "BOOKING_CANCELLED";

export interface BookingStatusEnum {

}

export interface BookOnGoogleAsset {

}

export interface BrandCampaignAssets {
  readonly business_name_asset?: string;
  readonly logo_asset?: ReadonlyArray<string>;
  readonly landscape_logo_asset?: ReadonlyArray<string>;
}

export interface BrandGuidelines {
  readonly main_color?: string;
  readonly accent_color?: string;
  readonly predefined_font_family?: string;
}

export type BrandGuidelinesMigrationError = "UNSPECIFIED" | "UNKNOWN" | "BRAND_GUIDELINES_ALREADY_ENABLED" | "CANNOT_ENABLE_BRAND_GUIDELINES_FOR_REMOVED_CAMPAIGN" | "BRAND_GUIDELINES_LOGO_LIMIT_EXCEEDED" | "CANNOT_AUTO_POPULATE_BRAND_ASSETS_WHEN_BRAND_ASSETS_PROVIDED" | "AUTO_POPULATE_BRAND_ASSETS_REQUIRED_WHEN_BRAND_ASSETS_OMITTED" | "TOO_MANY_ENABLE_OPERATIONS";

export interface BrandGuidelinesMigrationErrorEnum {

}

export interface BrandInfo {
  readonly display_name?: string;
  readonly entity_id?: string;
  readonly primary_url?: string;
  readonly rejection_reason?: BrandRequestRejectionReason;
  readonly status?: BrandState;
}

export interface BrandListInfo {
  readonly shared_set?: string;
}

export type BrandRequestRejectionReason = "UNSPECIFIED" | "UNKNOWN" | "EXISTING_BRAND" | "EXISTING_BRAND_VARIANT" | "INCORRECT_INFORMATION" | "NOT_A_BRAND";

export interface BrandRequestRejectionReasonEnum {

}

export type BrandSafetySuitability = "UNSPECIFIED" | "UNKNOWN" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";

export interface BrandSafetySuitabilityEnum {

}

export type BrandState = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "DEPRECATED" | "UNVERIFIED" | "APPROVED" | "CANCELLED" | "REJECTED";

export interface BrandStateEnum {

}

export interface BrandSuggestion {
  readonly id?: string;
  readonly name?: string;
  readonly urls?: ReadonlyArray<string>;
  readonly state?: BrandState;
}

export interface BrandTargetingOverrides {
  readonly ignore_exclusions_for_shopping_ads?: boolean;
}

export interface BreakdownDefinition {
  readonly date_breakdown?: BenchmarksTimeGranularity;
}

export interface BreakdownKey {
  readonly dates?: DateRange;
}

export interface BreakdownMetrics {
  readonly breakdown_key?: BreakdownKey;
  readonly customer_metrics?: CustomerMetrics;
  readonly average_benchmarks_metrics?: Metrics;
}

export interface BudgetCampaignAssociationStatus {
  readonly campaign?: string;
  readonly status?: BudgetCampaignAssociationStatusEnum_BudgetCampaignAssociationStatus;
}

export interface BudgetCampaignAssociationStatusEnum {

}

export type BudgetCampaignAssociationStatusEnum_BudgetCampaignAssociationStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export type BudgetDeliveryMethod = "UNSPECIFIED" | "UNKNOWN" | "STANDARD" | "ACCELERATED";

export interface BudgetDeliveryMethodEnum {

}

export interface BudgetInfo {
  readonly current_budget?: string;
}

export interface BudgetOption {
  readonly daily_amount_micros?: string;
  readonly metrics?: Metrics;
}

export interface BudgetPerDayMinimumErrorDetails {
  readonly currency_code?: string;
  readonly budget_per_day_minimum_micros?: string;
  readonly minimum_budget_amount_micros?: string;
  readonly minimum_budget_total_amount_micros?: string;
  readonly failed_budget_amount_micros?: string;
  readonly failed_budget_total_amount_micros?: string;
}

export type BudgetPeriod = "UNSPECIFIED" | "UNKNOWN" | "DAILY" | "CUSTOM_PERIOD";

export interface BudgetPeriodEnum {

}

export interface BudgetSimulationPoint {
  readonly budget_amount_micros?: string;
  readonly required_cpc_bid_ceiling_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
  readonly interactions?: string;
}

export interface BudgetSimulationPointList {
  readonly points?: ReadonlyArray<BudgetSimulationPoint>;
}

export type BudgetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface BudgetStatusEnum {

}

export type BudgetType = "UNSPECIFIED" | "UNKNOWN" | "STANDARD" | "FIXED_CPA" | "SMART_CAMPAIGN" | "LOCAL_SERVICES";

export interface BudgetTypeEnum {

}

export interface BusinessContext {
  readonly business_name?: string;
}

export interface BusinessMessageAsset {
  readonly message_provider?: BusinessMessageProvider;
  readonly starter_message?: string;
  readonly call_to_action?: BusinessMessageCallToActionInfo;
  readonly whatsapp_info?: WhatsappBusinessMessageInfo;
  readonly facebook_messenger_info?: FacebookMessengerBusinessMessageInfo;
  readonly zalo_info?: ZaloBusinessMessageInfo;
}

export interface BusinessMessageCallToActionInfo {
  readonly call_to_action_selection?: BusinessMessageCallToActionType;
  readonly call_to_action_description?: string;
}

export type BusinessMessageCallToActionType = "UNSPECIFIED" | "UNKNOWN" | "APPLY_NOW" | "BOOK_NOW" | "CONTACT_US" | "GET_INFO" | "GET_OFFER" | "GET_QUOTE" | "GET_STARTED" | "LEARN_MORE";

export interface BusinessMessageCallToActionTypeEnum {

}

export type BusinessMessageProvider = "UNSPECIFIED" | "UNKNOWN" | "WHATSAPP" | "FACEBOOK_MESSENGER" | "ZALO";

export interface BusinessMessageProviderEnum {

}

export interface BusinessProfileBusinessNameFilter {
  readonly business_name?: string;
  readonly filter_type?: LocationStringFilterType;
}

export interface BusinessProfileLocation {
  readonly labels?: ReadonlyArray<string>;
  readonly store_code?: string;
  readonly listing_id?: string;
}

export interface BusinessProfileLocationGroup {
  readonly dynamic_business_profile_location_group_filter?: DynamicBusinessProfileLocationGroupFilter;
}

export interface BusinessProfileLocationSet {
  readonly http_authorization_token?: string;
  readonly email_address?: string;
  readonly business_name_filter?: string;
  readonly label_filters?: ReadonlyArray<string>;
  readonly listing_id_filters?: ReadonlyArray<string>;
  readonly business_account_id?: string;
}

export interface BusinessRegistrationCheckVerificationArtifact {
  readonly registration_type?: LocalServicesBusinessRegistrationType;
  readonly check_id?: string;
  readonly rejection_reason?: LocalServicesBusinessRegistrationCheckRejectionReason;
  readonly registration_number?: BusinessRegistrationNumber;
  readonly registration_document?: BusinessRegistrationDocument;
}

export interface BusinessRegistrationDocument {
  readonly document_readonly?: LocalServicesDocumentReadOnly;
}

export interface BusinessRegistrationNumber {
  readonly number?: string;
}

export interface CallAsset {
  readonly country_code?: string;
  readonly phone_number?: string;
  readonly call_conversion_reporting_state?: CallConversionReportingState;
  readonly call_conversion_action?: string;
  readonly ad_schedule_targets?: ReadonlyArray<AdScheduleInfo>;
}

export interface CallAssetParameters {
  readonly ad_asset_apply_parameters?: AdAssetApplyParameters;
}

export interface CallAssetRecommendation {

}

export interface CallConversion {
  readonly caller_id?: string;
  readonly call_start_date_time?: string;
  readonly conversion_action?: string;
  readonly conversion_date_time?: string;
  readonly conversion_value?: number;
  readonly currency_code?: string;
  readonly custom_variables?: ReadonlyArray<CustomVariable>;
  readonly consent?: Consent;
}

export type CallConversionReportingState = "UNSPECIFIED" | "UNKNOWN" | "DISABLED" | "USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION" | "USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION";

export interface CallConversionReportingStateEnum {

}

export interface CallConversionResult {
  readonly caller_id?: string;
  readonly call_start_date_time?: string;
  readonly conversion_action?: string;
  readonly conversion_date_time?: string;
}

export interface CallExtensionParameters {
  readonly call_extensions?: ReadonlyArray<CallFeedItem>;
}

export interface CallFeedItem {
  readonly phone_number?: string;
  readonly country_code?: string;
  readonly call_tracking_enabled?: boolean;
  readonly call_conversion_action?: string;
  readonly call_conversion_tracking_disabled?: boolean;
  readonly call_conversion_reporting_state?: CallConversionReportingState;
}

export interface CalloutAsset {
  readonly callout_text?: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly ad_schedule_targets?: ReadonlyArray<AdScheduleInfo>;
}

export interface CalloutAssetParameters {
  readonly ad_asset_apply_parameters?: AdAssetApplyParameters;
}

export interface CalloutAssetRecommendation {
  readonly recommended_campaign_callout_assets?: ReadonlyArray<Asset>;
  readonly recommended_customer_callout_assets?: ReadonlyArray<Asset>;
}

export interface CalloutExtensionParameters {
  readonly callout_extensions?: ReadonlyArray<CalloutFeedItem>;
}

export interface CalloutFeedItem {
  readonly callout_text?: string;
}

export interface CallReportingSetting {
  readonly call_reporting_enabled?: boolean;
  readonly call_conversion_reporting_enabled?: boolean;
  readonly call_conversion_action?: string;
}

export interface CallToActionAsset {
  readonly call_to_action?: CallToActionType;
}

export type CallToActionType = "UNSPECIFIED" | "UNKNOWN" | "LEARN_MORE" | "GET_QUOTE" | "APPLY_NOW" | "SIGN_UP" | "CONTACT_US" | "SUBSCRIBE" | "DOWNLOAD" | "BOOK_NOW" | "SHOP_NOW" | "BUY_NOW" | "DONATE_NOW" | "ORDER_NOW" | "PLAY_NOW" | "SEE_MORE" | "START_NOW" | "VISIT_SITE" | "WATCH_NOW";

export interface CallToActionTypeEnum {

}

export type CallTrackingDisplayLocation = "UNSPECIFIED" | "UNKNOWN" | "AD" | "LANDING_PAGE";

export interface CallTrackingDisplayLocationEnum {

}

export type CallType = "UNSPECIFIED" | "UNKNOWN" | "MANUALLY_DIALED" | "HIGH_END_MOBILE_SEARCH";

export interface CallTypeEnum {

}

export interface CallView {
  readonly resource_name?: string;
  readonly caller_country_code?: string;
  readonly caller_area_code?: string;
  readonly call_duration_seconds?: string;
  readonly start_call_date_time?: string;
  readonly end_call_date_time?: string;
  readonly call_tracking_display_location?: CallTrackingDisplayLocation;
  readonly type?: CallType;
  readonly call_status?: GoogleVoiceCallStatus;
}

export interface Campaign {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly primary_status?: CampaignPrimaryStatus;
  readonly primary_status_reasons?: ReadonlyArray<CampaignPrimaryStatusReason>;
  readonly status?: CampaignStatus;
  readonly serving_status?: CampaignServingStatus;
  readonly bidding_strategy_system_status?: BiddingStrategySystemStatus;
  readonly ad_serving_optimization_status?: AdServingOptimizationStatus;
  readonly advertising_channel_type?: AdvertisingChannelType;
  readonly advertising_channel_sub_type?: AdvertisingChannelSubType;
  readonly tracking_url_template?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly local_services_campaign_settings?: LocalServicesCampaignSettings;
  readonly travel_campaign_settings?: TravelCampaignSettings;
  readonly demand_gen_campaign_settings?: DemandGenCampaignSettings;
  readonly video_campaign_settings?: VideoCampaignSettings;
  readonly pmax_campaign_settings?: PmaxCampaignSettings;
  readonly real_time_bidding_setting?: RealTimeBiddingSetting;
  readonly network_settings?: NetworkSettings;
  readonly hotel_setting?: HotelSettingInfo;
  readonly dynamic_search_ads_setting?: DynamicSearchAdsSetting;
  readonly shopping_setting?: ShoppingSetting;
  readonly targeting_setting?: TargetingSetting;
  readonly audience_setting?: AudienceSetting;
  readonly geo_target_type_setting?: GeoTargetTypeSetting;
  readonly local_campaign_setting?: LocalCampaignSetting;
  readonly app_campaign_setting?: AppCampaignSetting;
  readonly labels?: ReadonlyArray<string>;
  readonly experiment_type?: CampaignExperimentType;
  readonly base_campaign?: string;
  readonly campaign_budget?: string;
  readonly bidding_strategy_type?: BiddingStrategyType;
  readonly accessible_bidding_strategy?: string;
  readonly campaign_group?: string;
  readonly start_date_time?: string;
  readonly end_date_time?: string;
  readonly final_url_suffix?: string;
  readonly frequency_caps?: ReadonlyArray<FrequencyCapEntry>;
  readonly vanity_pharma?: VanityPharma;
  readonly selective_optimization?: SelectiveOptimization;
  readonly optimization_goal_setting?: OptimizationGoalSetting;
  readonly tracking_setting?: TrackingSetting;
  readonly payment_mode?: PaymentMode;
  readonly optimization_score?: number;
  readonly excluded_parent_asset_field_types?: ReadonlyArray<AssetFieldType>;
  readonly excluded_parent_asset_set_types?: ReadonlyArray<AssetSetType>;
  readonly performance_max_upgrade?: PerformanceMaxUpgrade;
  readonly hotel_property_asset_set?: string;
  readonly listing_type?: ListingType;
  readonly asset_automation_settings?: ReadonlyArray<AssetAutomationSetting>;
  readonly keyword_match_type?: CampaignKeywordMatchType;
  readonly brand_guidelines_enabled?: boolean;
  readonly brand_guidelines?: BrandGuidelines;
  readonly text_guidelines?: TextGuidelines;
  readonly third_party_integration_partners?: CampaignThirdPartyIntegrationPartners;
  readonly ai_max_setting?: AiMaxSetting;
  readonly contains_eu_political_advertising?: EuPoliticalAdvertisingStatus;
  readonly feed_types?: ReadonlyArray<AssetSetType>;
  readonly view_through_conversion_optimization_enabled?: boolean;
  readonly missing_eu_political_advertising_declaration?: boolean;
  readonly bidding_strategy?: string;
  readonly commission?: Commission;
  readonly manual_cpa?: ManualCpa;
  readonly manual_cpc?: ManualCpc;
  readonly manual_cpm?: ManualCpm;
  readonly manual_cpv?: ManualCpv;
  readonly maximize_conversions?: MaximizeConversions;
  readonly maximize_conversion_value?: MaximizeConversionValue;
  readonly target_cpa?: TargetCpa;
  readonly target_impression_share?: TargetImpressionShare;
  readonly target_roas?: TargetRoas;
  readonly target_spend?: TargetSpend;
  readonly percent_cpc?: PercentCpc;
  readonly target_cpm?: TargetCpm;
  readonly fixed_cpm?: FixedCpm;
  readonly target_cpv?: TargetCpv;
  readonly target_cpc?: TargetCpc;
}

export interface Campaign_AudienceSetting {
  readonly use_audience_grouped?: boolean;
}

export interface CampaignAggregateAssetView {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly asset?: string;
  readonly asset_source?: AssetSource;
  readonly field_type?: AssetFieldType;
}

export interface CampaignAsset {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly source?: AssetSource;
  readonly status?: AssetLinkStatus;
  readonly primary_status?: AssetLinkPrimaryStatus;
  readonly primary_status_details?: ReadonlyArray<AssetLinkPrimaryStatusDetails>;
  readonly primary_status_reasons?: ReadonlyArray<AssetLinkPrimaryStatusReason>;
}

export interface CampaignAssetOperation {
  readonly update_mask?: string;
  readonly create?: CampaignAsset;
  readonly update?: CampaignAsset;
  readonly remove?: string;
}

export interface CampaignAssetSet {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly asset_set?: string;
  readonly status?: AssetSetLinkStatus;
}

export interface CampaignAssetSetOperation {
  readonly create?: CampaignAssetSet;
  readonly remove?: string;
}

export interface CampaignAudienceView {
  readonly resource_name?: string;
}

export interface CampaignBiddingStrategy {
  readonly manual_cpc_bidding_strategy?: ManualCpcBiddingStrategy;
  readonly maximize_clicks_bidding_strategy?: MaximizeClicksBiddingStrategy;
  readonly maximize_conversions_bidding_strategy?: MaximizeConversionsBiddingStrategy;
}

export interface CampaignBidModifier {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly criterion_id?: string;
  readonly bid_modifier?: number;
  readonly interaction_type?: InteractionTypeInfo;
}

export interface CampaignBidModifierOperation {
  readonly update_mask?: string;
  readonly create?: CampaignBidModifier;
  readonly update?: CampaignBidModifier;
  readonly remove?: string;
}

export interface CampaignBudget {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly amount_micros?: string;
  readonly total_amount_micros?: string;
  readonly status?: BudgetStatus;
  readonly delivery_method?: BudgetDeliveryMethod;
  readonly explicitly_shared?: boolean;
  readonly reference_count?: string;
  readonly has_recommended_budget?: boolean;
  readonly recommended_budget_amount_micros?: string;
  readonly period?: BudgetPeriod;
  readonly recommended_budget_estimated_change_weekly_clicks?: string;
  readonly recommended_budget_estimated_change_weekly_cost_micros?: string;
  readonly recommended_budget_estimated_change_weekly_interactions?: string;
  readonly recommended_budget_estimated_change_weekly_views?: string;
  readonly type?: BudgetType;
  readonly aligned_bidding_strategy_id?: string;
}

export type CampaignBudgetError = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_BUDGET_CANNOT_BE_SHARED" | "CAMPAIGN_BUDGET_REMOVED" | "CAMPAIGN_BUDGET_IN_USE" | "CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE" | "CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET" | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED" | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME" | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED" | "CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS" | "DUPLICATE_NAME" | "MONEY_AMOUNT_IN_WRONG_CURRENCY" | "MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC" | "MONEY_AMOUNT_TOO_LARGE" | "NEGATIVE_MONEY_AMOUNT" | "NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT" | "TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY" | "INVALID_PERIOD" | "CANNOT_USE_ACCELERATED_DELIVERY_MODE" | "BUDGET_AMOUNT_MUST_BE_UNSET_FOR_CUSTOM_BUDGET_PERIOD" | "BUDGET_BELOW_PER_DAY_MINIMUM";

export interface CampaignBudgetErrorEnum {

}

export interface CampaignBudgetMapping {
  readonly experiment_campaign?: string;
  readonly campaign_budget?: string;
}

export interface CampaignBudgetOperation {
  readonly update_mask?: string;
  readonly create?: CampaignBudget;
  readonly update?: CampaignBudget;
  readonly remove?: string;
}

export interface CampaignBudgetParameters {
  readonly new_budget_amount_micros?: string;
}

export interface CampaignBudgetRecommendation {
  readonly current_budget_amount_micros?: string;
  readonly recommended_budget_amount_micros?: string;
  readonly budget_options?: ReadonlyArray<CampaignBudgetRecommendationOption>;
}

export interface CampaignBudgetRecommendationOption {
  readonly budget_amount_micros?: string;
  readonly impact?: RecommendationImpact;
}

export interface CampaignConversionGoal {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly category?: ConversionActionCategory;
  readonly origin?: ConversionOrigin;
  readonly biddable?: boolean;
}

export type CampaignConversionGoalError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN" | "CANNOT_USE_STORE_SALE_GOAL_FOR_PERFORMANCE_MAX_CAMPAIGN";

export interface CampaignConversionGoalErrorEnum {

}

export interface CampaignConversionGoalOperation {
  readonly update_mask?: string;
  readonly update?: CampaignConversionGoal;
}

export interface CampaignCriterion {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly criterion_id?: string;
  readonly display_name?: string;
  readonly bid_modifier?: number;
  readonly negative?: boolean;
  readonly type?: CriterionType;
  readonly status?: CampaignCriterionStatus;
  readonly keyword?: KeywordInfo;
  readonly placement?: PlacementInfo;
  readonly mobile_app_category?: MobileAppCategoryInfo;
  readonly mobile_application?: MobileApplicationInfo;
  readonly location?: LocationInfo;
  readonly device?: DeviceInfo;
  readonly ad_schedule?: AdScheduleInfo;
  readonly age_range?: AgeRangeInfo;
  readonly gender?: GenderInfo;
  readonly income_range?: IncomeRangeInfo;
  readonly parental_status?: ParentalStatusInfo;
  readonly user_list?: UserListInfo;
  readonly youtube_video?: YouTubeVideoInfo;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly proximity?: ProximityInfo;
  readonly topic?: TopicInfo;
  readonly listing_scope?: ListingScopeInfo;
  readonly language?: LanguageInfo;
  readonly ip_block?: IpBlockInfo;
  readonly content_label?: ContentLabelInfo;
  readonly carrier?: CarrierInfo;
  readonly user_interest?: UserInterestInfo;
  readonly webpage?: WebpageInfo;
  readonly operating_system_version?: OperatingSystemVersionInfo;
  readonly mobile_device?: MobileDeviceInfo;
  readonly location_group?: LocationGroupInfo;
  readonly custom_affinity?: CustomAffinityInfo;
  readonly custom_audience?: CustomAudienceInfo;
  readonly combined_audience?: CombinedAudienceInfo;
  readonly keyword_theme?: KeywordThemeInfo;
  readonly local_service_id?: LocalServiceIdInfo;
  readonly brand_list?: BrandListInfo;
  readonly life_event?: LifeEventInfo;
  readonly webpage_list?: WebpageListInfo;
  readonly video_lineup?: VideoLineupInfo;
  readonly extended_demographic?: ExtendedDemographicInfo;
}

export type CampaignCriterionError = "UNSPECIFIED" | "UNKNOWN" | "CONCRETE_TYPE_REQUIRED" | "INVALID_PLACEMENT_URL" | "CANNOT_EXCLUDE_CRITERIA_TYPE" | "CANNOT_SET_STATUS_FOR_CRITERIA_TYPE" | "CANNOT_SET_STATUS_FOR_EXCLUDED_CRITERIA" | "CANNOT_TARGET_AND_EXCLUDE" | "TOO_MANY_OPERATIONS" | "OPERATOR_NOT_SUPPORTED_FOR_CRITERION_TYPE" | "SHOPPING_CAMPAIGN_SALES_COUNTRY_NOT_SUPPORTED_FOR_SALES_CHANNEL" | "CANNOT_ADD_EXISTING_FIELD" | "CANNOT_UPDATE_NEGATIVE_CRITERION" | "CANNOT_SET_NEGATIVE_KEYWORD_THEME_CONSTANT_CRITERION" | "INVALID_KEYWORD_THEME_CONSTANT" | "MISSING_KEYWORD_THEME_CONSTANT_OR_FREE_FORM_KEYWORD_THEME" | "CANNOT_TARGET_BOTH_PROXIMITY_AND_LOCATION_CRITERIA_FOR_SMART_CAMPAIGN" | "CANNOT_TARGET_MULTIPLE_PROXIMITY_CRITERIA_FOR_SMART_CAMPAIGN" | "LOCATION_NOT_LAUNCHED_FOR_LOCAL_SERVICES_CAMPAIGN" | "LOCATION_INVALID_FOR_LOCAL_SERVICES_CAMPAIGN" | "CANNOT_TARGET_COUNTRY_FOR_LOCAL_SERVICES_CAMPAIGN" | "LOCATION_NOT_IN_HOME_COUNTRY_FOR_LOCAL_SERVICES_CAMPAIGN" | "CANNOT_ADD_OR_REMOVE_LOCATION_FOR_LOCAL_SERVICES_CAMPAIGN" | "AT_LEAST_ONE_POSITIVE_LOCATION_REQUIRED_FOR_LOCAL_SERVICES_CAMPAIGN" | "AT_LEAST_ONE_LOCAL_SERVICE_ID_CRITERION_REQUIRED_FOR_LOCAL_SERVICES_CAMPAIGN" | "LOCAL_SERVICE_ID_NOT_FOUND_FOR_CATEGORY" | "CANNOT_ATTACH_BRAND_LIST_TO_NON_QUALIFIED_SEARCH_CAMPAIGN" | "CANNOT_REMOVE_ALL_LOCATIONS_DUE_TO_TOO_MANY_COUNTRY_EXCLUSIONS" | "INVALID_VIDEO_LINEUP_ID" | "CANNOT_REMOVE_ALL_LOCATIONS_FROM_LOCAL_SERVICES_PMAX_CAMPAIGN";

export interface CampaignCriterionErrorEnum {

}

export interface CampaignCriterionOperation {
  readonly update_mask?: string;
  readonly create?: CampaignCriterion;
  readonly update?: CampaignCriterion;
  readonly remove?: string;
}

export type CampaignCriterionStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface CampaignCriterionStatusEnum {

}

export interface CampaignCustomizer {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly customizer_attribute?: string;
  readonly status?: CustomizerValueStatus;
  readonly value?: CustomizerValue;
}

export type CampaignCustomizerError = "UNSPECIFIED" | "UNKNOWN";

export interface CampaignCustomizerErrorEnum {

}

export interface CampaignCustomizerOperation {
  readonly create?: CampaignCustomizer;
  readonly remove?: string;
}

export interface CampaignDraft {
  readonly resource_name?: string;
  readonly draft_id?: string;
  readonly base_campaign?: string;
  readonly name?: string;
  readonly draft_campaign?: string;
  readonly status?: CampaignDraftStatus;
  readonly has_experiment_running?: boolean;
  readonly long_running_operation?: string;
}

export type CampaignDraftError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_DRAFT_NAME" | "INVALID_STATUS_TRANSITION_FROM_REMOVED" | "INVALID_STATUS_TRANSITION_FROM_PROMOTED" | "INVALID_STATUS_TRANSITION_FROM_PROMOTE_FAILED" | "CUSTOMER_CANNOT_CREATE_DRAFT" | "CAMPAIGN_CANNOT_CREATE_DRAFT" | "INVALID_DRAFT_CHANGE" | "INVALID_STATUS_TRANSITION" | "MAX_NUMBER_OF_DRAFTS_PER_CAMPAIGN_REACHED" | "LIST_ERRORS_FOR_PROMOTED_DRAFT_ONLY";

export interface CampaignDraftErrorEnum {

}

export interface CampaignDraftOperation {
  readonly update_mask?: string;
  readonly create?: CampaignDraft;
  readonly update?: CampaignDraft;
  readonly remove?: string;
}

export type CampaignDraftStatus = "UNSPECIFIED" | "UNKNOWN" | "PROPOSED" | "REMOVED" | "PROMOTING" | "PROMOTED" | "PROMOTE_FAILED";

export interface CampaignDraftStatusEnum {

}

export interface CampaignDuration {
  readonly duration_in_days?: number;
  readonly date_range?: DateRange;
}

export type CampaignError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_TARGET_CONTENT_NETWORK" | "CANNOT_TARGET_SEARCH_NETWORK" | "CANNOT_TARGET_SEARCH_NETWORK_WITHOUT_GOOGLE_SEARCH" | "CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN" | "CAMPAIGN_MUST_TARGET_AT_LEAST_ONE_NETWORK" | "CANNOT_TARGET_PARTNER_SEARCH_NETWORK" | "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CRITERIA_LEVEL_BIDDING_STRATEGY" | "CAMPAIGN_DURATION_MUST_CONTAIN_ALL_RUNNABLE_TRIALS" | "CANNOT_MODIFY_FOR_TRIAL_CAMPAIGN" | "DUPLICATE_CAMPAIGN_NAME" | "INCOMPATIBLE_CAMPAIGN_FIELD" | "INVALID_CAMPAIGN_NAME" | "INVALID_AD_SERVING_OPTIMIZATION_STATUS" | "INVALID_TRACKING_URL" | "CANNOT_SET_BOTH_TRACKING_URL_TEMPLATE_AND_TRACKING_SETTING" | "MAX_IMPRESSIONS_NOT_IN_RANGE" | "TIME_UNIT_NOT_SUPPORTED" | "INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED" | "BUDGET_CANNOT_BE_SHARED" | "CAMPAIGN_CANNOT_USE_SHARED_BUDGET" | "CANNOT_CHANGE_BUDGET_ON_CAMPAIGN_WITH_TRIALS" | "CAMPAIGN_LABEL_DOES_NOT_EXIST" | "CAMPAIGN_LABEL_ALREADY_EXISTS" | "MISSING_SHOPPING_SETTING" | "INVALID_SHOPPING_SALES_COUNTRY" | "ADVERTISING_CHANNEL_TYPE_NOT_AVAILABLE_FOR_ACCOUNT_TYPE" | "INVALID_ADVERTISING_CHANNEL_SUB_TYPE" | "AT_LEAST_ONE_CONVERSION_MUST_BE_SELECTED" | "CANNOT_SET_AD_ROTATION_MODE" | "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED" | "CANNOT_SET_DATE_TO_PAST" | "MISSING_HOTEL_CUSTOMER_LINK" | "INVALID_HOTEL_CUSTOMER_LINK" | "MISSING_HOTEL_SETTING" | "CANNOT_USE_SHARED_CAMPAIGN_BUDGET_WHILE_PART_OF_CAMPAIGN_GROUP" | "APP_NOT_FOUND" | "SHOPPING_ENABLE_LOCAL_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE" | "MERCHANT_NOT_ALLOWED_FOR_COMPARISON_LISTING_ADS" | "INSUFFICIENT_APP_INSTALLS_COUNT" | "SENSITIVE_CATEGORY_APP" | "HEC_AGREEMENT_REQUIRED" | "NOT_COMPATIBLE_WITH_VIEW_THROUGH_CONVERSION_OPTIMIZATION" | "INVALID_EXCLUDED_PARENT_ASSET_FIELD_TYPE" | "CANNOT_CREATE_APP_PRE_REGISTRATION_FOR_NON_ANDROID_APP" | "APP_NOT_AVAILABLE_TO_CREATE_APP_PRE_REGISTRATION_CAMPAIGN" | "INCOMPATIBLE_BUDGET_TYPE" | "LOCAL_SERVICES_DUPLICATE_CATEGORY_BID" | "LOCAL_SERVICES_INVALID_CATEGORY_BID" | "LOCAL_SERVICES_MISSING_CATEGORY_BID" | "INVALID_STATUS_CHANGE" | "MISSING_TRAVEL_CUSTOMER_LINK" | "INVALID_TRAVEL_CUSTOMER_LINK" | "INVALID_EXCLUDED_PARENT_ASSET_SET_TYPE" | "ASSET_SET_NOT_A_HOTEL_PROPERTY_ASSET_SET" | "HOTEL_PROPERTY_ASSET_SET_ONLY_FOR_PERFORMANCE_MAX_FOR_TRAVEL_GOALS" | "AVERAGE_DAILY_SPEND_TOO_HIGH" | "CANNOT_ATTACH_TO_REMOVED_CAMPAIGN_GROUP" | "CANNOT_ATTACH_TO_BIDDING_STRATEGY" | "CANNOT_CHANGE_BUDGET_PERIOD" | "NOT_ENOUGH_CONVERSIONS" | "CANNOT_SET_MORE_THAN_ONE_CONVERSION_ACTION" | "NOT_COMPATIBLE_WITH_BUDGET_TYPE" | "NOT_COMPATIBLE_WITH_UPLOAD_CLICKS_CONVERSION" | "APP_ID_MUST_MATCH_CONVERSION_ACTION_APP_ID" | "CONVERSION_ACTION_WITH_DOWNLOAD_CATEGORY_NOT_ALLOWED" | "CONVERSION_ACTION_WITH_DOWNLOAD_CATEGORY_REQUIRED" | "CONVERSION_TRACKING_NOT_ENABLED" | "NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE" | "NOT_COMPATIBLE_WITH_GOOGLE_ATTRIBUTION_CONVERSIONS" | "CONVERSION_LAG_TOO_HIGH" | "NOT_LINKED_ADVERTISING_PARTNER" | "INVALID_NUMBER_OF_ADVERTISING_PARTNER_IDS" | "CANNOT_TARGET_DISPLAY_NETWORK_WITHOUT_YOUTUBE" | "CANNOT_LINK_TO_COMPARISON_SHOPPING_SERVICE_ACCOUNT" | "CANNOT_TARGET_NETWORK_FOR_COMPARISON_SHOPPING_SERVICE_LINKED_ACCOUNTS" | "CANNOT_MODIFY_TEXT_ASSET_AUTOMATION_WITH_ENABLED_TRIAL" | "DYNAMIC_TEXT_ASSET_CANNOT_OPT_OUT_WITH_FINAL_URL_EXPANSION_OPT_IN" | "CANNOT_SET_CAMPAIGN_KEYWORD_MATCH_TYPE" | "CANNOT_DISABLE_BROAD_MATCH_WHEN_KEYWORD_CONVERSION_IN_PROCESS" | "CANNOT_DISABLE_BROAD_MATCH_WHEN_TARGETING_BRANDS" | "CANNOT_ENABLE_BROAD_MATCH_FOR_BASE_CAMPAIGN_WITH_PROMOTING_TRIAL" | "CANNOT_ENABLE_BROAD_MATCH_FOR_PROMOTING_TRIAL_CAMPAIGN" | "REQUIRED_BUSINESS_NAME_ASSET_NOT_LINKED" | "REQUIRED_LOGO_ASSET_NOT_LINKED" | "BRAND_TARGETING_OVERRIDES_NOT_SUPPORTED" | "BRAND_GUIDELINES_NOT_ENABLED_FOR_CAMPAIGN" | "BRAND_GUIDELINES_MAIN_AND_ACCENT_COLORS_REQUIRED" | "BRAND_GUIDELINES_COLOR_INVALID_FORMAT" | "BRAND_GUIDELINES_UNSUPPORTED_FONT_FAMILY" | "BRAND_GUIDELINES_UNSUPPORTED_CHANNEL" | "CANNOT_ENABLE_BRAND_GUIDELINES_FOR_TRAVEL_GOALS" | "CUSTOMER_NOT_ALLOWLISTED_FOR_BRAND_GUIDELINES" | "THIRD_PARTY_INTEGRATION_PARTNER_NOT_ALLOWED" | "THIRD_PARTY_INTEGRATION_PARTNER_SHARE_COST_NOT_ALLOWED" | "DUPLICATE_INTERACTION_TYPE" | "INVALID_INTERACTION_TYPE" | "VIDEO_SEQUENCE_ERROR_SEQUENCE_DEFINITION_REQUIRED" | "AI_MAX_MUST_BE_ENABLED" | "DURATION_TOO_LONG_FOR_TOTAL_BUDGET" | "END_DATE_TIME_REQUIRED_FOR_TOTAL_BUDGET";

export interface CampaignErrorEnum {

}

export type CampaignExperimentError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_NAME" | "INVALID_TRANSITION" | "CANNOT_CREATE_EXPERIMENT_WITH_SHARED_BUDGET" | "CANNOT_CREATE_EXPERIMENT_FOR_REMOVED_BASE_CAMPAIGN" | "CANNOT_CREATE_EXPERIMENT_FOR_NON_PROPOSED_DRAFT" | "CUSTOMER_CANNOT_CREATE_EXPERIMENT" | "CAMPAIGN_CANNOT_CREATE_EXPERIMENT" | "EXPERIMENT_DURATIONS_MUST_NOT_OVERLAP" | "EXPERIMENT_DURATION_MUST_BE_WITHIN_CAMPAIGN_DURATION" | "CANNOT_MUTATE_EXPERIMENT_DUE_TO_STATUS";

export interface CampaignExperimentErrorEnum {

}

export type CampaignExperimentType = "UNSPECIFIED" | "UNKNOWN" | "BASE" | "DRAFT" | "EXPERIMENT";

export interface CampaignExperimentTypeEnum {

}

export type CampaignFeedError = "UNSPECIFIED" | "UNKNOWN" | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "CANNOT_CREATE_FOR_REMOVED_FEED" | "CANNOT_CREATE_ALREADY_EXISTING_CAMPAIGN_FEED" | "CANNOT_MODIFY_REMOVED_CAMPAIGN_FEED" | "INVALID_PLACEHOLDER_TYPE" | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" | "NO_EXISTING_LOCATION_CUSTOMER_FEED" | "LEGACY_FEED_TYPE_READ_ONLY";

export interface CampaignFeedErrorEnum {

}

export interface CampaignGoalConfig {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly goal?: string;
  readonly goal_type?: GoalType;
  readonly campaign_retention_settings?: CampaignRetentionGoalSettings;
  readonly campaign_new_customer_acquisition_settings?: CampaignNewCustomerAcquisitionGoalSettings;
  readonly campaign_loyalty_retention_settings?: CampaignLoyaltyRetentionGoalSettings;
}

export type CampaignGoalConfigError = "UNSPECIFIED" | "UNKNOWN" | "GOAL_NOT_FOUND" | "CAMPAIGN_NOT_FOUND" | "HIGH_LIFETIME_VALUE_PRESENT_BUT_VALUE_ABSENT" | "HIGH_LIFETIME_VALUE_LESS_THAN_OR_EQUAL_TO_VALUE" | "CUSTOMER_LIFECYCLE_OPTIMIZATION_CAMPAIGN_TYPE_NOT_SUPPORTED" | "CUSTOMER_NOT_ALLOWLISTED_FOR_RETENTION_ONLY" | "CAMPAIGN_OVERRIDE_VALUES_SET_FOR_NEW_CUSTOMER_ACQUISITION_TARGET_SPECIFIC_OPTION" | "CAMPAIGN_OVERRIDE_HIGH_LIFETIME_VALUE_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE" | "CANNOT_USE_INCOMPATIBLE_CLO_GOALS" | "LOYALTY_RETENTION_GOAL_INVALID_MODE";

export interface CampaignGoalConfigErrorEnum {

}

export interface CampaignGoalConfigOperation {
  readonly update_mask?: string;
  readonly create?: CampaignGoalConfig;
  readonly update?: CampaignGoalConfig;
  readonly remove?: string;
}

export interface CampaignGoalSettings {

}

export interface CampaignGroup {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly status?: CampaignGroupStatus;
}

export interface CampaignGroupOperation {
  readonly update_mask?: string;
  readonly create?: CampaignGroup;
  readonly update?: CampaignGroup;
  readonly remove?: string;
}

export type CampaignGroupStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CampaignGroupStatusEnum {

}

export type CampaignKeywordMatchType = "UNSPECIFIED" | "UNKNOWN" | "BROAD";

export interface CampaignKeywordMatchTypeEnum {

}

export interface CampaignLabel {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly label?: string;
}

export interface CampaignLabelOperation {
  readonly create?: CampaignLabel;
  readonly remove?: string;
}

export interface CampaignLoyaltyRetentionGoalSettings {
  readonly value_settings_override?: CustomerLifecycleOptimizationValueSettings;
  readonly enable_bid_adjustments_for_loyalty_members?: boolean;
  readonly show_targeted_loyalty_member_benefits_in_pla?: boolean;
}

export interface CampaignNewCustomerAcquisitionGoalSettings {
  readonly value_settings_override?: CustomerLifecycleOptimizationValueSettings;
  readonly target_option?: CustomerLifecycleOptimizationMode;
}

export interface CampaignOperation {
  readonly update_mask?: string;
  readonly create?: Campaign;
  readonly update?: Campaign;
  readonly remove?: string;
}

export type CampaignPrimaryStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "PAUSED" | "REMOVED" | "ENDED" | "PENDING" | "MISCONFIGURED" | "LIMITED" | "LEARNING" | "NOT_ELIGIBLE";

export interface CampaignPrimaryStatusEnum {

}

export type CampaignPrimaryStatusReason = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_REMOVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_PENDING" | "CAMPAIGN_ENDED" | "CAMPAIGN_DRAFT" | "BIDDING_STRATEGY_MISCONFIGURED" | "BIDDING_STRATEGY_LIMITED" | "BIDDING_STRATEGY_LEARNING" | "BIDDING_STRATEGY_CONSTRAINED" | "BUDGET_CONSTRAINED" | "BUDGET_MISCONFIGURED" | "SEARCH_VOLUME_LIMITED" | "AD_GROUPS_PAUSED" | "NO_AD_GROUPS" | "KEYWORDS_PAUSED" | "NO_KEYWORDS" | "AD_GROUP_ADS_PAUSED" | "NO_AD_GROUP_ADS" | "HAS_ADS_LIMITED_BY_POLICY" | "HAS_ADS_DISAPPROVED" | "MOST_ADS_UNDER_REVIEW" | "MISSING_LEAD_FORM_EXTENSION" | "MISSING_CALL_EXTENSION" | "LEAD_FORM_EXTENSION_UNDER_REVIEW" | "LEAD_FORM_EXTENSION_DISAPPROVED" | "CALL_EXTENSION_UNDER_REVIEW" | "CALL_EXTENSION_DISAPPROVED" | "NO_MOBILE_APPLICATION_AD_GROUP_CRITERIA" | "CAMPAIGN_GROUP_PAUSED" | "CAMPAIGN_GROUP_ALL_GROUP_BUDGETS_ENDED" | "APP_NOT_RELEASED" | "APP_PARTIALLY_RELEASED" | "HAS_ASSET_GROUPS_DISAPPROVED" | "HAS_ASSET_GROUPS_LIMITED_BY_POLICY" | "MOST_ASSET_GROUPS_UNDER_REVIEW" | "NO_ASSET_GROUPS" | "ASSET_GROUPS_PAUSED" | "MISSING_LOCATION_TARGETING" | "CAMPAIGN_NOT_BOOKED" | "BOOKING_HOLD_EXPIRING" | "BOOKING_HOLD_EXPIRED" | "BOOKING_CANCELLED";

export interface CampaignPrimaryStatusReasonEnum {

}

export interface CampaignReservationQuote {
  readonly campaign?: string;
  readonly max_budget_micros?: string;
  readonly possible_hold_duration_seconds?: string;
  readonly suggested_cpm_micros?: string;
}

export interface CampaignRetentionGoalSettings {
  readonly value_settings_override?: CustomerLifecycleOptimizationValueSettings;
  readonly target_option?: CustomerLifecycleOptimizationMode;
}

export interface CampaignSearchTermInsight {
  readonly resource_name?: string;
  readonly category_label?: string;
  readonly id?: string;
  readonly campaign_id?: string;
}

export interface CampaignSearchTermView {
  readonly resource_name?: string;
  readonly search_term?: string;
  readonly campaign?: string;
}

export type CampaignServingStatus = "UNSPECIFIED" | "UNKNOWN" | "SERVING" | "NONE" | "ENDED" | "PENDING" | "SUSPENDED";

export interface CampaignServingStatusEnum {

}

export interface CampaignSharedSet {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly shared_set?: string;
  readonly status?: CampaignSharedSetStatus;
}

export type CampaignSharedSetError = "UNSPECIFIED" | "UNKNOWN" | "SHARED_SET_ACCESS_DENIED";

export interface CampaignSharedSetErrorEnum {

}

export interface CampaignSharedSetOperation {
  readonly create?: CampaignSharedSet;
  readonly remove?: string;
}

export type CampaignSharedSetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CampaignSharedSetStatusEnum {

}

export interface CampaignSimulation {
  readonly resource_name?: string;
  readonly campaign_id?: string;
  readonly type?: SimulationType;
  readonly modification_method?: SimulationModificationMethod;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly cpc_bid_point_list?: CpcBidSimulationPointList;
  readonly target_cpa_point_list?: TargetCpaSimulationPointList;
  readonly target_roas_point_list?: TargetRoasSimulationPointList;
  readonly target_impression_share_point_list?: TargetImpressionShareSimulationPointList;
  readonly budget_point_list?: BudgetSimulationPointList;
}

export type CampaignStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED" | "REMOVED";

export interface CampaignStatusEnum {

}

export interface CampaignSummary {
  readonly campaign_description?: string;
  readonly quantity?: string;
  readonly unit_of_measure?: UnitOfMeasure;
  readonly amount_micros?: string;
}

export interface CampaignThirdPartyBrandLiftIntegrationPartner {
  readonly brand_lift_integration_partner?: ThirdPartyBrandLiftIntegrationPartner;
  readonly brand_lift_integration_partner_data?: ThirdPartyIntegrationPartnerData;
  readonly share_cost?: boolean;
}

export interface CampaignThirdPartyBrandSafetyIntegrationPartner {
  readonly brand_safety_integration_partner?: ThirdPartyBrandSafetyIntegrationPartner;
  readonly brand_safety_integration_partner_data?: ThirdPartyIntegrationPartnerData;
}

export interface CampaignThirdPartyConversionAttributionIntegrationPartner {
  readonly conversion_attribution_integration_partner?: ThirdPartyConversionAttributionIntegrationPartner;
  readonly conversion_attribution_integration_partner_data?: ThirdPartyIntegrationPartnerData;
}

export interface CampaignThirdPartyIntegrationPartners {
  readonly viewability_integration_partners?: ReadonlyArray<CampaignThirdPartyViewabilityIntegrationPartner>;
  readonly brand_lift_integration_partners?: ReadonlyArray<CampaignThirdPartyBrandLiftIntegrationPartner>;
  readonly brand_safety_integration_partners?: ReadonlyArray<CampaignThirdPartyBrandSafetyIntegrationPartner>;
  readonly reach_integration_partners?: ReadonlyArray<CampaignThirdPartyReachIntegrationPartner>;
  readonly conversion_attribution_integration_partners?: ReadonlyArray<CampaignThirdPartyConversionAttributionIntegrationPartner>;
}

export interface CampaignThirdPartyReachIntegrationPartner {
  readonly reach_integration_partner?: ThirdPartyReachIntegrationPartner;
  readonly reach_integration_partner_data?: ThirdPartyIntegrationPartnerData;
  readonly share_cost?: boolean;
}

export interface CampaignThirdPartyViewabilityIntegrationPartner {
  readonly viewability_integration_partner?: ThirdPartyViewabilityIntegrationPartner;
  readonly viewability_integration_partner_data?: ThirdPartyIntegrationPartnerData;
  readonly share_cost?: boolean;
}

export interface CampaignToForecast {
  readonly language_constants?: ReadonlyArray<string>;
  readonly geo_target_constants?: ReadonlyArray<string>;
  readonly bidding_strategy?: CampaignBiddingStrategy;
  readonly ad_groups?: ReadonlyArray<ForecastAdGroup>;
}

export interface CarrierConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly country_code?: string;
}

export interface CarrierInfo {
  readonly carrier_constant?: string;
}

export interface CartData {
  readonly merchant_id?: string;
  readonly feed_country_code?: string;
  readonly feed_language_code?: string;
  readonly local_transaction_cost?: number;
  readonly items?: ReadonlyArray<Item>;
}

export interface CartDataSalesView {
  readonly resource_name?: string;
}

export interface CategoryBid {
  readonly category_id?: string;
  readonly manual_cpa_bid_micros?: string;
  readonly target_cpa_bid_micros?: string;
}

export interface ChainFilter {
  readonly chain_id?: string;
  readonly location_attributes?: ReadonlyArray<string>;
}

export interface ChainLocationGroup {
  readonly dynamic_chain_location_group_filters?: ReadonlyArray<ChainFilter>;
}

export type ChainRelationshipType = "UNSPECIFIED" | "UNKNOWN" | "AUTO_DEALERS" | "GENERAL_RETAILERS";

export interface ChainRelationshipTypeEnum {

}

export interface ChainSet {
  readonly relationship_type?: ChainRelationshipType;
  readonly chains?: ReadonlyArray<ChainFilter>;
}

export type ChangeClientType = "UNSPECIFIED" | "UNKNOWN" | "GOOGLE_ADS_WEB_CLIENT" | "GOOGLE_ADS_AUTOMATED_RULE" | "GOOGLE_ADS_SCRIPTS" | "GOOGLE_ADS_BULK_UPLOAD" | "GOOGLE_ADS_API" | "GOOGLE_ADS_EDITOR" | "GOOGLE_ADS_MOBILE_APP" | "GOOGLE_ADS_RECOMMENDATIONS" | "SEARCH_ADS_360_SYNC" | "SEARCH_ADS_360_POST" | "INTERNAL_TOOL" | "OTHER" | "GOOGLE_ADS_RECOMMENDATIONS_SUBSCRIPTION";

export interface ChangeClientTypeEnum {

}

export interface ChangedResource {
  readonly ad?: Ad;
  readonly ad_group?: AdGroup;
  readonly ad_group_criterion?: AdGroupCriterion;
  readonly campaign?: Campaign;
  readonly campaign_budget?: CampaignBudget;
  readonly ad_group_bid_modifier?: AdGroupBidModifier;
  readonly campaign_criterion?: CampaignCriterion;
  readonly ad_group_ad?: AdGroupAd;
  readonly asset?: Asset;
  readonly customer_asset?: CustomerAsset;
  readonly campaign_asset?: CampaignAsset;
  readonly ad_group_asset?: AdGroupAsset;
  readonly asset_set?: AssetSet;
  readonly asset_set_asset?: AssetSetAsset;
  readonly campaign_asset_set?: CampaignAssetSet;
}

export interface ChangeEvent {
  readonly resource_name?: string;
  readonly change_date_time?: string;
  readonly change_resource_type?: ChangeEventResourceType;
  readonly change_resource_name?: string;
  readonly client_type?: ChangeClientType;
  readonly user_email?: string;
  readonly old_resource?: ChangedResource;
  readonly new_resource?: ChangedResource;
  readonly resource_change_operation?: ResourceChangeOperation;
  readonly changed_fields?: string;
  readonly campaign?: string;
  readonly ad_group?: string;
  readonly asset?: string;
}

export type ChangeEventError = "UNSPECIFIED" | "UNKNOWN" | "START_DATE_TOO_OLD" | "CHANGE_DATE_RANGE_INFINITE" | "CHANGE_DATE_RANGE_NEGATIVE" | "LIMIT_NOT_SPECIFIED" | "INVALID_LIMIT_CLAUSE";

export interface ChangeEventErrorEnum {

}

export type ChangeEventResourceType = "UNSPECIFIED" | "UNKNOWN" | "AD" | "AD_GROUP" | "AD_GROUP_CRITERION" | "CAMPAIGN" | "CAMPAIGN_BUDGET" | "AD_GROUP_BID_MODIFIER" | "CAMPAIGN_CRITERION" | "FEED" | "FEED_ITEM" | "CAMPAIGN_FEED" | "AD_GROUP_FEED" | "AD_GROUP_AD" | "ASSET" | "CUSTOMER_ASSET" | "CAMPAIGN_ASSET" | "AD_GROUP_ASSET" | "ASSET_SET" | "ASSET_SET_ASSET" | "CAMPAIGN_ASSET_SET";

export interface ChangeEventResourceTypeEnum {

}

export interface ChangeStatus {
  readonly resource_name?: string;
  readonly last_change_date_time?: string;
  readonly resource_type?: ChangeStatusResourceType;
  readonly campaign?: string;
  readonly ad_group?: string;
  readonly resource_status?: ChangeStatusOperation;
  readonly ad_group_ad?: string;
  readonly ad_group_criterion?: string;
  readonly campaign_criterion?: string;
  readonly ad_group_bid_modifier?: string;
  readonly shared_set?: string;
  readonly campaign_shared_set?: string;
  readonly asset?: string;
  readonly customer_asset?: string;
  readonly campaign_asset?: string;
  readonly ad_group_asset?: string;
  readonly combined_audience?: string;
  readonly asset_group?: string;
  readonly asset_set?: string;
  readonly campaign_budget?: string;
  readonly campaign_asset_set?: string;
}

export type ChangeStatusError = "UNSPECIFIED" | "UNKNOWN" | "START_DATE_TOO_OLD" | "CHANGE_DATE_RANGE_INFINITE" | "CHANGE_DATE_RANGE_NEGATIVE" | "LIMIT_NOT_SPECIFIED" | "INVALID_LIMIT_CLAUSE";

export interface ChangeStatusErrorEnum {

}

export type ChangeStatusOperation = "UNSPECIFIED" | "UNKNOWN" | "ADDED" | "CHANGED" | "REMOVED";

export interface ChangeStatusOperationEnum {

}

export type ChangeStatusResourceType = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP" | "AD_GROUP_AD" | "AD_GROUP_CRITERION" | "CAMPAIGN" | "CAMPAIGN_CRITERION" | "CAMPAIGN_BUDGET" | "FEED" | "FEED_ITEM" | "AD_GROUP_FEED" | "CAMPAIGN_FEED" | "AD_GROUP_BID_MODIFIER" | "SHARED_SET" | "CAMPAIGN_SHARED_SET" | "ASSET" | "CUSTOMER_ASSET" | "CAMPAIGN_ASSET" | "AD_GROUP_ASSET" | "COMBINED_AUDIENCE" | "ASSET_GROUP" | "ASSET_SET" | "CAMPAIGN_ASSET_SET";

export interface ChangeStatusResourceTypeEnum {

}

export interface ChannelAggregateAssetView {
  readonly resource_name?: string;
  readonly advertising_channel_type?: AdvertisingChannelType;
  readonly asset?: string;
  readonly asset_source?: AssetSource;
  readonly field_type?: AssetFieldType;
}

export interface ClickConversion {
  readonly gclid?: string;
  readonly gbraid?: string;
  readonly wbraid?: string;
  readonly conversion_action?: string;
  readonly conversion_date_time?: string;
  readonly conversion_value?: number;
  readonly currency_code?: string;
  readonly order_id?: string;
  readonly external_attribution_data?: ExternalAttributionData;
  readonly custom_variables?: ReadonlyArray<CustomVariable>;
  readonly cart_data?: CartData;
  readonly user_identifiers?: ReadonlyArray<UserIdentifier>;
  readonly conversion_environment?: ConversionEnvironment;
  readonly consent?: Consent;
  readonly customer_type?: ConversionCustomerType;
  readonly user_ip_address?: string;
  readonly session_attributes_encoded?: string;
  readonly session_attributes_key_value_pairs?: SessionAttributesKeyValuePairs;
}

export interface ClickConversionResult {
  readonly gclid?: string;
  readonly gbraid?: string;
  readonly wbraid?: string;
  readonly conversion_action?: string;
  readonly conversion_date_time?: string;
  readonly user_identifiers?: ReadonlyArray<UserIdentifier>;
}

export interface ClickLocation {
  readonly city?: string;
  readonly country?: string;
  readonly metro?: string;
  readonly most_specific?: string;
  readonly region?: string;
}

export type ClickType = "UNSPECIFIED" | "UNKNOWN" | "APP_DEEPLINK" | "BREADCRUMBS" | "BROADBAND_PLAN" | "CALL_TRACKING" | "CALLS" | "CLICK_ON_ENGAGEMENT_AD" | "GET_DIRECTIONS" | "LOCATION_EXPANSION" | "LOCATION_FORMAT_CALL" | "LOCATION_FORMAT_DIRECTIONS" | "LOCATION_FORMAT_IMAGE" | "LOCATION_FORMAT_LANDING_PAGE" | "LOCATION_FORMAT_MAP" | "LOCATION_FORMAT_STORE_INFO" | "LOCATION_FORMAT_TEXT" | "MOBILE_CALL_TRACKING" | "OFFER_PRINTS" | "OTHER" | "PRODUCT_EXTENSION_CLICKS" | "PRODUCT_LISTING_AD_CLICKS" | "SITELINKS" | "STORE_LOCATOR" | "URL_CLICKS" | "VIDEO_APP_STORE_CLICKS" | "VIDEO_CALL_TO_ACTION_CLICKS" | "VIDEO_CARD_ACTION_HEADLINE_CLICKS" | "VIDEO_END_CAP_CLICKS" | "VIDEO_WEBSITE_CLICKS" | "VISUAL_SITELINKS" | "WIRELESS_PLAN" | "PRODUCT_LISTING_AD_LOCAL" | "PRODUCT_LISTING_AD_MULTICHANNEL_LOCAL" | "PRODUCT_LISTING_AD_MULTICHANNEL_ONLINE" | "PRODUCT_LISTING_ADS_COUPON" | "PRODUCT_LISTING_AD_TRANSACTABLE" | "PRODUCT_AD_APP_DEEPLINK" | "SHOWCASE_AD_CATEGORY_LINK" | "SHOWCASE_AD_LOCAL_STOREFRONT_LINK" | "SHOWCASE_AD_ONLINE_PRODUCT_LINK" | "SHOWCASE_AD_LOCAL_PRODUCT_LINK" | "PROMOTION_EXTENSION" | "SWIPEABLE_GALLERY_AD_HEADLINE" | "SWIPEABLE_GALLERY_AD_SWIPES" | "SWIPEABLE_GALLERY_AD_SEE_MORE" | "SWIPEABLE_GALLERY_AD_SITELINK_ONE" | "SWIPEABLE_GALLERY_AD_SITELINK_TWO" | "SWIPEABLE_GALLERY_AD_SITELINK_THREE" | "SWIPEABLE_GALLERY_AD_SITELINK_FOUR" | "SWIPEABLE_GALLERY_AD_SITELINK_FIVE" | "HOTEL_PRICE" | "PRICE_EXTENSION" | "HOTEL_BOOK_ON_GOOGLE_ROOM_SELECTION" | "SHOPPING_COMPARISON_LISTING" | "CROSS_NETWORK" | "AD_IMAGE" | "TRAVEL_ASSETS" | "VEHICLE_ASSETS" | "PRODUCT_ASSETS" | "VIDEO_CHANNEL_CLICK" | "VIDEO_RELATED_VIDEOS_CLICK" | "CLICK_TO_MESSAGE_THIRD_PARTY_CLICK" | "CLICK_TO_MESSAGE_LANDING_PAGE_CLICK";

export interface ClickTypeEnum {

}

export interface ClickView {
  readonly resource_name?: string;
  readonly gclid?: string;
  readonly area_of_interest?: ClickLocation;
  readonly location_of_presence?: ClickLocation;
  readonly page_number?: string;
  readonly ad_group_ad?: string;
  readonly campaign_location_target?: string;
  readonly user_list?: string;
  readonly keyword?: string;
  readonly keyword_info?: KeywordInfo;
}

export type ClickViewError = "UNSPECIFIED" | "UNKNOWN" | "EXPECTED_FILTER_ON_A_SINGLE_DAY" | "DATE_TOO_OLD";

export interface ClickViewErrorEnum {

}

export interface CoarseGrainedConversionValueMappings {
  readonly low_conversion_value_mapping?: ConversionValueMapping;
  readonly medium_conversion_value_mapping?: ConversionValueMapping;
  readonly high_conversion_value_mapping?: ConversionValueMapping;
}

export type CollectionSizeError = "UNSPECIFIED" | "UNKNOWN" | "TOO_FEW" | "TOO_MANY";

export interface CollectionSizeErrorEnum {

}

export interface CombinedAudience {
  readonly resource_name?: string;
  readonly id?: string;
  readonly status?: CombinedAudienceStatus;
  readonly name?: string;
  readonly description?: string;
}

export interface CombinedAudienceInfo {
  readonly combined_audience?: string;
}

export type CombinedAudienceStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CombinedAudienceStatusEnum {

}

export interface Commission {
  readonly commission_rate_micros?: string;
}

export interface ConceptGroup {
  readonly name?: string;
  readonly type?: KeywordPlanConceptGroupType;
}

export interface Consent {
  readonly ad_user_data?: ConsentStatus;
  readonly ad_personalization?: ConsentStatus;
}

export type ConsentStatus = "UNSPECIFIED" | "UNKNOWN" | "GRANTED" | "DENIED";

export interface ConsentStatusEnum {

}

export interface ContactDetails {
  readonly phone_number?: string;
  readonly consumer_name?: string;
  readonly phone_number_extension?: string;
}

export type ContentCreatorInsightsError = "UNSPECIFIED" | "UNKNOWN" | "DIMENSION_INCOMPATIBLE_WITH_AUDIENCE_COMBINATIONS";

export interface ContentCreatorInsightsErrorEnum {

}

export type ContentCreatorInsightsSupplementalData = "UNSPECIFIED" | "UNKNOWN" | "LOCAL_CREATOR_DATA";

export interface ContentCreatorInsightsSupplementalDataEnum {

}

export interface ContentCriterionView {
  readonly resource_name?: string;
}

export interface ContentLabelInfo {
  readonly type?: ContentLabelType;
}

export type ContentLabelType = "UNSPECIFIED" | "UNKNOWN" | "SEXUALLY_SUGGESTIVE" | "BELOW_THE_FOLD" | "PARKED_DOMAIN" | "JUVENILE" | "PROFANITY" | "TRAGEDY" | "VIDEO" | "VIDEO_RATING_DV_G" | "VIDEO_RATING_DV_PG" | "VIDEO_RATING_DV_T" | "VIDEO_RATING_DV_MA" | "VIDEO_NOT_YET_RATED" | "EMBEDDED_VIDEO" | "LIVE_STREAMING_VIDEO" | "SOCIAL_ISSUES" | "BRAND_SUITABILITY_CONTENT_FOR_FAMILIES" | "BRAND_SUITABILITY_GAMES_FIGHTING" | "BRAND_SUITABILITY_GAMES_MATURE" | "BRAND_SUITABILITY_HEALTH_SENSITIVE" | "BRAND_SUITABILITY_HEALTH_SOURCE_UNDETERMINED" | "BRAND_SUITABILITY_NEWS_RECENT" | "BRAND_SUITABILITY_NEWS_SENSITIVE" | "BRAND_SUITABILITY_NEWS_SOURCE_NOT_FEATURED" | "BRAND_SUITABILITY_POLITICS" | "BRAND_SUITABILITY_RELIGION";

export interface ContentLabelTypeEnum {

}

export type ContextError = "UNSPECIFIED" | "UNKNOWN" | "OPERATION_NOT_PERMITTED_FOR_CONTEXT" | "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE";

export interface ContextErrorEnum {

}

export interface Conversation {
  readonly local_services_lead?: string;
  readonly text?: string;
}

export interface ConversationOrError {
  readonly local_services_lead_conversation?: string;
  readonly partial_failure_error?: unknown;
}

export type ConversationType = "UNSPECIFIED" | "UNKNOWN" | "EMAIL" | "MESSAGE" | "PHONE_CALL" | "SMS" | "BOOKING" | "WHATSAPP" | "ADS_API";

export interface ConversionAction {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly status?: ConversionActionStatus;
  readonly type?: ConversionActionType;
  readonly origin?: ConversionOrigin;
  readonly primary_for_goal?: boolean;
  readonly category?: ConversionActionCategory;
  readonly owner_customer?: string;
  readonly include_in_conversions_metric?: boolean;
  readonly click_through_lookback_window_days?: string;
  readonly view_through_lookback_window_days?: string;
  readonly value_settings?: ValueSettings;
  readonly counting_type?: ConversionActionCountingType;
  readonly attribution_model_settings?: AttributionModelSettings;
  readonly tag_snippets?: ReadonlyArray<TagSnippet>;
  readonly phone_call_duration_seconds?: string;
  readonly app_id?: string;
  readonly mobile_app_vendor?: MobileAppVendor;
  readonly firebase_settings?: FirebaseSettings;
  readonly third_party_app_analytics_settings?: ThirdPartyAppAnalyticsSettings;
  readonly google_analytics_4_settings?: GoogleAnalytics4Settings;
}

export type ConversionActionCategory = "UNSPECIFIED" | "UNKNOWN" | "DEFAULT" | "PAGE_VIEW" | "PURCHASE" | "SIGNUP" | "DOWNLOAD" | "ADD_TO_CART" | "BEGIN_CHECKOUT" | "SUBSCRIBE_PAID" | "PHONE_CALL_LEAD" | "IMPORTED_LEAD" | "SUBMIT_LEAD_FORM" | "BOOK_APPOINTMENT" | "REQUEST_QUOTE" | "GET_DIRECTIONS" | "OUTBOUND_CLICK" | "CONTACT" | "ENGAGEMENT" | "STORE_VISIT" | "STORE_SALE" | "QUALIFIED_LEAD" | "CONVERTED_LEAD" | "YOUTUBE_FOLLOW_ON_VIEWS";

export interface ConversionActionCategoryEnum {

}

export type ConversionActionCountingType = "UNSPECIFIED" | "UNKNOWN" | "ONE_PER_CLICK" | "MANY_PER_CLICK";

export interface ConversionActionCountingTypeEnum {

}

export type ConversionActionError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_NAME" | "DUPLICATE_APP_ID" | "TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD" | "BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION" | "DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED" | "DATA_DRIVEN_MODEL_EXPIRED" | "DATA_DRIVEN_MODEL_STALE" | "DATA_DRIVEN_MODEL_UNKNOWN" | "CREATION_NOT_SUPPORTED" | "UPDATE_NOT_SUPPORTED" | "CANNOT_SET_RULE_BASED_ATTRIBUTION_MODELS";

export interface ConversionActionErrorEnum {

}

export interface ConversionActionOperation {
  readonly update_mask?: string;
  readonly create?: ConversionAction;
  readonly update?: ConversionAction;
  readonly remove?: string;
}

export type ConversionActionStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "HIDDEN";

export interface ConversionActionStatusEnum {

}

export type ConversionActionType = "UNSPECIFIED" | "UNKNOWN" | "AD_CALL" | "CLICK_TO_CALL" | "GOOGLE_PLAY_DOWNLOAD" | "GOOGLE_PLAY_IN_APP_PURCHASE" | "UPLOAD_CALLS" | "UPLOAD_CLICKS" | "WEBPAGE" | "WEBSITE_CALL" | "STORE_SALES_DIRECT_UPLOAD" | "STORE_SALES" | "FIREBASE_ANDROID_FIRST_OPEN" | "FIREBASE_ANDROID_IN_APP_PURCHASE" | "FIREBASE_ANDROID_CUSTOM" | "FIREBASE_IOS_FIRST_OPEN" | "FIREBASE_IOS_IN_APP_PURCHASE" | "FIREBASE_IOS_CUSTOM" | "THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN" | "THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE" | "THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM" | "THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN" | "THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE" | "THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM" | "ANDROID_APP_PRE_REGISTRATION" | "ANDROID_INSTALLS_ALL_OTHER_APPS" | "FLOODLIGHT_ACTION" | "FLOODLIGHT_TRANSACTION" | "GOOGLE_HOSTED" | "LEAD_FORM_SUBMIT" | "SALESFORCE" | "SEARCH_ADS_360" | "SMART_CAMPAIGN_AD_CLICKS_TO_CALL" | "SMART_CAMPAIGN_MAP_CLICKS_TO_CALL" | "SMART_CAMPAIGN_MAP_DIRECTIONS" | "SMART_CAMPAIGN_TRACKED_CALLS" | "STORE_VISITS" | "WEBPAGE_CODELESS" | "UNIVERSAL_ANALYTICS_GOAL" | "UNIVERSAL_ANALYTICS_TRANSACTION" | "GOOGLE_ANALYTICS_4_CUSTOM" | "GOOGLE_ANALYTICS_4_PURCHASE" | "GOOGLE_ANALYTICS_4_GENERATE_LEAD" | "GOOGLE_ANALYTICS_4_QUALIFY_LEAD" | "GOOGLE_ANALYTICS_4_CLOSE_CONVERT_LEAD" | "FIREBASE_ANDROID_GENERATE_LEAD" | "FIREBASE_ANDROID_QUALIFY_LEAD" | "FIREBASE_ANDROID_CLOSE_CONVERT_LEAD" | "FIREBASE_IOS_GENERATE_LEAD" | "FIREBASE_IOS_QUALIFY_LEAD" | "FIREBASE_IOS_CLOSE_CONVERT_LEAD" | "LOCAL_SERVICES_ADS";

export interface ConversionActionTypeEnum {

}

export interface ConversionAdjustment {
  readonly gclid_date_time_pair?: GclidDateTimePair;
  readonly order_id?: string;
  readonly conversion_action?: string;
  readonly adjustment_date_time?: string;
  readonly adjustment_type?: ConversionAdjustmentType;
  readonly restatement_value?: RestatementValue;
  readonly user_identifiers?: ReadonlyArray<UserIdentifier>;
  readonly user_agent?: string;
}

export interface ConversionAdjustmentResult {
  readonly gclid_date_time_pair?: GclidDateTimePair;
  readonly order_id?: string;
  readonly conversion_action?: string;
  readonly adjustment_date_time?: string;
  readonly adjustment_type?: ConversionAdjustmentType;
}

export type ConversionAdjustmentType = "UNSPECIFIED" | "UNKNOWN" | "RETRACTION" | "RESTATEMENT" | "ENHANCEMENT";

export interface ConversionAdjustmentTypeEnum {

}

export type ConversionAdjustmentUploadError = "UNSPECIFIED" | "UNKNOWN" | "TOO_RECENT_CONVERSION_ACTION" | "CONVERSION_ALREADY_RETRACTED" | "CONVERSION_NOT_FOUND" | "CONVERSION_EXPIRED" | "ADJUSTMENT_PRECEDES_CONVERSION" | "MORE_RECENT_RESTATEMENT_FOUND" | "TOO_RECENT_CONVERSION" | "CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE" | "TOO_MANY_ADJUSTMENTS_IN_REQUEST" | "TOO_MANY_ADJUSTMENTS" | "RESTATEMENT_ALREADY_EXISTS" | "DUPLICATE_ADJUSTMENT_IN_REQUEST" | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS" | "CONVERSION_ACTION_NOT_ELIGIBLE_FOR_ENHANCEMENT" | "INVALID_USER_IDENTIFIER" | "UNSUPPORTED_USER_IDENTIFIER" | "GCLID_DATE_TIME_PAIR_AND_ORDER_ID_BOTH_SET" | "CONVERSION_ALREADY_ENHANCED" | "DUPLICATE_ENHANCEMENT_IN_REQUEST" | "CUSTOMER_DATA_POLICY_PROHIBITS_ENHANCEMENT" | "MISSING_ORDER_ID_FOR_WEBPAGE" | "ORDER_ID_CONTAINS_PII" | "INVALID_JOB_ID" | "NO_CONVERSION_ACTION_FOUND" | "INVALID_CONVERSION_ACTION_TYPE";

export interface ConversionAdjustmentUploadErrorEnum {

}

export type ConversionAttributionEventType = "UNSPECIFIED" | "UNKNOWN" | "IMPRESSION" | "INTERACTION" | "ENGAGED_VIEW";

export interface ConversionAttributionEventTypeEnum {

}

export type ConversionCustomerType = "UNSPECIFIED" | "UNKNOWN" | "NEW" | "RETURNING";

export interface ConversionCustomerTypeEnum {

}

export interface ConversionCustomVariable {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly tag?: string;
  readonly status?: ConversionCustomVariableStatus;
  readonly owner_customer?: string;
}

export type ConversionCustomVariableError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_NAME" | "DUPLICATE_TAG" | "RESERVED_TAG";

export interface ConversionCustomVariableErrorEnum {

}

export interface ConversionCustomVariableOperation {
  readonly update_mask?: string;
  readonly create?: ConversionCustomVariable;
  readonly update?: ConversionCustomVariable;
}

export type ConversionCustomVariableStatus = "UNSPECIFIED" | "UNKNOWN" | "ACTIVATION_NEEDED" | "ENABLED" | "PAUSED";

export interface ConversionCustomVariableStatusEnum {

}

export type ConversionEnvironment = "UNSPECIFIED" | "UNKNOWN" | "APP" | "WEB";

export interface ConversionEnvironmentEnum {

}

export interface ConversionGoalCampaignConfig {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly goal_config_level?: GoalConfigLevel;
  readonly custom_conversion_goal?: string;
}

export type ConversionGoalCampaignConfigError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN" | "CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER" | "CAMPAIGN_CANNOT_USE_UNIFIED_GOALS" | "EMPTY_CONVERSION_GOALS" | "STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED" | "PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES";

export interface ConversionGoalCampaignConfigErrorEnum {

}

export interface ConversionGoalCampaignConfigOperation {
  readonly update_mask?: string;
  readonly update?: ConversionGoalCampaignConfig;
}

export type ConversionLagBucket = "UNSPECIFIED" | "UNKNOWN" | "LESS_THAN_ONE_DAY" | "ONE_TO_TWO_DAYS" | "TWO_TO_THREE_DAYS" | "THREE_TO_FOUR_DAYS" | "FOUR_TO_FIVE_DAYS" | "FIVE_TO_SIX_DAYS" | "SIX_TO_SEVEN_DAYS" | "SEVEN_TO_EIGHT_DAYS" | "EIGHT_TO_NINE_DAYS" | "NINE_TO_TEN_DAYS" | "TEN_TO_ELEVEN_DAYS" | "ELEVEN_TO_TWELVE_DAYS" | "TWELVE_TO_THIRTEEN_DAYS" | "THIRTEEN_TO_FOURTEEN_DAYS" | "FOURTEEN_TO_TWENTY_ONE_DAYS" | "TWENTY_ONE_TO_THIRTY_DAYS" | "THIRTY_TO_FORTY_FIVE_DAYS" | "FORTY_FIVE_TO_SIXTY_DAYS" | "SIXTY_TO_NINETY_DAYS";

export interface ConversionLagBucketEnum {

}

export type ConversionOrAdjustmentLagBucket = "UNSPECIFIED" | "UNKNOWN" | "CONVERSION_LESS_THAN_ONE_DAY" | "CONVERSION_ONE_TO_TWO_DAYS" | "CONVERSION_TWO_TO_THREE_DAYS" | "CONVERSION_THREE_TO_FOUR_DAYS" | "CONVERSION_FOUR_TO_FIVE_DAYS" | "CONVERSION_FIVE_TO_SIX_DAYS" | "CONVERSION_SIX_TO_SEVEN_DAYS" | "CONVERSION_SEVEN_TO_EIGHT_DAYS" | "CONVERSION_EIGHT_TO_NINE_DAYS" | "CONVERSION_NINE_TO_TEN_DAYS" | "CONVERSION_TEN_TO_ELEVEN_DAYS" | "CONVERSION_ELEVEN_TO_TWELVE_DAYS" | "CONVERSION_TWELVE_TO_THIRTEEN_DAYS" | "CONVERSION_THIRTEEN_TO_FOURTEEN_DAYS" | "CONVERSION_FOURTEEN_TO_TWENTY_ONE_DAYS" | "CONVERSION_TWENTY_ONE_TO_THIRTY_DAYS" | "CONVERSION_THIRTY_TO_FORTY_FIVE_DAYS" | "CONVERSION_FORTY_FIVE_TO_SIXTY_DAYS" | "CONVERSION_SIXTY_TO_NINETY_DAYS" | "ADJUSTMENT_LESS_THAN_ONE_DAY" | "ADJUSTMENT_ONE_TO_TWO_DAYS" | "ADJUSTMENT_TWO_TO_THREE_DAYS" | "ADJUSTMENT_THREE_TO_FOUR_DAYS" | "ADJUSTMENT_FOUR_TO_FIVE_DAYS" | "ADJUSTMENT_FIVE_TO_SIX_DAYS" | "ADJUSTMENT_SIX_TO_SEVEN_DAYS" | "ADJUSTMENT_SEVEN_TO_EIGHT_DAYS" | "ADJUSTMENT_EIGHT_TO_NINE_DAYS" | "ADJUSTMENT_NINE_TO_TEN_DAYS" | "ADJUSTMENT_TEN_TO_ELEVEN_DAYS" | "ADJUSTMENT_ELEVEN_TO_TWELVE_DAYS" | "ADJUSTMENT_TWELVE_TO_THIRTEEN_DAYS" | "ADJUSTMENT_THIRTEEN_TO_FOURTEEN_DAYS" | "ADJUSTMENT_FOURTEEN_TO_TWENTY_ONE_DAYS" | "ADJUSTMENT_TWENTY_ONE_TO_THIRTY_DAYS" | "ADJUSTMENT_THIRTY_TO_FORTY_FIVE_DAYS" | "ADJUSTMENT_FORTY_FIVE_TO_SIXTY_DAYS" | "ADJUSTMENT_SIXTY_TO_NINETY_DAYS" | "ADJUSTMENT_NINETY_TO_ONE_HUNDRED_AND_FORTY_FIVE_DAYS" | "CONVERSION_UNKNOWN" | "ADJUSTMENT_UNKNOWN";

export interface ConversionOrAdjustmentLagBucketEnum {

}

export type ConversionOrigin = "UNSPECIFIED" | "UNKNOWN" | "WEBSITE" | "GOOGLE_HOSTED" | "APP" | "CALL_FROM_ADS" | "STORE" | "YOUTUBE_HOSTED" | "LOCAL_SERVICES_ADS";

export interface ConversionOriginEnum {

}

export interface ConversionRateSuggestion {
  readonly conversion_rate_model?: ReachPlanConversionRateModel;
  readonly plannable_product_code?: string;
  readonly surface_targeting?: SurfaceTargeting;
  readonly conversion_rate?: number;
}

export interface ConversionTrackingSetting {
  readonly conversion_tracking_id?: string;
  readonly cross_account_conversion_tracking_id?: string;
  readonly accepted_customer_data_terms?: boolean;
  readonly conversion_tracking_status?: ConversionTrackingStatus;
  readonly enhanced_conversions_for_leads_enabled?: boolean;
  readonly google_ads_conversion_customer?: string;
}

export type ConversionTrackingStatus = "UNSPECIFIED" | "UNKNOWN" | "NOT_CONVERSION_TRACKED" | "CONVERSION_TRACKING_MANAGED_BY_SELF" | "CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER" | "CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER";

export interface ConversionTrackingStatusEnum {

}

export type ConversionUploadError = "UNSPECIFIED" | "UNKNOWN" | "TOO_MANY_CONVERSIONS_IN_REQUEST" | "UNPARSEABLE_GCLID" | "CONVERSION_PRECEDES_EVENT" | "EXPIRED_EVENT" | "TOO_RECENT_EVENT" | "EVENT_NOT_FOUND" | "UNAUTHORIZED_CUSTOMER" | "TOO_RECENT_CONVERSION_ACTION" | "CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIME" | "EXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" | "EXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" | "ORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" | "ORDER_ID_ALREADY_IN_USE" | "DUPLICATE_ORDER_ID" | "TOO_RECENT_CALL" | "EXPIRED_CALL" | "CALL_NOT_FOUND" | "CONVERSION_PRECEDES_CALL" | "CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME" | "UNPARSEABLE_CALLERS_PHONE_NUMBER" | "CLICK_CONVERSION_ALREADY_EXISTS" | "CALL_CONVERSION_ALREADY_EXISTS" | "DUPLICATE_CLICK_CONVERSION_IN_REQUEST" | "DUPLICATE_CALL_CONVERSION_IN_REQUEST" | "CUSTOM_VARIABLE_NOT_ENABLED" | "CUSTOM_VARIABLE_VALUE_CONTAINS_PII" | "INVALID_CUSTOMER_FOR_CLICK" | "INVALID_CUSTOMER_FOR_CALL" | "CONVERSION_NOT_COMPLIANT_WITH_ATT_POLICY" | "CLICK_NOT_FOUND" | "INVALID_USER_IDENTIFIER" | "EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION_NOT_PERMITTED_WITH_USER_IDENTIFIER" | "UNSUPPORTED_USER_IDENTIFIER" | "GBRAID_WBRAID_BOTH_SET" | "UNPARSEABLE_WBRAID" | "UNPARSEABLE_GBRAID" | "ONE_PER_CLICK_CONVERSION_ACTION_NOT_PERMITTED_WITH_BRAID" | "CUSTOMER_DATA_POLICY_PROHIBITS_ENHANCED_CONVERSIONS" | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS" | "ORDER_ID_CONTAINS_PII" | "CUSTOMER_NOT_ENABLED_ENHANCED_CONVERSIONS_FOR_LEADS" | "INVALID_JOB_ID" | "NO_CONVERSION_ACTION_FOUND" | "INVALID_CONVERSION_ACTION_TYPE";

export interface ConversionUploadErrorEnum {

}

export interface ConversionValueMapping {
  readonly min_time_post_install_hours?: string;
  readonly max_time_post_install_hours?: string;
  readonly mapped_events?: ReadonlyArray<Event>;
}

export interface ConversionValueRule {
  readonly resource_name?: string;
  readonly id?: string;
  readonly action?: ValueRuleAction;
  readonly geo_location_condition?: ValueRuleGeoLocationCondition;
  readonly device_condition?: ValueRuleDeviceCondition;
  readonly audience_condition?: ValueRuleAudienceCondition;
  readonly itinerary_condition?: ValueRuleItineraryCondition;
  readonly owner_customer?: string;
  readonly status?: ConversionValueRuleStatus;
}

export type ConversionValueRuleError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_GEO_TARGET_CONSTANT" | "CONFLICTING_INCLUDED_AND_EXCLUDED_GEO_TARGET" | "CONFLICTING_CONDITIONS" | "CANNOT_REMOVE_IF_INCLUDED_IN_VALUE_RULE_SET" | "CONDITION_NOT_ALLOWED" | "FIELD_MUST_BE_UNSET" | "CANNOT_PAUSE_UNLESS_VALUE_RULE_SET_IS_PAUSED" | "UNTARGETABLE_GEO_TARGET" | "INVALID_AUDIENCE_USER_LIST" | "INACCESSIBLE_USER_LIST" | "INVALID_AUDIENCE_USER_INTEREST" | "CANNOT_ADD_RULE_WITH_STATUS_REMOVED" | "NO_DAY_OF_WEEK_SELECTED";

export interface ConversionValueRuleErrorEnum {

}

export interface ConversionValueRuleOperation {
  readonly update_mask?: string;
  readonly create?: ConversionValueRule;
  readonly update?: ConversionValueRule;
  readonly remove?: string;
}

export type ConversionValueRulePrimaryDimension = "UNSPECIFIED" | "UNKNOWN" | "NO_RULE_APPLIED" | "ORIGINAL" | "NEW_VS_RETURNING_USER" | "GEO_LOCATION" | "DEVICE" | "AUDIENCE" | "MULTIPLE" | "ITINERARY";

export interface ConversionValueRulePrimaryDimensionEnum {

}

export interface ConversionValueRuleSet {
  readonly resource_name?: string;
  readonly id?: string;
  readonly conversion_value_rules?: ReadonlyArray<string>;
  readonly dimensions?: ReadonlyArray<ValueRuleSetDimension>;
  readonly owner_customer?: string;
  readonly attachment_type?: ValueRuleSetAttachmentType;
  readonly campaign?: string;
  readonly status?: ConversionValueRuleSetStatus;
  readonly conversion_action_categories?: ReadonlyArray<ConversionActionCategory>;
}

export type ConversionValueRuleSetError = "UNSPECIFIED" | "UNKNOWN" | "CONFLICTING_VALUE_RULE_CONDITIONS" | "INVALID_VALUE_RULE" | "DIMENSIONS_UPDATE_ONLY_ALLOW_APPEND" | "CONDITION_TYPE_NOT_ALLOWED" | "DUPLICATE_DIMENSIONS" | "INVALID_CAMPAIGN_ID" | "CANNOT_PAUSE_UNLESS_ALL_VALUE_RULES_ARE_PAUSED" | "SHOULD_PAUSE_WHEN_ALL_VALUE_RULES_ARE_PAUSED" | "VALUE_RULES_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE" | "INELIGIBLE_CONVERSION_ACTION_CATEGORIES" | "DIMENSION_NO_CONDITION_USED_WITH_OTHER_DIMENSIONS" | "DIMENSION_NO_CONDITION_NOT_ALLOWED" | "UNSUPPORTED_CONVERSION_ACTION_CATEGORIES" | "DIMENSION_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE";

export interface ConversionValueRuleSetErrorEnum {

}

export interface ConversionValueRuleSetOperation {
  readonly update_mask?: string;
  readonly create?: ConversionValueRuleSet;
  readonly update?: ConversionValueRuleSet;
  readonly remove?: string;
}

export type ConversionValueRuleSetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "PAUSED";

export interface ConversionValueRuleSetStatusEnum {

}

export type ConversionValueRuleStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "PAUSED";

export interface ConversionValueRuleStatusEnum {

}

export type ConvertingUserPriorEngagementTypeAndLtvBucket = "UNSPECIFIED" | "UNKNOWN" | "NEW" | "RETURNING" | "NEW_AND_HIGH_LTV";

export interface ConvertingUserPriorEngagementTypeAndLtvBucketEnum {

}

export type CountryCodeError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_COUNTRY_CODE";

export interface CountryCodeErrorEnum {

}

export interface CountryConstraint {
  readonly country_criterion?: string;
}

export interface CountryConstraintList {
  readonly total_targeted_countries?: number;
  readonly countries?: ReadonlyArray<CountryConstraint>;
}

export interface CpcBidSimulationPoint {
  readonly required_budget_amount_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
  readonly cpc_bid_micros?: string;
  readonly cpc_bid_scaling_modifier?: number;
}

export interface CpcBidSimulationPointList {
  readonly points?: ReadonlyArray<CpcBidSimulationPoint>;
}

export interface CpvBidSimulationPoint {
  readonly cpv_bid_micros?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly views?: string;
}

export interface CpvBidSimulationPointList {
  readonly points?: ReadonlyArray<CpvBidSimulationPoint>;
}

export interface CreateAccountLinkRequest {
  readonly customer_id?: string;
  readonly account_link?: AccountLink;
}

export interface CreateAccountLinkResponse {
  readonly resource_name?: string;
}

export interface CreateCustomerClientRequest {
  readonly customer_id?: string;
  readonly customer_client?: Customer;
  readonly email_address?: string;
  readonly access_role?: AccessRole;
  readonly validate_only?: boolean;
}

export interface CreateCustomerClientResponse {
  readonly resource_name?: string;
  readonly invitation_link?: string;
}

export interface CreateDataLinkRequest {
  readonly customer_id?: string;
  readonly data_link?: DataLink;
}

export interface CreateDataLinkResponse {
  readonly resource_name?: string;
}

export interface CreateOfflineUserDataJobRequest {
  readonly customer_id?: string;
  readonly job?: OfflineUserDataJob;
  readonly validate_only?: boolean;
  readonly enable_match_rate_range_preview?: boolean;
}

export interface CreateOfflineUserDataJobResponse {
  readonly resource_name?: string;
}

export interface CreateProductLinkInvitationRequest {
  readonly customer_id?: string;
  readonly product_link_invitation?: ProductLinkInvitation;
}

export interface CreateProductLinkInvitationResponse {
  readonly resource_name?: string;
}

export interface CreateProductLinkRequest {
  readonly customer_id?: string;
  readonly product_link?: ProductLink;
}

export interface CreateProductLinkResponse {
  readonly resource_name?: string;
}

export interface CreateYouTubeVideoUploadRequest {
  readonly customer_id?: string;
  readonly you_tube_video_upload?: YouTubeVideoUpload;
}

export interface CreateYouTubeVideoUploadResponse {
  readonly resource_name?: string;
}

export interface CreditDetails {
  readonly credit_state?: CreditState;
  readonly credit_state_last_update_date_time?: string;
}

export type CreditIssuanceDecision = "UNSPECIFIED" | "UNKNOWN" | "SUCCESS_NOT_REACHED_THRESHOLD" | "SUCCESS_REACHED_THRESHOLD" | "FAIL_OVER_THRESHOLD" | "FAIL_NOT_ELIGIBLE";

export type CreditState = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "CREDITED";

export interface CriterionCategoryAvailability {
  readonly channel?: CriterionCategoryChannelAvailability;
  readonly locale?: ReadonlyArray<CriterionCategoryLocaleAvailability>;
}

export interface CriterionCategoryChannelAvailability {
  readonly availability_mode?: CriterionCategoryChannelAvailabilityMode;
  readonly advertising_channel_type?: AdvertisingChannelType;
  readonly advertising_channel_sub_type?: ReadonlyArray<AdvertisingChannelSubType>;
  readonly include_default_channel_sub_type?: boolean;
}

export type CriterionCategoryChannelAvailabilityMode = "UNSPECIFIED" | "UNKNOWN" | "ALL_CHANNELS" | "CHANNEL_TYPE_AND_ALL_SUBTYPES" | "CHANNEL_TYPE_AND_SUBSET_SUBTYPES";

export interface CriterionCategoryChannelAvailabilityModeEnum {

}

export interface CriterionCategoryLocaleAvailability {
  readonly availability_mode?: CriterionCategoryLocaleAvailabilityMode;
  readonly country_code?: string;
  readonly language_code?: string;
}

export type CriterionCategoryLocaleAvailabilityMode = "UNSPECIFIED" | "UNKNOWN" | "ALL_LOCALES" | "COUNTRY_AND_ALL_LANGUAGES" | "LANGUAGE_AND_ALL_COUNTRIES" | "COUNTRY_AND_LANGUAGE";

export interface CriterionCategoryLocaleAvailabilityModeEnum {

}

export type CriterionError = "UNSPECIFIED" | "UNKNOWN" | "CONCRETE_TYPE_REQUIRED" | "INVALID_EXCLUDED_CATEGORY" | "INVALID_KEYWORD_TEXT" | "KEYWORD_TEXT_TOO_LONG" | "KEYWORD_HAS_TOO_MANY_WORDS" | "KEYWORD_HAS_INVALID_CHARS" | "INVALID_PLACEMENT_URL" | "INVALID_USER_LIST" | "INVALID_USER_INTEREST" | "INVALID_FORMAT_FOR_PLACEMENT_URL" | "PLACEMENT_URL_IS_TOO_LONG" | "PLACEMENT_URL_HAS_ILLEGAL_CHAR" | "PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE" | "PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION" | "INVALID_TOPIC_PATH" | "INVALID_YOUTUBE_CHANNEL_ID" | "INVALID_YOUTUBE_VIDEO_ID" | "YOUTUBE_VERTICAL_CHANNEL_DEPRECATED" | "YOUTUBE_DEMOGRAPHIC_CHANNEL_DEPRECATED" | "YOUTUBE_URL_UNSUPPORTED" | "CANNOT_EXCLUDE_CRITERIA_TYPE" | "CANNOT_ADD_CRITERIA_TYPE" | "CANNOT_EXCLUDE_SIMILAR_USER_LIST" | "CANNOT_ADD_CLOSED_USER_LIST" | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_ONLY_CAMPAIGNS" | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_CAMPAIGNS" | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SHOPPING_CAMPAIGNS" | "CANNOT_ADD_USER_INTERESTS_TO_SEARCH_CAMPAIGNS" | "CANNOT_SET_BIDS_ON_CRITERION_TYPE_IN_SEARCH_CAMPAIGNS" | "CANNOT_ADD_URLS_TO_CRITERION_TYPE_FOR_CAMPAIGN_TYPE" | "INVALID_COMBINED_AUDIENCE" | "INVALID_CUSTOM_AFFINITY" | "INVALID_CUSTOM_INTENT" | "INVALID_CUSTOM_AUDIENCE" | "INVALID_IP_ADDRESS" | "INVALID_IP_FORMAT" | "INVALID_MOBILE_APP" | "INVALID_MOBILE_APP_CATEGORY" | "INVALID_CRITERION_ID" | "CANNOT_TARGET_CRITERION" | "CANNOT_TARGET_OBSOLETE_CRITERION" | "CRITERION_ID_AND_TYPE_MISMATCH" | "INVALID_PROXIMITY_RADIUS" | "INVALID_PROXIMITY_RADIUS_UNITS" | "INVALID_STREETADDRESS_LENGTH" | "INVALID_CITYNAME_LENGTH" | "INVALID_REGIONCODE_LENGTH" | "INVALID_REGIONNAME_LENGTH" | "INVALID_POSTALCODE_LENGTH" | "INVALID_COUNTRY_CODE" | "INVALID_LATITUDE" | "INVALID_LONGITUDE" | "PROXIMITY_GEOPOINT_AND_ADDRESS_BOTH_CANNOT_BE_NULL" | "INVALID_PROXIMITY_ADDRESS" | "INVALID_USER_DOMAIN_NAME" | "CRITERION_PARAMETER_TOO_LONG" | "AD_SCHEDULE_TIME_INTERVALS_OVERLAP" | "AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS" | "AD_SCHEDULE_INVALID_TIME_INTERVAL" | "AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT" | "AD_SCHEDULE_CRITERION_ID_MISMATCHING_FIELDS" | "CANNOT_BID_MODIFY_CRITERION_TYPE" | "CANNOT_BID_MODIFY_CRITERION_CAMPAIGN_OPTED_OUT" | "CANNOT_BID_MODIFY_NEGATIVE_CRITERION" | "BID_MODIFIER_ALREADY_EXISTS" | "FEED_ID_NOT_ALLOWED" | "ACCOUNT_INELIGIBLE_FOR_CRITERIA_TYPE" | "CRITERIA_TYPE_INVALID_FOR_BIDDING_STRATEGY" | "CANNOT_EXCLUDE_CRITERION" | "CANNOT_REMOVE_CRITERION" | "INVALID_PRODUCT_BIDDING_CATEGORY" | "MISSING_SHOPPING_SETTING" | "INVALID_MATCHING_FUNCTION" | "LOCATION_FILTER_NOT_ALLOWED" | "INVALID_FEED_FOR_LOCATION_FILTER" | "LOCATION_FILTER_INVALID" | "CANNOT_SET_GEO_TARGET_CONSTANTS_WITH_FEED_ITEM_SETS" | "CANNOT_SET_BOTH_ASSET_SET_AND_FEED" | "CANNOT_SET_FEED_OR_FEED_ITEM_SETS_FOR_CUSTOMER" | "CANNOT_SET_ASSET_SET_FIELD_FOR_CUSTOMER" | "CANNOT_SET_GEO_TARGET_CONSTANTS_WITH_ASSET_SETS" | "CANNOT_SET_ASSET_SETS_WITH_FEED_ITEM_SETS" | "INVALID_LOCATION_GROUP_ASSET_SET" | "INVALID_LOCATION_GROUP_RADIUS" | "INVALID_LOCATION_GROUP_RADIUS_UNIT" | "CANNOT_ATTACH_CRITERIA_AT_CAMPAIGN_AND_ADGROUP" | "HOTEL_LENGTH_OF_STAY_OVERLAPS_WITH_EXISTING_CRITERION" | "HOTEL_ADVANCE_BOOKING_WINDOW_OVERLAPS_WITH_EXISTING_CRITERION" | "FIELD_INCOMPATIBLE_WITH_NEGATIVE_TARGETING" | "INVALID_WEBPAGE_CONDITION" | "INVALID_WEBPAGE_CONDITION_URL" | "WEBPAGE_CONDITION_URL_CANNOT_BE_EMPTY" | "WEBPAGE_CONDITION_URL_UNSUPPORTED_PROTOCOL" | "WEBPAGE_CONDITION_URL_CANNOT_BE_IP_ADDRESS" | "WEBPAGE_CONDITION_URL_DOMAIN_NOT_CONSISTENT_WITH_CAMPAIGN_SETTING" | "WEBPAGE_CONDITION_URL_CANNOT_BE_PUBLIC_SUFFIX" | "WEBPAGE_CONDITION_URL_INVALID_PUBLIC_SUFFIX" | "WEBPAGE_CONDITION_URL_VALUE_TRACK_VALUE_NOT_SUPPORTED" | "WEBPAGE_CRITERION_URL_EQUALS_CAN_HAVE_ONLY_ONE_CONDITION" | "WEBPAGE_CRITERION_NOT_SUPPORTED_ON_NON_DSA_AD_GROUP" | "CANNOT_TARGET_USER_LIST_FOR_SMART_DISPLAY_CAMPAIGNS" | "CANNOT_TARGET_PLACEMENTS_FOR_SEARCH_CAMPAIGNS" | "LISTING_SCOPE_TOO_MANY_DIMENSION_TYPES" | "LISTING_SCOPE_TOO_MANY_IN_OPERATORS" | "LISTING_SCOPE_IN_OPERATOR_NOT_SUPPORTED" | "DUPLICATE_LISTING_DIMENSION_TYPE" | "DUPLICATE_LISTING_DIMENSION_VALUE" | "CANNOT_SET_BIDS_ON_LISTING_GROUP_SUBDIVISION" | "LISTING_GROUP_ERROR_IN_ANOTHER_OPERATION" | "INVALID_LISTING_GROUP_HIERARCHY" | "LISTING_GROUP_TREE_WAS_INVALID_BEFORE_MUTATION" | "LISTING_GROUP_UNIT_CANNOT_HAVE_CHILDREN" | "LISTING_GROUP_SUBDIVISION_REQUIRES_OTHERS_CASE" | "LISTING_GROUP_REQUIRES_SAME_DIMENSION_TYPE_AS_SIBLINGS" | "LISTING_GROUP_ALREADY_EXISTS" | "LISTING_GROUP_DOES_NOT_EXIST" | "LISTING_GROUP_CANNOT_BE_REMOVED" | "INVALID_LISTING_GROUP_TYPE" | "LISTING_GROUP_ADD_MAY_ONLY_USE_TEMP_ID" | "LISTING_SCOPE_TOO_LONG" | "LISTING_SCOPE_TOO_MANY_DIMENSIONS" | "LISTING_GROUP_TOO_LONG" | "LISTING_GROUP_TREE_TOO_DEEP" | "INVALID_LISTING_DIMENSION" | "INVALID_LISTING_DIMENSION_TYPE" | "ADVERTISER_NOT_ON_ALLOWLIST_FOR_COMBINED_AUDIENCE_ON_DISPLAY" | "CANNOT_TARGET_REMOVED_COMBINED_AUDIENCE" | "INVALID_COMBINED_AUDIENCE_ID" | "CANNOT_TARGET_REMOVED_CUSTOM_AUDIENCE" | "HOTEL_CHECK_IN_DATE_RANGE_OVERLAPS_WITH_EXISTING_CRITERION" | "HOTEL_CHECK_IN_DATE_RANGE_START_DATE_TOO_EARLY" | "HOTEL_CHECK_IN_DATE_RANGE_END_DATE_TOO_LATE" | "HOTEL_CHECK_IN_DATE_RANGE_REVERSED" | "BROAD_MATCH_MODIFIER_KEYWORD_NOT_ALLOWED" | "ONE_AUDIENCE_ALLOWED_PER_ASSET_GROUP" | "AUDIENCE_NOT_ELIGIBLE_FOR_CAMPAIGN_TYPE" | "AUDIENCE_NOT_ALLOWED_TO_ATTACH_WHEN_AUDIENCE_GROUPED_SET_TO_FALSE" | "CANNOT_TARGET_CUSTOMER_MATCH_USER_LIST" | "NEGATIVE_KEYWORD_SHARED_SET_DOES_NOT_EXIST" | "CANNOT_ADD_REMOVED_NEGATIVE_KEYWORD_SHARED_SET" | "CANNOT_HAVE_MULTIPLE_NEGATIVE_KEYWORD_LIST_PER_ACCOUNT" | "CUSTOMER_CANNOT_ADD_CRITERION_OF_THIS_TYPE" | "CANNOT_TARGET_SIMILAR_USER_LIST" | "CANNOT_ADD_AUDIENCE_SEGMENT_CRITERION_WHEN_AUDIENCE_GROUPED_IS_SET" | "ONE_AUDIENCE_ALLOWED_PER_AD_GROUP" | "INVALID_DETAILED_DEMOGRAPHIC" | "CANNOT_RECOGNIZE_BRAND" | "BRAND_SHARED_SET_DOES_NOT_EXIST" | "CANNOT_ADD_REMOVED_BRAND_SHARED_SET" | "ONLY_EXCLUSION_BRAND_LIST_ALLOWED_FOR_CAMPAIGN_TYPE" | "CANNOT_TARGET_ONLY_UNDETERMINED" | "LOCATION_TARGETING_NOT_ELIGIBLE_FOR_RESTRICTED_CAMPAIGN" | "ONLY_INCLUSION_BRAND_LIST_ALLOWED_FOR_AD_GROUPS" | "CANNOT_ADD_REMOVED_PLACEMENT_LIST_SHARED_SET" | "PLACEMENT_LIST_SHARED_SET_DOES_NOT_EXIST" | "AI_MAX_MUST_BE_ENABLED" | "NOT_AVAILABLE_FOR_AI_MAX_CAMPAIGNS" | "MISSING_EU_POLITICAL_ADVERTISING_SELF_DECLARATION" | "INVALID_CAMPAIGN_TYPE_FOR_THIRD_PARTY_PARTNER_DATA_LIST" | "CANNOT_ADD_USER_LIST_PENDING_PRIVACY_REVIEW" | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_DOES_NOT_EXIST" | "CANNOT_ADD_REMOVED_VERTICAL_ADS_ITEM_GROUP_RULE_LIST_SHARED_SET" | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_ENABLED_TRAVEL_FEED" | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_AI_MAX" | "VERTICAL_ADS_ITEM_GROUP_RULE_NOT_SUPPORTED_FOR_THE_VERTICAL_TYPE" | "RETAIL_FILTER_EXPRESSION_DOES_NOT_EXIST" | "RETAIL_FILTER_TAGS_REFERRING_TO_EXPRESSION" | "CANNOT_EXCLUDE_ALL_TARGETS" | "CANNOT_TARGET_LANGUAGE";

export interface CriterionErrorEnum {

}

export type CriterionSystemServingStatus = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "RARELY_SERVED";

export interface CriterionSystemServingStatusEnum {

}

export type CriterionType = "UNSPECIFIED" | "UNKNOWN" | "KEYWORD" | "PLACEMENT" | "MOBILE_APP_CATEGORY" | "MOBILE_APPLICATION" | "DEVICE" | "LOCATION" | "LISTING_GROUP" | "AD_SCHEDULE" | "AGE_RANGE" | "GENDER" | "INCOME_RANGE" | "PARENTAL_STATUS" | "YOUTUBE_VIDEO" | "YOUTUBE_CHANNEL" | "USER_LIST" | "PROXIMITY" | "TOPIC" | "LISTING_SCOPE" | "LANGUAGE" | "IP_BLOCK" | "CONTENT_LABEL" | "CARRIER" | "USER_INTEREST" | "WEBPAGE" | "OPERATING_SYSTEM_VERSION" | "APP_PAYMENT_MODEL" | "MOBILE_DEVICE" | "CUSTOM_AFFINITY" | "CUSTOM_INTENT" | "LOCATION_GROUP" | "CUSTOM_AUDIENCE" | "COMBINED_AUDIENCE" | "KEYWORD_THEME" | "AUDIENCE" | "NEGATIVE_KEYWORD_LIST" | "LOCAL_SERVICE_ID" | "SEARCH_THEME" | "BRAND" | "BRAND_LIST" | "LIFE_EVENT" | "WEBPAGE_LIST" | "VIDEO_LINEUP" | "PLACEMENT_LIST" | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST" | "VERTICAL_ADS_ITEM_GROUP_RULE" | "RETAIL_FILTER_BUNDLE" | "RETAIL_FILTER";

export interface CriterionTypeEnum {

}

export interface CrmBasedUserListInfo {
  readonly app_id?: string;
  readonly upload_key_type?: CustomerMatchUploadKeyType;
  readonly data_source_type?: UserListCrmDataSourceType;
}

export type CurrencyCodeError = "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED";

export interface CurrencyCodeErrorEnum {

}

export interface CurrencyConstant {
  readonly resource_name?: string;
  readonly code?: string;
  readonly name?: string;
  readonly symbol?: string;
  readonly billable_unit_micros?: string;
}

export type CurrencyError = "UNSPECIFIED" | "UNKNOWN" | "VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT";

export interface CurrencyErrorEnum {

}

export interface CustomAffinityInfo {
  readonly custom_affinity?: string;
}

export interface CustomAudience {
  readonly resource_name?: string;
  readonly id?: string;
  readonly status?: CustomAudienceStatus;
  readonly name?: string;
  readonly type?: CustomAudienceType;
  readonly description?: string;
  readonly members?: ReadonlyArray<CustomAudienceMember>;
}

export type CustomAudienceError = "UNSPECIFIED" | "UNKNOWN" | "NAME_ALREADY_USED" | "CANNOT_REMOVE_WHILE_IN_USE" | "RESOURCE_ALREADY_REMOVED" | "MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED" | "INVALID_MEMBER_TYPE" | "MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH" | "POLICY_VIOLATION" | "INVALID_TYPE_CHANGE";

export interface CustomAudienceErrorEnum {

}

export interface CustomAudienceInfo {
  readonly custom_audience?: string;
}

export interface CustomAudienceMember {
  readonly member_type?: CustomAudienceMemberType;
  readonly keyword?: string;
  readonly url?: string;
  readonly place_category?: string;
  readonly app?: string;
}

export type CustomAudienceMemberType = "UNSPECIFIED" | "UNKNOWN" | "KEYWORD" | "URL" | "PLACE_CATEGORY" | "APP";

export interface CustomAudienceMemberTypeEnum {

}

export interface CustomAudienceOperation {
  readonly update_mask?: string;
  readonly create?: CustomAudience;
  readonly update?: CustomAudience;
  readonly remove?: string;
}

export interface CustomAudienceOptInRecommendation {
  readonly keywords?: ReadonlyArray<KeywordInfo>;
}

export interface CustomAudienceSegment {
  readonly custom_audience?: string;
}

export type CustomAudienceStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CustomAudienceStatusEnum {

}

export type CustomAudienceType = "UNSPECIFIED" | "UNKNOWN" | "AUTO" | "INTEREST" | "PURCHASE_INTENT" | "SEARCH";

export interface CustomAudienceTypeEnum {

}

export interface CustomConversionGoal {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly conversion_actions?: ReadonlyArray<string>;
  readonly status?: CustomConversionGoalStatus;
}

export type CustomConversionGoalError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_CONVERSION_ACTION" | "CONVERSION_ACTION_NOT_ENABLED" | "CANNOT_REMOVE_LINKED_CUSTOM_CONVERSION_GOAL" | "CUSTOM_GOAL_DUPLICATE_NAME" | "DUPLICATE_CONVERSION_ACTION_LIST" | "NON_BIDDABLE_CONVERSION_ACTION_NOT_ELIGIBLE_FOR_CUSTOM_GOAL";

export interface CustomConversionGoalErrorEnum {

}

export interface CustomConversionGoalOperation {
  readonly update_mask?: string;
  readonly create?: CustomConversionGoal;
  readonly update?: CustomConversionGoal;
  readonly remove?: string;
}

export type CustomConversionGoalStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CustomConversionGoalStatusEnum {

}

export interface Customer {
  readonly resource_name?: string;
  readonly id?: string;
  readonly descriptive_name?: string;
  readonly currency_code?: string;
  readonly time_zone?: string;
  readonly tracking_url_template?: string;
  readonly final_url_suffix?: string;
  readonly auto_tagging_enabled?: boolean;
  readonly has_partners_badge?: boolean;
  readonly manager?: boolean;
  readonly test_account?: boolean;
  readonly call_reporting_setting?: CallReportingSetting;
  readonly conversion_tracking_setting?: ConversionTrackingSetting;
  readonly remarketing_setting?: RemarketingSetting;
  readonly pay_per_conversion_eligibility_failure_reasons?: ReadonlyArray<CustomerPayPerConversionEligibilityFailureReason>;
  readonly optimization_score?: number;
  readonly optimization_score_weight?: number;
  readonly status?: CustomerStatus;
  readonly location_asset_auto_migration_done?: boolean;
  readonly image_asset_auto_migration_done?: boolean;
  readonly location_asset_auto_migration_done_date_time?: string;
  readonly image_asset_auto_migration_done_date_time?: string;
  readonly customer_agreement_setting?: CustomerAgreementSetting;
  readonly local_services_settings?: LocalServicesSettings;
  readonly video_brand_safety_suitability?: BrandSafetySuitability;
  readonly video_customer?: VideoCustomer;
  readonly contains_eu_political_advertising?: EuPoliticalAdvertisingStatus;
}

export interface CustomerAgreementSetting {
  readonly accepted_lead_form_terms?: boolean;
}

export interface CustomerAsset {
  readonly resource_name?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly source?: AssetSource;
  readonly status?: AssetLinkStatus;
  readonly primary_status?: AssetLinkPrimaryStatus;
  readonly primary_status_details?: ReadonlyArray<AssetLinkPrimaryStatusDetails>;
  readonly primary_status_reasons?: ReadonlyArray<AssetLinkPrimaryStatusReason>;
}

export interface CustomerAssetOperation {
  readonly update_mask?: string;
  readonly create?: CustomerAsset;
  readonly update?: CustomerAsset;
  readonly remove?: string;
}

export interface CustomerAssetSet {
  readonly resource_name?: string;
  readonly asset_set?: string;
  readonly customer?: string;
  readonly status?: AssetSetLinkStatus;
}

export interface CustomerAssetSetOperation {
  readonly create?: CustomerAssetSet;
  readonly remove?: string;
}

export interface CustomerClient {
  readonly resource_name?: string;
  readonly client_customer?: string;
  readonly hidden?: boolean;
  readonly level?: string;
  readonly time_zone?: string;
  readonly test_account?: boolean;
  readonly manager?: boolean;
  readonly descriptive_name?: string;
  readonly currency_code?: string;
  readonly id?: string;
  readonly applied_labels?: ReadonlyArray<string>;
  readonly status?: CustomerStatus;
}

export interface CustomerClientLink {
  readonly resource_name?: string;
  readonly client_customer?: string;
  readonly manager_link_id?: string;
  readonly status?: ManagerLinkStatus;
  readonly hidden?: boolean;
}

export type CustomerClientLinkError = "UNSPECIFIED" | "UNKNOWN" | "CLIENT_ALREADY_INVITED_BY_THIS_MANAGER" | "CLIENT_ALREADY_MANAGED_IN_HIERARCHY" | "CYCLIC_LINK_NOT_ALLOWED" | "CUSTOMER_HAS_TOO_MANY_ACCOUNTS" | "CLIENT_HAS_TOO_MANY_INVITATIONS" | "CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS" | "CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER" | "CLIENT_HAS_TOO_MANY_MANAGERS" | "MAX_CUSTOMER_LIMIT_REACHED" | "ACCOUNT_CREATION_POLICY_VIOLATION";

export interface CustomerClientLinkErrorEnum {

}

export interface CustomerClientLinkOperation {
  readonly update_mask?: string;
  readonly create?: CustomerClientLink;
  readonly update?: CustomerClientLink;
}

export interface CustomerConversionGoal {
  readonly resource_name?: string;
  readonly category?: ConversionActionCategory;
  readonly origin?: ConversionOrigin;
  readonly biddable?: boolean;
}

export interface CustomerConversionGoalOperation {
  readonly update_mask?: string;
  readonly update?: CustomerConversionGoal;
}

export interface CustomerCustomizer {
  readonly resource_name?: string;
  readonly customizer_attribute?: string;
  readonly status?: CustomizerValueStatus;
  readonly value?: CustomizerValue;
}

export type CustomerCustomizerError = "UNSPECIFIED" | "UNKNOWN";

export interface CustomerCustomizerErrorEnum {

}

export interface CustomerCustomizerOperation {
  readonly create?: CustomerCustomizer;
  readonly remove?: string;
}

export type CustomerError = "UNSPECIFIED" | "UNKNOWN" | "STATUS_CHANGE_DISALLOWED" | "ACCOUNT_NOT_SET_UP" | "CREATION_DENIED_FOR_POLICY_VIOLATION" | "CREATION_DENIED_INELIGIBLE_MCC";

export interface CustomerErrorEnum {

}

export type CustomerFeedError = "UNSPECIFIED" | "UNKNOWN" | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "CANNOT_CREATE_FOR_REMOVED_FEED" | "CANNOT_CREATE_ALREADY_EXISTING_CUSTOMER_FEED" | "CANNOT_MODIFY_REMOVED_CUSTOMER_FEED" | "INVALID_PLACEHOLDER_TYPE" | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" | "PLACEHOLDER_TYPE_NOT_ALLOWED_ON_CUSTOMER_FEED";

export interface CustomerFeedErrorEnum {

}

export interface CustomerLabel {
  readonly resource_name?: string;
  readonly customer?: string;
  readonly label?: string;
}

export interface CustomerLabelOperation {
  readonly create?: CustomerLabel;
  readonly remove?: string;
}

export type CustomerLifecycleOptimizationGoalSubType = "UNSPECIFIED" | "UNKNOWN" | "NEW_CUSTOMER_ACQUISITION_VALUE" | "NEW_CUSTOMER_ACQUISITION_ONLY" | "CUSTOMER_RETENTION_VALUE" | "CUSTOMER_RETENTION_ONLY" | "LOYALTY_RETENTION_VALUE" | "LOYALTY_RETENTION_BENEFITS";

export interface CustomerLifecycleOptimizationGoalSubTypeEnum {

}

export type CustomerLifecycleOptimizationMode = "UNSPECIFIED" | "UNKNOWN" | "TARGET_ALL" | "TARGET_SPECIFIC";

export interface CustomerLifecycleOptimizationModeEnum {

}

export interface CustomerLifecycleOptimizationValueSettings {
  readonly additional_value?: number;
  readonly value_multiplier?: number;
  readonly additional_high_lifetime_value?: number;
  readonly high_lifetime_value_multiplier?: number;
}

export interface CustomerManagerLink {
  readonly resource_name?: string;
  readonly manager_customer?: string;
  readonly manager_link_id?: string;
  readonly status?: ManagerLinkStatus;
}

export type CustomerManagerLinkError = "UNSPECIFIED" | "UNKNOWN" | "NO_PENDING_INVITE" | "SAME_CLIENT_MORE_THAN_ONCE_PER_CALL" | "MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS" | "CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER" | "CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER" | "CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER" | "CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT" | "DUPLICATE_CHILD_FOUND" | "TEST_ACCOUNT_LINKS_TOO_MANY_CHILD_ACCOUNTS";

export interface CustomerManagerLinkErrorEnum {

}

export interface CustomerManagerLinkOperation {
  readonly update_mask?: string;
  readonly update?: CustomerManagerLink;
}

export type CustomerMatchUploadKeyType = "UNSPECIFIED" | "UNKNOWN" | "CONTACT_INFO" | "CRM_ID" | "MOBILE_ADVERTISING_ID";

export interface CustomerMatchUploadKeyTypeEnum {

}

export interface CustomerMatchUserListMetadata {
  readonly user_list?: string;
  readonly consent?: Consent;
}

export interface CustomerMetrics {
  readonly average_rate_metrics?: RateMetrics;
}

export interface CustomerNegativeCriterion {
  readonly resource_name?: string;
  readonly id?: string;
  readonly type?: CriterionType;
  readonly content_label?: ContentLabelInfo;
  readonly mobile_application?: MobileApplicationInfo;
  readonly mobile_app_category?: MobileAppCategoryInfo;
  readonly placement?: PlacementInfo;
  readonly youtube_video?: YouTubeVideoInfo;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly negative_keyword_list?: NegativeKeywordListInfo;
  readonly ip_block?: IpBlockInfo;
  readonly placement_list?: PlacementListInfo;
}

export interface CustomerNegativeCriterionOperation {
  readonly create?: CustomerNegativeCriterion;
  readonly remove?: string;
}

export interface CustomerOperation {
  readonly update?: Customer;
  readonly update_mask?: string;
}

export type CustomerPayPerConversionEligibilityFailureReason = "UNSPECIFIED" | "UNKNOWN" | "NOT_ENOUGH_CONVERSIONS" | "CONVERSION_LAG_TOO_HIGH" | "HAS_CAMPAIGN_WITH_SHARED_BUDGET" | "HAS_UPLOAD_CLICKS_CONVERSION" | "AVERAGE_DAILY_SPEND_TOO_HIGH" | "ANALYSIS_NOT_COMPLETE" | "OTHER";

export interface CustomerPayPerConversionEligibilityFailureReasonEnum {

}

export interface CustomerSearchTermInsight {
  readonly resource_name?: string;
  readonly category_label?: string;
  readonly id?: string;
}

export interface CustomerSkAdNetworkConversionValueSchema {
  readonly resource_name?: string;
  readonly schema?: SkAdNetworkConversionValueSchema;
}

export type CustomerSkAdNetworkConversionValueSchemaError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_LINK_ID" | "INVALID_APP_ID" | "INVALID_SCHEMA" | "LINK_CODE_NOT_FOUND" | "INVALID_EVENT_COUNTER" | "INVALID_EVENT_NAME";

export interface CustomerSkAdNetworkConversionValueSchemaErrorEnum {

}

export interface CustomerSkAdNetworkConversionValueSchemaOperation {
  readonly update?: CustomerSkAdNetworkConversionValueSchema;
}

export type CustomerStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "CANCELED" | "SUSPENDED" | "CLOSED";

export interface CustomerStatusEnum {

}

export interface CustomerThirdPartyBrandLiftIntegrationPartner {
  readonly brand_lift_integration_partner?: ThirdPartyBrandLiftIntegrationPartner;
  readonly allow_share_cost?: boolean;
}

export interface CustomerThirdPartyBrandSafetyIntegrationPartner {
  readonly brand_safety_integration_partner?: ThirdPartyBrandSafetyIntegrationPartner;
}

export interface CustomerThirdPartyConversionAttributionIntegrationPartner {
  readonly conversion_attribution_integration_partner?: ThirdPartyConversionAttributionIntegrationPartner;
}

export interface CustomerThirdPartyIntegrationPartners {
  readonly viewability_integration_partners?: ReadonlyArray<CustomerThirdPartyViewabilityIntegrationPartner>;
  readonly brand_lift_integration_partners?: ReadonlyArray<CustomerThirdPartyBrandLiftIntegrationPartner>;
  readonly brand_safety_integration_partners?: ReadonlyArray<CustomerThirdPartyBrandSafetyIntegrationPartner>;
  readonly reach_integration_partners?: ReadonlyArray<CustomerThirdPartyReachIntegrationPartner>;
  readonly conversion_attribution_integration_partners?: ReadonlyArray<CustomerThirdPartyConversionAttributionIntegrationPartner>;
}

export interface CustomerThirdPartyReachIntegrationPartner {
  readonly reach_integration_partner?: ThirdPartyReachIntegrationPartner;
  readonly allow_share_cost?: boolean;
}

export interface CustomerThirdPartyViewabilityIntegrationPartner {
  readonly viewability_integration_partner?: ThirdPartyViewabilityIntegrationPartner;
  readonly allow_share_cost?: boolean;
}

export interface CustomerUserAccess {
  readonly resource_name?: string;
  readonly user_id?: string;
  readonly email_address?: string;
  readonly access_role?: AccessRole;
  readonly access_creation_date_time?: string;
  readonly inviter_user_email_address?: string;
  readonly passkey_enabled?: boolean;
  readonly pending_multi_party_auth_review?: string;
}

export type CustomerUserAccessError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_USER_ID" | "REMOVAL_DISALLOWED" | "DISALLOWED_ACCESS_ROLE" | "LAST_ADMIN_USER_OF_SERVING_CUSTOMER" | "LAST_ADMIN_USER_OF_MANAGER";

export interface CustomerUserAccessErrorEnum {

}

export interface CustomerUserAccessInvitation {
  readonly resource_name?: string;
  readonly invitation_id?: string;
  readonly access_role?: AccessRole;
  readonly email_address?: string;
  readonly creation_date_time?: string;
  readonly invitation_status?: AccessInvitationStatus;
}

export interface CustomerUserAccessInvitationOperation {
  readonly create?: CustomerUserAccessInvitation;
  readonly remove?: string;
}

export interface CustomerUserAccessInvitationReview {
  readonly new_customer_user_access_invitation?: CustomerUserAccessInvitation;
}

export interface CustomerUserAccessOperation {
  readonly update_mask?: string;
  readonly update?: CustomerUserAccess;
  readonly remove?: string;
}

export interface CustomerUserAccessReview {
  readonly old_customer_user_access?: string;
  readonly new_customer_user_access?: CustomerUserAccess;
}

export interface CustomIntentInfo {
  readonly custom_intent?: string;
}

export interface CustomInterest {
  readonly resource_name?: string;
  readonly id?: string;
  readonly status?: CustomInterestStatus;
  readonly name?: string;
  readonly type?: CustomInterestType;
  readonly description?: string;
  readonly members?: ReadonlyArray<CustomInterestMember>;
}

export type CustomInterestError = "UNSPECIFIED" | "UNKNOWN" | "NAME_ALREADY_USED" | "CUSTOM_INTEREST_MEMBER_ID_AND_TYPE_PARAMETER_NOT_PRESENT_IN_REMOVE" | "TYPE_AND_PARAMETER_NOT_FOUND" | "TYPE_AND_PARAMETER_ALREADY_EXISTED" | "INVALID_CUSTOM_INTEREST_MEMBER_TYPE" | "CANNOT_REMOVE_WHILE_IN_USE" | "CANNOT_CHANGE_TYPE";

export interface CustomInterestErrorEnum {

}

export interface CustomInterestMember {
  readonly member_type?: CustomInterestMemberType;
  readonly parameter?: string;
}

export type CustomInterestMemberType = "UNSPECIFIED" | "UNKNOWN" | "KEYWORD" | "URL";

export interface CustomInterestMemberTypeEnum {

}

export interface CustomInterestOperation {
  readonly update_mask?: string;
  readonly create?: CustomInterest;
  readonly update?: CustomInterest;
}

export type CustomInterestStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CustomInterestStatusEnum {

}

export type CustomInterestType = "UNSPECIFIED" | "UNKNOWN" | "CUSTOM_AFFINITY" | "CUSTOM_INTENT";

export interface CustomInterestTypeEnum {

}

export interface CustomizerAttribute {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: CustomizerAttributeType;
  readonly status?: CustomizerAttributeStatus;
}

export type CustomizerAttributeError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME";

export interface CustomizerAttributeErrorEnum {

}

export interface CustomizerAttributeOperation {
  readonly update_mask?: string;
  readonly create?: CustomizerAttribute;
  readonly remove?: string;
}

export type CustomizerAttributeStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CustomizerAttributeStatusEnum {

}

export type CustomizerAttributeType = "UNSPECIFIED" | "UNKNOWN" | "TEXT" | "NUMBER" | "PRICE" | "PERCENT";

export interface CustomizerAttributeTypeEnum {

}

export interface CustomizerValue {
  readonly type?: CustomizerAttributeType;
  readonly string_value?: string;
}

export type CustomizerValueStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface CustomizerValueStatusEnum {

}

export interface CustomLeadFormSubmissionField {
  readonly question_text?: string;
  readonly field_value?: string;
}

export interface CustomParameter {
  readonly key?: string;
  readonly value?: string;
}

export interface CustomVariable {
  readonly conversion_custom_variable?: string;
  readonly value?: string;
}

export interface CyoIncentives {
  readonly low_offer?: Incentive;
  readonly medium_offer?: Incentive;
  readonly high_offer?: Incentive;
}

export type DatabaseError = "UNSPECIFIED" | "UNKNOWN" | "CONCURRENT_MODIFICATION" | "DATA_CONSTRAINT_VIOLATION" | "REQUEST_TOO_LARGE";

export interface DatabaseErrorEnum {

}

export type DataDrivenModelStatus = "UNSPECIFIED" | "UNKNOWN" | "AVAILABLE" | "STALE" | "EXPIRED" | "NEVER_GENERATED";

export interface DataDrivenModelStatusEnum {

}

export interface DataLink {
  readonly resource_name?: string;
  readonly product_link_id?: string;
  readonly data_link_id?: string;
  readonly type?: DataLinkType;
  readonly status?: DataLinkStatus;
  readonly youtube_video?: YoutubeVideoIdentifier;
  readonly youtube_link_metadata?: YoutubeLinkMetadata;
}

export type DataLinkError = "UNSPECIFIED" | "UNKNOWN" | "YOUTUBE_CHANNEL_ID_INVALID" | "YOUTUBE_VIDEO_ID_INVALID" | "YOUTUBE_VIDEO_FROM_DIFFERENT_CHANNEL" | "PERMISSION_DENIED" | "INVALID_STATUS" | "INVALID_UPDATE_STATUS" | "INVALID_RESOURCE_NAME";

export interface DataLinkErrorEnum {

}

export type DataLinkStatus = "UNSPECIFIED" | "UNKNOWN" | "REQUESTED" | "PENDING_APPROVAL" | "ENABLED" | "DISABLED" | "REVOKED" | "REJECTED";

export interface DataLinkStatusEnum {

}

export type DataLinkType = "UNSPECIFIED" | "UNKNOWN" | "VIDEO";

export interface DataLinkTypeEnum {

}

export interface DataPartnerIdentifier {
  readonly data_partner_id?: string;
}

export type DateError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_FIELD_VALUES_IN_DATE" | "INVALID_FIELD_VALUES_IN_DATE_TIME" | "INVALID_STRING_DATE" | "INVALID_STRING_DATE_TIME_MICROS" | "INVALID_STRING_DATE_TIME_SECONDS" | "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET" | "EARLIER_THAN_MINIMUM_DATE" | "LATER_THAN_MAXIMUM_DATE" | "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE" | "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL" | "DATE_RANGE_ERROR_START_TIME_MUST_BE_THE_START_OF_A_DAY" | "DATE_RANGE_ERROR_END_TIME_MUST_BE_THE_END_OF_A_DAY";

export interface DateErrorEnum {

}

export interface DateRange {
  readonly start_date?: string;
  readonly end_date?: string;
}

export type DateRangeError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_DATE" | "START_DATE_AFTER_END_DATE" | "CANNOT_SET_DATE_TO_PAST" | "AFTER_MAXIMUM_ALLOWABLE_DATE" | "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED" | "REQUESTED_DATE_GRANULARITY_NOT_SUPPORTED";

export interface DateRangeErrorEnum {

}

export type DayOfWeek = "UNSPECIFIED" | "UNKNOWN" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

export interface DayOfWeekEnum {

}

export interface DemandGenAdGroupSettings {
  readonly channel_controls?: DemandGenChannelControls;
}

export interface DemandGenCampaignSettings {
  readonly upgraded_targeting?: boolean;
}

export interface DemandGenCarouselAdInfo {
  readonly business_name?: string;
  readonly logo_image?: AdImageAsset;
  readonly headline?: AdTextAsset;
  readonly description?: AdTextAsset;
  readonly call_to_action_text?: string;
  readonly carousel_cards?: ReadonlyArray<AdDemandGenCarouselCardAsset>;
}

export interface DemandGenCarouselCardAsset {
  readonly marketing_image_asset?: string;
  readonly square_marketing_image_asset?: string;
  readonly portrait_marketing_image_asset?: string;
  readonly headline?: string;
  readonly call_to_action_text?: string;
}

export type DemandGenChannelConfig = "UNSPECIFIED" | "UNKNOWN" | "CHANNEL_STRATEGY" | "SELECTED_CHANNELS";

export interface DemandGenChannelConfigEnum {

}

export interface DemandGenChannelControls {
  readonly channel_config?: DemandGenChannelConfig;
  readonly channel_strategy?: DemandGenChannelStrategy;
  readonly selected_channels?: DemandGenSelectedChannels;
}

export type DemandGenChannelStrategy = "UNSPECIFIED" | "UNKNOWN" | "ALL_CHANNELS" | "ALL_OWNED_AND_OPERATED_CHANNELS";

export interface DemandGenChannelStrategyEnum {

}

export interface DemandGenMultiAssetAdInfo {
  readonly marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly square_marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly portrait_marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly tall_portrait_marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly logo_images?: ReadonlyArray<AdImageAsset>;
  readonly classic_display_images?: ReadonlyArray<AdImageAsset>;
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly business_name?: string;
  readonly call_to_action_text?: string;
}

export interface DemandGenProductAdInfo {
  readonly headline?: AdTextAsset;
  readonly description?: AdTextAsset;
  readonly logo_image?: AdImageAsset;
  readonly breadcrumb1?: string;
  readonly breadcrumb2?: string;
  readonly business_name?: AdTextAsset;
  readonly call_to_action?: AdCallToActionAsset;
}

export interface DemandGenSelectedChannels {
  readonly youtube_in_stream?: boolean;
  readonly youtube_in_feed?: boolean;
  readonly youtube_shorts?: boolean;
  readonly discover?: boolean;
  readonly gmail?: boolean;
  readonly display?: boolean;
  readonly maps?: boolean;
}

export interface DemandGenVideoResponsiveAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly long_headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly videos?: ReadonlyArray<AdVideoAsset>;
  readonly logo_images?: ReadonlyArray<AdImageAsset>;
  readonly companion_banners?: ReadonlyArray<AdImageAsset>;
  readonly breadcrumb1?: string;
  readonly breadcrumb2?: string;
  readonly business_name?: AdTextAsset;
  readonly call_to_actions?: ReadonlyArray<AdCallToActionAsset>;
}

export interface DestinationMismatch {
  readonly url_types?: ReadonlyArray<PolicyTopicEvidenceDestinationMismatchUrlType>;
}

export interface DestinationNotWorking {
  readonly expanded_url?: string;
  readonly device?: PolicyTopicEvidenceDestinationNotWorkingDevice;
  readonly last_checked_date_time?: string;
  readonly dns_error_type?: PolicyTopicEvidenceDestinationNotWorkingDnsErrorType;
  readonly http_error_code?: string;
}

export interface DestinationTextList {
  readonly destination_texts?: ReadonlyArray<string>;
}

export interface DetailContentSuitabilityPlacementView {
  readonly resource_name?: string;
  readonly display_name?: string;
  readonly placement?: string;
  readonly placement_type?: PlacementType;
  readonly target_url?: string;
}

export interface DetailedDemographic {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly launched_to_all?: boolean;
  readonly availabilities?: ReadonlyArray<CriterionCategoryAvailability>;
}

export interface DetailedDemographicSegment {
  readonly detailed_demographic?: string;
}

export interface DetailPlacementView {
  readonly resource_name?: string;
  readonly placement?: string;
  readonly display_name?: string;
  readonly group_placement_target_url?: string;
  readonly target_url?: string;
  readonly placement_type?: PlacementType;
}

export type Device = "UNSPECIFIED" | "UNKNOWN" | "MOBILE" | "TABLET" | "DESKTOP" | "CONNECTED_TV" | "OTHER";

export interface DeviceEnum {

}

export interface DeviceInfo {
  readonly type?: Device;
}

export interface DimensionOverlapResult {
  readonly dimension?: AudienceInsightsDimension;
  readonly items?: ReadonlyArray<AudienceOverlapItem>;
}

export interface DismissRecommendationOperation {
  readonly resource_name?: string;
}

export interface DismissRecommendationRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<DismissRecommendationOperation>;
  readonly partial_failure?: boolean;
}

export interface DismissRecommendationResponse {
  readonly results?: ReadonlyArray<DismissRecommendationResult>;
  readonly partial_failure_error?: unknown;
}

export interface DismissRecommendationResult {
  readonly resource_name?: string;
}

export type DisplayAdFormatSetting = "UNSPECIFIED" | "UNKNOWN" | "ALL_FORMATS" | "NON_NATIVE" | "NATIVE";

export interface DisplayAdFormatSettingEnum {

}

export interface DisplayExpansionOptInRecommendation {

}

export interface DisplayKeywordView {
  readonly resource_name?: string;
}

export interface DisplayUploadAdInfo {
  readonly display_upload_product_type?: DisplayUploadProductType;
  readonly media_bundle?: AdMediaBundleAsset;
}

export type DisplayUploadProductType = "UNSPECIFIED" | "UNKNOWN" | "HTML5_UPLOAD_AD" | "DYNAMIC_HTML5_EDUCATION_AD" | "DYNAMIC_HTML5_FLIGHT_AD" | "DYNAMIC_HTML5_HOTEL_RENTAL_AD" | "DYNAMIC_HTML5_JOB_AD" | "DYNAMIC_HTML5_LOCAL_AD" | "DYNAMIC_HTML5_REAL_ESTATE_AD" | "DYNAMIC_HTML5_CUSTOM_AD" | "DYNAMIC_HTML5_TRAVEL_AD" | "DYNAMIC_HTML5_HOTEL_AD";

export interface DisplayUploadProductTypeEnum {

}

export type DistanceBucket = "UNSPECIFIED" | "UNKNOWN" | "WITHIN_700M" | "WITHIN_1KM" | "WITHIN_5KM" | "WITHIN_10KM" | "WITHIN_15KM" | "WITHIN_20KM" | "WITHIN_25KM" | "WITHIN_30KM" | "WITHIN_35KM" | "WITHIN_40KM" | "WITHIN_45KM" | "WITHIN_50KM" | "WITHIN_55KM" | "WITHIN_60KM" | "WITHIN_65KM" | "BEYOND_65KM" | "WITHIN_0_7MILES" | "WITHIN_1MILE" | "WITHIN_5MILES" | "WITHIN_10MILES" | "WITHIN_15MILES" | "WITHIN_20MILES" | "WITHIN_25MILES" | "WITHIN_30MILES" | "WITHIN_35MILES" | "WITHIN_40MILES" | "BEYOND_40MILES";

export interface DistanceBucketEnum {

}

export interface DistanceView {
  readonly resource_name?: string;
  readonly distance_bucket?: DistanceBucket;
  readonly metric_system?: boolean;
}

export type DistinctError = "UNSPECIFIED" | "UNKNOWN" | "DUPLICATE_ELEMENT" | "DUPLICATE_TYPE";

export interface DistinctErrorEnum {

}

export interface DomainCategory {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly category?: string;
  readonly language_code?: string;
  readonly domain?: string;
  readonly coverage_fraction?: number;
  readonly category_rank?: string;
  readonly has_children?: boolean;
  readonly recommended_cpc_bid_micros?: string;
}

export interface DynamicBusinessProfileLocationGroupFilter {
  readonly label_filters?: ReadonlyArray<string>;
  readonly business_name_filter?: BusinessProfileBusinessNameFilter;
  readonly listing_id_filters?: ReadonlyArray<string>;
}

export interface DynamicCustomAsset {
  readonly id?: string;
  readonly id2?: string;
  readonly item_title?: string;
  readonly item_subtitle?: string;
  readonly item_description?: string;
  readonly item_address?: string;
  readonly item_category?: string;
  readonly price?: string;
  readonly sale_price?: string;
  readonly formatted_price?: string;
  readonly formatted_sale_price?: string;
  readonly image_url?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly android_app_link?: string;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
  readonly similar_ids?: ReadonlyArray<string>;
}

export interface DynamicEducationAsset {
  readonly program_id?: string;
  readonly location_id?: string;
  readonly program_name?: string;
  readonly subject?: string;
  readonly program_description?: string;
  readonly school_name?: string;
  readonly address?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly android_app_link?: string;
  readonly similar_program_ids?: ReadonlyArray<string>;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
  readonly thumbnail_image_url?: string;
  readonly image_url?: string;
}

export interface DynamicFlightsAsset {
  readonly destination_id?: string;
  readonly origin_id?: string;
  readonly flight_description?: string;
  readonly image_url?: string;
  readonly destination_name?: string;
  readonly origin_name?: string;
  readonly flight_price?: string;
  readonly flight_sale_price?: string;
  readonly formatted_price?: string;
  readonly formatted_sale_price?: string;
  readonly android_app_link?: string;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
  readonly similar_destination_ids?: ReadonlyArray<string>;
  readonly custom_mapping?: string;
}

export interface DynamicHotelsAndRentalsAsset {
  readonly property_id?: string;
  readonly property_name?: string;
  readonly image_url?: string;
  readonly destination_name?: string;
  readonly description?: string;
  readonly price?: string;
  readonly sale_price?: string;
  readonly star_rating?: string;
  readonly category?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly address?: string;
  readonly android_app_link?: string;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
  readonly formatted_price?: string;
  readonly formatted_sale_price?: string;
  readonly similar_property_ids?: ReadonlyArray<string>;
}

export interface DynamicImageExtensionOptInRecommendation {

}

export interface DynamicJobsAsset {
  readonly job_id?: string;
  readonly location_id?: string;
  readonly job_title?: string;
  readonly job_subtitle?: string;
  readonly description?: string;
  readonly image_url?: string;
  readonly job_category?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly address?: string;
  readonly salary?: string;
  readonly android_app_link?: string;
  readonly similar_job_ids?: ReadonlyArray<string>;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
}

export interface DynamicLocalAsset {
  readonly deal_id?: string;
  readonly deal_name?: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly price?: string;
  readonly sale_price?: string;
  readonly image_url?: string;
  readonly address?: string;
  readonly category?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly formatted_price?: string;
  readonly formatted_sale_price?: string;
  readonly android_app_link?: string;
  readonly similar_deal_ids?: ReadonlyArray<string>;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
}

export interface DynamicRealEstateAsset {
  readonly listing_id?: string;
  readonly listing_name?: string;
  readonly city_name?: string;
  readonly description?: string;
  readonly address?: string;
  readonly price?: string;
  readonly image_url?: string;
  readonly property_type?: string;
  readonly listing_type?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly formatted_price?: string;
  readonly android_app_link?: string;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
  readonly similar_listing_ids?: ReadonlyArray<string>;
}

export interface DynamicSearchAdsSearchTermView {
  readonly resource_name?: string;
  readonly search_term?: string;
  readonly headline?: string;
  readonly landing_page?: string;
  readonly page_url?: string;
  readonly has_negative_keyword?: boolean;
  readonly has_matching_keyword?: boolean;
  readonly has_negative_url?: boolean;
}

export interface DynamicSearchAdsSetting {
  readonly domain_name?: string;
  readonly language_code?: string;
  readonly use_supplied_urls_only?: boolean;
}

export interface DynamicTravelAsset {
  readonly destination_id?: string;
  readonly origin_id?: string;
  readonly title?: string;
  readonly destination_name?: string;
  readonly destination_address?: string;
  readonly origin_name?: string;
  readonly price?: string;
  readonly sale_price?: string;
  readonly formatted_price?: string;
  readonly formatted_sale_price?: string;
  readonly category?: string;
  readonly contextual_keywords?: ReadonlyArray<string>;
  readonly similar_destination_ids?: ReadonlyArray<string>;
  readonly image_url?: string;
  readonly android_app_link?: string;
  readonly ios_app_link?: string;
  readonly ios_app_store_id?: string;
}

export interface EffectiveFrequencyBreakdown {
  readonly effective_frequency?: number;
  readonly on_target_reach?: string;
  readonly total_reach?: string;
  readonly effective_coview_reach?: string;
  readonly on_target_effective_coview_reach?: string;
}

export interface EffectiveFrequencyLimit {
  readonly effective_frequency_breakdown_limit?: number;
}

export interface EnablementResult {
  readonly campaign?: string;
  readonly enablement_error?: unknown;
}

export interface EnableOperation {
  readonly campaign?: string;
  readonly auto_populate_brand_assets?: boolean;
  readonly brand_assets?: BrandCampaignAssets;
  readonly final_uri_domain?: string;
  readonly main_color?: string;
  readonly accent_color?: string;
  readonly font_family?: string;
}

export interface EnablePMaxBrandGuidelinesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<EnableOperation>;
}

export interface EnablePMaxBrandGuidelinesResponse {
  readonly results?: ReadonlyArray<EnablementResult>;
}

export interface EndExperimentRequest {
  readonly experiment?: string;
  readonly validate_only?: boolean;
}

export interface EnhancedCpc {

}

export interface EnhancedCpcOptInRecommendation {

}

export type EnumError = "UNSPECIFIED" | "UNKNOWN" | "ENUM_VALUE_NOT_PERMITTED";

export interface EnumErrorEnum {

}

export interface ErrorCode {
  readonly request_error?: RequestError;
  readonly bidding_strategy_error?: BiddingStrategyError;
  readonly url_field_error?: UrlFieldError;
  readonly list_operation_error?: ListOperationError;
  readonly query_error?: QueryError;
  readonly mutate_error?: MutateError;
  readonly field_mask_error?: FieldMaskError;
  readonly authorization_error?: AuthorizationError;
  readonly internal_error?: InternalError;
  readonly quota_error?: QuotaError;
  readonly ad_error?: AdError;
  readonly ad_group_error?: AdGroupError;
  readonly campaign_budget_error?: CampaignBudgetError;
  readonly campaign_error?: CampaignError;
  readonly video_campaign_error?: VideoCampaignError;
  readonly authentication_error?: AuthenticationError;
  readonly action_error?: ActionError;
  readonly ad_group_criterion_customizer_error?: AdGroupCriterionCustomizerError;
  readonly ad_group_criterion_error?: AdGroupCriterionError;
  readonly ad_group_customizer_error?: AdGroupCustomizerError;
  readonly ad_customizer_error?: AdCustomizerError;
  readonly ad_group_ad_error?: AdGroupAdError;
  readonly ad_sharing_error?: AdSharingError;
  readonly adx_error?: AdxError;
  readonly asset_error?: AssetError;
  readonly asset_group_asset_error?: AssetGroupAssetError;
  readonly asset_group_listing_group_filter_error?: AssetGroupListingGroupFilterError;
  readonly asset_group_error?: AssetGroupError;
  readonly asset_set_asset_error?: AssetSetAssetError;
  readonly asset_set_link_error?: AssetSetLinkError;
  readonly asset_set_error?: AssetSetError;
  readonly bidding_error?: BiddingError;
  readonly campaign_criterion_error?: CampaignCriterionError;
  readonly campaign_conversion_goal_error?: CampaignConversionGoalError;
  readonly campaign_customizer_error?: CampaignCustomizerError;
  readonly collection_size_error?: CollectionSizeError;
  readonly conversion_goal_campaign_config_error?: ConversionGoalCampaignConfigError;
  readonly country_code_error?: CountryCodeError;
  readonly criterion_error?: CriterionError;
  readonly custom_conversion_goal_error?: CustomConversionGoalError;
  readonly customer_customizer_error?: CustomerCustomizerError;
  readonly customer_error?: CustomerError;
  readonly customizer_attribute_error?: CustomizerAttributeError;
  readonly date_error?: DateError;
  readonly date_range_error?: DateRangeError;
  readonly distinct_error?: DistinctError;
  readonly feed_attribute_reference_error?: FeedAttributeReferenceError;
  readonly final_url_expansion_asset_view_error?: FinalUrlExpansionAssetViewError;
  readonly function_error?: FunctionError;
  readonly function_parsing_error?: FunctionParsingError;
  readonly id_error?: IdError;
  readonly image_error?: ImageError;
  readonly language_code_error?: LanguageCodeError;
  readonly media_bundle_error?: MediaBundleError;
  readonly media_upload_error?: MediaUploadError;
  readonly media_file_error?: MediaFileError;
  readonly merchant_center_error?: MerchantCenterError;
  readonly multiplier_error?: MultiplierError;
  readonly new_resource_creation_error?: NewResourceCreationError;
  readonly not_empty_error?: NotEmptyError;
  readonly null_error?: NullError;
  readonly operator_error?: OperatorError;
  readonly range_error?: RangeError;
  readonly recommendation_error?: RecommendationError;
  readonly recommendation_subscription_error?: RecommendationSubscriptionError;
  readonly region_code_error?: RegionCodeError;
  readonly setting_error?: SettingError;
  readonly string_format_error?: StringFormatError;
  readonly string_length_error?: StringLengthError;
  readonly operation_access_denied_error?: OperationAccessDeniedError;
  readonly resource_access_denied_error?: ResourceAccessDeniedError;
  readonly resource_count_limit_exceeded_error?: ResourceCountLimitExceededError;
  readonly youtube_video_registration_error?: YoutubeVideoRegistrationError;
  readonly ad_group_bid_modifier_error?: AdGroupBidModifierError;
  readonly context_error?: ContextError;
  readonly field_error?: FieldError;
  readonly shared_set_error?: SharedSetError;
  readonly shared_criterion_error?: SharedCriterionError;
  readonly campaign_shared_set_error?: CampaignSharedSetError;
  readonly conversion_action_error?: ConversionActionError;
  readonly conversion_adjustment_upload_error?: ConversionAdjustmentUploadError;
  readonly conversion_custom_variable_error?: ConversionCustomVariableError;
  readonly conversion_upload_error?: ConversionUploadError;
  readonly conversion_value_rule_error?: ConversionValueRuleError;
  readonly conversion_value_rule_set_error?: ConversionValueRuleSetError;
  readonly header_error?: HeaderError;
  readonly database_error?: DatabaseError;
  readonly policy_finding_error?: PolicyFindingError;
  readonly enum_error?: EnumError;
  readonly keyword_plan_error?: KeywordPlanError;
  readonly keyword_plan_campaign_error?: KeywordPlanCampaignError;
  readonly keyword_plan_campaign_keyword_error?: KeywordPlanCampaignKeywordError;
  readonly keyword_plan_ad_group_error?: KeywordPlanAdGroupError;
  readonly keyword_plan_ad_group_keyword_error?: KeywordPlanAdGroupKeywordError;
  readonly keyword_plan_idea_error?: KeywordPlanIdeaError;
  readonly account_budget_proposal_error?: AccountBudgetProposalError;
  readonly user_list_error?: UserListError;
  readonly change_event_error?: ChangeEventError;
  readonly change_status_error?: ChangeStatusError;
  readonly feed_error?: FeedError;
  readonly geo_target_constant_suggestion_error?: GeoTargetConstantSuggestionError;
  readonly campaign_draft_error?: CampaignDraftError;
  readonly feed_item_error?: FeedItemError;
  readonly label_error?: LabelError;
  readonly billing_setup_error?: BillingSetupError;
  readonly customer_client_link_error?: CustomerClientLinkError;
  readonly customer_manager_link_error?: CustomerManagerLinkError;
  readonly feed_mapping_error?: FeedMappingError;
  readonly customer_feed_error?: CustomerFeedError;
  readonly ad_group_feed_error?: AdGroupFeedError;
  readonly campaign_feed_error?: CampaignFeedError;
  readonly custom_interest_error?: CustomInterestError;
  readonly campaign_experiment_error?: CampaignExperimentError;
  readonly extension_feed_item_error?: ExtensionFeedItemError;
  readonly ad_parameter_error?: AdParameterError;
  readonly feed_item_validation_error?: FeedItemValidationError;
  readonly extension_setting_error?: ExtensionSettingError;
  readonly feed_item_set_error?: FeedItemSetError;
  readonly feed_item_set_link_error?: FeedItemSetLinkError;
  readonly feed_item_target_error?: FeedItemTargetError;
  readonly policy_violation_error?: PolicyViolationError;
  readonly partial_failure_error?: PartialFailureError;
  readonly click_view_error?: ClickViewError;
  readonly policy_validation_parameter_error?: PolicyValidationParameterError;
  readonly size_limit_error?: SizeLimitError;
  readonly offline_user_data_job_error?: OfflineUserDataJobError;
  readonly not_allowlisted_error?: NotAllowlistedError;
  readonly manager_link_error?: ManagerLinkError;
  readonly currency_code_error?: CurrencyCodeError;
  readonly experiment_error?: ExperimentError;
  readonly access_invitation_error?: AccessInvitationError;
  readonly reach_plan_error?: ReachPlanError;
  readonly invoice_error?: InvoiceError;
  readonly payments_account_error?: PaymentsAccountError;
  readonly time_zone_error?: TimeZoneError;
  readonly asset_link_error?: AssetLinkError;
  readonly user_data_error?: UserDataError;
  readonly batch_job_error?: BatchJobError;
  readonly account_link_error?: AccountLinkError;
  readonly third_party_app_analytics_link_error?: ThirdPartyAppAnalyticsLinkError;
  readonly customer_user_access_error?: CustomerUserAccessError;
  readonly custom_audience_error?: CustomAudienceError;
  readonly audience_error?: AudienceError;
  readonly search_term_insight_error?: SearchTermInsightError;
  readonly smart_campaign_error?: SmartCampaignError;
  readonly experiment_arm_error?: ExperimentArmError;
  readonly audience_insights_error?: AudienceInsightsError;
  readonly product_link_error?: ProductLinkError;
  readonly data_link_error?: DataLinkError;
  readonly customer_sk_ad_network_conversion_value_schema_error?: CustomerSkAdNetworkConversionValueSchemaError;
  readonly currency_error?: CurrencyError;
  readonly asset_group_signal_error?: AssetGroupSignalError;
  readonly product_link_invitation_error?: ProductLinkInvitationError;
  readonly identity_verification_error?: IdentityVerificationError;
  readonly user_list_customer_type_error?: UserListCustomerTypeError;
  readonly shopping_product_error?: ShoppingProductError;
  readonly automatically_created_asset_removal_error?: AutomaticallyCreatedAssetRemovalError;
  readonly shareable_preview_error?: ShareablePreviewError;
  readonly campaign_goal_config_error?: CampaignGoalConfigError;
  readonly goal_error?: GoalError;
  readonly brand_guidelines_migration_error?: BrandGuidelinesMigrationError;
  readonly asset_generation_error?: AssetGenerationError;
  readonly benchmarks_error?: BenchmarksError;
  readonly incentive_error?: IncentiveError;
  readonly content_creator_insights_error?: ContentCreatorInsightsError;
  readonly video_reservation_error?: VideoReservationError;
  readonly multi_party_auth_review_error?: MultiPartyAuthReviewError;
}

export interface ErrorDetails {
  readonly unpublished_error_code?: string;
  readonly policy_violation_details?: PolicyViolationDetails;
  readonly policy_finding_details?: PolicyFindingDetails;
  readonly quota_error_details?: QuotaErrorDetails;
  readonly resource_count_details?: ResourceCountDetails;
  readonly budget_per_day_minimum_error_details?: BudgetPerDayMinimumErrorDetails;
  readonly reservation_error_details?: ReservationErrorDetails;
  readonly incompatible_clo_goal_error_details?: IncompatibleCloGoalsErrorDetails;
}

export interface ErrorLocation {
  readonly field_path_elements?: ReadonlyArray<FieldPathElement>;
}

export type EuPoliticalAdvertisingStatus = "UNSPECIFIED" | "UNKNOWN" | "CONTAINS_EU_POLITICAL_ADVERTISING" | "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING";

export interface EuPoliticalAdvertisingStatusEnum {

}

export interface Event {
  readonly mapped_event_name?: string;
  readonly currency_code?: string;
  readonly event_revenue_range?: RevenueRange;
  readonly event_revenue_value?: number;
  readonly event_occurrence_range?: EventOccurrenceRange;
  readonly event_counter?: string;
}

export interface EventAttribute {
  readonly event?: string;
  readonly event_date_time?: string;
  readonly item_attribute?: ReadonlyArray<EventItemAttribute>;
}

export interface EventItemAttribute {
  readonly item_id?: string;
}

export interface EventOccurrenceRange {
  readonly min_event_count?: string;
  readonly max_event_count?: string;
}

export interface ExclusionSegment {
  readonly user_list?: UserListSegment;
}

export interface ExpandedDynamicSearchAdInfo {
  readonly description?: string;
  readonly description2?: string;
}

export interface ExpandedLandingPageView {
  readonly resource_name?: string;
  readonly expanded_final_url?: string;
}

export interface ExpandedTextAdInfo {
  readonly headline_part1?: string;
  readonly headline_part2?: string;
  readonly headline_part3?: string;
  readonly description?: string;
  readonly description2?: string;
  readonly path1?: string;
  readonly path2?: string;
}

export interface Experiment {
  readonly resource_name?: string;
  readonly experiment_id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly suffix?: string;
  readonly type?: ExperimentType;
  readonly status?: ExperimentStatus;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly goals?: ReadonlyArray<MetricGoal>;
  readonly long_running_operation?: string;
  readonly promote_status?: AsyncActionStatus;
  readonly sync_enabled?: boolean;
  readonly video_experiment?: VideoExperimentInfo;
  readonly optimize_assets_experiment?: OptimizeAssetsExperimentInfo;
}

export interface ExperimentalPerformanceMaxCampaignSettings {
  readonly budget_amount_micros?: string;
  readonly target_roas?: number;
  readonly target_cpa_micros?: string;
  readonly bidding_strategy_type?: BiddingStrategyType;
}

export interface ExperimentArm {
  readonly resource_name?: string;
  readonly experiment?: string;
  readonly name?: string;
  readonly control?: boolean;
  readonly traffic_split?: string;
  readonly campaigns?: ReadonlyArray<string>;
  readonly in_design_campaigns?: ReadonlyArray<string>;
  readonly asset_testing_info?: AssetTestingInfo;
  readonly asset_groups?: ReadonlyArray<AssetGroupInfo>;
  readonly performance_max_experiment_arm_info?: PerformanceMaxExperimentArmInfo;
}

export type ExperimentArmError = "UNSPECIFIED" | "UNKNOWN" | "EXPERIMENT_ARM_COUNT_LIMIT_EXCEEDED" | "INVALID_CAMPAIGN_STATUS" | "DUPLICATE_EXPERIMENT_ARM_NAME" | "CANNOT_SET_TREATMENT_ARM_CAMPAIGN" | "CANNOT_MODIFY_CAMPAIGN_IDS" | "CANNOT_MODIFY_CAMPAIGN_WITHOUT_SUFFIX_SET" | "CANNOT_MUTATE_TRAFFIC_SPLIT_AFTER_START" | "CANNOT_ADD_CAMPAIGN_WITH_SHARED_BUDGET" | "CANNOT_ADD_CAMPAIGN_WITH_CUSTOM_BUDGET" | "CANNOT_ADD_CAMPAIGNS_WITH_DYNAMIC_ASSETS_ENABLED" | "UNSUPPORTED_CAMPAIGN_ADVERTISING_CHANNEL_SUB_TYPE" | "CANNOT_ADD_BASE_CAMPAIGN_WITH_DATE_RANGE" | "BIDDING_STRATEGY_NOT_SUPPORTED_IN_EXPERIMENTS" | "TRAFFIC_SPLIT_NOT_SUPPORTED_FOR_CHANNEL_TYPE" | "BUDGET_MUST_NOT_BE_SHARED" | "ADOPT_AI_MAX_CAMPAIGN_MISSING_PERFORMANCE_SEARCH_ENABLED" | "TOO_MANY_CAMPAIGNS_IN_EXPERIMENT_ARM" | "CANNOT_ADD_CAMPAIGN_WITH_TARGET_ROAS_TOLERANCE_PERCENT_MILLIS" | "CANNOT_HAVE_SAME_CAMPAIGN_CROSS_ARMS_IN_ONE_EXPERIMENT" | "SEARCH_PLUS_CAMPAIGN_NOT_ALLOWED" | "DUPLICATE_ASSET_GROUP_ASSETS_BETWEEN_ARMS" | "DUPLICATE_ASSET_GROUP_ASSETS_IN_ONE_ARM";

export interface ExperimentArmErrorEnum {

}

export interface ExperimentArmOperation {
  readonly update_mask?: string;
  readonly create?: ExperimentArm;
  readonly update?: ExperimentArm;
  readonly remove?: string;
}

export type ExperimentAssetDetailOperation = "UNSPECIFIED" | "UNKNOWN" | "ADD" | "REMOVE";

export interface ExperimentAssetDetailOperationEnum {

}

export type ExperimentError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_SET_START_DATE_IN_PAST" | "END_DATE_BEFORE_START_DATE" | "START_DATE_TOO_FAR_IN_FUTURE" | "DUPLICATE_EXPERIMENT_NAME" | "CANNOT_MODIFY_REMOVED_EXPERIMENT" | "START_DATE_ALREADY_PASSED" | "CANNOT_SET_END_DATE_IN_PAST" | "CANNOT_SET_STATUS_TO_REMOVED" | "CANNOT_MODIFY_PAST_END_DATE" | "INVALID_STATUS" | "INVALID_CAMPAIGN_CHANNEL_TYPE" | "OVERLAPPING_MEMBERS_AND_DATE_RANGE" | "INVALID_TRIAL_ARM_TRAFFIC_SPLIT" | "TRAFFIC_SPLIT_OVERLAPPING" | "SUM_TRIAL_ARM_TRAFFIC_UNEQUALS_TO_TRIAL_TRAFFIC_SPLIT_DENOMINATOR" | "CANNOT_MODIFY_TRAFFIC_SPLIT_AFTER_START" | "EXPERIMENT_NOT_FOUND" | "EXPERIMENT_NOT_YET_STARTED" | "CANNOT_HAVE_MULTIPLE_CONTROL_ARMS" | "IN_DESIGN_CAMPAIGNS_NOT_SET" | "CANNOT_SET_STATUS_TO_GRADUATED" | "CANNOT_CREATE_EXPERIMENT_CAMPAIGN_WITH_SHARED_BUDGET" | "CANNOT_CREATE_EXPERIMENT_CAMPAIGN_WITH_CUSTOM_BUDGET" | "STATUS_TRANSITION_INVALID" | "DUPLICATE_EXPERIMENT_CAMPAIGN_NAME" | "CANNOT_REMOVE_IN_CREATION_EXPERIMENT" | "CANNOT_ADD_CAMPAIGN_WITH_DEPRECATED_AD_TYPES" | "CANNOT_ENABLE_SYNC_FOR_UNSUPPORTED_EXPERIMENT_TYPE" | "INVALID_DURATION_FOR_AN_EXPERIMENT" | "MISSING_EU_POLITICAL_ADVERTISING_SELF_DECLARATION" | "MISSING_EXPERIMENT_ARMS" | "MISSING_VIDEO_EXPERIMENT_SUBTYPE";

export interface ExperimentErrorEnum {

}

export type ExperimentMetric = "UNSPECIFIED" | "UNKNOWN" | "CLICKS" | "IMPRESSIONS" | "COST" | "CONVERSIONS_PER_INTERACTION_RATE" | "COST_PER_CONVERSION" | "CONVERSIONS_VALUE_PER_COST" | "AVERAGE_CPC" | "CTR" | "INCREMENTAL_CONVERSIONS" | "COMPLETED_VIDEO_VIEWS" | "CUSTOM_ALGORITHMS" | "CONVERSIONS" | "CONVERSION_VALUE";

export type ExperimentMetricDirection = "UNSPECIFIED" | "UNKNOWN" | "NO_CHANGE" | "INCREASE" | "DECREASE" | "NO_CHANGE_OR_INCREASE" | "NO_CHANGE_OR_DECREASE";

export interface ExperimentMetricDirectionEnum {

}

export interface ExperimentMetricEnum {

}

export interface ExperimentOperation {
  readonly update_mask?: string;
  readonly create?: Experiment;
  readonly update?: Experiment;
  readonly remove?: string;
}

export type ExperimentStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | "HALTED" | "PROMOTED" | "SETUP" | "INITIATED" | "GRADUATED";

export interface ExperimentStatusEnum {

}

export type ExperimentType = "UNSPECIFIED" | "UNKNOWN" | "DISPLAY_AND_VIDEO_360" | "AD_VARIATION" | "YOUTUBE_CUSTOM" | "DISPLAY_CUSTOM" | "SEARCH_CUSTOM" | "DISPLAY_AUTOMATED_BIDDING_STRATEGY" | "SEARCH_AUTOMATED_BIDDING_STRATEGY" | "SHOPPING_AUTOMATED_BIDDING_STRATEGY" | "SMART_MATCHING" | "HOTEL_CUSTOM" | "OPTIMIZE_ASSETS" | "ADOPT_AI_MAX" | "ADOPT_BROAD_MATCH_KEYWORDS" | "PMAX_REPLACEMENT_SHOPPING" | "COMPARE_CAMPAIGNS" | "PMAX_TEXT_CUSTOMIZATION_FINAL_URL_EXPANSION";

export interface ExperimentTypeEnum {

}

export interface ExtendedDemographicInfo {
  readonly extended_demographic_id?: string;
}

export type ExtensionFeedItemError = "UNSPECIFIED" | "UNKNOWN" | "VALUE_OUT_OF_RANGE" | "URL_LIST_TOO_LONG" | "CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING" | "CANNOT_SET_WITH_FINAL_URLS" | "CANNOT_SET_WITHOUT_FINAL_URLS" | "INVALID_PHONE_NUMBER" | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" | "PREMIUM_RATE_NUMBER_NOT_ALLOWED" | "DISALLOWED_NUMBER_TYPE" | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" | "VANITY_PHONE_NUMBER_NOT_ALLOWED" | "INVALID_CALL_CONVERSION_ACTION" | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_CALLTRACKING" | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" | "INVALID_APP_ID" | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" | "REVIEW_EXTENSION_SOURCE_INELIGIBLE" | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" | "INCONSISTENT_CURRENCY_CODES" | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" | "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" | "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS" | "UNSUPPORTED_VALUE" | "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE" | "INVALID_DEVICE_PREFERENCE" | "INVALID_SCHEDULE_END" | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" | "INVALID_SNIPPETS_HEADER" | "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM" | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" | "CONFLICTING_CALL_CONVERSION_SETTINGS" | "EXTENSION_TYPE_MISMATCH" | "EXTENSION_SUBTYPE_REQUIRED" | "EXTENSION_TYPE_UNSUPPORTED" | "CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS" | "CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES" | "INVALID_PRICE_FORMAT" | "PROMOTION_INVALID_TIME" | "TOO_MANY_DECIMAL_PLACES_SPECIFIED" | "CONCRETE_EXTENSION_TYPE_REQUIRED" | "SCHEDULE_END_NOT_AFTER_START";

export interface ExtensionFeedItemErrorEnum {

}

export type ExtensionSettingError = "UNSPECIFIED" | "UNKNOWN" | "EXTENSIONS_REQUIRED" | "FEED_TYPE_EXTENSION_TYPE_MISMATCH" | "INVALID_FEED_TYPE" | "INVALID_FEED_TYPE_FOR_CUSTOMER_EXTENSION_SETTING" | "CANNOT_CHANGE_FEED_ITEM_ON_CREATE" | "CANNOT_UPDATE_NEWLY_CREATED_EXTENSION" | "NO_EXISTING_AD_GROUP_EXTENSION_SETTING_FOR_TYPE" | "NO_EXISTING_CAMPAIGN_EXTENSION_SETTING_FOR_TYPE" | "NO_EXISTING_CUSTOMER_EXTENSION_SETTING_FOR_TYPE" | "AD_GROUP_EXTENSION_SETTING_ALREADY_EXISTS" | "CAMPAIGN_EXTENSION_SETTING_ALREADY_EXISTS" | "CUSTOMER_EXTENSION_SETTING_ALREADY_EXISTS" | "AD_GROUP_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "CAMPAIGN_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "CUSTOMER_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" | "VALUE_OUT_OF_RANGE" | "CANNOT_SET_FIELD_WITH_FINAL_URLS" | "FINAL_URLS_NOT_SET" | "INVALID_PHONE_NUMBER" | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" | "PREMIUM_RATE_NUMBER_NOT_ALLOWED" | "DISALLOWED_NUMBER_TYPE" | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" | "VANITY_PHONE_NUMBER_NOT_ALLOWED" | "INVALID_COUNTRY_CODE" | "INVALID_CALL_CONVERSION_TYPE_ID" | "CUSTOMER_NOT_IN_ALLOWLIST_FOR_CALLTRACKING" | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" | "INVALID_APP_ID" | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" | "REVIEW_EXTENSION_SOURCE_NOT_ELIGIBLE" | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" | "MISSING_FIELD" | "INCONSISTENT_CURRENCY_CODES" | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" | "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" | "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS" | "UNSUPPORTED_VALUE" | "INVALID_DEVICE_PREFERENCE" | "INVALID_SCHEDULE_END" | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" | "OVERLAPPING_SCHEDULES_NOT_ALLOWED" | "SCHEDULE_END_NOT_AFTER_START" | "TOO_MANY_SCHEDULES_PER_DAY" | "DUPLICATE_EXTENSION_FEED_ITEM_EDIT" | "INVALID_SNIPPETS_HEADER" | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" | "CAMPAIGN_TARGETING_MISMATCH" | "CANNOT_OPERATE_ON_REMOVED_FEED" | "EXTENSION_TYPE_REQUIRED" | "INCOMPATIBLE_UNDERLYING_MATCHING_FUNCTION" | "START_DATE_AFTER_END_DATE" | "INVALID_PRICE_FORMAT" | "PROMOTION_INVALID_TIME" | "PROMOTION_CANNOT_SET_PERCENT_DISCOUNT_AND_MONEY_DISCOUNT" | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT" | "TOO_MANY_DECIMAL_PLACES_SPECIFIED" | "INVALID_LANGUAGE_CODE" | "UNSUPPORTED_LANGUAGE" | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" | "EXTENSION_SETTING_UPDATE_IS_A_NOOP" | "DISALLOWED_TEXT";

export interface ExtensionSettingErrorEnum {

}

export interface ExternalAttributionData {
  readonly external_attribution_credit?: number;
  readonly external_attribution_model?: string;
}

export type ExternalConversionSource = "UNSPECIFIED" | "UNKNOWN" | "WEBPAGE" | "ANALYTICS" | "UPLOAD" | "AD_CALL_METRICS" | "WEBSITE_CALL_METRICS" | "STORE_VISITS" | "ANDROID_IN_APP" | "IOS_IN_APP" | "IOS_FIRST_OPEN" | "APP_UNSPECIFIED" | "ANDROID_FIRST_OPEN" | "UPLOAD_CALLS" | "FIREBASE" | "CLICK_TO_CALL" | "SALESFORCE" | "STORE_SALES_CRM" | "STORE_SALES_PAYMENT_NETWORK" | "GOOGLE_PLAY" | "THIRD_PARTY_APP_ANALYTICS" | "GOOGLE_ATTRIBUTION" | "STORE_SALES_DIRECT_UPLOAD" | "STORE_SALES" | "SEARCH_ADS_360" | "GOOGLE_HOSTED" | "FLOODLIGHT" | "ANALYTICS_SEARCH_ADS_360" | "FIREBASE_SEARCH_ADS_360" | "DISPLAY_AND_VIDEO_360_FLOODLIGHT";

export interface ExternalConversionSourceEnum {

}

export interface FacebookMessengerBusinessMessageInfo {
  readonly page_name?: string;
}

export type FeedAttributeReferenceError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_REFERENCE_REMOVED_FEED" | "INVALID_FEED_NAME" | "INVALID_FEED_ATTRIBUTE_NAME";

export interface FeedAttributeReferenceErrorEnum {

}

export type FeedError = "UNSPECIFIED" | "UNKNOWN" | "ATTRIBUTE_NAMES_NOT_UNIQUE" | "ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES" | "CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED" | "CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED" | "CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED" | "CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE" | "FEED_REMOVED" | "INVALID_ORIGIN_VALUE" | "FEED_ORIGIN_IS_NOT_USER" | "INVALID_AUTH_TOKEN_FOR_EMAIL" | "INVALID_EMAIL" | "DUPLICATE_FEED_NAME" | "INVALID_FEED_NAME" | "MISSING_OAUTH_INFO" | "NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY" | "TOO_MANY_ATTRIBUTES" | "INVALID_BUSINESS_ACCOUNT" | "BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT" | "INVALID_AFFILIATE_CHAIN_ID" | "DUPLICATE_SYSTEM_FEED" | "GMB_ACCESS_ERROR" | "CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS" | "LEGACY_EXTENSION_TYPE_READ_ONLY";

export interface FeedErrorEnum {

}

export type FeedItemError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_CONVERT_ATTRIBUTE_VALUE_FROM_STRING" | "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM" | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" | "KEY_ATTRIBUTES_NOT_FOUND" | "INVALID_URL" | "MISSING_KEY_ATTRIBUTES" | "KEY_ATTRIBUTES_NOT_UNIQUE" | "CANNOT_MODIFY_KEY_ATTRIBUTE_VALUE" | "SIZE_TOO_LARGE_FOR_MULTI_VALUE_ATTRIBUTE" | "LEGACY_FEED_TYPE_READ_ONLY";

export interface FeedItemErrorEnum {

}

export type FeedItemSetError = "UNSPECIFIED" | "UNKNOWN" | "FEED_ITEM_SET_REMOVED" | "CANNOT_CLEAR_DYNAMIC_FILTER" | "CANNOT_CREATE_DYNAMIC_FILTER" | "INVALID_FEED_TYPE" | "DUPLICATE_NAME" | "WRONG_DYNAMIC_FILTER_FOR_FEED_TYPE" | "DYNAMIC_FILTER_INVALID_CHAIN_IDS";

export interface FeedItemSetErrorEnum {

}

export type FeedItemSetLinkError = "UNSPECIFIED" | "UNKNOWN" | "FEED_ID_MISMATCH" | "NO_MUTATE_ALLOWED_FOR_DYNAMIC_SET";

export interface FeedItemSetLinkErrorEnum {

}

export type FeedItemTargetError = "UNSPECIFIED" | "UNKNOWN" | "MUST_SET_TARGET_ONEOF_ON_CREATE" | "FEED_ITEM_TARGET_ALREADY_EXISTS" | "FEED_ITEM_SCHEDULES_CANNOT_OVERLAP" | "TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE" | "TOO_MANY_SCHEDULES_PER_DAY" | "CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS" | "DUPLICATE_AD_SCHEDULE" | "DUPLICATE_KEYWORD";

export interface FeedItemTargetErrorEnum {

}

export type FeedItemValidationError = "UNSPECIFIED" | "UNKNOWN" | "STRING_TOO_SHORT" | "STRING_TOO_LONG" | "VALUE_NOT_SPECIFIED" | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" | "INVALID_PHONE_NUMBER" | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" | "PREMIUM_RATE_NUMBER_NOT_ALLOWED" | "DISALLOWED_NUMBER_TYPE" | "VALUE_OUT_OF_RANGE" | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" | "CUSTOMER_NOT_IN_ALLOWLIST_FOR_CALLTRACKING" | "INVALID_COUNTRY_CODE" | "INVALID_APP_ID" | "MISSING_ATTRIBUTES_FOR_FIELDS" | "INVALID_TYPE_ID" | "INVALID_EMAIL_ADDRESS" | "INVALID_HTTPS_URL" | "MISSING_DELIVERY_ADDRESS" | "START_DATE_AFTER_END_DATE" | "MISSING_FEED_ITEM_START_TIME" | "MISSING_FEED_ITEM_END_TIME" | "MISSING_FEED_ITEM_ID" | "VANITY_PHONE_NUMBER_NOT_ALLOWED" | "INVALID_REVIEW_EXTENSION_SNIPPET" | "INVALID_NUMBER_FORMAT" | "INVALID_DATE_FORMAT" | "INVALID_PRICE_FORMAT" | "UNKNOWN_PLACEHOLDER_FIELD" | "MISSING_ENHANCED_SITELINK_DESCRIPTION_LINE" | "REVIEW_EXTENSION_SOURCE_INELIGIBLE" | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" | "DOUBLE_QUOTES_IN_REVIEW_EXTENSION_SNIPPET" | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" | "INVALID_FORM_ENCODED_PARAMS" | "INVALID_URL_PARAMETER_NAME" | "NO_GEOCODING_RESULT" | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" | "INVALID_PLACEHOLDER_FIELD_ID" | "INVALID_URL_TAG" | "LIST_TOO_LONG" | "INVALID_ATTRIBUTES_COMBINATION" | "DUPLICATE_VALUES" | "INVALID_CALL_CONVERSION_ACTION_ID" | "CANNOT_SET_WITHOUT_FINAL_URLS" | "APP_ID_DOESNT_EXIST_IN_APP_STORE" | "INVALID_FINAL_URL" | "INVALID_TRACKING_URL" | "INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL" | "LIST_TOO_SHORT" | "INVALID_USER_ACTION" | "INVALID_TYPE_NAME" | "INVALID_EVENT_CHANGE_STATUS" | "INVALID_SNIPPETS_HEADER" | "INVALID_ANDROID_APP_LINK" | "NUMBER_TYPE_WITH_CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" | "RESERVED_KEYWORD_OTHER" | "DUPLICATE_OPTION_LABELS" | "DUPLICATE_OPTION_PREFILLS" | "UNEQUAL_LIST_LENGTHS" | "INCONSISTENT_CURRENCY_CODES" | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" | "ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" | "UNSUPPORTED_VALUE" | "INVALID_FINAL_MOBILE_URL" | "INVALID_KEYWORDLESS_AD_RULE_LABEL" | "VALUE_TRACK_PARAMETER_NOT_SUPPORTED" | "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE" | "INVALID_IOS_APP_LINK" | "MISSING_IOS_APP_LINK_OR_IOS_APP_STORE_ID" | "PROMOTION_INVALID_TIME" | "PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF" | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT" | "TOO_MANY_DECIMAL_PLACES_SPECIFIED" | "AD_CUSTOMIZERS_NOT_ALLOWED" | "INVALID_LANGUAGE_CODE" | "UNSUPPORTED_LANGUAGE" | "IF_FUNCTION_NOT_ALLOWED" | "INVALID_FINAL_URL_SUFFIX" | "INVALID_TAG_IN_FINAL_URL_SUFFIX" | "INVALID_FINAL_URL_SUFFIX_FORMAT" | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" | "ONLY_ONE_DELIVERY_OPTION_IS_ALLOWED" | "NO_DELIVERY_OPTION_IS_SET" | "INVALID_CONVERSION_REPORTING_STATE" | "IMAGE_SIZE_WRONG" | "EMAIL_DELIVERY_NOT_AVAILABLE_IN_COUNTRY" | "AUTO_REPLY_NOT_AVAILABLE_IN_COUNTRY" | "INVALID_LATITUDE_VALUE" | "INVALID_LONGITUDE_VALUE" | "TOO_MANY_LABELS" | "INVALID_IMAGE_URL" | "MISSING_LATITUDE_VALUE" | "MISSING_LONGITUDE_VALUE" | "ADDRESS_NOT_FOUND" | "ADDRESS_NOT_TARGETABLE" | "INVALID_ASSET_ID" | "INCOMPATIBLE_ASSET_TYPE" | "IMAGE_ERROR_UNEXPECTED_SIZE" | "IMAGE_ERROR_ASPECT_RATIO_NOT_ALLOWED" | "IMAGE_ERROR_FILE_TOO_LARGE" | "IMAGE_ERROR_FORMAT_NOT_ALLOWED" | "IMAGE_ERROR_CONSTRAINTS_VIOLATED" | "IMAGE_ERROR_SERVER_ERROR";

export interface FeedItemValidationErrorEnum {

}

export type FeedMappingError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_PLACEHOLDER_FIELD" | "INVALID_CRITERION_FIELD" | "INVALID_PLACEHOLDER_TYPE" | "INVALID_CRITERION_TYPE" | "NO_ATTRIBUTE_FIELD_MAPPINGS" | "FEED_ATTRIBUTE_TYPE_MISMATCH" | "CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED" | "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE" | "MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE" | "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD" | "MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD" | "UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS" | "LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS" | "CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED" | "INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED" | "INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE" | "ATTRIBUTE_FIELD_MAPPING_MISSING_FIELD" | "LEGACY_FEED_TYPE_READ_ONLY";

export interface FeedMappingErrorEnum {

}

export interface Fellowship {
  readonly institution_name?: string;
  readonly completion_year?: number;
}

export interface FetchIncentiveRequest {
  readonly language_code?: string;
  readonly country_code?: string;
  readonly email?: string;
  readonly incentive_type?: IncentiveType;
}

export interface FetchIncentiveResponse {
  readonly incentive_offer?: IncentiveOffer;
}

export type FieldError = "UNSPECIFIED" | "UNKNOWN" | "REQUIRED" | "IMMUTABLE_FIELD" | "INVALID_VALUE" | "VALUE_MUST_BE_UNSET" | "REQUIRED_NONEMPTY_LIST" | "FIELD_CANNOT_BE_CLEARED" | "BLOCKED_VALUE" | "FIELD_CAN_ONLY_BE_CLEARED";

export interface FieldErrorEnum {

}

export type FieldMaskError = "UNSPECIFIED" | "UNKNOWN" | "FIELD_MASK_MISSING" | "FIELD_MASK_NOT_ALLOWED" | "FIELD_NOT_FOUND" | "FIELD_HAS_SUBFIELDS";

export interface FieldMaskErrorEnum {

}

export interface FieldPathElement {
  readonly field_name?: string;
  readonly index?: number;
}

export interface FinalAppUrl {
  readonly os_type?: AppUrlOperatingSystemType;
  readonly url?: string;
}

export interface FinalUrlExpansionAssetView {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
  readonly status?: AssetLinkStatus;
  readonly final_url?: string;
  readonly ad_group?: string;
  readonly asset_group?: string;
}

export type FinalUrlExpansionAssetViewError = "UNSPECIFIED" | "UNKNOWN" | "MISSING_REQUIRED_FILTER" | "REQUIRES_ADVERTISING_CHANNEL_TYPE_FILTER" | "INVALID_ADVERTISING_CHANNEL_TYPE_IN_FILTER" | "CANNOT_SELECT_ASSET_GROUP" | "CANNOT_SELECT_AD_GROUP" | "REQUIRES_FILTER_BY_SINGLE_RESOURCE" | "CANNOT_SELECT_BOTH_AD_GROUP_AND_ASSET_GROUP" | "CANNOT_FILTER_BY_BOTH_AD_GROUP_AND_ASSET_GROUP";

export interface FinalUrlExpansionAssetViewErrorEnum {

}

export interface FinalUrlImageGenerationInput {
  readonly final_url?: string;
}

export interface FineGrainedConversionValueMappings {
  readonly fine_grained_conversion_value?: number;
  readonly conversion_value_mapping?: ConversionValueMapping;
}

export interface FirebaseSettings {
  readonly event_name?: string;
  readonly project_id?: string;
  readonly property_id?: string;
  readonly property_name?: string;
}

export interface FixedCpm {
  readonly goal?: FixedCpmGoal;
  readonly target_frequency_info?: FixedCpmTargetFrequencyGoalInfo;
}

export type FixedCpmGoal = "UNSPECIFIED" | "UNKNOWN" | "REACH" | "TARGET_FREQUENCY";

export interface FixedCpmGoalEnum {

}

export interface FixedCpmTargetFrequencyGoalInfo {
  readonly target_count?: string;
  readonly time_unit?: FixedCpmTargetFrequencyTimeUnit;
}

export type FixedCpmTargetFrequencyTimeUnit = "UNSPECIFIED" | "UNKNOWN" | "MONTHLY";

export interface FixedCpmTargetFrequencyTimeUnitEnum {

}

export interface FlexibleRuleOperandInfo {
  readonly rule?: UserListRuleInfo;
  readonly lookback_window_days?: string;
}

export interface FlexibleRuleUserListInfo {
  readonly inclusive_rule_operator?: UserListFlexibleRuleOperator;
  readonly inclusive_operands?: ReadonlyArray<FlexibleRuleOperandInfo>;
  readonly exclusive_operands?: ReadonlyArray<FlexibleRuleOperandInfo>;
}

export interface Forecast {
  readonly on_target_reach?: string;
  readonly total_reach?: string;
  readonly on_target_impressions?: string;
  readonly total_impressions?: string;
  readonly viewable_impressions?: string;
  readonly effective_frequency_breakdowns?: ReadonlyArray<EffectiveFrequencyBreakdown>;
  readonly on_target_coview_reach?: string;
  readonly total_coview_reach?: string;
  readonly on_target_coview_impressions?: string;
  readonly total_coview_impressions?: string;
  readonly conversions?: number;
  readonly trueview_views?: string;
  readonly clicks?: string;
}

export interface ForecastAdGroup {
  readonly keywords?: ReadonlyArray<KeywordInfo>;
}

export interface ForecastingSetTargetCpaParameters {
  readonly target_cpa_micros?: string;
  readonly campaign_budget_amount_micros?: string;
}

export interface ForecastingSetTargetCpaRecommendation {
  readonly recommended_target_cpa_micros?: string;
  readonly campaign_budget?: CampaignBudget;
}

export interface ForecastingSetTargetRoasParameters {
  readonly target_roas?: number;
  readonly campaign_budget_amount_micros?: string;
}

export interface ForecastingSetTargetRoasRecommendation {
  readonly recommended_target_roas?: number;
  readonly campaign_budget?: CampaignBudget;
}

export interface ForecastMetricOptions {
  readonly include_coview?: boolean;
}

export interface FreeformImageGenerationInput {
  readonly freeform_prompt?: string;
}

export interface FrequencyCap {
  readonly impressions?: number;
  readonly time_unit?: FrequencyCapTimeUnit;
}

export interface FrequencyCapEntry {
  readonly key?: FrequencyCapKey;
  readonly cap?: number;
}

export type FrequencyCapEventType = "UNSPECIFIED" | "UNKNOWN" | "IMPRESSION" | "VIDEO_VIEW";

export interface FrequencyCapEventTypeEnum {

}

export interface FrequencyCapKey {
  readonly level?: FrequencyCapLevel;
  readonly event_type?: FrequencyCapEventType;
  readonly time_unit?: FrequencyCapTimeUnit;
  readonly time_length?: number;
}

export type FrequencyCapLevel = "UNSPECIFIED" | "UNKNOWN" | "AD_GROUP_AD" | "AD_GROUP" | "CAMPAIGN";

export interface FrequencyCapLevelEnum {

}

export type FrequencyCapTimeUnit = "UNSPECIFIED" | "UNKNOWN" | "DAY" | "WEEK" | "MONTH";

export interface FrequencyCapTimeUnitEnum {

}

export type FunctionError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_FUNCTION_FORMAT" | "DATA_TYPE_MISMATCH" | "INVALID_CONJUNCTION_OPERANDS" | "INVALID_NUMBER_OF_OPERANDS" | "INVALID_OPERAND_TYPE" | "INVALID_OPERATOR" | "INVALID_REQUEST_CONTEXT_TYPE" | "INVALID_FUNCTION_FOR_CALL_PLACEHOLDER" | "INVALID_FUNCTION_FOR_PLACEHOLDER" | "INVALID_OPERAND" | "MISSING_CONSTANT_OPERAND_VALUE" | "INVALID_CONSTANT_OPERAND_VALUE" | "INVALID_NESTING" | "MULTIPLE_FEED_IDS_NOT_SUPPORTED" | "INVALID_FUNCTION_FOR_FEED_WITH_FIXED_SCHEMA" | "INVALID_ATTRIBUTE_NAME";

export interface FunctionErrorEnum {

}

export type FunctionParsingError = "UNSPECIFIED" | "UNKNOWN" | "NO_MORE_INPUT" | "EXPECTED_CHARACTER" | "UNEXPECTED_SEPARATOR" | "UNMATCHED_LEFT_BRACKET" | "UNMATCHED_RIGHT_BRACKET" | "TOO_MANY_NESTED_FUNCTIONS" | "MISSING_RIGHT_HAND_OPERAND" | "INVALID_OPERATOR_NAME" | "FEED_ATTRIBUTE_OPERAND_ARGUMENT_NOT_INTEGER" | "NO_OPERANDS" | "TOO_MANY_OPERANDS";

export interface FunctionParsingErrorEnum {

}

export interface GclidDateTimePair {
  readonly gclid?: string;
  readonly conversion_date_time?: string;
}

export interface GenderDimension {
  readonly genders?: ReadonlyArray<GenderType>;
  readonly include_undetermined?: boolean;
}

export interface GenderInfo {
  readonly type?: GenderType;
}

export type GenderType = "UNSPECIFIED" | "UNKNOWN" | "MALE" | "FEMALE" | "UNDETERMINED";

export interface GenderTypeEnum {

}

export interface GenderView {
  readonly resource_name?: string;
}

export interface GenerateAdGroupThemesRequest {
  readonly customer_id?: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly ad_groups?: ReadonlyArray<string>;
}

export interface GenerateAdGroupThemesResponse {
  readonly ad_group_keyword_suggestions?: ReadonlyArray<AdGroupKeywordSuggestion>;
  readonly unusable_ad_groups?: ReadonlyArray<UnusableAdGroup>;
}

export interface GenerateAudienceCompositionInsightsRequest {
  readonly customer_id?: string;
  readonly audience?: InsightsAudience;
  readonly baseline_audience?: InsightsAudience;
  readonly data_month?: string;
  readonly dimensions?: ReadonlyArray<AudienceInsightsDimension>;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface GenerateAudienceCompositionInsightsResponse {
  readonly sections?: ReadonlyArray<AudienceCompositionSection>;
}

export interface GenerateAudienceDefinitionRequest {
  readonly customer_id?: string;
  readonly audience_description?: InsightsAudienceDescription;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface GenerateAudienceDefinitionResponse {
  readonly high_relevance_attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly medium_relevance_attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
}

export interface GenerateAudienceOverlapInsightsRequest {
  readonly customer_id?: string;
  readonly country_location?: LocationInfo;
  readonly primary_attribute?: AudienceInsightsAttribute;
  readonly dimensions?: ReadonlyArray<AudienceInsightsDimension>;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface GenerateAudienceOverlapInsightsResponse {
  readonly primary_attribute_metadata?: AudienceInsightsAttributeMetadata;
  readonly dimension_results?: ReadonlyArray<DimensionOverlapResult>;
}

export interface GenerateBenchmarksMetricsRequest {
  readonly customer_id?: string;
  readonly date_range?: DateRange;
  readonly location?: LocationInfo;
  readonly benchmarks_source?: BenchmarksSource;
  readonly product_filter?: ProductFilter;
  readonly breakdown_definition?: BreakdownDefinition;
  readonly currency_code?: string;
  readonly customer_benchmarks_group?: string;
  readonly application_info?: AdditionalApplicationInfo;
}

export interface GenerateBenchmarksMetricsResponse {
  readonly customer_metrics?: CustomerMetrics;
  readonly average_benchmarks_metrics?: Metrics;
  readonly breakdown_metrics?: ReadonlyArray<BreakdownMetrics>;
}

export interface GenerateConversionRatesRequest {
  readonly customer_id?: string;
  readonly customer_reach_group?: string;
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface GenerateConversionRatesResponse {
  readonly conversion_rate_suggestions?: ReadonlyArray<ConversionRateSuggestion>;
}

export interface GenerateCreatorInsightsRequest {
  readonly customer_id?: string;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
  readonly country_locations?: ReadonlyArray<LocationInfo>;
  readonly sub_country_locations?: ReadonlyArray<LocationInfo>;
  readonly supplemental_data?: ReadonlyArray<ContentCreatorInsightsSupplementalData>;
  readonly search_attributes?: SearchAttributes;
  readonly search_channels?: YouTubeChannels;
  readonly search_topics?: SearchTopics;
}

export interface GenerateCreatorInsightsResponse {
  readonly creator_insights?: ReadonlyArray<YouTubeCreatorInsights>;
  readonly local_creator_insights?: ReadonlyArray<YouTubeCreatorInsights>;
}

export interface GeneratedImage {
  readonly image_temporary_url?: string;
  readonly asset_field_type?: AssetFieldType;
}

export interface GeneratedText {
  readonly text?: string;
  readonly asset_field_type?: AssetFieldType;
}

export interface GenerateImagesRequest {
  readonly customer_id?: string;
  readonly asset_field_types?: ReadonlyArray<AssetFieldType>;
  readonly advertising_channel_type?: AdvertisingChannelType;
  readonly final_url_generation?: FinalUrlImageGenerationInput;
  readonly freeform_generation?: FreeformImageGenerationInput;
  readonly product_recontext_generation?: ProductRecontextGenerationImageInput;
}

export interface GenerateImagesResponse {
  readonly generated_images?: ReadonlyArray<GeneratedImage>;
}

export interface GenerateInsightsFinderReportRequest {
  readonly customer_id?: string;
  readonly baseline_audience?: InsightsAudience;
  readonly specific_audience?: InsightsAudience;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface GenerateInsightsFinderReportResponse {
  readonly saved_report_url?: string;
}

export interface GenerateKeywordForecastMetricsRequest {
  readonly customer_id?: string;
  readonly currency_code?: string;
  readonly forecast_period?: DateRange;
  readonly campaign?: CampaignToForecast;
}

export interface GenerateKeywordForecastMetricsResponse {
  readonly campaign_forecast_metrics?: KeywordForecastMetrics;
}

export interface GenerateKeywordHistoricalMetricsRequest {
  readonly customer_id?: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly language?: string;
  readonly include_adult_keywords?: boolean;
  readonly geo_target_constants?: ReadonlyArray<string>;
  readonly keyword_plan_network?: KeywordPlanNetwork;
  readonly aggregate_metrics?: KeywordPlanAggregateMetrics;
  readonly historical_metrics_options?: HistoricalMetricsOptions;
}

export interface GenerateKeywordHistoricalMetricsResponse {
  readonly results?: ReadonlyArray<GenerateKeywordHistoricalMetricsResult>;
  readonly aggregate_metric_results?: KeywordPlanAggregateMetricResults;
}

export interface GenerateKeywordHistoricalMetricsResult {
  readonly text?: string;
  readonly close_variants?: ReadonlyArray<string>;
  readonly keyword_metrics?: KeywordPlanHistoricalMetrics;
}

export interface GenerateKeywordIdeaResponse {
  readonly results?: ReadonlyArray<GenerateKeywordIdeaResult>;
  readonly aggregate_metric_results?: KeywordPlanAggregateMetricResults;
  readonly next_page_token?: string;
  readonly total_size?: string;
}

export interface GenerateKeywordIdeaResult {
  readonly text?: string;
  readonly keyword_idea_metrics?: KeywordPlanHistoricalMetrics;
  readonly keyword_annotations?: KeywordAnnotations;
  readonly close_variants?: ReadonlyArray<string>;
}

export interface GenerateKeywordIdeasRequest {
  readonly customer_id?: string;
  readonly language?: string;
  readonly geo_target_constants?: ReadonlyArray<string>;
  readonly include_adult_keywords?: boolean;
  readonly page_token?: string;
  readonly page_size?: number;
  readonly keyword_plan_network?: KeywordPlanNetwork;
  readonly keyword_annotation?: ReadonlyArray<KeywordPlanKeywordAnnotation>;
  readonly aggregate_metrics?: KeywordPlanAggregateMetrics;
  readonly historical_metrics_options?: HistoricalMetricsOptions;
  readonly keyword_and_url_seed?: KeywordAndUrlSeed;
  readonly keyword_seed?: KeywordSeed;
  readonly url_seed?: UrlSeed;
  readonly site_seed?: SiteSeed;
}

export interface GenerateReachForecastRequest {
  readonly customer_id?: string;
  readonly currency_code?: string;
  readonly campaign_duration?: CampaignDuration;
  readonly cookie_frequency_cap_setting?: FrequencyCap;
  readonly min_effective_frequency?: number;
  readonly effective_frequency_limit?: EffectiveFrequencyLimit;
  readonly targeting?: Targeting;
  readonly planned_products?: ReadonlyArray<PlannedProduct>;
  readonly forecast_metric_options?: ForecastMetricOptions;
  readonly customer_reach_group?: string;
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface GenerateReachForecastResponse {
  readonly on_target_audience_metrics?: OnTargetAudienceMetrics;
  readonly reach_curve?: ReachCurve;
}

export interface GenerateRecommendationsRequest {
  readonly customer_id?: string;
  readonly recommendation_types?: ReadonlyArray<RecommendationType>;
  readonly advertising_channel_type?: AdvertisingChannelType;
  readonly campaign_sitelink_count?: number;
  readonly conversion_tracking_status?: ConversionTrackingStatus;
  readonly bidding_info?: BiddingInfo;
  readonly ad_group_info?: ReadonlyArray<AdGroupInfo>;
  readonly seed_info?: SeedInfo;
  readonly budget_info?: BudgetInfo;
  readonly campaign_image_asset_count?: number;
  readonly campaign_call_asset_count?: number;
  readonly country_codes?: ReadonlyArray<string>;
  readonly language_codes?: ReadonlyArray<string>;
  readonly positive_locations_ids?: ReadonlyArray<string>;
  readonly negative_locations_ids?: ReadonlyArray<string>;
  readonly asset_group_info?: ReadonlyArray<AssetGroupInfo>;
  readonly target_partner_search_network?: boolean;
  readonly target_content_network?: boolean;
  readonly merchant_center_account_id?: string;
  readonly is_new_customer?: boolean;
}

export interface GenerateRecommendationsRequest_AssetGroupInfo {
  readonly final_url?: string;
  readonly headline?: ReadonlyArray<string>;
  readonly description?: ReadonlyArray<string>;
}

export interface GenerateRecommendationsResponse {
  readonly recommendations?: ReadonlyArray<Recommendation>;
}

export interface GenerateShareablePreviewsOperation {
  readonly shareable_previews?: ReadonlyArray<ShareablePreview>;
}

export interface GenerateShareablePreviewsRequest {
  readonly customer_id?: string;
  readonly operation?: GenerateShareablePreviewsOperation;
}

export interface GenerateShareablePreviewsResponse {
  readonly result?: GenerateShareablePreviewsResult;
}

export interface GenerateShareablePreviewsResult {
  readonly previews?: ReadonlyArray<ShareablePreviewResult>;
}

export interface GenerateSuggestedTargetingInsightsRequest {
  readonly customer_id?: string;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
  readonly audience_definition?: InsightsAudienceDefinition;
  readonly audience_description?: InsightsAudienceDescription;
}

export interface GenerateSuggestedTargetingInsightsResponse {
  readonly suggestions?: ReadonlyArray<TargetingSuggestionMetrics>;
}

export interface GenerateTargetingSuggestionMetricsRequest {
  readonly customer_id?: string;
  readonly audiences?: ReadonlyArray<InsightsAudience>;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface GenerateTargetingSuggestionMetricsResponse {
  readonly suggestions?: ReadonlyArray<TargetingSuggestionMetrics>;
}

export interface GenerateTextRequest {
  readonly customer_id?: string;
  readonly asset_field_types?: ReadonlyArray<AssetFieldType>;
  readonly final_url?: string;
  readonly freeform_prompt?: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly existing_generation_context?: AssetGenerationExistingContext;
  readonly advertising_channel_type?: AdvertisingChannelType;
}

export interface GenerateTextResponse {
  readonly generated_text?: ReadonlyArray<GeneratedText>;
}

export interface GenerateTrendingInsightsRequest {
  readonly customer_id?: string;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
  readonly country_location?: LocationInfo;
  readonly sub_country_locations?: ReadonlyArray<LocationInfo>;
  readonly supplemental_data?: ReadonlyArray<ContentCreatorInsightsSupplementalData>;
  readonly search_audience?: SearchAudience;
  readonly search_topics?: SearchTopics;
}

export interface GenerateTrendingInsightsResponse {
  readonly trend_insights?: ReadonlyArray<TrendInsight>;
}

export interface GeographicView {
  readonly resource_name?: string;
  readonly location_type?: GeoTargetingType;
  readonly country_criterion_id?: string;
}

export interface GeoPointInfo {
  readonly longitude_in_micro_degrees?: number;
  readonly latitude_in_micro_degrees?: number;
}

export interface GeoTargetConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly country_code?: string;
  readonly target_type?: string;
  readonly status?: GeoTargetConstantStatus;
  readonly canonical_name?: string;
  readonly parent_geo_target?: string;
}

export type GeoTargetConstantStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVAL_PLANNED";

export interface GeoTargetConstantStatusEnum {

}

export interface GeoTargetConstantSuggestion {
  readonly locale?: string;
  readonly reach?: string;
  readonly search_term?: string;
  readonly geo_target_constant?: GeoTargetConstant;
  readonly geo_target_constant_parents?: ReadonlyArray<GeoTargetConstant>;
}

export type GeoTargetConstantSuggestionError = "UNSPECIFIED" | "UNKNOWN" | "LOCATION_NAME_SIZE_LIMIT" | "LOCATION_NAME_LIMIT" | "INVALID_COUNTRY_CODE" | "REQUEST_PARAMETERS_UNSET";

export interface GeoTargetConstantSuggestionErrorEnum {

}

export type GeoTargetingType = "UNSPECIFIED" | "UNKNOWN" | "AREA_OF_INTEREST" | "LOCATION_OF_PRESENCE";

export interface GeoTargetingTypeEnum {

}

export interface GeoTargets {
  readonly geo_target_constants?: ReadonlyArray<string>;
}

export interface GeoTargetTypeSetting {
  readonly positive_geo_target_type?: PositiveGeoTargetType;
  readonly negative_geo_target_type?: NegativeGeoTargetType;
}

export interface GetGoogleAdsFieldRequest {
  readonly resource_name?: string;
}

export interface GetIdentityVerificationRequest {
  readonly customer_id?: string;
}

export interface GetIdentityVerificationResponse {
  readonly identity_verification?: ReadonlyArray<IdentityVerification>;
}

export interface GetSmartCampaignStatusRequest {
  readonly resource_name?: string;
}

export interface GetSmartCampaignStatusResponse {
  readonly smart_campaign_status?: SmartCampaignStatus;
  readonly not_eligible_details?: SmartCampaignNotEligibleDetails;
  readonly eligible_details?: SmartCampaignEligibleDetails;
  readonly paused_details?: SmartCampaignPausedDetails;
  readonly removed_details?: SmartCampaignRemovedDetails;
  readonly ended_details?: SmartCampaignEndedDetails;
}

export type GlsPhoneNumberType = "UNSPECIFIED" | "UNKNOWN" | "DESTINATION_PHONE_NUMBER_FOR_ADS" | "DESTINATION_PHONE_NUMBER_FOR_SMS_ONLY" | "DESTINATION_PHONE_NUMBER_FOR_WHATSAPP_ONLY";

export interface GlsPhoneNumberTypeEnum {

}

export interface Goal {
  readonly resource_name?: string;
  readonly goal_id?: string;
  readonly goal_type?: GoalType;
  readonly owner_customer?: string;
  readonly optimization_eligibility?: GoalOptimizationEligibility;
  readonly retention_goal_settings?: RetentionGoal;
  readonly new_customer_acquisition_goal_settings?: NewCustomerAcquisitionGoal;
  readonly loyalty_retention_goal_settings?: LoyaltyRetentionGoal;
}

export type GoalConfigLevel = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER" | "CAMPAIGN";

export interface GoalConfigLevelEnum {

}

export type GoalError = "UNSPECIFIED" | "UNKNOWN" | "RETENTION_GOAL_ALREADY_EXISTS" | "HIGH_LIFETIME_VALUE_PRESENT_BUT_VALUE_ABSENT" | "HIGH_LIFETIME_VALUE_LESS_THAN_OR_EQUAL_TO_VALUE" | "CUSTOMER_LIFECYCLE_OPTIMIZATION_ACCOUNT_TYPE_NOT_ALLOWED" | "NEW_CUSTOMER_ACQUISITION_GOAL_ALREADY_EXISTS" | "LOYALTY_RETENTION_GOAL_ALREADY_EXISTS";

export interface GoalErrorEnum {

}

export interface GoalOperation {
  readonly update_mask?: string;
  readonly create?: Goal;
  readonly update?: Goal;
}

export type GoalOptimizationEligibility = "UNSPECIFIED" | "UNKNOWN" | "ELIGIBLE" | "INELIGIBLE";

export interface GoalOptimizationEligibilityEnum {

}

export interface GoalSetting {

}

export type GoalType = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_RETENTION" | "NEW_CUSTOMER_ACQUISITION" | "LOYALTY_RETENTION";

export interface GoalTypeEnum {

}

export interface GoogleAdsError {
  readonly error_code?: ErrorCode;
  readonly message?: string;
  readonly trigger?: Value;
  readonly location?: ErrorLocation;
  readonly details?: ErrorDetails;
}

export interface GoogleAdsFailure {
  readonly errors?: ReadonlyArray<GoogleAdsError>;
  readonly request_id?: string;
}

export interface GoogleAdsField {
  readonly resource_name?: string;
  readonly name?: string;
  readonly category?: GoogleAdsFieldCategory;
  readonly selectable?: boolean;
  readonly filterable?: boolean;
  readonly sortable?: boolean;
  readonly selectable_with?: ReadonlyArray<string>;
  readonly attribute_resources?: ReadonlyArray<string>;
  readonly metrics?: ReadonlyArray<string>;
  readonly segments?: ReadonlyArray<string>;
  readonly enum_values?: ReadonlyArray<string>;
  readonly data_type?: GoogleAdsFieldDataType;
  readonly type_url?: string;
  readonly is_repeated?: boolean;
}

export type GoogleAdsFieldCategory = "UNSPECIFIED" | "UNKNOWN" | "RESOURCE" | "ATTRIBUTE" | "SEGMENT" | "METRIC";

export interface GoogleAdsFieldCategoryEnum {

}

export type GoogleAdsFieldDataType = "UNSPECIFIED" | "UNKNOWN" | "BOOLEAN" | "DATE" | "DOUBLE" | "ENUM" | "FLOAT" | "INT32" | "INT64" | "MESSAGE" | "RESOURCE_NAME" | "STRING" | "UINT64";

export interface GoogleAdsFieldDataTypeEnum {

}

export interface GoogleAdsIdentifier {
  readonly customer?: string;
}

export interface GoogleAdsRow {
  readonly account_budget?: AccountBudget;
  readonly account_budget_proposal?: AccountBudgetProposal;
  readonly account_link?: AccountLink;
  readonly ad?: Ad;
  readonly ad_group?: AdGroup;
  readonly ad_group_ad?: AdGroupAd;
  readonly ad_group_ad_asset_combination_view?: AdGroupAdAssetCombinationView;
  readonly app_top_combination_view?: AppTopCombinationView;
  readonly ad_group_ad_asset_view?: AdGroupAdAssetView;
  readonly ad_group_ad_label?: AdGroupAdLabel;
  readonly ad_group_asset?: AdGroupAsset;
  readonly ad_group_asset_set?: AdGroupAssetSet;
  readonly ad_group_audience_view?: AdGroupAudienceView;
  readonly ad_group_bid_modifier?: AdGroupBidModifier;
  readonly ad_group_criterion?: AdGroupCriterion;
  readonly ad_group_criterion_customizer?: AdGroupCriterionCustomizer;
  readonly ad_group_criterion_label?: AdGroupCriterionLabel;
  readonly ad_group_criterion_simulation?: AdGroupCriterionSimulation;
  readonly ad_group_customizer?: AdGroupCustomizer;
  readonly ad_group_label?: AdGroupLabel;
  readonly ad_group_simulation?: AdGroupSimulation;
  readonly ad_parameter?: AdParameter;
  readonly age_range_view?: AgeRangeView;
  readonly ad_schedule_view?: AdScheduleView;
  readonly ai_max_search_term_ad_combination_view?: AiMaxSearchTermAdCombinationView;
  readonly domain_category?: DomainCategory;
  readonly asset?: Asset;
  readonly asset_field_type_view?: AssetFieldTypeView;
  readonly channel_aggregate_asset_view?: ChannelAggregateAssetView;
  readonly campaign_aggregate_asset_view?: CampaignAggregateAssetView;
  readonly asset_group_asset?: AssetGroupAsset;
  readonly asset_group_signal?: AssetGroupSignal;
  readonly asset_group_listing_group_filter?: AssetGroupListingGroupFilter;
  readonly asset_group_product_group_view?: AssetGroupProductGroupView;
  readonly asset_group_top_combination_view?: AssetGroupTopCombinationView;
  readonly asset_group?: AssetGroup;
  readonly asset_set_asset?: AssetSetAsset;
  readonly asset_set?: AssetSet;
  readonly asset_set_type_view?: AssetSetTypeView;
  readonly batch_job?: BatchJob;
  readonly bidding_data_exclusion?: BiddingDataExclusion;
  readonly bidding_seasonality_adjustment?: BiddingSeasonalityAdjustment;
  readonly bidding_strategy?: BiddingStrategy;
  readonly bidding_strategy_simulation?: BiddingStrategySimulation;
  readonly billing_setup?: BillingSetup;
  readonly call_view?: CallView;
  readonly campaign_budget?: CampaignBudget;
  readonly campaign?: Campaign;
  readonly campaign_asset?: CampaignAsset;
  readonly campaign_asset_set?: CampaignAssetSet;
  readonly campaign_audience_view?: CampaignAudienceView;
  readonly campaign_bid_modifier?: CampaignBidModifier;
  readonly campaign_conversion_goal?: CampaignConversionGoal;
  readonly campaign_criterion?: CampaignCriterion;
  readonly campaign_customizer?: CampaignCustomizer;
  readonly campaign_draft?: CampaignDraft;
  readonly campaign_group?: CampaignGroup;
  readonly campaign_goal_config?: CampaignGoalConfig;
  readonly campaign_label?: CampaignLabel;
  readonly campaign_search_term_insight?: CampaignSearchTermInsight;
  readonly campaign_search_term_view?: CampaignSearchTermView;
  readonly campaign_shared_set?: CampaignSharedSet;
  readonly campaign_simulation?: CampaignSimulation;
  readonly carrier_constant?: CarrierConstant;
  readonly cart_data_sales_view?: CartDataSalesView;
  readonly change_event?: ChangeEvent;
  readonly change_status?: ChangeStatus;
  readonly combined_audience?: CombinedAudience;
  readonly audience?: Audience;
  readonly conversion_action?: ConversionAction;
  readonly conversion_custom_variable?: ConversionCustomVariable;
  readonly conversion_goal_campaign_config?: ConversionGoalCampaignConfig;
  readonly conversion_value_rule?: ConversionValueRule;
  readonly conversion_value_rule_set?: ConversionValueRuleSet;
  readonly click_view?: ClickView;
  readonly currency_constant?: CurrencyConstant;
  readonly custom_audience?: CustomAudience;
  readonly custom_conversion_goal?: CustomConversionGoal;
  readonly custom_interest?: CustomInterest;
  readonly customer?: Customer;
  readonly customer_asset?: CustomerAsset;
  readonly customer_asset_set?: CustomerAssetSet;
  readonly accessible_bidding_strategy?: AccessibleBiddingStrategy;
  readonly customer_customizer?: CustomerCustomizer;
  readonly customer_manager_link?: CustomerManagerLink;
  readonly customer_client_link?: CustomerClientLink;
  readonly customer_client?: CustomerClient;
  readonly customer_conversion_goal?: CustomerConversionGoal;
  readonly customer_label?: CustomerLabel;
  readonly customer_negative_criterion?: CustomerNegativeCriterion;
  readonly customer_search_term_insight?: CustomerSearchTermInsight;
  readonly customer_user_access?: CustomerUserAccess;
  readonly customer_user_access_invitation?: CustomerUserAccessInvitation;
  readonly customizer_attribute?: CustomizerAttribute;
  readonly data_link?: DataLink;
  readonly detail_content_suitability_placement_view?: DetailContentSuitabilityPlacementView;
  readonly detail_placement_view?: DetailPlacementView;
  readonly detailed_demographic?: DetailedDemographic;
  readonly display_keyword_view?: DisplayKeywordView;
  readonly distance_view?: DistanceView;
  readonly dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
  readonly expanded_landing_page_view?: ExpandedLandingPageView;
  readonly final_url_expansion_asset_view?: FinalUrlExpansionAssetView;
  readonly gender_view?: GenderView;
  readonly geo_target_constant?: GeoTargetConstant;
  readonly geographic_view?: GeographicView;
  readonly goal?: Goal;
  readonly group_content_suitability_placement_view?: GroupContentSuitabilityPlacementView;
  readonly group_placement_view?: GroupPlacementView;
  readonly hotel_group_view?: HotelGroupView;
  readonly hotel_performance_view?: HotelPerformanceView;
  readonly hotel_reconciliation?: HotelReconciliation;
  readonly income_range_view?: IncomeRangeView;
  readonly keyword_view?: KeywordView;
  readonly keyword_plan?: KeywordPlan;
  readonly keyword_plan_campaign?: KeywordPlanCampaign;
  readonly keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
  readonly keyword_plan_ad_group?: KeywordPlanAdGroup;
  readonly keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
  readonly keyword_theme_constant?: KeywordThemeConstant;
  readonly label?: Label;
  readonly landing_page_view?: LandingPageView;
  readonly language_constant?: LanguageConstant;
  readonly location_view?: LocationView;
  readonly location_interest_view?: LocationInterestView;
  readonly managed_placement_view?: ManagedPlacementView;
  readonly matched_location_interest_view?: MatchedLocationInterestView;
  readonly content_criterion_view?: ContentCriterionView;
  readonly media_file?: MediaFile;
  readonly local_services_employee?: LocalServicesEmployee;
  readonly local_services_verification_artifact?: LocalServicesVerificationArtifact;
  readonly mobile_app_category_constant?: MobileAppCategoryConstant;
  readonly mobile_device_constant?: MobileDeviceConstant;
  readonly multi_party_auth_review?: MultiPartyAuthReview;
  readonly offline_conversion_upload_client_summary?: OfflineConversionUploadClientSummary;
  readonly offline_conversion_upload_conversion_action_summary?: OfflineConversionUploadConversionActionSummary;
  readonly offline_user_data_job?: OfflineUserDataJob;
  readonly operating_system_version_constant?: OperatingSystemVersionConstant;
  readonly paid_organic_search_term_view?: PaidOrganicSearchTermView;
  readonly qualifying_question?: QualifyingQuestion;
  readonly parental_status_view?: ParentalStatusView;
  readonly per_store_view?: PerStoreView;
  readonly performance_max_placement_view?: PerformanceMaxPlacementView;
  readonly product_category_constant?: ProductCategoryConstant;
  readonly product_group_view?: ProductGroupView;
  readonly product_link?: ProductLink;
  readonly product_link_invitation?: ProductLinkInvitation;
  readonly recommendation?: Recommendation;
  readonly recommendation_subscription?: RecommendationSubscription;
  readonly search_term_view?: SearchTermView;
  readonly shared_criterion?: SharedCriterion;
  readonly shared_set?: SharedSet;
  readonly smart_campaign_setting?: SmartCampaignSetting;
  readonly shopping_performance_view?: ShoppingPerformanceView;
  readonly shopping_product?: ShoppingProduct;
  readonly smart_campaign_search_term_view?: SmartCampaignSearchTermView;
  readonly targeting_expansion_view?: TargetingExpansionView;
  readonly third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
  readonly topic_view?: TopicView;
  readonly travel_activity_group_view?: TravelActivityGroupView;
  readonly travel_activity_performance_view?: TravelActivityPerformanceView;
  readonly experiment?: Experiment;
  readonly experiment_arm?: ExperimentArm;
  readonly user_interest?: UserInterest;
  readonly life_event?: LifeEvent;
  readonly user_list?: UserList;
  readonly user_list_customer_type?: UserListCustomerType;
  readonly user_location_view?: UserLocationView;
  readonly remarketing_action?: RemarketingAction;
  readonly topic_constant?: TopicConstant;
  readonly video?: Video;
  readonly video_enhancement?: VideoEnhancement;
  readonly webpage_view?: WebpageView;
  readonly lead_form_submission_data?: LeadFormSubmissionData;
  readonly local_services_lead?: LocalServicesLead;
  readonly local_services_lead_conversation?: LocalServicesLeadConversation;
  readonly android_privacy_shared_key_google_ad_group?: AndroidPrivacySharedKeyGoogleAdGroup;
  readonly android_privacy_shared_key_google_campaign?: AndroidPrivacySharedKeyGoogleCampaign;
  readonly android_privacy_shared_key_google_network_type?: AndroidPrivacySharedKeyGoogleNetworkType;
  readonly you_tube_video_upload?: YouTubeVideoUpload;
  readonly applied_incentive?: AppliedIncentive;
  readonly metrics?: Metrics;
  readonly segments?: Segments;
}

export interface GoogleAnalytics4Settings {
  readonly event_name?: string;
  readonly property_name?: string;
  readonly property_id?: string;
}

export interface GoogleLocalServicesInfo {
  readonly category_id?: string;
  readonly callouts?: ReadonlyArray<LocalServicesCallout>;
}

export type GoogleVoiceCallStatus = "UNSPECIFIED" | "UNKNOWN" | "MISSED" | "RECEIVED";

export interface GoogleVoiceCallStatusEnum {

}

export interface GraduateExperimentRequest {
  readonly experiment?: string;
  readonly campaign_budget_mappings?: ReadonlyArray<CampaignBudgetMapping>;
  readonly validate_only?: boolean;
}

export interface GranularInsuranceStatus {
  readonly geo_criterion_id?: string;
  readonly category_id?: string;
  readonly verification_status?: LocalServicesVerificationStatus;
}

export interface GranularLicenseStatus {
  readonly geo_criterion_id?: string;
  readonly category_id?: string;
  readonly verification_status?: LocalServicesVerificationStatus;
}

export interface GroupContentSuitabilityPlacementView {
  readonly resource_name?: string;
  readonly display_name?: string;
  readonly placement?: string;
  readonly placement_type?: PlacementType;
  readonly target_url?: string;
}

export interface GroupPlacementView {
  readonly resource_name?: string;
  readonly placement?: string;
  readonly display_name?: string;
  readonly target_url?: string;
  readonly placement_type?: PlacementType;
}

export type HeaderError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_LOGIN_CUSTOMER_ID" | "INVALID_LINKED_CUSTOMER_ID";

export interface HeaderErrorEnum {

}

export interface HistoricalMetricsOptions {
  readonly year_month_range?: YearMonthRange;
  readonly include_average_cpc?: boolean;
}

export interface HotelAdInfo {

}

export interface HotelAdvanceBookingWindowInfo {
  readonly min_days?: string;
  readonly max_days?: string;
}

export interface HotelAssetSuggestion {
  readonly place_id?: string;
  readonly final_url?: string;
  readonly hotel_name?: string;
  readonly call_to_action?: CallToActionType;
  readonly text_assets?: ReadonlyArray<HotelTextAsset>;
  readonly image_assets?: ReadonlyArray<HotelImageAsset>;
  readonly status?: HotelAssetSuggestionStatus;
}

export type HotelAssetSuggestionStatus = "UNSPECIFIED" | "UNKNOWN" | "SUCCESS" | "HOTEL_NOT_FOUND" | "INVALID_PLACE_ID";

export interface HotelAssetSuggestionStatusEnum {

}

export interface HotelCalloutAsset {
  readonly text?: string;
  readonly language_code?: string;
}

export interface HotelCenterLinkInvitationIdentifier {
  readonly hotel_center_id?: string;
}

export interface HotelCheckInDateRangeInfo {
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface HotelCheckInDayInfo {
  readonly day_of_week?: DayOfWeek;
}

export interface HotelCityInfo {
  readonly city_criterion?: string;
}

export interface HotelClassInfo {
  readonly value?: string;
}

export interface HotelCountryRegionInfo {
  readonly country_region_criterion?: string;
}

export type HotelDateSelectionType = "UNSPECIFIED" | "UNKNOWN" | "DEFAULT_SELECTION" | "USER_SELECTED";

export interface HotelDateSelectionTypeEnum {

}

export interface HotelDateSelectionTypeInfo {
  readonly type?: HotelDateSelectionType;
}

export interface HotelGroupView {
  readonly resource_name?: string;
}

export interface HotelIdInfo {
  readonly value?: string;
}

export interface HotelImageAsset {
  readonly uri?: string;
  readonly asset_field_type?: AssetFieldType;
}

export interface HotelLengthOfStayInfo {
  readonly min_nights?: string;
  readonly max_nights?: string;
}

export interface HotelPerformanceView {
  readonly resource_name?: string;
}

export type HotelPriceBucket = "UNSPECIFIED" | "UNKNOWN" | "LOWEST_UNIQUE" | "LOWEST_TIED" | "NOT_LOWEST" | "ONLY_PARTNER_SHOWN";

export interface HotelPriceBucketEnum {

}

export interface HotelPropertyAsset {
  readonly place_id?: string;
  readonly hotel_address?: string;
  readonly hotel_name?: string;
}

export interface HotelPropertyData {
  readonly hotel_center_id?: string;
  readonly partner_name?: string;
}

export type HotelRateType = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "PUBLIC_RATE" | "QUALIFIED_RATE" | "PRIVATE_RATE";

export interface HotelRateTypeEnum {

}

export interface HotelReconciliation {
  readonly resource_name?: string;
  readonly commission_id?: string;
  readonly order_id?: string;
  readonly campaign?: string;
  readonly hotel_center_id?: string;
  readonly hotel_id?: string;
  readonly check_in_date?: string;
  readonly check_out_date?: string;
  readonly reconciled_value_micros?: string;
  readonly billed?: boolean;
  readonly status?: HotelReconciliationStatus;
}

export type HotelReconciliationStatus = "UNSPECIFIED" | "UNKNOWN" | "RESERVATION_ENABLED" | "RECONCILIATION_NEEDED" | "RECONCILED" | "CANCELED";

export interface HotelReconciliationStatusEnum {

}

export interface HotelSettingInfo {
  readonly hotel_center_id?: string;
  readonly disable_hotel_setting?: boolean;
}

export interface HotelStateInfo {
  readonly state_criterion?: string;
}

export interface HotelTextAsset {
  readonly text?: string;
  readonly asset_field_type?: AssetFieldType;
}

export interface HouseholdIncomeDimension {
  readonly income_ranges?: ReadonlyArray<IncomeRangeType>;
  readonly include_undetermined?: boolean;
}

export interface IdentityVerification {
  readonly verification_program?: IdentityVerificationProgram;
  readonly identity_verification_requirement?: IdentityVerificationRequirement;
  readonly verification_progress?: IdentityVerificationProgress;
}

export type IdentityVerificationError = "UNSPECIFIED" | "UNKNOWN" | "NO_EFFECTIVE_BILLING" | "BILLING_NOT_ON_MONTHLY_INVOICING" | "VERIFICATION_ALREADY_STARTED";

export interface IdentityVerificationErrorEnum {

}

export type IdentityVerificationProgram = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER_IDENTITY_VERIFICATION";

export interface IdentityVerificationProgramEnum {

}

export type IdentityVerificationProgramStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING_USER_ACTION" | "PENDING_REVIEW" | "SUCCESS" | "FAILURE";

export interface IdentityVerificationProgramStatusEnum {

}

export interface IdentityVerificationProgress {
  readonly program_status?: IdentityVerificationProgramStatus;
  readonly invitation_link_expiration_time?: string;
  readonly action_url?: string;
}

export interface IdentityVerificationRequirement {
  readonly verification_start_deadline_time?: string;
  readonly verification_completion_deadline_time?: string;
}

export type IdError = "UNSPECIFIED" | "UNKNOWN" | "NOT_FOUND";

export interface IdErrorEnum {

}

export interface ImageAdInfo {
  readonly pixel_width?: string;
  readonly pixel_height?: string;
  readonly image_url?: string;
  readonly preview_pixel_width?: string;
  readonly preview_pixel_height?: string;
  readonly preview_image_url?: string;
  readonly mime_type?: MimeType;
  readonly name?: string;
  readonly image_asset?: AdImageAsset;
  readonly data?: string;
  readonly ad_id_to_copy_image_from?: string;
}

export interface ImageAsset {
  readonly data?: string;
  readonly file_size?: string;
  readonly mime_type?: MimeType;
  readonly full_size?: ImageDimension;
}

export interface ImageDimension {
  readonly height_pixels?: string;
  readonly width_pixels?: string;
  readonly url?: string;
}

export type ImageError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_IMAGE" | "STORAGE_ERROR" | "BAD_REQUEST" | "UNEXPECTED_SIZE" | "ANIMATED_NOT_ALLOWED" | "ANIMATION_TOO_LONG" | "SERVER_ERROR" | "CMYK_JPEG_NOT_ALLOWED" | "FLASH_NOT_ALLOWED" | "FLASH_WITHOUT_CLICKTAG" | "FLASH_ERROR_AFTER_FIXING_CLICK_TAG" | "ANIMATED_VISUAL_EFFECT" | "FLASH_ERROR" | "LAYOUT_PROBLEM" | "PROBLEM_READING_IMAGE_FILE" | "ERROR_STORING_IMAGE" | "ASPECT_RATIO_NOT_ALLOWED" | "FLASH_HAS_NETWORK_OBJECTS" | "FLASH_HAS_NETWORK_METHODS" | "FLASH_HAS_URL" | "FLASH_HAS_MOUSE_TRACKING" | "FLASH_HAS_RANDOM_NUM" | "FLASH_SELF_TARGETS" | "FLASH_BAD_GETURL_TARGET" | "FLASH_VERSION_NOT_SUPPORTED" | "FLASH_WITHOUT_HARD_CODED_CLICK_URL" | "INVALID_FLASH_FILE" | "FAILED_TO_FIX_CLICK_TAG_IN_FLASH" | "FLASH_ACCESSES_NETWORK_RESOURCES" | "FLASH_EXTERNAL_JS_CALL" | "FLASH_EXTERNAL_FS_CALL" | "FILE_TOO_LARGE" | "IMAGE_DATA_TOO_LARGE" | "IMAGE_PROCESSING_ERROR" | "IMAGE_TOO_SMALL" | "INVALID_INPUT" | "PROBLEM_READING_FILE" | "IMAGE_CONSTRAINTS_VIOLATED" | "FORMAT_NOT_ALLOWED";

export interface ImageErrorEnum {

}

export interface ImproveDemandGenAdStrengthRecommendation {
  readonly ad?: string;
  readonly ad_strength?: AdStrength;
  readonly demand_gen_asset_action_items?: ReadonlyArray<string>;
}

export interface ImproveGoogleTagCoverageRecommendation {

}

export interface ImprovePerformanceMaxAdStrengthRecommendation {
  readonly asset_group?: string;
  readonly ad_strength?: AdStrength;
}

export interface Incentive {
  readonly incentive_id?: string;
  readonly requirement?: Requirement;
  readonly incentive_terms_and_conditions_url?: string;
  readonly incentive_type?: IncentiveType;
}

export type IncentiveError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_INCENTIVE_ID" | "MAX_INCENTIVES_REDEEMED" | "ACCOUNT_TOO_OLD" | "BILLING_COUNTRY_NOT_ELIGIBLE" | "USER_IS_MCC_MANAGER" | "USER_SUSPENDED" | "MAX_PENDING_INCENTIVES" | "ACCOUNT_HAD_RECENT_SPEND" | "MAX_INCENTIVES_REDEEMED_FROM_OFFER" | "MISMATCHING_BILLING_COUNTRY_CODE";

export interface IncentiveErrorEnum {

}

export interface IncentiveOffer {
  readonly consolidated_terms_and_conditions_url?: string;
  readonly offer_type?: OfferType;
  readonly cyo_incentives?: CyoIncentives;
}

export interface IncentiveOfferTypeEnum {

}

export type IncentiveState = "UNSPECIFIED" | "UNKNOWN" | "REDEEMED" | "FULFILLED" | "REWARD_GRANTED" | "EXPIRED" | "REWARD_EXPIRED" | "INVALIDATED" | "REWARD_EXHAUSTED";

export interface IncentiveStateEnum {

}

export type IncentiveType = "UNSPECIFIED" | "UNKNOWN" | "ACQUISITION";

export interface IncentiveTypeEnum {

}

export interface IncomeRangeInfo {
  readonly type?: IncomeRangeType;
}

export type IncomeRangeType = "UNSPECIFIED" | "UNKNOWN" | "INCOME_RANGE_0_50" | "INCOME_RANGE_50_60" | "INCOME_RANGE_60_70" | "INCOME_RANGE_70_80" | "INCOME_RANGE_80_90" | "INCOME_RANGE_90_UP" | "INCOME_RANGE_UNDETERMINED";

export interface IncomeRangeTypeEnum {

}

export interface IncomeRangeView {
  readonly resource_name?: string;
}

export interface IncompatibleCloGoalsErrorDetails {
  readonly clo_goal_sub_type1?: CustomerLifecycleOptimizationGoalSubType;
  readonly clo_goal_sub_type2?: CustomerLifecycleOptimizationGoalSubType;
}

export interface IndustryVerticalInfo {
  readonly industry_vertical_name?: string;
  readonly industry_vertical_id?: string;
  readonly parent_industry_vertical_id?: string;
}

export interface InFeedVideoAdInfo {
  readonly headline?: string;
  readonly description1?: string;
  readonly description2?: string;
  readonly thumbnail?: VideoThumbnail;
}

export interface InsightsAudience {
  readonly country_locations?: ReadonlyArray<LocationInfo>;
  readonly sub_country_locations?: ReadonlyArray<LocationInfo>;
  readonly gender?: GenderInfo;
  readonly age_ranges?: ReadonlyArray<AgeRangeInfo>;
  readonly parental_status?: ParentalStatusInfo;
  readonly income_ranges?: ReadonlyArray<IncomeRangeInfo>;
  readonly lineups?: ReadonlyArray<AudienceInsightsLineup>;
  readonly user_list?: UserListInfo;
  readonly topic_audience_combinations?: ReadonlyArray<InsightsAudienceAttributeGroup>;
}

export interface InsightsAudienceAttributeGroup {
  readonly attributes?: ReadonlyArray<AudienceInsightsAttribute>;
}

export interface InsightsAudienceDefinition {
  readonly audience?: InsightsAudience;
  readonly baseline_audience?: InsightsAudience;
  readonly data_month?: string;
}

export interface InsightsAudienceDescription {
  readonly country_locations?: ReadonlyArray<LocationInfo>;
  readonly audience_description?: string;
  readonly marketing_objective?: AudienceInsightsMarketingObjective;
  readonly audience_dimensions?: AudienceInsightsDimensions;
}

export type InsightsKnowledgeGraphEntityCapabilities = "UNSPECIFIED" | "UNKNOWN" | "CONTENT_TRENDING_INSIGHTS" | "CREATOR_ATTRIBUTE" | "CREATOR_TOPIC_INSIGHTS";

export interface InsightsKnowledgeGraphEntityCapabilitiesEnum {

}

export type InsightsTrend = "UNSPECIFIED" | "UNKNOWN" | "EMERGING" | "RISING" | "SUSTAINED" | "DECLINING";

export interface InsightsTrendEnum {

}

export interface InsuranceVerificationArtifact {
  readonly amount_micros?: string;
  readonly rejection_reason?: LocalServicesInsuranceRejectionReason;
  readonly insurance_document_readonly?: LocalServicesDocumentReadOnly;
  readonly expiration_date_time?: string;
}

export type InteractionEventType = "UNSPECIFIED" | "UNKNOWN" | "CLICK" | "ENGAGEMENT" | "VIDEO_VIEW" | "NONE";

export interface InteractionEventTypeEnum {

}

export type InteractionType = "UNSPECIFIED" | "UNKNOWN" | "CALLS";

export interface InteractionTypeEnum {

}

export interface InteractionTypeInfo {
  readonly type?: InteractionType;
}

export type InternalError = "UNSPECIFIED" | "UNKNOWN" | "INTERNAL_ERROR" | "ERROR_CODE_NOT_PUBLISHED" | "TRANSIENT_ERROR" | "DEADLINE_EXCEEDED";

export interface InternalErrorEnum {

}

export interface InvalidActivitySummary {
  readonly original_month_of_service?: MonthOfYear;
  readonly original_year_of_service?: string;
  readonly original_invoice_id?: string;
  readonly original_account_budget_name?: string;
  readonly original_purchase_order_number?: string;
  readonly amount_micros?: string;
}

export interface Invoice {
  readonly resource_name?: string;
  readonly id?: string;
  readonly type?: InvoiceType;
  readonly billing_setup?: string;
  readonly payments_account_id?: string;
  readonly payments_profile_id?: string;
  readonly issue_date?: string;
  readonly due_date?: string;
  readonly service_date_range?: DateRange;
  readonly currency_code?: string;
  readonly adjustments_subtotal_amount_micros?: string;
  readonly adjustments_tax_amount_micros?: string;
  readonly adjustments_total_amount_micros?: string;
  readonly regulatory_costs_subtotal_amount_micros?: string;
  readonly regulatory_costs_tax_amount_micros?: string;
  readonly regulatory_costs_total_amount_micros?: string;
  readonly export_charge_subtotal_amount_micros?: string;
  readonly export_charge_tax_amount_micros?: string;
  readonly export_charge_total_amount_micros?: string;
  readonly subtotal_amount_micros?: string;
  readonly tax_amount_micros?: string;
  readonly total_amount_micros?: string;
  readonly corrected_invoice?: string;
  readonly replaced_invoices?: ReadonlyArray<string>;
  readonly pdf_url?: string;
  readonly account_budget_summaries?: ReadonlyArray<AccountBudgetSummary>;
  readonly account_summaries?: ReadonlyArray<AccountSummary>;
}

export type InvoiceError = "UNSPECIFIED" | "UNKNOWN" | "YEAR_MONTH_TOO_OLD" | "NOT_INVOICED_CUSTOMER" | "BILLING_SETUP_NOT_APPROVED" | "BILLING_SETUP_NOT_ON_MONTHLY_INVOICING" | "NON_SERVING_CUSTOMER";

export interface InvoiceErrorEnum {

}

export type InvoiceType = "UNSPECIFIED" | "UNKNOWN" | "CREDIT_MEMO" | "INVOICE";

export interface InvoiceTypeEnum {

}

export interface IpBlockInfo {
  readonly ip_address?: string;
}

export interface Item {
  readonly product_id?: string;
  readonly quantity?: number;
  readonly unit_price?: number;
}

export interface ItemAttribute {
  readonly item_id?: string;
  readonly merchant_id?: string;
  readonly country_code?: string;
  readonly language_code?: string;
  readonly quantity?: string;
}

export interface Keyword {
  readonly ad_group_criterion?: string;
  readonly info?: KeywordInfo;
}

export interface KeywordAndUrlSeed {
  readonly url?: string;
  readonly keywords?: ReadonlyArray<string>;
}

export interface KeywordAnnotations {
  readonly concepts?: ReadonlyArray<KeywordConcept>;
}

export interface KeywordConcept {
  readonly name?: string;
  readonly concept_group?: ConceptGroup;
}

export interface KeywordForecastMetrics {
  readonly average_cpc_micros?: string;
  readonly clicks?: number;
  readonly cost_micros?: string;
  readonly conversions?: number;
  readonly average_cpa_micros?: string;
}

export interface KeywordInfo {
  readonly text?: string;
  readonly match_type?: KeywordMatchType;
}

export type KeywordMatchType = "UNSPECIFIED" | "UNKNOWN" | "EXACT" | "PHRASE" | "BROAD";

export interface KeywordMatchTypeEnum {

}

export interface KeywordMatchTypeRecommendation {
  readonly keyword?: KeywordInfo;
  readonly recommended_match_type?: KeywordMatchType;
}

export interface KeywordParameters {
  readonly ad_group?: string;
  readonly match_type?: KeywordMatchType;
  readonly cpc_bid_micros?: string;
}

export interface KeywordPlan {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly forecast_period?: KeywordPlanForecastPeriod;
}

export interface KeywordPlanAdGroup {
  readonly resource_name?: string;
  readonly keyword_plan_campaign?: string;
  readonly id?: string;
  readonly name?: string;
  readonly cpc_bid_micros?: string;
}

export type KeywordPlanAdGroupError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_NAME" | "DUPLICATE_NAME";

export interface KeywordPlanAdGroupErrorEnum {

}

export interface KeywordPlanAdGroupKeyword {
  readonly resource_name?: string;
  readonly keyword_plan_ad_group?: string;
  readonly id?: string;
  readonly text?: string;
  readonly match_type?: KeywordMatchType;
  readonly cpc_bid_micros?: string;
  readonly negative?: boolean;
}

export type KeywordPlanAdGroupKeywordError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_KEYWORD_MATCH_TYPE" | "DUPLICATE_KEYWORD" | "KEYWORD_TEXT_TOO_LONG" | "KEYWORD_HAS_INVALID_CHARS" | "KEYWORD_HAS_TOO_MANY_WORDS" | "INVALID_KEYWORD_TEXT" | "NEGATIVE_KEYWORD_HAS_CPC_BID" | "NEW_BMM_KEYWORDS_NOT_ALLOWED";

export interface KeywordPlanAdGroupKeywordErrorEnum {

}

export interface KeywordPlanAdGroupKeywordOperation {
  readonly update_mask?: string;
  readonly create?: KeywordPlanAdGroupKeyword;
  readonly update?: KeywordPlanAdGroupKeyword;
  readonly remove?: string;
}

export interface KeywordPlanAdGroupOperation {
  readonly update_mask?: string;
  readonly create?: KeywordPlanAdGroup;
  readonly update?: KeywordPlanAdGroup;
  readonly remove?: string;
}

export interface KeywordPlanAggregateMetricResults {
  readonly device_searches?: ReadonlyArray<KeywordPlanDeviceSearches>;
}

export interface KeywordPlanAggregateMetrics {
  readonly aggregate_metric_types?: ReadonlyArray<KeywordPlanAggregateMetricType>;
}

export type KeywordPlanAggregateMetricType = "UNSPECIFIED" | "UNKNOWN" | "DEVICE";

export interface KeywordPlanAggregateMetricTypeEnum {

}

export interface KeywordPlanCampaign {
  readonly resource_name?: string;
  readonly keyword_plan?: string;
  readonly id?: string;
  readonly name?: string;
  readonly language_constants?: ReadonlyArray<string>;
  readonly keyword_plan_network?: KeywordPlanNetwork;
  readonly cpc_bid_micros?: string;
  readonly geo_targets?: ReadonlyArray<KeywordPlanGeoTarget>;
}

export type KeywordPlanCampaignError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_NAME" | "INVALID_LANGUAGES" | "INVALID_GEOS" | "DUPLICATE_NAME" | "MAX_GEOS_EXCEEDED" | "MAX_LANGUAGES_EXCEEDED";

export interface KeywordPlanCampaignErrorEnum {

}

export interface KeywordPlanCampaignKeyword {
  readonly resource_name?: string;
  readonly keyword_plan_campaign?: string;
  readonly id?: string;
  readonly text?: string;
  readonly match_type?: KeywordMatchType;
  readonly negative?: boolean;
}

export type KeywordPlanCampaignKeywordError = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_KEYWORD_IS_POSITIVE";

export interface KeywordPlanCampaignKeywordErrorEnum {

}

export interface KeywordPlanCampaignKeywordOperation {
  readonly update_mask?: string;
  readonly create?: KeywordPlanCampaignKeyword;
  readonly update?: KeywordPlanCampaignKeyword;
  readonly remove?: string;
}

export interface KeywordPlanCampaignOperation {
  readonly update_mask?: string;
  readonly create?: KeywordPlanCampaign;
  readonly update?: KeywordPlanCampaign;
  readonly remove?: string;
}

export type KeywordPlanCompetitionLevel = "UNSPECIFIED" | "UNKNOWN" | "LOW" | "MEDIUM" | "HIGH";

export interface KeywordPlanCompetitionLevelEnum {

}

export type KeywordPlanConceptGroupType = "UNSPECIFIED" | "UNKNOWN" | "BRAND" | "OTHER_BRANDS" | "NON_BRAND";

export interface KeywordPlanConceptGroupTypeEnum {

}

export interface KeywordPlanDeviceSearches {
  readonly device?: Device;
  readonly search_count?: string;
}

export type KeywordPlanError = "UNSPECIFIED" | "UNKNOWN" | "BID_MULTIPLIER_OUT_OF_RANGE" | "BID_TOO_HIGH" | "BID_TOO_LOW" | "BID_TOO_MANY_FRACTIONAL_DIGITS" | "DAILY_BUDGET_TOO_LOW" | "DAILY_BUDGET_TOO_MANY_FRACTIONAL_DIGITS" | "INVALID_VALUE" | "KEYWORD_PLAN_HAS_NO_KEYWORDS" | "KEYWORD_PLAN_NOT_ENABLED" | "KEYWORD_PLAN_NOT_FOUND" | "MISSING_BID" | "MISSING_FORECAST_PERIOD" | "INVALID_FORECAST_DATE_RANGE" | "INVALID_NAME";

export interface KeywordPlanErrorEnum {

}

export type KeywordPlanForecastInterval = "UNSPECIFIED" | "UNKNOWN" | "NEXT_WEEK" | "NEXT_MONTH" | "NEXT_QUARTER";

export interface KeywordPlanForecastIntervalEnum {

}

export interface KeywordPlanForecastPeriod {
  readonly date_interval?: KeywordPlanForecastInterval;
  readonly date_range?: DateRange;
}

export interface KeywordPlanGeoTarget {
  readonly geo_target_constant?: string;
}

export interface KeywordPlanHistoricalMetrics {
  readonly avg_monthly_searches?: string;
  readonly monthly_search_volumes?: ReadonlyArray<MonthlySearchVolume>;
  readonly competition?: KeywordPlanCompetitionLevel;
  readonly competition_index?: string;
  readonly low_top_of_page_bid_micros?: string;
  readonly high_top_of_page_bid_micros?: string;
  readonly average_cpc_micros?: string;
}

export type KeywordPlanIdeaError = "UNSPECIFIED" | "UNKNOWN" | "URL_CRAWL_ERROR" | "INVALID_VALUE";

export interface KeywordPlanIdeaErrorEnum {

}

export type KeywordPlanKeywordAnnotation = "UNSPECIFIED" | "UNKNOWN" | "KEYWORD_CONCEPT";

export interface KeywordPlanKeywordAnnotationEnum {

}

export type KeywordPlanNetwork = "UNSPECIFIED" | "UNKNOWN" | "GOOGLE_SEARCH" | "GOOGLE_SEARCH_AND_PARTNERS";

export interface KeywordPlanNetworkEnum {

}

export interface KeywordPlanOperation {
  readonly update_mask?: string;
  readonly create?: KeywordPlan;
  readonly update?: KeywordPlan;
  readonly remove?: string;
}

export interface KeywordRecommendation {
  readonly keyword?: KeywordInfo;
  readonly search_terms?: ReadonlyArray<SearchTerm>;
  readonly recommended_cpc_bid_micros?: string;
}

export interface KeywordSeed {
  readonly keywords?: ReadonlyArray<string>;
}

export interface KeywordTheme {
  readonly keyword_theme_constant?: KeywordThemeConstant;
  readonly free_form_keyword_theme?: string;
}

export interface KeywordThemeConstant {
  readonly resource_name?: string;
  readonly country_code?: string;
  readonly language_code?: string;
  readonly display_name?: string;
}

export interface KeywordThemeInfo {
  readonly keyword_theme_constant?: string;
  readonly free_form_keyword_theme?: string;
}

export interface KeywordView {
  readonly resource_name?: string;
}

export interface KnowledgeGraphAttributeMetadata {
  readonly entity_capabilities?: ReadonlyArray<InsightsKnowledgeGraphEntityCapabilities>;
  readonly related_categories?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
}

export interface KnowledgeGraphEntitySearchOptions {
  readonly get_all_creator_attributes?: boolean;
  readonly search_filter?: SearchFilter;
}

export interface Label {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly status?: LabelStatus;
  readonly text_label?: TextLabel;
}

export type LabelError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_APPLY_INACTIVE_LABEL" | "CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION" | "CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION" | "EXCEEDED_LABEL_LIMIT_PER_TYPE" | "INVALID_RESOURCE_FOR_MANAGER_LABEL" | "DUPLICATE_NAME" | "INVALID_LABEL_NAME" | "CANNOT_ATTACH_LABEL_TO_DRAFT" | "CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER";

export interface LabelErrorEnum {

}

export interface LabelOperation {
  readonly update_mask?: string;
  readonly create?: Label;
  readonly update?: Label;
  readonly remove?: string;
}

export type LabelStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface LabelStatusEnum {

}

export type LandingPageSource = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER" | "AUTOMATIC";

export interface LandingPageSourceEnum {

}

export interface LandingPageView {
  readonly resource_name?: string;
  readonly unexpanded_final_url?: string;
}

export type LanguageCodeError = "UNSPECIFIED" | "UNKNOWN" | "LANGUAGE_CODE_NOT_FOUND" | "INVALID_LANGUAGE_CODE";

export interface LanguageCodeErrorEnum {

}

export interface LanguageConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly code?: string;
  readonly name?: string;
  readonly targetable?: boolean;
}

export interface LanguageDistribution {
  readonly language_code?: string;
  readonly proportion?: number;
}

export interface LanguageInfo {
  readonly language_constant?: string;
}

export interface LeadFormAsset {
  readonly business_name?: string;
  readonly call_to_action_type?: LeadFormCallToActionType;
  readonly call_to_action_description?: string;
  readonly headline?: string;
  readonly description?: string;
  readonly privacy_policy_url?: string;
  readonly post_submit_headline?: string;
  readonly post_submit_description?: string;
  readonly fields?: ReadonlyArray<LeadFormField>;
  readonly custom_question_fields?: ReadonlyArray<LeadFormCustomQuestionField>;
  readonly delivery_methods?: ReadonlyArray<LeadFormDeliveryMethod>;
  readonly post_submit_call_to_action_type?: LeadFormPostSubmitCallToActionType;
  readonly background_image_asset?: string;
  readonly desired_intent?: LeadFormDesiredIntent;
  readonly custom_disclosure?: string;
}

export interface LeadFormAssetParameters {
  readonly ad_asset_apply_parameters?: AdAssetApplyParameters;
  readonly set_submit_lead_form_asset_campaign_goal?: boolean;
}

export interface LeadFormAssetRecommendation {

}

export type LeadFormCallToActionType = "UNSPECIFIED" | "UNKNOWN" | "LEARN_MORE" | "GET_QUOTE" | "APPLY_NOW" | "SIGN_UP" | "CONTACT_US" | "SUBSCRIBE" | "DOWNLOAD" | "BOOK_NOW" | "GET_OFFER" | "REGISTER" | "GET_INFO" | "REQUEST_DEMO" | "JOIN_NOW" | "GET_STARTED";

export interface LeadFormCallToActionTypeEnum {

}

export interface LeadFormCustomQuestionField {
  readonly custom_question_text?: string;
  readonly single_choice_answers?: LeadFormSingleChoiceAnswers;
  readonly has_location_answer?: boolean;
}

export interface LeadFormDeliveryMethod {
  readonly webhook?: WebhookDelivery;
}

export type LeadFormDesiredIntent = "UNSPECIFIED" | "UNKNOWN" | "LOW_INTENT" | "HIGH_INTENT";

export interface LeadFormDesiredIntentEnum {

}

export interface LeadFormField {
  readonly input_type?: LeadFormFieldUserInputType;
  readonly single_choice_answers?: LeadFormSingleChoiceAnswers;
  readonly has_location_answer?: boolean;
}

export type LeadFormFieldUserInputType = "UNSPECIFIED" | "UNKNOWN" | "FULL_NAME" | "EMAIL" | "PHONE_NUMBER" | "POSTAL_CODE" | "STREET_ADDRESS" | "CITY" | "REGION" | "COUNTRY" | "WORK_EMAIL" | "COMPANY_NAME" | "WORK_PHONE" | "JOB_TITLE" | "GOVERNMENT_ISSUED_ID_CPF_BR" | "GOVERNMENT_ISSUED_ID_DNI_AR" | "GOVERNMENT_ISSUED_ID_DNI_PE" | "GOVERNMENT_ISSUED_ID_RUT_CL" | "GOVERNMENT_ISSUED_ID_CC_CO" | "GOVERNMENT_ISSUED_ID_CI_EC" | "GOVERNMENT_ISSUED_ID_RFC_MX" | "FIRST_NAME" | "LAST_NAME" | "VEHICLE_MODEL" | "VEHICLE_TYPE" | "PREFERRED_DEALERSHIP" | "VEHICLE_PURCHASE_TIMELINE" | "VEHICLE_OWNERSHIP" | "VEHICLE_PAYMENT_TYPE" | "VEHICLE_CONDITION" | "COMPANY_SIZE" | "ANNUAL_SALES" | "YEARS_IN_BUSINESS" | "JOB_DEPARTMENT" | "JOB_ROLE" | "OVER_18_AGE" | "OVER_19_AGE" | "OVER_20_AGE" | "OVER_21_AGE" | "OVER_22_AGE" | "OVER_23_AGE" | "OVER_24_AGE" | "OVER_25_AGE" | "OVER_26_AGE" | "OVER_27_AGE" | "OVER_28_AGE" | "OVER_29_AGE" | "OVER_30_AGE" | "OVER_31_AGE" | "OVER_32_AGE" | "OVER_33_AGE" | "OVER_34_AGE" | "OVER_35_AGE" | "OVER_36_AGE" | "OVER_37_AGE" | "OVER_38_AGE" | "OVER_39_AGE" | "OVER_40_AGE" | "OVER_41_AGE" | "OVER_42_AGE" | "OVER_43_AGE" | "OVER_44_AGE" | "OVER_45_AGE" | "OVER_46_AGE" | "OVER_47_AGE" | "OVER_48_AGE" | "OVER_49_AGE" | "OVER_50_AGE" | "OVER_51_AGE" | "OVER_52_AGE" | "OVER_53_AGE" | "OVER_54_AGE" | "OVER_55_AGE" | "OVER_56_AGE" | "OVER_57_AGE" | "OVER_58_AGE" | "OVER_59_AGE" | "OVER_60_AGE" | "OVER_61_AGE" | "OVER_62_AGE" | "OVER_63_AGE" | "OVER_64_AGE" | "OVER_65_AGE" | "EDUCATION_PROGRAM" | "EDUCATION_COURSE" | "PRODUCT" | "SERVICE" | "OFFER" | "CATEGORY" | "PREFERRED_CONTACT_METHOD" | "PREFERRED_LOCATION" | "PREFERRED_CONTACT_TIME" | "PURCHASE_TIMELINE" | "YEARS_OF_EXPERIENCE" | "JOB_INDUSTRY" | "LEVEL_OF_EDUCATION" | "PROPERTY_TYPE" | "REALTOR_HELP_GOAL" | "PROPERTY_COMMUNITY" | "PRICE_RANGE" | "NUMBER_OF_BEDROOMS" | "FURNISHED_PROPERTY" | "PETS_ALLOWED_PROPERTY" | "NEXT_PLANNED_PURCHASE" | "EVENT_SIGNUP_INTEREST" | "PREFERRED_SHOPPING_PLACES" | "FAVORITE_BRAND" | "TRANSPORTATION_COMMERCIAL_LICENSE_TYPE" | "EVENT_BOOKING_INTEREST" | "DESTINATION_COUNTRY" | "DESTINATION_CITY" | "DEPARTURE_COUNTRY" | "DEPARTURE_CITY" | "DEPARTURE_DATE" | "RETURN_DATE" | "NUMBER_OF_TRAVELERS" | "TRAVEL_BUDGET" | "TRAVEL_ACCOMMODATION";

export interface LeadFormFieldUserInputTypeEnum {

}

export type LeadFormPostSubmitCallToActionType = "UNSPECIFIED" | "UNKNOWN" | "VISIT_SITE" | "DOWNLOAD" | "LEARN_MORE" | "SHOP_NOW";

export interface LeadFormPostSubmitCallToActionTypeEnum {

}

export interface LeadFormSingleChoiceAnswers {
  readonly answers?: ReadonlyArray<string>;
}

export interface LeadFormSubmissionData {
  readonly resource_name?: string;
  readonly id?: string;
  readonly asset?: string;
  readonly campaign?: string;
  readonly lead_form_submission_fields?: ReadonlyArray<LeadFormSubmissionField>;
  readonly custom_lead_form_submission_fields?: ReadonlyArray<CustomLeadFormSubmissionField>;
  readonly ad_group?: string;
  readonly ad_group_ad?: string;
  readonly gclid?: string;
  readonly submission_date_time?: string;
}

export interface LeadFormSubmissionField {
  readonly field_type?: LeadFormFieldUserInputType;
  readonly field_value?: string;
}

export type LeadStatus = "UNSPECIFIED" | "UNKNOWN" | "NEW" | "ACTIVE" | "BOOKED" | "DECLINED" | "EXPIRED" | "DISABLED" | "CONSUMER_DECLINED" | "WIPED_OUT";

export type LeadType = "UNSPECIFIED" | "UNKNOWN" | "MESSAGE" | "PHONE_CALL" | "BOOKING";

export type LegacyAppInstallAdAppStore = "UNSPECIFIED" | "UNKNOWN" | "APPLE_APP_STORE" | "GOOGLE_PLAY" | "WINDOWS_STORE" | "WINDOWS_PHONE_STORE" | "CN_APP_STORE";

export interface LegacyAppInstallAdAppStoreEnum {

}

export interface LegacyAppInstallAdInfo {
  readonly app_id?: string;
  readonly app_store?: LegacyAppInstallAdAppStore;
  readonly headline?: string;
  readonly description1?: string;
  readonly description2?: string;
}

export interface LegacyResponsiveDisplayAdInfo {
  readonly short_headline?: string;
  readonly long_headline?: string;
  readonly description?: string;
  readonly business_name?: string;
  readonly allow_flexible_color?: boolean;
  readonly accent_color?: string;
  readonly main_color?: string;
  readonly call_to_action_text?: string;
  readonly logo_image?: string;
  readonly square_logo_image?: string;
  readonly marketing_image?: string;
  readonly square_marketing_image?: string;
  readonly format_setting?: DisplayAdFormatSetting;
  readonly price_prefix?: string;
  readonly promo_text?: string;
}

export interface LicenseVerificationArtifact {
  readonly license_type?: string;
  readonly license_number?: string;
  readonly licensee_first_name?: string;
  readonly licensee_last_name?: string;
  readonly rejection_reason?: LocalServicesLicenseRejectionReason;
  readonly license_document_readonly?: LocalServicesDocumentReadOnly;
  readonly expiration_date_time?: string;
}

export interface LifeEvent {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly launched_to_all?: boolean;
  readonly availabilities?: ReadonlyArray<CriterionCategoryAvailability>;
}

export interface LifeEventInfo {
  readonly life_event_id?: string;
}

export interface LifeEventSegment {
  readonly life_event?: string;
}

export interface LineupAttributeMetadata {
  readonly inventory_country?: LocationInfo;
  readonly median_monthly_inventory?: string;
  readonly channel_count_lower_bound?: string;
  readonly channel_count_upper_bound?: string;
  readonly sample_channels?: ReadonlyArray<SampleChannel>;
}

export type LinkedAccountType = "UNSPECIFIED" | "UNKNOWN" | "THIRD_PARTY_APP_ANALYTICS";

export interface LinkedAccountTypeEnum {

}

export type LinkedProductType = "UNSPECIFIED" | "UNKNOWN" | "DATA_PARTNER" | "GOOGLE_ADS" | "HOTEL_CENTER" | "MERCHANT_CENTER" | "ADVERTISING_PARTNER";

export interface LinkedProductTypeEnum {

}

export interface ListAccessibleCustomersRequest {

}

export interface ListAccessibleCustomersResponse {
  readonly resource_names?: ReadonlyArray<string>;
}

export interface ListAudienceInsightsAttributesRequest {
  readonly customer_id?: string;
  readonly dimensions?: ReadonlyArray<AudienceInsightsDimension>;
  readonly query_text?: string;
  readonly customer_insights_group?: string;
  readonly insights_application_info?: AdditionalApplicationInfo;
  readonly location_country_filters?: ReadonlyArray<LocationInfo>;
  readonly youtube_reach_location?: LocationInfo;
  readonly knowledge_graph_entity_search_options?: KnowledgeGraphEntitySearchOptions;
}

export interface ListAudienceInsightsAttributesResponse {
  readonly attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
}

export interface ListBatchJobResultsRequest {
  readonly resource_name?: string;
  readonly page_token?: string;
  readonly page_size?: number;
  readonly response_content_type?: ResponseContentType;
}

export interface ListBatchJobResultsResponse {
  readonly results?: ReadonlyArray<BatchJobResult>;
  readonly next_page_token?: string;
}

export interface ListBenchmarksAvailableDatesRequest {
  readonly application_info?: AdditionalApplicationInfo;
}

export interface ListBenchmarksAvailableDatesResponse {
  readonly supported_dates?: DateRange;
}

export interface ListBenchmarksLocationsRequest {
  readonly application_info?: AdditionalApplicationInfo;
}

export interface ListBenchmarksLocationsResponse {
  readonly benchmarks_locations?: ReadonlyArray<BenchmarksLocation>;
}

export interface ListBenchmarksProductsRequest {
  readonly application_info?: AdditionalApplicationInfo;
}

export interface ListBenchmarksProductsResponse {
  readonly benchmarks_products?: ReadonlyArray<BenchmarksProductMetadata>;
}

export interface ListBenchmarksSourcesRequest {
  readonly benchmarks_sources?: ReadonlyArray<BenchmarksSourceType>;
  readonly application_info?: AdditionalApplicationInfo;
}

export interface ListBenchmarksSourcesResponse {
  readonly benchmarks_sources?: ReadonlyArray<BenchmarksSourceMetadata>;
}

export interface ListCampaignDraftAsyncErrorsRequest {
  readonly resource_name?: string;
  readonly page_token?: string;
  readonly page_size?: number;
}

export interface ListCampaignDraftAsyncErrorsResponse {
  readonly errors?: ReadonlyArray<unknown>;
  readonly next_page_token?: string;
}

export interface ListExperimentAsyncErrorsRequest {
  readonly resource_name?: string;
  readonly page_token?: string;
  readonly page_size?: number;
}

export interface ListExperimentAsyncErrorsResponse {
  readonly errors?: ReadonlyArray<unknown>;
  readonly next_page_token?: string;
}

export interface ListingDimensionInfo {
  readonly hotel_id?: HotelIdInfo;
  readonly hotel_class?: HotelClassInfo;
  readonly hotel_country_region?: HotelCountryRegionInfo;
  readonly hotel_state?: HotelStateInfo;
  readonly hotel_city?: HotelCityInfo;
  readonly product_category?: ProductCategoryInfo;
  readonly product_brand?: ProductBrandInfo;
  readonly product_channel?: ProductChannelInfo;
  readonly product_channel_exclusivity?: ProductChannelExclusivityInfo;
  readonly product_condition?: ProductConditionInfo;
  readonly product_custom_attribute?: ProductCustomAttributeInfo;
  readonly product_item_id?: ProductItemIdInfo;
  readonly product_type?: ProductTypeInfo;
  readonly product_grouping?: ProductGroupingInfo;
  readonly product_labels?: ProductLabelsInfo;
  readonly product_legacy_condition?: ProductLegacyConditionInfo;
  readonly product_type_full?: ProductTypeFullInfo;
  readonly activity_id?: ActivityIdInfo;
  readonly activity_rating?: ActivityRatingInfo;
  readonly activity_country?: ActivityCountryInfo;
  readonly activity_state?: ActivityStateInfo;
  readonly activity_city?: ActivityCityInfo;
  readonly unknown_listing_dimension?: UnknownListingDimensionInfo;
}

export interface ListingDimensionPath {
  readonly dimensions?: ReadonlyArray<ListingDimensionInfo>;
}

export type ListingGroupFilterCustomAttributeIndex = "UNSPECIFIED" | "UNKNOWN" | "INDEX0" | "INDEX1" | "INDEX2" | "INDEX3" | "INDEX4";

export interface ListingGroupFilterCustomAttributeIndexEnum {

}

export interface ListingGroupFilterDimension {
  readonly product_category?: ProductCategory;
  readonly product_brand?: ProductBrand;
  readonly product_channel?: ProductChannel;
  readonly product_condition?: ProductCondition;
  readonly product_custom_attribute?: ProductCustomAttribute;
  readonly product_item_id?: ProductItemId;
  readonly product_type?: ProductType;
  readonly webpage?: Webpage;
  readonly retail_filter_bundle?: RetailFilterBundle;
}

export interface ListingGroupFilterDimension_ProductChannel {
  readonly channel?: ListingGroupFilterProductChannel;
}

export interface ListingGroupFilterDimension_ProductCondition {
  readonly condition?: ListingGroupFilterProductCondition;
}

export interface ListingGroupFilterDimension_RetailFilterBundle {
  readonly shared_set?: string;
}

export interface ListingGroupFilterDimensionPath {
  readonly dimensions?: ReadonlyArray<ListingGroupFilterDimension>;
}

export type ListingGroupFilterListingSource = "UNSPECIFIED" | "UNKNOWN" | "SHOPPING" | "WEBPAGE" | "RETAIL";

export interface ListingGroupFilterListingSourceEnum {

}

export type ListingGroupFilterProductCategoryLevel = "UNSPECIFIED" | "UNKNOWN" | "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5";

export interface ListingGroupFilterProductCategoryLevelEnum {

}

export type ListingGroupFilterProductChannel = "UNSPECIFIED" | "UNKNOWN" | "ONLINE" | "LOCAL";

export interface ListingGroupFilterProductChannelEnum {

}

export type ListingGroupFilterProductCondition = "UNSPECIFIED" | "UNKNOWN" | "NEW" | "REFURBISHED" | "USED";

export interface ListingGroupFilterProductConditionEnum {

}

export type ListingGroupFilterProductTypeLevel = "UNSPECIFIED" | "UNKNOWN" | "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5";

export interface ListingGroupFilterProductTypeLevelEnum {

}

export type ListingGroupFilterType = "UNSPECIFIED" | "UNKNOWN" | "SUBDIVISION" | "UNIT_INCLUDED" | "UNIT_EXCLUDED";

export interface ListingGroupFilterTypeEnum {

}

export interface ListingGroupInfo {
  readonly type?: ListingGroupType;
  readonly case_value?: ListingDimensionInfo;
  readonly parent_ad_group_criterion?: string;
  readonly path?: ListingDimensionPath;
}

export type ListingGroupType = "UNSPECIFIED" | "UNKNOWN" | "SUBDIVISION" | "UNIT";

export interface ListingGroupTypeEnum {

}

export interface ListingScopeInfo {
  readonly dimensions?: ReadonlyArray<ListingDimensionInfo>;
}

export type ListingType = "UNSPECIFIED" | "UNKNOWN" | "VEHICLES";

export interface ListingTypeEnum {

}

export interface ListInsightsEligibleDatesRequest {
  readonly insights_application_info?: AdditionalApplicationInfo;
}

export interface ListInsightsEligibleDatesResponse {
  readonly data_months?: ReadonlyArray<string>;
  readonly last_thirty_days?: DateRange;
}

export interface ListInvoicesRequest {
  readonly customer_id?: string;
  readonly billing_setup?: string;
  readonly issue_year?: string;
  readonly issue_month?: MonthOfYear;
  readonly include_granular_level_invoice_details?: boolean;
}

export interface ListInvoicesResponse {
  readonly invoices?: ReadonlyArray<Invoice>;
}

export type ListOperationError = "UNSPECIFIED" | "UNKNOWN" | "REQUIRED_FIELD_MISSING" | "DUPLICATE_VALUES";

export interface ListOperationErrorEnum {

}

export interface ListPaymentsAccountsRequest {
  readonly customer_id?: string;
}

export interface ListPaymentsAccountsResponse {
  readonly payments_accounts?: ReadonlyArray<PaymentsAccount>;
}

export interface ListPlannableLocationsRequest {
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface ListPlannableLocationsResponse {
  readonly plannable_locations?: ReadonlyArray<PlannableLocation>;
}

export interface ListPlannableProductsRequest {
  readonly plannable_location_id?: string;
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface ListPlannableProductsResponse {
  readonly product_metadata?: ReadonlyArray<ProductMetadata>;
}

export interface ListPlannableUserInterestsRequest {
  readonly customer_id?: string;
  readonly user_interest_taxonomy_types?: ReadonlyArray<UserInterestTaxonomyType>;
  readonly name_query?: string;
  readonly path_query?: string;
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface ListPlannableUserInterestsResponse {
  readonly plannable_user_interests?: ReadonlyArray<PlannableUserInterest>;
}

export interface ListPlannableUserListsRequest {
  readonly customer_id?: string;
  readonly customer_reach_group?: string;
  readonly reach_application_info?: AdditionalApplicationInfo;
}

export interface ListPlannableUserListsResponse {
  readonly plannable_user_lists?: ReadonlyArray<PlannableUserList>;
}

export interface LocalAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly call_to_actions?: ReadonlyArray<AdTextAsset>;
  readonly marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly logo_images?: ReadonlyArray<AdImageAsset>;
  readonly videos?: ReadonlyArray<AdVideoAsset>;
  readonly path1?: string;
  readonly path2?: string;
}

export interface LocalCampaignSetting {
  readonly location_source_type?: LocationSourceType;
}

export interface LocalServiceIdInfo {
  readonly service_id?: string;
}

export type LocalServicesBusinessRegistrationCheckRejectionReason = "UNSPECIFIED" | "UNKNOWN" | "BUSINESS_NAME_MISMATCH" | "BUSINESS_DETAILS_MISMATCH" | "ID_NOT_FOUND" | "POOR_DOCUMENT_IMAGE_QUALITY" | "DOCUMENT_EXPIRED" | "DOCUMENT_INVALID" | "DOCUMENT_TYPE_MISMATCH" | "DOCUMENT_UNVERIFIABLE" | "OTHER";

export interface LocalServicesBusinessRegistrationCheckRejectionReasonEnum {

}

export type LocalServicesBusinessRegistrationType = "UNSPECIFIED" | "UNKNOWN" | "NUMBER" | "DOCUMENT";

export interface LocalServicesBusinessRegistrationTypeEnum {

}

export interface LocalServicesCallout {
  readonly callout_id?: string;
}

export interface LocalServicesCampaignSettings {
  readonly category_bids?: ReadonlyArray<CategoryBid>;
}

export interface LocalServicesCreditStateEnum {

}

export interface LocalServicesDocumentReadOnly {
  readonly document_url?: string;
}

export interface LocalServicesEmployee {
  readonly resource_name?: string;
  readonly id?: string;
  readonly creation_date_time?: string;
  readonly status?: LocalServicesEmployeeStatus;
  readonly type?: LocalServicesEmployeeType;
  readonly university_degrees?: ReadonlyArray<UniversityDegree>;
  readonly residencies?: ReadonlyArray<Residency>;
  readonly fellowships?: ReadonlyArray<Fellowship>;
  readonly job_title?: string;
  readonly year_started_practicing?: number;
  readonly languages_spoken?: ReadonlyArray<string>;
  readonly category_ids?: ReadonlyArray<string>;
  readonly national_provider_id_number?: string;
  readonly email_address?: string;
  readonly first_name?: string;
  readonly middle_name?: string;
  readonly last_name?: string;
}

export type LocalServicesEmployeeStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface LocalServicesEmployeeStatusEnum {

}

export type LocalServicesEmployeeType = "UNSPECIFIED" | "UNKNOWN" | "BUSINESS_OWNER" | "EMPLOYEE";

export interface LocalServicesEmployeeTypeEnum {

}

export type LocalServicesInsuranceRejectionReason = "UNSPECIFIED" | "UNKNOWN" | "BUSINESS_NAME_MISMATCH" | "INSURANCE_AMOUNT_INSUFFICIENT" | "EXPIRED" | "NO_SIGNATURE" | "NO_POLICY_NUMBER" | "NO_COMMERCIAL_GENERAL_LIABILITY" | "EDITABLE_FORMAT" | "CATEGORY_MISMATCH" | "MISSING_EXPIRATION_DATE" | "POOR_QUALITY" | "POTENTIALLY_EDITED" | "WRONG_DOCUMENT_TYPE" | "NON_FINAL" | "OTHER";

export interface LocalServicesInsuranceRejectionReasonEnum {

}

export interface LocalServicesLead {
  readonly resource_name?: string;
  readonly id?: string;
  readonly category_id?: string;
  readonly service_id?: string;
  readonly contact_details?: ContactDetails;
  readonly lead_type?: LeadType;
  readonly lead_status?: LeadStatus;
  readonly creation_date_time?: string;
  readonly locale?: string;
  readonly note?: Note;
  readonly lead_charged?: boolean;
  readonly credit_details?: CreditDetails;
  readonly lead_feedback_submitted?: boolean;
}

export interface LocalServicesLeadConversation {
  readonly resource_name?: string;
  readonly id?: string;
  readonly conversation_channel?: ConversationType;
  readonly participant_type?: ParticipantType;
  readonly lead?: string;
  readonly event_date_time?: string;
  readonly phone_call_details?: PhoneCallDetails;
  readonly message_details?: MessageDetails;
}

export interface LocalServicesLeadConversationTypeEnum {

}

export interface LocalServicesLeadCreditIssuanceDecisionEnum {

}

export interface LocalServicesLeadStatusEnum {

}

export interface LocalServicesLeadSurveyAnswerEnum {

}

export interface LocalServicesLeadSurveyDissatisfiedReasonEnum {

}

export interface LocalServicesLeadSurveySatisfiedReasonEnum {

}

export interface LocalServicesLeadTypeEnum {

}

export type LocalServicesLicenseRejectionReason = "UNSPECIFIED" | "UNKNOWN" | "BUSINESS_NAME_MISMATCH" | "UNAUTHORIZED" | "EXPIRED" | "POOR_QUALITY" | "UNVERIFIABLE" | "WRONG_DOCUMENT_OR_ID" | "OTHER";

export interface LocalServicesLicenseRejectionReasonEnum {

}

export interface LocalServicesParticipantTypeEnum {

}

export interface LocalServicesPhoneNumber {
  readonly phone_number?: string;
  readonly country_code?: string;
  readonly phone_number_type?: GlsPhoneNumberType;
}

export interface LocalServicesPmaxCampaignSettings {
  readonly navigational_query_leads_enabled?: boolean;
  readonly founding_year?: string;
  readonly country_code?: string;
  readonly phone_numbers?: ReadonlyArray<LocalServicesPhoneNumber>;
}

export interface LocalServicesSettings {
  readonly granular_license_statuses?: ReadonlyArray<GranularLicenseStatus>;
  readonly granular_insurance_statuses?: ReadonlyArray<GranularInsuranceStatus>;
}

export interface LocalServicesVerificationArtifact {
  readonly resource_name?: string;
  readonly id?: string;
  readonly creation_date_time?: string;
  readonly status?: LocalServicesVerificationArtifactStatus;
  readonly artifact_type?: LocalServicesVerificationArtifactType;
  readonly background_check_verification_artifact?: BackgroundCheckVerificationArtifact;
  readonly insurance_verification_artifact?: InsuranceVerificationArtifact;
  readonly license_verification_artifact?: LicenseVerificationArtifact;
  readonly business_registration_check_verification_artifact?: BusinessRegistrationCheckVerificationArtifact;
}

export type LocalServicesVerificationArtifactStatus = "UNSPECIFIED" | "UNKNOWN" | "PASSED" | "FAILED" | "PENDING" | "NO_SUBMISSION" | "CANCELLED";

export interface LocalServicesVerificationArtifactStatusEnum {

}

export type LocalServicesVerificationArtifactType = "UNSPECIFIED" | "UNKNOWN" | "BACKGROUND_CHECK" | "INSURANCE" | "LICENSE" | "BUSINESS_REGISTRATION_CHECK";

export interface LocalServicesVerificationArtifactTypeEnum {

}

export type LocalServicesVerificationStatus = "UNSPECIFIED" | "UNKNOWN" | "NEEDS_REVIEW" | "FAILED" | "PASSED" | "NOT_APPLICABLE" | "NO_SUBMISSION" | "PARTIAL_SUBMISSION" | "PENDING_ESCALATION";

export interface LocalServicesVerificationStatusEnum {

}

export interface LocationAsset {
  readonly place_id?: string;
  readonly business_profile_locations?: ReadonlyArray<BusinessProfileLocation>;
  readonly location_ownership_type?: LocationOwnershipType;
}

export interface LocationAttributeMetadata {
  readonly country_location?: LocationInfo;
}

export interface LocationGroupInfo {
  readonly geo_target_constants?: ReadonlyArray<string>;
  readonly radius?: string;
  readonly radius_units?: LocationGroupRadiusUnits;
  readonly feed_item_sets?: ReadonlyArray<string>;
  readonly enable_customer_level_location_asset_set?: boolean;
  readonly location_group_asset_sets?: ReadonlyArray<string>;
}

export type LocationGroupRadiusUnits = "UNSPECIFIED" | "UNKNOWN" | "METERS" | "MILES" | "MILLI_MILES";

export interface LocationGroupRadiusUnitsEnum {

}

export interface LocationInfo {
  readonly geo_target_constant?: string;
}

export interface LocationInterestView {
  readonly resource_name?: string;
}

export interface LocationList {
  readonly locations?: ReadonlyArray<LocationInfo>;
}

export interface LocationNames {
  readonly names?: ReadonlyArray<string>;
}

export type LocationOwnershipType = "UNSPECIFIED" | "UNKNOWN" | "BUSINESS_OWNER" | "AFFILIATE";

export interface LocationOwnershipTypeEnum {

}

export interface LocationSet {
  readonly location_ownership_type?: LocationOwnershipType;
  readonly business_profile_location_set?: BusinessProfileLocationSet;
  readonly chain_location_set?: ChainSet;
  readonly maps_location_set?: MapsLocationSet;
}

export type LocationSourceType = "UNSPECIFIED" | "UNKNOWN" | "GOOGLE_MY_BUSINESS" | "AFFILIATE";

export interface LocationSourceTypeEnum {

}

export type LocationStringFilterType = "UNSPECIFIED" | "UNKNOWN" | "EXACT";

export interface LocationStringFilterTypeEnum {

}

export interface LocationView {
  readonly resource_name?: string;
}

export interface LogicalUserListInfo {
  readonly rules?: ReadonlyArray<UserListLogicalRuleInfo>;
}

export interface LogicalUserListOperandInfo {
  readonly user_list?: string;
}

export type LookalikeExpansionLevel = "UNSPECIFIED" | "UNKNOWN" | "NARROW" | "BALANCED" | "BROAD";

export interface LookalikeExpansionLevelEnum {

}

export interface LookalikeUserListInfo {
  readonly seed_user_list_ids?: ReadonlyArray<string>;
  readonly expansion_level?: LookalikeExpansionLevel;
  readonly country_codes?: ReadonlyArray<string>;
}

export interface LowerTargetRoasParameters {
  readonly target_roas_multiplier?: number;
}

export interface LowerTargetRoasRecommendation {
  readonly target_adjustment?: TargetAdjustmentInfo;
}

export interface LoyaltyRetentionGoal {
  readonly value_settings?: CustomerLifecycleOptimizationValueSettings;
}

export interface ManagedPlacementView {
  readonly resource_name?: string;
}

export type ManagerLinkError = "UNSPECIFIED" | "UNKNOWN" | "ACCOUNTS_NOT_COMPATIBLE_FOR_LINKING" | "TOO_MANY_MANAGERS" | "TOO_MANY_INVITES" | "ALREADY_INVITED_BY_THIS_MANAGER" | "ALREADY_MANAGED_BY_THIS_MANAGER" | "ALREADY_MANAGED_IN_HIERARCHY" | "DUPLICATE_CHILD_FOUND" | "CLIENT_HAS_NO_ADMIN_USER" | "MAX_DEPTH_EXCEEDED" | "CYCLE_NOT_ALLOWED" | "TOO_MANY_ACCOUNTS" | "TOO_MANY_ACCOUNTS_AT_MANAGER" | "NON_OWNER_USER_CANNOT_MODIFY_LINK" | "SUSPENDED_ACCOUNT_CANNOT_ADD_CLIENTS" | "CLIENT_OUTSIDE_TREE" | "INVALID_STATUS_CHANGE" | "INVALID_CHANGE" | "CUSTOMER_CANNOT_MANAGE_SELF" | "CREATING_ENABLED_LINK_NOT_ALLOWED";

export interface ManagerLinkErrorEnum {

}

export type ManagerLinkStatus = "UNSPECIFIED" | "UNKNOWN" | "ACTIVE" | "INACTIVE" | "PENDING" | "REFUSED" | "CANCELED";

export interface ManagerLinkStatusEnum {

}

export interface ManualCpa {

}

export interface ManualCpc {
  readonly enhanced_cpc_enabled?: boolean;
}

export interface ManualCpcBiddingStrategy {
  readonly daily_budget_micros?: string;
  readonly max_cpc_bid_micros?: string;
}

export interface ManualCpm {

}

export interface ManualCpv {

}

export interface MapsLocationInfo {
  readonly place_id?: string;
}

export interface MapsLocationSet {
  readonly maps_locations?: ReadonlyArray<MapsLocationInfo>;
}

export interface MarketingObjectiveList {
  readonly marketing_objectives?: ReadonlyArray<BenchmarksMarketingObjective>;
}

export interface MatchedLocationInterestView {
  readonly resource_name?: string;
}

export type MatchType = "UNSPECIFIED" | "UNKNOWN" | "BROAD" | "EXACT" | "PHRASE" | "AI_MAX";

export interface MatchTypeEnum {

}

export interface MaximizeClicksBiddingStrategy {
  readonly daily_target_spend_micros?: string;
  readonly max_cpc_bid_ceiling_micros?: string;
}

export interface MaximizeClicksOptInRecommendation {
  readonly recommended_budget_amount_micros?: string;
}

export interface MaximizeConversions {
  readonly cpc_bid_ceiling_micros?: string;
  readonly cpc_bid_floor_micros?: string;
  readonly target_cpa_micros?: string;
}

export interface MaximizeConversionsBiddingStrategy {
  readonly daily_target_spend_micros?: string;
}

export interface MaximizeConversionsOptInRecommendation {
  readonly recommended_budget_amount_micros?: string;
}

export interface MaximizeConversionValue {
  readonly target_roas?: number;
  readonly cpc_bid_ceiling_micros?: string;
  readonly cpc_bid_floor_micros?: string;
  readonly target_roas_tolerance_percent_millis?: string;
}

export interface MaximizeConversionValueOptInRecommendation {

}

export interface MediaAudio {
  readonly ad_duration_millis?: string;
}

export interface MediaBundle {
  readonly data?: string;
  readonly url?: string;
}

export interface MediaBundleAsset {
  readonly data?: string;
}

export type MediaBundleError = "UNSPECIFIED" | "UNKNOWN" | "BAD_REQUEST" | "DOUBLECLICK_BUNDLE_NOT_ALLOWED" | "EXTERNAL_URL_NOT_ALLOWED" | "FILE_TOO_LARGE" | "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED" | "INVALID_INPUT" | "INVALID_MEDIA_BUNDLE" | "INVALID_MEDIA_BUNDLE_ENTRY" | "INVALID_MIME_TYPE" | "INVALID_PATH" | "INVALID_URL_REFERENCE" | "MEDIA_DATA_TOO_LARGE" | "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY" | "SERVER_ERROR" | "STORAGE_ERROR" | "SWIFFY_BUNDLE_NOT_ALLOWED" | "TOO_MANY_FILES" | "UNEXPECTED_SIZE" | "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT" | "UNSUPPORTED_HTML5_FEATURE" | "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT" | "CUSTOM_EXIT_NOT_ALLOWED";

export interface MediaBundleErrorEnum {

}

export interface MediaFile {
  readonly resource_name?: string;
  readonly id?: string;
  readonly type?: MediaType;
  readonly mime_type?: MimeType;
  readonly source_url?: string;
  readonly name?: string;
  readonly file_size?: string;
  readonly image?: MediaImage;
  readonly media_bundle?: MediaBundle;
  readonly audio?: MediaAudio;
  readonly video?: MediaVideo;
}

export type MediaFileError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_CREATE_STANDARD_ICON" | "CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES" | "CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA" | "DUPLICATE_MEDIA" | "EMPTY_FIELD" | "RESOURCE_REFERENCED_IN_MULTIPLE_OPS" | "FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE" | "INVALID_MEDIA_FILE_ID" | "INVALID_MEDIA_SUB_TYPE" | "INVALID_MEDIA_FILE_TYPE" | "INVALID_MIME_TYPE" | "INVALID_REFERENCE_ID" | "INVALID_YOU_TUBE_ID" | "MEDIA_FILE_FAILED_TRANSCODING" | "MEDIA_NOT_TRANSCODED" | "MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE" | "NO_FIELDS_SPECIFIED" | "NULL_REFERENCE_ID_AND_MEDIA_ID" | "TOO_LONG" | "UNSUPPORTED_TYPE" | "YOU_TUBE_SERVICE_UNAVAILABLE" | "YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION" | "YOU_TUBE_VIDEO_NOT_FOUND";

export interface MediaFileErrorEnum {

}

export interface MediaImage {
  readonly data?: string;
  readonly full_size_image_url?: string;
  readonly preview_size_image_url?: string;
}

export type MediaType = "UNSPECIFIED" | "UNKNOWN" | "IMAGE" | "ICON" | "MEDIA_BUNDLE" | "AUDIO" | "VIDEO" | "DYNAMIC_IMAGE";

export interface MediaTypeEnum {

}

export type MediaUploadError = "UNSPECIFIED" | "UNKNOWN" | "FILE_TOO_BIG" | "UNPARSEABLE_IMAGE" | "ANIMATED_IMAGE_NOT_ALLOWED" | "FORMAT_NOT_ALLOWED" | "EXTERNAL_URL_NOT_ALLOWED" | "INVALID_URL_REFERENCE" | "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY" | "ANIMATED_VISUAL_EFFECT" | "ANIMATION_TOO_LONG" | "ASPECT_RATIO_NOT_ALLOWED" | "AUDIO_NOT_ALLOWED_IN_MEDIA_BUNDLE" | "CMYK_JPEG_NOT_ALLOWED" | "FLASH_NOT_ALLOWED" | "FRAME_RATE_TOO_HIGH" | "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED" | "IMAGE_CONSTRAINTS_VIOLATED" | "INVALID_MEDIA_BUNDLE" | "INVALID_MEDIA_BUNDLE_ENTRY" | "INVALID_MIME_TYPE" | "INVALID_PATH" | "LAYOUT_PROBLEM" | "MALFORMED_URL" | "MEDIA_BUNDLE_NOT_ALLOWED" | "MEDIA_BUNDLE_NOT_COMPATIBLE_TO_PRODUCT_TYPE" | "MEDIA_BUNDLE_REJECTED_BY_MULTIPLE_ASSET_SPECS" | "TOO_MANY_FILES_IN_MEDIA_BUNDLE" | "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT" | "UNSUPPORTED_HTML5_FEATURE" | "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT" | "VIDEO_FILE_NAME_TOO_LONG" | "VIDEO_MULTIPLE_FILES_WITH_SAME_NAME" | "VIDEO_NOT_ALLOWED_IN_MEDIA_BUNDLE" | "CANNOT_UPLOAD_MEDIA_TYPE_THROUGH_API" | "DIMENSIONS_NOT_ALLOWED";

export interface MediaUploadErrorEnum {

}

export interface MediaVideo {
  readonly ad_duration_millis?: string;
  readonly youtube_video_id?: string;
  readonly advertising_id_code?: string;
  readonly isci_code?: string;
}

export type MerchantCenterError = "UNSPECIFIED" | "UNKNOWN" | "MERCHANT_ID_CANNOT_BE_ACCESSED" | "CUSTOMER_NOT_ALLOWED_FOR_SHOPPING_PERFORMANCE_MAX";

export interface MerchantCenterErrorEnum {

}

export interface MerchantCenterFeed {
  readonly merchant_id?: string;
  readonly feed_label?: string;
}

export interface MerchantCenterIdentifier {
  readonly merchant_center_id?: string;
}

export interface MerchantCenterLinkInvitationIdentifier {
  readonly merchant_center_id?: string;
}

export interface MerchantInfo {
  readonly id?: string;
  readonly name?: string;
  readonly multi_client?: boolean;
}

export interface MessageDetails {
  readonly text?: string;
  readonly attachment_urls?: ReadonlyArray<string>;
}

export interface MessagingRestriction {
  readonly restriction_text?: string;
  readonly restriction_type?: MessagingRestrictionType;
}

export type MessagingRestrictionType = "UNSPECIFIED" | "UNKNOWN" | "RESTRICTION_BASED_EXCLUSION";

export interface MessagingRestrictionTypeEnum {

}

export interface MetricAttributes {
  readonly name?: string;
  readonly attributes?: ReadonlyArray<Attribute>;
}

export interface MetricGoal {
  readonly metric?: ExperimentMetric;
  readonly direction?: ExperimentMetricDirection;
}

export interface Metrics {
  readonly absolute_top_impression_percentage?: number;
  readonly active_view_cpm?: number;
  readonly active_view_ctr?: number;
  readonly active_view_impressions?: string;
  readonly active_view_measurability?: number;
  readonly active_view_measurable_cost_micros?: string;
  readonly active_view_measurable_impressions?: string;
  readonly active_view_viewability?: number;
  readonly all_conversions_from_interactions_rate?: number;
  readonly all_conversions_value?: number;
  readonly all_conversions_value_by_conversion_date?: number;
  readonly all_new_customer_lifetime_value?: number;
  readonly all_conversions?: number;
  readonly all_conversions_by_conversion_date?: number;
  readonly all_conversions_value_per_cost?: number;
  readonly all_conversions_from_click_to_call?: number;
  readonly all_conversions_from_directions?: number;
  readonly all_conversions_from_interactions_value_per_interaction?: number;
  readonly all_conversions_from_menu?: number;
  readonly all_conversions_from_order?: number;
  readonly all_conversions_from_other_engagement?: number;
  readonly all_conversions_from_store_visit?: number;
  readonly all_conversions_from_store_website?: number;
  readonly auction_insight_search_absolute_top_impression_percentage?: number;
  readonly auction_insight_search_impression_share?: number;
  readonly auction_insight_search_outranking_share?: number;
  readonly auction_insight_search_overlap_rate?: number;
  readonly auction_insight_search_position_above_rate?: number;
  readonly auction_insight_search_top_impression_percentage?: number;
  readonly average_cost?: number;
  readonly average_cpc?: number;
  readonly average_cpe?: number;
  readonly average_cpm?: number;
  readonly trueview_average_cpv?: number;
  readonly average_page_views?: number;
  readonly average_time_on_site?: number;
  readonly benchmark_average_max_cpc?: number;
  readonly biddable_app_install_conversions?: number;
  readonly biddable_app_post_install_conversions?: number;
  readonly biddable_cohort_app_post_install_conversions?: number;
  readonly benchmark_ctr?: number;
  readonly bounce_rate?: number;
  readonly clicks?: string;
  readonly control_clicks?: string;
  readonly combined_clicks?: string;
  readonly combined_clicks_per_query?: number;
  readonly combined_queries?: string;
  readonly content_budget_lost_impression_share?: number;
  readonly content_impression_share?: number;
  readonly conversion_last_received_request_date_time?: string;
  readonly conversion_last_conversion_date?: string;
  readonly content_rank_lost_impression_share?: number;
  readonly conversions_from_interactions_rate?: number;
  readonly conversions_value?: number;
  readonly conversions_value_by_conversion_date?: number;
  readonly new_customer_lifetime_value?: number;
  readonly conversions_value_per_cost?: number;
  readonly conversions_from_interactions_value_per_interaction?: number;
  readonly conversions?: number;
  readonly conversions_by_conversion_date?: number;
  readonly cost_micros?: string;
  readonly cost_per_all_conversions?: number;
  readonly cost_per_conversion?: number;
  readonly cost_per_current_model_attributed_conversion?: number;
  readonly cross_device_conversions?: number;
  readonly cross_device_conversions_by_conversion_date?: number;
  readonly cross_device_conversions_value?: number;
  readonly cross_device_conversions_value_micros?: string;
  readonly cross_device_conversions_value_by_conversion_date?: number;
  readonly ctr?: number;
  readonly current_model_attributed_conversions?: number;
  readonly current_model_attributed_conversions_from_interactions_rate?: number;
  readonly current_model_attributed_conversions_from_interactions_value_per_interaction?: number;
  readonly current_model_attributed_conversions_value?: number;
  readonly current_model_attributed_conversions_value_per_cost?: number;
  readonly engagement_rate?: number;
  readonly engagements?: string;
  readonly hotel_average_lead_value_micros?: number;
  readonly hotel_commission_rate_micros?: string;
  readonly hotel_expected_commission_cost?: number;
  readonly hotel_price_difference_percentage?: number;
  readonly hotel_eligible_impressions?: string;
  readonly historical_creative_quality_score?: QualityScoreBucket;
  readonly historical_landing_page_quality_score?: QualityScoreBucket;
  readonly historical_quality_score?: string;
  readonly historical_search_predicted_ctr?: QualityScoreBucket;
  readonly gmail_forwards?: string;
  readonly gmail_saves?: string;
  readonly gmail_secondary_clicks?: string;
  readonly impressions_from_store_reach?: string;
  readonly impressions?: string;
  readonly interaction_rate?: number;
  readonly interactions?: string;
  readonly interaction_event_types?: ReadonlyArray<InteractionEventType>;
  readonly invalid_click_rate?: number;
  readonly invalid_clicks?: string;
  readonly general_invalid_click_rate?: number;
  readonly general_invalid_clicks?: string;
  readonly message_chats?: string;
  readonly message_impressions?: string;
  readonly message_chat_rate?: number;
  readonly mobile_friendly_clicks_percentage?: number;
  readonly optimization_score_uplift?: number;
  readonly optimization_score_url?: string;
  readonly organic_clicks?: string;
  readonly organic_clicks_per_query?: number;
  readonly organic_impressions?: string;
  readonly organic_impressions_per_query?: number;
  readonly organic_queries?: string;
  readonly percent_new_visitors?: number;
  readonly phone_calls?: string;
  readonly phone_impressions?: string;
  readonly phone_through_rate?: number;
  readonly relative_ctr?: number;
  readonly search_absolute_top_impression_share?: number;
  readonly search_budget_lost_absolute_top_impression_share?: number;
  readonly search_budget_lost_impression_share?: number;
  readonly search_budget_lost_top_impression_share?: number;
  readonly search_click_share?: number;
  readonly search_exact_match_impression_share?: number;
  readonly search_impression_share?: number;
  readonly search_rank_lost_absolute_top_impression_share?: number;
  readonly search_rank_lost_impression_share?: number;
  readonly search_rank_lost_top_impression_share?: number;
  readonly search_top_impression_share?: number;
  readonly search_volume?: SearchVolumeRange;
  readonly speed_score?: string;
  readonly average_target_cpa_micros?: string;
  readonly average_target_roas?: number;
  readonly top_impression_percentage?: number;
  readonly valid_accelerated_mobile_pages_clicks_percentage?: number;
  readonly value_per_all_conversions?: number;
  readonly value_per_all_conversions_by_conversion_date?: number;
  readonly value_per_conversion?: number;
  readonly value_per_conversions_by_conversion_date?: number;
  readonly value_per_current_model_attributed_conversion?: number;
  readonly video_quartile_p100_rate?: number;
  readonly video_quartile_p25_rate?: number;
  readonly video_quartile_p50_rate?: number;
  readonly video_quartile_p75_rate?: number;
  readonly video_trueview_view_rate?: number;
  readonly video_trueview_views?: string;
  readonly view_through_conversions?: string;
  readonly sk_ad_network_installs?: string;
  readonly sk_ad_network_total_conversions?: string;
  readonly publisher_purchased_clicks?: string;
  readonly publisher_organic_clicks?: string;
  readonly publisher_unknown_clicks?: string;
  readonly all_conversions_from_location_asset_click_to_call?: number;
  readonly all_conversions_from_location_asset_directions?: number;
  readonly all_conversions_from_location_asset_menu?: number;
  readonly all_conversions_from_location_asset_order?: number;
  readonly all_conversions_from_location_asset_other_engagement?: number;
  readonly all_conversions_from_location_asset_store_visits?: number;
  readonly all_conversions_from_location_asset_website?: number;
  readonly eligible_impressions_from_location_asset_store_reach?: string;
  readonly view_through_conversions_from_location_asset_click_to_call?: number;
  readonly view_through_conversions_from_location_asset_directions?: number;
  readonly view_through_conversions_from_location_asset_menu?: number;
  readonly view_through_conversions_from_location_asset_order?: number;
  readonly view_through_conversions_from_location_asset_other_engagement?: number;
  readonly view_through_conversions_from_location_asset_store_visits?: number;
  readonly view_through_conversions_from_location_asset_website?: number;
  readonly orders?: number;
  readonly average_order_value_micros?: string;
  readonly average_cart_size?: number;
  readonly cost_of_goods_sold_micros?: string;
  readonly gross_profit_micros?: string;
  readonly gross_profit_margin?: number;
  readonly revenue_micros?: string;
  readonly units_sold?: number;
  readonly cross_sell_cost_of_goods_sold_micros?: string;
  readonly cross_sell_gross_profit_micros?: string;
  readonly cross_sell_revenue_micros?: string;
  readonly cross_sell_units_sold?: number;
  readonly lead_cost_of_goods_sold_micros?: string;
  readonly lead_gross_profit_micros?: string;
  readonly lead_revenue_micros?: string;
  readonly lead_units_sold?: number;
  readonly unique_users?: string;
  readonly average_impression_frequency_per_user?: number;
  readonly linked_entities_count?: string;
  readonly linked_sample_entities?: ReadonlyArray<string>;
  readonly asset_pinned_total_count?: string;
  readonly asset_pinned_as_headline_position_one_count?: string;
  readonly asset_pinned_as_headline_position_two_count?: string;
  readonly asset_pinned_as_headline_position_three_count?: string;
  readonly asset_pinned_as_description_position_one_count?: string;
  readonly asset_pinned_as_description_position_two_count?: string;
  readonly store_visits_last_click_model_attributed_conversions?: number;
  readonly results_conversions_purchase?: number;
  readonly video_trueview_view_rate_in_feed?: number;
  readonly video_trueview_view_rate_in_stream?: number;
  readonly video_trueview_view_rate_shorts?: number;
  readonly coviewed_impressions?: string;
  readonly primary_impressions?: string;
  readonly platform_comparable_conversions_from_interactions_rate?: number;
  readonly platform_comparable_conversions?: number;
  readonly platform_comparable_conversions_value?: number;
  readonly platform_comparable_conversions_value_per_cost?: number;
  readonly platform_comparable_conversions_by_conversion_date?: number;
  readonly platform_comparable_conversions_value_by_conversion_date?: number;
  readonly platform_comparable_conversions_from_interactions_value_per_interaction?: number;
  readonly cost_per_platform_comparable_conversion?: number;
  readonly value_per_platform_comparable_conversion?: number;
  readonly value_per_platform_comparable_conversions_by_conversion_date?: number;
  readonly cost_converted_currency_per_platform_comparable_conversion?: number;
  readonly unique_users_two_plus?: string;
  readonly unique_users_three_plus?: string;
  readonly unique_users_four_plus?: string;
  readonly unique_users_five_plus?: string;
  readonly unique_users_ten_plus?: string;
  readonly value_adjustment?: number;
  readonly all_value_adjustment?: number;
  readonly clicks_unique_query_clusters?: string;
  readonly conversions_unique_query_clusters?: string;
  readonly impressions_unique_query_clusters?: string;
  readonly video_watch_time_duration_millis?: string;
  readonly average_video_watch_time_duration_millis?: string;
  readonly svr?: string;
  readonly active_view_audibility_measurable_impressions?: string;
  readonly active_view_audibility_measurable_impressions_rate?: number;
  readonly active_view_audibility_invalid_measurable_impressions_rate?: number;
  readonly active_view_audibility_invalid_givt_measurable_impressions_rate?: number;
  readonly active_view_audible_impressions?: string;
  readonly active_view_audible_impressions_rate?: number;
  readonly active_view_audible_two_seconds_impressions?: string;
  readonly active_view_audible_two_seconds_impressions_rate?: number;
  readonly active_view_audible_thirty_seconds_impressions?: string;
  readonly active_view_audible_thirty_seconds_impressions_rate?: number;
  readonly active_view_audible_quartile_p25_rate?: number;
  readonly active_view_audible_quartile_p50_rate?: number;
  readonly active_view_audible_quartile_p75_rate?: number;
  readonly active_view_audible_quartile_p100_rate?: number;
  readonly biddable_indirect_install_first_in_app_conversion_micros?: string;
  readonly all_average_cart_size?: number;
  readonly all_average_order_value_micros?: string;
  readonly all_cost_of_goods_sold_micros?: string;
  readonly all_cross_sell_cost_of_goods_sold_micros?: string;
  readonly all_cross_sell_gross_profit_micros?: string;
  readonly all_cross_sell_revenue_micros?: string;
  readonly all_cross_sell_units_sold?: number;
  readonly all_gross_profit_margin?: number;
  readonly all_gross_profit_micros?: string;
  readonly all_lead_cost_of_goods_sold_micros?: string;
  readonly all_lead_gross_profit_micros?: string;
  readonly all_lead_revenue_micros?: string;
  readonly all_lead_units_sold?: number;
  readonly all_orders?: number;
  readonly all_revenue_micros?: string;
  readonly all_units_sold?: number;
  readonly control_cost_per_conversion?: number;
  readonly cost_per_conversion_margin_of_error?: number;
  readonly cost_per_conversion_p_value?: number;
  readonly cost_per_conversion_change_point_estimate?: number;
  readonly control_conversions?: number;
  readonly conversions_absolute_change_margin_of_error?: number;
  readonly conversions_absolute_change_p_value?: number;
  readonly conversions_absolute_change_point_estimate?: number;
  readonly control_conversion_value_per_cost?: number;
  readonly conversion_value_per_cost_margin_of_error?: number;
  readonly conversion_value_per_cost_p_value?: number;
  readonly conversion_value_per_cost_change_point_estimate?: number;
  readonly control_cost_micros?: string;
  readonly cost_micros_margin_of_error?: number;
  readonly cost_micros_p_value?: number;
  readonly cost_micros_change_point_estimate?: number;
  readonly control_impressions?: string;
  readonly impressions_margin_of_error?: number;
  readonly impressions_p_value?: number;
  readonly impressions_point_estimate?: number;
  readonly clicks_margin_of_error?: number;
  readonly clicks_p_value?: number;
  readonly clicks_point_estimate?: number;
  readonly control_conversion_value?: number;
  readonly conversion_value_margin_of_error?: number;
  readonly conversion_value_p_value?: number;
  readonly conversion_value_change_point_estimate?: number;
  readonly youtube_comments?: string;
  readonly youtube_likes?: string;
  readonly youtube_shares?: string;
}

export interface MigrateDynamicSearchAdsCampaignToPerformanceMaxRecommendation {
  readonly apply_link?: string;
}

export type MimeType = "UNSPECIFIED" | "UNKNOWN" | "IMAGE_JPEG" | "IMAGE_GIF" | "IMAGE_PNG" | "FLASH" | "TEXT_HTML" | "PDF" | "MSWORD" | "MSEXCEL" | "RTF" | "AUDIO_WAV" | "AUDIO_MP3" | "HTML5_AD_ZIP";

export interface MimeTypeEnum {

}

export type MinuteOfHour = "UNSPECIFIED" | "UNKNOWN" | "ZERO" | "FIFTEEN" | "THIRTY" | "FORTY_FIVE";

export interface MinuteOfHourEnum {

}

export interface MobileAppAsset {
  readonly app_id?: string;
  readonly app_store?: MobileAppVendor;
  readonly link_text?: string;
  readonly start_date?: string;
  readonly end_date?: string;
}

export interface MobileAppCategoryConstant {
  readonly resource_name?: string;
  readonly id?: number;
  readonly name?: string;
}

export interface MobileAppCategoryInfo {
  readonly mobile_app_category_constant?: string;
}

export interface MobileApplicationInfo {
  readonly app_id?: string;
  readonly name?: string;
}

export type MobileAppVendor = "UNSPECIFIED" | "UNKNOWN" | "APPLE_APP_STORE" | "GOOGLE_APP_STORE";

export interface MobileAppVendorEnum {

}

export interface MobileDeviceConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly manufacturer_name?: string;
  readonly operating_system_name?: string;
  readonly type?: MobileDeviceType;
}

export interface MobileDeviceInfo {
  readonly mobile_device_constant?: string;
}

export type MobileDevicePlatform = "UNSPECIFIED" | "UNKNOWN" | "ANDROID" | "IOS" | "OTHER_MOBILE" | "DESKTOP";

export interface MobileDevicePlatformEnum {

}

export type MobileDeviceType = "UNSPECIFIED" | "UNKNOWN" | "MOBILE" | "TABLET";

export interface MobileDeviceTypeEnum {

}

export interface Money {
  readonly currency_code?: string;
  readonly amount_micros?: string;
}

export interface MonthlySearchVolume {
  readonly year?: string;
  readonly month?: MonthOfYear;
  readonly monthly_searches?: string;
}

export type MonthOfYear = "UNSPECIFIED" | "UNKNOWN" | "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";

export interface MonthOfYearEnum {

}

export interface MoveManagerLinkRequest {
  readonly customer_id?: string;
  readonly previous_customer_manager_link?: string;
  readonly new_manager?: string;
  readonly validate_only?: boolean;
}

export interface MoveManagerLinkResponse {
  readonly resource_name?: string;
}

export interface MoveUnusedBudgetParameters {
  readonly budget_micros_to_move?: string;
}

export interface MoveUnusedBudgetRecommendation {
  readonly excess_campaign_budget?: string;
  readonly budget_recommendation?: CampaignBudgetRecommendation;
}

export type MultiPartyAuthOperationType = "UNSPECIFIED" | "UNKNOWN" | "CREATE" | "UPDATE" | "REMOVE";

export interface MultiPartyAuthOperationTypeEnum {

}

export interface MultiPartyAuthReview {
  readonly resource_name?: string;
  readonly multi_party_auth_review_id?: string;
  readonly creation_date_time?: string;
  readonly review_status?: MultiPartyAuthReviewStatus;
  readonly approval_date_time?: string;
  readonly justification?: string;
  readonly request_user_email?: string;
  readonly operation_type?: MultiPartyAuthOperationType;
  readonly target_resource?: MultiPartyAuthReviewTargetResource;
  readonly customer_user_access_review?: CustomerUserAccessReview;
  readonly customer_user_access_invitation_review?: CustomerUserAccessInvitationReview;
}

export type MultiPartyAuthReviewError = "UNSPECIFIED" | "UNKNOWN" | "ACCESS_INVITATION_NOT_FOUND" | "ACCESS_INVITATION_INVALID_STATUS" | "INVALID_STATUS_TRANSITION" | "PERMISSION_DENIED";

export interface MultiPartyAuthReviewErrorEnum {

}

export type MultiPartyAuthReviewStatus = "UNSPECIFIED" | "UNKNOWN" | "APPROVED" | "PENDING" | "REVOKED" | "REJECTED" | "EXPIRED";

export interface MultiPartyAuthReviewStatusEnum {

}

export type MultiPartyAuthReviewTargetResource = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_USER_ACCESS" | "CUSTOMER_USER_ACCESS_INVITATION";

export interface MultiPartyAuthReviewTargetResourceEnum {

}

export type MultiplierError = "UNSPECIFIED" | "UNKNOWN" | "MULTIPLIER_TOO_HIGH" | "MULTIPLIER_TOO_LOW" | "TOO_MANY_FRACTIONAL_DIGITS" | "MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY" | "MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING" | "NO_MULTIPLIER_SPECIFIED" | "MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET" | "MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET" | "MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET" | "MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID" | "BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER" | "MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH";

export interface MultiplierErrorEnum {

}

export interface MutateAccountBudgetProposalRequest {
  readonly customer_id?: string;
  readonly operation?: AccountBudgetProposalOperation;
  readonly validate_only?: boolean;
}

export interface MutateAccountBudgetProposalResponse {
  readonly result?: MutateAccountBudgetProposalResult;
}

export interface MutateAccountBudgetProposalResult {
  readonly resource_name?: string;
}

export interface MutateAccountLinkRequest {
  readonly customer_id?: string;
  readonly operation?: AccountLinkOperation;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateAccountLinkResponse {
  readonly result?: MutateAccountLinkResult;
  readonly partial_failure_error?: unknown;
}

export interface MutateAccountLinkResult {
  readonly resource_name?: string;
}

export interface MutateAdGroupAdLabelResult {
  readonly resource_name?: string;
}

export interface MutateAdGroupAdLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupAdLabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateAdGroupAdLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupAdLabelResult>;
}

export interface MutateAdGroupAdResult {
  readonly resource_name?: string;
  readonly ad_group_ad?: AdGroupAd;
}

export interface MutateAdGroupAdsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupAdOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupAdsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupAdResult>;
}

export interface MutateAdGroupAssetResult {
  readonly resource_name?: string;
  readonly ad_group_asset?: AdGroupAsset;
}

export interface MutateAdGroupAssetSetResult {
  readonly resource_name?: string;
  readonly ad_group_asset_set?: AdGroupAssetSet;
}

export interface MutateAdGroupAssetSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupAssetSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupAssetSetsResponse {
  readonly results?: ReadonlyArray<MutateAdGroupAssetSetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAdGroupAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupAssetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupAssetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupAssetResult>;
}

export interface MutateAdGroupBidModifierResult {
  readonly resource_name?: string;
  readonly ad_group_bid_modifier?: AdGroupBidModifier;
}

export interface MutateAdGroupBidModifiersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupBidModifierOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupBidModifiersResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupBidModifierResult>;
}

export interface MutateAdGroupCriteriaRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupCriterionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupCriteriaResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupCriterionResult>;
}

export interface MutateAdGroupCriterionCustomizerResult {
  readonly resource_name?: string;
  readonly ad_group_criterion_customizer?: AdGroupCriterionCustomizer;
}

export interface MutateAdGroupCriterionCustomizersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupCriterionCustomizerOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupCriterionCustomizersResponse {
  readonly results?: ReadonlyArray<MutateAdGroupCriterionCustomizerResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAdGroupCriterionLabelResult {
  readonly resource_name?: string;
}

export interface MutateAdGroupCriterionLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupCriterionLabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateAdGroupCriterionLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupCriterionLabelResult>;
}

export interface MutateAdGroupCriterionResult {
  readonly resource_name?: string;
  readonly ad_group_criterion?: AdGroupCriterion;
}

export interface MutateAdGroupCustomizerResult {
  readonly resource_name?: string;
  readonly ad_group_customizer?: AdGroupCustomizer;
}

export interface MutateAdGroupCustomizersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupCustomizerOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupCustomizersResponse {
  readonly results?: ReadonlyArray<MutateAdGroupCustomizerResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAdGroupLabelResult {
  readonly resource_name?: string;
}

export interface MutateAdGroupLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupLabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateAdGroupLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupLabelResult>;
}

export interface MutateAdGroupResult {
  readonly resource_name?: string;
  readonly ad_group?: AdGroup;
}

export interface MutateAdGroupsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdGroupOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdGroupsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdGroupResult>;
}

export interface MutateAdParameterResult {
  readonly resource_name?: string;
  readonly ad_parameter?: AdParameter;
}

export interface MutateAdParametersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdParameterOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAdParametersResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdParameterResult>;
}

export interface MutateAdResult {
  readonly resource_name?: string;
  readonly ad?: Ad;
}

export interface MutateAdsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AdOperation>;
  readonly partial_failure?: boolean;
  readonly response_content_type?: ResponseContentType;
  readonly validate_only?: boolean;
}

export interface MutateAdsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAdResult>;
}

export interface MutateAssetGroupAssetResult {
  readonly resource_name?: string;
}

export interface MutateAssetGroupAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetGroupAssetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateAssetGroupAssetsResponse {
  readonly results?: ReadonlyArray<MutateAssetGroupAssetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAssetGroupListingGroupFilterResult {
  readonly resource_name?: string;
  readonly asset_group_listing_group_filter?: AssetGroupListingGroupFilter;
}

export interface MutateAssetGroupListingGroupFiltersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetGroupListingGroupFilterOperation>;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAssetGroupListingGroupFiltersResponse {
  readonly results?: ReadonlyArray<MutateAssetGroupListingGroupFilterResult>;
}

export interface MutateAssetGroupResult {
  readonly resource_name?: string;
}

export interface MutateAssetGroupSignalResult {
  readonly resource_name?: string;
  readonly asset_group_signal?: AssetGroupSignal;
}

export interface MutateAssetGroupSignalsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetGroupSignalOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAssetGroupSignalsResponse {
  readonly results?: ReadonlyArray<MutateAssetGroupSignalResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAssetGroupsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetGroupOperation>;
  readonly validate_only?: boolean;
}

export interface MutateAssetGroupsResponse {
  readonly results?: ReadonlyArray<MutateAssetGroupResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAssetResult {
  readonly resource_name?: string;
  readonly asset?: Asset;
}

export interface MutateAssetSetAssetResult {
  readonly resource_name?: string;
  readonly asset_set_asset?: AssetSetAsset;
}

export interface MutateAssetSetAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetSetAssetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAssetSetAssetsResponse {
  readonly results?: ReadonlyArray<MutateAssetSetAssetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAssetSetResult {
  readonly resource_name?: string;
  readonly asset_set?: AssetSet;
}

export interface MutateAssetSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAssetSetsResponse {
  readonly results?: ReadonlyArray<MutateAssetSetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AssetOperation>;
  readonly partial_failure?: boolean;
  readonly response_content_type?: ResponseContentType;
  readonly validate_only?: boolean;
}

export interface MutateAssetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateAssetResult>;
}

export interface MutateAudienceResult {
  readonly resource_name?: string;
  readonly audience?: Audience;
}

export interface MutateAudiencesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<AudienceOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateAudiencesResponse {
  readonly results?: ReadonlyArray<MutateAudienceResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateBatchJobRequest {
  readonly customer_id?: string;
  readonly operation?: BatchJobOperation;
}

export interface MutateBatchJobResponse {
  readonly result?: MutateBatchJobResult;
}

export interface MutateBatchJobResult {
  readonly resource_name?: string;
}

export interface MutateBiddingDataExclusionsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<BiddingDataExclusionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateBiddingDataExclusionsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateBiddingDataExclusionsResult>;
}

export interface MutateBiddingDataExclusionsResult {
  readonly resource_name?: string;
  readonly bidding_data_exclusion?: BiddingDataExclusion;
}

export interface MutateBiddingSeasonalityAdjustmentsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<BiddingSeasonalityAdjustmentOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateBiddingSeasonalityAdjustmentsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateBiddingSeasonalityAdjustmentsResult>;
}

export interface MutateBiddingSeasonalityAdjustmentsResult {
  readonly resource_name?: string;
  readonly bidding_seasonality_adjustment?: BiddingSeasonalityAdjustment;
}

export interface MutateBiddingStrategiesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<BiddingStrategyOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateBiddingStrategiesResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateBiddingStrategyResult>;
}

export interface MutateBiddingStrategyResult {
  readonly resource_name?: string;
  readonly bidding_strategy?: BiddingStrategy;
}

export interface MutateBillingSetupRequest {
  readonly customer_id?: string;
  readonly operation?: BillingSetupOperation;
}

export interface MutateBillingSetupResponse {
  readonly result?: MutateBillingSetupResult;
}

export interface MutateBillingSetupResult {
  readonly resource_name?: string;
}

export interface MutateCampaignAssetResult {
  readonly resource_name?: string;
  readonly campaign_asset?: CampaignAsset;
}

export interface MutateCampaignAssetSetResult {
  readonly resource_name?: string;
  readonly campaign_asset_set?: CampaignAssetSet;
}

export interface MutateCampaignAssetSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignAssetSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignAssetSetsResponse {
  readonly results?: ReadonlyArray<MutateCampaignAssetSetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCampaignAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignAssetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignAssetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignAssetResult>;
}

export interface MutateCampaignBidModifierResult {
  readonly resource_name?: string;
  readonly campaign_bid_modifier?: CampaignBidModifier;
}

export interface MutateCampaignBidModifiersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignBidModifierOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignBidModifiersResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignBidModifierResult>;
}

export interface MutateCampaignBudgetResult {
  readonly resource_name?: string;
  readonly campaign_budget?: CampaignBudget;
}

export interface MutateCampaignBudgetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignBudgetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignBudgetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignBudgetResult>;
}

export interface MutateCampaignConversionGoalResult {
  readonly resource_name?: string;
}

export interface MutateCampaignConversionGoalsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignConversionGoalOperation>;
  readonly validate_only?: boolean;
}

export interface MutateCampaignConversionGoalsResponse {
  readonly results?: ReadonlyArray<MutateCampaignConversionGoalResult>;
}

export interface MutateCampaignCriteriaRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignCriterionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignCriteriaResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignCriterionResult>;
}

export interface MutateCampaignCriterionResult {
  readonly resource_name?: string;
  readonly campaign_criterion?: CampaignCriterion;
}

export interface MutateCampaignCustomizerResult {
  readonly resource_name?: string;
  readonly campaign_customizer?: CampaignCustomizer;
}

export interface MutateCampaignCustomizersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignCustomizerOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignCustomizersResponse {
  readonly results?: ReadonlyArray<MutateCampaignCustomizerResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCampaignDraftResult {
  readonly resource_name?: string;
  readonly campaign_draft?: CampaignDraft;
}

export interface MutateCampaignDraftsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignDraftOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignDraftsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignDraftResult>;
}

export interface MutateCampaignGoalConfigResult {
  readonly resource_name?: string;
}

export interface MutateCampaignGoalConfigsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignGoalConfigOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateCampaignGoalConfigsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignGoalConfigResult>;
}

export interface MutateCampaignGroupResult {
  readonly resource_name?: string;
  readonly campaign_group?: CampaignGroup;
}

export interface MutateCampaignGroupsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignGroupOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignGroupsResponse {
  readonly results?: ReadonlyArray<MutateCampaignGroupResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCampaignLabelResult {
  readonly resource_name?: string;
}

export interface MutateCampaignLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignLabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateCampaignLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignLabelResult>;
}

export interface MutateCampaignResult {
  readonly resource_name?: string;
  readonly campaign?: Campaign;
}

export interface MutateCampaignSharedSetResult {
  readonly resource_name?: string;
  readonly campaign_shared_set?: CampaignSharedSet;
}

export interface MutateCampaignSharedSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignSharedSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignSharedSetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignSharedSetResult>;
}

export interface MutateCampaignsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CampaignOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCampaignsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCampaignResult>;
}

export interface MutateConversionActionResult {
  readonly resource_name?: string;
  readonly conversion_action?: ConversionAction;
}

export interface MutateConversionActionsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ConversionActionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateConversionActionsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateConversionActionResult>;
}

export interface MutateConversionCustomVariableResult {
  readonly resource_name?: string;
  readonly conversion_custom_variable?: ConversionCustomVariable;
}

export interface MutateConversionCustomVariablesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ConversionCustomVariableOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateConversionCustomVariablesResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateConversionCustomVariableResult>;
}

export interface MutateConversionGoalCampaignConfigResult {
  readonly resource_name?: string;
  readonly conversion_goal_campaign_config?: ConversionGoalCampaignConfig;
}

export interface MutateConversionGoalCampaignConfigsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ConversionGoalCampaignConfigOperation>;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateConversionGoalCampaignConfigsResponse {
  readonly results?: ReadonlyArray<MutateConversionGoalCampaignConfigResult>;
}

export interface MutateConversionValueRuleResult {
  readonly resource_name?: string;
  readonly conversion_value_rule?: ConversionValueRule;
}

export interface MutateConversionValueRuleSetResult {
  readonly resource_name?: string;
  readonly conversion_value_rule_set?: ConversionValueRuleSet;
}

export interface MutateConversionValueRuleSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ConversionValueRuleSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateConversionValueRuleSetsResponse {
  readonly results?: ReadonlyArray<MutateConversionValueRuleSetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateConversionValueRulesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ConversionValueRuleOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateConversionValueRulesResponse {
  readonly results?: ReadonlyArray<MutateConversionValueRuleResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCustomAudienceResult {
  readonly resource_name?: string;
}

export interface MutateCustomAudiencesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomAudienceOperation>;
  readonly validate_only?: boolean;
}

export interface MutateCustomAudiencesResponse {
  readonly results?: ReadonlyArray<MutateCustomAudienceResult>;
}

export interface MutateCustomConversionGoalResult {
  readonly resource_name?: string;
  readonly custom_conversion_goal?: CustomConversionGoal;
}

export interface MutateCustomConversionGoalsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomConversionGoalOperation>;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomConversionGoalsResponse {
  readonly results?: ReadonlyArray<MutateCustomConversionGoalResult>;
}

export interface MutateCustomerAssetResult {
  readonly resource_name?: string;
  readonly customer_asset?: CustomerAsset;
}

export interface MutateCustomerAssetSetResult {
  readonly resource_name?: string;
  readonly customer_asset_set?: CustomerAssetSet;
}

export interface MutateCustomerAssetSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerAssetSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomerAssetSetsResponse {
  readonly results?: ReadonlyArray<MutateCustomerAssetSetResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCustomerAssetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerAssetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomerAssetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCustomerAssetResult>;
}

export interface MutateCustomerClientLinkRequest {
  readonly customer_id?: string;
  readonly operation?: CustomerClientLinkOperation;
  readonly validate_only?: boolean;
}

export interface MutateCustomerClientLinkResponse {
  readonly result?: MutateCustomerClientLinkResult;
}

export interface MutateCustomerClientLinkResult {
  readonly resource_name?: string;
}

export interface MutateCustomerConversionGoalResult {
  readonly resource_name?: string;
}

export interface MutateCustomerConversionGoalsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerConversionGoalOperation>;
  readonly validate_only?: boolean;
}

export interface MutateCustomerConversionGoalsResponse {
  readonly results?: ReadonlyArray<MutateCustomerConversionGoalResult>;
}

export interface MutateCustomerCustomizerResult {
  readonly resource_name?: string;
  readonly customer_customizer?: CustomerCustomizer;
}

export interface MutateCustomerCustomizersRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerCustomizerOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomerCustomizersResponse {
  readonly results?: ReadonlyArray<MutateCustomerCustomizerResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateCustomerLabelResult {
  readonly resource_name?: string;
}

export interface MutateCustomerLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerLabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateCustomerLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCustomerLabelResult>;
}

export interface MutateCustomerManagerLinkRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerManagerLinkOperation>;
  readonly validate_only?: boolean;
}

export interface MutateCustomerManagerLinkResponse {
  readonly results?: ReadonlyArray<MutateCustomerManagerLinkResult>;
}

export interface MutateCustomerManagerLinkResult {
  readonly resource_name?: string;
}

export interface MutateCustomerNegativeCriteriaRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomerNegativeCriterionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomerNegativeCriteriaResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateCustomerNegativeCriteriaResult>;
}

export interface MutateCustomerNegativeCriteriaResult {
  readonly resource_name?: string;
  readonly customer_negative_criterion?: CustomerNegativeCriterion;
}

export interface MutateCustomerRequest {
  readonly customer_id?: string;
  readonly operation?: CustomerOperation;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomerResponse {
  readonly result?: MutateCustomerResult;
}

export interface MutateCustomerResult {
  readonly resource_name?: string;
  readonly customer?: Customer;
}

export interface MutateCustomerSkAdNetworkConversionValueSchemaRequest {
  readonly customer_id?: string;
  readonly operation?: CustomerSkAdNetworkConversionValueSchemaOperation;
  readonly validate_only?: boolean;
  readonly enable_warnings?: boolean;
}

export interface MutateCustomerSkAdNetworkConversionValueSchemaResponse {
  readonly result?: MutateCustomerSkAdNetworkConversionValueSchemaResult;
  readonly warning?: unknown;
}

export interface MutateCustomerSkAdNetworkConversionValueSchemaResult {
  readonly resource_name?: string;
  readonly app_id?: string;
}

export interface MutateCustomerUserAccessInvitationRequest {
  readonly customer_id?: string;
  readonly operation?: CustomerUserAccessInvitationOperation;
}

export interface MutateCustomerUserAccessInvitationResponse {
  readonly result?: MutateCustomerUserAccessInvitationResult;
}

export interface MutateCustomerUserAccessInvitationResult {
  readonly resource_name?: string;
  readonly multi_party_auth_review?: string;
}

export interface MutateCustomerUserAccessRequest {
  readonly customer_id?: string;
  readonly operation?: CustomerUserAccessOperation;
}

export interface MutateCustomerUserAccessResponse {
  readonly result?: MutateCustomerUserAccessResult;
}

export interface MutateCustomerUserAccessResult {
  readonly resource_name?: string;
  readonly multi_party_auth_review?: string;
}

export interface MutateCustomInterestResult {
  readonly resource_name?: string;
}

export interface MutateCustomInterestsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomInterestOperation>;
  readonly validate_only?: boolean;
}

export interface MutateCustomInterestsResponse {
  readonly results?: ReadonlyArray<MutateCustomInterestResult>;
}

export interface MutateCustomizerAttributeResult {
  readonly resource_name?: string;
  readonly customizer_attribute?: CustomizerAttribute;
}

export interface MutateCustomizerAttributesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<CustomizerAttributeOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateCustomizerAttributesResponse {
  readonly results?: ReadonlyArray<MutateCustomizerAttributeResult>;
  readonly partial_failure_error?: unknown;
}

export type MutateError = "UNSPECIFIED" | "UNKNOWN" | "RESOURCE_NOT_FOUND" | "ID_EXISTS_IN_MULTIPLE_MUTATES" | "INCONSISTENT_FIELD_VALUES" | "MUTATE_NOT_ALLOWED" | "RESOURCE_NOT_IN_GOOGLE_ADS" | "RESOURCE_ALREADY_EXISTS" | "RESOURCE_DOES_NOT_SUPPORT_VALIDATE_ONLY" | "OPERATION_DOES_NOT_SUPPORT_PARTIAL_FAILURE" | "RESOURCE_READ_ONLY" | "EU_POLITICAL_ADVERTISING_DECLARATION_REQUIRED";

export interface MutateErrorEnum {

}

export interface MutateExperimentArmResult {
  readonly resource_name?: string;
  readonly experiment_arm?: ExperimentArm;
}

export interface MutateExperimentArmsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ExperimentArmOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateExperimentArmsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateExperimentArmResult>;
}

export interface MutateExperimentResult {
  readonly resource_name?: string;
}

export interface MutateExperimentsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ExperimentOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateExperimentsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateExperimentResult>;
}

export interface MutateGoalResult {
  readonly resource_name?: string;
}

export interface MutateGoalsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<GoalOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateGoalsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateGoalResult>;
}

export interface MutateGoogleAdsRequest {
  readonly customer_id?: string;
  readonly mutate_operations?: ReadonlyArray<MutateOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateGoogleAdsResponse {
  readonly partial_failure_error?: unknown;
  readonly mutate_operation_responses?: ReadonlyArray<MutateOperationResponse>;
}

export interface MutateKeywordPlanAdGroupKeywordResult {
  readonly resource_name?: string;
}

export interface MutateKeywordPlanAdGroupKeywordsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<KeywordPlanAdGroupKeywordOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateKeywordPlanAdGroupKeywordsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateKeywordPlanAdGroupKeywordResult>;
}

export interface MutateKeywordPlanAdGroupResult {
  readonly resource_name?: string;
}

export interface MutateKeywordPlanAdGroupsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<KeywordPlanAdGroupOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateKeywordPlanAdGroupsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateKeywordPlanAdGroupResult>;
}

export interface MutateKeywordPlanCampaignKeywordResult {
  readonly resource_name?: string;
}

export interface MutateKeywordPlanCampaignKeywordsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<KeywordPlanCampaignKeywordOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateKeywordPlanCampaignKeywordsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateKeywordPlanCampaignKeywordResult>;
}

export interface MutateKeywordPlanCampaignResult {
  readonly resource_name?: string;
}

export interface MutateKeywordPlanCampaignsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<KeywordPlanCampaignOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateKeywordPlanCampaignsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateKeywordPlanCampaignResult>;
}

export interface MutateKeywordPlansRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<KeywordPlanOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateKeywordPlansResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateKeywordPlansResult>;
}

export interface MutateKeywordPlansResult {
  readonly resource_name?: string;
}

export interface MutateLabelResult {
  readonly resource_name?: string;
  readonly label?: Label;
}

export interface MutateLabelsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<LabelOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateLabelsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateLabelResult>;
}

export interface MutateOperation {
  readonly ad_group_ad_label_operation?: AdGroupAdLabelOperation;
  readonly ad_group_ad_operation?: AdGroupAdOperation;
  readonly ad_group_asset_operation?: AdGroupAssetOperation;
  readonly ad_group_bid_modifier_operation?: AdGroupBidModifierOperation;
  readonly ad_group_criterion_customizer_operation?: AdGroupCriterionCustomizerOperation;
  readonly ad_group_criterion_label_operation?: AdGroupCriterionLabelOperation;
  readonly ad_group_criterion_operation?: AdGroupCriterionOperation;
  readonly ad_group_customizer_operation?: AdGroupCustomizerOperation;
  readonly ad_group_label_operation?: AdGroupLabelOperation;
  readonly ad_group_operation?: AdGroupOperation;
  readonly ad_operation?: AdOperation;
  readonly ad_parameter_operation?: AdParameterOperation;
  readonly asset_operation?: AssetOperation;
  readonly asset_group_asset_operation?: AssetGroupAssetOperation;
  readonly asset_group_listing_group_filter_operation?: AssetGroupListingGroupFilterOperation;
  readonly asset_group_signal_operation?: AssetGroupSignalOperation;
  readonly asset_group_operation?: AssetGroupOperation;
  readonly asset_set_asset_operation?: AssetSetAssetOperation;
  readonly asset_set_operation?: AssetSetOperation;
  readonly audience_operation?: AudienceOperation;
  readonly bidding_data_exclusion_operation?: BiddingDataExclusionOperation;
  readonly bidding_seasonality_adjustment_operation?: BiddingSeasonalityAdjustmentOperation;
  readonly bidding_strategy_operation?: BiddingStrategyOperation;
  readonly book_campaigns_operation?: BookCampaignsOperation;
  readonly campaign_asset_operation?: CampaignAssetOperation;
  readonly campaign_asset_set_operation?: CampaignAssetSetOperation;
  readonly campaign_bid_modifier_operation?: CampaignBidModifierOperation;
  readonly campaign_budget_operation?: CampaignBudgetOperation;
  readonly campaign_conversion_goal_operation?: CampaignConversionGoalOperation;
  readonly campaign_criterion_operation?: CampaignCriterionOperation;
  readonly campaign_customizer_operation?: CampaignCustomizerOperation;
  readonly campaign_draft_operation?: CampaignDraftOperation;
  readonly campaign_group_operation?: CampaignGroupOperation;
  readonly campaign_label_operation?: CampaignLabelOperation;
  readonly campaign_operation?: CampaignOperation;
  readonly campaign_shared_set_operation?: CampaignSharedSetOperation;
  readonly conversion_action_operation?: ConversionActionOperation;
  readonly conversion_custom_variable_operation?: ConversionCustomVariableOperation;
  readonly conversion_goal_campaign_config_operation?: ConversionGoalCampaignConfigOperation;
  readonly conversion_value_rule_operation?: ConversionValueRuleOperation;
  readonly conversion_value_rule_set_operation?: ConversionValueRuleSetOperation;
  readonly custom_conversion_goal_operation?: CustomConversionGoalOperation;
  readonly customer_asset_operation?: CustomerAssetOperation;
  readonly customer_conversion_goal_operation?: CustomerConversionGoalOperation;
  readonly customer_customizer_operation?: CustomerCustomizerOperation;
  readonly customer_label_operation?: CustomerLabelOperation;
  readonly customer_negative_criterion_operation?: CustomerNegativeCriterionOperation;
  readonly customer_operation?: CustomerOperation;
  readonly customizer_attribute_operation?: CustomizerAttributeOperation;
  readonly experiment_operation?: ExperimentOperation;
  readonly experiment_arm_operation?: ExperimentArmOperation;
  readonly keyword_plan_ad_group_operation?: KeywordPlanAdGroupOperation;
  readonly keyword_plan_ad_group_keyword_operation?: KeywordPlanAdGroupKeywordOperation;
  readonly keyword_plan_campaign_keyword_operation?: KeywordPlanCampaignKeywordOperation;
  readonly keyword_plan_campaign_operation?: KeywordPlanCampaignOperation;
  readonly keyword_plan_operation?: KeywordPlanOperation;
  readonly label_operation?: LabelOperation;
  readonly quote_campaigns_operation?: QuoteCampaignsOperation;
  readonly recommendation_subscription_operation?: RecommendationSubscriptionOperation;
  readonly remarketing_action_operation?: RemarketingActionOperation;
  readonly shared_criterion_operation?: SharedCriterionOperation;
  readonly shared_set_operation?: SharedSetOperation;
  readonly smart_campaign_setting_operation?: SmartCampaignSettingOperation;
  readonly user_list_operation?: UserListOperation;
}

export interface MutateOperationResponse {
  readonly ad_group_ad_label_result?: MutateAdGroupAdLabelResult;
  readonly ad_group_ad_result?: MutateAdGroupAdResult;
  readonly ad_group_asset_result?: MutateAdGroupAssetResult;
  readonly ad_group_bid_modifier_result?: MutateAdGroupBidModifierResult;
  readonly ad_group_criterion_customizer_result?: MutateAdGroupCriterionCustomizerResult;
  readonly ad_group_criterion_label_result?: MutateAdGroupCriterionLabelResult;
  readonly ad_group_criterion_result?: MutateAdGroupCriterionResult;
  readonly ad_group_customizer_result?: MutateAdGroupCustomizerResult;
  readonly ad_group_label_result?: MutateAdGroupLabelResult;
  readonly ad_group_result?: MutateAdGroupResult;
  readonly ad_parameter_result?: MutateAdParameterResult;
  readonly ad_result?: MutateAdResult;
  readonly asset_result?: MutateAssetResult;
  readonly asset_group_asset_result?: MutateAssetGroupAssetResult;
  readonly asset_group_listing_group_filter_result?: MutateAssetGroupListingGroupFilterResult;
  readonly asset_group_signal_result?: MutateAssetGroupSignalResult;
  readonly asset_group_result?: MutateAssetGroupResult;
  readonly asset_set_asset_result?: MutateAssetSetAssetResult;
  readonly asset_set_result?: MutateAssetSetResult;
  readonly audience_result?: MutateAudienceResult;
  readonly bidding_data_exclusion_result?: MutateBiddingDataExclusionsResult;
  readonly bidding_seasonality_adjustment_result?: MutateBiddingSeasonalityAdjustmentsResult;
  readonly bidding_strategy_result?: MutateBiddingStrategyResult;
  readonly book_campaigns_result?: BookCampaignsResult;
  readonly campaign_asset_result?: MutateCampaignAssetResult;
  readonly campaign_asset_set_result?: MutateCampaignAssetSetResult;
  readonly campaign_bid_modifier_result?: MutateCampaignBidModifierResult;
  readonly campaign_budget_result?: MutateCampaignBudgetResult;
  readonly campaign_conversion_goal_result?: MutateCampaignConversionGoalResult;
  readonly campaign_criterion_result?: MutateCampaignCriterionResult;
  readonly campaign_customizer_result?: MutateCampaignCustomizerResult;
  readonly campaign_draft_result?: MutateCampaignDraftResult;
  readonly campaign_group_result?: MutateCampaignGroupResult;
  readonly campaign_label_result?: MutateCampaignLabelResult;
  readonly campaign_result?: MutateCampaignResult;
  readonly campaign_shared_set_result?: MutateCampaignSharedSetResult;
  readonly conversion_action_result?: MutateConversionActionResult;
  readonly conversion_custom_variable_result?: MutateConversionCustomVariableResult;
  readonly conversion_goal_campaign_config_result?: MutateConversionGoalCampaignConfigResult;
  readonly conversion_value_rule_result?: MutateConversionValueRuleResult;
  readonly conversion_value_rule_set_result?: MutateConversionValueRuleSetResult;
  readonly custom_conversion_goal_result?: MutateCustomConversionGoalResult;
  readonly customer_asset_result?: MutateCustomerAssetResult;
  readonly customer_conversion_goal_result?: MutateCustomerConversionGoalResult;
  readonly customer_customizer_result?: MutateCustomerCustomizerResult;
  readonly customer_label_result?: MutateCustomerLabelResult;
  readonly customer_negative_criterion_result?: MutateCustomerNegativeCriteriaResult;
  readonly customer_result?: MutateCustomerResult;
  readonly customizer_attribute_result?: MutateCustomizerAttributeResult;
  readonly experiment_result?: MutateExperimentResult;
  readonly experiment_arm_result?: MutateExperimentArmResult;
  readonly keyword_plan_ad_group_result?: MutateKeywordPlanAdGroupResult;
  readonly keyword_plan_campaign_result?: MutateKeywordPlanCampaignResult;
  readonly keyword_plan_ad_group_keyword_result?: MutateKeywordPlanAdGroupKeywordResult;
  readonly keyword_plan_campaign_keyword_result?: MutateKeywordPlanCampaignKeywordResult;
  readonly keyword_plan_result?: MutateKeywordPlansResult;
  readonly label_result?: MutateLabelResult;
  readonly quote_campaigns_result?: QuoteCampaignsResult;
  readonly recommendation_subscription_result?: MutateRecommendationSubscriptionResult;
  readonly remarketing_action_result?: MutateRemarketingActionResult;
  readonly shared_criterion_result?: MutateSharedCriterionResult;
  readonly shared_set_result?: MutateSharedSetResult;
  readonly smart_campaign_setting_result?: MutateSmartCampaignSettingResult;
  readonly user_list_result?: MutateUserListResult;
}

export interface MutateRecommendationSubscriptionRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<RecommendationSubscriptionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateRecommendationSubscriptionResponse {
  readonly results?: ReadonlyArray<MutateRecommendationSubscriptionResult>;
  readonly partial_failure_error?: unknown;
}

export interface MutateRecommendationSubscriptionResult {
  readonly resource_name?: string;
  readonly recommendation_subscription?: RecommendationSubscription;
}

export interface MutateRemarketingActionResult {
  readonly resource_name?: string;
}

export interface MutateRemarketingActionsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<RemarketingActionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateRemarketingActionsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateRemarketingActionResult>;
}

export interface MutateSharedCriteriaRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<SharedCriterionOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateSharedCriteriaResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateSharedCriterionResult>;
}

export interface MutateSharedCriterionResult {
  readonly resource_name?: string;
  readonly shared_criterion?: SharedCriterion;
}

export interface MutateSharedSetResult {
  readonly resource_name?: string;
  readonly shared_set?: SharedSet;
}

export interface MutateSharedSetsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<SharedSetOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateSharedSetsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateSharedSetResult>;
}

export interface MutateSmartCampaignSettingResult {
  readonly resource_name?: string;
  readonly smart_campaign_setting?: SmartCampaignSetting;
}

export interface MutateSmartCampaignSettingsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<SmartCampaignSettingOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly response_content_type?: ResponseContentType;
}

export interface MutateSmartCampaignSettingsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateSmartCampaignSettingResult>;
}

export interface MutateUserListCustomerTypeResult {
  readonly resource_name?: string;
}

export interface MutateUserListCustomerTypesRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<UserListCustomerTypeOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateUserListCustomerTypesResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateUserListCustomerTypeResult>;
}

export interface MutateUserListResult {
  readonly resource_name?: string;
}

export interface MutateUserListsRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<UserListOperation>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface MutateUserListsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<MutateUserListResult>;
}

export type NegativeGeoTargetType = "UNSPECIFIED" | "UNKNOWN" | "PRESENCE_OR_INTEREST" | "PRESENCE";

export interface NegativeGeoTargetTypeEnum {

}

export interface NegativeKeywordListInfo {
  readonly shared_set?: string;
}

export interface NetworkSettings {
  readonly target_google_search?: boolean;
  readonly target_search_network?: boolean;
  readonly target_content_network?: boolean;
  readonly target_partner_search_network?: boolean;
  readonly target_youtube?: boolean;
  readonly target_google_tv_network?: boolean;
}

export interface NewCustomerAcquisitionGoal {
  readonly value_settings?: CustomerLifecycleOptimizationValueSettings;
}

export type NewResourceCreationError = "UNSPECIFIED" | "UNKNOWN" | "CANNOT_SET_ID_FOR_CREATE" | "DUPLICATE_TEMP_IDS" | "TEMP_ID_RESOURCE_HAD_ERRORS";

export interface NewResourceCreationErrorEnum {

}

export interface NonSkippableInStreamRestrictions {
  readonly min_duration?: NonSkippableMinDuration;
  readonly max_duration?: NonSkippableMaxDuration;
}

export type NonSkippableMaxDuration = "UNSPECIFIED" | "UNKNOWN" | "MAX_DURATION_FIFTEEN_SECONDS" | "MAX_DURATION_THIRTY_SECONDS" | "MAX_DURATION_SIXTY_SECONDS";

export interface NonSkippableMaxDurationEnum {

}

export type NonSkippableMinDuration = "UNSPECIFIED" | "UNKNOWN" | "MIN_DURATION_FIVE_SECONDS" | "MIN_DURATION_SEVEN_SECONDS" | "MIN_DURATION_SIXTEEN_SECONDS" | "MIN_DURATION_THIRTY_ONE_SECONDS";

export interface NonSkippableMinDurationEnum {

}

export type NotAllowlistedError = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE";

export interface NotAllowlistedErrorEnum {

}

export interface Note {
  readonly edit_date_time?: string;
  readonly description?: string;
}

export type NotEmptyError = "UNSPECIFIED" | "UNKNOWN" | "EMPTY_LIST";

export interface NotEmptyErrorEnum {

}

export type NullError = "UNSPECIFIED" | "UNKNOWN" | "NULL_CONTENT";

export interface NullErrorEnum {

}

export type OfferType = "UNSPECIFIED" | "UNKNOWN" | "NO_INCENTIVE" | "CYO_INCENTIVE";

export interface OfflineConversionAlert {
  readonly error?: OfflineConversionError;
  readonly error_percentage?: number;
}

export type OfflineConversionDiagnosticStatus = "UNSPECIFIED" | "UNKNOWN" | "EXCELLENT" | "GOOD" | "NEEDS_ATTENTION" | "NO_RECENT_UPLOAD";

export interface OfflineConversionDiagnosticStatusEnum {

}

export interface OfflineConversionError {
  readonly collection_size_error?: CollectionSizeError;
  readonly conversion_adjustment_upload_error?: ConversionAdjustmentUploadError;
  readonly conversion_upload_error?: ConversionUploadError;
  readonly date_error?: DateError;
  readonly distinct_error?: DistinctError;
  readonly field_error?: FieldError;
  readonly mutate_error?: MutateError;
  readonly not_allowlisted_error?: NotAllowlistedError;
  readonly string_format_error?: StringFormatError;
  readonly string_length_error?: StringLengthError;
}

export interface OfflineConversionSummary {
  readonly successful_count?: string;
  readonly failed_count?: string;
  readonly pending_count?: string;
  readonly job_id?: string;
  readonly upload_date?: string;
}

export interface OfflineConversionUploadClientSummary {
  readonly resource_name?: string;
  readonly client?: OfflineEventUploadClient;
  readonly status?: OfflineConversionDiagnosticStatus;
  readonly total_event_count?: string;
  readonly successful_event_count?: string;
  readonly success_rate?: number;
  readonly pending_event_count?: string;
  readonly pending_rate?: number;
  readonly last_upload_date_time?: string;
  readonly daily_summaries?: ReadonlyArray<OfflineConversionSummary>;
  readonly job_summaries?: ReadonlyArray<OfflineConversionSummary>;
  readonly alerts?: ReadonlyArray<OfflineConversionAlert>;
}

export interface OfflineConversionUploadConversionActionSummary {
  readonly resource_name?: string;
  readonly client?: OfflineEventUploadClient;
  readonly conversion_action_id?: string;
  readonly conversion_action_name?: string;
  readonly status?: OfflineConversionDiagnosticStatus;
  readonly total_event_count?: string;
  readonly successful_event_count?: string;
  readonly pending_event_count?: string;
  readonly last_upload_date_time?: string;
  readonly daily_summaries?: ReadonlyArray<OfflineConversionSummary>;
  readonly job_summaries?: ReadonlyArray<OfflineConversionSummary>;
  readonly alerts?: ReadonlyArray<OfflineConversionAlert>;
}

export type OfflineEventUploadClient = "UNSPECIFIED" | "UNKNOWN" | "GOOGLE_ADS_API" | "GOOGLE_ADS_WEB_CLIENT" | "ADS_DATA_CONNECTOR";

export interface OfflineEventUploadClientEnum {

}

export interface OfflineUserAddressInfo {
  readonly hashed_first_name?: string;
  readonly hashed_last_name?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country_code?: string;
  readonly postal_code?: string;
  readonly hashed_street_address?: string;
}

export interface OfflineUserDataJob {
  readonly resource_name?: string;
  readonly id?: string;
  readonly external_id?: string;
  readonly type?: OfflineUserDataJobType;
  readonly status?: OfflineUserDataJobStatus;
  readonly failure_reason?: OfflineUserDataJobFailureReason;
  readonly operation_metadata?: OfflineUserDataJobMetadata;
  readonly customer_match_user_list_metadata?: CustomerMatchUserListMetadata;
  readonly store_sales_metadata?: StoreSalesMetadata;
}

export type OfflineUserDataJobError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_USER_LIST_ID" | "INVALID_USER_LIST_TYPE" | "NOT_ON_ALLOWLIST_FOR_USER_ID" | "INCOMPATIBLE_UPLOAD_KEY_TYPE" | "MISSING_USER_IDENTIFIER" | "INVALID_MOBILE_ID_FORMAT" | "TOO_MANY_USER_IDENTIFIERS" | "NOT_ON_ALLOWLIST_FOR_STORE_SALES_DIRECT" | "NOT_ON_ALLOWLIST_FOR_UNIFIED_STORE_SALES" | "INVALID_PARTNER_ID" | "INVALID_ENCODING" | "INVALID_COUNTRY_CODE" | "INCOMPATIBLE_USER_IDENTIFIER" | "FUTURE_TRANSACTION_TIME" | "INVALID_CONVERSION_ACTION" | "MOBILE_ID_NOT_SUPPORTED" | "INVALID_OPERATION_ORDER" | "CONFLICTING_OPERATION" | "EXTERNAL_UPDATE_ID_ALREADY_EXISTS" | "JOB_ALREADY_STARTED" | "REMOVE_NOT_SUPPORTED" | "REMOVE_ALL_NOT_SUPPORTED" | "INVALID_SHA256_FORMAT" | "CUSTOM_KEY_DISABLED" | "CUSTOM_KEY_NOT_PREDEFINED" | "CUSTOM_KEY_NOT_SET" | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS" | "ATTRIBUTES_NOT_APPLICABLE_FOR_CUSTOMER_MATCH_USER_LIST" | "LIFETIME_VALUE_BUCKET_NOT_IN_RANGE" | "INCOMPATIBLE_USER_IDENTIFIER_FOR_ATTRIBUTES" | "FUTURE_TIME_NOT_ALLOWED" | "LAST_PURCHASE_TIME_LESS_THAN_ACQUISITION_TIME" | "CUSTOMER_IDENTIFIER_NOT_ALLOWED" | "INVALID_ITEM_ID" | "FIRST_PURCHASE_TIME_GREATER_THAN_LAST_PURCHASE_TIME" | "INVALID_LIFECYCLE_STAGE" | "INVALID_EVENT_VALUE" | "EVENT_ATTRIBUTE_ALL_FIELDS_ARE_REQUIRED" | "OPERATION_LEVEL_CONSENT_PROVIDED";

export interface OfflineUserDataJobErrorEnum {

}

export type OfflineUserDataJobFailureReason = "UNSPECIFIED" | "UNKNOWN" | "INSUFFICIENT_MATCHED_TRANSACTIONS" | "INSUFFICIENT_TRANSACTIONS" | "HIGH_AVERAGE_TRANSACTION_VALUE" | "LOW_AVERAGE_TRANSACTION_VALUE" | "NEWLY_OBSERVED_CURRENCY_CODE";

export interface OfflineUserDataJobFailureReasonEnum {

}

export type OfflineUserDataJobMatchRateRange = "UNSPECIFIED" | "UNKNOWN" | "MATCH_RANGE_LESS_THAN_20" | "MATCH_RANGE_20_TO_30" | "MATCH_RANGE_31_TO_40" | "MATCH_RANGE_41_TO_50" | "MATCH_RANGE_51_TO_60" | "MATCH_RANGE_61_TO_70" | "MATCH_RANGE_71_TO_80" | "MATCH_RANGE_81_TO_90" | "MATCH_RANGE_91_TO_100";

export interface OfflineUserDataJobMatchRateRangeEnum {

}

export interface OfflineUserDataJobMetadata {
  readonly match_rate_range?: OfflineUserDataJobMatchRateRange;
}

export interface OfflineUserDataJobOperation {
  readonly create?: UserData;
  readonly remove?: UserData;
  readonly remove_all?: boolean;
}

export type OfflineUserDataJobStatus = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "RUNNING" | "SUCCESS" | "FAILED";

export interface OfflineUserDataJobStatusEnum {

}

export type OfflineUserDataJobType = "UNSPECIFIED" | "UNKNOWN" | "STORE_SALES_UPLOAD_FIRST_PARTY" | "STORE_SALES_UPLOAD_THIRD_PARTY" | "CUSTOMER_MATCH_USER_LIST" | "CUSTOMER_MATCH_WITH_ATTRIBUTES";

export interface OfflineUserDataJobTypeEnum {

}

export interface OnTargetAudienceMetrics {
  readonly youtube_audience_size?: string;
  readonly census_audience_size?: string;
}

export interface OperatingSystemVersionConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly os_major_version?: number;
  readonly os_minor_version?: number;
  readonly operator_type?: OperatingSystemVersionOperatorType;
}

export interface OperatingSystemVersionInfo {
  readonly operating_system_version_constant?: string;
}

export type OperatingSystemVersionOperatorType = "UNSPECIFIED" | "UNKNOWN" | "EQUALS_TO" | "GREATER_THAN_EQUALS_TO";

export interface OperatingSystemVersionOperatorTypeEnum {

}

export type OperationAccessDeniedError = "UNSPECIFIED" | "UNKNOWN" | "ACTION_NOT_PERMITTED" | "CREATE_OPERATION_NOT_PERMITTED" | "REMOVE_OPERATION_NOT_PERMITTED" | "UPDATE_OPERATION_NOT_PERMITTED" | "MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT" | "OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE" | "CREATE_AS_REMOVED_NOT_PERMITTED" | "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE" | "OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE" | "MUTATE_NOT_PERMITTED_FOR_CUSTOMER";

export interface OperationAccessDeniedErrorEnum {

}

export type Operator = "UNSPECIFIED" | "UNKNOWN" | "ADD" | "REMOVE";

export type OperatorError = "UNSPECIFIED" | "UNKNOWN" | "OPERATOR_NOT_SUPPORTED";

export interface OperatorErrorEnum {

}

export interface OptimizationGoalSetting {
  readonly optimization_goal_types?: ReadonlyArray<OptimizationGoalType>;
}

export type OptimizationGoalType = "UNSPECIFIED" | "UNKNOWN" | "CALL_CLICKS" | "DRIVING_DIRECTIONS" | "APP_PRE_REGISTRATION";

export interface OptimizationGoalTypeEnum {

}

export interface OptimizeAdRotationRecommendation {

}

export interface OptimizeAssetsExperimentInfo {
  readonly optimize_assets_experiment_subtype?: OptimizeAssetsExperimentSubtype;
}

export type OptimizeAssetsExperimentSubtype = "UNSPECIFIED" | "UNKNOWN" | "ADD_ASSETS_TO_ASSETLESS_RETAIL" | "ADD_VIDEO_ASSETS_TO_VIDEOLESS" | "COMPARE_ASSETS";

export interface OptimizeAssetsExperimentSubtypeEnum {

}

export interface PageFeedAsset {
  readonly page_url?: string;
  readonly labels?: ReadonlyArray<string>;
}

export interface PaidOrganicSearchTermView {
  readonly resource_name?: string;
  readonly search_term?: string;
}

export interface ParentalStatusDimension {
  readonly parental_statuses?: ReadonlyArray<ParentalStatusType>;
  readonly include_undetermined?: boolean;
}

export interface ParentalStatusInfo {
  readonly type?: ParentalStatusType;
}

export type ParentalStatusType = "UNSPECIFIED" | "UNKNOWN" | "PARENT" | "NOT_A_PARENT" | "UNDETERMINED";

export interface ParentalStatusTypeEnum {

}

export interface ParentalStatusView {
  readonly resource_name?: string;
}

export type PartialFailureError = "UNSPECIFIED" | "UNKNOWN" | "PARTIAL_FAILURE_MODE_REQUIRED";

export interface PartialFailureErrorEnum {

}

export type ParticipantType = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER" | "CONSUMER";

export type PartnershipOpportunity = "UNSPECIFIED" | "UNKNOWN" | "CREATOR_PARTNERSHIPS" | "CREATOR_TAKEOVER" | "PARTNERSHIP_ADS" | "YOUTUBE_SELECT_LINEUPS";

export interface PartnershipOpportunityEnum {

}

export type PaymentMode = "UNSPECIFIED" | "UNKNOWN" | "CLICKS" | "CONVERSION_VALUE" | "CONVERSIONS" | "GUEST_STAY";

export interface PaymentModeEnum {

}

export interface PaymentsAccount {
  readonly resource_name?: string;
  readonly payments_account_id?: string;
  readonly name?: string;
  readonly currency_code?: string;
  readonly payments_profile_id?: string;
  readonly secondary_payments_profile_id?: string;
  readonly paying_manager_customer?: string;
}

export type PaymentsAccountError = "UNSPECIFIED" | "UNKNOWN" | "NOT_SUPPORTED_FOR_MANAGER_CUSTOMER";

export interface PaymentsAccountErrorEnum {

}

export interface PaymentsAccountInfo {
  readonly payments_account_id?: string;
  readonly payments_account_name?: string;
  readonly payments_profile_id?: string;
  readonly payments_profile_name?: string;
  readonly secondary_payments_profile_id?: string;
}

export interface PendingAccountBudgetProposal {
  readonly account_budget_proposal?: string;
  readonly proposal_type?: AccountBudgetProposalType;
  readonly name?: string;
  readonly start_date_time?: string;
  readonly purchase_order_number?: string;
  readonly notes?: string;
  readonly creation_date_time?: string;
  readonly end_date_time?: string;
  readonly end_time_type?: TimeType;
  readonly spending_limit_micros?: string;
  readonly spending_limit_type?: SpendingLimitType;
}

export interface PercentCpc {
  readonly cpc_bid_ceiling_micros?: string;
  readonly enhanced_cpc_enabled?: boolean;
}

export interface PercentCpcBidSimulationPoint {
  readonly percent_cpc_bid_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
}

export interface PercentCpcBidSimulationPointList {
  readonly points?: ReadonlyArray<PercentCpcBidSimulationPoint>;
}

export interface PerformanceMaxExperimentArmInfo {
  readonly experimental_performance_max_campaign_settings?: ExperimentalPerformanceMaxCampaignSettings;
}

export interface PerformanceMaxFinalUrlOptInRecommendation {

}

export interface PerformanceMaxOptInRecommendation {

}

export interface PerformanceMaxPlacementView {
  readonly resource_name?: string;
  readonly placement?: string;
  readonly display_name?: string;
  readonly target_url?: string;
  readonly placement_type?: PlacementType;
}

export interface PerformanceMaxUpgrade {
  readonly performance_max_campaign?: string;
  readonly pre_upgrade_campaign?: string;
  readonly status?: PerformanceMaxUpgradeStatus;
}

export type PerformanceMaxUpgradeStatus = "UNSPECIFIED" | "UNKNOWN" | "UPGRADE_IN_PROGRESS" | "UPGRADE_COMPLETE" | "UPGRADE_FAILED" | "UPGRADE_ELIGIBLE";

export interface PerformanceMaxUpgradeStatusEnum {

}

export interface PerStoreView {
  readonly resource_name?: string;
  readonly place_id?: string;
  readonly address1?: string;
  readonly address2?: string;
  readonly business_name?: string;
  readonly city?: string;
  readonly country_code?: string;
  readonly phone_number?: string;
  readonly postal_code?: string;
  readonly province?: string;
}

export interface PhoneCallDetails {
  readonly call_duration_millis?: string;
  readonly call_recording_url?: string;
}

export interface PhoneNumber {
  readonly phone_number?: string;
  readonly country_code?: string;
}

export interface PlacementInfo {
  readonly url?: string;
}

export interface PlacementListInfo {
  readonly shared_set?: string;
}

export type PlacementType = "UNSPECIFIED" | "UNKNOWN" | "WEBSITE" | "MOBILE_APP_CATEGORY" | "MOBILE_APPLICATION" | "YOUTUBE_VIDEO" | "YOUTUBE_CHANNEL" | "GOOGLE_PRODUCTS";

export interface PlacementTypeEnum {

}

export interface PlannableLocation {
  readonly id?: string;
  readonly name?: string;
  readonly parent_country_id?: string;
  readonly country_code?: string;
  readonly location_type?: string;
}

export interface PlannableTargeting {
  readonly age_ranges?: ReadonlyArray<ReachPlanAgeRange>;
  readonly genders?: ReadonlyArray<GenderInfo>;
  readonly devices?: ReadonlyArray<DeviceInfo>;
  readonly networks?: ReadonlyArray<ReachPlanNetwork>;
  readonly youtube_select_lineup_targeting?: YouTubeSelectLineUpTargeting;
  readonly surface_targeting?: SurfaceTargetingCombinations;
}

export interface PlannableUserInterest {
  readonly user_interest?: UserInterestInfo;
  readonly user_interest_type?: UserInterestTaxonomyType;
  readonly user_interest_display_name?: string;
  readonly user_interest_path?: string;
}

export interface PlannableUserList {
  readonly user_list_info?: UserListInfo;
  readonly display_name?: string;
  readonly user_list_type?: UserListType;
  readonly plannable_status?: ReachPlanPlannableUserListStatus;
  readonly plannable_user_list_metadata?: PlannableUserListMetadata;
}

export interface PlannableUserListMetadata {
  readonly user_list_crm_data_source_type?: UserListCrmDataSourceType;
}

export interface PlannedProduct {
  readonly plannable_product_code?: string;
  readonly budget_micros?: string;
  readonly conversion_rate?: number;
  readonly advanced_product_targeting?: AdvancedProductTargeting;
}

export interface PlannedProductForecast {
  readonly on_target_reach?: string;
  readonly total_reach?: string;
  readonly on_target_impressions?: string;
  readonly total_impressions?: string;
  readonly viewable_impressions?: string;
  readonly on_target_coview_reach?: string;
  readonly total_coview_reach?: string;
  readonly on_target_coview_impressions?: string;
  readonly total_coview_impressions?: string;
  readonly average_frequency?: number;
  readonly conversions?: number;
  readonly trueview_views?: string;
  readonly clicks?: string;
}

export interface PlannedProductReachForecast {
  readonly plannable_product_code?: string;
  readonly cost_micros?: string;
  readonly planned_product_forecast?: PlannedProductForecast;
}

export interface PmaxCampaignSettings {
  readonly brand_targeting_overrides?: BrandTargetingOverrides;
  readonly local_services_pmax_campaign_settings?: LocalServicesPmaxCampaignSettings;
  readonly local_services_enabled?: boolean;
}

export type PolicyApprovalStatus = "UNSPECIFIED" | "UNKNOWN" | "DISAPPROVED" | "APPROVED_LIMITED" | "APPROVED" | "AREA_OF_INTEREST_ONLY";

export interface PolicyApprovalStatusEnum {

}

export interface PolicyFindingDetails {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
}

export type PolicyFindingError = "UNSPECIFIED" | "UNKNOWN" | "POLICY_FINDING" | "POLICY_TOPIC_NOT_FOUND";

export interface PolicyFindingErrorEnum {

}

export type PolicyReviewStatus = "UNSPECIFIED" | "UNKNOWN" | "REVIEW_IN_PROGRESS" | "REVIEWED" | "UNDER_APPEAL" | "ELIGIBLE_MAY_SERVE";

export interface PolicyReviewStatusEnum {

}

export interface PolicySummary {
  readonly policy_topic_entries?: ReadonlyArray<PolicyTopicEntry>;
  readonly review_status?: PolicyReviewStatus;
  readonly approval_status?: PolicyApprovalStatus;
}

export interface PolicyTopicConstraint {
  readonly country_constraint_list?: CountryConstraintList;
  readonly reseller_constraint?: ResellerConstraint;
  readonly certificate_missing_in_country_list?: CountryConstraintList;
  readonly certificate_domain_mismatch_in_country_list?: CountryConstraintList;
}

export interface PolicyTopicEntry {
  readonly topic?: string;
  readonly type?: PolicyTopicEntryType;
  readonly evidences?: ReadonlyArray<PolicyTopicEvidence>;
  readonly constraints?: ReadonlyArray<PolicyTopicConstraint>;
}

export type PolicyTopicEntryType = "UNSPECIFIED" | "UNKNOWN" | "PROHIBITED" | "LIMITED" | "FULLY_LIMITED" | "DESCRIPTIVE" | "BROADENING" | "AREA_OF_INTEREST_ONLY";

export interface PolicyTopicEntryTypeEnum {

}

export interface PolicyTopicEvidence {
  readonly website_list?: WebsiteList;
  readonly text_list?: TextList;
  readonly language_code?: string;
  readonly destination_text_list?: DestinationTextList;
  readonly destination_mismatch?: DestinationMismatch;
  readonly destination_not_working?: DestinationNotWorking;
}

export type PolicyTopicEvidenceDestinationMismatchUrlType = "UNSPECIFIED" | "UNKNOWN" | "DISPLAY_URL" | "FINAL_URL" | "FINAL_MOBILE_URL" | "TRACKING_URL" | "MOBILE_TRACKING_URL";

export interface PolicyTopicEvidenceDestinationMismatchUrlTypeEnum {

}

export type PolicyTopicEvidenceDestinationNotWorkingDevice = "UNSPECIFIED" | "UNKNOWN" | "DESKTOP" | "ANDROID" | "IOS";

export interface PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {

}

export type PolicyTopicEvidenceDestinationNotWorkingDnsErrorType = "UNSPECIFIED" | "UNKNOWN" | "HOSTNAME_NOT_FOUND" | "GOOGLE_CRAWLER_DNS_ISSUE";

export interface PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {

}

export interface PolicyValidationParameter {
  readonly ignorable_policy_topics?: ReadonlyArray<string>;
  readonly exempt_policy_violation_keys?: ReadonlyArray<PolicyViolationKey>;
}

export type PolicyValidationParameterError = "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS" | "UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS" | "CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS";

export interface PolicyValidationParameterErrorEnum {

}

export interface PolicyViolationDetails {
  readonly external_policy_description?: string;
  readonly key?: PolicyViolationKey;
  readonly external_policy_name?: string;
  readonly is_exemptible?: boolean;
}

export type PolicyViolationError = "UNSPECIFIED" | "UNKNOWN" | "POLICY_ERROR";

export interface PolicyViolationErrorEnum {

}

export interface PolicyViolationKey {
  readonly policy_name?: string;
  readonly violating_text?: string;
}

export interface PositionEstimates {
  readonly first_page_cpc_micros?: string;
  readonly first_position_cpc_micros?: string;
  readonly top_of_page_cpc_micros?: string;
  readonly estimated_add_clicks_at_first_position_cpc?: string;
  readonly estimated_add_cost_at_first_position_cpc?: string;
}

export type PositiveGeoTargetType = "UNSPECIFIED" | "UNKNOWN" | "PRESENCE_OR_INTEREST" | "SEARCH_INTEREST" | "PRESENCE";

export interface PositiveGeoTargetTypeEnum {

}

export interface PostbackMapping {
  readonly postback_sequence_index?: number;
  readonly coarse_grained_conversion_value_mappings?: CoarseGrainedConversionValueMappings;
  readonly lock_window_coarse_conversion_value?: SkAdNetworkCoarseConversionValue;
  readonly lock_window_fine_conversion_value?: number;
  readonly lock_window_event?: string;
}

export type PreviewType = "UNSPECIFIED" | "UNKNOWN" | "UI_PREVIEW" | "YOUTUBE_LIVE_PREVIEW";

export interface PreviewTypeEnum {

}

export interface PriceAsset {
  readonly type?: PriceExtensionType;
  readonly price_qualifier?: PriceExtensionPriceQualifier;
  readonly language_code?: string;
  readonly price_offerings?: ReadonlyArray<PriceOffering>;
}

export type PriceExtensionPriceQualifier = "UNSPECIFIED" | "UNKNOWN" | "FROM" | "UP_TO" | "AVERAGE";

export interface PriceExtensionPriceQualifierEnum {

}

export type PriceExtensionPriceUnit = "UNSPECIFIED" | "UNKNOWN" | "PER_HOUR" | "PER_DAY" | "PER_WEEK" | "PER_MONTH" | "PER_YEAR" | "PER_NIGHT";

export interface PriceExtensionPriceUnitEnum {

}

export type PriceExtensionType = "UNSPECIFIED" | "UNKNOWN" | "BRANDS" | "EVENTS" | "LOCATIONS" | "NEIGHBORHOODS" | "PRODUCT_CATEGORIES" | "PRODUCT_TIERS" | "SERVICES" | "SERVICE_CATEGORIES" | "SERVICE_TIERS";

export interface PriceExtensionTypeEnum {

}

export interface PriceOffering {
  readonly header?: string;
  readonly description?: string;
  readonly price?: Money;
  readonly unit?: PriceExtensionPriceUnit;
  readonly final_url?: string;
  readonly final_mobile_url?: string;
}

export type ProductAvailability = "UNSPECIFIED" | "UNKNOWN" | "IN_STOCK" | "OUT_OF_STOCK" | "PREORDER";

export interface ProductAvailabilityEnum {

}

export interface ProductBrand {
  readonly value?: string;
}

export interface ProductBrandInfo {
  readonly value?: string;
}

export interface ProductCategory {
  readonly category_id?: string;
  readonly level?: ListingGroupFilterProductCategoryLevel;
}

export interface ProductCategoryConstant {
  readonly resource_name?: string;
  readonly category_id?: string;
  readonly product_category_constant_parent?: string;
  readonly level?: ProductCategoryLevel;
  readonly state?: ProductCategoryState;
  readonly localizations?: ReadonlyArray<ProductCategoryLocalization>;
}

export interface ProductCategoryInfo {
  readonly category_id?: string;
  readonly level?: ProductCategoryLevel;
}

export type ProductCategoryLevel = "UNSPECIFIED" | "UNKNOWN" | "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5";

export interface ProductCategoryLevelEnum {

}

export interface ProductCategoryLocalization {
  readonly region_code?: string;
  readonly language_code?: string;
  readonly value?: string;
}

export type ProductCategoryState = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "OBSOLETE";

export interface ProductCategoryStateEnum {

}

export type ProductChannel = "UNSPECIFIED" | "UNKNOWN" | "ONLINE" | "LOCAL";

export interface ProductChannelEnum {

}

export type ProductChannelExclusivity = "UNSPECIFIED" | "UNKNOWN" | "SINGLE_CHANNEL" | "MULTI_CHANNEL";

export interface ProductChannelExclusivityEnum {

}

export interface ProductChannelExclusivityInfo {
  readonly channel_exclusivity?: ProductChannelExclusivity;
}

export interface ProductChannelInfo {
  readonly channel?: ProductChannel;
}

export type ProductCondition = "UNSPECIFIED" | "UNKNOWN" | "NEW" | "REFURBISHED" | "USED";

export interface ProductConditionEnum {

}

export interface ProductConditionInfo {
  readonly condition?: ProductCondition;
}

export interface ProductCoreAttributes {
  readonly marketing_objective?: ReachPlanMarketingObjective;
  readonly cost_model?: ReachPlanCostModel;
  readonly buying_method?: ReachPlanBuyingMethod;
}

export interface ProductCustomAttribute {
  readonly value?: string;
  readonly index?: ListingGroupFilterCustomAttributeIndex;
}

export type ProductCustomAttributeIndex = "UNSPECIFIED" | "UNKNOWN" | "INDEX0" | "INDEX1" | "INDEX2" | "INDEX3" | "INDEX4";

export interface ProductCustomAttributeIndexEnum {

}

export interface ProductCustomAttributeInfo {
  readonly value?: string;
  readonly index?: ProductCustomAttributeIndex;
}

export interface ProductFilter {
  readonly product_list?: ProductList;
  readonly marketing_objective_list?: MarketingObjectiveList;
}

export interface ProductGroupingInfo {
  readonly value?: string;
}

export interface ProductGroupView {
  readonly resource_name?: string;
}

export interface ProductIssue {
  readonly error_code?: string;
  readonly ads_severity?: ProductIssueSeverity;
  readonly attribute_name?: string;
  readonly description?: string;
  readonly detail?: string;
  readonly documentation?: string;
  readonly affected_regions?: ReadonlyArray<string>;
}

export type ProductIssueSeverity = "UNSPECIFIED" | "UNKNOWN" | "WARNING" | "ERROR";

export interface ProductIssueSeverityEnum {

}

export interface ProductItemId {
  readonly value?: string;
}

export interface ProductItemIdInfo {
  readonly value?: string;
}

export interface ProductLabelsInfo {
  readonly value?: string;
}

export interface ProductLegacyConditionInfo {
  readonly value?: string;
}

export interface ProductLink {
  readonly resource_name?: string;
  readonly product_link_id?: string;
  readonly type?: LinkedProductType;
  readonly data_partner?: DataPartnerIdentifier;
  readonly google_ads?: GoogleAdsIdentifier;
  readonly merchant_center?: MerchantCenterIdentifier;
  readonly advertising_partner?: AdvertisingPartnerIdentifier;
  readonly advertising_partner_properties?: AdvertisingPartnerProperties;
}

export type ProductLinkError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_OPERATION" | "CREATION_NOT_PERMITTED" | "INVITATION_EXISTS" | "LINK_EXISTS";

export interface ProductLinkErrorEnum {

}

export interface ProductLinkInvitation {
  readonly resource_name?: string;
  readonly product_link_invitation_id?: string;
  readonly status?: ProductLinkInvitationStatus;
  readonly type?: LinkedProductType;
  readonly hotel_center?: HotelCenterLinkInvitationIdentifier;
  readonly merchant_center?: MerchantCenterLinkInvitationIdentifier;
  readonly advertising_partner?: AdvertisingPartnerLinkInvitationIdentifier;
  readonly advertising_partner_properties?: AdvertisingPartnerLinkInvitationProperties;
}

export type ProductLinkInvitationError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_STATUS" | "PERMISSION_DENIED" | "NO_INVITATION_REQUIRED" | "CUSTOMER_NOT_PERMITTED_TO_CREATE_INVITATION" | "INVALID_ADVERTISING_PARTNER_ALLOWED_DOMAIN";

export interface ProductLinkInvitationErrorEnum {

}

export type ProductLinkInvitationStatus = "UNSPECIFIED" | "UNKNOWN" | "ACCEPTED" | "REQUESTED" | "PENDING_APPROVAL" | "REVOKED" | "REJECTED" | "EXPIRED";

export interface ProductLinkInvitationStatusEnum {

}

export interface ProductList {
  readonly product_codes?: ReadonlyArray<string>;
}

export interface ProductMetadata {
  readonly plannable_product_code?: string;
  readonly plannable_product_name?: string;
  readonly plannable_product_description?: string;
  readonly plannable_product_core_attributes?: ProductCoreAttributes;
  readonly plannable_targeting?: PlannableTargeting;
}

export interface ProductRecontextGenerationImageInput {
  readonly prompt?: string;
  readonly source_images?: ReadonlyArray<SourceImage>;
}

export type ProductStatus = "UNSPECIFIED" | "UNKNOWN" | "NOT_ELIGIBLE" | "ELIGIBLE_LIMITED" | "ELIGIBLE";

export interface ProductStatusEnum {

}

export interface ProductType {
  readonly value?: string;
  readonly level?: ListingGroupFilterProductTypeLevel;
}

export interface ProductTypeFullInfo {
  readonly value?: string;
}

export interface ProductTypeInfo {
  readonly value?: string;
  readonly level?: ProductTypeLevel;
}

export type ProductTypeLevel = "UNSPECIFIED" | "UNKNOWN" | "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5";

export interface ProductTypeLevelEnum {

}

export interface PromoteCampaignDraftRequest {
  readonly campaign_draft?: string;
  readonly validate_only?: boolean;
}

export interface PromoteExperimentMetadata {
  readonly experiment?: string;
}

export interface PromoteExperimentRequest {
  readonly resource_name?: string;
  readonly validate_only?: boolean;
}

export interface PromotionAsset {
  readonly promotion_target?: string;
  readonly discount_modifier?: PromotionExtensionDiscountModifier;
  readonly redemption_start_date?: string;
  readonly redemption_end_date?: string;
  readonly occasion?: PromotionExtensionOccasion;
  readonly language_code?: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly ad_schedule_targets?: ReadonlyArray<AdScheduleInfo>;
  readonly terms_and_conditions_text?: string;
  readonly terms_and_conditions_uri?: string;
  readonly percent_off?: string;
  readonly money_amount_off?: Money;
  readonly promotion_code?: string;
  readonly orders_over_amount?: Money;
  readonly promotion_barcode_info?: PromotionBarcodeInfo;
  readonly promotion_qr_code_info?: PromotionQrCodeInfo;
}

export interface PromotionBarcodeInfo {
  readonly type?: PromotionBarcodeType;
  readonly barcode_content?: string;
}

export type PromotionBarcodeType = "UNSPECIFIED" | "UNKNOWN" | "AZTEC" | "CODABAR" | "CODE39" | "CODE128" | "DATA_MATRIX" | "EAN8" | "EAN13" | "ITF" | "PDF417" | "UPC_A";

export interface PromotionBarcodeTypeEnum {

}

export type PromotionExtensionDiscountModifier = "UNSPECIFIED" | "UNKNOWN" | "UP_TO";

export interface PromotionExtensionDiscountModifierEnum {

}

export type PromotionExtensionOccasion = "UNSPECIFIED" | "UNKNOWN" | "NEW_YEARS" | "CHINESE_NEW_YEAR" | "VALENTINES_DAY" | "EASTER" | "MOTHERS_DAY" | "FATHERS_DAY" | "LABOR_DAY" | "BACK_TO_SCHOOL" | "HALLOWEEN" | "BLACK_FRIDAY" | "CYBER_MONDAY" | "CHRISTMAS" | "BOXING_DAY" | "INDEPENDENCE_DAY" | "NATIONAL_DAY" | "END_OF_SEASON" | "WINTER_SALE" | "SUMMER_SALE" | "FALL_SALE" | "SPRING_SALE" | "RAMADAN" | "EID_AL_FITR" | "EID_AL_ADHA" | "SINGLES_DAY" | "WOMENS_DAY" | "HOLI" | "PARENTS_DAY" | "ST_NICHOLAS_DAY" | "CARNIVAL" | "EPIPHANY" | "ROSH_HASHANAH" | "PASSOVER" | "HANUKKAH" | "DIWALI" | "NAVRATRI" | "SONGKRAN" | "YEAR_END_GIFT";

export interface PromotionExtensionOccasionEnum {

}

export interface PromotionQrCodeInfo {
  readonly qr_code_content?: string;
}

export interface ProvideLeadFeedbackRequest {
  readonly resource_name?: string;
  readonly survey_answer?: SurveyAnswer;
  readonly survey_satisfied?: SurveySatisfied;
  readonly survey_dissatisfied?: SurveyDissatisfied;
}

export interface ProvideLeadFeedbackResponse {
  readonly credit_issuance_decision?: CreditIssuanceDecision;
}

export interface ProximityInfo {
  readonly geo_point?: GeoPointInfo;
  readonly radius?: number;
  readonly radius_units?: ProximityRadiusUnits;
  readonly address?: AddressInfo;
}

export type ProximityRadiusUnits = "UNSPECIFIED" | "UNKNOWN" | "MILES" | "KILOMETERS";

export interface ProximityRadiusUnitsEnum {

}

export interface QualifyingQuestion {
  readonly resource_name?: string;
  readonly qualifying_question_id?: string;
  readonly locale?: string;
  readonly text?: string;
}

export interface QualityInfo {
  readonly quality_score?: number;
  readonly creative_quality_score?: QualityScoreBucket;
  readonly post_click_quality_score?: QualityScoreBucket;
  readonly search_predicted_ctr?: QualityScoreBucket;
}

export type QualityScoreBucket = "UNSPECIFIED" | "UNKNOWN" | "BELOW_AVERAGE" | "AVERAGE" | "ABOVE_AVERAGE";

export interface QualityScoreBucketEnum {

}

export type QueryError = "UNSPECIFIED" | "UNKNOWN" | "QUERY_ERROR" | "BAD_ENUM_CONSTANT" | "BAD_ESCAPE_SEQUENCE" | "BAD_FIELD_NAME" | "BAD_LIMIT_VALUE" | "BAD_NUMBER" | "BAD_OPERATOR" | "BAD_PARAMETER_NAME" | "BAD_PARAMETER_VALUE" | "BAD_RESOURCE_TYPE_IN_FROM_CLAUSE" | "BAD_SYMBOL" | "BAD_VALUE" | "DATE_RANGE_TOO_WIDE" | "DATE_RANGE_TOO_NARROW" | "EXPECTED_AND" | "EXPECTED_BY" | "EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE" | "EXPECTED_FILTERS_ON_DATE_RANGE" | "EXPECTED_FROM" | "EXPECTED_LIST" | "EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE" | "EXPECTED_SELECT" | "EXPECTED_SINGLE_VALUE" | "EXPECTED_VALUE_WITH_BETWEEN_OPERATOR" | "INVALID_DATE_FORMAT" | "MISALIGNED_DATE_FOR_FILTER" | "INVALID_STRING_VALUE" | "INVALID_VALUE_WITH_BETWEEN_OPERATOR" | "INVALID_VALUE_WITH_DURING_OPERATOR" | "INVALID_VALUE_WITH_LIKE_OPERATOR" | "OPERATOR_FIELD_MISMATCH" | "PROHIBITED_EMPTY_LIST_IN_CONDITION" | "PROHIBITED_ENUM_CONSTANT" | "PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE" | "PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE" | "PROHIBITED_FIELD_IN_SELECT_CLAUSE" | "PROHIBITED_FIELD_IN_WHERE_CLAUSE" | "PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE" | "PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE" | "PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE" | "PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE" | "PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE" | "PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE" | "PROHIBITED_FIELD_OR_SEGMENT_WITH_METRIC" | "LIMIT_VALUE_TOO_LOW" | "PROHIBITED_NEWLINE_IN_STRING" | "PROHIBITED_VALUE_COMBINATION_IN_LIST" | "PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR" | "STRING_NOT_TERMINATED" | "TOO_MANY_SEGMENTS" | "UNEXPECTED_END_OF_QUERY" | "UNEXPECTED_FROM_CLAUSE" | "UNRECOGNIZED_FIELD" | "UNEXPECTED_INPUT" | "REQUESTED_METRICS_FOR_MANAGER" | "FILTER_HAS_TOO_MANY_VALUES" | "REQUIRED_SEGMENT_FIELD_MISSING";

export interface QueryErrorEnum {

}

export type QuotaError = "UNSPECIFIED" | "UNKNOWN" | "RESOURCE_EXHAUSTED" | "ACCESS_PROHIBITED" | "RESOURCE_TEMPORARILY_EXHAUSTED" | "EXCESSIVE_SHORT_TERM_QUERY_RESOURCE_CONSUMPTION" | "EXCESSIVE_LONG_TERM_QUERY_RESOURCE_CONSUMPTION" | "PAYMENTS_PROFILE_ACTIVATION_RATE_LIMIT_EXCEEDED";

export interface QuotaErrorDetails {
  readonly rate_scope?: QuotaRateScope;
  readonly rate_name?: string;
  readonly retry_delay?: string;
}

export interface QuotaErrorEnum {

}

export type QuotaRateScope = "UNSPECIFIED" | "UNKNOWN" | "ACCOUNT" | "DEVELOPER";

export interface QuoteCampaignsOperation {
  readonly campaigns?: ReadonlyArray<Campaign>;
  readonly quote_signature?: string;
}

export interface QuoteCampaignsOperation_Campaign {
  readonly campaign?: string;
}

export interface QuoteCampaignsRequest {
  readonly customer_id?: string;
  readonly operation?: QuoteCampaignsOperation;
}

export interface QuoteCampaignsResponse {
  readonly result?: QuoteCampaignsResult;
}

export interface QuoteCampaignsResult {
  readonly quotes?: ReadonlyArray<CampaignReservationQuote>;
  readonly quote_signature?: string;
}

export interface RaiseTargetCpaBidTooLowParameters {
  readonly target_multiplier?: number;
}

export interface RaiseTargetCpaBidTooLowRecommendation {
  readonly recommended_target_multiplier?: number;
  readonly average_target_cpa_micros?: string;
}

export interface RaiseTargetCpaParameters {
  readonly target_cpa_multiplier?: number;
}

export interface RaiseTargetCpaRecommendation {
  readonly target_adjustment?: TargetAdjustmentInfo;
  readonly app_bidding_goal?: AppBiddingGoal;
}

export type RangeError = "UNSPECIFIED" | "UNKNOWN" | "TOO_LOW" | "TOO_HIGH";

export interface RangeErrorEnum {

}

export interface RateMetrics {
  readonly average_cpm?: number;
  readonly average_active_view_cpm?: number;
  readonly trueview_average_cpv?: number;
  readonly average_cpc?: number;
  readonly average_cpi?: number;
  readonly average_cpe?: number;
  readonly interaction_rate?: number;
  readonly engagement_rate?: number;
  readonly active_view_viewability?: number;
  readonly trueview_view_rate?: number;
  readonly click_through_rate?: number;
  readonly video_completion_p25_rate?: number;
  readonly video_completion_p50_rate?: number;
  readonly video_completion_p75_rate?: number;
  readonly video_completion_p100_rate?: number;
}

export interface ReachCurve {
  readonly reach_forecasts?: ReadonlyArray<ReachForecast>;
}

export interface ReachForecast {
  readonly cost_micros?: string;
  readonly forecast?: Forecast;
  readonly planned_product_reach_forecasts?: ReadonlyArray<PlannedProductReachForecast>;
}

export type ReachPlanAgeRange = "UNSPECIFIED" | "UNKNOWN" | "AGE_RANGE_18_24" | "AGE_RANGE_18_34" | "AGE_RANGE_18_44" | "AGE_RANGE_18_49" | "AGE_RANGE_18_54" | "AGE_RANGE_18_64" | "AGE_RANGE_18_65_UP" | "AGE_RANGE_21_34" | "AGE_RANGE_21_44" | "AGE_RANGE_21_49" | "AGE_RANGE_21_54" | "AGE_RANGE_21_64" | "AGE_RANGE_21_65_UP" | "AGE_RANGE_25_34" | "AGE_RANGE_25_44" | "AGE_RANGE_25_49" | "AGE_RANGE_25_54" | "AGE_RANGE_25_64" | "AGE_RANGE_25_65_UP" | "AGE_RANGE_35_44" | "AGE_RANGE_35_49" | "AGE_RANGE_35_54" | "AGE_RANGE_35_64" | "AGE_RANGE_35_65_UP" | "AGE_RANGE_45_54" | "AGE_RANGE_45_64" | "AGE_RANGE_45_65_UP" | "AGE_RANGE_50_65_UP" | "AGE_RANGE_55_64" | "AGE_RANGE_55_65_UP" | "AGE_RANGE_65_UP";

export interface ReachPlanAgeRangeEnum {

}

export type ReachPlanBuyingMethod = "UNSPECIFIED" | "UNKNOWN" | "AUCTION" | "RESERVATION";

export interface ReachPlanBuyingMethodEnum {

}

export type ReachPlanConversionRateModel = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_HISTORY" | "INVENTORY_AGGRESSIVE" | "INVENTORY_CONSERVATIVE" | "INVENTORY_MEDIAN";

export interface ReachPlanConversionRateModelEnum {

}

export type ReachPlanCostModel = "UNSPECIFIED" | "UNKNOWN" | "CPM" | "CPV" | "CPC" | "CPA";

export interface ReachPlanCostModelEnum {

}

export type ReachPlanError = "UNSPECIFIED" | "UNKNOWN" | "NOT_FORECASTABLE_MISSING_RATE" | "NOT_FORECASTABLE_NOT_ENOUGH_INVENTORY" | "NOT_FORECASTABLE_ACCOUNT_NOT_ENABLED";

export interface ReachPlanErrorEnum {

}

export type ReachPlanMarketingObjective = "UNSPECIFIED" | "UNKNOWN" | "AWARENESS" | "CONSIDERATION" | "ACTION";

export interface ReachPlanMarketingObjectiveEnum {

}

export type ReachPlanNetwork = "UNSPECIFIED" | "UNKNOWN" | "YOUTUBE" | "GOOGLE_VIDEO_PARTNERS" | "YOUTUBE_AND_GOOGLE_VIDEO_PARTNERS";

export interface ReachPlanNetworkEnum {

}

export type ReachPlanPlannableUserListStatus = "UNSPECIFIED" | "UNKNOWN" | "PLANNABLE" | "UNPLANNABLE";

export interface ReachPlanPlannableUserListStatusEnum {

}

export type ReachPlanSurface = "UNSPECIFIED" | "UNKNOWN" | "DISCOVER_FEED" | "GMAIL" | "IN_FEED" | "IN_STREAM_BUMPER" | "IN_STREAM_NON_SKIPPABLE" | "IN_STREAM_SKIPPABLE" | "SHORTS" | "GOOGLE_DISPLAY_NETWORK" | "IN_STREAM_NON_SKIPPABLE_THIRTY_SECONDS";

export interface ReachPlanSurfaceEnum {

}

export interface RealTimeBiddingSetting {
  readonly opt_in?: boolean;
}

export type Reason = "UNSPECIFIED" | "UNKNOWN" | "MERCHANT_CENTER_ACCOUNT_HAS_NO_SUBMITTED_PRODUCTS" | "MERCHANT_CENTER_ACCOUNT_HAS_NO_SUBMITTED_PRODUCTS_IN_FEED" | "ADS_ACCOUNT_EXCLUDES_OFFERS_FROM_CAMPAIGN" | "ALL_PRODUCTS_ARE_EXCLUDED_FROM_CAMPAIGN";

export interface Recommendation {
  readonly resource_name?: string;
  readonly type?: RecommendationType;
  readonly impact?: RecommendationImpact;
  readonly campaign_budget?: string;
  readonly campaign?: string;
  readonly ad_group?: string;
  readonly dismissed?: boolean;
  readonly campaigns?: ReadonlyArray<string>;
  readonly campaign_budget_recommendation?: CampaignBudgetRecommendation;
  readonly forecasting_campaign_budget_recommendation?: CampaignBudgetRecommendation;
  readonly keyword_recommendation?: KeywordRecommendation;
  readonly text_ad_recommendation?: TextAdRecommendation;
  readonly target_cpa_opt_in_recommendation?: TargetCpaOptInRecommendation;
  readonly maximize_conversions_opt_in_recommendation?: MaximizeConversionsOptInRecommendation;
  readonly enhanced_cpc_opt_in_recommendation?: EnhancedCpcOptInRecommendation;
  readonly search_partners_opt_in_recommendation?: SearchPartnersOptInRecommendation;
  readonly maximize_clicks_opt_in_recommendation?: MaximizeClicksOptInRecommendation;
  readonly optimize_ad_rotation_recommendation?: OptimizeAdRotationRecommendation;
  readonly keyword_match_type_recommendation?: KeywordMatchTypeRecommendation;
  readonly move_unused_budget_recommendation?: MoveUnusedBudgetRecommendation;
  readonly target_roas_opt_in_recommendation?: TargetRoasOptInRecommendation;
  readonly responsive_search_ad_recommendation?: ResponsiveSearchAdRecommendation;
  readonly marginal_roi_campaign_budget_recommendation?: CampaignBudgetRecommendation;
  readonly use_broad_match_keyword_recommendation?: UseBroadMatchKeywordRecommendation;
  readonly responsive_search_ad_asset_recommendation?: ResponsiveSearchAdAssetRecommendation;
  readonly upgrade_smart_shopping_campaign_to_performance_max_recommendation?: UpgradeSmartShoppingCampaignToPerformanceMaxRecommendation;
  readonly responsive_search_ad_improve_ad_strength_recommendation?: ResponsiveSearchAdImproveAdStrengthRecommendation;
  readonly display_expansion_opt_in_recommendation?: DisplayExpansionOptInRecommendation;
  readonly upgrade_local_campaign_to_performance_max_recommendation?: UpgradeLocalCampaignToPerformanceMaxRecommendation;
  readonly raise_target_cpa_bid_too_low_recommendation?: RaiseTargetCpaBidTooLowRecommendation;
  readonly forecasting_set_target_roas_recommendation?: ForecastingSetTargetRoasRecommendation;
  readonly callout_asset_recommendation?: CalloutAssetRecommendation;
  readonly sitelink_asset_recommendation?: SitelinkAssetRecommendation;
  readonly call_asset_recommendation?: CallAssetRecommendation;
  readonly shopping_add_age_group_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_color_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_gender_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_gtin_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_more_identifiers_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_size_recommendation?: ShoppingOfferAttributeRecommendation;
  readonly shopping_add_products_to_campaign_recommendation?: ShoppingAddProductsToCampaignRecommendation;
  readonly shopping_fix_disapproved_products_recommendation?: ShoppingFixDisapprovedProductsRecommendation;
  readonly shopping_target_all_offers_recommendation?: ShoppingTargetAllOffersRecommendation;
  readonly shopping_fix_suspended_merchant_center_account_recommendation?: ShoppingMerchantCenterAccountSuspensionRecommendation;
  readonly shopping_fix_merchant_center_account_suspension_warning_recommendation?: ShoppingMerchantCenterAccountSuspensionRecommendation;
  readonly shopping_migrate_regular_shopping_campaign_offers_to_performance_max_recommendation?: ShoppingMigrateRegularShoppingCampaignOffersToPerformanceMaxRecommendation;
  readonly dynamic_image_extension_opt_in_recommendation?: DynamicImageExtensionOptInRecommendation;
  readonly raise_target_cpa_recommendation?: RaiseTargetCpaRecommendation;
  readonly lower_target_roas_recommendation?: LowerTargetRoasRecommendation;
  readonly performance_max_opt_in_recommendation?: PerformanceMaxOptInRecommendation;
  readonly improve_performance_max_ad_strength_recommendation?: ImprovePerformanceMaxAdStrengthRecommendation;
  readonly migrate_dynamic_search_ads_campaign_to_performance_max_recommendation?: MigrateDynamicSearchAdsCampaignToPerformanceMaxRecommendation;
  readonly forecasting_set_target_cpa_recommendation?: ForecastingSetTargetCpaRecommendation;
  readonly set_target_cpa_recommendation?: ForecastingSetTargetCpaRecommendation;
  readonly set_target_roas_recommendation?: ForecastingSetTargetRoasRecommendation;
  readonly maximize_conversion_value_opt_in_recommendation?: MaximizeConversionValueOptInRecommendation;
  readonly improve_google_tag_coverage_recommendation?: ImproveGoogleTagCoverageRecommendation;
  readonly performance_max_final_url_opt_in_recommendation?: PerformanceMaxFinalUrlOptInRecommendation;
  readonly refresh_customer_match_list_recommendation?: RefreshCustomerMatchListRecommendation;
  readonly custom_audience_opt_in_recommendation?: CustomAudienceOptInRecommendation;
  readonly lead_form_asset_recommendation?: LeadFormAssetRecommendation;
  readonly improve_demand_gen_ad_strength_recommendation?: ImproveDemandGenAdStrengthRecommendation;
}

export interface Recommendation_CampaignBudget {
  readonly current_amount_micros?: string;
  readonly recommended_new_amount_micros?: string;
  readonly new_start_date?: string;
}

export type RecommendationError = "UNSPECIFIED" | "UNKNOWN" | "BUDGET_AMOUNT_TOO_SMALL" | "BUDGET_AMOUNT_TOO_LARGE" | "INVALID_BUDGET_AMOUNT" | "POLICY_ERROR" | "INVALID_BID_AMOUNT" | "ADGROUP_KEYWORD_LIMIT" | "RECOMMENDATION_ALREADY_APPLIED" | "RECOMMENDATION_INVALIDATED" | "TOO_MANY_OPERATIONS" | "NO_OPERATIONS" | "DIFFERENT_TYPES_NOT_SUPPORTED" | "DUPLICATE_RESOURCE_NAME" | "RECOMMENDATION_ALREADY_DISMISSED" | "INVALID_APPLY_REQUEST" | "RECOMMENDATION_TYPE_APPLY_NOT_SUPPORTED" | "INVALID_MULTIPLIER" | "ADVERTISING_CHANNEL_TYPE_GENERATE_NOT_SUPPORTED" | "RECOMMENDATION_TYPE_GENERATE_NOT_SUPPORTED" | "RECOMMENDATION_TYPES_CANNOT_BE_EMPTY" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_BIDDING_INFO" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_BIDDING_STRATEGY_TYPE" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_ASSET_GROUP_INFO" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_ASSET_GROUP_INFO_WITH_FINAL_URL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_COUNTRY_CODES_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_INVALID_COUNTRY_CODE_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_LANGUAGE_CODES_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_EITHER_POSITIVE_OR_NEGATIVE_LOCATION_IDS_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_AD_GROUP_INFO_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_KEYWORDS_FOR_SEARCH_CHANNEL" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_LOCATION" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_TARGET_IMPRESSION_SHARE_MICROS" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_TARGET_IMPRESSION_SHARE_MICROS_BETWEEN_1_AND_1000000" | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_TARGET_IMPRESSION_SHARE_INFO" | "MERCHANT_CENTER_ACCOUNT_ID_NOT_SUPPORTED_ADVERTISING_CHANNEL_TYPE";

export interface RecommendationErrorEnum {

}

export interface RecommendationImpact {
  readonly base_metrics?: RecommendationMetrics;
  readonly potential_metrics?: RecommendationMetrics;
}

export interface RecommendationMetrics {
  readonly impressions?: number;
  readonly clicks?: number;
  readonly cost_micros?: string;
  readonly conversions?: number;
  readonly conversions_value?: number;
  readonly video_views?: number;
}

export interface RecommendationSubscription {
  readonly resource_name?: string;
  readonly type?: RecommendationType;
  readonly create_date_time?: string;
  readonly modify_date_time?: string;
  readonly status?: RecommendationSubscriptionStatus;
}

export type RecommendationSubscriptionError = "UNSPECIFIED" | "UNKNOWN";

export interface RecommendationSubscriptionErrorEnum {

}

export interface RecommendationSubscriptionOperation {
  readonly update_mask?: string;
  readonly create?: RecommendationSubscription;
  readonly update?: RecommendationSubscription;
}

export type RecommendationSubscriptionStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "PAUSED";

export interface RecommendationSubscriptionStatusEnum {

}

export type RecommendationType = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGN_BUDGET" | "KEYWORD" | "TEXT_AD" | "TARGET_CPA_OPT_IN" | "MAXIMIZE_CONVERSIONS_OPT_IN" | "ENHANCED_CPC_OPT_IN" | "SEARCH_PARTNERS_OPT_IN" | "MAXIMIZE_CLICKS_OPT_IN" | "OPTIMIZE_AD_ROTATION" | "KEYWORD_MATCH_TYPE" | "MOVE_UNUSED_BUDGET" | "FORECASTING_CAMPAIGN_BUDGET" | "TARGET_ROAS_OPT_IN" | "RESPONSIVE_SEARCH_AD" | "MARGINAL_ROI_CAMPAIGN_BUDGET" | "USE_BROAD_MATCH_KEYWORD" | "RESPONSIVE_SEARCH_AD_ASSET" | "UPGRADE_SMART_SHOPPING_CAMPAIGN_TO_PERFORMANCE_MAX" | "RESPONSIVE_SEARCH_AD_IMPROVE_AD_STRENGTH" | "DISPLAY_EXPANSION_OPT_IN" | "UPGRADE_LOCAL_CAMPAIGN_TO_PERFORMANCE_MAX" | "RAISE_TARGET_CPA_BID_TOO_LOW" | "FORECASTING_SET_TARGET_ROAS" | "CALLOUT_ASSET" | "SITELINK_ASSET" | "CALL_ASSET" | "SHOPPING_ADD_AGE_GROUP" | "SHOPPING_ADD_COLOR" | "SHOPPING_ADD_GENDER" | "SHOPPING_ADD_GTIN" | "SHOPPING_ADD_MORE_IDENTIFIERS" | "SHOPPING_ADD_SIZE" | "SHOPPING_ADD_PRODUCTS_TO_CAMPAIGN" | "SHOPPING_FIX_DISAPPROVED_PRODUCTS" | "SHOPPING_TARGET_ALL_OFFERS" | "SHOPPING_FIX_SUSPENDED_MERCHANT_CENTER_ACCOUNT" | "SHOPPING_FIX_MERCHANT_CENTER_ACCOUNT_SUSPENSION_WARNING" | "SHOPPING_MIGRATE_REGULAR_SHOPPING_CAMPAIGN_OFFERS_TO_PERFORMANCE_MAX" | "DYNAMIC_IMAGE_EXTENSION_OPT_IN" | "RAISE_TARGET_CPA" | "LOWER_TARGET_ROAS" | "PERFORMANCE_MAX_OPT_IN" | "IMPROVE_PERFORMANCE_MAX_AD_STRENGTH" | "MIGRATE_DYNAMIC_SEARCH_ADS_CAMPAIGN_TO_PERFORMANCE_MAX" | "FORECASTING_SET_TARGET_CPA" | "SET_TARGET_CPA" | "SET_TARGET_ROAS" | "MAXIMIZE_CONVERSION_VALUE_OPT_IN" | "IMPROVE_GOOGLE_TAG_COVERAGE" | "PERFORMANCE_MAX_FINAL_URL_OPT_IN" | "REFRESH_CUSTOMER_MATCH_LIST" | "CUSTOM_AUDIENCE_OPT_IN" | "LEAD_FORM_ASSET" | "IMPROVE_DEMAND_GEN_AD_STRENGTH";

export interface RecommendationTypeEnum {

}

export interface RefreshCustomerMatchListRecommendation {
  readonly user_list_id?: string;
  readonly user_list_name?: string;
  readonly days_since_last_refresh?: string;
  readonly top_spending_account?: ReadonlyArray<AccountInfo>;
  readonly targeting_accounts_count?: string;
  readonly owner_account?: AccountInfo;
}

export interface RegenerateShareableLinkIdRequest {
  readonly resource_name?: string;
}

export interface RegenerateShareableLinkIdResponse {

}

export type RegionCodeError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_REGION_CODE";

export interface RegionCodeErrorEnum {

}

export interface RegulatoryCostSummary {
  readonly regulatory_fee_type?: RegulatoryFeeType;
  readonly amount_micros?: string;
}

export type RegulatoryFeeType = "UNSPECIFIED" | "UNKNOWN" | "AUSTRIA_DST_FEE" | "TURKIYE_REGULATORY_OPERATING_COST" | "UK_DST_FEE" | "SPAIN_REGULATORY_OPERATING_COST" | "FRANCE_REGULATORY_OPERATING_COST" | "ITALY_REGULATORY_OPERATING_COST" | "INDIA_REGULATORY_OPERATING_COST" | "POLAND_REGULATORY_OPERATING_COST" | "OPERATING_CHARGES" | "CANADA_DST_FEE";

export interface RegulatoryFeeTypeEnum {

}

export interface RemarketingAction {
  readonly resource_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly tag_snippets?: ReadonlyArray<TagSnippet>;
}

export interface RemarketingActionOperation {
  readonly update_mask?: string;
  readonly create?: RemarketingAction;
  readonly update?: RemarketingAction;
}

export interface RemarketingSetting {
  readonly google_global_site_tag?: string;
}

export interface RemoveAutomaticallyCreatedAssetsRequest {
  readonly ad_group_ad?: string;
  readonly assets_with_field_type?: ReadonlyArray<AssetsWithFieldType>;
}

export interface RemoveCampaignAutomaticallyCreatedAssetOperation {
  readonly campaign?: string;
  readonly asset?: string;
  readonly field_type?: AssetFieldType;
}

export interface RemoveCampaignAutomaticallyCreatedAssetRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<RemoveCampaignAutomaticallyCreatedAssetOperation>;
  readonly partial_failure?: boolean;
}

export interface RemoveCampaignAutomaticallyCreatedAssetResponse {
  readonly partial_failure_error?: unknown;
}

export interface RemoveDataLinkRequest {
  readonly customer_id?: string;
  readonly resource_name?: string;
}

export interface RemoveDataLinkResponse {
  readonly resource_name?: string;
}

export interface RemoveProductLinkInvitationRequest {
  readonly customer_id?: string;
  readonly resource_name?: string;
}

export interface RemoveProductLinkInvitationResponse {
  readonly resource_name?: string;
}

export interface RemoveProductLinkRequest {
  readonly customer_id?: string;
  readonly resource_name?: string;
  readonly validate_only?: boolean;
}

export interface RemoveProductLinkResponse {
  readonly resource_name?: string;
}

export interface RemoveYouTubeVideoUploadRequest {
  readonly customer_id?: string;
  readonly resource_names?: ReadonlyArray<string>;
}

export interface RemoveYouTubeVideoUploadResponse {
  readonly resource_names?: ReadonlyArray<string>;
}

export type RequestError = "UNSPECIFIED" | "UNKNOWN" | "RESOURCE_NAME_MISSING" | "RESOURCE_NAME_MALFORMED" | "BAD_RESOURCE_ID" | "INVALID_CUSTOMER_ID" | "OPERATION_REQUIRED" | "RESOURCE_NOT_FOUND" | "INVALID_PAGE_TOKEN" | "EXPIRED_PAGE_TOKEN" | "INVALID_PAGE_SIZE" | "PAGE_SIZE_NOT_SUPPORTED" | "REQUIRED_FIELD_MISSING" | "IMMUTABLE_FIELD" | "TOO_MANY_MUTATE_OPERATIONS" | "TOO_MANY_ACTION_OPERATIONS" | "CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT" | "CANNOT_MODIFY_FOREIGN_FIELD" | "INVALID_ENUM_VALUE" | "DEVELOPER_TOKEN_PARAMETER_MISSING" | "LOGIN_CUSTOMER_ID_PARAMETER_MISSING" | "VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN" | "CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS" | "CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS" | "INCONSISTENT_RETURN_SUMMARY_ROW_VALUE" | "TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED" | "RPC_DEADLINE_TOO_SHORT" | "UNSUPPORTED_VERSION" | "CLOUD_PROJECT_NOT_FOUND";

export interface RequestErrorEnum {

}

export interface Requirement {
  readonly spend?: Spend;
}

export interface ResellerConstraint {

}

export interface ReservationAdCategorySelfDisclosure {
  readonly gambling?: boolean;
  readonly alcohol?: boolean;
  readonly politics?: boolean;
}

export interface ReservationErrorDetails {
  readonly campaign?: string;
  readonly quotes?: ReadonlyArray<CampaignReservationQuote>;
  readonly quote_signature?: string;
}

export type ReservationRequestType = "UNSPECIFIED" | "UNKNOWN" | "BOOK" | "HOLD";

export interface ReservationRequestTypeEnum {

}

export interface Residency {
  readonly institution_name?: string;
  readonly completion_year?: number;
}

export interface ResolveMultiPartyAuthReviewOperation {
  readonly multi_party_auth_review?: string;
  readonly new_status?: MultiPartyAuthReviewStatus;
}

export interface ResolveMultiPartyAuthReviewRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<ResolveMultiPartyAuthReviewOperation>;
}

export interface ResolveMultiPartyAuthReviewResponse {
  readonly result_or_error?: ReadonlyArray<ResolveMultiPartyAuthReviewResultOrError>;
}

export interface ResolveMultiPartyAuthReviewResult {
  readonly multi_party_auth_review?: string;
  readonly customer_user_access_invitation?: string;
  readonly customer_user_access?: string;
}

export interface ResolveMultiPartyAuthReviewResultOrError {
  readonly result?: ResolveMultiPartyAuthReviewResult;
  readonly partial_failure_error?: unknown;
}

export type ResourceAccessDeniedError = "UNSPECIFIED" | "UNKNOWN" | "WRITE_ACCESS_DENIED";

export interface ResourceAccessDeniedErrorEnum {

}

export type ResourceChangeOperation = "UNSPECIFIED" | "UNKNOWN" | "CREATE" | "UPDATE" | "REMOVE";

export interface ResourceChangeOperationEnum {

}

export interface ResourceCountDetails {
  readonly enclosing_id?: string;
  readonly enclosing_resource?: string;
  readonly limit?: number;
  readonly limit_type?: ResourceLimitType;
  readonly existing_count?: number;
}

export type ResourceCountLimitExceededError = "UNSPECIFIED" | "UNKNOWN" | "ACCOUNT_LIMIT" | "CAMPAIGN_LIMIT" | "ADGROUP_LIMIT" | "AD_GROUP_AD_LIMIT" | "AD_GROUP_CRITERION_LIMIT" | "SHARED_SET_LIMIT" | "MATCHING_FUNCTION_LIMIT" | "RESPONSE_ROW_LIMIT_EXCEEDED" | "RESOURCE_LIMIT";

export interface ResourceCountLimitExceededErrorEnum {

}

export type ResourceLimitType = "UNSPECIFIED" | "UNKNOWN" | "CAMPAIGNS_PER_CUSTOMER" | "BASE_CAMPAIGNS_PER_CUSTOMER" | "EXPERIMENT_CAMPAIGNS_PER_CUSTOMER" | "HOTEL_CAMPAIGNS_PER_CUSTOMER" | "SMART_SHOPPING_CAMPAIGNS_PER_CUSTOMER" | "AD_GROUPS_PER_CAMPAIGN" | "AD_GROUPS_PER_SHOPPING_CAMPAIGN" | "AD_GROUPS_PER_HOTEL_CAMPAIGN" | "REPORTING_AD_GROUPS_PER_LOCAL_CAMPAIGN" | "REPORTING_AD_GROUPS_PER_APP_CAMPAIGN" | "MANAGED_AD_GROUPS_PER_SMART_CAMPAIGN" | "AD_GROUP_CRITERIA_PER_CUSTOMER" | "BASE_AD_GROUP_CRITERIA_PER_CUSTOMER" | "EXPERIMENT_AD_GROUP_CRITERIA_PER_CUSTOMER" | "AD_GROUP_CRITERIA_PER_CAMPAIGN" | "CAMPAIGN_CRITERIA_PER_CUSTOMER" | "BASE_CAMPAIGN_CRITERIA_PER_CUSTOMER" | "EXPERIMENT_CAMPAIGN_CRITERIA_PER_CUSTOMER" | "WEBPAGE_CRITERIA_PER_CUSTOMER" | "BASE_WEBPAGE_CRITERIA_PER_CUSTOMER" | "EXPERIMENT_WEBPAGE_CRITERIA_PER_CUSTOMER" | "COMBINED_AUDIENCE_CRITERIA_PER_AD_GROUP" | "CUSTOMER_NEGATIVE_PLACEMENT_CRITERIA_PER_CUSTOMER" | "CUSTOMER_NEGATIVE_YOUTUBE_CHANNEL_CRITERIA_PER_CUSTOMER" | "CRITERIA_PER_AD_GROUP" | "LISTING_GROUPS_PER_AD_GROUP" | "EXPLICITLY_SHARED_BUDGETS_PER_CUSTOMER" | "IMPLICITLY_SHARED_BUDGETS_PER_CUSTOMER" | "COMBINED_AUDIENCE_CRITERIA_PER_CAMPAIGN" | "NEGATIVE_KEYWORDS_PER_CAMPAIGN" | "NEGATIVE_PLACEMENTS_PER_CAMPAIGN" | "GEO_TARGETS_PER_CAMPAIGN" | "NEGATIVE_IP_BLOCKS_PER_CAMPAIGN" | "PROXIMITIES_PER_CAMPAIGN" | "LISTING_SCOPES_PER_SHOPPING_CAMPAIGN" | "LISTING_SCOPES_PER_NON_SHOPPING_CAMPAIGN" | "NEGATIVE_KEYWORDS_PER_SHARED_SET" | "NEGATIVE_PLACEMENTS_PER_SHARED_SET" | "SHARED_SETS_PER_CUSTOMER_FOR_TYPE_DEFAULT" | "SHARED_SETS_PER_CUSTOMER_FOR_NEGATIVE_PLACEMENT_LIST_LOWER" | "HOTEL_ADVANCE_BOOKING_WINDOW_BID_MODIFIERS_PER_AD_GROUP" | "BIDDING_STRATEGIES_PER_CUSTOMER" | "BASIC_USER_LISTS_PER_CUSTOMER" | "LOGICAL_USER_LISTS_PER_CUSTOMER" | "RULE_BASED_USER_LISTS_PER_CUSTOMER" | "BASE_AD_GROUP_ADS_PER_CUSTOMER" | "EXPERIMENT_AD_GROUP_ADS_PER_CUSTOMER" | "AD_GROUP_ADS_PER_CAMPAIGN" | "TEXT_AND_OTHER_ADS_PER_AD_GROUP" | "IMAGE_ADS_PER_AD_GROUP" | "SHOPPING_SMART_ADS_PER_AD_GROUP" | "RESPONSIVE_SEARCH_ADS_PER_AD_GROUP" | "APP_ADS_PER_AD_GROUP" | "APP_ENGAGEMENT_ADS_PER_AD_GROUP" | "LOCAL_ADS_PER_AD_GROUP" | "VIDEO_ADS_PER_AD_GROUP" | "LEAD_FORM_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "PROMOTION_CUSTOMER_ASSETS_PER_CUSTOMER" | "PROMOTION_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "PROMOTION_AD_GROUP_ASSETS_PER_AD_GROUP" | "CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER" | "CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP" | "SITELINK_CUSTOMER_ASSETS_PER_CUSTOMER" | "SITELINK_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "SITELINK_AD_GROUP_ASSETS_PER_AD_GROUP" | "STRUCTURED_SNIPPET_CUSTOMER_ASSETS_PER_CUSTOMER" | "STRUCTURED_SNIPPET_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "STRUCTURED_SNIPPET_AD_GROUP_ASSETS_PER_AD_GROUP" | "MOBILE_APP_CUSTOMER_ASSETS_PER_CUSTOMER" | "MOBILE_APP_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "MOBILE_APP_AD_GROUP_ASSETS_PER_AD_GROUP" | "HOTEL_CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER" | "HOTEL_CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "HOTEL_CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP" | "CALL_CUSTOMER_ASSETS_PER_CUSTOMER" | "CALL_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "CALL_AD_GROUP_ASSETS_PER_AD_GROUP" | "PRICE_CUSTOMER_ASSETS_PER_CUSTOMER" | "PRICE_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "PRICE_AD_GROUP_ASSETS_PER_AD_GROUP" | "AD_IMAGE_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "AD_IMAGE_AD_GROUP_ASSETS_PER_AD_GROUP" | "PAGE_FEED_ASSET_SETS_PER_CUSTOMER" | "DYNAMIC_EDUCATION_FEED_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_PAGE_FEED_ASSET_SET" | "ASSETS_PER_DYNAMIC_EDUCATION_FEED_ASSET_SET" | "DYNAMIC_REAL_ESTATE_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_REAL_ESTATE_ASSET_SET" | "DYNAMIC_CUSTOM_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_CUSTOM_ASSET_SET" | "DYNAMIC_HOTELS_AND_RENTALS_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_HOTELS_AND_RENTALS_ASSET_SET" | "DYNAMIC_LOCAL_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_LOCAL_ASSET_SET" | "DYNAMIC_FLIGHTS_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_FLIGHTS_ASSET_SET" | "DYNAMIC_TRAVEL_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_TRAVEL_ASSET_SET" | "DYNAMIC_JOBS_ASSET_SETS_PER_CUSTOMER" | "ASSETS_PER_DYNAMIC_JOBS_ASSET_SET" | "BUSINESS_NAME_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "BUSINESS_LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "VERSIONS_PER_AD" | "USER_FEEDS_PER_CUSTOMER" | "SYSTEM_FEEDS_PER_CUSTOMER" | "FEED_ATTRIBUTES_PER_FEED" | "FEED_ITEMS_PER_CUSTOMER" | "CAMPAIGN_FEEDS_PER_CUSTOMER" | "BASE_CAMPAIGN_FEEDS_PER_CUSTOMER" | "EXPERIMENT_CAMPAIGN_FEEDS_PER_CUSTOMER" | "AD_GROUP_FEEDS_PER_CUSTOMER" | "BASE_AD_GROUP_FEEDS_PER_CUSTOMER" | "EXPERIMENT_AD_GROUP_FEEDS_PER_CUSTOMER" | "AD_GROUP_FEEDS_PER_CAMPAIGN" | "FEED_ITEM_SETS_PER_CUSTOMER" | "FEED_ITEMS_PER_FEED_ITEM_SET" | "CAMPAIGN_EXPERIMENTS_PER_CUSTOMER" | "EXPERIMENT_ARMS_PER_VIDEO_EXPERIMENT" | "OWNED_LABELS_PER_CUSTOMER" | "LABELS_PER_CAMPAIGN" | "LABELS_PER_AD_GROUP" | "LABELS_PER_AD_GROUP_AD" | "LABELS_PER_AD_GROUP_CRITERION" | "TARGET_CUSTOMERS_PER_LABEL" | "KEYWORD_PLANS_PER_USER_PER_CUSTOMER" | "KEYWORD_PLAN_AD_GROUP_KEYWORDS_PER_KEYWORD_PLAN" | "KEYWORD_PLAN_AD_GROUPS_PER_KEYWORD_PLAN" | "KEYWORD_PLAN_NEGATIVE_KEYWORDS_PER_KEYWORD_PLAN" | "KEYWORD_PLAN_CAMPAIGNS_PER_KEYWORD_PLAN" | "CONVERSION_ACTIONS_PER_CUSTOMER" | "BATCH_JOB_OPERATIONS_PER_JOB" | "BATCH_JOBS_PER_CUSTOMER" | "HOTEL_CHECK_IN_DATE_RANGE_BID_MODIFIERS_PER_AD_GROUP" | "SHARED_SETS_PER_ACCOUNT_FOR_ACCOUNT_LEVEL_NEGATIVE_KEYWORDS" | "ACCOUNT_LEVEL_NEGATIVE_KEYWORDS_PER_SHARED_SET" | "ENABLED_ASSET_PER_HOTEL_PROPERTY_ASSET_SET" | "ENABLED_HOTEL_PROPERTY_ASSET_LINKS_PER_ASSET_GROUP" | "BRANDS_PER_SHARED_SET" | "ENABLED_BRAND_LIST_CRITERIA_PER_CAMPAIGN" | "SHARED_SETS_PER_ACCOUNT_FOR_BRAND" | "LOOKALIKE_USER_LISTS_PER_CUSTOMER" | "LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN" | "BUSINESS_MESSAGE_ASSET_LINKS_PER_CUSTOMER" | "WHATSAPP_BUSINESS_MESSAGE_ASSET_LINKS_PER_CAMPAIGN" | "WHATSAPP_BUSINESS_MESSAGE_ASSET_LINKS_PER_AD_GROUP" | "BRAND_LIST_CRITERIA_PER_AD_GROUP";

export interface ResourceLimitTypeEnum {

}

export type ResponseContentType = "UNSPECIFIED" | "RESOURCE_NAME_ONLY" | "MUTABLE_RESOURCE";

export interface ResponseContentTypeEnum {

}

export interface ResponsiveDisplayAdControlSpec {
  readonly enable_asset_enhancements?: boolean;
  readonly enable_autogen_video?: boolean;
}

export interface ResponsiveDisplayAdInfo {
  readonly marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly square_marketing_images?: ReadonlyArray<AdImageAsset>;
  readonly logo_images?: ReadonlyArray<AdImageAsset>;
  readonly square_logo_images?: ReadonlyArray<AdImageAsset>;
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly long_headline?: AdTextAsset;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly youtube_videos?: ReadonlyArray<AdVideoAsset>;
  readonly business_name?: string;
  readonly main_color?: string;
  readonly accent_color?: string;
  readonly allow_flexible_color?: boolean;
  readonly call_to_action_text?: string;
  readonly price_prefix?: string;
  readonly promo_text?: string;
  readonly format_setting?: DisplayAdFormatSetting;
  readonly control_spec?: ResponsiveDisplayAdControlSpec;
}

export interface ResponsiveSearchAdAssetParameters {
  readonly updated_ad?: Ad;
}

export interface ResponsiveSearchAdAssetRecommendation {
  readonly current_ad?: Ad;
  readonly recommended_assets?: Ad;
}

export interface ResponsiveSearchAdImproveAdStrengthParameters {
  readonly updated_ad?: Ad;
}

export interface ResponsiveSearchAdImproveAdStrengthRecommendation {
  readonly current_ad?: Ad;
  readonly recommended_ad?: Ad;
}

export interface ResponsiveSearchAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly path1?: string;
  readonly path2?: string;
}

export interface ResponsiveSearchAdParameters {
  readonly ad?: Ad;
}

export interface ResponsiveSearchAdRecommendation {
  readonly ad?: Ad;
}

export interface RestatementValue {
  readonly adjusted_value?: number;
  readonly currency_code?: string;
}

export interface RetailFilter {
  readonly expression?: RetailFilterExpression;
  readonly tag?: RetailTag;
}

export interface RetailFilterBundle {
  readonly shared_set?: string;
}

export interface RetailFilterExpression {
  readonly name?: string;
}

export interface RetailTag {
  readonly value?: string;
  readonly expression_name?: string;
}

export interface RetentionGoal {
  readonly value_settings?: CustomerLifecycleOptimizationValueSettings;
}

export interface RevenueRange {
  readonly min_event_revenue?: number;
  readonly max_event_revenue?: number;
}

export interface RuleBasedUserListInfo {
  readonly prepopulation_status?: UserListPrepopulationStatus;
  readonly flexible_rule_user_list?: FlexibleRuleUserListInfo;
}

export interface RunBatchJobRequest {
  readonly resource_name?: string;
}

export interface RunOfflineUserDataJobRequest {
  readonly resource_name?: string;
  readonly validate_only?: boolean;
}

export interface SampleChannel {
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly display_name?: string;
  readonly youtube_channel_metadata?: YouTubeChannelAttributeMetadata;
}

export interface ScheduleExperimentMetadata {
  readonly experiment?: string;
}

export interface ScheduleExperimentRequest {
  readonly resource_name?: string;
  readonly validate_only?: boolean;
}

export interface SearchAttributes {
  readonly audience_attributes?: ReadonlyArray<AudienceInsightsAttribute>;
  readonly audience_combinations?: ReadonlyArray<InsightsAudienceAttributeGroup>;
  readonly creator_attributes?: ReadonlyArray<AudienceInsightsAttribute>;
}

export interface SearchAudience {
  readonly audience_attributes?: ReadonlyArray<AudienceInsightsAttribute>;
  readonly audience_combinations?: ReadonlyArray<InsightsAudienceAttributeGroup>;
}

export type SearchEngineResultsPageType = "UNSPECIFIED" | "UNKNOWN" | "ADS_ONLY" | "ORGANIC_ONLY" | "ADS_AND_ORGANIC";

export interface SearchEngineResultsPageTypeEnum {

}

export interface SearchFilter {
  readonly entity_capability_filters?: ReadonlyArray<InsightsKnowledgeGraphEntityCapabilities>;
}

export interface SearchGoogleAdsFieldsRequest {
  readonly query?: string;
  readonly page_token?: string;
  readonly page_size?: number;
}

export interface SearchGoogleAdsFieldsResponse {
  readonly results?: ReadonlyArray<GoogleAdsField>;
  readonly next_page_token?: string;
  readonly total_results_count?: string;
}

export interface SearchGoogleAdsRequest {
  readonly customer_id?: string;
  readonly query?: string;
  readonly page_token?: string;
  readonly page_size?: number;
  readonly validate_only?: boolean;
  readonly search_settings?: SearchSettings;
}

export interface SearchGoogleAdsResponse {
  readonly results?: ReadonlyArray<GoogleAdsRow>;
  readonly next_page_token?: string;
  readonly total_results_count?: string;
  readonly field_mask?: string;
  readonly summary_row?: GoogleAdsRow;
  readonly query_resource_consumption?: string;
  readonly metric_attributes?: ReadonlyArray<MetricAttributes>;
}

export interface SearchGoogleAdsStreamRequest {
  readonly customer_id?: string;
  readonly query?: string;
  readonly summary_row_setting?: SummaryRowSetting;
}

export interface SearchGoogleAdsStreamResponse {
  readonly results?: ReadonlyArray<GoogleAdsRow>;
  readonly field_mask?: string;
  readonly summary_row?: GoogleAdsRow;
  readonly request_id?: string;
  readonly query_resource_consumption?: string;
  readonly metric_attributes?: ReadonlyArray<MetricAttributes>;
}

export interface SearchPartnersOptInRecommendation {

}

export interface SearchSettings {
  readonly omit_results?: boolean;
  readonly return_summary_row?: boolean;
  readonly return_total_results_count?: boolean;
}

export interface SearchTerm {
  readonly text?: string;
  readonly estimated_weekly_search_count?: string;
}

export type SearchTermInsightError = "UNSPECIFIED" | "UNKNOWN" | "FILTERING_NOT_ALLOWED_WITH_SEGMENTS" | "LIMIT_NOT_ALLOWED_WITH_SEGMENTS" | "MISSING_FIELD_IN_SELECT_CLAUSE" | "REQUIRES_FILTER_BY_SINGLE_RESOURCE" | "SORTING_NOT_ALLOWED_WITH_SEGMENTS" | "SUMMARY_ROW_NOT_ALLOWED_WITH_SEGMENTS";

export interface SearchTermInsightErrorEnum {

}

export type SearchTermMatchSource = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER_PROVIDED_KEYWORD" | "AI_MAX_KEYWORDLESS" | "AI_MAX_BROAD_MATCH" | "DYNAMIC_SEARCH_ADS" | "PERFORMANCE_MAX" | "VERTICAL_ADS_DATA_FEED";

export interface SearchTermMatchSourceEnum {

}

export type SearchTermMatchType = "UNSPECIFIED" | "UNKNOWN" | "BROAD" | "EXACT" | "PHRASE" | "NEAR_EXACT" | "NEAR_PHRASE" | "AI_MAX" | "PERFORMANCE_MAX";

export interface SearchTermMatchTypeEnum {

}

export type SearchTermTargetingStatus = "UNSPECIFIED" | "UNKNOWN" | "ADDED" | "EXCLUDED" | "ADDED_EXCLUDED" | "NONE";

export interface SearchTermTargetingStatusEnum {

}

export interface SearchTermView {
  readonly resource_name?: string;
  readonly search_term?: string;
  readonly ad_group?: string;
  readonly status?: SearchTermTargetingStatus;
}

export interface SearchThemeInfo {
  readonly text?: string;
}

export interface SearchTopics {
  readonly entities?: ReadonlyArray<AudienceInsightsEntity>;
}

export interface SearchVolumeRange {
  readonly min?: string;
  readonly max?: string;
}

export type SeasonalityEventScope = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER" | "CAMPAIGN" | "CHANNEL";

export interface SeasonalityEventScopeEnum {

}

export type SeasonalityEventStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface SeasonalityEventStatusEnum {

}

export interface SeedInfo {
  readonly url_seed?: string;
  readonly keyword_seeds?: ReadonlyArray<string>;
}

export interface Segments {
  readonly activity_account_id?: string;
  readonly activity_city?: string;
  readonly activity_country?: string;
  readonly activity_rating?: string;
  readonly activity_state?: string;
  readonly external_activity_id?: string;
  readonly ad_destination_type?: AdDestinationType;
  readonly ad_format_type?: AdFormatType;
  readonly ad_network_type?: AdNetworkType;
  readonly ad_group?: string;
  readonly ad_sub_format_type?: AdSubFormatType;
  readonly ad_sub_network_type?: AdSubNetworkType;
  readonly asset_group?: string;
  readonly auction_insight_domain?: string;
  readonly budget_campaign_association_status?: BudgetCampaignAssociationStatus;
  readonly campaign?: string;
  readonly click_type?: ClickType;
  readonly conversion_action?: string;
  readonly conversion_action_category?: ConversionActionCategory;
  readonly conversion_action_name?: string;
  readonly conversion_adjustment?: boolean;
  readonly conversion_attribution_event_type?: ConversionAttributionEventType;
  readonly conversion_lag_bucket?: ConversionLagBucket;
  readonly conversion_or_adjustment_lag_bucket?: ConversionOrAdjustmentLagBucket;
  readonly date?: string;
  readonly day_of_week?: DayOfWeek;
  readonly device?: Device;
  readonly mobile_device_platform?: MobileDevicePlatform;
  readonly external_conversion_source?: ExternalConversionSource;
  readonly geo_target_airport?: string;
  readonly geo_target_canton?: string;
  readonly geo_target_city?: string;
  readonly geo_target_country?: string;
  readonly geo_target_county?: string;
  readonly geo_target_district?: string;
  readonly geo_target_metro?: string;
  readonly geo_target_most_specific_location?: string;
  readonly geo_target_postal_code?: string;
  readonly geo_target_province?: string;
  readonly geo_target_region?: string;
  readonly geo_target_state?: string;
  readonly hotel_booking_window_days?: string;
  readonly hotel_center_id?: string;
  readonly hotel_check_in_date?: string;
  readonly hotel_check_in_day_of_week?: DayOfWeek;
  readonly hotel_city?: string;
  readonly hotel_class?: number;
  readonly hotel_country?: string;
  readonly hotel_date_selection_type?: HotelDateSelectionType;
  readonly hotel_length_of_stay?: number;
  readonly hotel_rate_rule_id?: string;
  readonly hotel_rate_type?: HotelRateType;
  readonly hotel_price_bucket?: HotelPriceBucket;
  readonly hotel_state?: string;
  readonly hour?: number;
  readonly interaction_on_this_extension?: boolean;
  readonly keyword?: Keyword;
  readonly landing_page_source?: LandingPageSource;
  readonly month?: string;
  readonly month_of_year?: MonthOfYear;
  readonly partner_hotel_id?: string;
  readonly product_aggregator_id?: string;
  readonly product_category_level1?: string;
  readonly product_category_level2?: string;
  readonly product_category_level3?: string;
  readonly product_category_level4?: string;
  readonly product_category_level5?: string;
  readonly product_brand?: string;
  readonly product_channel?: ProductChannel;
  readonly product_channel_exclusivity?: ProductChannelExclusivity;
  readonly product_condition?: ProductCondition;
  readonly product_country?: string;
  readonly product_custom_attribute0?: string;
  readonly product_custom_attribute1?: string;
  readonly product_custom_attribute2?: string;
  readonly product_custom_attribute3?: string;
  readonly product_custom_attribute4?: string;
  readonly product_feed_label?: string;
  readonly product_item_id?: string;
  readonly product_language?: string;
  readonly product_merchant_id?: string;
  readonly product_sold_category_level1?: string;
  readonly product_sold_category_level2?: string;
  readonly product_sold_category_level3?: string;
  readonly product_sold_category_level4?: string;
  readonly product_sold_category_level5?: string;
  readonly product_sold_brand?: string;
  readonly product_sold_condition?: ProductCondition;
  readonly product_sold_custom_attribute0?: string;
  readonly product_sold_custom_attribute1?: string;
  readonly product_sold_custom_attribute2?: string;
  readonly product_sold_custom_attribute3?: string;
  readonly product_sold_custom_attribute4?: string;
  readonly product_sold_item_id?: string;
  readonly product_sold_title?: string;
  readonly product_sold_type_l1?: string;
  readonly product_sold_type_l2?: string;
  readonly product_sold_type_l3?: string;
  readonly product_sold_type_l4?: string;
  readonly product_sold_type_l5?: string;
  readonly product_store_id?: string;
  readonly product_title?: string;
  readonly product_type_l1?: string;
  readonly product_type_l2?: string;
  readonly product_type_l3?: string;
  readonly product_type_l4?: string;
  readonly product_type_l5?: string;
  readonly quarter?: string;
  readonly travel_destination_city?: string;
  readonly travel_destination_country?: string;
  readonly travel_destination_region?: string;
  readonly vertical_ads_event_participant_display_names?: string;
  readonly vertical_ads_hotel_class?: string;
  readonly vertical_ads_listing?: string;
  readonly vertical_ads_listing_brand?: string;
  readonly vertical_ads_listing_city?: string;
  readonly vertical_ads_listing_country?: string;
  readonly vertical_ads_listing_region?: string;
  readonly vertical_ads_listing_user_rating?: string;
  readonly vertical_ads_listing_venue?: string;
  readonly vertical_ads_partner_account?: string;
  readonly vertical_ads_vertical?: VerticalAdsItemVerticalType;
  readonly recommendation_type?: RecommendationType;
  readonly search_engine_results_page_type?: SearchEngineResultsPageType;
  readonly search_subcategory?: string;
  readonly search_term?: string;
  readonly search_term_match_type?: SearchTermMatchType;
  readonly match_type?: MatchType;
  readonly slot?: Slot;
  readonly conversion_value_rule_primary_dimension?: ConversionValueRulePrimaryDimension;
  readonly webpage?: string;
  readonly week?: string;
  readonly year?: number;
  readonly sk_ad_network_fine_conversion_value?: string;
  readonly sk_ad_network_redistributed_fine_conversion_value?: string;
  readonly sk_ad_network_user_type?: SkAdNetworkUserType;
  readonly sk_ad_network_ad_event_type?: SkAdNetworkAdEventType;
  readonly sk_ad_network_source_app?: SkAdNetworkSourceApp;
  readonly sk_ad_network_attribution_credit?: SkAdNetworkAttributionCredit;
  readonly sk_ad_network_coarse_conversion_value?: SkAdNetworkCoarseConversionValue;
  readonly sk_ad_network_source_domain?: string;
  readonly sk_ad_network_source_type?: SkAdNetworkSourceType;
  readonly sk_ad_network_postback_sequence_index?: string;
  readonly sk_ad_network_version?: string;
  readonly asset_interaction_target?: AssetInteractionTarget;
  readonly new_versus_returning_customers?: ConvertingUserPriorEngagementTypeAndLtvBucket;
  readonly adjusted_age_range?: AgeRangeType;
  readonly adjusted_gender?: GenderType;
  readonly search_term_match_source?: SearchTermMatchSource;
  readonly search_term_targeting_status?: SearchTermTargetingStatus;
  readonly ad_using_product_data?: boolean;
  readonly ad_using_video?: boolean;
}

export interface SelectiveOptimization {
  readonly conversion_actions?: ReadonlyArray<string>;
}

export type ServedAssetFieldType = "UNSPECIFIED" | "UNKNOWN" | "HEADLINE_1" | "HEADLINE_2" | "HEADLINE_3" | "DESCRIPTION_1" | "DESCRIPTION_2" | "HEADLINE" | "HEADLINE_IN_PORTRAIT" | "LONG_HEADLINE" | "DESCRIPTION" | "DESCRIPTION_IN_PORTRAIT" | "BUSINESS_NAME_IN_PORTRAIT" | "BUSINESS_NAME" | "MARKETING_IMAGE" | "MARKETING_IMAGE_IN_PORTRAIT" | "SQUARE_MARKETING_IMAGE" | "PORTRAIT_MARKETING_IMAGE" | "LOGO" | "LANDSCAPE_LOGO" | "CALL_TO_ACTION" | "YOU_TUBE_VIDEO" | "SITELINK" | "CALL" | "MOBILE_APP" | "CALLOUT" | "STRUCTURED_SNIPPET" | "PRICE" | "PROMOTION" | "AD_IMAGE" | "LEAD_FORM" | "BUSINESS_LOGO" | "DESCRIPTION_PREFIX" | "HEADLINE_AS_SITELINK_POSITION_ONE" | "HEADLINE_AS_SITELINK_POSITION_TWO" | "DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_ONE" | "DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_TWO";

export interface ServedAssetFieldTypeEnum {

}

export interface services_Metrics {
  readonly average_rate_metrics?: RateMetrics;
}

export interface SessionAttributeKeyValuePair {
  readonly session_attribute_key?: string;
  readonly session_attribute_value?: string;
}

export interface SessionAttributesKeyValuePairs {
  readonly key_value_pairs?: ReadonlyArray<SessionAttributeKeyValuePair>;
}

export type SettingError = "UNSPECIFIED" | "UNKNOWN" | "SETTING_TYPE_IS_NOT_AVAILABLE" | "SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN" | "TARGETING_SETTING_CONTAINS_INVALID_CRITERION_TYPE_GROUP" | "TARGETING_SETTING_DEMOGRAPHIC_CRITERION_TYPE_GROUPS_MUST_BE_SET_TO_TARGET_ALL" | "TARGETING_SETTING_CANNOT_CHANGE_TARGET_ALL_TO_FALSE_FOR_DEMOGRAPHIC_CRITERION_TYPE_GROUP" | "DYNAMIC_SEARCH_ADS_SETTING_AT_LEAST_ONE_FEED_ID_MUST_BE_PRESENT" | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_DOMAIN_NAME" | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_SUBDOMAIN_NAME" | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_LANGUAGE_CODE" | "TARGET_ALL_IS_NOT_ALLOWED_FOR_PLACEMENT_IN_SEARCH_CAMPAIGN" | "SETTING_VALUE_NOT_COMPATIBLE_WITH_CAMPAIGN" | "BID_ONLY_IS_NOT_ALLOWED_TO_BE_MODIFIED_WITH_CUSTOMER_MATCH_TARGETING";

export interface SettingErrorEnum {

}

export interface ShareablePreview {
  readonly preview_type?: PreviewType;
  readonly ad_group_ad?: string;
  readonly asset_group?: string;
}

export type ShareablePreviewError = "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED_AD_TYPE" | "TOO_MANY_RESOURCES_IN_REQUEST";

export interface ShareablePreviewErrorEnum {

}

export interface ShareablePreviewResult {
  readonly expiration_date_time?: string;
  readonly ui_preview_result?: UiPreviewResult;
  readonly youtube_live_preview_result?: YouTubeLivePreviewResult;
  readonly ad_group_ad?: string;
  readonly asset_group?: string;
}

export interface SharedCriterion {
  readonly resource_name?: string;
  readonly shared_set?: string;
  readonly criterion_id?: string;
  readonly type?: CriterionType;
  readonly negative?: boolean;
  readonly keyword?: KeywordInfo;
  readonly youtube_video?: YouTubeVideoInfo;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly placement?: PlacementInfo;
  readonly mobile_app_category?: MobileAppCategoryInfo;
  readonly mobile_application?: MobileApplicationInfo;
  readonly brand?: BrandInfo;
  readonly webpage?: WebpageInfo;
  readonly vertical_ads_item_group_rule?: VerticalAdsItemGroupRuleInfo;
  readonly retail_filter?: RetailFilter;
}

export type SharedCriterionError = "UNSPECIFIED" | "UNKNOWN" | "CRITERION_TYPE_NOT_ALLOWED_FOR_SHARED_SET_TYPE";

export interface SharedCriterionErrorEnum {

}

export interface SharedCriterionOperation {
  readonly create?: SharedCriterion;
  readonly remove?: string;
}

export interface SharedSet {
  readonly resource_name?: string;
  readonly id?: string;
  readonly type?: SharedSetType;
  readonly name?: string;
  readonly status?: SharedSetStatus;
  readonly member_count?: string;
  readonly reference_count?: string;
  readonly vertical_ads_item_vertical_type?: VerticalAdsItemVerticalType;
}

export type SharedSetError = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER_CANNOT_CREATE_SHARED_SET_OF_THIS_TYPE" | "DUPLICATE_NAME" | "SHARED_SET_REMOVED" | "SHARED_SET_IN_USE";

export interface SharedSetErrorEnum {

}

export interface SharedSetOperation {
  readonly update_mask?: string;
  readonly create?: SharedSet;
  readonly update?: SharedSet;
  readonly remove?: string;
}

export type SharedSetStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED";

export interface SharedSetStatusEnum {

}

export type SharedSetType = "UNSPECIFIED" | "UNKNOWN" | "NEGATIVE_KEYWORDS" | "NEGATIVE_PLACEMENTS" | "ACCOUNT_LEVEL_NEGATIVE_KEYWORDS" | "BRANDS" | "WEBPAGES" | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST" | "RETAIL_FILTER";

export interface SharedSetTypeEnum {

}

export interface ShoppingAddProductsToCampaignRecommendation {
  readonly merchant?: MerchantInfo;
  readonly feed_label?: string;
  readonly reason?: Reason;
}

export interface ShoppingAddProductsToCampaignRecommendationEnum {

}

export interface ShoppingComparisonListingAdInfo {
  readonly headline?: string;
}

export interface ShoppingFixDisapprovedProductsRecommendation {
  readonly merchant?: MerchantInfo;
  readonly feed_label?: string;
  readonly products_count?: string;
  readonly disapproved_products_count?: string;
}

export interface ShoppingLoyalty {
  readonly loyalty_tier?: string;
}

export interface ShoppingMerchantCenterAccountSuspensionRecommendation {
  readonly merchant?: MerchantInfo;
  readonly feed_label?: string;
}

export interface ShoppingMigrateRegularShoppingCampaignOffersToPerformanceMaxRecommendation {
  readonly merchant?: MerchantInfo;
  readonly feed_label?: string;
}

export interface ShoppingOfferAttributeRecommendation {
  readonly merchant?: MerchantInfo;
  readonly feed_label?: string;
  readonly offers_count?: string;
  readonly demoted_offers_count?: string;
}

export interface ShoppingPerformanceView {
  readonly resource_name?: string;
}

export interface ShoppingProduct {
  readonly resource_name?: string;
  readonly merchant_center_id?: string;
  readonly channel?: ProductChannel;
  readonly language_code?: string;
  readonly feed_label?: string;
  readonly item_id?: string;
  readonly multi_client_account_id?: string;
  readonly title?: string;
  readonly brand?: string;
  readonly product_image_uri?: string;
  readonly price_micros?: string;
  readonly currency_code?: string;
  readonly channel_exclusivity?: ProductChannelExclusivity;
  readonly condition?: ProductCondition;
  readonly availability?: ProductAvailability;
  readonly target_countries?: ReadonlyArray<string>;
  readonly custom_attribute0?: string;
  readonly custom_attribute1?: string;
  readonly custom_attribute2?: string;
  readonly custom_attribute3?: string;
  readonly custom_attribute4?: string;
  readonly category_level1?: string;
  readonly category_level2?: string;
  readonly category_level3?: string;
  readonly category_level4?: string;
  readonly category_level5?: string;
  readonly product_type_level1?: string;
  readonly product_type_level2?: string;
  readonly product_type_level3?: string;
  readonly product_type_level4?: string;
  readonly product_type_level5?: string;
  readonly effective_max_cpc_micros?: string;
  readonly status?: ProductStatus;
  readonly issues?: ReadonlyArray<ProductIssue>;
  readonly campaign?: string;
  readonly ad_group?: string;
}

export interface ShoppingProductAdInfo {

}

export type ShoppingProductError = "UNSPECIFIED" | "UNKNOWN" | "MISSING_CAMPAIGN_FILTER" | "MISSING_AD_GROUP_FILTER" | "UNSUPPORTED_DATE_SEGMENTATION";

export interface ShoppingProductErrorEnum {

}

export interface ShoppingSetting {
  readonly merchant_id?: string;
  readonly feed_label?: string;
  readonly campaign_priority?: number;
  readonly enable_local?: boolean;
  readonly use_vehicle_inventory?: boolean;
  readonly advertising_partner_ids?: ReadonlyArray<string>;
  readonly disable_product_feed?: boolean;
  readonly ignore_brand_exclusion_in_shopping_ads?: boolean;
}

export interface ShoppingSmartAdInfo {

}

export interface ShoppingTargetAllOffersRecommendation {
  readonly merchant?: MerchantInfo;
  readonly untargeted_offers_count?: string;
  readonly feed_label?: string;
}

export interface SimilarUserListInfo {
  readonly seed_user_list?: string;
}

export type SimulationModificationMethod = "UNSPECIFIED" | "UNKNOWN" | "UNIFORM" | "DEFAULT" | "SCALING";

export interface SimulationModificationMethodEnum {

}

export type SimulationType = "UNSPECIFIED" | "UNKNOWN" | "CPC_BID" | "CPV_BID" | "TARGET_CPA" | "BID_MODIFIER" | "TARGET_ROAS" | "PERCENT_CPC_BID" | "TARGET_IMPRESSION_SHARE" | "BUDGET";

export interface SimulationTypeEnum {

}

export interface SitelinkAsset {
  readonly link_text?: string;
  readonly description1?: string;
  readonly description2?: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly ad_schedule_targets?: ReadonlyArray<AdScheduleInfo>;
}

export interface SitelinkAssetParameters {
  readonly ad_asset_apply_parameters?: AdAssetApplyParameters;
}

export interface SitelinkAssetRecommendation {
  readonly recommended_campaign_sitelink_assets?: ReadonlyArray<Asset>;
  readonly recommended_customer_sitelink_assets?: ReadonlyArray<Asset>;
}

export interface SitelinkExtensionParameters {
  readonly sitelink_extensions?: ReadonlyArray<SitelinkFeedItem>;
}

export interface SitelinkFeedItem {
  readonly link_text?: string;
  readonly line1?: string;
  readonly line2?: string;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly tracking_url_template?: string;
  readonly url_custom_parameters?: ReadonlyArray<CustomParameter>;
  readonly final_url_suffix?: string;
}

export interface SiteSeed {
  readonly site?: string;
}

export type SizeLimitError = "UNSPECIFIED" | "UNKNOWN" | "REQUEST_SIZE_LIMIT_EXCEEDED" | "RESPONSE_SIZE_LIMIT_EXCEEDED";

export interface SizeLimitErrorEnum {

}

export type SkAdNetworkAdEventType = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "INTERACTION" | "VIEW";

export interface SkAdNetworkAdEventTypeEnum {

}

export type SkAdNetworkAttributionCredit = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "WON" | "CONTRIBUTED";

export interface SkAdNetworkAttributionCreditEnum {

}

export type SkAdNetworkCoarseConversionValue = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "LOW" | "MEDIUM" | "HIGH" | "NONE";

export interface SkAdNetworkCoarseConversionValueEnum {

}

export interface SkAdNetworkConversionValueSchema {
  readonly app_id?: string;
  readonly measurement_window_hours?: number;
  readonly fine_grained_conversion_value_mappings?: ReadonlyArray<FineGrainedConversionValueMappings>;
  readonly postback_mappings?: ReadonlyArray<PostbackMapping>;
}

export interface SkAdNetworkSourceApp {
  readonly sk_ad_network_source_app_id?: string;
}

export type SkAdNetworkSourceType = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "WEBSITE" | "MOBILE_APPLICATION";

export interface SkAdNetworkSourceTypeEnum {

}

export type SkAdNetworkUserType = "UNSPECIFIED" | "UNKNOWN" | "UNAVAILABLE" | "NEW_INSTALLER" | "REINSTALLER";

export interface SkAdNetworkUserTypeEnum {

}

export type Slot = "UNSPECIFIED" | "UNKNOWN" | "SEARCH_SIDE" | "SEARCH_TOP" | "SEARCH_OTHER" | "CONTENT" | "SEARCH_PARTNER_TOP" | "SEARCH_PARTNER_OTHER" | "MIXED";

export interface SlotEnum {

}

export interface SmartCampaignAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
}

export interface SmartCampaignEligibleDetails {
  readonly last_impression_date_time?: string;
  readonly end_date_time?: string;
}

export interface SmartCampaignEndedDetails {
  readonly end_date_time?: string;
}

export type SmartCampaignError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_BUSINESS_LOCATION_ID" | "INVALID_CAMPAIGN" | "BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING" | "REQUIRED_SUGGESTION_FIELD_MISSING" | "GEO_TARGETS_REQUIRED" | "CANNOT_DETERMINE_SUGGESTION_LOCALE" | "FINAL_URL_NOT_CRAWLABLE" | "CREATION_FAILED";

export interface SmartCampaignErrorEnum {

}

export interface SmartCampaignNotEligibleDetails {
  readonly not_eligible_reason?: SmartCampaignNotEligibleReason;
}

export type SmartCampaignNotEligibleReason = "UNSPECIFIED" | "UNKNOWN" | "ACCOUNT_ISSUE" | "BILLING_ISSUE" | "BUSINESS_PROFILE_LOCATION_REMOVED" | "ALL_ADS_DISAPPROVED";

export interface SmartCampaignNotEligibleReasonEnum {

}

export interface SmartCampaignPausedDetails {
  readonly paused_date_time?: string;
}

export interface SmartCampaignRemovedDetails {
  readonly removed_date_time?: string;
}

export interface SmartCampaignSearchTermView {
  readonly resource_name?: string;
  readonly search_term?: string;
  readonly campaign?: string;
}

export interface SmartCampaignSetting {
  readonly resource_name?: string;
  readonly campaign?: string;
  readonly phone_number?: PhoneNumber;
  readonly advertising_language_code?: string;
  readonly final_url?: string;
  readonly ad_optimized_business_profile_setting?: AdOptimizedBusinessProfileSetting;
  readonly business_name?: string;
  readonly business_profile_location?: string;
}

export interface SmartCampaignSettingOperation {
  readonly update?: SmartCampaignSetting;
  readonly update_mask?: string;
}

export type SmartCampaignStatus = "UNSPECIFIED" | "UNKNOWN" | "PAUSED" | "NOT_ELIGIBLE" | "PENDING" | "ELIGIBLE" | "REMOVED" | "ENDED";

export interface SmartCampaignStatusEnum {

}

export interface SmartCampaignSuggestionInfo {
  readonly final_url?: string;
  readonly language_code?: string;
  readonly ad_schedules?: ReadonlyArray<AdScheduleInfo>;
  readonly keyword_themes?: ReadonlyArray<KeywordThemeInfo>;
  readonly business_context?: BusinessContext;
  readonly business_profile_location?: string;
  readonly location_list?: LocationList;
  readonly proximity?: ProximityInfo;
}

export interface SourceImage {
  readonly image_data?: string;
}

export interface Spend {
  readonly award_amount?: unknown;
  readonly required_amount?: unknown;
}

export type SpendingLimitType = "UNSPECIFIED" | "UNKNOWN" | "INFINITE";

export interface SpendingLimitTypeEnum {

}

export interface StartIdentityVerificationRequest {
  readonly customer_id?: string;
  readonly verification_program?: IdentityVerificationProgram;
}

export interface StoreAttribute {
  readonly store_code?: string;
}

export interface StoreSalesMetadata {
  readonly loyalty_fraction?: number;
  readonly transaction_upload_fraction?: number;
  readonly custom_key?: string;
  readonly third_party_metadata?: StoreSalesThirdPartyMetadata;
}

export interface StoreSalesThirdPartyMetadata {
  readonly advertiser_upload_date_time?: string;
  readonly valid_transaction_fraction?: number;
  readonly partner_match_fraction?: number;
  readonly partner_upload_fraction?: number;
  readonly bridge_map_version_id?: string;
  readonly partner_id?: string;
}

export type StringFormatError = "UNSPECIFIED" | "UNKNOWN" | "ILLEGAL_CHARS" | "INVALID_FORMAT";

export interface StringFormatErrorEnum {

}

export type StringLengthError = "UNSPECIFIED" | "UNKNOWN" | "EMPTY" | "TOO_SHORT" | "TOO_LONG";

export interface StringLengthErrorEnum {

}

export interface StructuredSnippetAsset {
  readonly header?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface SuggestBrandsRequest {
  readonly customer_id?: string;
  readonly brand_prefix?: string;
  readonly selected_brands?: ReadonlyArray<string>;
}

export interface SuggestBrandsResponse {
  readonly brands?: ReadonlyArray<BrandSuggestion>;
}

export interface SuggestGeoTargetConstantsRequest {
  readonly locale?: string;
  readonly country_code?: string;
  readonly location_names?: LocationNames;
  readonly geo_targets?: GeoTargets;
}

export interface SuggestGeoTargetConstantsResponse {
  readonly geo_target_constant_suggestions?: ReadonlyArray<GeoTargetConstantSuggestion>;
}

export interface SuggestKeywordThemeConstantsRequest {
  readonly query_text?: string;
  readonly country_code?: string;
  readonly language_code?: string;
}

export interface SuggestKeywordThemeConstantsResponse {
  readonly keyword_theme_constants?: ReadonlyArray<KeywordThemeConstant>;
}

export interface SuggestKeywordThemesRequest {
  readonly customer_id?: string;
  readonly suggestion_info?: SmartCampaignSuggestionInfo;
}

export interface SuggestKeywordThemesResponse {
  readonly keyword_themes?: ReadonlyArray<KeywordTheme>;
}

export interface SuggestSmartCampaignAdRequest {
  readonly customer_id?: string;
  readonly suggestion_info?: SmartCampaignSuggestionInfo;
}

export interface SuggestSmartCampaignAdResponse {
  readonly ad_info?: SmartCampaignAdInfo;
}

export interface SuggestSmartCampaignBudgetOptionsRequest {
  readonly customer_id?: string;
  readonly campaign?: string;
  readonly suggestion_info?: SmartCampaignSuggestionInfo;
}

export interface SuggestSmartCampaignBudgetOptionsResponse {
  readonly low?: BudgetOption;
  readonly recommended?: BudgetOption;
  readonly high?: BudgetOption;
}

export interface SuggestSmartCampaignBudgetOptionsResponse_Metrics {
  readonly min_daily_clicks?: string;
  readonly max_daily_clicks?: string;
}

export interface SuggestTravelAssetsRequest {
  readonly customer_id?: string;
  readonly language_option?: string;
  readonly place_ids?: ReadonlyArray<string>;
}

export interface SuggestTravelAssetsResponse {
  readonly hotel_asset_suggestions?: ReadonlyArray<HotelAssetSuggestion>;
}

export type SummaryRowSetting = "UNSPECIFIED" | "UNKNOWN" | "NO_SUMMARY_ROW" | "SUMMARY_ROW_WITH_RESULTS" | "SUMMARY_ROW_ONLY";

export interface SummaryRowSettingEnum {

}

export interface SurfaceTargeting {
  readonly surfaces?: ReadonlyArray<ReachPlanSurface>;
}

export interface SurfaceTargetingCombinations {
  readonly default_targeting?: SurfaceTargeting;
  readonly available_targeting_combinations?: ReadonlyArray<SurfaceTargeting>;
}

export type SurveyAnswer = "UNSPECIFIED" | "UNKNOWN" | "VERY_SATISFIED" | "SATISFIED" | "NEUTRAL" | "DISSATISFIED" | "VERY_DISSATISFIED";

export interface SurveyDissatisfied {
  readonly survey_dissatisfied_reason?: SurveyDissatisfiedReason;
  readonly other_reason_comment?: string;
}

export type SurveyDissatisfiedReason = "UNSPECIFIED" | "UNKNOWN" | "OTHER_DISSATISFIED_REASON" | "GEO_MISMATCH" | "JOB_TYPE_MISMATCH" | "NOT_READY_TO_BOOK" | "SPAM" | "DUPLICATE" | "SOLICITATION";

export interface SurveySatisfied {
  readonly survey_satisfied_reason?: SurveySatisfiedReason;
  readonly other_reason_comment?: string;
}

export type SurveySatisfiedReason = "UNSPECIFIED" | "UNKNOWN" | "OTHER_SATISFIED_REASON" | "BOOKED_CUSTOMER" | "LIKELY_BOOKED_CUSTOMER" | "SERVICE_RELATED" | "HIGH_VALUE_SERVICE";

export interface SyntheticContentAttestation {
  readonly status?: SyntheticContentAttestationStatus;
  readonly source?: SyntheticContentSource;
}

export type SyntheticContentAttestationStatus = "UNSPECIFIED" | "UNKNOWN" | "NOT_SYNTHETIC" | "IS_SYNTHETIC";

export interface SyntheticContentAttestationStatusEnum {

}

export interface SyntheticContentInfo {
  readonly advertiser_attestation?: SyntheticContentAttestation;
  readonly system_attestation?: SyntheticContentAttestation;
}

export type SyntheticContentSource = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER_ATTESTED" | "GOOGLE_GENERATED_ADVERTISER_REVIEWED" | "GOOGLE_GENERATED_FULLY_AUTOMATED";

export interface SyntheticContentSourceEnum {

}

export type SystemManagedResourceSource = "UNSPECIFIED" | "UNKNOWN" | "AD_VARIATIONS";

export interface SystemManagedResourceSourceEnum {

}

export interface TagSnippet {
  readonly type?: TrackingCodeType;
  readonly page_format?: TrackingCodePageFormat;
  readonly global_site_tag?: string;
  readonly event_snippet?: string;
}

export interface TargetAdjustmentInfo {
  readonly shared_set?: string;
  readonly recommended_target_multiplier?: number;
  readonly current_average_target_micros?: string;
}

export interface TargetCpa {
  readonly target_cpa_micros?: string;
  readonly cpc_bid_ceiling_micros?: string;
  readonly cpc_bid_floor_micros?: string;
}

export interface TargetCpaOptInParameters {
  readonly target_cpa_micros?: string;
  readonly new_campaign_budget_amount_micros?: string;
}

export interface TargetCpaOptInRecommendation {
  readonly options?: ReadonlyArray<TargetCpaOptInRecommendationOption>;
  readonly recommended_target_cpa_micros?: string;
}

export type TargetCpaOptInRecommendationGoal = "UNSPECIFIED" | "UNKNOWN" | "SAME_COST" | "SAME_CONVERSIONS" | "SAME_CPA" | "CLOSEST_CPA";

export interface TargetCpaOptInRecommendationGoalEnum {

}

export interface TargetCpaOptInRecommendationOption {
  readonly goal?: TargetCpaOptInRecommendationGoal;
  readonly target_cpa_micros?: string;
  readonly required_campaign_budget_amount_micros?: string;
  readonly impact?: RecommendationImpact;
}

export interface TargetCpaSimulationPoint {
  readonly required_budget_amount_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly app_installs?: number;
  readonly in_app_actions?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
  readonly interactions?: string;
  readonly target_cpa_micros?: string;
  readonly target_cpa_scaling_modifier?: number;
}

export interface TargetCpaSimulationPointList {
  readonly points?: ReadonlyArray<TargetCpaSimulationPoint>;
}

export interface TargetCpc {
  readonly target_cpc_micros?: string;
}

export interface TargetCpm {
  readonly target_frequency_goal?: TargetCpmTargetFrequencyGoal;
}

export interface TargetCpmTargetFrequencyGoal {
  readonly target_count?: string;
  readonly time_unit?: TargetFrequencyTimeUnit;
}

export interface TargetCpv {

}

export interface TargetFrequencySettings {
  readonly time_unit?: TargetFrequencyTimeUnit;
  readonly target_frequency?: number;
}

export type TargetFrequencyTimeUnit = "UNSPECIFIED" | "UNKNOWN" | "WEEKLY" | "MONTHLY";

export interface TargetFrequencyTimeUnitEnum {

}

export interface TargetImpressionShare {
  readonly location?: TargetImpressionShareLocation;
  readonly location_fraction_micros?: string;
  readonly cpc_bid_ceiling_micros?: string;
}

export interface TargetImpressionShareInfo {
  readonly location?: TargetImpressionShareLocation;
  readonly target_impression_share_micros?: string;
  readonly max_cpc_bid_ceiling?: string;
}

export type TargetImpressionShareLocation = "UNSPECIFIED" | "UNKNOWN" | "ANYWHERE_ON_PAGE" | "TOP_OF_PAGE" | "ABSOLUTE_TOP_OF_PAGE";

export interface TargetImpressionShareLocationEnum {

}

export interface TargetImpressionShareSimulationPoint {
  readonly target_impression_share_micros?: string;
  readonly required_cpc_bid_ceiling_micros?: string;
  readonly required_budget_amount_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
  readonly absolute_top_impressions?: string;
}

export interface TargetImpressionShareSimulationPointList {
  readonly points?: ReadonlyArray<TargetImpressionShareSimulationPoint>;
}

export interface Targeting {
  readonly plannable_location_ids?: ReadonlyArray<string>;
  readonly age_range?: ReachPlanAgeRange;
  readonly genders?: ReadonlyArray<GenderInfo>;
  readonly devices?: ReadonlyArray<DeviceInfo>;
  readonly network?: ReachPlanNetwork;
  readonly audience_targeting?: AudienceTargeting;
}

export type TargetingDimension = "UNSPECIFIED" | "UNKNOWN" | "KEYWORD" | "AUDIENCE" | "TOPIC" | "GENDER" | "AGE_RANGE" | "PLACEMENT" | "PARENTAL_STATUS" | "INCOME_RANGE";

export interface TargetingDimensionEnum {

}

export interface TargetingExpansionView {
  readonly resource_name?: string;
}

export interface TargetingSetting {
  readonly target_restrictions?: ReadonlyArray<TargetRestriction>;
  readonly target_restriction_operations?: ReadonlyArray<TargetRestrictionOperation>;
}

export interface TargetingSuggestionMetrics {
  readonly locations?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly age_ranges?: ReadonlyArray<AgeRangeInfo>;
  readonly gender?: GenderInfo;
  readonly parental_status?: ParentalStatusInfo;
  readonly user_interests?: ReadonlyArray<AudienceInsightsAttributeMetadataGroup>;
  readonly coverage?: number;
  readonly index?: number;
  readonly potential_youtube_reach?: string;
}

export interface TargetRestriction {
  readonly targeting_dimension?: TargetingDimension;
  readonly bid_only?: boolean;
}

export interface TargetRestrictionOperation {
  readonly operator?: Operator;
  readonly value?: TargetRestriction;
}

export interface TargetRoas {
  readonly target_roas?: number;
  readonly cpc_bid_ceiling_micros?: string;
  readonly cpc_bid_floor_micros?: string;
  readonly target_roas_tolerance_percent_millis?: string;
}

export interface TargetRoasOptInParameters {
  readonly target_roas?: number;
  readonly new_campaign_budget_amount_micros?: string;
}

export interface TargetRoasOptInRecommendation {
  readonly recommended_target_roas?: number;
  readonly required_campaign_budget_amount_micros?: string;
}

export interface TargetRoasSimulationPoint {
  readonly target_roas?: number;
  readonly required_budget_amount_micros?: string;
  readonly biddable_conversions?: number;
  readonly biddable_conversions_value?: number;
  readonly clicks?: string;
  readonly cost_micros?: string;
  readonly impressions?: string;
  readonly top_slot_impressions?: string;
}

export interface TargetRoasSimulationPointList {
  readonly points?: ReadonlyArray<TargetRoasSimulationPoint>;
}

export interface TargetSpend {
  readonly target_spend_micros?: string;
  readonly cpc_bid_ceiling_micros?: string;
}

export interface TextAdInfo {
  readonly headline?: string;
  readonly description1?: string;
  readonly description2?: string;
}

export interface TextAdParameters {
  readonly ad?: Ad;
}

export interface TextAdRecommendation {
  readonly ad?: Ad;
  readonly creation_date?: string;
  readonly auto_apply_date?: string;
}

export interface TextAsset {
  readonly text?: string;
}

export interface TextGuidelines {
  readonly term_exclusions?: ReadonlyArray<string>;
  readonly messaging_restrictions?: ReadonlyArray<MessagingRestriction>;
}

export interface TextLabel {
  readonly background_color?: string;
  readonly description?: string;
}

export interface TextList {
  readonly texts?: ReadonlyArray<string>;
}

export interface ThirdPartyAppAnalyticsLink {
  readonly resource_name?: string;
  readonly shareable_link_id?: string;
}

export type ThirdPartyAppAnalyticsLinkError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_ANALYTICS_PROVIDER_ID" | "INVALID_MOBILE_APP_ID" | "MOBILE_APP_IS_NOT_ENABLED" | "CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK";

export interface ThirdPartyAppAnalyticsLinkErrorEnum {

}

export interface ThirdPartyAppAnalyticsLinkIdentifier {
  readonly app_analytics_provider_id?: string;
  readonly app_id?: string;
  readonly app_vendor?: MobileAppVendor;
}

export interface ThirdPartyAppAnalyticsSettings {
  readonly event_name?: string;
  readonly provider_name?: string;
}

export type ThirdPartyBrandLiftIntegrationPartner = "UNSPECIFIED" | "UNKNOWN" | "KANTAR_MILLWARD_BROWN" | "DYNATA" | "INTAGE" | "MACROMILL";

export interface ThirdPartyBrandLiftIntegrationPartnerEnum {

}

export type ThirdPartyBrandSafetyIntegrationPartner = "UNSPECIFIED" | "UNKNOWN" | "DOUBLE_VERIFY" | "INTEGRAL_AD_SCIENCE" | "ZEFR";

export interface ThirdPartyBrandSafetyIntegrationPartnerEnum {

}

export type ThirdPartyConversionAttributionIntegrationPartner = "UNSPECIFIED" | "UNKNOWN" | "TRANSUNION";

export interface ThirdPartyConversionAttributionIntegrationPartnerEnum {

}

export interface ThirdPartyIntegrationPartnerData {
  readonly client_id?: string;
  readonly third_party_placement_id?: string;
}

export type ThirdPartyReachIntegrationPartner = "UNSPECIFIED" | "UNKNOWN" | "NIELSEN" | "COMSCORE" | "KANTAR_MILLWARD_BROWN" | "VIDEO_RESEARCH" | "GEMIUS" | "MEDIA_SCOPE" | "AUDIENCE_PROJECT" | "VIDEO_AMP" | "ISPOT_TV";

export interface ThirdPartyReachIntegrationPartnerEnum {

}

export type ThirdPartyViewabilityIntegrationPartner = "UNSPECIFIED" | "UNKNOWN" | "DOUBLE_VERIFY" | "INTEGRAL_AD_SCIENCE" | "ZEFR";

export interface ThirdPartyViewabilityIntegrationPartnerEnum {

}

export type TimeType = "UNSPECIFIED" | "UNKNOWN" | "NOW" | "FOREVER";

export interface TimeTypeEnum {

}

export type TimeZoneError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_TIME_ZONE";

export interface TimeZoneErrorEnum {

}

export interface TopicConstant {
  readonly resource_name?: string;
  readonly id?: string;
  readonly topic_constant_parent?: string;
  readonly path?: ReadonlyArray<string>;
}

export interface TopicInfo {
  readonly topic_constant?: string;
  readonly path?: ReadonlyArray<string>;
}

export interface TopicView {
  readonly resource_name?: string;
}

export type TrackingCodePageFormat = "UNSPECIFIED" | "UNKNOWN" | "HTML" | "AMP";

export interface TrackingCodePageFormatEnum {

}

export type TrackingCodeType = "UNSPECIFIED" | "UNKNOWN" | "WEBPAGE" | "WEBPAGE_ONCLICK" | "CLICK_TO_CALL" | "WEBSITE_CALL";

export interface TrackingCodeTypeEnum {

}

export interface TrackingSetting {
  readonly tracking_url?: string;
}

export interface TransactionAttribute {
  readonly transaction_date_time?: string;
  readonly transaction_amount_micros?: number;
  readonly currency_code?: string;
  readonly conversion_action?: string;
  readonly order_id?: string;
  readonly store_attribute?: StoreAttribute;
  readonly custom_value?: string;
  readonly item_attribute?: ItemAttribute;
}

export interface TravelActivityGroupView {
  readonly resource_name?: string;
}

export interface TravelActivityPerformanceView {
  readonly resource_name?: string;
}

export interface TravelAdInfo {

}

export interface TravelCampaignSettings {
  readonly travel_account_id?: string;
}

export interface TravelFeedData {
  readonly subset_id?: string;
  readonly travel_feed_vertical_type?: VerticalAdsItemVerticalType;
  readonly hotel_center_account_id?: string;
  readonly merchant_center_id?: string;
  readonly partner_center_id?: string;
}

export interface TrendInsight {
  readonly trend_attribute?: AudienceInsightsAttributeMetadata;
  readonly trend_metrics?: TrendInsightMetrics;
  readonly trend?: InsightsTrend;
  readonly trend_data_points?: ReadonlyArray<TrendInsightDataPoint>;
  readonly related_videos?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly related_creators?: ReadonlyArray<YouTubeCreatorInsights>;
  readonly related_local_creators?: ReadonlyArray<YouTubeCreatorInsights>;
}

export interface TrendInsightDataPoint {
  readonly month?: string;
  readonly trend_metrics?: TrendInsightMetrics;
}

export interface TrendInsightMetrics {
  readonly views_count?: string;
  readonly views_indexed_value?: string;
  readonly audience_share?: number;
  readonly trend_change_percent?: number;
}

export interface UiPreviewResult {
  readonly shareable_preview_url?: string;
}

export type UnitOfMeasure = "UNSPECIFIED" | "UNKNOWN" | "CLICKS" | "IMPRESSIONS" | "ACQUISITIONS" | "PHONE_CALLS" | "VIDEO_PLAYS" | "DAYS" | "AUDIO_PLAYS" | "ENGAGEMENTS" | "SECONDS" | "LEADS" | "GUEST_STAYS" | "HOURS";

export interface UnitOfMeasureEnum {

}

export interface UniversityDegree {
  readonly institution_name?: string;
  readonly degree?: string;
  readonly graduation_year?: number;
}

export interface UnknownListingDimensionInfo {

}

export interface UnusableAdGroup {
  readonly ad_group?: string;
  readonly campaign?: string;
}

export interface UpdateDataLinkRequest {
  readonly customer_id?: string;
  readonly data_link_status?: DataLinkStatus;
  readonly resource_name?: string;
}

export interface UpdateDataLinkResponse {
  readonly resource_name?: string;
}

export interface UpdateProductLinkInvitationRequest {
  readonly customer_id?: string;
  readonly product_link_invitation_status?: ProductLinkInvitationStatus;
  readonly resource_name?: string;
}

export interface UpdateProductLinkInvitationResponse {
  readonly resource_name?: string;
}

export interface UpdateYouTubeVideoUploadRequest {
  readonly customer_id?: string;
  readonly you_tube_video_upload?: YouTubeVideoUpload;
  readonly update_mask?: string;
}

export interface UpdateYouTubeVideoUploadResponse {
  readonly resource_name?: string;
}

export interface UpgradeLocalCampaignToPerformanceMaxRecommendation {

}

export interface UpgradeSmartShoppingCampaignToPerformanceMaxRecommendation {
  readonly merchant_id?: string;
  readonly sales_country_code?: string;
}

export interface UploadCallConversionsRequest {
  readonly customer_id?: string;
  readonly conversions?: ReadonlyArray<CallConversion>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
}

export interface UploadCallConversionsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<CallConversionResult>;
}

export interface UploadClickConversionsRequest {
  readonly customer_id?: string;
  readonly conversions?: ReadonlyArray<ClickConversion>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly job_id?: number;
}

export interface UploadClickConversionsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<ClickConversionResult>;
  readonly job_id?: string;
}

export interface UploadConversionAdjustmentsRequest {
  readonly customer_id?: string;
  readonly conversion_adjustments?: ReadonlyArray<ConversionAdjustment>;
  readonly partial_failure?: boolean;
  readonly validate_only?: boolean;
  readonly job_id?: number;
}

export interface UploadConversionAdjustmentsResponse {
  readonly partial_failure_error?: unknown;
  readonly results?: ReadonlyArray<ConversionAdjustmentResult>;
  readonly job_id?: string;
}

export interface UploadUserDataRequest {
  readonly customer_id?: string;
  readonly operations?: ReadonlyArray<UserDataOperation>;
  readonly customer_match_user_list_metadata?: CustomerMatchUserListMetadata;
}

export interface UploadUserDataResponse {
  readonly upload_date_time?: string;
  readonly received_operations_count?: number;
}

export interface UrlCollection {
  readonly url_collection_id?: string;
  readonly final_urls?: ReadonlyArray<string>;
  readonly final_mobile_urls?: ReadonlyArray<string>;
  readonly tracking_url_template?: string;
}

export type UrlFieldError = "UNSPECIFIED" | "UNKNOWN" | "INVALID_TRACKING_URL_TEMPLATE" | "INVALID_TAG_IN_TRACKING_URL_TEMPLATE" | "MISSING_TRACKING_URL_TEMPLATE_TAG" | "MISSING_PROTOCOL_IN_TRACKING_URL_TEMPLATE" | "INVALID_PROTOCOL_IN_TRACKING_URL_TEMPLATE" | "MALFORMED_TRACKING_URL_TEMPLATE" | "MISSING_HOST_IN_TRACKING_URL_TEMPLATE" | "INVALID_TLD_IN_TRACKING_URL_TEMPLATE" | "REDUNDANT_NESTED_TRACKING_URL_TEMPLATE_TAG" | "INVALID_FINAL_URL" | "INVALID_TAG_IN_FINAL_URL" | "REDUNDANT_NESTED_FINAL_URL_TAG" | "MISSING_PROTOCOL_IN_FINAL_URL" | "INVALID_PROTOCOL_IN_FINAL_URL" | "MALFORMED_FINAL_URL" | "MISSING_HOST_IN_FINAL_URL" | "INVALID_TLD_IN_FINAL_URL" | "INVALID_FINAL_MOBILE_URL" | "INVALID_TAG_IN_FINAL_MOBILE_URL" | "REDUNDANT_NESTED_FINAL_MOBILE_URL_TAG" | "MISSING_PROTOCOL_IN_FINAL_MOBILE_URL" | "INVALID_PROTOCOL_IN_FINAL_MOBILE_URL" | "MALFORMED_FINAL_MOBILE_URL" | "MISSING_HOST_IN_FINAL_MOBILE_URL" | "INVALID_TLD_IN_FINAL_MOBILE_URL" | "INVALID_FINAL_APP_URL" | "INVALID_TAG_IN_FINAL_APP_URL" | "REDUNDANT_NESTED_FINAL_APP_URL_TAG" | "MULTIPLE_APP_URLS_FOR_OSTYPE" | "INVALID_OSTYPE" | "INVALID_PROTOCOL_FOR_APP_URL" | "INVALID_PACKAGE_ID_FOR_APP_URL" | "URL_CUSTOM_PARAMETERS_COUNT_EXCEEDS_LIMIT" | "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_KEY" | "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_VALUE" | "INVALID_TAG_IN_URL_CUSTOM_PARAMETER_VALUE" | "REDUNDANT_NESTED_URL_CUSTOM_PARAMETER_TAG" | "MISSING_PROTOCOL" | "INVALID_PROTOCOL" | "INVALID_URL" | "DESTINATION_URL_DEPRECATED" | "INVALID_TAG_IN_URL" | "MISSING_URL_TAG" | "DUPLICATE_URL_ID" | "INVALID_URL_ID" | "FINAL_URL_SUFFIX_MALFORMED" | "INVALID_TAG_IN_FINAL_URL_SUFFIX" | "INVALID_TOP_LEVEL_DOMAIN" | "MALFORMED_TOP_LEVEL_DOMAIN" | "MALFORMED_URL" | "MISSING_HOST" | "NULL_CUSTOM_PARAMETER_VALUE" | "VALUE_TRACK_PARAMETER_NOT_SUPPORTED" | "UNSUPPORTED_APP_STORE";

export interface UrlFieldErrorEnum {

}

export interface UrlSeed {
  readonly url?: string;
}

export interface UseBroadMatchKeywordParameters {
  readonly new_budget_amount_micros?: string;
}

export interface UseBroadMatchKeywordRecommendation {
  readonly keyword?: ReadonlyArray<KeywordInfo>;
  readonly suggested_keywords_count?: string;
  readonly campaign_keywords_count?: string;
  readonly campaign_uses_shared_budget?: boolean;
  readonly required_campaign_budget_amount_micros?: string;
}

export interface UserAttribute {
  readonly lifetime_value_micros?: string;
  readonly lifetime_value_bucket?: number;
  readonly last_purchase_date_time?: string;
  readonly average_purchase_count?: number;
  readonly average_purchase_value_micros?: string;
  readonly acquisition_date_time?: string;
  readonly shopping_loyalty?: ShoppingLoyalty;
  readonly lifecycle_stage?: string;
  readonly first_purchase_date_time?: string;
  readonly event_attribute?: ReadonlyArray<EventAttribute>;
}

export interface UserData {
  readonly user_identifiers?: ReadonlyArray<UserIdentifier>;
  readonly transaction_attribute?: TransactionAttribute;
  readonly user_attribute?: UserAttribute;
  readonly consent?: Consent;
}

export type UserDataError = "UNSPECIFIED" | "UNKNOWN" | "OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED" | "TOO_MANY_USER_IDENTIFIERS" | "USER_LIST_NOT_APPLICABLE";

export interface UserDataErrorEnum {

}

export interface UserDataOperation {
  readonly create?: UserData;
  readonly remove?: UserData;
}

export interface UserIdentifier {
  readonly user_identifier_source?: UserIdentifierSource;
  readonly hashed_email?: string;
  readonly hashed_phone_number?: string;
  readonly mobile_id?: string;
  readonly third_party_user_id?: string;
  readonly address_info?: OfflineUserAddressInfo;
}

export type UserIdentifierSource = "UNSPECIFIED" | "UNKNOWN" | "FIRST_PARTY" | "THIRD_PARTY";

export interface UserIdentifierSourceEnum {

}

export interface UserInterest {
  readonly resource_name?: string;
  readonly taxonomy_type?: UserInterestTaxonomyType;
  readonly user_interest_id?: string;
  readonly name?: string;
  readonly user_interest_parent?: string;
  readonly launched_to_all?: boolean;
  readonly availabilities?: ReadonlyArray<CriterionCategoryAvailability>;
}

export interface UserInterestAttributeMetadata {
  readonly user_interest_description?: string;
}

export interface UserInterestInfo {
  readonly user_interest_category?: string;
}

export interface UserInterestSegment {
  readonly user_interest_category?: string;
}

export type UserInterestTaxonomyType = "UNSPECIFIED" | "UNKNOWN" | "AFFINITY" | "IN_MARKET" | "MOBILE_APP_INSTALL_USER" | "VERTICAL_GEO" | "NEW_SMART_PHONE_USER";

export interface UserInterestTaxonomyTypeEnum {

}

export interface UserList {
  readonly resource_name?: string;
  readonly id?: string;
  readonly read_only?: boolean;
  readonly name?: string;
  readonly description?: string;
  readonly membership_status?: UserListMembershipStatus;
  readonly integration_code?: string;
  readonly membership_life_span?: string;
  readonly size_for_display?: string;
  readonly size_range_for_display?: UserListSizeRange;
  readonly size_for_search?: string;
  readonly size_range_for_search?: UserListSizeRange;
  readonly type?: UserListType;
  readonly closing_reason?: UserListClosingReason;
  readonly access_reason?: AccessReason;
  readonly account_user_list_status?: UserListAccessStatus;
  readonly eligible_for_search?: boolean;
  readonly eligible_for_display?: boolean;
  readonly match_rate_percentage?: number;
  readonly crm_based_user_list?: CrmBasedUserListInfo;
  readonly similar_user_list?: SimilarUserListInfo;
  readonly rule_based_user_list?: RuleBasedUserListInfo;
  readonly logical_user_list?: LogicalUserListInfo;
  readonly basic_user_list?: BasicUserListInfo;
  readonly lookalike_user_list?: LookalikeUserListInfo;
}

export type UserListAccessStatus = "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "DISABLED";

export interface UserListAccessStatusEnum {

}

export interface UserListActionInfo {
  readonly conversion_action?: string;
  readonly remarketing_action?: string;
}

export interface UserListAttributeMetadata {
  readonly user_list_type?: UserListType;
}

export type UserListClosingReason = "UNSPECIFIED" | "UNKNOWN" | "UNUSED";

export interface UserListClosingReasonEnum {

}

export type UserListCrmDataSourceType = "UNSPECIFIED" | "UNKNOWN" | "FIRST_PARTY" | "THIRD_PARTY_CREDIT_BUREAU" | "THIRD_PARTY_VOTER_FILE" | "THIRD_PARTY_PARTNER_DATA";

export interface UserListCrmDataSourceTypeEnum {

}

export interface UserListCustomerType {
  readonly resource_name?: string;
  readonly user_list?: string;
  readonly customer_type_category?: UserListCustomerTypeCategory;
}

export type UserListCustomerTypeCategory = "UNSPECIFIED" | "UNKNOWN" | "ALL_CUSTOMERS" | "PURCHASERS" | "HIGH_VALUE_CUSTOMERS" | "DISENGAGED_CUSTOMERS" | "QUALIFIED_LEADS" | "CONVERTED_LEADS" | "PAID_SUBSCRIBERS" | "CART_ABANDONERS" | "LOYALTY_TIER_1_MEMBERS" | "LOYALTY_TIER_2_MEMBERS" | "LOYALTY_TIER_3_MEMBERS" | "LOYALTY_TIER_4_MEMBERS" | "LOYALTY_TIER_5_MEMBERS" | "LOYALTY_TIER_6_MEMBERS" | "LOYALTY_TIER_7_MEMBERS";

export interface UserListCustomerTypeCategoryEnum {

}

export type UserListCustomerTypeError = "UNSPECIFIED" | "UNKNOWN" | "CONFLICTING_CUSTOMER_TYPES" | "NO_ACCESS_TO_USER_LIST" | "USERLIST_NOT_ELIGIBLE" | "CONVERSION_TRACKING_NOT_ENABLED_OR_NOT_MCC_MANAGER_ACCOUNT" | "TOO_MANY_USER_LISTS_FOR_THE_CUSTOMER_TYPE";

export interface UserListCustomerTypeErrorEnum {

}

export interface UserListCustomerTypeOperation {
  readonly create?: UserListCustomerType;
  readonly remove?: string;
}

export interface UserListDateRuleItemInfo {
  readonly operator?: UserListDateRuleItemOperator;
  readonly value?: string;
  readonly offset_in_days?: string;
}

export type UserListDateRuleItemOperator = "UNSPECIFIED" | "UNKNOWN" | "EQUALS" | "NOT_EQUALS" | "BEFORE" | "AFTER";

export interface UserListDateRuleItemOperatorEnum {

}

export type UserListError = "UNSPECIFIED" | "UNKNOWN" | "EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED" | "CONCRETE_TYPE_REQUIRED" | "CONVERSION_TYPE_ID_REQUIRED" | "DUPLICATE_CONVERSION_TYPES" | "INVALID_CONVERSION_TYPE" | "INVALID_DESCRIPTION" | "INVALID_NAME" | "INVALID_TYPE" | "CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND" | "INVALID_USER_LIST_LOGICAL_RULE_OPERAND" | "NAME_ALREADY_USED" | "NEW_CONVERSION_TYPE_NAME_REQUIRED" | "CONVERSION_TYPE_NAME_ALREADY_USED" | "OWNERSHIP_REQUIRED_FOR_SET" | "USER_LIST_MUTATE_NOT_SUPPORTED" | "INVALID_RULE" | "INVALID_DATE_RANGE" | "CAN_NOT_MUTATE_SENSITIVE_USERLIST" | "MAX_NUM_RULEBASED_USERLISTS" | "CANNOT_MODIFY_BILLABLE_RECORD_COUNT" | "APP_ID_NOT_SET" | "USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST" | "ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA" | "RULE_TYPE_IS_NOT_SUPPORTED" | "CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND" | "CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS" | "APP_ID_NOT_ALLOWED" | "CANNOT_MUTATE_SYSTEM_LIST" | "MOBILE_APP_IS_SENSITIVE" | "SEED_LIST_DOES_NOT_EXIST" | "INVALID_SEED_LIST_ACCESS_REASON" | "INVALID_SEED_LIST_TYPE" | "INVALID_COUNTRY_CODES" | "DUPLICATE_LOOKALIKE" | "PARTNER_AUDIENCE_SOURCE_NOT_SUPPORTED_FOR_USER_LIST_TYPE" | "COMMERCE_PARTNER_NOT_ALLOWED" | "PARTNER_AUDIENCE_INFO_NOT_SUPPORTED_FOR_USER_LIST_TYPE" | "PARTNER_MANAGER_ACCOUNT_DISALLOWED" | "PARTNER_NOT_ALLOWLISTED_FOR_THIRD_PARTY_PARTNER_DATA" | "ADVERTISER_TOS_NOT_ACCEPTED" | "ADVERTISER_PARTNER_LINK_MISSING" | "ADVERTISER_NOT_ALLOWLISTED_FOR_THIRD_PARTY_PARTNER_DATA" | "ACCOUNT_SETTING_TYPE_NOT_ALLOWED";

export interface UserListErrorEnum {

}

export type UserListFlexibleRuleOperator = "UNSPECIFIED" | "UNKNOWN" | "AND" | "OR";

export interface UserListFlexibleRuleOperatorEnum {

}

export interface UserListInfo {
  readonly user_list?: string;
}

export interface UserListLogicalRuleInfo {
  readonly operator?: UserListLogicalRuleOperator;
  readonly rule_operands?: ReadonlyArray<LogicalUserListOperandInfo>;
}

export type UserListLogicalRuleOperator = "UNSPECIFIED" | "UNKNOWN" | "ALL" | "ANY" | "NONE";

export interface UserListLogicalRuleOperatorEnum {

}

export type UserListMembershipStatus = "UNSPECIFIED" | "UNKNOWN" | "OPEN" | "CLOSED";

export interface UserListMembershipStatusEnum {

}

export interface UserListNumberRuleItemInfo {
  readonly operator?: UserListNumberRuleItemOperator;
  readonly value?: number;
}

export type UserListNumberRuleItemOperator = "UNSPECIFIED" | "UNKNOWN" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "EQUALS" | "NOT_EQUALS" | "LESS_THAN" | "LESS_THAN_OR_EQUAL";

export interface UserListNumberRuleItemOperatorEnum {

}

export interface UserListOperation {
  readonly update_mask?: string;
  readonly create?: UserList;
  readonly update?: UserList;
  readonly remove?: string;
}

export type UserListPrepopulationStatus = "UNSPECIFIED" | "UNKNOWN" | "REQUESTED" | "FINISHED" | "FAILED";

export interface UserListPrepopulationStatusEnum {

}

export interface UserListRuleInfo {
  readonly rule_type?: UserListRuleType;
  readonly rule_item_groups?: ReadonlyArray<UserListRuleItemGroupInfo>;
}

export interface UserListRuleItemGroupInfo {
  readonly rule_items?: ReadonlyArray<UserListRuleItemInfo>;
}

export interface UserListRuleItemInfo {
  readonly name?: string;
  readonly number_rule_item?: UserListNumberRuleItemInfo;
  readonly string_rule_item?: UserListStringRuleItemInfo;
  readonly date_rule_item?: UserListDateRuleItemInfo;
}

export type UserListRuleType = "UNSPECIFIED" | "UNKNOWN" | "AND_OF_ORS" | "OR_OF_ANDS";

export interface UserListRuleTypeEnum {

}

export interface UserListSegment {
  readonly user_list?: string;
}

export type UserListSizeRange = "UNSPECIFIED" | "UNKNOWN" | "LESS_THAN_FIVE_HUNDRED" | "LESS_THAN_ONE_THOUSAND" | "ONE_THOUSAND_TO_TEN_THOUSAND" | "TEN_THOUSAND_TO_FIFTY_THOUSAND" | "FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND" | "ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND" | "THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND" | "FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION" | "ONE_MILLION_TO_TWO_MILLION" | "TWO_MILLION_TO_THREE_MILLION" | "THREE_MILLION_TO_FIVE_MILLION" | "FIVE_MILLION_TO_TEN_MILLION" | "TEN_MILLION_TO_TWENTY_MILLION" | "TWENTY_MILLION_TO_THIRTY_MILLION" | "THIRTY_MILLION_TO_FIFTY_MILLION" | "OVER_FIFTY_MILLION";

export interface UserListSizeRangeEnum {

}

export interface UserListStringRuleItemInfo {
  readonly operator?: UserListStringRuleItemOperator;
  readonly value?: string;
}

export type UserListStringRuleItemOperator = "UNSPECIFIED" | "UNKNOWN" | "CONTAINS" | "EQUALS" | "STARTS_WITH" | "ENDS_WITH" | "NOT_EQUALS" | "NOT_CONTAINS" | "NOT_STARTS_WITH" | "NOT_ENDS_WITH";

export interface UserListStringRuleItemOperatorEnum {

}

export type UserListType = "UNSPECIFIED" | "UNKNOWN" | "REMARKETING" | "LOGICAL" | "EXTERNAL_REMARKETING" | "RULE_BASED" | "SIMILAR" | "CRM_BASED" | "LOOKALIKE";

export interface UserListTypeEnum {

}

export interface UserLocationView {
  readonly resource_name?: string;
  readonly country_criterion_id?: string;
  readonly targeting_location?: boolean;
}

export interface Value {
  readonly boolean_value?: boolean;
  readonly int64_value?: string;
  readonly float_value?: number;
  readonly double_value?: number;
  readonly string_value?: string;
}

export interface ValueRuleAction {
  readonly operation?: ValueRuleOperation;
  readonly value?: number;
}

export interface ValueRuleAudienceCondition {
  readonly user_lists?: ReadonlyArray<string>;
  readonly user_interests?: ReadonlyArray<string>;
}

export interface ValueRuleDeviceCondition {
  readonly device_types?: ReadonlyArray<ValueRuleDeviceType>;
}

export type ValueRuleDeviceType = "UNSPECIFIED" | "UNKNOWN" | "MOBILE" | "DESKTOP" | "TABLET";

export interface ValueRuleDeviceTypeEnum {

}

export interface ValueRuleGeoLocationCondition {
  readonly excluded_geo_target_constants?: ReadonlyArray<string>;
  readonly excluded_geo_match_type?: ValueRuleGeoLocationMatchType;
  readonly geo_target_constants?: ReadonlyArray<string>;
  readonly geo_match_type?: ValueRuleGeoLocationMatchType;
}

export type ValueRuleGeoLocationMatchType = "UNSPECIFIED" | "UNKNOWN" | "ANY" | "LOCATION_OF_PRESENCE";

export interface ValueRuleGeoLocationMatchTypeEnum {

}

export interface ValueRuleItineraryAdvanceBookingWindow {
  readonly min_days?: number;
  readonly max_days?: number;
}

export interface ValueRuleItineraryCondition {
  readonly advance_booking_window?: ValueRuleItineraryAdvanceBookingWindow;
  readonly travel_length?: ValueRuleItineraryTravelLength;
  readonly travel_start_day?: ValueRuleItineraryTravelStartDay;
}

export interface ValueRuleItineraryTravelLength {
  readonly min_nights?: number;
  readonly max_nights?: number;
}

export interface ValueRuleItineraryTravelStartDay {
  readonly monday?: boolean;
  readonly tuesday?: boolean;
  readonly wednesday?: boolean;
  readonly thursday?: boolean;
  readonly friday?: boolean;
  readonly saturday?: boolean;
  readonly sunday?: boolean;
}

export type ValueRuleOperation = "UNSPECIFIED" | "UNKNOWN" | "ADD" | "MULTIPLY" | "SET";

export interface ValueRuleOperationEnum {

}

export type ValueRuleSetAttachmentType = "UNSPECIFIED" | "UNKNOWN" | "CUSTOMER" | "CAMPAIGN";

export interface ValueRuleSetAttachmentTypeEnum {

}

export type ValueRuleSetDimension = "UNSPECIFIED" | "UNKNOWN" | "GEO_LOCATION" | "DEVICE" | "AUDIENCE" | "NO_CONDITION" | "ITINERARY";

export interface ValueRuleSetDimensionEnum {

}

export interface ValueSettings {
  readonly default_value?: number;
  readonly default_currency_code?: string;
  readonly always_use_default_value?: boolean;
}

export interface VanityPharma {
  readonly vanity_pharma_display_url_mode?: VanityPharmaDisplayUrlMode;
  readonly vanity_pharma_text?: VanityPharmaText;
}

export type VanityPharmaDisplayUrlMode = "UNSPECIFIED" | "UNKNOWN" | "MANUFACTURER_WEBSITE_URL" | "WEBSITE_DESCRIPTION";

export interface VanityPharmaDisplayUrlModeEnum {

}

export type VanityPharmaText = "UNSPECIFIED" | "UNKNOWN" | "PRESCRIPTION_TREATMENT_WEBSITE_EN" | "PRESCRIPTION_TREATMENT_WEBSITE_ES" | "PRESCRIPTION_DEVICE_WEBSITE_EN" | "PRESCRIPTION_DEVICE_WEBSITE_ES" | "MEDICAL_DEVICE_WEBSITE_EN" | "MEDICAL_DEVICE_WEBSITE_ES" | "PREVENTATIVE_TREATMENT_WEBSITE_EN" | "PREVENTATIVE_TREATMENT_WEBSITE_ES" | "PRESCRIPTION_CONTRACEPTION_WEBSITE_EN" | "PRESCRIPTION_CONTRACEPTION_WEBSITE_ES" | "PRESCRIPTION_VACCINE_WEBSITE_EN" | "PRESCRIPTION_VACCINE_WEBSITE_ES";

export interface VanityPharmaTextEnum {

}

export interface VerticalAdsFormatSetting {
  readonly disable_text_ads?: boolean;
  readonly enable_booking_links?: boolean;
  readonly enable_vertical_promotion_ads?: boolean;
}

export interface VerticalAdsItemGroupRuleInfo {
  readonly item_code?: string;
  readonly country_criterion_id?: string;
  readonly region_criterion_id?: string;
  readonly city_criterion_id?: string;
  readonly hotel_class?: string;
  readonly user_rating?: string;
  readonly venue?: string;
  readonly event_participant_display_name?: string;
}

export interface VerticalAdsItemGroupRuleListInfo {
  readonly shared_set?: string;
}

export type VerticalAdsItemVerticalType = "UNSPECIFIED" | "UNKNOWN" | "HOTELS" | "VACATION_RENTALS" | "RENTAL_CARS" | "EVENTS" | "THINGS_TO_DO" | "FLIGHTS";

export interface VerticalAdsItemVerticalTypeEnum {

}

export interface Video {
  readonly resource_name?: string;
  readonly id?: string;
  readonly channel_id?: string;
  readonly duration_millis?: string;
  readonly title?: string;
}

export interface VideoAdFormatControl {
  readonly format_restriction?: VideoAdFormatRestriction;
  readonly non_skippable_in_stream_restrictions?: NonSkippableInStreamRestrictions;
}

export type VideoAdFormatRestriction = "UNSPECIFIED" | "UNKNOWN" | "NON_SKIPPABLE_IN_STREAM";

export interface VideoAdFormatRestrictionEnum {

}

export interface VideoAdGroupSettings {
  readonly video_ad_sequence?: VideoAdSequenceStepSetting;
}

export interface VideoAdInfo {
  readonly video?: AdVideoAsset;
  readonly in_stream?: VideoTrueViewInStreamAdInfo;
  readonly bumper?: VideoBumperInStreamAdInfo;
  readonly out_stream?: VideoOutstreamAdInfo;
  readonly non_skippable?: VideoNonSkippableInStreamAdInfo;
  readonly in_feed?: InFeedVideoAdInfo;
  readonly audio?: YouTubeAudioAdInfo;
}

export interface VideoAdInventoryControl {
  readonly allow_in_stream?: boolean;
  readonly allow_in_feed?: boolean;
  readonly allow_shorts?: boolean;
  readonly allow_non_skippable_in_stream?: boolean;
}

export interface VideoAdSequence {
  readonly steps?: ReadonlyArray<VideoAdSequenceStep>;
  readonly minimum_duration?: VideoAdSequenceMinimumDuration;
}

export type VideoAdSequenceInteractionType = "UNSPECIFIED" | "UNKNOWN" | "PAID_VIEW" | "SKIP" | "IMPRESSION" | "ENGAGED_IMPRESSION";

export interface VideoAdSequenceInteractionTypeEnum {

}

export type VideoAdSequenceMinimumDuration = "UNSPECIFIED" | "UNKNOWN" | "WEEK" | "MONTH";

export interface VideoAdSequenceMinimumDurationEnum {

}

export interface VideoAdSequenceStep {
  readonly video_ad_sequence_step_id?: string;
  readonly asset_id?: string;
  readonly ad_group_type?: AdGroupType;
  readonly previous_step_id?: string;
  readonly previous_step_interaction_type?: VideoAdSequenceInteractionType;
}

export interface VideoAdSequenceStepSetting {
  readonly step_id?: string;
}

export interface VideoBumperInStreamAdInfo {
  readonly companion_banner?: AdImageAsset;
  readonly action_button_label?: string;
  readonly action_headline?: string;
}

export type VideoCampaignError = "UNSPECIFIED" | "UNKNOWN" | "MUTATE_REQUIRES_RESERVATION";

export interface VideoCampaignErrorEnum {

}

export interface VideoCampaignSettings {
  readonly video_ad_sequence?: VideoAdSequence;
  readonly reservation_ad_category_self_disclosure?: ReservationAdCategorySelfDisclosure;
  readonly booking_details?: BookingDetails;
  readonly video_ad_inventory_control?: VideoAdInventoryControl;
  readonly video_ad_format_control?: VideoAdFormatControl;
}

export interface VideoCustomer {
  readonly third_party_integration_partners?: CustomerThirdPartyIntegrationPartners;
}

export interface VideoEnhancement {
  readonly resource_name?: string;
  readonly duration_millis?: string;
  readonly source?: VideoEnhancementSource;
  readonly title?: string;
}

export type VideoEnhancementSource = "UNSPECIFIED" | "UNKNOWN" | "ADVERTISER" | "ENHANCED_BY_GOOGLE_ADS";

export interface VideoEnhancementSourceEnum {

}

export interface VideoExperimentInfo {
  readonly video_experiment_subtype?: VideoExperimentSubtype;
}

export type VideoExperimentSubtype = "UNSPECIFIED" | "UNKNOWN" | "DEMAND_GEN_ASSET" | "ASSET" | "ASSET_UPLIFT";

export interface VideoExperimentSubtypeEnum {

}

export interface VideoLineupInfo {
  readonly video_lineup_id?: string;
}

export interface VideoNonSkippableInStreamAdInfo {
  readonly companion_banner?: AdImageAsset;
  readonly action_button_label?: string;
  readonly action_headline?: string;
}

export interface VideoOutstreamAdInfo {
  readonly headline?: string;
  readonly description?: string;
}

export type VideoReservationError = "UNSPECIFIED" | "UNKNOWN" | "NEW_QUOTE_REQUIRED" | "CAMPAIGN_END_TIME_TOO_DISTANT" | "BUDGET_TOO_SMALL" | "CAMPAIGN_DURATION_TOO_SHORT" | "CAMPAIGN_NOT_ENABLED" | "NOT_ENOUGH_AVAILABLE_INVENTORY" | "TARGETING_TOO_NARROW" | "UNSUPPORTED_AD_GROUP_TYPE" | "UNSUPPORTED_BID_MODIFIER" | "CANNOT_CHANGE_PRICING_MODEL" | "INCOMPATIBLE_TARGETING" | "UNSUPPORTED_FEATURE" | "MISSING_ELECTION_CERTIFICATE" | "CAMPAIGN_ENDED" | "UNSUPPORTED_BUDGET_PERIOD" | "EXACTLY_ONE_ENABLED_ADGROUP_REQUIRED" | "FREQUENCY_CAP_TOO_NARROW" | "TARGETED_PACK_NEEDS_DEAL" | "DEAL_CURRENCY_MISMATCH" | "CANNOT_HOLD_CONTRACT" | "CUSTOMER_NOT_ENABLED" | "CUSTOMER_NOT_ALLOWED" | "INVALID_ACCOUNT_TYPE" | "ACCOUNT_IS_MANAGER" | "SEASONAL_LINEUP_BOOKING_WINDOW_NOT_OPEN" | "SEASONAL_LINEUP_END_DATE_OFF_SEASON" | "SEASONAL_LINEUP_GEO_TARGETING_TOO_NARROW" | "NO_MARKET_RATE_CARD_OR_BASE_RATE" | "STALE_QUOTE" | "LINEUP_NOT_ALLOWED" | "UNSUPPORTED_BIDDING_STRATEGY" | "UNSUPPORTED_POSITIVE_GEO_TARGET_TYPE" | "VALIDATE_ONLY_REQUIRED" | "TOO_MANY_CAMPAIGNS";

export interface VideoReservationErrorEnum {

}

export interface VideoResponsiveAdInfo {
  readonly headlines?: ReadonlyArray<AdTextAsset>;
  readonly long_headlines?: ReadonlyArray<AdTextAsset>;
  readonly descriptions?: ReadonlyArray<AdTextAsset>;
  readonly call_to_actions?: ReadonlyArray<AdTextAsset>;
  readonly videos?: ReadonlyArray<AdVideoAsset>;
  readonly business_name?: AdTextAsset;
  readonly logo_images?: ReadonlyArray<AdImageAsset>;
  readonly companion_banners?: ReadonlyArray<AdImageAsset>;
  readonly breadcrumb1?: string;
  readonly breadcrumb2?: string;
}

export type VideoThumbnail = "UNSPECIFIED" | "UNKNOWN" | "DEFAULT_THUMBNAIL" | "THUMBNAIL_1" | "THUMBNAIL_2" | "THUMBNAIL_3";

export interface VideoThumbnailEnum {

}

export interface VideoTrueViewInStreamAdInfo {
  readonly action_button_label?: string;
  readonly action_headline?: string;
  readonly companion_banner?: AdImageAsset;
}

export interface WebhookDelivery {
  readonly advertiser_webhook_url?: string;
  readonly google_secret?: string;
  readonly payload_schema_version?: string;
}

export interface Webpage {
  readonly conditions?: ReadonlyArray<WebpageCondition>;
}

export interface WebpageCondition {
  readonly custom_label?: string;
  readonly url_contains?: string;
}

export interface WebpageConditionInfo {
  readonly operand?: WebpageConditionOperand;
  readonly operator?: WebpageConditionOperator;
  readonly argument?: string;
}

export type WebpageConditionOperand = "UNSPECIFIED" | "UNKNOWN" | "URL" | "CATEGORY" | "PAGE_TITLE" | "PAGE_CONTENT" | "CUSTOM_LABEL";

export interface WebpageConditionOperandEnum {

}

export type WebpageConditionOperator = "UNSPECIFIED" | "UNKNOWN" | "EQUALS" | "CONTAINS";

export interface WebpageConditionOperatorEnum {

}

export interface WebpageInfo {
  readonly criterion_name?: string;
  readonly conditions?: ReadonlyArray<WebpageConditionInfo>;
  readonly coverage_percentage?: number;
  readonly sample?: WebpageSampleInfo;
}

export interface WebpageListInfo {
  readonly shared_set?: string;
}

export interface WebpageSampleInfo {
  readonly sample_urls?: ReadonlyArray<string>;
}

export interface WebpageView {
  readonly resource_name?: string;
}

export interface WebsiteList {
  readonly websites?: ReadonlyArray<string>;
}

export interface WhatsappBusinessMessageInfo {
  readonly country_code?: string;
  readonly phone_number?: string;
}

export interface YearMonth {
  readonly year?: string;
  readonly month?: MonthOfYear;
}

export interface YearMonthRange {
  readonly start?: YearMonth;
  readonly end?: YearMonth;
}

export interface YouTubeAudioAdInfo {

}

export interface YouTubeChannelAttributeMetadata {
  readonly subscriber_count?: string;
}

export interface YouTubeChannelInfo {
  readonly channel_id?: string;
}

export interface YouTubeChannelInsights {
  readonly display_name?: string;
  readonly youtube_channel?: YouTubeChannelInfo;
  readonly channel_url?: string;
  readonly channel_description?: string;
  readonly handle?: string;
  readonly thumbnail_url?: string;
  readonly publish_date?: string;
  readonly country_location?: LocationInfo;
  readonly channel_metrics?: YouTubeMetrics;
  readonly data_sharing_consent_given?: boolean;
  readonly channel_audience_attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly channel_attributes?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly top_videos?: ReadonlyArray<AudienceInsightsAttributeMetadata>;
  readonly language_distributions?: ReadonlyArray<LanguageDistribution>;
  readonly channel_type?: string;
  readonly relevance_score?: number;
}

export interface YouTubeChannels {
  readonly youtube_channels?: ReadonlyArray<YouTubeChannelInfo>;
}

export interface YouTubeCreatorInsights {
  readonly creator_name?: string;
  readonly creator_channels?: ReadonlyArray<YouTubeChannelInsights>;
}

export interface YoutubeLinkMetadata {
  readonly brand_channel_id?: string;
}

export interface YouTubeLivePreviewResult {
  readonly youtube_preview_url?: string;
  readonly youtube_tv_preview_url?: string;
}

export interface YouTubeMetrics {
  readonly subscriber_count?: string;
  readonly views_count?: string;
  readonly video_count?: string;
  readonly likes_count?: string;
  readonly shares_count?: string;
  readonly comments_count?: string;
  readonly engagement_rate?: number;
  readonly average_views_per_video?: number;
  readonly average_likes_per_video?: number;
  readonly average_shares_per_video?: number;
  readonly average_comments_per_video?: number;
  readonly shorts_views_count?: string;
  readonly shorts_video_count?: string;
  readonly is_active_shorts_creator?: boolean;
  readonly is_active_live_stream_creator?: boolean;
  readonly partnership_opportunities?: ReadonlyArray<PartnershipOpportunity>;
}

export interface YouTubeSelectLineUp {
  readonly lineup_id?: string;
  readonly lineup_name?: string;
}

export interface YouTubeSelectLineUpTargeting {
  readonly youtube_select_lineups?: ReadonlyArray<YouTubeSelectLineUp>;
  readonly default_youtube_select_lineup?: YouTubeSelectLineUp;
}

export interface YouTubeSelectSettings {
  readonly lineup_id?: string;
}

export interface YoutubeVideoAsset {
  readonly youtube_video_id?: string;
  readonly youtube_video_title?: string;
}

export interface YouTubeVideoAttributeMetadata {
  readonly thumbnail_url?: string;
  readonly video_url?: string;
  readonly views_count?: string;
  readonly likes_count?: string;
  readonly comments_count?: string;
  readonly video_properties?: ReadonlyArray<YouTubeVideoProperty>;
  readonly publish_date?: string;
  readonly channel_id?: string;
  readonly channel_name?: string;
  readonly channel_url?: string;
}

export interface YoutubeVideoIdentifier {
  readonly channel_id?: string;
  readonly video_id?: string;
}

export interface YouTubeVideoInfo {
  readonly video_id?: string;
}

export interface YouTubeVideoListAsset {
  readonly youtube_videos?: ReadonlyArray<AdVideoAsset>;
}

export type YouTubeVideoPrivacy = "UNSPECIFIED" | "UNKNOWN" | "PUBLIC" | "UNLISTED";

export interface YouTubeVideoPrivacyEnum {

}

export type YouTubeVideoProperty = "UNSPECIFIED" | "UNKNOWN" | "LIVE_STREAM" | "SHORTS";

export interface YouTubeVideoPropertyEnum {

}

export type YoutubeVideoRegistrationError = "UNSPECIFIED" | "UNKNOWN" | "VIDEO_NOT_FOUND" | "VIDEO_NOT_ACCESSIBLE" | "VIDEO_NOT_ELIGIBLE";

export interface YoutubeVideoRegistrationErrorEnum {

}

export interface YouTubeVideoUpload {
  readonly resource_name?: string;
  readonly video_upload_id?: string;
  readonly channel_id?: string;
  readonly video_id?: string;
  readonly state?: YouTubeVideoUploadState;
  readonly video_title?: string;
  readonly video_description?: string;
  readonly video_privacy?: YouTubeVideoPrivacy;
}

export type YouTubeVideoUploadState = "UNSPECIFIED" | "UNKNOWN" | "PENDING" | "UPLOADED" | "PROCESSED" | "FAILED" | "REJECTED" | "UNAVAILABLE";

export interface YouTubeVideoUploadStateEnum {

}

export interface ZaloBusinessMessageInfo {
  readonly oa_id?: string;
  readonly custom_name?: string;
}
