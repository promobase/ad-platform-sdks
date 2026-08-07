// Auto-generated endpoint params for the Amazon Ads API v3 — do not edit

export interface CreateSnapshotParams {
  recordType: "adGroups" | "campaigns" | "negativeTargets" | "productAds" | "targets";
  stateFilter?: "archived" | "enabled" | "enabled, paused" | "enabled,archived" | "enabled,paused,archived" | "paused" | "paused,archived";
  tacticFilter?: "T00010" | "T00010,T00020" | "T00010,T00020,remarketing" | "T00010,remarketing" | "T00020" | "T00020,remarketing" | "remarketing";
}


export interface GetSnapshotByIdParams {
  snapshotId: string;
}


export interface GetDownloadSnapshotByIdParams {
  snapshotId: string;
}


export interface GetRequestResultsParams {
  requestId: string;
  startIndex?: number;
  count?: number;
}


export interface GetRequestStatusParams {
  requestId: string;
}


export interface ListRequestStatusParams {}


export interface DeleteBrandSafetyDenyListParams {}


export interface ListDomainsParams {
  startIndex?: number;
  count?: number;
}


export interface CreateBrandSafetyDenyListDomainParams {
  domains: {
    name: string;
    type: "APP" | "CREATOR" | "WEBSITE";
  }[];
}


export interface GetSDBudgetRulesForAdvertiserParams {
  nextToken?: string;
  pageSize: number;
}


export interface CreateBudgetRulesForSDCampaignParams {
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
      metricName: "ACOS" | "CTR" | "CVR" | "ROAS";
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


export interface UpdateBudgetRulesForSDCampaignParams {
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
        metricName: "ACOS" | "CTR" | "CVR" | "ROAS";
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


export interface GetBudgetRuleByRuleIdForSDCampaignsParams {
  budgetRuleId: string;
}


export interface GetCampaignsAssociatedWithSDBudgetRuleParams {
  budgetRuleId: string;
  nextToken?: string;
  pageSize: number;
}


export interface ListAssociatedBudgetRulesForSDCampaignsParams {
  campaignId: number;
}


export interface CreateAssociatedBudgetRulesForSDCampaignParams {
  campaignId: number;
  budgetRuleIds?: string[];
}


export interface DeleteDisassociateAssociatedBudgetRuleForSDCampaignParams {
  campaignId: number;
  budgetRuleId: string;
}


export interface PostSdCampaignsBudgetUsageParams {
  campaignIds?: string[];
}


export interface GetSDBudgetRecommendationsParams {
  campaignIds: string[];
}


export interface GetHeadlineRecommendationsForSDParams {
  adFormat?: "SPONSORED_DISPLAY";
  asins?: string[];
  maxNumRecommendations?: number;
}


export interface GetTargetBidRecommendationsParams {
  products?: {
    asin: string;
  }[];
  targetingClauses: {
    targetingClause: {
      expression: {
        type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
        value?: string;
      } | {
        type: "audience" | "purchases" | "views";
        value: {
          type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
          value?: string;
        }[];
      }[];
      expressionType: "auto" | "manual";
    };
  }[];
}


export interface GetTargetRecommendationsParams {
  locale?: "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";
  products: {
    asin: string;
  }[];
  tactic: "T00001" | "T00010" | "T00020" | "remarketing";
  typeFilter: "PRODUCT"[];
}
