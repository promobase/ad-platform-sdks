// Auto-generated endpoint params for the Amazon Ads API v3 — do not edit

export interface CreateSponsoredProductsAdGroupParams {
  adGroups: {
    campaignId: string;
    defaultBid: number;
    name: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsAdGroupParams {
  adGroups: {
    adGroupId: string;
    defaultBid?: number;
    name?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredProductsAdGroupParams {
  adGroupIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsAdGroupsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  campaignIdFilter?: {
    include: string[];
  };
  campaignTargetingTypeFilter?: "AUTO" | "MANUAL";
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface GetSPBudgetRulesForAdvertiserParams {
  nextToken?: string;
  pageSize: number;
}


export interface CreateBudgetRulesForSPCampaignParams {
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
      comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
      metricName: "ACOS" | "CTR" | "CVR" | "ROAS";
      threshold: number;
    };
    recurrence?: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      intraDaySchedule?: {
        endTime?: string;
        startTime?: string;
      }[];
      type?: "DAILY";
    };
    ruleType?: "PERFORMANCE" | "SCHEDULE";
  }[];
}


export interface UpdateBudgetRulesForSPCampaignParams {
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
        comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        metricName: "ACOS" | "CTR" | "CVR" | "ROAS";
        threshold: number;
      };
      recurrence?: {
        daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
        intraDaySchedule?: {
          endTime?: string;
          startTime?: string;
        }[];
        type?: "DAILY";
      };
      ruleType?: "PERFORMANCE" | "SCHEDULE";
    };
    ruleId: string;
    ruleState?: "ACTIVE" | "PAUSED";
    ruleStatus?: string;
  }[];
}


export interface GetBudgetRuleByRuleIdForSPCampaignsParams {
  budgetRuleId: string;
}


export interface GetCampaignsAssociatedWithSPBudgetRuleParams {
  budgetRuleId: string;
  nextToken?: string;
  pageSize: number;
}


export interface PostBulkBudgetRulesAssociationForSPParams {
  budgetRulesAssociations?: {
    budgetRuleId: string;
    campaignId: string;
  }[];
}


export interface PostBulkBudgetRulesDisAssociationForSPParams {
  budgetRulesDisAssociations?: {
    budgetRuleId: string;
    campaignId: string;
  }[];
}


export interface ListAssociatedBudgetRulesForSPCampaignsParams {
  campaignId: number;
}


export interface CreateAssociatedBudgetRulesForSPCampaignParams {
  campaignId: number;
  budgetRuleIds?: string[];
}


export interface DeleteDisassociateAssociatedBudgetRuleForSPCampaignParams {
  campaignId: number;
  budgetRuleId: string;
}


export interface GetCampaignRecommendationsParams {
  campaignIds?: string[];
  nextToken?: string;
  maxResults?: string;
}


export interface PostFetchCampaignRecommendationsParams {
  campaigns: {
    campaignId: string;
    recommendationType: "BIDDING_STRATEGY" | "BUDGET_STRATEGY" | "KEYWORD" | "KEYWORD_GROUP" | "PLACEMENT_BIDDING" | "SHOPPER_COHORT";
  }[];
  maxResults?: number;
  nextToken?: string;
}


export interface CreateSponsoredProductsCampaignNegativeKeywordParams {
  campaignNegativeKeywords: {
    campaignId: string;
    keywordText: string;
    matchType: "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE";
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsCampaignNegativeKeywordParams {
  campaignNegativeKeywords: {
    keywordId: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredProductsCampaignNegativeKeywordParams {
  campaignNegativeKeywordIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsCampaignNegativeKeywordsParams {
  campaignIdFilter?: {
    include: string[];
  };
  campaignNegativeKeywordIdFilter?: {
    include: string[];
  };
  campaignNegativeKeywordTextFilter?: {
    include?: string[];
    queryTermMatchType: "BROAD_MATCH" | "EXACT_MATCH";
  };
  includeExtendedDataFields?: boolean;
  matchTypeFilter?: "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE" | "OTHER"[];
  maxResults?: number;
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface CreateSponsoredProductsCampaignNegativeTargetingClauseParams {
  campaignNegativeTargetingClauses: {
    campaignId: string;
    expression: {
      type: "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS";
      value?: string;
    }[];
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsCampaignNegativeTargetingClauseParams {
  campaignNegativeTargetingClauses: {
    expression?: {
      type: "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS";
      value?: string;
    }[];
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
    targetId: string;
  }[];
}


export interface DeleteSponsoredProductsCampaignNegativeTargetingClauseParams {
  campaignNegativeTargetIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsCampaignNegativeTargetingClausesParams {
  asinFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  campaignIdFilter?: {
    include: string[];
  };
  campaignNegativeTargetIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface CreateSponsoredProductsCampaignParams {
  campaigns: {
    autoManageCampaign?: boolean;
    budget: {
      budget: number;
      budgetType: "DAILY";
    };
    dynamicBidding?: {
      placementBidding?: {
        percentage?: number;
        placement?: "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP" | "SITE_AMAZON_BUSINESS";
      }[];
      shopperCohortBidding?: {
        audienceSegments?: {
          audienceId: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType: "AUDIENCE_SEGMENT";
      }[];
      strategy?: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
    };
    endDate?: string;
    name: string;
    offAmazonSettings?: {
      offAmazonBudgetControlStrategy?: "MAXIMIZE_REACH" | "MINIMIZE_SPEND";
    };
    portfolioId?: string;
    siteRestrictions?: "AMAZON_BUSINESS" | "AMAZON_HAUL"[];
    startDate?: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetingType: "AUTO" | "MANUAL";
  }[];
}


export interface UpdateSponsoredProductsCampaignParams {
  campaigns: {
    budget?: {
      budget: number;
      budgetType: "DAILY";
    };
    campaignId: string;
    dynamicBidding?: {
      placementBidding?: {
        percentage?: number;
        placement?: "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP" | "SITE_AMAZON_BUSINESS";
      }[];
      shopperCohortBidding?: {
        audienceSegments?: {
          audienceId: string;
          audienceSegmentType?: "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC";
        }[];
        percentage?: number;
        shopperCohortType: "AUDIENCE_SEGMENT";
      }[];
      strategy?: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
    };
    endDate?: string;
    name?: string;
    offAmazonSettings?: {
      offAmazonBudgetControlStrategy?: "MAXIMIZE_REACH" | "MINIMIZE_SPEND";
    };
    portfolioId?: string;
    siteRestrictions?: "AMAZON_BUSINESS" | "AMAZON_HAUL"[];
    startDate?: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
    tags?: {

    };
    targetingType?: "AUTO" | "MANUAL";
  }[];
}


export interface DeleteSponsoredProductsCampaignParams {
  campaignIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsCampaignsParams {
  campaignIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  marketplaceBudgetAllocationFilter?: {
    include: "AUTO" | "MANUAL"[];
  };
  maxResults?: number;
  nameFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  portfolioIdFilter?: {
    include: string[];
  };
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface PostAssociateOptimizationRulesToCampaignParams {
  campaignId: string;
  optimizationRuleIds: string[];
}


export interface CreateOptimizationRuleParams {
  optimizationRules: {
    action: {
      actionDetails: {
        actionOperator: "INCREMENT";
        actionUnit: "PERCENT";
        value: number;
      };
      actionType: "ADOPT";
    };
    conditions?: {
      attributeName?: "ROAS";
      criteria?: {
        maxValue: number;
        minValue: number;
      } | {
        comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        value: number;
      };
    }[];
    recurrence: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      duration: {
        endTime?: string;
        eventId?: string;
        eventName?: string;
        startTime?: string;
      };
      timesOfDay?: {
        endTime: string;
        startTime: string;
      }[];
      type: "DAILY" | "WEEKLY";
    };
    ruleCategory: "BID";
    ruleName?: string;
    ruleSubCategory: "SCHEDULE";
    status?: "ENABLED" | "ENDED" | "PAUSED" | "SCHEDULED";
  }[];
}


export interface UpdateOptimizationRuleParams {
  optimizationRules: {
    action?: {
      actionDetails: {
        actionOperator: "INCREMENT";
        actionUnit: "PERCENT";
        value: number;
      };
      actionType: "ADOPT";
    };
    conditions?: {
      attributeName?: "ROAS";
      criteria?: {
        maxValue: number;
        minValue: number;
      } | {
        comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
        value: number;
      };
    }[];
    recurrence?: {
      daysOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"[];
      duration: {
        endTime?: string;
        eventId?: string;
        eventName?: string;
        startTime?: string;
      };
      timesOfDay?: {
        endTime: string;
        startTime: string;
      }[];
      type: "DAILY" | "WEEKLY";
    };
    ruleCategory?: "BID";
    ruleName?: string;
    ruleSubCategory?: "SCHEDULE";
    status?: "ENABLED" | "ENDED" | "PAUSED" | "SCHEDULED";
    optimizationRuleId?: string;
  }[];
}


export interface PostSearchOptimizationRulesParams {
  campaignFilter?: {
    campaignId?: {
      filterType?: "BROAD_MATCH" | "EXACT_MATCH";
      values?: string[];
    };
  };
  nextToken?: string;
  optimizationRuleFilter?: {
    optimizationRuleId?: {
      filterType?: "BROAD_MATCH" | "EXACT_MATCH";
      values?: string[];
    };
    ruleCategory?: {
      filterType?: "BROAD_MATCH" | "EXACT_MATCH";
      values?: string[];
    };
    ruleSubCategory?: {
      filterType?: "BROAD_MATCH" | "EXACT_MATCH";
      values?: string[];
    };
  };
  pageSize?: number;
}


export interface PostSpCampaignsBudgetUsageParams {
  campaignIds?: string[];
}


export interface GetBudgetRecommendationsParams {
  campaignIds: string[];
}


export interface PostSPGetBudgetRulesRecommendationParams {
  body: {
    campaignId: string;
  };
}


export interface PostSPGetAllRuleEventsParams {}


export interface GetBudgetRecommendationParams {
  adGroups: {
    adGroupId?: string;
    asins: string[];
    targetingExpressions: {
      type: "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "SUBSTITUTES";
      value?: string;
    }[];
  }[];
  bidding: {
    adjustments?: {
      placementAdjustment?: {
        percentage?: number;
        predicate?: "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP";
      };
    }[];
    strategy: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
  };
  endDate?: string;
  startDate?: string;
  targetingType: "auto" | "manual";
}


export interface GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Params {
  body: {
    adGroupId: string;
    campaignId: string;
    countryCodes?: string[];
    includeAnalysis?: boolean;
    recommendationType: "BIDS_FOR_EXISTING_AD_GROUP";
    targetingExpressions: {
      countryValues?: string;
      type: "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_GROUP" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "PAT_ASIN" | "PAT_CATEGORY" | "PAT_CATEGORY_REFINEMENT" | "SUBSTITUTES";
    }[];
  } | {
    bidding: {
      adjustments?: {
        percentage?: number;
        predicate?: "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP";
      }[];
      strategy: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
    };
    countryCodes: string[];
    includeAnalysis?: boolean;
    products?: {

    }[];
    recommendationType: "BIDS_FOR_NEW_AD_GROUP";
    targetingExpressions: {
      countryValues?: string;
      type: "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_GROUP" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "PAT_ASIN" | "PAT_CATEGORY" | "PAT_CATEGORY_REFINEMENT" | "SUBSTITUTES";
    }[];
  };
}


export interface GetGlobalRankedKeywordRecommendationParams {
  body: {
    products?: {

    }[];
    targets?: {
      countryKeywords?: {

      };
      matchType?: "BROAD" | "EXACT" | "PHRASE";
    }[];
    biddingStrategy?: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
    bidsEnabled?: boolean;
    recommendationType: "KEYWORDS_FOR_ASINS";
  } | {
    targets?: {
      countryKeywords?: {

      };
      matchType?: "BROAD" | "EXACT" | "PHRASE";
    }[];
    adGroupId: string;
    bidsEnabled?: boolean;
    campaignId: string;
    recommendationType: "KEYWORDS_FOR_ADGROUP";
  };
}


export interface GetRankedKeywordRecommendationParams {
  body: {
    adGroupId: string;
    campaignId: string;
    recommendationType: "KEYWORDS_FOR_ADGROUP";
    targets?: {
      bid?: number;
      keyword?: string;
      matchType?: "BROAD" | "EXACT" | "PHRASE";
      userSelectedKeyword?: boolean;
    }[];
  } | {
    asins: string[];
    recommendationType: "KEYWORDS_FOR_ASINS";
    targets?: {
      bid?: number;
      keyword?: string;
      matchType?: "BROAD" | "EXACT" | "PHRASE";
      userSelectedKeyword?: boolean;
    }[];
  };
}


export interface CreateSponsoredProductsKeywordParams {
  keywords: {
    adGroupId: string;
    bid?: number;
    campaignId: string;
    keywordText: string;
    matchType: "BROAD" | "EXACT" | "PHRASE";
    nativeLanguageKeyword?: string;
    nativeLanguageLocale?: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsKeywordParams {
  keywords: {
    bid?: number;
    keywordId: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredProductsKeywordParams {
  keywordIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsKeywordsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  campaignIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  keywordIdFilter?: {
    include: string[];
  };
  keywordTextFilter?: {
    include?: string[];
    queryTermMatchType: "BROAD_MATCH" | "EXACT_MATCH";
  };
  locale?: string;
  matchTypeFilter?: "BROAD" | "EXACT" | "OTHER" | "PHRASE"[];
  maxResults?: number;
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface CreateSponsoredProductsNegativeKeywordParams {
  negativeKeywords: {
    adGroupId: string;
    campaignId: string;
    keywordText: string;
    matchType: "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE";
    nativeLanguageKeyword?: string;
    nativeLanguageLocale?: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsNegativeKeywordParams {
  negativeKeywords: {
    keywordId: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredProductsNegativeKeywordParams {
  negativeKeywordIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsNegativeKeywordsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  campaignIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  locale?: string;
  matchTypeFilter?: "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE" | "OTHER"[];
  maxResults?: number;
  negativeKeywordIdFilter?: {
    include: string[];
  };
  negativeKeywordTextFilter?: {
    include?: string[];
    queryTermMatchType: "BROAD_MATCH" | "EXACT_MATCH";
  };
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface CreateSponsoredProductsNegativeTargetingClauseParams {
  negativeTargetingClauses: {
    adGroupId: string;
    campaignId: string;
    expression: {
      type: "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS";
      value?: string;
    }[];
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsNegativeTargetingClauseParams {
  negativeTargetingClauses: {
    expression?: {
      type: "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS";
      value?: string;
    }[];
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
    targetId: string;
  }[];
}


export interface DeleteSponsoredProductsNegativeTargetingClauseParams {
  negativeTargetIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsNegativeTargetingClausesParams {
  adGroupIdFilter?: {
    include: string[];
  };
  asinFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  campaignIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  negativeTargetIdFilter?: {
    include: string[];
  };
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface ListNegativeBrandsParams {}


export interface PostSearchBrandsParams {
  keyword: string;
}


export interface GetTargetableCategoriesParams {
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
}


export interface GetCategoryRecommendationsForASINsParams {
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
  asins?: string[];
  includeAncestor?: boolean;
}


export interface GetRefinementsForCategoryParams {
  categoryId: string;
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
}


export interface GetTargetableASINCountsParams {
  ageRanges?: {
    id?: string;
    name?: string;
  }[];
  brands?: {
    id?: string;
    name?: string;
  }[];
  category: string;
  genres?: {
    id?: string;
    name?: string;
  }[];
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


export interface CreateSponsoredProductsProductAdParams {
  productAds: {
    adGroupId: string;
    asin?: string;
    campaignId: string;
    customText?: string;
    globalStoreSetting?: {
      catalogSourceCountryCode?: string;
    };
    sku?: string;
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsProductAdParams {
  productAds: {
    adId: string;
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface DeleteSponsoredProductsProductAdParams {
  adIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsProductAdsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  adIdFilter?: {
    include: string[];
  };
  campaignIdFilter?: {
    include: string[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
}


export interface CreateOptimizationRuleParams {
  campaignIds: string[];
  recurrence: "DAILY";
  ruleAction: "ADOPT";
  ruleCondition?: {
    comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
    metricName: "AVERAGE_BID" | "ROAS";
    threshold: number;
  }[];
  ruleName?: string;
  ruleType: "BID" | "KEYWORD" | "PRODUCT";
}


export interface UpdateOptimizationRuleParams {
  campaignIds: string[];
  campaignOptimizationId: string;
  recurrence: "DAILY";
  ruleAction: "ADOPT";
  ruleCondition?: {
    comparisonOperator: "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";
    metricName: "AVERAGE_BID" | "ROAS";
    threshold: number;
  }[];
  ruleName?: string;
  ruleType: "BID" | "KEYWORD" | "PRODUCT";
}


export interface DeleteCampaignOptimizationRuleParams {
  campaignOptimizationId: string;
}


export interface GetCampaignOptimizationRuleParams {
  campaignOptimizationId: string;
}


export interface GetOptimizationRuleEligibilityParams {
  campaignIds: string[];
  requirePerformanceMetrics?: boolean;
}


export interface GetRuleNotificationParams {
  campaignIds: string[];
}


export interface GetKeywordGroupRecommendationsParams {
  asins: string[];
  countryCode?: string;
  nextToken?: string;
}


export interface CreateTargetPromotionGroupParams {
  adGroupId: string;
  adIds?: string[];
  existingCampaignDetails?: {
    keywordCampaignAdGroupIds?: string[];
    productCampaignAdGroupIds?: string[];
  };
  newCampaignDetails?: {
    budget: {
      budget: number;
      budgetType: string;
    };
    defaultBid: number;
    dynamicBidding?: {
      placementBidding?: {
        percentage: number;
        placement: string;
      }[];
      strategy: string;
    };
    endDate?: string;
    namePrefix: string;
    startDate?: string;
    tags?: {

    };
  };
}


export interface ListTargetPromotionGroupsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  maxResults?: number;
  nextToken?: string;
  targetPromotionGroupIdFilter?: {
    include: string[];
  };
}


export interface GetTargetPromotionGroupsRecommendationsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  adIdFilter?: {
    include: string[];
  };
  campaignIdFilter?: {
    include: string[];
  };
  maxResults?: number;
  nextToken?: string;
}


export interface CreateTargetPromotionGroupTargetParams {
  targetPromotionGroupId: string;
  targets?: {
    bid?: number;
    expressionType: string;
    target: string;
  }[];
}


export interface ListTargetPromotionGroupTargetsParams {
  adGroupIdFilter?: {
    include: string[];
  };
  maxResults?: number;
  nextToken?: string;
  targetPromotionGroupIdFilter?: {
    include: string[];
  };
}


export interface CreateSponsoredProductsTargetingClauseParams {
  targetingClauses: {
    adGroupId: string;
    bid?: number;
    campaignId: string;
    expression: {
      type: "ASIN_AGE_RANGE_SAME_AS" | "ASIN_BRAND_SAME_AS" | "ASIN_CATEGORY_SAME_AS" | "ASIN_EXPANDED_FROM" | "ASIN_GENRE_SAME_AS" | "ASIN_IS_PRIME_SHIPPING_ELIGIBLE" | "ASIN_PRICE_BETWEEN" | "ASIN_PRICE_GREATER_THAN" | "ASIN_PRICE_LESS_THAN" | "ASIN_REVIEW_RATING_BETWEEN" | "ASIN_REVIEW_RATING_GREATER_THAN" | "ASIN_REVIEW_RATING_LESS_THAN" | "ASIN_SAME_AS" | "KEYWORD_GROUP_SAME_AS";
      value?: string;
    }[];
    expressionType: "MANUAL";
    state: "ENABLED" | "PAUSED" | "PROPOSED";
  }[];
}


export interface UpdateSponsoredProductsTargetingClauseParams {
  targetingClauses: {
    bid?: number;
    expression?: {
      type: "ASIN_ACCESSORY_RELATED" | "ASIN_AGE_RANGE_SAME_AS" | "ASIN_BRAND_SAME_AS" | "ASIN_CATEGORY_SAME_AS" | "ASIN_EXPANDED_FROM" | "ASIN_GENRE_SAME_AS" | "ASIN_IS_PRIME_SHIPPING_ELIGIBLE" | "ASIN_PRICE_BETWEEN" | "ASIN_PRICE_GREATER_THAN" | "ASIN_PRICE_LESS_THAN" | "ASIN_REVIEW_RATING_BETWEEN" | "ASIN_REVIEW_RATING_GREATER_THAN" | "ASIN_REVIEW_RATING_LESS_THAN" | "ASIN_SAME_AS" | "ASIN_SUBSTITUTE_RELATED" | "KEYWORD_GROUP_SAME_AS" | "QUERY_BROAD_REL_MATCHES" | "QUERY_HIGH_REL_MATCHES";
      value?: string;
    }[];
    expressionType?: "AUTO" | "MANUAL";
    state?: "ENABLED" | "PAUSED" | "PROPOSED";
    targetId: string;
  }[];
}


export interface DeleteSponsoredProductsTargetingClauseParams {
  targetIdFilter: {
    include: string[];
  };
}


export interface ListSponsoredProductsTargetingClausesParams {
  adGroupIdFilter?: {
    include: string[];
  };
  asinFilter?: {
    include?: string[];
    queryTermMatchType?: "BROAD_MATCH" | "EXACT_MATCH";
  };
  campaignIdFilter?: {
    include: string[];
  };
  expressionTypeFilter?: {
    include: "AUTO" | "MANUAL" | "OTHER"[];
  };
  includeExtendedDataFields?: boolean;
  maxResults?: number;
  nextToken?: string;
  stateFilter?: {
    include: "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED"[];
  };
  targetIdFilter?: {
    include: string[];
  };
}


export interface GetThemeBasedBidRecommendationForAdGroupV1Params {
  body: {
    adGroupId: string;
    campaignId: string;
    recommendationType: "BIDS_FOR_EXISTING_AD_GROUP";
    targetingExpressions: {
      type: "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "SUBSTITUTES";
      value?: string;
    }[];
  } | {
    asins: string[];
    bidding: {
      adjustments?: {
        percentage?: number;
        predicate?: "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP";
      }[];
      strategy: "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED";
    };
    recommendationType: "BIDS_FOR_NEW_AD_GROUP";
    targetingExpressions: {
      type: "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "SUBSTITUTES";
      value?: string;
    }[];
  };
}


export interface GetProductRecommendationsParams {
  adAsins: string[];
  count?: number;
  cursor?: string;
  locale?: string;
}
