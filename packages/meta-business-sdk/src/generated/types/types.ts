// @generated
// fingerprint: sha256:da8ea755f204e336b855fbf8ddb4de0830a34dc57ccd9e43a3eee5005f46d85c
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export interface ABTestPostTestActionsFields {
  readonly auto_change_budget_to_winner?: number;
  readonly winner_budget?: string;
}

export interface AdAccountAAACompatibleAdObjectsFields {
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly campaign_group_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
}

export interface AdAccountAAASimilarCampaignsFields {
  readonly similar_campaign_limit?: number;
  readonly similar_campaigns_info?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly used_campaign_slots?: number;
}

export interface AdAccountAccountControlsFields {

}

export interface AdAccountAccountControlsPostFields {
  readonly error_code?: number;
  readonly error_message?: string;
  readonly id?: string;
  readonly success?: boolean;
}

export type AdAccountActionSource = "PHYSICAL_STORE" | "WEBSITE";

export interface AdAccountAdLimitsInsightsFields {
  readonly date_start?: string;
  readonly date_stop?: string;
}

export interface AdAccountAdRulesCountByTypeFields {
  readonly count?: number;
  readonly evaluation_type?: string;
}

export type AdAccountAdRulesHistoryAction = "BUDGET_NOT_REDISTRIBUTED" | "CHANGED_BID" | "CHANGED_BUDGET" | "CONSOLIDATE_ASC_FRAGMENTATION" | "CONSOLIDATE_FRAGMENTATION" | "CONVERT_ASC_CP_SINGLE_INSTANCE" | "EMAIL" | "ENABLE_ADVANTAGE_CAMPAIGN_BUDGET" | "ENABLE_ADVANTAGE_PLUS_AUDIENCE" | "ENABLE_ADVANTAGE_PLUS_CREATIVE" | "ENABLE_ADVANTAGE_PLUS_PLACEMENTS" | "ENABLE_AUTOFLOW" | "ENABLE_GEN_UNCROP" | "ENABLE_LANDING_PAGE_VIEWS" | "ENABLE_MUSIC" | "ENABLE_PIXELLESS_LPV_OPTIMIZATION_GOAL" | "ENABLE_PRODUCT_SET_BOOSTING" | "ENABLE_REELS_PLACEMENTS" | "ENABLE_SEMANTIC_BASED_AUDIENCE_EXPANSION" | "ENABLE_SHOPS_ADS" | "ENABLE_SHOPS_ADS_SAOFF" | "ENABLE_WTWA_UPSELL_IN_DUPLICATION" | "ENDPOINT_PINGED" | "ERROR" | "FACEBOOK_NOTIFICATION_SENT" | "MESSAGE_SENT" | "NOT_CHANGED" | "PAUSED" | "UNPAUSED";

export type AdAccountAdRulesHistoryEvaluationType = "SCHEDULE" | "TRIGGER";

export interface AdAccountAdRulesHistoryFields {
  readonly evaluation_spec?: AdRuleEvaluationSpecFields;
  readonly exception_code?: number;
  readonly exception_message?: string;
  readonly execution_spec?: AdRuleExecutionSpecFields;
  readonly is_manual?: boolean;
  readonly results?: ReadonlyArray<AdRuleHistoryResultFields>;
  readonly rule_id?: number;
  readonly schedule_spec?: AdRuleScheduleSpecFields;
  readonly timestamp?: string;
}

export interface AdAccountAdsRecommendedAudiosFields {
  readonly audio_assets?: ReadonlyArray<number>;
}

export interface AdAccountAdVolumeFields {
  readonly actor_id?: string;
  readonly actor_name?: string;
  readonly ad_limit_scope_business?: BusinessFields;
  readonly ad_limit_scope_business_manager_id?: string;
  readonly ad_limit_set_by_page_admin?: number;
  readonly ads_running_or_in_review_count?: number;
  readonly ads_running_or_in_review_count_subject_to_limit_set_by_page?: number;
  readonly current_account_ads_running_or_in_review_count?: number;
  readonly future_limit_activation_date?: string;
  readonly future_limit_on_ads_running_or_in_review?: number;
  readonly limit_on_ads_running_or_in_review?: number;
  readonly recommendations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type AdAccountAdVolumeRecommendationType = "AAC_CREATION_PACKAGE" | "AB_TEST" | "ACCOUNT_ERROR" | "ACCOUNT_NEEDS_CREDIT" | "ACCOUNT_SPEND_LIMIT" | "ACCOUNT_SPEND_LIMIT_DUPLICATION" | "ACO_TOGGLE" | "ADD_FUNDS_TO_RUN_CAMPAIGN" | "ADOPT_CATALOG_TO_RUN_PRODUCT_CENTRIC_ADS" | "ADOPT_CREATIVE_AUDIENCE_PAIRING" | "ADOPT_CREATIVE_MEDIA_SOURCING_BUNDLE" | "ADOPT_CTX_RECOMMENDED_TEMPLATE_BUNDLE" | "ADOPT_DAYPARTING_CTX_DEEP_CONVERSATIONS" | "ADOPT_GEN_AI_MVP_CHILD" | "ADOPT_INBOX_QUESTIONS_IN_ADS_MANAGER_CTM" | "ADOPT_PRODUCT_EXTENSIONS_CHILD" | "ADOPT_RELATED_MEDIA_SUGGESTIONS" | "ADOPT_SINGLE_MEDIA_AD_FORMAT_BUNDLE" | "ADOPT_SMS_VERIFICATION_FOR_LEAD_QUALITY" | "ADOPT_WEBSITE_TO_MESSENGER" | "ADSET_BUDGET_SHARING" | "ADS_REPORTING" | "ADS_STATUS" | "ADVANCED_CAMPAIGN_BUDGET" | "ADVANTAGE_APP_CAMPAIGN" | "ADVANTAGE_CAMPAIGN_BUDGET_DUPLICATION" | "ADVANTAGE_CUSTOM_AUDIENCE" | "ADVANTAGE_CUSTOM_AUDIENCE_DUPLICATION" | "ADVANTAGE_CUSTOM_AUDIENCE_UPSELL" | "ADVANTAGE_DETAILED_TARGETING" | "ADVANTAGE_LOOKALIKE_AUDIENCE" | "ADVANTAGE_LOOKALIKE_DUPLICATION" | "ADVANTAGE_PLUS_APP_CAMPAIGN" | "ADVANTAGE_PLUS_APP_CAMPAIGN_PRECREATE" | "ADVANTAGE_PLUS_AUDIENCE" | "ADVANTAGE_PLUS_AUDIENCE_DUPLICATION" | "ADVANTAGE_PLUS_AUDIENCE_FRICTION" | "ADVANTAGE_PLUS_AUDIENCE_TOGGLE" | "ADVANTAGE_PLUS_AUDIENCE_V2" | "ADVANTAGE_PLUS_CAMPAIGN_BUDGET" | "ADVANTAGE_PLUS_CATALOG_ADS" | "ADVANTAGE_PLUS_CATALOG_ADS_V2" | "ADVANTAGE_PLUS_CREATIVE" | "ADVANTAGE_PLUS_CREATIVE_CATALOG" | "ADVANTAGE_PLUS_CREATIVE_SE" | "ADVANTAGE_PLUS_LEAD_CAMPAIGN" | "ADVANTAGE_PLUS_PLACEMENTS_DUPLICATION" | "ADVANTAGE_PLUS_PLACEMENTS_FRICTION" | "ADVANTAGE_PLUS_PLACEMENTS_V2_DUPLICATION" | "ADVANTAGE_SHOPPING_CAMPAIGN" | "ADVANTAGE_SHOPPING_CAMPAIGN_FRAGMENTATION" | "AD_ACCOUNT_PLACEMENT_CONTROLS_UPSELL" | "AD_LIFT_RECALL_GOAL" | "AD_LIFT_RECALL_GOAL_PRECREATE" | "AD_LIFT_RECALL_OPTIMIZATION_GOAL" | "AD_OBJECTIVE" | "AD_SET_BUDGET_SHARING_GUIDANCE" | "AEM_V2_INELIGIBLE" | "AGGREGATED_BID_LIMITED" | "AGGREGATED_BUDGET_LIMITED" | "AGGREGATED_COST_LIMITED" | "AI_GENERATED_ICEBREAKERS" | "AMA_UPSELL" | "APLUSC_ADD_OVERLAYS" | "APLUSC_BIZ_AI_AGENT" | "APLUSC_DYNAMIC_DESCRIPTION" | "APLUSC_FLEXIBLE_MEDIA" | "APLUSC_IMAGE_BACKGROUND_GENERATION" | "APLUSC_MUSIC" | "APLUSC_RELEVANT_COMMENTS" | "APLUSC_STANDARD_ENHANCEMENTS_BUNDLE" | "APLUSC_TEXT_IMPROVEMENTS" | "APLUSC_VIDEO_EXPANSION" | "APLUSC_VISUAL_TOUCHUPS" | "APLUS_C_CATALOG_DUPLICATION" | "APP_AEM_V2_INSTALLATION_PROMOTION" | "APP_ENGAGED_VIEW_CONVERSIONS_DUPLICATION" | "APP_VO_IOS" | "ASC_AUTOMATION" | "ASC_BUDGET_OPTIMIZATION" | "ASC_CREATION_PACKAGE" | "ASC_FRAGMENTATION_V2" | "ASC_PRECREATE" | "ASPECT_RATIO" | "ATLEAST_6_PLACEMENTS" | "AUCTION_OVERLAP" | "AUCTION_OVERLAP_CONSOLIDATION" | "AUDIENCE_EXPANSION" | "AUDIENCE_EXPANSION_GEORADIUS" | "AUDIENCE_EXPANSION_LOOKALIKE" | "AUDIENCE_EXPANSION_RETARGETING" | "AUDIENCE_LEARNING_LIMITED" | "AUTOBID_TO_MANUAL_BID" | "AUTOFLOW_OPT_IN" | "AUTOFLOW_OPT_IN_FALLBACK_DUPLICATION_FLOW" | "AUTOFLOW_OPT_IN_V2" | "AUTOMATIC_PLACEMENTS" | "AUTOMATIC_PLACEMENTS_V2" | "AUTOMATIC_PLACEMENTS_V3" | "AUTOMATIC_PLACEMENTS_V4" | "AUTO_BID" | "AUTO_CAT_SELECTION_ENHANCEMENT" | "B2P_MESSAGING_UPSELL" | "BACKGROUND_GENERATION" | "BIDCAP_TO_COSTCAP" | "BIDCAP_TO_COSTCAP_GUIDANCE" | "BID_LIMITED_SENSITIVE" | "BID_LIMITED_STARVING" | "BLENDED_ADS" | "BLENDED_ADS_DUPLICATION" | "BLENDED_ADS_FOR_SHOPS_ADS_DUPLICATION" | "BPBAA_WITH_CAPI_UPSELL" | "BRAND_ADVERTISER_VIDEO_FORMAT_ADS" | "BROADGEO_AM_UPSELL_GUIDANCE" | "BROAD_TARGETING" | "BUDGET_AMORTIZATION" | "BUDGET_LIMITED" | "BUDGET_REALLOCATION" | "BUDGET_SEASONAL_GUIDANCE" | "BUSINESS_AI_AGENT_UPSELL" | "CALL_ADS_DAYPARTING_L3_RECOMMENDATION" | "CALL_ADS_L2_DAYPARTING" | "CAMPAIGN_CONSOLIDATION_WITH_FLEX" | "CAMPAIGN_GUIDANCE_NAVIGATOR_REELS_TIPS" | "CAMPAIGN_SPEND_LIMIT" | "CAPI" | "CAPI_CRM_FUNNEL" | "CAPI_CRM_GUIDANCE" | "CAPI_CRM_GUIDANCE_V2" | "CAPI_CRM_SETUP" | "CAPI_EVENT_COVERAGE" | "CAPI_PENETRATION" | "CAPI_PERFORMANCE_MATCH_KEY" | "CAPI_PERFORMANCE_MATCH_KEY_V2" | "CAPI_PERFORMANCE_MATCH_KEY_V3" | "CASH_REWARDS_OPT_IN" | "CATALOG_DYNAMIC_MEDIA" | "CATALOG_MATCH_RATE" | "CD_OPT_OUT_PREVENTION_GUIDANCE" | "CD_OPT_OUT_PREVENTION_LOW_DURATION" | "COMMERCE_SHOPS_ADS_DUPLICATION" | "CONNECTED_SOURCES" | "CONNECTED_SOURCES_DUPLICATION" | "CONNECT_FACEBOOK_PAGE_TO_INSTAGRAM" | "CONNECT_FACEBOOK_PAGE_TO_WHATSAPP" | "CONVERSION_LEADS_OPTIMIZATION" | "CONVERSION_LEADS_OPTIMIZATION_DUPLICATION" | "CONVERSION_LEADS_OPTIMIZATION_INTEGRATED" | "CONVERSION_LEADS_OPTIMIZATION_V2" | "CONVERSION_LEAD_ADS" | "CONVERT_APP_WEB_FALLBACK_TO_A_DESTINATION" | "CONVERT_IG_PROFILE_VISIT_TO_PTWA" | "COST_GOAL" | "COST_GOAL_BUDGET_LIMITED" | "COST_GOAL_CPA_LIMITED" | "COST_PER_RESULT" | "CREATION_PACKAGE_UPGRADE_TO_ASC" | "CREATION_PACKAGE_UPGRADE_TO_CTX" | "CREATION_PACKAGE_UPGRADE_TO_TLA" | "CREATION_PACKAGE_UPGRADE_TO_TMC" | "CREATIVE_AUDIENCE_PAIRING_DU" | "CREATIVE_BADGE" | "CREATIVE_DIVERSITY" | "CREATIVE_FATIGUE" | "CREATIVE_FATIGUE_DUPLICATION" | "CREATIVE_FATIGUE_HOURLY" | "CREATIVE_LIMITED" | "CREATIVE_LIMITED_DUPLICATION" | "CREATIVE_LIMITED_HOURLY" | "CREATIVE_TEST" | "CREATIVE_VOLUME" | "CREATOR_ADS_PA_CONVERSION" | "CTA" | "CTD_LEADS_OPTIMIZATION" | "CTD_PURCHASE_OPTIMIZATION" | "CTM_AD_OBJECTIVE_GROWTH" | "CTM_LEADS_OPTIMIZATION_UPSELL" | "CTM_LO_ODAX_PHASE_2" | "CTM_PO_ODAX_PHASE_2" | "CTM_VO_ODAX_PHASE_2" | "CTX_BUDGET_OPTIMIZATION" | "CTX_CREATION_PACKAGE" | "CTX_CREATION_PACKAGE_V2" | "CTX_CREATIVE_LOW_OUTCOME_WARNING" | "CTX_CTA_UPGRADE_IN_DUPLICATION" | "CTX_CTMPO_UPGRADE" | "CTX_CTWALO_UPGRADE" | "CTX_CTWAPO_UPGRADE" | "CTX_GUIDANCE" | "CTX_HVS" | "CTX_HVS_V2" | "CTX_MULTI_MESSAGE_DESTINATION" | "CTX_PRECREATE" | "CTX_PRODUCT_EXTENSION_DUPLICATION" | "CTX_SABR_CBO" | "CTX_SABR_NON_CBO" | "CTX_SMART_DEFAULTING" | "CTX_VALUE_OPTIMIZATION_CTM_PO_TO_VO" | "CTX_ZERO_OUTCOME_BUDGET" | "CTX_ZO_CBO" | "CTX_ZO_NON_CBO" | "CUSTOM_AUDIENCE_RELAXATION" | "DA_ADVANTAGE_PLUS_CREATIVE_INFO_LABELS" | "DA_DUPLICATION_PRODUCT_TAGS" | "DEAD_LINK" | "DEFRAGMENTATION_ACB" | "DEFRAGMENTATION_ACB_DUPLICATION" | "DEFRAGMENTATION_USING_VALUE_RULES_TEST_V2" | "DELIVERY_DEPENDENT_CREATIVE_LIMITED" | "DELIVERY_ERROR" | "DELIVERY_ERROR_V2" | "DELIVERY_WARNING" | "DUPLICATE_HIGH_PERFORMING_CAMPAIGN" | "DYNAMIC_ADVANTAGE_CAMPAIGN_BUDGET" | "ECOSYSTEM_BID_REDUCE_L1_CARDINALITY" | "EMAIL_CAPTURE_UPSELL_GUIDANCE" | "ENABLE_AI_GENERATED_ICEBREAKERS_FOR_CTX" | "ENABLE_AI_GENERATED_RESPONSES_CTM" | "ENABLE_WHATS_APP_ADS_DATA_SHARING" | "ENGAGED_VIEW_CONVERSIONS_CREATION" | "EVC_APP_DUPLICATION_UPGRADE" | "EVC_WEB_DUPLICATION_UPGRADE" | "EXPERIMENTATION_FRAMEWORK_TEST" | "F2_CONVERSION_LOCATION" | "FRAGMENTATION" | "FRAGMENTATION_RESOLUTION_UPDATE" | "FRAGMENTATION_V2" | "FRAGMENTATION_V3" | "FRAGMENTATION_V4" | "GENAI_FB_REELS_VIDEO" | "GENERATIVE_UNCROP_DUPLICATION" | "GEN_AI_FB_REELS_VIDEO" | "GEN_AI_MVP" | "GEN_AI_MVP_EXISTING_POSTS" | "GES_TEST" | "GOOGLE_ANALYTICS_INTEGRATION" | "GUIDANCE_CENTER_CODE_GEN" | "HEURISTIC_DEFAULT_DURATION" | "HIGH_COST" | "HISTORICAL_BENCHMARK" | "IAA_ROAS_OPTIMIZATION" | "IG_MULTI_ADS" | "IG_SURFACES_MANUAL_PLACEMENTS" | "INCREASE_BUDGET_UNDERPOWERED_EXPERIMENTS" | "INCREASE_SPEND_ON_VIDEO_CREATIVE" | "INCREMENTAL_ATTRIBUTION" | "INFORMED_CAMPAIGN_CREATION" | "INSTANT_FORMS_LEADS" | "IN_APP_AD_IMPRESSION_ROAS_ANDROID" | "LANDING_PAGE_VIEW" | "LANDING_PAGE_VIEW_OPTIMIZATION_GOAL" | "LANDING_PAGE_VIEW_OPTIMIZATION_GOAL_V2" | "LANDING_PAGE_VIEW_PRECREATE" | "LEAD_ADS_DFCA_LOOKALIKE_ADOPTION" | "LEAD_ADS_GUIDANCE" | "LEAD_NURTURING" | "LEAD_NURTURING_GUIDANCE" | "LEARNING_LIMITED" | "LEARNING_PAUSE_FRICTION" | "LEARNING_PHASE_BUDGET_EDITS" | "LIVE_VIDEO_ADS" | "LOW_BUDGET_UTILIZATION" | "LOW_OUTCOME" | "MANUAL_BIDDING_BUDGET_LIMITED" | "MARKETING_MESSAGES" | "MERLIN_GUIDANCE" | "MESSAGING_EVENTS" | "MESSAGING_EVENTS_PRECREATE" | "MESSAGING_PARTNERS" | "MESSAGING_PARTNERS_PRECREATE" | "MESSAGING_PARTNERS_V2" | "META_VERIFIED_ADS_PERFORMANCE_GUIDANCE" | "MISSING_OR_INVALID_PARAMETERS" | "MIXED_FORMATS" | "MIXED_FORMATS_V2" | "MIXED_FORMATS_V3" | "MIXED_PA_COMBINE_ADSETS" | "MMT_CAROUSEL_TO_VIDEO" | "MOBILE_FIRST_CREATIVE" | "MOBILE_FIRST_VIDEO" | "MR_AEMV2SUB_KCONSOLIDATION" | "MULTI_ADVERTISER_ADS" | "MULTI_TEXT" | "MUSIC" | "MUSIC_V2" | "NARROW_WEBSITE_CUSTOM_AUDIENCE" | "NOT_APPLICABLE" | "NO_DELIVERY_STATUS" | "OFFSITE_CONVERSION" | "OFFSITE_CONVERSION_AR" | "OFFSITE_CONVERSION_BASED_ON_SIGNALS" | "OFFSITE_CONVERSION_LEADS_OPTIMIZATION" | "OFFSITE_CONVERSION_V2" | "OMNI_OPTIMIZATION" | "OPTIMAL_BAU" | "OPT_INTO_CHAT_ON_WHATSAPP_POST_LEAD" | "OPT_INTO_NUDGE_FOLLOW_UP_MESSAGES_CTM" | "OPT_INTO_SINGLE_MEDIA_TO_COLLECTION_ADS" | "OUTCOME_FORECASTER_BID_RECOMMENDATION" | "OUTCOME_FORECASTER_BUDGET_RECOMMENDATION" | "OUTCOME_FORECASTER_SHADOW_LOGGING" | "PARTNERSHIP_ADS" | "PARTNERSHIP_ADS_DYNAMIC_HEADER" | "PAYMENT_METHOD" | "PERFORMANT_CREATIVE_REELS_OPT_IN" | "PERFORMANT_CREATIVE_REELS_OPT_IN_V2" | "PFR_L1_INLINE_MMT" | "PIXELLESS_LPV_OPTIMIZATION_GOAL" | "PIXEL_OPTIMIZATION_AAM" | "PIXEL_OPTIMIZATION_AAM_PRECREATE" | "PIXEL_OPTIMIZATION_HIE" | "PIXEL_OPTIMIZATION_HIE_PRECREATE" | "PIXEL_OPTIMIZATION_HIE_V2" | "PIXEL_SETUP" | "PIXEL_SETUP_PRECREATE" | "PIXEL_UPSELL" | "PIXEL_UPSELL_V2" | "PLACEMENTS_BUNDLE" | "PLACEMENTS_LIQUIDITY_AUTOMATIC_GUIDANCE" | "POST_ADOPTION_BUDGET_SCALING" | "POST_FLIGHT_SCALE_GOOD_CAMPAIGN" | "PREDICTIVE_CREATIVE_LIMITED" | "PREDICTIVE_CREATIVE_LIMITED_HOURLY" | "PREPARING_STATUS" | "PRODUCT_EXTENSIONS_GUIDANCE" | "PRODUCT_EXTENSIONS_IMAGE_TO_CAROUSEL" | "PRODUCT_SET_BOOSTING" | "PROMO_ADS_UPSELL_GUIDANCE" | "PURCHASE_OPTIMIZATION" | "RAPID_LEARNING_LIMITED" | "RAPID_LEARNING_PHASE" | "REACH_OPTIMIZATION_GOAL" | "REACH_OPTIMIZATION_GOAL_PRECREATE" | "REELS_DUPLICATION_UPSELL" | "REELS_MUSIC_DUPLICATION" | "REELS_PC_AND_MOBILE_FIRST_CREATIVE" | "REELS_PC_RECOMMENDATION" | "REELS_PC_RECOMMENDATION_V2" | "REELS_PERFORMANT_CREATIVE" | "REELS_PLACEMENT" | "RESOLVE_UNAVAILABLE_EVENT_OPTIMIZATION" | "REVERT" | "REVIEW_CREATIVE_DUPLICATED_REJECTED_ADS" | "SABR_DEFAULT_DURATION" | "SALES_CONVERSION" | "SAVED_AUDIENCE" | "SCALE_GOOD_CAMPAIGN" | "SCALE_GOOD_CAMPAIGN_DUPLICATION" | "SCALE_GOOD_CAMPAIGN_SMB" | "SCALE_GOOD_CAMPAIGN_V2" | "SCALE_GOOD_CAMPAIGN_V2_DUPLICATION" | "SCALE_GOOD_CTX_CAMPAIGN" | "SCALE_GOOD_CTX_CAMPAIGNS_DUPLICATION" | "SCALE_GOOD_VALUE_OPTIMIZATION_CAMPAIGN" | "SEASONAL_CAMPAIGNS" | "SEMANTIC_BASED_AUDIENCE_DUPLICATION" | "SEMANTIC_BASED_AUDIENCE_EXPANSION" | "SETUP_PIXEL" | "SHOPS_ADS" | "SHOPS_ADS_DUPLICATION" | "SHOPS_ADS_SAOFF" | "SHOPS_ADS_TRAFFIC_CAP_SETTINGS" | "SHOP_ADS_V2" | "SIGNALS_DOWN_FUNNEL_EVENT_OPTIMIZATION" | "SIGNALS_GROWTH_CAPI" | "SIGNALS_GROWTH_CAPI_PRECREATE" | "SIGNALS_GROWTH_CAPI_TABLE" | "SIGNALS_GROWTH_CAPI_V2" | "SIGNALS_VO_USING_CO_MODEL" | "SIMILAR_ADVERTISER_BUDGET_RECOMMENDATION" | "SINGLE_CELL_LIFT_STUDY" | "SITE_EXTENSIONS_DUPLICATION" | "SITE_EXTENSIONS_GUIDANCE" | "SIX_PLUS_MANUAL_PLACEMENTS" | "SIX_PLUS_PLACEMENTS_DUPLICATION" | "SMART_DEFAULT_VALUE_RULES" | "SMB_DUPLICATION" | "SMB_SGC_DUPLICATION" | "SMS_OTP_VERIFICATION_UPSELL" | "SPEND_LIMIT" | "SUPPORT_CTM_ADS_WITH_CUSTOMER_ACTIONS" | "SYD_TEST_MODE" | "TAILORED_LEAD_AD_CAMPAIGN" | "TAILORED_MESSAGES_CAMPAIGN" | "TARGETING_CREATIVE_FRAGMENTATION" | "THREECO_WEB_PLUS_APP_APLUSD" | "THREECO_WEB_PLUS_APP_UPSELL" | "TLA_CREATION_PACKAGE" | "TOP_ADSETS_WITH_ADS_UNDER_CAP" | "TOP_CAMPAIGNS_WITH_ADS_UNDER_CAP" | "TRANSLATION_DEFAULT_ON" | "TWO_P_GUIDANCE_CARD_AAA" | "TWO_P_GUIDANCE_CARD_AUTO_PLACEMENT" | "TWO_P_GUIDANCE_CARD_CBO_OFF" | "TWO_P_GUIDANCE_CARD_CTM_PREFLIGHT" | "UNCROP_IMAGE" | "UNECONOMICAL_ADS_THROTTLING" | "UNIFIED_INBOX" | "UNUSED_BUDGET" | "UPGRADE_DURATION_SETTINGS_FOR_DUPLICATION" | "UPPER_FUNNEL_TO_LEAD_INSTANT_FORM" | "UPSELL_SOFT_OPT_OUT_TO_NON_APLUS_P" | "VALUE_CO_CAMPAIGNS_LOW_PURCHASE_DQ" | "VALUE_DIAGNOSTICS_GUIDANCE" | "VALUE_OPTIMIZATION_GOAL" | "VALUE_RULES_GUIDANCE" | "VIDEO_LENGTH" | "VIDEO_VIEWS_UPSELL" | "VIDEO_VIEWS_UPSELL_PRECREATE" | "VO_IN_APP_PURCHASE" | "VO_VT_1D_DEFAULTING" | "WA_MESSAGING_PARTNERS" | "WA_MESSAGING_PARTNERS_PRECREATE" | "WA_MESSAGING_PARTNERS_V2" | "WEBSITE_AND_CALLS_UPSELL" | "WEBSITE_AND_INSTANT_FORM_L2" | "WEBSITE_TO_MESSENGER" | "WEB_APP_CONVERSION" | "WEB_ENGAGED_VIEW_CONVERSIONS" | "WTWA_UPSELL_IN_DUPLICATION" | "WTWA_UPSELL_IN_SYD_AND_AM_TABLE" | "YI_TEST" | "ZERO_CONVERSION" | "ZERO_IMPRESSION" | "ZERO_OUTCOME_BUDGET" | "ZIJI_SGP_UGP_TEST";

export interface AdAccountAgencyFeeConfigFields {
  readonly can_add_agency_fee_to_invoice?: boolean;
  readonly default_agency_fee_pct?: number;
  readonly id?: string;
  readonly is_agency_fee_disabled?: boolean;
  readonly status?: AdAccountAgencyFeeConfigStatus;
}

export type AdAccountAgencyFeeConfigStatus = "ACTIVE" | "ARCHIVED" | "DRAFT" | "UNKNOWN";

export interface AdAccountAllPaymentMethodsFields {

}

export interface AdAccountAmountSpentHistoryFields {
  readonly amount_spent?: number;
  readonly spend_cap?: number;
  readonly time_start?: string;
  readonly time_stop?: string;
}

export interface AdAccountAppSetupRequirementsFields {

}

export interface AdAccountASLScheduleFields {
  readonly ad_account?: AdAccountFields;
  readonly id?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface AdAccountBankInfoListFields {
  readonly banks?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdAccountBillingDatePreferenceFields {
  readonly ad_account?: AdAccountFields;
  readonly day_of_month?: number;
  readonly id?: string;
  readonly next_bill_date?: string;
  readonly time_created?: string;
  readonly time_effective?: string;
}

export type AdAccountBrandSafetyContentFilterLevels = "AN_RELAXED" | "AN_STANDARD" | "AN_STRICT" | "FACEBOOK_RELAXED" | "FACEBOOK_STANDARD" | "FACEBOOK_STRICT" | "FEED_DNM" | "FEED_NESTED_DNM" | "FEED_RELAXED" | "FEED_STANDARD" | "FEED_STRICT" | "UNINITIALIZED" | "UNKNOWN";

export interface AdAccountBusinessConstraintsFields {
  readonly audience_controls?: Readonly<Record<string, unknown>>;
  readonly campaigns_with_error?: ReadonlyArray<string>;
  readonly is_age_restriction_enabled?: boolean;
  readonly placement_controls?: Readonly<Record<string, unknown>>;
  readonly placement_controls_per_objective?: Readonly<Record<string, unknown>>;
  readonly status?: AdAccountBusinessConstraintsStatus;
}

export type AdAccountBusinessConstraintsStatus = "ACTIVE" | "APPLICATION_IN_PROGRESS" | "WITH_CAMPAIGN_ERROR";

export interface AdAccountCampaignAttributionOptionInfoFields {
  readonly is_eligible?: boolean;
  readonly value?: string;
}

export type AdAccountClaimObjective = "AUTOMOTIVE_MODEL" | "COLLABORATIVE_ADS" | "HOME_LISTING" | "MEDIA_TITLE" | "PRODUCT" | "TRAVEL" | "VEHICLE" | "VEHICLE_OFFER";

export type AdAccountContentType = "AUTOMOTIVE_MODEL" | "DESTINATION" | "FLIGHT" | "GENERIC" | "HOME_LISTING" | "HOTEL" | "LOCAL_SERVICE_BUSINESS" | "MEDIA_TITLE" | "OFFLINE_PRODUCT" | "PRODUCT" | "VEHICLE" | "VEHICLE_OFFER";

export interface AdAccountCreationRequestFields {
  readonly ad_accounts_currency?: string;
  readonly ad_accounts_info?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly additional_comment?: string;
  readonly address_in_chinese?: string;
  readonly address_in_english?: Readonly<Record<string, unknown>>;
  readonly address_in_local_language?: string;
  readonly advertiser_business?: BusinessFields;
  readonly appeal_reason?: Readonly<Record<string, unknown>>;
  readonly business?: BusinessFields;
  readonly business_registration_id?: string;
  readonly chinese_legal_entity_name?: string;
  readonly contact?: Readonly<Record<string, unknown>>;
  readonly creator?: UserFields;
  readonly credit_card_id?: string;
  readonly disapproval_reasons?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly english_legal_entity_name?: string;
  readonly extended_credit_id?: string;
  readonly id?: string;
  readonly is_smb?: boolean;
  readonly is_test?: boolean;
  readonly legal_entity_name_in_local_language?: string;
  readonly oe_request_id?: string;
  readonly official_website_url?: string;
  readonly planning_agency_business?: BusinessFields;
  readonly planning_agency_business_id?: string;
  readonly promotable_app_ids?: ReadonlyArray<string>;
  readonly promotable_page_ids?: ReadonlyArray<string>;
  readonly promotable_urls?: ReadonlyArray<string>;
  readonly request_change_reasons?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly status?: string;
  readonly subvertical?: string;
  readonly subvertical_v2?: string;
  readonly time_created?: string;
  readonly vertical?: string;
  readonly vertical_v2?: string;
}

export type AdAccountCurrency = "AED" | "ARS" | "AUD" | "BDT" | "BOB" | "BRL" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DZD" | "EGP" | "EUR" | "GBP" | "GTQ" | "HKD" | "HNL" | "HUF" | "IDR" | "ILS" | "INR" | "ISK" | "JPY" | "KES" | "KRW" | "LKR" | "MOP" | "MXN" | "MYR" | "NGN" | "NIO" | "NOK" | "NZD" | "PEN" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "SAR" | "SEK" | "SGD" | "THB" | "TRY" | "TWD" | "UAH" | "USD" | "UYU" | "VND" | "ZAR";

export interface AdAccountCustomAudienceLimitsFields {
  readonly audience_update_quota_in_total?: number;
  readonly audience_update_quota_left?: number;
  readonly has_hit_audience_update_limit?: boolean;
  readonly next_audience_update_available_time?: string;
  readonly rate_limit_reset_time?: string;
}

export interface AdAccountDefaultDestinationFields {
  readonly destination_id?: string;
  readonly destination_url?: string;
}

export type AdAccountDefaultObjectiveDefaultObjectiveForUser = "APP_INSTALLS" | "BRAND_AWARENESS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS" | "WEBSITE_CONVERSIONS";

export interface AdAccountDefaultObjectiveFields {
  readonly default_objective_for_user?: AdAccountDefaultObjectiveDefaultObjectiveForUser;
  readonly objective_for_level?: AdAccountDefaultObjectiveObjectiveForLevel;
}

export type AdAccountDefaultObjectiveObjectiveForLevel = "APP_INSTALLS" | "BRAND_AWARENESS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS" | "WEBSITE_CONVERSIONS";

export interface AdAccountDeliveryEstimateFields {
  readonly estimate_mau_lower_bound?: number;
  readonly estimate_mau_upper_bound?: number;
  readonly estimate_ready?: boolean;
  readonly targeting_optimization_types?: ReadonlyArray<Readonly<Record<string, number>>>;
}

export type AdAccountDeliveryEstimateOptimizationGoal = "ADVERTISER_SILOED_VALUE" | "AD_RECALL_LIFT" | "APP_INSTALLS" | "APP_INSTALLS_AND_OFFSITE_CONVERSIONS" | "AUTOMATIC_OBJECTIVE" | "CONVERSATIONS" | "DERIVED_EVENTS" | "ENGAGED_PAGE_VIEWS" | "ENGAGED_USERS" | "EVENT_RESPONSES" | "IMPRESSIONS" | "IN_APP_VALUE" | "LANDING_PAGE_VIEWS" | "LEAD_GENERATION" | "LINK_CLICKS" | "MEANINGFUL_CALL_ATTEMPT" | "MESSAGING_APPOINTMENT_CONVERSION" | "MESSAGING_DEEP_CONVERSATION_AND_FOLLOW" | "MESSAGING_PURCHASE_CONVERSION" | "NONE" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PROFILE_AND_PAGE_ENGAGEMENT" | "PROFILE_VISIT" | "QUALITY_CALL" | "QUALITY_LEAD" | "REACH" | "REMINDERS_SET" | "SUBSCRIBERS" | "THRUPLAY" | "VALUE" | "VISIT_INSTAGRAM_PROFILE";

export interface AdAccountDsaRecommendationsFields {
  readonly recommendations?: ReadonlyArray<string>;
}

export interface AdAccountFields {
  readonly account_id?: string;
  readonly account_status?: number;
  readonly ad_account_promotable_objects?: AdAccountPromotableObjectsFields;
  readonly age?: number;
  readonly agency_client_declaration?: AgencyClientDeclarationFields;
  readonly all_capabilities?: ReadonlyArray<string>;
  readonly amount_spent?: string;
  readonly attribution_spec?: ReadonlyArray<AttributionSpecFields>;
  readonly balance?: string;
  readonly brand_safety_content_filter_levels?: ReadonlyArray<string>;
  readonly business?: BusinessFields;
  readonly business_city?: string;
  readonly business_country_code?: string;
  readonly business_name?: string;
  readonly business_state?: string;
  readonly business_street?: string;
  readonly business_street2?: string;
  readonly business_zip?: string;
  readonly capabilities?: ReadonlyArray<string>;
  readonly created_time?: string;
  readonly currency?: string;
  readonly custom_audience_info?: CustomAudienceGroupFields;
  readonly default_dsa_beneficiary?: string;
  readonly default_dsa_payor?: string;
  readonly disable_reason?: number;
  readonly end_advertiser?: string;
  readonly end_advertiser_name?: string;
  readonly existing_customers?: ReadonlyArray<string>;
  readonly expired_funding_source_details?: FundingSourceDetailsFields;
  readonly extended_credit_invoice_group?: ExtendedCreditInvoiceGroupFields;
  readonly failed_delivery_checks?: ReadonlyArray<DeliveryCheckFields>;
  readonly fb_entity?: number;
  readonly funding_source?: string;
  readonly funding_source_details?: FundingSourceDetailsFields;
  readonly has_migrated_permissions?: boolean;
  readonly has_page_authorized_adaccount?: boolean;
  readonly id?: string;
  readonly io_number?: string;
  readonly is_attribution_spec_system_default?: boolean;
  readonly is_ba_skip_delayed_eligible?: boolean;
  readonly is_direct_deals_enabled?: boolean;
  readonly is_in_3ds_authorization_enabled_market?: boolean;
  readonly is_notifications_enabled?: boolean;
  readonly is_personal?: number;
  readonly is_prepay_account?: boolean;
  readonly is_tax_id_required?: boolean;
  readonly liable_address?: CRMAddressFields;
  readonly line_numbers?: ReadonlyArray<number>;
  readonly marketing_messages_settings?: AdAccountMarketingMessagesSettingsFields;
  readonly media_agency?: string;
  readonly min_campaign_group_spend_cap?: string;
  readonly min_daily_budget?: number;
  readonly name?: string;
  readonly offsite_clo_signal_status?: number;
  readonly offsite_pixels_tos_accepted?: boolean;
  readonly opportunity_score?: number;
  readonly opportunity_score_weight?: number;
  readonly owner?: string;
  readonly owner_business?: BusinessFields;
  readonly partner?: string;
  readonly rf_spec?: ReachFrequencySpecFields;
  readonly send_bill_to_address?: CRMAddressFields;
  readonly show_checkout_experience?: boolean;
  readonly sold_to_address?: CRMAddressFields;
  readonly spend_cap?: string;
  readonly tax_id?: string;
  readonly tax_id_status?: number;
  readonly tax_id_type?: string;
  readonly timezone_id?: number;
  readonly timezone_name?: string;
  readonly timezone_offset_hours_utc?: number;
  readonly tos_accepted?: Readonly<Record<string, number>>;
  readonly user_access_expire_time?: string;
  readonly user_tasks?: ReadonlyArray<string>;
  readonly user_tos_accepted?: Readonly<Record<string, number>>;
  readonly viewable_business?: BusinessFields;
}

export interface AdAccountInsightsFeatureSettingsFields {

}

export interface AdAccountInsightsFeatureSettingsListFeaturesFields {
  readonly data?: ReadonlyArray<unknown>;
  readonly paging?: unknown;
}

export interface AdAccountInsightsFeatureSettingsPostFields {
  readonly id?: string;
}

export interface AdAccountIosFourteenCampaignLimitsFields {
  readonly campaign_group_limit?: number;
  readonly campaign_group_limits_details?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly campaign_limit?: number;
}

export interface AdAccountLiveVideoAdvertiserFields {
  readonly ig_lva_default_duration_s?: number;
  readonly is_lva_toggle_on?: boolean;
  readonly lva_default_budget?: number;
  readonly lva_default_duration_s?: number;
  readonly should_default_current_live?: boolean;
  readonly should_default_scheduled_live?: boolean;
  readonly should_default_toggle_on_from_model?: boolean;
  readonly should_show_lva_toggle?: boolean;
}

export interface AdAccountMarketingMessagesSettingsFields {
  readonly whatsapp_activation_status?: string;
}

export type AdAccountMatchedSearchApplicationsEdgeDataAppStore = "ALL_APP_STORES_FOR_ANDROID_AND_IOS" | "AMAZON_APP_STORE" | "APK_MIRROR" | "APK_MONK" | "APK_PURE" | "APTOIDE_A1_STORE" | "BEMOBI_MOBILE_STORE" | "DIGITAL_TURBINE_STORE" | "DOES_NOT_EXIST" | "FB_ANDROID_STORE" | "FB_CANVAS" | "FB_GAMEROOM" | "GALAXY_STORE" | "GOOGLE_PLAY" | "HORIZON_WORLD" | "INSTANT_GAME" | "ITUNES" | "ITUNES_IPAD" | "NEON_ANDROID_STORE" | "NONE" | "OCULUS_APP_STORE" | "OPPO" | "ROKU_STORE" | "UPTODOWN" | "VIVO" | "WINDOWS_10_STORE" | "WINDOWS_STORE" | "XIAOMI";

export interface AdAccountMatchedSearchApplicationsEdgeDataFields {
  readonly app_id?: string;
  readonly are_app_events_unavailable?: boolean;
  readonly icon_url?: string;
  readonly name?: string;
  readonly search_source_store?: string;
  readonly store?: string;
  readonly unique_id?: string;
  readonly url?: string;
}

export type AdAccountMatchedSearchApplicationsEdgeDataStoresToFilter = "ALL_APP_STORES_FOR_ANDROID_AND_IOS" | "AMAZON_APP_STORE" | "APK_MIRROR" | "APK_MONK" | "APK_PURE" | "APTOIDE_A1_STORE" | "BEMOBI_MOBILE_STORE" | "DIGITAL_TURBINE_STORE" | "DOES_NOT_EXIST" | "FB_ANDROID_STORE" | "FB_CANVAS" | "FB_GAMEROOM" | "GALAXY_STORE" | "GOOGLE_PLAY" | "HORIZON_WORLD" | "INSTANT_GAME" | "ITUNES" | "ITUNES_IPAD" | "NEON_ANDROID_STORE" | "NONE" | "OCULUS_APP_STORE" | "OPPO" | "ROKU_STORE" | "UPTODOWN" | "VIVO" | "WINDOWS_10_STORE" | "WINDOWS_STORE" | "XIAOMI";

export interface AdAccountMaxBidFields {
  readonly max_bid?: number;
}

export interface AdAccountOptimizationGoalsAEMv2EligibilityFields {
  readonly is_disabled?: boolean;
  readonly optimization_goal?: AdAccountOptimizationGoalsAEMv2EligibilityOptimizationGoal;
}

export type AdAccountOptimizationGoalsAEMv2EligibilityOptimizationGoal = "ADVERTISER_SILOED_VALUE" | "AD_RECALL_LIFT" | "APP_INSTALLS" | "APP_INSTALLS_AND_OFFSITE_CONVERSIONS" | "AUTOMATIC_OBJECTIVE" | "CONVERSATIONS" | "DERIVED_EVENTS" | "ENGAGED_PAGE_VIEWS" | "ENGAGED_USERS" | "EVENT_RESPONSES" | "IMPRESSIONS" | "IN_APP_VALUE" | "LANDING_PAGE_VIEWS" | "LEAD_GENERATION" | "LINK_CLICKS" | "MEANINGFUL_CALL_ATTEMPT" | "MESSAGING_APPOINTMENT_CONVERSION" | "MESSAGING_DEEP_CONVERSATION_AND_FOLLOW" | "MESSAGING_PURCHASE_CONVERSION" | "NONE" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PROFILE_AND_PAGE_ENGAGEMENT" | "PROFILE_VISIT" | "QUALITY_CALL" | "QUALITY_LEAD" | "REACH" | "REMINDERS_SET" | "SUBSCRIBERS" | "THRUPLAY" | "VALUE" | "VISIT_INSTAGRAM_PROFILE";

export interface AdAccountPaymentDetailsFields {
  readonly amount?: CurrencyAmountFields;
  readonly create_date?: number;
  readonly id?: string;
  readonly last_action_status?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly payment_details_id?: string;
}

export interface AdAccountPaymentOptionsFields {
  readonly available_altpay_options?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly available_card_types?: ReadonlyArray<string>;
  readonly available_payment_options?: ReadonlyArray<string>;
  readonly existing_payment_methods?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type AdAccountPermittedTasks = "AA_ANALYZE" | "ADVERTISE" | "ANALYZE" | "DRAFT" | "MANAGE";

export interface AdAccountPrepayDetailsFields {
  readonly default_funding_amount?: CurrencyAmountFields;
  readonly max_acceptable_amount?: CurrencyAmountFields;
  readonly min_acceptable_amount?: CurrencyAmountFields;
  readonly should_collect_business_details?: boolean;
}

export interface AdAccountPromotableObjectsFields {
  readonly promotable_app_ids?: ReadonlyArray<string>;
  readonly promotable_page_ids?: ReadonlyArray<string>;
  readonly promotable_urls?: ReadonlyArray<string>;
}

export interface AdAccountPromotionProgressBarFields {
  readonly adaccount_permission?: boolean;
  readonly coupon_currency?: string;
  readonly coupon_value?: number;
  readonly expiration_time?: string;
  readonly progress_completed?: boolean;
  readonly promotion_type?: string;
  readonly spend_requirement_in_cent?: number;
  readonly spend_since_enrollment?: number;
}

export interface AdAccountReachEstimateFields {
  readonly estimate_ready?: boolean;
  readonly users_lower_bound?: number;
  readonly users_upper_bound?: number;
}

export interface AdAccountRecommendationsFields {
  readonly recommendations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdAccountRecommendedCamapaignBudgetFields {
  readonly daily?: string;
  readonly lifetime?: string;
  readonly objective?: string;
}

export interface AdAccountRelatedIcoStudyFields {

}

export interface AdAccountSmartSuggestedAdsFields {
  readonly ad_creative_spec?: string;
  readonly description?: string;
  readonly guidance_spec?: ReadonlyArray<string>;
  readonly thumbnail_url?: string;
}

export interface AdAccountSpendCapChangeHistoryFields {
  readonly action?: string;
  readonly spend_cap?: number;
  readonly time_start?: string;
  readonly time_stop?: string;
}

export interface AdAccountSpendLimitFields {
  readonly amount_spent?: string;
  readonly group_id?: string;
  readonly limit_id?: string;
  readonly limit_value?: string;
  readonly time_created?: number;
  readonly time_start?: number;
  readonly time_stop?: number;
}

export interface AdAccountSubscribedAppsFields {
  readonly app_id?: string;
  readonly app_name?: string;
}

export interface AdAccountSubsidyAmountDetailsFields {
  readonly entered_amount?: CurrencyAmountFields;
  readonly fee_amount?: CurrencyAmountFields;
  readonly total_amount?: CurrencyAmountFields;
}

export type AdAccountSubtype = "APP" | "BAG_OF_ACCOUNTS" | "BIDDING" | "CLAIM" | "CUSTOM" | "ENGAGEMENT" | "EXCLUSION" | "FOX" | "LOOKALIKE" | "MANAGED" | "MEASUREMENT" | "MESSENGER_SUBSCRIBER_LIST" | "OFFLINE_CONVERSION" | "PARTNER" | "PRIMARY" | "REGULATED_CATEGORIES_AUDIENCE" | "STUDY_RULE_AUDIENCE" | "VIDEO" | "WEBSITE";

export type AdAccountTargetingUnifiedAppStore = "all_app_stores_for_android_and_ios" | "amazon_app_store" | "apk_mirror" | "apk_monk" | "apk_pure" | "aptoide_a1_store" | "bemobi_mobile_store" | "digital_turbine_store" | "does_not_exist" | "fb_android_store" | "fb_canvas" | "fb_gameroom" | "galaxy_store" | "google_play" | "horizon_world" | "instant_game" | "itunes" | "itunes_ipad" | "neon_android_store" | "none" | "oculus_app_store" | "oppo" | "roku_channel_store" | "uptodown" | "vivo" | "windows_10_store" | "windows_store" | "xiaomi";

export interface AdAccountTargetingUnifiedFields {
  readonly audience_size_lower_bound?: number;
  readonly audience_size_upper_bound?: number;
  readonly conversion_lift?: number;
  readonly description?: string;
  readonly id?: string;
  readonly img?: string;
  readonly info?: string;
  readonly info_title?: string;
  readonly is_recommendation?: boolean;
  readonly is_youth_ads_age_gated?: boolean;
  readonly key?: string;
  readonly link?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly partner?: string;
  readonly path?: ReadonlyArray<string>;
  readonly performance_rating?: number;
  readonly raw_name?: string;
  readonly recommendation_model?: string;
  readonly search_interest_id?: string;
  readonly source?: string;
  readonly spend?: number;
  readonly type?: string;
  readonly valid?: boolean;
}

export type AdAccountTargetingUnifiedLimitType = "behaviors" | "college_years" | "education_majors" | "education_schools" | "education_statuses" | "ethnic_affinity" | "family_statuses" | "generation" | "home_ownership" | "home_type" | "home_value" | "household_composition" | "income" | "industries" | "interested_in" | "interests" | "life_events" | "location_categories" | "moms" | "net_worth" | "office_type" | "politics" | "relationship_statuses" | "user_adclusters" | "work_employers" | "work_positions";

export type AdAccountTargetingUnifiedMode = "best_performing" | "recently_used" | "related" | "suggestions";

export type AdAccountTargetingUnifiedObjective = "APP_INSTALLS" | "BRAND_AWARENESS" | "CONVERSIONS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS";

export type AdAccountTargetingUnifiedRegulatedCategories = "CREDIT" | "EMPLOYMENT" | "FINANCIAL_PRODUCTS_SERVICES" | "HOUSING" | "ISSUES_ELECTIONS_POLITICS" | "NONE" | "ONLINE_GAMBLING_AND_GAMING";

export type AdAccountTargetingUnifiedRegulatedCountries = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export type AdAccountTargetingUnifiedWhitelistedTypes = "adgroup_id" | "age_max" | "age_min" | "age_range" | "alternate_auto_targeting_option" | "app_install_state" | "audience_concepts" | "audience_network_positions" | "behaviors" | "brand_safety_content_filter_levels" | "brand_safety_content_severity_levels" | "cafe_ca_contraction_targeting_signal" | "cafe_ca_expansion_targeting_signal" | "catalog_based_targeting" | "cities" | "city_keys" | "college_years" | "conjunctive_user_adclusters" | "connections" | "contextual_targeting_categories" | "countries" | "country" | "country_groups" | "custom_audiences" | "device_platforms" | "direct_install_devices" | "dt_consolidation_state" | "dynamic_audience_ids" | "education_majors" | "education_schools" | "education_statuses" | "effective_audience_network_positions" | "effective_brand_safety_content_filter_levels" | "effective_device_platforms" | "effective_facebook_positions" | "effective_instagram_positions" | "effective_messenger_positions" | "effective_oculus_positions" | "effective_publisher_platforms" | "effective_threads_positions" | "effective_whatsapp_positions" | "engagement_specs" | "ethnic_affinity" | "exclude_previous_days" | "exclude_reached_since" | "excluded_brand_safety_content_types" | "excluded_connections" | "excluded_custom_audiences" | "excluded_dynamic_audience_ids" | "excluded_engagement_specs" | "excluded_geo_locations" | "excluded_mobile_device_model" | "excluded_product_audience_specs" | "excluded_publisher_categories" | "excluded_publisher_list_ids" | "excluded_user_adclusters" | "excluded_user_device" | "exclusions" | "expanded_implicit_custom_audiences" | "facebook_positions" | "family_statuses" | "fb_deal_id" | "flexible_spec" | "follow_profiles" | "follow_profiles_negative" | "format" | "friends_of_connections" | "gatekeepers" | "genders" | "generation" | "geo_locations" | "hashtag_interactions" | "home_ownership" | "home_type" | "home_value" | "household_composition" | "household_income" | "id" | "income" | "industries" | "instagram_hashtags" | "instagram_positions" | "install_state_application" | "instream_video_skippable_excluded" | "instream_video_sponsorship_placements" | "interest_defaults_source" | "interested_in" | "interests" | "is_instagram_destination_ad" | "is_whatsapp_destination_ad" | "keywords" | "life_events" | "locales" | "location_categories" | "location_cluster_ids" | "location_expansion" | "marketing_message_channels" | "marketplace_product_categories" | "messenger_positions" | "mobile_device_model" | "moms" | "net_worth" | "oculus_positions" | "office_type" | "page_types" | "place_page_set_ids" | "political_views" | "politics" | "product_audience_specs" | "prospecting_audience" | "publisher_platforms" | "purchase_intent" | "radius" | "region_keys" | "regions" | "relationship_statuses" | "rtb_flag" | "site_category" | "subscriber_universe" | "tafe_ca_mitigation_strategy" | "targeting_automation" | "targeting_optimization" | "targeting_relaxation_types" | "threads_positions" | "timezones" | "topic" | "trending" | "user_adclusters" | "user_age_unknown" | "user_device" | "user_event" | "user_os" | "user_page_threads" | "user_page_threads_excluded" | "whatsapp_positions" | "wireless_carrier" | "work_employers" | "work_positions" | "zips";

export type AdAccountTasks = "AA_ANALYZE" | "ADVERTISE" | "ANALYZE" | "DRAFT" | "MANAGE";

export interface AdAccountTrackingDataFields {
  readonly tracking_specs?: ConversionActionQueryFields;
}

export interface AdAccountURLForAssetExtractionFields {
  readonly source_type?: string;
  readonly source_url?: string;
}

export interface AdAccountUserFields {
  readonly id?: string;
  readonly name?: string;
  readonly tasks?: ReadonlyArray<string>;
}

export interface AdAccountUserPermissionsFields {
  readonly business?: BusinessFields;
  readonly business_persona?: Readonly<Record<string, unknown>>;
  readonly created_by?: UserFields;
  readonly created_time?: string;
  readonly email?: string;
  readonly status?: string;
  readonly tasks?: ReadonlyArray<string>;
  readonly updated_by?: UserFields;
  readonly updated_time?: string;
  readonly user?: UserFields;
}

export interface AdAccountUserSettingsFields {
  readonly acf_should_opt_out_video_adjustments?: boolean;
  readonly aco_sticky_settings?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly actions_quick_view_created?: boolean;
  readonly active_ads_quick_view_created?: boolean;
  readonly ad_account?: AdAccountFields;
  readonly ad_object_export_format?: string;
  readonly ads_manager_footer_row_toast_impressions?: number;
  readonly auto_review_video_caption?: boolean;
  readonly budget_optimization_quick_view_created?: boolean;
  readonly budget_pool_qv_created?: boolean;
  readonly campaign_overview_columns?: ReadonlyArray<string>;
  readonly column_suggestion_status?: string;
  readonly conditional_formatting_rules?: ReadonlyArray<string>;
  readonly default_account_overview_agegender_metrics?: ReadonlyArray<string>;
  readonly default_account_overview_location_metrics?: ReadonlyArray<string>;
  readonly default_account_overview_metrics?: ReadonlyArray<string>;
  readonly default_account_overview_time_metrics?: ReadonlyArray<string>;
  readonly default_builtin_column_preset?: string;
  readonly default_nam_time_range?: string;
  readonly draft_mode_enabled?: boolean;
  readonly export_deleted_items_with_delivery?: boolean;
  readonly export_summary_row?: boolean;
  readonly had_delivery_quick_view_created?: boolean;
  readonly has_seen_groups_column_flexing_experience?: boolean;
  readonly has_seen_instagram_column_flexing_experience?: boolean;
  readonly has_seen_leads_column_flexing_experience?: boolean;
  readonly has_seen_shops_ads_metrics_onboarding_tour?: boolean;
  readonly has_seen_shops_column_flexing_experience?: boolean;
  readonly has_used_quick_views_panel?: boolean;
  readonly hidden_optimization_tips?: ReadonlyArray<Readonly<Record<string, boolean>>>;
  readonly high_performing_quick_view_created?: boolean;
  readonly id?: string;
  readonly is_3p_auth_setting_set?: boolean;
  readonly is_ads_manager_footer_row_preference_set?: boolean;
  readonly is_ads_manager_footer_row_shown?: boolean;
  readonly last_used_columns?: Readonly<Record<string, unknown>>;
  readonly last_used_pe_filters?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly last_used_website_urls?: ReadonlyArray<string>;
  readonly outlier_preferences?: Readonly<Record<string, unknown>>;
  readonly pinned_ad_object_ids?: ReadonlyArray<string>;
  readonly rb_export_format?: string;
  readonly rb_export_raw_data?: boolean;
  readonly rb_export_summary_row?: boolean;
  readonly recently_used_quick_views?: ReadonlyArray<string>;
  readonly saip_advertiser_setup_optimisation_guidance_overall_state?: string;
  readonly saip_advertiser_setup_optimisation_guidance_state?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly shops_ads_metrics_onboarding_tour_close_count?: number;
  readonly shops_ads_metrics_onboarding_tour_last_action_time?: string;
  readonly should_default_image_auto_crop?: boolean;
  readonly should_default_image_auto_crop_for_tail?: boolean;
  readonly should_default_image_auto_crop_optimization?: boolean;
  readonly should_default_image_dof_toggle?: boolean;
  readonly should_default_image_lpp_ads_to_square?: boolean;
  readonly should_default_instagram_profile_card_optimization?: boolean;
  readonly should_default_text_swapping_optimization?: boolean;
  readonly should_logout_of_3p_sourcing?: boolean;
  readonly should_show_shops_ads_metrics_onboarding_tour?: boolean;
  readonly show_archived_data?: boolean;
  readonly syd_campaign_trends_activemetric?: string;
  readonly syd_campaign_trends_attribution?: string;
  readonly syd_campaign_trends_metrics?: ReadonlyArray<string>;
  readonly syd_campaign_trends_objective?: AdAccountUserSettingsSydCampaignTrendsObjective;
  readonly syd_campaign_trends_time_range?: string;
  readonly syd_landing_page_opt_in_status?: string;
  readonly text_gen_persona_opt_in_type?: string;
  readonly text_variations_hl_opt_in_out_ts?: string;
  readonly text_variations_hl_opt_in_type?: string;
  readonly text_variations_opt_in_out_ts?: string;
  readonly text_variations_opt_in_type?: string;
  readonly user?: UserFields;
  readonly value_optimized_qv_created?: boolean;
  readonly value_qv_nux_impressions?: number;
  readonly value_suggested_column_status?: string;
}

export type AdAccountUserSettingsSydCampaignTrendsObjective = "APP_INSTALLS" | "BRAND_AWARENESS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS" | "WEBSITE_CONVERSIONS";

export interface AdAccountYouthAdsAdvertiserFields {
  readonly is_youth_ads_advertiser?: boolean;
}

export type AdActivityCategory = "ACCOUNT" | "AD" | "AD_KEYWORDS" | "AD_SET" | "AUDIENCE" | "BID" | "BUDGET" | "CAMPAIGN" | "DATE" | "STATUS" | "TARGETING";

export type AdActivityDataSource = "CALYPSO" | "TAO" | "TAO_AD_ACCOUNT" | "TAO_AD_STATUS";

export type AdActivityEventType = "accept_custom_audience_appeal" | "account_spending_limit_reached" | "ad_account_add_user_to_role" | "ad_account_billing_charge" | "ad_account_billing_charge_failed" | "ad_account_billing_chargeback" | "ad_account_billing_chargeback_reversal" | "ad_account_billing_decline" | "ad_account_billing_refund" | "ad_account_remove_spend_limit" | "ad_account_remove_user_from_role" | "ad_account_reset_spend_limit" | "ad_account_set_business_information" | "ad_account_update_audience_type_url_parameter" | "ad_account_update_spend_limit" | "ad_account_update_status" | "ad_review_approved" | "ad_review_declined" | "adaccount_update_audience_segment" | "add_funding_source" | "add_images" | "apply_restrictions_custom_audience" | "billing_event" | "campaign_ended" | "campaign_spending_limit_reached" | "conversion_event_updated" | "create_ad" | "create_ad_set" | "create_adaccount_agency_fee" | "create_audience" | "create_campaign_group" | "create_campaign_group_agency_fee" | "create_campaign_legacy" | "create_custom_audience_appeal" | "delete_audience" | "delete_images" | "di_ad_set_learning_stage_exit" | "edit_and_update_ad_creative" | "edit_images" | "first_delivery_event" | "funding_event_initiated" | "funding_event_successful" | "lifetime_budget_spent" | "merge_campaigns" | "receive_audience" | "reject_custom_audience_appeal" | "remove_funding_source" | "remove_shared_audience" | "share_audience" | "unknown" | "unshare_audience" | "update_ad_audience_persona" | "update_ad_bid_info" | "update_ad_bid_type" | "update_ad_creative" | "update_ad_friendly_name" | "update_ad_labels" | "update_ad_run_status" | "update_ad_run_status_to_be_set_after_review" | "update_ad_set_ad_keywords" | "update_ad_set_bid_adjustments" | "update_ad_set_bid_strategy" | "update_ad_set_bidding" | "update_ad_set_budget" | "update_ad_set_budget_scaling_cost_target" | "update_ad_set_budget_scaling_extra_budget" | "update_ad_set_budget_scaling_status" | "update_ad_set_cost_bidding_mode" | "update_ad_set_duration" | "update_ad_set_learning_stage_status" | "update_ad_set_min_spend_target" | "update_ad_set_name" | "update_ad_set_optimization_goal" | "update_ad_set_run_status" | "update_ad_set_spend_cap" | "update_ad_set_target_spec" | "update_ad_set_value_rules" | "update_ad_targets_spec" | "update_adaccount_agency_fee" | "update_adaccount_agency_fee_status" | "update_adgroup_stop_delivery" | "update_audience" | "update_budget_flex_toggle_status" | "update_campaign_ad_scheduling" | "update_campaign_budget" | "update_campaign_budget_optimization_toggling_status" | "update_campaign_budget_scheduling_state" | "update_campaign_budget_split" | "update_campaign_conversion_goal" | "update_campaign_delivery_destination" | "update_campaign_delivery_type" | "update_campaign_group_ad_scheduling" | "update_campaign_group_agency_fee" | "update_campaign_group_budget_scaling_cost_target" | "update_campaign_group_budget_scaling_extra_budget" | "update_campaign_group_budget_scaling_status" | "update_campaign_group_budget_scheduling_state" | "update_campaign_group_delivery_type" | "update_campaign_group_high_demand_periods" | "update_campaign_group_spend_cap" | "update_campaign_high_demand_periods" | "update_campaign_name" | "update_campaign_run_status" | "update_campaign_schedule" | "update_campaign_value_adjustment_rule" | "update_delivery_type_cross_level_shift";

export interface AdActivityFields {
  readonly actor_id?: string;
  readonly actor_name?: string;
  readonly application_id?: string;
  readonly application_name?: string;
  readonly date_time_in_timezone?: string;
  readonly event_time?: string;
  readonly event_type?: AdActivityEventType;
  readonly extra_data?: string;
  readonly object_id?: string;
  readonly object_name?: string;
  readonly object_type?: string;
  readonly tool?: string;
  readonly translated_event_type?: string;
}

export interface AdAssetBodyFields {
  readonly id?: string;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetCallToActionTypeFields {
  readonly id?: string;
  readonly name?: string;
}

export type AdAssetCustomizationRuleCustomizationSpecDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export interface AdAssetCustomizationRuleCustomizationSpecFields {
  readonly age_max?: number;
  readonly age_min?: number;
  readonly audience_network_positions?: ReadonlyArray<string>;
  readonly device_platforms?: ReadonlyArray<AdAssetCustomizationRuleCustomizationSpecDevicePlatforms>;
  readonly facebook_positions?: ReadonlyArray<string>;
  readonly geo_locations?: TargetingGeoLocationFields;
  readonly instagram_positions?: ReadonlyArray<string>;
  readonly locales?: ReadonlyArray<number>;
  readonly messenger_positions?: ReadonlyArray<string>;
  readonly publisher_platforms?: ReadonlyArray<string>;
  readonly threads_positions?: ReadonlyArray<string>;
}

export interface AdAssetDescriptionFields {
  readonly id?: string;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedAdditionalDataFields {
  readonly automated_product_tags?: boolean;
  readonly brand_page_id?: string;
  readonly is_click_to_message?: boolean;
  readonly multi_share_end_card?: boolean;
  readonly page_welcome_message?: string;
  readonly partner_app_welcome_message_flow_id?: string;
}

export interface AdAssetFeedAdditionalDataPageNudgeMessageFields {
  readonly enabled?: boolean;
  readonly quick_replies?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly text?: string;
}

export interface AdAssetFeedAdditionalDataReconsiderationOfferFields {
  readonly offer_id?: string;
  readonly offer_name?: string;
}

export interface AdAssetFeedSpecAssetCustomizationRuleFields {
  readonly body_label?: AdAssetFeedSpecAssetLabelFields;
  readonly call_to_action_label?: AdAssetFeedSpecAssetLabelFields;
  readonly call_to_action_type_label?: AdAssetFeedSpecAssetLabelFields;
  readonly caption_label?: AdAssetFeedSpecAssetLabelFields;
  readonly carousel_label?: AdAssetFeedSpecAssetLabelFields;
  readonly customization_spec?: AdAssetCustomizationRuleCustomizationSpecFields;
  readonly description_label?: AdAssetFeedSpecAssetLabelFields;
  readonly image_label?: AdAssetFeedSpecAssetLabelFields;
  readonly is_default?: boolean;
  readonly link_url_label?: AdAssetFeedSpecAssetLabelFields;
  readonly priority?: number;
  readonly title_label?: AdAssetFeedSpecAssetLabelFields;
  readonly video_label?: AdAssetFeedSpecAssetLabelFields;
}

export interface AdAssetFeedSpecAssetLabelFields {
  readonly id?: string;
  readonly name?: string;
}

export interface AdAssetFeedSpecBodyFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedSpecCallToActionFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly type?: string;
  readonly value?: AdCreativeLinkDataCallToActionValueFields;
}

export type AdAssetFeedSpecCallToActionTypes = "ADD_TO_CART" | "APPLY_NOW" | "ASK_ABOUT_SERVICES" | "ASK_A_QUESTION" | "ASK_FOR_MORE_INFO" | "ASK_US" | "AUDIO_CALL" | "BOOK_A_CONSULTATION" | "BOOK_NOW" | "BOOK_TRAVEL" | "BROWSE_SHOP" | "BUY" | "BUY_NOW" | "BUY_TICKETS" | "BUY_VIA_MESSAGE" | "CALL" | "CALL_ME" | "CALL_NOW" | "CHAT_NOW" | "CHAT_WITH_US" | "CONFIRM" | "CONTACT" | "CONTACT_US" | "DONATE" | "DONATE_NOW" | "DOWNLOAD" | "EVENT_RSVP" | "FIND_A_GROUP" | "FIND_OUT_MORE" | "FIND_YOUR_GROUPS" | "FOLLOW_NEWS_STORYLINE" | "FOLLOW_PAGE" | "FOLLOW_USER" | "GET_A_QUOTE" | "GET_DETAILS" | "GET_DIRECTIONS" | "GET_IN_TOUCH" | "GET_OFFER" | "GET_OFFER_VIEW" | "GET_PROMOTIONS" | "GET_QUOTE" | "GET_SHOWTIMES" | "GET_STARTED" | "INQUIRE_NOW" | "INSTALL_APP" | "INSTALL_MOBILE_APP" | "JOIN_CHANNEL" | "JOIN_LIVE_VIDEO" | "LEARN_MORE" | "LIKE_PAGE" | "LISTEN_MUSIC" | "LISTEN_NOW" | "MAKE_AN_APPOINTMENT" | "MESSAGE_PAGE" | "MOBILE_DOWNLOAD" | "NO_BUTTON" | "OPEN_INSTANT_APP" | "OPEN_LINK" | "ORDER_NOW" | "PAY_TO_ACCESS" | "PLAY_GAME" | "PLAY_GAME_ON_FACEBOOK" | "PURCHASE_GIFT_CARDS" | "RAISE_MONEY" | "RECORD_NOW" | "REFER_FRIENDS" | "REQUEST_TIME" | "SAY_THANKS" | "SEE_MORE" | "SEE_SHOP" | "SELL_NOW" | "SEND_A_GIFT" | "SEND_GIFT_MONEY" | "SEND_UPDATES" | "SHARE" | "SHOP_NOW" | "SHOP_WITH_AI" | "SIGN_UP" | "SOTTO_SUBSCRIBE" | "START_A_CHAT" | "START_ORDER" | "SUBSCRIBE" | "SWIPE_UP_PRODUCT" | "SWIPE_UP_SHOP" | "TRY_DEMO" | "TRY_ON_WITH_AI" | "UPDATE_APP" | "USE_APP" | "USE_MOBILE_APP" | "VIDEO_ANNOTATION" | "VIDEO_CALL" | "VIEW_CART" | "VIEW_CHANNEL" | "VIEW_IN_CART" | "VIEW_PRODUCT" | "VISIT_PAGES_FEED" | "VISIT_WEBSITE" | "WATCH_LIVE_VIDEO" | "WATCH_MORE" | "WATCH_VIDEO" | "WHATSAPP_MESSAGE" | "WOODHENGE_SUPPORT";

export interface AdAssetFeedSpecCaptionFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedSpecCarouselChildAttachmentFields {
  readonly body_label?: AdAssetFeedSpecAssetLabelFields;
  readonly call_to_action_type_label?: AdAssetFeedSpecAssetLabelFields;
  readonly caption_label?: AdAssetFeedSpecAssetLabelFields;
  readonly description_label?: AdAssetFeedSpecAssetLabelFields;
  readonly image_label?: AdAssetFeedSpecAssetLabelFields;
  readonly link_url_label?: AdAssetFeedSpecAssetLabelFields;
  readonly phone_data_ids_label?: AdAssetFeedSpecAssetLabelFields;
  readonly static_card?: boolean;
  readonly title_label?: AdAssetFeedSpecAssetLabelFields;
  readonly video_label?: AdAssetFeedSpecAssetLabelFields;
}

export interface AdAssetFeedSpecCarouselFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly child_attachments?: ReadonlyArray<AdAssetFeedSpecCarouselChildAttachmentFields>;
  readonly multi_share_end_card?: boolean;
  readonly multi_share_optimized?: boolean;
}

export interface AdAssetFeedSpecDescriptionFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedSpecEventsFields {
  readonly id?: string;
}

export interface AdAssetFeedSpecFields {
  readonly ad_formats?: ReadonlyArray<string>;
  readonly additional_data?: AdAssetFeedAdditionalDataFields;
  readonly app_product_page_id?: string;
  readonly asset_customization_rules?: ReadonlyArray<AdAssetFeedSpecAssetCustomizationRuleFields>;
  readonly audios?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly autotranslate?: ReadonlyArray<string>;
  readonly bodies?: ReadonlyArray<AdAssetFeedSpecBodyFields>;
  readonly call_ads_configuration?: Readonly<Record<string, unknown>>;
  readonly call_to_action_types?: ReadonlyArray<AdAssetFeedSpecCallToActionTypes>;
  readonly call_to_actions?: ReadonlyArray<AdAssetFeedSpecCallToActionFields>;
  readonly captions?: ReadonlyArray<AdAssetFeedSpecCaptionFields>;
  readonly carousels?: ReadonlyArray<AdAssetFeedSpecCarouselFields>;
  readonly ctwa_consent_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly descriptions?: ReadonlyArray<AdAssetFeedSpecDescriptionFields>;
  readonly events?: ReadonlyArray<AdAssetFeedSpecEventsFields>;
  readonly groups?: ReadonlyArray<AdAssetFeedSpecGroupRuleFields>;
  readonly images?: ReadonlyArray<AdAssetFeedSpecImageFields>;
  readonly link_urls?: ReadonlyArray<AdAssetFeedSpecLinkURLFields>;
  readonly message_extensions?: ReadonlyArray<AdAssetMessageExtensionsFields>;
  readonly onsite_destinations?: ReadonlyArray<AdAssetOnsiteDestinationsFields>;
  readonly optimization_type?: string;
  readonly promotional_metadata?: Readonly<Record<string, unknown>>;
  readonly reasons_to_shop?: boolean;
  readonly shops_bundle?: boolean;
  readonly titles?: ReadonlyArray<AdAssetFeedSpecTitleFields>;
  readonly translations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly upcoming_events?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly videos?: ReadonlyArray<AdAssetFeedSpecVideoFields>;
  readonly web_destination_spec?: Readonly<Record<string, unknown>>;
}

export interface AdAssetFeedSpecGroupRuleFields {
  readonly body_label?: AdAssetFeedSpecAssetLabelFields;
  readonly caption_label?: AdAssetFeedSpecAssetLabelFields;
  readonly description_label?: AdAssetFeedSpecAssetLabelFields;
  readonly image_label?: AdAssetFeedSpecAssetLabelFields;
  readonly link_url_label?: AdAssetFeedSpecAssetLabelFields;
  readonly title_label?: AdAssetFeedSpecAssetLabelFields;
  readonly video_label?: AdAssetFeedSpecAssetLabelFields;
}

export interface AdAssetFeedSpecImageFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly hash?: string;
  readonly image_crops?: AdsImageCropsFields;
  readonly url?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedSpecLinkURLFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly android_url?: string;
  readonly carousel_see_more_url?: string;
  readonly deeplink_url?: string;
  readonly display_url?: string;
  readonly ios_url?: string;
  readonly object_store_urls?: ReadonlyArray<string>;
  readonly url_tags?: string;
  readonly website_url?: string;
}

export interface AdAssetFeedSpecTitleFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetFeedSpecVideoFields {
  readonly adlabels?: ReadonlyArray<AdAssetFeedSpecAssetLabelFields>;
  readonly caption_ids?: ReadonlyArray<string>;
  readonly thumbnail_hash?: string;
  readonly thumbnail_url?: string;
  readonly url_tags?: string;
  readonly video_id?: string;
}

export interface AdAssetImageFields {
  readonly hash?: string;
  readonly id?: string;
  readonly image_crops?: AdsImageCropsFields;
  readonly name?: string;
  readonly tag?: string;
  readonly url?: string;
  readonly url_tags?: string;
}

export interface AdAssetLinkURLFields {
  readonly android_deeplink_url?: string;
  readonly carousel_see_more_url?: string;
  readonly deeplink_url?: string;
  readonly display_url?: string;
  readonly id?: string;
  readonly ipad_deeplink_url?: string;
  readonly iphone_deeplink_url?: string;
  readonly url_tags?: string;
  readonly website_url?: string;
}

export interface AdAssetMessageExtensionsFields {
  readonly type?: string;
}

export interface AdAssetOnsiteDestinationsFields {
  readonly auto_optimization?: string;
  readonly details_page_product_id?: string;
  readonly shop_collection_product_set_id?: string;
  readonly source?: string;
  readonly storefront_shop_id?: string;
}

export type AdAssetTargetRuleTargetingDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export interface AdAssetTargetRuleTargetingFields {
  readonly age_max?: number;
  readonly age_min?: number;
  readonly audience_network_positions?: ReadonlyArray<string>;
  readonly device_platforms?: ReadonlyArray<AdAssetTargetRuleTargetingDevicePlatforms>;
  readonly facebook_positions?: ReadonlyArray<string>;
  readonly geo_locations?: TargetingGeoLocationFields;
  readonly instagram_positions?: ReadonlyArray<string>;
  readonly publisher_platforms?: ReadonlyArray<string>;
  readonly threads_positions?: ReadonlyArray<string>;
  readonly whatsapp_positions?: ReadonlyArray<string>;
}

export interface AdAssetTitleFields {
  readonly id?: string;
  readonly text?: string;
  readonly url_tags?: string;
}

export interface AdAssetVideoFields {
  readonly caption_ids?: ReadonlyArray<string>;
  readonly id?: string;
  readonly source_image_url?: string;
  readonly tag?: string;
  readonly thumbnail_hash?: string;
  readonly thumbnail_source?: string;
  readonly thumbnail_url?: string;
  readonly url?: string;
  readonly url_tags?: string;
  readonly video_id?: string;
  readonly video_name?: string;
}

export interface AdAsyncRequestFields {
  readonly async_request_set?: AdAsyncRequestSetFields;
  readonly created_time?: string;
  readonly id?: string;
  readonly input?: Readonly<Record<string, unknown>>;
  readonly result?: Readonly<Record<string, unknown>>;
  readonly scope_object_id?: string;
  readonly status?: string;
  readonly type?: string;
  readonly updated_time?: string;
}

export interface AdAsyncRequestSetFields {
  readonly canceled_count?: number;
  readonly created_time?: string;
  readonly error_count?: number;
  readonly id?: string;
  readonly in_progress_count?: number;
  readonly initial_count?: number;
  readonly is_completed?: boolean;
  readonly name?: string;
  readonly notification_mode?: AdAsyncRequestSetNotificationMode;
  readonly notification_result?: AdAsyncRequestSetNotificationResultFields;
  readonly notification_status?: string;
  readonly notification_uri?: string;
  readonly owner_id?: string;
  readonly success_count?: number;
  readonly total_count?: number;
  readonly updated_time?: string;
}

export type AdAsyncRequestSetNotificationMode = "OFF" | "ON_COMPLETE";

export interface AdAsyncRequestSetNotificationResultFields {
  readonly response?: string;
  readonly status?: string;
}

export type AdAsyncRequestStatuses = "CANCELED" | "CANCELED_DEPENDENCY" | "ERROR" | "ERROR_CONFLICTS" | "ERROR_DEPENDENCY" | "INITIAL" | "IN_PROGRESS" | "PENDING_DEPENDENCY" | "PROCESS_BY_AD_ASYNC_ENGINE" | "PROCESS_BY_EVENT_PROCESSOR" | "SUCCESS" | "USER_CANCELED" | "USER_CANCELED_DEPENDENCY";

export interface AdBidAdjustmentsFields {
  readonly age_range?: Readonly<Record<string, number>>;
  readonly page_types?: Readonly<Record<string, unknown>>;
  readonly user_groups?: string;
}

export type AdBidType = "ABSOLUTE_OCPM" | "CPA" | "CPC" | "CPM" | "MULTI_PREMIUM";

export interface AdCampaignBidConstraintFields {
  readonly roas_average_floor?: number;
}

export interface AdCampaignBudgetSchedulesFields {

}

export interface AdCampaignBudgetSchedulesPostFields {
  readonly id?: string;
}

export interface AdCampaignCallingSettingsFields {
  readonly call_forwarding?: string;
  readonly call_transcript?: string;
}

export interface AdCampaignConversionValueExpressionSpecFields {
  readonly adjustment_sign?: string;
  readonly adjustment_weight?: number;
  readonly destination_type?: string;
}

export interface AdCampaignDeleteFields {
  readonly success?: boolean;
}

export interface AdCampaignDeliveryEstimateFields {
  readonly estimate_mau_lower_bound?: number;
  readonly estimate_mau_upper_bound?: number;
  readonly estimate_ready?: boolean;
  readonly targeting_optimization_types?: ReadonlyArray<Readonly<Record<string, number>>>;
}

export type AdCampaignDeliveryEstimateOptimizationGoal = "ADVERTISER_SILOED_VALUE" | "AD_RECALL_LIFT" | "APP_INSTALLS" | "APP_INSTALLS_AND_OFFSITE_CONVERSIONS" | "AUTOMATIC_OBJECTIVE" | "CONVERSATIONS" | "DERIVED_EVENTS" | "ENGAGED_PAGE_VIEWS" | "ENGAGED_USERS" | "EVENT_RESPONSES" | "IMPRESSIONS" | "IN_APP_VALUE" | "LANDING_PAGE_VIEWS" | "LEAD_GENERATION" | "LINK_CLICKS" | "MEANINGFUL_CALL_ATTEMPT" | "MESSAGING_APPOINTMENT_CONVERSION" | "MESSAGING_DEEP_CONVERSATION_AND_FOLLOW" | "MESSAGING_PURCHASE_CONVERSION" | "NONE" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PROFILE_AND_PAGE_ENGAGEMENT" | "PROFILE_VISIT" | "QUALITY_CALL" | "QUALITY_LEAD" | "REACH" | "REMINDERS_SET" | "SUBSCRIBERS" | "THRUPLAY" | "VALUE" | "VISIT_INSTAGRAM_PROFILE";

export interface AdCampaignDeliveryStatsFields {
  readonly bid_recommendation?: number;
  readonly current_average_cost?: number;
  readonly last_significant_edit_ts?: number;
  readonly learning_stage_exit_info?: Readonly<Record<string, unknown>>;
  readonly learning_stage_info?: AdCampaignLearningStageInfoFields;
  readonly unsupported_features?: ReadonlyArray<Readonly<Record<string, AdCampaignDeliveryStatsUnsupportedReasonsFields>>>;
}

export interface AdCampaignDeliveryStatsGetFields {
  readonly data?: ReadonlyArray<unknown>;
}

export interface AdCampaignDeliveryStatsUnsupportedReasonsFields {
  readonly reason_data?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly reason_type?: string;
}

export interface AdCampaignFields {

}

export interface AdCampaignFrequencyControlSpecsFields {
  readonly event?: string;
  readonly interval_days?: number;
  readonly max_frequency?: number;
  readonly type?: string;
}

export interface AdCampaignGoalFields {
  readonly engaged_audiences_audience_label_exclusions?: ReadonlyArray<string>;
  readonly engaged_audiences_audience_label_inclusions?: ReadonlyArray<string>;
  readonly engaged_audiences_exclusions?: ReadonlyArray<string>;
  readonly engaged_audiences_inclusions?: ReadonlyArray<string>;
  readonly existing_customers_audience_label_exclusions?: ReadonlyArray<string>;
  readonly existing_customers_audience_label_inclusions?: ReadonlyArray<string>;
  readonly existing_customers_exclusions?: ReadonlyArray<string>;
  readonly existing_customers_inclusions?: ReadonlyArray<string>;
  readonly is_ca_expansion_enabled?: boolean;
  readonly is_lookalike_inclusion_enabled?: boolean;
  readonly lookalike_inclusions?: ReadonlyArray<string>;
  readonly type?: number;
}

export interface AdCampaignGroupAdvantageStateFields {
  readonly advantage_audience_state?: string;
  readonly advantage_budget_state?: string;
  readonly advantage_placement_state?: string;
  readonly advantage_state?: string;
}

export interface AdCampaignGroupAgencyFeeConfigForApiFields {
  readonly agency_fee_pct?: number;
  readonly is_agency_fee_disabled?: boolean;
  readonly is_default_agency_fee?: boolean;
}

export interface AdCampaignGroupBudgetSchedulesFields {

}

export interface AdCampaignGroupBudgetSchedulesPostFields {
  readonly id?: string;
}

export interface AdCampaignGroupDeleteFields {
  readonly success?: boolean;
}

export interface AdCampaignGroupFields {

}

export interface AdCampaignGroupIncrementalConversionOptimizationConfigFields {
  readonly action_type?: string;
  readonly ad_study_end_time?: string;
  readonly ad_study_id?: string;
  readonly ad_study_name?: string;
  readonly ad_study_start_time?: string;
  readonly cell_id?: string;
  readonly cell_name?: string;
  readonly holdout_size?: number;
  readonly ico_type?: string;
  readonly objectives?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdCampaignGroupMetricsMetadataFields {
  readonly budget_optimization?: ReadonlyArray<string>;
  readonly duplication_flow_tips?: ReadonlyArray<string>;
}

export interface AdCampaignGroupStatsFields {
  readonly actions?: Readonly<Record<string, number>>;
  readonly campaign_group_id?: string;
  readonly clicks?: number;
  readonly end_time?: string;
  readonly impressions?: number;
  readonly inline_actions?: Readonly<Record<string, number>>;
  readonly social_clicks?: number;
  readonly social_impressions?: number;
  readonly social_spent?: number;
  readonly social_unique_clicks?: number;
  readonly social_unique_impressions?: number;
  readonly spent?: number;
  readonly start_time?: string;
  readonly unique_clicks?: number;
  readonly unique_impressions?: number;
}

export interface AdCampaignGroupStructureTreeFields {
  readonly children?: ReadonlyArray<AdCampaignGroupStructureTreeFields>;
  readonly id?: string;
  readonly name?: string;
  readonly status?: string;
}

export interface AdCampaignIssuesInfoFields {
  readonly error_code?: number;
  readonly error_message?: string;
  readonly error_summary?: string;
  readonly error_type?: string;
  readonly level?: string;
  readonly mid?: string;
}

export interface AdCampaignLearningStageInfoFields {
  readonly attribution_windows?: ReadonlyArray<string>;
  readonly cas_segment?: string;
  readonly conversions?: number;
  readonly current_budget_prediction?: Readonly<Record<string, unknown>>;
  readonly dynamic_lp_conversions_threshold?: number;
  readonly dynamic_lp_days_threshold?: number;
  readonly dynamic_lp_status?: string;
  readonly is_one_to_one_cbo_budget?: boolean;
  readonly last_sig_edit_ts?: number;
  readonly recommended_budget_prediction?: Readonly<Record<string, unknown>>;
  readonly sigedit_removal?: boolean;
  readonly status?: string;
}

export interface AdCampaignMetricsMetadataFields {
  readonly boosted_component_optimization?: ReadonlyArray<string>;
  readonly creation_flow_tips?: ReadonlyArray<string>;
  readonly default_opted_in_placements?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly delivery_growth_optimizations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly duplication_flow_tips?: ReadonlyArray<string>;
  readonly edit_flow_tips?: ReadonlyArray<string>;
}

export interface AdCampaignMultiAdsFields {
  readonly enroll_status?: string;
  readonly source_type?: string;
}

export interface AdCampaignOptimizationEventFields {
  readonly custom_conversion_id?: string;
  readonly event_sequence?: number;
  readonly event_type?: string;
}

export interface AdCampaignPacedBidInfoFields {
  readonly bidding_status?: string;
}

export interface AdCampaignPlacementFields {

}

export type AdCampaignPlacementGetEffectiveAudienceNetworkPositions = "CLASSIC" | "CTV_INSTREAM_VIDEO" | "INSTREAM_VIDEO" | "REWARDED_VIDEO";

export type AdCampaignPlacementGetEffectiveDevicePlatforms = "CONNECTED_TV" | "DESKTOP" | "MOBILE";

export type AdCampaignPlacementGetEffectiveFacebookPositions = "BIZ_DISCO_FEED" | "FACEBOOK_CONTEXTUAL_BUNDLE" | "FB_REELS" | "FB_REELS_OVERLAY" | "FEED" | "GROUPS" | "GROUP_MALL" | "GROUP_TAB" | "INSTANT_ARTICLE" | "INSTREAM_REEL" | "INSTREAM_VIDEO" | "JOBS_BROWSER" | "MARKETPLACE" | "NOTIFICATION" | "PROFILE_FEED" | "PROFILE_REELS" | "RHC" | "SEARCH" | "STORY" | "STORY_STICKER" | "SUGGESTED_VIDEO" | "VIDEO_FEEDS";

export type AdCampaignPlacementGetEffectiveInstagramPositions = "EFFECT_TRAY" | "EXPLORE" | "EXPLORE_HOME" | "IGTV" | "IG_SEARCH" | "LEAD_GEN_MULTI_SUBMIT" | "PROFILE_FEED" | "PROFILE_REELS" | "REELS" | "REELS_INSTREAM" | "REELS_OVERLAY" | "SHOP" | "STORY" | "STREAM";

export type AdCampaignPlacementGetEffectiveMessengerPositions = "MESSENGER_INBOX" | "MESSENGER_MARKETING_MESSAGES" | "MESSENGER_STORY" | "MESSENGER_THREAD";

export type AdCampaignPlacementGetEffectiveOculusPositions = "TWILIGHT_DEVELOPER_UPDATE" | "TWILIGHT_FEED" | "TWILIGHT_FEED_SPOTLIGHT" | "TWILIGHT_SEARCH" | "TWILIGHT_SEARCH_NULL_STATE" | "VR_APPS" | "VR_REWARDED_VIDEO";

export type AdCampaignPlacementGetEffectivePublisherPlatforms = "AUDIENCE_NETWORK" | "FACEBOOK" | "INSTAGRAM" | "MESSENGER" | "OCULUS" | "THREADS" | "WHATSAPP";

export interface AdCampaignPlacementGetFields {
  readonly effective_audience_network_positions?: ReadonlyArray<AdCampaignPlacementGetEffectiveAudienceNetworkPositions>;
  readonly effective_device_platforms?: ReadonlyArray<AdCampaignPlacementGetEffectiveDevicePlatforms>;
  readonly effective_facebook_positions?: ReadonlyArray<AdCampaignPlacementGetEffectiveFacebookPositions>;
  readonly effective_instagram_positions?: ReadonlyArray<AdCampaignPlacementGetEffectiveInstagramPositions>;
  readonly effective_messenger_positions?: ReadonlyArray<AdCampaignPlacementGetEffectiveMessengerPositions>;
  readonly effective_oculus_positions?: ReadonlyArray<AdCampaignPlacementGetEffectiveOculusPositions>;
  readonly effective_publisher_platforms?: ReadonlyArray<AdCampaignPlacementGetEffectivePublisherPlatforms>;
  readonly metadata?: unknown;
  readonly recommendations?: ReadonlyArray<unknown>;
}

export interface AdCampaignStatsFields {
  readonly account_id?: string;
  readonly actions?: Readonly<Record<string, unknown>>;
  readonly adgroup_id?: string;
  readonly campaign_id?: string;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly clicks?: number;
  readonly end_time?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly impressions?: string;
  readonly inline_actions?: Readonly<Record<string, unknown>>;
  readonly io_number?: number;
  readonly is_completed?: boolean;
  readonly line_number?: number;
  readonly newsfeed_position?: Readonly<Record<string, unknown>>;
  readonly social_clicks?: number;
  readonly social_impressions?: string;
  readonly social_spent?: number;
  readonly social_unique_clicks?: number;
  readonly social_unique_impressions?: string;
  readonly spent?: number;
  readonly start_time?: Readonly<Record<string, unknown>>;
  readonly topline_id?: string;
  readonly unique_clicks?: number;
  readonly unique_impressions?: string;
}

export interface AdColumnSizesFields {
  readonly admarket_account?: AdAccountFields;
  readonly app_id?: string;
  readonly columns?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly id?: string;
  readonly owner?: UserFields;
  readonly page?: string;
  readonly report?: string;
  readonly tab?: string;
  readonly view?: string;
}

export type AdConfiguredStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export interface AdContractFields {
  readonly account_id?: string;
  readonly account_mgr_fbid?: string;
  readonly account_mgr_name?: string;
  readonly adops_person_name?: string;
  readonly advertiser_address_fbid?: string;
  readonly advertiser_fbid?: string;
  readonly advertiser_name?: string;
  readonly agency_discount?: number;
  readonly agency_name?: string;
  readonly bill_to_address_fbid?: string;
  readonly bill_to_fbid?: string;
  readonly campaign_name?: string;
  readonly created_by?: string;
  readonly created_date?: number;
  readonly customer_io?: string;
  readonly io_number?: number;
  readonly io_terms?: string;
  readonly io_type?: string;
  readonly last_updated_by?: string;
  readonly last_updated_date?: number;
  readonly max_end_date?: number;
  readonly mdc_fbid?: string;
  readonly media_plan_number?: string;
  readonly min_start_date?: number;
  readonly msa_contract?: string;
  readonly payment_terms?: string;
  readonly rev_hold_flag?: boolean;
  readonly rev_hold_released_by?: number;
  readonly rev_hold_released_on?: number;
  readonly salesrep_fbid?: string;
  readonly salesrep_name?: string;
  readonly sold_to_address_fbid?: string;
  readonly sold_to_fbid?: string;
  readonly status?: string;
  readonly subvertical?: string;
  readonly thirdparty_billed?: number;
  readonly thirdparty_uid?: string;
  readonly thirdparty_url?: string;
  readonly vat_country?: string;
  readonly version?: number;
  readonly vertical?: string;
}

export interface AdConversionsFields {
  readonly account_id?: string;
  readonly adgroup_id?: string;
  readonly campaign_id?: string;
  readonly values?: ReadonlyArray<unknown>;
}

export interface AdConversionValuesFields {
  readonly adgroup_id?: string;
  readonly campaign_id?: string;
  readonly values?: ReadonlyArray<unknown>;
}

export interface AdCreationPackageConfigFields {
  readonly api_version?: string;
  readonly id?: string;
  readonly is_eligible_for_default_opt_in?: boolean;
  readonly objective?: string;
  readonly package_id?: string;
  readonly status?: string;
}

export interface AdCreativeAdDisclaimerFields {
  readonly text?: string;
  readonly title?: string;
  readonly url?: string;
}

export interface AdCreativeAppExperienceSpecFields {
  readonly reveal_details?: Readonly<Record<string, unknown>>;
  readonly show_spotlights?: Readonly<Record<string, unknown>>;
  readonly website_summary?: Readonly<Record<string, unknown>>;
}

export type AdCreativeApplinkTreatment = "automatic" | "deeplink_with_appstore_fallback" | "deeplink_with_web_fallback" | "web_only";

export interface AdCreativeAssetGroupsSpecFields {
  readonly groups?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly origin?: string;
  readonly origins?: ReadonlyArray<string>;
}

export type AdCreativeAuthorizationCategory = "NONE" | "POLITICAL" | "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA";

export interface AdCreativeAutomationSpecFields {
  readonly decision_type?: string;
  readonly enrollment_status?: string;
}

export interface AdCreativeBizAIFields {
  readonly capabilities?: Readonly<Record<string, unknown>>;
  readonly pills?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly pills_mbs_version?: number;
}

export interface AdCreativeBrandedContentAdsFields {
  readonly acting_business_id?: string;
  readonly ad_format?: number;
  readonly automated_adgroup_creation?: boolean;
  readonly content_search_input?: string;
  readonly creator_ad_permission_type?: string;
  readonly deliver_dynamic_partner_content?: boolean;
  readonly facebook_boost_post_access_token?: string;
  readonly instagram_boost_post_access_token?: string;
  readonly is_mca_internal?: boolean;
  readonly parent_source_facebook_post_id?: string;
  readonly parent_source_instagram_media_id?: string;
  readonly partners?: ReadonlyArray<AdCreativeBrandedContentAdsPartnersFields>;
  readonly product_set_partner_selection_status?: string;
  readonly promoted_page_id?: string;
  readonly testimonial?: string;
  readonly testimonial_locale?: string;
  readonly ui_version?: number;
}

export interface AdCreativeBrandedContentAdsPartnersFields {
  readonly fb_page_id?: string;
  readonly has_create_ads_access?: boolean;
  readonly identity_type?: string;
  readonly ig_asset_id?: string;
  readonly ig_user_id?: string;
}

export type AdCreativeCallToActionType = "ADD_TO_CART" | "APPLY_NOW" | "ASK_ABOUT_SERVICES" | "ASK_A_QUESTION" | "ASK_FOR_MORE_INFO" | "ASK_US" | "AUDIO_CALL" | "BOOK_A_CONSULTATION" | "BOOK_NOW" | "BOOK_TRAVEL" | "BROWSE_SHOP" | "BUY" | "BUY_NOW" | "BUY_TICKETS" | "BUY_VIA_MESSAGE" | "CALL" | "CALL_ME" | "CALL_NOW" | "CHAT_NOW" | "CHAT_WITH_US" | "CONFIRM" | "CONTACT" | "CONTACT_US" | "DONATE" | "DONATE_NOW" | "DOWNLOAD" | "EVENT_RSVP" | "FIND_A_GROUP" | "FIND_OUT_MORE" | "FIND_YOUR_GROUPS" | "FOLLOW_NEWS_STORYLINE" | "FOLLOW_PAGE" | "FOLLOW_USER" | "GET_A_QUOTE" | "GET_DETAILS" | "GET_DIRECTIONS" | "GET_IN_TOUCH" | "GET_OFFER" | "GET_OFFER_VIEW" | "GET_PROMOTIONS" | "GET_QUOTE" | "GET_SHOWTIMES" | "GET_STARTED" | "INQUIRE_NOW" | "INSTALL_APP" | "INSTALL_MOBILE_APP" | "JOIN_CHANNEL" | "JOIN_LIVE_VIDEO" | "LEARN_MORE" | "LIKE_PAGE" | "LISTEN_MUSIC" | "LISTEN_NOW" | "MAKE_AN_APPOINTMENT" | "MESSAGE_PAGE" | "MOBILE_DOWNLOAD" | "NO_BUTTON" | "OPEN_INSTANT_APP" | "OPEN_LINK" | "ORDER_NOW" | "PAY_TO_ACCESS" | "PLAY_GAME" | "PLAY_GAME_ON_FACEBOOK" | "PURCHASE_GIFT_CARDS" | "RAISE_MONEY" | "RECORD_NOW" | "REFER_FRIENDS" | "REQUEST_TIME" | "SAY_THANKS" | "SEE_MORE" | "SEE_SHOP" | "SELL_NOW" | "SEND_A_GIFT" | "SEND_GIFT_MONEY" | "SEND_UPDATES" | "SHARE" | "SHOP_NOW" | "SHOP_WITH_AI" | "SIGN_UP" | "SOTTO_SUBSCRIBE" | "START_A_CHAT" | "START_ORDER" | "SUBSCRIBE" | "SWIPE_UP_PRODUCT" | "SWIPE_UP_SHOP" | "TRY_DEMO" | "TRY_ON_WITH_AI" | "UPDATE_APP" | "USE_APP" | "USE_MOBILE_APP" | "VIDEO_ANNOTATION" | "VIDEO_CALL" | "VIEW_CART" | "VIEW_CHANNEL" | "VIEW_IN_CART" | "VIEW_PRODUCT" | "VISIT_PAGES_FEED" | "VISIT_WEBSITE" | "WATCH_LIVE_VIDEO" | "WATCH_MORE" | "WATCH_VIDEO" | "WHATSAPP_MESSAGE" | "WOODHENGE_SUPPORT";

export type AdCreativeCategorizationCriteria = "brand" | "category" | "product_type";

export type AdCreativeCategoryMediaSource = "CATEGORY" | "MIXED" | "PRODUCTS_COLLAGE" | "PRODUCTS_SLIDESHOW";

export interface AdCreativeCollectionThumbnailInfoFields {
  readonly element_child_index?: number;
  readonly element_crops?: AdsImageCropsFields;
  readonly element_id?: string;
}

export interface AdCreativeContextualMultiAdsFields {
  readonly enroll_status?: string;
}

export interface AdCreativeDegreesOfFreedomSpecFields {
  readonly ad_handle_type?: string;
  readonly creative_features_spec?: AdCreativeFeaturesSpecFields;
  readonly degrees_of_freedom_type?: string;
  readonly image_transformation_types?: ReadonlyArray<string>;
  readonly multi_media_transformation_type?: string;
  readonly stories_transformation_types?: ReadonlyArray<string>;
  readonly text_transformation_types?: ReadonlyArray<string>;
  readonly video_transformation_types?: ReadonlyArray<string>;
}

export interface AdCreativeDestinationSpecFields {
  readonly destination_type?: string;
  readonly native_commerce_experience?: Readonly<Record<string, unknown>>;
  readonly website?: Readonly<Record<string, unknown>>;
}

export type AdCreativeDynamicAdVoice = "DYNAMIC" | "STORY_OWNER";

export type AdCreativeExecutionOptions = "validate_only";

export interface AdCreativeFacebookBrandedContentFields {
  readonly shared_to_sponsor_status?: string;
  readonly sponsor_page_id?: string;
  readonly sponsor_relationship?: string;
}

export interface AdCreativeFeatureActionMetadataFields {
  readonly type?: string;
}

export interface AdCreativeFeatureCustomizationsFields {
  readonly aspect_ratio_config?: Readonly<Record<string, unknown>>;
  readonly background_color?: string;
  readonly catalog_feed_tag_name?: string;
  readonly fb_feed_tag_name?: string;
  readonly fb_reels_tag_name?: string;
  readonly fb_story_tag_name?: string;
  readonly font_name?: string;
  readonly ig_feed_tag_name?: string;
  readonly ig_reels_tag_name?: string;
  readonly ig_stream_tag_name?: string;
  readonly image_crop_style?: string;
  readonly pe_carousel?: Readonly<Record<string, unknown>>;
  readonly recomposition_type?: Readonly<Record<string, unknown>>;
  readonly showcase_card_display?: string;
  readonly text_extraction?: Readonly<Record<string, unknown>>;
  readonly text_style?: string;
}

export interface AdCreativeFeatureDetailsFields {
  readonly customizations?: AdCreativeFeatureCustomizationsFields;
  readonly enroll_status?: string;
}

export interface AdCreativeFeaturesSpecFields {
  readonly adapt_to_placement?: AdCreativeFeatureDetailsFields;
  readonly add_text_overlay?: AdCreativeFeatureDetailsFields;
  readonly ads_with_benefits?: AdCreativeFeatureDetailsFields;
  readonly advantage_plus_creative?: AdCreativeFeatureDetailsFields;
  readonly app_highlights?: AdCreativeFeatureDetailsFields;
  readonly audio?: AdCreativeFeatureDetailsFields;
  readonly auto_promotion_tag?: AdCreativeFeatureDetailsFields;
  readonly biz_ai?: AdCreativeFeatureDetailsFields;
  readonly carousel_to_video?: AdCreativeFeatureDetailsFields;
  readonly catalog_feed_tag?: AdCreativeFeatureDetailsFields;
  readonly creative_stickers?: AdCreativeFeatureDetailsFields;
  readonly customize_product_recommendation?: AdCreativeFeatureDetailsFields;
  readonly cv_transformation?: AdCreativeFeatureDetailsFields;
  readonly description_automation?: AdCreativeFeatureDetailsFields;
  readonly dha_optimization?: AdCreativeFeatureDetailsFields;
  readonly dynamic_cta_text?: AdCreativeFeatureDetailsFields;
  readonly dynamic_partner_content?: AdCreativeFeatureDetailsFields;
  readonly enable_ncs_testimonials?: AdCreativeFeatureDetailsFields;
  readonly enhance_cta?: AdCreativeFeatureDetailsFields;
  readonly fb_feed_tag?: AdCreativeFeatureDetailsFields;
  readonly fb_reels_tag?: AdCreativeFeatureDetailsFields;
  readonly fb_story_tag?: AdCreativeFeatureDetailsFields;
  readonly feed_caption_optimization?: AdCreativeFeatureDetailsFields;
  readonly generate_cta?: AdCreativeFeatureDetailsFields;
  readonly hide_price?: AdCreativeFeatureDetailsFields;
  readonly hyperlink_formatting?: AdCreativeFeatureDetailsFields;
  readonly ig_feed_tag?: AdCreativeFeatureDetailsFields;
  readonly ig_glados_feed?: AdCreativeFeatureDetailsFields;
  readonly ig_reels_tag?: AdCreativeFeatureDetailsFields;
  readonly ig_stream_tag?: AdCreativeFeatureDetailsFields;
  readonly ig_video_native_subtitle?: AdCreativeFeatureDetailsFields;
  readonly image_animation?: AdCreativeFeatureDetailsFields;
  readonly image_auto_crop?: AdCreativeFeatureDetailsFields;
  readonly image_background_gen?: AdCreativeFeatureDetailsFields;
  readonly image_banner?: AdCreativeFeatureDetailsFields;
  readonly image_brightness_and_contrast?: AdCreativeFeatureDetailsFields;
  readonly image_end_card?: AdCreativeFeatureDetailsFields;
  readonly image_enhancement?: AdCreativeFeatureDetailsFields;
  readonly image_templates?: AdCreativeFeatureDetailsFields;
  readonly image_text_translation?: AdCreativeFeatureDetailsFields;
  readonly image_touchups?: AdCreativeFeatureDetailsFields;
  readonly image_uncrop?: AdCreativeFeatureDetailsFields;
  readonly inline_comment?: AdCreativeFeatureDetailsFields;
  readonly local_store_extension?: AdCreativeFeatureDetailsFields;
  readonly media_liquidity_animated_image?: AdCreativeFeatureDetailsFields;
  readonly media_order?: AdCreativeFeatureDetailsFields;
  readonly media_type_automation?: AdCreativeFeatureDetailsFields;
  readonly multi_creative_post_carousel?: AdCreativeFeatureDetailsFields;
  readonly multi_photo_to_video?: AdCreativeFeatureDetailsFields;
  readonly music_generation?: AdCreativeFeatureDetailsFields;
  readonly pac_genai_recomposition?: AdCreativeFeatureDetailsFields;
  readonly pac_recomposition?: AdCreativeFeatureDetailsFields;
  readonly pac_relaxation?: AdCreativeFeatureDetailsFields;
  readonly product_browsing?: AdCreativeFeatureDetailsFields;
  readonly product_extensions?: AdCreativeFeatureDetailsFields;
  readonly product_metadata_automation?: AdCreativeFeatureDetailsFields;
  readonly product_tags?: AdCreativeFeatureDetailsFields;
  readonly profile_card?: AdCreativeFeatureDetailsFields;
  readonly profile_extension?: AdCreativeFeatureDetailsFields;
  readonly replace_media_text?: AdCreativeFeatureDetailsFields;
  readonly reveal_details_over_time?: AdCreativeFeatureDetailsFields;
  readonly show_destination_blurbs?: AdCreativeFeatureDetailsFields;
  readonly show_summary?: AdCreativeFeatureDetailsFields;
  readonly site_extensions?: AdCreativeFeatureDetailsFields;
  readonly standard_enhancements?: AdCreativeFeatureDetailsFields;
  readonly standard_enhancements_catalog?: AdCreativeFeatureDetailsFields;
  readonly text_extraction_for_headline?: AdCreativeFeatureDetailsFields;
  readonly text_extraction_for_tap_target?: AdCreativeFeatureDetailsFields;
  readonly text_formatting_optimization?: AdCreativeFeatureDetailsFields;
  readonly text_generation?: AdCreativeFeatureDetailsFields;
  readonly text_optimizations?: AdCreativeFeatureDetailsFields;
  readonly text_overlay_translation?: AdCreativeFeatureDetailsFields;
  readonly text_translation?: AdCreativeFeatureDetailsFields;
  readonly translate_voiceover?: AdCreativeFeatureDetailsFields;
  readonly video_auto_crop?: AdCreativeFeatureDetailsFields;
  readonly video_filtering?: AdCreativeFeatureDetailsFields;
  readonly video_highlight?: AdCreativeFeatureDetailsFields;
  readonly video_highlights?: AdCreativeFeatureDetailsFields;
  readonly video_to_image?: AdCreativeFeatureDetailsFields;
  readonly video_uncrop?: AdCreativeFeatureDetailsFields;
  readonly video_uncrop_9x16_to_9x18?: AdCreativeFeatureDetailsFields;
  readonly wa_mm_image_filtering?: AdCreativeFeatureDetailsFields;
  readonly wa_mm_text_truncation_length?: AdCreativeFeatureDetailsFields;
}

export interface AdCreativeFields {
  readonly account_id?: string;
  readonly actor_id?: string;
  readonly ad_disclaimer_spec?: AdCreativeAdDisclaimerFields;
  readonly adlabels?: ReadonlyArray<AdLabelFields>;
  readonly applink_treatment?: string;
  readonly asset_feed_spec?: AdAssetFeedSpecFields;
  readonly authorization_category?: string;
  readonly auto_update?: boolean;
  readonly body?: string;
  readonly branded_content?: AdCreativeBrandedContentAdsFields;
  readonly branded_content_sponsor_page_id?: string;
  readonly bundle_folder_id?: string;
  readonly call_to_action?: AdCreativeLinkDataCallToActionFields;
  readonly call_to_action_type?: AdCreativeCallToActionType;
  readonly categorization_criteria?: string;
  readonly category_media_source?: string;
  readonly collaborative_ads_lsb_image_bank_id?: string;
  readonly contextual_multi_ads?: AdCreativeContextualMultiAdsFields;
  readonly creative_sourcing_spec?: AdCreativeSourcingSpecFields;
  readonly degrees_of_freedom_spec?: AdCreativeDegreesOfFreedomSpecFields;
  readonly destination_set_id?: string;
  readonly destination_spec?: AdCreativeDestinationSpecFields;
  readonly dynamic_ad_voice?: string;
  readonly effective_authorization_category?: string;
  readonly effective_instagram_media_id?: string;
  readonly effective_object_story_id?: string;
  readonly enable_direct_install?: boolean;
  readonly enable_launch_instant_app?: boolean;
  readonly existing_post_title?: string;
  readonly facebook_branded_content?: AdCreativeFacebookBrandedContentFields;
  readonly format_transformation_spec?: ReadonlyArray<AdCreativeFormatTransformationSpecFields>;
  readonly generative_asset_spec?: AdCreativeGenerativeAssetSpecFields;
  readonly id?: string;
  readonly image_crops?: AdsImageCropsFields;
  readonly image_hash?: string;
  readonly image_url?: string;
  readonly instagram_branded_content?: AdCreativeInstagramBrandedContentFields;
  readonly instagram_permalink_url?: string;
  readonly instagram_user_id?: string;
  readonly interactive_components_spec?: AdCreativeInteractiveComponentsSpecFields;
  readonly link_deep_link_url?: string;
  readonly link_destination_display_url?: string;
  readonly link_og_id?: string;
  readonly link_url?: string;
  readonly marketing_message_structured_spec?: AdCreativeMarketingMessageStructuredSpecFields;
  readonly media_sourcing_spec?: AdCreativeMediaSourcingSpecFields;
  readonly messenger_sponsored_message?: string;
  readonly name?: string;
  readonly object_id?: string;
  readonly object_store_url?: string;
  readonly object_story_id?: string;
  readonly object_story_spec?: AdCreativeObjectStorySpecFields;
  readonly object_type?: AdCreativeObjectType;
  readonly object_url?: string;
  readonly omnichannel_link_spec?: AdCreativeOmnichannelLinkSpecFields;
  readonly page_welcome_message?: string;
  readonly photo_album_source_object_story_id?: string;
  readonly place_page_set_id?: string;
  readonly platform_customizations?: AdCreativePlatformCustomizationFields;
  readonly playable_asset_id?: string;
  readonly portrait_customizations?: AdCreativePortraitCustomizationsFields;
  readonly product_data?: ReadonlyArray<AdCreativeProductDataFields>;
  readonly product_set_id?: string;
  readonly product_suggestion_settings?: AdCreativeProductSuggestionSettingsFields;
  readonly recommender_settings?: AdCreativeRecommenderSettingsFields;
  readonly regional_regulation_disclaimer_spec?: AdCreativeRegionalRegulationDisclaimerFields;
  readonly source_facebook_post_id?: string;
  readonly source_instagram_media_id?: string;
  readonly status?: AdCreativeStatus;
  readonly template_url?: string;
  readonly template_url_spec?: AdCreativeTemplateURLSpecFields;
  readonly thumbnail_id?: string;
  readonly thumbnail_url?: string;
  readonly title?: string;
  readonly url_tags?: string;
  readonly use_page_actor_override?: boolean;
  readonly video_id?: string;
  readonly wamo_whatsapp_identity_spec?: AdCreativeWAMOWhatsAppIdentitySpecFields;
}

export interface AdCreativeFormatTransformationSpecFields {
  readonly customizations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly data_source?: ReadonlyArray<string>;
  readonly format?: string;
}

export interface AdCreativeGenerativeAssetSpecFields {
  readonly transparency_metadata?: Readonly<Record<string, unknown>>;
}

export interface AdCreativeHouseShopsAdsSellerContentFields {

}

export interface AdCreativeImageDataMediaElementsFields {
  readonly element_id?: string;
  readonly element_type?: string;
  readonly x?: number;
  readonly y?: number;
}

export interface AdCreativeInsightsFields {
  readonly aesthetics?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface AdCreativeInstagramBrandedContentFields {
  readonly sponsor_id?: string;
}

export interface AdCreativeInteractiveComponentsSpecFields {
  readonly child_attachments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly components?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdCreativeLinkDataAppLinkSpecFields {
  readonly android?: ReadonlyArray<AndroidAppLinkFields>;
  readonly ios?: ReadonlyArray<IosAppLinkFields>;
  readonly ipad?: ReadonlyArray<IosAppLinkFields>;
  readonly iphone?: ReadonlyArray<IosAppLinkFields>;
}

export interface AdCreativeLinkDataCallToActionFields {
  readonly type?: AdCreativeLinkDataCallToActionType;
  readonly value?: AdCreativeLinkDataCallToActionValueFields;
}

export type AdCreativeLinkDataCallToActionType = "ADD_TO_CART" | "APPLY_NOW" | "ASK_ABOUT_SERVICES" | "ASK_A_QUESTION" | "ASK_FOR_MORE_INFO" | "ASK_US" | "AUDIO_CALL" | "BOOK_A_CONSULTATION" | "BOOK_NOW" | "BOOK_TRAVEL" | "BROWSE_SHOP" | "BUY" | "BUY_NOW" | "BUY_TICKETS" | "BUY_VIA_MESSAGE" | "CALL" | "CALL_ME" | "CALL_NOW" | "CHAT_NOW" | "CHAT_WITH_US" | "CONFIRM" | "CONTACT" | "CONTACT_US" | "DONATE" | "DONATE_NOW" | "DOWNLOAD" | "EVENT_RSVP" | "FIND_A_GROUP" | "FIND_OUT_MORE" | "FIND_YOUR_GROUPS" | "FOLLOW_NEWS_STORYLINE" | "FOLLOW_PAGE" | "FOLLOW_USER" | "GET_A_QUOTE" | "GET_DETAILS" | "GET_DIRECTIONS" | "GET_IN_TOUCH" | "GET_OFFER" | "GET_OFFER_VIEW" | "GET_PROMOTIONS" | "GET_QUOTE" | "GET_SHOWTIMES" | "GET_STARTED" | "INQUIRE_NOW" | "INSTALL_APP" | "INSTALL_MOBILE_APP" | "JOIN_CHANNEL" | "JOIN_LIVE_VIDEO" | "LEARN_MORE" | "LIKE_PAGE" | "LISTEN_MUSIC" | "LISTEN_NOW" | "MAKE_AN_APPOINTMENT" | "MESSAGE_PAGE" | "MOBILE_DOWNLOAD" | "NO_BUTTON" | "OPEN_INSTANT_APP" | "OPEN_LINK" | "ORDER_NOW" | "PAY_TO_ACCESS" | "PLAY_GAME" | "PLAY_GAME_ON_FACEBOOK" | "PURCHASE_GIFT_CARDS" | "RAISE_MONEY" | "RECORD_NOW" | "REFER_FRIENDS" | "REQUEST_TIME" | "SAY_THANKS" | "SEE_MORE" | "SEE_SHOP" | "SELL_NOW" | "SEND_A_GIFT" | "SEND_GIFT_MONEY" | "SEND_UPDATES" | "SHARE" | "SHOP_NOW" | "SHOP_WITH_AI" | "SIGN_UP" | "SOTTO_SUBSCRIBE" | "START_A_CHAT" | "START_ORDER" | "SUBSCRIBE" | "SWIPE_UP_PRODUCT" | "SWIPE_UP_SHOP" | "TRY_DEMO" | "TRY_ON_WITH_AI" | "UPDATE_APP" | "USE_APP" | "USE_MOBILE_APP" | "VIDEO_ANNOTATION" | "VIDEO_CALL" | "VIEW_CART" | "VIEW_CHANNEL" | "VIEW_IN_CART" | "VIEW_PRODUCT" | "VISIT_PAGES_FEED" | "VISIT_WEBSITE" | "WATCH_LIVE_VIDEO" | "WATCH_MORE" | "WATCH_VIDEO" | "WHATSAPP_MESSAGE" | "WOODHENGE_SUPPORT";

export interface AdCreativeLinkDataCallToActionValueFields {
  readonly android_url?: string;
  readonly app_destination?: string;
  readonly app_link?: string;
  readonly application?: string;
  readonly event_id?: string;
  readonly ios_url?: string;
  readonly land_on_whatsapp_catalog?: number;
  readonly land_on_whatsapp_profile?: number;
  readonly lead_gen_form_id?: string;
  readonly link?: string;
  readonly link_caption?: string;
  readonly link_format?: string;
  readonly object_store_urls?: ReadonlyArray<string>;
  readonly page?: string;
  readonly product_link?: string;
  readonly whatsapp_number?: string;
}

export interface AdCreativeLinkDataChildAttachmentFields {
  readonly android_url?: string;
  readonly call_to_action?: AdCreativeLinkDataCallToActionFields;
  readonly caption?: string;
  readonly description?: string;
  readonly ig_media_id?: string;
  readonly image_crops?: AdsImageCropsFields;
  readonly image_hash?: string;
  readonly ios_url?: string;
  readonly link?: string;
  readonly marketing_message_buttons?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly name?: string;
  readonly picture?: string;
  readonly place_data?: AdCreativePlaceDataFields;
  readonly static_card?: boolean;
  readonly video_id?: string;
}

export type AdCreativeLinkDataCustomOverlaySpecBackgroundColor = "background_000000" | "background_0090ff" | "background_00af4c" | "background_595959" | "background_755dde" | "background_e50900" | "background_f23474" | "background_f78400" | "background_ffffff";

export interface AdCreativeLinkDataCustomOverlaySpecFields {
  readonly background_color?: AdCreativeLinkDataCustomOverlaySpecBackgroundColor;
  readonly float_with_margin?: boolean;
  readonly font?: AdCreativeLinkDataCustomOverlaySpecFont;
  readonly option?: AdCreativeLinkDataCustomOverlaySpecOption;
  readonly position?: AdCreativeLinkDataCustomOverlaySpecPosition;
  readonly render_with_icon?: boolean;
  readonly template?: AdCreativeLinkDataCustomOverlaySpecTemplate;
  readonly text_color?: AdCreativeLinkDataCustomOverlaySpecTextColor;
}

export type AdCreativeLinkDataCustomOverlaySpecFont = "droid_serif_regular" | "lato_regular" | "noto_sans_regular" | "nunito_sans_bold" | "open_sans_bold" | "pt_serif_bold" | "roboto_condensed_regular" | "roboto_medium";

export type AdCreativeLinkDataCustomOverlaySpecOption = "bank_transfer" | "boleto" | "cash_on_delivery" | "discount_with_boleto" | "fast_delivery" | "free_shipping" | "home_delivery" | "inventory" | "pay_at_hotel" | "pay_on_arrival";

export type AdCreativeLinkDataCustomOverlaySpecPosition = "bottom_left" | "bottom_right" | "top_left" | "top_right";

export type AdCreativeLinkDataCustomOverlaySpecTemplate = "pill_with_text";

export type AdCreativeLinkDataCustomOverlaySpecTextColor = "text_000000" | "text_007ad0" | "text_009c2a" | "text_646464" | "text_755dde" | "text_c91b00" | "text_f23474" | "text_f78400" | "text_ffffff";

export interface AdCreativeLinkDataFields {
  readonly ad_context?: string;
  readonly additional_image_index?: number;
  readonly app_link_spec?: AdCreativeLinkDataAppLinkSpecFields;
  readonly attachment_style?: string;
  readonly automated_product_tags?: boolean;
  readonly boosted_product_set_id?: string;
  readonly branded_content_shared_to_sponsor_status?: string;
  readonly branded_content_sponsor_page_id?: string;
  readonly call_to_action?: AdCreativeLinkDataCallToActionFields;
  readonly caption?: string;
  readonly child_attachments?: ReadonlyArray<AdCreativeLinkDataChildAttachmentFields>;
  readonly collection_thumbnails?: ReadonlyArray<AdCreativeCollectionThumbnailInfoFields>;
  readonly customization_rules_spec?: ReadonlyArray<AdCustomizationRuleSpecFields>;
  readonly description?: string;
  readonly event_id?: string;
  readonly force_single_link?: boolean;
  readonly format_option?: AdCreativeLinkDataFormatOption;
  readonly image_crops?: AdsImageCropsFields;
  readonly image_hash?: string;
  readonly image_layer_specs?: ReadonlyArray<AdCreativeLinkDataImageLayerSpecFields>;
  readonly image_overlay_spec?: AdCreativeLinkDataImageOverlaySpecFields;
  readonly is_local_expansion?: boolean;
  readonly link?: string;
  readonly message?: string;
  readonly multi_share_end_card?: boolean;
  readonly multi_share_optimized?: boolean;
  readonly name?: string;
  readonly offer_id?: string;
  readonly page_welcome_message?: string;
  readonly picture?: string;
  readonly post_click_configuration?: AdCreativePostClickConfigurationFields;
  readonly preferred_image_tags?: ReadonlyArray<string>;
  readonly preferred_video_tags?: ReadonlyArray<string>;
  readonly retailer_item_ids?: ReadonlyArray<string>;
  readonly show_multiple_images?: boolean;
  readonly smart_pse_enabled?: boolean;
  readonly static_fallback_spec?: AdCreativeStaticFallbackSpecFields;
  readonly use_flexible_image_aspect_ratio?: boolean;
}

export type AdCreativeLinkDataFormatOption = "carousel_ar_effects" | "carousel_images_multi_items" | "carousel_images_single_item" | "carousel_slideshows" | "collection_video" | "single_image";

export type AdCreativeLinkDataImageLayerSpecBlendingMode = "lighten" | "multiply" | "normal";

export interface AdCreativeLinkDataImageLayerSpecFields {
  readonly blending_mode?: AdCreativeLinkDataImageLayerSpecBlendingMode;
  readonly content?: Readonly<Record<string, unknown>>;
  readonly frame_auto_show_enroll_status?: string;
  readonly frame_image_hash?: string;
  readonly frame_source?: AdCreativeLinkDataImageLayerSpecFrameSource;
  readonly image_source?: AdCreativeLinkDataImageLayerSpecImageSource;
  readonly layer_type?: AdCreativeLinkDataImageLayerSpecLayerType;
  readonly opacity?: number;
  readonly overlay_position?: AdCreativeLinkDataImageLayerSpecOverlayPosition;
  readonly overlay_shape?: AdCreativeLinkDataImageLayerSpecOverlayShape;
  readonly scale?: number;
  readonly shape_color?: string;
  readonly text_color?: string;
  readonly text_font?: AdCreativeLinkDataImageLayerSpecTextFont;
}

export type AdCreativeLinkDataImageLayerSpecFrameSource = "custom";

export type AdCreativeLinkDataImageLayerSpecImageSource = "catalog";

export type AdCreativeLinkDataImageLayerSpecLayerType = "frame_overlay" | "image" | "text_overlay";

export type AdCreativeLinkDataImageLayerSpecOverlayPosition = "bottom" | "bottom_left" | "bottom_right" | "center" | "left" | "right" | "top" | "top_left" | "top_right";

export type AdCreativeLinkDataImageLayerSpecOverlayShape = "circle" | "none" | "pill" | "rectangle" | "triangle";

export type AdCreativeLinkDataImageLayerSpecTextFont = "droid_serif_regular" | "lato_regular" | "noto_sans_regular" | "nunito_sans_bold" | "open_sans_bold" | "open_sans_condensed_bold" | "pt_serif_bold" | "roboto_condensed_regular" | "roboto_medium";

export type AdCreativeLinkDataImageOverlaySpecCustomTextType = "free_shipping" | "popular" | "sale";

export interface AdCreativeLinkDataImageOverlaySpecFields {
  readonly custom_text_type?: AdCreativeLinkDataImageOverlaySpecCustomTextType;
  readonly float_with_margin?: boolean;
  readonly overlay_template?: AdCreativeLinkDataImageOverlaySpecOverlayTemplate;
  readonly position?: AdCreativeLinkDataImageOverlaySpecPosition;
  readonly text_font?: AdCreativeLinkDataImageOverlaySpecTextFont;
  readonly text_template_tags?: ReadonlyArray<string>;
  readonly text_type?: AdCreativeLinkDataImageOverlaySpecTextType;
  readonly theme_color?: AdCreativeLinkDataImageOverlaySpecThemeColor;
}

export type AdCreativeLinkDataImageOverlaySpecOverlayTemplate = "circle_with_text" | "pill_with_text" | "triangle_with_text";

export type AdCreativeLinkDataImageOverlaySpecPosition = "bottom_left" | "bottom_right" | "top_left" | "top_right";

export type AdCreativeLinkDataImageOverlaySpecTextFont = "droid_serif_regular" | "dynads_hybrid_bold" | "lato_regular" | "noto_sans_regular" | "nunito_sans_bold" | "open_sans_bold" | "open_sans_condensed_bold" | "pt_serif_bold" | "roboto_condensed_regular" | "roboto_medium";

export type AdCreativeLinkDataImageOverlaySpecTextType = "automated_personalize" | "custom" | "disclaimer" | "from_price" | "guest_rating" | "percentage_off" | "price" | "star_rating" | "strikethrough_price" | "sustainable";

export type AdCreativeLinkDataImageOverlaySpecThemeColor = "background_000000_text_ffffff" | "background_0090ff_text_ffffff" | "background_00af4c_text_ffffff" | "background_595959_text_ffffff" | "background_755dde_text_ffffff" | "background_e50900_text_ffffff" | "background_f23474_text_ffffff" | "background_f78400_text_ffffff" | "background_ffffff_text_000000" | "background_ffffff_text_007ad0" | "background_ffffff_text_009c2a" | "background_ffffff_text_646464" | "background_ffffff_text_755dde" | "background_ffffff_text_c91b00" | "background_ffffff_text_f23474" | "background_ffffff_text_f78400";

export interface AdCreativeLinkDataMomentFields {
  readonly id?: string;
  readonly type?: AdCreativeLinkDataMomentType;
}

export type AdCreativeLinkDataMomentType = "FB_LIVE_SHOPPING" | "IG_LIVE_SHOPPING";

export interface AdCreativeLinkDataSponsorshipInfoSpecFields {
  readonly sponsor_image_url?: string;
  readonly sponsor_name?: string;
}

export interface AdCreativeLinkDataTemplateVideoSpecFields {
  readonly categorization_criteria?: string;
  readonly customization?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly template_id?: string;
}

export interface AdCreativeLiveVideoReminderFields {
  readonly enroll_status?: string;
  readonly start_time?: string;
}

export interface AdCreativeMarketingMessageStructuredSpecFields {
  readonly asset_customization?: Readonly<Record<string, unknown>>;
  readonly autoreply?: Readonly<Record<string, unknown>>;
  readonly buttons?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly conversation_template_id?: string;
  readonly footer?: string;
  readonly greeting?: string;
  readonly is_optimized_text?: boolean;
  readonly language?: string;
  readonly offer?: Readonly<Record<string, unknown>>;
  readonly referenced_adgroup_id?: string;
  readonly whats_app_business_phone_number_id?: string;
}

export interface AdCreativeMediaSourcingSpecFields {
  readonly bodies?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly descriptions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly destinations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly images?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly push_metadata_ids?: ReadonlyArray<string>;
  readonly related_media?: Readonly<Record<string, unknown>>;
  readonly titles?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly videos?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdCreativeObjectStorySpecFields {
  readonly instagram_user_id?: string;
  readonly link_data?: AdCreativeLinkDataFields;
  readonly page_id?: string;
  readonly photo_data?: AdCreativePhotoDataFields;
  readonly product_data?: ReadonlyArray<AdCreativeProductDataFields>;
  readonly template_data?: AdCreativeLinkDataFields;
  readonly text_data?: AdCreativeTextDataFields;
  readonly video_data?: AdCreativeVideoDataFields;
  readonly whats_app_business_phone_number?: string;
}

export type AdCreativeObjectType = "APPLICATION" | "DOMAIN" | "EVENT" | "INVALID" | "OFFER" | "PAGE" | "PHOTO" | "POST_DELETED" | "PRIVACY_CHECK_FAIL" | "SHARE" | "STATUS" | "STORE_ITEM" | "VIDEO";

export interface AdCreativeOmnichannelLinkSpecFields {
  readonly app?: Readonly<Record<string, unknown>>;
  readonly web?: Readonly<Record<string, unknown>>;
}

export type AdCreativeOperator = "ALL" | "ANY";

export interface AdCreativePhotoDataFields {
  readonly branded_content_shared_to_sponsor_status?: string;
  readonly branded_content_sponsor_page_id?: string;
  readonly caption?: string;
  readonly image_hash?: string;
  readonly page_welcome_message?: string;
  readonly url?: string;
}

export interface AdCreativePhotoDataMediaElementsFields {
  readonly element_id?: string;
  readonly element_type?: string;
  readonly x?: number;
  readonly y?: number;
}

export interface AdCreativePlaceDataFields {
  readonly address_string?: string;
  readonly label?: string;
  readonly latitude?: number;
  readonly location_source_id?: string;
  readonly longitude?: number;
  readonly type?: string;
}

export interface AdCreativePlatformCustomizationFields {
  readonly instagram?: Readonly<Record<string, unknown>>;
}

export interface AdCreativePortraitCustomizationsFields {
  readonly carousel_delivery_mode?: string;
  readonly specifications?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdCreativePostClickConfigurationFields {
  readonly post_click_item_description?: string;
  readonly post_click_item_headline?: string;
}

export interface AdCreativeProductDataFields {
  readonly product_id?: string;
  readonly product_source?: string;
}

export interface AdCreativeProductSuggestionSettingsFields {
  readonly enabled?: boolean;
}

export interface AdCreativePromotionMetadataSpecFields {
  readonly end_date?: number;
  readonly id?: string;
  readonly promotion_source?: string;
  readonly promotion_type?: string;
  readonly promotion_value?: number;
  readonly required_code?: string;
  readonly start_date?: number;
}

export interface AdCreativeRecommenderSettingsFields {
  readonly preferred_events?: ReadonlyArray<string>;
  readonly product_sales_channel?: string;
}

export interface AdCreativeRegionalRegulationDisclaimerFields {
  readonly australia_finserv?: Readonly<Record<string, unknown>>;
  readonly india_finserv?: Readonly<Record<string, unknown>>;
  readonly singapore_universal?: Readonly<Record<string, unknown>>;
  readonly taiwan_finserv?: Readonly<Record<string, unknown>>;
  readonly taiwan_universal?: Readonly<Record<string, unknown>>;
}

export interface AdCreativeRewardInfoFields {
  readonly reward_offer_id?: string;
  readonly reward_program_id?: string;
}

export interface AdCreativeShopSpecFields {
  readonly collection_id?: string;
  readonly landing_view?: string;
  readonly shop_id?: string;
}

export interface AdCreativeSiteLinksSpecFields {
  readonly is_defaulting_eligible?: boolean;
  readonly is_site_link_sticky?: boolean;
  readonly site_link_classification?: string;
  readonly site_link_extra_metadata?: string;
  readonly site_link_hash?: string;
  readonly site_link_id?: string;
  readonly site_link_image_hash?: string;
  readonly site_link_image_url?: string;
  readonly site_link_language?: string;
  readonly site_link_original_url?: string;
  readonly site_link_recommendation_type?: string;
  readonly site_link_title?: string;
  readonly site_link_url?: string;
  readonly site_link_url_anchor?: string;
  readonly site_link_url_recommender_type?: string;
  readonly site_link_website_data_source?: string;
}

export interface AdCreativeSourcingSpecFields {
  readonly ad_extensions_relevancy_spec?: Readonly<Record<string, unknown>>;
  readonly associated_product_set_id?: string;
  readonly brand?: Readonly<Record<string, unknown>>;
  readonly destination_screenshot_spec?: Readonly<Record<string, unknown>>;
  readonly duplication_source?: string;
  readonly dynamic_site_links_spec?: Readonly<Record<string, unknown>>;
  readonly enable_social_feedback_preservation?: boolean;
  readonly featured_offering_spec?: Readonly<Record<string, unknown>>;
  readonly intent?: Readonly<Record<string, unknown>>;
  readonly ncs_testimonial?: Readonly<Record<string, unknown>>;
  readonly pca_spec?: Readonly<Record<string, unknown>>;
  readonly product_media_metadata_spec?: Readonly<Record<string, unknown>>;
  readonly promotion_metadata_spec?: ReadonlyArray<AdCreativePromotionMetadataSpecFields>;
  readonly site_links_data_consented?: Readonly<Record<string, unknown>>;
  readonly site_links_spec?: ReadonlyArray<AdCreativeSiteLinksSpecFields>;
  readonly source_url?: string;
  readonly website_media_spec?: Readonly<Record<string, unknown>>;
  readonly website_summary_spec?: Readonly<Record<string, unknown>>;
}

export interface AdCreativeStaticFallbackSpecFields {
  readonly call_to_action?: AdCreativeLinkDataCallToActionFields;
  readonly description?: string;
  readonly image_hash?: string;
  readonly link?: string;
  readonly message?: string;
  readonly name?: string;
}

export type AdCreativeStatus = "ACTIVE" | "DELETED" | "IN_PROCESS" | "WITH_ISSUES";

export interface AdCreativeTemplateURLSpecFields {
  readonly android?: Readonly<Record<string, unknown>>;
  readonly config?: Readonly<Record<string, unknown>>;
  readonly ios?: Readonly<Record<string, unknown>>;
  readonly ipad?: Readonly<Record<string, unknown>>;
  readonly iphone?: Readonly<Record<string, unknown>>;
  readonly web?: Readonly<Record<string, unknown>>;
  readonly windows_phone?: Readonly<Record<string, unknown>>;
}

export interface AdCreativeTextDataFields {
  readonly message?: string;
}

export type AdCreativeVideoDataCustomOverlaySpecBackgroundOpacity = "half" | "solid";

export interface AdCreativeVideoDataCustomOverlaySpecFields {
  readonly background_color?: string;
  readonly background_opacity?: AdCreativeVideoDataCustomOverlaySpecBackgroundOpacity;
  readonly duration?: number;
  readonly float_with_margin?: boolean;
  readonly full_width?: boolean;
  readonly option?: AdCreativeVideoDataCustomOverlaySpecOption;
  readonly position?: AdCreativeVideoDataCustomOverlaySpecPosition;
  readonly start?: number;
  readonly template?: AdCreativeVideoDataCustomOverlaySpecTemplate;
  readonly text_color?: string;
}

export type AdCreativeVideoDataCustomOverlaySpecOption = "bank_transfer" | "boleto" | "cash_on_delivery" | "discount_with_boleto" | "fast_delivery" | "free_shipping" | "home_delivery" | "inventory" | "pay_at_hotel" | "pay_on_arrival";

export type AdCreativeVideoDataCustomOverlaySpecPosition = "middle_center" | "middle_left" | "middle_right" | "top_center" | "top_left" | "top_right";

export type AdCreativeVideoDataCustomOverlaySpecTemplate = "rectangle_with_text";

export interface AdCreativeVideoDataFields {
  readonly additional_image_index?: number;
  readonly branded_content_shared_to_sponsor_status?: string;
  readonly branded_content_sponsor_page_id?: string;
  readonly call_to_action?: AdCreativeLinkDataCallToActionFields;
  readonly collection_thumbnails?: ReadonlyArray<AdCreativeCollectionThumbnailInfoFields>;
  readonly customization_rules_spec?: ReadonlyArray<AdCustomizationRuleSpecFields>;
  readonly image_hash?: string;
  readonly image_url?: string;
  readonly link_description?: string;
  readonly message?: string;
  readonly offer_id?: string;
  readonly page_welcome_message?: string;
  readonly post_click_configuration?: AdCreativePostClickConfigurationFields;
  readonly retailer_item_ids?: ReadonlyArray<string>;
  readonly targeting?: TargetingFields;
  readonly title?: string;
  readonly video_id?: string;
}

export interface AdCreativeVideoDataMediaElementsFields {
  readonly element_id?: string;
  readonly element_type?: string;
}

export interface AdCreativeWAMOWhatsAppIdentitySpecFields {
  readonly wamo_whatsapp_identity_id?: string;
  readonly whatsapp_phone_number?: string;
}

export interface AdCreativeWhatsAppChannelSpecFields {
  readonly channel_id?: string;
  readonly channel_url?: string;
}

export interface AdCustomDerivedMetricsFields {
  readonly ad_account_id?: string;
  readonly business?: BusinessFields;
  readonly creation_time?: string;
  readonly creator?: ProfileFields;
  readonly custom_derived_metric_type?: string;
  readonly deletion_time?: string;
  readonly deletor?: ProfileFields;
  readonly description?: string;
  readonly format_type?: string;
  readonly formula?: string;
  readonly has_attribution_windows?: boolean;
  readonly has_inline_attribution_window?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly permission?: string;
  readonly saved_report_id?: string;
  readonly scope?: string;
}

export type AdCustomDerivedMetricsScope = "ACCOUNT" | "BUSINESS" | "BUSINESS_ASSET_GROUP";

export interface AdCustomizationRuleSpecFields {
  readonly caption?: string;
  readonly customization_spec?: Readonly<Record<string, unknown>>;
  readonly description?: string;
  readonly image_hash?: string;
  readonly link?: string;
  readonly message?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly template_url_spec?: AdCreativeTemplateURLSpecFields;
  readonly video_id?: number;
}

export type AdDatePreset = "data_maximum" | "last_14d" | "last_28d" | "last_30d" | "last_3d" | "last_7d" | "last_90d" | "last_month" | "last_quarter" | "last_week_mon_sun" | "last_week_sun_sat" | "last_year" | "maximum" | "this_month" | "this_quarter" | "this_week_mon_today" | "this_week_sun_today" | "this_year" | "today" | "yesterday";

export interface AdDefaultValuesFields {
  readonly campaign_group?: Readonly<Record<string, unknown>>;
}

export interface AdDraftFields {
  readonly account_id?: string;
  readonly api_version?: string;
  readonly async_request_set?: AdAsyncRequestSetFields;
  readonly author_id?: string;
  readonly created_by?: string;
  readonly draft_version?: string;
  readonly id?: string;
  readonly is_active?: boolean;
  readonly name?: string;
  readonly ownership_type?: string;
  readonly publish_status?: Readonly<Record<string, unknown>>;
  readonly state?: string;
  readonly summary?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface AdDynamicCreativeFields {
  readonly preview_url?: string;
}

export type AdEffectiveStatus = "ACTIVE" | "ADSET_PAUSED" | "ARCHIVED" | "CAMPAIGN_PAUSED" | "DELETED" | "DISAPPROVED" | "IN_PROCESS" | "PAUSED" | "PENDING_BILLING_INFO" | "PENDING_REVIEW" | "PREAPPROVED" | "WITH_ISSUES";

export interface AdEntityTargetSpendFields {
  readonly amount?: string;
  readonly has_error?: boolean;
  readonly is_accurate?: boolean;
  readonly is_prorated?: boolean;
  readonly is_updating?: boolean;
}

export type AdExecutionOptions = "include_recommendations" | "synchronous_ad_review" | "validate_only";

export interface AdExportPresetFields {
  readonly created_time?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly id?: string;
  readonly name?: string;
  readonly owner?: UserFields;
  readonly updated_time?: string;
}

export interface AdFields {
  readonly account_id?: string;
  readonly ad_active_time?: string;
  readonly ad_review_feedback?: AdgroupReviewFeedbackFields;
  readonly ad_schedule_end_time?: string;
  readonly ad_schedule_start_time?: string;
  readonly adlabels?: ReadonlyArray<AdLabelFields>;
  readonly adset?: AdSetFields;
  readonly adset_id?: string;
  readonly bid_amount?: number;
  readonly bid_info?: Readonly<Record<string, number>>;
  readonly bid_type?: AdBidType;
  readonly campaign?: CampaignFields;
  readonly campaign_id?: string;
  readonly configured_status?: AdConfiguredStatus;
  readonly conversion_domain?: string;
  readonly conversion_specs?: ReadonlyArray<ConversionActionQueryFields>;
  readonly created_time?: string;
  readonly creative?: AdCreativeFields;
  readonly creative_asset_groups_spec?: AdCreativeAssetGroupsSpecFields;
  readonly creative_automation_spec?: AdCreativeAutomationSpecFields;
  readonly demolink_hash?: string;
  readonly display_sequence?: number;
  readonly effective_status?: AdEffectiveStatus;
  readonly engagement_audience?: boolean;
  readonly failed_delivery_checks?: ReadonlyArray<DeliveryCheckFields>;
  readonly id?: string;
  readonly issues_info?: ReadonlyArray<AdgroupIssuesInfoFields>;
  readonly last_updated_by_app_id?: string;
  readonly name?: string;
  readonly placement?: PlacementFields;
  readonly preview_shareable_link?: string;
  readonly priority?: number;
  readonly recommendations?: ReadonlyArray<AdRecommendationFields>;
  readonly source_ad?: AdFields;
  readonly source_ad_id?: string;
  readonly special_ad_categories?: ReadonlyArray<string>;
  readonly status?: AdStatus;
  readonly targeting?: TargetingFields;
  readonly tracking_and_conversion_with_defaults?: TrackingAndConversionWithDefaultsFields;
  readonly tracking_specs?: ReadonlyArray<ConversionActionQueryFields>;
  readonly updated_time?: string;
}

export interface AdgroupDeleteFields {
  readonly success?: boolean;
}

export interface AdgroupFacebookFeedbackFields {
  readonly id?: string;
  readonly preview?: string;
}

export interface AdgroupFields {

}

export interface AdgroupIssuesInfoFields {
  readonly error_code?: number;
  readonly error_message?: string;
  readonly error_summary?: string;
  readonly error_type?: string;
  readonly level?: string;
  readonly mid?: string;
}

export interface AdgroupMetadataFields {
  readonly ad_standard_enhancements_edit_source?: number;
  readonly adgroup_creation_source?: string;
  readonly adgroup_edit_source?: string;
  readonly adgroup_media_source?: string;
  readonly carousel_style?: string;
  readonly carousel_with_static_card_style?: string;
  readonly is_pca_unified_format_ad?: boolean;
}

export interface AdgroupPlacementSpecificReviewFeedbackFields {
  readonly account_admin?: Readonly<Record<string, string>>;
  readonly ad?: Readonly<Record<string, string>>;
  readonly ads_conversion_experiences?: Readonly<Record<string, string>>;
  readonly b2c?: Readonly<Record<string, string>>;
  readonly b2c_commerce_unified?: Readonly<Record<string, string>>;
  readonly bsg?: Readonly<Record<string, string>>;
  readonly city_community?: Readonly<Record<string, string>>;
  readonly commerce?: Readonly<Record<string, string>>;
  readonly compromise?: Readonly<Record<string, string>>;
  readonly daily_deals?: Readonly<Record<string, string>>;
  readonly daily_deals_legacy?: Readonly<Record<string, string>>;
  readonly dpa?: Readonly<Record<string, string>>;
  readonly dri_copyright?: Readonly<Record<string, string>>;
  readonly dri_counterfeit?: Readonly<Record<string, string>>;
  readonly facebook?: Readonly<Record<string, string>>;
  readonly facebook_pages_live_shopping?: Readonly<Record<string, string>>;
  readonly independent_work?: Readonly<Record<string, string>>;
  readonly instagram?: Readonly<Record<string, string>>;
  readonly instagram_shop?: Readonly<Record<string, string>>;
  readonly job_search?: Readonly<Record<string, string>>;
  readonly lead_gen_honeypot?: Readonly<Record<string, string>>;
  readonly marketplace?: Readonly<Record<string, string>>;
  readonly marketplace_home_rentals?: Readonly<Record<string, string>>;
  readonly marketplace_home_sales?: Readonly<Record<string, string>>;
  readonly marketplace_motors?: Readonly<Record<string, string>>;
  readonly marketplace_shops?: Readonly<Record<string, string>>;
  readonly max_review_placements?: Readonly<Record<string, string>>;
  readonly neighborhoods?: Readonly<Record<string, string>>;
  readonly page_admin?: Readonly<Record<string, string>>;
  readonly product?: Readonly<Record<string, string>>;
  readonly product_service?: Readonly<Record<string, string>>;
  readonly profile?: Readonly<Record<string, string>>;
  readonly seller?: Readonly<Record<string, string>>;
  readonly shops?: Readonly<Record<string, string>>;
  readonly traffic_quality?: Readonly<Record<string, string>>;
  readonly unified_commerce_content?: Readonly<Record<string, string>>;
  readonly whatsapp?: Readonly<Record<string, string>>;
}

export interface AdgroupReviewFeedbackFields {
  readonly global?: Readonly<Record<string, string>>;
  readonly placement_specific?: AdgroupPlacementSpecificReviewFeedbackFields;
}

export interface AdImageFields {
  readonly account_id?: string;
  readonly created_time?: string;
  readonly creatives?: ReadonlyArray<string>;
  readonly hash?: string;
  readonly height?: number;
  readonly id?: string;
  readonly is_associated_creatives_in_adgroups?: boolean;
  readonly name?: string;
  readonly original_height?: number;
  readonly original_width?: number;
  readonly owner_business?: BusinessFields;
  readonly permalink_url?: string;
  readonly status?: AdImageStatus;
  readonly updated_time?: string;
  readonly url?: string;
  readonly url_128?: string;
  readonly width?: number;
}

export type AdImageStatus = "ACTIVE" | "DELETED" | "INTERNAL";

export interface AdKeywordsFields {
  readonly brands?: ReadonlyArray<string>;
  readonly product_categories?: ReadonlyArray<string>;
  readonly product_names?: ReadonlyArray<string>;
  readonly search_terms?: ReadonlyArray<string>;
}

export interface AdKeywordStatsFields {
  readonly actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly clicks?: number;
  readonly cost_per_total_action?: number;
  readonly cost_per_unique_click?: number;
  readonly cpc?: number;
  readonly cpm?: number;
  readonly cpp?: number;
  readonly ctr?: number;
  readonly frequency?: number;
  readonly id?: string;
  readonly impressions?: number;
  readonly name?: string;
  readonly reach?: number;
  readonly spend?: number;
  readonly total_actions?: number;
  readonly total_unique_actions?: number;
  readonly unique_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_clicks?: number;
  readonly unique_ctr?: number;
  readonly unique_impressions?: number;
}

export interface AdKpiShiftFields {
  readonly ad_set?: AdSetFields;
  readonly cost_per_result_shift?: number;
  readonly enough_effective_days?: boolean;
  readonly result_indicator?: string;
  readonly result_shift?: number;
  readonly spend_shift?: number;
}

export interface AdLabelFields {
  readonly account?: AdAccountFields;
  readonly created_time?: string;
  readonly id?: string;
  readonly name?: string;
  readonly updated_time?: string;
}

export interface AdLightAdgroupFields {
  readonly adset_id?: string;
  readonly id?: string;
}

export interface AdLightCampaignFields {
  readonly campaign_id?: string;
  readonly id?: string;
}

export interface AdLightCampaignGroupFields {
  readonly id?: string;
}

export interface AdLimitsEnforcementDataFields {
  readonly ad_limit_on_page?: number;
  readonly ad_limit_on_scope?: number;
  readonly ad_volume_on_page?: number;
  readonly ad_volume_on_scope?: number;
  readonly is_admin?: boolean;
  readonly page_name?: string;
}

export interface AdLimitSettingFields {
  readonly limit_allocation_by_page_advertisers?: ReadonlyArray<Readonly<Record<string, number>>>;
}

export interface AdMonetizationPropertyFields {
  readonly owner_business?: BusinessFields;
}

export interface AdNetworkAnalyticsAsyncQueryExportFields {
  readonly export_link?: string;
  readonly query_id?: string;
  readonly status?: string;
}

export interface AdNetworkAnalyticsAsyncQueryResultFields {
  readonly data?: Readonly<Record<string, unknown>>;
  readonly omitted_results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly query_id?: string;
  readonly results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly status?: string;
}

export type AdNetworkAnalyticsSyncQueryResultAggregationPeriod = "DAY" | "TOTAL";

export type AdNetworkAnalyticsSyncQueryResultBreakdowns = "AD_SERVER_CAMPAIGN_ID" | "AD_SPACE" | "AGE" | "APP" | "CLICKED_VIEW_TAG" | "COUNTRY" | "DEAL" | "DEAL_AD" | "DEAL_PAGE" | "DELIVERY_METHOD" | "DISPLAY_FORMAT" | "FAIL_REASON" | "GENDER" | "INSTANT_ARTICLE_ID" | "INSTANT_ARTICLE_PAGE_ID" | "IS_DEAL_BACKFILL" | "PLACEMENT" | "PLACEMENT_NAME" | "PLATFORM" | "PROPERTY" | "SDK_VERSION";

export interface AdNetworkAnalyticsSyncQueryResultFields {
  readonly omitted_results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly query_id?: string;
  readonly results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type AdNetworkAnalyticsSyncQueryResultMetrics = "FB_AD_NETWORK_BIDDING_BID_RATE" | "FB_AD_NETWORK_BIDDING_REQUEST" | "FB_AD_NETWORK_BIDDING_RESPONSE" | "FB_AD_NETWORK_BIDDING_REVENUE" | "FB_AD_NETWORK_BIDDING_WIN_RATE" | "FB_AD_NETWORK_CLICK" | "FB_AD_NETWORK_CPM" | "FB_AD_NETWORK_CTR" | "FB_AD_NETWORK_FILLED_REQUEST" | "FB_AD_NETWORK_FILL_RATE" | "FB_AD_NETWORK_IMP" | "FB_AD_NETWORK_IMPRESSION_RATE" | "FB_AD_NETWORK_REQUEST" | "FB_AD_NETWORK_REVENUE" | "FB_AD_NETWORK_SHOW_RATE" | "FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE" | "FB_AD_NETWORK_VIDEO_MRC" | "FB_AD_NETWORK_VIDEO_MRC_RATE" | "FB_AD_NETWORK_VIDEO_VIEW" | "FB_AD_NETWORK_VIDEO_VIEW_RATE";

export type AdNetworkAnalyticsSyncQueryResultOrderingColumn = "METRIC" | "TIME" | "VALUE";

export type AdNetworkAnalyticsSyncQueryResultOrderingType = "ASCENDING" | "DESCENDING";

export type AdOperator = "ALL" | "ANY";

export interface AdPlacementFields {
  readonly bundle_id?: string;
  readonly display_format?: string;
  readonly external_placement_id?: string;
  readonly google_display_format?: string;
  readonly id?: string;
  readonly name?: string;
  readonly placement_group?: Readonly<Record<string, unknown>>;
  readonly platform?: string;
  readonly status?: string;
}

export interface AdPlacePageSetFields {
  readonly account_id?: string;
  readonly id?: string;
  readonly location_types?: ReadonlyArray<string>;
  readonly name?: string;
  readonly pages_count?: number;
  readonly parent_page?: PageFields;
}

export type AdPlacePageSetLocationTypes = "home" | "recent";

export interface AdPlacePageSetMetadataFields {
  readonly audience?: Readonly<Record<string, unknown>>;
  readonly custom?: Readonly<Record<string, unknown>>;
  readonly extra_data?: string;
  readonly fixed_radius?: Readonly<Record<string, unknown>>;
}

export type AdPlacePageSetTargetedAreaType = "CUSTOM_RADIUS" | "MARKETING_AREA" | "NONE";

export type AdPreviewAdFormat = "AUDIENCE_NETWORK_INSTREAM_VIDEO" | "AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE" | "AUDIENCE_NETWORK_OUTSTREAM_VIDEO" | "AUDIENCE_NETWORK_REWARDED_VIDEO" | "BIZ_DISCO_FEED_MOBILE" | "DESKTOP_FEED_STANDARD" | "FACEBOOK_IFU_REELS_MOBILE" | "FACEBOOK_PROFILE_FEED_DESKTOP" | "FACEBOOK_PROFILE_FEED_MOBILE" | "FACEBOOK_PROFILE_REELS_MOBILE" | "FACEBOOK_REELS_BANNER" | "FACEBOOK_REELS_BANNER_DESKTOP" | "FACEBOOK_REELS_BANNER_FEED_ANDROID" | "FACEBOOK_REELS_BANNER_FEED_ANDROID_LARGE" | "FACEBOOK_REELS_BANNER_FULLSCREEN_IOS" | "FACEBOOK_REELS_BANNER_FULLSCREEN_MOBILE" | "FACEBOOK_REELS_MOBILE" | "FACEBOOK_REELS_POSTLOOP" | "FACEBOOK_REELS_POSTLOOP_FEED" | "FACEBOOK_REELS_SIMILAR_PRODUCTS_MOBILE" | "FACEBOOK_REELS_STICKER" | "FACEBOOK_STORY_MOBILE" | "FACEBOOK_STORY_STICKER_MOBILE" | "INSTAGRAM_EXPLORE_CONTEXTUAL" | "INSTAGRAM_EXPLORE_GRID_HOME" | "INSTAGRAM_EXPLORE_IMMERSIVE" | "INSTAGRAM_FEED_WEB" | "INSTAGRAM_FEED_WEB_M_SITE" | "INSTAGRAM_LEAD_GEN_MULTI_SUBMIT_ADS" | "INSTAGRAM_PROFILE_FEED" | "INSTAGRAM_PROFILE_REELS" | "INSTAGRAM_REELS" | "INSTAGRAM_REELS_OVERLAY" | "INSTAGRAM_REELS_WEB" | "INSTAGRAM_REELS_WEB_M_SITE" | "INSTAGRAM_SEARCH_CHAIN" | "INSTAGRAM_SEARCH_GRID" | "INSTAGRAM_STANDARD" | "INSTAGRAM_STORY" | "INSTAGRAM_STORY_EFFECT_TRAY" | "INSTAGRAM_STORY_WEB" | "INSTAGRAM_STORY_WEB_M_SITE" | "INSTANT_ARTICLE_RECIRCULATION_AD" | "INSTANT_ARTICLE_STANDARD" | "INSTREAM_BANNER_DESKTOP" | "INSTREAM_BANNER_FEED_IOS" | "INSTREAM_BANNER_FULLSCREEN_IOS" | "INSTREAM_BANNER_FULLSCREEN_MOBILE" | "INSTREAM_BANNER_IMMERSIVE_MOBILE" | "INSTREAM_BANNER_MOBILE" | "INSTREAM_VIDEO_DESKTOP" | "INSTREAM_VIDEO_FULLSCREEN_IOS" | "INSTREAM_VIDEO_FULLSCREEN_MOBILE" | "INSTREAM_VIDEO_IMAGE" | "INSTREAM_VIDEO_IMMERSIVE_MOBILE" | "INSTREAM_VIDEO_MOBILE" | "JOB_BROWSER_DESKTOP" | "JOB_BROWSER_MOBILE" | "MARKETPLACE_MOBILE" | "MESSENGER_MOBILE_INBOX_MEDIA" | "MESSENGER_MOBILE_STORY_MEDIA" | "MOBILE_BANNER" | "MOBILE_FEED_BASIC" | "MOBILE_FEED_STANDARD" | "MOBILE_FULLWIDTH" | "MOBILE_INTERSTITIAL" | "MOBILE_MEDIUM_RECTANGLE" | "MOBILE_NATIVE" | "RIGHT_COLUMN_STANDARD" | "SUGGESTED_VIDEO_DESKTOP" | "SUGGESTED_VIDEO_FULLSCREEN_MOBILE" | "SUGGESTED_VIDEO_IMMERSIVE_MOBILE" | "SUGGESTED_VIDEO_MOBILE" | "WATCH_FEED_HOME" | "WATCH_FEED_MOBILE" | "WHATSAPP_STATUS_MEDIA";

export type AdPreviewCreativeFeature = "ig_video_native_subtitle" | "image_animation" | "product_browsing" | "product_metadata_automation" | "profile_card" | "standard_enhancements_catalog" | "text_overlay_translation";

export interface AdPreviewFields {
  readonly body?: string;
  readonly transformation_spec?: Readonly<Record<string, unknown>>;
}

export type AdPreviewRenderType = "FALLBACK";

export type AdPromotedObjectCustomEventType = "ACHIEVEMENT_UNLOCKED" | "ADD_PAYMENT_INFO" | "ADD_TO_CART" | "ADD_TO_WISHLIST" | "AD_IMPRESSION" | "COMPLETE_REGISTRATION" | "CONTACT" | "CONTENT_VIEW" | "CUSTOMIZE_PRODUCT" | "D2_RETENTION" | "D7_RETENTION" | "DONATE" | "FIND_LOCATION" | "INITIATED_CHECKOUT" | "LEAD" | "LEVEL_ACHIEVED" | "LISTING_INTERACTION" | "MESSAGING_CONVERSATION_STARTED_7D" | "OTHER" | "PURCHASE" | "RATE" | "SCHEDULE" | "SEARCH" | "SERVICE_BOOKING_REQUEST" | "SPENT_CREDITS" | "START_TRIAL" | "SUBMIT_APPLICATION" | "SUBSCRIBE" | "TUTORIAL_COMPLETION";

export interface AdPromotedObjectFields {
  readonly application_id?: string;
  readonly boosted_product_set_id?: string;
  readonly conversion_goal_id?: string;
  readonly custom_attribution_source_ids?: ReadonlyArray<string>;
  readonly custom_conversion_id?: string;
  readonly custom_event_str?: string;
  readonly custom_event_type?: AdPromotedObjectCustomEventType;
  readonly dataset_split_id?: string;
  readonly dataset_split_ids?: ReadonlyArray<string>;
  readonly event_id?: string;
  readonly full_funnel_objective?: AdPromotedObjectFullFunnelObjective;
  readonly fundraiser_campaign_id?: string;
  readonly instagram_actor_id?: string;
  readonly job_listing_id?: string;
  readonly lead_ads_custom_event_str?: string;
  readonly lead_ads_custom_event_type?: AdPromotedObjectLeadAdsCustomEventType;
  readonly lead_ads_follow_up_event?: string;
  readonly lead_ads_form_event_source_type?: string;
  readonly lead_ads_offsite_conversion_type?: string;
  readonly lead_ads_quality_volume_setting?: string;
  readonly lead_ads_selected_pixel_id?: string;
  readonly live_video_destination?: string;
  readonly mcme_conversion_id?: string;
  readonly multi_event_product?: number;
  readonly object_store_url?: string;
  readonly object_store_urls?: ReadonlyArray<string>;
  readonly offer_id?: string;
  readonly offline_conversion_data_set_id?: string;
  readonly offsite_conversion_event_id?: string;
  readonly omnichannel_object?: Readonly<Record<string, unknown>>;
  readonly page_id?: string;
  readonly passback_application_id?: string;
  readonly passback_pixel_id?: string;
  readonly pixel_aggregation_rule?: string;
  readonly pixel_id?: string;
  readonly pixel_rule?: string;
  readonly place_page_set?: AdPlacePageSetFields;
  readonly place_page_set_id?: string;
  readonly product_catalog_id?: string;
  readonly product_item_id?: string;
  readonly product_set?: ProductSetFields;
  readonly product_set_id?: string;
  readonly product_set_optimization?: string;
  readonly retention_days?: string;
  readonly smart_pse_enabled?: boolean;
  readonly smart_pse_setting?: string;
  readonly value_semantic_type?: string;
  readonly variation?: string;
  readonly whats_app_business_phone_number_id?: string;
  readonly whatsapp_phone_number?: string;
}

export type AdPromotedObjectFullFunnelObjective = "APP_INSTALLS" | "BRAND_AWARENESS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS" | "WEBSITE_CONVERSIONS";

export type AdPromotedObjectLeadAdsCustomEventType = "ACHIEVEMENT_UNLOCKED" | "ADD_PAYMENT_INFO" | "ADD_TO_CART" | "ADD_TO_WISHLIST" | "AD_IMPRESSION" | "COMPLETE_REGISTRATION" | "CONTACT" | "CONTENT_VIEW" | "CUSTOMIZE_PRODUCT" | "D2_RETENTION" | "D7_RETENTION" | "DONATE" | "FIND_LOCATION" | "INITIATED_CHECKOUT" | "LEAD" | "LEVEL_ACHIEVED" | "LISTING_INTERACTION" | "MESSAGING_CONVERSATION_STARTED_7D" | "OTHER" | "PURCHASE" | "RATE" | "SCHEDULE" | "SEARCH" | "SERVICE_BOOKING_REQUEST" | "SPENT_CREDITS" | "START_TRIAL" | "SUBMIT_APPLICATION" | "SUBSCRIBE" | "TUTORIAL_COMPLETION";

export interface AdProposalFields {
  readonly ad_proposal_type_name?: string;
  readonly adaccount?: AdAccountFields;
  readonly creation_time?: string;
  readonly creator?: UserFields;
  readonly delivery_interface?: string;
  readonly expiration_time?: string;
  readonly has_conflict?: boolean;
  readonly id?: string;
  readonly kpi_metric?: string;
  readonly message?: string;
  readonly name?: string;
  readonly proposal_dts_template?: string;
  readonly proposal_template_name?: string;
  readonly recommendation?: string;
  readonly review_time?: string;
  readonly reviewed_by?: UserFields;
  readonly send_time?: string;
  readonly status?: string;
  readonly use_testing?: boolean;
}

export type AdRecommendationConfidence = "HIGH" | "LOW" | "MEDIUM";

export interface AdRecommendationDataFields {
  readonly link?: string;
}

export interface AdRecommendationFields {
  readonly blame_field?: string;
  readonly code?: number;
  readonly confidence?: AdRecommendationConfidence;
  readonly importance?: AdRecommendationImportance;
  readonly message?: string;
  readonly recommendation_data?: AdRecommendationDataFields;
  readonly title?: string;
  readonly value?: string;
}

export type AdRecommendationImportance = "HIGH" | "LOW" | "MEDIUM";

export interface AdReportRunFields {
  readonly account_id?: string;
  readonly async_percent_completion?: number;
  readonly async_report_url?: string;
  readonly async_status?: string;
  readonly date_start?: string;
  readonly date_stop?: string;
  readonly emails?: ReadonlyArray<string>;
  readonly error_code?: number;
  readonly error_message?: string;
  readonly error_subcode?: number;
  readonly error_user_msg?: string;
  readonly error_user_title?: string;
  readonly friendly_name?: string;
  readonly id?: string;
  readonly is_async_export?: number;
  readonly is_bookmarked?: boolean;
  readonly is_running?: boolean;
  readonly schedule_id?: string;
  readonly time_completed?: number;
  readonly time_ref?: number;
}

export type AdRuleEvaluationSpecEvaluationType = "SCHEDULE" | "TRIGGER";

export interface AdRuleEvaluationSpecFields {
  readonly evaluation_type?: AdRuleEvaluationSpecEvaluationType;
  readonly filters?: ReadonlyArray<AdRuleFiltersFields>;
  readonly trigger?: AdRuleTriggerFields;
}

export interface AdRuleExecutionOptionsFields {
  readonly field?: string;
  readonly operator?: AdRuleExecutionOptionsOperator;
  readonly value?: Readonly<Record<string, unknown>>;
}

export type AdRuleExecutionOptionsOperator = "EQUAL" | "IN";

export type AdRuleExecutionSpecExecutionType = "ADD_INTEREST_RELAXATION" | "ADD_QUESTIONNAIRE_INTERESTS" | "AD_RECOMMENDATION_APPLY" | "AUDIENCE_CONSOLIDATION" | "AUDIENCE_CONSOLIDATION_ASK_FIRST" | "CHANGE_BID" | "CHANGE_BUDGET" | "CHANGE_CAMPAIGN_BUDGET" | "DCO" | "INCREASE_RADIUS" | "NOTIFICATION" | "PAUSE" | "PING_ENDPOINT" | "REBALANCE_BUDGET" | "ROTATE" | "UNPAUSE" | "UPDATE_CREATIVE" | "UPDATE_LAX_BUDGET" | "UPDATE_LAX_DURATION";

export interface AdRuleExecutionSpecFields {
  readonly execution_options?: ReadonlyArray<AdRuleExecutionOptionsFields>;
  readonly execution_type?: AdRuleExecutionSpecExecutionType;
  readonly is_once_off?: boolean;
}

export interface AdRuleFields {
  readonly account_id?: string;
  readonly created_by?: UserFields;
  readonly created_time?: string;
  readonly disable_error_code?: number;
  readonly evaluation_spec?: AdRuleEvaluationSpecFields;
  readonly execution_spec?: AdRuleExecutionSpecFields;
  readonly id?: string;
  readonly name?: string;
  readonly schedule_spec?: AdRuleScheduleSpecFields;
  readonly status?: string;
  readonly updated_time?: string;
}

export interface AdRuleFiltersFields {
  readonly field?: string;
  readonly operator?: AdRuleFiltersOperator;
  readonly value?: Readonly<Record<string, unknown>>;
}

export type AdRuleFiltersOperator = "ALL" | "ANY" | "CONTAIN" | "EQUAL" | "GREATER_THAN" | "IN" | "IN_RANGE" | "LESS_THAN" | "NONE" | "NOT_CONTAIN" | "NOT_EQUAL" | "NOT_IN" | "NOT_IN_RANGE";

export type AdRuleHistoryAction = "BUDGET_NOT_REDISTRIBUTED" | "CHANGED_BID" | "CHANGED_BUDGET" | "CONSOLIDATE_ASC_FRAGMENTATION" | "CONSOLIDATE_FRAGMENTATION" | "CONVERT_ASC_CP_SINGLE_INSTANCE" | "EMAIL" | "ENABLE_ADVANTAGE_CAMPAIGN_BUDGET" | "ENABLE_ADVANTAGE_PLUS_AUDIENCE" | "ENABLE_ADVANTAGE_PLUS_CREATIVE" | "ENABLE_ADVANTAGE_PLUS_PLACEMENTS" | "ENABLE_AUTOFLOW" | "ENABLE_GEN_UNCROP" | "ENABLE_LANDING_PAGE_VIEWS" | "ENABLE_MUSIC" | "ENABLE_PIXELLESS_LPV_OPTIMIZATION_GOAL" | "ENABLE_PRODUCT_SET_BOOSTING" | "ENABLE_REELS_PLACEMENTS" | "ENABLE_SEMANTIC_BASED_AUDIENCE_EXPANSION" | "ENABLE_SHOPS_ADS" | "ENABLE_SHOPS_ADS_SAOFF" | "ENABLE_WTWA_UPSELL_IN_DUPLICATION" | "ENDPOINT_PINGED" | "ERROR" | "FACEBOOK_NOTIFICATION_SENT" | "MESSAGE_SENT" | "NOT_CHANGED" | "PAUSED" | "UNPAUSED";

export interface AdRuleHistoryFields {
  readonly evaluation_spec?: AdRuleEvaluationSpecFields;
  readonly exception_code?: number;
  readonly exception_message?: string;
  readonly execution_spec?: AdRuleExecutionSpecFields;
  readonly is_manual?: boolean;
  readonly results?: ReadonlyArray<AdRuleHistoryResultFields>;
  readonly schedule_spec?: AdRuleScheduleSpecFields;
  readonly timestamp?: string;
}

export interface AdRuleHistoryResultActionFields {
  readonly action?: string;
  readonly field?: string;
  readonly new_value?: string;
  readonly old_value?: string;
}

export interface AdRuleHistoryResultFields {
  readonly actions?: ReadonlyArray<AdRuleHistoryResultActionFields>;
  readonly object_id?: string;
  readonly object_type?: AdRuleHistoryResultObjectType;
}

export type AdRuleHistoryResultObjectType = "AD" | "ADSET" | "CAMPAIGN";

export interface AdRuleScheduleFields {
  readonly days?: ReadonlyArray<number>;
  readonly end_minute?: number;
  readonly start_minute?: number;
}

export interface AdRuleScheduleSpecFields {
  readonly schedule?: ReadonlyArray<AdRuleScheduleFields>;
  readonly schedule_type?: string;
}

export type AdRuleStatus = "DELETED" | "DISABLED" | "ENABLED" | "HAS_ISSUES";

export interface AdRuleTriggerFields {
  readonly field?: string;
  readonly operator?: AdRuleTriggerOperator;
  readonly type?: AdRuleTriggerType;
  readonly value?: Readonly<Record<string, unknown>>;
}

export type AdRuleTriggerOperator = "ALL" | "ANY" | "CONTAIN" | "EQUAL" | "GREATER_THAN" | "IN" | "IN_RANGE" | "LESS_THAN" | "NONE" | "NOT_CONTAIN" | "NOT_EQUAL" | "NOT_IN" | "NOT_IN_RANGE";

export type AdRuleTriggerType = "DELIVERY_INSIGHTS_CHANGE" | "METADATA_CREATION" | "METADATA_UPDATE" | "STATS_CHANGE" | "STATS_MILESTONE";

export type AdRuleUiCreationSource = "AM_ACCOUNT_OVERVIEW_RECOMMENDATIONS" | "AM_ACTIVITY_HISTORY_TABLE" | "AM_AD_OBJECT_NAME_CARD" | "AM_AMFE_L3_RECOMMENDATION" | "AM_AUTO2_INTERNAL" | "AM_AUTOFLOW_GUIDANCE_CARD" | "AM_AUTO_APPLY_WIDGET" | "AM_EDITOR_CARD" | "AM_INFO_CARD" | "AM_NAME_CELL_DROPDOWN" | "AM_OPTIMIZATION_TIP_GUIDANCE_CARD" | "AM_PERFORMANCE_SUMMARY" | "AM_RULE_LANDING_PAGE_BANNER" | "AM_SYD_RESOLUTION_FLOW" | "AM_SYD_RESOLUTION_FLOW_MODAL" | "AM_TABLE_DELIVERY_COLUMN_POPOVER" | "AM_TABLE_MORE_RULES_DROPDOWN" | "AM_TABLE_TOGGLE_POPOVER" | "AM_TOOLBAR_CREATE_RULE_DROPDOWN" | "PE_CAMPAIGN_STRUCTURE_MENU" | "PE_EDITOR_CARD" | "PE_INFO_CARD" | "PE_TOOLBAR_CREATE_RULE_DROPDOWN" | "RULES_MANAGEMENT_PAGE_ACTION_DROPDOWN" | "RULES_MANAGEMENT_PAGE_RULE_GROUP" | "RULES_MANAGEMENT_PAGE_RULE_NAME" | "RULES_MANAGEMENT_PAGE_TOP_NAV" | "RULES_VIEW_ACTIVE_RULES_DIALOG" | "RULE_CREATION_SUCCESS_DIALOG" | "RULE_SYD_REDIRECT" | "RULE_TEMPLATES_DIALOG";

export interface AdsActionStatsFields {
  readonly "1d_click"?: string;
  readonly "1d_click_all_conversions"?: string;
  readonly "1d_click_first_conversion"?: string;
  readonly "1d_ev"?: string;
  readonly "1d_ev_all_conversions"?: string;
  readonly "1d_ev_first_conversion"?: string;
  readonly "1d_passback"?: string;
  readonly "1d_sequenced"?: string;
  readonly "1d_view"?: string;
  readonly "1d_view_all_conversions"?: string;
  readonly "1d_view_first_conversion"?: string;
  readonly "28d_click"?: string;
  readonly "28d_click_all_conversions"?: string;
  readonly "28d_click_first_conversion"?: string;
  readonly "28d_passback"?: string;
  readonly "28d_sequenced"?: string;
  readonly "28d_view"?: string;
  readonly "28d_view_all_conversions"?: string;
  readonly "28d_view_first_conversion"?: string;
  readonly "7d_click"?: string;
  readonly "7d_click_all_conversions"?: string;
  readonly "7d_click_first_conversion"?: string;
  readonly "7d_passback"?: string;
  readonly "7d_sequenced"?: string;
  readonly "7d_view"?: string;
  readonly "7d_view_all_conversions"?: string;
  readonly "7d_view_first_conversion"?: string;
  readonly action_brand?: string;
  readonly action_canvas_component_id?: string;
  readonly action_canvas_component_name?: string;
  readonly action_carousel_card_id?: string;
  readonly action_carousel_card_name?: string;
  readonly action_category?: string;
  readonly action_converted_product_id?: string;
  readonly action_destination?: string;
  readonly action_device?: string;
  readonly action_event_channel?: string;
  readonly action_link_click_destination?: string;
  readonly action_location_code?: string;
  readonly action_reaction?: string;
  readonly action_target_id?: string;
  readonly action_type?: string;
  readonly action_video_asset_id?: string;
  readonly action_video_sound?: string;
  readonly action_video_type?: string;
  readonly custom?: string;
  readonly dda?: string;
  readonly incrementality?: string;
  readonly incrementality_all_conversions?: string;
  readonly incrementality_first_conversion?: string;
  readonly inline?: string;
  readonly interactive_component_sticker_id?: string;
  readonly interactive_component_sticker_response?: string;
  readonly promoted_product_set_result?: string;
  readonly skan_click?: string;
  readonly skan_click_second_postback?: string;
  readonly skan_click_third_postback?: string;
  readonly skan_view?: string;
  readonly skan_view_second_postback?: string;
  readonly skan_view_third_postback?: string;
  readonly value?: string;
}

export interface AdsAnomalyDetectionFields {
  readonly anomaly_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly day?: number;
}

export interface AdSavedKeywordsFields {
  readonly account?: AdAccountFields;
  readonly id?: string;
  readonly keywords?: AdKeywordsFields;
  readonly name?: string;
  readonly run_status?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface AdSavedLocationFields {
  readonly cities?: ReadonlyArray<TargetingGeoLocationCityFields>;
  readonly countries?: ReadonlyArray<string>;
  readonly country_groups?: ReadonlyArray<string>;
  readonly custom_locations?: ReadonlyArray<TargetingGeoLocationCustomLocationFields>;
  readonly geo_markets?: ReadonlyArray<TargetingGeoLocationMarketFields>;
  readonly id?: string;
  readonly location_sentences?: ReadonlyArray<string>;
  readonly name?: string;
  readonly regions?: ReadonlyArray<TargetingGeoLocationRegionFields>;
  readonly zips?: ReadonlyArray<TargetingGeoLocationZipFields>;
}

export interface AdSavedReportFields {
  readonly app_owner?: ApplicationFields;
  readonly breakdowns?: ReadonlyArray<string>;
  readonly builtin_column_set?: string;
  readonly creation_source?: string;
  readonly date_interval?: Readonly<Record<string, unknown>>;
  readonly date_preset?: string;
  readonly format_version?: number;
  readonly id?: string;
  readonly insights_section?: Readonly<Record<string, unknown>>;
  readonly is_shared_unread?: boolean;
  readonly level?: string;
  readonly name?: string;
  readonly normalized_filter?: ReadonlyArray<unknown>;
  readonly sort?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly user_attribution_windows?: ReadonlyArray<string>;
  readonly user_columns?: ReadonlyArray<string>;
  readonly user_filter?: ReadonlyArray<unknown>;
  readonly user_owner?: UserFields;
}

export interface AdsConversionGoalFields {
  readonly ad_account_id?: string;
  readonly conversion_event_value_source?: string;
  readonly description?: string;
  readonly goal_creation_method?: string;
  readonly id?: string;
  readonly name?: string;
  readonly performance_goal?: string;
  readonly update_status?: string;
}

export interface AdsCreationSavedStateFields {
  readonly ad_account?: AdAccountFields;
  readonly id?: string;
  readonly serialized_store_data?: string;
  readonly time_updated?: string;
  readonly user?: Readonly<Record<string, unknown>>;
}

export interface AdsCustomPivotsPreviewFields {
  readonly account_id?: string;
  readonly account_name?: string;
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly adset_id?: string;
  readonly adset_name?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly custom_breakdown?: ReadonlyArray<string>;
}

export interface AdsDatasetFields {
  readonly can_proxy?: boolean;
  readonly collection_rate?: number;
  readonly config?: string;
  readonly creation_time?: string;
  readonly creator?: UserFields;
  readonly dataset_id?: string;
  readonly description?: string;
  readonly duplicate_entries?: number;
  readonly enable_auto_assign_to_accounts?: boolean;
  readonly enable_automatic_events?: boolean;
  readonly enable_automatic_matching?: boolean;
  readonly enable_real_time_event_log?: boolean;
  readonly event_stats?: string;
  readonly event_time_max?: number;
  readonly event_time_min?: number;
  readonly first_party_cookie_status?: string;
  readonly has_bapi_domains?: boolean;
  readonly has_catalog_microdata_activity?: boolean;
  readonly has_ofa_redacted_keys?: boolean;
  readonly has_sent_pii?: boolean;
  readonly id?: string;
  readonly is_consolidated_container?: boolean;
  readonly is_created_by_business?: boolean;
  readonly is_crm?: boolean;
  readonly is_eligible_for_sharing_to_ad_account?: boolean;
  readonly is_eligible_for_sharing_to_business?: boolean;
  readonly is_eligible_for_value_optimization?: boolean;
  readonly is_mta_use?: boolean;
  readonly is_restricted_use?: boolean;
  readonly is_unavailable?: boolean;
  readonly last_fired_time?: string;
  readonly last_upload_app?: string;
  readonly last_upload_app_changed_time?: number;
  readonly last_upload_time?: number;
  readonly late_upload_reminder_eligibility?: boolean;
  readonly match_rate_approx?: number;
  readonly matched_entries?: number;
  readonly name?: string;
  readonly no_ads_tracked_for_weekly_uploaded_events_reminder_eligibility?: boolean;
  readonly num_active_ad_set_tracked?: number;
  readonly num_recent_offline_conversions_uploaded?: number;
  readonly num_uploads?: number;
  readonly owner_ad_account?: AdAccountFields;
  readonly owner_business?: BusinessFields;
  readonly percentage_of_late_uploads_in_external_suboptimal_window?: number;
  readonly permissions?: OfflineConversionDataSetPermissionsFields;
  readonly server_last_fired_time?: string;
  readonly show_automatic_events?: boolean;
  readonly upload_rate?: number;
  readonly upload_reminder_eligibility?: boolean;
  readonly usage?: OfflineConversionDataSetUsageFields;
  readonly valid_entries?: number;
}

export type AdsDatasetSortBy = "LAST_FIRED_TIME" | "NAME";

export interface AdsEligibilityFields {
  readonly live_shopping?: Readonly<Record<string, unknown>>;
}

export type AdSetAttributionCountType = "ALL_CONVERSIONS" | "FIRST_CONVERSION";

export type AdSetAutomaticManualState = "AUTOMATIC" | "MANUAL" | "UNSET";

export type AdSetBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "LOWEST_COST_WITH_MIN_ROAS";

export type AdSetBillingEvent = "APP_INSTALLS" | "CLICKS" | "IMPRESSIONS" | "LINK_CLICKS" | "LISTING_INTERACTION" | "NONE" | "OFFER_CLAIMS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PURCHASE" | "THRUPLAY";

export type AdSetBudgetSource = "NONE" | "RMN";

export type AdSetConfiguredStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export type AdSetCostBiddingMode = "BALANCED" | "COST_FOCUSED" | "VOLUME_FOCUSED";

export type AdSetCreativeSequenceRepetitionPattern = "FULL_SEQUENCE" | "LAST_AD";

export type AdSetDatePreset = "DATA_MAXIMUM" | "LAST_14D" | "LAST_28D" | "LAST_30D" | "LAST_3D" | "LAST_7D" | "LAST_90D" | "LAST_MONTH" | "LAST_QUARTER" | "LAST_WEEK_MON_SUN" | "LAST_WEEK_SUN_SAT" | "LAST_YEAR" | "MAXIMUM" | "THIS_MONTH" | "THIS_QUARTER" | "THIS_WEEK_MON_TODAY" | "THIS_WEEK_SUN_TODAY" | "THIS_YEAR" | "TODAY" | "YESTERDAY";

export type AdSetDestinationType = "APP" | "APPLINKS_AUTOMATIC" | "FACEBOOK" | "FACEBOOK_LIVE" | "FACEBOOK_PAGE" | "IMAGINE" | "INSTAGRAM_DIRECT" | "INSTAGRAM_LIVE" | "INSTAGRAM_PROFILE" | "INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE" | "MESSAGING_INSTAGRAM_DIRECT_MESSENGER" | "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP" | "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP" | "MESSAGING_MESSENGER_WHATSAPP" | "MESSENGER" | "ON_AD" | "ON_EVENT" | "ON_PAGE" | "ON_POST" | "ON_VIDEO" | "SHOP_AUTOMATIC" | "WEBSITE" | "WHATSAPP";

export type AdSetEffectiveStatus = "ACTIVE" | "ARCHIVED" | "CAMPAIGN_PAUSED" | "DELETED" | "IN_PROCESS" | "PAUSED" | "WITH_ISSUES";

export type AdSetExecutionOptions = "include_recommendations" | "validate_only";

export interface AdSetFields {
  readonly account_id?: string;
  readonly ad_set_goal?: AdCampaignGoalFields;
  readonly adlabels?: ReadonlyArray<AdLabelFields>;
  readonly adset_schedule?: ReadonlyArray<DayPartFields>;
  readonly anchor_event_attribution_window_days?: number;
  readonly asset_feed_id?: string;
  readonly attribution_count_type?: string;
  readonly attribution_spec?: ReadonlyArray<AttributionSpecFields>;
  readonly automatic_manual_state?: string;
  readonly bid_adjustments?: AdBidAdjustmentsFields;
  readonly bid_amount?: number;
  readonly bid_constraints?: AdCampaignBidConstraintFields;
  readonly bid_info?: Readonly<Record<string, number>>;
  readonly bid_strategy?: AdSetBidStrategy;
  readonly billing_event?: AdSetBillingEvent;
  readonly brand_safety_config?: BrandSafetyCampaignConfigFields;
  readonly budget_remaining?: string;
  readonly campaign?: CampaignFields;
  readonly campaign_active_time?: string;
  readonly campaign_attribution?: string;
  readonly campaign_id?: string;
  readonly configured_status?: AdSetConfiguredStatus;
  readonly cost_bidding_mode?: string;
  readonly created_time?: string;
  readonly creative_diversity_label?: ReadonlyArray<string>;
  readonly creative_diversity_score?: ReadonlyArray<string>;
  readonly creative_sequence?: ReadonlyArray<string>;
  readonly creative_sequence_repetition_pattern?: string;
  readonly daily_budget?: string;
  readonly daily_min_spend_target?: string;
  readonly daily_spend_cap?: string;
  readonly destination_type?: string;
  readonly dsa_beneficiary?: string;
  readonly dsa_payor?: string;
  readonly effective_status?: AdSetEffectiveStatus;
  readonly end_time?: string;
  readonly existing_customer_budget_percentage?: number;
  readonly frequency_control_specs?: ReadonlyArray<AdCampaignFrequencyControlSpecsFields>;
  readonly full_funnel_exploration_mode?: string;
  readonly id?: string;
  readonly instagram_user_id?: string;
  readonly is_ba_skip_delayed_eligible?: boolean;
  readonly is_budget_schedule_enabled?: boolean;
  readonly is_dc_follow_optimized?: boolean;
  readonly is_dynamic_creative?: boolean;
  readonly is_incremental_attribution_enabled?: boolean;
  readonly is_organic_ad_joint_optimized?: boolean;
  readonly is_sequenced_conversion_creation?: boolean;
  readonly issues_info?: ReadonlyArray<AdCampaignIssuesInfoFields>;
  readonly learning_stage_info?: AdCampaignLearningStageInfoFields;
  readonly lifetime_budget?: string;
  readonly lifetime_imps?: number;
  readonly lifetime_min_spend_target?: string;
  readonly lifetime_spend_cap?: string;
  readonly live_video_ad_campaign_config?: LiveVideoAdCampaignConfigFields;
  readonly low_creative_reach?: ReadonlyArray<string>;
  readonly max_budget_spend_percentage?: string;
  readonly meta_moment_maker_spec?: MetaMomentMakerConfigFields;
  readonly min_budget_spend_percentage?: string;
  readonly multi_event_conversion_attribution_window_seconds?: number;
  readonly multi_optimization_goal_weight?: string;
  readonly name?: string;
  readonly optimization_goal?: AdSetOptimizationGoal;
  readonly optimization_sub_event?: string;
  readonly pacing_type?: ReadonlyArray<string>;
  readonly placement_soft_opt_out?: PlacementSoftOptOutFields;
  readonly promoted_object?: AdPromotedObjectFields;
  readonly recommendations?: ReadonlyArray<AdRecommendationFields>;
  readonly recurring_budget_semantics?: boolean;
  readonly regional_regulated_categories?: ReadonlyArray<string>;
  readonly regional_regulation_identities?: RegionalRegulationIdentitiesFields;
  readonly relative_value?: string;
  readonly review_feedback?: string;
  readonly rf_prediction_id?: string;
  readonly source_adset?: AdSetFields;
  readonly source_adset_id?: string;
  readonly special_ad_categories?: ReadonlyArray<string>;
  readonly start_time?: string;
  readonly status?: AdSetStatus;
  readonly targeting?: TargetingFields;
  readonly targeting_optimization_types?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly time_based_ad_rotation_id_blocks?: ReadonlyArray<ReadonlyArray<number>>;
  readonly time_based_ad_rotation_intervals?: ReadonlyArray<number>;
  readonly trending_topics_spec?: TrendingTopicsSpecFields;
  readonly updated_time?: string;
  readonly use_new_app_click?: boolean;
  readonly value_rule_set_id?: string;
  readonly value_rules_applied?: boolean;
}

export type AdSetFullFunnelExplorationMode = "EXTENDED_EXPLORATION" | "LIMITED_EXPLORATION" | "NONE_EXPLORATION";

export type AdSetMultiOptimizationGoalWeight = "BALANCED" | "PREFER_EVENT" | "PREFER_INSTALL" | "UNDEFINED";

export type AdSetOperator = "ALL" | "ANY";

export type AdSetOptimizationGoal = "ADVERTISER_SILOED_VALUE" | "AD_RECALL_LIFT" | "APP_INSTALLS" | "APP_INSTALLS_AND_OFFSITE_CONVERSIONS" | "AUTOMATIC_OBJECTIVE" | "CONVERSATIONS" | "DERIVED_EVENTS" | "ENGAGED_PAGE_VIEWS" | "ENGAGED_USERS" | "EVENT_RESPONSES" | "IMPRESSIONS" | "IN_APP_VALUE" | "LANDING_PAGE_VIEWS" | "LEAD_GENERATION" | "LINK_CLICKS" | "MEANINGFUL_CALL_ATTEMPT" | "MESSAGING_APPOINTMENT_CONVERSION" | "MESSAGING_DEEP_CONVERSATION_AND_FOLLOW" | "MESSAGING_PURCHASE_CONVERSION" | "NONE" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PROFILE_AND_PAGE_ENGAGEMENT" | "PROFILE_VISIT" | "QUALITY_CALL" | "QUALITY_LEAD" | "REACH" | "REMINDERS_SET" | "SUBSCRIBERS" | "THRUPLAY" | "VALUE" | "VISIT_INSTAGRAM_PROFILE";

export type AdSetOptimizationSubEvent = "NONE" | "POST_INTERACTION" | "TRAVEL_INTENT" | "TRAVEL_INTENT_BUCKET_01" | "TRAVEL_INTENT_BUCKET_02" | "TRAVEL_INTENT_BUCKET_03" | "TRAVEL_INTENT_BUCKET_04" | "TRAVEL_INTENT_BUCKET_05" | "TRAVEL_INTENT_NO_DESTINATION_INTENT" | "TRIP_CONSIDERATION" | "VIDEO_SOUND_ON";

export type AdSetRegionalRegulatedCategories = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22";

export type AdSetStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export type AdSetStatusOption = "ACTIVE" | "INHERITED_FROM_SOURCE" | "PAUSED";

export type AdSetTuneForCategory = "CREDIT" | "EMPLOYMENT" | "FINANCIAL_PRODUCTS_SERVICES" | "HOUSING" | "ISSUES_ELECTIONS_POLITICS" | "NONE" | "ONLINE_GAMBLING_AND_GAMING";

export interface AdsGuidanceQEExposureFields {
  readonly account_exposed?: boolean;
}

export interface AdsHistogramStatsFields {
  readonly "1d_click"?: ReadonlyArray<number>;
  readonly "1d_click_all_conversions"?: ReadonlyArray<number>;
  readonly "1d_click_first_conversion"?: ReadonlyArray<number>;
  readonly "1d_ev"?: ReadonlyArray<number>;
  readonly "1d_ev_all_conversions"?: ReadonlyArray<number>;
  readonly "1d_ev_first_conversion"?: ReadonlyArray<number>;
  readonly "1d_passback"?: ReadonlyArray<number>;
  readonly "1d_sequenced"?: ReadonlyArray<number>;
  readonly "1d_view"?: ReadonlyArray<number>;
  readonly "1d_view_all_conversions"?: ReadonlyArray<number>;
  readonly "1d_view_first_conversion"?: ReadonlyArray<number>;
  readonly "28d_click"?: ReadonlyArray<number>;
  readonly "28d_click_all_conversions"?: ReadonlyArray<number>;
  readonly "28d_click_first_conversion"?: ReadonlyArray<number>;
  readonly "28d_passback"?: ReadonlyArray<number>;
  readonly "28d_sequenced"?: ReadonlyArray<number>;
  readonly "28d_view"?: ReadonlyArray<number>;
  readonly "28d_view_all_conversions"?: ReadonlyArray<number>;
  readonly "28d_view_first_conversion"?: ReadonlyArray<number>;
  readonly "7d_click"?: ReadonlyArray<number>;
  readonly "7d_click_all_conversions"?: ReadonlyArray<number>;
  readonly "7d_click_first_conversion"?: ReadonlyArray<number>;
  readonly "7d_passback"?: ReadonlyArray<number>;
  readonly "7d_sequenced"?: ReadonlyArray<number>;
  readonly "7d_view"?: ReadonlyArray<number>;
  readonly "7d_view_all_conversions"?: ReadonlyArray<number>;
  readonly "7d_view_first_conversion"?: ReadonlyArray<number>;
  readonly action_brand?: string;
  readonly action_canvas_component_id?: string;
  readonly action_canvas_component_name?: string;
  readonly action_carousel_card_id?: string;
  readonly action_carousel_card_name?: string;
  readonly action_category?: string;
  readonly action_converted_product_id?: string;
  readonly action_destination?: string;
  readonly action_device?: string;
  readonly action_event_channel?: string;
  readonly action_link_click_destination?: string;
  readonly action_location_code?: string;
  readonly action_reaction?: string;
  readonly action_target_id?: string;
  readonly action_type?: string;
  readonly action_video_asset_id?: string;
  readonly action_video_sound?: string;
  readonly action_video_type?: string;
  readonly custom?: ReadonlyArray<number>;
  readonly dda?: ReadonlyArray<number>;
  readonly incrementality?: ReadonlyArray<number>;
  readonly incrementality_all_conversions?: ReadonlyArray<number>;
  readonly incrementality_first_conversion?: ReadonlyArray<number>;
  readonly inline?: ReadonlyArray<number>;
  readonly interactive_component_sticker_id?: string;
  readonly interactive_component_sticker_response?: string;
  readonly promoted_product_set_result?: string;
  readonly skan_click?: ReadonlyArray<number>;
  readonly skan_click_second_postback?: ReadonlyArray<number>;
  readonly skan_click_third_postback?: ReadonlyArray<number>;
  readonly skan_view?: ReadonlyArray<number>;
  readonly skan_view_second_postback?: ReadonlyArray<number>;
  readonly skan_view_third_postback?: ReadonlyArray<number>;
  readonly value?: ReadonlyArray<number>;
}

export interface AdsImageCropsFields {
  readonly "100x100"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "100x72"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "191x100"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "300x400"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "400x150"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "400x500"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "600x360"?: ReadonlyArray<ReadonlyArray<unknown>>;
  readonly "90x160"?: ReadonlyArray<ReadonlyArray<unknown>>;
}

export type AdsInsightsActionAttributionWindows = "1d_click" | "1d_ev" | "1d_sequenced" | "1d_view" | "28d_click" | "28d_sequenced" | "28d_view" | "28d_view_all_conversions" | "28d_view_first_conversion" | "7d_click" | "7d_sequenced" | "7d_view" | "7d_view_all_conversions" | "7d_view_first_conversion" | "custom" | "dda" | "default" | "incrementality" | "incrementality_all_conversions" | "incrementality_first_conversion" | "skan_click" | "skan_click_second_postback" | "skan_click_third_postback" | "skan_view" | "skan_view_second_postback" | "skan_view_third_postback";

export type AdsInsightsActionBreakdowns = "action_canvas_component_name" | "action_carousel_card_id" | "action_carousel_card_name" | "action_destination" | "action_device" | "action_reaction" | "action_target_id" | "action_type" | "action_video_sound" | "action_video_type" | "conversion_destination" | "is_business_ai_assisted" | "matched_persona_id" | "matched_persona_name" | "signal_source_bucket" | "standard_event_content_type";

export type AdsInsightsActionReportTime = "conversion" | "impression" | "lifetime" | "mixed";

export type AdsInsightsBreakdowns = "ad_extension_domain" | "ad_extension_url" | "ad_format_asset" | "age" | "app_id" | "body_asset" | "breakdown_ad_objective" | "breakdown_reporting_ad_id" | "call_to_action_asset" | "coarse_conversion_value" | "comscore_market" | "conversion_destination" | "country" | "creative_automation_asset_id" | "creative_relaxation_asset_type" | "crm_advertiser_l12_territory_ids" | "crm_advertiser_subvertical_id" | "crm_advertiser_vertical_id" | "crm_ult_advertiser_id" | "description_asset" | "device_platform" | "dma" | "existing_post_id" | "fidelity_type" | "flexible_format_asset_type" | "frequency_value" | "gen_ai_asset_type" | "gender" | "hourly_stats_aggregated_by_advertiser_time_zone" | "hourly_stats_aggregated_by_audience_time_zone" | "hsid" | "image_asset" | "impression_device" | "impression_view_time_advertiser_hour_v2" | "instagram_ads_follow_type" | "instagram_ads_instagram_media_product_type" | "instagram_ads_time_since_creation_bucket" | "internal_campaign_id" | "is_auto_advance" | "is_conversion_id_modeled" | "is_rendered_as_delayed_skip_ad" | "landing_destination" | "link_url_asset" | "marketing_messages_btn_name" | "mdsa_landing_destination" | "media_asset_url" | "media_creator" | "media_destination_url" | "media_format" | "media_origin_url" | "media_text_content" | "media_type" | "mmm" | "overlap_segment" | "pa_creator_ig_handle" | "place_page_id" | "platform_position" | "postback_sequence_index" | "product_brand_breakdown" | "product_category_breakdown" | "product_custom_label_0_breakdown" | "product_custom_label_1_breakdown" | "product_custom_label_2_breakdown" | "product_custom_label_3_breakdown" | "product_custom_label_4_breakdown" | "product_group_content_id_breakdown" | "product_id" | "publisher_platform" | "redownload" | "reels_trending_topic" | "region" | "rta_ugc_topic" | "rule_set_id" | "rule_set_name" | "signal_source_bucket" | "skan_campaign_id" | "skan_conversion_id" | "skan_version" | "sot_attribution_model_type" | "sot_attribution_window" | "sot_channel" | "sot_event_type" | "sot_source" | "standard_event_content_type" | "title_asset" | "user_persona_id" | "user_persona_name" | "video_asset" | "zip";

export type AdsInsightsDatePreset = "data_maximum" | "last_14d" | "last_28d" | "last_30d" | "last_3d" | "last_7d" | "last_90d" | "last_month" | "last_quarter" | "last_week_mon_sun" | "last_week_sun_sat" | "last_year" | "maximum" | "this_month" | "this_quarter" | "this_week_mon_today" | "this_week_sun_today" | "this_year" | "today" | "yesterday";

export interface AdsInsightsFields {
  readonly account_currency?: string;
  readonly account_id?: string;
  readonly account_name?: string;
  readonly action_values?: ReadonlyArray<AdsActionStatsFields>;
  readonly actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly ad_click_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly ad_id?: string;
  readonly ad_impression_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly ad_name?: string;
  readonly adset_end?: string;
  readonly adset_id?: string;
  readonly adset_name?: string;
  readonly adset_start?: string;
  readonly advanced_actions_28d_view?: ReadonlyArray<AdsActionStatsFields>;
  readonly advanced_reach_1d_lookback?: string;
  readonly advanced_reach_28d_lookback?: string;
  readonly advanced_reach_7d_lookback?: string;
  readonly age_targeting?: string;
  readonly anchor_event_attribution_setting?: string;
  readonly anchor_events_performance_indicator?: string;
  readonly attribution_setting?: string;
  readonly auction_bid?: string;
  readonly auction_competitiveness?: string;
  readonly auction_max_competitor_bid?: string;
  readonly average_purchases_conversion_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly buying_type?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly canvas_avg_view_percent?: string;
  readonly canvas_avg_view_time?: string;
  readonly catalog_segment_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly catalog_segment_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly catalog_segment_value_mobile_purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly catalog_segment_value_omni_purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly catalog_segment_value_website_purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly clicks?: string;
  readonly configurable_attribution_action?: ReadonlyArray<AdsActionStatsFields>;
  readonly configurable_attribution_actionvalue?: ReadonlyArray<AdsActionStatsFields>;
  readonly configurable_audience_overlap_reach?: ReadonlyArray<AdsActionStatsFields>;
  readonly configurable_reachbyfrequency_action?: ReadonlyArray<AdsActionStatsFields>;
  readonly configurable_reachbyfrequency_converters_count?: string;
  readonly configurable_reachbyfrequency_impressions_cost?: string;
  readonly configurable_reachbyfrequency_impressions_count?: string;
  readonly configurable_reachbyfrequency_reach?: string;
  readonly conversion_lead_rate?: ReadonlyArray<AdsActionStatsFields>;
  readonly conversion_leads?: ReadonlyArray<AdsActionStatsFields>;
  readonly conversion_rate_ranking?: string;
  readonly conversion_values?: ReadonlyArray<AdsActionStatsFields>;
  readonly conversions?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_app_custom_event_fb_mobile_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_app_custom_event_fb_mobile_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_offline_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_offline_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_omni_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_omni_purchase_values?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_quantity?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_website_pixel_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_product_website_pixel_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_app_custom_event_fb_mobile_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_app_custom_event_fb_mobile_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_offline_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_offline_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_omni_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_omni_purchase_values?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_quantity?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_website_pixel_purchase?: ReadonlyArray<AdsActionStatsFields>;
  readonly converted_promoted_product_website_pixel_purchase_value?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_15_sec_video_view?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_2_sec_continuous_video_view?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_6_sec_video_view?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_action_type?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_ad_click?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_conversion?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_conversion_lead?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_dda_countby_convs?: string;
  readonly cost_per_estimated_ad_recallers?: string;
  readonly cost_per_inline_link_click?: string;
  readonly cost_per_inline_post_engagement?: string;
  readonly cost_per_message_delivered?: string;
  readonly cost_per_objective_result?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly cost_per_one_thousand_ad_impression?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_outbound_click?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_result?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly cost_per_thruplay?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_unique_action_type?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_unique_click?: string;
  readonly cost_per_unique_conversion?: ReadonlyArray<AdsActionStatsFields>;
  readonly cost_per_unique_inline_link_click?: string;
  readonly cost_per_unique_outbound_click?: ReadonlyArray<AdsActionStatsFields>;
  readonly cpc?: string;
  readonly cpm?: string;
  readonly cpp?: string;
  readonly created_time?: string;
  readonly creative_diversity_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly creative_diversity_label?: string;
  readonly creative_diversity_score?: string;
  readonly creative_fatigue_summary?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly creative_fatigued_ads?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly creative_media_type?: string;
  readonly ctr?: string;
  readonly date_start?: string;
  readonly date_stop?: string;
  readonly dda_countby_convs?: string;
  readonly dda_results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly engagement_rate_ranking?: string;
  readonly estimated_ad_recall_rate?: string;
  readonly estimated_ad_recall_rate_lower_bound?: string;
  readonly estimated_ad_recall_rate_upper_bound?: string;
  readonly estimated_ad_recallers?: string;
  readonly estimated_ad_recallers_lower_bound?: string;
  readonly estimated_ad_recallers_upper_bound?: string;
  readonly frequency?: string;
  readonly full_view_impressions?: string;
  readonly full_view_reach?: string;
  readonly gender_targeting?: string;
  readonly impressions?: string;
  readonly inline_link_click_ctr?: string;
  readonly inline_link_clicks?: string;
  readonly inline_post_engagement?: string;
  readonly instagram_profile_follow?: string;
  readonly instagram_profile_visits?: string;
  readonly instagram_upcoming_event_reminders_set?: string;
  readonly instant_experience_clicks_to_open?: string;
  readonly instant_experience_clicks_to_start?: string;
  readonly instant_experience_outbound_clicks?: ReadonlyArray<AdsActionStatsFields>;
  readonly interactive_component_tap?: ReadonlyArray<AdsActionStatsFields>;
  readonly labels?: string;
  readonly landing_page_view_actions_per_link_click?: string;
  readonly landing_page_view_per_link_click?: string;
  readonly landing_page_view_per_purchase_rate?: string;
  readonly link_clicks_per_results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly location?: string;
  readonly marketing_messages_click_rate_benchmark?: string;
  readonly marketing_messages_cost_per_delivered?: string;
  readonly marketing_messages_cost_per_link_btn_click?: string;
  readonly marketing_messages_delivered?: string;
  readonly marketing_messages_delivery_rate?: string;
  readonly marketing_messages_link_btn_click?: string;
  readonly marketing_messages_link_btn_click_rate?: string;
  readonly marketing_messages_media_view_rate?: string;
  readonly marketing_messages_phone_call_btn_click_rate?: string;
  readonly marketing_messages_quick_reply_btn_click?: string;
  readonly marketing_messages_quick_reply_btn_click_rate?: string;
  readonly marketing_messages_read?: string;
  readonly marketing_messages_read_rate?: string;
  readonly marketing_messages_read_rate_benchmark?: string;
  readonly marketing_messages_sent?: string;
  readonly marketing_messages_spend?: string;
  readonly marketing_messages_spend_currency?: string;
  readonly messages_delivered?: string;
  readonly messages_delivered_ctr?: string;
  readonly mobile_app_purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly multi_event_conversion_attribution_setting?: string;
  readonly objective?: string;
  readonly objective_result_rate?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly objective_results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly onsite_conversion_messaging_detected_purchase_deduped?: ReadonlyArray<AdsActionStatsFields>;
  readonly opportunity_score_l4?: string;
  readonly optimization_goal?: string;
  readonly outbound_clicks?: ReadonlyArray<AdsActionStatsFields>;
  readonly outbound_clicks_ctr?: ReadonlyArray<AdsActionStatsFields>;
  readonly place_page_name?: string;
  readonly playable_average_game_length?: string;
  readonly playable_game_start_rate?: string;
  readonly product_group_retailer_id?: string;
  readonly product_retailer_id?: string;
  readonly product_views?: string;
  readonly purchase_per_landing_page_view?: string;
  readonly purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly purchases_per_link_click?: string;
  readonly qualifying_question_qualify_answer_rate?: string;
  readonly quality_ranking?: string;
  readonly reach?: string;
  readonly read_rate?: string;
  readonly result_rate?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly result_values_performance_indicator?: string;
  readonly results?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly shops_assisted_purchases?: string;
  readonly social_spend?: string;
  readonly spend?: string;
  readonly total_card_view?: string;
  readonly total_postbacks?: string;
  readonly total_postbacks_detailed?: ReadonlyArray<AdsActionStatsFields>;
  readonly total_postbacks_detailed_v4?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_clicks?: string;
  readonly unique_conversions?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_ctr?: string;
  readonly unique_inline_link_click_ctr?: string;
  readonly unique_inline_link_clicks?: string;
  readonly unique_link_clicks_ctr?: string;
  readonly unique_outbound_clicks?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_outbound_clicks_ctr?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_video_continuous_2_sec_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly unique_video_view_15_sec?: ReadonlyArray<AdsActionStatsFields>;
  readonly updated_time?: string;
  readonly video_15_sec_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_30_sec_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_6_sec_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_avg_time_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_continuous_2_sec_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_p100_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_p25_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_p50_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_p75_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_p95_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_play_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_play_curve_actions?: ReadonlyArray<AdsHistogramStatsFields>;
  readonly video_play_retention_0_to_15s_actions?: ReadonlyArray<AdsHistogramStatsFields>;
  readonly video_play_retention_20_to_60s_actions?: ReadonlyArray<AdsHistogramStatsFields>;
  readonly video_play_retention_graph_actions?: ReadonlyArray<AdsHistogramStatsFields>;
  readonly video_thruplay_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_time_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_view_per_impression?: ReadonlyArray<AdsActionStatsFields>;
  readonly website_ctr?: ReadonlyArray<AdsActionStatsFields>;
  readonly website_purchase_roas?: ReadonlyArray<AdsActionStatsFields>;
  readonly wish_bid?: string;
}

export type AdsInsightsLevel = "account" | "ad" | "adset" | "campaign";

export type AdsInsightsSummaryActionBreakdowns = "action_canvas_component_name" | "action_carousel_card_id" | "action_carousel_card_name" | "action_destination" | "action_device" | "action_reaction" | "action_target_id" | "action_type" | "action_video_sound" | "action_video_type" | "conversion_destination" | "is_business_ai_assisted" | "matched_persona_id" | "matched_persona_name" | "signal_source_bucket" | "standard_event_content_type";

export interface AdsMcmeConversionFields {
  readonly creation_time?: string;
  readonly description?: string;
  readonly id?: string;
  readonly is_archived?: boolean;
  readonly mcme_conversion_type?: string;
  readonly name?: string;
  readonly omnichannel_object_id?: string;
}

export interface AdsNamingTemplateFields {
  readonly api_fields?: ReadonlyArray<ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, string>>>>>>>;
  readonly api_version?: string;
  readonly field_order?: ReadonlyArray<string>;
  readonly id?: string;
  readonly level?: AdsNamingTemplateLevel;
  readonly separator?: string;
  readonly template_version?: string;
  readonly user_defined_fields?: ReadonlyArray<ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>>;
  readonly value_separator?: string;
}

export type AdsNamingTemplateLevel = "ADGROUP" | "AD_ACCOUNT" | "CAMPAIGN" | "CAMPAIGN_GROUP" | "OPPORTUNITIES" | "PRIVACY_INFO_CENTER" | "PRODUCT" | "TOPLINE" | "UNIQUE_ADCREATIVE";

export interface AdsOptimalDeliveryGrowthOpportunityFields {
  readonly child_metadata?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly optimization_type?: string;
}

export interface AdsPaymentCycleFields {
  readonly account_id?: string;
  readonly created_time?: string;
  readonly multiplier?: number;
  readonly requested_threshold_amount?: number;
  readonly threshold_amount?: number;
  readonly updated_time?: string;
}

export interface AdsPivotRulesFields {
  readonly creation_time?: string;
  readonly creator?: ProfileFields;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly permission?: string;
  readonly rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly scope?: string;
  readonly update_by?: ProfileFields;
  readonly update_time?: string;
}

export type AdsPixelAutomaticMatchingFields = "country" | "ct" | "db" | "em" | "external_id" | "fn" | "ge" | "ln" | "ph" | "st" | "zp";

export interface AdsPixelCapabilityOverrideFields {
  readonly capability?: string;
  readonly id?: string;
  readonly override_value?: string;
  readonly reason?: string;
}

export interface AdsPixelCAPIIntegrationQualityFields {
  readonly acr?: Readonly<Record<string, unknown>>;
  readonly data_freshness?: Readonly<Record<string, unknown>>;
  readonly dedupe_key_feedback?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly event_ad_sets?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly event_coverage?: Readonly<Record<string, unknown>>;
  readonly event_match_quality?: Readonly<Record<string, unknown>>;
  readonly event_name?: string;
  readonly event_potential_aly_acr_increase?: Readonly<Record<string, unknown>>;
  readonly event_spend?: Readonly<Record<string, unknown>>;
}

export interface AdsPixelCustomAttributionSourceFields {
  readonly id?: string;
  readonly is_eligible?: boolean;
  readonly name?: string;
}

export type AdsPixelDataUseSetting = "ADVERTISING_AND_ANALYTICS" | "ANALYTICS_ONLY" | "EMPTY";

export interface AdsPixelDeliveryRecommendationsFields {
  readonly custom_event_type?: string;
  readonly optimization_goal?: string;
}

export interface AdsPixelDomainControlRuleFields {
  readonly domain_list?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly type?: string;
}

export interface AdsPixelDomainLastFiredTimeFields {
  readonly domain_name?: string;
  readonly last_fired_time?: number;
}

export interface AdsPixelEventLastFiredTimeFields {
  readonly event?: string;
  readonly last_fired_time?: number;
}

export interface AdsPixelEventPredictionFields {
  readonly dismissed?: boolean;
  readonly event_type?: string;
  readonly rule?: string;
}

export interface AdsPixelEventSuggestionRuleFields {
  readonly "7d_volume"?: number;
  readonly dismissed?: boolean;
  readonly end_time?: string;
  readonly event_type?: string;
  readonly rank?: number;
  readonly rule?: string;
  readonly sample_urls?: ReadonlyArray<string>;
  readonly start_time?: string;
}

export interface AdsPixelFields {
  readonly automatic_matching_fields?: ReadonlyArray<string>;
  readonly can_proxy?: boolean;
  readonly code?: string;
  readonly config?: string;
  readonly creation_time?: string;
  readonly creator?: UserFields;
  readonly data_use_setting?: string;
  readonly description?: string;
  readonly duplicate_entries?: number;
  readonly enable_auto_assign_to_accounts?: boolean;
  readonly enable_automatic_matching?: boolean;
  readonly event_stats?: string;
  readonly event_time_max?: number;
  readonly event_time_min?: number;
  readonly first_party_cookie_status?: string;
  readonly has_1p_pixel_event?: boolean;
  readonly id?: string;
  readonly is_consolidated_container?: boolean;
  readonly is_created_by_business?: boolean;
  readonly is_crm?: boolean;
  readonly is_mta_use?: boolean;
  readonly is_restricted_use?: boolean;
  readonly is_unavailable?: boolean;
  readonly last_fired_time?: string;
  readonly last_upload_app?: string;
  readonly last_upload_app_changed_time?: number;
  readonly match_rate_approx?: number;
  readonly matched_entries?: number;
  readonly name?: string;
  readonly owner_ad_account?: AdAccountFields;
  readonly owner_business?: BusinessFields;
  readonly usage?: OfflineConversionDataSetUsageFields;
  readonly user_access_expire_time?: string;
  readonly valid_entries?: number;
}

export type AdsPixelFirstPartyCookieStatus = "EMPTY" | "FIRST_PARTY_COOKIE_DISABLED" | "FIRST_PARTY_COOKIE_ENABLED";

export interface AdsPixelItemPriceFields {
  readonly date?: string;
  readonly item_price_coverage?: string;
}

export interface AdsPixelMicrodataStatsFields {
  readonly allowed_domains?: ReadonlyArray<string>;
  readonly errors_stats_for_time_ranges?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly has_valid_events?: boolean;
  readonly suggested_allowed_domains_count_max?: number;
  readonly suggested_trusted_domains?: ReadonlyArray<string>;
}

export type AdsPixelPermittedTasks = "ADVERTISE" | "ANALYZE" | "EDIT" | "UPLOAD";

export interface AdsPixelRawFiresResultFields {
  readonly data_json?: string;
  readonly device_type?: string;
  readonly event?: string;
  readonly event_detection_method?: string;
  readonly event_src?: string;
  readonly placed_url?: string;
  readonly timestamp?: string;
  readonly user_pii_keys?: string;
}

export interface AdsPixelRealTimeEventLogResultFields {
  readonly data_json?: string;
  readonly dedup_data?: string;
  readonly device_type?: string;
  readonly domain_control_rule_rejection?: string;
  readonly event?: string;
  readonly event_detection_method?: string;
  readonly in_iframe?: boolean;
  readonly matched_rule_conditions?: string;
  readonly resolved_link?: string;
  readonly source_rule_condition?: string;
  readonly timestamp?: string;
  readonly trace_id?: string;
  readonly url?: string;
}

export interface AdsPixelRecentEventsResultFields {
  readonly count?: number;
  readonly event?: string;
}

export interface AdsPixelSignalsIWLFeedbackNuxFields {
  readonly should_ask_to_rate?: boolean;
}

export interface AdsPixelSignalsIWLNuxFields {
  readonly background_color?: string;
  readonly content?: string;
  readonly content_color?: string;
  readonly content_size?: string;
  readonly img_url?: string;
}

export type AdsPixelSortBy = "LAST_FIRED_TIME" | "NAME";

export interface AdsPixelStatsFields {
  readonly count?: number;
  readonly diagnostics_hourly_last_timestamp?: string;
  readonly event?: string;
  readonly value?: string;
}

export type AdsPixelStatsResultAggregation = "browser_type" | "custom_data_field" | "device_os" | "device_type" | "event" | "event_detection_method" | "event_processing_results" | "event_source" | "event_total_counts" | "event_value_count" | "had_pii" | "host" | "match_keys" | "pixel_fire" | "url" | "url_by_rule";

export interface AdsPixelStatsResultFields {
  readonly aggregation?: string;
  readonly data?: ReadonlyArray<AdsPixelStatsFields>;
  readonly start_time?: string;
}

export type AdsPixelTasks = "AA_ANALYZE" | "ADVERTISE" | "ANALYZE" | "EDIT" | "UPLOAD";

export interface AdsQuickViewsFields {
  readonly attribution_windows?: ReadonlyArray<string>;
  readonly breakdowns?: ReadonlyArray<string>;
  readonly column_fields?: ReadonlyArray<string>;
  readonly description?: string;
  readonly grouping?: string;
  readonly id?: string;
  readonly is_attribution_windows_disabled?: boolean;
  readonly is_breakdowns_disabled?: boolean;
  readonly is_columns_and_sort_disabled?: boolean;
  readonly is_filters_disabled?: boolean;
  readonly is_grouping_disabled?: boolean;
  readonly name?: string;
  readonly owner?: ProfileFields;
  readonly permission?: string;
  readonly quick_view_type?: string;
  readonly sort?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly time_stamp_last_used_by_owner?: string;
}

export interface AdsReportBuilderExportCoreFields {
  readonly async_percent_completion?: number;
  readonly async_report_url?: string;
  readonly async_status?: string;
  readonly client_creation_value?: string;
  readonly expiry_time?: string;
  readonly export_download_time?: string;
  readonly export_format?: string;
  readonly export_name?: string;
  readonly export_type?: string;
  readonly has_seen?: boolean;
  readonly id?: string;
  readonly is_sharing?: boolean;
  readonly link_sharing_expiration_time?: string;
  readonly link_sharing_uri?: string;
  readonly time_completed?: string;
  readonly time_start?: string;
}

export interface AdsReportBuilderFields {
  readonly headers?: Readonly<Record<string, unknown>>;
  readonly rows?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly skan_readiness_status?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface AdsReportBuilderMMMReportFields {
  readonly async_status?: string;
  readonly export_format?: string;
  readonly export_name?: string;
  readonly export_type?: string;
  readonly has_seen?: boolean;
  readonly id?: string;
  readonly mmm_status?: string;
  readonly time_start?: string;
}

export interface AdsReportBuilderMMMReportSchedulerFields {
  readonly ad_account_ids?: ReadonlyArray<string>;
  readonly filtering?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
  readonly report_name?: string;
  readonly schedule_frequency?: string;
}

export interface AdsReportBuilderSavedReportFields {
  readonly action_report_time?: string;
  readonly ad_account_id?: string;
  readonly attribution_windows?: ReadonlyArray<string>;
  readonly comparison_date_interval?: Readonly<Record<string, unknown>>;
  readonly creation_source?: string;
  readonly creation_time?: string;
  readonly currency?: string;
  readonly date_interval?: Readonly<Record<string, unknown>>;
  readonly date_preset?: string;
  readonly default_attribution_windows?: ReadonlyArray<string>;
  readonly dimension_groups?: ReadonlyArray<ReadonlyArray<string>>;
  readonly dimensions?: ReadonlyArray<string>;
  readonly filtering?: ReadonlyArray<unknown>;
  readonly formatting?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly id?: string;
  readonly last_access_by?: ProfileFields;
  readonly last_access_time?: string;
  readonly last_report_snapshot_id?: string;
  readonly last_report_snapshot_time?: string;
  readonly last_shared_report_expiration?: string;
  readonly limit?: number;
  readonly locked_dimensions?: number;
  readonly metrics?: ReadonlyArray<string>;
  readonly report_name?: string;
  readonly report_snapshot_async_percent_completion?: number;
  readonly report_snapshot_async_status?: string;
  readonly schedule_frequency?: string;
  readonly scope?: string;
  readonly show_deprecate_aw_banner?: boolean;
  readonly sorting?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly start_date?: string;
  readonly status?: string;
  readonly subscribers?: ReadonlyArray<string>;
  readonly update_by?: ProfileFields;
  readonly update_time?: string;
  readonly user?: ProfileFields;
  readonly user_dimensions?: ReadonlyArray<string>;
  readonly user_metrics?: ReadonlyArray<string>;
  readonly view_type?: string;
}

export interface AdsSegmentsFields {
  readonly daily_audience_size?: number;
  readonly daily_impressions?: number;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly popularity?: number;
  readonly projected_cpm?: number;
  readonly projected_daily_revenue?: number;
}

export interface AdsSignalDiagnosticIssueFields {
  readonly data_source_id?: AdsPixelFields;
  readonly data_source_type?: string;
  readonly diagnostic_type?: string;
  readonly event_name?: string;
  readonly traffic_anomaly_drop_percentage?: number;
  readonly traffic_anomaly_drop_timestamp?: string;
}

export interface AdsStartYourDayWidgetFields {
  readonly id?: string;
  readonly widget_id?: string;
}

export interface AdsTabularFields {
  readonly rows?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AdsTargetingInsightsFields {
  readonly audience_size?: number;
  readonly clicks?: number;
  readonly conversion_cost?: number;
  readonly conversions?: number;
  readonly description?: string;
  readonly id?: string;
  readonly impressions?: string;
  readonly name?: string;
  readonly revenue?: number;
  readonly spend?: number;
  readonly type?: string;
}

export type AdStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export type AdStatusOption = "ACTIVE" | "INHERITED_FROM_SOURCE" | "PAUSED";

export interface AdsTextSuggestionsFields {
  readonly ad_account_id?: string;
  readonly bodies?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly descriptions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly inactive_session_tally?: number;
  readonly long?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly short?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly titles?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type AdStudyCellCreationTemplate = "AUTOMATIC_PLACEMENTS" | "BRAND_AWARENESS" | "FACEBOOK" | "FACEBOOK_AUDIENCE_NETWORK" | "FACEBOOK_INSTAGRAM" | "FACEBOOK_NEWS_FEED" | "FACEBOOK_NEWS_FEED_IN_STREAM_VIDEO" | "HIGH_FREQUENCY" | "INSTAGRAM" | "IN_STREAM_VIDEO" | "LOW_FREQUENCY" | "MEDIUM_FREQUENCY" | "MOBILE_OPTIMIZED_VIDEO" | "PAGE_POST_ENGAGEMENT" | "REACH" | "TV_COMMERCIAL" | "TV_FACEBOOK" | "VIDEO_VIEW_OPTIMIZATION";

export interface AdStudyCellFields {
  readonly ad_entities_count?: number;
  readonly ad_ids?: ReadonlyArray<string>;
  readonly control_percentage?: number;
  readonly id?: string;
  readonly name?: string;
  readonly treatment_percentage?: number;
}

export interface AdStudyFields {
  readonly business?: BusinessFields;
  readonly canceled_time?: string;
  readonly client_business?: BusinessFields;
  readonly cooldown_start_time?: string;
  readonly created_by?: UserFields;
  readonly created_time?: string;
  readonly description?: string;
  readonly end_time?: string;
  readonly id?: string;
  readonly measurement_contact?: UserFields;
  readonly name?: string;
  readonly observation_end_time?: string;
  readonly results_first_available_date?: string;
  readonly sales_contact?: UserFields;
  readonly start_time?: string;
  readonly type?: string;
  readonly updated_by?: UserFields;
  readonly updated_time?: string;
}

export interface AdStudyObjectiveFields {
  readonly id?: string;
  readonly is_primary?: boolean;
  readonly last_updated_results?: string;
  readonly name?: string;
  readonly results?: ReadonlyArray<string>;
  readonly type?: string;
}

export interface AdStudyObjectiveIDFields {
  readonly event_names?: ReadonlyArray<string>;
  readonly id?: string;
  readonly type?: string;
}

export interface AdStudyObjectiveOffsiteDatasetsFields {
  readonly event_names?: ReadonlyArray<string>;
  readonly id?: string;
}

export type AdStudyObjectiveType = "BRAND" | "BRANDLIFT" | "CONVERSIONS" | "FTL" | "MAE" | "MAI" | "MPC_CONVERSION" | "NONSALES" | "PARTNER" | "SALES" | "TELCO";

export type AdStudyType = "BACKEND_AB_TESTING" | "CONTINUOUS_LIFT_CONFIG" | "CREATIVE_SPEND_ENFORCEMENT" | "GEO_LIFT" | "LIFT" | "PORTFOLIO_OPTIMIZER" | "SPLIT_TEST" | "VERSION_CONTROL";

export interface AdsUserSettingsFields {
  readonly a_plus_c_survey_seen?: boolean;
  readonly adaptive_geo_excl_banner_seen_ts?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly add_overlays_opt_in_status?: string;
  readonly adgroup_name_template?: Readonly<Record<string, unknown>>;
  readonly ads_cs_catalog_opt_out_timestamp?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly ads_cs_dynamic_se_opt_in_status?: string;
  readonly ads_cs_dynamic_se_opt_out_timestamp?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly ads_cs_sitelinks_opt_in_status?: string;
  readonly ads_cs_sitelinks_opt_out_timestamp?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly ads_destination_optimization_opt_out_timestamp?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly ads_tool_visits?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly aplusc_ai_agent_opt_in_status?: string;
  readonly aplusc_carousel_cda_opt_in_status?: string;
  readonly aplusc_carousel_inline_comment_opt_in_status?: string;
  readonly aplusc_da_opt_in_status?: string;
  readonly aplusc_enhance_cta_opt_in_status?: string;
  readonly aplusc_epa_opt_in_status?: string;
  readonly aplusc_local_store_extension_opt_in_status?: string;
  readonly aplusc_opt_out_friction?: ReadonlyArray<string>;
  readonly aplusc_videofilter_opt_in_status?: string;
  readonly aplusc_videouncrop_opt_in_status?: string;
  readonly app_details_data_opt_in_status?: string;
  readonly autoflow_lite_opt_in_status?: string;
  readonly autoflow_lite_should_opt_in?: boolean;
  readonly blended_ads_creation_defaulting_opt_in_status?: string;
  readonly blended_ads_creation_defaulting_opt_out_campaign_group_ids?: ReadonlyArray<number>;
  readonly bookmarked_pages?: ReadonlyArray<PageFields>;
  readonly campaign_group_name_template?: Readonly<Record<string, unknown>>;
  readonly campaign_name_template?: Readonly<Record<string, unknown>>;
  readonly carousel_to_video_opt_in_status?: string;
  readonly connected_sources_catalog_opt_in_status?: string;
  readonly create_cta_sticker_opt_in_status?: string;
  readonly creative_flex_opt_in_status?: string;
  readonly da_adapt_images_opt_in_status?: string;
  readonly da_add_overlays_opt_in_status?: string;
  readonly da_creative_flex_opt_in_status?: string;
  readonly da_hide_price_opt_in_status?: string;
  readonly da_manual_media_nux_impressions?: number;
  readonly dco_to_mmu_opt_out_status?: string;
  readonly default_creation_mode?: string;
  readonly dynamic_partnership_ads_opt_in_status?: string;
  readonly enhance_cta_text_extraction_opt_in_status?: string;
  readonly export_format_default?: string;
  readonly feedback_surveys?: ReadonlyArray<string>;
  readonly ff_to_mmu_opt_out_status?: string;
  readonly focus_mode_default?: string;
  readonly gen_ai_alpha_test_status?: number;
  readonly gen_ai_auto_select_opt_in_status?: string;
  readonly id?: string;
  readonly image_background_generation_opt_in_status?: string;
  readonly image_brightness_and_contrast_opt_in_status?: string;
  readonly image_expansion_opt_in_status?: string;
  readonly image_templates_text_extraction_opt_in_status?: string;
  readonly image_text_translation_opt_in_status?: string;
  readonly is_ads_ai_consented?: boolean;
  readonly is_cbo_default_on?: boolean;
  readonly is_se_removal_guidance_dismissed?: boolean;
  readonly last_used_post_format?: string;
  readonly last_visited_time?: string;
  readonly metadata_brand_kit_last_opt_out_timestamp?: number;
  readonly metadata_brand_kit_opt_in_status?: string;
  readonly multi_media_opt_out_status?: string;
  readonly music_on_reels_opt_in?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly muted_cbo_midflight_education_messages?: ReadonlyArray<string>;
  readonly onsite_destination_optimization_opt_in?: string;
  readonly open_tabs?: ReadonlyArray<string>;
  readonly pac_relaxation_opt_in_status?: string;
  readonly pcau_cat_optout_survey_impr?: number;
  readonly pcau_cat_optout_survey_resp_ts?: string;
  readonly pe_ai_relevancy_opt_out_ts?: string;
  readonly pe_show_products_survey_impr?: number;
  readonly pe_show_products_survey_resp_ts?: string;
  readonly placement_group_square_opt_in_status?: string;
  readonly placement_group_vertical_opt_in_status?: string;
  readonly previously_seen_recommendations?: ReadonlyArray<string>;
  readonly product_extensions_opt_in?: string;
  readonly reactive_control_settings?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly replace_media_text_opt_in_status?: string;
  readonly sa_off_conv_loc_seen?: string;
  readonly saoff_published_l2_conv_loc_seen?: string;
  readonly saon_migr_l1_seen_status?: string;
  readonly selected_ad_account?: AdAccountFields;
  readonly selected_comparison_timerange?: Readonly<Record<string, unknown>>;
  readonly selected_metric_cic?: string;
  readonly selected_metrics_cic?: ReadonlyArray<string>;
  readonly selected_page?: PageFields;
  readonly selected_page_section?: string;
  readonly selected_power_editor_pane?: string;
  readonly selected_stat_range?: Readonly<Record<string, unknown>>;
  readonly should_export_filter_empty_cols?: string;
  readonly should_export_rows_without_unsupported_feature?: string;
  readonly should_not_auto_expand_tree_table?: boolean;
  readonly should_not_show_cbo_campaign_toggle_off_confirmation_message?: boolean;
  readonly should_not_show_publish_message_on_editor_close?: boolean;
  readonly show_original_videos_opt_in?: string;
  readonly show_summary_opt_in_status?: string;
  readonly static_ad_product_extensions_opt_in?: string;
  readonly sticky_setting_after_default_on?: string;
  readonly syd_campaign_trends_metric?: string;
  readonly text_optimizations_text_extraction_opt_in_status?: string;
  readonly text_translation_opt_in_status?: string;
  readonly text_unification_opt_in_status?: string;
  readonly text_unification_opt_in_status_v2?: string;
  readonly text_variations_sticky_opt_in_status?: string;
  readonly total_coupon_syd_dismissals?: number;
  readonly total_coupon_upsell_dismissals?: number;
  readonly url_prefill_removal_timestamp?: number;
  readonly use_pe_create_flow?: boolean;
  readonly use_stepper_primary_entry?: boolean;
  readonly user?: UserFields;
  readonly video_to_image_opt_in_status?: string;
  readonly voiceover_trans_opt_in_status?: string;
  readonly website_media_opt_in_status?: string;
  readonly website_reviews_data_opt_in_status?: string;
  readonly website_selling_points_data_opt_in_status?: string;
}

export type AdsValueAdjustmentRuleCollectionEntryPoint = "ADVERTISING_SETTINGS" | "L2_AUDIENCE" | "L2_CONVERSION_LOCATION" | "L2_GLOBAL" | "L2_NCA_GOAL" | "L2_PLACEMENT";

export interface AdsValueAdjustmentRuleCollectionFields {
  readonly id?: string;
  readonly is_default_setting?: boolean;
  readonly last_attach_time?: string;
  readonly name?: string;
  readonly product_type?: string;
  readonly status?: string;
}

export type AdsValueAdjustmentRuleCollectionProductType = "AUDIENCE" | "LEADGEN_ADS" | "OMNI_CHANNEL";

export type AdsValueAdjustmentRuleCollectionStatus = "ACTIVE" | "DELETED" | "DRAFT";

export interface AdToplineDetailFields {
  readonly active_status?: number;
  readonly ad_account_id?: string;
  readonly flight_end_date?: string;
  readonly flight_start_date?: string;
  readonly id?: string;
  readonly io_number?: number;
  readonly line_number?: number;
  readonly price?: number;
  readonly quantity?: number;
  readonly sf_detail_line_id?: string;
  readonly subline_id?: string;
  readonly targets?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface AdToplineFields {
  readonly account_id?: string;
  readonly client_approval_date?: string;
  readonly created_by?: string;
  readonly created_date?: string;
  readonly description?: string;
  readonly flight_end_date?: string;
  readonly flight_start_date?: string;
  readonly func_cap_amount?: string;
  readonly func_cap_amount_with_offset?: string;
  readonly func_line_amount?: string;
  readonly func_line_amount_with_offset?: string;
  readonly func_price?: string;
  readonly func_price_with_offset?: string;
  readonly gender?: string;
  readonly id?: string;
  readonly impressions?: number;
  readonly io_number?: number;
  readonly is_bonus_line?: number;
  readonly keywords?: string;
  readonly last_updated_by?: string;
  readonly last_updated_date?: string;
  readonly line_number?: number;
  readonly line_position?: number;
  readonly line_type?: string;
  readonly location?: string;
  readonly max_age?: string;
  readonly max_budget?: string;
  readonly min_age?: string;
  readonly price_per_trp?: string;
  readonly product_type?: string;
  readonly rev_assurance_approval_date?: string;
  readonly targets?: string;
  readonly trp_updated_time?: number;
  readonly trp_value?: string;
  readonly uom?: string;
}

export interface AdvAInstanceFields {
  readonly id?: string;
  readonly instance_type?: string;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
}

export interface AdvertiserVerificationStatusFields {
  readonly banner_type?: string;
  readonly grace_period_ends_at?: string;
  readonly ufac_redirect_uri?: string;
  readonly verification_status?: string;
}

export interface AdVideoFields {
  readonly ad_breaks?: ReadonlyArray<number>;
  readonly admin_creator?: UserFields;
  readonly audio_isrc?: AudioIsrcFields;
  readonly backdated_time?: string;
  readonly backdated_time_granularity?: string;
  readonly boost_eligibility_info?: Readonly<Record<string, unknown>>;
  readonly content_category?: string;
  readonly content_tags?: ReadonlyArray<string>;
  readonly copyright?: VideoCopyrightFields;
  readonly copyright_check_information?: Readonly<Record<string, unknown>>;
  readonly copyright_monitoring_status?: string;
  readonly created_time?: string;
  readonly custom_labels?: ReadonlyArray<string>;
  readonly description?: string;
  readonly embed_html?: Readonly<Record<string, unknown>>;
  readonly embeddable?: boolean;
  readonly event?: EventFields;
  readonly expiration?: Readonly<Record<string, unknown>>;
  readonly format?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly icon?: string;
  readonly id?: string;
  readonly is_crosspost_video?: boolean;
  readonly is_crossposting_eligible?: boolean;
  readonly is_episode?: boolean;
  readonly is_instagram_eligible?: boolean;
  readonly is_reference_only?: boolean;
  readonly length?: number;
  readonly live_audience_count?: number;
  readonly live_status?: string;
  readonly music_video_copyright?: MusicVideoCopyrightFields;
  readonly permalink_url?: string;
  readonly picture?: string;
  readonly place?: PlaceFields;
  readonly post_id?: string;
  readonly post_views?: number;
  readonly premiere_living_room_status?: string;
  readonly privacy?: PrivacyFields;
  readonly published?: boolean;
  readonly replace_audio_status?: string;
  readonly scheduled_publish_time?: string;
  readonly selected_audio_spec?: Readonly<Record<string, unknown>>;
  readonly source?: string;
  readonly spherical?: boolean;
  readonly status?: VideoStatusFields;
  readonly title?: string;
  readonly universal_video_id?: string;
  readonly updated_time?: string;
  readonly views?: number;
}

export interface AdVolumeFields {
  readonly ad_volume_break_down?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly ads_running_or_in_review_count?: number;
  readonly future_limit_activation_date?: string;
  readonly future_limit_on_ads_running_or_in_review?: number;
  readonly individual_accounts_ad_volume?: number;
  readonly is_gpa_page?: boolean;
  readonly limit_on_ads_running_or_in_review?: number;
  readonly owning_business_ad_volume?: number;
  readonly partner_business_ad_volume?: number;
  readonly user_role?: string;
}

export interface AgencyClientDeclarationFields {
  readonly agency_representing_client?: number;
  readonly client_based_in_france?: number;
  readonly client_city?: string;
  readonly client_country_code?: string;
  readonly client_email_address?: string;
  readonly client_name?: string;
  readonly client_postal_code?: string;
  readonly client_province?: string;
  readonly client_street?: string;
  readonly client_street2?: string;
  readonly has_written_mandate_from_advertiser?: number;
  readonly is_client_paying_invoices?: number;
}

export interface AgeRangeFields {
  readonly max?: number;
  readonly min?: number;
}

export interface AIGeneratedProductImageFields {
  readonly flagged_for_manual_review?: boolean;
  readonly transformed_image_url?: string;
}

export interface AlbumFields {
  readonly backdated_time?: string;
  readonly backdated_time_granularity?: string;
  readonly can_backdate?: boolean;
  readonly can_upload?: boolean;
  readonly count?: number;
  readonly cover_photo?: PhotoFields;
  readonly created_time?: string;
  readonly description?: string;
  readonly edit_link?: string;
  readonly event?: EventFields;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly is_user_facing?: boolean;
  readonly link?: string;
  readonly location?: string;
  readonly modified_major?: string;
  readonly name?: string;
  readonly photo_count?: number;
  readonly place?: PlaceFields;
  readonly privacy?: string;
  readonly type?: string;
  readonly updated_time?: string;
  readonly video_count?: number;
}

export interface ALMAdAccountInfoFields {
  readonly ad_account_id?: string;
  readonly id?: string;
  readonly managed_by?: string;
  readonly owned_by?: string;
  readonly parent_advertiser_id?: string;
  readonly sub_vertical?: string;
  readonly tag?: ReadonlyArray<string>;
  readonly user_ids?: ReadonlyArray<string>;
  readonly vertical?: string;
}

export interface ALMEndAdvertiserInfoFields {
  readonly estimated_ad_budget?: number;
  readonly id?: string;
  readonly parent_advertiser_id?: string;
  readonly parent_advertiser_name?: string;
  readonly tag?: ReadonlyArray<string>;
}

export interface ALMEventFields {
  readonly ad_account_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly channel?: string;
  readonly event?: string;
  readonly event_time?: string;
  readonly guidance?: string;
  readonly guidance_detail?: string;
  readonly guidance_type?: string;
  readonly id?: string;
  readonly parent_advertiser_ids?: ReadonlyArray<string>;
  readonly reseller_business_id?: string;
  readonly solution_id?: string;
  readonly sub_channel?: string;
  readonly user_id?: string;
}

export interface ALMGuidanceFields {
  readonly ad_account_id?: string;
  readonly guidances?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly opportunity_score?: number;
  readonly parent_advertiser_id?: string;
  readonly parent_advertiser_name?: string;
}

export interface ALMGuidanceMetricsFields {
  readonly ad_account_id?: string;
  readonly adopted_objects?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly guidance_name?: string;
  readonly guidance_type?: string;
  readonly l28_adoption?: number;
  readonly l28_available?: number;
  readonly l28_click?: number;
  readonly l28_conversion?: number;
  readonly l28_has_click?: boolean;
  readonly l28_has_impression?: boolean;
  readonly l28_impression?: number;
  readonly l28_is_actioned?: boolean;
  readonly l28_is_adopted?: boolean;
  readonly l28_is_available?: boolean;
  readonly l28_is_pitched?: boolean;
  readonly l28_pitch?: number;
  readonly l28d_adopted_revenue?: number;
  readonly last_actioned_ds?: string;
  readonly last_adopted_ds?: string;
  readonly last_pitch_ds?: string;
  readonly parent_advertiser_id?: string;
  readonly report_ds?: string;
}

export interface AMOneshopSettingsFields {

}

export interface AnalyticsConfigFields {
  readonly analytics_access_for_authorized_ad_account?: boolean;
  readonly breakdowns_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly builtin_fields_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly deprecated_events_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly events_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly ios_purchase_validation_secret?: string;
  readonly is_any_role_able_to_see_restricted_insights?: boolean;
  readonly is_implicit_purchase_logging_on_android_supported?: boolean;
  readonly is_implicit_purchase_logging_on_ios_supported?: boolean;
  readonly is_track_ios_app_uninstall_supported?: boolean;
  readonly journey_backfill_status?: string;
  readonly journey_conversion_events?: ReadonlyArray<string>;
  readonly journey_enabled?: boolean;
  readonly journey_impacting_change_time?: string;
  readonly journey_timeout?: string;
  readonly latest_sdk_versions?: Readonly<Record<string, string>>;
  readonly log_android_implicit_purchase_events?: boolean;
  readonly log_automatic_analytics_events?: boolean;
  readonly log_implicit_purchase_events?: boolean;
  readonly prev_journey_conversion_events?: ReadonlyArray<string>;
  readonly query_approximation_accuracy_level?: string;
  readonly query_currency?: string;
  readonly query_timezone?: string;
  readonly recent_events_update_time?: string;
  readonly session_timeout_interval?: number;
  readonly track_ios_app_uninstall?: boolean;
}

export interface AnalyticsEntityUserConfigFields {
  readonly dismissed_notices?: ReadonlyArray<string>;
}

export interface AnalyticsFunnelQueryResultFields {
  readonly query_id?: string;
  readonly status?: string;
}

export interface AnalyticsQueryResultFields {
  readonly query_id?: string;
  readonly status?: string;
}

export interface AnalyticsSegmentFields {
  readonly custom_audience_ineligiblity_reasons?: ReadonlyArray<string>;
  readonly description?: string;
  readonly estimated_custom_audience_size?: number;
  readonly event_info_rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly event_rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly filter_set?: string;
  readonly has_demographic_rules?: boolean;
  readonly id?: string;
  readonly is_all_user?: boolean;
  readonly is_eligible_for_push_campaign?: boolean;
  readonly is_internal?: boolean;
  readonly name?: string;
  readonly percentile_rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly time_last_seen?: number;
  readonly time_last_updated?: number;
  readonly user_property_rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly web_param_rules?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AnalyticsUserConfigFields {
  readonly demo_app_nux_config?: Readonly<Record<string, unknown>>;
  readonly flags?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly id?: string;
}

export interface ANBlockedBICategoryFields {
  readonly key?: string;
}

export interface AndroidAppLinkFields {
  readonly app_name?: string;
  readonly class?: string;
  readonly package?: string;
  readonly url?: string;
}

export interface ApacMonSellerStatusAPIContainerFields {
  readonly structured_messaging_commerce?: Readonly<Record<string, unknown>>;
}

export interface AppEventConfigFields {
  readonly breakdowns_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly builtin_fields_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly deprecated_events_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly events_config?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
  readonly ios_purchase_validation_secret?: string;
  readonly is_any_role_able_to_see_restricted_insights?: boolean;
  readonly is_implicit_purchase_logging_on_android_supported?: boolean;
  readonly is_implicit_purchase_logging_on_ios_supported?: boolean;
  readonly is_track_android_app_uninstall_supported?: boolean;
  readonly is_track_ios_app_uninstall_supported?: boolean;
  readonly journey_backfill_status?: string;
  readonly journey_conversion_events?: ReadonlyArray<string>;
  readonly journey_enabled?: boolean;
  readonly journey_timeout?: string;
  readonly latest_sdk_versions?: Readonly<Record<string, string>>;
  readonly log_android_implicit_purchase_events?: boolean;
  readonly log_automatic_analytics_events?: boolean;
  readonly log_implicit_purchase_events?: boolean;
  readonly prev_journey_conversion_events?: ReadonlyArray<string>;
  readonly query_approximation_accuracy_level?: string;
  readonly query_currency?: string;
  readonly query_timezone?: string;
  readonly recent_events_update_time?: string;
  readonly session_timeout_interval?: number;
  readonly track_android_app_uninstall?: boolean;
  readonly track_ios_app_uninstall?: boolean;
}

export type ApplicationAnPlatforms = "ANDROID" | "CTV" | "DESKTOP" | "GALAXY" | "INSTANT_ARTICLES" | "IOS" | "MOBILE_WEB" | "OCULUS" | "UNKNOWN" | "XIAOMI";

export interface ApplicationFields {
  readonly aam_rules?: string;
  readonly an_ad_space_limit?: number;
  readonly an_platforms?: ReadonlyArray<string>;
  readonly android_key_hash?: ReadonlyArray<string>;
  readonly android_sdk_error_categories?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly app_domains?: ReadonlyArray<string>;
  readonly app_events_config?: Readonly<Record<string, unknown>>;
  readonly app_events_feature_bitmask?: number;
  readonly app_events_session_timeout?: number;
  readonly app_install_tracked?: boolean;
  readonly app_name?: string;
  readonly app_signals_binding_ios?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly app_type?: number;
  readonly auth_dialog_data_help_url?: string;
  readonly auth_dialog_headline?: string;
  readonly auth_dialog_perms_explanation?: string;
  readonly auth_referral_default_activity_privacy?: string;
  readonly auth_referral_enabled?: number;
  readonly auth_referral_extended_perms?: ReadonlyArray<string>;
  readonly auth_referral_friend_perms?: ReadonlyArray<string>;
  readonly auth_referral_response_type?: string;
  readonly auth_referral_user_perms?: ReadonlyArray<string>;
  readonly auto_event_mapping_android?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly auto_event_mapping_ios?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly auto_event_setup_enabled?: boolean;
  readonly auto_log_app_events_default?: boolean;
  readonly auto_log_app_events_enabled?: boolean;
  readonly business?: BusinessFields;
  readonly canvas_fluid_height?: boolean;
  readonly canvas_fluid_width?: number;
  readonly canvas_url?: string;
  readonly category?: string;
  readonly client_config?: Readonly<Record<string, unknown>>;
  readonly company?: string;
  readonly config_ids?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly configured_ios_sso?: boolean;
  readonly contact_email?: string;
  readonly created_time?: string;
  readonly creator_uid?: string;
  readonly daily_active_users?: string;
  readonly daily_active_users_rank?: number;
  readonly deauth_callback_url?: string;
  readonly default_share_mode?: string;
  readonly description?: string;
  readonly enigma_config?: Readonly<Record<string, unknown>>;
  readonly financial_id?: string;
  readonly gdpv4_chrome_custom_tabs_enabled?: boolean;
  readonly gdpv4_enabled?: boolean;
  readonly gdpv4_nux_content?: string;
  readonly gdpv4_nux_enabled?: boolean;
  readonly has_messenger_product?: boolean;
  readonly hosting_url?: string;
  readonly icon_url?: string;
  readonly id?: string;
  readonly ios_bundle_id?: ReadonlyArray<string>;
  readonly ios_sdk_dialog_flows?: Readonly<Record<string, unknown>>;
  readonly ios_sdk_error_categories?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly ios_sfvc_attr?: boolean;
  readonly ios_supports_native_proxy_auth_flow?: boolean;
  readonly ios_supports_system_auth?: boolean;
  readonly ipad_app_store_id?: string;
  readonly iphone_app_store_id?: string;
  readonly latest_sdk_version?: Readonly<Record<string, unknown>>;
  readonly link?: string;
  readonly logging_token?: string;
  readonly logo_url?: string;
  readonly migrations?: Readonly<Record<string, boolean>>;
  readonly mobile_profile_section_url?: string;
  readonly mobile_web_url?: string;
  readonly monthly_active_users?: string;
  readonly monthly_active_users_rank?: number;
  readonly name?: string;
  readonly namespace?: string;
  readonly object_store_urls?: Readonly<Record<string, unknown>>;
  readonly owner_business?: BusinessFields;
  readonly page_tab_default_name?: string;
  readonly page_tab_url?: string;
  readonly photo_url?: string;
  readonly privacy_policy_url?: string;
  readonly profile_section_url?: string;
  readonly property_id?: string;
  readonly protected_mode_rules?: Readonly<Record<string, unknown>>;
  readonly real_time_mode_devices?: ReadonlyArray<string>;
  readonly restrictions?: Readonly<Record<string, unknown>>;
  readonly restrictive_data_filter_params?: string;
  readonly restrictive_data_filter_rules?: string;
  readonly sdk_update_message?: string;
  readonly seamless_login?: number;
  readonly secure_canvas_url?: string;
  readonly secure_page_tab_url?: string;
  readonly server_ip_whitelist?: string;
  readonly smart_login_bookmark_icon_url?: string;
  readonly smart_login_menu_icon_url?: string;
  readonly social_discovery?: number;
  readonly subcategory?: string;
  readonly suggested_events_setting?: string;
  readonly supported_platforms?: ReadonlyArray<ApplicationSupportedPlatforms>;
  readonly supports_apprequests_fast_app_switch?: Readonly<Record<string, unknown>>;
  readonly supports_attribution?: boolean;
  readonly supports_implicit_sdk_logging?: boolean;
  readonly suppress_native_ios_gdp?: boolean;
  readonly terms_of_service_url?: string;
  readonly url_scheme_suffix?: string;
  readonly user_support_email?: string;
  readonly user_support_url?: string;
  readonly website_url?: string;
  readonly weekly_active_users?: string;
}

export type ApplicationMutationMethod = "ADD" | "DELETE" | "REPLACE";

export type ApplicationOwnerPermissions = "DEVELOP" | "MANAGE" | "MANAGE_EXTENSIONS" | "MANAGE_PHONE" | "MANAGE_PHONE_ASSETS" | "MANAGE_TEMPLATES" | "MESSAGING" | "VIEW_COST" | "VIEW_PHONE_ASSETS" | "VIEW_TEMPLATES";

export type ApplicationPartnerPermissions = "DEVELOP" | "MANAGE" | "MANAGE_EXTENSIONS" | "MANAGE_PHONE" | "MANAGE_PHONE_ASSETS" | "MANAGE_TEMPLATES" | "MESSAGING" | "VIEW_COST" | "VIEW_PHONE_ASSETS" | "VIEW_TEMPLATES";

export type ApplicationPlatform = "ANDROID" | "IOS";

export type ApplicationPostMethod = "CODELESS" | "EYMT";

export type ApplicationRequestType = "APP_INDEXING" | "BUTTON_SAMPLING" | "PLUGIN";

export type ApplicationSupportedPlatforms = "AMAZON" | "ANDROID" | "CANVAS" | "GAMEROOM" | "INSTANT_GAME" | "IPAD" | "IPHONE" | "MOBILE_WEB" | "OCULUS" | "SAMSUNG" | "SUPPLEMENTARY_IMAGES" | "WEB" | "WINDOWS" | "XIAOMI";

export interface AppLinksFields {
  readonly android?: ReadonlyArray<AndroidAppLinkFields>;
  readonly id?: string;
  readonly ios?: ReadonlyArray<IosAppLinkFields>;
  readonly ipad?: ReadonlyArray<IosAppLinkFields>;
  readonly iphone?: ReadonlyArray<IosAppLinkFields>;
  readonly web?: WebAppLinkFields;
  readonly windows?: ReadonlyArray<WindowsAppLinkFields>;
  readonly windows_phone?: ReadonlyArray<WindowsPhoneAppLinkFields>;
  readonly windows_universal?: ReadonlyArray<WindowsAppLinkFields>;
}

export interface AppOptimizedCustomEventsFields {
  readonly app_id?: number;
  readonly app_name?: string;
  readonly event_names?: ReadonlyArray<string>;
}

export interface AppPublisherFields {
  readonly content_id?: string;
  readonly icon_url?: string;
  readonly id?: string;
  readonly name?: string;
  readonly platform?: string;
  readonly store_name?: string;
  readonly store_url?: string;
}

export interface AppRequestFields {
  readonly action_type?: string;
  readonly application?: ApplicationFields;
  readonly created_time?: string;
  readonly data?: string;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly message?: string;
  readonly object?: Readonly<Record<string, unknown>>;
  readonly to?: Readonly<Record<string, unknown>>;
}

export interface AppRequestFormerRecipientFields {
  readonly id?: string;
  readonly recipient_id?: string;
}

export interface ArAdsDataContainerFields {
  readonly camera_facing_override?: string;
  readonly creation_time?: string;
  readonly effect?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
  readonly is_published?: boolean;
  readonly last_modified_time?: string;
  readonly name?: string;
}

export interface AREffectFields {
  readonly creation_time?: string;
  readonly id?: string;
  readonly last_modified_time?: string;
  readonly name?: string;
  readonly status?: string;
  readonly surfaces?: ReadonlyArray<string>;
}

export interface AssignedUserFields {
  readonly business?: BusinessFields;
  readonly id?: string;
  readonly name?: string;
  readonly user_type?: string;
}

export interface AsyncRequestFields {
  readonly id?: number;
  readonly result?: string;
  readonly status?: number;
  readonly type?: number;
}

export type AsyncRequestStatus = "ERROR" | "EXECUTING" | "FINISHED" | "INITIALIZED";

export type AsyncRequestType = "ASYNC_ADGROUP_CREATION" | "BATCH_API" | "DRAFTS";

export interface AttributionSpecFields {
  readonly event_type?: string;
  readonly window_days?: number;
}

export interface AudienceFunnelFields {
  readonly audience_type_param_name?: string;
  readonly audience_type_param_tags?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly custom_audience_groups_info?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>;
}

export interface AudienceOverlapFields {
  readonly estimated_reach?: number;
  readonly id?: string;
  readonly name?: string;
  readonly overlap?: number;
}

export interface AudiencePermissionFields {
  readonly audience?: CustomAudienceFields;
  readonly share_account_id?: string;
  readonly share_account_name?: string;
}

export interface AudiencePermissionForActionsFields {
  readonly can_edit?: boolean;
  readonly can_see_insight?: boolean;
  readonly can_share?: boolean;
  readonly subtype_supports_lookalike?: boolean;
  readonly supports_recipient_lookalike?: boolean;
}

export interface AudienceSharingAccountValidFields {
  readonly account_id?: string;
  readonly account_type?: string;
  readonly business_id?: string;
  readonly business_name?: string;
  readonly can_ad_account_use_lookalike_container?: boolean;
  readonly sharing_agreement_status?: number;
}

export interface AudienceSharingRecipientAccountsFields {
  readonly account_id?: string;
  readonly account_name?: string;
  readonly account_type?: string;
  readonly business_id?: string;
  readonly business_name?: string;
  readonly can_ad_account_use_lookalike_container?: boolean;
  readonly sharing_agreement_status?: number;
}

export interface AudioAssetFields {
  readonly all_ddex_featured_artists?: string;
  readonly all_ddex_main_artists?: string;
  readonly audio_cluster_id?: string;
  readonly cover_image_source?: string;
  readonly description?: string;
  readonly display_artist?: string;
  readonly download_hd_url?: string;
  readonly download_sd_url?: string;
  readonly duration_in_ms?: number;
  readonly freeform_genre?: string;
  readonly grid?: string;
  readonly id?: string;
  readonly is_test?: boolean;
  readonly original_release_date?: string;
  readonly owner?: PageFields;
  readonly parental_warning_type?: string;
  readonly subtitle?: string;
  readonly title?: string;
  readonly title_with_featured_artists?: string;
  readonly upc?: string;
}

export interface AudioCopyrightFields {
  readonly audio_asset?: AudioAssetFields;
  readonly creation_time?: string;
  readonly displayed_matches_count?: number;
  readonly id?: string;
  readonly in_conflict?: boolean;
  readonly isrc?: string;
  readonly match_rule?: VideoCopyrightRuleFields;
  readonly ownership_countries?: ReadonlyArray<string>;
  readonly ownership_details?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly reference_file_status?: string;
  readonly ridge_monitoring_status?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly update_time?: string;
  readonly whitelisted_fb_users?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly whitelisted_ig_users?: ReadonlyArray<string>;
}

export interface AudioIsrcFields {
  readonly all_kg_featured_artists?: string;
  readonly all_kg_main_artists?: string;
  readonly artist_profile_picture_url?: string;
  readonly canonical_audio_asset?: AudioAssetFields;
  readonly id?: string;
  readonly isrc?: string;
  readonly publishing_rights_data?: Readonly<Record<string, unknown>>;
  readonly top_searchable_artist_id?: string;
  readonly top_searchable_artist_name?: string;
  readonly top_searchable_artist_profile_pic_url?: string;
}

export interface AudioSubLabelFields {
  readonly expiration_timestamp?: string;
  readonly flagged_timestamp?: string;
  readonly id?: string;
  readonly label_name?: string;
  readonly last_update_timestamp?: string;
  readonly num_audio_tracks?: number;
  readonly state?: string;
}

export interface AudioVisualReferenceMatchFields {
  readonly audio_conflicting_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly audio_current_conflict_resolved_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly audio_segment_resolution_history?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly conflict_status?: string;
  readonly conflict_type?: string;
  readonly conflicting_countries?: ReadonlyArray<string>;
  readonly country_resolution_history?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly creation_time?: string;
  readonly current_conflict_resolved_countries?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly displayed_match_state?: string;
  readonly dispute_form_data_entries_with_translations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly expiration_time?: string;
  readonly id?: string;
  readonly is_disputable?: boolean;
  readonly match_state?: string;
  readonly matched_overlap_percentage?: number;
  readonly matched_owner_match_duration_in_sec?: number;
  readonly matched_reference_owner_v2?: Readonly<Record<string, unknown>>;
  readonly modification_history?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly num_matches_on_matched_side?: number;
  readonly num_matches_on_ref_side?: number;
  readonly ref_owner_match_duration_in_sec?: number;
  readonly reference_overlap_percentage?: number;
  readonly reference_owner_v2?: Readonly<Record<string, unknown>>;
  readonly rejection_form_data_entries_with_translations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly resolution_details?: string;
  readonly resolution_reason?: string;
  readonly update_time?: string;
  readonly views_on_matched_side?: number;
  readonly visual_conflicting_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly visual_current_conflict_resolved_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly visual_segment_resolution_history?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface AuthLinkFields {
  readonly link?: string;
}

export interface AutomotiveModelFields {
  readonly applinks?: CatalogItemAppLinksFields;
  readonly automotive_model_id?: string;
  readonly availability?: string;
  readonly body_style?: string;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly description?: string;
  readonly drivetrain?: string;
  readonly exterior_color?: string;
  readonly finance_description?: string;
  readonly finance_type?: string;
  readonly fuel_type?: string;
  readonly generation?: string;
  readonly id?: string;
  readonly image_fetch_status?: AutomotiveModelImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly interior_color?: string;
  readonly interior_upholstery?: string;
  readonly make?: string;
  readonly model?: string;
  readonly price?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly title?: string;
  readonly transmission?: string;
  readonly trim?: string;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly visibility?: AutomotiveModelVisibility;
  readonly year?: number;
}

export type AutomotiveModelImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type AutomotiveModelVisibility = "PUBLISHED" | "STAGING";

export interface AvatarFields {
  readonly id?: string;
}

export interface BAPIDomainFields {
  readonly domain?: string;
  readonly in_cool_down_until?: number;
  readonly is_eligible_for_vo?: boolean;
  readonly is_in_cool_down?: boolean;
}

export interface BCPCampaignFields {
  readonly ads_permission_required?: boolean;
  readonly application_deadline?: string;
  readonly campaign_goal?: string;
  readonly campaign_goal_other?: string;
  readonly content_delivery_deadline?: string;
  readonly content_delivery_start_date?: string;
  readonly content_requirements?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly content_requirements_description?: string;
  readonly currency?: string;
  readonly deal_negotiation_type?: string;
  readonly description?: string;
  readonly has_free_product?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly payment_amount_for_ads?: number;
  readonly payment_amount_for_content?: number;
  readonly payment_description?: string;
}

export interface BidScheduleFields {
  readonly ad_object_id?: string;
  readonly bid_recurrence_type?: string;
  readonly bid_timezone?: string;
  readonly bid_value?: number;
  readonly id?: string;
  readonly status?: string;
  readonly time_end?: string;
  readonly time_start?: string;
}

export interface BlindPigFields {
  readonly id?: string;
  readonly name?: string;
}

export interface BlockedUserInfoFields {
  readonly block_time?: string;
  readonly block_type?: string;
  readonly fbid?: string;
  readonly name?: string;
  readonly username?: string;
}

export interface BrandedContentAdErrorFields {
  readonly blame_field_spec?: ReadonlyArray<string>;
  readonly error_code?: number;
  readonly error_description?: string;
  readonly error_message?: string;
  readonly error_placement?: string;
  readonly error_severity?: string;
  readonly help_center_id?: number;
}

export interface BrandedContentEligibleSponsorIDsFields {
  readonly fb_page?: PageFields;
  readonly ig_account_v2?: IGUserFields;
  readonly ig_approval_needed?: boolean;
}

export interface BrandedContentFBPromodeUserFields {
  readonly delegate_page_for_ads_only_id?: string;
  readonly is_iabp?: boolean;
  readonly is_managed?: boolean;
  readonly name?: string;
  readonly profile_picture_url?: string;
}

export interface BrandedContentShadowIGMediaIDFields {
  readonly eligibility_errors?: ReadonlyArray<string>;
  readonly has_permission_for_partnership_ad?: boolean;
  readonly id?: string;
  readonly is_creator_allowlisted?: boolean;
  readonly linked_products?: ReadonlyArray<ProductItemFields>;
  readonly owner_id?: string;
  readonly permalink?: string;
  readonly product_suggestions?: ReadonlyArray<ProductItemFields>;
  readonly recommended_campaign_objectives?: ReadonlyArray<string>;
}

export type BrandedContentShadowIGMediaIDMediaRelationship = "IS_TAGGED" | "OWNED";

export interface BrandedContentShadowIGUserIDFields {
  readonly id?: string;
}

export interface BrandRequestFields {
  readonly ad_countries?: ReadonlyArray<string>;
  readonly additional_contacts?: ReadonlyArray<string>;
  readonly approval_level?: number;
  readonly cells?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly countries?: ReadonlyArray<string>;
  readonly deny_reason?: string;
  readonly end_time?: string;
  readonly estimated_reach?: number;
  readonly id?: string;
  readonly is_multicell?: boolean;
  readonly locale?: string;
  readonly max_age?: number;
  readonly min_age?: number;
  readonly questions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly region?: string;
  readonly request_status?: string;
  readonly review_date?: string;
  readonly start_time?: string;
  readonly status?: string;
  readonly submit_date?: string;
  readonly total_budget?: number;
}

export interface BrandSafetyBlockListUsageFields {
  readonly current_usage?: number;
  readonly new_usage?: number;
  readonly platform?: string;
  readonly position?: string;
  readonly threshold?: number;
}

export interface BrandSafetyCampaignConfigFields {
  readonly comment_moderation_filter?: string;
  readonly fb_comment_moderation_filter?: string;
  readonly ig_comment_moderation_filter?: string;
  readonly threads_comment_moderation_filter?: string;
}

export interface BrandSafetyDownloadableFields {
  readonly account_context_id?: string;
  readonly async_job_percent_complete?: number;
  readonly async_job_status?: string;
  readonly file_name?: string;
  readonly id?: string;
  readonly request_surface?: string;
  readonly url?: string;
}

export interface BroadTargetingCategoriesFields {
  readonly category_description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parent_category?: string;
  readonly path?: ReadonlyArray<string>;
  readonly size_lower_bound?: number;
  readonly size_upper_bound?: number;
  readonly source?: string;
  readonly type?: number;
  readonly type_name?: string;
  readonly untranslated_name?: string;
  readonly untranslated_parent_name?: string;
}

export type BusinessActionSource = "PHYSICAL_STORE" | "WEBSITE";

export interface BusinessAdAccountRequestFields {
  readonly ad_account?: AdAccountFields;
  readonly id?: string;
}

export interface BusinessAdsReportingReportSpecsFields {
  readonly action_report_time?: string;
  readonly ad_account_id?: string;
  readonly ad_account_ids?: ReadonlyArray<string>;
  readonly ad_accounts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly attribution_windows?: ReadonlyArray<string>;
  readonly business?: BusinessFields;
  readonly business_asset_group?: BusinessAssetGroupFields;
  readonly comparison_date_interval?: Readonly<Record<string, unknown>>;
  readonly creation_source?: string;
  readonly creation_time?: string;
  readonly currency?: string;
  readonly date_preset?: string;
  readonly default_attribution_windows?: ReadonlyArray<string>;
  readonly filtering?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly formatting?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly id?: string;
  readonly last_access_by?: ProfileFields;
  readonly last_access_time?: string;
  readonly last_report_snapshot_id?: string;
  readonly last_report_snapshot_time?: string;
  readonly last_shared_report_expiration?: string;
  readonly limit?: number;
  readonly locked_dimensions?: number;
  readonly report_name?: string;
  readonly report_snapshot_async_percent_completion?: number;
  readonly report_snapshot_async_status?: string;
  readonly schedule_frequency?: string;
  readonly scope?: string;
  readonly show_deprecate_aw_banner?: boolean;
  readonly sorting?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly start_date?: string;
  readonly status?: string;
  readonly subscribers?: ReadonlyArray<string>;
  readonly update_by?: ProfileFields;
  readonly update_time?: string;
  readonly user?: ProfileFields;
  readonly user_dimensions?: ReadonlyArray<string>;
  readonly user_metrics?: ReadonlyArray<string>;
  readonly view_type?: string;
}

export interface BusinessAdvertisableApplicationsResultFields {
  readonly are_app_events_unavailable?: boolean;
  readonly business?: BusinessFields;
  readonly has_insight_permission?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly photo_url?: string;
}

export interface BusinessAgreementFields {
  readonly id?: string;
  readonly request_status?: string;
}

export type BusinessAgreementRequestStatus = "APPROVE" | "CANCELED" | "DECLINE" | "EXPIRED" | "IN_PROGRESS" | "MMA_DIRECT_ASSETS_APPROVED" | "MMA_DIRECT_ASSETS_DECLINED" | "MMA_DIRECT_ASSETS_EXPIRED" | "MMA_DIRECT_ASSETS_PENDING" | "PENDING" | "PENDING_EMAIL_VERIFICATION" | "PENDING_INTEGRITY_REVIEW";

export interface BusinessApplicationRequestFields {
  readonly application?: ApplicationFields;
  readonly id?: string;
}

export type BusinessAssetGroupAdaccountTasks = "AA_ANALYZE" | "ADVERTISE" | "ANALYZE" | "DRAFT" | "MANAGE";

export interface BusinessAssetGroupFields {
  readonly id?: string;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
}

export type BusinessAssetGroupOfflineConversionDataSetTasks = "AA_ANALYZE" | "ADVERTISE" | "MANAGE" | "UPLOAD" | "VIEW";

export type BusinessAssetGroupPageTasks = "ADVERTISE" | "ANALYZE" | "CASHIER_ROLE" | "CREATE_CONTENT" | "GLOBAL_STRUCTURE_MANAGEMENT" | "MANAGE" | "MANAGE_JOBS" | "MANAGE_LEADS" | "MESSAGING" | "MODERATE" | "MODERATE_COMMUNITY" | "PAGES_MESSAGING" | "PAGES_MESSAGING_SUBSCRIPTIONS" | "PROFILE_PLUS_ADVERTISE" | "PROFILE_PLUS_ANALYZE" | "PROFILE_PLUS_CREATE_CONTENT" | "PROFILE_PLUS_CREATIVE_MANAGEMENT" | "PROFILE_PLUS_CREATOR_MANAGEMENT" | "PROFILE_PLUS_FACEBOOK_ACCESS" | "PROFILE_PLUS_FULL_CONTROL" | "PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT" | "PROFILE_PLUS_MANAGE" | "PROFILE_PLUS_MANAGE_LEADS" | "PROFILE_PLUS_MESSAGING" | "PROFILE_PLUS_MODERATE" | "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY" | "PROFILE_PLUS_REVENUE" | "READ_PAGE_MAILBOXES" | "VIEW_MONETIZATION_INSIGHTS";

export type BusinessAssetGroupPixelTasks = "AA_ANALYZE" | "ADVERTISE" | "ANALYZE" | "EDIT" | "UPLOAD";

export interface BusinessAssetSharingAgreementFields {
  readonly id?: string;
  readonly initiator?: BusinessFields;
  readonly recipient?: BusinessFields;
  readonly relationship_type?: ReadonlyArray<string>;
  readonly request_status?: string;
  readonly request_type?: string;
}

export type BusinessAssetSharingAgreementRequestStatus = "APPROVE" | "CANCELED" | "DECLINE" | "EXPIRED" | "IN_PROGRESS" | "MMA_DIRECT_ASSETS_APPROVED" | "MMA_DIRECT_ASSETS_DECLINED" | "MMA_DIRECT_ASSETS_EXPIRED" | "MMA_DIRECT_ASSETS_PENDING" | "PENDING" | "PENDING_EMAIL_VERIFICATION" | "PENDING_INTEGRITY_REVIEW";

export type BusinessBusinessVertical = "ADULT_PRODUCTS_AND_SERVICES" | "ALCOHOL_AND_TOBACCO" | "AUTOMOTIVE_DEALERS" | "BODY_PARTS_FLUIDS" | "BUSINESS_AND_UTILITY" | "CONTENT_AND_APPS" | "CREATORS_AND_CELEBRITIES" | "DATING" | "DRUGS" | "ENDANGERED_SPECIES" | "FIREARMS" | "FRAUDULENT_MISLEADING_OFFENSIVE" | "GAMBLING" | "GROCERY_AND_CONVENIENCE_STORE" | "HAZARDOUS_GOODS_AND_MATERIALS" | "HOME" | "HOME_AND_AUTO_MANUFACTURING" | "LIFESTYLE" | "LIVE_NON_ENDANGERED_SPECIES" | "LOANS_DEBT_COLLECTION_BAIL_BONDS" | "LOCAL_EVENTS" | "MEDICAL_HEALTHCARE" | "MULTILEVEL_MARKETING" | "NON_PROFIT_AND_RELIGIOUS_ORGS" | "PROFESSIONAL" | "REAL_VIRTUAL_FAKE_CURRENCY" | "RESTAURANTS" | "RETAIL" | "TRANSPORTATION_AND_ACCOMMODATION";

export interface BusinessCreativeFields {
  readonly creation_time?: string;
  readonly duration?: number;
  readonly hash?: string;
  readonly height?: number;
  readonly id?: string;
  readonly name?: string;
  readonly thumbnail?: string;
  readonly type?: string;
  readonly url?: string;
  readonly video_id?: string;
  readonly width?: number;
}

export interface BusinessCreativeFolderFields {
  readonly business?: BusinessFields;
  readonly creation_time?: string;
  readonly creative_insight_permissions?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly description?: string;
  readonly id?: string;
  readonly media_library_url?: string;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
}

export interface BusinessCreativeInsightsFields {
  readonly actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly age?: string;
  readonly country?: string;
  readonly date_end?: string;
  readonly date_start?: string;
  readonly device_platform?: string;
  readonly gender?: string;
  readonly impressions?: number;
  readonly inline_link_clicks?: number;
  readonly objective?: string;
  readonly optimization_goal?: string;
  readonly platform_position?: string;
  readonly publisher_platform?: string;
  readonly quality_ranking?: string;
  readonly video_play_actions?: ReadonlyArray<AdsActionStatsFields>;
  readonly video_thruplay_watched_actions?: ReadonlyArray<AdsActionStatsFields>;
}

export interface BusinessFields {
  readonly block_offline_analytics?: boolean;
  readonly collaborative_ads_managed_partner_business_info?: ManagedPartnerBusinessFields;
  readonly collaborative_ads_managed_partner_eligibility?: BusinessManagedPartnerEligibilityFields;
  readonly collaborative_ads_partner_premium_options?: BusinessPartnerPremiumOptionsFields;
  readonly created_by?: Readonly<Record<string, unknown>>;
  readonly created_time?: string;
  readonly extended_updated_time?: string;
  readonly id?: string;
  readonly is_hidden?: boolean;
  readonly link?: string;
  readonly marketing_messages_onboarding_status?: MarketingMessagesOnboardingStatusFields;
  readonly name?: string;
  readonly primary_page?: PageFields;
  readonly profile_picture_uri?: string;
  readonly timezone_id?: number;
  readonly two_factor_type?: string;
  readonly updated_by?: Readonly<Record<string, unknown>>;
  readonly updated_time?: string;
  readonly user_access_expire_time?: string;
  readonly verification_status?: BusinessVerificationStatus;
  readonly vertical?: string;
  readonly vertical_id?: number;
  readonly whatsapp_business_manager_messaging_limit?: BusinessWhatsappBusinessManagerMessagingLimit;
}

export interface BusinessFranchiseConfigFields {
  readonly active_partner_count?: number;
  readonly agency_business?: BusinessFields;
  readonly agency_business_asset_group?: BusinessAssetGroupFields;
  readonly brand_name?: string;
  readonly business?: BusinessFields;
  readonly business_vertical?: string;
  readonly id?: string;
  readonly partner_count?: number;
  readonly pending_agency_business?: string;
  readonly program_count?: number;
  readonly shared_business_asset_group?: BusinessAssetGroupFields;
  readonly shared_creative_folder_count?: number;
  readonly shared_custom_audience_count?: number;
}

export interface BusinessImageFields {
  readonly business?: BusinessFields;
  readonly creation_time?: string;
  readonly hash?: string;
  readonly height?: number;
  readonly id?: string;
  readonly media_library_url?: string;
  readonly name?: string;
  readonly url?: string;
  readonly url_128?: string;
  readonly width?: number;
}

export interface BusinessImageTBusinessFolderPathItemFields {
  readonly id?: string;
  readonly parent_folder_id?: string;
  readonly type?: string;
}

export type BusinessImageValidationAdPlacements = "AUDIENCE_NETWORK_INSTREAM_VIDEO" | "AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE" | "AUDIENCE_NETWORK_REWARDED_VIDEO" | "DESKTOP_FEED_STANDARD" | "FACEBOOK_STORY_MOBILE" | "FACEBOOK_STORY_STICKER_MOBILE" | "INSTAGRAM_STANDARD" | "INSTAGRAM_STORY" | "INSTANT_ARTICLE_STANDARD" | "INSTREAM_BANNER_DESKTOP" | "INSTREAM_BANNER_MOBILE" | "INSTREAM_VIDEO_DESKTOP" | "INSTREAM_VIDEO_IMAGE" | "INSTREAM_VIDEO_MOBILE" | "MESSENGER_MOBILE_INBOX_MEDIA" | "MESSENGER_MOBILE_STORY_MEDIA" | "MOBILE_FEED_STANDARD" | "MOBILE_FULLWIDTH" | "MOBILE_INTERSTITIAL" | "MOBILE_MEDIUM_RECTANGLE" | "MOBILE_NATIVE" | "RIGHT_COLUMN_STANDARD" | "SUGGESTED_VIDEO_MOBILE";

export interface BusinessManagedPartnerEligibilityFields {
  readonly is_eligible?: boolean;
  readonly reason_code?: string;
  readonly reason_description?: string;
}

export interface BusinessMediaAdPlacementValidationResultFields {
  readonly ad_placement?: string;
  readonly ad_placement_label?: string;
  readonly error_messages?: ReadonlyArray<string>;
  readonly is_valid?: boolean;
}

export interface BusinessObjectFields {
  readonly asset?: Readonly<Record<string, unknown>>;
  readonly asset_type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly picture?: string;
}

export interface BusinessObjectTransferOwnershipAgreementFields {
  readonly id?: string;
  readonly receiving_business?: BusinessFields;
  readonly requesting_business?: BusinessFields;
  readonly status?: string;
}

export interface BusinessOwnedObjectOnBehalfOfRequestFields {
  readonly business_owned_object?: string;
  readonly id?: string;
  readonly receiving_business?: BusinessFields;
  readonly requesting_business?: BusinessFields;
  readonly status?: string;
}

export type BusinessOwnedObjectOnBehalfOfRequestStatus = "APPROVE" | "CANCELED" | "DECLINE" | "EXPIRED" | "IN_PROGRESS" | "MMA_DIRECT_ASSETS_APPROVED" | "MMA_DIRECT_ASSETS_DECLINED" | "MMA_DIRECT_ASSETS_EXPIRED" | "MMA_DIRECT_ASSETS_PENDING" | "PENDING" | "PENDING_EMAIL_VERIFICATION" | "PENDING_INTEGRITY_REVIEW";

export type BusinessPagePermittedTasks = "ADVERTISE" | "ANALYZE" | "CASHIER_ROLE" | "CREATE_CONTENT" | "GLOBAL_STRUCTURE_MANAGEMENT" | "MANAGE" | "MANAGE_JOBS" | "MANAGE_LEADS" | "MESSAGING" | "MODERATE" | "MODERATE_COMMUNITY" | "PAGES_MESSAGING" | "PAGES_MESSAGING_SUBSCRIPTIONS" | "PROFILE_PLUS_ADVERTISE" | "PROFILE_PLUS_ANALYZE" | "PROFILE_PLUS_CREATE_CONTENT" | "PROFILE_PLUS_CREATIVE_MANAGEMENT" | "PROFILE_PLUS_CREATOR_MANAGEMENT" | "PROFILE_PLUS_FACEBOOK_ACCESS" | "PROFILE_PLUS_FULL_CONTROL" | "PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT" | "PROFILE_PLUS_MANAGE" | "PROFILE_PLUS_MANAGE_LEADS" | "PROFILE_PLUS_MESSAGING" | "PROFILE_PLUS_MODERATE" | "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY" | "PROFILE_PLUS_REVENUE" | "READ_PAGE_MAILBOXES" | "VIEW_MONETIZATION_INSIGHTS";

export interface BusinessPageRequestFields {
  readonly id?: string;
  readonly page?: PageFields;
}

export interface BusinessPartnerPremiumOptionsFields {
  readonly enable_basket_insight?: boolean;
  readonly enable_extended_audience_retargeting?: boolean;
  readonly retailer_custom_audience_config?: Readonly<Record<string, unknown>>;
}

export type BusinessPermittedTasks = "ADVERTISE" | "ANALYZE" | "CASHIER_ROLE" | "CREATE_CONTENT" | "GLOBAL_STRUCTURE_MANAGEMENT" | "MANAGE" | "MANAGE_JOBS" | "MANAGE_LEADS" | "MESSAGING" | "MODERATE" | "MODERATE_COMMUNITY" | "PAGES_MESSAGING" | "PAGES_MESSAGING_SUBSCRIPTIONS" | "PROFILE_PLUS_ADVERTISE" | "PROFILE_PLUS_ANALYZE" | "PROFILE_PLUS_CREATE_CONTENT" | "PROFILE_PLUS_CREATIVE_MANAGEMENT" | "PROFILE_PLUS_CREATOR_MANAGEMENT" | "PROFILE_PLUS_FACEBOOK_ACCESS" | "PROFILE_PLUS_FULL_CONTROL" | "PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT" | "PROFILE_PLUS_MANAGE" | "PROFILE_PLUS_MANAGE_LEADS" | "PROFILE_PLUS_MESSAGING" | "PROFILE_PLUS_MODERATE" | "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY" | "PROFILE_PLUS_REVENUE" | "READ_PAGE_MAILBOXES" | "VIEW_MONETIZATION_INSIGHTS";

export interface BusinessProductCatalogTOSFields {
  readonly accepted?: boolean;
  readonly content?: string;
}

export interface BusinessProjectFields {
  readonly business?: BusinessFields;
  readonly created_time?: string;
  readonly creator?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly name?: string;
}

export interface BusinessRequestFields {
  readonly accessor?: BusinessFields;
  readonly creation_time?: string;
  readonly id?: string;
  readonly object_id?: string;
  readonly object_type?: string;
  readonly permitted_tasks?: ReadonlyArray<string>;
  readonly request_status?: string;
  readonly request_type?: string;
  readonly requestor?: string;
}

export interface BusinessRoleRequestFields {
  readonly created_by?: Readonly<Record<string, unknown>>;
  readonly created_time?: string;
  readonly email?: string;
  readonly expiration_time?: string;
  readonly expiry_time?: string;
  readonly finance_role?: string;
  readonly id?: string;
  readonly invite_link?: string;
  readonly invited_user_type?: ReadonlyArray<string>;
  readonly ip_role?: string;
  readonly owner?: BusinessFields;
  readonly role?: string;
  readonly status?: string;
  readonly tasks?: ReadonlyArray<string>;
  readonly updated_by?: Readonly<Record<string, unknown>>;
  readonly updated_time?: string;
}

export type BusinessRoleRequestRole = "ADMIN" | "ADS_RIGHTS_REVIEWER" | "DEFAULT" | "DEVELOPER" | "EMPLOYEE" | "FINANCE_ANALYST" | "FINANCE_EDIT" | "FINANCE_EDITOR" | "FINANCE_VIEW" | "MANAGE" | "PARTNER_CENTER_ADMIN" | "PARTNER_CENTER_ANALYST" | "PARTNER_CENTER_EDUCATION" | "PARTNER_CENTER_MARKETING" | "PARTNER_CENTER_OPERATIONS";

export type BusinessRoleRequestTasks = "ADMIN" | "ADS_RIGHTS_REVIEWER" | "DEFAULT" | "DEVELOPER" | "EMPLOYEE" | "FINANCE_ANALYST" | "FINANCE_EDIT" | "FINANCE_EDITOR" | "FINANCE_VIEW" | "MANAGE" | "PARTNER_CENTER_ADMIN" | "PARTNER_CENTER_ANALYST" | "PARTNER_CENTER_EDUCATION" | "PARTNER_CENTER_MARKETING" | "PARTNER_CENTER_OPERATIONS";

export interface BusinessSettingLogsDataFields {
  readonly actor?: Readonly<Record<string, unknown>>;
  readonly event_object?: Readonly<Record<string, unknown>>;
  readonly event_time?: string;
  readonly event_type?: string;
  readonly extra_data?: Readonly<Record<string, unknown>>;
}

export type BusinessSurveyBusinessType = "ADVERTISER" | "AGENCY" | "APP_DEVELOPER" | "PUBLISHER";

export interface BusinessTagFields {
  readonly id?: string;
  readonly name?: string;
}

export type BusinessTimezoneId = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99" | "100" | "101" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "117" | "118" | "119" | "120" | "121" | "122" | "123" | "124" | "125" | "126" | "127" | "128" | "129" | "130" | "131" | "132" | "133" | "134" | "135" | "136" | "137" | "138" | "139" | "140" | "141" | "142" | "143" | "144" | "145" | "146" | "147" | "148" | "149" | "150" | "151" | "152" | "153" | "154" | "155" | "156" | "157" | "158" | "159" | "160" | "161" | "162" | "163" | "164" | "165" | "166" | "167" | "168" | "169" | "170" | "171" | "172" | "173" | "174" | "175" | "176" | "177" | "178" | "179" | "180" | "181" | "182" | "183" | "184" | "185" | "186" | "187" | "188" | "189" | "190" | "191" | "192" | "193" | "194" | "195" | "196" | "197" | "198" | "199" | "200" | "201" | "202" | "203" | "204" | "205" | "206" | "207" | "208" | "209" | "210" | "211" | "212" | "213" | "214" | "215" | "216" | "217" | "218" | "219" | "220" | "221" | "222" | "223" | "224" | "225" | "226" | "227" | "228" | "229" | "230" | "231" | "232" | "233" | "234" | "235" | "236" | "237" | "238" | "239" | "240" | "241" | "242" | "243" | "244" | "245" | "246" | "247" | "248" | "249" | "250" | "251" | "252" | "253" | "254" | "255" | "256" | "257" | "258" | "259" | "260" | "261" | "262" | "263" | "264" | "265" | "266" | "267" | "268" | "269" | "270" | "271" | "272" | "273" | "274" | "275" | "276" | "277" | "278" | "279" | "280" | "281" | "282" | "283" | "284" | "285" | "286" | "287" | "288" | "289" | "290" | "291" | "292" | "293" | "294" | "295" | "296" | "297" | "298" | "299" | "300" | "301" | "302" | "303" | "304" | "305" | "306" | "307" | "308" | "309" | "310" | "311" | "312" | "313" | "314" | "315" | "316" | "317" | "318" | "319" | "320" | "321" | "322" | "323" | "324" | "325" | "326" | "327" | "328" | "329" | "330" | "331" | "332" | "333" | "334" | "335" | "336" | "337" | "338" | "339" | "340" | "341" | "342" | "343" | "344" | "345" | "346" | "347" | "348" | "349" | "350" | "351" | "352" | "353" | "354" | "355" | "356" | "357" | "358" | "359" | "360" | "361" | "362" | "363" | "364" | "365" | "366" | "367" | "368" | "369" | "370" | "371" | "372" | "373" | "374" | "375" | "376" | "377" | "378" | "379" | "380" | "381" | "382" | "383" | "384" | "385" | "386" | "387" | "388" | "389" | "390" | "391" | "392" | "393" | "394" | "395" | "396" | "397" | "398" | "399" | "400" | "401" | "402" | "403" | "404" | "405" | "406" | "407" | "408" | "409" | "410" | "411" | "412" | "413" | "414" | "415" | "416" | "417" | "418" | "419" | "420" | "421" | "422" | "423" | "424" | "425" | "426" | "427" | "428" | "429" | "430" | "431" | "432" | "433" | "434" | "435" | "436" | "437" | "438" | "439" | "440" | "441" | "442" | "443" | "444" | "445" | "446" | "447" | "448" | "449" | "450" | "451" | "452" | "453" | "454" | "455" | "456" | "457" | "458" | "459" | "460" | "461" | "462" | "463" | "464" | "465" | "466" | "467" | "468" | "469" | "470" | "471" | "472" | "473" | "474" | "475" | "476" | "477" | "478" | "479" | "480" | "481" | "482" | "483" | "484" | "485" | "486" | "487" | "488" | "489" | "490" | "491" | "492" | "493" | "494" | "495" | "496" | "497" | "498" | "499" | "500" | "501" | "502" | "503" | "504" | "505" | "506" | "507" | "508" | "509" | "510" | "511" | "512" | "513" | "514" | "515" | "516" | "517" | "518" | "519" | "520" | "521" | "522" | "523" | "524" | "525" | "526" | "527" | "528" | "529" | "530" | "531" | "532" | "533" | "534" | "535" | "536" | "537" | "538" | "539" | "540" | "541" | "542" | "543" | "544" | "545" | "546" | "547" | "548" | "549" | "550" | "551" | "552" | "553" | "554" | "555" | "556" | "557" | "558" | "559" | "560" | "561" | "562" | "563" | "564" | "565" | "566" | "567" | "568" | "569" | "570" | "571" | "572" | "573" | "574" | "575" | "576" | "577" | "578" | "579" | "580" | "581" | "582" | "583" | "584" | "585" | "586" | "587" | "588" | "589" | "590" | "591" | "592";

export interface BusinessTrafficAnalysisReportFields {
  readonly audience_location?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly event_category?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly traffic_analysis_impressions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type BusinessTwoFactorType = "admin_required" | "all_required" | "none";

export interface BusinessUserFields {
  readonly business?: BusinessFields;
  readonly business_role_request?: BusinessRoleRequestFields;
  readonly email?: string;
  readonly finance_permission?: string;
  readonly first_name?: string;
  readonly id?: string;
  readonly ip_permission?: string;
  readonly last_name?: string;
  readonly marked_for_removal?: boolean;
  readonly name?: string;
  readonly pending_email?: string;
  readonly role?: string;
  readonly tasks?: ReadonlyArray<string>;
  readonly title?: string;
  readonly two_fac_status?: string;
}

export type BusinessUserInvitedUserType = "FB" | "MWA";

export type BusinessUserRole = "ADMIN" | "ADS_RIGHTS_REVIEWER" | "DEFAULT" | "DEVELOPER" | "EMPLOYEE" | "FINANCE_ANALYST" | "FINANCE_EDIT" | "FINANCE_EDITOR" | "FINANCE_VIEW" | "MANAGE" | "PARTNER_CENTER_ADMIN" | "PARTNER_CENTER_ANALYST" | "PARTNER_CENTER_EDUCATION" | "PARTNER_CENTER_MARKETING" | "PARTNER_CENTER_OPERATIONS";

export type BusinessUserTasks = "ADMIN" | "ADS_RIGHTS_REVIEWER" | "DEFAULT" | "DEVELOPER" | "EMPLOYEE" | "FINANCE_ANALYST" | "FINANCE_EDIT" | "FINANCE_EDITOR" | "FINANCE_VIEW" | "MANAGE" | "PARTNER_CENTER_ADMIN" | "PARTNER_CENTER_ANALYST" | "PARTNER_CENTER_EDUCATION" | "PARTNER_CENTER_MARKETING" | "PARTNER_CENTER_OPERATIONS";

export type BusinessVerificationStatus = "expired" | "failed" | "ineligible" | "not_verified" | "pending" | "pending_need_more_info" | "pending_submission" | "rejected" | "revoked" | "verified";

export type BusinessVertical = "ADVERTISING" | "AUTOMOTIVE" | "CONSUMER_PACKAGED_GOODS" | "ECOMMERCE" | "EDUCATION" | "ENERGY_AND_UTILITIES" | "ENTERTAINMENT_AND_MEDIA" | "FINANCIAL_SERVICES" | "GAMING" | "GOVERNMENT_AND_POLITICS" | "HEALTH" | "LUXURY" | "MARKETING" | "NON_PROFIT" | "NOT_SET" | "ORGANIZATIONS_AND_ASSOCIATIONS" | "OTHER" | "PROFESSIONAL_SERVICES" | "RESTAURANT" | "RETAIL" | "TECHNOLOGY" | "TELECOM" | "TRAVEL";

export interface BusinessVideoFields {
  readonly business?: BusinessFields;
  readonly id?: string;
  readonly media_library_url?: string;
  readonly name?: string;
  readonly video?: AdVideoFields;
}

export interface BusinessVideoTBusinessFolderPathItemFields {
  readonly id?: string;
  readonly parent_folder_id?: string;
  readonly type?: string;
}

export type BusinessWhatsappBusinessManagerMessagingLimit = "TIER_100K" | "TIER_10K" | "TIER_250" | "TIER_2K" | "TIER_50" | "TIER_UNLIMITED" | "UNTIERED";

export interface CalibratorExistingRuleFields {
  readonly "7d_volume"?: number;
  readonly creation_source?: string;
  readonly creation_time?: string;
  readonly creator?: string;
  readonly event_type?: string;
  readonly id?: string;
  readonly rule?: string;
  readonly rule_type?: string;
  readonly sample_urls?: ReadonlyArray<string>;
  readonly status?: string;
  readonly transforms?: ReadonlyArray<string>;
}

export interface CallAdsPhoneDataFields {
  readonly call_ads_phone_data_use_case?: string;
  readonly callback_variant?: string;
  readonly destination_website_url?: string;
  readonly id?: string;
  readonly page?: PageFields;
  readonly phone_number?: string;
}

export interface CampaignActionsDataFields {

}

export type CampaignBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "LOWEST_COST_WITH_MIN_ROAS";

export type CampaignConfiguredStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export type CampaignDatePreset = "data_maximum" | "last_14d" | "last_28d" | "last_30d" | "last_3d" | "last_7d" | "last_90d" | "last_month" | "last_quarter" | "last_week_mon_sun" | "last_week_sun_sat" | "last_year" | "maximum" | "this_month" | "this_quarter" | "this_week_mon_today" | "this_week_sun_today" | "this_year" | "today" | "yesterday";

export type CampaignEffectiveStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "IN_PROCESS" | "PAUSED" | "WITH_ISSUES";

export type CampaignExecutionOptions = "include_recommendations" | "validate_only";

export interface CampaignFields {
  readonly account_id?: string;
  readonly adlabels?: ReadonlyArray<AdLabelFields>;
  readonly advantage_state_info?: AdCampaignGroupAdvantageStateFields;
  readonly bid_strategy?: CampaignBidStrategy;
  readonly boosted_object_id?: string;
  readonly brand_lift_studies?: ReadonlyArray<AdStudyFields>;
  readonly budget_rebalance_flag?: boolean;
  readonly budget_remaining?: string;
  readonly buying_type?: string;
  readonly campaign_group_active_time?: string;
  readonly can_create_brand_lift_study?: boolean;
  readonly can_use_spend_cap?: boolean;
  readonly configured_status?: CampaignConfiguredStatus;
  readonly created_time?: string;
  readonly daily_budget?: string;
  readonly effective_status?: CampaignEffectiveStatus;
  readonly frequency_control_specs?: ReadonlyArray<AdCampaignFrequencyControlSpecsFields>;
  readonly has_secondary_skadnetwork_reporting?: boolean;
  readonly id?: string;
  readonly is_adset_budget_sharing_enabled?: boolean;
  readonly is_budget_schedule_enabled?: boolean;
  readonly is_direct_send_campaign?: boolean;
  readonly is_message_campaign?: boolean;
  readonly is_meta_moment_maker_enabled?: boolean;
  readonly is_reels_trending_ads_enabled?: boolean;
  readonly is_skadnetwork_attribution?: boolean;
  readonly issues_info?: ReadonlyArray<AdCampaignIssuesInfoFields>;
  readonly last_budget_toggling_time?: string;
  readonly lifetime_budget?: string;
  readonly name?: string;
  readonly objective?: string;
  readonly pacing_type?: ReadonlyArray<string>;
  readonly primary_attribution?: string;
  readonly promoted_object?: AdPromotedObjectFields;
  readonly recommendations?: ReadonlyArray<AdRecommendationFields>;
  readonly smart_promotion_type?: string;
  readonly source_campaign?: CampaignFields;
  readonly source_campaign_id?: string;
  readonly source_recommendation_type?: string;
  readonly special_ad_categories?: ReadonlyArray<string>;
  readonly special_ad_category?: string;
  readonly special_ad_category_country?: ReadonlyArray<string>;
  readonly spend_cap?: string;
  readonly start_time?: string;
  readonly status?: CampaignStatus;
  readonly stop_time?: string;
  readonly topline_id?: string;
  readonly updated_time?: string;
}

export interface CampaignGroupBrandConfigurationFields {
  readonly brand_product_name?: string;
  readonly locale?: string;
  readonly vertical?: string;
}

export interface CampaignGroupCollaborativeAdsPartnerInfoFields {

}

export type CampaignObjective = "APP_INSTALLS" | "BRAND_AWARENESS" | "CONVERSIONS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "OUTCOME_APP_PROMOTION" | "OUTCOME_AWARENESS" | "OUTCOME_ENGAGEMENT" | "OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_TRAFFIC" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PRODUCT_CATALOG_SALES" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS";

export type CampaignOperator = "ALL" | "ANY";

export type CampaignSmartPromotionType = "GUIDED_CREATION" | "SMART_APP_PROMOTION";

export type CampaignSpecialAdCategories = "CREDIT" | "EMPLOYMENT" | "FINANCIAL_PRODUCTS_SERVICES" | "HOUSING" | "ISSUES_ELECTIONS_POLITICS" | "NONE" | "ONLINE_GAMBLING_AND_GAMING";

export type CampaignSpecialAdCategory = "CREDIT" | "EMPLOYMENT" | "FINANCIAL_PRODUCTS_SERVICES" | "HOUSING" | "ISSUES_ELECTIONS_POLITICS" | "NONE" | "ONLINE_GAMBLING_AND_GAMING";

export type CampaignSpecialAdCategoryCountry = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export type CampaignStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "PAUSED";

export type CampaignStatusOption = "ACTIVE" | "INHERITED_FROM_SOURCE" | "PAUSED";

export interface CanvasAdSettingsFields {
  readonly is_canvas_collection_eligible?: boolean;
  readonly lead_form_created_time?: number;
  readonly lead_form_name?: string;
  readonly lead_gen_form_id?: string;
  readonly leads_count?: number;
  readonly product_set_id?: string;
  readonly use_retailer_item_ids?: boolean;
}

export interface CanvasBodyElementFields {
  readonly element?: Readonly<Record<string, unknown>>;
}

export interface CanvasCollectionThumbnailFields {
  readonly element_child_index?: number;
  readonly element_id?: string;
  readonly photo?: PhotoFields;
}

export interface CanvasDynamicSettingFields {
  readonly child_documents?: ReadonlyArray<CanvasFields>;
  readonly product_set_id?: string;
}

export interface CanvasFields {
  readonly background_color?: string;
  readonly body_elements?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly business_id?: string;
  readonly canvas_link?: string;
  readonly collection_hero_image?: PhotoFields;
  readonly collection_hero_video?: AdVideoFields;
  readonly collection_thumbnails?: ReadonlyArray<CanvasCollectionThumbnailFields>;
  readonly dynamic_setting?: CanvasDynamicSettingFields;
  readonly element_payload?: string;
  readonly fb_body_elements?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly hero_asset_facebook_post_id?: string;
  readonly hero_asset_instagram_media_id?: string;
  readonly id?: string;
  readonly is_hidden?: boolean;
  readonly is_published?: boolean;
  readonly last_editor?: UserFields;
  readonly linked_documents?: ReadonlyArray<CanvasFields>;
  readonly name?: string;
  readonly owner?: PageFields;
  readonly property_list?: ReadonlyArray<string>;
  readonly source_template?: CanvasTemplateFields;
  readonly store_url?: string;
  readonly style_list?: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<string>;
  readonly ui_property_list?: ReadonlyArray<string>;
  readonly unused_body_elements?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly update_time?: number;
  readonly use_retailer_item_ids?: boolean;
}

export interface CanvasPreviewFields {
  readonly body?: string;
}

export interface CanvasTemplateFields {
  readonly channels?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, string>>>>>>;
  readonly description?: string;
  readonly document?: CanvasFields;
  readonly id?: string;
  readonly is_multi_tab_supportable?: boolean;
  readonly is_new?: boolean;
  readonly name?: string;
  readonly objectives?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly owner_id?: UserFields;
  readonly required_capabilities?: ReadonlyArray<string>;
  readonly snapshot_photo?: PhotoFields;
  readonly status?: string;
  readonly sub_verticals?: ReadonlyArray<string>;
  readonly verticals?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface CASSSetupOfflineEventSetProgressFields {

}

export interface CatalogAdvertiserInsightFields {
  readonly category?: string;
  readonly country?: string;
}

export interface CatalogBasedTargetingFields {
  readonly geo_targeting_type?: string;
}

export interface CatalogCollectionFields {
  readonly description?: string;
  readonly title?: string;
  readonly url?: string;
}

export interface CatalogContentVersionConfigFields {
  readonly id?: string;
  readonly name?: string;
  readonly version?: string;
}

export interface CatalogDuplicateDataFields {
  readonly best_catalog_id?: string;
  readonly is_duplicated_catalog?: boolean;
}

export interface CatalogItemAppLinksFields {
  readonly android?: ReadonlyArray<AndroidAppLinkFields>;
  readonly ios?: ReadonlyArray<IosAppLinkFields>;
  readonly ipad?: ReadonlyArray<IosAppLinkFields>;
  readonly iphone?: ReadonlyArray<IosAppLinkFields>;
  readonly web?: WebAppLinkFields;
  readonly windows?: ReadonlyArray<WindowsAppLinkFields>;
  readonly windows_phone?: ReadonlyArray<WindowsPhoneAppLinkFields>;
  readonly windows_universal?: ReadonlyArray<WindowsAppLinkFields>;
}

export interface CatalogItemChannelsToIntegrityStatusFields {
  readonly channels?: ReadonlyArray<string>;
  readonly rejection_information?: Readonly<Record<string, unknown>>;
}

export interface CatalogItemOverrideFields {
  readonly id?: string;
  readonly local_info?: ProductItemLocalInfoFields;
  readonly override_type?: string;
  readonly override_value?: string;
  readonly upload_expected_method?: string;
}

export interface CatalogItemRejectionReasonsFields {
  readonly capability?: string;
  readonly rejection_information?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CatalogItemValidationErrorListFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CatalogSmartPixelSettingsFields {
  readonly allowed_domains?: ReadonlyArray<string>;
  readonly available_property_filters?: ReadonlyArray<string>;
  readonly catalog?: ProductCatalogFields;
  readonly cbb_custom_override_filters?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly cbb_default_filter?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>;
  readonly defaults?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly filters?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>;
  readonly id?: string;
  readonly is_cbb_enabled?: boolean;
  readonly is_create_enabled?: boolean;
  readonly is_delete_enabled?: boolean;
  readonly is_update_enabled?: boolean;
  readonly microdata_format_precedence?: ReadonlyArray<string>;
  readonly pixel?: AdsPixelFields;
  readonly property_filter?: ReadonlyArray<string>;
  readonly trusted_domains?: ReadonlyArray<string>;
}

export interface CatalogSubVerticalListFields {
  readonly appliances?: Readonly<Record<string, unknown>>;
  readonly baby_feeding?: Readonly<Record<string, unknown>>;
  readonly baby_transport?: Readonly<Record<string, unknown>>;
  readonly beauty?: Readonly<Record<string, unknown>>;
  readonly bedding?: Readonly<Record<string, unknown>>;
  readonly cameras?: Readonly<Record<string, unknown>>;
  readonly cameras_and_photos?: Readonly<Record<string, unknown>>;
  readonly cell_phones_and_smart_watches?: Readonly<Record<string, unknown>>;
  readonly cleaning_supplies?: Readonly<Record<string, unknown>>;
  readonly clo_offer?: Readonly<Record<string, unknown>>;
  readonly clothing?: Readonly<Record<string, unknown>>;
  readonly clothing_accessories?: Readonly<Record<string, unknown>>;
  readonly computer_components?: Readonly<Record<string, unknown>>;
  readonly computers_and_tablets?: Readonly<Record<string, unknown>>;
  readonly computers_laptops_and_tablets?: Readonly<Record<string, unknown>>;
  readonly diapering_and_potty_training?: Readonly<Record<string, unknown>>;
  readonly electronic_accessories_and_cables?: Readonly<Record<string, unknown>>;
  readonly electronics_accessories?: Readonly<Record<string, unknown>>;
  readonly furniture?: Readonly<Record<string, unknown>>;
  readonly health?: Readonly<Record<string, unknown>>;
  readonly home?: Readonly<Record<string, unknown>>;
  readonly home_goods?: Readonly<Record<string, unknown>>;
  readonly household_and_cleaning_supplies?: Readonly<Record<string, unknown>>;
  readonly jewelry?: Readonly<Record<string, unknown>>;
  readonly large_appliances?: Readonly<Record<string, unknown>>;
  readonly local_service_business_item?: Readonly<Record<string, unknown>>;
  readonly local_service_business_restaurant?: Readonly<Record<string, unknown>>;
  readonly nursery?: Readonly<Record<string, unknown>>;
  readonly printers_and_scanners?: Readonly<Record<string, unknown>>;
  readonly printers_scanners_and_fax_machines?: Readonly<Record<string, unknown>>;
  readonly product_discount?: Readonly<Record<string, unknown>>;
  readonly projectors?: Readonly<Record<string, unknown>>;
  readonly shoes?: Readonly<Record<string, unknown>>;
  readonly shoes_and_footwear?: Readonly<Record<string, unknown>>;
  readonly software?: Readonly<Record<string, unknown>>;
  readonly televisions_and_monitors?: Readonly<Record<string, unknown>>;
  readonly test_child_sub_vertical?: Readonly<Record<string, unknown>>;
  readonly test_grand_child_sub_vertical?: Readonly<Record<string, unknown>>;
  readonly test_sub_vertical?: Readonly<Record<string, unknown>>;
  readonly test_sub_vertical_alias?: Readonly<Record<string, unknown>>;
  readonly test_sub_vertical_data_object?: Readonly<Record<string, unknown>>;
  readonly third_party_electronics?: Readonly<Record<string, unknown>>;
  readonly third_party_toys_and_games?: Readonly<Record<string, unknown>>;
  readonly toys?: Readonly<Record<string, unknown>>;
  readonly toys_and_games?: Readonly<Record<string, unknown>>;
  readonly tvs_and_monitors?: Readonly<Record<string, unknown>>;
  readonly vehicle_manufacturer?: Readonly<Record<string, unknown>>;
  readonly video_game_consoles_and_video_games?: Readonly<Record<string, unknown>>;
  readonly video_games_and_consoles?: Readonly<Record<string, unknown>>;
  readonly video_projectors?: Readonly<Record<string, unknown>>;
  readonly watches?: Readonly<Record<string, unknown>>;
}

export interface CatalogWebsiteOnboardingSettingsFields {
  readonly id?: string;
  readonly quality_band?: string;
  readonly status?: string;
}

export interface CatalogWebsiteSettingsFields {
  readonly id?: string;
  readonly is_allowed_to_crawl?: boolean;
}

export interface ChatPluginFields {
  readonly alignment?: string;
  readonly desktop_bottom_spacing?: string;
  readonly desktop_side_spacing?: string;
  readonly entry_point_icon?: string;
  readonly entry_point_label?: string;
  readonly greeting_dialog_display?: string;
  readonly guest_chat_mode?: string;
  readonly mobile_bottom_spacing?: string;
  readonly mobile_chat_display?: string;
  readonly mobile_side_spacing?: string;
  readonly theme_color?: string;
  readonly welcome_screen_greeting?: string;
}

export type CheckBatchRequestStatusErrorPriority = "HIGH" | "LOW" | "MEDIUM";

export interface CheckBatchRequestStatusFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly errors_total_count?: number;
  readonly handle?: string;
  readonly ids_of_invalid_requests?: ReadonlyArray<string>;
  readonly status?: string;
  readonly warnings?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly warnings_total_count?: number;
}

export interface ChildEventFields {
  readonly end_time?: string;
  readonly id?: string;
  readonly start_time?: string;
  readonly ticket_uri?: string;
}

export interface ChinaBusinessOnboardingVettingRequestFields {
  readonly ad_account_creation_request_status?: string;
  readonly ad_account_limit?: number;
  readonly ad_account_number?: string;
  readonly ad_accounts_info?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly advertiser_business_id?: string;
  readonly advertiser_business_name?: string;
  readonly business_manager_id?: string;
  readonly business_registration?: string;
  readonly business_registration_id?: string;
  readonly business_verification_status?: string;
  readonly chinese_address?: string;
  readonly chinese_legal_entity_name?: string;
  readonly city?: string;
  readonly contact?: string;
  readonly coupon_code?: string;
  readonly disapprove_reason?: string;
  readonly english_business_name?: string;
  readonly id?: string;
  readonly official_website_url?: string;
  readonly org_ad_account_count?: number;
  readonly payment_type?: string;
  readonly planning_agency_id?: string;
  readonly planning_agency_name?: string;
  readonly promotable_app_ids?: ReadonlyArray<string>;
  readonly promotable_page_ids?: ReadonlyArray<string>;
  readonly promotable_pages?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly promotable_urls?: ReadonlyArray<string>;
  readonly request_changes_reason?: string;
  readonly reviewed_user?: string;
  readonly spend_limit?: number;
  readonly status?: string;
  readonly subvertical?: string;
  readonly subvertical_v2?: string;
  readonly supporting_document?: string;
  readonly time_changes_requested?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
  readonly time_zone?: string;
  readonly used_reseller_link?: boolean;
  readonly user_id?: string;
  readonly user_name?: string;
  readonly vertical?: string;
  readonly vertical_v2?: string;
  readonly viewed_by_reseller?: boolean;
  readonly zip_code?: string;
}

export interface CloudbridgeDatasetStatusFields {
  readonly app_redacted_event?: ReadonlyArray<string>;
  readonly app_sensitive_params?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>;
  readonly app_unverified_event?: ReadonlyArray<string>;
  readonly has_app_associated?: boolean;
  readonly is_app_prohibited?: boolean;
  readonly is_dataset?: boolean;
}

export interface CloudGameFields {
  readonly id?: string;
  readonly name?: string;
  readonly owner?: ProfileFields;
  readonly playable_ad_file_size?: number;
  readonly playable_ad_orientation?: string;
  readonly playable_ad_package_name?: string;
  readonly playable_ad_reject_reason?: string;
  readonly playable_ad_status?: string;
  readonly playable_ad_upload_time?: string;
}

export interface CollaborativeAdsPartnerBusinessesFields {
  readonly collaborative_ads_partner_businesses_info?: ReadonlyArray<BusinessFields>;
  readonly dedicated_partner_business_info?: BusinessFields;
  readonly dedicated_partners_business_info?: ReadonlyArray<BusinessFields>;
}

export interface CollaborativeAdsPartnerInfoListItemFields {

}

export interface CollaborativeAdsShareSettingsFields {
  readonly agency_business?: BusinessFields;
  readonly id?: string;
  readonly product_catalog_proxy_id?: string;
  readonly utm_campaign?: string;
  readonly utm_medium?: string;
  readonly utm_source?: string;
}

export interface ColumnSuggestionsFields {
  readonly explanations?: Readonly<Record<string, unknown>>;
  readonly format?: ReadonlyArray<string>;
  readonly objective?: ReadonlyArray<string>;
  readonly optimization_goals?: ReadonlyArray<string>;
}

export type CommentCommentPrivacyValue = "DECLINED_BY_ADMIN_ASSISTANT" | "DEFAULT_PRIVACY" | "FRIENDS_AND_POST_OWNER" | "FRIENDS_ONLY" | "GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE" | "OWNER_OR_COMMENTER" | "PENDING_APPROVAL" | "PRIVATE_CONVERSATION_PARTICIPANTS_ONLY" | "REMOVED_BY_ADMIN_ASSISTANT" | "SIDE_CONVERSATION" | "SIDE_CONVERSATION_AND_POST_OWNER" | "SPOTLIGHT_TAB";

export interface CommentFields {
  readonly admin_creator?: UserFields;
  readonly application?: ApplicationFields;
  readonly attachment?: Readonly<Record<string, unknown>>;
  readonly can_comment?: boolean;
  readonly can_hide?: boolean;
  readonly can_like?: boolean;
  readonly can_remove?: boolean;
  readonly can_reply_privately?: boolean;
  readonly comment_count?: number;
  readonly created_time?: string;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly is_hidden?: boolean;
  readonly is_private?: boolean;
  readonly like_count?: number;
  readonly live_broadcast_timestamp?: number;
  readonly message?: string;
  readonly message_tags?: ReadonlyArray<EntityAtTextRangeFields>;
  readonly object?: Readonly<Record<string, unknown>>;
  readonly parent?: CommentFields;
  readonly permalink_url?: string;
  readonly private_reply_conversation?: Readonly<Record<string, unknown>>;
  readonly user_likes?: boolean;
}

export type CommentFilter = "stream" | "toplevel";

export type CommentLiveFilter = "filter_low_quality" | "no_filter";

export type CommentOrder = "chronological" | "reverse_chronological";

export interface CommerceMerchantSettingsFields {
  readonly checkout_config?: string;
  readonly contact_email?: string;
  readonly display_name?: string;
  readonly facebook_channel?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly instagram_channel?: Readonly<Record<string, unknown>>;
  readonly korea_ftc_listing?: string;
  readonly merchant_page?: ProfileFields;
  readonly merchant_status?: string;
  readonly offsite_iab_checkout_enabled_countries?: ReadonlyArray<string>;
  readonly payment_provider?: string;
  readonly privacy_policy_localized?: string;
  readonly shops_ads_setup?: Readonly<Record<string, unknown>>;
  readonly terms?: string;
}

export type CommerceMerchantSettingsMerchantStatus = "ENABLED" | "EXTERNALLY_DISABLED";

export interface CommerceMerchantSettingsSetupStatusFields {
  readonly deals_setup?: string;
  readonly marketplace_approval_status?: string;
  readonly marketplace_approval_status_details?: Readonly<Record<string, unknown>>;
  readonly payment_setup?: string;
  readonly review_status?: Readonly<Record<string, unknown>>;
  readonly shop_setup?: string;
}

export interface CommerceOrderFields {
  readonly buyer_details?: Readonly<Record<string, unknown>>;
  readonly channel?: string;
  readonly contains_bopis_items?: boolean;
  readonly created?: string;
  readonly estimated_payment_details?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly is_group_buy?: boolean;
  readonly is_test_order?: boolean;
  readonly last_updated?: string;
  readonly merchant_order_id?: string;
  readonly order_status?: Readonly<Record<string, unknown>>;
  readonly selected_shipping_option?: Readonly<Record<string, unknown>>;
  readonly ship_by_date?: string;
  readonly shipping_address?: Readonly<Record<string, unknown>>;
}

export type CommerceOrderFilters = "HAS_CANCELLATIONS" | "HAS_FULFILLMENTS" | "HAS_REFUNDS" | "NO_CANCELLATIONS" | "NO_REFUNDS" | "NO_SHIPMENTS";

export type CommerceOrderState = "COMPLETED" | "CREATED" | "FB_PROCESSING" | "IN_PROGRESS";

export interface CommerceOrderTransactionDetailFields {
  readonly merchant_order_id?: string;
  readonly net_payment_amount?: Readonly<Record<string, unknown>>;
  readonly order_created?: string;
  readonly order_details?: CommerceOrderFields;
  readonly order_id?: string;
  readonly payout_reference_id?: string;
  readonly postal_code?: string;
  readonly processing_fee?: Readonly<Record<string, unknown>>;
  readonly state?: string;
  readonly tax_rate?: string;
  readonly transaction_date?: string;
  readonly transaction_type?: string;
  readonly transfer_id?: string;
}

export interface CommercePayoutFields {
  readonly amount?: Readonly<Record<string, unknown>>;
  readonly payout_date?: string;
  readonly payout_reference_id?: string;
  readonly status?: string;
  readonly transfer_id?: string;
}

export interface CommerceSettingsFields {
  readonly inventory?: number;
  readonly total_inventory?: number;
}

export interface ConnectionsTargetingFields {
  readonly id?: string;
  readonly name?: string;
}

export interface ContactsMessengerSyncConfigFields {
  readonly enabled?: boolean;
}

export interface ContentBlockListFields {
  readonly business?: BusinessFields;
  readonly id?: string;
  readonly name?: string;
}

export interface ContentDeliveryReportFields {
  readonly content_id?: string;
  readonly creator_id?: string;
  readonly estimated_impressions?: number;
}

export interface ContentPublishingLimitResponseFields {
  readonly config?: Readonly<Record<string, unknown>>;
  readonly quota_usage?: number;
}

export interface ContextualBundlingSpecFields {
  readonly status?: string;
}

export interface ConversionActionQueryFields {
  readonly "action.type"?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly application?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly conversion_id?: ReadonlyArray<string>;
  readonly creative?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly dataset?: ReadonlyArray<string>;
  readonly dataset_split?: ReadonlyArray<string>;
  readonly event?: ReadonlyArray<string>;
  readonly "event.creator"?: ReadonlyArray<string>;
  readonly event_type?: ReadonlyArray<string>;
  readonly fb_pixel?: ReadonlyArray<string>;
  readonly fb_pixel_event?: ReadonlyArray<string>;
  readonly leadgen?: ReadonlyArray<string>;
  readonly object?: ReadonlyArray<string>;
  readonly "object.domain"?: ReadonlyArray<string>;
  readonly offer?: ReadonlyArray<string>;
  readonly "offer.creator"?: ReadonlyArray<string>;
  readonly offsite_pixel?: ReadonlyArray<string>;
  readonly page?: ReadonlyArray<string>;
  readonly "page.parent"?: ReadonlyArray<string>;
  readonly post?: ReadonlyArray<string>;
  readonly "post.object"?: ReadonlyArray<string>;
  readonly "post.object.wall"?: ReadonlyArray<string>;
  readonly "post.wall"?: ReadonlyArray<string>;
  readonly question?: ReadonlyArray<string>;
  readonly "question.creator"?: ReadonlyArray<string>;
  readonly response?: ReadonlyArray<string>;
  readonly subtype?: ReadonlyArray<string>;
}

export interface ConversionHealthKPIFields {
  readonly health_indicator?: string;
  readonly impacted_browsers_match_rate?: number;
  readonly impacted_browsers_match_rate_mom_trend?: number;
  readonly impacted_browsers_traffic_share?: number;
  readonly impacted_browsers_traffic_share_mom_trend?: number;
  readonly match_rate?: number;
  readonly match_rate_mom_trend?: number;
  readonly match_rate_vertical_benchmark?: number;
  readonly match_rate_vs_benchmark_mom_trend?: number;
}

export interface CopyrightAttributionInsightsFields {
  readonly l7_attribution_page_view?: number;
  readonly l7_attribution_page_view_delta?: number;
  readonly l7_attribution_video_view?: number;
  readonly l7_attribution_video_view_delta?: number;
  readonly metrics_ending_date?: string;
}

export interface CopyrightAudioAssetFields {
  readonly audio_availability_status?: string;
  readonly audio_library_policy?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>>>>;
  readonly canonical_reference_file?: AudioAssetFields;
  readonly creation_time?: string;
  readonly id?: string;
  readonly reference_file_isrcs?: ReadonlyArray<string>;
  readonly reference_files?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly representative_reference_file?: AudioAssetFields;
  readonly title?: string;
  readonly update_time?: string;
}

export interface CopyrightMediaMisuseFields {
  readonly audio_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly creation_time?: string;
  readonly disabled_audio_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly disabled_video_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly entire_file_issue?: boolean;
  readonly entire_file_issue_reasons?: ReadonlyArray<string>;
  readonly expiration_time?: string;
  readonly id?: string;
  readonly media_asset_id?: string;
  readonly reasons?: ReadonlyArray<string>;
  readonly requested_audio_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly requested_video_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly resolution_type?: string;
  readonly status?: string;
  readonly update_time?: string;
  readonly video_copyright?: VideoCopyrightFields;
  readonly video_segments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CopyrightOwnershipTransferFields {
  readonly assets?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly has_ownership_been_updated?: boolean;
  readonly id?: string;
  readonly num_assets?: number;
  readonly receiving_rights_holder_owner?: Readonly<Record<string, unknown>>;
  readonly sending_rights_holder_owner?: Readonly<Record<string, unknown>>;
  readonly status?: string;
  readonly transfer_territories?: ReadonlyArray<string>;
  readonly transfer_time?: string;
}

export interface CopyrightReferenceContainerFields {
  readonly content_type?: string;
  readonly copyright_creation_time?: string;
  readonly download_hd_url?: string;
  readonly duration_in_sec?: number;
  readonly id?: string;
  readonly iswc?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly playable_video_uri?: string;
  readonly published_time?: string;
  readonly thumbnail_url?: string;
  readonly title?: string;
  readonly universal_content_id?: string;
  readonly writer_names?: ReadonlyArray<string>;
}

export interface CoverPhotoFields {
  readonly cover_id?: string;
  readonly id?: string;
  readonly offset_x?: number;
  readonly offset_y?: number;
  readonly source?: string;
}

export interface CPASAdCreationTemplateFields {
  readonly description?: string;
  readonly id?: string;
  readonly is_unused_template?: boolean;
  readonly name?: string;
  readonly optimization_goal?: string;
  readonly targeting_type?: string;
  readonly template_type?: string;
}

export interface CPASAdvertiserPartnershipRecommendationFields {
  readonly advertiser_business_id?: string;
  readonly brand_business_id?: string;
  readonly brands?: ReadonlyArray<string>;
  readonly countries?: ReadonlyArray<string>;
  readonly id?: string;
  readonly merchant_business_id?: string;
  readonly merchant_categories?: ReadonlyArray<string>;
  readonly status?: string;
  readonly status_reason?: string;
}

export interface CPASBusinessSetupConfigFields {
  readonly accepted_collab_ads_tos?: boolean;
  readonly business?: BusinessFields;
  readonly business_capabilities_status?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly capabilities_compliance_status?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly id?: string;
}

export interface CPASCollaborationRequestFields {
  readonly ad_account_id?: string;
  readonly ad_account_name?: string;
  readonly brands?: ReadonlyArray<string>;
  readonly catalog_segment?: ProductCatalogFields;
  readonly contact_email?: string;
  readonly contact_first_name?: string;
  readonly contact_last_name?: string;
  readonly creation_time?: string;
  readonly id?: string;
  readonly phone_number?: string;
  readonly receiver_business?: BusinessFields;
  readonly requester_agency_or_brand?: string;
  readonly seller_id?: string;
  readonly sender_business?: BusinessFields;
  readonly sender_client_business?: BusinessFields;
  readonly shop_url?: string;
  readonly source?: string;
  readonly status?: string;
}

export type CPASCollaborationRequestRequestRole = "RECEIVER" | "SENDER";

export type CPASCollaborationRequestSource = "EXTERNAL" | "INTERNAL" | "SELF_SERVE";

export interface CPASLsbImageBankFields {
  readonly ad_group_id?: string;
  readonly catalog_segment_proxy_id?: string;
  readonly id?: string;
}

export interface CPASMerchantConfigFields {
  readonly accepted_tos?: boolean;
  readonly beta_features?: ReadonlyArray<string>;
  readonly business_outcomes_status?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly id?: string;
  readonly is_test_merchant?: boolean;
  readonly outcomes_compliance_status?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly qualified_to_onboard?: boolean;
}

export interface CPASParentCatalogSettingsFields {
  readonly attribution_windows?: ReadonlyArray<string>;
  readonly default_currency?: string;
  readonly disable_use_as_parent_catalog?: boolean;
  readonly id?: string;
}

export interface CPASSetupFields {

}

export interface CPASSetupPageStructureProgressFields {
  readonly id?: string;
  readonly issues?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly name?: string;
}

export interface CreativeAssetTagFields {
  readonly name?: string;
}

export interface CreativeAudiencePairingPersonaFields {
  readonly age_max?: number;
  readonly age_min?: number;
  readonly genders?: ReadonlyArray<number>;
}

export interface CreativeFatiguePredictionPLEFields {
  readonly cpr_lift_estimation?: number;
  readonly should_display?: boolean;
}

export interface CreativeHistoryFields {
  readonly creative_fingerprint?: number;
  readonly time_ranges?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CreativeMulticellTestConfigFields {
  readonly budget_percentage?: number;
  readonly budget_source?: string;
  readonly configured_cell_count?: number;
  readonly daily_budget?: number;
  readonly entry_source?: string;
  readonly lead_gen_forms?: string;
  readonly lifetime_budget?: number;
  readonly use_existing_daily_budget?: boolean;
}

export interface CreatorAssetCreativeFields {
  readonly id?: string;
  readonly image_url?: string;
  readonly moderation_status?: string;
  readonly product_item_retailer_id?: string;
  readonly product_url?: string;
  readonly retailer_id?: string;
  readonly video_url?: string;
}

export type CreatorAssetCreativeModerationStatus = "ARCHIVED" | "ELIGIBLE" | "EXPIRED" | "INELIGIBLE" | "IN_REVIEW" | "PAUSED" | "UNKNOWN";

export interface CreditCardFields {
  readonly billing_address?: Readonly<Record<string, unknown>>;
  readonly card_cobadging?: string;
  readonly card_holder_name?: string;
  readonly card_type?: string;
  readonly credential_id?: number;
  readonly default_receiving_method_products?: ReadonlyArray<string>;
  readonly expiry_month?: string;
  readonly expiry_year?: string;
  readonly id?: string;
  readonly is_cvv_tricky_bin?: boolean;
  readonly is_enabled?: boolean;
  readonly is_last_used?: boolean;
  readonly is_network_tokenized_in_india?: boolean;
  readonly is_soft_disabled?: boolean;
  readonly is_user_verified?: boolean;
  readonly is_zip_verified?: boolean;
  readonly last4?: string;
  readonly readable_card_type?: string;
  readonly time_created?: string;
  readonly time_created_ts?: number;
  readonly type?: string;
}

export interface CreditPartitionActionOptionsFields {
  readonly liability_type?: Readonly<Record<string, unknown>>;
  readonly partition_type?: Readonly<Record<string, unknown>>;
  readonly send_bill_to?: Readonly<Record<string, unknown>>;
}

export interface CRMAddressFields {
  readonly city?: string;
  readonly cnpj_tax_id?: string;
  readonly country?: string;
  readonly id?: string;
  readonly postal_code?: string;
  readonly registration_label?: string;
  readonly registration_number?: string;
  readonly state?: string;
  readonly street1?: string;
  readonly street2?: string;
  readonly street3?: string;
  readonly street4?: string;
  readonly validation_status?: string;
  readonly vat_tax_id?: string;
}

export interface CTWAWhatsAppNumbersInfoFields {
  readonly can_manage_wa_flows?: boolean;
  readonly formatted_whatsapp_number?: string;
  readonly is_business_number?: boolean;
  readonly is_calling_enabled?: boolean;
  readonly number_country_prefix?: string;
  readonly page_whatsapp_number_id?: string;
  readonly waba_id?: string;
  readonly whatsapp_number?: string;
  readonly whatsapp_smb_device?: string;
}

export interface CTXDefaultOptimizationConfigFields {
  readonly defaulting_source?: string;
  readonly destination_type?: string;
  readonly objective?: string;
  readonly optimization_goal?: string;
}

export interface CTXDFOObjectiveDefaultsFields {
  readonly objective?: string;
  readonly optimization_goal?: string;
  readonly page_id?: string;
}

export interface CTXOptimizationEligibilityFields {
  readonly ctm?: Readonly<Record<string, unknown>>;
}

export interface CTXPartnerAppWelcomeMessageFlowFields {
  readonly compatible_platforms?: ReadonlyArray<string>;
  readonly eligible_platforms?: ReadonlyArray<string>;
  readonly id?: string;
  readonly is_ig_only_flow?: boolean;
  readonly is_used_in_ad?: boolean;
  readonly last_update_time?: string;
  readonly name?: string;
  readonly welcome_message_flow?: string;
  readonly welcome_message_sequence?: string;
}

export interface CurrencyAmountFields {
  readonly amount?: string;
  readonly amount_in_hundredths?: string;
  readonly currency?: string;
  readonly offsetted_amount?: string;
}

export interface CurrencyFields {
  readonly currency_offset?: number;
  readonly usd_exchange?: number;
  readonly usd_exchange_inverse?: number;
  readonly user_currency?: string;
}

export interface CustomAttributionDatasetFields {
  readonly app?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly pixel?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type CustomAudienceActionSource = "PHYSICAL_STORE" | "WEBSITE";

export interface CustomAudienceAdAccountFields {
  readonly id?: string;
}

export type CustomAudienceAudienceLabels = "APP_USERS" | "AT_RISK" | "CART_ABANDONERS" | "DISENGAGED" | "DISQUALIFIED_LEADS" | "ENGAGED_USERS" | "GENERAL_CUSTOMERS" | "HIGH_VALUE_CUSTOMERS" | "LOW_VALUE_CUSTOMERS" | "OTHER_1" | "OTHER_2" | "OTHER_3" | "QUALIFIED_LEADS" | "RECENT_PURCHASERS" | "TRIAL_USERS";

export interface CustomAudienceCapabilitiesFields {
  readonly capabilities?: Readonly<Record<string, unknown>>;
}

export type CustomAudienceClaimObjective = "AUTOMOTIVE_MODEL" | "COLLABORATIVE_ADS" | "HOME_LISTING" | "MEDIA_TITLE" | "PRODUCT" | "TRAVEL" | "VEHICLE" | "VEHICLE_OFFER";

export type CustomAudienceContentType = "AUTOMOTIVE_MODEL" | "DESTINATION" | "FLIGHT" | "GENERIC" | "HOME_LISTING" | "HOTEL" | "LOCAL_SERVICE_BUSINESS" | "MEDIA_TITLE" | "OFFLINE_PRODUCT" | "PRODUCT" | "VEHICLE" | "VEHICLE_OFFER";

export type CustomAudienceCustomerFileSource = "BOTH_USER_AND_PARTNER_PROVIDED" | "PARTNER_PROVIDED_ONLY" | "USER_PROVIDED_ONLY";

export interface CustomAudienceDataSourceFields {
  readonly creation_params?: string;
  readonly sub_type?: CustomAudienceDataSourceSubType;
  readonly type?: CustomAudienceDataSourceType;
}

export type CustomAudienceDataSourceSubType = "AD_CAMPAIGN" | "ANYTHING" | "APP_USERS" | "AR_EFFECTS_EVENTS" | "AR_EXPERIENCE_EVENTS" | "CAMPAIGN_CONVERSIONS" | "COMBINATION_CUSTOM_AUDIENCE_USERS" | "CONSTANT_CONTACTS_EMAIL_HASHES" | "CONTACT_IMPORTER" | "CONVERSION_PIXEL_HITS" | "COPY_PASTE_EMAIL_HASHES" | "CUSTOM_AUDIENCE_USERS" | "CUSTOM_DATA_TARGETING" | "DATA_FILE" | "DYNAMIC_RULE" | "ENGAGEMENT_EVENT_USERS" | "EXPANDED_AUDIENCE" | "EXTERNAL_IDS" | "EXTERNAL_IDS_MIX" | "FACEBOOK_WIFI_EVENTS" | "FB_EVENT_SIGNALS" | "FB_PIXEL_HITS" | "GROUP_EVENTS" | "HASHES" | "HASHES_OR_USER_IDS" | "HOUSEHOLD_EXPANSION" | "IG_BUSINESS_EVENTS" | "IG_PROMOTED_POST" | "INSTANT_ARTICLE_EVENTS" | "LOOKALIKE_PLATFORM" | "MAIL_CHIMP_EMAIL_HASHES" | "MARKETPLACE_LISTINGS" | "MESSAGE_CAMPAIGN" | "MESSENGER_ONSITE_SUBSCRIPTION" | "MOBILE_ADVERTISER_IDS" | "MOBILE_APP_COMBINATION_EVENTS" | "MOBILE_APP_CUSTOM_AUDIENCE_USERS" | "MOBILE_APP_EVENTS" | "MULTICOUNTRY_COMBINATION" | "MULTI_DATA_EVENTS" | "MULTI_EVENT_SOURCE" | "MULTI_HASHES" | "NOTHING" | "OFFLINE_EVENT_USERS" | "PAGE_FANS" | "PAGE_SMART_AUDIENCE" | "PARTNER_CATEGORY_USERS" | "PLACE_VISITS" | "PLATFORM" | "PLATFORM_USERS" | "SEED_LIST" | "SIGNAL_SOURCE" | "SMART_AUDIENCE" | "STORE_VISIT_EVENTS" | "SUBSCRIBER_LIST" | "S_EXPR" | "TOKENS" | "USER_IDS" | "VIDEO_EVENTS" | "VIDEO_EVENT_USERS" | "WEB_PIXEL_COMBINATION_EVENTS" | "WEB_PIXEL_HITS" | "WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS" | "WHATSAPP_SUBSCRIBER_POOL";

export type CustomAudienceDataSourceType = "CONTACT_IMPORTER" | "COPY_PASTE" | "EVENT_BASED" | "FILE_IMPORTED" | "HOUSEHOLD_AUDIENCE" | "SEED_BASED" | "THIRD_PARTY_IMPORTED" | "UNKNOWN";

export interface CustomAudienceFields {
  readonly account_id?: string;
  readonly approximate_count_lower_bound?: number;
  readonly approximate_count_upper_bound?: number;
  readonly audience_labels?: ReadonlyArray<string>;
  readonly customer_file_source?: string;
  readonly data_source?: CustomAudienceDataSourceFields;
  readonly data_source_types?: string;
  readonly datafile_custom_audience_uploading_status?: string;
  readonly delete_time?: number;
  readonly delivery_status?: CustomAudienceStatusFields;
  readonly description?: string;
  readonly excluded_custom_audiences?: ReadonlyArray<CustomAudienceFields>;
  readonly external_event_source?: AdsPixelFields;
  readonly fields_violating_integrity_policy?: ReadonlyArray<string>;
  readonly household_audience?: number;
  readonly id?: string;
  readonly included_custom_audiences?: ReadonlyArray<CustomAudienceFields>;
  readonly is_eligible_for_sac_campaigns?: boolean;
  readonly is_household?: boolean;
  readonly is_snapshot?: boolean;
  readonly is_value_based?: boolean;
  readonly lookalike_audience_ids?: ReadonlyArray<string>;
  readonly lookalike_spec?: LookalikeSpecFields;
  readonly messenger_marketing_messages_page?: PageFields;
  readonly name?: string;
  readonly operation_status?: CustomAudienceStatusFields;
  readonly opt_out_link?: string;
  readonly owner_business?: BusinessFields;
  readonly page_deletion_marked_delete_time?: number;
  readonly permission_for_actions?: AudiencePermissionForActionsFields;
  readonly pixel_id?: string;
  readonly regulated_audience_spec?: LookalikeSpecFields;
  readonly retention_days?: number;
  readonly rev_share_policy_id?: number;
  readonly rule?: string;
  readonly rule_aggregation?: string;
  readonly rule_v2?: string;
  readonly seed_audience?: number;
  readonly sharing_status?: CustomAudienceSharingStatusFields;
  readonly subtype?: string;
  readonly time_content_updated?: number;
  readonly time_created?: number;
  readonly time_updated?: number;
}

export interface CustomAudienceGroupFields {
  readonly audience_type_param_name?: string;
  readonly existing_customer_tag?: string;
  readonly new_customer_tag?: string;
}

export interface CustomAudienceHealthFields {
  readonly health?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CustomAudienceIntegrityFlagsAndAppealStatusFields {
  readonly closeout_time?: number;
  readonly days_until_enforcement?: number;
  readonly flagged_fields?: ReadonlyArray<string>;
  readonly is_enforcement_rolled_out?: boolean;
  readonly latest_appeal_requestor?: string;
  readonly latest_appeal_time?: number;
  readonly restriction_status?: string;
}

export interface CustomAudienceMatchRateInsightsFields {
  readonly email_quality?: string;
  readonly email_upload_volume_pct?: number;
  readonly is_eligible?: boolean;
  readonly madid_quality?: string;
  readonly madid_upload_volume_pct?: number;
  readonly match_rate_score?: number;
  readonly phone_quality?: string;
  readonly phone_upload_volume_pct?: number;
}

export interface CustomAudienceSaltsFields {
  readonly app_id?: number;
  readonly public_key?: string;
  readonly salts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly user_id?: number;
}

export interface CustomAudienceSessionFields {
  readonly end_time?: string;
  readonly num_invalid_entries?: string;
  readonly num_matched?: string;
  readonly num_received?: string;
  readonly progress?: string;
  readonly session_id?: string;
  readonly stage?: string;
  readonly start_time?: string;
}

export interface CustomAudienceSharedAccountCampaignInfoFields {
  readonly account_id?: string;
  readonly account_name?: string;
  readonly adset_excluding_count?: number;
  readonly adset_including_count?: number;
  readonly campaign_delivery_status?: string;
  readonly campaign_objective?: string;
  readonly campaign_pages?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly campaign_schedule?: string;
}

export interface CustomAudiencesharedAccountInfoFields {
  readonly account_id?: string;
  readonly account_name?: string;
  readonly business_id?: string;
  readonly business_name?: string;
  readonly sharing_status?: string;
}

export interface CustomAudienceSharingStatusFields {
  readonly sharing_relationship_id?: number;
  readonly status?: string;
}

export interface CustomAudienceStatusFields {
  readonly code?: number;
  readonly description?: string;
}

export interface CustomAudiencesTOSFields {
  readonly content?: string;
  readonly id?: string;
  readonly type?: string;
}

export type CustomAudienceSubscriptionInfo = "MESSENGER" | "WHATSAPP";

export type CustomAudienceSubtype = "APP" | "BAG_OF_ACCOUNTS" | "BIDDING" | "CLAIM" | "CUSTOM" | "ENGAGEMENT" | "EXCLUSION" | "FOX" | "LOOKALIKE" | "MANAGED" | "MEASUREMENT" | "MESSENGER_SUBSCRIBER_LIST" | "OFFLINE_CONVERSION" | "PARTNER" | "PRIMARY" | "REGULATED_CATEGORIES_AUDIENCE" | "STUDY_RULE_AUDIENCE" | "VIDEO" | "WEBSITE";

export type CustomAudienceUsageRestriction = "EXCLUSION_ONLY" | "NONE";

export type CustomAudienceUseForProducts = "ADS" | "MARKETING_MESSAGES";

export type CustomConversionActionSourceType = "app" | "business_messaging" | "chat" | "email" | "other" | "phone_call" | "physical_store" | "system_generated" | "website";

export interface CustomConversionActivitiesFields {
  readonly app_id?: number;
  readonly data?: string;
  readonly event_type?: string;
  readonly timestamp?: string;
}

export type CustomConversionCustomEventType = "ADD_PAYMENT_INFO" | "ADD_TO_CART" | "ADD_TO_WISHLIST" | "COMPLETE_REGISTRATION" | "CONTACT" | "CONTENT_VIEW" | "CUSTOMIZE_PRODUCT" | "DONATE" | "FACEBOOK_SELECTED" | "FIND_LOCATION" | "INITIATED_CHECKOUT" | "LEAD" | "LISTING_INTERACTION" | "OTHER" | "PURCHASE" | "SCHEDULE" | "SEARCH" | "START_TRIAL" | "SUBMIT_APPLICATION" | "SUBSCRIBE";

export interface CustomConversionFields {
  readonly account_id?: string;
  readonly aggregation_rule?: string;
  readonly business?: BusinessFields;
  readonly creation_time?: string;
  readonly custom_event_type?: CustomConversionCustomEventType;
  readonly data_sources?: ReadonlyArray<ExternalEventSourceFields>;
  readonly default_conversion_value?: number;
  readonly description?: string;
  readonly event_source_type?: string;
  readonly first_fired_time?: string;
  readonly id?: string;
  readonly is_archived?: boolean;
  readonly is_unavailable?: boolean;
  readonly last_fired_time?: string;
  readonly name?: string;
  readonly offline_conversion_data_set?: OfflineConversionDataSetFields;
  readonly pixel?: AdsPixelFields;
  readonly retention_days?: number;
  readonly rule?: string;
}

export type CustomConversionStatsResultAggregation = "count" | "device_type" | "host" | "pixel_fire" | "unmatched_count" | "unmatched_usd_amount" | "url" | "usd_amount";

export interface CustomConversionStatsResultFields {
  readonly aggregation?: CustomConversionStatsResultAggregation;
  readonly data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly timestamp?: string;
}

export interface CustomerElasticityStudyMetricsFields {
  readonly customer_elasticity_study_metrics?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface CustomUserSettingsFields {
  readonly page_level_persistent_menu?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly user_level_persistent_menu?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type DACheckConnectionMethod = "ALL" | "APP" | "BROWSER" | "SERVER";

export interface DACheckFields {
  readonly action_uri?: string;
  readonly description?: string;
  readonly key?: string;
  readonly result?: string;
  readonly title?: string;
  readonly user_message?: string;
}

export interface DatasetFields {
  readonly id?: string;
  readonly name?: string;
}

export interface DayPartFields {
  readonly days?: ReadonlyArray<number>;
  readonly end_minute?: number;
  readonly start_minute?: number;
  readonly timezone_type?: string;
}

export interface DeliveryCheckExtraInfoFields {
  readonly adgroup_ids?: ReadonlyArray<string>;
  readonly campaign_ids?: ReadonlyArray<string>;
  readonly countries?: ReadonlyArray<string>;
}

export interface DeliveryCheckFields {
  readonly check_name?: string;
  readonly description?: string;
  readonly extra_info?: DeliveryCheckExtraInfoFields;
  readonly summary?: string;
}

export interface DeliveryInfoFields {
  readonly active_accelerated_campaign_count?: number;
  readonly active_day_parted_campaign_count?: number;
  readonly ad_penalty_map?: ReadonlyArray<Readonly<Record<string, boolean>>>;
  readonly are_all_daily_budgets_spent?: boolean;
  readonly credit_needed_ads_count?: number;
  readonly eligible_for_delivery_insights?: boolean;
  readonly end_time?: string;
  readonly has_account_hit_spend_limit?: boolean;
  readonly has_campaign_group_hit_spend_limit?: boolean;
  readonly has_no_active_ads?: boolean;
  readonly has_no_ads?: boolean;
  readonly inactive_ads_count?: number;
  readonly inactive_campaign_count?: number;
  readonly is_account_closed?: boolean;
  readonly is_account_disabled?: boolean;
  readonly is_ad_uneconomical?: boolean;
  readonly is_adfarm_penalized?: boolean;
  readonly is_adgroup_partially_rejected?: boolean;
  readonly is_campaign_accelerated?: boolean;
  readonly is_campaign_completed?: boolean;
  readonly is_campaign_day_parted?: boolean;
  readonly is_campaign_disabled?: boolean;
  readonly is_campaign_group_disabled?: boolean;
  readonly is_clickbait_penalized?: boolean;
  readonly is_daily_budget_spent?: boolean;
  readonly is_engagement_bait_penalized?: boolean;
  readonly is_lqwe_penalized?: boolean;
  readonly is_reach_and_frequency_misconfigured?: boolean;
  readonly is_sensationalism_penalized?: boolean;
  readonly is_split_test_active?: boolean;
  readonly is_split_test_valid?: boolean;
  readonly lift_study_time_period?: string;
  readonly needs_credit?: boolean;
  readonly needs_tax_number?: boolean;
  readonly non_deleted_ads_count?: number;
  readonly not_delivering_campaign_count?: number;
  readonly pending_ads_count?: number;
  readonly reach_frequency_campaign_underdelivery_reason?: string;
  readonly rejected_ads_count?: number;
  readonly start_time?: string;
  readonly status?: string;
  readonly text_penalty_level?: string;
}

export interface DeliveryStatusFields {
  readonly status?: string;
  readonly substatuses?: ReadonlyArray<string>;
}

export interface DeliveryWindowFields {
  readonly ac?: number;
  readonly ad?: number;
  readonly ae?: number;
  readonly af?: number;
  readonly ag?: number;
  readonly ai?: number;
  readonly al?: number;
  readonly all?: number;
  readonly am?: number;
  readonly an?: number;
  readonly ao?: number;
  readonly aq?: number;
  readonly ar?: number;
  readonly as?: number;
  readonly at?: number;
  readonly au?: number;
  readonly aw?: number;
  readonly ax?: number;
  readonly az?: number;
  readonly ba?: number;
  readonly bb?: number;
  readonly bd?: number;
  readonly be?: number;
  readonly bf?: number;
  readonly bg?: number;
  readonly bh?: number;
  readonly bi?: number;
  readonly bj?: number;
  readonly bl?: number;
  readonly bm?: number;
  readonly bn?: number;
  readonly bo?: number;
  readonly bq?: number;
  readonly br?: number;
  readonly bs?: number;
  readonly bt?: number;
  readonly bv?: number;
  readonly bw?: number;
  readonly by?: number;
  readonly bz?: number;
  readonly ca?: number;
  readonly cc?: number;
  readonly cd?: number;
  readonly cf?: number;
  readonly cg?: number;
  readonly ch?: number;
  readonly ci?: number;
  readonly ck?: number;
  readonly cl?: number;
  readonly cm?: number;
  readonly cn?: number;
  readonly co?: number;
  readonly cr?: number;
  readonly cu?: number;
  readonly cv?: number;
  readonly cw?: number;
  readonly cx?: number;
  readonly cy?: number;
  readonly cz?: number;
  readonly de?: number;
  readonly dj?: number;
  readonly dk?: number;
  readonly dm?: number;
  readonly do?: number;
  readonly dz?: number;
  readonly ec?: number;
  readonly ee?: number;
  readonly eg?: number;
  readonly eh?: number;
  readonly er?: number;
  readonly es?: number;
  readonly et?: number;
  readonly fi?: number;
  readonly fj?: number;
  readonly fk?: number;
  readonly fm?: number;
  readonly fo?: number;
  readonly fr?: number;
  readonly ga?: number;
  readonly gb?: number;
  readonly gd?: number;
  readonly ge?: number;
  readonly gf?: number;
  readonly gg?: number;
  readonly gh?: number;
  readonly gi?: number;
  readonly gl?: number;
  readonly gm?: number;
  readonly gn?: number;
  readonly gp?: number;
  readonly gq?: number;
  readonly gr?: number;
  readonly gs?: number;
  readonly gt?: number;
  readonly gu?: number;
  readonly gw?: number;
  readonly gy?: number;
  readonly hk?: number;
  readonly hm?: number;
  readonly hn?: number;
  readonly hr?: number;
  readonly ht?: number;
  readonly hu?: number;
  readonly id?: number;
  readonly ie?: number;
  readonly il?: number;
  readonly im?: number;
  readonly in?: number;
  readonly io?: number;
  readonly iq?: number;
  readonly ir?: number;
  readonly is?: number;
  readonly it?: number;
  readonly je?: number;
  readonly jm?: number;
  readonly jo?: number;
  readonly jp?: number;
  readonly ke?: number;
  readonly kg?: number;
  readonly kh?: number;
  readonly ki?: number;
  readonly km?: number;
  readonly kn?: number;
  readonly kp?: number;
  readonly kr?: number;
  readonly kw?: number;
  readonly ky?: number;
  readonly kz?: number;
  readonly la?: number;
  readonly lb?: number;
  readonly lc?: number;
  readonly li?: number;
  readonly lk?: number;
  readonly lr?: number;
  readonly ls?: number;
  readonly lt?: number;
  readonly lu?: number;
  readonly lv?: number;
  readonly ly?: number;
  readonly ma?: number;
  readonly mc?: number;
  readonly md?: number;
  readonly me?: number;
  readonly mf?: number;
  readonly mg?: number;
  readonly mh?: number;
  readonly mk?: number;
  readonly ml?: number;
  readonly mm?: number;
  readonly mn?: number;
  readonly mo?: number;
  readonly mp?: number;
  readonly mq?: number;
  readonly mr?: number;
  readonly ms?: number;
  readonly mt?: number;
  readonly mu?: number;
  readonly mv?: number;
  readonly mw?: number;
  readonly mx?: number;
  readonly my?: number;
  readonly mz?: number;
  readonly na?: number;
  readonly nc?: number;
  readonly ne?: number;
  readonly nf?: number;
  readonly ng?: number;
  readonly ni?: number;
  readonly nl?: number;
  readonly no?: number;
  readonly np?: number;
  readonly nr?: number;
  readonly nu?: number;
  readonly nz?: number;
  readonly om?: number;
  readonly pa?: number;
  readonly pe?: number;
  readonly pf?: number;
  readonly pg?: number;
  readonly ph?: number;
  readonly pk?: number;
  readonly pl?: number;
  readonly pm?: number;
  readonly pn?: number;
  readonly pr?: number;
  readonly ps?: number;
  readonly pt?: number;
  readonly pw?: number;
  readonly py?: number;
  readonly qa?: number;
  readonly re?: number;
  readonly ro?: number;
  readonly rs?: number;
  readonly ru?: number;
  readonly rw?: number;
  readonly sa?: number;
  readonly sb?: number;
  readonly sc?: number;
  readonly sd?: number;
  readonly se?: number;
  readonly sg?: number;
  readonly sh?: number;
  readonly si?: number;
  readonly sj?: number;
  readonly sk?: number;
  readonly sl?: number;
  readonly sm?: number;
  readonly sn?: number;
  readonly so?: number;
  readonly sr?: number;
  readonly ss?: number;
  readonly st?: number;
  readonly sv?: number;
  readonly sx?: number;
  readonly sy?: number;
  readonly sz?: number;
  readonly tc?: number;
  readonly td?: number;
  readonly tf?: number;
  readonly tg?: number;
  readonly th?: number;
  readonly tj?: number;
  readonly tk?: number;
  readonly tl?: number;
  readonly tm?: number;
  readonly tn?: number;
  readonly to?: number;
  readonly tr?: number;
  readonly tt?: number;
  readonly tv?: number;
  readonly tw?: number;
  readonly tz?: number;
  readonly ua?: number;
  readonly ug?: number;
  readonly um?: number;
  readonly us?: number;
  readonly uy?: number;
  readonly uz?: number;
  readonly va?: number;
  readonly vc?: number;
  readonly ve?: number;
  readonly vg?: number;
  readonly vi?: number;
  readonly vn?: number;
  readonly vu?: number;
  readonly wf?: number;
  readonly ws?: number;
  readonly xk?: number;
  readonly ye?: number;
  readonly yt?: number;
  readonly za?: number;
  readonly zm?: number;
  readonly zw?: number;
}

export interface DestinationFields {
  readonly address?: string;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly description?: string;
  readonly destination_id?: string;
  readonly id?: string;
  readonly image_fetch_status?: DestinationImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly name?: string;
  readonly price?: string;
  readonly price_change?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<string>;
  readonly types?: ReadonlyArray<string>;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly visibility?: DestinationVisibility;
}

export type DestinationImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type DestinationVisibility = "PUBLISHED" | "STAGING";

export interface DirectDebitFields {
  readonly bank_account_last_4?: string;
  readonly bank_code_last_4?: string;
  readonly bank_name?: string;
  readonly default_receiving_method_products?: ReadonlyArray<string>;
  readonly display_string?: string;
  readonly id?: string;
  readonly last_four_digits?: string;
  readonly onboarding_url?: string;
  readonly owner_name?: string;
  readonly status?: number;
}

export interface DraftPostFields {
  readonly admin_creator?: UserFields;
  readonly creation_time?: string;
  readonly feed_audience_description?: string;
  readonly feed_targeting?: TargetingFields;
  readonly id?: string;
  readonly is_post_in_good_state?: boolean;
  readonly message?: string;
  readonly modified_time?: string;
  readonly og_action_summary?: string;
  readonly permalink_url?: string;
  readonly place?: PlaceFields;
  readonly privacy_description?: string;
  readonly scheduled_failure_notice?: string;
  readonly scheduled_publish_time?: string;
  readonly story_token?: string;
  readonly thumbnail?: string;
  readonly video_id?: string;
}

export interface DynamicARMetadataFields {
  readonly anchor_point?: ReadonlyArray<number>;
  readonly container_effect_enum?: number;
  readonly effect_icon_url?: string;
  readonly effect_id?: string;
  readonly id?: string;
  readonly platforms?: ReadonlyArray<string>;
  readonly scale_factor?: ReadonlyArray<number>;
  readonly shadow_texture_url?: string;
  readonly source_url?: string;
  readonly state?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly variant_picker_url?: string;
}

export interface DynamicItemDisplayBundleFields {
  readonly additional_urls?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly product_set?: ProductSetFields;
  readonly text_tokens?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly url?: string;
}

export interface DynamicItemDisplayBundleFolderFields {
  readonly categorization_criteria?: string;
  readonly id?: string;
  readonly name?: string;
  readonly product_catalog?: ProductCatalogFields;
  readonly product_set?: ProductSetFields;
  readonly valid_labels?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<string>>>>;
}

export interface DynamicPostChildAttachmentFields {
  readonly description?: string;
  readonly image_url?: string;
  readonly link?: string;
  readonly place_id?: string;
  readonly product_id?: string;
  readonly title?: string;
}

export interface DynamicPriceConfigByDateFields {
  readonly checkin_date?: string;
  readonly prices?: string;
  readonly prices_pretty?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface DynamicVideoMetadataFields {
  readonly id?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly url?: string;
  readonly video?: AdVideoFields;
}

export interface EducationExperienceFields {
  readonly classes?: ReadonlyArray<ExperienceFields>;
  readonly concentration?: ReadonlyArray<PageFields>;
  readonly degree?: PageFields;
  readonly id?: string;
  readonly school?: PageFields;
  readonly type?: string;
  readonly with?: ReadonlyArray<UserFields>;
  readonly year?: PageFields;
}

export interface EmailImportFields {
  readonly lists?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly total?: number;
}

export interface EndStudyCriteriaFields {

}

export interface EngagementFields {
  readonly count?: number;
  readonly count_string?: string;
  readonly count_string_with_like?: string;
  readonly count_string_without_like?: string;
  readonly social_sentence?: string;
  readonly social_sentence_with_like?: string;
  readonly social_sentence_without_like?: string;
}

export interface EntityAtTextRangeFields {
  readonly id?: string;
  readonly length?: number;
  readonly name?: string;
  readonly object?: ProfileFields;
  readonly offset?: number;
  readonly type?: EntityAtTextRangeType;
}

export type EntityAtTextRangeType = "application" | "event" | "group" | "page" | "user";

export interface EntWithSponsorFields {
  readonly has_audio_swapped_fb_copy?: boolean;
  readonly id?: string;
  readonly is_branded_content?: boolean;
  readonly owner_linked_instagram_user_v1_id?: string;
  readonly owner_picture?: string;
  readonly post_id?: string;
  readonly post_info?: PostFields;
  readonly promotable_id?: string;
}

export interface enum_typesFields {

}

export type EventCategory = "CLASSIC_LITERATURE" | "COMEDY" | "CRAFTS" | "DANCE" | "DRINKS" | "FITNESS_AND_WORKOUTS" | "FOODS" | "GAMES" | "GARDENING" | "HEALTHY_LIVING_AND_SELF_CARE" | "HEALTH_AND_MEDICAL" | "HOME_AND_GARDEN" | "MUSIC_AND_AUDIO" | "PARTIES" | "PROFESSIONAL_NETWORKING" | "RELIGIONS" | "SHOPPING_EVENT" | "SOCIAL_ISSUES" | "SPORTS" | "THEATER" | "TV_AND_MOVIES" | "VISUAL_ARTS";

export type EventEventStateFilter = "canceled" | "draft" | "published" | "scheduled_draft_for_publication";

export interface EventExternalTicketInfoFields {
  readonly id?: string;
  readonly max_sales_price?: CurrencyAmountFields;
  readonly min_sales_price?: CurrencyAmountFields;
  readonly sales_status?: string;
}

export interface EventFields {
  readonly attending_count?: number;
  readonly can_guests_invite?: boolean;
  readonly category?: EventCategory;
  readonly cover?: CoverPhotoFields;
  readonly created_time?: string;
  readonly declined_count?: number;
  readonly description?: string;
  readonly discount_code_enabled?: boolean;
  readonly end_time?: string;
  readonly event_times?: ReadonlyArray<ChildEventFields>;
  readonly guest_list_enabled?: boolean;
  readonly id?: string;
  readonly interested_count?: number;
  readonly is_canceled?: boolean;
  readonly is_draft?: boolean;
  readonly is_online?: boolean;
  readonly is_page_owned?: boolean;
  readonly maybe_count?: number;
  readonly name?: string;
  readonly noreply_count?: number;
  readonly online_event_format?: EventOnlineEventFormat;
  readonly online_event_third_party_url?: string;
  readonly owner?: Readonly<Record<string, unknown>>;
  readonly parent_group?: GroupFields;
  readonly place?: PlaceFields;
  readonly registration_setting?: EventRegistrationSettingFields;
  readonly scheduled_publish_time?: string;
  readonly start_time?: string;
  readonly ticket_setting?: EventTicketSettingFields;
  readonly ticket_uri?: string;
  readonly ticket_uri_start_sales_time?: string;
  readonly ticketing_privacy_uri?: string;
  readonly ticketing_terms_uri?: string;
  readonly timezone?: string;
  readonly type?: EventType;
  readonly updated_time?: string;
}

export type EventOnlineEventFormat = "fb_live" | "horizon_event" | "messenger_room" | "none" | "other" | "third_party";

export interface EventRegistrationSettingFields {
  readonly id?: string;
  readonly questions?: string;
  readonly target_type?: string;
  readonly ticket_tier_ids?: ReadonlyArray<string>;
}

export interface EventSourceGroupFields {
  readonly business?: BusinessFields;
  readonly event_sources?: ReadonlyArray<ExternalEventSourceFields>;
  readonly id?: string;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
}

export interface EventTicketSettingFields {
  readonly id?: string;
  readonly ticket_delivery_type?: string;
}

export interface EventTicketTierFields {
  readonly currency?: string;
  readonly description?: string;
  readonly end_sales_time?: string;
  readonly end_show_time?: string;
  readonly fee_settings?: string;
  readonly id?: string;
  readonly maximum_quantity?: number;
  readonly metadata?: string;
  readonly minimum_quantity?: number;
  readonly name?: string;
  readonly price?: number;
  readonly priority?: number;
  readonly retailer_id?: string;
  readonly seating_map_image_url?: string;
  readonly start_sales_time?: string;
  readonly start_show_time?: string;
  readonly status?: string;
  readonly total_quantity?: number;
}

export type EventTimeFilter = "past" | "upcoming";

export type EventType = "community" | "friends" | "group" | "messenger_community" | "private" | "public" | "work_company";

export interface ExperienceFields {
  readonly description?: string;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly name?: string;
  readonly with?: ReadonlyArray<UserFields>;
}

export interface ExtendedCreditAllocationConfigFields {
  readonly currency_amount?: CurrencyAmountFields;
  readonly id?: string;
  readonly liability_type?: string;
  readonly owning_business?: BusinessFields;
  readonly owning_credential?: ExtendedCreditFields;
  readonly partition_type?: string;
  readonly receiving_business?: BusinessFields;
  readonly receiving_credential?: ExtendedCreditFields;
  readonly request_status?: string;
  readonly send_bill_to?: string;
}

export type ExtendedCreditAllocationConfigLiabilityType = "MSA" | "Normal" | "Sequential";

export type ExtendedCreditAllocationConfigPartitionType = "AUTH" | "FIXED" | "FIXED_WITHOUT_PARTITION";

export type ExtendedCreditAllocationConfigSendBillTo = "Advertiser" | "Agency";

export interface ExtendedCreditApplicationFields {
  readonly billing_country?: string;
  readonly city?: string;
  readonly cnpj?: string;
  readonly country?: string;
  readonly display_currency?: string;
  readonly duns_number?: string;
  readonly id?: string;
  readonly invoice_email_address?: string;
  readonly is_umi?: boolean;
  readonly legal_entity_name?: string;
  readonly original_online_limit?: CurrencyAmountFields;
  readonly phone_number?: string;
  readonly postal_code?: string;
  readonly product_types?: ReadonlyArray<string>;
  readonly proposed_credit_limit?: CurrencyAmountFields;
  readonly registration_number?: string;
  readonly run_id?: string;
  readonly state?: string;
  readonly status?: string;
  readonly street1?: string;
  readonly street2?: string;
  readonly submitter?: UserFields;
  readonly tax_exempt_status?: string;
  readonly tax_id?: string;
  readonly terms?: string;
}

export interface ExtendedCreditEmailFields {
  readonly email?: string;
  readonly id?: string;
}

export interface ExtendedCreditFields {
  readonly allocated_amount?: CurrencyAmountFields;
  readonly balance?: CurrencyAmountFields;
  readonly credit_available?: CurrencyAmountFields;
  readonly credit_type?: string;
  readonly id?: string;
  readonly is_access_revoked?: boolean;
  readonly is_automated_experience?: boolean;
  readonly legal_entity_name?: string;
  readonly liable_address?: CRMAddressFields;
  readonly liable_biz_name?: string;
  readonly max_balance?: CurrencyAmountFields;
  readonly online_max_balance?: CurrencyAmountFields;
  readonly owner_business?: BusinessFields;
  readonly owner_business_name?: string;
  readonly partition_from?: string;
  readonly receiving_credit_allocation_config?: ExtendedCreditAllocationConfigFields;
  readonly send_bill_to_address?: CRMAddressFields;
  readonly send_bill_to_biz_name?: string;
  readonly sold_to_address?: CRMAddressFields;
}

export interface ExtendedCreditInfoFields {
  readonly credit_left?: string;
  readonly credit_revoked?: boolean;
  readonly credit_used?: string;
  readonly using_biz_ec?: string;
}

export interface ExtendedCreditInvoiceGroupFields {
  readonly auto_enroll?: boolean;
  readonly bill_to_address?: CRMAddressFields;
  readonly customer_po_number?: string;
  readonly email?: ExtendedCreditEmailFields;
  readonly emails?: ReadonlyArray<string>;
  readonly id?: string;
  readonly liable_address?: CRMAddressFields;
  readonly name?: string;
  readonly sold_to_address?: CRMAddressFields;
}

export interface ExternalEventSourceCPASEventsDebuggingFields {
  readonly actual_event_time?: number;
  readonly app_version?: string;
  readonly content_url?: string;
  readonly device_os?: string;
  readonly diagnostic?: string;
  readonly event_name?: string;
  readonly event_time?: number;
  readonly missing_ids?: string;
  readonly severity?: string;
}

export interface ExternalEventSourceCPASEventsDebuggingInfoFields {
  readonly counts?: number;
  readonly diagnostic?: string;
  readonly event_name?: string;
}

export interface ExternalEventSourceFields {
  readonly id?: string;
  readonly name?: string;
  readonly source_type?: string;
}

export interface ExternalMerchantSettingsFields {
  readonly connect_woo?: string;
  readonly external_platform?: string;
  readonly id?: string;
}

export interface FAMEKumoFields {
  readonly id?: string;
}

export interface FantasyGameFields {
  readonly id?: string;
  readonly name?: string;
}

export interface FBImageCopyrightMatchFields {
  readonly added_to_dashboard_time?: string;
  readonly applied_actions?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly audit_log?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly available_ui_actions?: ReadonlyArray<string>;
  readonly expiration_days?: number;
  readonly generic_match_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
  readonly is_business_page_match?: boolean;
  readonly last_modified_time?: string;
  readonly match_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly match_status?: string;
  readonly ownership_countries?: VideoCopyrightGeoGateFields;
  readonly reference_owner?: ProfileFields;
  readonly time_to_appeal?: number;
}

export interface FBPageAndInstagramAccountFields {
  readonly ad_permissions?: ReadonlyArray<string>;
  readonly bc_permission_status?: string;
  readonly bc_permissions?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly is_managed?: boolean;
  readonly matched_by?: string;
}

export interface FBPayButtonLoginFields {

}

export interface FinanceObjectFields {
  readonly finance_permission?: string;
  readonly user?: Readonly<Record<string, unknown>>;
}

export interface FlexibleTargetingFields {
  readonly behaviors?: ReadonlyArray<IDNameFields>;
  readonly college_years?: ReadonlyArray<number>;
  readonly connections?: ReadonlyArray<IDNameFields>;
  readonly custom_audiences?: ReadonlyArray<IDNameFields>;
  readonly education_majors?: ReadonlyArray<IDNameFields>;
  readonly education_schools?: ReadonlyArray<IDNameFields>;
  readonly education_statuses?: ReadonlyArray<number>;
  readonly ethnic_affinity?: ReadonlyArray<IDNameFields>;
  readonly family_statuses?: ReadonlyArray<IDNameFields>;
  readonly friends_of_connections?: ReadonlyArray<IDNameFields>;
  readonly generation?: ReadonlyArray<IDNameFields>;
  readonly home_ownership?: ReadonlyArray<IDNameFields>;
  readonly home_type?: ReadonlyArray<IDNameFields>;
  readonly home_value?: ReadonlyArray<IDNameFields>;
  readonly household_composition?: ReadonlyArray<IDNameFields>;
  readonly income?: ReadonlyArray<IDNameFields>;
  readonly industries?: ReadonlyArray<IDNameFields>;
  readonly interested_in?: ReadonlyArray<number>;
  readonly interests?: ReadonlyArray<IDNameFields>;
  readonly life_events?: ReadonlyArray<IDNameFields>;
  readonly moms?: ReadonlyArray<IDNameFields>;
  readonly net_worth?: ReadonlyArray<IDNameFields>;
  readonly office_type?: ReadonlyArray<IDNameFields>;
  readonly politics?: ReadonlyArray<IDNameFields>;
  readonly relationship_statuses?: ReadonlyArray<number>;
  readonly user_adclusters?: ReadonlyArray<IDNameFields>;
  readonly work_employers?: ReadonlyArray<IDNameFields>;
  readonly work_positions?: ReadonlyArray<IDNameFields>;
}

export interface FlightFields {
  readonly applinks?: CatalogItemAppLinksFields;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly description?: string;
  readonly destination_airport?: string;
  readonly destination_city?: string;
  readonly flight_id?: string;
  readonly id?: string;
  readonly image_fetch_status?: FlightImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly oneway_currency?: string;
  readonly oneway_price?: string;
  readonly origin_airport?: string;
  readonly origin_city?: string;
  readonly price?: string;
  readonly product_priority_0?: number;
  readonly product_priority_1?: number;
  readonly product_priority_2?: number;
  readonly product_priority_3?: number;
  readonly product_priority_4?: number;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<string>;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly visibility?: FlightVisibility;
}

export type FlightImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type FlightVisibility = "PUBLISHED" | "STAGING";

export interface FranchiseProgramFields {
  readonly business_asset_group?: BusinessAssetGroupFields;
  readonly creator_business?: BusinessFields;
  readonly description?: string;
  readonly end_date?: string;
  readonly id?: string;
  readonly name?: string;
  readonly program_access_type?: string;
  readonly program_approval_type?: string;
  readonly program_image_link?: string;
  readonly program_url?: string;
  readonly shared_custom_audience?: CustomAudienceFields;
  readonly start_date?: string;
}

export interface FranchiseProgramMemberFields {
  readonly business?: BusinessFields;
  readonly end_date?: string;
  readonly id?: string;
  readonly join_date?: string;
  readonly member_ad_account?: AdAccountFields;
  readonly member_user?: UserFields;
  readonly membership_status?: string;
  readonly page?: PageFields;
}

export interface FundingSourceDetailsCouponFields {
  readonly amount?: number;
  readonly campaign_ids?: ReadonlyArray<number>;
  readonly child_ad_account_id?: string;
  readonly child_bm_id?: string;
  readonly coupon_id?: string;
  readonly coupon_tiering?: FundingSourceDetailsCouponTieringFields;
  readonly currency?: string;
  readonly display_amount?: string;
  readonly expiration?: string;
  readonly original_amount?: number;
  readonly original_display_amount?: string;
  readonly start_date?: string;
  readonly vendor_id?: string;
}

export interface FundingSourceDetailsCouponTieringFields {
  readonly coupon_tiering_new?: Readonly<Record<string, unknown>>;
  readonly coupon_tiering_reactivation?: Readonly<Record<string, unknown>>;
}

export interface FundingSourceDetailsFields {
  readonly coupon?: FundingSourceDetailsCouponFields;
  readonly coupons?: ReadonlyArray<FundingSourceDetailsCouponFields>;
  readonly display_string?: string;
  readonly id?: string;
  readonly type?: number;
}

export interface FundraiserPersonToCharityFields {
  readonly amount_raised?: number;
  readonly charity_id?: string;
  readonly currency?: string;
  readonly description?: string;
  readonly donations_count?: number;
  readonly donors_count?: number;
  readonly end_time?: string;
  readonly external_amount_raised?: number;
  readonly external_donations_count?: number;
  readonly external_donors_count?: number;
  readonly external_event_name?: string;
  readonly external_event_start_time?: string;
  readonly external_event_uri?: string;
  readonly external_fundraiser_uri?: string;
  readonly external_id?: string;
  readonly goal_amount?: number;
  readonly id?: string;
  readonly internal_amount_raised?: number;
  readonly internal_donations_count?: number;
  readonly internal_donors_count?: number;
  readonly name?: string;
  readonly uri?: string;
}

export type FundraiserPersonToCharityFundraiserType = "person_for_charity";

export interface GeoGatingPolicyFields {
  readonly after_schedule?: string;
  readonly exclude_country?: ReadonlyArray<string>;
  readonly id?: string;
  readonly include_country?: ReadonlyArray<string>;
  readonly name?: string;
  readonly valid_from?: string;
  readonly valid_until?: string;
}

export interface GroupFields {
  readonly archived?: boolean;
  readonly cover?: CoverPhotoFields;
  readonly created_time?: string;
  readonly description?: string;
  readonly email?: string;
  readonly icon?: string;
  readonly id?: string;
  readonly install?: Readonly<Record<string, unknown>>;
  readonly link?: string;
  readonly member_count?: number;
  readonly member_request_count?: number;
  readonly name?: string;
  readonly parent?: Readonly<Record<string, unknown>>;
  readonly permissions?: ReadonlyArray<string>;
  readonly privacy?: string;
  readonly purpose?: string;
  readonly subdomain?: string;
  readonly updated_time?: string;
  readonly venue?: LocationFields;
}

export type GroupGroupType = "CASUAL" | "COWORKERS" | "CUSTOM" | "FOR_SALE" | "FOR_WORK" | "GAME" | "HEALTH_SUPPORT" | "JOBS" | "LEARNING" | "NONE" | "PARENTING" | "STREAMER" | "WORK_AGENT_TO_AGENT" | "WORK_ANNOUNCEMENT" | "WORK_DEMO_GROUP" | "WORK_DISCUSSION" | "WORK_EPHEMERAL" | "WORK_FEEDBACK" | "WORK_FOR_SALE" | "WORK_GARDEN" | "WORK_INTEGRITY" | "WORK_LEARNING" | "WORK_MENTORSHIP" | "WORK_MULTI_COMPANY" | "WORK_RECRUITING" | "WORK_SOCIAL" | "WORK_STAGES" | "WORK_TEAM" | "WORK_TEAMWORK";

export type GroupJoinSetting = "ADMIN_ONLY" | "ANYONE" | "NONE";

export type GroupPostPermissions = "ADMIN_ONLY" | "ANYONE" | "NONE";

export type GroupPurpose = "CASUAL" | "COWORKERS" | "CUSTOM" | "FOR_SALE" | "FOR_WORK" | "GAME" | "HEALTH_SUPPORT" | "JOBS" | "LEARNING" | "NONE" | "PARENTING" | "STREAMER" | "WORK_AGENT_TO_AGENT" | "WORK_ANNOUNCEMENT" | "WORK_DEMO_GROUP" | "WORK_DISCUSSION" | "WORK_EPHEMERAL" | "WORK_FEEDBACK" | "WORK_FOR_SALE" | "WORK_GARDEN" | "WORK_INTEGRITY" | "WORK_LEARNING" | "WORK_MENTORSHIP" | "WORK_MULTI_COMPANY" | "WORK_RECRUITING" | "WORK_SOCIAL" | "WORK_STAGES" | "WORK_TEAM" | "WORK_TEAMWORK";

export interface GuidanceLiftEstimateFields {
  readonly actual_7d_cpr?: number;
  readonly adoption_date?: string;
  readonly guidance_name?: string;
  readonly lift_estimation?: number;
  readonly predicted_7d_cpr?: number;
}

export interface HasLeadAccessFields {
  readonly app_has_leads_permission?: boolean;
  readonly can_access_lead?: boolean;
  readonly enabled_lead_access_manager?: boolean;
  readonly failure_reason?: string;
  readonly failure_resolution?: string;
  readonly is_page_admin?: boolean;
  readonly page_id?: string;
  readonly user_has_leads_permission?: boolean;
  readonly user_id?: string;
}

export type HighDemandPeriodBudgetValueType = "ABSOLUTE" | "MULTIPLIER";

export interface HighDemandPeriodFields {
  readonly ad_object_id?: string;
  readonly budget_value?: number;
  readonly budget_value_type?: string;
  readonly id?: string;
  readonly recurrence_type?: string;
  readonly time_end?: string;
  readonly time_start?: string;
  readonly weekly_schedule?: ReadonlyArray<HighDemandPeriodTimeSuggestionWeeklySegmentFields>;
}

export interface HighDemandPeriodGetFields {
  readonly ad_object_id?: string;
  readonly budget_value?: number;
  readonly budget_value_type?: string;
  readonly id?: string;
  readonly recurrence_type?: string;
  readonly time_end?: string;
  readonly time_start?: string;
  readonly weekly_schedule?: ReadonlyArray<unknown>;
}

export interface HighDemandPeriodTimeSuggestionWeeklySegmentFields {
  readonly days?: ReadonlyArray<string>;
  readonly end_minute?: number;
  readonly start_minute?: number;
  readonly timezone_type?: string;
}

export interface HomeListingFields {
  readonly ac_type?: string;
  readonly additional_fees_description?: string;
  readonly address?: Readonly<Record<string, unknown>>;
  readonly agent_company?: string;
  readonly agent_email?: string;
  readonly agent_fb_page_id?: PageFields;
  readonly agent_name?: string;
  readonly agent_phone?: string;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly area_size?: number;
  readonly area_unit?: string;
  readonly availability?: string;
  readonly co_2_emission_rating_eu?: Readonly<Record<string, unknown>>;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly days_on_market?: number;
  readonly description?: string;
  readonly energy_rating_eu?: Readonly<Record<string, unknown>>;
  readonly furnish_type?: string;
  readonly group_id?: string;
  readonly heating_type?: string;
  readonly home_listing_id?: string;
  readonly id?: string;
  readonly image_fetch_status?: HomeListingImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly laundry_type?: string;
  readonly listing_type?: string;
  readonly max_currency?: string;
  readonly max_price?: string;
  readonly min_currency?: string;
  readonly min_price?: string;
  readonly name?: string;
  readonly num_baths?: number;
  readonly num_beds?: number;
  readonly num_rooms?: number;
  readonly num_units?: number;
  readonly parking_type?: string;
  readonly partner_verification?: string;
  readonly pet_policy?: string;
  readonly price?: string;
  readonly property_type?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly securitydeposit_currency?: string;
  readonly securitydeposit_price?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly visibility?: HomeListingVisibility;
  readonly year_built?: number;
}

export type HomeListingGetAcType = "CENTRAL" | "EMPTY_VALUE" | "NONE" | "OTHER";

export type HomeListingGetAreaUnit = "EMPTY_VALUE" | "SQFT" | "SQM";

export type HomeListingGetAvailability = "AVAILABLE_SOON" | "FOR_RENT" | "FOR_SALE" | "OFF_MARKET" | "RECENTLY_SOLD" | "SALE_PENDING";

export type HomeListingGetCapabilities = "B2C_MARKETPLACE" | "BIZ_MSG_AI_AGENT" | "BUSINESS_INBOX_IN_MESSENGER" | "BUY_ON_FACEBOOK" | "C2C_MARKETPLACE" | "CPAS_PARENT_CATALOG" | "DA" | "DAILY_DEALS" | "DAILY_DEALS_LEGACY" | "EVENT" | "EVENT_DEPRECATED" | "GROUPS" | "IG_ONSITE_SHOPPING" | "IG_PRODUCT_TAGGING" | "LDP" | "MARKETPLACE" | "MARKETPLACE_ADS_DEPRECATED" | "MARKETPLACE_HOME_RENTALS" | "MARKETPLACE_HOME_SALES" | "MARKETPLACE_MOTORS" | "MARKETPLACE_SHOPS" | "MINI_SHOPS" | "NEIGHBORHOODS" | "OFFLINE_CONVERSIONS" | "PROFILE" | "SERVICE" | "SHOPS" | "TEST_CAPABILITY" | "UNIVERSAL_CHECKOUT" | "US_MARKETPLACE" | "WHATSAPP" | "WHATSAPP_MARKETING_MESSAGE";

export type HomeListingGetCapabilitiesRenderingCatalogManager = "B2C_MARKETPLACE" | "BIZ_MSG_AI_AGENT" | "BUSINESS_INBOX_IN_MESSENGER" | "BUY_ON_FACEBOOK" | "C2C_MARKETPLACE" | "CPAS_PARENT_CATALOG" | "DA" | "DAILY_DEALS" | "DAILY_DEALS_LEGACY" | "EVENT" | "EVENT_DEPRECATED" | "GROUPS" | "IG_ONSITE_SHOPPING" | "IG_PRODUCT_TAGGING" | "LDP" | "MARKETPLACE" | "MARKETPLACE_ADS_DEPRECATED" | "MARKETPLACE_HOME_RENTALS" | "MARKETPLACE_HOME_SALES" | "MARKETPLACE_MOTORS" | "MARKETPLACE_SHOPS" | "MINI_SHOPS" | "NEIGHBORHOODS" | "OFFLINE_CONVERSIONS" | "PROFILE" | "SERVICE" | "SHOPS" | "TEST_CAPABILITY" | "UNIVERSAL_CHECKOUT" | "US_MARKETPLACE" | "WHATSAPP" | "WHATSAPP_MARKETING_MESSAGE";

export interface HomeListingGetFields {
  readonly ac_type?: HomeListingGetAcType;
  readonly additional_fees_description?: string;
  readonly address?: unknown;
  readonly agent_company?: string;
  readonly agent_email?: string;
  readonly agent_fb_page_id?: unknown;
  readonly agent_name?: string;
  readonly agent_phone?: string;
  readonly applinks?: unknown;
  readonly area_size?: number;
  readonly area_unit?: HomeListingGetAreaUnit;
  readonly availability?: HomeListingGetAvailability;
  readonly capabilities?: ReadonlyArray<HomeListingGetCapabilities>;
  readonly capabilities_disabled_by_user?: ReadonlyArray<string>;
  readonly capabilities_rendering_catalog_manager?: ReadonlyArray<HomeListingGetCapabilitiesRenderingCatalogManager>;
  readonly capability_to_rejection_reason?: ReadonlyArray<unknown>;
  readonly catalog_item_overrides?: unknown;
  readonly channels_to_integrity_status?: unknown;
  readonly co_2_emission_rating_eu?: unknown;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly days_on_market?: number;
  readonly description?: string;
  readonly enabled_capability_to_review_status?: ReadonlyArray<unknown>;
  readonly energy_rating_eu?: unknown;
  readonly furnish_type?: HomeListingGetFurnishType;
  readonly group_id?: string;
  readonly heating_type?: HomeListingGetHeatingType;
  readonly home_listing_id?: string;
  readonly id?: number;
  readonly image_fetch_status?: HomeListingGetImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly is_blackholed?: boolean;
  readonly laundry_type?: HomeListingGetLaundryType;
  readonly listing_type?: HomeListingGetListingType;
  readonly max_currency?: string;
  readonly max_price?: string;
  readonly min_currency?: string;
  readonly min_price?: string;
  readonly name?: string;
  readonly num_baths?: number;
  readonly num_beds?: number;
  readonly num_rooms?: number;
  readonly num_units?: number;
  readonly override_details?: unknown;
  readonly parking_type?: HomeListingGetParkingType;
  readonly partner_verification?: HomeListingGetPartnerVerification;
  readonly pet_policy?: string;
  readonly price?: string;
  readonly product_feed?: unknown;
  readonly property_type?: HomeListingGetPropertyType;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly sanitized_previews?: ReadonlyArray<string>;
  readonly securitydeposit_currency?: string;
  readonly securitydeposit_price?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly unit_price?: unknown;
  readonly url?: string;
  readonly url_shimmed?: string;
  readonly validation_errors?: unknown;
  readonly videos_metadata?: unknown;
  readonly visibility?: HomeListingGetVisibility;
  readonly year_built?: number;
}

export type HomeListingGetFurnishType = "EMPTY_VALUE" | "FURNISHED" | "SEMIFURNISHED" | "UNFURNISHED";

export type HomeListingGetHeatingType = "CENTRAL" | "ELECTRIC" | "EMPTY_VALUE" | "GAS" | "NONE" | "OTHER" | "RADIATOR";

export type HomeListingGetImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type HomeListingGetLaundryType = "EMPTY_VALUE" | "IN_BUILDING" | "IN_UNIT" | "NONE" | "OTHER";

export type HomeListingGetListingType = "EMPTY_VALUE" | "FORECLOSED" | "FOR_RENT_BY_AGENT" | "FOR_RENT_BY_OWNER" | "FOR_SALE_BY_AGENT" | "FOR_SALE_BY_OWNER" | "NEW_CONSTRUCTION" | "NEW_LISTING" | "OTHER";

export type HomeListingGetParkingType = "EMPTY_VALUE" | "GARAGE" | "NONE" | "OFF_STREET" | "OTHER" | "STREET";

export type HomeListingGetPartnerVerification = "EMPTY_VALUE" | "NONE" | "VERIFIED";

export type HomeListingGetPropertyType = "APARTMENT" | "APARTMENT_ROOM" | "BUILDER_FLOOR" | "BUNGALOW" | "CONDO" | "CONDO_ROOM" | "EMPTY_VALUE" | "HOUSE" | "HOUSE_IN_CONDOMINIUM" | "HOUSE_IN_VILLA" | "HOUSE_ROOM" | "LAND" | "LOFT" | "MANUFACTURED" | "OTHER" | "OTHER_ROOM" | "PENTHOUSE" | "SINGLE_FAMILY_HOME" | "STUDIO" | "TOWNHOUSE" | "TOWNHOUSE_ROOM";

export type HomeListingGetVisibility = "ACTIVE" | "ARCHIVED" | "HIDDEN" | "LEGACY_PUBLIC" | "PUBLISHED" | "STAGING" | "VISIBLE_ONLY_WITH_OVERRIDES" | "WHITELIST_ONLY";

export type HomeListingImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type HomeListingVisibility = "PUBLISHED" | "STAGING";

export interface HotelFields {
  readonly address?: string;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly brand?: string;
  readonly category?: string;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly description?: string;
  readonly guest_ratings?: string;
  readonly hotel_id?: string;
  readonly id?: string;
  readonly image_fetch_status?: HotelImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly lowest_base_price?: string;
  readonly loyalty_program?: string;
  readonly margin_level?: number;
  readonly name?: string;
  readonly phone?: string;
  readonly product_priority_0?: number;
  readonly product_priority_1?: number;
  readonly product_priority_2?: number;
  readonly product_priority_3?: number;
  readonly product_priority_4?: number;
  readonly sale_price?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly star_rating?: number;
  readonly tags?: ReadonlyArray<string>;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly visibility?: HotelVisibility;
}

export type HotelImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export interface HotelRoomFields {
  readonly applinks?: CatalogItemAppLinksFields;
  readonly base_price?: string;
  readonly currency?: string;
  readonly description?: string;
  readonly id?: string;
  readonly images?: ReadonlyArray<string>;
  readonly margin_level?: string;
  readonly name?: string;
  readonly room_id?: string;
  readonly sale_price?: string;
  readonly url?: string;
}

export type HotelVisibility = "PUBLISHED" | "STAGING";

export interface HoursFields {
  readonly id?: string;
  readonly permanent_status?: string;
}

export interface IDNameFields {
  readonly id?: string;
  readonly name?: string;
}

export interface IGAccessTokenForIGOnlyAPIFields {
  readonly access_token?: string;
  readonly expires_in?: number;
  readonly token_type?: string;
}

export interface IGBCAdsPermissionFields {
  readonly id?: string;
  readonly permission_type?: string;
  readonly status?: string;
}

export interface IGBoostMediaAdFields {
  readonly ad_id?: string;
  readonly ad_status?: string;
}

export interface IGCommentFields {
  readonly from?: IGCommentFromUserFields;
  readonly hidden?: boolean;
  readonly id?: string;
  readonly legacy_instagram_comment_id?: string;
  readonly like_count?: number;
  readonly media?: IGMediaFields;
  readonly parent_id?: string;
  readonly text?: string;
  readonly timestamp?: string;
  readonly user?: IGUserFields;
  readonly username?: string;
}

export interface IGCommentFromUserFields {
  readonly id?: string;
  readonly self_ig_scoped_id?: string;
  readonly username?: string;
}

export interface IGMediaBoostEligibilityInfoFields {
  readonly boost_ineligible_reason?: string;
  readonly eligible_to_boost?: boolean;
}

export interface IGMediaFields {
  readonly alt_text?: string;
  readonly audio_id?: string;
  readonly boost_eligibility_info?: IGMediaBoostEligibilityInfoFields;
  readonly caption?: string;
  readonly comments_count?: number;
  readonly copyright_check_information?: IGVideoCopyrightCheckMatchesInformationFields;
  readonly current_live_viewer_count?: number;
  readonly has_poll?: boolean;
  readonly has_slider?: boolean;
  readonly id?: string;
  readonly ig_id?: string;
  readonly is_ai_generated?: boolean;
  readonly is_comment_enabled?: boolean;
  readonly is_shared_to_feed?: boolean;
  readonly legacy_instagram_media_id?: string;
  readonly like_count?: number;
  readonly media_audio_type?: string;
  readonly media_product_type?: string;
  readonly media_type?: string;
  readonly media_url?: string;
  readonly owner?: IGUserFields;
  readonly permalink?: string;
  readonly reposts_count?: number;
  readonly saved_count?: number;
  readonly shares_count?: number;
  readonly shortcode?: string;
  readonly thumbnail_url?: string;
  readonly timestamp?: string;
  readonly total_comments_count?: number;
  readonly total_like_count?: number;
  readonly total_views_count?: number;
  readonly username?: string;
  readonly video_title?: string;
  readonly view_count?: number;
}

export interface IGMediaForIGOnlyAPIFields {
  readonly alt_text?: string;
  readonly caption?: string;
  readonly comments_count?: number;
  readonly current_live_viewer_count?: number;
  readonly id?: string;
  readonly is_ai_generated?: boolean;
  readonly is_comment_enabled?: boolean;
  readonly is_shared_to_feed?: boolean;
  readonly like_count?: number;
  readonly media_product_type?: string;
  readonly media_type?: string;
  readonly media_url?: string;
  readonly owner?: UserFields;
  readonly permalink?: string;
  readonly shortcode?: string;
  readonly thumbnail_url?: string;
  readonly timestamp?: string;
  readonly username?: string;
}

export interface IGProductTaggingInvalidationErrorFields {
  readonly description?: string;
  readonly taggability_state?: string;
  readonly title?: string;
}

export interface IGRefreshAccessTokenForIGOnlyAPIFields {
  readonly access_token?: string;
  readonly expires_in?: number;
  readonly permissions?: string;
  readonly token_type?: string;
}

export interface IGResumableVideoUploadStatusFields {
  readonly processing_phase?: VideoStatusProcessingPhaseFields;
  readonly uploading_phase?: VideoStatusUploadingPhaseFields;
}

export interface IGShoppingProductAppealFields {
  readonly eligible_for_appeal?: boolean;
  readonly product_appeal_status?: string;
  readonly product_id?: number;
  readonly rejection_reasons?: ReadonlyArray<string>;
  readonly review_status?: string;
}

export interface IGShoppingReviewStatusOnsiteEligibilityFields {
  readonly is_eligible?: boolean;
  readonly reasons?: ReadonlyArray<IGShoppingReviewStatusReasonWithHelpMessageFields>;
}

export interface IGShoppingReviewStatusReasonWithHelpMessageFields {
  readonly code?: string;
  readonly help_url?: string;
  readonly message?: string;
}

export interface IGUpcomingEventFields {
  readonly end_time?: string;
  readonly id?: string;
  readonly notification_subtypes?: ReadonlyArray<string>;
  readonly notification_target_time?: string;
  readonly start_time?: string;
  readonly title?: string;
}

export type IGUpcomingEventNotificationSubtypes = "AFTER_EVENT_1DAY" | "AFTER_EVENT_2DAY" | "AFTER_EVENT_3DAY" | "AFTER_EVENT_4DAY" | "AFTER_EVENT_5DAY" | "AFTER_EVENT_6DAY" | "AFTER_EVENT_7DAY" | "BEFORE_EVENT_15MIN" | "BEFORE_EVENT_1DAY" | "BEFORE_EVENT_1HOUR" | "BEFORE_EVENT_2DAY" | "EVENT_START" | "RESCHEDULED";

export type IGUpcomingEventNotificationTargetTime = "EVENT_END" | "EVENT_START";

export type IGUserExportForCAMCreatorCountries = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export type IGUserExportForCAMCreatorGender = "custom" | "female" | "male" | "unknown";

export interface IGUserExportForCAMFields {
  readonly age_bucket?: string;
  readonly badges?: ReadonlyArray<string>;
  readonly biography?: string;
  readonly country?: string;
  readonly email?: string;
  readonly gender?: string;
  readonly has_brand_partnership_experience?: boolean;
  readonly id?: string;
  readonly is_account_verified?: boolean;
  readonly is_creator_following_brand?: boolean;
  readonly is_paid_partnership_messages_enabled?: boolean;
  readonly messaging_id?: string;
  readonly onboarded_status?: boolean;
  readonly page_id?: string;
  readonly page_name?: string;
  readonly past_brand_partnership_partners?: ReadonlyArray<string>;
  readonly platforms?: ReadonlyArray<string>;
  readonly portfolio_url?: string;
  readonly profile_picture_url?: string;
  readonly username?: string;
}

export type IGUserExportForCAMMajorAudienceCountries = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export type IGUserExportForCAMMajorAudienceGender = "custom" | "female" | "male" | "unknown";

export type IGUserExportForCAMPlatform = "facebook" | "instagram";

export type IGUserExportForCAMRecommendationType = "high_ad_performance" | "most_ads_experience" | "most_relevant_for_me" | "similar_audience" | "similar_brands";

export interface IGUserFields {
  readonly biography?: string;
  readonly business_discovery?: IGUserFields;
  readonly collaborative_media_search?: ShadowIGUserCollaborativeMediaFields;
  readonly followers_count?: number;
  readonly follows_count?: number;
  readonly has_profile_pic?: boolean;
  readonly id?: string;
  readonly ig_id?: number;
  readonly is_published?: boolean;
  readonly legacy_instagram_user_id?: string;
  readonly media_count?: number;
  readonly mentioned_comment?: IGCommentFields;
  readonly mentioned_media?: IGMediaFields;
  readonly mini_shop_storefront?: ShopFields;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
  readonly profile_picture_url?: string;
  readonly shopping_product_tag_eligibility?: boolean;
  readonly shopping_review_status?: string;
  readonly username?: string;
  readonly website?: string;
}

export interface IGUserForIGOnlyAPIFields {
  readonly account_type?: string;
  readonly biography?: string;
  readonly followers_count?: number;
  readonly follows_count?: number;
  readonly id?: string;
  readonly media_count?: number;
  readonly name?: string;
  readonly profile_picture_url?: string;
  readonly user_id?: number;
  readonly username?: string;
  readonly website?: string;
}

export interface IGUserMessengerProfileFields {
  readonly ice_breakers?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly persistent_menu?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface IGUserSubscribedAppsDataFields {
  readonly app_id?: string;
  readonly subscribed_fields?: ReadonlyArray<string>;
}

export interface IGVideoCopyrightCheckMatchesInformationFields {
  readonly copyright_matches?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly status?: IGVideoCopyrightCheckStatusFields;
}

export interface IGVideoCopyrightCheckStatusFields {
  readonly matches_found?: boolean;
  readonly status?: string;
}

export interface ImageCopyrightDisputeFields {
  readonly appeal_form_data?: string;
  readonly dispute_form_data?: string;
  readonly expiration_time?: string;
  readonly id?: string;
  readonly match_id?: string;
  readonly status?: string;
  readonly time_appealed?: string;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface ImageCopyrightFields {
  readonly artist?: string;
  readonly copyright_monitoring_status?: string;
  readonly creation_time?: string;
  readonly creator?: string;
  readonly custom_id?: string;
  readonly description?: string;
  readonly filename?: string;
  readonly id?: string;
  readonly image?: PhotoFields;
  readonly matches_count?: number;
  readonly original_content_creation_date?: string;
  readonly ownership_countries?: VideoCopyrightGeoGateFields;
  readonly tags?: ReadonlyArray<string>;
  readonly title?: string;
  readonly update_time?: string;
}

export type ImageCopyrightGeoOwnership = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TP" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export interface ImageReferenceMatchFields {
  readonly conflict_status?: string;
  readonly conflicting_countries?: ReadonlyArray<string>;
  readonly country_resolution_history?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly creation_time?: string;
  readonly current_conflict_resolved_countries?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly displayed_match_state?: string;
  readonly dispute_form_data_entries_with_translations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly expiration_time?: string;
  readonly id?: string;
  readonly match_state?: string;
  readonly matched_reference_copyright?: ImageCopyrightFields;
  readonly matched_reference_owner_rh_owner?: Readonly<Record<string, unknown>>;
  readonly modification_history?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly reference_copyright?: ImageCopyrightFields;
  readonly reference_owner_rh_owner?: Readonly<Record<string, unknown>>;
  readonly rejection_form_data_entries_with_translations?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly resolution_reason?: string;
  readonly update_time?: string;
}

export type InsightsResultBreakdown = "action_type" | "follow_type" | "story_navigation_action_type" | "surface_type";

export type InsightsResultDatePreset = "data_maximum" | "last_14d" | "last_28d" | "last_30d" | "last_3d" | "last_7d" | "last_90d" | "last_month" | "last_quarter" | "last_week_mon_sun" | "last_week_sun_sat" | "last_year" | "maximum" | "this_month" | "this_quarter" | "this_week_mon_today" | "this_week_sun_today" | "this_year" | "today" | "yesterday";

export interface InsightsResultFields {
  readonly description?: string;
  readonly description_from_api_doc?: string;
  readonly id?: string;
  readonly name?: string;
  readonly period?: string;
  readonly title?: string;
  readonly values?: ReadonlyArray<InsightsValueFields>;
}

export type InsightsResultMetric = "comments" | "crossposted_views" | "facebook_views" | "follows" | "ig_reels_avg_watch_time" | "ig_reels_video_view_total_time" | "impressions" | "likes" | "link_clicks" | "navigation" | "profile_activity" | "profile_visits" | "quotes" | "reach" | "reels_skip_rate" | "replies" | "reposts" | "saved" | "shares" | "thread_replies" | "thread_shares" | "threads_media_clicks" | "threads_reposts" | "threads_views" | "total_comments" | "total_interactions" | "total_likes" | "total_views" | "views";

export type InsightsResultMetricType = "default" | "time_series" | "total_value";

export type InsightsResultPeriod = "day" | "days_28" | "lifetime" | "month" | "total_over_range" | "week";

export type InsightsResultTimeframe = "last_14_days" | "last_30_days" | "last_90_days" | "prev_month" | "this_month" | "this_week";

export interface InsightsValueFields {
  readonly campaign_id?: string;
  readonly earning_source?: string;
  readonly end_time?: string;
  readonly engagement_source?: string;
  readonly is_from_ads?: string;
  readonly is_from_followers?: string;
  readonly message_type?: string;
  readonly messaging_channel?: string;
  readonly monetization_tool?: string;
  readonly recurring_notifications_entry_point?: string;
  readonly recurring_notifications_frequency?: string;
  readonly recurring_notifications_topic?: string;
  readonly start_time?: string;
  readonly value?: Readonly<Record<string, unknown>>;
}

export interface InstagramBusinessAssetFields {
  readonly id?: string;
  readonly ig_user_id?: string;
  readonly ig_username?: string;
}

export type InstagramBusinessAssetPermittedTasks = "ADVERTISE" | "ANALYZE" | "COMMUNITY_ACTIVITY" | "CONTENT" | "MESSAGES";

export type InstagramBusinessAssetTasks = "ADVERTISE" | "ANALYZE" | "COMMUNITY_ACTIVITY" | "CONTENT" | "MESSAGES";

export type InstagramInsightsResultBreakdown = "action_type" | "follow_type" | "story_navigation_action_type" | "surface_type";

export interface InstagramInsightsResultFields {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly period?: string;
  readonly title?: string;
  readonly total_value?: Readonly<Record<string, unknown>>;
  readonly values?: ReadonlyArray<InstagramInsightsValueFields>;
}

export type InstagramInsightsResultMetric = "comments" | "crossposted_views" | "facebook_views" | "follows" | "ig_reels_avg_watch_time" | "ig_reels_video_view_total_time" | "impressions" | "likes" | "link_clicks" | "navigation" | "profile_activity" | "profile_visits" | "reach" | "reels_skip_rate" | "replies" | "reposts" | "saved" | "shares" | "total_comments" | "total_interactions" | "total_likes" | "total_views" | "views";

export type InstagramInsightsResultMetricType = "default" | "time_series" | "total_value";

export type InstagramInsightsResultPeriod = "day" | "days_28" | "lifetime" | "month" | "total_over_range" | "week";

export type InstagramInsightsResultTimeframe = "last_14_days" | "last_30_days" | "last_90_days" | "prev_month" | "this_month" | "this_week";

export interface InstagramInsightsValueFields {
  readonly end_time?: string;
  readonly value?: Readonly<Record<string, unknown>>;
}

export interface InstagramRelatedProductTagsFields {
  readonly checkout_setting?: string;
  readonly id?: number;
  readonly image_uri?: string;
  readonly name?: string;
  readonly price_label?: string;
  readonly sale_price_label?: string;
}

export interface InstagramShoppingMerchantReviewMessageFields {
  readonly help_url?: string;
  readonly message?: string;
}

export interface InstagramUserFields {
  readonly follow_count?: number;
  readonly followed_by_count?: number;
  readonly has_profile_picture?: boolean;
  readonly id?: string;
  readonly ig_user_id?: string;
  readonly is_private?: boolean;
  readonly is_published?: boolean;
  readonly media_count?: number;
  readonly mini_shop_storefront?: ShopFields;
  readonly owner_business?: BusinessFields;
  readonly profile_pic?: string;
  readonly username?: string;
}

export interface InstantArticleInsightsQueryResultFields {
  readonly breakdowns?: Readonly<Record<string, string>>;
  readonly name?: string;
  readonly time?: string;
  readonly value?: string;
}

export interface IosAppLinkFields {
  readonly app_name?: string;
  readonly app_store_id?: string;
  readonly url?: string;
}

export interface IPObjectFields {
  readonly ip_permission?: string;
  readonly user?: Readonly<Record<string, unknown>>;
}

export interface JobOpeningFields {
  readonly address?: string;
  readonly application_callback_url?: string;
  readonly created_time?: string;
  readonly description?: string;
  readonly errors?: ReadonlyArray<string>;
  readonly external_company_facebook_url?: string;
  readonly external_company_full_address?: string;
  readonly external_company_id?: string;
  readonly external_company_name?: string;
  readonly external_id?: string;
  readonly id?: string;
  readonly job_status?: JobOpeningJobStatus;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly offsite_application_url?: string;
  readonly page?: PageFields;
  readonly photo?: PhotoFields;
  readonly platform_review_status?: JobOpeningPlatformReviewStatus;
  readonly post?: PostFields;
  readonly remote_type?: string;
  readonly review_rejection_reasons?: ReadonlyArray<JobOpeningReviewRejectionReasons>;
  readonly title?: string;
  readonly type?: JobOpeningType;
}

export type JobOpeningJobStatus = "CLOSED" | "DRAFT" | "OPEN" | "PROVISIONAL";

export type JobOpeningPlatformReviewStatus = "APPROVED" | "PENDING" | "REJECTED";

export type JobOpeningReviewRejectionReasons = "ADULT_CONTENT" | "DISCRIMINATION" | "DRUGS" | "GENERIC_DEFAULT" | "ILLEGAL" | "IMPERSONATION" | "MISLEADING" | "MULTILEVEL_MARKETING" | "PERSONAL_INFO" | "SEXUAL";

export type JobOpeningType = "CONTRACT" | "FULL_TIME" | "INTERNSHIP" | "PART_TIME" | "VOLUNTEER";

export interface KeyValueFields {
  readonly key?: string;
  readonly value?: string;
}

export interface LeadFields {
  readonly ad_id?: string;
  readonly ad_name?: string;
  readonly adset_id?: string;
  readonly adset_name?: string;
  readonly campaign_id?: string;
  readonly campaign_name?: string;
  readonly created_time?: string;
  readonly custom_disclaimer_responses?: ReadonlyArray<UserLeadGenDisclaimerResponseFields>;
  readonly field_data?: ReadonlyArray<UserLeadGenFieldDataFields>;
  readonly form_id?: string;
  readonly home_listing?: HomeListingFields;
  readonly id?: string;
  readonly is_organic?: boolean;
  readonly partner_name?: string;
  readonly platform?: string;
  readonly post?: LinkFields;
  readonly post_submission_check_result?: LeadGenPostSubmissionCheckResultFields;
  readonly retailer_item_id?: string;
  readonly vehicle?: VehicleFields;
}

export interface LeadGenAppointmentBookingInfoFields {
  readonly advertiser_timezone_offset?: string;
  readonly appointment_durations?: ReadonlyArray<string>;
  readonly appointment_slots_by_day?: ReadonlyArray<LeadGenAppointmentSlotsByDayFields>;
}

export interface LeadGenAppointmentSlotsByDayFields {
  readonly appointment_slots?: ReadonlyArray<LeadGenAppointmentTimeSlotFields>;
  readonly day?: string;
}

export interface LeadGenAppointmentTimeSlotFields {
  readonly end_time?: number;
  readonly start_time?: number;
}

export interface LeadGenClientValidationRulesFields {
  readonly exclude_emoji_and_special_chars_enabled?: boolean;
  readonly max_length_value?: number;
  readonly min_length_value?: number;
}

export interface LeadGenConditionalQuestionsGroupChoicesFields {
  readonly customized_token?: string;
  readonly next_question_choices?: ReadonlyArray<LeadGenConditionalQuestionsGroupChoicesFields>;
  readonly value?: string;
}

export interface LeadGenConditionalQuestionsGroupQuestionsFields {
  readonly field_key?: string;
  readonly input_type?: string;
  readonly name?: string;
}

export interface LeadGenContextCardFields {
  readonly button_text?: string;
  readonly content?: ReadonlyArray<string>;
  readonly cover_photo?: PhotoFields;
  readonly id?: string;
  readonly style?: string;
  readonly title?: string;
}

export interface LeadGenCustomDisclaimerBodyFields {
  readonly text?: string;
  readonly url_entities?: ReadonlyArray<LeadGenURLEntityAtRangesFields>;
}

export interface LeadGenCustomDisclaimerFields {
  readonly body?: LeadGenCustomDisclaimerBodyFields;
  readonly checkboxes?: ReadonlyArray<LeadGenLegalContentCheckboxFields>;
  readonly title?: string;
}

export interface LeadGenDataDraftFields {
  readonly block_display_for_non_targeted_viewer?: boolean;
  readonly created_time?: string;
  readonly disqualified_end_component?: Readonly<Record<string, unknown>>;
  readonly follow_up_action_url?: string;
  readonly id?: string;
  readonly is_optimized_for_quality?: boolean;
  readonly legal_content?: Readonly<Record<string, unknown>>;
  readonly locale?: string;
  readonly name?: string;
  readonly page?: PageFields;
  readonly question_page_custom_headline?: string;
  readonly questions?: ReadonlyArray<LeadGenDraftQuestionFields>;
  readonly should_enforce_work_email?: boolean;
  readonly status?: string;
  readonly thank_you_page?: Readonly<Record<string, unknown>>;
  readonly tracking_parameters?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface LeadGenDirectCRMIntegrationConfigFields {
  readonly auth_id?: string;
  readonly creation_time?: string;
  readonly id?: string;
  readonly lead_filter_settings?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly lead_gen_data?: LeadgenFormFields;
  readonly matched_fields?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly matched_fields_labels?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly resources?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly third_party_app_id?: string;
}

export interface LeadGenDraftQuestionFields {
  readonly conditional_questions_choices?: ReadonlyArray<LeadGenConditionalQuestionsGroupChoicesFields>;
  readonly conditional_questions_group_id?: string;
  readonly dependent_conditional_questions?: ReadonlyArray<LeadGenConditionalQuestionsGroupQuestionsFields>;
  readonly inline_context?: string;
  readonly key?: string;
  readonly label?: string;
  readonly options?: ReadonlyArray<LeadGenQuestionOptionFields>;
  readonly type?: string;
}

export interface LeadgenFormFields {
  readonly allow_organic_lead?: boolean;
  readonly block_display_for_non_targeted_viewer?: boolean;
  readonly context_card?: LeadGenContextCardFields;
  readonly created_time?: string;
  readonly creator?: UserFields;
  readonly expired_leads_count?: number;
  readonly follow_up_action_text?: string;
  readonly follow_up_action_url?: string;
  readonly id?: string;
  readonly is_optimized_for_quality?: boolean;
  readonly leads_count?: number;
  readonly legal_content?: LeadGenLegalContentFields;
  readonly locale?: string;
  readonly name?: string;
  readonly organic_leads_count?: number;
  readonly page?: PageFields;
  readonly page_id?: string;
  readonly privacy_policy_url?: string;
  readonly question_page_custom_headline?: string;
  readonly questions?: ReadonlyArray<LeadGenQuestionFields>;
  readonly status?: string;
  readonly thank_you_page?: LeadGenThankYouPageFields;
  readonly tracking_parameters?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export type LeadgenFormLocale = "AR_AR" | "CS_CZ" | "DA_DK" | "DE_DE" | "EL_GR" | "EN_GB" | "EN_US" | "ES_ES" | "ES_LA" | "FI_FI" | "FR_FR" | "HE_IL" | "HI_IN" | "HU_HU" | "ID_ID" | "IT_IT" | "JA_JP" | "KO_KR" | "NB_NO" | "NL_NL" | "PL_PL" | "PT_BR" | "PT_PT" | "RO_RO" | "RU_RU" | "SV_SE" | "TH_TH" | "TR_TR" | "VI_VN" | "ZH_CN" | "ZH_HK" | "ZH_TW";

export interface LeadGenFormPreviewDetailsFields {
  readonly book_on_website_text?: string;
  readonly call_business_text?: string;
  readonly chat_on_messenger_text?: string;
  readonly chat_on_whatsapp_text?: string;
  readonly contact_information_text?: string;
  readonly creatives_overview_default_text?: string;
  readonly custom_disclaimer_editor_state?: string;
  readonly custom_disclaimer_title?: string;
  readonly data_privacy_policy_setting_description?: string;
  readonly default_appointment_scheduling_inline_context?: string;
  readonly default_disqualified_end_component?: Readonly<Record<string, unknown>>;
  readonly default_thank_you_page?: Readonly<Record<string, unknown>>;
  readonly disqualified_thank_you_card_transparency_info_text?: string;
  readonly edit_text?: string;
  readonly email_inline_context_text?: string;
  readonly email_messenger_push_opt_in_disclaimer?: string;
  readonly email_messenger_push_opt_in_transparency_text?: string;
  readonly form_clarity_description_content?: string;
  readonly form_clarity_description_title?: string;
  readonly form_clarity_headline?: string;
  readonly gated_content_locked_description?: string;
  readonly gated_content_locked_headline?: string;
  readonly gated_content_unlocked_description?: string;
  readonly gated_content_unlocked_headline?: string;
  readonly how_it_works_section_headers?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly next_button_text?: string;
  readonly optional_question_text?: string;
  readonly personal_info_text?: string;
  readonly phone_number_inline_context_text?: string;
  readonly privacy_policy_link_text?: string;
  readonly privacy_policy_link_text_for_optional_privacy_policy?: string;
  readonly privacy_policy_title_section_title_text?: string;
  readonly privacy_setting_description?: string;
  readonly products_section_headers?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly qualified_thank_you_card_transparency_info_text?: string;
  readonly redeem_promo_code_text?: string;
  readonly return_to_facebook_text?: string;
  readonly review_your_info_text?: string;
  readonly secure_sharing_text?: string;
  readonly secure_sharing_text_for_embedded_booking?: string;
  readonly secure_sharing_text_for_embedded_booking_calendly?: string;
  readonly secure_sharing_text_for_embedded_booking_ghl?: string;
  readonly secure_sharing_text_for_optional_privacy_policy?: string;
  readonly slide_to_submit_text?: string;
  readonly social_proof_section_headers?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly submit_button_text?: string;
  readonly view_file_text?: string;
  readonly whats_app_opt_in_body?: string;
  readonly whats_app_opt_in_title?: string;
}

export type LeadgenFormStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT";

export interface LeadGenLegalContentCheckboxFields {
  readonly id?: string;
  readonly is_checked_by_default?: boolean;
  readonly is_required?: boolean;
  readonly key?: string;
  readonly text?: string;
}

export interface LeadGenLegalContentFields {
  readonly custom_disclaimer?: LeadGenCustomDisclaimerFields;
  readonly id?: string;
  readonly privacy_policy?: LeadGenPrivacyPolicyFields;
}

export interface LeadGenPostSubmissionCheckResultFields {
  readonly api_call_result?: string;
  readonly api_error_message?: string;
  readonly shown_thank_you_page?: string;
}

export interface LeadGenPrivacyPolicyFields {
  readonly link_text?: string;
  readonly url?: string;
}

export interface LeadGenQuestionFields {
  readonly conditional_questions_choices?: ReadonlyArray<LeadGenConditionalQuestionsGroupChoicesFields>;
  readonly conditional_questions_group_id?: string;
  readonly dependent_conditional_questions?: ReadonlyArray<LeadGenConditionalQuestionsGroupQuestionsFields>;
  readonly id?: string;
  readonly inline_context?: string;
  readonly key?: string;
  readonly label?: string;
  readonly options?: ReadonlyArray<LeadGenQuestionOptionFields>;
  readonly type?: string;
}

export interface LeadGenQuestionOptionFields {
  readonly key?: string;
  readonly photo?: PhotoFields;
  readonly value?: string;
}

export interface LeadGenThankYouPageFields {
  readonly body?: string;
  readonly business_phone_number?: string;
  readonly button_text?: string;
  readonly button_type?: string;
  readonly country_code?: string;
  readonly enable_messenger?: boolean;
  readonly gated_file?: LeadGenThankYouPageGatedFileFields;
  readonly id?: string;
  readonly lead_gen_use_case?: string;
  readonly status?: string;
  readonly title?: string;
  readonly website_url?: string;
}

export interface LeadGenThankYouPageGatedFileFields {
  readonly file_cdn_url?: string;
  readonly file_name?: string;
  readonly file_size_bytes?: number;
  readonly id?: string;
}

export interface LeadGenThankYouPageGatedPromoFields {
  readonly id?: string;
  readonly online_offer_url?: string;
  readonly online_promo_code?: string;
}

export interface LeadGenURLEntityAtRangesFields {
  readonly length?: number;
  readonly offset?: number;
  readonly url?: string;
}

export interface LeadNurturingStateFields {
  readonly ai_agent_mode?: string;
  readonly conversation_summary?: string;
  readonly handoff_reason?: string;
  readonly lead_interest_level?: string;
  readonly needed_manual_actions?: ReadonlyArray<string>;
  readonly qualification_details?: string;
  readonly qualification_status?: string;
  readonly scheduled_time?: Readonly<Record<string, unknown>>;
  readonly updated_email?: string;
  readonly updated_phone_number?: string;
}

export interface LifeEventFields {
  readonly description?: string;
  readonly end_time?: string;
  readonly from?: PageFields;
  readonly id?: string;
  readonly is_hidden?: boolean;
  readonly start_time?: string;
  readonly title?: string;
  readonly updated_time?: string;
}

export interface LinkedInstagramAccountDataFields {
  readonly access_token?: string;
  readonly analytics_claim?: string;
  readonly full_name?: string;
  readonly profile_picture_url?: string;
  readonly user_id?: string;
  readonly user_name?: string;
}

export interface LinkFields {
  readonly caption?: string;
  readonly created_time?: string;
  readonly description?: string;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly icon?: string;
  readonly id?: string;
  readonly link?: string;
  readonly message?: string;
  readonly multi_share_optimized?: boolean;
  readonly name?: string;
  readonly privacy?: PrivacyFields;
  readonly via?: Readonly<Record<string, unknown>>;
}

export interface LiveVideoAdBreakConfigFields {
  readonly default_ad_break_duration?: number;
  readonly failure_reason_polling_interval?: number;
  readonly first_break_eligible_secs?: number;
  readonly guide_url?: string;
  readonly is_eligible_to_onboard?: boolean;
  readonly is_enabled?: boolean;
  readonly onboarding_url?: string;
  readonly preparing_duration?: number;
  readonly time_between_ad_breaks_secs?: number;
  readonly viewer_count_threshold?: number;
}

export interface LiveVideoAdCampaignConfigFields {
  readonly id?: string;
  readonly live_video_ad_type?: string;
}

export type LiveVideoBroadcastStatus = "LIVE" | "LIVE_STOPPED" | "PROCESSING" | "SCHEDULED_CANCELED" | "SCHEDULED_EXPIRED" | "SCHEDULED_LIVE" | "SCHEDULED_UNPUBLISHED" | "UNPUBLISHED" | "VOD";

export interface LiveVideoErrorFields {
  readonly creation_time?: string;
  readonly error_code?: number;
  readonly error_message?: string;
  readonly error_type?: string;
}

export interface LiveVideoFields {
  readonly ad_break_config?: LiveVideoAdBreakConfigFields;
  readonly ad_break_failure_reason?: string;
  readonly broadcast_start_time?: string;
  readonly copyright?: VideoCopyrightFields;
  readonly creation_time?: string;
  readonly dash_ingest_url?: string;
  readonly dash_preview_url?: string;
  readonly description?: string;
  readonly embed_html?: Readonly<Record<string, unknown>>;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly ingest_streams?: ReadonlyArray<LiveVideoInputStreamFields>;
  readonly is_manual_mode?: boolean;
  readonly is_reference_only?: boolean;
  readonly live_views?: number;
  readonly permalink_url?: string;
  readonly planned_start_time?: string;
  readonly recommended_encoder_settings?: LiveVideoRecommendedEncoderSettingsFields;
  readonly seconds_left?: number;
  readonly secure_stream_url?: string;
  readonly status?: string;
  readonly stream_url?: string;
  readonly targeting?: LiveVideoTargetingFields;
  readonly title?: string;
  readonly total_views?: string;
  readonly video?: AdVideoFields;
}

export interface LiveVideoInputStreamFields {
  readonly dash_ingest_url?: string;
  readonly dash_preview_url?: string;
  readonly id?: string;
  readonly is_master?: boolean;
  readonly secure_stream_url?: string;
  readonly stream_health?: Readonly<Record<string, unknown>>;
  readonly stream_id?: string;
  readonly stream_url?: string;
}

export type LiveVideoLiveCommentModerationSetting = "DEFAULT" | "DISCUSSION" | "FOLLOWED" | "FOLLOWER" | "NO_HYPERLINK" | "PROTECTED_MODE" | "RESTRICTED" | "SLOW" | "SUPPORTER" | "TAGGED";

export type LiveVideoPersistentStreamKeyStatus = "DISABLE" | "ENABLE" | "REGENERATE";

export type LiveVideoProjection = "CUBEMAP" | "EQUIRECTANGULAR" | "HALF_EQUIRECTANGULAR";

export interface LiveVideoRecommendedEncoderSettingsFields {
  readonly audio_codec_settings?: Readonly<Record<string, unknown>>;
  readonly streaming_protocol?: string;
  readonly video_codec_settings?: Readonly<Record<string, unknown>>;
}

export type LiveVideoSource = "owner" | "target";

export type LiveVideoSpatialAudioFormat = "ambiX_4";

export type LiveVideoStatus = "LIVE_NOW" | "SCHEDULED_CANCELED" | "SCHEDULED_LIVE" | "SCHEDULED_UNPUBLISHED" | "UNPUBLISHED";

export type LiveVideoStereoscopicMode = "LEFT_RIGHT" | "MONO" | "MULTI_VIEW" | "TOP_BOTTOM";

export type LiveVideoStreamType = "AMBIENT" | "REGULAR";

export interface LiveVideoTargetingFields {
  readonly age_max?: number;
  readonly age_min?: number;
  readonly excluded_countries?: ReadonlyArray<string>;
  readonly geo_locations?: TargetingGeoLocationFields;
}

export type LocalServiceBusinessAvailability = "AVAILABLE_FOR_ORDER" | "DISCONTINUED" | "IN_STOCK" | "MARK_AS_EXPIRED" | "MARK_AS_SOLD" | "OUT_OF_STOCK" | "PENDING" | "PREORDER";

export type LocalServiceBusinessCondition = "PC_CPO" | "PC_NEW" | "PC_OPEN_BOX_NEW" | "PC_REFURBISHED" | "PC_USED" | "PC_USED_FAIR" | "PC_USED_GOOD" | "PC_USED_LIKE_NEW";

export interface LocalServiceBusinessFields {
  readonly address?: Readonly<Record<string, unknown>>;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly availability?: LocalServiceBusinessAvailability;
  readonly brand?: string;
  readonly category?: string;
  readonly condition?: LocalServiceBusinessCondition;
  readonly cuisine_type?: string;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly description?: string;
  readonly expiration_date?: string;
  readonly gtin?: string;
  readonly id?: string;
  readonly image_fetch_status?: LocalServiceBusinessImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly local_info?: ProductItemLocalInfoFields;
  readonly local_service_business_id?: string;
  readonly main_local_info?: ProductItemLocalInfoFields;
  readonly phone?: string;
  readonly price?: string;
  readonly price_range?: string;
  readonly retailer_category?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly size?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly title?: string;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly vendor_id?: string;
  readonly visibility?: LocalServiceBusinessVisibility;
}

export type LocalServiceBusinessImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type LocalServiceBusinessVisibility = "PUBLISHED" | "STAGING";

export interface LocationFields {
  readonly city?: string;
  readonly city_id?: number;
  readonly country?: string;
  readonly country_code?: string;
  readonly latitude?: number;
  readonly located_in?: string;
  readonly longitude?: number;
  readonly name?: string;
  readonly region?: string;
  readonly region_id?: number;
  readonly state?: string;
  readonly street?: string;
  readonly zip?: string;
}

export interface LookalikeSpecFields {
  readonly country?: string;
  readonly is_created_by_recommended_dfca?: boolean;
  readonly is_financial_service?: boolean;
  readonly is_parent_lal?: boolean;
  readonly origin?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly origin_event_name?: string;
  readonly origin_event_source_name?: string;
  readonly origin_event_source_type?: string;
  readonly product_set_name?: string;
  readonly ratio?: number;
  readonly starting_ratio?: number;
  readonly target_countries?: ReadonlyArray<string>;
  readonly target_country_names?: ReadonlyArray<unknown>;
  readonly type?: string;
}

export interface LoomConfigFields {
  readonly id?: string;
}

export interface MailingAddressFields {
  readonly city?: string;
  readonly city_page?: PageFields;
  readonly country?: string;
  readonly id?: string;
  readonly postal_code?: string;
  readonly region?: string;
  readonly street1?: string;
  readonly street2?: string;
}

export interface ManagedPartnerBusinessFields {
  readonly ad_account?: AdAccountFields;
  readonly catalog_segment?: ProductCatalogFields;
  readonly extended_credit?: ManagedPartnerExtendedCreditFields;
  readonly page?: PageFields;
  readonly seller_business_info?: Readonly<Record<string, unknown>>;
  readonly seller_business_status?: string;
  readonly template?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export type ManagedPartnerBusinessPartitionType = "AUTH" | "FIXED" | "FIXED_WITHOUT_PARTITION";

export type ManagedPartnerBusinessSurveyBusinessType = "ADVERTISER" | "AGENCY" | "APP_DEVELOPER" | "PUBLISHER";

export type ManagedPartnerBusinessTimezoneId = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99" | "100" | "101" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "117" | "118" | "119" | "120" | "121" | "122" | "123" | "124" | "125" | "126" | "127" | "128" | "129" | "130" | "131" | "132" | "133" | "134" | "135" | "136" | "137" | "138" | "139" | "140" | "141" | "142" | "143" | "144" | "145" | "146" | "147" | "148" | "149" | "150" | "151" | "152" | "153" | "154" | "155" | "156" | "157" | "158" | "159" | "160" | "161" | "162" | "163" | "164" | "165" | "166" | "167" | "168" | "169" | "170" | "171" | "172" | "173" | "174" | "175" | "176" | "177" | "178" | "179" | "180" | "181" | "182" | "183" | "184" | "185" | "186" | "187" | "188" | "189" | "190" | "191" | "192" | "193" | "194" | "195" | "196" | "197" | "198" | "199" | "200" | "201" | "202" | "203" | "204" | "205" | "206" | "207" | "208" | "209" | "210" | "211" | "212" | "213" | "214" | "215" | "216" | "217" | "218" | "219" | "220" | "221" | "222" | "223" | "224" | "225" | "226" | "227" | "228" | "229" | "230" | "231" | "232" | "233" | "234" | "235" | "236" | "237" | "238" | "239" | "240" | "241" | "242" | "243" | "244" | "245" | "246" | "247" | "248" | "249" | "250" | "251" | "252" | "253" | "254" | "255" | "256" | "257" | "258" | "259" | "260" | "261" | "262" | "263" | "264" | "265" | "266" | "267" | "268" | "269" | "270" | "271" | "272" | "273" | "274" | "275" | "276" | "277" | "278" | "279" | "280" | "281" | "282" | "283" | "284" | "285" | "286" | "287" | "288" | "289" | "290" | "291" | "292" | "293" | "294" | "295" | "296" | "297" | "298" | "299" | "300" | "301" | "302" | "303" | "304" | "305" | "306" | "307" | "308" | "309" | "310" | "311" | "312" | "313" | "314" | "315" | "316" | "317" | "318" | "319" | "320" | "321" | "322" | "323" | "324" | "325" | "326" | "327" | "328" | "329" | "330" | "331" | "332" | "333" | "334" | "335" | "336" | "337" | "338" | "339" | "340" | "341" | "342" | "343" | "344" | "345" | "346" | "347" | "348" | "349" | "350" | "351" | "352" | "353" | "354" | "355" | "356" | "357" | "358" | "359" | "360" | "361" | "362" | "363" | "364" | "365" | "366" | "367" | "368" | "369" | "370" | "371" | "372" | "373" | "374" | "375" | "376" | "377" | "378" | "379" | "380" | "381" | "382" | "383" | "384" | "385" | "386" | "387" | "388" | "389" | "390" | "391" | "392" | "393" | "394" | "395" | "396" | "397" | "398" | "399" | "400" | "401" | "402" | "403" | "404" | "405" | "406" | "407" | "408" | "409" | "410" | "411" | "412" | "413" | "414" | "415" | "416" | "417" | "418" | "419" | "420" | "421" | "422" | "423" | "424" | "425" | "426" | "427" | "428" | "429" | "430" | "431" | "432" | "433" | "434" | "435" | "436" | "437" | "438" | "439" | "440" | "441" | "442" | "443" | "444" | "445" | "446" | "447" | "448" | "449" | "450" | "451" | "452" | "453" | "454" | "455" | "456" | "457" | "458" | "459" | "460" | "461" | "462" | "463" | "464" | "465" | "466" | "467" | "468" | "469" | "470" | "471" | "472" | "473" | "474" | "475" | "476" | "477" | "478" | "479" | "480" | "481" | "482" | "483" | "484" | "485" | "486" | "487" | "488" | "489" | "490" | "491" | "492" | "493" | "494" | "495" | "496" | "497" | "498" | "499" | "500" | "501" | "502" | "503" | "504" | "505" | "506" | "507" | "508" | "509" | "510" | "511" | "512" | "513" | "514" | "515" | "516" | "517" | "518" | "519" | "520" | "521" | "522" | "523" | "524" | "525" | "526" | "527" | "528" | "529" | "530" | "531" | "532" | "533" | "534" | "535" | "536" | "537" | "538" | "539" | "540" | "541" | "542" | "543" | "544" | "545" | "546" | "547" | "548" | "549" | "550" | "551" | "552" | "553" | "554" | "555" | "556" | "557" | "558" | "559" | "560" | "561" | "562" | "563" | "564" | "565" | "566" | "567" | "568" | "569" | "570" | "571" | "572" | "573" | "574" | "575" | "576" | "577" | "578" | "579" | "580" | "581" | "582" | "583" | "584" | "585" | "586" | "587" | "588" | "589" | "590" | "591" | "592";

export type ManagedPartnerBusinessVertical = "ADVERTISING" | "AUTOMOTIVE" | "CONSUMER_PACKAGED_GOODS" | "ECOMMERCE" | "EDUCATION" | "ENERGY_AND_UTILITIES" | "ENTERTAINMENT_AND_MEDIA" | "FINANCIAL_SERVICES" | "GAMING" | "GOVERNMENT_AND_POLITICS" | "HEALTH" | "LUXURY" | "MARKETING" | "NON_PROFIT" | "NOT_SET" | "ORGANIZATIONS_AND_ASSOCIATIONS" | "OTHER" | "PROFESSIONAL_SERVICES" | "RESTAURANT" | "RETAIL" | "TECHNOLOGY" | "TELECOM" | "TRAVEL";

export interface ManagedPartnerExtendedCreditFields {
  readonly id?: string;
  readonly max_balance?: CurrencyAmountFields;
  readonly receiving_credit_allocation_config?: ExtendedCreditAllocationConfigFields;
}

export interface ManagementSiteLinkFields {
  readonly ad_account_id?: string;
  readonly id?: string;
  readonly link_domain?: string;
  readonly link_hash?: string;
  readonly link_image_hash?: string;
  readonly link_image_url?: string;
  readonly link_title?: string;
  readonly link_type?: string;
  readonly link_url?: string;
}

export interface MarketingMessagesOnboardingStatusFields {
  readonly status?: string;
  readonly time?: string;
}

export interface MCExperienceConfigForApiFields {
  readonly is_campaign_enabled?: boolean;
  readonly is_terms_signed?: boolean;
  readonly is_user_manually_toggle_mc_off?: boolean;
  readonly merchant_type?: string;
}

export interface McomInvoiceBankAccountFields {
  readonly num_pending_verification_accounts?: number;
  readonly num_verified_accounts?: number;
  readonly pending_verification_accounts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly verified_accounts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface McomInvoiceDetailsFields {
  readonly additional_amounts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly buyer_notes?: string;
  readonly currency_amount?: Readonly<Record<string, unknown>>;
  readonly external_invoice_id?: string;
  readonly features?: Readonly<Record<string, unknown>>;
  readonly invoice_created?: number;
  readonly invoice_id?: string;
  readonly invoice_instructions?: string;
  readonly invoice_instructions_image_url?: string;
  readonly invoice_updated?: number;
  readonly outstanding_amount?: Readonly<Record<string, unknown>>;
  readonly paid_amount?: Readonly<Record<string, unknown>>;
  readonly payments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly platform_logo_url?: string;
  readonly platform_name?: string;
  readonly product_items?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly shipping_address?: Readonly<Record<string, unknown>>;
  readonly status?: string;
  readonly tracking_info?: Readonly<Record<string, unknown>>;
}

export interface McomInvoiceListsFields {
  readonly invoice_details?: ReadonlyArray<McomInvoiceDetailsFields>;
  readonly invoice_ids?: ReadonlyArray<string>;
  readonly page_id?: string;
}

export interface McomInvoiceStatusFields {
  readonly bank_account_number?: string;
  readonly bank_code?: string;
  readonly invoice_id?: string;
  readonly invoice_status?: string;
  readonly page_id?: string;
  readonly payment_method?: string;
  readonly payment_type?: string;
  readonly payout_amount?: Readonly<Record<string, unknown>>;
  readonly slip_verification_error?: string;
  readonly slip_verification_status?: string;
  readonly sof_transfer_id?: string;
  readonly sof_transfer_timestamp?: number;
  readonly transaction_fee?: Readonly<Record<string, unknown>>;
  readonly transfer_slip?: string;
  readonly transfer_slip_qr_code?: string;
}

export interface McomOnboardingStatusFields {
  readonly onboarding_status?: string;
  readonly page_id?: string;
}

export interface McomPayoutsFields {
  readonly number_of_orders?: number;
  readonly order_ids?: ReadonlyArray<string>;
  readonly payout_amount?: Readonly<Record<string, unknown>>;
  readonly payout_provider_reference_id?: string;
  readonly payout_status?: string;
  readonly payout_time?: number;
  readonly provider?: string;
}

export interface MeasurementReportFields {
  readonly download_urls?: ReadonlyArray<string>;
  readonly id?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly report_type?: string;
  readonly status?: string;
}

export interface MediaCopyrightAttributionFields {
  readonly attribution_ig_target_id?: string;
  readonly attribution_target_email_address?: string;
  readonly attribution_target_id?: string;
  readonly attribution_target_name?: string;
  readonly attribution_type?: string;
  readonly attribution_uri?: string;
  readonly copyright_count?: number;
  readonly creation_time?: string;
  readonly creator?: ProfileFields;
  readonly id?: string;
  readonly is_enabled?: boolean;
  readonly link_title?: string;
  readonly match_count?: number;
  readonly status?: string;
  readonly title?: string;
}

export interface MediaCopyrightUpdateRecordFields {
  readonly action_types?: ReadonlyArray<string>;
  readonly actor?: UserFields;
  readonly actor_type?: string;
  readonly creation_time?: string;
  readonly id?: string;
  readonly ownership_countries?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly whitelisted_accounts?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface MediaFingerprintFields {
  readonly duration_in_sec?: number;
  readonly fingerprint_content_type?: string;
  readonly fingerprint_type?: string;
  readonly id?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly title?: string;
  readonly universal_content_id?: string;
}

export type MediaFingerprintFingerprintContentType = "AM_SONGTRACK" | "EPISODE" | "MOVIE" | "OTHER" | "SONGTRACK";

export interface MessageDeliveryEstimateFields {
  readonly estimate_cost?: number;
  readonly estimate_cost_lower_bound?: number;
  readonly estimate_cost_upper_bound?: number;
  readonly estimate_coverage_lower_bound?: number;
  readonly estimate_coverage_upper_bound?: number;
  readonly estimate_delivery?: number;
  readonly estimate_delivery_lower_bound?: number;
  readonly estimate_delivery_upper_bound?: number;
  readonly estimate_status?: string;
}

export type MessageDeliveryEstimateOptimizationGoal = "ADVERTISER_SILOED_VALUE" | "AD_RECALL_LIFT" | "APP_INSTALLS" | "APP_INSTALLS_AND_OFFSITE_CONVERSIONS" | "AUTOMATIC_OBJECTIVE" | "CONVERSATIONS" | "DERIVED_EVENTS" | "ENGAGED_PAGE_VIEWS" | "ENGAGED_USERS" | "EVENT_RESPONSES" | "IMPRESSIONS" | "IN_APP_VALUE" | "LANDING_PAGE_VIEWS" | "LEAD_GENERATION" | "LINK_CLICKS" | "MEANINGFUL_CALL_ATTEMPT" | "MESSAGING_APPOINTMENT_CONVERSION" | "MESSAGING_DEEP_CONVERSATION_AND_FOLLOW" | "MESSAGING_PURCHASE_CONVERSION" | "NONE" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "PROFILE_AND_PAGE_ENGAGEMENT" | "PROFILE_VISIT" | "QUALITY_CALL" | "QUALITY_LEAD" | "REACH" | "REMINDERS_SET" | "SUBSCRIBERS" | "THRUPLAY" | "VALUE" | "VISIT_INSTAGRAM_PROFILE";

export type MessageDeliveryEstimatePacingType = "DAY_PARTING" | "DISABLED" | "NO_PACING" | "PROBABILISTIC_PACING" | "PROBABILISTIC_PACING_V2" | "STANDARD";

export interface MessagingAppsInfoFields {
  readonly ctd_support_only_for_ig_app?: boolean;
  readonly has_instagram_messaging_permission?: boolean;
  readonly has_messenger_messaging_permission?: boolean;
  readonly id?: string;
  readonly name?: string;
}

export interface MessagingFeatureReviewFields {
  readonly feature?: string;
  readonly status?: string;
}

export interface MessagingFeatureStatusFields {
  readonly hop_v2?: boolean;
  readonly ig_multi_app?: boolean;
  readonly msgr_multi_app?: boolean;
}

export interface MessengerAdsPartialAutomatedStepListFields {
  readonly fblead_form?: LeadgenFormFields;
  readonly first_step_id?: string;
  readonly id?: string;
  readonly page?: PageFields;
  readonly privacy_url?: string;
  readonly reminder_text?: string;
  readonly stop_question_message?: string;
}

export interface MessengerBusinessTemplateFields {
  readonly category?: string;
  readonly components?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly creation_time?: number;
  readonly id?: string;
  readonly language?: string;
  readonly language_count?: number;
  readonly last_updated_time?: string;
  readonly library_template_name?: string;
  readonly name?: string;
  readonly parameter_format?: string;
  readonly rejected_reason?: string;
  readonly rejection_reasons?: Readonly<Record<string, unknown>>;
  readonly specific_rejection_reasons?: Readonly<Record<string, unknown>>;
  readonly status?: string;
}

export type MessengerBusinessTemplateParameterFormat = "NAMED" | "POSITIONAL";

export type MessengerBusinessTemplateStatus = "APPROVED" | "ARCHIVED" | "DELETED" | "DISABLED" | "IN_APPEAL" | "LIMIT_EXCEEDED" | "PAUSED" | "PENDING" | "PENDING_DELETION" | "REJECTED";

export interface MessengerCallPermissionsFields {
  readonly actions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly permission?: Readonly<Record<string, unknown>>;
}

export interface MessengerCallSettingsFields {
  readonly audio_enabled?: boolean;
  readonly call_hours?: Readonly<Record<string, unknown>>;
  readonly call_routing?: Readonly<Record<string, unknown>>;
  readonly icon_enabled?: boolean;
  readonly video_enabled?: boolean;
}

export interface MessengerDestinationPageWelcomeMessageFields {
  readonly id?: string;
  readonly page_welcome_message_body?: string;
  readonly page_welcome_message_type?: string;
  readonly template_name?: string;
  readonly time_created?: string;
  readonly time_last_used?: string;
}

export interface MessengerProfileFields {
  readonly account_linking_url?: string;
  readonly commands?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly get_started?: Readonly<Record<string, unknown>>;
  readonly ice_breakers?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly persistent_menu?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly subject_to_new_eu_privacy_rules?: boolean;
  readonly whitelisted_domains?: ReadonlyArray<string>;
}

export interface MetaMomentMakerConfigFields {
  readonly saturation_mode?: string;
}

export interface MinimumBudgetFields {
  readonly currency?: string;
  readonly min_daily_budget_high_freq?: number;
  readonly min_daily_budget_imp?: number;
  readonly min_daily_budget_low_freq?: number;
  readonly min_daily_budget_video_views?: number;
}

export interface MusicVideoCopyrightFields {
  readonly creation_time?: string;
  readonly displayed_matches_count?: number;
  readonly id?: string;
  readonly in_conflict?: boolean;
  readonly isrc?: string;
  readonly match_rule?: VideoCopyrightRuleFields;
  readonly ownership_countries?: ReadonlyArray<string>;
  readonly reference_file_status?: string;
  readonly ridge_monitoring_status?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly update_time?: string;
  readonly video_asset?: CopyrightReferenceContainerFields;
  readonly whitelisted_fb_users?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly whitelisted_ig_users?: ReadonlyArray<string>;
}

export interface MusicWorkCopyrightFields {
  readonly available_ui_actions?: ReadonlyArray<string>;
  readonly claim_status?: string;
  readonly creation_time?: string;
  readonly displayed_fb_matches_count?: number;
  readonly displayed_ig_matches_count?: number;
  readonly displayed_matches_count?: number;
  readonly has_rev_share_eligible_isrcs?: boolean;
  readonly id?: string;
  readonly is_linking_required_to_monetize_for_manual_claim?: boolean;
  readonly match_rule?: VideoCopyrightRuleFields;
  readonly status?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly update_time?: string;
}

export interface NullNodeFields {

}

export interface OfflineConversionDataSetActivitiesFields {
  readonly actor_id?: number;
  readonly actor_name?: string;
  readonly adaccount_id?: number;
  readonly adaccount_name?: string;
  readonly event_time?: string;
  readonly event_type?: string;
  readonly extra_data?: string;
  readonly object_id?: number;
  readonly object_name?: string;
}

export interface OfflineConversionDataSetFields {
  readonly automatic_matching_fields?: ReadonlyArray<string>;
  readonly business?: BusinessFields;
  readonly can_proxy?: boolean;
  readonly config?: string;
  readonly creation_time?: string;
  readonly creator?: UserFields;
  readonly data_use_setting?: string;
  readonly description?: string;
  readonly duplicate_entries?: number;
  readonly enable_auto_assign_to_accounts?: boolean;
  readonly enable_automatic_matching?: boolean;
  readonly event_stats?: string;
  readonly event_time_max?: number;
  readonly event_time_min?: number;
  readonly first_party_cookie_status?: string;
  readonly id?: string;
  readonly is_consolidated_container?: boolean;
  readonly is_created_by_business?: boolean;
  readonly is_crm?: boolean;
  readonly is_mta_use?: boolean;
  readonly is_restricted_use?: boolean;
  readonly is_unavailable?: boolean;
  readonly last_fired_time?: string;
  readonly last_upload_app?: string;
  readonly last_upload_app_changed_time?: number;
  readonly match_rate_approx?: number;
  readonly matched_entries?: number;
  readonly name?: string;
  readonly owner_ad_account?: AdAccountFields;
  readonly owner_business?: BusinessFields;
  readonly usage?: OfflineConversionDataSetUsageFields;
  readonly valid_entries?: number;
}

export interface OfflineConversionDataSetOptimizationStatusFields {
  readonly event?: string;
  readonly last_changed_time?: number;
  readonly last_detected_time?: number;
  readonly status?: string;
}

export interface OfflineConversionDataSetPermissionsFields {
  readonly can_edit?: boolean;
  readonly can_edit_or_upload?: boolean;
  readonly can_upload?: boolean;
  readonly should_block_vanilla_business_employee_access?: boolean;
}

export interface OfflineConversionDataSetUploadFields {
  readonly api_calls?: number;
  readonly creation_time?: number;
  readonly duplicate_entries?: number;
  readonly event_stats?: string;
  readonly event_time_max?: number;
  readonly event_time_min?: number;
  readonly first_upload_time?: number;
  readonly id?: string;
  readonly is_excluded_for_lift?: boolean;
  readonly last_upload_time?: number;
  readonly match_rate_approx?: number;
  readonly matched_entries?: number;
  readonly upload_tag?: string;
  readonly valid_entries?: number;
}

export type OfflineConversionDataSetUploadOrder = "ASCENDING" | "DESCENDING";

export type OfflineConversionDataSetUploadSortBy = "API_CALLS" | "CREATION_TIME" | "EVENT_TIME_MAX" | "EVENT_TIME_MIN" | "FIRST_UPLOAD_TIME" | "IS_EXCLUDED_FOR_LIFT" | "LAST_UPLOAD_TIME";

export interface OfflineConversionDataSetUsageFields {
  readonly num_lift_studies?: number;
}

export interface OfflineProductItemFields {
  readonly applinks?: CatalogItemAppLinksFields;
  readonly brand?: string;
  readonly category?: string;
  readonly currency?: string;
  readonly description?: string;
  readonly id?: string;
  readonly image_fetch_status?: OfflineProductItemImageFetchStatus;
  readonly image_url?: string;
  readonly images?: ReadonlyArray<string>;
  readonly name?: string;
  readonly offline_product_item_id?: string;
  readonly price?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly url?: string;
  readonly visibility?: OfflineProductItemVisibility;
}

export type OfflineProductItemImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type OfflineProductItemVisibility = "PUBLISHED" | "STAGING";

export interface OfflineTermsOfServiceFields {
  readonly accept_time?: number;
  readonly id?: string;
  readonly signed_by_user?: UserFields;
}

export interface OffsitePixelFields {
  readonly creator?: string;
  readonly id?: string;
  readonly js_pixel?: string;
  readonly last_firing_time?: string;
  readonly name?: string;
  readonly tag?: string;
}

export interface OffsiteSignalContainerBusinessObjectFields {
  readonly business?: BusinessFields;
  readonly id?: string;
  readonly is_eligible_for_sharing_to_ad_account?: boolean;
  readonly is_eligible_for_sharing_to_business?: boolean;
  readonly is_unavailable?: boolean;
  readonly name?: string;
  readonly primary_container_id?: string;
}

export interface OmegaCustomerTrxFields {
  readonly ad_account_ids?: ReadonlyArray<string>;
  readonly advertiser_name?: string;
  readonly amount?: string;
  readonly amount_due?: CurrencyAmountFields;
  readonly billed_amount_details?: Readonly<Record<string, unknown>>;
  readonly billing_period?: string;
  readonly cdn_download_uri?: string;
  readonly currency?: string;
  readonly download_uri?: string;
  readonly due_date?: string;
  readonly entity?: string;
  readonly id?: string;
  readonly invoice_date?: string;
  readonly invoice_id?: string;
  readonly invoice_type?: string;
  readonly liability_type?: string;
  readonly payment_status?: string;
  readonly payment_term?: string;
  readonly type?: string;
}

export type OmegaCustomerTrxType = "CM" | "DM" | "INV" | "PRO_FORMA";

export type OpenBridgeConfigurationCapiPublishingState = "DISABLED" | "ENABLED" | "NOT_INITIALIZED";

export type OpenBridgeConfigurationEventEnrichmentAdvertiserState = "DISABLED" | "ENABLED" | "NOT_INITIALIZED";

export type OpenBridgeConfigurationEventEnrichmentMetaState = "ALLOWED" | "BLOCKED" | "NOT_INITIALIZED";

export type OpenBridgeConfigurationEventEnrichmentState = "NO" | "NOT_INITIALIZED" | "YES";

export interface OpenBridgeConfigurationFields {
  readonly active?: boolean;
  readonly associated_sgw_data_source_id?: string;
  readonly blocked_event_types?: ReadonlyArray<string>;
  readonly blocked_websites?: ReadonlyArray<string>;
  readonly browser_agent?: ReadonlyArray<string>;
  readonly capi_publishing_state?: string;
  readonly cloud_provider?: string;
  readonly cloud_region?: string;
  readonly destination_id?: string;
  readonly endpoint?: string;
  readonly event_enrichment_advertiser_state?: string;
  readonly event_enrichment_meta_state?: string;
  readonly event_enrichment_state?: string;
  readonly fallback_domain?: string;
  readonly host_business_id?: string;
  readonly id?: string;
  readonly instance_id?: string;
  readonly instance_version?: string;
  readonly is_sgw_instance?: boolean;
  readonly is_sgw_pixel_from_meta_pixel?: boolean;
  readonly mpc_fallback_domain?: string;
  readonly partner_name?: string;
  readonly pixel_id?: string;
  readonly sgw_account_id?: string;
  readonly sgw_instance_url?: string;
  readonly sgw_pixel_id?: string;
}

export interface OpenGraphContextFields {
  readonly id?: string;
}

export interface OrderIDAttributionsFields {
  readonly app_id?: string;
  readonly attribution_type?: string;
  readonly attributions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly conversion_device?: string;
  readonly dataset_id?: string;
  readonly holdout_status?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly order_id?: string;
  readonly order_timestamp?: string;
  readonly pixel_id?: string;
}

export interface OrganizationFields {
  readonly id?: string;
  readonly legal_entity_name?: string;
  readonly owner_business?: BusinessFields;
}

export interface OutcomePredictionPointFields {
  readonly actions?: number;
  readonly impressions?: number;
  readonly reach?: number;
  readonly spend?: number;
}

export interface OverrideDetailsFields {
  readonly key?: string;
  readonly type?: string;
  readonly values?: Readonly<Record<string, unknown>>;
}

export type OverrideDetailsType = "COUNTRY" | "LANGUAGE" | "LANGUAGE_AND_COUNTRY";

export interface OwnedDomainFields {
  readonly domain_name?: string;
  readonly id?: string;
  readonly owner_business?: BusinessFields;
  readonly status?: string;
  readonly verification_code?: string;
}

export interface P2MInvoicePaymentsFields {
  readonly page_id?: string;
  readonly payments?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface PageAboutStoryComposedBlockEntityRangesFields {
  readonly key?: string;
  readonly length?: number;
  readonly offset?: number;
}

export interface PageAboutStoryComposedBlockFields {
  readonly depth?: number;
  readonly entity_ranges?: ReadonlyArray<PageAboutStoryComposedBlockEntityRangesFields>;
  readonly inline_style_ranges?: ReadonlyArray<PageAboutStoryComposedBlockInlineStyleFields>;
  readonly text?: string;
  readonly type?: string;
}

export interface PageAboutStoryComposedBlockInlineStyleFields {
  readonly length?: number;
  readonly offset?: number;
  readonly style?: string;
}

export type PageActions = "BAN_USER" | "BLOCK_USER" | "MOVE_TO_SPAM" | "UNBAN_USER" | "UNBLOCK_USER";

export interface PageAppWithLeadsAccessFields {
  readonly can_access_leads?: boolean;
  readonly type?: string;
}

export type PageAttire = "Casual" | "Dressy" | "Unspecified";

export type PageBackdatedTimeGranularity = "day" | "hour" | "min" | "month" | "none" | "year";

export type PageCallToActionAndroidDestinationType = "APP_DEEPLINK" | "BECOME_A_VOLUNTEER" | "EMAIL" | "FACEBOOK_APP" | "FOLLOW" | "MARKETPLACE_INVENTORY_PAGE" | "MENU_ON_FACEBOOK" | "MESSENGER" | "MINI_SHOP" | "MOBILE_CENTER" | "NONE" | "PHONE_CALL" | "SHOP_ON_FACEBOOK" | "WEBSITE";

export interface PageCallToActionFields {
  readonly android_app?: ApplicationFields;
  readonly android_deeplink?: string;
  readonly android_destination_type?: string;
  readonly android_package_name?: string;
  readonly android_url?: string;
  readonly created_time?: string;
  readonly email_address?: string;
  readonly from?: PageFields;
  readonly id?: string;
  readonly intl_number_with_plus?: string;
  readonly iphone_app?: ApplicationFields;
  readonly iphone_deeplink?: string;
  readonly iphone_destination_type?: string;
  readonly iphone_url?: string;
  readonly status?: string;
  readonly type?: string;
  readonly updated_time?: string;
  readonly web_destination_type?: string;
  readonly web_url?: string;
}

export type PageCallToActionIphoneDestinationType = "APP_DEEPLINK" | "BECOME_A_VOLUNTEER" | "EMAIL" | "FACEBOOK_APP" | "FOLLOW" | "MARKETPLACE_INVENTORY_PAGE" | "MENU_ON_FACEBOOK" | "MESSENGER" | "MINI_SHOP" | "NONE" | "PHONE_CALL" | "SHOP_ON_FACEBOOK" | "WEBSITE";

export type PageCallToActionType = "BECOME_A_VOLUNTEER" | "BOOK_APPOINTMENT" | "BOOK_NOW" | "BUY_TICKETS" | "CALL_NOW" | "CHARITY_DONATE" | "CHECK_IN" | "CONTACT_US" | "CREATOR_STOREFRONT" | "DONATE_NOW" | "EMAIL" | "FOLLOW_PAGE" | "GET_DIRECTIONS" | "GET_OFFER" | "GET_OFFER_VIEW" | "INTERESTED" | "LEARN_MORE" | "LISTEN" | "LOCAL_DEV_PLATFORM" | "MESSAGE" | "MOBILE_CENTER" | "OPEN_APP" | "ORDER_FOOD" | "PLAY_MUSIC" | "PLAY_NOW" | "PURCHASE_GIFT_CARDS" | "REQUEST_APPOINTMENT" | "REQUEST_QUOTE" | "SHOP_NOW" | "SHOP_ON_FACEBOOK" | "SIGN_UP" | "VIEW_INVENTORY" | "VIEW_MENU" | "VIEW_SHOP" | "VISIT_GROUP" | "WATCH_NOW" | "WOODHENGE_SUPPORT";

export type PageCallToActionWebDestinationType = "BECOME_A_VOLUNTEER" | "BECOME_SUPPORTER" | "EMAIL" | "FOLLOW" | "MESSENGER" | "MOBILE_CENTER" | "NONE" | "SHOP_ON_FACEBOOK" | "WEBSITE";

export type PageCategory = "UTILITY";

export interface PageCategoryFields {
  readonly api_enum?: string;
  readonly fb_page_categories?: ReadonlyArray<PageCategory>;
  readonly id?: string;
  readonly name?: string;
}

export interface PageChangeProposalFields {
  readonly acceptance_status?: string;
  readonly category?: string;
  readonly id?: string;
  readonly upcoming_change_info?: PageUpcomingChangeFields;
}

export interface PageCrmsWithLeadsAccessFields {
  readonly can_access_leads?: boolean;
  readonly id?: string;
  readonly integration_type?: string;
  readonly name?: string;
}

export interface PageCTSTopicFields {
  readonly app_id?: string;
  readonly frequency?: string;
  readonly image_hash?: string;
  readonly image_url?: string;
  readonly subscriber?: number;
  readonly title?: string;
}

export interface PageCTXBudgetDFOBudgetRecommendationFields {
  readonly budget?: string;
  readonly budget_leads?: string;
  readonly budget_new_model?: string;
  readonly budget_purchases?: string;
  readonly budget_value?: string;
  readonly budget_without_threshold?: string;
  readonly reported_conversion?: string;
  readonly reported_conversion_leads?: string;
  readonly reported_conversion_purchases?: string;
  readonly reported_conversion_value?: string;
  readonly reported_conversions_new_model?: string;
  readonly reported_conversions_without_threshold?: string;
  readonly zo_budget?: string;
  readonly zo_budget_leads?: string;
  readonly zo_budget_purchases?: string;
  readonly zo_budget_value?: string;
}

export interface PageCTXBudgetSimilarAdvertiserBudgetRecommendationFields {
  readonly budget?: string;
  readonly budget_new_model?: string;
  readonly budget_without_threshold?: string;
  readonly reported_conversion?: string;
  readonly reported_conversions_new_model?: string;
  readonly reported_conversions_without_threshold?: string;
}

export interface PageCTXDefaultGreetingTextFields {
  readonly ctd?: string;
  readonly ctm?: string;
  readonly ctwa?: string;
}

export interface PageCTXMessagingFeatureLimitFields {
  readonly messaging_feature_limit_duration?: number;
  readonly messaging_feature_limit_type?: string;
  readonly messaging_violation_type?: string;
}

export type PageDeveloperAction = "ENABLE_FOLLOWUP_MESSAGE";

export interface PageDirectIntegrationCrmWithLeadsAccessFields {
  readonly can_access_leads?: boolean;
  readonly id?: string;
  readonly name?: string;
}

export interface PageFields {
  readonly about?: string;
  readonly access_token?: string;
  readonly ad_campaign?: AdSetFields;
  readonly affiliation?: string;
  readonly app_id?: string;
  readonly artists_we_like?: string;
  readonly attire?: string;
  readonly available_promo_offer_ids?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, string>>>>>>;
  readonly awards?: string;
  readonly band_interests?: string;
  readonly band_members?: string;
  readonly best_page?: PageFields;
  readonly bio?: string;
  readonly birthday?: string;
  readonly booking_agent?: string;
  readonly breaking_news_usage?: Readonly<Record<string, unknown>>;
  readonly built?: string;
  readonly business?: Readonly<Record<string, unknown>>;
  readonly can_checkin?: boolean;
  readonly can_post?: boolean;
  readonly category?: string;
  readonly category_list?: ReadonlyArray<PageCategory>;
  readonly checkins?: number;
  readonly company_overview?: string;
  readonly connected_instagram_account?: IGUserFields;
  readonly connected_page_backed_instagram_account?: IGUserFields;
  readonly contact_address?: MailingAddressFields;
  readonly copyright_attribution_insights?: CopyrightAttributionInsightsFields;
  readonly copyright_whitelisted_ig_partners?: ReadonlyArray<string>;
  readonly country_page_likes?: number;
  readonly cover?: CoverPhotoFields;
  readonly culinary_team?: string;
  readonly current_location?: string;
  readonly delivery_and_pickup_option_info?: ReadonlyArray<string>;
  readonly description?: string;
  readonly description_html?: string;
  readonly differently_open_offerings?: ReadonlyArray<Readonly<Record<string, boolean>>>;
  readonly directed_by?: string;
  readonly display_subtext?: string;
  readonly displayed_message_response_time?: string;
  readonly does_viewer_have_page_permission_link_ig?: boolean;
  readonly emails?: ReadonlyArray<string>;
  readonly engagement?: EngagementFields;
  readonly fan_count?: number;
  readonly featured_video?: AdVideoFields;
  readonly features?: string;
  readonly followers_count?: number;
  readonly food_styles?: ReadonlyArray<string>;
  readonly founded?: string;
  readonly general_info?: string;
  readonly general_manager?: string;
  readonly genre?: string;
  readonly global_brand_page_name?: string;
  readonly global_brand_root_id?: string;
  readonly has_added_app?: boolean;
  readonly has_lead_access?: HasLeadAccessFields;
  readonly has_transitioned_to_new_page_experience?: boolean;
  readonly has_whatsapp_business_number?: boolean;
  readonly has_whatsapp_number?: boolean;
  readonly hometown?: string;
  readonly hours?: Readonly<Record<string, string>>;
  readonly id?: string;
  readonly impressum?: string;
  readonly influences?: string;
  readonly instagram_business_account?: IGUserFields;
  readonly is_always_open?: boolean;
  readonly is_calling_eligible?: boolean;
  readonly is_chain?: boolean;
  readonly is_community_page?: boolean;
  readonly is_eligible_for_branded_content?: boolean;
  readonly is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web?: boolean;
  readonly is_messenger_bot_get_started_enabled?: boolean;
  readonly is_messenger_platform_bot?: boolean;
  readonly is_owned?: boolean;
  readonly is_permanently_closed?: boolean;
  readonly is_published?: boolean;
  readonly is_unclaimed?: boolean;
  readonly is_verified?: boolean;
  readonly is_webhooks_subscribed?: boolean;
  readonly keywords?: Readonly<Record<string, unknown>>;
  readonly leadgen_tos_acceptance_time?: string;
  readonly leadgen_tos_accepted?: boolean;
  readonly leadgen_tos_accepting_user?: UserFields;
  readonly link?: string;
  readonly location?: LocationFields;
  readonly members?: string;
  readonly merchant_id?: string;
  readonly merchant_review_status?: string;
  readonly messaging_feature_status?: MessagingFeatureStatusFields;
  readonly messenger_ads_default_icebreakers?: ReadonlyArray<string>;
  readonly messenger_ads_default_quick_replies?: ReadonlyArray<string>;
  readonly messenger_ads_quick_replies_type?: string;
  readonly mini_shop_storefront?: ShopFields;
  readonly mission?: string;
  readonly mpg?: string;
  readonly name?: string;
  readonly name_with_location_descriptor?: string;
  readonly network?: string;
  readonly new_like_count?: number;
  readonly offer_eligible?: boolean;
  readonly overall_star_rating?: number;
  readonly owner_business?: BusinessFields;
  readonly page_backed_threads_account_id?: string;
  readonly page_token?: string;
  readonly parent_page?: PageFields;
  readonly parking?: PageParkingFields;
  readonly payment_options?: PagePaymentOptionsFields;
  readonly personal_info?: string;
  readonly personal_interests?: string;
  readonly pharma_safety_info?: string;
  readonly phone?: string;
  readonly pickup_options?: ReadonlyArray<string>;
  readonly place_type?: string;
  readonly plot_outline?: string;
  readonly preferred_audience?: TargetingFields;
  readonly press_contact?: string;
  readonly price_range?: string;
  readonly priority_hours?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly privacy_info_url?: string;
  readonly produced_by?: string;
  readonly products?: string;
  readonly promotion_eligible?: boolean;
  readonly promotion_ineligible_reason?: string;
  readonly public_transit?: string;
  readonly rating_count?: number;
  readonly recipient?: string;
  readonly record_label?: string;
  readonly release_date?: string;
  readonly restaurant_services?: PageRestaurantServicesFields;
  readonly restaurant_specialties?: PageRestaurantSpecialtiesFields;
  readonly schedule?: string;
  readonly screenplay_by?: string;
  readonly season?: string;
  readonly single_line_address?: string;
  readonly starring?: string;
  readonly start_info?: PageStartInfoFields;
  readonly store_code?: string;
  readonly store_location_descriptor?: string;
  readonly store_number?: number;
  readonly studio?: string;
  readonly supports_donate_button_in_live_video?: boolean;
  readonly talking_about_count?: number;
  readonly temporary_status?: string;
  readonly unread_message_count?: number;
  readonly unread_notif_count?: number;
  readonly unseen_message_count?: number;
  readonly user_access_expire_time?: string;
  readonly username?: string;
  readonly verification_status?: string;
  readonly voip_info?: VoipInfoFields;
  readonly website?: string;
  readonly were_here_count?: number;
  readonly whatsapp_number?: string;
  readonly written_by?: string;
}

export type PageFolder = "PARTNERSHIP";

export type PageFoodStyles = "Afghani" | "American (New)" | "American (Traditional)" | "Asian Fusion" | "Barbeque" | "Brazilian" | "Breakfast" | "British" | "Brunch" | "Buffets" | "Burgers" | "Burmese" | "Cajun/Creole" | "Caribbean" | "Chinese" | "Creperies" | "Cuban" | "Delis" | "Diners" | "Ethiopian" | "Fast Food" | "Filipino" | "Fondue" | "Food Stands" | "French" | "German" | "Greek and Mediterranean" | "Hawaiian" | "Himalayan/Nepalese" | "Hot Dogs" | "Indian/Pakistani" | "Irish" | "Italian" | "Japanese" | "Korean" | "Latin American" | "Mexican" | "Middle Eastern" | "Moroccan" | "Pizza" | "Russian" | "Sandwiches" | "Seafood" | "Singaporean" | "Soul Food" | "Southern" | "Spanish/Basque" | "Steakhouses" | "Sushi Bars" | "Taiwanese" | "Tapas Bars" | "Tex-Mex" | "Thai" | "Turkish" | "Vegan" | "Vegetarian" | "Vietnamese";

export type PageFormatting = "MARKDOWN" | "PLAINTEXT";

export interface PageGameBotQuotaInformationFields {
  readonly count?: number;
  readonly time_window?: number;
}

export type PageGenAiProvenanceType = "C2PA" | "C2PA_METADATA_EDITED" | "EXPLICIT" | "EXPLICIT_ANIMATE" | "EXPLICIT_DROP_IN" | "EXPLICIT_FACE_SWAP" | "EXPLICIT_IMAGINE" | "EXPLICIT_IMAGINE_ME" | "EXPLICIT_RESTYLE" | "EXPLICIT_WARDROBE" | "INVISIBLE_WATERMARK" | "IPTC" | "IPTC_METADATA_EDITED";

export interface PageGetStartedNullstateFields {
  readonly cta_title?: string;
  readonly processed_greeting?: string;
  readonly responsiveness?: string;
}

export interface PageInsightsAsyncExportRunFields {
  readonly data_level?: string;
  readonly filters?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly format?: string;
  readonly gen_report_date?: number;
  readonly id?: string;
  readonly report_end_date?: number;
  readonly report_start_date?: number;
  readonly sorters?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly status?: string;
}

export interface PageLeadsAccessConfigFields {
  readonly id?: string;
  readonly page?: PageFields;
}

export interface PageLocationsBreakdownFields {
  readonly location_id?: string;
  readonly location_name?: string;
  readonly location_type?: string;
  readonly num_pages?: number;
  readonly num_pages_eligible_for_store_visit_reporting?: number;
  readonly num_unpublished_or_closed_pages?: number;
  readonly parent_country_code?: string;
  readonly parent_region_id?: number;
  readonly parent_region_name?: string;
}

export interface PageMessageResponsivenessMetricsFields {
  readonly is_very_responsive?: boolean;
  readonly response_rate?: number;
  readonly response_time?: number;
}

export type PageMessagingType = "MESSAGE_TAG" | "RESPONSE" | "UPDATE" | "UTILITY";

export type PageModel = "ARABIC" | "CHINESE" | "CROATIAN" | "CUSTOM" | "DANISH" | "DUTCH" | "ENGLISH" | "FRENCH_STANDARD" | "GEORGIAN" | "GERMAN_STANDARD" | "GREEK" | "HEBREW" | "HUNGARIAN" | "IRISH" | "ITALIAN_STANDARD" | "KOREAN" | "NORWEGIAN_BOKMAL" | "POLISH" | "PORTUGUESE" | "ROMANIAN" | "SPANISH" | "SWEDISH" | "VIETNAMESE";

export type PageNotificationType = "NO_PUSH" | "REGULAR" | "SILENT_PUSH";

export type PageParameterFormat = "NAMED" | "POSITIONAL";

export interface PageParkingFields {
  readonly lot?: number;
  readonly street?: number;
  readonly valet?: number;
}

export interface PagePartnerWithLeadsAccessFields {
  readonly can_access_leads?: boolean;
  readonly partner_business?: BusinessFields;
  readonly permitted_tasks?: ReadonlyArray<string>;
}

export interface PagePaymentOptionsFields {
  readonly amex?: number;
  readonly cash_only?: number;
  readonly discover?: number;
  readonly mastercard?: number;
  readonly visa?: number;
}

export type PagePermittedTasks = "ADVERTISE" | "ANALYZE" | "CASHIER_ROLE" | "CREATE_CONTENT" | "GLOBAL_STRUCTURE_MANAGEMENT" | "MANAGE" | "MANAGE_JOBS" | "MANAGE_LEADS" | "MESSAGING" | "MODERATE" | "MODERATE_COMMUNITY" | "PAGES_MESSAGING" | "PAGES_MESSAGING_SUBSCRIPTIONS" | "PROFILE_PLUS_ADVERTISE" | "PROFILE_PLUS_ANALYZE" | "PROFILE_PLUS_CREATE_CONTENT" | "PROFILE_PLUS_CREATIVE_MANAGEMENT" | "PROFILE_PLUS_CREATOR_MANAGEMENT" | "PROFILE_PLUS_FACEBOOK_ACCESS" | "PROFILE_PLUS_FULL_CONTROL" | "PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT" | "PROFILE_PLUS_MANAGE" | "PROFILE_PLUS_MANAGE_LEADS" | "PROFILE_PLUS_MESSAGING" | "PROFILE_PLUS_MODERATE" | "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY" | "PROFILE_PLUS_REVENUE" | "READ_PAGE_MAILBOXES" | "VIEW_MONETIZATION_INSIGHTS";

export type PagePickupOptions = "CURBSIDE" | "IN_STORE" | "OTHER";

export type PagePlaceAttachmentSetting = "1" | "2";

export type PagePlatform = "INSTAGRAM" | "MESSENGER";

export type PagePostBackdatedTimeGranularity = "day" | "hour" | "min" | "month" | "none" | "year";

export interface PagePostExperimentFields {
  readonly auto_resolve_settings?: Readonly<Record<string, unknown>>;
  readonly control_video_id?: string;
  readonly creation_time?: string;
  readonly creator?: UserFields;
  readonly declared_winning_time?: string;
  readonly declared_winning_video_id?: string;
  readonly description?: string;
  readonly experiment_video_ids?: ReadonlyArray<string>;
  readonly id?: string;
  readonly insight_snapshots?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>>>>;
  readonly name?: string;
  readonly optimization_goal?: string;
  readonly publish_status?: string;
  readonly publish_time?: string;
  readonly scheduled_experiment_timestamp?: string;
  readonly updated_time?: string;
}

export type PagePostExperimentOptimizationGoal = "AUTO_RESOLVE_TO_CONTROL" | "AVG_TIME_WATCHED" | "COMMENTS" | "IMPRESSIONS" | "IMPRESSIONS_UNIQUE" | "LINK_CLICKS" | "OTHER" | "REACTIONS" | "REELS_PLAYS" | "SHARES" | "VIDEO_VIEWS_60S" | "VIEWERS" | "VIEWS";

export type PagePostFeedStoryVisibility = "hidden" | "visible";

export interface PagePostFields {
  readonly actions?: ReadonlyArray<unknown>;
  readonly admin_creator?: Readonly<Record<string, unknown>>;
  readonly allowed_advertising_objectives?: ReadonlyArray<string>;
  readonly application?: ApplicationFields;
  readonly backdated_time?: string;
  readonly call_to_action?: Readonly<Record<string, unknown>>;
  readonly can_reply_privately?: boolean;
  readonly child_attachments?: ReadonlyArray<unknown>;
  readonly comments_mirroring_domain?: string;
  readonly coordinates?: Readonly<Record<string, unknown>>;
  readonly created_time?: string;
  readonly event?: EventFields;
  readonly expanded_height?: number;
  readonly expanded_width?: number;
  readonly feed_targeting?: Readonly<Record<string, unknown>>;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly full_picture?: string;
  readonly height?: number;
  readonly icon?: string;
  readonly id?: string;
  readonly instagram_eligibility?: string;
  readonly is_app_share?: boolean;
  readonly is_eligible_for_dark_post?: boolean;
  readonly is_eligible_for_promotion?: boolean;
  readonly is_expired?: boolean;
  readonly is_fb_live_videos?: boolean;
  readonly is_hidden?: boolean;
  readonly is_inline_created?: boolean;
  readonly is_instagram_eligible?: boolean;
  readonly is_live_clip?: boolean;
  readonly is_popular?: boolean;
  readonly is_published?: boolean;
  readonly is_spherical?: boolean;
  readonly message?: string;
  readonly message_tags?: ReadonlyArray<unknown>;
  readonly multi_share_end_card?: boolean;
  readonly multi_share_optimized?: boolean;
  readonly parent_id?: string;
  readonly permalink_url?: string;
  readonly picture?: string;
  readonly place?: PlaceFields;
  readonly privacy?: PrivacyFields;
  readonly promotable_id?: string;
  readonly promotion_status?: string;
  readonly properties?: ReadonlyArray<unknown>;
  readonly scheduled_publish_time?: number;
  readonly shares?: Readonly<Record<string, unknown>>;
  readonly status_type?: string;
  readonly story?: string;
  readonly story_tags?: ReadonlyArray<unknown>;
  readonly subscribed?: boolean;
  readonly target?: ProfileFields;
  readonly targeting?: Readonly<Record<string, unknown>>;
  readonly timeline_visibility?: string;
  readonly updated_time?: string;
  readonly via?: Readonly<Record<string, unknown>>;
  readonly video_buying_eligibility?: ReadonlyArray<string>;
  readonly was_fb_live_videos?: boolean;
  readonly width?: number;
}

export type PagePostingToRedspace = "disabled" | "enabled";

export type PagePostSurfacesBlacklist = "1" | "2" | "3" | "4" | "5";

export type PagePostTimelineVisibility = "forced_allow" | "hidden" | "normal";

export type PagePostWith = "LOCATION";

export interface PagePublisherFields {
  readonly global_parent_id?: string;
  readonly icon?: string;
  readonly id?: string;
  readonly name?: string;
  readonly url?: string;
}

export type PageRecommendationAction = "ACCEPT_CLOSED" | "ACCEPT_NEW" | "REJECT_CLOSED" | "REJECT_NEW";

export interface PageRecommendedPostsInfoFields {
  readonly recommendation_source?: string;
  readonly recommended_posts?: ReadonlyArray<RecommendedPagePostFields>;
}

export interface PageRestaurantServicesFields {
  readonly catering?: boolean;
  readonly delivery?: boolean;
  readonly groups?: boolean;
  readonly kids?: boolean;
  readonly outdoor?: boolean;
  readonly pickup?: boolean;
  readonly reserve?: boolean;
  readonly takeout?: boolean;
  readonly waiter?: boolean;
  readonly walkins?: boolean;
}

export interface PageRestaurantSpecialtiesFields {
  readonly breakfast?: number;
  readonly coffee?: number;
  readonly dinner?: number;
  readonly drinks?: number;
  readonly lunch?: number;
}

export type PageSenderAction = "MARK_SEEN" | "REACT" | "TYPING_OFF" | "TYPING_ON" | "UNREACT";

export interface PageSettingsFields {
  readonly setting?: string;
  readonly value?: Readonly<Record<string, unknown>>;
}

export interface PageStartInfoFields {
  readonly date?: Readonly<Record<string, unknown>>;
  readonly type?: string;
}

export type PageSubscribedFields = "affiliation" | "agent_messages" | "agent_questions" | "attire" | "awards" | "bio" | "birthday" | "business_integrity" | "call_permission_reply" | "call_settings_update" | "calls" | "category" | "checkins" | "comment_poll_response" | "company_overview" | "conversations" | "culinary_team" | "current_location" | "description" | "email" | "feature_access_list" | "feed" | "follow" | "founded" | "general_info" | "general_manager" | "group_feed" | "hometown" | "hours" | "inbox_labels" | "invalid_topic_placeholder" | "invoice_access_bank_slip_events" | "invoice_access_invoice_change" | "invoice_access_invoice_draft_change" | "invoice_access_onboarding_status_active" | "leadgen" | "leadgen_fat" | "leadgen_update" | "live_videos" | "local_delivery" | "location" | "marketing_message_clicks" | "marketing_message_deliveries" | "marketing_message_delivery_failed" | "marketing_message_echoes" | "marketing_message_reads" | "marketing_messages_subscriber_upload_status" | "mcom_invoice_change" | "members" | "mention" | "merchant_review" | "message_context" | "message_deliveries" | "message_echoes" | "message_edits" | "message_mention" | "message_reactions" | "message_reads" | "message_template_status_update" | "messages" | "messaging_account_linking" | "messaging_appointments" | "messaging_checkout_updates" | "messaging_customer_information" | "messaging_direct_sends" | "messaging_fblogin_account_linking" | "messaging_feedback" | "messaging_game_plays" | "messaging_handovers" | "messaging_in_thread_lead_form_submit" | "messaging_integrity" | "messaging_optins" | "messaging_optouts" | "messaging_payments" | "messaging_policy_enforcement" | "messaging_postbacks" | "messaging_pre_checkouts" | "messaging_referrals" | "mission" | "name" | "page_about_story" | "page_change_proposal" | "page_upcoming_change" | "parking" | "payment_options" | "payment_request_update" | "personal_info" | "personal_interests" | "phone" | "picture" | "price_range" | "product_review" | "products" | "public_transit" | "publisher_subscriptions" | "ratings" | "registration" | "response_feedback" | "send_cart" | "standby" | "story_poll_response" | "story_share" | "user_action" | "video_text_question_responses" | "videos" | "website";

export type PageSuggestionAction = "ACCEPT" | "DISMISS" | "IMPRESSION";

export type PageTargetSurface = "STORY" | "TIMELINE";

export type PageTasks = "ADVERTISE" | "ANALYZE" | "CASHIER_ROLE" | "CREATE_CONTENT" | "GLOBAL_STRUCTURE_MANAGEMENT" | "MANAGE" | "MANAGE_JOBS" | "MANAGE_LEADS" | "MESSAGING" | "MODERATE" | "MODERATE_COMMUNITY" | "PAGES_MESSAGING" | "PAGES_MESSAGING_SUBSCRIPTIONS" | "PROFILE_PLUS_ADVERTISE" | "PROFILE_PLUS_ANALYZE" | "PROFILE_PLUS_CREATE_CONTENT" | "PROFILE_PLUS_CREATIVE_MANAGEMENT" | "PROFILE_PLUS_CREATOR_MANAGEMENT" | "PROFILE_PLUS_FACEBOOK_ACCESS" | "PROFILE_PLUS_FULL_CONTROL" | "PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT" | "PROFILE_PLUS_MANAGE" | "PROFILE_PLUS_MANAGE_LEADS" | "PROFILE_PLUS_MESSAGING" | "PROFILE_PLUS_MODERATE" | "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY" | "PROFILE_PLUS_REVENUE" | "READ_PAGE_MAILBOXES" | "VIEW_MONETIZATION_INSIGHTS";

export type PageTemporaryStatus = "DIFFERENTLY_OPEN" | "NO_DATA" | "OPERATING_AS_USUAL" | "TEMPORARILY_CLOSED";

export interface PageThreadOwnerFields {
  readonly thread_owner?: Readonly<Record<string, unknown>>;
}

export type PageUnpublishedContentType = "ADS_POST" | "DRAFT" | "INLINE_CREATED" | "PUBLISHED" | "PUBLISH_PENDING" | "REVIEWABLE_BRANDED_CONTENT" | "SCHEDULED" | "SCHEDULED_RECURRING";

export interface PageUpcomingChangeFields {
  readonly change_type?: string;
  readonly effective_time?: string;
  readonly id?: string;
  readonly page?: PageFields;
  readonly proposal?: PageChangeProposalFields;
  readonly timer_status?: string;
}

export interface PageUserMessageThreadLabelFields {
  readonly id?: string;
  readonly page_label_name?: string;
}

export interface PageUserPermissionsFields {
  readonly business?: BusinessFields;
  readonly business_persona?: string;
  readonly created_by?: ProfileFields;
  readonly created_time?: string;
  readonly email?: string;
  readonly status?: string;
  readonly tasks?: ReadonlyArray<string>;
  readonly updated_by?: ProfileFields;
  readonly updated_time?: string;
  readonly user?: ProfileFields;
}

export interface PageUserWithLeadsAccessFields {
  readonly active_on_business?: boolean;
  readonly business_role?: string;
  readonly can_access_leads?: boolean;
  readonly page_role?: string;
}

export interface PartnerAccountLinkingFields {
  readonly adaccount?: AdAccountFields;
  readonly app?: ApplicationFields;
  readonly business?: BusinessFields;
  readonly externalidentifier?: string;
  readonly externalidentifieruri?: string;
  readonly id?: string;
  readonly partnername?: string;
  readonly pixel?: string;
}

export interface PartnerAppAndWelcomeMessageFlowDataFields {
  readonly flow_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface PartnerCategoryFields {
  readonly approximate_count?: number;
  readonly country?: string;
  readonly description?: string;
  readonly details?: string;
  readonly id?: string;
  readonly is_private?: boolean;
  readonly name?: string;
  readonly parent_category?: string;
  readonly source?: string;
  readonly status?: string;
  readonly targeting_type?: string;
}

export interface PartnerCenterExportFileFields {
  readonly id?: string;
  readonly report_ds?: string;
  readonly url?: string;
}

export interface PartnerIntegrationLinkedFields {
  readonly ads_pixel?: AdsPixelFields;
  readonly application?: ApplicationFields;
  readonly completed_integration_types?: ReadonlyArray<string>;
  readonly external_business_connection_id?: string;
  readonly external_id?: string;
  readonly has_oauth_token?: boolean;
  readonly id?: string;
  readonly mbe_app_id?: string;
  readonly mbe_asset_id?: string;
  readonly mbe_external_business_id?: string;
  readonly name?: string;
  readonly offline_conversion_data_set?: OfflineConversionDataSetFields;
  readonly page?: PageFields;
  readonly partner?: string;
  readonly product_catalog?: ProductCatalogFields;
  readonly setup_status?: string;
}

export interface PartnershipAdContentListSpecFields {
  readonly list_id?: string;
}

export interface PartnershipAdContentSearchMediaFields {
  readonly fb_ad_code_sponsor_count?: number;
  readonly fb_ad_code_sponsors?: ReadonlyArray<FBPageAndInstagramAccountFields>;
  readonly ig_ad_code_sponsor_count?: number;
  readonly ig_ad_code_sponsors?: ReadonlyArray<FBPageAndInstagramAccountFields>;
  readonly ig_media?: IGMediaFields;
  readonly ig_media_has_product_tags?: boolean;
  readonly is_ad_code_eligible_for_boosting_by_two_sponsors?: boolean;
  readonly is_ad_code_entry?: boolean;
}

export interface PartnershipAdsIdentityFields {
  readonly is_recommended?: boolean;
  readonly is_saved?: boolean;
  readonly post_types?: ReadonlyArray<string>;
  readonly secondary_identities?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface PartnerStudyFields {
  readonly additional_info?: string;
  readonly brand?: string;
  readonly client_name?: string;
  readonly emails?: string;
  readonly id?: string;
  readonly input_ids?: ReadonlyArray<string>;
  readonly is_export?: boolean;
  readonly lift_study?: AdStudyFields;
  readonly location?: string;
  readonly match_file_ds?: string;
  readonly name?: string;
  readonly partner_defined_id?: string;
  readonly partner_household_graph_dataset_id?: string;
  readonly status?: string;
  readonly study_end_date?: string;
  readonly study_start_date?: string;
  readonly study_type?: string;
  readonly submit_date?: string;
}

export interface PaymentEnginePaymentFields {
  readonly actions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly application?: ApplicationFields;
  readonly country?: string;
  readonly created_time?: string;
  readonly disputes?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly fraud_status?: string;
  readonly fulfillment_status?: string;
  readonly id?: string;
  readonly is_from_ad?: boolean;
  readonly is_from_page_post?: boolean;
  readonly items?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly payout_foreign_exchange_rate?: number;
  readonly phone_support_eligible?: boolean;
  readonly platform?: string;
  readonly refundable_amount?: CurrencyAmountFields;
  readonly request_id?: string;
  readonly tax?: string;
  readonly tax_country?: string;
  readonly test?: number;
  readonly user?: UserFields;
}

export type PaymentEnginePaymentReason = "BANNED_USER" | "DENIED_REFUND" | "GRANTED_REPLACEMENT_ITEM";

export interface PaymentPricepointsFields {
  readonly mobile?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface PaymentRequestDetailsFields {
  readonly amount?: Readonly<Record<string, unknown>>;
  readonly creation_time?: number;
  readonly note?: string;
  readonly payment_request_id?: string;
  readonly receiver_id?: string;
  readonly reference_number?: string;
  readonly sender_id?: string;
  readonly status?: string;
  readonly transaction_time?: number;
}

export interface PaymentSubscriptionFields {
  readonly amount?: string;
  readonly app_param_data?: string;
  readonly application?: ApplicationFields;
  readonly billing_period?: string;
  readonly canceled_reason?: string;
  readonly created_time?: string;
  readonly currency?: string;
  readonly id?: string;
  readonly last_payment?: PaymentEnginePaymentFields;
  readonly next_bill_time?: string;
  readonly next_period_amount?: string;
  readonly next_period_currency?: string;
  readonly next_period_product?: string;
  readonly payment_status?: string;
  readonly pending_cancel?: boolean;
  readonly period_start_time?: string;
  readonly product?: string;
  readonly status?: string;
  readonly test?: number;
  readonly trial_amount?: string;
  readonly trial_currency?: string;
  readonly trial_expiry_time?: string;
  readonly updated_time?: string;
  readonly user?: UserFields;
}

export interface PermissionFields {
  readonly permission?: string;
  readonly status?: string;
}

export type PermissionStatus = "declined" | "expired" | "granted";

export interface PersonaFields {
  readonly id?: string;
  readonly name?: string;
  readonly profile_picture_url?: string;
}

export interface PersonalAdsPersonaFields {
  readonly email?: string;
  readonly first_name?: string;
  readonly id?: string;
  readonly last_name?: string;
  readonly pending_email?: string;
}

export type PhotoBackdatedTimeGranularity = "day" | "hour" | "min" | "month" | "none" | "year";

export interface PhotoFields {
  readonly album?: AlbumFields;
  readonly alt_text?: string;
  readonly alt_text_custom?: string;
  readonly backdated_time?: string;
  readonly backdated_time_granularity?: string;
  readonly can_backdate?: boolean;
  readonly can_delete?: boolean;
  readonly can_tag?: boolean;
  readonly created_time?: string;
  readonly event?: EventFields;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly height?: number;
  readonly icon?: string;
  readonly id?: string;
  readonly images?: ReadonlyArray<PlatformImageSourceFields>;
  readonly link?: string;
  readonly name?: string;
  readonly name_tags?: ReadonlyArray<EntityAtTextRangeFields>;
  readonly page_story_id?: string;
  readonly picture?: string;
  readonly place?: PlaceFields;
  readonly position?: number;
  readonly source?: string;
  readonly target?: ProfileFields;
  readonly updated_time?: string;
  readonly webp_images?: ReadonlyArray<PlatformImageSourceFields>;
  readonly width?: number;
}

export interface PhotoMetadataFields {
  readonly camera_make?: string;
  readonly camera_model?: string;
  readonly datetime_modified?: string;
  readonly datetime_taken?: string;
  readonly exposure?: string;
  readonly focal_length?: string;
  readonly fstop?: string;
  readonly iso_speed?: number;
  readonly offline_id?: string;
  readonly orientation?: string;
  readonly original_height?: string;
  readonly original_width?: string;
}

export type PhotoType = "profile" | "tagged" | "uploaded";

export type PhotoUnpublishedContentType = "ADS_POST" | "DRAFT" | "INLINE_CREATED" | "PUBLISHED" | "PUBLISH_PENDING" | "REVIEWABLE_BRANDED_CONTENT" | "SCHEDULED" | "SCHEDULED_RECURRING";

export interface PlaceFields {
  readonly id?: string;
  readonly location?: LocationFields;
  readonly name?: string;
  readonly overall_rating?: number;
}

export type PlacementDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export type PlacementEffectiveDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export interface PlacementFields {
  readonly audience_network_positions?: ReadonlyArray<string>;
  readonly device_platforms?: ReadonlyArray<PlacementDevicePlatforms>;
  readonly effective_audience_network_positions?: ReadonlyArray<string>;
  readonly effective_device_platforms?: ReadonlyArray<PlacementEffectiveDevicePlatforms>;
  readonly effective_facebook_positions?: ReadonlyArray<string>;
  readonly effective_instagram_positions?: ReadonlyArray<string>;
  readonly effective_messenger_positions?: ReadonlyArray<string>;
  readonly effective_oculus_positions?: ReadonlyArray<string>;
  readonly effective_publisher_platforms?: ReadonlyArray<string>;
  readonly effective_threads_positions?: ReadonlyArray<string>;
  readonly effective_whatsapp_positions?: ReadonlyArray<string>;
  readonly facebook_positions?: ReadonlyArray<string>;
  readonly instagram_positions?: ReadonlyArray<string>;
  readonly messenger_positions?: ReadonlyArray<string>;
  readonly oculus_positions?: ReadonlyArray<string>;
  readonly publisher_platforms?: ReadonlyArray<string>;
  readonly threads_positions?: ReadonlyArray<string>;
  readonly whatsapp_positions?: ReadonlyArray<string>;
}

export interface PlacementSoftOptOutFields {
  readonly audience_network_positions?: ReadonlyArray<string>;
  readonly facebook_positions?: ReadonlyArray<string>;
  readonly instagram_positions?: ReadonlyArray<string>;
  readonly messenger_positions?: ReadonlyArray<string>;
  readonly oculus_positions?: ReadonlyArray<string>;
  readonly threads_positions?: ReadonlyArray<string>;
  readonly whatsapp_positions?: ReadonlyArray<string>;
}

export interface PlaceTagFields {
  readonly created_time?: string;
  readonly id?: string;
  readonly place?: PageFields;
}

export interface PlaceTopicFields {
  readonly count?: number;
  readonly has_children?: boolean;
  readonly icon_url?: string;
  readonly id?: string;
  readonly name?: string;
  readonly plural_name?: string;
  readonly top_subtopic_names?: ReadonlyArray<string>;
}

export interface PlatformImageSourceFields {
  readonly height?: number;
  readonly source?: string;
  readonly width?: number;
}

export interface PlatformSessionKeyFields {
  readonly id?: string;
}

export interface PlayableContentFields {
  readonly id?: string;
  readonly name?: string;
  readonly owner?: ProfileFields;
}

export type PostBackdatedTimeGranularity = "day" | "hour" | "min" | "month" | "none" | "year";

export type PostFeedStoryVisibility = "hidden" | "visible";

export interface PostFields {
  readonly actions?: ReadonlyArray<unknown>;
  readonly admin_creator?: Readonly<Record<string, unknown>>;
  readonly allowed_advertising_objectives?: ReadonlyArray<string>;
  readonly application?: ApplicationFields;
  readonly backdated_time?: string;
  readonly call_to_action?: Readonly<Record<string, unknown>>;
  readonly can_reply_privately?: boolean;
  readonly caption?: string;
  readonly child_attachments?: ReadonlyArray<unknown>;
  readonly comments_mirroring_domain?: string;
  readonly coordinates?: Readonly<Record<string, unknown>>;
  readonly created_time?: string;
  readonly description?: string;
  readonly event?: EventFields;
  readonly expanded_height?: number;
  readonly expanded_width?: number;
  readonly feed_targeting?: Readonly<Record<string, unknown>>;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly full_picture?: string;
  readonly height?: number;
  readonly icon?: string;
  readonly id?: string;
  readonly instagram_eligibility?: string;
  readonly is_app_share?: boolean;
  readonly is_eligible_for_dark_post?: boolean;
  readonly is_eligible_for_promotion?: boolean;
  readonly is_expired?: boolean;
  readonly is_fb_live_videos?: boolean;
  readonly is_hidden?: boolean;
  readonly is_inline_created?: boolean;
  readonly is_instagram_eligible?: boolean;
  readonly is_live_clip?: boolean;
  readonly is_popular?: boolean;
  readonly is_published?: boolean;
  readonly is_spherical?: boolean;
  readonly link?: string;
  readonly message?: string;
  readonly message_tags?: ReadonlyArray<unknown>;
  readonly multi_share_end_card?: boolean;
  readonly multi_share_optimized?: boolean;
  readonly name?: string;
  readonly object_id?: string;
  readonly parent_id?: string;
  readonly permalink_url?: string;
  readonly picture?: string;
  readonly place?: PlaceFields;
  readonly privacy?: PrivacyFields;
  readonly promotable_id?: string;
  readonly promotion_status?: string;
  readonly properties?: ReadonlyArray<unknown>;
  readonly scheduled_publish_time?: number;
  readonly shares?: Readonly<Record<string, unknown>>;
  readonly source?: string;
  readonly status_type?: string;
  readonly story?: string;
  readonly story_tags?: ReadonlyArray<unknown>;
  readonly subscribed?: boolean;
  readonly target?: ProfileFields;
  readonly targeting?: Readonly<Record<string, unknown>>;
  readonly timeline_visibility?: string;
  readonly type?: string;
  readonly updated_time?: string;
  readonly via?: Readonly<Record<string, unknown>>;
  readonly video_buying_eligibility?: ReadonlyArray<string>;
  readonly was_fb_live_videos?: boolean;
  readonly width?: number;
}

export type PostFormatting = "MARKDOWN" | "PLAINTEXT";

export type PostPlaceAttachmentSetting = "1" | "2";

export type PostPostingToRedspace = "disabled" | "enabled";

export type PostPostSurfacesBlacklist = "1" | "2" | "3" | "4" | "5";

export type PostTargetSurface = "STORY" | "TIMELINE";

export type PostTimelineVisibility = "forced_allow" | "hidden" | "normal";

export type PostUnpublishedContentType = "ADS_POST" | "DRAFT" | "INLINE_CREATED" | "PUBLISHED" | "PUBLISH_PENDING" | "REVIEWABLE_BRANDED_CONTENT" | "SCHEDULED" | "SCHEDULED_RECURRING";

export interface PreapprovalReviewFields {
  readonly comp_type?: string;
  readonly crow_component_id?: number;
  readonly is_human_reviewed?: boolean;
  readonly is_reviewed?: boolean;
  readonly policy_info?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
}

export interface PremiumMusicVideoFields {
  readonly creation_time?: string;
  readonly cross_post_videos?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly eligible_cross_post_pages?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
  readonly preferred_video_thumbnail_image_uri?: string;
  readonly premium_music_video_metadata?: Readonly<Record<string, unknown>>;
  readonly scheduled_publish_time?: number;
  readonly title?: string;
}

export interface PrivacyFields {
  readonly allow?: string;
  readonly deny?: string;
  readonly description?: string;
  readonly friends?: string;
  readonly networks?: string;
  readonly value?: string;
}

export interface PrivacyOptionFields {
  readonly description?: string;
  readonly icon_src?: string;
  readonly id?: string;
  readonly is_currently_selected?: boolean;
  readonly type?: string;
  readonly user_id?: string;
}

export interface PrivateLiftStudyInstanceFields {
  readonly breakdown_key?: string;
  readonly created_time?: string;
  readonly feature_list?: ReadonlyArray<string>;
  readonly id?: string;
  readonly issuer_certificate?: string;
  readonly latest_status_update_time?: string;
  readonly run_id?: string;
  readonly server_hostnames?: ReadonlyArray<string>;
  readonly server_ips?: ReadonlyArray<string>;
  readonly status?: string;
  readonly tier?: string;
}

export type PrivateLiftStudyInstanceOperation = "AGGREGATE" | "CANCEL" | "COMPUTE" | "ID_MATCH" | "NEXT" | "NONE";

export type ProductCatalogAdditionalVerticalOption = "LOCAL_DA_CATALOG" | "LOCAL_PRODUCTS";

export type ProductCatalogCategoryCategorizationCriteria = "BRAND" | "CATEGORY" | "PRODUCT_TYPE";

export interface ProductCatalogCategoryFields {
  readonly criteria_value?: string;
  readonly description?: string;
  readonly destination_uri?: string;
  readonly image_url?: string;
  readonly name?: string;
  readonly num_items?: number;
  readonly tokens?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface ProductCatalogCheckBatchRequestStatusFields {

}

export type ProductCatalogCheckBatchRequestStatusGetErrorPriority = "HIGH" | "LOW" | "MEDIUM";

export interface ProductCatalogCheckBatchRequestStatusGetFields {
  readonly data?: ReadonlyArray<unknown>;
  readonly paging?: unknown;
}

export interface ProductCatalogCheckMarketplacePartnerDealsStatusFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly session_id?: string;
  readonly status?: string;
}

export interface ProductCatalogCheckMarketplacePartnerSellersStatusFields {
  readonly sample_errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly session_id?: string;
  readonly status?: string;
}

export type ProductCatalogConversionType = "ATTRIBUTED" | "IN_SESSION";

export interface ProductCatalogDataSourceFields {
  readonly app_id?: string;
  readonly id?: string;
  readonly ingestion_source_type?: string;
  readonly name?: string;
  readonly upload_type?: string;
}

export type ProductCatalogDataSourceIngestionSourceType = "ALL" | "PRIMARY" | "SUPPLEMENTARY";

export interface ProductCatalogDataSourcesFields {

}

export interface ProductCatalogDataSourcesGetFields {
  readonly data?: ReadonlyArray<unknown>;
  readonly paging?: unknown;
}

export type ProductCatalogDataSourcesGetIngestionSourceType = "ALL" | "PRIMARY" | "SUPPLEMENTARY";

export type ProductCatalogDiagnosticGroupAffectedChannels = "b2c_marketplace" | "c2c_marketplace" | "da" | "daily_deals" | "daily_deals_legacy" | "ig_product_tagging" | "marketplace" | "marketplace_ads_deprecated" | "marketplace_shops" | "mini_shops" | "offline_conversions" | "shops" | "universal_checkout" | "whatsapp";

export type ProductCatalogDiagnosticGroupAffectedEntities = "product_catalog" | "product_event" | "product_item" | "product_set";

export type ProductCatalogDiagnosticGroupAffectedEntity = "product_catalog" | "product_event" | "product_item" | "product_set";

export type ProductCatalogDiagnosticGroupAffectedFeatures = "augmented_reality" | "checkout";

export interface ProductCatalogDiagnosticGroupFields {
  readonly affected_channels?: ReadonlyArray<string>;
  readonly affected_entity?: ProductCatalogDiagnosticGroupAffectedEntity;
  readonly affected_features?: ReadonlyArray<ProductCatalogDiagnosticGroupAffectedFeatures>;
  readonly diagnostics?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly error_code?: number;
  readonly number_of_affected_entities?: number;
  readonly number_of_affected_items?: number;
  readonly severity?: ProductCatalogDiagnosticGroupSeverity;
  readonly subtitle?: string;
  readonly title?: string;
  readonly type?: ProductCatalogDiagnosticGroupType;
}

export type ProductCatalogDiagnosticGroupSeverities = "MUST_FIX" | "OPPORTUNITY";

export type ProductCatalogDiagnosticGroupSeverity = "MUST_FIX" | "OPPORTUNITY";

export type ProductCatalogDiagnosticGroupType = "AR_VISIBILITY_ISSUES" | "ATTRIBUTES_INVALID" | "ATTRIBUTES_MISSING" | "CATEGORY" | "CHECKOUT" | "DA_VISIBILITY_ISSUES" | "EVENT_SOURCE_ISSUES" | "IMAGE_QUALITY" | "LOW_QUALITY_TITLE_AND_DESCRIPTION" | "POLICY_VIOLATION" | "SHOPS_VISIBILITY_ISSUES";

export type ProductCatalogDiagnosticGroupTypes = "AR_VISIBILITY_ISSUES" | "ATTRIBUTES_INVALID" | "ATTRIBUTES_MISSING" | "CATEGORY" | "CHECKOUT" | "DA_VISIBILITY_ISSUES" | "EVENT_SOURCE_ISSUES" | "IMAGE_QUALITY" | "LOW_QUALITY_TITLE_AND_DESCRIPTION" | "POLICY_VIOLATION" | "SHOPS_VISIBILITY_ISSUES";

export type ProductCatalogEnabledCollabTerms = "ENFORCE_CREATE_NEW_AD_ACCOUNT" | "ENFORCE_SHARE_AD_PERFORMANCE_ACCESS";

export type ProductCatalogEventName = "ADD_TO_CART" | "OFFER_SUBMITTED" | "PURCHASE" | "PURCHASE_VIA_OFFER" | "TEST" | "VIEW_ITEM";

export interface ProductCatalogFacetsFields {
  readonly facets?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly item_count?: number;
}

export interface ProductCatalogFields {
  readonly ad_account_to_collaborative_ads_share_settings?: CollaborativeAdsShareSettingsFields;
  readonly agency_collaborative_ads_share_settings?: CollaborativeAdsShareSettingsFields;
  readonly business?: BusinessFields;
  readonly catalog_store?: StoreCatalogSettingsFields;
  readonly commerce_merchant_settings?: CommerceMerchantSettingsFields;
  readonly creator_user?: UserFields;
  readonly da_display_settings?: ProductCatalogImageSettingsFields;
  readonly default_image_url?: string;
  readonly fallback_image_url?: ReadonlyArray<string>;
  readonly feed_count?: number;
  readonly id?: string;
  readonly is_catalog_segment?: boolean;
  readonly is_local_catalog?: boolean;
  readonly name?: string;
  readonly owner_business?: BusinessFields;
  readonly product_count?: number;
  readonly show_assign_permissions?: boolean;
  readonly store_catalog_settings?: StoreCatalogSettingsFields;
  readonly user_access_expire_time?: string;
  readonly vertical?: string;
}

export interface ProductCatalogHotelRoomsBatchFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly errors_total_count?: number;
  readonly handle?: string;
  readonly status?: string;
}

export interface ProductCatalogImageSettingsFields {
  readonly carousel_ad?: ProductCatalogImageSettingsOperationFields;
  readonly single_ad?: ProductCatalogImageSettingsOperationFields;
}

export interface ProductCatalogImageSettingsOperationFields {
  readonly transformation_type?: string;
}

export type ProductCatalogItemSubType = "APPLIANCES" | "BABY_FEEDING" | "BABY_TRANSPORT" | "BEAUTY" | "BEDDING" | "CAMERAS" | "CELL_PHONES_AND_SMART_WATCHES" | "CLEANING_SUPPLIES" | "CLOTHING" | "CLOTHING_ACCESSORIES" | "COMPUTERS_AND_TABLETS" | "DIAPERING_AND_POTTY_TRAINING" | "ELECTRONICS_ACCESSORIES" | "FURNITURE" | "HEALTH" | "HOME_GOODS" | "JEWELRY" | "NURSERY" | "PRINTERS_AND_SCANNERS" | "PROJECTORS" | "SHOES_AND_FOOTWEAR" | "SOFTWARE" | "TOYS" | "TVS_AND_MONITORS" | "VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES" | "WATCHES";

export interface ProductCatalogLocalizationSettingsFields {
  readonly default_country?: string;
  readonly default_language?: string;
  readonly id?: string;
}

export type ProductCatalogPermittedRoles = "ADMIN" | "ADVERTISER";

export type ProductCatalogPermittedTasks = "AA_ANALYZE" | "ADVERTISE" | "MANAGE" | "MANAGE_AR";

export interface ProductCatalogPostFields {
  readonly __firstOneOf?: unknown;
  readonly __secondOneOf?: unknown;
}

export interface ProductCatalogPricingVariablesBatchFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly errors_total_count?: number;
  readonly handle?: string;
  readonly status?: string;
}

export interface ProductCatalogProductSetsBatchFields {
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly errors_total_count?: number;
  readonly handle?: string;
  readonly status?: string;
}

export type ProductCatalogStandard = "google";

export type ProductCatalogTasks = "AA_ANALYZE" | "ADVERTISE" | "MANAGE" | "MANAGE_AR";

export interface ProductCatalogUserTasksFields {
  readonly business?: BusinessFields;
  readonly tasks?: ReadonlyArray<string>;
}

export type ProductCatalogVertical = "adoptable_pets" | "apps_and_software" | "articles_and_publications" | "commerce" | "destinations" | "flights" | "generic" | "home_listings" | "hotels" | "local_service_businesses" | "media_titles" | "offer_items" | "offline_commerce" | "services" | "transactable_items" | "vehicles";

export interface ProductDeliveryPreferenceFields {
  readonly ad_object_id?: string;
  readonly id?: string;
  readonly product_priority?: string;
  readonly product_priority_category?: ReadonlyArray<string>;
}

export type ProductEventStatBreakdowns = "DEVICE_TYPE";

export type ProductEventStatDeviceType = "desktop" | "mobile_android_phone" | "mobile_android_tablet" | "mobile_ipad" | "mobile_iphone" | "mobile_ipod" | "mobile_phone" | "mobile_tablet" | "mobile_windows_phone" | "unknown";

export type ProductEventStatEvent = "AddToCart" | "AddToWishlist" | "InitiateCheckout" | "Lead" | "Purchase" | "Search" | "Subscribe" | "ViewContent";

export interface ProductEventStatFields {
  readonly date_start?: string;
  readonly date_stop?: string;
  readonly device_type?: ProductEventStatDeviceType;
  readonly event?: ProductEventStatEvent;
  readonly event_source?: ExternalEventSourceFields;
  readonly total_content_ids_matched_other_catalogs?: number;
  readonly total_matched_content_ids?: number;
  readonly total_unmatched_content_ids?: number;
  readonly unique_content_ids_matched_other_catalogs?: number;
  readonly unique_matched_content_ids?: number;
  readonly unique_unmatched_content_ids?: number;
}

export interface ProductFeedDeleteFields {
  readonly success?: boolean;
}

export type ProductFeedDelimiter = "AUTODETECT" | "BAR" | "COMMA" | "SEMICOLON" | "TAB" | "TILDE";

export type ProductFeedEncoding = "AUTODETECT" | "LATIN1" | "UTF16BE" | "UTF16LE" | "UTF32BE" | "UTF32LE" | "UTF8";

export type ProductFeedFeedType = "ACTIVITY" | "APP_AND_SOFTWARE" | "ARTICLE_AND_PUBLICATION" | "AUTOMOTIVE_MODEL" | "COLLECTION" | "DESTINATION" | "FLIGHT" | "HOME_LISTING" | "HOTEL" | "HOTEL_ROOM" | "LOCAL_INVENTORY" | "MEDIA_TITLE" | "OFFER" | "PRODUCTS" | "PRODUCT_RATINGS_AND_REVIEWS" | "SERVICE" | "TRANSACTABLE_ITEMS" | "VEHICLES" | "VEHICLE_OFFER";

export interface ProductFeedFields {
  readonly country?: string;
  readonly created_time?: string;
  readonly default_currency?: string;
  readonly deletion_enabled?: boolean;
  readonly delimiter?: ProductFeedDelimiter;
  readonly encoding?: string;
  readonly file_name?: string;
  readonly id?: string;
  readonly ingestion_source_type?: ProductFeedIngestionSourceType;
  readonly item_sub_type?: string;
  readonly latest_upload?: ProductFeedUploadFields;
  readonly migrated_from_feed_id?: string;
  readonly name?: string;
  readonly override_type?: string;
  readonly primary_feeds?: ReadonlyArray<string>;
  readonly product_count?: number;
  readonly quoted_fields_mode?: ProductFeedQuotedFieldsMode;
  readonly schedule?: ProductFeedScheduleFields;
  readonly supplementary_feeds?: ReadonlyArray<string>;
  readonly update_schedule?: ProductFeedScheduleFields;
}

export type ProductFeedIngestionSourceType = "primary_feed" | "supplementary_feed";

export type ProductFeedItemSubType = "APPLIANCES" | "BABY_FEEDING" | "BABY_TRANSPORT" | "BEAUTY" | "BEDDING" | "CAMERAS" | "CELL_PHONES_AND_SMART_WATCHES" | "CLEANING_SUPPLIES" | "CLOTHING" | "CLOTHING_ACCESSORIES" | "COMPUTERS_AND_TABLETS" | "DIAPERING_AND_POTTY_TRAINING" | "ELECTRONICS_ACCESSORIES" | "FURNITURE" | "HEALTH" | "HOME_GOODS" | "JEWELRY" | "NURSERY" | "PRINTERS_AND_SCANNERS" | "PROJECTORS" | "SHOES_AND_FOOTWEAR" | "SOFTWARE" | "TOYS" | "TVS_AND_MONITORS" | "VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES" | "WATCHES";

export type ProductFeedOverrideType = "BATCH_API_LANGUAGE_OR_COUNTRY" | "CATALOG_SEGMENT_CUSTOMIZE_DEFAULT" | "COUNTRY" | "LANGUAGE" | "LANGUAGE_AND_COUNTRY" | "LOCAL" | "SMART_PIXEL_LANGUAGE_OR_COUNTRY" | "VERSION";

export type ProductFeedQuotedFieldsMode = "AUTODETECT" | "OFF" | "ON";

export interface ProductFeedRuleFields {
  readonly attribute?: string;
  readonly id?: string;
  readonly params?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly rule_type?: string;
}

export interface ProductFeedRuleGetFields {
  readonly attribute?: string;
  readonly id?: number;
  readonly params?: ReadonlyArray<unknown>;
  readonly rule_type?: ProductFeedRuleGetRuleType;
}

export type ProductFeedRuleGetRuleType = "FALLBACK_RULE" | "LETTER_CASE_RULE" | "MAPPING_RULE" | "REGEX_REPLACE_RULE" | "VALUE_MAPPING_RULE";

export interface ProductFeedRulePreviewSampleFields {
  readonly properties_after?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly properties_before?: ReadonlyArray<Readonly<Record<string, string>>>;
}

export type ProductFeedRuleRuleType = "fallback_rule" | "letter_case_rule" | "mapping_rule" | "regex_replace_rule" | "value_mapping_rule";

export interface ProductFeedRulesFields {

}

export interface ProductFeedRulesGetFields {
  readonly data?: ReadonlyArray<unknown>;
  readonly paging?: unknown;
  readonly summary?: unknown;
}

export interface ProductFeedRuleSuggestionFields {
  readonly attribute?: string;
  readonly params?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly type?: string;
}

export interface ProductFeedScheduleFields {
  readonly day_of_month?: number;
  readonly day_of_week?: string;
  readonly hour?: number;
  readonly id?: string;
  readonly interval?: ProductFeedScheduleInterval;
  readonly interval_count?: number;
  readonly minute?: number;
  readonly timezone?: string;
  readonly url?: string;
  readonly username?: string;
}

export type ProductFeedScheduleInterval = "DAILY" | "HOURLY" | "MONTHLY" | "WEEKLY";

export type ProductFeedUploadErrorAffectedSurfaces = "Dynamic Ads" | "Marketplace" | "US Marketplace";

export type ProductFeedUploadErrorErrorPriority = "HIGH" | "LOW" | "MEDIUM";

export interface ProductFeedUploadErrorFields {
  readonly affected_surfaces?: ReadonlyArray<ProductFeedUploadErrorAffectedSurfaces>;
  readonly description?: string;
  readonly error_type?: string;
  readonly id?: string;
  readonly severity?: ProductFeedUploadErrorSeverity;
  readonly summary?: string;
  readonly total_count?: number;
}

export interface ProductFeedUploadErrorReportFields {
  readonly file_handle?: string;
  readonly report_status?: string;
}

export interface ProductFeedUploadErrorSampleFields {
  readonly id?: string;
  readonly retailer_id?: string;
  readonly row_number?: number;
}

export type ProductFeedUploadErrorSeverity = "fatal" | "warning";

export interface ProductFeedUploadFields {
  readonly end_time?: string;
  readonly error_count?: number;
  readonly error_report?: ProductFeedUploadErrorReportFields;
  readonly filename?: string;
  readonly id?: string;
  readonly input_method?: ProductFeedUploadInputMethod;
  readonly num_deleted_items?: number;
  readonly num_detected_items?: number;
  readonly num_invalid_items?: number;
  readonly num_persisted_items?: number;
  readonly start_time?: string;
  readonly url?: string;
  readonly warning_count?: number;
}

export interface ProductFeedUploadGetFields {
  readonly end_time?: unknown;
  readonly error_count?: number;
  readonly error_report?: unknown;
  readonly errors?: unknown;
  readonly filename?: string;
  readonly id?: number;
  readonly input_method?: ProductFeedUploadGetInputMethod;
  readonly num_deleted_items?: number;
  readonly num_detected_items?: number;
  readonly num_invalid_items?: number;
  readonly num_persisted_items?: number;
  readonly progresses?: unknown;
  readonly start_time?: unknown;
  readonly upload_complete?: boolean;
  readonly url?: string;
  readonly warning_count?: number;
}

export type ProductFeedUploadGetInputMethod = "GOOGLE_SHEETS_FETCH" | "MANUAL_UPLOAD" | "REUPLOAD_EXISTING" | "REUPLOAD_LAST_FILE" | "SERVER_FETCH" | "USER_INITIATED_SERVER_FETCH";

export type ProductFeedUploadInputMethod = "Google Sheets Fetch" | "Manual Upload" | "Reupload Last File" | "Server Fetch" | "User initiated server fetch";

export interface ProductFeedUploadProgressFields {
  readonly pos?: number;
  readonly size?: number;
  readonly step?: string;
  readonly unit?: string;
  readonly updated_time?: string;
}

export type ProductFeedUseCase = "CREATOR_ASSET";

export interface ProductGroupFields {
  readonly id?: string;
  readonly product_catalog?: ProductCatalogFields;
  readonly retailer_id?: string;
  readonly variants?: ReadonlyArray<ProductVariantFields>;
}

export interface ProductGroupGetFields {
  readonly id?: number;
  readonly mini_shops_product_sets_count?: number;
  readonly product_catalog?: unknown;
  readonly products?: unknown;
  readonly representative_item_id?: string;
  readonly retailer_id?: string;
  readonly variants?: ReadonlyArray<unknown>;
}

export interface ProductImageFields {
  readonly height?: number;
  readonly id?: string;
  readonly image_url?: string;
  readonly width?: number;
}

export type ProductItemAgeGroup = "adult" | "all ages" | "infant" | "kids" | "newborn" | "teen" | "toddler";

export type ProductItemAvailability = "available for order" | "discontinued" | "in stock" | "mark_as_expired" | "mark_as_sold" | "out of stock" | "pending" | "preorder";

export type ProductItemCapabilityToReviewStatus = "APPROVED" | "NO_REVIEW" | "OUTDATED" | "PENDING" | "REJECTED";

export interface ProductItemCommerceInsightsFields {
  readonly message_sends?: number;
  readonly organic_impressions?: number;
  readonly paid_impressions?: number;
}

export type ProductItemCommerceTaxCategory = "FB_ANIMAL" | "FB_ANIMAL_SUPP" | "FB_APRL" | "FB_APRL_ACCESSORIES" | "FB_APRL_ATHL_UNIF" | "FB_APRL_CASES" | "FB_APRL_CLOTHING" | "FB_APRL_COSTUME" | "FB_APRL_CSTM" | "FB_APRL_FORMAL" | "FB_APRL_HANDBAG" | "FB_APRL_JEWELRY" | "FB_APRL_SHOE" | "FB_APRL_SHOE_ACC" | "FB_APRL_SWIM" | "FB_APRL_SWIM_CHIL" | "FB_APRL_SWIM_CVR" | "FB_ARTS" | "FB_ARTS_HOBBY" | "FB_ARTS_PARTY" | "FB_ARTS_PARTY_GIFT_CARD" | "FB_ARTS_TICKET" | "FB_BABY" | "FB_BABY_BATH" | "FB_BABY_BLANKET" | "FB_BABY_DIAPER" | "FB_BABY_GIFT_SET" | "FB_BABY_HEALTH" | "FB_BABY_NURSING" | "FB_BABY_POTTY_TRN" | "FB_BABY_SAFE" | "FB_BABY_TOYS" | "FB_BABY_TRANSPORT" | "FB_BABY_TRANSPORT_ACC" | "FB_BAGS" | "FB_BAGS_BKPK" | "FB_BAGS_BOXES" | "FB_BAGS_BRFCS" | "FB_BAGS_CSMT_BAG" | "FB_BAGS_DFFL" | "FB_BAGS_DIPR" | "FB_BAGS_FNNY" | "FB_BAGS_GRMT" | "FB_BAGS_LUGG" | "FB_BAGS_LUG_ACC" | "FB_BAGS_MSGR" | "FB_BAGS_TOTE" | "FB_BAGS_TRN_CAS" | "FB_BLDG" | "FB_BLDG_ACC" | "FB_BLDG_CNSMB" | "FB_BLDG_FENCE" | "FB_BLDG_FUEL_TNK" | "FB_BLDG_HT_VNT" | "FB_BLDG_LOCK" | "FB_BLDG_MATRL" | "FB_BLDG_PLMB" | "FB_BLDG_PUMP" | "FB_BLDG_PWRS" | "FB_BLDG_STR_TANK" | "FB_BLDG_S_ENG" | "FB_BLDG_TL_ACC" | "FB_BLDG_TOOL" | "FB_BUSIND" | "FB_BUSIND_ADVERTISING" | "FB_BUSIND_AGRICULTURE" | "FB_BUSIND_AUTOMATION" | "FB_BUSIND_HEAVY_MACH" | "FB_BUSIND_LAB" | "FB_BUSIND_MEDICAL" | "FB_BUSIND_RETAIL" | "FB_BUSIND_SANITARY_CT" | "FB_BUSIND_SIGN" | "FB_BUSIND_STORAGE" | "FB_BUSIND_STORAGE_ACC" | "FB_BUSIND_WORK_GEAR" | "FB_CAMERA_ACC" | "FB_CAMERA_CAMERA" | "FB_CAMERA_OPTIC" | "FB_CAMERA_OPTICS" | "FB_CAMERA_PHOTO" | "FB_ELEC" | "FB_ELEC_ACC" | "FB_ELEC_ARCDADE" | "FB_ELEC_AUDIO" | "FB_ELEC_CIRCUIT" | "FB_ELEC_COMM" | "FB_ELEC_COMPUTER" | "FB_ELEC_GPS_ACC" | "FB_ELEC_GPS_NAV" | "FB_ELEC_GPS_TRK" | "FB_ELEC_MARINE" | "FB_ELEC_NETWORK" | "FB_ELEC_PART" | "FB_ELEC_PRINT" | "FB_ELEC_RADAR" | "FB_ELEC_SFTWR" | "FB_ELEC_SPEED_RDR" | "FB_ELEC_TELEVISION" | "FB_ELEC_TOLL" | "FB_ELEC_VIDEO" | "FB_ELEC_VID_GM_ACC" | "FB_ELEC_VID_GM_CNSL" | "FB_FOOD" | "FB_FURN" | "FB_FURN_BABY" | "FB_FURN_BENCH" | "FB_FURN_CART" | "FB_FURN_CHAIR" | "FB_FURN_CHAIR_ACC" | "FB_FURN_DIVIDE" | "FB_FURN_DIVIDE_ACC" | "FB_FURN_ENT_CTR" | "FB_FURN_FUTN" | "FB_FURN_FUTN_PAD" | "FB_FURN_OFFICE" | "FB_FURN_OFFICE_ACC" | "FB_FURN_OTTO" | "FB_FURN_OUTDOOR" | "FB_FURN_OUTDOOR_ACC" | "FB_FURN_SETS" | "FB_FURN_SHELVE_ACC" | "FB_FURN_SHLF" | "FB_FURN_SOFA" | "FB_FURN_SOFA_ACC" | "FB_FURN_STORAGE" | "FB_FURN_TABL" | "FB_FURN_TABL_ACC" | "FB_GENERIC_TAXABLE" | "FB_HLTH" | "FB_HLTH_HLTH" | "FB_HLTH_JWL_CR" | "FB_HLTH_LILP_BLM" | "FB_HLTH_LTN_SPF" | "FB_HLTH_PRSL_CR" | "FB_HLTH_SKN_CR" | "FB_HMGN" | "FB_HMGN_BATH" | "FB_HMGN_DCOR" | "FB_HMGN_EMGY" | "FB_HMGN_FPLC" | "FB_HMGN_FPLC_ACC" | "FB_HMGN_GS_SFT" | "FB_HMGN_HS_ACC" | "FB_HMGN_HS_APP" | "FB_HMGN_HS_SPL" | "FB_HMGN_KTCN" | "FB_HMGN_LAWN" | "FB_HMGN_LGHT" | "FB_HMGN_LINN" | "FB_HMGN_LT_ACC" | "FB_HMGN_OTDR" | "FB_HMGN_POOL" | "FB_HMGN_SCTY" | "FB_HMGN_SMK_ACC" | "FB_HMGN_UMBR" | "FB_HMGN_UMBR_ACC" | "FB_MDIA" | "FB_MDIA_BOOK" | "FB_MDIA_DVDS" | "FB_MDIA_MAG" | "FB_MDIA_MANL" | "FB_MDIA_MUSC" | "FB_MDIA_PRJ_PLN" | "FB_MDIA_SHT_MUS" | "FB_OFFC" | "FB_OFFC_BKAC" | "FB_OFFC_CRTS" | "FB_OFFC_DSKP" | "FB_OFFC_EQIP" | "FB_OFFC_FLNG" | "FB_OFFC_GNRL" | "FB_OFFC_INSTM" | "FB_OFFC_LP_DSK" | "FB_OFFC_MATS" | "FB_OFFC_NM_PLT" | "FB_OFFC_PPR_HNDL" | "FB_OFFC_PRSNT_SPL" | "FB_OFFC_SEALR" | "FB_OFFC_SHIP_SPL" | "FB_RLGN" | "FB_RLGN_CMNY" | "FB_RLGN_ITEM" | "FB_RLGN_WEDD" | "FB_SFTWR" | "FB_SFWR_CMPTR" | "FB_SFWR_DGTL_GD" | "FB_SFWR_GAME" | "FB_SHIPPING" | "FB_SPOR" | "FB_SPORT_ATHL" | "FB_SPORT_ATHL_CLTH" | "FB_SPORT_ATHL_SHOE" | "FB_SPORT_ATHL_SPRT" | "FB_SPORT_EXRCS" | "FB_SPORT_INDR_GM" | "FB_SPORT_OTDR_GM" | "FB_TOYS" | "FB_TOYS_EQIP" | "FB_TOYS_GAME" | "FB_TOYS_PZZL" | "FB_TOYS_TMRS" | "FB_TOYS_TOYS" | "FB_VEHI" | "FB_VEHI_PART";

export type ProductItemCondition = "cpo" | "new" | "open_box_new" | "refurbished" | "used" | "used_fair" | "used_good" | "used_like_new";

export interface ProductItemErrorFields {
  readonly description?: string;
  readonly error_priority?: string;
  readonly error_type?: string;
  readonly title?: string;
}

export type ProductItemErrorPriority = "HIGH" | "LOW" | "MEDIUM";

export type ProductItemErrorType = "ADDRESS_BLOCKLISTED_IN_MARKET" | "AGGREGATED_LOCALIZATION_ISSUES" | "APP_HAS_NO_AEM_SETUP" | "AR_DELETED_DUE_TO_UPDATE" | "AR_POLICY_VIOLATED" | "AVAILABLE" | "BAD_QUALITY_IMAGE" | "BIG_CATALOG_WITH_ALL_ITEMS_IN_STOCK" | "BIZ_MSG_AI_AGENT_DISABLED_BY_USER" | "BIZ_MSG_GEN_AI_POLICY_VIOLATED" | "CANNOT_EDIT_SUBSCRIPTION_PRODUCTS" | "CATALOG_NOT_CONNECTED_TO_EVENT_SOURCE" | "CHECKOUT_DISABLED_BY_USER" | "COMMERCE_ACCOUNT_LEGAL_ADDRESS_INVALID" | "COMMERCE_ACCOUNT_NOT_LEGALLY_COMPLIANT" | "CRAWLED_AVAILABILITY_MISMATCH" | "DA_DISABLED_BY_USER" | "DA_POLICY_VIOLATION" | "DELETED_ITEM" | "DIGITAL_GOODS_NOT_AVAILABLE_FOR_CHECKOUT" | "DUPLICATE_IMAGES" | "DUPLICATE_TITLE_AND_DESCRIPTION" | "EMPTY_AVAILABILITY" | "EMPTY_BRAND" | "EMPTY_CONDITION" | "EMPTY_DESCRIPTION" | "EMPTY_IMAGE_URL" | "EMPTY_PRICE" | "EMPTY_PRODUCT_URL" | "EMPTY_SELLER_DESCRIPTION" | "EMPTY_TITLE" | "EXTERNAL_MERCHANT_ID_MISMATCH" | "GENERIC_INVALID_FIELD" | "GROUPS_DISABLED_BY_USER" | "HIDDEN_UNTIL_PRODUCT_LAUNCH" | "ILLEGAL_PRODUCT_CATEGORY" | "IMAGE_FETCH_FAILED" | "IMAGE_FETCH_FAILED_BAD_GATEWAY" | "IMAGE_FETCH_FAILED_FILE_SIZE_EXCEEDED" | "IMAGE_FETCH_FAILED_FORBIDDEN" | "IMAGE_FETCH_FAILED_LINK_BROKEN" | "IMAGE_FETCH_FAILED_TIMED_OUT" | "IMAGE_RESOLUTION_LOW" | "INACTIVE_MAGENTO_PRODUCT" | "INACTIVE_SALESFORCE_COMMERCE_CLOUD_PRODUCT" | "INACTIVE_SHOPIFY_PRODUCT" | "INACTIVE_WOOCOMMERCE_PRODUCT" | "INVALID_COMMERCE_TAX_CATEGORY" | "INVALID_COMSCORE_MARKET_CODES" | "INVALID_CONSOLIDATED_LOCALITY_INFORMATION" | "INVALID_CONTENT_ID" | "INVALID_DEALER_COMMUNICATION_PARAMETERS" | "INVALID_DMA_CODES" | "INVALID_FB_PAGE_ID" | "INVALID_IMAGES" | "INVALID_MONETIZER_RETURN_POLICY" | "INVALID_OFFER_DISCLAIMER_URL" | "INVALID_OFFER_END_DATE" | "INVALID_PRE_ORDER_PARAMS" | "INVALID_RANGE_FOR_AREA_SIZE" | "INVALID_RANGE_FOR_BUILT_UP_AREA_SIZE" | "INVALID_RANGE_FOR_NUM_OF_BATHS" | "INVALID_RANGE_FOR_NUM_OF_BEDS" | "INVALID_RANGE_FOR_NUM_OF_ROOMS" | "INVALID_RANGE_FOR_PARKING_SPACES" | "INVALID_SALE_PRICE" | "INVALID_SHELTER_PAGE_ID" | "INVALID_SHIPPING_PROFILE_PARAMS" | "INVALID_SUBSCRIPTION_DISABLE_PARAMS" | "INVALID_SUBSCRIPTION_ENABLE_PARAMS" | "INVALID_SUBSCRIPTION_PARAMS" | "INVALID_TAX_EXTENSION_STATE" | "INVALID_VEHICLE_STATE" | "INVALID_VIRTUAL_TOUR_URL_DOMAIN" | "INVENTORY_ZERO_AVAILABILITY_IN_STOCK" | "IN_ANOTHER_PRODUCT_LAUNCH" | "ITEM_GROUP_NOT_SPECIFIED" | "ITEM_NOT_SHIPPABLE_FOR_SCA_SHOP" | "ITEM_OVERRIDE_EMPTY_AVAILABILITY" | "ITEM_OVERRIDE_EMPTY_PRICE" | "ITEM_OVERRIDE_NOT_VISIBLE" | "ITEM_PRICE_NOT_POSITIVE" | "ITEM_STALE_OUT_OF_STOCK" | "ITEM_WITHOUT_VIDEO" | "MARKETPLACE_DISABLED_BY_USER" | "MARKETPLACE_NOT_SHIPPED_ITEM" | "MARKETPLACE_PARTNER_AUCTION_NO_BID_CLOSE_TIME" | "MARKETPLACE_PARTNER_CURRENCY_NOT_VALID" | "MARKETPLACE_PARTNER_DISTRIBUTION_DISABLED" | "MARKETPLACE_PARTNER_LISTING_COUNTRY_NOT_MATCH_CATALOG" | "MARKETPLACE_PARTNER_LISTING_LIMIT_EXCEEDED" | "MARKETPLACE_PARTNER_MISSING_LATLONG" | "MARKETPLACE_PARTNER_MISSING_SHIPPING_COST" | "MARKETPLACE_PARTNER_NOT_LOCAL_ITEM" | "MARKETPLACE_PARTNER_NOT_SHIPPED_ITEM" | "MARKETPLACE_PARTNER_POLICY_VIOLATION" | "MARKETPLACE_PARTNER_RULE_LISTING_LIMIT_EXCEEDED" | "MARKETPLACE_PARTNER_SELLER_BANNED" | "MARKETPLACE_PARTNER_SELLER_NOT_VALID" | "MARKETPLACE_SHIPPED_ITEM_EXPIRED" | "MARKETPLACE_SHIPPED_ITEM_NOT_AVAILABLE" | "MARKETPLACE_SHIPPED_SELLER_FEATURE_BANNED" | "MARKETPLACE_SHIPPED_SELLER_NOT_FULLY_ONBOARDED" | "MINI_SHOPS_DISABLED_BY_USER" | "MISSING_CHECKOUT" | "MISSING_CHECKOUT_CURRENCY" | "MISSING_COLOR" | "MISSING_COUNTRY_OVERRIDE_IN_SHIPPING_PROFILE" | "MISSING_EVENT" | "MISSING_INDIA_COMPLIANCE_FIELDS" | "MISSING_SHIPPING_PROFILE" | "MISSING_SIZE" | "MISSING_TAX_CATEGORY" | "NEGATIVE_COMMUNITY_FEEDBACK" | "NEGATIVE_PRICE" | "NOT_ENOUGH_IMAGES" | "NOT_ENOUGH_UNIQUE_PRODUCTS" | "NO_CONTENT_ID" | "OVERLAY_DISCLAIMER_EXCEEDED_MAX_LENGTH" | "PART_OF_PRODUCT_LAUNCH" | "PASSING_MULTIPLE_CONTENT_IDS" | "PRODUCT_DOMINANT_CURRENCY_MISMATCH" | "PRODUCT_EXPIRED" | "PRODUCT_ITEM_HIDDEN_FROM_ALL_SHOPS" | "PRODUCT_ITEM_INVALID_PARTNER_TOKENS" | "PRODUCT_ITEM_NOT_INCLUDED_IN_ANY_SHOP" | "PRODUCT_ITEM_NOT_VISIBLE" | "PRODUCT_NOT_APPROVED" | "PRODUCT_NOT_DOMINANT_CURRENCY" | "PRODUCT_OUT_OF_STOCK" | "PRODUCT_URL_EQUALS_DOMAIN" | "PROPERTY_PRICE_CURRENCY_NOT_SUPPORTED" | "PROPERTY_PRICE_TOO_HIGH" | "PROPERTY_PRICE_TOO_LOW" | "PROPERTY_UNIT_PRICE_CURRENCY_MISMATCH_ITEM_PRICE_CURRENCY" | "PROPERTY_VALUE_CONTAINS_HTML_TAGS" | "PROPERTY_VALUE_DESCRIPTION_CONTAINS_OFF_PLATFORM_LINK" | "PROPERTY_VALUE_FORMAT" | "PROPERTY_VALUE_MISSING" | "PROPERTY_VALUE_MISSING_WARNING" | "PROPERTY_VALUE_NON_POSITIVE" | "PROPERTY_VALUE_STRING_EXCEEDS_LENGTH" | "PROPERTY_VALUE_STRING_TOO_SHORT" | "PROPERTY_VALUE_UPPERCASE" | "PROPERTY_VALUE_UPPERCASE_WARNING" | "PURCHASE_RATE_BELOW_ADDTOCART" | "PURCHASE_RATE_BELOW_VIEWCONTENT" | "QUALITY_DUPLICATED_DESCRIPTION" | "QUALITY_ITEM_LINK_BROKEN" | "QUALITY_ITEM_LINK_REDIRECTING" | "RETAILER_ID_NOT_PROVIDED" | "RETAILER_ID_USED_BY_GROUP" | "SHOPIFY_INVALID_RETAILER_ID" | "SHOPIFY_ITEM_MISSING_DELIVERY_PROFILE_ZERO_INVENTORY" | "SHOPIFY_ITEM_MISSING_SHIPPING_PROFILE" | "SHOPS_POLICY_VIOLATION" | "SUBSCRIPTION_INFO_NOT_ENABLED_FOR_FEED" | "TAX_CATEGORY_NOT_SUPPORTED_IN_UK" | "TOP_PRODUCT_WITHOUT_VIDEOS" | "UNIQUE_PRODUCT_IDENTIFIER_MISSING" | "UNMATCHED_EVENTS" | "UNSUPPORTED_PRODUCT_CATEGORY" | "VARIANT_ATTRIBUTE_ISSUE" | "VIDEO_FETCH_FAILED" | "VIDEO_FETCH_FAILED_BAD_GATEWAY" | "VIDEO_FETCH_FAILED_FILE_SIZE_EXCEEDED" | "VIDEO_FETCH_FAILED_FORBIDDEN" | "VIDEO_FETCH_FAILED_LINK_BROKEN" | "VIDEO_FETCH_FAILED_RATE_LIMITED" | "VIDEO_FETCH_FAILED_SERVER_ERROR" | "VIDEO_FETCH_FAILED_TIMED_OUT" | "VIDEO_ISSUE_GENERIC" | "VIDEO_NOT_DOWNLOADABLE" | "WHATSAPP_DISABLED_BY_USER" | "WHATSAPP_MARKETING_MESSAGE_DISABLED_BY_USER" | "WHATSAPP_MARKETING_MESSAGE_POLICY_VIOLATION" | "WHATSAPP_POLICY_VIOLATION";

export interface ProductItemFields {
  readonly additional_image_cdn_urls?: ReadonlyArray<ReadonlyArray<Readonly<Record<string, string>>>>;
  readonly additional_image_urls?: ReadonlyArray<string>;
  readonly additional_variant_attributes?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly affiliate_seller_rating?: number;
  readonly affiliate_seller_rating_count?: number;
  readonly age_group?: ProductItemAgeGroup;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly availability?: ProductItemAvailability;
  readonly base_commission_rate?: number;
  readonly brand?: string;
  readonly bundle_items?: ReadonlyArray<string>;
  readonly bundle_retailer_ids?: ReadonlyArray<string>;
  readonly capabilities_disabled_by_user?: ReadonlyArray<string>;
  readonly capability_to_review_status?: ReadonlyArray<Readonly<Record<string, ProductItemCapabilityToReviewStatus>>>;
  readonly category?: string;
  readonly category_ranking?: number;
  readonly category_specific_fields?: CatalogSubVerticalListFields;
  readonly color?: string;
  readonly commerce_insights?: ProductItemCommerceInsightsFields;
  readonly condition?: ProductItemCondition;
  readonly currency?: string;
  readonly custom_data?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: string;
  readonly custom_number_1?: string;
  readonly custom_number_2?: string;
  readonly custom_number_3?: string;
  readonly custom_number_4?: string;
  readonly description?: string;
  readonly errors?: ReadonlyArray<ProductItemErrorFields>;
  readonly expiration_date?: string;
  readonly fb_product_category?: string;
  readonly gender?: ProductItemGender;
  readonly generated_background_images?: ReadonlyArray<AIGeneratedProductImageFields>;
  readonly generated_background_images_ad_usage?: boolean;
  readonly gtin?: string;
  readonly id?: string;
  readonly image_cdn_urls?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly image_fetch_status?: ProductItemImageFetchStatus;
  readonly image_url?: string;
  readonly images?: ReadonlyArray<string>;
  readonly importer_address?: ProductItemImporterAddressFields;
  readonly importer_name?: string;
  readonly invalidation_errors?: ReadonlyArray<ProductItemInvalidationErrorFields>;
  readonly inventory?: number;
  readonly is_bundle_hero?: boolean;
  readonly live_special_price?: string;
  readonly manufacturer_info?: string;
  readonly manufacturer_part_number?: string;
  readonly marked_for_product_launch?: string;
  readonly material?: string;
  readonly mobile_link?: string;
  readonly name?: string;
  readonly offer_disclaimer?: string;
  readonly offer_disclaimer_url?: string;
  readonly ordering_index?: number;
  readonly origin_country?: string;
  readonly overall_ranking?: number;
  readonly parent_product_id?: string;
  readonly pattern?: string;
  readonly post_conversion_signal_based_enforcement_appeal_eligibility?: boolean;
  readonly price?: string;
  readonly product_catalog?: ProductCatalogFields;
  readonly product_feed?: ProductFeedFields;
  readonly product_group?: ProductGroupFields;
  readonly product_local_info?: ProductItemLocalInfoFields;
  readonly product_relationship?: string;
  readonly product_type?: string;
  readonly quantity_to_sell_on_facebook?: number;
  readonly retailer_id?: string;
  readonly retailer_product_group_id?: string;
  readonly review_rejection_reasons?: ReadonlyArray<string>;
  readonly review_status?: ProductItemReviewStatus;
  readonly rich_text_description?: string;
  readonly sale_price?: string;
  readonly sale_price_end_date?: string;
  readonly sale_price_start_date?: string;
  readonly shipping_weight_unit?: ProductItemShippingWeightUnit;
  readonly shipping_weight_value?: number;
  readonly short_description?: string;
  readonly size?: string;
  readonly start_date?: string;
  readonly status?: ProductItemStatus;
  readonly tags?: ReadonlyArray<string>;
  readonly url?: string;
  readonly vendor_id?: string;
  readonly video_fetch_status?: ProductItemVideoFetchStatus;
  readonly videos?: ReadonlyArray<ProductItemVideoDataFields>;
  readonly visibility?: ProductItemVisibility;
  readonly wa_compliance_category?: string;
}

export type ProductItemGender = "female" | "male" | "unisex";

export type ProductItemImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export interface ProductItemImporterAddressFields {
  readonly city?: string;
  readonly country?: string;
  readonly postal_code?: string;
  readonly region?: string;
  readonly street1?: string;
  readonly street2?: string;
}

export interface ProductItemInsightsFields {
  readonly ad_click_count?: number;
  readonly ad_impression_count?: number;
  readonly add_to_cart_count?: number;
  readonly purchase_count?: number;
  readonly view_content_count?: number;
}

export interface ProductItemInvalidationErrorFields {

}

export type ProductItemLandingPageDataAvailability = "available for order" | "discontinued" | "in stock" | "mark_as_expired" | "mark_as_sold" | "out of stock" | "pending" | "preorder";

export interface ProductItemLandingPageDataFields {
  readonly availability?: ProductItemLandingPageDataAvailability;
}

export interface ProductItemLocalInfoFields {
  readonly availability_circle_origin?: ProductItemLocalInfoLatLongShapeFields;
  readonly availability_circle_radius?: number;
  readonly availability_circle_radius_unit?: string;
  readonly availability_polygon_coordinates?: ReadonlyArray<ProductItemLocalInfoLatLongShapeFields>;
  readonly availability_postal_codes?: ReadonlyArray<string>;
  readonly availability_source?: string;
  readonly id?: string;
  readonly inferred_circle_origin?: ProductItemLocalInfoLatLongShapeFields;
  readonly inferred_circle_radius?: number;
}

export interface ProductItemLocalInfoLatLongShapeFields {
  readonly latitude?: number;
  readonly longitude?: number;
}

export type ProductItemMarkedForProductLaunch = "default" | "marked" | "not_marked";

export interface ProductItemOfferFields {
  readonly availability_area?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly availability_radius?: number;
  readonly id?: string;
}

export type ProductItemOriginCountry = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

export type ProductItemReviewStatus = "approved" | "outdated" | "pending" | "rejected";

export interface ProductItemShippingFields {
  readonly shipping_country?: string;
  readonly shipping_price_currency?: string;
  readonly shipping_price_value?: number;
  readonly shipping_region?: string;
  readonly shipping_service?: string;
}

export type ProductItemShippingWeightUnit = "g" | "kg" | "lb" | "oz";

export type ProductItemStatus = "PUBLISHED" | "STAGING";

export interface ProductItemSubscriptionInfoFields {
  readonly is_subscribable?: boolean;
  readonly subscription_billing_period?: number;
  readonly subscription_billing_type?: string;
}

export interface ProductItemUnitPriceFields {

}

export interface ProductItemVideoDataFields {
  readonly tags?: ReadonlyArray<string>;
  readonly url?: string;
}

export type ProductItemVideoFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type ProductItemVisibility = "published" | "staging";

export type ProductItemWaComplianceCategory = "COUNTRY_ORIGIN_EXEMPT" | "DEFAULT";

export interface ProductSetFields {
  readonly auto_creation_url?: string;
  readonly filter?: string;
  readonly id?: string;
  readonly latest_metadata?: ProductSetMetadataFields;
  readonly live_metadata?: ProductSetMetadataFields;
  readonly name?: string;
  readonly ordering_info?: ReadonlyArray<number>;
  readonly product_catalog?: ProductCatalogFields;
  readonly product_count?: number;
  readonly retailer_id?: string;
}

export interface ProductSetMetadataFields {
  readonly cover_image_url?: string;
  readonly description?: string;
  readonly external_url?: string;
  readonly integrity_review_status?: string;
}

export interface ProductSetTaxonCategoryFields {
  readonly category_id?: number;
  readonly category_name?: string;
  readonly image_url?: string;
}

export interface ProductVariantFields {
  readonly label?: string;
  readonly options?: ReadonlyArray<string>;
  readonly product_field?: string;
}

export interface ProductVisualVariantFields {
  readonly items?: ReadonlyArray<ProductItemFields>;
  readonly unique_key?: string;
}

export interface ProfileFields {
  readonly can_post?: boolean;
  readonly id?: string;
  readonly link?: string;
  readonly name?: string;
  readonly pic?: string;
  readonly pic_crop?: ProfilePictureSourceFields;
  readonly pic_large?: string;
  readonly pic_small?: string;
  readonly pic_square?: string;
  readonly profile_type?: ProfileProfileType;
  readonly username?: string;
}

export interface ProfilePictureSourceFields {
  readonly bottom?: number;
  readonly cache_key?: string;
  readonly height?: number;
  readonly is_silhouette?: boolean;
  readonly left?: number;
  readonly right?: number;
  readonly top?: number;
  readonly url?: string;
  readonly width?: number;
}

export type ProfilePictureSourceType = "album" | "small" | "thumbnail";

export type ProfileProfileType = "application" | "event" | "group" | "page" | "user";

export type ProfileType = "ANGRY" | "CARE" | "FIRE" | "HAHA" | "HUNDRED" | "LIKE" | "LOVE" | "NONE" | "PRIDE" | "SAD" | "THANKFUL" | "WOW";

export interface PublisherBlockListFields {
  readonly app_publishers?: ReadonlyArray<AppPublisherFields>;
  readonly business_owner_id?: string;
  readonly id?: string;
  readonly is_auto_blocking_on?: boolean;
  readonly is_eligible_at_campaign_level?: boolean;
  readonly last_update_time?: string;
  readonly last_update_user?: string;
  readonly name?: string;
  readonly owner_ad_account_id?: string;
  readonly web_publishers?: ReadonlyArray<WebPublisherFields>;
}

export interface PublisherDeliveryReportFields {
  readonly content_types?: ReadonlyArray<string>;
  readonly estimated_impressions?: number;
  readonly name?: string;
  readonly status?: string;
  readonly url?: string;
}

export interface RawCustomAudienceFields {
  readonly id?: string;
  readonly name?: string;
}

export interface ReachFrequencyActivityFields {
  readonly account_id?: string;
  readonly campaign_active?: boolean;
  readonly campaign_started?: boolean;
  readonly creative_uploaded?: boolean;
  readonly io_approved?: boolean;
  readonly sf_link?: string;
}

export interface ReachFrequencyAdFormatFields {
  readonly details?: Readonly<Record<string, unknown>>;
  readonly type?: string;
}

export interface ReachFrequencyCurveLowerConfidenceRangeFields {
  readonly impression_lower?: ReadonlyArray<number>;
  readonly num_points?: number;
  readonly reach?: ReadonlyArray<number>;
  readonly reach_lower?: ReadonlyArray<number>;
  readonly uniq_video_views_2s_lower?: ReadonlyArray<number>;
  readonly video_views_2s_lower?: ReadonlyArray<number>;
}

export interface ReachFrequencyCurveUpperConfidenceRangeFields {
  readonly impression_upper?: ReadonlyArray<number>;
  readonly num_points?: number;
  readonly reach?: ReadonlyArray<number>;
  readonly reach_upper?: ReadonlyArray<number>;
  readonly uniq_video_views_2s_upper?: ReadonlyArray<number>;
  readonly video_views_2s_upper?: ReadonlyArray<number>;
}

export interface ReachFrequencyDayPartFields {
  readonly days?: ReadonlyArray<number>;
  readonly end_minute?: number;
  readonly start_minute?: number;
}

export interface ReachFrequencyEstimatesCurveFields {
  readonly budget?: ReadonlyArray<number>;
  readonly conversion?: ReadonlyArray<number>;
  readonly impression?: ReadonlyArray<number>;
  readonly interpolated_reach?: number;
  readonly num_points?: number;
  readonly raw_impression?: ReadonlyArray<number>;
  readonly raw_reach?: ReadonlyArray<number>;
  readonly reach?: ReadonlyArray<number>;
}

export interface ReachFrequencyEstimatesPlacementBreakdownFields {
  readonly android?: ReadonlyArray<number>;
  readonly audience_network?: ReadonlyArray<number>;
  readonly desktop?: ReadonlyArray<number>;
  readonly facebook_search?: ReadonlyArray<number>;
  readonly fb_reels?: ReadonlyArray<number>;
  readonly fb_reels_overlay?: ReadonlyArray<number>;
  readonly ig_android?: ReadonlyArray<number>;
  readonly ig_ios?: ReadonlyArray<number>;
  readonly ig_other?: ReadonlyArray<number>;
  readonly ig_reels?: ReadonlyArray<number>;
  readonly ig_story?: ReadonlyArray<number>;
  readonly instant_articles?: ReadonlyArray<number>;
  readonly instream_videos?: ReadonlyArray<number>;
  readonly ios?: ReadonlyArray<number>;
  readonly msite?: ReadonlyArray<number>;
  readonly suggested_videos?: ReadonlyArray<number>;
}

export type ReachFrequencyPredictionAction = "cancel" | "quote" | "reserve";

export type ReachFrequencyPredictionBuyingType = "AUCTION" | "DEPRECATED_REACH_BLOCK" | "FIXED_CPM" | "MIXED" | "REACHBLOCK" | "RESEARCH_POLL" | "RESERVED";

export interface ReachFrequencyPredictionFields {
  readonly account_id?: number;
  readonly activity_status?: ReachFrequencyActivityFields;
  readonly ad_formats?: ReadonlyArray<ReachFrequencyAdFormatFields>;
  readonly auction_entry_option_index?: number;
  readonly audience_size_lower_bound?: number;
  readonly audience_size_upper_bound?: number;
  readonly business_id?: number;
  readonly buying_type?: string;
  readonly campaign_group_id?: number;
  readonly campaign_id?: string;
  readonly campaign_time_start?: string;
  readonly campaign_time_stop?: string;
  readonly currency?: string;
  readonly curve_budget_reach?: ReachFrequencyEstimatesCurveFields;
  readonly curve_reach?: ReadonlyArray<number>;
  readonly daily_grp_curve?: ReadonlyArray<number>;
  readonly daily_impression_curve?: ReadonlyArray<number>;
  readonly daily_impression_curve_map?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<number>>>>;
  readonly day_parting_schedule?: ReadonlyArray<ReachFrequencyDayPartFields>;
  readonly destination_id?: string;
  readonly end_time?: string;
  readonly expiration_time?: string;
  readonly external_budget?: number;
  readonly external_impression?: number;
  readonly external_maximum_budget?: number;
  readonly external_maximum_impression?: string;
  readonly external_maximum_reach?: number;
  readonly external_minimum_budget?: number;
  readonly external_minimum_impression?: number;
  readonly external_minimum_reach?: number;
  readonly external_reach?: number;
  readonly feed_ratio_0000?: number;
  readonly frequency_cap?: number;
  readonly frequency_distribution_map?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<number>>>>;
  readonly frequency_distribution_map_agg?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<number>>>>;
  readonly grp_audience_size?: number;
  readonly grp_avg_probability_map?: string;
  readonly grp_country_audience_size?: number;
  readonly grp_curve?: ReadonlyArray<number>;
  readonly grp_dmas_audience_size?: number;
  readonly grp_filtering_threshold_00?: number;
  readonly grp_points?: number;
  readonly grp_ratio?: number;
  readonly grp_reach_ratio?: number;
  readonly grp_status?: string;
  readonly holdout_percentage?: number;
  readonly id?: string;
  readonly impression_curve?: ReadonlyArray<number>;
  readonly instagram_destination_id?: string;
  readonly instream_packages?: ReadonlyArray<string>;
  readonly interval_frequency_cap?: number;
  readonly interval_frequency_cap_reset_period?: number;
  readonly is_balanced_frequency?: boolean;
  readonly is_bonus_media?: number;
  readonly is_conversion_goal?: number;
  readonly is_higher_average_frequency?: boolean;
  readonly is_io?: boolean;
  readonly is_reserved_buying?: number;
  readonly is_trp?: boolean;
  readonly meta_moment_maker_spec?: MetaMomentMakerConfigFields;
  readonly name?: string;
  readonly objective?: number;
  readonly objective_name?: string;
  readonly odax_objective?: number;
  readonly odax_objective_name?: string;
  readonly optimization_goal?: number;
  readonly optimization_goal_name?: string;
  readonly pause_periods?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly percent_reach_at_target_frequency?: number;
  readonly placement_breakdown?: ReachFrequencyEstimatesPlacementBreakdownFields;
  readonly placement_breakdown_map?: ReadonlyArray<Readonly<Record<string, ReachFrequencyEstimatesPlacementBreakdownFields>>>;
  readonly plan_name?: string;
  readonly plan_type?: string;
  readonly prediction_mode?: number;
  readonly prediction_progress?: number;
  readonly reference_id?: string;
  readonly reservation_status?: number;
  readonly start_time?: string;
  readonly status?: number;
  readonly story_event_type?: number;
  readonly target_cpm?: number;
  readonly target_frequency?: number;
  readonly target_frequency_reset_period?: number;
  readonly target_spec?: TargetingFields;
  readonly time_created?: string;
  readonly time_updated?: string;
  readonly timezone_id?: number;
  readonly timezone_name?: string;
  readonly topline_id?: number;
  readonly trending_topics_spec?: TrendingTopicsSpecFields;
  readonly video_view_length_constraint?: number;
  readonly viewtag?: string;
}

export type ReachFrequencyPredictionInstreamPackages = "BEAUTY" | "ENTERTAINMENT" | "FOOD" | "NORMAL" | "PREMIUM" | "REGULAR_ANIMALS_PETS" | "REGULAR_FOOD" | "REGULAR_GAMES" | "REGULAR_POLITICS" | "REGULAR_SPORTS" | "REGULAR_STYLE" | "REGULAR_TV_MOVIES" | "SPANISH" | "SPORTS";

export interface ReachFrequencySpecFields {
  readonly countries?: ReadonlyArray<string>;
  readonly default_creation_data?: Readonly<Record<string, unknown>>;
  readonly global_io_max_campaign_duration?: number;
  readonly max_campaign_duration?: Readonly<Record<string, unknown>>;
  readonly max_days_to_finish?: Readonly<Record<string, unknown>>;
  readonly max_pause_without_prediction_rerun?: Readonly<Record<string, unknown>>;
  readonly min_campaign_duration?: Readonly<Record<string, unknown>>;
  readonly min_reach_limits?: Readonly<Record<string, unknown>>;
}

export interface RecommendationFields {
  readonly created_time?: string;
  readonly has_rating?: boolean;
  readonly has_review?: boolean;
  readonly open_graph_story?: Readonly<Record<string, unknown>>;
  readonly rating?: number;
  readonly recommendation_type?: string;
  readonly review_text?: string;
  readonly reviewer?: UserFields;
}

export interface RecommendedIGMediaFields {
  readonly intent_score?: number;
  readonly media?: IGMediaFields;
}

export interface RecommendedPagePostFields {
  readonly intent_score?: number;
  readonly is_ig_media?: boolean;
  readonly post_id?: string;
}

export interface RegionalRegulationIdentitiesFields {
  readonly australia_finserv_beneficiary?: string;
  readonly australia_finserv_payer?: string;
  readonly india_finserv_beneficiary?: string;
  readonly india_finserv_payer?: string;
  readonly singapore_universal_beneficiary?: string;
  readonly singapore_universal_payer?: string;
  readonly taiwan_finserv_beneficiary?: string;
  readonly taiwan_finserv_payer?: string;
  readonly taiwan_universal_beneficiary?: string;
  readonly taiwan_universal_payer?: string;
  readonly universal_beneficiary?: string;
  readonly universal_payer?: string;
}

export interface RepeatReachStateFields {
  readonly current_saturation_level?: number;
  readonly forecasted_saturation_level?: number;
  readonly high_saturation_threshold?: number;
  readonly should_display_cpr?: boolean;
}

export interface ReportingAudienceFields {
  readonly custom_audiences?: ReadonlyArray<RawCustomAudienceFields>;
  readonly custom_audiences_url_param_name?: string;
  readonly custom_audiences_url_param_type?: string;
}

export interface ResearchPollStudyFields {
  readonly account?: AdAccountFields;
  readonly id?: string;
  readonly name?: string;
}

export interface ResellerGuidanceFields {
  readonly ad_account_first_spend_date?: string;
  readonly ad_account_id?: string;
  readonly adopted_guidance_l7d?: ReadonlyArray<string>;
  readonly advertiser_name?: string;
  readonly attributed_to_reseller_l7d?: boolean;
  readonly available_guidance?: ReadonlyArray<string>;
  readonly guidance_adoption_rate_l7d?: number;
  readonly nurtured_by_reseller_l7d?: boolean;
  readonly planning_agency_name?: string;
  readonly recommendation_time?: string;
  readonly reporting_ds?: string;
  readonly reseller?: BusinessFields;
  readonly revenue_l30d?: number;
  readonly ultimate_advertiser_name?: string;
}

export interface RevSharePolicyFields {
  readonly policy_id?: string;
  readonly policy_name?: string;
}

export interface RightsManagerDataExportFields {
  readonly download_uri?: string;
  readonly export_scope?: string;
  readonly id?: string;
  readonly name?: string;
  readonly record_type?: string;
  readonly time_range_end?: string;
  readonly time_range_start?: string;
}

export interface RightsManagerInsightsFields {
  readonly error?: string;
  readonly error_message?: string;
  readonly metadata?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly totals?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly x_axis_breakdown?: ReadonlyArray<ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>>;
}

export interface RobotFields {
  readonly bringup_vars?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly configurations?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly data_center?: string;
  readonly fw_image?: string;
  readonly id?: string;
  readonly init_pos?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly last_pos?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly meetup_link_hash?: string;
  readonly release_image?: string;
  readonly robot_notes?: string;
  readonly suite?: string;
  readonly target_fw_image?: string;
  readonly target_fw_image_uri?: string;
  readonly target_map_image_uri?: string;
  readonly target_os_image_uri?: string;
  readonly target_release_image?: string;
  readonly target_sw_image_uri?: string;
  readonly user?: UserFields;
}

export interface RTBDynamicPostFields {
  readonly child_attachments?: ReadonlyArray<DynamicPostChildAttachmentFields>;
  readonly created?: string;
  readonly description?: string;
  readonly id?: string;
  readonly image_url?: string;
  readonly link?: string;
  readonly message?: string;
  readonly owner_id?: string;
  readonly place_id?: string;
  readonly product_id?: string;
  readonly title?: string;
}

export interface SalesRightsInventoryManagementFields {
  readonly available_impressions?: number;
  readonly booked_impressions?: number;
  readonly overbooked_impressions?: number;
  readonly supported_countries?: ReadonlyArray<string>;
  readonly total_impressions?: number;
  readonly unavailable_impressions?: number;
  readonly warning_messages?: ReadonlyArray<string>;
}

export interface SavedAudienceFields {
  readonly account?: AdAccountFields;
  readonly approximate_count_lower_bound?: number;
  readonly approximate_count_upper_bound?: number;
  readonly delete_time?: number;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly operation_status?: CustomAudienceStatusFields;
  readonly owner_business?: BusinessFields;
  readonly page_deletion_marked_delete_time?: number;
  readonly permission_for_actions?: AudiencePermissionForActionsFields;
  readonly run_status?: string;
  readonly sentence_lines?: ReadonlyArray<unknown>;
  readonly targeting?: TargetingFields;
  readonly time_created?: string;
  readonly time_updated?: string;
}

export interface SavedMessageResponseFields {
  readonly id?: string;
  readonly image?: string;
  readonly is_enabled?: boolean;
  readonly message?: string;
  readonly title?: string;
}

export interface ScheduledPostFields {
  readonly admin_creator?: UserFields;
  readonly creation_time?: string;
  readonly feed_audience_description?: string;
  readonly feed_targeting?: TargetingFields;
  readonly id?: string;
  readonly is_post_in_good_state?: boolean;
  readonly message?: string;
  readonly modified_time?: string;
  readonly og_action_summary?: string;
  readonly permalink_url?: string;
  readonly place?: PlaceFields;
  readonly privacy_description?: string;
  readonly scheduled_failure_notice?: string;
  readonly scheduled_publish_time?: string;
  readonly story_token?: string;
  readonly thumbnail?: string;
  readonly video_id?: string;
}

export interface ScimCompanyUserPhoneNumberFields {
  readonly number?: string;
  readonly primary?: boolean;
  readonly type?: string;
}

export interface SecuritySettingsFields {

}

export interface ShadowIGHashtagFields {
  readonly id?: string;
  readonly name?: string;
}

export interface ShadowIGMediaBuilderFields {
  readonly copyright_check_status?: IGVideoCopyrightCheckStatusFields;
  readonly id?: string;
  readonly status?: string;
  readonly status_code?: string;
  readonly video_status?: IGResumableVideoUploadStatusFields;
}

export interface ShadowIGMediaCollaboratorsFields {
  readonly id?: string;
  readonly invite_status?: string;
  readonly username?: string;
}

export interface ShadowIGMediaProductTagsFields {
  readonly image_url?: string;
  readonly is_checkout?: boolean;
  readonly merchant_id?: number;
  readonly name?: string;
  readonly price_string?: string;
  readonly product_id?: number;
  readonly review_status?: string;
  readonly stripped_price_string?: string;
  readonly stripped_sale_price_string?: string;
  readonly x?: number;
  readonly y?: number;
}

export interface ShadowIGScheduledMediaFields {
  readonly caption?: string;
  readonly id?: string;
  readonly media_type?: string;
  readonly media_url?: string;
  readonly publish_timestamp?: number;
  readonly thumbnail_url?: string;
}

export interface ShadowIGUserCatalogProductSearchFields {
  readonly image_url?: string;
  readonly is_checkout_flow?: boolean;
  readonly merchant_id?: number;
  readonly product_id?: number;
  readonly product_name?: string;
  readonly product_variants?: ReadonlyArray<ShadowIGUserCatalogProductVariantFields>;
  readonly retailer_id?: string;
  readonly review_status?: string;
}

export interface ShadowIGUserCatalogProductVariantFields {
  readonly product_id?: number;
  readonly variant_name?: string;
}

export interface ShadowIGUserCollaborationInvitesFields {
  readonly caption?: string;
  readonly media_id?: string;
  readonly media_owner_username?: string;
  readonly media_url?: string;
}

export interface ShadowIGUserCollaborativeMediaFields {
  readonly caption?: string;
  readonly comments_count?: number;
  readonly id?: string;
  readonly like_count?: number;
  readonly media_product_type?: string;
  readonly media_type?: string;
  readonly media_url?: string;
  readonly permalink?: string;
  readonly reposts_count?: number;
  readonly saved_count?: number;
  readonly shares_count?: number;
  readonly thumbnail_url?: string;
  readonly timestamp?: string;
  readonly total_comments_count?: number;
  readonly total_like_count?: number;
  readonly total_views_count?: number;
  readonly username?: string;
}

export interface ShadowIGUserCTXPartnerAppWelcomeMessageFlowFields {
  readonly compatible_platforms?: ReadonlyArray<string>;
  readonly eligible_platforms?: ReadonlyArray<string>;
  readonly id?: string;
  readonly is_ig_only_flow?: boolean;
  readonly is_used_in_ad?: boolean;
  readonly last_update_time?: string;
  readonly name?: string;
  readonly welcome_message_flow?: string;
}

export interface ShadowIGUserPartnershipAdsMediaErrorsFields {
  readonly ad_code?: string;
  readonly error_codes?: string;
  readonly errors?: ReadonlyArray<string>;
  readonly permalink?: string;
}

export interface ShadowIGUserThreadOwnerFields {

}

export interface ShopFields {
  readonly commerce_merchant_settings?: CommerceMerchantSettingsFields;
  readonly fb_sales_channel?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly ig_sales_channel?: Readonly<Record<string, unknown>>;
  readonly shop_status?: string;
  readonly workspace?: Readonly<Record<string, unknown>>;
}

export interface SignalsIWLExtractorFields {
  readonly domain_uri?: string;
  readonly event_type?: string;
  readonly extractor_config?: Readonly<Record<string, unknown>>;
  readonly extractor_type?: string;
  readonly id?: string;
}

export interface SingleOwnerAdditionalProfileFields {
  readonly id?: string;
  readonly name?: string;
  readonly user_name?: string;
}

export interface SiteLinkFields {
  readonly id?: string;
  readonly link_image_hash?: string;
  readonly link_title?: string;
  readonly link_type?: string;
  readonly link_url?: string;
}

export interface SlicedEventSourceGroupFields {
  readonly event_source_group?: EventSourceGroupFields;
  readonly filter?: string;
  readonly id?: string;
  readonly name?: string;
}

export interface SocialWifiSiteFields {
  readonly id?: string;
}

export interface SplitTestWinnerFields {
  readonly ad_object_level?: string;
  readonly confidences?: ReadonlyArray<Readonly<Record<string, number>>>;
  readonly winner_ad_object_id?: string;
}

export interface StatusFields {
  readonly event?: EventFields;
  readonly from?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly message?: string;
  readonly place?: PlaceFields;
  readonly updated_time?: string;
}

export interface StoreCatalogSettingsFields {
  readonly id?: string;
  readonly page?: PageFields;
}

export interface StoreLocationFields {
  readonly full_address?: string;
  readonly hours?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly phone_number?: string;
  readonly pickup_options?: ReadonlyArray<string>;
  readonly price_range?: string;
  readonly store_code?: string;
  readonly zip_code?: string;
}

export interface StoriesFields {
  readonly creation_time?: string;
  readonly media_id?: string;
  readonly media_type?: string;
  readonly post_id?: string;
  readonly status?: string;
  readonly url?: string;
}

export type StoriesStatus = "ARCHIVED" | "PUBLISHED";

export interface StreamFilterFields {
  readonly filter_key?: string;
  readonly name?: string;
  readonly type?: string;
}

export interface SystemUserFields {
  readonly created_by?: UserFields;
  readonly created_time?: string;
  readonly finance_permission?: string;
  readonly id?: string;
  readonly ip_permission?: string;
  readonly name?: string;
}

export type SystemUserRole = "ADMIN" | "ADS_RIGHTS_REVIEWER" | "DEFAULT" | "DEVELOPER" | "EMPLOYEE" | "FINANCE_ANALYST" | "FINANCE_EDIT" | "FINANCE_EDITOR" | "FINANCE_VIEW" | "MANAGE" | "PARTNER_CENTER_ADMIN" | "PARTNER_CENTER_ANALYST" | "PARTNER_CENTER_EDUCATION" | "PARTNER_CENTER_MARKETING" | "PARTNER_CENTER_OPERATIONS";

export interface TabFields {
  readonly application?: ApplicationFields;
  readonly custom_image_url?: string;
  readonly custom_name?: string;
  readonly id?: string;
  readonly image_url?: string;
  readonly is_non_connection_landing_tab?: boolean;
  readonly is_permanent?: boolean;
  readonly link?: string;
  readonly name?: string;
  readonly position?: number;
}

export interface TaggableSubjectFields {
  readonly id?: string;
  readonly name?: string;
}

export interface TargetingAutomationFields {
  readonly advantage_audience?: number;
  readonly creative_audience_pairing?: number;
  readonly individual_setting?: Readonly<Record<string, unknown>>;
  readonly shared_audiences?: number;
  readonly value_expression?: number;
}

export type TargetingDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export interface TargetingDynamicRuleFields {
  readonly "action.type"?: string;
  readonly ad_group_id?: string;
  readonly campaign_group_id?: string;
  readonly campaign_id?: string;
  readonly impression_count?: string;
  readonly page_id?: string;
  readonly post?: string;
  readonly retention_seconds?: string;
}

export type TargetingEffectiveDevicePlatforms = "connected_tv" | "desktop" | "mobile";

export interface TargetingFields {
  readonly adgroup_id?: string;
  readonly age_max?: number;
  readonly age_min?: number;
  readonly age_range?: ReadonlyArray<number>;
  readonly app_install_state?: string;
  readonly audience_network_positions?: ReadonlyArray<string>;
  readonly behaviors?: ReadonlyArray<IDNameFields>;
  readonly brand_safety_content_filter_levels?: ReadonlyArray<string>;
  readonly catalog_based_targeting?: CatalogBasedTargetingFields;
  readonly cities?: ReadonlyArray<IDNameFields>;
  readonly college_years?: ReadonlyArray<number>;
  readonly connections?: ReadonlyArray<ConnectionsTargetingFields>;
  readonly contextual_targeting_categories?: ReadonlyArray<IDNameFields>;
  readonly countries?: ReadonlyArray<string>;
  readonly country?: ReadonlyArray<string>;
  readonly country_groups?: ReadonlyArray<string>;
  readonly custom_audiences?: ReadonlyArray<RawCustomAudienceFields>;
  readonly device_platforms?: ReadonlyArray<TargetingDevicePlatforms>;
  readonly direct_install_devices?: boolean;
  readonly dynamic_audience_ids?: ReadonlyArray<string>;
  readonly education_majors?: ReadonlyArray<IDNameFields>;
  readonly education_schools?: ReadonlyArray<IDNameFields>;
  readonly education_statuses?: ReadonlyArray<number>;
  readonly effective_audience_network_positions?: ReadonlyArray<string>;
  readonly effective_brand_safety_content_filter_levels?: ReadonlyArray<string>;
  readonly effective_device_platforms?: ReadonlyArray<TargetingEffectiveDevicePlatforms>;
  readonly effective_facebook_positions?: ReadonlyArray<string>;
  readonly effective_instagram_positions?: ReadonlyArray<string>;
  readonly effective_messenger_positions?: ReadonlyArray<string>;
  readonly effective_publisher_platforms?: ReadonlyArray<string>;
  readonly effective_threads_positions?: ReadonlyArray<string>;
  readonly effective_whatsapp_positions?: ReadonlyArray<string>;
  readonly engagement_specs?: ReadonlyArray<TargetingDynamicRuleFields>;
  readonly ethnic_affinity?: ReadonlyArray<IDNameFields>;
  readonly exclude_reached_since?: ReadonlyArray<string>;
  readonly excluded_brand_safety_content_types?: ReadonlyArray<string>;
  readonly excluded_connections?: ReadonlyArray<ConnectionsTargetingFields>;
  readonly excluded_custom_audiences?: ReadonlyArray<RawCustomAudienceFields>;
  readonly excluded_dynamic_audience_ids?: ReadonlyArray<string>;
  readonly excluded_engagement_specs?: ReadonlyArray<TargetingDynamicRuleFields>;
  readonly excluded_geo_locations?: TargetingGeoLocationFields;
  readonly excluded_mobile_device_model?: ReadonlyArray<string>;
  readonly excluded_product_audience_specs?: ReadonlyArray<TargetingProductAudienceSpecFields>;
  readonly excluded_publisher_categories?: ReadonlyArray<string>;
  readonly excluded_publisher_list_ids?: ReadonlyArray<string>;
  readonly excluded_user_device?: ReadonlyArray<string>;
  readonly exclusions?: FlexibleTargetingFields;
  readonly facebook_positions?: ReadonlyArray<string>;
  readonly family_statuses?: ReadonlyArray<IDNameFields>;
  readonly fb_deal_id?: string;
  readonly flexible_spec?: ReadonlyArray<FlexibleTargetingFields>;
  readonly friends_of_connections?: ReadonlyArray<ConnectionsTargetingFields>;
  readonly genders?: ReadonlyArray<number>;
  readonly generation?: ReadonlyArray<IDNameFields>;
  readonly geo_locations?: TargetingGeoLocationFields;
  readonly home_ownership?: ReadonlyArray<IDNameFields>;
  readonly home_type?: ReadonlyArray<IDNameFields>;
  readonly home_value?: ReadonlyArray<IDNameFields>;
  readonly household_composition?: ReadonlyArray<IDNameFields>;
  readonly income?: ReadonlyArray<IDNameFields>;
  readonly industries?: ReadonlyArray<IDNameFields>;
  readonly instagram_positions?: ReadonlyArray<string>;
  readonly install_state_application?: string;
  readonly instream_video_skippable_excluded?: boolean;
  readonly interested_in?: ReadonlyArray<number>;
  readonly interests?: ReadonlyArray<IDNameFields>;
  readonly is_whatsapp_destination_ad?: boolean;
  readonly keywords?: ReadonlyArray<string>;
  readonly life_events?: ReadonlyArray<IDNameFields>;
  readonly locales?: ReadonlyArray<number>;
  readonly messenger_positions?: ReadonlyArray<string>;
  readonly moms?: ReadonlyArray<IDNameFields>;
  readonly net_worth?: ReadonlyArray<IDNameFields>;
  readonly office_type?: ReadonlyArray<IDNameFields>;
  readonly place_page_set_ids?: ReadonlyArray<string>;
  readonly political_views?: ReadonlyArray<number>;
  readonly politics?: ReadonlyArray<IDNameFields>;
  readonly product_audience_specs?: ReadonlyArray<TargetingProductAudienceSpecFields>;
  readonly prospecting_audience?: TargetingProspectingAudienceFields;
  readonly publisher_platforms?: ReadonlyArray<string>;
  readonly radius?: string;
  readonly regions?: ReadonlyArray<IDNameFields>;
  readonly relationship_statuses?: ReadonlyArray<number>;
  readonly site_category?: ReadonlyArray<string>;
  readonly subscriber_universe?: TargetingSubscriberUniverseFields;
  readonly targeting_automation?: TargetingAutomationFields;
  readonly targeting_optimization?: string;
  readonly targeting_relaxation_types?: TargetingRelaxationFields;
  readonly threads_positions?: ReadonlyArray<string>;
  readonly user_adclusters?: ReadonlyArray<IDNameFields>;
  readonly user_age_unknown?: boolean;
  readonly user_device?: ReadonlyArray<string>;
  readonly user_event?: ReadonlyArray<number>;
  readonly user_os?: ReadonlyArray<string>;
  readonly whatsapp_positions?: ReadonlyArray<string>;
  readonly wireless_carrier?: ReadonlyArray<string>;
  readonly work_employers?: ReadonlyArray<IDNameFields>;
  readonly work_positions?: ReadonlyArray<IDNameFields>;
  readonly zips?: ReadonlyArray<string>;
}

export interface TargetingGeoLocationCityFields {
  readonly country?: string;
  readonly distance_unit?: string;
  readonly key?: string;
  readonly name?: string;
  readonly radius?: number;
  readonly region?: string;
  readonly region_id?: string;
}

export interface TargetingGeoLocationCustomLocationFields {
  readonly address_string?: string;
  readonly country?: string;
  readonly country_group?: string;
  readonly custom_type?: string;
  readonly distance_unit?: string;
  readonly key?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly max_population?: number;
  readonly min_population?: number;
  readonly name?: string;
  readonly primary_city_id?: number;
  readonly radius?: number;
  readonly region_id?: number;
}

export interface TargetingGeoLocationElectoralDistrictFields {
  readonly country?: string;
  readonly deprecation_code?: string;
  readonly electoral_district?: string;
  readonly key?: string;
  readonly name?: string;
}

export interface TargetingGeoLocationFields {
  readonly cities?: ReadonlyArray<TargetingGeoLocationCityFields>;
  readonly countries?: ReadonlyArray<string>;
  readonly country_groups?: ReadonlyArray<string>;
  readonly custom_locations?: ReadonlyArray<TargetingGeoLocationCustomLocationFields>;
  readonly electoral_districts?: ReadonlyArray<TargetingGeoLocationElectoralDistrictFields>;
  readonly geo_markets?: ReadonlyArray<TargetingGeoLocationMarketFields>;
  readonly large_geo_areas?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly location_cluster_ids?: ReadonlyArray<TargetingGeoLocationLocationClusterFields>;
  readonly location_types?: ReadonlyArray<string>;
  readonly medium_geo_areas?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly metro_areas?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly neighborhoods?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly places?: ReadonlyArray<TargetingGeoLocationPlaceFields>;
  readonly political_districts?: ReadonlyArray<TargetingGeoLocationPoliticalDistrictFields>;
  readonly regions?: ReadonlyArray<TargetingGeoLocationRegionFields>;
  readonly small_geo_areas?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly subcities?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly subneighborhoods?: ReadonlyArray<TargetingGeoLocationGeoEntitiesFields>;
  readonly zips?: ReadonlyArray<TargetingGeoLocationZipFields>;
}

export interface TargetingGeoLocationGeoEntitiesFields {
  readonly country?: string;
  readonly key?: string;
  readonly name?: string;
  readonly region?: string;
  readonly region_id?: string;
}

export interface TargetingGeoLocationLocationClusterFields {
  readonly key?: number;
}

export interface TargetingGeoLocationLocationExpansionFields {
  readonly allowed?: boolean;
  readonly intent?: string;
}

export interface TargetingGeoLocationMarketFields {
  readonly country?: string;
  readonly key?: string;
  readonly market_type?: string;
  readonly name?: string;
}

export interface TargetingGeoLocationPlaceFields {
  readonly country?: string;
  readonly distance_unit?: string;
  readonly key?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly name?: string;
  readonly primary_city_id?: number;
  readonly radius?: number;
  readonly region_id?: number;
}

export interface TargetingGeoLocationPoliticalDistrictFields {
  readonly country?: string;
  readonly key?: string;
  readonly name?: string;
  readonly political_district?: string;
}

export interface TargetingGeoLocationRegionFields {
  readonly country?: string;
  readonly key?: string;
  readonly name?: string;
}

export interface TargetingGeoLocationZipFields {
  readonly country?: string;
  readonly key?: string;
  readonly name?: string;
  readonly primary_city_id?: number;
  readonly region_id?: number;
}

export interface TargetingMarketingMessageChannelsFields {
  readonly whatsapp?: IDNameFields;
}

export interface TargetingProductAudienceSpecFields {
  readonly exclusions?: ReadonlyArray<TargetingProductAudienceSubSpecFields>;
  readonly inclusions?: ReadonlyArray<TargetingProductAudienceSubSpecFields>;
  readonly product_set_id?: string;
}

export interface TargetingProductAudienceSubSpecFields {
  readonly min_retention_seconds?: string;
  readonly retention_seconds?: string;
  readonly rule?: string;
}

export interface TargetingProspectingAudienceFields {
  readonly sources?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface TargetingRelaxationFields {
  readonly custom_audience?: number;
  readonly lookalike?: number;
}

export interface TargetingSentenceLineFields {
  readonly id?: string;
  readonly params?: TargetingFields;
  readonly targetingsentencelines?: ReadonlyArray<unknown>;
}

export interface TargetingSubscriberUniverseFields {
  readonly messaging_customer_base_for_whatsapp?: IDNameFields;
  readonly messenger_subscriber_pool?: IDNameFields;
  readonly messenger_subscriber_source?: IDNameFields;
  readonly whatsapp_subscriber_source?: IDNameFields;
}

export interface TextWithEntitiesFields {
  readonly text?: string;
}

export interface ThirdPartyMeasurementReportDatasetFields {
  readonly category?: string;
  readonly id?: string;
  readonly partner?: BusinessFields;
  readonly product?: string;
  readonly schema?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface ThirdPartyPartnerLiftRequestFields {
  readonly ad_entities?: ReadonlyArray<string>;
  readonly country?: string;
  readonly created_time?: string;
  readonly description?: string;
  readonly holdout_size?: number;
  readonly id?: string;
  readonly legacy_ads_data_partner_id?: string;
  readonly legacy_ads_data_partner_name?: string;
  readonly modified_time?: string;
  readonly owner_instance_id?: string;
  readonly partner_household_graph_dataset_id?: string;
  readonly region?: string;
  readonly status?: ThirdPartyPartnerLiftRequestStatus;
  readonly study_cells?: ReadonlyArray<string>;
  readonly study_end_time?: string;
  readonly study_start_time?: string;
}

export type ThirdPartyPartnerLiftRequestStatus = "CREATED" | "FAILURE" | "IN_PROGRESS" | "SCHEDULED" | "SUCCESS";

export interface ThirdPartyPartnerPanelRequestFields {
  readonly adentities_ids?: ReadonlyArray<string>;
  readonly country?: string;
  readonly created_time?: string;
  readonly description?: string;
  readonly id?: string;
  readonly modified_time?: string;
  readonly owner_instance_id?: string;
  readonly owner_panel_id?: string;
  readonly owner_panel_name?: string;
  readonly status?: ThirdPartyPartnerPanelRequestStatus;
  readonly study_end_time?: string;
  readonly study_start_time?: string;
  readonly study_type?: ThirdPartyPartnerPanelRequestStudyType;
}

export type ThirdPartyPartnerPanelRequestStatus = "CREATED" | "FAILURE" | "IN_PROGRESS" | "SCHEDULED" | "SUCCESS";

export type ThirdPartyPartnerPanelRequestStudyType = "BRAND_LIFT" | "PANEL_SALES_ATTRIBUTION" | "REACH";

export interface ThirdPartyPartnerPanelScheduledFields {
  readonly adentities_ids?: ReadonlyArray<string>;
  readonly cadence?: string;
  readonly country?: string;
  readonly created_time?: string;
  readonly description?: string;
  readonly end_time?: string;
  readonly id?: string;
  readonly modified_time?: string;
  readonly owner_instance_id?: string;
  readonly owner_panel_id?: string;
  readonly owner_panel_name?: string;
  readonly start_time?: string;
  readonly status?: ThirdPartyPartnerPanelScheduledStatus;
  readonly study_type?: ThirdPartyPartnerPanelScheduledStudyType;
}

export type ThirdPartyPartnerPanelScheduledStatus = "CANCELLED" | "CREATED" | "FINISHED" | "ONGOING";

export type ThirdPartyPartnerPanelScheduledStudyType = "BRAND_LIFT" | "PANEL_SALES_ATTRIBUTION" | "REACH";

export interface ThirdPartyPartnerViewabilityRequestFields {
  readonly created_time?: string;
  readonly description?: string;
  readonly ds?: string;
  readonly hour?: string;
  readonly id?: string;
  readonly metric?: ThirdPartyPartnerViewabilityRequestMetric;
  readonly modified_time?: string;
  readonly owner_instance_id?: string;
  readonly platform?: ThirdPartyPartnerViewabilityRequestPlatform;
  readonly status?: ThirdPartyPartnerViewabilityRequestStatus;
  readonly total_file_count?: number;
}

export type ThirdPartyPartnerViewabilityRequestMetric = "DISPLAY_EVENT" | "IMPRESSION" | "VIDEO_EVENT";

export type ThirdPartyPartnerViewabilityRequestPlatform = "AUDIENCE_NETWORK" | "FACEBOOK" | "INSTAGRAM" | "THREADS";

export type ThirdPartyPartnerViewabilityRequestStatus = "CREATED" | "FAILURE" | "IN_PROGRESS" | "SCHEDULED" | "SUCCESS";

export interface ThreadsUserFields {
  readonly threads_user_id?: string;
  readonly threads_user_profile_pic?: string;
}

export interface TimeSuggestionFields {
  readonly high_demand_periods?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly is_enabled?: boolean;
}

export interface TimezoneOffsetFields {
  readonly abbr?: string;
  readonly isdst?: boolean;
  readonly offset?: number;
  readonly time?: string;
  readonly ts?: number;
}

export interface TrackingAndConversionWithDefaultsFields {
  readonly custom_conversion?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly custom_tracking?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly default_conversion?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly default_tracking?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface TransactableItemFields {
  readonly action_title?: string;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly currency?: string;
  readonly description?: string;
  readonly duration_time?: number;
  readonly duration_type?: string;
  readonly id?: string;
  readonly image_fetch_status?: TransactableItemImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly order_index?: number;
  readonly price?: string;
  readonly price_type?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly session_type?: string;
  readonly time_padding_after_end?: number;
  readonly title?: string;
  readonly transactable_item_id?: string;
  readonly url?: string;
  readonly visibility?: TransactableItemVisibility;
}

export type TransactableItemImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type TransactableItemVisibility = "PUBLISHED" | "STAGING";

export interface TransactionFields {
  readonly account_id?: string;
  readonly app_amount?: Readonly<Record<string, unknown>>;
  readonly billing_end_time?: number;
  readonly billing_reason?: string;
  readonly billing_start_time?: number;
  readonly card_charge_mode?: number;
  readonly charge_type?: string;
  readonly checkout_campaign_group_id?: string;
  readonly credential_id?: string;
  readonly fatura_id?: number;
  readonly id?: string;
  readonly is_business_ec_charge?: boolean;
  readonly is_funding_event?: boolean;
  readonly payment_option?: string;
  readonly product_type?: TransactionProductType;
  readonly provider_amount?: Readonly<Record<string, unknown>>;
  readonly status?: string;
  readonly time?: number;
  readonly tracking_id?: string;
  readonly transaction_type?: string;
  readonly tx_type?: number;
  readonly vat_invoice_id?: string;
}

export type TransactionProductType = "cp_return_label" | "facebook_ad" | "ig_ad" | "whatsapp" | "workplace";

export interface TrendingTopicsSpecFields {
  readonly is_all_trending?: boolean;
  readonly is_special_budget_alloc?: boolean;
  readonly trending_topics?: ReadonlyArray<string>;
}

export interface UnifiedThreadFields {
  readonly can_reply?: boolean;
  readonly folder?: string;
  readonly former_participants?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly is_owner?: boolean;
  readonly is_subscribed?: boolean;
  readonly link?: string;
  readonly linked_group?: GroupFields;
  readonly message_count?: number;
  readonly name?: string;
  readonly participants?: Readonly<Record<string, unknown>>;
  readonly scoped_thread_key?: string;
  readonly senders?: Readonly<Record<string, unknown>>;
  readonly snippet?: string;
  readonly unread_count?: number;
  readonly updated_time?: string;
  readonly wallpaper?: string;
}

export type UnifiedThreadPlatform = "INSTAGRAM" | "MESSENGER";

export interface UniqueAdCreativeFields {
  readonly sample_creative?: AdCreativeFields;
  readonly visual_hash?: number;
}

export interface URLFields {
  readonly engagement?: Readonly<Record<string, unknown>>;
  readonly id?: string;
  readonly og_object?: Readonly<Record<string, unknown>>;
  readonly ownership_permissions?: Readonly<Record<string, unknown>>;
  readonly scopes?: Readonly<Record<string, unknown>>;
}

export type URLScopes = "NEWS_TAB" | "NEWS_TAB_DEV_ENV";

export interface UserAvailableCatalogsFields {
  readonly catalog_id?: string;
  readonly catalog_name?: string;
  readonly product_count?: number;
  readonly shop_name?: string;
}

export interface UserContextFields {
  readonly id?: string;
}

export interface UserCoverPhotoFields {
  readonly offset_x?: number;
  readonly offset_y?: number;
  readonly source?: string;
}

export interface UserDeviceFields {
  readonly hardware?: string;
  readonly os?: string;
}

export interface UserFields {
  readonly about?: string;
  readonly age_range?: AgeRangeFields;
  readonly birthday?: string;
  readonly client_business_id?: string;
  readonly community?: GroupFields;
  readonly cover?: UserCoverPhotoFields;
  readonly currency?: CurrencyFields;
  readonly education?: ReadonlyArray<EducationExperienceFields>;
  readonly email?: string;
  readonly favorite_athletes?: ReadonlyArray<ExperienceFields>;
  readonly favorite_teams?: ReadonlyArray<ExperienceFields>;
  readonly first_name?: string;
  readonly gender?: string;
  readonly hometown?: PageFields;
  readonly id?: string;
  readonly inspirational_people?: ReadonlyArray<ExperienceFields>;
  readonly install_type?: string;
  readonly installed?: boolean;
  readonly is_guest_user?: boolean;
  readonly is_work_account?: boolean;
  readonly languages?: ReadonlyArray<ExperienceFields>;
  readonly last_name?: string;
  readonly link?: string;
  readonly local_news_megaphone_dismiss_status?: boolean;
  readonly local_news_subscription_status?: boolean;
  readonly locale?: string;
  readonly location?: PageFields;
  readonly meeting_for?: ReadonlyArray<string>;
  readonly middle_name?: string;
  readonly name?: string;
  readonly name_format?: string;
  readonly payment_pricepoints?: PaymentPricepointsFields;
  readonly political?: string;
  readonly profile_pic?: string;
  readonly quotes?: string;
  readonly relationship_status?: string;
  readonly religion?: string;
  readonly shared_login_upgrade_required_by?: string;
  readonly short_name?: string;
  readonly significant_other?: UserFields;
  readonly sports?: ReadonlyArray<ExperienceFields>;
  readonly supports_donate_button_in_live_video?: boolean;
  readonly third_party_id?: string;
  readonly timezone?: number;
  readonly token_for_business?: string;
  readonly updated_time?: string;
  readonly verified?: boolean;
  readonly video_upload_limits?: VideoUploadLimitsFields;
  readonly website?: string;
}

export type UserFiltering = "ema" | "groups" | "groups_social";

export interface UserIDForAppFields {
  readonly app?: ApplicationFields;
  readonly id?: string;
  readonly instant_game_player_id?: string;
}

export interface UserIDForPageFields {
  readonly id?: string;
  readonly page?: PageFields;
}

export interface UserLeadGenDisclaimerResponseFields {
  readonly checkbox_key?: string;
  readonly is_checked?: string;
}

export interface UserLeadGenFieldDataFields {
  readonly name?: string;
  readonly values?: ReadonlyArray<string>;
}

export type UserLocalNewsMegaphoneDismissStatus = "NO" | "YES";

export type UserLocalNewsSubscriptionStatus = "STATUS_OFF" | "STATUS_ON";

export interface UserMobileConfigFields {
  readonly section_name?: string;
  readonly value?: Readonly<Record<string, unknown>>;
}

export interface UserNotificationSeenStateDataFields {
  readonly id?: string;
  readonly seen_state?: string;
}

export interface UserPageOneTimeOptInTokenSettingsFields {
  readonly creation_timestamp?: number;
  readonly custom_audience_ids?: ReadonlyArray<string>;
  readonly next_eligible_time?: number;
  readonly next_eligible_time_for_paid_messaging?: number;
  readonly notification_messages_frequency?: string;
  readonly notification_messages_reoptin?: string;
  readonly notification_messages_timezone?: string;
  readonly notification_messages_token?: string;
  readonly recipient_id?: string;
  readonly token_expiry_timestamp?: number;
  readonly topic_title?: string;
  readonly user_token_status?: string;
}

export type UserPageOneTimeOptInTokenSettingsOptInSource = "COMMENT_AUTOMATION" | "CTM" | "REPLY_AUTOMATION" | "SUBSCRIBER_LIST";

export interface UserPaymentMethodsInfoFields {
  readonly account_id?: string;
  readonly available_card_types?: ReadonlyArray<string>;
  readonly available_payment_methods?: ReadonlyArray<string>;
  readonly available_payment_methods_details?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly country?: string;
  readonly currency?: string;
  readonly existing_payment_methods?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface UserPaymentMobilePricepointsFields {
  readonly mobile_country?: string;
  readonly phone_number_last4?: string;
  readonly pricepoints?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly user_currency?: string;
}

export interface UserPaymentModulesOptionsFields {
  readonly account_id?: string;
  readonly available_payment_options?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly country?: string;
  readonly currency?: string;
}

export type UserType = "content_update" | "generic";

export interface ValueBasedEligibleSourceFields {
  readonly id?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface ValueRulesSpecFields {

}

export type VehicleAvailability = "AVAILABLE" | "NOT_AVAILABLE" | "PENDING" | "UNKNOWN";

export type VehicleBodyStyle = "CONVERTIBLE" | "COUPE" | "CROSSOVER" | "ESTATE" | "GRANDTOURER" | "HATCHBACK" | "MINIBUS" | "MINIVAN" | "MPV" | "NONE" | "OTHER" | "PICKUP" | "ROADSTER" | "SALOON" | "SEDAN" | "SMALL_CAR" | "SPORTSCAR" | "SUPERCAR" | "SUPERMINI" | "SUV" | "TRUCK" | "VAN" | "WAGON";

export type VehicleCondition = "EXCELLENT" | "FAIR" | "GOOD" | "NONE" | "OTHER" | "POOR" | "VERY_GOOD";

export type VehicleDrivetrain = "AWD" | "FOUR_WD" | "FWD" | "NONE" | "OTHER" | "RWD" | "TWO_WD";

export interface VehicleFields {
  readonly address?: Readonly<Record<string, unknown>>;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly availability?: string;
  readonly availability_circle_radius?: number;
  readonly availability_circle_radius_unit?: string;
  readonly body_style?: string;
  readonly condition?: string;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly date_first_on_lot?: string;
  readonly dealer_communication_channel?: string;
  readonly dealer_email?: string;
  readonly dealer_id?: string;
  readonly dealer_name?: string;
  readonly dealer_phone?: string;
  readonly dealer_privacy_policy_url?: string;
  readonly description?: string;
  readonly drivetrain?: string;
  readonly exterior_color?: string;
  readonly fb_page_id?: PageFields;
  readonly features?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly fuel_type?: string;
  readonly id?: string;
  readonly image_fetch_status?: VehicleImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly interior_color?: string;
  readonly legal_disclosure_impressum_url?: string;
  readonly make?: string;
  readonly mileage?: Readonly<Record<string, unknown>>;
  readonly model?: string;
  readonly previous_currency?: string;
  readonly previous_price?: string;
  readonly price?: string;
  readonly product_priority_0?: number;
  readonly product_priority_1?: number;
  readonly product_priority_2?: number;
  readonly product_priority_3?: number;
  readonly product_priority_4?: number;
  readonly sale_currency?: string;
  readonly sale_price?: string;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly state_of_vehicle?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly title?: string;
  readonly transmission?: string;
  readonly trim?: string;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly vehicle_id?: string;
  readonly vehicle_registration_plate?: string;
  readonly vehicle_specifications?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly vehicle_type?: string;
  readonly vin?: string;
  readonly visibility?: VehicleVisibility;
  readonly year?: number;
}

export type VehicleFuelType = "DIESEL" | "ELECTRIC" | "FLEX" | "GASOLINE" | "HYBRID" | "NONE" | "OTHER" | "PETROL" | "PLUGIN_HYBRID";

export type VehicleImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export interface VehicleOfferFields {
  readonly amount_currency?: string;
  readonly amount_percentage?: number;
  readonly amount_price?: string;
  readonly amount_qualifier?: string;
  readonly applinks?: CatalogItemAppLinksFields;
  readonly availability?: string;
  readonly body_style?: string;
  readonly cashback_currency?: string;
  readonly cashback_price?: string;
  readonly comscore_market_codes?: ReadonlyArray<string>;
  readonly currency?: string;
  readonly custom_label_0?: string;
  readonly custom_label_1?: string;
  readonly custom_label_2?: string;
  readonly custom_label_3?: string;
  readonly custom_label_4?: string;
  readonly custom_number_0?: number;
  readonly custom_number_1?: number;
  readonly custom_number_2?: number;
  readonly custom_number_3?: number;
  readonly custom_number_4?: number;
  readonly dma_codes?: ReadonlyArray<string>;
  readonly downpayment_currency?: string;
  readonly downpayment_price?: string;
  readonly downpayment_qualifier?: string;
  readonly drivetrain?: string;
  readonly end_date?: string;
  readonly end_time?: number;
  readonly exterior_color?: string;
  readonly fuel_type?: string;
  readonly generation?: string;
  readonly id?: string;
  readonly image_fetch_status?: VehicleOfferImageFetchStatus;
  readonly images?: ReadonlyArray<string>;
  readonly interior_color?: string;
  readonly interior_upholstery?: string;
  readonly make?: string;
  readonly model?: string;
  readonly offer_description?: string;
  readonly offer_disclaimer?: string;
  readonly offer_type?: string;
  readonly price?: string;
  readonly product_priority_0?: number;
  readonly product_priority_1?: number;
  readonly product_priority_2?: number;
  readonly product_priority_3?: number;
  readonly product_priority_4?: number;
  readonly sanitized_images?: ReadonlyArray<string>;
  readonly start_date?: string;
  readonly start_time?: number;
  readonly tags?: ReadonlyArray<string>;
  readonly term_length?: number;
  readonly term_qualifier?: string;
  readonly title?: string;
  readonly transmission?: string;
  readonly trim?: string;
  readonly unit_price?: Readonly<Record<string, unknown>>;
  readonly url?: string;
  readonly vehicle_offer_id?: string;
  readonly visibility?: VehicleOfferVisibility;
  readonly year?: number;
}

export type VehicleOfferImageFetchStatus = "DIRECT_UPLOAD" | "FETCHED" | "FETCH_FAILED" | "NO_STATUS" | "OUTDATED" | "PARTIAL_FETCH";

export type VehicleOfferVisibility = "PUBLISHED" | "STAGING";

export type VehicleStateOfVehicle = "CPO" | "NEW" | "USED";

export type VehicleTransmission = "AUTOMATIC" | "MANUAL" | "NONE" | "OTHER";

export type VehicleVehicleType = "BOAT" | "CAR_TRUCK" | "COMMERCIAL" | "MOTORCYCLE" | "OTHER" | "POWERSPORT" | "RV_CAMPER" | "TRAILER";

export type VehicleVisibility = "PUBLISHED" | "STAGING";

export interface VideoCopyrightCheckStatusFields {
  readonly matches_found?: boolean;
  readonly status?: string;
}

export interface VideoCopyrightConditionGroupFields {
  readonly action?: string;
  readonly conditions?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly validity_status?: string;
}

export type VideoCopyrightContentCategory = "episode" | "movie" | "web";

export interface VideoCopyrightFields {
  readonly content_category?: string;
  readonly content_protect_protection_disabled_reason?: string;
  readonly copyright_content_id?: string;
  readonly creator?: UserFields;
  readonly disable_protection_by_content_protect_status?: boolean;
  readonly excluded_ownership_segments?: ReadonlyArray<VideoCopyrightSegmentFields>;
  readonly id?: string;
  readonly in_conflict?: boolean;
  readonly monitoring_status?: string;
  readonly monitoring_type?: string;
  readonly ownership_countries?: VideoCopyrightGeoGateFields;
  readonly reference_file?: CopyrightReferenceContainerFields;
  readonly reference_file_disabled?: boolean;
  readonly reference_file_disabled_by_ops?: boolean;
  readonly reference_owner_id?: string;
  readonly rule_ids?: ReadonlyArray<VideoCopyrightRuleFields>;
  readonly tags?: ReadonlyArray<string>;
  readonly whitelisted_ids?: ReadonlyArray<string>;
}

export interface VideoCopyrightGeoGateFields {
  readonly excluded_countries?: ReadonlyArray<string>;
  readonly included_countries?: ReadonlyArray<string>;
}

export type VideoCopyrightMatchAction = "BLOCK" | "CLAIM_AD_EARNINGS" | "MANUAL_REVIEW" | "MONITOR" | "REQUEST_TAKEDOWN";

export type VideoCopyrightMatchActionReason = "ARTICLE_17_PREFLAGGING" | "ARTIST_OBJECTION" | "OBJECTIONABLE_CONTENT" | "PREMIUM_MUSIC_VIDEO" | "PRERELEASE_CONTENT" | "PRODUCT_PARAMETERS" | "RESTRICTED_CONTENT" | "UNAUTHORIZED_COMMERCIAL_USE";

export interface VideoCopyrightMatchFields {
  readonly created_date?: string;
  readonly id?: string;
  readonly last_modified_user?: UserFields;
  readonly match_data?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly match_status?: string;
  readonly notes?: string;
  readonly permalink?: string;
  readonly policy_eval_modify_reasons?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly ugc_content_format?: string;
}

export type VideoCopyrightMatchMatchContentType = "AUDIO_ONLY" | "VIDEO_AND_AUDIO" | "VIDEO_ONLY";

export type VideoCopyrightMonitoringType = "AUDIO_ONLY" | "VIDEO_AND_AUDIO" | "VIDEO_ONLY";

export interface VideoCopyrightRuleFields {
  readonly condition_groups?: ReadonlyArray<VideoCopyrightConditionGroupFields>;
  readonly copyrights?: ReadonlyArray<string>;
  readonly created_date?: string;
  readonly creator?: UserFields;
  readonly id?: string;
  readonly is_in_migration?: boolean;
  readonly name?: string;
  readonly validity_status?: string;
}

export type VideoCopyrightRuleSource = "MATCH_SETTINGS_DIALOG" | "RULES_SELECTOR" | "RULES_TAB";

export interface VideoCopyrightSegmentFields {
  readonly duration_in_sec?: number;
  readonly media_type?: string;
  readonly start_time_in_sec?: number;
}

export interface VideoGroupFields {
  readonly created_time?: string;
  readonly description?: string;
  readonly disable_reason?: string;
  readonly id?: string;
  readonly ig_profile_ids?: ReadonlyArray<string>;
  readonly is_disabled?: boolean;
  readonly is_fb_video_group?: boolean;
  readonly last_used_time?: string;
  readonly length?: number;
  readonly name?: string;
  readonly page_id?: string;
  readonly page_ids?: ReadonlyArray<string>;
  readonly picture?: string;
  readonly placements?: ReadonlyArray<string>;
  readonly video_group_types?: ReadonlyArray<string>;
  readonly videos?: ReadonlyArray<string>;
  readonly views?: number;
}

export interface VideoListFields {
  readonly creation_time?: string;
  readonly description?: string;
  readonly id?: string;
  readonly last_modified?: string;
  readonly owner?: Readonly<Record<string, unknown>>;
  readonly season_number?: number;
  readonly thumbnail?: string;
  readonly title?: string;
  readonly videos_count?: number;
}

export type VideoPollAction = "ATTACH_TO_VIDEO" | "CLOSE" | "DELETE_POLL" | "SHOW_RESULTS" | "SHOW_VOTING";

export interface VideoPollFields {
  readonly close_after_voting?: boolean;
  readonly default_open?: boolean;
  readonly id?: string;
  readonly question?: string;
  readonly show_gradient?: boolean;
  readonly show_results?: boolean;
  readonly status?: VideoPollStatus;
}

export type VideoPollStatus = "closed" | "results_open" | "voting_open";

export interface VideoStatsFields {
  readonly aggregate?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly error?: string;
  readonly metadata?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly time_series?: ReadonlyArray<Readonly<Record<string, ReadonlyArray<Readonly<Record<string, unknown>>>>>>;
  readonly totals?: ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>;
  readonly x_axis_breakdown?: ReadonlyArray<ReadonlyArray<Readonly<Record<string, Readonly<Record<string, unknown>>>>>>;
}

export interface VideoStatusErrorFields {
  readonly code?: number;
  readonly message?: string;
}

export interface VideoStatusFields {
  readonly copyright_check_status?: VideoCopyrightCheckStatusFields;
  readonly processing_phase?: VideoStatusProcessingPhaseFields;
  readonly processing_progress?: number;
  readonly publishing_phase?: VideoStatusPublishingPhaseFields;
  readonly uploading_phase?: VideoStatusUploadingPhaseFields;
  readonly video_status?: string;
}

export interface VideoStatusProcessingPhaseFields {
  readonly errors?: ReadonlyArray<VideoStatusErrorFields>;
  readonly status?: string;
}

export interface VideoStatusPublishingPhaseFields {
  readonly errors?: ReadonlyArray<VideoStatusErrorFields>;
  readonly publish_status?: string;
  readonly publish_time?: string;
  readonly status?: string;
}

export interface VideoStatusUploadingPhaseFields {
  readonly bytes_transferred?: number;
  readonly errors?: ReadonlyArray<VideoStatusErrorFields>;
  readonly source_file_size?: number;
  readonly status?: string;
}

export interface VideoTextQuestionFields {
  readonly id?: string;
  readonly question_target_id?: string;
  readonly question_text?: string;
  readonly status?: string;
}

export interface VideoThumbnailFields {
  readonly height?: number;
  readonly id?: string;
  readonly is_preferred?: boolean;
  readonly name?: string;
  readonly scale?: number;
  readonly uri?: string;
  readonly width?: number;
}

export interface VideoUploadLimitsFields {
  readonly length?: number;
  readonly size?: number;
}

export interface VoipInfoFields {
  readonly has_mobile_app?: boolean;
  readonly has_permission?: boolean;
  readonly is_callable?: boolean;
  readonly is_callable_webrtc?: boolean;
  readonly is_pushable?: boolean;
  readonly reason_code?: number;
  readonly reason_description?: string;
}

export interface WearableDevicePublicKeyFields {
  readonly base64_encoded_public_key?: string;
  readonly creation_time_on_device?: string;
  readonly device_uuid?: string;
  readonly id?: string;
  readonly key_type?: string;
  readonly owner_id?: string;
  readonly product_use_case?: string;
  readonly version?: string;
}

export interface WebAppLinkFields {
  readonly should_fallback?: boolean;
  readonly url?: string;
}

export interface WebPublisherFields {
  readonly domain_url?: string;
  readonly id?: string;
  readonly publisher_name?: string;
}

export interface WebsiteCreativeAssetSourceFields {
  readonly id?: string;
  readonly source_url?: string;
}

export interface WebsiteCreativeAssetSuggestionsFields {
  readonly ad_account_id?: string;
  readonly extraction_status?: string;
  readonly id?: string;
  readonly link_url?: string;
}

export interface WebsiteCreativeInfoFields {
  readonly id?: string;
  readonly image_urls?: ReadonlyArray<string>;
  readonly link_url?: string;
}

export type WhatsAppBusinessAccountBusinessVerificationStatus = "expired" | "failed" | "ineligible" | "not_verified" | "pending" | "pending_need_more_info" | "pending_submission" | "rejected" | "revoked" | "verified";

export type WhatsAppBusinessAccountCategory = "AUTHENTICATION" | "MARKETING" | "UTILITY";

export type WhatsAppBusinessAccountDisplayFormat = "ORDER_DETAILS";

export interface WhatsAppBusinessAccountFields {
  readonly account_review_status?: string;
  readonly analytics?: Readonly<Record<string, unknown>>;
  readonly auth_international_rate_eligibility?: Readonly<Record<string, unknown>>;
  readonly business_verification_status?: WhatsAppBusinessAccountBusinessVerificationStatus;
  readonly country?: string;
  readonly creation_time?: number;
  readonly currency?: string;
  readonly disable_marketing_messages_on_cloud_api?: boolean;
  readonly health_status?: WhatsAppBusinessHealthStatusForMessageSendFields;
  readonly id?: string;
  readonly is_enabled_for_insights?: boolean;
  readonly is_shared_with_partners?: boolean;
  readonly linked_commerce_account?: CommerceMerchantSettingsFields;
  readonly marketing_messages_ad_account?: Readonly<Record<string, unknown>>;
  readonly marketing_messages_lite_api_status?: string;
  readonly marketing_messages_onboarding_status?: string;
  readonly message_template_namespace?: string;
  readonly name?: string;
  readonly on_behalf_of_business_info?: Readonly<Record<string, unknown>>;
  readonly owner_business?: BusinessFields;
  readonly owner_business_info?: Readonly<Record<string, unknown>>;
  readonly ownership_type?: string;
  readonly primary_business_location?: string;
  readonly primary_funding_id?: string;
  readonly purchase_order_number?: string;
  readonly status?: string;
  readonly template_auto_archival_enabled?: boolean;
  readonly timezone_id?: string;
  readonly whatsapp_business_manager_messaging_limit?: WhatsAppBusinessAccountWhatsappBusinessManagerMessagingLimit;
  readonly whatsapp_manager_marketing_messages_max_price_enroll_status?: string;
}

export type WhatsAppBusinessAccountParameterFormat = "NAMED" | "POSITIONAL";

export type WhatsAppBusinessAccountProviderName = "BILLDESK" | "PAYU" | "RAZORPAY" | "UPI_VPA" | "ZAAKPAY";

export type WhatsAppBusinessAccountSendType = "CAMPAIGN" | "DIRECT" | "TRIGGER";

export type WhatsAppBusinessAccountSubCategory = "ORDER_DETAILS" | "ORDER_STATUS" | "RICH_ORDER_STATUS";

export type WhatsAppBusinessAccountTasks = "DEVELOP" | "MANAGE" | "MANAGE_EXTENSIONS" | "MANAGE_PHONE" | "MANAGE_PHONE_ASSETS" | "MANAGE_TEMPLATES" | "MESSAGING" | "VIEW_COST" | "VIEW_PHONE_ASSETS" | "VIEW_TEMPLATES";

export type WhatsAppBusinessAccountType = "INTERACTIVE" | "TEXT";

export type WhatsAppBusinessAccountWhatsappBusinessManagerMessagingLimit = "TIER_100K" | "TIER_10K" | "TIER_250" | "TIER_2K" | "TIER_50" | "TIER_UNLIMITED" | "UNTIERED";

export type WhatsAppBusinessAccountWhatsappManagerMarketingMessagesMaxPriceEnrollStatus = "OPT_IN" | "OPT_OUT";

export interface WhatsAppBusinessHealthStatusFields {
  readonly additional_info?: ReadonlyArray<string>;
  readonly can_receive_call_sip?: string;
  readonly can_send_message?: string;
  readonly entity_type?: string;
  readonly errors?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly id?: string;
}

export interface WhatsAppBusinessHealthStatusForMessageSendFields {
  readonly can_send_message?: string;
  readonly entities?: ReadonlyArray<WhatsAppBusinessHealthStatusFields>;
}

export interface WhatsAppBusinessPartnerClientVerificationSubmissionFields {
  readonly client_business_id?: string;
  readonly id?: string;
  readonly rejection_reasons?: ReadonlyArray<WhatsAppBusinessPartnerClientVerificationSubmissionRejectionReasons>;
  readonly submitted_info?: Readonly<Record<string, unknown>>;
  readonly submitted_time?: string;
  readonly update_time?: string;
  readonly verification_status?: WhatsAppBusinessPartnerClientVerificationSubmissionVerificationStatus;
}

export type WhatsAppBusinessPartnerClientVerificationSubmissionRejectionReasons = "ADDRESS_NOT_MATCHING" | "BUSINESS_NOT_ELIGIBLE" | "LEGAL_NAME_NOT_FOUND_IN_DOCUMENTS" | "LEGAL_NAME_NOT_MATCHING" | "MALFORMED_DOCUMENTS" | "NONE" | "WEBSITE_NOT_MATCHING";

export type WhatsAppBusinessPartnerClientVerificationSubmissionVerificationStatus = "APPROVED" | "DISCARDED" | "FAILED" | "PENDING" | "REVOKED";

export type WhatsAppBusinessPreVerifiedPhoneNumberCodeVerificationStatus = "EXPIRED" | "NOT_VERIFIED" | "VERIFIED";

export interface WhatsAppBusinessPreVerifiedPhoneNumberFields {
  readonly code_verification_status?: WhatsAppBusinessPreVerifiedPhoneNumberCodeVerificationStatus;
  readonly code_verification_time?: string;
  readonly id?: string;
  readonly owner_business?: BusinessFields;
  readonly phone_number?: string;
  readonly verification_expiry_time?: string;
}

export interface WhatsAppBusinessProfileFields {
  readonly id?: string;
  readonly name_verification?: Readonly<Record<string, unknown>>;
  readonly whatsapp_business_api_data?: Readonly<Record<string, unknown>>;
}

export interface WhatsAppPaymentCapabilitiesFields {
  readonly is_enabled?: boolean;
  readonly payment_capability_details?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface WhatsappSubscribedAppsInfoFields {
  readonly page_whatsapp_number?: string;
  readonly subscribed_apps?: ReadonlyArray<Readonly<Record<string, unknown>>>;
}

export interface WhitehatFBDLRunFields {
  readonly creation_time?: string;
  readonly id?: string;
  readonly is_pinned?: boolean;
  readonly note?: string;
  readonly result?: ReadonlyArray<Readonly<Record<string, string>>>;
  readonly run_code?: string;
  readonly status?: string;
  readonly user_type?: string;
}

export interface WifiInformationFields {
  readonly id?: string;
  readonly name?: string;
  readonly network_access_type?: string;
}

export interface WindowsAppLinkFields {
  readonly app_id?: string;
  readonly app_name?: string;
  readonly package_family_name?: string;
  readonly url?: string;
}

export interface WindowsPhoneAppLinkFields {
  readonly app_id?: string;
  readonly app_name?: string;
  readonly url?: string;
}

export interface WithAsset3DFields {
  readonly id?: string;
}

export interface WITUserFields {
  readonly access_token?: string;
  readonly id?: string;
  readonly name?: string;
}

export interface WoodhengePurchasedPAYGReceiptFields {
  readonly id?: string;
  readonly number_of_subscriptions_purchased?: number;
  readonly purchase_time?: string;
  readonly user?: UserFields;
}

export interface WoodhengeSupporterFields {
  readonly creation_time?: string;
  readonly id?: string;
  readonly is_gifted_subscription?: boolean;
  readonly most_recent_subscription_time?: string;
  readonly number_of_months_subscribed?: number;
  readonly user?: UserFields;
}

export interface WorkAccessCodeFields {
  readonly code?: string;
  readonly expiration_time?: string;
}

export interface WorkExperienceFields {
  readonly description?: string;
  readonly employer?: PageFields;
  readonly end_date?: string;
  readonly from?: UserFields;
  readonly id?: string;
  readonly location?: PageFields;
  readonly position?: PageFields;
  readonly projects?: ReadonlyArray<Readonly<Record<string, unknown>>>;
  readonly start_date?: string;
  readonly with?: ReadonlyArray<UserFields>;
}

export interface WorkSkillFields {
  readonly id?: string;
  readonly name?: string;
}

export interface WorkUserBadgesFields {
  readonly category?: string;
  readonly description?: string;
  readonly icon?: string;
  readonly id?: string;
  readonly name?: string;
}

export interface WorkUserFrontlineFields {
  readonly has_access?: boolean;
  readonly is_frontline?: boolean;
}
