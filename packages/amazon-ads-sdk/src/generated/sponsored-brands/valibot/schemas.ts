// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type AcceptHeader = "application/vnd.sbAdCreativeResource.v4+json" | "application/vnd.sbCreativeImageRecommendationResource.v4+json" | "application/vnd.sbCreativeRecommendationResource.v4+json" | string;
export const AcceptHeaderSchema: v.GenericSchema<unknown, AcceptHeader> = v.union([v.picklist(["application/vnd.sbAdCreativeResource.v4+json", "application/vnd.sbCreativeImageRecommendationResource.v4+json", "application/vnd.sbCreativeRecommendationResource.v4+json"]), v.string()]);

export type AccessDeniedErrorCode = "ACCESS_DENIED" | string;
export const AccessDeniedErrorCodeSchema: v.GenericSchema<unknown, AccessDeniedErrorCode> = v.union([v.picklist(["ACCESS_DENIED"]), v.string()]);

export type AccessDeniedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const AccessDeniedExceptionResponseContentSchema: v.GenericSchema<unknown, AccessDeniedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type Ad = {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline3;
  readonly extendedData?: Inline7;
  readonly landingPage?: Inline8;
  readonly name?: string;
  readonly state: string;
};
export const AdSchema: v.GenericSchema<unknown, Ad> = v.looseObject({
  adGroupId: v.string(),
  adId: v.optional(v.string()),
  campaignId: v.string(),
  creative: v.optional(v.lazy(() => Inline3Schema)),
  extendedData: v.optional(v.lazy(() => Inline7Schema)),
  landingPage: v.optional(v.lazy(() => Inline8Schema)),
  name: v.optional(v.string()),
  state: v.string(),
});

export type AdExtendedData = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const AdExtendedDataSchema: v.GenericSchema<unknown, AdExtendedData> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type AdFailureResponseItem = {
  readonly errors?: ReadonlyArray<Inline11>;
  readonly index: number;
};
export const AdFailureResponseItemSchema: v.GenericSchema<unknown, AdFailureResponseItem> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline11Schema))),
  index: v.number(),
});

export type AdGroup = {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline14;
  readonly name: string;
  readonly state: string;
};
export const AdGroupSchema: v.GenericSchema<unknown, AdGroup> = v.looseObject({
  adGroupId: v.string(),
  campaignId: v.string(),
  extendedData: v.optional(v.lazy(() => Inline14Schema)),
  name: v.string(),
  state: v.string(),
});

export type AdGroupExtendedData = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const AdGroupExtendedDataSchema: v.GenericSchema<unknown, AdGroupExtendedData> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type AdGroupFailureResponseItem = {
  readonly errors?: ReadonlyArray<Inline17>;
  readonly index: number;
};
export const AdGroupFailureResponseItemSchema: v.GenericSchema<unknown, AdGroupFailureResponseItem> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline17Schema))),
  index: v.number(),
});

export type AdGroupMutationError = {
  readonly errorType: string;
  readonly errorValue: Inline22;
};
export const AdGroupMutationErrorSchema: v.GenericSchema<unknown, AdGroupMutationError> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline22Schema),
});

export type AdGroupMutationErrorSelector = {
  readonly biddingError?: Inline27;
  readonly dateError?: Inline28;
  readonly otherError?: Inline29;
  readonly rangeError?: Inline30;
};
export const AdGroupMutationErrorSelectorSchema: v.GenericSchema<unknown, AdGroupMutationErrorSelector> = v.looseObject({
  biddingError: v.optional(v.lazy(() => Inline27Schema)),
  dateError: v.optional(v.lazy(() => Inline28Schema)),
  otherError: v.optional(v.lazy(() => Inline29Schema)),
  rangeError: v.optional(v.lazy(() => Inline30Schema)),
});

export type AdGroupServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const AdGroupServingStatusSchema: v.GenericSchema<unknown, AdGroupServingStatus> = v.union([v.picklist(["ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "AD_GROUP_ARCHIVED", "AD_GROUP_INCOMPLETE", "AD_GROUP_LOW_BID", "AD_GROUP_PAUSED", "AD_GROUP_POLICING_CREATIVE_REJECTED", "AD_GROUP_POLICING_PENDING_REVIEW", "AD_GROUP_STATUS_ENABLED", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"]), v.string()]);

export type AdGroupSuccessResponseItem = {
  readonly adGroup?: Inline33;
  readonly adGroupId?: string;
  readonly index: number;
};
export const AdGroupSuccessResponseItemSchema: v.GenericSchema<unknown, AdGroupSuccessResponseItem> = v.looseObject({
  adGroup: v.optional(v.lazy(() => Inline33Schema)),
  adGroupId: v.optional(v.string()),
  index: v.number(),
});

export type AdMutationError = {
  readonly errorType: string;
  readonly errorValue: Inline35;
};
export const AdMutationErrorSchema: v.GenericSchema<unknown, AdMutationError> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline35Schema),
});

export type AdMutationErrorSelector = {
  readonly otherError?: Inline38;
  readonly rangeError?: Inline39;
};
export const AdMutationErrorSelectorSchema: v.GenericSchema<unknown, AdMutationErrorSelector> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline38Schema)),
  rangeError: v.optional(v.lazy(() => Inline39Schema)),
});

export type AdServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const AdServingStatusSchema: v.GenericSchema<unknown, AdServingStatus> = v.union([v.picklist(["ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "AD_ARCHIVED", "AD_CREATOR_CONTENT_LICENSE_EXPIRED", "AD_GROUP_ARCHIVED", "AD_GROUP_INCOMPLETE", "AD_GROUP_LOW_BID", "AD_GROUP_PAUSED", "AD_GROUP_POLICING_CREATIVE_REJECTED", "AD_GROUP_POLICING_PENDING_REVIEW", "AD_GROUP_STATUS_ENABLED", "AD_PAUSED", "AD_POLICING_PENDING_REVIEW", "AD_POLICING_SUSPENDED", "AD_STATUS_LIVE", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"]), v.string()]);

export type AdSuccessResponseItem = {
  readonly ad?: Inline42;
  readonly adId?: string;
  readonly index: number;
};
export const AdSuccessResponseItemSchema: v.GenericSchema<unknown, AdSuccessResponseItem> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline42Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type AssetCrop = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const AssetCropSchema: v.GenericSchema<unknown, AssetCrop> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type AssociatedBudgetRuleResponse = {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const AssociatedBudgetRuleResponseSchema: v.GenericSchema<unknown, AssociatedBudgetRuleResponse> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type AssociatedCampaign = {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
};
export const AssociatedCampaignSchema: v.GenericSchema<unknown, AssociatedCampaign> = v.looseObject({
  campaignId: v.string(),
  campaignName: v.string(),
  ruleStatus: v.string(),
});

export type AssociateSponsoredBrandsOptimizationRulesParams = {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline1046>;
};
export const AssociateSponsoredBrandsOptimizationRulesParamsSchema: v.GenericSchema<unknown, AssociateSponsoredBrandsOptimizationRulesParams> = v.looseObject({
  optimizationRuleAssociations: v.array(v.lazy(() => Inline1046Schema)),
});

export type AssociateSponsoredBrandsOptimizationRulesRequestContent = {
  readonly optimizationRuleAssociations: ReadonlyArray<Inline52>;
};
export const AssociateSponsoredBrandsOptimizationRulesRequestContentSchema: v.GenericSchema<unknown, AssociateSponsoredBrandsOptimizationRulesRequestContent> = v.looseObject({
  optimizationRuleAssociations: v.array(v.lazy(() => Inline52Schema)),
});

export type AssociateSponsoredBrandsOptimizationRulesResponse = {

};
export const AssociateSponsoredBrandsOptimizationRulesResponseSchema: v.GenericSchema<unknown, AssociateSponsoredBrandsOptimizationRulesResponse> = v.looseObject({

});

export type AssociateSponsoredBrandsOptimizationRulesResponseContent = {
  readonly optimizationRuleAssociations: Inline54;
};
export const AssociateSponsoredBrandsOptimizationRulesResponseContentSchema: v.GenericSchema<unknown, AssociateSponsoredBrandsOptimizationRulesResponseContent> = v.looseObject({
  optimizationRuleAssociations: v.lazy(() => Inline54Schema),
});

export type AudienceSegment = {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
};
export const AudienceSegmentSchema: v.GenericSchema<unknown, AudienceSegment> = v.looseObject({
  audienceId: v.optional(v.string()),
  audienceSegmentType: v.optional(v.string()),
});

export type AudienceSegmentType = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC" | string;
export const AudienceSegmentTypeSchema: v.GenericSchema<unknown, AudienceSegmentType> = v.union([v.picklist(["BEHAVIOR_DYNAMIC", "SPONSORED_ADS_AMC"]), v.string()]);

export type BidAdjustmentByPlacement = {
  readonly percentage?: number;
  readonly placement?: string;
};
export const BidAdjustmentByPlacementSchema: v.GenericSchema<unknown, BidAdjustmentByPlacement> = v.looseObject({
  percentage: v.optional(v.number()),
  placement: v.optional(v.string()),
});

export type BidAdjustmentByShopperSegment = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const BidAdjustmentByShopperSegmentSchema: v.GenericSchema<unknown, BidAdjustmentByShopperSegment> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Bidding = {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline61>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline62>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline63>;
};
export const BiddingSchema: v.GenericSchema<unknown, Bidding> = v.looseObject({
  bidAdjustmentsByPlacement: v.optional(v.array(v.lazy(() => Inline61Schema))),
  bidAdjustmentsByShopperSegment: v.optional(v.array(v.lazy(() => Inline62Schema))),
  bidOptimization: v.optional(v.boolean()),
  bidOptimizationStrategy: v.optional(v.string()),
  shopperCohortBidAdjustments: v.optional(v.array(v.lazy(() => Inline63Schema))),
});

export type BiddingError = {
  readonly cause: Inline65;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const BiddingErrorSchema: v.GenericSchema<unknown, BiddingError> = v.looseObject({
  cause: v.lazy(() => Inline65Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type BidOptimizationStrategy = "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS" | string;
export const BidOptimizationStrategySchema: v.GenericSchema<unknown, BidOptimizationStrategy> = v.union([v.picklist(["MAXIMIZE_IMMEDIATE_SALES", "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS"]), v.string()]);

export type BillingError = {
  readonly cause: Inline68;
  readonly message: string;
  readonly reason: string;
};
export const BillingErrorSchema: v.GenericSchema<unknown, BillingError> = v.looseObject({
  cause: v.lazy(() => Inline68Schema),
  message: v.string(),
  reason: v.string(),
});

export type BrandCollectionLandingPage = {
  readonly pageType?: string;
  readonly url?: string;
};
export const BrandCollectionLandingPageSchema: v.GenericSchema<unknown, BrandCollectionLandingPage> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type BrandCollectionLandingPageType = "PRODUCT_LIST" | "STORE" | string;
export const BrandCollectionLandingPageTypeSchema: v.GenericSchema<unknown, BrandCollectionLandingPageType> = v.union([v.picklist(["PRODUCT_LIST", "STORE"]), v.string()]);

export type BrandLogoCrop = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const BrandLogoCropSchema: v.GenericSchema<unknown, BrandLogoCrop> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type BrandVideoCreative = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline73;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline74;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const BrandVideoCreativeSchema: v.GenericSchema<unknown, BrandVideoCreative> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline73Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.string(),
  landingPage: v.optional(v.lazy(() => Inline74Schema)),
  videoAssetIds: v.array(v.string()),
});

export type BudgetChangeType = "PERCENT" | string;
export const BudgetChangeTypeSchema: v.GenericSchema<unknown, BudgetChangeType> = v.union([v.picklist(["PERCENT"]), v.string()]);

export type BudgetError = {
  readonly cause: Inline77;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const BudgetErrorSchema: v.GenericSchema<unknown, BudgetError> = v.looseObject({
  cause: v.lazy(() => Inline77Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type budgetIncreaseBy = {
  readonly type: string;
  readonly value: number;
};
export const budgetIncreaseBySchema: v.GenericSchema<unknown, budgetIncreaseBy> = v.looseObject({
  type: v.string(),
  value: v.number(),
});

export type BudgetRecommendation = {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline80;
  readonly suggestedBudget: number;
};
export const BudgetRecommendationSchema: v.GenericSchema<unknown, BudgetRecommendation> = v.looseObject({
  campaignId: v.string(),
  index: v.number(),
  sevenDaysMissedOpportunities: v.lazy(() => Inline80Schema),
  suggestedBudget: v.number(),
});

export type BudgetRecommendationError = {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
};
export const BudgetRecommendationErrorSchema: v.GenericSchema<unknown, BudgetRecommendationError> = v.looseObject({
  campaignId: v.string(),
  code: v.string(),
  details: v.string(),
  index: v.number(),
});

export type BudgetRuleError = {
  readonly code?: string;
  readonly details?: string;
};
export const BudgetRuleErrorSchema: v.GenericSchema<unknown, BudgetRuleError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type BudgetRuleResponse = {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const BudgetRuleResponseSchema: v.GenericSchema<unknown, BudgetRuleResponse> = v.looseObject({
  associatedCampaignIds: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type BudgetType = "DAILY" | "LIFETIME" | string;
export const BudgetTypeSchema: v.GenericSchema<unknown, BudgetType> = v.union([v.picklist(["DAILY", "LIFETIME"]), v.string()]);

export type BudgetUsageCampaign = {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
};
export const BudgetUsageCampaignSchema: v.GenericSchema<unknown, BudgetUsageCampaign> = v.looseObject({
  budget: v.optional(v.number()),
  budgetUsagePercent: v.optional(v.number()),
  campaignId: v.optional(v.string()),
  index: v.optional(v.number()),
  usageUpdatedTimestamp: v.optional(v.string()),
});

export type BudgetUsageCampaignBatchError = {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
};
export const BudgetUsageCampaignBatchErrorSchema: v.GenericSchema<unknown, BudgetUsageCampaignBatchError> = v.looseObject({
  campaignId: v.optional(v.string()),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  index: v.optional(v.number()),
});

export type BudgetUsageCampaignRequest = {
  readonly campaignIds?: ReadonlyArray<string>;
};
export const BudgetUsageCampaignRequestSchema: v.GenericSchema<unknown, BudgetUsageCampaignRequest> = v.looseObject({
  campaignIds: v.optional(v.array(v.string())),
});

export type BudgetUsageCampaignResponse = {
  readonly error?: ReadonlyArray<Inline89>;
  readonly success?: ReadonlyArray<Inline90>;
};
export const BudgetUsageCampaignResponseSchema: v.GenericSchema<unknown, BudgetUsageCampaignResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline89Schema))),
  success: v.optional(v.array(v.lazy(() => Inline90Schema))),
});

export type BudgetUsageError = {
  readonly code?: string;
  readonly details?: string;
};
export const BudgetUsageErrorSchema: v.GenericSchema<unknown, BudgetUsageError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type BulkAdGroupOperationResponse = {
  readonly error?: ReadonlyArray<Inline93>;
  readonly success?: ReadonlyArray<Inline97>;
};
export const BulkAdGroupOperationResponseSchema: v.GenericSchema<unknown, BulkAdGroupOperationResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline93Schema))),
  success: v.optional(v.array(v.lazy(() => Inline97Schema))),
});

export type BulkAdOperationResponse = {
  readonly error?: ReadonlyArray<Inline99>;
  readonly success?: ReadonlyArray<Inline101>;
};
export const BulkAdOperationResponseSchema: v.GenericSchema<unknown, BulkAdOperationResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline99Schema))),
  success: v.optional(v.array(v.lazy(() => Inline101Schema))),
});

export type BulkAssociationsOptimizationRuleResponse = {
  readonly error?: ReadonlyArray<Inline108>;
  readonly success?: ReadonlyArray<Inline109>;
};
export const BulkAssociationsOptimizationRuleResponseSchema: v.GenericSchema<unknown, BulkAssociationsOptimizationRuleResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline108Schema))),
  success: v.optional(v.array(v.lazy(() => Inline109Schema))),
});

export type BulkCampaignOperationResponse = {
  readonly error?: ReadonlyArray<Inline111>;
  readonly success?: ReadonlyArray<Inline117>;
};
export const BulkCampaignOperationResponseSchema: v.GenericSchema<unknown, BulkCampaignOperationResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline111Schema))),
  success: v.optional(v.array(v.lazy(() => Inline117Schema))),
});

export type BulkCreateOptimizationRuleOperationResponse = {
  readonly error?: ReadonlyArray<Inline124>;
  readonly success?: ReadonlyArray<Inline125>;
};
export const BulkCreateOptimizationRuleOperationResponseSchema: v.GenericSchema<unknown, BulkCreateOptimizationRuleOperationResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline124Schema))),
  success: v.optional(v.array(v.lazy(() => Inline125Schema))),
});

export type BulkCreativeResponse = {
  readonly error?: ReadonlyArray<Inline127>;
  readonly success?: ReadonlyArray<Inline129>;
};
export const BulkCreativeResponseSchema: v.GenericSchema<unknown, BulkCreativeResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline127Schema))),
  success: v.optional(v.array(v.lazy(() => Inline129Schema))),
});

export type BulkDisassociationsOptimizationRuleResponse = {
  readonly error?: ReadonlyArray<Inline131>;
  readonly success?: ReadonlyArray<Inline132>;
};
export const BulkDisassociationsOptimizationRuleResponseSchema: v.GenericSchema<unknown, BulkDisassociationsOptimizationRuleResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline131Schema))),
  success: v.optional(v.array(v.lazy(() => Inline132Schema))),
});

export type BulkUpdateOptimizationRuleOperationResponse = {
  readonly error?: ReadonlyArray<Inline134>;
  readonly success?: ReadonlyArray<Inline135>;
};
export const BulkUpdateOptimizationRuleOperationResponseSchema: v.GenericSchema<unknown, BulkUpdateOptimizationRuleOperationResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline134Schema))),
  success: v.optional(v.array(v.lazy(() => Inline135Schema))),
});

export type Campaign = {
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
};
export const CampaignSchema: v.GenericSchema<unknown, Campaign> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline137Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  campaignId: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  extendedData: v.optional(v.lazy(() => Inline140Schema)),
  goal: v.optional(v.string()),
  isMultiAdGroupsEnabled: v.optional(v.boolean()),
  kpi: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  ruleBasedBudget: v.optional(v.lazy(() => Inline141Schema)),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline142Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type CampaignExtendedData = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const CampaignExtendedDataSchema: v.GenericSchema<unknown, CampaignExtendedData> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type CampaignMigrationFinalStatus = {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
};
export const CampaignMigrationFinalStatusSchema: v.GenericSchema<unknown, CampaignMigrationFinalStatus> = v.looseObject({
  legacyCampaignId: v.optional(v.string()),
  migrationStatus: v.optional(v.string()),
  migrationStatusReason: v.optional(v.string()),
  newCampaignId: v.optional(v.string()),
});

export type CampaignMutationError = {
  readonly errorType: string;
  readonly errorValue: Inline146;
};
export const CampaignMutationErrorSchema: v.GenericSchema<unknown, CampaignMutationError> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline146Schema),
});

export type CampaignMutationErrorSelector = {
  readonly biddingError?: Inline153;
  readonly billingError?: Inline154;
  readonly budgetError?: Inline155;
  readonly dateError?: Inline156;
  readonly otherError?: Inline157;
  readonly rangeError?: Inline158;
};
export const CampaignMutationErrorSelectorSchema: v.GenericSchema<unknown, CampaignMutationErrorSelector> = v.looseObject({
  biddingError: v.optional(v.lazy(() => Inline153Schema)),
  billingError: v.optional(v.lazy(() => Inline154Schema)),
  budgetError: v.optional(v.lazy(() => Inline155Schema)),
  dateError: v.optional(v.lazy(() => Inline156Schema)),
  otherError: v.optional(v.lazy(() => Inline157Schema)),
  rangeError: v.optional(v.lazy(() => Inline158Schema)),
});

export type CampaignMutationFailureResponseItem = {
  readonly errors?: ReadonlyArray<Inline160>;
  readonly index: number;
};
export const CampaignMutationFailureResponseItemSchema: v.GenericSchema<unknown, CampaignMutationFailureResponseItem> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline160Schema))),
  index: v.number(),
});

export type CampaignMutationSuccessResponseItem = {
  readonly campaign?: Inline167;
  readonly campaignId?: string;
  readonly index: number;
};
export const CampaignMutationSuccessResponseItemSchema: v.GenericSchema<unknown, CampaignMutationSuccessResponseItem> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline167Schema)),
  campaignId: v.optional(v.string()),
  index: v.number(),
});

export type CampaignServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN" | string;
export const CampaignServingStatusSchema: v.GenericSchema<unknown, CampaignServingStatus> = v.union([v.picklist(["ADVERTISER_ACCOUNT_OUT_OF_BUDGET", "ADVERTISER_ARCHIVED", "ADVERTISER_EXCEED_SPENDS_LIMIT", "ADVERTISER_OUT_OF_PREPAY_BALANCE", "ADVERTISER_PAUSED", "ADVERTISER_PAYMENT_FAILURE", "ADVERTISER_POLICING_PENDING_REVIEW", "ADVERTISER_POLICING_SUSPENDED", "ADVERTISER_STATUS_ENABLED", "CAMPAIGN_ARCHIVED", "CAMPAIGN_INCOMPLETE", "CAMPAIGN_OUT_OF_BUDGET", "CAMPAIGN_PAUSED", "CAMPAIGN_STATUS_ENABLED", "ELIGIBLE", "ENDED", "INELIGIBLE", "PENDING_REVIEW", "PENDING_START_DATE", "PORTFOLIO_ARCHIVED", "PORTFOLIO_ENDED", "PORTFOLIO_OUT_OF_BUDGET", "PORTFOLIO_PAUSED", "PORTFOLIO_PENDING_START_DATE", "PORTFOLIO_STATUS_ENABLED", "REJECTED", "UNKNOWN"]), v.string()]);

export type CollectionType = "BUNDLE" | "THEMED" | string;
export const CollectionTypeSchema: v.GenericSchema<unknown, CollectionType> = v.union([v.picklist(["BUNDLE", "THEMED"]), v.string()]);

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export const ComparisonOperatorSchema: v.GenericSchema<unknown, ComparisonOperator> = v.union([v.picklist(["GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO"]), v.string()]);

export type ConflictStateErrorCode = "CONFLICT_STATE" | string;
export const ConflictStateErrorCodeSchema: v.GenericSchema<unknown, ConflictStateErrorCode> = v.union([v.picklist(["CONFLICT_STATE"]), v.string()]);

export type ConflictStateExceptionResponseContent = {
  readonly code: string;
  readonly message: string;
};
export const ConflictStateExceptionResponseContentSchema: v.GenericSchema<unknown, ConflictStateExceptionResponseContent> = v.looseObject({
  code: v.string(),
  message: v.string(),
});

export type CostControlMetric = "COST_PER_CLICK" | string;
export const CostControlMetricSchema: v.GenericSchema<unknown, CostControlMetric> = v.union([v.picklist(["COST_PER_CLICK"]), v.string()]);

export type CreateAdGroup = {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
};
export const CreateAdGroupSchema: v.GenericSchema<unknown, CreateAdGroup> = v.looseObject({
  campaignId: v.string(),
  name: v.string(),
  state: v.string(),
});

export type CreateAssociatedBudgetRulesForSBCampaignsParams = {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
};
export const CreateAssociatedBudgetRulesForSBCampaignsParamsSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesForSBCampaignsParams> = v.looseObject({
  campaignId: v.number(),
  budgetRuleIds: v.optional(v.array(v.string())),
});

export type CreateAssociatedBudgetRulesForSBCampaignsResponse = {

};
export const CreateAssociatedBudgetRulesForSBCampaignsResponseSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesForSBCampaignsResponse> = v.looseObject({

});

export type CreateAssociatedBudgetRulesRequest = {
  readonly budgetRuleIds?: ReadonlyArray<string>;
};
export const CreateAssociatedBudgetRulesRequestSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesRequest> = v.looseObject({
  budgetRuleIds: v.optional(v.array(v.string())),
});

export type CreateAssociatedBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline182>;
};
export const CreateAssociatedBudgetRulesResponseSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline182Schema))),
});

export type CreateAutoCollectionAd = {
  readonly adGroupId: string;
  readonly creative: Inline184;
  readonly name: string;
  readonly state: string;
};
export const CreateAutoCollectionAdSchema: v.GenericSchema<unknown, CreateAutoCollectionAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline184Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateAutoCollectionCreative = {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline186;
  readonly brandName: string;
};
export const CreateAutoCollectionCreativeSchema: v.GenericSchema<unknown, CreateAutoCollectionCreative> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline186Schema)),
  brandName: v.string(),
});

export type CreateBrandVideoAd = {
  readonly adGroupId: string;
  readonly creative: Inline188;
  readonly landingPage: Inline189;
  readonly name: string;
  readonly state: string;
};
export const CreateBrandVideoAdSchema: v.GenericSchema<unknown, CreateBrandVideoAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline188Schema),
  landingPage: v.lazy(() => Inline189Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateBrandVideoCreative = {
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
};
export const CreateBrandVideoCreativeSchema: v.GenericSchema<unknown, CreateBrandVideoCreative> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline191Schema)),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type CreateBrandVideoCreativeParams = {
  readonly adId: string;
  readonly creative: Inline896;
};
export const CreateBrandVideoCreativeParamsSchema: v.GenericSchema<unknown, CreateBrandVideoCreativeParams> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline896Schema),
});

export type CreateBrandVideoCreativeRequestContent = {
  readonly adId: string;
  readonly creative: Inline193;
};
export const CreateBrandVideoCreativeRequestContentSchema: v.GenericSchema<unknown, CreateBrandVideoCreativeRequestContent> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline193Schema),
});

export type CreateBrandVideoCreativeResponse = {
  readonly data: Inline899;
};
export const CreateBrandVideoCreativeResponseSchema: v.GenericSchema<unknown, CreateBrandVideoCreativeResponse> = v.looseObject({
  data: v.lazy(() => Inline899Schema),
});

export type CreateBrandVideoCreativeResponseContent = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const CreateBrandVideoCreativeResponseContentSchema: v.GenericSchema<unknown, CreateBrandVideoCreativeResponseContent> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type CreateBudgetRulesForSBCampaignsParams = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline947>;
};
export const CreateBudgetRulesForSBCampaignsParamsSchema: v.GenericSchema<unknown, CreateBudgetRulesForSBCampaignsParams> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline947Schema))),
});

export type CreateBudgetRulesForSBCampaignsResponse = {

};
export const CreateBudgetRulesForSBCampaignsResponseSchema: v.GenericSchema<unknown, CreateBudgetRulesForSBCampaignsResponse> = v.looseObject({

});

export type CreateBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline197>;
};
export const CreateBudgetRulesResponseSchema: v.GenericSchema<unknown, CreateBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline197Schema))),
});

export type CreateCampaign = {
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
};
export const CreateCampaignSchema: v.GenericSchema<unknown, CreateCampaign> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline199Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  goal: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline202Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type CreateExtendedProductCollectionAd = {
  readonly adGroupId: string;
  readonly creative: Inline204;
  readonly landingPage: Inline206;
  readonly name: string;
  readonly state: string;
};
export const CreateExtendedProductCollectionAdSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline204Schema),
  landingPage: v.lazy(() => Inline206Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateExtendedProductCollectionCreative = {
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
};
export const CreateExtendedProductCollectionCreativeSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionCreative> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline208Schema)),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline209Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
});

export type CreateExtendedProductCollectionCreativeParams = {
  readonly adId: string;
  readonly creative: Inline923;
};
export const CreateExtendedProductCollectionCreativeParamsSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionCreativeParams> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline923Schema),
});

export type CreateExtendedProductCollectionCreativeRequestContent = {
  readonly adId: string;
  readonly creative: Inline211;
};
export const CreateExtendedProductCollectionCreativeRequestContentSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionCreativeRequestContent> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline211Schema),
});

export type CreateExtendedProductCollectionCreativeResponse = {
  readonly data: Inline927;
};
export const CreateExtendedProductCollectionCreativeResponseSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionCreativeResponse> = v.looseObject({
  data: v.lazy(() => Inline927Schema),
});

export type CreateExtendedProductCollectionCreativeResponseContent = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const CreateExtendedProductCollectionCreativeResponseContentSchema: v.GenericSchema<unknown, CreateExtendedProductCollectionCreativeResponseContent> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type CreateManualCollectionAd = {
  readonly adGroupId: string;
  readonly creative: Inline216;
  readonly name: string;
  readonly state: string;
};
export const CreateManualCollectionAdSchema: v.GenericSchema<unknown, CreateManualCollectionAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline216Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateManualCollectionCreative = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline219;
  readonly brandName: string;
  readonly landingPage?: Inline220;
  readonly title?: string;
};
export const CreateManualCollectionCreativeSchema: v.GenericSchema<unknown, CreateManualCollectionCreative> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline219Schema)),
  brandName: v.string(),
  landingPage: v.optional(v.lazy(() => Inline220Schema)),
  title: v.optional(v.string()),
});

export type CreateOptimizationRule = {
  readonly conditions?: ReadonlyArray<Inline222>;
  readonly entityId?: string;
  readonly entityType?: string;
};
export const CreateOptimizationRuleSchema: v.GenericSchema<unknown, CreateOptimizationRule> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline222Schema))),
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type CreateOptimizationRuleSuccessResponseItem = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline224;
  readonly optimizationRuleId: string;
};
export const CreateOptimizationRuleSuccessResponseItemSchema: v.GenericSchema<unknown, CreateOptimizationRuleSuccessResponseItem> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRule: v.lazy(() => Inline224Schema),
  optimizationRuleId: v.string(),
});

export type CreateOrUpdateEntityState = "ENABLED" | "PAUSED" | "PROPOSED" | string;
export const CreateOrUpdateEntityStateSchema: v.GenericSchema<unknown, CreateOrUpdateEntityState> = v.union([v.picklist(["ENABLED", "PAUSED", "PROPOSED"]), v.string()]);

export type CreateProductCollectionAd = {
  readonly adGroupId: string;
  readonly creative: Inline227;
  readonly landingPage: Inline229;
  readonly name: string;
  readonly state: string;
};
export const CreateProductCollectionAdSchema: v.GenericSchema<unknown, CreateProductCollectionAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline227Schema),
  landingPage: v.lazy(() => Inline229Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateProductCollectionCreative = {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline231;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline232;
  readonly headline?: string;
};
export const CreateProductCollectionCreativeSchema: v.GenericSchema<unknown, CreateProductCollectionCreative> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline231Schema)),
  brandName: v.optional(v.string()),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline232Schema)),
  headline: v.optional(v.string()),
});

export type CreateProductCollectionCreativeParams = {
  readonly adId: string;
  readonly creative: Inline916;
};
export const CreateProductCollectionCreativeParamsSchema: v.GenericSchema<unknown, CreateProductCollectionCreativeParams> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline916Schema),
});

export type CreateProductCollectionCreativeRequestContent = {
  readonly adId: string;
  readonly creative: Inline234;
};
export const CreateProductCollectionCreativeRequestContentSchema: v.GenericSchema<unknown, CreateProductCollectionCreativeRequestContent> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline234Schema),
});

export type CreateProductCollectionCreativeResponse = {
  readonly data: Inline919;
};
export const CreateProductCollectionCreativeResponseSchema: v.GenericSchema<unknown, CreateProductCollectionCreativeResponse> = v.looseObject({
  data: v.lazy(() => Inline919Schema),
});

export type CreateProductCollectionCreativeResponseContent = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const CreateProductCollectionCreativeResponseContentSchema: v.GenericSchema<unknown, CreateProductCollectionCreativeResponseContent> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type CreateSBBudgetRulesRequest = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline238>;
};
export const CreateSBBudgetRulesRequestSchema: v.GenericSchema<unknown, CreateSBBudgetRulesRequest> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline238Schema))),
});

export type CreateSponsoredBrandsAdGroupsParams = {
  readonly adGroups: ReadonlyArray<Inline1077>;
};
export const CreateSponsoredBrandsAdGroupsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAdGroupsParams> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline1077Schema)),
});

export type CreateSponsoredBrandsAdGroupsRequestContent = {
  readonly adGroups: ReadonlyArray<Inline244>;
};
export const CreateSponsoredBrandsAdGroupsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAdGroupsRequestContent> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline244Schema)),
});

export type CreateSponsoredBrandsAdGroupsResponse = {

};
export const CreateSponsoredBrandsAdGroupsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAdGroupsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsAdGroupsResponseContent = {
  readonly adGroups?: Inline246;
};
export const CreateSponsoredBrandsAdGroupsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAdGroupsResponseContent> = v.looseObject({
  adGroups: v.optional(v.lazy(() => Inline246Schema)),
});

export type CreateSponsoredBrandsAutoCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline1104>;
};
export const CreateSponsoredBrandsAutoCollectionAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAutoCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1104Schema)),
});

export type CreateSponsoredBrandsAutoCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline252>;
};
export const CreateSponsoredBrandsAutoCollectionAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAutoCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline252Schema)),
});

export type CreateSponsoredBrandsAutoCollectionAdsResponse = {

};
export const CreateSponsoredBrandsAutoCollectionAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAutoCollectionAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsAutoCollectionAdsResponseContent = {
  readonly ads?: Inline254;
};
export const CreateSponsoredBrandsAutoCollectionAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsAutoCollectionAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline254Schema)),
});

export type CreateSponsoredBrandsBrandVideoAdsParams = {
  readonly ads: ReadonlyArray<Inline1108>;
};
export const CreateSponsoredBrandsBrandVideoAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsBrandVideoAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1108Schema)),
});

export type CreateSponsoredBrandsBrandVideoAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline263>;
};
export const CreateSponsoredBrandsBrandVideoAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsBrandVideoAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline263Schema)),
});

export type CreateSponsoredBrandsBrandVideoAdsResponse = {

};
export const CreateSponsoredBrandsBrandVideoAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsBrandVideoAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsBrandVideoAdsResponseContent = {
  readonly ads?: Inline266;
};
export const CreateSponsoredBrandsBrandVideoAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsBrandVideoAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline266Schema)),
});

export type CreateSponsoredBrandsCampaignsParams = {
  readonly campaigns: ReadonlyArray<Inline1170>;
};
export const CreateSponsoredBrandsCampaignsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsCampaignsParams> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline1170Schema)),
});

export type CreateSponsoredBrandsCampaignsRequestContent = {
  readonly campaigns: ReadonlyArray<Inline275>;
};
export const CreateSponsoredBrandsCampaignsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsCampaignsRequestContent> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline275Schema)),
});

export type CreateSponsoredBrandsCampaignsResponse = {

};
export const CreateSponsoredBrandsCampaignsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsCampaignsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsCampaignsResponseContent = {
  readonly campaigns?: Inline280;
};
export const CreateSponsoredBrandsCampaignsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsCampaignsResponseContent> = v.looseObject({
  campaigns: v.optional(v.lazy(() => Inline280Schema)),
});

export type CreateSponsoredBrandsExtendedProductCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline1150>;
};
export const CreateSponsoredBrandsExtendedProductCollectionAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsExtendedProductCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1150Schema)),
});

export type CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline293>;
};
export const CreateSponsoredBrandsExtendedProductCollectionAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline293Schema)),
});

export type CreateSponsoredBrandsExtendedProductCollectionAdsResponse = {

};
export const CreateSponsoredBrandsExtendedProductCollectionAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsExtendedProductCollectionAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent = {
  readonly ads?: Inline297;
};
export const CreateSponsoredBrandsExtendedProductCollectionAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline297Schema)),
});

export type CreateSponsoredBrandsManualCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline1136>;
};
export const CreateSponsoredBrandsManualCollectionAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsManualCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1136Schema)),
});

export type CreateSponsoredBrandsManualCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline306>;
};
export const CreateSponsoredBrandsManualCollectionAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsManualCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline306Schema)),
});

export type CreateSponsoredBrandsManualCollectionAdsResponse = {

};
export const CreateSponsoredBrandsManualCollectionAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsManualCollectionAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsManualCollectionAdsResponseContent = {
  readonly ads?: Inline309;
};
export const CreateSponsoredBrandsManualCollectionAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsManualCollectionAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline309Schema)),
});

export type CreateSponsoredBrandsOptimizationRulesParams = {
  readonly optimizationRules: ReadonlyArray<Inline1038>;
};
export const CreateSponsoredBrandsOptimizationRulesParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsOptimizationRulesParams> = v.looseObject({
  optimizationRules: v.array(v.lazy(() => Inline1038Schema)),
});

export type CreateSponsoredBrandsOptimizationRulesRequestContent = {
  readonly optimizationRules: ReadonlyArray<Inline318>;
};
export const CreateSponsoredBrandsOptimizationRulesRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsOptimizationRulesRequestContent> = v.looseObject({
  optimizationRules: v.array(v.lazy(() => Inline318Schema)),
});

export type CreateSponsoredBrandsOptimizationRulesResponse = {

};
export const CreateSponsoredBrandsOptimizationRulesResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsOptimizationRulesResponse> = v.looseObject({

});

export type CreateSponsoredBrandsOptimizationRulesResponseContent = {
  readonly optimizationRules: Inline320;
};
export const CreateSponsoredBrandsOptimizationRulesResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsOptimizationRulesResponseContent> = v.looseObject({
  optimizationRules: v.lazy(() => Inline320Schema),
});

export type CreateSponsoredBrandsProductCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline1142>;
};
export const CreateSponsoredBrandsProductCollectionAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsProductCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1142Schema)),
});

export type CreateSponsoredBrandsProductCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline323>;
};
export const CreateSponsoredBrandsProductCollectionAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsProductCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline323Schema)),
});

export type CreateSponsoredBrandsProductCollectionAdsResponse = {

};
export const CreateSponsoredBrandsProductCollectionAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsProductCollectionAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsProductCollectionAdsResponseContent = {
  readonly ads?: Inline327;
};
export const CreateSponsoredBrandsProductCollectionAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsProductCollectionAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline327Schema)),
});

export type CreateSponsoredBrandStoreSpotlightAdsParams = {
  readonly ads: ReadonlyArray<Inline1158>;
};
export const CreateSponsoredBrandStoreSpotlightAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandStoreSpotlightAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1158Schema)),
});

export type CreateSponsoredBrandStoreSpotlightAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline336>;
};
export const CreateSponsoredBrandStoreSpotlightAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandStoreSpotlightAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline336Schema)),
});

export type CreateSponsoredBrandStoreSpotlightAdsResponse = {

};
export const CreateSponsoredBrandStoreSpotlightAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandStoreSpotlightAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandStoreSpotlightAdsResponseContent = {
  readonly ads?: Inline340;
};
export const CreateSponsoredBrandStoreSpotlightAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandStoreSpotlightAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline340Schema)),
});

export type CreateSponsoredBrandsVideoAdsParams = {
  readonly ads: ReadonlyArray<Inline1166>;
};
export const CreateSponsoredBrandsVideoAdsParamsSchema: v.GenericSchema<unknown, CreateSponsoredBrandsVideoAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1166Schema)),
});

export type CreateSponsoredBrandsVideoAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline349>;
};
export const CreateSponsoredBrandsVideoAdsRequestContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsVideoAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline349Schema)),
});

export type CreateSponsoredBrandsVideoAdsResponse = {

};
export const CreateSponsoredBrandsVideoAdsResponseSchema: v.GenericSchema<unknown, CreateSponsoredBrandsVideoAdsResponse> = v.looseObject({

});

export type CreateSponsoredBrandsVideoAdsResponseContent = {
  readonly ads?: Inline351;
};
export const CreateSponsoredBrandsVideoAdsResponseContentSchema: v.GenericSchema<unknown, CreateSponsoredBrandsVideoAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline351Schema)),
});

export type CreateStoreSpotlightAd = {
  readonly adGroupId: string;
  readonly creative: Inline360;
  readonly landingPage: Inline362;
  readonly name: string;
  readonly state: string;
};
export const CreateStoreSpotlightAdSchema: v.GenericSchema<unknown, CreateStoreSpotlightAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline360Schema),
  landingPage: v.lazy(() => Inline362Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateStoreSpotlightCreative = {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline364;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline365>;
};
export const CreateStoreSpotlightCreativeSchema: v.GenericSchema<unknown, CreateStoreSpotlightCreative> = v.looseObject({
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline364Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline365Schema))),
});

export type CreateStoreSpotlightCreativeParams = {
  readonly adId: string;
  readonly creative: Inline932;
};
export const CreateStoreSpotlightCreativeParamsSchema: v.GenericSchema<unknown, CreateStoreSpotlightCreativeParams> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline932Schema),
});

export type CreateStoreSpotlightCreativeRequestContent = {
  readonly adId: string;
  readonly creative: Inline367;
};
export const CreateStoreSpotlightCreativeRequestContentSchema: v.GenericSchema<unknown, CreateStoreSpotlightCreativeRequestContent> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline367Schema),
});

export type CreateStoreSpotlightCreativeResponse = {
  readonly data: Inline936;
};
export const CreateStoreSpotlightCreativeResponseSchema: v.GenericSchema<unknown, CreateStoreSpotlightCreativeResponse> = v.looseObject({
  data: v.lazy(() => Inline936Schema),
});

export type CreateStoreSpotlightCreativeResponseContent = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const CreateStoreSpotlightCreativeResponseContentSchema: v.GenericSchema<unknown, CreateStoreSpotlightCreativeResponseContent> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type CreateVideoAd = {
  readonly adGroupId: string;
  readonly creative: Inline372;
  readonly name: string;
  readonly state: string;
};
export const CreateVideoAdSchema: v.GenericSchema<unknown, CreateVideoAd> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline372Schema),
  name: v.string(),
  state: v.string(),
});

export type CreateVideoCreative = {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline374;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
};
export const CreateVideoCreativeSchema: v.GenericSchema<unknown, CreateVideoCreative> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline374Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type CreateVideoCreativeParams = {
  readonly adId: string;
  readonly creative: Inline941;
};
export const CreateVideoCreativeParamsSchema: v.GenericSchema<unknown, CreateVideoCreativeParams> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline941Schema),
});

export type CreateVideoCreativeRequestContent = {
  readonly adId: string;
  readonly creative: Inline376;
};
export const CreateVideoCreativeRequestContentSchema: v.GenericSchema<unknown, CreateVideoCreativeRequestContent> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline376Schema),
});

export type CreateVideoCreativeResponse = {
  readonly data: Inline943;
};
export const CreateVideoCreativeResponseSchema: v.GenericSchema<unknown, CreateVideoCreativeResponse> = v.looseObject({
  data: v.lazy(() => Inline943Schema),
});

export type CreateVideoCreativeResponseContent = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const CreateVideoCreativeResponseContentSchema: v.GenericSchema<unknown, CreateVideoCreativeResponseContent> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Creative = {
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
};
export const CreativeSchema: v.GenericSchema<unknown, Creative> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline379Schema)),
  brandLogoUrl: v.optional(v.string()),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  creativeStatus: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline380Schema)),
  customImageUrl: v.optional(v.string()),
  customImages: v.optional(v.array(v.lazy(() => Inline381Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  originalHeadline: v.optional(v.string()),
  originalHeadlines: v.optional(v.array(v.string())),
  originalVideoAssetIds: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline382Schema))),
  title: v.optional(v.string()),
  type: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type CreativeFailureResponseItem = {
  readonly errors?: ReadonlyArray<Inline384>;
  readonly index: number;
};
export const CreativeFailureResponseItemSchema: v.GenericSchema<unknown, CreativeFailureResponseItem> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline384Schema))),
  index: v.number(),
});

export type CreativeLandingPage = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
};
export const CreativeLandingPageSchema: v.GenericSchema<unknown, CreativeLandingPage> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type CreativeLandingPageType = "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN" | string;
export const CreativeLandingPageTypeSchema: v.GenericSchema<unknown, CreativeLandingPageType> = v.union([v.picklist(["ADVERTISING_LANDING_PAGE", "AD_LANDING_PREVIEW", "BROWSE", "CUSTOM_URL", "DETAIL_PAGE", "PRODUCT_LIST", "SEARCH", "STORE", "UNKNOWN"]), v.string()]);

export type CreativeLandingPageV2 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const CreativeLandingPageV2Schema: v.GenericSchema<unknown, CreativeLandingPageV2> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type CreativeMutationError = {
  readonly errorType: string;
  readonly errorValue: Inline390;
};
export const CreativeMutationErrorSchema: v.GenericSchema<unknown, CreativeMutationError> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline390Schema),
});

export type CreativeMutationErrorSelector = {
  readonly otherError?: Inline393;
  readonly rangeError?: Inline394;
};
export const CreativeMutationErrorSelectorSchema: v.GenericSchema<unknown, CreativeMutationErrorSelector> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline393Schema)),
  rangeError: v.optional(v.lazy(() => Inline394Schema)),
});

export type CreativeProperties = {
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
};
export const CreativePropertiesSchema: v.GenericSchema<unknown, CreativeProperties> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline396Schema)),
  brandLogoUrl: v.optional(v.string()),
  brandName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline397Schema)),
  customImageUrl: v.optional(v.string()),
  customImages: v.optional(v.array(v.lazy(() => Inline398Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline399Schema)),
  layout: v.optional(v.string()),
  originalHeadline: v.optional(v.string()),
  originalHeadlines: v.optional(v.array(v.string())),
  originalVideoAssetIds: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline400Schema))),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type CreativePropertyToOptimize = "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE" | string;
export const CreativePropertyToOptimizeSchema: v.GenericSchema<unknown, CreativePropertyToOptimize> = v.union([v.picklist(["ADVERTISED_PRODUCT", "CUSTOM_IMAGE", "HEADLINE"]), v.string()]);

export type CreativeStatus = "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION" | string;
export const CreativeStatusSchema: v.GenericSchema<unknown, CreativeStatus> = v.union([v.picklist(["APPROVED_BY_MODERATION", "PENDING_MODERATION_REVIEW", "PENDING_TRANSLATION", "PROPOSED", "PUBLISHED", "REJECTED_BY_MODERATION", "SUBMITTED_FOR_MODERATION"]), v.string()]);

export type CreativeSuccessResponseItem = {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
};
export const CreativeSuccessResponseItemSchema: v.GenericSchema<unknown, CreativeSuccessResponseItem> = v.looseObject({
  adId: v.string(),
  creativeVersion: v.optional(v.string()),
  index: v.number(),
});

export type CreativeType = "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const CreativeTypeSchema: v.GenericSchema<unknown, CreativeType> = v.union([v.picklist(["AUTO_COLLECTION", "BRAND_VIDEO", "MANUAL_COLLECTION", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"]), v.string()]);

export type CustomImage = {
  readonly assetId?: string;
  readonly crop?: Inline406;
  readonly url?: string;
};
export const CustomImageSchema: v.GenericSchema<unknown, CustomImage> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline406Schema)),
  url: v.optional(v.string()),
});

export type CustomImageCrop = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const CustomImageCropSchema: v.GenericSchema<unknown, CustomImageCrop> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type DateError = {
  readonly cause: Inline409;
  readonly message: string;
  readonly reason: string;
};
export const DateErrorSchema: v.GenericSchema<unknown, DateError> = v.looseObject({
  cause: v.lazy(() => Inline409Schema),
  message: v.string(),
  reason: v.string(),
});

export type DateRangeTypeRuleDuration = {
  readonly endDate?: string;
  readonly startDate: string;
};
export const DateRangeTypeRuleDurationSchema: v.GenericSchema<unknown, DateRangeTypeRuleDuration> = v.looseObject({
  endDate: v.optional(v.string()),
  startDate: v.string(),
});

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;
export const DayOfWeekSchema: v.GenericSchema<unknown, DayOfWeek> = v.union([v.picklist(["FRIDAY", "MONDAY", "SATURDAY", "SUNDAY", "THURSDAY", "TUESDAY", "WEDNESDAY"]), v.string()]);

export type DeleteSponsoredBrandsAdGroupsParams = {
  readonly adGroupIdFilter?: Inline1085;
};
export const DeleteSponsoredBrandsAdGroupsParamsSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdGroupsParams> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline1085Schema)),
});

export type DeleteSponsoredBrandsAdGroupsRequestContent = {
  readonly adGroupIdFilter?: Inline413;
};
export const DeleteSponsoredBrandsAdGroupsRequestContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdGroupsRequestContent> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline413Schema)),
});

export type DeleteSponsoredBrandsAdGroupsResponse = {

};
export const DeleteSponsoredBrandsAdGroupsResponseSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdGroupsResponse> = v.looseObject({

});

export type DeleteSponsoredBrandsAdGroupsResponseContent = {
  readonly adGroups?: Inline415;
};
export const DeleteSponsoredBrandsAdGroupsResponseContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdGroupsResponseContent> = v.looseObject({
  adGroups: v.optional(v.lazy(() => Inline415Schema)),
});

export type DeleteSponsoredBrandsAdsParams = {
  readonly adIdFilter?: Inline1114;
};
export const DeleteSponsoredBrandsAdsParamsSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdsParams> = v.looseObject({
  adIdFilter: v.optional(v.lazy(() => Inline1114Schema)),
});

export type DeleteSponsoredBrandsAdsRequestContent = {
  readonly adIdFilter?: Inline421;
};
export const DeleteSponsoredBrandsAdsRequestContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdsRequestContent> = v.looseObject({
  adIdFilter: v.optional(v.lazy(() => Inline421Schema)),
});

export type DeleteSponsoredBrandsAdsResponse = {

};
export const DeleteSponsoredBrandsAdsResponseSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdsResponse> = v.looseObject({

});

export type DeleteSponsoredBrandsAdsResponseContent = {
  readonly ads?: Inline423;
};
export const DeleteSponsoredBrandsAdsResponseContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline423Schema)),
});

export type DeleteSponsoredBrandsCampaignsParams = {
  readonly campaignIdFilter?: Inline1190;
};
export const DeleteSponsoredBrandsCampaignsParamsSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsCampaignsParams> = v.looseObject({
  campaignIdFilter: v.optional(v.lazy(() => Inline1190Schema)),
});

export type DeleteSponsoredBrandsCampaignsRequestContent = {
  readonly campaignIdFilter?: Inline432;
};
export const DeleteSponsoredBrandsCampaignsRequestContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsCampaignsRequestContent> = v.looseObject({
  campaignIdFilter: v.optional(v.lazy(() => Inline432Schema)),
});

export type DeleteSponsoredBrandsCampaignsResponse = {

};
export const DeleteSponsoredBrandsCampaignsResponseSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsCampaignsResponse> = v.looseObject({

});

export type DeleteSponsoredBrandsCampaignsResponseContent = {
  readonly campaigns?: Inline434;
};
export const DeleteSponsoredBrandsCampaignsResponseContentSchema: v.GenericSchema<unknown, DeleteSponsoredBrandsCampaignsResponseContent> = v.looseObject({
  campaigns: v.optional(v.lazy(() => Inline434Schema)),
});

export type DisassociateAssociatedBudgetRuleForSBCampaignsParams = {
  readonly campaignId: number;
  readonly budgetRuleId: string;
};
export const DisassociateAssociatedBudgetRuleForSBCampaignsParamsSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleForSBCampaignsParams> = v.looseObject({
  campaignId: v.number(),
  budgetRuleId: v.string(),
});

export type DisassociateAssociatedBudgetRuleForSBCampaignsResponse = {
  readonly data: Inline991;
};
export const DisassociateAssociatedBudgetRuleForSBCampaignsResponseSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleForSBCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline991Schema),
});

export type DisassociateAssociatedBudgetRuleResponse = {

};
export const DisassociateAssociatedBudgetRuleResponseSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleResponse> = v.looseObject({

});

export type DisassociateSponsoredBrandsOptimizationRulesParams = {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline1050>;
};
export const DisassociateSponsoredBrandsOptimizationRulesParamsSchema: v.GenericSchema<unknown, DisassociateSponsoredBrandsOptimizationRulesParams> = v.looseObject({
  optimizationRuleDisassociations: v.array(v.lazy(() => Inline1050Schema)),
});

export type DisassociateSponsoredBrandsOptimizationRulesRequestContent = {
  readonly optimizationRuleDisassociations: ReadonlyArray<Inline448>;
};
export const DisassociateSponsoredBrandsOptimizationRulesRequestContentSchema: v.GenericSchema<unknown, DisassociateSponsoredBrandsOptimizationRulesRequestContent> = v.looseObject({
  optimizationRuleDisassociations: v.array(v.lazy(() => Inline448Schema)),
});

export type DisassociateSponsoredBrandsOptimizationRulesResponse = {

};
export const DisassociateSponsoredBrandsOptimizationRulesResponseSchema: v.GenericSchema<unknown, DisassociateSponsoredBrandsOptimizationRulesResponse> = v.looseObject({

});

export type DisassociateSponsoredBrandsOptimizationRulesResponseContent = {
  readonly optimizationRuleDisassociations: Inline450;
};
export const DisassociateSponsoredBrandsOptimizationRulesResponseContentSchema: v.GenericSchema<unknown, DisassociateSponsoredBrandsOptimizationRulesResponseContent> = v.looseObject({
  optimizationRuleDisassociations: v.lazy(() => Inline450Schema),
});

export type EntityFilter = {
  readonly entityId?: string;
  readonly entityType?: string;
};
export const EntityFilterSchema: v.GenericSchema<unknown, EntityFilter> = v.looseObject({
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type EntityState = "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED" | string;
export const EntityStateSchema: v.GenericSchema<unknown, EntityState> = v.union([v.picklist(["ARCHIVED", "ENABLED", "PAUSED", "PROPOSED"]), v.string()]);

export type EntityStateFilter = {
  readonly include?: ReadonlyArray<string>;
};
export const EntityStateFilterSchema: v.GenericSchema<unknown, EntityStateFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type ErrorCause = {
  readonly location: string;
  readonly trigger?: string;
};
export const ErrorCauseSchema: v.GenericSchema<unknown, ErrorCause> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type EventTypeRuleDuration = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const EventTypeRuleDurationSchema: v.GenericSchema<unknown, EventTypeRuleDuration> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type ExtendedProductCollectionCreative = {
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
};
export const ExtendedProductCollectionCreativeSchema: v.GenericSchema<unknown, ExtendedProductCollectionCreative> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline458Schema)),
  brandName: v.string(),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline459Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline460Schema)),
});

export type GetBudgetRecommendationsParams = {
  readonly campaignIds: ReadonlyArray<string>;
};
export const GetBudgetRecommendationsParamsSchema: v.GenericSchema<unknown, GetBudgetRecommendationsParams> = v.looseObject({
  campaignIds: v.array(v.string()),
});

export type GetBudgetRecommendationsRequestContent = {
  readonly campaignIds: ReadonlyArray<string>;
};
export const GetBudgetRecommendationsRequestContentSchema: v.GenericSchema<unknown, GetBudgetRecommendationsRequestContent> = v.looseObject({
  campaignIds: v.array(v.string()),
});

export type GetBudgetRecommendationsResponse = {

};
export const GetBudgetRecommendationsResponseSchema: v.GenericSchema<unknown, GetBudgetRecommendationsResponse> = v.looseObject({

});

export type GetBudgetRecommendationsResponseContent = {
  readonly error: ReadonlyArray<Inline463>;
  readonly success: ReadonlyArray<Inline464>;
};
export const GetBudgetRecommendationsResponseContentSchema: v.GenericSchema<unknown, GetBudgetRecommendationsResponseContent> = v.looseObject({
  error: v.array(v.lazy(() => Inline463Schema)),
  success: v.array(v.lazy(() => Inline464Schema)),
});

export type GetBudgetRuleByRuleIdForSBCampaignsParams = {
  readonly budgetRuleId: string;
};
export const GetBudgetRuleByRuleIdForSBCampaignsParamsSchema: v.GenericSchema<unknown, GetBudgetRuleByRuleIdForSBCampaignsParams> = v.looseObject({
  budgetRuleId: v.string(),
});

export type GetBudgetRuleByRuleIdForSBCampaignsResponse = {
  readonly data: Inline972;
};
export const GetBudgetRuleByRuleIdForSBCampaignsResponseSchema: v.GenericSchema<unknown, GetBudgetRuleByRuleIdForSBCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline972Schema),
});

export type GetCampaignsAssociatedWithSBBudgetRuleParams = {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
};
export const GetCampaignsAssociatedWithSBBudgetRuleParamsSchema: v.GenericSchema<unknown, GetCampaignsAssociatedWithSBBudgetRuleParams> = v.looseObject({
  budgetRuleId: v.string(),
  nextToken: v.optional(v.string()),
  pageSize: v.number(),
});

export type GetCampaignsAssociatedWithSBBudgetRuleResponse = {
  readonly data: Inline979;
};
export const GetCampaignsAssociatedWithSBBudgetRuleResponseSchema: v.GenericSchema<unknown, GetCampaignsAssociatedWithSBBudgetRuleResponse> = v.looseObject({
  data: v.lazy(() => Inline979Schema),
});

export type GetHeadlineRecommendationsParams = {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline1025>;
};
export const GetHeadlineRecommendationsParamsSchema: v.GenericSchema<unknown, GetHeadlineRecommendationsParams> = v.looseObject({
  adFormat: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  maxNumSuggestions: v.optional(v.number()),
  storePages: v.optional(v.array(v.lazy(() => Inline1025Schema))),
});

export type GetHeadlineRecommendationsResponse = {
  readonly data: Inline1027;
};
export const GetHeadlineRecommendationsResponseSchema: v.GenericSchema<unknown, GetHeadlineRecommendationsResponse> = v.looseObject({
  data: v.lazy(() => Inline1027Schema),
});

export type GetKeywordRecommendationsParams = {
  readonly body: Inline1030 | Inline1031;
};
export const GetKeywordRecommendationsParamsSchema: v.GenericSchema<unknown, GetKeywordRecommendationsParams> = v.looseObject({
  body: v.union([v.lazy(() => Inline1030Schema), v.lazy(() => Inline1031Schema)]),
});

export type GetKeywordRecommendationsResponse = {

};
export const GetKeywordRecommendationsResponseSchema: v.GenericSchema<unknown, GetKeywordRecommendationsResponse> = v.looseObject({

});

export type GetSBBudgetRuleResponse = {
  readonly budgetRule?: Inline466;
};
export const GetSBBudgetRuleResponseSchema: v.GenericSchema<unknown, GetSBBudgetRuleResponse> = v.looseObject({
  budgetRule: v.optional(v.lazy(() => Inline466Schema)),
});

export type GetSBBudgetRulesForAdvertiserParams = {
  readonly nextToken?: string;
  readonly pageSize: number;
};
export const GetSBBudgetRulesForAdvertiserParamsSchema: v.GenericSchema<unknown, GetSBBudgetRulesForAdvertiserParams> = v.looseObject({
  nextToken: v.optional(v.string()),
  pageSize: v.number(),
});

export type GetSBBudgetRulesForAdvertiserResponse = {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline472>;
  readonly nextToken?: string;
};
export const GetSBBudgetRulesForAdvertiserResponseSchema: v.GenericSchema<unknown, GetSBBudgetRulesForAdvertiserResponse> = v.looseObject({
  budgetRulesForAdvertiserResponse: v.optional(v.array(v.lazy(() => Inline472Schema))),
  nextToken: v.optional(v.string()),
});

export type GoalTypeFilter = {
  readonly include?: ReadonlyArray<string>;
};
export const GoalTypeFilterSchema: v.GenericSchema<unknown, GoalTypeFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type HeadlineSuggestionRequest = {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumSuggestions?: number;
  readonly storePages?: ReadonlyArray<Inline479>;
};
export const HeadlineSuggestionRequestSchema: v.GenericSchema<unknown, HeadlineSuggestionRequest> = v.looseObject({
  adFormat: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  maxNumSuggestions: v.optional(v.number()),
  storePages: v.optional(v.array(v.lazy(() => Inline479Schema))),
});

export type HeadlineSuggestionResponse = {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline481>;
};
export const HeadlineSuggestionResponseSchema: v.GenericSchema<unknown, HeadlineSuggestionResponse> = v.looseObject({
  requestId: v.optional(v.string()),
  suggestions: v.optional(v.array(v.lazy(() => Inline481Schema))),
});

export type Inline100 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline100;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline100Schema: v.GenericSchema<unknown, Inline100> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline100Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline1001 = {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1001>;
};
export const Inline1001Schema: v.GenericSchema<unknown, Inline1001> = v.looseObject({
  adFormat: v.string(),
  keywords: v.optional(v.array(v.lazy(() => Inline1001Schema))),
});

export type Inline1003 = {
  readonly insights?: ReadonlyArray<Inline1003>;
  readonly nextToken?: string;
};
export const Inline1003Schema: v.GenericSchema<unknown, Inline1003> = v.looseObject({
  insights: v.optional(v.array(v.lazy(() => Inline1003Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline1005 = {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline1005>;
};
export const Inline1005Schema: v.GenericSchema<unknown, Inline1005> = v.looseObject({
  adFormat: v.string(),
  keywords: v.optional(v.array(v.lazy(() => Inline1005Schema))),
});

export type Inline1006 = {
  readonly adGroups: ReadonlyArray<Inline1006>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1012>;
  readonly startDate?: string;
};
export const Inline1006Schema: v.GenericSchema<unknown, Inline1006> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline1006Schema)),
  budget: v.number(),
  budgetType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  forecastType: v.string(),
  goal: v.optional(v.string()),
  optimizationRules: v.optional(v.array(v.lazy(() => Inline1012Schema))),
  startDate: v.optional(v.string()),
});

export type Inline1007 = {
  readonly landingPageUrl?: string;
};
export const Inline1007Schema: v.GenericSchema<unknown, Inline1007> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type Inline1008 = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline1008Schema: v.GenericSchema<unknown, Inline1008> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline1009 = {
  readonly expressions?: ReadonlyArray<Inline1009>;
};
export const Inline1009Schema: v.GenericSchema<unknown, Inline1009> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline1009Schema))),
});

export type Inline101 = {
  readonly ad?: Inline101;
  readonly adId?: string;
  readonly index: number;
};
export const Inline101Schema: v.GenericSchema<unknown, Inline101> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline101Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline1010 = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1010>;
};
export const Inline1010Schema: v.GenericSchema<unknown, Inline1010> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline1010Schema))),
});

export type Inline1011 = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const Inline1011Schema: v.GenericSchema<unknown, Inline1011> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type Inline1012 = {
  readonly attributeName?: string;
  readonly criteria?: Inline1012;
};
export const Inline1012Schema: v.GenericSchema<unknown, Inline1012> = v.looseObject({
  attributeName: v.optional(v.string()),
  criteria: v.optional(v.lazy(() => Inline1012Schema)),
});

export type Inline1015 = {
  readonly adGroups: ReadonlyArray<Inline1015>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline1021>;
  readonly startDate?: string;
};
export const Inline1015Schema: v.GenericSchema<unknown, Inline1015> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline1015Schema)),
  budget: v.number(),
  budgetType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  forecastType: v.string(),
  goal: v.optional(v.string()),
  optimizationRules: v.optional(v.array(v.lazy(() => Inline1021Schema))),
  startDate: v.optional(v.string()),
});

export type Inline1016 = {
  readonly landingPageUrl?: string;
};
export const Inline1016Schema: v.GenericSchema<unknown, Inline1016> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type Inline1017 = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline1017Schema: v.GenericSchema<unknown, Inline1017> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline1018 = {
  readonly expressions?: ReadonlyArray<Inline1018>;
};
export const Inline1018Schema: v.GenericSchema<unknown, Inline1018> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline1018Schema))),
});

export type Inline1019 = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline1019>;
};
export const Inline1019Schema: v.GenericSchema<unknown, Inline1019> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline1019Schema))),
});

export type Inline102 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline102Schema: v.GenericSchema<unknown, Inline102> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline1020 = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const Inline1020Schema: v.GenericSchema<unknown, Inline1020> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type Inline1021 = {
  readonly attributeName?: string;
  readonly criteria?: Inline1021;
};
export const Inline1021Schema: v.GenericSchema<unknown, Inline1021> = v.looseObject({
  attributeName: v.optional(v.string()),
  criteria: v.optional(v.lazy(() => Inline1021Schema)),
});

export type Inline1023 = {
  readonly brands?: ReadonlyArray<Inline1023>;
  readonly nextToken?: string;
};
export const Inline1023Schema: v.GenericSchema<unknown, Inline1023> = v.looseObject({
  brands: v.optional(v.array(v.lazy(() => Inline1023Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline1025 = {
  readonly displayName?: string;
  readonly primaryAsin?: string;
};
export const Inline1025Schema: v.GenericSchema<unknown, Inline1025> = v.looseObject({
  displayName: v.optional(v.string()),
  primaryAsin: v.optional(v.string()),
});

export type Inline1027 = {
  readonly requestId?: string;
  readonly suggestions?: ReadonlyArray<Inline1027>;
};
export const Inline1027Schema: v.GenericSchema<unknown, Inline1027> = v.looseObject({
  requestId: v.optional(v.string()),
  suggestions: v.optional(v.array(v.lazy(() => Inline1027Schema))),
});

export type Inline1029 = {
  readonly displayName?: string;
  readonly primaryAsin?: string;
};
export const Inline1029Schema: v.GenericSchema<unknown, Inline1029> = v.looseObject({
  displayName: v.optional(v.string()),
  primaryAsin: v.optional(v.string()),
});

export type Inline103 = {
  readonly assetId?: string;
  readonly crop?: Inline103;
  readonly url?: string;
};
export const Inline103Schema: v.GenericSchema<unknown, Inline103> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline103Schema)),
  url: v.optional(v.string()),
});

export type Inline1030 = {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
};
export const Inline1030Schema: v.GenericSchema<unknown, Inline1030> = v.looseObject({
  asins: v.array(v.string()),
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  goal: v.optional(v.string()),
  locale: v.optional(v.string()),
  maxNumSuggestions: v.optional(v.number()),
});

export type Inline1031 = {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
};
export const Inline1031Schema: v.GenericSchema<unknown, Inline1031> = v.looseObject({
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  goal: v.optional(v.string()),
  locale: v.optional(v.string()),
  maxNumSuggestions: v.optional(v.number()),
  url: v.string(),
});

export type Inline1034 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1034Schema: v.GenericSchema<unknown, Inline1034> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1037 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1037Schema: v.GenericSchema<unknown, Inline1037> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1038 = {
  readonly conditions?: ReadonlyArray<Inline1038>;
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline1038Schema: v.GenericSchema<unknown, Inline1038> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline1038Schema))),
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline104 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline104Schema: v.GenericSchema<unknown, Inline104> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1041 = {
  readonly conditions?: ReadonlyArray<Inline1041>;
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline1041Schema: v.GenericSchema<unknown, Inline1041> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline1041Schema))),
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline1042 = {
  readonly conditions?: ReadonlyArray<Inline1042>;
  readonly optimizationRuleId?: string;
};
export const Inline1042Schema: v.GenericSchema<unknown, Inline1042> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline1042Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline1045 = {
  readonly conditions?: ReadonlyArray<Inline1045>;
  readonly optimizationRuleId?: string;
};
export const Inline1045Schema: v.GenericSchema<unknown, Inline1045> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline1045Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline1046 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline1046Schema: v.GenericSchema<unknown, Inline1046> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline1049 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline1049Schema: v.GenericSchema<unknown, Inline1049> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline105 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline105Schema: v.GenericSchema<unknown, Inline105> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline1050 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline1050Schema: v.GenericSchema<unknown, Inline1050> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline1053 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline1053Schema: v.GenericSchema<unknown, Inline1053> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline1054 = {
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline1054Schema: v.GenericSchema<unknown, Inline1054> = v.looseObject({
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline1055 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1055Schema: v.GenericSchema<unknown, Inline1055> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1057 = {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline1057>;
  readonly totalCount?: number;
};
export const Inline1057Schema: v.GenericSchema<unknown, Inline1057> = v.looseObject({
  nextToken: v.optional(v.string()),
  optimizationRules: v.array(v.lazy(() => Inline1057Schema)),
  totalCount: v.optional(v.number()),
});

export type Inline1059 = {
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline1059Schema: v.GenericSchema<unknown, Inline1059> = v.looseObject({
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline106 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline106Schema: v.GenericSchema<unknown, Inline106> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1060 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1060Schema: v.GenericSchema<unknown, Inline1060> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1062 = {
  readonly categoryTree?: ReadonlyArray<Inline1062>;
  readonly nextToken?: string;
};
export const Inline1062Schema: v.GenericSchema<unknown, Inline1062> = v.looseObject({
  categoryTree: v.optional(v.array(v.lazy(() => Inline1062Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline1063 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline1063Schema: v.GenericSchema<unknown, Inline1063> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline1066 = {
  readonly ageRanges?: ReadonlyArray<Inline1066>;
  readonly brands?: ReadonlyArray<Inline1067>;
  readonly genres?: ReadonlyArray<Inline1068>;
  readonly nextToken?: string;
};
export const Inline1066Schema: v.GenericSchema<unknown, Inline1066> = v.looseObject({
  ageRanges: v.optional(v.array(v.lazy(() => Inline1066Schema))),
  brands: v.optional(v.array(v.lazy(() => Inline1067Schema))),
  genres: v.optional(v.array(v.lazy(() => Inline1068Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline1067 = {
  readonly brandRefinementId: string;
  readonly name?: string;
};
export const Inline1067Schema: v.GenericSchema<unknown, Inline1067> = v.looseObject({
  brandRefinementId: v.string(),
  name: v.optional(v.string()),
});

export type Inline1068 = {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
};
export const Inline1068Schema: v.GenericSchema<unknown, Inline1068> = v.looseObject({
  genreRefinementId: v.string(),
  name: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type Inline1070 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline1070Schema: v.GenericSchema<unknown, Inline1070> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline1071 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline1071Schema: v.GenericSchema<unknown, Inline1071> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline1073 = {
  readonly asinCounts?: Inline1073;
};
export const Inline1073Schema: v.GenericSchema<unknown, Inline1073> = v.looseObject({
  asinCounts: v.optional(v.lazy(() => Inline1073Schema)),
});

export type Inline1075 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline1075Schema: v.GenericSchema<unknown, Inline1075> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline1076 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline1076Schema: v.GenericSchema<unknown, Inline1076> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline1077 = {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
};
export const Inline1077Schema: v.GenericSchema<unknown, Inline1077> = v.looseObject({
  campaignId: v.string(),
  name: v.string(),
  state: v.string(),
});

export type Inline108 = {
  readonly errors?: ReadonlyArray<Inline108>;
  readonly index: number;
};
export const Inline108Schema: v.GenericSchema<unknown, Inline108> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline108Schema))),
  index: v.number(),
});

export type Inline1080 = {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
};
export const Inline1080Schema: v.GenericSchema<unknown, Inline1080> = v.looseObject({
  campaignId: v.string(),
  name: v.string(),
  state: v.string(),
});

export type Inline1081 = {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline1081Schema: v.GenericSchema<unknown, Inline1081> = v.looseObject({
  adGroupId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline1084 = {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline1084Schema: v.GenericSchema<unknown, Inline1084> = v.looseObject({
  adGroupId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline1085 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1085Schema: v.GenericSchema<unknown, Inline1085> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1088 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1088Schema: v.GenericSchema<unknown, Inline1088> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1089 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1089Schema: v.GenericSchema<unknown, Inline1089> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline109 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
};
export const Inline109Schema: v.GenericSchema<unknown, Inline109> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRuleId: v.string(),
});

export type Inline1090 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1090Schema: v.GenericSchema<unknown, Inline1090> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1091 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1091Schema: v.GenericSchema<unknown, Inline1091> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline1092 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1092Schema: v.GenericSchema<unknown, Inline1092> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1094 = {
  readonly adGroups?: ReadonlyArray<Inline1094>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const Inline1094Schema: v.GenericSchema<unknown, Inline1094> = v.looseObject({
  adGroups: v.optional(v.array(v.lazy(() => Inline1094Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type Inline1096 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1096Schema: v.GenericSchema<unknown, Inline1096> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1097 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1097Schema: v.GenericSchema<unknown, Inline1097> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1098 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1098Schema: v.GenericSchema<unknown, Inline1098> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline1099 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1099Schema: v.GenericSchema<unknown, Inline1099> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline11 = {
  readonly errorType: string;
  readonly errorValue: Inline11;
};
export const Inline11Schema: v.GenericSchema<unknown, Inline11> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline11Schema),
});

export type Inline1100 = {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline1100Schema: v.GenericSchema<unknown, Inline1100> = v.looseObject({
  adId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline1103 = {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline1103Schema: v.GenericSchema<unknown, Inline1103> = v.looseObject({
  adId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline1104 = {
  readonly adGroupId: string;
  readonly creative: Inline1104;
  readonly name: string;
  readonly state: string;
};
export const Inline1104Schema: v.GenericSchema<unknown, Inline1104> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1104Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1107 = {
  readonly adGroupId: string;
  readonly creative: Inline1107;
  readonly name: string;
  readonly state: string;
};
export const Inline1107Schema: v.GenericSchema<unknown, Inline1107> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1107Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1108 = {
  readonly adGroupId: string;
  readonly creative: Inline1108;
  readonly landingPage: Inline1109;
  readonly name: string;
  readonly state: string;
};
export const Inline1108Schema: v.GenericSchema<unknown, Inline1108> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1108Schema),
  landingPage: v.lazy(() => Inline1109Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1109 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1109Schema: v.GenericSchema<unknown, Inline1109> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline111 = {
  readonly errors?: ReadonlyArray<Inline111>;
  readonly index: number;
};
export const Inline111Schema: v.GenericSchema<unknown, Inline111> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline111Schema))),
  index: v.number(),
});

export type Inline1112 = {
  readonly adGroupId: string;
  readonly creative: Inline1112;
  readonly landingPage: Inline1113;
  readonly name: string;
  readonly state: string;
};
export const Inline1112Schema: v.GenericSchema<unknown, Inline1112> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1112Schema),
  landingPage: v.lazy(() => Inline1113Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1113 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1113Schema: v.GenericSchema<unknown, Inline1113> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1114 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1114Schema: v.GenericSchema<unknown, Inline1114> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1117 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1117Schema: v.GenericSchema<unknown, Inline1117> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1118 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1118Schema: v.GenericSchema<unknown, Inline1118> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1119 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1119Schema: v.GenericSchema<unknown, Inline1119> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline112 = {
  readonly cause: Inline112;
  readonly message: string;
  readonly reason: string;
};
export const Inline112Schema: v.GenericSchema<unknown, Inline112> = v.looseObject({
  cause: v.lazy(() => Inline112Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline1120 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1120Schema: v.GenericSchema<unknown, Inline1120> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1121 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1121Schema: v.GenericSchema<unknown, Inline1121> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline1122 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1122Schema: v.GenericSchema<unknown, Inline1122> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1124 = {
  readonly ads?: ReadonlyArray<Inline1124>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const Inline1124Schema: v.GenericSchema<unknown, Inline1124> = v.looseObject({
  ads: v.optional(v.array(v.lazy(() => Inline1124Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type Inline1125 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline1125Schema: v.GenericSchema<unknown, Inline1125> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline1126 = {
  readonly assetId?: string;
  readonly crop?: Inline1126;
  readonly url?: string;
};
export const Inline1126Schema: v.GenericSchema<unknown, Inline1126> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline1126Schema)),
  url: v.optional(v.string()),
});

export type Inline1127 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline1127Schema: v.GenericSchema<unknown, Inline1127> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1128 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline1128Schema: v.GenericSchema<unknown, Inline1128> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline1129 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1129Schema: v.GenericSchema<unknown, Inline1129> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline113 = {
  readonly cause: Inline113;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline113Schema: v.GenericSchema<unknown, Inline113> = v.looseObject({
  cause: v.lazy(() => Inline113Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline1131 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1131Schema: v.GenericSchema<unknown, Inline1131> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1132 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1132Schema: v.GenericSchema<unknown, Inline1132> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1133 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1133Schema: v.GenericSchema<unknown, Inline1133> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1134 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1134Schema: v.GenericSchema<unknown, Inline1134> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline1135 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1135Schema: v.GenericSchema<unknown, Inline1135> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1136 = {
  readonly adGroupId: string;
  readonly creative: Inline1136;
  readonly name: string;
  readonly state: string;
};
export const Inline1136Schema: v.GenericSchema<unknown, Inline1136> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1136Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1137 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1137Schema: v.GenericSchema<unknown, Inline1137> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline114 = {
  readonly cause: Inline114;
  readonly message: string;
  readonly reason: string;
};
export const Inline114Schema: v.GenericSchema<unknown, Inline114> = v.looseObject({
  cause: v.lazy(() => Inline114Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline1140 = {
  readonly adGroupId: string;
  readonly creative: Inline1140;
  readonly name: string;
  readonly state: string;
};
export const Inline1140Schema: v.GenericSchema<unknown, Inline1140> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1140Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1141 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1141Schema: v.GenericSchema<unknown, Inline1141> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1142 = {
  readonly adGroupId: string;
  readonly creative: Inline1142;
  readonly landingPage: Inline1144;
  readonly name: string;
  readonly state: string;
};
export const Inline1142Schema: v.GenericSchema<unknown, Inline1142> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1142Schema),
  landingPage: v.lazy(() => Inline1144Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1143 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline1143Schema: v.GenericSchema<unknown, Inline1143> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline1144 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1144Schema: v.GenericSchema<unknown, Inline1144> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1147 = {
  readonly adGroupId: string;
  readonly creative: Inline1147;
  readonly landingPage: Inline1149;
  readonly name: string;
  readonly state: string;
};
export const Inline1147Schema: v.GenericSchema<unknown, Inline1147> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1147Schema),
  landingPage: v.lazy(() => Inline1149Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1148 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline1148Schema: v.GenericSchema<unknown, Inline1148> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline1149 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1149Schema: v.GenericSchema<unknown, Inline1149> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline115 = {
  readonly cause: Inline115;
  readonly message: string;
  readonly reason: string;
};
export const Inline115Schema: v.GenericSchema<unknown, Inline115> = v.looseObject({
  cause: v.lazy(() => Inline115Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline1150 = {
  readonly adGroupId: string;
  readonly creative: Inline1150;
  readonly landingPage: Inline1152;
  readonly name: string;
  readonly state: string;
};
export const Inline1150Schema: v.GenericSchema<unknown, Inline1150> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1150Schema),
  landingPage: v.lazy(() => Inline1152Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1151 = {
  readonly assetId?: string;
  readonly crop?: Inline1151;
  readonly url?: string;
};
export const Inline1151Schema: v.GenericSchema<unknown, Inline1151> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline1151Schema)),
  url: v.optional(v.string()),
});

export type Inline1152 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1152Schema: v.GenericSchema<unknown, Inline1152> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1155 = {
  readonly adGroupId: string;
  readonly creative: Inline1155;
  readonly landingPage: Inline1157;
  readonly name: string;
  readonly state: string;
};
export const Inline1155Schema: v.GenericSchema<unknown, Inline1155> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1155Schema),
  landingPage: v.lazy(() => Inline1157Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1156 = {
  readonly assetId?: string;
  readonly crop?: Inline1156;
  readonly url?: string;
};
export const Inline1156Schema: v.GenericSchema<unknown, Inline1156> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline1156Schema)),
  url: v.optional(v.string()),
});

export type Inline1157 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1157Schema: v.GenericSchema<unknown, Inline1157> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1158 = {
  readonly adGroupId: string;
  readonly creative: Inline1158;
  readonly landingPage: Inline1160;
  readonly name: string;
  readonly state: string;
};
export const Inline1158Schema: v.GenericSchema<unknown, Inline1158> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1158Schema),
  landingPage: v.lazy(() => Inline1160Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1159 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline1159Schema: v.GenericSchema<unknown, Inline1159> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline116 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline116;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline116Schema: v.GenericSchema<unknown, Inline116> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline116Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline1160 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1160Schema: v.GenericSchema<unknown, Inline1160> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1163 = {
  readonly adGroupId: string;
  readonly creative: Inline1163;
  readonly landingPage: Inline1165;
  readonly name: string;
  readonly state: string;
};
export const Inline1163Schema: v.GenericSchema<unknown, Inline1163> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1163Schema),
  landingPage: v.lazy(() => Inline1165Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1164 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline1164Schema: v.GenericSchema<unknown, Inline1164> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1165 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1165Schema: v.GenericSchema<unknown, Inline1165> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1166 = {
  readonly adGroupId: string;
  readonly creative: Inline1166;
  readonly name: string;
  readonly state: string;
};
export const Inline1166Schema: v.GenericSchema<unknown, Inline1166> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1166Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline1169 = {
  readonly adGroupId: string;
  readonly creative: Inline1169;
  readonly name: string;
  readonly state: string;
};
export const Inline1169Schema: v.GenericSchema<unknown, Inline1169> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline1169Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline117 = {
  readonly campaign?: Inline117;
  readonly campaignId?: string;
  readonly index: number;
};
export const Inline117Schema: v.GenericSchema<unknown, Inline117> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline117Schema)),
  campaignId: v.optional(v.string()),
  index: v.number(),
});

export type Inline1170 = {
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
};
export const Inline1170Schema: v.GenericSchema<unknown, Inline1170> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline1170Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  goal: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline1173Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type Inline1171 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline1171Schema: v.GenericSchema<unknown, Inline1171> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1172 = {
  readonly audienceSegments?: ReadonlyArray<Inline1172>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline1172Schema: v.GenericSchema<unknown, Inline1172> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline1172Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1173 = {

};
export const Inline1173Schema: v.GenericSchema<unknown, Inline1173> = v.looseObject({

});

export type Inline1176 = {
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
};
export const Inline1176Schema: v.GenericSchema<unknown, Inline1176> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline1176Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  goal: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline1179Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type Inline1177 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline1177Schema: v.GenericSchema<unknown, Inline1177> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1178 = {
  readonly audienceSegments?: ReadonlyArray<Inline1178>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline1178Schema: v.GenericSchema<unknown, Inline1178> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline1178Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1179 = {

};
export const Inline1179Schema: v.GenericSchema<unknown, Inline1179> = v.looseObject({

});

export type Inline118 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline118Schema: v.GenericSchema<unknown, Inline118> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1180 = {
  readonly bidding?: Inline1180;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1183;
};
export const Inline1180Schema: v.GenericSchema<unknown, Inline1180> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline1180Schema)),
  budget: v.optional(v.number()),
  campaignId: v.string(),
  endDate: v.optional(v.string()),
  name: v.optional(v.string()),
  portfolioId: v.optional(v.string()),
  startDate: v.optional(v.string()),
  state: v.optional(v.string()),
  tags: v.optional(v.lazy(() => Inline1183Schema)),
});

export type Inline1181 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline1181Schema: v.GenericSchema<unknown, Inline1181> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1182 = {
  readonly audienceSegments?: ReadonlyArray<Inline1182>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline1182Schema: v.GenericSchema<unknown, Inline1182> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline1182Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1183 = {

};
export const Inline1183Schema: v.GenericSchema<unknown, Inline1183> = v.looseObject({

});

export type Inline1186 = {
  readonly bidding?: Inline1186;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline1189;
};
export const Inline1186Schema: v.GenericSchema<unknown, Inline1186> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline1186Schema)),
  budget: v.optional(v.number()),
  campaignId: v.string(),
  endDate: v.optional(v.string()),
  name: v.optional(v.string()),
  portfolioId: v.optional(v.string()),
  startDate: v.optional(v.string()),
  state: v.optional(v.string()),
  tags: v.optional(v.lazy(() => Inline1189Schema)),
});

export type Inline1187 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline1187Schema: v.GenericSchema<unknown, Inline1187> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1188 = {
  readonly audienceSegments?: ReadonlyArray<Inline1188>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline1188Schema: v.GenericSchema<unknown, Inline1188> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline1188Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1189 = {

};
export const Inline1189Schema: v.GenericSchema<unknown, Inline1189> = v.looseObject({

});

export type Inline119 = {
  readonly audienceSegments?: ReadonlyArray<Inline119>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline119Schema: v.GenericSchema<unknown, Inline119> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline119Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1190 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1190Schema: v.GenericSchema<unknown, Inline1190> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1193 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1193Schema: v.GenericSchema<unknown, Inline1193> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1194 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1194Schema: v.GenericSchema<unknown, Inline1194> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1195 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1195Schema: v.GenericSchema<unknown, Inline1195> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1196 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1196Schema: v.GenericSchema<unknown, Inline1196> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline1197 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1197Schema: v.GenericSchema<unknown, Inline1197> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1198 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1198Schema: v.GenericSchema<unknown, Inline1198> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline12 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline12;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline12Schema: v.GenericSchema<unknown, Inline12> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline12Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline120 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline120Schema: v.GenericSchema<unknown, Inline120> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline1200 = {
  readonly campaigns?: ReadonlyArray<Inline1200>;
  readonly nextToken?: string;
  readonly totalCount?: number;
};
export const Inline1200Schema: v.GenericSchema<unknown, Inline1200> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline1200Schema))),
  nextToken: v.optional(v.string()),
  totalCount: v.optional(v.number()),
});

export type Inline1201 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline1201Schema: v.GenericSchema<unknown, Inline1201> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline1202 = {
  readonly audienceSegments?: ReadonlyArray<Inline1202>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline1202Schema: v.GenericSchema<unknown, Inline1202> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline1202Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline1203 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline1203Schema: v.GenericSchema<unknown, Inline1203> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline1204 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline1204Schema: v.GenericSchema<unknown, Inline1204> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline1205 = {

};
export const Inline1205Schema: v.GenericSchema<unknown, Inline1205> = v.looseObject({

});

export type Inline1207 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1207Schema: v.GenericSchema<unknown, Inline1207> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1208 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1208Schema: v.GenericSchema<unknown, Inline1208> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1209 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline1209Schema: v.GenericSchema<unknown, Inline1209> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline121 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline121Schema: v.GenericSchema<unknown, Inline121> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline1210 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1210Schema: v.GenericSchema<unknown, Inline1210> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1211 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1211Schema: v.GenericSchema<unknown, Inline1211> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1213 = {
  readonly jobId?: string;
};
export const Inline1213Schema: v.GenericSchema<unknown, Inline1213> = v.looseObject({
  jobId: v.optional(v.string()),
});

export type Inline1216 = {
  readonly campaigns?: ReadonlyArray<Inline1216>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
};
export const Inline1216Schema: v.GenericSchema<unknown, Inline1216> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline1216Schema))),
  jobId: v.optional(v.string()),
  migrationJobStatus: v.optional(v.string()),
  nextToken: v.optional(v.string()),
});

export type Inline1219 = {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
};
export const Inline1219Schema: v.GenericSchema<unknown, Inline1219> = v.looseObject({
  jobId: v.optional(v.string()),
  migrationJobStatus: v.optional(v.string()),
  migrationJobStatusReason: v.optional(v.string()),
});

export type Inline122 = {

};
export const Inline122Schema: v.GenericSchema<unknown, Inline122> = v.looseObject({

});

export type Inline1222 = {
  readonly campaigns?: ReadonlyArray<Inline1222>;
  readonly nextToken?: string;
};
export const Inline1222Schema: v.GenericSchema<unknown, Inline1222> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline1222Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline1224 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1224Schema: v.GenericSchema<unknown, Inline1224> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1225 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1225Schema: v.GenericSchema<unknown, Inline1225> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1226 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1226Schema: v.GenericSchema<unknown, Inline1226> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1227 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1227Schema: v.GenericSchema<unknown, Inline1227> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1228 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1228Schema: v.GenericSchema<unknown, Inline1228> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1230 = {
  readonly migrations?: ReadonlyArray<Inline1230>;
  readonly nextToken?: string;
  readonly totalCount?: number;
};
export const Inline1230Schema: v.GenericSchema<unknown, Inline1230> = v.looseObject({
  migrations: v.optional(v.array(v.lazy(() => Inline1230Schema))),
  nextToken: v.optional(v.string()),
  totalCount: v.optional(v.number()),
});

export type Inline1231 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline1231Schema: v.GenericSchema<unknown, Inline1231> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline1232 = {
  readonly assetId?: string;
  readonly crop?: Inline1232;
  readonly url?: string;
};
export const Inline1232Schema: v.GenericSchema<unknown, Inline1232> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline1232Schema)),
  url: v.optional(v.string()),
});

export type Inline1233 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline1233Schema: v.GenericSchema<unknown, Inline1233> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1234 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline1234Schema: v.GenericSchema<unknown, Inline1234> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline1235 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline1235Schema: v.GenericSchema<unknown, Inline1235> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline1236 = {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
};
export const Inline1236Schema: v.GenericSchema<unknown, Inline1236> = v.looseObject({
  adGroupId: v.optional(v.string()),
  adId: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  errorCode: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  migrationType: v.optional(v.string()),
  optionType: v.string(),
  rationale: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type Inline1238 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1238Schema: v.GenericSchema<unknown, Inline1238> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1239 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1239Schema: v.GenericSchema<unknown, Inline1239> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline124 = {
  readonly errors?: ReadonlyArray<Inline124>;
  readonly index: number;
};
export const Inline124Schema: v.GenericSchema<unknown, Inline124> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline124Schema))),
  index: v.number(),
});

export type Inline1240 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1240Schema: v.GenericSchema<unknown, Inline1240> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1241 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1241Schema: v.GenericSchema<unknown, Inline1241> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline1242 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline1242Schema: v.GenericSchema<unknown, Inline1242> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline125 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline125;
  readonly optimizationRuleId: string;
};
export const Inline125Schema: v.GenericSchema<unknown, Inline125> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRule: v.lazy(() => Inline125Schema),
  optimizationRuleId: v.string(),
});

export type Inline127 = {
  readonly errors?: ReadonlyArray<Inline127>;
  readonly index: number;
};
export const Inline127Schema: v.GenericSchema<unknown, Inline127> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline127Schema))),
  index: v.number(),
});

export type Inline128 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline128;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline128Schema: v.GenericSchema<unknown, Inline128> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline128Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline129 = {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
};
export const Inline129Schema: v.GenericSchema<unknown, Inline129> = v.looseObject({
  adId: v.string(),
  creativeVersion: v.optional(v.string()),
  index: v.number(),
});

export type Inline131 = {
  readonly errors?: ReadonlyArray<Inline131>;
  readonly index: number;
};
export const Inline131Schema: v.GenericSchema<unknown, Inline131> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline131Schema))),
  index: v.number(),
});

export type Inline132 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
};
export const Inline132Schema: v.GenericSchema<unknown, Inline132> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRuleId: v.string(),
});

export type Inline134 = {
  readonly errors?: ReadonlyArray<Inline134>;
  readonly index: number;
};
export const Inline134Schema: v.GenericSchema<unknown, Inline134> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline134Schema))),
  index: v.number(),
});

export type Inline135 = {
  readonly index: number;
  readonly optimizationRule: Inline135;
  readonly optimizationRuleId: string;
};
export const Inline135Schema: v.GenericSchema<unknown, Inline135> = v.looseObject({
  index: v.number(),
  optimizationRule: v.lazy(() => Inline135Schema),
  optimizationRuleId: v.string(),
});

export type Inline137 = {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline137>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline138>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline139>;
};
export const Inline137Schema: v.GenericSchema<unknown, Inline137> = v.looseObject({
  bidAdjustmentsByPlacement: v.optional(v.array(v.lazy(() => Inline137Schema))),
  bidAdjustmentsByShopperSegment: v.optional(v.array(v.lazy(() => Inline138Schema))),
  bidOptimization: v.optional(v.boolean()),
  bidOptimizationStrategy: v.optional(v.string()),
  shopperCohortBidAdjustments: v.optional(v.array(v.lazy(() => Inline139Schema))),
});

export type Inline138 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline138Schema: v.GenericSchema<unknown, Inline138> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline139 = {
  readonly audienceSegments?: ReadonlyArray<Inline139>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline139Schema: v.GenericSchema<unknown, Inline139> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline139Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline14 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline14Schema: v.GenericSchema<unknown, Inline14> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline140 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline140Schema: v.GenericSchema<unknown, Inline140> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline141 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline141Schema: v.GenericSchema<unknown, Inline141> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline142 = {

};
export const Inline142Schema: v.GenericSchema<unknown, Inline142> = v.looseObject({

});

export type Inline146 = {
  readonly biddingError?: Inline146;
  readonly billingError?: Inline147;
  readonly budgetError?: Inline148;
  readonly dateError?: Inline149;
  readonly otherError?: Inline150;
  readonly rangeError?: Inline151;
};
export const Inline146Schema: v.GenericSchema<unknown, Inline146> = v.looseObject({
  biddingError: v.optional(v.lazy(() => Inline146Schema)),
  billingError: v.optional(v.lazy(() => Inline147Schema)),
  budgetError: v.optional(v.lazy(() => Inline148Schema)),
  dateError: v.optional(v.lazy(() => Inline149Schema)),
  otherError: v.optional(v.lazy(() => Inline150Schema)),
  rangeError: v.optional(v.lazy(() => Inline151Schema)),
});

export type Inline147 = {
  readonly cause: Inline147;
  readonly message: string;
  readonly reason: string;
};
export const Inline147Schema: v.GenericSchema<unknown, Inline147> = v.looseObject({
  cause: v.lazy(() => Inline147Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline148 = {
  readonly cause: Inline148;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline148Schema: v.GenericSchema<unknown, Inline148> = v.looseObject({
  cause: v.lazy(() => Inline148Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline149 = {
  readonly cause: Inline149;
  readonly message: string;
  readonly reason: string;
};
export const Inline149Schema: v.GenericSchema<unknown, Inline149> = v.looseObject({
  cause: v.lazy(() => Inline149Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline150 = {
  readonly cause: Inline150;
  readonly message: string;
  readonly reason: string;
};
export const Inline150Schema: v.GenericSchema<unknown, Inline150> = v.looseObject({
  cause: v.lazy(() => Inline150Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline151 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline151;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline151Schema: v.GenericSchema<unknown, Inline151> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline151Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline153 = {
  readonly cause: Inline153;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline153Schema: v.GenericSchema<unknown, Inline153> = v.looseObject({
  cause: v.lazy(() => Inline153Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline154 = {
  readonly cause: Inline154;
  readonly message: string;
  readonly reason: string;
};
export const Inline154Schema: v.GenericSchema<unknown, Inline154> = v.looseObject({
  cause: v.lazy(() => Inline154Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline155 = {
  readonly cause: Inline155;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline155Schema: v.GenericSchema<unknown, Inline155> = v.looseObject({
  cause: v.lazy(() => Inline155Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline156 = {
  readonly cause: Inline156;
  readonly message: string;
  readonly reason: string;
};
export const Inline156Schema: v.GenericSchema<unknown, Inline156> = v.looseObject({
  cause: v.lazy(() => Inline156Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline157 = {
  readonly cause: Inline157;
  readonly message: string;
  readonly reason: string;
};
export const Inline157Schema: v.GenericSchema<unknown, Inline157> = v.looseObject({
  cause: v.lazy(() => Inline157Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline158 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline158;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline158Schema: v.GenericSchema<unknown, Inline158> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline158Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline160 = {
  readonly errorType: string;
  readonly errorValue: Inline160;
};
export const Inline160Schema: v.GenericSchema<unknown, Inline160> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline160Schema),
});

export type Inline161 = {
  readonly cause: Inline161;
  readonly message: string;
  readonly reason: string;
};
export const Inline161Schema: v.GenericSchema<unknown, Inline161> = v.looseObject({
  cause: v.lazy(() => Inline161Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline162 = {
  readonly cause: Inline162;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline162Schema: v.GenericSchema<unknown, Inline162> = v.looseObject({
  cause: v.lazy(() => Inline162Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline163 = {
  readonly cause: Inline163;
  readonly message: string;
  readonly reason: string;
};
export const Inline163Schema: v.GenericSchema<unknown, Inline163> = v.looseObject({
  cause: v.lazy(() => Inline163Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline164 = {
  readonly cause: Inline164;
  readonly message: string;
  readonly reason: string;
};
export const Inline164Schema: v.GenericSchema<unknown, Inline164> = v.looseObject({
  cause: v.lazy(() => Inline164Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline165 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline165;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline165Schema: v.GenericSchema<unknown, Inline165> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline165Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline167 = {
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
};
export const Inline167Schema: v.GenericSchema<unknown, Inline167> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline167Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  campaignId: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  extendedData: v.optional(v.lazy(() => Inline170Schema)),
  goal: v.optional(v.string()),
  isMultiAdGroupsEnabled: v.optional(v.boolean()),
  kpi: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  ruleBasedBudget: v.optional(v.lazy(() => Inline171Schema)),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline172Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type Inline168 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline168Schema: v.GenericSchema<unknown, Inline168> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline169 = {
  readonly audienceSegments?: ReadonlyArray<Inline169>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline169Schema: v.GenericSchema<unknown, Inline169> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline169Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline17 = {
  readonly errorType: string;
  readonly errorValue: Inline17;
};
export const Inline17Schema: v.GenericSchema<unknown, Inline17> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline17Schema),
});

export type Inline170 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline170Schema: v.GenericSchema<unknown, Inline170> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline171 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline171Schema: v.GenericSchema<unknown, Inline171> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline172 = {

};
export const Inline172Schema: v.GenericSchema<unknown, Inline172> = v.looseObject({

});

export type Inline18 = {
  readonly cause: Inline18;
  readonly message: string;
  readonly reason: string;
};
export const Inline18Schema: v.GenericSchema<unknown, Inline18> = v.looseObject({
  cause: v.lazy(() => Inline18Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline182 = {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline182Schema: v.GenericSchema<unknown, Inline182> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline184 = {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline184;
  readonly brandName: string;
};
export const Inline184Schema: v.GenericSchema<unknown, Inline184> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline184Schema)),
  brandName: v.string(),
});

export type Inline186 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline186Schema: v.GenericSchema<unknown, Inline186> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline188 = {
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
};
export const Inline188Schema: v.GenericSchema<unknown, Inline188> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline188Schema)),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type Inline189 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline189Schema: v.GenericSchema<unknown, Inline189> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline19 = {
  readonly cause: Inline19;
  readonly message: string;
  readonly reason: string;
};
export const Inline19Schema: v.GenericSchema<unknown, Inline19> = v.looseObject({
  cause: v.lazy(() => Inline19Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline191 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline191Schema: v.GenericSchema<unknown, Inline191> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline193 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline193;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline194;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline193Schema: v.GenericSchema<unknown, Inline193> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline193Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.string(),
  landingPage: v.optional(v.lazy(() => Inline194Schema)),
  videoAssetIds: v.array(v.string()),
});

export type Inline194 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline194Schema: v.GenericSchema<unknown, Inline194> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline197 = {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline197Schema: v.GenericSchema<unknown, Inline197> = v.looseObject({
  associatedCampaignIds: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline199 = {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline199>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline200>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline201>;
};
export const Inline199Schema: v.GenericSchema<unknown, Inline199> = v.looseObject({
  bidAdjustmentsByPlacement: v.optional(v.array(v.lazy(() => Inline199Schema))),
  bidAdjustmentsByShopperSegment: v.optional(v.array(v.lazy(() => Inline200Schema))),
  bidOptimization: v.optional(v.boolean()),
  bidOptimizationStrategy: v.optional(v.string()),
  shopperCohortBidAdjustments: v.optional(v.array(v.lazy(() => Inline201Schema))),
});

export type Inline20 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline20;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline20Schema: v.GenericSchema<unknown, Inline20> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline20Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline200 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline200Schema: v.GenericSchema<unknown, Inline200> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline201 = {
  readonly audienceSegments?: ReadonlyArray<Inline201>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline201Schema: v.GenericSchema<unknown, Inline201> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline201Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline202 = {

};
export const Inline202Schema: v.GenericSchema<unknown, Inline202> = v.looseObject({

});

export type Inline204 = {
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
};
export const Inline204Schema: v.GenericSchema<unknown, Inline204> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline204Schema)),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline205Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
});

export type Inline205 = {
  readonly assetId?: string;
  readonly crop?: Inline205;
  readonly url?: string;
};
export const Inline205Schema: v.GenericSchema<unknown, Inline205> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline205Schema)),
  url: v.optional(v.string()),
});

export type Inline206 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline206Schema: v.GenericSchema<unknown, Inline206> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline208 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline208Schema: v.GenericSchema<unknown, Inline208> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline209 = {
  readonly assetId?: string;
  readonly crop?: Inline209;
  readonly url?: string;
};
export const Inline209Schema: v.GenericSchema<unknown, Inline209> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline209Schema)),
  url: v.optional(v.string()),
});

export type Inline211 = {
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
};
export const Inline211Schema: v.GenericSchema<unknown, Inline211> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline211Schema)),
  brandName: v.string(),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline212Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline213Schema)),
});

export type Inline212 = {
  readonly assetId?: string;
  readonly crop?: Inline212;
  readonly url?: string;
};
export const Inline212Schema: v.GenericSchema<unknown, Inline212> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline212Schema)),
  url: v.optional(v.string()),
});

export type Inline213 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline213Schema: v.GenericSchema<unknown, Inline213> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline216 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline216;
  readonly brandName: string;
  readonly landingPage?: Inline217;
  readonly title?: string;
};
export const Inline216Schema: v.GenericSchema<unknown, Inline216> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline216Schema)),
  brandName: v.string(),
  landingPage: v.optional(v.lazy(() => Inline217Schema)),
  title: v.optional(v.string()),
});

export type Inline217 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline217Schema: v.GenericSchema<unknown, Inline217> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline219 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline219Schema: v.GenericSchema<unknown, Inline219> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline22 = {
  readonly biddingError?: Inline22;
  readonly dateError?: Inline23;
  readonly otherError?: Inline24;
  readonly rangeError?: Inline25;
};
export const Inline22Schema: v.GenericSchema<unknown, Inline22> = v.looseObject({
  biddingError: v.optional(v.lazy(() => Inline22Schema)),
  dateError: v.optional(v.lazy(() => Inline23Schema)),
  otherError: v.optional(v.lazy(() => Inline24Schema)),
  rangeError: v.optional(v.lazy(() => Inline25Schema)),
});

export type Inline220 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline220Schema: v.GenericSchema<unknown, Inline220> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline222 = {
  readonly attributeName: string;
  readonly criteria: Inline222;
};
export const Inline222Schema: v.GenericSchema<unknown, Inline222> = v.looseObject({
  attributeName: v.string(),
  criteria: v.lazy(() => Inline222Schema),
});

export type Inline224 = {
  readonly conditions?: ReadonlyArray<Inline224>;
  readonly optimizationRuleId?: string;
};
export const Inline224Schema: v.GenericSchema<unknown, Inline224> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline224Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline227 = {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline227;
  readonly brandName?: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline228;
  readonly headline?: string;
};
export const Inline227Schema: v.GenericSchema<unknown, Inline227> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline227Schema)),
  brandName: v.optional(v.string()),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline228Schema)),
  headline: v.optional(v.string()),
});

export type Inline228 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline228Schema: v.GenericSchema<unknown, Inline228> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline229 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline229Schema: v.GenericSchema<unknown, Inline229> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline23 = {
  readonly cause: Inline23;
  readonly message: string;
  readonly reason: string;
};
export const Inline23Schema: v.GenericSchema<unknown, Inline23> = v.looseObject({
  cause: v.lazy(() => Inline23Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline231 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline231Schema: v.GenericSchema<unknown, Inline231> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline232 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline232Schema: v.GenericSchema<unknown, Inline232> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline234 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline234;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline235;
  readonly headline: string;
};
export const Inline234Schema: v.GenericSchema<unknown, Inline234> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline234Schema)),
  brandName: v.string(),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline235Schema)),
  headline: v.string(),
});

export type Inline235 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline235Schema: v.GenericSchema<unknown, Inline235> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline238 = {
  readonly budgetIncreaseBy?: Inline238;
  readonly duration?: Inline239;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline241;
  readonly recurrence?: Inline242;
  readonly ruleType?: string;
};
export const Inline238Schema: v.GenericSchema<unknown, Inline238> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline238Schema)),
  duration: v.optional(v.lazy(() => Inline239Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline241Schema)),
  recurrence: v.optional(v.lazy(() => Inline242Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline239 = {
  readonly dateRangeTypeRuleDuration?: Inline239;
  readonly eventTypeRuleDuration?: Inline240;
};
export const Inline239Schema: v.GenericSchema<unknown, Inline239> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline239Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline240Schema)),
});

export type Inline24 = {
  readonly cause: Inline24;
  readonly message: string;
  readonly reason: string;
};
export const Inline24Schema: v.GenericSchema<unknown, Inline24> = v.looseObject({
  cause: v.lazy(() => Inline24Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline240 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline240Schema: v.GenericSchema<unknown, Inline240> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline241 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline241Schema: v.GenericSchema<unknown, Inline241> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline242 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline242>;
  readonly type?: string;
};
export const Inline242Schema: v.GenericSchema<unknown, Inline242> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline242Schema))),
  type: v.optional(v.string()),
});

export type Inline244 = {
  readonly campaignId: string;
  readonly name: string;
  readonly state: string;
};
export const Inline244Schema: v.GenericSchema<unknown, Inline244> = v.looseObject({
  campaignId: v.string(),
  name: v.string(),
  state: v.string(),
});

export type Inline246 = {
  readonly error?: ReadonlyArray<Inline246>;
  readonly success?: ReadonlyArray<Inline250>;
};
export const Inline246Schema: v.GenericSchema<unknown, Inline246> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline246Schema))),
  success: v.optional(v.array(v.lazy(() => Inline250Schema))),
});

export type Inline247 = {
  readonly cause: Inline247;
  readonly message: string;
  readonly reason: string;
};
export const Inline247Schema: v.GenericSchema<unknown, Inline247> = v.looseObject({
  cause: v.lazy(() => Inline247Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline248 = {
  readonly cause: Inline248;
  readonly message: string;
  readonly reason: string;
};
export const Inline248Schema: v.GenericSchema<unknown, Inline248> = v.looseObject({
  cause: v.lazy(() => Inline248Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline249 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline249;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline249Schema: v.GenericSchema<unknown, Inline249> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline249Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline25 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline25;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline25Schema: v.GenericSchema<unknown, Inline25> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline25Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline250 = {
  readonly adGroup?: Inline250;
  readonly adGroupId?: string;
  readonly index: number;
};
export const Inline250Schema: v.GenericSchema<unknown, Inline250> = v.looseObject({
  adGroup: v.optional(v.lazy(() => Inline250Schema)),
  adGroupId: v.optional(v.string()),
  index: v.number(),
});

export type Inline252 = {
  readonly adGroupId: string;
  readonly creative: Inline252;
  readonly name: string;
  readonly state: string;
};
export const Inline252Schema: v.GenericSchema<unknown, Inline252> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline252Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline254 = {
  readonly error?: ReadonlyArray<Inline254>;
  readonly success?: ReadonlyArray<Inline256>;
};
export const Inline254Schema: v.GenericSchema<unknown, Inline254> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline254Schema))),
  success: v.optional(v.array(v.lazy(() => Inline256Schema))),
});

export type Inline255 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline255;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline255Schema: v.GenericSchema<unknown, Inline255> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline255Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline256 = {
  readonly ad?: Inline256;
  readonly adId?: string;
  readonly index: number;
};
export const Inline256Schema: v.GenericSchema<unknown, Inline256> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline256Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline257 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline257Schema: v.GenericSchema<unknown, Inline257> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline258 = {
  readonly assetId?: string;
  readonly crop?: Inline258;
  readonly url?: string;
};
export const Inline258Schema: v.GenericSchema<unknown, Inline258> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline258Schema)),
  url: v.optional(v.string()),
});

export type Inline259 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline259Schema: v.GenericSchema<unknown, Inline259> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline260 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline260Schema: v.GenericSchema<unknown, Inline260> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline261 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline261Schema: v.GenericSchema<unknown, Inline261> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline263 = {
  readonly adGroupId: string;
  readonly creative: Inline263;
  readonly landingPage: Inline264;
  readonly name: string;
  readonly state: string;
};
export const Inline263Schema: v.GenericSchema<unknown, Inline263> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline263Schema),
  landingPage: v.lazy(() => Inline264Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline264 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline264Schema: v.GenericSchema<unknown, Inline264> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline266 = {
  readonly error?: ReadonlyArray<Inline266>;
  readonly success?: ReadonlyArray<Inline268>;
};
export const Inline266Schema: v.GenericSchema<unknown, Inline266> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline266Schema))),
  success: v.optional(v.array(v.lazy(() => Inline268Schema))),
});

export type Inline267 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline267;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline267Schema: v.GenericSchema<unknown, Inline267> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline267Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline268 = {
  readonly ad?: Inline268;
  readonly adId?: string;
  readonly index: number;
};
export const Inline268Schema: v.GenericSchema<unknown, Inline268> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline268Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline269 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline269Schema: v.GenericSchema<unknown, Inline269> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline27 = {
  readonly cause: Inline27;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline27Schema: v.GenericSchema<unknown, Inline27> = v.looseObject({
  cause: v.lazy(() => Inline27Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline270 = {
  readonly assetId?: string;
  readonly crop?: Inline270;
  readonly url?: string;
};
export const Inline270Schema: v.GenericSchema<unknown, Inline270> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline270Schema)),
  url: v.optional(v.string()),
});

export type Inline271 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline271Schema: v.GenericSchema<unknown, Inline271> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline272 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline272Schema: v.GenericSchema<unknown, Inline272> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline273 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline273Schema: v.GenericSchema<unknown, Inline273> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline275 = {
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
};
export const Inline275Schema: v.GenericSchema<unknown, Inline275> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline275Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  goal: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline278Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type Inline276 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline276Schema: v.GenericSchema<unknown, Inline276> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline277 = {
  readonly audienceSegments?: ReadonlyArray<Inline277>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline277Schema: v.GenericSchema<unknown, Inline277> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline277Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline278 = {

};
export const Inline278Schema: v.GenericSchema<unknown, Inline278> = v.looseObject({

});

export type Inline28 = {
  readonly cause: Inline28;
  readonly message: string;
  readonly reason: string;
};
export const Inline28Schema: v.GenericSchema<unknown, Inline28> = v.looseObject({
  cause: v.lazy(() => Inline28Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline280 = {
  readonly error?: ReadonlyArray<Inline280>;
  readonly success?: ReadonlyArray<Inline286>;
};
export const Inline280Schema: v.GenericSchema<unknown, Inline280> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline280Schema))),
  success: v.optional(v.array(v.lazy(() => Inline286Schema))),
});

export type Inline281 = {
  readonly cause: Inline281;
  readonly message: string;
  readonly reason: string;
};
export const Inline281Schema: v.GenericSchema<unknown, Inline281> = v.looseObject({
  cause: v.lazy(() => Inline281Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline282 = {
  readonly cause: Inline282;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline282Schema: v.GenericSchema<unknown, Inline282> = v.looseObject({
  cause: v.lazy(() => Inline282Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline283 = {
  readonly cause: Inline283;
  readonly message: string;
  readonly reason: string;
};
export const Inline283Schema: v.GenericSchema<unknown, Inline283> = v.looseObject({
  cause: v.lazy(() => Inline283Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline284 = {
  readonly cause: Inline284;
  readonly message: string;
  readonly reason: string;
};
export const Inline284Schema: v.GenericSchema<unknown, Inline284> = v.looseObject({
  cause: v.lazy(() => Inline284Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline285 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline285;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline285Schema: v.GenericSchema<unknown, Inline285> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline285Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline286 = {
  readonly campaign?: Inline286;
  readonly campaignId?: string;
  readonly index: number;
};
export const Inline286Schema: v.GenericSchema<unknown, Inline286> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline286Schema)),
  campaignId: v.optional(v.string()),
  index: v.number(),
});

export type Inline287 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline287Schema: v.GenericSchema<unknown, Inline287> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline288 = {
  readonly audienceSegments?: ReadonlyArray<Inline288>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline288Schema: v.GenericSchema<unknown, Inline288> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline288Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline289 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline289Schema: v.GenericSchema<unknown, Inline289> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline29 = {
  readonly cause: Inline29;
  readonly message: string;
  readonly reason: string;
};
export const Inline29Schema: v.GenericSchema<unknown, Inline29> = v.looseObject({
  cause: v.lazy(() => Inline29Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline290 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline290Schema: v.GenericSchema<unknown, Inline290> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline291 = {

};
export const Inline291Schema: v.GenericSchema<unknown, Inline291> = v.looseObject({

});

export type Inline293 = {
  readonly adGroupId: string;
  readonly creative: Inline293;
  readonly landingPage: Inline295;
  readonly name: string;
  readonly state: string;
};
export const Inline293Schema: v.GenericSchema<unknown, Inline293> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline293Schema),
  landingPage: v.lazy(() => Inline295Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline294 = {
  readonly assetId?: string;
  readonly crop?: Inline294;
  readonly url?: string;
};
export const Inline294Schema: v.GenericSchema<unknown, Inline294> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline294Schema)),
  url: v.optional(v.string()),
});

export type Inline295 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline295Schema: v.GenericSchema<unknown, Inline295> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline297 = {
  readonly error?: ReadonlyArray<Inline297>;
  readonly success?: ReadonlyArray<Inline299>;
};
export const Inline297Schema: v.GenericSchema<unknown, Inline297> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline297Schema))),
  success: v.optional(v.array(v.lazy(() => Inline299Schema))),
});

export type Inline298 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline298;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline298Schema: v.GenericSchema<unknown, Inline298> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline298Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline299 = {
  readonly ad?: Inline299;
  readonly adId?: string;
  readonly index: number;
};
export const Inline299Schema: v.GenericSchema<unknown, Inline299> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline299Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline3 = {
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
};
export const Inline3Schema: v.GenericSchema<unknown, Inline3> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline3Schema)),
  brandLogoUrl: v.optional(v.string()),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  creativeStatus: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline4Schema)),
  customImageUrl: v.optional(v.string()),
  customImages: v.optional(v.array(v.lazy(() => Inline5Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  originalHeadline: v.optional(v.string()),
  originalHeadlines: v.optional(v.array(v.string())),
  originalVideoAssetIds: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline6Schema))),
  title: v.optional(v.string()),
  type: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type Inline30 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline30;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline30Schema: v.GenericSchema<unknown, Inline30> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline30Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline300 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline300Schema: v.GenericSchema<unknown, Inline300> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline301 = {
  readonly assetId?: string;
  readonly crop?: Inline301;
  readonly url?: string;
};
export const Inline301Schema: v.GenericSchema<unknown, Inline301> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline301Schema)),
  url: v.optional(v.string()),
});

export type Inline302 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline302Schema: v.GenericSchema<unknown, Inline302> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline303 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline303Schema: v.GenericSchema<unknown, Inline303> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline304 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline304Schema: v.GenericSchema<unknown, Inline304> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline306 = {
  readonly adGroupId: string;
  readonly creative: Inline306;
  readonly name: string;
  readonly state: string;
};
export const Inline306Schema: v.GenericSchema<unknown, Inline306> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline306Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline307 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline307Schema: v.GenericSchema<unknown, Inline307> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline309 = {
  readonly error?: ReadonlyArray<Inline309>;
  readonly success?: ReadonlyArray<Inline311>;
};
export const Inline309Schema: v.GenericSchema<unknown, Inline309> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline309Schema))),
  success: v.optional(v.array(v.lazy(() => Inline311Schema))),
});

export type Inline310 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline310;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline310Schema: v.GenericSchema<unknown, Inline310> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline310Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline311 = {
  readonly ad?: Inline311;
  readonly adId?: string;
  readonly index: number;
};
export const Inline311Schema: v.GenericSchema<unknown, Inline311> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline311Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline312 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline312Schema: v.GenericSchema<unknown, Inline312> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline313 = {
  readonly assetId?: string;
  readonly crop?: Inline313;
  readonly url?: string;
};
export const Inline313Schema: v.GenericSchema<unknown, Inline313> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline313Schema)),
  url: v.optional(v.string()),
});

export type Inline314 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline314Schema: v.GenericSchema<unknown, Inline314> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline315 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline315Schema: v.GenericSchema<unknown, Inline315> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline316 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline316Schema: v.GenericSchema<unknown, Inline316> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline318 = {
  readonly conditions?: ReadonlyArray<Inline318>;
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline318Schema: v.GenericSchema<unknown, Inline318> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline318Schema))),
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline320 = {
  readonly error?: ReadonlyArray<Inline320>;
  readonly success?: ReadonlyArray<Inline321>;
};
export const Inline320Schema: v.GenericSchema<unknown, Inline320> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline320Schema))),
  success: v.optional(v.array(v.lazy(() => Inline321Schema))),
});

export type Inline321 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRule: Inline321;
  readonly optimizationRuleId: string;
};
export const Inline321Schema: v.GenericSchema<unknown, Inline321> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRule: v.lazy(() => Inline321Schema),
  optimizationRuleId: v.string(),
});

export type Inline323 = {
  readonly adGroupId: string;
  readonly creative: Inline323;
  readonly landingPage: Inline325;
  readonly name: string;
  readonly state: string;
};
export const Inline323Schema: v.GenericSchema<unknown, Inline323> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline323Schema),
  landingPage: v.lazy(() => Inline325Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline324 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline324Schema: v.GenericSchema<unknown, Inline324> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline325 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline325Schema: v.GenericSchema<unknown, Inline325> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline327 = {
  readonly error?: ReadonlyArray<Inline327>;
  readonly success?: ReadonlyArray<Inline329>;
};
export const Inline327Schema: v.GenericSchema<unknown, Inline327> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline327Schema))),
  success: v.optional(v.array(v.lazy(() => Inline329Schema))),
});

export type Inline328 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline328;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline328Schema: v.GenericSchema<unknown, Inline328> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline328Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline329 = {
  readonly ad?: Inline329;
  readonly adId?: string;
  readonly index: number;
};
export const Inline329Schema: v.GenericSchema<unknown, Inline329> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline329Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline33 = {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline33;
  readonly name: string;
  readonly state: string;
};
export const Inline33Schema: v.GenericSchema<unknown, Inline33> = v.looseObject({
  adGroupId: v.string(),
  campaignId: v.string(),
  extendedData: v.optional(v.lazy(() => Inline33Schema)),
  name: v.string(),
  state: v.string(),
});

export type Inline330 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline330Schema: v.GenericSchema<unknown, Inline330> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline331 = {
  readonly assetId?: string;
  readonly crop?: Inline331;
  readonly url?: string;
};
export const Inline331Schema: v.GenericSchema<unknown, Inline331> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline331Schema)),
  url: v.optional(v.string()),
});

export type Inline332 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline332Schema: v.GenericSchema<unknown, Inline332> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline333 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline333Schema: v.GenericSchema<unknown, Inline333> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline334 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline334Schema: v.GenericSchema<unknown, Inline334> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline336 = {
  readonly adGroupId: string;
  readonly creative: Inline336;
  readonly landingPage: Inline338;
  readonly name: string;
  readonly state: string;
};
export const Inline336Schema: v.GenericSchema<unknown, Inline336> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline336Schema),
  landingPage: v.lazy(() => Inline338Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline337 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline337Schema: v.GenericSchema<unknown, Inline337> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline338 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline338Schema: v.GenericSchema<unknown, Inline338> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline340 = {
  readonly error?: ReadonlyArray<Inline340>;
  readonly success?: ReadonlyArray<Inline342>;
};
export const Inline340Schema: v.GenericSchema<unknown, Inline340> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline340Schema))),
  success: v.optional(v.array(v.lazy(() => Inline342Schema))),
});

export type Inline341 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline341;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline341Schema: v.GenericSchema<unknown, Inline341> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline341Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline342 = {
  readonly ad?: Inline342;
  readonly adId?: string;
  readonly index: number;
};
export const Inline342Schema: v.GenericSchema<unknown, Inline342> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline342Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline343 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline343Schema: v.GenericSchema<unknown, Inline343> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline344 = {
  readonly assetId?: string;
  readonly crop?: Inline344;
  readonly url?: string;
};
export const Inline344Schema: v.GenericSchema<unknown, Inline344> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline344Schema)),
  url: v.optional(v.string()),
});

export type Inline345 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline345Schema: v.GenericSchema<unknown, Inline345> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline346 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline346Schema: v.GenericSchema<unknown, Inline346> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline347 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline347Schema: v.GenericSchema<unknown, Inline347> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline349 = {
  readonly adGroupId: string;
  readonly creative: Inline349;
  readonly name: string;
  readonly state: string;
};
export const Inline349Schema: v.GenericSchema<unknown, Inline349> = v.looseObject({
  adGroupId: v.string(),
  creative: v.lazy(() => Inline349Schema),
  name: v.string(),
  state: v.string(),
});

export type Inline35 = {
  readonly otherError?: Inline35;
  readonly rangeError?: Inline36;
};
export const Inline35Schema: v.GenericSchema<unknown, Inline35> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline35Schema)),
  rangeError: v.optional(v.lazy(() => Inline36Schema)),
});

export type Inline351 = {
  readonly error?: ReadonlyArray<Inline351>;
  readonly success?: ReadonlyArray<Inline353>;
};
export const Inline351Schema: v.GenericSchema<unknown, Inline351> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline351Schema))),
  success: v.optional(v.array(v.lazy(() => Inline353Schema))),
});

export type Inline352 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline352;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline352Schema: v.GenericSchema<unknown, Inline352> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline352Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline353 = {
  readonly ad?: Inline353;
  readonly adId?: string;
  readonly index: number;
};
export const Inline353Schema: v.GenericSchema<unknown, Inline353> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline353Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline354 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline354Schema: v.GenericSchema<unknown, Inline354> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline355 = {
  readonly assetId?: string;
  readonly crop?: Inline355;
  readonly url?: string;
};
export const Inline355Schema: v.GenericSchema<unknown, Inline355> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline355Schema)),
  url: v.optional(v.string()),
});

export type Inline356 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline356Schema: v.GenericSchema<unknown, Inline356> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline357 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline357Schema: v.GenericSchema<unknown, Inline357> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline358 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline358Schema: v.GenericSchema<unknown, Inline358> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline36 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline36;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline36Schema: v.GenericSchema<unknown, Inline36> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline36Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline360 = {
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline360;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly subpages?: ReadonlyArray<Inline361>;
};
export const Inline360Schema: v.GenericSchema<unknown, Inline360> = v.looseObject({
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline360Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline361Schema))),
});

export type Inline361 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline361Schema: v.GenericSchema<unknown, Inline361> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline362 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline362Schema: v.GenericSchema<unknown, Inline362> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline364 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline364Schema: v.GenericSchema<unknown, Inline364> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline365 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline365Schema: v.GenericSchema<unknown, Inline365> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline367 = {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline367;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline368;
  readonly subpages: ReadonlyArray<Inline369>;
};
export const Inline367Schema: v.GenericSchema<unknown, Inline367> = v.looseObject({
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline367Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline368Schema)),
  subpages: v.array(v.lazy(() => Inline369Schema)),
});

export type Inline368 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline368Schema: v.GenericSchema<unknown, Inline368> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline369 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline369Schema: v.GenericSchema<unknown, Inline369> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline372 = {
  readonly asins?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline372;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds?: ReadonlyArray<string>;
};
export const Inline372Schema: v.GenericSchema<unknown, Inline372> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline372Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type Inline374 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline374Schema: v.GenericSchema<unknown, Inline374> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline376 = {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline376;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline376Schema: v.GenericSchema<unknown, Inline376> = v.looseObject({
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline376Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.array(v.string()),
});

export type Inline379 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline379Schema: v.GenericSchema<unknown, Inline379> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline38 = {
  readonly cause: Inline38;
  readonly message: string;
  readonly reason: string;
};
export const Inline38Schema: v.GenericSchema<unknown, Inline38> = v.looseObject({
  cause: v.lazy(() => Inline38Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline380 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline380Schema: v.GenericSchema<unknown, Inline380> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline381 = {
  readonly assetId?: string;
  readonly crop?: Inline381;
  readonly url?: string;
};
export const Inline381Schema: v.GenericSchema<unknown, Inline381> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline381Schema)),
  url: v.optional(v.string()),
});

export type Inline382 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline382Schema: v.GenericSchema<unknown, Inline382> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline384 = {
  readonly errorType: string;
  readonly errorValue: Inline384;
};
export const Inline384Schema: v.GenericSchema<unknown, Inline384> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline384Schema),
});

export type Inline385 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline385;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline385Schema: v.GenericSchema<unknown, Inline385> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline385Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline39 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline39;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline39Schema: v.GenericSchema<unknown, Inline39> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline39Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline390 = {
  readonly otherError?: Inline390;
  readonly rangeError?: Inline391;
};
export const Inline390Schema: v.GenericSchema<unknown, Inline390> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline390Schema)),
  rangeError: v.optional(v.lazy(() => Inline391Schema)),
});

export type Inline391 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline391;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline391Schema: v.GenericSchema<unknown, Inline391> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline391Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline393 = {
  readonly cause: Inline393;
  readonly message: string;
  readonly reason: string;
};
export const Inline393Schema: v.GenericSchema<unknown, Inline393> = v.looseObject({
  cause: v.lazy(() => Inline393Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline394 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline394;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline394Schema: v.GenericSchema<unknown, Inline394> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline394Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline396 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline396Schema: v.GenericSchema<unknown, Inline396> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline397 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline397Schema: v.GenericSchema<unknown, Inline397> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline398 = {
  readonly assetId?: string;
  readonly crop?: Inline398;
  readonly url?: string;
};
export const Inline398Schema: v.GenericSchema<unknown, Inline398> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline398Schema)),
  url: v.optional(v.string()),
});

export type Inline399 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
};
export const Inline399Schema: v.GenericSchema<unknown, Inline399> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline4 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline4Schema: v.GenericSchema<unknown, Inline4> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline400 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline400Schema: v.GenericSchema<unknown, Inline400> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline406 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline406Schema: v.GenericSchema<unknown, Inline406> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline409 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline409Schema: v.GenericSchema<unknown, Inline409> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline413 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline413Schema: v.GenericSchema<unknown, Inline413> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline415 = {
  readonly error?: ReadonlyArray<Inline415>;
  readonly success?: ReadonlyArray<Inline419>;
};
export const Inline415Schema: v.GenericSchema<unknown, Inline415> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline415Schema))),
  success: v.optional(v.array(v.lazy(() => Inline419Schema))),
});

export type Inline416 = {
  readonly cause: Inline416;
  readonly message: string;
  readonly reason: string;
};
export const Inline416Schema: v.GenericSchema<unknown, Inline416> = v.looseObject({
  cause: v.lazy(() => Inline416Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline417 = {
  readonly cause: Inline417;
  readonly message: string;
  readonly reason: string;
};
export const Inline417Schema: v.GenericSchema<unknown, Inline417> = v.looseObject({
  cause: v.lazy(() => Inline417Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline418 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline418;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline418Schema: v.GenericSchema<unknown, Inline418> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline418Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline419 = {
  readonly adGroup?: Inline419;
  readonly adGroupId?: string;
  readonly index: number;
};
export const Inline419Schema: v.GenericSchema<unknown, Inline419> = v.looseObject({
  adGroup: v.optional(v.lazy(() => Inline419Schema)),
  adGroupId: v.optional(v.string()),
  index: v.number(),
});

export type Inline42 = {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline42;
  readonly extendedData?: Inline46;
  readonly landingPage?: Inline47;
  readonly name: string;
  readonly state: string;
};
export const Inline42Schema: v.GenericSchema<unknown, Inline42> = v.looseObject({
  adGroupId: v.string(),
  adId: v.string(),
  campaignId: v.string(),
  creative: v.optional(v.lazy(() => Inline42Schema)),
  extendedData: v.optional(v.lazy(() => Inline46Schema)),
  landingPage: v.optional(v.lazy(() => Inline47Schema)),
  name: v.string(),
  state: v.string(),
});

export type Inline421 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline421Schema: v.GenericSchema<unknown, Inline421> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline423 = {
  readonly error?: ReadonlyArray<Inline423>;
  readonly success?: ReadonlyArray<Inline425>;
};
export const Inline423Schema: v.GenericSchema<unknown, Inline423> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline423Schema))),
  success: v.optional(v.array(v.lazy(() => Inline425Schema))),
});

export type Inline424 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline424;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline424Schema: v.GenericSchema<unknown, Inline424> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline424Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline425 = {
  readonly ad?: Inline425;
  readonly adId?: string;
  readonly index: number;
};
export const Inline425Schema: v.GenericSchema<unknown, Inline425> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline425Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline426 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline426Schema: v.GenericSchema<unknown, Inline426> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline427 = {
  readonly assetId?: string;
  readonly crop?: Inline427;
  readonly url?: string;
};
export const Inline427Schema: v.GenericSchema<unknown, Inline427> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline427Schema)),
  url: v.optional(v.string()),
});

export type Inline428 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline428Schema: v.GenericSchema<unknown, Inline428> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline429 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline429Schema: v.GenericSchema<unknown, Inline429> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline43 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline43Schema: v.GenericSchema<unknown, Inline43> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline430 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline430Schema: v.GenericSchema<unknown, Inline430> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline432 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline432Schema: v.GenericSchema<unknown, Inline432> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline434 = {
  readonly error?: ReadonlyArray<Inline434>;
  readonly success?: ReadonlyArray<Inline440>;
};
export const Inline434Schema: v.GenericSchema<unknown, Inline434> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline434Schema))),
  success: v.optional(v.array(v.lazy(() => Inline440Schema))),
});

export type Inline435 = {
  readonly cause: Inline435;
  readonly message: string;
  readonly reason: string;
};
export const Inline435Schema: v.GenericSchema<unknown, Inline435> = v.looseObject({
  cause: v.lazy(() => Inline435Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline436 = {
  readonly cause: Inline436;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline436Schema: v.GenericSchema<unknown, Inline436> = v.looseObject({
  cause: v.lazy(() => Inline436Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline437 = {
  readonly cause: Inline437;
  readonly message: string;
  readonly reason: string;
};
export const Inline437Schema: v.GenericSchema<unknown, Inline437> = v.looseObject({
  cause: v.lazy(() => Inline437Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline438 = {
  readonly cause: Inline438;
  readonly message: string;
  readonly reason: string;
};
export const Inline438Schema: v.GenericSchema<unknown, Inline438> = v.looseObject({
  cause: v.lazy(() => Inline438Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline439 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline439;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline439Schema: v.GenericSchema<unknown, Inline439> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline439Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline44 = {
  readonly assetId?: string;
  readonly crop?: Inline44;
  readonly url?: string;
};
export const Inline44Schema: v.GenericSchema<unknown, Inline44> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline44Schema)),
  url: v.optional(v.string()),
});

export type Inline440 = {
  readonly campaign?: Inline440;
  readonly campaignId?: string;
  readonly index: number;
};
export const Inline440Schema: v.GenericSchema<unknown, Inline440> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline440Schema)),
  campaignId: v.optional(v.string()),
  index: v.number(),
});

export type Inline441 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline441Schema: v.GenericSchema<unknown, Inline441> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline442 = {
  readonly audienceSegments?: ReadonlyArray<Inline442>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline442Schema: v.GenericSchema<unknown, Inline442> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline442Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline443 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline443Schema: v.GenericSchema<unknown, Inline443> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline444 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline444Schema: v.GenericSchema<unknown, Inline444> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline445 = {

};
export const Inline445Schema: v.GenericSchema<unknown, Inline445> = v.looseObject({

});

export type Inline448 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline448Schema: v.GenericSchema<unknown, Inline448> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline45 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline45Schema: v.GenericSchema<unknown, Inline45> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline450 = {
  readonly error?: ReadonlyArray<Inline450>;
  readonly success?: ReadonlyArray<Inline451>;
};
export const Inline450Schema: v.GenericSchema<unknown, Inline450> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline450Schema))),
  success: v.optional(v.array(v.lazy(() => Inline451Schema))),
});

export type Inline451 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
};
export const Inline451Schema: v.GenericSchema<unknown, Inline451> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRuleId: v.string(),
});

export type Inline458 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline458Schema: v.GenericSchema<unknown, Inline458> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline459 = {
  readonly assetId?: string;
  readonly crop?: Inline459;
  readonly url?: string;
};
export const Inline459Schema: v.GenericSchema<unknown, Inline459> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline459Schema)),
  url: v.optional(v.string()),
});

export type Inline46 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline46Schema: v.GenericSchema<unknown, Inline46> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline460 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline460Schema: v.GenericSchema<unknown, Inline460> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline463 = {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
};
export const Inline463Schema: v.GenericSchema<unknown, Inline463> = v.looseObject({
  campaignId: v.string(),
  code: v.string(),
  details: v.string(),
  index: v.number(),
});

export type Inline464 = {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline464;
  readonly suggestedBudget: number;
};
export const Inline464Schema: v.GenericSchema<unknown, Inline464> = v.looseObject({
  campaignId: v.string(),
  index: v.number(),
  sevenDaysMissedOpportunities: v.lazy(() => Inline464Schema),
  suggestedBudget: v.number(),
});

export type Inline466 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline466;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline466Schema: v.GenericSchema<unknown, Inline466> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline466Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline467 = {
  readonly dateRangeTypeRuleDuration?: Inline467;
  readonly eventTypeRuleDuration?: Inline468;
};
export const Inline467Schema: v.GenericSchema<unknown, Inline467> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline467Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline468Schema)),
});

export type Inline468 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline468Schema: v.GenericSchema<unknown, Inline468> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline469 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline469Schema: v.GenericSchema<unknown, Inline469> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline47 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline47Schema: v.GenericSchema<unknown, Inline47> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline470 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline470>;
  readonly type?: string;
};
export const Inline470Schema: v.GenericSchema<unknown, Inline470> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline470Schema))),
  type: v.optional(v.string()),
});

export type Inline472 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline472;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline472Schema: v.GenericSchema<unknown, Inline472> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline472Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline473 = {
  readonly dateRangeTypeRuleDuration?: Inline473;
  readonly eventTypeRuleDuration?: Inline474;
};
export const Inline473Schema: v.GenericSchema<unknown, Inline473> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline473Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline474Schema)),
});

export type Inline474 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline474Schema: v.GenericSchema<unknown, Inline474> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline475 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline475Schema: v.GenericSchema<unknown, Inline475> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline476 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline476>;
  readonly type?: string;
};
export const Inline476Schema: v.GenericSchema<unknown, Inline476> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline476Schema))),
  type: v.optional(v.string()),
});

export type Inline479 = {
  readonly displayName?: string;
  readonly primaryAsin?: string;
};
export const Inline479Schema: v.GenericSchema<unknown, Inline479> = v.looseObject({
  displayName: v.optional(v.string()),
  primaryAsin: v.optional(v.string()),
});

export type Inline481 = {
  readonly headline?: string;
  readonly headlineId?: string;
};
export const Inline481Schema: v.GenericSchema<unknown, Inline481> = v.looseObject({
  headline: v.optional(v.string()),
  headlineId: v.optional(v.string()),
});

export type Inline486 = {
  readonly otherError?: Inline486;
  readonly rangeError?: Inline487;
};
export const Inline486Schema: v.GenericSchema<unknown, Inline486> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline486Schema)),
  rangeError: v.optional(v.lazy(() => Inline487Schema)),
});

export type Inline487 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline487;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline487Schema: v.GenericSchema<unknown, Inline487> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline487Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline490 = {
  readonly cause: Inline490;
  readonly message: string;
  readonly reason: string;
};
export const Inline490Schema: v.GenericSchema<unknown, Inline490> = v.looseObject({
  cause: v.lazy(() => Inline490Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline491 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline491;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline491Schema: v.GenericSchema<unknown, Inline491> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline491Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline498 = {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline498;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
};
export const Inline498Schema: v.GenericSchema<unknown, Inline498> = v.looseObject({
  adId: v.optional(v.string()),
  creationTime: v.optional(v.number()),
  creativeProperties: v.optional(v.lazy(() => Inline498Schema)),
  creativeStatus: v.optional(v.string()),
  creativeType: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
  lastUpdateTime: v.optional(v.number()),
});

export type Inline499 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline499Schema: v.GenericSchema<unknown, Inline499> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline5 = {
  readonly assetId?: string;
  readonly crop?: Inline5;
  readonly url?: string;
};
export const Inline5Schema: v.GenericSchema<unknown, Inline5> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline5Schema)),
  url: v.optional(v.string()),
});

export type Inline500 = {
  readonly assetId?: string;
  readonly crop?: Inline500;
  readonly url?: string;
};
export const Inline500Schema: v.GenericSchema<unknown, Inline500> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline500Schema)),
  url: v.optional(v.string()),
});

export type Inline501 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
};
export const Inline501Schema: v.GenericSchema<unknown, Inline501> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline502 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline502Schema: v.GenericSchema<unknown, Inline502> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline504 = {
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
};
export const Inline504Schema: v.GenericSchema<unknown, Inline504> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline504Schema)),
  brandLogoUrl: v.optional(v.string()),
  brandName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline505Schema)),
  customImageUrl: v.optional(v.string()),
  customImages: v.optional(v.array(v.lazy(() => Inline506Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline507Schema)),
  layout: v.optional(v.string()),
  originalHeadline: v.optional(v.string()),
  originalHeadlines: v.optional(v.array(v.string())),
  originalVideoAssetIds: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline508Schema))),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type Inline505 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline505Schema: v.GenericSchema<unknown, Inline505> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline506 = {
  readonly assetId?: string;
  readonly crop?: Inline506;
  readonly url?: string;
};
export const Inline506Schema: v.GenericSchema<unknown, Inline506> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline506Schema)),
  url: v.optional(v.string()),
});

export type Inline507 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
};
export const Inline507Schema: v.GenericSchema<unknown, Inline507> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline508 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline508Schema: v.GenericSchema<unknown, Inline508> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline510 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline510Schema: v.GenericSchema<unknown, Inline510> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline511 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline511Schema: v.GenericSchema<unknown, Inline511> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline512 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline512Schema: v.GenericSchema<unknown, Inline512> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline513 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline513Schema: v.GenericSchema<unknown, Inline513> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline514 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline514Schema: v.GenericSchema<unknown, Inline514> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline516 = {
  readonly migrationEntity: Inline516;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline522>;
};
export const Inline516Schema: v.GenericSchema<unknown, Inline516> = v.looseObject({
  migrationEntity: v.lazy(() => Inline516Schema),
  migrationId: v.string(),
  migrationOptions: v.array(v.lazy(() => Inline522Schema)),
});

export type Inline517 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline517Schema: v.GenericSchema<unknown, Inline517> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline518 = {
  readonly assetId?: string;
  readonly crop?: Inline518;
  readonly url?: string;
};
export const Inline518Schema: v.GenericSchema<unknown, Inline518> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline518Schema)),
  url: v.optional(v.string()),
});

export type Inline519 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline519Schema: v.GenericSchema<unknown, Inline519> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline52 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const Inline52Schema: v.GenericSchema<unknown, Inline52> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type Inline520 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline520Schema: v.GenericSchema<unknown, Inline520> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline521 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline521Schema: v.GenericSchema<unknown, Inline521> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline522 = {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
};
export const Inline522Schema: v.GenericSchema<unknown, Inline522> = v.looseObject({
  adGroupId: v.optional(v.string()),
  adId: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  errorCode: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  migrationType: v.optional(v.string()),
  optionType: v.string(),
  rationale: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type Inline524 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline524Schema: v.GenericSchema<unknown, Inline524> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline525 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline525Schema: v.GenericSchema<unknown, Inline525> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline526 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline526Schema: v.GenericSchema<unknown, Inline526> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline527 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline527Schema: v.GenericSchema<unknown, Inline527> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline529 = {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline529;
  readonly name: string;
  readonly state: string;
};
export const Inline529Schema: v.GenericSchema<unknown, Inline529> = v.looseObject({
  adGroupId: v.string(),
  campaignId: v.string(),
  extendedData: v.optional(v.lazy(() => Inline529Schema)),
  name: v.string(),
  state: v.string(),
});

export type Inline531 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline531Schema: v.GenericSchema<unknown, Inline531> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline532 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline532Schema: v.GenericSchema<unknown, Inline532> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline533 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline533Schema: v.GenericSchema<unknown, Inline533> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline534 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline534Schema: v.GenericSchema<unknown, Inline534> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline535 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline535Schema: v.GenericSchema<unknown, Inline535> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline537 = {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline537;
  readonly extendedData?: Inline541;
  readonly landingPage?: Inline542;
  readonly name?: string;
  readonly state: string;
};
export const Inline537Schema: v.GenericSchema<unknown, Inline537> = v.looseObject({
  adGroupId: v.string(),
  adId: v.optional(v.string()),
  campaignId: v.string(),
  creative: v.optional(v.lazy(() => Inline537Schema)),
  extendedData: v.optional(v.lazy(() => Inline541Schema)),
  landingPage: v.optional(v.lazy(() => Inline542Schema)),
  name: v.optional(v.string()),
  state: v.string(),
});

export type Inline538 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline538Schema: v.GenericSchema<unknown, Inline538> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline539 = {
  readonly assetId?: string;
  readonly crop?: Inline539;
  readonly url?: string;
};
export const Inline539Schema: v.GenericSchema<unknown, Inline539> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline539Schema)),
  url: v.optional(v.string()),
});

export type Inline54 = {
  readonly error?: ReadonlyArray<Inline54>;
  readonly success?: ReadonlyArray<Inline55>;
};
export const Inline54Schema: v.GenericSchema<unknown, Inline54> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline54Schema))),
  success: v.optional(v.array(v.lazy(() => Inline55Schema))),
});

export type Inline540 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline540Schema: v.GenericSchema<unknown, Inline540> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline541 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline541Schema: v.GenericSchema<unknown, Inline541> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline542 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline542Schema: v.GenericSchema<unknown, Inline542> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline544 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline544Schema: v.GenericSchema<unknown, Inline544> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline545 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline545Schema: v.GenericSchema<unknown, Inline545> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline546 = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const Inline546Schema: v.GenericSchema<unknown, Inline546> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type Inline547 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline547Schema: v.GenericSchema<unknown, Inline547> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline548 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline548Schema: v.GenericSchema<unknown, Inline548> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline55 = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
};
export const Inline55Schema: v.GenericSchema<unknown, Inline55> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRuleId: v.string(),
});

export type Inline550 = {
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
};
export const Inline550Schema: v.GenericSchema<unknown, Inline550> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline550Schema)),
  brandEntityId: v.optional(v.string()),
  budget: v.number(),
  budgetType: v.string(),
  campaignId: v.string(),
  costType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  extendedData: v.optional(v.lazy(() => Inline553Schema)),
  goal: v.optional(v.string()),
  isMultiAdGroupsEnabled: v.optional(v.boolean()),
  kpi: v.optional(v.string()),
  name: v.string(),
  portfolioId: v.optional(v.string()),
  productLocation: v.optional(v.string()),
  ruleBasedBudget: v.optional(v.lazy(() => Inline554Schema)),
  siteRestrictions: v.optional(v.array(v.string())),
  smartDefault: v.optional(v.array(v.string())),
  startDate: v.optional(v.string()),
  state: v.string(),
  tags: v.optional(v.lazy(() => Inline555Schema)),
  targetedPGDealId: v.optional(v.string()),
});

export type Inline551 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline551Schema: v.GenericSchema<unknown, Inline551> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline552 = {
  readonly audienceSegments?: ReadonlyArray<Inline552>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline552Schema: v.GenericSchema<unknown, Inline552> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline552Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline553 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline553Schema: v.GenericSchema<unknown, Inline553> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline554 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline554Schema: v.GenericSchema<unknown, Inline554> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline555 = {

};
export const Inline555Schema: v.GenericSchema<unknown, Inline555> = v.looseObject({

});

export type Inline557 = {
  readonly entityId?: string;
  readonly entityType?: string;
};
export const Inline557Schema: v.GenericSchema<unknown, Inline557> = v.looseObject({
  entityId: v.optional(v.string()),
  entityType: v.optional(v.string()),
});

export type Inline558 = {
  readonly include?: ReadonlyArray<string>;
};
export const Inline558Schema: v.GenericSchema<unknown, Inline558> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type Inline560 = {
  readonly conditions?: ReadonlyArray<Inline560>;
  readonly optimizationRuleId?: string;
};
export const Inline560Schema: v.GenericSchema<unknown, Inline560> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline560Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline562 = {
  readonly ad?: Inline562;
  readonly adGroupName?: string;
  readonly campaignName?: string;
};
export const Inline562Schema: v.GenericSchema<unknown, Inline562> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline562Schema)),
  adGroupName: v.optional(v.string()),
  campaignName: v.optional(v.string()),
});

export type Inline563 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline563Schema: v.GenericSchema<unknown, Inline563> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline564 = {
  readonly assetId?: string;
  readonly crop?: Inline564;
  readonly url?: string;
};
export const Inline564Schema: v.GenericSchema<unknown, Inline564> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline564Schema)),
  url: v.optional(v.string()),
});

export type Inline565 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline565Schema: v.GenericSchema<unknown, Inline565> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline566 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline566Schema: v.GenericSchema<unknown, Inline566> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline567 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline567Schema: v.GenericSchema<unknown, Inline567> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline568 = {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
};
export const Inline568Schema: v.GenericSchema<unknown, Inline568> = v.looseObject({
  adGroupId: v.optional(v.string()),
  adId: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  errorCode: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  migrationType: v.optional(v.string()),
  optionType: v.string(),
  rationale: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type Inline570 = {
  readonly adGroupId: string;
  readonly adId?: string;
  readonly campaignId: string;
  readonly creative?: Inline570;
  readonly extendedData?: Inline574;
  readonly landingPage?: Inline575;
  readonly name?: string;
  readonly state: string;
};
export const Inline570Schema: v.GenericSchema<unknown, Inline570> = v.looseObject({
  adGroupId: v.string(),
  adId: v.optional(v.string()),
  campaignId: v.string(),
  creative: v.optional(v.lazy(() => Inline570Schema)),
  extendedData: v.optional(v.lazy(() => Inline574Schema)),
  landingPage: v.optional(v.lazy(() => Inline575Schema)),
  name: v.optional(v.string()),
  state: v.string(),
});

export type Inline571 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline571Schema: v.GenericSchema<unknown, Inline571> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline572 = {
  readonly assetId?: string;
  readonly crop?: Inline572;
  readonly url?: string;
};
export const Inline572Schema: v.GenericSchema<unknown, Inline572> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline572Schema)),
  url: v.optional(v.string()),
});

export type Inline573 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline573Schema: v.GenericSchema<unknown, Inline573> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline574 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline574Schema: v.GenericSchema<unknown, Inline574> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline575 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline575Schema: v.GenericSchema<unknown, Inline575> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline578 = {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
};
export const Inline578Schema: v.GenericSchema<unknown, Inline578> = v.looseObject({
  legacyCampaignId: v.optional(v.string()),
  migrationStatus: v.optional(v.string()),
  migrationStatusReason: v.optional(v.string()),
  newCampaignId: v.optional(v.string()),
});

export type Inline585 = {
  readonly legacyCampaignId?: string;
  readonly migrationStatus?: string;
  readonly migrationStatusReason?: string;
  readonly newCampaignId?: string;
};
export const Inline585Schema: v.GenericSchema<unknown, Inline585> = v.looseObject({
  legacyCampaignId: v.optional(v.string()),
  migrationStatus: v.optional(v.string()),
  migrationStatusReason: v.optional(v.string()),
  newCampaignId: v.optional(v.string()),
});

export type Inline591 = {
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
};
export const Inline591Schema: v.GenericSchema<unknown, Inline591> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  asins: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline591Schema)),
  brandLogoUrl: v.optional(v.string()),
  brandName: v.optional(v.string()),
  collectionName: v.optional(v.string()),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  creativeStatus: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline592Schema)),
  customImageUrl: v.optional(v.string()),
  customImages: v.optional(v.array(v.lazy(() => Inline593Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  originalHeadline: v.optional(v.string()),
  originalHeadlines: v.optional(v.array(v.string())),
  originalVideoAssetIds: v.optional(v.array(v.string())),
  subpages: v.optional(v.array(v.lazy(() => Inline594Schema))),
  title: v.optional(v.string()),
  type: v.optional(v.string()),
  videoAssetIds: v.optional(v.array(v.string())),
});

export type Inline592 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline592Schema: v.GenericSchema<unknown, Inline592> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline593 = {
  readonly assetId?: string;
  readonly crop?: Inline593;
  readonly url?: string;
};
export const Inline593Schema: v.GenericSchema<unknown, Inline593> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline593Schema)),
  url: v.optional(v.string()),
});

export type Inline594 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline594Schema: v.GenericSchema<unknown, Inline594> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline595 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline595Schema: v.GenericSchema<unknown, Inline595> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline596 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline596Schema: v.GenericSchema<unknown, Inline596> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline6 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline6Schema: v.GenericSchema<unknown, Inline6> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline602 = {
  readonly attributeName: string;
  readonly criteria: Inline602;
};
export const Inline602Schema: v.GenericSchema<unknown, Inline602> = v.looseObject({
  attributeName: v.string(),
  criteria: v.lazy(() => Inline602Schema),
});

export type Inline604 = {
  readonly code: string;
  readonly message: string;
};
export const Inline604Schema: v.GenericSchema<unknown, Inline604> = v.looseObject({
  code: v.string(),
  message: v.string(),
});

export type Inline61 = {
  readonly percentage?: number;
  readonly placement?: string;
};
export const Inline61Schema: v.GenericSchema<unknown, Inline61> = v.looseObject({
  percentage: v.optional(v.number()),
  placement: v.optional(v.string()),
});

export type Inline610 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline610Schema: v.GenericSchema<unknown, Inline610> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline615 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline615Schema: v.GenericSchema<unknown, Inline615> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline616 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline616Schema: v.GenericSchema<unknown, Inline616> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline62 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline62Schema: v.GenericSchema<unknown, Inline62> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline620 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline620Schema: v.GenericSchema<unknown, Inline620> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline622 = {
  readonly endTime?: string;
  readonly startTime?: string;
};
export const Inline622Schema: v.GenericSchema<unknown, Inline622> = v.looseObject({
  endTime: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

export type Inline626 = {
  readonly comparisonOperator?: string;
  readonly value?: number;
};
export const Inline626Schema: v.GenericSchema<unknown, Inline626> = v.looseObject({
  comparisonOperator: v.optional(v.string()),
  value: v.optional(v.number()),
});

export type Inline628 = {
  readonly endDate?: string;
  readonly startDate: string;
};
export const Inline628Schema: v.GenericSchema<unknown, Inline628> = v.looseObject({
  endDate: v.optional(v.string()),
  startDate: v.string(),
});

export type Inline629 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline629Schema: v.GenericSchema<unknown, Inline629> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline63 = {
  readonly audienceSegments?: ReadonlyArray<Inline63>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline63Schema: v.GenericSchema<unknown, Inline63> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline63Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline631 = {
  readonly budgetIncreaseBy?: Inline631;
  readonly duration?: Inline632;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline634;
  readonly recurrence?: Inline635;
  readonly ruleType?: string;
};
export const Inline631Schema: v.GenericSchema<unknown, Inline631> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline631Schema)),
  duration: v.optional(v.lazy(() => Inline632Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline634Schema)),
  recurrence: v.optional(v.lazy(() => Inline635Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline632 = {
  readonly dateRangeTypeRuleDuration?: Inline632;
  readonly eventTypeRuleDuration?: Inline633;
};
export const Inline632Schema: v.GenericSchema<unknown, Inline632> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline632Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline633Schema)),
});

export type Inline633 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline633Schema: v.GenericSchema<unknown, Inline633> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline634 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline634Schema: v.GenericSchema<unknown, Inline634> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline635 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline635>;
  readonly type?: string;
};
export const Inline635Schema: v.GenericSchema<unknown, Inline635> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline635Schema))),
  type: v.optional(v.string()),
});

export type Inline637 = {
  readonly type: string;
  readonly value: number;
};
export const Inline637Schema: v.GenericSchema<unknown, Inline637> = v.looseObject({
  type: v.string(),
  value: v.number(),
});

export type Inline638 = {
  readonly dateRangeTypeRuleDuration?: Inline638;
  readonly eventTypeRuleDuration?: Inline639;
};
export const Inline638Schema: v.GenericSchema<unknown, Inline638> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline638Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline639Schema)),
});

export type Inline639 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline639Schema: v.GenericSchema<unknown, Inline639> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline640 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline640Schema: v.GenericSchema<unknown, Inline640> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline641 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline641>;
  readonly type?: string;
};
export const Inline641Schema: v.GenericSchema<unknown, Inline641> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline641Schema))),
  type: v.optional(v.string()),
});

export type Inline646 = {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
};
export const Inline646Schema: v.GenericSchema<unknown, Inline646> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.optional(v.string()),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
  suggestedBudgetIncreasePercent: v.optional(v.number()),
});

export type Inline648 = {
  readonly budgetIncreaseBy?: Inline648;
  readonly duration?: Inline649;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline651;
  readonly recurrence?: Inline652;
  readonly ruleType?: string;
};
export const Inline648Schema: v.GenericSchema<unknown, Inline648> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline648Schema)),
  duration: v.optional(v.lazy(() => Inline649Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline651Schema)),
  recurrence: v.optional(v.lazy(() => Inline652Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline649 = {
  readonly dateRangeTypeRuleDuration?: Inline649;
  readonly eventTypeRuleDuration?: Inline650;
};
export const Inline649Schema: v.GenericSchema<unknown, Inline649> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline649Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline650Schema)),
});

export type Inline65 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline65Schema: v.GenericSchema<unknown, Inline65> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline650 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline650Schema: v.GenericSchema<unknown, Inline650> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline651 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline651Schema: v.GenericSchema<unknown, Inline651> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline652 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline652>;
  readonly type?: string;
};
export const Inline652Schema: v.GenericSchema<unknown, Inline652> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline652Schema))),
  type: v.optional(v.string()),
});

export type Inline654 = {
  readonly adGroups: ReadonlyArray<Inline654>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline660>;
  readonly startDate?: string;
};
export const Inline654Schema: v.GenericSchema<unknown, Inline654> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline654Schema)),
  budget: v.number(),
  budgetType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  forecastType: v.string(),
  goal: v.optional(v.string()),
  optimizationRules: v.optional(v.array(v.lazy(() => Inline660Schema))),
  startDate: v.optional(v.string()),
});

export type Inline655 = {
  readonly landingPageUrl?: string;
};
export const Inline655Schema: v.GenericSchema<unknown, Inline655> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type Inline656 = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline656Schema: v.GenericSchema<unknown, Inline656> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline657 = {
  readonly expressions?: ReadonlyArray<Inline657>;
};
export const Inline657Schema: v.GenericSchema<unknown, Inline657> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline657Schema))),
});

export type Inline658 = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline658>;
};
export const Inline658Schema: v.GenericSchema<unknown, Inline658> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline658Schema))),
});

export type Inline659 = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const Inline659Schema: v.GenericSchema<unknown, Inline659> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type Inline660 = {
  readonly attributeName?: string;
  readonly criteria?: Inline660;
};
export const Inline660Schema: v.GenericSchema<unknown, Inline660> = v.looseObject({
  attributeName: v.optional(v.string()),
  criteria: v.optional(v.lazy(() => Inline660Schema)),
});

export type Inline662 = {
  readonly errors?: ReadonlyArray<Inline662>;
  readonly successes?: ReadonlyArray<Inline663>;
};
export const Inline662Schema: v.GenericSchema<unknown, Inline662> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline662Schema))),
  successes: v.optional(v.array(v.lazy(() => Inline663Schema))),
});

export type Inline663 = {
  readonly campaign?: Inline663;
  readonly index?: number;
};
export const Inline663Schema: v.GenericSchema<unknown, Inline663> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline663Schema)),
  index: v.optional(v.number()),
});

export type Inline666 = {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline666Schema: v.GenericSchema<unknown, Inline666> = v.looseObject({
  bid: v.optional(v.number()),
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline667 = {
  readonly landingPageUrl?: string;
};
export const Inline667Schema: v.GenericSchema<unknown, Inline667> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type Inline668 = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline668Schema: v.GenericSchema<unknown, Inline668> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline669 = {
  readonly expressions?: ReadonlyArray<Inline669>;
};
export const Inline669Schema: v.GenericSchema<unknown, Inline669> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline669Schema))),
});

export type Inline670 = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline670>;
};
export const Inline670Schema: v.GenericSchema<unknown, Inline670> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline670Schema))),
});

export type Inline671 = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const Inline671Schema: v.GenericSchema<unknown, Inline671> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type Inline68 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline68Schema: v.GenericSchema<unknown, Inline68> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline682 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline682Schema: v.GenericSchema<unknown, Inline682> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline687 = {
  readonly type?: string;
  readonly value?: string;
};
export const Inline687Schema: v.GenericSchema<unknown, Inline687> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline689 = {
  readonly comparisonOperator?: string;
  readonly value?: number;
};
export const Inline689Schema: v.GenericSchema<unknown, Inline689> = v.looseObject({
  comparisonOperator: v.optional(v.string()),
  value: v.optional(v.number()),
});

export type Inline692 = {
  readonly type?: string;
  readonly value?: string;
};
export const Inline692Schema: v.GenericSchema<unknown, Inline692> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline694 = {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline694>;
  readonly landingPages?: ReadonlyArray<Inline695>;
  readonly negativeKeywords?: ReadonlyArray<Inline696>;
  readonly negativeTargets?: ReadonlyArray<Inline697>;
  readonly targets?: ReadonlyArray<Inline698>;
  readonly themes?: ReadonlyArray<Inline699>;
};
export const Inline694Schema: v.GenericSchema<unknown, Inline694> = v.looseObject({
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  keywords: v.optional(v.array(v.lazy(() => Inline694Schema))),
  landingPages: v.optional(v.array(v.lazy(() => Inline695Schema))),
  negativeKeywords: v.optional(v.array(v.lazy(() => Inline696Schema))),
  negativeTargets: v.optional(v.array(v.lazy(() => Inline697Schema))),
  targets: v.optional(v.array(v.lazy(() => Inline698Schema))),
  themes: v.optional(v.array(v.lazy(() => Inline699Schema))),
});

export type Inline695 = {
  readonly landingPageUrl?: string;
};
export const Inline695Schema: v.GenericSchema<unknown, Inline695> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type Inline696 = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const Inline696Schema: v.GenericSchema<unknown, Inline696> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type Inline697 = {
  readonly expressions?: ReadonlyArray<Inline697>;
};
export const Inline697Schema: v.GenericSchema<unknown, Inline697> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline697Schema))),
});

export type Inline698 = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline698>;
};
export const Inline698Schema: v.GenericSchema<unknown, Inline698> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline698Schema))),
});

export type Inline699 = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const Inline699Schema: v.GenericSchema<unknown, Inline699> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type Inline7 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline7Schema: v.GenericSchema<unknown, Inline7> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline700 = {
  readonly attributeName?: string;
  readonly criteria?: Inline700;
};
export const Inline700Schema: v.GenericSchema<unknown, Inline700> = v.looseObject({
  attributeName: v.optional(v.string()),
  criteria: v.optional(v.lazy(() => Inline700Schema)),
});

export type Inline702 = {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
};
export const Inline702Schema: v.GenericSchema<unknown, Inline702> = v.looseObject({
  code: v.optional(v.string()),
  description: v.optional(v.string()),
  index: v.optional(v.number()),
});

export type Inline703 = {
  readonly campaign?: Inline703;
  readonly index?: number;
};
export const Inline703Schema: v.GenericSchema<unknown, Inline703> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline703Schema)),
  index: v.optional(v.number()),
});

export type Inline705 = {
  readonly metric?: string;
  readonly value?: Inline705;
};
export const Inline705Schema: v.GenericSchema<unknown, Inline705> = v.looseObject({
  metric: v.optional(v.string()),
  value: v.optional(v.lazy(() => Inline705Schema)),
});

export type Inline707 = {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline707>;
};
export const Inline707Schema: v.GenericSchema<unknown, Inline707> = v.looseObject({
  forecastTimestamp: v.optional(v.string()),
  forecasts: v.optional(v.array(v.lazy(() => Inline707Schema))),
});

export type Inline713 = {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
};
export const Inline713Schema: v.GenericSchema<unknown, Inline713> = v.looseObject({
  campaignId: v.string(),
  campaignName: v.string(),
  ruleStatus: v.string(),
});

export type Inline716 = {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
};
export const Inline716Schema: v.GenericSchema<unknown, Inline716> = v.looseObject({
  bid: v.number(),
  keywordText: v.string(),
  matchType: v.string(),
});

export type Inline719 = {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline719>;
};
export const Inline719Schema: v.GenericSchema<unknown, Inline719> = v.looseObject({
  adFormat: v.string(),
  keywords: v.optional(v.array(v.lazy(() => Inline719Schema))),
});

export type Inline721 = {
  readonly keywordInsight: Inline721;
};
export const Inline721Schema: v.GenericSchema<unknown, Inline721> = v.looseObject({
  keywordInsight: v.lazy(() => Inline721Schema),
});

export type Inline728 = {
  readonly keywordInsight: Inline728;
};
export const Inline728Schema: v.GenericSchema<unknown, Inline728> = v.looseObject({
  keywordInsight: v.lazy(() => Inline728Schema),
});

export type Inline73 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline73Schema: v.GenericSchema<unknown, Inline73> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline74 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline74Schema: v.GenericSchema<unknown, Inline74> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline743 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline743;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline743Schema: v.GenericSchema<unknown, Inline743> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline743Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline744 = {
  readonly dateRangeTypeRuleDuration?: Inline744;
  readonly eventTypeRuleDuration?: Inline745;
};
export const Inline744Schema: v.GenericSchema<unknown, Inline744> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline744Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline745Schema)),
});

export type Inline745 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline745Schema: v.GenericSchema<unknown, Inline745> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline746 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline746Schema: v.GenericSchema<unknown, Inline746> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline747 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline747>;
  readonly type?: string;
};
export const Inline747Schema: v.GenericSchema<unknown, Inline747> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline747Schema))),
  type: v.optional(v.string()),
});

export type Inline749 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline749Schema: v.GenericSchema<unknown, Inline749> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline757 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline757Schema: v.GenericSchema<unknown, Inline757> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline758 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline758Schema: v.GenericSchema<unknown, Inline758> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline762 = {
  readonly brandRefinementId: string;
  readonly name?: string;
};
export const Inline762Schema: v.GenericSchema<unknown, Inline762> = v.looseObject({
  brandRefinementId: v.string(),
  name: v.optional(v.string()),
});

export type Inline764 = {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
};
export const Inline764Schema: v.GenericSchema<unknown, Inline764> = v.looseObject({
  ageRangeRefinementId: v.string(),
  name: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type Inline765 = {
  readonly brandRefinementId: string;
  readonly name?: string;
};
export const Inline765Schema: v.GenericSchema<unknown, Inline765> = v.looseObject({
  brandRefinementId: v.string(),
  name: v.optional(v.string()),
});

export type Inline766 = {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
};
export const Inline766Schema: v.GenericSchema<unknown, Inline766> = v.looseObject({
  genreRefinementId: v.string(),
  name: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type Inline768 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline768Schema: v.GenericSchema<unknown, Inline768> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline769 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline769Schema: v.GenericSchema<unknown, Inline769> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline77 = {
  readonly location: string;
  readonly trigger?: string;
};
export const Inline77Schema: v.GenericSchema<unknown, Inline77> = v.looseObject({
  location: v.string(),
  trigger: v.optional(v.string()),
});

export type Inline771 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline771Schema: v.GenericSchema<unknown, Inline771> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline773 = {
  readonly asinCountRange?: Inline773;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline774;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
};
export const Inline773Schema: v.GenericSchema<unknown, Inline773> = v.looseObject({
  asinCountRange: v.optional(v.lazy(() => Inline773Schema)),
  categoryRefinementId: v.optional(v.string()),
  estimatedReach: v.optional(v.lazy(() => Inline774Schema)),
  isTargetable: v.optional(v.boolean()),
  name: v.optional(v.string()),
  parentCategoryRefinementId: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type Inline774 = {
  readonly max?: number;
  readonly min?: number;
};
export const Inline774Schema: v.GenericSchema<unknown, Inline774> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type Inline786 = {
  readonly audienceId?: string;
  readonly audienceSegmentType?: string;
};
export const Inline786Schema: v.GenericSchema<unknown, Inline786> = v.looseObject({
  audienceId: v.optional(v.string()),
  audienceSegmentType: v.optional(v.string()),
});

export type Inline795 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline795Schema: v.GenericSchema<unknown, Inline795> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline796 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline796Schema: v.GenericSchema<unknown, Inline796> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline797 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline797Schema: v.GenericSchema<unknown, Inline797> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline8 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline8Schema: v.GenericSchema<unknown, Inline8> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline80 = {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
};
export const Inline80Schema: v.GenericSchema<unknown, Inline80> = v.looseObject({
  endDate: v.optional(v.string()),
  estimatedMissedClicksLower: v.optional(v.number()),
  estimatedMissedClicksUpper: v.optional(v.number()),
  estimatedMissedImpressionsLower: v.optional(v.number()),
  estimatedMissedImpressionsUpper: v.optional(v.number()),
  estimatedMissedSalesLower: v.optional(v.number()),
  estimatedMissedSalesUpper: v.optional(v.number()),
  percentTimeInBudget: v.optional(v.number()),
  startDate: v.optional(v.string()),
});

export type Inline812 = {
  readonly asinExclusions?: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline812;
  readonly brandName: string;
};
export const Inline812Schema: v.GenericSchema<unknown, Inline812> = v.looseObject({
  asinExclusions: v.optional(v.array(v.string())),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline812Schema)),
  brandName: v.string(),
});

export type Inline814 = {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline814Schema: v.GenericSchema<unknown, Inline814> = v.looseObject({
  associatedCampaignIds: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline816 = {
  readonly bidAdjustmentsByPlacement?: ReadonlyArray<Inline816>;
  readonly bidAdjustmentsByShopperSegment?: ReadonlyArray<Inline817>;
  readonly bidOptimization?: boolean;
  readonly bidOptimizationStrategy?: string;
  readonly shopperCohortBidAdjustments?: ReadonlyArray<Inline818>;
};
export const Inline816Schema: v.GenericSchema<unknown, Inline816> = v.looseObject({
  bidAdjustmentsByPlacement: v.optional(v.array(v.lazy(() => Inline816Schema))),
  bidAdjustmentsByShopperSegment: v.optional(v.array(v.lazy(() => Inline817Schema))),
  bidOptimization: v.optional(v.boolean()),
  bidOptimizationStrategy: v.optional(v.string()),
  shopperCohortBidAdjustments: v.optional(v.array(v.lazy(() => Inline818Schema))),
});

export type Inline817 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline817Schema: v.GenericSchema<unknown, Inline817> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline818 = {
  readonly audienceSegments?: ReadonlyArray<Inline818>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline818Schema: v.GenericSchema<unknown, Inline818> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline818Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline819 = {

};
export const Inline819Schema: v.GenericSchema<unknown, Inline819> = v.looseObject({

});

export type Inline821 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetID?: string;
  readonly brandLogoCrop?: Inline821;
  readonly brandName: string;
  readonly landingPage?: Inline822;
  readonly title?: string;
};
export const Inline821Schema: v.GenericSchema<unknown, Inline821> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetID: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline821Schema)),
  brandName: v.string(),
  landingPage: v.optional(v.lazy(() => Inline822Schema)),
  title: v.optional(v.string()),
});

export type Inline822 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline822Schema: v.GenericSchema<unknown, Inline822> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline824 = {
  readonly attributeName: string;
  readonly criteria: Inline824;
};
export const Inline824Schema: v.GenericSchema<unknown, Inline824> = v.looseObject({
  attributeName: v.string(),
  criteria: v.lazy(() => Inline824Schema),
});

export type Inline826 = {
  readonly conditions?: ReadonlyArray<Inline826>;
  readonly optimizationRuleId?: string;
};
export const Inline826Schema: v.GenericSchema<unknown, Inline826> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline826Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline828 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline828;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline828Schema: v.GenericSchema<unknown, Inline828> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline828Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline829 = {
  readonly dateRangeTypeRuleDuration?: Inline829;
  readonly eventTypeRuleDuration?: Inline830;
};
export const Inline829Schema: v.GenericSchema<unknown, Inline829> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline829Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline830Schema)),
});

export type Inline830 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline830Schema: v.GenericSchema<unknown, Inline830> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline831 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline831Schema: v.GenericSchema<unknown, Inline831> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline832 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline832>;
  readonly type?: string;
};
export const Inline832Schema: v.GenericSchema<unknown, Inline832> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline832Schema))),
  type: v.optional(v.string()),
});

export type Inline834 = {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline834Schema: v.GenericSchema<unknown, Inline834> = v.looseObject({
  adGroupId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline836 = {
  readonly error?: ReadonlyArray<Inline836>;
  readonly success?: ReadonlyArray<Inline840>;
};
export const Inline836Schema: v.GenericSchema<unknown, Inline836> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline836Schema))),
  success: v.optional(v.array(v.lazy(() => Inline840Schema))),
});

export type Inline837 = {
  readonly cause: Inline837;
  readonly message: string;
  readonly reason: string;
};
export const Inline837Schema: v.GenericSchema<unknown, Inline837> = v.looseObject({
  cause: v.lazy(() => Inline837Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline838 = {
  readonly cause: Inline838;
  readonly message: string;
  readonly reason: string;
};
export const Inline838Schema: v.GenericSchema<unknown, Inline838> = v.looseObject({
  cause: v.lazy(() => Inline838Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline839 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline839;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline839Schema: v.GenericSchema<unknown, Inline839> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline839Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline840 = {
  readonly adGroup?: Inline840;
  readonly adGroupId?: string;
  readonly index: number;
};
export const Inline840Schema: v.GenericSchema<unknown, Inline840> = v.looseObject({
  adGroup: v.optional(v.lazy(() => Inline840Schema)),
  adGroupId: v.optional(v.string()),
  index: v.number(),
});

export type Inline842 = {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
};
export const Inline842Schema: v.GenericSchema<unknown, Inline842> = v.looseObject({
  adId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type Inline844 = {
  readonly error?: ReadonlyArray<Inline844>;
  readonly success?: ReadonlyArray<Inline846>;
};
export const Inline844Schema: v.GenericSchema<unknown, Inline844> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline844Schema))),
  success: v.optional(v.array(v.lazy(() => Inline846Schema))),
});

export type Inline845 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline845;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline845Schema: v.GenericSchema<unknown, Inline845> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline845Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline846 = {
  readonly ad?: Inline846;
  readonly adId?: string;
  readonly index: number;
};
export const Inline846Schema: v.GenericSchema<unknown, Inline846> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline846Schema)),
  adId: v.optional(v.string()),
  index: v.number(),
});

export type Inline847 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline847Schema: v.GenericSchema<unknown, Inline847> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline848 = {
  readonly assetId?: string;
  readonly crop?: Inline848;
  readonly url?: string;
};
export const Inline848Schema: v.GenericSchema<unknown, Inline848> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline848Schema)),
  url: v.optional(v.string()),
});

export type Inline849 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline849Schema: v.GenericSchema<unknown, Inline849> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline850 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline850Schema: v.GenericSchema<unknown, Inline850> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline851 = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline851Schema: v.GenericSchema<unknown, Inline851> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline853 = {
  readonly adId: string;
  readonly creative: Inline853;
};
export const Inline853Schema: v.GenericSchema<unknown, Inline853> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline853Schema),
});

export type Inline855 = {
  readonly error?: ReadonlyArray<Inline855>;
  readonly success?: ReadonlyArray<Inline857>;
};
export const Inline855Schema: v.GenericSchema<unknown, Inline855> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline855Schema))),
  success: v.optional(v.array(v.lazy(() => Inline857Schema))),
});

export type Inline856 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline856;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline856Schema: v.GenericSchema<unknown, Inline856> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline856Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline857 = {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
};
export const Inline857Schema: v.GenericSchema<unknown, Inline857> = v.looseObject({
  adId: v.string(),
  creativeVersion: v.optional(v.string()),
  index: v.number(),
});

export type Inline859 = {
  readonly bidding?: Inline859;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline862;
};
export const Inline859Schema: v.GenericSchema<unknown, Inline859> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline859Schema)),
  budget: v.optional(v.number()),
  campaignId: v.string(),
  endDate: v.optional(v.string()),
  name: v.optional(v.string()),
  portfolioId: v.optional(v.string()),
  startDate: v.optional(v.string()),
  state: v.optional(v.string()),
  tags: v.optional(v.lazy(() => Inline862Schema)),
});

export type Inline860 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline860Schema: v.GenericSchema<unknown, Inline860> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline861 = {
  readonly audienceSegments?: ReadonlyArray<Inline861>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline861Schema: v.GenericSchema<unknown, Inline861> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline861Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline862 = {

};
export const Inline862Schema: v.GenericSchema<unknown, Inline862> = v.looseObject({

});

export type Inline864 = {
  readonly error?: ReadonlyArray<Inline864>;
  readonly success?: ReadonlyArray<Inline870>;
};
export const Inline864Schema: v.GenericSchema<unknown, Inline864> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline864Schema))),
  success: v.optional(v.array(v.lazy(() => Inline870Schema))),
});

export type Inline865 = {
  readonly cause: Inline865;
  readonly message: string;
  readonly reason: string;
};
export const Inline865Schema: v.GenericSchema<unknown, Inline865> = v.looseObject({
  cause: v.lazy(() => Inline865Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline866 = {
  readonly cause: Inline866;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline866Schema: v.GenericSchema<unknown, Inline866> = v.looseObject({
  cause: v.lazy(() => Inline866Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline867 = {
  readonly cause: Inline867;
  readonly message: string;
  readonly reason: string;
};
export const Inline867Schema: v.GenericSchema<unknown, Inline867> = v.looseObject({
  cause: v.lazy(() => Inline867Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline868 = {
  readonly cause: Inline868;
  readonly message: string;
  readonly reason: string;
};
export const Inline868Schema: v.GenericSchema<unknown, Inline868> = v.looseObject({
  cause: v.lazy(() => Inline868Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline869 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline869;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline869Schema: v.GenericSchema<unknown, Inline869> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline869Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline870 = {
  readonly campaign?: Inline870;
  readonly campaignId?: string;
  readonly index: number;
};
export const Inline870Schema: v.GenericSchema<unknown, Inline870> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline870Schema)),
  campaignId: v.optional(v.string()),
  index: v.number(),
});

export type Inline871 = {
  readonly percentage?: number;
  readonly shopperSegment?: string;
};
export const Inline871Schema: v.GenericSchema<unknown, Inline871> = v.looseObject({
  percentage: v.optional(v.number()),
  shopperSegment: v.optional(v.string()),
});

export type Inline872 = {
  readonly audienceSegments?: ReadonlyArray<Inline872>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const Inline872Schema: v.GenericSchema<unknown, Inline872> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline872Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type Inline873 = {
  readonly creationDate?: number;
  readonly lastUpdateDate?: number;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<string>;
};
export const Inline873Schema: v.GenericSchema<unknown, Inline873> = v.looseObject({
  creationDate: v.optional(v.number()),
  lastUpdateDate: v.optional(v.number()),
  servingStatus: v.optional(v.string()),
  servingStatusDetails: v.optional(v.array(v.string())),
});

export type Inline874 = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const Inline874Schema: v.GenericSchema<unknown, Inline874> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type Inline875 = {

};
export const Inline875Schema: v.GenericSchema<unknown, Inline875> = v.looseObject({

});

export type Inline877 = {
  readonly adId: string;
  readonly creative: Inline877;
};
export const Inline877Schema: v.GenericSchema<unknown, Inline877> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline877Schema),
});

export type Inline878 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline878Schema: v.GenericSchema<unknown, Inline878> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline880 = {
  readonly error?: ReadonlyArray<Inline880>;
  readonly success?: ReadonlyArray<Inline882>;
};
export const Inline880Schema: v.GenericSchema<unknown, Inline880> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline880Schema))),
  success: v.optional(v.array(v.lazy(() => Inline882Schema))),
});

export type Inline881 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline881;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline881Schema: v.GenericSchema<unknown, Inline881> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline881Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline882 = {
  readonly adId: string;
  readonly creativeVersion?: string;
  readonly index: number;
};
export const Inline882Schema: v.GenericSchema<unknown, Inline882> = v.looseObject({
  adId: v.string(),
  creativeVersion: v.optional(v.string()),
  index: v.number(),
});

export type Inline884 = {
  readonly conditions?: ReadonlyArray<Inline884>;
  readonly optimizationRuleId?: string;
};
export const Inline884Schema: v.GenericSchema<unknown, Inline884> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline884Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type Inline886 = {
  readonly error?: ReadonlyArray<Inline886>;
  readonly success?: ReadonlyArray<Inline887>;
};
export const Inline886Schema: v.GenericSchema<unknown, Inline886> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline886Schema))),
  success: v.optional(v.array(v.lazy(() => Inline887Schema))),
});

export type Inline887 = {
  readonly index: number;
  readonly optimizationRule: Inline887;
  readonly optimizationRuleId: string;
};
export const Inline887Schema: v.GenericSchema<unknown, Inline887> = v.looseObject({
  index: v.number(),
  optimizationRule: v.lazy(() => Inline887Schema),
  optimizationRuleId: v.string(),
});

export type Inline89 = {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
};
export const Inline89Schema: v.GenericSchema<unknown, Inline89> = v.looseObject({
  campaignId: v.optional(v.string()),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  index: v.optional(v.number()),
});

export type Inline890 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline890Schema: v.GenericSchema<unknown, Inline890> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline892 = {
  readonly adId: string;
  readonly creative: Inline892;
};
export const Inline892Schema: v.GenericSchema<unknown, Inline892> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline892Schema),
});

export type Inline895 = {
  readonly adId: string;
  readonly creative: Inline895;
};
export const Inline895Schema: v.GenericSchema<unknown, Inline895> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline895Schema),
});

export type Inline896 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline896;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline897;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline896Schema: v.GenericSchema<unknown, Inline896> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline896Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.string(),
  landingPage: v.optional(v.lazy(() => Inline897Schema)),
  videoAssetIds: v.array(v.string()),
});

export type Inline897 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline897Schema: v.GenericSchema<unknown, Inline897> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline899 = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const Inline899Schema: v.GenericSchema<unknown, Inline899> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Inline90 = {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
};
export const Inline90Schema: v.GenericSchema<unknown, Inline90> = v.looseObject({
  budget: v.optional(v.number()),
  budgetUsagePercent: v.optional(v.number()),
  campaignId: v.optional(v.string()),
  index: v.optional(v.number()),
  usageUpdatedTimestamp: v.optional(v.string()),
});

export type Inline901 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline901;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly headline: string;
  readonly landingPage?: Inline902;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline901Schema: v.GenericSchema<unknown, Inline901> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline901Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.string(),
  landingPage: v.optional(v.lazy(() => Inline902Schema)),
  videoAssetIds: v.array(v.string()),
});

export type Inline902 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline902Schema: v.GenericSchema<unknown, Inline902> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline904 = {
  readonly creatives?: ReadonlyArray<Inline904>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const Inline904Schema: v.GenericSchema<unknown, Inline904> = v.looseObject({
  creatives: v.optional(v.array(v.lazy(() => Inline904Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type Inline905 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline905Schema: v.GenericSchema<unknown, Inline905> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline906 = {
  readonly assetId?: string;
  readonly crop?: Inline906;
  readonly url?: string;
};
export const Inline906Schema: v.GenericSchema<unknown, Inline906> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline906Schema)),
  url: v.optional(v.string()),
});

export type Inline907 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly value?: string;
};
export const Inline907Schema: v.GenericSchema<unknown, Inline907> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline908 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline908Schema: v.GenericSchema<unknown, Inline908> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline910 = {
  readonly adId: string;
  readonly creative: Inline910;
};
export const Inline910Schema: v.GenericSchema<unknown, Inline910> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline910Schema),
});

export type Inline911 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline911Schema: v.GenericSchema<unknown, Inline911> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline914 = {
  readonly adId: string;
  readonly creative: Inline914;
};
export const Inline914Schema: v.GenericSchema<unknown, Inline914> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline914Schema),
});

export type Inline915 = {
  readonly pageType?: string;
  readonly url?: string;
};
export const Inline915Schema: v.GenericSchema<unknown, Inline915> = v.looseObject({
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline916 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline916;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline917;
  readonly headline: string;
};
export const Inline916Schema: v.GenericSchema<unknown, Inline916> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline916Schema)),
  brandName: v.string(),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline917Schema)),
  headline: v.string(),
});

export type Inline917 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline917Schema: v.GenericSchema<unknown, Inline917> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline919 = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const Inline919Schema: v.GenericSchema<unknown, Inline919> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Inline921 = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline921;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline922;
  readonly headline: string;
};
export const Inline921Schema: v.GenericSchema<unknown, Inline921> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline921Schema)),
  brandName: v.string(),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline922Schema)),
  headline: v.string(),
});

export type Inline922 = {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
};
export const Inline922Schema: v.GenericSchema<unknown, Inline922> = v.looseObject({
  height: v.optional(v.number()),
  left: v.optional(v.number()),
  top: v.optional(v.number()),
  width: v.optional(v.number()),
});

export type Inline923 = {
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
};
export const Inline923Schema: v.GenericSchema<unknown, Inline923> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline923Schema)),
  brandName: v.string(),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline924Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline925Schema)),
});

export type Inline924 = {
  readonly assetId?: string;
  readonly crop?: Inline924;
  readonly url?: string;
};
export const Inline924Schema: v.GenericSchema<unknown, Inline924> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline924Schema)),
  url: v.optional(v.string()),
});

export type Inline925 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline925Schema: v.GenericSchema<unknown, Inline925> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline927 = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const Inline927Schema: v.GenericSchema<unknown, Inline927> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Inline929 = {
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
};
export const Inline929Schema: v.GenericSchema<unknown, Inline929> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline929Schema)),
  brandName: v.string(),
  collectionType: v.optional(v.string()),
  companionAsins: v.optional(v.array(v.string())),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  customImages: v.optional(v.array(v.lazy(() => Inline930Schema))),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline931Schema)),
});

export type Inline93 = {
  readonly errors?: ReadonlyArray<Inline93>;
  readonly index: number;
};
export const Inline93Schema: v.GenericSchema<unknown, Inline93> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline93Schema))),
  index: v.number(),
});

export type Inline930 = {
  readonly assetId?: string;
  readonly crop?: Inline930;
  readonly url?: string;
};
export const Inline930Schema: v.GenericSchema<unknown, Inline930> = v.looseObject({
  assetId: v.optional(v.string()),
  crop: v.optional(v.lazy(() => Inline930Schema)),
  url: v.optional(v.string()),
});

export type Inline931 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline931Schema: v.GenericSchema<unknown, Inline931> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline932 = {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline932;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline933;
  readonly subpages: ReadonlyArray<Inline934>;
};
export const Inline932Schema: v.GenericSchema<unknown, Inline932> = v.looseObject({
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline932Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline933Schema)),
  subpages: v.array(v.lazy(() => Inline934Schema)),
});

export type Inline933 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline933Schema: v.GenericSchema<unknown, Inline933> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline934 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline934Schema: v.GenericSchema<unknown, Inline934> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline936 = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const Inline936Schema: v.GenericSchema<unknown, Inline936> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Inline938 = {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline938;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline939;
  readonly subpages: ReadonlyArray<Inline940>;
};
export const Inline938Schema: v.GenericSchema<unknown, Inline938> = v.looseObject({
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline938Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline939Schema)),
  subpages: v.array(v.lazy(() => Inline940Schema)),
});

export type Inline939 = {
  readonly asins?: ReadonlyArray<string>;
  readonly type?: string;
  readonly url?: string;
};
export const Inline939Schema: v.GenericSchema<unknown, Inline939> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline94 = {
  readonly cause: Inline94;
  readonly message: string;
  readonly reason: string;
};
export const Inline94Schema: v.GenericSchema<unknown, Inline94> = v.looseObject({
  cause: v.lazy(() => Inline94Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline940 = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const Inline940Schema: v.GenericSchema<unknown, Inline940> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type Inline941 = {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline941;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline941Schema: v.GenericSchema<unknown, Inline941> = v.looseObject({
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline941Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.array(v.string()),
});

export type Inline943 = {
  readonly adId?: string;
  readonly creativeVersion?: string;
};
export const Inline943Schema: v.GenericSchema<unknown, Inline943> = v.looseObject({
  adId: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
});

export type Inline945 = {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline945;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const Inline945Schema: v.GenericSchema<unknown, Inline945> = v.looseObject({
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline945Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.array(v.string()),
});

export type Inline947 = {
  readonly budgetIncreaseBy?: Inline947;
  readonly duration?: Inline948;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline950;
  readonly recurrence?: Inline951;
  readonly ruleType?: string;
};
export const Inline947Schema: v.GenericSchema<unknown, Inline947> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline947Schema)),
  duration: v.optional(v.lazy(() => Inline948Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline950Schema)),
  recurrence: v.optional(v.lazy(() => Inline951Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline948 = {
  readonly dateRangeTypeRuleDuration?: Inline948;
  readonly eventTypeRuleDuration?: Inline949;
};
export const Inline948Schema: v.GenericSchema<unknown, Inline948> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline948Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline949Schema)),
});

export type Inline949 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline949Schema: v.GenericSchema<unknown, Inline949> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline95 = {
  readonly cause: Inline95;
  readonly message: string;
  readonly reason: string;
};
export const Inline95Schema: v.GenericSchema<unknown, Inline95> = v.looseObject({
  cause: v.lazy(() => Inline95Schema),
  message: v.string(),
  reason: v.string(),
});

export type Inline950 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline950Schema: v.GenericSchema<unknown, Inline950> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline951 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline951>;
  readonly type?: string;
};
export const Inline951Schema: v.GenericSchema<unknown, Inline951> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline951Schema))),
  type: v.optional(v.string()),
});

export type Inline954 = {
  readonly budgetIncreaseBy?: Inline954;
  readonly duration?: Inline955;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline957;
  readonly recurrence?: Inline958;
  readonly ruleType?: string;
};
export const Inline954Schema: v.GenericSchema<unknown, Inline954> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline954Schema)),
  duration: v.optional(v.lazy(() => Inline955Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline957Schema)),
  recurrence: v.optional(v.lazy(() => Inline958Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline955 = {
  readonly dateRangeTypeRuleDuration?: Inline955;
  readonly eventTypeRuleDuration?: Inline956;
};
export const Inline955Schema: v.GenericSchema<unknown, Inline955> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline955Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline956Schema)),
});

export type Inline956 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline956Schema: v.GenericSchema<unknown, Inline956> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline957 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline957Schema: v.GenericSchema<unknown, Inline957> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline958 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline958>;
  readonly type?: string;
};
export const Inline958Schema: v.GenericSchema<unknown, Inline958> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline958Schema))),
  type: v.optional(v.string()),
});

export type Inline959 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline959;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline959Schema: v.GenericSchema<unknown, Inline959> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline959Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline96 = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline96;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const Inline96Schema: v.GenericSchema<unknown, Inline96> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline96Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Inline960 = {
  readonly dateRangeTypeRuleDuration?: Inline960;
  readonly eventTypeRuleDuration?: Inline961;
};
export const Inline960Schema: v.GenericSchema<unknown, Inline960> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline960Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline961Schema)),
});

export type Inline961 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline961Schema: v.GenericSchema<unknown, Inline961> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline962 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline962Schema: v.GenericSchema<unknown, Inline962> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline963 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline963>;
  readonly type?: string;
};
export const Inline963Schema: v.GenericSchema<unknown, Inline963> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline963Schema))),
  type: v.optional(v.string()),
});

export type Inline966 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline966;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline966Schema: v.GenericSchema<unknown, Inline966> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline966Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline967 = {
  readonly dateRangeTypeRuleDuration?: Inline967;
  readonly eventTypeRuleDuration?: Inline968;
};
export const Inline967Schema: v.GenericSchema<unknown, Inline967> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline967Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline968Schema)),
});

export type Inline968 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline968Schema: v.GenericSchema<unknown, Inline968> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline969 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline969Schema: v.GenericSchema<unknown, Inline969> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline97 = {
  readonly adGroup?: Inline97;
  readonly adGroupId?: string;
  readonly index: number;
};
export const Inline97Schema: v.GenericSchema<unknown, Inline97> = v.looseObject({
  adGroup: v.optional(v.lazy(() => Inline97Schema)),
  adGroupId: v.optional(v.string()),
  index: v.number(),
});

export type Inline970 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline970>;
  readonly type?: string;
};
export const Inline970Schema: v.GenericSchema<unknown, Inline970> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline970Schema))),
  type: v.optional(v.string()),
});

export type Inline972 = {
  readonly budgetRule?: Inline972;
};
export const Inline972Schema: v.GenericSchema<unknown, Inline972> = v.looseObject({
  budgetRule: v.optional(v.lazy(() => Inline972Schema)),
});

export type Inline973 = {
  readonly dateRangeTypeRuleDuration?: Inline973;
  readonly eventTypeRuleDuration?: Inline974;
};
export const Inline973Schema: v.GenericSchema<unknown, Inline973> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline973Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline974Schema)),
});

export type Inline974 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline974Schema: v.GenericSchema<unknown, Inline974> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline975 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline975Schema: v.GenericSchema<unknown, Inline975> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline976 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline976>;
  readonly type?: string;
};
export const Inline976Schema: v.GenericSchema<unknown, Inline976> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline976Schema))),
  type: v.optional(v.string()),
});

export type Inline979 = {
  readonly associatedCampaigns?: ReadonlyArray<Inline979>;
  readonly nextToken?: string;
};
export const Inline979Schema: v.GenericSchema<unknown, Inline979> = v.looseObject({
  associatedCampaigns: v.optional(v.array(v.lazy(() => Inline979Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline982 = {
  readonly associatedRules?: ReadonlyArray<Inline982>;
};
export const Inline982Schema: v.GenericSchema<unknown, Inline982> = v.looseObject({
  associatedRules: v.optional(v.array(v.lazy(() => Inline982Schema))),
});

export type Inline983 = {
  readonly dateRangeTypeRuleDuration?: Inline983;
  readonly eventTypeRuleDuration?: Inline984;
};
export const Inline983Schema: v.GenericSchema<unknown, Inline983> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline983Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline984Schema)),
});

export type Inline984 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline984Schema: v.GenericSchema<unknown, Inline984> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline985 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline985Schema: v.GenericSchema<unknown, Inline985> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline986 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline986>;
  readonly type?: string;
};
export const Inline986Schema: v.GenericSchema<unknown, Inline986> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline986Schema))),
  type: v.optional(v.string()),
});

export type Inline99 = {
  readonly errors?: ReadonlyArray<Inline99>;
  readonly index: number;
};
export const Inline99Schema: v.GenericSchema<unknown, Inline99> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline99Schema))),
  index: v.number(),
});

export type Inline991 = {

};
export const Inline991Schema: v.GenericSchema<unknown, Inline991> = v.looseObject({

});

export type Inline997 = {
  readonly campaignId: string;
};
export const Inline997Schema: v.GenericSchema<unknown, Inline997> = v.looseObject({
  campaignId: v.string(),
});

export type Inline999 = {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline999>;
};
export const Inline999Schema: v.GenericSchema<unknown, Inline999> = v.looseObject({
  recommendedBudgetRuleEvents: v.optional(v.array(v.lazy(() => Inline999Schema))),
});

export type InternalErrorErrorCode = "INTERNAL_ERROR" | string;
export const InternalErrorErrorCodeSchema: v.GenericSchema<unknown, InternalErrorErrorCode> = v.union([v.picklist(["INTERNAL_ERROR"]), v.string()]);

export type InternalServerErrorCode = "INTERNAL_ERROR" | string;
export const InternalServerErrorCodeSchema: v.GenericSchema<unknown, InternalServerErrorCode> = v.union([v.picklist(["INTERNAL_ERROR"]), v.string()]);

export type InternalServerExceptionResponseContent = {
  readonly code: string;
  readonly details?: string;
};
export const InternalServerExceptionResponseContentSchema: v.GenericSchema<unknown, InternalServerExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.optional(v.string()),
});

export type InvalidArgumentError = {
  readonly errorType: string;
  readonly errorValue: Inline486;
};
export const InvalidArgumentErrorSchema: v.GenericSchema<unknown, InvalidArgumentError> = v.looseObject({
  errorType: v.string(),
  errorValue: v.lazy(() => Inline486Schema),
});

export type InvalidArgumentErrorCode = "INVALID_ARGUMENT" | string;
export const InvalidArgumentErrorCodeSchema: v.GenericSchema<unknown, InvalidArgumentErrorCode> = v.union([v.picklist(["INVALID_ARGUMENT"]), v.string()]);

export type InvalidArgumentErrorSelector = {
  readonly otherError?: Inline490;
  readonly rangeError?: Inline491;
};
export const InvalidArgumentErrorSelectorSchema: v.GenericSchema<unknown, InvalidArgumentErrorSelector> = v.looseObject({
  otherError: v.optional(v.lazy(() => Inline490Schema)),
  rangeError: v.optional(v.lazy(() => Inline491Schema)),
});

export type InvalidArgumentExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const InvalidArgumentExceptionResponseContentSchema: v.GenericSchema<unknown, InvalidArgumentExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type LandingPage = {
  readonly asins?: ReadonlyArray<string>;
  readonly pageType?: string;
  readonly url?: string;
};
export const LandingPageSchema: v.GenericSchema<unknown, LandingPage> = v.looseObject({
  asins: v.optional(v.array(v.string())),
  pageType: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type LandingPageType = "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE" | string;
export const LandingPageTypeSchema: v.GenericSchema<unknown, LandingPageType> = v.union([v.picklist(["CUSTOM_URL", "DETAIL_PAGE", "PRODUCT_LIST", "STORE"]), v.string()]);

export type Layout = "BRAND_GALLERY" | string;
export const LayoutSchema: v.GenericSchema<unknown, Layout> = v.union([v.picklist(["BRAND_GALLERY"]), v.string()]);

export type ListAssociatedBudgetRulesForSBCampaignsParams = {
  readonly campaignId: number;
};
export const ListAssociatedBudgetRulesForSBCampaignsParamsSchema: v.GenericSchema<unknown, ListAssociatedBudgetRulesForSBCampaignsParams> = v.looseObject({
  campaignId: v.number(),
});

export type ListAssociatedBudgetRulesForSBCampaignsResponse = {
  readonly data: Inline982;
};
export const ListAssociatedBudgetRulesForSBCampaignsResponseSchema: v.GenericSchema<unknown, ListAssociatedBudgetRulesForSBCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline982Schema),
});

export type ListCreativesParams = {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
};
export const ListCreativesParamsSchema: v.GenericSchema<unknown, ListCreativesParams> = v.looseObject({
  adId: v.string(),
  creativeStatusFilter: v.optional(v.array(v.string())),
  creativeTypeFilter: v.optional(v.array(v.string())),
  creativeVersionFilter: v.optional(v.array(v.string())),
  maxResults: v.optional(v.number()),
  nextToken: v.optional(v.string()),
});

export type ListCreativesRequestContent = {
  readonly adId: string;
  readonly creativeStatusFilter?: ReadonlyArray<string>;
  readonly creativeTypeFilter?: ReadonlyArray<string>;
  readonly creativeVersionFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
};
export const ListCreativesRequestContentSchema: v.GenericSchema<unknown, ListCreativesRequestContent> = v.looseObject({
  adId: v.string(),
  creativeStatusFilter: v.optional(v.array(v.string())),
  creativeTypeFilter: v.optional(v.array(v.string())),
  creativeVersionFilter: v.optional(v.array(v.string())),
  maxResults: v.optional(v.number()),
  nextToken: v.optional(v.string()),
});

export type ListCreativesResponse = {
  readonly data: Inline904;
};
export const ListCreativesResponseSchema: v.GenericSchema<unknown, ListCreativesResponse> = v.looseObject({
  data: v.lazy(() => Inline904Schema),
});

export type ListCreativesResponseContent = {
  readonly creatives?: ReadonlyArray<Inline498>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const ListCreativesResponseContentSchema: v.GenericSchema<unknown, ListCreativesResponseContent> = v.looseObject({
  creatives: v.optional(v.array(v.lazy(() => Inline498Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type ListCreativesResultEntry = {
  readonly adId?: string;
  readonly creationTime?: number;
  readonly creativeProperties?: Inline504;
  readonly creativeStatus?: string;
  readonly creativeType?: string;
  readonly creativeVersion?: string;
  readonly lastUpdateTime?: number;
};
export const ListCreativesResultEntrySchema: v.GenericSchema<unknown, ListCreativesResultEntry> = v.looseObject({
  adId: v.optional(v.string()),
  creationTime: v.optional(v.number()),
  creativeProperties: v.optional(v.lazy(() => Inline504Schema)),
  creativeStatus: v.optional(v.string()),
  creativeType: v.optional(v.string()),
  creativeVersion: v.optional(v.string()),
  lastUpdateTime: v.optional(v.number()),
});

export type ListMigrationsParams = {
  readonly adGroupIdFilter?: Inline1224;
  readonly adIdFilter?: Inline1225;
  readonly adStateFilter?: Inline1226;
  readonly campaignIdFilter?: Inline1227;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline1228;
  readonly nextToken?: string;
};
export const ListMigrationsParamsSchema: v.GenericSchema<unknown, ListMigrationsParams> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline1224Schema)),
  adIdFilter: v.optional(v.lazy(() => Inline1225Schema)),
  adStateFilter: v.optional(v.lazy(() => Inline1226Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline1227Schema)),
  maxResults: v.optional(v.number()),
  migrationStatusFilter: v.optional(v.lazy(() => Inline1228Schema)),
  nextToken: v.optional(v.string()),
});

export type ListMigrationsRequestContent = {
  readonly adGroupIdFilter?: Inline510;
  readonly adIdFilter?: Inline511;
  readonly adStateFilter?: Inline512;
  readonly campaignIdFilter?: Inline513;
  readonly maxResults?: number;
  readonly migrationStatusFilter?: Inline514;
  readonly nextToken?: string;
};
export const ListMigrationsRequestContentSchema: v.GenericSchema<unknown, ListMigrationsRequestContent> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline510Schema)),
  adIdFilter: v.optional(v.lazy(() => Inline511Schema)),
  adStateFilter: v.optional(v.lazy(() => Inline512Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline513Schema)),
  maxResults: v.optional(v.number()),
  migrationStatusFilter: v.optional(v.lazy(() => Inline514Schema)),
  nextToken: v.optional(v.string()),
});

export type ListMigrationsResponse = {
  readonly data: Inline1230;
};
export const ListMigrationsResponseSchema: v.GenericSchema<unknown, ListMigrationsResponse> = v.looseObject({
  data: v.lazy(() => Inline1230Schema),
});

export type ListMigrationsResponseContent = {
  readonly migrations?: ReadonlyArray<Inline516>;
  readonly nextToken?: string;
  readonly totalCount?: number;
};
export const ListMigrationsResponseContentSchema: v.GenericSchema<unknown, ListMigrationsResponseContent> = v.looseObject({
  migrations: v.optional(v.array(v.lazy(() => Inline516Schema))),
  nextToken: v.optional(v.string()),
  totalCount: v.optional(v.number()),
});

export type ListSponsoredBrandsAdGroupsParams = {
  readonly adGroupIdFilter?: Inline1089;
  readonly campaignIdFilter?: Inline1090;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1091;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1092;
};
export const ListSponsoredBrandsAdGroupsParamsSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdGroupsParams> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline1089Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline1090Schema)),
  includeExtendedDataFields: v.optional(v.boolean()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline1091Schema)),
  nextToken: v.optional(v.string()),
  stateFilter: v.optional(v.lazy(() => Inline1092Schema)),
});

export type ListSponsoredBrandsAdGroupsRequestContent = {
  readonly adGroupIdFilter?: Inline524;
  readonly campaignIdFilter?: Inline525;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline526;
  readonly nextToken?: string;
  readonly stateFilter?: Inline527;
};
export const ListSponsoredBrandsAdGroupsRequestContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdGroupsRequestContent> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline524Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline525Schema)),
  includeExtendedDataFields: v.optional(v.boolean()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline526Schema)),
  nextToken: v.optional(v.string()),
  stateFilter: v.optional(v.lazy(() => Inline527Schema)),
});

export type ListSponsoredBrandsAdGroupsResponse = {
  readonly data: Inline1094;
};
export const ListSponsoredBrandsAdGroupsResponseSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdGroupsResponse> = v.looseObject({
  data: v.lazy(() => Inline1094Schema),
});

export type ListSponsoredBrandsAdGroupsResponseContent = {
  readonly adGroups?: ReadonlyArray<Inline529>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const ListSponsoredBrandsAdGroupsResponseContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdGroupsResponseContent> = v.looseObject({
  adGroups: v.optional(v.array(v.lazy(() => Inline529Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type ListSponsoredBrandsAdsParams = {
  readonly adGroupIdFilter?: Inline1118;
  readonly adIdFilter?: Inline1119;
  readonly campaignIdFilter?: Inline1120;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1121;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1122;
};
export const ListSponsoredBrandsAdsParamsSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdsParams> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline1118Schema)),
  adIdFilter: v.optional(v.lazy(() => Inline1119Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline1120Schema)),
  creativeVersionToReturn: v.optional(v.string()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline1121Schema)),
  nextToken: v.optional(v.string()),
  stateFilter: v.optional(v.lazy(() => Inline1122Schema)),
});

export type ListSponsoredBrandsAdsRequestContent = {
  readonly adGroupIdFilter?: Inline531;
  readonly adIdFilter?: Inline532;
  readonly campaignIdFilter?: Inline533;
  readonly creativeVersionToReturn?: string;
  readonly maxResults?: number;
  readonly nameFilter?: Inline534;
  readonly nextToken?: string;
  readonly stateFilter?: Inline535;
};
export const ListSponsoredBrandsAdsRequestContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdsRequestContent> = v.looseObject({
  adGroupIdFilter: v.optional(v.lazy(() => Inline531Schema)),
  adIdFilter: v.optional(v.lazy(() => Inline532Schema)),
  campaignIdFilter: v.optional(v.lazy(() => Inline533Schema)),
  creativeVersionToReturn: v.optional(v.string()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline534Schema)),
  nextToken: v.optional(v.string()),
  stateFilter: v.optional(v.lazy(() => Inline535Schema)),
});

export type ListSponsoredBrandsAdsResponse = {
  readonly data: Inline1124;
};
export const ListSponsoredBrandsAdsResponseSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdsResponse> = v.looseObject({
  data: v.lazy(() => Inline1124Schema),
});

export type ListSponsoredBrandsAdsResponseContent = {
  readonly ads?: ReadonlyArray<Inline537>;
  readonly nextToken?: string;
  readonly totalResults?: number;
};
export const ListSponsoredBrandsAdsResponseContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsAdsResponseContent> = v.looseObject({
  ads: v.optional(v.array(v.lazy(() => Inline537Schema))),
  nextToken: v.optional(v.string()),
  totalResults: v.optional(v.number()),
});

export type ListSponsoredBrandsCampaignsParams = {
  readonly campaignIdFilter?: Inline1194;
  readonly goalTypeFilter?: Inline1195;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1196;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline1197;
  readonly stateFilter?: Inline1198;
};
export const ListSponsoredBrandsCampaignsParamsSchema: v.GenericSchema<unknown, ListSponsoredBrandsCampaignsParams> = v.looseObject({
  campaignIdFilter: v.optional(v.lazy(() => Inline1194Schema)),
  goalTypeFilter: v.optional(v.lazy(() => Inline1195Schema)),
  includeExtendedDataFields: v.optional(v.boolean()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline1196Schema)),
  nextToken: v.optional(v.string()),
  portfolioIdFilter: v.optional(v.lazy(() => Inline1197Schema)),
  stateFilter: v.optional(v.lazy(() => Inline1198Schema)),
});

export type ListSponsoredBrandsCampaignsRequestContent = {
  readonly campaignIdFilter?: Inline544;
  readonly goalTypeFilter?: Inline545;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline546;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline547;
  readonly stateFilter?: Inline548;
};
export const ListSponsoredBrandsCampaignsRequestContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsCampaignsRequestContent> = v.looseObject({
  campaignIdFilter: v.optional(v.lazy(() => Inline544Schema)),
  goalTypeFilter: v.optional(v.lazy(() => Inline545Schema)),
  includeExtendedDataFields: v.optional(v.boolean()),
  maxResults: v.optional(v.number()),
  nameFilter: v.optional(v.lazy(() => Inline546Schema)),
  nextToken: v.optional(v.string()),
  portfolioIdFilter: v.optional(v.lazy(() => Inline547Schema)),
  stateFilter: v.optional(v.lazy(() => Inline548Schema)),
});

export type ListSponsoredBrandsCampaignsResponse = {
  readonly data: Inline1200;
};
export const ListSponsoredBrandsCampaignsResponseSchema: v.GenericSchema<unknown, ListSponsoredBrandsCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline1200Schema),
});

export type ListSponsoredBrandsCampaignsResponseContent = {
  readonly campaigns?: ReadonlyArray<Inline550>;
  readonly nextToken?: string;
  readonly totalCount?: number;
};
export const ListSponsoredBrandsCampaignsResponseContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsCampaignsResponseContent> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline550Schema))),
  nextToken: v.optional(v.string()),
  totalCount: v.optional(v.number()),
});

export type ListSponsoredBrandsOptimizationRulesParams = {
  readonly entityFilter?: Inline1054;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline1055;
};
export const ListSponsoredBrandsOptimizationRulesParamsSchema: v.GenericSchema<unknown, ListSponsoredBrandsOptimizationRulesParams> = v.looseObject({
  entityFilter: v.optional(v.lazy(() => Inline1054Schema)),
  maxResults: v.optional(v.number()),
  nextToken: v.optional(v.string()),
  optimizationRuleIdFilter: v.optional(v.lazy(() => Inline1055Schema)),
});

export type ListSponsoredBrandsOptimizationRulesRequestContent = {
  readonly entityFilter?: Inline557;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleIdFilter?: Inline558;
};
export const ListSponsoredBrandsOptimizationRulesRequestContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsOptimizationRulesRequestContent> = v.looseObject({
  entityFilter: v.optional(v.lazy(() => Inline557Schema)),
  maxResults: v.optional(v.number()),
  nextToken: v.optional(v.string()),
  optimizationRuleIdFilter: v.optional(v.lazy(() => Inline558Schema)),
});

export type ListSponsoredBrandsOptimizationRulesResponse = {
  readonly data: Inline1057;
};
export const ListSponsoredBrandsOptimizationRulesResponseSchema: v.GenericSchema<unknown, ListSponsoredBrandsOptimizationRulesResponse> = v.looseObject({
  data: v.lazy(() => Inline1057Schema),
});

export type ListSponsoredBrandsOptimizationRulesResponseContent = {
  readonly nextToken?: string;
  readonly optimizationRules: ReadonlyArray<Inline560>;
  readonly totalCount?: number;
};
export const ListSponsoredBrandsOptimizationRulesResponseContentSchema: v.GenericSchema<unknown, ListSponsoredBrandsOptimizationRulesResponseContent> = v.looseObject({
  nextToken: v.optional(v.string()),
  optimizationRules: v.array(v.lazy(() => Inline560Schema)),
  totalCount: v.optional(v.number()),
});

export type Migration = {
  readonly migrationEntity: Inline562;
  readonly migrationId: string;
  readonly migrationOptions: ReadonlyArray<Inline568>;
};
export const MigrationSchema: v.GenericSchema<unknown, Migration> = v.looseObject({
  migrationEntity: v.lazy(() => Inline562Schema),
  migrationId: v.string(),
  migrationOptions: v.array(v.lazy(() => Inline568Schema)),
});

export type MigrationEntity = {
  readonly ad?: Inline570;
  readonly adGroupName?: string;
  readonly campaignName?: string;
};
export const MigrationEntitySchema: v.GenericSchema<unknown, MigrationEntity> = v.looseObject({
  ad: v.optional(v.lazy(() => Inline570Schema)),
  adGroupName: v.optional(v.string()),
  campaignName: v.optional(v.string()),
});

export type MigrationJobResultsParams = {
  readonly jobId: string;
  readonly nextToken?: string;
};
export const MigrationJobResultsParamsSchema: v.GenericSchema<unknown, MigrationJobResultsParams> = v.looseObject({
  jobId: v.string(),
  nextToken: v.optional(v.string()),
});

export type MigrationJobResultsRequestContent = {
  readonly jobId: string;
  readonly nextToken?: string;
};
export const MigrationJobResultsRequestContentSchema: v.GenericSchema<unknown, MigrationJobResultsRequestContent> = v.looseObject({
  jobId: v.string(),
  nextToken: v.optional(v.string()),
});

export type MigrationJobResultsResponse = {
  readonly data: Inline1216;
};
export const MigrationJobResultsResponseSchema: v.GenericSchema<unknown, MigrationJobResultsResponse> = v.looseObject({
  data: v.lazy(() => Inline1216Schema),
});

export type MigrationJobResultsResponseContent = {
  readonly campaigns?: ReadonlyArray<Inline578>;
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly nextToken?: string;
};
export const MigrationJobResultsResponseContentSchema: v.GenericSchema<unknown, MigrationJobResultsResponseContent> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline578Schema))),
  jobId: v.optional(v.string()),
  migrationJobStatus: v.optional(v.string()),
  nextToken: v.optional(v.string()),
});

export type MigrationJobStatusParams = {
  readonly jobId: string;
};
export const MigrationJobStatusParamsSchema: v.GenericSchema<unknown, MigrationJobStatusParams> = v.looseObject({
  jobId: v.string(),
});

export type MigrationJobStatusRequestContent = {
  readonly jobId: string;
};
export const MigrationJobStatusRequestContentSchema: v.GenericSchema<unknown, MigrationJobStatusRequestContent> = v.looseObject({
  jobId: v.string(),
});

export type MigrationJobStatusResponse = {
  readonly data: Inline1219;
};
export const MigrationJobStatusResponseSchema: v.GenericSchema<unknown, MigrationJobStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline1219Schema),
});

export type MigrationJobStatusResponseContent = {
  readonly jobId?: string;
  readonly migrationJobStatus?: string;
  readonly migrationJobStatusReason?: string;
};
export const MigrationJobStatusResponseContentSchema: v.GenericSchema<unknown, MigrationJobStatusResponseContent> = v.looseObject({
  jobId: v.optional(v.string()),
  migrationJobStatus: v.optional(v.string()),
  migrationJobStatusReason: v.optional(v.string()),
});

export type MigrationOption = {
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly migrationType?: string;
  readonly optionType: string;
  readonly rationale?: string;
  readonly status?: string;
};
export const MigrationOptionSchema: v.GenericSchema<unknown, MigrationOption> = v.looseObject({
  adGroupId: v.optional(v.string()),
  adId: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  errorCode: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  migrationType: v.optional(v.string()),
  optionType: v.string(),
  rationale: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type MigrationOptionType = "AUTO_COLLECTION" | "MANUAL_COLLECTION" | string;
export const MigrationOptionTypeSchema: v.GenericSchema<unknown, MigrationOptionType> = v.union([v.picklist(["AUTO_COLLECTION", "MANUAL_COLLECTION"]), v.string()]);

export type MigrationResultsParams = {
  readonly nextToken?: string;
};
export const MigrationResultsParamsSchema: v.GenericSchema<unknown, MigrationResultsParams> = v.looseObject({
  nextToken: v.optional(v.string()),
});

export type MigrationResultsRequestContent = {
  readonly nextToken?: string;
};
export const MigrationResultsRequestContentSchema: v.GenericSchema<unknown, MigrationResultsRequestContent> = v.looseObject({
  nextToken: v.optional(v.string()),
});

export type MigrationResultsResponse = {
  readonly data: Inline1222;
};
export const MigrationResultsResponseSchema: v.GenericSchema<unknown, MigrationResultsResponse> = v.looseObject({
  data: v.lazy(() => Inline1222Schema),
});

export type MigrationResultsResponseContent = {
  readonly campaigns?: ReadonlyArray<Inline585>;
  readonly nextToken?: string;
};
export const MigrationResultsResponseContentSchema: v.GenericSchema<unknown, MigrationResultsResponseContent> = v.looseObject({
  campaigns: v.optional(v.array(v.lazy(() => Inline585Schema))),
  nextToken: v.optional(v.string()),
});

export type MigrationStatus = "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED" | string;
export const MigrationStatusSchema: v.GenericSchema<unknown, MigrationStatus> = v.union([v.picklist(["ACCEPTED", "ELIGIBLE", "MIGRATED", "MIGRATION_FAILED"]), v.string()]);

export type MigrationStatusFilter = {
  readonly include?: ReadonlyArray<string>;
};
export const MigrationStatusFilterSchema: v.GenericSchema<unknown, MigrationStatusFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type MigrationType = "IMPROVE" | "MIGRATE" | string;
export const MigrationTypeSchema: v.GenericSchema<unknown, MigrationType> = v.union([v.picklist(["IMPROVE", "MIGRATE"]), v.string()]);

export type ModerationError = {
  readonly code?: string;
  readonly details?: string;
};
export const ModerationErrorSchema: v.GenericSchema<unknown, ModerationError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type MultiAdGroupAd = {
  readonly adGroupId: string;
  readonly adId: string;
  readonly campaignId: string;
  readonly creative?: Inline591;
  readonly extendedData?: Inline595;
  readonly landingPage?: Inline596;
  readonly name: string;
  readonly state: string;
};
export const MultiAdGroupAdSchema: v.GenericSchema<unknown, MultiAdGroupAd> = v.looseObject({
  adGroupId: v.string(),
  adId: v.string(),
  campaignId: v.string(),
  creative: v.optional(v.lazy(() => Inline591Schema)),
  extendedData: v.optional(v.lazy(() => Inline595Schema)),
  landingPage: v.optional(v.lazy(() => Inline596Schema)),
  name: v.string(),
  state: v.string(),
});

export type NameFilter = {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
};
export const NameFilterSchema: v.GenericSchema<unknown, NameFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
  queryTermMatchType: v.optional(v.string()),
});

export type NotFoundErrorCode = "NOT_FOUND" | string;
export const NotFoundErrorCodeSchema: v.GenericSchema<unknown, NotFoundErrorCode> = v.union([v.picklist(["NOT_FOUND"]), v.string()]);

export type NotFoundExceptionResponseContent = {
  readonly code: string;
  readonly message: string;
};
export const NotFoundExceptionResponseContentSchema: v.GenericSchema<unknown, NotFoundExceptionResponseContent> = v.looseObject({
  code: v.string(),
  message: v.string(),
});

export type ObjectIdFilter = {
  readonly include?: ReadonlyArray<string>;
};
export const ObjectIdFilterSchema: v.GenericSchema<unknown, ObjectIdFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type OptimizationRule = {
  readonly conditions?: ReadonlyArray<Inline602>;
  readonly optimizationRuleId?: string;
};
export const OptimizationRuleSchema: v.GenericSchema<unknown, OptimizationRule> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline602Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type OptimizationRuleFailureResponseItem = {
  readonly errors?: ReadonlyArray<Inline604>;
  readonly index: number;
};
export const OptimizationRuleFailureResponseItemSchema: v.GenericSchema<unknown, OptimizationRuleFailureResponseItem> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline604Schema))),
  index: v.number(),
});

export type OptimizationRuleIdFilter = {
  readonly include?: ReadonlyArray<string>;
};
export const OptimizationRuleIdFilterSchema: v.GenericSchema<unknown, OptimizationRuleIdFilter> = v.looseObject({
  include: v.optional(v.array(v.string())),
});

export type OptimizationRulesError = {
  readonly code: string;
  readonly message: string;
};
export const OptimizationRulesErrorSchema: v.GenericSchema<unknown, OptimizationRulesError> = v.looseObject({
  code: v.string(),
  message: v.string(),
});

export type OptimizationRuleToEntityMapping = {
  readonly entityId: string;
  readonly entityType: string;
  readonly optimizationRuleId: string;
};
export const OptimizationRuleToEntityMappingSchema: v.GenericSchema<unknown, OptimizationRuleToEntityMapping> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  optimizationRuleId: v.string(),
});

export type OptimizationRuleToEntityMappingSuccessResponseItem = {
  readonly entityId: string;
  readonly entityType: string;
  readonly index: number;
  readonly optimizationRuleId: string;
};
export const OptimizationRuleToEntityMappingSuccessResponseItemSchema: v.GenericSchema<unknown, OptimizationRuleToEntityMappingSuccessResponseItem> = v.looseObject({
  entityId: v.string(),
  entityType: v.string(),
  index: v.number(),
  optimizationRuleId: v.string(),
});

export type OtherError = {
  readonly cause: Inline610;
  readonly message: string;
  readonly reason: string;
};
export const OtherErrorSchema: v.GenericSchema<unknown, OtherError> = v.looseObject({
  cause: v.lazy(() => Inline610Schema),
  message: v.string(),
  reason: v.string(),
});

export type PerformanceMeasureConditionForSB = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const PerformanceMeasureConditionForSBSchema: v.GenericSchema<unknown, PerformanceMeasureConditionForSB> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type PerformanceMetricForSB = "IS" | "NTB" | "ROAS" | string;
export const PerformanceMetricForSBSchema: v.GenericSchema<unknown, PerformanceMetricForSB> = v.union([v.picklist(["IS", "NTB", "ROAS"]), v.string()]);

export type Placement = "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH" | string;
export const PlacementSchema: v.GenericSchema<unknown, Placement> = v.union([v.picklist(["DETAIL_PAGE", "HOME", "OTHER", "TOP_OF_SEARCH"]), v.string()]);

export type ProductCollectionCreative = {
  readonly asins: ReadonlyArray<string>;
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline615;
  readonly brandName: string;
  readonly customImageAssetId?: string;
  readonly customImageCrop?: Inline616;
  readonly headline: string;
};
export const ProductCollectionCreativeSchema: v.GenericSchema<unknown, ProductCollectionCreative> = v.looseObject({
  asins: v.array(v.string()),
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline615Schema)),
  brandName: v.string(),
  customImageAssetId: v.optional(v.string()),
  customImageCrop: v.optional(v.lazy(() => Inline616Schema)),
  headline: v.string(),
});

export type ProductLocation = "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC" | string;
export const ProductLocationSchema: v.GenericSchema<unknown, ProductLocation> = v.union([v.picklist(["NOT_SOLD_ON_AMAZON", "SOLD_ON_AMAZON", "SOLD_ON_DTC"]), v.string()]);

export type QueryTermMatchType = "BROAD_MATCH" | "EXACT_MATCH" | string;
export const QueryTermMatchTypeSchema: v.GenericSchema<unknown, QueryTermMatchType> = v.union([v.picklist(["BROAD_MATCH", "EXACT_MATCH"]), v.string()]);

export type RangeError = {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause: Inline620;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
};
export const RangeErrorSchema: v.GenericSchema<unknown, RangeError> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  cause: v.lazy(() => Inline620Schema),
  lowerLimit: v.optional(v.string()),
  message: v.string(),
  reason: v.string(),
  upperLimit: v.optional(v.string()),
});

export type Recurrence = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline622>;
  readonly type?: string;
};
export const RecurrenceSchema: v.GenericSchema<unknown, Recurrence> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline622Schema))),
  type: v.optional(v.string()),
});

export type RecurrenceType = "DAILY" | "WEEKLY" | string;
export const RecurrenceTypeSchema: v.GenericSchema<unknown, RecurrenceType> = v.union([v.picklist(["DAILY", "WEEKLY"]), v.string()]);

export type RuleBasedBudget = {
  readonly applicableRuleId?: string;
  readonly applicableRuleName?: string;
  readonly isProcessing?: boolean;
  readonly value?: number;
};
export const RuleBasedBudgetSchema: v.GenericSchema<unknown, RuleBasedBudget> = v.looseObject({
  applicableRuleId: v.optional(v.string()),
  applicableRuleName: v.optional(v.string()),
  isProcessing: v.optional(v.boolean()),
  value: v.optional(v.number()),
});

export type RuleCondition = {
  readonly attributeName: string;
  readonly criteria: Inline626;
};
export const RuleConditionSchema: v.GenericSchema<unknown, RuleCondition> = v.looseObject({
  attributeName: v.string(),
  criteria: v.lazy(() => Inline626Schema),
});

export type RuleDuration = {
  readonly dateRangeTypeRuleDuration?: Inline628;
  readonly eventTypeRuleDuration?: Inline629;
};
export const RuleDurationSchema: v.GenericSchema<unknown, RuleDuration> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline628Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline629Schema)),
});

export type SBBudgetRule = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline631;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const SBBudgetRuleSchema: v.GenericSchema<unknown, SBBudgetRule> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline631Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type SBBudgetRuleDetails = {
  readonly budgetIncreaseBy?: Inline637;
  readonly duration?: Inline638;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline640;
  readonly recurrence?: Inline641;
  readonly ruleType?: string;
};
export const SBBudgetRuleDetailsSchema: v.GenericSchema<unknown, SBBudgetRuleDetails> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline637Schema)),
  duration: v.optional(v.lazy(() => Inline638Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline640Schema)),
  recurrence: v.optional(v.lazy(() => Inline641Schema)),
  ruleType: v.optional(v.string()),
});

export type SBBudgetRulesRecommendationError = {
  readonly code?: string;
  readonly details?: string;
};
export const SBBudgetRulesRecommendationErrorSchema: v.GenericSchema<unknown, SBBudgetRulesRecommendationError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SBBudgetRulesRecommendationEvent = {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
};
export const SBBudgetRulesRecommendationEventSchema: v.GenericSchema<unknown, SBBudgetRulesRecommendationEvent> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.optional(v.string()),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
  suggestedBudgetIncreasePercent: v.optional(v.number()),
});

export type SBBudgetRulesRecommendationEventRequest = {
  readonly campaignId: string;
};
export const SBBudgetRulesRecommendationEventRequestSchema: v.GenericSchema<unknown, SBBudgetRulesRecommendationEventRequest> = v.looseObject({
  campaignId: v.string(),
});

export type SBBudgetRulesRecommendationEventResponse = {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline646>;
};
export const SBBudgetRulesRecommendationEventResponseSchema: v.GenericSchema<unknown, SBBudgetRulesRecommendationEventResponse> = v.looseObject({
  recommendedBudgetRuleEvents: v.optional(v.array(v.lazy(() => Inline646Schema))),
});

export type SBCampaignBudgetRule = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline648;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const SBCampaignBudgetRuleSchema: v.GenericSchema<unknown, SBCampaignBudgetRule> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline648Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type SBCampaignPerformanceForecastsParams = {
  readonly campaigns: ReadonlyArray<Inline1006>;
};
export const SBCampaignPerformanceForecastsParamsSchema: v.GenericSchema<unknown, SBCampaignPerformanceForecastsParams> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline1006Schema)),
});

export type SBCampaignPerformanceForecastsRequestContent = {
  readonly campaigns: ReadonlyArray<Inline654>;
};
export const SBCampaignPerformanceForecastsRequestContentSchema: v.GenericSchema<unknown, SBCampaignPerformanceForecastsRequestContent> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline654Schema)),
});

export type SBCampaignPerformanceForecastsResponse = {

};
export const SBCampaignPerformanceForecastsResponseSchema: v.GenericSchema<unknown, SBCampaignPerformanceForecastsResponse> = v.looseObject({

});

export type SBCampaignPerformanceForecastsResponseContent = {
  readonly campaigns?: Inline662;
};
export const SBCampaignPerformanceForecastsResponseContentSchema: v.GenericSchema<unknown, SBCampaignPerformanceForecastsResponseContent> = v.looseObject({
  campaigns: v.optional(v.lazy(() => Inline662Schema)),
});

export type SbCampaignsBudgetUsageParams = {
  readonly campaignIds?: ReadonlyArray<string>;
};
export const SbCampaignsBudgetUsageParamsSchema: v.GenericSchema<unknown, SbCampaignsBudgetUsageParams> = v.looseObject({
  campaignIds: v.optional(v.array(v.string())),
});

export type SbCampaignsBudgetUsageResponse = {

};
export const SbCampaignsBudgetUsageResponseSchema: v.GenericSchema<unknown, SbCampaignsBudgetUsageResponse> = v.looseObject({

});

export type SBForecastingAccessDeniedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingAccessDeniedExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingAccessDeniedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBForecastingAdGroup = {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly keywords?: ReadonlyArray<Inline666>;
  readonly landingPages?: ReadonlyArray<Inline667>;
  readonly negativeKeywords?: ReadonlyArray<Inline668>;
  readonly negativeTargets?: ReadonlyArray<Inline669>;
  readonly targets?: ReadonlyArray<Inline670>;
  readonly themes?: ReadonlyArray<Inline671>;
};
export const SBForecastingAdGroupSchema: v.GenericSchema<unknown, SBForecastingAdGroup> = v.looseObject({
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  keywords: v.optional(v.array(v.lazy(() => Inline666Schema))),
  landingPages: v.optional(v.array(v.lazy(() => Inline667Schema))),
  negativeKeywords: v.optional(v.array(v.lazy(() => Inline668Schema))),
  negativeTargets: v.optional(v.array(v.lazy(() => Inline669Schema))),
  targets: v.optional(v.array(v.lazy(() => Inline670Schema))),
  themes: v.optional(v.array(v.lazy(() => Inline671Schema))),
});

export type SBForecastingAttributeName = "COST_PER_CLICK" | string;
export const SBForecastingAttributeNameSchema: v.GenericSchema<unknown, SBForecastingAttributeName> = v.union([v.picklist(["COST_PER_CLICK"]), v.string()]);

export type SBForecastingBadRequestExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingBadRequestExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingBadRequestExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBForecastingComparisonOperator = "LESS_THAN_OR_EQUAL_TO" | string;
export const SBForecastingComparisonOperatorSchema: v.GenericSchema<unknown, SBForecastingComparisonOperator> = v.union([v.picklist(["LESS_THAN_OR_EQUAL_TO"]), v.string()]);

export type SBForecastingCreativeType = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBForecastingCreativeTypeSchema: v.GenericSchema<unknown, SBForecastingCreativeType> = v.union([v.picklist(["BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"]), v.string()]);

export type SBForecastingCriteria = {
  readonly comparisonOperator?: string;
  readonly value?: number;
};
export const SBForecastingCriteriaSchema: v.GenericSchema<unknown, SBForecastingCriteria> = v.looseObject({
  comparisonOperator: v.optional(v.string()),
  value: v.optional(v.number()),
});

export type SBForecastingErrorObject = {
  readonly code?: string;
  readonly description?: string;
  readonly index?: number;
};
export const SBForecastingErrorObjectSchema: v.GenericSchema<unknown, SBForecastingErrorObject> = v.looseObject({
  code: v.optional(v.string()),
  description: v.optional(v.string()),
  index: v.optional(v.number()),
});

export type SBForecastingInternalServerExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingInternalServerExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingInternalServerExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBForecastingKeyword = {
  readonly bid?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const SBForecastingKeywordSchema: v.GenericSchema<unknown, SBForecastingKeyword> = v.looseObject({
  bid: v.optional(v.number()),
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type SBForecastingLandingPageObject = {
  readonly landingPageUrl?: string;
};
export const SBForecastingLandingPageObjectSchema: v.GenericSchema<unknown, SBForecastingLandingPageObject> = v.looseObject({
  landingPageUrl: v.optional(v.string()),
});

export type SBForecastingMetric = {
  readonly metric?: string;
  readonly value?: Inline682;
};
export const SBForecastingMetricSchema: v.GenericSchema<unknown, SBForecastingMetric> = v.looseObject({
  metric: v.optional(v.string()),
  value: v.optional(v.lazy(() => Inline682Schema)),
});

export type SBForecastingMetricValue = {
  readonly max?: number;
  readonly min?: number;
};
export const SBForecastingMetricValueSchema: v.GenericSchema<unknown, SBForecastingMetricValue> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type SBForecastingNegativeKeyword = {
  readonly keywordText?: string;
  readonly matchType?: string;
};
export const SBForecastingNegativeKeywordSchema: v.GenericSchema<unknown, SBForecastingNegativeKeyword> = v.looseObject({
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
});

export type SBForecastingNegativeProductExpression = {
  readonly type?: string;
  readonly value?: string;
};
export const SBForecastingNegativeProductExpressionSchema: v.GenericSchema<unknown, SBForecastingNegativeProductExpression> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type SBForecastingNegativeProductTarget = {
  readonly expressions?: ReadonlyArray<Inline687>;
};
export const SBForecastingNegativeProductTargetSchema: v.GenericSchema<unknown, SBForecastingNegativeProductTarget> = v.looseObject({
  expressions: v.optional(v.array(v.lazy(() => Inline687Schema))),
});

export type SBForecastingOptimizationRules = {
  readonly attributeName?: string;
  readonly criteria?: Inline689;
};
export const SBForecastingOptimizationRulesSchema: v.GenericSchema<unknown, SBForecastingOptimizationRules> = v.looseObject({
  attributeName: v.optional(v.string()),
  criteria: v.optional(v.lazy(() => Inline689Schema)),
});

export type SBForecastingProductExpression = {
  readonly type?: string;
  readonly value?: string;
};
export const SBForecastingProductExpressionSchema: v.GenericSchema<unknown, SBForecastingProductExpression> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type SBForecastingProductTarget = {
  readonly bid?: number;
  readonly expressions?: ReadonlyArray<Inline692>;
};
export const SBForecastingProductTargetSchema: v.GenericSchema<unknown, SBForecastingProductTarget> = v.looseObject({
  bid: v.optional(v.number()),
  expressions: v.optional(v.array(v.lazy(() => Inline692Schema))),
});

export type SBForecastingRequestCampaignObject = {
  readonly adGroups: ReadonlyArray<Inline694>;
  readonly budget: number;
  readonly budgetType?: string;
  readonly endDate?: string;
  readonly forecastType: string;
  readonly goal?: string;
  readonly optimizationRules?: ReadonlyArray<Inline700>;
  readonly startDate?: string;
};
export const SBForecastingRequestCampaignObjectSchema: v.GenericSchema<unknown, SBForecastingRequestCampaignObject> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline694Schema)),
  budget: v.number(),
  budgetType: v.optional(v.string()),
  endDate: v.optional(v.string()),
  forecastType: v.string(),
  goal: v.optional(v.string()),
  optimizationRules: v.optional(v.array(v.lazy(() => Inline700Schema))),
  startDate: v.optional(v.string()),
});

export type SBForecastingResponseCampaignObject = {
  readonly errors?: ReadonlyArray<Inline702>;
  readonly successes?: ReadonlyArray<Inline703>;
};
export const SBForecastingResponseCampaignObjectSchema: v.GenericSchema<unknown, SBForecastingResponseCampaignObject> = v.looseObject({
  errors: v.optional(v.array(v.lazy(() => Inline702Schema))),
  successes: v.optional(v.array(v.lazy(() => Inline703Schema))),
});

export type SBForecastingSuccessCampaign = {
  readonly forecastTimestamp?: string;
  readonly forecasts?: ReadonlyArray<Inline705>;
};
export const SBForecastingSuccessCampaignSchema: v.GenericSchema<unknown, SBForecastingSuccessCampaign> = v.looseObject({
  forecastTimestamp: v.optional(v.string()),
  forecasts: v.optional(v.array(v.lazy(() => Inline705Schema))),
});

export type SBForecastingSuccessObject = {
  readonly campaign?: Inline707;
  readonly index?: number;
};
export const SBForecastingSuccessObjectSchema: v.GenericSchema<unknown, SBForecastingSuccessObject> = v.looseObject({
  campaign: v.optional(v.lazy(() => Inline707Schema)),
  index: v.optional(v.number()),
});

export type SBForecastingTheme = {
  readonly bid?: number;
  readonly themeType?: string;
};
export const SBForecastingThemeSchema: v.GenericSchema<unknown, SBForecastingTheme> = v.looseObject({
  bid: v.optional(v.number()),
  themeType: v.optional(v.string()),
});

export type SBForecastingThrottlingExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingThrottlingExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingThrottlingExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBForecastingUnauthorizedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingUnauthorizedExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingUnauthorizedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBForecastingUnprocessableEntityExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBForecastingUnprocessableEntityExceptionResponseContentSchema: v.GenericSchema<unknown, SBForecastingUnprocessableEntityExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBGetAssociatedCampaignsResponse = {
  readonly associatedCampaigns?: ReadonlyArray<Inline713>;
  readonly nextToken?: string;
};
export const SBGetAssociatedCampaignsResponseSchema: v.GenericSchema<unknown, SBGetAssociatedCampaignsResponse> = v.looseObject({
  associatedCampaigns: v.optional(v.array(v.lazy(() => Inline713Schema))),
  nextToken: v.optional(v.string()),
});

export type SBGetBudgetRulesRecommendationParams = {
  readonly body: Inline997;
};
export const SBGetBudgetRulesRecommendationParamsSchema: v.GenericSchema<unknown, SBGetBudgetRulesRecommendationParams> = v.looseObject({
  body: v.lazy(() => Inline997Schema),
});

export type SBGetBudgetRulesRecommendationResponse = {
  readonly data: Inline999;
};
export const SBGetBudgetRulesRecommendationResponseSchema: v.GenericSchema<unknown, SBGetBudgetRulesRecommendationResponse> = v.looseObject({
  data: v.lazy(() => Inline999Schema),
});

export type SBInsightsAdFormat = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBInsightsAdFormatSchema: v.GenericSchema<unknown, SBInsightsAdFormat> = v.union([v.picklist(["BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"]), v.string()]);

export type SBInsightsAdGroup = {
  readonly adFormat: string;
  readonly keywords?: ReadonlyArray<Inline716>;
};
export const SBInsightsAdGroupSchema: v.GenericSchema<unknown, SBInsightsAdGroup> = v.looseObject({
  adFormat: v.string(),
  keywords: v.optional(v.array(v.lazy(() => Inline716Schema))),
});

export type SBInsightsBadRequestExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBInsightsBadRequestExceptionResponseContentSchema: v.GenericSchema<unknown, SBInsightsBadRequestExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBInsightsCampaignInsightsParams = {
  readonly nextToken?: string;
  readonly adGroups: ReadonlyArray<Inline1001>;
};
export const SBInsightsCampaignInsightsParamsSchema: v.GenericSchema<unknown, SBInsightsCampaignInsightsParams> = v.looseObject({
  nextToken: v.optional(v.string()),
  adGroups: v.array(v.lazy(() => Inline1001Schema)),
});

export type SBInsightsCampaignInsightsRequestContent = {
  readonly adGroups: ReadonlyArray<Inline719>;
};
export const SBInsightsCampaignInsightsRequestContentSchema: v.GenericSchema<unknown, SBInsightsCampaignInsightsRequestContent> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline719Schema)),
});

export type SBInsightsCampaignInsightsResponse = {
  readonly data: Inline1003;
};
export const SBInsightsCampaignInsightsResponseSchema: v.GenericSchema<unknown, SBInsightsCampaignInsightsResponse> = v.looseObject({
  data: v.lazy(() => Inline1003Schema),
});

export type SBInsightsCampaignInsightsResponseContent = {
  readonly insights?: ReadonlyArray<Inline721>;
  readonly nextToken?: string;
};
export const SBInsightsCampaignInsightsResponseContentSchema: v.GenericSchema<unknown, SBInsightsCampaignInsightsResponseContent> = v.looseObject({
  insights: v.optional(v.array(v.lazy(() => Inline721Schema))),
  nextToken: v.optional(v.string()),
});

export type SBInsightsInternalServerExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBInsightsInternalServerExceptionResponseContentSchema: v.GenericSchema<unknown, SBInsightsInternalServerExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBInsightsKeyword = {
  readonly bid: number;
  readonly keywordText: string;
  readonly matchType: string;
};
export const SBInsightsKeywordSchema: v.GenericSchema<unknown, SBInsightsKeyword> = v.looseObject({
  bid: v.number(),
  keywordText: v.string(),
  matchType: v.string(),
});

export type SBInsightsKeywordAlertType = "LOW_BID" | "LOW_KEYWORD_TRAFFIC" | string;
export const SBInsightsKeywordAlertTypeSchema: v.GenericSchema<unknown, SBInsightsKeywordAlertType> = v.union([v.picklist(["LOW_BID", "LOW_KEYWORD_TRAFFIC"]), v.string()]);

export type SBInsightsKeywordInsight = {
  readonly adGroupIndex?: number;
  readonly alerts?: ReadonlyArray<string>;
  readonly bid?: number;
  readonly keywordIndex?: number;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
};
export const SBInsightsKeywordInsightSchema: v.GenericSchema<unknown, SBInsightsKeywordInsight> = v.looseObject({
  adGroupIndex: v.optional(v.number()),
  alerts: v.optional(v.array(v.string())),
  bid: v.optional(v.number()),
  keywordIndex: v.optional(v.number()),
  keywordText: v.optional(v.string()),
  matchType: v.optional(v.string()),
  searchTermImpressionRank: v.optional(v.number()),
  searchTermImpressionShare: v.optional(v.number()),
});

export type SBInsightsMatchType = "BROAD" | "EXACT" | "PHRASE" | string;
export const SBInsightsMatchTypeSchema: v.GenericSchema<unknown, SBInsightsMatchType> = v.union([v.picklist(["BROAD", "EXACT", "PHRASE"]), v.string()]);

export type SBInsightsObject = Inline728;
export const SBInsightsObjectSchema: v.GenericSchema<unknown, SBInsightsObject> = v.lazy(() => Inline728Schema);

export type SBInsightsThrottlingExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBInsightsThrottlingExceptionResponseContentSchema: v.GenericSchema<unknown, SBInsightsThrottlingExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBInsightsUnauthorizedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBInsightsUnauthorizedExceptionResponseContentSchema: v.GenericSchema<unknown, SBInsightsUnauthorizedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBInsightsUnprocessableEntityExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBInsightsUnprocessableEntityExceptionResponseContentSchema: v.GenericSchema<unknown, SBInsightsUnprocessableEntityExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBKeywordRecommendationCreativeType = "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO" | string;
export const SBKeywordRecommendationCreativeTypeSchema: v.GenericSchema<unknown, SBKeywordRecommendationCreativeType> = v.union([v.picklist(["AUTHOR_COLLECTION", "BRAND_VIDEO", "PRODUCT_COLLECTION", "STORE_SPOTLIGHT", "VIDEO"]), v.string()]);

export type SBKeywordRecommendationError = {
  readonly code?: string;
  readonly details?: string;
};
export const SBKeywordRecommendationErrorSchema: v.GenericSchema<unknown, SBKeywordRecommendationError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SBKeywordRecommendationGoal = "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT" | string;
export const SBKeywordRecommendationGoalSchema: v.GenericSchema<unknown, SBKeywordRecommendationGoal> = v.union([v.picklist(["BRAND_IMPRESSION_SHARE", "PAGE_VISIT"]), v.string()]);

export type SBKeywordRecommendationImpressionRank = number;
export const SBKeywordRecommendationImpressionRankSchema: v.GenericSchema<unknown, SBKeywordRecommendationImpressionRank> = v.number();

export type SBKeywordRecommendationImpressionShare = number;
export const SBKeywordRecommendationImpressionShareSchema: v.GenericSchema<unknown, SBKeywordRecommendationImpressionShare> = v.number();

export type SBKeywordRecommendationMatchType = "broad" | "exact" | "phrase" | string;
export const SBKeywordRecommendationMatchTypeSchema: v.GenericSchema<unknown, SBKeywordRecommendationMatchType> = v.union([v.picklist(["broad", "exact", "phrase"]), v.string()]);

export type SBKeywordRecommendationRequestAsin = {
  readonly asins: ReadonlyArray<string>;
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
};
export const SBKeywordRecommendationRequestAsinSchema: v.GenericSchema<unknown, SBKeywordRecommendationRequestAsin> = v.looseObject({
  asins: v.array(v.string()),
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  goal: v.optional(v.string()),
  locale: v.optional(v.string()),
  maxNumSuggestions: v.optional(v.number()),
});

export type SBKeywordRecommendationRequestUrl = {
  readonly creativeAsins?: ReadonlyArray<string>;
  readonly creativeType?: string;
  readonly goal?: string;
  readonly locale?: string;
  readonly maxNumSuggestions?: number;
  readonly url: string;
};
export const SBKeywordRecommendationRequestUrlSchema: v.GenericSchema<unknown, SBKeywordRecommendationRequestUrl> = v.looseObject({
  creativeAsins: v.optional(v.array(v.string())),
  creativeType: v.optional(v.string()),
  goal: v.optional(v.string()),
  locale: v.optional(v.string()),
  maxNumSuggestions: v.optional(v.number()),
  url: v.string(),
});

export type SBKeywordRecommendationType = "addKeyword" | string;
export const SBKeywordRecommendationTypeSchema: v.GenericSchema<unknown, SBKeywordRecommendationType> = v.union([v.picklist(["addKeyword"]), v.string()]);

export type SBKeywordSuggestion = {
  readonly matchType?: string;
  readonly recommendationId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly type?: string;
  readonly value?: string;
};
export const SBKeywordSuggestionSchema: v.GenericSchema<unknown, SBKeywordSuggestion> = v.looseObject({
  matchType: v.optional(v.string()),
  recommendationId: v.optional(v.string()),
  searchTermImpressionRank: v.optional(v.number()),
  searchTermImpressionShare: v.optional(v.number()),
  translation: v.optional(v.string()),
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type SBListAssociatedBudgetRulesResponse = {
  readonly associatedRules?: ReadonlyArray<Inline743>;
};
export const SBListAssociatedBudgetRulesResponseSchema: v.GenericSchema<unknown, SBListAssociatedBudgetRulesResponse> = v.looseObject({
  associatedRules: v.optional(v.array(v.lazy(() => Inline743Schema))),
});

export type SBOptimizationRecommendationParams = {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline1034>;
};
export const SBOptimizationRecommendationParamsSchema: v.GenericSchema<unknown, SBOptimizationRecommendationParams> = v.looseObject({
  costControlMetric: v.string(),
  landingPages: v.array(v.lazy(() => Inline1034Schema)),
});

export type SBOptimizationRecommendationRequestContent = {
  readonly costControlMetric: string;
  readonly landingPages: ReadonlyArray<Inline749>;
};
export const SBOptimizationRecommendationRequestContentSchema: v.GenericSchema<unknown, SBOptimizationRecommendationRequestContent> = v.looseObject({
  costControlMetric: v.string(),
  landingPages: v.array(v.lazy(() => Inline749Schema)),
});

export type SBOptimizationRecommendationResponse = {

};
export const SBOptimizationRecommendationResponseSchema: v.GenericSchema<unknown, SBOptimizationRecommendationResponse> = v.looseObject({

});

export type SBOptimizationRecommendationResponseContent = {
  readonly costControlMetric: string;
  readonly minimumValue: number;
  readonly recommendedValue: number;
};
export const SBOptimizationRecommendationResponseContentSchema: v.GenericSchema<unknown, SBOptimizationRecommendationResponseContent> = v.looseObject({
  costControlMetric: v.string(),
  minimumValue: v.number(),
  recommendedValue: v.number(),
});

export type SBRuleType = "PERFORMANCE" | "SCHEDULE" | string;
export const SBRuleTypeSchema: v.GenericSchema<unknown, SBRuleType> = v.union([v.picklist(["PERFORMANCE", "SCHEDULE"]), v.string()]);

export type SBTargetingAccessDeniedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingAccessDeniedExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingAccessDeniedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBTargetingAgeRange = {
  readonly ageRangeRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
};
export const SBTargetingAgeRangeSchema: v.GenericSchema<unknown, SBTargetingAgeRange> = v.looseObject({
  ageRangeRefinementId: v.string(),
  name: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type SBTargetingBadRequestExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingBadRequestExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingBadRequestExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBTargetingBrand = {
  readonly brandRefinementId: string;
  readonly name?: string;
};
export const SBTargetingBrandSchema: v.GenericSchema<unknown, SBTargetingBrand> = v.looseObject({
  brandRefinementId: v.string(),
  name: v.optional(v.string()),
});

export type SBTargetingCategory = {
  readonly asinCountRange?: Inline757;
  readonly categoryRefinementId?: string;
  readonly estimatedReach?: Inline758;
  readonly isTargetable?: boolean;
  readonly name?: string;
  readonly parentCategoryRefinementId?: string;
  readonly translatedName?: string;
};
export const SBTargetingCategorySchema: v.GenericSchema<unknown, SBTargetingCategory> = v.looseObject({
  asinCountRange: v.optional(v.lazy(() => Inline757Schema)),
  categoryRefinementId: v.optional(v.string()),
  estimatedReach: v.optional(v.lazy(() => Inline758Schema)),
  isTargetable: v.optional(v.boolean()),
  name: v.optional(v.string()),
  parentCategoryRefinementId: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type SBTargetingEstimatedReachRange = {
  readonly max?: number;
  readonly min?: number;
};
export const SBTargetingEstimatedReachRangeSchema: v.GenericSchema<unknown, SBTargetingEstimatedReachRange> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type SBTargetingGenre = {
  readonly genreRefinementId: string;
  readonly name?: string;
  readonly translatedName?: string;
};
export const SBTargetingGenreSchema: v.GenericSchema<unknown, SBTargetingGenre> = v.looseObject({
  genreRefinementId: v.string(),
  name: v.optional(v.string()),
  translatedName: v.optional(v.string()),
});

export type SBTargetingGetNegativeBrandsParams = {
  readonly nextToken?: string;
};
export const SBTargetingGetNegativeBrandsParamsSchema: v.GenericSchema<unknown, SBTargetingGetNegativeBrandsParams> = v.looseObject({
  nextToken: v.optional(v.string()),
});

export type SBTargetingGetNegativeBrandsResponse = {
  readonly data: Inline1023;
};
export const SBTargetingGetNegativeBrandsResponseSchema: v.GenericSchema<unknown, SBTargetingGetNegativeBrandsResponse> = v.looseObject({
  data: v.lazy(() => Inline1023Schema),
});

export type SBTargetingGetNegativeBrandsResponseContent = {
  readonly brands?: ReadonlyArray<Inline762>;
  readonly nextToken?: string;
};
export const SBTargetingGetNegativeBrandsResponseContentSchema: v.GenericSchema<unknown, SBTargetingGetNegativeBrandsResponseContent> = v.looseObject({
  brands: v.optional(v.array(v.lazy(() => Inline762Schema))),
  nextToken: v.optional(v.string()),
});

export type SBTargetingGetRefinementsForCategoryParams = {
  readonly categoryRefinementId: string;
  readonly locale?: string;
  readonly nextToken?: string;
};
export const SBTargetingGetRefinementsForCategoryParamsSchema: v.GenericSchema<unknown, SBTargetingGetRefinementsForCategoryParams> = v.looseObject({
  categoryRefinementId: v.string(),
  locale: v.optional(v.string()),
  nextToken: v.optional(v.string()),
});

export type SBTargetingGetRefinementsForCategoryResponse = {
  readonly data: Inline1066;
};
export const SBTargetingGetRefinementsForCategoryResponseSchema: v.GenericSchema<unknown, SBTargetingGetRefinementsForCategoryResponse> = v.looseObject({
  data: v.lazy(() => Inline1066Schema),
});

export type SBTargetingGetRefinementsForCategoryResponseContent = {
  readonly ageRanges?: ReadonlyArray<Inline764>;
  readonly brands?: ReadonlyArray<Inline765>;
  readonly genres?: ReadonlyArray<Inline766>;
  readonly nextToken?: string;
};
export const SBTargetingGetRefinementsForCategoryResponseContentSchema: v.GenericSchema<unknown, SBTargetingGetRefinementsForCategoryResponseContent> = v.looseObject({
  ageRanges: v.optional(v.array(v.lazy(() => Inline764Schema))),
  brands: v.optional(v.array(v.lazy(() => Inline765Schema))),
  genres: v.optional(v.array(v.lazy(() => Inline766Schema))),
  nextToken: v.optional(v.string()),
});

export type SBTargetingGetTargetableASINCountsParams = {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline1070;
  readonly ratingRange?: Inline1071;
};
export const SBTargetingGetTargetableASINCountsParamsSchema: v.GenericSchema<unknown, SBTargetingGetTargetableASINCountsParams> = v.looseObject({
  ageRanges: v.optional(v.array(v.string())),
  brands: v.optional(v.array(v.string())),
  category: v.string(),
  genres: v.optional(v.array(v.string())),
  isPrimeShipping: v.optional(v.boolean()),
  priceRange: v.optional(v.lazy(() => Inline1070Schema)),
  ratingRange: v.optional(v.lazy(() => Inline1071Schema)),
});

export type SBTargetingGetTargetableASINCountsRequestContent = {
  readonly ageRanges?: ReadonlyArray<string>;
  readonly brands?: ReadonlyArray<string>;
  readonly category: string;
  readonly genres?: ReadonlyArray<string>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline768;
  readonly ratingRange?: Inline769;
};
export const SBTargetingGetTargetableASINCountsRequestContentSchema: v.GenericSchema<unknown, SBTargetingGetTargetableASINCountsRequestContent> = v.looseObject({
  ageRanges: v.optional(v.array(v.string())),
  brands: v.optional(v.array(v.string())),
  category: v.string(),
  genres: v.optional(v.array(v.string())),
  isPrimeShipping: v.optional(v.boolean()),
  priceRange: v.optional(v.lazy(() => Inline768Schema)),
  ratingRange: v.optional(v.lazy(() => Inline769Schema)),
});

export type SBTargetingGetTargetableASINCountsResponse = {
  readonly data: Inline1073;
};
export const SBTargetingGetTargetableASINCountsResponseSchema: v.GenericSchema<unknown, SBTargetingGetTargetableASINCountsResponse> = v.looseObject({
  data: v.lazy(() => Inline1073Schema),
});

export type SBTargetingGetTargetableASINCountsResponseContent = {
  readonly asinCounts?: Inline771;
};
export const SBTargetingGetTargetableASINCountsResponseContentSchema: v.GenericSchema<unknown, SBTargetingGetTargetableASINCountsResponseContent> = v.looseObject({
  asinCounts: v.optional(v.lazy(() => Inline771Schema)),
});

export type SBTargetingGetTargetableCategoriesParams = {
  readonly locale?: string;
  readonly supplySource: string;
  readonly includeOnlyRootCategories?: boolean;
  readonly parentCategoryRefinementId?: string;
  readonly nextToken?: string;
};
export const SBTargetingGetTargetableCategoriesParamsSchema: v.GenericSchema<unknown, SBTargetingGetTargetableCategoriesParams> = v.looseObject({
  locale: v.optional(v.string()),
  supplySource: v.string(),
  includeOnlyRootCategories: v.optional(v.boolean()),
  parentCategoryRefinementId: v.optional(v.string()),
  nextToken: v.optional(v.string()),
});

export type SBTargetingGetTargetableCategoriesResponse = {
  readonly data: Inline1062;
};
export const SBTargetingGetTargetableCategoriesResponseSchema: v.GenericSchema<unknown, SBTargetingGetTargetableCategoriesResponse> = v.looseObject({
  data: v.lazy(() => Inline1062Schema),
});

export type SBTargetingGetTargetableCategoriesResponseContent = {
  readonly categoryTree?: ReadonlyArray<Inline773>;
  readonly nextToken?: string;
};
export const SBTargetingGetTargetableCategoriesResponseContentSchema: v.GenericSchema<unknown, SBTargetingGetTargetableCategoriesResponseContent> = v.looseObject({
  categoryTree: v.optional(v.array(v.lazy(() => Inline773Schema))),
  nextToken: v.optional(v.string()),
});

export type SBTargetingIntegerRange = {
  readonly max?: number;
  readonly min?: number;
};
export const SBTargetingIntegerRangeSchema: v.GenericSchema<unknown, SBTargetingIntegerRange> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type SBTargetingInternalServerExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingInternalServerExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingInternalServerExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBTargetingLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export const SBTargetingLocaleSchema: v.GenericSchema<unknown, SBTargetingLocale> = v.union([v.picklist(["ar_AE", "de_DE", "en_AE", "en_AU", "en_CA", "en_GB", "en_IN", "en_SG", "en_US", "es_ES", "es_MX", "fr_CA", "fr_FR", "hi_IN", "it_IT", "ja_JP", "ko_KR", "nl_NL", "pl_PL", "pt_BR", "sv_SE", "ta_IN", "th_TH", "tr_TR", "vi_VN", "zh_CN"]), v.string()]);

export type SBTargetingPriceRange = {
  readonly max?: number;
  readonly min?: number;
};
export const SBTargetingPriceRangeSchema: v.GenericSchema<unknown, SBTargetingPriceRange> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type SBTargetingRatingRange = {
  readonly max?: number;
  readonly min?: number;
};
export const SBTargetingRatingRangeSchema: v.GenericSchema<unknown, SBTargetingRatingRange> = v.looseObject({
  max: v.optional(v.number()),
  min: v.optional(v.number()),
});

export type SBTargetingSupplySource = "AMAZON" | "STREAMING_VIDEO" | string;
export const SBTargetingSupplySourceSchema: v.GenericSchema<unknown, SBTargetingSupplySource> = v.union([v.picklist(["AMAZON", "STREAMING_VIDEO"]), v.string()]);

export type SBTargetingThrottlingExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingThrottlingExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingThrottlingExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBTargetingUnauthorizedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingUnauthorizedExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingUnauthorizedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SBTargetingUnprocessableEntityExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const SBTargetingUnprocessableEntityExceptionResponseContentSchema: v.GenericSchema<unknown, SBTargetingUnprocessableEntityExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SevenDaysMissedOpportunities = {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
};
export const SevenDaysMissedOpportunitiesSchema: v.GenericSchema<unknown, SevenDaysMissedOpportunities> = v.looseObject({
  endDate: v.optional(v.string()),
  estimatedMissedClicksLower: v.optional(v.number()),
  estimatedMissedClicksUpper: v.optional(v.number()),
  estimatedMissedImpressionsLower: v.optional(v.number()),
  estimatedMissedImpressionsUpper: v.optional(v.number()),
  estimatedMissedSalesLower: v.optional(v.number()),
  estimatedMissedSalesUpper: v.optional(v.number()),
  percentTimeInBudget: v.optional(v.number()),
  startDate: v.optional(v.string()),
});

export type ShopperCohortBidAdjustment = {
  readonly audienceSegments?: ReadonlyArray<Inline786>;
  readonly percentage?: number;
  readonly shopperCohortType?: string;
};
export const ShopperCohortBidAdjustmentSchema: v.GenericSchema<unknown, ShopperCohortBidAdjustment> = v.looseObject({
  audienceSegments: v.optional(v.array(v.lazy(() => Inline786Schema))),
  percentage: v.optional(v.number()),
  shopperCohortType: v.optional(v.string()),
});

export type ShopperCohortType = "AUDIENCE_SEGMENT" | string;
export const ShopperCohortTypeSchema: v.GenericSchema<unknown, ShopperCohortType> = v.union([v.picklist(["AUDIENCE_SEGMENT"]), v.string()]);

export type ShopperSegment = "NEW_TO_BRAND_PURCHASE" | string;
export const ShopperSegmentSchema: v.GenericSchema<unknown, ShopperSegment> = v.union([v.picklist(["NEW_TO_BRAND_PURCHASE"]), v.string()]);

export type SiteRestriction = "AMAZON_BUSINESS" | string;
export const SiteRestrictionSchema: v.GenericSchema<unknown, SiteRestriction> = v.union([v.picklist(["AMAZON_BUSINESS"]), v.string()]);

export type StartMigrationJobParams = {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
};
export const StartMigrationJobParamsSchema: v.GenericSchema<unknown, StartMigrationJobParams> = v.looseObject({
  brandEntityId: v.optional(v.string()),
  campaignIds: v.array(v.string()),
  enableThemeTargeting: v.boolean(),
  isStagedMigration: v.optional(v.boolean()),
  newCampaignState: v.optional(v.string()),
});

export type StartMigrationJobRequestContent = {
  readonly brandEntityId?: string;
  readonly campaignIds: ReadonlyArray<string>;
  readonly enableThemeTargeting: boolean;
  readonly isStagedMigration?: boolean;
  readonly newCampaignState?: string;
};
export const StartMigrationJobRequestContentSchema: v.GenericSchema<unknown, StartMigrationJobRequestContent> = v.looseObject({
  brandEntityId: v.optional(v.string()),
  campaignIds: v.array(v.string()),
  enableThemeTargeting: v.boolean(),
  isStagedMigration: v.optional(v.boolean()),
  newCampaignState: v.optional(v.string()),
});

export type StartMigrationJobResponse = {
  readonly data: Inline1213;
};
export const StartMigrationJobResponseSchema: v.GenericSchema<unknown, StartMigrationJobResponse> = v.looseObject({
  data: v.lazy(() => Inline1213Schema),
});

export type StartMigrationJobResponseContent = {
  readonly jobId?: string;
};
export const StartMigrationJobResponseContentSchema: v.GenericSchema<unknown, StartMigrationJobResponseContent> = v.looseObject({
  jobId: v.optional(v.string()),
});

export type state = "ACTIVE" | "PAUSED" | string;
export const stateSchema: v.GenericSchema<unknown, state> = v.union([v.picklist(["ACTIVE", "PAUSED"]), v.string()]);

export type StorePage = {
  readonly displayName?: string;
  readonly primaryAsin?: string;
};
export const StorePageSchema: v.GenericSchema<unknown, StorePage> = v.looseObject({
  displayName: v.optional(v.string()),
  primaryAsin: v.optional(v.string()),
});

export type StoreSpotlightCreative = {
  readonly brandLogoAssetId: string;
  readonly brandLogoCrop?: Inline795;
  readonly brandName: string;
  readonly consentToTranslate?: boolean;
  readonly creativePropertiesToOptimize?: ReadonlyArray<string>;
  readonly headline?: string;
  readonly headlines?: ReadonlyArray<string>;
  readonly landingPage?: Inline796;
  readonly subpages: ReadonlyArray<Inline797>;
};
export const StoreSpotlightCreativeSchema: v.GenericSchema<unknown, StoreSpotlightCreative> = v.looseObject({
  brandLogoAssetId: v.string(),
  brandLogoCrop: v.optional(v.lazy(() => Inline795Schema)),
  brandName: v.string(),
  consentToTranslate: v.optional(v.boolean()),
  creativePropertiesToOptimize: v.optional(v.array(v.string())),
  headline: v.optional(v.string()),
  headlines: v.optional(v.array(v.string())),
  landingPage: v.optional(v.lazy(() => Inline796Schema)),
  subpages: v.array(v.lazy(() => Inline797Schema)),
});

export type Subpage = {
  readonly asin?: string;
  readonly pageTitle?: string;
  readonly url?: string;
};
export const SubpageSchema: v.GenericSchema<unknown, Subpage> = v.looseObject({
  asin: v.optional(v.string()),
  pageTitle: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type SuggestedHeadline = {
  readonly headline?: string;
  readonly headlineId?: string;
};
export const SuggestedHeadlineSchema: v.GenericSchema<unknown, SuggestedHeadline> = v.looseObject({
  headline: v.optional(v.string()),
  headlineId: v.optional(v.string()),
});

export type Tags = {

};
export const TagsSchema: v.GenericSchema<unknown, Tags> = v.looseObject({

});

export type ThrottledErrorCode = "THROTTLED" | string;
export const ThrottledErrorCodeSchema: v.GenericSchema<unknown, ThrottledErrorCode> = v.union([v.picklist(["THROTTLED"]), v.string()]);

export type ThrottlingErrorCode = "THROTTLED" | string;
export const ThrottlingErrorCodeSchema: v.GenericSchema<unknown, ThrottlingErrorCode> = v.union([v.picklist(["THROTTLED"]), v.string()]);

export type ThrottlingExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const ThrottlingExceptionResponseContentSchema: v.GenericSchema<unknown, ThrottlingExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type timeOfDay = {
  readonly endTime?: string;
  readonly startTime?: string;
};
export const timeOfDaySchema: v.GenericSchema<unknown, timeOfDay> = v.looseObject({
  endTime: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

export type UnauthorizedErrorCode = "UNAUTHORIZED" | string;
export const UnauthorizedErrorCodeSchema: v.GenericSchema<unknown, UnauthorizedErrorCode> = v.union([v.picklist(["UNAUTHORIZED"]), v.string()]);

export type UnauthorizedExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const UnauthorizedExceptionResponseContentSchema: v.GenericSchema<unknown, UnauthorizedExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type UnsupportedMediaTypeErrorCode = "UNSUPPORTED_MEDIA_TYPE" | string;
export const UnsupportedMediaTypeErrorCodeSchema: v.GenericSchema<unknown, UnsupportedMediaTypeErrorCode> = v.union([v.picklist(["UNSUPPORTED_MEDIA_TYPE"]), v.string()]);

export type UnsupportedMediaTypeExceptionResponseContent = {
  readonly code: string;
  readonly details: string;
};
export const UnsupportedMediaTypeExceptionResponseContentSchema: v.GenericSchema<unknown, UnsupportedMediaTypeExceptionResponseContent> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type UpdateAd = {
  readonly adId: string;
  readonly name?: string;
  readonly state?: string;
};
export const UpdateAdSchema: v.GenericSchema<unknown, UpdateAd> = v.looseObject({
  adId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type UpdateAdGroup = {
  readonly adGroupId: string;
  readonly name?: string;
  readonly state?: string;
};
export const UpdateAdGroupSchema: v.GenericSchema<unknown, UpdateAdGroup> = v.looseObject({
  adGroupId: v.string(),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
});

export type UpdateAutoCollectionAd = {
  readonly adId: string;
  readonly creative: Inline812;
};
export const UpdateAutoCollectionAdSchema: v.GenericSchema<unknown, UpdateAutoCollectionAd> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline812Schema),
});

export type UpdateBudgetRulesForSBCampaignsParams = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline959>;
};
export const UpdateBudgetRulesForSBCampaignsParamsSchema: v.GenericSchema<unknown, UpdateBudgetRulesForSBCampaignsParams> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline959Schema))),
});

export type UpdateBudgetRulesForSBCampaignsResponse = {

};
export const UpdateBudgetRulesForSBCampaignsResponseSchema: v.GenericSchema<unknown, UpdateBudgetRulesForSBCampaignsResponse> = v.looseObject({

});

export type UpdateBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline814>;
};
export const UpdateBudgetRulesResponseSchema: v.GenericSchema<unknown, UpdateBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline814Schema))),
});

export type UpdateCampaign = {
  readonly bidding?: Inline816;
  readonly budget?: number;
  readonly campaignId: string;
  readonly endDate?: string;
  readonly name?: string;
  readonly portfolioId?: string;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline819;
};
export const UpdateCampaignSchema: v.GenericSchema<unknown, UpdateCampaign> = v.looseObject({
  bidding: v.optional(v.lazy(() => Inline816Schema)),
  budget: v.optional(v.number()),
  campaignId: v.string(),
  endDate: v.optional(v.string()),
  name: v.optional(v.string()),
  portfolioId: v.optional(v.string()),
  startDate: v.optional(v.string()),
  state: v.optional(v.string()),
  tags: v.optional(v.lazy(() => Inline819Schema)),
});

export type UpdateManualCollectionAd = {
  readonly adId: string;
  readonly creative: Inline821;
};
export const UpdateManualCollectionAdSchema: v.GenericSchema<unknown, UpdateManualCollectionAd> = v.looseObject({
  adId: v.string(),
  creative: v.lazy(() => Inline821Schema),
});

export type UpdateOptimizationRule = {
  readonly conditions?: ReadonlyArray<Inline824>;
  readonly optimizationRuleId?: string;
};
export const UpdateOptimizationRuleSchema: v.GenericSchema<unknown, UpdateOptimizationRule> = v.looseObject({
  conditions: v.optional(v.array(v.lazy(() => Inline824Schema))),
  optimizationRuleId: v.optional(v.string()),
});

export type UpdateOptimizationRuleSuccessResponseItem = {
  readonly index: number;
  readonly optimizationRule: Inline826;
  readonly optimizationRuleId: string;
};
export const UpdateOptimizationRuleSuccessResponseItemSchema: v.GenericSchema<unknown, UpdateOptimizationRuleSuccessResponseItem> = v.looseObject({
  index: v.number(),
  optimizationRule: v.lazy(() => Inline826Schema),
  optimizationRuleId: v.string(),
});

export type UpdateSBBudgetRulesRequest = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline828>;
};
export const UpdateSBBudgetRulesRequestSchema: v.GenericSchema<unknown, UpdateSBBudgetRulesRequest> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline828Schema))),
});

export type UpdateSponsoredBrandsAdGroupsParams = {
  readonly adGroups: ReadonlyArray<Inline1081>;
};
export const UpdateSponsoredBrandsAdGroupsParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdGroupsParams> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline1081Schema)),
});

export type UpdateSponsoredBrandsAdGroupsRequestContent = {
  readonly adGroups: ReadonlyArray<Inline834>;
};
export const UpdateSponsoredBrandsAdGroupsRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdGroupsRequestContent> = v.looseObject({
  adGroups: v.array(v.lazy(() => Inline834Schema)),
});

export type UpdateSponsoredBrandsAdGroupsResponse = {

};
export const UpdateSponsoredBrandsAdGroupsResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdGroupsResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsAdGroupsResponseContent = {
  readonly adGroups?: Inline836;
};
export const UpdateSponsoredBrandsAdGroupsResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdGroupsResponseContent> = v.looseObject({
  adGroups: v.optional(v.lazy(() => Inline836Schema)),
});

export type UpdateSponsoredBrandsAdsParams = {
  readonly ads: ReadonlyArray<Inline1100>;
};
export const UpdateSponsoredBrandsAdsParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline1100Schema)),
});

export type UpdateSponsoredBrandsAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline842>;
};
export const UpdateSponsoredBrandsAdsRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline842Schema)),
});

export type UpdateSponsoredBrandsAdsResponse = {

};
export const UpdateSponsoredBrandsAdsResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdsResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsAdsResponseContent = {
  readonly ads?: Inline844;
};
export const UpdateSponsoredBrandsAdsResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAdsResponseContent> = v.looseObject({
  ads: v.optional(v.lazy(() => Inline844Schema)),
});

export type UpdateSponsoredBrandsAutoCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline892>;
};
export const UpdateSponsoredBrandsAutoCollectionAdsParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAutoCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline892Schema)),
});

export type UpdateSponsoredBrandsAutoCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline853>;
};
export const UpdateSponsoredBrandsAutoCollectionAdsRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAutoCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline853Schema)),
});

export type UpdateSponsoredBrandsAutoCollectionAdsResponse = {

};
export const UpdateSponsoredBrandsAutoCollectionAdsResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAutoCollectionAdsResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsAutoCollectionAdsResponseContent = {
  readonly creatives?: Inline855;
};
export const UpdateSponsoredBrandsAutoCollectionAdsResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsAutoCollectionAdsResponseContent> = v.looseObject({
  creatives: v.optional(v.lazy(() => Inline855Schema)),
});

export type UpdateSponsoredBrandsCampaignsParams = {
  readonly campaigns: ReadonlyArray<Inline1180>;
};
export const UpdateSponsoredBrandsCampaignsParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsCampaignsParams> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline1180Schema)),
});

export type UpdateSponsoredBrandsCampaignsRequestContent = {
  readonly campaigns: ReadonlyArray<Inline859>;
};
export const UpdateSponsoredBrandsCampaignsRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsCampaignsRequestContent> = v.looseObject({
  campaigns: v.array(v.lazy(() => Inline859Schema)),
});

export type UpdateSponsoredBrandsCampaignsResponse = {

};
export const UpdateSponsoredBrandsCampaignsResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsCampaignsResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsCampaignsResponseContent = {
  readonly campaigns?: Inline864;
};
export const UpdateSponsoredBrandsCampaignsResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsCampaignsResponseContent> = v.looseObject({
  campaigns: v.optional(v.lazy(() => Inline864Schema)),
});

export type UpdateSponsoredBrandsManualCollectionAdsParams = {
  readonly ads: ReadonlyArray<Inline910>;
};
export const UpdateSponsoredBrandsManualCollectionAdsParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsManualCollectionAdsParams> = v.looseObject({
  ads: v.array(v.lazy(() => Inline910Schema)),
});

export type UpdateSponsoredBrandsManualCollectionAdsRequestContent = {
  readonly ads: ReadonlyArray<Inline877>;
};
export const UpdateSponsoredBrandsManualCollectionAdsRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsManualCollectionAdsRequestContent> = v.looseObject({
  ads: v.array(v.lazy(() => Inline877Schema)),
});

export type UpdateSponsoredBrandsManualCollectionAdsResponse = {

};
export const UpdateSponsoredBrandsManualCollectionAdsResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsManualCollectionAdsResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsManualCollectionAdsResponseContent = {
  readonly creatives?: Inline880;
};
export const UpdateSponsoredBrandsManualCollectionAdsResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsManualCollectionAdsResponseContent> = v.looseObject({
  creatives: v.optional(v.lazy(() => Inline880Schema)),
});

export type UpdateSponsoredBrandsOptimizationRulesParams = {
  readonly optimizationRules: ReadonlyArray<Inline1042>;
};
export const UpdateSponsoredBrandsOptimizationRulesParamsSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsOptimizationRulesParams> = v.looseObject({
  optimizationRules: v.array(v.lazy(() => Inline1042Schema)),
});

export type UpdateSponsoredBrandsOptimizationRulesRequestContent = {
  readonly optimizationRules: ReadonlyArray<Inline884>;
};
export const UpdateSponsoredBrandsOptimizationRulesRequestContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsOptimizationRulesRequestContent> = v.looseObject({
  optimizationRules: v.array(v.lazy(() => Inline884Schema)),
});

export type UpdateSponsoredBrandsOptimizationRulesResponse = {

};
export const UpdateSponsoredBrandsOptimizationRulesResponseSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsOptimizationRulesResponse> = v.looseObject({

});

export type UpdateSponsoredBrandsOptimizationRulesResponseContent = {
  readonly optimizationRules: Inline886;
};
export const UpdateSponsoredBrandsOptimizationRulesResponseContentSchema: v.GenericSchema<unknown, UpdateSponsoredBrandsOptimizationRulesResponseContent> = v.looseObject({
  optimizationRules: v.lazy(() => Inline886Schema),
});

export type ValueTypeRuleCriteria = {
  readonly comparisonOperator?: string;
  readonly value?: number;
};
export const ValueTypeRuleCriteriaSchema: v.GenericSchema<unknown, ValueTypeRuleCriteria> = v.looseObject({
  comparisonOperator: v.optional(v.string()),
  value: v.optional(v.number()),
});

export type VideoCreative = {
  readonly brandLogoAssetId?: string;
  readonly brandLogoCrop?: Inline890;
  readonly brandName?: string;
  readonly consentToTranslate?: boolean;
  readonly headline?: string;
  readonly videoAssetIds: ReadonlyArray<string>;
};
export const VideoCreativeSchema: v.GenericSchema<unknown, VideoCreative> = v.looseObject({
  brandLogoAssetId: v.optional(v.string()),
  brandLogoCrop: v.optional(v.lazy(() => Inline890Schema)),
  brandName: v.optional(v.string()),
  consentToTranslate: v.optional(v.boolean()),
  headline: v.optional(v.string()),
  videoAssetIds: v.array(v.string()),
});
