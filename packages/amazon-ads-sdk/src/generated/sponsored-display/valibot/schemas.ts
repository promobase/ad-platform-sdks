// @generated
// fingerprint: sha256:64e07a4e8340f9a334ad5380ce37e7df41067e880802007f7eba58f4f80dfcdf
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import * as v from "valibot";

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

export type BudgetChangeType = "PERCENT" | string;
export const BudgetChangeTypeSchema: v.GenericSchema<unknown, BudgetChangeType> = v.union([v.picklist(["PERCENT"]), v.string()]);

export type budgetIncreaseBy = {
  readonly type: string;
  readonly value: number;
};
export const budgetIncreaseBySchema: v.GenericSchema<unknown, budgetIncreaseBy> = v.looseObject({
  type: v.string(),
  value: v.number(),
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
  readonly error?: ReadonlyArray<Inline9>;
  readonly success?: ReadonlyArray<Inline10>;
};
export const BudgetUsageCampaignResponseSchema: v.GenericSchema<unknown, BudgetUsageCampaignResponse> = v.looseObject({
  error: v.optional(v.array(v.lazy(() => Inline9Schema))),
  success: v.optional(v.array(v.lazy(() => Inline10Schema))),
});

export type BudgetUsageError = {
  readonly code?: string;
  readonly details?: string;
};
export const BudgetUsageErrorSchema: v.GenericSchema<unknown, BudgetUsageError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export const ComparisonOperatorSchema: v.GenericSchema<unknown, ComparisonOperator> = v.union([v.picklist(["GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO"]), v.string()]);

export type CreateAssociatedBudgetRulesForSDCampaignsParams = {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
};
export const CreateAssociatedBudgetRulesForSDCampaignsParamsSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesForSDCampaignsParams> = v.looseObject({
  campaignId: v.number(),
  budgetRuleIds: v.optional(v.array(v.string())),
});

export type CreateAssociatedBudgetRulesForSDCampaignsResponse = {

};
export const CreateAssociatedBudgetRulesForSDCampaignsResponseSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesForSDCampaignsResponse> = v.looseObject({

});

export type CreateAssociatedBudgetRulesRequest = {
  readonly budgetRuleIds?: ReadonlyArray<string>;
};
export const CreateAssociatedBudgetRulesRequestSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesRequest> = v.looseObject({
  budgetRuleIds: v.optional(v.array(v.string())),
});

export type CreateAssociatedBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline15>;
};
export const CreateAssociatedBudgetRulesResponseSchema: v.GenericSchema<unknown, CreateAssociatedBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline15Schema))),
});

export type CreateBrandSafetyDenyListDomainsParams = {
  readonly domains: ReadonlyArray<Inline345>;
};
export const CreateBrandSafetyDenyListDomainsParamsSchema: v.GenericSchema<unknown, CreateBrandSafetyDenyListDomainsParams> = v.looseObject({
  domains: v.array(v.lazy(() => Inline345Schema)),
});

export type CreateBrandSafetyDenyListDomainsResponse = {
  readonly data: Inline347;
};
export const CreateBrandSafetyDenyListDomainsResponseSchema: v.GenericSchema<unknown, CreateBrandSafetyDenyListDomainsResponse> = v.looseObject({
  data: v.lazy(() => Inline347Schema),
});

export type CreateBudgetRulesForSDCampaignsParams = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline354>;
};
export const CreateBudgetRulesForSDCampaignsParamsSchema: v.GenericSchema<unknown, CreateBudgetRulesForSDCampaignsParams> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline354Schema))),
});

export type CreateBudgetRulesForSDCampaignsResponse = {

};
export const CreateBudgetRulesForSDCampaignsResponseSchema: v.GenericSchema<unknown, CreateBudgetRulesForSDCampaignsResponse> = v.looseObject({

});

export type CreateBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline17>;
};
export const CreateBudgetRulesResponseSchema: v.GenericSchema<unknown, CreateBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline17Schema))),
});

export type CreateSDBudgetRulesRequest = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline19>;
};
export const CreateSDBudgetRulesRequestSchema: v.GenericSchema<unknown, CreateSDBudgetRulesRequest> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline19Schema))),
});

export type CreateSnapshotParams = {
  readonly recordType: string;
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
};
export const CreateSnapshotParamsSchema: v.GenericSchema<unknown, CreateSnapshotParams> = v.looseObject({
  recordType: v.string(),
  stateFilter: v.optional(v.string()),
  tacticFilter: v.optional(v.string()),
});

export type CreateSnapshotResponse = {
  readonly data: Inline330;
};
export const CreateSnapshotResponseSchema: v.GenericSchema<unknown, CreateSnapshotResponse> = v.looseObject({
  data: v.lazy(() => Inline330Schema),
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

export type DeleteBrandSafetyDenyListParams = {

};
export const DeleteBrandSafetyDenyListParamsSchema: v.GenericSchema<unknown, DeleteBrandSafetyDenyListParams> = v.looseObject({

});

export type DeleteBrandSafetyDenyListResponse = {
  readonly data: Inline339;
};
export const DeleteBrandSafetyDenyListResponseSchema: v.GenericSchema<unknown, DeleteBrandSafetyDenyListResponse> = v.looseObject({
  data: v.lazy(() => Inline339Schema),
});

export type DisassociateAssociatedBudgetRuleForSDCampaignsParams = {
  readonly campaignId: number;
  readonly budgetRuleId: string;
};
export const DisassociateAssociatedBudgetRuleForSDCampaignsParamsSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleForSDCampaignsParams> = v.looseObject({
  campaignId: v.number(),
  budgetRuleId: v.string(),
});

export type DisassociateAssociatedBudgetRuleForSDCampaignsResponse = {
  readonly data: Inline398;
};
export const DisassociateAssociatedBudgetRuleForSDCampaignsResponseSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleForSDCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline398Schema),
});

export type DisassociateAssociatedBudgetRuleResponse = {

};
export const DisassociateAssociatedBudgetRuleResponseSchema: v.GenericSchema<unknown, DisassociateAssociatedBudgetRuleResponse> = v.looseObject({

});

export type DownloadSnapshotByIdParams = {
  readonly snapshotId: string;
};
export const DownloadSnapshotByIdParamsSchema: v.GenericSchema<unknown, DownloadSnapshotByIdParams> = v.looseObject({
  snapshotId: v.string(),
});

export type DownloadSnapshotByIdResponse = {
  readonly data: Inline411;
};
export const DownloadSnapshotByIdResponseSchema: v.GenericSchema<unknown, DownloadSnapshotByIdResponse> = v.looseObject({
  data: v.lazy(() => Inline411Schema),
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

export type GetBudgetRuleByRuleIdForSDCampaignsParams = {
  readonly budgetRuleId: string;
};
export const GetBudgetRuleByRuleIdForSDCampaignsParamsSchema: v.GenericSchema<unknown, GetBudgetRuleByRuleIdForSDCampaignsParams> = v.looseObject({
  budgetRuleId: v.string(),
});

export type GetBudgetRuleByRuleIdForSDCampaignsResponse = {
  readonly data: Inline379;
};
export const GetBudgetRuleByRuleIdForSDCampaignsResponseSchema: v.GenericSchema<unknown, GetBudgetRuleByRuleIdForSDCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline379Schema),
});

export type GetCampaignsAssociatedWithSDBudgetRuleParams = {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
};
export const GetCampaignsAssociatedWithSDBudgetRuleParamsSchema: v.GenericSchema<unknown, GetCampaignsAssociatedWithSDBudgetRuleParams> = v.looseObject({
  budgetRuleId: v.string(),
  nextToken: v.optional(v.string()),
  pageSize: v.number(),
});

export type GetCampaignsAssociatedWithSDBudgetRuleResponse = {
  readonly data: Inline386;
};
export const GetCampaignsAssociatedWithSDBudgetRuleResponseSchema: v.GenericSchema<unknown, GetCampaignsAssociatedWithSDBudgetRuleResponse> = v.looseObject({
  data: v.lazy(() => Inline386Schema),
});

export type GetHeadlineRecommendationsForSDParams = {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
};
export const GetHeadlineRecommendationsForSDParamsSchema: v.GenericSchema<unknown, GetHeadlineRecommendationsForSDParams> = v.looseObject({
  adFormat: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  maxNumRecommendations: v.optional(v.number()),
});

export type GetHeadlineRecommendationsForSDResponse = {
  readonly data: Inline405;
};
export const GetHeadlineRecommendationsForSDResponseSchema: v.GenericSchema<unknown, GetHeadlineRecommendationsForSDResponse> = v.looseObject({
  data: v.lazy(() => Inline405Schema),
});

export type GetRequestResultsParams = {
  readonly requestId: string;
  readonly startIndex?: number;
  readonly count?: number;
};
export const GetRequestResultsParamsSchema: v.GenericSchema<unknown, GetRequestResultsParams> = v.looseObject({
  requestId: v.string(),
  startIndex: v.optional(v.number()),
  count: v.optional(v.number()),
});

export type GetRequestResultsResponse = {
  readonly data: Inline333;
};
export const GetRequestResultsResponseSchema: v.GenericSchema<unknown, GetRequestResultsResponse> = v.looseObject({
  data: v.lazy(() => Inline333Schema),
});

export type GetRequestStatusParams = {
  readonly requestId: string;
};
export const GetRequestStatusParamsSchema: v.GenericSchema<unknown, GetRequestStatusParams> = v.looseObject({
  requestId: v.string(),
});

export type GetRequestStatusResponse = {
  readonly data: Inline336;
};
export const GetRequestStatusResponseSchema: v.GenericSchema<unknown, GetRequestStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline336Schema),
});

export type GetSDBudgetRecommendationsParams = {
  readonly campaignIds: ReadonlyArray<string>;
};
export const GetSDBudgetRecommendationsParamsSchema: v.GenericSchema<unknown, GetSDBudgetRecommendationsParams> = v.looseObject({
  campaignIds: v.array(v.string()),
});

export type GetSDBudgetRecommendationsResponse = {

};
export const GetSDBudgetRecommendationsResponseSchema: v.GenericSchema<unknown, GetSDBudgetRecommendationsResponse> = v.looseObject({

});

export type GetSDBudgetRuleResponse = {
  readonly budgetRule?: Inline29;
};
export const GetSDBudgetRuleResponseSchema: v.GenericSchema<unknown, GetSDBudgetRuleResponse> = v.looseObject({
  budgetRule: v.optional(v.lazy(() => Inline29Schema)),
});

export type GetSDBudgetRulesForAdvertiserParams = {
  readonly nextToken?: string;
  readonly pageSize: number;
};
export const GetSDBudgetRulesForAdvertiserParamsSchema: v.GenericSchema<unknown, GetSDBudgetRulesForAdvertiserParams> = v.looseObject({
  nextToken: v.optional(v.string()),
  pageSize: v.number(),
});

export type GetSDBudgetRulesForAdvertiserResponse = {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline35>;
  readonly nextToken?: string;
};
export const GetSDBudgetRulesForAdvertiserResponseSchema: v.GenericSchema<unknown, GetSDBudgetRulesForAdvertiserResponse> = v.looseObject({
  budgetRulesForAdvertiserResponse: v.optional(v.array(v.lazy(() => Inline35Schema))),
  nextToken: v.optional(v.string()),
});

export type GetSnapshotByIdParams = {
  readonly snapshotId: string;
};
export const GetSnapshotByIdParamsSchema: v.GenericSchema<unknown, GetSnapshotByIdParams> = v.looseObject({
  snapshotId: v.string(),
});

export type GetSnapshotByIdResponse = {
  readonly data: Inline408;
};
export const GetSnapshotByIdResponseSchema: v.GenericSchema<unknown, GetSnapshotByIdResponse> = v.looseObject({
  data: v.lazy(() => Inline408Schema),
});

export type GetTargetBidRecommendationsParams = {
  readonly products?: ReadonlyArray<Inline413>;
  readonly targetingClauses: ReadonlyArray<Inline414>;
};
export const GetTargetBidRecommendationsParamsSchema: v.GenericSchema<unknown, GetTargetBidRecommendationsParams> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline413Schema))),
  targetingClauses: v.array(v.lazy(() => Inline414Schema)),
});

export type GetTargetBidRecommendationsResponse = {

};
export const GetTargetBidRecommendationsResponseSchema: v.GenericSchema<unknown, GetTargetBidRecommendationsResponse> = v.looseObject({

});

export type GetTargetRecommendationsParams = {
  readonly locale?: string;
  readonly products: ReadonlyArray<Inline421>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
};
export const GetTargetRecommendationsParamsSchema: v.GenericSchema<unknown, GetTargetRecommendationsParams> = v.looseObject({
  locale: v.optional(v.string()),
  products: v.array(v.lazy(() => Inline421Schema)),
  tactic: v.string(),
  typeFilter: v.array(v.string()),
});

export type GetTargetRecommendationsResponse = {
  readonly data: Inline423;
};
export const GetTargetRecommendationsResponseSchema: v.GenericSchema<unknown, GetTargetRecommendationsResponse> = v.looseObject({
  data: v.lazy(() => Inline423Schema),
});

export type Inline10 = {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
};
export const Inline10Schema: v.GenericSchema<unknown, Inline10> = v.looseObject({
  budget: v.optional(v.number()),
  budgetUsagePercent: v.optional(v.number()),
  campaignId: v.optional(v.string()),
  index: v.optional(v.number()),
  usageUpdatedTimestamp: v.optional(v.string()),
});

export type Inline100 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline100Schema: v.GenericSchema<unknown, Inline100> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline101 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline101>;
  readonly type?: string;
};
export const Inline101Schema: v.GenericSchema<unknown, Inline101> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline101Schema))),
  type: v.optional(v.string()),
});

export type Inline104 = {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
};
export const Inline104Schema: v.GenericSchema<unknown, Inline104> = v.looseObject({
  rangeLower: v.optional(v.number()),
  rangeUpper: v.optional(v.number()),
});

export type Inline106 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline106;
};
export const Inline106Schema: v.GenericSchema<unknown, Inline106> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline106Schema)),
});

export type Inline108 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline108;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline108Schema: v.GenericSchema<unknown, Inline108> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline108Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline110 = {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
};
export const Inline110Schema: v.GenericSchema<unknown, Inline110> = v.looseObject({
  rangeLower: v.optional(v.number()),
  rangeUpper: v.optional(v.number()),
});

export type Inline119 = {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
};
export const Inline119Schema: v.GenericSchema<unknown, Inline119> = v.looseObject({
  campaignId: v.string(),
  campaignName: v.string(),
  ruleStatus: v.string(),
});

export type Inline128 = {
  readonly headline?: string;
  readonly headlineId?: string;
};
export const Inline128Schema: v.GenericSchema<unknown, Inline128> = v.looseObject({
  headline: v.optional(v.string()),
  headlineId: v.optional(v.string()),
});

export type Inline133 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline133;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline133Schema: v.GenericSchema<unknown, Inline133> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline133Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline134 = {
  readonly dateRangeTypeRuleDuration?: Inline134;
  readonly eventTypeRuleDuration?: Inline135;
};
export const Inline134Schema: v.GenericSchema<unknown, Inline134> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline134Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline135Schema)),
});

export type Inline135 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline135Schema: v.GenericSchema<unknown, Inline135> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline136 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline136Schema: v.GenericSchema<unknown, Inline136> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline137 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline137>;
  readonly type?: string;
};
export const Inline137Schema: v.GenericSchema<unknown, Inline137> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline137Schema))),
  type: v.optional(v.string()),
});

export type Inline141 = {
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline141Schema: v.GenericSchema<unknown, Inline141> = v.looseObject({
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline143 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline143Schema: v.GenericSchema<unknown, Inline143> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline146 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline146Schema: v.GenericSchema<unknown, Inline146> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline148 = {
  readonly type: string;
};
export const Inline148Schema: v.GenericSchema<unknown, Inline148> = v.looseObject({
  type: v.string(),
});

export type Inline149 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline149Schema: v.GenericSchema<unknown, Inline149> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline15 = {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline15Schema: v.GenericSchema<unknown, Inline15> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline151 = {
  readonly type: string;
};
export const Inline151Schema: v.GenericSchema<unknown, Inline151> = v.looseObject({
  type: v.string(),
});

export type Inline154 = {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline154>;
};
export const Inline154Schema: v.GenericSchema<unknown, Inline154> = v.looseObject({
  code: v.optional(v.string()),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline154Schema))),
});

export type Inline155 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline155Schema: v.GenericSchema<unknown, Inline155> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline157 = {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline157>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline158>;
};
export const Inline157Schema: v.GenericSchema<unknown, Inline157> = v.looseObject({
  code: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline157Schema))),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline158Schema))),
});

export type Inline158 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline158Schema: v.GenericSchema<unknown, Inline158> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline159 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline159>;
  readonly name?: string;
};
export const Inline159Schema: v.GenericSchema<unknown, Inline159> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline159Schema))),
  name: v.optional(v.string()),
});

export type Inline169 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline169Schema: v.GenericSchema<unknown, Inline169> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline17 = {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline17Schema: v.GenericSchema<unknown, Inline17> = v.looseObject({
  associatedCampaignIds: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline170 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline170>;
};
export const Inline170Schema: v.GenericSchema<unknown, Inline170> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline170Schema)),
});

export type Inline172 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline172Schema: v.GenericSchema<unknown, Inline172> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline173 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline173>;
};
export const Inline173Schema: v.GenericSchema<unknown, Inline173> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline173Schema)),
});

export type Inline174 = {
  readonly type: string;
  readonly value: string;
};
export const Inline174Schema: v.GenericSchema<unknown, Inline174> = v.looseObject({
  type: v.string(),
  value: v.string(),
});

export type Inline176 = {
  readonly asin: string;
};
export const Inline176Schema: v.GenericSchema<unknown, Inline176> = v.looseObject({
  asin: v.string(),
});

export type Inline177 = {
  readonly targetingClause: Inline177;
};
export const Inline177Schema: v.GenericSchema<unknown, Inline177> = v.looseObject({
  targetingClause: v.lazy(() => Inline177Schema),
});

export type Inline178 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline178>;
};
export const Inline178Schema: v.GenericSchema<unknown, Inline178> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline178Schema)),
});

export type Inline180 = {
  readonly asin: string;
};
export const Inline180Schema: v.GenericSchema<unknown, Inline180> = v.looseObject({
  asin: v.string(),
});

export type Inline181 = {
  readonly targetingClause: Inline181;
};
export const Inline181Schema: v.GenericSchema<unknown, Inline181> = v.looseObject({
  targetingClause: v.lazy(() => Inline181Schema),
});

export type Inline182 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline182>;
};
export const Inline182Schema: v.GenericSchema<unknown, Inline182> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline182Schema)),
});

export type Inline184 = {
  readonly asin: string;
};
export const Inline184Schema: v.GenericSchema<unknown, Inline184> = v.looseObject({
  asin: v.string(),
});

export type Inline185 = {
  readonly targetingClause: Inline185;
};
export const Inline185Schema: v.GenericSchema<unknown, Inline185> = v.looseObject({
  targetingClause: v.lazy(() => Inline185Schema),
});

export type Inline186 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline186>;
};
export const Inline186Schema: v.GenericSchema<unknown, Inline186> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline186Schema)),
});

export type Inline188 = {
  readonly asin: string;
};
export const Inline188Schema: v.GenericSchema<unknown, Inline188> = v.looseObject({
  asin: v.string(),
});

export type Inline189 = {
  readonly targetingClause: Inline189;
};
export const Inline189Schema: v.GenericSchema<unknown, Inline189> = v.looseObject({
  targetingClause: v.lazy(() => Inline189Schema),
});

export type Inline19 = {
  readonly budgetIncreaseBy?: Inline19;
  readonly duration?: Inline20;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline22;
  readonly recurrence?: Inline23;
  readonly ruleType?: string;
};
export const Inline19Schema: v.GenericSchema<unknown, Inline19> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline19Schema)),
  duration: v.optional(v.lazy(() => Inline20Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline22Schema)),
  recurrence: v.optional(v.lazy(() => Inline23Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline190 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline190>;
};
export const Inline190Schema: v.GenericSchema<unknown, Inline190> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline190Schema)),
});

export type Inline191 = {
  readonly type: string;
  readonly value: string;
};
export const Inline191Schema: v.GenericSchema<unknown, Inline191> = v.looseObject({
  type: v.string(),
  value: v.string(),
});

export type Inline195 = {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
};
export const Inline195Schema: v.GenericSchema<unknown, Inline195> = v.looseObject({
  code: v.string(),
  rangeLower: v.optional(v.number()),
  rangeUpper: v.optional(v.number()),
  recommended: v.optional(v.number()),
});

export type Inline196 = {
  readonly code: string;
  readonly details: string;
};
export const Inline196Schema: v.GenericSchema<unknown, Inline196> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type Inline198 = {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
};
export const Inline198Schema: v.GenericSchema<unknown, Inline198> = v.looseObject({
  code: v.string(),
  rangeLower: v.optional(v.number()),
  rangeUpper: v.optional(v.number()),
  recommended: v.optional(v.number()),
});

export type Inline199 = {
  readonly code: string;
  readonly details: string;
};
export const Inline199Schema: v.GenericSchema<unknown, Inline199> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type Inline20 = {
  readonly dateRangeTypeRuleDuration?: Inline20;
  readonly eventTypeRuleDuration?: Inline21;
};
export const Inline20Schema: v.GenericSchema<unknown, Inline20> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline20Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline21Schema)),
});

export type Inline201 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline201Schema: v.GenericSchema<unknown, Inline201> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline202 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline202>;
};
export const Inline202Schema: v.GenericSchema<unknown, Inline202> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline202Schema)),
});

export type Inline204 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline204Schema: v.GenericSchema<unknown, Inline204> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline205 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline205>;
};
export const Inline205Schema: v.GenericSchema<unknown, Inline205> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline205Schema)),
});

export type Inline206 = {
  readonly type: string;
  readonly value: string;
};
export const Inline206Schema: v.GenericSchema<unknown, Inline206> = v.looseObject({
  type: v.string(),
  value: v.string(),
});

export type Inline208 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline208Schema: v.GenericSchema<unknown, Inline208> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline209 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline209>;
};
export const Inline209Schema: v.GenericSchema<unknown, Inline209> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline209Schema)),
});

export type Inline21 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline21Schema: v.GenericSchema<unknown, Inline21> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline211 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline211Schema: v.GenericSchema<unknown, Inline211> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline212 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline212>;
};
export const Inline212Schema: v.GenericSchema<unknown, Inline212> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline212Schema)),
});

export type Inline213 = {
  readonly type: string;
  readonly value: string;
};
export const Inline213Schema: v.GenericSchema<unknown, Inline213> = v.looseObject({
  type: v.string(),
  value: v.string(),
});

export type Inline216 = {
  readonly type: string;
  readonly value?: string;
};
export const Inline216Schema: v.GenericSchema<unknown, Inline216> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type Inline219 = {
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline219Schema: v.GenericSchema<unknown, Inline219> = v.looseObject({
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline22 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline22Schema: v.GenericSchema<unknown, Inline22> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline222 = {
  readonly type: string;
};
export const Inline222Schema: v.GenericSchema<unknown, Inline222> = v.looseObject({
  type: v.string(),
});

export type Inline224 = {
  readonly asin: string;
};
export const Inline224Schema: v.GenericSchema<unknown, Inline224> = v.looseObject({
  asin: v.string(),
});

export type Inline226 = {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
};
export const Inline226Schema: v.GenericSchema<unknown, Inline226> = v.looseObject({
  asin: v.optional(v.string()),
  landingPageType: v.optional(v.string()),
  landingPageURL: v.optional(v.string()),
});

export type Inline228 = {
  readonly asin: string;
};
export const Inline228Schema: v.GenericSchema<unknown, Inline228> = v.looseObject({
  asin: v.string(),
});

export type Inline23 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline23>;
  readonly type?: string;
};
export const Inline23Schema: v.GenericSchema<unknown, Inline23> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline23Schema))),
  type: v.optional(v.string()),
});

export type Inline230 = {
  readonly asin: string;
};
export const Inline230Schema: v.GenericSchema<unknown, Inline230> = v.looseObject({
  asin: v.string(),
});

export type Inline232 = {
  readonly asin: string;
};
export const Inline232Schema: v.GenericSchema<unknown, Inline232> = v.looseObject({
  asin: v.string(),
});

export type Inline233 = {
  readonly product?: ReadonlyArray<Inline233>;
};
export const Inline233Schema: v.GenericSchema<unknown, Inline233> = v.looseObject({
  product: v.optional(v.array(v.lazy(() => Inline233Schema))),
});

export type Inline235 = {
  readonly asin: string;
};
export const Inline235Schema: v.GenericSchema<unknown, Inline235> = v.looseObject({
  asin: v.string(),
});

export type Inline236 = {
  readonly product?: ReadonlyArray<Inline236>;
};
export const Inline236Schema: v.GenericSchema<unknown, Inline236> = v.looseObject({
  product: v.optional(v.array(v.lazy(() => Inline236Schema))),
});

export type Inline238 = {
  readonly asin: string;
};
export const Inline238Schema: v.GenericSchema<unknown, Inline238> = v.looseObject({
  asin: v.string(),
});

export type Inline239 = {
  readonly product?: ReadonlyArray<Inline239>;
};
export const Inline239Schema: v.GenericSchema<unknown, Inline239> = v.looseObject({
  product: v.optional(v.array(v.lazy(() => Inline239Schema))),
});

export type Inline241 = {
  readonly type?: string;
  readonly value?: string;
};
export const Inline241Schema: v.GenericSchema<unknown, Inline241> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type Inline242 = {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
};
export const Inline242Schema: v.GenericSchema<unknown, Inline242> = v.looseObject({
  asin: v.optional(v.string()),
  landingPageType: v.optional(v.string()),
  landingPageURL: v.optional(v.string()),
});

export type Inline243 = {
  readonly product?: ReadonlyArray<Inline243>;
};
export const Inline243Schema: v.GenericSchema<unknown, Inline243> = v.looseObject({
  product: v.optional(v.array(v.lazy(() => Inline243Schema))),
});

export type Inline245 = {
  readonly products?: ReadonlyArray<Inline245>;
};
export const Inline245Schema: v.GenericSchema<unknown, Inline245> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline245Schema))),
});

export type Inline247 = {
  readonly products?: ReadonlyArray<Inline247>;
  readonly categories?: ReadonlyArray<Inline248>;
};
export const Inline247Schema: v.GenericSchema<unknown, Inline247> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline247Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline248Schema))),
});

export type Inline248 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline248;
};
export const Inline248Schema: v.GenericSchema<unknown, Inline248> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline248Schema)),
});

export type Inline250 = {
  readonly products?: ReadonlyArray<Inline250>;
  readonly categories?: ReadonlyArray<Inline251>;
  readonly themes?: Inline252;
};
export const Inline250Schema: v.GenericSchema<unknown, Inline250> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline250Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline251Schema))),
  themes: v.optional(v.lazy(() => Inline252Schema)),
});

export type Inline251 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline251;
};
export const Inline251Schema: v.GenericSchema<unknown, Inline251> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline251Schema)),
});

export type Inline252 = {
  readonly products?: ReadonlyArray<Inline252 | Inline253>;
};
export const Inline252Schema: v.GenericSchema<unknown, Inline252> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline252Schema), v.lazy(() => Inline253Schema)]))),
});

export type Inline253 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline253Schema: v.GenericSchema<unknown, Inline253> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline255 = {
  readonly products?: ReadonlyArray<Inline255>;
  readonly categories?: ReadonlyArray<Inline256>;
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly themes?: Inline258;
};
export const Inline255Schema: v.GenericSchema<unknown, Inline255> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline255Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline256Schema))),
  audiences: v.optional(v.array(v.lazy(() => Inline257Schema))),
  themes: v.optional(v.lazy(() => Inline258Schema)),
});

export type Inline256 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline256;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline256Schema: v.GenericSchema<unknown, Inline256> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline256Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline257 = {
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly category?: string;
};
export const Inline257Schema: v.GenericSchema<unknown, Inline257> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline257Schema))),
  category: v.optional(v.string()),
});

export type Inline258 = {
  readonly products?: ReadonlyArray<Inline258 | Inline259>;
};
export const Inline258Schema: v.GenericSchema<unknown, Inline258> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline258Schema), v.lazy(() => Inline259Schema)]))),
});

export type Inline259 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline259Schema: v.GenericSchema<unknown, Inline259> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline261 = {
  readonly audiences?: ReadonlyArray<Inline261>;
  readonly categories?: ReadonlyArray<Inline262>;
  readonly products?: ReadonlyArray<Inline263>;
  readonly themes?: Inline264;
};
export const Inline261Schema: v.GenericSchema<unknown, Inline261> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline261Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline262Schema))),
  products: v.optional(v.array(v.lazy(() => Inline263Schema))),
  themes: v.optional(v.lazy(() => Inline264Schema)),
});

export type Inline262 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline262;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline262Schema: v.GenericSchema<unknown, Inline262> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline262Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline263 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline263Schema: v.GenericSchema<unknown, Inline263> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline264 = {
  readonly products?: ReadonlyArray<Inline264 | Inline266>;
};
export const Inline264Schema: v.GenericSchema<unknown, Inline264> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline264Schema), v.lazy(() => Inline266Schema)]))),
});

export type Inline265 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline265Schema: v.GenericSchema<unknown, Inline265> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline266 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline266>;
  readonly name?: string;
};
export const Inline266Schema: v.GenericSchema<unknown, Inline266> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline266Schema))),
  name: v.optional(v.string()),
});

export type Inline268 = {
  readonly audiences?: ReadonlyArray<Inline268>;
  readonly categories?: ReadonlyArray<Inline269>;
  readonly contentCategories?: ReadonlyArray<Inline270>;
  readonly products?: ReadonlyArray<Inline271>;
  readonly themes?: Inline272;
};
export const Inline268Schema: v.GenericSchema<unknown, Inline268> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline268Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline269Schema))),
  contentCategories: v.optional(v.array(v.lazy(() => Inline270Schema))),
  products: v.optional(v.array(v.lazy(() => Inline271Schema))),
  themes: v.optional(v.lazy(() => Inline272Schema)),
});

export type Inline269 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline269;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline269Schema: v.GenericSchema<unknown, Inline269> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline269Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline270 = {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
};
export const Inline270Schema: v.GenericSchema<unknown, Inline270> = v.looseObject({
  contentCategory: v.optional(v.string()),
  name: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline271 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline271Schema: v.GenericSchema<unknown, Inline271> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline272 = {
  readonly products?: ReadonlyArray<Inline272 | Inline274>;
};
export const Inline272Schema: v.GenericSchema<unknown, Inline272> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline272Schema), v.lazy(() => Inline274Schema)]))),
});

export type Inline273 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline273Schema: v.GenericSchema<unknown, Inline273> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline274 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline274>;
  readonly name?: string;
};
export const Inline274Schema: v.GenericSchema<unknown, Inline274> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline274Schema))),
  name: v.optional(v.string()),
});

export type Inline276 = {
  readonly expression: ReadonlyArray<Inline276>;
  readonly name: string;
};
export const Inline276Schema: v.GenericSchema<unknown, Inline276> = v.looseObject({
  expression: v.array(v.lazy(() => Inline276Schema)),
  name: v.string(),
});

export type Inline281 = {
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline281Schema: v.GenericSchema<unknown, Inline281> = v.looseObject({
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline282 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline282;
};
export const Inline282Schema: v.GenericSchema<unknown, Inline282> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline282Schema)),
});

export type Inline284 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline284Schema: v.GenericSchema<unknown, Inline284> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline285 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline285;
};
export const Inline285Schema: v.GenericSchema<unknown, Inline285> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline285Schema)),
});

export type Inline286 = {
  readonly products?: ReadonlyArray<Inline286 | Inline287>;
};
export const Inline286Schema: v.GenericSchema<unknown, Inline286> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline286Schema), v.lazy(() => Inline287Schema)]))),
});

export type Inline287 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline287Schema: v.GenericSchema<unknown, Inline287> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline289 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline289Schema: v.GenericSchema<unknown, Inline289> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline29 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline29;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline29Schema: v.GenericSchema<unknown, Inline29> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline29Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline290 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline290;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline290Schema: v.GenericSchema<unknown, Inline290> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline290Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline291 = {
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly category?: string;
};
export const Inline291Schema: v.GenericSchema<unknown, Inline291> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline291Schema))),
  category: v.optional(v.string()),
});

export type Inline292 = {
  readonly products?: ReadonlyArray<Inline292 | Inline293>;
};
export const Inline292Schema: v.GenericSchema<unknown, Inline292> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline292Schema), v.lazy(() => Inline293Schema)]))),
});

export type Inline293 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline293Schema: v.GenericSchema<unknown, Inline293> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline295 = {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly category?: string;
};
export const Inline295Schema: v.GenericSchema<unknown, Inline295> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline295Schema))),
  category: v.optional(v.string()),
});

export type Inline296 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline296;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline296Schema: v.GenericSchema<unknown, Inline296> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline296Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline297 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline297Schema: v.GenericSchema<unknown, Inline297> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline298 = {
  readonly products?: ReadonlyArray<Inline298 | Inline300>;
};
export const Inline298Schema: v.GenericSchema<unknown, Inline298> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline298Schema), v.lazy(() => Inline300Schema)]))),
});

export type Inline299 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline299Schema: v.GenericSchema<unknown, Inline299> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline30 = {
  readonly dateRangeTypeRuleDuration?: Inline30;
  readonly eventTypeRuleDuration?: Inline31;
};
export const Inline30Schema: v.GenericSchema<unknown, Inline30> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline30Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline31Schema)),
});

export type Inline300 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline300>;
  readonly name?: string;
};
export const Inline300Schema: v.GenericSchema<unknown, Inline300> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline300Schema))),
  name: v.optional(v.string()),
});

export type Inline302 = {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly category?: string;
};
export const Inline302Schema: v.GenericSchema<unknown, Inline302> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline302Schema))),
  category: v.optional(v.string()),
});

export type Inline303 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline303;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const Inline303Schema: v.GenericSchema<unknown, Inline303> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline303Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type Inline304 = {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
};
export const Inline304Schema: v.GenericSchema<unknown, Inline304> = v.looseObject({
  contentCategory: v.optional(v.string()),
  name: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline305 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline305Schema: v.GenericSchema<unknown, Inline305> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline306 = {
  readonly products?: ReadonlyArray<Inline306 | Inline308>;
};
export const Inline306Schema: v.GenericSchema<unknown, Inline306> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline306Schema), v.lazy(() => Inline308Schema)]))),
});

export type Inline307 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline307Schema: v.GenericSchema<unknown, Inline307> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline308 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline308>;
  readonly name?: string;
};
export const Inline308Schema: v.GenericSchema<unknown, Inline308> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline308Schema))),
  name: v.optional(v.string()),
});

export type Inline31 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline31Schema: v.GenericSchema<unknown, Inline31> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline310 = {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline310>;
};
export const Inline310Schema: v.GenericSchema<unknown, Inline310> = v.looseObject({
  code: v.optional(v.string()),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline310Schema))),
});

export type Inline311 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const Inline311Schema: v.GenericSchema<unknown, Inline311> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Inline313 = {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline313>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline314>;
};
export const Inline313Schema: v.GenericSchema<unknown, Inline313> = v.looseObject({
  code: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline313Schema))),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline314Schema))),
});

export type Inline314 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const Inline314Schema: v.GenericSchema<unknown, Inline314> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline315 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline315>;
  readonly name?: string;
};
export const Inline315Schema: v.GenericSchema<unknown, Inline315> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline315Schema))),
  name: v.optional(v.string()),
});

export type Inline32 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline32Schema: v.GenericSchema<unknown, Inline32> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline321 = {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
};
export const Inline321Schema: v.GenericSchema<unknown, Inline321> = v.looseObject({
  associatedCampaignIds: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  ruleId: v.optional(v.string()),
});

export type Inline323 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline323;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline323Schema: v.GenericSchema<unknown, Inline323> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline323Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline324 = {
  readonly dateRangeTypeRuleDuration?: Inline324;
  readonly eventTypeRuleDuration?: Inline325;
};
export const Inline324Schema: v.GenericSchema<unknown, Inline324> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline324Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline325Schema)),
});

export type Inline325 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline325Schema: v.GenericSchema<unknown, Inline325> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline326 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline326Schema: v.GenericSchema<unknown, Inline326> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline327 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline327>;
  readonly type?: string;
};
export const Inline327Schema: v.GenericSchema<unknown, Inline327> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline327Schema))),
  type: v.optional(v.string()),
});

export type Inline33 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline33>;
  readonly type?: string;
};
export const Inline33Schema: v.GenericSchema<unknown, Inline33> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline33Schema))),
  type: v.optional(v.string()),
});

export type Inline330 = {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
};
export const Inline330Schema: v.GenericSchema<unknown, Inline330> = v.looseObject({
  expiration: v.optional(v.number()),
  fileSize: v.optional(v.number()),
  location: v.optional(v.string()),
  recordType: v.optional(v.string()),
  snapshotId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
});

export type Inline333 = {
  readonly results?: ReadonlyArray<Inline333>;
};
export const Inline333Schema: v.GenericSchema<unknown, Inline333> = v.looseObject({
  results: v.optional(v.array(v.lazy(() => Inline333Schema))),
});

export type Inline336 = {
  readonly requestStatus?: Inline336;
};
export const Inline336Schema: v.GenericSchema<unknown, Inline336> = v.looseObject({
  requestStatus: v.optional(v.lazy(() => Inline336Schema)),
});

export type Inline339 = {
  readonly requestId?: string;
};
export const Inline339Schema: v.GenericSchema<unknown, Inline339> = v.looseObject({
  requestId: v.optional(v.string()),
});

export type Inline342 = {
  readonly domains?: ReadonlyArray<Inline342>;
  readonly pagination?: Inline343;
};
export const Inline342Schema: v.GenericSchema<unknown, Inline342> = v.looseObject({
  domains: v.optional(v.array(v.lazy(() => Inline342Schema))),
  pagination: v.optional(v.lazy(() => Inline343Schema)),
});

export type Inline343 = {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
};
export const Inline343Schema: v.GenericSchema<unknown, Inline343> = v.looseObject({
  limit: v.optional(v.number()),
  offset: v.optional(v.number()),
  total: v.optional(v.number()),
});

export type Inline345 = {
  readonly name: string;
  readonly type: string;
};
export const Inline345Schema: v.GenericSchema<unknown, Inline345> = v.looseObject({
  name: v.string(),
  type: v.string(),
});

export type Inline347 = {
  readonly requestId?: string;
};
export const Inline347Schema: v.GenericSchema<unknown, Inline347> = v.looseObject({
  requestId: v.optional(v.string()),
});

export type Inline349 = {
  readonly name: string;
  readonly type: string;
};
export const Inline349Schema: v.GenericSchema<unknown, Inline349> = v.looseObject({
  name: v.string(),
  type: v.string(),
});

export type Inline35 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline35;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline35Schema: v.GenericSchema<unknown, Inline35> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline35Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline351 = {
  readonly requestStatusList?: ReadonlyArray<Inline351>;
};
export const Inline351Schema: v.GenericSchema<unknown, Inline351> = v.looseObject({
  requestStatusList: v.optional(v.array(v.lazy(() => Inline351Schema))),
});

export type Inline354 = {
  readonly budgetIncreaseBy?: Inline354;
  readonly duration?: Inline355;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline357;
  readonly recurrence?: Inline358;
  readonly ruleType?: string;
};
export const Inline354Schema: v.GenericSchema<unknown, Inline354> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline354Schema)),
  duration: v.optional(v.lazy(() => Inline355Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline357Schema)),
  recurrence: v.optional(v.lazy(() => Inline358Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline355 = {
  readonly dateRangeTypeRuleDuration?: Inline355;
  readonly eventTypeRuleDuration?: Inline356;
};
export const Inline355Schema: v.GenericSchema<unknown, Inline355> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline355Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline356Schema)),
});

export type Inline356 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline356Schema: v.GenericSchema<unknown, Inline356> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline357 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline357Schema: v.GenericSchema<unknown, Inline357> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline358 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline358>;
  readonly type?: string;
};
export const Inline358Schema: v.GenericSchema<unknown, Inline358> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline358Schema))),
  type: v.optional(v.string()),
});

export type Inline36 = {
  readonly dateRangeTypeRuleDuration?: Inline36;
  readonly eventTypeRuleDuration?: Inline37;
};
export const Inline36Schema: v.GenericSchema<unknown, Inline36> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline36Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline37Schema)),
});

export type Inline361 = {
  readonly budgetIncreaseBy?: Inline361;
  readonly duration?: Inline362;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline364;
  readonly recurrence?: Inline365;
  readonly ruleType?: string;
};
export const Inline361Schema: v.GenericSchema<unknown, Inline361> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline361Schema)),
  duration: v.optional(v.lazy(() => Inline362Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline364Schema)),
  recurrence: v.optional(v.lazy(() => Inline365Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline362 = {
  readonly dateRangeTypeRuleDuration?: Inline362;
  readonly eventTypeRuleDuration?: Inline363;
};
export const Inline362Schema: v.GenericSchema<unknown, Inline362> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline362Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline363Schema)),
});

export type Inline363 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline363Schema: v.GenericSchema<unknown, Inline363> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline364 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline364Schema: v.GenericSchema<unknown, Inline364> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline365 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline365>;
  readonly type?: string;
};
export const Inline365Schema: v.GenericSchema<unknown, Inline365> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline365Schema))),
  type: v.optional(v.string()),
});

export type Inline366 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline366;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline366Schema: v.GenericSchema<unknown, Inline366> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline366Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline367 = {
  readonly dateRangeTypeRuleDuration?: Inline367;
  readonly eventTypeRuleDuration?: Inline368;
};
export const Inline367Schema: v.GenericSchema<unknown, Inline367> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline367Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline368Schema)),
});

export type Inline368 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline368Schema: v.GenericSchema<unknown, Inline368> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline369 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline369Schema: v.GenericSchema<unknown, Inline369> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline37 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline37Schema: v.GenericSchema<unknown, Inline37> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline370 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline370>;
  readonly type?: string;
};
export const Inline370Schema: v.GenericSchema<unknown, Inline370> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline370Schema))),
  type: v.optional(v.string()),
});

export type Inline373 = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline373;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const Inline373Schema: v.GenericSchema<unknown, Inline373> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline373Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type Inline374 = {
  readonly dateRangeTypeRuleDuration?: Inline374;
  readonly eventTypeRuleDuration?: Inline375;
};
export const Inline374Schema: v.GenericSchema<unknown, Inline374> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline374Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline375Schema)),
});

export type Inline375 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline375Schema: v.GenericSchema<unknown, Inline375> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline376 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline376Schema: v.GenericSchema<unknown, Inline376> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline377 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline377>;
  readonly type?: string;
};
export const Inline377Schema: v.GenericSchema<unknown, Inline377> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline377Schema))),
  type: v.optional(v.string()),
});

export type Inline379 = {
  readonly budgetRule?: Inline379;
};
export const Inline379Schema: v.GenericSchema<unknown, Inline379> = v.looseObject({
  budgetRule: v.optional(v.lazy(() => Inline379Schema)),
});

export type Inline38 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline38Schema: v.GenericSchema<unknown, Inline38> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline380 = {
  readonly dateRangeTypeRuleDuration?: Inline380;
  readonly eventTypeRuleDuration?: Inline381;
};
export const Inline380Schema: v.GenericSchema<unknown, Inline380> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline380Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline381Schema)),
});

export type Inline381 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline381Schema: v.GenericSchema<unknown, Inline381> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline382 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline382Schema: v.GenericSchema<unknown, Inline382> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline383 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline383>;
  readonly type?: string;
};
export const Inline383Schema: v.GenericSchema<unknown, Inline383> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline383Schema))),
  type: v.optional(v.string()),
});

export type Inline386 = {
  readonly associatedCampaigns?: ReadonlyArray<Inline386>;
  readonly nextToken?: string;
};
export const Inline386Schema: v.GenericSchema<unknown, Inline386> = v.looseObject({
  associatedCampaigns: v.optional(v.array(v.lazy(() => Inline386Schema))),
  nextToken: v.optional(v.string()),
});

export type Inline389 = {
  readonly associatedRules?: ReadonlyArray<Inline389>;
};
export const Inline389Schema: v.GenericSchema<unknown, Inline389> = v.looseObject({
  associatedRules: v.optional(v.array(v.lazy(() => Inline389Schema))),
});

export type Inline39 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline39>;
  readonly type?: string;
};
export const Inline39Schema: v.GenericSchema<unknown, Inline39> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline39Schema))),
  type: v.optional(v.string()),
});

export type Inline390 = {
  readonly dateRangeTypeRuleDuration?: Inline390;
  readonly eventTypeRuleDuration?: Inline391;
};
export const Inline390Schema: v.GenericSchema<unknown, Inline390> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline390Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline391Schema)),
});

export type Inline391 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline391Schema: v.GenericSchema<unknown, Inline391> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline392 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline392Schema: v.GenericSchema<unknown, Inline392> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline393 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline393>;
  readonly type?: string;
};
export const Inline393Schema: v.GenericSchema<unknown, Inline393> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline393Schema))),
  type: v.optional(v.string()),
});

export type Inline398 = {

};
export const Inline398Schema: v.GenericSchema<unknown, Inline398> = v.looseObject({

});

export type Inline405 = {
  readonly recommendations?: ReadonlyArray<Inline405>;
  readonly requestId?: string;
};
export const Inline405Schema: v.GenericSchema<unknown, Inline405> = v.looseObject({
  recommendations: v.optional(v.array(v.lazy(() => Inline405Schema))),
  requestId: v.optional(v.string()),
});

export type Inline408 = {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
};
export const Inline408Schema: v.GenericSchema<unknown, Inline408> = v.looseObject({
  expiration: v.optional(v.number()),
  fileSize: v.optional(v.number()),
  location: v.optional(v.string()),
  recordType: v.optional(v.string()),
  snapshotId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
});

export type Inline411 = {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
};
export const Inline411Schema: v.GenericSchema<unknown, Inline411> = v.looseObject({
  expiration: v.optional(v.number()),
  fileSize: v.optional(v.number()),
  location: v.optional(v.string()),
  recordType: v.optional(v.string()),
  snapshotId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
});

export type Inline413 = {
  readonly asin: string;
};
export const Inline413Schema: v.GenericSchema<unknown, Inline413> = v.looseObject({
  asin: v.string(),
});

export type Inline414 = {
  readonly targetingClause: Inline414;
};
export const Inline414Schema: v.GenericSchema<unknown, Inline414> = v.looseObject({
  targetingClause: v.lazy(() => Inline414Schema),
});

export type Inline415 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline415>;
};
export const Inline415Schema: v.GenericSchema<unknown, Inline415> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline415Schema)),
});

export type Inline418 = {
  readonly asin: string;
};
export const Inline418Schema: v.GenericSchema<unknown, Inline418> = v.looseObject({
  asin: v.string(),
});

export type Inline419 = {
  readonly targetingClause: Inline419;
};
export const Inline419Schema: v.GenericSchema<unknown, Inline419> = v.looseObject({
  targetingClause: v.lazy(() => Inline419Schema),
});

export type Inline420 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline420>;
};
export const Inline420Schema: v.GenericSchema<unknown, Inline420> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline420Schema)),
});

export type Inline421 = {
  readonly asin: string;
};
export const Inline421Schema: v.GenericSchema<unknown, Inline421> = v.looseObject({
  asin: v.string(),
});

export type Inline423 = {
  readonly recommendations?: Inline423;
};
export const Inline423Schema: v.GenericSchema<unknown, Inline423> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline423Schema)),
});

export type Inline425 = {
  readonly asin: string;
};
export const Inline425Schema: v.GenericSchema<unknown, Inline425> = v.looseObject({
  asin: v.string(),
});

export type Inline46 = {
  readonly endTime?: string;
  readonly startTime?: string;
};
export const Inline46Schema: v.GenericSchema<unknown, Inline46> = v.looseObject({
  endTime: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

export type Inline49 = {
  readonly endDate?: string;
  readonly startDate: string;
};
export const Inline49Schema: v.GenericSchema<unknown, Inline49> = v.looseObject({
  endDate: v.optional(v.string()),
  startDate: v.string(),
});

export type Inline50 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline50Schema: v.GenericSchema<unknown, Inline50> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline57 = {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
};
export const Inline57Schema: v.GenericSchema<unknown, Inline57> = v.looseObject({
  audience: v.optional(v.string()),
  name: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type Inline60 = {
  readonly audiences?: ReadonlyArray<Inline60>;
  readonly category?: string;
};
export const Inline60Schema: v.GenericSchema<unknown, Inline60> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline60Schema))),
  category: v.optional(v.string()),
});

export type Inline69 = {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
};
export const Inline69Schema: v.GenericSchema<unknown, Inline69> = v.looseObject({
  createdAt: v.optional(v.string()),
  domainId: v.optional(v.number()),
  lastModified: v.optional(v.string()),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
  type: v.optional(v.string()),
});

export type Inline70 = {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
};
export const Inline70Schema: v.GenericSchema<unknown, Inline70> = v.looseObject({
  limit: v.optional(v.number()),
  offset: v.optional(v.number()),
  total: v.optional(v.number()),
});

export type Inline73 = {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
};
export const Inline73Schema: v.GenericSchema<unknown, Inline73> = v.looseObject({
  requestId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
  timestamp: v.optional(v.string()),
});

export type Inline75 = {
  readonly name: string;
  readonly type: string;
};
export const Inline75Schema: v.GenericSchema<unknown, Inline75> = v.looseObject({
  name: v.string(),
  type: v.string(),
});

export type Inline78 = {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
};
export const Inline78Schema: v.GenericSchema<unknown, Inline78> = v.looseObject({
  details: v.optional(v.string()),
  domainId: v.optional(v.number()),
  name: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type Inline81 = {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
};
export const Inline81Schema: v.GenericSchema<unknown, Inline81> = v.looseObject({
  requestId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
  timestamp: v.optional(v.string()),
});

export type Inline84 = {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly estimatedMissedViewableImpressionsLower?: number;
  readonly estimatedMissedViewableImpressionsUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
};
export const Inline84Schema: v.GenericSchema<unknown, Inline84> = v.looseObject({
  endDate: v.optional(v.string()),
  estimatedMissedClicksLower: v.optional(v.number()),
  estimatedMissedClicksUpper: v.optional(v.number()),
  estimatedMissedImpressionsLower: v.optional(v.number()),
  estimatedMissedImpressionsUpper: v.optional(v.number()),
  estimatedMissedSalesLower: v.optional(v.number()),
  estimatedMissedSalesUpper: v.optional(v.number()),
  estimatedMissedViewableImpressionsLower: v.optional(v.number()),
  estimatedMissedViewableImpressionsUpper: v.optional(v.number()),
  percentTimeInBudget: v.optional(v.number()),
  startDate: v.optional(v.string()),
});

export type Inline88 = {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
};
export const Inline88Schema: v.GenericSchema<unknown, Inline88> = v.looseObject({
  campaignId: v.string(),
  code: v.string(),
  details: v.string(),
  index: v.number(),
});

export type Inline89 = {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline89;
  readonly suggestedBudget: number;
};
export const Inline89Schema: v.GenericSchema<unknown, Inline89> = v.looseObject({
  campaignId: v.string(),
  index: v.number(),
  sevenDaysMissedOpportunities: v.lazy(() => Inline89Schema),
  suggestedBudget: v.number(),
});

export type Inline9 = {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
};
export const Inline9Schema: v.GenericSchema<unknown, Inline9> = v.looseObject({
  campaignId: v.optional(v.string()),
  code: v.optional(v.string()),
  details: v.optional(v.string()),
  index: v.optional(v.number()),
});

export type Inline91 = {
  readonly budgetIncreaseBy?: Inline91;
  readonly duration?: Inline92;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline94;
  readonly recurrence?: Inline95;
  readonly ruleType?: string;
};
export const Inline91Schema: v.GenericSchema<unknown, Inline91> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline91Schema)),
  duration: v.optional(v.lazy(() => Inline92Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline94Schema)),
  recurrence: v.optional(v.lazy(() => Inline95Schema)),
  ruleType: v.optional(v.string()),
});

export type Inline92 = {
  readonly dateRangeTypeRuleDuration?: Inline92;
  readonly eventTypeRuleDuration?: Inline93;
};
export const Inline92Schema: v.GenericSchema<unknown, Inline92> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline92Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline93Schema)),
});

export type Inline93 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline93Schema: v.GenericSchema<unknown, Inline93> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type Inline94 = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const Inline94Schema: v.GenericSchema<unknown, Inline94> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type Inline95 = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline95>;
  readonly type?: string;
};
export const Inline95Schema: v.GenericSchema<unknown, Inline95> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline95Schema))),
  type: v.optional(v.string()),
});

export type Inline97 = {
  readonly type: string;
  readonly value: number;
};
export const Inline97Schema: v.GenericSchema<unknown, Inline97> = v.looseObject({
  type: v.string(),
  value: v.number(),
});

export type Inline98 = {
  readonly dateRangeTypeRuleDuration?: Inline98;
  readonly eventTypeRuleDuration?: Inline99;
};
export const Inline98Schema: v.GenericSchema<unknown, Inline98> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline98Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline99Schema)),
});

export type Inline99 = {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
};
export const Inline99Schema: v.GenericSchema<unknown, Inline99> = v.looseObject({
  endDate: v.optional(v.string()),
  eventId: v.string(),
  eventName: v.optional(v.string()),
  startDate: v.optional(v.string()),
});

export type ListAssociatedBudgetRulesForSDCampaignsParams = {
  readonly campaignId: number;
};
export const ListAssociatedBudgetRulesForSDCampaignsParamsSchema: v.GenericSchema<unknown, ListAssociatedBudgetRulesForSDCampaignsParams> = v.looseObject({
  campaignId: v.number(),
});

export type ListAssociatedBudgetRulesForSDCampaignsResponse = {
  readonly data: Inline389;
};
export const ListAssociatedBudgetRulesForSDCampaignsResponseSchema: v.GenericSchema<unknown, ListAssociatedBudgetRulesForSDCampaignsResponse> = v.looseObject({
  data: v.lazy(() => Inline389Schema),
});

export type ListDomainsParams = {
  readonly startIndex?: number;
  readonly count?: number;
};
export const ListDomainsParamsSchema: v.GenericSchema<unknown, ListDomainsParams> = v.looseObject({
  startIndex: v.optional(v.number()),
  count: v.optional(v.number()),
});

export type ListDomainsResponse = {
  readonly data: Inline342;
};
export const ListDomainsResponseSchema: v.GenericSchema<unknown, ListDomainsResponse> = v.looseObject({
  data: v.lazy(() => Inline342Schema),
});

export type ListRequestStatusParams = {

};
export const ListRequestStatusParamsSchema: v.GenericSchema<unknown, ListRequestStatusParams> = v.looseObject({

});

export type ListRequestStatusResponse = {
  readonly data: Inline351;
};
export const ListRequestStatusResponseSchema: v.GenericSchema<unknown, ListRequestStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline351Schema),
});

export type LocationExpression = {
  readonly type?: string;
  readonly value?: string;
};
export const LocationExpressionSchema: v.GenericSchema<unknown, LocationExpression> = v.looseObject({
  type: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type LocationPredicate = "location" | string;
export const LocationPredicateSchema: v.GenericSchema<unknown, LocationPredicate> = v.union([v.picklist(["location"]), v.string()]);

export type PerformanceMeasureCondition = {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
};
export const PerformanceMeasureConditionSchema: v.GenericSchema<unknown, PerformanceMeasureCondition> = v.looseObject({
  comparisonOperator: v.string(),
  metricName: v.string(),
  threshold: v.number(),
});

export type PerformanceMetric = "ACOS" | "CTR" | "CVR" | "ROAS" | string;
export const PerformanceMetricSchema: v.GenericSchema<unknown, PerformanceMetric> = v.union([v.picklist(["ACOS", "CTR", "CVR", "ROAS"]), v.string()]);

export type RecommendedHeadline = {
  readonly headline?: string;
  readonly headlineId?: string;
};
export const RecommendedHeadlineSchema: v.GenericSchema<unknown, RecommendedHeadline> = v.looseObject({
  headline: v.optional(v.string()),
  headlineId: v.optional(v.string()),
});

export type Recurrence = {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline46>;
  readonly type?: string;
};
export const RecurrenceSchema: v.GenericSchema<unknown, Recurrence> = v.looseObject({
  daysOfWeek: v.optional(v.array(v.string())),
  intraDaySchedule: v.optional(v.array(v.lazy(() => Inline46Schema))),
  type: v.optional(v.string()),
});

export type RecurrenceType = "DAILY" | "WEEKLY" | string;
export const RecurrenceTypeSchema: v.GenericSchema<unknown, RecurrenceType> = v.union([v.picklist(["DAILY", "WEEKLY"]), v.string()]);

export type RuleDuration = {
  readonly dateRangeTypeRuleDuration?: Inline49;
  readonly eventTypeRuleDuration?: Inline50;
};
export const RuleDurationSchema: v.GenericSchema<unknown, RuleDuration> = v.looseObject({
  dateRangeTypeRuleDuration: v.optional(v.lazy(() => Inline49Schema)),
  eventTypeRuleDuration: v.optional(v.lazy(() => Inline50Schema)),
});

export type SDAdvertisedProduct = {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
};
export const SDAdvertisedProductSchema: v.GenericSchema<unknown, SDAdvertisedProduct> = v.looseObject({
  asin: v.optional(v.string()),
  landingPageType: v.optional(v.string()),
  landingPageURL: v.optional(v.string()),
});

export type SDAPIError = {
  readonly code?: string;
  readonly details?: string;
};
export const SDAPIErrorSchema: v.GenericSchema<unknown, SDAPIError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDASIN = string;
export const SDASINSchema: v.GenericSchema<unknown, SDASIN> = v.string();

export type SDAudience = string;
export const SDAudienceSchema: v.GenericSchema<unknown, SDAudience> = v.string();

export type SDAudienceCategory = "In-market" | "Interest" | "Life event" | "Lifestyle" | string;
export const SDAudienceCategorySchema: v.GenericSchema<unknown, SDAudienceCategory> = v.union([v.picklist(["In-market", "Interest", "Life event", "Lifestyle"]), v.string()]);

export type SDAudienceCategoryRecommendations = {
  readonly audiences?: ReadonlyArray<Inline57>;
  readonly category?: string;
};
export const SDAudienceCategoryRecommendationsSchema: v.GenericSchema<unknown, SDAudienceCategoryRecommendations> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline57Schema))),
  category: v.optional(v.string()),
});

export type SDAudienceRecommendation = {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
};
export const SDAudienceRecommendationSchema: v.GenericSchema<unknown, SDAudienceRecommendation> = v.looseObject({
  audience: v.optional(v.string()),
  name: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type SDAudienceRecommendations = {
  readonly audiences?: ReadonlyArray<Inline60>;
};
export const SDAudienceRecommendationsSchema: v.GenericSchema<unknown, SDAudienceRecommendations> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline60Schema))),
});

export type SDBidOptimizationV32 = "clicks" | "conversions" | "reach" | string;
export const SDBidOptimizationV32Schema: v.GenericSchema<unknown, SDBidOptimizationV32> = v.union([v.picklist(["clicks", "conversions", "reach"]), v.string()]);

export type SDBidRecommendationV31 = {
  readonly rangeLower: number;
  readonly rangeUpper: number;
  readonly recommended: number;
};
export const SDBidRecommendationV31Schema: v.GenericSchema<unknown, SDBidRecommendationV31> = v.looseObject({
  rangeLower: v.number(),
  rangeUpper: v.number(),
  recommended: v.number(),
});

export type SDBrandSafetyDenyListDomain = {
  readonly name: string;
  readonly type: string;
};
export const SDBrandSafetyDenyListDomainSchema: v.GenericSchema<unknown, SDBrandSafetyDenyListDomain> = v.looseObject({
  name: v.string(),
  type: v.string(),
});

export type SDBrandSafetyDenyListDomainState = "ARCHIVED" | "ENABLED" | string;
export const SDBrandSafetyDenyListDomainStateSchema: v.GenericSchema<unknown, SDBrandSafetyDenyListDomainState> = v.union([v.picklist(["ARCHIVED", "ENABLED"]), v.string()]);

export type SDBrandSafetyDenyListDomainType = "APP" | "CREATOR" | "WEBSITE" | string;
export const SDBrandSafetyDenyListDomainTypeSchema: v.GenericSchema<unknown, SDBrandSafetyDenyListDomainType> = v.union([v.picklist(["APP", "CREATOR", "WEBSITE"]), v.string()]);

export type SDBrandSafetyDenyListDomainUpdateResultStatus = "FAILURE" | "SUCCESS" | string;
export const SDBrandSafetyDenyListDomainUpdateResultStatusSchema: v.GenericSchema<unknown, SDBrandSafetyDenyListDomainUpdateResultStatus> = v.union([v.picklist(["FAILURE", "SUCCESS"]), v.string()]);

export type SDBrandSafetyDenyListProcessedDomain = {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
};
export const SDBrandSafetyDenyListProcessedDomainSchema: v.GenericSchema<unknown, SDBrandSafetyDenyListProcessedDomain> = v.looseObject({
  createdAt: v.optional(v.string()),
  domainId: v.optional(v.number()),
  lastModified: v.optional(v.string()),
  name: v.optional(v.string()),
  state: v.optional(v.string()),
  type: v.optional(v.string()),
});

export type SDBrandSafetyGetResponse = {
  readonly domains?: ReadonlyArray<Inline69>;
  readonly pagination?: Inline70;
};
export const SDBrandSafetyGetResponseSchema: v.GenericSchema<unknown, SDBrandSafetyGetResponse> = v.looseObject({
  domains: v.optional(v.array(v.lazy(() => Inline69Schema))),
  pagination: v.optional(v.lazy(() => Inline70Schema)),
});

export type SDBrandSafetyGetResponsePagination = {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
};
export const SDBrandSafetyGetResponsePaginationSchema: v.GenericSchema<unknown, SDBrandSafetyGetResponsePagination> = v.looseObject({
  limit: v.optional(v.number()),
  offset: v.optional(v.number()),
  total: v.optional(v.number()),
});

export type SDBrandSafetyListRequestStatusResponse = {
  readonly requestStatusList?: ReadonlyArray<Inline73>;
};
export const SDBrandSafetyListRequestStatusResponseSchema: v.GenericSchema<unknown, SDBrandSafetyListRequestStatusResponse> = v.looseObject({
  requestStatusList: v.optional(v.array(v.lazy(() => Inline73Schema))),
});

export type SDBrandSafetyPostRequest = {
  readonly domains: ReadonlyArray<Inline75>;
};
export const SDBrandSafetyPostRequestSchema: v.GenericSchema<unknown, SDBrandSafetyPostRequest> = v.looseObject({
  domains: v.array(v.lazy(() => Inline75Schema)),
});

export type SDBrandSafetyRequestResult = {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
};
export const SDBrandSafetyRequestResultSchema: v.GenericSchema<unknown, SDBrandSafetyRequestResult> = v.looseObject({
  details: v.optional(v.string()),
  domainId: v.optional(v.number()),
  name: v.optional(v.string()),
  status: v.optional(v.string()),
});

export type SDBrandSafetyRequestResultsResponse = {
  readonly results?: ReadonlyArray<Inline78>;
};
export const SDBrandSafetyRequestResultsResponseSchema: v.GenericSchema<unknown, SDBrandSafetyRequestResultsResponse> = v.looseObject({
  results: v.optional(v.array(v.lazy(() => Inline78Schema))),
});

export type SDBrandSafetyRequestStatus = {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
};
export const SDBrandSafetyRequestStatusSchema: v.GenericSchema<unknown, SDBrandSafetyRequestStatus> = v.looseObject({
  requestId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
  timestamp: v.optional(v.string()),
});

export type SDBrandSafetyRequestStatusResponse = {
  readonly requestStatus?: Inline81;
};
export const SDBrandSafetyRequestStatusResponseSchema: v.GenericSchema<unknown, SDBrandSafetyRequestStatusResponse> = v.looseObject({
  requestStatus: v.optional(v.lazy(() => Inline81Schema)),
});

export type SDBrandSafetyUpdateResponse = {
  readonly requestId?: string;
};
export const SDBrandSafetyUpdateResponseSchema: v.GenericSchema<unknown, SDBrandSafetyUpdateResponse> = v.looseObject({
  requestId: v.optional(v.string()),
});

export type SDBudgetRecommendation = {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline84;
  readonly suggestedBudget: number;
};
export const SDBudgetRecommendationSchema: v.GenericSchema<unknown, SDBudgetRecommendation> = v.looseObject({
  campaignId: v.string(),
  index: v.number(),
  sevenDaysMissedOpportunities: v.lazy(() => Inline84Schema),
  suggestedBudget: v.number(),
});

export type SDBudgetRecommendationError = {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
};
export const SDBudgetRecommendationErrorSchema: v.GenericSchema<unknown, SDBudgetRecommendationError> = v.looseObject({
  campaignId: v.string(),
  code: v.string(),
  details: v.string(),
  index: v.number(),
});

export type SDBudgetRecommendationsRequest = {
  readonly campaignIds: ReadonlyArray<string>;
};
export const SDBudgetRecommendationsRequestSchema: v.GenericSchema<unknown, SDBudgetRecommendationsRequest> = v.looseObject({
  campaignIds: v.array(v.string()),
});

export type SDBudgetRecommendationsResponse = {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline88>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline89>;
};
export const SDBudgetRecommendationsResponseSchema: v.GenericSchema<unknown, SDBudgetRecommendationsResponse> = v.looseObject({
  budgetRecommendationsErrorResults: v.array(v.lazy(() => Inline88Schema)),
  budgetRecommendationsSuccessResults: v.array(v.lazy(() => Inline89Schema)),
});

export type SDBudgetRule = {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline91;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
};
export const SDBudgetRuleSchema: v.GenericSchema<unknown, SDBudgetRule> = v.looseObject({
  createdDate: v.optional(v.number()),
  lastUpdatedDate: v.optional(v.number()),
  ruleDetails: v.optional(v.lazy(() => Inline91Schema)),
  ruleId: v.string(),
  ruleState: v.optional(v.string()),
  ruleStatus: v.optional(v.string()),
});

export type SDBudgetRuleDetails = {
  readonly budgetIncreaseBy?: Inline97;
  readonly duration?: Inline98;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline100;
  readonly recurrence?: Inline101;
  readonly ruleType?: string;
};
export const SDBudgetRuleDetailsSchema: v.GenericSchema<unknown, SDBudgetRuleDetails> = v.looseObject({
  budgetIncreaseBy: v.optional(v.lazy(() => Inline97Schema)),
  duration: v.optional(v.lazy(() => Inline98Schema)),
  name: v.optional(v.string()),
  performanceMeasureCondition: v.optional(v.lazy(() => Inline100Schema)),
  recurrence: v.optional(v.lazy(() => Inline101Schema)),
  ruleType: v.optional(v.string()),
});

export type SdCampaignsBudgetUsageParams = {
  readonly campaignIds?: ReadonlyArray<string>;
};
export const SdCampaignsBudgetUsageParamsSchema: v.GenericSchema<unknown, SdCampaignsBudgetUsageParams> = v.looseObject({
  campaignIds: v.optional(v.array(v.string())),
});

export type SdCampaignsBudgetUsageResponse = {

};
export const SdCampaignsBudgetUsageResponseSchema: v.GenericSchema<unknown, SdCampaignsBudgetUsageResponse> = v.looseObject({

});

export type SDCategory = number;
export const SDCategorySchema: v.GenericSchema<unknown, SDCategory> = v.number();

export type SDCategoryRecommendation = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline104;
};
export const SDCategoryRecommendationSchema: v.GenericSchema<unknown, SDCategoryRecommendation> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline104Schema)),
});

export type SDCategoryRecommendations = {
  readonly categories?: ReadonlyArray<Inline106>;
};
export const SDCategoryRecommendationsSchema: v.GenericSchema<unknown, SDCategoryRecommendations> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => Inline106Schema))),
});

export type SDCategoryRecommendationsV33 = {
  readonly categories?: ReadonlyArray<Inline108>;
};
export const SDCategoryRecommendationsV33Schema: v.GenericSchema<unknown, SDCategoryRecommendationsV33> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => Inline108Schema))),
});

export type SDCategoryRecommendationV33 = {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline110;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
};
export const SDCategoryRecommendationV33Schema: v.GenericSchema<unknown, SDCategoryRecommendationV33> = v.looseObject({
  category: v.optional(v.number()),
  name: v.optional(v.string()),
  path: v.optional(v.array(v.string())),
  rank: v.optional(v.number()),
  targetableAsinCountRange: v.optional(v.lazy(() => Inline110Schema)),
  translatedName: v.optional(v.string()),
  translatedPath: v.optional(v.array(v.string())),
});

export type SDContentCategory = string;
export const SDContentCategorySchema: v.GenericSchema<unknown, SDContentCategory> = v.string();

export type SDContentCategoryRecommendations = {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
};
export const SDContentCategoryRecommendationsSchema: v.GenericSchema<unknown, SDContentCategoryRecommendations> = v.looseObject({
  contentCategory: v.optional(v.string()),
  name: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type SDContentTargetingPredicateV31 = {
  readonly type: string;
  readonly value: string;
};
export const SDContentTargetingPredicateV31Schema: v.GenericSchema<unknown, SDContentTargetingPredicateV31> = v.looseObject({
  type: v.string(),
  value: v.string(),
});

export type SDCostTypeV31 = "cpc" | "vcpm" | string;
export const SDCostTypeV31Schema: v.GenericSchema<unknown, SDCostTypeV31> = v.union([v.picklist(["cpc", "vcpm"]), v.string()]);

export type SDCreativeType = "IMAGE" | "VIDEO" | string;
export const SDCreativeTypeSchema: v.GenericSchema<unknown, SDCreativeType> = v.union([v.picklist(["IMAGE", "VIDEO"]), v.string()]);

export type SdDefaultError = {
  readonly code?: string;
  readonly details?: string;
};
export const SdDefaultErrorSchema: v.GenericSchema<unknown, SdDefaultError> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDErrorResponse = {
  readonly code?: string;
  readonly details?: string;
};
export const SDErrorResponseSchema: v.GenericSchema<unknown, SDErrorResponse> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDGetAssociatedCampaignsResponse = {
  readonly associatedCampaigns?: ReadonlyArray<Inline119>;
  readonly nextToken?: string;
};
export const SDGetAssociatedCampaignsResponseSchema: v.GenericSchema<unknown, SDGetAssociatedCampaignsResponse> = v.looseObject({
  associatedCampaigns: v.optional(v.array(v.lazy(() => Inline119Schema))),
  nextToken: v.optional(v.string()),
});

export type SDGoalProduct = {
  readonly asin: string;
};
export const SDGoalProductSchema: v.GenericSchema<unknown, SDGoalProduct> = v.looseObject({
  asin: v.string(),
});

export type SDHeadlineRecommendationAccessDeniedException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationAccessDeniedExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationAccessDeniedException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDHeadlineRecommendationIdentifierNotfoundException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationIdentifierNotfoundExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationIdentifierNotfoundException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDHeadlineRecommendationInternalServerException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationInternalServerExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationInternalServerException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDHeadlineRecommendationMarsThrottlingException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationMarsThrottlingExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationMarsThrottlingException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDHeadlineRecommendationNotAcceptableException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationNotAcceptableExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationNotAcceptableException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDHeadlineRecommendationRequest = {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
};
export const SDHeadlineRecommendationRequestSchema: v.GenericSchema<unknown, SDHeadlineRecommendationRequest> = v.looseObject({
  adFormat: v.optional(v.string()),
  asins: v.optional(v.array(v.string())),
  maxNumRecommendations: v.optional(v.number()),
});

export type SDHeadlineRecommendationResponse = {
  readonly recommendations?: ReadonlyArray<Inline128>;
  readonly requestId?: string;
};
export const SDHeadlineRecommendationResponseSchema: v.GenericSchema<unknown, SDHeadlineRecommendationResponse> = v.looseObject({
  recommendations: v.optional(v.array(v.lazy(() => Inline128Schema))),
  requestId: v.optional(v.string()),
});

export type SDHeadlineRecommendationSchemaValidationException = {
  readonly code?: string;
  readonly details?: string;
};
export const SDHeadlineRecommendationSchemaValidationExceptionSchema: v.GenericSchema<unknown, SDHeadlineRecommendationSchemaValidationException> = v.looseObject({
  code: v.optional(v.string()),
  details: v.optional(v.string()),
});

export type SDLandingPageType = "OFF_AMAZON_LINK" | string;
export const SDLandingPageTypeSchema: v.GenericSchema<unknown, SDLandingPageType> = v.union([v.picklist(["OFF_AMAZON_LINK"]), v.string()]);

export type SDLandingPageURL = string;
export const SDLandingPageURLSchema: v.GenericSchema<unknown, SDLandingPageURL> = v.string();

export type SDListAssociatedBudgetRulesResponse = {
  readonly associatedRules?: ReadonlyArray<Inline133>;
};
export const SDListAssociatedBudgetRulesResponseSchema: v.GenericSchema<unknown, SDListAssociatedBudgetRulesResponse> = v.looseObject({
  associatedRules: v.optional(v.array(v.lazy(() => Inline133Schema))),
});

export type SDLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export const SDLocaleSchema: v.GenericSchema<unknown, SDLocale> = v.union([v.picklist(["ar_AE", "de_DE", "en_AE", "en_AU", "en_CA", "en_GB", "en_IN", "en_SG", "en_US", "es_ES", "es_MX", "fr_CA", "fr_FR", "hi_IN", "it_IT", "ja_JP", "ko_KR", "nl_NL", "pl_PL", "pt_BR", "sv_SE", "ta_IN", "th_TH", "tr_TR", "vi_VN", "zh_CN"]), v.string()]);

export type SDProductRecommendation = {
  readonly asin?: string;
  readonly rank?: number;
};
export const SDProductRecommendationSchema: v.GenericSchema<unknown, SDProductRecommendation> = v.looseObject({
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type SDProductRecommendationsV31 = {
  readonly products?: ReadonlyArray<Inline141>;
};
export const SDProductRecommendationsV31Schema: v.GenericSchema<unknown, SDProductRecommendationsV31> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline141Schema))),
});

export type SDProductRecommendationsV32 = {
  readonly products?: ReadonlyArray<Inline143>;
};
export const SDProductRecommendationsV32Schema: v.GenericSchema<unknown, SDProductRecommendationsV32> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline143Schema))),
});

export type SDProductRecommendationV32 = {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
};
export const SDProductRecommendationV32Schema: v.GenericSchema<unknown, SDProductRecommendationV32> = v.looseObject({
  advertisedAsins: v.optional(v.array(v.string())),
  asin: v.optional(v.string()),
  rank: v.optional(v.number()),
});

export type SDProductTargetingRecommendationsSuccess = {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline146>;
};
export const SDProductTargetingRecommendationsSuccessSchema: v.GenericSchema<unknown, SDProductTargetingRecommendationsSuccess> = v.looseObject({
  code: v.optional(v.string()),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline146Schema))),
});

export type SDProductTargetingRecommendationsSuccessV34 = {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline148>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline149>;
};
export const SDProductTargetingRecommendationsSuccessV34Schema: v.GenericSchema<unknown, SDProductTargetingRecommendationsSuccessV34> = v.looseObject({
  code: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline148Schema))),
  name: v.optional(v.string()),
  recommendations: v.optional(v.array(v.lazy(() => Inline149Schema))),
});

export type SDProductTargetingTheme = {
  readonly expression: ReadonlyArray<Inline151>;
  readonly name: string;
};
export const SDProductTargetingThemeSchema: v.GenericSchema<unknown, SDProductTargetingTheme> = v.looseObject({
  expression: v.array(v.lazy(() => Inline151Schema)),
  name: v.string(),
});

export type SDProductTargetingThemeExpression = {
  readonly type: string;
};
export const SDProductTargetingThemeExpressionSchema: v.GenericSchema<unknown, SDProductTargetingThemeExpression> = v.looseObject({
  type: v.string(),
});

export type SDProductThemeRecommendations = ReadonlyArray<Inline154 | Inline155>;
export const SDProductThemeRecommendationsSchema: v.GenericSchema<unknown, SDProductThemeRecommendations> = v.array(v.union([v.lazy(() => Inline154Schema), v.lazy(() => Inline155Schema)]));

export type SDProductThemeRecommendationsV34 = ReadonlyArray<Inline157 | Inline159>;
export const SDProductThemeRecommendationsV34Schema: v.GenericSchema<unknown, SDProductThemeRecommendationsV34> = v.array(v.union([v.lazy(() => Inline157Schema), v.lazy(() => Inline159Schema)]));

export type SDRecommendationType = "PRODUCT" | string;
export const SDRecommendationTypeSchema: v.GenericSchema<unknown, SDRecommendationType> = v.union([v.picklist(["PRODUCT"]), v.string()]);

export type SDRecommendationTypeV31 = "CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV31Schema: v.GenericSchema<unknown, SDRecommendationTypeV31> = v.union([v.picklist(["CATEGORY", "PRODUCT"]), v.string()]);

export type SDRecommendationTypeV32 = "AUDIENCE" | "CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV32Schema: v.GenericSchema<unknown, SDRecommendationTypeV32> = v.union([v.picklist(["AUDIENCE", "CATEGORY", "PRODUCT"]), v.string()]);

export type SDRecommendationTypeV33 = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV33Schema: v.GenericSchema<unknown, SDRecommendationTypeV33> = v.union([v.picklist(["AUDIENCE", "CATEGORY", "CONTENT_CATEGORY", "PRODUCT"]), v.string()]);

export type SDRuleType = "PERFORMANCE" | "SCHEDULE" | string;
export const SDRuleTypeSchema: v.GenericSchema<unknown, SDRuleType> = v.union([v.picklist(["PERFORMANCE", "SCHEDULE"]), v.string()]);

export type SDSevenDaysMissedOpportunities = {
  readonly endDate?: string;
  readonly estimatedMissedClicksLower?: number;
  readonly estimatedMissedClicksUpper?: number;
  readonly estimatedMissedImpressionsLower?: number;
  readonly estimatedMissedImpressionsUpper?: number;
  readonly estimatedMissedSalesLower?: number;
  readonly estimatedMissedSalesUpper?: number;
  readonly estimatedMissedViewableImpressionsLower?: number;
  readonly estimatedMissedViewableImpressionsUpper?: number;
  readonly percentTimeInBudget?: number;
  readonly startDate?: string;
};
export const SDSevenDaysMissedOpportunitiesSchema: v.GenericSchema<unknown, SDSevenDaysMissedOpportunities> = v.looseObject({
  endDate: v.optional(v.string()),
  estimatedMissedClicksLower: v.optional(v.number()),
  estimatedMissedClicksUpper: v.optional(v.number()),
  estimatedMissedImpressionsLower: v.optional(v.number()),
  estimatedMissedImpressionsUpper: v.optional(v.number()),
  estimatedMissedSalesLower: v.optional(v.number()),
  estimatedMissedSalesUpper: v.optional(v.number()),
  estimatedMissedViewableImpressionsLower: v.optional(v.number()),
  estimatedMissedViewableImpressionsUpper: v.optional(v.number()),
  percentTimeInBudget: v.optional(v.number()),
  startDate: v.optional(v.string()),
});

export type SDTactic = "T00001" | "T00010" | "T00020" | "remarketing" | string;
export const SDTacticSchema: v.GenericSchema<unknown, SDTactic> = v.union([v.picklist(["T00001", "T00010", "T00020", "remarketing"]), v.string()]);

export type SDTacticV31 = "T00001" | "T00010" | "T00020" | "T00030" | "remarketing" | string;
export const SDTacticV31Schema: v.GenericSchema<unknown, SDTacticV31> = v.union([v.picklist(["T00001", "T00010", "T00020", "T00030", "remarketing"]), v.string()]);

export type SDTargetExpressionV31 = Inline169 | Inline170;
export const SDTargetExpressionV31Schema: v.GenericSchema<unknown, SDTargetExpressionV31> = v.union([v.lazy(() => Inline169Schema), v.lazy(() => Inline170Schema)]);

export type SDTargetExpressionV32 = Inline172 | Inline173 | Inline174;
export const SDTargetExpressionV32Schema: v.GenericSchema<unknown, SDTargetExpressionV32> = v.union([v.lazy(() => Inline172Schema), v.lazy(() => Inline173Schema), v.lazy(() => Inline174Schema)]);

export type SDTargetingBidRecommendationsRequestV31 = {
  readonly products?: ReadonlyArray<Inline176>;
  readonly targetingClauses: ReadonlyArray<Inline177>;
};
export const SDTargetingBidRecommendationsRequestV31Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsRequestV31> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline176Schema))),
  targetingClauses: v.array(v.lazy(() => Inline177Schema)),
});

export type SDTargetingBidRecommendationsRequestV32 = {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly products?: ReadonlyArray<Inline180>;
  readonly targetingClauses: ReadonlyArray<Inline181>;
};
export const SDTargetingBidRecommendationsRequestV32Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsRequestV32> = v.looseObject({
  bidOptimization: v.string(),
  costType: v.string(),
  products: v.optional(v.array(v.lazy(() => Inline180Schema))),
  targetingClauses: v.array(v.lazy(() => Inline181Schema)),
});

export type SDTargetingBidRecommendationsRequestV33 = {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline184>;
  readonly targetingClauses: ReadonlyArray<Inline185>;
};
export const SDTargetingBidRecommendationsRequestV33Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsRequestV33> = v.looseObject({
  bidOptimization: v.string(),
  costType: v.string(),
  creativeType: v.optional(v.string()),
  products: v.optional(v.array(v.lazy(() => Inline184Schema))),
  targetingClauses: v.array(v.lazy(() => Inline185Schema)),
});

export type SDTargetingBidRecommendationsRequestV34 = {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline188>;
  readonly targetingClauses: ReadonlyArray<Inline189>;
};
export const SDTargetingBidRecommendationsRequestV34Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsRequestV34> = v.looseObject({
  bidOptimization: v.string(),
  costType: v.string(),
  creativeType: v.optional(v.string()),
  products: v.optional(v.array(v.lazy(() => Inline188Schema))),
  targetingClauses: v.array(v.lazy(() => Inline189Schema)),
});

export type SDTargetingBidRecommendationsResponseItemFailureV31 = {
  readonly code: string;
  readonly details: string;
};
export const SDTargetingBidRecommendationsResponseItemFailureV31Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsResponseItemFailureV31> = v.looseObject({
  code: v.string(),
  details: v.string(),
});

export type SDTargetingBidRecommendationsResponseItemSuccessV31 = {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
};
export const SDTargetingBidRecommendationsResponseItemSuccessV31Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsResponseItemSuccessV31> = v.looseObject({
  code: v.string(),
  rangeLower: v.optional(v.number()),
  rangeUpper: v.optional(v.number()),
  recommended: v.optional(v.number()),
});

export type SDTargetingBidRecommendationsResponseV31 = {
  readonly bidRecommendations: ReadonlyArray<Inline195 | Inline196>;
  readonly costType: string;
};
export const SDTargetingBidRecommendationsResponseV31Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsResponseV31> = v.looseObject({
  bidRecommendations: v.array(v.union([v.lazy(() => Inline195Schema), v.lazy(() => Inline196Schema)])),
  costType: v.string(),
});

export type SDTargetingBidRecommendationsResponseV32 = {
  readonly bidOptimization: string;
  readonly bidRecommendations: ReadonlyArray<Inline198 | Inline199>;
  readonly costType: string;
};
export const SDTargetingBidRecommendationsResponseV32Schema: v.GenericSchema<unknown, SDTargetingBidRecommendationsResponseV32> = v.looseObject({
  bidOptimization: v.string(),
  bidRecommendations: v.array(v.union([v.lazy(() => Inline198Schema), v.lazy(() => Inline199Schema)])),
  costType: v.string(),
});

export type SDTargetingClauseV31 = {
  readonly expression: ReadonlyArray<Inline201 | Inline202>;
  readonly expressionType: string;
};
export const SDTargetingClauseV31Schema: v.GenericSchema<unknown, SDTargetingClauseV31> = v.looseObject({
  expression: v.array(v.union([v.lazy(() => Inline201Schema), v.lazy(() => Inline202Schema)])),
  expressionType: v.string(),
});

export type SDTargetingClauseV32 = {
  readonly expression: ReadonlyArray<Inline204 | Inline205 | Inline206>;
  readonly expressionType: string;
};
export const SDTargetingClauseV32Schema: v.GenericSchema<unknown, SDTargetingClauseV32> = v.looseObject({
  expression: v.array(v.union([v.lazy(() => Inline204Schema), v.lazy(() => Inline205Schema), v.lazy(() => Inline206Schema)])),
  expressionType: v.string(),
});

export type SDTargetingExpressionV31 = ReadonlyArray<Inline208 | Inline209>;
export const SDTargetingExpressionV31Schema: v.GenericSchema<unknown, SDTargetingExpressionV31> = v.array(v.union([v.lazy(() => Inline208Schema), v.lazy(() => Inline209Schema)]));

export type SDTargetingExpressionV32 = ReadonlyArray<Inline211 | Inline212 | Inline213>;
export const SDTargetingExpressionV32Schema: v.GenericSchema<unknown, SDTargetingExpressionV32> = v.array(v.union([v.lazy(() => Inline211Schema), v.lazy(() => Inline212Schema), v.lazy(() => Inline213Schema)]));

export type SDTargetingPredicateBaseV31 = {
  readonly type: string;
  readonly value?: string;
};
export const SDTargetingPredicateBaseV31Schema: v.GenericSchema<unknown, SDTargetingPredicateBaseV31> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type SDTargetingPredicateNestedV31 = {
  readonly type: string;
  readonly value: ReadonlyArray<Inline216>;
};
export const SDTargetingPredicateNestedV31Schema: v.GenericSchema<unknown, SDTargetingPredicateNestedV31> = v.looseObject({
  type: v.string(),
  value: v.array(v.lazy(() => Inline216Schema)),
});

export type SDTargetingPredicateV31 = {
  readonly type: string;
  readonly value?: string;
};
export const SDTargetingPredicateV31Schema: v.GenericSchema<unknown, SDTargetingPredicateV31> = v.looseObject({
  type: v.string(),
  value: v.optional(v.string()),
});

export type SDTargetingRecommendations = {
  readonly products?: ReadonlyArray<Inline219>;
};
export const SDTargetingRecommendationsSchema: v.GenericSchema<unknown, SDTargetingRecommendations> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline219Schema))),
});

export type SDTargetingRecommendationsFailure = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
};
export const SDTargetingRecommendationsFailureSchema: v.GenericSchema<unknown, SDTargetingRecommendationsFailure> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type SDTargetingRecommendationsFailureV34 = {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline222>;
  readonly name?: string;
};
export const SDTargetingRecommendationsFailureV34Schema: v.GenericSchema<unknown, SDTargetingRecommendationsFailureV34> = v.looseObject({
  code: v.optional(v.string()),
  errorMessage: v.optional(v.string()),
  expression: v.optional(v.array(v.lazy(() => Inline222Schema))),
  name: v.optional(v.string()),
});

export type SDTargetingRecommendationsProducts = ReadonlyArray<Inline224>;
export const SDTargetingRecommendationsProductsSchema: v.GenericSchema<unknown, SDTargetingRecommendationsProducts> = v.array(v.lazy(() => Inline224Schema));

export type SDTargetingRecommendationsProductsV31 = ReadonlyArray<Inline226>;
export const SDTargetingRecommendationsProductsV31Schema: v.GenericSchema<unknown, SDTargetingRecommendationsProductsV31> = v.array(v.lazy(() => Inline226Schema));

export type SDTargetingRecommendationsRequest = {
  readonly products: ReadonlyArray<Inline228>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestSchema: v.GenericSchema<unknown, SDTargetingRecommendationsRequest> = v.looseObject({
  products: v.array(v.lazy(() => Inline228Schema)),
  tactic: v.string(),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsRequestV31 = {
  readonly products: ReadonlyArray<Inline230>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestV31Schema: v.GenericSchema<unknown, SDTargetingRecommendationsRequestV31> = v.looseObject({
  products: v.array(v.lazy(() => Inline230Schema)),
  tactic: v.string(),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsRequestV32 = {
  readonly products: ReadonlyArray<Inline232>;
  readonly tactic: string;
  readonly themes?: Inline233;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestV32Schema: v.GenericSchema<unknown, SDTargetingRecommendationsRequestV32> = v.looseObject({
  products: v.array(v.lazy(() => Inline232Schema)),
  tactic: v.string(),
  themes: v.optional(v.lazy(() => Inline233Schema)),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsRequestV33 = {
  readonly products: ReadonlyArray<Inline235>;
  readonly tactic: string;
  readonly themes?: Inline236;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestV33Schema: v.GenericSchema<unknown, SDTargetingRecommendationsRequestV33> = v.looseObject({
  products: v.array(v.lazy(() => Inline235Schema)),
  tactic: v.string(),
  themes: v.optional(v.lazy(() => Inline236Schema)),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsRequestV34 = {
  readonly products: ReadonlyArray<Inline238>;
  readonly tactic: string;
  readonly themes?: Inline239;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestV34Schema: v.GenericSchema<unknown, SDTargetingRecommendationsRequestV34> = v.looseObject({
  products: v.array(v.lazy(() => Inline238Schema)),
  tactic: v.string(),
  themes: v.optional(v.lazy(() => Inline239Schema)),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsRequestV35 = {
  readonly categoryType?: string;
  readonly locationExpression?: ReadonlyArray<Inline241>;
  readonly products: ReadonlyArray<Inline242>;
  readonly tactic: string;
  readonly themes?: Inline243;
  readonly typeFilter: ReadonlyArray<string>;
};
export const SDTargetingRecommendationsRequestV35Schema: v.GenericSchema<unknown, SDTargetingRecommendationsRequestV35> = v.looseObject({
  categoryType: v.optional(v.string()),
  locationExpression: v.optional(v.array(v.lazy(() => Inline241Schema))),
  products: v.array(v.lazy(() => Inline242Schema)),
  tactic: v.string(),
  themes: v.optional(v.lazy(() => Inline243Schema)),
  typeFilter: v.array(v.string()),
});

export type SDTargetingRecommendationsResponse = {
  readonly recommendations?: Inline245;
};
export const SDTargetingRecommendationsResponseSchema: v.GenericSchema<unknown, SDTargetingRecommendationsResponse> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline245Schema)),
});

export type SDTargetingRecommendationsResponseV31 = {
  readonly recommendations?: Inline247;
};
export const SDTargetingRecommendationsResponseV31Schema: v.GenericSchema<unknown, SDTargetingRecommendationsResponseV31> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline247Schema)),
});

export type SDTargetingRecommendationsResponseV32 = {
  readonly recommendations?: Inline250;
};
export const SDTargetingRecommendationsResponseV32Schema: v.GenericSchema<unknown, SDTargetingRecommendationsResponseV32> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline250Schema)),
});

export type SDTargetingRecommendationsResponseV33 = {
  readonly recommendations?: Inline255;
};
export const SDTargetingRecommendationsResponseV33Schema: v.GenericSchema<unknown, SDTargetingRecommendationsResponseV33> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline255Schema)),
});

export type SDTargetingRecommendationsResponseV34 = {
  readonly recommendations?: Inline261;
};
export const SDTargetingRecommendationsResponseV34Schema: v.GenericSchema<unknown, SDTargetingRecommendationsResponseV34> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline261Schema)),
});

export type SDTargetingRecommendationsResponseV35 = {
  readonly recommendations?: Inline268;
};
export const SDTargetingRecommendationsResponseV35Schema: v.GenericSchema<unknown, SDTargetingRecommendationsResponseV35> = v.looseObject({
  recommendations: v.optional(v.lazy(() => Inline268Schema)),
});

export type SDTargetingRecommendationsThemes = {
  readonly product?: ReadonlyArray<Inline276>;
};
export const SDTargetingRecommendationsThemesSchema: v.GenericSchema<unknown, SDTargetingRecommendationsThemes> = v.looseObject({
  product: v.optional(v.array(v.lazy(() => Inline276Schema))),
});

export type SDTargetingRecommendationsTypeFilterV31 = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV31Schema: v.GenericSchema<unknown, SDTargetingRecommendationsTypeFilterV31> = v.array(v.string());

export type SDTargetingRecommendationsTypeFilterV32 = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV32Schema: v.GenericSchema<unknown, SDTargetingRecommendationsTypeFilterV32> = v.array(v.string());

export type SDTargetingRecommendationsTypeFilterV33 = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV33Schema: v.GenericSchema<unknown, SDTargetingRecommendationsTypeFilterV33> = v.array(v.string());

export type SDTargetingRecommendationsV31 = {
  readonly products?: ReadonlyArray<Inline281>;
  readonly categories?: ReadonlyArray<Inline282>;
};
export const SDTargetingRecommendationsV31Schema: v.GenericSchema<unknown, SDTargetingRecommendationsV31> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline281Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline282Schema))),
});

export type SDTargetingRecommendationsV32 = {
  readonly products?: ReadonlyArray<Inline284>;
  readonly categories?: ReadonlyArray<Inline285>;
  readonly themes?: Inline286;
};
export const SDTargetingRecommendationsV32Schema: v.GenericSchema<unknown, SDTargetingRecommendationsV32> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline284Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline285Schema))),
  themes: v.optional(v.lazy(() => Inline286Schema)),
});

export type SDTargetingRecommendationsV33 = {
  readonly products?: ReadonlyArray<Inline289>;
  readonly categories?: ReadonlyArray<Inline290>;
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly themes?: Inline292;
};
export const SDTargetingRecommendationsV33Schema: v.GenericSchema<unknown, SDTargetingRecommendationsV33> = v.looseObject({
  products: v.optional(v.array(v.lazy(() => Inline289Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline290Schema))),
  audiences: v.optional(v.array(v.lazy(() => Inline291Schema))),
  themes: v.optional(v.lazy(() => Inline292Schema)),
});

export type SDTargetingRecommendationsV34 = {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly categories?: ReadonlyArray<Inline296>;
  readonly products?: ReadonlyArray<Inline297>;
  readonly themes?: Inline298;
};
export const SDTargetingRecommendationsV34Schema: v.GenericSchema<unknown, SDTargetingRecommendationsV34> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline295Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline296Schema))),
  products: v.optional(v.array(v.lazy(() => Inline297Schema))),
  themes: v.optional(v.lazy(() => Inline298Schema)),
});

export type SDTargetingRecommendationsV35 = {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly categories?: ReadonlyArray<Inline303>;
  readonly contentCategories?: ReadonlyArray<Inline304>;
  readonly products?: ReadonlyArray<Inline305>;
  readonly themes?: Inline306;
};
export const SDTargetingRecommendationsV35Schema: v.GenericSchema<unknown, SDTargetingRecommendationsV35> = v.looseObject({
  audiences: v.optional(v.array(v.lazy(() => Inline302Schema))),
  categories: v.optional(v.array(v.lazy(() => Inline303Schema))),
  contentCategories: v.optional(v.array(v.lazy(() => Inline304Schema))),
  products: v.optional(v.array(v.lazy(() => Inline305Schema))),
  themes: v.optional(v.lazy(() => Inline306Schema)),
});

export type SDThemeRecommendations = {
  readonly products?: ReadonlyArray<Inline310 | Inline311>;
};
export const SDThemeRecommendationsSchema: v.GenericSchema<unknown, SDThemeRecommendations> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline310Schema), v.lazy(() => Inline311Schema)]))),
});

export type SDThemeRecommendationsV34 = {
  readonly products?: ReadonlyArray<Inline313 | Inline315>;
};
export const SDThemeRecommendationsV34Schema: v.GenericSchema<unknown, SDThemeRecommendationsV34> = v.looseObject({
  products: v.optional(v.array(v.union([v.lazy(() => Inline313Schema), v.lazy(() => Inline315Schema)]))),
});

export type SnapshotRequest = {
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
};
export const SnapshotRequestSchema: v.GenericSchema<unknown, SnapshotRequest> = v.looseObject({
  stateFilter: v.optional(v.string()),
  tacticFilter: v.optional(v.string()),
});

export type SnapshotResponse = {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
};
export const SnapshotResponseSchema: v.GenericSchema<unknown, SnapshotResponse> = v.looseObject({
  expiration: v.optional(v.number()),
  fileSize: v.optional(v.number()),
  location: v.optional(v.string()),
  recordType: v.optional(v.string()),
  snapshotId: v.optional(v.string()),
  status: v.optional(v.string()),
  statusDetails: v.optional(v.string()),
});

export type state = "ACTIVE" | "PAUSED" | string;
export const stateSchema: v.GenericSchema<unknown, state> = v.union([v.picklist(["ACTIVE", "PAUSED"]), v.string()]);

export type timeOfDay = {
  readonly endTime?: string;
  readonly startTime?: string;
};
export const timeOfDaySchema: v.GenericSchema<unknown, timeOfDay> = v.looseObject({
  endTime: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

export type UpdateBudgetRulesForSDCampaignsParams = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline366>;
};
export const UpdateBudgetRulesForSDCampaignsParamsSchema: v.GenericSchema<unknown, UpdateBudgetRulesForSDCampaignsParams> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline366Schema))),
});

export type UpdateBudgetRulesForSDCampaignsResponse = {

};
export const UpdateBudgetRulesForSDCampaignsResponseSchema: v.GenericSchema<unknown, UpdateBudgetRulesForSDCampaignsResponse> = v.looseObject({

});

export type UpdateBudgetRulesResponse = {
  readonly responses?: ReadonlyArray<Inline321>;
};
export const UpdateBudgetRulesResponseSchema: v.GenericSchema<unknown, UpdateBudgetRulesResponse> = v.looseObject({
  responses: v.optional(v.array(v.lazy(() => Inline321Schema))),
});

export type UpdateSDBudgetRulesRequest = {
  readonly budgetRulesDetails?: ReadonlyArray<Inline323>;
};
export const UpdateSDBudgetRulesRequestSchema: v.GenericSchema<unknown, UpdateSDBudgetRulesRequest> = v.looseObject({
  budgetRulesDetails: v.optional(v.array(v.lazy(() => Inline323Schema))),
});
