// @generated
// fingerprint: sha256:ecfac6ffab899d083b96e17f3ec211186f88027f77f5dacf7f91b75548ea671e
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export type AcceptHeader = "application/vnd.sbAdCreativeResource.v4+json" | "application/vnd.sbCreativeImageRecommendationResource.v4+json" | "application/vnd.sbCreativeRecommendationResource.v4+json" | string;
export type AcceptHeaderEncoded = "application/vnd.sbAdCreativeResource.v4+json" | "application/vnd.sbCreativeImageRecommendationResource.v4+json" | "application/vnd.sbCreativeRecommendationResource.v4+json" | string;
export const AcceptHeader: Schema.Schema<AcceptHeader, AcceptHeaderEncoded, never> = Schema.Union(Schema.Literal("application/vnd.sbAdCreativeResource.v4+json", "application/vnd.sbCreativeImageRecommendationResource.v4+json", "application/vnd.sbCreativeRecommendationResource.v4+json"), Schema.String);

export type AccessDeniedErrorCode = "ACCESS_DENIED" | string;
export type AccessDeniedErrorCodeEncoded = "ACCESS_DENIED" | string;
export const AccessDeniedErrorCode: Schema.Schema<AccessDeniedErrorCode, AccessDeniedErrorCodeEncoded, never> = Schema.Union(Schema.Literal("ACCESS_DENIED"), Schema.String);

export interface AccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface AccessDeniedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const AccessDeniedExceptionResponseContent: Schema.Schema<AccessDeniedExceptionResponseContent, AccessDeniedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

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
export interface AdEncoded {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline3Encoded;
  readonly extendedData?: Inline7Encoded;
  readonly landingPage?: Inline8Encoded;
  readonly name?: string;
  readonly state: string;
}
export const Ad: Schema.Schema<Ad, AdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  adId: Schema.optional(Schema.String),
  campaignId: Schema.String,
  creative: Schema.optional(Schema.suspend(() => Inline3)),
  extendedData: Schema.optional(Schema.suspend(() => Inline7)),
  landingPage: Schema.optional(Schema.suspend(() => Inline8)),
  name: Schema.optional(Schema.String),
  state: Schema.String,
});

export interface AdExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface AdExtendedDataEncoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const AdExtendedData: Schema.Schema<AdExtendedData, AdExtendedDataEncoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface AdFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline11>;
  readonly index: number;
}
export interface AdFailureResponseItemEncoded {
  readonly errors?: ReadonlyArray<Inline11Encoded>;
  readonly index: number;
}
export const AdFailureResponseItem: Schema.Schema<AdFailureResponseItem, AdFailureResponseItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline11))),
  index: Schema.Number,
});

export interface AdGroup {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline14;
  readonly name: string;
  readonly state: string;
}
export interface AdGroupEncoded {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline14Encoded;
  readonly name: string;
  readonly state: string;
}
export const AdGroup: Schema.Schema<AdGroup, AdGroupEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  campaignId: Schema.String,
  extendedData: Schema.optional(Schema.suspend(() => Inline14)),
  name: Schema.String,
  state: Schema.String,
});

export interface AdGroupExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface AdGroupExtendedDataEncoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const AdGroupExtendedData: Schema.Schema<AdGroupExtendedData, AdGroupExtendedDataEncoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface AdGroupFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline17>;
  readonly index: number;
}
export interface AdGroupFailureResponseItemEncoded {
  readonly errors?: ReadonlyArray<Inline17Encoded>;
  readonly index: number;
}
export const AdGroupFailureResponseItem: Schema.Schema<AdGroupFailureResponseItem, AdGroupFailureResponseItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline17))),
  index: Schema.Number,
});

export interface AdGroupMutationError {
  readonly errorType: string;
  readonly errorValue: Inline22;
}
export interface AdGroupMutationErrorEncoded {
  readonly errorType: string;
  readonly errorValue: Inline22Encoded;
}
export const AdGroupMutationError: Schema.Schema<AdGroupMutationError, AdGroupMutationErrorEncoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline22),
});

export interface AdGroupMutationErrorSelector {
  readonly biddingError?: Inline27;
  readonly dateError?: Inline28;
  readonly otherError?: Inline29;
  readonly rangeError?: Inline30;
}
export interface AdGroupMutationErrorSelectorEncoded {
  readonly biddingError?: Inline27Encoded;
  readonly dateError?: Inline28Encoded;
  readonly otherError?: Inline29Encoded;
  readonly rangeError?: Inline30Encoded;
}
export const AdGroupMutationErrorSelector: Schema.Schema<AdGroupMutationErrorSelector, AdGroupMutationErrorSelectorEncoded, never> = Schema.Struct({
  biddingError: Schema.optional(Schema.suspend(() => Inline27)),
  dateError: Schema.optional(Schema.suspend(() => Inline28)),
  otherError: Schema.optional(Schema.suspend(() => Inline29)),
  rangeError: Schema.optional(Schema.suspend(() => Inline30)),
});

export type AdGroupServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export type AdGroupServingStatusEncoded = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const AdGroupServingStatus: Schema.Schema<AdGroupServingStatus, AdGroupServingStatusEncoded, never> = Schema.Union(Schema.Literal("ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "AD_GROUP_ARCHIVED", "AD_GROUP_INCOMPLETE", "AD_GROUP_LOW_BID", "AD_GROUP_PAUSED", "AD_GROUP_POLICING_CREATIVE_REJECTED", "AD_GROUP_POLICING_PENDING_REVIEW", "AD_GROUP_STATUS_ENABLED", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"), Schema.String);

export interface AdGroupSuccessResponseItem {
  readonly adGroup?: Inline33;
  readonly adGroupId?: string;
  readonly index: number;
}
export interface AdGroupSuccessResponseItemEncoded {
  readonly adGroup?: Inline33Encoded;
  readonly adGroupId?: string;
  readonly index: number;
}
export const AdGroupSuccessResponseItem: Schema.Schema<AdGroupSuccessResponseItem, AdGroupSuccessResponseItemEncoded, never> = Schema.Struct({
  adGroup: Schema.optional(Schema.suspend(() => Inline33)),
  adGroupId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface AdMutationError {
  readonly errorType: string;
  readonly errorValue: Inline35;
}
export interface AdMutationErrorEncoded {
  readonly errorType: string;
  readonly errorValue: Inline35Encoded;
}
export const AdMutationError: Schema.Schema<AdMutationError, AdMutationErrorEncoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline35),
});

export interface AdMutationErrorSelector {
  readonly otherError?: Inline38;
  readonly rangeError?: Inline39;
}
export interface AdMutationErrorSelectorEncoded {
  readonly otherError?: Inline38Encoded;
  readonly rangeError?: Inline39Encoded;
}
export const AdMutationErrorSelector: Schema.Schema<AdMutationErrorSelector, AdMutationErrorSelectorEncoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline38)),
  rangeError: Schema.optional(Schema.suspend(() => Inline39)),
});

export type AdServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export type AdServingStatusEncoded = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const AdServingStatus: Schema.Schema<AdServingStatus, AdServingStatusEncoded, never> = Schema.Union(Schema.Literal("ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "AD_ARCHIVED", "AD_CREATOR_CONTENT_LICENSE_EXPIRED", "AD_GROUP_ARCHIVED", "AD_GROUP_INCOMPLETE", "AD_GROUP_LOW_BID", "AD_GROUP_PAUSED", "AD_GROUP_POLICING_CREATIVE_REJECTED", "AD_GROUP_POLICING_PENDING_REVIEW", "AD_GROUP_STATUS_ENABLED", "AD_PAUSED", "AD_POLICING_PENDING_REVIEW", "AD_POLICING_SUSPENDED", "AD_STATUS_LIVE", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"), Schema.String);

export interface AdSuccessResponseItem {
  readonly ad?: Inline42;
  readonly adId?: string;
  readonly index: number;
}
export interface AdSuccessResponseItemEncoded {
  readonly ad?: Inline42Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const AdSuccessResponseItem: Schema.Schema<AdSuccessResponseItem, AdSuccessResponseItemEncoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline42)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface AssetCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface AssetCropEncoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const AssetCrop: Schema.Schema<AssetCrop, AssetCropEncoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface AssociatedBudgetRuleResponse {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface AssociatedBudgetRuleResponseEncoded {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const AssociatedBudgetRuleResponse: Schema.Schema<AssociatedBudgetRuleResponse, AssociatedBudgetRuleResponseEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface AssociatedCampaign {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export interface AssociatedCampaignEncoded {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export const AssociatedCampaign: Schema.Schema<AssociatedCampaign, AssociatedCampaignEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  campaignName: Schema.String,
  ruleStatus: Schema.String,
});

export interface AssociateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline1046>;
}
export interface AssociateSponsoredBrandsOptimizationRulesParamsEncoded {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline1046Encoded>;
}
export const AssociateSponsoredBrandsOptimizationRulesParams: Schema.Schema<AssociateSponsoredBrandsOptimizationRulesParams, AssociateSponsoredBrandsOptimizationRulesParamsEncoded, never> = Schema.Struct({
  optimizationRuleAssociations: Schema.Array(Schema.suspend(() => Inline1046)),
});

export interface AssociateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline52>;
}
export interface AssociateSponsoredBrandsOptimizationRulesRequestContentEncoded {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline52Encoded>;
}
export const AssociateSponsoredBrandsOptimizationRulesRequestContent: Schema.Schema<AssociateSponsoredBrandsOptimizationRulesRequestContent, AssociateSponsoredBrandsOptimizationRulesRequestContentEncoded, never> = Schema.Struct({
  optimizationRuleAssociations: Schema.Array(Schema.suspend(() => Inline52)),
});

export interface AssociateSponsoredBrandsOptimizationRulesResponse {

}
export interface AssociateSponsoredBrandsOptimizationRulesResponseEncoded {

}
export const AssociateSponsoredBrandsOptimizationRulesResponse: Schema.Schema<AssociateSponsoredBrandsOptimizationRulesResponse, AssociateSponsoredBrandsOptimizationRulesResponseEncoded, never> = Schema.Struct({

});

export interface AssociateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRuleAssociations: Inline54;
}
export interface AssociateSponsoredBrandsOptimizationRulesResponseContentEncoded {
  readonly optimizationRuleAssociations: Inline54Encoded;
}
export const AssociateSponsoredBrandsOptimizationRulesResponseContent: Schema.Schema<AssociateSponsoredBrandsOptimizationRulesResponseContent, AssociateSponsoredBrandsOptimizationRulesResponseContentEncoded, never> = Schema.Struct({
  optimizationRuleAssociations: Schema.suspend(() => Inline54),
});

export interface AudienceSegment {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}
export interface AudienceSegmentEncoded {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}
export const AudienceSegment: Schema.Schema<AudienceSegment, AudienceSegmentEncoded, never> = Schema.Struct({
  audienceId: Schema.optional(Schema.String),
  audienceSegmentType: Schema.optional(Schema.String),
});

export type AudienceSegmentType = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC" | string;
export type AudienceSegmentTypeEncoded = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC" | string;
export const AudienceSegmentType: Schema.Schema<AudienceSegmentType, AudienceSegmentTypeEncoded, never> = Schema.Union(Schema.Literal("BEHAVIOR_DYNAMIC", "SPONSORED_ADS_AMC"), Schema.String);

export interface BidAdjustmentByPlacement {
  readonly percentage?: number;
  readonly placement?: string;
}
export interface BidAdjustmentByPlacementEncoded {
  readonly percentage?: number;
  readonly placement?: string;
}
export const BidAdjustmentByPlacement: Schema.Schema<BidAdjustmentByPlacement, BidAdjustmentByPlacementEncoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  placement: Schema.optional(Schema.String),
});

export interface BidAdjustmentByShopperSegment {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface BidAdjustmentByShopperSegmentEncoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const BidAdjustmentByShopperSegment: Schema.Schema<BidAdjustmentByShopperSegment, BidAdjustmentByShopperSegmentEncoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Bidding {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline61>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline62>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline63>;
}
export interface BiddingEncoded {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline61Encoded>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline62Encoded>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline63Encoded>;
}
export const Bidding: Schema.Schema<Bidding, BiddingEncoded, never> = Schema.Struct({
  bidAdjustmentsByPlacement: Schema.optional(Schema.Array(Schema.suspend(() => Inline61))),
  bidAdjustmentsByShopperSegment: Schema.optional(Schema.Array(Schema.suspend(() => Inline62))),
  bidOptimization: Schema.optional(Schema.Boolean),
  bidOptimizationStrategy: Schema.optional(Schema.String),
  shopperCohortBidAdjustments: Schema.optional(Schema.Array(Schema.suspend(() => Inline63))),
});

export interface BiddingError {
  readonly cause: Inline65;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface BiddingErrorEncoded {
  readonly cause: Inline65Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const BiddingError: Schema.Schema<BiddingError, BiddingErrorEncoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline65),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export type BidOptimizationStrategy = "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS" | string;
export type BidOptimizationStrategyEncoded = "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS" | string;
export const BidOptimizationStrategy: Schema.Schema<BidOptimizationStrategy, BidOptimizationStrategyEncoded, never> = Schema.Union(Schema.Literal("MAXIMIZE_IMMEDIATE_SALES", "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS"), Schema.String);

export interface BillingError {
  readonly cause: Inline68;
  readonly message: string;
  readonly reason: string;
}
export interface BillingErrorEncoded {
  readonly cause: Inline68Encoded;
  readonly message: string;
  readonly reason: string;
}
export const BillingError: Schema.Schema<BillingError, BillingErrorEncoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline68),
  message: Schema.String,
  reason: Schema.String,
});

export interface BrandCollectionLandingPage {
  readonly pageType?: string;
  readonly url?: string;
}
export interface BrandCollectionLandingPageEncoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const BrandCollectionLandingPage: Schema.Schema<BrandCollectionLandingPage, BrandCollectionLandingPageEncoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export type BrandCollectionLandingPageType = "PRODUCT_LIST" | "STORE" | string;
export type BrandCollectionLandingPageTypeEncoded = "PRODUCT_LIST" | "STORE" | string;
export const BrandCollectionLandingPageType: Schema.Schema<BrandCollectionLandingPageType, BrandCollectionLandingPageTypeEncoded, never> = Schema.Union(Schema.Literal("PRODUCT_LIST", "STORE"), Schema.String);

export interface BrandLogoCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface BrandLogoCropEncoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const BrandLogoCrop: Schema.Schema<BrandLogoCrop, BrandLogoCropEncoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

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
export interface BrandVideoCreativeEncoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline73Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline74Encoded;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const BrandVideoCreative: Schema.Schema<BrandVideoCreative, BrandVideoCreativeEncoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline73)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline74)),
  videoAssetIds: Schema.Array(Schema.String),
});

export type BudgetChangeType = "PERCENT" | string;
export type BudgetChangeTypeEncoded = "PERCENT" | string;
export const BudgetChangeType: Schema.Schema<BudgetChangeType, BudgetChangeTypeEncoded, never> = Schema.Union(Schema.Literal("PERCENT"), Schema.String);

export interface BudgetError {
  readonly cause: Inline77;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface BudgetErrorEncoded {
  readonly cause: Inline77Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const BudgetError: Schema.Schema<BudgetError, BudgetErrorEncoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline77),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface budgetIncreaseBy {
  readonly type: string;
  readonly value: number;
}
export interface budgetIncreaseByEncoded {
  readonly type: string;
  readonly value: number;
}
export const budgetIncreaseBy: Schema.Schema<budgetIncreaseBy, budgetIncreaseByEncoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Number,
});

export interface BudgetRecommendation {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline80;
  readonly suggestedBudget: number;
}
export interface BudgetRecommendationEncoded {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline80Encoded;
  readonly suggestedBudget: number;
}
export const BudgetRecommendation: Schema.Schema<BudgetRecommendation, BudgetRecommendationEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  index: Schema.Number,
  sevenDaysMissedOpportunities: Schema.suspend(() => Inline80),
  suggestedBudget: Schema.Number,
});

export interface BudgetRecommendationError {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export interface BudgetRecommendationErrorEncoded {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export const BudgetRecommendationError: Schema.Schema<BudgetRecommendationError, BudgetRecommendationErrorEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  code: Schema.String,
  details: Schema.String,
  index: Schema.Number,
});

export interface BudgetRuleError {
  readonly code?: string;
  readonly details?: string;
}
export interface BudgetRuleErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const BudgetRuleError: Schema.Schema<BudgetRuleError, BudgetRuleErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface BudgetRuleResponse {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface BudgetRuleResponseEncoded {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const BudgetRuleResponse: Schema.Schema<BudgetRuleResponse, BudgetRuleResponseEncoded, never> = Schema.Struct({
  associatedCampaignIds: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export type BudgetType = "DAILY" | "LIFETIME" | string;
export type BudgetTypeEncoded = "DAILY" | "LIFETIME" | string;
export const BudgetType: Schema.Schema<BudgetType, BudgetTypeEncoded, never> = Schema.Union(Schema.Literal("DAILY", "LIFETIME"), Schema.String);

export interface BudgetUsageCampaign {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export interface BudgetUsageCampaignEncoded {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export const BudgetUsageCampaign: Schema.Schema<BudgetUsageCampaign, BudgetUsageCampaignEncoded, never> = Schema.Struct({
  budget: Schema.optional(Schema.Number),
  budgetUsagePercent: Schema.optional(Schema.Number),
  campaignId: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
  usageUpdatedTimestamp: Schema.optional(Schema.String),
});

export interface BudgetUsageCampaignBatchError {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export interface BudgetUsageCampaignBatchErrorEncoded {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export const BudgetUsageCampaignBatchError: Schema.Schema<BudgetUsageCampaignBatchError, BudgetUsageCampaignBatchErrorEncoded, never> = Schema.Struct({
  campaignId: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
});

export interface BudgetUsageCampaignRequest {
  readonly campaignIds?: ReadonlyArray<string>;
}
export interface BudgetUsageCampaignRequestEncoded {
  readonly campaignIds?: ReadonlyArray<string>;
}
export const BudgetUsageCampaignRequest: Schema.Schema<BudgetUsageCampaignRequest, BudgetUsageCampaignRequestEncoded, never> = Schema.Struct({
  campaignIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface BudgetUsageCampaignResponse {
  readonly error?: ReadonlyArray<Inline89>;
  readonly success?: ReadonlyArray<Inline90>;
}
export interface BudgetUsageCampaignResponseEncoded {
  readonly error?: ReadonlyArray<Inline89Encoded>;
  readonly success?: ReadonlyArray<Inline90Encoded>;
}
export const BudgetUsageCampaignResponse: Schema.Schema<BudgetUsageCampaignResponse, BudgetUsageCampaignResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline89))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline90))),
});

export interface BudgetUsageError {
  readonly code?: string;
  readonly details?: string;
}
export interface BudgetUsageErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const BudgetUsageError: Schema.Schema<BudgetUsageError, BudgetUsageErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface BulkAdGroupOperationResponse {
  readonly error?: ReadonlyArray<Inline93>;
  readonly success?: ReadonlyArray<Inline97>;
}
export interface BulkAdGroupOperationResponseEncoded {
  readonly error?: ReadonlyArray<Inline93Encoded>;
  readonly success?: ReadonlyArray<Inline97Encoded>;
}
export const BulkAdGroupOperationResponse: Schema.Schema<BulkAdGroupOperationResponse, BulkAdGroupOperationResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline93))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline97))),
});

export interface BulkAdOperationResponse {
  readonly error?: ReadonlyArray<Inline99>;
  readonly success?: ReadonlyArray<Inline101>;
}
export interface BulkAdOperationResponseEncoded {
  readonly error?: ReadonlyArray<Inline99Encoded>;
  readonly success?: ReadonlyArray<Inline101Encoded>;
}
export const BulkAdOperationResponse: Schema.Schema<BulkAdOperationResponse, BulkAdOperationResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline99))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline101))),
});

export interface BulkAssociationsOptimizationRuleResponse {
  readonly error?: ReadonlyArray<Inline108>;
  readonly success?: ReadonlyArray<Inline109>;
}
export interface BulkAssociationsOptimizationRuleResponseEncoded {
  readonly error?: ReadonlyArray<Inline108Encoded>;
  readonly success?: ReadonlyArray<Inline109Encoded>;
}
export const BulkAssociationsOptimizationRuleResponse: Schema.Schema<BulkAssociationsOptimizationRuleResponse, BulkAssociationsOptimizationRuleResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline108))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline109))),
});

export interface BulkCampaignOperationResponse {
  readonly error?: ReadonlyArray<Inline111>;
  readonly success?: ReadonlyArray<Inline117>;
}
export interface BulkCampaignOperationResponseEncoded {
  readonly error?: ReadonlyArray<Inline111Encoded>;
  readonly success?: ReadonlyArray<Inline117Encoded>;
}
export const BulkCampaignOperationResponse: Schema.Schema<BulkCampaignOperationResponse, BulkCampaignOperationResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline111))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline117))),
});

export interface BulkCreateOptimizationRuleOperationResponse {
  readonly error?: ReadonlyArray<Inline124>;
  readonly success?: ReadonlyArray<Inline125>;
}
export interface BulkCreateOptimizationRuleOperationResponseEncoded {
  readonly error?: ReadonlyArray<Inline124Encoded>;
  readonly success?: ReadonlyArray<Inline125Encoded>;
}
export const BulkCreateOptimizationRuleOperationResponse: Schema.Schema<BulkCreateOptimizationRuleOperationResponse, BulkCreateOptimizationRuleOperationResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline124))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline125))),
});

export interface BulkCreativeResponse {
  readonly error?: ReadonlyArray<Inline127>;
  readonly success?: ReadonlyArray<Inline129>;
}
export interface BulkCreativeResponseEncoded {
  readonly error?: ReadonlyArray<Inline127Encoded>;
  readonly success?: ReadonlyArray<Inline129Encoded>;
}
export const BulkCreativeResponse: Schema.Schema<BulkCreativeResponse, BulkCreativeResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline127))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline129))),
});

export interface BulkDisassociationsOptimizationRuleResponse {
  readonly error?: ReadonlyArray<Inline131>;
  readonly success?: ReadonlyArray<Inline132>;
}
export interface BulkDisassociationsOptimizationRuleResponseEncoded {
  readonly error?: ReadonlyArray<Inline131Encoded>;
  readonly success?: ReadonlyArray<Inline132Encoded>;
}
export const BulkDisassociationsOptimizationRuleResponse: Schema.Schema<BulkDisassociationsOptimizationRuleResponse, BulkDisassociationsOptimizationRuleResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline131))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline132))),
});

export interface BulkUpdateOptimizationRuleOperationResponse {
  readonly error?: ReadonlyArray<Inline134>;
  readonly success?: ReadonlyArray<Inline135>;
}
export interface BulkUpdateOptimizationRuleOperationResponseEncoded {
  readonly error?: ReadonlyArray<Inline134Encoded>;
  readonly success?: ReadonlyArray<Inline135Encoded>;
}
export const BulkUpdateOptimizationRuleOperationResponse: Schema.Schema<BulkUpdateOptimizationRuleOperationResponse, BulkUpdateOptimizationRuleOperationResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline134))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline135))),
});

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
export interface CampaignEncoded {
  readonly bidding?: Inline137Encoded;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline140Encoded;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline141Encoded;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline142Encoded;
  readonly targetedPGDealId?: string;
}
export const Campaign: Schema.Schema<Campaign, CampaignEncoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline137)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  campaignId: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  extendedData: Schema.optional(Schema.suspend(() => Inline140)),
  goal: Schema.optional(Schema.String),
  isMultiAdGroupsEnabled: Schema.optional(Schema.Boolean),
  kpi: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  ruleBasedBudget: Schema.optional(Schema.suspend(() => Inline141)),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline142)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface CampaignExtendedData {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface CampaignExtendedDataEncoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const CampaignExtendedData: Schema.Schema<CampaignExtendedData, CampaignExtendedDataEncoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface CampaignMigrationFinalStatus {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export interface CampaignMigrationFinalStatusEncoded {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export const CampaignMigrationFinalStatus: Schema.Schema<CampaignMigrationFinalStatus, CampaignMigrationFinalStatusEncoded, never> = Schema.Struct({
  legacyCampaignId: Schema.optional(Schema.String),
  migrationStatus: Schema.optional(Schema.String),
  migrationStatusReason: Schema.optional(Schema.String),
  newCampaignId: Schema.optional(Schema.String),
});

export interface CampaignMutationError {
  readonly errorType: string;
  readonly errorValue: Inline146;
}
export interface CampaignMutationErrorEncoded {
  readonly errorType: string;
  readonly errorValue: Inline146Encoded;
}
export const CampaignMutationError: Schema.Schema<CampaignMutationError, CampaignMutationErrorEncoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline146),
});

export interface CampaignMutationErrorSelector {
  readonly biddingError?: Inline153;
  readonly billingError?: Inline154;
  readonly budgetError?: Inline155;
  readonly dateError?: Inline156;
  readonly otherError?: Inline157;
  readonly rangeError?: Inline158;
}
export interface CampaignMutationErrorSelectorEncoded {
  readonly biddingError?: Inline153Encoded;
  readonly billingError?: Inline154Encoded;
  readonly budgetError?: Inline155Encoded;
  readonly dateError?: Inline156Encoded;
  readonly otherError?: Inline157Encoded;
  readonly rangeError?: Inline158Encoded;
}
export const CampaignMutationErrorSelector: Schema.Schema<CampaignMutationErrorSelector, CampaignMutationErrorSelectorEncoded, never> = Schema.Struct({
  biddingError: Schema.optional(Schema.suspend(() => Inline153)),
  billingError: Schema.optional(Schema.suspend(() => Inline154)),
  budgetError: Schema.optional(Schema.suspend(() => Inline155)),
  dateError: Schema.optional(Schema.suspend(() => Inline156)),
  otherError: Schema.optional(Schema.suspend(() => Inline157)),
  rangeError: Schema.optional(Schema.suspend(() => Inline158)),
});

export interface CampaignMutationFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline160>;
  readonly index: number;
}
export interface CampaignMutationFailureResponseItemEncoded {
  readonly errors?: ReadonlyArray<Inline160Encoded>;
  readonly index: number;
}
export const CampaignMutationFailureResponseItem: Schema.Schema<CampaignMutationFailureResponseItem, CampaignMutationFailureResponseItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline160))),
  index: Schema.Number,
});

export interface CampaignMutationSuccessResponseItem {
  readonly campaign?: Inline167;
  readonly campaignId?: string;
  readonly index: number;
}
export interface CampaignMutationSuccessResponseItemEncoded {
  readonly campaign?: Inline167Encoded;
  readonly campaignId?: string;
  readonly index: number;
}
export const CampaignMutationSuccessResponseItem: Schema.Schema<CampaignMutationSuccessResponseItem, CampaignMutationSuccessResponseItemEncoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline167)),
  campaignId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export type CampaignServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export type CampaignServingStatusEncoded = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const CampaignServingStatus: Schema.Schema<CampaignServingStatus, CampaignServingStatusEncoded, never> = Schema.Union(Schema.Literal("ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"), Schema.String);

export type CollectionType = "BUNDLE" | "THEMED" | string;
export type CollectionTypeEncoded = "BUNDLE" | "THEMED" | string;
export const CollectionType: Schema.Schema<CollectionType, CollectionTypeEncoded, never> = Schema.Union(Schema.Literal("BUNDLE", "THEMED"), Schema.String);

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export type ComparisonOperatorEncoded = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export const ComparisonOperator: Schema.Schema<ComparisonOperator, ComparisonOperatorEncoded, never> = Schema.Union(Schema.Literal("GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO"), Schema.String);

export type ConflictStateErrorCode = "CONFLICT_STATE" | string;
export type ConflictStateErrorCodeEncoded = "CONFLICT_STATE" | string;
export const ConflictStateErrorCode: Schema.Schema<ConflictStateErrorCode, ConflictStateErrorCodeEncoded, never> = Schema.Union(Schema.Literal("CONFLICT_STATE"), Schema.String);

export interface ConflictStateExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}
export interface ConflictStateExceptionResponseContentEncoded {
  readonly code: string;
  readonly message: string;
}
export const ConflictStateExceptionResponseContent: Schema.Schema<ConflictStateExceptionResponseContent, ConflictStateExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
});

export type CostControlMetric = "COST_PER_CLICK" | string;
export type CostControlMetricEncoded = "COST_PER_CLICK" | string;
export const CostControlMetric: Schema.Schema<CostControlMetric, CostControlMetricEncoded, never> = Schema.Union(Schema.Literal("COST_PER_CLICK"), Schema.String);

export interface CreateAdGroup {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export interface CreateAdGroupEncoded {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export const CreateAdGroup: Schema.Schema<CreateAdGroup, CreateAdGroupEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  name: Schema.String,
  state: Schema.String,
});

export interface CreateAssociatedBudgetRulesForSBCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export interface CreateAssociatedBudgetRulesForSBCampaignsParamsEncoded {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export const CreateAssociatedBudgetRulesForSBCampaignsParams: Schema.Schema<CreateAssociatedBudgetRulesForSBCampaignsParams, CreateAssociatedBudgetRulesForSBCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
  budgetRuleIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateAssociatedBudgetRulesForSBCampaignsResponse {

}
export interface CreateAssociatedBudgetRulesForSBCampaignsResponseEncoded {

}
export const CreateAssociatedBudgetRulesForSBCampaignsResponse: Schema.Schema<CreateAssociatedBudgetRulesForSBCampaignsResponse, CreateAssociatedBudgetRulesForSBCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface CreateAssociatedBudgetRulesRequest {
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export interface CreateAssociatedBudgetRulesRequestEncoded {
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export const CreateAssociatedBudgetRulesRequest: Schema.Schema<CreateAssociatedBudgetRulesRequest, CreateAssociatedBudgetRulesRequestEncoded, never> = Schema.Struct({
  budgetRuleIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateAssociatedBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline182>;
}
export interface CreateAssociatedBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline182Encoded>;
}
export const CreateAssociatedBudgetRulesResponse: Schema.Schema<CreateAssociatedBudgetRulesResponse, CreateAssociatedBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline182))),
});

export interface CreateAutoCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline184;
  readonly name: string;
  readonly state: string;
}
export interface CreateAutoCollectionAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline184Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateAutoCollectionAd: Schema.Schema<CreateAutoCollectionAd, CreateAutoCollectionAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline184),
  name: Schema.String,
  state: Schema.String,
});

export interface CreateAutoCollectionCreative {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline186;
  readonly brandName: string;
}
export interface CreateAutoCollectionCreativeEncoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline186Encoded;
  readonly brandName: string;
}
export const CreateAutoCollectionCreative: Schema.Schema<CreateAutoCollectionCreative, CreateAutoCollectionCreativeEncoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline186)),
  brandName: Schema.String,
});

export interface CreateBrandVideoAd {
  readonly adGroupId: string;
  readonly creative: Inline188;
  readonly landingPage: Inline189;
  readonly name: string;
  readonly state: string;
}
export interface CreateBrandVideoAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline188Encoded;
  readonly landingPage: Inline189Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateBrandVideoAd: Schema.Schema<CreateBrandVideoAd, CreateBrandVideoAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline188),
  landingPage: Schema.suspend(() => Inline189),
  name: Schema.String,
  state: Schema.String,
});

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
export interface CreateBrandVideoCreativeEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline191Encoded;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const CreateBrandVideoCreative: Schema.Schema<CreateBrandVideoCreative, CreateBrandVideoCreativeEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline191)),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateBrandVideoCreativeParams {
  readonly adId: string;
  readonly creative: Inline896;
}
export interface CreateBrandVideoCreativeParamsEncoded {
  readonly adId: string;
  readonly creative: Inline896Encoded;
}
export const CreateBrandVideoCreativeParams: Schema.Schema<CreateBrandVideoCreativeParams, CreateBrandVideoCreativeParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline896),
});

export interface CreateBrandVideoCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline193;
}
export interface CreateBrandVideoCreativeRequestContentEncoded {
  readonly adId: string;
  readonly creative: Inline193Encoded;
}
export const CreateBrandVideoCreativeRequestContent: Schema.Schema<CreateBrandVideoCreativeRequestContent, CreateBrandVideoCreativeRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline193),
});

export interface CreateBrandVideoCreativeResponse {
  readonly data: Inline899;
}
export interface CreateBrandVideoCreativeResponseEncoded {
  readonly data: Inline899Encoded;
}
export const CreateBrandVideoCreativeResponse: Schema.Schema<CreateBrandVideoCreativeResponse, CreateBrandVideoCreativeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline899),
});

export interface CreateBrandVideoCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface CreateBrandVideoCreativeResponseContentEncoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const CreateBrandVideoCreativeResponseContent: Schema.Schema<CreateBrandVideoCreativeResponseContent, CreateBrandVideoCreativeResponseContentEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface CreateBudgetRulesForSBCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline947>;
}
export interface CreateBudgetRulesForSBCampaignsParamsEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline947Encoded>;
}
export const CreateBudgetRulesForSBCampaignsParams: Schema.Schema<CreateBudgetRulesForSBCampaignsParams, CreateBudgetRulesForSBCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline947))),
});

export interface CreateBudgetRulesForSBCampaignsResponse {

}
export interface CreateBudgetRulesForSBCampaignsResponseEncoded {

}
export const CreateBudgetRulesForSBCampaignsResponse: Schema.Schema<CreateBudgetRulesForSBCampaignsResponse, CreateBudgetRulesForSBCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface CreateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline197>;
}
export interface CreateBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline197Encoded>;
}
export const CreateBudgetRulesResponse: Schema.Schema<CreateBudgetRulesResponse, CreateBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline197))),
});

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
export interface CreateCampaignEncoded {
  readonly bidding?: Inline199Encoded;
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
  readonly tags?: Inline202Encoded;
  readonly targetedPGDealId?: string;
}
export const CreateCampaign: Schema.Schema<CreateCampaign, CreateCampaignEncoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline199)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline202)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface CreateExtendedProductCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline204;
  readonly landingPage: Inline206;
  readonly name: string;
  readonly state: string;
}
export interface CreateExtendedProductCollectionAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline204Encoded;
  readonly landingPage: Inline206Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateExtendedProductCollectionAd: Schema.Schema<CreateExtendedProductCollectionAd, CreateExtendedProductCollectionAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline204),
  landingPage: Schema.suspend(() => Inline206),
  name: Schema.String,
  state: Schema.String,
});

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
export interface CreateExtendedProductCollectionCreativeEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline208Encoded;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline209Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
}
export const CreateExtendedProductCollectionCreative: Schema.Schema<CreateExtendedProductCollectionCreative, CreateExtendedProductCollectionCreativeEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline208)),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline209))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateExtendedProductCollectionCreativeParams {
  readonly adId: string;
  readonly creative: Inline923;
}
export interface CreateExtendedProductCollectionCreativeParamsEncoded {
  readonly adId: string;
  readonly creative: Inline923Encoded;
}
export const CreateExtendedProductCollectionCreativeParams: Schema.Schema<CreateExtendedProductCollectionCreativeParams, CreateExtendedProductCollectionCreativeParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline923),
});

export interface CreateExtendedProductCollectionCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline211;
}
export interface CreateExtendedProductCollectionCreativeRequestContentEncoded {
  readonly adId: string;
  readonly creative: Inline211Encoded;
}
export const CreateExtendedProductCollectionCreativeRequestContent: Schema.Schema<CreateExtendedProductCollectionCreativeRequestContent, CreateExtendedProductCollectionCreativeRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline211),
});

export interface CreateExtendedProductCollectionCreativeResponse {
  readonly data: Inline927;
}
export interface CreateExtendedProductCollectionCreativeResponseEncoded {
  readonly data: Inline927Encoded;
}
export const CreateExtendedProductCollectionCreativeResponse: Schema.Schema<CreateExtendedProductCollectionCreativeResponse, CreateExtendedProductCollectionCreativeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline927),
});

export interface CreateExtendedProductCollectionCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface CreateExtendedProductCollectionCreativeResponseContentEncoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const CreateExtendedProductCollectionCreativeResponseContent: Schema.Schema<CreateExtendedProductCollectionCreativeResponseContent, CreateExtendedProductCollectionCreativeResponseContentEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface CreateManualCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline216;
  readonly name: string;
  readonly state: string;
}
export interface CreateManualCollectionAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline216Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateManualCollectionAd: Schema.Schema<CreateManualCollectionAd, CreateManualCollectionAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline216),
  name: Schema.String,
  state: Schema.String,
});

export interface CreateManualCollectionCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline219;
  readonly brandName: string;
  readonly landingPage?: Inline220;
  readonly title?: string;
}
export interface CreateManualCollectionCreativeEncoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline219Encoded;
  readonly brandName: string;
  readonly landingPage?: Inline220Encoded;
  readonly title?: string;
}
export const CreateManualCollectionCreative: Schema.Schema<CreateManualCollectionCreative, CreateManualCollectionCreativeEncoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline219)),
  brandName: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline220)),
  title: Schema.optional(Schema.String),
});

export interface CreateOptimizationRule {
  readonly conditions?: ReadonlyArray<Inline222>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface CreateOptimizationRuleEncoded {
  readonly conditions?: ReadonlyArray<Inline222Encoded>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export const CreateOptimizationRule: Schema.Schema<CreateOptimizationRule, CreateOptimizationRuleEncoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline222))),
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface CreateOptimizationRuleSuccessResponseItem {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline224;
  readonly optimizationRuleId: string;
}
export interface CreateOptimizationRuleSuccessResponseItemEncoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline224Encoded;
  readonly optimizationRuleId: string;
}
export const CreateOptimizationRuleSuccessResponseItem: Schema.Schema<CreateOptimizationRuleSuccessResponseItem, CreateOptimizationRuleSuccessResponseItemEncoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline224),
  optimizationRuleId: Schema.String,
});

export type CreateOrUpdateEntityState = "ENABLED" | "PAUSED" | "PROPOSED" | string;
export type CreateOrUpdateEntityStateEncoded = "ENABLED" | "PAUSED" | "PROPOSED" | string;
export const CreateOrUpdateEntityState: Schema.Schema<CreateOrUpdateEntityState, CreateOrUpdateEntityStateEncoded, never> = Schema.Union(Schema.Literal("ENABLED", "PAUSED", "PROPOSED"), Schema.String);

export interface CreateProductCollectionAd {
  readonly adGroupId: string;
  readonly creative: Inline227;
  readonly landingPage: Inline229;
  readonly name: string;
  readonly state: string;
}
export interface CreateProductCollectionAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline227Encoded;
  readonly landingPage: Inline229Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateProductCollectionAd: Schema.Schema<CreateProductCollectionAd, CreateProductCollectionAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline227),
  landingPage: Schema.suspend(() => Inline229),
  name: Schema.String,
  state: Schema.String,
});

export interface CreateProductCollectionCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline231;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline232;
  readonly headline?: string;
}
export interface CreateProductCollectionCreativeEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline231Encoded;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline232Encoded;
  readonly headline?: string;
}
export const CreateProductCollectionCreative: Schema.Schema<CreateProductCollectionCreative, CreateProductCollectionCreativeEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline231)),
  brandName: Schema.optional(Schema.String),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline232)),
  headline: Schema.optional(Schema.String),
});

export interface CreateProductCollectionCreativeParams {
  readonly adId: string;
  readonly creative: Inline916;
}
export interface CreateProductCollectionCreativeParamsEncoded {
  readonly adId: string;
  readonly creative: Inline916Encoded;
}
export const CreateProductCollectionCreativeParams: Schema.Schema<CreateProductCollectionCreativeParams, CreateProductCollectionCreativeParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline916),
});

export interface CreateProductCollectionCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline234;
}
export interface CreateProductCollectionCreativeRequestContentEncoded {
  readonly adId: string;
  readonly creative: Inline234Encoded;
}
export const CreateProductCollectionCreativeRequestContent: Schema.Schema<CreateProductCollectionCreativeRequestContent, CreateProductCollectionCreativeRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline234),
});

export interface CreateProductCollectionCreativeResponse {
  readonly data: Inline919;
}
export interface CreateProductCollectionCreativeResponseEncoded {
  readonly data: Inline919Encoded;
}
export const CreateProductCollectionCreativeResponse: Schema.Schema<CreateProductCollectionCreativeResponse, CreateProductCollectionCreativeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline919),
});

export interface CreateProductCollectionCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface CreateProductCollectionCreativeResponseContentEncoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const CreateProductCollectionCreativeResponseContent: Schema.Schema<CreateProductCollectionCreativeResponseContent, CreateProductCollectionCreativeResponseContentEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface CreateSBBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline238>;
}
export interface CreateSBBudgetRulesRequestEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline238Encoded>;
}
export const CreateSBBudgetRulesRequest: Schema.Schema<CreateSBBudgetRulesRequest, CreateSBBudgetRulesRequestEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline238))),
});

export interface CreateSponsoredBrandsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline1077>;
}
export interface CreateSponsoredBrandsAdGroupsParamsEncoded {
  readonly adGroups: ReadonlyArray<Inline1077Encoded>;
}
export const CreateSponsoredBrandsAdGroupsParams: Schema.Schema<CreateSponsoredBrandsAdGroupsParams, CreateSponsoredBrandsAdGroupsParamsEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline1077)),
});

export interface CreateSponsoredBrandsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline244>;
}
export interface CreateSponsoredBrandsAdGroupsRequestContentEncoded {
  readonly adGroups: ReadonlyArray<Inline244Encoded>;
}
export const CreateSponsoredBrandsAdGroupsRequestContent: Schema.Schema<CreateSponsoredBrandsAdGroupsRequestContent, CreateSponsoredBrandsAdGroupsRequestContentEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline244)),
});

export interface CreateSponsoredBrandsAdGroupsResponse {

}
export interface CreateSponsoredBrandsAdGroupsResponseEncoded {

}
export const CreateSponsoredBrandsAdGroupsResponse: Schema.Schema<CreateSponsoredBrandsAdGroupsResponse, CreateSponsoredBrandsAdGroupsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline246;
}
export interface CreateSponsoredBrandsAdGroupsResponseContentEncoded {
  readonly adGroups?: Inline246Encoded;
}
export const CreateSponsoredBrandsAdGroupsResponseContent: Schema.Schema<CreateSponsoredBrandsAdGroupsResponseContent, CreateSponsoredBrandsAdGroupsResponseContentEncoded, never> = Schema.Struct({
  adGroups: Schema.optional(Schema.suspend(() => Inline246)),
});

export interface CreateSponsoredBrandsAutoCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1104>;
}
export interface CreateSponsoredBrandsAutoCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1104Encoded>;
}
export const CreateSponsoredBrandsAutoCollectionAdsParams: Schema.Schema<CreateSponsoredBrandsAutoCollectionAdsParams, CreateSponsoredBrandsAutoCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1104)),
});

export interface CreateSponsoredBrandsAutoCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline252>;
}
export interface CreateSponsoredBrandsAutoCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline252Encoded>;
}
export const CreateSponsoredBrandsAutoCollectionAdsRequestContent: Schema.Schema<CreateSponsoredBrandsAutoCollectionAdsRequestContent, CreateSponsoredBrandsAutoCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline252)),
});

export interface CreateSponsoredBrandsAutoCollectionAdsResponse {

}
export interface CreateSponsoredBrandsAutoCollectionAdsResponseEncoded {

}
export const CreateSponsoredBrandsAutoCollectionAdsResponse: Schema.Schema<CreateSponsoredBrandsAutoCollectionAdsResponse, CreateSponsoredBrandsAutoCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsAutoCollectionAdsResponseContent {
  readonly ads?: Inline254;
}
export interface CreateSponsoredBrandsAutoCollectionAdsResponseContentEncoded {
  readonly ads?: Inline254Encoded;
}
export const CreateSponsoredBrandsAutoCollectionAdsResponseContent: Schema.Schema<CreateSponsoredBrandsAutoCollectionAdsResponseContent, CreateSponsoredBrandsAutoCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline254)),
});

export interface CreateSponsoredBrandsBrandVideoAdsParams {
  readonly ads: ReadonlyArray<Inline1108>;
}
export interface CreateSponsoredBrandsBrandVideoAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1108Encoded>;
}
export const CreateSponsoredBrandsBrandVideoAdsParams: Schema.Schema<CreateSponsoredBrandsBrandVideoAdsParams, CreateSponsoredBrandsBrandVideoAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1108)),
});

export interface CreateSponsoredBrandsBrandVideoAdsRequestContent {
  readonly ads: ReadonlyArray<Inline263>;
}
export interface CreateSponsoredBrandsBrandVideoAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline263Encoded>;
}
export const CreateSponsoredBrandsBrandVideoAdsRequestContent: Schema.Schema<CreateSponsoredBrandsBrandVideoAdsRequestContent, CreateSponsoredBrandsBrandVideoAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline263)),
});

export interface CreateSponsoredBrandsBrandVideoAdsResponse {

}
export interface CreateSponsoredBrandsBrandVideoAdsResponseEncoded {

}
export const CreateSponsoredBrandsBrandVideoAdsResponse: Schema.Schema<CreateSponsoredBrandsBrandVideoAdsResponse, CreateSponsoredBrandsBrandVideoAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsBrandVideoAdsResponseContent {
  readonly ads?: Inline266;
}
export interface CreateSponsoredBrandsBrandVideoAdsResponseContentEncoded {
  readonly ads?: Inline266Encoded;
}
export const CreateSponsoredBrandsBrandVideoAdsResponseContent: Schema.Schema<CreateSponsoredBrandsBrandVideoAdsResponseContent, CreateSponsoredBrandsBrandVideoAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline266)),
});

export interface CreateSponsoredBrandsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline1170>;
}
export interface CreateSponsoredBrandsCampaignsParamsEncoded {
  readonly campaigns: ReadonlyArray<Inline1170Encoded>;
}
export const CreateSponsoredBrandsCampaignsParams: Schema.Schema<CreateSponsoredBrandsCampaignsParams, CreateSponsoredBrandsCampaignsParamsEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline1170)),
});

export interface CreateSponsoredBrandsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline275>;
}
export interface CreateSponsoredBrandsCampaignsRequestContentEncoded {
  readonly campaigns: ReadonlyArray<Inline275Encoded>;
}
export const CreateSponsoredBrandsCampaignsRequestContent: Schema.Schema<CreateSponsoredBrandsCampaignsRequestContent, CreateSponsoredBrandsCampaignsRequestContentEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline275)),
});

export interface CreateSponsoredBrandsCampaignsResponse {

}
export interface CreateSponsoredBrandsCampaignsResponseEncoded {

}
export const CreateSponsoredBrandsCampaignsResponse: Schema.Schema<CreateSponsoredBrandsCampaignsResponse, CreateSponsoredBrandsCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline280;
}
export interface CreateSponsoredBrandsCampaignsResponseContentEncoded {
  readonly campaigns?: Inline280Encoded;
}
export const CreateSponsoredBrandsCampaignsResponseContent: Schema.Schema<CreateSponsoredBrandsCampaignsResponseContent, CreateSponsoredBrandsCampaignsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.suspend(() => Inline280)),
});

export interface CreateSponsoredBrandsExtendedProductCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1150>;
}
export interface CreateSponsoredBrandsExtendedProductCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1150Encoded>;
}
export const CreateSponsoredBrandsExtendedProductCollectionAdsParams: Schema.Schema<CreateSponsoredBrandsExtendedProductCollectionAdsParams, CreateSponsoredBrandsExtendedProductCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1150)),
});

export interface CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline293>;
}
export interface CreateSponsoredBrandsExtendedProductCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline293Encoded>;
}
export const CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent: Schema.Schema<CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent, CreateSponsoredBrandsExtendedProductCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline293)),
});

export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponse {

}
export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponseEncoded {

}
export const CreateSponsoredBrandsExtendedProductCollectionAdsResponse: Schema.Schema<CreateSponsoredBrandsExtendedProductCollectionAdsResponse, CreateSponsoredBrandsExtendedProductCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent {
  readonly ads?: Inline297;
}
export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponseContentEncoded {
  readonly ads?: Inline297Encoded;
}
export const CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent: Schema.Schema<CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent, CreateSponsoredBrandsExtendedProductCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline297)),
});

export interface CreateSponsoredBrandsManualCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1136>;
}
export interface CreateSponsoredBrandsManualCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1136Encoded>;
}
export const CreateSponsoredBrandsManualCollectionAdsParams: Schema.Schema<CreateSponsoredBrandsManualCollectionAdsParams, CreateSponsoredBrandsManualCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1136)),
});

export interface CreateSponsoredBrandsManualCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline306>;
}
export interface CreateSponsoredBrandsManualCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline306Encoded>;
}
export const CreateSponsoredBrandsManualCollectionAdsRequestContent: Schema.Schema<CreateSponsoredBrandsManualCollectionAdsRequestContent, CreateSponsoredBrandsManualCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline306)),
});

export interface CreateSponsoredBrandsManualCollectionAdsResponse {

}
export interface CreateSponsoredBrandsManualCollectionAdsResponseEncoded {

}
export const CreateSponsoredBrandsManualCollectionAdsResponse: Schema.Schema<CreateSponsoredBrandsManualCollectionAdsResponse, CreateSponsoredBrandsManualCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsManualCollectionAdsResponseContent {
  readonly ads?: Inline309;
}
export interface CreateSponsoredBrandsManualCollectionAdsResponseContentEncoded {
  readonly ads?: Inline309Encoded;
}
export const CreateSponsoredBrandsManualCollectionAdsResponseContent: Schema.Schema<CreateSponsoredBrandsManualCollectionAdsResponseContent, CreateSponsoredBrandsManualCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline309)),
});

export interface CreateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline1038>;
}
export interface CreateSponsoredBrandsOptimizationRulesParamsEncoded {
  readonly optimizationRules: ReadonlyArray<Inline1038Encoded>;
}
export const CreateSponsoredBrandsOptimizationRulesParams: Schema.Schema<CreateSponsoredBrandsOptimizationRulesParams, CreateSponsoredBrandsOptimizationRulesParamsEncoded, never> = Schema.Struct({
  optimizationRules: Schema.Array(Schema.suspend(() => Inline1038)),
});

export interface CreateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRules: ReadonlyArray<Inline318>;
}
export interface CreateSponsoredBrandsOptimizationRulesRequestContentEncoded {
  readonly optimizationRules: ReadonlyArray<Inline318Encoded>;
}
export const CreateSponsoredBrandsOptimizationRulesRequestContent: Schema.Schema<CreateSponsoredBrandsOptimizationRulesRequestContent, CreateSponsoredBrandsOptimizationRulesRequestContentEncoded, never> = Schema.Struct({
  optimizationRules: Schema.Array(Schema.suspend(() => Inline318)),
});

export interface CreateSponsoredBrandsOptimizationRulesResponse {

}
export interface CreateSponsoredBrandsOptimizationRulesResponseEncoded {

}
export const CreateSponsoredBrandsOptimizationRulesResponse: Schema.Schema<CreateSponsoredBrandsOptimizationRulesResponse, CreateSponsoredBrandsOptimizationRulesResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRules: Inline320;
}
export interface CreateSponsoredBrandsOptimizationRulesResponseContentEncoded {
  readonly optimizationRules: Inline320Encoded;
}
export const CreateSponsoredBrandsOptimizationRulesResponseContent: Schema.Schema<CreateSponsoredBrandsOptimizationRulesResponseContent, CreateSponsoredBrandsOptimizationRulesResponseContentEncoded, never> = Schema.Struct({
  optimizationRules: Schema.suspend(() => Inline320),
});

export interface CreateSponsoredBrandsProductCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline1142>;
}
export interface CreateSponsoredBrandsProductCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1142Encoded>;
}
export const CreateSponsoredBrandsProductCollectionAdsParams: Schema.Schema<CreateSponsoredBrandsProductCollectionAdsParams, CreateSponsoredBrandsProductCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1142)),
});

export interface CreateSponsoredBrandsProductCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline323>;
}
export interface CreateSponsoredBrandsProductCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline323Encoded>;
}
export const CreateSponsoredBrandsProductCollectionAdsRequestContent: Schema.Schema<CreateSponsoredBrandsProductCollectionAdsRequestContent, CreateSponsoredBrandsProductCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline323)),
});

export interface CreateSponsoredBrandsProductCollectionAdsResponse {

}
export interface CreateSponsoredBrandsProductCollectionAdsResponseEncoded {

}
export const CreateSponsoredBrandsProductCollectionAdsResponse: Schema.Schema<CreateSponsoredBrandsProductCollectionAdsResponse, CreateSponsoredBrandsProductCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsProductCollectionAdsResponseContent {
  readonly ads?: Inline327;
}
export interface CreateSponsoredBrandsProductCollectionAdsResponseContentEncoded {
  readonly ads?: Inline327Encoded;
}
export const CreateSponsoredBrandsProductCollectionAdsResponseContent: Schema.Schema<CreateSponsoredBrandsProductCollectionAdsResponseContent, CreateSponsoredBrandsProductCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline327)),
});

export interface CreateSponsoredBrandStoreSpotlightAdsParams {
  readonly ads: ReadonlyArray<Inline1158>;
}
export interface CreateSponsoredBrandStoreSpotlightAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1158Encoded>;
}
export const CreateSponsoredBrandStoreSpotlightAdsParams: Schema.Schema<CreateSponsoredBrandStoreSpotlightAdsParams, CreateSponsoredBrandStoreSpotlightAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1158)),
});

export interface CreateSponsoredBrandStoreSpotlightAdsRequestContent {
  readonly ads: ReadonlyArray<Inline336>;
}
export interface CreateSponsoredBrandStoreSpotlightAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline336Encoded>;
}
export const CreateSponsoredBrandStoreSpotlightAdsRequestContent: Schema.Schema<CreateSponsoredBrandStoreSpotlightAdsRequestContent, CreateSponsoredBrandStoreSpotlightAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline336)),
});

export interface CreateSponsoredBrandStoreSpotlightAdsResponse {

}
export interface CreateSponsoredBrandStoreSpotlightAdsResponseEncoded {

}
export const CreateSponsoredBrandStoreSpotlightAdsResponse: Schema.Schema<CreateSponsoredBrandStoreSpotlightAdsResponse, CreateSponsoredBrandStoreSpotlightAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandStoreSpotlightAdsResponseContent {
  readonly ads?: Inline340;
}
export interface CreateSponsoredBrandStoreSpotlightAdsResponseContentEncoded {
  readonly ads?: Inline340Encoded;
}
export const CreateSponsoredBrandStoreSpotlightAdsResponseContent: Schema.Schema<CreateSponsoredBrandStoreSpotlightAdsResponseContent, CreateSponsoredBrandStoreSpotlightAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline340)),
});

export interface CreateSponsoredBrandsVideoAdsParams {
  readonly ads: ReadonlyArray<Inline1166>;
}
export interface CreateSponsoredBrandsVideoAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1166Encoded>;
}
export const CreateSponsoredBrandsVideoAdsParams: Schema.Schema<CreateSponsoredBrandsVideoAdsParams, CreateSponsoredBrandsVideoAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1166)),
});

export interface CreateSponsoredBrandsVideoAdsRequestContent {
  readonly ads: ReadonlyArray<Inline349>;
}
export interface CreateSponsoredBrandsVideoAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline349Encoded>;
}
export const CreateSponsoredBrandsVideoAdsRequestContent: Schema.Schema<CreateSponsoredBrandsVideoAdsRequestContent, CreateSponsoredBrandsVideoAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline349)),
});

export interface CreateSponsoredBrandsVideoAdsResponse {

}
export interface CreateSponsoredBrandsVideoAdsResponseEncoded {

}
export const CreateSponsoredBrandsVideoAdsResponse: Schema.Schema<CreateSponsoredBrandsVideoAdsResponse, CreateSponsoredBrandsVideoAdsResponseEncoded, never> = Schema.Struct({

});

export interface CreateSponsoredBrandsVideoAdsResponseContent {
  readonly ads?: Inline351;
}
export interface CreateSponsoredBrandsVideoAdsResponseContentEncoded {
  readonly ads?: Inline351Encoded;
}
export const CreateSponsoredBrandsVideoAdsResponseContent: Schema.Schema<CreateSponsoredBrandsVideoAdsResponseContent, CreateSponsoredBrandsVideoAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline351)),
});

export interface CreateStoreSpotlightAd {
  readonly adGroupId: string;
  readonly creative: Inline360;
  readonly landingPage: Inline362;
  readonly name: string;
  readonly state: string;
}
export interface CreateStoreSpotlightAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline360Encoded;
  readonly landingPage: Inline362Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateStoreSpotlightAd: Schema.Schema<CreateStoreSpotlightAd, CreateStoreSpotlightAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline360),
  landingPage: Schema.suspend(() => Inline362),
  name: Schema.String,
  state: Schema.String,
});

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
export interface CreateStoreSpotlightCreativeEncoded {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline364Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline365Encoded>;
}
export const CreateStoreSpotlightCreative: Schema.Schema<CreateStoreSpotlightCreative, CreateStoreSpotlightCreativeEncoded, never> = Schema.Struct({
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline364)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline365))),
});

export interface CreateStoreSpotlightCreativeParams {
  readonly adId: string;
  readonly creative: Inline932;
}
export interface CreateStoreSpotlightCreativeParamsEncoded {
  readonly adId: string;
  readonly creative: Inline932Encoded;
}
export const CreateStoreSpotlightCreativeParams: Schema.Schema<CreateStoreSpotlightCreativeParams, CreateStoreSpotlightCreativeParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline932),
});

export interface CreateStoreSpotlightCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline367;
}
export interface CreateStoreSpotlightCreativeRequestContentEncoded {
  readonly adId: string;
  readonly creative: Inline367Encoded;
}
export const CreateStoreSpotlightCreativeRequestContent: Schema.Schema<CreateStoreSpotlightCreativeRequestContent, CreateStoreSpotlightCreativeRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline367),
});

export interface CreateStoreSpotlightCreativeResponse {
  readonly data: Inline936;
}
export interface CreateStoreSpotlightCreativeResponseEncoded {
  readonly data: Inline936Encoded;
}
export const CreateStoreSpotlightCreativeResponse: Schema.Schema<CreateStoreSpotlightCreativeResponse, CreateStoreSpotlightCreativeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline936),
});

export interface CreateStoreSpotlightCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface CreateStoreSpotlightCreativeResponseContentEncoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const CreateStoreSpotlightCreativeResponseContent: Schema.Schema<CreateStoreSpotlightCreativeResponseContent, CreateStoreSpotlightCreativeResponseContentEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface CreateVideoAd {
  readonly adGroupId: string;
  readonly creative: Inline372;
  readonly name: string;
  readonly state: string;
}
export interface CreateVideoAdEncoded {
  readonly adGroupId: string;
  readonly creative: Inline372Encoded;
  readonly name: string;
  readonly state: string;
}
export const CreateVideoAd: Schema.Schema<CreateVideoAd, CreateVideoAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline372),
  name: Schema.String,
  state: Schema.String,
});

export interface CreateVideoCreative {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline374;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export interface CreateVideoCreativeEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline374Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const CreateVideoCreative: Schema.Schema<CreateVideoCreative, CreateVideoCreativeEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline374)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateVideoCreativeParams {
  readonly adId: string;
  readonly creative: Inline941;
}
export interface CreateVideoCreativeParamsEncoded {
  readonly adId: string;
  readonly creative: Inline941Encoded;
}
export const CreateVideoCreativeParams: Schema.Schema<CreateVideoCreativeParams, CreateVideoCreativeParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline941),
});

export interface CreateVideoCreativeRequestContent {
  readonly adId: string;
  readonly creative: Inline376;
}
export interface CreateVideoCreativeRequestContentEncoded {
  readonly adId: string;
  readonly creative: Inline376Encoded;
}
export const CreateVideoCreativeRequestContent: Schema.Schema<CreateVideoCreativeRequestContent, CreateVideoCreativeRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline376),
});

export interface CreateVideoCreativeResponse {
  readonly data: Inline943;
}
export interface CreateVideoCreativeResponseEncoded {
  readonly data: Inline943Encoded;
}
export const CreateVideoCreativeResponse: Schema.Schema<CreateVideoCreativeResponse, CreateVideoCreativeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline943),
});

export interface CreateVideoCreativeResponseContent {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface CreateVideoCreativeResponseContentEncoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const CreateVideoCreativeResponseContent: Schema.Schema<CreateVideoCreativeResponseContent, CreateVideoCreativeResponseContentEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

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
export interface CreativeEncoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline379Encoded;
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
  readonly customImageCrop?: Inline380Encoded;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline381Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline382Encoded>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Creative: Schema.Schema<Creative, CreativeEncoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline379)),
  brandLogoUrl: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  creativeStatus: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline380)),
  customImageUrl: Schema.optional(Schema.String),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline381))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  originalHeadline: Schema.optional(Schema.String),
  originalHeadlines: Schema.optional(Schema.Array(Schema.String)),
  originalVideoAssetIds: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline382))),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreativeFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline384>;
  readonly index: number;
}
export interface CreativeFailureResponseItemEncoded {
  readonly errors?: ReadonlyArray<Inline384Encoded>;
  readonly index: number;
}
export const CreativeFailureResponseItem: Schema.Schema<CreativeFailureResponseItem, CreativeFailureResponseItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline384))),
  index: Schema.Number,
});

export interface CreativeLandingPage {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export interface CreativeLandingPageEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export const CreativeLandingPage: Schema.Schema<CreativeLandingPage, CreativeLandingPageEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export type CreativeLandingPageType = "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN" | string;
export type CreativeLandingPageTypeEncoded = "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN" | string;
export const CreativeLandingPageType: Schema.Schema<CreativeLandingPageType, CreativeLandingPageTypeEncoded, never> = Schema.Union(Schema.Literal("ADVERTISING_LANDING_PAGE", "AD_LANDING_PREVIEW", "BROWSE", "CUSTOM_URL", "DETAIL_PAGE", "PRODUCT_LIST", "SEARCH", "STORE", "UNKNOWN"), Schema.String);

export interface CreativeLandingPageV2 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface CreativeLandingPageV2Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const CreativeLandingPageV2: Schema.Schema<CreativeLandingPageV2, CreativeLandingPageV2Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface CreativeMutationError {
  readonly errorType: string;
  readonly errorValue: Inline390;
}
export interface CreativeMutationErrorEncoded {
  readonly errorType: string;
  readonly errorValue: Inline390Encoded;
}
export const CreativeMutationError: Schema.Schema<CreativeMutationError, CreativeMutationErrorEncoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline390),
});

export interface CreativeMutationErrorSelector {
  readonly otherError?: Inline393;
  readonly rangeError?: Inline394;
}
export interface CreativeMutationErrorSelectorEncoded {
  readonly otherError?: Inline393Encoded;
  readonly rangeError?: Inline394Encoded;
}
export const CreativeMutationErrorSelector: Schema.Schema<CreativeMutationErrorSelector, CreativeMutationErrorSelectorEncoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline393)),
  rangeError: Schema.optional(Schema.suspend(() => Inline394)),
});

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
export interface CreativePropertiesEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline396Encoded;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline397Encoded;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline398Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline399Encoded;
  readonly layout?: string;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline400Encoded>;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const CreativeProperties: Schema.Schema<CreativeProperties, CreativePropertiesEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline396)),
  brandLogoUrl: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline397)),
  customImageUrl: Schema.optional(Schema.String),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline398))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline399)),
  layout: Schema.optional(Schema.String),
  originalHeadline: Schema.optional(Schema.String),
  originalHeadlines: Schema.optional(Schema.Array(Schema.String)),
  originalVideoAssetIds: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline400))),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export type CreativePropertyToOptimize = "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE" | string;
export type CreativePropertyToOptimizeEncoded = "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE" | string;
export const CreativePropertyToOptimize: Schema.Schema<CreativePropertyToOptimize, CreativePropertyToOptimizeEncoded, never> = Schema.Union(Schema.Literal("ADVERTISED_PRODUCT", "CUSTOM_IMAGE", "HEADLINE"), Schema.String);

export type CreativeStatus = "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION" | string;
export type CreativeStatusEncoded = "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION" | string;
export const CreativeStatus: Schema.Schema<CreativeStatus, CreativeStatusEncoded, never> = Schema.Union(Schema.Literal("APPROVED_BY_MODERATION", "PENDING_MODERATION_REVIEW", "PENDING_TRANSLATION", "PROPOSED", "PUBLISHED", "REJECTED_BY_MODERATION", "SUBMITTED_FOR_MODERATION"), Schema.String);

export interface CreativeSuccessResponseItem {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export interface CreativeSuccessResponseItemEncoded {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export const CreativeSuccessResponseItem: Schema.Schema<CreativeSuccessResponseItem, CreativeSuccessResponseItemEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeVersion: Schema.optional(Schema.String),
  index: Schema.Number,
});

export type CreativeType = "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export type CreativeTypeEncoded = "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const CreativeType: Schema.Schema<CreativeType, CreativeTypeEncoded, never> = Schema.Union(Schema.Literal("AUTO_COLLECTION", "BRAND_VIDEO", "MANUAL_COLLECTION", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"), Schema.String);

export interface CustomImage {
  readonly assetId?: string;
  readonly crop?: Inline406;
  readonly url?: string;
}
export interface CustomImageEncoded {
  readonly assetId?: string;
  readonly crop?: Inline406Encoded;
  readonly url?: string;
}
export const CustomImage: Schema.Schema<CustomImage, CustomImageEncoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline406)),
  url: Schema.optional(Schema.String),
});

export interface CustomImageCrop {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface CustomImageCropEncoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const CustomImageCrop: Schema.Schema<CustomImageCrop, CustomImageCropEncoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface DateError {
  readonly cause: Inline409;
  readonly message: string;
  readonly reason: string;
}
export interface DateErrorEncoded {
  readonly cause: Inline409Encoded;
  readonly message: string;
  readonly reason: string;
}
export const DateError: Schema.Schema<DateError, DateErrorEncoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline409),
  message: Schema.String,
  reason: Schema.String,
});

export interface DateRangeTypeRuleDuration {
  readonly endDate?: string;
  readonly startDate: string;
}
export interface DateRangeTypeRuleDurationEncoded {
  readonly endDate?: string;
  readonly startDate: string;
}
export const DateRangeTypeRuleDuration: Schema.Schema<DateRangeTypeRuleDuration, DateRangeTypeRuleDurationEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  startDate: Schema.String,
});

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;
export type DayOfWeekEncoded = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;
export const DayOfWeek: Schema.Schema<DayOfWeek, DayOfWeekEncoded, never> = Schema.Union(Schema.Literal("FRIDAY", "MONDAY", "SATURDAY", "SUNDAY", "THURSDAY", "TUESDAY", "WEDNESDAY"), Schema.String);

export interface DeleteSponsoredBrandsAdGroupsParams {
  readonly adGroupIdFilter?: Inline1085;
}
export interface DeleteSponsoredBrandsAdGroupsParamsEncoded {
  readonly adGroupIdFilter?: Inline1085Encoded;
}
export const DeleteSponsoredBrandsAdGroupsParams: Schema.Schema<DeleteSponsoredBrandsAdGroupsParams, DeleteSponsoredBrandsAdGroupsParamsEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline1085)),
});

export interface DeleteSponsoredBrandsAdGroupsRequestContent {
  readonly adGroupIdFilter?: Inline413;
}
export interface DeleteSponsoredBrandsAdGroupsRequestContentEncoded {
  readonly adGroupIdFilter?: Inline413Encoded;
}
export const DeleteSponsoredBrandsAdGroupsRequestContent: Schema.Schema<DeleteSponsoredBrandsAdGroupsRequestContent, DeleteSponsoredBrandsAdGroupsRequestContentEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline413)),
});

export interface DeleteSponsoredBrandsAdGroupsResponse {

}
export interface DeleteSponsoredBrandsAdGroupsResponseEncoded {

}
export const DeleteSponsoredBrandsAdGroupsResponse: Schema.Schema<DeleteSponsoredBrandsAdGroupsResponse, DeleteSponsoredBrandsAdGroupsResponseEncoded, never> = Schema.Struct({

});

export interface DeleteSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline415;
}
export interface DeleteSponsoredBrandsAdGroupsResponseContentEncoded {
  readonly adGroups?: Inline415Encoded;
}
export const DeleteSponsoredBrandsAdGroupsResponseContent: Schema.Schema<DeleteSponsoredBrandsAdGroupsResponseContent, DeleteSponsoredBrandsAdGroupsResponseContentEncoded, never> = Schema.Struct({
  adGroups: Schema.optional(Schema.suspend(() => Inline415)),
});

export interface DeleteSponsoredBrandsAdsParams {
  readonly adIdFilter?: Inline1114;
}
export interface DeleteSponsoredBrandsAdsParamsEncoded {
  readonly adIdFilter?: Inline1114Encoded;
}
export const DeleteSponsoredBrandsAdsParams: Schema.Schema<DeleteSponsoredBrandsAdsParams, DeleteSponsoredBrandsAdsParamsEncoded, never> = Schema.Struct({
  adIdFilter: Schema.optional(Schema.suspend(() => Inline1114)),
});

export interface DeleteSponsoredBrandsAdsRequestContent {
  readonly adIdFilter?: Inline421;
}
export interface DeleteSponsoredBrandsAdsRequestContentEncoded {
  readonly adIdFilter?: Inline421Encoded;
}
export const DeleteSponsoredBrandsAdsRequestContent: Schema.Schema<DeleteSponsoredBrandsAdsRequestContent, DeleteSponsoredBrandsAdsRequestContentEncoded, never> = Schema.Struct({
  adIdFilter: Schema.optional(Schema.suspend(() => Inline421)),
});

export interface DeleteSponsoredBrandsAdsResponse {

}
export interface DeleteSponsoredBrandsAdsResponseEncoded {

}
export const DeleteSponsoredBrandsAdsResponse: Schema.Schema<DeleteSponsoredBrandsAdsResponse, DeleteSponsoredBrandsAdsResponseEncoded, never> = Schema.Struct({

});

export interface DeleteSponsoredBrandsAdsResponseContent {
  readonly ads?: Inline423;
}
export interface DeleteSponsoredBrandsAdsResponseContentEncoded {
  readonly ads?: Inline423Encoded;
}
export const DeleteSponsoredBrandsAdsResponseContent: Schema.Schema<DeleteSponsoredBrandsAdsResponseContent, DeleteSponsoredBrandsAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline423)),
});

export interface DeleteSponsoredBrandsCampaignsParams {
  readonly campaignIdFilter?: Inline1190;
}
export interface DeleteSponsoredBrandsCampaignsParamsEncoded {
  readonly campaignIdFilter?: Inline1190Encoded;
}
export const DeleteSponsoredBrandsCampaignsParams: Schema.Schema<DeleteSponsoredBrandsCampaignsParams, DeleteSponsoredBrandsCampaignsParamsEncoded, never> = Schema.Struct({
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline1190)),
});

export interface DeleteSponsoredBrandsCampaignsRequestContent {
  readonly campaignIdFilter?: Inline432;
}
export interface DeleteSponsoredBrandsCampaignsRequestContentEncoded {
  readonly campaignIdFilter?: Inline432Encoded;
}
export const DeleteSponsoredBrandsCampaignsRequestContent: Schema.Schema<DeleteSponsoredBrandsCampaignsRequestContent, DeleteSponsoredBrandsCampaignsRequestContentEncoded, never> = Schema.Struct({
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline432)),
});

export interface DeleteSponsoredBrandsCampaignsResponse {

}
export interface DeleteSponsoredBrandsCampaignsResponseEncoded {

}
export const DeleteSponsoredBrandsCampaignsResponse: Schema.Schema<DeleteSponsoredBrandsCampaignsResponse, DeleteSponsoredBrandsCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface DeleteSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline434;
}
export interface DeleteSponsoredBrandsCampaignsResponseContentEncoded {
  readonly campaigns?: Inline434Encoded;
}
export const DeleteSponsoredBrandsCampaignsResponseContent: Schema.Schema<DeleteSponsoredBrandsCampaignsResponseContent, DeleteSponsoredBrandsCampaignsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.suspend(() => Inline434)),
});

export interface DisassociateAssociatedBudgetRuleForSBCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}
export interface DisassociateAssociatedBudgetRuleForSBCampaignsParamsEncoded {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}
export const DisassociateAssociatedBudgetRuleForSBCampaignsParams: Schema.Schema<DisassociateAssociatedBudgetRuleForSBCampaignsParams, DisassociateAssociatedBudgetRuleForSBCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
  budgetRuleId: Schema.String,
});

export interface DisassociateAssociatedBudgetRuleForSBCampaignsResponse {
  readonly data: Inline991;
}
export interface DisassociateAssociatedBudgetRuleForSBCampaignsResponseEncoded {
  readonly data: Inline991Encoded;
}
export const DisassociateAssociatedBudgetRuleForSBCampaignsResponse: Schema.Schema<DisassociateAssociatedBudgetRuleForSBCampaignsResponse, DisassociateAssociatedBudgetRuleForSBCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline991),
});

export interface DisassociateAssociatedBudgetRuleResponse {

}
export interface DisassociateAssociatedBudgetRuleResponseEncoded {

}
export const DisassociateAssociatedBudgetRuleResponse: Schema.Schema<DisassociateAssociatedBudgetRuleResponse, DisassociateAssociatedBudgetRuleResponseEncoded, never> = Schema.Struct({

});

export interface DisassociateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline1050>;
}
export interface DisassociateSponsoredBrandsOptimizationRulesParamsEncoded {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline1050Encoded>;
}
export const DisassociateSponsoredBrandsOptimizationRulesParams: Schema.Schema<DisassociateSponsoredBrandsOptimizationRulesParams, DisassociateSponsoredBrandsOptimizationRulesParamsEncoded, never> = Schema.Struct({
  optimizationRuleDisassociations: Schema.Array(Schema.suspend(() => Inline1050)),
});

export interface DisassociateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline448>;
}
export interface DisassociateSponsoredBrandsOptimizationRulesRequestContentEncoded {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline448Encoded>;
}
export const DisassociateSponsoredBrandsOptimizationRulesRequestContent: Schema.Schema<DisassociateSponsoredBrandsOptimizationRulesRequestContent, DisassociateSponsoredBrandsOptimizationRulesRequestContentEncoded, never> = Schema.Struct({
  optimizationRuleDisassociations: Schema.Array(Schema.suspend(() => Inline448)),
});

export interface DisassociateSponsoredBrandsOptimizationRulesResponse {

}
export interface DisassociateSponsoredBrandsOptimizationRulesResponseEncoded {

}
export const DisassociateSponsoredBrandsOptimizationRulesResponse: Schema.Schema<DisassociateSponsoredBrandsOptimizationRulesResponse, DisassociateSponsoredBrandsOptimizationRulesResponseEncoded, never> = Schema.Struct({

});

export interface DisassociateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRuleDisassociations: Inline450;
}
export interface DisassociateSponsoredBrandsOptimizationRulesResponseContentEncoded {
  readonly optimizationRuleDisassociations: Inline450Encoded;
}
export const DisassociateSponsoredBrandsOptimizationRulesResponseContent: Schema.Schema<DisassociateSponsoredBrandsOptimizationRulesResponseContent, DisassociateSponsoredBrandsOptimizationRulesResponseContentEncoded, never> = Schema.Struct({
  optimizationRuleDisassociations: Schema.suspend(() => Inline450),
});

export interface EntityFilter {
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface EntityFilterEncoded {
  readonly entityId?: string;
  readonly entityType?: string;
}
export const EntityFilter: Schema.Schema<EntityFilter, EntityFilterEncoded, never> = Schema.Struct({
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export type EntityState = "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED" | string;
export type EntityStateEncoded = "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED" | string;
export const EntityState: Schema.Schema<EntityState, EntityStateEncoded, never> = Schema.Union(Schema.Literal("ARCHIVED", "ENABLED", "PAUSED", "PROPOSED"), Schema.String);

export interface EntityStateFilter {
  readonly include?: ReadonlyArray<string>;
}
export interface EntityStateFilterEncoded {
  readonly include?: ReadonlyArray<string>;
}
export const EntityStateFilter: Schema.Schema<EntityStateFilter, EntityStateFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface ErrorCause {
  readonly location: string;
  readonly trigger?: string;
}
export interface ErrorCauseEncoded {
  readonly location: string;
  readonly trigger?: string;
}
export const ErrorCause: Schema.Schema<ErrorCause, ErrorCauseEncoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface EventTypeRuleDuration {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface EventTypeRuleDurationEncoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const EventTypeRuleDuration: Schema.Schema<EventTypeRuleDuration, EventTypeRuleDurationEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

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
export interface ExtendedProductCollectionCreativeEncoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline458Encoded;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline459Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline460Encoded;
}
export const ExtendedProductCollectionCreative: Schema.Schema<ExtendedProductCollectionCreative, ExtendedProductCollectionCreativeEncoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline458)),
  brandName: Schema.String,
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline459))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline460)),
});

export interface GetBudgetRecommendationsParams {
  readonly campaignIds: ReadonlyArray<string>;
}
export interface GetBudgetRecommendationsParamsEncoded {
  readonly campaignIds: ReadonlyArray<string>;
}
export const GetBudgetRecommendationsParams: Schema.Schema<GetBudgetRecommendationsParams, GetBudgetRecommendationsParamsEncoded, never> = Schema.Struct({
  campaignIds: Schema.Array(Schema.String),
});

export interface GetBudgetRecommendationsRequestContent {
  readonly campaignIds: ReadonlyArray<string>;
}
export interface GetBudgetRecommendationsRequestContentEncoded {
  readonly campaignIds: ReadonlyArray<string>;
}
export const GetBudgetRecommendationsRequestContent: Schema.Schema<GetBudgetRecommendationsRequestContent, GetBudgetRecommendationsRequestContentEncoded, never> = Schema.Struct({
  campaignIds: Schema.Array(Schema.String),
});

export interface GetBudgetRecommendationsResponse {

}
export interface GetBudgetRecommendationsResponseEncoded {

}
export const GetBudgetRecommendationsResponse: Schema.Schema<GetBudgetRecommendationsResponse, GetBudgetRecommendationsResponseEncoded, never> = Schema.Struct({

});

export interface GetBudgetRecommendationsResponseContent {
  readonly error: ReadonlyArray<Inline463>;
  readonly success: ReadonlyArray<Inline464>;
}
export interface GetBudgetRecommendationsResponseContentEncoded {
  readonly error: ReadonlyArray<Inline463Encoded>;
  readonly success: ReadonlyArray<Inline464Encoded>;
}
export const GetBudgetRecommendationsResponseContent: Schema.Schema<GetBudgetRecommendationsResponseContent, GetBudgetRecommendationsResponseContentEncoded, never> = Schema.Struct({
  error: Schema.Array(Schema.suspend(() => Inline463)),
  success: Schema.Array(Schema.suspend(() => Inline464)),
});

export interface GetBudgetRuleByRuleIdForSBCampaignsParams {
  readonly budgetRuleId: string;
}
export interface GetBudgetRuleByRuleIdForSBCampaignsParamsEncoded {
  readonly budgetRuleId: string;
}
export const GetBudgetRuleByRuleIdForSBCampaignsParams: Schema.Schema<GetBudgetRuleByRuleIdForSBCampaignsParams, GetBudgetRuleByRuleIdForSBCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRuleId: Schema.String,
});

export interface GetBudgetRuleByRuleIdForSBCampaignsResponse {
  readonly data: Inline972;
}
export interface GetBudgetRuleByRuleIdForSBCampaignsResponseEncoded {
  readonly data: Inline972Encoded;
}
export const GetBudgetRuleByRuleIdForSBCampaignsResponse: Schema.Schema<GetBudgetRuleByRuleIdForSBCampaignsResponse, GetBudgetRuleByRuleIdForSBCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline972),
});

export interface GetCampaignsAssociatedWithSBBudgetRuleParams {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}
export interface GetCampaignsAssociatedWithSBBudgetRuleParamsEncoded {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}
export const GetCampaignsAssociatedWithSBBudgetRuleParams: Schema.Schema<GetCampaignsAssociatedWithSBBudgetRuleParams, GetCampaignsAssociatedWithSBBudgetRuleParamsEncoded, never> = Schema.Struct({
  budgetRuleId: Schema.String,
  nextToken: Schema.optional(Schema.String),
  pageSize: Schema.Number,
});

export interface GetCampaignsAssociatedWithSBBudgetRuleResponse {
  readonly data: Inline979;
}
export interface GetCampaignsAssociatedWithSBBudgetRuleResponseEncoded {
  readonly data: Inline979Encoded;
}
export const GetCampaignsAssociatedWithSBBudgetRuleResponse: Schema.Schema<GetCampaignsAssociatedWithSBBudgetRuleResponse, GetCampaignsAssociatedWithSBBudgetRuleResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline979),
});

export interface GetHeadlineRecommendationsParams {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline1025>;
}
export interface GetHeadlineRecommendationsParamsEncoded {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline1025Encoded>;
}
export const GetHeadlineRecommendationsParams: Schema.Schema<GetHeadlineRecommendationsParams, GetHeadlineRecommendationsParamsEncoded, never> = Schema.Struct({
  adFormat: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  maxNumSuggestions: Schema.optional(Schema.Number),
  storePages: Schema.optional(Schema.Array(Schema.suspend(() => Inline1025))),
});

export interface GetHeadlineRecommendationsResponse {
  readonly data: Inline1027;
}
export interface GetHeadlineRecommendationsResponseEncoded {
  readonly data: Inline1027Encoded;
}
export const GetHeadlineRecommendationsResponse: Schema.Schema<GetHeadlineRecommendationsResponse, GetHeadlineRecommendationsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1027),
});

export interface GetKeywordRecommendationsParams {
  readonly body: Inline1030 | Inline1031;
}
export interface GetKeywordRecommendationsParamsEncoded {
  readonly body: Inline1030Encoded | Inline1031Encoded;
}
export const GetKeywordRecommendationsParams: Schema.Schema<GetKeywordRecommendationsParams, GetKeywordRecommendationsParamsEncoded, never> = Schema.Struct({
  body: Schema.Union(Schema.suspend(() => Inline1030), Schema.suspend(() => Inline1031)),
});

export interface GetKeywordRecommendationsResponse {

}
export interface GetKeywordRecommendationsResponseEncoded {

}
export const GetKeywordRecommendationsResponse: Schema.Schema<GetKeywordRecommendationsResponse, GetKeywordRecommendationsResponseEncoded, never> = Schema.Struct({

});

export interface GetSBBudgetRuleResponse {
  readonly budgetRule?: Inline466;
}
export interface GetSBBudgetRuleResponseEncoded {
  readonly budgetRule?: Inline466Encoded;
}
export const GetSBBudgetRuleResponse: Schema.Schema<GetSBBudgetRuleResponse, GetSBBudgetRuleResponseEncoded, never> = Schema.Struct({
  budgetRule: Schema.optional(Schema.suspend(() => Inline466)),
});

export interface GetSBBudgetRulesForAdvertiserParams {
  readonly nextToken?: string;
  readonly pageSize: number;
}
export interface GetSBBudgetRulesForAdvertiserParamsEncoded {
  readonly nextToken?: string;
  readonly pageSize: number;
}
export const GetSBBudgetRulesForAdvertiserParams: Schema.Schema<GetSBBudgetRulesForAdvertiserParams, GetSBBudgetRulesForAdvertiserParamsEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
  pageSize: Schema.Number,
});

export interface GetSBBudgetRulesForAdvertiserResponse {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline472>;
  readonly nextToken?: string;
}
export interface GetSBBudgetRulesForAdvertiserResponseEncoded {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline472Encoded>;
  readonly nextToken?: string;
}
export const GetSBBudgetRulesForAdvertiserResponse: Schema.Schema<GetSBBudgetRulesForAdvertiserResponse, GetSBBudgetRulesForAdvertiserResponseEncoded, never> = Schema.Struct({
  budgetRulesForAdvertiserResponse: Schema.optional(Schema.Array(Schema.suspend(() => Inline472))),
  nextToken: Schema.optional(Schema.String),
});

export interface GoalTypeFilter {
  readonly include?: ReadonlyArray<string>;
}
export interface GoalTypeFilterEncoded {
  readonly include?: ReadonlyArray<string>;
}
export const GoalTypeFilter: Schema.Schema<GoalTypeFilter, GoalTypeFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface HeadlineSuggestionRequest {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline479>;
}
export interface HeadlineSuggestionRequestEncoded {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline479Encoded>;
}
export const HeadlineSuggestionRequest: Schema.Schema<HeadlineSuggestionRequest, HeadlineSuggestionRequestEncoded, never> = Schema.Struct({
  adFormat: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  maxNumSuggestions: Schema.optional(Schema.Number),
  storePages: Schema.optional(Schema.Array(Schema.suspend(() => Inline479))),
});

export interface HeadlineSuggestionResponse {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline481>;
}
export interface HeadlineSuggestionResponseEncoded {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline481Encoded>;
}
export const HeadlineSuggestionResponse: Schema.Schema<HeadlineSuggestionResponse, HeadlineSuggestionResponseEncoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
  suggestions: Schema.optional(Schema.Array(Schema.suspend(() => Inline481))),
});

export interface Inline100 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline100;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline100Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline100Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline100: Schema.Schema<Inline100, Inline100Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline100),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline1001 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1001>;
}
export interface Inline1001Encoded {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1001Encoded>;
}
export const Inline1001: Schema.Schema<Inline1001, Inline1001Encoded, never> = Schema.Struct({
  adFormat: Schema.String,
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline1001))),
});

export interface Inline1003 {
  readonly insights?: ReadonlyArray<Inline1003>;
  readonly nextToken?: string;
}
export interface Inline1003Encoded {
  readonly insights?: ReadonlyArray<Inline1003Encoded>;
  readonly nextToken?: string;
}
export const Inline1003: Schema.Schema<Inline1003, Inline1003Encoded, never> = Schema.Struct({
  insights: Schema.optional(Schema.Array(Schema.suspend(() => Inline1003))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1005 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1005>;
}
export interface Inline1005Encoded {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1005Encoded>;
}
export const Inline1005: Schema.Schema<Inline1005, Inline1005Encoded, never> = Schema.Struct({
  adFormat: Schema.String,
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline1005))),
});

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
export interface Inline1006Encoded {
  readonly adGroups: ReadonlyArray<Inline1006Encoded>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1012Encoded>;
  readonly startDate?: string;
}
export const Inline1006: Schema.Schema<Inline1006, Inline1006Encoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline1006)),
  budget: Schema.Number,
  budgetType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  forecastType: Schema.String,
  goal: Schema.optional(Schema.String),
  optimizationRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline1012))),
  startDate: Schema.optional(Schema.String),
});

export interface Inline1007 {
  readonly landingPageUrl?: string;
}
export interface Inline1007Encoded {
  readonly landingPageUrl?: string;
}
export const Inline1007: Schema.Schema<Inline1007, Inline1007Encoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface Inline1008 {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline1008Encoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline1008: Schema.Schema<Inline1008, Inline1008Encoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline1009 {
  readonly expressions?: ReadonlyArray<Inline1009>;
}
export interface Inline1009Encoded {
  readonly expressions?: ReadonlyArray<Inline1009Encoded>;
}
export const Inline1009: Schema.Schema<Inline1009, Inline1009Encoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1009))),
});

export interface Inline101 {
  readonly ad?: Inline101;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline101Encoded {
  readonly ad?: Inline101Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline101: Schema.Schema<Inline101, Inline101Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline101)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline1010 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1010>;
}
export interface Inline1010Encoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1010Encoded>;
}
export const Inline1010: Schema.Schema<Inline1010, Inline1010Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1010))),
});

export interface Inline1011 {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface Inline1011Encoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const Inline1011: Schema.Schema<Inline1011, Inline1011Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface Inline1012 {
  readonly attributeName?: string;
  readonly criteria?: Inline1012;
}
export interface Inline1012Encoded {
  readonly attributeName?: string;
  readonly criteria?: Inline1012Encoded;
}
export const Inline1012: Schema.Schema<Inline1012, Inline1012Encoded, never> = Schema.Struct({
  attributeName: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.suspend(() => Inline1012)),
});

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
export interface Inline1015Encoded {
  readonly adGroups: ReadonlyArray<Inline1015Encoded>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1021Encoded>;
  readonly startDate?: string;
}
export const Inline1015: Schema.Schema<Inline1015, Inline1015Encoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline1015)),
  budget: Schema.Number,
  budgetType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  forecastType: Schema.String,
  goal: Schema.optional(Schema.String),
  optimizationRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline1021))),
  startDate: Schema.optional(Schema.String),
});

export interface Inline1016 {
  readonly landingPageUrl?: string;
}
export interface Inline1016Encoded {
  readonly landingPageUrl?: string;
}
export const Inline1016: Schema.Schema<Inline1016, Inline1016Encoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface Inline1017 {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline1017Encoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline1017: Schema.Schema<Inline1017, Inline1017Encoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline1018 {
  readonly expressions?: ReadonlyArray<Inline1018>;
}
export interface Inline1018Encoded {
  readonly expressions?: ReadonlyArray<Inline1018Encoded>;
}
export const Inline1018: Schema.Schema<Inline1018, Inline1018Encoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1018))),
});

export interface Inline1019 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1019>;
}
export interface Inline1019Encoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1019Encoded>;
}
export const Inline1019: Schema.Schema<Inline1019, Inline1019Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1019))),
});

export interface Inline102 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline102Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline102: Schema.Schema<Inline102, Inline102Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline1020 {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface Inline1020Encoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const Inline1020: Schema.Schema<Inline1020, Inline1020Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface Inline1021 {
  readonly attributeName?: string;
  readonly criteria?: Inline1021;
}
export interface Inline1021Encoded {
  readonly attributeName?: string;
  readonly criteria?: Inline1021Encoded;
}
export const Inline1021: Schema.Schema<Inline1021, Inline1021Encoded, never> = Schema.Struct({
  attributeName: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.suspend(() => Inline1021)),
});

export interface Inline1023 {
  readonly brands?: ReadonlyArray<Inline1023>;
  readonly nextToken?: string;
}
export interface Inline1023Encoded {
  readonly brands?: ReadonlyArray<Inline1023Encoded>;
  readonly nextToken?: string;
}
export const Inline1023: Schema.Schema<Inline1023, Inline1023Encoded, never> = Schema.Struct({
  brands: Schema.optional(Schema.Array(Schema.suspend(() => Inline1023))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1025 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export interface Inline1025Encoded {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export const Inline1025: Schema.Schema<Inline1025, Inline1025Encoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  primaryAsin: Schema.optional(Schema.String),
});

export interface Inline1027 {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline1027>;
}
export interface Inline1027Encoded {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline1027Encoded>;
}
export const Inline1027: Schema.Schema<Inline1027, Inline1027Encoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
  suggestions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1027))),
});

export interface Inline1029 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export interface Inline1029Encoded {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export const Inline1029: Schema.Schema<Inline1029, Inline1029Encoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  primaryAsin: Schema.optional(Schema.String),
});

export interface Inline103 {
  readonly assetId?: string;
  readonly crop?: Inline103;
  readonly url?: string;
}
export interface Inline103Encoded {
  readonly assetId?: string;
  readonly crop?: Inline103Encoded;
  readonly url?: string;
}
export const Inline103: Schema.Schema<Inline103, Inline103Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline103)),
  url: Schema.optional(Schema.String),
});

export interface Inline1030 {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}
export interface Inline1030Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}
export const Inline1030: Schema.Schema<Inline1030, Inline1030Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  maxNumSuggestions: Schema.optional(Schema.Number),
});

export interface Inline1031 {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}
export interface Inline1031Encoded {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}
export const Inline1031: Schema.Schema<Inline1031, Inline1031Encoded, never> = Schema.Struct({
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  maxNumSuggestions: Schema.optional(Schema.Number),
  url: Schema.String,
});

export interface Inline1034 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1034Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1034: Schema.Schema<Inline1034, Inline1034Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1037 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1037Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1037: Schema.Schema<Inline1037, Inline1037Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1038 {
  readonly conditions?: ReadonlyArray<Inline1038>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline1038Encoded {
  readonly conditions?: ReadonlyArray<Inline1038Encoded>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline1038: Schema.Schema<Inline1038, Inline1038Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1038))),
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline104 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline104Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline104: Schema.Schema<Inline104, Inline104Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1041 {
  readonly conditions?: ReadonlyArray<Inline1041>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline1041Encoded {
  readonly conditions?: ReadonlyArray<Inline1041Encoded>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline1041: Schema.Schema<Inline1041, Inline1041Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1041))),
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline1042 {
  readonly conditions?: ReadonlyArray<Inline1042>;
  readonly optimizationRuleId?: string;
}
export interface Inline1042Encoded {
  readonly conditions?: ReadonlyArray<Inline1042Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline1042: Schema.Schema<Inline1042, Inline1042Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1042))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline1045 {
  readonly conditions?: ReadonlyArray<Inline1045>;
  readonly optimizationRuleId?: string;
}
export interface Inline1045Encoded {
  readonly conditions?: ReadonlyArray<Inline1045Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline1045: Schema.Schema<Inline1045, Inline1045Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline1045))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline1046 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline1046Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline1046: Schema.Schema<Inline1046, Inline1046Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline1049 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline1049Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline1049: Schema.Schema<Inline1049, Inline1049Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline105 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline105Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline105: Schema.Schema<Inline105, Inline105Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1050 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline1050Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline1050: Schema.Schema<Inline1050, Inline1050Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline1053 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline1053Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline1053: Schema.Schema<Inline1053, Inline1053Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline1054 {
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline1054Encoded {
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline1054: Schema.Schema<Inline1054, Inline1054Encoded, never> = Schema.Struct({
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline1055 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1055Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1055: Schema.Schema<Inline1055, Inline1055Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1057 {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline1057>;
  readonly totalCount?: number;
}
export interface Inline1057Encoded {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline1057Encoded>;
  readonly totalCount?: number;
}
export const Inline1057: Schema.Schema<Inline1057, Inline1057Encoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
  optimizationRules: Schema.Array(Schema.suspend(() => Inline1057)),
  totalCount: Schema.optional(Schema.Number),
});

export interface Inline1059 {
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline1059Encoded {
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline1059: Schema.Schema<Inline1059, Inline1059Encoded, never> = Schema.Struct({
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline106 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline106Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline106: Schema.Schema<Inline106, Inline106Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1060 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1060Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1060: Schema.Schema<Inline1060, Inline1060Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1062 {
  readonly categoryTree?: ReadonlyArray<Inline1062>;
  readonly nextToken?: string;
}
export interface Inline1062Encoded {
  readonly categoryTree?: ReadonlyArray<Inline1062Encoded>;
  readonly nextToken?: string;
}
export const Inline1062: Schema.Schema<Inline1062, Inline1062Encoded, never> = Schema.Struct({
  categoryTree: Schema.optional(Schema.Array(Schema.suspend(() => Inline1062))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1063 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline1063Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline1063: Schema.Schema<Inline1063, Inline1063Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline1066 {
  readonly ageRanges?: ReadonlyArray<Inline1066>;
  readonly brands?: ReadonlyArray<Inline1067>;
  readonly genres?: ReadonlyArray<Inline1068>;
  readonly nextToken?: string;
}
export interface Inline1066Encoded {
  readonly ageRanges?: ReadonlyArray<Inline1066Encoded>;
  readonly brands?: ReadonlyArray<Inline1067Encoded>;
  readonly genres?: ReadonlyArray<Inline1068Encoded>;
  readonly nextToken?: string;
}
export const Inline1066: Schema.Schema<Inline1066, Inline1066Encoded, never> = Schema.Struct({
  ageRanges: Schema.optional(Schema.Array(Schema.suspend(() => Inline1066))),
  brands: Schema.optional(Schema.Array(Schema.suspend(() => Inline1067))),
  genres: Schema.optional(Schema.Array(Schema.suspend(() => Inline1068))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1067 {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export interface Inline1067Encoded {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export const Inline1067: Schema.Schema<Inline1067, Inline1067Encoded, never> = Schema.Struct({
  brandRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
});

export interface Inline1068 {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export interface Inline1068Encoded {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export const Inline1068: Schema.Schema<Inline1068, Inline1068Encoded, never> = Schema.Struct({
  genreRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface Inline1070 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline1070Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline1070: Schema.Schema<Inline1070, Inline1070Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline1071 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline1071Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline1071: Schema.Schema<Inline1071, Inline1071Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline1073 {
  readonly asinCounts?: Inline1073;
}
export interface Inline1073Encoded {
  readonly asinCounts?: Inline1073Encoded;
}
export const Inline1073: Schema.Schema<Inline1073, Inline1073Encoded, never> = Schema.Struct({
  asinCounts: Schema.optional(Schema.suspend(() => Inline1073)),
});

export interface Inline1075 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline1075Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline1075: Schema.Schema<Inline1075, Inline1075Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline1076 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline1076Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline1076: Schema.Schema<Inline1076, Inline1076Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline1077 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export interface Inline1077Encoded {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export const Inline1077: Schema.Schema<Inline1077, Inline1077Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  name: Schema.String,
  state: Schema.String,
});

export interface Inline108 {
  readonly errors?: ReadonlyArray<Inline108>;
  readonly index: number;
}
export interface Inline108Encoded {
  readonly errors?: ReadonlyArray<Inline108Encoded>;
  readonly index: number;
}
export const Inline108: Schema.Schema<Inline108, Inline108Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline108))),
  index: Schema.Number,
});

export interface Inline1080 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export interface Inline1080Encoded {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export const Inline1080: Schema.Schema<Inline1080, Inline1080Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1081 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline1081Encoded {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline1081: Schema.Schema<Inline1081, Inline1081Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline1084 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline1084Encoded {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline1084: Schema.Schema<Inline1084, Inline1084Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline1085 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1085Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1085: Schema.Schema<Inline1085, Inline1085Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1088 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1088Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1088: Schema.Schema<Inline1088, Inline1088Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1089 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1089Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1089: Schema.Schema<Inline1089, Inline1089Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline109 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export interface Inline109Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export const Inline109: Schema.Schema<Inline109, Inline109Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRuleId: Schema.String,
});

export interface Inline1090 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1090Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1090: Schema.Schema<Inline1090, Inline1090Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1091 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1091Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1091: Schema.Schema<Inline1091, Inline1091Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline1092 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1092Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1092: Schema.Schema<Inline1092, Inline1092Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1094 {
  readonly adGroups?: ReadonlyArray<Inline1094>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface Inline1094Encoded {
  readonly adGroups?: ReadonlyArray<Inline1094Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const Inline1094: Schema.Schema<Inline1094, Inline1094Encoded, never> = Schema.Struct({
  adGroups: Schema.optional(Schema.Array(Schema.suspend(() => Inline1094))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

export interface Inline1096 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1096Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1096: Schema.Schema<Inline1096, Inline1096Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1097 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1097Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1097: Schema.Schema<Inline1097, Inline1097Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1098 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1098Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1098: Schema.Schema<Inline1098, Inline1098Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline1099 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1099Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1099: Schema.Schema<Inline1099, Inline1099Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline11 {
  readonly errorType: string;
  readonly errorValue: Inline11;
}
export interface Inline11Encoded {
  readonly errorType: string;
  readonly errorValue: Inline11Encoded;
}
export const Inline11: Schema.Schema<Inline11, Inline11Encoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline11),
});

export interface Inline1100 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline1100Encoded {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline1100: Schema.Schema<Inline1100, Inline1100Encoded, never> = Schema.Struct({
  adId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline1103 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline1103Encoded {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline1103: Schema.Schema<Inline1103, Inline1103Encoded, never> = Schema.Struct({
  adId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline1104 {
  readonly adGroupId: string;
  readonly creative: Inline1104;
  readonly name: string;
  readonly state: string;
}
export interface Inline1104Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1104Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1104: Schema.Schema<Inline1104, Inline1104Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1104),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1107 {
  readonly adGroupId: string;
  readonly creative: Inline1107;
  readonly name: string;
  readonly state: string;
}
export interface Inline1107Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1107Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1107: Schema.Schema<Inline1107, Inline1107Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1107),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1108 {
  readonly adGroupId: string;
  readonly creative: Inline1108;
  readonly landingPage: Inline1109;
  readonly name: string;
  readonly state: string;
}
export interface Inline1108Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1108Encoded;
  readonly landingPage: Inline1109Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1108: Schema.Schema<Inline1108, Inline1108Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1108),
  landingPage: Schema.suspend(() => Inline1109),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1109 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1109Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1109: Schema.Schema<Inline1109, Inline1109Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline111 {
  readonly errors?: ReadonlyArray<Inline111>;
  readonly index: number;
}
export interface Inline111Encoded {
  readonly errors?: ReadonlyArray<Inline111Encoded>;
  readonly index: number;
}
export const Inline111: Schema.Schema<Inline111, Inline111Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline111))),
  index: Schema.Number,
});

export interface Inline1112 {
  readonly adGroupId: string;
  readonly creative: Inline1112;
  readonly landingPage: Inline1113;
  readonly name: string;
  readonly state: string;
}
export interface Inline1112Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1112Encoded;
  readonly landingPage: Inline1113Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1112: Schema.Schema<Inline1112, Inline1112Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1112),
  landingPage: Schema.suspend(() => Inline1113),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1113 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1113Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1113: Schema.Schema<Inline1113, Inline1113Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1114 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1114Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1114: Schema.Schema<Inline1114, Inline1114Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1117 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1117Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1117: Schema.Schema<Inline1117, Inline1117Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1118 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1118Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1118: Schema.Schema<Inline1118, Inline1118Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1119 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1119Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1119: Schema.Schema<Inline1119, Inline1119Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline112 {
  readonly cause: Inline112;
  readonly message: string;
  readonly reason: string;
}
export interface Inline112Encoded {
  readonly cause: Inline112Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline112: Schema.Schema<Inline112, Inline112Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline112),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline1120 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1120Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1120: Schema.Schema<Inline1120, Inline1120Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1121 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1121Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1121: Schema.Schema<Inline1121, Inline1121Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline1122 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1122Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1122: Schema.Schema<Inline1122, Inline1122Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1124 {
  readonly ads?: ReadonlyArray<Inline1124>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface Inline1124Encoded {
  readonly ads?: ReadonlyArray<Inline1124Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const Inline1124: Schema.Schema<Inline1124, Inline1124Encoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.Array(Schema.suspend(() => Inline1124))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

export interface Inline1125 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline1125Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline1125: Schema.Schema<Inline1125, Inline1125Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline1126 {
  readonly assetId?: string;
  readonly crop?: Inline1126;
  readonly url?: string;
}
export interface Inline1126Encoded {
  readonly assetId?: string;
  readonly crop?: Inline1126Encoded;
  readonly url?: string;
}
export const Inline1126: Schema.Schema<Inline1126, Inline1126Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline1126)),
  url: Schema.optional(Schema.String),
});

export interface Inline1127 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline1127Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline1127: Schema.Schema<Inline1127, Inline1127Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1128 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline1128Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline1128: Schema.Schema<Inline1128, Inline1128Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1129 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1129Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1129: Schema.Schema<Inline1129, Inline1129Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline113 {
  readonly cause: Inline113;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline113Encoded {
  readonly cause: Inline113Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline113: Schema.Schema<Inline113, Inline113Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline113),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline1131 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1131Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1131: Schema.Schema<Inline1131, Inline1131Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1132 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1132Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1132: Schema.Schema<Inline1132, Inline1132Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1133 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1133Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1133: Schema.Schema<Inline1133, Inline1133Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1134 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1134Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1134: Schema.Schema<Inline1134, Inline1134Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline1135 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1135Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1135: Schema.Schema<Inline1135, Inline1135Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1136 {
  readonly adGroupId: string;
  readonly creative: Inline1136;
  readonly name: string;
  readonly state: string;
}
export interface Inline1136Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1136Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1136: Schema.Schema<Inline1136, Inline1136Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1136),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1137 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1137Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1137: Schema.Schema<Inline1137, Inline1137Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline114 {
  readonly cause: Inline114;
  readonly message: string;
  readonly reason: string;
}
export interface Inline114Encoded {
  readonly cause: Inline114Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline114: Schema.Schema<Inline114, Inline114Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline114),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline1140 {
  readonly adGroupId: string;
  readonly creative: Inline1140;
  readonly name: string;
  readonly state: string;
}
export interface Inline1140Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1140Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1140: Schema.Schema<Inline1140, Inline1140Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1140),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1141 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1141Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1141: Schema.Schema<Inline1141, Inline1141Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1142 {
  readonly adGroupId: string;
  readonly creative: Inline1142;
  readonly landingPage: Inline1144;
  readonly name: string;
  readonly state: string;
}
export interface Inline1142Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1142Encoded;
  readonly landingPage: Inline1144Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1142: Schema.Schema<Inline1142, Inline1142Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1142),
  landingPage: Schema.suspend(() => Inline1144),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1143 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline1143Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline1143: Schema.Schema<Inline1143, Inline1143Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline1144 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1144Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1144: Schema.Schema<Inline1144, Inline1144Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1147 {
  readonly adGroupId: string;
  readonly creative: Inline1147;
  readonly landingPage: Inline1149;
  readonly name: string;
  readonly state: string;
}
export interface Inline1147Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1147Encoded;
  readonly landingPage: Inline1149Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1147: Schema.Schema<Inline1147, Inline1147Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1147),
  landingPage: Schema.suspend(() => Inline1149),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1148 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline1148Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline1148: Schema.Schema<Inline1148, Inline1148Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline1149 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1149Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1149: Schema.Schema<Inline1149, Inline1149Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline115 {
  readonly cause: Inline115;
  readonly message: string;
  readonly reason: string;
}
export interface Inline115Encoded {
  readonly cause: Inline115Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline115: Schema.Schema<Inline115, Inline115Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline115),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline1150 {
  readonly adGroupId: string;
  readonly creative: Inline1150;
  readonly landingPage: Inline1152;
  readonly name: string;
  readonly state: string;
}
export interface Inline1150Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1150Encoded;
  readonly landingPage: Inline1152Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1150: Schema.Schema<Inline1150, Inline1150Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1150),
  landingPage: Schema.suspend(() => Inline1152),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1151 {
  readonly assetId?: string;
  readonly crop?: Inline1151;
  readonly url?: string;
}
export interface Inline1151Encoded {
  readonly assetId?: string;
  readonly crop?: Inline1151Encoded;
  readonly url?: string;
}
export const Inline1151: Schema.Schema<Inline1151, Inline1151Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline1151)),
  url: Schema.optional(Schema.String),
});

export interface Inline1152 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1152Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1152: Schema.Schema<Inline1152, Inline1152Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1155 {
  readonly adGroupId: string;
  readonly creative: Inline1155;
  readonly landingPage: Inline1157;
  readonly name: string;
  readonly state: string;
}
export interface Inline1155Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1155Encoded;
  readonly landingPage: Inline1157Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1155: Schema.Schema<Inline1155, Inline1155Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1155),
  landingPage: Schema.suspend(() => Inline1157),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1156 {
  readonly assetId?: string;
  readonly crop?: Inline1156;
  readonly url?: string;
}
export interface Inline1156Encoded {
  readonly assetId?: string;
  readonly crop?: Inline1156Encoded;
  readonly url?: string;
}
export const Inline1156: Schema.Schema<Inline1156, Inline1156Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline1156)),
  url: Schema.optional(Schema.String),
});

export interface Inline1157 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1157Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1157: Schema.Schema<Inline1157, Inline1157Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1158 {
  readonly adGroupId: string;
  readonly creative: Inline1158;
  readonly landingPage: Inline1160;
  readonly name: string;
  readonly state: string;
}
export interface Inline1158Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1158Encoded;
  readonly landingPage: Inline1160Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1158: Schema.Schema<Inline1158, Inline1158Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1158),
  landingPage: Schema.suspend(() => Inline1160),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1159 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline1159Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline1159: Schema.Schema<Inline1159, Inline1159Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline116 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline116;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline116Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline116Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline116: Schema.Schema<Inline116, Inline116Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline116),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline1160 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1160Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1160: Schema.Schema<Inline1160, Inline1160Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1163 {
  readonly adGroupId: string;
  readonly creative: Inline1163;
  readonly landingPage: Inline1165;
  readonly name: string;
  readonly state: string;
}
export interface Inline1163Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1163Encoded;
  readonly landingPage: Inline1165Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1163: Schema.Schema<Inline1163, Inline1163Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1163),
  landingPage: Schema.suspend(() => Inline1165),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1164 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline1164Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline1164: Schema.Schema<Inline1164, Inline1164Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1165 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1165Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1165: Schema.Schema<Inline1165, Inline1165Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1166 {
  readonly adGroupId: string;
  readonly creative: Inline1166;
  readonly name: string;
  readonly state: string;
}
export interface Inline1166Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1166Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1166: Schema.Schema<Inline1166, Inline1166Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1166),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline1169 {
  readonly adGroupId: string;
  readonly creative: Inline1169;
  readonly name: string;
  readonly state: string;
}
export interface Inline1169Encoded {
  readonly adGroupId: string;
  readonly creative: Inline1169Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline1169: Schema.Schema<Inline1169, Inline1169Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline1169),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline117 {
  readonly campaign?: Inline117;
  readonly campaignId?: string;
  readonly index: number;
}
export interface Inline117Encoded {
  readonly campaign?: Inline117Encoded;
  readonly campaignId?: string;
  readonly index: number;
}
export const Inline117: Schema.Schema<Inline117, Inline117Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline117)),
  campaignId: Schema.optional(Schema.String),
  index: Schema.Number,
});

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
export interface Inline1170Encoded {
  readonly bidding?: Inline1170Encoded;
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
  readonly tags?: Inline1173Encoded;
  readonly targetedPGDealId?: string;
}
export const Inline1170: Schema.Schema<Inline1170, Inline1170Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline1170)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline1173)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface Inline1171 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline1171Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline1171: Schema.Schema<Inline1171, Inline1171Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline1172 {
  readonly audienceSegments?: ReadonlyArray<Inline1172>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline1172Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline1172Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline1172: Schema.Schema<Inline1172, Inline1172Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline1172))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1173 {

}
export interface Inline1173Encoded {

}
export const Inline1173: Schema.Schema<Inline1173, Inline1173Encoded, never> = Schema.Struct({

});

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
export interface Inline1176Encoded {
  readonly bidding?: Inline1176Encoded;
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
  readonly tags?: Inline1179Encoded;
  readonly targetedPGDealId?: string;
}
export const Inline1176: Schema.Schema<Inline1176, Inline1176Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline1176)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline1179)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface Inline1177 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline1177Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline1177: Schema.Schema<Inline1177, Inline1177Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline1178 {
  readonly audienceSegments?: ReadonlyArray<Inline1178>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline1178Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline1178Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline1178: Schema.Schema<Inline1178, Inline1178Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline1178))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1179 {

}
export interface Inline1179Encoded {

}
export const Inline1179: Schema.Schema<Inline1179, Inline1179Encoded, never> = Schema.Struct({

});

export interface Inline118 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline118Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline118: Schema.Schema<Inline118, Inline118Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

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
export interface Inline1180Encoded {
  readonly bidding?: Inline1180Encoded;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1183Encoded;
}
export const Inline1180: Schema.Schema<Inline1180, Inline1180Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline1180)),
  budget: Schema.optional(Schema.Number),
  campaignId: Schema.String,
  endDate: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  portfolioId: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.suspend(() => Inline1183)),
});

export interface Inline1181 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline1181Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline1181: Schema.Schema<Inline1181, Inline1181Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline1182 {
  readonly audienceSegments?: ReadonlyArray<Inline1182>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline1182Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline1182Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline1182: Schema.Schema<Inline1182, Inline1182Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline1182))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1183 {

}
export interface Inline1183Encoded {

}
export const Inline1183: Schema.Schema<Inline1183, Inline1183Encoded, never> = Schema.Struct({

});

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
export interface Inline1186Encoded {
  readonly bidding?: Inline1186Encoded;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1189Encoded;
}
export const Inline1186: Schema.Schema<Inline1186, Inline1186Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline1186)),
  budget: Schema.optional(Schema.Number),
  campaignId: Schema.String,
  endDate: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  portfolioId: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.suspend(() => Inline1189)),
});

export interface Inline1187 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline1187Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline1187: Schema.Schema<Inline1187, Inline1187Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline1188 {
  readonly audienceSegments?: ReadonlyArray<Inline1188>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline1188Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline1188Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline1188: Schema.Schema<Inline1188, Inline1188Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline1188))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1189 {

}
export interface Inline1189Encoded {

}
export const Inline1189: Schema.Schema<Inline1189, Inline1189Encoded, never> = Schema.Struct({

});

export interface Inline119 {
  readonly audienceSegments?: ReadonlyArray<Inline119>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline119Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline119Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline119: Schema.Schema<Inline119, Inline119Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline119))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1190 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1190Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1190: Schema.Schema<Inline1190, Inline1190Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1193 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1193Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1193: Schema.Schema<Inline1193, Inline1193Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1194 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1194Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1194: Schema.Schema<Inline1194, Inline1194Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1195 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1195Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1195: Schema.Schema<Inline1195, Inline1195Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1196 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1196Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1196: Schema.Schema<Inline1196, Inline1196Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline1197 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1197Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1197: Schema.Schema<Inline1197, Inline1197Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1198 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1198Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1198: Schema.Schema<Inline1198, Inline1198Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline12 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline12;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline12Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline12Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline12: Schema.Schema<Inline12, Inline12Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline12),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline120 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline120Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline120: Schema.Schema<Inline120, Inline120Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1200 {
  readonly campaigns?: ReadonlyArray<Inline1200>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export interface Inline1200Encoded {
  readonly campaigns?: ReadonlyArray<Inline1200Encoded>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export const Inline1200: Schema.Schema<Inline1200, Inline1200Encoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline1200))),
  nextToken: Schema.optional(Schema.String),
  totalCount: Schema.optional(Schema.Number),
});

export interface Inline1201 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline1201Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline1201: Schema.Schema<Inline1201, Inline1201Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline1202 {
  readonly audienceSegments?: ReadonlyArray<Inline1202>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline1202Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline1202Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline1202: Schema.Schema<Inline1202, Inline1202Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline1202))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline1203 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline1203Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline1203: Schema.Schema<Inline1203, Inline1203Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1204 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline1204Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline1204: Schema.Schema<Inline1204, Inline1204Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline1205 {

}
export interface Inline1205Encoded {

}
export const Inline1205: Schema.Schema<Inline1205, Inline1205Encoded, never> = Schema.Struct({

});

export interface Inline1207 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1207Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1207: Schema.Schema<Inline1207, Inline1207Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1208 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1208Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1208: Schema.Schema<Inline1208, Inline1208Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1209 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline1209Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline1209: Schema.Schema<Inline1209, Inline1209Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline121 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline121Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline121: Schema.Schema<Inline121, Inline121Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline1210 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1210Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1210: Schema.Schema<Inline1210, Inline1210Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1211 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1211Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1211: Schema.Schema<Inline1211, Inline1211Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1213 {
  readonly jobId?: string;
}
export interface Inline1213Encoded {
  readonly jobId?: string;
}
export const Inline1213: Schema.Schema<Inline1213, Inline1213Encoded, never> = Schema.Struct({
  jobId: Schema.optional(Schema.String),
});

export interface Inline1216 {
  readonly campaigns?: ReadonlyArray<Inline1216>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}
export interface Inline1216Encoded {
  readonly campaigns?: ReadonlyArray<Inline1216Encoded>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}
export const Inline1216: Schema.Schema<Inline1216, Inline1216Encoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline1216))),
  jobId: Schema.optional(Schema.String),
  migrationJobStatus: Schema.optional(Schema.String),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1219 {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}
export interface Inline1219Encoded {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}
export const Inline1219: Schema.Schema<Inline1219, Inline1219Encoded, never> = Schema.Struct({
  jobId: Schema.optional(Schema.String),
  migrationJobStatus: Schema.optional(Schema.String),
  migrationJobStatusReason: Schema.optional(Schema.String),
});

export interface Inline122 {

}
export interface Inline122Encoded {

}
export const Inline122: Schema.Schema<Inline122, Inline122Encoded, never> = Schema.Struct({

});

export interface Inline1222 {
  readonly campaigns?: ReadonlyArray<Inline1222>;
  readonly nextToken?: string;
}
export interface Inline1222Encoded {
  readonly campaigns?: ReadonlyArray<Inline1222Encoded>;
  readonly nextToken?: string;
}
export const Inline1222: Schema.Schema<Inline1222, Inline1222Encoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline1222))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline1224 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1224Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1224: Schema.Schema<Inline1224, Inline1224Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1225 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1225Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1225: Schema.Schema<Inline1225, Inline1225Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1226 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1226Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1226: Schema.Schema<Inline1226, Inline1226Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1227 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1227Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1227: Schema.Schema<Inline1227, Inline1227Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1228 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1228Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1228: Schema.Schema<Inline1228, Inline1228Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1230 {
  readonly migrations?: ReadonlyArray<Inline1230>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export interface Inline1230Encoded {
  readonly migrations?: ReadonlyArray<Inline1230Encoded>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export const Inline1230: Schema.Schema<Inline1230, Inline1230Encoded, never> = Schema.Struct({
  migrations: Schema.optional(Schema.Array(Schema.suspend(() => Inline1230))),
  nextToken: Schema.optional(Schema.String),
  totalCount: Schema.optional(Schema.Number),
});

export interface Inline1231 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline1231Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline1231: Schema.Schema<Inline1231, Inline1231Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline1232 {
  readonly assetId?: string;
  readonly crop?: Inline1232;
  readonly url?: string;
}
export interface Inline1232Encoded {
  readonly assetId?: string;
  readonly crop?: Inline1232Encoded;
  readonly url?: string;
}
export const Inline1232: Schema.Schema<Inline1232, Inline1232Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline1232)),
  url: Schema.optional(Schema.String),
});

export interface Inline1233 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline1233Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline1233: Schema.Schema<Inline1233, Inline1233Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline1234 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline1234Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline1234: Schema.Schema<Inline1234, Inline1234Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1235 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline1235Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline1235: Schema.Schema<Inline1235, Inline1235Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline1236Encoded {
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
export const Inline1236: Schema.Schema<Inline1236, Inline1236Encoded, never> = Schema.Struct({
  adGroupId: Schema.optional(Schema.String),
  adId: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  migrationType: Schema.optional(Schema.String),
  optionType: Schema.String,
  rationale: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

export interface Inline1238 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1238Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1238: Schema.Schema<Inline1238, Inline1238Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1239 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1239Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1239: Schema.Schema<Inline1239, Inline1239Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline124 {
  readonly errors?: ReadonlyArray<Inline124>;
  readonly index: number;
}
export interface Inline124Encoded {
  readonly errors?: ReadonlyArray<Inline124Encoded>;
  readonly index: number;
}
export const Inline124: Schema.Schema<Inline124, Inline124Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline124))),
  index: Schema.Number,
});

export interface Inline1240 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1240Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1240: Schema.Schema<Inline1240, Inline1240Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1241 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1241Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1241: Schema.Schema<Inline1241, Inline1241Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline1242 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline1242Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline1242: Schema.Schema<Inline1242, Inline1242Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline125 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline125;
  readonly optimizationRuleId: string;
}
export interface Inline125Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline125Encoded;
  readonly optimizationRuleId: string;
}
export const Inline125: Schema.Schema<Inline125, Inline125Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline125),
  optimizationRuleId: Schema.String,
});

export interface Inline127 {
  readonly errors?: ReadonlyArray<Inline127>;
  readonly index: number;
}
export interface Inline127Encoded {
  readonly errors?: ReadonlyArray<Inline127Encoded>;
  readonly index: number;
}
export const Inline127: Schema.Schema<Inline127, Inline127Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline127))),
  index: Schema.Number,
});

export interface Inline128 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline128;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline128Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline128Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline128: Schema.Schema<Inline128, Inline128Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline128),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline129 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export interface Inline129Encoded {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export const Inline129: Schema.Schema<Inline129, Inline129Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeVersion: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline131 {
  readonly errors?: ReadonlyArray<Inline131>;
  readonly index: number;
}
export interface Inline131Encoded {
  readonly errors?: ReadonlyArray<Inline131Encoded>;
  readonly index: number;
}
export const Inline131: Schema.Schema<Inline131, Inline131Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline131))),
  index: Schema.Number,
});

export interface Inline132 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export interface Inline132Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export const Inline132: Schema.Schema<Inline132, Inline132Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRuleId: Schema.String,
});

export interface Inline134 {
  readonly errors?: ReadonlyArray<Inline134>;
  readonly index: number;
}
export interface Inline134Encoded {
  readonly errors?: ReadonlyArray<Inline134Encoded>;
  readonly index: number;
}
export const Inline134: Schema.Schema<Inline134, Inline134Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline134))),
  index: Schema.Number,
});

export interface Inline135 {
  readonly index: number;
  readonly optimizationRule: Inline135;
  readonly optimizationRuleId: string;
}
export interface Inline135Encoded {
  readonly index: number;
  readonly optimizationRule: Inline135Encoded;
  readonly optimizationRuleId: string;
}
export const Inline135: Schema.Schema<Inline135, Inline135Encoded, never> = Schema.Struct({
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline135),
  optimizationRuleId: Schema.String,
});

export interface Inline137 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline137>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline138>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline139>;
}
export interface Inline137Encoded {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline137Encoded>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline138Encoded>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline139Encoded>;
}
export const Inline137: Schema.Schema<Inline137, Inline137Encoded, never> = Schema.Struct({
  bidAdjustmentsByPlacement: Schema.optional(Schema.Array(Schema.suspend(() => Inline137))),
  bidAdjustmentsByShopperSegment: Schema.optional(Schema.Array(Schema.suspend(() => Inline138))),
  bidOptimization: Schema.optional(Schema.Boolean),
  bidOptimizationStrategy: Schema.optional(Schema.String),
  shopperCohortBidAdjustments: Schema.optional(Schema.Array(Schema.suspend(() => Inline139))),
});

export interface Inline138 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline138Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline138: Schema.Schema<Inline138, Inline138Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline139 {
  readonly audienceSegments?: ReadonlyArray<Inline139>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline139Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline139Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline139: Schema.Schema<Inline139, Inline139Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline139))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline14 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline14Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline14: Schema.Schema<Inline14, Inline14Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline140 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline140Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline140: Schema.Schema<Inline140, Inline140Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline141 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline141Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline141: Schema.Schema<Inline141, Inline141Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline142 {

}
export interface Inline142Encoded {

}
export const Inline142: Schema.Schema<Inline142, Inline142Encoded, never> = Schema.Struct({

});

export interface Inline146 {
  readonly biddingError?: Inline146;
  readonly billingError?: Inline147;
  readonly budgetError?: Inline148;
  readonly dateError?: Inline149;
  readonly otherError?: Inline150;
  readonly rangeError?: Inline151;
}
export interface Inline146Encoded {
  readonly biddingError?: Inline146Encoded;
  readonly billingError?: Inline147Encoded;
  readonly budgetError?: Inline148Encoded;
  readonly dateError?: Inline149Encoded;
  readonly otherError?: Inline150Encoded;
  readonly rangeError?: Inline151Encoded;
}
export const Inline146: Schema.Schema<Inline146, Inline146Encoded, never> = Schema.Struct({
  biddingError: Schema.optional(Schema.suspend(() => Inline146)),
  billingError: Schema.optional(Schema.suspend(() => Inline147)),
  budgetError: Schema.optional(Schema.suspend(() => Inline148)),
  dateError: Schema.optional(Schema.suspend(() => Inline149)),
  otherError: Schema.optional(Schema.suspend(() => Inline150)),
  rangeError: Schema.optional(Schema.suspend(() => Inline151)),
});

export interface Inline147 {
  readonly cause: Inline147;
  readonly message: string;
  readonly reason: string;
}
export interface Inline147Encoded {
  readonly cause: Inline147Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline147: Schema.Schema<Inline147, Inline147Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline147),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline148 {
  readonly cause: Inline148;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline148Encoded {
  readonly cause: Inline148Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline148: Schema.Schema<Inline148, Inline148Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline148),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline149 {
  readonly cause: Inline149;
  readonly message: string;
  readonly reason: string;
}
export interface Inline149Encoded {
  readonly cause: Inline149Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline149: Schema.Schema<Inline149, Inline149Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline149),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline150 {
  readonly cause: Inline150;
  readonly message: string;
  readonly reason: string;
}
export interface Inline150Encoded {
  readonly cause: Inline150Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline150: Schema.Schema<Inline150, Inline150Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline150),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline151 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline151;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline151Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline151Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline151: Schema.Schema<Inline151, Inline151Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline151),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline153 {
  readonly cause: Inline153;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline153Encoded {
  readonly cause: Inline153Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline153: Schema.Schema<Inline153, Inline153Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline153),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline154 {
  readonly cause: Inline154;
  readonly message: string;
  readonly reason: string;
}
export interface Inline154Encoded {
  readonly cause: Inline154Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline154: Schema.Schema<Inline154, Inline154Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline154),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline155 {
  readonly cause: Inline155;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline155Encoded {
  readonly cause: Inline155Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline155: Schema.Schema<Inline155, Inline155Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline155),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline156 {
  readonly cause: Inline156;
  readonly message: string;
  readonly reason: string;
}
export interface Inline156Encoded {
  readonly cause: Inline156Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline156: Schema.Schema<Inline156, Inline156Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline156),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline157 {
  readonly cause: Inline157;
  readonly message: string;
  readonly reason: string;
}
export interface Inline157Encoded {
  readonly cause: Inline157Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline157: Schema.Schema<Inline157, Inline157Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline157),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline158 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline158;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline158Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline158Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline158: Schema.Schema<Inline158, Inline158Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline158),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline160 {
  readonly errorType: string;
  readonly errorValue: Inline160;
}
export interface Inline160Encoded {
  readonly errorType: string;
  readonly errorValue: Inline160Encoded;
}
export const Inline160: Schema.Schema<Inline160, Inline160Encoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline160),
});

export interface Inline161 {
  readonly cause: Inline161;
  readonly message: string;
  readonly reason: string;
}
export interface Inline161Encoded {
  readonly cause: Inline161Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline161: Schema.Schema<Inline161, Inline161Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline161),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline162 {
  readonly cause: Inline162;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline162Encoded {
  readonly cause: Inline162Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline162: Schema.Schema<Inline162, Inline162Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline162),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline163 {
  readonly cause: Inline163;
  readonly message: string;
  readonly reason: string;
}
export interface Inline163Encoded {
  readonly cause: Inline163Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline163: Schema.Schema<Inline163, Inline163Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline163),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline164 {
  readonly cause: Inline164;
  readonly message: string;
  readonly reason: string;
}
export interface Inline164Encoded {
  readonly cause: Inline164Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline164: Schema.Schema<Inline164, Inline164Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline164),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline165 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline165;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline165Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline165Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline165: Schema.Schema<Inline165, Inline165Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline165),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

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
export interface Inline167Encoded {
  readonly bidding?: Inline167Encoded;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline170Encoded;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline171Encoded;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline172Encoded;
  readonly targetedPGDealId?: string;
}
export const Inline167: Schema.Schema<Inline167, Inline167Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline167)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  campaignId: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  extendedData: Schema.optional(Schema.suspend(() => Inline170)),
  goal: Schema.optional(Schema.String),
  isMultiAdGroupsEnabled: Schema.optional(Schema.Boolean),
  kpi: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  ruleBasedBudget: Schema.optional(Schema.suspend(() => Inline171)),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline172)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface Inline168 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline168Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline168: Schema.Schema<Inline168, Inline168Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline169 {
  readonly audienceSegments?: ReadonlyArray<Inline169>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline169Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline169Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline169: Schema.Schema<Inline169, Inline169Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline169))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline17 {
  readonly errorType: string;
  readonly errorValue: Inline17;
}
export interface Inline17Encoded {
  readonly errorType: string;
  readonly errorValue: Inline17Encoded;
}
export const Inline17: Schema.Schema<Inline17, Inline17Encoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline17),
});

export interface Inline170 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline170Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline170: Schema.Schema<Inline170, Inline170Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline171 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline171Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline171: Schema.Schema<Inline171, Inline171Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline172 {

}
export interface Inline172Encoded {

}
export const Inline172: Schema.Schema<Inline172, Inline172Encoded, never> = Schema.Struct({

});

export interface Inline18 {
  readonly cause: Inline18;
  readonly message: string;
  readonly reason: string;
}
export interface Inline18Encoded {
  readonly cause: Inline18Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline18: Schema.Schema<Inline18, Inline18Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline18),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline182 {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline182Encoded {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline182: Schema.Schema<Inline182, Inline182Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline184 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline184;
  readonly brandName: string;
}
export interface Inline184Encoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline184Encoded;
  readonly brandName: string;
}
export const Inline184: Schema.Schema<Inline184, Inline184Encoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline184)),
  brandName: Schema.String,
});

export interface Inline186 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline186Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline186: Schema.Schema<Inline186, Inline186Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

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
export interface Inline188Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline188Encoded;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Inline188: Schema.Schema<Inline188, Inline188Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline188)),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline189 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline189Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline189: Schema.Schema<Inline189, Inline189Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline19 {
  readonly cause: Inline19;
  readonly message: string;
  readonly reason: string;
}
export interface Inline19Encoded {
  readonly cause: Inline19Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline19: Schema.Schema<Inline19, Inline19Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline19),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline191 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline191Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline191: Schema.Schema<Inline191, Inline191Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

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
export interface Inline193Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline193Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline194Encoded;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline193: Schema.Schema<Inline193, Inline193Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline193)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline194)),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline194 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline194Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline194: Schema.Schema<Inline194, Inline194Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline197 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline197Encoded {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline197: Schema.Schema<Inline197, Inline197Encoded, never> = Schema.Struct({
  associatedCampaignIds: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline199 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline199>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline200>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline201>;
}
export interface Inline199Encoded {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline199Encoded>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline200Encoded>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline201Encoded>;
}
export const Inline199: Schema.Schema<Inline199, Inline199Encoded, never> = Schema.Struct({
  bidAdjustmentsByPlacement: Schema.optional(Schema.Array(Schema.suspend(() => Inline199))),
  bidAdjustmentsByShopperSegment: Schema.optional(Schema.Array(Schema.suspend(() => Inline200))),
  bidOptimization: Schema.optional(Schema.Boolean),
  bidOptimizationStrategy: Schema.optional(Schema.String),
  shopperCohortBidAdjustments: Schema.optional(Schema.Array(Schema.suspend(() => Inline201))),
});

export interface Inline20 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline20;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline20Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline20Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline20: Schema.Schema<Inline20, Inline20Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline20),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline200 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline200Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline200: Schema.Schema<Inline200, Inline200Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline201 {
  readonly audienceSegments?: ReadonlyArray<Inline201>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline201Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline201Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline201: Schema.Schema<Inline201, Inline201Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline201))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline202 {

}
export interface Inline202Encoded {

}
export const Inline202: Schema.Schema<Inline202, Inline202Encoded, never> = Schema.Struct({

});

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
export interface Inline204Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline204Encoded;
  readonly brandName?: string;
  readonly collectionName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline205Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
}
export const Inline204: Schema.Schema<Inline204, Inline204Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline204)),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline205))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline205 {
  readonly assetId?: string;
  readonly crop?: Inline205;
  readonly url?: string;
}
export interface Inline205Encoded {
  readonly assetId?: string;
  readonly crop?: Inline205Encoded;
  readonly url?: string;
}
export const Inline205: Schema.Schema<Inline205, Inline205Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline205)),
  url: Schema.optional(Schema.String),
});

export interface Inline206 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline206Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline206: Schema.Schema<Inline206, Inline206Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline208 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline208Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline208: Schema.Schema<Inline208, Inline208Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline209 {
  readonly assetId?: string;
  readonly crop?: Inline209;
  readonly url?: string;
}
export interface Inline209Encoded {
  readonly assetId?: string;
  readonly crop?: Inline209Encoded;
  readonly url?: string;
}
export const Inline209: Schema.Schema<Inline209, Inline209Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline209)),
  url: Schema.optional(Schema.String),
});

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
export interface Inline211Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline211Encoded;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline212Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline213Encoded;
}
export const Inline211: Schema.Schema<Inline211, Inline211Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline211)),
  brandName: Schema.String,
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline212))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline213)),
});

export interface Inline212 {
  readonly assetId?: string;
  readonly crop?: Inline212;
  readonly url?: string;
}
export interface Inline212Encoded {
  readonly assetId?: string;
  readonly crop?: Inline212Encoded;
  readonly url?: string;
}
export const Inline212: Schema.Schema<Inline212, Inline212Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline212)),
  url: Schema.optional(Schema.String),
});

export interface Inline213 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline213Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline213: Schema.Schema<Inline213, Inline213Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline216 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline216;
  readonly brandName: string;
  readonly landingPage?: Inline217;
  readonly title?: string;
}
export interface Inline216Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline216Encoded;
  readonly brandName: string;
  readonly landingPage?: Inline217Encoded;
  readonly title?: string;
}
export const Inline216: Schema.Schema<Inline216, Inline216Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline216)),
  brandName: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline217)),
  title: Schema.optional(Schema.String),
});

export interface Inline217 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline217Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline217: Schema.Schema<Inline217, Inline217Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline219 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline219Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline219: Schema.Schema<Inline219, Inline219Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline22 {
  readonly biddingError?: Inline22;
  readonly dateError?: Inline23;
  readonly otherError?: Inline24;
  readonly rangeError?: Inline25;
}
export interface Inline22Encoded {
  readonly biddingError?: Inline22Encoded;
  readonly dateError?: Inline23Encoded;
  readonly otherError?: Inline24Encoded;
  readonly rangeError?: Inline25Encoded;
}
export const Inline22: Schema.Schema<Inline22, Inline22Encoded, never> = Schema.Struct({
  biddingError: Schema.optional(Schema.suspend(() => Inline22)),
  dateError: Schema.optional(Schema.suspend(() => Inline23)),
  otherError: Schema.optional(Schema.suspend(() => Inline24)),
  rangeError: Schema.optional(Schema.suspend(() => Inline25)),
});

export interface Inline220 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline220Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline220: Schema.Schema<Inline220, Inline220Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline222 {
  readonly attributeName: string;
  readonly criteria: Inline222;
}
export interface Inline222Encoded {
  readonly attributeName: string;
  readonly criteria: Inline222Encoded;
}
export const Inline222: Schema.Schema<Inline222, Inline222Encoded, never> = Schema.Struct({
  attributeName: Schema.String,
  criteria: Schema.suspend(() => Inline222),
});

export interface Inline224 {
  readonly conditions?: ReadonlyArray<Inline224>;
  readonly optimizationRuleId?: string;
}
export interface Inline224Encoded {
  readonly conditions?: ReadonlyArray<Inline224Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline224: Schema.Schema<Inline224, Inline224Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline224))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline227 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline227;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline228;
  readonly headline?: string;
}
export interface Inline227Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline227Encoded;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline228Encoded;
  readonly headline?: string;
}
export const Inline227: Schema.Schema<Inline227, Inline227Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline227)),
  brandName: Schema.optional(Schema.String),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline228)),
  headline: Schema.optional(Schema.String),
});

export interface Inline228 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline228Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline228: Schema.Schema<Inline228, Inline228Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline229 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline229Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline229: Schema.Schema<Inline229, Inline229Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline23 {
  readonly cause: Inline23;
  readonly message: string;
  readonly reason: string;
}
export interface Inline23Encoded {
  readonly cause: Inline23Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline23: Schema.Schema<Inline23, Inline23Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline23),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline231 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline231Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline231: Schema.Schema<Inline231, Inline231Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline232 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline232Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline232: Schema.Schema<Inline232, Inline232Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline234 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline234;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline235;
  readonly headline: string;
}
export interface Inline234Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline234Encoded;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline235Encoded;
  readonly headline: string;
}
export const Inline234: Schema.Schema<Inline234, Inline234Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline234)),
  brandName: Schema.String,
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline235)),
  headline: Schema.String,
});

export interface Inline235 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline235Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline235: Schema.Schema<Inline235, Inline235Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline238 {
  readonly budgetIncreaseBy?: Inline238;
  readonly duration?: Inline239;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline241;
  readonly recurrence?: Inline242;
  readonly ruleType?: string;
}
export interface Inline238Encoded {
  readonly budgetIncreaseBy?: Inline238Encoded;
  readonly duration?: Inline239Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline241Encoded;
  readonly recurrence?: Inline242Encoded;
  readonly ruleType?: string;
}
export const Inline238: Schema.Schema<Inline238, Inline238Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline238)),
  duration: Schema.optional(Schema.suspend(() => Inline239)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline241)),
  recurrence: Schema.optional(Schema.suspend(() => Inline242)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline239 {
  readonly dateRangeTypeRuleDuration?: Inline239;
  readonly eventTypeRuleDuration?: Inline240;
}
export interface Inline239Encoded {
  readonly dateRangeTypeRuleDuration?: Inline239Encoded;
  readonly eventTypeRuleDuration?: Inline240Encoded;
}
export const Inline239: Schema.Schema<Inline239, Inline239Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline239)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline240)),
});

export interface Inline24 {
  readonly cause: Inline24;
  readonly message: string;
  readonly reason: string;
}
export interface Inline24Encoded {
  readonly cause: Inline24Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline24: Schema.Schema<Inline24, Inline24Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline24),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline240 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline240Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline240: Schema.Schema<Inline240, Inline240Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline241 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline241Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline241: Schema.Schema<Inline241, Inline241Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline242 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline242>;
  readonly type?: string;
}
export interface Inline242Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline242Encoded>;
  readonly type?: string;
}
export const Inline242: Schema.Schema<Inline242, Inline242Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline242))),
  type: Schema.optional(Schema.String),
});

export interface Inline244 {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export interface Inline244Encoded {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
}
export const Inline244: Schema.Schema<Inline244, Inline244Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  name: Schema.String,
  state: Schema.String,
});

export interface Inline246 {
  readonly error?: ReadonlyArray<Inline246>;
  readonly success?: ReadonlyArray<Inline250>;
}
export interface Inline246Encoded {
  readonly error?: ReadonlyArray<Inline246Encoded>;
  readonly success?: ReadonlyArray<Inline250Encoded>;
}
export const Inline246: Schema.Schema<Inline246, Inline246Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline246))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline250))),
});

export interface Inline247 {
  readonly cause: Inline247;
  readonly message: string;
  readonly reason: string;
}
export interface Inline247Encoded {
  readonly cause: Inline247Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline247: Schema.Schema<Inline247, Inline247Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline247),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline248 {
  readonly cause: Inline248;
  readonly message: string;
  readonly reason: string;
}
export interface Inline248Encoded {
  readonly cause: Inline248Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline248: Schema.Schema<Inline248, Inline248Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline248),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline249 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline249;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline249Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline249Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline249: Schema.Schema<Inline249, Inline249Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline249),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline25 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline25;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline25Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline25Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline25: Schema.Schema<Inline25, Inline25Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline25),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline250 {
  readonly adGroup?: Inline250;
  readonly adGroupId?: string;
  readonly index: number;
}
export interface Inline250Encoded {
  readonly adGroup?: Inline250Encoded;
  readonly adGroupId?: string;
  readonly index: number;
}
export const Inline250: Schema.Schema<Inline250, Inline250Encoded, never> = Schema.Struct({
  adGroup: Schema.optional(Schema.suspend(() => Inline250)),
  adGroupId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline252 {
  readonly adGroupId: string;
  readonly creative: Inline252;
  readonly name: string;
  readonly state: string;
}
export interface Inline252Encoded {
  readonly adGroupId: string;
  readonly creative: Inline252Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline252: Schema.Schema<Inline252, Inline252Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline252),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline254 {
  readonly error?: ReadonlyArray<Inline254>;
  readonly success?: ReadonlyArray<Inline256>;
}
export interface Inline254Encoded {
  readonly error?: ReadonlyArray<Inline254Encoded>;
  readonly success?: ReadonlyArray<Inline256Encoded>;
}
export const Inline254: Schema.Schema<Inline254, Inline254Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline254))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline256))),
});

export interface Inline255 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline255;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline255Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline255Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline255: Schema.Schema<Inline255, Inline255Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline255),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline256 {
  readonly ad?: Inline256;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline256Encoded {
  readonly ad?: Inline256Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline256: Schema.Schema<Inline256, Inline256Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline256)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline257 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline257Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline257: Schema.Schema<Inline257, Inline257Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline258 {
  readonly assetId?: string;
  readonly crop?: Inline258;
  readonly url?: string;
}
export interface Inline258Encoded {
  readonly assetId?: string;
  readonly crop?: Inline258Encoded;
  readonly url?: string;
}
export const Inline258: Schema.Schema<Inline258, Inline258Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline258)),
  url: Schema.optional(Schema.String),
});

export interface Inline259 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline259Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline259: Schema.Schema<Inline259, Inline259Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline260 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline260Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline260: Schema.Schema<Inline260, Inline260Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline261 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline261Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline261: Schema.Schema<Inline261, Inline261Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline263 {
  readonly adGroupId: string;
  readonly creative: Inline263;
  readonly landingPage: Inline264;
  readonly name: string;
  readonly state: string;
}
export interface Inline263Encoded {
  readonly adGroupId: string;
  readonly creative: Inline263Encoded;
  readonly landingPage: Inline264Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline263: Schema.Schema<Inline263, Inline263Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline263),
  landingPage: Schema.suspend(() => Inline264),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline264 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline264Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline264: Schema.Schema<Inline264, Inline264Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline266 {
  readonly error?: ReadonlyArray<Inline266>;
  readonly success?: ReadonlyArray<Inline268>;
}
export interface Inline266Encoded {
  readonly error?: ReadonlyArray<Inline266Encoded>;
  readonly success?: ReadonlyArray<Inline268Encoded>;
}
export const Inline266: Schema.Schema<Inline266, Inline266Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline266))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline268))),
});

export interface Inline267 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline267;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline267Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline267Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline267: Schema.Schema<Inline267, Inline267Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline267),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline268 {
  readonly ad?: Inline268;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline268Encoded {
  readonly ad?: Inline268Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline268: Schema.Schema<Inline268, Inline268Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline268)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline269 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline269Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline269: Schema.Schema<Inline269, Inline269Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline27 {
  readonly cause: Inline27;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline27Encoded {
  readonly cause: Inline27Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline27: Schema.Schema<Inline27, Inline27Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline27),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline270 {
  readonly assetId?: string;
  readonly crop?: Inline270;
  readonly url?: string;
}
export interface Inline270Encoded {
  readonly assetId?: string;
  readonly crop?: Inline270Encoded;
  readonly url?: string;
}
export const Inline270: Schema.Schema<Inline270, Inline270Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline270)),
  url: Schema.optional(Schema.String),
});

export interface Inline271 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline271Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline271: Schema.Schema<Inline271, Inline271Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline272 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline272Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline272: Schema.Schema<Inline272, Inline272Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline273 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline273Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline273: Schema.Schema<Inline273, Inline273Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline275Encoded {
  readonly bidding?: Inline275Encoded;
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
  readonly tags?: Inline278Encoded;
  readonly targetedPGDealId?: string;
}
export const Inline275: Schema.Schema<Inline275, Inline275Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline275)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline278)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface Inline276 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline276Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline276: Schema.Schema<Inline276, Inline276Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline277 {
  readonly audienceSegments?: ReadonlyArray<Inline277>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline277Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline277Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline277: Schema.Schema<Inline277, Inline277Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline277))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline278 {

}
export interface Inline278Encoded {

}
export const Inline278: Schema.Schema<Inline278, Inline278Encoded, never> = Schema.Struct({

});

export interface Inline28 {
  readonly cause: Inline28;
  readonly message: string;
  readonly reason: string;
}
export interface Inline28Encoded {
  readonly cause: Inline28Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline28: Schema.Schema<Inline28, Inline28Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline28),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline280 {
  readonly error?: ReadonlyArray<Inline280>;
  readonly success?: ReadonlyArray<Inline286>;
}
export interface Inline280Encoded {
  readonly error?: ReadonlyArray<Inline280Encoded>;
  readonly success?: ReadonlyArray<Inline286Encoded>;
}
export const Inline280: Schema.Schema<Inline280, Inline280Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline280))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline286))),
});

export interface Inline281 {
  readonly cause: Inline281;
  readonly message: string;
  readonly reason: string;
}
export interface Inline281Encoded {
  readonly cause: Inline281Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline281: Schema.Schema<Inline281, Inline281Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline281),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline282 {
  readonly cause: Inline282;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline282Encoded {
  readonly cause: Inline282Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline282: Schema.Schema<Inline282, Inline282Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline282),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline283 {
  readonly cause: Inline283;
  readonly message: string;
  readonly reason: string;
}
export interface Inline283Encoded {
  readonly cause: Inline283Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline283: Schema.Schema<Inline283, Inline283Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline283),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline284 {
  readonly cause: Inline284;
  readonly message: string;
  readonly reason: string;
}
export interface Inline284Encoded {
  readonly cause: Inline284Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline284: Schema.Schema<Inline284, Inline284Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline284),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline285 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline285;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline285Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline285Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline285: Schema.Schema<Inline285, Inline285Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline285),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline286 {
  readonly campaign?: Inline286;
  readonly campaignId?: string;
  readonly index: number;
}
export interface Inline286Encoded {
  readonly campaign?: Inline286Encoded;
  readonly campaignId?: string;
  readonly index: number;
}
export const Inline286: Schema.Schema<Inline286, Inline286Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline286)),
  campaignId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline287 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline287Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline287: Schema.Schema<Inline287, Inline287Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline288 {
  readonly audienceSegments?: ReadonlyArray<Inline288>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline288Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline288Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline288: Schema.Schema<Inline288, Inline288Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline288))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline289 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline289Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline289: Schema.Schema<Inline289, Inline289Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline29 {
  readonly cause: Inline29;
  readonly message: string;
  readonly reason: string;
}
export interface Inline29Encoded {
  readonly cause: Inline29Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline29: Schema.Schema<Inline29, Inline29Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline29),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline290 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline290Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline290: Schema.Schema<Inline290, Inline290Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline291 {

}
export interface Inline291Encoded {

}
export const Inline291: Schema.Schema<Inline291, Inline291Encoded, never> = Schema.Struct({

});

export interface Inline293 {
  readonly adGroupId: string;
  readonly creative: Inline293;
  readonly landingPage: Inline295;
  readonly name: string;
  readonly state: string;
}
export interface Inline293Encoded {
  readonly adGroupId: string;
  readonly creative: Inline293Encoded;
  readonly landingPage: Inline295Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline293: Schema.Schema<Inline293, Inline293Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline293),
  landingPage: Schema.suspend(() => Inline295),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline294 {
  readonly assetId?: string;
  readonly crop?: Inline294;
  readonly url?: string;
}
export interface Inline294Encoded {
  readonly assetId?: string;
  readonly crop?: Inline294Encoded;
  readonly url?: string;
}
export const Inline294: Schema.Schema<Inline294, Inline294Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline294)),
  url: Schema.optional(Schema.String),
});

export interface Inline295 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline295Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline295: Schema.Schema<Inline295, Inline295Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline297 {
  readonly error?: ReadonlyArray<Inline297>;
  readonly success?: ReadonlyArray<Inline299>;
}
export interface Inline297Encoded {
  readonly error?: ReadonlyArray<Inline297Encoded>;
  readonly success?: ReadonlyArray<Inline299Encoded>;
}
export const Inline297: Schema.Schema<Inline297, Inline297Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline297))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline299))),
});

export interface Inline298 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline298;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline298Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline298Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline298: Schema.Schema<Inline298, Inline298Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline298),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline299 {
  readonly ad?: Inline299;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline299Encoded {
  readonly ad?: Inline299Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline299: Schema.Schema<Inline299, Inline299Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline299)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

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
export interface Inline3Encoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline3Encoded;
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
  readonly customImageCrop?: Inline4Encoded;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline5Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline6Encoded>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Inline3: Schema.Schema<Inline3, Inline3Encoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline3)),
  brandLogoUrl: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  creativeStatus: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline4)),
  customImageUrl: Schema.optional(Schema.String),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline5))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  originalHeadline: Schema.optional(Schema.String),
  originalHeadlines: Schema.optional(Schema.Array(Schema.String)),
  originalVideoAssetIds: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline6))),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline30 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline30;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline30Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline30Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline30: Schema.Schema<Inline30, Inline30Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline30),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline300 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline300Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline300: Schema.Schema<Inline300, Inline300Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline301 {
  readonly assetId?: string;
  readonly crop?: Inline301;
  readonly url?: string;
}
export interface Inline301Encoded {
  readonly assetId?: string;
  readonly crop?: Inline301Encoded;
  readonly url?: string;
}
export const Inline301: Schema.Schema<Inline301, Inline301Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline301)),
  url: Schema.optional(Schema.String),
});

export interface Inline302 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline302Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline302: Schema.Schema<Inline302, Inline302Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline303 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline303Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline303: Schema.Schema<Inline303, Inline303Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline304 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline304Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline304: Schema.Schema<Inline304, Inline304Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline306 {
  readonly adGroupId: string;
  readonly creative: Inline306;
  readonly name: string;
  readonly state: string;
}
export interface Inline306Encoded {
  readonly adGroupId: string;
  readonly creative: Inline306Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline306: Schema.Schema<Inline306, Inline306Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline306),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline307 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline307Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline307: Schema.Schema<Inline307, Inline307Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline309 {
  readonly error?: ReadonlyArray<Inline309>;
  readonly success?: ReadonlyArray<Inline311>;
}
export interface Inline309Encoded {
  readonly error?: ReadonlyArray<Inline309Encoded>;
  readonly success?: ReadonlyArray<Inline311Encoded>;
}
export const Inline309: Schema.Schema<Inline309, Inline309Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline309))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline311))),
});

export interface Inline310 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline310;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline310Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline310Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline310: Schema.Schema<Inline310, Inline310Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline310),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline311 {
  readonly ad?: Inline311;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline311Encoded {
  readonly ad?: Inline311Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline311: Schema.Schema<Inline311, Inline311Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline311)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline312 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline312Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline312: Schema.Schema<Inline312, Inline312Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline313 {
  readonly assetId?: string;
  readonly crop?: Inline313;
  readonly url?: string;
}
export interface Inline313Encoded {
  readonly assetId?: string;
  readonly crop?: Inline313Encoded;
  readonly url?: string;
}
export const Inline313: Schema.Schema<Inline313, Inline313Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline313)),
  url: Schema.optional(Schema.String),
});

export interface Inline314 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline314Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline314: Schema.Schema<Inline314, Inline314Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline315 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline315Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline315: Schema.Schema<Inline315, Inline315Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline316 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline316Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline316: Schema.Schema<Inline316, Inline316Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline318 {
  readonly conditions?: ReadonlyArray<Inline318>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline318Encoded {
  readonly conditions?: ReadonlyArray<Inline318Encoded>;
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline318: Schema.Schema<Inline318, Inline318Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline318))),
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline320 {
  readonly error?: ReadonlyArray<Inline320>;
  readonly success?: ReadonlyArray<Inline321>;
}
export interface Inline320Encoded {
  readonly error?: ReadonlyArray<Inline320Encoded>;
  readonly success?: ReadonlyArray<Inline321Encoded>;
}
export const Inline320: Schema.Schema<Inline320, Inline320Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline320))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline321))),
});

export interface Inline321 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline321;
  readonly optimizationRuleId: string;
}
export interface Inline321Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline321Encoded;
  readonly optimizationRuleId: string;
}
export const Inline321: Schema.Schema<Inline321, Inline321Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline321),
  optimizationRuleId: Schema.String,
});

export interface Inline323 {
  readonly adGroupId: string;
  readonly creative: Inline323;
  readonly landingPage: Inline325;
  readonly name: string;
  readonly state: string;
}
export interface Inline323Encoded {
  readonly adGroupId: string;
  readonly creative: Inline323Encoded;
  readonly landingPage: Inline325Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline323: Schema.Schema<Inline323, Inline323Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline323),
  landingPage: Schema.suspend(() => Inline325),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline324 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline324Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline324: Schema.Schema<Inline324, Inline324Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline325 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline325Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline325: Schema.Schema<Inline325, Inline325Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline327 {
  readonly error?: ReadonlyArray<Inline327>;
  readonly success?: ReadonlyArray<Inline329>;
}
export interface Inline327Encoded {
  readonly error?: ReadonlyArray<Inline327Encoded>;
  readonly success?: ReadonlyArray<Inline329Encoded>;
}
export const Inline327: Schema.Schema<Inline327, Inline327Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline327))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline329))),
});

export interface Inline328 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline328;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline328Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline328Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline328: Schema.Schema<Inline328, Inline328Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline328),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline329 {
  readonly ad?: Inline329;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline329Encoded {
  readonly ad?: Inline329Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline329: Schema.Schema<Inline329, Inline329Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline329)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline33 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline33;
  readonly name: string;
  readonly state: string;
}
export interface Inline33Encoded {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline33Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline33: Schema.Schema<Inline33, Inline33Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  campaignId: Schema.String,
  extendedData: Schema.optional(Schema.suspend(() => Inline33)),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline330 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline330Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline330: Schema.Schema<Inline330, Inline330Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline331 {
  readonly assetId?: string;
  readonly crop?: Inline331;
  readonly url?: string;
}
export interface Inline331Encoded {
  readonly assetId?: string;
  readonly crop?: Inline331Encoded;
  readonly url?: string;
}
export const Inline331: Schema.Schema<Inline331, Inline331Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline331)),
  url: Schema.optional(Schema.String),
});

export interface Inline332 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline332Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline332: Schema.Schema<Inline332, Inline332Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline333 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline333Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline333: Schema.Schema<Inline333, Inline333Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline334 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline334Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline334: Schema.Schema<Inline334, Inline334Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline336 {
  readonly adGroupId: string;
  readonly creative: Inline336;
  readonly landingPage: Inline338;
  readonly name: string;
  readonly state: string;
}
export interface Inline336Encoded {
  readonly adGroupId: string;
  readonly creative: Inline336Encoded;
  readonly landingPage: Inline338Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline336: Schema.Schema<Inline336, Inline336Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline336),
  landingPage: Schema.suspend(() => Inline338),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline337 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline337Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline337: Schema.Schema<Inline337, Inline337Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline338 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline338Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline338: Schema.Schema<Inline338, Inline338Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline340 {
  readonly error?: ReadonlyArray<Inline340>;
  readonly success?: ReadonlyArray<Inline342>;
}
export interface Inline340Encoded {
  readonly error?: ReadonlyArray<Inline340Encoded>;
  readonly success?: ReadonlyArray<Inline342Encoded>;
}
export const Inline340: Schema.Schema<Inline340, Inline340Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline340))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline342))),
});

export interface Inline341 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline341;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline341Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline341Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline341: Schema.Schema<Inline341, Inline341Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline341),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline342 {
  readonly ad?: Inline342;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline342Encoded {
  readonly ad?: Inline342Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline342: Schema.Schema<Inline342, Inline342Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline342)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline343 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline343Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline343: Schema.Schema<Inline343, Inline343Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline344 {
  readonly assetId?: string;
  readonly crop?: Inline344;
  readonly url?: string;
}
export interface Inline344Encoded {
  readonly assetId?: string;
  readonly crop?: Inline344Encoded;
  readonly url?: string;
}
export const Inline344: Schema.Schema<Inline344, Inline344Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline344)),
  url: Schema.optional(Schema.String),
});

export interface Inline345 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline345Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline345: Schema.Schema<Inline345, Inline345Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline346 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline346Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline346: Schema.Schema<Inline346, Inline346Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline347 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline347Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline347: Schema.Schema<Inline347, Inline347Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline349 {
  readonly adGroupId: string;
  readonly creative: Inline349;
  readonly name: string;
  readonly state: string;
}
export interface Inline349Encoded {
  readonly adGroupId: string;
  readonly creative: Inline349Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline349: Schema.Schema<Inline349, Inline349Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  creative: Schema.suspend(() => Inline349),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline35 {
  readonly otherError?: Inline35;
  readonly rangeError?: Inline36;
}
export interface Inline35Encoded {
  readonly otherError?: Inline35Encoded;
  readonly rangeError?: Inline36Encoded;
}
export const Inline35: Schema.Schema<Inline35, Inline35Encoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline35)),
  rangeError: Schema.optional(Schema.suspend(() => Inline36)),
});

export interface Inline351 {
  readonly error?: ReadonlyArray<Inline351>;
  readonly success?: ReadonlyArray<Inline353>;
}
export interface Inline351Encoded {
  readonly error?: ReadonlyArray<Inline351Encoded>;
  readonly success?: ReadonlyArray<Inline353Encoded>;
}
export const Inline351: Schema.Schema<Inline351, Inline351Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline351))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline353))),
});

export interface Inline352 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline352;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline352Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline352Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline352: Schema.Schema<Inline352, Inline352Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline352),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline353 {
  readonly ad?: Inline353;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline353Encoded {
  readonly ad?: Inline353Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline353: Schema.Schema<Inline353, Inline353Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline353)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline354 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline354Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline354: Schema.Schema<Inline354, Inline354Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline355 {
  readonly assetId?: string;
  readonly crop?: Inline355;
  readonly url?: string;
}
export interface Inline355Encoded {
  readonly assetId?: string;
  readonly crop?: Inline355Encoded;
  readonly url?: string;
}
export const Inline355: Schema.Schema<Inline355, Inline355Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline355)),
  url: Schema.optional(Schema.String),
});

export interface Inline356 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline356Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline356: Schema.Schema<Inline356, Inline356Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline357 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline357Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline357: Schema.Schema<Inline357, Inline357Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline358 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline358Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline358: Schema.Schema<Inline358, Inline358Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline36 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline36;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline36Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline36Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline36: Schema.Schema<Inline36, Inline36Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline36),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

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
export interface Inline360Encoded {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline360Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline361Encoded>;
}
export const Inline360: Schema.Schema<Inline360, Inline360Encoded, never> = Schema.Struct({
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline360)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline361))),
});

export interface Inline361 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline361Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline361: Schema.Schema<Inline361, Inline361Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline362 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline362Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline362: Schema.Schema<Inline362, Inline362Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline364 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline364Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline364: Schema.Schema<Inline364, Inline364Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline365 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline365Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline365: Schema.Schema<Inline365, Inline365Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline367Encoded {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline367Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline368Encoded;
  readonly subpages: ReadonlyArray<Inline369Encoded>;
}
export const Inline367: Schema.Schema<Inline367, Inline367Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline367)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline368)),
  subpages: Schema.Array(Schema.suspend(() => Inline369)),
});

export interface Inline368 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline368Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline368: Schema.Schema<Inline368, Inline368Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline369 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline369Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline369: Schema.Schema<Inline369, Inline369Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline372 {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline372;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export interface Inline372Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline372Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Inline372: Schema.Schema<Inline372, Inline372Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline372)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline374 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline374Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline374: Schema.Schema<Inline374, Inline374Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline376 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline376;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export interface Inline376Encoded {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline376Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline376: Schema.Schema<Inline376, Inline376Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline376)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline379 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline379Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline379: Schema.Schema<Inline379, Inline379Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline38 {
  readonly cause: Inline38;
  readonly message: string;
  readonly reason: string;
}
export interface Inline38Encoded {
  readonly cause: Inline38Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline38: Schema.Schema<Inline38, Inline38Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline38),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline380 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline380Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline380: Schema.Schema<Inline380, Inline380Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline381 {
  readonly assetId?: string;
  readonly crop?: Inline381;
  readonly url?: string;
}
export interface Inline381Encoded {
  readonly assetId?: string;
  readonly crop?: Inline381Encoded;
  readonly url?: string;
}
export const Inline381: Schema.Schema<Inline381, Inline381Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline381)),
  url: Schema.optional(Schema.String),
});

export interface Inline382 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline382Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline382: Schema.Schema<Inline382, Inline382Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline384 {
  readonly errorType: string;
  readonly errorValue: Inline384;
}
export interface Inline384Encoded {
  readonly errorType: string;
  readonly errorValue: Inline384Encoded;
}
export const Inline384: Schema.Schema<Inline384, Inline384Encoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline384),
});

export interface Inline385 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline385;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline385Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline385Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline385: Schema.Schema<Inline385, Inline385Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline385),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline39 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline39;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline39Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline39Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline39: Schema.Schema<Inline39, Inline39Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline39),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline390 {
  readonly otherError?: Inline390;
  readonly rangeError?: Inline391;
}
export interface Inline390Encoded {
  readonly otherError?: Inline390Encoded;
  readonly rangeError?: Inline391Encoded;
}
export const Inline390: Schema.Schema<Inline390, Inline390Encoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline390)),
  rangeError: Schema.optional(Schema.suspend(() => Inline391)),
});

export interface Inline391 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline391;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline391Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline391Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline391: Schema.Schema<Inline391, Inline391Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline391),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline393 {
  readonly cause: Inline393;
  readonly message: string;
  readonly reason: string;
}
export interface Inline393Encoded {
  readonly cause: Inline393Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline393: Schema.Schema<Inline393, Inline393Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline393),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline394 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline394;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline394Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline394Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline394: Schema.Schema<Inline394, Inline394Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline394),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline396 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline396Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline396: Schema.Schema<Inline396, Inline396Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline397 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline397Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline397: Schema.Schema<Inline397, Inline397Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline398 {
  readonly assetId?: string;
  readonly crop?: Inline398;
  readonly url?: string;
}
export interface Inline398Encoded {
  readonly assetId?: string;
  readonly crop?: Inline398Encoded;
  readonly url?: string;
}
export const Inline398: Schema.Schema<Inline398, Inline398Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline398)),
  url: Schema.optional(Schema.String),
});

export interface Inline399 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export interface Inline399Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export const Inline399: Schema.Schema<Inline399, Inline399Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline4 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline4Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline4: Schema.Schema<Inline4, Inline4Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline400 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline400Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline400: Schema.Schema<Inline400, Inline400Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline406 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline406Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline406: Schema.Schema<Inline406, Inline406Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline409 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline409Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline409: Schema.Schema<Inline409, Inline409Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline413 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline413Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline413: Schema.Schema<Inline413, Inline413Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline415 {
  readonly error?: ReadonlyArray<Inline415>;
  readonly success?: ReadonlyArray<Inline419>;
}
export interface Inline415Encoded {
  readonly error?: ReadonlyArray<Inline415Encoded>;
  readonly success?: ReadonlyArray<Inline419Encoded>;
}
export const Inline415: Schema.Schema<Inline415, Inline415Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline415))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline419))),
});

export interface Inline416 {
  readonly cause: Inline416;
  readonly message: string;
  readonly reason: string;
}
export interface Inline416Encoded {
  readonly cause: Inline416Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline416: Schema.Schema<Inline416, Inline416Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline416),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline417 {
  readonly cause: Inline417;
  readonly message: string;
  readonly reason: string;
}
export interface Inline417Encoded {
  readonly cause: Inline417Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline417: Schema.Schema<Inline417, Inline417Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline417),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline418 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline418;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline418Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline418Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline418: Schema.Schema<Inline418, Inline418Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline418),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline419 {
  readonly adGroup?: Inline419;
  readonly adGroupId?: string;
  readonly index: number;
}
export interface Inline419Encoded {
  readonly adGroup?: Inline419Encoded;
  readonly adGroupId?: string;
  readonly index: number;
}
export const Inline419: Schema.Schema<Inline419, Inline419Encoded, never> = Schema.Struct({
  adGroup: Schema.optional(Schema.suspend(() => Inline419)),
  adGroupId: Schema.optional(Schema.String),
  index: Schema.Number,
});

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
export interface Inline42Encoded {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline42Encoded;
  readonly extendedData?: Inline46Encoded;
  readonly landingPage?: Inline47Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline42: Schema.Schema<Inline42, Inline42Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  adId: Schema.String,
  campaignId: Schema.String,
  creative: Schema.optional(Schema.suspend(() => Inline42)),
  extendedData: Schema.optional(Schema.suspend(() => Inline46)),
  landingPage: Schema.optional(Schema.suspend(() => Inline47)),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline421 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline421Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline421: Schema.Schema<Inline421, Inline421Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline423 {
  readonly error?: ReadonlyArray<Inline423>;
  readonly success?: ReadonlyArray<Inline425>;
}
export interface Inline423Encoded {
  readonly error?: ReadonlyArray<Inline423Encoded>;
  readonly success?: ReadonlyArray<Inline425Encoded>;
}
export const Inline423: Schema.Schema<Inline423, Inline423Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline423))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline425))),
});

export interface Inline424 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline424;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline424Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline424Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline424: Schema.Schema<Inline424, Inline424Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline424),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline425 {
  readonly ad?: Inline425;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline425Encoded {
  readonly ad?: Inline425Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline425: Schema.Schema<Inline425, Inline425Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline425)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline426 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline426Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline426: Schema.Schema<Inline426, Inline426Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline427 {
  readonly assetId?: string;
  readonly crop?: Inline427;
  readonly url?: string;
}
export interface Inline427Encoded {
  readonly assetId?: string;
  readonly crop?: Inline427Encoded;
  readonly url?: string;
}
export const Inline427: Schema.Schema<Inline427, Inline427Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline427)),
  url: Schema.optional(Schema.String),
});

export interface Inline428 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline428Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline428: Schema.Schema<Inline428, Inline428Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline429 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline429Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline429: Schema.Schema<Inline429, Inline429Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline43 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline43Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline43: Schema.Schema<Inline43, Inline43Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline430 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline430Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline430: Schema.Schema<Inline430, Inline430Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline432 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline432Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline432: Schema.Schema<Inline432, Inline432Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline434 {
  readonly error?: ReadonlyArray<Inline434>;
  readonly success?: ReadonlyArray<Inline440>;
}
export interface Inline434Encoded {
  readonly error?: ReadonlyArray<Inline434Encoded>;
  readonly success?: ReadonlyArray<Inline440Encoded>;
}
export const Inline434: Schema.Schema<Inline434, Inline434Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline434))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline440))),
});

export interface Inline435 {
  readonly cause: Inline435;
  readonly message: string;
  readonly reason: string;
}
export interface Inline435Encoded {
  readonly cause: Inline435Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline435: Schema.Schema<Inline435, Inline435Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline435),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline436 {
  readonly cause: Inline436;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline436Encoded {
  readonly cause: Inline436Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline436: Schema.Schema<Inline436, Inline436Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline436),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline437 {
  readonly cause: Inline437;
  readonly message: string;
  readonly reason: string;
}
export interface Inline437Encoded {
  readonly cause: Inline437Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline437: Schema.Schema<Inline437, Inline437Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline437),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline438 {
  readonly cause: Inline438;
  readonly message: string;
  readonly reason: string;
}
export interface Inline438Encoded {
  readonly cause: Inline438Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline438: Schema.Schema<Inline438, Inline438Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline438),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline439 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline439;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline439Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline439Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline439: Schema.Schema<Inline439, Inline439Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline439),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline44 {
  readonly assetId?: string;
  readonly crop?: Inline44;
  readonly url?: string;
}
export interface Inline44Encoded {
  readonly assetId?: string;
  readonly crop?: Inline44Encoded;
  readonly url?: string;
}
export const Inline44: Schema.Schema<Inline44, Inline44Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline44)),
  url: Schema.optional(Schema.String),
});

export interface Inline440 {
  readonly campaign?: Inline440;
  readonly campaignId?: string;
  readonly index: number;
}
export interface Inline440Encoded {
  readonly campaign?: Inline440Encoded;
  readonly campaignId?: string;
  readonly index: number;
}
export const Inline440: Schema.Schema<Inline440, Inline440Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline440)),
  campaignId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline441 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline441Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline441: Schema.Schema<Inline441, Inline441Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline442 {
  readonly audienceSegments?: ReadonlyArray<Inline442>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline442Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline442Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline442: Schema.Schema<Inline442, Inline442Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline442))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline443 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline443Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline443: Schema.Schema<Inline443, Inline443Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline444 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline444Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline444: Schema.Schema<Inline444, Inline444Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline445 {

}
export interface Inline445Encoded {

}
export const Inline445: Schema.Schema<Inline445, Inline445Encoded, never> = Schema.Struct({

});

export interface Inline448 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline448Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline448: Schema.Schema<Inline448, Inline448Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline45 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline45Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline45: Schema.Schema<Inline45, Inline45Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline450 {
  readonly error?: ReadonlyArray<Inline450>;
  readonly success?: ReadonlyArray<Inline451>;
}
export interface Inline450Encoded {
  readonly error?: ReadonlyArray<Inline450Encoded>;
  readonly success?: ReadonlyArray<Inline451Encoded>;
}
export const Inline450: Schema.Schema<Inline450, Inline450Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline450))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline451))),
});

export interface Inline451 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export interface Inline451Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export const Inline451: Schema.Schema<Inline451, Inline451Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRuleId: Schema.String,
});

export interface Inline458 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline458Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline458: Schema.Schema<Inline458, Inline458Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline459 {
  readonly assetId?: string;
  readonly crop?: Inline459;
  readonly url?: string;
}
export interface Inline459Encoded {
  readonly assetId?: string;
  readonly crop?: Inline459Encoded;
  readonly url?: string;
}
export const Inline459: Schema.Schema<Inline459, Inline459Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline459)),
  url: Schema.optional(Schema.String),
});

export interface Inline46 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline46Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline46: Schema.Schema<Inline46, Inline46Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline460 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline460Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline460: Schema.Schema<Inline460, Inline460Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline463 {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export interface Inline463Encoded {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export const Inline463: Schema.Schema<Inline463, Inline463Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  code: Schema.String,
  details: Schema.String,
  index: Schema.Number,
});

export interface Inline464 {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline464;
  readonly suggestedBudget: number;
}
export interface Inline464Encoded {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline464Encoded;
  readonly suggestedBudget: number;
}
export const Inline464: Schema.Schema<Inline464, Inline464Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  index: Schema.Number,
  sevenDaysMissedOpportunities: Schema.suspend(() => Inline464),
  suggestedBudget: Schema.Number,
});

export interface Inline466 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline466;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline466Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline466Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline466: Schema.Schema<Inline466, Inline466Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline466)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline467 {
  readonly dateRangeTypeRuleDuration?: Inline467;
  readonly eventTypeRuleDuration?: Inline468;
}
export interface Inline467Encoded {
  readonly dateRangeTypeRuleDuration?: Inline467Encoded;
  readonly eventTypeRuleDuration?: Inline468Encoded;
}
export const Inline467: Schema.Schema<Inline467, Inline467Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline467)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline468)),
});

export interface Inline468 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline468Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline468: Schema.Schema<Inline468, Inline468Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline469 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline469Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline469: Schema.Schema<Inline469, Inline469Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline47 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline47Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline47: Schema.Schema<Inline47, Inline47Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline470 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline470>;
  readonly type?: string;
}
export interface Inline470Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline470Encoded>;
  readonly type?: string;
}
export const Inline470: Schema.Schema<Inline470, Inline470Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline470))),
  type: Schema.optional(Schema.String),
});

export interface Inline472 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline472;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline472Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline472Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline472: Schema.Schema<Inline472, Inline472Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline472)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline473 {
  readonly dateRangeTypeRuleDuration?: Inline473;
  readonly eventTypeRuleDuration?: Inline474;
}
export interface Inline473Encoded {
  readonly dateRangeTypeRuleDuration?: Inline473Encoded;
  readonly eventTypeRuleDuration?: Inline474Encoded;
}
export const Inline473: Schema.Schema<Inline473, Inline473Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline473)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline474)),
});

export interface Inline474 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline474Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline474: Schema.Schema<Inline474, Inline474Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline475 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline475Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline475: Schema.Schema<Inline475, Inline475Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline476 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline476>;
  readonly type?: string;
}
export interface Inline476Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline476Encoded>;
  readonly type?: string;
}
export const Inline476: Schema.Schema<Inline476, Inline476Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline476))),
  type: Schema.optional(Schema.String),
});

export interface Inline479 {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export interface Inline479Encoded {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export const Inline479: Schema.Schema<Inline479, Inline479Encoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  primaryAsin: Schema.optional(Schema.String),
});

export interface Inline481 {
  readonly headline?: string;
  readonly headlineId?: string;
}
export interface Inline481Encoded {
  readonly headline?: string;
  readonly headlineId?: string;
}
export const Inline481: Schema.Schema<Inline481, Inline481Encoded, never> = Schema.Struct({
  headline: Schema.optional(Schema.String),
  headlineId: Schema.optional(Schema.String),
});

export interface Inline486 {
  readonly otherError?: Inline486;
  readonly rangeError?: Inline487;
}
export interface Inline486Encoded {
  readonly otherError?: Inline486Encoded;
  readonly rangeError?: Inline487Encoded;
}
export const Inline486: Schema.Schema<Inline486, Inline486Encoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline486)),
  rangeError: Schema.optional(Schema.suspend(() => Inline487)),
});

export interface Inline487 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline487;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline487Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline487Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline487: Schema.Schema<Inline487, Inline487Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline487),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline490 {
  readonly cause: Inline490;
  readonly message: string;
  readonly reason: string;
}
export interface Inline490Encoded {
  readonly cause: Inline490Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline490: Schema.Schema<Inline490, Inline490Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline490),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline491 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline491;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline491Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline491Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline491: Schema.Schema<Inline491, Inline491Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline491),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline498 {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline498;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}
export interface Inline498Encoded {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline498Encoded;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}
export const Inline498: Schema.Schema<Inline498, Inline498Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.Number),
  creativeProperties: Schema.optional(Schema.suspend(() => Inline498)),
  creativeStatus: Schema.optional(Schema.String),
  creativeType: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
  lastUpdateTime: Schema.optional(Schema.Number),
});

export interface Inline499 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline499Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline499: Schema.Schema<Inline499, Inline499Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline5 {
  readonly assetId?: string;
  readonly crop?: Inline5;
  readonly url?: string;
}
export interface Inline5Encoded {
  readonly assetId?: string;
  readonly crop?: Inline5Encoded;
  readonly url?: string;
}
export const Inline5: Schema.Schema<Inline5, Inline5Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline5)),
  url: Schema.optional(Schema.String),
});

export interface Inline500 {
  readonly assetId?: string;
  readonly crop?: Inline500;
  readonly url?: string;
}
export interface Inline500Encoded {
  readonly assetId?: string;
  readonly crop?: Inline500Encoded;
  readonly url?: string;
}
export const Inline500: Schema.Schema<Inline500, Inline500Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline500)),
  url: Schema.optional(Schema.String),
});

export interface Inline501 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export interface Inline501Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export const Inline501: Schema.Schema<Inline501, Inline501Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline502 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline502Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline502: Schema.Schema<Inline502, Inline502Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline504Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline504Encoded;
  readonly brandLogoUrl?: string;
  readonly brandName?: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline505Encoded;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline506Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline507Encoded;
  readonly layout?: string;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline508Encoded>;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Inline504: Schema.Schema<Inline504, Inline504Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline504)),
  brandLogoUrl: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline505)),
  customImageUrl: Schema.optional(Schema.String),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline506))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline507)),
  layout: Schema.optional(Schema.String),
  originalHeadline: Schema.optional(Schema.String),
  originalHeadlines: Schema.optional(Schema.Array(Schema.String)),
  originalVideoAssetIds: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline508))),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline505 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline505Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline505: Schema.Schema<Inline505, Inline505Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline506 {
  readonly assetId?: string;
  readonly crop?: Inline506;
  readonly url?: string;
}
export interface Inline506Encoded {
  readonly assetId?: string;
  readonly crop?: Inline506Encoded;
  readonly url?: string;
}
export const Inline506: Schema.Schema<Inline506, Inline506Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline506)),
  url: Schema.optional(Schema.String),
});

export interface Inline507 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export interface Inline507Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export const Inline507: Schema.Schema<Inline507, Inline507Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline508 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline508Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline508: Schema.Schema<Inline508, Inline508Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline510 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline510Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline510: Schema.Schema<Inline510, Inline510Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline511 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline511Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline511: Schema.Schema<Inline511, Inline511Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline512 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline512Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline512: Schema.Schema<Inline512, Inline512Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline513 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline513Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline513: Schema.Schema<Inline513, Inline513Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline514 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline514Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline514: Schema.Schema<Inline514, Inline514Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline516 {
  readonly migrationEntity: Inline516;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline522>;
}
export interface Inline516Encoded {
  readonly migrationEntity: Inline516Encoded;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline522Encoded>;
}
export const Inline516: Schema.Schema<Inline516, Inline516Encoded, never> = Schema.Struct({
  migrationEntity: Schema.suspend(() => Inline516),
  migrationId: Schema.String,
  migrationOptions: Schema.Array(Schema.suspend(() => Inline522)),
});

export interface Inline517 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline517Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline517: Schema.Schema<Inline517, Inline517Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline518 {
  readonly assetId?: string;
  readonly crop?: Inline518;
  readonly url?: string;
}
export interface Inline518Encoded {
  readonly assetId?: string;
  readonly crop?: Inline518Encoded;
  readonly url?: string;
}
export const Inline518: Schema.Schema<Inline518, Inline518Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline518)),
  url: Schema.optional(Schema.String),
});

export interface Inline519 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline519Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline519: Schema.Schema<Inline519, Inline519Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline52 {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface Inline52Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const Inline52: Schema.Schema<Inline52, Inline52Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface Inline520 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline520Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline520: Schema.Schema<Inline520, Inline520Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline521 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline521Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline521: Schema.Schema<Inline521, Inline521Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline522Encoded {
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
export const Inline522: Schema.Schema<Inline522, Inline522Encoded, never> = Schema.Struct({
  adGroupId: Schema.optional(Schema.String),
  adId: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  migrationType: Schema.optional(Schema.String),
  optionType: Schema.String,
  rationale: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

export interface Inline524 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline524Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline524: Schema.Schema<Inline524, Inline524Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline525 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline525Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline525: Schema.Schema<Inline525, Inline525Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline526 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline526Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline526: Schema.Schema<Inline526, Inline526Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline527 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline527Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline527: Schema.Schema<Inline527, Inline527Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline529 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline529;
  readonly name: string;
  readonly state: string;
}
export interface Inline529Encoded {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline529Encoded;
  readonly name: string;
  readonly state: string;
}
export const Inline529: Schema.Schema<Inline529, Inline529Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  campaignId: Schema.String,
  extendedData: Schema.optional(Schema.suspend(() => Inline529)),
  name: Schema.String,
  state: Schema.String,
});

export interface Inline531 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline531Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline531: Schema.Schema<Inline531, Inline531Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline532 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline532Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline532: Schema.Schema<Inline532, Inline532Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline533 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline533Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline533: Schema.Schema<Inline533, Inline533Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline534 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline534Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline534: Schema.Schema<Inline534, Inline534Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline535 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline535Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline535: Schema.Schema<Inline535, Inline535Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

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
export interface Inline537Encoded {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline537Encoded;
  readonly extendedData?: Inline541Encoded;
  readonly landingPage?: Inline542Encoded;
  readonly name?: string;
  readonly state: string;
}
export const Inline537: Schema.Schema<Inline537, Inline537Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  adId: Schema.optional(Schema.String),
  campaignId: Schema.String,
  creative: Schema.optional(Schema.suspend(() => Inline537)),
  extendedData: Schema.optional(Schema.suspend(() => Inline541)),
  landingPage: Schema.optional(Schema.suspend(() => Inline542)),
  name: Schema.optional(Schema.String),
  state: Schema.String,
});

export interface Inline538 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline538Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline538: Schema.Schema<Inline538, Inline538Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline539 {
  readonly assetId?: string;
  readonly crop?: Inline539;
  readonly url?: string;
}
export interface Inline539Encoded {
  readonly assetId?: string;
  readonly crop?: Inline539Encoded;
  readonly url?: string;
}
export const Inline539: Schema.Schema<Inline539, Inline539Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline539)),
  url: Schema.optional(Schema.String),
});

export interface Inline54 {
  readonly error?: ReadonlyArray<Inline54>;
  readonly success?: ReadonlyArray<Inline55>;
}
export interface Inline54Encoded {
  readonly error?: ReadonlyArray<Inline54Encoded>;
  readonly success?: ReadonlyArray<Inline55Encoded>;
}
export const Inline54: Schema.Schema<Inline54, Inline54Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline54))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline55))),
});

export interface Inline540 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline540Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline540: Schema.Schema<Inline540, Inline540Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline541 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline541Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline541: Schema.Schema<Inline541, Inline541Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline542 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline542Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline542: Schema.Schema<Inline542, Inline542Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline544 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline544Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline544: Schema.Schema<Inline544, Inline544Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline545 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline545Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline545: Schema.Schema<Inline545, Inline545Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline546 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface Inline546Encoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const Inline546: Schema.Schema<Inline546, Inline546Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export interface Inline547 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline547Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline547: Schema.Schema<Inline547, Inline547Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline548 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline548Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline548: Schema.Schema<Inline548, Inline548Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline55 {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export interface Inline55Encoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export const Inline55: Schema.Schema<Inline55, Inline55Encoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRuleId: Schema.String,
});

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
export interface Inline550Encoded {
  readonly bidding?: Inline550Encoded;
  readonly brandEntityId?: string;
  readonly budget: number;
  readonly budgetType: string;
  readonly campaignId: string;
  readonly costType?: string;
  readonly endDate?: string;
  readonly extendedData?: Inline553Encoded;
  readonly goal?: string;
  readonly isMultiAdGroupsEnabled?: boolean;
  readonly kpi?: string;
  readonly name: string;
  readonly portfolioId?: string;
  readonly productLocation?: string;
  readonly ruleBasedBudget?: Inline554Encoded;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly smartDefault?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline555Encoded;
  readonly targetedPGDealId?: string;
}
export const Inline550: Schema.Schema<Inline550, Inline550Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline550)),
  brandEntityId: Schema.optional(Schema.String),
  budget: Schema.Number,
  budgetType: Schema.String,
  campaignId: Schema.String,
  costType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  extendedData: Schema.optional(Schema.suspend(() => Inline553)),
  goal: Schema.optional(Schema.String),
  isMultiAdGroupsEnabled: Schema.optional(Schema.Boolean),
  kpi: Schema.optional(Schema.String),
  name: Schema.String,
  portfolioId: Schema.optional(Schema.String),
  productLocation: Schema.optional(Schema.String),
  ruleBasedBudget: Schema.optional(Schema.suspend(() => Inline554)),
  siteRestrictions: Schema.optional(Schema.Array(Schema.String)),
  smartDefault: Schema.optional(Schema.Array(Schema.String)),
  startDate: Schema.optional(Schema.String),
  state: Schema.String,
  tags: Schema.optional(Schema.suspend(() => Inline555)),
  targetedPGDealId: Schema.optional(Schema.String),
});

export interface Inline551 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline551Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline551: Schema.Schema<Inline551, Inline551Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline552 {
  readonly audienceSegments?: ReadonlyArray<Inline552>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline552Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline552Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline552: Schema.Schema<Inline552, Inline552Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline552))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline553 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline553Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline553: Schema.Schema<Inline553, Inline553Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline554 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline554Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline554: Schema.Schema<Inline554, Inline554Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline555 {

}
export interface Inline555Encoded {

}
export const Inline555: Schema.Schema<Inline555, Inline555Encoded, never> = Schema.Struct({

});

export interface Inline557 {
  readonly entityId?: string;
  readonly entityType?: string;
}
export interface Inline557Encoded {
  readonly entityId?: string;
  readonly entityType?: string;
}
export const Inline557: Schema.Schema<Inline557, Inline557Encoded, never> = Schema.Struct({
  entityId: Schema.optional(Schema.String),
  entityType: Schema.optional(Schema.String),
});

export interface Inline558 {
  readonly include?: ReadonlyArray<string>;
}
export interface Inline558Encoded {
  readonly include?: ReadonlyArray<string>;
}
export const Inline558: Schema.Schema<Inline558, Inline558Encoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline560 {
  readonly conditions?: ReadonlyArray<Inline560>;
  readonly optimizationRuleId?: string;
}
export interface Inline560Encoded {
  readonly conditions?: ReadonlyArray<Inline560Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline560: Schema.Schema<Inline560, Inline560Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline560))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline562 {
  readonly ad?: Inline562;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}
export interface Inline562Encoded {
  readonly ad?: Inline562Encoded;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}
export const Inline562: Schema.Schema<Inline562, Inline562Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline562)),
  adGroupName: Schema.optional(Schema.String),
  campaignName: Schema.optional(Schema.String),
});

export interface Inline563 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline563Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline563: Schema.Schema<Inline563, Inline563Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline564 {
  readonly assetId?: string;
  readonly crop?: Inline564;
  readonly url?: string;
}
export interface Inline564Encoded {
  readonly assetId?: string;
  readonly crop?: Inline564Encoded;
  readonly url?: string;
}
export const Inline564: Schema.Schema<Inline564, Inline564Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline564)),
  url: Schema.optional(Schema.String),
});

export interface Inline565 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline565Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline565: Schema.Schema<Inline565, Inline565Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline566 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline566Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline566: Schema.Schema<Inline566, Inline566Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline567 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline567Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline567: Schema.Schema<Inline567, Inline567Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline568Encoded {
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
export const Inline568: Schema.Schema<Inline568, Inline568Encoded, never> = Schema.Struct({
  adGroupId: Schema.optional(Schema.String),
  adId: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  migrationType: Schema.optional(Schema.String),
  optionType: Schema.String,
  rationale: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

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
export interface Inline570Encoded {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline570Encoded;
  readonly extendedData?: Inline574Encoded;
  readonly landingPage?: Inline575Encoded;
  readonly name?: string;
  readonly state: string;
}
export const Inline570: Schema.Schema<Inline570, Inline570Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  adId: Schema.optional(Schema.String),
  campaignId: Schema.String,
  creative: Schema.optional(Schema.suspend(() => Inline570)),
  extendedData: Schema.optional(Schema.suspend(() => Inline574)),
  landingPage: Schema.optional(Schema.suspend(() => Inline575)),
  name: Schema.optional(Schema.String),
  state: Schema.String,
});

export interface Inline571 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline571Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline571: Schema.Schema<Inline571, Inline571Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline572 {
  readonly assetId?: string;
  readonly crop?: Inline572;
  readonly url?: string;
}
export interface Inline572Encoded {
  readonly assetId?: string;
  readonly crop?: Inline572Encoded;
  readonly url?: string;
}
export const Inline572: Schema.Schema<Inline572, Inline572Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline572)),
  url: Schema.optional(Schema.String),
});

export interface Inline573 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline573Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline573: Schema.Schema<Inline573, Inline573Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline574 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline574Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline574: Schema.Schema<Inline574, Inline574Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline575 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline575Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline575: Schema.Schema<Inline575, Inline575Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline578 {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export interface Inline578Encoded {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export const Inline578: Schema.Schema<Inline578, Inline578Encoded, never> = Schema.Struct({
  legacyCampaignId: Schema.optional(Schema.String),
  migrationStatus: Schema.optional(Schema.String),
  migrationStatusReason: Schema.optional(Schema.String),
  newCampaignId: Schema.optional(Schema.String),
});

export interface Inline585 {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export interface Inline585Encoded {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
}
export const Inline585: Schema.Schema<Inline585, Inline585Encoded, never> = Schema.Struct({
  legacyCampaignId: Schema.optional(Schema.String),
  migrationStatus: Schema.optional(Schema.String),
  migrationStatusReason: Schema.optional(Schema.String),
  newCampaignId: Schema.optional(Schema.String),
});

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
export interface Inline591Encoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline591Encoded;
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
  readonly customImageCrop?: Inline592Encoded;
  readonly customImageUrl?: string;
  readonly customImages?: ReadonlyArray<Inline593Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly originalHeadline?: string;
  readonly originalHeadlines?: ReadonlyArray<string>;
  readonly originalVideoAssetIds?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline594Encoded>;
  readonly title?: string;
  readonly type?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
}
export const Inline591: Schema.Schema<Inline591, Inline591Encoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  asins: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline591)),
  brandLogoUrl: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
  collectionName: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  creativeStatus: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline592)),
  customImageUrl: Schema.optional(Schema.String),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline593))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  originalHeadline: Schema.optional(Schema.String),
  originalHeadlines: Schema.optional(Schema.Array(Schema.String)),
  originalVideoAssetIds: Schema.optional(Schema.Array(Schema.String)),
  subpages: Schema.optional(Schema.Array(Schema.suspend(() => Inline594))),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  videoAssetIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline592 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline592Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline592: Schema.Schema<Inline592, Inline592Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline593 {
  readonly assetId?: string;
  readonly crop?: Inline593;
  readonly url?: string;
}
export interface Inline593Encoded {
  readonly assetId?: string;
  readonly crop?: Inline593Encoded;
  readonly url?: string;
}
export const Inline593: Schema.Schema<Inline593, Inline593Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline593)),
  url: Schema.optional(Schema.String),
});

export interface Inline594 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline594Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline594: Schema.Schema<Inline594, Inline594Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline595 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline595Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline595: Schema.Schema<Inline595, Inline595Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline596 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline596Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline596: Schema.Schema<Inline596, Inline596Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline6 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline6Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline6: Schema.Schema<Inline6, Inline6Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline602 {
  readonly attributeName: string;
  readonly criteria: Inline602;
}
export interface Inline602Encoded {
  readonly attributeName: string;
  readonly criteria: Inline602Encoded;
}
export const Inline602: Schema.Schema<Inline602, Inline602Encoded, never> = Schema.Struct({
  attributeName: Schema.String,
  criteria: Schema.suspend(() => Inline602),
});

export interface Inline604 {
  readonly code: string;
  readonly message: string;
}
export interface Inline604Encoded {
  readonly code: string;
  readonly message: string;
}
export const Inline604: Schema.Schema<Inline604, Inline604Encoded, never> = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
});

export interface Inline61 {
  readonly percentage?: number;
  readonly placement?: string;
}
export interface Inline61Encoded {
  readonly percentage?: number;
  readonly placement?: string;
}
export const Inline61: Schema.Schema<Inline61, Inline61Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  placement: Schema.optional(Schema.String),
});

export interface Inline610 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline610Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline610: Schema.Schema<Inline610, Inline610Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline615 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline615Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline615: Schema.Schema<Inline615, Inline615Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline616 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline616Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline616: Schema.Schema<Inline616, Inline616Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline62 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline62Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline62: Schema.Schema<Inline62, Inline62Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline620 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline620Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline620: Schema.Schema<Inline620, Inline620Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline622 {
  readonly endTime?: string;
  readonly startTime?: string;
}
export interface Inline622Encoded {
  readonly endTime?: string;
  readonly startTime?: string;
}
export const Inline622: Schema.Schema<Inline622, Inline622Encoded, never> = Schema.Struct({
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
});

export interface Inline626 {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export interface Inline626Encoded {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export const Inline626: Schema.Schema<Inline626, Inline626Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});

export interface Inline628 {
  readonly endDate?: string;
  readonly startDate: string;
}
export interface Inline628Encoded {
  readonly endDate?: string;
  readonly startDate: string;
}
export const Inline628: Schema.Schema<Inline628, Inline628Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  startDate: Schema.String,
});

export interface Inline629 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline629Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline629: Schema.Schema<Inline629, Inline629Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline63 {
  readonly audienceSegments?: ReadonlyArray<Inline63>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline63Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline63Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline63: Schema.Schema<Inline63, Inline63Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline63))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline631 {
  readonly budgetIncreaseBy?: Inline631;
  readonly duration?: Inline632;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline634;
  readonly recurrence?: Inline635;
  readonly ruleType?: string;
}
export interface Inline631Encoded {
  readonly budgetIncreaseBy?: Inline631Encoded;
  readonly duration?: Inline632Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline634Encoded;
  readonly recurrence?: Inline635Encoded;
  readonly ruleType?: string;
}
export const Inline631: Schema.Schema<Inline631, Inline631Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline631)),
  duration: Schema.optional(Schema.suspend(() => Inline632)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline634)),
  recurrence: Schema.optional(Schema.suspend(() => Inline635)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline632 {
  readonly dateRangeTypeRuleDuration?: Inline632;
  readonly eventTypeRuleDuration?: Inline633;
}
export interface Inline632Encoded {
  readonly dateRangeTypeRuleDuration?: Inline632Encoded;
  readonly eventTypeRuleDuration?: Inline633Encoded;
}
export const Inline632: Schema.Schema<Inline632, Inline632Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline632)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline633)),
});

export interface Inline633 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline633Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline633: Schema.Schema<Inline633, Inline633Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline634 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline634Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline634: Schema.Schema<Inline634, Inline634Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline635 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline635>;
  readonly type?: string;
}
export interface Inline635Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline635Encoded>;
  readonly type?: string;
}
export const Inline635: Schema.Schema<Inline635, Inline635Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline635))),
  type: Schema.optional(Schema.String),
});

export interface Inline637 {
  readonly type: string;
  readonly value: number;
}
export interface Inline637Encoded {
  readonly type: string;
  readonly value: number;
}
export const Inline637: Schema.Schema<Inline637, Inline637Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Number,
});

export interface Inline638 {
  readonly dateRangeTypeRuleDuration?: Inline638;
  readonly eventTypeRuleDuration?: Inline639;
}
export interface Inline638Encoded {
  readonly dateRangeTypeRuleDuration?: Inline638Encoded;
  readonly eventTypeRuleDuration?: Inline639Encoded;
}
export const Inline638: Schema.Schema<Inline638, Inline638Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline638)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline639)),
});

export interface Inline639 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline639Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline639: Schema.Schema<Inline639, Inline639Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline640 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline640Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline640: Schema.Schema<Inline640, Inline640Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline641 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline641>;
  readonly type?: string;
}
export interface Inline641Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline641Encoded>;
  readonly type?: string;
}
export const Inline641: Schema.Schema<Inline641, Inline641Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline641))),
  type: Schema.optional(Schema.String),
});

export interface Inline646 {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}
export interface Inline646Encoded {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}
export const Inline646: Schema.Schema<Inline646, Inline646Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  suggestedBudgetIncreasePercent: Schema.optional(Schema.Number),
});

export interface Inline648 {
  readonly budgetIncreaseBy?: Inline648;
  readonly duration?: Inline649;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline651;
  readonly recurrence?: Inline652;
  readonly ruleType?: string;
}
export interface Inline648Encoded {
  readonly budgetIncreaseBy?: Inline648Encoded;
  readonly duration?: Inline649Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline651Encoded;
  readonly recurrence?: Inline652Encoded;
  readonly ruleType?: string;
}
export const Inline648: Schema.Schema<Inline648, Inline648Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline648)),
  duration: Schema.optional(Schema.suspend(() => Inline649)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline651)),
  recurrence: Schema.optional(Schema.suspend(() => Inline652)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline649 {
  readonly dateRangeTypeRuleDuration?: Inline649;
  readonly eventTypeRuleDuration?: Inline650;
}
export interface Inline649Encoded {
  readonly dateRangeTypeRuleDuration?: Inline649Encoded;
  readonly eventTypeRuleDuration?: Inline650Encoded;
}
export const Inline649: Schema.Schema<Inline649, Inline649Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline649)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline650)),
});

export interface Inline65 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline65Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline65: Schema.Schema<Inline65, Inline65Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline650 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline650Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline650: Schema.Schema<Inline650, Inline650Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline651 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline651Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline651: Schema.Schema<Inline651, Inline651Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline652 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline652>;
  readonly type?: string;
}
export interface Inline652Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline652Encoded>;
  readonly type?: string;
}
export const Inline652: Schema.Schema<Inline652, Inline652Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline652))),
  type: Schema.optional(Schema.String),
});

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
export interface Inline654Encoded {
  readonly adGroups: ReadonlyArray<Inline654Encoded>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline660Encoded>;
  readonly startDate?: string;
}
export const Inline654: Schema.Schema<Inline654, Inline654Encoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline654)),
  budget: Schema.Number,
  budgetType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  forecastType: Schema.String,
  goal: Schema.optional(Schema.String),
  optimizationRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline660))),
  startDate: Schema.optional(Schema.String),
});

export interface Inline655 {
  readonly landingPageUrl?: string;
}
export interface Inline655Encoded {
  readonly landingPageUrl?: string;
}
export const Inline655: Schema.Schema<Inline655, Inline655Encoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface Inline656 {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline656Encoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline656: Schema.Schema<Inline656, Inline656Encoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline657 {
  readonly expressions?: ReadonlyArray<Inline657>;
}
export interface Inline657Encoded {
  readonly expressions?: ReadonlyArray<Inline657Encoded>;
}
export const Inline657: Schema.Schema<Inline657, Inline657Encoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline657))),
});

export interface Inline658 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline658>;
}
export interface Inline658Encoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline658Encoded>;
}
export const Inline658: Schema.Schema<Inline658, Inline658Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline658))),
});

export interface Inline659 {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface Inline659Encoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const Inline659: Schema.Schema<Inline659, Inline659Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface Inline660 {
  readonly attributeName?: string;
  readonly criteria?: Inline660;
}
export interface Inline660Encoded {
  readonly attributeName?: string;
  readonly criteria?: Inline660Encoded;
}
export const Inline660: Schema.Schema<Inline660, Inline660Encoded, never> = Schema.Struct({
  attributeName: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.suspend(() => Inline660)),
});

export interface Inline662 {
  readonly errors?: ReadonlyArray<Inline662>;
  readonly successes?: ReadonlyArray<Inline663>;
}
export interface Inline662Encoded {
  readonly errors?: ReadonlyArray<Inline662Encoded>;
  readonly successes?: ReadonlyArray<Inline663Encoded>;
}
export const Inline662: Schema.Schema<Inline662, Inline662Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline662))),
  successes: Schema.optional(Schema.Array(Schema.suspend(() => Inline663))),
});

export interface Inline663 {
  readonly campaign?: Inline663;
  readonly index?: number;
}
export interface Inline663Encoded {
  readonly campaign?: Inline663Encoded;
  readonly index?: number;
}
export const Inline663: Schema.Schema<Inline663, Inline663Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline663)),
  index: Schema.optional(Schema.Number),
});

export interface Inline666 {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline666Encoded {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline666: Schema.Schema<Inline666, Inline666Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline667 {
  readonly landingPageUrl?: string;
}
export interface Inline667Encoded {
  readonly landingPageUrl?: string;
}
export const Inline667: Schema.Schema<Inline667, Inline667Encoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface Inline668 {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline668Encoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline668: Schema.Schema<Inline668, Inline668Encoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline669 {
  readonly expressions?: ReadonlyArray<Inline669>;
}
export interface Inline669Encoded {
  readonly expressions?: ReadonlyArray<Inline669Encoded>;
}
export const Inline669: Schema.Schema<Inline669, Inline669Encoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline669))),
});

export interface Inline670 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline670>;
}
export interface Inline670Encoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline670Encoded>;
}
export const Inline670: Schema.Schema<Inline670, Inline670Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline670))),
});

export interface Inline671 {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface Inline671Encoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const Inline671: Schema.Schema<Inline671, Inline671Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface Inline68 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline68Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline68: Schema.Schema<Inline68, Inline68Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline682 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline682Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline682: Schema.Schema<Inline682, Inline682Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline687 {
  readonly type?: string;
  readonly value?: string;
}
export interface Inline687Encoded {
  readonly type?: string;
  readonly value?: string;
}
export const Inline687: Schema.Schema<Inline687, Inline687Encoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline689 {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export interface Inline689Encoded {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export const Inline689: Schema.Schema<Inline689, Inline689Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});

export interface Inline692 {
  readonly type?: string;
  readonly value?: string;
}
export interface Inline692Encoded {
  readonly type?: string;
  readonly value?: string;
}
export const Inline692: Schema.Schema<Inline692, Inline692Encoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

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
export interface Inline694Encoded {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline694Encoded>;
  readonly landingPages?: ReadonlyArray<Inline695Encoded>;
  readonly negativeKeywords?: ReadonlyArray<Inline696Encoded>;
  readonly negativeTargets?: ReadonlyArray<Inline697Encoded>;
  readonly targets?: ReadonlyArray<Inline698Encoded>;
  readonly themes?: ReadonlyArray<Inline699Encoded>;
}
export const Inline694: Schema.Schema<Inline694, Inline694Encoded, never> = Schema.Struct({
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline694))),
  landingPages: Schema.optional(Schema.Array(Schema.suspend(() => Inline695))),
  negativeKeywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline696))),
  negativeTargets: Schema.optional(Schema.Array(Schema.suspend(() => Inline697))),
  targets: Schema.optional(Schema.Array(Schema.suspend(() => Inline698))),
  themes: Schema.optional(Schema.Array(Schema.suspend(() => Inline699))),
});

export interface Inline695 {
  readonly landingPageUrl?: string;
}
export interface Inline695Encoded {
  readonly landingPageUrl?: string;
}
export const Inline695: Schema.Schema<Inline695, Inline695Encoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface Inline696 {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface Inline696Encoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const Inline696: Schema.Schema<Inline696, Inline696Encoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface Inline697 {
  readonly expressions?: ReadonlyArray<Inline697>;
}
export interface Inline697Encoded {
  readonly expressions?: ReadonlyArray<Inline697Encoded>;
}
export const Inline697: Schema.Schema<Inline697, Inline697Encoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline697))),
});

export interface Inline698 {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline698>;
}
export interface Inline698Encoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline698Encoded>;
}
export const Inline698: Schema.Schema<Inline698, Inline698Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline698))),
});

export interface Inline699 {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface Inline699Encoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const Inline699: Schema.Schema<Inline699, Inline699Encoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface Inline7 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline7Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline7: Schema.Schema<Inline7, Inline7Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline700 {
  readonly attributeName?: string;
  readonly criteria?: Inline700;
}
export interface Inline700Encoded {
  readonly attributeName?: string;
  readonly criteria?: Inline700Encoded;
}
export const Inline700: Schema.Schema<Inline700, Inline700Encoded, never> = Schema.Struct({
  attributeName: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.suspend(() => Inline700)),
});

export interface Inline702 {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}
export interface Inline702Encoded {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}
export const Inline702: Schema.Schema<Inline702, Inline702Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
});

export interface Inline703 {
  readonly campaign?: Inline703;
  readonly index?: number;
}
export interface Inline703Encoded {
  readonly campaign?: Inline703Encoded;
  readonly index?: number;
}
export const Inline703: Schema.Schema<Inline703, Inline703Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline703)),
  index: Schema.optional(Schema.Number),
});

export interface Inline705 {
  readonly metric?: string;
  readonly value?: Inline705;
}
export interface Inline705Encoded {
  readonly metric?: string;
  readonly value?: Inline705Encoded;
}
export const Inline705: Schema.Schema<Inline705, Inline705Encoded, never> = Schema.Struct({
  metric: Schema.optional(Schema.String),
  value: Schema.optional(Schema.suspend(() => Inline705)),
});

export interface Inline707 {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline707>;
}
export interface Inline707Encoded {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline707Encoded>;
}
export const Inline707: Schema.Schema<Inline707, Inline707Encoded, never> = Schema.Struct({
  forecastTimestamp: Schema.optional(Schema.String),
  forecasts: Schema.optional(Schema.Array(Schema.suspend(() => Inline707))),
});

export interface Inline713 {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export interface Inline713Encoded {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export const Inline713: Schema.Schema<Inline713, Inline713Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  campaignName: Schema.String,
  ruleStatus: Schema.String,
});

export interface Inline716 {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}
export interface Inline716Encoded {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}
export const Inline716: Schema.Schema<Inline716, Inline716Encoded, never> = Schema.Struct({
  bid: Schema.Number,
  keywordText: Schema.String,
  matchType: Schema.String,
});

export interface Inline719 {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline719>;
}
export interface Inline719Encoded {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline719Encoded>;
}
export const Inline719: Schema.Schema<Inline719, Inline719Encoded, never> = Schema.Struct({
  adFormat: Schema.String,
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline719))),
});

export interface Inline721 {
  readonly keywordInsight: Inline721;
}
export interface Inline721Encoded {
  readonly keywordInsight: Inline721Encoded;
}
export const Inline721: Schema.Schema<Inline721, Inline721Encoded, never> = Schema.Struct({
  keywordInsight: Schema.suspend(() => Inline721),
});

export interface Inline728 {
  readonly keywordInsight: Inline728;
}
export interface Inline728Encoded {
  readonly keywordInsight: Inline728Encoded;
}
export const Inline728: Schema.Schema<Inline728, Inline728Encoded, never> = Schema.Struct({
  keywordInsight: Schema.suspend(() => Inline728),
});

export interface Inline73 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline73Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline73: Schema.Schema<Inline73, Inline73Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline74 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline74Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline74: Schema.Schema<Inline74, Inline74Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline743 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline743;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline743Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline743Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline743: Schema.Schema<Inline743, Inline743Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline743)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline744 {
  readonly dateRangeTypeRuleDuration?: Inline744;
  readonly eventTypeRuleDuration?: Inline745;
}
export interface Inline744Encoded {
  readonly dateRangeTypeRuleDuration?: Inline744Encoded;
  readonly eventTypeRuleDuration?: Inline745Encoded;
}
export const Inline744: Schema.Schema<Inline744, Inline744Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline744)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline745)),
});

export interface Inline745 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline745Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline745: Schema.Schema<Inline745, Inline745Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline746 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline746Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline746: Schema.Schema<Inline746, Inline746Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline747 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline747>;
  readonly type?: string;
}
export interface Inline747Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline747Encoded>;
  readonly type?: string;
}
export const Inline747: Schema.Schema<Inline747, Inline747Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline747))),
  type: Schema.optional(Schema.String),
});

export interface Inline749 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline749Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline749: Schema.Schema<Inline749, Inline749Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline757 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline757Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline757: Schema.Schema<Inline757, Inline757Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline758 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline758Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline758: Schema.Schema<Inline758, Inline758Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline762 {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export interface Inline762Encoded {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export const Inline762: Schema.Schema<Inline762, Inline762Encoded, never> = Schema.Struct({
  brandRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
});

export interface Inline764 {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export interface Inline764Encoded {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export const Inline764: Schema.Schema<Inline764, Inline764Encoded, never> = Schema.Struct({
  ageRangeRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface Inline765 {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export interface Inline765Encoded {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export const Inline765: Schema.Schema<Inline765, Inline765Encoded, never> = Schema.Struct({
  brandRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
});

export interface Inline766 {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export interface Inline766Encoded {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export const Inline766: Schema.Schema<Inline766, Inline766Encoded, never> = Schema.Struct({
  genreRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface Inline768 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline768Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline768: Schema.Schema<Inline768, Inline768Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline769 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline769Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline769: Schema.Schema<Inline769, Inline769Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline77 {
  readonly location: string;
  readonly trigger?: string;
}
export interface Inline77Encoded {
  readonly location: string;
  readonly trigger?: string;
}
export const Inline77: Schema.Schema<Inline77, Inline77Encoded, never> = Schema.Struct({
  location: Schema.String,
  trigger: Schema.optional(Schema.String),
});

export interface Inline771 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline771Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline771: Schema.Schema<Inline771, Inline771Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline773 {
  readonly asinCountRange?: Inline773;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline774;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}
export interface Inline773Encoded {
  readonly asinCountRange?: Inline773Encoded;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline774Encoded;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}
export const Inline773: Schema.Schema<Inline773, Inline773Encoded, never> = Schema.Struct({
  asinCountRange: Schema.optional(Schema.suspend(() => Inline773)),
  categoryRefinementId: Schema.optional(Schema.String),
  estimatedReach: Schema.optional(Schema.suspend(() => Inline774)),
  isTargetable: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  parentCategoryRefinementId: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface Inline774 {
  readonly max?: number;
  readonly min?: number;
}
export interface Inline774Encoded {
  readonly max?: number;
  readonly min?: number;
}
export const Inline774: Schema.Schema<Inline774, Inline774Encoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface Inline786 {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}
export interface Inline786Encoded {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
}
export const Inline786: Schema.Schema<Inline786, Inline786Encoded, never> = Schema.Struct({
  audienceId: Schema.optional(Schema.String),
  audienceSegmentType: Schema.optional(Schema.String),
});

export interface Inline795 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline795Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline795: Schema.Schema<Inline795, Inline795Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline796 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline796Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline796: Schema.Schema<Inline796, Inline796Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline797 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline797Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline797: Schema.Schema<Inline797, Inline797Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline8 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline8Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline8: Schema.Schema<Inline8, Inline8Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline80Encoded {
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
export const Inline80: Schema.Schema<Inline80, Inline80Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  estimatedMissedClicksLower: Schema.optional(Schema.Number),
  estimatedMissedClicksUpper: Schema.optional(Schema.Number),
  estimatedMissedImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedImpressionsUpper: Schema.optional(Schema.Number),
  estimatedMissedSalesLower: Schema.optional(Schema.Number),
  estimatedMissedSalesUpper: Schema.optional(Schema.Number),
  percentTimeInBudget: Schema.optional(Schema.Number),
  startDate: Schema.optional(Schema.String),
});

export interface Inline812 {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline812;
  readonly brandName: string;
}
export interface Inline812Encoded {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline812Encoded;
  readonly brandName: string;
}
export const Inline812: Schema.Schema<Inline812, Inline812Encoded, never> = Schema.Struct({
  asinExclusions: Schema.optional(Schema.Array(Schema.String)),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline812)),
  brandName: Schema.String,
});

export interface Inline814 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline814Encoded {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline814: Schema.Schema<Inline814, Inline814Encoded, never> = Schema.Struct({
  associatedCampaignIds: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline816 {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline816>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline817>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline818>;
}
export interface Inline816Encoded {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline816Encoded>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline817Encoded>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline818Encoded>;
}
export const Inline816: Schema.Schema<Inline816, Inline816Encoded, never> = Schema.Struct({
  bidAdjustmentsByPlacement: Schema.optional(Schema.Array(Schema.suspend(() => Inline816))),
  bidAdjustmentsByShopperSegment: Schema.optional(Schema.Array(Schema.suspend(() => Inline817))),
  bidOptimization: Schema.optional(Schema.Boolean),
  bidOptimizationStrategy: Schema.optional(Schema.String),
  shopperCohortBidAdjustments: Schema.optional(Schema.Array(Schema.suspend(() => Inline818))),
});

export interface Inline817 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline817Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline817: Schema.Schema<Inline817, Inline817Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline818 {
  readonly audienceSegments?: ReadonlyArray<Inline818>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline818Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline818Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline818: Schema.Schema<Inline818, Inline818Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline818))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline819 {

}
export interface Inline819Encoded {

}
export const Inline819: Schema.Schema<Inline819, Inline819Encoded, never> = Schema.Struct({

});

export interface Inline821 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline821;
  readonly brandName: string;
  readonly landingPage?: Inline822;
  readonly title?: string;
}
export interface Inline821Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline821Encoded;
  readonly brandName: string;
  readonly landingPage?: Inline822Encoded;
  readonly title?: string;
}
export const Inline821: Schema.Schema<Inline821, Inline821Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetID: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline821)),
  brandName: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline822)),
  title: Schema.optional(Schema.String),
});

export interface Inline822 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline822Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline822: Schema.Schema<Inline822, Inline822Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline824 {
  readonly attributeName: string;
  readonly criteria: Inline824;
}
export interface Inline824Encoded {
  readonly attributeName: string;
  readonly criteria: Inline824Encoded;
}
export const Inline824: Schema.Schema<Inline824, Inline824Encoded, never> = Schema.Struct({
  attributeName: Schema.String,
  criteria: Schema.suspend(() => Inline824),
});

export interface Inline826 {
  readonly conditions?: ReadonlyArray<Inline826>;
  readonly optimizationRuleId?: string;
}
export interface Inline826Encoded {
  readonly conditions?: ReadonlyArray<Inline826Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline826: Schema.Schema<Inline826, Inline826Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline826))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline828 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline828;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline828Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline828Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline828: Schema.Schema<Inline828, Inline828Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline828)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline829 {
  readonly dateRangeTypeRuleDuration?: Inline829;
  readonly eventTypeRuleDuration?: Inline830;
}
export interface Inline829Encoded {
  readonly dateRangeTypeRuleDuration?: Inline829Encoded;
  readonly eventTypeRuleDuration?: Inline830Encoded;
}
export const Inline829: Schema.Schema<Inline829, Inline829Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline829)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline830)),
});

export interface Inline830 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline830Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline830: Schema.Schema<Inline830, Inline830Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline831 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline831Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline831: Schema.Schema<Inline831, Inline831Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline832 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline832>;
  readonly type?: string;
}
export interface Inline832Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline832Encoded>;
  readonly type?: string;
}
export const Inline832: Schema.Schema<Inline832, Inline832Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline832))),
  type: Schema.optional(Schema.String),
});

export interface Inline834 {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline834Encoded {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline834: Schema.Schema<Inline834, Inline834Encoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline836 {
  readonly error?: ReadonlyArray<Inline836>;
  readonly success?: ReadonlyArray<Inline840>;
}
export interface Inline836Encoded {
  readonly error?: ReadonlyArray<Inline836Encoded>;
  readonly success?: ReadonlyArray<Inline840Encoded>;
}
export const Inline836: Schema.Schema<Inline836, Inline836Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline836))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline840))),
});

export interface Inline837 {
  readonly cause: Inline837;
  readonly message: string;
  readonly reason: string;
}
export interface Inline837Encoded {
  readonly cause: Inline837Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline837: Schema.Schema<Inline837, Inline837Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline837),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline838 {
  readonly cause: Inline838;
  readonly message: string;
  readonly reason: string;
}
export interface Inline838Encoded {
  readonly cause: Inline838Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline838: Schema.Schema<Inline838, Inline838Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline838),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline839 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline839;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline839Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline839Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline839: Schema.Schema<Inline839, Inline839Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline839),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline840 {
  readonly adGroup?: Inline840;
  readonly adGroupId?: string;
  readonly index: number;
}
export interface Inline840Encoded {
  readonly adGroup?: Inline840Encoded;
  readonly adGroupId?: string;
  readonly index: number;
}
export const Inline840: Schema.Schema<Inline840, Inline840Encoded, never> = Schema.Struct({
  adGroup: Schema.optional(Schema.suspend(() => Inline840)),
  adGroupId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline842 {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface Inline842Encoded {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export const Inline842: Schema.Schema<Inline842, Inline842Encoded, never> = Schema.Struct({
  adId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface Inline844 {
  readonly error?: ReadonlyArray<Inline844>;
  readonly success?: ReadonlyArray<Inline846>;
}
export interface Inline844Encoded {
  readonly error?: ReadonlyArray<Inline844Encoded>;
  readonly success?: ReadonlyArray<Inline846Encoded>;
}
export const Inline844: Schema.Schema<Inline844, Inline844Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline844))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline846))),
});

export interface Inline845 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline845;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline845Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline845Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline845: Schema.Schema<Inline845, Inline845Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline845),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline846 {
  readonly ad?: Inline846;
  readonly adId?: string;
  readonly index: number;
}
export interface Inline846Encoded {
  readonly ad?: Inline846Encoded;
  readonly adId?: string;
  readonly index: number;
}
export const Inline846: Schema.Schema<Inline846, Inline846Encoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline846)),
  adId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline847 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline847Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline847: Schema.Schema<Inline847, Inline847Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline848 {
  readonly assetId?: string;
  readonly crop?: Inline848;
  readonly url?: string;
}
export interface Inline848Encoded {
  readonly assetId?: string;
  readonly crop?: Inline848Encoded;
  readonly url?: string;
}
export const Inline848: Schema.Schema<Inline848, Inline848Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline848)),
  url: Schema.optional(Schema.String),
});

export interface Inline849 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline849Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline849: Schema.Schema<Inline849, Inline849Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline850 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline850Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline850: Schema.Schema<Inline850, Inline850Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline851 {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline851Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline851: Schema.Schema<Inline851, Inline851Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline853 {
  readonly adId: string;
  readonly creative: Inline853;
}
export interface Inline853Encoded {
  readonly adId: string;
  readonly creative: Inline853Encoded;
}
export const Inline853: Schema.Schema<Inline853, Inline853Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline853),
});

export interface Inline855 {
  readonly error?: ReadonlyArray<Inline855>;
  readonly success?: ReadonlyArray<Inline857>;
}
export interface Inline855Encoded {
  readonly error?: ReadonlyArray<Inline855Encoded>;
  readonly success?: ReadonlyArray<Inline857Encoded>;
}
export const Inline855: Schema.Schema<Inline855, Inline855Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline855))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline857))),
});

export interface Inline856 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline856;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline856Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline856Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline856: Schema.Schema<Inline856, Inline856Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline856),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline857 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export interface Inline857Encoded {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export const Inline857: Schema.Schema<Inline857, Inline857Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeVersion: Schema.optional(Schema.String),
  index: Schema.Number,
});

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
export interface Inline859Encoded {
  readonly bidding?: Inline859Encoded;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline862Encoded;
}
export const Inline859: Schema.Schema<Inline859, Inline859Encoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline859)),
  budget: Schema.optional(Schema.Number),
  campaignId: Schema.String,
  endDate: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  portfolioId: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.suspend(() => Inline862)),
});

export interface Inline860 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline860Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline860: Schema.Schema<Inline860, Inline860Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline861 {
  readonly audienceSegments?: ReadonlyArray<Inline861>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline861Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline861Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline861: Schema.Schema<Inline861, Inline861Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline861))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline862 {

}
export interface Inline862Encoded {

}
export const Inline862: Schema.Schema<Inline862, Inline862Encoded, never> = Schema.Struct({

});

export interface Inline864 {
  readonly error?: ReadonlyArray<Inline864>;
  readonly success?: ReadonlyArray<Inline870>;
}
export interface Inline864Encoded {
  readonly error?: ReadonlyArray<Inline864Encoded>;
  readonly success?: ReadonlyArray<Inline870Encoded>;
}
export const Inline864: Schema.Schema<Inline864, Inline864Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline864))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline870))),
});

export interface Inline865 {
  readonly cause: Inline865;
  readonly message: string;
  readonly reason: string;
}
export interface Inline865Encoded {
  readonly cause: Inline865Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline865: Schema.Schema<Inline865, Inline865Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline865),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline866 {
  readonly cause: Inline866;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline866Encoded {
  readonly cause: Inline866Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline866: Schema.Schema<Inline866, Inline866Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline866),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline867 {
  readonly cause: Inline867;
  readonly message: string;
  readonly reason: string;
}
export interface Inline867Encoded {
  readonly cause: Inline867Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline867: Schema.Schema<Inline867, Inline867Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline867),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline868 {
  readonly cause: Inline868;
  readonly message: string;
  readonly reason: string;
}
export interface Inline868Encoded {
  readonly cause: Inline868Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline868: Schema.Schema<Inline868, Inline868Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline868),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline869 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline869;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline869Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline869Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline869: Schema.Schema<Inline869, Inline869Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline869),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline870 {
  readonly campaign?: Inline870;
  readonly campaignId?: string;
  readonly index: number;
}
export interface Inline870Encoded {
  readonly campaign?: Inline870Encoded;
  readonly campaignId?: string;
  readonly index: number;
}
export const Inline870: Schema.Schema<Inline870, Inline870Encoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline870)),
  campaignId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline871 {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export interface Inline871Encoded {
  readonly percentage?: number;
  readonly shopperSegment?: string;
}
export const Inline871: Schema.Schema<Inline871, Inline871Encoded, never> = Schema.Struct({
  percentage: Schema.optional(Schema.Number),
  shopperSegment: Schema.optional(Schema.String),
});

export interface Inline872 {
  readonly audienceSegments?: ReadonlyArray<Inline872>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface Inline872Encoded {
  readonly audienceSegments?: ReadonlyArray<Inline872Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const Inline872: Schema.Schema<Inline872, Inline872Encoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline872))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export interface Inline873 {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export interface Inline873Encoded {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
}
export const Inline873: Schema.Schema<Inline873, Inline873Encoded, never> = Schema.Struct({
  creationDate: Schema.optional(Schema.Number),
  lastUpdateDate: Schema.optional(Schema.Number),
  servingStatus: Schema.optional(Schema.String),
  servingStatusDetails: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline874 {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface Inline874Encoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const Inline874: Schema.Schema<Inline874, Inline874Encoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface Inline875 {

}
export interface Inline875Encoded {

}
export const Inline875: Schema.Schema<Inline875, Inline875Encoded, never> = Schema.Struct({

});

export interface Inline877 {
  readonly adId: string;
  readonly creative: Inline877;
}
export interface Inline877Encoded {
  readonly adId: string;
  readonly creative: Inline877Encoded;
}
export const Inline877: Schema.Schema<Inline877, Inline877Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline877),
});

export interface Inline878 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline878Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline878: Schema.Schema<Inline878, Inline878Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline880 {
  readonly error?: ReadonlyArray<Inline880>;
  readonly success?: ReadonlyArray<Inline882>;
}
export interface Inline880Encoded {
  readonly error?: ReadonlyArray<Inline880Encoded>;
  readonly success?: ReadonlyArray<Inline882Encoded>;
}
export const Inline880: Schema.Schema<Inline880, Inline880Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline880))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline882))),
});

export interface Inline881 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline881;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline881Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline881Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline881: Schema.Schema<Inline881, Inline881Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline881),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline882 {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export interface Inline882Encoded {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
}
export const Inline882: Schema.Schema<Inline882, Inline882Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeVersion: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline884 {
  readonly conditions?: ReadonlyArray<Inline884>;
  readonly optimizationRuleId?: string;
}
export interface Inline884Encoded {
  readonly conditions?: ReadonlyArray<Inline884Encoded>;
  readonly optimizationRuleId?: string;
}
export const Inline884: Schema.Schema<Inline884, Inline884Encoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline884))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface Inline886 {
  readonly error?: ReadonlyArray<Inline886>;
  readonly success?: ReadonlyArray<Inline887>;
}
export interface Inline886Encoded {
  readonly error?: ReadonlyArray<Inline886Encoded>;
  readonly success?: ReadonlyArray<Inline887Encoded>;
}
export const Inline886: Schema.Schema<Inline886, Inline886Encoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline886))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline887))),
});

export interface Inline887 {
  readonly index: number;
  readonly optimizationRule: Inline887;
  readonly optimizationRuleId: string;
}
export interface Inline887Encoded {
  readonly index: number;
  readonly optimizationRule: Inline887Encoded;
  readonly optimizationRuleId: string;
}
export const Inline887: Schema.Schema<Inline887, Inline887Encoded, never> = Schema.Struct({
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline887),
  optimizationRuleId: Schema.String,
});

export interface Inline89 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export interface Inline89Encoded {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export const Inline89: Schema.Schema<Inline89, Inline89Encoded, never> = Schema.Struct({
  campaignId: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
});

export interface Inline890 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline890Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline890: Schema.Schema<Inline890, Inline890Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline892 {
  readonly adId: string;
  readonly creative: Inline892;
}
export interface Inline892Encoded {
  readonly adId: string;
  readonly creative: Inline892Encoded;
}
export const Inline892: Schema.Schema<Inline892, Inline892Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline892),
});

export interface Inline895 {
  readonly adId: string;
  readonly creative: Inline895;
}
export interface Inline895Encoded {
  readonly adId: string;
  readonly creative: Inline895Encoded;
}
export const Inline895: Schema.Schema<Inline895, Inline895Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline895),
});

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
export interface Inline896Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline896Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline897Encoded;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline896: Schema.Schema<Inline896, Inline896Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline896)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline897)),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline897 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline897Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline897: Schema.Schema<Inline897, Inline897Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline899 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface Inline899Encoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const Inline899: Schema.Schema<Inline899, Inline899Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface Inline90 {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export interface Inline90Encoded {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export const Inline90: Schema.Schema<Inline90, Inline90Encoded, never> = Schema.Struct({
  budget: Schema.optional(Schema.Number),
  budgetUsagePercent: Schema.optional(Schema.Number),
  campaignId: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
  usageUpdatedTimestamp: Schema.optional(Schema.String),
});

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
export interface Inline901Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline901Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline902Encoded;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline901: Schema.Schema<Inline901, Inline901Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline901)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.String,
  landingPage: Schema.optional(Schema.suspend(() => Inline902)),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline902 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline902Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline902: Schema.Schema<Inline902, Inline902Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline904 {
  readonly creatives?: ReadonlyArray<Inline904>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface Inline904Encoded {
  readonly creatives?: ReadonlyArray<Inline904Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const Inline904: Schema.Schema<Inline904, Inline904Encoded, never> = Schema.Struct({
  creatives: Schema.optional(Schema.Array(Schema.suspend(() => Inline904))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

export interface Inline905 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline905Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline905: Schema.Schema<Inline905, Inline905Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline906 {
  readonly assetId?: string;
  readonly crop?: Inline906;
  readonly url?: string;
}
export interface Inline906Encoded {
  readonly assetId?: string;
  readonly crop?: Inline906Encoded;
  readonly url?: string;
}
export const Inline906: Schema.Schema<Inline906, Inline906Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline906)),
  url: Schema.optional(Schema.String),
});

export interface Inline907 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export interface Inline907Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
}
export const Inline907: Schema.Schema<Inline907, Inline907Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline908 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline908Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline908: Schema.Schema<Inline908, Inline908Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline910 {
  readonly adId: string;
  readonly creative: Inline910;
}
export interface Inline910Encoded {
  readonly adId: string;
  readonly creative: Inline910Encoded;
}
export const Inline910: Schema.Schema<Inline910, Inline910Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline910),
});

export interface Inline911 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline911Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline911: Schema.Schema<Inline911, Inline911Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline914 {
  readonly adId: string;
  readonly creative: Inline914;
}
export interface Inline914Encoded {
  readonly adId: string;
  readonly creative: Inline914Encoded;
}
export const Inline914: Schema.Schema<Inline914, Inline914Encoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline914),
});

export interface Inline915 {
  readonly pageType?: string;
  readonly url?: string;
}
export interface Inline915Encoded {
  readonly pageType?: string;
  readonly url?: string;
}
export const Inline915: Schema.Schema<Inline915, Inline915Encoded, never> = Schema.Struct({
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline916 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline916;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline917;
  readonly headline: string;
}
export interface Inline916Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline916Encoded;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline917Encoded;
  readonly headline: string;
}
export const Inline916: Schema.Schema<Inline916, Inline916Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline916)),
  brandName: Schema.String,
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline917)),
  headline: Schema.String,
});

export interface Inline917 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline917Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline917: Schema.Schema<Inline917, Inline917Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

export interface Inline919 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface Inline919Encoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const Inline919: Schema.Schema<Inline919, Inline919Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface Inline921 {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline921;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline922;
  readonly headline: string;
}
export interface Inline921Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline921Encoded;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline922Encoded;
  readonly headline: string;
}
export const Inline921: Schema.Schema<Inline921, Inline921Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline921)),
  brandName: Schema.String,
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline922)),
  headline: Schema.String,
});

export interface Inline922 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export interface Inline922Encoded {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
export const Inline922: Schema.Schema<Inline922, Inline922Encoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  width: Schema.optional(Schema.Number),
});

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
export interface Inline923Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline923Encoded;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline924Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline925Encoded;
}
export const Inline923: Schema.Schema<Inline923, Inline923Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline923)),
  brandName: Schema.String,
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline924))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline925)),
});

export interface Inline924 {
  readonly assetId?: string;
  readonly crop?: Inline924;
  readonly url?: string;
}
export interface Inline924Encoded {
  readonly assetId?: string;
  readonly crop?: Inline924Encoded;
  readonly url?: string;
}
export const Inline924: Schema.Schema<Inline924, Inline924Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline924)),
  url: Schema.optional(Schema.String),
});

export interface Inline925 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline925Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline925: Schema.Schema<Inline925, Inline925Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline927 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface Inline927Encoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const Inline927: Schema.Schema<Inline927, Inline927Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

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
export interface Inline929Encoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline929Encoded;
  readonly brandName: string;
  readonly collectionType?: string;
  readonly companionAsins?: ReadonlyArray<string>;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly customImages?: ReadonlyArray<Inline930Encoded>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline931Encoded;
}
export const Inline929: Schema.Schema<Inline929, Inline929Encoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline929)),
  brandName: Schema.String,
  collectionType: Schema.optional(Schema.String),
  companionAsins: Schema.optional(Schema.Array(Schema.String)),
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  customImages: Schema.optional(Schema.Array(Schema.suspend(() => Inline930))),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline931)),
});

export interface Inline93 {
  readonly errors?: ReadonlyArray<Inline93>;
  readonly index: number;
}
export interface Inline93Encoded {
  readonly errors?: ReadonlyArray<Inline93Encoded>;
  readonly index: number;
}
export const Inline93: Schema.Schema<Inline93, Inline93Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline93))),
  index: Schema.Number,
});

export interface Inline930 {
  readonly assetId?: string;
  readonly crop?: Inline930;
  readonly url?: string;
}
export interface Inline930Encoded {
  readonly assetId?: string;
  readonly crop?: Inline930Encoded;
  readonly url?: string;
}
export const Inline930: Schema.Schema<Inline930, Inline930Encoded, never> = Schema.Struct({
  assetId: Schema.optional(Schema.String),
  crop: Schema.optional(Schema.suspend(() => Inline930)),
  url: Schema.optional(Schema.String),
});

export interface Inline931 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline931Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline931: Schema.Schema<Inline931, Inline931Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

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
export interface Inline932Encoded {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline932Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline933Encoded;
  readonly subpages: ReadonlyArray<Inline934Encoded>;
}
export const Inline932: Schema.Schema<Inline932, Inline932Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline932)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline933)),
  subpages: Schema.Array(Schema.suspend(() => Inline934)),
});

export interface Inline933 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline933Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline933: Schema.Schema<Inline933, Inline933Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline934 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline934Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline934: Schema.Schema<Inline934, Inline934Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline936 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface Inline936Encoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const Inline936: Schema.Schema<Inline936, Inline936Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

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
export interface Inline938Encoded {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline938Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline939Encoded;
  readonly subpages: ReadonlyArray<Inline940Encoded>;
}
export const Inline938: Schema.Schema<Inline938, Inline938Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline938)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline939)),
  subpages: Schema.Array(Schema.suspend(() => Inline940)),
});

export interface Inline939 {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export interface Inline939Encoded {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
}
export const Inline939: Schema.Schema<Inline939, Inline939Encoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline94 {
  readonly cause: Inline94;
  readonly message: string;
  readonly reason: string;
}
export interface Inline94Encoded {
  readonly cause: Inline94Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline94: Schema.Schema<Inline94, Inline94Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline94),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline940 {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface Inline940Encoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Inline940: Schema.Schema<Inline940, Inline940Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface Inline941 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline941;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export interface Inline941Encoded {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline941Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline941: Schema.Schema<Inline941, Inline941Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline941)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline943 {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export interface Inline943Encoded {
  readonly adId?: string;
  readonly creativeVersion?: string;
}
export const Inline943: Schema.Schema<Inline943, Inline943Encoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
});

export interface Inline945 {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline945;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export interface Inline945Encoded {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline945Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const Inline945: Schema.Schema<Inline945, Inline945Encoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline945)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.Array(Schema.String),
});

export interface Inline947 {
  readonly budgetIncreaseBy?: Inline947;
  readonly duration?: Inline948;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline950;
  readonly recurrence?: Inline951;
  readonly ruleType?: string;
}
export interface Inline947Encoded {
  readonly budgetIncreaseBy?: Inline947Encoded;
  readonly duration?: Inline948Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline950Encoded;
  readonly recurrence?: Inline951Encoded;
  readonly ruleType?: string;
}
export const Inline947: Schema.Schema<Inline947, Inline947Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline947)),
  duration: Schema.optional(Schema.suspend(() => Inline948)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline950)),
  recurrence: Schema.optional(Schema.suspend(() => Inline951)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline948 {
  readonly dateRangeTypeRuleDuration?: Inline948;
  readonly eventTypeRuleDuration?: Inline949;
}
export interface Inline948Encoded {
  readonly dateRangeTypeRuleDuration?: Inline948Encoded;
  readonly eventTypeRuleDuration?: Inline949Encoded;
}
export const Inline948: Schema.Schema<Inline948, Inline948Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline948)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline949)),
});

export interface Inline949 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline949Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline949: Schema.Schema<Inline949, Inline949Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline95 {
  readonly cause: Inline95;
  readonly message: string;
  readonly reason: string;
}
export interface Inline95Encoded {
  readonly cause: Inline95Encoded;
  readonly message: string;
  readonly reason: string;
}
export const Inline95: Schema.Schema<Inline95, Inline95Encoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline95),
  message: Schema.String,
  reason: Schema.String,
});

export interface Inline950 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline950Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline950: Schema.Schema<Inline950, Inline950Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline951 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline951>;
  readonly type?: string;
}
export interface Inline951Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline951Encoded>;
  readonly type?: string;
}
export const Inline951: Schema.Schema<Inline951, Inline951Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline951))),
  type: Schema.optional(Schema.String),
});

export interface Inline954 {
  readonly budgetIncreaseBy?: Inline954;
  readonly duration?: Inline955;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline957;
  readonly recurrence?: Inline958;
  readonly ruleType?: string;
}
export interface Inline954Encoded {
  readonly budgetIncreaseBy?: Inline954Encoded;
  readonly duration?: Inline955Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline957Encoded;
  readonly recurrence?: Inline958Encoded;
  readonly ruleType?: string;
}
export const Inline954: Schema.Schema<Inline954, Inline954Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline954)),
  duration: Schema.optional(Schema.suspend(() => Inline955)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline957)),
  recurrence: Schema.optional(Schema.suspend(() => Inline958)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline955 {
  readonly dateRangeTypeRuleDuration?: Inline955;
  readonly eventTypeRuleDuration?: Inline956;
}
export interface Inline955Encoded {
  readonly dateRangeTypeRuleDuration?: Inline955Encoded;
  readonly eventTypeRuleDuration?: Inline956Encoded;
}
export const Inline955: Schema.Schema<Inline955, Inline955Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline955)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline956)),
});

export interface Inline956 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline956Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline956: Schema.Schema<Inline956, Inline956Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline957 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline957Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline957: Schema.Schema<Inline957, Inline957Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline958 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline958>;
  readonly type?: string;
}
export interface Inline958Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline958Encoded>;
  readonly type?: string;
}
export const Inline958: Schema.Schema<Inline958, Inline958Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline958))),
  type: Schema.optional(Schema.String),
});

export interface Inline959 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline959;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline959Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline959Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline959: Schema.Schema<Inline959, Inline959Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline959)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline96 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline96;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface Inline96Encoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline96Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const Inline96: Schema.Schema<Inline96, Inline96Encoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline96),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Inline960 {
  readonly dateRangeTypeRuleDuration?: Inline960;
  readonly eventTypeRuleDuration?: Inline961;
}
export interface Inline960Encoded {
  readonly dateRangeTypeRuleDuration?: Inline960Encoded;
  readonly eventTypeRuleDuration?: Inline961Encoded;
}
export const Inline960: Schema.Schema<Inline960, Inline960Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline960)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline961)),
});

export interface Inline961 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline961Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline961: Schema.Schema<Inline961, Inline961Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline962 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline962Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline962: Schema.Schema<Inline962, Inline962Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline963 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline963>;
  readonly type?: string;
}
export interface Inline963Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline963Encoded>;
  readonly type?: string;
}
export const Inline963: Schema.Schema<Inline963, Inline963Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline963))),
  type: Schema.optional(Schema.String),
});

export interface Inline966 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline966;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline966Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline966Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline966: Schema.Schema<Inline966, Inline966Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline966)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline967 {
  readonly dateRangeTypeRuleDuration?: Inline967;
  readonly eventTypeRuleDuration?: Inline968;
}
export interface Inline967Encoded {
  readonly dateRangeTypeRuleDuration?: Inline967Encoded;
  readonly eventTypeRuleDuration?: Inline968Encoded;
}
export const Inline967: Schema.Schema<Inline967, Inline967Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline967)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline968)),
});

export interface Inline968 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline968Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline968: Schema.Schema<Inline968, Inline968Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline969 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline969Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline969: Schema.Schema<Inline969, Inline969Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline97 {
  readonly adGroup?: Inline97;
  readonly adGroupId?: string;
  readonly index: number;
}
export interface Inline97Encoded {
  readonly adGroup?: Inline97Encoded;
  readonly adGroupId?: string;
  readonly index: number;
}
export const Inline97: Schema.Schema<Inline97, Inline97Encoded, never> = Schema.Struct({
  adGroup: Schema.optional(Schema.suspend(() => Inline97)),
  adGroupId: Schema.optional(Schema.String),
  index: Schema.Number,
});

export interface Inline970 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline970>;
  readonly type?: string;
}
export interface Inline970Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline970Encoded>;
  readonly type?: string;
}
export const Inline970: Schema.Schema<Inline970, Inline970Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline970))),
  type: Schema.optional(Schema.String),
});

export interface Inline972 {
  readonly budgetRule?: Inline972;
}
export interface Inline972Encoded {
  readonly budgetRule?: Inline972Encoded;
}
export const Inline972: Schema.Schema<Inline972, Inline972Encoded, never> = Schema.Struct({
  budgetRule: Schema.optional(Schema.suspend(() => Inline972)),
});

export interface Inline973 {
  readonly dateRangeTypeRuleDuration?: Inline973;
  readonly eventTypeRuleDuration?: Inline974;
}
export interface Inline973Encoded {
  readonly dateRangeTypeRuleDuration?: Inline973Encoded;
  readonly eventTypeRuleDuration?: Inline974Encoded;
}
export const Inline973: Schema.Schema<Inline973, Inline973Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline973)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline974)),
});

export interface Inline974 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline974Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline974: Schema.Schema<Inline974, Inline974Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline975 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline975Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline975: Schema.Schema<Inline975, Inline975Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline976 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline976>;
  readonly type?: string;
}
export interface Inline976Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline976Encoded>;
  readonly type?: string;
}
export const Inline976: Schema.Schema<Inline976, Inline976Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline976))),
  type: Schema.optional(Schema.String),
});

export interface Inline979 {
  readonly associatedCampaigns?: ReadonlyArray<Inline979>;
  readonly nextToken?: string;
}
export interface Inline979Encoded {
  readonly associatedCampaigns?: ReadonlyArray<Inline979Encoded>;
  readonly nextToken?: string;
}
export const Inline979: Schema.Schema<Inline979, Inline979Encoded, never> = Schema.Struct({
  associatedCampaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline979))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline982 {
  readonly associatedRules?: ReadonlyArray<Inline982>;
}
export interface Inline982Encoded {
  readonly associatedRules?: ReadonlyArray<Inline982Encoded>;
}
export const Inline982: Schema.Schema<Inline982, Inline982Encoded, never> = Schema.Struct({
  associatedRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline982))),
});

export interface Inline983 {
  readonly dateRangeTypeRuleDuration?: Inline983;
  readonly eventTypeRuleDuration?: Inline984;
}
export interface Inline983Encoded {
  readonly dateRangeTypeRuleDuration?: Inline983Encoded;
  readonly eventTypeRuleDuration?: Inline984Encoded;
}
export const Inline983: Schema.Schema<Inline983, Inline983Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline983)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline984)),
});

export interface Inline984 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline984Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline984: Schema.Schema<Inline984, Inline984Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline985 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline985Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline985: Schema.Schema<Inline985, Inline985Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline986 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline986>;
  readonly type?: string;
}
export interface Inline986Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline986Encoded>;
  readonly type?: string;
}
export const Inline986: Schema.Schema<Inline986, Inline986Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline986))),
  type: Schema.optional(Schema.String),
});

export interface Inline99 {
  readonly errors?: ReadonlyArray<Inline99>;
  readonly index: number;
}
export interface Inline99Encoded {
  readonly errors?: ReadonlyArray<Inline99Encoded>;
  readonly index: number;
}
export const Inline99: Schema.Schema<Inline99, Inline99Encoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline99))),
  index: Schema.Number,
});

export interface Inline991 {

}
export interface Inline991Encoded {

}
export const Inline991: Schema.Schema<Inline991, Inline991Encoded, never> = Schema.Struct({

});

export interface Inline997 {
  readonly campaignId: string;
}
export interface Inline997Encoded {
  readonly campaignId: string;
}
export const Inline997: Schema.Schema<Inline997, Inline997Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
});

export interface Inline999 {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline999>;
}
export interface Inline999Encoded {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline999Encoded>;
}
export const Inline999: Schema.Schema<Inline999, Inline999Encoded, never> = Schema.Struct({
  recommendedBudgetRuleEvents: Schema.optional(Schema.Array(Schema.suspend(() => Inline999))),
});

export type InternalErrorErrorCode = "INTERNAL_ERROR" | string;
export type InternalErrorErrorCodeEncoded = "INTERNAL_ERROR" | string;
export const InternalErrorErrorCode: Schema.Schema<InternalErrorErrorCode, InternalErrorErrorCodeEncoded, never> = Schema.Union(Schema.Literal("INTERNAL_ERROR"), Schema.String);

export type InternalServerErrorCode = "INTERNAL_ERROR" | string;
export type InternalServerErrorCodeEncoded = "INTERNAL_ERROR" | string;
export const InternalServerErrorCode: Schema.Schema<InternalServerErrorCode, InternalServerErrorCodeEncoded, never> = Schema.Union(Schema.Literal("INTERNAL_ERROR"), Schema.String);

export interface InternalServerExceptionResponseContent {
  readonly code: string;
  readonly details?: string;
}
export interface InternalServerExceptionResponseContentEncoded {
  readonly code: string;
  readonly details?: string;
}
export const InternalServerExceptionResponseContent: Schema.Schema<InternalServerExceptionResponseContent, InternalServerExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.optional(Schema.String),
});

export interface InvalidArgumentError {
  readonly errorType: string;
  readonly errorValue: Inline486;
}
export interface InvalidArgumentErrorEncoded {
  readonly errorType: string;
  readonly errorValue: Inline486Encoded;
}
export const InvalidArgumentError: Schema.Schema<InvalidArgumentError, InvalidArgumentErrorEncoded, never> = Schema.Struct({
  errorType: Schema.String,
  errorValue: Schema.suspend(() => Inline486),
});

export type InvalidArgumentErrorCode = "INVALID_ARGUMENT" | string;
export type InvalidArgumentErrorCodeEncoded = "INVALID_ARGUMENT" | string;
export const InvalidArgumentErrorCode: Schema.Schema<InvalidArgumentErrorCode, InvalidArgumentErrorCodeEncoded, never> = Schema.Union(Schema.Literal("INVALID_ARGUMENT"), Schema.String);

export interface InvalidArgumentErrorSelector {
  readonly otherError?: Inline490;
  readonly rangeError?: Inline491;
}
export interface InvalidArgumentErrorSelectorEncoded {
  readonly otherError?: Inline490Encoded;
  readonly rangeError?: Inline491Encoded;
}
export const InvalidArgumentErrorSelector: Schema.Schema<InvalidArgumentErrorSelector, InvalidArgumentErrorSelectorEncoded, never> = Schema.Struct({
  otherError: Schema.optional(Schema.suspend(() => Inline490)),
  rangeError: Schema.optional(Schema.suspend(() => Inline491)),
});

export interface InvalidArgumentExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface InvalidArgumentExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const InvalidArgumentExceptionResponseContent: Schema.Schema<InvalidArgumentExceptionResponseContent, InvalidArgumentExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface LandingPage {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export interface LandingPageEncoded {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
}
export const LandingPage: Schema.Schema<LandingPage, LandingPageEncoded, never> = Schema.Struct({
  asins: Schema.optional(Schema.Array(Schema.String)),
  pageType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export type LandingPageType = "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE" | string;
export type LandingPageTypeEncoded = "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE" | string;
export const LandingPageType: Schema.Schema<LandingPageType, LandingPageTypeEncoded, never> = Schema.Union(Schema.Literal("CUSTOM_URL", "DETAIL_PAGE", "PRODUCT_LIST", "STORE"), Schema.String);

export type Layout = "BRAND_GALLERY" | string;
export type LayoutEncoded = "BRAND_GALLERY" | string;
export const Layout: Schema.Schema<Layout, LayoutEncoded, never> = Schema.Union(Schema.Literal("BRAND_GALLERY"), Schema.String);

export interface ListAssociatedBudgetRulesForSBCampaignsParams {
  readonly campaignId: number;
}
export interface ListAssociatedBudgetRulesForSBCampaignsParamsEncoded {
  readonly campaignId: number;
}
export const ListAssociatedBudgetRulesForSBCampaignsParams: Schema.Schema<ListAssociatedBudgetRulesForSBCampaignsParams, ListAssociatedBudgetRulesForSBCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
});

export interface ListAssociatedBudgetRulesForSBCampaignsResponse {
  readonly data: Inline982;
}
export interface ListAssociatedBudgetRulesForSBCampaignsResponseEncoded {
  readonly data: Inline982Encoded;
}
export const ListAssociatedBudgetRulesForSBCampaignsResponse: Schema.Schema<ListAssociatedBudgetRulesForSBCampaignsResponse, ListAssociatedBudgetRulesForSBCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline982),
});

export interface ListCreativesParams {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListCreativesParamsEncoded {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export const ListCreativesParams: Schema.Schema<ListCreativesParams, ListCreativesParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeStatusFilter: Schema.optional(Schema.Array(Schema.String)),
  creativeTypeFilter: Schema.optional(Schema.Array(Schema.String)),
  creativeVersionFilter: Schema.optional(Schema.Array(Schema.String)),
  maxResults: Schema.optional(Schema.Number),
  nextToken: Schema.optional(Schema.String),
});

export interface ListCreativesRequestContent {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListCreativesRequestContentEncoded {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export const ListCreativesRequestContent: Schema.Schema<ListCreativesRequestContent, ListCreativesRequestContentEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creativeStatusFilter: Schema.optional(Schema.Array(Schema.String)),
  creativeTypeFilter: Schema.optional(Schema.Array(Schema.String)),
  creativeVersionFilter: Schema.optional(Schema.Array(Schema.String)),
  maxResults: Schema.optional(Schema.Number),
  nextToken: Schema.optional(Schema.String),
});

export interface ListCreativesResponse {
  readonly data: Inline904;
}
export interface ListCreativesResponseEncoded {
  readonly data: Inline904Encoded;
}
export const ListCreativesResponse: Schema.Schema<ListCreativesResponse, ListCreativesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline904),
});

export interface ListCreativesResponseContent {
  readonly creatives?: ReadonlyArray<Inline498>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface ListCreativesResponseContentEncoded {
  readonly creatives?: ReadonlyArray<Inline498Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const ListCreativesResponseContent: Schema.Schema<ListCreativesResponseContent, ListCreativesResponseContentEncoded, never> = Schema.Struct({
  creatives: Schema.optional(Schema.Array(Schema.suspend(() => Inline498))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

export interface ListCreativesResultEntry {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline504;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}
export interface ListCreativesResultEntryEncoded {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline504Encoded;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
}
export const ListCreativesResultEntry: Schema.Schema<ListCreativesResultEntry, ListCreativesResultEntryEncoded, never> = Schema.Struct({
  adId: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.Number),
  creativeProperties: Schema.optional(Schema.suspend(() => Inline504)),
  creativeStatus: Schema.optional(Schema.String),
  creativeType: Schema.optional(Schema.String),
  creativeVersion: Schema.optional(Schema.String),
  lastUpdateTime: Schema.optional(Schema.Number),
});

export interface ListMigrationsParams {
  readonly adGroupIdFilter?: Inline1224;
  readonly adIdFilter?: Inline1225;
  readonly adStateFilter?: Inline1226;
  readonly campaignIdFilter?: Inline1227;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline1228;
  readonly nextToken?: string;
}
export interface ListMigrationsParamsEncoded {
  readonly adGroupIdFilter?: Inline1224Encoded;
  readonly adIdFilter?: Inline1225Encoded;
  readonly adStateFilter?: Inline1226Encoded;
  readonly campaignIdFilter?: Inline1227Encoded;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline1228Encoded;
  readonly nextToken?: string;
}
export const ListMigrationsParams: Schema.Schema<ListMigrationsParams, ListMigrationsParamsEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline1224)),
  adIdFilter: Schema.optional(Schema.suspend(() => Inline1225)),
  adStateFilter: Schema.optional(Schema.suspend(() => Inline1226)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline1227)),
  maxResults: Schema.optional(Schema.Number),
  migrationStatusFilter: Schema.optional(Schema.suspend(() => Inline1228)),
  nextToken: Schema.optional(Schema.String),
});

export interface ListMigrationsRequestContent {
  readonly adGroupIdFilter?: Inline510;
  readonly adIdFilter?: Inline511;
  readonly adStateFilter?: Inline512;
  readonly campaignIdFilter?: Inline513;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline514;
  readonly nextToken?: string;
}
export interface ListMigrationsRequestContentEncoded {
  readonly adGroupIdFilter?: Inline510Encoded;
  readonly adIdFilter?: Inline511Encoded;
  readonly adStateFilter?: Inline512Encoded;
  readonly campaignIdFilter?: Inline513Encoded;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline514Encoded;
  readonly nextToken?: string;
}
export const ListMigrationsRequestContent: Schema.Schema<ListMigrationsRequestContent, ListMigrationsRequestContentEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline510)),
  adIdFilter: Schema.optional(Schema.suspend(() => Inline511)),
  adStateFilter: Schema.optional(Schema.suspend(() => Inline512)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline513)),
  maxResults: Schema.optional(Schema.Number),
  migrationStatusFilter: Schema.optional(Schema.suspend(() => Inline514)),
  nextToken: Schema.optional(Schema.String),
});

export interface ListMigrationsResponse {
  readonly data: Inline1230;
}
export interface ListMigrationsResponseEncoded {
  readonly data: Inline1230Encoded;
}
export const ListMigrationsResponse: Schema.Schema<ListMigrationsResponse, ListMigrationsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1230),
});

export interface ListMigrationsResponseContent {
  readonly migrations?: ReadonlyArray<Inline516>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export interface ListMigrationsResponseContentEncoded {
  readonly migrations?: ReadonlyArray<Inline516Encoded>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export const ListMigrationsResponseContent: Schema.Schema<ListMigrationsResponseContent, ListMigrationsResponseContentEncoded, never> = Schema.Struct({
  migrations: Schema.optional(Schema.Array(Schema.suspend(() => Inline516))),
  nextToken: Schema.optional(Schema.String),
  totalCount: Schema.optional(Schema.Number),
});

export interface ListSponsoredBrandsAdGroupsParams {
  readonly adGroupIdFilter?: Inline1089;
  readonly campaignIdFilter?: Inline1090;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1091;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1092;
}
export interface ListSponsoredBrandsAdGroupsParamsEncoded {
  readonly adGroupIdFilter?: Inline1089Encoded;
  readonly campaignIdFilter?: Inline1090Encoded;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1091Encoded;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1092Encoded;
}
export const ListSponsoredBrandsAdGroupsParams: Schema.Schema<ListSponsoredBrandsAdGroupsParams, ListSponsoredBrandsAdGroupsParamsEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline1089)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline1090)),
  includeExtendedDataFields: Schema.optional(Schema.Boolean),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline1091)),
  nextToken: Schema.optional(Schema.String),
  stateFilter: Schema.optional(Schema.suspend(() => Inline1092)),
});

export interface ListSponsoredBrandsAdGroupsRequestContent {
  readonly adGroupIdFilter?: Inline524;
  readonly campaignIdFilter?: Inline525;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline526;
  readonly nextToken?: string;
  readonly stateFilter?: Inline527;
}
export interface ListSponsoredBrandsAdGroupsRequestContentEncoded {
  readonly adGroupIdFilter?: Inline524Encoded;
  readonly campaignIdFilter?: Inline525Encoded;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline526Encoded;
  readonly nextToken?: string;
  readonly stateFilter?: Inline527Encoded;
}
export const ListSponsoredBrandsAdGroupsRequestContent: Schema.Schema<ListSponsoredBrandsAdGroupsRequestContent, ListSponsoredBrandsAdGroupsRequestContentEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline524)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline525)),
  includeExtendedDataFields: Schema.optional(Schema.Boolean),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline526)),
  nextToken: Schema.optional(Schema.String),
  stateFilter: Schema.optional(Schema.suspend(() => Inline527)),
});

export interface ListSponsoredBrandsAdGroupsResponse {
  readonly data: Inline1094;
}
export interface ListSponsoredBrandsAdGroupsResponseEncoded {
  readonly data: Inline1094Encoded;
}
export const ListSponsoredBrandsAdGroupsResponse: Schema.Schema<ListSponsoredBrandsAdGroupsResponse, ListSponsoredBrandsAdGroupsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1094),
});

export interface ListSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: ReadonlyArray<Inline529>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface ListSponsoredBrandsAdGroupsResponseContentEncoded {
  readonly adGroups?: ReadonlyArray<Inline529Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const ListSponsoredBrandsAdGroupsResponseContent: Schema.Schema<ListSponsoredBrandsAdGroupsResponseContent, ListSponsoredBrandsAdGroupsResponseContentEncoded, never> = Schema.Struct({
  adGroups: Schema.optional(Schema.Array(Schema.suspend(() => Inline529))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

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
export interface ListSponsoredBrandsAdsParamsEncoded {
  readonly adGroupIdFilter?: Inline1118Encoded;
  readonly adIdFilter?: Inline1119Encoded;
  readonly campaignIdFilter?: Inline1120Encoded;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1121Encoded;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1122Encoded;
}
export const ListSponsoredBrandsAdsParams: Schema.Schema<ListSponsoredBrandsAdsParams, ListSponsoredBrandsAdsParamsEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline1118)),
  adIdFilter: Schema.optional(Schema.suspend(() => Inline1119)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline1120)),
  creativeVersionToReturn: Schema.optional(Schema.String),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline1121)),
  nextToken: Schema.optional(Schema.String),
  stateFilter: Schema.optional(Schema.suspend(() => Inline1122)),
});

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
export interface ListSponsoredBrandsAdsRequestContentEncoded {
  readonly adGroupIdFilter?: Inline531Encoded;
  readonly adIdFilter?: Inline532Encoded;
  readonly campaignIdFilter?: Inline533Encoded;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline534Encoded;
  readonly nextToken?: string;
  readonly stateFilter?: Inline535Encoded;
}
export const ListSponsoredBrandsAdsRequestContent: Schema.Schema<ListSponsoredBrandsAdsRequestContent, ListSponsoredBrandsAdsRequestContentEncoded, never> = Schema.Struct({
  adGroupIdFilter: Schema.optional(Schema.suspend(() => Inline531)),
  adIdFilter: Schema.optional(Schema.suspend(() => Inline532)),
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline533)),
  creativeVersionToReturn: Schema.optional(Schema.String),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline534)),
  nextToken: Schema.optional(Schema.String),
  stateFilter: Schema.optional(Schema.suspend(() => Inline535)),
});

export interface ListSponsoredBrandsAdsResponse {
  readonly data: Inline1124;
}
export interface ListSponsoredBrandsAdsResponseEncoded {
  readonly data: Inline1124Encoded;
}
export const ListSponsoredBrandsAdsResponse: Schema.Schema<ListSponsoredBrandsAdsResponse, ListSponsoredBrandsAdsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1124),
});

export interface ListSponsoredBrandsAdsResponseContent {
  readonly ads?: ReadonlyArray<Inline537>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export interface ListSponsoredBrandsAdsResponseContentEncoded {
  readonly ads?: ReadonlyArray<Inline537Encoded>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}
export const ListSponsoredBrandsAdsResponseContent: Schema.Schema<ListSponsoredBrandsAdsResponseContent, ListSponsoredBrandsAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.Array(Schema.suspend(() => Inline537))),
  nextToken: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
});

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
export interface ListSponsoredBrandsCampaignsParamsEncoded {
  readonly campaignIdFilter?: Inline1194Encoded;
  readonly goalTypeFilter?: Inline1195Encoded;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1196Encoded;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline1197Encoded;
  readonly stateFilter?: Inline1198Encoded;
}
export const ListSponsoredBrandsCampaignsParams: Schema.Schema<ListSponsoredBrandsCampaignsParams, ListSponsoredBrandsCampaignsParamsEncoded, never> = Schema.Struct({
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline1194)),
  goalTypeFilter: Schema.optional(Schema.suspend(() => Inline1195)),
  includeExtendedDataFields: Schema.optional(Schema.Boolean),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline1196)),
  nextToken: Schema.optional(Schema.String),
  portfolioIdFilter: Schema.optional(Schema.suspend(() => Inline1197)),
  stateFilter: Schema.optional(Schema.suspend(() => Inline1198)),
});

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
export interface ListSponsoredBrandsCampaignsRequestContentEncoded {
  readonly campaignIdFilter?: Inline544Encoded;
  readonly goalTypeFilter?: Inline545Encoded;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline546Encoded;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline547Encoded;
  readonly stateFilter?: Inline548Encoded;
}
export const ListSponsoredBrandsCampaignsRequestContent: Schema.Schema<ListSponsoredBrandsCampaignsRequestContent, ListSponsoredBrandsCampaignsRequestContentEncoded, never> = Schema.Struct({
  campaignIdFilter: Schema.optional(Schema.suspend(() => Inline544)),
  goalTypeFilter: Schema.optional(Schema.suspend(() => Inline545)),
  includeExtendedDataFields: Schema.optional(Schema.Boolean),
  maxResults: Schema.optional(Schema.Number),
  nameFilter: Schema.optional(Schema.suspend(() => Inline546)),
  nextToken: Schema.optional(Schema.String),
  portfolioIdFilter: Schema.optional(Schema.suspend(() => Inline547)),
  stateFilter: Schema.optional(Schema.suspend(() => Inline548)),
});

export interface ListSponsoredBrandsCampaignsResponse {
  readonly data: Inline1200;
}
export interface ListSponsoredBrandsCampaignsResponseEncoded {
  readonly data: Inline1200Encoded;
}
export const ListSponsoredBrandsCampaignsResponse: Schema.Schema<ListSponsoredBrandsCampaignsResponse, ListSponsoredBrandsCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1200),
});

export interface ListSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline550>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export interface ListSponsoredBrandsCampaignsResponseContentEncoded {
  readonly campaigns?: ReadonlyArray<Inline550Encoded>;
  readonly nextToken?: string;
  readonly totalCount?: number;
}
export const ListSponsoredBrandsCampaignsResponseContent: Schema.Schema<ListSponsoredBrandsCampaignsResponseContent, ListSponsoredBrandsCampaignsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline550))),
  nextToken: Schema.optional(Schema.String),
  totalCount: Schema.optional(Schema.Number),
});

export interface ListSponsoredBrandsOptimizationRulesParams {
  readonly entityFilter?: Inline1054;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline1055;
}
export interface ListSponsoredBrandsOptimizationRulesParamsEncoded {
  readonly entityFilter?: Inline1054Encoded;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline1055Encoded;
}
export const ListSponsoredBrandsOptimizationRulesParams: Schema.Schema<ListSponsoredBrandsOptimizationRulesParams, ListSponsoredBrandsOptimizationRulesParamsEncoded, never> = Schema.Struct({
  entityFilter: Schema.optional(Schema.suspend(() => Inline1054)),
  maxResults: Schema.optional(Schema.Number),
  nextToken: Schema.optional(Schema.String),
  optimizationRuleIdFilter: Schema.optional(Schema.suspend(() => Inline1055)),
});

export interface ListSponsoredBrandsOptimizationRulesRequestContent {
  readonly entityFilter?: Inline557;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline558;
}
export interface ListSponsoredBrandsOptimizationRulesRequestContentEncoded {
  readonly entityFilter?: Inline557Encoded;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline558Encoded;
}
export const ListSponsoredBrandsOptimizationRulesRequestContent: Schema.Schema<ListSponsoredBrandsOptimizationRulesRequestContent, ListSponsoredBrandsOptimizationRulesRequestContentEncoded, never> = Schema.Struct({
  entityFilter: Schema.optional(Schema.suspend(() => Inline557)),
  maxResults: Schema.optional(Schema.Number),
  nextToken: Schema.optional(Schema.String),
  optimizationRuleIdFilter: Schema.optional(Schema.suspend(() => Inline558)),
});

export interface ListSponsoredBrandsOptimizationRulesResponse {
  readonly data: Inline1057;
}
export interface ListSponsoredBrandsOptimizationRulesResponseEncoded {
  readonly data: Inline1057Encoded;
}
export const ListSponsoredBrandsOptimizationRulesResponse: Schema.Schema<ListSponsoredBrandsOptimizationRulesResponse, ListSponsoredBrandsOptimizationRulesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1057),
});

export interface ListSponsoredBrandsOptimizationRulesResponseContent {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline560>;
  readonly totalCount?: number;
}
export interface ListSponsoredBrandsOptimizationRulesResponseContentEncoded {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline560Encoded>;
  readonly totalCount?: number;
}
export const ListSponsoredBrandsOptimizationRulesResponseContent: Schema.Schema<ListSponsoredBrandsOptimizationRulesResponseContent, ListSponsoredBrandsOptimizationRulesResponseContentEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
  optimizationRules: Schema.Array(Schema.suspend(() => Inline560)),
  totalCount: Schema.optional(Schema.Number),
});

export interface Migration {
  readonly migrationEntity: Inline562;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline568>;
}
export interface MigrationEncoded {
  readonly migrationEntity: Inline562Encoded;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline568Encoded>;
}
export const Migration: Schema.Schema<Migration, MigrationEncoded, never> = Schema.Struct({
  migrationEntity: Schema.suspend(() => Inline562),
  migrationId: Schema.String,
  migrationOptions: Schema.Array(Schema.suspend(() => Inline568)),
});

export interface MigrationEntity {
  readonly ad?: Inline570;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}
export interface MigrationEntityEncoded {
  readonly ad?: Inline570Encoded;
  readonly adGroupName?: string;
  readonly campaignName?: string;
}
export const MigrationEntity: Schema.Schema<MigrationEntity, MigrationEntityEncoded, never> = Schema.Struct({
  ad: Schema.optional(Schema.suspend(() => Inline570)),
  adGroupName: Schema.optional(Schema.String),
  campaignName: Schema.optional(Schema.String),
});

export interface MigrationJobResultsParams {
  readonly jobId: string;
  readonly nextToken?: string;
}
export interface MigrationJobResultsParamsEncoded {
  readonly jobId: string;
  readonly nextToken?: string;
}
export const MigrationJobResultsParams: Schema.Schema<MigrationJobResultsParams, MigrationJobResultsParamsEncoded, never> = Schema.Struct({
  jobId: Schema.String,
  nextToken: Schema.optional(Schema.String),
});

export interface MigrationJobResultsRequestContent {
  readonly jobId: string;
  readonly nextToken?: string;
}
export interface MigrationJobResultsRequestContentEncoded {
  readonly jobId: string;
  readonly nextToken?: string;
}
export const MigrationJobResultsRequestContent: Schema.Schema<MigrationJobResultsRequestContent, MigrationJobResultsRequestContentEncoded, never> = Schema.Struct({
  jobId: Schema.String,
  nextToken: Schema.optional(Schema.String),
});

export interface MigrationJobResultsResponse {
  readonly data: Inline1216;
}
export interface MigrationJobResultsResponseEncoded {
  readonly data: Inline1216Encoded;
}
export const MigrationJobResultsResponse: Schema.Schema<MigrationJobResultsResponse, MigrationJobResultsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1216),
});

export interface MigrationJobResultsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline578>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}
export interface MigrationJobResultsResponseContentEncoded {
  readonly campaigns?: ReadonlyArray<Inline578Encoded>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
}
export const MigrationJobResultsResponseContent: Schema.Schema<MigrationJobResultsResponseContent, MigrationJobResultsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline578))),
  jobId: Schema.optional(Schema.String),
  migrationJobStatus: Schema.optional(Schema.String),
  nextToken: Schema.optional(Schema.String),
});

export interface MigrationJobStatusParams {
  readonly jobId: string;
}
export interface MigrationJobStatusParamsEncoded {
  readonly jobId: string;
}
export const MigrationJobStatusParams: Schema.Schema<MigrationJobStatusParams, MigrationJobStatusParamsEncoded, never> = Schema.Struct({
  jobId: Schema.String,
});

export interface MigrationJobStatusRequestContent {
  readonly jobId: string;
}
export interface MigrationJobStatusRequestContentEncoded {
  readonly jobId: string;
}
export const MigrationJobStatusRequestContent: Schema.Schema<MigrationJobStatusRequestContent, MigrationJobStatusRequestContentEncoded, never> = Schema.Struct({
  jobId: Schema.String,
});

export interface MigrationJobStatusResponse {
  readonly data: Inline1219;
}
export interface MigrationJobStatusResponseEncoded {
  readonly data: Inline1219Encoded;
}
export const MigrationJobStatusResponse: Schema.Schema<MigrationJobStatusResponse, MigrationJobStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1219),
});

export interface MigrationJobStatusResponseContent {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}
export interface MigrationJobStatusResponseContentEncoded {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
}
export const MigrationJobStatusResponseContent: Schema.Schema<MigrationJobStatusResponseContent, MigrationJobStatusResponseContentEncoded, never> = Schema.Struct({
  jobId: Schema.optional(Schema.String),
  migrationJobStatus: Schema.optional(Schema.String),
  migrationJobStatusReason: Schema.optional(Schema.String),
});

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
export interface MigrationOptionEncoded {
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
export const MigrationOption: Schema.Schema<MigrationOption, MigrationOptionEncoded, never> = Schema.Struct({
  adGroupId: Schema.optional(Schema.String),
  adId: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  migrationType: Schema.optional(Schema.String),
  optionType: Schema.String,
  rationale: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

export type MigrationOptionType = "AUTO_COLLECTION" | "MANUAL_COLLECTION" | string;
export type MigrationOptionTypeEncoded = "AUTO_COLLECTION" | "MANUAL_COLLECTION" | string;
export const MigrationOptionType: Schema.Schema<MigrationOptionType, MigrationOptionTypeEncoded, never> = Schema.Union(Schema.Literal("AUTO_COLLECTION", "MANUAL_COLLECTION"), Schema.String);

export interface MigrationResultsParams {
  readonly nextToken?: string;
}
export interface MigrationResultsParamsEncoded {
  readonly nextToken?: string;
}
export const MigrationResultsParams: Schema.Schema<MigrationResultsParams, MigrationResultsParamsEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
});

export interface MigrationResultsRequestContent {
  readonly nextToken?: string;
}
export interface MigrationResultsRequestContentEncoded {
  readonly nextToken?: string;
}
export const MigrationResultsRequestContent: Schema.Schema<MigrationResultsRequestContent, MigrationResultsRequestContentEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
});

export interface MigrationResultsResponse {
  readonly data: Inline1222;
}
export interface MigrationResultsResponseEncoded {
  readonly data: Inline1222Encoded;
}
export const MigrationResultsResponse: Schema.Schema<MigrationResultsResponse, MigrationResultsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1222),
});

export interface MigrationResultsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline585>;
  readonly nextToken?: string;
}
export interface MigrationResultsResponseContentEncoded {
  readonly campaigns?: ReadonlyArray<Inline585Encoded>;
  readonly nextToken?: string;
}
export const MigrationResultsResponseContent: Schema.Schema<MigrationResultsResponseContent, MigrationResultsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline585))),
  nextToken: Schema.optional(Schema.String),
});

export type MigrationStatus = "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED" | string;
export type MigrationStatusEncoded = "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED" | string;
export const MigrationStatus: Schema.Schema<MigrationStatus, MigrationStatusEncoded, never> = Schema.Union(Schema.Literal("ACCEPTED", "ELIGIBLE", "MIGRATED", "MIGRATION_FAILED"), Schema.String);

export interface MigrationStatusFilter {
  readonly include?: ReadonlyArray<string>;
}
export interface MigrationStatusFilterEncoded {
  readonly include?: ReadonlyArray<string>;
}
export const MigrationStatusFilter: Schema.Schema<MigrationStatusFilter, MigrationStatusFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export type MigrationType = "IMPROVE" | "MIGRATE" | string;
export type MigrationTypeEncoded = "IMPROVE" | "MIGRATE" | string;
export const MigrationType: Schema.Schema<MigrationType, MigrationTypeEncoded, never> = Schema.Union(Schema.Literal("IMPROVE", "MIGRATE"), Schema.String);

export interface ModerationError {
  readonly code?: string;
  readonly details?: string;
}
export interface ModerationErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const ModerationError: Schema.Schema<ModerationError, ModerationErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

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
export interface MultiAdGroupAdEncoded {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline591Encoded;
  readonly extendedData?: Inline595Encoded;
  readonly landingPage?: Inline596Encoded;
  readonly name: string;
  readonly state: string;
}
export const MultiAdGroupAd: Schema.Schema<MultiAdGroupAd, MultiAdGroupAdEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  adId: Schema.String,
  campaignId: Schema.String,
  creative: Schema.optional(Schema.suspend(() => Inline591)),
  extendedData: Schema.optional(Schema.suspend(() => Inline595)),
  landingPage: Schema.optional(Schema.suspend(() => Inline596)),
  name: Schema.String,
  state: Schema.String,
});

export interface NameFilter {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export interface NameFilterEncoded {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}
export const NameFilter: Schema.Schema<NameFilter, NameFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
  queryTermMatchType: Schema.optional(Schema.String),
});

export type NotFoundErrorCode = "NOT_FOUND" | string;
export type NotFoundErrorCodeEncoded = "NOT_FOUND" | string;
export const NotFoundErrorCode: Schema.Schema<NotFoundErrorCode, NotFoundErrorCodeEncoded, never> = Schema.Union(Schema.Literal("NOT_FOUND"), Schema.String);

export interface NotFoundExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}
export interface NotFoundExceptionResponseContentEncoded {
  readonly code: string;
  readonly message: string;
}
export const NotFoundExceptionResponseContent: Schema.Schema<NotFoundExceptionResponseContent, NotFoundExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
});

export interface ObjectIdFilter {
  readonly include?: ReadonlyArray<string>;
}
export interface ObjectIdFilterEncoded {
  readonly include?: ReadonlyArray<string>;
}
export const ObjectIdFilter: Schema.Schema<ObjectIdFilter, ObjectIdFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface OptimizationRule {
  readonly conditions?: ReadonlyArray<Inline602>;
  readonly optimizationRuleId?: string;
}
export interface OptimizationRuleEncoded {
  readonly conditions?: ReadonlyArray<Inline602Encoded>;
  readonly optimizationRuleId?: string;
}
export const OptimizationRule: Schema.Schema<OptimizationRule, OptimizationRuleEncoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline602))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface OptimizationRuleFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline604>;
  readonly index: number;
}
export interface OptimizationRuleFailureResponseItemEncoded {
  readonly errors?: ReadonlyArray<Inline604Encoded>;
  readonly index: number;
}
export const OptimizationRuleFailureResponseItem: Schema.Schema<OptimizationRuleFailureResponseItem, OptimizationRuleFailureResponseItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline604))),
  index: Schema.Number,
});

export interface OptimizationRuleIdFilter {
  readonly include?: ReadonlyArray<string>;
}
export interface OptimizationRuleIdFilterEncoded {
  readonly include?: ReadonlyArray<string>;
}
export const OptimizationRuleIdFilter: Schema.Schema<OptimizationRuleIdFilter, OptimizationRuleIdFilterEncoded, never> = Schema.Struct({
  include: Schema.optional(Schema.Array(Schema.String)),
});

export interface OptimizationRulesError {
  readonly code: string;
  readonly message: string;
}
export interface OptimizationRulesErrorEncoded {
  readonly code: string;
  readonly message: string;
}
export const OptimizationRulesError: Schema.Schema<OptimizationRulesError, OptimizationRulesErrorEncoded, never> = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
});

export interface OptimizationRuleToEntityMapping {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export interface OptimizationRuleToEntityMappingEncoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
}
export const OptimizationRuleToEntityMapping: Schema.Schema<OptimizationRuleToEntityMapping, OptimizationRuleToEntityMappingEncoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  optimizationRuleId: Schema.String,
});

export interface OptimizationRuleToEntityMappingSuccessResponseItem {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export interface OptimizationRuleToEntityMappingSuccessResponseItemEncoded {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
}
export const OptimizationRuleToEntityMappingSuccessResponseItem: Schema.Schema<OptimizationRuleToEntityMappingSuccessResponseItem, OptimizationRuleToEntityMappingSuccessResponseItemEncoded, never> = Schema.Struct({
  entityId: Schema.String,
  entityType: Schema.String,
  index: Schema.Number,
  optimizationRuleId: Schema.String,
});

export interface OtherError {
  readonly cause: Inline610;
  readonly message: string;
  readonly reason: string;
}
export interface OtherErrorEncoded {
  readonly cause: Inline610Encoded;
  readonly message: string;
  readonly reason: string;
}
export const OtherError: Schema.Schema<OtherError, OtherErrorEncoded, never> = Schema.Struct({
  cause: Schema.suspend(() => Inline610),
  message: Schema.String,
  reason: Schema.String,
});

export interface PerformanceMeasureConditionForSB {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface PerformanceMeasureConditionForSBEncoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const PerformanceMeasureConditionForSB: Schema.Schema<PerformanceMeasureConditionForSB, PerformanceMeasureConditionForSBEncoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export type PerformanceMetricForSB = "IS" | "NTB" | "ROAS" | string;
export type PerformanceMetricForSBEncoded = "IS" | "NTB" | "ROAS" | string;
export const PerformanceMetricForSB: Schema.Schema<PerformanceMetricForSB, PerformanceMetricForSBEncoded, never> = Schema.Union(Schema.Literal("IS", "NTB", "ROAS"), Schema.String);

export type Placement = "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH" | string;
export type PlacementEncoded = "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH" | string;
export const Placement: Schema.Schema<Placement, PlacementEncoded, never> = Schema.Union(Schema.Literal("DETAIL_PAGE", "HOME", "OTHER", "TOP_OF_SEARCH"), Schema.String);

export interface ProductCollectionCreative {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline615;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline616;
  readonly headline: string;
}
export interface ProductCollectionCreativeEncoded {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline615Encoded;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline616Encoded;
  readonly headline: string;
}
export const ProductCollectionCreative: Schema.Schema<ProductCollectionCreative, ProductCollectionCreativeEncoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline615)),
  brandName: Schema.String,
  customImageAssetId: Schema.optional(Schema.String),
  customImageCrop: Schema.optional(Schema.suspend(() => Inline616)),
  headline: Schema.String,
});

export type ProductLocation = "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC" | string;
export type ProductLocationEncoded = "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC" | string;
export const ProductLocation: Schema.Schema<ProductLocation, ProductLocationEncoded, never> = Schema.Union(Schema.Literal("NOT_SOLD_ON_AMAZON", "SOLD_ON_AMAZON", "SOLD_ON_DTC"), Schema.String);

export type QueryTermMatchType = "BROAD_MATCH" | "EXACT_MATCH" | string;
export type QueryTermMatchTypeEncoded = "BROAD_MATCH" | "EXACT_MATCH" | string;
export const QueryTermMatchType: Schema.Schema<QueryTermMatchType, QueryTermMatchTypeEncoded, never> = Schema.Union(Schema.Literal("BROAD_MATCH", "EXACT_MATCH"), Schema.String);

export interface RangeError {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline620;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export interface RangeErrorEncoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline620Encoded;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}
export const RangeError: Schema.Schema<RangeError, RangeErrorEncoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  cause: Schema.suspend(() => Inline620),
  lowerLimit: Schema.optional(Schema.String),
  message: Schema.String,
  reason: Schema.String,
  upperLimit: Schema.optional(Schema.String),
});

export interface Recurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline622>;
  readonly type?: string;
}
export interface RecurrenceEncoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline622Encoded>;
  readonly type?: string;
}
export const Recurrence: Schema.Schema<Recurrence, RecurrenceEncoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline622))),
  type: Schema.optional(Schema.String),
});

export type RecurrenceType = "DAILY" | "WEEKLY" | string;
export type RecurrenceTypeEncoded = "DAILY" | "WEEKLY" | string;
export const RecurrenceType: Schema.Schema<RecurrenceType, RecurrenceTypeEncoded, never> = Schema.Union(Schema.Literal("DAILY", "WEEKLY"), Schema.String);

export interface RuleBasedBudget {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export interface RuleBasedBudgetEncoded {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
}
export const RuleBasedBudget: Schema.Schema<RuleBasedBudget, RuleBasedBudgetEncoded, never> = Schema.Struct({
  applicableRuleId: Schema.optional(Schema.String),
  applicableRuleName: Schema.optional(Schema.String),
  isProcessing: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.Number),
});

export interface RuleCondition {
  readonly attributeName: string;
  readonly criteria: Inline626;
}
export interface RuleConditionEncoded {
  readonly attributeName: string;
  readonly criteria: Inline626Encoded;
}
export const RuleCondition: Schema.Schema<RuleCondition, RuleConditionEncoded, never> = Schema.Struct({
  attributeName: Schema.String,
  criteria: Schema.suspend(() => Inline626),
});

export interface RuleDuration {
  readonly dateRangeTypeRuleDuration?: Inline628;
  readonly eventTypeRuleDuration?: Inline629;
}
export interface RuleDurationEncoded {
  readonly dateRangeTypeRuleDuration?: Inline628Encoded;
  readonly eventTypeRuleDuration?: Inline629Encoded;
}
export const RuleDuration: Schema.Schema<RuleDuration, RuleDurationEncoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline628)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline629)),
});

export interface SBBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline631;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface SBBudgetRuleEncoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline631Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const SBBudgetRule: Schema.Schema<SBBudgetRule, SBBudgetRuleEncoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline631)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface SBBudgetRuleDetails {
  readonly budgetIncreaseBy?: Inline637;
  readonly duration?: Inline638;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline640;
  readonly recurrence?: Inline641;
  readonly ruleType?: string;
}
export interface SBBudgetRuleDetailsEncoded {
  readonly budgetIncreaseBy?: Inline637Encoded;
  readonly duration?: Inline638Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline640Encoded;
  readonly recurrence?: Inline641Encoded;
  readonly ruleType?: string;
}
export const SBBudgetRuleDetails: Schema.Schema<SBBudgetRuleDetails, SBBudgetRuleDetailsEncoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline637)),
  duration: Schema.optional(Schema.suspend(() => Inline638)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline640)),
  recurrence: Schema.optional(Schema.suspend(() => Inline641)),
  ruleType: Schema.optional(Schema.String),
});

export interface SBBudgetRulesRecommendationError {
  readonly code?: string;
  readonly details?: string;
}
export interface SBBudgetRulesRecommendationErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SBBudgetRulesRecommendationError: Schema.Schema<SBBudgetRulesRecommendationError, SBBudgetRulesRecommendationErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SBBudgetRulesRecommendationEvent {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}
export interface SBBudgetRulesRecommendationEventEncoded {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}
export const SBBudgetRulesRecommendationEvent: Schema.Schema<SBBudgetRulesRecommendationEvent, SBBudgetRulesRecommendationEventEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  suggestedBudgetIncreasePercent: Schema.optional(Schema.Number),
});

export interface SBBudgetRulesRecommendationEventRequest {
  readonly campaignId: string;
}
export interface SBBudgetRulesRecommendationEventRequestEncoded {
  readonly campaignId: string;
}
export const SBBudgetRulesRecommendationEventRequest: Schema.Schema<SBBudgetRulesRecommendationEventRequest, SBBudgetRulesRecommendationEventRequestEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
});

export interface SBBudgetRulesRecommendationEventResponse {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline646>;
}
export interface SBBudgetRulesRecommendationEventResponseEncoded {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline646Encoded>;
}
export const SBBudgetRulesRecommendationEventResponse: Schema.Schema<SBBudgetRulesRecommendationEventResponse, SBBudgetRulesRecommendationEventResponseEncoded, never> = Schema.Struct({
  recommendedBudgetRuleEvents: Schema.optional(Schema.Array(Schema.suspend(() => Inline646))),
});

export interface SBCampaignBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline648;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface SBCampaignBudgetRuleEncoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline648Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const SBCampaignBudgetRule: Schema.Schema<SBCampaignBudgetRule, SBCampaignBudgetRuleEncoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline648)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface SBCampaignPerformanceForecastsParams {
  readonly campaigns: ReadonlyArray<Inline1006>;
}
export interface SBCampaignPerformanceForecastsParamsEncoded {
  readonly campaigns: ReadonlyArray<Inline1006Encoded>;
}
export const SBCampaignPerformanceForecastsParams: Schema.Schema<SBCampaignPerformanceForecastsParams, SBCampaignPerformanceForecastsParamsEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline1006)),
});

export interface SBCampaignPerformanceForecastsRequestContent {
  readonly campaigns: ReadonlyArray<Inline654>;
}
export interface SBCampaignPerformanceForecastsRequestContentEncoded {
  readonly campaigns: ReadonlyArray<Inline654Encoded>;
}
export const SBCampaignPerformanceForecastsRequestContent: Schema.Schema<SBCampaignPerformanceForecastsRequestContent, SBCampaignPerformanceForecastsRequestContentEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline654)),
});

export interface SBCampaignPerformanceForecastsResponse {

}
export interface SBCampaignPerformanceForecastsResponseEncoded {

}
export const SBCampaignPerformanceForecastsResponse: Schema.Schema<SBCampaignPerformanceForecastsResponse, SBCampaignPerformanceForecastsResponseEncoded, never> = Schema.Struct({

});

export interface SBCampaignPerformanceForecastsResponseContent {
  readonly campaigns?: Inline662;
}
export interface SBCampaignPerformanceForecastsResponseContentEncoded {
  readonly campaigns?: Inline662Encoded;
}
export const SBCampaignPerformanceForecastsResponseContent: Schema.Schema<SBCampaignPerformanceForecastsResponseContent, SBCampaignPerformanceForecastsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.suspend(() => Inline662)),
});

export interface SbCampaignsBudgetUsageParams {
  readonly campaignIds?: ReadonlyArray<string>;
}
export interface SbCampaignsBudgetUsageParamsEncoded {
  readonly campaignIds?: ReadonlyArray<string>;
}
export const SbCampaignsBudgetUsageParams: Schema.Schema<SbCampaignsBudgetUsageParams, SbCampaignsBudgetUsageParamsEncoded, never> = Schema.Struct({
  campaignIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface SbCampaignsBudgetUsageResponse {

}
export interface SbCampaignsBudgetUsageResponseEncoded {

}
export const SbCampaignsBudgetUsageResponse: Schema.Schema<SbCampaignsBudgetUsageResponse, SbCampaignsBudgetUsageResponseEncoded, never> = Schema.Struct({

});

export interface SBForecastingAccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingAccessDeniedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingAccessDeniedExceptionResponseContent: Schema.Schema<SBForecastingAccessDeniedExceptionResponseContent, SBForecastingAccessDeniedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

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
export interface SBForecastingAdGroupEncoded {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline666Encoded>;
  readonly landingPages?: ReadonlyArray<Inline667Encoded>;
  readonly negativeKeywords?: ReadonlyArray<Inline668Encoded>;
  readonly negativeTargets?: ReadonlyArray<Inline669Encoded>;
  readonly targets?: ReadonlyArray<Inline670Encoded>;
  readonly themes?: ReadonlyArray<Inline671Encoded>;
}
export const SBForecastingAdGroup: Schema.Schema<SBForecastingAdGroup, SBForecastingAdGroupEncoded, never> = Schema.Struct({
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline666))),
  landingPages: Schema.optional(Schema.Array(Schema.suspend(() => Inline667))),
  negativeKeywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline668))),
  negativeTargets: Schema.optional(Schema.Array(Schema.suspend(() => Inline669))),
  targets: Schema.optional(Schema.Array(Schema.suspend(() => Inline670))),
  themes: Schema.optional(Schema.Array(Schema.suspend(() => Inline671))),
});

export type SBForecastingAttributeName = "COST_PER_CLICK" | string;
export type SBForecastingAttributeNameEncoded = "COST_PER_CLICK" | string;
export const SBForecastingAttributeName: Schema.Schema<SBForecastingAttributeName, SBForecastingAttributeNameEncoded, never> = Schema.Union(Schema.Literal("COST_PER_CLICK"), Schema.String);

export interface SBForecastingBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingBadRequestExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingBadRequestExceptionResponseContent: Schema.Schema<SBForecastingBadRequestExceptionResponseContent, SBForecastingBadRequestExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export type SBForecastingComparisonOperator = "LESS_THAN_OR_EQUAL_TO" | string;
export type SBForecastingComparisonOperatorEncoded = "LESS_THAN_OR_EQUAL_TO" | string;
export const SBForecastingComparisonOperator: Schema.Schema<SBForecastingComparisonOperator, SBForecastingComparisonOperatorEncoded, never> = Schema.Union(Schema.Literal("LESS_THAN_OR_EQUAL_TO"), Schema.String);

export type SBForecastingCreativeType = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export type SBForecastingCreativeTypeEncoded = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBForecastingCreativeType: Schema.Schema<SBForecastingCreativeType, SBForecastingCreativeTypeEncoded, never> = Schema.Union(Schema.Literal("BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"), Schema.String);

export interface SBForecastingCriteria {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export interface SBForecastingCriteriaEncoded {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export const SBForecastingCriteria: Schema.Schema<SBForecastingCriteria, SBForecastingCriteriaEncoded, never> = Schema.Struct({
  comparisonOperator: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});

export interface SBForecastingErrorObject {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}
export interface SBForecastingErrorObjectEncoded {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
}
export const SBForecastingErrorObject: Schema.Schema<SBForecastingErrorObject, SBForecastingErrorObjectEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
});

export interface SBForecastingInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingInternalServerExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingInternalServerExceptionResponseContent: Schema.Schema<SBForecastingInternalServerExceptionResponseContent, SBForecastingInternalServerExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBForecastingKeyword {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface SBForecastingKeywordEncoded {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const SBForecastingKeyword: Schema.Schema<SBForecastingKeyword, SBForecastingKeywordEncoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface SBForecastingLandingPageObject {
  readonly landingPageUrl?: string;
}
export interface SBForecastingLandingPageObjectEncoded {
  readonly landingPageUrl?: string;
}
export const SBForecastingLandingPageObject: Schema.Schema<SBForecastingLandingPageObject, SBForecastingLandingPageObjectEncoded, never> = Schema.Struct({
  landingPageUrl: Schema.optional(Schema.String),
});

export interface SBForecastingMetric {
  readonly metric?: string;
  readonly value?: Inline682;
}
export interface SBForecastingMetricEncoded {
  readonly metric?: string;
  readonly value?: Inline682Encoded;
}
export const SBForecastingMetric: Schema.Schema<SBForecastingMetric, SBForecastingMetricEncoded, never> = Schema.Struct({
  metric: Schema.optional(Schema.String),
  value: Schema.optional(Schema.suspend(() => Inline682)),
});

export interface SBForecastingMetricValue {
  readonly max?: number;
  readonly min?: number;
}
export interface SBForecastingMetricValueEncoded {
  readonly max?: number;
  readonly min?: number;
}
export const SBForecastingMetricValue: Schema.Schema<SBForecastingMetricValue, SBForecastingMetricValueEncoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface SBForecastingNegativeKeyword {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export interface SBForecastingNegativeKeywordEncoded {
  readonly keywordText?: string;
  readonly matchType?: string;
}
export const SBForecastingNegativeKeyword: Schema.Schema<SBForecastingNegativeKeyword, SBForecastingNegativeKeywordEncoded, never> = Schema.Struct({
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
});

export interface SBForecastingNegativeProductExpression {
  readonly type?: string;
  readonly value?: string;
}
export interface SBForecastingNegativeProductExpressionEncoded {
  readonly type?: string;
  readonly value?: string;
}
export const SBForecastingNegativeProductExpression: Schema.Schema<SBForecastingNegativeProductExpression, SBForecastingNegativeProductExpressionEncoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface SBForecastingNegativeProductTarget {
  readonly expressions?: ReadonlyArray<Inline687>;
}
export interface SBForecastingNegativeProductTargetEncoded {
  readonly expressions?: ReadonlyArray<Inline687Encoded>;
}
export const SBForecastingNegativeProductTarget: Schema.Schema<SBForecastingNegativeProductTarget, SBForecastingNegativeProductTargetEncoded, never> = Schema.Struct({
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline687))),
});

export interface SBForecastingOptimizationRules {
  readonly attributeName?: string;
  readonly criteria?: Inline689;
}
export interface SBForecastingOptimizationRulesEncoded {
  readonly attributeName?: string;
  readonly criteria?: Inline689Encoded;
}
export const SBForecastingOptimizationRules: Schema.Schema<SBForecastingOptimizationRules, SBForecastingOptimizationRulesEncoded, never> = Schema.Struct({
  attributeName: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.suspend(() => Inline689)),
});

export interface SBForecastingProductExpression {
  readonly type?: string;
  readonly value?: string;
}
export interface SBForecastingProductExpressionEncoded {
  readonly type?: string;
  readonly value?: string;
}
export const SBForecastingProductExpression: Schema.Schema<SBForecastingProductExpression, SBForecastingProductExpressionEncoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface SBForecastingProductTarget {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline692>;
}
export interface SBForecastingProductTargetEncoded {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline692Encoded>;
}
export const SBForecastingProductTarget: Schema.Schema<SBForecastingProductTarget, SBForecastingProductTargetEncoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  expressions: Schema.optional(Schema.Array(Schema.suspend(() => Inline692))),
});

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
export interface SBForecastingRequestCampaignObjectEncoded {
  readonly adGroups: ReadonlyArray<Inline694Encoded>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline700Encoded>;
  readonly startDate?: string;
}
export const SBForecastingRequestCampaignObject: Schema.Schema<SBForecastingRequestCampaignObject, SBForecastingRequestCampaignObjectEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline694)),
  budget: Schema.Number,
  budgetType: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  forecastType: Schema.String,
  goal: Schema.optional(Schema.String),
  optimizationRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline700))),
  startDate: Schema.optional(Schema.String),
});

export interface SBForecastingResponseCampaignObject {
  readonly errors?: ReadonlyArray<Inline702>;
  readonly successes?: ReadonlyArray<Inline703>;
}
export interface SBForecastingResponseCampaignObjectEncoded {
  readonly errors?: ReadonlyArray<Inline702Encoded>;
  readonly successes?: ReadonlyArray<Inline703Encoded>;
}
export const SBForecastingResponseCampaignObject: Schema.Schema<SBForecastingResponseCampaignObject, SBForecastingResponseCampaignObjectEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Inline702))),
  successes: Schema.optional(Schema.Array(Schema.suspend(() => Inline703))),
});

export interface SBForecastingSuccessCampaign {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline705>;
}
export interface SBForecastingSuccessCampaignEncoded {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline705Encoded>;
}
export const SBForecastingSuccessCampaign: Schema.Schema<SBForecastingSuccessCampaign, SBForecastingSuccessCampaignEncoded, never> = Schema.Struct({
  forecastTimestamp: Schema.optional(Schema.String),
  forecasts: Schema.optional(Schema.Array(Schema.suspend(() => Inline705))),
});

export interface SBForecastingSuccessObject {
  readonly campaign?: Inline707;
  readonly index?: number;
}
export interface SBForecastingSuccessObjectEncoded {
  readonly campaign?: Inline707Encoded;
  readonly index?: number;
}
export const SBForecastingSuccessObject: Schema.Schema<SBForecastingSuccessObject, SBForecastingSuccessObjectEncoded, never> = Schema.Struct({
  campaign: Schema.optional(Schema.suspend(() => Inline707)),
  index: Schema.optional(Schema.Number),
});

export interface SBForecastingTheme {
  readonly bid?: number;
  readonly themeType?: string;
}
export interface SBForecastingThemeEncoded {
  readonly bid?: number;
  readonly themeType?: string;
}
export const SBForecastingTheme: Schema.Schema<SBForecastingTheme, SBForecastingThemeEncoded, never> = Schema.Struct({
  bid: Schema.optional(Schema.Number),
  themeType: Schema.optional(Schema.String),
});

export interface SBForecastingThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingThrottlingExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingThrottlingExceptionResponseContent: Schema.Schema<SBForecastingThrottlingExceptionResponseContent, SBForecastingThrottlingExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBForecastingUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingUnauthorizedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingUnauthorizedExceptionResponseContent: Schema.Schema<SBForecastingUnauthorizedExceptionResponseContent, SBForecastingUnauthorizedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBForecastingUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBForecastingUnprocessableEntityExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBForecastingUnprocessableEntityExceptionResponseContent: Schema.Schema<SBForecastingUnprocessableEntityExceptionResponseContent, SBForecastingUnprocessableEntityExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBGetAssociatedCampaignsResponse {
  readonly associatedCampaigns?: ReadonlyArray<Inline713>;
  readonly nextToken?: string;
}
export interface SBGetAssociatedCampaignsResponseEncoded {
  readonly associatedCampaigns?: ReadonlyArray<Inline713Encoded>;
  readonly nextToken?: string;
}
export const SBGetAssociatedCampaignsResponse: Schema.Schema<SBGetAssociatedCampaignsResponse, SBGetAssociatedCampaignsResponseEncoded, never> = Schema.Struct({
  associatedCampaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline713))),
  nextToken: Schema.optional(Schema.String),
});

export interface SBGetBudgetRulesRecommendationParams {
  readonly body: Inline997;
}
export interface SBGetBudgetRulesRecommendationParamsEncoded {
  readonly body: Inline997Encoded;
}
export const SBGetBudgetRulesRecommendationParams: Schema.Schema<SBGetBudgetRulesRecommendationParams, SBGetBudgetRulesRecommendationParamsEncoded, never> = Schema.Struct({
  body: Schema.suspend(() => Inline997),
});

export interface SBGetBudgetRulesRecommendationResponse {
  readonly data: Inline999;
}
export interface SBGetBudgetRulesRecommendationResponseEncoded {
  readonly data: Inline999Encoded;
}
export const SBGetBudgetRulesRecommendationResponse: Schema.Schema<SBGetBudgetRulesRecommendationResponse, SBGetBudgetRulesRecommendationResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline999),
});

export type SBInsightsAdFormat = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export type SBInsightsAdFormatEncoded = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBInsightsAdFormat: Schema.Schema<SBInsightsAdFormat, SBInsightsAdFormatEncoded, never> = Schema.Union(Schema.Literal("BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"), Schema.String);

export interface SBInsightsAdGroup {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline716>;
}
export interface SBInsightsAdGroupEncoded {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline716Encoded>;
}
export const SBInsightsAdGroup: Schema.Schema<SBInsightsAdGroup, SBInsightsAdGroupEncoded, never> = Schema.Struct({
  adFormat: Schema.String,
  keywords: Schema.optional(Schema.Array(Schema.suspend(() => Inline716))),
});

export interface SBInsightsBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBInsightsBadRequestExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBInsightsBadRequestExceptionResponseContent: Schema.Schema<SBInsightsBadRequestExceptionResponseContent, SBInsightsBadRequestExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBInsightsCampaignInsightsParams {
  readonly nextToken?: string;
  readonly adGroups: ReadonlyArray<Inline1001>;
}
export interface SBInsightsCampaignInsightsParamsEncoded {
  readonly nextToken?: string;
  readonly adGroups: ReadonlyArray<Inline1001Encoded>;
}
export const SBInsightsCampaignInsightsParams: Schema.Schema<SBInsightsCampaignInsightsParams, SBInsightsCampaignInsightsParamsEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
  adGroups: Schema.Array(Schema.suspend(() => Inline1001)),
});

export interface SBInsightsCampaignInsightsRequestContent {
  readonly adGroups: ReadonlyArray<Inline719>;
}
export interface SBInsightsCampaignInsightsRequestContentEncoded {
  readonly adGroups: ReadonlyArray<Inline719Encoded>;
}
export const SBInsightsCampaignInsightsRequestContent: Schema.Schema<SBInsightsCampaignInsightsRequestContent, SBInsightsCampaignInsightsRequestContentEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline719)),
});

export interface SBInsightsCampaignInsightsResponse {
  readonly data: Inline1003;
}
export interface SBInsightsCampaignInsightsResponseEncoded {
  readonly data: Inline1003Encoded;
}
export const SBInsightsCampaignInsightsResponse: Schema.Schema<SBInsightsCampaignInsightsResponse, SBInsightsCampaignInsightsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1003),
});

export interface SBInsightsCampaignInsightsResponseContent {
  readonly insights?: ReadonlyArray<Inline721>;
  readonly nextToken?: string;
}
export interface SBInsightsCampaignInsightsResponseContentEncoded {
  readonly insights?: ReadonlyArray<Inline721Encoded>;
  readonly nextToken?: string;
}
export const SBInsightsCampaignInsightsResponseContent: Schema.Schema<SBInsightsCampaignInsightsResponseContent, SBInsightsCampaignInsightsResponseContentEncoded, never> = Schema.Struct({
  insights: Schema.optional(Schema.Array(Schema.suspend(() => Inline721))),
  nextToken: Schema.optional(Schema.String),
});

export interface SBInsightsInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBInsightsInternalServerExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBInsightsInternalServerExceptionResponseContent: Schema.Schema<SBInsightsInternalServerExceptionResponseContent, SBInsightsInternalServerExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBInsightsKeyword {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}
export interface SBInsightsKeywordEncoded {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
}
export const SBInsightsKeyword: Schema.Schema<SBInsightsKeyword, SBInsightsKeywordEncoded, never> = Schema.Struct({
  bid: Schema.Number,
  keywordText: Schema.String,
  matchType: Schema.String,
});

export type SBInsightsKeywordAlertType = "LOW_BID" | "LOW_KEYWORD_TRAFFIC" | string;
export type SBInsightsKeywordAlertTypeEncoded = "LOW_BID" | "LOW_KEYWORD_TRAFFIC" | string;
export const SBInsightsKeywordAlertType: Schema.Schema<SBInsightsKeywordAlertType, SBInsightsKeywordAlertTypeEncoded, never> = Schema.Union(Schema.Literal("LOW_BID", "LOW_KEYWORD_TRAFFIC"), Schema.String);

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
export interface SBInsightsKeywordInsightEncoded {
  readonly adGroupIndex?: number;
  readonly alerts?: ReadonlyArray<string>;
  readonly bid?: number;
  readonly keywordIndex?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
}
export const SBInsightsKeywordInsight: Schema.Schema<SBInsightsKeywordInsight, SBInsightsKeywordInsightEncoded, never> = Schema.Struct({
  adGroupIndex: Schema.optional(Schema.Number),
  alerts: Schema.optional(Schema.Array(Schema.String)),
  bid: Schema.optional(Schema.Number),
  keywordIndex: Schema.optional(Schema.Number),
  keywordText: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
  searchTermImpressionRank: Schema.optional(Schema.Number),
  searchTermImpressionShare: Schema.optional(Schema.Number),
});

export type SBInsightsMatchType = "BROAD" | "EXACT" | "PHRASE" | string;
export type SBInsightsMatchTypeEncoded = "BROAD" | "EXACT" | "PHRASE" | string;
export const SBInsightsMatchType: Schema.Schema<SBInsightsMatchType, SBInsightsMatchTypeEncoded, never> = Schema.Union(Schema.Literal("BROAD", "EXACT", "PHRASE"), Schema.String);

export type SBInsightsObject = Inline728;
export type SBInsightsObjectEncoded = Inline728Encoded;
export const SBInsightsObject: Schema.Schema<SBInsightsObject, SBInsightsObjectEncoded, never> = Schema.suspend(() => Inline728);

export interface SBInsightsThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBInsightsThrottlingExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBInsightsThrottlingExceptionResponseContent: Schema.Schema<SBInsightsThrottlingExceptionResponseContent, SBInsightsThrottlingExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBInsightsUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBInsightsUnauthorizedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBInsightsUnauthorizedExceptionResponseContent: Schema.Schema<SBInsightsUnauthorizedExceptionResponseContent, SBInsightsUnauthorizedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBInsightsUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBInsightsUnprocessableEntityExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBInsightsUnprocessableEntityExceptionResponseContent: Schema.Schema<SBInsightsUnprocessableEntityExceptionResponseContent, SBInsightsUnprocessableEntityExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export type SBKeywordRecommendationCreativeType = "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export type SBKeywordRecommendationCreativeTypeEncoded = "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBKeywordRecommendationCreativeType: Schema.Schema<SBKeywordRecommendationCreativeType, SBKeywordRecommendationCreativeTypeEncoded, never> = Schema.Union(Schema.Literal("AUTHOR_COLLECTION", "BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"), Schema.String);

export interface SBKeywordRecommendationError {
  readonly code?: string;
  readonly details?: string;
}
export interface SBKeywordRecommendationErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SBKeywordRecommendationError: Schema.Schema<SBKeywordRecommendationError, SBKeywordRecommendationErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export type SBKeywordRecommendationGoal = "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT" | string;
export type SBKeywordRecommendationGoalEncoded = "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT" | string;
export const SBKeywordRecommendationGoal: Schema.Schema<SBKeywordRecommendationGoal, SBKeywordRecommendationGoalEncoded, never> = Schema.Union(Schema.Literal("BRAND_IMPRESSION_SHARE", "PAGE_VISIT"), Schema.String);

export type SBKeywordRecommendationImpressionRank = number;
export type SBKeywordRecommendationImpressionRankEncoded = number;
export const SBKeywordRecommendationImpressionRank: Schema.Schema<SBKeywordRecommendationImpressionRank, SBKeywordRecommendationImpressionRankEncoded, never> = Schema.Number;

export type SBKeywordRecommendationImpressionShare = number;
export type SBKeywordRecommendationImpressionShareEncoded = number;
export const SBKeywordRecommendationImpressionShare: Schema.Schema<SBKeywordRecommendationImpressionShare, SBKeywordRecommendationImpressionShareEncoded, never> = Schema.Number;

export type SBKeywordRecommendationMatchType = "broad" | "exact" | "phrase" | string;
export type SBKeywordRecommendationMatchTypeEncoded = "broad" | "exact" | "phrase" | string;
export const SBKeywordRecommendationMatchType: Schema.Schema<SBKeywordRecommendationMatchType, SBKeywordRecommendationMatchTypeEncoded, never> = Schema.Union(Schema.Literal("broad", "exact", "phrase"), Schema.String);

export interface SBKeywordRecommendationRequestAsin {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}
export interface SBKeywordRecommendationRequestAsinEncoded {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
}
export const SBKeywordRecommendationRequestAsin: Schema.Schema<SBKeywordRecommendationRequestAsin, SBKeywordRecommendationRequestAsinEncoded, never> = Schema.Struct({
  asins: Schema.Array(Schema.String),
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  maxNumSuggestions: Schema.optional(Schema.Number),
});

export interface SBKeywordRecommendationRequestUrl {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}
export interface SBKeywordRecommendationRequestUrlEncoded {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
}
export const SBKeywordRecommendationRequestUrl: Schema.Schema<SBKeywordRecommendationRequestUrl, SBKeywordRecommendationRequestUrlEncoded, never> = Schema.Struct({
  creativeAsins: Schema.optional(Schema.Array(Schema.String)),
  creativeType: Schema.optional(Schema.String),
  goal: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  maxNumSuggestions: Schema.optional(Schema.Number),
  url: Schema.String,
});

export type SBKeywordRecommendationType = "addKeyword" | string;
export type SBKeywordRecommendationTypeEncoded = "addKeyword" | string;
export const SBKeywordRecommendationType: Schema.Schema<SBKeywordRecommendationType, SBKeywordRecommendationTypeEncoded, never> = Schema.Union(Schema.Literal("addKeyword"), Schema.String);

export interface SBKeywordSuggestion {
  readonly matchType?: string;
  readonly recommendationId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface SBKeywordSuggestionEncoded {
  readonly matchType?: string;
  readonly recommendationId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly type?: string;
  readonly value?: string;
}
export const SBKeywordSuggestion: Schema.Schema<SBKeywordSuggestion, SBKeywordSuggestionEncoded, never> = Schema.Struct({
  matchType: Schema.optional(Schema.String),
  recommendationId: Schema.optional(Schema.String),
  searchTermImpressionRank: Schema.optional(Schema.Number),
  searchTermImpressionShare: Schema.optional(Schema.Number),
  translation: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface SBListAssociatedBudgetRulesResponse {
  readonly associatedRules?: ReadonlyArray<Inline743>;
}
export interface SBListAssociatedBudgetRulesResponseEncoded {
  readonly associatedRules?: ReadonlyArray<Inline743Encoded>;
}
export const SBListAssociatedBudgetRulesResponse: Schema.Schema<SBListAssociatedBudgetRulesResponse, SBListAssociatedBudgetRulesResponseEncoded, never> = Schema.Struct({
  associatedRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline743))),
});

export interface SBOptimizationRecommendationParams {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline1034>;
}
export interface SBOptimizationRecommendationParamsEncoded {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline1034Encoded>;
}
export const SBOptimizationRecommendationParams: Schema.Schema<SBOptimizationRecommendationParams, SBOptimizationRecommendationParamsEncoded, never> = Schema.Struct({
  costControlMetric: Schema.String,
  landingPages: Schema.Array(Schema.suspend(() => Inline1034)),
});

export interface SBOptimizationRecommendationRequestContent {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline749>;
}
export interface SBOptimizationRecommendationRequestContentEncoded {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline749Encoded>;
}
export const SBOptimizationRecommendationRequestContent: Schema.Schema<SBOptimizationRecommendationRequestContent, SBOptimizationRecommendationRequestContentEncoded, never> = Schema.Struct({
  costControlMetric: Schema.String,
  landingPages: Schema.Array(Schema.suspend(() => Inline749)),
});

export interface SBOptimizationRecommendationResponse {

}
export interface SBOptimizationRecommendationResponseEncoded {

}
export const SBOptimizationRecommendationResponse: Schema.Schema<SBOptimizationRecommendationResponse, SBOptimizationRecommendationResponseEncoded, never> = Schema.Struct({

});

export interface SBOptimizationRecommendationResponseContent {
  readonly costControlMetric: string;
  readonly minimumValue: number;
  readonly recommendedValue: number;
}
export interface SBOptimizationRecommendationResponseContentEncoded {
  readonly costControlMetric: string;
  readonly minimumValue: number;
  readonly recommendedValue: number;
}
export const SBOptimizationRecommendationResponseContent: Schema.Schema<SBOptimizationRecommendationResponseContent, SBOptimizationRecommendationResponseContentEncoded, never> = Schema.Struct({
  costControlMetric: Schema.String,
  minimumValue: Schema.Number,
  recommendedValue: Schema.Number,
});

export type SBRuleType = "PERFORMANCE" | "SCHEDULE" | string;
export type SBRuleTypeEncoded = "PERFORMANCE" | "SCHEDULE" | string;
export const SBRuleType: Schema.Schema<SBRuleType, SBRuleTypeEncoded, never> = Schema.Union(Schema.Literal("PERFORMANCE", "SCHEDULE"), Schema.String);

export interface SBTargetingAccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingAccessDeniedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingAccessDeniedExceptionResponseContent: Schema.Schema<SBTargetingAccessDeniedExceptionResponseContent, SBTargetingAccessDeniedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBTargetingAgeRange {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export interface SBTargetingAgeRangeEncoded {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export const SBTargetingAgeRange: Schema.Schema<SBTargetingAgeRange, SBTargetingAgeRangeEncoded, never> = Schema.Struct({
  ageRangeRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface SBTargetingBadRequestExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingBadRequestExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingBadRequestExceptionResponseContent: Schema.Schema<SBTargetingBadRequestExceptionResponseContent, SBTargetingBadRequestExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBTargetingBrand {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export interface SBTargetingBrandEncoded {
  readonly brandRefinementId: string;
  readonly name?: string;
}
export const SBTargetingBrand: Schema.Schema<SBTargetingBrand, SBTargetingBrandEncoded, never> = Schema.Struct({
  brandRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
});

export interface SBTargetingCategory {
  readonly asinCountRange?: Inline757;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline758;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}
export interface SBTargetingCategoryEncoded {
  readonly asinCountRange?: Inline757Encoded;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline758Encoded;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
}
export const SBTargetingCategory: Schema.Schema<SBTargetingCategory, SBTargetingCategoryEncoded, never> = Schema.Struct({
  asinCountRange: Schema.optional(Schema.suspend(() => Inline757)),
  categoryRefinementId: Schema.optional(Schema.String),
  estimatedReach: Schema.optional(Schema.suspend(() => Inline758)),
  isTargetable: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  parentCategoryRefinementId: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface SBTargetingEstimatedReachRange {
  readonly max?: number;
  readonly min?: number;
}
export interface SBTargetingEstimatedReachRangeEncoded {
  readonly max?: number;
  readonly min?: number;
}
export const SBTargetingEstimatedReachRange: Schema.Schema<SBTargetingEstimatedReachRange, SBTargetingEstimatedReachRangeEncoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface SBTargetingGenre {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export interface SBTargetingGenreEncoded {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
}
export const SBTargetingGenre: Schema.Schema<SBTargetingGenre, SBTargetingGenreEncoded, never> = Schema.Struct({
  genreRefinementId: Schema.String,
  name: Schema.optional(Schema.String),
  translatedName: Schema.optional(Schema.String),
});

export interface SBTargetingGetNegativeBrandsParams {
  readonly nextToken?: string;
}
export interface SBTargetingGetNegativeBrandsParamsEncoded {
  readonly nextToken?: string;
}
export const SBTargetingGetNegativeBrandsParams: Schema.Schema<SBTargetingGetNegativeBrandsParams, SBTargetingGetNegativeBrandsParamsEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingGetNegativeBrandsResponse {
  readonly data: Inline1023;
}
export interface SBTargetingGetNegativeBrandsResponseEncoded {
  readonly data: Inline1023Encoded;
}
export const SBTargetingGetNegativeBrandsResponse: Schema.Schema<SBTargetingGetNegativeBrandsResponse, SBTargetingGetNegativeBrandsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1023),
});

export interface SBTargetingGetNegativeBrandsResponseContent {
  readonly brands?: ReadonlyArray<Inline762>;
  readonly nextToken?: string;
}
export interface SBTargetingGetNegativeBrandsResponseContentEncoded {
  readonly brands?: ReadonlyArray<Inline762Encoded>;
  readonly nextToken?: string;
}
export const SBTargetingGetNegativeBrandsResponseContent: Schema.Schema<SBTargetingGetNegativeBrandsResponseContent, SBTargetingGetNegativeBrandsResponseContentEncoded, never> = Schema.Struct({
  brands: Schema.optional(Schema.Array(Schema.suspend(() => Inline762))),
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingGetRefinementsForCategoryParams {
  readonly categoryRefinementId: string;
  readonly locale?: string;
  readonly nextToken?: string;
}
export interface SBTargetingGetRefinementsForCategoryParamsEncoded {
  readonly categoryRefinementId: string;
  readonly locale?: string;
  readonly nextToken?: string;
}
export const SBTargetingGetRefinementsForCategoryParams: Schema.Schema<SBTargetingGetRefinementsForCategoryParams, SBTargetingGetRefinementsForCategoryParamsEncoded, never> = Schema.Struct({
  categoryRefinementId: Schema.String,
  locale: Schema.optional(Schema.String),
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingGetRefinementsForCategoryResponse {
  readonly data: Inline1066;
}
export interface SBTargetingGetRefinementsForCategoryResponseEncoded {
  readonly data: Inline1066Encoded;
}
export const SBTargetingGetRefinementsForCategoryResponse: Schema.Schema<SBTargetingGetRefinementsForCategoryResponse, SBTargetingGetRefinementsForCategoryResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1066),
});

export interface SBTargetingGetRefinementsForCategoryResponseContent {
  readonly ageRanges?: ReadonlyArray<Inline764>;
  readonly brands?: ReadonlyArray<Inline765>;
  readonly genres?: ReadonlyArray<Inline766>;
  readonly nextToken?: string;
}
export interface SBTargetingGetRefinementsForCategoryResponseContentEncoded {
  readonly ageRanges?: ReadonlyArray<Inline764Encoded>;
  readonly brands?: ReadonlyArray<Inline765Encoded>;
  readonly genres?: ReadonlyArray<Inline766Encoded>;
  readonly nextToken?: string;
}
export const SBTargetingGetRefinementsForCategoryResponseContent: Schema.Schema<SBTargetingGetRefinementsForCategoryResponseContent, SBTargetingGetRefinementsForCategoryResponseContentEncoded, never> = Schema.Struct({
  ageRanges: Schema.optional(Schema.Array(Schema.suspend(() => Inline764))),
  brands: Schema.optional(Schema.Array(Schema.suspend(() => Inline765))),
  genres: Schema.optional(Schema.Array(Schema.suspend(() => Inline766))),
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingGetTargetableASINCountsParams {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline1070;
  readonly ratingRange?: Inline1071;
}
export interface SBTargetingGetTargetableASINCountsParamsEncoded {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline1070Encoded;
  readonly ratingRange?: Inline1071Encoded;
}
export const SBTargetingGetTargetableASINCountsParams: Schema.Schema<SBTargetingGetTargetableASINCountsParams, SBTargetingGetTargetableASINCountsParamsEncoded, never> = Schema.Struct({
  ageRanges: Schema.optional(Schema.Array(Schema.String)),
  brands: Schema.optional(Schema.Array(Schema.String)),
  category: Schema.String,
  genres: Schema.optional(Schema.Array(Schema.String)),
  isPrimeShipping: Schema.optional(Schema.Boolean),
  priceRange: Schema.optional(Schema.suspend(() => Inline1070)),
  ratingRange: Schema.optional(Schema.suspend(() => Inline1071)),
});

export interface SBTargetingGetTargetableASINCountsRequestContent {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline768;
  readonly ratingRange?: Inline769;
}
export interface SBTargetingGetTargetableASINCountsRequestContentEncoded {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline768Encoded;
  readonly ratingRange?: Inline769Encoded;
}
export const SBTargetingGetTargetableASINCountsRequestContent: Schema.Schema<SBTargetingGetTargetableASINCountsRequestContent, SBTargetingGetTargetableASINCountsRequestContentEncoded, never> = Schema.Struct({
  ageRanges: Schema.optional(Schema.Array(Schema.String)),
  brands: Schema.optional(Schema.Array(Schema.String)),
  category: Schema.String,
  genres: Schema.optional(Schema.Array(Schema.String)),
  isPrimeShipping: Schema.optional(Schema.Boolean),
  priceRange: Schema.optional(Schema.suspend(() => Inline768)),
  ratingRange: Schema.optional(Schema.suspend(() => Inline769)),
});

export interface SBTargetingGetTargetableASINCountsResponse {
  readonly data: Inline1073;
}
export interface SBTargetingGetTargetableASINCountsResponseEncoded {
  readonly data: Inline1073Encoded;
}
export const SBTargetingGetTargetableASINCountsResponse: Schema.Schema<SBTargetingGetTargetableASINCountsResponse, SBTargetingGetTargetableASINCountsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1073),
});

export interface SBTargetingGetTargetableASINCountsResponseContent {
  readonly asinCounts?: Inline771;
}
export interface SBTargetingGetTargetableASINCountsResponseContentEncoded {
  readonly asinCounts?: Inline771Encoded;
}
export const SBTargetingGetTargetableASINCountsResponseContent: Schema.Schema<SBTargetingGetTargetableASINCountsResponseContent, SBTargetingGetTargetableASINCountsResponseContentEncoded, never> = Schema.Struct({
  asinCounts: Schema.optional(Schema.suspend(() => Inline771)),
});

export interface SBTargetingGetTargetableCategoriesParams {
  readonly locale?: string;
  readonly supplySource: string;
  readonly includeOnlyRootCategories?: boolean;
  readonly parentCategoryRefinementId?: string;
  readonly nextToken?: string;
}
export interface SBTargetingGetTargetableCategoriesParamsEncoded {
  readonly locale?: string;
  readonly supplySource: string;
  readonly includeOnlyRootCategories?: boolean;
  readonly parentCategoryRefinementId?: string;
  readonly nextToken?: string;
}
export const SBTargetingGetTargetableCategoriesParams: Schema.Schema<SBTargetingGetTargetableCategoriesParams, SBTargetingGetTargetableCategoriesParamsEncoded, never> = Schema.Struct({
  locale: Schema.optional(Schema.String),
  supplySource: Schema.String,
  includeOnlyRootCategories: Schema.optional(Schema.Boolean),
  parentCategoryRefinementId: Schema.optional(Schema.String),
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingGetTargetableCategoriesResponse {
  readonly data: Inline1062;
}
export interface SBTargetingGetTargetableCategoriesResponseEncoded {
  readonly data: Inline1062Encoded;
}
export const SBTargetingGetTargetableCategoriesResponse: Schema.Schema<SBTargetingGetTargetableCategoriesResponse, SBTargetingGetTargetableCategoriesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1062),
});

export interface SBTargetingGetTargetableCategoriesResponseContent {
  readonly categoryTree?: ReadonlyArray<Inline773>;
  readonly nextToken?: string;
}
export interface SBTargetingGetTargetableCategoriesResponseContentEncoded {
  readonly categoryTree?: ReadonlyArray<Inline773Encoded>;
  readonly nextToken?: string;
}
export const SBTargetingGetTargetableCategoriesResponseContent: Schema.Schema<SBTargetingGetTargetableCategoriesResponseContent, SBTargetingGetTargetableCategoriesResponseContentEncoded, never> = Schema.Struct({
  categoryTree: Schema.optional(Schema.Array(Schema.suspend(() => Inline773))),
  nextToken: Schema.optional(Schema.String),
});

export interface SBTargetingIntegerRange {
  readonly max?: number;
  readonly min?: number;
}
export interface SBTargetingIntegerRangeEncoded {
  readonly max?: number;
  readonly min?: number;
}
export const SBTargetingIntegerRange: Schema.Schema<SBTargetingIntegerRange, SBTargetingIntegerRangeEncoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface SBTargetingInternalServerExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingInternalServerExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingInternalServerExceptionResponseContent: Schema.Schema<SBTargetingInternalServerExceptionResponseContent, SBTargetingInternalServerExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export type SBTargetingLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export type SBTargetingLocaleEncoded = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export const SBTargetingLocale: Schema.Schema<SBTargetingLocale, SBTargetingLocaleEncoded, never> = Schema.Union(Schema.Literal("ar_AE", "de_DE", "en_AE", "en_AU", "en_CA", "en_GB", "en_IN", "en_SG", "en_US", "es_ES", "es_MX", "fr_CA", "fr_FR", "hi_IN", "it_IT", "ja_JP", "ko_KR", "nl_NL", "pl_PL", "pt_BR", "sv_SE", "ta_IN", "th_TH", "tr_TR", "vi_VN", "zh_CN"), Schema.String);

export interface SBTargetingPriceRange {
  readonly max?: number;
  readonly min?: number;
}
export interface SBTargetingPriceRangeEncoded {
  readonly max?: number;
  readonly min?: number;
}
export const SBTargetingPriceRange: Schema.Schema<SBTargetingPriceRange, SBTargetingPriceRangeEncoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export interface SBTargetingRatingRange {
  readonly max?: number;
  readonly min?: number;
}
export interface SBTargetingRatingRangeEncoded {
  readonly max?: number;
  readonly min?: number;
}
export const SBTargetingRatingRange: Schema.Schema<SBTargetingRatingRange, SBTargetingRatingRangeEncoded, never> = Schema.Struct({
  max: Schema.optional(Schema.Number),
  min: Schema.optional(Schema.Number),
});

export type SBTargetingSupplySource = "AMAZON" | "STREAMING_VIDEO" | string;
export type SBTargetingSupplySourceEncoded = "AMAZON" | "STREAMING_VIDEO" | string;
export const SBTargetingSupplySource: Schema.Schema<SBTargetingSupplySource, SBTargetingSupplySourceEncoded, never> = Schema.Union(Schema.Literal("AMAZON", "STREAMING_VIDEO"), Schema.String);

export interface SBTargetingThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingThrottlingExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingThrottlingExceptionResponseContent: Schema.Schema<SBTargetingThrottlingExceptionResponseContent, SBTargetingThrottlingExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBTargetingUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingUnauthorizedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingUnauthorizedExceptionResponseContent: Schema.Schema<SBTargetingUnauthorizedExceptionResponseContent, SBTargetingUnauthorizedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SBTargetingUnprocessableEntityExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface SBTargetingUnprocessableEntityExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const SBTargetingUnprocessableEntityExceptionResponseContent: Schema.Schema<SBTargetingUnprocessableEntityExceptionResponseContent, SBTargetingUnprocessableEntityExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

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
export interface SevenDaysMissedOpportunitiesEncoded {
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
export const SevenDaysMissedOpportunities: Schema.Schema<SevenDaysMissedOpportunities, SevenDaysMissedOpportunitiesEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  estimatedMissedClicksLower: Schema.optional(Schema.Number),
  estimatedMissedClicksUpper: Schema.optional(Schema.Number),
  estimatedMissedImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedImpressionsUpper: Schema.optional(Schema.Number),
  estimatedMissedSalesLower: Schema.optional(Schema.Number),
  estimatedMissedSalesUpper: Schema.optional(Schema.Number),
  percentTimeInBudget: Schema.optional(Schema.Number),
  startDate: Schema.optional(Schema.String),
});

export interface ShopperCohortBidAdjustment {
  readonly audienceSegments?: ReadonlyArray<Inline786>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export interface ShopperCohortBidAdjustmentEncoded {
  readonly audienceSegments?: ReadonlyArray<Inline786Encoded>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
}
export const ShopperCohortBidAdjustment: Schema.Schema<ShopperCohortBidAdjustment, ShopperCohortBidAdjustmentEncoded, never> = Schema.Struct({
  audienceSegments: Schema.optional(Schema.Array(Schema.suspend(() => Inline786))),
  percentage: Schema.optional(Schema.Number),
  shopperCohortType: Schema.optional(Schema.String),
});

export type ShopperCohortType = "AUDIENCE_SEGMENT" | string;
export type ShopperCohortTypeEncoded = "AUDIENCE_SEGMENT" | string;
export const ShopperCohortType: Schema.Schema<ShopperCohortType, ShopperCohortTypeEncoded, never> = Schema.Union(Schema.Literal("AUDIENCE_SEGMENT"), Schema.String);

export type ShopperSegment = "NEW_TO_BRAND_PURCHASE" | string;
export type ShopperSegmentEncoded = "NEW_TO_BRAND_PURCHASE" | string;
export const ShopperSegment: Schema.Schema<ShopperSegment, ShopperSegmentEncoded, never> = Schema.Union(Schema.Literal("NEW_TO_BRAND_PURCHASE"), Schema.String);

export type SiteRestriction = "AMAZON_BUSINESS" | string;
export type SiteRestrictionEncoded = "AMAZON_BUSINESS" | string;
export const SiteRestriction: Schema.Schema<SiteRestriction, SiteRestrictionEncoded, never> = Schema.Union(Schema.Literal("AMAZON_BUSINESS"), Schema.String);

export interface StartMigrationJobParams {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}
export interface StartMigrationJobParamsEncoded {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}
export const StartMigrationJobParams: Schema.Schema<StartMigrationJobParams, StartMigrationJobParamsEncoded, never> = Schema.Struct({
  brandEntityId: Schema.optional(Schema.String),
  campaignIds: Schema.Array(Schema.String),
  enableThemeTargeting: Schema.Boolean,
  isStagedMigration: Schema.optional(Schema.Boolean),
  newCampaignState: Schema.optional(Schema.String),
});

export interface StartMigrationJobRequestContent {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}
export interface StartMigrationJobRequestContentEncoded {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
}
export const StartMigrationJobRequestContent: Schema.Schema<StartMigrationJobRequestContent, StartMigrationJobRequestContentEncoded, never> = Schema.Struct({
  brandEntityId: Schema.optional(Schema.String),
  campaignIds: Schema.Array(Schema.String),
  enableThemeTargeting: Schema.Boolean,
  isStagedMigration: Schema.optional(Schema.Boolean),
  newCampaignState: Schema.optional(Schema.String),
});

export interface StartMigrationJobResponse {
  readonly data: Inline1213;
}
export interface StartMigrationJobResponseEncoded {
  readonly data: Inline1213Encoded;
}
export const StartMigrationJobResponse: Schema.Schema<StartMigrationJobResponse, StartMigrationJobResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline1213),
});

export interface StartMigrationJobResponseContent {
  readonly jobId?: string;
}
export interface StartMigrationJobResponseContentEncoded {
  readonly jobId?: string;
}
export const StartMigrationJobResponseContent: Schema.Schema<StartMigrationJobResponseContent, StartMigrationJobResponseContentEncoded, never> = Schema.Struct({
  jobId: Schema.optional(Schema.String),
});

export type state = "ACTIVE" | "PAUSED" | string;
export type stateEncoded = "ACTIVE" | "PAUSED" | string;
export const state: Schema.Schema<state, stateEncoded, never> = Schema.Union(Schema.Literal("ACTIVE", "PAUSED"), Schema.String);

export interface StorePage {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export interface StorePageEncoded {
  readonly displayName?: string;
  readonly primaryAsin?: string;
}
export const StorePage: Schema.Schema<StorePage, StorePageEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  primaryAsin: Schema.optional(Schema.String),
});

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
export interface StoreSpotlightCreativeEncoded {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline795Encoded;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline796Encoded;
  readonly subpages: ReadonlyArray<Inline797Encoded>;
}
export const StoreSpotlightCreative: Schema.Schema<StoreSpotlightCreative, StoreSpotlightCreativeEncoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.String,
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline795)),
  brandName: Schema.String,
  consentToTranslate: Schema.optional(Schema.Boolean),
  creativePropertiesToOptimize: Schema.optional(Schema.Array(Schema.String)),
  headline: Schema.optional(Schema.String),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  landingPage: Schema.optional(Schema.suspend(() => Inline796)),
  subpages: Schema.Array(Schema.suspend(() => Inline797)),
});

export interface Subpage {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export interface SubpageEncoded {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
}
export const Subpage: Schema.Schema<Subpage, SubpageEncoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  pageTitle: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface SuggestedHeadline {
  readonly headline?: string;
  readonly headlineId?: string;
}
export interface SuggestedHeadlineEncoded {
  readonly headline?: string;
  readonly headlineId?: string;
}
export const SuggestedHeadline: Schema.Schema<SuggestedHeadline, SuggestedHeadlineEncoded, never> = Schema.Struct({
  headline: Schema.optional(Schema.String),
  headlineId: Schema.optional(Schema.String),
});

export interface Tags {

}
export interface TagsEncoded {

}
export const Tags: Schema.Schema<Tags, TagsEncoded, never> = Schema.Struct({

});

export type ThrottledErrorCode = "THROTTLED" | string;
export type ThrottledErrorCodeEncoded = "THROTTLED" | string;
export const ThrottledErrorCode: Schema.Schema<ThrottledErrorCode, ThrottledErrorCodeEncoded, never> = Schema.Union(Schema.Literal("THROTTLED"), Schema.String);

export type ThrottlingErrorCode = "THROTTLED" | string;
export type ThrottlingErrorCodeEncoded = "THROTTLED" | string;
export const ThrottlingErrorCode: Schema.Schema<ThrottlingErrorCode, ThrottlingErrorCodeEncoded, never> = Schema.Union(Schema.Literal("THROTTLED"), Schema.String);

export interface ThrottlingExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface ThrottlingExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const ThrottlingExceptionResponseContent: Schema.Schema<ThrottlingExceptionResponseContent, ThrottlingExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface timeOfDay {
  readonly endTime?: string;
  readonly startTime?: string;
}
export interface timeOfDayEncoded {
  readonly endTime?: string;
  readonly startTime?: string;
}
export const timeOfDay: Schema.Schema<timeOfDay, timeOfDayEncoded, never> = Schema.Struct({
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
});

export type UnauthorizedErrorCode = "UNAUTHORIZED" | string;
export type UnauthorizedErrorCodeEncoded = "UNAUTHORIZED" | string;
export const UnauthorizedErrorCode: Schema.Schema<UnauthorizedErrorCode, UnauthorizedErrorCodeEncoded, never> = Schema.Union(Schema.Literal("UNAUTHORIZED"), Schema.String);

export interface UnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface UnauthorizedExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const UnauthorizedExceptionResponseContent: Schema.Schema<UnauthorizedExceptionResponseContent, UnauthorizedExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export type UnsupportedMediaTypeErrorCode = "UNSUPPORTED_MEDIA_TYPE" | string;
export type UnsupportedMediaTypeErrorCodeEncoded = "UNSUPPORTED_MEDIA_TYPE" | string;
export const UnsupportedMediaTypeErrorCode: Schema.Schema<UnsupportedMediaTypeErrorCode, UnsupportedMediaTypeErrorCodeEncoded, never> = Schema.Union(Schema.Literal("UNSUPPORTED_MEDIA_TYPE"), Schema.String);

export interface UnsupportedMediaTypeExceptionResponseContent {
  readonly code: string;
  readonly details: string;
}
export interface UnsupportedMediaTypeExceptionResponseContentEncoded {
  readonly code: string;
  readonly details: string;
}
export const UnsupportedMediaTypeExceptionResponseContent: Schema.Schema<UnsupportedMediaTypeExceptionResponseContent, UnsupportedMediaTypeExceptionResponseContentEncoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface UpdateAd {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface UpdateAdEncoded {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
}
export const UpdateAd: Schema.Schema<UpdateAd, UpdateAdEncoded, never> = Schema.Struct({
  adId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface UpdateAdGroup {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export interface UpdateAdGroupEncoded {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
}
export const UpdateAdGroup: Schema.Schema<UpdateAdGroup, UpdateAdGroupEncoded, never> = Schema.Struct({
  adGroupId: Schema.String,
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
});

export interface UpdateAutoCollectionAd {
  readonly adId: string;
  readonly creative: Inline812;
}
export interface UpdateAutoCollectionAdEncoded {
  readonly adId: string;
  readonly creative: Inline812Encoded;
}
export const UpdateAutoCollectionAd: Schema.Schema<UpdateAutoCollectionAd, UpdateAutoCollectionAdEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline812),
});

export interface UpdateBudgetRulesForSBCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline959>;
}
export interface UpdateBudgetRulesForSBCampaignsParamsEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline959Encoded>;
}
export const UpdateBudgetRulesForSBCampaignsParams: Schema.Schema<UpdateBudgetRulesForSBCampaignsParams, UpdateBudgetRulesForSBCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline959))),
});

export interface UpdateBudgetRulesForSBCampaignsResponse {

}
export interface UpdateBudgetRulesForSBCampaignsResponseEncoded {

}
export const UpdateBudgetRulesForSBCampaignsResponse: Schema.Schema<UpdateBudgetRulesForSBCampaignsResponse, UpdateBudgetRulesForSBCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline814>;
}
export interface UpdateBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline814Encoded>;
}
export const UpdateBudgetRulesResponse: Schema.Schema<UpdateBudgetRulesResponse, UpdateBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline814))),
});

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
export interface UpdateCampaignEncoded {
  readonly bidding?: Inline816Encoded;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline819Encoded;
}
export const UpdateCampaign: Schema.Schema<UpdateCampaign, UpdateCampaignEncoded, never> = Schema.Struct({
  bidding: Schema.optional(Schema.suspend(() => Inline816)),
  budget: Schema.optional(Schema.Number),
  campaignId: Schema.String,
  endDate: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  portfolioId: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.suspend(() => Inline819)),
});

export interface UpdateManualCollectionAd {
  readonly adId: string;
  readonly creative: Inline821;
}
export interface UpdateManualCollectionAdEncoded {
  readonly adId: string;
  readonly creative: Inline821Encoded;
}
export const UpdateManualCollectionAd: Schema.Schema<UpdateManualCollectionAd, UpdateManualCollectionAdEncoded, never> = Schema.Struct({
  adId: Schema.String,
  creative: Schema.suspend(() => Inline821),
});

export interface UpdateOptimizationRule {
  readonly conditions?: ReadonlyArray<Inline824>;
  readonly optimizationRuleId?: string;
}
export interface UpdateOptimizationRuleEncoded {
  readonly conditions?: ReadonlyArray<Inline824Encoded>;
  readonly optimizationRuleId?: string;
}
export const UpdateOptimizationRule: Schema.Schema<UpdateOptimizationRule, UpdateOptimizationRuleEncoded, never> = Schema.Struct({
  conditions: Schema.optional(Schema.Array(Schema.suspend(() => Inline824))),
  optimizationRuleId: Schema.optional(Schema.String),
});

export interface UpdateOptimizationRuleSuccessResponseItem {
  readonly index: number;
  readonly optimizationRule: Inline826;
  readonly optimizationRuleId: string;
}
export interface UpdateOptimizationRuleSuccessResponseItemEncoded {
  readonly index: number;
  readonly optimizationRule: Inline826Encoded;
  readonly optimizationRuleId: string;
}
export const UpdateOptimizationRuleSuccessResponseItem: Schema.Schema<UpdateOptimizationRuleSuccessResponseItem, UpdateOptimizationRuleSuccessResponseItemEncoded, never> = Schema.Struct({
  index: Schema.Number,
  optimizationRule: Schema.suspend(() => Inline826),
  optimizationRuleId: Schema.String,
});

export interface UpdateSBBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline828>;
}
export interface UpdateSBBudgetRulesRequestEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline828Encoded>;
}
export const UpdateSBBudgetRulesRequest: Schema.Schema<UpdateSBBudgetRulesRequest, UpdateSBBudgetRulesRequestEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline828))),
});

export interface UpdateSponsoredBrandsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline1081>;
}
export interface UpdateSponsoredBrandsAdGroupsParamsEncoded {
  readonly adGroups: ReadonlyArray<Inline1081Encoded>;
}
export const UpdateSponsoredBrandsAdGroupsParams: Schema.Schema<UpdateSponsoredBrandsAdGroupsParams, UpdateSponsoredBrandsAdGroupsParamsEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline1081)),
});

export interface UpdateSponsoredBrandsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline834>;
}
export interface UpdateSponsoredBrandsAdGroupsRequestContentEncoded {
  readonly adGroups: ReadonlyArray<Inline834Encoded>;
}
export const UpdateSponsoredBrandsAdGroupsRequestContent: Schema.Schema<UpdateSponsoredBrandsAdGroupsRequestContent, UpdateSponsoredBrandsAdGroupsRequestContentEncoded, never> = Schema.Struct({
  adGroups: Schema.Array(Schema.suspend(() => Inline834)),
});

export interface UpdateSponsoredBrandsAdGroupsResponse {

}
export interface UpdateSponsoredBrandsAdGroupsResponseEncoded {

}
export const UpdateSponsoredBrandsAdGroupsResponse: Schema.Schema<UpdateSponsoredBrandsAdGroupsResponse, UpdateSponsoredBrandsAdGroupsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsAdGroupsResponseContent {
  readonly adGroups?: Inline836;
}
export interface UpdateSponsoredBrandsAdGroupsResponseContentEncoded {
  readonly adGroups?: Inline836Encoded;
}
export const UpdateSponsoredBrandsAdGroupsResponseContent: Schema.Schema<UpdateSponsoredBrandsAdGroupsResponseContent, UpdateSponsoredBrandsAdGroupsResponseContentEncoded, never> = Schema.Struct({
  adGroups: Schema.optional(Schema.suspend(() => Inline836)),
});

export interface UpdateSponsoredBrandsAdsParams {
  readonly ads: ReadonlyArray<Inline1100>;
}
export interface UpdateSponsoredBrandsAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline1100Encoded>;
}
export const UpdateSponsoredBrandsAdsParams: Schema.Schema<UpdateSponsoredBrandsAdsParams, UpdateSponsoredBrandsAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline1100)),
});

export interface UpdateSponsoredBrandsAdsRequestContent {
  readonly ads: ReadonlyArray<Inline842>;
}
export interface UpdateSponsoredBrandsAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline842Encoded>;
}
export const UpdateSponsoredBrandsAdsRequestContent: Schema.Schema<UpdateSponsoredBrandsAdsRequestContent, UpdateSponsoredBrandsAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline842)),
});

export interface UpdateSponsoredBrandsAdsResponse {

}
export interface UpdateSponsoredBrandsAdsResponseEncoded {

}
export const UpdateSponsoredBrandsAdsResponse: Schema.Schema<UpdateSponsoredBrandsAdsResponse, UpdateSponsoredBrandsAdsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsAdsResponseContent {
  readonly ads?: Inline844;
}
export interface UpdateSponsoredBrandsAdsResponseContentEncoded {
  readonly ads?: Inline844Encoded;
}
export const UpdateSponsoredBrandsAdsResponseContent: Schema.Schema<UpdateSponsoredBrandsAdsResponseContent, UpdateSponsoredBrandsAdsResponseContentEncoded, never> = Schema.Struct({
  ads: Schema.optional(Schema.suspend(() => Inline844)),
});

export interface UpdateSponsoredBrandsAutoCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline892>;
}
export interface UpdateSponsoredBrandsAutoCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline892Encoded>;
}
export const UpdateSponsoredBrandsAutoCollectionAdsParams: Schema.Schema<UpdateSponsoredBrandsAutoCollectionAdsParams, UpdateSponsoredBrandsAutoCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline892)),
});

export interface UpdateSponsoredBrandsAutoCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline853>;
}
export interface UpdateSponsoredBrandsAutoCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline853Encoded>;
}
export const UpdateSponsoredBrandsAutoCollectionAdsRequestContent: Schema.Schema<UpdateSponsoredBrandsAutoCollectionAdsRequestContent, UpdateSponsoredBrandsAutoCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline853)),
});

export interface UpdateSponsoredBrandsAutoCollectionAdsResponse {

}
export interface UpdateSponsoredBrandsAutoCollectionAdsResponseEncoded {

}
export const UpdateSponsoredBrandsAutoCollectionAdsResponse: Schema.Schema<UpdateSponsoredBrandsAutoCollectionAdsResponse, UpdateSponsoredBrandsAutoCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsAutoCollectionAdsResponseContent {
  readonly creatives?: Inline855;
}
export interface UpdateSponsoredBrandsAutoCollectionAdsResponseContentEncoded {
  readonly creatives?: Inline855Encoded;
}
export const UpdateSponsoredBrandsAutoCollectionAdsResponseContent: Schema.Schema<UpdateSponsoredBrandsAutoCollectionAdsResponseContent, UpdateSponsoredBrandsAutoCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  creatives: Schema.optional(Schema.suspend(() => Inline855)),
});

export interface UpdateSponsoredBrandsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline1180>;
}
export interface UpdateSponsoredBrandsCampaignsParamsEncoded {
  readonly campaigns: ReadonlyArray<Inline1180Encoded>;
}
export const UpdateSponsoredBrandsCampaignsParams: Schema.Schema<UpdateSponsoredBrandsCampaignsParams, UpdateSponsoredBrandsCampaignsParamsEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline1180)),
});

export interface UpdateSponsoredBrandsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline859>;
}
export interface UpdateSponsoredBrandsCampaignsRequestContentEncoded {
  readonly campaigns: ReadonlyArray<Inline859Encoded>;
}
export const UpdateSponsoredBrandsCampaignsRequestContent: Schema.Schema<UpdateSponsoredBrandsCampaignsRequestContent, UpdateSponsoredBrandsCampaignsRequestContentEncoded, never> = Schema.Struct({
  campaigns: Schema.Array(Schema.suspend(() => Inline859)),
});

export interface UpdateSponsoredBrandsCampaignsResponse {

}
export interface UpdateSponsoredBrandsCampaignsResponseEncoded {

}
export const UpdateSponsoredBrandsCampaignsResponse: Schema.Schema<UpdateSponsoredBrandsCampaignsResponse, UpdateSponsoredBrandsCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsCampaignsResponseContent {
  readonly campaigns?: Inline864;
}
export interface UpdateSponsoredBrandsCampaignsResponseContentEncoded {
  readonly campaigns?: Inline864Encoded;
}
export const UpdateSponsoredBrandsCampaignsResponseContent: Schema.Schema<UpdateSponsoredBrandsCampaignsResponseContent, UpdateSponsoredBrandsCampaignsResponseContentEncoded, never> = Schema.Struct({
  campaigns: Schema.optional(Schema.suspend(() => Inline864)),
});

export interface UpdateSponsoredBrandsManualCollectionAdsParams {
  readonly ads: ReadonlyArray<Inline910>;
}
export interface UpdateSponsoredBrandsManualCollectionAdsParamsEncoded {
  readonly ads: ReadonlyArray<Inline910Encoded>;
}
export const UpdateSponsoredBrandsManualCollectionAdsParams: Schema.Schema<UpdateSponsoredBrandsManualCollectionAdsParams, UpdateSponsoredBrandsManualCollectionAdsParamsEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline910)),
});

export interface UpdateSponsoredBrandsManualCollectionAdsRequestContent {
  readonly ads: ReadonlyArray<Inline877>;
}
export interface UpdateSponsoredBrandsManualCollectionAdsRequestContentEncoded {
  readonly ads: ReadonlyArray<Inline877Encoded>;
}
export const UpdateSponsoredBrandsManualCollectionAdsRequestContent: Schema.Schema<UpdateSponsoredBrandsManualCollectionAdsRequestContent, UpdateSponsoredBrandsManualCollectionAdsRequestContentEncoded, never> = Schema.Struct({
  ads: Schema.Array(Schema.suspend(() => Inline877)),
});

export interface UpdateSponsoredBrandsManualCollectionAdsResponse {

}
export interface UpdateSponsoredBrandsManualCollectionAdsResponseEncoded {

}
export const UpdateSponsoredBrandsManualCollectionAdsResponse: Schema.Schema<UpdateSponsoredBrandsManualCollectionAdsResponse, UpdateSponsoredBrandsManualCollectionAdsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsManualCollectionAdsResponseContent {
  readonly creatives?: Inline880;
}
export interface UpdateSponsoredBrandsManualCollectionAdsResponseContentEncoded {
  readonly creatives?: Inline880Encoded;
}
export const UpdateSponsoredBrandsManualCollectionAdsResponseContent: Schema.Schema<UpdateSponsoredBrandsManualCollectionAdsResponseContent, UpdateSponsoredBrandsManualCollectionAdsResponseContentEncoded, never> = Schema.Struct({
  creatives: Schema.optional(Schema.suspend(() => Inline880)),
});

export interface UpdateSponsoredBrandsOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline1042>;
}
export interface UpdateSponsoredBrandsOptimizationRulesParamsEncoded {
  readonly optimizationRules: ReadonlyArray<Inline1042Encoded>;
}
export const UpdateSponsoredBrandsOptimizationRulesParams: Schema.Schema<UpdateSponsoredBrandsOptimizationRulesParams, UpdateSponsoredBrandsOptimizationRulesParamsEncoded, never> = Schema.Struct({
  optimizationRules: Schema.Array(Schema.suspend(() => Inline1042)),
});

export interface UpdateSponsoredBrandsOptimizationRulesRequestContent {
  readonly optimizationRules: ReadonlyArray<Inline884>;
}
export interface UpdateSponsoredBrandsOptimizationRulesRequestContentEncoded {
  readonly optimizationRules: ReadonlyArray<Inline884Encoded>;
}
export const UpdateSponsoredBrandsOptimizationRulesRequestContent: Schema.Schema<UpdateSponsoredBrandsOptimizationRulesRequestContent, UpdateSponsoredBrandsOptimizationRulesRequestContentEncoded, never> = Schema.Struct({
  optimizationRules: Schema.Array(Schema.suspend(() => Inline884)),
});

export interface UpdateSponsoredBrandsOptimizationRulesResponse {

}
export interface UpdateSponsoredBrandsOptimizationRulesResponseEncoded {

}
export const UpdateSponsoredBrandsOptimizationRulesResponse: Schema.Schema<UpdateSponsoredBrandsOptimizationRulesResponse, UpdateSponsoredBrandsOptimizationRulesResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSponsoredBrandsOptimizationRulesResponseContent {
  readonly optimizationRules: Inline886;
}
export interface UpdateSponsoredBrandsOptimizationRulesResponseContentEncoded {
  readonly optimizationRules: Inline886Encoded;
}
export const UpdateSponsoredBrandsOptimizationRulesResponseContent: Schema.Schema<UpdateSponsoredBrandsOptimizationRulesResponseContent, UpdateSponsoredBrandsOptimizationRulesResponseContentEncoded, never> = Schema.Struct({
  optimizationRules: Schema.suspend(() => Inline886),
});

export interface ValueTypeRuleCriteria {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export interface ValueTypeRuleCriteriaEncoded {
  readonly comparisonOperator?: string;
  readonly value?: number;
}
export const ValueTypeRuleCriteria: Schema.Schema<ValueTypeRuleCriteria, ValueTypeRuleCriteriaEncoded, never> = Schema.Struct({
  comparisonOperator: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});

export interface VideoCreative {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline890;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export interface VideoCreativeEncoded {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline890Encoded;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
}
export const VideoCreative: Schema.Schema<VideoCreative, VideoCreativeEncoded, never> = Schema.Struct({
  brandLogoAssetId: Schema.optional(Schema.String),
  brandLogoCrop: Schema.optional(Schema.suspend(() => Inline890)),
  brandName: Schema.optional(Schema.String),
  consentToTranslate: Schema.optional(Schema.Boolean),
  headline: Schema.optional(Schema.String),
  videoAssetIds: Schema.Array(Schema.String),
});
