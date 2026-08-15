// @generated
// fingerprint: sha256:4bfa9ffe7c9f5a2dc9594fecef4b30f0cc5925fbdb4e02eeb3ff3b7e71772cac
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for the Amazon Ads API v3 — do not edit

export type AcceptHeader = "application/vnd.sbAdCreativeResource.v4+json" | "application/vnd.sbCreativeImageRecommendationResource.v4+json" | "application/vnd.sbCreativeRecommendationResource.v4+json";

export type AccessDeniedErrorCode = "ACCESS_DENIED";

export interface AccessDeniedExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;
}

export interface Ad {

  /** The adGroup identifier. */
  adGroupId: string;

  /** The ad identifier. Note: Ads created using version 3/non-multi ad group campaigns do not have an associated adId. [Learn more](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/campaigns/managing-multi-ad-group-campaigns#ads). */
  adId?: string;

  /** The campaign identifier. */
  campaignId: string;

  creative?: {
    asinExclusions?: string[];
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandLogoUrl?: string;
    brandName?: string;
    collectionName?: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    creativeStatus?: string;
    creativeVersion?: string;
    customImageAssetId?: string;
    customImageCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    customImageUrl?: string;
    customImages?: {
      assetId?: string;
      crop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      url?: string;
    }[];
    headline?: string;
    headlines?: string[];
    originalHeadline?: string;
    originalHeadlines?: string[];
    originalVideoAssetIds?: string[];
    subpages?: {
      asin?: string;
      pageTitle?: string;
      url?: string;
    }[];
    title?: string;
    type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    videoAssetIds?: string[];
  };

  extendedData?: {
    creationDate?: number;
    lastUpdateDate?: number;
    servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
    servingStatusDetails?: string[];
  };

  landingPage?: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. Note: Ads created using version 3/non-multi ad group campaigns do not have an associated name. [Learn more](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/campaigns/managing-multi-ad-group-campaigns#ads). */
  name?: string;

  /** The current resource state. */
  state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface AdExtendedData {

  /** Creation date in epoch time. */
  creationDate?: number;

  /** Date of last update in epoch time. */
  lastUpdateDate?: number;

  /** The ad serving status determined by system.
- AD_STATUS_LIVE - Ad's status is enabled.
- AD_POLICING_PENDING_REVIEW - Ad is pending review because of policing reason.
- AD_POLICING_SUSPENDED - Ad is suspended review because of policing reason.
- AD_PAUSED - Ad's status is paused.
- AD_CREATOR_CONTENT_LICENSE_EXPIRED - Ad is suspended because the creator content license has expired for the custom video/image content used in the Ad Creative.
- AD_ARCHIVED - Ad's status is archived.

- AD_GROUP_STATUS_ENABLED - Ad group's (parent) status is enabled.
- AD_GROUP_PAUSED - Ad group's (parent) status is paused.
- AD_GROUP_ARCHIVED - Ad group's (parent) status is archived.
- AD_GROUP_INCOMPLETE - Ad group (parent) does not contain any ads or targeting clauses.
- AD_GROUP_POLICING_PENDING_REVIEW - Ad group is pending review because of policing reason
- AD_GROUP_POLICING_CREATIVE_REJECTED - Ad group is rejected due to creative because of policing reason
- AD_GROUP_LOW_BID - Ad group is less than the minimum allowed bid in its marketplace

- ADVERTISER_STATUS_ENABLED - Advertiser's status is enabled
- ADVERTISER_POLICING_PENDING_REVIEW - Avertiser is pending review because of policing reason
- ADVERTISER_POLICING_SUSPENDED - Advertiser's status is suspended because of policing reason
- ADVERTISER_PAUSED - Advertiser's status is paused
- ADVERTISER_ARCHIVED - Advertiser's status is archived
- ADVERTISER_PAYMENT_FAILURE - Advertiser's internal status is suspended
- ADVERTISER_ACCOUNT_OUT_OF_BUDGET - Advertiser is out of budget for all Sponsored Ads campaigns
- ADVERTISER_OUT_OF_PREPAY_BALANCE - Advertiser is out of prepay balance for all Sponsored Ads campaigns
- ADVERTISER_EXCEED_SPENDS_LIMIT - Advertiser spends over the daily limit

- CAMPAIGN_STATUS_ENABLED - Campaign's (parent) status is enabled.
- CAMPAIGN_PAUSED - Campaign's (parent) status is paused.
- CAMPAIGN_ARCHIVED - Campaign's (parent) status is archived.
- CAMPAIGN_INCOMPLETE - Campaign (parent) does not contain any ads or targeting clauses.
- CAMPAIGN_OUT_OF_BUDGET - Campaign (parent) is out of budget.

- PORTFOLIO_STATUS_ENABLED - Portfolio's (parent) status is enabled
- PORTFOLIO_PAUSED - Portfolio's (parent) status is paused
- PORTFOLIO_ARCHIVED - Portfolio's (parent) status is archived
- PORTFOLIO_OUT_OF_BUDGET - Portfolio (parent) is out of budget
- PORTFOLIO_PENDING_START_DATE - Portfolio's (parent) start date is in the future
- PORTFOLIO_ENDED - Portfolio's (parent) end date is in the past.

- INELIGIBLE - Ad is ineligible.
- ELIGIBLE  - Ad is eligible.
- ENDED - Campaign's (parent) end date is in the past.
- PENDING_REVIEW - Campaign (parent) is pending review.
- PENDING_START_DATE - Campaign's (parent) start date is in the future.
- REJECTED - Campaign (parent) is rejected by moderation process.
- UNKNOWN - Serving status is unknown. Please contact us for support. */
  servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

  /** The serving status reasons of the Ad. */
  servingStatusDetails?: string[];
}

export interface AdFailureResponseItem {

  /** A list of validation errors. */
  errors?: {
    errorType: string;
    errorValue: {
      otherError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      rangeError?: {
        allowed?: string[];
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
    };
  }[];

  /** the index of the ad in the array from the request body. */
  index: number;
}

export interface AdGroup {

  /** The identifier of the keyword. */
  adGroupId: string;

  /** The identifier of the campaign to which the keyword is associated. */
  campaignId: string;

  extendedData?: {
    creationDate?: number;
    lastUpdateDate?: number;
    servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
    servingStatusDetails?: string[];
  };

  /** The name of the ad group. */
  name: string;

  /** The current resource state. */
  state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface AdGroupExtendedData {

  /** Creation date in epoch time. */
  creationDate?: number;

  /** Date of last update in epoch time. */
  lastUpdateDate?: number;

  /** `Notice: the servingStatus enums have not been finalized yet.`
The ad group serving status determined by system.
- AD_GROUP_STATUS_ENABLED - Ad group's status is enabled.
- AD_GROUP_PAUSED - Ad group's status is paused.
- AD_GROUP_ARCHIVED - Ad group's status is archived.
- AD_GROUP_INCOMPLETE - Ad group does not contain any ads or targeting clauses.
- AD_GROUP_POLICING_PENDING_REVIEW - Ad group is pending review because of policing reason
- AD_GROUP_POLICING_CREATIVE_REJECTED - Ad group is rejected due to creative because of policing reason
- AD_GROUP_LOW_BID - Ad group is less than the minimum allowed bid in its marketplace

- ADVERTISER_STATUS_ENABLED - Advertiser's status is enabled
- ADVERTISER_POLICING_PENDING_REVIEW - Avertiser is pending review because of policing reason
- ADVERTISER_POLICING_SUSPENDED - Advertiser's status is suspended because of policing reason
- ADVERTISER_PAUSED - Advertiser's status is paused
- ADVERTISER_ARCHIVED - Advertiser's status is archived
- ADVERTISER_PAYMENT_FAILURE - Advertiser's internal status is suspended
- ADVERTISER_ACCOUNT_OUT_OF_BUDGET - Advertiser is out of budget for all Sponsored Ads campaigns
- ADVERTISER_OUT_OF_PREPAY_BALANCE - Advertiser is out of prepay balance for all Sponsored Ads campaigns
- ADVERTISER_EXCEED_SPENDS_LIMIT - Advertiser spends over the daily limit

- CAMPAIGN_STATUS_ENABLED - Campaign's (parent) status is enabled.
- CAMPAIGN_PAUSED - Campaign's (parent) status is paused.
- CAMPAIGN_ARCHIVED - Campaign's (parent) status is archived.
- CAMPAIGN_INCOMPLETE - Campaign (parent) does not contain any ads or targeting clauses.
- CAMPAIGN_OUT_OF_BUDGET - Campaign (parent) is out of budget.

- PORTFOLIO_STATUS_ENABLED - Portfolio's (parent) status is enabled
- PORTFOLIO_PAUSED - Portfolio's (parent) status is paused
- PORTFOLIO_ARCHIVED - Portfolio's (parent) status is archived
- PORTFOLIO_OUT_OF_BUDGET - Portfolio (parent) is out of budget
- PORTFOLIO_PENDING_START_DATE - Portfolio's (parent) start date is in the future
- PORTFOLIO_ENDED - Portfolio's (parent) end date is in the past.

- INELIGIBLE - Ad group is ineligible.
- ELIGIBLE - Ad group is eligible.
- ENDED - Campaign's (parent) end date is in the past.
- PENDING_REVIEW - Campaign (parent) is pending review.
- PENDING_START_DATE - Campaign's (parent) start date is in the future.
- REJECTED - Campaign (parent) is rejected by moderation process.
- UNKNOWN - Serving status is unknown. Please contact us for support. */
  servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

  /** The serving status reasons of the Ad Group. */
  servingStatusDetails?: string[];
}

export interface AdGroupFailureResponseItem {

  /** A list of validation errors. */
  errors?: {
    errorType: string;
    errorValue: {
      biddingError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
      dateError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      otherError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      rangeError?: {
        allowed?: string[];
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
    };
  }[];

  /** the index of the adGroup in the array from the request body. */
  index: number;
}

export interface AdGroupMutationError {

  /** The type of the error. */
  errorType: string;

  errorValue: {
    biddingError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
    dateError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    otherError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    rangeError?: {
      allowed?: string[];
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
  };
}

export interface AdGroupMutationErrorSelector {

  /** Errors related to bids. */
  biddingError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };

  /** Errors related to dates. */
  dateError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors not related to any of the other error types. */
  otherError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors related to range constraints violations. */
  rangeError?: {
    allowed?: string[];
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };
}

export type AdGroupServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

export interface AdGroupSuccessResponseItem {

  adGroup?: {
    adGroupId: string;
    campaignId: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    name: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  };

  /** the adGroup ID. */
  adGroupId?: string;

  /** the index of the adGroup in the array from the request body. */
  index: number;
}

export interface AdMutationError {

  /** The type of the error. */
  errorType: string;

  errorValue: {
    otherError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    rangeError?: {
      allowed?: string[];
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
  };
}

export interface AdMutationErrorSelector {

  /** Errors not related to any of the other error types. */
  otherError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors related to range constraints violations. */
  rangeError?: {
    allowed?: string[];
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };
}

export type AdServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

export interface AdSuccessResponseItem {

  ad?: {
    adGroupId: string;
    adId: string;
    campaignId: string;
    creative?: {
      asinExclusions?: string[];
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      creativeStatus?: string;
      creativeVersion?: string;
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      title?: string;
      type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
      videoAssetIds?: string[];
    };
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    landingPage?: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  };

  /** the Ad ID. */
  adId?: string;

  /** The index in the original list from the request. */
  index: number;
}

export interface AssetCrop {

  /** The number of pixels to crop down from the value specified as top */
  height?: number;

  /** The leftmost pixel from which to begin cropping */
  left?: number;

  /** The highest pixel from which to begin cropping */
  top?: number;

  /** The number of pixels to crop rightwards from the value specified as left */
  width?: number;
}

export interface AssociatedBudgetRuleResponse {

  /** An enumerated success or error code for machine use. */
  code?: string;

  /** A human-readable description of the error, if unsuccessful */
  details?: string;

  /** The budget rule identifier. */
  ruleId?: string;
}

export interface AssociatedCampaign {

  /** The campaign identifier. */
  campaignId: string;

  /** The campaign name. */
  campaignName: string;

  /** The budget rule evaluation status for this campaign. Read-only. */
  ruleStatus: string;
}

export interface AssociateSponsoredBrandsOptimizationRulesRequestContent {

  optimizationRuleAssociations: {
    entityId: string;
    entityType: string;
    optimizationRuleId: string;
  }[];
}

export interface AssociateSponsoredBrandsOptimizationRulesResponseContent {

  optimizationRuleAssociations: {
    error?: {
      errors?: {
        code: string;
        message: string;
      }[];
      index: number;
    }[];
    success?: {
      entityId: string;
      entityType: string;
      index: number;
      optimizationRuleId: string;
    }[];
  };
}

export interface AudienceSegment {

  audienceId?: string;

  /** Audience type to apply shopper cohort bid adjustments to.
- SPONSORED_ADS_AMC - Common AMC Audience created without a reference to a specific Ad Program.
- BEHAVIOR_DYNAMIC - Amazon curated audiences. */
  audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
}

export type AudienceSegmentType = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";

export interface BidAdjustmentByPlacement {

  percentage?: number;

  /** List of bid adjustments for placements.
- HOME - The home page of the Amazon store.
- DETAIL_PAGE - Product detail pages within the Amazon store.
- OTHER - Other placement groups. Such as search pages in the Amazon Store.
- TOP_OF_SEARCH - Placement at the very top of shopping results (Sparkle). */
  placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
}

export interface BidAdjustmentByShopperSegment {

  percentage?: number;

  /** List of bid adjustments for shopper segments.
- NEW_TO_BRAND_PURCHASE - The shopper segment where shopper has not purchased product from the brand. */
  shopperSegment?: "NEW_TO_BRAND_PURCHASE";
}

export interface Bidding {

  /** Placement level bid adjustment. Note that this field can only be set when 'bidOptimization' is set to false. */
  bidAdjustmentsByPlacement?: {
    percentage?: number;
    placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
  }[];

  /** DEPRECATED [PLANNED SHUTOFF DATE 3/31/2024]
**Note: This feature has been deprecated and planned to shutoff on 03/31/2024. After the shut off date, we will ignore this field in the request and treat it as null. You will not get an error if you supply this field in the request.
Based on customer feedback, we are rethinking this feature in context to Goal based campaigns to help advertiser reach NTB customers at scale with transparent reporting. Meanwhile, if you have any feedback or suggestion related to this feature then please reach out to our customer support teams.

Shopper segment level bid adjustment. When both bidAdjustmentsByPlacement and bidAdjustmentsByShopperSegment are specified, the adjustment will be multiplicative.
This shape is deprecated. */
  bidAdjustmentsByShopperSegment?: {
    percentage?: number;
    shopperSegment?: "NEW_TO_BRAND_PURCHASE";
  }[];

  /** Whether to use automatic placement level bid optimization. If set to true, Amazon will automatically set the right placement adjustment and the bidAdjustmentsByPlacement field is ignored. If set to false, the bidAdjustmentsByPlacement field will be used to adjust bid on different placements.
If this field is changed from false to true, the bidAdjustmentsByPlacement field will be reset to null.
While this field affects bidAdjustmentsByPlacement, it will not control shopperCohortBidAdjustments. */
  bidOptimization?: boolean;

  /** DEPRECATED [PLANNED SHUTOFF DATE 3/31/2024]
**Note: This feature has been deprecated and planned to shutoff on 03/31/2024. After the shut off date, we will ignore this field in the request and treat it as null. You will not get an error if you supply this field in the request.
Based on customer feedback, we are rethinking this feature in context to Goal based campaigns to help advertiser reach NTB customers at scale with transparent reporting. Meanwhile, if you have any feedback or suggestion related to this feature then please reach out to our customer support teams.

The bid optimization strategy.
- MAXIMIZE_IMMEDIATE_SALES - The default bidding strategy. The campaign is optimized to maximize sale.
- MAXIMIZE_NEW_TO_BRAND_CUSTOMERS - The campaign is optimized to acquire more new-to-brand customers.
This shape is deprecated. */
  bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";

  /** Shopper cohort based bid adjustments. */
  shopperCohortBidAdjustments?: {
    audienceSegments?: {
      audienceId?: string;
      audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
    }[];
    percentage?: number;
    shopperCohortType?: "AUDIENCE_SEGMENT";
  }[];
}

export interface BiddingError {

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  lowerLimit?: string;

  /** Human readable error message. */
  message: string;

  /** Exact error reason. */
  reason: string;

  upperLimit?: string;
}

export type BidOptimizationStrategy = "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";

export interface BillingError {

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  /** Human readable error message. */
  message: string;

  /** Exact error reason. */
  reason: string;
}

export interface BrandCollectionLandingPage {

  /** The BrandCollectionLandingPageType is used for brand collection ads, supporting only store page and product list landing pages. */
  pageType?: "PRODUCT_LIST" | "STORE";

  /** URL of an existing simple landing page or Store page for brand collection ads.
If the pageType is PRODUCT_LIST, the landing page must include the ASINs of at least three products that are
advertised as part of the campaign. Do not include this property in the request if the asins property is also
included, these properties are mutually exclusive. */
  url?: string;
}

export type BrandCollectionLandingPageType = "PRODUCT_LIST" | "STORE";

export interface BrandLogoCrop {

  height?: number;

  left?: number;

  top?: number;

  width?: number;
}

export interface BrandVideoCreative {

  /** An array of ASINs associated with the creative. */
  asins: string[];

  /** The identifier of the [brand logo](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#brandlogo) image from the brand store's asset library.
Note that for campaigns created in the Amazon Advertising console prior to release of the brand store's assets library, responses will not include a value for this field. */
  brandLogoAssetId: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName: string;

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language.
If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  headline: string;

  /** Landing page V2, where type is String with allowed values listed, and url or asins of that type. This parameter is in PREVIEW only and can not be used as part of a request. */
  landingPage?: {
    asins?: string[];
    type?: string;
    url?: string;
  };

  /** The assetIds of the original videos submitted by the advertiser.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then 'videoAssetIds' will return translated video assetId whereas `originalVideoAssetIds` will return the original video assetId. In all other cases, `videoAssetIds` will return original video assetId. */
  videoAssetIds: string[];
}

export type BudgetChangeType = "PERCENT";

export interface BudgetError {

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  lowerLimit?: string;

  /** Human readable error message. */
  message: string;

  reason: string;

  upperLimit?: string;
}

export interface budgetIncreaseBy {

  /** The value by which to update the budget of the budget rule. */
  type: "PERCENT";

  /** The budget value. */
  value: number;
}

export interface BudgetRecommendation {

  /** The identifier of a campaign. */
  campaignId: string;

  /** Correlate the recommendation to the campaign index in the request. Zero-based. */
  index: number;

  /** Missed Opportunities in the trailing seven days. */
  sevenDaysMissedOpportunities: {
    endDate?: string;
    estimatedMissedClicksLower?: number;
    estimatedMissedClicksUpper?: number;
    estimatedMissedImpressionsLower?: number;
    estimatedMissedImpressionsUpper?: number;
    estimatedMissedSalesLower?: number;
    estimatedMissedSalesUpper?: number;
    percentTimeInBudget?: number;
    startDate?: string;
  };

  /** Recommended budget for the campaign. */
  suggestedBudget: number;
}

export interface BudgetRecommendationError {

  /** The identifier of a campaign. */
  campaignId: string;

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;

  /** Correlate the recommendation to the campaign index in the request. Zero-based. */
  index: number;
}

export interface BudgetRuleError {

  /** An enumerated error code for machine use. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface BudgetRuleResponse {

  associatedCampaignIds?: string[];

  /** An enumerated success or error code for machine use. */
  code?: string;

  /** A human-readable description of the error, if unsuccessful */
  details?: string;

  /** The rule identifier. */
  ruleId?: string;
}

export type BudgetType = "DAILY" | "LIFETIME";

export interface BudgetUsageCampaign {

  /** Budget amount of resource requested */
  budget?: number;

  /** Budget usage percentage (spend / available budget) for the given budget policy. */
  budgetUsagePercent?: number;

  /** ID of requested resource */
  campaignId?: string;

  /** An index to maintain order of the campaignIds */
  index?: number;

  /** Last evaluation time for budget usage */
  usageUpdatedTimestamp?: string;
}

export interface BudgetUsageCampaignBatchError {

  /** ID of requested resource */
  campaignId?: string;

  /** An enumerated error code for machine use. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;

  /** An index to maintain order of the campaignIds */
  index?: number;
}

export interface BudgetUsageCampaignRequest {

  /** A list of campaign IDs */
  campaignIds?: string[];
}

export interface BudgetUsageCampaignResponse {

  /** List of budget usage percentages that failed to pull */
  error?: {
    campaignId?: string;
    code?: string;
    details?: string;
    index?: number;
  }[];

  /** List of budget usage percentages that were successfully pulled */
  success?: {
    budget?: number;
    budgetUsagePercent?: number;
    campaignId?: string;
    index?: number;
    usageUpdatedTimestamp?: string;
  }[];
}

export interface BudgetUsageError {

  /** An enumerated error code for machine use. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface BulkAdGroupOperationResponse {

  error?: {
    errors?: {
      errorType: string;
      errorValue: {
        biddingError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
        dateError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        otherError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        rangeError?: {
          allowed?: string[];
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
      };
    }[];
    index: number;
  }[];

  success?: {
    adGroup?: {
      adGroupId: string;
      campaignId: string;
      extendedData?: {
        creationDate?: number;
        lastUpdateDate?: number;
        servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
        servingStatusDetails?: string[];
      };
      name: string;
      state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    };
    adGroupId?: string;
    index: number;
  }[];
}

export interface BulkAdOperationResponse {

  error?: {
    errors?: {
      errorType: string;
      errorValue: {
        otherError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        rangeError?: {
          allowed?: string[];
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
      };
    }[];
    index: number;
  }[];

  success?: {
    ad?: {
      adGroupId: string;
      adId: string;
      campaignId: string;
      creative?: {
        asinExclusions?: string[];
        asins?: string[];
        brandLogoAssetID?: string;
        brandLogoCrop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        brandLogoUrl?: string;
        brandName?: string;
        collectionName?: string;
        collectionType?: "BUNDLE" | "THEMED";
        companionAsins?: string[];
        consentToTranslate?: boolean;
        creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
        creativeStatus?: string;
        creativeVersion?: string;
        customImageAssetId?: string;
        customImageCrop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        customImageUrl?: string;
        customImages?: {
          assetId?: string;
          crop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          url?: string;
        }[];
        headline?: string;
        headlines?: string[];
        originalHeadline?: string;
        originalHeadlines?: string[];
        originalVideoAssetIds?: string[];
        subpages?: {
          asin?: string;
          pageTitle?: string;
          url?: string;
        }[];
        title?: string;
        type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
        videoAssetIds?: string[];
      };
      extendedData?: {
        creationDate?: number;
        lastUpdateDate?: number;
        servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
        servingStatusDetails?: string[];
      };
      landingPage?: {
        asins?: string[];
        pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
        url?: string;
      };
      name: string;
      state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    };
    adId?: string;
    index: number;
  }[];
}

export interface BulkAssociationsOptimizationRuleResponse {

  error?: {
    errors?: {
      code: string;
      message: string;
    }[];
    index: number;
  }[];

  success?: {
    entityId: string;
    entityType: string;
    index: number;
    optimizationRuleId: string;
  }[];
}

export interface BulkCampaignOperationResponse {

  error?: {
    errors?: {
      errorType: string;
      errorValue: {
        biddingError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
        billingError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        budgetError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
        dateError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        otherError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        rangeError?: {
          allowed?: string[];
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
      };
    }[];
    index: number;
  }[];

  success?: {
    campaign?: {
      bidding?: {
        bidAdjustmentsByPlacement?: {
          percentage?: number;
          placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
        }[];
        bidAdjustmentsByShopperSegment?: {
          percentage?: number;
          shopperSegment?: "NEW_TO_BRAND_PURCHASE";
        }[];
        bidOptimization?: boolean;
        bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
        shopperCohortBidAdjustments?: {
          audienceSegments?: {
            audienceId?: string;
            audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
          }[];
          percentage?: number;
          shopperCohortType?: "AUDIENCE_SEGMENT";
        }[];
      };
      brandEntityId?: string;
      budget: number;
      budgetType: "DAILY" | "LIFETIME";
      campaignId: string;
      costType?: string;
      endDate?: string;
      extendedData?: {
        creationDate?: number;
        lastUpdateDate?: number;
        servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
        servingStatusDetails?: string[];
      };
      goal?: string;
      isMultiAdGroupsEnabled?: boolean;
      kpi?: string;
      name: string;
      portfolioId?: string;
      productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
      ruleBasedBudget?: {
        applicableRuleId?: string;
        applicableRuleName?: string;
        isProcessing?: boolean;
        value?: number;
      };
      siteRestrictions?: "AMAZON_BUSINESS"[];
      smartDefault?: string[];
      startDate?: string;
      state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      tags?: {

      };
      targetedPGDealId?: string;
    };
    campaignId?: string;
    index: number;
  }[];
}

export interface BulkCreateOptimizationRuleOperationResponse {

  error?: {
    errors?: {
      code: string;
      message: string;
    }[];
    index: number;
  }[];

  success?: {
    entityId: string;
    entityType: string;
    index: number;
    optimizationRule: {
      conditions?: {
        attributeName: string;
        criteria: {
          comparisonOperator?: string;
          value?: number;
        };
      }[];
      optimizationRuleId?: string;
    };
    optimizationRuleId: string;
  }[];
}

export interface BulkCreativeResponse {

  error?: {
    errors?: {
      errorType: string;
      errorValue: {
        otherError?: {
          cause: {
            location: string;
            trigger?: string;
          };
          message: string;
          reason: string;
        };
        rangeError?: {
          allowed?: string[];
          cause: {
            location: string;
            trigger?: string;
          };
          lowerLimit?: string;
          message: string;
          reason: string;
          upperLimit?: string;
        };
      };
    }[];
    index: number;
  }[];

  success?: {
    adId: string;
    creativeVersion?: string;
    index: number;
  }[];
}

export interface BulkDisassociationsOptimizationRuleResponse {

  error?: {
    errors?: {
      code: string;
      message: string;
    }[];
    index: number;
  }[];

  success?: {
    entityId: string;
    entityType: string;
    index: number;
    optimizationRuleId: string;
  }[];
}

export interface BulkUpdateOptimizationRuleOperationResponse {

  error?: {
    errors?: {
      code: string;
      message: string;
    }[];
    index: number;
  }[];

  success?: {
    index: number;
    optimizationRule: {
      conditions?: {
        attributeName: string;
        criteria: {
          comparisonOperator?: string;
          value?: number;
        };
      }[];
      optimizationRuleId?: string;
    };
    optimizationRuleId: string;
  }[];
}

export interface Campaign {

  bidding?: {
    bidAdjustmentsByPlacement?: {
      percentage?: number;
      placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
    }[];
    bidAdjustmentsByShopperSegment?: {
      percentage?: number;
      shopperSegment?: "NEW_TO_BRAND_PURCHASE";
    }[];
    bidOptimization?: boolean;
    bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
    shopperCohortBidAdjustments?: {
      audienceSegments?: {
        audienceId?: string;
        audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
      }[];
      percentage?: number;
      shopperCohortType?: "AUDIENCE_SEGMENT";
    }[];
  };

  brandEntityId?: string;

  budget: number;

  /** For the lifetime budget type, `startDate` and `endDate` must be specified. */
  budgetType: "DAILY" | "LIFETIME";

  /** The identifier of the campaign. */
  campaignId: string;

  /** The costType can be set to determines how the campaign will bid and charge. To view the bid maximums and minimums by geography and costType, see https://advertising.amazon.com/API/docs/en-us/concepts/limits#bid-constraints-by-marketplace. **For Author advertiser, the value will always be CPC**.
- CPC [Default] - Cost per click. The performance of this campaign is measured by the clicks triggered by the ad.
- VCPM - Cost per 1000 viewable impressions. The performance of this campaign is measured by the viewable impressions triggered by the ad.
- FIXED_PRICE - Sale price for a specific ad placement regardless of auction performance. It can only be used for campaign with a targetedPGDealId. */
  costType?: string;

  /** The format of the date is YYYY-MM-DD. */
  endDate?: string;

  /** CampaignExtendedData can only be retrieved via the list API. It won't be available in the response during update/create. */
  extendedData?: {
    creationDate?: number;
    lastUpdateDate?: number;
    servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
    servingStatusDetails?: string[];
  };

  /** Goal will allow you to set goal type to help drive your campaign performance. If no goal is selected then it will default to PAGE_VISIT. **For Author advertiser, the value will always be PAGE_VISIT**.
The goal type of the campaign.
- BRAND_IMPRESSION_SHARE - This goal will allow you grown your brand impression share on top of search placements.
- AD_VIEWS - This goal maximizes view for your ads through all placements.
- PAGE_VISIT [DEFAULT] - This goal drives traffic to your landing and detail pages through all placements.
- ACQUIRE_NEW_CUSTOMERS - This goal drives new customer acquisition for your brand. */
  goal?: string;

  isMultiAdGroupsEnabled?: boolean;

  /** This property is a PREVIEW ONLY. It is a READ ONLY property mapped from the campaign goal field. This is the KPI that the campaign goal is working to optimize for.
- TOP_OF_SEARCH_IMPRESSION_SHARE - will maximize impression for top search placement for BRAND_IMPRESSION_SHARE goal.
- VIEWABLE_IMPRESSIONS - will maximize viewable impressions for AD_VIEWS goal.
- CLICKS - will maximize clicks for PAGE_VISIT goal.
- NEW_TO_BRAND_PURCHASES - will maximize new to brand purchases for ACQUIRE_NEW_CUSTOMERS goal. */
  kpi?: string;

  /** The name of the campaign. */
  name: string;

  /** The identifier of an existing portfolio to which the campaign is associated. */
  portfolioId?: string;

  /** The product location of the campaign.
- SOLD_ON_AMAZON - For products sold on Amazon websites.
- NOT_SOLD_ON_AMAZON - For products not sold on Amazon websites.
- SOLD_ON_DTC - Deprecated (For products sold on DTC websites). */
  productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";

  ruleBasedBudget?: {
    applicableRuleId?: string;
    applicableRuleName?: string;
    isProcessing?: boolean;
    value?: number;
  };

  /** Restrict the ad to a particular site. siteRestrictions is an optional field.  If this field is not set, ads from the campaign will appear on Amazon - including both Amazon retail and Amazon Business.
Please note that:
1) AMAZON_BUSINESS option is only available for Amazon Business operated marketplaces (US, CA, MX, UK, DE, FR, IT, ES, IN, JP, AU);
2) siteRestrictions cannot be changed post campaign creation;
3) siteRestrictions doesn’t support shopperCohortBidding setting. */
  siteRestrictions?: "AMAZON_BUSINESS"[];

  /** The smartDefault specifies a list of the smart default options for the campaign. **For Author advertiser, the value will always be ["MANUAL"]**.

`smartDefault` is optional for create campaign requests. `smartDefault` are applicable to all applicable child entities of the campaign and are not editable once the campaign is created. When using ["TARGETING"], targets will be automatically added based on the goal selected.  When ["MANUAL"] is selected, you will still be required to manually add targets.

If you don't specify `smartDefault`, default value will be applied based on `goal` . If campaign's `goal` is selected, `smartDefault` will be set to ["TARGETING"].  Otherwise, a campaign's `smartDefault` will be set to ["MANUAL"].

Each element in smartDefault can be set to determines which default strategy to be used
- MANUAL - Manual settings, no smart default be applied to the campaign, if MANUAL is added in the list, no other items are allowed in the list (the list must contains only one item)
- TARGETING - Smart Default Targeting creation, will automatically creating targetings when create ad group

Example: ["TARGETING"] */
  smartDefault?: string[];

  /** The format of the date is YYYY-MM-DD. */
  startDate?: string;

  /** The current resource state. */
  state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";

  /** A list of advertiser-specified custom identifiers for the campaign. Each customer identifier is a key-value pair. You can specify a maximum of 50 identifiers. */
  tags?: {

  };

  /** DealId associated with the campaign. This field is immutable and cannot be changed after the campaign is created. */
  targetedPGDealId?: string;
}

export interface CampaignExtendedData {

  /** Creation date in epoch time. */
  creationDate?: number;

  /** Date of last update in epoch time. */
  lastUpdateDate?: number;

  /** `Notice: the servingStatus enums have not been finalized yet.`
The campaign serving status determined by system.
- ADVERTISER_STATUS_ENABLED - Advertiser's status is enabled
- ADVERTISER_POLICING_PENDING_REVIEW - Avertiser is pending review because of policing reason
- ADVERTISER_POLICING_SUSPENDED - Advertiser's status is suspended because of policing reason
- ADVERTISER_PAUSED - Advertiser's status is paused
- ADVERTISER_ARCHIVED - Advertiser's status is archived
- ADVERTISER_PAYMENT_FAILURE - Advertiser's internal status is suspended
- ADVERTISER_ACCOUNT_OUT_OF_BUDGET - Advertiser is out of budget for all Sponsored Ads campaigns
- ADVERTISER_OUT_OF_PREPAY_BALANCE - Advertiser is out of prepay balance for all Sponsored Ads campaigns
- ADVERTISER_EXCEED_SPENDS_LIMIT - Advertiser spends over the daily limit

- CAMPAIGN_STATUS_ENABLED - Campaign's status is enabled.
- CAMPAIGN_PAUSED - Campaign's status is paused.
- CAMPAIGN_ARCHIVED - Campaign's status is archived.
- CAMPAIGN_INCOMPLETE - Campaign does not contain any ads or targeting clauses.
- CAMPAIGN_OUT_OF_BUDGET - Campaign is out of budget.

- PORTFOLIO_STATUS_ENABLED - Portfolio's status is enabled
- PORTFOLIO_PAUSED - Portfolio's status is paused
- PORTFOLIO_ARCHIVED - Portfolio's status is archived
- PORTFOLIO_OUT_OF_BUDGET - Portfolio is out of budget
- PORTFOLIO_PENDING_START_DATE - Portfolio's start date is in the future
- PORTFOLIO_ENDED - Portfolio's end date is in the past.

- INELIGIBLE - Ad Offer is ineligible
- ELIGIBLE - Ad Offer is eligible
- ENDED - Campaign's end date is in the past.
- PENDING_REVIEW - Campaign is pending review.
- PENDING_START_DATE - Campaign's start date is in the future.
- REJECTED - Campaign is rejected by moderation process.
- UNKNOWN - Serving status is unknown. Please contact us for support. */
  servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

  /** The serving status reasons of the Campaign. */
  servingStatusDetails?: string[];
}

export interface CampaignMigrationFinalStatus {

  /** Entity object identifier. */
  legacyCampaignId?: string;

  /** Enumerated status code for migration job status
| Status                                             |  Description |
|----------------------------------------------------------|--------------|
| MIGRATION_COMPLETE  | Migration is complete and new V4 campaigns are ready to serve. The V3 campaigns are archived |
| STAGING_COMPLETE    | Staging of V4 campaign IDs are complete |
| MIGRATION_FAILED         | Migration of V3 campaign failed  |
| MIGRATION_IN_PROGRESS   | Migration for V3 campaign is in-progress | */
  migrationStatus?: string;

  /** Status reason for the given migration status */
  migrationStatusReason?: string;

  newCampaignId?: string;
}

export interface CampaignMutationError {

  /** The type of the error. */
  errorType: string;

  errorValue: {
    biddingError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
    billingError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    budgetError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
    dateError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    otherError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    rangeError?: {
      allowed?: string[];
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
  };
}

export interface CampaignMutationErrorSelector {

  /** Errors related to bids. */
  biddingError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };

  /** Errors related to billing. */
  billingError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  budgetError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };

  /** Errors related to dates. */
  dateError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors not related to any of the other error types. */
  otherError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors related to range constraints violations. */
  rangeError?: {
    allowed?: string[];
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };
}

export interface CampaignMutationFailureResponseItem {

  /** A list of validation errors. */
  errors?: {
    errorType: string;
    errorValue: {
      biddingError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
      billingError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      budgetError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
      dateError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      otherError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      rangeError?: {
        allowed?: string[];
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
    };
  }[];

  /** the index of the campaign in the array from the request body. */
  index: number;
}

export interface CampaignMutationSuccessResponseItem {

  campaign?: {
    bidding?: {
      bidAdjustmentsByPlacement?: {
        percentage?: number;
        placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
      }[];
      bidAdjustmentsByShopperSegment?: {
        percentage?: number;
        shopperSegment?: "NEW_TO_BRAND_PURCHASE";
      }[];
      bidOptimization?: boolean;
      bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
      shopperCohortBidAdjustments?: {
        audienceSegments?: {
          audienceId?: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType?: "AUDIENCE_SEGMENT";
      }[];
    };
    brandEntityId?: string;
    budget: number;
    budgetType: "DAILY" | "LIFETIME";
    campaignId: string;
    costType?: string;
    endDate?: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    goal?: string;
    isMultiAdGroupsEnabled?: boolean;
    kpi?: string;
    name: string;
    portfolioId?: string;
    productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
    ruleBasedBudget?: {
      applicableRuleId?: string;
      applicableRuleName?: string;
      isProcessing?: boolean;
      value?: number;
    };
    siteRestrictions?: "AMAZON_BUSINESS"[];
    smartDefault?: string[];
    startDate?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetedPGDealId?: string;
  };

  /** The campaign ID. */
  campaignId?: string;

  /** The index of the campaign in the array from the request body. */
  index: number;
}

export type CampaignServingStatus = "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";

export type CollectionType = "BUNDLE" | "THEMED";

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";

export type ConflictStateErrorCode = "CONFLICT_STATE";

export interface ConflictStateExceptionResponseContent {

  code: "CONFLICT_STATE";

  message: string;
}

export type CostControlMetric = "COST_PER_CLICK";

export interface CreateAdGroup {

  /** The identifier of the campaign to which the keyword is associated. */
  campaignId: string;

  /** The name of the ad group. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateAssociatedBudgetRulesRequest {

  /** A list of budget rule identifiers. */
  budgetRuleIds?: string[];
}

export interface CreateAssociatedBudgetRulesResponse {

  responses?: {
    code?: string;
    details?: string;
    ruleId?: string;
  }[];
}

export interface CreateAutoCollectionAd {

  /** Entity object identifier. */
  adGroupId: string;

  creative: {
    asinExclusions?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
  };

  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateAutoCollectionCreative {

  asinExclusions?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName: string;
}

export interface CreateBrandVideoAd {

  /** The adGroup identifier. */
  adGroupId: string;

  creative: {
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    collectionName?: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    headline?: string;
    videoAssetIds?: string[];
  };

  landingPage: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateBrandVideoCreative {

  asins?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName?: string;

  collectionName?: string;

  /** The CollectionType is used to designate either an auto or manual collection. */
  collectionType?: "BUNDLE" | "THEMED";

  companionAsins?: string[];

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters. */
  headline?: string;

  videoAssetIds?: string[];
}

export interface CreateBrandVideoCreativeRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  creative: {
    asins: string[];
    brandLogoAssetId: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    consentToTranslate?: boolean;
    headline: string;
    landingPage?: {
      asins?: string[];
      type?: string;
      url?: string;
    };
    videoAssetIds: string[];
  };
}

export interface CreateBrandVideoCreativeResponseContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;
}

export interface CreateBudgetRulesResponse {

  responses?: {
    associatedCampaignIds?: string[];
    code?: string;
    details?: string;
    ruleId?: string;
  }[];
}

export interface CreateCampaign {

  bidding?: {
    bidAdjustmentsByPlacement?: {
      percentage?: number;
      placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
    }[];
    bidAdjustmentsByShopperSegment?: {
      percentage?: number;
      shopperSegment?: "NEW_TO_BRAND_PURCHASE";
    }[];
    bidOptimization?: boolean;
    bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
    shopperCohortBidAdjustments?: {
      audienceSegments?: {
        audienceId?: string;
        audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
      }[];
      percentage?: number;
      shopperCohortType?: "AUDIENCE_SEGMENT";
    }[];
  };

  brandEntityId?: string;

  /** The budget of the campaign. */
  budget: number;

  /** For the lifetime budget type, `startDate` and `endDate` must be specified. */
  budgetType: "DAILY" | "LIFETIME";

  /** The costType can be set to determines how the campaign will bid and charge. To view the bid minimums and maximums by geography and costType, see https://advertising.amazon.com/API/docs/en-us/concepts/limits#bid-constraints-by-marketplace. **For Author advertiser, the value will always be CPC**.
- CPC - Cost per click. The performance of this campaign is measured by the clicks triggered by the ad.
- VCPM - Cost per 1000 viewable impressions. The performance of this campaign is measured by the viewable impressions triggered by the ad.
- FIXED_PRICE - Sale price for a specific ad placement regardless of auction performance. It can only be used for campaign with a targetedPGDealId.

| costType    |  goal       |  Expected Result                                                      |
|-------------|-------------| ----------------------------------------------------------------------|
| Empty       | Empty       | Campaign will be created for costType= CPC and goal= PAGE_VISIT       |
| Empty       | Specified   | It will use default costType based on goal selection. e.g. goal=ACQUIRE_NEW_CUSTOMERS or BRAND_IMPRESSION_SHARE then it will default to costType = VCPM |
| Specified   | Specified   | Campaign will be based on selected goal and costType. If there is a mismatch then it will generate an error. |
| Specified   | Empty       | It will return error and no campaign will be created.                 | */
  costType?: string;

  /** endDate is optional. If endDate is specified, startDate must be specified as well. */
  endDate?: string;

  /** Goal will allow you to set goal type to help drive your campaign performance. If no goal is selected then it will default to PAGE_VISIT. **Note that for Author advertisers, this field cannot be set in create operation**.
The goal type of the campaign.
- BRAND_IMPRESSION_SHARE - This goal will allow you grown your brand impression share on top of search placement.
- AD_VIEWS - This goal maximizes view for your ads through all placements.
- PAGE_VISIT [DEFAULT] - This goal drives traffic to your landing and detail pages through all placements.
- ACQUIRE_NEW_CUSTOMERS - This goal drives new customer acquisition for your brand. */
  goal?: string;

  /** The name of the campaign. */
  name: string;

  /** The identifier of an existing portfolio to which the campaign is associated. */
  portfolioId?: string;

  /** The product location of the campaign.
- SOLD_ON_AMAZON - For products sold on Amazon websites.
- NOT_SOLD_ON_AMAZON - For products not sold on Amazon websites.
- SOLD_ON_DTC - Deprecated (For products sold on DTC websites). */
  productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";

  /** Restrict the ad to a particular site. siteRestrictions is an optional field.  If this field is not set, ads from the campaign will appear on Amazon - including both Amazon retail and Amazon Business.
Please note that:
1) AMAZON_BUSINESS option is only available for Amazon Business operated marketplaces (US, CA, MX, UK, DE, FR, IT, ES, IN, JP, AU);
2) siteRestrictions cannot be changed post campaign creation;
3) siteRestrictions doesn’t support shopperCohortBidding setting. */
  siteRestrictions?: "AMAZON_BUSINESS"[];

  /** The smartDefault specifies a list of the smart default options for the campaign. **Note that for Author advertisers, this field cannot be set in create operation**.

`smartDefault` is optional for create campaign requests. `smartDefault` are applicable to all applicable child entities of the campaign and are not editable once the campaign is created. When using ["TARGETING"], targets will be automatically added based on the goal selected.  When ["MANUAL"] is selected, you will still be required to manually add targets.

If you don't specify `smartDefault`, default value will be applied based on `goal` . If campaign's `goal` is selected, `smartDefault` will be set to ["TARGETING"].  Otherwise, a campaign's `smartDefault` will be set to ["MANUAL"].

Each element in smartDefault can be set to determines which default strategy to be used
- MANUAL - Manual settings, no smart default be applied to the campaign, if MANUAL is added in the list, no other items are allowed in the list (the list must contains only one item)
- TARGETING - Smart Default Targeting creation, will automatically creating targetings when create ad group

Example: ["TARGETING"] */
  smartDefault?: string[];

  /** startDate is optional. If startDate is not specified, current date will be used. */
  startDate?: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";

  /** A list of advertiser-specified custom identifiers for the campaign. Each customer identifier is a key-value pair. You can specify a maximum of 50 identifiers. */
  tags?: {

  };

  /** DealId associated with the campaign. */
  targetedPGDealId?: string;
}

export interface CreateExtendedProductCollectionAd {

  /** The adGroup identifier. */
  adGroupId: string;

  creative: {
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    collectionName?: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    customImages?: {
      assetId?: string;
      crop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      url?: string;
    }[];
    headline?: string;
    headlines?: string[];
  };

  landingPage: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateExtendedProductCollectionCreative {

  asins?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName?: string;

  collectionName?: string;

  /** The CollectionType is used to designate either an auto or manual collection. */
  collectionType?: "BUNDLE" | "THEMED";

  companionAsins?: string[];

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The List of CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** Requires minimum one custom image. You can add an optional collection of custom images that can be displayed on the ad as slideshow. Learn more about slideshow here https://advertising.amazon.com/resources/whats-new/slideshow-ads-creative-for-sponsored-brands/ */
  customImages?: {
    assetId?: string;
    crop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    url?: string;
  }[];

  /** DEPRECATED. Please use `headlines` field to provide the headline texts associated with the creative.
The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
See the policy for headline requirements. */
  headline?: string;

  /** An array of headline texts associated with the creative. */
  headlines?: string[];
}

export interface CreateExtendedProductCollectionCreativeRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  creative: {
    asins: string[];
    brandLogoAssetId: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    customImages?: {
      assetId?: string;
      crop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      url?: string;
    }[];
    headline?: string;
    headlines?: string[];
    landingPage?: {
      asins?: string[];
      type?: string;
      url?: string;
    };
  };
}

export interface CreateExtendedProductCollectionCreativeResponseContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;
}

export interface CreateManualCollectionAd {

  /** Entity object identifier. */
  adGroupId: string;

  creative: {
    asins: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    landingPage?: {
      pageType?: "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    title?: string;
  };

  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateManualCollectionCreative {

  asins: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName: string;

  landingPage?: {
    pageType?: "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  title?: string;
}

export interface CreateOptimizationRule {

  conditions?: {
    attributeName: string;
    criteria: {
      comparisonOperator?: string;
      value?: number;
    };
  }[];

  /** Entity object identifier. */
  entityId?: string;

  entityType?: string;
}

export interface CreateOptimizationRuleSuccessResponseItem {

  /** Entity object identifier. */
  entityId: string;

  entityType: string;

  /** The index of the entityId in the array from the request body. */
  index: number;

  optimizationRule: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    optimizationRuleId?: string;
  };

  /** The identifier of the optimization rule. */
  optimizationRuleId: string;
}

export type CreateOrUpdateEntityState = "ENABLED" | "PAUSED" | "PROPOSED";

export interface CreateProductCollectionAd {

  /** The adGroup identifier. */
  adGroupId: string;

  creative: {
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    customImageAssetId?: string;
    customImageCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    headline?: string;
  };

  landingPage: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateProductCollectionCreative {

  asins?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName?: string;

  customImageAssetId?: string;

  /** The crop to apply to the selected Custom image. A Custom image must have a 1200x628 aspect ratio, with a .01 delta for floating point precision. If a customImageAssetId is supplied but a crop is not, the crop will be defaulted to the whole image. */
  customImageCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters. */
  headline?: string;
}

export interface CreateProductCollectionCreativeRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  creative: {
    asins: string[];
    brandLogoAssetId: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    customImageAssetId?: string;
    customImageCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    headline: string;
  };
}

export interface CreateProductCollectionCreativeResponseContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;
}

export interface CreateSBBudgetRulesRequest {

  /** A list of budget rule details. */
  budgetRulesDetails?: {
    budgetIncreaseBy?: {
      type: "PERCENT";
      value: number;
    };
    duration?: {
      dateRangeTypeRuleDuration?: {
        endDate?: string;
        startDate: string;
      };
      eventTypeRuleDuration?: {
        endDate?: string;
        eventId: string;
        eventName?: string;
        startDate?: string;
      };
    };
    name?: string;
    performanceMeasureCondition?: {
      comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
      metricName: "IS" | "NTB" | "ROAS";
      threshold: number;
    };
    recurrence?: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      intraDaySchedule?: {
        endTime?: string;
        startTime?: string;
      }[];
      type?: "DAILY" | "WEEKLY";
    };
    ruleType?: "PERFORMANCE" | "SCHEDULE";
  }[];
}

export interface CreateSponsoredBrandsAdGroupsRequestContent {

  /** An array of adGroups. */
  adGroups: {
    campaignId: string;
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsAdGroupsResponseContent {

  adGroups?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      adGroup?: {
        adGroupId: string;
        campaignId: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adGroupId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsAutoCollectionAdsRequestContent {

  ads: {
    adGroupId: string;
    creative: {
      asinExclusions?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsAutoCollectionAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsBrandVideoAdsRequestContent {

  /** An array of Ads. */
  ads: {
    adGroupId: string;
    creative: {
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      headline?: string;
      videoAssetIds?: string[];
    };
    landingPage: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsBrandVideoAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsCampaignsRequestContent {

  campaigns: {
    bidding?: {
      bidAdjustmentsByPlacement?: {
        percentage?: number;
        placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
      }[];
      bidAdjustmentsByShopperSegment?: {
        percentage?: number;
        shopperSegment?: "NEW_TO_BRAND_PURCHASE";
      }[];
      bidOptimization?: boolean;
      bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
      shopperCohortBidAdjustments?: {
        audienceSegments?: {
          audienceId?: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType?: "AUDIENCE_SEGMENT";
      }[];
    };
    brandEntityId?: string;
    budget: number;
    budgetType: "DAILY" | "LIFETIME";
    costType?: string;
    endDate?: string;
    goal?: string;
    name: string;
    portfolioId?: string;
    productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
    siteRestrictions?: "AMAZON_BUSINESS"[];
    smartDefault?: string[];
    startDate?: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetedPGDealId?: string;
  }[];
}

export interface CreateSponsoredBrandsCampaignsResponseContent {

  campaigns?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          billingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          budgetError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      campaign?: {
        bidding?: {
          bidAdjustmentsByPlacement?: {
            percentage?: number;
            placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
          }[];
          bidAdjustmentsByShopperSegment?: {
            percentage?: number;
            shopperSegment?: "NEW_TO_BRAND_PURCHASE";
          }[];
          bidOptimization?: boolean;
          bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
          shopperCohortBidAdjustments?: {
            audienceSegments?: {
              audienceId?: string;
              audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
            }[];
            percentage?: number;
            shopperCohortType?: "AUDIENCE_SEGMENT";
          }[];
        };
        brandEntityId?: string;
        budget: number;
        budgetType: "DAILY" | "LIFETIME";
        campaignId: string;
        costType?: string;
        endDate?: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        goal?: string;
        isMultiAdGroupsEnabled?: boolean;
        kpi?: string;
        name: string;
        portfolioId?: string;
        productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
        ruleBasedBudget?: {
          applicableRuleId?: string;
          applicableRuleName?: string;
          isProcessing?: boolean;
          value?: number;
        };
        siteRestrictions?: "AMAZON_BUSINESS"[];
        smartDefault?: string[];
        startDate?: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
        tags?: {

        };
        targetedPGDealId?: string;
      };
      campaignId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsRequestContent {

  /** An array of Ads. */
  ads: {
    adGroupId: string;
    creative: {
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
    };
    landingPage: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsExtendedProductCollectionAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsManualCollectionAdsRequestContent {

  ads: {
    adGroupId: string;
    creative: {
      asins: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName: string;
      landingPage?: {
        pageType?: "PRODUCT_LIST" | "STORE";
        url?: string;
      };
      title?: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsManualCollectionAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsOptimizationRulesRequestContent {

  optimizationRules: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    entityId?: string;
    entityType?: string;
  }[];
}

export interface CreateSponsoredBrandsOptimizationRulesResponseContent {

  optimizationRules: {
    error?: {
      errors?: {
        code: string;
        message: string;
      }[];
      index: number;
    }[];
    success?: {
      entityId: string;
      entityType: string;
      index: number;
      optimizationRule: {
        conditions?: {
          attributeName: string;
          criteria: {
            comparisonOperator?: string;
            value?: number;
          };
        }[];
        optimizationRuleId?: string;
      };
      optimizationRuleId: string;
    }[];
  };
}

export interface CreateSponsoredBrandsProductCollectionAdsRequestContent {

  /** An array of Ads. */
  ads: {
    adGroupId: string;
    creative: {
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName?: string;
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      headline?: string;
    };
    landingPage: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsProductCollectionAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandStoreSpotlightAdsRequestContent {

  /** An array of Ads. */
  ads: {
    adGroupId: string;
    creative: {
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName?: string;
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      headline?: string;
      headlines?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
    };
    landingPage: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandStoreSpotlightAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateSponsoredBrandsVideoAdsRequestContent {

  /** An array of Ads. */
  ads: {
    adGroupId: string;
    creative: {
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName?: string;
      consentToTranslate?: boolean;
      headline?: string;
      videoAssetIds?: string[];
    };
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface CreateSponsoredBrandsVideoAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface CreateStoreSpotlightAd {

  /** The adGroup identifier. */
  adGroupId: string;

  creative: {
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    headline?: string;
    headlines?: string[];
    subpages?: {
      asin?: string;
      pageTitle?: string;
      url?: string;
    }[];
  };

  landingPage: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateStoreSpotlightCreative {

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName?: string;

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The List of CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** DEPRECATED. Please use `headlines` field to provide the headline texts associated with the creative.
The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
See the policy for headline requirements. */
  headline?: string;

  /** An array of headline texts associated with the creative. */
  headlines?: string[];

  subpages?: {
    asin?: string;
    pageTitle?: string;
    url?: string;
  }[];
}

export interface CreateStoreSpotlightCreativeRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  creative: {
    brandLogoAssetId: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    headline?: string;
    headlines?: string[];
    landingPage?: {
      asins?: string[];
      type?: string;
      url?: string;
    };
    subpages: {
      asin?: string;
      pageTitle?: string;
      url?: string;
    }[];
  };
}

export interface CreateStoreSpotlightCreativeResponseContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;
}

export interface CreateVideoAd {

  /** The adGroup identifier. */
  adGroupId: string;

  creative: {
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    consentToTranslate?: boolean;
    headline?: string;
    videoAssetIds?: string[];
  };

  /** The name of the ad. */
  name: string;

  /** Entity state for create or update operation. */
  state: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface CreateVideoCreative {

  asins?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandName?: string;

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters. */
  headline?: string;

  /** In SB API V4, `videoMediaIds` is replaced by `videoAssetIds`.
`videoAssetIds` will only allow Asset Library identifiers for ad creation, but responses can include mediaIds for v1 campaigns and API V3 operations.
At a future state, existing mediaIds will be added to Asset library for use in SB campaigns. */
  videoAssetIds?: string[];
}

export interface CreateVideoCreativeRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  creative: {
    brandLogoAssetId?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName?: string;
    consentToTranslate?: boolean;
    headline?: string;
    videoAssetIds: string[];
  };
}

export interface CreateVideoCreativeResponseContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;
}

export interface Creative {

  asinExclusions?: string[];

  asins?: string[];

  brandLogoAssetID?: string;

  /** The crop to apply to the selected Brand logo. A Brand logo must have minimum dimensions of 400x400. If a brandLogoAssetID is supplied but a crop is not, the crop will be defaulted to the whole image. */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandLogoUrl?: string;

  brandName?: string;

  collectionName?: string;

  /** The CollectionType is used to designate either an auto or manual collection. */
  collectionType?: "BUNDLE" | "THEMED";

  companionAsins?: string[];

  /** If set to true and the headline and/or video asset are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The List of CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** Status of the creative.
|          status            |
|----------------------------|
| SUBMITTED_FOR_MODERATION   |
| PENDING_TRANSLATION        |
| PENDING_MODERATION_REVIEW  |
| APPROVED_BY_MODERATION     |
| REJECTED_BY_MODERATION     |
| PUBLISHED                  | */
  creativeStatus?: string;

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;

  customImageAssetId?: string;

  /** The crop to apply to the selected Custom image. A Custom image must have a 1200x628 aspect ratio, with a .01 delta for floating point precision. If a customImageAssetId is supplied but a crop is not, the crop will be defaulted to the whole image. */
  customImageCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  customImageUrl?: string;

  /** Requires minimum one custom image. You can add an optional collection of custom images that can be displayed on the ad as slideshow. Learn more about slideshow here https://advertising.amazon.com/resources/whats-new/slideshow-ads-creative-for-sponsored-brands/ */
  customImages?: {
    assetId?: string;
    crop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    url?: string;
  }[];

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
If `headlines` was used when creating the Creative, this field will show the first element in the list. */
  headline?: string;

  /** An array of headline texts associated with the creative. */
  headlines?: string[];

  /** The original headline submitted by the advertiser. If `headlines` was used when creating the Creative, this field will show the first element in the list. */
  originalHeadline?: string;

  /** The original headlines submitted by the advertiser. */
  originalHeadlines?: string[];

  /** The assetIds of the original videos submitted by the advertiser.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then `originalVideoAssetIds` will return the original video assetId whereas `videoAssetIds` will return translated video assetId. In all other cases, 'originalVideoAssetIds' and `videoAssetIds` both will return original video assetId. */
  originalVideoAssetIds?: string[];

  subpages?: {
    asin?: string;
    pageTitle?: string;
    url?: string;
  }[];

  title?: string;

  /** The creative type of SB ad. */
  type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  /** In SB API V4, `videoMediaIds` is replaced by `videoAssetIds`.
`videoAssetIds` will only allow Asset Library identifiers for ad creation, but responses can include mediaIds for v1 campaigns and API V3 operations.
At a future state, existing mediaIds will be added to Asset library for use in SB campaigns. */
  videoAssetIds?: string[];
}

export interface CreativeFailureResponseItem {

  /** A list of validation errors. */
  errors?: {
    errorType: string;
    errorValue: {
      otherError?: {
        cause: {
          location: string;
          trigger?: string;
        };
        message: string;
        reason: string;
      };
      rangeError?: {
        allowed?: string[];
        cause: {
          location: string;
          trigger?: string;
        };
        lowerLimit?: string;
        message: string;
        reason: string;
        upperLimit?: string;
      };
    };
  }[];

  /** the index of the creative in the array from the request body. */
  index: number;
}

export interface CreativeLandingPage {

  /** The list of asins on the landingPage If type is PRODUCT_LIST. */
  asins?: string[];

  /** Landing page type */
  type?: "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";

  /** The url of the landingPage. */
  value?: string;
}

export type CreativeLandingPageType = "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";

export interface CreativeLandingPageV2 {

  /** The list of asins on the landingPage If type is PRODUCT_LIST. A minimum of 3 asins are required. For the 'PRODUCT_LIST' type, the asins property is mandatory, and the url should not be included. */
  asins?: string[];

  /** Supported types are PRODUCT_LIST, STORE, DETAIL_PAGE, CUSTOM_URL. More could be added in future. */
  type?: string;

  /** The url of the landingPage. When including the 'asins' property in the request, do not include this property, as they are mutually exclusive. For the PRODUCT_LIST type, the asins property is mandatory, and the url should not be included. */
  url?: string;
}

export interface CreativeMutationError {

  /** The type of the error. */
  errorType: string;

  errorValue: {
    otherError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    rangeError?: {
      allowed?: string[];
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
  };
}

export interface CreativeMutationErrorSelector {

  /** Errors not related to any of the other error types. */
  otherError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors related to range constraints violations. */
  rangeError?: {
    allowed?: string[];
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };
}

export interface CreativeProperties {

  /** -----------------------------------------------
List types
-----------------------------------------------
A list of ASINs */
  asins?: string[];

  /** The identifier of image/video asset from the store's asset library */
  brandLogoAssetId?: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  brandLogoUrl?: string;

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName?: string;

  /** The CollectionType is used to designate either an auto or manual collection. */
  collectionType?: "BUNDLE" | "THEMED";

  /** The companion asins in the ad. Only for Bundle Collection type. */
  companionAsins?: string[];

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language. If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** The identifier of image/video asset from the store's asset library */
  customImageAssetId?: string;

  /** Asset cropping attributes */
  customImageCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  customImageUrl?: string;

  /** An array of customImages associated with the creative. Minimum one custom image. */
  customImages?: {
    assetId?: string;
    crop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    url?: string;
  }[];

  /** 'headline' is on deprecation path. When 'headlines' is being used, we provide 'headline' as the first item from 'headlines' for backwards compatibility.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then 'headline' will return the translated headline whereas 'originalHeadline' will return the original headline. In all other cases, 'originalHeadline' and 'headline' both will return the original headline. */
  headline?: string;

  /** If 'consentToTranslate' is set to true and translation is SUCCESSFUL then 'headlines' will return the translated headline whereas 'originalHeadlines' will return the original headline. In all other cases, 'originalHeadlines' and 'headlines' both will return the original headlines. */
  headlines?: string[];

  /** Landing page. */
  landingPage?: {
    asins?: string[];
    type?: "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";
    value?: string;
  };

  /** Creative type */
  layout?: "BRAND_GALLERY";

  /** 'originalHeadline' is on deprecation path. When 'headlines' is being used, we provide 'originalHeadline' as the original first item from 'originalHeadlines' for backwards compatibility.
The original headline submitted by the advertiser. */
  originalHeadline?: string;

  /** The original headlines submitted by the advertiser. */
  originalHeadlines?: string[];

  /** The assetIds of the original videos submitted by the advertiser.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then `originalVideoAssetIds` will return the original video assetId whereas `videoAssetIds` will return translated video assetId. In all other cases, 'originalVideoAssetIds' and `videoAssetIds` both will return original video assetId. */
  originalVideoAssetIds?: string[];

  /** An array of subpages */
  subpages?: {
    asin?: string;
    pageTitle?: string;
    url?: string;
  }[];

  /** The assetIds of the original videos submitted by the advertiser.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then 'videoAssetIds' will return translated video assetId whereas `originalVideoAssetIds` will return the original video assetId. In all other cases, `videoAssetIds` will return original video assetId. */
  videoAssetIds?: string[];
}

export type CreativePropertyToOptimize = "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE";

export type CreativeStatus = "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION";

export interface CreativeSuccessResponseItem {

  /** Entity object identifier. */
  adId: string;

  creativeVersion?: string;

  /** The index in the original list from the request. */
  index: number;
}

export type CreativeType = "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

export interface CustomImage {

  assetId?: string;

  /** The crop to apply to the selected Custom image. A Custom image must have a 1200x628 aspect ratio, with a .01 delta for floating point precision. If a customImageAssetId is supplied but a crop is not, the crop will be defaulted to the whole image. */
  crop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  url?: string;
}

export interface CustomImageCrop {

  height?: number;

  left?: number;

  top?: number;

  width?: number;
}

export interface DateError {

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  /** Human readable error message. */
  message: string;

  /** Exact error reason.. */
  reason: string;
}

export interface DateRangeTypeRuleDuration {

  /** The end date of the budget rule in YYYYMMDD format. The end date is inclusive. Required to be equal or greater than `startDate`. */
  endDate?: string;

  /** The start date of the budget rule in YYYYMMDD format. The start date is inclusive. Required to be greater than or equal to current date. */
  startDate: string;
}

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";

export interface DeleteSponsoredBrandsAdGroupsRequestContent {

  /** Filter entities by the list of objectIds. */
  adGroupIdFilter?: {
    include?: string[];
  };
}

export interface DeleteSponsoredBrandsAdGroupsResponseContent {

  adGroups?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      adGroup?: {
        adGroupId: string;
        campaignId: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adGroupId?: string;
      index: number;
    }[];
  };
}

export interface DeleteSponsoredBrandsAdsRequestContent {

  /** Filter entities by the list of objectIds. */
  adIdFilter?: {
    include?: string[];
  };
}

export interface DeleteSponsoredBrandsAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface DeleteSponsoredBrandsCampaignsRequestContent {

  /** Filter entities by the list of objectIds. */
  campaignIdFilter?: {
    include?: string[];
  };
}

export interface DeleteSponsoredBrandsCampaignsResponseContent {

  campaigns?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          billingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          budgetError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      campaign?: {
        bidding?: {
          bidAdjustmentsByPlacement?: {
            percentage?: number;
            placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
          }[];
          bidAdjustmentsByShopperSegment?: {
            percentage?: number;
            shopperSegment?: "NEW_TO_BRAND_PURCHASE";
          }[];
          bidOptimization?: boolean;
          bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
          shopperCohortBidAdjustments?: {
            audienceSegments?: {
              audienceId?: string;
              audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
            }[];
            percentage?: number;
            shopperCohortType?: "AUDIENCE_SEGMENT";
          }[];
        };
        brandEntityId?: string;
        budget: number;
        budgetType: "DAILY" | "LIFETIME";
        campaignId: string;
        costType?: string;
        endDate?: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        goal?: string;
        isMultiAdGroupsEnabled?: boolean;
        kpi?: string;
        name: string;
        portfolioId?: string;
        productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
        ruleBasedBudget?: {
          applicableRuleId?: string;
          applicableRuleName?: string;
          isProcessing?: boolean;
          value?: number;
        };
        siteRestrictions?: "AMAZON_BUSINESS"[];
        smartDefault?: string[];
        startDate?: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
        tags?: {

        };
        targetedPGDealId?: string;
      };
      campaignId?: string;
      index: number;
    }[];
  };
}

export type DisassociateAssociatedBudgetRuleResponse = Record<string, unknown>;

export interface DisassociateSponsoredBrandsOptimizationRulesRequestContent {

  optimizationRuleDisassociations: {
    entityId: string;
    entityType: string;
    optimizationRuleId: string;
  }[];
}

export interface DisassociateSponsoredBrandsOptimizationRulesResponseContent {

  optimizationRuleDisassociations: {
    error?: {
      errors?: {
        code: string;
        message: string;
      }[];
      index: number;
    }[];
    success?: {
      entityId: string;
      entityType: string;
      index: number;
      optimizationRuleId: string;
    }[];
  };
}

export interface EntityFilter {

  /** Entity object identifier. */
  entityId?: string;

  /** Enum: "CAMPAIGN"

The type of entity passed. */
  entityType?: string;
}

export type EntityState = "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";

export interface EntityStateFilter {

  include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
}

export interface ErrorCause {

  /** Error location, JSON Path expression specifying element of API payload causing error. */
  location: string;

  /** Optional value causing error. */
  trigger?: string;
}

export interface EventTypeRuleDuration {

  /** The event end date in YYYYMMDD format. Read-only. */
  endDate?: string;

  /** The event identifier. This value is available from the budget rules recommendation API. */
  eventId: string;

  /** The event name. Read-only. */
  eventName?: string;

  /** The event start date in YYYYMMDD format. Read-only. Note that this field is present only for announced events. */
  startDate?: string;
}

export interface ExtendedProductCollectionCreative {

  /** An array of ASINs associated with the creative. */
  asins: string[];

  /** The identifier of the [brand logo](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#brandlogo) image from the brand store's asset library.
Note that for campaigns created in the Amazon Advertising console prior to release of the brand store's assets library, responses will not include a value for this field. */
  brandLogoAssetId: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName: string;

  /** The CollectionType is used to designate either an auto or manual collection. */
  collectionType?: "BUNDLE" | "THEMED";

  /** The companion asins in the ad. Only for Bundle Collection type. */
  companionAsins?: string[];

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language.
If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** An array of customImages associated with the creative. Minimum one custom image. */
  customImages?: {
    assetId?: string;
    crop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    url?: string;
  }[];

  /** DEPRECATED. Please use `headlines` field to provide the headline texts associated with the creative.
This shape is deprecated: Please use headlines instead */
  headline?: string;

  /** An array of headline texts associated with the creative. */
  headlines?: string[];

  /** Landing page V2, where type is String with allowed values listed, and url or asins of that type. This parameter is in PREVIEW only and can not be used as part of a request. */
  landingPage?: {
    asins?: string[];
    type?: string;
    url?: string;
  };
}

export interface GetBudgetRecommendationsRequestContent {

  /** List of CampaignIds */
  campaignIds: string[];
}

export interface GetBudgetRecommendationsResponseContent {

  /** List of errors that occurred when generating budget recommendations. */
  error: {
    campaignId: string;
    code: string;
    details: string;
    index: number;
  }[];

  /** List of successful budget recommendations for campaigns. */
  success: {
    campaignId: string;
    index: number;
    sevenDaysMissedOpportunities: {
      endDate?: string;
      estimatedMissedClicksLower?: number;
      estimatedMissedClicksUpper?: number;
      estimatedMissedImpressionsLower?: number;
      estimatedMissedImpressionsUpper?: number;
      estimatedMissedSalesLower?: number;
      estimatedMissedSalesUpper?: number;
      percentTimeInBudget?: number;
      startDate?: string;
    };
    suggestedBudget: number;
  }[];
}

export interface GetSBBudgetRuleResponse {

  budgetRule?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  };
}

export interface GetSBBudgetRulesForAdvertiserResponse {

  /** A list of rules created by the advertiser. */
  budgetRulesForAdvertiserResponse?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];

  /** To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface GoalTypeFilter {

  include?: string[];
}

export interface HeadlineSuggestionRequest {

  adFormat?: "SPONSORED_BRANDS" | "SPONSORED_BRANDS_SPOTLIGHT";

  /** An array of ASINs associated with the creative. Note do not pass an empty array, this results in an error.
 */
  asins?: string[];

  /** Maximum number of suggestions that API should return. Response will [0, maxNumSuggestions] suggestions (suggestions are not guaranteed). */
  maxNumSuggestions?: number;

  /** An array of Store Pages associated with SB Spotlight Creative. */
  storePages?: {
    displayName?: string;
    primaryAsin?: string;
  }[];
}

export interface HeadlineSuggestionResponse {

  /** An identifier for request made which is generated by server. */
  requestId?: string;

  /** Suggestions are sorted, i.e., more suitable headline has lesser array index value */
  suggestions?: {
    headline?: string;
    headlineId?: string;
  }[];
}

export type InternalErrorErrorCode = "INTERNAL_ERROR";

export type InternalServerErrorCode = "INTERNAL_ERROR";

export interface InternalServerExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details?: string;
}

export interface InvalidArgumentError {

  /** The type of the error */
  errorType: string;

  errorValue: {
    otherError?: {
      cause: {
        location: string;
        trigger?: string;
      };
      message: string;
      reason: string;
    };
    rangeError?: {
      allowed?: string[];
      cause: {
        location: string;
        trigger?: string;
      };
      lowerLimit?: string;
      message: string;
      reason: string;
      upperLimit?: string;
    };
  };
}

export type InvalidArgumentErrorCode = "INVALID_ARGUMENT";

export interface InvalidArgumentErrorSelector {

  /** Errors not related to any of the other error types. */
  otherError?: {
    cause: {
      location: string;
      trigger?: string;
    };
    message: string;
    reason: string;
  };

  /** Errors related to range constraints violations. */
  rangeError?: {
    allowed?: string[];
    cause: {
      location: string;
      trigger?: string;
    };
    lowerLimit?: string;
    message: string;
    reason: string;
    upperLimit?: string;
  };
}

export interface InvalidArgumentExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;
}

export interface LandingPage {

  /** ASIN(s) on the landingPage for pageType PRODUCT_LIST or DETAIL_PAGE. If pageType is DETAIL_PAGE, this field must
contains a single asin. If pageType is PRODUCT_LIST, this field must contains at least 3 asins.
For other pageTypes, this field must be null and the url field must be non null. */
  asins?: string[];

  /** The type of landing page, such as store page, product list (simple landing page), custom url. */
  pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";

  /** URL of a Store page. Vendors may also specify the URL of a custom landing page.
If a custom URL is specified, the landing page must include the ASINs of at least three products that are
advertised as part of the campaign. Do not include this property in the request if the asins property is also
included, these properties are mutually exclusive. */
  url?: string;
}

export type LandingPageType = "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";

export type Layout = "BRAND_GALLERY";

export interface ListCreativesRequestContent {

  /** The unique ID of a Sponsored Brands ad. */
  adId: string;

  /** Filters creatives by optional creative status.
By default, you can list all creative versions regardless of creative status. */
  creativeStatusFilter?: "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION"[];

  /** Filters creatives by optional creative type.
By default, you can list all creative versions regardless of creative type. */
  creativeTypeFilter?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO"[];

  /** Filters creatives by optional creative version.
This means you can either list all creative versions without specific creative version filter, all just retrieve a single creative version by providing a specific version identifier. */
  creativeVersionFilter?: string[];

  /** Set a limit on the number of results returned by an operation. */
  maxResults?: number;

  /** Operations that return paginated results include a pagination token in this field.
To retrieve the next page of results, call the same operation and specify this token in the request.
If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface ListCreativesResponseContent {

  /** A list of creatives */
  creatives?: {
    adId?: string;
    creationTime?: number;
    creativeProperties?: {
      asins?: string[];
      brandLogoAssetId?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      landingPage?: {
        asins?: string[];
        type?: "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";
        value?: string;
      };
      layout?: "BRAND_GALLERY";
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      videoAssetIds?: string[];
    };
    creativeStatus?: "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION";
    creativeType?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    creativeVersion?: string;
    lastUpdateTime?: number;
  }[];

  /** Operations that return paginated results include a pagination token in this field.
To retrieve the next page of results, call the same operation and specify this token in the request.
If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;

  /** The total number of results returned by an operation. */
  totalResults?: number;
}

export interface ListCreativesResultEntry {

  /** The unique ID of a Sponsored Brands ad. */
  adId?: string;

  creationTime?: number;

  /** Creative properties */
  creativeProperties?: {
    asins?: string[];
    brandLogoAssetId?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandLogoUrl?: string;
    brandName?: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    customImageAssetId?: string;
    customImageCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    customImageUrl?: string;
    customImages?: {
      assetId?: string;
      crop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      url?: string;
    }[];
    headline?: string;
    headlines?: string[];
    landingPage?: {
      asins?: string[];
      type?: "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";
      value?: string;
    };
    layout?: "BRAND_GALLERY";
    originalHeadline?: string;
    originalHeadlines?: string[];
    originalVideoAssetIds?: string[];
    subpages?: {
      asin?: string;
      pageTitle?: string;
      url?: string;
    }[];
    videoAssetIds?: string[];
  };

  /** The lifecycle status of a creative */
  creativeStatus?: "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION";

  /** The creative type of SB ad. */
  creativeType?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  /** The version identifier that helps you keep track of multiple versions of a submitted (non-draft) Sponsored Brands creative. */
  creativeVersion?: string;

  lastUpdateTime?: number;
}

export interface ListMigrationsRequestContent {

  /** Filter entities by the list of objectIds. */
  adGroupIdFilter?: {
    include?: string[];
  };

  /** Filter entities by the list of objectIds. */
  adIdFilter?: {
    include?: string[];
  };

  /** Filter entities by state. */
  adStateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };

  /** Filter entities by the list of objectIds. */
  campaignIdFilter?: {
    include?: string[];
  };

  /** Default: 20, Max: 100. */
  maxResults?: number;

  /** Filter migrations by option-level status.
Returns migrations with at least one option matching the filter. */
  migrationStatusFilter?: {
    include?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED"[];
  };

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;
}

export interface ListMigrationsResponseContent {

  migrations?: {
    migrationEntity: {
      ad?: {
        adGroupId: string;
        adId?: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name?: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adGroupName?: string;
      campaignName?: string;
    };
    migrationId: string;
    migrationOptions: {
      adGroupId?: string;
      adId?: string;
      asins?: string[];
      errorCode?: string;
      errorMessage?: string;
      migrationType?: "IMPROVE" | "MIGRATE";
      optionType: "AUTO_COLLECTION" | "MANUAL_COLLECTION";
      rationale?: string;
      status?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED";
    }[];
  }[];

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** The total number of entities. */
  totalCount?: number;
}

export interface ListSponsoredBrandsAdGroupsRequestContent {

  /** Filter entities by the list of objectIds. */
  adGroupIdFilter?: {
    include?: string[];
  };

  /** Filter entities by the list of objectIds. */
  campaignIdFilter?: {
    include?: string[];
  };

  /** Setting to true will slow down performance because the API needs to retrieve extra information for each campaign. */
  includeExtendedDataFields?: boolean;

  /** Number of records to include in the paginated response. Defaults to max page size for given API. */
  maxResults?: number;

  /** Filter entities by name. */
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** Filter entities by state. */
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}

export interface ListSponsoredBrandsAdGroupsResponseContent {

  adGroups?: {
    adGroupId: string;
    campaignId: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    name: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  }[];

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** The total number of entities. */
  totalResults?: number;
}

export interface ListSponsoredBrandsAdsRequestContent {

  /** Filter entities by the list of objectIds. */
  adGroupIdFilter?: {
    include?: string[];
  };

  /** Filter entities by the list of objectIds. */
  adIdFilter?: {
    include?: string[];
  };

  /** Filter entities by the list of objectIds. */
  campaignIdFilter?: {
    include?: string[];
  };

  /** Retrieve the LATEST or PUBLISHED creative for each Ad. Returns LATEST if not specified.
- LATEST - latest creative that could be moderation pending or rejected.
- PUBLISHED - latest approved creative that is actively serving. */
  creativeVersionToReturn?: string;

  /** Number of records to include in the paginated response. Defaults to max page size for given API. */
  maxResults?: number;

  /** Filter entities by name. */
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** Filter entities by state. */
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}

export interface ListSponsoredBrandsAdsResponseContent {

  ads?: {
    adGroupId: string;
    adId?: string;
    campaignId: string;
    creative?: {
      asinExclusions?: string[];
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      creativeStatus?: string;
      creativeVersion?: string;
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      title?: string;
      type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
      videoAssetIds?: string[];
    };
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    landingPage?: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  }[];

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** The total number of entities. */
  totalResults?: number;
}

export interface ListSponsoredBrandsCampaignsRequestContent {

  /** Filter entities by the list of objectIds. */
  campaignIdFilter?: {
    include?: string[];
  };

  /** Filter entities by goal type. */
  goalTypeFilter?: {
    include?: string[];
  };

  /** Setting to true will slow down performance because the API needs to retrieve extra information for each campaign. */
  includeExtendedDataFields?: boolean;

  /** Number of records to include in the paginated response. Defaults to max page size for given API. */
  maxResults?: number;

  /** Filter entities by name. */
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** Filter entities by the list of objectIds. */
  portfolioIdFilter?: {
    include?: string[];
  };

  /** Filter entities by state. */
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}

export interface ListSponsoredBrandsCampaignsResponseContent {

  campaigns?: {
    bidding?: {
      bidAdjustmentsByPlacement?: {
        percentage?: number;
        placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
      }[];
      bidAdjustmentsByShopperSegment?: {
        percentage?: number;
        shopperSegment?: "NEW_TO_BRAND_PURCHASE";
      }[];
      bidOptimization?: boolean;
      bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
      shopperCohortBidAdjustments?: {
        audienceSegments?: {
          audienceId?: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType?: "AUDIENCE_SEGMENT";
      }[];
    };
    brandEntityId?: string;
    budget: number;
    budgetType: "DAILY" | "LIFETIME";
    campaignId: string;
    costType?: string;
    endDate?: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    goal?: string;
    isMultiAdGroupsEnabled?: boolean;
    kpi?: string;
    name: string;
    portfolioId?: string;
    productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
    ruleBasedBudget?: {
      applicableRuleId?: string;
      applicableRuleName?: string;
      isProcessing?: boolean;
      value?: number;
    };
    siteRestrictions?: "AMAZON_BUSINESS"[];
    smartDefault?: string[];
    startDate?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetedPGDealId?: string;
  }[];

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** The total number of entities. */
  totalCount?: number;
}

export interface ListSponsoredBrandsOptimizationRulesRequestContent {

  /** Filter optimization rules by entityId and entityType */
  entityFilter?: {
    entityId?: string;
    entityType?: string;
  };

  /** Number of records to include in the paginated response. Defaults to max page size for given API. */
  maxResults?: number;

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  /** Filter optimization rules by the list of optmization rule ids. */
  optimizationRuleIdFilter?: {
    include?: string[];
  };
}

export interface ListSponsoredBrandsOptimizationRulesResponseContent {

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;

  optimizationRules: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    optimizationRuleId?: string;
  }[];

  /** The total number of entities. */
  totalCount?: number;
}

export interface Migration {

  /** The source ad being migrated, enriched with campaign and ad group display names. */
  migrationEntity: {
    ad?: {
      adGroupId: string;
      adId?: string;
      campaignId: string;
      creative?: {
        asinExclusions?: string[];
        asins?: string[];
        brandLogoAssetID?: string;
        brandLogoCrop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        brandLogoUrl?: string;
        brandName?: string;
        collectionName?: string;
        collectionType?: "BUNDLE" | "THEMED";
        companionAsins?: string[];
        consentToTranslate?: boolean;
        creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
        creativeStatus?: string;
        creativeVersion?: string;
        customImageAssetId?: string;
        customImageCrop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        customImageUrl?: string;
        customImages?: {
          assetId?: string;
          crop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          url?: string;
        }[];
        headline?: string;
        headlines?: string[];
        originalHeadline?: string;
        originalHeadlines?: string[];
        originalVideoAssetIds?: string[];
        subpages?: {
          asin?: string;
          pageTitle?: string;
          url?: string;
        }[];
        title?: string;
        type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
        videoAssetIds?: string[];
      };
      extendedData?: {
        creationDate?: number;
        lastUpdateDate?: number;
        servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
        servingStatusDetails?: string[];
      };
      landingPage?: {
        asins?: string[];
        pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
        url?: string;
      };
      name?: string;
      state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    };
    adGroupName?: string;
    campaignName?: string;
  };

  /** Unique identifier for this migration. Currently equal to the source adId. */
  migrationId: string;

  /** The replacement options offered (1-2 options: Manual Collection, Auto Collection). */
  migrationOptions: {
    adGroupId?: string;
    adId?: string;
    asins?: string[];
    errorCode?: string;
    errorMessage?: string;
    migrationType?: "IMPROVE" | "MIGRATE";
    optionType: "AUTO_COLLECTION" | "MANUAL_COLLECTION";
    rationale?: string;
    status?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED";
  }[];
}

export interface MigrationEntity {

  ad?: {
    adGroupId: string;
    adId?: string;
    campaignId: string;
    creative?: {
      asinExclusions?: string[];
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      creativeStatus?: string;
      creativeVersion?: string;
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      title?: string;
      type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
      videoAssetIds?: string[];
    };
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    landingPage?: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  };

  /** Display name of the source ad group. */
  adGroupName?: string;

  /** Display name of the source campaign. */
  campaignName?: string;
}

export interface MigrationJobResultsRequestContent {

  jobId: string;

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;
}

export interface MigrationJobResultsResponseContent {

  campaigns?: {
    legacyCampaignId?: string;
    migrationStatus?: string;
    migrationStatusReason?: string;
    newCampaignId?: string;
  }[];

  jobId?: string;

  /** Enumerated status code for migration job status
| Status                                             |  Description |
|----------------------------------------------------------|--------------|
| COMPLETE  | Migration job is complete |
| FAILED    | Migration failed and no V3 campaigns were migrated |
| IN_PROGRESS    | Migration job is running | */
  migrationJobStatus?: string;

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;
}

export interface MigrationJobStatusRequestContent {

  jobId: string;
}

export interface MigrationJobStatusResponseContent {

  jobId?: string;

  /** Enumerated status code for migration job status
| Status                                             |  Description |
|----------------------------------------------------------|--------------|
| COMPLETE  | Migration job is complete |
| FAILED    | Migration failed and no V3 campaigns were migrated |
| IN_PROGRESS    | Migration job is running | */
  migrationJobStatus?: string;

  /** Status reason for the migration job status */
  migrationJobStatusReason?: string;
}

export interface MigrationOption {

  /** The adGroupId of the created ad. Populated only after status = MIGRATED. */
  adGroupId?: string;

  /** The adId of the created ad. Populated only after status = MIGRATED. */
  adId?: string;

  /** For MANUAL_COLLECTION: 3-10 recommended ASINs.
For AUTO_COLLECTION: empty (system selects dynamically at serve time). */
  asins?: string[];

  /** Error code. Populated only when status = MIGRATION_FAILED. */
  errorCode?: string;

  /** Error message. Populated only when status = MIGRATION_FAILED. */
  errorMessage?: string;

  /** The type of migration being offered for this option.
- MIGRATE: Preserves the advertiser's original configuration as closely as possible.
- IMPROVE: Optimizes the configuration for better performance. */
  migrationType?: "IMPROVE" | "MIGRATE";

  /** The type of SB Collection to migrate to. */
  optionType: "AUTO_COLLECTION" | "MANUAL_COLLECTION";

  /** Rationale explaining why this migration option is being offered. */
  rationale?: string;

  /** The lifecycle status of a migration option. */
  status?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED";
}

export type MigrationOptionType = "AUTO_COLLECTION" | "MANUAL_COLLECTION";

export interface MigrationResultsRequestContent {

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;
}

export interface MigrationResultsResponseContent {

  campaigns?: {
    legacyCampaignId?: string;
    migrationStatus?: string;
    migrationStatusReason?: string;
    newCampaignId?: string;
  }[];

  /** Token value allowing to navigate to the next response page. */
  nextToken?: string;
}

export type MigrationStatus = "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED";

export interface MigrationStatusFilter {

  include?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED"[];
}

export type MigrationType = "IMPROVE" | "MIGRATE";

export interface ModerationError {

  /** The HTTP status code of the response. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface MultiAdGroupAd {

  /** The adGroup identifier. */
  adGroupId: string;

  /** The ad identifier. */
  adId: string;

  /** The campaign identifier. */
  campaignId: string;

  creative?: {
    asinExclusions?: string[];
    asins?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandLogoUrl?: string;
    brandName?: string;
    collectionName?: string;
    collectionType?: "BUNDLE" | "THEMED";
    companionAsins?: string[];
    consentToTranslate?: boolean;
    creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
    creativeStatus?: string;
    creativeVersion?: string;
    customImageAssetId?: string;
    customImageCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    customImageUrl?: string;
    customImages?: {
      assetId?: string;
      crop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      url?: string;
    }[];
    headline?: string;
    headlines?: string[];
    originalHeadline?: string;
    originalHeadlines?: string[];
    originalVideoAssetIds?: string[];
    subpages?: {
      asin?: string;
      pageTitle?: string;
      url?: string;
    }[];
    title?: string;
    type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    videoAssetIds?: string[];
  };

  extendedData?: {
    creationDate?: number;
    lastUpdateDate?: number;
    servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
    servingStatusDetails?: string[];
  };

  landingPage?: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  };

  /** The name of the ad. */
  name: string;

  /** The current resource state. */
  state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface NameFilter {

  include?: string[];

  /** Defines how would the string resource field (e.g. campaign name, ad group name) be matched with the query term in filter. */
  queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
}

export type NotFoundErrorCode = "NOT_FOUND";

export interface NotFoundExceptionResponseContent {

  code: "NOT_FOUND";

  message: string;
}

export interface ObjectIdFilter {

  include?: string[];
}

export interface OptimizationRule {

  conditions?: {
    attributeName: string;
    criteria: {
      comparisonOperator?: string;
      value?: number;
    };
  }[];

  /** The identifier of the optimization rule. */
  optimizationRuleId?: string;
}

export interface OptimizationRuleFailureResponseItem {

  /** A list of validation errors */
  errors?: {
    code: string;
    message: string;
  }[];

  /** the index of the optimization rule id/entity Id in the array from the request body. */
  index: number;
}

export interface OptimizationRuleIdFilter {

  include?: string[];
}

export interface OptimizationRulesError {

  /** The type of the error. */
  code: string;

  /** Human readable error message. */
  message: string;
}

export interface OptimizationRuleToEntityMapping {

  /** Entity object identifier. */
  entityId: string;

  /** Enum: "CAMPAIGN"

The type of entity passed. */
  entityType: string;

  /** The identifier of the optimization rule. */
  optimizationRuleId: string;
}

export interface OptimizationRuleToEntityMappingSuccessResponseItem {

  /** Entity object identifier. */
  entityId: string;

  entityType: string;

  /** The index of the entityId/optimizationId in the array from the request body. */
  index: number;

  /** The identifier of the optimization rule. */
  optimizationRuleId: string;
}

export interface OtherError {

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  /** Human readable error message. */
  message: string;

  reason: string;
}

export interface PerformanceMeasureConditionForSB {

  /** The comparison operator. */
  comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";

  /** The advertising performance metric. */
  metricName: "IS" | "NTB" | "ROAS";

  /** The performance threshold value. */
  threshold: number;
}

export type PerformanceMetricForSB = "IS" | "NTB" | "ROAS";

export type Placement = "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";

export interface ProductCollectionCreative {

  /** An array of ASINs associated with the creative. */
  asins: string[];

  /** The identifier of the [brand logo](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#brandlogo) image from the brand store's asset library.
Note that for campaigns created in the Amazon Advertising console prior to release of the brand store's assets library, responses will not include a value for this field. */
  brandLogoAssetId: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName: string;

  /** The identifier of the Custom image from the Store assets library.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#customimage) for more information on what constitutes a valid Custom image. */
  customImageAssetId?: string;

  /** Asset cropping attributes */
  customImageCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  headline: string;
}

export type ProductLocation = "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";

export type QueryTermMatchType = "BROAD_MATCH" | "EXACT_MATCH";

export interface RangeError {

  /** Allowed values. */
  allowed?: string[];

  /** Structure describing error cause - location in the payload and data causing error. */
  cause: {
    location: string;
    trigger?: string;
  };

  /** Optional lower limit. */
  lowerLimit?: string;

  /** Human readable error message. */
  message: string;

  reason: string;

  /** Optional upper limit. */
  upperLimit?: string;
}

export interface Recurrence {

  /** Object representing days of the week for weekly type rule. It is not required for daily recurrence type */
  daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];

  /** List of objects representing start and end time of desired intra-day budget rule window */
  intraDaySchedule?: {
    endTime?: string;
    startTime?: string;
  }[];

  /** depicts the type of recurrence */
  type?: "DAILY" | "WEEKLY";
}

export type RecurrenceType = "DAILY" | "WEEKLY";

export interface RuleBasedBudget {

  applicableRuleId?: string;

  applicableRuleName?: string;

  isProcessing?: boolean;

  value?: number;
}

export interface RuleCondition {

  /** Enum: "COST_PER_CLICK" "COST_PER_NEW_TO_BRAND_PURCHASES"

The name of the attribute. Supported rule metrics and corresponding supported comparisonOperators:
| AttributeName                      |  ComparisonOperator       |  Description                                                                            |
|------------------------------------|---------------------------|-----------------------------------------------------------------------------------------|
| COST_PER_CLICK                     | LESS_THAN_OR_EQUAL_TO     | Maximize page visits while cost per click less than or equal to threshold.              |
| COST_PER_NEW_TO_BRAND_PURCHASES    | LESS_THAN_OR_EQUAL_TO     | Maximize new to brand purchases while cost per purchase less than or equal to threshold.|                                                                            | */
  attributeName: string;

  criteria: {
    comparisonOperator?: string;
    value?: number;
  };
}

export interface RuleDuration {

  /** Object representing date range type rule duration. */
  dateRangeTypeRuleDuration?: {
    endDate?: string;
    startDate: string;
  };

  /** Object representing event type rule duration. */
  eventTypeRuleDuration?: {
    endDate?: string;
    eventId: string;
    eventName?: string;
    startDate?: string;
  };
}

export interface SBBudgetRule {

  /** Epoch time of budget rule creation. Read-only. */
  createdDate?: number;

  /** Epoch time of budget rule update. Read-only. */
  lastUpdatedDate?: number;

  ruleDetails?: {
    budgetIncreaseBy?: {
      type: "PERCENT";
      value: number;
    };
    duration?: {
      dateRangeTypeRuleDuration?: {
        endDate?: string;
        startDate: string;
      };
      eventTypeRuleDuration?: {
        endDate?: string;
        eventId: string;
        eventName?: string;
        startDate?: string;
      };
    };
    name?: string;
    performanceMeasureCondition?: {
      comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
      metricName: "IS" | "NTB" | "ROAS";
      threshold: number;
    };
    recurrence?: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      intraDaySchedule?: {
        endTime?: string;
        startTime?: string;
      }[];
      type?: "DAILY" | "WEEKLY";
    };
    ruleType?: "PERFORMANCE" | "SCHEDULE";
  };

  /** The budget rule identifier. */
  ruleId: string;

  /** The budget rule state. */
  ruleState?: "ACTIVE" | "PAUSED";

  /** The budget rule status. Read-only. */
  ruleStatus?: string;
}

export interface SBBudgetRuleDetails {

  budgetIncreaseBy?: {
    type: "PERCENT";
    value: number;
  };

  duration?: {
    dateRangeTypeRuleDuration?: {
      endDate?: string;
      startDate: string;
    };
    eventTypeRuleDuration?: {
      endDate?: string;
      eventId: string;
      eventName?: string;
      startDate?: string;
    };
  };

  /** The budget rule name. Required to be unique within a campaign. */
  name?: string;

  performanceMeasureCondition?: {
    comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
    metricName: "IS" | "NTB" | "ROAS";
    threshold: number;
  };

  recurrence?: {
    daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
    intraDaySchedule?: {
      endTime?: string;
      startTime?: string;
    }[];
    type?: "DAILY" | "WEEKLY";
  };

  /** The type of budget rule. SCHEDULE: A budget rule based on a start and end date. PERFORMANCE: A budget rule based on advertising performance criteria. */
  ruleType?: "PERFORMANCE" | "SCHEDULE";
}

export interface SBBudgetRulesRecommendationError {

  /** The HTTP status code of the response. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface SBBudgetRulesRecommendationEvent {

  /** The end date in YYYYMMDD format. */
  endDate?: string;

  /** The event identifier. */
  eventId?: string;

  /** The event name. */
  eventName?: string;

  /** The start date in YYYYMMDD format. */
  startDate?: string;

  /** The suggested budget increase expressed as a percent. */
  suggestedBudgetIncreasePercent?: number;
}

export interface SBBudgetRulesRecommendationEventRequest {

  /** The campaign identifier. */
  campaignId: string;
}

export interface SBBudgetRulesRecommendationEventResponse {

  /** A list of recommended special events with date range and suggested budget increase. */
  recommendedBudgetRuleEvents?: {
    endDate?: string;
    eventId?: string;
    eventName?: string;
    startDate?: string;
    suggestedBudgetIncreasePercent?: number;
  }[];
}

export interface SBCampaignBudgetRule {

  /** Epoch time of budget rule creation. Read-only. */
  createdDate?: number;

  /** Epoch time of budget rule update. Read-only. */
  lastUpdatedDate?: number;

  ruleDetails?: {
    budgetIncreaseBy?: {
      type: "PERCENT";
      value: number;
    };
    duration?: {
      dateRangeTypeRuleDuration?: {
        endDate?: string;
        startDate: string;
      };
      eventTypeRuleDuration?: {
        endDate?: string;
        eventId: string;
        eventName?: string;
        startDate?: string;
      };
    };
    name?: string;
    performanceMeasureCondition?: {
      comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
      metricName: "IS" | "NTB" | "ROAS";
      threshold: number;
    };
    recurrence?: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      intraDaySchedule?: {
        endTime?: string;
        startTime?: string;
      }[];
      type?: "DAILY" | "WEEKLY";
    };
    ruleType?: "PERFORMANCE" | "SCHEDULE";
  };

  /** The budget rule identifier. */
  ruleId: string;

  /** The budget rule state. */
  ruleState?: "ACTIVE" | "PAUSED";

  /** The budget rule evaluation status. Read-only. */
  ruleStatus?: string;
}

export interface SBCampaignPerformanceForecastsRequestContent {

  campaigns: {
    adGroups: {
      creativeAsins?: string[];
      creativeType?: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
      keywords?: {
        bid?: number;
        keywordText?: string;
        matchType?: string;
      }[];
      landingPages?: {
        landingPageUrl?: string;
      }[];
      negativeKeywords?: {
        keywordText?: string;
        matchType?: string;
      }[];
      negativeTargets?: {
        expressions?: {
          type?: string;
          value?: string;
        }[];
      }[];
      targets?: {
        bid?: number;
        expressions?: {
          type?: string;
          value?: string;
        }[];
      }[];
      themes?: {
        bid?: number;
        themeType?: string;
      }[];
    }[];
    budget: number;
    budgetType?: string;
    endDate?: string;
    forecastType: string;
    goal?: string;
    optimizationRules?: {
      attributeName?: "COST_PER_CLICK";
      criteria?: {
        comparisonOperator?: "LESS_THAN_OR_EQUAL_TO";
        value?: number;
      };
    }[];
    startDate?: string;
  }[];
}

export interface SBCampaignPerformanceForecastsResponseContent {

  campaigns?: {
    errors?: {
      code?: string;
      description?: string;
      index?: number;
    }[];
    successes?: {
      campaign?: {
        forecastTimestamp?: string;
        forecasts?: {
          metric?: string;
          value?: {
            max?: number;
            min?: number;
          };
        }[];
      };
      index?: number;
    }[];
  };
}

export interface SBForecastingAccessDeniedExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBForecastingAdGroup {

  creativeAsins?: string[];

  /** Supported CreativeTypes are PRODUCT_COLLECTION, STORE_SPOTLIGHT, VIDEO, BRAND_VIDEO. */
  creativeType?: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  keywords?: {
    bid?: number;
    keywordText?: string;
    matchType?: string;
  }[];

  landingPages?: {
    landingPageUrl?: string;
  }[];

  negativeKeywords?: {
    keywordText?: string;
    matchType?: string;
  }[];

  negativeTargets?: {
    expressions?: {
      type?: string;
      value?: string;
    }[];
  }[];

  targets?: {
    bid?: number;
    expressions?: {
      type?: string;
      value?: string;
    }[];
  }[];

  themes?: {
    bid?: number;
    themeType?: string;
  }[];
}

export type SBForecastingAttributeName = "COST_PER_CLICK";

export interface SBForecastingBadRequestExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export type SBForecastingComparisonOperator = "LESS_THAN_OR_EQUAL_TO";

export type SBForecastingCreativeType = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

export interface SBForecastingCriteria {

  /** OptimizationRules ComparisonOperator. */
  comparisonOperator?: "LESS_THAN_OR_EQUAL_TO";

  /** The value of the threshold associated with the attribute and ComparisonOperator in optimizationRules. */
  value?: number;
}

export interface SBForecastingErrorObject {

  /** The forecast error code. */
  code?: string;

  /** The forecast error description. */
  description?: string;

  /** Correlates the campaign to the campaign list index specified in the request. Zero-based. */
  index?: number;
}

export interface SBForecastingInternalServerExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBForecastingKeyword {

  /** The associated bid. Note that this value must be less than the budget associated with the Advertiser account. */
  bid?: number;

  /** The keyword text. Maximum of 10 words. */
  keywordText?: string;

  /** The match type. Valid value: EXACT, PHRASE, BROAD. For more information, see [match types](https://advertising.amazon.com/help#GHTRFDZRJPW6764R) in the Amazon Advertising support center. */
  matchType?: string;
}

export interface SBForecastingLandingPageObject {

  /** Landing page information. */
  landingPageUrl?: string;
}

export interface SBForecastingMetric {

  /** The forecast metric name. Currently only IMPRESSIONS is supported. */
  metric?: string;

  /** The forecast min and max value. */
  value?: {
    max?: number;
    min?: number;
  };
}

export interface SBForecastingMetricValue {

  /** The forecast max value. */
  max?: number;

  /** The forecast min value. */
  min?: number;
}

export interface SBForecastingNegativeKeyword {

  /** The keyword text. Maximum of 10 words. */
  keywordText?: string;

  /** The negative match type. Valid value: NEGATIVE_EXACT, NEGATIVE_PHRASE. For more information, see [negative keyword match types](https://advertising.amazon.com/help#GHTRFDZRJPW6764R) in the Amazon Advertising support center. */
  matchType?: string;
}

export interface SBForecastingNegativeProductExpression {

  /** The negative expression type associated with the target. Valid value: ASIN_BRAND_SAME_AS, ASIN_SAME_AS. */
  type?: string;

  /** The expression value associated with targets. */
  value?: string;
}

export interface SBForecastingNegativeProductTarget {

  expressions?: {
    type?: string;
    value?: string;
  }[];
}

export interface SBForecastingOptimizationRules {

  /** Supported OptimizationRules metric attributeName. */
  attributeName?: "COST_PER_CLICK";

  /** The rule Criteria associated with the optimizationRules. */
  criteria?: {
    comparisonOperator?: "LESS_THAN_OR_EQUAL_TO";
    value?: number;
  };
}

export interface SBForecastingProductExpression {

  /** The expression type associated with the target. Valid value: ASIN_CATEGORY_SAME_AS, ASIN_BRAND_SAME_AS, ASIN_PRICE_LESS_THAN, ASIN_PRICE_BETWEEN, ASIN_PRICE_GREATER_THAN, ASIN_REVIEW_RATING_LESS_THAN, ASIN_REVIEW_RATING_BETWEEN, ASIN_REVIEW_RATING_GREATER_THAN, ASIN_SAME_AS. */
  type?: string;

  /** The expression value associated with targets. */
  value?: string;
}

export interface SBForecastingProductTarget {

  /** The associated bid. Note that this value must be less than the budget associated with the Advertiser account. */
  bid?: number;

  expressions?: {
    type?: string;
    value?: string;
  }[];
}

export interface SBForecastingRequestCampaignObject {

  adGroups: {
    creativeAsins?: string[];
    creativeType?: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    keywords?: {
      bid?: number;
      keywordText?: string;
      matchType?: string;
    }[];
    landingPages?: {
      landingPageUrl?: string;
    }[];
    negativeKeywords?: {
      keywordText?: string;
      matchType?: string;
    }[];
    negativeTargets?: {
      expressions?: {
        type?: string;
        value?: string;
      }[];
    }[];
    targets?: {
      bid?: number;
      expressions?: {
        type?: string;
        value?: string;
      }[];
    }[];
    themes?: {
      bid?: number;
      themeType?: string;
    }[];
  }[];

  /** The amount of the budget. */
  budget: number;

  /** Budget can be set to DAILY or LIFETIME. 

|BudgetType|Description|
|-----------|-----------|
|DAILY| The amount that you're willing to spend on this campaign each day. If the campaign spends less than your daily budget, the unspent amount can be used to increase your daily budget on the other days of the calendar month.|
|LIFETIME| The total amount that you are willing to spend on this campaign.| */
  budgetType?: string;

  /** The YYYY-MM-DD end date for the campaign. Must be greater than the value for `startDate`. If not specified, the campaign has no end date and runs continuously. */
  endDate?: string;

  /** The forecast type. can be set to WEEKLY or MONTHLY. 

**If have not set the forecastType during campaign creation then use WEEKLY as goal value.** */
  forecastType: string;

  /** Goal will allow you to set goal type to help drive your campaign performance. 

**If have not set the goal during campaign creation then use PAGE_VISIT as goal type.** 


The goal type of the campaign. Initial launch only supports PAGE_VISIT. 

BRAND_IMPRESSION_SHARE - This goal is a PREVIEW ONLY and cannot be set currently. It will allow you grown your brand impression share on top of search placement. 

PAGE_VISIT - This goal drives traffic to your landing and detail pages through all placements. */
  goal?: string;

  optimizationRules?: {
    attributeName?: "COST_PER_CLICK";
    criteria?: {
      comparisonOperator?: "LESS_THAN_OR_EQUAL_TO";
      value?: number;
    };
  }[];

  /** The YYYY-MM-DD start date for the campaign. If this field is not set to a value, the current date is used. */
  startDate?: string;
}

export interface SBForecastingResponseCampaignObject {

  errors?: {
    code?: string;
    description?: string;
    index?: number;
  }[];

  successes?: {
    campaign?: {
      forecastTimestamp?: string;
      forecasts?: {
        metric?: string;
        value?: {
          max?: number;
          min?: number;
        };
      }[];
    };
    index?: number;
  }[];
}

export interface SBForecastingSuccessCampaign {

  /** The forecast timestamp. */
  forecastTimestamp?: string;

  forecasts?: {
    metric?: string;
    value?: {
      max?: number;
      min?: number;
    };
  }[];
}

export interface SBForecastingSuccessObject {

  campaign?: {
    forecastTimestamp?: string;
    forecasts?: {
      metric?: string;
      value?: {
        max?: number;
        min?: number;
      };
    }[];
  };

  /** Correlates the campaign to the campaign list index specified in the request. Zero-based. */
  index?: number;
}

export interface SBForecastingTheme {

  /** The associated bid. Note that this value must be less than the budget associated with the Advertiser account. */
  bid?: number;

  /** The theme target type. Valid value: KEYWORDS_RELATED_TO_YOUR_BRAND, KEYWORDS_RELATED_TO_YOUR_LANDING_PAGES. 

KEYWORDS_RELATED_TO_YOUR_BRAND - keywords related to brands. 

KEYWORDS_RELATED_TO_YOUR_LANDING_PAGES - keywords related to your landing pages. */
  themeType?: string;
}

export interface SBForecastingThrottlingExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBForecastingUnauthorizedExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBForecastingUnprocessableEntityExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBGetAssociatedCampaignsResponse {

  /** A list of campaigns that are associated to this budget rule. */
  associatedCampaigns?: {
    campaignId: string;
    campaignName: string;
    ruleStatus: string;
  }[];

  /** To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export type SBInsightsAdFormat = "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

export interface SBInsightsAdGroup {

  /** Type of Ad format. */
  adFormat: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  keywords?: {
    bid: number;
    keywordText: string;
    matchType: "BROAD" | "EXACT" | "PHRASE";
  }[];
}

export interface SBInsightsBadRequestExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBInsightsCampaignInsightsRequestContent {

  adGroups: {
    adFormat: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    keywords?: {
      bid: number;
      keywordText: string;
      matchType: "BROAD" | "EXACT" | "PHRASE";
    }[];
  }[];
}

export interface SBInsightsCampaignInsightsResponseContent {

  insights?: {
    keywordInsight: {
      adGroupIndex?: number;
      alerts?: "LOW_BID" | "LOW_KEYWORD_TRAFFIC"[];
      bid?: number;
      keywordIndex?: number;
      keywordText?: string;
      matchType?: "BROAD" | "EXACT" | "PHRASE";
      searchTermImpressionRank?: number;
      searchTermImpressionShare?: number;
    };
  }[];

  /** Operations that return paginated results include a pagination token in this field. To retrieve the next page of results, call the same operation and specify this token in the request. If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface SBInsightsInternalServerExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBInsightsKeyword {

  /** The associated bid. Note that this value must be less than the budget associated with the Advertiser account. For more information, see [supported features](https://advertising.amazon.com/API/docs/v2/guides/supported_features). */
  bid: number;

  /** The keyword text. Maximum of 10 words. */
  keywordText: string;

  /** The match type. For more information, see [match types](https://advertising.amazon.com/help#GHTRFDZRJPW6764R) in the Amazon Advertising support center. */
  matchType: "BROAD" | "EXACT" | "PHRASE";
}

export type SBInsightsKeywordAlertType = "LOW_BID" | "LOW_KEYWORD_TRAFFIC";

export interface SBInsightsKeywordInsight {

  /** Correlates the ad group to the ad group array index specified in the request. Zero-based. */
  adGroupIndex?: number;

  alerts?: "LOW_BID" | "LOW_KEYWORD_TRAFFIC"[];

  /** The associated bid. Note that this value must be less than the budget associated with the Advertiser account. For more information, see [supported features](https://advertising.amazon.com/API/docs/v2/guides/supported_features). */
  bid?: number;

  /** Correlates the keyword to the keyword array index specified in the request. Zero-based. */
  keywordIndex?: number;

  /** The keyword text. Maximum of 10 words. */
  keywordText?: string;

  /** The match type. For more information, see [match types](https://advertising.amazon.com/help#GHTRFDZRJPW6764R) in the Amazon Advertising support center. */
  matchType?: "BROAD" | "EXACT" | "PHRASE";

  /** The account-level ad-attributed impression rank for the search-term / keyword.
Provides the [1:N] place the advertiser ranks among all advertisers for the keyword by ad impressions in a marketplace in the last 7 days.
It tells an advertiser how many advertisers had higher share of ad impressions.
This information is only available for keywords the advertiser targeted with ad impressions.
Only available in the following marketplaces: US, CA, MX, UK, DE, FR, ES, IT, IN, JP. */
  searchTermImpressionRank?: number;

  /** The account-level ad-attributed impression share for the search-term / keyword.
Provides percentage share of all ad impressions the advertiser has for the keyword in the last 7 days.
This metric helps advertisers identify potential opportunities based on their share of relevant keywords.
This information is only available for keywords the advertiser targeted with ad impressions.
Only available in the following marketplaces: US, CA, MX, UK, DE, FR, ES, IT, IN, JP. */
  searchTermImpressionShare?: number;
}

export type SBInsightsMatchType = "BROAD" | "EXACT" | "PHRASE";

export type SBInsightsObject = {
  keywordInsight: {
    adGroupIndex?: number;
    alerts?: "LOW_BID" | "LOW_KEYWORD_TRAFFIC"[];
    bid?: number;
    keywordIndex?: number;
    keywordText?: string;
    matchType?: "BROAD" | "EXACT" | "PHRASE";
    searchTermImpressionRank?: number;
    searchTermImpressionShare?: number;
  };
};

export interface SBInsightsThrottlingExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBInsightsUnauthorizedExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBInsightsUnprocessableEntityExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export type SBKeywordRecommendationCreativeType = "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

export interface SBKeywordRecommendationError {

  /** The HTTP status code of the response. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export type SBKeywordRecommendationGoal = "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT";

export type SBKeywordRecommendationImpressionRank = number;

export type SBKeywordRecommendationImpressionShare = number;

export type SBKeywordRecommendationMatchType = "broad" | "exact" | "phrase";

export interface SBKeywordRecommendationRequestAsin {

  asins: string[];

  creativeAsins?: string[];

  /** Optional SB creative type used for generating static or video generated keyword recommendations.  Inferred by asins if not included.
|Identifier|Description|Recommendations|
|----------|-----------|-----------|
|PRODUCT_COLLECTION| Showcase multiple products within a branded shopping experience|Static|
|AUTHOR_COLLECTION| Showcase books under your name that direct to your Book Brand landing page|Static|
|STORE_SPOTLIGHT| Showcase your brand logo, headline, and up to 3 product categories or sub-pages|Static|
|VIDEO| Display a video ad promoting a product that redirects to its landing page|Video|
|BRAND_VIDEO| Display a branded video ad that redirects shoppers to your Brand Store landing page|Video|
<br/> */
  creativeType?: "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  /** Optionally indicate the desired goal of your campaign. Different keyword recommendations will be provided depending on your specified goal. 
|Identifier|Description|
|----------|-----------|
|PAGE_VISIT| Boost the visits to your landing page|
|BRAND_IMPRESSION_SHARE| Facilitate consumers' awareness of your brand|<br/> */
  goal?: "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT";

  /** Optional locale to request keyword suggestion translations. For example, to request Simplified Chinese translations in US, provide locale “zh_CN”. Response will include both keyword suggestions and their translations. Supported locales include: Simplified Chinese (locale: “zh_CN”) for US, UK and CA. English (locale: “en_GB”) for DE, FR, IT and ES. */
  locale?: string;

  /** Maximum number of suggestions to return. Max value is 1000. If not provided, default to 100. */
  maxNumSuggestions?: number;
}

export interface SBKeywordRecommendationRequestUrl {

  creativeAsins?: string[];

  /** Optional SB creative type used for generating static or video generated keyword recommendations.  Inferred by asins if not included.
|Identifier|Description|Recommendations|
|----------|-----------|-----------|
|PRODUCT_COLLECTION| Showcase multiple products within a branded shopping experience|Static|
|AUTHOR_COLLECTION| Showcase books under your name that direct to your Book Brand landing page|Static|
|STORE_SPOTLIGHT| Showcase your brand logo, headline, and up to 3 product categories or sub-pages|Static|
|VIDEO| Display a video ad promoting a product that redirects to its landing page|Video|
|BRAND_VIDEO| Display a branded video ad that redirects shoppers to your Brand Store landing page|Video|
<br/> */
  creativeType?: "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";

  /** Optionally indicate the desired goal of your campaign. Different keyword recommendations will be provided depending on your specified goal. 
|Identifier|Description|
|----------|-----------|
|PAGE_VISIT| Boost the visits to your landing page|
|BRAND_IMPRESSION_SHARE| Facilitate consumers' awareness of your brand|<br/> */
  goal?: "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT";

  /** Optional locale to request keyword suggestion translations. For example, to request Simplified Chinese translations in US, provide locale “zh_CN”. Response will include both keyword suggestions and their translations. Supported locales include: Simplified Chinese (locale: “zh_CN”) for US, UK and CA. English (locale: “en_GB”) for DE, FR, IT and ES. */
  locale?: string;

  /** Maximum number of suggestions to return. Max value is 1000. If not provided, default to 100. */
  maxNumSuggestions?: number;

  /** The URL of the Stores page, or, Vendors may also specify the URL of a custom landing page. */
  url: string;
}

export type SBKeywordRecommendationType = "addKeyword";

export interface SBKeywordSuggestion {

  /** The match type. For more information, see [match types](https://advertising.amazon.com/help#GHTRFDZRJPW6764R) in the Amazon Advertising support center. */
  matchType?: "broad" | "exact" | "phrase";

  /** Unique ID for each recommendation. */
  recommendationId?: string;

  /** The account-level ad-attributed impression rank for the search-term / keyword. Provides the [1:N] place the advertiser ranks among all advertisers for the keyword by ad impressions in a marketplace in the last 7 days. It tells an advertiser how many advertisers had higher share of ad impressions. */
  searchTermImpressionRank?: number;

  /** The account-level ad-attributed impression share for the search-term / keyword. Provides percentage share of all ad impressions the advertiser has for the keyword in the last 7 days. This metric helps advertisers identify potential opportunities based on their share of relevant keywords. */
  searchTermImpressionShare?: number;

  /** Localized keyword value if locale was specified. */
  translation?: string;

  /** A recommendation identifier that describes the suggested action for the recommendation.
|Identifier|Description|
|----------|-----------|
|addKeyword|The suggested action is to add the keyword.|
<br/> */
  type?: "addKeyword";

  /** Recommended keyword value. */
  value?: string;
}

export interface SBListAssociatedBudgetRulesResponse {

  /** A list of associated budget rules. */
  associatedRules?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];
}

export interface SBOptimizationRecommendationRequestContent {

  /** Cost control metric to retrieve recommended value for.  Currently only COST_PER_CLICK is supported */
  costControlMetric: "COST_PER_CLICK";

  landingPages: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  }[];
}

export interface SBOptimizationRecommendationResponseContent {

  /** Cost control metric to retrieve recommended value for.  Currently only COST_PER_CLICK is supported */
  costControlMetric: "COST_PER_CLICK";

  /** Minimum accepted value for cost control metric */
  minimumValue: number;

  /** Recommended value for cost control metric */
  recommendedValue: number;
}

export type SBRuleType = "PERFORMANCE" | "SCHEDULE";

export interface SBTargetingAccessDeniedExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBTargetingAgeRange {

  /** Id of Age Range. Use /sb/targets/categories/{categoryRefinementId}/refinements to retrieve Age Range Refinement IDs. */
  ageRangeRefinementId: string;

  /** Name of Age Range. */
  name?: string;

  /** Translated name of Age Range based off locale sent in request. */
  translatedName?: string;
}

export interface SBTargetingBadRequestExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBTargetingBrand {

  /** Id of brand. Use /sb/targets/categories/{categoryRefinementId}/refinements to retrieve Brand Refinement IDs. */
  brandRefinementId: string;

  /** Name of brand. */
  name?: string;
}

export interface SBTargetingCategory {

  asinCountRange?: {
    max?: number;
    min?: number;
  };

  /** The category refinement id. Please use /sb/targets/categories or /sb/recommendations/targets/category to retrieve category IDs. */
  categoryRefinementId?: string;

  estimatedReach?: {
    max?: number;
    min?: number;
  };

  /** If the category is targetable or not. */
  isTargetable?: boolean;

  /** Name of category. */
  name?: string;

  /** The category refinement id of the parent category. Missing parentCategoryRefinementId signifies this is a root category. */
  parentCategoryRefinementId?: string;

  /** Translated name of the category. */
  translatedName?: string;
}

export interface SBTargetingEstimatedReachRange {

  max?: number;

  min?: number;
}

export interface SBTargetingGenre {

  /** Id of Genre. Use /sb/targets/categories/{categoryRefinementId}/refinements to retrieve Genre Refinement IDs. */
  genreRefinementId: string;

  /** Name of Genre. */
  name?: string;

  /** Translated name of Genre based off locale sent in request. */
  translatedName?: string;
}

export interface SBTargetingGetNegativeBrandsResponseContent {

  /** List of Brands. */
  brands?: {
    brandRefinementId: string;
    name?: string;
  }[];

  /** Operations that return paginated results include a pagination token in this field. To retrieve the next page of results, call the same operation and specify this token in the request. If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface SBTargetingGetRefinementsForCategoryResponseContent {

  /** List of Age Ranges. Use /sb/targets/categories/{categoryRefinementId}/refinements to retrieve Age Ranges. Age Ranges are only available for categories related to children's toys and games. */
  ageRanges?: {
    ageRangeRefinementId: string;
    name?: string;
    translatedName?: string;
  }[];

  /** List of Brands. */
  brands?: {
    brandRefinementId: string;
    name?: string;
  }[];

  /** List of Genres. Use /sb/targets/categories/{categoryRefinementId}/refinements to retrieve Genre Node IDs. Genres are only available for categories related to books. */
  genres?: {
    genreRefinementId: string;
    name?: string;
    translatedName?: string;
  }[];

  /** Operations that return paginated results include a pagination token in this field. To retrieve the next page of results, call the same operation and specify this token in the request. If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface SBTargetingGetTargetableASINCountsRequestContent {

  /** List of Age Range Refinement Ids. */
  ageRanges?: string[];

  /** List of Brand Refinement Ids. */
  brands?: string[];

  /** The category refinement id. Please use /sb/targets/categories or /sb/recommendations/targets/category to retrieve category IDs. */
  category: string;

  /** List of Genre Refinement Ids. */
  genres?: string[];

  /** Indicates if products have prime shipping. Leave empty to include both prime shipping and non-prime shipping products. */
  isPrimeShipping?: boolean;

  /** A range of prices. We use this to retrieve the number of targetable ASINs that falls within this price range. */
  priceRange?: {
    max?: number;
    min?: number;
  };

  /** Rating range is restricted to integers between 0 and 5, inclusive. Min must be less than or equal to max. We use this to retrieve the number of targetable ASINs that falls within this rating range. */
  ratingRange?: {
    max?: number;
    min?: number;
  };
}

export interface SBTargetingGetTargetableASINCountsResponseContent {

  asinCounts?: {
    max?: number;
    min?: number;
  };
}

export interface SBTargetingGetTargetableCategoriesResponseContent {

  /** List of categories. */
  categoryTree?: {
    asinCountRange?: {
      max?: number;
      min?: number;
    };
    categoryRefinementId?: string;
    estimatedReach?: {
      max?: number;
      min?: number;
    };
    isTargetable?: boolean;
    name?: string;
    parentCategoryRefinementId?: string;
    translatedName?: string;
  }[];

  /** Operations that return paginated results include a pagination token in this field. To retrieve the next page of results, call the same operation and specify this token in the request. If the `NextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface SBTargetingIntegerRange {

  max?: number;

  min?: number;
}

export interface SBTargetingInternalServerExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export type SBTargetingLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";

export interface SBTargetingPriceRange {

  max?: number;

  min?: number;
}

export interface SBTargetingRatingRange {

  max?: number;

  min?: number;
}

export type SBTargetingSupplySource = "AMAZON" | "STREAMING_VIDEO";

export interface SBTargetingThrottlingExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBTargetingUnauthorizedExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SBTargetingUnprocessableEntityExceptionResponseContent {

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;
}

export interface SevenDaysMissedOpportunities {

  /** End date of the Missed Opportunities date range (YYYY-MM-DD) in local time. */
  endDate?: string;

  /** Lower bound of the estimated Missed Clicks. */
  estimatedMissedClicksLower?: number;

  /** Upper bound of the estimated Missed Clicks. */
  estimatedMissedClicksUpper?: number;

  /** Lower bound of the estimated Missed Impressions. */
  estimatedMissedImpressionsLower?: number;

  /** Upper bound of the estimated Missed Impressions. */
  estimatedMissedImpressionsUpper?: number;

  /** Lower bound of the estimated Missed Sales. This will be in local currency. */
  estimatedMissedSalesLower?: number;

  /** Upper bound of the estimated Missed Sales. This will be in local currency. */
  estimatedMissedSalesUpper?: number;

  /** Percentage of time the campaign is active with a budget. */
  percentTimeInBudget?: number;

  /** Start date of the Missed Opportunities date range (YYYY-MM-DD) in local time. */
  startDate?: string;
}

export interface ShopperCohortBidAdjustment {

  audienceSegments?: {
    audienceId?: string;
    audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
  }[];

  percentage?: number;

  /** Type of shopper cohort to apply shopper cohort bid adjustments to.
Only AUDIENCE_SEGMENT is supported at the moment */
  shopperCohortType?: "AUDIENCE_SEGMENT";
}

export type ShopperCohortType = "AUDIENCE_SEGMENT";

export type ShopperSegment = "NEW_TO_BRAND_PURCHASE";

export type SiteRestriction = "AMAZON_BUSINESS";

export interface StartMigrationJobRequestContent {

  /** Please note that brandEntityId is only required for sellers. You can get the brandEntityId by calling the <a href = https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#tag/Brands/operation/getBrands>GET /brands</a> endpoint. */
  brandEntityId?: string;

  /** Provide list of campaign ids that needs to be migrated */
  campaignIds: string[];

  /** By default, theme targeting is set true if no value is provide. To disable theme targeting, set this flag to false. */
  enableThemeTargeting: boolean;

  /** Set this flag to true if you want generate new campaign ID based on V3 campaign ID. These campaigns will not be visible through V4 campaign list call. If set to true not all campaign entities such as ad group, targeting, ad, or creatives are created. Use this flag for staging purpose only.
By default it will always be false */
  isStagedMigration?: boolean;

  /** This is optional parameter. By default, the new migrated campaigns will have the original status of V3 campaigns. If this parameter is set, then all newly migrated campaigns will have this state.
 Supported campaign states
| State                                              |  Description |
|----------------------------------------------------------|--------------|
| ENABLED                               | Campaign entity has ENABLED state | */
  newCampaignState?: string;
}

export interface StartMigrationJobResponseContent {

  /** This jobId can be used to track migration status through /sb/v4/legacyCampaigns/migrationJob/status
and results of each campaign through /sb/v4/legacyCampaigns/migrationJob/results API */
  jobId?: string;
}

export type state = "ACTIVE" | "PAUSED";

export interface StorePage {

  /** Display Name of the store page shown on a store spotlight campaign. */
  displayName?: string;

  /** Selected asin from the store page which is displayed on the store spotlight campaign. */
  primaryAsin?: string;
}

export interface StoreSpotlightCreative {

  /** The identifier of the [brand logo](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#brandlogo) image from the brand store's asset library.
Note that for campaigns created in the Amazon Advertising console prior to release of the brand store's assets library, responses will not include a value for this field. */
  brandLogoAssetId: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName: string;

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language.
If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The CreativeProperties Amazon will enhance or generate based on various factors like audience, placement etc. */
  creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];

  /** DEPRECATED. Please use `headlines` field to provide the headline texts associated with the creative.
This shape is deprecated: Please use headlines instead */
  headline?: string;

  /** An array of headline texts associated with the creative. */
  headlines?: string[];

  /** Landing page V2, where type is String with allowed values listed, and url or asins of that type. This parameter is in PREVIEW only and can not be used as part of a request. */
  landingPage?: {
    asins?: string[];
    type?: string;
    url?: string;
  };

  /** An array of subpages */
  subpages: {
    asin?: string;
    pageTitle?: string;
    url?: string;
  }[];
}

export interface Subpage {

  asin?: string;

  pageTitle?: string;

  url?: string;
}

export interface SuggestedHeadline {

  /** String that contains suggested headline. */
  headline?: string;

  /** Unique Id of suggested headline. */
  headlineId?: string;
}

export type Tags = Record<string, unknown>;

export type ThrottledErrorCode = "THROTTLED";

export type ThrottlingErrorCode = "THROTTLED";

export interface ThrottlingExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;
}

export interface timeOfDay {

  /** The end time of intra-day budget rule window in the format 'hh:mm:ss'. Required to be greater than start-time.  */
  endTime?: string;

  /** The start time of intra-day budget rule window in the format 'hh:mm:ss'  */
  startTime?: string;
}

export type UnauthorizedErrorCode = "UNAUTHORIZED";

export interface UnauthorizedExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;
}

export type UnsupportedMediaTypeErrorCode = "UNSUPPORTED_MEDIA_TYPE";

export interface UnsupportedMediaTypeExceptionResponseContent {

  /** A human-readable description of the enumerated response code in the `code` field. */
  code: string;

  /** An enumerated response code. */
  details: string;
}

export interface UpdateAd {

  /** The product ad identifier. */
  adId: string;

  /** The name of the ad. */
  name?: string;

  /** Entity state for create or update operation. */
  state?: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface UpdateAdGroup {

  /** The identifier of the keyword. */
  adGroupId: string;

  /** The name of the ad group. */
  name?: string;

  /** Entity state for create or update operation. */
  state?: "ENABLED" | "PAUSED" | "PROPOSED";
}

export interface UpdateAutoCollectionAd {

  /** Entity object identifier. */
  adId: string;

  creative: {
    asinExclusions?: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
  };
}

export interface UpdateBudgetRulesResponse {

  responses?: {
    associatedCampaignIds?: string[];
    code?: string;
    details?: string;
    ruleId?: string;
  }[];
}

export interface UpdateCampaign {

  bidding?: {
    bidAdjustmentsByPlacement?: {
      percentage?: number;
      placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
    }[];
    bidAdjustmentsByShopperSegment?: {
      percentage?: number;
      shopperSegment?: "NEW_TO_BRAND_PURCHASE";
    }[];
    bidOptimization?: boolean;
    bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
    shopperCohortBidAdjustments?: {
      audienceSegments?: {
        audienceId?: string;
        audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
      }[];
      percentage?: number;
      shopperCohortType?: "AUDIENCE_SEGMENT";
    }[];
  };

  /** The budget of the campaign. See https://advertising.amazon.com/help?entityId=ENTITYJDATFOIA05Q7#GE5QEBS6QRJJAT3A */
  budget?: number;

  /** The identifier of the campaign. */
  campaignId: string;

  /** endDate is optional. If endDate is specified, startDate must be specified as well. */
  endDate?: string;

  /** The name of the campaign. */
  name?: string;

  /** The identifier of an existing portfolio to which the campaign is associated. */
  portfolioId?: string;

  /** startDate can only be changed if the current startDate is in the future. */
  startDate?: string;

  /** Entity state for create or update operation. */
  state?: "ENABLED" | "PAUSED" | "PROPOSED";

  /** A list of advertiser-specified custom identifiers for the campaign. Each customer identifier is a key-value pair. You can specify a maximum of 50 identifiers. */
  tags?: {

  };
}

export interface UpdateManualCollectionAd {

  /** Entity object identifier. */
  adId: string;

  creative: {
    asins: string[];
    brandLogoAssetID?: string;
    brandLogoCrop?: {
      height?: number;
      left?: number;
      top?: number;
      width?: number;
    };
    brandName: string;
    landingPage?: {
      pageType?: "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    title?: string;
  };
}

export interface UpdateOptimizationRule {

  conditions?: {
    attributeName: string;
    criteria: {
      comparisonOperator?: string;
      value?: number;
    };
  }[];

  /** The identifier of the optimization rule. */
  optimizationRuleId?: string;
}

export interface UpdateOptimizationRuleSuccessResponseItem {

  /** The index of the entityId in the array from the request body. */
  index: number;

  optimizationRule: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    optimizationRuleId?: string;
  };

  /** The identifier of the optimization rule. */
  optimizationRuleId: string;
}

export interface UpdateSBBudgetRulesRequest {

  /** A list of budget rule details. */
  budgetRulesDetails?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];
}

export interface UpdateSponsoredBrandsAdGroupsRequestContent {

  /** An array of adGroups with updated values. */
  adGroups: {
    adGroupId: string;
    name?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface UpdateSponsoredBrandsAdGroupsResponseContent {

  adGroups?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      adGroup?: {
        adGroupId: string;
        campaignId: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adGroupId?: string;
      index: number;
    }[];
  };
}

export interface UpdateSponsoredBrandsAdsRequestContent {

  /** An array of Ads with updated values. */
  ads: {
    adId: string;
    name?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}

export interface UpdateSponsoredBrandsAdsResponseContent {

  ads?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      ad?: {
        adGroupId: string;
        adId: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adId?: string;
      index: number;
    }[];
  };
}

export interface UpdateSponsoredBrandsAutoCollectionAdsRequestContent {

  /** List of Auto Collection Ad Updates */
  ads: {
    adId: string;
    creative: {
      asinExclusions?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName: string;
    };
  }[];
}

export interface UpdateSponsoredBrandsAutoCollectionAdsResponseContent {

  creatives?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      adId: string;
      creativeVersion?: string;
      index: number;
    }[];
  };
}

export interface UpdateSponsoredBrandsCampaignsRequestContent {

  campaigns: {
    bidding?: {
      bidAdjustmentsByPlacement?: {
        percentage?: number;
        placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
      }[];
      bidAdjustmentsByShopperSegment?: {
        percentage?: number;
        shopperSegment?: "NEW_TO_BRAND_PURCHASE";
      }[];
      bidOptimization?: boolean;
      bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
      shopperCohortBidAdjustments?: {
        audienceSegments?: {
          audienceId?: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType?: "AUDIENCE_SEGMENT";
      }[];
    };
    budget?: number;
    campaignId: string;
    endDate?: string;
    name?: string;
    portfolioId?: string;
    startDate?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
  }[];
}

export interface UpdateSponsoredBrandsCampaignsResponseContent {

  campaigns?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          biddingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          billingError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          budgetError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
          dateError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      campaign?: {
        bidding?: {
          bidAdjustmentsByPlacement?: {
            percentage?: number;
            placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
          }[];
          bidAdjustmentsByShopperSegment?: {
            percentage?: number;
            shopperSegment?: "NEW_TO_BRAND_PURCHASE";
          }[];
          bidOptimization?: boolean;
          bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
          shopperCohortBidAdjustments?: {
            audienceSegments?: {
              audienceId?: string;
              audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
            }[];
            percentage?: number;
            shopperCohortType?: "AUDIENCE_SEGMENT";
          }[];
        };
        brandEntityId?: string;
        budget: number;
        budgetType: "DAILY" | "LIFETIME";
        campaignId: string;
        costType?: string;
        endDate?: string;
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        goal?: string;
        isMultiAdGroupsEnabled?: boolean;
        kpi?: string;
        name: string;
        portfolioId?: string;
        productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
        ruleBasedBudget?: {
          applicableRuleId?: string;
          applicableRuleName?: string;
          isProcessing?: boolean;
          value?: number;
        };
        siteRestrictions?: "AMAZON_BUSINESS"[];
        smartDefault?: string[];
        startDate?: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
        tags?: {

        };
        targetedPGDealId?: string;
      };
      campaignId?: string;
      index: number;
    }[];
  };
}

export interface UpdateSponsoredBrandsManualCollectionAdsRequestContent {

  /** List of Manual Collection Ad Updates */
  ads: {
    adId: string;
    creative: {
      asins: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandName: string;
      landingPage?: {
        pageType?: "PRODUCT_LIST" | "STORE";
        url?: string;
      };
      title?: string;
    };
  }[];
}

export interface UpdateSponsoredBrandsManualCollectionAdsResponseContent {

  creatives?: {
    error?: {
      errors?: {
        errorType: string;
        errorValue: {
          otherError?: {
            cause: {
              location: string;
              trigger?: string;
            };
            message: string;
            reason: string;
          };
          rangeError?: {
            allowed?: string[];
            cause: {
              location: string;
              trigger?: string;
            };
            lowerLimit?: string;
            message: string;
            reason: string;
            upperLimit?: string;
          };
        };
      }[];
      index: number;
    }[];
    success?: {
      adId: string;
      creativeVersion?: string;
      index: number;
    }[];
  };
}

export interface UpdateSponsoredBrandsOptimizationRulesRequestContent {

  optimizationRules: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    optimizationRuleId?: string;
  }[];
}

export interface UpdateSponsoredBrandsOptimizationRulesResponseContent {

  optimizationRules: {
    error?: {
      errors?: {
        code: string;
        message: string;
      }[];
      index: number;
    }[];
    success?: {
      index: number;
      optimizationRule: {
        conditions?: {
          attributeName: string;
          criteria: {
            comparisonOperator?: string;
            value?: number;
          };
        }[];
        optimizationRuleId?: string;
      };
      optimizationRuleId: string;
    }[];
  };
}

export interface ValueTypeRuleCriteria {

  /** Enum: "LESS_THAN_OR_EQUAL_TO"

The comparision operator. */
  comparisonOperator?: string;

  /** The value of the threshold associated with the attribute. */
  value?: number;
}

export interface VideoCreative {

  /** The identifier of image/video asset from the store's asset library */
  brandLogoAssetId?: string;

  /** Asset cropping attributes */
  brandLogoCrop?: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };

  /** The displayed brand name in the ad headline.
Maximum length is 30 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  brandName?: string;

  /** If set to true and the headline and/or video are not in the marketplace's default language, Amazon will attempt to translate them to the marketplace's default language.
If Amazon is unable to translate them, the ad will be rejected by moderation. We only support translating headlines and videos from English to German, French, Italian, Spanish, Japanese, and Dutch. See developer notes for more information. */
  consentToTranslate?: boolean;

  /** The headline text. Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
See [the policy](https://advertising.amazon.com/resources/ad-policy/sponsored-ads-policies#headlines) for headline requirements. */
  headline?: string;

  /** The assetIds of the original videos submitted by the advertiser.
If 'consentToTranslate' is set to true and translation is SUCCESSFUL then 'videoAssetIds' will return translated video assetId whereas `originalVideoAssetIds` will return the original video assetId. In all other cases, `videoAssetIds` will return original video assetId. */
  videoAssetIds: string[];
}
// Auto-generated endpoint response types — do not edit

export type ListSponsoredBrandsAdsResponse = {
  ads?: {
    adGroupId: string;
    adId?: string;
    campaignId: string;
    creative?: {
      asinExclusions?: string[];
      asins?: string[];
      brandLogoAssetID?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      creativeStatus?: string;
      creativeVersion?: string;
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      title?: string;
      type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
      videoAssetIds?: string[];
    };
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    landingPage?: {
      asins?: string[];
      pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
      url?: string;
    };
    name?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
  nextToken?: string;
  totalResults?: number;
};

export type CreateBrandVideoCreativeResponse = {
  adId?: string;
  creativeVersion?: string;
};

export type ListCreativesResponse = {
  creatives?: {
    adId?: string;
    creationTime?: number;
    creativeProperties?: {
      asins?: string[];
      brandLogoAssetId?: string;
      brandLogoCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      brandLogoUrl?: string;
      brandName?: string;
      collectionType?: "BUNDLE" | "THEMED";
      companionAsins?: string[];
      consentToTranslate?: boolean;
      creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
      customImageAssetId?: string;
      customImageCrop?: {
        height?: number;
        left?: number;
        top?: number;
        width?: number;
      };
      customImageUrl?: string;
      customImages?: {
        assetId?: string;
        crop?: {
          height?: number;
          left?: number;
          top?: number;
          width?: number;
        };
        url?: string;
      }[];
      headline?: string;
      headlines?: string[];
      landingPage?: {
        asins?: string[];
        type?: "ADVERTISING_LANDING_PAGE" | "AD_LANDING_PREVIEW" | "BROWSE" | "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "SEARCH" | "STORE" | "UNKNOWN";
        value?: string;
      };
      layout?: "BRAND_GALLERY";
      originalHeadline?: string;
      originalHeadlines?: string[];
      originalVideoAssetIds?: string[];
      subpages?: {
        asin?: string;
        pageTitle?: string;
        url?: string;
      }[];
      videoAssetIds?: string[];
    };
    creativeStatus?: "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION";
    creativeType?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    creativeVersion?: string;
    lastUpdateTime?: number;
  }[];
  nextToken?: string;
  totalResults?: number;
};

export type CreateProductCollectionCreativeResponse = {
  adId?: string;
  creativeVersion?: string;
};

export type CreateExtendedProductCollectionCreativeResponse = {
  adId?: string;
  creativeVersion?: string;
};

export type CreateStoreSpotlightCreativeResponse = {
  adId?: string;
  creativeVersion?: string;
};

export type CreateVideoCreativeResponse = {
  adId?: string;
  creativeVersion?: string;
};

export type GetSBBudgetRulesForAdvertiserResponseEndpoint = {
  budgetRulesForAdvertiserResponse?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];
  nextToken?: string;
};

export type GetBudgetRuleByRuleIdForSBCampaignsResponse = {
  budgetRule?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  };
};

export type GetCampaignsAssociatedWithSBBudgetRuleResponse = {
  associatedCampaigns?: {
    campaignId: string;
    campaignName: string;
    ruleStatus: string;
  }[];
  nextToken?: string;
};

export type ListAssociatedBudgetRulesForSBCampaignsResponse = {
  associatedRules?: {
    createdDate?: number;
    lastUpdatedDate?: number;
    ruleDetails?: {
      budgetIncreaseBy?: {
        type: "PERCENT";
        value: number;
      };
      duration?: {
        dateRangeTypeRuleDuration?: {
          endDate?: string;
          startDate: string;
        };
        eventTypeRuleDuration?: {
          endDate?: string;
          eventId: string;
          eventName?: string;
          startDate?: string;
        };
      };
      name?: string;
      performanceMeasureCondition?: {
        comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "IS" | "NTB" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY" | "WEEKLY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];
};

export type DisassociateAssociatedBudgetRuleForSBCampaignsResponse = {

};

export type SBGetBudgetRulesRecommendationResponse = {
  recommendedBudgetRuleEvents?: {
    endDate?: string;
    eventId?: string;
    eventName?: string;
    startDate?: string;
    suggestedBudgetIncreasePercent?: number;
  }[];
};

export type SBInsightsCampaignInsightsResponse = {
  insights?: {
    keywordInsight: {
      adGroupIndex?: number;
      alerts?: "LOW_BID" | "LOW_KEYWORD_TRAFFIC"[];
      bid?: number;
      keywordIndex?: number;
      keywordText?: string;
      matchType?: "BROAD" | "EXACT" | "PHRASE";
      searchTermImpressionRank?: number;
      searchTermImpressionShare?: number;
    };
  }[];
  nextToken?: string;
};

export type SBTargetingGetNegativeBrandsResponse = {
  brands?: {
    brandRefinementId: string;
    name?: string;
  }[];
  nextToken?: string;
};

export type GetHeadlineRecommendationsResponse = {
  requestId?: string;
  suggestions?: {
    headline?: string;
    headlineId?: string;
  }[];
};

export type ListSponsoredBrandsOptimizationRulesResponse = {
  nextToken?: string;
  optimizationRules: {
    conditions?: {
      attributeName: string;
      criteria: {
        comparisonOperator?: string;
        value?: number;
      };
    }[];
    optimizationRuleId?: string;
  }[];
  totalCount?: number;
};

export type SBTargetingGetTargetableCategoriesResponse = {
  categoryTree?: {
    asinCountRange?: {
      max?: number;
      min?: number;
    };
    categoryRefinementId?: string;
    estimatedReach?: {
      max?: number;
      min?: number;
    };
    isTargetable?: boolean;
    name?: string;
    parentCategoryRefinementId?: string;
    translatedName?: string;
  }[];
  nextToken?: string;
};

export type SBTargetingGetRefinementsForCategoryResponse = {
  ageRanges?: {
    ageRangeRefinementId: string;
    name?: string;
    translatedName?: string;
  }[];
  brands?: {
    brandRefinementId: string;
    name?: string;
  }[];
  genres?: {
    genreRefinementId: string;
    name?: string;
    translatedName?: string;
  }[];
  nextToken?: string;
};

export type SBTargetingGetTargetableASINCountsResponse = {
  asinCounts?: {
    max?: number;
    min?: number;
  };
};

export type ListSponsoredBrandsAdGroupsResponse = {
  adGroups?: {
    adGroupId: string;
    campaignId: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    name: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
  nextToken?: string;
  totalResults?: number;
};

export type ListSponsoredBrandsCampaignsResponse = {
  campaigns?: {
    bidding?: {
      bidAdjustmentsByPlacement?: {
        percentage?: number;
        placement?: "DETAIL_PAGE" | "HOME" | "OTHER" | "TOP_OF_SEARCH";
      }[];
      bidAdjustmentsByShopperSegment?: {
        percentage?: number;
        shopperSegment?: "NEW_TO_BRAND_PURCHASE";
      }[];
      bidOptimization?: boolean;
      bidOptimizationStrategy?: "MAXIMIZE_IMMEDIATE_SALES" | "MAXIMIZE_NEW_TO_BRAND_CUSTOMERS";
      shopperCohortBidAdjustments?: {
        audienceSegments?: {
          audienceId?: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType?: "AUDIENCE_SEGMENT";
      }[];
    };
    brandEntityId?: string;
    budget: number;
    budgetType: "DAILY" | "LIFETIME";
    campaignId: string;
    costType?: string;
    endDate?: string;
    extendedData?: {
      creationDate?: number;
      lastUpdateDate?: number;
      servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
      servingStatusDetails?: string[];
    };
    goal?: string;
    isMultiAdGroupsEnabled?: boolean;
    kpi?: string;
    name: string;
    portfolioId?: string;
    productLocation?: "NOT_SOLD_ON_AMAZON" | "SOLD_ON_AMAZON" | "SOLD_ON_DTC";
    ruleBasedBudget?: {
      applicableRuleId?: string;
      applicableRuleName?: string;
      isProcessing?: boolean;
      value?: number;
    };
    siteRestrictions?: "AMAZON_BUSINESS"[];
    smartDefault?: string[];
    startDate?: string;
    state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetedPGDealId?: string;
  }[];
  nextToken?: string;
  totalCount?: number;
};

export type StartMigrationJobResponse = {
  jobId?: string;
};

export type MigrationJobResultsResponse = {
  campaigns?: {
    legacyCampaignId?: string;
    migrationStatus?: string;
    migrationStatusReason?: string;
    newCampaignId?: string;
  }[];
  jobId?: string;
  migrationJobStatus?: string;
  nextToken?: string;
};

export type MigrationJobStatusResponse = {
  jobId?: string;
  migrationJobStatus?: string;
  migrationJobStatusReason?: string;
};

export type MigrationResultsResponse = {
  campaigns?: {
    legacyCampaignId?: string;
    migrationStatus?: string;
    migrationStatusReason?: string;
    newCampaignId?: string;
  }[];
  nextToken?: string;
};

export type ListMigrationsResponse = {
  migrations?: {
    migrationEntity: {
      ad?: {
        adGroupId: string;
        adId?: string;
        campaignId: string;
        creative?: {
          asinExclusions?: string[];
          asins?: string[];
          brandLogoAssetID?: string;
          brandLogoCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          brandLogoUrl?: string;
          brandName?: string;
          collectionName?: string;
          collectionType?: "BUNDLE" | "THEMED";
          companionAsins?: string[];
          consentToTranslate?: boolean;
          creativePropertiesToOptimize?: "ADVERTISED_PRODUCT" | "CUSTOM_IMAGE" | "HEADLINE"[];
          creativeStatus?: string;
          creativeVersion?: string;
          customImageAssetId?: string;
          customImageCrop?: {
            height?: number;
            left?: number;
            top?: number;
            width?: number;
          };
          customImageUrl?: string;
          customImages?: {
            assetId?: string;
            crop?: {
              height?: number;
              left?: number;
              top?: number;
              width?: number;
            };
            url?: string;
          }[];
          headline?: string;
          headlines?: string[];
          originalHeadline?: string;
          originalHeadlines?: string[];
          originalVideoAssetIds?: string[];
          subpages?: {
            asin?: string;
            pageTitle?: string;
            url?: string;
          }[];
          title?: string;
          type?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
          videoAssetIds?: string[];
        };
        extendedData?: {
          creationDate?: number;
          lastUpdateDate?: number;
          servingStatus?: "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_PREPAY_BALANCE" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATOR_CONTENT_LICENSE_EXPIRED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "UNKNOWN";
          servingStatusDetails?: string[];
        };
        landingPage?: {
          asins?: string[];
          pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
          url?: string;
        };
        name?: string;
        state: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED";
      };
      adGroupName?: string;
      campaignName?: string;
    };
    migrationId: string;
    migrationOptions: {
      adGroupId?: string;
      adId?: string;
      asins?: string[];
      errorCode?: string;
      errorMessage?: string;
      migrationType?: "IMPROVE" | "MIGRATE";
      optionType: "AUTO_COLLECTION" | "MANUAL_COLLECTION";
      rationale?: string;
      status?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED";
    }[];
  }[];
  nextToken?: string;
  totalCount?: number;
};
