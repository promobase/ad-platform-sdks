// Auto-generated types for the Amazon Ads API v3 — do not edit

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

export type BudgetChangeType = "PERCENT";

export interface budgetIncreaseBy {

  /** The value by which to update the budget of the budget rule. */
  type: "PERCENT";

  /** The budget value. */
  value: number;
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

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";

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

export interface CreateBudgetRulesResponse {

  responses?: {
    associatedCampaignIds?: string[];
    code?: string;
    details?: string;
    ruleId?: string;
  }[];
}

export interface CreateSDBudgetRulesRequest {

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

export interface DateRangeTypeRuleDuration {

  /** The end date of the budget rule in YYYYMMDD format. The end date is inclusive. Required to be equal or greater than `startDate`. */
  endDate?: string;

  /** The start date of the budget rule in YYYYMMDD format. The start date is inclusive. Required to be greater than or equal to current date. */
  startDate: string;
}

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";

export type DisassociateAssociatedBudgetRuleResponse = Record<string, unknown>;

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

export interface GetSDBudgetRuleResponse {

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
  };
}

export interface GetSDBudgetRulesForAdvertiserResponse {

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

  /** To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface LocationExpression {

  /** The location category. */
  type?: "location";

  /** The location identifier. Currently, this can correspond to either a 'city', 'state', 'dma', 'postal code', or 'country'. Its value is discoverable using the GET /locations API. */
  value?: string;
}

export type LocationPredicate = "location";

export interface PerformanceMeasureCondition {

  /** The comparison operator. */
  comparisonOperator: "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO";

  /** The advertising performance metric. */
  metricName: "ACOS" | "CTR" | "CVR" | "ROAS";

  /** The performance threshold value. */
  threshold: number;
}

export type PerformanceMetric = "ACOS" | "CTR" | "CVR" | "ROAS";

export interface RecommendedHeadline {

  /** String that contains Recommended headline. */
  headline?: string;

  /** Unique Id of Recommended headline. */
  headlineId?: string;
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

export interface SDAdvertisedProduct {

  /** Amazon Standard Identification Number */
  asin?: string;

  /** The type of the landingPage used. This field is not supported when using asin field. */
  landingPageType?: "OFF_AMAZON_LINK";

  /** The URL where customers will land after clicking on its link. Must be provided if landingPageType field is set.
This field is not supported when using asin field.
||Specifications|
|------------------|------------------|
|LandingPageType| Description|
|OFF_AMAZON_LINK| The url should be in the format of https://www.****.com.| */
  landingPageURL?: string;
}

export interface SDAPIError {

  /** The HTTP status code of the response. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export type SDASIN = string;

export type SDAudience = string;

export type SDAudienceCategory = "In-market" | "Interest" | "Life event" | "Lifestyle";

export interface SDAudienceCategoryRecommendations {

  /** List of recommended standard Amazon audience targets */
  audiences?: {
    audience?: string;
    name?: string;
    rank?: number;
  }[];

  /** An audience category determines the goal of the audience such as In-market, Interest and Lifestyle */
  category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
}

export interface SDAudienceRecommendation {

  /** The audience identifier */
  audience?: string;

  /** The Amazon audience name */
  name?: string;

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;
}

export interface SDAudienceRecommendations {

  /** List of recommended audience targets, broken down by audience category */
  audiences?: {
    audiences?: {
      audience?: string;
      name?: string;
      rank?: number;
    }[];
    category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
  }[];
}

export type SDBidOptimizationV32 = "clicks" | "conversions" | "reach";

export interface SDBidRecommendationV31 {

  /** The lowest recommended bid to use to win an ad placement for this target. */
  rangeLower: number;

  /** The highest recommended bid to use to win an ad placement for this target. */
  rangeUpper: number;

  /** The recommended bid to use to win an ad placement for this target. */
  recommended: number;
}

export interface SDBrandSafetyDenyListDomain {

  /** The website or app identifier. This can be in the form of full domain (eg. 'example.com' or 'example.net'), or mobile app identifier (eg. 'com.example.app' for Android apps or '1234567890' for iOS apps)
 */
  name: string;

  /** The type. */
  type: "APP" | "CREATOR" | "WEBSITE";
}

export type SDBrandSafetyDenyListDomainState = "ARCHIVED" | "ENABLED";

export type SDBrandSafetyDenyListDomainType = "APP" | "CREATOR" | "WEBSITE";

export type SDBrandSafetyDenyListDomainUpdateResultStatus = "FAILURE" | "SUCCESS";

export interface SDBrandSafetyDenyListProcessedDomain {

  /** The date time the domain was created at. Format: YYYY-MM-ddT:HH:mm:ssZ */
  createdAt?: string;

  /** The identifier of the Brand Safety List domain. */
  domainId?: number;

  /** The date time the domain was last modified. Format: YYYY-MM-ddT:HH:mm:ssZ */
  lastModified?: string;

  /** The website or app identifier. This can be in the form of full domain (eg. 'example.com' or 'example.net'), or mobile app identifier (eg. 'com.example.app' for Android apps or '1234567890' for iOS apps)
 */
  name?: string;

  /** The state of the domain. */
  state?: "ARCHIVED" | "ENABLED";

  /** The type. */
  type?: "APP" | "CREATOR" | "WEBSITE";
}

export interface SDBrandSafetyGetResponse {

  /** List of Brand Safety Deny List Domains */
  domains?: {
    createdAt?: string;
    domainId?: number;
    lastModified?: string;
    name?: string;
    state?: "ARCHIVED" | "ENABLED";
    type?: "APP" | "CREATOR" | "WEBSITE";
  }[];

  /** Response pagination info for Brand Safety Deny List GET requests */
  pagination?: {
    limit?: number;
    offset?: number;
    total?: number;
  };
}

export interface SDBrandSafetyGetResponsePagination {

  /** The maximum number of deny list domains returned from GET request. */
  limit?: number;

  /** The number of deny list domains skipped. */
  offset?: number;

  /** The total number of deny list domains created by the advertiser. */
  total?: number;
}

export interface SDBrandSafetyListRequestStatusResponse {

  /** List of all requests' status. */
  requestStatusList?: {
    requestId?: string;
    status?: "COMPLETED" | "FAILURE" | "IN_PROGRESS";
    statusDetails?: string;
    timestamp?: string;
  }[];
}

export interface SDBrandSafetyPostRequest {

  domains: {
    name: string;
    type: "APP" | "CREATOR" | "WEBSITE";
  }[];
}

export interface SDBrandSafetyRequestResult {

  /** A human-readable description of the response. */
  details?: string;

  /** The identifier of the Brand Safety Deny List Domain. */
  domainId?: number;

  /** The website or app identifier. */
  name?: string;

  /** The state of the domain. */
  status?: "FAILURE" | "SUCCESS";
}

export interface SDBrandSafetyRequestResultsResponse {

  /** A list of results for the given requestId */
  results?: {
    details?: string;
    domainId?: number;
    name?: string;
    status?: "FAILURE" | "SUCCESS";
  }[];
}

export interface SDBrandSafetyRequestStatus {

  /** Request ID */
  requestId?: string;

  /** The status of the request */
  status?: "COMPLETED" | "FAILURE" | "IN_PROGRESS";

  /** Details related to the request status */
  statusDetails?: string;

  /** Request timestamp */
  timestamp?: string;
}

export interface SDBrandSafetyRequestStatusResponse {

  requestStatus?: {
    requestId?: string;
    status?: "COMPLETED" | "FAILURE" | "IN_PROGRESS";
    statusDetails?: string;
    timestamp?: string;
  };
}

export interface SDBrandSafetyUpdateResponse {

  /** The identifier of the request */
  requestId?: string;
}

export interface SDBudgetRecommendation {

  /** Campaign id. */
  campaignId: string;

  /** Correlate the recommendation to the campaign index in the request. Zero-based. */
  index: number;

  sevenDaysMissedOpportunities: {
    endDate?: string;
    estimatedMissedClicksLower?: number;
    estimatedMissedClicksUpper?: number;
    estimatedMissedImpressionsLower?: number;
    estimatedMissedImpressionsUpper?: number;
    estimatedMissedSalesLower?: number;
    estimatedMissedSalesUpper?: number;
    estimatedMissedViewableImpressionsLower?: number;
    estimatedMissedViewableImpressionsUpper?: number;
    percentTimeInBudget?: number;
    startDate?: string;
  };

  /** Recommended budget for the campaign. This will be in local currency. */
  suggestedBudget: number;
}

export interface SDBudgetRecommendationError {

  /** Campaign id. */
  campaignId: string;

  /** The HTTP status code of the response. */
  code: string;

  /** A human-readable description of the response. */
  details: string;

  /** Correlate the recommendation to the campaign index in the request. Zero-based. */
  index: number;
}

export interface SDBudgetRecommendationsRequest {

  /** A list of campaign ids for which to get budget recommendations and missed opportunities. */
  campaignIds: string[];
}

export interface SDBudgetRecommendationsResponse {

  /** List of errors that occurred when generating budget recommendation. */
  budgetRecommendationsErrorResults: {
    campaignId: string;
    code: string;
    details: string;
    index: number;
  }[];

  /** List of successful budget recommendation for campaigns. */
  budgetRecommendationsSuccessResults: {
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
      estimatedMissedViewableImpressionsLower?: number;
      estimatedMissedViewableImpressionsUpper?: number;
      percentTimeInBudget?: number;
      startDate?: string;
    };
    suggestedBudget: number;
  }[];
}

export interface SDBudgetRule {

  /** Epoch time of budget rule creation. Read-only. */
  createdDate?: number;

  /** Epoch time of budget rule update. Read-only. */
  lastUpdatedDate?: number;

  /** Object representing details of a budget rule for SD campaign */
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

  /** The budget rule identifier. */
  ruleId: string;

  /** The budget rule state. */
  ruleState?: "ACTIVE" | "PAUSED";

  /** The budget rule status. Read-only. */
  ruleStatus?: string;
}

export interface SDBudgetRuleDetails {

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

  /** The type of budget rule. SCHEDULE: A budget rule based on a start and end date. PERFORMANCE: A budget rule based on advertising performance criteria. */
  ruleType?: "PERFORMANCE" | "SCHEDULE";
}

export type SDCategory = number;

export interface SDCategoryRecommendation {

  /** The category identifier */
  category?: number;

  /** The category name */
  name?: string;

  /** The path of the category within the category catalogue */
  path?: string[];

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;

  /** The range of ASINs available within the category catalogue */
  targetableAsinCountRange?: {
    rangeLower?: number;
    rangeUpper?: number;
  };
}

export interface SDCategoryRecommendations {

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
  }[];
}

export interface SDCategoryRecommendationsV33 {

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
    translatedName?: string;
    translatedPath?: string[];
  }[];
}

export interface SDCategoryRecommendationV33 {

  /** The category identifier */
  category?: number;

  /** The category name */
  name?: string;

  /** The path of the category within the category catalogue */
  path?: string[];

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;

  /** The range of ASINs available within the category catalogue */
  targetableAsinCountRange?: {
    rangeLower?: number;
    rangeUpper?: number;
  };

  /** The translated category name by requested locale, field will not be provided if locale is not provided or campaign localization service is down */
  translatedName?: string;

  /** The translated path of the category within the category catalogue by requested locale, field will not be provided if locale is not provided or campaign localization is down */
  translatedPath?: string[];
}

export type SDContentCategory = string;

export interface SDContentCategoryRecommendations {

  /** The content category value */
  contentCategory?: string;

  /** The content category name */
  name?: string;

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;
}

export interface SDContentTargetingPredicateV31 {

  type: "contentCategorySameAs";

  /** The value to be targeted. */
  value: string;
}

export type SDCostTypeV31 = "cpc" | "vcpm";

export type SDCreativeType = "IMAGE" | "VIDEO";

export interface SdDefaultError {

  /** The HTTP status code of the response. */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface SDErrorResponse {

  /** The HTTP status code of the response */
  code?: string;

  /** A human-readable description of the response. */
  details?: string;
}

export interface SDGetAssociatedCampaignsResponse {

  /** A list of campaigns that are associated to this budget rule. */
  associatedCampaigns?: {
    campaignId: string;
    campaignName: string;
    ruleStatus: string;
  }[];

  /** To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results. */
  nextToken?: string;
}

export interface SDGoalProduct {

  /** Amazon Standard Identification Number */
  asin: string;
}

export interface SDHeadlineRecommendationAccessDeniedException {

  /** AccessDeniedErrorCode. */
  code?: "ACCESS_DENIED";

  /** A human-readable description of the error response. */
  details?: string;
}

export interface SDHeadlineRecommendationIdentifierNotfoundException {

  /** IdentiferNotFoundErrorCode. */
  code?: "IDENTIFIER_NOT_FOUND";

  /** A human-readable description of the error response. */
  details?: string;
}

export interface SDHeadlineRecommendationInternalServerException {

  /** InternalErrorCode. */
  code?: "INTERNAL_ERROR";

  /** A human-readable description of the error response. */
  details?: string;
}

export interface SDHeadlineRecommendationMarsThrottlingException {

  /** ThrottledErrorCode. */
  code?: "THROTTLED";

  /** A human-readable description of the error response. */
  details?: string;
}

export interface SDHeadlineRecommendationNotAcceptableException {

  /** NotAcceptableErrorCode. */
  code?: "NOT_ACCEPTABLE";

  /** A human-readable description of the error response. */
  details?: string;
}

export interface SDHeadlineRecommendationRequest {

  adFormat?: "SPONSORED_DISPLAY";

  /** An array of ASINs associated with the creative. */
  asins?: string[];

  /** Maximum number of recommendations that API should return. Response will [0, maxNumRecommendations] recommendations (recommendations are not guaranteed as there can be instances where the ML model can not generate policy compliant headlines for the given set of asins). */
  maxNumRecommendations?: number;
}

export interface SDHeadlineRecommendationResponse {

  /** Recommendations are sorted, i.e., more suitable headline has lesser array index value. */
  recommendations?: {
    headline?: string;
    headlineId?: string;
  }[];

  /** An identifier for request made which is generated by server. */
  requestId?: string;
}

export interface SDHeadlineRecommendationSchemaValidationException {

  /** InvalidArgumentErrorCode. */
  code?: "INVALID_ARGUMENT";

  /** A human-readable description of the error response. */
  details?: string;
}

export type SDLandingPageType = "OFF_AMAZON_LINK";

export type SDLandingPageURL = string;

export interface SDListAssociatedBudgetRulesResponse {

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

export type SDLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN";

export interface SDProductRecommendation {

  /** Amazon Standard Identification Number */
  asin?: string;

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;
}

export interface SDProductRecommendationsV31 {

  /** List of recommended product targets */
  products?: {
    asin?: string;
    rank?: number;
  }[];
}

export interface SDProductRecommendationsV32 {

  /** List of recommended product targets */
  products?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];
}

export interface SDProductRecommendationV32 {

  /** The top advertised products this recommendation is made for. */
  advertisedAsins?: string[];

  /** Amazon Standard Identification Number */
  asin?: string;

  /** A rank to signify which recommendations are weighed more heavily, with a lower rank signifying a stronger recommendation */
  rank?: number;
}

export interface SDProductTargetingRecommendationsSuccess {

  /** HTTP status code 200 indicating a successful response for product recommendations. */
  code?: string;

  /** The theme name specified in the request. */
  name?: string;

  /** A list of recommended products. */
  recommendations?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];
}

export interface SDProductTargetingRecommendationsSuccessV34 {

  /** HTTP status code 200 indicating a successful response for product recommendations. */
  code?: string;

  /** A list of expressions defining the product targeting theme. The list will define an AND operator on different expressions.
For example, asinPriceGreaterThan and asinReviewRatingLessThan can be used to request product recommendations
which are both with greater price and less review rating compared to the goal products.
Note: currently the service only support one item in the array. */
  expression?: {
    type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
  }[];

  /** The theme name specified in the request. */
  name?: string;

  /** A list of recommended products. */
  recommendations?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];
}

export interface SDProductTargetingTheme {

  /** A list of expressions defining the product targeting theme. The list will define an AND operator on different expressions.
For example, asinPriceGreaterThan and asinReviewRatingLessThan can be used to request product recommendations
which are both with greater price and less review rating compared to the goal products.
Note: currently the service only support one item in the array. */
  expression: {
    type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
  }[];

  /** This is the meaningful theme name which will be used as a unique identifier across various themes in the same request.
This identifier will also be used to map the recommendations back to the theme in the response body.
Note: the value for this field cannot be "default" as that's a reserved keyword in the system. */
  name: string;
}

export interface SDProductTargetingThemeExpression {

  /** The product targeting grammar used to define the targeting theme. Note asinAsBestSeller is currently not supported. */
  type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
}

export type SDProductThemeRecommendations = {
  code?: string;
  name?: string;
  recommendations?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];
} | {
  code?: string;
  errorMessage?: string;
  name?: string;
}[];

export type SDProductThemeRecommendationsV34 = {
  code?: string;
  expression?: {
    type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
  }[];
  name?: string;
  recommendations?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];
} | {
  code?: string;
  errorMessage?: string;
  expression?: {
    type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
  }[];
  name?: string;
}[];

export type SDRecommendationType = "PRODUCT";

export type SDRecommendationTypeV31 = "CATEGORY" | "PRODUCT";

export type SDRecommendationTypeV32 = "AUDIENCE" | "CATEGORY" | "PRODUCT";

export type SDRecommendationTypeV33 = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT";

export type SDRuleType = "PERFORMANCE" | "SCHEDULE";

export interface SDSevenDaysMissedOpportunities {

  /** End date of the missed opportunities date range (YYYY-MM-DD). */
  endDate?: string;

  /** Lower bound of the estimated missed clicks. */
  estimatedMissedClicksLower?: number;

  /** Upper bound of the estimated missed clicks. */
  estimatedMissedClicksUpper?: number;

  /** Lower bound of the estimated missed impressions. */
  estimatedMissedImpressionsLower?: number;

  /** Upper bound of the estimated missed impressions. */
  estimatedMissedImpressionsUpper?: number;

  /** Lower bound of the estimated missed sales. This will be in local currency. */
  estimatedMissedSalesLower?: number;

  /** Upper bound of the estimated missed sales. This will be in local currency. */
  estimatedMissedSalesUpper?: number;

  /** Lower bound of the estimated missed viewable impressions for vCPM campaigns. */
  estimatedMissedViewableImpressionsLower?: number;

  /** Upper bound of the estimated missed viewable impressions for vCPM campaigns. */
  estimatedMissedViewableImpressionsUpper?: number;

  /** Percentage of time the campaign is active with a budget. */
  percentTimeInBudget?: number;

  /** Start date of the missed opportunities date range (YYYY-MM-DD). */
  startDate?: string;
}

export type SDTactic = "T00001" | "T00010" | "T00020" | "remarketing";

export type SDTacticV31 = "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

export type SDTargetExpressionV31 = {
  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
  value?: string;
} | {
  type: "audience" | "purchases" | "views";
  value: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
    value?: string;
  }[];
};

export type SDTargetExpressionV32 = {
  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
  value?: string;
} | {
  type: "audience" | "purchases" | "views";
  value: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
    value?: string;
  }[];
} | {
  type: "contentCategorySameAs";
  value: string;
};

export interface SDTargetingBidRecommendationsRequestV31 {

  /** A list of products to tailor bid recommendations for category and audience based targeting clauses. */
  products?: {
    asin: string;
  }[];

  /** A list of targeting clauses to receive bid recommendations for. */
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

export interface SDTargetingBidRecommendationsRequestV32 {

  /** Determines what the recommended bids will be optimized for.

|Name|CostType|Supported Tactics|Description|
|----|----------|-----------|-----------|
|clicks|cpc|T00020 T00030|Optimize for page visits|
|conversions|cpc|T00020 T00030|Optimize for conversion|
|reach|vcpm|T00020 T00030|Optimize for viewable impressions| */
  bidOptimization: "clicks" | "conversions" | "reach";

  /** Determines what performance metric the bid recommendations will be optimized for.
|Name|Supported Tactics|Description|
|----|----------|-----------|
|CPC|T00020 T00030|The bid recommendations will be optimized for clicks triggered by the ad.|
|VCPM|T00020 T00030|The bid recommendations will be optimized for viewed impressions triggered by the ad.| */
  costType: "cpc" | "vcpm";

  /** A list of products to tailor bid recommendations for category and audience based targeting clauses. */
  products?: {
    asin: string;
  }[];

  /** A list of targeting clauses to receive bid recommendations for. */
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

export interface SDTargetingBidRecommendationsRequestV33 {

  /** Determines what the recommended bids will be optimized for.

|Name|CostType|Supported Tactics|Description|
|----|----------|-----------|-----------|
|clicks|cpc|T00020 T00030|Optimize for page visits|
|conversions|cpc|T00020 T00030|Optimize for conversion|
|reach|vcpm|T00020 T00030|Optimize for viewable impressions| */
  bidOptimization: "clicks" | "conversions" | "reach";

  /** Determines what performance metric the bid recommendations will be optimized for.
|Name|Supported Tactics|Description|
|----|----------|-----------|
|CPC|T00020 T00030|The bid recommendations will be optimized for clicks triggered by the ad.|
|VCPM|T00020 T00030|The bid recommendations will be optimized for viewed impressions triggered by the ad.| */
  costType: "cpc" | "vcpm";

  /** The type of the associated creative. If the field is empty or null, a default value of IMAGE will be used. Only supports one type (VIDEO or IMAGE) at a time. */
  creativeType?: "IMAGE" | "VIDEO";

  /** A list of products to tailor bid recommendations for category and audience based targeting clauses. */
  products?: {
    asin: string;
  }[];

  /** A list of targeting clauses to receive bid recommendations for. */
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

export interface SDTargetingBidRecommendationsRequestV34 {

  /** Determines what the recommended bids will be optimized for.

|Name|CostType|Supported Tactics|Description|
|----|----------|-----------|-----------|
|clicks|cpc|T00020 T00030|Optimize for page visits|
|conversions|cpc|T00020 T00030|Optimize for conversion|
|reach|vcpm|T00020 T00030|Optimize for viewable impressions| */
  bidOptimization: "clicks" | "conversions" | "reach";

  /** Determines what performance metric the bid recommendations will be optimized for.
|Name|Supported Tactics|Description|
|----|----------|-----------|
|CPC|T00020 T00030|The bid recommendations will be optimized for clicks triggered by the ad.|
|VCPM|T00020 T00030|The bid recommendations will be optimized for viewed impressions triggered by the ad.| */
  costType: "cpc" | "vcpm";

  /** The type of the associated creative. If the field is empty or null, a default value of IMAGE will be used. Only supports one type (VIDEO or IMAGE) at a time. */
  creativeType?: "IMAGE" | "VIDEO";

  /** A list of products to tailor bid recommendations for category and audience based targeting clauses.
This array must contain consistent fields of either asins or landing pages (when linking to other pages), these cannot be mixed for any given request.
If landingPageUrl is used, only one item is allowed for the list. */
  products?: {
    asin: string;
  }[];

  /** A list of targeting clauses to receive bid recommendations for. */
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
      } | {
        type: "contentCategorySameAs";
        value: string;
      }[];
      expressionType: "auto" | "manual";
    };
  }[];
}

export interface SDTargetingBidRecommendationsResponseItemFailureV31 {

  /** The HTTP status code of this item. */
  code: string;

  /** A human-readable description of this item on error. */
  details: string;
}

export interface SDTargetingBidRecommendationsResponseItemSuccessV31 {

  /** The HTTP status code of this item. */
  code: string;

  /** The lowest recommended bid to use to win an ad placement for this target. */
  rangeLower?: number;

  /** The highest recommended bid to use to win an ad placement for this target. */
  rangeUpper?: number;

  /** The recommended bid to use to win an ad placement for this target. */
  recommended?: number;
}

export interface SDTargetingBidRecommendationsResponseV31 {

  bidRecommendations: {
    code: string;
    rangeLower?: number;
    rangeUpper?: number;
    recommended?: number;
  } | {
    code: string;
    details: string;
  }[];

  /** Determines what performance metric the bid recommendations will be optimized for.
|Name|Supported Tactics|Description|
|----|----------|-----------|
|CPC|T00020 T00030|The bid recommendations will be optimized for clicks triggered by the ad.|
|VCPM|T00020 T00030|The bid recommendations will be optimized for viewed impressions triggered by the ad.| */
  costType: "cpc" | "vcpm";
}

export interface SDTargetingBidRecommendationsResponseV32 {

  /** Determines what the recommended bids will be optimized for.

|Name|CostType|Supported Tactics|Description|
|----|----------|-----------|-----------|
|clicks|cpc|T00020 T00030|Optimize for page visits|
|conversions|cpc|T00020 T00030|Optimize for conversion|
|reach|vcpm|T00020 T00030|Optimize for viewable impressions| */
  bidOptimization: "clicks" | "conversions" | "reach";

  bidRecommendations: {
    code: string;
    rangeLower?: number;
    rangeUpper?: number;
    recommended?: number;
  } | {
    code: string;
    details: string;
  }[];

  /** Determines what performance metric the bid recommendations will be optimized for.
|Name|Supported Tactics|Description|
|----|----------|-----------|
|CPC|T00020 T00030|The bid recommendations will be optimized for clicks triggered by the ad.|
|VCPM|T00020 T00030|The bid recommendations will be optimized for viewed impressions triggered by the ad.| */
  costType: "cpc" | "vcpm";
}

export interface SDTargetingClauseV31 {

  /** The targeting expression to match against.

------- Applicable to Product targeting (T00020) -------
* A 'TargetingExpression' in a Product targeting Campaign can only contain 'TargetingPredicate' components.
* Expressions must specify either a category predicate or an ASIN predicate, but never both.
* Only one category may be specified per targeting expression.
* Only one brand may be specified per targeting expression.
* Only one asin may be specified per targeting expression.
* To exclude a brand from a targeting expression you must create a negative targeting expression in the same ad group as the positive targeting expression.

------- Applicable to Audience targeting (T00030) -------
* A 'TargetingExpression' in an Audience Campaign can only contain 'TargetingPredicateNested' components.
* Expressions must specify either auto ASIN-grain (exact products), manual ASIN-grain (similar products), or manual category-grain targeting.
* **Future** To exclude parts of an audience, specify a TargetingPredicateNested component that contains a negative TargetingPredicate type. */
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

  /** Tactic T00020 ad groups only allow manual targeting. */
  expressionType: "auto" | "manual";
}

export interface SDTargetingClauseV32 {

  /** The targeting expression to match against.

------- Applicable to contextual targeting (T00020) -------
* A 'TargetingExpression' in a contextual targeting campaign can only contain 'TargetingPredicate' or 'ContentTargetingPredicate' components.
* Expressions must specify either a category predicate or an ASIN predicate, but never both.
* Only one category may be specified per targeting expression.
* Only one brand may be specified per targeting expression.
* Only one asin may be specified per targeting expression.
* To exclude a brand from a targeting expression you must create a negative targeting expression in the same ad group as the positive targeting expression.

------- Applicable to audience targeting (T00030) -------
* A 'TargetingExpression' in an audience campaign can only contain 'TargetingPredicateNested' or 'ContentTargetingPredicate' components. */
  expression: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
    value?: string;
  } | {
    type: "audience" | "purchases" | "views";
    value: {
      type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
      value?: string;
    }[];
  } | {
    type: "contentCategorySameAs";
    value: string;
  }[];

  /** Tactic T00020 ad groups only allow manual targeting. */
  expressionType: "auto" | "manual";
}

export type SDTargetingExpressionV31 = {
  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
  value?: string;
} | {
  type: "audience" | "purchases" | "views";
  value: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
    value?: string;
  }[];
}[];

export type SDTargetingExpressionV32 = {
  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";
  value?: string;
} | {
  type: "audience" | "purchases" | "views";
  value: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
    value?: string;
  }[];
} | {
  type: "contentCategorySameAs";
  value: string;
}[];

export interface SDTargetingPredicateBaseV31 {

  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";

  /** The value to be targeted. */
  value?: string;
}

export interface SDTargetingPredicateNestedV31 {

  type: "audience" | "purchases" | "views";

  value: {
    type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "audienceSameAs" | "exactProduct" | "lookback" | "negative" | "relatedProduct" | "similarProduct";
    value?: string;
  }[];
}

export interface SDTargetingPredicateV31 {

  type: "asinAgeRangeSameAs" | "asinBrandSameAs" | "asinCategorySameAs" | "asinGenreSameAs" | "asinIsPrimeShippingEligible" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinPriceLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinReviewRatingLessThan" | "asinSameAs" | "similarProduct";

  /** The value to be targeted. */
  value?: string;
}

export interface SDTargetingRecommendations {

  /** List of recommended product targets */
  products?: {
    asin?: string;
    rank?: number;
  }[];
}

export interface SDTargetingRecommendationsFailure {

  /** HTTP status code indicating a failure response for targeting recomendations. */
  code?: string;

  /** A human friendly error message indicating the failure reasons. */
  errorMessage?: string;

  /** The theme name specified in the request. If the themes field is not provided in the request,
the value of this field will be set to default. */
  name?: string;
}

export interface SDTargetingRecommendationsFailureV34 {

  /** HTTP status code indicating a failure response for targeting recomendations. */
  code?: string;

  /** A human friendly error message indicating the failure reasons. */
  errorMessage?: string;

  /** A list of expressions that failed to be applied in the product targeting theme. */
  expression?: {
    type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
  }[];

  /** The theme name specified in the request. If the themes field is not provided in the request,
the value of this field will be set to default. */
  name?: string;
}

export type SDTargetingRecommendationsProducts = {
  asin: string;
}[];

export type SDTargetingRecommendationsProductsV31 = {
  asin?: string;
  landingPageType?: "OFF_AMAZON_LINK";
  landingPageURL?: string;
}[];

export interface SDTargetingRecommendationsRequest {

  /** A list of products for which to get targeting recommendations */
  products: {
    asin: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:

|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.| */
  tactic: "T00001" | "T00010" | "T00020" | "remarketing";

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "PRODUCT"[];
}

export interface SDTargetingRecommendationsRequestV31 {

  /** A list of products for which to get targeting recommendations */
  products: {
    asin: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:
|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.|
|T00030&nbsp;|Audiences&nbsp;|Select individual audiences to show your ads.| */
  tactic: "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "CATEGORY" | "PRODUCT"[];
}

export interface SDTargetingRecommendationsRequestV32 {

  /** A list of products for which to get targeting recommendations */
  products: {
    asin: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:
|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.|
|T00030&nbsp;|Audiences&nbsp;|Select individual audiences to show your ads.| */
  tactic: "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

  /** The themes used to refine the recommendations. Currently only product targeting themes are supported. */
  themes?: {
    product?: {
      expression: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name: string;
    }[];
  };

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "CATEGORY" | "PRODUCT"[];
}

export interface SDTargetingRecommendationsRequestV33 {

  /** A list of products for which to get targeting recommendations */
  products: {
    asin: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:
|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.|
|T00030&nbsp;|Audiences&nbsp;|Select individual audiences to show your ads.| */
  tactic: "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

  /** The themes used to refine the recommendations. Currently only product targeting themes are supported. */
  themes?: {
    product?: {
      expression: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name: string;
    }[];
  };

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "AUDIENCE" | "CATEGORY" | "PRODUCT"[];
}

export interface SDTargetingRecommendationsRequestV34 {

  /** A list of products for which to get targeting recommendations */
  products: {
    asin: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:
|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.|
|T00030&nbsp;|Audiences&nbsp;|Select individual audiences to show your ads.| */
  tactic: "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

  /** The themes used to refine the recommendations. Currently only product targeting themes are supported. */
  themes?: {
    product?: {
      expression: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name: string;
    }[];
  };

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "AUDIENCE" | "CATEGORY" | "PRODUCT"[];
}

export interface SDTargetingRecommendationsRequestV35 {

  /** This field is optional unless the field locationExpression is present in the request. It is used for category audience targeting
to specify if the audience is for views (re-marketing) or purchases (re-purchasing). The specified categories will be returned accordingly. */
  categoryType?: "purchases" | "views";

  /** This optional field is used to specify the locations used in SD location targeting for non-Amazon sellers only at the moment.
Therefore it's only supported if the product is a landing page url. */
  locationExpression?: {
    type?: "location";
    value?: string;
  }[];

  /** A list of products for which to get targeting recommendations. This array can only contain either asins or landing pages. If landingPageUrl is used, 
there can only be one item in the array for each request. */
  products: {
    asin?: string;
    landingPageType?: "OFF_AMAZON_LINK";
    landingPageURL?: string;
  }[];

  /** The advertising tactic associated with the campaign. The following table lists available tactic names:
|Tactic Name|Type|Description|
|-----------|-----|-----------|
|T00001&nbsp;|&nbsp;|This tactic name is only applicable for the `requestReport` operation and does not apply to any other campaign management operations. Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon. This tactic is for use by only vendors. This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.|
|T00010&nbsp;|Views&nbsp;|**Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.** This is the same tactic as 'remarketing'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|remarketing&nbsp;|Views&nbsp;|This is the same tactic as 'T00010'. Shoppers who viewed the detail pages of your advertised products or similar products.|
|T00020&nbsp;|Products&nbsp;|Products: Choose individual products to show your ads in placements related to those products.<br>Categories: Choose individual categories to show your ads in placements related to those categories.|
|T00030&nbsp;|Audiences&nbsp;|Select individual audiences to show your ads.| */
  tactic: "T00001" | "T00010" | "T00020" | "T00030" | "remarketing";

  /** The themes used to refine the recommendations. Currently only product targeting themes are supported. */
  themes?: {
    product?: {
      expression: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name: string;
    }[];
  };

  /** A filter to indicate which types of recommendations to request. */
  typeFilter: "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT"[];
}

export interface SDTargetingRecommendationsResponse {

  /** A collection of targeting recommendations. Results will be sorted with strongest recommendations in the beginning. */
  recommendations?: {
    products?: {
      asin?: string;
      rank?: number;
    }[];
  };
}

export interface SDTargetingRecommendationsResponseV31 {

  /** A collection of targeting recommendations. Results will be sorted with strongest recommendations in the beginning. */
  recommendations?: {
    products?: {
      asin?: string;
      rank?: number;
    }[];
    categories?: {
      category?: number;
      name?: string;
      path?: string[];
      rank?: number;
      targetableAsinCountRange?: {
        rangeLower?: number;
        rangeUpper?: number;
      };
    }[];
  };
}

export interface SDTargetingRecommendationsResponseV32 {

  /** For v3.2 the service will continue to return the recommendations returned for v3.1 in products field,
and return recommendations for product targeting themes in themes field. */
  recommendations?: {
    products?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
    categories?: {
      category?: number;
      name?: string;
      path?: string[];
      rank?: number;
      targetableAsinCountRange?: {
        rangeLower?: number;
        rangeUpper?: number;
      };
    }[];
    themes?: {
      products?: {
        code?: string;
        name?: string;
        recommendations?: {
          advertisedAsins?: string[];
          asin?: string;
          rank?: number;
        }[];
      } | {
        code?: string;
        errorMessage?: string;
        name?: string;
      }[];
    };
  };
}

export interface SDTargetingRecommendationsResponseV33 {

  /** For v3.3 the service will continue to return the recommendations returned for v3.2, and return audience recommendations if requested. */
  recommendations?: {
    products?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
    categories?: {
      category?: number;
      name?: string;
      path?: string[];
      rank?: number;
      targetableAsinCountRange?: {
        rangeLower?: number;
        rangeUpper?: number;
      };
      translatedName?: string;
      translatedPath?: string[];
    }[];
    audiences?: {
      audiences?: {
        audience?: string;
        name?: string;
        rank?: number;
      }[];
      category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
    }[];
    themes?: {
      products?: {
        code?: string;
        name?: string;
        recommendations?: {
          advertisedAsins?: string[];
          asin?: string;
          rank?: number;
        }[];
      } | {
        code?: string;
        errorMessage?: string;
        name?: string;
      }[];
    };
  };
}

export interface SDTargetingRecommendationsResponseV34 {

  /** For v3.4 the service will continue to return the recommendations returned for v3.2, return audience recommendations if requested, and return the theme expression used in product targeting if requested. */
  recommendations?: {
    audiences?: {
      audiences?: {
        audience?: string;
        name?: string;
        rank?: number;
      }[];
      category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
    }[];
    categories?: {
      category?: number;
      name?: string;
      path?: string[];
      rank?: number;
      targetableAsinCountRange?: {
        rangeLower?: number;
        rangeUpper?: number;
      };
      translatedName?: string;
      translatedPath?: string[];
    }[];
    products?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
    themes?: {
      products?: {
        code?: string;
        expression?: {
          type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
        }[];
        name?: string;
        recommendations?: {
          advertisedAsins?: string[];
          asin?: string;
          rank?: number;
        }[];
      } | {
        code?: string;
        errorMessage?: string;
        expression?: {
          type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
        }[];
        name?: string;
      }[];
    };
  };
}

export interface SDTargetingRecommendationsResponseV35 {

  /** For v3.5 the service will continue to return the recommendations returned for v3.4, return Entertainment targeting recommendations if requested and return asin-less recommendations if a landing page URL was passed in the request. */
  recommendations?: {
    audiences?: {
      audiences?: {
        audience?: string;
        name?: string;
        rank?: number;
      }[];
      category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
    }[];
    categories?: {
      category?: number;
      name?: string;
      path?: string[];
      rank?: number;
      targetableAsinCountRange?: {
        rangeLower?: number;
        rangeUpper?: number;
      };
      translatedName?: string;
      translatedPath?: string[];
    }[];
    contentCategories?: {
      contentCategory?: string;
      name?: string;
      rank?: number;
    }[];
    products?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
    themes?: {
      products?: {
        code?: string;
        expression?: {
          type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
        }[];
        name?: string;
        recommendations?: {
          advertisedAsins?: string[];
          asin?: string;
          rank?: number;
        }[];
      } | {
        code?: string;
        errorMessage?: string;
        expression?: {
          type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
        }[];
        name?: string;
      }[];
    };
  };
}

export interface SDTargetingRecommendationsThemes {

  /** A list of themes for product targeting recommendations. If this list is empty, the service will return
all the current available theme recommendations. Recommendations will be returned for each theme.
If specified, each theme should only include unique expressions. */
  product?: {
    expression: {
      type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
    }[];
    name: string;
  }[];
}

export type SDTargetingRecommendationsTypeFilterV31 = "CATEGORY" | "PRODUCT"[];

export type SDTargetingRecommendationsTypeFilterV32 = "AUDIENCE" | "CATEGORY" | "PRODUCT"[];

export type SDTargetingRecommendationsTypeFilterV33 = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT"[];

export interface SDTargetingRecommendationsV31 {

  /** List of recommended product targets */
  products?: {
    asin?: string;
    rank?: number;
  }[];

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
  }[];
}

export interface SDTargetingRecommendationsV32 {

  /** List of recommended product targets */
  products?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
  }[];

  themes?: {
    products?: {
      code?: string;
      name?: string;
      recommendations?: {
        advertisedAsins?: string[];
        asin?: string;
        rank?: number;
      }[];
    } | {
      code?: string;
      errorMessage?: string;
      name?: string;
    }[];
  };
}

export interface SDTargetingRecommendationsV33 {

  /** List of recommended product targets */
  products?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
    translatedName?: string;
    translatedPath?: string[];
  }[];

  /** List of recommended audience targets, broken down by audience category */
  audiences?: {
    audiences?: {
      audience?: string;
      name?: string;
      rank?: number;
    }[];
    category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
  }[];

  themes?: {
    products?: {
      code?: string;
      name?: string;
      recommendations?: {
        advertisedAsins?: string[];
        asin?: string;
        rank?: number;
      }[];
    } | {
      code?: string;
      errorMessage?: string;
      name?: string;
    }[];
  };
}

export interface SDTargetingRecommendationsV34 {

  /** List of recommended audience targets, broken down by audience category */
  audiences?: {
    audiences?: {
      audience?: string;
      name?: string;
      rank?: number;
    }[];
    category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
  }[];

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
    translatedName?: string;
    translatedPath?: string[];
  }[];

  /** List of recommended product targets */
  products?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];

  themes?: {
    products?: {
      code?: string;
      expression?: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name?: string;
      recommendations?: {
        advertisedAsins?: string[];
        asin?: string;
        rank?: number;
      }[];
    } | {
      code?: string;
      errorMessage?: string;
      expression?: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name?: string;
    }[];
  };
}

export interface SDTargetingRecommendationsV35 {

  /** List of recommended audience targets, broken down by audience category */
  audiences?: {
    audiences?: {
      audience?: string;
      name?: string;
      rank?: number;
    }[];
    category?: "In-market" | "Interest" | "Life event" | "Lifestyle";
  }[];

  /** List of recommended category targets */
  categories?: {
    category?: number;
    name?: string;
    path?: string[];
    rank?: number;
    targetableAsinCountRange?: {
      rangeLower?: number;
      rangeUpper?: number;
    };
    translatedName?: string;
    translatedPath?: string[];
  }[];

  /** List of recommended entertainment targets */
  contentCategories?: {
    contentCategory?: string;
    name?: string;
    rank?: number;
  }[];

  /** List of recommended product targets */
  products?: {
    advertisedAsins?: string[];
    asin?: string;
    rank?: number;
  }[];

  themes?: {
    products?: {
      code?: string;
      expression?: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name?: string;
      recommendations?: {
        advertisedAsins?: string[];
        asin?: string;
        rank?: number;
      }[];
    } | {
      code?: string;
      errorMessage?: string;
      expression?: {
        type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
      }[];
      name?: string;
    }[];
  };
}

export interface SDThemeRecommendations {

  /** A list of product targeting theme recommendations. */
  products?: {
    code?: string;
    name?: string;
    recommendations?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
  } | {
    code?: string;
    errorMessage?: string;
    name?: string;
  }[];
}

export interface SDThemeRecommendationsV34 {

  /** A list of product targeting theme recommendations. */
  products?: {
    code?: string;
    expression?: {
      type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
    }[];
    name?: string;
    recommendations?: {
      advertisedAsins?: string[];
      asin?: string;
      rank?: number;
    }[];
  } | {
    code?: string;
    errorMessage?: string;
    expression?: {
      type: "asinBrandSameAs" | "asinGlanceViewsGreaterThan" | "asinPriceGreaterThan" | "asinReviewRatingLessThan";
    }[];
    name?: string;
  }[];
}

export interface SnapshotRequest {

  /** Optional. Restricts results to entities with state within the specified comma-separated list. The stateFilter not presenting or passing `null` or `""` would be treated as default behavior is to include enabled and paused. */
  stateFilter?: "archived" | "enabled" | "enabled, paused" | "enabled,archived" | "enabled,paused,archived" | "paused" | "paused,archived";

  /** Optional. Restricts results to entities with the advertising tactic associated with the campaign within the specified comma-separated list. The tacticFilter not presenting or passing `null` or `""` would be treated as default behavior is to return entities for all tactics. */
  tacticFilter?: "T00010" | "T00010,T00020" | "T00010,T00020,remarketing" | "T00010,remarketing" | "T00020" | "T00020,remarketing" | "remarketing";
}

export interface SnapshotResponse {

  /** The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS. */
  expiration?: number;

  /** The size of the snapshot file in bytes. It's only available if status is SUCCESS. */
  fileSize?: number;

  /** The URI for the snapshot. It's only available if status is SUCCESS. */
  location?: string;

  /** The record type of the snapshot file. */
  recordType?: "adGroups" | "campaigns" | "negativeTargets" | "productAds" | "targets";

  /** The identifier of the snapshot that was requested. */
  snapshotId?: string;

  /** The status of the generation of the snapshot. */
  status?: "FAILURE" | "IN_PROGRESS" | "SUCCESS";

  /** Status information of the call if SUCCESS or FAILURE status, optional for IN_PROCESS. */
  statusDetails?: string;
}

export type state = "ACTIVE" | "PAUSED";

export interface timeOfDay {

  /** The end time of intra-day budget rule window in the format 'hh:mm:ss'. Required to be greater than start-time.  */
  endTime?: string;

  /** The start time of intra-day budget rule window in the format 'hh:mm:ss'  */
  startTime?: string;
}

export interface UpdateBudgetRulesResponse {

  responses?: {
    associatedCampaignIds?: string[];
    code?: string;
    details?: string;
    ruleId?: string;
  }[];
}

export interface UpdateSDBudgetRulesRequest {

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
// Auto-generated endpoint response types — do not edit

export type CreateSnapshotResponse = {
  expiration?: number;
  fileSize?: number;
  location?: string;
  recordType?: "adGroups" | "campaigns" | "negativeTargets" | "productAds" | "targets";
  snapshotId?: string;
  status?: "FAILURE" | "IN_PROGRESS" | "SUCCESS";
  statusDetails?: string;
};

export type GetSnapshotByIdResponse = {
  expiration?: number;
  fileSize?: number;
  location?: string;
  recordType?: "adGroups" | "campaigns" | "negativeTargets" | "productAds" | "targets";
  snapshotId?: string;
  status?: "FAILURE" | "IN_PROGRESS" | "SUCCESS";
  statusDetails?: string;
};

export type DownloadSnapshotByIdResponse = {
  expiration?: number;
  fileSize?: number;
  location?: string;
  recordType?: "adGroups" | "campaigns" | "negativeTargets" | "productAds" | "targets";
  snapshotId?: string;
  status?: "FAILURE" | "IN_PROGRESS" | "SUCCESS";
  statusDetails?: string;
};

export type GetRequestResultsResponse = {
  results?: {
    details?: string;
    domainId?: number;
    name?: string;
    status?: "FAILURE" | "SUCCESS";
  }[];
};

export type GetRequestStatusResponse = {
  requestStatus?: {
    requestId?: string;
    status?: "COMPLETED" | "FAILURE" | "IN_PROGRESS";
    statusDetails?: string;
    timestamp?: string;
  };
};

export type ListRequestStatusResponse = {
  requestStatusList?: {
    requestId?: string;
    status?: "COMPLETED" | "FAILURE" | "IN_PROGRESS";
    statusDetails?: string;
    timestamp?: string;
  }[];
};

export type DeleteBrandSafetyDenyListResponse = {
  requestId?: string;
};

export type ListDomainsResponse = {
  domains?: {
    createdAt?: string;
    domainId?: number;
    lastModified?: string;
    name?: string;
    state?: "ARCHIVED" | "ENABLED";
    type?: "APP" | "CREATOR" | "WEBSITE";
  }[];
  pagination?: {
    limit?: number;
    offset?: number;
    total?: number;
  };
};

export type CreateBrandSafetyDenyListDomainsResponse = {
  requestId?: string;
};

export type GetSDBudgetRulesForAdvertiserResponseEndpoint = {
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
  nextToken?: string;
};

export type GetBudgetRuleByRuleIdForSDCampaignsResponse = {
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
  };
};

export type GetCampaignsAssociatedWithSDBudgetRuleResponse = {
  associatedCampaigns?: {
    campaignId: string;
    campaignName: string;
    ruleStatus: string;
  }[];
  nextToken?: string;
};

export type ListAssociatedBudgetRulesForSDCampaignsResponse = {
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
};

export type DisassociateAssociatedBudgetRuleForSDCampaignsResponse = {

};

export type GetHeadlineRecommendationsForSDResponse = {
  recommendations?: {
    headline?: string;
    headlineId?: string;
  }[];
  requestId?: string;
};

export type GetTargetRecommendationsResponse = {
  recommendations?: {
    products?: {
      asin?: string;
      rank?: number;
    }[];
  };
};
