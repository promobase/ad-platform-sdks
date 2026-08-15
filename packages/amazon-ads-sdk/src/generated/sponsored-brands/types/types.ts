// This file is generated. Do not edit by hand.

export type AcceptHeader = "application/vnd.sbAdCreativeResource.v4+json" | "application/vnd.sbCreativeImageRecommendationResource.v4+json" | "application/vnd.sbCreativeRecommendationResource.v4+json" | string;

export type AccessDeniedErrorCode = "ACCESS_DENIED" | string;

export interface AccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface Ad {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline3;
  readonly extendedData?: Inline7;
  readonly landingPage?: Inline8;
  readonly name?: string;
  readonly state: string;
}

export interface AdExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface AdFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline11>;
  readonly index: number;
}

export interface AdGroup {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline14;
  readonly name: string;
  readonly state: string;
}

export interface AdGroupExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface AdGroupFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline17>;
  readonly index: number;
}

export interface AdGroupMutationError {
  readonly errorType: string;
  readonly errorValue: Inline22;
}

export interface AdGroupMutationErrorSelector {
  readonly biddingError?: Inline27;
  readonly dateError?: Inline28;
  readonly otherError?: Inline29;
  readonly rangeError?: Inline30;
}

export type AdGroupServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;

export interface AdGroupSuccessResponseItem {
  readonly adGroup?: Inline33;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface AdMutationError {
  readonly errorType: string;
  readonly errorValue: Inline35;
}

export interface AdMutationErrorSelector {
  readonly otherError?: Inline38;
  readonly rangeError?: Inline39;
}

export type AdServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;

export interface AdSuccessResponseItem {
  readonly ad?: Inline42;
  readonly adId?: string;
  readonly index: number;
}

export interface AssetCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface AssociatedBudgetRuleResponse {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface AssociatedCampaign {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}

export interface AssociateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline1046>;
}

export interface AssociateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline52>;
}

export interface AssociateSponsoredBrandsOptimizationRulesResponse {

}

export interface AssociateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRuleAssociations: Inline54;
}

export interface AudienceSegment {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}

export type AudienceSegmentType = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC" | string;

export interface BidAdjustmentByPlacement {
  readonly percentage?: number;
  readonly placement?: string;
}

export interface BidAdjustmentByShopperSegment {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Bidding {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline61>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline62>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline63>;
}

export interface BiddingError {
  readonly cause: Inline65;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export type BidOptimizationStrategy = "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS" | string;

export interface BillingError {
  readonly cause: Inline68;
  readonly message: string;
  readonly reason: string;
}

export interface BrandCollectionLandingPage {
  readonly pageType?: string;
  readonly url?: string;
}

export type BrandCollectionLandingPageType = "PRODUCT_LIST" | "STORE" | string;

export interface BrandLogoCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface BrandVideoCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline73;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline74;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export type BudgetChangeType = "PERCENT" | string;

export interface BudgetError {
  readonly cause: Inline77;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface budgetIncreaseBy {
  readonly type: string;
  readonly value: number;
}

export interface BudgetRecommendation {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline80;
  readonly suggestedBudget: number;
}

export interface BudgetRecommendationError {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}

export interface BudgetRuleError {
  readonly code?: string;
  readonly details?: string;
}

export interface BudgetRuleResponse {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export type BudgetType = "DAILY" | "LIFETIME" | string;

export interface BudgetUsageCampaign {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}

export interface BudgetUsageCampaignBatchError {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}

export interface BudgetUsageCampaignRequest {
  readonly campaignIds?: ReadonlyArray<string>;
}

export interface BudgetUsageCampaignResponse {
  readonly error?: ReadonlyArray<Inline89>;
  readonly success?: ReadonlyArray<Inline90>;
}

export interface BudgetUsageError {
  readonly code?: string;
  readonly details?: string;
}

export interface BulkAdGroupOperationResponse {
  readonly error?: ReadonlyArray<Inline93>;
  readonly success?: ReadonlyArray<Inline97>;
}

export interface BulkAdOperationResponse {
  readonly error?: ReadonlyArray<Inline99>;
  readonly success?: ReadonlyArray<Inline101>;
}

export interface BulkAssociationsOptimizationRuleResponse {
  readonly error?: ReadonlyArray<Inline108>;
  readonly success?: ReadonlyArray<Inline109>;
}

export interface BulkCampaignOperationResponse {
  readonly error?: ReadonlyArray<Inline111>;
  readonly success?: ReadonlyArray<Inline117>;
}

export interface BulkCreateOptimizationRuleOperationResponse {
  readonly error?: ReadonlyArray<Inline124>;
  readonly success?: ReadonlyArray<Inline125>;
}

export interface BulkCreativeResponse {
  readonly error?: ReadonlyArray<Inline127>;
  readonly success?: ReadonlyArray<Inline129>;
}

export interface BulkDisassociationsOptimizationRuleResponse {
  readonly error?: ReadonlyArray<Inline131>;
  readonly success?: ReadonlyArray<Inline132>;
}

export interface BulkUpdateOptimizationRuleOperationResponse {
  readonly error?: ReadonlyArray<Inline134>;
  readonly success?: ReadonlyArray<Inline135>;
}

export interface Campaign {
  readonly bidding?: Inline137;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline140;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline141;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline142;
  readonly targetedPGDealId?: string;
}

export interface CampaignExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface CampaignMigrationFinalStatus {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}

export interface CampaignMutationError {
  readonly errorType: string;
  readonly errorValue: Inline146;
}

export interface CampaignMutationErrorSelector {
  readonly biddingError?: Inline153;
  readonly billingError?: Inline154;
  readonly budgetError?: Inline155;
  readonly dateError?: Inline156;
  readonly otherError?: Inline157;
  readonly rangeError?: Inline158;
}

export interface CampaignMutationFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline160>;
  readonly index: number;
}

export interface CampaignMutationSuccessResponseItem {
  readonly campaign?: Inline167;
  readonly campaignId?: string;
  readonly index: number;
}

export type CampaignServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;

export type CollectionType = "BUNDLE" | "THEMED" | string;

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;

export type ConflictStateErrorCode = "CONFLICT_STATE" | string;

export interface ConflictStateExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export type CostControlMetric = "COST_PER_CLICK" | string;

export interface CreateAdGroup {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}

export interface CreateAssociatedBudgetRulesForSBCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesForSBCampaignsResponse {

}

export interface CreateAssociatedBudgetRulesRequest {
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline182>;
}

export interface CreateAutoCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline184;
  readonly name: string;
  readonly state: string;
}

export interface CreateAutoCollectionCreative {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline186;
  readonly brandName: string;
}

export interface CreateBrandVideoAd {
  readonly adGroupId: string;
  readonly creative: Inline188;
  readonly landingPage: Inline189;
  readonly name: string;
  readonly state: string;
}

export interface CreateBrandVideoCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline191;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface CreateBrandVideoCreativeParams {
  readonly adId: string;
  readonly creative: Inline896;
}

export interface CreateBrandVideoCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline193;
}

export interface CreateBrandVideoCreativeResponse {
  readonly data: Inline899;
}

export interface CreateBrandVideoCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface CreateBudgetRulesForSBCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline947>;
}

export interface CreateBudgetRulesForSBCampaignsResponse {

}

export interface CreateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline197>;
}

export interface CreateCampaign {
  readonly bidding?: Inline199;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly goal?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline202;
  readonly targetedPGDealId?: string;
}

export interface CreateExtendedProductCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline204;
  readonly landingPage: Inline206;
  readonly name: string;
  readonly state: string;
}

export interface CreateExtendedProductCollectionCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline208;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline209>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
}

export interface CreateExtendedProductCollectionCreativeParams {
  readonly adId: string;
  readonly creative: Inline923;
}

export interface CreateExtendedProductCollectionCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline211;
}

export interface CreateExtendedProductCollectionCreativeResponse {
  readonly data: Inline927;
}

export interface CreateExtendedProductCollectionCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface CreateManualCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline216;
  readonly name: string;
  readonly state: string;
}

export interface CreateManualCollectionCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline219;
  readonly brandName: string;
  readonly landingPage?: Inline220;
  readonly title?: string;
}

export interface CreateOptimizationRule {
  readonly conditions?: ReadonlyArray<Inline222>;
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface CreateOptimizationRuleSuccessResponseItem {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline224;
  readonly optimizationRuleId: string;
}

export type CreateOrUpdateEntityState = "ENABLED" | "PAUSED" | "PROPOSED" | string;

export interface CreateProductCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline227;
  readonly landingPage: Inline229;
  readonly name: string;
  readonly state: string;
}

export interface CreateProductCollectionCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline231;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline232;
  readonly headline?: string;
}

export interface CreateProductCollectionCreativeParams {
  readonly adId: string;
  readonly creative: Inline916;
}

export interface CreateProductCollectionCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline234;
}

export interface CreateProductCollectionCreativeResponse {
  readonly data: Inline919;
}

export interface CreateProductCollectionCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface CreateSBBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline238>;
}

export interface CreateSponsoredBrandsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline1077>;
}

export interface CreateSponsoredBrandsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline244>;
}

export interface CreateSponsoredBrandsAdGroupsResponse {

}

export interface CreateSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline246;
}

export interface CreateSponsoredBrandsAutoCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1104>;
}

export interface CreateSponsoredBrandsAutoCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline252>;
}

export interface CreateSponsoredBrandsAutoCollectionAdsResponse {

}

export interface CreateSponsoredBrandsAutoCollectionAdsResponseContent {
  readonly ads?: Inline254;
}

export interface CreateSponsoredBrandsBrandVideoAdsParams {
  readonly ads: ReadonlyArray<Inline1108>;
}

export interface CreateSponsoredBrandsBrandVideoAdsRequestContent {
  readonly ads: ReadonlyArray<Inline263>;
}

export interface CreateSponsoredBrandsBrandVideoAdsResponse {

}

export interface CreateSponsoredBrandsBrandVideoAdsResponseContent {
  readonly ads?: Inline266;
}

export interface CreateSponsoredBrandsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline1170>;
}

export interface CreateSponsoredBrandsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline275>;
}

export interface CreateSponsoredBrandsCampaignsResponse {

}

export interface CreateSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline280;
}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1150>;
}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline293>;
}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponse {

}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent {
  readonly ads?: Inline297;
}

export interface CreateSponsoredBrandsManualCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1136>;
}

export interface CreateSponsoredBrandsManualCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline306>;
}

export interface CreateSponsoredBrandsManualCollectionAdsResponse {

}

export interface CreateSponsoredBrandsManualCollectionAdsResponseContent {
  readonly ads?: Inline309;
}

export interface CreateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline1038>;
}

export interface CreateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRules: ReadonlyArray<Inline318>;
}

export interface CreateSponsoredBrandsOptimizationRulesResponse {

}

export interface CreateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRules: Inline320;
}

export interface CreateSponsoredBrandsProductCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1142>;
}

export interface CreateSponsoredBrandsProductCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline323>;
}

export interface CreateSponsoredBrandsProductCollectionAdsResponse {

}

export interface CreateSponsoredBrandsProductCollectionAdsResponseContent {
  readonly ads?: Inline327;
}

export interface CreateSponsoredBrandStoreSpotlightAdsParams {
  readonly ads: ReadonlyArray<Inline1158>;
}

export interface CreateSponsoredBrandStoreSpotlightAdsRequestContent {
  readonly ads: ReadonlyArray<Inline336>;
}

export interface CreateSponsoredBrandStoreSpotlightAdsResponse {

}

export interface CreateSponsoredBrandStoreSpotlightAdsResponseContent {
  readonly ads?: Inline340;
}

export interface CreateSponsoredBrandsVideoAdsParams {
  readonly ads: ReadonlyArray<Inline1166>;
}

export interface CreateSponsoredBrandsVideoAdsRequestContent {
  readonly ads: ReadonlyArray<Inline349>;
}

export interface CreateSponsoredBrandsVideoAdsResponse {

}

export interface CreateSponsoredBrandsVideoAdsResponseContent {
  readonly ads?: Inline351;
}

export interface CreateStoreSpotlightAd {
  readonly adGroupId: string;
  readonly creative: Inline360;
  readonly landingPage: Inline362;
  readonly name: string;
  readonly state: string;
}

export interface CreateStoreSpotlightCreative {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline364;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline365>;
}

export interface CreateStoreSpotlightCreativeParams {
  readonly adId: string;
  readonly creative: Inline932;
}

export interface CreateStoreSpotlightCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline367;
}

export interface CreateStoreSpotlightCreativeResponse {
  readonly data: Inline936;
}

export interface CreateStoreSpotlightCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface CreateVideoAd {
  readonly adGroupId: string;
  readonly creative: Inline372;
  readonly name: string;
  readonly state: string;
}

export interface CreateVideoCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline374;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface CreateVideoCreativeParams {
  readonly adId: string;
  readonly creative: Inline941;
}

export interface CreateVideoCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline376;
}

export interface CreateVideoCreativeResponse {
  readonly data: Inline943;
}

export interface CreateVideoCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Creative {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline379;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly creativeStatus?: string;
  readonly creativeVersion?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline380;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline381>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline382>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface CreativeFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline384>;
  readonly index: number;
}

export interface CreativeLandingPage {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}

export type CreativeLandingPageType = "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN" | string;

export interface CreativeLandingPageV2 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface CreativeMutationError {
  readonly errorType: string;
  readonly errorValue: Inline390;
}

export interface CreativeMutationErrorSelector {
  readonly otherError?: Inline393;
  readonly rangeError?: Inline394;
}

export interface CreativeProperties {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline396;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline397;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline398>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline399;
  readonly layout?: string;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline400>;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export type CreativePropertyToOptimize = "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE" | string;

export type CreativeStatus = "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION" | string;

export interface CreativeSuccessResponseItem {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}

export type CreativeType = "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;

export interface CustomImage {
  readonly assetId?: string;
  readonly crop?: Inline406;
  readonly url?: string;
}

export interface CustomImageCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface DateError {
  readonly cause: Inline409;
  readonly message: string;
  readonly reason: string;
}

export interface DateRangeTypeRuleDuration {
  readonly endDate?: string;
  readonly startDate: string;
}

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;

export interface DeleteSponsoredBrandsAdGroupsParams {
  readonly adGroupIdFilter?: Inline1085;
}

export interface DeleteSponsoredBrandsAdGroupsRequestContent {
  readonly adGroupIdFilter?: Inline413;
}

export interface DeleteSponsoredBrandsAdGroupsResponse {

}

export interface DeleteSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline415;
}

export interface DeleteSponsoredBrandsAdsParams {
  readonly adIdFilter?: Inline1114;
}

export interface DeleteSponsoredBrandsAdsRequestContent {
  readonly adIdFilter?: Inline421;
}

export interface DeleteSponsoredBrandsAdsResponse {

}

export interface DeleteSponsoredBrandsAdsResponseContent {
  readonly ads?: Inline423;
}

export interface DeleteSponsoredBrandsCampaignsParams {
  readonly campaignIdFilter?: Inline1190;
}

export interface DeleteSponsoredBrandsCampaignsRequestContent {
  readonly campaignIdFilter?: Inline432;
}

export interface DeleteSponsoredBrandsCampaignsResponse {

}

export interface DeleteSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline434;
}

export interface DisassociateAssociatedBudgetRuleForSBCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}

export interface DisassociateAssociatedBudgetRuleForSBCampaignsResponse {
  readonly data: Inline991;
}

export interface DisassociateAssociatedBudgetRuleResponse {

}

export interface DisassociateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline1050>;
}

export interface DisassociateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline448>;
}

export interface DisassociateSponsoredBrandsOptimizationRulesResponse {

}

export interface DisassociateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRuleDisassociations: Inline450;
}

export interface EntityFilter {
  readonly entityId?: string;
  readonly entityType?: string;
}

export type EntityState = "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED" | string;

export interface EntityStateFilter {
  readonly include?: ReadonlyArray<string>;
}

export interface ErrorCause {
  readonly location: string;
  readonly trigger?: string;
}

export interface EventTypeRuleDuration {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface ExtendedProductCollectionCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline458;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline459>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline460;
}

export interface GetBudgetRecommendationsParams {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface GetBudgetRecommendationsRequestContent {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface GetBudgetRecommendationsResponse {

}

export interface GetBudgetRecommendationsResponseContent {
  readonly error: ReadonlyArray<Inline463>;
  readonly success: ReadonlyArray<Inline464>;
}

export interface GetBudgetRuleByRuleIdForSBCampaignsParams {
  readonly budgetRuleId: string;
}

export interface GetBudgetRuleByRuleIdForSBCampaignsResponse {
  readonly data: Inline972;
}

export interface GetCampaignsAssociatedWithSBBudgetRuleParams {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetCampaignsAssociatedWithSBBudgetRuleResponse {
  readonly data: Inline979;
}

export interface GetHeadlineRecommendationsParams {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline1025>;
}

export interface GetHeadlineRecommendationsResponse {
  readonly data: Inline1027;
}

export interface GetKeywordRecommendationsParams {
  readonly body: Inline1030 | Inline1031;
}

export interface GetKeywordRecommendationsResponse {

}

export interface GetSBBudgetRuleResponse {
  readonly budgetRule?: Inline466;
}

export interface GetSBBudgetRulesForAdvertiserParams {
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetSBBudgetRulesForAdvertiserResponse {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline472>;
  readonly nextToken?: string;
}

export interface GoalTypeFilter {
  readonly include?: ReadonlyArray<string>;
}

export interface HeadlineSuggestionRequest {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline479>;
}

export interface HeadlineSuggestionResponse {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline481>;
}

export interface Inline100 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline100;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1001 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1001>;
}

export interface Inline1003 {
  readonly insights?: ReadonlyArray<Inline1003>;
  readonly nextToken?: string;
}

export interface Inline1005 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1005>;
}

export interface Inline1006 {
  readonly adGroups: ReadonlyArray<Inline1006>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1012>;
  readonly startDate?: string;
}

export interface Inline1007 {
  readonly landingPageUrl?: string;
}

export interface Inline1008 {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline1009 {
  readonly expressions?: ReadonlyArray<Inline1009>;
}

export interface Inline101 {
  readonly ad?: Inline101;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline1010 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1010>;
}

export interface Inline1011 {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface Inline1012 {
  readonly attributeName?: string;
  readonly criteria?: Inline1012;
}

export interface Inline1015 {
  readonly adGroups: ReadonlyArray<Inline1015>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1021>;
  readonly startDate?: string;
}

export interface Inline1016 {
  readonly landingPageUrl?: string;
}

export interface Inline1017 {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline1018 {
  readonly expressions?: ReadonlyArray<Inline1018>;
}

export interface Inline1019 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1019>;
}

export interface Inline102 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1020 {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface Inline1021 {
  readonly attributeName?: string;
  readonly criteria?: Inline1021;
}

export interface Inline1023 {
  readonly brands?: ReadonlyArray<Inline1023>;
  readonly nextToken?: string;
}

export interface Inline1025 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}

export interface Inline1027 {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline1027>;
}

export interface Inline1029 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}

export interface Inline103 {
  readonly assetId?: string;
  readonly crop?: Inline103;
  readonly url?: string;
}

export interface Inline1030 {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}

export interface Inline1031 {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}

export interface Inline1034 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1037 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1038 {
  readonly conditions?: ReadonlyArray<Inline1038>;
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline104 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline1041 {
  readonly conditions?: ReadonlyArray<Inline1041>;
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline1042 {
  readonly conditions?: ReadonlyArray<Inline1042>;
  readonly optimizationRuleId?: string;
}

export interface Inline1045 {
  readonly conditions?: ReadonlyArray<Inline1045>;
  readonly optimizationRuleId?: string;
}

export interface Inline1046 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline1049 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline105 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline1050 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline1053 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline1054 {
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline1055 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1057 {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline1057>;
  readonly totalCount?: number;
}

export interface Inline1059 {
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline106 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1060 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1062 {
  readonly categoryTree?: ReadonlyArray<Inline1062>;
  readonly nextToken?: string;
}

export interface Inline1063 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1066 {
  readonly ageRanges?: ReadonlyArray<Inline1066>;
  readonly brands?: ReadonlyArray<Inline1067>;
  readonly genres?: ReadonlyArray<Inline1068>;
  readonly nextToken?: string;
}

export interface Inline1067 {
  readonly brandRefinementId: string;
  readonly name?: string;
}

export interface Inline1068 {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline1070 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1071 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1073 {
  readonly asinCounts?: Inline1073;
}

export interface Inline1075 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1076 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1077 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}

export interface Inline108 {
  readonly errors?: ReadonlyArray<Inline108>;
  readonly index: number;
}

export interface Inline1080 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}

export interface Inline1081 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline1084 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline1085 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1088 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1089 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline109 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}

export interface Inline1090 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1091 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1092 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1094 {
  readonly adGroups?: ReadonlyArray<Inline1094>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline1096 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1097 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1098 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1099 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline11 {
  readonly errorType: string;
  readonly errorValue: Inline11;
}

export interface Inline1100 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline1103 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline1104 {
  readonly adGroupId: string;
  readonly creative: Inline1104;
  readonly name: string;
  readonly state: string;
}

export interface Inline1107 {
  readonly adGroupId: string;
  readonly creative: Inline1107;
  readonly name: string;
  readonly state: string;
}

export interface Inline1108 {
  readonly adGroupId: string;
  readonly creative: Inline1108;
  readonly landingPage: Inline1109;
  readonly name: string;
  readonly state: string;
}

export interface Inline1109 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline111 {
  readonly errors?: ReadonlyArray<Inline111>;
  readonly index: number;
}

export interface Inline1112 {
  readonly adGroupId: string;
  readonly creative: Inline1112;
  readonly landingPage: Inline1113;
  readonly name: string;
  readonly state: string;
}

export interface Inline1113 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1114 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1117 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1118 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1119 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline112 {
  readonly cause: Inline112;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1120 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1121 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1122 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1124 {
  readonly ads?: ReadonlyArray<Inline1124>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline1125 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1126 {
  readonly assetId?: string;
  readonly crop?: Inline1126;
  readonly url?: string;
}

export interface Inline1127 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline1128 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline1129 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline113 {
  readonly cause: Inline113;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1131 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1132 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1133 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1134 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1135 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1136 {
  readonly adGroupId: string;
  readonly creative: Inline1136;
  readonly name: string;
  readonly state: string;
}

export interface Inline1137 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline114 {
  readonly cause: Inline114;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1140 {
  readonly adGroupId: string;
  readonly creative: Inline1140;
  readonly name: string;
  readonly state: string;
}

export interface Inline1141 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1142 {
  readonly adGroupId: string;
  readonly creative: Inline1142;
  readonly landingPage: Inline1144;
  readonly name: string;
  readonly state: string;
}

export interface Inline1143 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1144 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1147 {
  readonly adGroupId: string;
  readonly creative: Inline1147;
  readonly landingPage: Inline1149;
  readonly name: string;
  readonly state: string;
}

export interface Inline1148 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1149 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline115 {
  readonly cause: Inline115;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1150 {
  readonly adGroupId: string;
  readonly creative: Inline1150;
  readonly landingPage: Inline1152;
  readonly name: string;
  readonly state: string;
}

export interface Inline1151 {
  readonly assetId?: string;
  readonly crop?: Inline1151;
  readonly url?: string;
}

export interface Inline1152 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1155 {
  readonly adGroupId: string;
  readonly creative: Inline1155;
  readonly landingPage: Inline1157;
  readonly name: string;
  readonly state: string;
}

export interface Inline1156 {
  readonly assetId?: string;
  readonly crop?: Inline1156;
  readonly url?: string;
}

export interface Inline1157 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1158 {
  readonly adGroupId: string;
  readonly creative: Inline1158;
  readonly landingPage: Inline1160;
  readonly name: string;
  readonly state: string;
}

export interface Inline1159 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline116 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline116;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1160 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1163 {
  readonly adGroupId: string;
  readonly creative: Inline1163;
  readonly landingPage: Inline1165;
  readonly name: string;
  readonly state: string;
}

export interface Inline1164 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline1165 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1166 {
  readonly adGroupId: string;
  readonly creative: Inline1166;
  readonly name: string;
  readonly state: string;
}

export interface Inline1169 {
  readonly adGroupId: string;
  readonly creative: Inline1169;
  readonly name: string;
  readonly state: string;
}

export interface Inline117 {
  readonly campaign?: Inline117;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline1170 {
  readonly bidding?: Inline1170;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly goal?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline1173;
  readonly targetedPGDealId?: string;
}

export interface Inline1171 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1172 {
  readonly audienceSegments?: ReadonlyArray<Inline1172>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1173 {

}

export interface Inline1176 {
  readonly bidding?: Inline1176;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly goal?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline1179;
  readonly targetedPGDealId?: string;
}

export interface Inline1177 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1178 {
  readonly audienceSegments?: ReadonlyArray<Inline1178>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1179 {

}

export interface Inline118 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1180 {
  readonly bidding?: Inline1180;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1183;
}

export interface Inline1181 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1182 {
  readonly audienceSegments?: ReadonlyArray<Inline1182>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1183 {

}

export interface Inline1186 {
  readonly bidding?: Inline1186;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1189;
}

export interface Inline1187 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1188 {
  readonly audienceSegments?: ReadonlyArray<Inline1188>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1189 {

}

export interface Inline119 {
  readonly audienceSegments?: ReadonlyArray<Inline119>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1190 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1193 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1194 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1195 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1196 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1197 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1198 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline12 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline12;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline120 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline1200 {
  readonly campaigns?: ReadonlyArray<Inline1200>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}

export interface Inline1201 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline1202 {
  readonly audienceSegments?: ReadonlyArray<Inline1202>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline1203 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline1204 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline1205 {

}

export interface Inline1207 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1208 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1209 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline121 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline1210 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1211 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1213 {
  readonly jobId?: string;
}

export interface Inline1216 {
  readonly campaigns?: ReadonlyArray<Inline1216>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}

export interface Inline1219 {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}

export interface Inline122 {

}

export interface Inline1222 {
  readonly campaigns?: ReadonlyArray<Inline1222>;
  readonly nextToken?: string;
}

export interface Inline1224 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1225 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1226 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1227 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1228 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1230 {
  readonly migrations?: ReadonlyArray<Inline1230>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}

export interface Inline1231 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1232 {
  readonly assetId?: string;
  readonly crop?: Inline1232;
  readonly url?: string;
}

export interface Inline1233 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline1234 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline1235 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline1236 {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
}

export interface Inline1238 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1239 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline124 {
  readonly errors?: ReadonlyArray<Inline124>;
  readonly index: number;
}

export interface Inline1240 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1241 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline1242 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline125 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline125;
  readonly optimizationRuleId: string;
}

export interface Inline127 {
  readonly errors?: ReadonlyArray<Inline127>;
  readonly index: number;
}

export interface Inline128 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline128;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline129 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}

export interface Inline131 {
  readonly errors?: ReadonlyArray<Inline131>;
  readonly index: number;
}

export interface Inline132 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}

export interface Inline134 {
  readonly errors?: ReadonlyArray<Inline134>;
  readonly index: number;
}

export interface Inline135 {
  readonly index: number;
  readonly optimizationRule: Inline135;
  readonly optimizationRuleId: string;
}

export interface Inline137 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline137>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline138>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline139>;
}

export interface Inline138 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline139 {
  readonly audienceSegments?: ReadonlyArray<Inline139>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline14 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline140 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline141 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline142 {

}

export interface Inline146 {
  readonly biddingError?: Inline146;
  readonly billingError?: Inline147;
  readonly budgetError?: Inline148;
  readonly dateError?: Inline149;
  readonly otherError?: Inline150;
  readonly rangeError?: Inline151;
}

export interface Inline147 {
  readonly cause: Inline147;
  readonly message: string;
  readonly reason: string;
}

export interface Inline148 {
  readonly cause: Inline148;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline149 {
  readonly cause: Inline149;
  readonly message: string;
  readonly reason: string;
}

export interface Inline150 {
  readonly cause: Inline150;
  readonly message: string;
  readonly reason: string;
}

export interface Inline151 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline151;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline153 {
  readonly cause: Inline153;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline154 {
  readonly cause: Inline154;
  readonly message: string;
  readonly reason: string;
}

export interface Inline155 {
  readonly cause: Inline155;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline156 {
  readonly cause: Inline156;
  readonly message: string;
  readonly reason: string;
}

export interface Inline157 {
  readonly cause: Inline157;
  readonly message: string;
  readonly reason: string;
}

export interface Inline158 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline158;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline160 {
  readonly errorType: string;
  readonly errorValue: Inline160;
}

export interface Inline161 {
  readonly cause: Inline161;
  readonly message: string;
  readonly reason: string;
}

export interface Inline162 {
  readonly cause: Inline162;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline163 {
  readonly cause: Inline163;
  readonly message: string;
  readonly reason: string;
}

export interface Inline164 {
  readonly cause: Inline164;
  readonly message: string;
  readonly reason: string;
}

export interface Inline165 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline165;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline167 {
  readonly bidding?: Inline167;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline170;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline171;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline172;
  readonly targetedPGDealId?: string;
}

export interface Inline168 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline169 {
  readonly audienceSegments?: ReadonlyArray<Inline169>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline17 {
  readonly errorType: string;
  readonly errorValue: Inline17;
}

export interface Inline170 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline171 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline172 {

}

export interface Inline18 {
  readonly cause: Inline18;
  readonly message: string;
  readonly reason: string;
}

export interface Inline182 {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline184 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline184;
  readonly brandName: string;
}

export interface Inline186 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline188 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline188;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface Inline189 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline19 {
  readonly cause: Inline19;
  readonly message: string;
  readonly reason: string;
}

export interface Inline191 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline193 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline193;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline194;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline194 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline197 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline199 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline199>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline200>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline201>;
}

export interface Inline20 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline20;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline200 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline201 {
  readonly audienceSegments?: ReadonlyArray<Inline201>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline202 {

}

export interface Inline204 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline204;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline205>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
}

export interface Inline205 {
  readonly assetId?: string;
  readonly crop?: Inline205;
  readonly url?: string;
}

export interface Inline206 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline208 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline209 {
  readonly assetId?: string;
  readonly crop?: Inline209;
  readonly url?: string;
}

export interface Inline211 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline211;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline212>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline213;
}

export interface Inline212 {
  readonly assetId?: string;
  readonly crop?: Inline212;
  readonly url?: string;
}

export interface Inline213 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline216 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline216;
  readonly brandName: string;
  readonly landingPage?: Inline217;
  readonly title?: string;
}

export interface Inline217 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline219 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline22 {
  readonly biddingError?: Inline22;
  readonly dateError?: Inline23;
  readonly otherError?: Inline24;
  readonly rangeError?: Inline25;
}

export interface Inline220 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline222 {
  readonly attributeName: string;
  readonly criteria: Inline222;
}

export interface Inline224 {
  readonly conditions?: ReadonlyArray<Inline224>;
  readonly optimizationRuleId?: string;
}

export interface Inline227 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline227;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline228;
  readonly headline?: string;
}

export interface Inline228 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline229 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline23 {
  readonly cause: Inline23;
  readonly message: string;
  readonly reason: string;
}

export interface Inline231 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline232 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline234 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline234;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline235;
  readonly headline: string;
}

export interface Inline235 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline238 {
  readonly budgetIncreaseBy?: Inline238;
  readonly duration?: Inline239;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline241;
  readonly recurrence?: Inline242;
  readonly ruleType?: string;
}

export interface Inline239 {
  readonly dateRangeTypeRuleDuration?: Inline239;
  readonly eventTypeRuleDuration?: Inline240;
}

export interface Inline24 {
  readonly cause: Inline24;
  readonly message: string;
  readonly reason: string;
}

export interface Inline240 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline241 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline242 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline242>;
  readonly type?: string;
}

export interface Inline244 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}

export interface Inline246 {
  readonly error?: ReadonlyArray<Inline246>;
  readonly success?: ReadonlyArray<Inline250>;
}

export interface Inline247 {
  readonly cause: Inline247;
  readonly message: string;
  readonly reason: string;
}

export interface Inline248 {
  readonly cause: Inline248;
  readonly message: string;
  readonly reason: string;
}

export interface Inline249 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline249;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline25 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline25;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline250 {
  readonly adGroup?: Inline250;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline252 {
  readonly adGroupId: string;
  readonly creative: Inline252;
  readonly name: string;
  readonly state: string;
}

export interface Inline254 {
  readonly error?: ReadonlyArray<Inline254>;
  readonly success?: ReadonlyArray<Inline256>;
}

export interface Inline255 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline255;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline256 {
  readonly ad?: Inline256;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline257 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline258 {
  readonly assetId?: string;
  readonly crop?: Inline258;
  readonly url?: string;
}

export interface Inline259 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline260 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline261 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline263 {
  readonly adGroupId: string;
  readonly creative: Inline263;
  readonly landingPage: Inline264;
  readonly name: string;
  readonly state: string;
}

export interface Inline264 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline266 {
  readonly error?: ReadonlyArray<Inline266>;
  readonly success?: ReadonlyArray<Inline268>;
}

export interface Inline267 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline267;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline268 {
  readonly ad?: Inline268;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline269 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline27 {
  readonly cause: Inline27;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline270 {
  readonly assetId?: string;
  readonly crop?: Inline270;
  readonly url?: string;
}

export interface Inline271 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline272 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline273 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline275 {
  readonly bidding?: Inline275;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly goal?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline278;
  readonly targetedPGDealId?: string;
}

export interface Inline276 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline277 {
  readonly audienceSegments?: ReadonlyArray<Inline277>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline278 {

}

export interface Inline28 {
  readonly cause: Inline28;
  readonly message: string;
  readonly reason: string;
}

export interface Inline280 {
  readonly error?: ReadonlyArray<Inline280>;
  readonly success?: ReadonlyArray<Inline286>;
}

export interface Inline281 {
  readonly cause: Inline281;
  readonly message: string;
  readonly reason: string;
}

export interface Inline282 {
  readonly cause: Inline282;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline283 {
  readonly cause: Inline283;
  readonly message: string;
  readonly reason: string;
}

export interface Inline284 {
  readonly cause: Inline284;
  readonly message: string;
  readonly reason: string;
}

export interface Inline285 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline285;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline286 {
  readonly campaign?: Inline286;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline287 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline288 {
  readonly audienceSegments?: ReadonlyArray<Inline288>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline289 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline29 {
  readonly cause: Inline29;
  readonly message: string;
  readonly reason: string;
}

export interface Inline290 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline291 {

}

export interface Inline293 {
  readonly adGroupId: string;
  readonly creative: Inline293;
  readonly landingPage: Inline295;
  readonly name: string;
  readonly state: string;
}

export interface Inline294 {
  readonly assetId?: string;
  readonly crop?: Inline294;
  readonly url?: string;
}

export interface Inline295 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline297 {
  readonly error?: ReadonlyArray<Inline297>;
  readonly success?: ReadonlyArray<Inline299>;
}

export interface Inline298 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline298;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline299 {
  readonly ad?: Inline299;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline3 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline3;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly creativeStatus?: string;
  readonly creativeVersion?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline4;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline5>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline6>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface Inline30 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline30;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline300 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline301 {
  readonly assetId?: string;
  readonly crop?: Inline301;
  readonly url?: string;
}

export interface Inline302 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline303 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline304 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline306 {
  readonly adGroupId: string;
  readonly creative: Inline306;
  readonly name: string;
  readonly state: string;
}

export interface Inline307 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline309 {
  readonly error?: ReadonlyArray<Inline309>;
  readonly success?: ReadonlyArray<Inline311>;
}

export interface Inline310 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline310;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline311 {
  readonly ad?: Inline311;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline312 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline313 {
  readonly assetId?: string;
  readonly crop?: Inline313;
  readonly url?: string;
}

export interface Inline314 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline315 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline316 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline318 {
  readonly conditions?: ReadonlyArray<Inline318>;
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline320 {
  readonly error?: ReadonlyArray<Inline320>;
  readonly success?: ReadonlyArray<Inline321>;
}

export interface Inline321 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline321;
  readonly optimizationRuleId: string;
}

export interface Inline323 {
  readonly adGroupId: string;
  readonly creative: Inline323;
  readonly landingPage: Inline325;
  readonly name: string;
  readonly state: string;
}

export interface Inline324 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline325 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline327 {
  readonly error?: ReadonlyArray<Inline327>;
  readonly success?: ReadonlyArray<Inline329>;
}

export interface Inline328 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline328;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline329 {
  readonly ad?: Inline329;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline33 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline33;
  readonly name: string;
  readonly state: string;
}

export interface Inline330 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline331 {
  readonly assetId?: string;
  readonly crop?: Inline331;
  readonly url?: string;
}

export interface Inline332 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline333 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline334 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline336 {
  readonly adGroupId: string;
  readonly creative: Inline336;
  readonly landingPage: Inline338;
  readonly name: string;
  readonly state: string;
}

export interface Inline337 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline338 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline340 {
  readonly error?: ReadonlyArray<Inline340>;
  readonly success?: ReadonlyArray<Inline342>;
}

export interface Inline341 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline341;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline342 {
  readonly ad?: Inline342;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline343 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline344 {
  readonly assetId?: string;
  readonly crop?: Inline344;
  readonly url?: string;
}

export interface Inline345 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline346 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline347 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline349 {
  readonly adGroupId: string;
  readonly creative: Inline349;
  readonly name: string;
  readonly state: string;
}

export interface Inline35 {
  readonly otherError?: Inline35;
  readonly rangeError?: Inline36;
}

export interface Inline351 {
  readonly error?: ReadonlyArray<Inline351>;
  readonly success?: ReadonlyArray<Inline353>;
}

export interface Inline352 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline352;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline353 {
  readonly ad?: Inline353;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline354 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline355 {
  readonly assetId?: string;
  readonly crop?: Inline355;
  readonly url?: string;
}

export interface Inline356 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline357 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline358 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline36 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline36;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline360 {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline360;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline361>;
}

export interface Inline361 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline362 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline364 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline365 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline367 {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline367;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline368;
  readonly subpages: ReadonlyArray<Inline369>;
}

export interface Inline368 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline369 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline372 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline372;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface Inline374 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline376 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline376;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline379 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline38 {
  readonly cause: Inline38;
  readonly message: string;
  readonly reason: string;
}

export interface Inline380 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline381 {
  readonly assetId?: string;
  readonly crop?: Inline381;
  readonly url?: string;
}

export interface Inline382 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline384 {
  readonly errorType: string;
  readonly errorValue: Inline384;
}

export interface Inline385 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline385;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline39 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline39;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline390 {
  readonly otherError?: Inline390;
  readonly rangeError?: Inline391;
}

export interface Inline391 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline391;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline393 {
  readonly cause: Inline393;
  readonly message: string;
  readonly reason: string;
}

export interface Inline394 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline394;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline396 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline397 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline398 {
  readonly assetId?: string;
  readonly crop?: Inline398;
  readonly url?: string;
}

export interface Inline399 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}

export interface Inline4 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline400 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline406 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline409 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline413 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline415 {
  readonly error?: ReadonlyArray<Inline415>;
  readonly success?: ReadonlyArray<Inline419>;
}

export interface Inline416 {
  readonly cause: Inline416;
  readonly message: string;
  readonly reason: string;
}

export interface Inline417 {
  readonly cause: Inline417;
  readonly message: string;
  readonly reason: string;
}

export interface Inline418 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline418;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline419 {
  readonly adGroup?: Inline419;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline42 {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline42;
  readonly extendedData?: Inline46;
  readonly landingPage?: Inline47;
  readonly name: string;
  readonly state: string;
}

export interface Inline421 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline423 {
  readonly error?: ReadonlyArray<Inline423>;
  readonly success?: ReadonlyArray<Inline425>;
}

export interface Inline424 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline424;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline425 {
  readonly ad?: Inline425;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline426 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline427 {
  readonly assetId?: string;
  readonly crop?: Inline427;
  readonly url?: string;
}

export interface Inline428 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline429 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline43 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline430 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline432 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline434 {
  readonly error?: ReadonlyArray<Inline434>;
  readonly success?: ReadonlyArray<Inline440>;
}

export interface Inline435 {
  readonly cause: Inline435;
  readonly message: string;
  readonly reason: string;
}

export interface Inline436 {
  readonly cause: Inline436;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline437 {
  readonly cause: Inline437;
  readonly message: string;
  readonly reason: string;
}

export interface Inline438 {
  readonly cause: Inline438;
  readonly message: string;
  readonly reason: string;
}

export interface Inline439 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline439;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline44 {
  readonly assetId?: string;
  readonly crop?: Inline44;
  readonly url?: string;
}

export interface Inline440 {
  readonly campaign?: Inline440;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline441 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline442 {
  readonly audienceSegments?: ReadonlyArray<Inline442>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline443 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline444 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline445 {

}

export interface Inline448 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline45 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline450 {
  readonly error?: ReadonlyArray<Inline450>;
  readonly success?: ReadonlyArray<Inline451>;
}

export interface Inline451 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}

export interface Inline458 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline459 {
  readonly assetId?: string;
  readonly crop?: Inline459;
  readonly url?: string;
}

export interface Inline46 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline460 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline463 {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}

export interface Inline464 {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline464;
  readonly suggestedBudget: number;
}

export interface Inline466 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline466;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline467 {
  readonly dateRangeTypeRuleDuration?: Inline467;
  readonly eventTypeRuleDuration?: Inline468;
}

export interface Inline468 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline469 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline47 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline470 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline470>;
  readonly type?: string;
}

export interface Inline472 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline472;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline473 {
  readonly dateRangeTypeRuleDuration?: Inline473;
  readonly eventTypeRuleDuration?: Inline474;
}

export interface Inline474 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline475 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline476 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline476>;
  readonly type?: string;
}

export interface Inline479 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}

export interface Inline481 {
  readonly headline?: string;
  readonly headlineId?: string;
}

export interface Inline486 {
  readonly otherError?: Inline486;
  readonly rangeError?: Inline487;
}

export interface Inline487 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline487;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline490 {
  readonly cause: Inline490;
  readonly message: string;
  readonly reason: string;
}

export interface Inline491 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline491;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline498 {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline498;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}

export interface Inline499 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline5 {
  readonly assetId?: string;
  readonly crop?: Inline5;
  readonly url?: string;
}

export interface Inline500 {
  readonly assetId?: string;
  readonly crop?: Inline500;
  readonly url?: string;
}

export interface Inline501 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}

export interface Inline502 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline504 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline504;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline505;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline506>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline507;
  readonly layout?: string;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline508>;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface Inline505 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline506 {
  readonly assetId?: string;
  readonly crop?: Inline506;
  readonly url?: string;
}

export interface Inline507 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}

export interface Inline508 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline510 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline511 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline512 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline513 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline514 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline516 {
  readonly migrationEntity: Inline516;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline522>;
}

export interface Inline517 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline518 {
  readonly assetId?: string;
  readonly crop?: Inline518;
  readonly url?: string;
}

export interface Inline519 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline52 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface Inline520 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline521 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline522 {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
}

export interface Inline524 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline525 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline526 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline527 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline529 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline529;
  readonly name: string;
  readonly state: string;
}

export interface Inline531 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline532 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline533 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline534 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline535 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline537 {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline537;
  readonly extendedData?: Inline541;
  readonly landingPage?: Inline542;
  readonly name?: string;
  readonly state: string;
}

export interface Inline538 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline539 {
  readonly assetId?: string;
  readonly crop?: Inline539;
  readonly url?: string;
}

export interface Inline54 {
  readonly error?: ReadonlyArray<Inline54>;
  readonly success?: ReadonlyArray<Inline55>;
}

export interface Inline540 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline541 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline542 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline544 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline545 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline546 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline547 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline548 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline55 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}

export interface Inline550 {
  readonly bidding?: Inline550;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline553;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline554;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline555;
  readonly targetedPGDealId?: string;
}

export interface Inline551 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline552 {
  readonly audienceSegments?: ReadonlyArray<Inline552>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline553 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline554 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline555 {

}

export interface Inline557 {
  readonly entityId?: string;
  readonly entityType?: string;
}

export interface Inline558 {
  readonly include?: ReadonlyArray<string>;
}

export interface Inline560 {
  readonly conditions?: ReadonlyArray<Inline560>;
  readonly optimizationRuleId?: string;
}

export interface Inline562 {
  readonly ad?: Inline562;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}

export interface Inline563 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline564 {
  readonly assetId?: string;
  readonly crop?: Inline564;
  readonly url?: string;
}

export interface Inline565 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline566 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline567 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline568 {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
}

export interface Inline570 {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline570;
  readonly extendedData?: Inline574;
  readonly landingPage?: Inline575;
  readonly name?: string;
  readonly state: string;
}

export interface Inline571 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline572 {
  readonly assetId?: string;
  readonly crop?: Inline572;
  readonly url?: string;
}

export interface Inline573 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline574 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline575 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline578 {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}

export interface Inline585 {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}

export interface Inline591 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline591;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly creativeStatus?: string;
  readonly creativeVersion?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline592;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline593>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline594>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}

export interface Inline592 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline593 {
  readonly assetId?: string;
  readonly crop?: Inline593;
  readonly url?: string;
}

export interface Inline594 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline595 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline596 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline6 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline602 {
  readonly attributeName: string;
  readonly criteria: Inline602;
}

export interface Inline604 {
  readonly code: string;
  readonly message: string;
}

export interface Inline61 {
  readonly percentage?: number;
  readonly placement?: string;
}

export interface Inline610 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline615 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline616 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline62 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline620 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline622 {
  readonly endTime?: string;
  readonly startTime?: string;
}

export interface Inline626 {
  readonly comparisonOperator?: string;
  readonly value?: number;
}

export interface Inline628 {
  readonly endDate?: string;
  readonly startDate: string;
}

export interface Inline629 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline63 {
  readonly audienceSegments?: ReadonlyArray<Inline63>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline631 {
  readonly budgetIncreaseBy?: Inline631;
  readonly duration?: Inline632;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline634;
  readonly recurrence?: Inline635;
  readonly ruleType?: string;
}

export interface Inline632 {
  readonly dateRangeTypeRuleDuration?: Inline632;
  readonly eventTypeRuleDuration?: Inline633;
}

export interface Inline633 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline634 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline635 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline635>;
  readonly type?: string;
}

export interface Inline637 {
  readonly type: string;
  readonly value: number;
}

export interface Inline638 {
  readonly dateRangeTypeRuleDuration?: Inline638;
  readonly eventTypeRuleDuration?: Inline639;
}

export interface Inline639 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline640 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline641 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline641>;
  readonly type?: string;
}

export interface Inline646 {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface Inline648 {
  readonly budgetIncreaseBy?: Inline648;
  readonly duration?: Inline649;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline651;
  readonly recurrence?: Inline652;
  readonly ruleType?: string;
}

export interface Inline649 {
  readonly dateRangeTypeRuleDuration?: Inline649;
  readonly eventTypeRuleDuration?: Inline650;
}

export interface Inline65 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline650 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline651 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline652 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline652>;
  readonly type?: string;
}

export interface Inline654 {
  readonly adGroups: ReadonlyArray<Inline654>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline660>;
  readonly startDate?: string;
}

export interface Inline655 {
  readonly landingPageUrl?: string;
}

export interface Inline656 {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline657 {
  readonly expressions?: ReadonlyArray<Inline657>;
}

export interface Inline658 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline658>;
}

export interface Inline659 {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface Inline660 {
  readonly attributeName?: string;
  readonly criteria?: Inline660;
}

export interface Inline662 {
  readonly errors?: ReadonlyArray<Inline662>;
  readonly successes?: ReadonlyArray<Inline663>;
}

export interface Inline663 {
  readonly campaign?: Inline663;
  readonly index?: number;
}

export interface Inline666 {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline667 {
  readonly landingPageUrl?: string;
}

export interface Inline668 {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline669 {
  readonly expressions?: ReadonlyArray<Inline669>;
}

export interface Inline670 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline670>;
}

export interface Inline671 {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface Inline68 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline682 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline687 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline689 {
  readonly comparisonOperator?: string;
  readonly value?: number;
}

export interface Inline692 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline694 {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline694>;
  readonly landingPages?: ReadonlyArray<Inline695>;
  readonly negativeKeywords?: ReadonlyArray<Inline696>;
  readonly negativeTargets?: ReadonlyArray<Inline697>;
  readonly targets?: ReadonlyArray<Inline698>;
  readonly themes?: ReadonlyArray<Inline699>;
}

export interface Inline695 {
  readonly landingPageUrl?: string;
}

export interface Inline696 {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface Inline697 {
  readonly expressions?: ReadonlyArray<Inline697>;
}

export interface Inline698 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline698>;
}

export interface Inline699 {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface Inline7 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline700 {
  readonly attributeName?: string;
  readonly criteria?: Inline700;
}

export interface Inline702 {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}

export interface Inline703 {
  readonly campaign?: Inline703;
  readonly index?: number;
}

export interface Inline705 {
  readonly metric?: string;
  readonly value?: Inline705;
}

export interface Inline707 {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline707>;
}

export interface Inline713 {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}

export interface Inline716 {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}

export interface Inline719 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline719>;
}

export interface Inline721 {
  readonly keywordInsight: Inline721;
}

export interface Inline728 {
  readonly keywordInsight: Inline728;
}

export interface Inline73 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline74 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline743 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline743;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline744 {
  readonly dateRangeTypeRuleDuration?: Inline744;
  readonly eventTypeRuleDuration?: Inline745;
}

export interface Inline745 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline746 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline747 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline747>;
  readonly type?: string;
}

export interface Inline749 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline757 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline758 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline762 {
  readonly brandRefinementId: string;
  readonly name?: string;
}

export interface Inline764 {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline765 {
  readonly brandRefinementId: string;
  readonly name?: string;
}

export interface Inline766 {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline768 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline769 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline77 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline771 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline773 {
  readonly asinCountRange?: Inline773;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline774;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}

export interface Inline774 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline786 {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}

export interface Inline795 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline796 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline797 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline8 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline80 {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
}

export interface Inline812 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline812;
  readonly brandName: string;
}

export interface Inline814 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline816 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline816>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline817>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline818>;
}

export interface Inline817 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline818 {
  readonly audienceSegments?: ReadonlyArray<Inline818>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline819 {

}

export interface Inline821 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline821;
  readonly brandName: string;
  readonly landingPage?: Inline822;
  readonly title?: string;
}

export interface Inline822 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline824 {
  readonly attributeName: string;
  readonly criteria: Inline824;
}

export interface Inline826 {
  readonly conditions?: ReadonlyArray<Inline826>;
  readonly optimizationRuleId?: string;
}

export interface Inline828 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline828;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline829 {
  readonly dateRangeTypeRuleDuration?: Inline829;
  readonly eventTypeRuleDuration?: Inline830;
}

export interface Inline830 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline831 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline832 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline832>;
  readonly type?: string;
}

export interface Inline834 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline836 {
  readonly error?: ReadonlyArray<Inline836>;
  readonly success?: ReadonlyArray<Inline840>;
}

export interface Inline837 {
  readonly cause: Inline837;
  readonly message: string;
  readonly reason: string;
}

export interface Inline838 {
  readonly cause: Inline838;
  readonly message: string;
  readonly reason: string;
}

export interface Inline839 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline839;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline840 {
  readonly adGroup?: Inline840;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline842 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline844 {
  readonly error?: ReadonlyArray<Inline844>;
  readonly success?: ReadonlyArray<Inline846>;
}

export interface Inline845 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline845;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline846 {
  readonly ad?: Inline846;
  readonly adId?: string;
  readonly index: number;
}

export interface Inline847 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline848 {
  readonly assetId?: string;
  readonly crop?: Inline848;
  readonly url?: string;
}

export interface Inline849 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline850 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline851 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline853 {
  readonly adId: string;
  readonly creative: Inline853;
}

export interface Inline855 {
  readonly error?: ReadonlyArray<Inline855>;
  readonly success?: ReadonlyArray<Inline857>;
}

export interface Inline856 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline856;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline857 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}

export interface Inline859 {
  readonly bidding?: Inline859;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline862;
}

export interface Inline860 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline861 {
  readonly audienceSegments?: ReadonlyArray<Inline861>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline862 {

}

export interface Inline864 {
  readonly error?: ReadonlyArray<Inline864>;
  readonly success?: ReadonlyArray<Inline870>;
}

export interface Inline865 {
  readonly cause: Inline865;
  readonly message: string;
  readonly reason: string;
}

export interface Inline866 {
  readonly cause: Inline866;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline867 {
  readonly cause: Inline867;
  readonly message: string;
  readonly reason: string;
}

export interface Inline868 {
  readonly cause: Inline868;
  readonly message: string;
  readonly reason: string;
}

export interface Inline869 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline869;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline870 {
  readonly campaign?: Inline870;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline871 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}

export interface Inline872 {
  readonly audienceSegments?: ReadonlyArray<Inline872>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export interface Inline873 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}

export interface Inline874 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface Inline875 {

}

export interface Inline877 {
  readonly adId: string;
  readonly creative: Inline877;
}

export interface Inline878 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline880 {
  readonly error?: ReadonlyArray<Inline880>;
  readonly success?: ReadonlyArray<Inline882>;
}

export interface Inline881 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline881;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline882 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}

export interface Inline884 {
  readonly conditions?: ReadonlyArray<Inline884>;
  readonly optimizationRuleId?: string;
}

export interface Inline886 {
  readonly error?: ReadonlyArray<Inline886>;
  readonly success?: ReadonlyArray<Inline887>;
}

export interface Inline887 {
  readonly index: number;
  readonly optimizationRule: Inline887;
  readonly optimizationRuleId: string;
}

export interface Inline89 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}

export interface Inline890 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline892 {
  readonly adId: string;
  readonly creative: Inline892;
}

export interface Inline895 {
  readonly adId: string;
  readonly creative: Inline895;
}

export interface Inline896 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline896;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline897;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline897 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline899 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Inline90 {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}

export interface Inline901 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline901;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline902;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline902 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline904 {
  readonly creatives?: ReadonlyArray<Inline904>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline905 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline906 {
  readonly assetId?: string;
  readonly crop?: Inline906;
  readonly url?: string;
}

export interface Inline907 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}

export interface Inline908 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline910 {
  readonly adId: string;
  readonly creative: Inline910;
}

export interface Inline911 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline914 {
  readonly adId: string;
  readonly creative: Inline914;
}

export interface Inline915 {
  readonly pageType?: string;
  readonly url?: string;
}

export interface Inline916 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline916;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline917;
  readonly headline: string;
}

export interface Inline917 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline919 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Inline921 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline921;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline922;
  readonly headline: string;
}

export interface Inline922 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline923 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline923;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline924>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline925;
}

export interface Inline924 {
  readonly assetId?: string;
  readonly crop?: Inline924;
  readonly url?: string;
}

export interface Inline925 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline927 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Inline929 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline929;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline930>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline931;
}

export interface Inline93 {
  readonly errors?: ReadonlyArray<Inline93>;
  readonly index: number;
}

export interface Inline930 {
  readonly assetId?: string;
  readonly crop?: Inline930;
  readonly url?: string;
}

export interface Inline931 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline932 {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline932;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline933;
  readonly subpages: ReadonlyArray<Inline934>;
}

export interface Inline933 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline934 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline936 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Inline938 {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline938;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline939;
  readonly subpages: ReadonlyArray<Inline940>;
}

export interface Inline939 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline94 {
  readonly cause: Inline94;
  readonly message: string;
  readonly reason: string;
}

export interface Inline940 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface Inline941 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline941;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline943 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}

export interface Inline945 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline945;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}

export interface Inline947 {
  readonly budgetIncreaseBy?: Inline947;
  readonly duration?: Inline948;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline950;
  readonly recurrence?: Inline951;
  readonly ruleType?: string;
}

export interface Inline948 {
  readonly dateRangeTypeRuleDuration?: Inline948;
  readonly eventTypeRuleDuration?: Inline949;
}

export interface Inline949 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline95 {
  readonly cause: Inline95;
  readonly message: string;
  readonly reason: string;
}

export interface Inline950 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline951 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline951>;
  readonly type?: string;
}

export interface Inline954 {
  readonly budgetIncreaseBy?: Inline954;
  readonly duration?: Inline955;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline957;
  readonly recurrence?: Inline958;
  readonly ruleType?: string;
}

export interface Inline955 {
  readonly dateRangeTypeRuleDuration?: Inline955;
  readonly eventTypeRuleDuration?: Inline956;
}

export interface Inline956 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline957 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline958 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline958>;
  readonly type?: string;
}

export interface Inline959 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline959;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline96 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline96;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline960 {
  readonly dateRangeTypeRuleDuration?: Inline960;
  readonly eventTypeRuleDuration?: Inline961;
}

export interface Inline961 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline962 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline963 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline963>;
  readonly type?: string;
}

export interface Inline966 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline966;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline967 {
  readonly dateRangeTypeRuleDuration?: Inline967;
  readonly eventTypeRuleDuration?: Inline968;
}

export interface Inline968 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline969 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline97 {
  readonly adGroup?: Inline97;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline970 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline970>;
  readonly type?: string;
}

export interface Inline972 {
  readonly budgetRule?: Inline972;
}

export interface Inline973 {
  readonly dateRangeTypeRuleDuration?: Inline973;
  readonly eventTypeRuleDuration?: Inline974;
}

export interface Inline974 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline975 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline976 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline976>;
  readonly type?: string;
}

export interface Inline979 {
  readonly associatedCampaigns?: ReadonlyArray<Inline979>;
  readonly nextToken?: string;
}

export interface Inline982 {
  readonly associatedRules?: ReadonlyArray<Inline982>;
}

export interface Inline983 {
  readonly dateRangeTypeRuleDuration?: Inline983;
  readonly eventTypeRuleDuration?: Inline984;
}

export interface Inline984 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline985 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline986 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline986>;
  readonly type?: string;
}

export interface Inline99 {
  readonly errors?: ReadonlyArray<Inline99>;
  readonly index: number;
}

export interface Inline991 {

}

export interface Inline997 {
  readonly campaignId: string;
}

export interface Inline999 {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline999>;
}

export type InternalErrorErrorCode = "INTERNAL_ERROR" | string;

export type InternalServerErrorCode = "INTERNAL_ERROR" | string;

export interface InternalServerExceptionResponseContent {
  readonly code: string;
  readonly details?: string;
}

export interface InvalidArgumentError {
  readonly errorType: string;
  readonly errorValue: Inline486;
}

export type InvalidArgumentErrorCode = "INVALID_ARGUMENT" | string;

export interface InvalidArgumentErrorSelector {
  readonly otherError?: Inline490;
  readonly rangeError?: Inline491;
}

export interface InvalidArgumentExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface LandingPage {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}

export type LandingPageType = "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE" | string;

export type Layout = "BRAND_GALLERY" | string;

export interface ListAssociatedBudgetRulesForSBCampaignsParams {
  readonly campaignId: number;
}

export interface ListAssociatedBudgetRulesForSBCampaignsResponse {
  readonly data: Inline982;
}

export interface ListCreativesParams {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListCreativesRequestContent {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListCreativesResponse {
  readonly data: Inline904;
}

export interface ListCreativesResponseContent {
  readonly creatives?: ReadonlyArray<Inline498>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface ListCreativesResultEntry {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline504;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}

export interface ListMigrationsParams {
  readonly adGroupIdFilter?: Inline1224;
  readonly adIdFilter?: Inline1225;
  readonly adStateFilter?: Inline1226;
  readonly campaignIdFilter?: Inline1227;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline1228;
  readonly nextToken?: string;
}

export interface ListMigrationsRequestContent {
  readonly adGroupIdFilter?: Inline510;
  readonly adIdFilter?: Inline511;
  readonly adStateFilter?: Inline512;
  readonly campaignIdFilter?: Inline513;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline514;
  readonly nextToken?: string;
}

export interface ListMigrationsResponse {
  readonly data: Inline1230;
}

export interface ListMigrationsResponseContent {
  readonly migrations?: ReadonlyArray<Inline516>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}

export interface ListSponsoredBrandsAdGroupsParams {
  readonly adGroupIdFilter?: Inline1089;
  readonly campaignIdFilter?: Inline1090;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1091;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1092;
}

export interface ListSponsoredBrandsAdGroupsRequestContent {
  readonly adGroupIdFilter?: Inline524;
  readonly campaignIdFilter?: Inline525;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline526;
  readonly nextToken?: string;
  readonly stateFilter?: Inline527;
}

export interface ListSponsoredBrandsAdGroupsResponse {
  readonly data: Inline1094;
}

export interface ListSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: ReadonlyArray<Inline529>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface ListSponsoredBrandsAdsParams {
  readonly adGroupIdFilter?: Inline1118;
  readonly adIdFilter?: Inline1119;
  readonly campaignIdFilter?: Inline1120;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1121;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1122;
}

export interface ListSponsoredBrandsAdsRequestContent {
  readonly adGroupIdFilter?: Inline531;
  readonly adIdFilter?: Inline532;
  readonly campaignIdFilter?: Inline533;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline534;
  readonly nextToken?: string;
  readonly stateFilter?: Inline535;
}

export interface ListSponsoredBrandsAdsResponse {
  readonly data: Inline1124;
}

export interface ListSponsoredBrandsAdsResponseContent {
  readonly ads?: ReadonlyArray<Inline537>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface ListSponsoredBrandsCampaignsParams {
  readonly campaignIdFilter?: Inline1194;
  readonly goalTypeFilter?: Inline1195;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1196;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline1197;
  readonly stateFilter?: Inline1198;
}

export interface ListSponsoredBrandsCampaignsRequestContent {
  readonly campaignIdFilter?: Inline544;
  readonly goalTypeFilter?: Inline545;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline546;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline547;
  readonly stateFilter?: Inline548;
}

export interface ListSponsoredBrandsCampaignsResponse {
  readonly data: Inline1200;
}

export interface ListSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline550>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}

export interface ListSponsoredBrandsOptimizationRulesParams {
  readonly entityFilter?: Inline1054;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline1055;
}

export interface ListSponsoredBrandsOptimizationRulesRequestContent {
  readonly entityFilter?: Inline557;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline558;
}

export interface ListSponsoredBrandsOptimizationRulesResponse {
  readonly data: Inline1057;
}

export interface ListSponsoredBrandsOptimizationRulesResponseContent {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline560>;
  readonly totalCount?: number;
}

export interface Migration {
  readonly migrationEntity: Inline562;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline568>;
}

export interface MigrationEntity {
  readonly ad?: Inline570;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}

export interface MigrationJobResultsParams {
  readonly jobId: string;
  readonly nextToken?: string;
}

export interface MigrationJobResultsRequestContent {
  readonly jobId: string;
  readonly nextToken?: string;
}

export interface MigrationJobResultsResponse {
  readonly data: Inline1216;
}

export interface MigrationJobResultsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline578>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}

export interface MigrationJobStatusParams {
  readonly jobId: string;
}

export interface MigrationJobStatusRequestContent {
  readonly jobId: string;
}

export interface MigrationJobStatusResponse {
  readonly data: Inline1219;
}

export interface MigrationJobStatusResponseContent {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}

export interface MigrationOption {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
}

export type MigrationOptionType = "AUTO_COLLECTION" | "MANUAL_COLLECTION" | string;

export interface MigrationResultsParams {
  readonly nextToken?: string;
}

export interface MigrationResultsRequestContent {
  readonly nextToken?: string;
}

export interface MigrationResultsResponse {
  readonly data: Inline1222;
}

export interface MigrationResultsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline585>;
  readonly nextToken?: string;
}

export type MigrationStatus = "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED" | string;

export interface MigrationStatusFilter {
  readonly include?: ReadonlyArray<string>;
}

export type MigrationType = "IMPROVE" | "MIGRATE" | string;

export interface ModerationError {
  readonly code?: string;
  readonly details?: string;
}

export interface MultiAdGroupAd {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline591;
  readonly extendedData?: Inline595;
  readonly landingPage?: Inline596;
  readonly name: string;
  readonly state: string;
}

export interface NameFilter {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export type NotFoundErrorCode = "NOT_FOUND" | string;

export interface NotFoundExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface ObjectIdFilter {
  readonly include?: ReadonlyArray<string>;
}

export interface OptimizationRule {
  readonly conditions?: ReadonlyArray<Inline602>;
  readonly optimizationRuleId?: string;
}

export interface OptimizationRuleFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline604>;
  readonly index: number;
}

export interface OptimizationRuleIdFilter {
  readonly include?: ReadonlyArray<string>;
}

export interface OptimizationRulesError {
  readonly code: string;
  readonly message: string;
}

export interface OptimizationRuleToEntityMapping {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}

export interface OptimizationRuleToEntityMappingSuccessResponseItem {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}

export interface OtherError {
  readonly cause: Inline610;
  readonly message: string;
  readonly reason: string;
}

export interface PerformanceMeasureConditionForSB {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export type PerformanceMetricForSB = "IS" | "NTB" | "ROAS" | string;

export type Placement = "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH" | string;

export interface ProductCollectionCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline615;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline616;
  readonly headline: string;
}

export type ProductLocation = "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC" | string;

export type QueryTermMatchType = "BROAD_MATCH" | "EXACT_MATCH" | string;

export interface RangeError {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline620;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Recurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline622>;
  readonly type?: string;
}

export type RecurrenceType = "DAILY" | "WEEKLY" | string;

export interface RuleBasedBudget {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}

export interface RuleCondition {
  readonly attributeName: string;
  readonly criteria: Inline626;
}

export interface RuleDuration {
  readonly dateRangeTypeRuleDuration?: Inline628;
  readonly eventTypeRuleDuration?: Inline629;
}

export interface SBBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline631;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface SBBudgetRuleDetails {
  readonly budgetIncreaseBy?: Inline637;
  readonly duration?: Inline638;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline640;
  readonly recurrence?: Inline641;
  readonly ruleType?: string;
}

export interface SBBudgetRulesRecommendationError {
  readonly code?: string;
  readonly details?: string;
}

export interface SBBudgetRulesRecommendationEvent {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface SBBudgetRulesRecommendationEventRequest {
  readonly campaignId: string;
}

export interface SBBudgetRulesRecommendationEventResponse {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline646>;
}

export interface SBCampaignBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline648;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface SBCampaignPerformanceForecastsParams {
  readonly campaigns: ReadonlyArray<Inline1006>;
}

export interface SBCampaignPerformanceForecastsRequestContent {
  readonly campaigns: ReadonlyArray<Inline654>;
}

export interface SBCampaignPerformanceForecastsResponse {

}

export interface SBCampaignPerformanceForecastsResponseContent {
  readonly campaigns?: Inline662;
}

export interface SbCampaignsBudgetUsageParams {
  readonly campaignIds?: ReadonlyArray<string>;
}

export interface SbCampaignsBudgetUsageResponse {

}

export interface SBForecastingAccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBForecastingAdGroup {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline666>;
  readonly landingPages?: ReadonlyArray<Inline667>;
  readonly negativeKeywords?: ReadonlyArray<Inline668>;
  readonly negativeTargets?: ReadonlyArray<Inline669>;
  readonly targets?: ReadonlyArray<Inline670>;
  readonly themes?: ReadonlyArray<Inline671>;
}

export type SBForecastingAttributeName = "COST_PER_CLICK" | string;

export interface SBForecastingBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export type SBForecastingComparisonOperator = "LESS_THAN_OR_EQUAL_TO" | string;

export type SBForecastingCreativeType = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;

export interface SBForecastingCriteria {
  readonly comparisonOperator?: string;
  readonly value?: number;
}

export interface SBForecastingErrorObject {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}

export interface SBForecastingInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBForecastingKeyword {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface SBForecastingLandingPageObject {
  readonly landingPageUrl?: string;
}

export interface SBForecastingMetric {
  readonly metric?: string;
  readonly value?: Inline682;
}

export interface SBForecastingMetricValue {
  readonly max?: number;
  readonly min?: number;
}

export interface SBForecastingNegativeKeyword {
  readonly keywordText?: string;
  readonly matchType?: string;
}

export interface SBForecastingNegativeProductExpression {
  readonly type?: string;
  readonly value?: string;
}

export interface SBForecastingNegativeProductTarget {
  readonly expressions?: ReadonlyArray<Inline687>;
}

export interface SBForecastingOptimizationRules {
  readonly attributeName?: string;
  readonly criteria?: Inline689;
}

export interface SBForecastingProductExpression {
  readonly type?: string;
  readonly value?: string;
}

export interface SBForecastingProductTarget {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline692>;
}

export interface SBForecastingRequestCampaignObject {
  readonly adGroups: ReadonlyArray<Inline694>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline700>;
  readonly startDate?: string;
}

export interface SBForecastingResponseCampaignObject {
  readonly errors?: ReadonlyArray<Inline702>;
  readonly successes?: ReadonlyArray<Inline703>;
}

export interface SBForecastingSuccessCampaign {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline705>;
}

export interface SBForecastingSuccessObject {
  readonly campaign?: Inline707;
  readonly index?: number;
}

export interface SBForecastingTheme {
  readonly bid?: number;
  readonly themeType?: string;
}

export interface SBForecastingThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBForecastingUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBForecastingUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBGetAssociatedCampaignsResponse {
  readonly associatedCampaigns?: ReadonlyArray<Inline713>;
  readonly nextToken?: string;
}

export interface SBGetBudgetRulesRecommendationParams {
  readonly body: Inline997;
}

export interface SBGetBudgetRulesRecommendationResponse {
  readonly data: Inline999;
}

export type SBInsightsAdFormat = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;

export interface SBInsightsAdGroup {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline716>;
}

export interface SBInsightsBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBInsightsCampaignInsightsParams {
  readonly nextToken?: string;
  readonly adGroups: ReadonlyArray<Inline1001>;
}

export interface SBInsightsCampaignInsightsRequestContent {
  readonly adGroups: ReadonlyArray<Inline719>;
}

export interface SBInsightsCampaignInsightsResponse {
  readonly data: Inline1003;
}

export interface SBInsightsCampaignInsightsResponseContent {
  readonly insights?: ReadonlyArray<Inline721>;
  readonly nextToken?: string;
}

export interface SBInsightsInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBInsightsKeyword {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}

export type SBInsightsKeywordAlertType = "LOW_BID" | "LOW_KEYWORD_TRAFFIC" | string;

export interface SBInsightsKeywordInsight {
  readonly adGroupIndex?: number;
  readonly alerts?: ReadonlyArray<string>;
  readonly bid?: number;
  readonly keywordIndex?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
}

export type SBInsightsMatchType = "BROAD" | "EXACT" | "PHRASE" | string;

export type SBInsightsObject = Inline728;

export interface SBInsightsThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBInsightsUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBInsightsUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export type SBKeywordRecommendationCreativeType = "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;

export interface SBKeywordRecommendationError {
  readonly code?: string;
  readonly details?: string;
}

export type SBKeywordRecommendationGoal = "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT" | string;

export type SBKeywordRecommendationImpressionRank = number;

export type SBKeywordRecommendationImpressionShare = number;

export type SBKeywordRecommendationMatchType = "broad" | "exact" | "phrase" | string;

export interface SBKeywordRecommendationRequestAsin {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}

export interface SBKeywordRecommendationRequestUrl {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}

export type SBKeywordRecommendationType = "addKeyword" | string;

export interface SBKeywordSuggestion {
  readonly matchType?: string;
  readonly recommendationId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly type?: string;
  readonly value?: string;
}

export interface SBListAssociatedBudgetRulesResponse {
  readonly associatedRules?: ReadonlyArray<Inline743>;
}

export interface SBOptimizationRecommendationParams {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline1034>;
}

export interface SBOptimizationRecommendationRequestContent {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline749>;
}

export interface SBOptimizationRecommendationResponse {

}

export interface SBOptimizationRecommendationResponseContent {
  readonly costControlMetric: string;
  readonly minimumValue: number;
  readonly recommendedValue: number;
}

export type SBRuleType = "PERFORMANCE" | "SCHEDULE" | string;

export interface SBTargetingAccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBTargetingAgeRange {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface SBTargetingBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBTargetingBrand {
  readonly brandRefinementId: string;
  readonly name?: string;
}

export interface SBTargetingCategory {
  readonly asinCountRange?: Inline757;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline758;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}

export interface SBTargetingEstimatedReachRange {
  readonly max?: number;
  readonly min?: number;
}

export interface SBTargetingGenre {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface SBTargetingGetNegativeBrandsParams {
  readonly nextToken?: string;
}

export interface SBTargetingGetNegativeBrandsResponse {
  readonly data: Inline1023;
}

export interface SBTargetingGetNegativeBrandsResponseContent {
  readonly brands?: ReadonlyArray<Inline762>;
  readonly nextToken?: string;
}

export interface SBTargetingGetRefinementsForCategoryParams {
  readonly categoryRefinementId: string;
  readonly locale?: string;
  readonly nextToken?: string;
}

export interface SBTargetingGetRefinementsForCategoryResponse {
  readonly data: Inline1066;
}

export interface SBTargetingGetRefinementsForCategoryResponseContent {
  readonly ageRanges?: ReadonlyArray<Inline764>;
  readonly brands?: ReadonlyArray<Inline765>;
  readonly genres?: ReadonlyArray<Inline766>;
  readonly nextToken?: string;
}

export interface SBTargetingGetTargetableASINCountsParams {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline1070;
  readonly ratingRange?: Inline1071;
}

export interface SBTargetingGetTargetableASINCountsRequestContent {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline768;
  readonly ratingRange?: Inline769;
}

export interface SBTargetingGetTargetableASINCountsResponse {
  readonly data: Inline1073;
}

export interface SBTargetingGetTargetableASINCountsResponseContent {
  readonly asinCounts?: Inline771;
}

export interface SBTargetingGetTargetableCategoriesParams {
  readonly locale?: string;
  readonly supplySource: string;
  readonly includeOnlyRootCategories?: boolean;
  readonly parentCategoryRefinementId?: string;
  readonly nextToken?: string;
}

export interface SBTargetingGetTargetableCategoriesResponse {
  readonly data: Inline1062;
}

export interface SBTargetingGetTargetableCategoriesResponseContent {
  readonly categoryTree?: ReadonlyArray<Inline773>;
  readonly nextToken?: string;
}

export interface SBTargetingIntegerRange {
  readonly max?: number;
  readonly min?: number;
}

export interface SBTargetingInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export type SBTargetingLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;

export interface SBTargetingPriceRange {
  readonly max?: number;
  readonly min?: number;
}

export interface SBTargetingRatingRange {
  readonly max?: number;
  readonly min?: number;
}

export type SBTargetingSupplySource = "AMAZON" | "STREAMING_VIDEO" | string;

export interface SBTargetingThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBTargetingUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SBTargetingUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface SevenDaysMissedOpportunities {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
}

export interface ShopperCohortBidAdjustment {
  readonly audienceSegments?: ReadonlyArray<Inline786>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}

export type ShopperCohortType = "AUDIENCE_SEGMENT" | string;

export type ShopperSegment = "NEW_TO_BRAND_PURCHASE" | string;

export type SiteRestriction = "AMAZON_BUSINESS" | string;

export interface StartMigrationJobParams {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}

export interface StartMigrationJobRequestContent {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}

export interface StartMigrationJobResponse {
  readonly data: Inline1213;
}

export interface StartMigrationJobResponseContent {
  readonly jobId?: string;
}

export type state = "ACTIVE" | "PAUSED" | string;

export interface StorePage {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}

export interface StoreSpotlightCreative {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline795;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline796;
  readonly subpages: ReadonlyArray<Inline797>;
}

export interface Subpage {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}

export interface SuggestedHeadline {
  readonly headline?: string;
  readonly headlineId?: string;
}

export interface Tags {

}

export type ThrottledErrorCode = "THROTTLED" | string;

export type ThrottlingErrorCode = "THROTTLED" | string;

export interface ThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface timeOfDay {
  readonly endTime?: string;
  readonly startTime?: string;
}

export type UnauthorizedErrorCode = "UNAUTHORIZED" | string;

export interface UnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export type UnsupportedMediaTypeErrorCode = "UNSUPPORTED_MEDIA_TYPE" | string;

export interface UnsupportedMediaTypeExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}

export interface UpdateAd {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface UpdateAdGroup {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}

export interface UpdateAutoCollectionAd {
  readonly adId: string;
  readonly creative: Inline812;
}

export interface UpdateBudgetRulesForSBCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline959>;
}

export interface UpdateBudgetRulesForSBCampaignsResponse {

}

export interface UpdateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline814>;
}

export interface UpdateCampaign {
  readonly bidding?: Inline816;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline819;
}

export interface UpdateManualCollectionAd {
  readonly adId: string;
  readonly creative: Inline821;
}

export interface UpdateOptimizationRule {
  readonly conditions?: ReadonlyArray<Inline824>;
  readonly optimizationRuleId?: string;
}

export interface UpdateOptimizationRuleSuccessResponseItem {
  readonly index: number;
  readonly optimizationRule: Inline826;
  readonly optimizationRuleId: string;
}

export interface UpdateSBBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline828>;
}

export interface UpdateSponsoredBrandsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline1081>;
}

export interface UpdateSponsoredBrandsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline834>;
}

export interface UpdateSponsoredBrandsAdGroupsResponse {

}

export interface UpdateSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline836;
}

export interface UpdateSponsoredBrandsAdsParams {
  readonly ads: ReadonlyArray<Inline1100>;
}

export interface UpdateSponsoredBrandsAdsRequestContent {
  readonly ads: ReadonlyArray<Inline842>;
}

export interface UpdateSponsoredBrandsAdsResponse {

}

export interface UpdateSponsoredBrandsAdsResponseContent {
  readonly ads?: Inline844;
}

export interface UpdateSponsoredBrandsAutoCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline892>;
}

export interface UpdateSponsoredBrandsAutoCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline853>;
}

export interface UpdateSponsoredBrandsAutoCollectionAdsResponse {

}

export interface UpdateSponsoredBrandsAutoCollectionAdsResponseContent {
  readonly creatives?: Inline855;
}

export interface UpdateSponsoredBrandsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline1180>;
}

export interface UpdateSponsoredBrandsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline859>;
}

export interface UpdateSponsoredBrandsCampaignsResponse {

}

export interface UpdateSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline864;
}

export interface UpdateSponsoredBrandsManualCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline910>;
}

export interface UpdateSponsoredBrandsManualCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline877>;
}

export interface UpdateSponsoredBrandsManualCollectionAdsResponse {

}

export interface UpdateSponsoredBrandsManualCollectionAdsResponseContent {
  readonly creatives?: Inline880;
}

export interface UpdateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline1042>;
}

export interface UpdateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRules: ReadonlyArray<Inline884>;
}

export interface UpdateSponsoredBrandsOptimizationRulesResponse {

}

export interface UpdateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRules: Inline886;
}

export interface ValueTypeRuleCriteria {
  readonly comparisonOperator?: string;
  readonly value?: number;
}

export interface VideoCreative {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline890;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
