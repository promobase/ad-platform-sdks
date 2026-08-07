// Auto-generated endpoint params for the Amazon Ads API v3 — do not edit

export interface UpdateSponsoredBrandsAutoCollectionAdParams {
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


export interface UpdateSponsoredBrandsManualCollectionAdParams {
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


export interface UpdateSponsoredBrandsAdParams {
  ads: {
    adId: string;
    name?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface CreateSponsoredBrandsAutoCollectionAdParams {
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


export interface CreateSponsoredBrandsBrandVideoAdParams {
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


export interface DeleteSponsoredBrandsAdParams {
  adIdFilter?: {
    include?: string[];
  };
}


export interface ListSponsoredBrandsAdsParams {
  adGroupIdFilter?: {
    include?: string[];
  };
  adIdFilter?: {
    include?: string[];
  };
  campaignIdFilter?: {
    include?: string[];
  };
  creativeVersionToReturn?: string;
  maxResults?: number;
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}


export interface CreateSponsoredBrandsManualCollectionAdParams {
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


export interface CreateSponsoredBrandsProductCollectionAdParams {
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


export interface CreateSponsoredBrandsExtendedProductCollectionAdParams {
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


export interface CreateSponsoredBrandStoreSpotlightAdParams {
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


export interface CreateSponsoredBrandsVideoAdParams {
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


export interface CreateBrandVideoCreativeParams {
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


export interface ListCreativesParams {
  adId: string;
  creativeStatusFilter?: "APPROVED_BY_MODERATION" | "PENDING_MODERATION_REVIEW" | "PENDING_TRANSLATION" | "PROPOSED" | "PUBLISHED" | "REJECTED_BY_MODERATION" | "SUBMITTED_FOR_MODERATION"[];
  creativeTypeFilter?: "AUTO_COLLECTION" | "BRAND_VIDEO" | "MANUAL_COLLECTION" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO"[];
  creativeVersionFilter?: string[];
  maxResults?: number;
  nextToken?: string;
}


export interface CreateProductCollectionCreativeParams {
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


export interface CreateExtendedProductCollectionCreativeParams {
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


export interface CreateStoreSpotlightCreativeParams {
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


export interface CreateVideoCreativeParams {
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


export interface GetSBBudgetRulesForAdvertiserParams {
  nextToken?: string;
  pageSize: number;
}


export interface CreateBudgetRulesForSBCampaignParams {
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


export interface UpdateBudgetRulesForSBCampaignParams {
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


export interface GetBudgetRuleByRuleIdForSBCampaignsParams {
  budgetRuleId: string;
}


export interface GetCampaignsAssociatedWithSBBudgetRuleParams {
  budgetRuleId: string;
  nextToken?: string;
  pageSize: number;
}


export interface ListAssociatedBudgetRulesForSBCampaignsParams {
  campaignId: number;
}


export interface CreateAssociatedBudgetRulesForSBCampaignParams {
  campaignId: number;
  budgetRuleIds?: string[];
}


export interface DeleteDisassociateAssociatedBudgetRuleForSBCampaignParams {
  campaignId: number;
  budgetRuleId: string;
}


export interface PostSbCampaignsBudgetUsageParams {
  campaignIds?: string[];
}


export interface GetBudgetRecommendationsParams {
  campaignIds: string[];
}


export interface PostSBGetBudgetRulesRecommendationParams {
  body: {
    campaignId: string;
  };
}


export interface PostSBInsightsCampaignInsightsParams {
  nextToken?: string;
  adGroups: {
    adFormat: "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    keywords?: {
      bid: number;
      keywordText: string;
      matchType: "BROAD" | "EXACT" | "PHRASE";
    }[];
  }[];
}


export interface PostSBCampaignPerformanceForecastsParams {
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


export interface GetSBTargetingGetNegativeBrandsParams {
  nextToken?: string;
}


export interface GetHeadlineRecommendationsParams {
  adFormat?: "SPONSORED_BRANDS" | "SPONSORED_BRANDS_SPOTLIGHT";
  asins?: string[];
  maxNumSuggestions?: number;
  storePages?: {
    displayName?: string;
    primaryAsin?: string;
  }[];
}


export interface GetKeywordRecommendationsParams {
  body: {
    asins: string[];
    creativeAsins?: string[];
    creativeType?: "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    goal?: "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT";
    locale?: string;
    maxNumSuggestions?: number;
  } | {
    creativeAsins?: string[];
    creativeType?: "AUTHOR_COLLECTION" | "BRAND_VIDEO" | "PRODUCT_COLLECTION" | "STORE_SPOTLIGHT" | "VIDEO";
    goal?: "BRAND_IMPRESSION_SHARE" | "PAGE_VISIT";
    locale?: string;
    maxNumSuggestions?: number;
    url: string;
  };
}


export interface PostSBOptimizationRecommendationParams {
  costControlMetric: "COST_PER_CLICK";
  landingPages: {
    asins?: string[];
    pageType?: "CUSTOM_URL" | "DETAIL_PAGE" | "PRODUCT_LIST" | "STORE";
    url?: string;
  }[];
}


export interface CreateSponsoredBrandsOptimizationRuleParams {
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


export interface UpdateSponsoredBrandsOptimizationRuleParams {
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


export interface PostAssociateSponsoredBrandsOptimizationRulesParams {
  optimizationRuleAssociations: {
    entityId: string;
    entityType: string;
    optimizationRuleId: string;
  }[];
}


export interface PostDisassociateSponsoredBrandsOptimizationRulesParams {
  optimizationRuleDisassociations: {
    entityId: string;
    entityType: string;
    optimizationRuleId: string;
  }[];
}


export interface ListSponsoredBrandsOptimizationRulesParams {
  entityFilter?: {
    entityId?: string;
    entityType?: string;
  };
  maxResults?: number;
  nextToken?: string;
  optimizationRuleIdFilter?: {
    include?: string[];
  };
}


export interface GetSBTargetingGetTargetableCategoriesParams {
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
  supplySource: "AMAZON" | "STREAMING_VIDEO";
  includeOnlyRootCategories?: boolean;
  parentCategoryRefinementId?: string;
  nextToken?: string;
}


export interface GetSBTargetingGetRefinementsForCategoryParams {
  categoryRefinementId: string;
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
  nextToken?: string;
}


export interface PostSBTargetingGetTargetableASINCountsParams {
  ageRanges?: string[];
  brands?: string[];
  category: string;
  genres?: string[];
  isPrimeShipping?: boolean;
  priceRange?: {
    max?: number;
    min?: number;
  };
  ratingRange?: {
    max?: number;
    min?: number;
  };
}


export interface CreateSponsoredBrandsAdGroupParams {
  adGroups: {
    campaignId: string;
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredBrandsAdGroupParams {
  adGroups: {
    adGroupId: string;
    name?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredBrandsAdGroupParams {
  adGroupIdFilter?: {
    include?: string[];
  };
}


export interface ListSponsoredBrandsAdGroupsParams {
  adGroupIdFilter?: {
    include?: string[];
  };
  campaignIdFilter?: {
    include?: string[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}


export interface CreateSponsoredBrandsCampaignParams {
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


export interface UpdateSponsoredBrandsCampaignParams {
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


export interface DeleteSponsoredBrandsCampaignParams {
  campaignIdFilter?: {
    include?: string[];
  };
}


export interface ListSponsoredBrandsCampaignsParams {
  campaignIdFilter?: {
    include?: string[];
  };
  goalTypeFilter?: {
    include?: string[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  portfolioIdFilter?: {
    include?: string[];
  };
  stateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
}


export interface PostStartMigrationJobParams {
  brandEntityId?: string;
  campaignIds: string[];
  enableThemeTargeting: boolean;
  isStagedMigration?: boolean;
  newCampaignState?: string;
}


export interface PostMigrationJobResultsParams {
  jobId: string;
  nextToken?: string;
}


export interface PostMigrationJobStatusParams {
  jobId: string;
}


export interface PostMigrationResultsParams {
  nextToken?: string;
}


export interface ListMigrationsParams {
  adGroupIdFilter?: {
    include?: string[];
  };
  adIdFilter?: {
    include?: string[];
  };
  adStateFilter?: {
    include?: "ARCHIVED" | "ENABLED" | "PAUSED" | "PROPOSED"[];
  };
  campaignIdFilter?: {
    include?: string[];
  };
  maxResults?: number;
  migrationStatusFilter?: {
    include?: "ACCEPTED" | "ELIGIBLE" | "MIGRATED" | "MIGRATION_FAILED"[];
  };
  nextToken?: string;
}
